import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const urls={baseline:process.env.QA_BASELINE||'https://cndseo.github.io/convergence-runner-lab/convergence/?baseline=d10ef61',candidate:process.env.QA_URL||'http://127.0.0.1:4318/convergence-runner-lab/convergence/'};
const report={testedAt:new Date().toISOString(),urls,errors:[],measurements:[]};
const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 for(const [version,url] of Object.entries(urls))for(const count of [5,50,85]){
  const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:1.5,isMobile:true,hasTouch:true}),p=await c.newPage();
  p.on('pageerror',e=>report.errors.push(e.message));
  await p.goto(url+(url.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
  await p.waitForFunction(()=>window.__convergence);
  if(version==='baseline')assert.ok(await p.locator('script[src*="index-BVSh6nNF"]').count(),'Expected d10ef61 baseline');
  await p.evaluate(n=>window.__convergence.getStartingCrowdSize=()=>n,count);
  await p.click('#play-btn');
  await p.waitForFunction(n=>{const c=window.__convergence.crowdManager;return c.playerCount===n&&c.playerStickmen.slice(1,Math.min(n,12)).every(r=>r.userData.realisticAvatar);},count);
  await p.evaluate(()=>{window.__convergence.qaManual=true;});
  const result=await p.evaluate(async()=>{
   const g=window.__convergence,cm=g.crowdManager,frames=[];
   await new Promise(resolve=>{let ticks=0,last=performance.now();function f(now){cm.update(1/60);if(ticks++>=60)frames.push(now-last);last=now;if(ticks<240)requestAnimationFrame(f);else resolve();}requestAnimationFrame(f);});
   return {fps:Math.round(frames.length*1000/frames.reduce((a,b)=>a+b,0)),p95Ms:frames.sort((a,b)=>a-b)[Math.floor(frames.length*.95)],drawCalls:g.renderer.info.render.calls,triangles:g.renderer.info.render.triangles,textures:g.renderer.info.memory.textures,geometries:g.renderer.info.memory.geometries};
  });report.measurements.push({version,count,...result});await c.close();
 }
 assert.equal(report.errors.length,0);
 for(const count of [5,50,85]){
  const old=report.measurements.find(r=>r.version==='baseline'&&r.count===count),current=report.measurements.find(r=>r.version==='candidate'&&r.count===count);
  assert.ok(current.fps>=old.fps*.85,'FPS regression for '+count);
  assert.ok(current.p95Ms<=Math.max(old.p95Ms*1.2,35),'Frame-time regression for '+count);
 }
 fs.writeFileSync('C:/CITYOS/convergence-qa-20261019/reference-characters-v2/performance-comparison.json',JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
}finally{await b.close();}
