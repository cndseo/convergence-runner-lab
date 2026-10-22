import test from 'node:test';
import assert from 'node:assert/strict';
import {FIXED_TV_CATALOG,FIXED_TV_KEYS,fixedTVFile,makeFixedPairs} from '../src/fixedTVCatalog.mjs';
import {generateTacticalLevel,solvePlan,replayPlan,greedyPath} from '../src/tactics.mjs';

test('one stable image per exact operation and no hidden alternate amount',()=>{
 for(const [key,data] of Object.entries(FIXED_TV_CATALOG)){
  const {file,...rest}=data;
  const choice={...rest,tvKey:key};
  assert.equal(fixedTVFile(choice),file);
  assert.throws(()=>fixedTVFile({...choice,value:choice.value+1}),/mismatch/i);
 }
 assert.equal(FIXED_TV_KEYS.length,16);
 assert.equal(makeFixedPairs().flat().length,20);
});
test('fixed PNG values, enemies, and winning path agree over 100 seeds',()=>{
 for(let seed=1;seed<=100;seed++){
  const plan=generateTacticalLevel({seed,level:(seed%12)+1,startCount:5,strength:1});
  assert.equal(plan.tvCatalog,'fixed16');
  assert.deepEqual(plan.events.filter(e=>e.type==='enemy').map(e=>e.kind),['crs','bac']);
  assert.deepEqual([...new Set(plan.events.filter(e=>e.type==='choice')
   .flatMap(e=>[e.left.tvKey,e.right.tvKey]))].sort(),[...FIXED_TV_KEYS].sort());
  for(const e of plan.events.filter(e=>e.type==='choice'))
   for(const c of [e.left,e.right])assert.equal(fixedTVFile(c),FIXED_TV_CATALOG[c.tvKey].file);
  assert.equal(solvePlan(plan).length,1024);
  assert.ok(replayPlan(plan,plan.proof.winningPath).count>0);
  assert.equal(replayPlan(plan,greedyPath(plan).path).count,0);
 }
});
