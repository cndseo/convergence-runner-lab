import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { dressFaction, FACTIONS } from './factionOutfits.js';

const loader=new GLTFLoader();
const maxAnimated=window.innerWidth<600?28:48;
let shared;
function source() {
  if(!shared)shared=new Promise((resolve,reject)=>loader.load(
    import.meta.env.BASE_URL+'assets/quaternius/animated-human.glb',
    resolve,undefined,reject)).catch(err=>{shared=null;throw err;});
  return shared;
}
// Upgrades crowd visuals without touching formation, gates or collision state.
export function attachAnimatedHumanoid(crowd) {
  if(crowd._humanoidPending)return;
  crowd._humanoidPending=true;
  source().then(gltf=>{
    if(!crowd.playerGroup)return;
    for(const [index,runner] of crowd.playerStickmen.entries()) {
      if(index>=maxAnimated){runner.userData.lowDetail=true;continue;}
      if(!runner.parent||runner.userData.realHumanoid)continue;
      const model=cloneSkeleton(gltf.scene);
      // Character source faces sideways; orient its animated run toward -Z.
      model.rotation.y=-Math.PI/2;
      const mixer=new THREE.AnimationMixer(model);
      const clip=gltf.animations.find(a=>a.name.toLowerCase()==='run')||gltf.animations[0];
      if(clip){const action=mixer.clipAction(clip);action.play();action.time=(index%7)*.11;mixer.update(.001);}
      // Bind-pose bounds are misleading on this GLB. Measure the actual skinned RUN pose.
      model.updateMatrixWorld(true);
      model.traverse(child=>{
        if(child.isSkinnedMesh){child.computeBoundingBox();child.frustumCulled=false;child.userData.sharedHumanoidAsset=true;}
      });
      const bbox=new THREE.Box3().setFromObject(model);
      const size=bbox.getSize(new THREE.Vector3());
      if(!Number.isFinite(size.y)||size.y<=0)continue;
      const factor=1.65/size.y;
      model.scale.setScalar(factor);
      model.updateMatrixWorld(true);
      const fitted=new THREE.Box3().setFromObject(model);
      const c=fitted.getCenter(new THREE.Vector3());
      model.position.set(-c.x,-fitted.min.y,-c.z);
      model.traverse(child=>{if(child.isSkinnedMesh)child.userData.sharedHumanoidAsset=true;});
      dressFaction(model,FACTIONS[index%FACTIONS.length]);
      runner.add(model);
      // Existing procedural animation remains operational but invisible.
      for(const part of runner.children)if(part!==model)part.visible=false;
      runner.userData.realHumanoid={mixer,model};
    }
    crowd._humanoidPending=false;
    console.info('Quaternius animated runner enabled',crowd.playerStickmen.length);
  }).catch(e=>{crowd._humanoidPending=false;console.warn('Quaternius humanoid fallback',e?.message);});
}
export function updateAnimatedHumanoids(crowd,dt) {
  for(const runner of crowd.playerStickmen)runner.userData.realHumanoid?.mixer.update(dt);
}
