// Geometry and timing extracted for deterministic tests (no WebGL required).
export const LBD_MIN_RANGE = 6;
export const LBD_MAX_RANGE = 58;
export const LBD_SPEED = 64;
export const LBD_INTERVAL = 2.15;
export const LBD_MAX_PROJECTILES = 7;
export const LBD_MAX_DROPLETS = 44;
export const LBD_MAX_DECALS = 10;
export function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
export function isInFireRange(distance){return distance>=LBD_MIN_RANGE&&distance<=LBD_MAX_RANGE;}
export function segmentSphereHit(start,end,center,radius){
  const dx=end.x-start.x,dy=end.y-start.y,dz=end.z-start.z;
  const lengthSq=dx*dx+dy*dy+dz*dz;
  if(lengthSq<1e-10)return (start.x-center.x)**2+(start.y-center.y)**2+(start.z-center.z)**2<=radius*radius?0:null;
  const t=clamp(((center.x-start.x)*dx+(center.y-start.y)*dy+(center.z-start.z)*dz)/lengthSq,0,1);
  const x=start.x+dx*t-center.x,y=start.y+dy*t-center.y,z=start.z+dz*t-center.z;
  return x*x+y*y+z*z<=radius*radius?t:null;
}
export function impactSeverity(sequence){
  // Serious injuries are uncommon, without graphic depiction of anatomy.
  if(sequence%11===6)return 'eye';
  if(sequence%7===4)return 'arm';
  if(sequence%5===3)return 'leg';
  return 'bruise';
}
