import * as THREE from 'three';
import {ParisBatch,PALETTE as P} from './parisArchitecture.js';
export function districtSky(c){
 const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=512;
 const ctx=canvas.getContext('2d'),gradient=ctx.createLinearGradient(0,0,0,512);
 gradient.addColorStop(0,c.sky[0]);gradient.addColorStop(.48,c.sky[1]);gradient.addColorStop(1,c.sky[2]);
 ctx.fillStyle=gradient;ctx.fillRect(0,0,1024,512);
 const light=ctx.createRadialGradient(735,312,3,735,312,260);
 light.addColorStop(0,c.id>7?'#ffdfa777':'#ffefbf55');light.addColorStop(1,'#fff3cc00');
 ctx.fillStyle=light;ctx.fillRect(0,0,1024,512);
 // Soft elongated cloud banks, deterministic per quartier and generated once.
 for(let i=0;i<16;i++){
  const x=(i*193+c.id*43)%1200-90,y=55+(i*67+c.id*17)%230;
  const r=85+(i%4)*23;
  ctx.save();ctx.translate(x,y);ctx.scale(1,.22+(i%3)*.04);
  const cloud=ctx.createRadialGradient(0,0,0,0,0,r);
  cloud.addColorStop(0,c.id>8?'rgba(236,202,190,.35)':'rgba(250,245,230,.48)');
  cloud.addColorStop(.5,'rgba(239,232,215,.20)');cloud.addColorStop(1,'rgba(230,226,218,0)');
  ctx.fillStyle=cloud;ctx.beginPath();ctx.arc(0,0,r,0,Math.PI*2);ctx.fill();ctx.restore();
 }
 const haze=ctx.createLinearGradient(0,300,0,512);
 haze.addColorStop(0,'#e2d7c000');haze.addColorStop(1,c.id>8?'#c9b7bb77':'#eadacb77');
 ctx.fillStyle=haze;ctx.fillRect(0,300,1024,212);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}
export function urbanBackdrop(c,length){
 const b=new ParisBatch('PARIS_DISTANT_CITY');
 for(let row=0;row<2;row++)for(let i=-7;i<=7;i++){
  if((c.id===11&&Math.abs(i)<2)||(c.id===12&&Math.abs(i)<3))continue;
  const x=i*9+row*3,z=-length-72-row*30,h=(c.id===12?9:13)+(Math.abs(i*3+c.id+row)%6)*1.6;
  const stone=[0xc1bbae,0xb7b4b0,0xc8bcab][Math.abs(i+row)%3];
  b.box(stone,x,h/2,z,8.7,h,10);
  for(const side of [-1,1])b.part('box',P.slate,x+side*2.8,h+.68,z,3.0,.16,10.7,0,0,-side*.45);
  b.box(P.slate,x,h+1.34,z,3.3,.1,10.7);
  b.box(P.cream,x,h-1,z+5.1,9,.35,.35);
  for(let f=0;f<Math.floor(h/3)-1;f++)for(let col=-2;col<=2;col++)
   b.box(0x6d7980,x+col*1.5,3.7+f*2.8,z+5.1,.75,1.4,.08);
  for(const dx of [-2.7,2.7])b.box(P.stone,x+dx,h+1.6,z,.7,2,.8);
 }
 return b.finish();
}
