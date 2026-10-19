import * as THREE from 'three';
import {
  LBD_MIN_RANGE,LBD_MAX_RANGE,LBD_SPEED,LBD_INTERVAL,
  LBD_MAX_PROJECTILES,LBD_MAX_DROPLETS,LBD_MAX_DECALS,
  segmentSphereHit,isInFireRange,impactSeverity,clamp
} from './lbdMath.mjs';

// Native THREE geometry/particle pooling: no extra bundle, only a handful of objects.
// LBD injuries affect presentation + a short march slowdown, not solver losses.
const direction = new THREE.Vector3();
const targetWorld = new THREE.Vector3();
const shooterWorld = new THREE.Vector3();
const tmpCenter = new THREE.Vector3();
const tmpEnd = new THREE.Vector3();
const dropletRed = new THREE.MeshBasicMaterial({color:0xa71c32,depthWrite:false});
const stoneDust = new THREE.MeshBasicMaterial({color:0x8793a2,depthWrite:false});
const projectileMat = new THREE.MeshBasicMaterial({color:0xe8b680,depthTest:false,depthWrite:false});
const streakMat = new THREE.MeshBasicMaterial({color:0xffbb65,transparent:true,opacity:.70,depthTest:false,depthWrite:false});
const flashMat = new THREE.MeshBasicMaterial({color:0xffdd9a,transparent:true,opacity:.8,depthWrite:false});

export class LBDSystem {
  constructor(game) {
    this.game=game;
    this.scene=game.scene;
    this.group=new THREE.Group();
    this.group.name='LBD-long-range-effects';
    this.scene.add(this.group);
    this.projectileGeo=new THREE.SphereGeometry(.105,8,6);
    this.streakGeo=new THREE.CylinderGeometry(.019,.019,.92,5);
    this.dropletGeo=new THREE.SphereGeometry(.05,5,4);
    this.flashGeo=new THREE.SphereGeometry(.20,6,5);
    this.stainGeo=new THREE.CircleGeometry(.16,9);
    this.stainMat=new THREE.MeshBasicMaterial({color:0x84212d,transparent:true,opacity:.42,depthWrite:false,side:THREE.DoubleSide});
    this.bullets=[];
    this.particles=[];
    this.flashes=[];
    this.decals=[];
    this.injured=new Set();
    this.stats={fired:0,impacts:0,hits:0,serious:0,missed:0,blocked:0};
    this.nextFire=1.65;
    this.elapsed=0;
    this.impactSlowdown=0;
    this.maxActive=LBD_MAX_PROJECTILES;
    this.roundRobin=0;
  }

