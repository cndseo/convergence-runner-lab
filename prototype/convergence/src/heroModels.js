import {createRealisticWalker} from './realisticHumanoids.js';
import {profilesFor} from './heroCatalog.mjs';

export function createHeroModel(profile,equipment='standard',index=0){
 return createRealisticWalker(index,null,{...profile.model,heroEquipment:equipment});
}
export function createCommunityMember(family,index){
 const profiles=profilesFor(family),p=profiles[index%profiles.length];
 return p?createHeroModel(p,'standard',index):createRealisticWalker(index);
}
export function disposeHero(h){
 if(!h)return;
 h.mixer.stopAllAction();h.mixer.uncacheRoot(h.model);h.dispose?.();
 h.model.traverse(n=>{if(n.isSkinnedMesh)n.skeleton?.dispose();});
}
