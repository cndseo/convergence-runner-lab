import test from 'node:test';
import assert from 'node:assert/strict';
import {createApiServer,PRODUCTS} from '../server/server.mjs';
import {createDailyPlan,computeDailyScore} from '../src/dailyChallenge.mjs';

async function withApp(options,handler){
 const app=createApiServer({clock:()=>new Date('2026-10-19T21:00:00Z'),...options});
 await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
 const url='http://127.0.0.1:'+app.server.address().port;
 const request=async(path,opts={})=>{
  const res=await fetch(url+path,opts);
  return {status:res.status,data:await res.json()};
 };
 try{await handler(request,app);}
 finally{await app.close();}
}

test('no payments enabled by default, empty daily ranking, and profiles are anonymous',async()=>{
 await withApp({},async(req)=>{
  const health=await req('/api/v1/health');
  assert.equal(health.data.payments,'disabled');
  assert.equal(health.data.leaderboard,true);
  const leaderboard=await req('/api/v1/daily/leaderboard?day=2026-10-19');
  assert.deepEqual(leaderboard.data.leaders,[]);
  const profile=await req('/api/v1/players',{method:'POST'});
  assert.equal(profile.status,201);
  assert.match(profile.data.token,/^[\w-]{43}$/);
  const pay=await req('/api/v1/shop/checkout',{method:'POST'});
  assert.equal(pay.status,503);
 });
});

test('leaderboard validates all 10 choices on server, does not trust client score',async()=>{
 await withApp({},async(req)=>{
  const day='2026-10-19';
  const player=(await req('/api/v1/players',{method:'POST'})).data;
  const headers={'Authorization':'Bearer '+player.token,'Content-Type':'application/json'};
  const path=createDailyPlan(day).proof.winningPath;
  const expected=computeDailyScore(day,path).survivors;
  const post=await req('/api/v1/daily/scores',{method:'POST',headers,
   body:JSON.stringify({day,path,survivors:999,name:'Testeur'})});
  assert.equal(post.status,200);
  assert.equal(post.data.survivors,expected);
  assert.equal(post.data.certified,true);
  assert.equal((await req('/api/v1/daily/scores',{method:'POST',
   headers,body:JSON.stringify({day,path:['left'],survivors:72})})).status,400);
  assert.equal((await req('/api/v1/daily/scores',{method:'POST',
   headers,body:JSON.stringify({day:'2026-10-20',path})})).status,400);
  assert.equal((await req('/api/v1/daily/scores',{method:'POST',
   body:JSON.stringify({day,path})})).status,401);
  const board=await req('/api/v1/daily/leaderboard?day='+day);
  assert.equal(board.data.leaders.length,1);
  assert.deepEqual(board.data.leaders[0],{name:'Testeur',survivors:expected});
 });
});

test('Stripe checkout uses fixed EUR catalog and grants only via verified paid webhook',async()=>{
 let lastSession;
 const stripeClient={
  checkout:{sessions:{create:async data=>{
   lastSession=data;return {url:'https://checkout.stripe.com/c/test_123'};
  }}},
  webhooks:{constructEvent:(payload,signature,secret)=>{
   if(signature!=='sig-test'||secret!=='whsec_test')throw Error('Invalid signature');
   return JSON.parse(payload.toString('utf8'));
  }}
 };
 await withApp({stripeClient,webhookSecret:'whsec_test',paymentsMode:'test'},async(req)=>{
  const profile=(await req('/api/v1/players',{method:'POST'})).data;
  const headers={'Authorization':'Bearer '+profile.token,'Content-Type':'application/json'};
  const checkout=await req('/api/v1/shop/checkout',{method:'POST',headers,body:JSON.stringify({sku:'spiderman',price:1})});
  assert.equal(checkout.status,200);
  assert.equal(lastSession.mode,'payment');
  assert.equal(lastSession.line_items[0].price_data.unit_amount,PRODUCTS.spiderman.cents);
  assert.equal(lastSession.line_items[0].price_data.currency,'eur');
  assert.deepEqual(Object.keys(lastSession.line_items[0].price_data).sort(),['currency','product_data','unit_amount']);
  const session={id:'cs_test_foo',payment_status:'unpaid',currency:'eur',
   amount_total:PRODUCTS.spiderman.cents,client_reference_id:profile.playerId,
   metadata:{game:'convergence',sku:'spiderman',player_id:profile.playerId}};
  const hook=async(data,signature='sig-test')=>req('/api/v1/shop/stripe-webhook',{method:'POST',headers:{'Stripe-Signature':signature,'Content-Type':'application/json'},
   body:JSON.stringify({type:'checkout.session.completed',data:{object:data}})});
  assert.equal((await hook(session,'wrong-signature')).status,400);
  assert.equal((await hook(session)).status,200);
  let inventory=await req('/api/v1/shop/inventory',{headers});
  assert.deepEqual(inventory.data.owned,[]);
  session.payment_status='paid';
  assert.equal((await hook(session)).status,200);
  assert.equal((await hook(session)).status,200);
  inventory=await req('/api/v1/shop/inventory',{headers});
  assert.deepEqual(inventory.data.owned,['spiderman']);
  assert.equal((await req('/api/v1/shop/checkout',{method:'POST',headers,
    body:JSON.stringify({sku:'spiderman'})})).status,409);
 });
});
