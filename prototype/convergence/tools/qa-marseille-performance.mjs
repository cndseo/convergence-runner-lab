import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const dir='C:/CITYOS/convergence-qa-20261020/performance';fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const runs=[];
try{
 for(const [version,url] of [
  ['baseline-3d','http://127.0.0.1:4320/convergence-runner-lab/convergence/'],
  ['premium-2d',process.env.QA_URL||'http://127.0.0.1:4324/convergence-runner-lab/convergence/']
 ]){
  const ctx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const page=await ctx.newPage();const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url+'?qa=1',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__convergence?.challengeHub);
  await page.evaluate(()=>{const g=window.__convergence;g.qaManual=true;g.challengeHub.previewMarseille();});
  await page.waitForTimeout(1200);
  await page.evaluate(async()=>{
   const g=window.__convergence,e=g.levelGenerator.enemies[0];
   g.trackZ=e.z;g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
   g.levelGenerator.updateVisibility(g.trackZ);g.checkEnemyCollisions();
   await g.marseille.activate();
   for(let i=0;i<75;i++)g.update(1/60);
  });
  if(version==='premium-2d')await page.evaluate(()=>{
   const chunks=[];
   const r=new MediaRecorder(window.__convergence.renderer.domElement.captureStream(30),{mimeType:'video/webm'});
   r.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
   window.__rushRecording=new Promise(resolve=>{r.onstop=async()=>resolve(Array.from(new Uint8Array(await new Blob(chunks).arrayBuffer())));});
   window.__rushRecorder=r;r.start();
  });
  // Real requestAnimationFrame pacing at the peak, including game updates.
  const peak=await page.evaluate(async()=>{
   const g=window.__convergence;g.qaManual=false;let last=performance.now();const intervals=[],calls=[],triangles=[];
   for(let i=0;i<160;i++)await new Promise(resolve=>requestAnimationFrame(now=>{
    if(i>10)intervals.push(now-last);if(g.marseille.active){calls.push(g.renderer.info.render.calls);triangles.push(g.renderer.info.render.triangles);}last=now;resolve();
   }));
   intervals.sort((a,b)=>a-b);
   return {medianMs:intervals[Math.floor(intervals.length*.5)],p95Ms:intervals[Math.floor(intervals.length*.95)],
    drawCalls:Math.max(...calls),triangles:Math.max(...triangles),
    geometries:g.renderer.info.memory.geometries,textures:g.renderer.info.memory.textures};
  });
  // Real-time complete rush, including all four phases and the return to play.
  await page.evaluate(()=>{window.__convergence.qaManual=false;});
  await page.waitForFunction(()=>!window.__convergence.marseille.active,{timeout:25000});
  const finish=await page.evaluate(()=>({state:window.__convergence.state,
   credits:window.__convergence.marseille.available()}));
  assert.equal(finish.state,'playing');assert.deepEqual(errors,[]);
  runs.push({version,url,peak,finish,errors});
  console.log('MARSEILLE_PERFORMANCE '+JSON.stringify(runs.at(-1)));
  if(version==='premium-2d'){
   const bytes=await page.evaluate(async()=>{window.__rushRecorder.stop();return window.__rushRecording;});
   fs.writeFileSync(dir+'/marseille-real-time.webm',Buffer.from(bytes));
  }
  await ctx.close();
 }
 fs.writeFileSync(dir+'/report.json',JSON.stringify(runs,null,2));
}finally{await browser.close();}
