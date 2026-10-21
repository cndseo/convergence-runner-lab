import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { createApprovedLeader, showWalkingLegs } from './approvedLeader.js';
import { dressFaction, FACTIONS } from './factionOutfits.js';
import { createRealisticWalker, realisticAtlasRow } from './realisticHumanoids.js';
import {createHeroModel,createCommunityMember,disposeHero} from './heroModels.js';
import {atlasRowForFamily} from './heroRules.mjs';
import {DENSITY_LIMITS} from './humanDensity.mjs';
import {CHARACTER_ATLAS} from './characterCatalog.mjs';
import {createGreenSmoke} from './referenceOutfits.js';
import {updateCharacterModel3D} from './characterModels3D.js';
import {disposeRunnerCostume} from './characterCostumes.js';

const loader=new GLTFLoader();
const maxAnimated=window.innerWidth<600?12:20;
// ?visual=legacy preserves the verified Quaternius crowd without changing P02.
const realisticEnabled=new URLSearchParams(window.location.search).get('visual')!=='legacy';
let shared,atlas,heroAtlas;
export function preloadRunnerHumanoid() {
 if(!shared)shared=loader.loadAsync(import.meta.env.BASE_URL+'assets/quaternius/animated-human.glb').catch(e=>{shared=null;throw e;});
 return shared;
}
export function createWalkingHumanoid(gltf,index=0,faction=FACTIONS[index%6]) {
 const model=cloneSkeleton(gltf.scene);
 model.rotation.y=-Math.PI/2;
 const mixer=new THREE.AnimationMixer(model);
 const clip=gltf.animations.find(a=>a.name.toLowerCase()==='walk')||gltf.animations[0];
 const action=mixer.clipAction(clip);
 action.setLoop(THREE.LoopRepeat);action.setEffectiveTimeScale(.92);action.play();
 action.time=(index%7)*.16;mixer.update(.001);
 model.updateMatrixWorld(true);
 model.traverse(c=>{if(c.isSkinnedMesh){c.computeBoundingBox();c.frustumCulled=false;c.userData.sharedHumanoidAsset=true;}});
 const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
 model.scale.setScalar(1.68/size.y);model.updateMatrixWorld(true);
 const fitted=new THREE.Box3().setFromObject(model),center=fitted.getCenter(new THREE.Vector3());
 model.position.set(-center.x,-fitted.min.y,-center.z);
 dressFaction(model,faction);
 return {model,mixer,animation:clip.name,action,duration:clip.duration};
}
function getAtlas() {
 if(!atlas) {
  const file=realisticEnabled?'assets/crowd/walk-realistic.webp':'assets/crowd/walk-atlas.webp';
  atlas=new THREE.TextureLoader().load(import.meta.env.BASE_URL+file);
  atlas.colorSpace=THREE.SRGBColorSpace;atlas.magFilter=THREE.LinearFilter;atlas.minFilter=THREE.LinearMipmapLinearFilter;
 }
 return atlas;
}
export function createMarchBatch(capacity=DENSITY_LIMITS.crowd,heroes=false) {
 if(heroes&&!heroAtlas){
  heroAtlas=new THREE.TextureLoader().load(import.meta.env.BASE_URL+'assets/crowd/walk-heroes.webp');
  heroAtlas.colorSpace=THREE.SRGBColorSpace;heroAtlas.magFilter=THREE.LinearFilter;
 }
 const rowCount=heroes?20:CHARACTER_ATLAS.rows;
 const geometry=new THREE.PlaneGeometry(realisticEnabled?CHARACTER_ATLAS.planeWidth:1.92,realisticEnabled?CHARACTER_ATLAS.planeHeight:2.64);
 const rows=new Float32Array(capacity),phases=new Float32Array(capacity);
 geometry.setAttribute('factionRow',new THREE.InstancedBufferAttribute(rows,1));
 geometry.setAttribute('walkPhase',new THREE.InstancedBufferAttribute(phases,1));
 const material=new THREE.MeshBasicMaterial({map:heroes?heroAtlas:getAtlas(),alphaTest:.18,side:THREE.DoubleSide});
 const time={value:0};
 material.onBeforeCompile=shader=>{
  shader.uniforms.walkTime=time;
  shader.vertexShader='attribute float factionRow; attribute float walkPhase; uniform float walkTime;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <uv_vertex>',
   '#include <uv_vertex>\nvMapUv.x = (uv.x + mod(floor(walkTime * 9.2 + walkPhase),12.0))/12.0;\nvMapUv.y = (uv.y + '+(realisticEnabled?(rowCount-1).toFixed(1):'5.0')+'-factionRow)/'+(realisticEnabled?rowCount.toFixed(1):'6.0')+';');
 };
 material.customProgramCacheKey=()=> 'march-atlas-'+(realisticEnabled?rowCount:6);
 const mesh=new THREE.InstancedMesh(geometry,material,rows.length);
 mesh.frustumCulled=false;mesh.count=0;mesh.userData.sharedHumanoidAsset=true;
 mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
 const matrix=new THREE.Object3D();
 return {mesh,time,rows,phases,geometry,matrix,realistic:realisticEnabled};
}
function createImpostors(crowd) {
 const batch=createMarchBatch(DENSITY_LIMITS.crowd,!!crowd.game?.heroes?.active&&realisticEnabled);
 crowd.playerGroup.add(batch.mesh);
 const smoke=realisticEnabled?createGreenSmoke(256):null;
 if(smoke){smoke.count=0;crowd.playerGroup.add(smoke);}
 crowd.impostors={...batch,smoke};
}
async function upgradeToRealistic(crowd,runner,index,group){
 try{
  const replacement=runner.userData.community?await createCommunityMember(runner.userData.community,index):await createRealisticWalker(index);
  if(crowd.playerGroup!==group||runner.parent!==group){
   replacement.mixer.stopAllAction();replacement.mixer.uncacheRoot(replacement.model);replacement.dispose?.();
   replacement.model.traverse(n=>{if(n.isSkinnedMesh)n.skeleton?.dispose();});
   return;
  }
  const old=runner.userData.realHumanoid;
  if(!old||runner.userData.realisticAvatar)return;
  old.mixer.stopAllAction();old.mixer.uncacheRoot(old.model);old.dispose?.();
  old.model.traverse(n=>{if(n.isSkinnedMesh)n.skeleton?.dispose();});
  runner.remove(old.model);
  runner.add(replacement.model);
  runner.userData.realHumanoid=replacement;
  runner.userData.realisticAvatar=replacement.id;
 }catch(e){console.warn('Realistic avatar fallback',index,e.message);}
}
export function attachAnimatedHumanoid(crowd) {
 if(crowd._humanoidPending||!crowd.playerGroup)return;
 const group=crowd.playerGroup;
 crowd._humanoidPending=true;
 preloadRunnerHumanoid().then(gltf=>{
  if(crowd.playerGroup!==group)return;
  for(const [index,runner] of crowd.playerStickmen.entries()){
   if(!runner.parent||runner.userData.realHumanoid||runner.userData.impostor||runner.userData.approvedLeader)continue;
   if(runner.userData.heroProfile){
    if(!runner.userData.heroLoading){
     runner.userData.heroLoading=true;runner.userData.lowDetail=true;
     createHeroModel(runner.userData.heroProfile,crowd.game.heroes.save.equipment).then(human=>{
      if(crowd.playerGroup!==group||runner.parent!==group){disposeHero(human);return;}
      runner.children.forEach(c=>{c.visible=false;});runner.add(human.model);
      runner.userData.realHumanoid=human;runner.userData.realisticAvatar=human.id;
     }).catch(e=>{runner.userData.heroLoading=false;console.warn('Hero fallback',e.message);});
    }
    continue;
   }
   if(runner.userData.costumeAvatar){
    runner.userData.lowDetail=true; // Volumetric costume owns its animation.
    continue;
   }
   if(index===0){
    runner.children.forEach(c=>{c.visible=false;});
    const human=createWalkingHumanoid(gltf,index,'gilets');showWalkingLegs(human);
    runner.add(human.model);runner.userData.realHumanoid=human;
    const leader=createApprovedLeader();runner.add(leader.mesh);
    runner.userData.approvedLeader=leader;runner.userData.lowDetail=true;
   }else if(index>=maxAnimated){
    runner.userData.impostor=true;runner.userData.lowDetail=true;
    runner.children.forEach(c=>{c.visible=false;});
   }else{
    const human=createWalkingHumanoid(gltf,index,runner.userData.bonusFaction||FACTIONS[index%6]);
    runner.children.forEach(c=>{c.visible=false;});
    runner.add(human.model);runner.userData.realHumanoid=human;
   }
  }
  if(!crowd.impostors)createImpostors(crowd);
  if(realisticEnabled){
   for(let i=1;i<Math.min(maxAnimated,crowd.playerStickmen.length);i++){
    const runner=crowd.playerStickmen[i];
    if(runner.userData.realHumanoid&&!runner.userData.realisticAvatar&&!runner.userData.upgradingRealistic){
     runner.userData.upgradingRealistic=true;
     upgradeToRealistic(crowd,runner,i,group).finally(()=>{runner.userData.upgradingRealistic=false;});
    }
   }
  }
 }).catch(e=>console.warn('Humanoid fallback',e.message)).finally(()=>{
  crowd._humanoidPending=false;
 });
}
export function updateAnimatedHumanoids(crowd,dt) {
 for(const runner of crowd.playerStickmen){
  if(runner.userData.costumeModel3D)
   updateCharacterModel3D(runner.userData.costumeModel3D,crowd.animTime/2.6,true);
  runner.userData.realHumanoid?.mixer.update(dt);
  runner.userData.realHumanoid?.update?.(dt);
  if(runner.userData.approvedLeader)runner.userData.approvedLeader.time.value+=dt;
 }
 const imp=crowd.impostors;if(!imp)return;
 imp.time.value+=dt;
 let n=0,smokeCount=0;
 for(const runner of crowd.playerStickmen){
  if(!runner.userData.impostor)continue;
  if(n>=imp.rows.length)break;
  const i=runner.userData.index;
  imp.matrix.position.set(runner.position.x,(realisticEnabled?CHARACTER_ATLAS.centerY:1.24)+runner.position.y,runner.position.z);
  imp.matrix.scale.copy(runner.scale);imp.matrix.updateMatrix();
  imp.mesh.setMatrixAt(n,imp.matrix.matrix);
  const factionIndex=FACTIONS.indexOf(runner.userData.bonusFaction);
  imp.rows[n]=realisticEnabled?(runner.userData.community?atlasRowForFamily(runner.userData.community,i):realisticAtlasRow(factionIndex>=0?factionIndex:i)):factionIndex>=0?factionIndex:i%6;imp.phases[n]=(i*3.17)%12;n++;
  if(imp.smoke&&!crowd.roster?.length&&realisticAtlasRow(i)===4){
   for(let puff=0;puff<12&&smokeCount<256;puff++){
    const phase=(imp.time.value*.55+puff/12+i*.17)%1,s=.07+phase*.39;
    imp.matrix.position.set(runner.position.x+.40+Math.sin(puff*2.4+imp.time.value*.6)*phase*.13+.15*phase,runner.position.y+1.91+phase*.72,runner.position.z+.03+phase*.06);
    imp.matrix.scale.set(s*1.3,s,1);imp.matrix.rotation.z=puff*.73+imp.time.value*.15;imp.matrix.updateMatrix();
    imp.smoke.setMatrixAt(smokeCount++,imp.matrix.matrix);
   }imp.matrix.rotation.set(0,0,0);
  }
 }
 // Hundreds of companions share the existing atlas and the same draw call.
 // They are never actors in playerStickmen and cannot create damage, ammo or score.
 const layout=crowd.density;
 const slot=crowd._densitySlot??=( {x:0,z:0} );
 const reduced=crowd.game?.experience?.reducedMotion;
 for(let i=crowd.playerCount;i<layout.total&&n<imp.rows.length;i++){
  crowd.getVisualPosition(i,slot);
  const guard=i>=layout.marchers;
  const grow=i>=crowd.previousVisualTotal ? crowd.densityGrowth : 1;
  const scale=(.94+(i%5)*.018)*(reduced?1:Math.max(.02,grow));
  imp.matrix.position.set(slot.x,(realisticEnabled?CHARACTER_ATLAS.centerY:1.24)*scale,
    slot.z+(1-grow)*.65);
  imp.matrix.scale.setScalar(scale);imp.matrix.rotation.set(0,0,0);imp.matrix.updateMatrix();
  imp.mesh.setMatrixAt(n,imp.matrix.matrix);
  // Protective ranks alternate the approved firefighter, medic and yellow vest.
  const variant=(Math.imul(i+11,2654435761)>>>0);
  imp.rows[n]=guard ? (realisticEnabled?(crowd.roster?.length?[12,8,4][variant%3]:[1,2,7][variant%3]):[3,4,0][variant%3])
    : realisticEnabled?(crowd.roster?.length?atlasRowForFamily(crowd.roster[i%crowd.roster.length],i):variant%CHARACTER_ATLAS.rows):variant%6;
  imp.phases[n]=(i*3.17)%12;n++;
 }
 if(imp.smoke){imp.smoke.count=smokeCount;imp.smoke.instanceMatrix.needsUpdate=true;imp.smoke.material.uniforms.time.value=imp.time.value;}
 imp.mesh.count=n;imp.mesh.instanceMatrix.needsUpdate=true;
 imp.geometry.attributes.factionRow.needsUpdate=true;imp.geometry.attributes.walkPhase.needsUpdate=true;
}
export function clearHumanoids(crowd) {
 for(const runner of crowd.playerStickmen){
  disposeRunnerCostume(runner);
  const human=runner.userData.realHumanoid;
  if(human){human.mixer.stopAllAction();human.mixer.uncacheRoot(human.model);human.dispose?.();
   human.model.traverse(n=>{if(n.isSkinnedMesh)n.skeleton?.dispose();if(n.userData.ownedLeaderGeometry){n.geometry.dispose();n.material.dispose();}});
  }
 }
 if(crowd.impostors){crowd.impostors.mesh.dispose();crowd.impostors.geometry.dispose();crowd.impostors.mesh.material.dispose();crowd.impostors.smoke?.geometry.dispose();crowd.impostors.smoke?.material.dispose();crowd.impostors=null;}
}
