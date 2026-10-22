// Visual identity of bonus choices. The solver still sees the original operations.
export const BONUS_FACTIONS=['gilets','genz','pompiers','infirmieres'];
export function bonusFaction(choice,choiceIndex=0){
 if(choice.op!=='+'||choice.value<=0)return null;
 return choice.bonusFaction||BONUS_FACTIONS[choiceIndex%BONUS_FACTIONS.length];
}
export function bonusCopy(choice,faction){
 if(!faction)return null;
 const labels={gilets:'GILETS JAUNES',genz:'GEN Z',pompiers:'POMPIERS',infirmieres:'INFIRMIÈRES'};
 const icons={gilets:'vest',genz:'tiktok',pompiers:'firefighter',infirmieres:'medical'};
 return {number:'+'+choice.value,label:labels[faction],icon:icons[faction],faction};
}
