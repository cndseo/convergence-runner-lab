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
  const prices=await page.locator('.challenge-product button').allInnerTexts();
  assert.deepEqual(prices.map(s=>s.trim()),['1,99 €','1,99 €','2,99 €','8,97 €','29,90 €']);
  await page.waitForFunction(()=>[...document.querySelectorAll('.character-product-thumb')].every(i=>i.complete&&i.naturalWidth>100),{timeout:12000});
  await page.screenshot({path:dir+'/shop-'+viewport.width+'.png'});
  await page.getByRole('button',{name:/TESTER DINOSAURE/}).click();
  await page.waitForFunction(()=>!!window.__convergence?.crowdManager?.playerStickmen?.[1]?.userData?.costumeModel3D,{timeout:22000});
  let costume=await page.evaluate(()=>{
   const g=window.__convergence;g.qaManual=true;for(let i=0;i<25;i++)g.update(.05);
   const p=g.crowdManager.playerStickmen[1];
   const model=p.userData.costumeModel3D;
   const geometries=[],spriteNames=[],art=[];
   model.traverse(o=>{if(o.isMesh)geometries.push(o.geometry.type);if(o.isSprite)spriteNames.push(o.name);
     if(o.name==='ORIGINAL_ART_FABRIC_DECAL')art.push(o.material.map?.image?.width);});
   return {kind:p.userData.costumeAvatar,modelName:model.name,
    realMeshCount:geometries.length,sprites:spriteNames,art,
    tail3D:model.getObjectByName('3D_INFLATABLE_TAIL')?.isMesh===true,
    leader:!!g.crowdManager.playerStickmen[0].userData.approvedLeader,
    count:g.crowdManager.getPlayerCount(),mode:g.mode};
  });
  assert.equal(costume.kind,'dinosaur');
  assert.match(costume.modelName,/3D/);
  assert.ok(costume.realMeshCount>25,'Dinosaur needs volumetric parts');
  assert.deepEqual(costume.sprites,[]);
  assert.equal(costume.tail3D,true,'Dinosaur needs an actual volumetric tail');
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
  await page.waitForFunction(()=>window.__convergence?.marseille?.active===true,{timeout:40000});
  const active=await page.evaluate(()=>{
   const g=window.__convergence;
   for(let i=0;i<56;i++)g.update(.05);
   const system=g.marseille;
   const actors=system.actors.map(x=>{
      let meshes=0,sprites=0,skinned=0;
      x.model.traverse(o=>{if(o.isMesh)meshes++;if(o.isSprite)sprites++;if(o.isSkinnedMesh)skinned++;});
      return {name:x.model.name,x:x.model.position.x,z:x.model.position.z,
        yaw:x.model.rotation.y,lane:x.lane,meshes,sprites,skinned,rigged:!!x.rig};
   });
   const police=g.fightingEnemy?.officers.filter(o=>o.userData.marseilleOrigin).length;
   return {active:system.active,credits:system.available(),elapsed:system.elapsed,
    actors,retreatingOfficers:police,population:g.crowdManager.getPlayerCount()};
  });
  assert.equal(active.active,true);assert.equal(active.credits,0);
  assert.equal(active.actors.length,12);
  assert.deepEqual([...new Set(active.actors.map(x=>x.lane))].sort(),[0,1,2]);
  assert.ok(active.actors.every(x=>x.meshes>=7&&x.sprites===0),'every reinforcement must be real 3D');
  assert.ok(active.actors.filter(x=>x.rigged&&x.skinned>0).length>=6,
   'most Marseille avatars must use animated realistic glTF rigs');
  assert.ok(active.retreatingOfficers>0);
  await page.screenshot({path:dir+'/marseille-rush-'+viewport.width+'.png'});
  const finish=await page.evaluate(()=>{
   const g=window.__convergence;for(let i=0;i<60;i++)g.update(.05);
   return {state:g.state,defeated:g.levelGenerator.enemies[0].defeated,
    alive:g.crowdManager.getPlayerCount(),support:g.marseille.available(),
    actors:g.marseille.actors.length,dailyAllowed:g.mode==='daily'};
  });
  assert.equal(finish.state,'playing');assert.equal(finish.defeated,true);
  assert.equal(finish.support,0);assert.equal(finish.actors,0);
  assert.equal(finish.alive,start.population);
  const daily=await page.evaluate(()=>{
   const g=window.__convergence;
   g.mode='daily';g.marseille.demoCharges=3;g.marseille.showButton();
   return {hidden:g.marseille.button.style.display==='none'};
  });
  assert.equal(daily.hidden,true);
  assert.deepEqual(errors,[]);
  console.log('COSTUMES_SUPPORT_QA_PASS '+JSON.stringify({viewport,costume,start,active:{...active,actors:active.actors.length},finish,daily,errors}));
  await ctx.close();
 }
}finally{await browser.close();}
