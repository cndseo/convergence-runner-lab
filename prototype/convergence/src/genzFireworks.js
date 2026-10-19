import * as THREE from 'three';
// Arcade-style visual fireworks: harmless light trails, no physics damage.
export class GenzFireworks{
 constructor(game){
  this.game=game;this.group=new THREE.Group();this.group.name='GenZ-visual-fireworks';
  game.scene.add(this.group);this.bursts=[];this.clock=0;this.active=0;
  this.ball=new THREE.SphereGeometry(.075,6,5);
  this.materials=[0xff42ad,0x35f4ef,0xffdc48,0xffffff].map(color=>new THREE.MeshBasicMaterial({color,depthWrite:false}));
 }
 clear(){for(const p of this.bursts)this.group.remove(p.mesh);this.bursts.length=0;this.clock=0;this.active=0;}
 addGenz(amount){this.active=Math.min(12,this.active+Math.max(0,amount));}
 fire(){
  const g=this.game;
  if(this.active<=0||!g.crowdManager?.playerGroup)return;
  const enemy=[...g.levelGenerator.enemies,...(g.levelGenerator.boss?[g.levelGenerator.boss]:[])].find(e=>!e.defeated&&e.z-g.trackZ>3&&e.z-g.trackZ<55);
  if(!enemy)return;
  const runners=g.crowdManager.playerStickmen.filter(r=>r.userData.bonusFaction==='genz'&&r.parent);
  const shooter=runners[0]||g.crowdManager.playerStickmen[Math.min(2,g.crowdManager.playerStickmen.length-1)];
  if(!shooter)return;
  const start=new THREE.Vector3(),end=new THREE.Vector3();
  shooter.getWorldPosition(start);start.y+=1.6;
  enemy.meshGroup.getWorldPosition(end);end.y+=2.2;
  const distance=start.distanceTo(end);
  const sparks=5;
  for(let i=0;i<sparks;i++){
   const mesh=new THREE.Mesh(this.ball,this.materials[i%this.materials.length]);
   mesh.position.copy(start);mesh.scale.setScalar(i===0?1.8:1);
   this.group.add(mesh);
   this.bursts.push({mesh,start:start.clone(),end:end.clone().add(new THREE.Vector3((i-2)*.3,(i%2)*.25,0)),progress:-i*.035,ttl:1.15,distance});
  }
 }
 update(dt){
  if(this.game.state==='paused'||this.game.state==='menu'||this.game.state==='win'||this.game.state==='lose')return;
  const step=Math.min(dt,.06);this.clock+=step;
  if(this.clock>3.3){this.clock=0;this.fire();}
  for(let i=this.bursts.length-1;i>=0;i--){
   const p=this.bursts[i];p.progress+=step*1.3;p.ttl-=step;
   const t=Math.max(0,Math.min(1,p.progress));
   p.mesh.position.lerpVectors(p.start,p.end,t);
   p.mesh.position.y+=Math.sin(t*Math.PI)*Math.min(4,p.distance*.12);
   p.mesh.scale.setScalar(t>.88?Math.max(.1,1-(t-.88)*6):1);
   if(p.ttl<=0||t>=1){this.group.remove(p.mesh);this.bursts.splice(i,1);}
  }
 }
}
