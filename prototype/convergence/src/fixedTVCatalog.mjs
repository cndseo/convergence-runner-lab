// One-to-one source of truth: a television PNG and its mathematical action.
// Never paint extra numbers over these approved images.
export const FIXED_TV_CATALOG=Object.freeze({
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
});
export const FIXED_TV_KEYS=Object.freeze(Object.keys(FIXED_TV_CATALOG));
export function makeFixedTVChoice(key){
 const definition=FIXED_TV_CATALOG[key];
 if(!definition)throw new Error('Unknown fixed TV choice: '+key);
 const {file,...choice}=definition;
 return {...choice,tvKey:key};
}
export function fixedTVFile(choice){
 const definition=FIXED_TV_CATALOG[choice?.tvKey];
 if(!definition)throw new Error('Choice does not have a validated TV asset: '+choice?.tvKey);
 for(const [key,value] of Object.entries(definition)){
  if(key!=='file'&&choice[key]!==value)throw new Error('TV/maths mismatch '+choice.tvKey+' '+key);
 }
 return definition.file;
}
export function makeFixedPairs(){
 return [
  ['renforts10','mobilisation2'],
  ['protections14','gilets5'],
  ['barrage15','bravm3'],
  ['dispersion2','departs5'],
  ['genz6','ralliement50'],
  ['mobilisation2','protections21'],
  ['fourgons20','obstacles40'],
  ['pompiers4','boucliers5'],
  ['infirmieres3','renforts10'],
  ['gilets5','protections14']
 ].map(pair=>pair.map(makeFixedTVChoice));
}
