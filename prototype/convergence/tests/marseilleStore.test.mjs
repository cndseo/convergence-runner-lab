import test from 'node:test';
import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {createApiServer,PRODUCTS} from '../server/server.mjs';

test('real Stripe webhook grants 1/3/10 charges idempotently; one trigger consumes one',async()=>{
 let currentCheckout=null,serial=0;
 const stripeClient={
  checkout:{sessions:{create:async data=>{
   currentCheckout=data;
   return {url:'https://checkout.stripe.com/c/test_mock'};
  }}},
  webhooks:{constructEvent:(raw,signature,secret)=>{
   if(signature!=='signature-valid'||secret!=='whsec_example')throw Error('Invalid signature');
   return JSON.parse(raw.toString('utf8'));
  }}
 };
 const app=createApiServer({stripeClient,webhookSecret:'whsec_example',paymentsMode:'test',
  clock:()=>new Date('2026-10-19T20:00:00Z')});
 await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
 const url='http://127.0.0.1:'+app.server.address().port;
 async function req(path,body,token='',signature=''){
  const r=await fetch(url+path,{method:body===undefined?'GET':'POST',
   headers:{'Content-Type':'application/json',...(token?{'Authorization':'Bearer '+token}:{}),
    ...(signature?{'Stripe-Signature':signature}:{})},
   ...(body!==undefined?{body:JSON.stringify(body)}:{})});
  return {code:r.status,data:await r.json()};
 }
 try{
  const player=(await req('/api/v1/players',{})).data;
  assert.ok(player.token);
  const owner=player.token;
  let remaining=0;
  for(const [sku,amount] of [['marseille1',1],['marseille3',3],['marseille10',10]]){
   const checkout=await req('/api/v1/shop/checkout',{sku},owner);
   assert.equal(checkout.code,200);
   assert.equal(currentCheckout.line_items[0].price_data.unit_amount,PRODUCTS[sku].cents);
   const session={id:'cs_test_'+(++serial),metadata:{game:'convergence',sku,player_id:player.playerId},
    payment_status:'paid',amount_total:PRODUCTS[sku].cents,currency:'eur',client_reference_id:player.playerId};
   const evt={type:'checkout.session.completed',data:{object:session}};
   assert.equal((await req('/api/v1/shop/stripe-webhook',evt,'','signature-valid')).code,200);
   assert.equal((await req('/api/v1/shop/stripe-webhook',evt,'','signature-valid')).code,200);
   remaining+=amount;
   const inv=await req('/api/v1/shop/inventory',undefined,owner);
   assert.equal(inv.data.marseilleCharges,remaining);
   assert.deepEqual(inv.data.owned,[]);
  }
  for(let n=remaining;n>0;n--){
   const nonce=randomUUID();
   const spent=await req('/api/v1/support/consume',{requestId:nonce},owner);
   assert.equal(spent.code,200);
   assert.equal(spent.data.remaining,n-1);
   const retry=await req('/api/v1/support/consume',{requestId:nonce},owner);
   assert.equal(retry.code,200);
   assert.equal(retry.data.remaining,n-1);
  }
  assert.equal((await req('/api/v1/support/consume',{requestId:randomUUID()},owner)).code,409);
  const inv=await req('/api/v1/shop/inventory',undefined,owner);
  assert.equal(inv.data.marseilleCharges,0);
  assert.equal((await req('/api/v1/support/consume',{requestId:randomUUID()})).code,401);
 } finally {await app.close();}
});
