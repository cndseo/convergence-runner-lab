import test from 'node:test';
import assert from 'node:assert/strict';
import { createApiServer, PRODUCTS } from '../server/server.mjs';

const paymentLinks={
 genz3:{id:'plink_test_6',url:'https://buy.stripe.com/test_genz6'},
 genz12:{id:'plink_test_24',url:'https://buy.stripe.com/test_genz24'}
};
test('Stripe Payment Links tie each paid order to one anonymous profile, with exactly-once fulfillment',async()=>{
 const stripeClient={
  webhooks:{constructEvent:(raw,sig,secret)=>{
   if(sig!=='good-signature'||secret!=='whsec_for_test')throw Error('Invalid signature');
   return JSON.parse(raw.toString());
  }}
 };
 const app=createApiServer({stripeClient,paymentLinks,webhookSecret:'whsec_for_test',paymentsMode:'live',
  gameUrl:'https://jeu.laconvergence.fr/'});
 await new Promise(done=>app.server.listen(0,'127.0.0.1',done));
 const url='http://127.0.0.1:'+app.server.address().port;
 const req=async(method,path,body,token='',signature='')=>{
  const r=await fetch(url+path,{method,headers:{'Content-Type':'application/json',
   ...(token?{Authorization:'Bearer '+token}:{}),...(signature?{'Stripe-Signature':signature}:{})},
   ...(body!==undefined?{body:JSON.stringify(body)}:{})});
  return {status:r.status,data:await r.json()};
 };
 try{
  const player=(await req('POST','/api/v1/players',{})).data;
  const catalog=(await req('GET','/api/v1/shop/catalog')).data;
  assert.equal(catalog.payments,'live');
  assert.equal(catalog.items.find(x=>x.sku==='genz3').buyable,true);
  assert.equal(catalog.items.find(x=>x.sku==='genz12').buyable,true);
  assert.equal(catalog.items.find(x=>x.sku==='marseille1').buyable,false);
  assert.equal((await req('POST','/api/v1/shop/checkout',{sku:'marseille1'},player.token)).status,503);
  for(const [sku,link,amount,charges] of [
   ['genz3','plink_test_6',99,6],['genz12','plink_test_24',299,24]]){
   const checkout=await req('POST','/api/v1/shop/checkout',{sku},player.token);
   assert.equal(checkout.status,200);
   assert.equal(new URL(checkout.data.url).searchParams.get('client_reference_id'),player.playerId);
   let event={type:'checkout.session.completed',data:{object:{
    id:'cs_'+sku,payment_link:link,client_reference_id:player.playerId,
    amount_total:amount,currency:'eur',payment_status:'paid'}}};
   assert.equal((await req('POST','/api/v1/shop/stripe-webhook',event,'','bad-signature')).status,400);
   assert.equal((await req('POST','/api/v1/shop/stripe-webhook',event,'','good-signature')).status,200);
   assert.equal((await req('POST','/api/v1/shop/stripe-webhook',event,'','good-signature')).status,200);
   const inv=(await req('GET','/api/v1/shop/inventory',undefined,player.token)).data;
   assert.equal(inv.genzAmmo,sku==='genz3'?6:30);
   assert.equal(inv.marseilleCharges,0);
  }
  const wrong={type:'checkout.session.completed',data:{object:{
   id:'cs_fake',payment_link:'plink_test_6',client_reference_id:player.playerId,
   amount_total:1,currency:'eur',payment_status:'paid'}}};
  assert.equal((await req('POST','/api/v1/shop/stripe-webhook',wrong,'','good-signature')).status,400);
  const inv=(await req('GET','/api/v1/shop/inventory',undefined,player.token)).data;
  assert.equal(inv.genzAmmo,30);
  const none={type:'checkout.session.completed',data:{object:{
   id:'cs_missing_reference',payment_link:'plink_test_6',client_reference_id:null,
   amount_total:99,currency:'eur',payment_status:'paid'}}};
  const unr=await req('POST','/api/v1/shop/stripe-webhook',none,'','good-signature');
  assert.equal(unr.status,200);assert.equal(unr.data.fulfillment,'needs_reconciliation');
 }finally{await app.close();}
});
