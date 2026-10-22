import * as THREE from 'three';

const BASE=(import.meta.env?.BASE_URL||'/')+'assets/characters/';
let shared;
function texture(canvas){
 const map=new THREE.CanvasTexture(canvas);
 map.colorSpace=THREE.SRGBColorSpace;
 map.minFilter=THREE.LinearMipmapLinearFilter;
 map.magFilter=THREE.LinearFilter;
 const pixels=canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data;
 let bottom=canvas.height-1;
 for(;bottom>0;bottom--){
  let opaque=0;
  for(let x=0;x<canvas.width;x++)if(pixels[(bottom*canvas.width+x)*4+3]>128)opaque++;
  if(opaque>=4)break;
 }
 map.userData.foot=(canvas.height-1-bottom)/canvas.height;
 return map;
}
function cut(image,x,y,w,h){
 const c=document.createElement('canvas');c.width=w;c.height=h;
 c.getContext('2d').drawImage(image,x,y,w,h,0,0,w,h);
 return c;
}
function crowdTexture(im){
 const c=cut(im,0,0,im.width,im.height),ctx=c.getContext('2d');
 const data=ctx.getImageData(0,0,c.width,c.height),p=data.data;
 for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){
  const k=(y*c.width+x)*4;
  // Original references contain a white studio floor under the shoes.
  // Remove only near-white floor/highlights below the waist; retain coloured soles.
  const hi=Math.max(p[k],p[k+1],p[k+2]),lo=Math.min(p[k],p[k+1],p[k+2]);
  if(y>c.height*.59 && hi-lo<25 && lo>208)
   p[k+3]*=1-Math.min(1,(lo-208)/22);
  // Feather clipped smoke at source borders instead of displaying rectangular edges.
  p[k+3]*=Math.min(1,y/65,x/16,(c.width-1-x)/16);
 }
 ctx.putImageData(data,0,0);
 return texture(c);
}
export function preloadMarseilleSprites(){
 if(!shared)shared=Promise.all(['marseille-front.webp','marseille-back.webp','marseille-quarter-run.webp'].map(file=>
  new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=reject;im.src=BASE+file;})
 )).then(([front,back,atlas])=>{
  const maps={front:[crowdTexture(front)],
   back:[crowdTexture(back)],
   'quarter-front':[],'quarter-back':[]};
  // One shared UV tile per animation frame. No GLB loading or per-frame canvases.
  for(let row=0;row<2;row++)for(let col=0;col<4;col++){
   const cell=cut(atlas,col*atlas.width/4,row*atlas.height/2,atlas.width/4,atlas.height/2);
   maps[row?'quarter-back':'quarter-front'].push(texture(cell));
  }
  return {maps,frontAspect:front.width/front.height,backAspect:back.width/back.height};
 }).catch(e=>{shared=null;throw e;});
 return shared;
}
export function createMarseilleSprite(art,index){
 const root=new THREE.Group();root.name='MARSEILLE_2D_GROUP_'+index;
 const geo=new THREE.PlaneGeometry(1,1,24,32);
 geo.translate(0,.5,0);
 const rest=geo.attributes.position.array.slice();
 const mat=new THREE.MeshBasicMaterial({map:art.maps.back[0],transparent:true,
  alphaTest:.055,depthWrite:false,side:THREE.DoubleSide,toneMapped:false});
 const body=new THREE.Mesh(geo,mat);body.name='DIRECTIONAL_ANIMATED_SPRITE';
 root.add(body);
 const ghost=new THREE.Mesh(geo,mat.clone());ghost.name='SMOOTH_DIRECTION_TRANSITION';ghost.visible=false;root.add(ghost);
 const shadow=new THREE.Mesh(new THREE.CircleGeometry(1,20),
  new THREE.MeshBasicMaterial({color:0x101b2a,transparent:true,opacity:.17,depthWrite:false}));
 shadow.rotation.x=-Math.PI/2;shadow.position.y=.018;shadow.scale.set(1.0,.46,1);
 root.add(shadow);
 const unit={model:root,body,ghost,turn:0,lastMirror:false,shadow,geometry:geo,rest,material:mat,
   phase:index*.731,view:'back',frame:0,height:3.05+(index%4)*.10,opacity:0};
 return unit;
}
export function stepMarseilleSprite(actor,pose,elapsed,dt,art,camera){
 const {body,geometry,rest,material,model,shadow}=actor;
 actor.phase+=dt*Math.min(24,Math.max(13,pose.speed*2.15));
 const phase=actor.phase;
 const diagonal=pose.view.startsWith('quarter');
 const frame=diagonal?Math.floor(phase/Math.PI*2)%4:0;
 if(actor.view!==pose.view || actor.lastMirror!==pose.mirror){
  actor.ghost.material.map=material.map;
  actor.ghost.scale.copy(body.scale);actor.ghost.position.copy(body.position);
  actor.turn=.20;actor.lastMirror=pose.mirror;
 }
 actor.turn=Math.max(0,actor.turn-dt);
 const blend=actor.turn/.20;
 actor.ghost.visible=blend>0;
 actor.ghost.material.opacity=pose.opacity*blend;
 material.map=art.maps[pose.view][frame];material.opacity=pose.opacity*(1-blend);
 actor.view=pose.view;actor.frame=frame;actor.opacity=pose.opacity;
 const h=actor.height*(diagonal?1.03:1);
 const aspect=diagonal?.75:pose.view==='front'?art.frontAspect:art.backAspect;
 // All billboards remain vertical: their foot baseline stays on the road.
 model.position.set(pose.x,0,pose.z);
 body.rotation.y=Math.atan2(camera.position.x-pose.x,camera.position.z-pose.z);
 actor.ghost.rotation.y=body.rotation.y;
 body.scale.set((pose.mirror?-1:1)*h*aspect,h,1);
 body.position.y=-h*(material.map.userData.foot||0);
 const pos=geometry.attributes.position;
 for(let v=0;v<pos.count;v++){
  const x=rest[v*3],y=rest[v*3+1];
  // Front/back supplied art uses a continuous, local running deformation.
  // A planted bottom edge and independent leg/arm phases avoid sliding cards.
  const legs=Math.max(0,1-y/.43);
  const stride=Math.sin(phase+(x<0?0:Math.PI)+Math.floor((x+.5)*5)*.63);
  const torso=Math.sin(phase*.5+x*9);
  pos.array[v*3]=x+(diagonal?.004:.048)*stride*legs
     +.009*torso*Math.sin(y*Math.PI);
  pos.array[v*3+1]=y+(diagonal?.002:.035)*Math.max(0,stride)*legs*y*3
     +.008*Math.abs(Math.sin(phase))*Math.sin(y*Math.PI);
 }
 pos.needsUpdate=true;
 shadow.material.opacity=.16*pose.opacity;
 shadow.scale.set(h*aspect*.40,h*.15,1);
 model.visible=pose.opacity>.001;
}
export function disposeMarseilleSprite(actor){
 actor.model.removeFromParent();actor.geometry.dispose();actor.material.dispose();
 actor.shadow.geometry.dispose();actor.shadow.material.dispose();actor.ghost.material.dispose();
}

export function createSmokeTexture(){
 const c=document.createElement('canvas');c.width=c.height=96;
 const ctx=c.getContext('2d'),gradient=ctx.createRadialGradient(48,48,2,48,48,47);
 gradient.addColorStop(0,'rgba(255,255,255,.70)');
 gradient.addColorStop(.38,'rgba(255,255,255,.40)');
 gradient.addColorStop(1,'rgba(255,255,255,0)');
 ctx.fillStyle=gradient;ctx.fillRect(0,0,96,96);
 return texture(c);
}
