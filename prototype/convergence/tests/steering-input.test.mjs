import test from 'node:test';
import assert from 'node:assert/strict';
import {steeringThreshold,steerFromPixels,DRAG_START_SLOP,STEER_GAIN} from '../src/steeringRules.mjs';
import {TV_TAP_SLOP,isTVTap} from '../src/tvRoadRules.mjs';
test('steering reacts after a two-pixel swipe away from TVs but preserves TV tap tolerance',()=>{
 assert.equal(DRAG_START_SLOP,2);
 assert.equal(steeringThreshold(false,TV_TAP_SLOP),2);
 assert.equal(steeringThreshold(true,TV_TAP_SLOP),10);
 assert.equal(isTVTap({x:100,y:100,dragged:false,time:0},{x:108,y:100},100),true);
 assert.equal(isTVTap({x:100,y:100,dragged:true,time:0},{x:108,y:100},100),false);
});
test('drag steering is thirty percent more responsive in CSS pixels and still clamps to lanes',()=>{
 assert.equal(STEER_GAIN,.026);
 assert.equal(steerFromPixels(0,100),2.6);
 assert.equal(steerFromPixels(0,-100),-2.6);
 assert.equal(steerFromPixels(3.4,100),3.5);
 assert.equal(steerFromPixels(-3.4,-100),-3.5);
 assert.equal(steerFromPixels(.4,0),.4);
});
