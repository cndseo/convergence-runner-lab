import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';

export const REALISTIC_FACTIONS = ['gilets','genz','lyceens','pompiers','infirmieres','agriculteurs'];
// 12 genuinely different skinned bodies. Original artwork and gameplay stay unchanged.
// Each pair has the same semantic role; genders and clothing differ by asset.
export const REALISTIC_ROSTER = {
  gilets: ['construction-female-01','construction-male-01'],
  genz: ['male-adult-07','female-adult-05'],
  lyceens: ['female-adult-12','male-adult-04'],
  pompiers: ['fire-female-01','fire-male-01'],
  infirmieres: ['medical-female-02','medical-male-01'],
  agriculteurs: ['gardener-male-01','male-adult-10'],
};
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
  const faction = REALISTIC_FACTIONS[index%6];
  const variation = Math.floor(index/6)%2;
  const id=REALISTIC_ROSTER[faction][variation];
  return { id,faction,sex:id.includes('female')?'f':'m',variation };
}
export function realisticAtlasRow(index) {
  // First six are variation 0, second six variation 1.
  return index%12;
}
export async function preloadRealisticHumanoids() {
  const ids=Object.values(REALISTIC_ROSTER).flat();
  return Promise.all([...ids.map(getAsset),getAsset('f_walk_neutral_01'),getAsset('m_walk_neutral_01')]);
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
  action.time=(index%11)*.11;
  mixer.update(.001);
  model.updateMatrixWorld(true);
  let bounds=new THREE.Box3().setFromObject(model);
  const height=bounds.getSize(new THREE.Vector3()).y;
  if(!Number.isFinite(height)||height<=.3)throw new Error('Invalid rig bounds for '+id+': '+height);
  model.scale.setScalar(1.68/height);
  model.updateMatrixWorld(true);
  bounds=new THREE.Box3().setFromObject(model);
  const center=bounds.getCenter(new THREE.Vector3());
  model.position.set(-center.x,-bounds.min.y,-center.z);
  model.updateMatrixWorld(true);
  return {model,mixer,action,animation:'Walk',duration:clip.duration,id,sex};
}
