import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright-core');
const base=process.env.QA_URL||'https://chris-temp-homework-mothers.trycloudflare.com/convergence-runner-lab/convergence/';
const dir='C:/CITYOS/convergence-qa-20261019/tactical-feedback-p1';
fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({
 executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']
});
const report={base,cases:[],errors:[],badResponses:[]};
try{
 for(const vp of [{width:320,height:700},{width:390,height:844}]){
  const context=await browser.newContext({viewport:vp,isMobile:true,hasTouch:true});
  const page=await context.newPage();
  page.on('pageerror',err=>report.errors.push(err.message));
  page.on('response',resp=>{if(resp.status()>=400)report.badResponses.push({code:resp.status(),url:resp.url()});});
  await page.goto(base+(base.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
  await page.locator('#play-btn').click();
  await page.waitForFunction(()=>window.__convergence?.levelGenerator?.plan?.proof,{timeout:22000});
  const gate=await page.evaluate(()=>{
   const g=window.__convergence;
   const data=g.levelGenerator.gates.flatMap(x=>[x.leftGate,x.rightGate]);
   const shield=data.find(choice=>choice.op==='shield');
   if(!shield)throw new Error('Missing shield gate');
   const before=g.crowdManager.getPlayerCount();
   const protections=g.shields;
   const reward=shield.value;
   g.applyGate(shield);
   const hint=document.getElementById('tactical-hint');
   const rect=hint.getBoundingClientRect();
   const sound=g.audio.ctx?.state;
   g.audio.playShieldContact(2);
   return {before,after:g.crowdManager.getPlayerCount(),protectionsBefore:protections,
    protectionsAfter:g.shields,reward,history:g.gateHistory.length,
    hint:hint?.innerText,visible:hint.classList.contains('visible'),bounds:{left:rect.left,right:rect.right,top:rect.top,bottom:rect.bottom},
    audioState:sound,screen:{w:innerWidth,h:innerHeight}};
  });
  assert.equal(gate.history,1);
  assert.equal(gate.after,gate.before);
  assert.equal(gate.protectionsAfter-gate.protectionsBefore,gate.reward);
  assert.match(gate.hint,/protections/);
  assert.equal(gate.visible,true);
  assert.ok(gate.bounds.left>=-1 && gate.bounds.right<=vp.width+1,'hint overflows width '+JSON.stringify(gate));
  assert.ok(gate.bounds.bottom<vp.height-25,'hint covers bottom touch controls');
  report.cases.push({viewport:vp,type:'gate',...gate});
  await page.screenshot({path:dir+'/gate-'+vp.width+'.png'});
  const victory=await page.evaluate(()=>{
   const g=window.__convergence;
   const prior=g.level,coins=g.coins;
   g.winGame();
   return {state:g.state,prior,next:g.level,priorCoins:coins,currentCoins:g.coins,
    report:document.querySelector('#win-report')?.innerText,
    clearHint:!document.getElementById('tactical-hint')?.classList.contains('visible')};
  });
  assert.equal(victory.state,'win');assert.equal(victory.next,victory.prior+1);
  assert.ok(victory.currentCoins>victory.priorCoins);
  assert.match(victory.report,/★/);assert.match(victory.report,/survivant/);
  assert.equal(victory.clearHint,true);
  report.cases.push({viewport:vp,type:'victory',...victory});
  await page.waitForTimeout(380);
  await page.screenshot({path:dir+'/win-'+vp.width+'.png'});
  const defeat=await page.evaluate(()=>{
   const g=window.__convergence;g.startGame();
   g.loseGame('combat');
   return {state:g.state,report:document.querySelector('#lose-report')?.innerText,tip:document.querySelector('#lose-tip')?.innerText,
    winHidden:document.querySelector('#win-screen')?.classList.contains('hidden')};
  });
  assert.equal(defeat.state,'lose');assert.match(defeat.report,/forces de l’ordre/);
  assert.ok(defeat.tip?.length>20);
  assert.equal(defeat.winHidden,true);
  report.cases.push({viewport:vp,type:'defeat',...defeat});
  await page.waitForTimeout(380);
  await page.screenshot({path:dir+'/lose-'+vp.width+'.png'});
  await context.close();
 }
 assert.deepEqual(report.errors,[]);
 assert.deepEqual(report.badResponses,[]);
 fs.writeFileSync(dir+'/report.json',JSON.stringify(report,null,2));
 console.log('TACTICAL_FEEDBACK_QA_PASS '+JSON.stringify({checked:report.cases.length,errors:report.errors,badResponses:report.badResponses}));
}finally{await browser.close();}
