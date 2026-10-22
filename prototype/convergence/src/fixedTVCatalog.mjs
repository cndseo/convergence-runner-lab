import assetHashes from './tvAssetHashes.mjs';
// The unmodified PNG, resource, family and operation belong to one immutable definition.
const definitions={
 renforts10:{file:'tv_bfmtv_bonus_10_renforts.png',op:'+',value:10},
 mobilisation2:{file:'tv_bfmtv_bonus_x2_mobilisation.png',op:'*',value:2},
 protections14:{file:'tv_bfmtv_bonus_14_protections.png',op:'shield',value:14},
 protections21:{file:'tv_bfmtv_bonus_21_protections.png',op:'shield',value:21},
 boucliers5:{file:'tv_bfmtv_bonus_5_boucliers.png',op:'shield',value:5},
 ralliement50:{file:'tv_bfmtv_bonus_50pct_ralliement.png',op:'%',value:50},
 genz6:{file:'tv_cnews_bonus_6_genz.png',op:'+',value:6,bonusFaction:'genz'},
 pompiers4:{file:'tv_cnews_bonus_4_pompiers.png',op:'+',value:4,bonusFaction:'pompiers'},
 infirmieres3:{file:'tv_cnews_bonus_3_infirmieres.png',op:'+',value:3,bonusFaction:'infirmieres'},
 gilets5:{file:'tv_cnews_bonus_5_gilets_jaunes.png',op:'+',value:5,bonusFaction:'gilets'},
 barrage15:{file:'tv_lci_malus_15_barrage.png',op:'damage',kind:'barrier',value:15,percent:false},
 fourgons20:{file:'tv_lci_malus_20_fourgons.png',op:'damage',kind:'van',value:20,percent:false},
 obstacles40:{file:'tv_lci_malus_40pct_obstacles.png',op:'damage',kind:'debris',value:40,percent:true},
 departs5:{file:'tv_lci_malus_5_departs.png',op:'-',value:5},
 dispersion2:{file:'tv_lci_malus_div2_dispersion.png',op:'/',value:2},
 bravm3:{file:'tv_lci_malus_3_manifestants.png',op:'damage',kind:'bravm',value:3,percent:false}
};
const fields=['op','value','kind','percent','bonusFaction','condition','threshold','elseValue'];
function definition(id,d,folder='tv-final'){
 const resource=d.op==='shield'?'shields':d.op==='support'?'marseilleCharges':'count';
 const formula=d.op==='+'?'count + '+d.value:d.op==='*'?'count * '+d.value:
  d.op==='%'?'floor(count * 1.5)':d.op==='shield'?'shields + '+d.value:
  d.op==='/'?'floor(count / '+d.value+')':d.op==='support'?'marseilleCharges + 1':
  d.percent?'max(0, count - ceil(count * '+d.value+'/100)), protections absorb first':
  d.op==='damage'&&d.kind!=='bravm'?'protections absorb '+d.value+' hits, then max(0, count - uncovered)':'max(0, count - '+d.value+')';
 return Object.freeze({...d,id,folder,family:d.bonusFaction||'all',resource,conditions:null,formula,sha256:assetHashes[d.file]});
}
export const FIXED_TV_CATALOG=Object.freeze(Object.fromEntries(Object.entries(definitions).map(([id,d])=>[id,definition(id,d)])));
export const MARSEILLE_TV=definition('marseille1',{file:'tv-marseille-attack.png',op:'support',kind:'marseille',value:1},'marseille-bonus');
export const FIXED_TV_KEYS=Object.freeze(Object.keys(FIXED_TV_CATALOG));
export function tvDefinition(id){
 const d=FIXED_TV_CATALOG[id]||(id===MARSEILLE_TV.id?MARSEILLE_TV:null);
 if(!d)throw new Error('Unknown approved TV: '+id);
 return d;
}
export function makeFixedTVChoice(key){
 const d=tvDefinition(key),choice={tvKey:key};
 for(const k of fields)if(d[k]!==undefined)choice[k]=d[k];
 return Object.freeze(choice);
}
export function canonicalTVChoice(choice){
 if(!choice?.tvKey)return choice;
 const expected=makeFixedTVChoice(choice.tvKey);
 for(const k of fields)if(choice[k]!==expected[k])throw new Error('TV/maths mismatch '+choice.tvKey+' '+k);
 return expected;
}
export function fixedTVFile(choice){canonicalTVChoice(choice);return tvDefinition(choice?.tvKey).file;}
export function makeFixedPairs(){
 return [
  ['renforts10','mobilisation2'],['protections14','gilets5'],['barrage15','bravm3'],
  ['dispersion2','departs5'],['genz6','ralliement50'],['mobilisation2','protections21'],
  ['fourgons20','obstacles40'],['pompiers4','boucliers5'],['infirmieres3','renforts10'],
  ['gilets5','protections14']
 ].map(pair=>pair.map(makeFixedTVChoice));
}
