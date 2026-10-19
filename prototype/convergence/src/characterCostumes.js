import * as THREE from 'three';

// Authored from the two views actually provided by the user.
// The costume is purely visual: never adjusts crowd count or strength.
const BASE=import.meta.env.BASE_URL+'assets/characters/';
const CLOTHES={
  spiderman:{front:'spiderman-front.webp',back:'spiderman-back.webp',height:1.86},
  dinosaur:{front:'dinosaur-front.webp',back:'dinosaur-back.webp',height:2.16},
};
let cache={};
const loader=new THREE.TextureLoader();
export async function preloadCostume(id){
 const cfg=CLOTHES[id];if(!cfg)throw new RangeError('Unknown costume');
 if(!cache[id]){
  cache[id]=Promise.all([cfg.front,cfg.back].map(s=>loader.loadAsync(BASE+s)))
  .then(textures=>{
   for(const t of textures){t.colorSpace=THREE.SRGBColorSpace;t.minFilter=THREE.LinearMipmapLinearFilter;t.magFilter=THREE.LinearFilter;}
   return {front:textures[0],back:textures[1],height:cfg.height};
  }).catch(error=>{delete cache[id];throw error;});
 }
 return cache[id];
}
export function supportedCostume(id){return !!CLOTHES[id];}
export function mountCostume(runner,id,assets){
 if(!runner?.parent || !CLOTHES[id] || runner.userData.costumeBillboard)return false;
 runner.userData.costumeAvatar=id;
 for(const child of runner.children)child.visible=false;
 const mat=new THREE.SpriteMaterial({map:assets.back,transparent:true,alphaTest:.12,depthWrite:false});
 const sprite=new THREE.Sprite(mat);
 const aspect=assets.back.image.width/assets.back.image.height;
 sprite.name='CUSTOM_COSTUME_'+id.toUpperCase();
 sprite.position.y=assets.height*.51;
 sprite.scale.set(aspect*assets.height,assets.height,1);
 runner.add(sprite);
 runner.userData.costumeBillboard=sprite;
 return true;
}
export async function applyCostumeToCrowd(crowd,id){
 if(!supportedCostume(id)||!crowd.playerGroup)return false;
 const group=crowd.playerGroup,runner=crowd.playerStickmen[1]; // Preserve approved P02.
 if(!runner||runner.userData.realHumanoid)return false;
 runner.userData.costumeAvatar=id;
 try{
  const assets=await preloadCostume(id);
  if(crowd.playerGroup!==group || runner.parent!==group)return false;
  return mountCostume(runner,id,assets);
 }catch(error){console.warn('Costume unavailable:',id,error.message);return false;}
}
