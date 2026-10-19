import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/';
const out=process.env.QA_OUTPUT||'C:/CITYOS/convergence-qa-20261019/combat-choreography';
fs.mkdirSync(out,{recursive:true});
const report={base,testedAt:new Date().toISOString(),errors:[],httpErrors:[],checks:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1.5,isMobile:true,hasTouch:true});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)report.httpErrors.push({status:r.status(),url:r.url()});});
 await page.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await page.click('#play-btn');
 await page.waitForFunction(()=>window.__convergence?.crowdManager?.playerStickmen?.length>=5);
 await page.waitForFunction(()=>window.__convergence.crowdManager.playerStickmen.slice(1,5).every(r=>r.userData.realisticAvatar),null,{timeout:45000});
 await page.evaluate(()=>{
  const g=window.__convergence;g.qaManual=true;
  const e=g.levelGenerator.enemies[0];
  g.trackZ=e.z;g.crowdManager.updatePlayerPosition(g.playerX,-e.z);
  g.levelGenerator.updateVisibility(e.z);
  g.checkEnemyCollisions();
  if(g.state!=='fighting')throw new Error('Enemy fight did not start');
  // Presentation QA only: freeze damage while we inspect all visual stages.
  g.fightInterval=999;
 });
 await page.waitForTimeout(120);
 async function snap(stage,frames){
  const data=await page.evaluate(n=>{
   const g=window.__convergence;for(let i=0;i<n;i++)g.update(.016);
   const f=g.combatChoreo;
   if(!f)throw new Error('Choreography missing');
   g.renderer.render(g.scene,g.camera);
   const runner=g.crowdManager.playerStickmen.find(r=>r.userData.realisticAvatar);
   const officer=f.officers[0];
   return {stage:f.phase,elapsed:f.elapsed,playerCount:g.crowdManager.playerCount,remaining:g.fightingEnemy.remainingCount,runner:runner?.userData.combatVisualState,officer:officer?.userData.combatVisualState,rigX:runner?.userData.realHumanoid?.model.rotation.x,rigZ:runner?.userData.realHumanoid?.model.position.z,officerX:officer?.userData.policeModel?.rotation.x,approvedP02:g.crowdManager.playerStickmen.filter(r=>r.userData.approvedLeader).length};
  },frames);
  await page.screenshot({path:path.join(out,stage+'.png')});
  report.checks.push({image:stage,data});
  assert.equal(data.stage,stage);
  assert.equal(data.approvedP02,1);
  assert.equal(data.playerCount,5);
  return data;
 }
 const health=await page.evaluate(()=>window.__convergence.fightingEnemy.remainingCount);
 const approach=await page.evaluate(n=>{
  const g=window.__convergence;for(let i=0;i<n;i++)g.update(.016);
  g.renderer.render(g.scene,g.camera);
  const f=g.combatChoreo;
  return {stage:f.phase,elapsed:f.elapsed,approvedP02:g.crowdManager.playerStickmen[0].userData.approvedLeader!==undefined};
 },14);
 assert.equal(approach.stage,'approach');assert.equal(approach.approvedP02,true);
 await page.screenshot({path:path.join(out,'approach.png')});
 report.checks.push({image:'approach',data:approach});
 const contact=await page.evaluate(()=>{
  const g=window.__convergence;for(let i=0;i<31;i++)g.update(.016);
  g.renderer.render(g.scene,g.camera);
  const f=g.combatChoreo,runner=g.crowdManager.playerStickmen[1],officer=f.officers[0];
  return {stage:f.phase,elapsed:f.elapsed,playerZ:runner.userData.realHumanoid.model.position.z,policeX:officer.userData.policeModel?.rotation.x,officer:f.officers.length,player:runner.userData.combatVisualState};
 });
 assert.equal(contact.stage,'contact');assert.ok(contact.officer>0);assert.equal(contact.player,'contact');
 await page.screenshot({path:path.join(out,'contact.png')});report.checks.push({image:'contact',data:contact});
 await page.evaluate(()=>window.__convergence.combatChoreo.onExchange());
 const pressure=await page.evaluate(()=>{
  const g=window.__convergence;for(let i=0;i<25;i++)g.update(.016);
  g.renderer.render(g.scene,g.camera);
  return {stage:g.combatChoreo.phase,exchanges:g.combatChoreo.exchange,remaining:g.fightingEnemy.remainingCount};
 });
 assert.equal(pressure.stage,'pressure');assert.equal(pressure.exchanges,1);assert.equal(pressure.remaining,health);
 await page.screenshot({path:path.join(out,'pressure.png')});report.checks.push({image:'pressure',data:pressure});
 const recovered=await page.evaluate(()=>{
  const g=window.__convergence;g.combatChoreo.finish();
  for(let i=0;i<40;i++)g.update(.016);
  const ok=g.combatChoreo===null;
  g.renderer.render(g.scene,g.camera);
  return {cleaned:ok,state:g.state,p02:g.crowdManager.playerStickmen[0].userData.approvedLeader!==undefined};
 });
 assert.equal(recovered.cleaned,true);assert.equal(recovered.p02,true);
 await page.screenshot({path:path.join(out,'recover.png')});report.checks.push({image:'recover',data:recovered});
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.httpErrors,[]);
 fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
 await context.close();
 // Performance smoke with fifty demonstrators while the choreography is active.
 const crowded=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1.5,isMobile:true,hasTouch:true});
 const heavy=await crowded.newPage();
 heavy.on('pageerror',e=>report.errors.push(e.message));
 await heavy.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await heavy.evaluate(()=>window.__convergence.getStartingCrowdSize=()=>50);
 await heavy.click('#play-btn');
 await heavy.waitForFunction(()=>window.__convergence?.crowdManager?.playerCount===50&&window.__convergence.crowdManager.playerStickmen.slice(1,12).every(r=>r.userData.realisticAvatar),null,{timeout:45000});
 const perf=await heavy.evaluate(async()=>{
  const g=window.__convergence,e=g.levelGenerator.enemies[0];
  g.qaManual=true;g.trackZ=e.z;g.crowdManager.updatePlayerPosition(0,-e.z);
  g.levelGenerator.updateVisibility(e.z);g.checkEnemyCollisions();g.fightInterval=999;
  const stamp=[];let last=performance.now();
  await new Promise(resolve=>{function frame(t){
    g.update(1/60);g.renderer.render(g.scene,g.camera);
    stamp.push(t-last);last=t;
    if(stamp.length<90)requestAnimationFrame(frame);else resolve();
  }requestAnimationFrame(frame);});
  return {fps:Math.round(90000/stamp.reduce((a,b)=>a+b,0)),actors:g.crowdManager.playerCount,rigged:g.crowdManager.playerStickmen.filter(r=>r.userData.realHumanoid).length,impostors:g.crowdManager.impostors.mesh.count,phase:g.combatChoreo.phase,drawCalls:g.renderer.info.render.calls,p02:g.crowdManager.playerStickmen.filter(r=>r.userData.approvedLeader).length};
 });
 assert.equal(perf.actors,50);assert.equal(perf.p02,1);assert.equal(perf.impostors,38);assert.equal(perf.phase,'pressure');
 assert.ok(perf.fps>=20,'combat performance below 20fps: '+perf.fps);
 await heavy.screenshot({path:path.join(out,'crowd-50-fight.png')});
 report.checks.push({image:'crowd-50-fight',data:perf});
 assert.deepEqual(report.errors,[]);
 fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));
 console.log('Crowd 50 fight: '+JSON.stringify(perf));
 await crowded.close();
}finally{await browser.close();}
