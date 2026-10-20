import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4551/';
const output='C:/CITYOS/convergence-tv-fixed16/qa-tv';
mkdirSync(output,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const context=await browser.newContext({viewport,hasTouch:true,isMobile:true});
  const p=await context.newPage(),errors=[],tvResponses=[];
  p.on('pageerror',e=>errors.push(e.message));
  p.on('response',r=>{if(r.url().includes('/tv-final/'))tvResponses.push({name:r.url().split('/').at(-1),status:r.status()});});
  await p.goto(url+'?qa=1',{waitUntil:'networkidle'});
  await p.locator('#play-btn').click();
  await p.waitForFunction(()=>window.__convergence?.levelGenerator?.gates?.length===10,{timeout:18000});
  await p.waitForFunction(()=>{const g=window.__convergence;const root=g.levelGenerator.gates[0].leftMesh.userData.root;
    return !!root.userData.tvScreen?.userData.texture?.image;},{timeout:14000});
  await p.waitForFunction(()=>window.__convergence.levelGenerator.gates.every(g=>[g.leftMesh,g.rightMesh].every(m=>
    m.userData.root.userData.tvScreen?.userData.ready)),{timeout:22000});
  const stats=await p.evaluate(()=>{
   const g=window.__convergence;
   const gates=g.levelGenerator.gates;
   const screens=gates.flatMap(x=>[x.leftMesh,x.rightMesh]).map(x=>x.userData.root.userData.tvScreen);
   return {screens:screens.length,uniqueArt:[...new Set(screens.map(x=>x.userData.tvIndex))],
    textureWidth:screens[0].userData.texture.image.width,
    noPlaceholders:screens.every(x=>!x.userData.tvValue.includes('(x)')),
    amount:screens[0].userData.tvValue,firstGate:gates[0].leftGate,
    visible:screens.every(x=>x.name==='TV_FLAT_SCREEN'),
    noPortals:gates.every(x=>[x.leftMesh,x.rightMesh].every(m=>m.userData.root.children.every(c=>c.name==='TV_FLAT_SCREEN'||c.isGroup))),
    textureHeight:screens[0].userData.texture.image.height,
    originalPNG:screens.filter(x=>x.userData.source==='fixed-png').length,
    adapted:screens.filter(x=>x.userData.adapted).length,
    fullyOccluding:screens.every(x=>{
     const m=x.getObjectByName('TV_LIVE_SCREEN').material;
     return m.depthWrite&&m.depthTest&&m.alphaTest>.1&&!m.transparent;
    }),
    behindBikesHidden:gates.filter(g=>[g.leftMesh,g.rightMesh].some(m=>m.userData.root.userData.bravmRiders))
      .every(g=>[g.leftMesh,g.rightMesh].every(m=>!m.userData.root.userData.bravmRiders||
       m.userData.root.userData.bravmRiders.every(r=>!r.visible))),
    allTextureWidths:screens.map(x=>x.userData.texture.image.width)};
  });
  assert.equal(stats.screens,20);assert.equal(stats.noPlaceholders,true);
  assert.equal(stats.originalPNG,20,'no reconstructed TV remains in any of the 10 pairs');
  assert.equal(stats.adapted,0,'all exact files, no edited bands');
  assert.equal(stats.fullyOccluding,true,'all TV screens must block depth');
  assert.equal(stats.behindBikesHidden,true,'BRAV-M pilots hidden until actual charge');
  assert.ok(stats.allTextureWidths.every(x=>x>=650),'all TV use native transparent PNG');
  assert.equal(stats.noPortals,true);assert.ok(stats.textureHeight>350);
  assert.equal(stats.visible,true);assert.ok(stats.textureWidth>650);
  assert.equal(stats.uniqueArt.length,16,'the entire fixed catalog appears within one run');
  assert.ok(tvResponses.length>=16,'all 16 distinct original TV PNGs must be requested');
  assert.ok(tvResponses.every(r=>r.status===200),'all requested original PNGs must be 200');
  await p.evaluate(()=>{
   const g=window.__convergence;g.qaManual=true;g.trackZ=1;
   g.levelGenerator.updateVisibility(1);
   g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
   g.camera.position.set(0,6.3,8.4);g.camera.lookAt(0,.8,-8);g.renderer.render(g.scene,g.camera);
  });
  await p.screenshot({path:output+'/tv-before-'+viewport.width+'.png'});
  // Inspect every pair at gameplay distance, including the late-run screens.
  for(let index=0;index<10;index++){
   const pair=await p.evaluate(index=>{
    const g=window.__convergence,gate=g.levelGenerator.gates[index];
    g.trackZ=gate.z-7;g.levelGenerator.updateVisibility(g.trackZ);
    g.crowdManager.updatePlayerPosition(0,-g.trackZ);
    g.camera.position.set(0,6.3,-g.trackZ+8.4);g.camera.lookAt(0,.8,-g.trackZ-9);
    g.renderer.render(g.scene,g.camera);
    return [gate.leftMesh,gate.rightMesh].map((mesh,i)=>{
     const art=mesh.userData.root.userData.tvScreen.userData;
     const choice=i===0?gate.leftGate:gate.rightGate;
     const screen=mesh.userData.root.userData.tvScreen.getObjectByName('TV_LIVE_SCREEN');
     const edges=[[-.5,-.5],[-.5,.5],[.5,-.5],[.5,.5]].map(([x,y])=>
      screen.localToWorld(screen.position.clone().set(x,y,0)).project(g.camera).x);
     return {key:art.tvKey,rule:choice.tvKey,file:art.originalFile,ready:art.ready,edges};
    });
   },index);
   assert.ok(pair.every(a=>a.ready&&a.key===a.rule));
   assert.ok(pair.every(a=>a.edges.every(x=>Math.abs(x)<=1)),
    'complete PNG must fit before choice: '+JSON.stringify({viewport,index,pair}));
   await p.screenshot({path:output+'/pair-'+index+'-'+viewport.width+'.png'});
  }
  const crossing=await p.evaluate(async()=>{
   const g=window.__convergence;
   const gate=g.levelGenerator.gates[0],before={count:g.crowdManager.getPlayerCount(),shields:g.shields};
   g.playerX=-2.5;g.trackZ=gate.z;g.levelGenerator.updateVisibility(gate.z);
   const c=gate.leftGate;
   const expected={...before,count:Math.min(72,c.op==='*'?before.count*c.value:c.op==='+'?before.count+c.value:before.count)};
   g.checkGateCollisions();
   const after={count:g.crowdManager.getPlayerCount(),shields:g.shields};
   return {expected,after,passed:gate.passed,breaks:g.tvBreak.total,shards:g.tvBreak.active[0]?.shards.length,
     gateHistory:g.gateHistory.length,kind:gate.leftGate.op};
  });
  assert.equal(crossing.breaks,1);assert.equal(crossing.shards,14);
  assert.ok(crossing.passed);assert.deepEqual(crossing.after,crossing.expected);
  assert.equal(crossing.gateHistory,1);
  await p.evaluate(()=>window.__convergence.renderer.render(window.__convergence.scene,window.__convergence.camera));
  await p.screenshot({path:output+'/tv-broken-'+viewport.width+'.png'});
  await p.evaluate(()=>{const g=window.__convergence;g.tvBreak.update(.9);g.checkGateCollisions()});
  const cleared=await p.evaluate(()=>({shards:window.__convergence.tvBreak.active.length,breaks:window.__convergence.tvBreak.total,
     history:window.__convergence.gateHistory.length}));
  assert.equal(cleared.shards,0);assert.equal(cleared.breaks,1);assert.equal(cleared.history,1);
  assert.deepEqual(errors,[]);
  console.log('TV_GATES_QA_PASS',JSON.stringify({viewport,stats,crossing,cleared,tvResponses,errors}));
  await context.close();
 }
}finally{await browser.close();}
