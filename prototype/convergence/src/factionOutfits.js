import * as THREE from 'three';

// Lightweight costume pieces follow actual humanoid bones, not static proxies.
export const FACTIONS=['gilets','genz','lyceens','pompiers','infirmieres','agriculteurs'];
const palettes=new Map();
const sharedMaterials=new Map();
const loader=new THREE.TextureLoader();
const colorMaterial=(hex,metalness=0)=>new THREE.MeshStandardMaterial({
 color:hex,roughness:metalness?.55:.87,metalness,side:THREE.DoubleSide
});
const cloth=colorMaterial(0xe5ff12);
const silver=colorMaterial(0xe8ecdc,.28);
const dark=colorMaterial(0x273340);
const red=colorMaterial(0xd72c32);
const white=colorMaterial(0xf1f0e8);
const tan=colorMaterial(0x9e764b);
const violet=colorMaterial(0x6b4699);
function piece(parent,geometry,material,position=[0,0,0],rotation){
 const mesh=new THREE.Mesh(geometry,material);
 mesh.position.set(...position);
 if(rotation)mesh.rotation.set(...rotation);
 mesh.castShadow=true;
 parent.add(mesh);
 return mesh;
}
function cube(parent,color,size,position,rotation){
 return piece(parent,new THREE.BoxGeometry(...size),color,position,rotation);
}
function band(parent,color,radius,y,thickness=.022){
 return piece(parent,new THREE.TorusGeometry(radius,thickness,5,18),color,[0,y,0],[Math.PI/2,0,0]);
}
function boneAnchor(model,name,y,z=0,x=0){
 const bone=model.getObjectByName(name);
 const anchor=new THREE.Group();
 model.add(anchor);
 model.updateMatrixWorld(true);
 anchor.position.copy(model.worldToLocal(new THREE.Vector3(x,y,z)));
 // Costume dimensions are metres; the source rig has a non-unit scale.
 anchor.scale.setScalar(1 / model.getWorldScale(new THREE.Vector3()).x);
 anchor.quaternion.copy(model.getWorldQuaternion(new THREE.Quaternion()).invert());
 model.updateMatrixWorld(true);
 if(bone?.isBone)bone.attach(anchor);
 return anchor;
}
export function applyFactionPalette(model,faction){
 let atlas=palettes.get(faction);
 if(!atlas){
  atlas=loader.load(import.meta.env.BASE_URL+'assets/quaternius/palette-'+faction+'.png');
  atlas.colorSpace=THREE.SRGBColorSpace;
  atlas.flipY=false;
  palettes.set(faction,atlas);
 }
 model.traverse(node=>{
  if(!node.isSkinnedMesh)return;
  let material=sharedMaterials.get(faction);
  if(!material){material=node.material.clone();material.map=atlas;material.needsUpdate=true;sharedMaterials.set(faction,material);}
  node.material=material;
  node.userData.sharedHumanoidAsset=true;
 });
}
function backpack(spine,color=dark){
 const bag=piece(spine,new THREE.CapsuleGeometry(.16,.20,6,12),color,[0,-.015,.24]);
 bag.scale.set(1,1,.60);
 cube(spine,color,[.26,.16,.05],[0,-.09,.35]);
 for(const x of [-.105,.105])cube(spine,silver,[.024,.060,.025],[x,.08,.34]);
 cube(spine,color,[.35,.10,.18],[0,-.22,.22]);
 for(const x of [-.16,.16])
  cube(spine,color,[.055,.4,.055],[x,0,-.16]);
}
function helmet(model,shade,withBand=false){
 const head=boneAnchor(model,'Head',1.57,.005);
 const shell=piece(head,new THREE.SphereGeometry(.208,18,12,0,Math.PI*2,0,Math.PI*.60),shade,[0,.045,0]);
 shell.material.side=THREE.DoubleSide;
 piece(head,new THREE.CylinderGeometry(.204,.213,.035,18),shade,[0,-.018,0]);
 if(withBand)cube(head,silver,[.34,.05,.035],[0,.08,-.186]);
}
function hat(model){
 const head=boneAnchor(model,'Head',1.61,0);
 piece(head,new THREE.CylinderGeometry(.31,.31,.042,20),tan);
 piece(head,new THREE.CylinderGeometry(.17,.19,.19,16),tan,[0,.1,0]);
 band(head,dark,.18,.01,.013);
}
function placard(model){
 const hand=boneAnchor(model,'RightHand',1.02,-.20);
 const pole=piece(hand,new THREE.CylinderGeometry(.014,.014,.86,8),tan,[.06,.40,0]);
 pole.rotation.z=-.12;
 cube(hand,tan,[.42,.29,.035],[.12,.85,0]);
}
function frenchFlag(model){
 const hand=boneAnchor(model,'LeftHand',1.12,0,-.31);
 piece(hand,new THREE.CylinderGeometry(.012,.012,1.09,7),tan,[0,.48,0]);
 const colors=[colorMaterial(0x1744ae),white,red];
 for(let c=0;c<3;c++){
  const geometry=new THREE.PlaneGeometry(.15,.36,3,3);
  const points=geometry.attributes.position;
  for(let i=0;i<points.count;i++)
   points.setZ(i,Math.sin(points.getX(i)*15+c*.85)*.022);
  geometry.computeVertexNormals();
  piece(hand,geometry,colors[c],[-.40+c*.15,.88,0]);
 }
}

