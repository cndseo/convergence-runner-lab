import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const p=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto(url+(url.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await p.click('#play-btn');
 await p.waitForFunction(()=>window.__convergence?.state==='playing'&&window.__convergence?.levelGenerator?.plan,{timeout:18000});
 await p.waitForTimeout(450); // allow the initial start-screen transition to complete
 const result=await p.evaluate(()=>{
  const g=window.__convergence;
  g.level=10;g.strengthUpgrade=1;g.crowdUpgrade=1;g.startGame();
  const plan=g.levelGenerator.plan;
  const path=plan.proof.winningPath;
  let frames=0;
  for(;frames<2400;frames++){
   if(g.state==='playing')g.playerX=(path[g.gateHistory.length]||'left')==='left'?-2.5:2.5;
   g.update(.15);
   if(['boss_defeated','lose','win'].includes(g.state))break;
  }
  return {state:g.state,frames,level:g.level,events:g.gateHistory.length,
    officersDefeated:g.levelGenerator.enemies.filter(x=>x.defeated).length,
    bossDefeated:g.levelGenerator.boss.defeated,survivors:g.crowdManager.getPlayerCount(),
    target:g.story.finalTarget?.material.map===g.story.textures.back,
    caption:plan.proof.winningPaths,runId:g.runId};
 });
 assert.equal(result.state,'boss_defeated');
 assert.equal(result.events,10);
 assert.equal(result.officersDefeated,2);
 assert.equal(result.bossDefeated,true);
 assert.equal(result.target,true);
 assert.ok(result.survivors>0);
 await p.waitForTimeout(1480);
 const started=await p.evaluate(()=>({
  state:window.__convergence.state,
  chase:window.__convergence.story.phase,
  caption:document.querySelector('.story-heading')?.innerText
 }));
 assert.equal(started.state,'final_chase',JSON.stringify(started));
 assert.match(started.caption,/PORTÉE/);
 const finished=await p.evaluate(()=>{
  const g=window.__convergence;
  // Actual touch input steers toward the opposite lane. Do not set playerX
  // programmatically: test the same event handlers used on an iPhone.
  const canvas=document.querySelector('#game-canvas');
  const startX=180, endX=startX+(g.story.targetX-g.playerX)/.02;
  const t0=new Touch({identifier:1,target:canvas,clientX:startX,clientY:620});
  const t1=new Touch({identifier:1,target:canvas,clientX:endX,clientY:620});
  canvas.dispatchEvent(new TouchEvent('touchstart',{bubbles:true,cancelable:true,touches:[t0],targetTouches:[t0],changedTouches:[t0]}));
  canvas.dispatchEvent(new TouchEvent('touchmove',{bubbles:true,cancelable:true,touches:[t1],targetTouches:[t1],changedTouches:[t1]}));
  canvas.dispatchEvent(new TouchEvent('touchend',{bubbles:true,cancelable:true,touches:[],targetTouches:[],changedTouches:[t1]}));
  const swipeWorked=Math.abs(g.story.targetX-g.playerX)<1.75;
  let captureSeen=false,frames=0;
  for(;frames<350;frames++){
   if(g.state==='final_capture')captureSeen=true;
   g.update(.05);
   if(g.state==='win')break;
  }
  return {swipeWorked,state:g.state,level:g.level,campaignComplete:g.campaignComplete,
   captureSeen,frames,priorVictories:g.gateHistory.length,
   coinTotal:g.coins};
 });
 assert.equal(finished.swipeWorked,true,'touch swipe did not steer toward final target');
 assert.equal(finished.state,'win');assert.equal(finished.level,10);
 assert.equal(finished.campaignComplete,true);assert.equal(finished.captureSeen,true);
 assert.deepEqual(errors,[]);
 console.log('REAL_FINAL_PASS '+JSON.stringify({result,started,finished,errors}));
}finally{await browser.close();}
