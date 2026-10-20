import * as THREE from 'three';
import {RUSH_GROUPS,RUSH_SECONDS,rushRoute,sampleRush,policeRetreat,clamp01} from './marseilleMotion.mjs';
import {preloadMarseilleSprites,createMarseilleSprite,stepMarseilleSprite,
 disposeMarseilleSprite,createSmokeTexture} from './marseilleSprites.js';

export class MarseilleReinforcements {
 constructor(game){
  this.game=game;this.active=false;this.pending=false;this.demoCharges=0;
  this.charges=0;this.elapsed=0;this.actors=[];this.enemy=null;this.police=[];this.puffs=[];
  this.generation=0;this.impactPulse=0;
  this.button=document.createElement('button');
  this.button.id='marseille-support-button';this.button.type='button';
  this.button.setAttribute('aria-label','Déclencher les renforts marseillais');
  this.button.style.display='none';
  this.button.addEventListener('click',()=>this.activate());
  game.ui.container.appendChild(this.button);
  // Preload these small shared textures while the menu is open.
  this.preload().catch(()=>{});
 }
 preload(){return preloadMarseilleSprites();}
 discardAssets(){/* Cached textures live for the game session, not one attack. */}
 available(){return this.charges+this.demoCharges;}
 showButton(){
  const g=this.game;
  const visible=g.mode==='campaign' && g.state==='fighting' &&
   (this.available()>0||this.pending||this.active);
  this.button.style.display=visible?'block':'none';
  this.button.disabled=this.pending||this.active;
  this.button.textContent=this.active?'RENFORTS EN ACTION…':
   this.pending?'VÉRIFICATION…':'RENFORT MARSEILLAIS × '+this.available();
 }
 async activate(){
  const g=this.game;
  if(g.mode!=='campaign'||g.state!=='fighting'||!g.fightingEnemy||
   this.active||this.pending||this.available()<=0)return false;
  this.pending=true;this.showButton();
  const enemy=g.fightingEnemy,runId=g.runId,generation=this.generation;
  const current=()=>g.runId===runId&&g.mode==='campaign'&&g.state==='fighting'&&
   g.fightingEnemy===enemy&&this.generation===generation;
  try{
   const [artwork]=await Promise.all([this.preload(),g.audio.preloadMarseilleAttack()]);
   if(!current())return false;
   const granted=await g.challengeHub.consumeMarseilleCharge();
   if(!granted||!current())return false;
   this.begin(enemy,artwork);return true;
  }catch(error){
   console.warn('Marseille support unavailable:',error?.message||error);
   g.ui.showFloatingText('Renfort indisponible, réessayez.','#b5dfff');
   return false;
  }finally{if(this.generation===generation){this.pending=false;this.showButton();}}
 }
 begin(enemy,artwork){
  this.clear();
  this.game.lbdSystem?.clear();
  this.active=true;this.enemy=enemy;this.artwork=artwork;this.elapsed=0;
  this.targetZ=-enemy.z;
  for(let i=0;i<RUSH_GROUPS;i++){
   const actor=createMarseilleSprite(artwork,i);
   actor.route=rushRoute(i,this.targetZ);actor.lane=actor.route.lane;actor.i=i;
   this.game.scene.add(actor.model);this.actors.push(actor);
   stepMarseilleSprite(actor,sampleRush(actor.route,0),0,0,artwork,this.game.camera);
  }
  // Detach the real officers, retaining their equipped meshes and animation mixers.
  // The ordinary casualty renderer cannot delete them while they retreat.
  const officers=enemy.officers||(enemy.isBoss?this.game.levelGenerator.boss?.officers:[])||[];
  for(const [i,o] of officers.entries()){
   if(!o.parent||o.userData.combatRetired)continue;
   const parent=o.parent,local=o.position.clone(),rotation=o.rotation.clone();
   const scale=o.scale.clone();
   o.updateWorldMatrix(true,true);this.game.scene.attach(o);
   const origin={x:o.position.x,y:o.position.y,z:o.position.z,yaw:o.rotation.y};
   o.userData.marseilleOrigin=origin;
   const limbs=[];
   o.traverse(b=>{
    if(!b.isBone)return;
    const name=b.name.toLowerCase().replace(/[^a-z0-9]/g,'');
    if(/upperarm|leftarm|rightarm|upleg|thigh|^leftleg$|^rightleg$/.test(name))limbs.push({bone:b,
     side:/left|^l|lupper|lthigh|lupleg/.test(name)?1:-1,arm:/arm/.test(name),knee:/^(left|right)leg$/.test(name)});
   });
   this.police.push({o,i,parent,local,rotation,scale,origin,limbs,started:false});
  }
  this.smokeTexture=createSmokeTexture();
  for(let i=0;i<30;i++){
   const p=new THREE.Sprite(new THREE.SpriteMaterial({map:this.smokeTexture,
    color:i%2?0xe9f3ff:0x318fed,transparent:true,opacity:0,depthWrite:false}));
   p.name='MARSEILLE_BLUE_WHITE_SMOKE_'+i;
   this.game.scene.add(p);this.puffs.push({sprite:p,age:10+i*.13,life:1.15+(i%5)*.13});
  }
  this.game.audio.playMarseilleAttack();
  this.game.ui.screenShake(5);
  this.showButton();
 }
 update(dt){
  this.showButton();
  if(!this.active)return;
  const g=this.game;
  if(g.state==='paused')return; // Pause never cancels or consumes an extra charge.
  if(g.mode!=='campaign'||g.state!=='fighting'||g.fightingEnemy!==this.enemy){
   this.clear();return;
  }
  const delta=Math.min(.06,Math.max(0,dt));
  this.elapsed+=delta;
  const t=this.elapsed;
  this.impactPulse=Math.max(0,1-Math.abs(t-3.1)/.5)*.65;
  this.phase=t<2.5?'arrival':t<3.5?'surge':t<5.9?'breach':'exit';
  for(const actor of this.actors){
   const pose=sampleRush(actor.route,t);
   actor.pose=pose;
   stepMarseilleSprite(actor,pose,t,delta,this.artwork,g.camera);
  }
  for(const p of this.police){
   const state=policeRetreat(p.i,t,p.origin);
   p.started=state.started;
   p.o.position.set(state.x,state.y,state.z);
   p.o.rotation.y=state.yaw;
   if(state.started){
    const running=clamp01((t-2.48-p.i*.03)/.7);
    for(const l of p.limbs){
     const swing=Math.sin(state.phase)*l.side;
     l.bone.rotation.x+=(l.knee?Math.max(0,-swing)*.9:swing*(l.arm?-.42:.64))*running;
    }
    // The fallback officers have explicit articulated limb groups.
    p.o.userData.marseilleRetreat=true;
   }
  }
  for(let i=0;i<this.puffs.length;i++){
   const p=this.puffs[i],actor=this.actors[(i*7)%this.actors.length];
   p.age+=delta;
   if(p.age<0)continue;
   if(p.age>p.life){
    if(t>6.9||!actor.model.visible){p.sprite.material.opacity=0;continue;}
    p.age=0;
    p.sprite.position.copy(actor.model.position);
    p.sprite.position.x+=Math.sin(i*4.1)*.7;p.sprite.position.y=.45+(i%3)*.35;
   }
   const a=p.age/p.life;
   if(t<.35 || !actor.model.visible){p.sprite.material.opacity=0;continue;}
   p.sprite.position.x+=Math.sin(i*3.7)*delta*.35;
   p.sprite.position.y+=delta*.55;p.sprite.position.z+=delta*.15;
   p.sprite.scale.setScalar(.3+a*1.8);
   p.sprite.material.opacity=Math.sin(a*Math.PI)*.23*clamp01((8.3-t)/1.1);
  }
  if(t>=RUSH_SECONDS)this.finish();
 }
 finish(){
  const g=this.game,enemy=this.enemy;
  this.clear({restorePolice:false});
  if(g.state==='fighting'&&g.fightingEnemy===enemy){
   enemy.remainingCount=0;
   g.fightElapsed=Math.max(g.fightElapsed,g.minFightDuration);
   g.fightTimer=g.fightInterval;
   g.updateFight(.001);
  }
 }
 clear({restorePolice=true}={}){
  this.game.audio.stopMarseilleAttack();
  this.generation++;
  for(const p of this.police){
   delete p.o.userData.marseilleOrigin;delete p.o.userData.marseilleRetreat;
   if(restorePolice){
    p.parent.add(p.o);p.o.position.copy(p.local);p.o.rotation.copy(p.rotation);p.o.scale.copy(p.scale);
   }else {p.o.visible=false;p.o.removeFromParent();} // After their complete on-screen escape.
  }
  this.police=[];
  for(const actor of this.actors)disposeMarseilleSprite(actor);
  this.actors=[];
  for(const p of this.puffs){p.sprite.removeFromParent();p.sprite.material.dispose();}
  this.puffs=[];this.smokeTexture?.dispose();this.smokeTexture=null;
  this.active=false;this.pending=false;this.enemy=null;this.elapsed=0;this.impactPulse=0;
  this.showButton();
 }
}
