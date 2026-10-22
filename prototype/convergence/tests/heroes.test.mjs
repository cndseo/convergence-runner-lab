import test from 'node:test';
import assert from 'node:assert/strict';
import {HERO_PROFILES,HERO_COMMUNITIES} from '../src/heroCatalog.mjs';
import {normalizeHeroSave,selectHero,equipHero,awardHeroRun,heroLevel,familyRoster,changeRoster,rosterSummary,atlasRowForFamily} from '../src/heroRules.mjs';
import {generateCampaignLevel} from '../src/campaignPlan.mjs';
import {applyChoice,replayPlan} from '../src/tactics.mjs';
import {applyCampaignCombat,applyCampaignPatrol} from '../src/campaignCombatRules.mjs';
test('twenty stable identities, four per family, and bounded atlas rows',()=>{
 assert.equal(new Set(HERO_PROFILES.map(p=>p.id)).size,20);
 for(const f of HERO_COMMUNITIES){assert.equal(HERO_PROFILES.filter(p=>p.family===f.id).length,4);for(let i=0;i<312;i++)assert.ok(atlasRowForFamily(f.id,i)<20);}
});
test('save migration is isolated, validated, and retains one permanent hero',()=>{
 const old={coins:1234,crowdUpgrade:4,skins:['paid'],version:0};const empty=normalizeHeroSave(old);
 assert.equal(empty.heroId,null);assert.equal(old.coins,1234);
 const save=selectHero(empty,'genz-lea');assert.equal(selectHero(save,'gilets-marcel').heroId,'genz-lea');
 assert.equal(normalizeHeroSave({...save,xp:NaN,equipment:'unknown'}).equipment,'standard');
 assert.equal(equipHero(save,'armband'),save);
 const grown=awardHeroRun(save,{id:'run-1',mode:'campaign',won:true,gates:10});assert.equal(grown.xp,60);
 assert.equal(awardHeroRun(grown,{id:'run-1',mode:'campaign',won:true,gates:10}),grown);
 for(const extras of [{mode:'daily'},{mode:'campaign',practice:true}])assert.equal(awardHeroRun(grown,{id:'run-2',won:true,gates:10,...extras}),grown);
 const level2={...grown,xp:120};assert.equal(heroLevel(level2.xp),2);assert.equal(equipHero(level2,'armband').equipment,'armband');
});
test('doubling copies family composition and certified TV recruitment remains exact',()=>{
 let roster=familyRoster(11,'gilets');assert.deepEqual(rosterSummary(roster),{genz:0,gilets:11,infirmieres:0,pompiers:0,lyceens:0});
 let state=applyChoice({count:11,shields:0},{op:'+',value:6,bonusFaction:'genz'});
 roster=changeRoster(roster,state.count,{op:'+',bonusFaction:'genz'},'gilets');assert.equal(rosterSummary(roster).genz,6);
 state=applyChoice(state,{op:'*',value:2});roster=changeRoster(roster,state.count,{op:'*'},'gilets');
 assert.equal(rosterSummary(roster).gilets,22);assert.equal(rosterSummary(roster).genz,12);
 const protectedState=applyChoice(state,{op:'shield',value:14});assert.equal(protectedState.count,roster.length);
 roster=changeRoster(roster,3,null,'gilets');assert.equal(roster.length,3);assert.equal(roster[0],'gilets');
 assert.deepEqual(changeRoster(roster,0,null,'gilets'),[]);
});
test('all twelve districts have a free route with hero baseline and preserve actual family totals at every event',()=>{
 for(let level=1;level<=12;level++)for(const family of HERO_COMMUNITIES){
  const plan=generateCampaignLevel({level,seed:level,startCount:level===1?5:11,strength:1});
  assert.ok(replayPlan(plan,plan.proof.winningPath).count>0);
  let state={count:plan.startCount,shields:0},roster=familyRoster(plan.startCount,family.id),i=0;
  for(const e of plan.events){const choice=e.type==='choice'?e[plan.proof.winningPath[i++]]:null;state=choice?applyChoice(state,choice):e.type==='patrol'?applyCampaignPatrol(state,plan.level):applyCampaignCombat(state,e.count,1);roster=changeRoster(roster,state.count,choice,family.id);assert.equal(Object.values(rosterSummary(roster)).reduce((a,b)=>a+b,0),state.count);}
 }
});
