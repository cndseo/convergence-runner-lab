import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// CC0 motorcycle: KenneyNL/Starter-Kit-Racing/models/vehicle-motorcycle.glb
const loader=new GLTFLoader();
let sourcePromise;
const clones=new Set();
function getMotorcycle(){
 if(!sourcePromise)sourcePromise=new Promise((resolve,reject)=>{
  loader.load(import.meta.env.BASE_URL+'assets/kenney-racing/vehicle-motorcycle.glb',
    gltf=>resolve(gltf.scene),undefined,reject);
 }).catch(error=>{sourcePromise=null;throw error;});
 return sourcePromise;
}
export function upgradeBravMotorcycle(officer){
 if(officer.userData.motorcycleRequested)return;
 officer.userData.motorcycleRequested=true;
 getMotorcycle().then(source=>{
  if(!officer.parent)return;
  const model=source.clone(true);
  const bounds=new THREE.Box3().setFromObject(model);
  const size=bounds.getSize(new THREE.Vector3());
  const length=Math.max(size.x,size.z);
  if(!Number.isFinite(length)||length<=0)return;
  model.scale.setScalar(1.72/length);
  // Place bike lengthwise on roadway and lift its wheels to ground.
  const mostlyX=size.x>size.z;
  if(mostlyX)model.rotation.y=-Math.PI/2;
  model.updateMatrixWorld(true);
  const fitted=new THREE.Box3().setFromObject(model);
  const center=fitted.getCenter(new THREE.Vector3());
  model.position.set(-center.x,-fitted.min.y,-center.z);
  // Dark blue police fairing with black wheels instead of the white source paint.
  model.traverse(child=>{
   if(!child.isMesh||!child.material)return;
   child.material=child.material.clone();
   child.material.color.setHex(/wheel/i.test(child.name)?0x20242a:0x344e74);
   child.material.roughness=.49;
  });
  const holder=new THREE.Group();
  holder.userData.motorcycleVisual=true;
  holder.add(model);
  const blue=new THREE.MeshStandardMaterial({color:0x2b9bff,emissive:0x1576ef,emissiveIntensity:2,roughness:.23});
  const windscreen=new THREE.MeshStandardMaterial({color:0x567c9e,transparent:true,opacity:.69,metalness:.3,roughness:.2});
  for(const side of [-1,1]){
   const siren=new THREE.Mesh(new THREE.BoxGeometry(.13,.085,.12),blue);
   siren.position.set(side*.23,1.01,.22);holder.add(siren);
  }
  const screen=new THREE.Mesh(new THREE.BoxGeometry(.45,.29,.025),windscreen);
  screen.position.set(0,.91,.31);screen.rotation.x=-.3;holder.add(screen);
  officer.add(holder);
  // The last procedural child is the old temporary motorcycle.
  for(const child of officer.children){
   if(child.userData?.legacyMotorcycle)child.visible=false;
  }
  clones.add(holder);
  officer.userData.kenneyMotorcycle=holder;
  console.info('Kenney BRAV-M motorcycle active');
 }).catch(err=>console.warn('Kenney motorcycle fallback',err?.message));
}
export function resetMotorcycles(){clones.clear();}
