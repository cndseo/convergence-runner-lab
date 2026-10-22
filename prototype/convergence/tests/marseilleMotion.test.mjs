import test from 'node:test';
import assert from 'node:assert/strict';
import {RUSH_GROUPS,RUSH_SECONDS,rushRoute,sampleRush,policeRetreat} from '../src/marseilleMotion.mjs';
test('support routes enter from three directions, never teleport, and exit at different times',()=>{
 const routes=Array.from({length:RUSH_GROUPS},(_,i)=>rushRoute(i,-40));
 assert.equal(new Set(routes.map(r=>r.lane)).size,3);
 assert.ok(new Set(routes.map(r=>r.delay+r.duration)).size>5);
 for(const r of routes){
  let previous=sampleRush(r,0);
  for(let t=1/120;t<RUSH_SECONDS;t+=1/120){
   const p=sampleRush(r,t);
   assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.z));
   assert.ok(Math.hypot(p.x-previous.x,p.z-previous.z)<.4,'no position jumps at knots');
   assert.ok(p.opacity>=0&&p.opacity<=1);
   if(!p.done && t>r.delay+.02){
    assert.ok(p.speed>.3,'the running crowd never slides to a stationary pose');
    if(p.view==='front')assert.ok(p.dz>0);
    if(p.view==='back')assert.ok(p.dz<0);
    if(p.view.startsWith('quarter'))assert.equal(p.mirror,p.dz>=0?p.dx<0:p.dx>0);
   }
   previous=p;
  }
  assert.equal(sampleRush(r,RUSH_SECONDS).done,true);
  assert.equal(sampleRush(r,RUSH_SECONDS).opacity,0);
 }
});
test('CRS react progressively, retreat continuously, and keep moving off the road',()=>{
 const origin={x:0,y:0,z:-40,yaw:0};
 const states=Array.from({length:12},(_,i)=>policeRetreat(i,2.6,origin));
 assert.ok(states.some(p=>p.started));assert.ok(states.some(p=>!p.started));
 for(let i=0;i<12;i++){
  const early=policeRetreat(i,4,origin),late=policeRetreat(i,8.8,origin);
  assert.ok(late.z<early.z-10);assert.ok(Math.abs(late.x)>Math.abs(early.x));
  assert.ok(Math.abs(late.x)>10);
 }
});
