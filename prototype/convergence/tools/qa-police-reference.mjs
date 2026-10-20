import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdirSync} from 'node:fs';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4530/';
const out='C:/CITYOS/convergence-police-reference/qa';
mkdirSync(out,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
for(const viewport of [{width:390,height:844},{width:320,height:700}]){
 const ctx=await browser.newContext({viewport,isMobile:true,hasTouch:true});
 const page=await ctx.newPage(),errors=[],responses={};
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.url().includes('/police-reference/'))responses[r.url().split('/').at(-1)]=r.status()});
 await page.goto(url+'?qa=1',{waitUntil:'networkidle'});
 await page.locator('#play-btn').click();
 await page.waitForFunction(()=>!!window.__convergence.levelGenerator?.enemies?.length,{timeout:16000});
 const created=await page.evaluate(()=>{
   const g=window.__convergence;
   g.qaManual=true;
   const result={};
   for(const [kind,x] of [['crs',-3.2],['bac',0],['bravm',3.2]]){
     const enemy={kind,z:28,count:1,defeated:false,meshes:[]};
     g.levelGenerator.createEnemyCrowd(enemy,28,1);
     enemy.meshGroup.position.x=x;
     result[kind]=true;
     if(kind==='bravm')window.__qaRiderEnemy=enemy;
   }
   return result;
 });
 await page.waitForFunction(()=>{
   const g=window.__convergence;
   const refs={crs:0,bac:0,bravm:0};
   g.scene.traverse(o=>{const m=o.name?.match(/^POLICE_REFERENCE_(CRS|BAC|BRAVM)$/);
     if(m&&o.visible)refs[m[1].toLowerCase()]++;});
   return Object.values(refs).every(v=>v>=1);
 },{timeout:20000});
 const starting=await page.evaluate(()=>{
   const g=window.__convergence;
   const textures={};
   g.scene.traverse(o=>{
     if(!o.name?.startsWith('POLICE_REFERENCE_')||!o.visible)return;
     const kind=o.name.slice(17).toLowerCase();
     textures[kind]={isSprite:o.isSprite,tex:o.material.map?.image?.width||0,
       alpha:o.material.alphaTest,width:o.scale.x,height:o.scale.y};
   });
   const rider=window.__qaRiderEnemy.officers[0];
   return {textures,originalHidden:rider.children.filter(c=>!c.userData.referenceVisual).every(c=>!c.visible),
     initialZ:rider.position.z,kind:rider.userData.referenceKind};
 });
 assert.ok(starting.textures.crs?.isSprite&&starting.textures.bac?.isSprite&&starting.textures.bravm?.isSprite,
   'all reference artwork sprites appear');
 assert.ok(starting.textures.crs.tex>100&&starting.textures.bac.tex>100);
 assert.equal(starting.originalHidden,true,'legacy motorbike is not double-rendered');
 assert.deepEqual(Object.values(responses).sort(),[200,200,200],'all three images were served');
 await page.evaluate(()=>{
   const g=window.__convergence;
   for(const gate of g.levelGenerator.gates){for(const pane of [gate.leftMesh,gate.rightMesh])if(pane?.userData?.root)pane.userData.root.visible=false;}
   g.camera.position.set(0,4.1,-18);
   g.camera.lookAt(0,1.0,-28);
   g.renderer.render(g.scene,g.camera);
 });
 await page.screenshot({path:out+'/references-'+viewport.width+'.png'});
 const charge=await page.evaluate(()=>{
   const g=window.__convergence,enemy=window.__qaRiderEnemy,rider=enemy.officers[0];
   const initial=rider.position.z;
   g.state='fighting';g.fightingEnemy=enemy;g.fightTimer=-99;g.fightElapsed=0;
   g.shields=999;g.marseille.clear();g.state='fighting';g.fightingEnemy=enemy;
   for(let i=0;i<36;i++)g.update(.05);
   const atEnd=rider.position.z;
   g.state='paused';g.pausedState='fighting';
   for(let i=0;i<10;i++)g.update(.05);
   const whilePaused=rider.position.z;
   return {initial,atEnd,whilePaused,x:rider.position.x,delta:atEnd-initial};
 });
 assert.ok(charge.delta>=3.2&&charge.delta<=4.5,'motorbike charges into the demonstrator front');
 assert.equal(charge.atEnd,charge.whilePaused,'charge pauses with game');
 assert.deepEqual(errors,[]);
 console.log('REFERENCE_POLICE_QA_PASS',JSON.stringify({viewport,created,starting,charge,responses,errors}));
 await ctx.close();
}
}finally{await browser.close();}
