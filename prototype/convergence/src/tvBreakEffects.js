import * as THREE from 'three';

// Decorative impact only. It never changes the solver's rewards or damage.
export class TVBreakEffects {
 constructor(game){this.game=game;this.active=[];this.total=0;}
 trigger(gate,side) {
  const pane=side==='left'?gate.leftMesh:gate.rightMesh;
  const root=pane?.userData?.root,monitor=root?.userData?.tvScreen;
  if(!monitor)return false;
  const group=new THREE.Group();group.name='TV_SHATTER';
  const origin=new THREE.Vector3();
  monitor.getWorldPosition(origin);group.position.copy(origin);
  const shards=[];
  const type=(side==='left'?gate.leftGate:gate.rightGate).op;
  const tint=(['damage','-','/'].includes(type))?0xff4f63:0x59d8ff;
  const material=new THREE.MeshBasicMaterial({color:tint,side:THREE.DoubleSide,
    transparent:true,opacity:.78,depthWrite:false});
  for(let i=0;i<14;i++){
   const theta=(i*2.399963),j=(i%5)*.11;
   const m=new THREE.Mesh(new THREE.PlaneGeometry(.14+(i%3)*.12,.08+(i%4)*.10),
     material.clone());
   m.position.set(Math.cos(theta)*.26,Math.sin(theta)*.22,.3);
   m.rotation.z=theta;m.userData.velocity=new THREE.Vector3(
     Math.cos(theta)*(1.6+j),Math.sin(theta)*(1.1+j)+.7,1.8+(i%4)*.25);
   group.add(m);shards.push(m);
  }
  this.game.scene.add(group);
  this.active.push({group,shards,t:0});
  this.total++;
  this.game.audio.playHit?.();
  return true;
 }
 update(dt){
  if(this.game.state==='paused')return;
  for(const item of [...this.active]){
   item.t+=dt;for(const m of item.shards){
    m.position.addScaledVector(m.userData.velocity,dt);
    m.userData.velocity.y-=5.8*dt;
    m.rotation.z+=dt*7;
    m.material.opacity=Math.max(0,.9-item.t/.65);
   }
   if(item.t>=.65){
    this.game.scene.remove(item.group);
    for(const m of item.shards){m.geometry.dispose();m.material.dispose();}
    this.active.splice(this.active.indexOf(item),1);
   }
  }
 }
 clear(){
  for(const item of this.active){
   this.game.scene.remove(item.group);
   for(const m of item.shards){m.geometry.dispose();m.material.dispose();}
  }
  this.active=[];this.total=0;
 }
}