  clear() {
    for(const list of [this.bullets,this.particles,this.flashes,this.decals]){
      for(const effect of list){
        this.group.remove(effect.mesh);
        if(effect.streak)this.group.remove(effect.streak);
      }
      list.length=0;
    }
    for(const runner of this.injured){
      if(runner.userData.lbdMark){
        const mark=runner.userData.lbdMark;
        runner.remove(mark);
        mark.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});
        delete runner.userData.lbdMark;
      }
      runner.rotation.x=0;
      delete runner.userData.lbdInjury;
      delete runner.userData.lbdReaction;
    }
    this.injured.clear();
    this.stats={fired:0,impacts:0,hits:0,serious:0,missed:0,blocked:0};
    this.nextFire=1.65;
    this.elapsed=0;
    this.impactSlowdown=0;
  }

  get marchFactor() {
    return this.impactSlowdown>0?.76:1;
  }

  findShooter(){
    const g=this.game;
    const active=g.state==='playing'||g.state==='fighting';
    if(!active||!g.crowdManager?.playerStickmen?.length)return null;
    const enemies=[...g.levelGenerator.enemies, ...(g.levelGenerator.boss?[g.levelGenerator.boss]:[])];
    const valid=enemies.filter(e=>{
      if(e.defeated||!e.meshGroup)return false;
      const distance=e.z-g.trackZ;
      return isInFireRange(distance)&&e.meshGroup.visible;
    }).sort((a,b)=>(a.z-g.trackZ)-(b.z-g.trackZ));
    const enemy=valid[0];
    if(!enemy)return null;
    const officers=enemy.meshGroup.children.filter(c=>['crs','bac'].includes(c.userData.faction));
    if(!officers.length)return null;
    const officer=officers[this.roundRobin++%officers.length];
    return {officer,enemy};
  }

  launch(force=false) {
    if(this.bullets.length>=this.maxActive)return false;
    const source=this.findShooter();
    if(!source)return false;
    const crowd=this.game.crowdManager.playerStickmen.filter((r,i)=>i>0&&r.parent);
    if(!crowd.length)return false; // P02 is never targeted.
    const target=crowd[1+(this.stats.fired%Math.max(1,crowd.length-1))]||crowd[0];
    const {officer,enemy}=source;
    enemy.meshGroup.updateWorldMatrix(true,true);
    const muzzle=officer.userData.policeModel?.userData.lbdMuzzle;
    if(muzzle)muzzle.getWorldPosition(shooterWorld);
    else officer.getWorldPosition(shooterWorld).add(new THREE.Vector3(0,1.21,.30));
    target.updateWorldMatrix(true,false);
    target.getWorldPosition(targetWorld);
    targetWorld.y+=1.09;
    // Predict where the advancing crowd will be when the projectile arrives.
    const flight=shooterWorld.distanceTo(targetWorld)/(LBD_SPEED+this.game.speed);
    if(this.game.state==='playing')targetWorld.z-=this.game.speed*flight;
    targetWorld.x+=((this.stats.fired%5)-2)*.045;
    direction.subVectors(targetWorld,shooterWorld).normalize();
    if(direction.lengthSq()<.5)return false;
    const mesh=new THREE.Mesh(this.projectileGeo,projectileMat);
    mesh.position.copy(shooterWorld);
    const streak=new THREE.Mesh(this.streakGeo,streakMat);
    streak.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction);
    streak.position.copy(shooterWorld).addScaledVector(direction,-.46);
    this.group.add(streak);
    mesh.userData.lbdProjectile=true;
    this.group.add(mesh);
    this.bullets.push({mesh,streak,target,velocity:direction.clone().multiplyScalar(LBD_SPEED),age:0,maxAge:1.5});
    this.spawnFlash(shooterWorld);
    this.stats.fired++;
    this.game.audio?.playLbdShot?.();
    return true;
  }

  spawnFlash(position) {
    const mesh=new THREE.Mesh(this.flashGeo,flashMat);
    mesh.position.copy(position);
    this.group.add(mesh);
    this.flashes.push({mesh,ttl:.13,maximum:.13});
  }

  addParticles(position,red=true,amount=6) {
    for(let i=0;i<amount&&this.particles.length<LBD_MAX_DROPLETS;i++){
      const mesh=new THREE.Mesh(this.dropletGeo,red?dropletRed:stoneDust);
      mesh.position.copy(position);
      mesh.scale.setScalar(.65+Math.random()*.65);
      this.group.add(mesh);
      const velocity=new THREE.Vector3((Math.random()-.5)*3.3,1.1+Math.random()*2.7,(Math.random()-.5)*3.3);
      this.particles.push({mesh,velocity,ttl:.35+Math.random()*.36,maximum:.72});
    }
    if(red&&this.decals.length<LBD_MAX_DECALS){
      const mesh=new THREE.Mesh(this.stainGeo,this.stainMat);
      mesh.rotation.x=-Math.PI/2;
      mesh.position.set(position.x,.065,position.z);
      mesh.scale.set(1+Math.random()*.45,.5+Math.random()*.6,1);
      this.group.add(mesh);
      this.decals.push({mesh,ttl:3.4,maximum:3.4});
    }
  }

  makeMark(runner,type){
    if(runner.userData.lbdMark)return;
    const marker=new THREE.Group();
    marker.name='LBD-wound-marker';
    const white=0xd7c9af,black=0x24262d,red=0x8e3644;
    const make=(color,w,h,d,x,y,z)=>{
      const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color}));
      mesh.position.set(x,y,z);marker.add(mesh);
    };
    if(type==='eye'){
      make(black,.37,.045,.045,0,1.35,.25);
      make(black,.15,.12,.04,-.075,1.35,.275);
      make(red,.10,.055,.045,-.075,1.26,.277);
    } else if(type==='arm'){
      make(white,.13,.3,.12,.29,.83,.19);
      make(red,.14,.035,.14,.29,.85,.205);
    } else if(type==='leg'){
      make(white,.15,.25,.13,-.13,.36,.18);
      make(red,.16,.04,.14,-.13,.39,.205);
    } else {
      make(red,.19,.09,.035,.19,1.05,.18);
    }
    runner.add(marker);
    runner.userData.lbdMark=marker;
  }

  hit(runner,position){
    this.stats.impacts++;
    if(!runner?.parent||runner.userData.approvedLeader)return;
    // Shields provide a visible block without consuming tactical-solver resources.
    if(this.game.shields>0){
      this.stats.blocked++;
      this.addParticles(position,false,5);
      this.game.ui?.showLbdImpact('LBD · PROTECTION', true);
      return;
    }
    this.stats.hits++;
    const kind=impactSeverity(this.stats.hits+this.roundRobin);
    const previous=runner.userData.lbdInjury?.kind;
    if(!previous){
      runner.userData.lbdInjury={kind,at:this.elapsed};
      this.injured.add(runner);
      this.makeMark(runner,kind);
      if(kind!=='bruise')this.stats.serious++;
    }
    runner.userData.lbdReaction=.62;
    this.impactSlowdown=.42;
    this.addParticles(position,true,6);
    this.game.ui?.screenShake(2);
    if(this.stats.hits===1||this.stats.hits%3===0){
      const captions={eye:'ŒIL BLESSÉ',arm:'BRAS BLESSÉ',leg:'JAMBE BLESSÉE',bruise:'MANIFESTANT BLESSÉ'};
      this.game.ui?.showLbdImpact('LBD · '+captions[kind]);
    }
    this.game.audio?.playFightHit?.();
  }

  findObstacle(start,end){
    for(const gate of this.game.levelGenerator.gates){
      if(gate.passed)continue;
      for(const pane of [gate.leftMesh,gate.rightMesh]){
        const root=pane?.userData.root;
        if(!root?.userData.lbdOccluder||!root.visible)continue;
        tmpCenter.set(root.position.x,.80,root.position.z);
        const t=segmentSphereHit(start,end,tmpCenter,1.24);
        if(t!==null)return start.clone().lerp(end,t);
      }
    }
    return null;
  }

  advanceProjectiles(dt){
    // Swept segment-vs-sphere prevents fast projectiles skipping targets at 30fps.
    for(let i=this.bullets.length-1;i>=0;i--){
      const bullet=this.bullets[i];
      const start=bullet.mesh.position;
      tmpEnd.copy(start).addScaledVector(bullet.velocity,dt);
      bullet.age+=dt;
      let hit=false;
      const obstacle=this.findObstacle(start,tmpEnd);
      if(obstacle){
        this.stats.blocked++;
        this.addParticles(obstacle,false,5);
        hit=true;
      }
      const target=bullet.target;
      if(!hit&&target?.parent){
        target.updateWorldMatrix(true,false);
        target.getWorldPosition(tmpCenter);
        tmpCenter.y+=1.05;
        const fraction=segmentSphereHit(start,tmpEnd,tmpCenter,.58);
        if(fraction!==null){
          const position=start.clone().lerp(tmpEnd,fraction);
          this.hit(target,position);
          hit=true;
        }
      }
      if(hit||bullet.age>=bullet.maxAge||tmpEnd.y<.18){
        if(!hit){this.stats.missed++;this.addParticles(tmpEnd,false,3);}
        this.group.remove(bullet.mesh);
        this.group.remove(bullet.streak);
        this.bullets.splice(i,1);
      }else {
        bullet.mesh.position.copy(tmpEnd);
        direction.copy(bullet.velocity).normalize();
        bullet.streak.position.copy(tmpEnd).addScaledVector(direction,-.46);
      }
    }
  }

  advanceParticles(dt){
    for(const [list,kind] of [[this.particles,'particle'],[this.flashes,'flash'],[this.decals,'decal']]){
      for(let i=list.length-1;i>=0;i--){
        const fx=list[i];fx.ttl-=dt;
        if(kind==='particle'){
          fx.velocity.y-=9*dt;
          fx.mesh.position.addScaledVector(fx.velocity,dt);
          fx.mesh.scale.multiplyScalar(Math.max(.8,1-dt));
        }else if(kind==='flash'){
          fx.mesh.scale.setScalar(Math.max(.02,fx.ttl/fx.maximum));
        }else{
          fx.mesh.scale.multiplyScalar(Math.max(.9,1-dt*.23));
        }
        if(fx.ttl<=0){this.group.remove(fx.mesh);list.splice(i,1);}
      }
    }
  }

  update(dt) {
    if(this.game.state==='paused')return;
    if(this.game.state==='menu'||this.game.state==='win'||this.game.state==='lose')return;
    const frame=Math.min(.06,Math.max(0,dt));
    this.elapsed+=frame;
    this.nextFire-=frame;
    this.impactSlowdown=Math.max(0,this.impactSlowdown-frame);
    if(this.nextFire<=0){
      if(this.launch())this.nextFire=LBD_INTERVAL;
      else this.nextFire=.24;
    }
    this.advanceProjectiles(frame);
    this.advanceParticles(frame);
    for(const runner of this.injured){
      const reaction=Math.max(0,(runner.userData.lbdReaction||0)-frame);
      runner.userData.lbdReaction=reaction;
      // Non-graphic wince and stumble. Rotations fully return to neutral.
      runner.rotation.x=reaction>0?Math.sin((.62-reaction)*12)*reaction*.24:0;
    }
  }
}
