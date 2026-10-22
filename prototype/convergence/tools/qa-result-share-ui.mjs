import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4741/';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const checks=[],errors=[],badAssets=[];
try{
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))badAssets.push(r.url());});
 await page.goto(base,{waitUntil:'domcontentloaded',timeout:30000});
 await page.waitForFunction(()=>window.__convergence?.challengeHub?.open,{timeout:20000});
 await page.evaluate(()=>{
   const g=window.__convergence;
   g.challengeHub.lastResult={won:true,mode:'daily',day:'2026-10-22',survivors:17};
   g.challengeHub.open('result');
 });
 await page.waitForFunction(()=>window.__convergence.challengeHub.resultCard?.size>100000,{timeout:12000});
 const b=await page.evaluate(async()=>{
   const hub=window.__convergence.challengeHub,blob=hub.resultCard;
   const txt=await blob.arrayBuffer();
   const link=new URL(location.href);link.searchParams.set('daily','2026-10-22');
   return {blobBytes:blob.size,blobType:blob.type,link:link.toString(),downloadEnabled:[...hub.foot.querySelectorAll('button')].some(b=>b.textContent.includes('ENREGISTRER LA CARTE')&&!b.disabled)};
 });
 assert.equal(b.blobType,'image/png');assert.ok(b.downloadEnabled);checks.push({kind:'daily-share-button-generated-image',...b});
 const c=await page.evaluate(()=>{
   const g=window.__convergence;
   g.challengeHub.close();
   g.mode='campaign';g.parisLevel=1;g.level=1;g.gateHistory=[];g.experience.start();
   g.experience.finish(true);
   return {mode:g.experience.lastResult?.mode,level:g.experience.lastResult?.level,count:g.experience.lastResult?.survivors};
 });
 assert.equal(c.mode,'campaign');assert.equal(c.level,1);
 await page.waitForFunction(()=>window.__convergence.experience.cardBlob?.size>100000,{timeout:12000});
 assert.equal(await page.locator('#result-download').isDisabled(),false);
 checks.push({kind:'campaign-victory-save-card',...c});
 assert.deepEqual(errors,[]);assert.deepEqual(badAssets,[]);
 console.log(JSON.stringify({ok:true,base,checks,errors,badAssets}));
}finally{await browser.close();}
