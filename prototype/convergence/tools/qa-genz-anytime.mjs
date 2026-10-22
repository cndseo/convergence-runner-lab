import assert from 'node:assert/strict';
import {chromium} from 'playwright-core';

const browser=await chromium.launch({
 executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']
});
const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
const errors=[];
page.on('pageerror',error=>errors.push(error.message));
const base=process.env.GENZ_QA_URL||'http://127.0.0.1:4656/convergence-runner-lab/convergence/?qa=1&decors=1';
try{
 await page.goto(base,{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__convergence?.genzFireworks,{timeout:12000});
 await page.evaluate(()=>{
  const g=window.__convergence;
  g.qaManual=true;g.ui.hideAllScreens();g.startGame();
  g.parisJourney.card.classList.remove('visible');
  g.parisJourney.card.style.display='none';
  g.camera.position.set(0,6.7,11);g.camera.lookAt(0,1,-8);
  g.crowdManager.updatePlayerPosition(0,0);
  g.genzFireworks.demoCharges=2;
  g.genzFireworks.showButton();
 });
 const before=await page.evaluate(()=>{
  const g=window.__convergence;
  const b=document.querySelector('#genz-ammo-button');
  return {state:g.state,active:g.genzFireworks.active,ammo:g.genzFireworks.available(),
   visible:getComputedStyle(b).display,disabled:b.disabled,label:b.textContent};
 });
 assert.equal(before.state,'playing');
 assert.equal(before.active,0); // No GenZ has been recruited yet.
 assert.equal(before.ammo,2);
 assert.equal(before.visible,'block');
 assert.equal(before.disabled,false);
 await page.locator('#genz-ammo-button').click();
 await page.waitForTimeout(90);
 const first=await page.evaluate(()=>{
  const g=window.__convergence,fx=g.genzFireworks;
  for(let n=0;n<9;n++)fx.update(.05);
  g.renderer.render(g.scene,g.camera);
  return {state:g.state,ammo:fx.available(),launches:fx.launches,
   projectiles:fx.bursts.filter(b=>b.kind==='shot').length,
   trail:fx.bursts.find(b=>b.kind==='shot')?.tail?.length||0,
   smoke:fx.bursts.filter(b=>b.kind==='smoke').length,
   shooter:g.crowdManager.playerStickmen.some(r=>r.userData.genzLauncher)};
 });
 assert.equal(first.state,'playing');
 assert.equal(first.ammo,1);assert.equal(first.launches,1);
 assert.equal(first.projectiles,1);assert.ok(first.trail>=8);
 assert.ok(first.smoke>0);assert.equal(first.shooter,true);
 await page.screenshot({path:'C:/CITYOS/convergence-qa-20261020/genz-gas/freefire-flight.png'});
 await page.evaluate(()=>{for(let n=0;n<27;n++)window.__convergence.genzFireworks.update(.05)});
 await page.locator('#genz-ammo-button').click();
 await page.waitForTimeout(90);
 const empty=await page.evaluate(()=>{
  const g=window.__convergence,fx=g.genzFireworks;
  fx.showButton();const b=fx.button;
  return {ammo:fx.available(),launches:fx.launches,empty:b.classList.contains('genz-empty'),
   visible:getComputedStyle(b).display,disabled:b.disabled,opacity:getComputedStyle(b).opacity};
 });
 assert.equal(empty.ammo,0);assert.equal(empty.launches,2);
 assert.equal(empty.empty,true);assert.equal(empty.visible,'block');assert.equal(empty.disabled,false);
 await page.locator('#genz-ammo-button').click();
 const shop=await page.evaluate(()=>{
  const g=window.__convergence;
  return {state:g.state,visible:!g.challengeHub.panel.classList.contains('hidden'),
   text:g.challengeHub.panel.innerText,ammo:g.genzFireworks.available()};
 });
 assert.equal(shop.state,'paused');assert.equal(shop.visible,true);
 assert.match(shop.text,/GenZ/);assert.match(shop.text,/0,99/);
 assert.equal(shop.ammo,0);
 await page.screenshot({path:'C:/CITYOS/convergence-qa-20261020/genz-gas/freefire-shop.png'});
 await page.locator('.challenge-close').click();
 assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({status:'PASS',before,first,empty,shop:{state:shop.state,visible:shop.visible},errors}));
}catch(error){
 console.error('FAIL',error.message,JSON.stringify(errors));
 process.exitCode=1;
}finally{await browser.close();}
