import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
import {generateCampaignLevel} from '../src/campaignPlan.mjs';
import {replayPlan} from '../src/tactics.mjs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4701/';
const out=new URL('../../../qa-tv-touch-balance/',import.meta.url);mkdirSync(out,{recursive:true});
const file=name=>new URL(name,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={base,errors:[],assetsFailed:[],steps:[],rates:[]};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/v1/**',route=>route.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.assetsFailed.push(r.status()+' '+r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>window.__convergence?.levelGenerator?.plan,{timeout:16000});
 await page.evaluate(()=>{
  const g=window.__convergence;
  g.qaManual=true;
  g.parisJourney.playDistrict(2);
  g.parisJourney.card.classList.remove('visible');
  g.crowdManager.addToPlayerCrowd(30,'genz');
  g.shields=12;
  g.ui.updateCount(g.crowdManager.getPlayerCount());
 });
 const check=await page.evaluate(()=>{
  const g=window.__convergence,a=g.levelGenerator.gates;
  g.trackZ=a[0].z-6.1;g.update(.1);
  const first=g.tvChoice.gate;
  return {mode:g.mode,state:g.state,gates:a.length,gateHistory:g.gateHistory.length,
   before:g.crowdManager.getPlayerCount(),first:!!first,choices:a[0]?['left','right'].map(side=>a[0][side+'Gate'].tvKey):[]};
 });
 assert.equal(check.state,'tv_choice');assert.equal(check.gateHistory,0);assert.equal(check.first,true);
 await page.waitForFunction(()=>[...document.querySelectorAll('#tv-choice-dialog img')].length===2&&[...document.querySelectorAll('#tv-choice-dialog img')].every(x=>x.complete&&x.naturalWidth>0),{timeout:10000});
 const frozen=await page.evaluate(()=>{
  const g=window.__convergence,z=g.trackZ;
  for(let i=0;i<50;i++)g.update(.05);
  return {before:z,after:g.trackZ,tactical:g.crowdManager.getPlayerCount(),count:g.gateHistory.length};
 });
 assert.equal(frozen.after,frozen.before);assert.equal(frozen.count,0);assert.equal(frozen.tactical,check.before);
 await page.screenshot({path:file('choice-iphone-390.png')});
 await page.locator('#tv-choice-dialog button[data-tv-side="right"]').click();
 report.steps.push(await page.evaluate(()=>{
  const g=window.__convergence;
  return {state:g.state,passed:g.levelGenerator.gates[0].passed,history:g.gateHistory.length,
   side:g.gateHistory[0]?.side,applied:g.gateHistory[0]?.choice?.tvKey,
   tactical:g.crowdManager.getPlayerCount(),rendered:g.crowdManager.getDisplayedCount()};
 }));
 assert.equal(report.steps[0].side,'right');
 assert.equal(report.steps[0].history,1);
 assert.equal(report.steps[0].applied,check.choices[1]);
 assert.equal(report.steps[0].passed,true);
 assert.equal(report.steps[0].state,'playing');
 assert.equal(await page.locator('#tv-choice-dialog:visible').count(),0);
 // The next pair also requires an explicit touch, with the other lane chosen.
 await page.evaluate(()=>{
  const g=window.__convergence,a=g.levelGenerator.gates;
  g.trackZ=a[1].z-6.1;g.update(.1);
 });
 assert.equal(await page.evaluate(()=>window.__convergence.state),'tv_choice');
 assert.equal(await page.evaluate(()=>window.__convergence.gateHistory.length),1);
 await page.locator('#tv-choice-dialog button[data-tv-side="left"]').click();
 report.steps.push(await page.evaluate(()=>{
  const g=window.__convergence;
  return {state:g.state,history:g.gateHistory.length,side:g.gateHistory[1]?.side,
   applied:g.gateHistory[1]?.choice.tvKey};
 }));
 assert.equal(report.steps[1].history,2);
 assert.equal(report.steps[1].side,'left');
 for(const level of [1,2,3,6,9,12]){
  const plan=generateCampaignLevel({level,seed:20261021});
  const rate=plan.proof.winningRate;
  assert.ok(rate>=.09&&rate<.36,{level,rate});
  assert.ok(replayPlan(plan,plan.proof.winningPath).count>0);
  report.rates.push({level,rate,winningPaths:plan.proof.winningPaths});
 }
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.assetsFailed,[]);
 writeFileSync(file('results.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify({ok:true,...report}));
}finally{await browser.close();}
