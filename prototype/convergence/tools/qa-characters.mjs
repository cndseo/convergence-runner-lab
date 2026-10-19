import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {CHARACTER_STYLES} from '../src/characterCatalog.mjs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const out=process.env.QA_OUTPUT||'C:/CITYOS/convergence-qa-20261019/reference-characters-v2/dev';
const base=process.env.QA_URL||'http://127.0.0.1:4317/';
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={base,testedAt:new Date().toISOString(),errors:[],http:[],checks:[]};
async function gamePage(width,height){
 const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1.5,isMobile:width<600,hasTouch:true});
 const p=await context.newPage();p.on('pageerror',e=>report.errors.push(e.message));
 p.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());});
 p.on('response',r=>{if(r.status()>=400)report.http.push({url:r.url(),status:r.status()});});
 await p.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await p.waitForFunction(()=>window.__convergence);return {p,context};
}
try{
 const {p,context}=await gamePage(390,844);
 await p.click('#play-btn');await p.evaluate(()=>{window.__convergence.qaManual=true;});
 await p.waitForFunction(()=>window.__convergence.crowdManager.playerCount===5&&window.__convergence.crowdManager.playerStickmen.slice(1,5).every(r=>r.userData.realisticAvatar));
 // Exercise reinforcements without altering the production count cap or game rules.
 await p.evaluate(()=>{const g=window.__convergence;g.crowdManager.addToPlayerCrowd(80);g.ui.updateCount(85);});
 await p.waitForFunction(()=>{
  const cm=window.__convergence.crowdManager;cm.update(.016);
  return cm.playerCount===85&&cm.playerStickmen.slice(1,12).every(r=>r.userData.realisticAvatar)&&cm.impostors.mesh.count===73;
 },null,{timeout:45000});
 await p.evaluate(()=>{const g=window.__convergence;for(let i=0;i<60;i++)g.crowdManager.update(1/60);g.renderer.render(g.scene,g.camera);});
 await p.screenshot({path:path.join(out,'reinforcements-85.png')});
 const stats=await p.evaluate(async()=>{
  const g=window.__convergence,cm=g.crowdManager,dt=[];let last=performance.now();
  await new Promise(resolve=>{function f(t){cm.update(1/60);dt.push(t-last);last=t;if(dt.length<120)requestAnimationFrame(f);else resolve();}requestAnimationFrame(f);});
  const rows=[...new Set(Array.from(cm.impostors.rows.slice(0,cm.impostors.mesh.count)))].sort((a,b)=>a-b);
  return {count:cm.playerCount,rigged:cm.playerStickmen.filter(r=>r.userData.realHumanoid).length,impostors:cm.impostors.mesh.count,atlasRows:rows,
   fps:Math.round(120000/dt.reduce((a,b)=>a+b,0)),p95FrameMs:Math.round(dt.sort((a,b)=>a-b)[113]),drawCalls:g.renderer.info.render.calls};
 });
 assert.deepEqual([stats.count,stats.rigged,stats.impostors],[85,12,73]);
 assert.deepEqual(stats.atlasRows,Array.from({length:13},(_,i)=>i));report.checks.push({reinforcements:stats});
 // Flag and smoke must move while marching, and stop when the game is paused.
 const movement=await p.evaluate(()=>{
  const g=window.__convergence,cm=g.crowdManager;
  const flag=cm.playerStickmen.find(r=>r.userData.realisticAvatar==='drapeau').getObjectByName('animated-french-flag');
  const smoke=cm.playerStickmen.find(r=>r.userData.realisticAvatar==='fumigene').getObjectByName('animated-green-smoke');
  const a=Array.from(flag.geometry.attributes.position.array),b=Array.from(smoke.instanceMatrix.array);
  cm.update(.21);
  return {flag:a.some((v,i)=>Math.abs(v-flag.geometry.attributes.position.array[i])>.0001),smoke:b.some((v,i)=>Math.abs(v-smoke.instanceMatrix.array[i])>.0001)};
 });
 assert.deepEqual(movement,{flag:true,smoke:true});report.checks.push({animation:movement});
 await p.evaluate(()=>{window.__convergence.qaManual=false;});
 await p.click('#pause-btn');
 const snapshot=()=>p.evaluate(()=>window.__convergence.crowdManager.playerStickmen[5].getObjectByName('animated-green-smoke').material.uniforms.time.value);
 const paused=await snapshot();await p.waitForTimeout(250);assert.equal(await snapshot(),paused);await p.click('#resume-btn');await p.waitForTimeout(200);assert.ok(await snapshot()>paused);await p.evaluate(()=>{window.__convergence.qaManual=true;});
 // Loss then replenishment exercises disposal and cached models again.
 await p.evaluate(()=>{const cm=window.__convergence.crowdManager;cm.removeFromPlayerCrowd(82);cm.addToPlayerCrowd(82);});
 await p.waitForFunction(()=>{const c=window.__convergence.crowdManager;c.update(.016);return c.playerStickmen.slice(1,12).every(r=>r.userData.realisticAvatar)&&c.impostors.mesh.count===73;});
 report.checks.push({lossAndReinforcement:'85 Ã¢â€ â€™ 3 Ã¢â€ â€™ 85 passed',pause:'smoke frozen'});
 await p.evaluate(()=>window.__convergence.startGame());
 await p.waitForFunction(()=>window.__convergence.crowdManager.playerCount===5&&window.__convergence.crowdManager.playerStickmen.slice(1,5).every(r=>r.userData.realisticAvatar));
 await context.close();
 // Inspect all dressed rigs in the actual game scene. QA camera changes are not shipped UI.
 const desktop=await gamePage(1100,900),page=desktop.p;
 await page.evaluate(()=>{window.__convergence.getStartingCrowdSize=()=>14;});
 await page.click('#play-btn');await page.evaluate(()=>{window.__convergence.qaManual=true;});
 await page.waitForFunction(()=>window.__convergence.crowdManager.playerCount===14&&window.__convergence.crowdManager.playerStickmen.slice(1).every(r=>r.userData.realisticAvatar));
 const roster=await page.evaluate(()=>{
  const g=window.__convergence;for(let i=0;i<80;i++)g.crowdManager.update(1/60);
  return g.crowdManager.playerStickmen.slice(1).map(r=>r.userData.realisticAvatar);
 });
 assert.deepEqual(roster,CHARACTER_STYLES.map(s=>s.key));
 for(const [group,indices] of [['roles-a',[1,2,3,4]],['roles-b',[5,6,7]],['gilets-a',[8,9,10]],['gilets-b',[11,12,13]]]){
  const inspection=await page.evaluate(indices=>{
   const g=window.__convergence,cm=g.crowdManager;
   cm.playerGroup.position.set(0,0,-2);
   cm.playerStickmen.forEach((r,i)=>{r.visible=indices.includes(i);});
   indices.forEach((i,j)=>cm.playerStickmen[i].position.set((j-(indices.length-1)/2)*.85,0,0));
   g.camera.position.set(0,2.35,3.6);g.camera.lookAt(0,1.1,-2);
   g.renderer.render(g.scene,g.camera);
   return indices.map(i=>{const r=cm.playerStickmen[i];return {id:r.userData.realisticAvatar,walk:r.userData.realHumanoid.animation,prop:r.userData.realHumanoid.model.userData.characterStyle};});
  },indices);
  await page.screenshot({path:path.join(out,group+'.png')});
  // Inspect fronts as well: rear-only screenshots can conceal missing costume details.
  await page.evaluate(()=>{const g=window.__convergence;g.camera.position.set(0,2.35,-6.5);g.camera.lookAt(0,1.1,-2);g.renderer.render(g.scene,g.camera);});
  await page.screenshot({path:path.join(out,group+'-front.png')});
  report.checks.push({visualCapture:group,frontCapture:group+'-front',characters:inspection});
 }
 await desktop.context.close();
 assert.equal(report.errors.length,0,report.errors.join('\n'));assert.equal(report.http.length,0,JSON.stringify(report.http));
 fs.writeFileSync(path.join(out,'characters-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}
