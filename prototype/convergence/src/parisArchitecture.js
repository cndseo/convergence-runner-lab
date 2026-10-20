import * as THREE from 'three';

// Bounded shared GPU resources; each streamed chunk owns only instance buffers.
const geometry = {
 box:new THREE.BoxGeometry(1,1,1),
 cylinder:new THREE.CylinderGeometry(1,1,1,12),
 cone:new THREE.CylinderGeometry(.05,1,1,12),
 sphere:new THREE.IcosahedronGeometry(1,1),
 dome:new THREE.SphereGeometry(1,16,8,0,Math.PI*2,0,Math.PI/2),
 ring:new THREE.TorusGeometry(1,.075,5,24),
 obelisk:new THREE.CylinderGeometry(.35,1,1,4),
 pyramid:new THREE.ConeGeometry(1,1,4)
};
const materials=new Map(), signs=new Map();
const dummy=new THREE.Object3D();
export const PALETTE={cream:0xe4d4b9,stone:0xcbbda6,slate:0x455364,iron:0x243238,
 glass:0x304d62,bronze:0x47736b,gold:0xc9a457,wood:0x76563f,white:0xf1e9d4,red:0x9c443b,blue:0x2c547d,green:0x35564c};
function material(color,glow=false,metal=false){
 const key=color+':'+glow+':'+metal;
 if(!materials.has(key))materials.set(key,new THREE.MeshStandardMaterial({
  color,roughness:glow?.42:.86,metalness:metal||color===PALETTE.gold?.48:.06,
  emissive:glow?color:0,emissiveIntensity:glow?.4:0
 }));
 return materials.get(key);
}
export class ParisBatch {
 constructor(name){this.group=new THREE.Group();this.group.name=name;this.batches=new Map();}
 part(kind,color,x,y,z,w,h,d,rx=0,ry=0,rz=0,glow=false){
  const metal=color===PALETTE.gold;
  const key=kind+':'+(glow?color:'opaque')+':'+metal;
  if(!this.batches.has(key))this.batches.set(key,{kind,color:glow?color:0xffffff,glow,metal,items:[]});
  this.batches.get(key).items.push([x,y,z,w,h,d,rx,ry,rz,glow?0xffffff:color]);return this;
 }
 box(c,x,y,z,w,h,d,ry=0){return this.part('box',c,x,y,z,w,h,d,0,ry);}
 cyl(c,x,y,z,r,h){return this.part('cylinder',c,x,y,z,r,h,r);}
 ball(c,x,y,z,r,sy=r,sz=r){return this.part('sphere',c,x,y,z,r,sy,sz);}
 sign(text,x,y,z,w=3,h=.65,ry=0,bg='#173c46',fg='#fff5d8'){
  const key=text+bg+fg;
  if(!signs.has(key)){
   const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;
   const ctx=canvas.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,512,128);
   ctx.strokeStyle=fg;ctx.lineWidth=4;ctx.strokeRect(8,8,496,112);
   ctx.fillStyle=fg;ctx.font='bold 36px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
   ctx.fillText(text,256,66,478);
   const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
   signs.set(key,new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));
  }
  const mesh=new THREE.Mesh(geometry.box,signs.get(key));
  mesh.position.set(x,y,z);mesh.scale.set(w,h,.065);mesh.rotation.y=ry;
  this.group.add(mesh);return mesh;
 }
 custom(geo,color,x,y,z,ry=0){
  const mesh=new THREE.Mesh(geo,material(color));mesh.position.set(x,y,z);mesh.rotation.y=ry;
  mesh.userData.parisOwnedGeometry=true;mesh.receiveShadow=true;this.group.add(mesh);return mesh;
 }
 finish(){
  for(const {kind,color,glow,metal,items} of this.batches.values()){
   const mesh=new THREE.InstancedMesh(geometry[kind],material(color,glow,metal),items.length);
   for(let i=0;i<items.length;i++){
    const [x,y,z,w,h,d,rx,ry,rz]=items[i];
    dummy.position.set(x,y,z);dummy.scale.set(w,h,d);dummy.rotation.set(rx,ry,rz);dummy.updateMatrix();
    mesh.setMatrixAt(i,dummy.matrix);
    mesh.setColorAt(i,new THREE.Color(items[i][9]));
   }
   mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor.needsUpdate=true;mesh.receiveShadow=true;
   mesh.castShadow=kind==='box'||kind==='sphere';
   mesh.computeBoundingSphere();mesh.name='Paris '+kind+' '+color.toString(16);this.group.add(mesh);
  }
  this.batches.clear();return this.group;
 }
}
export function disposeParisGroup(group){
 group.traverse(o=>{if(o.isInstancedMesh)o.dispose();if(o.userData.parisOwnedGeometry)o.geometry.dispose();});
 group.removeFromParent();
}
export function tree(b,x,z,color=0x577b44,size=1){
 b.cyl(0x77604b,x,1.8,z,.18,3.6);
 b.ball(color,x,4.4,z,1.65*size,2.0*size,1.6*size);
 b.ball(color,x-.75*size,4,z+.25,1.3*size,1.45*size,1.3*size);
 for(const s of [-1,1])b.part('cylinder',0x77604b,x+s*.35,2.85,z,.075,1.7,.075,0,0,-s*.5);
 b.ball(color,x+.8*size,4.85,z-.45,1.1*size,1.25*size,1.15*size);
 b.ball(0x70834c,x,5.4,z+.25,.9*size,.9*size,.9*size);
 b.box(PALETTE.iron,x,.17,z,1.5,.06,1.5);
}
export function lamp(b,x,z,evening=false){
 const {iron,gold}=PALETTE;
 b.cyl(iron,x,.28,z,.2,.5);b.cyl(iron,x,2.25,z,.065,4.1);
 b.box(iron,x,4.2,z,.46,.10,.46);
 b.part('box',evening?0xffd18a:0xf7e5bb,x,4.47,z,.31,.48,.31,0,0,0,true);
 b.box(iron,x,4.74,z,.50,.12,.50);b.part('pyramid',iron,x,4.91,z,.3,.3,.3);
 b.cyl(iron,x,5.12,z,.035,.25);
}
export function bench(b,x,z,ry=0){
 const s=Math.sin(ry),c=Math.cos(ry);
 for(const offset of [-.68,.68]){
  b.box(PALETTE.iron,x+offset*c,.33,z-offset*s,.1,.66,.58,ry);
 }
 b.box(PALETTE.wood,x,.64,z,1.9,.14,.62,ry);
 b.box(PALETTE.wood,x+.27*s,1.02,z+.27*c,1.9,.55,.12,ry);
}
export function fountain(b,x,z,r=4){
 b.cyl(PALETTE.cream,x,.2,z,r,.4);
 b.cyl(0x4e919b,x,.44,z,r-.3,.07);
 b.cyl(PALETTE.bronze,x,1.55,z,.28,2.6);
 b.part('cone',PALETTE.bronze,x,2.2,z,r*.57,.5,r*.57,Math.PI);
 b.cyl(0x73b4b5,x,2.48,z,r*.5,.06);
 b.cyl(PALETTE.bronze,x,3.3,z,.16,1.65);
 b.part('cone',PALETTE.bronze,x,3.65,z,r*.27,.4,r*.27,Math.PI);
 b.ball(PALETTE.gold,x,4.06,z,.22);
 for(let i=0;i<8;i++){const a=i*Math.PI/4;
  b.part('cylinder',0x91bec1,x+Math.sin(a)*r*.4,1.23,z+Math.cos(a)*r*.4,.025,1.75,.025,0,0,.16);
 }
}
export function metro(b,x,z,label='MÉTRO'){
 b.box(0x253a3b,x,.18,z,2.2,.24,4);
 for(const s of [-1,1]){
  b.box(PALETTE.iron,x+s*1.05,.7,z,.08,1.1,4);
  for(let k=-1.7;k<2;k+=.45)b.box(PALETTE.iron,x+s*1.05,.7,z+k,.045,1.1,.045);
 }
 b.cyl(PALETTE.green,x+1.2,2.1,z-1.8,.07,4);
 b.sign(label,x+1.2,4.0,z-1.8,2.1,.55,0,'#375e50','#ffecc0');
}
export function shelter(b,x,z){
 b.box(PALETTE.iron,x,2.7,z,1.8,.16,4.8);
 for(const end of [-2,2])b.box(PALETTE.iron,x,1.4,z+end,.09,2.65,.09);
 b.box(0x729597,x+.65,1.5,z,.06,2.0,4.2);
 b.box(PALETTE.wood,x,.7,z,.9,.15,3.5);
 b.sign('BUS',x,2.85,z+2.45,1.25,.44);
}
export function kiosk(b,x,z){
 b.cyl(PALETTE.green,x,1.25,z,1.25,2.5);
 b.part('cone',PALETTE.iron,x,2.75,z,1.65,.6,1.65);
 b.sign('PRESSE',x,2.1,z+1.25,1.85,.45);
 b.box(0xc6b7a4,x,1.15,z+1.22,1.65,1.4,.04);
}
export function car(b,x,z,{bus=false,color=0x8a4b3e,rotation=0}={}){
 // Parked decorative vehicles remain outside the playable strip.
 const w=bus?2:1.65,l=bus?8:3.7,h=bus?2.5:1.15;
 b.box(color,x,.65+h*.33,z,w,h*.65,l,rotation);
 b.box(color,x,1.0+h*.48,z-.2,w*.87,h*.45,l*.65,rotation);
 b.box(PALETTE.glass,x,1.1+h*.48,z+(bus?l*.43:l*.29),w*.8,h*.33,.07,rotation);
 for(const s of [-1,1]){
  b.box(PALETTE.glass,x+s*w*.46,1.1+h*.48,z-.2,.04,h*.32,l*.6,rotation);
  for(const end of [-l*.31,l*.31])
   b.part('cylinder',PALETTE.iron,x+s*w*.49,.45,z+end,.33,.16,.33,0,0,Math.PI/2);
 }
 b.box(PALETTE.white,x,.85,z+l*.5,w*.8,.14,.04,rotation);
 if(bus)b.sign('BUS • PARIS',x,2.4,z+l*.5+.05,1.65,.34);
}
export function crosswalk(b,z,width=11){
 for(let x=-width/2+.6;x<width/2;x+=1.15)b.box(0xe6e2d6,x,.055,z,.62,.025,3.1);
}
export function building(b,{x,z,side,height=16,length=12,color=0xdccbb3,seed=0,shop='CAFÉ',evening=false}){
 const {cream,slate,glass,iron}=PALETTE,w=7.5,face=x-side*w/2;
 const shutter=[0x68786d,0x536b79,0x7e7260][seed%3];
 b.box(color,x,height/2,z,w,height,length-.4);
 b.box(cream,x,height-.1,z,w+.25,.3,length);
 b.box(cream,x,2.65,z,w+.1,.23,length);
 // Sloping mansard shoulders and a flat zinc ridge.
 for(const s of [-1,1])b.part('box',slate,x+s*2.75,height+.8,z,2.2,.15,length,0,0,-s*.78);
 b.box(slate,x,height+1.52,z,4.1,.12,length);
 for(let dz=-length/2+1.5;dz<length/2;dz+=2.4){
  b.box(0x997762,x+side*1.9,height+2.0,z+dz,.46,1.4,.6);
  b.box(cream,face+side*.25,height+.65,z+dz,.8,1.1,.8);
  b.box(glass,face-side*.17,height+.65,z+dz,.06,.74,.51);
 }
 const floors=Math.floor((height-3)/2.7);
 for(let f=0;f<floors;f++){
  const y=4.2+f*2.7;
  b.box(cream,face-side*.09,y-1.18,z,.16,.12,length);
  for(let dz=-length/2+1.25;dz<length/2-.5;dz+=2.3){
   b.box(cream,face-side*.06,y,z+dz,.13,1.9,1.13);
   b.box(evening&&(f+Math.round(dz)+seed)%4===0?0xc6a778:glass,face-side*.14,y,z+dz,.06,1.6,.87);
   b.box(cream,face-side*.19,y,z+dz,.06,1.6,.06);
   b.box(cream,face-side*.19,y+.28,z+dz,.06,.06,.9);
   if((seed+f)%3===0)for(const q of [-1,1]){
    b.box(shutter,face-side*.18,y,z+dz+q*.66,.10,1.65,.32);
    for(let sl=0;sl<4;sl++)b.box(iron,face-side*.24,y-.55+sl*.36,z+dz+q*.66,.035,.035,.30);
   }
   if(f===0||f===floors-1){
    b.box(cream,face-side*.35,y-1.01,z+dz,.7,.12,1.4);
    for(const yy of [y-.93,y-.19])b.box(iron,face-side*.65,yy,z+dz,.045,.055,1.4);
    for(let q=-.6;q<.7;q+=.2)b.box(iron,face-side*.68,y-.57,z+dz+q,.05,.74,.035);
   }
  }
 }
 // All street-facing end walls now have windows, relief and ground-floor premises.
 for(const end of [-1,1]){
  const frontZ=z+end*length/2;
  for(let f=0;f<floors;f++)for(let col=-1;col<=1;col++){
   const xx=x+col*2.0,y=4.2+f*2.7;
   b.box(cream,xx,y,frontZ,1.35,1.94,.16);
   b.box(evening&&(f+col+seed)%4===0?0xd7b67c:glass,xx,y,frontZ+end*.1,1.02,1.62,.08);
   b.box(cream,xx,y,frontZ+end*.15,.06,1.62,.05);
   b.box(cream,xx,y+.26,frontZ+end*.15,1.08,.07,.05);
   b.box(cream,xx,y-1.04,frontZ+end*.18,1.5,.14,.45);
   if(f===0||f===floors-1){
    b.box(iron,xx,y-.65,frontZ+end*.48,1.5,.06,.045);
    for(let q=-.6;q<=.7;q+=.3)b.box(iron,xx+q,y-.65,frontZ+end*.48,.04,.7,.04);
   }
  }
  for(const dx of [-3.6,3.6]){
   for(let y=1;y<height-.5;y+=.65)b.box(cream,x+dx,y,frontZ,.48,.34,.26);
  }
  b.box(iron,x,1.45,frontZ,1.6,2.9,.15);
  b.box(cream,x,3.0,frontZ+end*.1,1.9,.27,.3);
  b.part('ring',cream,x,2.4,frontZ+end*.13,.86,.63,.13);
  for(const dx of [-2.35,2.35]){
   b.box(glass,x+dx,1.3,frontZ,1.7,2.3,.17);
   b.box(seed%2?PALETTE.red:PALETTE.green,x+dx,2.7,frontZ+end*.6,2,.14,1.2);
  }
  b.box(cream,x,height-.5,frontZ+end*.10,7.8,.3,.4);
 }
 for(const end of [-1,1]){
  b.box(cream,face-side*.17,height/2,z+end*(length/2-.3),.4,height,.35);
  b.box(iron,face-side*.38,height/2,z+end*(length/2-.18),.065,height,.065);
 }
 b.box(iron,face-side*.12,1.22,z-2.2,.1,2.25,1.1);
 b.box(glass,face-side*.15,1.22,z+1.4,.08,2.2,3.2);
 const shopColor=[0x385b51,0x7c3837,0x2b526b,0x74634b][seed%4];
 b.part('box',shopColor,face-side*.74,2.65,z+1.4,1.55,.12,3.9,0,0,side*.18);
 for(let stripe=0;stripe<8;stripe++)b.part('box',cream,face-side*.75,2.73,z-.24+stripe*.48,1.54,.025,.16,0,0,side*.18);
 b.box(shopColor,face-side*1.45,2.43,z+1.4,.1,.28,3.9);
 b.box(cream,face-side*.2,.28,z+1.4,.2,.13,3.5);
 b.sign(shop,face-side*.19,2.22,z+1.4,3.3,.43,-side*Math.PI/2,'#'+shopColor.toString(16));
 if(seed%3===0)b.sign('PARIS',face-side*.19,3.05,z-length/2+.7,1,.33,-side*Math.PI/2,'#174a67');
}
export function statue(b,x,y,z,scale=1,color=PALETTE.bronze,{raised=true,wings=false}={}){
 b.part('cone',color,x,y+scale*1.05,z,scale*.46,scale*1.9,scale*.38);
 b.ball(color,x,y+scale*2.2,z,scale*.28);
 b.part('cylinder',color,x-scale*.48,y+scale*1.55,z,.10*scale,.9*scale,.10*scale,0,0,.7);
 b.part('cylinder',color,x+scale*.42,y+(raised?2.0:1.35)*scale,z,.10*scale,scale*(raised?1.3:.8),.10*scale,0,0,raised?-.25:-.6);
 if(raised)b.ball(PALETTE.gold,x+scale*.55,y+scale*2.65,z,scale*.12);
 if(wings)for(const s of [-1,1])b.part('sphere',color,x+s*.68*scale,y+1.65*scale,z-.1,scale*.68,scale*.22,scale*.1,0,0,s*.5);
}
export function archGeometry(width,height,depth,openings){
 const shape=new THREE.Shape();shape.moveTo(-width/2,0);shape.lineTo(width/2,0);shape.lineTo(width/2,height);shape.lineTo(-width/2,height);shape.closePath();
 for(const {x=0,w,h} of openings){
  const hole=new THREE.Path(),r=w/2,shoulder=h-r;
  hole.moveTo(x-r,0);hole.lineTo(x-r,shoulder);hole.absarc(x,shoulder,r,Math.PI,0,true);
  hole.lineTo(x+r,0);hole.closePath();shape.holes.push(hole);
 }
 return new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:false,curveSegments:16});
}
