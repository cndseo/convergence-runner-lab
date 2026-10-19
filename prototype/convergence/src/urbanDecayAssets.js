import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// GLB pack produced by tools/build-urban-decay-assets.mjs.
// The master models, materials and geometry are reused across levels.
const loader = new GLTFLoader();
const cache=new Map();
export const URBAN_DECAY_SCENES=Object.freeze([
  {model:'campement-trottoir.glb',x:9.6,z:36,turn:0,scale:1},
  {model:'hospital-delabre.glb',x:-16.1,z:68,turn:Math.PI/2,scale:1},
  {model:'lycee-delabre.glb',x:16.1,z:112,turn:-Math.PI/2,scale:1},
  {model:'campement-trottoir.glb',x:-9.6,z:152,turn:0,scale:.95},
]);
function fetchModel(name) {
  if(!cache.has(name)){
    cache.set(name,new Promise((resolve,reject)=>{
      loader.load(import.meta.env.BASE_URL+'assets/urban-decay/'+name,
        data=>resolve(data.scene),undefined,reject);
    }).catch(error=>{cache.delete(name);throw error;}));
  }
  return cache.get(name);
}
export function placeUrbanDecayAssets(scene,trackLength,tracked){
  const batch={active:true};
  tracked.push({userData:{urbanAssetBatch:batch}});
  for(const asset of URBAN_DECAY_SCENES){
    if(asset.z>trackLength-14)continue;
    fetchModel(asset.model).then(master=>{
      if(!batch.active)return; // level was cleared during asynchronous load
      const model=master.clone(true);
      model.position.set(asset.x,0,-asset.z);
      model.rotation.y=asset.turn;
      model.scale.setScalar(asset.scale);
      model.userData.dynamic=true;
      model.name='CONVERGENCE urban: '+asset.model;
      model.traverse(child=>{if(child.isMesh){child.castShadow=false;child.receiveShadow=true;}});
      scene.add(model);
      tracked.push(model);
    }).catch(error=>console.warn('Urban GLB asset unavailable',asset.model,error?.message));
  }
}
export function disposeUrbanDecayAssets(tracked){
  for(const item of tracked)if(item.userData?.urbanAssetBatch)item.userData.urbanAssetBatch.active=false;
}