import * as THREE from 'three';
import {tvArtIndex,tvDisplay} from './tvGateMapping.mjs';

const atlas=new Image();
let ready=false;
const listeners=new Set();
// One webp atlas contains the 15 approved images; no additional network calls per gate.
atlas.onload=()=>{ready=true;for(const redraw of listeners)redraw();listeners.clear();};
atlas.onerror=()=>{ready=false;listeners.clear();console.warn('TV atlas absent: procedural broadcast fallback');};
atlas.src=import.meta.env.BASE_URL+'assets/tv/tv-approved-atlas.webp';
const brands=['BFMTV','CNEWS'];
function round(ctx,x,y,w,h,r,color){
 ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill();
}
function paint(ctx,choice,artIndex){
 const {number,topic,type}=tvDisplay(choice),bad=type==='malus';
 const network= [9,10,11,12,13,4].includes(artIndex)?'CNEWS':'BFMTV';
 const accent=bad?'#f63250':'#3cebbd';
 ctx.clearRect(0,0,512,288);
 ctx.fillStyle='#060e22';ctx.fillRect(0,0,512,288);
 if(ready){
   const ix=artIndex%4, iy=Math.floor(artIndex/4);
   ctx.drawImage(atlas,ix*100,iy*58,100,58,0,0,512,288);
 }else{
   const bg=ctx.createLinearGradient(0,0,512,288);
   bg.addColorStop(0,'#09234c');bg.addColorStop(.6,'#17417e');bg.addColorStop(1,'#111629');
   ctx.fillStyle=bg;ctx.fillRect(0,0,512,288);
   ctx.fillStyle='rgba(125,193,255,.12)';
   for(let i=0;i<18;i++)ctx.fillRect(i*34-120,(i*37)%145,18,75);
 }
 // The source illustrations include fixed numbers. Cover them completely:
 // the live value must always be the solver's real choice, not screenshot art.
 round(ctx,11,126,490,128,8,'rgba(2,8,24,.97)');
 ctx.strokeStyle=accent;ctx.lineWidth=3;ctx.strokeRect(13,127,486,124);
 ctx.fillStyle='rgba(4,8,18,.98)';ctx.fillRect(10,6,181,49);
 ctx.fillStyle=network==='BFMTV'?'#247dff':'#bb1729';
 ctx.fillRect(16,12,164,36);
 ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.font='900 27px Arial';ctx.fillText(network,98,30);
 ctx.textAlign='right';ctx.fillStyle='#fff';
 ctx.font='800 17px Arial';ctx.fillText('FICTION · DIRECT',494,31);
 ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';
 const size=number.length>=6?75:number.length===5?86:110;
 ctx.font='900 '+size+'px Arial';ctx.strokeStyle='#030a20';ctx.lineWidth=10;
 ctx.strokeText(number,256,176);ctx.fillStyle='#ffffff';ctx.fillText(number,256,176);
 ctx.fillStyle=accent;ctx.font='900 27px Arial';ctx.fillText(topic,256,229,470);
 ctx.fillStyle=bad?'#c52038':'#0862c2';ctx.fillRect(0,263,512,25);
 ctx.font='800 17px Arial';ctx.fillStyle='#fff';
 ctx.fillText(type==='conditional'?('BONUS CONDITIONNEL · '+tvDisplay(choice).detail):bad?'ALERTE INFO · EFFET NÉGATIF':'ÉVEIL COLLECTIF · BONUS',256,275);
}
// Release GPU textures when the level is restarted; a fresh level builds
// twenty TV panels, so retaining old CanvasTextures would grow mobile memory.
export function disposeTVGateArtwork(root){
 const monitor=root?.userData?.tvScreen;
 if(!monitor)return;
 monitor.traverse(object=>{
  if(!object.isMesh)return;
  object.geometry?.dispose();
  const materials=Array.isArray(object.material)?object.material:[object.material];
  for(const mat of materials){mat?.map?.dispose();mat?.dispose();}
 });
 delete root.userData.tvScreen;
}
export function makeTVGateArtwork(choice,root,gateIndex=0){
 const artIndex=tvArtIndex(choice,gateIndex);
 const cnv=document.createElement('canvas');cnv.width=512;cnv.height=288;
 const ctx=cnv.getContext('2d');const redraw=()=>{paint(ctx,choice,artIndex);texture.needsUpdate=true;};
 const texture=new THREE.CanvasTexture(cnv);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;
 redraw();if(!ready)listeners.add(redraw);
 const monitor=new THREE.Group();monitor.name='TV_FLAT_SCREEN';
 // Bezel, glass, a very thin modern screen and two short support legs.
 const plastic=new THREE.MeshStandardMaterial({color:0x11151e,roughness:.26,metalness:.38});
 const glass=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide});
 const box=(w,h,d,x,y,z,mat)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);monitor.add(m);return m;};
 box(4.07,2.47,.12,0,0,0,plastic);
 const screen=new THREE.Mesh(new THREE.PlaneGeometry(3.91,2.26),glass);
 screen.position.z=.070;screen.name='TV_LIVE_SCREEN';monitor.add(screen);
 box(.57,.065,.08,0,-1.25,.005,plastic);
 for(const x of [-1.18,1.18])box(.13,.47,.11,x,-1.44,-.02,plastic);
 const led=new THREE.Mesh(new THREE.SphereGeometry(.027,8,8),new THREE.MeshBasicMaterial({color:0x45e9f1}));
 led.position.set(1.89,-1.17,.086);monitor.add(led);
 monitor.position.set(0,2.27,.47);
 monitor.userData={tvIndex:artIndex,tvValue:tvDisplay(choice).number,dynamic:false,texture};
 root.add(monitor);
 root.userData.tvScreen=monitor;
 return monitor;
}
