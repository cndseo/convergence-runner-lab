import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';

// Police visual upgrades. All crowd collision and combat data stays untouched.
const loader=new GLTFLoader();
let shared;
let budget=0;
const activeMixers=[];
const limit=window.innerWidth<600?24:40;
const uniforms={
 crs:{coat:0x233349,vest:0x1a283a,helmet:0x20324a},
 bac:{coat:0x343940,vest:0x161d26,helmet:0x2a2d33},
 bravm:{coat:0x222d3d,vest:0x131e2c,helmet:0x141c27}
};
const material=(color,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness:metalness?.4:.77,metalness});
function box(g,color,size,pos){
 const m=new THREE.Mesh(new THREE.BoxGeometry(...size),material(color));
 m.position.set(...pos);m.castShadow=true;g.add(m);return m;
}
const patches=new Map();
function addPatch(parent,label,position,width=.36,height=.13){
 let patch=patches.get(label);
 if(!patch){
  const canvas=document.createElement('canvas');
  canvas.width=256;canvas.height=96;
  const context=canvas.getContext('2d');
  context.fillStyle='#152236';context.fillRect(0,0,256,96);
  context.strokeStyle='#9cafc5';context.lineWidth=5;context.strokeRect(3,3,250,90);
  context.textAlign='center';context.textBaseline='middle';
  context.font='900 54px Arial,sans-serif';
  context.fillStyle='#f9fbff';context.fillText(label,128,49);
  patch=new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(canvas),transparent:false,side:THREE.DoubleSide});
  patches.set(label,patch);
 }
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,height),patch);
 mesh.position.set(...position);parent.add(mesh);
}
function addGear(rig,kind){
 const scheme=uniforms[kind]||uniforms.crs;
 const gear=new THREE.Group();
 const vest=box(gear,scheme.vest,[.42,.48,.29],[0,1.10,0]);
 box(gear,0x121a26,[.37,.055,.30],[0,1.26,0]);
 for(const side of [-1,1]){
  box(gear,0x101a25,[.075,.37,.31],[side*.21,1.08,0]);
  box(gear,0x667588,[.07,.055,.32],[side*.19,1.19,0]);
 }
 const helmet=new THREE.Mesh(new THREE.SphereGeometry(.205,18,12,0,Math.PI*2,0,Math.PI*.63),material(scheme.helmet,.18));
 helmet.position.set(0,1.57,0);helmet.castShadow=true;gear.add(helmet);
 box(gear,0x17232f,[.38,.055,.23],[0,1.46,.09]);
 const visor=box(gear,0x809caa,[.35,.16,.025],[0,1.44,.19]);
 visor.material=visor.material.clone();
 visor.material.transparent=true;visor.material.opacity=.63;
 if(kind==='crs'){
  const shield=box(gear,0x738c9d,[.53,.79,.045],[.27,.80,.33]);
  gear.userData.combatShield=shield;
  shield.material=shield.material.clone();
  shield.material.transparent=true;shield.material.opacity=.72;shield.material.metalness=.08;
  box(gear,0x142437,[.48,.15,.052],[.27,.85,.36]);
  box(gear,0xb6c4c9,[.49,.04,.055],[.27,1.17,.35]);
  box(gear,0xb6c4c9,[.49,.04,.055],[.27,.45,.35]);
  addPatch(gear,'CRS',[.27,.88,.392],.37,.14);
 }else if(kind==='bac'){
  box(gear,0x151b22,[.38,.12,.025],[0,1.15,.16]);
  box(gear,0x374b61,[.18,.19,.10],[-.26,.98,-.03]);
  addPatch(gear,'BAC',[0,1.15,.179],.31,.13);
 }else{
  box(gear,0x243446,[.32,.12,.23],[0,.94,-.06]);
  addPatch(gear,'BRAV-M',[0,1.16,.179],.38,.11);
 }
 rig.add(gear);
 return gear;
}
function source(){
 if(!shared)shared=new Promise((resolve,reject)=>loader.load(
  import.meta.env.BASE_URL+'assets/quaternius/animated-human.glb',resolve,undefined,reject
 )).catch(e=>{shared=null;throw e;});
 return shared;
}
export function upgradePoliceOfficer(officer,kind='crs'){
 if(budget>=limit)return;
 budget++;
 source().then(gltf=>{
  if(!officer.parent)return;
  const rig=cloneSkeleton(gltf.scene);
  const mixer=new THREE.AnimationMixer(rig);
  const idle=gltf.animations.find(a=>a.name==='Idle');
  if(idle){mixer.clipAction(idle).play();mixer.update(.001);}
  rig.updateMatrixWorld(true);
  rig.traverse(m=>{if(m.isSkinnedMesh){m.computeBoundingBox();m.frustumCulled=false;}});
  const bounds=new THREE.Box3().setFromObject(rig);
  const height=bounds.getSize(new THREE.Vector3()).y;
  if(height<=0||!Number.isFinite(height))return;
  rig.scale.setScalar(1.64/height);
  rig.rotation.y=Math.PI/2;
  rig.updateMatrixWorld(true);
  const fitted=new THREE.Box3().setFromObject(rig);
  const center=fitted.getCenter(new THREE.Vector3());
  rig.position.set(-center.x,-fitted.min.y,-center.z);
  const uniform=uniforms[kind]||uniforms.crs;
  rig.traverse(m=>{
   if(!m.isSkinnedMesh)return;
   const mat=m.material.clone();
   mat.map=null;
   mat.color.setHex(uniform.coat);
   mat.roughness=.83;
   mat.needsUpdate=true;
   m.material=mat;
  });
  // Costume pieces must be world-scaled, not multiplied by the source GLB scale.
  const holder=new THREE.Group();
  holder.add(rig);
  const gear=addGear(holder,kind);
  holder.userData.combatShield=gear.userData.combatShield||null;
  // Keep the independent Kenney motorcycle if its asynchronous load completed.
  for(const part of officer.children){
   if(!part.userData?.motorcycleVisual)part.visible=false;
  }
  officer.add(holder);
  activeMixers.push({mixer,officer});
  officer.userData.policeModel=holder;
 }).catch(e=>console.warn('Police model fallback',e?.message));
}
export function resetPoliceVisualBudget(){budget=0;activeMixers.length=0;}
export function preloadPoliceHumanoid(){return source();}
export function updatePoliceAnimations(delta){
 for(const item of activeMixers){
  let object=item.officer,visible=true;
  while(object){if(!object.visible){visible=false;break;}object=object.parent;}
  if(visible)item.mixer.update(delta);
 }
}
