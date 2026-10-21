import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
import {HERO_PROFILES} from '../src/heroCatalog.mjs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4674/';
const out=new URL('../../../qa-heroes/',import.meta.url);mkdirSync(out,{recursive:true});
const file=name=>new URL(name,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const report={base,environment:'Chrome on Windows GMK; mobile viewport, not physical iPhone',profiles:[],checks:[],errors:[],badAssets:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
async function finish(page){
 for(let batch=0;batch<100;batch++){
  const state=await page.evaluate(()=>{const g=window.__convergence,path=g.levelGenerator.plan.proof.winningPath;
   for(let i=0;i<120;i++){if(g.state==='playing')g.playerX=(path[g.gateHistory.length]||'left')==='left'?-2.5:2.5;if(g.state==='final_chase')g.playerX=g.story.targetX;g.update(.05);if(['win','lose','boss_defeated'].includes(g.state))break;}return g.state;
  });if(state==='boss_defeated')await page.waitForTimeout(1300);if(state==='lose')throw Error('Certified route lost');if(state==='win')break;
 }assert.equal(await page.evaluate(()=>window.__convergence.state),'win');await page.waitForTimeout(750);
}
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await context.route('**/api/v1/**',route=>route.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.locator('#play-btn').click();await page.waitForTimeout(500);
 assert.equal(await page.locator('#hero-dialog').count(),0);
 await page.evaluate(()=>window.__convergence.qaManual=true);await finish(page);
 assert.match(await page.locator('#next-btn').innerText(),/HÉROS/);
 await page.locator('#next-btn').click();await page.waitForSelector('#hero-dialog');
 for(const p of HERO_PROFILES){
  await page.locator('[data-family="'+p.family+'"]').click();await page.locator('[data-hero="'+p.id+'"]').click();
  await page.waitForFunction(id=>window.__convergence.heroes.viewer?.human?.id==='hero-'+id,p.id);
  await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
  const stats=await page.evaluate(()=>{const v=window.__convergence.heroes.viewer,h=v.human;let meshes=0,bones=0,triangles=0;h.model.traverse(n=>{if(n.isSkinnedMesh){meshes++;bones+=n.skeleton.bones.length;}if(n.isMesh)triangles+=(n.geometry.index?.count||n.geometry.attributes.position.count)/3;});return {id:h.id,source:h.sourceId,meshes,bones,triangles,drawCalls:v.renderer.info.render.calls};});
  assert.equal(stats.id,'hero-'+p.id);assert.ok(stats.meshes>0&&stats.bones>0);report.profiles.push(stats);
  await page.locator('.hero-stage').screenshot({path:file(p.id+'.png')});
  await page.getByRole('button',{name:'Voir le visage',exact:true}).click();
  assert.equal(await page.locator('.hero-zoom').getAttribute('aria-pressed'),'true');
  await page.locator('.hero-stage').screenshot({path:file(p.id+'-face.png')});
  await page.getByRole('button',{name:'Voir la silhouette',exact:true}).click();
 }
 await page.locator('[data-family="genz"]').click();await page.locator('[data-hero="genz-lea"]').click();await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
 await page.screenshot({path:file('selection-390.png')});await page.locator('#hero-confirm').click();
 await page.waitForFunction(()=>window.__convergence.crowdManager.playerStickmen[0]?.userData.realisticAvatar==='hero-genz-lea');
 report.start=await page.evaluate(()=>{const g=window.__convergence,c=g.crowdManager;return {count:c.playerCount,roster:c.roster,visual:c.density.total,hero:g.heroes.save};});
 assert.equal(report.start.count,11);assert.ok(report.start.roster.every(f=>f==='genz'));assert.equal(report.start.hero.heroId,'genz-lea');
 await page.evaluate(()=>{const g=window.__convergence;for(let i=0;i<35;i++)g.update(.016);});await page.screenshot({path:file('run-390.png')});
 await finish(page);assert.equal(await page.evaluate(()=>window.__convergence.heroes.save.xp),60);
 // Finish another free course, unlocking the first cosmetic without a payment.
 await page.locator('#next-btn').click();await page.waitForTimeout(400);await finish(page);
 assert.equal(await page.evaluate(()=>window.__convergence.heroes.save.xp),120);
 await page.evaluate(()=>window.__convergence.heroes.open(false));await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
 await page.getByRole('button',{name:'Brassard du collectif',exact:true}).click();await page.waitForFunction(()=>!document.getElementById('hero-confirm').disabled);
 await page.screenshot({path:file('wardrobe-390.png')});await page.locator('#hero-confirm').click();
 const before=await page.evaluate(()=>({hero:window.__convergence.heroes.save,progress:localStorage.getItem('convergence_save')}));
 await page.reload({waitUntil:'networkidle'});await page.waitForFunction(()=>window.__convergence?.heroes);
 assert.deepEqual(await page.evaluate(()=>window.__convergence.heroes.save),before.hero);
 await page.locator('#play-btn').click();await page.waitForTimeout(500);await page.evaluate(()=>window.__convergence.qaManual=true);
 await page.waitForFunction(()=>window.__convergence.crowdManager.playerStickmen[0]?.userData.realHumanoid?.model.getObjectByName('outfit-hero-armband'));
 // Maximum crowd: family roster is not the visual count, and slots stay bounded.
 report.maximum=await page.evaluate(()=>{const g=window.__convergence,c=g.crowdManager;c.addToPlayerCrowd(72-c.playerCount,'lyceens');g.shields=48;for(let i=0;i<30;i++)c.update(.05);return {count:c.playerCount,roster:c.roster.length,visual:c.density.total};});assert.equal(report.maximum.count,72);assert.equal(report.maximum.roster,72);assert.equal(report.maximum.visual,312);
 await page.setViewportSize({width:320,height:700});await page.screenshot({path:file('maximum-320.png')});
 // Powers and equipment never affect the competitive daily baseline or XP.
 await page.evaluate(()=>window.__convergence.startDailyChallenge('2026-10-21'));
 assert.equal(await page.evaluate(()=>window.__convergence.crowdManager.playerCount),5);
 assert.equal(await page.evaluate(()=>window.__convergence.heroes.activate()),false);
 await finish(page);assert.deepEqual(await page.evaluate(()=>window.__convergence.heroes.save),before.hero);
 report.checks.push('L1 real win → 20 model previews → L2 11 members → two free wins → XP cosmetic → reload → visible equipment → 312 silhouettes → daily isolation');
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
 writeFileSync(file('results.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({ok:true,profiles:report.profiles.length,checks:report.checks,maximum:report.maximum}));
}finally{await browser.close();}
