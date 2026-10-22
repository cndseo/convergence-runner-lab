import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/combat-immersion-v3';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={base,checks:[],errors:[]};
try {
 const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await page.click('#play-btn');
 await page.waitForFunction(()=>window.__convergence?.levelGenerator?.plan?.proof,{timeout:25000});
 const start=await page.evaluate(()=>{
  const g=window.__convergence;g.qaManual=true;
  const gates=g.levelGenerator.gates.flatMap(x=>[x.leftGate,x.rightGate]);
  const genz=gates.find(x=>x.bonusFaction==='genz');
  const nurse=gates.find(x=>x.bonusFaction==='infirmieres');
  if(!genz||!nurse)throw Error('Faction recruitment gates missing');
  g.applyGate(genz);g.applyGate(nurse);
  const e=g.levelGenerator.enemies[0];
  const initialOfficers=e.officers.length;
  g.trackZ=e.z;g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
  g.levelGenerator.updateVisibility(g.trackZ);g.checkEnemyCollisions();
  if(g.state!=='fighting')throw Error('fight not started');
  return {initialOfficers,state:g.state,genz:g.genzFireworks.active,
   medic:g.combatChoreo.players.some(x=>x.userData.bonusFaction==='infirmieres'),
   p02:g.crowdManager.playerStickmen[0].userData.combatVisualState??null,
   fireworks:g.genzFireworks.bursts.length};
 });
 assert.equal(start.state,'fighting');assert.ok(start.initialOfficers>1);
 assert.equal(start.medic,true);assert.equal(start.p02,null);
 assert.ok(start.genz>0&&start.fireworks>0);
 report.checks.push({name:'start',...start});
 const initial=await page.evaluate(()=>{
  const g=window.__convergence;
  for(let i=0;i<44;i++)g.update(.05);
  const e=g.fightingEnemy;
  return {state:g.state,standing:e.officers.filter(o=>o.parent===e.meshGroup).length,
   falling:g.crowdManager.fallingOfficers.length,
   realModel:g.crowdManager.fallingOfficers.every(f=>e.officers.includes(f.officer)&&f.officer.parent===g.scene),
   losses:e.count-e.remainingCount,animation:g.combatChoreo.exchange,
   pulse:g.combatChoreo.impactPulse,camY:g.camera.position.y,
   p02:g.crowdManager.playerStickmen[0].userData.combatVisualState??null};
 });
 assert.equal(initial.state,'fighting');assert.ok(initial.losses>0);
 assert.ok(initial.standing<start.initialOfficers&&initial.falling>0);
 assert.equal(initial.realModel,true);assert.equal(initial.p02,null);
 assert.ok(initial.animation>0);
 report.checks.push({name:'first-exchanges',...initial});
 await page.screenshot({path:dir+'/front-line.png'});
 const later=await page.evaluate(()=>{
  const g=window.__convergence;
  for(let i=0;i<123;i++)g.update(.05);
  return {state:g.state,standing:g.fightingEnemy.officers.filter(o=>o.parent===g.fightingEnemy.meshGroup).length,
    elapsed:g.fightElapsed,fireworks:g.genzFireworks.bursts.length,
    p02:g.crowdManager.playerStickmen[0].userData.combatVisualState??null,
    camY:g.camera.position.y};
 });
 assert.equal(later.state,'fighting');assert.ok(later.standing>=0&&later.standing<initial.standing);
 assert.equal(later.p02,null);
 assert.ok(Math.abs(later.camY-initial.camY)>.01);
 report.checks.push({name:'progressive-front',...later});
 await page.screenshot({path:dir+'/front-cleared.png'});
 const released=await page.evaluate(()=>{
  const g=window.__convergence;
  for(let i=0;i<220&&g.state==='fighting';i++)g.update(.05);
  return {state:g.state,elapsed:g.fightElapsed,enemyDefeated:g.levelGenerator.enemies[0].defeated,
   recordPlaying:!!g.audio.combatVoiceNode,protesters:g.crowdManager.getPlayerCount()};
 });
 assert.equal(released.state,'playing');assert.equal(released.enemyDefeated,true);
 assert.ok(released.protesters>0&&released.elapsed>=9.2);
 report.checks.push({name:'release',...released});
 assert.deepEqual(report.errors,[]);
 fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));
 console.log('COMBAT_IMMERSION_PASS '+JSON.stringify(report));
} finally {await browser.close();}
