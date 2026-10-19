import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';

const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/three-dimensional-characters';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({
 executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']
});
const report={base,checks:[],errors:[]};
try{
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>!!window.__convergence?.challengeHub,{timeout:20000});
 for(const kind of ['spiderman','dinosaur']){
  if(kind==='spiderman'){
   await page.locator('#premium-btn').click();
   await page.getByRole('button',{name:/TESTER SPIDER-MAN/}).click();
  }else{
   await page.evaluate(()=>{
    const g=window.__convergence;
    g.demoCostumeOnce=false;g.demoCostumeConsumed=false;
    g.activeCostume='dinosaur';g.clearLevel();g.startGame();
   });
  }
  await page.waitForFunction(expected=>{
   const g=window.__convergence;
   return g.crowdManager.playerStickmen[1]?.userData.costumeModel3D?.userData.character3D.kind===expected;
  },kind,{timeout:22000});
  const stats=await page.evaluate(kind=>{
   const g=window.__convergence;g.qaManual=true;
   for(let i=0;i<28;i++)g.update(.05);
   const runner=g.crowdManager.playerStickmen[1],model=runner.userData.costumeModel3D;
   let meshes=0,sprites=0,photoDetails=0;
   model.traverse(o=>{
    if(o.isMesh)meshes++;
    if(o.isSprite)sprites++;
    if(o.name==='ORIGINAL_ART_FABRIC_DECAL')photoDetails++;
   });
   return {kind,model:model.name,meshes,sprites,photoDetails,animations:{
    leg0:model.userData.character3D.limbs.legs[0].rotation.x,
    leg1:model.userData.character3D.limbs.legs[1].rotation.x
   },leader:!!g.crowdManager.playerStickmen[0]?.userData.approvedLeader,
   count:g.crowdManager.getPlayerCount()};
  },kind);
  assert.ok(stats.meshes>25,JSON.stringify(stats));
  assert.equal(stats.sprites,0);
  assert.ok(stats.photoDetails>=1);
  assert.equal(stats.leader,true);
  assert.ok(stats.count>=5,'applying a costume must not reduce the existing crowd');
  assert.ok(Math.abs(stats.animations.leg0-stats.animations.leg1)>.1);
  report.checks.push(stats);
  const cameras=[
   {suffix:'back',offsetZ:3.5,dir:-1},
   {suffix:'front',offsetZ:-3.4,dir:1},
   {suffix:'side',offsetZ:0.15,dir:0}
  ];
  for(const c of cameras){
   await page.evaluate(c=>{
    const g=window.__convergence;
    for(const gate of g.levelGenerator.gates){
     for(const pane of [gate.leftMesh,gate.rightMesh]){
      if(pane?.userData.root)pane.userData.root.visible=false;
     }
    }
    const p=g.crowdManager.playerStickmen[1];
    const world=p.getWorldPosition(g.camera.position.clone());
    const x=world.x,y=1.45,z=world.z;
    g.camera.position.set(x+(c.dir===0?3.0:0),2.15,z+c.offsetZ);
    g.camera.lookAt(x,y,z);
   },c);
   await page.waitForTimeout(200);
   await page.screenshot({path:dir+'/'+kind+'-'+c.suffix+'.png'});
  }
 }
 await page.evaluate(()=>{
  const g=window.__convergence;
  g.activeCostume=null;g.clearLevel();g.startGame();g.qaManual=true;
  g.marseille.demoCharges=1;
  const enemy=g.levelGenerator.enemies[0];g.trackZ=enemy.z;
  g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
  g.levelGenerator.updateVisibility(g.trackZ);
  g.checkEnemyCollisions();
 });
 const triggered=await page.evaluate(async()=>{
  const g=window.__convergence;
  return await g.marseille.activate();
 });
 assert.equal(triggered,true);
 const marseille=await page.evaluate(()=>{
  const g=window.__convergence;
  for(let i=0;i<44;i++)g.update(.05);
  let meshes=0,sprites=0,skinned=0,rigged=0;
  for(const a of g.marseille.actors){
   if(a.rig)rigged++;
   a.model.traverse(o=>{if(o.isMesh)meshes++;if(o.isSprite)sprites++;if(o.isSkinnedMesh)skinned++;});
  }
  return {count:g.marseille.actors.length,meshCount:meshes,spriteCount:sprites,skinned,rigged,
    lanes:[...new Set(g.marseille.actors.map(x=>x.lane))].sort(),
    affectedPolice:g.fightingEnemy.officers.filter(x=>x.userData.marseilleOrigin).length,
    credits:g.marseille.available()};
 });
 assert.equal(marseille.count,12);
 assert.ok(marseille.meshCount>110);
 assert.ok(marseille.rigged>=6&&marseille.skinned>=6);
 assert.equal(marseille.spriteCount,0);
 assert.deepEqual(marseille.lanes,[0,1,2]);
 assert.ok(marseille.affectedPolice>0);
 assert.equal(marseille.credits,0);
 report.checks.push({marseille});
 await page.evaluate(()=>{
  const g=window.__convergence;
  const first=g.marseille.actors[4].model.getWorldPosition(g.camera.position.clone());
  g.camera.position.set(first.x+3.7,2.2,first.z+3.9);
  g.camera.lookAt(first.x,1.25,first.z);
 });
 await page.waitForTimeout(250);
 await page.screenshot({path:dir+'/marseille-close-3d.png'});
 await page.evaluate(()=>{
  const g=window.__convergence;
  g.camera.position.set(0,5.2,-g.trackZ+8);
  g.camera.lookAt(0,1,-g.trackZ-1);
 });
 await page.waitForTimeout(250);
 await page.screenshot({path:dir+'/marseille-scene-3d.png'});
 assert.deepEqual(report.errors,[]);
 fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));
 console.log('CHARACTERS_3D_QA_PASS '+JSON.stringify(report));
} finally{await browser.close();}
