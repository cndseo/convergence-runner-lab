import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import fs from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/';
const output='C:/CITYOS/convergence-qa-20261019/combat-voice';
fs.mkdirSync(output,{recursive:true});
const report={base,errors:[],responses:[],checks:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const ctx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const page=await ctx.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.url().includes('pourquoi-tu-me-frappe'))report.responses.push({status:r.status(),size:r.headers()['content-length']||null});});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.click('#play-btn');
 await page.waitForFunction(()=>window.__convergence?.audio?.combatVoiceBuffer?.duration>7,{timeout:18000});
 const readiness=await page.evaluate(()=>{
  const g=window.__convergence;return {duration:g.audio.combatVoiceBuffer.duration,ctx:g.audio.ctx.state,requests:g.audio.combatVoiceLoading};
 });
 assert.equal(readiness.ctx,'running');assert.ok(readiness.duration>7.5&&readiness.duration<8.2);
 report.checks.push({name:'decoded',duration:readiness.duration});
 const combat=await page.evaluate(()=>{
  const g=window.__convergence;
  const e=g.levelGenerator.enemies[0];
  g.trackZ=e.z;
  g.crowdManager.updatePlayerPosition(g.playerX,-e.z);
  g.levelGenerator.updateVisibility(e.z);
  g.checkEnemyCollisions();
  return {state:g.state,voiceActive:!!g.audio.combatVoiceNode,bufferLoaded:!!g.audio.combatVoiceBuffer,musicTarget:g.audio.musicGain.gain.value};
 });
 assert.equal(combat.state,'fighting');assert.equal(combat.voiceActive,true);
 report.checks.push({name:'combat-start',combat});
 const paused=await page.evaluate(async()=>{
  document.querySelector('#pause-btn').click();
  await new Promise(r=>setTimeout(r,200));
  return {state:window.__convergence.state,audio:window.__convergence.audio.ctx.state};
 });
 assert.equal(paused.state,'paused');assert.equal(paused.audio,'suspended');
 report.checks.push({name:'pause',paused});
 const resume=await page.evaluate(async()=>{
  document.querySelector('#resume-btn').click();
  await new Promise(r=>setTimeout(r,150));
  const g=window.__convergence;
  return {state:g.state,ctx:g.audio.ctx.state};
 });
 assert.equal(resume.ctx,'running');
 report.checks.push({name:'resume',resume});
 const win=await page.evaluate(()=>{
  const g=window.__convergence;g.winGame();
  return {state:g.state,playing:!!g.audio.combatVoiceNode};
 });
 assert.equal(win.state,'win');assert.equal(win.playing,false);
 report.checks.push({name:'stop-on-win',win});
 assert.deepEqual(report.errors,[]);
 assert.ok(report.responses.some(r=>r.status===200),'audio URL must return 200');
 fs.writeFileSync(output+'/report.json',JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
 await ctx.close();
}finally{await browser.close();}
