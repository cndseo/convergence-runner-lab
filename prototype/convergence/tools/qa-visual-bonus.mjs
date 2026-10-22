import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/visual-bonus';fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const ctx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1.5});
 const page=await ctx.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(url+'?qa=1',{waitUntil:'networkidle'});await page.click('#play-btn');
 await page.waitForTimeout(1200);
 await page.screenshot({path:dir+'/first-bonus-gate.png'});
 const result=await page.evaluate(()=>{
  const g=window.__convergence;
  const bonuses=g.levelGenerator.gates.flatMap(x=>[x.leftGate,x.rightGate]).filter(x=>x.bonusFaction);
  const panels=g.levelGenerator.gates.flatMap(x=>[x.leftMesh,x.rightMesh]).filter(x=>x.userData.root?.userData.bonusPanel);
  const factions=[...new Set(bonuses.map(x=>x.bonusFaction))];
  const genz=bonuses.find(x=>x.bonusFaction==='genz');
  if(genz){g.applyGate(genz);g.trackZ=g.levelGenerator.enemies[0].z-25;g.crowdManager.updatePlayerPosition(0,-g.trackZ);g.levelGenerator.updateVisibility(g.trackZ);g.genzFireworks.fire();}
  g.renderer.render(g.scene,g.camera);
  return {bonuses:bonuses.length,factions,panels:panels.length,fireworks:g.genzFireworks.bursts.length,errors:[]};
 });
 assert.ok(result.panels>=4,JSON.stringify(result));
 assert.deepEqual(result.factions,['gilets','genz','pompiers','infirmieres']);
 assert.ok(result.fireworks>0);
 assert.deepEqual(errors,[]);
 await page.screenshot({path:dir+'/visual-bonus.png'});
 fs.writeFileSync(dir+'/report.json',JSON.stringify(result,null,2));
 console.log(JSON.stringify(result));
 await ctx.close();
}finally{await browser.close();}
