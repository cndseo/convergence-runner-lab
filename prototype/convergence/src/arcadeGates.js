import * as THREE from 'three';
import { gateLabel } from './tactics.mjs';
import { bonusFaction } from './bonusGates.mjs';
import { makeTVGateArtwork } from './tvGateArt.js';
import { makeVan, makeOfficer } from './characters.js';
import { upgradeBossVan } from './bossAssets.js';
import { upgradeBravMotorcycle } from './motorcycleAssets.js';
import { upgradePoliceOfficer } from './policeAssets.js';
import { attachReferenceOfficer } from './policeReferenceSprites.js';

const colors={blue:[0x118bea,0x68efff],red:[0xe7334b,0xff9873],gold:[0xffac19,0xfff097],purple:[0x7944e5,0xefa8ff]};
export function createArcadeGate(data,x,z,scene,tracked,ordinal=0) {
 const faction=bonusFaction(data); // Assigned faction remains the mathematical reward identity.
 const label=gateLabel(data),[base,glow]=colors[label.tone];
 const root=new THREE.Group();root.position.set(x,0,-z);root.userData.dynamic=true;
 const shell=new THREE.MeshStandardMaterial({color:base,roughness:.27,metalness:.25});
 const trim=new THREE.MeshStandardMaterial({color:glow,emissive:glow,emissiveIntensity:.7,roughness:.3});
 const dark=new THREE.MeshStandardMaterial({color:0x142236,roughness:.4});
 const box=(w,h,d,px,py,pz,mat)=>{
  const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(px,py,pz);root.add(m);return m;
 };
 const hazard=data.op==='damage';
 // Physical hazard volume for ranged projectiles. Decorative portal signs are not blockers.
 root.userData.lbdOccluder=hazard&&['van','barrier','debris'].includes(data.kind);
 const height=hazard?3.1:3.85;
 for(const side of [-1,1]){
  box(.42,height,.45,side*2.16,height/2,0,shell);
  box(.64,.30,.68,side*2.16,.15,0,dark);
  box(.65,.28,.65,side*2.16,height-.06,0,shell);
  box(.09,height-.8,.06,side*2.16,height/2,.26,trim);
  for(const y of [.46,height-.42])box(.53,.10,.54,side*2.16,y,0,trim);
 }
 box(4.45,.30,.44,0,height,0,shell);
 box(3.8,.06,.04,0,height-.04,.26,trim);
 const pane=new THREE.Mesh(new THREE.PlaneGeometry(4.0,height-.45),new THREE.MeshStandardMaterial({
  color:base,emissive:base,emissiveIntensity:.12,transparent:true,opacity:hazard?.045:.12,depthWrite:false,side:THREE.DoubleSide
 }));
 pane.position.set(0,height/2,0);root.add(pane);
 // Replace former number boards with thin TV screens.
 // Solver data remains authoritative; the graphic is only presentation.
 const badge=makeTVGateArtwork(data,root,ordinal);
 const pad=new THREE.Mesh(new THREE.PlaneGeometry(4.1,2),new THREE.MeshBasicMaterial({color:base,transparent:true,opacity:.16,depthWrite:false}));
 pad.rotation.x=-Math.PI/2;pad.position.set(0,.07,.15);root.add(pad);
 if(hazard){
  if(data.kind==='van'){
   const vehicle=makeVan();vehicle.scale.setScalar(.78);vehicle.position.y=.05;root.add(vehicle);upgradeBossVan(root,vehicle);
  }else if(data.kind==='bravm'){
   // Two forward-facing motorcycles, not the former sideways Kenney bike.
   root.userData.bravmRiders=[];
   for(let i=0;i<2;i++){
    const rider=makeOfficer('bravm',i);
    rider.position.set(i===0?-.83:.83,.04,-3.7-i*.65);
    rider.rotation.y=0;
    root.add(rider);
    upgradePoliceOfficer(rider,'bravm');upgradeBravMotorcycle(rider);
    attachReferenceOfficer(rider,'bravm',i);
    root.userData.bravmRiders.push(rider);
   }
  }else{
   box(3.45,.85,.48,0,.68,0,new THREE.MeshStandardMaterial({color:0x586575,roughness:.8}));
   const yellow=new THREE.MeshStandardMaterial({color:0xffd260});
   for(let i=0;i<7;i++)box(.28,.20,.52,-1.4+i*.46,1.02,0,i%2?dark:yellow);
   for(const side of [-1,1])box(.35,.24,1.1,side*1.2,.12,0,dark);
   if(data.kind==='debris'){
    for(let i=0;i<3;i++){
     const cone=new THREE.Mesh(new THREE.ConeGeometry(.23,.65,12),shell);
     cone.position.set((i-1)*.9,.33,.8);root.add(cone);
    }
   }
  }
 }
 scene.add(root);tracked.push(root);
 pane.userData.root=root;
 return pane;
}
export function animateArcadeGates(gates,progress,time) {
 for(const g of gates){
  const distance=g.z-progress;
  for(const side of ['leftMesh','rightMesh']){
   const pane=g[side],root=pane?.userData.root;
   if(!root)continue;
   // A validated portal must disappear after crossing: otherwise its giant
   // billboard obstructs the camera and the incoming long-range projectiles.
   root.visible=!g.passed&&distance<62&&distance>-8;
   if(root.visible)pane.material.emissiveIntensity=.14+Math.sin(time*2.5+g.z)*.05;
  }
 }
}
