import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {greedyPath,replayPlan} from '../src/tactics.mjs';
const require=createRequire(import.meta.url),{chromium}=require('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4178/';
const output=process.env.QA_OUTPUT||'C:/CITYOS/convergence-qa-20261019';
const requireRealistic=process.env.QA_REALISTIC==='1';
const executablePath=process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';
fs.mkdirSync(output,{recursive:true});
const report={base,cases:[],errors:[],failures:[],testedAt:new Date().toISOString()};
const browser=await chromium.launch({executablePath,headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
async function captureCase(width,height,count){
 const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1.5,isMobile:true,hasTouch:true});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());});
 page.on('response',r=>{if(r.status()>=400)report.failures.push({url:r.url(),status:r.status()});});
 await page.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence);
 if(count===5){
  await page.screenshot({path:path.join(output,'menu-'+width+'.png')});
  await page.click('#play-btn');
 }else {await page.evaluate(n=>{window.__convergence.getStartingCrowdSize=()=>n;},count);await page.click('#play-btn');}
 await page.waitForFunction(n=>{
  const g=window.__convergence;return g.crowdManager.playerCount===n&&g.crowdManager.playerStickmen.every(r=>r.userData.realHumanoid||r.userData.impostor||r.userData.approvedLeader);
 },count);
 if(requireRealistic){
  await page.waitForFunction(n=>window.__convergence.crowdManager.playerStickmen.slice(1,Math.min(n,12)).every(r=>r.userData.realisticAvatar),count,{timeout:45000});
 }
 await page.waitForTimeout(1600);
 const stats=await page.evaluate(async()=>{
  const g=window.__convergence,cm=g.crowdManager,dt=[];let last=performance.now();
  await new Promise(resolve=>{function frame(t){dt.push(t-last);last=t;if(dt.length<60)requestAnimationFrame(frame);else resolve();}requestAnimationFrame(frame);});
  const render=g.renderer.info;
  return {count:cm.playerCount,rigged:cm.playerStickmen.filter(r=>r.userData.realHumanoid).length,
   impostors:cm.impostors?.mesh.count,approvedP02:cm.playerStickmen.filter(r=>r.userData.approvedLeader).length,
   realistic:cm.playerStickmen.filter(r=>r.userData.realisticAvatar).length,
   uniqueModels:[...new Set(cm.playerStickmen.map(r=>r.userData.realisticAvatar).filter(Boolean))].length,
   animations:[...new Set(cm.playerStickmen.map(r=>r.userData.realHumanoid?.animation).filter(Boolean))],
   fps:Math.round(60000/dt.reduce((a,b)=>a+b,0)),p95FrameMs:Math.round(dt.sort((a,b)=>a-b)[56]),
   drawCalls:render.render.calls,triangles:render.render.triangles,
   overflow:document.documentElement.scrollWidth>innerWidth,
   state:g.state,shields:g.shields,proof:g.levelGenerator.plan.proof};
 });
 assert.equal(stats.count,count);assert.equal(stats.approvedP02,1);assert.equal(stats.overflow,false);
 assert.deepEqual(stats.animations,['Walk']);if(count===50)assert.equal(stats.impostors,38);
 if(requireRealistic){assert.equal(stats.realistic,Math.min(count,12)-1);assert.equal(stats.uniqueModels,Math.min(count,12)-1);}
 await page.evaluate(()=>{window.__convergence.qaManual=true;});
 await page.screenshot({path:path.join(output,'mobile-'+width+'-'+count+'.png')});
 if(count===5&&width===390){
  await page.click('#pause-btn');assert.equal(await page.evaluate(()=>window.__convergence.state),'paused');
  await page.click('#resume-btn');assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
  const before=await page.evaluate(()=>window.__convergence.playerX);
  await page.locator('canvas').dispatchEvent('touchstart',{touches:[{identifier:1,clientX:110,clientY:650}]});
  await page.locator('canvas').dispatchEvent('touchmove',{touches:[{identifier:1,clientX:210,clientY:650}]});
  await page.locator('canvas').dispatchEvent('touchend',{touches:[]});
  assert.ok(await page.evaluate(()=>window.__convergence.playerX)>before);
  report.input='touch drag + pause/resume passed';
  const plan=await page.evaluate(()=>window.__convergence.levelGenerator.plan);
  async function playRoute(route){
   return page.evaluate(route=>{
    const g=window.__convergence;g.startGame();g.qaManual=true;let choice=0;
    for(const e of g.levelGenerator.plan.events){
     g.trackZ=e.z;g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
     if(e.type==='choice'){
      g.playerX=route[choice++]==='left'?-2.5:2.5;g.checkGateCollisions();
      // BRAV-M applies its exact loss on animated contact, not gate entry.
      for(let i=0;i<120&&g.state==='bravm_charge';i++)g.update(.05);
      if(g.state==='bravm_charge')throw new Error('BRAV-M charge did not finish');
     }
     else {g.checkEnemyCollisions();for(let i=0;i<500&&g.state==='fighting';i++)g.updateFight(.13);}
     if(g.state==='lose')break;
    }
    if(g.state!=='lose'){g.trackZ=g.trackLength;g.checkBossFight();for(let i=0;i<500&&g.state==='fighting';i++)g.updateFight(.13);}
    return {state:g.state,count:g.crowdManager.playerCount,shields:g.shields,events:g.gateHistory.length};
   },route);
  }
  const win=await playRoute(plan.proof.winningPath);
  assert.equal(win.state,'boss_defeated');assert.equal(win.events,10);
  assert.equal(win.count,replayPlan(plan,plan.proof.winningPath).count);
  await page.waitForTimeout(1300);assert.equal(await page.evaluate(()=>window.__convergence.state),'win');
  await page.click('#next-btn');await page.waitForTimeout(500);assert.equal(await page.evaluate(()=>window.__convergence.levelGenerator.plan.level),2);
  await page.evaluate(()=>{window.__convergence.level=1;});
  const greedy=greedyPath(plan).path,lose=await playRoute(greedy);
  assert.equal(lose.state,'lose');assert.equal(lose.count,0);
  report.runtime={win,lose,verified:'winning and greedy routes executed through live collisions and combat'};
 }
 report.cases.push({width,height,...stats});
 await context.close();
}
try{
 for(const [w,h] of [[390,844],[320,700]])for(const n of [5,50])await captureCase(w,h,n);
 assert.equal(report.errors.length,0,report.errors.join('\n'));
 assert.equal(report.failures.length,0,JSON.stringify(report.failures));
 fs.writeFileSync(path.join(output,'smoke-report.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}
