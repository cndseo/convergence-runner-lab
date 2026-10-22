import {generateTacticalLevel,solvePlan,replayPlan,greedyPath,difficultyTargets} from '../src/tactics.mjs';
const stats={total:0,impossible:0,invalidProof:0,greedyWins:0,allWin:0,outsideDifficultyBand:0,minWins:1025,maxWins:0,ratios:[],outliers:[]};
for(const startCount of [5,8,17,35,50,72]){
 for(const strength of [1,2,3,7]){
  for(let level=1;level<=100;level++){
   const seed=level*20261019;
   const plan=generateTacticalLevel({level,seed,startCount,strength});
   const sols=solvePlan(plan);
   const real=sols.filter(s=>s.count>0&&replayPlan(plan,s.path).count>0);
   const proofResult=replayPlan(plan,plan.proof.winningPath).count;
   stats.total++; stats.minWins=Math.min(stats.minWins,real.length);stats.maxWins=Math.max(stats.maxWins,real.length);
   stats.ratios.push(real.length/sols.length);
   const bounds=difficultyTargets(level), rate=real.length/sols.length;
   if(rate<bounds.min || rate>bounds.max)stats.outsideDifficultyBand++;
   if(!real.length)stats.impossible++;
   if(proofResult<=0){stats.invalidProof++;if(stats.outliers.length<12)stats.outliers.push({level,startCount,strength,reason:'invalid proof',boss:plan.bossHealth,wins:real.length});}
   if(replayPlan(plan,greedyPath(plan).path).count>0)stats.greedyWins++;
   if(real.length===sols.length)stats.allWin++;
  }
 }
}
stats.ratios.sort((a,b)=>a-b);
const sample=q=>stats.ratios[Math.floor(q*(stats.ratios.length-1))];
stats.percentiles={min:sample(0),p10:sample(.1),median:sample(.5),p90:sample(.9),max:sample(1)};
delete stats.ratios;
console.log(JSON.stringify(stats,null,2));
if(stats.impossible||stats.invalidProof||stats.greedyWins||stats.allWin||stats.outsideDifficultyBand)process.exitCode=1;
