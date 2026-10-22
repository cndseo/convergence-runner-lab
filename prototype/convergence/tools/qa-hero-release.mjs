import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base='https://heros-convergence.72-61-167-161.sslip.io/';
const out=new URL('../../../qa-hero-release/',import.meta.url);mkdirSync(out,{recursive:true});
const file=n=>new URL(n,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const errors=[];
try{
 const page=await browser.newPage({viewport:{width:320,height:700},isMobile:true,hasTouch:true});
 page.on('pageerror',e=>errors.push(e.message));await page.route('**/api/v1/**',r=>r.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.evaluate(()=>{localStorage.setItem('convergence_hero_v1',JSON.stringify({version:1,heroId:'lyceens-leo',xp:240,equipment:'reflective-pack',completedRunIds:[]}));localStorage.setItem('convergence_vertical_v1',JSON.stringify({parisVersion:1,parisLevel:2,level:2,crowdUpgrade:1,strengthUpgrade:1}));});
 await page.reload({waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.locator('#hero-wardrobe').click();await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
 await page.screenshot({path:file('leo-320.png')});await page.locator('.hero-close').click();await page.locator('#play-btn').click();await page.waitForTimeout(1000);
 await page.evaluate(()=>{const g=window.__convergence;g.qaManual=true;g.parisJourney.card.classList.remove('visible');g.update(.1);});
 assert.equal(await page.locator('#hero-power').isVisible(),true);await page.locator('#hero-power').click();assert.match(await page.locator('#tactical-hint').innerText(),/Gauche/);
 await page.screenshot({path:file('power-320.png')});
 await page.evaluate(()=>window.__convergence.winGame());await page.waitForTimeout(700);
 await page.locator('#next-btn').scrollIntoViewIfNeeded();await page.screenshot({path:file('win-320.png')});await page.locator('#next-btn').click();await page.waitForTimeout(400);assert.equal(await page.evaluate(()=>window.__convergence.state),'playing');
 const build=await page.locator('script[type=module]').getAttribute('src');assert.deepEqual(errors,[]);
 writeFileSync(file('results.json'),JSON.stringify({base,build,ok:true,errors,checks:['tall hero preview framing','320px wardrobe scroll','power tap and exact next-TV hint','320px result navigation']},null,2));
 console.log(JSON.stringify({ok:true,build,errors}));
}finally{await browser.close();}
