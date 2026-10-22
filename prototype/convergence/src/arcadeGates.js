import * as THREE from 'three';
import { makeTVGateArtwork } from './tvGateArt.js';
import { makeOfficer } from './characters.js';
import { upgradeBravMotorcycle } from './motorcycleAssets.js';
import { upgradePoliceOfficer } from './policeAssets.js';
import { attachReferenceOfficer } from './policeReferenceSprites.js';

// One self-standing flat screen per lane. No portal frame or floating price card.
export function createArcadeGate(data,x,z,scene,tracked,ordinal=0) {
 const root=new THREE.Group();
 root.name='STANDALONE_NEWS_TV_GATE';
 root.position.set(x,0,-z);
 root.userData.dynamic=true;
 root.userData.lbdOccluder=data.op==='damage'&&['van','barrier','debris'].includes(data.kind);
 const tv=makeTVGateArtwork(data,root,ordinal);
 // Preserve the two BRAV-M actors needed for the validated impact animation.
 if(data.op==='damage'&&data.kind==='bravm'){
  root.userData.bravmRiders=[];
  for(let i=0;i<2;i++){
   const rider=makeOfficer('bravm',i);
   rider.position.set(i===0?-.83:.83,.04,-3.7-i*.65);
   rider.rotation.y=0;
   root.add(rider);
   upgradePoliceOfficer(rider,'bravm');upgradeBravMotorcycle(rider);
   attachReferenceOfficer(rider,'bravm',i);
   // Bikes are collision actors, not decorative objects to draw THROUGH TV.
   // BravmGateCharge.start() detaches them and makes them visible at impact.
   rider.visible=false;
   root.userData.bravmRiders.push(rider);
  }
 }
 scene.add(root);tracked.push(root);
 const pane=tv.getObjectByName('TV_LIVE_SCREEN');
 pane.userData.root=root;
 return pane;
}
export function animateArcadeGates(gates,progress,time) {
 for(const g of gates){
  const distance=g.z-progress;
  for(const side of ['leftMesh','rightMesh']){
   const root=g[side]?.userData.root;
   if(root)root.visible=(!g.passed||g.tvState==='missed')&&distance<62&&distance>-8;
  }
 }
}
