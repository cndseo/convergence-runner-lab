import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {createApiServer,PRODUCTS} from '../server/server.mjs';

test('GenZ virtual ammo checkout grants only on signed paid webhook and spends exactly once',async()=>{
 let checkout=null;
 const stripeClient={
  checkout:{sessions:{create:async value=>{checkout=value;return {url:'https://checkout.stripe.com/c/test_genz'};}}},
  webhooks:{constructEvent:(raw,signature,secret)=>{
   if(signature!=='signature-valid'||secret!=='whsec_test')throw Error('Invalid signature');
   return JSON.parse(raw.toString('utf8'));
  }}
 };
 const app=createApiServer({stripeClient,webhookSecret:'whsec_test',paymentsMode:'test'});
 await new Promise(done=>app.server.listen(0,'127.0.0.1',done));
 const base='http://127.0.0.1:'+app.server.address().port;
 const req=async(path,body,token='',signature='')=>{
  const r=await fetch(base+path,{method:body===undefined?'GET':'POST',
   headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{}),
    ...(signature?{'Stripe-Signature':signature}:{})},
   ...(body!==undefined?{body:JSON.stringify(body)}:{})});
  return {status:r.status,data:await r.json()};
 };
 try{
  const player=(await req('/api/v1/players',{})).data,token=player.token;
  assert.equal((await req('/api/v1/genz/consume',{requestId:randomUUID()},token)).status,409);
  let total=0,serial=0;
  for(const [sku,qty] of [['genz3',6],['genz12',24]]){
   assert.equal((await req('/api/v1/shop/checkout',{sku,amount:1},token)).status,200);
   assert.equal(checkout.line_items[0].price_data.unit_amount,PRODUCTS[sku].cents);
   const session={id:'cs_test_genz_'+(++serial),metadata:{game:'convergence',sku,player_id:player.playerId},
    payment_status:'unpaid',amount_total:PRODUCTS[sku].cents,currency:'eur',client_reference_id:player.playerId};
   const webhook=()=>({type:'checkout.session.completed',data:{object:session}});
   assert.equal((await req('/api/v1/shop/stripe-webhook',webhook(),'','bad')).status,400);
   assert.equal((await req('/api/v1/shop/stripe-webhook',webhook(),'','signature-valid')).status,200);
   assert.equal((await req('/api/v1/shop/inventory',undefined,token)).data.genzAmmo,total);
   session.payment_status='paid';
   assert.equal((await req('/api/v1/shop/stripe-webhook',webhook(),'','signature-valid')).status,200);
   assert.equal((await req('/api/v1/shop/stripe-webhook',webhook(),'','signature-valid')).status,200);
   total+=qty;
   const inv=(await req('/api/v1/shop/inventory',undefined,token)).data;
   assert.equal(inv.genzAmmo,total);
   assert.equal(inv.marseilleCharges,0);
   assert.deepEqual(inv.owned,[]);
  }
  const foreign=(await req('/api/v1/players',{})).data;
  const nonce=randomUUID(), first=await req('/api/v1/genz/consume',{requestId:nonce},token);
  assert.equal(first.status,200);assert.equal(first.data.remaining,total-1);
  assert.equal((await req('/api/v1/genz/consume',{requestId:nonce},token)).data.remaining,total-1);
  assert.equal((await req('/api/v1/genz/consume',{requestId:nonce},foreign.token)).status,409);
  assert.equal((await req('/api/v1/genz/consume',{requestId:'invalid'},token)).status,400);
  assert.equal((await req('/api/v1/genz/consume',{requestId:randomUUID()})).status,401);
  for(let n=total-1;n>0;n--){
   const used=await req('/api/v1/genz/consume',{requestId:randomUUID()},token);
   assert.equal(used.status,200);assert.equal(used.data.remaining,n-1);
  }
  assert.equal((await req('/api/v1/genz/consume',{requestId:randomUUID()},token)).status,409);
 }finally{await app.close();}
});
