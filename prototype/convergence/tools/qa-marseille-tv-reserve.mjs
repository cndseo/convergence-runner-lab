import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4612/convergence-runner-lab/convergence/';
const out=process.env.QA_OUTPUT||'C:/CITYOS/convergence-marseille-tv-reserve/qa-reserve';
mkdirSync(out,{recursive:true});
const expectedHash='5119ef75fb8d7ebc096506bf45372c7f19d0271dc87f413a38fd694b6caeeb35';
assert.equal(createHash('sha256').update(readFileSync('public/assets/marseille-bonus/tv-marseille-attack.png')).digest('hex'),expectedHash);
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,
 args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={url:base,cases:[],paidTest:'Existing API contract intercepted; no real purchase or Stripe request'};
try{
 for(const viewport of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
  const page=await ctx.newPage(),errors=[],badResponses=[],commerce=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  page.on('response',r=>{if(r.status()>=400)badResponses.push({url:r.url(),status:r.status()})});
  page.on('request',r=>{if(/checkout|stripe|\/support\/consume/.test(r.url()))commerce.push(r.url())});
  async function start(){
   await page.waitForFunction(()=>window.__convergence?.marseille);
   await page.evaluate(()=>window.__convergence.qaManual=true);
   await page.locator('#play-btn').click();
   await page.waitForFunction(()=>window.__convergence.state==='playing');
  }
  async function fight(index=0){
   await page.evaluate(index=>{
    const g=window.__convergence,e=g.levelGenerator.enemies[index];
    g.trackZ=e.z;g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
    g.levelGenerator.updateVisibility(g.trackZ);g.checkEnemyCollisions();g.marseille.showButton();
   },index);
   assert.equal(await page.evaluate(()=>window.__convergence.state),'fighting');
  }
  await page.goto(base+'?qa=1',{waitUntil:'networkidle'});await start();
  await page.waitForFunction(()=>window.__convergence.levelGenerator.marseilleBonus?.leftMesh.userData.root.userData.tvScreen.userData.ready);
  const response=await page.request.get(base+'assets/marseille-bonus/tv-marseille-attack.png');
  assert.equal(response.status(),200);
  assert.equal(createHash('sha256').update(await response.body()).digest('hex'),expectedHash);
  const initial=await page.evaluate(()=>{
   const g=window.__convergence,b=g.levelGenerator.marseilleBonus;
   g.trackZ=0;g.crowdManager.updatePlayerPosition(0,0);g.levelGenerator.updateVisibility(0);
   g.camera.position.set(0,6.3,8.4);g.camera.lookAt(0,.8,-8);g.renderer.render(g.scene,g.camera);
   return {charges:g.marseille.available(),pairs:g.levelGenerator.gates.length,
    art:b.leftMesh.userData.root.userData.tvScreen.userData.source,children:b.leftMesh.userData.root.children.length};
  });
  assert.deepEqual(initial,{charges:0,pairs:10,art:'bonus-png',children:1});
  await page.screenshot({path:out+'/before-'+viewport.width+'.png'});
  const collect=await page.evaluate(()=>{
   const g=window.__convergence;
   g.trackZ=6;g.playerX=0;g.checkGateCollisions();g.checkGateCollisions();
   return {available:g.marseille.available(),charges:g.marseille.charges,demo:g.marseille.demoCharges,
    active:g.marseille.active,pending:g.marseille.pending,count:g.crowdManager.getPlayerCount(),
    history:g.gateHistory.length,breaks:g.tvBreak.total,passed:g.levelGenerator.marseilleBonus.passed,
    audio:!!g.audio.marseilleAttackNode,text:g.marseille.button.textContent};
  });
  assert.equal(collect.available,1);assert.equal(collect.charges,1);assert.equal(collect.demo,0);
  assert.equal(collect.active,false);assert.equal(collect.pending,false);assert.equal(collect.audio,false);
  assert.equal(collect.count,5);assert.equal(collect.history,0);assert.equal(collect.breaks,1);assert.ok(collect.passed);
  assert.match(collect.text,/1 disponible/);assert.deepEqual(commerce,[]);
  await page.screenshot({path:out+'/reserve-'+viewport.width+'.png'});
  await page.evaluate(()=>window.__convergence.challengeHub.open('premium'));
  assert.match(await page.locator('.challenge-credit-count').innerText(),/1$/);
  assert.ok((await page.locator('.challenge-product button').allTextContents()).some(t=>t.includes('2,99')));
  await page.locator('.challenge-close').click();
  await page.locator('#pause-btn').click();await page.locator('#resume-btn').click();
  assert.equal(await page.evaluate(()=>window.__convergence.marseille.available()),1);
  await page.reload({waitUntil:'networkidle'});await start();
  const resumed=await page.evaluate(()=>({
   stock:window.__convergence.marseille.available(),bonus:!!window.__convergence.levelGenerator.marseilleBonus,
   claimed:window.__convergence.marseille.levelOneGift.claimed}));
  assert.deepEqual(resumed,{stock:1,bonus:false,claimed:true});
  await fight();
  await page.locator('#marseille-support-button').click();
  await page.waitForFunction(()=>window.__convergence.marseille.active);
  const activated=await page.evaluate(()=>{
   const g=window.__convergence;
   return {stock:g.marseille.available(),actors:g.marseille.actors.length,audio:!!g.audio.marseilleAttackNode,
    duration:g.audio.marseilleAttackBuffer?.duration,claimed:g.marseille.levelOneGift.claimed};
  });
  assert.equal(activated.stock,0);assert.ok(activated.actors>0);assert.equal(activated.audio,true);
  assert.ok(activated.duration>0);assert.deepEqual(commerce,[]);
  const frozen=await page.evaluate(()=>{
   const g=window.__convergence;for(let i=0;i<60;i++)g.update(.05);return g.marseille.elapsed;
  });
  await page.screenshot({path:out+'/attack-'+viewport.width+'.png'});
  await page.locator('#pause-btn').click();
  await page.evaluate(()=>{for(let i=0;i<20;i++)window.__convergence.update(.05)});
  assert.equal(await page.evaluate(()=>window.__convergence.marseille.elapsed),frozen);
  await page.locator('#resume-btn').click();
  await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<240&&g.marseille.active;i++)g.update(.05)});
  await fight(1);
  assert.equal(await page.evaluate(()=>window.__convergence.marseille.activate()),false);
  assert.equal(await page.locator('#marseille-support-button').isDisabled(),true);
  assert.match(await page.locator('#marseille-support-button').innerText(),/0 disponible/);
  await page.screenshot({path:out+'/empty-'+viewport.width+'.png'});
  // A new attempt restores eligibility, without banking the previous free charge.
  const newRun=await page.evaluate(()=>{
   const g=window.__convergence;g.level=1;g.startGame({newRun:true});
   const before={stock:g.marseille.available(),bonus:!!g.levelGenerator.marseilleBonus};
   g.trackZ=6;g.playerX=0;g.checkGateCollisions();
   g.startGame({newRun:true});
   return {before,after:g.marseille.available(),bonus:!!g.levelGenerator.marseilleBonus};
  });
  assert.deepEqual(newRun,{before:{stock:0,bonus:true},after:0,bonus:true});
  // Exercise purchased inventory synchronization and the unchanged consume endpoint.
  let paid=2,paidConsumes=0;
  await page.route('**/qa-api/api/v1/**',async route=>{
   const url=route.request().url();
   if(url.endsWith('/shop/inventory'))return route.fulfill({json:{owned:[],marseilleCharges:paid}});
   if(url.endsWith('/support/consume')){
    paidConsumes++;paid--;return route.fulfill({json:{remaining:paid}});
   }
   throw new Error('Unexpected commerce request: '+url);
  });
  const mixed=await page.evaluate(async()=>{
   const g=window.__convergence;g.challengeHub.apiBase=location.origin+'/qa-api';g.challengeHub.playerToken='qa-contract-token';
   g.trackZ=6;g.playerX=0;g.checkGateCollisions();
   await g.challengeHub.syncInventory();await g.challengeHub.syncInventory();
   return {stock:g.marseille.available(),demo:g.marseille.demoCharges};
  });
  assert.deepEqual(mixed,{stock:3,demo:0});
  await fight();await page.locator('#marseille-support-button').click();
  await page.waitForFunction(()=>window.__convergence.marseille.active);
  assert.equal(paidConsumes,0,'gift consumed before purchases');
  assert.equal(await page.evaluate(()=>window.__convergence.marseille.available()),2);
  await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<240&&g.marseille.active;i++)g.update(.05)});
  await fight(1);await page.locator('#marseille-support-button').click();
  await page.waitForFunction(()=>window.__convergence.marseille.active);
  assert.equal(paidConsumes,1);
  assert.equal(await page.evaluate(()=>window.__convergence.marseille.available()),1);
  const progression=await page.evaluate(()=>{
   const g=window.__convergence;g.level=1;g.startGame({newRun:true});
   g.trackZ=6;g.playerX=0;g.checkGateCollisions();
   const before=g.marseille.available();
   g.level=2;g.startGame();g.saveProgress();
   return {before,after:g.marseille.available(),bonus:!!g.levelGenerator.marseilleBonus,pairs:g.levelGenerator.gates.length};
  });
  assert.deepEqual(progression,{before:2,after:2,bonus:false,pairs:10});
  const daily=await page.evaluate(()=>{
   const g=window.__convergence;g.startDailyChallenge();
   return {bonus:!!g.levelGenerator.marseilleBonus,stock:g.marseille.available(),hidden:g.marseille.button.style.display==='none'};
  });
  assert.deepEqual(daily,{bonus:false,stock:2,hidden:true});
  assert.ok(commerce.every(url=>url.endsWith('/support/consume')),'no checkout requested');
  assert.deepEqual(errors,[]);assert.deepEqual(badResponses,[]);
  report.cases.push({viewport,initial,collect,resumed,activated,newRun,mixed,paidConsumes,progression,daily,errors,badResponses});
  console.log('MARSEILLE_TV_RESERVE_PASS '+JSON.stringify({viewport,collect,resumed,activated,paidConsumes,progression,errors}));
  await ctx.close();
 }
}finally{await browser.close();writeFileSync(out+'/report.json',JSON.stringify(report,null,2));}
