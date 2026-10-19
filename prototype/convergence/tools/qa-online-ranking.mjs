import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');

const web='https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const api='https://alliance-worthy-finance-acceptable.trycloudflare.com';
const dir='C:/CITYOS/convergence-qa-20261019/online-ranking';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const result={errors:[],stages:[]};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const page=await context.newPage();
 page.on('pageerror',e=>result.errors.push(e.message));
 await page.goto(web+'?qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence?.challengeHub?.connected===true,{timeout:23000});
 const health=await page.evaluate(()=>{
  const g=window.__convergence;
  return {connected:g.challengeHub.connected,payments:g.challengeHub.paymentsEnabled,
    api:g.challengeHub.apiBase,mode:g.mode,menu:g.state};
 });
 assert.equal(health.connected,true);
 assert.equal(health.payments,false);
 assert.equal(health.api,api);
 result.stages.push({health});
 await page.locator('#daily-btn').click();
 await page.locator('.challenge-foot button').first().click();
 const game=await page.evaluate(async()=>{
  const g=window.__convergence;
  const path=g.levelGenerator.plan.proof.winningPath;
  for(let i=0;i<2300;i++){
   if(g.state==='playing')g.playerX=(path[g.gateHistory.length]||'left')==='left'?-2.5:2.5;
   g.update(.15);
   if(g.state==='boss_defeated'||['win','lose'].includes(g.state))break;
  }
  if(g.state==='boss_defeated')await new Promise(r=>setTimeout(r,1550));
  return {state:g.state,mode:g.mode,day:g.dailyDate,score:g.challengeHub.lastResult?.survivors,
    path:g.gateHistory.map(h=>h.side),token:!!g.challengeHub.playerToken,
    localBest:g.challengeHub.getBest(g.dailyDate)};
 });
 assert.equal(game.state,'win',JSON.stringify(game));
 assert.equal(game.path.length,10);
 assert.equal(game.mode,'daily');
 assert.ok(game.score>0);
 result.stages.push({game});
 await page.waitForFunction(()=>document.querySelector('.challenge-explain')?.textContent?.includes('Résultat certifié'),
   {timeout:24000});
 const serverState=await page.evaluate(()=>{
  const g=window.__convergence;
  return {label:document.querySelector('.challenge-explain').textContent,
    savedToken:!!localStorage.getItem('convergence_challenge_token'),
    inventory:g.challengeHub.ownedSkus.size,
    purchases:g.challengeHub.paymentsEnabled};
 });
 assert.equal(serverState.purchases,false);
 assert.equal(serverState.savedToken,true);
 result.stages.push({serverState});
 await page.screenshot({path:dir+'/win-online-390.png'});
 await page.locator('.challenge-foot button').last().click();
 await page.locator('#daily-btn').click();
 await page.locator('.challenge-foot button').last().click();
 await page.waitForFunction(()=>!!document.querySelector('.challenge-rank'),{timeout:18000});
 const firstRank=await page.locator('.challenge-rank').first().innerText();
 assert.match(firstRank,/survivants/);
 result.stages.push({firstRank});
 await page.screenshot({path:dir+'/ranking-390.png'});
 await context.close();

 const other=await browser.newContext({viewport:{width:320,height:700},isMobile:true,hasTouch:true});
 const otherPage=await other.newPage();
 otherPage.on('pageerror',e=>result.errors.push(e.message));
 await otherPage.goto(web+'?qa=1',{waitUntil:'networkidle'});
 await otherPage.locator('#daily-btn').click();
 await otherPage.locator('.challenge-foot button').last().click();
 await otherPage.waitForFunction(()=>!!document.querySelector('.challenge-rank'),{timeout:18000});
 const secondRank=await otherPage.locator('.challenge-rank').first().innerText();
 assert.equal(secondRank,firstRank);
 result.stages.push({secondRank});
 await otherPage.screenshot({path:dir+'/ranking-other-device-320.png'});
 await other.close();

 const raw=await fetch(api+'/api/v1/daily/leaderboard?day='+game.day);
 const data=await raw.json();
 assert.equal(raw.status,200);
 assert.ok(data.leaders.some(x=>x.survivors===game.score));
 result.stages.push({publicApiStatus:raw.status,visibleScores:data.leaders.length});
 assert.deepEqual(result.errors,[]);
 fs.writeFileSync(dir+'/report.json',JSON.stringify(result,null,2));
 console.log('ONLINE_RANKING_PASS '+JSON.stringify(result));
}finally{await browser.close();}
