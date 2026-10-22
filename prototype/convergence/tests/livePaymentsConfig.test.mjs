import test from 'node:test';
import assert from 'node:assert/strict';
import {createApiServer,PRODUCTS} from '../server/server.mjs';

test('live payments require an HTTPS storefront, a Stripe client and signed webhooks',()=>{
 assert.throws(()=>createApiServer({paymentsMode:'live'}),/Live payments require/);
 assert.throws(()=>createApiServer({
  paymentsMode:'live',gameUrl:'http://jeu.laconvergence.fr/',webhookSecret:'whsec_demo',
  stripeClient:{}
 }),/Live payments require/);
});

test('explicitly configured live catalog reports live and retains updated GenZ pack counts',async()=>{
 const app=createApiServer({
  paymentsMode:'live',gameUrl:'https://jeu.laconvergence.fr/',
  webhookSecret:'whsec_fake_for_unit_tests',stripeClient:{}
 });
 await new Promise(resolve=>app.server.listen(0,'127.0.0.1',resolve));
 try{
  const base='http://127.0.0.1:'+app.server.address().port;
  const health=await(await fetch(base+'/api/v1/health')).json();
  assert.equal(health.payments,'live');
  const catalog=await(await fetch(base+'/api/v1/shop/catalog')).json();
  assert.equal(catalog.payments,'live');
  assert.equal(PRODUCTS.genz3.ammo,6);
  assert.equal(PRODUCTS.genz12.ammo,24);
  assert.deepEqual(catalog.items.filter(p=>p.sku.startsWith('genz')).map(p=>p.price_cents),[99,299]);
 }finally{await app.close();}
});
