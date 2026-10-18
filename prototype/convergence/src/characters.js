import * as THREE from 'three';

// Original geometric characters designed for CONVERGENCE. The runner's existing
// six-child animation contract is preserved: body, head, legs x2, arms x2.
export const ALLIES=['gilets','genz','lyceens','pompiers','infirmieres','agriculteurs'];
export const POLICE=['crs','bravm','bac'];

const material=(color,metal=0)=>new THREE.MeshStandardMaterial({color,roughness:metal?.34:.85,metalness:metal});
const piece=(g,geo,color,pos,rot)=> {
 const m=new THREE.Mesh(geo,material(color));
 if(pos)m.position.set(...pos);
 if(rot)m.rotation.set(...rot);
 m.castShadow=true;g.add(m);return m;
};
const box=(g,color,w,h,d,pos)=>piece(g,new THREE.BoxGeometry(w,h,d),color,pos);
const cyl=(g,color,rt,rb,h,pos,seg=8)=>piece(g,new THREE.CylinderGeometry(rt,rb,h,seg),color,pos);
const sphere=(g,color,r,pos)=>piece(g,new THREE.SphereGeometry(r,10,8),color,pos);

export function makeCitizen(index=0){
 return makeHuman(ALLIES[index%ALLIES.length],index);
}
export function makeOfficer(kind='crs',index=0){
 return makeHuman(kind,index);
}
function makeHuman(kind,index){
 const g=new THREE.Group();
 const ally=ALLIES.includes(kind);
 const hues=[0x596b82,0x7b415b,0x325e6e,0x5d544b,0x525d77,0x6c5239];
 let clothes=ally?hues[index%hues.length]:kind==='crs'?0x202a39:kind==='bravm'?0x283341:0x464348;
 let pants=ally?0x343e4c:0x202a34;
 const skin=[0xdcb99b,0xb78872,0xe0bca2,0x9f715e][index%4];
 const main=piece(g,new THREE.CapsuleGeometry(.145,.47,4,6),clothes,[0,.72,0]);
 const head=sphere(g,skin,.18,[0,1.25,0]);
 const leftLeg=piece(g,new THREE.CapsuleGeometry(.07,.25,4,6),pants,[-.105,.25,0]);
 const rightLeg=piece(g,new THREE.CapsuleGeometry(.07,.25,4,6),pants,[.105,.25,0]);
 const leftArm=piece(g,new THREE.CapsuleGeometry(.057,.24,4,6),clothes,[-.25,.76,0],[0,0,.3]);
 const rightArm=piece(g,new THREE.CapsuleGeometry(.057,.24,4,6),clothes,[.25,.76,0],[0,0,-.3]);
 // First six meshes above are deliberately in the legacy animation order.
 if(kind==='gilets'){
  box(g,0xeec52e,.40,.48,.28,[0,.81,0]);
  box(g,0xfff5ac,.42,.045,.30,[0,.75,-.005]);
  box(g,0xfff5ac,.42,.045,.30,[0,.93,-.005]);
  box(g,0x74777c,.13,.14,.17,[0,1.46,0]);
 }else if(kind==='genz'||kind==='lyceens'){
  box(g,kind==='genz'?0x884caa:0x477e9e,.34,.15,.32,[0,1.02,0]);
  box(g,0x2b313f,.21,.30,.19,[.14,.61,.18]);
  sphere(g,index%2?0x502c2b:0x4e3f37,.19,[0,1.39,0]);
 }else if(kind==='pompiers'){
  box(g,0xd99a23,.39,.51,.29,[0,.79,0]);
  box(g,0xe7e8ba,.43,.07,.32,[0,.76,.01]);
  cyl(g,0xcaa63e,.22,.20,.20,[0,1.48,0]);
  box(g,0xddddcf,.39,.05,.32,[0,1.55,0]);
 }else if(kind==='infirmieres'){
  box(g,0xebf1eb,.40,.49,.29,[0,.80,0]);
  box(g,0x62a3a2,.19,.07,.31,[0,.85,-.01]);
  box(g,0xc13d49,.05,.20,.32,[0,.84,-.025]);
  box(g,0xebf1eb,.20,.08,.20,[0,1.43,0]);
 }else if(kind==='agriculteurs'){
  box(g,0x63864c,.38,.46,.30,[0,.80,0]);
  cyl(g,0xb58c4c,.26,.25,.06,[0,1.48,0]);
  cyl(g,0xa87843,.16,.17,.17,[0,1.55,0]);
 }else{
  const policeDark=kind==='bac'?0x3d4349:0x1d2b3d;
  box(g,policeDark,.40,.47,.27,[0,.82,0]);
  box(g,0x8594a6,.30,.06,.29,[0,.95,-.01]);
  if(kind==='crs'){
   cyl(g,0x253346,.21,.20,.16,[0,1.45,0]);
   box(g,0x7992a8,.38,.11,.04,[0,1.27,-.18]);
   // Transparent polycarbonate shield at the right-hand side
   const shield=piece(g,new THREE.BoxGeometry(.43,.69,.055),0x92b1c3,[.36,.65,-.19],[0,0,-.12]);
   shield.material.transparent=true;shield.material.opacity=.82;
   box(g,0x334357,.21,.09,.06,[.40,.89,-.24]);
  }else if(kind==='bravm'){
   cyl(g,0x101b27,.23,.22,.21,[0,1.44,0]);
   box(g,0x71889a,.34,.07,.07,[0,1.31,-.19]);
  }else{
   // Civil-style jacket with distinctive small police armband
   box(g,0x436d83,.14,.14,.15,[-.22,.89,0]);
   sphere(g,index%2?0x2d2d38:0x3c3a38,.2,[0,1.39,0]);
  }
 }
 if(kind==='bravm'){
  const bike=new THREE.Group();
  g.add(bike);
  for(const x of [-.34,.37]){
   const wheel=piece(bike,new THREE.TorusGeometry(.19,.073,7,10),0x161c24,[x,.2,.05],[0,Math.PI/2,0]);
   wheel.castShadow=false;
  }
  box(bike,0x4a5d74,.70,.17,.25,[0,.35,0]);
  box(bike,0x2a3648,.31,.17,.33,[-.09,.48,0]);
  box(bike,0xa1c6cc,.11,.15,.08,[.49,.47,-.02]);
  box(bike,0x456074,.10,.16,.42,[.26,.51,0]);
 }
 g.userData.faction=kind;
 return g;
}
export function makeVan(){
 const v=new THREE.Group();
 box(v,0xf0f3f3,2.55,1.30,1.22,[0,.92,0]);
 box(v,0xb9d0df,.85,.48,1.24,[.82,1.26,-.01]);
 box(v,0x283c56,2.53,.15,1.26,[0,.79,0]);
 box(v,0x31547a,1.8,.30,1.27,[-.24,1.19,0]);
 for(const x of [-.78,.83])for(const z of [-.52,.52]){
  const wheel=piece(v,new THREE.CylinderGeometry(.27,.27,.14,10),0x172130,[x,.36,z],[Math.PI/2,0,0]);
  wheel.castShadow=false;
 }
 box(v,0x3676dc,.26,.13,.25,[.03,1.71,-.28]);
 box(v,0xdd445b,.26,.13,.25,[.03,1.71,.28]);
 v.userData.faction='fourgon';
 return v;
}
