import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4322/convergence-runner-lab/convergence/';
const out=process.env.QA_OUTPUT||'C:/CITYOS/convergence-qa-20261019/lbd-longrange';
fs.mkdirSync(out,{recursive:true});
const report={url,checks:[],errors:[],httpErrors:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 for(const [width,height,count] of [[390,844,5],[390,844,50],[320,700,5]]){
  const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1.5,isMobile:true,hasTouch:true});
  const page=await context.newPage();
  page.on('pageerror',e=>report.errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)report.httpErrors.push({status:r.status(),url:r.url()});});
  await page.goto(url+(url.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
  await page.evaluate(n=>window.__convergence.getStartingCrowdSize=()=>n,count);
  await page.click('#play-btn');
  await page.waitForFunction(n=>window.__convergence?.crowdManager?.playerCount===n&&window.__convergence.crowdManager.playerStickmen.slice(1,Math.min(n,12)).every(r=>r.userData.realisticAvatar),count,{timeout:45000});
  await page.waitForTimeout(500);
  const start=await page.evaluate(()=>{
   const g=window.__convergence;g.qaManual=true;
   const enemy=g.levelGenerator.enemies.find(e=>e.kind==='crs'||e.kind==='bac')||g.levelGenerator.enemies[0];
   const dist=45;
   // Isolate long-range physics from choice-gate gameplay in this QA scenario.
   g.levelGenerator.gates.forEach(x=>x.passed=true);
   g.levelGenerator.obstacles.forEach(x=>x.passed=true);
   g.trackZ=enemy.z-dist;g.crowdManager.updatePlayerPosition(0,-g.trackZ);
   g.levelGenerator.updateVisibility(g.trackZ);
   const fired=g.lbdSystem.launch(true);
   g.lbdSystem.nextFire=100;
   g.renderer.render(g.scene,g.camera);
   return {fired,distance:enemy.z-g.trackZ,bullets:g.lbdSystem.bullets.length,officers:enemy.meshGroup.children.length};
  });
  assert.equal(start.fired,true,'no ranged LBD shot');
  assert.equal(start.distance,45);
  assert.ok(start.officers>=16);
  let mid;
  for(let i=0;i<28;i++)mid=await page.evaluate(()=>{
   const g=window.__convergence;g.update(1/60);g.renderer.render(g.scene,g.camera);
   return {bullets:g.lbdSystem.bullets.length,position:g.lbdSystem.bullets[0]?.mesh.position.toArray(),stats:{...g.lbdSystem.stats}};
  });
  if(count===5)await page.screenshot({path:path.join(out,'lbd-travel-'+width+'.png')});
  const result=await page.evaluate(()=>{
   const g=window.__convergence;
   for(let i=0;i<100;i++)g.update(1/60);
   g.renderer.render(g.scene,g.camera);
   const shots=g.lbdSystem,injured=g.crowdManager.playerStickmen.filter(x=>x.userData.lbdInjury);
   return {stats:{...shots.stats},injuries:injured.map(x=>x.userData.lbdInjury.kind),marks:injured.filter(x=>x.userData.lbdMark).length,bullets:shots.bullets.length,particles:shots.particles.length,decals:shots.decals.length,p02:g.crowdManager.playerStickmen[0].userData.approvedLeader!==undefined,playerCount:g.crowdManager.playerCount,gameState:g.state};
  });
  assert.equal(result.p02,true);assert.equal(result.playerCount,count);
  assert.equal(result.stats.fired,1);
  assert.equal(result.bullets,0);
  assert.ok(result.stats.hits>=1,'Expected a real swept LBD hit (not forced)');
  assert.ok(result.marks>=1);
  await page.screenshot({path:path.join(out,'lbd-impact-'+width+'-'+count+'.png')});
  // Force one severe state to verify non-graphic eye injury visual on a real asset.
  if(count===5){
   const severe=await page.evaluate(()=>{
     const g=window.__convergence,runner=g.crowdManager.playerStickmen[2];
     if(runner.userData.lbdMark){runner.remove(runner.userData.lbdMark);delete runner.userData.lbdMark;}
     g.lbdSystem.makeMark(runner,'eye');
     runner.userData.lbdInjury={kind:'eye',at:g.lbdSystem.elapsed};
     // Readable close-up for injury-marker QA without altering gameplay cameras.
     g.camera.position.set(.7,3.0,-g.trackZ+4.6);
     g.camera.lookAt(0,1.25,-g.trackZ-.35);
     g.renderer.render(g.scene,g.camera);
     return {mark:!!runner.userData.lbdMark,p02:g.crowdManager.playerStickmen[0].userData.approvedLeader!==undefined};
   });
   assert.ok(severe.mark&&severe.p02);
   await page.screenshot({path:path.join(out,'eye-injury-'+width+'.png')});
   const paused=await page.evaluate(()=>{
     const g=window.__convergence;g.state='paused';
     const t=g.lbdSystem.elapsed;g.update(.5);
     return {before:t,after:g.lbdSystem.elapsed};
   });
   assert.equal(paused.before,paused.after);
  }
  // Confirm physical hazards intercept a swept long-range ray.
  if(count===5){
    const obstacle=await page.evaluate(()=>{
      const g=window.__convergence;
      const gate=g.levelGenerator.gates.find(t=>[t.leftMesh,t.rightMesh].some(p=>p?.userData.root?.userData.lbdOccluder));
      if(!gate)return {exists:false};
      const root=[gate.leftMesh,gate.rightMesh].find(p=>p.userData.root.userData.lbdOccluder).userData.root;
      gate.passed=false;root.visible=true;
      const origin=root.position.clone().set(root.position.x,.8,root.position.z-3);
      const destination=root.position.clone().set(root.position.x,.8,root.position.z+3);
      const hit=g.lbdSystem.findObstacle(origin,destination);
      gate.passed=true;
      return {exists:true,hit:!!hit};
    });
    if(obstacle.exists)assert.equal(obstacle.hit,true,'obstacle should absorb shot');
    report.checks.push({obstacle});
  }
  report.checks.push({width,height,count,start,mid,result});
  await context.close();
 }
 assert.deepEqual(report.errors,[]);
 assert.deepEqual(report.httpErrors,[]);
 fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}
