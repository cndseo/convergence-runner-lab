import test from 'node:test';
import assert from 'node:assert/strict';
import {createApiServer} from '../server/server.mjs';

const authJson=(data,token)=>({method:'POST',headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:JSON.stringify(data)});
async function withServer(opts,callback){
  const app=createApiServer({gameUrl:'https://jeu.laconvergence.fr/',clock:()=>new Date('2026-10-22T14:00:00Z'),...opts});
  await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const url='http://127.0.0.1:'+app.server.address().port;
  const call=async(path,options={})=>{
    const res=await fetch(url+path,{redirect:'manual',...options});
    const type=res.headers.get('content-type')||'';
    return {status:res.status, data:type.includes('application/json')?await res.json():null, headers:res.headers};
  };
  try{await callback(call,app.db);}finally{await app.close();}
}
test('email login issues a short-lived single-use ticket without Supabase',async()=>{
  const sent=[];
  await withServer({sendEmail:async(email,url)=>sent.push({email,url}),adminSubjects:'email:admin@example.com'},async(call)=>{
    assert.deepEqual((await call('/api/v1/auth/status')).data,{google:false,email:true,apple:false});
    assert.equal((await call('/api/v1/auth/email/start',authJson({email:'ADMIN@EXAMPLE.COM'}))).status,200);
    assert.equal(sent.length,1);
    assert.equal(sent[0].email,'admin@example.com');
    const link=new URL(sent[0].url);
    assert.equal(link.hostname,'jeu.laconvergence.fr');
    const ticket=new URLSearchParams(link.hash.slice(1)).get('auth_ticket');
    assert.match(ticket,/^[\w-]{43}$/);
    const guest=(await call('/api/v1/players',{method:'POST'})).data;
    const login=await call('/api/v1/account/link',authJson({guestToken:guest.token},ticket));
    assert.equal(login.status,200);
    assert.equal(login.data.playerId,guest.playerId);
    assert.equal((await call('/api/v1/account/link',authJson({},ticket))).status,401);
    assert.equal((await call('/api/v1/admin/summary',{headers:{Authorization:'Bearer '+login.data.token}})).status,200);
    assert.equal((await call('/api/v1/auth/email/start',authJson({email:'ADMIN@EXAMPLE.COM'}))).status,200);
    assert.equal(sent.length,1,'cooldown prevents mail floods');
    assert.equal((await call('/api/v1/auth/email/start',authJson({email:'bad'}))).status,400);
  });
});
test('Google callback enforces state cookie, nonce, proof exchange and one-time use',async()=>{
  let nonce,verifier;
  const googleOAuthClient={
    generateAuthUrl:opts=>{
      nonce=opts.nonce;
      assert.equal(opts.code_challenge_method,'S256');
      assert.match(opts.code_challenge,/^[\w-]{43}$/);
      return 'https://accounts.google.com/o/oauth2/v2/auth?state='+opts.state;
    },
    getToken:async opts=>{verifier=opts.codeVerifier;assert.equal(opts.code,'valid-code');return {tokens:{id_token:'verified-test-token'}};},
    verifyIdToken:async args=>{
      assert.equal(args.audience,'test-client-id');
      return {getPayload:()=>({nonce,sub:'verified-google-user-id'})};
    }
  };
  await withServer({publicApiUrl:'https://api.le84500.fr/convergence',googleClientId:'test-client-id',
    googleClientSecret:'local-test-secret',googleOAuthClient},async call=>{
    const started=await call('/api/v1/auth/google/start?destination=cockpit');
    assert.equal(started.status,302);
    const state=new URL(started.headers.get('location')).searchParams.get('state');
    assert.match(started.headers.get('set-cookie'),/HttpOnly; Secure; SameSite=Lax/);
    assert.match(started.headers.get('set-cookie'),/Path=\/convergence\/api\/v1\/auth\/google;/);
    const cookie=started.headers.get('set-cookie').split(';')[0];
    assert.equal((await call('/api/v1/auth/google/callback?state='+state+'&code=valid-code')).status,400);
    const done=await call('/api/v1/auth/google/callback?state='+state+'&code=valid-code',{headers:{Cookie:cookie}});
    assert.equal(done.status,302);
    assert.equal(new URL(done.headers.get('location')).pathname,'/cockpit.html');
    assert.match(verifier,/^[\w-]{43}$/);
    const ticket=new URLSearchParams(new URL(done.headers.get('location')).hash.slice(1)).get('auth_ticket');
    assert.equal((await call('/api/v1/account/link',authJson({},ticket))).status,200);
    assert.equal((await call('/api/v1/account/link',authJson({},ticket))).status,401);
    assert.equal((await call('/api/v1/auth/google/callback?state='+state+'&code=valid-code',{headers:{Cookie:cookie}})).status,400);
  });
});
test('without external credentials every login method is safely unavailable',async()=>{
  await withServer({},async call=>{
    assert.deepEqual((await call('/api/v1/auth/status')).data,{google:false,email:false,apple:false});
    assert.equal((await call('/api/v1/auth/email/start',authJson({email:'test@example.com'}))).status,503);
    assert.equal((await call('/api/v1/auth/google/start')).status,503);
  });
});

test('production identity rejects insecure game origin',()=>{
  const original=process.env.NODE_ENV;
  process.env.NODE_ENV='production';
  try{assert.throws(()=>createApiServer({sendEmail:async()=>{}}),/requires HTTPS game URL/);}
  finally{if(original===undefined)delete process.env.NODE_ENV;else process.env.NODE_ENV=original;}
});
