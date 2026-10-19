import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={errors:[],http:[],checks:[]};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1.5});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)report.http.push({status:r.status(),url:r.url()});});
 await page.goto(process.env.QA_URL||'http://127.0.0.1:4291/?qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence);
 await page.evaluate(()=>window.__convergence.getStartingCrowdSize=()=>5);
 await page.evaluate(()=>window.__convergence.qaManual=true);
 await page.click('#play-btn');
 await page.evaluate(()=>window.__convergence.qaManual=true);
 await page.waitForFunction(()=>{const cm=window.__convergence.crowdManager;return cm.playerCount===5&&!!cm.playerGroup&&cm.playerStickmen.slice(1,5).every(r=>r.userData.realisticAvatar);});
 console.log('BEFORE',await page.evaluate(()=>({state:window.__convergence.state,group:!!window.__convergence.crowdManager.playerGroup,count:window.__convergence.crowdManager.playerCount,manual:window.__convergence.qaManual})));
 await page.evaluate(()=>{let g=window.__convergence;g.qaManual=true;g.crowdManager.addToPlayerCrowd(80);});
 await page.waitForFunction(()=>{const cm=window.__convergence.crowdManager;cm.update(.016);return cm.playerCount===85&&cm.playerStickmen.slice(1,12).every(r=>r.userData.realisticAvatar)&&cm.playerStickmen.slice(12).every(r=>r.userData.impostor)&&cm.impostors.mesh.count===73;},{timeout:40000});
 const result=await page.evaluate(()=>{
   const cm=window.__convergence.crowdManager;
   return {count:cm.playerCount,rigged:cm.playerStickmen.filter(r=>r.userData.realHumanoid).length,
    realistic:cm.playerStickmen.filter(r=>r.userData.realisticAvatar).length,
    impostors:cm.impostors.mesh.count,uniqueModels:[...new Set(cm.playerStickmen.map(r=>r.userData.realisticAvatar).filter(Boolean))].length};
 });
 assert.deepEqual([result.count,result.rigged,result.realistic,result.impostors,result.uniqueModels],[85,12,11,73,11]);
 report.checks.push({reinforcements:result});
 await page.screenshot({path:'C:/CITYOS/convergence-qa-20261019/realistic-crowd-v1/reinforcements-85.png'});
 // New round must recreate skeleton instances safely from cached GLB files.
 await page.evaluate(()=>window.__convergence.startGame());
 await page.waitForFunction(()=>window.__convergence.crowdManager.playerStickmen.slice(1,3).every(r=>r.userData.realisticAvatar));
 report.checks.push({restart:'passed',restartCount:await page.evaluate(()=>window.__convergence.crowdManager.playerCount)});
 await context.close();
 assert.equal(report.errors.length,0,JSON.stringify(report.errors));
 assert.equal(report.http.length,0,JSON.stringify(report.http));
}finally{await browser.close();}
fs.writeFileSync('C:/CITYOS/convergence-qa-20261019/realistic-crowd-v1/reinforcement-report.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));