// CONVERGENCE — reusable mobile-friendly 3D street assets, generated from source.
// Run: npm run assets:urban. No external textures, proprietary models, or network access.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

if (!globalThis.FileReader) {
  globalThis.FileReader=class {
    readAsArrayBuffer(blob) { blob.arrayBuffer().then(b=>{this.result=b;this.onloadend?.();}).catch(e=>this.onerror?.(e)); }
  };
}
const out=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../public/assets/urban-decay');
const palette={
  plaster:0xd6ccc1, plasterDark:0xbab0a8, concrete:0x898d92, bright:0xe3dfd3,
  exposed:0x986d57, rust:0x77534a, navy:0x344856, window:0x263e4d,
  windowLite:0x506b76, frame:0x8999a2, dark:0x292e33, roof:0x555d64,
  hospitalBlue:0x4889a9, red:0xbd3431, brick:0xa57862, yellow:0xb9a66e,
  white:0xe7e2d3, grass:0x68744b, green:0x537262, metal:0x495056,
  grey:0x68686d, trash:0x434448, cardboard:0x967c57,
  blueFabric:0x396a9c, blueLight:0x6883a9, blanket:0x3e557a,
  orangeFabric:0xae6845, jeans:0x425771, skin:0x9f7459, skin2:0xd2a17b,
  blackHair:0x29282b, beige:0xb5a48a, blueInk:0x3b7087, purpleInk:0x805767,
};
const materials=Object.fromEntries(Object.entries(palette).map(([key,color])=>[key,
  new THREE.MeshStandardMaterial({name:key,color,roughness:.92,metalness:key==='metal'?.26:0})]));
