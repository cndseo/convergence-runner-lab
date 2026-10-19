import * as THREE from 'three';

// Fictional arcade reinforcement sequence. No real-world tactics.
// Server-charged consumables are applied in campaign only, never in daily score.
const BASE=import.meta.env.BASE_URL+'assets/characters/';
const loader=new THREE.TextureLoader();
export class MarseilleReinforcements{
 constructor(game){
  this.game=game;this.active=false;this.pending=false;this.demoCharges=0;
  this.charges=0;this.elapsed=0;this.sprites=[];this.textures=null;
  this.button=document.createElement('button');
  this.button.id='marseille-support-button';this.button.type='button';
  this.button.textContent='RENFORT MARSEILLAIS';
  this.button.setAttribute('aria-label','Déclencher les renforts marseillais');
  this.button.style.display='none';
  this.button.addEventListener('click',()=>this.activate());
  game.ui.container.appendChild(this.button);
 }
 async preload(){
  if(this.textures)return this.textures;
  if(!this.loading){
   this.loading=Promise.all(['marseille-front.webp','marseille-back.webp'].map(f=>loader.loadAsync(BASE+f)))
   .then(([front,back])=>{
    for(const t of [front,back])t.colorSpace=THREE.SRGBColorSpace;
    this.textures={front,back};
    return this.textures;
   }).catch(err=>{this.loading=null;console.warn('Renfort art missing',err.message);return null;});
  }
  return this.loading;
 }
 available(){return this.charges+this.demoCharges;}
 showButton(){
  const g=this.game;
  const visible=g.mode==='campaign' && g.state==='fighting' && (this.available()>0||this.pending||this.active);
  this.button.style.display=visible?'block':'none';
  this.button.disabled=this.pending||this.active;
  this.button.textContent=this.active?'RENFORTS EN APPROCHE…':this.pending?'VÉRIFICATION…':'RENFORT MARSEILLAIS · '+this.available();
 }
 async activate(){
  const g=this.game;
  if(g.mode!=='campaign'||g.state!=='fighting'||!g.fightingEnemy||this.active||this.pending||this.available()<=0)return false;
  this.pending=true;this.showButton();
  const enemy=g.fightingEnemy,runId=g.runId;
  try{
   const artwork=await this.preload();
   if(!artwork || g.runId!==runId || g.state!=='fighting')return false;
   const granted=await g.challengeHub.consumeMarseilleCharge();
   if(!granted || g.runId!==runId || g.fightingEnemy!==enemy)return false;
   this.begin(enemy,artwork);
   return true;
  }finally{this.pending=false;this.showButton();}
 }
 begin(enemy,artwork){
  this.game.lbdSystem?.clear();
  this.active=true;this.enemy=enemy;this.elapsed=0;this.spriteStartZ=-this.game.trackZ+1.0;
  this.spriteTargetZ=-enemy.z+.5;
  this.sprites=[];
  for(let i=0;i<6;i++){
   const texture=i%2?artwork.back:artwork.front;
   const sprite=new THREE.Sprite(new THREE.SpriteMaterial({
    map:texture,transparent:true,alphaTest:.12,depthWrite:false
   }));
   sprite.name='MARSEILLE_REINFORCEMENTS_'+i;
   sprite.scale.set(3.2,3.65,1);
   const side=i%2?-1:1;
   sprite.position.set(side*(7.5+i*.5),1.75,this.spriteStartZ+(i%3)*1.5);
   this.game.scene.add(sprite);
   this.sprites.push({sprite,side,i});
  }
  this.button.textContent='RENFORTS MARSEILLAIS !';
  this.game.ui.showFloatingText('RENFORTS MARSEILLAIS !','#82c7ff');
  this.game.ui.screenShake(7);
  this.showButton();
 }
 update(dt){
  this.showButton();
  if(!this.active)return;
  if(this.game.state!=='fighting'||this.game.fightingEnemy!==this.enemy){this.clear();return;}
  this.elapsed+=Math.min(.06,dt);
  const t=Math.min(1,this.elapsed/4.4);
  const ease=t*t*(3-2*t);
  for(const item of this.sprites){
   const {sprite,side,i}=item;
   sprite.position.x=side*(7.5+i*.5)*(1-ease)+side*(.6+(i%3)*.5)*ease;
   sprite.position.z=(this.spriteStartZ+(i%3)*1.5)*(1-ease)+this.spriteTargetZ*ease;
   sprite.position.y=1.75+Math.abs(Math.sin(this.elapsed*11+i))*.19;
   sprite.material.opacity=t>.8?Math.max(0,(1-t)/.20):1;
  }
  // The police retreat as a cinematic game effect; no encounter casualties
  // are changed until the animation has ended and the front is cleared.
  if(t>.42){
   const retreat=(t-.42)/.58;
   const officers=this.enemy.officers||[];
   for(const [i,o] of officers.entries()){
    if(o.parent!==this.enemy.meshGroup)continue;
    if(!o.userData.marseilleOrigin)o.userData.marseilleOrigin={x:o.position.x,z:o.position.z,r:o.rotation.y};
    const orig=o.userData.marseilleOrigin,side=i%2?-1:1;
    o.position.x=orig.x+side*retreat*1.6;
    o.position.z=orig.z-retreat*5.0;
    o.rotation.y=orig.r+Math.PI*retreat;
   }
  }
  if(t>=1){
   const enemy=this.enemy;
   this.clear();
   if(this.game.state==='fighting' && this.game.fightingEnemy===enemy){
    enemy.remainingCount=0;this.game.fightElapsed=Math.max(this.game.fightElapsed,this.game.minFightDuration);
    this.game.fightTimer=this.game.fightInterval;
    this.game.updateFight(.001);
   }
  }
 }
 clear(){
  this.active=false;this.pending=false;
  for(const {sprite} of this.sprites){sprite.parent?.remove(sprite);sprite.material.dispose();}
  this.sprites=[];this.enemy=null;this.elapsed=0;
  this.showButton();
 }
}
