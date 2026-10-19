import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.QA_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/',{waitUntil:'networkidle'});
 await page.click('#play-btn');await page.waitForFunction(()=>window.__convergence?.levelGenerator?.enemies?.length>0);
 const result=await page.evaluate(()=>{
  const g=window.__convergence,e=g.levelGenerator.enemies[0],boss=g.levelGenerator.boss;
  const seen=()=>e.officers.filter(o=>o.visible).length;
  const before=seen(), original=e.count;
  e.remainingCount=Math.ceil(original*.5);g.levelGenerator.updateEnemyLabel(e);
  const half=seen(),f1=g.crowdManager.flyingBodies.length;
  e.remainingCount=Math.ceil(original*.1);g.levelGenerator.updateEnemyLabel(e);
  const almost=seen(),f2=g.crowdManager.flyingBodies.length;
  e.remainingCount=0;g.levelGenerator.updateEnemyLabel(e);
  const none=seen();
  const be={isBoss:true,count:boss.health,remainingCount:Math.ceil(boss.health*.5)};
  g.levelGenerator.updateBossCount(be);
  const bossHalf=boss.officers.filter(o=>o.visible).length;
  be.remainingCount=0;g.levelGenerator.updateBossCount(be);
  const bossZero=boss.officers.filter(o=>o.visible).length;
  return {before,half,almost,none,original,f1,f2,bossHalf,bossZero,bossTotal:boss.officers.length};
 });
 assert.ok(result.before>result.half&&result.half>result.almost&&result.almost>result.none);
 assert.ok(result.f2>result.f1&&result.f1>0);
 assert.ok(result.bossHalf>0&&result.bossHalf<result.bossTotal&&result.bossZero===0);
 assert.deepEqual(errors,[]);
 console.log('CRS_VISUAL_QA_PASS '+JSON.stringify(result));
}finally{await browser.close();}