class MeshKit {
  constructor(name){this.name=name;this.buckets=new Map();}
  add(geo,mat,x=0,y=0,z=0,rx=0,ry=0,rz=0){
    const ob=new THREE.Object3D();ob.position.set(x,y,z);ob.rotation.set(rx,ry,rz);ob.updateMatrix();
    geo.applyMatrix4(ob.matrix);
    // Box geometries are indexed, spheres/cylinders are not: normalize before batching.
    const flat=geo.index?geo.toNonIndexed():geo;
    if(flat!==geo)geo.dispose();
    if(!this.buckets.has(mat))this.buckets.set(mat,[]);
    this.buckets.get(mat).push(flat);
  }
  box(mat,x,y,z,w,h,d,rx=0,ry=0,rz=0){this.add(new THREE.BoxGeometry(w,h,d),mat,x,y,z,rx,ry,rz);}
  ball(mat,x,y,z,rx=0,ry=0,rz=0,sx=1,sy=1,sz=1){
    const g=new THREE.IcosahedronGeometry(1,1);g.scale(sx,sy,sz);this.add(g,mat,x,y,z,rx,ry,rz);
  }
  tube(mat,x,y,z,r,h,rx=0,ry=0,rz=0){this.add(new THREE.CylinderGeometry(r,r,h,7),mat,x,y,z,rx,ry,rz);}
  finish(){
    const group=new THREE.Group();group.name=this.name;
    for(const [key,parts] of this.buckets){
      const merged=mergeGeometries(parts,false);
      if(!merged)throw new Error('Cannot merge '+key);
      const mesh=new THREE.Mesh(merged,materials[key]);
      mesh.castShadow=false;mesh.receiveShadow=true;mesh.name=this.name+'_'+key;
      group.add(mesh);parts.forEach(p=>p.dispose());
    }
    group.userData={assetPack:'CONVERGENCE urban-decay v1',author:'original procedural 3D'};
    return group;
  }
}
const glyphs={
 L:['10000','10000','10000','10000','10000','10000','11111'],
 Y:['10001','10001','01010','00100','00100','00100','00100'],
 C:['01111','10000','10000','10000','10000','10000','01111'],
 E:['11111','10000','10000','11110','10000','10000','11111'],
 H:['10001','10001','10001','11111','10001','10001','10001'],
 O:['01110','10001','10001','10001','10001','10001','01110'],
 P:['11110','10001','10001','11110','10000','10000','10000'],
 I:['11111','00100','00100','00100','00100','00100','11111'],
 T:['11111','00100','00100','00100','00100','00100','00100'],
 A:['01110','10001','10001','11111','10001','10001','10001'],
};
function label(k,text,x,y,z,unit=.10,color='dark'){
  const scale=unit;
  [...text].forEach((letter,idx)=>{
    const pixels=glyphs[letter];
    if(!pixels)return;
    pixels.forEach((row,iy)=>[...row].forEach((bit,ix)=>{
      if(bit==='1')k.box(color,x+(idx*6+ix)*scale,y-iy*scale,z,scale*.89,scale*.92,.045);
    }));
  });
}
function glass(k,x,y,z,w=1.05,h=1.25,broken=false){
  k.box('frame',x,y,z,w+.15,h+.15,.15);
  k.box(broken?'window':'windowLite',x,y,z+.10,w,h,.035);
  k.box('metal',x,y,z+.13,.045,h,.035);
  k.box('metal',x,y,z+.13,w,.045,.035);
  if(broken) {
    k.box('dark',x+w*.18,y+h*.18,z+.16,w*.36,h*.28,.04,0,0,.25);
    k.box('dark',x-w*.19,y-h*.17,z+.16,w*.35,h*.26,.04,0,0,-.4);
  }
}
function facadeDamage(k,x,y,z,variant=0){
  k.box('exposed',x,y,z,.38+.13*(variant%3),.3+.16*((variant+1)%3),.045,0,0,variant*.12);
  k.box('rust',x+.17,y-.16,z+.04,.028,.60,.03,0,0,.22);
  k.box('rust',x+.30,y-.43,z+.04,.028,.28,.03,0,0,-.4);
}
function rubble(k,z=3.3,count=14){
  for(let i=0;i<count;i++){
    const x=(((i*47)%37)-18)/5;
    const y=.10+(i%3)*.025;
    const size=.12+(i%4)*.075;
    k.box(i%2?'concrete':'plasterDark',x,y,z+((i*13)%9)/9,size,size*.60,size*.8,0,(i%4)*.21,(i%5)*.17);
  }
}
function hospital(){
 const k=new MeshKit('hopital_delabre');
 k.box('plaster',0,3.8,-.3,12,7.6,6.4);
 k.box('concrete',0,.16,.1,13,.32,7.6);
 k.box('roof',0,7.65,-.3,12.45,.27,6.7);
 k.box('plasterDark',-4.25,6.5,3.01,2.3,3.2,.21);
 k.box('hospitalBlue',0,3.6,3.01,12,.33,.16);
 k.box('hospitalBlue',0,6.05,3.01,12,.24,.15);
 for(let floor=0;floor<3;floor++)for(let col=0;col<7;col++){
   const x=-5.15+col*1.72;
   if(floor===0 && col>=2 && col<=4)continue;
   glass(k,x,1.45+floor*2.15,3.03,1.07,1.25,(col+floor*2)%5===0);
 }
 k.box('plasterDark',0,3.65,3.05,4.5,7.3,.16);
 for(let y=4.85;y<6.9;y+=1.75)for(let x of [-1.18,1.18])glass(k,x,y,3.16,1.1,1.1,true);
 k.box('concrete',0,2.62,4.0,5.4,.22,2.05);
 for(let x of [-2.35,2.35])k.box('bright',x,1.3,4.64,.24,2.6,.25);
 k.box('navy',0,1.3,3.24,3.4,2.55,.13);
 for(let x of [-.83,.83])glass(k,x,1.24,3.36,1.43,2.18,false);
 k.box('bright',-4.2,6.50,3.17,1.2,1.4,.09);
 k.box('red',-4.2,6.49,3.24,.36,1.13,.08);
 k.box('red',-4.2,6.49,3.30,1.06,.35,.08);
 label(k,'HOPITAL',-1.95,3.35,4.02,.092,'navy');
 for(const [x,y] of [[-5.5,5.8],[-3.9,3.7],[5.3,6.0],[-2.6,1.5],[4.6,2.4]])facadeDamage(k,x,y,3.13,Math.round(x*10+y));
 // roof ventilation and bent outdoor gate
 for(let x of [-3.3,2.4]){k.box('metal',x,8.05,-1,.85,.55,1.1);k.box('dark',x,8.38,-1,1.05,.12,1.25);}
 k.box('metal',-5.2,1.2,5.55,.09,2.4,.08,0,0,.27);
 k.box('metal',-3.75,.5,5.60,2.9,.07,.07,0,0,.14);
 for(let i=0;i<6;i++)k.box('metal',-5.2+i*.52,.55,5.60,.055,1.1,.06,0,0,.20);
 k.box('cardboard',4.3,.18,4.8,1.0,.35,.8);
 k.ball('trash',4.8,.42,5.05,0,0,0,.32,.34,.3);
 rubble(k,4.6,20);
 return k.finish();
}
function lycee(){
 const k=new MeshKit('lycee_delabre');
 k.box('plaster',0,4.1,-.25,13.8,8.2,6.6);
 k.box('concrete',0,.14,.1,14.7,.28,7.5);
 k.box('plasterDark',0,8.28,-.25,14.4,.2,6.95);
 k.box('navy',0,5.6,3.1,2.9,5.1,.19);
 for(let floor=0;floor<3;floor++)for(let col=0;col<7;col++){
   if(col===3)continue;
   const x=-5.7+col*1.9;
   glass(k,x,1.6+floor*2.3,3.12,1.28,1.25,(col+floor)%3===0);
   if((col+floor)%4===1){k.box('cardboard',x,1.6+floor*2.3,3.30,1.15,.19,.09,0,0,.07);k.box('cardboard',x,1.6+floor*2.3,3.38,.10,1.25,.06,0,0,-.2);}
 }
 // central glazed stairwell + entrance, porch and masonry steps
 for(let i=0;i<5;i++)glass(k,0,1.45+i*1.32,3.24,1.95,1.1,i===3);
 k.box('navy',0,.95,3.37,2.4,1.9,.18);
 k.box('concrete',0,2.42,4.10,4.25,.20,1.68);
 for(let i=0;i<4;i++)k.box('concrete',0,.13+i*.115,4.0+i*.37,3.5,.22,.65);
 k.box('bright',-2.25,7.65,3.3,3.3,.75,.16);
 label(k,'LYCEE',-2.03,7.93,3.41,.18,'navy');
 // perimeter fence beside gate
 for(let side of [-1,1]){
   const spanX=side*5.3;
   k.box('concrete',spanX,.55,4.7,4.1,1.10,.28);
   for(let x of [3.4,4.3,5.2,6.1])k.box('metal',side*x,1.45,4.75,.07,2.05,.06);
   k.box('metal',spanX,2.48,4.75,4.1,.10,.08);
 }
 // cracked plaster / graffiti under ground-floor windows
 for(const [x,y] of [[-6.4,6.3],[-4.8,3.4],[5.9,2.4],[3.9,5.8]])facadeDamage(k,x,y,3.23,Math.round(x*5+y));
 for(let i=0;i<8;i++)k.box(i%2?'purpleInk':'blueInk',-5.3+i*.22,.75+(i%3)*.10,3.25,.30,.065,.06,0,0,(i%4)*.31);
 k.box('navy',5.05,1.2,3.35,1.2,1.10,.09);
 k.box('cardboard',5.05,1.27,3.44,.96,.20,.08,0,0,.16);
 k.ball('trash',-6.2,.3,5.1,0,0,0,.23,.3,.25);
 rubble(k,4.55,15);
 return k.finish();
}
function sleepingPerson(k,x,z,cover,skin='skin',direction=1){
  k.box('cardboard',x,.06,z,1.45,.075,3.05);
  // Full sleeping bag: body lies lengthwise along the pavement, head supported.
  k.ball(cover,x,.32,z-.15,0,0,0,.58,.28,1.2);
  k.ball('dark',x,.17,z+1.02,0,0,0,.46,.17,.28);
  k.ball(skin,x,.34,z-1.35,0,0,0,.32,.27,.34);
  k.ball('blackHair',x,.51,z-1.44,0,0,0,.32,.13,.29);
  k.box('beige',x,.11,z-1.35,.85,.12,.5);
  for(const offset of [-.19,.19])k.ball(cover,x+offset,.27,z+.85,0,0,0,.24,.2,.45);
  k.box('bright',x+.1,.36,z-.13,.23,.01,1.6,0,0,.12);
}
function campement(){
 const k=new MeshKit('abri_de_rue');
 k.box('concrete',0,.035,0,7.6,.07,9.2);
 // Pavement cracks and chipped curb
 for(let z=-3.6;z<4;z+=1.15)k.box('plasterDark',-3.50,.078,z,.23,.02,.025,0,0,.2);
 k.box('bright',3.75,.22,0,.22,.35,9.1);
 k.box('dark',-3.75,.19,0,.18,.40,9.1);
 sleepingPerson(k,-1.65,-.8,'blueFabric','skin2');
 sleepingPerson(k,.68,1.1,'orangeFabric','skin');
 // A second person sits awake nearby, next to possessions.
 k.ball('jeans',2.7,.33,-2.15,0,0,0,.42,.27,.56);
 k.ball('green',2.7,.94,-2.15,0,0,0,.46,.51,.35);
 k.ball('skin2',2.7,1.56,-2.15,0,0,0,.30,.32,.30);
 k.ball('blackHair',2.7,1.78,-2.16,0,0,0,.31,.16,.30);
 k.box('dark',2.68,1.49,-1.84,.22,.045,.05);
 for(const off of [-.27,.27])k.box('jeans',2.7+off,.14,-1.65,.35,.19,.95);
 // Tarp shelter, roll-up bag, cardboard, shopping cart-like crates
 k.box('blueFabric',-2.5,1.0,2.6,1.95,.10,2.0,0,0,.28);
 k.box('blueLight',-2.1,.52,3.45,1.7,.07,1.0,0,0,-.3);
 for(let x of [-3.4,-1.5])k.tube('metal',x,.52,2.6,.045,1.05,0,0,.1);
 for(let [x,z] of [[2.1,2.9],[2.95,3.2],[-.2,3.6]]) {
   k.box('cardboard',x,.34,z,.8,.64,.67);
   k.box('rust',x,.71,z,.84,.07,.72);
 }
 k.ball('trash',2.65,.36,.6,0,0,0,.46,.48,.40);
 k.ball('trash',-3.1,.3,-2.8,0,0,0,.28,.33,.31);
 k.box('green',3.0,.42,-3.5,.70,.84,.65);
 k.box('dark',3.0,.88,-3.5,.88,.1,.82);
 k.tube('windowLite',.1,.12,-3.2,.09,.23);
 k.box('blueLight',-1.15,.15,-3.45,.65,.14,.70);
 return k.finish();
}
const models=[['hospital-delabre.glb',hospital()],['lycee-delabre.glb',lycee()],['campement-trottoir.glb',campement()]];
await mkdir(out,{recursive:true});
const exporter=new GLTFExporter();
for(const [filename,model] of models){
  const binary=await exporter.parseAsync(model,{binary:true,onlyVisible:true,trs:false});
  const result=Buffer.from(binary);
  await writeFile(path.join(out,filename),result);
  console.log(filename, result.length,'bytes',model.children.length,'draw calls',new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3()).toArray().map(n=>n.toFixed(2)));
}
