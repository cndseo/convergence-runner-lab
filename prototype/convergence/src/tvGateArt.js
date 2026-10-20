import * as THREE from 'three';
import {tvDisplay} from './tvGateMapping.mjs';
import {ORIGINAL_TV_CHOICES,matchingOriginalTV,templateOriginalTV} from './tvOriginalMapping.mjs';

// All gate displays originate from the approved transparent TV PNGs.
const loader=new THREE.TextureLoader(),baseCache=new Map(),variantCache=new Map();
function getBase(file){
 let e=baseCache.get(file);
 if(!e){
  e={refs:0,ready:false,subscribers:new Set(),texture:null};
  e.texture=loader.load(import.meta.env.BASE_URL+'assets/tv-originals/'+file,()=>{
   e.ready=true;
   for(const fn of e.subscribers)fn(e.texture.image);
   e.subscribers.clear();
  },undefined,err=>console.warn('Missing approved TV asset',file,err?.message));
  e.texture.colorSpace=THREE.SRGBColorSpace;
  e.texture.minFilter=THREE.LinearMipmapLinearFilter;
  e.texture.magFilter=THREE.LinearFilter;e.texture.anisotropy=8;
  baseCache.set(file,e);
 }
 e.refs++;return e;
}
function paintActualPNG(canvas,img,choice){
 canvas.width=img.width;canvas.height=img.height;
 const c=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
 c.clearRect(0,0,w,h);c.drawImage(img,0,0);
 const data=tvDisplay(choice),bad=data.type==='malus';
 // Replace the source's *printed* value only within the television image.
 // No external number, reconstructed TV frame or secondary 3-D placard.
 const x=Math.round(w*.016),y=Math.round(h*.385),height=Math.round(h*.505);
 const bg=c.createLinearGradient(0,y,0,y+height);
 bg.addColorStop(0,bad?'#26121d':'#0e1f3a');
 bg.addColorStop(.60,bad?'#660e2a':'#0c3d72');
 bg.addColorStop(1,'#050b19');
 c.fillStyle=bg;c.fillRect(x,y,w-2*x,height);
 c.lineWidth=Math.max(5,w*.007);
 c.strokeStyle=bad?'#fc5c72':'#45dcff';c.strokeRect(x+2,y+2,w-2*x-4,height-4);
 c.textAlign='center';c.textBaseline='middle';c.lineJoin='round';
 c.font='900 '+Math.round(w*(data.number.length>4?.11:.17))+'px Arial';
 c.strokeStyle='#081022';c.lineWidth=Math.round(w*.01);
 c.strokeText(data.number,w*.25,y+height*.40,w*.43);
 c.fillStyle='#ffffff';c.fillText(data.number,w*.25,y+height*.40,w*.43);
 c.fillStyle=bad?'#ffd9e0':'#b8f8ff';
 c.font='900 '+Math.round(w*.067)+'px Arial';
 c.fillText(data.topic||'RENFORTS',w*.72,y+height*.40,w*.50);
 const extra=choice.op==='conditional'
  ?'SI '+(choice.condition==='shield'?'PROT. ':'FOULE ')+(choice.condition==='atMost'?'≤ ':'≥ ')+
   choice.threshold+' · SINON '+(choice.elseValue>=0?'+':'')+(choice.elseValue||0)
  :(bad?'CONSÉQUENCE SUR LA MOBILISATION':'BONUS SUR LA MOBILISATION');
 c.fillStyle='#f4f7fc';c.font='bold '+Math.round(w*.030)+'px Arial';
 c.fillText(extra,w*.50,y+height*.82,w*.93);
}
function makeVariant(file,choice,source){
 const d=tvDisplay(choice),key=JSON.stringify([file,d.number,d.topic,choice.threshold,choice.elseValue]);
 let entry=variantCache.get(key);
 if(!entry){
  const canvas=document.createElement('canvas');canvas.width=1232;canvas.height=850;
  const tex=new THREE.CanvasTexture(canvas);
  tex.colorSpace=THREE.SRGBColorSpace;
  tex.minFilter=THREE.LinearMipmapLinearFilter;tex.magFilter=THREE.LinearFilter;tex.anisotropy=8;
  entry={key,refs:0,texture:tex,ready:false};variantCache.set(key,entry);
  const fill=img=>{
   if(!variantCache.has(key)||!img)return;
   paintActualPNG(canvas,img,choice);
   tex.needsUpdate=true;entry.ready=true;
  };
  if(source.ready)fill(source.texture.image);else source.subscribers.add(fill);
 }
 entry.refs++;return entry;
}
export function makeTVGateArtwork(choice,root,index=0){
 const matched=matchingOriginalTV(choice),file=matched||templateOriginalTV(choice,index);
 const src=getBase(file),variant=matched?null:makeVariant(file,choice,src);
 const tex=variant?.texture||src.texture;
 // Opaque pixels write depth; transparent pixels are cut out. Motorbikes and
 // CRS behind the TV cannot paint over it as in the former translucent setup.
 const mat=new THREE.MeshBasicMaterial({map:tex,alphaTest:.18,transparent:false,
  depthTest:true,depthWrite:true,side:THREE.DoubleSide});
 const tv=new THREE.Group();tv.name='TV_FLAT_SCREEN';
 const screen=new THREE.Mesh(new THREE.PlaneGeometry(1,1),mat);
 screen.name='TV_LIVE_SCREEN';tv.add(screen);
 const position=img=>{
  if(!img||!screen.parent)return;
  const ratio=img.height/img.width;
  screen.scale.set(4.55,4.55*ratio,1);
  screen.position.set(0,4.55*ratio*.5+.02,.14);
  tv.userData.resolution=[img.width,img.height];
  tv.userData.ready=true;
 };
 tv.userData={source:'original-png',originalFile:file,adapted:!matched,
  texture:tex,compositeKey:variant?.key,tvIndex:ORIGINAL_TV_CHOICES.findIndex(v=>v.file===file),
  tvValue:tvDisplay(choice).number,resolution:[0,0],ready:false};
 root.add(tv);root.userData.tvScreen=tv;
 if(src.ready)position(src.texture.image);else src.subscribers.add(position);
 return tv;
}
export function disposeTVGateArtwork(root){
 const tv=root?.userData?.tvScreen;if(!tv)return;
 for(const mesh of tv.children)if(mesh.isMesh){mesh.geometry.dispose();mesh.material.dispose();}
 if(tv.userData.compositeKey){
  const v=variantCache.get(tv.userData.compositeKey);
  if(v&&--v.refs<=0){v.texture.dispose();variantCache.delete(v.key);}
 }
 const source=baseCache.get(tv.userData.originalFile);
 if(source&&--source.refs<=0){source.texture.dispose();baseCache.delete(tv.userData.originalFile);}
 delete root.userData.tvScreen;
}
