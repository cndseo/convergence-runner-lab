import {createRequire} from 'node:module';
import {mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const dir='C:/CITYOS/convergence-tv-complete/qa-gallery';mkdirSync(dir,{recursive:true});
try{
 await page.goto(process.env.QA_URL||'http://127.0.0.1:4581/?qa=1',{waitUntil:'networkidle'});
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>window.__convergence?.levelGenerator?.gates?.length===10);
 await page.waitForFunction(()=>window.__convergence.levelGenerator.gates.every(g=>[g.leftMesh,g.rightMesh].every(x=>x.userData.root.userData.tvScreen?.userData.ready)),{timeout:22000});
 for(const index of [0,1,2,3,5,8]){
  const info=await page.evaluate(index=>{
   const g=window.__convergence,gate=g.levelGenerator.gates[index];
   g.qaManual=true;g.trackZ=gate.z-7;
   g.levelGenerator.updateVisibility(g.trackZ);
   g.camera.position.set(0,6.3,-g.trackZ+8.4);g.camera.lookAt(0,.8,-g.trackZ-9);
   g.renderer.render(g.scene,g.camera);
   const arr=[gate.leftMesh,gate.rightMesh].map(x=>x.userData.root.userData.tvScreen.userData);
   return arr.map(a=>({file:a.originalFile,adapted:a.adapted,value:a.tvValue}));
  },index);
  await page.screenshot({path:dir+'/gate-'+index+'.png'});
  console.log('GALLERY_GATE',index,JSON.stringify(info));
 }
 assert.deepEqual(errors,[]);
}finally{await context.close();await browser.close();}
