import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/spiderman-user-asset';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try {
 for(const size of [{width:390,height:844},{width:320,height:700}]){
  const ctx=await browser.newContext({viewport:size,isMobile:true,hasTouch:true});
  const page=await ctx.newPage();
  const errors=[];const failed=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)failed.push({code:r.status(),url:r.url()})});
  await page.goto(base+'?qa=1',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.__convergence?.challengeHub,{timeout:20000});
  await page.locator('#premium-btn').click();
  const row=page.locator('.challenge-product').first();
  assert.match(await row.innerText(),/Spider-Man/);
  assert.match(await row.innerText(),/1,99 €/);
  assert.ok(await page.locator('.character-product-thumb').count()>=2);
  await page.waitForFunction(()=>{const i=document.querySelector('.character-product-thumb');return i?.complete&&i.naturalWidth>100;},{timeout:12000});
  assert.equal(await page.locator('.character-product-thumb').first().evaluate(i=>i.complete&&i.naturalWidth>100),true);
  await page.screenshot({path:dir+'/shop-'+size.width+'.png'});
  await page.getByRole('button',{name:/TESTER SPIDER-MAN/}).click();
  await page.waitForFunction(()=>{
    const g=window.__convergence;
    return g.state==='playing'&&!!g.crowdManager?.playerStickmen?.[1]?.userData?.costumeModel3D;
  },{timeout:19000});
  const state=await page.evaluate(()=>{
    const g=window.__convergence;
    g.qaManual=true;
    for(let i=0;i<30;i++)g.update(.05);
    const p02=g.crowdManager.playerStickmen[0];
    const second=g.crowdManager.playerStickmen[1];
    const model=second.userData.costumeModel3D;
    let meshes=0,sprites=0,photoPanels=0;
    model.traverse(o=>{
      if(o.isMesh)meshes++;
      if(o.isSprite)sprites++;
      if(o.name==='ORIGINAL_ART_FABRIC_DECAL')photoPanels++;
    });
    return {level:g.level,mode:g.mode,population:g.crowdManager.getPlayerCount(),
      p02IsLeader:!!p02.userData.approvedLeader,p02Costume:!!p02.userData.costumeAvatar,
      spiderCostume:second.userData.costumeAvatar,secondIndex:second.userData.index,
      model:model.name,meshes,sprites,photoPanels,visible:model.visible,
      frontline:g.fightingEnemy===null,cost:g.challengeHub.paymentsEnabled};
  });
  assert.equal(state.mode,'campaign');
  assert.equal(state.p02Costume,false);
  assert.equal(state.spiderCostume,'spiderman');
  assert.match(state.model,/SPIDERMAN_3D/);
  assert.ok(state.meshes>=25);
  assert.equal(state.sprites,0);
  assert.ok(state.photoPanels>=2);
  assert.equal(state.visible,true);
  assert.equal(state.cost,false);
  assert.deepEqual(errors,[]);
  assert.deepEqual(failed,[]);
  await page.screenshot({path:dir+'/game-'+size.width+'.png'});
  console.log('SPIDERMAN_IN_GAME_OK '+JSON.stringify({viewport:size,...state,errors,failed}));
  await ctx.close();
 }
}finally{await browser.close();}
