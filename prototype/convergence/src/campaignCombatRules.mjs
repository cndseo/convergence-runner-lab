import {sufferLoss} from './tactics.mjs';

// Campaign only. The daily mode and the published tactical solver stay unchanged.
// One combat exchange is deterministic and shared by the solver and Game.updateFight.
export const campaignPlayerStrike=(participants,strength=1)=>
 Math.max(1,Math.floor(Math.max(0,participants)/7))*Math.max(1,Math.floor(strength));
export const campaignOfficerStrike=remaining=>
 Math.max(1,Math.ceil(Math.max(0,remaining)/11));

export function campaignCombatExchange(state,remaining,strength=1){
 const killed=Math.min(remaining,campaignPlayerStrike(state.count,strength));
 const nextRemaining=Math.max(0,remaining-killed);
 const hits=nextRemaining>0?campaignOfficerStrike(nextRemaining):0;
 const after=hits?sufferLoss(state,hits):{...state};
 return {after,remaining:nextRemaining,killed,hits,absorbed:state.shields-after.shields,lost:state.count-after.count};
}
export function applyCampaignCombat(state,health,strength=1){
 let remaining=Math.max(0,Math.floor(health)),next={...state};
 while(remaining>0&&next.count>0){
  const exchanged=campaignCombatExchange(next,remaining,strength);
  remaining=exchanged.remaining;next=exchanged.after;
 }
 return next;
}

// Flank groups deliver a single registered strike on the route. Shields absorb
// the first blows; crowd attrition increases with procession size and district.
export function campaignPatrolDamage(participants,level=1){
 if(participants<=0)return 0;
 return Math.min(6,Math.max(1,Math.ceil(participants/18)+Math.floor((level-1)/5)));
}
export function applyCampaignPatrol(state,level=1){
 return sufferLoss(state,campaignPatrolDamage(state.count,level));
}
