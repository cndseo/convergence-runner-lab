import * as THREE from 'three';

// Deterministic tileable asphalt: actual albedo microtexture without network downloads.
export function makeAsphaltTexture(length){
 const canvas=document.createElement('canvas');
 canvas.width=256;canvas.height=256;
 const ctx=canvas.getContext('2d');
 ctx.fillStyle='#747779';ctx.fillRect(0,0,256,256);
 let seed=193847;
 const random=()=>{seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<9800;i++){
  const shade=35+Math.floor(random()*170);
  ctx.fillStyle='rgba('+shade+','+shade+','+shade+','+(0.025+random()*.13)+')';
  const size=.35+random()*1.9;
  ctx.fillRect(random()*256,random()*256,size,size);
 }
 for(let i=0;i<12;i++){
  const x=random()*256,y=random()*256;
  ctx.strokeStyle='rgba(35,40,43,0.11)';
  ctx.lineWidth=.35+random()*.75;
  ctx.beginPath();ctx.moveTo(x,y);
  ctx.bezierCurveTo(x+random()*18,y+13,x-8,y+26,x+random()*24,y+39);
  ctx.stroke();
 }
 const texture=new THREE.CanvasTexture(canvas);
 texture.wrapS=THREE.RepeatWrapping;
 texture.wrapT=THREE.RepeatWrapping;
 texture.repeat.set(1.9,Math.max(8,length/6));
 texture.anisotropy=4;
 texture.colorSpace=THREE.SRGBColorSpace;
 texture.needsUpdate=true;
 return texture;
}
