import assert from 'node:assert/strict';
import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const base='http://127.0.0.1:4656/convergence-runner-lab/convergence/?qa=1&decors=1';
try{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(1600);
 console.log('READY',JSON.stringify(await page.evaluate(()=>({url:location.href,game:!!window.__convergence,body:document.body.innerText.slice(0,450),scripts:[...document.scripts].map(s=>s.src)}))));
 await page.waitForFunction(()=>window.__convergence?.challengeHub&&window.__convergence?.tearGasSystem,{timeout:6500});
 await page.evaluate(()=>{window.__convergence.qaManual=true;window.__convergence.challengeHub.open('premium');});
 const premium=await page.locator('#challenge-hub').innerText();
 assert.match(premium,/GenZ/i);
 assert.match(premium,/0,99/);
 assert.match(premium,/2,99/);
 await page.screenshot({path:'C:/CITYOS/convergence-genz-gas/qa-genz-shop.png'});
 await page.evaluate(()=>window.__convergence.challengeHub.previewGenz());
 const initial=await page.evaluate(()=>{
  const g=window.__convergence;return {demo:g.genzFireworks.demoCharges,active:g.genzFireworks.active,state:g.state,paris:g.parisLevel};
 });
 assert.equal(initial.demo,3);assert.ok(initial.active>0);
 await page.evaluate(()=>{
  const g=window.__convergence;
  g.checkBossFight();g.genzFireworks.showButton();
 });
 const shown=await page.locator('#genz-ammo-button').evaluate(e=>getComputedStyle(e).display);
 assert.notEqual(shown,'none');
 await page.locator('#genz-ammo-button').click();
 await page.waitForTimeout(180);
 const status=await page.evaluate(()=>{
  const g=window.__convergence;
  const fired=g.genzFireworks.bursts.filter(f=>f.kind==='shot').length;
  for(let i=0;i<30;i++)g.genzFireworks.update(.05);
  const suppressed=g.lbdSystem.nextFire;
  const launched=g.tearGasSystem.create();
  for(let i=0;i<35;i++)g.tearGasSystem.update(.05);
  g.renderer.render(g.scene,g.camera);
  return {charges:g.genzFireworks.demoCharges,fired,suppressed,gasLaunched:launched,clouds:g.tearGasSystem.clouds.length,gasCreated:g.tearGasSystem.stats.clouds};
 });
 assert.equal(status.charges,2);assert.ok(status.fired>0);assert.ok(status.suppressed>=2.5);
 assert.equal(status.gasLaunched,true);assert.ok(status.gasCreated>0);
 await page.screenshot({path:'C:/CITYOS/convergence-genz-gas/qa-genz-gas.png'});
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({result:'PASS',shop:'ok',initial,status,errors}));
}catch(e){console.error('QA FAILED',e.message,JSON.stringify(errors));process.exitCode=1;}
finally{await browser.close();}
