import * as THREE from 'three';
import {tvArtIndex,tvDisplay} from './tvGateMapping.mjs';
import {matchingOriginalTV,ORIGINAL_TV_CHOICES} from './tvOriginalMapping.mjs';
const originalLoader=new THREE.TextureLoader();
const originalTextureCache=new Map();
function acquireOriginalTexture(file){
 let entry=originalTextureCache.get(file);
 if(!entry){
  const texture=originalLoader.load(import.meta.env.BASE_URL+'assets/tv-originals/'+file);
  texture.colorSpace=THREE.SRGBColorSpace;
  texture.minFilter=THREE.LinearMipmapLinearFilter;
  texture.magFilter=THREE.LinearFilter;
  texture.anisotropy=8;
  entry={texture,users:0};originalTextureCache.set(file,entry);
 }
 entry.users++;return entry.texture;
}
function releaseOriginalTexture(file){
 const entry=originalTextureCache.get(file);if(!entry)return;
 entry.users--;
 if(entry.users<=0){entry.texture.dispose();originalTextureCache.delete(file);}
}


const W=1024,H=576;
function rectangle(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(x,y,w,h);}
function ellipse(c,x,y,rx,ry,color){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fillStyle=color;c.fill();}
function round(c,x,y,w,h,r,color){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
function line(c,x1,y1,x2,y2,color,width=3){c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();}

// Native HD news graphics: no 100x58 thumbnails, no numbers from old files,
// no second overlay plane. All information is drawn ONCE into this one screen.
export function paintTVBroadcast(ctx,choice,artIndex,width=W,height=H){
 const d=tvDisplay(choice),bad=d.type==='malus';
 const network=[9,10,11,12,13,4].includes(artIndex)?'CNEWS':'BFMTV';
 const primary=network==='CNEWS'?'#c9002b':'#1079d8';
 const accent=bad?'#fd3d55':'#38e8ce';
 ctx.clearRect(0,0,width,height);
 ctx.save();ctx.scale(width/W,height/H);
 // Upper two thirds: crisp vector newsroom and a distinct illustration.
 const bg=ctx.createLinearGradient(0,0,W,385);
 bg.addColorStop(0,network==='CNEWS'?'#0e1741':'#102d64');
 bg.addColorStop(.65,network==='CNEWS'?'#142457':'#174789');
 bg.addColorStop(1,'#060c24');
 rectangle(ctx,0,0,W,385,bg);
 for(let j=0;j<12;j++){
  rectangle(ctx,(j*191+35)%1024,45,54+(j%3)*38,270,
   j%3===0?'#182e69':'#102c58');
  for(let k=0;k<8;k++)rectangle(ctx,(j*191+44)%1024,68+k*32,26,10,
   j%3===0?'#315da2':'#2371ba');
 }
 // Dynamic news-photo illustration: silhouettes, recognizable topic props,
 // hard edges instead of upscaled pixels.
 const hue=['#ff705e','#77ceff','#ec6744','#ffd35b','#9de8fd','#df5d72','#63c0ff','#ffd6a1'][artIndex%8];
 rectangle(ctx,580,75,405,280,'#081632');
 const glow=ctx.createRadialGradient(782,170,12,782,170,270);
 glow.addColorStop(0,hue+'c0');glow.addColorStop(1,'#08163200');
 rectangle(ctx,580,70,410,293,glow);
 // Perspective street and Parisian rooftops.
 for(let i=0;i<8;i++){
  const x=590+i*52;const h=100+(i*17+artIndex*23)%105;
  rectangle(ctx,x,353-h,45,h,'#1b325c');
  for(let k=0;k<4;k++)rectangle(ctx,x+8,364-h+12+k*23,9,12,'#70a9cd');
 }
 // Relevant high-contrast pictogram (visual content, not duplicated text).
 const kind=(choice.bonusFaction||choice.kind||choice.op);
 ctx.save();ctx.translate(782,222);
 ctx.strokeStyle='#ffffff';ctx.fillStyle='#ffffff';ctx.lineWidth=12;ctx.lineJoin='round';
 if(['shield','barrier','debris'].includes(kind)){
  ctx.beginPath();ctx.moveTo(-85,-70);ctx.lineTo(85,-70);ctx.lineTo(70,32);
  ctx.quadraticCurveTo(0,118,-70,32);ctx.closePath();ctx.stroke();
  ctx.beginPath();ctx.moveTo(-38,0);ctx.lineTo(-5,34);ctx.lineTo(55,-30);ctx.stroke();
 } else if(kind==='van'||kind==='bravm'){
  round(ctx,-105,-36,210,86,13,'#f3f6fa');
  rectangle(ctx,-75,-20,135,35,'#234f8e');
  ellipse(ctx,-65,54,21,21,'#0d1529');ellipse(ctx,68,54,21,21,'#0d1529');
  if(kind==='bravm'){line(ctx,-55,-72,32,-72,'#57b8ff',10);line(ctx,1,-100,1,-57,'#57b8ff',10);}
 } else if(kind==='infirmieres'||kind==='pompiers'){
  round(ctx,-23,-95,46,192,8,'#fff');
  round(ctx,-95,-22,190,46,8,'#fff');
  if(kind==='pompiers'){ctx.fillStyle='#ff9b3d';ctx.beginPath();ctx.moveTo(30,-107);ctx.quadraticCurveTo(-90,5,4,100);ctx.quadraticCurveTo(102,60,30,-107);ctx.fill();}
 } else {
  // Marching crowd and upward arrows: Gen Z, gilets, renforts, ralliement.
  for(let i=0;i<4;i++){
   const px=-100+i*61;
   ellipse(ctx,px,-42-(i%2)*24,23,23,'#edf6ff');
   round(ctx,px-28,-12-(i%2)*24,56,95,16,i%2?'#f7e94d':'#78c9fc');
   line(ctx,px-33,14,px-60,76,'#e4eef9',12);
  }
  line(ctx,0,-114,0,-79,'#e2fdff',10);
  line(ctx,-24,-95,0,-119,'#e2fdff',10);
  line(ctx,24,-95,0,-119,'#e2fdff',10);
 }
 ctx.restore();
 // News presenter on the left, sharp face and newsroom coat.
 ellipse(ctx,234,155,99,110,'#362838');
 ellipse(ctx,235,170,80,103,'#e2ac89');
 ellipse(ctx,206,163,9,7,'#222436');ellipse(ctx,259,163,9,7,'#222436');
 line(ctx,215,221,255,221,'#9c4658',5);
 ctx.fillStyle='#29283b';ctx.beginPath();ctx.moveTo(120,355);ctx.lineTo(143,260);
 ctx.quadraticCurveTo(220,215,305,270);ctx.lineTo(349,355);ctx.closePath();ctx.fill();
 ctx.fillStyle='#f0e7df';ctx.beginPath();ctx.moveTo(205,269);ctx.lineTo(237,329);
 ctx.lineTo(274,268);ctx.closePath();ctx.fill();
 // Only inside the TV picture: source label and built-in newsroom overlay.
 rectangle(ctx,15,16,network==='BFMTV'?198:192,63,'#09101c');
 rectangle(ctx,21,22,network==='BFMTV'?186:180,51,primary);
 ctx.font='900 45px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillStyle='#fff';ctx.fillText(network,113,47);
 round(ctx,811,21,196,48,7,'#080f22');
 ctx.font='800 23px Arial';ctx.fillText('FICTION • DIRECT',908,45);
 // Continuous, opaque LOWER THIRD: the numeric data is part of the TV image,
 // never an extra card or a number stamped over a pre-numbered screenshot.
 rectangle(ctx,0,385,W,191,'#050b19');
 rectangle(ctx,0,385,W,9,accent);
 rectangle(ctx,0,564,W,12,primary);
 rectangle(ctx,16,415,269,125,bad?'#461225':'#12345f');
 ctx.font=d.number.length>5?'bold 88px Arial':'bold 113px Arial';
 ctx.fillStyle='#ffffff';ctx.fillText(d.number,150,474);
 ctx.textAlign='left';ctx.font='900 52px Arial';ctx.fillStyle=accent;
 ctx.fillText(d.topic,311,466,680);
 ctx.font='bold 21px Arial';ctx.fillStyle='#e7f5ff';
 const subtitle=d.type==='conditional'?'BONUS CONDITIONNEL • '+d.detail:
   bad?'CONSÉQUENCE SUR LA MOBILISATION':'EFFET SUR LE NOMBRE DE MANIFESTANTS';
 ctx.fillText(subtitle,314,523,685);
 ctx.restore();
}

export function disposeTVGateArtwork(root){
 const tv=root?.userData?.tvScreen;if(!tv)return;
 const originalFile=tv.userData.originalFile;
 tv.traverse(obj=>{
  if(!obj.isMesh)return;
  obj.geometry?.dispose();
  for(const mat of (Array.isArray(obj.material)?obj.material:[obj.material])){
   if(!originalFile)mat?.map?.dispose();
   mat?.dispose();
  }
 });
 if(originalFile)releaseOriginalTexture(originalFile);
 delete root.userData.tvScreen;
}
export function makeTVGateArtwork(choice,root,gateIndex=0){
 const file=matchingOriginalTV(choice);
 if(file){
  // The generated PNG *is* the TV (bezel, stand and picture). Do not redraw it
  // or place another monitor/frame/number on top of the artwork.
  const tex=acquireOriginalTexture(file);
  const mat=new THREE.MeshBasicMaterial({
   map:tex,transparent:true,alphaTest:.07,depthWrite:false,side:THREE.DoubleSide
  });
  const tv=new THREE.Group();tv.name='TV_FLAT_SCREEN';
  const screen=new THREE.Mesh(new THREE.PlaneGeometry(1,1),mat);
  screen.name='TV_LIVE_SCREEN';
  const width=4.55;
  function positionScreen(){
   const im=tex.image;
   const ratio=im?.width&&im?.height?im.height/im.width:.66;
   screen.scale.set(width,width*ratio,1);
   screen.position.set(0,width*ratio/2+.02,.14);
   tv.userData.resolution=[im?.width||0,im?.height||0];
  }
  positionScreen();
  if(!tex.image){
   const onLoad=()=>{
    if(!screen.parent)return;
    positionScreen();
   };
   const oldUpdate=tex.onUpdate;
   tex.onUpdate=()=>{oldUpdate?.();onLoad();tex.onUpdate=oldUpdate;};
  }
  tv.add(screen);
  tv.userData={
    tvIndex:ORIGINAL_TV_CHOICES.findIndex(x=>x.file===file),
    tvValue:tvDisplay(choice).number,
    texture:tex,originalFile:file,source:'original-png',
    resolution:tv.userData.resolution
  };
  root.add(tv);root.userData.tvScreen=tv;
  return tv;
 }
 const index=tvArtIndex(choice,gateIndex);
 const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
 paintTVBroadcast(canvas.getContext('2d'),choice,index);
 const tex=new THREE.CanvasTexture(canvas);
 tex.colorSpace=THREE.SRGBColorSpace;
 tex.minFilter=THREE.LinearMipmapLinearFilter;
 tex.magFilter=THREE.LinearFilter;tex.anisotropy=8;
 const tv=new THREE.Group();tv.name='TV_FLAT_SCREEN';
 const bezel=new THREE.MeshStandardMaterial({color:0x0c1018,roughness:.28,metalness:.38});
 const glass=new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide});
 const piece=(w,h,d,x,y,z,mat)=>{
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
  mesh.position.set(x,y,z);tv.add(mesh);return mesh;
 };
 // Only a slim black TV body; no colored pylons, roof beam, floating numbers.
 piece(4.22,2.39,.09,0,0,0,bezel);
 const screen=new THREE.Mesh(new THREE.PlaneGeometry(4.13,2.31),glass);
 screen.position.z=.052;screen.name='TV_LIVE_SCREEN';tv.add(screen);
 // A discreet TV foot attached directly to the monitor.
 piece(.11,.36,.10,0,-1.36,-.035,bezel);
 piece(.70,.045,.35,0,-1.56,-.08,bezel);
 tv.position.set(0,1.62,.15);
 tv.userData={tvIndex:index,tvValue:tvDisplay(choice).number,texture:tex,resolution:[W,H]};
 root.add(tv);root.userData.tvScreen=tv;return tv;
}
