import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {FIXED_TV_CATALOG,makeFixedTVChoice} from '../src/fixedTVCatalog.mjs';
import {computeDailyScore} from '../src/dailyChallenge.mjs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4723/';
const phase=process.env.QA_PHASE||'local';
const output=fileURLToPath(new URL('../../../docs/reviews/tv-contract-20261023/'+phase+'/',import.meta.url));
mkdirSync(output,{recursive:true});
const report={base,phase,occurrences:[],boundaries:[],errors:[],badAssets:[]};
function expected(s,key){
 let count=s.count,shields=s.shields;
 const hit=n=>{const b=Math.min(shields,n);shields-=b;count=Math.max(0,count-n+b);};
 switch(key){
 case 'renforts10':count+=10;break;case 'mobilisation2':count*=2;break;
 case 'protections14':shields+=14;break;case 'protections21':shields+=21;break;case 'boucliers5':shields+=5;break;
 case 'ralliement50':count=Math.floor(count*1.5);break;
 case 'genz6':count+=6;break;case 'pompiers4':count+=4;break;case 'infirmieres3':count+=3;break;case 'gilets5':count+=5;break;
 case 'barrage15':hit(15);break;case 'fourgons20':hit(20);break;case 'obstacles40':hit(Math.ceil(count*.4));break;
 case 'departs5':count=Math.max(0,count-5);break;case 'dispersion2':count=Math.floor(count/2);break;case 'bravm3':count=Math.max(0,count-3);break;
 default:throw Error(key);
 }return {count,shields};
}
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/**',r=>r.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.evaluate(()=>{const g=window.__convergence;g.qaManual=true;g.heroes.save.heroId='genz-lea';g.heroes.needsChoice=()=>false;
  window.tvSnapshot=()=>({count:g.crowdManager.getPlayerCount(),shields:g.shields,ammo:g.genzFireworks.available(),marseille:g.marseille.available(),
   roster:g.crowdManager.roster.slice(),models:g.crowdManager.playerStickmen.length,hud:g.ui.countDisplay.textContent});
 });
 const photographed=new Set();
 const run=async(index,side,count=30,shields=5,photos=false)=>{
  const setup=await page.evaluate(({index,side,count,shields})=>{
   const g=window.__convergence;g.bravmGateCharge.clear();g.tvBreak.clear();
   const gate=g.levelGenerator.gates[index];g.state='playing';g.speed=3;
   for(const t of g.levelGenerator.gates){t.passed=t!==gate;t.tvState=t===gate?'approaching':'resolved';}
   if(g.levelGenerator.marseilleBonus)g.levelGenerator.marseilleBonus.passed=true;
   for(const p of g.levelGenerator.patrols)p.passed=true;for(const e of g.levelGenerator.enemies)e.defeated=true;
   g.crowdManager.createPlayerCrowd(count);g.shields=shields;g.gateHistory=[];g.trackZ=gate.z-7;g.ui.clearTacticalHint();g.crowdManager.updatePlayerPosition(g.playerX,-g.trackZ);
   for(let i=0;i<20;i++)g.crowdManager.update(.05);
   g.ui.updateCount(count);g.levelGenerator.updateVisibility(g.trackZ);
   g.camera.position.set(0,g.crowdManager.getCameraHeight(),-g.trackZ+g.crowdManager.getCameraDistance());g.camera.lookAt(0,.8,-g.trackZ-5);g.renderer.render(g.scene,g.camera);
   const screen=gate[side+'Mesh'].userData.root.userData.tvScreen;
   const target=g.tvChoice.targets().find(t=>t.side===side);if(!target)throw Error('Missing touch target');
   let point;for(const fx of [.5,.25,.75])for(const fy of [.5,.25,.75]){const x=target.left+(target.right-target.left)*fx,y=target.top+(target.bottom-target.top)*fy;if(document.elementFromPoint(x,y)?.id==='game-canvas')point={x,y};}
   return {before:tvSnapshot(),key:gate[side+'Gate'].tvKey,file:screen.userData.originalFile,src:screen.userData.texture.image?.src,ready:screen.userData.ready,ratio:screen.children[0].scale.y/screen.children[0].scale.x,nativeRatio:screen.userData.texture.image?.height/screen.userData.texture.image?.width,point};
  },{index,side,count,shields});
  assert.ok(setup.point,setup.key+' unobstructed point');assert.equal(setup.ready,true);
  assert.equal(setup.file,FIXED_TV_CATALOG[setup.key].file);assert.ok(setup.src.endsWith('/'+setup.file));assert.equal(setup.ratio,setup.nativeRatio);
  const take=photos&&!photographed.has(setup.key);if(take)await page.screenshot({path:output+'/'+setup.key+'-before.png'});
  await page.touchscreen.tap(setup.point.x,setup.point.y);
  const after=await page.evaluate(()=>{
   const g=window.__convergence;for(let i=0;i<80&&g.bravmGateCharge.current;i++){g.trackZ+=g.speed*.05;g.bravmGateCharge.update(.05);}
   g.ui.updateCount(g.crowdManager.getPlayerCount());g.renderer.render(g.scene,g.camera);
   return {...tvSnapshot(),history:g.gateHistory.map(h=>({key:h.choice.tvKey,side:h.side,before:h.before,after:h.after}))};
  });
  const want=expected(setup.before,setup.key);assert.equal(after.count,want.count,setup.key);assert.equal(after.shields,want.shields,setup.key);
  assert.equal(after.hud,'👥 '+want.count);assert.equal(after.ammo,setup.before.ammo);assert.equal(after.marseille,setup.before.marseille);
  assert.equal(after.roster.length,want.count);assert.equal(after.models,Math.min(72,want.count));
  assert.equal(after.history.length,1);assert.equal(after.history[0].key,setup.key);assert.equal(after.history[0].side,side);
  const family=FIXED_TV_CATALOG[setup.key].bonusFaction;
  if(family)for(const f of ['genz','gilets','pompiers','infirmieres','lyceens']){
   const delta=after.roster.filter(x=>x===f).length-setup.before.roster.filter(x=>x===f).length;
   assert.equal(delta,f===family?FIXED_TV_CATALOG[setup.key].value:0,setup.key+' '+f);
  }
  await page.touchscreen.tap(setup.point.x,setup.point.y);assert.equal(await page.evaluate(()=>window.__convergence.gateHistory.length),1);
  if(take){await page.screenshot({path:output+'/'+setup.key+'-after.png'});photographed.add(setup.key);}
  return {index,side,key:setup.key,file:setup.file,before:{count,shields},after:{count:after.count,shields:after.shields,ammo:after.ammo,marseille:after.marseille},models:after.models};
 };
 const districts=process.env.QA_DISTRICTS?process.env.QA_DISTRICTS.split(',').map(Number):Array.from({length:12},(_,i)=>i+1);
 for(const district of districts){
  await page.evaluate(id=>{const g=window.__convergence;g.ui.hideAllScreens();g.mode='campaign';g.parisJourney.playDistrict(id);g.story.clear();g.state='playing';g.parisJourney.card.classList.remove('visible');g.experience.coach.hidden=true;},district);
  await page.waitForFunction(()=>window.__convergence.levelGenerator.gates.every(t=>[t.leftMesh,t.rightMesh].every(p=>p.userData.root.userData.tvScreen.userData.ready)));
  for(let i=0;i<10;i++)for(const side of ['left','right'])report.occurrences.push({district,...await run(i,side,30,5,true)});
  console.log('TV_OCCURRENCES_PASS district '+district);
 }
 // The same real touch path above the former population and protection caps.
 for(const key of Object.keys(FIXED_TV_CATALOG)){
  const location=await page.evaluate(key=>{const g=window.__convergence;for(const [i,t] of g.levelGenerator.gates.entries())for(const side of ['left','right'])if(t[side+'Gate'].tvKey===key)return {i,side};},key);
  for(const [n,sh] of [[70,47],[100,60]])report.boundaries.push(await run(location.i,location.side,n,sh,false));
 }
 // Original Marseille bonus: one reserve charge, never an automatic attack.
 report.marseille=await page.evaluate(()=>{
  const g=window.__convergence;g.mode='campaign';g.level=1;g.parisLevel=1;g.marseille.resetLevelOneGift();g.startGame();g.state='playing';
  const bonus=g.levelGenerator.marseilleBonus;for(const t of g.levelGenerator.gates)if(t.z<bonus.z){t.passed=true;t.tvState='resolved';}
  for(const p of g.levelGenerator.patrols)if(p.z<bonus.z)p.passed=true;for(const e of g.levelGenerator.enemies)if(e.z<bonus.z)e.defeated=true;
  g.trackZ=bonus.z-7;g.levelGenerator.updateVisibility(g.trackZ);const before=tvSnapshot();
  const selected=g.tvChoice.choose(bonus,'left'),after=tvSnapshot(),second=g.tvChoice.choose(bonus,'left');
  return {before,after,selected,second,active:g.marseille.active};
 });
 assert.equal(report.marseille.after.marseille-report.marseille.before.marseille,1);assert.equal(report.marseille.active,false);assert.equal(report.marseille.second,false);
 assert.equal(report.marseille.after.count,report.marseille.before.count);assert.equal(report.marseille.after.shields,report.marseille.before.shields);assert.equal(report.marseille.after.ammo,report.marseille.before.ammo);
 report.daily=await page.evaluate(()=>{
  const g=window.__convergence;g.ui.hideAllScreens();g.startDailyChallenge('2026-10-23');
  for(let frame=0;frame<4000;frame++){if(g.state==='playing'){const side=g.levelGenerator.plan.proof.winningPath[g.gateHistory.length];g.playerX=side==='left'?-2.5:2.5;}g.update(.05);if(['boss_defeated','lose','win'].includes(g.state))break;}
  return {state:g.state,history:g.gateHistory.length,path:g.gateHistory.map(x=>x.side),count:g.crowdManager.getPlayerCount(),version:g.levelGenerator.plan.version};
 });
 const daily=computeDailyScore('2026-10-23',report.daily.path);assert.equal(report.daily.count,daily.survivors);assert.ok(report.daily.count>0);assert.equal(report.daily.version,4);
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
 console.log('TV_CONTRACT_PASS '+report.occurrences.length+' occurrences, '+report.boundaries.length+' boundaries, Marseille and exact Daily');
}finally{writeFileSync(output+'/results.json',JSON.stringify(report,null,2));await browser.close();}
