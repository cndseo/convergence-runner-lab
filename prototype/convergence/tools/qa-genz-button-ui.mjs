import assert from 'node:assert/strict';
import {chromium} from 'playwright-core';

const browser=await chromium.launch({
 executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']
});
const base=process.env.GENZ_QA_URL||
 'http://127.0.0.1:4656/convergence-runner-lab/convergence/?qa=1&decors=1';
const sizes=[{width:390,height:844},{width:320,height:700}];
try {
 for(const viewport of sizes){
  const page=await browser.newPage({viewport,isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.__convergence?.genzFireworks,{timeout:12000});
  await page.evaluate(()=>{
   const g=window.__convergence;
   g.qaManual=true;g.ui.hideAllScreens();g.startGame();
   g.parisJourney.card.classList.remove('visible');
   g.parisJourney.card.style.display='none';
   g.genzFireworks.demoCharges=2;g.genzFireworks.showButton();
  });
  const b=page.locator('#genz-ammo-button');
  const badge=b.locator('.genz-ammo-count');
  assert.equal(await b.locator('.genz-fire-label').innerText(),'GenZ 🧨');
  assert.equal(await badge.innerText(),'2');
  const rect=await b.boundingBox();
  assert.ok(rect,JSON.stringify(viewport));
  assert.ok(rect.x>=0&&rect.x+rect.width<=viewport.width,
   JSON.stringify({viewport,rect}));
  assert.ok(rect.x>viewport.width-95,JSON.stringify({viewport,rect}));
  assert.ok(Math.abs(rect.y+rect.height/2-viewport.height*.58)<25,
   JSON.stringify({viewport,rect}));
  assert.ok(Math.abs(rect.width-rect.height)<1,
   JSON.stringify({viewport,rect}));
  assert.equal(await b.evaluate(x=>getComputedStyle(x).borderRadius),'50%');
  await b.click();
  await page.waitForTimeout(110);
  assert.equal(await badge.innerText(),'1');
  await page.evaluate(()=>{for(let n=0;n<26;n++)window.__convergence.genzFireworks.update(.05)});
  await b.click();
  await page.waitForTimeout(110);
  assert.equal(await badge.innerText(),'0');
  assert.equal(await b.isDisabled(),false);
  assert.equal(await b.evaluate(x=>x.classList.contains('genz-empty')),true);
  await b.click();
  const shop=await page.evaluate(()=>{
   const g=window.__convergence;return {state:g.state,
    open:!g.challengeHub.panel.classList.contains('hidden')};
  });
  assert.deepEqual(shop,{state:'paused',open:true});
  await page.locator('.challenge-close').click();
  assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({viewport,status:'PASS',rect,label:'GenZ 🧨',
   ammo:[2,1,0],shop:'opened-and-closed',errors:[]}));
  await page.close();
 }
} catch(e){console.error('QA_FAILURE',e.stack);process.exitCode=1;}
finally{await browser.close();}
