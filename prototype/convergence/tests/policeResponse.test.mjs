import test from 'node:test';
import assert from 'node:assert/strict';
import {policeResponse} from '../src/policeResponse.mjs';
import {crowdDensity} from '../src/humanDensity.mjs';

test('the displayed participant count follows the actual renderer layout',()=>{
 for(const tactical of [0,1,5,11,24,30,48,72]){
  for(const shields of [0,6,24,48]){
   const response=policeResponse(tactical,shields);
   assert.equal(response.visible,crowdDensity(tactical,shields).total);
  }
 }
});

test('visible police reserves scale with crowd size, with mobile upper bounds',()=>{
 const small=policeResponse(5,0);
 const medium=policeResponse(30,6);
 const large=policeResponse(72,48);
 assert.equal(small.motorcycles,2,'keep the original small-crowd attack');
 assert.ok(medium.motorcycles>=4,'a large marching group needs more than two motorcycles');
 assert.ok(medium.crsPerFlank>small.crsPerFlank);
 assert.equal(large.motorcycles,8);
 assert.equal(large.crsPerFlank,24);
 for(let n=1;n<=72;n++){
  const response=policeResponse(n,24);
  assert.ok(response.motorcycles<=8&&response.crsPerFlank<=24);
  assert.ok(response.streetMotorcycles<=6);
 }
});

test('pure visual response has no damage or inventory inputs',()=>{
 const source=String(policeResponse);
 assert.doesNotMatch(source,/damage|coins|ammo|stripe|applyGate|shields\s*[-+]=/);
});
