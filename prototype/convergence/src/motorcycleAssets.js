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
  if(mostlyX)model.rotation.y=Math.PI/2;
  model.updateMatrixWorld(true);
  const fitted=new THREE.Box3().setFromObject(model);
  const center=fitted.getCenter(new THREE.Vector3());
  model.position.set(-center.x,-fitted.min.y,-center.z);
  const holder=new THREE.Group();
  holder.userData.motorcycleVisual=true;
  holder.add(model);
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
