// Presentation only: these numbers never enter combat, inventories or daily scores.
export const DENSITY_LIMITS = Object.freeze({crowd:312, crs:192, bac:128, bravm:64, spectators:192});
const whole = (n,max) => Math.max(0,Math.min(max,Math.floor(Number(n)||0)));
export function crowdDensity(count,shields=0) {
  count=whole(count,72);shields=whole(shields,48);
  const marchers=count ? Math.round(6*count/(1+count/72)) : 0;
  const protectors=count ? shields*2 : 0;
  const total=marchers+protectors;
  const columns=Math.min(13,Math.max(5,Math.ceil(Math.sqrt(Math.max(1,total)))|1));
  const rows=Math.ceil(Math.max(0,total-1)/columns);
  return {count,marchers,protectors,total,columns,depth:rows ? .45+(rows-1)*.49 : 0};
}
export function crowdSlot(index,layout,out={}) {
  if(index===0){out.x=0;out.z=-.65;return out;}
  const rank=index-1,row=Math.floor(rank/layout.columns),col=rank%layout.columns;
  out.x=(col-(layout.columns-1)/2)*.53+(row%2?.12:-.12)+Math.sin(index*12.7)*.035;
  out.z=.45+row*.49+Math.sin(index*3.1)*.055;
  return out;
}
export function streetRoster(length,district=1) {
  const groups=[];
  // Both verges are occupied from the first screen; the playable corridor stays clear.
  for(let z=4,station=0;z<length+6;z+=12,station++)for(const side of [-1,1]){
    const kind=['crs','bac','bravm'][(station+(side===1?1:0)+district-1)%3];
    const count=kind==='crs'?10+(district%3):kind==='bac'?5+(station%2):3;
    groups.push({kind,count,z:z+(side===1?3:0),side,x:side*(kind==='bravm'?6.5:5.65),phase:station*1.37+district});
    if(station%2===0)groups.push({kind:'spectators',count:14+(district%4),z:z+6,side,x:side*8.7,phase:station});
  }
  return groups;
}
export function streetDetail(distance) {
  return distance< -24||distance>86 ? 0 : distance>66 ? 3 : distance>44 ? 2 : 1;
}
