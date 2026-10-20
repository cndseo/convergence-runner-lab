import * as THREE from 'three';
// Highly visible, purely fictional arcade fireworks; no real-world weapon mechanics.
const palette=[0xff40a8,0x26f9f0,0xffe35b,0xffffff];
export class GenzFireworks {
 constructor(game){
  this.game=game;this.group=new THREE.Group();this.group.name='GenZ-visible-arcade-fireworks';
  game.scene.add(this.group);
  this.bursts=[];this.clock=0;this.active=0;this.shooter=null;
  this.charges=0;this.demoCharges=0;this.pending=false;this.lastFired=0;
  this.button=document.createElement('button');this.button.id='genz-ammo-button';this.button.type='button';
  this.button.setAttribute('aria-label','Tirer une munition GenZ');
  this.button.style.display='none';this.button.addEventListener('click',()=>this.activate());
  game.ui.container.appendChild(this.button);
  this.ball=new THREE.SphereGeometry(.16,8,6);
  this.materials=palette.map(color=>new THREE.MeshBasicMaterial({color,depthTest:false,depthWrite:false}));
  this.sparkGeo=new THREE.SphereGeometry(.075,5,4);
  this.flashGeo=new THREE.SphereGeometry(.5,9,7);
 }
 clear(){
  for(const fx of this.bursts){this.group.remove(fx.mesh);if(fx.trail)this.group.remove(fx.trail);}
  this.bursts.length=0;this.clock=0;this.active=0;
  if(this.shooter)this.shooter.rotation.z=0;
  this.shooter=null;this.showButton();
 }
 available(){return this.charges+this.demoCharges;}
 syncPurchasedCharges(count){
  if(Number.isSafeInteger(count)&&count>=0)this.charges=count;
  this.showButton();
 }
 showButton(){
  const g=this.game,ready=g.mode==='campaign'&&g.state==='fighting'&&!!g.fightingEnemy&&
   this.active>0&&!this.pending&&Date.now()-this.lastFired>=1200&&this.available()>0&&!g.marseille?.active&&!g.marseille?.pending;
  this.button.style.display=ready?'block':'none';
  this.button.disabled=!ready;
  this.button.textContent=ready?'GENZ · TIRER ('+this.available()+')':'';
 }
 addGenz(amount){this.active=Math.min(12,this.active+Math.max(0,amount));this.showButton();}
 async activate(){
  const g=this.game;
  if(g.mode!=='campaign'||g.state!=='fighting'||!g.fightingEnemy||
     this.pending||this.active<=0||this.available()<=0||g.marseille?.active)return false;
  this.pending=true;this.showButton();
  const enemy=g.fightingEnemy,runId=g.runId;
  try{
   const consumed=await g.challengeHub.consumeGenzAmmo();
   if(!consumed)return false;
   if(g.runId!==runId||g.fightingEnemy!==enemy||g.state!=='fighting')return false;
   return this.fire();
  }catch(e){console.warn('GenZ ammo unavailable:',e?.message||e);return false;}
  finally{this.pending=false;this.showButton();}
 }
 pickEnemy(){
  const g=this.game;
  // During a close encounter the old >2m filter excluded the CRS entirely.
  // This is only a visible arcade effect; no tactical damage is changed.
  if(g.state==='fighting' && g.fightingEnemy?.remainingCount>0)
   return g.fightingEnemy;
  return [...g.levelGenerator.enemies,...(g.levelGenerator.boss?[g.levelGenerator.boss]:[])]
   .filter(e=>!e.defeated&&e.z-g.trackZ>2&&e.z-g.trackZ<70)
   .sort((a,b)=>a.z-b.z)[0];
 }
 fire(){
  const g=this.game;if(g.mode!=='campaign'||this.active<=0||!g.crowdManager?.playerGroup)return false;
  const enemy=this.pickEnemy();if(!enemy)return false;
  const runners=g.crowdManager.playerStickmen.filter(r=>r.userData.bonusFaction==='genz'&&r.parent);
  if(!runners.length)return false;
  const shooter=runners[0]||g.crowdManager.playerStickmen[Math.min(2,g.crowdManager.playerStickmen.length-1)];
  if(!shooter)return false;
  this.shooter=shooter;this.shooter.userData.genzFireAnimation=.9;
  shooter.rotation.z=-.20;
  const start=new THREE.Vector3(),end=new THREE.Vector3();
  shooter.getWorldPosition(start);start.y+=1.4;
  enemy.meshGroup.getWorldPosition(end);end.y+=1.75;
  // Large bright stylized projectile with an animated trail and burst.
  const mesh=new THREE.Mesh(this.ball,this.materials[1]);mesh.scale.setScalar(2.3);
  mesh.position.copy(start);this.group.add(mesh);
  const trail=new THREE.Mesh(new THREE.CylinderGeometry(.07,.14,1.9,7),this.materials[0]);
  trail.position.copy(start);this.group.add(trail);
  this.lastFired=Date.now();this.bursts.push({kind:'shot',mesh,trail,start,end,progress:0,ttl:1.65});
  g.audio?.playLbdShot?.();
  return true;
 }
 explode(position){
  const flash=new THREE.Mesh(this.flashGeo,this.materials[2]);
  flash.position.copy(position);this.group.add(flash);
  this.bursts.push({kind:'flash',mesh:flash,ttl:.32,maximum:.32});
  for(let i=0;i<18&&this.bursts.length<45;i++){
   const mesh=new THREE.Mesh(this.sparkGeo,this.materials[i%4]);
   mesh.position.copy(position);this.group.add(mesh);
   const angle=i*Math.PI*2/18;
   const velocity=new THREE.Vector3(Math.cos(angle)*(2.8+i%4),((i%5)-2)*1.4,Math.sin(angle)*(2.8+i%4));
   this.bursts.push({kind:'spark',mesh,velocity,ttl:.52,maximum:.52});
  }
 }
 update(dt){
  const state=this.game.state;
  if(state==='paused'||state==='menu'||state==='win'||state==='lose')return;
  const step=Math.min(dt,.06);this.clock+=step;
  this.showButton();
  if(this.shooter){
   this.shooter.userData.genzFireAnimation=Math.max(0,(this.shooter.userData.genzFireAnimation||0)-step);
   if(this.shooter.userData.genzFireAnimation===0){this.shooter.rotation.z=0;this.shooter=null;}
  }
  for(let i=this.bursts.length-1;i>=0;i--){
   const fx=this.bursts[i];fx.ttl-=step;
   if(fx.kind==='shot'){
    fx.progress=Math.min(1,fx.progress+step*.88);
    const t=fx.progress;
    fx.mesh.position.lerpVectors(fx.start,fx.end,t);
    fx.mesh.position.y+=Math.sin(t*Math.PI)*3.1;
    const back=fx.start.clone().lerp(fx.end,Math.max(0,t-.045));
    back.y+=Math.sin(Math.max(0,t-.045)*Math.PI)*3.1;
    fx.trail.position.copy(fx.mesh.position).add(back).multiplyScalar(.5);
    const axis=fx.mesh.position.clone().sub(back).normalize();
    fx.trail.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),axis);
    fx.trail.scale.y=Math.max(.3,fx.mesh.position.distanceTo(back)/1.9);
    if(t>=1){
     this.explode(fx.end);fx.ttl=0;
     if(this.game.lbdSystem)
       this.game.lbdSystem.nextFire=Math.max(this.game.lbdSystem.nextFire,2.6);
     this.game.ui?.showFloatingText?.('GENZ · TIRS LBD SUSPENDUS','#26f9f0');
    }
   }else if(fx.kind==='spark'){
    fx.mesh.position.addScaledVector(fx.velocity,step);
    fx.velocity.y-=2.5*step;
    fx.mesh.scale.setScalar(Math.max(.03,fx.ttl/fx.maximum));
   }else if(fx.kind==='flash'){
    fx.mesh.scale.setScalar(1.2+(1-fx.ttl/fx.maximum)*2.8);
   }
   if(fx.ttl<=0){
    this.group.remove(fx.mesh);if(fx.trail)this.group.remove(fx.trail);
    this.bursts.splice(i,1);
   }
  }
 }
}
