import * as THREE from 'three';
import {districtForLevel} from './parisDistricts.mjs';
import {ParisBatch,PALETTE as P,building,tree,lamp,bench,metro,shelter,kiosk,car,crosswalk,disposeParisGroup} from './parisArchitecture.js';
import {landmarkSpecs,makeLandmark} from './parisMonuments.js';

const CHUNK=48, AHEAD=116, BEHIND=28;
export class ParisEnvironment {
 constructor(scene,game,trackLength,level){
  this.scene=scene;this.game=game;this.length=trackLength;this.config=districtForLevel(level);
  this.root=new THREE.Group();this.root.name='CONVERGENCE_PARIS_'+this.config.slug;
  this.root.userData.dynamic=true;scene.add(this.root);
  this.chunks=new Map();this.landmarks=new Map();this.specs=landmarkSpecs(this.config,trackLength);
  this.lastRegion=null;this.applyAmbience();this.update(0);
 }
 applyAmbience(){
  const c=this.config,g=this.game;
  // An owned custom theme still takes precedence over the district's default sky.
  if(g.equippedTheme!=='default'){g.applyTheme();return;}
  const canvas=document.createElement('canvas');canvas.width=1;canvas.height=256;
  const ctx=canvas.getContext('2d'),gradient=ctx.createLinearGradient(0,0,0,256);
  c.sky.forEach((v,i)=>gradient.addColorStop(i/2,v));ctx.fillStyle=gradient;ctx.fillRect(0,0,1,256);
  if(this.scene.background?.isTexture)this.scene.background.dispose();
  this.scene.background=new THREE.CanvasTexture(canvas);this.scene.background.colorSpace=THREE.SRGBColorSpace;
  this.scene.fog=new THREE.FogExp2(c.fog,c.id===11?.0035:.0048);
  if(g.directionalLight){g.directionalLight.color.set(c.sun);g.directionalLight.intensity=c.light;}
 }
 facadeX(progress){
  const c=this.config;
  if(c.layout==='presidential-court' && progress>this.length-20)return 26;
  if(['garden-circle','radial-opera','mineral-square','opera-fan','temple-square','obelisk-square'].includes(c.layout)){
   const bulge=Math.sin(Math.min(1,Math.max(0,progress/this.length))*Math.PI);
   return c.facade-5+6*bulge;
  }
  return c.facade;
 }
 createChunk(index){
  const c=this.config,b=new ParisBatch('PARIS_CHUNK_'+index),start=index*CHUNK,end=start+CHUNK;
  const zz=-(start+end)/2;
  // A continuous solid ground replaces the former Seine/bridge underneath every district.
  b.box(0xb6b3a8,0,-.16,zz,150,.25,CHUNK+.06);
  b.box(c.road,0,-.015,zz,c.width,.08,CHUNK+.04);
  const plaza=['garden-circle','radial-opera','mineral-square','opera-fan','temple-square','obelisk-square'].includes(c.layout);
  if(c.layout==='mineral-square'||c.layout==='obelisk-square'){
   for(let p=start;p<end;p+=4)b.box(0xb2b2a8,0,.032,-p,c.width,.015,.035);
   for(let x=-c.width/2;x<c.width/2;x+=4)b.box(0xb2b2a8,x,.033,zz,.035,.015,CHUNK);
  }
  for(const side of [-1,1]){
   const curb=plaza?Math.max(7,c.width/2-3):c.width/2;
   const front=this.facadeX((start+end)/2)-3.75;
   if(front>curb){
    b.box(0xadafa7,side*(curb+(front-curb)/2),.08,zz,front-curb,.18,CHUNK+.03);
    b.box(0xd0ccc0,side*curb,.12,zz,.18,.27,CHUNK+.04);
   }
   if(c.layout==='grand-perspective'){
    b.box(0x71805a,side*15.3,.1,zz,3,.22,CHUNK);
    for(let p=start+3;p<end;p+=8)tree(b,side*15.5,-p,c.leaves,1.2);
   }
   if(c.layout==='garden-circle' && index>=0&&index<=2){
    b.box(0x76885a,side*10.5,.08,zz,5.5,.15,CHUNK);
   }
   for(let p=Math.ceil(start/c.spacing)*c.spacing;p<end;p+=c.spacing){
    if(p<0||p>this.length+24)continue;
    const seed=Math.floor(p/c.spacing)+c.id*11+(side===1?3:0);
    const x=side*(this.facadeX(p)+Math.sin(seed*2)*.6);
    const insideMonument=this.specs.some(s=>s.type!=='arc'&&Math.sign(s.x)===side&&Math.abs(s.progress-p)<21);
    const insideCourt=c.id===12&&p>this.length-20;
    if(!insideMonument&&!insideCourt)building(b,{x,z:-p,side,height:c.height+(seed%4-1)*1.3,
     length:c.spacing-.12,color:[c.stone,0xd3c3ac,0xe4d4bc,0xbfb8aa][seed%4],seed,
     shop:c.shops[seed%c.shops.length],evening:c.id>=7});
   }
   for(let p=Math.ceil(start/18)*18;p<end;p+=18){
    if(p<0||p>this.length+20)continue;
    const x=side*(plaza?Math.min(c.width/2-1,18):c.width/2+.85);
    lamp(b,x,-p,c.id>=7);
    if(Math.floor(p/18)%3===1)bench(b,x+side*1.25,-p-3,side*Math.PI/2);
    if(!plaza&&Math.floor(p/18)%3===2){
     b.cyl(P.green,x+side*.8,.5,-p-4,.28,.9);
     b.cyl(P.iron,x+side*.8,.97,-p-4,.32,.1);
    }
   }
   if(c.layout!=='grand-perspective')for(let p=Math.ceil(start/c.trees)*c.trees;p<end;p+=c.trees){
    if(p<1||p>this.length+10)continue;
    const x=side*(plaza?c.width/2-1:c.width/2+1.3);
    if(!this.specs.some(s=>Math.abs(s.x-x)<8&&Math.abs(s.progress-p)<14))tree(b,x,-p,c.leaves);
   }
  }
  if(!plaza){
   for(let p=start;p<end;p+=8)b.box(0xdfdfcd,0,.04,-p,.12,.018,2.7);
   for(let p=Math.ceil(start/60)*60;p<end;p+=60)if(p>0&&p<this.length-15)crosswalk(b,-p,Math.min(c.width-1,13));
  }
  if(c.id===2){
   b.box(0xc8cdbf,5.5,.04,zz,.12,.02,CHUNK);
   if(index===1)shelter(b,9.3,-76);
   if(index===2)car(b,-8.8,-138,{bus:true,color:0x82aaa0});
  }
  if(c.id===3||c.id===8){
   // Diagonal incoming avenues give the two junctions their own ground silhouette.
   if(index===1||index===2)for(const s of [-1,1])b.box(0x69747a,s*25,.003,zz,8,.035,48,s*.55);
  }
  if(c.id===4&&index===1){kiosk(b,9,-94);metro(b,-9,-85);}
  if(c.id===6&&index===0)metro(b,9,-29,'M • STRASBOURG');
  if(c.id===7&&index===1){car(b,-10,-88,{color:0xa57551});shelter(b,10,-76);}
  if(c.id===9&&index===2)car(b,15,-139,{color:0x25374a});
  if(c.id===10&&index===0)for(const side of [-1,1]){bench(b,side*18,-28);tree(b,side*24,-18,c.leaves);}
  if(c.id===11&&index===3){
   b.box(c.road,26,.01,-172,35,.04,10);
   b.sign('ÉLYSÉE → AV. DE MARIGNY',10,3.5,-162,6,.7);
   b.sign('← ARC DE TRIOMPHE',-12,3.5,-175,6,.7);
  }
  if(c.id===12&&index===0){
   b.box(c.road,-16,.01,-8,27,.035,9);
   b.sign('RUE DU FAUBOURG-SAINT-HONORÉ',9,3.1,-13,6.5,.6);
  }
  if(index===0){
   const mx=plaza?c.width/2+1:c.width/2+2.2;
   if(![4,6,12].includes(c.id))metro(b,mx,-20,'M • '+c.short.toUpperCase());
   b.sign(c.name.toUpperCase(),-7.6,3.2,-9,4.5,.65);
  }
  if(index===3)b.sign(c.exit.toUpperCase()+' →',8.5,3.1,-166,5.6,.65);
  return b.finish();
 }
 update(progress=0){
  // Region-level updates avoid per-frame scene allocations.
  const region=Math.floor(progress/12);
  if(region===this.lastRegion)return;
  this.lastRegion=region;
  const min=Math.max(-1,Math.floor((progress-BEHIND)/CHUNK));
  const max=Math.min(Math.ceil((this.length+55)/CHUNK),Math.floor((progress+AHEAD)/CHUNK));
  for(const [i,group] of this.chunks)if(i<min||i>max){disposeParisGroup(group);this.chunks.delete(i);}
  for(let i=min;i<=max;i++)if(!this.chunks.has(i)){const group=this.createChunk(i);this.root.add(group);this.chunks.set(i,group);}
  for(const spec of this.specs){
   const distance=spec.progress-progress;
   const visible=spec.type==='arc'||distance>-48&&distance<175;
   if(visible&&!this.landmarks.has(spec.type)){
    const group=makeLandmark(spec,this.config);
    if(spec.type==='arc'){
     // Remote landmark on the western axis: destination remains the Marigny turn.
     group.traverse(o=>{if(o.material){const m=o.material.clone();m.fog=false;o.material=m;o.userData.parisOwnedMaterial=true;}});
    }
    this.root.add(group);this.landmarks.set(spec.type,group);
   }else if(!visible&&this.landmarks.has(spec.type)){
    disposeParisGroup(this.landmarks.get(spec.type));this.landmarks.delete(spec.type);
   }
  }
 }
 dispose(){
  for(const group of [...this.chunks.values(),...this.landmarks.values()]){
   group.traverse(o=>{if(o.userData.parisOwnedMaterial)o.material.dispose();});
   disposeParisGroup(group);
  }
  this.chunks.clear();this.landmarks.clear();this.root.removeFromParent();
 }
 diagnostics(){
  let instances=0,drawGroups=0;
  this.root.traverse(o=>{if(o.isMesh){drawGroups++;instances+=o.isInstancedMesh?o.count:1;}});
  return {id:this.config.id,slug:this.config.slug,layout:this.config.layout,chunks:this.chunks.size,
   landmarks:[...this.landmarks.keys()],instances,drawGroups};
 }
}
