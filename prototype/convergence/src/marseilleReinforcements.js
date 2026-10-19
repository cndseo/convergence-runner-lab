import * as THREE from 'three';
import {
 createMarseilleActor3D,updateCharacterModel3D,disposeCharacterModel3D
} from './characterModels3D.js';
import {createMarseilleReal3D,riggedMarseilleCount} from './marseilleReal3D.js';

// Dramatic, fictional arcade support arrival. Genuine shaded and articulated
// 3D figures, not textures or billboards; no real-world tactical simulation.
const ACTORS=12; // 4 entering from each of left, right and rear.
const DURATION=4.4;
const clamp=t=>Math.max(0,Math.min(1,t));
const smooth=t=>t*t*(3-2*t);

export class MarseilleReinforcements {
 constructor(game){
  this.game=game;this.active=false;this.pending=false;this.demoCharges=0;
  this.charges=0;this.elapsed=0;this.actors=[];this.enemy=null;
  this.button=document.createElement('button');
  this.button.id='marseille-support-button';this.button.type='button';
  this.button.textContent='RENFORT MARSEILLAIS';
  this.button.setAttribute('aria-label','Déclencher les renforts marseillais');
  this.button.style.display='none';
  this.button.addEventListener('click',()=>this.activate());
  game.ui.container.appendChild(this.button);
 }
 async preload(){
  // Nine existing high-detail GLB walkers supply fully articulated faces,
  // anatomy and outfits. Remaining actors are lightweight 3D meshes.
  const rigs=await Promise.all(
   Array.from({length:Math.min(ACTORS,riggedMarseilleCount())},async(_,i)=>{
    try{return await createMarseilleReal3D(i);}
    catch(error){console.warn('3D GLB fallback',i,error.message);return null;}
   })
  );
  return {geometry:'rigged-3d',rigs};
 }
 discardAssets(assets){
  for(const rig of assets?.rigs||[])rig?.dispose?.();
 }
 available(){return this.charges+this.demoCharges;}
 showButton(){
  const g=this.game;
  const visible=g.mode==='campaign' && g.state==='fighting' &&
    (this.available()>0||this.pending||this.active);
  this.button.style.display=visible?'block':'none';
  this.button.disabled=this.pending||this.active;
  this.button.textContent=this.active?'RENFORTS EN APPROCHE…':
    this.pending?'VÉRIFICATION…':'RENFORT MARSEILLAIS · '+this.available();
 }
 async activate(){
  const g=this.game;
  if(g.mode!=='campaign'||g.state!=='fighting'||!g.fightingEnemy||
    this.active||this.pending||this.available()<=0)return false;
  this.pending=true;this.showButton();
  const enemy=g.fightingEnemy,runId=g.runId;
  try{
   const artwork=await this.preload();
   if(!artwork||g.runId!==runId||g.state!=='fighting'){
    this.discardAssets(artwork);return false;
   }
   const granted=await g.challengeHub.consumeMarseilleCharge();
   if(!granted||g.runId!==runId||g.fightingEnemy!==enemy){
    this.discardAssets(artwork);return false;
   }
   this.begin(enemy,artwork);
   return true;
  }finally{this.pending=false;this.showButton();}
 }
 begin(enemy,artwork={}){
  this.clear();
  this.game.lbdSystem?.clear();
  this.active=true;this.enemy=enemy;this.elapsed=0;
  this.startZ=-this.game.trackZ+1.0;
  this.targetZ=-enemy.z+.5;
  this.actors=[];
  for(let i=0;i<ACTORS;i++){
   const lane=i%3,row=Math.floor(i/3),side=lane===0?-1:lane===1?1:0;
   const fromX=side?side*(6.6+row*.68):(row-1.5)*.95;
   const fromZ=side?this.startZ+row*.64:this.startZ+3.0+row*.85;
   const toX=side?side*(1.05+row*.34):(row-1.5)*.47;
   const toZ=this.targetZ+.25+row*.52+(lane===2?1.0:0);
   const rig=artwork.rigs?.[i]||null;
   const model=rig?.model||createMarseilleActor3D(i);
   model.position.set(fromX,0,fromZ);
   model.rotation.y=Math.atan2(-(toX-fromX),-(toZ-fromZ));
   this.game.scene.add(model);
   this.actors.push({model,rig,lane,i,fromX,fromZ,toX,toZ});
  }
  // Faint volumetric puffs are independent effects, not instructions for
  // making real smoke devices. No particles need collision physics.
  this.puffs=[];
  this.puffGeo=new THREE.SphereGeometry(1,9,7);
  this.puffMat=[
   new THREE.MeshBasicMaterial({color:0x4b9cfc,transparent:true,opacity:.15,depthWrite:false}),
   new THREE.MeshBasicMaterial({color:0xe0e9fa,transparent:true,opacity:.17,depthWrite:false})
  ];
  for(let j=0;j<12;j++){
   const puff=new THREE.Mesh(this.puffGeo,this.puffMat[j%2]);
   puff.name='MARSEILLE_3D_COLOR_SMOKE_'+j;
   this.game.scene.add(puff);this.puffs.push(puff);
  }
  this.game.ui.showFloatingText('RENFORTS MARSEILLAIS !','#82c7ff');
  this.game.ui.screenShake(7);
  this.showButton();
 }
 update(dt){
  this.showButton();
  if(!this.active)return;
  if(this.game.state!=='fighting'||this.game.fightingEnemy!==this.enemy){
   this.clear();return;
  }
  this.elapsed+=Math.min(.06,dt);
  const t=clamp(this.elapsed/DURATION),ease=smooth(t);
  for(const actor of this.actors){
   const {model,i,fromX,fromZ,toX,toZ}=actor;
   model.position.x=THREE.MathUtils.lerp(fromX,toX,ease);
   model.position.z=THREE.MathUtils.lerp(fromZ,toZ,ease);
   model.position.y=Math.abs(Math.sin(this.elapsed*13+i))*.065;
   if(actor.rig)actor.rig.step(Math.min(.06,dt));
   else updateCharacterModel3D(model,this.elapsed,true);
   if(t>.94)model.scale.setScalar(Math.max(.001,(1-t)/.06));
  }
  for(let j=0;j<this.puffs.length;j++){
   const a=this.actors[(j*3)%this.actors.length]?.model;
   const puff=this.puffs[j];
   if(!a)continue;
   const phase=(t*2+j*.19)%1;
   puff.position.set(a.position.x+Math.sin(this.elapsed+j)*.27,
    1.35+phase*1.15,a.position.z+.16);
   puff.scale.setScalar(.16+phase*.53);
   puff.visible=t>.08&&t<.92;
  }
  // CRS visibly retreat before the scripted, prepaid arcade clearance.
  // Casualty maths elsewhere remains unchanged.
  if(t>.42){
   const retreat=(t-.42)/.58;
   for(const [i,o] of (this.enemy.officers||[]).entries()){
    if(o.parent!==this.enemy.meshGroup)continue;
    if(!o.userData.marseilleOrigin)
     o.userData.marseilleOrigin={x:o.position.x,z:o.position.z,r:o.rotation.y};
    const orig=o.userData.marseilleOrigin,side=i%2?-1:1;
    o.position.x=orig.x+side*retreat*1.6;
    o.position.z=orig.z-retreat*5.0;
    o.rotation.y=orig.r+Math.PI*retreat;
   }
  }
  if(t>=1){
   const enemy=this.enemy;
   this.clear({restorePolice:false});
   if(this.game.state==='fighting'&&this.game.fightingEnemy===enemy){
    enemy.remainingCount=0;
    this.game.fightElapsed=Math.max(this.game.fightElapsed,this.game.minFightDuration);
    this.game.fightTimer=this.game.fightInterval;
    this.game.updateFight(.001);
   }
  }
 }
 clear({restorePolice=true}={}){
  if(restorePolice && this.enemy?.officers){
   for(const o of this.enemy.officers){
    const orig=o.userData.marseilleOrigin;
    if(!orig)continue;
    o.position.x=orig.x;o.position.z=orig.z;o.rotation.y=orig.r;
    delete o.userData.marseilleOrigin;
   }
  }
  this.active=false;this.pending=false;
  for(const {model,rig} of this.actors){
   model.parent?.remove(model);
   if(rig)rig.dispose();
   else disposeCharacterModel3D(model);
  }
  this.actors=[];
  for(const p of this.puffs||[])p.parent?.remove(p);
  this.puffs=[];
  this.puffGeo?.dispose();this.puffGeo=null;
  for(const mat of this.puffMat||[])mat.dispose();
  this.puffMat=[];
  this.enemy=null;this.elapsed=0;
  this.showButton();
 }
}
