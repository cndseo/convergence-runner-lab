import test from 'node:test';
import assert from 'node:assert/strict';
import {tvImpactDamage,applyTVImpact,canTapTV,claimTV,isTVTap,TV_RULESET} from '../src/tvRoadRules.mjs';
import {generateCampaignLevel} from '../src/campaignPlan.mjs';
import {solvePlan,replayPlan,generateTacticalLevel} from '../src/tactics.mjs';

test('impact examples, caps, shields, extinction and no resurrection',()=>{
 for(const [n,expected] of [[10,2],[30,3],[60,5],[100,8],[150,12],[312,12],[0,0]])assert.equal(tvImpactDamage(n),expected);
 assert.deepEqual(applyTVImpact({count:30,shields:1}),{count:28,shields:0});
 assert.deepEqual(applyTVImpact({count:30,shields:7}),{count:30,shields:4});
 assert.deepEqual(applyTVImpact({count:1,shields:0}),{count:0,shields:0});
 assert.deepEqual(applyTVImpact({count:0,shields:4}),{count:0,shields:4});
});
test('atomic pair state rejects double tap, second TV and missed/late tap',()=>{
 const pair={z:20,passed:false,tvState:'approaching'};
 assert.equal(canTapTV(pair,0),true);assert.equal(canTapTV(pair,-.1),false);
 assert.equal(canTapTV(pair,18.999),true);assert.equal(canTapTV(pair,19),false);
 assert.equal(canTapTV(pair,21),false);assert.equal(claimTV(pair,'chosen'),true);
 assert.equal(canTapTV(pair,10),false);assert.equal(claimTV(pair,'chosen'),false);assert.equal(claimTV(pair,'missed'),false);
 assert.equal(pair.tvOutcome,'chosen');
 const missed={z:20};assert.equal(claimTV(missed,'missed'),true);assert.equal(claimTV(missed,'chosen'),false);
});
test('short taps only; dragging out and back cannot become a tap',()=>{
 const down={x:10,y:30,time:100,dragged:false};
 assert.equal(isTVTap(down,{x:14,y:34},250),true);
 assert.equal(isTVTap(down,{x:30,y:30},150),false);
 assert.equal(isTVTap(down,{x:10,y:30},421),false);
 assert.equal(isTVTap({...down,dragged:true},{x:10,y:30},250),false);
});
test('exact 3^10 enumeration equals compressed proof and shared replay',()=>{
 const plan=generateCampaignLevel({level:5,seed:20261021});assert.equal(plan.ruleset,TV_RULESET);
 const all=solvePlan(plan),compact=solvePlan(plan,false,{compact:true});
 assert.equal(all.length,59049);assert.equal(compact.reduce((n,p)=>n+p.ways,0),59049);
 assert.equal(all.filter(p=>p.survivors>0).length,plan.proof.winningPaths);
 for(let i=0;i<all.length;i+=97)assert.equal(replayPlan(plan,all[i].path).count,all[i].survivors);
 assert.equal(replayPlan(plan,Array(10).fill('miss')).count,0);
});
test('twelve districts remain free with multiple seeded layouts and miss statistics',()=>{
 for(let level=1;level<=12;level++)for(const seed of [1,17,20261021]){
  const p=generateCampaignLevel({level,seed});
  assert.equal(p.proof.totalPaths,59049);assert.ok(replayPlan(p,p.proof.winningPath).count>0);
  assert.equal(p.proof.byMisses[0].totalPaths,1024);
  assert.ok(p.proof.byMisses[3].winningRate<p.proof.byMisses[0].winningRate);
  assert.equal(p.events.filter(e=>e.type==='choice').length,10);
 }
});
test('Daily retains two choices and rejects miss routes',()=>{
 const p=generateTacticalLevel({level:1,seed:20261021,startCount:5,strength:1});
 assert.equal(solvePlan(p).length,1024);
 assert.throws(()=>replayPlan(p,Array(10).fill('miss')),/Invalid TV route/);
});
