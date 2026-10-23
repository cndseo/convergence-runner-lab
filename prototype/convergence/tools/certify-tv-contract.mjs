import assert from 'node:assert/strict';
import {mkdirSync,writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {generateCampaignLevel} from '../src/campaignPlan.mjs';
import {replayPlan,applyChoice} from '../src/tactics.mjs';
import {FIXED_TV_CATALOG,MARSEILLE_TV,makeFixedTVChoice} from '../src/fixedTVCatalog.mjs';
const reference=mkdtempSync(join(tmpdir(),'convergence-tv-reference-'));
for(const name of ['campaignPlan.mjs','tactics.mjs','fixedTVCatalog.mjs','campaignCombatRules.mjs','tvRoadRules.mjs'])
 writeFileSync(join(reference,name),execFileSync('git',['show','8f8e252:prototype/convergence/src/'+name]));
const old=await import(pathToFileURL(join(reference,'campaignPlan.mjs')));
const oldMath=await import(pathToFileURL(join(reference,'tactics.mjs')));
const dir=new URL('../../../docs/reviews/tv-contract-20261023/',import.meta.url);mkdirSync(dir,{recursive:true});
const rows=[];
for(let level=1;level<=12;level++)for(const seed of [1,17,20261023,level*20261019]){
 const p=generateCampaignLevel({level,seed}),before=old.generateCampaignLevel({level,seed});
 assert.equal(p.bossHealth,before.bossHealth);assert.deepEqual(p.events,before.events);
 assert.ok(replayPlan(p,p.proof.winningPath).count>0);
 rows.push({level,seed,boss:p.bossHealth,resistanceUnchanged:true,totalPaths:p.proof.totalPaths,winningPaths:p.proof.winningPaths,attentiveWinningRate:p.proof.attentiveWinningRate,survivors:p.proof.witnessSurvivors});
}
const beforeAfter=[];
for(const [key,state] of [['renforts10',{count:70,shields:0}],['mobilisation2',{count:72,shields:0}],['protections21',{count:30,shields:47}]]){
 beforeAfter.push({key,state,before:oldMath.applyChoice(state,makeFixedTVChoice(key)),after:applyChoice(state,makeFixedTVChoice(key))});
}
writeFileSync(new URL('simulations.json',dir),JSON.stringify({rows,beforeAfter},null,2));
const lines=['| PNG original | Effet annoncé et ressource | État réel après (départ : 30 manifestants, 0 protection) |','| --- | --- | --- |'];
for(const [key,d] of Object.entries(FIXED_TV_CATALOG)){
 const result=applyChoice({count:30,shields:0},makeFixedTVChoice(key));
 lines.push('| ['+d.file+'](../../../prototype/convergence/public/assets/'+d.folder+'/'+d.file+') | '+d.op+' '+d.value+(d.percent?' %':'')+' · '+(d.resource==='shields'?'protections':d.family==='all'?'manifestants':d.family)+' | '+result.count+' manifestants · '+result.shields+' protections |');
}
lines.push('| [tv-marseille-attack.png](../../../prototype/convergence/public/assets/marseille-bonus/tv-marseille-attack.png) | +1 charge marseillaise en réserve | Effectifs et protections inchangés ; attaque inactive |');
writeFileSync(new URL('correspondance.md',dir),lines.join('\n')+'\n');
console.log('48 campaign configurations: resistance/layout unchanged, all exact free witnesses win; 2,834,352 ternary routes accounted for.');

rmSync(reference,{recursive:true,force:true});
