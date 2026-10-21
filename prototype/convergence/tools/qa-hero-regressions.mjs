import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4674/';
const out=new URL('../../../qa-hero-regressions/',import.meta.url);mkdirSync(out,{recursive:true});
const file=name=>new URL(name,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const report={base,districts:[],powers:[],render:[],errors:[],badAssets:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/v1/**',route=>route.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 const legacy={parisVersion:1,parisLevel:6,level:6,coins:994,crowdUpgrade:4,strengthUpgrade:2,ownedSkins:['blue','purple'],equippedSkin:'purple',ownedThemes:['default','night'],equippedTheme:'night'};
 await page.evaluate(save=>localStorage.setItem('convergence_vertical_v1',JSON.stringify(save)),legacy);await page.reload({waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.locator('#play-btn').click();await page.waitForSelector('#hero-dialog');await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
 await page.locator('[data-family="gilets"]').click();await page.locator('[data-hero="gilets-marcel"]').click();await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);await page.locator('#hero-confirm').click();
 await page.evaluate(()=>window.__convergence.qaManual=true);
 assert.deepEqual(await page.evaluate(()=>JSON.parse(localStorage.getItem('convergence_vertical_v1'))),legacy);
 assert.equal(await page.evaluate(()=>window.__convergence.crowdManager.playerCount),20); // 11 + 9 already-earned members
 const heroSave=await page.evaluate(()=>window.__convergence.heroes.save);
 await page.evaluate(()=>{const g=window.__convergence;g.crowdUpgrade=1;g.strengthUpgrade=1;g.equippedTheme='default';g.applyTheme();});
 for(let id=1;id<=12;id++){
  await page.evaluate(id=>{window.__convergence.parisJourney.playDistrict(id);},id);
  for(let batch=0;batch<100;batch++){
   const state=await page.evaluate(()=>{const g=window.__convergence,path=g.levelGenerator.plan.proof.winningPath;
    for(let i=0;i<120;i++){if(g.state==='playing')g.playerX=(path[g.gateHistory.length]||'left')==='left'?-2.5:2.5;if(g.state==='final_chase')g.playerX=g.story.targetX;g.update(.05);if(['win','lose','boss_defeated'].includes(g.state))break;}return g.state;});
   if(state==='boss_defeated')await page.waitForTimeout(1300);if(state==='lose')throw Error('District '+id+' lost');if(state==='win')break;
  }
  const result=await page.evaluate(()=>{const g=window.__convergence;return {state:g.state,survivors:g.crowdManager.playerCount,start:g.levelGenerator.plan.startCount,gates:g.gateHistory.length};});assert.equal(result.state,'win');assert.equal(result.gates,10);assert.equal(result.start,id===1?5:11);report.districts.push({id,...result});
 }
 assert.deepEqual(await page.evaluate(()=>window.__convergence.heroes.save),heroSave); // practice never farms XP
 for(const id of ['genz-lea','gilets-marcel','soignants-lucas','pompiers-hugo','lyceens-julie']){
  const result=await page.evaluate(id=>{const g=window.__convergence;g.heroes.save.heroId=id;g.parisJourney.playDistrict(2);g.parisJourney.card.classList.remove('visible');
   g.tearGasSystem.detonate(g.camera.position.clone().set(0,0,0));
   const before={count:g.crowdManager.playerCount,shields:g.shields,coins:g.coins,clouds:g.tearGasSystem.clouds.length};
   const activated=g.heroes.activate(),effect=g.heroes.effect,twice=g.heroes.activate(),speed=g.heroes.speedFactor;
   const after={count:g.crowdManager.playerCount,shields:g.shields,coins:g.coins,clouds:g.tearGasSystem.clouds.length};
   g.heroes.update(6.1);return {id,before,after,activated,twice,effect,speed,expired:g.heroes.effect};
  },id);
  assert.equal(result.activated,true);assert.equal(result.twice,false);assert.equal(result.expired,null);assert.equal(result.before.count,result.after.count);assert.equal(result.before.shields,result.after.shields);assert.equal(result.before.coins,result.after.coins);
  if(id==='soignants-lucas')assert.equal(result.after.clouds,0);if(id==='genz-lea')assert.equal(result.speed,1.2);report.powers.push(result);
 }
 for(const hero of [null,'genz-lea']){
  await page.evaluate(hero=>{const g=window.__convergence;g.heroes.save.heroId=hero;g.parisJourney.playDistrict(2);g.crowdManager.addToPlayerCrowd(72-g.crowdManager.playerCount);g.shields=48;},hero);
  await page.waitForTimeout(2500);
  const stats=await page.evaluate(()=>{const g=window.__convergence,c=g.crowdManager;for(let i=0;i<30;i++)c.update(.05);g.trackZ=32;g.playerX=0;c.updatePlayerPosition(0,-32);g.levelGenerator.updateVisibility(32);g.levelGenerator.streetPresence.update(32,.1,true);g.camera.position.set(0,c.getCameraHeight(),-32+c.getCameraDistance());g.camera.lookAt(0,.8,-37);g.renderer.render(g.scene,g.camera);
   const gl=g.renderer.getContext(),ext=gl.getExtension('WEBGL_debug_renderer_info');return {hero:g.heroes.save.heroId,skinned:c.playerStickmen.filter(r=>r.userData.realHumanoid).length,instances:c.impostors.mesh.count,total:c.density.total,calls:g.renderer.info.render.calls,triangles:g.renderer.info.render.triangles,textures:g.renderer.info.memory.textures,geometries:g.renderer.info.memory.geometries,renderer:ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):'unavailable'};});
  assert.equal(stats.total,312);assert.ok(stats.skinned<=12);assert.equal(stats.instances+stats.skinned,312);report.render.push(stats);
  await page.screenshot({path:file(hero?'maximum-hero.png':'maximum-baseline.png')});
 }
 // Import/export validation and backup recovery use only the hero key.
 await page.evaluate(()=>{const g=window.__convergence;g.state='win';g.heroes.save={version:1,heroId:'genz-lea',xp:360,equipment:'solidarity-scarf',completedRunIds:[]};g.heroes.persist(g.heroes.save);g.heroes.open(false);});
 await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
 const input=page.locator('#hero-dialog input[type=file]');
 await input.setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from('{broken')});await page.waitForFunction(()=>/JSON|property|Unexpected/i.test(document.querySelector('.hero-note').textContent));
 await input.setInputFiles({name:'foreign.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({...heroSave,heroId:'gilets-marcel'}))});await page.waitForFunction(()=>document.querySelector('.hero-note').textContent.includes('autre héros'));
 await input.setInputFiles({name:'valid.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({version:1,heroId:'genz-lea',xp:240,equipment:'reflective-pack',completedRunIds:[]}))});await page.waitForFunction(()=>window.__convergence.heroes.save.equipment==='reflective-pack');
 await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);await page.screenshot({path:file('restored-kit.png')});
 await page.evaluate(()=>{const saved=localStorage.getItem('convergence_hero_v1');localStorage.setItem('convergence_hero_v1_backup',saved);localStorage.setItem('convergence_hero_v1','{broken');});await page.reload({waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 assert.equal(await page.evaluate(()=>window.__convergence.heroes.save.equipment),'reflective-pack');
 report.legacyPreserved=true;report.backupRestored=true;assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
 writeFileSync(file('results.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));
}finally{await browser.close();}
