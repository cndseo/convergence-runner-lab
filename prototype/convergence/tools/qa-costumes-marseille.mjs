import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/costumes-marseille';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
  const page=await ctx.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__convergence?.challengeHub,{timeout:22000});
  await page.locator('#premium-btn').click();
  assert.equal(await page.locator('.challenge-product').count(),5);
  await page.waitForFunction(()=>[...document.querySelectorAll('.character-product-thumb')].every(i=>i.complete&&i.naturalWidth>100),{timeout:12000});
  await page.screenshot({path:dir+'/shop-'+viewport.width+'.png'});
  await page.getByRole('button',{name:/TESTER DINOSAURE/}).click();
  await page.waitForFunction(()=>!!window.__convergence?.crowdManager?.playerStickmen?.[1]?.userData?.costumeBillboard,{timeout:22000});
  let costume=await page.evaluate(()=>{
   const g=window.__convergence;g.qaManual=true;for(let i=0;i<25;i++)g.update(.05);
   const p=g.crowdManager.playerStickmen[1];
   return {kind:p.userData.costumeAvatar,source:p.userData.costumeBillboard?.material.map.image.src,
    leader:!!g.crowdManager.playerStickmen[0].userData.approvedLeader,
    count:g.crowdManager.getPlayerCount(),mode:g.mode};
  });
  assert.equal(costume.kind,'dinosaur');assert.match(costume.source,/dinosaur-back.webp/);
  assert.equal(costume.leader,true);assert.equal(costume.count,5);
  await page.screenshot({path:dir+'/dinosaur-'+viewport.width+'.png'});
  await page.evaluate(()=>{
   const g=window.__convergence;g.clearLevel();g.state='menu';
   g.ui.hideAllScreens();g.ui.transitionIn(g.ui.startScreen);
  });
  await page.waitForTimeout(420);
  await page.locator('#premium-btn').click();
  await page.getByRole('button',{name:/TESTER UNE SUPER ATTAQUE/}).click();
  const start=await page.evaluate(()=>{
   const g=window.__convergence;g.qaManual=true;
   const e=g.levelGenerator.enemies[0];g.trackZ=e.z;
   g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
   g.levelGenerator.updateVisibility(g.trackZ);
   g.checkEnemyCollisions();
   g.marseille.update(.01);
   return {state:g.state,first:e.kind,charges:g.marseille.available(),
    button:g.marseille.button.style.display,boss:g.levelGenerator.boss.defeated,
    population:g.crowdManager.getPlayerCount()};
  });
  assert.equal(start.state,'fighting');
  assert.equal(start.charges,1);
  assert.equal(start.button,'block');
  await page.locator('#marseille-support-button').click();
  await page.waitForFunction(()=>window.__convergence?.marseille?.active===true,{timeout:20000});
  const active=await page.evaluate(()=>{
   const g=window.__convergence;
   for(let i=0;i<56;i++)g.update(.05);
   const system=g.marseille;
   const sprites=system.sprites.map(x=>({name:x.sprite.name,x:x.sprite.position.x,z:x.sprite.position.z,
    texture:x.sprite.material.map.image.src}));
   const police=g.fightingEnemy?.officers.filter(o=>o.userData.marseilleOrigin).length;
   return {active:system.active,credits:system.available(),elapsed:system.elapsed,
    sprites,retreatingOfficers:police,population:g.crowdManager.getPlayerCount()};
  });
  assert.equal(active.active,true);assert.equal(active.credits,0);
  assert.equal(active.sprites.length,6);
  assert.ok(active.sprites.every(x=>/marseille-(front|back).webp/.test(x.texture)));
  assert.ok(active.retreatingOfficers>0);
  await page.screenshot({path:dir+'/marseille-rush-'+viewport.width+'.png'});
  const finish=await page.evaluate(()=>{
   const g=window.__convergence;for(let i=0;i<60;i++)g.update(.05);
   return {state:g.state,defeated:g.levelGenerator.enemies[0].defeated,
    alive:g.crowdManager.getPlayerCount(),support:g.marseille.available(),
    sprites:g.marseille.sprites.length,dailyAllowed:g.mode==='daily'};
  });
  assert.equal(finish.state,'playing');assert.equal(finish.defeated,true);
  assert.equal(finish.support,0);assert.equal(finish.sprites,0);
  assert.equal(finish.alive,start.population);
  const daily=await page.evaluate(()=>{
   const g=window.__convergence;
   g.mode='daily';g.marseille.demoCharges=3;g.marseille.showButton();
   return {hidden:g.marseille.button.style.display==='none'};
  });
  assert.equal(daily.hidden,true);
  assert.deepEqual(errors,[]);
  console.log('COSTUMES_SUPPORT_QA_PASS '+JSON.stringify({viewport,costume,start,active:{...active,sprites:active.sprites.length},finish,daily,errors}));
  await ctx.close();
 }
}finally{await browser.close();}
