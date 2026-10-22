import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4672/';
const out=new URL('../../../qa-human-density/',import.meta.url);mkdirSync(out,{recursive:true});
const file=name=>new URL(name,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const report={base,scope:'Chrome desktop, mobile viewport; draw statistics, not phone frame rate',frames:[],errors:[],badAssets:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
  const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  page.on('pageerror',e=>report.errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());});
  page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
  await page.route('**/api/v1/**',route=>route.fulfill({status:503,body:'{}'}));
  await page.goto(base+'?qa=1&decors=1',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__convergence?.parisJourney);
  await page.evaluate(()=>{const g=window.__convergence;g.qaManual=true;g.parisJourney.playDistrict(1);});
  await page.waitForTimeout(4500);
  for(const [name,count,shields,progress] of [['start',5,0,0],['protection',5,8,0],['march',24,12,32],['maximum',72,48,110]]){
    await page.evaluate(({count,shields})=>{
      const g=window.__convergence,c=g.crowdManager;g.shields=shields;
      if(count>c.playerCount)c.addToPlayerCrowd(count-c.playerCount);
      else if(count<c.playerCount)c.removeFromPlayerCrowd(c.playerCount-count);
    },{count,shields});
    await page.waitForTimeout(1000);
    const frame=await page.evaluate(({name,progress})=>{
      const g=window.__convergence,c=g.crowdManager;g.state='playing';g.trackZ=progress;g.playerX=0;
      g.experience.coach.hidden=true;g.parisJourney.card.classList.remove('visible');
      c.updatePlayerPosition(0,-progress);for(let i=0;i<40;i++)c.update(.05);
      g.levelGenerator.updateVisibility(progress);g.levelGenerator.streetPresence.update(progress,.1,true);
      g.ui.updateCount(c.playerCount);g.ui.updateTacticalHUD?.();
      g.camera.position.set(0,c.getCameraHeight(),-progress+c.getCameraDistance());
      g.camera.lookAt(0,.8,-progress-5);g.renderer.render(g.scene,g.camera);
      const full={calls:g.renderer.info.render.calls,triangles:g.renderer.info.render.triangles};
      const count=c.impostors.mesh.count;c.impostors.mesh.count=c.playerStickmen.filter(r=>r.userData.impostor).length;
      g.levelGenerator.streetPresence.root.visible=false;g.renderer.render(g.scene,g.camera);
      const base={calls:g.renderer.info.render.calls,triangles:g.renderer.info.render.triangles};
      c.impostors.mesh.count=count;g.levelGenerator.streetPresence.root.visible=true;g.renderer.render(g.scene,g.camera);
      const d={...c.density};
      const bounds={minX:1,maxX:-1,minY:1,maxY:-1};
      for(let i=0;i<d.total;i++){
        const slot=c.getVisualPosition(i),point=g.camera.position.clone().set(slot.x,0,slot.z-progress).project(g.camera);
        bounds.minX=Math.min(bounds.minX,point.x);bounds.maxX=Math.max(bounds.maxX,point.x);
        bounds.minY=Math.min(bounds.minY,point.y);bounds.maxY=Math.max(bounds.maxY,point.y);
      }
      const actualVisible=c.playerStickmen.filter(r=>!r.userData.impostor).length+c.impostors.mesh.count;
      return {name,density:d,actualVisible,bounds,full,base,addedCalls:full.calls-base.calls,addedTriangles:full.triangles-base.triangles,
        patrols:g.levelGenerator.streetPresence.diagnostics(),logical:{count:c.getPlayerCount(),shields:g.shields,gates:g.gateHistory.length}};
    },{name,progress});
    assert.equal(frame.actualVisible,frame.density.total);
    assert.ok(frame.bounds.minY>-.86&&frame.bounds.minX>-.95&&frame.bounds.maxX<.95,'all ranks fit mobile framing');
    assert.equal(frame.logical.count,count);assert.equal(frame.logical.shields,shields);
    assert.ok(frame.addedCalls<=5,'four patrol batches plus existing crowd batch');
    for(const kind of ['crs','bac','bravm'])assert.ok(frame.patrols.visible[kind]>0);
    report.frames.push(frame);await page.screenshot({path:file(name+'-390.png')});
  }
  report.shieldGate=await page.evaluate(()=>{
    const g=window.__convergence,c=g.crowdManager;g.parisJourney.playDistrict(1);
    const choice=g.levelGenerator.plan.events.flatMap(e=>e.type==='choice'?[e.left,e.right]:[]).find(x=>x.op==='shield');
    if(!choice)throw Error('Shield gate missing');
    const before={count:c.playerCount,shields:g.shields,total:c.density.total};
    g.applyGate(choice);c.update(.5);
    return {choice,before,after:{count:c.playerCount,shields:g.shields,total:c.density.total}};
  });
  assert.equal(report.shieldGate.before.count,report.shieldGate.after.count);
  assert.equal(report.shieldGate.after.total-report.shieldGate.before.total,2*(report.shieldGate.after.shields-report.shieldGate.before.shields));
  report.districts=[];
  for(let id=1;id<=12;id++){
    const entry=await page.evaluate(id=>{
      const g=window.__convergence,old=g.levelGenerator.streetPresence;
      g.parisJourney.playDistrict(id);
      if(!old.disposed||old.root.parent)throw Error('Old street batches retained');
      const p=g.levelGenerator.streetPresence,stats=[];
      for(const z of [0,32,80,130,175,0]){p.update(z,.1,true);stats.push(p.diagnostics());}
      let invalid=0;p.root.traverse(o=>{if(o.isInstancedMesh&&o.instanceMatrix.array.some(v=>!Number.isFinite(v)))invalid++;});
      return {id,stats,invalid,roots:g.scene.children.filter(o=>o.name==='PARIS_STREET_PRESENCE').length};
    },id);
    assert.equal(entry.invalid,0);assert.equal(entry.roots,1);
    assert.ok(entry.stats.every(s=>Object.entries(s.visible).every(([k,n])=>n<=s.limits[k])));
    report.districts.push(entry);
  }
  await page.setViewportSize({width:320,height:700});
  await page.evaluate(()=>{const g=window.__convergence;g.parisJourney.playDistrict(6);});
  await page.waitForTimeout(1500);
  await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<30;i++)g.update(.016);});
  await page.screenshot({path:file('start-320.png')});
  report.pause=await page.evaluate(()=>{
    const g=window.__convergence,p=g.levelGenerator.streetPresence,before=p.elapsed;
    g.state='paused';for(let i=0;i<60;i++)g.update(.016);
    return {before,after:p.elapsed};
  });
  assert.equal(report.pause.before,report.pause.after);
  assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
  writeFileSync(file('results.json'),JSON.stringify(report,null,2));
  console.log(JSON.stringify({ok:true,frames:report.frames,shieldGate:report.shieldGate,errors:report.errors},null,2));
}finally{await browser.close();}
