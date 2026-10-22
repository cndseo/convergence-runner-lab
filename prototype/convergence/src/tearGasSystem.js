import * as THREE from 'three';

// Arcade-only tear gas: stylized projectile, cloud, visibility and movement effect.
const sphere = new THREE.SphereGeometry(.17,7,6);
const smokeGeo = new THREE.PlaneGeometry(1,1);
function smokeTexture(){
 const c=document.createElement('canvas');c.width=c.height=64;
 const x=c.getContext('2d'),g=x.createRadialGradient(32,32,3,32,32,31);
 g.addColorStop(0,'rgba(239,248,247,0.78)');
 g.addColorStop(.55,'rgba(205,225,228,0.50)');
 g.addColorStop(1,'rgba(205,225,228,0)');
 x.fillStyle=g;x.fillRect(0,0,64,64);
 return new THREE.CanvasTexture(c);
}
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
export class TearGasSystem {
 constructor(game){
  this.game=game;
  this.root=new THREE.Group();this.root.name='tear-gas-arcade-fx';
  game.scene.add(this.root);
  this.smokeMat=new THREE.MeshBasicMaterial({map:smokeTexture(),transparent:true,depthWrite:false,side:THREE.DoubleSide});
  this.grenadeMat=new THREE.MeshBasicMaterial({color:0xc3dee0});
  this.shells=[];this.clouds=[];this.clock=0;this.nextLaunch=6.0;this.stats={launched:0,clouds:0};
  this.slowFactor=1;
 }
 clear(){
  for(const shell of this.shells)this.root.remove(shell.mesh);
  for(const cloud of this.clouds){for(const p of cloud.parts)this.root.remove(p.mesh);}
  this.shells=[];this.clouds=[];this.clock=0;this.nextLaunch=6;this.slowFactor=1;
 }
 dispose(){
  this.clear();this.root.removeFromParent();sphere.dispose();smokeGeo.dispose();
  this.smokeMat.map?.dispose();this.smokeMat.dispose();this.grenadeMat.dispose();
 }
 create(){
  const g=this.game;
  if(g.mode==='daily'||!['playing','fighting'].includes(g.state)||g.marseille?.active||!g.crowdManager?.playerStickmen?.length)return false;
  const enemy=g.state==='fighting'?g.fightingEnemy:[...g.levelGenerator.enemies,...(g.levelGenerator.boss?[g.levelGenerator.boss]:[])]
   .find(e=>!e.defeated && e.meshGroup?.visible && e.z-g.trackZ>18 && e.z-g.trackZ<64);
  if(!enemy||!enemy.meshGroup)return false;
  const origin=new THREE.Vector3(),target=new THREE.Vector3(g.playerX,0,-g.trackZ-7);
  enemy.meshGroup.getWorldPosition(origin);origin.y+=1.2;
  const mesh=new THREE.Mesh(sphere,this.grenadeMat);
  mesh.position.copy(origin);this.root.add(mesh);
  this.shells.push({mesh,origin,target,progress:0,ttl:2.2});
  this.stats.launched++;this.nextLaunch=8+Math.random()*3;
  g.audio?.playLbdShot?.();
  return true;
 }
 detonate(target){
  const parts=[];
  const count=11;
  for(let i=0;i<count;i++){
   const angle=i*2.39996,r=.45+(i%5)*.62;
   const mesh=new THREE.Mesh(smokeGeo,this.smokeMat);
   mesh.position.set(target.x+Math.cos(angle)*r,.8+(i%4)*.35,target.z+Math.sin(angle)*r);
   mesh.scale.setScalar(1.7+(i%3)*.44);
   this.root.add(mesh);parts.push({mesh,base:mesh.scale.x,drift:(i%3-1)*.12,phase:i*.63});
  }
  this.clouds.push({center:target.clone(),parts,ttl:5.5,maximum:5.5});
  while(this.clouds.length>3){const old=this.clouds.shift();for(const p of old.parts)this.root.remove(p.mesh);}
  this.stats.clouds++;
  this.game.ui?.showFloatingText?.('GAZ LACRYMOGENE','#d4e6e9');
 }
 update(dt){
  const g=this.game;
  if(g.state==='paused'||g.state==='menu'||g.state==='win'||g.state==='lose')return;
  const frame=clamp(dt,0,.05);
  this.clock+=frame;this.nextLaunch-=frame;
  if(this.nextLaunch<=0 && !this.create())this.nextLaunch=1.5;
  for(let i=this.shells.length-1;i>=0;i--){
   const p=this.shells[i];p.progress=Math.min(1,p.progress+frame*.9);
   const t=p.progress;
   p.mesh.position.lerpVectors(p.origin,p.target,t);
   p.mesh.position.y+=Math.sin(t*Math.PI)*2.5;
   p.mesh.rotation.x+=frame*9;
   if(t>=1){this.root.remove(p.mesh);this.shells.splice(i,1);this.detonate(p.target);}
  }
  let strength=0;
  for(let i=this.clouds.length-1;i>=0;i--){
   const cloud=this.clouds[i];cloud.ttl-=frame;
   const fade=Math.min(1,cloud.ttl/.9,(cloud.maximum-cloud.ttl)/.6);
   for(const p of cloud.parts){
    p.mesh.position.x+=p.drift*frame;
    p.mesh.position.y+=frame*.08;
    p.mesh.quaternion.copy(g.camera.quaternion);
    p.mesh.material=this.smokeMat;
    p.mesh.scale.setScalar(p.base*(.9+(cloud.maximum-cloud.ttl)*.08)*Math.max(0,fade));
   }
   // Moving crowd intersects a lingering cloud at its own world position.
   const distance=Math.hypot(g.playerX-cloud.center.x,-g.trackZ-cloud.center.z);
   if(g.state==='playing'&&distance<6&&cloud.ttl>0)
    strength=Math.max(strength,1-distance/8);
   if(cloud.ttl<=0){for(const p of cloud.parts)this.root.remove(p.mesh);this.clouds.splice(i,1);}
  }
  const medics=g.crowdManager?.playerStickmen?.some(r=>r.parent&&r.userData.bonusFaction==='infirmieres');
  this.slowFactor=g.mode==='campaign'?1-strength*(medics?.14:.32):1;
 }
}
