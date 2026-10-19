import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/intro-final-story';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={url:base,checks:[],errors:[],badResponses:[]};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1.5,isMobile:true,hasTouch:true});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)report.badResponses.push({status:r.status(),url:r.url()})});
 const url=base+(base.includes('?')?'&':'?')+'qa=1&intro=1';
 await page.goto(url,{waitUntil:'networkidle'});
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>window.__convergence?.state==='intro'&&window.__convergence.story.ready,{timeout:26000});
 const ready=await page.evaluate(()=>{
  const g=window.__convergence;
  const group=g.levelGenerator.enemies[0].meshGroup;
  return {state:g.state,texture:g.story.sprite?.material.map?.image?.src,
    frontVisible:!!g.story.sprite,
    policeVisible:group.visible,
    hudVisible:g.ui.hud.style.display,
    voiceDuration:g.audio.introVoiceBuffer?.duration,
    body:g.story.sprite?.position.toArray(),
    stage:document.querySelector('.story-stage')?.innerText,
    playableChoices:g.levelGenerator.gates.length,
    introSkipVisible:!!document.querySelector('.story-skip')?.offsetParent,
    lesson:g.levelGenerator.plan.proof.winningPaths};
 });
 assert.equal(ready.state,'intro');assert.equal(ready.frontVisible,true);
 assert.equal(ready.policeVisible,true);assert.equal(ready.playableChoices,10);
 assert.ok(ready.voiceDuration>3&&ready.voiceDuration<4);
 assert.equal(ready.hudVisible,'none');
 report.checks.push({name:'intro-ready',...ready});
 await page.screenshot({path:dir+'/01-intro-front.png'});
 const speaking=await page.evaluate(()=>{
   const g=window.__convergence;
   for(let i=0;i<29;i++)g.update(.05);
   return {phase:g.story.phase,state:g.state,speaking:g.story.voiceStarted,
     voiceActive:!!g.audio.introVoiceNode,audioState:g.audio.ctx.state,
     face:g.story.sprite?.material.map===g.story.textures.front,
     elapsed:g.story.elapsed};
 });
 assert.equal(speaking.state,'intro');
 assert.equal(speaking.face,true);
 assert.equal(speaking.voiceActive,true,'speech does not play');
 assert.equal(speaking.audioState,'running');
 report.checks.push({name:'voice-started',...speaking});
 await page.screenshot({path:dir+'/02-speech.png'});
 const flee=await page.evaluate(()=>{
  const g=window.__convergence;
  for(let i=0;i<125;i++)g.update(.05);
  return {state:g.state,phase:g.story.phase,back:g.story.sprite?.material.map===g.story.textures.back,
    spriteZ:g.story.sprite?.position.z,policeZ:-g.levelGenerator.enemies[0].z,
    stage:document.querySelector('.story-heading')?.innerText};
 });
 assert.equal(flee.state,'intro');assert.equal(flee.back,true);
 assert.ok(flee.spriteZ<flee.policeZ,'character did not flee behind CRS');
 report.checks.push({name:'flees-behind-police',...flee});
 await page.screenshot({path:dir+'/03-escape.png'});
 const reset=await page.evaluate(()=>{
  const g=window.__convergence;
  for(let i=0;i<85 && g.state==='intro';i++)g.update(.05);
  return {state:g.state,overlay:!!document.getElementById('story-overlay'),
    introSeen:g.story.introSeen,history:g.gateHistory.length,
    crowd:g.crowdManager.getPlayerCount(),trackZ:g.trackZ,
    visibleHud:g.ui.hud.style.display};
 });
 assert.equal(reset.state,'playing');
 assert.equal(reset.overlay,false);
 assert.equal(reset.history,0);assert.equal(reset.trackZ,0);
 assert.equal(reset.crowd,5);
 report.checks.push({name:'first-level-reset',...reset});
 const skip=await page.evaluate(async()=>{
  const g=window.__convergence;g.story.introSeen=false;g.level=1;g.startWithIntro({force:true});
  await new Promise(r=>setTimeout(r,350));
  if(g.state!=='intro')throw Error('intro did not reappear');
  g.story.skipIntro();
  return {state:g.state,overlay:!!document.getElementById('story-overlay'),
    voiceNode:!!g.audio.introVoiceNode,level:g.level};
 });
 assert.equal(skip.state,'playing');assert.equal(skip.overlay,false);
 assert.equal(skip.voiceNode,false);
 report.checks.push({name:'skip-intro',...skip});
 const locked=await page.evaluate(()=>{
  const g=window.__convergence;
  g.level=1;g.startGame();
  const noEarlyTarget=g.story.finalTarget===null;
  const cannotBegin=g.story.beginFinalChase()===false;
  g.level=10;g.startGame();
  const targetReady=!!g.story.finalTarget;
  const deniedBeforeDefeat=g.story.beginFinalChase()===false;
  return {noEarlyTarget,cannotBegin,targetReady,deniedBeforeDefeat,
    state:g.state,level:g.level,health:g.levelGenerator.boss.health};
 });
 assert.equal(locked.noEarlyTarget,true);
 assert.equal(locked.cannotBegin,true);
 assert.equal(locked.deniedBeforeDefeat,true);
 assert.equal(locked.targetReady,true);
 report.checks.push({name:'final-lock',...locked});
 const chase=await page.evaluate(()=>{
  const g=window.__convergence;
  g.levelGenerator.boss.defeated=true;
  g.trackZ=g.trackLength;
  g.levelGenerator.updateVisibility(g.trackZ);
  g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
  const start=g.story.beginFinalChase();
  const canvas=document.querySelector('#game-canvas');
  const initialX=g.playerX;
  canvas.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,clientX:170}));
  canvas.dispatchEvent(new MouseEvent('mousemove',{bubbles:true,clientX:225}));
  canvas.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));
  const steerable=g.playerX>initialX+.3;
  g.playerX=initialX;
  canvas.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,clientX:170}));
  canvas.dispatchEvent(new MouseEvent('mousemove',{bubbles:true,clientX:170+(g.story.targetX-g.playerX)/.02}));
  canvas.dispatchEvent(new MouseEvent('mouseup',{bubbles:true}));
  const aligned=Math.abs(g.playerX-g.story.targetX)<1.75;
  const before=g.story.targetProgress;
  let frames=0,seenChase=false,seenCapture=false;
  for(;frames<350;frames++){
   if(g.state==='final_chase')seenChase=true;
   if(g.state==='final_capture')seenCapture=true;
   g.update(.05);
   if(g.state==='win')break;
  }
  return {start,steerable,aligned,seenChase,seenCapture,frames,state:g.state,
    completed:g.campaignComplete,level:g.level,coins:g.coins,
    targetMoved:g.story.targetProgress>before,
    victoryTitle:document.querySelector('#win-screen h2')?.innerText,
    finaleButton:document.querySelector('#next-btn')?.innerText,
    portraitVisible:!document.getElementById('final-portrait')?.hidden,
    persisted:JSON.parse(localStorage.getItem('convergence_vertical_v1'))?.campaignComplete};
 });
 assert.equal(chase.start,true);assert.equal(chase.steerable,true);assert.equal(chase.aligned,true);
 assert.equal(chase.seenChase,true);assert.equal(chase.seenCapture,true);
 assert.equal(chase.state,'win');
 assert.equal(chase.completed,true);assert.equal(chase.level,10);
 assert.equal(chase.persisted,true);
 assert.equal(chase.portraitVisible,true);
 assert.match(chase.victoryTitle,/OBJECTIF FINAL ATTEINT/);
 assert.match(chase.finaleButton,/REJOUER LA CAMPAGNE/);
 report.checks.push({name:'final-contact-and-completion',...chase});
 await page.waitForTimeout(400);
 await page.screenshot({path:dir+'/04-final-victory.png'});
 const restart=await page.evaluate(()=>{
  const g=window.__convergence;
  document.querySelector('#next-btn').click();
  return {state:g.state,level:g.level,complete:g.campaignComplete};
 });
 await page.waitForTimeout(400);
 const afterRestart=await page.evaluate(()=>{
  const g=window.__convergence;
  return {state:g.state,level:g.level,complete:g.campaignComplete,
   introSeen:g.story.introSeen};
 });
 assert.equal(afterRestart.level,1);assert.equal(afterRestart.complete,false);
 assert.equal(afterRestart.state,'intro');
 report.checks.push({name:'replay-campaign',...afterRestart});
 assert.deepEqual(report.errors,[]);
 assert.deepEqual(report.badResponses,[]);
 fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));
 console.log('INTRO_FINAL_QA_PASS '+JSON.stringify({checks:report.checks.map(x=>x.name),errors:report.errors,assets:report.badResponses}));
 await context.close();
}finally{await browser.close();}
