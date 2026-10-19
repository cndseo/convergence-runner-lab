import test from 'node:test';
import assert from 'node:assert/strict';
import {LBD_SPEED,LBD_MAX_RANGE,isInFireRange,segmentSphereHit,impactSeverity} from '../src/lbdMath.mjs';
test('LBD shots can originate far from the player',()=>{
 assert.ok(LBD_MAX_RANGE>=50);
 assert.ok(LBD_SPEED>=50);
 assert.equal(isInFireRange(45),true);
 assert.equal(isInFireRange(5),false);
 assert.equal(isInFireRange(61),false);
});
test('high velocity bullets cannot tunnel through a moving target sphere',()=>{
 const a={x:0,y:1,z:-45},b={x:0,y:1,z:15},c={x:0,y:1,z:0};
 assert.ok(segmentSphereHit(a,b,c,.5)!==null);
 assert.equal(segmentSphereHit(a,b,{x:2,y:1,z:0},.5),null);
 assert.equal(segmentSphereHit(a,a,a,.3),0);
});
test('injury categories are defined and deterministic',()=>{
 const allowed=['eye','arm','leg','bruise'];
 for(let n=0;n<100;n++)assert.ok(allowed.includes(impactSeverity(n)));
 assert.equal(impactSeverity(6),'eye');
});
