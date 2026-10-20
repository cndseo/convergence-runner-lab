import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4515/';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try {
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
  const page=await ctx.newPage(),errors=[],audioResponses=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.url().includes('marseille-attack.m4a'))audioResponses.push(r.status());});
  await page.goto(url+'?qa=1',{waitUntil:'networkidle'});
  await page.locator('#premium-btn').click();
  await page.getByRole('button',{name:/TESTER UNE SUPER ATTAQUE/}).click();
  await page.waitForFunction(()=>window.__convergence.audio.marseilleAttackBuffer,{timeout:12000});
  const ready=await page.evaluate(()=>{
   const g=window.__convergence;
   return {seconds:g.audio.marseilleAttackBuffer.duration,
     state:g.audio.ctx.state,node:!!g.audio.marseilleAttackNode};
  });
  assert.ok(ready.seconds>=7 && ready.seconds<=7.4,'complete user clip decoded');
  assert.equal(ready.node,false,'no sound until attack');
  await page.evaluate(()=>{
   const g=window.__convergence;g.qaManual=true;const e=g.levelGenerator.enemies[0];
   g.trackZ=e.z;g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
   g.levelGenerator.updateVisibility(g.trackZ);g.checkEnemyCollisions();g.marseille.update(.001);
  });
  await page.locator('#marseille-support-button').click();
  await page.waitForFunction(()=>window.__convergence.marseille.active&&!!window.__convergence.audio.marseilleAttackNode,{timeout:12000});
  const began=await page.evaluate(()=>{
   const g=window.__convergence;
   return {active:g.marseille.active,source:!!g.audio.marseilleAttackNode,
    credits:g.marseille.available(),ctxState:g.audio.ctx.state,actors:g.marseille.actors.length};
  });
  assert.equal(began.ctxState,'running');
  assert.equal(began.actors,15);
  assert.equal(began.credits,0);
  assert.equal(audioResponses.at(-1),200);
  await page.locator('#pause-btn').click();
  await page.waitForFunction(()=>window.__convergence.audio.ctx.state==='suspended',{timeout:3000});
  const paused=await page.evaluate(()=>({node:!!window.__convergence.audio.marseilleAttackNode,
    state:window.__convergence.state,elapsed:window.__convergence.marseille.elapsed}));
  assert.equal(paused.node,true,'pause preserves active voice');
  assert.equal(paused.state,'paused');
  await page.locator('#resume-btn').click();
  await page.waitForFunction(()=>window.__convergence.audio.ctx.state==='running',{timeout:3000});
  const finished=await page.evaluate(()=>{
   const g=window.__convergence;for(let i=0;i<195&&g.marseille.active;i++)g.update(.06);
   return {active:g.marseille.active,source:!!g.audio.marseilleAttackNode,
     state:g.state,credits:g.marseille.available(),actors:g.marseille.actors.length};
  });
  assert.equal(finished.active,false);
  assert.equal(finished.source,false,'sound stopped on attack cleanup');
  assert.equal(finished.credits,0);
  assert.deepEqual(errors,[]);
  console.log('MARSEILLE_AUDIO_QA_PASS',JSON.stringify({viewport,ready,began,paused,finished,audioResponses,errors}));
  await ctx.close();
 }
} finally {await browser.close();}
