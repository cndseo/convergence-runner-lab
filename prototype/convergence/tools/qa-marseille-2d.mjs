import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4324/convergence-runner-lab/convergence/';
const dir=process.env.QA_DIR||'C:/CITYOS/convergence-qa-20261020/marseille-2d';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={url:base,viewports:[]};
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true,deviceScaleFactor:1.5});
  const page=await ctx.newPage(),errors=[],badResponses=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)badResponses.push({url:r.url(),status:r.status()});});
  await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__convergence?.challengeHub);
  await page.locator('#premium-btn').click();
  const prices=(await page.locator('.challenge-product button').allInnerTexts()).map(x=>x.trim());
  assert.deepEqual(prices,['1,99 €','1,99 €','2,99 €','8,97 €','29,90 €']);
  assert.equal(await page.evaluate(()=>window.__convergence.challengeHub.paymentsEnabled),false);
  await page.getByRole('button',{name:/TESTER UNE SUPER ATTAQUE/}).click();
  await page.waitForFunction(()=>window.__convergence.state==='playing');
  await page.waitForTimeout(900);
  const start=await page.evaluate(()=>{
   const g=window.__convergence;g.qaManual=true;
   const e=g.levelGenerator.enemies[0];g.trackZ=e.z;
   g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
   g.levelGenerator.updateVisibility(g.trackZ);g.checkEnemyCollisions();
   g.marseille.update(.001);
   const consume=g.challengeHub.consumeMarseilleCharge.bind(g.challengeHub);
   window.__consumeCalls=0;
   g.challengeHub.consumeMarseilleCharge=async()=>{window.__consumeCalls++;return consume();};
   return {state:g.state,charges:g.marseille.available(),population:g.crowdManager.getPlayerCount(),
    leader:!!g.crowdManager.playerStickmen[0].userData.approvedLeader};
  });
  assert.equal(start.state,'fighting');assert.equal(start.charges,1);assert.equal(start.leader,true);
  await page.locator('#marseille-support-button').click();
  await page.waitForFunction(()=>window.__convergence.marseille.active);
  assert.equal(await page.evaluate(()=>window.__convergence.marseille.activate()),false);
  const frames=[];
  for(const seconds of [0.5,1.3,2.1,2.8,3.5,4.3,5.3,6.4,7.4,8.6,9.7]){
   const frame=await page.evaluate(seconds=>{
    const g=window.__convergence;
    const current=g.marseille.elapsed;
    for(let t=current;t<seconds-.0001;t+=1/60)g.update(Math.min(1/60,seconds-t));
    g.renderer.render(g.scene,g.camera);
    const m=g.marseille;
    return {seconds,state:g.state,active:m.active,phase:m.phase,credits:m.available(),
     calls:window.__consumeCalls,police:m.police.map(p=>({started:p.started,pos:p.o.position.toArray(),scale:p.o.scale.toArray(),
       limbs:p.limbs.length,ndc:p.o.position.clone().project(g.camera).toArray()})),
     actors:m.actors.map(a=>({lane:a.lane,view:a.view,frame:a.frame,visible:a.model.visible,
       pos:a.model.position.toArray(),opacity:a.opacity,mirror:a.pose?.mirror,dx:a.pose?.dx,dz:a.pose?.dz})),
     calls3d:g.renderer.info.render.calls,triangles:g.renderer.info.render.triangles};
   },seconds);
   frames.push(frame);
   await page.screenshot({path:dir+'/'+viewport.width+'-'+String(seconds).replace('.','_')+'.png'});
  }
  const finish=await page.evaluate(()=>{
   const g=window.__convergence;
   return {state:g.state,defeated:g.levelGenerator.enemies[0].defeated,
    alive:g.crowdManager.getPlayerCount(),charges:g.marseille.available(),calls:window.__consumeCalls,
    active:g.marseille.active,actors:g.marseille.actors.length};
  });
  assert.equal(finish.state,'playing');assert.equal(finish.defeated,true);
  assert.equal(finish.alive,start.population);assert.equal(finish.charges,0);assert.equal(finish.calls,1);
  assert.equal(finish.active,false);assert.equal(finish.actors,0);
  const escaping=frames.find(f=>f.seconds===8.6);
  assert.ok(escaping.police.every(p=>Math.abs(p.ndc[0])>1.05 || Math.abs(p.ndc[1])>1.1),'officers leave the viewport before cleanup');
  const views=new Set(frames.flatMap(f=>f.actors.filter(a=>a.visible).map(a=>a.view)));
  for(const view of ['front','back','quarter-front','quarter-back'])assert.ok(views.has(view),view);
  assert.ok(frames.some(f=>f.police.some(p=>p.started)&&f.police.some(p=>!p.started)),'staggered police reactions');
  const daily=await page.evaluate(async()=>{
   const g=window.__convergence;g.mode='daily';g.marseille.demoCharges=3;g.state='fighting';
   g.fightingEnemy=g.levelGenerator.enemies[1];g.marseille.showButton();
   return {allowed:await g.marseille.activate(),hidden:g.marseille.button.style.display==='none',
    charges:g.marseille.available(),calls:window.__consumeCalls};
  });
  assert.equal(daily.allowed,false);assert.equal(daily.hidden,true);assert.equal(daily.charges,3);assert.equal(daily.calls,1);
  assert.deepEqual(errors,[]);assert.deepEqual(badResponses,[]);
  const item={viewport,start,frames,finish,daily,prices,errors,badResponses};
  report.viewports.push(item);
  fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));
  console.log('MARSEILLE_2D_QA_PASS '+JSON.stringify({viewport,start,finish,daily,views:[...views],errors}));
  await ctx.close();
 }
}finally{await browser.close();fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));}
