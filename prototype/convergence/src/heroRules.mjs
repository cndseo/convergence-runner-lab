import {heroById,HERO_EQUIPMENT,HERO_COMMUNITIES} from './heroCatalog.mjs';
// Versioned prototype settings, NOT final economy or approved balance.
export const HERO_RULES=Object.freeze({version:1,status:'prototype',initialMembers:10,
 xpPerGate:3,winXP:30,xpPerLevel:120,maxLevel:30,chargesPerRun:1,duration:6,
 powers:Object.freeze({genz:'sprint',gilets:'cohesion',infirmieres:'clear-gas',pompiers:'smoke-guard',lyceens:'scout'})});
export const HERO_SAVE_KEY='convergence_hero_v1';
export const heroLevel=xp=>Math.min(HERO_RULES.maxLevel,1+Math.floor(Math.max(0,xp||0)/HERO_RULES.xpPerLevel));
export function normalizeHeroSave(raw){
 const hero=heroById(raw?.heroId);
 const xp=Number.isFinite(raw?.xp)?Math.max(0,Math.min(1000000,Math.floor(raw.xp))):0;
 const item=HERO_EQUIPMENT.find(x=>x.id===raw?.equipment&&x.level<=heroLevel(xp));
 return {version:1,heroId:hero?.id||null,xp:hero?xp:0,equipment:hero?item?.id||'standard':'standard',
   completedRunIds:Array.isArray(raw?.completedRunIds)?raw.completedRunIds.filter(x=>typeof x==='string').slice(-32):[]};
}
export function selectHero(save,id){
 if(!heroById(id)||save.heroId)return save; // Changing hero remains an unapproved product rule.
 return {...normalizeHeroSave(save),heroId:id};
}
export function equipHero(save,id){
 const item=HERO_EQUIPMENT.find(x=>x.id===id);
 return save.heroId&&item&&item.level<=heroLevel(save.xp)?{...save,equipment:id}:save;
}
export function awardHeroRun(save,{id,mode,won,gates,practice=false}){
 if(!save.heroId||mode!=='campaign'||practice||!id||save.completedRunIds.includes(id))return save;
 const amount=Math.max(0,Math.min(10,Math.floor(gates||0)))*HERO_RULES.xpPerGate+(won?HERO_RULES.winXP:0);
 return {...save,xp:save.xp+amount,completedRunIds:[...save.completedRunIds,id].slice(-32)};
}
export function familyRoster(count,family){
 return Array.from({length:Math.max(0,Math.floor(count))},()=>family);
}
export function changeRoster(roster,target,choice,home){
 target=Math.max(0,Math.floor(target));
 if(target<=roster.length)return roster.slice(0,target);
 const result=roster.slice(),cycle=roster.length?roster:[home];
 const families=HERO_COMMUNITIES.map(f=>f.id);
 const recruits=choice?.bonusFaction||families.find(f=>!roster.includes(f))||home;
 while(result.length<target)result.push(['*','%'].includes(choice?.op)?cycle[(result.length-roster.length)%cycle.length]:recruits);
 return result;
}
export function rosterSummary(roster){
 const totals=Object.fromEntries(HERO_COMMUNITIES.map(f=>[f.id,0]));
 for(const family of roster)totals[family]=(totals[family]||0)+1;
 return totals;
}
export function atlasRowForFamily(family,index){
 const group=HERO_COMMUNITIES.findIndex(f=>f.id===family);
 return Math.max(0,group)*4+Math.abs(Math.floor(index))%4;
}
