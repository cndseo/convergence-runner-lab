import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {writeFileSync,mkdirSync} from 'node:fs';
const require=createRequire(import.meta.url),{chromium}=require('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4699/';
const output=new URL('../../../qa-active-patrols/',import.meta.url);mkdirSync(output,{recursive:true});
const file=n=>new URL(n,output).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--enable-webgl','--ignore-gpu-blocklist']});
const errors=[],missing=[],report={base};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/v1/**',route=>route.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();
 page.on('pageerror',error=>errors.push(error.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))missing.push(r.status()+' '+r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>window.__convergence?.levelGenerator?.plan?.proof&&window.__convergence.state==='playing',{timeout:20000});
 // Keep the test in a playable advanced district, after restoring the hero profile.
 await page.evaluate(()=>{
  const g=window.__convergence;
  g.parisJourney.playDistrict(2);
  g.parisJourney.card.classList.remove('visible');
  g.crowdManager.addToPlayerCrowd(19,'genz');
  g.shields=0;g.ui.updateCount(30);g.state='paused';g.speed=0;
  g.camera.position.set(0,9,27);
 });
 await page.waitForTimeout(850);
 report.initial=await page.evaluate(()=>{
  const g=window.__convergence,l=g.levelGenerator,c=g.crowdManager;
  return {ruleset:l.plan.ruleset,tactical:c.getPlayerCount(),rendered:c.getDisplayedCount(),
    patrolCount:l.patrols.length,fronts:l.enemies.map(e=>({kind:e.kind,health:e.count,visible:e.officers.length})),
    batonCapacity:l.streetPresence.batons.instanceMatrix.count,buttons:document.querySelector('#count-display').textContent};
 });
 assert.equal(report.initial.ruleset,'campaign-patrol-20261021');
 assert.equal(report.initial.patrolCount,5);
 assert.equal(report.initial.fronts.length,4);
 assert.ok(report.initial.fronts.every(f=>f.health===f.visible&&f.health>=10));
 const patrol=await page.evaluate(()=>{
  const g=window.__convergence,p=g.levelGenerator.patrols[0];
  g.trackZ=p.z-.3;g.crowdManager.updatePlayerPosition(0,-g.trackZ);g.crowdManager.update(.016);g.levelGenerator.updateVisibility(g.trackZ);g.levelGenerator.streetPresence.update(g.trackZ,.13,true);g.camera.position.set(0,g.crowdManager.getCameraHeight(),-g.trackZ+g.crowdManager.getCameraDistance());g.camera.lookAt(0,.8,-g.trackZ-5);g.renderer.render(g.scene,g.camera);
  return {z:p.z,batons:g.levelGenerator.streetPresence.batons.count,visible:g.levelGenerator.streetPresence.diagnostics().visible};
 });
 assert.ok(patrol.batons>0,'No active baton meshes in the encounter');
 await page.screenshot({path:file('before-strike-390.png')});
 report.strike=await page.evaluate(()=>{
  const g=window.__convergence,p=g.levelGenerator.patrols[0],before=g.crowdManager.getPlayerCount();
  g.state='playing';g.checkPatrolCollisions();
  const after=g.crowdManager.getPlayerCount();
  g.checkPatrolCollisions();
  const again=g.crowdManager.getPlayerCount();g.state='paused';
  g.levelGenerator.streetPresence.update(g.trackZ,.13,true);g.ui.updateCount(after);
  return {z:p.z,passed:p.passed,before,after,again,batons:g.levelGenerator.streetPresence.batons.count,rendered:g.crowdManager.getDisplayedCount(),
    activated:g.levelGenerator.streetPresence.patrolStrikes.has(p.z),hud:g.ui.countDisplay.textContent};
 });
 assert.ok(report.strike.passed&&report.strike.activated);
 assert.ok(report.strike.after<report.strike.before,'Patrol hit did not remove protesters');
 assert.equal(report.strike.after,report.strike.again,'Patrol strike applied twice');
 assert.ok(report.strike.batons>0,'No strike batons during patrol hit');
 await page.screenshot({path:file('after-strike-390.png')});
 report.shields=await page.evaluate(()=>{
  const g=window.__convergence,p=g.levelGenerator.patrols[1];
  g.shields=3;g.trackZ=p.z;g.state='playing';const before=g.crowdManager.getPlayerCount();
  g.checkPatrolCollisions();g.state='paused';
  return {before,after:g.crowdManager.getPlayerCount(),shields:g.shields,passed:p.passed};
 });
 assert.equal(report.shields.before,report.shields.after,'Protections did not absorb a patrol hit');
 assert.ok(report.shields.shields<3);
 const enemy=await page.evaluate(()=>{
  const g=window.__convergence,e=g.levelGenerator.enemies[0];
  g.trackZ=e.z-.4;g.state='playing';g.checkEnemyCollisions();
  const before={count:g.crowdManager.getPlayerCount(),shields:g.shields};
  if(g.state!=='fighting')return {state:g.state};
  let exchanges=0;let previous=e.remainingCount;
  while(g.state==='fighting'&&exchanges<120){
   g.fightTimer=g.fightInterval;g.fightElapsed=Math.max(10,g.fightElapsed);
   g.updateFight(.05);
   if(e.remainingCount!==previous){exchanges++;previous=e.remainingCount;}
   else exchanges++;
  }
  return {state:g.state,health:e.count,officers:e.officers.length,remaining:e.remainingCount,before,after:g.crowdManager.getPlayerCount(),exchanges};
 });
 report.barrage=enemy;
 assert.ok(enemy.health>=10&&enemy.officers>=10);
 assert.equal(enemy.remaining,0);
 assert.ok(enemy.after<enemy.before.count,'Barrage did not inflict losses');
 assert.equal(enemy.state,'playing');
 report.errors=errors;report.missing=missing;report.patrol=patrol;
 assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
 writeFileSync(file('results.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify({ok:true,initial:report.initial,patrol:report.patrol,strike:report.strike,shields:report.shields,barrage:report.barrage,errors,missing}));
}finally{await browser.close();}
