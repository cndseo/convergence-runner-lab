import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4697/';
const out=new URL('../../../qa-crowd-police/',import.meta.url);
mkdirSync(out,{recursive:true});
const file=n=>new URL(n,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-webgl','--ignore-gpu-blocklist']});
const errors=[],badAssets=[],report={base};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/v1/**',r=>r.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))badAssets.push(r.status()+' '+r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.evaluate(()=>{
  localStorage.setItem('convergence_hero_v1',JSON.stringify({version:1,heroId:'genz-kay',xp:60,equipment:'default',completedRunIds:[]}));
  localStorage.setItem('convergence_vertical_v1',JSON.stringify({parisVersion:1,parisLevel:2,level:2,crowdUpgrade:1,strengthUpgrade:1}));
 });
 await page.reload({waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>window.__convergence?.state==='playing'&&window.__convergence?.crowdManager?.impostors?.mesh,{timeout:15000});
 await page.waitForTimeout(450);
 report.small=await page.evaluate(()=>{
  const g=window.__convergence,c=g.crowdManager;
  c.refreshDensity();c.update(.016);g.ui.updateCount(c.getPlayerCount());
  return {tactical:c.getPlayerCount(),rendered:c.getDisplayedCount(),badge:g.ui.countDisplay.textContent,instanceCount:c.impostors.mesh.count,actorCount:c.playerStickmen.length};
 });
 assert.equal(report.small.rendered,report.small.instanceCount+Math.min(12,report.small.actorCount));
 await page.evaluate(()=>{
  const g=window.__convergence,c=g.crowdManager;
  c.addToPlayerCrowd(30-c.playerCount,'genz');
  g.shields=6;
  for(let i=0;i<10;i++)c.update(.016);
  g.ui.updateCount(c.getPlayerCount());
  g.levelGenerator.streetPresence.update(g.trackZ,.1,true);
 });
 report.large=await page.evaluate(()=>{
  const g=window.__convergence,c=g.crowdManager;
  return {tactical:c.getPlayerCount(),rendered:c.getDisplayedCount(),badge:g.ui.countDisplay.textContent,title:g.ui.countDisplay.title,
          instances:c.impostors.mesh.count,actives:c.playerStickmen.length,police:g.levelGenerator.streetPresence.diagnostics()};
 });
 assert.equal(report.large.tactical,30);
 assert.ok(report.large.rendered>100);
 assert.ok(report.large.badge.includes(String(report.large.rendered)),report.large.badge);
 assert.ok(report.large.title.includes('30 unités tactiques'));
 await page.screenshot({path:file('hud-390.png')});
 const response=await page.evaluate(()=>{
  const g=window.__convergence,c=g.crowdManager;
  const gate=g.levelGenerator.gates.find(x=>(x.leftGate?.kind==='bravm'||x.rightGate?.kind==='bravm'));
  if(!gate)return {found:false};
  const side=gate.leftGate?.kind==='bravm'?'left':'right';
  const choice=side==='left'?gate.leftGate:gate.rightGate;
  const before=c.getPlayerCount();
  const activated=g.bravmGateCharge.start(gate,choice,side);
  return {found:true,activated,before,vehicles:g.bravmGateCharge.current?.actors.length||0};
 });
 report.charge=response;
 if(response.found){assert.equal(response.activated,true);assert.ok(response.vehicles>=4);
  await page.waitForTimeout(2650);
  await page.screenshot({path:file('bravm-390.png')});
  await page.waitForTimeout(1000);
  const afterAttack=await page.evaluate(()=>window.__convergence.crowdManager.getPlayerCount());
  assert.equal(afterAttack,response.before-3,'six motorcycles must still resolve just one penalty of three');
  report.charge.after=afterAttack;
  await page.evaluate(()=>window.__convergence.bravmGateCharge.clear());
 }
 report.errors=errors;report.badAssets=badAssets;
 assert.deepEqual(errors,[]);assert.deepEqual(badAssets,[]);
 writeFileSync(file('results.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify({ok:true,small:report.small,large:report.large,charge:report.charge,errors,badAssets}));
}finally{await browser.close();}
