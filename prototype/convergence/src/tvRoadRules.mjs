import {sufferLoss} from './tactics.mjs';
export const TV_REACH=20;
export const TV_IMPACT_LEAD=1;
export const TV_TAP_SLOP=10;
export const TV_TAP_MS=320;
export const TV_RULESET='campaign-road-tv-20261021';
export const tvImpactDamage=count=>count<=0?0:Math.min(12,Math.max(2,Math.ceil(count*.08)));
export const applyTVImpact=state=>sufferLoss(state,tvImpactDamage(state.count));
export const canTapTV=(gate,trackZ)=>!gate.passed && (!gate.tvState||gate.tvState==='approaching') && gate.z-trackZ>TV_IMPACT_LEAD && gate.z-trackZ<=TV_REACH;
export function claimTV(gate,outcome){
 if(gate.passed||!['chosen','missed'].includes(outcome))return false;
 gate.passed=true;gate.tvState=outcome;gate.tvOutcome=outcome;gate.tvElapsed=0;
 return true;
}
export const isTVTap=(down,up,time)=>!!down&&!down.dragged&&Math.hypot(up.x-down.x,up.y-down.y)<=TV_TAP_SLOP&&time-down.time<=TV_TAP_MS;
