import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync,rmSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4711/';
const out=new URL('../../../docs/reviews/road-tv-20261021/',import.meta.url);mkdirSync(out,{recursive:true});
const file=n=>new URL(n,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const report={base,checks:[],districts:[],errors:[],badAssets:[]};
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/v1/**',r=>r.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 assert.equal(await page.locator('#tv-choice-dialog').count(),0);
 await page.evaluate(()=>{const g=window.__convergence;g.qaManual=true;g.heroes.save.heroId='genz-lea';g.qaSounds={breaks:0,impacts:0};for(const [method,key] of [['playHit','breaks'],['playCombatImpact','impacts']]){const original=g.audio[method].bind(g.audio);g.audio[method]=(...args)=>{g.qaSounds[key]++;return original(...args);};}});
 const reset=async(count=30,shields=0)=>{
  await page.evaluate(({count,shields})=>{
   const g=window.__convergence;g.ui.hideAllScreens();g.mode='campaign';g.parisJourney.playDistrict(2);g.parisJourney.card.classList.remove('visible');
   const diff=count-g.crowdManager.getPlayerCount();if(diff>0)g.crowdManager.addToPlayerCrowd(diff);else if(diff<0)g.crowdManager.removeFromPlayerCrowd(-diff);
   g.shields=shields;g.qaSounds={breaks:0,impacts:0};g.trackZ=g.levelGenerator.gates[0].z-9;g.update(.001);for(let i=0;i<30;i++)g.crowdManager.update(.05);g.marchCameraDistance=g.crowdManager.getCameraDistance();g.camera.position.set(g.playerX*.3,g.crowdManager.getCameraHeight(),-g.trackZ+g.marchCameraDistance);g.camera.lookAt(g.playerX*.3,.8,-g.trackZ-5);g.renderer.render(g.scene,g.camera);
  },{count,shields});
  await page.waitForTimeout(80);
 };
 const state=()=>page.evaluate(()=>{const g=window.__convergence;return {state:g.state,z:g.trackZ,count:g.crowdManager.getPlayerCount(),shields:g.shields,history:g.gateHistory.map(h=>({side:h.side,choice:h.choice,before:h.before,after:h.after})),broken:g.tvBreak.total,pair:g.levelGenerator.gates[0].tvState,sounds:{...g.qaSounds}};});
 const target=async side=>page.evaluate(side=>{const t=window.__convergence.tvChoice.targets().find(x=>x.side===side);if(!t)return null;for(const fx of [.5,.2,.8])for(const fy of [.5,.2,.8]){const x=t.left+(t.right-t.left)*fx,y=t.top+(t.bottom-t.top)*fy;if(document.elementFromPoint(x,y)?.id==='game-canvas')return {x,y,width:t.right-t.left,height:t.bottom-t.top};}return null;},side);
 const snap=async name=>{await page.evaluate(()=>{const g=window.__convergence;g.renderer.render(g.scene,g.camera);});await page.screenshot({path:file(name+'.png')});};
 for(const side of ['left','right']){
  await reset();const t=await target(side);assert.ok(t,'visible '+side);assert.ok(t.width>=44&&t.height>=44);
  if(side==='left')await snap('iphone-approach');
  const before=await state();await page.touchscreen.tap(t.x,t.y);const after=await state();
  assert.equal(after.state,'playing');assert.equal(after.history.length,1);assert.equal(after.history[0].side,side);assert.equal(after.broken,1);assert.equal(after.sounds.breaks,1);assert.equal(after.z,before.z);
  await page.touchscreen.tap(t.x,t.y);assert.equal((await state()).history.length,1);
  // A direct second-side call is also locked; no gesture race can collect it.
  assert.equal(await page.evaluate(()=>{const g=window.__convergence;return g.tvChoice.choose(g.levelGenerator.gates[0],'right');}),false);
  await snap('iphone-tap-'+side);report.checks.push({test:'tap-'+side,...after});
 }
 await reset();await page.touchscreen.tap(195,720);assert.equal((await state()).history.length,0);report.checks.push({test:'street-does-not-select',ok:true});
 const t=await target('left');const cdp=await context.newCDPSession(page);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:t.x,y:t.y}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:t.x+55,y:t.y}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:t.x,y:t.y}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
 assert.equal((await state()).history.length,0);report.checks.push({test:'drag-out-and-back-no-tap',ok:true});
 // Miss is swept, one penalty per pair, even for a wide crowd at the side.
 for(const [count,shields] of [[30,0],[60,2],[60,20],[1,0],[72,0]]){
  await reset(count,shields);
  await page.evaluate(()=>{const g=window.__convergence;g.playerX=3.5;g.trackZ=g.levelGenerator.gates[0].z-1.05;g.update(.05);});
  const hit=await state(),damage=Math.min(12,Math.max(2,Math.ceil(count*.08))),lost=Math.min(count,Math.max(0,damage-shields));
  assert.equal(hit.count,count-lost);assert.equal(hit.shields,Math.max(0,shields-damage));assert.equal(hit.history.length,1);assert.equal(hit.history[0].side,'miss');assert.equal(hit.broken,0);assert.equal(hit.sounds.impacts,1);
  if(count===1)assert.equal(hit.state,'lose');else{await page.evaluate(()=>window.__convergence.checkGateCollisions());assert.equal((await state()).count,hit.count);}
  if(count===30)await snap('iphone-missed-impact');report.checks.push({test:'miss',start:count,protection:shields,...hit});
 }
 await reset();await page.evaluate(()=>{const g=window.__convergence;g.trackZ=g.levelGenerator.gates[0].z-1.001;g.update(0);});
 const last=await target('right');assert.ok(last);await page.touchscreen.tap(last.x,last.y);assert.equal((await state()).history[0].side,'right');
 await reset();const late=await target('left');await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:late.x,y:late.y}]});
 await page.evaluate(()=>{const g=window.__convergence;g.trackZ=g.levelGenerator.gates[0].z;g.update(.01);});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});assert.equal((await state()).history[0].side,'miss');assert.equal((await state()).broken,0);
 report.checks.push({test:'impact-boundary-and-late-release',ok:true});
 await reset();const prePause=await state();await page.locator('#pause-btn').click();await page.evaluate(()=>{for(let i=0;i<20;i++)window.__convergence.update(.05);});
 assert.equal((await state()).z,prePause.z);assert.equal(await target('left'),null);await page.locator('#resume-btn').click();
 await page.evaluate(()=>window.dispatchEvent(new Event('blur')));assert.equal((await state()).state,'paused');await page.locator('#resume-btn').click();
 assert.equal((await state()).history.length,0);await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));delete document.hidden;});assert.equal((await state()).state,'paused');await page.locator('#resume-btn').click();report.checks.push({test:'pause-blur-visibility-resume-no-stale-tap',ok:true});
 // Combat hides TV artwork: touching the same screen position cannot grant a reward.
 await reset();const combatPoint=await target('left');await page.evaluate(()=>{const g=window.__convergence;g.state='fighting';g.levelGenerator.updateVisibility(g.trackZ);});
 await page.touchscreen.tap(combatPoint.x,combatPoint.y);assert.equal((await state()).history.length,0);
 await page.evaluate(()=>{const g=window.__convergence;g.state='playing';g.levelGenerator.updateVisibility(g.trackZ);});
 const recovered=await target('left');await page.touchscreen.tap(recovered.x,recovered.y);assert.equal((await state()).history.length,1);report.checks.push({test:'combat-hidden-tv-and-recovery',ok:true});
 // BRAV-M TV applies its printed -3 immediately; bikes keep animating while marching.
 await reset(30,20);
 await page.evaluate(()=>{const g=window.__convergence;const gate=g.levelGenerator.gates.find(t=>t.leftGate.kind==='bravm'||t.rightGate.kind==='bravm');for(const t of g.levelGenerator.gates)if(t.z<gate.z){t.passed=true;t.tvState='resolved';}for(const p of g.levelGenerator.patrols)if(p.z<gate.z)p.passed=true;for(const e of g.levelGenerator.enemies)if(e.z<gate.z)e.defeated=true;g.trackZ=gate.z-9;g.update(.001);});
 const bravSide=await page.evaluate(()=>{const t=window.__convergence.tvChoice.next();return t.leftGate.kind==='bravm'?'left':'right';});
 const brav=await target(bravSide);assert.ok(brav);const beforeBrav=await state();await page.touchscreen.tap(brav.x,brav.y);
 assert.equal((await state()).count,27);assert.equal((await state()).state,'playing');
 await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<66;i++)g.update(.05);});
 assert.equal((await state()).count,27);assert.ok((await state()).z>beforeBrav.z+5);report.checks.push({test:'bravm-immediate-once-no-pause',ok:true});
 // All districts through the actual simulation, taps issued at current projected
 // screen locations; no direct reward injection and no purchased consumables.
 for(let id=1;id<=12;id++){
  await page.evaluate(id=>{const g=window.__convergence;g.heroes.save.heroId=null;g.heroes.needsChoice=()=>false;g.crowdUpgrade=1;g.strengthUpgrade=1;g.ui.hideAllScreens();g.parisJourney.playDistrict(id);g.parisJourney.card.classList.remove('visible');},id);
  for(let batch=0;batch<500;batch++){
   const result=await page.evaluate(()=>{
    const g=window.__convergence;
    for(let i=0;i<60;i++){
     const targets=g.tvChoice.targets();
     if(targets.length){const gate=targets[0].gate;const side=gate===g.levelGenerator.marseilleBonus?'left':g.levelGenerator.plan.proof.winningPath[g.gateHistory.length];const t=targets.find(t=>t.side===side);if(t)for(const fx of [.5,.2,.8])for(const fy of [.5,.2,.8]){const x=t.left+(t.right-t.left)*fx,y=t.top+(t.bottom-t.top)*fy;if(document.elementFromPoint(x,y)?.id==='game-canvas')return {tap:{x,y},state:g.state};}}
     if(g.state==='final_chase')g.playerX=g.story.targetX;
     g.update(.05);if(['win','lose','boss_defeated'].includes(g.state))return {state:g.state};
    }
    return {state:g.state};
   });
   if(result.tap)await page.touchscreen.tap(result.tap.x,result.tap.y);
   if(result.state==='boss_defeated')await page.waitForTimeout(1300);
   if(result.state==='lose')throw Error('Lost free district '+id);
   if(result.state==='win')break;
  }
  const result=await state();assert.equal(result.state,'win','district '+id);assert.equal(result.history.length,10);const expected=await page.evaluate(()=>window.__convergence.levelGenerator.plan.proof.witnessSurvivors);assert.equal(result.count,expected,'game/solver district '+id);report.districts.push({id,survivors:result.count,solverSurvivors:expected,choices:result.history.map(h=>h.side)});console.log('District '+id+' verified');
 }
 // 312 silhouettes: projection cost is independent of the crowd's mesh count.
 await reset(72,48);await page.waitForTimeout(2200);
 report.performance=await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<30;i++)g.crowdManager.update(.05);const start=performance.now();for(let i=0;i<1000;i++)g.tvChoice.targets();const targetingMs=(performance.now()-start)/1000;g.renderer.render(g.scene,g.camera);return {displayed:g.crowdManager.getDisplayedCount(),targetingMs,calls:g.renderer.info.render.calls,triangles:g.renderer.info.render.triangles};});
 assert.equal(report.performance.displayed,312);assert.ok(report.performance.targetingMs<5);report.performance.frames=await page.evaluate(()=>new Promise(resolve=>{const samples=[];let last=performance.now();const frame=now=>{samples.push(now-last);last=now;if(samples.length<90)requestAnimationFrame(frame);else{samples.sort((a,b)=>a-b);resolve({medianMs:samples[45],p95Ms:samples[85]});}};requestAnimationFrame(frame);}));await snap('iphone-312-crowd');
 // Actual mouse pointer on the same canvas.
 const mouse=await target('right');assert.ok(mouse);await page.mouse.click(mouse.x,mouse.y);assert.equal((await state()).history[0].side,'right');
 // Save/reload keeps exact persisted values; taps don't write commerce storage.
 const saved=await page.evaluate(()=>{const g=window.__convergence;g.saveProgress();g.heroes.persist(g.heroes.save);return {progress:localStorage.getItem('convergence_vertical_v1'),hero:localStorage.getItem('convergence_hero_v1')};});
 await page.reload({waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 assert.deepEqual(await page.evaluate(()=>({progress:localStorage.getItem('convergence_vertical_v1'),hero:localStorage.getItem('convergence_hero_v1')})),saved);
 report.checks.push({test:'save-reload',ok:true});
 // Daily continues automatic lane selection with no new miss interaction.
 await page.evaluate(()=>{const g=window.__convergence;g.qaManual=true;g.heroes.needsChoice=()=>false;g.startDailyChallenge('2026-10-21');g.trackZ=g.levelGenerator.gates[0].z-.9;g.playerX=-2.5;g.update(.01);});
 const daily=await state();assert.equal(daily.history.length,1);assert.equal(daily.history[0].side,'left');report.checks.push({test:'daily-legacy-collision',ok:true});
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
 writeFileSync(file('browser-results.json'),JSON.stringify(report,null,2));rmSync(file('browser-failure.json'),{force:true});console.log(JSON.stringify(report));
} catch(e){writeFileSync(file('browser-failure.json'),JSON.stringify({...report,error:e.stack},null,2));throw e;} finally{await browser.close();}
