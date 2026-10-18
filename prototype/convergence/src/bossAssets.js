import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader=new GLTFLoader();
let vanPromise;
function loadVan() {
  if(!vanPromise)vanPromise=new Promise((resolve,reject)=>{
    loader.load(import.meta.env.BASE_URL+'assets/tge-kenney/car-kit/van.glb',
      result=>resolve(result.scene),undefined,reject);
  }).catch(error=>{vanPromise=null;throw error;});
  return vanPromise;
}
// Preserve the existing boss object and collision logic. Replace only its visual
// mesh if the CC0 asset loads, with the procedural van retained as a fallback.
export function upgradeBossVan(squad, fallback) {
  loadVan().then(source=>{
    if(!squad.parent||!fallback.parent)return;
    const model=source.clone(true);
    const bounds=new THREE.Box3().setFromObject(model);
    const size=bounds.getSize(new THREE.Vector3());
    if(size.y<=0||!Number.isFinite(size.y))return;
    model.scale.setScalar(1.65/size.y);
    model.updateMatrixWorld(true);
    const fitted=new THREE.Box3().setFromObject(model);
    const center=fitted.getCenter(new THREE.Vector3());
    model.position.set(-center.x,-fitted.min.y,-center.z);
    const holder=new THREE.Group();
    holder.position.copy(fallback.position);
    holder.rotation.copy(fallback.rotation);
    holder.add(model);
    holder.userData.dynamic=true;
    squad.add(holder);
    fallback.visible=false;
    console.info('Kenney boss van replacement active');
  }).catch(e=>console.warn('Kenney boss van fallback retained',e?.message));
}
