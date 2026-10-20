import * as THREE from 'three';
import {getPoliceReferenceTexture} from './policeReferenceSprites.js';
import {createMarchBatch} from './humanoidAssets.js';
import {CHARACTER_ATLAS} from './characterCatalog.mjs';
import {DENSITY_LIMITS,streetRoster,streetDetail} from './humanDensity.mjs';

// Four batches for the entire route, independent of the combat actor roster.
// Alpha testing writes depth: people cannot show through buildings or TV screens.
export class StreetPresence {
  constructor(scene,game,plan,district){
    this.game=game;this.disposed=false;this.elapsed=0;this.nextUpdate=0;
    this.root=new THREE.Group();this.root.name='PARIS_STREET_PRESENCE';
    this.root.userData.dynamic=true;scene.add(this.root);
    this.roster=streetRoster(plan.trackLength,district);
    for(const front of [...plan.events.filter(e=>e.type==='enemy'),{kind:'crs',z:plan.trackLength}]){
      for(const side of [-1,1])this.roster.push({kind:front.kind,count:front.z===plan.trackLength?16:8,
        z:front.z+2.5,side,x:side*5.7,phase:front.z});
    }
    this.batches={};this.matrix=new THREE.Object3D();this.counts={};
    for(const kind of ['crs','bac','bravm']){
      const height=kind==='bac'?1.91:2.04,width=kind==='bravm'?2.7:kind==='bac'?1.45:1.55;
      const geometry=new THREE.PlaneGeometry(width,height);
      const material=new THREE.MeshBasicMaterial({alphaTest:.18,side:THREE.DoubleSide});
      const mesh=new THREE.InstancedMesh(geometry,material,DENSITY_LIMITS[kind]);
      mesh.name='STREET_'+kind.toUpperCase();mesh.count=0;mesh.visible=false;
      mesh.frustumCulled=false;mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      this.root.add(mesh);this.batches[kind]={mesh,geometry,height};
      getPoliceReferenceTexture(kind).then(texture=>{
        if(this.disposed)return;
        material.map=texture;material.needsUpdate=true;mesh.visible=true;
      }).catch(error=>console.warn('Street patrol unavailable: '+kind,error.message));
    }
    const civilians=createMarchBatch(DENSITY_LIMITS.spectators);
    civilians.height=(civilians.realistic?CHARACTER_ATLAS.centerY:1.24)*2;
    civilians.mesh.name='STREET_SPECTATORS';this.root.add(civilians.mesh);
    this.batches.spectators=civilians;
    this.update(0,0,true);
  }
  update(progress,dt=0,force=false){
    if(this.disposed)return;
    this.elapsed+=Math.min(.1,Math.max(0,dt));
    // Matrices at 12 Hz; atlas animation in the shader. No mixers or new actors.
    if(!force && Math.abs(progress-(this.lastProgress??-999))<.45 && this.elapsed<this.nextUpdate)return;
    this.nextUpdate=this.elapsed+1/12;this.lastProgress=progress;
    const reduced=this.game.experience?.reducedMotion;
    const time=reduced?0:this.elapsed;
    for(const kind of Object.keys(this.batches))this.counts[kind]=0;
    for(const group of this.roster){
      const distance=group.z-progress,step=streetDetail(distance);
      if(!step)continue;
      const batch=this.batches[group.kind],bike=group.kind==='bravm',civ=group.kind==='spectators';
      const cols=bike?1:civ?4:3,spacing=bike?1.65:civ?.48:.62;
      for(let i=0;i<group.count;i+=step){
        const n=this.counts[group.kind];if(n>=DENSITY_LIMITS[group.kind])break;
        const row=Math.floor(i/cols),col=i%cols;
        const patrol=group.kind==='bac'&&distance<35?Math.sin(time*.65+group.phase)*.55:0;
        this.matrix.position.set(group.x+group.side*col*spacing,
          batch.height*.5+(civ?.12:0),-group.z-row*spacing+patrol);
        this.matrix.rotation.set(0,0,0);
        this.matrix.scale.setScalar(civ?.94+(i%4)*.025:1+(i%3-1)*.025);
        this.matrix.updateMatrix();batch.mesh.setMatrixAt(n,this.matrix.matrix);
        if(civ){batch.rows[n]=batch.realistic?(i+Math.floor(group.z))%CHARACTER_ATLAS.rows:i%6;batch.phases[n]=i*2.3;}
        this.counts[group.kind]++;
      }
    }
    for(const [kind,batch] of Object.entries(this.batches)){
      batch.mesh.count=this.counts[kind];batch.mesh.instanceMatrix.needsUpdate=true;
      if(batch.time){
        batch.time.value=time*.35;
        batch.geometry.attributes.factionRow.needsUpdate=true;
        batch.geometry.attributes.walkPhase.needsUpdate=true;
      }
    }
  }
  diagnostics(){return {groups:this.roster.length,visible:{...this.counts},drawCalls:Object.values(this.counts).filter(n=>n>0).length,limits:DENSITY_LIMITS};}
  dispose(){
    this.disposed=true;this.root.removeFromParent();
    for(const batch of Object.values(this.batches)){batch.mesh.dispose();batch.geometry.dispose();batch.mesh.material.dispose();}
    // Atlas/reference textures are owned by their shared loaders, never this level.
    this.roster.length=0;
  }
}
