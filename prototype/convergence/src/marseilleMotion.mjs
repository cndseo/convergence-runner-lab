// Presentation-only trajectories. No combat, inventory, or campaign arithmetic here.
export const RUSH_GROUPS = 15;
export const RUSH_SECONDS = 9.0;
export const clamp01 = v => Math.max(0, Math.min(1, v));

export function rushRoute(index, targetZ) {
  const lane=index%3, row=Math.floor(index/3), side=lane===0?-1:1;
  const delay=row*.19+(lane===2?.04:lane*.06);
  const duration=7.15+row*.13+(lane===2?.1:0);
  const spread=(row-2)*.47;
  // Far groups run towards the camera; side groups flow away through the breach.
  const points=lane===2
    ? [[spread,targetZ-25-row*1.1],[spread,targetZ-8],[spread,targetZ-.3],
       [(row%2?-1:1)*5.4,targetZ+4.8],[(row%2?-1:1)*19,targetZ+11]]
    : [[side*(5.8+row*.28),targetZ-.4+row*.25],
       [side*2.6,targetZ+.2+row*.18],[side*(.65+row*.25),targetZ-.3-row*.3],
       [side*(.7+row*.22),targetZ-9], [side*(1+row*.25),targetZ-37]];
  return {index,lane,row,delay,duration,points};
}

// Centripetal-looking, continuous Hermite flow, with no stop at the CRS line.
export function sampleRush(route, elapsed) {
  const t=clamp01((elapsed-route.delay)/route.duration);
  const knots=[0,.20,.43,.73,1];
  let segment=0;
  while(segment<3 && t>knots[segment+1])segment++;
  const span=knots[segment+1]-knots[segment];
  const u=(t-knots[segment])/span;
  const p=route.points, a=p[segment],b=p[segment+1];
  const prev=p[Math.max(0,segment-1)],next=p[Math.min(4,segment+2)];
  const m0=a.map((v,k)=>(b[k]-prev[k])*(segment===0?1:.48));
  const m1=b.map((v,k)=>(next[k]-a[k])*(segment===3?1:.48));
  const value=k=>(2*u**3-3*u*u+1)*a[k]+(u**3-2*u*u+u)*m0[k]
    +(-2*u**3+3*u*u)*b[k]+(u**3-u*u)*m1[k];
  const velocity=k=>((6*u*u-6*u)*a[k]+(3*u*u-4*u+1)*m0[k]
    +(-6*u*u+6*u)*b[k]+(3*u*u-2*u)*m1[k])/(span*route.duration);
  const dx=velocity(0),dz=velocity(1);
  const diagonal=Math.abs(dx)>Math.abs(dz)*.22;
  const view=diagonal?(dz>=0?'quarter-front':'quarter-back'):(dz>=0?'front':'back');
  const mirror=diagonal && (dz>=0 ? dx<0 : dx>0);
  return {x:value(0),z:value(1),dx,dz,speed:Math.hypot(dx,dz),view,mirror,t,
    opacity:clamp01((elapsed-route.delay)/.22)*clamp01((1-t)/.08),
    done:elapsed>=route.delay+route.duration};
}

export function policeRetreat(index, elapsed, origin) {
  const delay=2.28+(index%8)*.105+Math.floor(index/8)*.21;
  const time=Math.max(0,elapsed-delay);
  const turn=clamp01(time/.65);
  const side=(index%2?-1:1);
  const stride=Math.max(0,time-.38);
  return {started:time>0, x:origin.x+side*(turn*.16+stride**1.20*1.7),
    y:origin.y+Math.abs(Math.sin(stride*15+index))*.055*turn,
    z:origin.z-Math.min(time,.55)*.85-stride*4.9,
    yaw:origin.yaw+(side*Math.PI*.82)*turn, phase:stride*15+index};
}
