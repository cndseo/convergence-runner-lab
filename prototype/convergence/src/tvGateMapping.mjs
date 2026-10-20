// Fifteen approved TV illustrations in one compact atlas; no (x) placeholders.
export const TV_ART = Object.freeze([
 'obstacles-40','infirmieres-3','fourgon-20','barrage-14','mobilisation-2',
 'manifestants-24','protections-21','renforts-10','genz-6','protections-moins-22',
 'gilets-5','ralliement-50','boucliers-5','pompiers-4','manifestants-moins-3'
]);
export function tvArtIndex(c, gateIndex=0) {
 if(c.bonusFaction==='genz')return 8;
 if(c.bonusFaction==='pompiers')return 13;
 if(c.bonusFaction==='infirmieres')return 1;
 if(c.bonusFaction==='gilets')return gateIndex%3===0?10:7;
 if(c.op==='shield')return gateIndex%3===0?12:6;
 if(c.kind==='debris')return 0;
 if(c.kind==='barrier')return gateIndex%2?9:3;
 if(c.kind==='van')return 2;
 if(c.kind==='bravm')return 14;
 if(c.op==='*')return 4;
 if(c.op==='%')return 11;
 if(c.op==='conditional')return 5;
 if(c.op==='-')return 14;
 if(c.op==='/')return 14;
 if(c.op==='+')return 7;
 return 7;
}
export function tvDisplay(c) {
 if(c.op==='damage'&&c.kind==='bravm')return {number:'−3',topic:'BRAV-M',type:'malus'};
 if(c.op==='damage')return {number:'−'+c.value+(c.percent?'%':''),topic:({debris:'OBSTACLES',barrier:'BARRAGE',van:'FOURGON'})[c.kind]||'MALUS',type:'malus'};
 if(c.op==='shield')return {number:'+'+c.value,topic:'PROTECTIONS',type:'bonus'};
 if(c.op==='conditional')return {number:'+'+c.value,topic:'SI '+(c.condition==='shield'?'PROT. ≥ ':'FOULE '+(c.condition==='atMost'?'≤ ':'≥ '))+c.threshold,detail:'SINON '+(c.elseValue>=0?'+':'')+(c.elseValue||0),type:'conditional'};
 return {number:({'*':'×','/':'÷','-':'−','+':'+','%':'+'})[c.op]+c.value+(c.op==='%'?'%':''),topic:c.bonusFaction?({
 gilets:'GILETS JAUNES',genz:'GEN Z',pompiers:'POMPIERS',infirmieres:'INFIRMIÈRES'})[c.bonusFaction]:
 ({'*':'MOBILISATION','/':'DISPERSION','-':'DÉPARTS','+':'RENFORTS','%':'RALLIEMENT'})[c.op]||'RENFORTS',type:['-','/'].includes(c.op)?'malus':'bonus'};
}
