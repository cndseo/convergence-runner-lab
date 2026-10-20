import * as THREE from 'three';
import {fixedTVFile,FIXED_TV_KEYS} from './fixedTVCatalog.mjs';
import {gateLabel} from './tactics.mjs';

// TV images are final, fixed graphical assets. NO generated numbers, NO overlay
// strip, NO fallback television artwork: generator must use one of 16 TV keys.
const loader=new THREE.TextureLoader();
const cached=new Map();
function acquire(file){
 let item=cached.get(file);
 if(!item){
  item={refs:0,loaded:false,subscribers:new Set(),texture:null};
  item.texture=loader.load(import.meta.env.BASE_URL+'assets/tv-final/'+file,()=>{
   item.loaded=true;
   for(const cb of item.subscribers)cb(item.texture.image);
   item.subscribers.clear();
  },undefined,error=>console.error('TV approved PNG unavailable',file,error));
  item.texture.colorSpace=THREE.SRGBColorSpace;
  item.texture.minFilter=THREE.LinearMipmapLinearFilter;
  item.texture.magFilter=THREE.LinearFilter;
  item.texture.anisotropy=8;
  cached.set(file,item);
 }
 item.refs++;return item;
}
function release(file){
 const item=cached.get(file);if(!item)return;
 if(--item.refs<=0){
  item.texture.dispose();
  item.subscribers.clear();
  cached.delete(file);
 }
}
export function makeTVGateArtwork(choice,root){
 const file=fixedTVFile(choice); // throws on an image/number mismatch
 const item=acquire(file);
 const mat=new THREE.MeshBasicMaterial({
  map:item.texture,alphaTest:.16,transparent:false,
  depthWrite:true,depthTest:true,side:THREE.DoubleSide
 });
 const monitor=new THREE.Group();monitor.name='TV_FLAT_SCREEN';
 const screen=new THREE.Mesh(new THREE.PlaneGeometry(1,1),mat);
 screen.name='TV_LIVE_SCREEN';monitor.add(screen);
 // Keep both complete PNG silhouettes readable in the narrow mobile viewport.
 const width=3.2;
 const place=image=>{
  if(!screen.parent||!image)return;
  const ratio=image.height/image.width;
  screen.scale.set(width,width*ratio,1);
  screen.position.set(0,width*ratio/2+.025,.15);
  monitor.userData.resolution=[image.width,image.height];
  monitor.userData.ready=true;
 };
 monitor.userData={
  source:'fixed-png',originalFile:file,adapted:false,
  texture:item.texture,
  tvKey:choice.tvKey,
  tvValue:gateLabel(choice).title,
  tvIndex:FIXED_TV_KEYS.indexOf(choice.tvKey),
  ready:false,resolution:[0,0]
 };
 root.add(monitor);root.userData.tvScreen=monitor;
 if(item.loaded)place(item.texture.image);
 else item.subscribers.add(place);
 return monitor;
}
export function disposeTVGateArtwork(root){
 const monitor=root?.userData?.tvScreen;
 if(!monitor)return;
 for(const part of monitor.children)
  if(part.isMesh){part.geometry.dispose();part.material.dispose();}
 release(monitor.userData.originalFile);
 delete root.userData.tvScreen;
}