function walkingClothes(model,faction){
 const color={gilets:dark,genz:violet,lyceens:colorMaterial(0x263e5c),pompiers:red,infirmieres:white,agriculteurs:colorMaterial(0x465841)}[faction];
 for(const side of ['Left','Right']){
  for(const [a,b] of [[side+'Arm',side+'ForeArm'],[side+'ForeArm',side+'Hand']]){
   if(faction==='infirmieres'&&a.includes('ForeArm'))continue;
   const start=model.getObjectByName(a)?.getWorldPosition(new THREE.Vector3());
   const end=model.getObjectByName(b)?.getWorldPosition(new THREE.Vector3());
   if(!start||!end)continue;
   const midpoint=start.clone().add(end).multiplyScalar(.5),direction=end.clone().sub(start);
   const anchor=boneAnchor(model,a,midpoint.y,midpoint.z,midpoint.x);
   const sleeve=piece(anchor,new THREE.CapsuleGeometry(.074,Math.max(.02,direction.length()-.11),4,10),color);
   sleeve.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());
  }
  const foot=model.getObjectByName(side+'Foot')?.getWorldPosition(new THREE.Vector3());
  if(foot){
   const anchor=boneAnchor(model,side+'Foot',foot.y,foot.z,foot.x);
   const shoe=piece(anchor,new THREE.SphereGeometry(.115,10,8),dark,[0,-.018,-.065]);
   shoe.scale.set(.88,.60,1.48);shoe.userData.walkingFootwear=true;
   const sole=piece(anchor,new THREE.SphereGeometry(.114,10,8),white,[0,-.071,-.065]);
   sole.scale.set(.90,.18,1.48);sole.userData.walkingFootwear=true;
  }
 }
}

export function dressFaction(model,faction){
 applyFactionPalette(model,faction);
 walkingClothes(model,faction);
 const hair=boneAnchor(model,'Head',1.62,0);
 if(faction!=='pompiers'&&faction!=='infirmieres'&&faction!=='agriculteurs'){
  piece(hair,new THREE.SphereGeometry(.19,14,10,0,Math.PI*2,0,Math.PI*.52),colorMaterial(faction==='genz'?0x38252c:0x312824),[0,.02,0]);
 }
 const torso=boneAnchor(model,'Spine2',1.05,0);
 if(faction==='gilets'){
  piece(torso,new THREE.CylinderGeometry(.21,.245,.43,14),cloth);
  for(const y of [-.12,.10])band(torso,silver,.236,y,.026);
  // Hood, stitched backpack, broad reflective bands: approved P02 direction.
  const hood=boneAnchor(model,'Spine2',1.34,.03);
  piece(hood,new THREE.TorusGeometry(.17,.065,7,16),dark,[0,0,0],[Math.PI/2,0,0]);
  backpack(torso);
  for (const y of [-.12,.10]) cube(torso,silver,[.43,.055,.035],[0,y,.25]);
  frenchFlag(model);
 }else if(faction==='genz'){
  piece(torso,new THREE.CylinderGeometry(.205,.225,.41,14),violet);
  backpack(torso);
 }else if(faction==='lyceens'){
  backpack(torso,colorMaterial(0x9b673f));
  placard(model);
 }else if(faction==='pompiers'){
  piece(torso,new THREE.CylinderGeometry(.23,.24,.45,14),red);
  for(const y of [-.13,.11])band(torso,silver,.238,y,.028);
  helmet(model,red,true);
 }else if(faction==='infirmieres'){
  piece(torso,new THREE.CylinderGeometry(.218,.225,.46,14),white);
  cube(torso,red,[.066,.23,.025],[0,0,-.226]);
  cube(torso,red,[.22,.07,.025],[0,0,-.228]);
  const head=boneAnchor(model,'Head',1.64,0);
  cube(head,white,[.25,.12,.14],[0,.04,0]);
  cube(head,red,[.047,.09,.015],[0,.055,-.078]);
 }else if(faction==='agriculteurs'){
  hat(model);
  backpack(torso,colorMaterial(0x6a5032));
 }
}
