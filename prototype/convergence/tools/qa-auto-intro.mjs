import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4724/';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={url:base,checks:[],errors:[],badAssets:[]};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.status()+' '+r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 assert.equal(await page.locator('#story-overlay').count(),0,'Intro does not block home menu before tapping Play');
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>window.__convergence?.state==='intro' && window.__convergence?.story?.ready,{timeout:25000});
 const intro=await page.evaluate(()=>{
  const g=window.__convergence;
  return {mode:g.mode,level:g.geographicLevel,state:g.state,voiceDuration:g.audio.introVoiceBuffer?.duration,
   sprite:!!g.story.sprite,front:!!g.story.textures.front,back:!!g.story.textures.back,
   overlay:!!document.getElementById('story-overlay'),skip:!!document.querySelector('.story-skip')?.offsetParent,
   hud:g.ui.hud.style.display};
 });
 assert.equal(intro.level,1);assert.equal(intro.mode,'campaign');assert.equal(intro.sprite,true);
 assert.equal(intro.overlay,true);assert.equal(intro.skip,true);assert.equal(intro.hud,'none');
 assert.ok(intro.voiceDuration>3&&intro.voiceDuration<5);
 report.checks.push({name:'automatic-introduction-after-Play',...intro});
 await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<18;i++)g.update(.05);});
 assert.equal(await page.evaluate(()=>window.__convergence.story.voiceStarted),true);
 report.checks.push({name:'recorded-prologue-voice-starts'});
 await page.locator('.story-skip').click();
 assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
 assert.equal(await page.locator('#story-overlay').count(),0);
 assert.ok((await page.evaluate(()=>window.__convergence.trackZ))<2,'Game resumes from level start rather than skipping the course');
 report.checks.push({name:'skip-returns-to-unchanged-playable-level'});
 await page.evaluate(()=>{const g=window.__convergence;g.mode='campaign';g.level=2;g.parisLevel=2;g.parisDevSelection=true;g.startWithIntro();});
 assert.notEqual(await page.evaluate(()=>window.__convergence.state),'intro','Level 2 never replays the prologue');
 report.checks.push({name:'level-two-no-prologue'});
 await page.evaluate(()=>{const g=window.__convergence;g.startDailyChallenge();});
 assert.notEqual(await page.evaluate(()=>window.__convergence.state),'intro','Daily never shows campaign prologue');
 report.checks.push({name:'Daily-no-prologue'});
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
 console.log(JSON.stringify({ok:true,...report}));
}finally{await browser.close();}
