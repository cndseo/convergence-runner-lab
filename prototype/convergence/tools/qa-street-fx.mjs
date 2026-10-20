import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4520/';
const dest='C:/CITYOS/convergence-streets-fx/qa-fx';
fs.mkdirSync(dest,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try {
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
  const p=await ctx.newPage(),errors=[];
  p.on('pageerror',e=>errors.push(e.message));
  await p.goto(url+'?qa=1',{waitUntil:'networkidle'});
  await p.locator('#play-btn').click();
  await p.waitForFunction(()=>window.__convergence.scene.children.some(c=>c.name==='CONVERGENCE_STREET_PATINA'));
  await p.waitForFunction(()=>window.__convergence.scene.children.filter(c=>c.name==='KENNEY_POLICE_BEACON').length>=2,{timeout:16000});
  const street=await p.evaluate(()=>{
    const g=window.__convergence,patina=g.scene.children.find(c=>c.name==='CONVERGENCE_STREET_PATINA');
    const lightbars=g.scene.children.filter(c=>c.name==='KENNEY_POLICE_BEACON');
    const instances=patina.children.reduce((n,x)=>n+(x.count||0),0);
    g.qaManual=true;
    g.camera.position.set(0,5,-31);g.camera.lookAt(12.0,2,-47);
    g.renderer.render(g.scene,g.camera);
    return {instances,drawBatches:patina.children.length,lightbars:lightbars.length,
      z:lightbars.map(x=>Math.round(x.position.z)),renderCalls:g.renderer.info.render.calls};
  });
  assert.ok(street.instances>150);
  assert.ok(street.drawBatches<=18);
  assert.ok(street.lightbars>=2);
  await p.screenshot({path:dest+'/street-'+viewport.width+'.png'});
  await p.goto(url+'?qa=1',{waitUntil:'networkidle'});
  await p.locator('#premium-btn').click();
  await p.getByRole('button',{name:/TESTER UNE SUPER ATTAQUE/}).click();
  await p.evaluate(()=>{
    const g=window.__convergence;g.qaManual=true;
    window.__fx={impact:0,step:0};
    const impact=g.audio.playMarseilleImpact.bind(g.audio),step=g.audio.playMarseilleFootfall.bind(g.audio);
    g.audio.playMarseilleImpact=()=>{window.__fx.impact++;return impact();};
    g.audio.playMarseilleFootfall=()=>{window.__fx.step++;return step();};
    const e=g.levelGenerator.enemies[0];g.trackZ=e.z;
    g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
    g.levelGenerator.updateVisibility(g.trackZ);g.checkEnemyCollisions();g.marseille.update(.001);
  });
  await p.locator('#marseille-support-button').click();
  await p.waitForFunction(()=>window.__convergence.marseille.active);
  const impact=await p.evaluate(()=>{
    const g=window.__convergence;
    for(let n=0;n<50;n++)g.update(.06);
    const ring=g.scene.children.find(o=>o.name==='MARSEILLE_GROUND_IMPACT');
    g.renderer.render(g.scene,g.camera);
    return {impact:window.__fx.impact,steps:window.__fx.step,
      ringOpacity:ring?.material.opacity,ringScale:ring?.scale.x,
      phase:g.marseille.phase,actors:g.marseille.actors.length,
      renderCalls:g.renderer.info.render.calls};
  });
  assert.equal(impact.impact,1,'one impact per super attack');
  assert.ok(impact.steps>=2 && impact.steps<=4,'subtle step cadence');
  assert.ok(impact.ringOpacity>0);
  assert.equal(impact.actors,15);
  await p.screenshot({path:dest+'/attack-'+viewport.width+'.png'});
  const finished=await p.evaluate(()=>{
    const g=window.__convergence;
    for(let n=0;n<130&&g.marseille.active;n++)g.update(.06);
    return {active:g.marseille.active,ringExists:!!g.scene.children.find(o=>o.name==='MARSEILLE_GROUND_IMPACT'),
      impact:window.__fx.impact,step:window.__fx.step,state:g.state};
  });
  assert.equal(finished.active,false);
  assert.equal(finished.ringExists,false);
  assert.equal(finished.impact,1);
  assert.deepEqual(errors,[]);
  console.log('STREETS_FX_PASS',JSON.stringify({viewport,street,impact,finished,errors}));
  await ctx.close();
 }
} finally{await browser.close();}
