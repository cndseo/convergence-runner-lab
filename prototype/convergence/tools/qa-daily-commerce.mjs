import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import fs from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/daily-commerce';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={checks:[],errors:[],base};
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
  const page=await ctx.newPage();
  page.on('pageerror',e=>report.errors.push(e.message));
  await page.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>!!window.__convergence?.challengeHub,{timeout:18000});
  assert.equal(await page.locator('#daily-btn').isVisible(),true);
  assert.equal(await page.locator('#premium-btn').isVisible(),true);
  await page.locator('#daily-btn').click();
  assert.equal(await page.locator('#challenge-hub').isVisible(),true);
  assert.match(await page.locator('.challenge-title').innerText(),/DÉFI DU JOUR/);
  await page.screenshot({path:dir+'/daily-'+viewport.width+'.png'});
  await page.locator('.challenge-foot button').first().click();
  const initial=await page.evaluate(()=>{
   const g=window.__convergence;
   return {mode:g.mode,level:g.level,date:g.dailyDate,seed:g.levelSeed,
    actualSeed:g.levelGenerator.plan.seed,count:g.crowdManager.getPlayerCount(),
    strength:g.getEffectiveStrength(),hasTenGates:g.levelGenerator.gates.length===10,
    payments:g.challengeHub.paymentsEnabled,api:g.challengeHub.connected,
    hideHub:document.querySelector('#challenge-hub').classList.contains('hidden'),
    campaignBackup:g.campaignLevelBackup};
  });
  assert.equal(initial.mode,'daily');assert.equal(initial.level,1);
  assert.equal(initial.seed,initial.actualSeed);assert.equal(initial.count,5);
  assert.equal(initial.strength,1);assert.equal(initial.hasTenGates,true);
  assert.equal(initial.payments,false);assert.equal(initial.hideHub,true);
  report.checks.push({viewport,type:'start',initial});

  const win=await page.evaluate(async()=>{
   const g=window.__convergence;
   const path=g.levelGenerator.plan.proof.winningPath;
   let frames=0;
   for(;frames<2400;frames++){
     if(g.state==='playing')g.playerX=(path[g.gateHistory.length]||'left')==='left'?-2.5:2.5;
     g.update(.15);
     if(['win','lose','boss_defeated'].includes(g.state))break;
   }
   if(g.state==='boss_defeated')await new Promise(resolve=>setTimeout(resolve,1500));
   return {state:g.state,mode:g.mode,level:g.level,coins:g.coins,frames,
    history:g.gateHistory.length,sidePath:g.gateHistory.map(x=>x.side),
    earned:g.challengeHub.lastResult?.survivors,
    actual:g.crowdManager.getPlayerCount(),
    wins:g.challengeHub.lastResult?.won,
    best:g.challengeHub.getBest(g.dailyDate),
    hubVisible:!document.querySelector('#challenge-hub').classList.contains('hidden'),
    title:document.querySelector('.challenge-title')?.innerText};
  });
  assert.equal(win.state,'win',JSON.stringify(win));
  assert.equal(win.mode,'daily');assert.equal(win.level,1);
  assert.equal(win.history,10);assert.equal(win.wins,true);
  assert.equal(win.hubVisible,true);
  assert.equal(win.earned,win.actual);
  assert.equal(win.best,win.actual);
  assert.equal(win.coins,0);
  report.checks.push({viewport,type:'win',win});
  await page.screenshot({path:dir+'/win-'+viewport.width+'.png'});
  await page.locator('.challenge-foot button').last().click();
  const back=await page.evaluate(()=>{
   const g=window.__convergence;
   return {mode:g.mode,level:g.level,coins:g.coins,
    state:g.state,hubVisible:!g.challengeHub.panel.classList.contains('hidden')};
  });
  assert.equal(back.mode,'campaign');assert.equal(back.state,'menu');
  assert.equal(back.level,1);assert.equal(back.coins,0);
  report.checks.push({viewport,type:'back',back});
  await page.locator('#premium-btn').click();
  const premium=await page.evaluate(()=>{
   const buttons=[...document.querySelectorAll('.challenge-product button')];
   return {count:buttons.length,disabled:buttons.every(x=>x.disabled),
    labels:buttons.map(x=>x.textContent),message:document.querySelector('.challenge-warning')?.textContent,
    heading:document.querySelector('.challenge-title')?.textContent};
  });
  assert.equal(premium.count,5);assert.equal(premium.disabled,true);
  assert.match(premium.labels.join(' '),/1,99 €.*1,99 €.*2,99 €.*8,97 €.*29,90 €/);
  assert.match(premium.message,/désactivés/);
  report.checks.push({viewport,type:'premium',premium});
  await page.screenshot({path:dir+'/shop-'+viewport.width+'.png'});
  await page.locator('.challenge-close').click();
  assert.equal(await page.locator('#challenge-hub').isVisible(),false);
  await ctx.close();
 }
 assert.deepEqual(report.errors,[]);
 fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));
 console.log('DAILY_COMMERCE_UI_PASS '+JSON.stringify({checks:report.checks.map(c=>c.viewport.width+'_'+c.type),errors:report.errors}));
}finally{await browser.close();}
