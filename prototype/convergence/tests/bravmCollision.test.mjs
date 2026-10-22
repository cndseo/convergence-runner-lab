import test from 'node:test';
import assert from 'node:assert/strict';
import {applyChoice,gateLabel,generateTacticalLevel,replayPlan} from '../src/tactics.mjs';

test('BRAV-M portal always subtracts exactly three and keeps shields unchanged',()=>{
 const gate={op:'damage',kind:'bravm',value:3,percent:false};
 for(const count of [1,2,3,5,28,72])for(const shields of [0,5,48]){
  const before={count,shields},after=applyChoice(before,gate);
  assert.equal(after.count,Math.max(0,count-3));
  assert.equal(after.shields,shields);
 }
 assert.equal(gateLabel(gate).title,'−3');
 assert.match(gateLabel(gate).detail,/3 MANIFESTANTS/);
});
test('solver and gameplay choices include only one BRAV-M penalty per crossing',()=>{
 for(const seed of [1,42,20261020]){
  const level=generateTacticalLevel({level:1,seed,startCount:5,strength:1});
  const choices=level.events.flatMap(e=>e.type==='choice'?[e.left,e.right]:[]);
  const gates=choices.filter(e=>e.kind==='bravm');
  assert.equal(gates.length,1);
  assert.equal(gates[0].value,3);
  assert.equal(gates[0].percent,false);
  assert.ok(replayPlan(level,level.witness||Array(10).fill('left')).count>=0);
 }
});
