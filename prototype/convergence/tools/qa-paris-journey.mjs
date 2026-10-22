import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.PARIS_QA_URL||'http://127.0.0.1:4652/convergence-runner-lab/convergence/';
const out=new URL('../../../qa-paris/',import.meta.url);mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const errors=[],badAssets=[],report={url:base,levels:[]};
try{
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('404'))errors.push(m.text());});
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))badAssets.push(r.url());});
 await page.goto(base+'?qa=1&decors=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence?.parisJourney);
 await page.evaluate(()=>window.__convergence.qaManual=true);
 assert.equal(await page.locator('#paris-level-select option').count(),12);
 for(let id=1;id<=12;id++){
  await page.evaluate(id=>window.__convergence.parisJourney.playDistrict(id),id);
  await page.waitForTimeout(250);
  const entry=await page.evaluate(id=>{
   const g=window.__convergence,w=g.levelGenerator.parisEnvironment;
   g.parisJourney.card.classList.remove('visible');g.parisJourney.card.style.transition='none';
   const positions=[0,48,96,144,182,215,0],stats=[];
   for(const p of positions){
    w.update(p);w.root.updateMatrixWorld(true);let invalid=0;
    w.root.traverse(o=>{
     if(o.matrixWorld.elements.some(v=>!Number.isFinite(v)))invalid++;
     if(o.isInstancedMesh&&o.instanceMatrix.array.some(v=>!Number.isFinite(v)))invalid++;
    });
    if(invalid)throw Error('Invalid transforms in district '+id+': '+invalid);
    stats.push({...w.diagnostics(),position:p});
   }
   const p=id===12?162:18;
   g.trackZ=p;g.crowdManager.updatePlayerPosition(0,-p);g.levelGenerator.updateVisibility(p);
   g.camera.position.set(0,6.3,-p+8.4);g.camera.lookAt(0,.8,-p-8);
   g.renderer.render(g.scene,g.camera);
   return {id,geo:g.geographicLevel,level:g.level,state:g.state,gates:g.levelGenerator.gates.length,
    winners:g.levelGenerator.plan.proof.winningPaths,stats,
    gift:!!g.levelGenerator.marseilleBonus,drawCalls:g.renderer.info.render.calls,
    triangles:g.renderer.info.render.triangles,geometries:g.renderer.info.memory.geometries,
    hud:g.ui.levelDisplay.textContent};
  },id);
  assert.equal(entry.geo,id);assert.equal(entry.state,'playing');assert.equal(entry.gates,10);assert.ok(entry.winners>0);
  assert.ok(entry.stats.every(s=>s.chunks<=5),'bounded streamed chunks');
  assert.equal(entry.gift,id===1);
  await page.screenshot({path:new URL('level-'+id+'.png',out).pathname.replace(/^\/([A-Za-z]:)/,'$1')});
  report.levels.push(entry);
 }
 // Real progression uses geographic state, not front difficulty.
 report.progression=await page.evaluate(()=>{
  const g=window.__convergence;
  g.parisJourney.playDistrict(10);g.level=3;g.levelGenerator.boss.defeated=true;g.winGame();
  const tenth={state:g.state,geo:g.parisLevel,front:g.level,complete:g.campaignComplete};
  g.startGame();const next={scene:g.levelGenerator.parisEnvironment.config.id,geo:g.geographicLevel};
  g.parisJourney.playDistrict(12);g.level=4;g.levelGenerator.boss.defeated=true;g.winGame();
  const last={state:g.state,phase:g.story.phase,geo:g.geographicLevel,complete:g.campaignComplete};
  g.story.elapsed=8;g.playerX=g.story.targetX;g.trackZ=g.story.targetProgress;
  g.story.updateChase(.02);g.story.updateCapture(2);
  return {tenth,next,last,finished:{state:g.state,complete:g.campaignComplete,geo:g.geographicLevel}};
 });
 assert.deepEqual(report.progression.tenth,{state:'win',geo:11,front:4,complete:false});
 assert.equal(report.progression.next.scene,11);
 assert.equal(report.progression.last.state,'final_chase');
 assert.equal(report.progression.finished.complete,true);assert.equal(report.progression.finished.geo,12);
 report.gift=await page.evaluate(()=>{
  const g=window.__convergence;g.parisJourney.playDistrict(1);
  g.trackZ=g.levelGenerator.marseilleBonus.z;g.checkMarseilleBonusCollision();g.checkMarseilleBonusCollision();
  return {reserve:g.marseille.available(),active:g.marseille.active,count:g.crowdManager.getPlayerCount(),gates:g.gateHistory.length};
 });
 assert.deepEqual(report.gift,{reserve:1,active:false,count:5,gates:0});
 // Pointer swipe goes through the existing touch listeners.
 await page.evaluate(()=>{const g=window.__convergence;g.playerX=0;g.state='playing';});
 const cdp=await page.context().newCDPSession(page);
 await page.waitForTimeout(400);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:195,y:650}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:275,y:650}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 assert.ok(await page.evaluate(()=>window.__convergence.playerX>0));
 // Genuine full simulation of all 10 choice rows and combat fronts at both endpoints.
 for(const id of [1,12]){
  await page.evaluate(id=>{const g=window.__convergence;g.parisJourney.playDistrict(id);
   g.audio.setAmbienceMuted?.(true);g.qaPath=g.levelGenerator.plan.proof.winningPath;g.qaTicks=0;},id);
  let state='playing';
  for(let batch=0;batch<70&&!['win','lose'].includes(state);batch++){
   state=await page.evaluate(()=>{
    const g=window.__convergence;
    for(let i=0;i<100;i++){
     if(g.state==='playing'){
      const index=g.levelGenerator.gates.findIndex(p=>!p.passed);
      if(index>=0)g.playerX=g.qaPath[index]==='left'?-2.5:2.5;
     }
     if(g.state==='final_chase')g.playerX=g.story.targetX;
     g.update(.05);g.qaTicks++;
     if(['win','lose','boss_defeated'].includes(g.state))break;
    }
    return g.state;
   });
   if(state==='boss_defeated')await page.waitForTimeout(1250);
  }
  const result=await page.evaluate(()=>{const g=window.__convergence;return {state:g.state,geography:g.geographicLevel,
   gates:g.gateHistory.length,count:g.crowdManager.getPlayerCount(),complete:g.campaignComplete,ticks:g.qaTicks};});
  assert.equal(result.state,'win');assert.equal(result.gates,10);
  report['run'+id]=result;
 }
 report.errors=errors;report.badAssets=badAssets;
 assert.deepEqual(errors,[]);assert.deepEqual(badAssets,[]);
 writeFileSync(new URL('results.json',out),JSON.stringify(report,null,2));
 console.log(JSON.stringify({ok:true,levels:report.levels.map(x=>({id:x.id,drawCalls:x.drawCalls,triangles:x.triangles})),
  progression:report.progression,run1:report.run1,run12:report.run12,errors,badAssets},null,2));
}finally{await browser.close();}
