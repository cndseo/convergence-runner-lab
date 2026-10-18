import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/addons/utils/SkeletonUtils.js';
import { createApprovedLeader, showWalkingLegs } from './approvedLeader.js';
import { dressFaction, FACTIONS } from './factionOutfits.js';

const loader=new GLTFLoader();
const maxAnimated=window.innerWidth<600?12:20;
let shared,atlas;
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
  atlas=new THREE.TextureLoader().load(import.meta.env.BASE_URL+'assets/crowd/walk-atlas.webp');
  atlas.colorSpace=THREE.SRGBColorSpace;atlas.magFilter=THREE.LinearFilter;atlas.minFilter=THREE.LinearMipmapLinearFilter;
 }
 return atlas;
}
function createImpostors(crowd) {
 const geometry=new THREE.PlaneGeometry(1.92,2.64);
 const rows=new Float32Array(72),phases=new Float32Array(72);
 geometry.setAttribute('factionRow',new THREE.InstancedBufferAttribute(rows,1));
 geometry.setAttribute('walkPhase',new THREE.InstancedBufferAttribute(phases,1));
 const material=new THREE.MeshBasicMaterial({map:getAtlas(),alphaTest:.18,side:THREE.DoubleSide});
 const time={value:0};
 material.onBeforeCompile=shader=>{
  shader.uniforms.walkTime=time;
  shader.vertexShader='attribute float factionRow; attribute float walkPhase; uniform float walkTime;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <uv_vertex>',
   '#include <uv_vertex>\nvMapUv.x = (uv.x + mod(floor(walkTime * 9.2 + walkPhase),12.0))/12.0;\nvMapUv.y = (uv.y + 5.0-factionRow)/6.0;');
 };
 const mesh=new THREE.InstancedMesh(geometry,material,72);
 mesh.frustumCulled=false;mesh.count=0;mesh.userData.sharedHumanoidAsset=true;
 crowd.playerGroup.add(mesh);
 const matrix=new THREE.Object3D();
 crowd.impostors={mesh,time,rows,phases,geometry,matrix};
}
export function attachAnimatedHumanoid(crowd) {
 if(crowd._humanoidPending||!crowd.playerGroup)return;
 const group=crowd.playerGroup;
 crowd._humanoidPending=true;
 preloadRunnerHumanoid().then(gltf=>{
  if(crowd.playerGroup!==group)return;
  for(const [index,runner] of crowd.playerStickmen.entries()){
   if(!runner.parent||runner.userData.realHumanoid||runner.userData.impostor||runner.userData.approvedLeader)continue;
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
    const human=createWalkingHumanoid(gltf,index);
    runner.children.forEach(c=>{c.visible=false;});
    runner.add(human.model);runner.userData.realHumanoid=human;
   }
  }
  if(!crowd.impostors)createImpostors(crowd);
 }).catch(e=>console.warn('Humanoid fallback',e.message)).finally(()=>{
  crowd._humanoidPending=false;
 });
}
export function updateAnimatedHumanoids(crowd,dt) {
 for(const runner of crowd.playerStickmen){
  runner.userData.realHumanoid?.mixer.update(dt);
  if(runner.userData.approvedLeader)runner.userData.approvedLeader.time.value+=dt;
 }
 const imp=crowd.impostors;if(!imp)return;
 imp.time.value+=dt;
 let n=0;
 for(const runner of crowd.playerStickmen){
  if(!runner.userData.impostor)continue;
  const i=runner.userData.index;
  imp.matrix.position.set(runner.position.x,1.24+runner.position.y,runner.position.z);
  imp.matrix.scale.copy(runner.scale);imp.matrix.updateMatrix();
  imp.mesh.setMatrixAt(n,imp.matrix.matrix);
  imp.rows[n]=i%6;imp.phases[n]=(i*3.17)%12;n++;
 }
 imp.mesh.count=n;imp.mesh.instanceMatrix.needsUpdate=true;
 imp.geometry.attributes.factionRow.needsUpdate=true;imp.geometry.attributes.walkPhase.needsUpdate=true;
}
export function clearHumanoids(crowd) {
 for(const runner of crowd.playerStickmen){
  const human=runner.userData.realHumanoid;
  if(human){human.mixer.stopAllAction();human.mixer.uncacheRoot(human.model);
   human.model.traverse(n=>{if(n.isSkinnedMesh)n.skeleton?.dispose();if(n.userData.ownedLeaderGeometry){n.geometry.dispose();n.material.dispose();}});
  }
 }
 if(crowd.impostors){crowd.impostors.geometry.dispose();crowd.impostors.mesh.material.dispose();crowd.impostors=null;}
}
