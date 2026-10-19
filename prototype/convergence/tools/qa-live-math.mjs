import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {generateTacticalLevel,replayPlan,greedyPath,difficultyTargets} from '../src/tactics.mjs';

const {chromium}=createRequire(import.meta.url)('playwright-core');
const url=process.env.QA_URL||'http://127.0.0.1:4320/convergence-runner-lab/convergence/';
const output=process.env.QA_OUTPUT||'C:/CITYOS/convergence-qa-20261019/live-math';
const cases=[
 {level:1,startCount:5,strength:1,method:'winner'},
 {level:1,startCount:5,strength:1,method:'greedy'},
 {level:2,startCount:5,strength:1,method:'winner'},
 {level:10,startCount:5,strength:1,method:'winner'},
 {level:30,startCount:50,strength:3,method:'winner'}
];
fs.mkdirSync(output,{recursive:true});
const report={url,cases:[],errors:[],httpErrors:[],testedAt:new Date().toISOString()};
const browser=await chromium.launch({
 executablePath:process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe',
 headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']
});
try{
 const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1.5,isMobile:true,hasTouch:true});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400)report.httpErrors.push({status:r.status(),url:r.url()});});
 await page.goto(url+(url.includes('?')?'&':'?')+'qa=1',{waitUntil:'networkidle'});
 await page.click('#play-btn');
 await page.waitForFunction(()=>window.__convergence?.levelGenerator?.plan?.proof,{timeout:45000});
 for(const c of cases){
  const out=await page.evaluate(({level,startCount,strength,method})=>{
   const g=window.__convergence;
   g.qaManual=true;
   g.level=level;
   g.strengthUpgrade=strength;
   g.getStartingCrowdSize=()=>startCount;
   g.startGame();
   const plan=g.levelGenerator.plan;
   const path=method==='winner'?plan.proof.winningPath:
      (()=>{let s={count:startCount,shields:0},p=[];
       const apply=(state,choice)=>{let n={...state};
        if(choice.op==='damage'){const loss=choice.percent?Math.ceil(n.count*choice.value/100):choice.value;
         const covered=Math.min(n.shields,loss);n.shields-=covered;n.count=Math.max(0,n.count-(loss-covered));return n;}
        if(choice.op==='shield')n.shields=Math.min(48,n.shields+choice.value);
        else if(choice.op==='+')n.count=Math.min(72,n.count+choice.value);
        else if(choice.op==='-')n.count=Math.max(0,n.count-choice.value);
        else if(choice.op==='*')n.count=Math.min(72,n.count*choice.value);
        else if(choice.op==='/')n.count=Math.floor(n.count/Math.max(1,choice.value));
        else if(choice.op==='%')n.count=Math.floor(n.count*(1+choice.value/100));
        else if(choice.op==='conditional')n.count=Math.min(72,Math.max(0,n.count+(
         (choice.condition==='atMost'?n.count<=choice.threshold:
          choice.condition==='shield'?n.shields>=choice.threshold:n.count>=choice.threshold)
          ?choice.value:(choice.elseValue||0))));
        return n;
       };
       for(const e of plan.events){
        if(e.type==='enemy'){const loss=Math.max(0,Math.ceil(e.count/strength)-1),cover=Math.min(s.shields,loss);s.shields-=cover;s.count=Math.max(0,s.count-loss+cover);continue;}
        const l=apply(s,e.left),r=apply(s,e.right),side=l.count>=r.count?'left':'right';p.push(side);s=side==='left'?l:r;
       }return p;
      })();
   let frame=0,finished=false,stageSeen=[],lastHistory=0,lastEnemies=0;
   // Full live Game.update: movement crosses actual collision volumes,
   // and real enemy + final boss fights run with the current timings.
   for(;frame<2400;frame++){
    if(g.state==='playing'){
      const side=path[g.gateHistory.length]||'left';
      g.playerX=side==='left'?-2.5:2.5;
    }
    g.update(.15);
    if(g.gateHistory.length>lastHistory){
      for(const event of g.gateHistory.slice(lastHistory))stageSeen.push({type:'gate',count:event.after.count,shields:event.after.shields});
      lastHistory=g.gateHistory.length;
    }
    const defeated=g.levelGenerator.enemies.filter(e=>e.defeated).length;
    if(defeated>lastEnemies){stageSeen.push({type:'enemy',number:defeated,count:g.crowdManager.playerCount,shields:g.shields});lastEnemies=defeated;}
    if(['lose','boss_defeated','win'].includes(g.state)){finished=true;break;}
   }
   return {level,startCount,strength,method,seed:plan.seed,boss:plan.bossHealth,
    path,frame,finished,stageSeen,gateHistory:g.gateHistory.length,
    defeatedEnemies:g.levelGenerator.enemies.filter(e=>e.defeated).length,
    state:g.state,count:g.crowdManager.playerCount,shields:g.shields,
    proof:plan.proof,damageStats:{...g.lbdSystem.stats}};
  },c);
  assert.equal(out.finished,true,JSON.stringify(out).slice(0,800));
  const plan=generateTacticalLevel({level:c.level,seed:c.level*20261019,startCount:c.startCount,strength:c.strength});
  assert.equal(out.boss,plan.bossHealth);
  if(c.method==='winner'){
   assert.deepEqual(out.path,plan.proof.winningPath);
   assert.equal(out.state,'boss_defeated',JSON.stringify(out).slice(0,1600));
   assert.equal(out.gateHistory,10);
   assert.equal(out.defeatedEnemies,2);
   assert.equal(out.count,replayPlan(plan,out.path).count);
   const d=difficultyTargets(c.level);
   assert.ok(out.proof.winningRate>=d.min && out.proof.winningRate<=d.max);
  }else assert.equal(out.state,'lose',JSON.stringify(out).slice(0,1200));
  report.cases.push(out);
  if(c.level===1&&c.method==='winner')await page.screenshot({path:path.join(output,'level1-boss-defeated.png')});
  console.log('CHECK '+c.level+' '+c.method+' '+out.state+' '+out.count+' after '+out.frame+' updates');
 }
 assert.deepEqual(report.errors,[]);
 assert.deepEqual(report.httpErrors,[]);
 fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2));
 console.log('LIVE_ROUTE_QA_PASS '+report.cases.length);
 await context.close();
}finally{await browser.close();}
