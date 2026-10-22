import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const root='C:/CITYOS/convergence-qa-20261019/front-contact-fix';
fs.mkdirSync(root,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={scenarios:[],errors:[],url:base};
try {
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await page.click('#play-btn');
 await page.waitForFunction(()=>window.__convergence?.levelGenerator?.plan,{timeout:25000});
 for(const spec of [
  {name:'level1-normal',size:5,kind:'first'},
  {name:'level1-recruits',size:19,kind:'first'},
  {name:'level1-large',size:50,kind:'first'},
  {name:'level1-bac-like-user',size:3,kind:'second',shields:16},
  {name:'boss-front',size:19,kind:'boss'}
 ]){
  const data=await page.evaluate((spec)=>{
   const g=window.__convergence;
   g.qaManual=true;g.startGame();
   g.crowdManager.clear();
   g.crowdManager.createPlayerCrowd(spec.size);
   g.shields=spec.shields||0;
   const e=spec.kind==='boss'?g.levelGenerator.boss:
      g.levelGenerator.enemies[spec.kind==='second'?1:0];
   g.trackZ=e.z-1.86;
   g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
   g.levelGenerator.updateVisibility(g.trackZ);
   if(spec.kind==='boss')g.checkBossFight(); else g.checkEnemyCollisions();
   if(g.state!=='fighting')return {error:'no fight',state:g.state};
   for(let n=0;n<35;n++)g.update(.05);
   const standing=g.fightingEnemy.isBoss?g.levelGenerator.boss.officers:g.fightingEnemy.officers;
   const all=standing.filter(o=>o.parent===g.fightingEnemy.meshGroup && !o.userData.combatRetired);
   const vec=g.camera.position.clone();
   const officer=all[0];
   if(!officer)return {error:'no police standing',state:g.state};
   const o=officer.getWorldPosition(vec.clone());
   const forward=officer.getWorldDirection(vec.clone()).normalize();
   const playerWorld=g.crowdManager.playerGroup.getWorldPosition(vec.clone());
   // Officers on the flank still face +Z, not diagonally to the group centre.
   const dot=forward.z;
   const protesters=g.crowdManager.playerStickmen.filter(o=>o.parent);
   const front=Math.min(...protesters.map(o=>o.getWorldPosition(vec.clone()).z));
   const policeFront=Math.max(...all.map(o=>o.getWorldPosition(vec.clone()).z));
   const gap=front-policeFront;
   const nearest=Math.min(...all.flatMap(o=>{
      const a=o.getWorldPosition(vec.clone());
      return protesters.map(p=>{const b=p.getWorldPosition(vec.clone());return Math.hypot(a.x-b.x,a.z-b.z);});
   }));
   return {state:g.state,fightElapsed:g.fightElapsed,policeFacesCrowd:dot,policeFront,front,gap,nearest,
    members:protesters.length,policeStanding:all.length,playerGroupZ:g.crowdManager.playerGroup.position.z,
    camera:{x:g.camera.position.x,y:g.camera.position.y,z:g.camera.position.z}};
  },spec);
  assert.ok(!data.error,JSON.stringify({spec,data}));
  assert.ok(data.policeFacesCrowd>.8,'police facing wrong direction '+JSON.stringify({spec,data}));
  assert.ok(data.gap>.18&&data.gap<1.25,'front lines not at close contact '+JSON.stringify({spec,data}));
  assert.ok(data.nearest<1.7,'first rank too far '+JSON.stringify({spec,data}));
  report.scenarios.push({...spec,...data});
  if(spec.name==='level1-recruits'){
   const cameras=[
    {key:'headon',x:0,y:5.4,z:7.4,tx:0,ty:1,tz:-.9},
    {key:'angle',x:1.8,y:5.2,z:7.5,tx:0,ty:1,tz:-.9},
    {key:'side',x:3.2,y:4.9,z:7.8,tx:0,ty:1,tz:-.9},
    {key:'high',x:1.3,y:6,z:8,tx:0,ty:.8,tz:-.9}
   ];
   for(const cam of cameras){
    await page.evaluate(cam=>{
     const g=window.__convergence;
     g.camera.position.set(g.playerX+cam.x,cam.y,-g.trackZ+cam.z);
     g.camera.lookAt(g.playerX+cam.tx,cam.ty,-g.trackZ+cam.tz);
    },cam);
    await page.screenshot({path:root+'/'+cam.key+'.png'});
   }
  }else{
   await page.screenshot({path:root+'/'+spec.name+'.png'});
  }
  console.log('CONTACT '+spec.name+' '+JSON.stringify(data));
 }
 assert.deepEqual(report.errors,[]);
 fs.writeFileSync(root+'/report.json',JSON.stringify(report,null,2));
 console.log('FRONT_CONTACT_PASS '+report.scenarios.length);
} finally {await browser.close();}
