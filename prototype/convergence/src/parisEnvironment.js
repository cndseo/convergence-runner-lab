import * as THREE from 'three';

// Optimized Paris-inspired streetscape on top of the existing bridge and track.
// Shared geometry is instanced; all components are decorative, without colliders.
const mats={
 limestone:new THREE.MeshStandardMaterial({color:0xdccbb3,roughness:.91}),
 trim:new THREE.MeshStandardMaterial({color:0xf0dfc3,roughness:.91}),
 slate:new THREE.MeshStandardMaterial({color:0x46566c,roughness:.92}),
 glass:new THREE.MeshStandardMaterial({color:0x283e58,roughness:.28,metalness:.22}),
 iron:new THREE.MeshStandardMaterial({color:0x202c3b,metalness:.64,roughness:.37}),
 gold:new THREE.MeshStandardMaterial({color:0xfce2a0,emissive:0xffc966,emissiveIntensity:1.25,roughness:.4}),
 foliage:new THREE.MeshStandardMaterial({color:0x57733e,roughness:.95})
};
const boxGeo=new THREE.BoxGeometry(1,1,1);
function instanced(group,material,items){
 if(!items.length)return;
 const mesh=new THREE.InstancedMesh(boxGeo,material,items.length);
 const tmp=new THREE.Object3D();
 items.forEach(([x,y,z,w,h,l,rx=0,ry=0,rz=0],i)=>{
  tmp.position.set(x,y,z);tmp.scale.set(w,h,l);
  tmp.rotation.set(rx,ry,rz);tmp.updateMatrix();
  mesh.setMatrixAt(i,tmp.matrix);
 });
 mesh.instanceMatrix.needsUpdate=true;
 mesh.castShadow=false;mesh.receiveShadow=true;
 group.add(mesh);
}
export function createParisStreetscape(scene,trackLength,tracked){
 const scenery=new THREE.Group();
 scenery.name='CONVERGENCE_Paris_Streetscape';
 scenery.userData.dynamic=true;
 const windows=[],cornices=[],balconies=[],railings=[],roofSlopes=[],dormers=[];
 for(let z=0;z<trackLength+35;z+=17){
  const height=4+(Math.floor(z/17)%4)*1.8;
  const roofTop=height-1.5;
  for(const side of [-1,1]){
   const centerX=side*(16+Math.abs(z%3));
   const x=centerX-side*3.83;
   cornices.push([x,roofTop-.48,-z,.28,.2,9.1]);
   cornices.push([x,1.65,-z,.20,.10,9.1]);
   // Two inclined panels approximate the iconic Parisian slate mansard roof.
   for(const slope of [-1,1]){
    roofSlopes.push([centerX+slope*2.00,roofTop+.34,-z,4.28,.16,9.2,0,0,slope*.32]);
   }
   for(let f=0;f<4;f++){
    const y=.94+f*1.59;
    if(y>roofTop-.96)break;
    for(const dz of [-3.16,-1.06,1.06,3.16]){
     windows.push([x-side*.055,y,-z+dz,.10,1.13,.80]);
     cornices.push([x-side*.11,y-.66,-z+dz,.19,.11,.98]);
     // Small reflective transom and exterior black iron balcony.
     if(f===1||f===2){
      balconies.push([x-side*.28,y-.52,-z+dz,.48,.065,1.0]);
      railings.push([x-side*.45,y-.31,-z+dz,.04,.49,1.0]);
     }
    }
   }
   for(const dz of [-2.9,0,2.9]){
    dormers.push([x-side*.025,roofTop+.55,-z+dz,.16,.54,.56]);
   }
  }
 }
 instanced(scenery,mats.glass,windows);
 instanced(scenery,mats.trim,cornices);
 instanced(scenery,mats.limestone,balconies);
 instanced(scenery,mats.iron,railings);
 instanced(scenery,mats.slate,roofSlopes);
 instanced(scenery,mats.glass,dormers);
 // Decorative iron balusters: instancing keeps the bridge detailed but cheap.
 const bridgeBalusters=[];
 for(let z=0;z<trackLength;z+=2.35){
  for(const side of [-1,1])bridgeBalusters.push([side*5.65,.76,-z,.12,1.05,.12]);
 }
 instanced(scenery,mats.iron,bridgeBalusters);
 // Iron balustrades and classic lanterns, spaced to avoid visual clutter.
 const lampBases=[],lampPosts=[],lampCrossbars=[],lampCaps=[],lampBulbs=[];
 for(let z=9;z<trackLength;z+=18){
  for(const side of [-1,1]){
   const x=side*6.05,zz=-z;
   lampBases.push([x,.41,zz,.38,.82,.38]);
   lampPosts.push([x,2.25,zz,.11,3.35,.11]);
   lampCrossbars.push([x,4.16,zz,.40,.075,.40]);
   lampBulbs.push([x,4.46,zz,.29,.50,.29]);
   lampCaps.push([x,4.77,zz,.45,.16,.45]);
   for(const offset of [-.16,.16]){
    lampPosts.push([x+offset,4.43,zz,.04,.56,.04]);
   }
  }
 }
 instanced(scenery,mats.iron,lampBases);
 instanced(scenery,mats.iron,lampPosts);
 instanced(scenery,mats.iron,lampCrossbars);
 instanced(scenery,mats.gold,lampBulbs);
 instanced(scenery,mats.iron,lampCaps);
 // Riverbank plane trees, kept distant from the course for mobile performance.
 const trunks=[],crowns=[];
 for(let z=10;z<trackLength+20;z+=25){
  for(const side of [-1,1]){
   const x=side*(25+(z%3)*2),zz=-z;
   trunks.push([x,.5,zz,.38,4,.38]);
   crowns.push([x,4.55,zz,3.9,3.4,3.75]);
  }
 }
 instanced(scenery,new THREE.MeshStandardMaterial({color:0x78634d,roughness:1}),trunks);
 const treeGeometry=new THREE.IcosahedronGeometry(1,1);
 const treeMesh=new THREE.InstancedMesh(treeGeometry,mats.foliage,crowns.length);
 const tree=new THREE.Object3D();
 crowns.forEach(([x,y,z,sx,sy,sz],i)=>{
  tree.position.set(x,y,z);tree.scale.set(sx/2,sy/2,sz/2);
  tree.updateMatrix();treeMesh.setMatrixAt(i,tree.matrix);
 });
 treeMesh.instanceMatrix.needsUpdate=true;scenery.add(treeMesh);
 // Slight warmth from the illuminated fixtures complements the cool Seine.
 scene.add(scenery);tracked.push(scenery);
 console.info('Paris architecture + Seine bridge lanterns ready',windows.length,lampBulbs.length);
}
