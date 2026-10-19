import * as THREE from 'three';
import { gateLabel } from './tactics.mjs';
import { makeVan, makeOfficer } from './characters.js';
import { upgradeBossVan } from './bossAssets.js';
import { upgradeBravMotorcycle } from './motorcycleAssets.js';
import { upgradePoliceOfficer } from './policeAssets.js';

const colors={blue:[0x118bea,0x68efff],red:[0xe7334b,0xff9873],gold:[0xffac19,0xfff097],purple:[0x7944e5,0xefa8ff]};
export function createArcadeGate(data,x,z,scene,tracked) {
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
 const c=document.createElement('canvas');c.width=512;c.height=256;const ctx=c.getContext('2d');
 ctx.fillStyle='rgba(12,24,42,.92)';ctx.beginPath();ctx.roundRect(8,8,496,240,24);ctx.fill();
 ctx.strokeStyle='#'+new THREE.Color(glow).getHexString();ctx.lineWidth=7;ctx.stroke();
 ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';
 ctx.font='900 110px system-ui';ctx.lineWidth=9;ctx.strokeStyle='#08101e';ctx.strokeText(label.title,256,81);
 ctx.fillStyle='#ffffff';ctx.fillText(label.title,256,81);
 ctx.font='900 30px system-ui';ctx.fillStyle='#'+new THREE.Color(glow).getHexString();ctx.fillText(label.caption,256,167);
 if(label.detail){ctx.font='700 22px system-ui';ctx.fillStyle='#f5f7ff';ctx.fillText(label.detail,256,211);}
 const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
 const badge=new THREE.Mesh(new THREE.PlaneGeometry(3.95,1.97),new THREE.MeshBasicMaterial({map,transparent:true,depthWrite:false}));
 badge.position.set(0,hazard?3.35:2.92,.28);root.add(badge);
 const pad=new THREE.Mesh(new THREE.PlaneGeometry(4.1,2),new THREE.MeshBasicMaterial({color:base,transparent:true,opacity:.16,depthWrite:false}));
 pad.rotation.x=-Math.PI/2;pad.position.set(0,.07,.15);root.add(pad);
 if(hazard){
  if(data.kind==='van'){
   const vehicle=makeVan();vehicle.scale.setScalar(.78);vehicle.position.y=.05;root.add(vehicle);upgradeBossVan(root,vehicle);
  }else if(data.kind==='bravm'){
   const rider=makeOfficer('bravm',0);rider.rotation.y=Math.PI/2;rider.position.y=.04;root.add(rider);
   upgradePoliceOfficer(rider,'bravm');upgradeBravMotorcycle(rider);
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
