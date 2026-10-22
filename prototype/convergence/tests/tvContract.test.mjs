import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {FIXED_TV_CATALOG,FIXED_TV_KEYS,MARSEILLE_TV,makeFixedTVChoice,canonicalTVChoice} from '../src/fixedTVCatalog.mjs';
import {applyChoice,solvePlan} from '../src/tactics.mjs';
import {changeRoster,familyRoster,rosterSummary} from '../src/heroRules.mjs';
import {createDailyPlan} from '../src/dailyChallenge.mjs';

// Independent acceptance table, read against every original PNG in the contact sheet.
export const TV_EXPECTED={
 renforts10:[10,0],mobilisation2:['double',0],protections14:[0,14],protections21:[0,21],
 boucliers5:[0,5],ralliement50:['half-more',0],genz6:[6,0],pompiers4:[4,0],
 infirmieres3:[3,0],gilets5:[5,0],barrage15:['hit15',0],fourgons20:['hit20',0],
 obstacles40:['hit40pct',0],departs5:[-5,0],dispersion2:['halve',0],bravm3:[-3,0]
};
function expected(s,key){
 const [n,shield]=TV_EXPECTED[key],r={...s};
 if(typeof n==='number')r.count=Math.max(0,r.count+n);
 else if(n==='double')r.count*=2;
 else if(n==='half-more')r.count=Math.floor(r.count*1.5);
 else if(n==='halve')r.count=Math.floor(r.count/2);
 else {const damage=n==='hit15'?15:n==='hit20'?20:Math.ceil(r.count*.4);
  const blocked=Math.min(damage,r.shields);r.shields-=blocked;r.count=Math.max(0,r.count-damage+blocked);}
 r.shields+=shield;return r;
}
test('all 16 approved PNG hashes and the Marseille gift remain byte-identical',()=>{
 for(const d of [...Object.values(FIXED_TV_CATALOG),MARSEILLE_TV]){
  const b=readFileSync(new URL('../public/assets/'+d.folder+'/'+d.file,import.meta.url));
  assert.equal(createHash('sha256').update(b).digest('hex'),d.sha256,d.id);
  assert.equal(d.id,makeFixedTVChoice(d.id).tvKey);assert.ok(Object.isFrozen(d));
  assert.ok(d.resource&&d.formula&&d.family);
 }
});
test('every TV has exact independent arithmetic before, at and above the former caps',()=>{
 for(const count of [1,10,30,70,72,100,150])for(const shields of [0,2,47,48,60])for(const key of FIXED_TV_KEYS){
  const before={count,shields,marseilleCharges:2,ammo:6},after=applyChoice(before,makeFixedTVChoice(key));
  assert.deepEqual(after,expected(before,key),JSON.stringify({key,count,shields}));
  assert.equal(before.count,count);
  if(['+','*','%','shield'].includes(FIXED_TV_CATALOG[key].op)){
   assert.ok(after.count>=count);assert.ok(after.shields>=shields);
  }
 }
});
test('a mismatched sign, value, faction or hidden damage kind is rejected before applying a TV',()=>{
 for(const patch of [{op:'-'},{value:-10},{bonusFaction:'genz'},{kind:'bravm'}])
  assert.throws(()=>canonicalTVChoice({...makeFixedTVChoice('renforts10'),...patch}),/mismatch/);
});
test('specific families are added exactly and multiplication preserves the composition',()=>{
 let roster=familyRoster(70,'gilets');
 for(const [key,family,n] of [['genz6','genz',6],['pompiers4','pompiers',4],['infirmieres3','infirmieres',3]]){
  const before=rosterSummary(roster);roster=changeRoster(roster,roster.length+n,makeFixedTVChoice(key),'gilets');
  const after=rosterSummary(roster);for(const f of Object.keys(before))assert.equal(after[f]-before[f],f===family?n:0);
 }
 const before=rosterSummary(roster);roster=changeRoster(roster,roster.length*2,makeFixedTVChoice('mobilisation2'),'gilets');
 const after=rosterSummary(roster);for(const f of Object.keys(before))assert.equal(after[f],before[f]*2);
});
test('successive bonuses, penalties, multiplier and shields retain exact resources',()=>{
 let state={count:70,shields:47,ammo:6,marseilleCharges:2};
 for(const key of ['renforts10','genz6','protections21','mobilisation2','departs5','barrage15','ralliement50','dispersion2']){
  const next=expected(state,key);state=applyChoice(state,makeFixedTVChoice(key));assert.deepEqual(state,next,key);
 }
});
test('exact Daily plans remain verifiable and within the existing ranking storage range',()=>{
 for(const day of ['2026-10-19','2026-10-20','2026-10-21','2026-10-22','2026-10-23','2026-10-24','2026-10-25','2026-10-26']){
  const p=createDailyPlan(day);assert.equal(p.version,4);assert.equal(p.legacyTVLimits,false);
  const routes=solvePlan(p);const max=Math.max(...routes.map(r=>r.survivors));assert.ok(max>0&&max<=72,day+' max '+max);
 }
});
