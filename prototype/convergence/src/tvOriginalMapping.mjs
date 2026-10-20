// Preserve every actual generated TV image. A printed value is retained only
// when it matches the game's exact operation; otherwise we re-label this SAME
// TV PNG within its own screen (never fall back to a cartoon TV).
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
 for(const entry of ORIGINAL_TV_CHOICES){
  const target=entry.choice;
  if(Object.entries(target).every(([key,val])=>choice[key]===val))return entry.file;
 }
 return null;
}
export function templateOriginalTV(choice,index=0){
 const exact=matchingOriginalTV(choice);
 if(exact)return exact;
 const faction=choice?.bonusFaction;
 if(faction==='genz')return 'tv-6-genz.png';
 if(faction==='pompiers')return 'tv-4-pompiers.png';
 if(faction==='infirmieres')return 'tv-3-infirmieres.png';
 if(faction==='gilets')return 'tv-5-gilets.png';
 if(choice?.op==='shield')return index%2?'tv-5-boucliers.png':'tv-21-protections.png';
 if(choice?.kind==='bravm')return 'tv-manifestation-paris.png';
 if(choice?.kind==='barrier')return 'tv-14-barrage.png';
 if(choice?.kind==='debris')return 'tv-40-obstacles.png';
 if(choice?.kind==='van')return 'tv-20-fourgon.png';
 if(choice?.op==='*')return 'tv-x2-mobilisation.png';
 if(choice?.op==='%')return 'tv-50-ralliement.png';
 if(choice?.op==='conditional')return 'tv-news-france.png';
 if(choice?.op==='-')return 'tv-22-protections.png';
 if(choice?.op==='/')return 'tv-22-protections.png';
 if(choice?.op==='+')return index%3===0?'tv-news-france.png':'tv-10-renforts.png';
 return 'tv-10-renforts.png';
}
