import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const selections = [
  ['car-kit/police.glb', -8.5, 0, 38, 3.4],
  ['car-kit/van.glb', 8.7, 0, 67, 3.8],
  ['car-kit/ambulance.glb', -8.5, 0, 105, 3.5],
  ['car-kit/firetruck.glb', 8.7, 0, 145, 4.2],
  ['city-kit-roads/construction-barrier.glb', -5.95, 0, 24, 1.7],
  ['city-kit-roads/traffic-light.glb', 6.4, 0, 52, 4.0],
  ['city-kit-roads/light-curved.glb', -6.5, 0, 85, 4.5],
  ['city-kit-commercial/building-a.glb', -19, 0, 65, 13],
  ['city-kit-commercial/building-b.glb', 19, 0, 112, 13],
  ['blocky-characters/character-a.glb', -6.2, 0, 45, 1.75],
  ['blocky-characters/character-b.glb', 6.2, 0, 95, 1.75],
  ['blocky-characters/character-c.glb', -6.2, 0, 132, 1.75],
];
const loader = new GLTFLoader();
const cache = new Map();
function getModel(path) {
  if (!cache.has(path)) {
    cache.set(path, new Promise((resolve,reject) => {
      loader.load(import.meta.env.BASE_URL+'assets/tge-kenney/'+path,
        g => resolve(g.scene),undefined,reject);
    }));
  }
  return cache.get(path);
}
export function placeKenneyCityDetails(scene, trackLength, tracked) {
  const batch={active:true};
  tracked.push({userData:{assetBatch:batch}});
  for(const [path,x,y,z,height] of selections) {
    if(z>=trackLength-10)continue;
    getModel(path).then(source=>{
      if(!batch.active)return;
      const obj=source.clone(true);
      const bounds=new THREE.Box3().setFromObject(obj);
      const size=bounds.getSize(new THREE.Vector3());
      if(!Number.isFinite(size.y)||size.y<=0)return;
      obj.scale.setScalar(height/size.y);
      obj.updateMatrixWorld(true);
      const adjusted=new THREE.Box3().setFromObject(obj);
      obj.position.set(x-adjusted.getCenter(new THREE.Vector3()).x,
        y-adjusted.min.y,-z-adjusted.getCenter(new THREE.Vector3()).z);
      obj.userData.dynamic=true;
      obj.traverse(child=>{if(child.isMesh){child.castShadow=false;child.receiveShadow=true;}});
      scene.add(obj);tracked.push(obj);
      console.info('Kenney asset displayed',path);
    }).catch(err=>console.warn('Kenney optional asset failed',path,err?.message));
  }
}
export function disposeKenneyCityDetails(tracked) {
  for(const item of tracked)if(item.userData?.assetBatch)item.userData.assetBatch.active=false;
}
