import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4324/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261020/regressions';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,
 args:['--enable-webgl','--ignore-gpu-blocklist']});
const report=[];
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
  const page=await ctx.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__convergence?.challengeHub);
  const costumes=[];
  for(const id of ['spiderman','dinosaur']){
   await page.evaluate(id=>{
    const g=window.__convergence;g.qaManual=true;g.challengeHub.previewCharacter(id);
   },id);
   await page.waitForFunction(id=>window.__convergence.crowdManager.playerStickmen[1]?.userData.costumeModel3D&&
    window.__convergence.crowdManager.playerStickmen[1]?.userData.costumeAvatar===id,id);
   const model=await page.evaluate(()=>{
    const g=window.__convergence;for(let i=0;i<25;i++)g.update(.04);
    const p=g.crowdManager.playerStickmen[1],m=p.userData.costumeModel3D;
    let meshes=0,sprites=0;const maps=[];
    m.traverse(o=>{if(o.isMesh)meshes++;if(o.isSprite)sprites++;
     if(o.name==='ORIGINAL_ART_FABRIC_DECAL')maps.push({name:o.name,width:o.material.map?.image?.width,height:o.material.map?.image?.height});});
    g.renderer.render(g.scene,g.camera);
    return {id:p.userData.costumeAvatar,meshes,sprites,maps,name:m.name,
     tail:!!m.getObjectByName('3D_INFLATABLE_TAIL'),
     leader:!!g.crowdManager.playerStickmen[0].userData.approvedLeader,count:g.crowdManager.getPlayerCount()};
   });
   assert.equal(model.id,id);assert.ok(model.meshes>20);assert.equal(model.sprites,0);
   assert.ok(model.maps.length>=2 && model.maps.every(x=>x.width>100),'supplied artwork retained');
   assert.equal(model.leader,true);if(id==='dinosaur')assert.equal(model.tail,true);
   costumes.push(model);
   await page.screenshot({path:dir+'/'+id+'-'+viewport.width+'.png'});
  }
  // Exercise the pause/resume and cancelled-load paths on a real supported fight.
  const state=await page.evaluate(async()=>{
   const g=window.__convergence;g.challengeHub.previewMarseille();g.qaManual=true;
   const e=g.levelGenerator.enemies[0];g.trackZ=e.z;g.levelGenerator.updateVisibility(g.trackZ);
   g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);g.checkEnemyCollisions();
   const started=await g.marseille.activate();
   for(let i=0;i<90;i++)g.update(1/60);
   const before=g.marseille.elapsed,credits=g.marseille.available();
   g.state='paused';for(let i=0;i<30;i++)g.update(1/60);
   const paused={active:g.marseille.active,elapsed:g.marseille.elapsed,credits:g.marseille.available()};
   g.state='fighting';for(let i=0;i<600&&g.marseille.active;i++)g.update(1/60);
   const finished={state:g.state,active:g.marseille.active};
   // Starting a new run during loading must not spend a charge.
   g.challengeHub.previewMarseille();g.qaManual=true;
   const next=g.levelGenerator.enemies[0];g.trackZ=next.z;g.checkEnemyCollisions();
   const normalPreload=g.marseille.preload.bind(g.marseille);
   let release;g.marseille.preload=()=>new Promise(resolve=>{release=resolve;});
   const pending=g.marseille.activate();
   const chargeBefore=g.marseille.available();
   g.clearLevel();release(await normalPreload());
   const cancelled=await pending;
   g.marseille.preload=normalPreload;
   return {started,before,credits,paused,finished,cancelled,chargeBefore,chargeAfter:g.marseille.available()};
  });
  assert.equal(state.started,true);assert.equal(state.paused.active,true);
  assert.equal(state.paused.elapsed,state.before);assert.equal(state.paused.credits,state.credits);
  assert.equal(state.finished.state,'playing');assert.equal(state.finished.active,false);
  assert.equal(state.cancelled,false);assert.equal(state.chargeAfter,state.chargeBefore);
  assert.deepEqual(errors,[]);
  report.push({viewport,costumes,state,errors});
  console.log('MARSEILLE_REGRESSIONS_PASS '+JSON.stringify({viewport,costumes:costumes.map(x=>({id:x.id,meshes:x.meshes,leader:x.leader})),state,errors}));
  await ctx.close();
 }
}finally{await browser.close();fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));}
