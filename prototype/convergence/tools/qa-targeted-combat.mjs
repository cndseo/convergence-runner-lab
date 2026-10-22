import assert from 'node:assert/strict';
import {campaignCombatExchange,applyCampaignPatrol} from '../src/campaignCombatRules.mjs';
import {applyTVImpact} from '../src/tvRoadRules.mjs';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4722/';
const out=fileURLToPath(new URL('../../../docs/reviews/targeted-combat-20261022/',import.meta.url));
mkdirSync(out,{recursive:true});
const phase=process.env.QA_PHASE||'after';
const report={phase,base,cases:[],errors:[],badAssets:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/v1/**',r=>r.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.evaluate(()=>{
  const g=window.__convergence;g.qaManual=true;g.heroes.save.heroId='genz-lea';
  window.qaReset=(count=30,shields=0)=>{
   g.ui.hideAllScreens();g.mode='campaign';g.parisJourney.playDistrict(2);g.parisJourney.card.classList.remove('visible');
   const d=count-g.crowdManager.getPlayerCount();if(d>0)g.crowdManager.addToPlayerCrowd(d);if(d<0)g.crowdManager.removeFromPlayerCrowd(-d);
   g.shields=shields;g.crowdManager.update(.001);g.ui.updateCount(g.crowdManager.getPlayerCount());
  };
  window.qaState=()=>({state:g.state,count:g.crowdManager.getPlayerCount(),models:g.crowdManager.playerStickmen.length,shields:g.shields,displayed:g.crowdManager.getDisplayedCount(),hud:g.ui.countDisplay.textContent,remaining:g.fightingEnemy?.remainingCount,active:g.marseille.active,pending:g.marseille.pending,charges:g.marseille.available(),actors:g.marseille.actors.length,elapsed:g.marseille.elapsed});
  window.qaFight=()=>{
   const e=g.levelGenerator.enemies[0];for(const t of g.levelGenerator.gates)if(t.z<e.z){t.passed=true;t.tvState='resolved';}for(const p of g.levelGenerator.patrols)if(p.z<e.z)p.passed=true;g.trackZ=e.z;g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);g.checkEnemyCollisions();g.update(.001);return e;
  };
 });
 await page.evaluate(()=>{const g=window.__convergence;qaReset();g.level=1;g.marseille.resetLevelOneGift();g.marseille.grantLevelOneGift();g.level=2;qaFight();});
 const marseille={name:'marseille-gift',before:await page.evaluate(()=>qaState())};
 await page.locator('#marseille-support-button').click();
 await page.waitForFunction(()=>window.__convergence.marseille.active||!window.__convergence.marseille.pending,{timeout:20000});
 marseille.triggered=await page.evaluate(()=>qaState());
 marseille.impact=await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<60;i++)g.update(.05);g.renderer.render(g.scene,g.camera);return qaState();});
 await page.screenshot({path:out+'/'+phase+'-marseille-impact.png'});
 marseille.finished=await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<130&&g.marseille.active;i++)g.update(.05);return {...qaState(),defeated:g.levelGenerator.enemies[0].defeated};});
 report.cases.push(marseille);
 // Loading is asynchronous: pausing between press and resource readiness must not waste the action.
 const pause=await page.evaluate(async()=>{
  const g=window.__convergence;qaReset();g.marseille.demoCharges=1;qaFight();
  const preload=g.marseille.preload.bind(g.marseille);const artwork=await preload();
  let release;g.marseille.preload=()=>new Promise(r=>{release=r;});
  const request=g.marseille.activate();g.pausedState='fighting';g.state='paused';release(artwork);
  const activated=await request;g.marseille.preload=preload;
  const paused=qaState();g.state='fighting';g.update(.001);
  return {name:'marseille-pause-load',activated,paused,resumed:qaState()};
 });
 report.cases.push(pause);
 report.cases.push(await page.evaluate(async()=>{
  const g=window.__convergence;qaReset();g.marseille.demoCharges=0;g.level=1;g.marseille.resetLevelOneGift();g.marseille.grantLevelOneGift();g.level=2;qaFight();
  const consume=g.challengeHub.consumeMarseilleCharge.bind(g.challengeHub);let release,spent;
  const charged=new Promise(r=>{spent=r;});
  g.challengeHub.consumeMarseilleCharge=async()=>{const result=await consume();spent();await new Promise(r=>{release=r;});return result;};
  const request=g.marseille.activate();await charged;g.pausedState='fighting';g.state='paused';release();
  const activated=await request;g.challengeHub.consumeMarseilleCharge=consume;const paused=qaState();
  g.state='fighting';g.update(.05);return {name:'marseille-pause-after-charge',activated,paused,resumed:qaState()};
 }));
 const brav=await page.evaluate(()=>{
  const g=window.__convergence;qaReset(30,20);
  const gate=g.levelGenerator.gates.find(t=>t.leftGate.kind==='bravm'||t.rightGate.kind==='bravm');
  for(const t of g.levelGenerator.gates)if(t.z<gate.z){t.passed=true;t.tvState='resolved';}
  for(const p of g.levelGenerator.patrols)p.passed=true;
  for(const e of g.levelGenerator.enemies)e.defeated=true;
  g.trackZ=gate.z-9;g.update(.001);const side=gate.leftGate.kind==='bravm'?'left':'right';
  const before=qaState();const chosen=g.tvChoice.choose(gate,side);const selected=qaState();
  let hit;for(let i=0;i<60;i++){g.update(.05);if(g.bravmGateCharge.current?.hit){hit={...qaState(),lost:g.bravmGateCharge.current.lost,ragdolls:g.crowdManager.flyingBodies.length};break;}}
  g.renderer.render(g.scene,g.camera);return {name:'bravm-impact',chosen,before,selected,hit,history:g.gateHistory};
 });
 report.cases.push(brav);await page.screenshot({path:out+'/'+phase+'-bravm-impact.png'});
 report.cases.push(await page.evaluate(()=>{
  const g=window.__convergence;qaReset(30,0);const before=qaState();g.applyGate({op:'+',value:5});g.ui.updateCount(g.crowdManager.getPlayerCount());const plus=qaState();
  g.applyGate({op:'damage',kind:'bravm',value:3});g.ui.updateCount(g.crowdManager.getPlayerCount());return {name:'count-arithmetic',before,plus,minus:qaState()};
 }));
 for(const shields of [0,2]){
  const combat=await page.evaluate(shields=>{
   const g=window.__convergence;qaReset(30,shields);g.marseille.demoCharges=0;const enemy=qaFight();
   const before=qaState();g.fightTimer=g.fightInterval;g.updateFight(0);g.ui.updateCount(g.crowdManager.getPlayerCount());
   return {name:'combat-exchange',before,after:qaState()};
  },shields);
  const expected=campaignCombatExchange({count:30,shields},combat.before.remaining,1);
  assert.equal(combat.after.count,expected.after.count);assert.equal(combat.after.shields,expected.after.shields);assert.equal(combat.after.remaining,expected.remaining);
  report.cases.push(combat);
 }
 for(const kind of ['patrol','miss']){
  const c=await page.evaluate(kind=>{
   const g=window.__convergence;qaReset(30,2);const before=qaState();
   if(kind==='patrol'){g.trackZ=g.levelGenerator.patrols[0].z;g.checkPatrolCollisions();}
   else g.tvChoice.miss(g.levelGenerator.gates[0]);
   return {name:kind,before,after:qaState()};
  },kind);
  const expected=kind==='patrol'?applyCampaignPatrol({count:30,shields:2},2):applyTVImpact({count:30,shields:2});
  assert.equal(c.after.count,expected.count);assert.equal(c.after.shields,expected.shields);report.cases.push(c);
 }
 const m=report.cases.find(x=>x.name==='marseille-gift'),b=report.cases.find(x=>x.name==='bravm-impact'),math=report.cases.find(x=>x.name==='count-arithmetic');
 assert.equal(m.triggered.active,true);assert.equal(m.triggered.charges,0);assert.equal(m.triggered.actors,15);assert.equal(m.finished.defeated,true);assert.equal(m.finished.count,30);
 if(phase!=='before'){
  assert.equal(m.impact.remaining,0);
  for(const p of report.cases.filter(x=>x.name.startsWith('marseille-pause'))){assert.equal(p.activated,true);assert.equal(p.paused.active,true);assert.equal(p.paused.elapsed,0);assert.equal(p.resumed.active,true);assert.equal(p.resumed.charges,0);}
  assert.equal(b.selected.count,30);assert.equal(b.hit.count,27);assert.equal(b.hit.models,27);assert.equal(b.hit.shields,20);assert.equal(b.hit.lost,3);assert.ok(b.hit.ragdolls>=3);assert.equal(b.history.length,1);
  for(const c of [math.before,math.plus,math.minus])assert.equal(c.hud,'👥 '+c.count);
 }else{
  assert.equal(m.impact.remaining,14);assert.equal(b.selected.count,27);assert.equal(b.hit.lost,0);
  assert.equal(report.cases.find(x=>x.name==='marseille-pause-after-charge').resumed.active,false);
 }
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
 console.log('TARGETED_COMBAT_PASS '+phase+' '+report.cases.length+' scenarios');
}finally{writeFileSync(out+'/'+phase+'.json',JSON.stringify(report,null,2));await browser.close();}
