import test from 'node:test';
import assert from 'node:assert/strict';
import {generateCampaignLevel,campaignTargets} from '../src/campaignPlan.mjs';
import {solvePlan,replayPlan,greedyPath,sufferLoss} from '../src/tactics.mjs';
import {applyCampaignCombat,applyCampaignPatrol,campaignPatrolDamage,campaignCombatExchange} from '../src/campaignCombatRules.mjs';

test('patrol strikes remove real tactical protesters and first exhaust protection',()=>{
 assert.deepEqual(applyCampaignPatrol({count:30,shields:0},4),{count:27,shields:0});
 assert.deepEqual(applyCampaignPatrol({count:30,shields:1},4),{count:28,shields:0});
 assert.deepEqual(applyCampaignPatrol({count:30,shields:8},4),{count:30,shields:5});
 assert.ok(campaignPatrolDamage(70,12)>campaignPatrolDamage(5,1));
 assert.deepEqual(applyCampaignPatrol({count:0,shields:4},12),{count:0,shields:4});
});

test('large real barrages exchange blows with strength proportional to crowd',()=>{
 const big=campaignCombatExchange({count:30,shields:0},14,1);
 assert.equal(big.killed,3);assert.equal(big.remaining,11);
 assert.equal(big.hits,2);assert.equal(big.lost,2);
 const stronger=campaignCombatExchange({count:72,shields:0},14,1);
 assert.ok(stronger.killed>big.killed);
 assert.ok(applyCampaignCombat({count:30,shields:0},14).count<30);
 assert.ok(applyCampaignCombat({count:30,shields:0},14).count>0);
 const guard=campaignCombatExchange({count:30,shields:3},14,1);
 assert.equal(guard.lost,0);assert.equal(guard.absorbed,2);
});

test('five active flank patrols and four substantive barrages per advanced level with certified path',()=>{
 for(let level=1;level<=12;level++)for(const seed of [1,17,20261021,level*20261019]){
  const plan=generateCampaignLevel({level,seed});
  assert.equal(plan.ruleset,'campaign-patrol-20261021');
  const patrols=plan.events.filter(e=>e.type==='patrol');
  const fronts=plan.events.filter(e=>e.type==='enemy');
  assert.equal(patrols.length,level===1?3:5);
  assert.equal(fronts.length,level===1?2:4);
  assert.ok(fronts.every(x=>x.count>=6));
  assert.equal(plan.events.filter(e=>e.type==='choice').length,10);
  assert.ok(patrols.every(p=>p.z>14&&p.z<180));
  assert.ok(patrols.every(p=>!fronts.some(f=>Math.abs(f.z-p.z)<3)));
  assert.ok(plan.proof.winningRate>=campaignTargets(level).min);
  assert.ok(replayPlan(plan,plan.proof.winningPath).count>0);
  if(level<=3)assert.ok(replayPlan(plan,greedyPath(plan).path).count>0);
 }
});

test('all 1024 routes solved from identical state transitions',()=>{
 const plan=generateCampaignLevel({level:5,seed:20261021});
 const results=solvePlan(plan);
 assert.equal(results.length,1024);
 for(const row of results){
  const end=replayPlan(plan,row.path);
  assert.equal(row.survivors,end.count);
  assert.equal(row.count,applyCampaignCombat({count:row.count,shields:row.shields},0).count);
 }
});
