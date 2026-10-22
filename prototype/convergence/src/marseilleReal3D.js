import * as THREE from 'three';
import {createRealisticWalker} from './realisticHumanoids.js';

// Uses the existing animated CC0 glTF bodies, including face, fingers,
// articulated fabric, shoes and skin. Only decorative Marseille touches are
// added; the movement stays a game animation without real-world instructions.
const BLUE=new THREE.MeshStandardMaterial({color:0x2176c7,roughness:.89,side:THREE.DoubleSide});
const WHITE=new THREE.MeshStandardMaterial({color:0xe5f0fa,roughness:.92,side:THREE.DoubleSide});
const BLACK=new THREE.MeshStandardMaterial({color:0x171d27,roughness:.90});
const BAG=new THREE.MeshStandardMaterial({color:0x282d38,roughness:.90});
const RIG_INDEXES=[4,5,7,8,10,12,1,4,5];
const GEO={
 scarf:new THREE.TorusGeometry(.19,.06,6,14),
 tail:new THREE.BoxGeometry(.085,.32,.04),
 nose:new THREE.BoxGeometry(.31,.12,.05),
 bag:new THREE.BoxGeometry(.30,.35,.17),
 flag:new THREE.PlaneGeometry(.40,.33),
 pole:new THREE.CylinderGeometry(.013,.013,.86,8)
};
const mesh=(g,geo,mat,name,p)=>{
 const m=new THREE.Mesh(geo,mat);
 m.name=name;m.position.set(...p);m.castShadow=true;
 m.userData.sharedHumanoidAsset=true;
 g.add(m);return m;
};

export async function createMarseilleReal3D(slot){
 const index=RIG_INDEXES[slot%RIG_INDEXES.length];
 const actor=await createRealisticWalker(index);
 actor.action.setEffectiveTimeScale(1.40);
 const wrapper=new THREE.Group();
 wrapper.name='MARSEILLE_RIGGED_3D_'+slot;
 wrapper.add(actor.model);
 // Existing rig has realistic hoodies, jackets and backpacks. Marseille
 // scarves remain bright blue-white, as in the submitted reference.
 const scarf=mesh(wrapper,GEO.scarf,BLUE,'MARSEILLE_BLUE_WHITE_SCARF',[0,1.36,-.055]);
 scarf.rotation.x=Math.PI/2;
 for(const x of [-.145,.145]){
  const tail=mesh(wrapper,GEO.tail,WHITE,'MARSEILLE_3D_SCARF_TAIL',[x,1.17,-.245]);
  tail.rotation.z=x>0?-.10:.10;
 }
 if(slot%3===0){
  mesh(wrapper,GEO.bag,BAG,'MARSEILLE_3D_BACKPACK',[0,1.06,.24]);
 }
 if(slot%4===0){
  const faceCover=mesh(wrapper,GEO.nose,BLACK,'MARSEILLE_3D_NECK_BAND',[0,1.32,-.16]);
  faceCover.rotation.x=.08;
 }
 if(slot===0||slot===5){
  mesh(wrapper,GEO.pole,BLACK,'MARSEILLE_3D_FLAG_POLE',[-.38,1.46,-.08]);
  const flag=mesh(wrapper,GEO.flag,BLUE,'MARSEILLE_3D_FLAG',[-.60,1.75,-.08]);
  flag.material.side=THREE.DoubleSide;
  const cross=mesh(wrapper,GEO.flag,WHITE,'MARSEILLE_3D_WHITE_MARK',[-.60,1.75,-.071]);
  cross.scale.set(.30,.18,1);
 }
 return {
  model:wrapper,rig:actor,
  step(dt){actor.mixer.update(dt);actor.update?.(dt);},
  dispose(){
   actor.mixer.stopAllAction();actor.mixer.uncacheRoot(actor.model);
   actor.dispose?.();
   actor.model.traverse(obj=>{if(obj.isSkinnedMesh)obj.skeleton?.dispose();});
  }
 };
}
export function riggedMarseilleCount(){
 return RIG_INDEXES.length;
}
