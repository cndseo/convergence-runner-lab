import * as THREE from 'three';

// Reusable volumetric character geometry. Every silhouette has a real side
// profile, articulated joints and depth: no Sprite/flat full-body billboard.
const shapes={
 sphere:new THREE.SphereGeometry(1,16,12),
 capsule:new THREE.CapsuleGeometry(1,1,5,10),
 cylinder:new THREE.CylinderGeometry(1,1,1,10),
 cone:new THREE.ConeGeometry(1,1,10),
 box:new THREE.BoxGeometry(1,1,1),
 torus:new THREE.TorusGeometry(1,.16,7,18)
};
const paint=new Map();
function mat(color,roughness=.86){
 const key=color+'-'+roughness;
 if(!paint.has(key))paint.set(key,new THREE.MeshStandardMaterial({
  color,roughness,metalness:roughness<.6?.08:0
 }));
 return paint.get(key);
}
const C={
 spiderRed:mat(0xd81722,.63),spiderShadow:mat(0x101923,.8),
 web:mat(0x25282b),white:mat(0xeef3f5,.65),
 dino:mat(0xf87512,.53),dinoHighlight:mat(0xff9632,.56),
 belly:mat(0xffc07a,.72),dinoSpot:mat(0x975027,.78),
 mouth:mat(0x3a1521),tongue:mat(0xcd3650),claw:mat(0x121419,.55),
 denim:mat(0x35435c),black:mat(0x25242b),hoodie:mat(0x40404a),
 greyHoodie:mat(0x82838a),blue:mat(0x2673c8),scarf:mat(0xe8eef7),
 vest:mat(0xd9f020,.75),stripe:mat(0xf9f2c7,.6),
 brown:mat(0x654335),skinA:mat(0xc18e70),skinB:mat(0xe1b49a),
 skinC:mat(0x9b6d56),hair:mat(0x302624),shoe:mat(0xe7e7e3),
 blackShoe:mat(0x18191e)
};
function mesh(group,geo,material,p=[0,0,0],s=[1,1,1],name=''){
 const m=new THREE.Mesh(geo,material);
 m.position.set(...p);m.scale.set(...s);
 m.castShadow=true;m.receiveShadow=false;m.userData.sharedHumanoidAsset=true;
 if(name)m.name=name;
 group.add(m);return m;
}
const ball=(g,m,p,s,name)=>mesh(g,shapes.sphere,m,p,s,name);
const cylinder=(g,m,p,s,name)=>mesh(g,shapes.cylinder,m,p,s,name);
function line(g,m,a,b,r=.012){
 const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b);
 const v=end.clone().sub(start),len=v.length();
 const part=cylinder(g,m,start.clone().add(end).multiplyScalar(.5).toArray(),[r,len,r]);
 part.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());
 return part;
}
function pivot(group,p){const obj=new THREE.Group();obj.position.set(...p);group.add(obj);return obj;}
function legsAndArms(root,style={}){
 const {red=false,vest=false,index=0}=style;
 const pants=red?C.spiderShadow:C.denim;
 const shoe=red?C.spiderRed:(index%3===0?C.blackShoe:C.shoe);
 const sleeve=red?C.spiderShadow:(index%3===0?C.greyHoodie:C.hoodie);
 const legs=[],arms=[];
 for(const sign of [-1,1]){
  const leg=pivot(root,[sign*.16,.74,0]);
  ball(leg,pants,[0,-.29,0],[.155,.36,.145],'3D_THIGH');
  ball(leg,red?C.spiderRed:pants,[0,-.62,0],[.125,.27,.127],'3D_CALF');
  ball(leg,shoe,[0,-.82,-.095],[.145,.125,.25],'3D_BOOT');
  legs.push(leg);
  const arm=pivot(root,[sign*.32,1.48,0]);
  ball(arm,red?C.spiderShadow:sleeve,[sign*.045,-.23,0],[.124,.285,.125],'3D_SLEEVE');
  ball(arm,red?C.spiderRed:sleeve,[sign*.08,-.47,0],[.100,.20,.105]);
  ball(arm,red?C.spiderRed:(index%3===0?C.skinC:index%3===1?C.skinB:C.skinA),
   [sign*.08,-.64,0],[.09,.10,.09],'3D_HAND');
  arms.push(arm);
 }
 return {legs,arms};
}
function cropCloth(texture,rect){
 const source=texture?.image;
 if(!source)return null;
 const canvas=document.createElement('canvas');
 canvas.width=256;canvas.height=320;
 const context=canvas.getContext('2d');
 if(!context)return null;
 const w=source.width,h=source.height;
 context.drawImage(source,rect[0]*w,rect[1]*h,rect[2]*w,rect[3]*h,0,0,256,320);
 const result=new THREE.CanvasTexture(canvas);
 result.colorSpace=THREE.SRGBColorSpace;result.anisotropy=2;
 return result;
}
function textilePanel(model,texture,rect,p,dimensions,rotationY=0){
 const cloth=cropCloth(texture,rect);
 if(!cloth)return null;
 const geometry=new THREE.PlaneGeometry(dimensions[0],dimensions[1],8,6);
 const attr=geometry.attributes.position;
 for(let i=0;i<attr.count;i++){
  const x=attr.getX(i),y=attr.getY(i);
  attr.setZ(i,-.020*(1-(x/dimensions[0]*2)**2)+.015*(y/dimensions[1]));
 }
 geometry.computeVertexNormals();
 const material=new THREE.MeshStandardMaterial({
  map:cloth,roughness:.78,transparent:true,alphaTest:.13,
  side:THREE.DoubleSide,depthWrite:true,polygonOffset:true,polygonOffsetFactor:-1
 });
 const panel=new THREE.Mesh(geometry,material);
 panel.name='ORIGINAL_ART_FABRIC_DECAL';
 panel.position.set(...p);panel.rotation.y=rotationY;
 panel.userData.owned3DGeometry=true;
 panel.userData.owned3DMaterial=true;
 panel.userData.owned3DTexture=cloth;
 model.add(panel);
 return panel;
}
function spiderWeb(model){
 // Thin web strands wrap the red helmet and give it volume from the sides.
 const vertices=[];
 const radius=(phi)=>Math.sqrt(Math.max(0,1-phi*phi));
 for(const lat of [-.64,-.31,.03,.37,.67]){
  const v=lat,r=radius(v);
  for(let i=0;i<24;i++){
   const a=2*Math.PI*i/24,b=2*Math.PI*(i+1)/24;
   vertices.push(.210*r*Math.cos(a),.25*v,.210*r*Math.sin(a),
                 .210*r*Math.cos(b),.25*v,.210*r*Math.sin(b));
  }
 }
 for(let j=0;j<12;j++){
  const a=j*Math.PI/6;
  for(let i=0;i<8;i++){
   const v=-.78+i*.20,w=v+.20;
   vertices.push(.210*radius(v)*Math.cos(a),.25*v,.210*radius(v)*Math.sin(a),
                 .210*radius(w)*Math.cos(a),.25*w,.210*radius(w)*Math.sin(a));
  }
 }
 const geo=new THREE.BufferGeometry();
 geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
 const web=new THREE.LineSegments(geo,new THREE.LineBasicMaterial({color:0x121416,transparent:true,opacity:.74}));
 web.name='SPIDER_WEB_3D';web.userData.owned3DGeometry=true;web.userData.owned3DMaterial=true;
 model.add(web);
}
function makeSpider(front,back){
 const root=new THREE.Group();root.name='SPIDERMAN_3D_FROM_USER_REFERENCE';
 const torso=pivot(root,[0,1.23,0]);
 ball(torso,C.spiderShadow,[0,.01,0],[.31,.40,.205],'3D_SUIT_TORSO');
 ball(torso,C.spiderRed,[0,.08,-.045],[.237,.355,.175],'3D_RED_CHEST');
 // User-provided Spider-Man artwork stays in the costume as chest and back
 // fabric detail. Both pieces bend around a *volumetric* 3D body.
 textilePanel(torso,front,[.225,.155,.55,.31],[0,.065,-.216],[.50,.56],Math.PI);
 textilePanel(torso,back,[.19,.145,.62,.34],[0,.07,.218],[.52,.58],0);
 ball(root,C.spiderRed,[0,.82,0],[.235,.19,.20],'3D_RED_WAIST');
 const helmet=pivot(torso,[0,.63,0]);
 ball(helmet,C.spiderRed,[0,0,0],[.21,.265,.209],'3D_MASK');
 textilePanel(helmet,front,[.34,.005,.33,.15],[0,.006,-.202],[.355,.425],Math.PI);
 textilePanel(helmet,back,[.30,.005,.39,.17],[0,.004,.202],[.355,.423],0);
 spiderWeb(helmet);
 for(const side of [-1,1]){
  const eye=ball(helmet,C.white,[side*.104,.052,-.184],[.104,.082,.035],'3D_WHITE_EYE');
  eye.rotation.z=side*.34;
  const edge=ball(helmet,C.spiderShadow,[side*.105,.054,-.216],[.112,.085,.016]);
  edge.position.z+=.052;
 }
 const limbs=legsAndArms(root,{red:true});
 // Raised chest insignia remains visible even if the source image fails.
 const logo=pivot(torso,[0,.125,-.239]);
 ball(logo,C.white,[0,0,0],[.055,.060,.015],'3D_WHITE_SPIDER');
 for(const side of [-1,1]){
  for(let i=0;i<3;i++){
   const y=.026-i*.026;
   line(logo,C.white,[side*.025,y,0],[side*(.12+i*.025),y+(i-1)*.07,0],.008);
  }
 }
 root.userData.character3D={limbs,torso,helmet,kind:'spiderman'};
 return root;
}
function makeDinosaur(front,back){
 const root=new THREE.Group();root.name='DINOSAUR_INFLATABLE_3D_FROM_USER_REFERENCE';
 const body=pivot(root,[0,1.1,0]);
 ball(body,C.dino,[0,.1,.07],[.53,.69,.48],'3D_INFLATABLE_BODY');
 ball(body,C.belly,[0,.03,-.405],[.375,.56,.13],'3D_BELLY');
 textilePanel(body,front,[.26,.32,.51,.39],[0,.02,-.528],[.59,.70],Math.PI);
 // Both approved photographs are preserved as original fabric details:
 // the rear panel brings back the distinctive brown inflatable markings.
 textilePanel(body,back,[.25,.25,.50,.38],[0,.06,.542],[.70,.72],0);
 // Back stripes use the provided photographic fabric texture; adding
 // protruding bars here would make an inflatable suit look like a spiked toy.
 // Three-dimensional inflatable tail extends rearward, unlike the sprite.
 const tail=pivot(body,[0,-.38,.45]);
 const segments=[
  {p:[0,0,.28],size:[.34,.31,.46]},
  {p:[.04,-.10,.75],size:[.27,.23,.45]},
  {p:[.09,-.22,1.16],size:[.20,.17,.39]},
  {p:[.13,-.35,1.50],size:[.11,.10,.28]}
 ];
 for(const [i,s] of segments.entries()){
  ball(tail,C.dino,s.p,s.size,'3D_INFLATABLE_TAIL');
  const stripe=ball(tail,C.dinoSpot,
   [s.p[0],s.p[1]+s.size[1]*.82,s.p[2]+.025],
   [s.size[0]*.73,.028,s.size[2]*.47],'3D_DINO_TAIL_PATTERN');
  stripe.rotation.y=Math.sin(i)*.15;
 }
 // Huge 3D Tyrannosaurus-style skull and open mouth.
 const neck=pivot(body,[0,.56,-.1]);
 ball(neck,C.dino,[0,.26,-.05],[.43,.47,.40],'3D_DINO_HEAD');
 ball(neck,C.dinoHighlight,[0,.24,-.37],[.43,.33,.42],'3D_SNOUT');
 for(const side of [-1,1]){
  ball(neck,C.dinoSpot,[side*.18,.44,-.50],[.060,.029,.040],'3D_DINO_NOSTRIL');
 }
 for(let n=0;n<3;n++)
  ball(neck,C.dinoSpot,[0,.30+n*.115,.24-n*.055],
   [.25-n*.03,.03,.027],'3D_DINO_NECK_STRIPE');
 ball(neck,C.mouth,[0,.06,-.715],[.325,.247,.085],'3D_OPEN_MOUTH');
 ball(neck,C.tongue,[0,-.075,-.79],[.175,.068,.035],'3D_TONGUE');
 for(let i=0;i<6;i++){
  const x=(i-2.5)*.095;
  const top=mesh(neck,shapes.cone,C.white,[x,.19,-.77],[.034,.095,.035],'3D_TOOTH');
  top.rotation.z=Math.PI;
  mesh(neck,shapes.cone,C.white,[x,-.13,-.77],[.032,.070,.032],'3D_TOOTH');
 }
 for(const side of [-1,1]){
  ball(neck,C.white,[side*.295,.40,-.52],[.138,.15,.095],'3D_DINO_EYE');
  ball(neck,C.black,[side*.31,.40,-.604],[.066,.095,.027]);
  ball(neck,C.white,[side*.324,.44,-.626],[.018,.019,.009]);
  for(let n=0;n<4;n++){
   ball(body,C.dinoSpot,[side*(.40-.03*n),.40-.17*n,.18+n*.07],
    [.09,.045,.025],'3D_DINO_SPOT');
  }
 }
 const legs=[],arms=[];
 for(const side of [-1,1]){
  const leg=pivot(root,[side*.32,.69,.02]);
  ball(leg,C.dino,[0,-.26,0],[.235,.32,.25],'3D_DINO_HINDLEG');
  ball(leg,C.dinoHighlight,[0,-.55,-.12],[.23,.16,.32],'3D_DINO_FOOT');
  for(let claw=-1;claw<=1;claw++)
   ball(leg,C.claw,[claw*.13,-.58,-.37],[.045,.075,.10],'3D_BLACK_CLAW');
  legs.push(leg);
  const arm=pivot(body,[side*.46,.38,-.17]);
  ball(arm,C.dino,[side*.18,-.07,-.03],[.23,.15,.17],'3D_SHORT_ARM');
  for(let claw=-1;claw<=1;claw++)
   ball(arm,C.claw,[side*.36,claw*.07-.07,-.11],[.05,.048,.10]);
  arms.push(arm);
 }
 root.userData.character3D={limbs:{legs,arms},torso:body,helmet:neck,tail,kind:'dinosaur'};
 return root;
}
export function createCostumeModel3D(kind,{front=null,back=null}={}){
 if(kind==='spiderman')return makeSpider(front,back);
 if(kind==='dinosaur')return makeDinosaur(front,back);
 throw new RangeError('Unsupported 3D costume: '+kind);
}
export function createMarseilleActor3D(index=0){
 const root=new THREE.Group();root.name='MARSEILLE_3D_ACTOR_'+index;
 const torso=pivot(root,[0,1.22,0]);
 const jacket=index%4===0?C.greyHoodie:index%4===1?C.black:C.hoodie;
 ball(torso,jacket,[0,.025,0],[.30,.38,.225],'3D_HOODIE_TORSO');
 const hood=pivot(torso,[0,.57,.0]);
 const skin=index%3===0?C.skinA:index%3===1?C.skinB:C.skinC;
 ball(hood,skin,[0,.008,-.032],[.204,.236,.195],'3D_FACE');
 ball(hood,jacket,[0,.09,.075],[.228,.225,.152],'3D_HOOD');
 ball(hood,C.hair,[0,.152,-.03],[.208,.085,.19],'3D_HAIR');
 if(index%4===2){
  ball(hood,C.black,[0,-.060,-.18],[.207,.075,.057],'3D_FACE_MASK');
 } else{
  for(const x of [-.08,.08]){
   ball(hood,C.black,[x,.04,-.212],[.015,.022,.012],'3D_EYE');
  }
 }
 const limbs=legsAndArms(root,{index});
 // Scarves and vivid blue Marseille colors correspond to user reference.
 const scarf=pivot(torso,[0,.31,-.10]);
 ball(scarf,C.blue,[0,0,0],[.255,.087,.20],'3D_BLUE_SCARF');
 for(const x of [-.17,.17]){
  ball(scarf,C.scarf,[x,-.115,-.20],[.062,.182,.038],'3D_SCARF_TAIL');
 }
 const pack=ball(torso,C.black,[0,-.02,.23],[.23,.30,.17],'3D_BACKPACK');
 pack.name='3D_MARSEILLE_BACKPACK';
 if(index%4===0){
  ball(torso,C.vest,[0,.055,-.19],[.295,.31,.066],'3D_YELLOW_VEST');
  for(const y of [-.11,.14]){
   mesh(torso,shapes.box,C.stripe,[0,y,-.247],[.51,.038,.020],'3D_REFLECTIVE_STRIPE');
  }
 }
 // Short blue/white pennant is theatrical, not an interactive weapon.
 if(index%5===0){
  const hand=pivot(root,[-.43,1.47,-.06]);
  line(hand,C.brown,[0,-.12,0],[0,.81,0],.018);
  mesh(hand,shapes.box,C.blue,[-.13,.60,0],[.25,.27,.018],'3D_BLUE_FLAG');
  mesh(hand,shapes.box,C.scarf,[-.30,.60,0],[.09,.27,.02],'3D_WHITE_FLAG');
 }
 root.userData.character3D={limbs,torso,helmet:hood,kind:'marseille',index};
 return root;
}
export function updateCharacterModel3D(model,seconds,walking=true){
 const data=model?.userData.character3D;
 if(!data)return;
 const speed=data.kind==='marseille'?13.2:9.2;
 const phase=seconds*speed + (data.index||0)*.94;
 const stride=walking?Math.sin(phase):0;
 const amplitude=data.kind==='marseille'?.69:data.kind==='dinosaur'?.34:.46;
 data.limbs.legs[0].rotation.x=amplitude*stride;
 data.limbs.legs[1].rotation.x=-amplitude*stride;
 data.limbs.arms[0].rotation.x=-amplitude*.82*stride;
 data.limbs.arms[1].rotation.x=amplitude*.82*stride;
 data.torso.rotation.z=Math.sin(phase*.5)*.045;
 if(data.helmet)data.helmet.rotation.y=Math.sin(phase*.48)*.065;
 if(data.tail)data.tail.rotation.y=Math.sin(phase*.5)*.18;
}
export function disposeCharacterModel3D(model){
 if(!model)return;
 model.traverse(obj=>{
  if(obj.userData.owned3DGeometry)obj.geometry?.dispose();
  if(obj.userData.owned3DMaterial)obj.material?.dispose();
  if(obj.userData.owned3DTexture)obj.userData.owned3DTexture.dispose();
 });
}
