import test from 'node:test';
import assert from 'node:assert/strict';
import {applyChoice,applyCombat,generateTacticalLevel,replayPlan,greedyPath} from '../src/tactics.mjs';
test('arithmetic, rounding, conditions and shield consumption',()=>{
 assert.deepEqual(applyChoice({count:5,shields:0},{op:'/',value:2}),{count:2,shields:0});
 assert.equal(applyChoice({count:5,shields:0},{op:'%',value:50}).count,7);
 assert.deepEqual(applyChoice({count:5,shields:3},{op:'damage',value:6}),{count:2,shields:0});
 assert.deepEqual(applyCombat({count:5,shields:3},17,2),{count:0,shields:0});
 assert.equal(applyChoice({count:16,shields:0},{op:'conditional',condition:'atMost',threshold:15,value:30,elseValue:-5}).count,11);
 assert.equal(applyChoice({count:40,shields:0},{op:'*',value:3}).count,72);
 assert.equal(applyChoice({count:1,shields:0},{op:'-',value:2}).count,0);
 assert.equal(applyChoice({count:0,shields:0},{op:'+',value:20}).count,0);
});
test('800 generated levels: witness wins, losing routes exist, greedy loses',()=>{
 let greedyWins=0;
 for(const startCount of [5,50])for(const strength of [1,3])for(let seed=1;seed<=200;seed++){
  const plan=generateTacticalLevel({level:seed%30+1,seed,startCount,strength});
  assert.ok(replayPlan(plan,plan.proof.winningPath).count>0,JSON.stringify({seed,startCount,strength}));
  assert.ok(plan.proof.winningPaths>0&&plan.proof.winningPaths<plan.proof.totalPaths);
  if(replayPlan(plan,greedyPath(plan).path).count>0)greedyWins++;
  assert.equal(plan.proof.winningPath.length,10);
 }
 assert.equal(greedyWins,0);
});
test('same configuration reproduces the same puzzle',()=>{
 const settings={level:7,seed:322,startCount:5,strength:2};
 assert.deepEqual(generateTacticalLevel(settings),generateTacticalLevel(settings));
});
