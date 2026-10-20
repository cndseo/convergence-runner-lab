import test from 'node:test';
import assert from 'node:assert/strict';
import {PREMIUM_CATALOG} from '../src/challengeHub.js';
import {PRODUCTS} from '../server/server.mjs';

test('prices exactly match approved €1.99 per character and €2.99 per Marseille intervention',()=>{
 const expected={spiderman:199,dinosaur:199,marseille1:299,marseille3:897,genz3:99,genz12:299,marseille10:2990};
 assert.deepEqual(Object.fromEntries(PREMIUM_CATALOG.map(i=>[i.id,i.cents])),expected);
 assert.deepEqual(Object.fromEntries(Object.entries(PRODUCTS).map(([id,p])=>[id,p.cents])),expected);
 assert.equal(PRODUCTS.marseille1.cents/PRODUCTS.marseille1.charges,299);
 assert.equal(PRODUCTS.marseille3.cents/PRODUCTS.marseille3.charges,299);
 assert.equal(PRODUCTS.marseille10.cents/PRODUCTS.marseille10.charges,299);
});

test('paid characters are visual only, and all boosters are campaign-only consumables',()=>{
 for(const id of ['spiderman','dinosaur']){
  assert.equal(PRODUCTS[id].charges,undefined);
  assert.equal(PREMIUM_CATALOG.find(x=>x.id===id).cents,199);
 }
 for(const id of ['marseille1','marseille3','marseille10']){
  assert.ok(PRODUCTS[id].charges>0);
  assert.match(PRODUCTS[id].description,/campagne/);
 }
});

test('GenZ bundles are server-priced consumables, independently from Marseille support',()=>{
 assert.equal(PRODUCTS.genz3.ammo,6);
 assert.equal(PRODUCTS.genz12.ammo,24);
 assert.equal(PRODUCTS.genz3.cents,99);
 assert.equal(PRODUCTS.genz12.cents,299);
 assert.equal(PRODUCTS.genz3.charges,undefined);
 assert.equal(PRODUCTS.marseille1.ammo,undefined);
});
