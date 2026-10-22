import test from 'node:test';
import assert from 'node:assert/strict';
import {createApiServer,PRODUCTS} from '../server/server.mjs';

const progress=(level=3)=>({
  parisVersion:1,parisLevel:level,level,campaignComplete:false,coins:82,
  crowdUpgrade:2,strengthUpgrade:2,ownedSkins:['blue','green'],
  equippedSkin:'green',ownedThemes:['default'],equippedTheme:'default'
});
const json=(data,token)=>({method:'POST',headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},body:JSON.stringify(data)});
async function run(handler){
  const app=createApiServer({
    clock:()=>new Date('2026-10-22T12:00:00.000Z'),
    verifyIdentity:async token=>token==='google-a'?'auth-user-a':token==='google-b'?'auth-user-b':null,
    adminSubjects:'auth-user-a',gameUrl:'http://127.0.0.1:4320/',
  });
  await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const base='http://127.0.0.1:'+app.server.address().port;
  const request=async(path,opts={})=>{
    const r=await fetch(base+path,opts);return {code:r.status,data:await r.json()};
  };
  try{await handler(request,app.db);}finally{await app.close();}
}
test('Guest scores and purchases survive Google login on second device',async()=>{
  await run(async(req,db)=>{
    const guest=(await req('/api/v1/players',{method:'POST'})).data;
    assert.equal((await req('/api/v1/account/progress',json({revision:0,progress:progress()},guest.token))).code,200);
    db.prepare('INSERT INTO inventory VALUES(?,?,?)').run(guest.playerId,'spiderman','2026-10-22T12:00:00Z');
    db.prepare('INSERT INTO marseille_charges VALUES(?,?)').run(guest.playerId,4);
    const link=await req('/api/v1/account/link',json({guestToken:guest.token},'google-a'));
    assert.equal(link.code,200);assert.equal(link.data.playerId,guest.playerId);
    assert.notEqual(link.data.token,guest.token);
    assert.equal((await req('/api/v1/shop/inventory',{headers:{Authorization:'Bearer '+guest.token}})).code,401);
    const other=await req('/api/v1/account/link',json({},'google-a'));
    assert.equal(other.data.playerId,guest.playerId);
    assert.notEqual(other.data.token,link.data.token);
    const headers={Authorization:'Bearer '+other.data.token};
    assert.deepEqual((await req('/api/v1/account/progress',{headers})).data.progress,progress());
    const owned=(await req('/api/v1/shop/inventory',{headers})).data;
    assert.deepEqual(owned.owned,['spiderman']);assert.equal(owned.marseilleCharges,4);
    assert.equal((await req('/api/v1/account/logout',{method:'POST',headers})).code,200);
    assert.equal((await req('/api/v1/shop/inventory',{headers})).code,401);
    assert.equal((await req('/api/v1/shop/inventory',{headers:{Authorization:'Bearer '+link.data.token}})).code,200);
  });
});
test('Guest merge preserves paid inventory and carries best campaign progress',async()=>{
  await run(async(req,db)=>{
    const orig=(await req('/api/v1/players',{method:'POST'})).data;
    const first=(await req('/api/v1/account/link',json({guestToken:orig.token},'google-a'))).data;
    const fresh=(await req('/api/v1/players',{method:'POST'})).data;
    db.prepare('INSERT INTO inventory VALUES(?,?,?)').run(fresh.playerId,'dinosaur','2026-10-22T12:00:00Z');
    db.prepare('INSERT INTO genz_ammo VALUES(?,?)').run(fresh.playerId,10);
    assert.equal((await req('/api/v1/account/progress',json({revision:0,progress:progress(7)},fresh.token))).code,200);
    assert.equal((await req('/api/v1/account/progress',json({revision:0,progress:progress(2)},first.token))).code,200);
    const merged=(await req('/api/v1/account/link',json({guestToken:fresh.token},'google-a'))).data;
    assert.equal(merged.playerId,orig.playerId);
    const headers={Authorization:'Bearer '+merged.token};
    assert.equal((await req('/api/v1/account/progress',{headers})).data.progress.level,7);
    const inventory=(await req('/api/v1/shop/inventory',{headers})).data;
    assert.deepEqual(inventory.owned,['dinosaur']);assert.equal(inventory.genzAmmo,10);
    assert.equal((await req('/api/v1/shop/inventory',{headers:{Authorization:'Bearer '+fresh.token}})).code,401);
  });
});
test('identity, admin and progress endpoints reject unauthorized calls',async()=>{
  await run(async(req)=>{
    assert.equal((await req('/api/v1/account/link',json({},'fake'))).code,401);
    assert.equal((await req('/api/v1/admin/summary')).code,403);
    assert.equal((await req('/api/v1/admin/summary',{headers:{Authorization:'Bearer google-b'}})).code,403);
    const summary=await req('/api/v1/admin/summary',{headers:{Authorization:'Bearer google-a'}});
    assert.equal(summary.code,200);assert.equal(summary.data.active,0);
    const guest=(await req('/api/v1/players',{method:'POST'})).data;
    assert.equal((await req('/api/v1/account/progress',json({revision:0,progress:{coins:999999999999}},guest.token))).code,400);
    assert.equal((await req('/api/v1/account/progress',json({revision:0,progress:progress(2)},guest.token))).code,200);
    const conflict=await req('/api/v1/account/progress',json({revision:0,progress:progress(3)},guest.token));
    assert.equal(conflict.code,409);assert.equal(conflict.data.revision,1);
    assert.equal((await req('/api/v1/presence',json({sessionId:'not-a-uuid',source:'x'}))).code,400);
    const valid='20d0400f-0d51-4924-9d9a-f22000000000';
    assert.equal((await req('/api/v1/presence',json({sessionId:valid,source:'tiktok'}))).code,200);
    const after=await req('/api/v1/admin/summary',{headers:{Authorization:'Bearer google-a'}});
    assert.equal(after.data.active,1);
    assert.deepEqual(after.data.sources,[{source:'tiktok',n:1}]);
  });
});
test('a different authenticated user cannot claim an already-linked guest account',async()=>{
  await run(async(req)=>{
    const g=(await req('/api/v1/players',{method:'POST'})).data;
    const a=(await req('/api/v1/account/link',json({guestToken:g.token},'google-a'))).data;
    const b=(await req('/api/v1/account/link',json({guestToken:a.token},'google-b'))).data;
    assert.notEqual(a.playerId,b.playerId);
  });
});