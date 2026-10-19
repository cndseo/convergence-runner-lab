import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';

import {CHARACTER_STYLES, characterStyle, characterRow} from './characterCatalog.mjs';
import {dressReferenceWalker, disposeReferenceOutfit, prepareReferenceTextures} from './referenceOutfits.js';
export {CHARACTER_STYLES};
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const cache = new Map();
const assetUrl = id => import.meta.env.BASE_URL + 'assets/realistic/' + id + '.glb';
function getAsset(id) {
  if (!cache.has(id)) {
    const promise = loader.loadAsync(assetUrl(id)).catch(e=>{cache.delete(id);throw e;});
    cache.set(id,promise);
  }
  return cache.get(id);
}
export function selectRealisticAvatar(index) {
 const style=characterStyle(index);
 return {...style,id:style.base,sex:style.base.includes('female')?'f':'m'};
}
export function realisticAtlasRow(index){return characterRow(index);}
export async function preloadRealisticHumanoids(){
 return Promise.all([...new Set(CHARACTER_STYLES.map(s=>s.base)),'f_walk_neutral_01','m_walk_neutral_01'].map(getAsset));
}
export async function createRealisticWalker(index, overrideId=null) {
  const spec = selectRealisticAvatar(index);
  const id=overrideId||spec.id;
  const sex=id.includes('female')?'f':'m';
  const [asset,walk]=await Promise.all([getAsset(id),getAsset(sex+'_walk_neutral_01')]);
  const model=cloneSkeleton(asset.scene);
  // Source characters face the camera (+Z); game camera follows from +Z.
  // Rotating to -Z makes the crowd march away from the camera.
  model.rotation.y=Math.PI;
  model.traverse(child=>{
    if(child.isMesh){
      // Original GLB geometry and materials are shared across cloned walkers.
      child.userData.sharedHumanoidAsset=true;
      if(child.isSkinnedMesh)child.frustumCulled=false;
    }
  });
  const clip=walk.animations[0];
  if(!clip)throw new Error('Walk animation missing for '+id);
  const mixer=new THREE.AnimationMixer(model);
  const action=mixer.clipAction(clip);
  action.setLoop(THREE.LoopRepeat);
  action.setEffectiveTimeScale(.92);
  action.play();
  action.time=0;
  mixer.update(.001);
  model.updateMatrixWorld(true);
  let bounds=new THREE.Box3().setFromObject(model);
  const height=bounds.getSize(new THREE.Vector3()).y;
  if(!Number.isFinite(height)||height<=.3)throw new Error('Invalid rig bounds for '+id+': '+height);
  model.scale.setScalar(spec.height/height);
  model.updateMatrixWorld(true);
  bounds=new THREE.Box3().setFromObject(model);
  const center=bounds.getCenter(new THREE.Vector3());
  model.position.set(-center.x,-bounds.min.y,-center.z);
  model.updateMatrixWorld(true);
  await prepareReferenceTextures();
  const outfit=dressReferenceWalker(model,spec);
  // Body width varies after attachments are fitted in metres; no P02 alteration.
  model.scale.x*=spec.width;
  const update=(dt,absolute)=>outfit.update(dt,absolute);
  mixer.setTime((index%11)*.11);update(0);
  const dispose=()=>disposeReferenceOutfit(model);
  return {model,mixer,action,animation:'Walk',duration:clip.duration,id:spec.key,sourceId:id,sex,update,dispose};
}
