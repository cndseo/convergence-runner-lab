import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4741/';
const out=fileURLToPath(new URL('../../../docs/reviews/share-card-20261022/',import.meta.url));
mkdirSync(out,{recursive:true});
const report={base,cases:[],errors:[],missing:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl']});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.missing.push(r.url());});
 await page.goto(base,{waitUntil:'domcontentloaded'});
 for(const [key,result] of [
  ['nation-28',{mode:'campaign',won:true,level:1,district:'Nation',survivors:28,bestGain:10}],
  ['elysee-132',{mode:'campaign',won:true,level:12,district:'Élysée',survivors:132,badge:true,bestGain:25}],
  ['daily-3',{mode:'daily',won:true,day:'2026-10-22',survivors:3}]
 ]){
  const item=await page.evaluate(async({result,key})=>{
   const {createResultCard,shareResultLayout}=await import('/src/resultSharing.mjs');
   const blob=await createResultCard(result,location.origin+location.pathname);
   const img=document.getElementById('qa-result-card')||document.createElement('img');
   img.id='qa-result-card';img.alt='Image résultat CONVERGENCE';img.style.cssText='position:fixed;left:0;top:0;width:390px;height:auto;z-index:99999;border:none;object-fit:contain;background:#0d1425';
   img.src=URL.createObjectURL(blob);document.body.append(img);
   await img.decode();
   const canvas=document.createElement('canvas');canvas.width=720;canvas.height=1280;
   const c=canvas.getContext('2d',{willReadFrequently:true});c.drawImage(img,0,0);
   const sum=(x,y,w,h)=>{const data=c.getImageData(x,y,w,h).data;let s=0;for(let i=0;i<data.length;i+=21)s=(s+data[i]+data[i+1]+data[i+2])>>>0;return s;};
   return {key,bytes:blob.size,width:img.naturalWidth,height:img.naturalHeight,layout:shareResultLayout(result),
      topChecksum:sum(0,0,720,210),bottomChecksum:sum(0,1040,720,180)};
  },{key,result});
  assert.equal(item.width,720);assert.equal(item.height,1280);
  assert.ok(item.bytes>200000,'JPG background must survive PNG export');
  await page.locator('#qa-result-card').screenshot({path:out+'/'+key+'.png'});
  report.cases.push(item);
 }
 assert.equal(report.cases[0].topChecksum,report.cases[1].topChecksum,'Printed logo unchanged by dynamic score');
 assert.equal(report.cases[0].bottomChecksum,report.cases[1].bottomChecksum,'CTA unchanged by dynamic score');
 assert.notEqual(report.cases[0].layout.survivors,report.cases[1].layout.survivors,'Score differs per player and district');
 assert.notEqual(report.cases[1].layout.category,report.cases[2].layout.category,'Daily layout has its own dynamic header');
 assert.deepEqual(report.errors,[]);
 assert.deepEqual(report.missing,[]);
 console.log(JSON.stringify({ok:true,...report}));
}finally{await browser.close()}
