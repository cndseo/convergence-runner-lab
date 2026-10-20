import test from 'node:test';
import assert from 'node:assert/strict';
import {generateCampaignLevel,campaignTargets} from '../src/campaignPlan.mjs';
import {generateTacticalLevel,replayPlan,greedyPath} from '../src/tactics.mjs';
import {fixedTVFile} from '../src/fixedTVCatalog.mjs';
import {createDailyPlan,computeDailyScore} from '../src/dailyChallenge.mjs';
import {parseDuel,resultShareData} from '../src/resultSharing.mjs';
import {PlayerTelemetry} from '../src/playerTelemetry.mjs';

test('all twelve campaign districts have certified free routes without paid support',()=>{
  for(let level=1;level<=12;level++)for(const seed of [1,17,20261021,level*20261019]){
    const base=generateCampaignLevel({level,seed});
    assert.ok(base.proof.winningRate>=campaignTargets(level).min);
    assert.ok(replayPlan(base,base.proof.winningPath).count>0);
    if(level<=3)assert.ok(replayPlan(base,greedyPath(base).path).count>0);
    assert.equal(base.events.filter(e=>e.type==='choice').length,10);
    for(const event of base.events.filter(e=>e.type==='choice')){assert.ok(fixedTVFile(event.left));assert.ok(fixedTVFile(event.right));}
    for(const [startCount,strength] of [[11,2],[35,5],[72,12]]){
      const upgraded=generateCampaignLevel({level,seed,startCount,strength});
      assert.equal(upgraded.bossHealth,base.bossHealth);
      assert.deepEqual(upgraded.events,base.events);
      assert.ok(replayPlan(upgraded,base.proof.winningPath).count>0,'earned upgrades preserve the baseline winning route');
    }
  }
});
test('competitive daily plan retains legacy rules and verified replay',()=>{
  const day='2026-10-21',plan=createDailyPlan(day);
  assert.equal(plan.version,3);assert.equal(plan.ruleset,undefined);
  assert.deepEqual(plan,generateTacticalLevel({level:1,seed:plan.seed,startCount:5,strength:1}));
  const result=computeDailyScore(day,plan.proof.winningPath);assert.equal(result.survivors,replayPlan(plan,plan.proof.winningPath).count);
});
test('duels share a valid date and declared target, never purchases or a winning route',()=>{
  const result={mode:'daily',day:'2026-10-21',won:true,survivors:28};
  const shared=resultShareData(result,'https://jeu.laconvergence.fr/?qa=1&token=private#secret');
  const url=new URL(shared.url);assert.equal(url.searchParams.get('daily'),result.day);assert.equal(url.searchParams.get('beat'),'28');
  assert.equal(url.searchParams.has('qa'),false);assert.equal(url.searchParams.has('token'),false);assert.equal(url.hash,'');
  assert.deepEqual(parseDuel(url.search,result.day),{day:result.day,score:28});
  for(const q of ['?daily=2026-10-21&beat=999','?daily=2026-11-01&beat=2','?daily=2026-10-01&beat=4','?daily=xxx&beat=4'])assert.equal(parseDuel(q,result.day),null);
  const campaign=resultShareData({mode:'campaign',district:'Nation',survivors:29},'https://jeu.laconvergence.fr/');
  assert.equal(new URL(campaign.url).searchParams.has('beat'),false,'campaign score is not compared to daily');
});
test('local diagnostic is opt-in, bounded, strips sensitive fields and erases on withdrawal',()=>{
  const store=new Map(),storage={getItem:k=>store.get(k),setItem:(k,v)=>store.set(k,v)};
  let now=Date.parse('2026-10-21T12:00:00Z');const t=new PlayerTelemetry(storage,()=>now);
  t.track('tap_play',{level:1});assert.equal(t.snapshot().events.length,0);
  t.setEnabled(true);t.track('gate_choice',{level:1,token:'secret',url:'https://private',email:'a@b.fr',count:15});
  assert.equal(JSON.stringify(t.snapshot()).includes('secret'),false);assert.equal(JSON.stringify(t.snapshot()).includes('private'),false);
  for(let i=0;i<210;i++)t.track('gate_choice',{gate:i});assert.equal(t.snapshot().events.length,200);
  now+=86400000;const day2=new PlayerTelemetry(storage,()=>now);assert.equal(day2.snapshot().events.at(-1).returnedD1,true);
  day2.setEnabled(false);assert.deepEqual(day2.snapshot().events,[]);assert.equal(day2.snapshot().firstDay,null);
});
