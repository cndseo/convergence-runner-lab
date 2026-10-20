import * as THREE from 'three';

// Cinematic fictional fireworks for CONVERGENCE. No real-world launch physics.
// Shared radial textures and capped sprites keep the effect mobile-friendly.
const WHITE=0xfffae4, AMBER=0xffb54d, ORANGE=0xff7233, RED=0xe84634;
const colors=[WHITE,AMBER,ORANGE,0xffd58a];
const v=new THREE.Vector3();
const tv=new THREE.Vector3();
function softTexture(){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=64;
 const ctx=canvas.getContext('2d');
 const g=ctx.createRadialGradient(32,32,0,32,32,32);
 g.addColorStop(0,'rgba(255,255,255,1)');
 g.addColorStop(.13,'rgba(255,255,255,.95)');
 g.addColorStop(.35,'rgba(255,255,255,.4)');
 g.addColorStop(.7,'rgba(255,255,255,.08)');
 g.addColorStop(1,'rgba(255,255,255,0)');
 ctx.fillStyle=g;ctx.fillRect(0,0,64,64);
 return new THREE.CanvasTexture(canvas);
}
function smokeTexture(){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=64;
 const ctx=canvas.getContext('2d');
 const g=ctx.createRadialGradient(32,32,1,32,32,31);
 g.addColorStop(0,'rgba(244,239,231,.5)');
 g.addColorStop(.5,'rgba(214,209,198,.32)');
 g.addColorStop(1,'rgba(176,178,177,0)');
 ctx.fillStyle=g;ctx.fillRect(0,0,64,64);
 return new THREE.CanvasTexture(canvas);
}
export class GenzFireworks {
 constructor(game){
  this.game=game;this.group=new THREE.Group();this.group.name='GenZ-cinematic-fireworks';
  game.scene.add(this.group);
  this.bursts=[];this.active=0;this.shooter=null;
  this.charges=0;this.demoCharges=0;this.pending=false;this.lastFired=-100;
  this.elapsed=0;this.launches=0;this.suppressed=0;
  this.glowTex=softTexture();this.smokeTex=smokeTexture();
  this.glows=colors.map(color=>new THREE.SpriteMaterial({
   map:this.glowTex,color,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false
  }));
  this.smokeMat=new THREE.SpriteMaterial({map:this.smokeTex,color:0xb4b9b8,
   transparent:true,opacity:.45,depthWrite:false});
  this.button=document.createElement('button');
  this.button.id='genz-ammo-button';this.button.type='button';
  this.button.style.display='none';
  this.button.addEventListener('click',()=>this.activate());
  game.ui.container.appendChild(this.button);
 }
 available(){return this.charges+this.demoCharges;}
 syncPurchasedCharges(count){
  if(Number.isSafeInteger(count)&&count>=0)this.charges=count;
  this.showButton();
 }
 addGenz(amount){this.active=Math.min(12,this.active+Math.max(0,amount));this.showButton();}
 showButton(){
  const g=this.game;
  const visible=g.mode==='campaign'&&['playing','fighting'].includes(g.state)&&
   !!g.crowdManager?.playerStickmen?.length;
  const empty=this.available()<=0;
  const cooldown=this.elapsed-this.lastFired<1.05;
  this.button.style.display=visible?'block':'none';
  this.button.classList.toggle('genz-empty',empty);
  this.button.classList.toggle('genz-pending',this.pending);
  this.button.disabled=this.pending||(!empty&&cooldown);
  this.button.setAttribute('aria-label',empty
   ?'Munitions GenZ épuisées, ouvrir la boutique'
   :'Tirer un feu d’artifice GenZ, '+this.available()+' munitions');
  this.button.textContent=empty?'GENZ · 0  RECHARGER'
   :this.pending?'GENZ · PRÉPARATION…'
   :'GENZ · TIRER  ×'+this.available();
 }
 openShop(){
  this.game.challengeHub?.openPremiumInGame();
 }
 findShooter(){
  const runners=this.game.crowdManager?.playerStickmen?.filter((r,i)=>i>0&&r.parent)||[];
  if(!runners.length)return null;
  // Never change the approved lead character P02. Prefer recruited GenZ.
  let shooter=runners.find(r=>r.userData.bonusFaction==='genz');
  if(!shooter){
   // Carrying GenZ ammunition provides a visible launcher role on an ally.
   shooter=runners.find(r=>!r.userData.bonusFaction)||runners[0];
   shooter.userData.genzLauncher=true;
  }
  return shooter;
 }
 pickEnemy(){
  const g=this.game;
  if(g.state==='fighting'&&g.fightingEnemy?.remainingCount>0)return g.fightingEnemy;
  return [...g.levelGenerator.enemies,...(g.levelGenerator.boss?[g.levelGenerator.boss]:[])]
   .filter(e=>!e.defeated&&e.meshGroup&&e.z-g.trackZ>0&&e.z-g.trackZ<110)
   .sort((a,b)=>a.z-b.z)[0]||null;
 }
 aim(){
  const g=this.game,enemy=this.pickEnemy(),end=new THREE.Vector3();
  if(enemy)enemy.meshGroup.getWorldPosition(end);
  else end.set(g.playerX*.3,.2,-g.trackZ-38);
  end.y=Math.max(.7,end.y+1.4);
  return {end,enemy};
 }
 async activate(){
  const g=this.game;
  if(g.mode!=='campaign'||!['playing','fighting'].includes(g.state)||this.pending)return false;
  if(this.available()<=0){this.openShop();return false;}
  if(this.elapsed-this.lastFired<1.05||!this.findShooter()||g.marseille?.active||g.marseille?.pending)return false;
  const runId=g.runId;
  this.pending=true;this.showButton();
  try{
   const consumed=await g.challengeHub.consumeGenzAmmo();
   if(!consumed){
    g.ui?.showFloatingText?.('MUNITIONS INDISPONIBLES','#dce6ed');
    return false;
   }
   // Credit is spent once by the server even if play ends during a slow network response.
   if(g.runId!==runId||!['playing','fighting'].includes(g.state))return false;
   return this.fire();
  }catch(e){
   console.warn('GenZ firework unavailable:',e?.message||e);return false;
  }finally{this.pending=false;this.showButton();}
 }
 sprite(material,x,y,z,size){
  const mesh=new THREE.Sprite(material);mesh.position.set(x,y,z);
  mesh.scale.set(size,size,1);this.group.add(mesh);return mesh;
 }
 placeAlong(shot,t,out){
  out.lerpVectors(shot.start,shot.end,t);
  out.y+=Math.sin(Math.PI*t)*(2.1+Math.min(5,shot.distance*.065));
  return out;
 }
 fire(){
  const g=this.game,shooter=this.findShooter();
  if(!shooter||g.mode!=='campaign'||!['playing','fighting'].includes(g.state))return false;
  const start=new THREE.Vector3();shooter.getWorldPosition(start);start.y+=1.2;
  const {end,enemy}=this.aim();
  const distance=start.distanceTo(end);
  shooter.userData.genzFireAnimation=1.1;
  shooter.rotation.z=-.18;
  this.shooter=shooter;
  const core=this.sprite(this.glows[0],start.x,start.y,start.z,.75);
  const halo=this.sprite(this.glows[1],start.x,start.y,start.z,1.4);
  const tail=[];
  for(let i=0;i<10;i++)tail.push(this.sprite(this.glows[i<4?0:i<7?1:2],start.x,start.y,start.z,.5));
  this.bursts.push({kind:'shot',core,halo,tail,start,end,enemy,
   distance,progress:0,ttl:1.25,smokeTick:0});
  this.launches++;this.lastFired=this.elapsed;
  g.audio?.playLbdShot?.();
  this.showButton();return true;
 }
 smoke(position,count=1){
  for(let i=0;i<count&&this.bursts.length<120;i++){
   const mesh=this.sprite(this.smokeMat,position.x+(Math.random()-.5)*.3,
    position.y+(Math.random()-.5)*.3,position.z+(Math.random()-.5)*.3,.5+Math.random()*.55);
   this.bursts.push({kind:'smoke',mesh,velocity:new THREE.Vector3(
    (Math.random()-.5)*.12,.12+Math.random()*.18,(Math.random()-.5)*.12),
    ttl:.65+Math.random()*.9,maximum:1.55,base:mesh.scale.x});
  }
 }
 explode(position){
  const flash=this.sprite(this.glows[0],position.x,position.y,position.z,2.8);
  this.bursts.push({kind:'flash',mesh:flash,ttl:.23,maximum:.23});
  const count=27;
  for(let i=0;i<count&&this.bursts.length<120;i++){
   const angle=2.399963*i,latitude=Math.asin(-.8+1.6*(i+.5)/count);
   const r=3.8+Math.random()*3.7;
   const vx=Math.cos(angle)*Math.cos(latitude)*r;
   const vy=Math.sin(latitude)*r;
   const vz=Math.sin(angle)*Math.cos(latitude)*r;
   const mesh=this.sprite(this.glows[i%4],position.x,position.y,position.z,.29+Math.random()*.30);
   this.bursts.push({kind:'spark',mesh,velocity:new THREE.Vector3(vx,vy,vz),
    ttl:.45+Math.random()*.55,maximum:1,base:mesh.scale.x});
  }
  this.smoke(position,8);
  // Arcade response to an impact: briefly interrupts the next LBD shot.
  const lbd=this.game.lbdSystem;
  if(lbd)lbd.nextFire=Math.max(lbd.nextFire,2.6);
  this.suppressed++;
  this.game.ui?.showFloatingText?.('GENZ · TIRS LBD SUSPENDUS','#ffca75');
  this.game.audio?.playFightHit?.();
 }
 remove(item){
  for(const mesh of [item.mesh,item.core,item.halo,...(item.tail||[])])if(mesh)mesh.removeFromParent();
 }
 clear(){
  for(const fx of this.bursts)this.remove(fx);
  this.bursts.length=0;this.active=0;this.elapsed=0;this.lastFired=-100;
  this.launches=0;this.suppressed=0;
  if(this.shooter)this.shooter.rotation.z=0;
  this.shooter=null;this.pending=false;this.showButton();
 }
 update(dt){
  const state=this.game.state;
  if(!['playing','fighting'].includes(state))return;
  const step=Math.max(0,Math.min(dt,.06));
  this.elapsed+=step;this.showButton();
  if(this.shooter){
   this.shooter.userData.genzFireAnimation=Math.max(0,(this.shooter.userData.genzFireAnimation||0)-step);
   if(this.shooter.userData.genzFireAnimation===0){this.shooter.rotation.z=0;this.shooter=null;}
  }
  for(let i=this.bursts.length-1;i>=0;i--){
   const fx=this.bursts[i];fx.ttl-=step;
   if(fx.kind==='shot'){
    // Keep the actual flight visually smooth even with highly compressed runner distances.
    fx.progress=Math.min(1,fx.progress+step/1.18);
    const t=fx.progress;
    this.placeAlong(fx,t,fx.core.position);
    fx.halo.position.copy(fx.core.position);
    for(let j=0;j<fx.tail.length;j++){
     const s=Math.max(0,t-(j+1)*.018);
     this.placeAlong(fx,s,fx.tail[j].position);
     const fade=1-j/fx.tail.length;
     fx.tail[j].scale.setScalar(.55*fade+.06);
    }
    fx.smokeTick+=step;
    if(fx.smokeTick>.11){fx.smokeTick=0;this.smoke(fx.core.position,1);}
    if(t>=1){this.explode(fx.end);fx.ttl=0;}
   }else if(fx.kind==='spark'){
    fx.mesh.position.addScaledVector(fx.velocity,step);
    fx.velocity.y-=2.8*step;
    fx.mesh.scale.setScalar(Math.max(.01,fx.base*Math.max(0,fx.ttl/fx.maximum)));
   }else if(fx.kind==='flash'){
    const factor=Math.max(0,fx.ttl/fx.maximum);
    fx.mesh.scale.setScalar(2.8+(1-factor)*4.5);
    if(factor<.2)fx.mesh.scale.setScalar(.001);
   }else if(fx.kind==='smoke'){
    fx.mesh.position.addScaledVector(fx.velocity,step);
    const time=1-Math.max(0,fx.ttl/fx.maximum);
    fx.mesh.scale.setScalar(fx.base*(1+1.5*time)*Math.min(1,fx.ttl/.5));
   }
   if(fx.ttl<=0){this.remove(fx);this.bursts.splice(i,1);}
  }
 }
}