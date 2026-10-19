import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4491/';
const dir='C:/CITYOS/convergence-urban-decay/qa-urban-decay';
fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={url:base,viewports:[],timestamp:new Date().toISOString()};
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await b.newContext({viewport,isMobile:true,hasTouch:true});
  const p=await ctx.newPage(),errors=[],responses={};
  p.on('pageerror',e=>errors.push(e.message));
  p.on('response',r=>{if(r.url().includes('/urban-decay/'))responses[r.url().split('/').at(-1)]=r.status();});
  await p.goto(base+'?qa=1',{waitUntil:'networkidle'});
  await p.waitForFunction(()=>window.__convergence,{timeout:20000});
  await p.locator('#play-btn').click();
  await p.waitForFunction(()=>window.__convergence?.scene?.children.filter(c=>c.name?.startsWith('CONVERGENCE urban:')).length>=3,{timeout:20000});
  const models=await p.evaluate(()=>window.__convergence.scene.children.filter(c=>c.name?.startsWith('CONVERGENCE urban:')).map(c=>({name:c.name,x:+c.position.x.toFixed(2),z:+c.position.z.toFixed(2),meshes:(()=>{let n=0;c.traverse(o=>{if(o.isMesh)n++});return n;})()})));
  assert.ok(models.some(m=>m.name.includes('hospital')));
  assert.ok(models.some(m=>m.name.includes('lycee')));
  assert.ok(models.some(m=>m.name.includes('campement')));
  assert.ok(models.every(m=>m.meshes>10));
  assert.ok(Object.keys(responses).length===3&&Object.values(responses).every(s=>s===200),JSON.stringify(responses));
  // Remove HUD gate billboards only for clean composition screenshots, not the play test.
  await p.evaluate(()=>{const g=window.__convergence;g.qaManual=true;for(const gate of g.levelGenerator.gates)for(const pane of [gate.leftMesh,gate.rightMesh])if(pane?.userData.root)pane.userData.root.visible=false;});
  for(const [title,pos,target] of [
    ['hopital',[-3,7,-59],[-16,4,-68]],
    ['lycee',[4,7,-102],[16,4,-112]],
    ['trottoir',[0,4,-28],[10,.6,-36]]
  ]){
    await p.evaluate(({pos,target})=>{
      const g=window.__convergence;
      g.camera.position.set(...pos);g.camera.lookAt(...target);
      g.camera.updateProjectionMatrix();
      g.renderer.render(g.scene,g.camera);
    },{pos,target});
    await p.waitForTimeout(150);
    await p.screenshot({path:dir+'/'+title+'-'+viewport.width+'.png'});
  }
  assert.deepEqual(errors,[]);
  const item={viewport,models,responses,errors};
  report.viewports.push(item);console.log('URBAN_QA_PASS',JSON.stringify(item));
  await ctx.close();
 }
 fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));
} finally{await b.close();}