import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4541/';
const out='C:/CITYOS/convergence-bravm-impact/qa-bravm';
mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
  const p=await ctx.newPage(),errors=[],responses=[];
  p.on('pageerror',e=>errors.push(e.message));
  p.on('response',r=>{if(r.url().includes('/police-reference/bravm-reference.webp'))responses.push(r.status());});
  await p.goto(url+'?qa=1',{waitUntil:'networkidle'});
  await p.locator('#play-btn').click();
  await p.waitForFunction(()=>window.__convergence?.levelGenerator?.gates?.length===10,{timeout:16000});
  const gate=await p.evaluate(()=>{
    const g=window.__convergence;
    g.qaManual=true;g.crowdManager.addToPlayerCrowd(9);
    const gate=g.levelGenerator.gates.find(g=>g.leftGate.kind==='bravm'||g.rightGate.kind==='bravm');
    if(!gate)throw new Error('No BRAV-M gate');
    const side=gate.leftGate.kind==='bravm'?'left':'right';
    const root=(side==='left'?gate.leftMesh:gate.rightMesh).userData.root;
    g.playerX=side==='left'?-2.5:2.5;
    g.trackZ=gate.z-6;
    g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
    g.levelGenerator.updateVisibility(g.trackZ);
    g.camera.position.set(g.playerX*.3,6.3,-g.trackZ+8.4);
    g.camera.lookAt(g.playerX*.3,.8,-g.trackZ-8);
    g.renderer.render(g.scene,g.camera);
    return {z:gate.z,side,label:side==='left'?gate.leftGate:gate.rightGate,
      riders:root.userData.bravmRiders?.length,
      yaw:root.userData.bravmRiders?.map(r=>r.rotation.y),
      before:g.crowdManager.getPlayerCount()};
  });
  assert.equal(gate.riders,2);
  assert.deepEqual(gate.yaw,[0,0]);
  assert.equal(gate.label.value,3);
  await p.waitForFunction(()=>{
   const g=window.__convergence;
   const gate=g.levelGenerator.gates.find(g=>g.leftGate.kind==='bravm'||g.rightGate.kind==='bravm');
   const side=gate.leftGate.kind==='bravm'?'left':'right';
   const bikes=(side==='left'?gate.leftMesh:gate.rightMesh).userData.root.userData.bravmRiders;
   return bikes.every(r=>r.userData.referenceSprite?.visible);
  },{timeout:18000});
  await p.screenshot({path:out+'/before-'+viewport.width+'.png'});
  const started=await p.evaluate(()=>{
    const g=window.__convergence,gate=g.levelGenerator.gates.find(g=>g.leftGate.kind==='bravm'||g.rightGate.kind==='bravm');
    g.trackZ=gate.z;g.checkGateCollisions();
    const c=g.bravmGateCharge.current;
    return {state:g.state,passed:gate.passed,charged:!!c,bikes:c?.actors.length,
     history:g.gateHistory.length,count:g.crowdManager.getPlayerCount(),
     bikeWorld:c?.actors.map(a=>a.rider.position.z)};
  });
  assert.equal(started.state,'bravm_charge');
  assert.equal(started.bikes,2);
  assert.equal(started.count,gate.before,'no premature losses');
  await p.evaluate(()=>{const g=window.__convergence;for(let i=0;i<8;i++)g.update(.05);});
  const approaching=await p.evaluate(()=>({state:window.__convergence.state,
    count:window.__convergence.crowdManager.getPlayerCount(),
    positions:window.__convergence.bravmGateCharge.current.actors.map(a=>a.rider.position.z)}));
  assert.equal(approaching.count,gate.before);
  assert.ok(approaching.positions[0]>started.bikeWorld[0]+.25);
  await p.screenshot({path:out+'/charge-'+viewport.width+'.png'});
  await p.locator('#pause-btn').click();
  const t1=await p.evaluate(()=>window.__convergence.bravmGateCharge.current.elapsed);
  await p.evaluate(()=>{for(let i=0;i<15;i++)window.__convergence.update(.05)});
  const t2=await p.evaluate(()=>window.__convergence.bravmGateCharge.current.elapsed);
  assert.equal(t1,t2,'pause freezes charge');
  await p.locator('#resume-btn').click();
  await p.evaluate(()=>{const g=window.__convergence;for(let i=0;i<12;i++)g.update(.05);});
  const impact=await p.evaluate(()=>{
   const g=window.__convergence;
   return {count:g.crowdManager.getPlayerCount(),history:g.gateHistory.length,
    ragdolls:g.crowdManager.flyingBodies.length,shields:g.shields,state:g.state,
    lost:g.bravmGateCharge.current?.lost};
  });
  assert.equal(impact.count,gate.before-3,'exactly 3 lost');
  assert.equal(impact.history,1,'single certified gate event');
  assert.equal(impact.lost,3);
  assert.ok(impact.ragdolls>=3,'3 falling bodies animated');
  await p.screenshot({path:out+'/impact-'+viewport.width+'.png'});
  await p.evaluate(()=>{const g=window.__convergence;for(let i=0;i<18;i++)g.update(.05);g.checkGateCollisions();});
  const after=await p.evaluate(()=>{
    const g=window.__convergence;return {state:g.state,charge:!!g.bravmGateCharge.current,
    history:g.gateHistory.length,count:g.crowdManager.getPlayerCount(),errors:[]};
  });
  assert.equal(after.state,'playing');
  assert.equal(after.charge,false);
  assert.equal(after.history,1);
  assert.equal(after.count,gate.before-3);
  assert.ok(responses.every(v=>v===200));
  assert.deepEqual(errors,[]);
  console.log('BRAVM_GATE_QA_PASS',JSON.stringify({viewport,gate,started,approaching,impact,after,responses,errors}));
  await ctx.close();
 }
}finally{await browser.close();}
