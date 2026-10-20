// Exact generated PNG references. Never associate a printed value with a
// different mathematical operation: these files contain baked-in lettering.
export const ORIGINAL_TV_CHOICES=Object.freeze([
 {file:'tv-50-ralliement.png',choice:{op:'%',value:50}},
 {file:'tv-14-barrage.png',choice:{op:'damage',kind:'barrier',value:14,percent:false}},
 {file:'tv-21-protections.png',choice:{op:'shield',value:21}},
 {file:'tv-40-obstacles.png',choice:{op:'damage',kind:'debris',value:40,percent:true}},
 {file:'tv-x2-mobilisation.png',choice:{op:'*',value:2}},
 {file:'tv-10-renforts.png',choice:{op:'+',value:10}},
 {file:'tv-20-fourgon.png',choice:{op:'damage',kind:'van',value:20,percent:false}},
 {file:'tv-5-gilets.png',choice:{op:'+',value:5,bonusFaction:'gilets'}},
 {file:'tv-22-protections.png',choice:{op:'shieldPenalty',value:22}},
 {file:'tv-5-boucliers.png',choice:{op:'shield',value:5}},
 {file:'tv-news-france.png',choice:{op:'+',value:24}},
 {file:'tv-manifestation-paris.png',choice:{op:'damage',kind:'bravm',value:3,percent:false}},
 {file:'tv-6-genz.png',choice:{op:'+',value:6,bonusFaction:'genz'}},
 {file:'tv-4-pompiers.png',choice:{op:'+',value:4,bonusFaction:'pompiers'}},
 {file:'tv-3-infirmieres.png',choice:{op:'+',value:3,bonusFaction:'infirmieres'}}
]);
export function matchingOriginalTV(choice){
 if(!choice||choice.op==='conditional')return null;
 // Compare only properties that matter to math/label; no loosely similar TV.
 for(const entry of ORIGINAL_TV_CHOICES){
   const target=entry.choice;
   if(Object.entries(target).every(([key,val])=>choice[key]===val)&&
      // Prevent branded character bonus when the gate has no matching faction.
      (!('bonusFaction' in target)?true:choice.bonusFaction===target.bonusFaction)){ 
       return entry.file;
   }
 }
 return null;
}
