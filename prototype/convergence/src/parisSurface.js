import * as THREE from 'three';
const pool=new Map();
function surfaceMaterial(kind,color){
 const key=kind+':'+color;
 if(pool.has(key))return pool.get(key);
 const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
 const ctx=canvas.getContext('2d');
 ctx.fillStyle=kind==='asphalt'?'#b8b8b6':'#d0ccc3';ctx.fillRect(0,0,256,256);
 let seed=631;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<6000;i++){
  const v=Math.round(80+rand()*150);ctx.fillStyle='rgba('+v+','+v+','+v+','+(kind==='asphalt'?.20:.10)+')';
  ctx.fillRect(rand()*256,rand()*256,1+rand()*1.5,1+rand()*1.5);
 }
 if(kind!=='asphalt'){
  const step=kind==='cobbles'?16:64;
  ctx.strokeStyle=kind==='cobbles'?'#8c898366':'#928d7d55';ctx.lineWidth=1;
  for(let y=0;y<=256;y+=step){
   ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(256,y);ctx.stroke();
   for(let x=(y/step%2)*step/2;x<=256;x+=step){
    ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y+step);ctx.stroke();
   }
  }
 }else{
  ctx.strokeStyle='#73757522';ctx.lineWidth=1.5;
  ctx.beginPath();ctx.moveTo(25,0);ctx.lineTo(33,47);ctx.lineTo(21,65);ctx.lineTo(47,91);ctx.stroke();
 }
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
 map.wrapS=map.wrapT=THREE.RepeatWrapping;map.anisotropy=4;
 const material=new THREE.MeshStandardMaterial({color,map,roughness:.96,metalness:0});
 pool.set(key,material);return material;
}
export function texturedGround(group,kind,color,x,z,width,length,y=.03){
 if(width<=0)return;
 const geo=new THREE.PlaneGeometry(width,length);
 const uv=geo.attributes.uv;
 for(let i=0;i<uv.count;i++)uv.setXY(i,uv.getX(i)*width/4,uv.getY(i)*length/4);
 const mesh=new THREE.Mesh(geo,surfaceMaterial(kind,color));mesh.rotation.x=-Math.PI/2;
 mesh.position.set(x,y,z);mesh.receiveShadow=true;mesh.userData.parisOwnedGeometry=true;
 mesh.name='PARIS_SURFACE_'+kind;group.add(mesh);
}
