import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4662/convergence-runner-lab/convergence/';
const out=new URL('../../../qa-player-experience/',import.meta.url);mkdirSync(out,{recursive:true});
const file=name=>new URL(name,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={base,checks:[],errors:[],badAssets:[]};
async function finish(page){
  for(let batch=0;batch<100;batch++){
    const state=await page.evaluate(()=>{
      const g=window.__convergence,path=g.levelGenerator.plan.proof.winningPath;
      for(let i=0;i<120;i++){
        if(g.state==='playing')g.playerX=(path[g.gateHistory.length]||'left')==='left'?-2.5:2.5;
        if(g.state==='final_chase')g.playerX=g.story.targetX;
        g.update(.05);if(['win','lose','boss_defeated'].includes(g.state))break;
      }return g.state;
    });
    if(state==='boss_defeated')await page.waitForTimeout(1300);
    if(state==='lose')throw Error('Certified route lost');
    if(state==='win')break;
  }
  assert.equal(await page.evaluate(()=>window.__convergence.state),'win');
  await page.waitForTimeout(750);
}
try{
  for(const viewport of [{width:390,height:844},{width:320,height:700}]){
    const context=await browser.newContext({viewport,isMobile:true,hasTouch:true});
    // Do not create players, scores or purchases on the live API during QA.
    await context.route('**/api/v1/**',route=>{
      const url=route.request().url();
      if(url.endsWith('/health'))return route.fulfill({json:{leaderboard:false,payments:'disabled'}});
      return route.fulfill({status:503,json:{error:'QA isolation'}});
    });
    const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));
    page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
    await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
    await page.waitForFunction(()=>!!window.__convergence?.experience);
    await page.screenshot({path:file('menu-'+viewport.width+'.png')});
    await page.locator('#play-btn').click();await page.waitForTimeout(500);
    assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
    assert.equal(await page.locator('#story-overlay').count(),0);
    await page.evaluate(()=>{const g=window.__convergence;g.qaManual=true;g.experience.telemetry.setEnabled(true);g.experience.start();g.update(.2);});
    assert.match(await page.locator('#player-coach').innerText(),/Glisse/);
    const cdp=await context.newCDPSession(page);
    await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:viewport.width/2,y:viewport.height-160}]});
    await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:viewport.width/2+65,y:viewport.height-160}]});
    await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
    assert.ok(await page.evaluate(()=>window.__convergence.playerX>0));
    await page.screenshot({path:file('coach-'+viewport.width+'.png')});
    await page.locator('#genz-ammo-button').click();
    assert.equal(await page.evaluate(()=>window.__convergence.state),'paused');
    assert.equal(await page.locator('.challenge-product').count(),2);
    assert.match(await page.locator('.challenge-product').first().innerText(),/6 tirs/);
    await page.screenshot({path:file('genz-shop-'+viewport.width+'.png')});
    await page.locator('.challenge-close').click();assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
    await page.locator('#pause-btn').click();await page.locator('#motion-toggle').click();await page.locator('#quality-toggle').click();
    assert.equal(await page.evaluate(()=>window.__convergence.renderer.getPixelRatio()),1);
    await page.locator('#resume-btn').click();
    await finish(page);
    const result=await page.evaluate(()=>{const g=window.__convergence;return {result:g.experience.lastResult,level:g.level,badge:g.experience.badges[1],events:g.experience.telemetry.snapshot().events.map(e=>e.event)};});
    assert.equal(result.level,2);assert.equal(result.result.level,1);assert.ok(result.result.survivors>0);assert.ok(result.events.includes('level_complete'));assert.ok(result.events.includes('gate_choice'));
    await page.waitForFunction(()=>!!window.__convergence.experience.cardBlob);
    const card=await page.evaluate(async()=>Array.from(new Uint8Array(await window.__convergence.experience.cardBlob.arrayBuffer())));
    writeFileSync(file('result-card-'+viewport.width+'.png'),Buffer.from(card));
    await page.screenshot({path:file('win-'+viewport.width+'.png')});
    // Native share success, cancellation, clipboard fallback and copy failure are different outcomes.
    await page.evaluate(()=>Object.defineProperty(navigator,'share',{configurable:true,value:async data=>{window.qaShared=data;}}));
    await page.locator('#result-share').click();
    assert.match(await page.locator('.result-notice').innerText(),/transmis/);
    assert.ok(await page.evaluate(()=>window.qaShared.url.includes('daily=')));
    await page.evaluate(()=>Object.defineProperty(navigator,'share',{configurable:true,value:async()=>{throw new DOMException('cancel','AbortError');}}));
    await page.locator('#result-share').click();assert.match(await page.locator('.result-notice').innerText(),/annulé/);
    await page.evaluate(()=>{Object.defineProperty(navigator,'share',{configurable:true,value:undefined});Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text=>{window.qaCopy=text;}}});});
    await page.locator('#result-share').click();assert.match(await page.locator('.result-notice').innerText(),/copiée/);
    // A failed copy never earns the legacy Rainbow entitlement.
    const unlock=await page.evaluate(async()=>{const g=window.__convergence,skin=g.skins.find(s=>s.id==='rainbow');skin.owned=false;Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('denied');}}});await g.ui.onSkinClick(skin);return skin.owned;});assert.equal(unlock,false);
    // Continue from the actual result button, without losing saved campaign progress.
    await page.locator('#next-btn').click();await page.waitForTimeout(400);
    await page.waitForSelector('#hero-dialog');
    await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
    await page.locator('#hero-confirm').click();
    assert.equal(await page.evaluate(()=>window.__convergence.experience.run.level),2);
    await page.evaluate(()=>{const g=window.__convergence;g.loseGame('gate');});await page.waitForTimeout(650);
    assert.equal(await page.locator('#lose-screen').isVisible(),true);
    await page.locator('#retry-btn').click();await page.waitForTimeout(400);
    assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
    // Daily uses the original rules and cannot spend paid boosters.
    await page.evaluate(()=>{const g=window.__convergence;g.startDailyChallenge('2026-10-21');});
    assert.equal(await page.evaluate(()=>window.__convergence.levelGenerator.plan.version),3);
    assert.equal(await page.evaluate(()=>window.__convergence.getStartingCrowdSize()),5);
    assert.equal(await page.locator('#genz-ammo-button').isVisible(),false);
    await finish(page);
    const daily=await page.evaluate(()=>({result:window.__convergence.challengeHub.lastResult,level:window.__convergence.campaignLevelBackup}));
    assert.ok(daily.result.won);assert.equal(daily.level,2);
    await page.evaluate(()=>{Object.defineProperty(navigator,'share',{configurable:true,value:async data=>{window.qaShared=data;}});});
    await page.getByRole('button',{name:'DÉFIER MES AMIS'}).click();
    assert.ok(await page.evaluate(()=>window.qaShared.url.includes('&beat=')));
    await page.screenshot({path:file('daily-'+viewport.width+'.png')});
    report.checks.push({viewport,result,daily});await context.close();
  }
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  await context.route('**/api/v1/**',route=>route.fulfill({json:{leaderboard:false,payments:'disabled'}}));
  const page=await context.newPage();await page.goto(base+'?qa=1&daily='+new Date().toISOString().slice(0,10)+'&beat=28',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>!!window.__convergence?.experience);
  assert.match(await page.locator('#daily-btn').innerText(),/28/);await page.locator('#daily-btn').click();
  assert.match(await page.locator('.challenge-body').innerText(),/Score partagé, non certifié/);
  await page.screenshot({path:file('duel-invitation.png')});await context.close();
  assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
  writeFileSync(file('report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({ok:true,views:report.checks.length,errors:report.errors,badAssets:report.badAssets}));
}finally{await browser.close();}