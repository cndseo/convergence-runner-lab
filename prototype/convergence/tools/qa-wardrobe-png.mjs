import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {mkdirSync,writeFileSync} from 'node:fs';
import {HERO_PROFILES} from '../src/heroCatalog.mjs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'http://127.0.0.1:4694/';
const out=new URL('../../../qa-wardrobe-png/',import.meta.url);
mkdirSync(out,{recursive:true});
const file=n=>new URL(n,out).pathname.replace(/^\/([A-Za-z]:)/,'$1');
const report={base,profiles:[],errors:[],badAssets:[],checks:[]};
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
async function finish(page){
 for(let batch=0;batch<100;batch++){
  const state=await page.evaluate(()=>{
   const g=window.__convergence,path=g.levelGenerator.plan.proof.winningPath;
   for(let i=0;i<120;i++){
    if(g.state==='playing')g.playerX=(path[g.gateHistory.length]||'left')==='left'?-2.5:2.5;
    if(g.state==='final_chase')g.playerX=g.story.targetX;
    g.update(.05);if(['win','lose','boss_defeated'].includes(g.state))break;
   }
   return g.state;
  });
  if(state==='boss_defeated')await page.waitForTimeout(1300);
  if(state==='lose')throw Error('Certified route lost');
  if(state==='win')break;
 }
 assert.equal(await page.evaluate(()=>window.__convergence.state),'win');
 await page.waitForTimeout(600);
}
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,acceptDownloads:true});
 await context.route('**/api/v1/**',route=>route.fulfill({json:{leaderboard:false,payments:'disabled'}}));
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400&&r.url().includes('/assets/'))report.badAssets.push(r.url());});
 await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.__convergence?.heroes);
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>window.__convergence?.levelGenerator?.plan?.proof,{timeout:15000});
 await page.evaluate(()=>window.__convergence.qaManual=true);
 await finish(page);
 await page.locator('#next-btn').click();
 await page.waitForSelector('#hero-dialog');
 assert.equal(await page.locator('#hero-dialog canvas').count(),0);
 assert.equal(await page.locator('.hero-zoom').count(),0);
 assert.equal(await page.getByText('GLISSE POUR TOURNER').count(),0);
 for(const p of HERO_PROFILES){
  await page.locator('[data-family="'+p.family+'"]').click();
  await page.locator('[data-hero="'+p.id+'"]').click();
  await page.waitForFunction(id=>{
   const v=document.querySelector('#hero-dialog .hero-art-figure');
   const f=document.querySelector('#hero-dialog .hero-art-face');
   return !document.querySelector('#hero-confirm').disabled&&v?.complete&&v.naturalWidth>0&&v.src.endsWith('/'+id+'.png')&&f?.complete&&f.naturalWidth>0&&f.src.endsWith('/'+id+'-face.png');
  },p.id);
  report.profiles.push(p.id);
 }
 await page.locator('[data-family="genz"]').click();
 await page.locator('[data-hero="genz-lea"]').click();
 await page.waitForFunction(()=>!document.querySelector('#hero-confirm').disabled);
 await page.screenshot({path:file('selection-390.png')});
 const downloadPromise=page.waitForEvent('download');
 await page.getByRole('button',{name:'TÉLÉCHARGER LE PERSONNAGE PNG'}).click();
 const download=await downloadPromise;
 assert.match(download.suggestedFilename(),/genz-lea\.png$/);
 report.checks.push('20 portraits + 20 fiches visage correctement affichés; aucun WebGL dans le vestiaire; téléchargement PNG');
 await page.locator('#hero-confirm').click();
 await page.waitForFunction(()=>window.__convergence.crowdManager.playerStickmen[0]?.userData.realisticAvatar==='hero-genz-lea');
 const result=await page.evaluate(()=>{
  const g=window.__convergence,c=g.crowdManager;
  return {level:g.geographicLevel,hero:g.heroes.save.heroId,count:c.playerCount,glb:c.playerStickmen[0].userData.realisticAvatar};
 });
 assert.equal(result.hero,'genz-lea');assert.equal(result.count,11);
 report.checks.push('Sélection sauvegardée et modèle 3D conservé pendant la partie (11 membres)');
 await page.evaluate(()=>window.__convergence.heroes.open(false));
 await page.waitForFunction(()=>!document.querySelector('#hero-confirm').disabled);
 await page.setViewportSize({width:320,height:700});
 await page.screenshot({path:file('wardrobe-320.png')});
 assert.equal(await page.locator('#hero-dialog canvas').count(),0);
 report.checks.push('Vestiaire testé aux tailles 390x844 et 320x700');
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.badAssets,[]);
 writeFileSync(file('results.json'),JSON.stringify({...report,result},null,2));
 console.log(JSON.stringify({ok:true,profiles:report.profiles.length,checks:report.checks,result,errors:report.errors,badAssets:report.badAssets}));
}finally{await browser.close();}
