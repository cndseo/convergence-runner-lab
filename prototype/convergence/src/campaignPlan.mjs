import {TV_RULESET} from './tvRoadRules.mjs';
import {makeFixedPairs} from './fixedTVCatalog.mjs';
import {initialState,solvePlan,replayPlan,greedyPath} from './tactics.mjs';
import {applyCampaignCombat} from './campaignCombatRules.mjs';

// Campaign-only rules. The daily generator and its server verifier stay v3.
export function campaignTargets(level){
  return level<=1?{min:.25,ideal:.32}:level<=3?{min:.15,ideal:.23}:{min:.09,ideal:.17};
}
function random(seed){let a=seed>>>0;return()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
function certify(plan){
  // Exact weighted enumeration of all 3^10 routes without 59,049 path arrays
  // on the mobile main thread. Merging retains count, shields and missed count.
  const paths=solvePlan(plan,false,{compact:true}),winners=paths.filter(p=>p.survivors>0);
  const attentive=winners.filter(p=>p.misses===0);
  const witness=attentive.reduce((a,b)=>!a||b.survivors>a.survivors?b:a,null);
  if(!witness)throw Error('Campaign has no free attentive winning route');
  const sum=rows=>rows.reduce((n,p)=>n+p.ways,0),total=sum(paths),winning=sum(winners);
  const byMisses=Array.from({length:11},(_,misses)=>{
    const rows=paths.filter(p=>p.misses===misses),win=rows.filter(p=>p.survivors>0);
    return {misses,totalPaths:sum(rows),winningPaths:sum(win),winningRate:sum(win)/sum(rows)};
  });
  plan.proof={winningPaths:winning,totalPaths:total,winningRate:winning/total,
    attentiveWinningRate:byMisses[0].winningRate,byMisses,
    winningPath:witness.path,witnessSurvivors:witness.survivors,
    minSurvivors:Math.min(...winners.map(p=>p.survivors)),
    greedyWins:replayPlan(plan,greedyPath(plan).path).count>0,difficulty:campaignTargets(plan.level)};
  return plan;
}
export function generateCampaignLevel({level=1,seed=1,startCount=5,strength=1}={}){
  level=Math.max(1,Math.min(12,Math.floor(level)));
  const rand=random(seed+level*7919),bounds=campaignTargets(level);
  let selected=null;
  // Always balance a free, unupgraded crowd first. Earned upgrades never raise resistance.
  for(let attempt=0;attempt<56;attempt++){
    const pairs=makeFixedPairs();
    // Five side patrols and four substantive roadblocks. The same events drive
    // the solver, gameplay casualties and the street formation's lunging units.
    if(level>1)for(let i=pairs.length-1;i>2;i--){const j=2+Math.floor(rand()*(i-1));[pairs[i],pairs[j]]=[pairs[j],pairs[i]];}
    const events=[];
    pairs.forEach((pair,i)=>{
      if(rand()<.5)pair.reverse();
      events.push({type:'choice',z:14+i*16,left:pair[0],right:pair[1]});
      if((level===1?[3,6,9]:[1,3,5,7,9]).includes(i))
        events.push({type:'patrol',kind:i%3===0?'bac':'crs',z:21+i*16,side:i%2?'right':'left'});
      if((level===1?[4,7]:[2,4,6,8]).includes(i))
        events.push({type:'enemy',kind:i%3===0?'bac':'crs',z:23+i*16,
          count:(level===1?6+(i===7?2:0):10+(i%4)*2)});
    });
    const plan={version:5,ruleset:TV_RULESET,seed,level,startCount:5,strength:1,
      events,trackLength:180,bossHealth:0,tvCatalog:'fixed16'};
    // Keep the existing resistance calibration; the final proof uses exact arithmetic.
    const calibration={...plan,legacyTVLimits:true};
    const paths=solvePlan(calibration,false,{includeMiss:false,compact:true}),greedy=greedyPath(calibration);
    for(let health=9;health<=90;health++){
      if(level<=3&&applyCampaignCombat(greedy,health).count===0)continue;
      const rate=paths.filter(p=>applyCampaignCombat(p,health).count>0).reduce((n,p)=>n+p.ways,0)/1024;
      if(rate<bounds.min)continue;
      const score=Math.abs(rate-bounds.ideal);
      if(!selected||score<selected.score)selected={plan:{...plan,bossHealth:health},score};
    }
    if(selected&&(selected.score<.025||level===1))break;
  }
  if(!selected)throw Error('Cannot certify free campaign level '+level);
  const plan=selected.plan;
  plan.baseline=certify({...plan}).proof;
  plan.startCount=initialState(startCount).count;
  plan.strength=Math.max(1,Math.floor(strength));
  return certify(plan);
}
