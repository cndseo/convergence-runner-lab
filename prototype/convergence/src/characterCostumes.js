import * as THREE from 'three';
import {createCostumeModel3D,disposeCharacterModel3D} from './characterModels3D.js';

// Original references supplied by the user. Body, limbs, tail and costume
// are now volumetric 3D meshes, never billboard sprites.
const BASE=import.meta.env.BASE_URL+'assets/characters/';
const CLOTHES={
 spiderman:{front:'spiderman-front.webp',back:'spiderman-back.webp'},
 dinosaur:{front:'dinosaur-front.webp',back:'dinosaur-back.webp'}
};
const cache=new Map();
const loader=new THREE.TextureLoader();
export async function preloadCostume(id){
 const cfg=CLOTHES[id];
 if(!cfg)throw new RangeError('Unknown costume');
 if(!cache.has(id)){
  const load=Promise.all([cfg.front,cfg.back].map(s=>loader.loadAsync(BASE+s)))
   .then(([front,back])=>{
    for(const t of [front,back]){
     t.colorSpace=THREE.SRGBColorSpace;
     t.minFilter=THREE.LinearMipmapLinearFilter;
     t.magFilter=THREE.LinearFilter;
    }
    return {front,back};
   }).catch(e=>{cache.delete(id);throw e;});
  cache.set(id,load);
 }
 return cache.get(id);
}
export function supportedCostume(id){return Object.hasOwn(CLOTHES,id);}
export function mountCostume(runner,id,assets){
 if(!runner?.parent || !supportedCostume(id) || runner.userData.costumeModel3D)return false;
 if(runner.userData.realHumanoid){
  const old=runner.userData.realHumanoid;
  old.mixer.stopAllAction();old.mixer.uncacheRoot(old.model);
  old.dispose?.();
  runner.remove(old.model);runner.userData.realHumanoid=null;
 }
 const model=createCostumeModel3D(id,assets);
 // The first six meshes belong to the original fallback rig; these stay
 // attached but hidden, preserving the existing animation contract and P02.
 for(const child of runner.children)child.visible=false;
 runner.add(model);
 runner.userData.costumeAvatar=id;
 runner.userData.costumeModel3D=model;
 runner.userData.lowDetail=true;
 return true;
}
export async function applyCostumeToCrowd(crowd,id){
 if(!supportedCostume(id)||!crowd.playerGroup)return false;
 const group=crowd.playerGroup;
 const runner=crowd.playerStickmen[1]; // P02 is never touched.
 if(!runner)return false;
 runner.userData.costumeAvatar=id;
 try{
  const assets=await preloadCostume(id);
  if(crowd.playerGroup!==group || runner.parent!==group)return false;
  return mountCostume(runner,id,assets);
 }catch(error){
  // Keep the model procedural even if the two photo textures cannot load.
  if(crowd.playerGroup===group && runner.parent===group)
   return mountCostume(runner,id,{front:null,back:null});
  console.warn('3D costume unavailable',id,error.message);
  return false;
 }
}
export function disposeRunnerCostume(runner){
 const model=runner?.userData?.costumeModel3D;
 if(!model)return;
 disposeCharacterModel3D(model);
 if(model.parent)model.parent.remove(model);
 runner.userData.costumeModel3D=null;
}
