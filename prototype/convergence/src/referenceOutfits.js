import * as T from 'three';
import {artFor} from './heroArt.mjs';
import {sculptHero} from './heroSculpt.js';
import {dressHeroDetails} from './heroCostumes.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// Small garment/accessory meshes are batched per attachment bone, with shared materials.
const cloth=new T.MeshStandardMaterial({vertexColors:true,roughness:.82,side:T.DoubleSide});
const metal=new T.MeshStandardMaterial({vertexColors:true,roughness:.42,metalness:.2,side:T.DoubleSide});
const paintCache=new Map(),bagMaterials=new Map();
let bagTexture,texturePromise;
export function prepareReferenceTextures(){
 if(!texturePromise)texturePromise=new T.TextureLoader().loadAsync(import.meta.env.BASE_URL+'assets/crowd/p02-backpack-detail.webp').then(t=>{t.colorSpace=T.SRGBColorSpace;bagTexture=t;}).catch(()=>{});
 return texturePromise;
}
function bagDetailMaterial(color){
 if(!bagMaterials.has(color)){
  const mat=new T.MeshStandardMaterial({map:bagTexture,transparent:true,alphaTest:.12,roughness:.9,depthWrite:false});
  const tint=new T.Color(color);
  mat.onBeforeCompile=s=>{s.uniforms.bagTint={value:tint};s.fragmentShader='uniform vec3 bagTint;\n'+s.fragmentShader;
   s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\nfloat fabric=dot(diffuseColor.rgb,vec3(.299,.587,.114));diffuseColor.rgb=bagTint*(.60+fabric*3.0);');};
  mat.customProgramCacheKey=()=> 'reference-bag-v2';bagMaterials.set(color,mat);
 }
 return bagMaterials.get(color);
}
const V=(x=0,y=0,z=0)=>new T.Vector3(x,y,z);
const white=0xedece5,red=0xcb202b,yellow=0xe6ed16,dark=0x252830;
const wp=n=>n.getWorldPosition(V());
const bone=(m,name)=>m.getObjectByName('Bip01_'+name);
function tintGeometry(g,color){
 const c=new T.Color(color),a=new Float32Array(g.attributes.position.count*3);
 for(let i=0;i<a.length;i+=3){a[i]=c.r;a[i+1]=c.g;a[i+2]=c.b;}
 g.setAttribute('color',new T.BufferAttribute(a,3));return g;
}
function builder(model,name,point,label){
 const b=bone(model,name);
 if(!b)throw new Error('Missing attachment bone '+name);
 const anchor=new T.Group();anchor.name='outfit-'+label;
 model.add(anchor);model.updateMatrixWorld(true);
 anchor.position.copy(model.worldToLocal(point.clone()));
 anchor.scale.setScalar(1/model.getWorldScale(V()).x);
 anchor.quaternion.copy(model.getWorldQuaternion(new T.Quaternion()).invert());
 model.updateMatrixWorld(true);b.attach(anchor);
 const batches=[[],[]];
 const add=(g,color,pos=[0,0,0],rot=[0,0,0],reflective=false)=>{
  const t=new T.Matrix4().compose(V(...pos),new T.Quaternion().setFromEuler(new T.Euler(...rot)),V(1,1,1));
  g.applyMatrix4(t);tintGeometry(g,color);batches[reflective?1:0].push(g);
 };
 const box=(size,pos,color,r=.015,rot)=>add(new RoundedBoxGeometry(...size,2,Math.min(r,...size.map(x=>x/3))),color,pos,rot);
 const ellipsoid=(size,pos,color)=>{const g=new T.SphereGeometry(1,16,10);g.scale(...size);add(g,color,pos);};
 const tube=(radius,length,pos,color,rot=[0,0,0])=>add(new T.CylinderGeometry(radius,radius,length,10),color,pos,rot);
 const finish=()=>{
  for(let i=0;i<2;i++)if(batches[i].length){
   const geometry=mergeGeometries(batches[i].map(g=>g.index?g.toNonIndexed():g));
   const mesh=new T.Mesh(geometry,i?metal:cloth);mesh.castShadow=true;mesh.userData.ownedOutfitGeometry=true;mesh.userData.sharedHumanoidAsset=true;
   anchor.add(mesh);batches[i].forEach(g=>g.dispose());
  }
 };
 return {anchor,b,batches,add,box,ellipsoid,tube,finish};
}
function line(b,a,c,r,color){
 const start=V(...a),end=V(...c),d=end.clone().sub(start);
 const g=new T.CylinderGeometry(r,r,d.length(),8);
 g.applyQuaternion(new T.Quaternion().setFromUnitVectors(V(0,1,0),d.normalize()));
 b.add(g,color,start.add(end).multiplyScalar(.5).toArray());
}
function backpack(b,color,style){
 const start=b.batches.map(g=>g.length);let detailMesh;
 const small=style.medical? .9:1;
 b.box([.32*small,.37,.16],[0,-.025,.20],color,.055);
 b.box([.26,.16,.055],[0,-.10,.303],color,.023);
 b.box([.22,.032,.022],[0,-.012,.337],dark,.007);
 for(const x of [-.115,.115]){
  b.box([.025,.31,.018],[x,-.02,.29],0x544b42,.006);
  b.box([.04,.06,.022],[x,.095,.29],0xa8a9a1,.007);
 }
 if(bagTexture){
  const detail=new T.Mesh(new T.PlaneGeometry(.30,.35),bagDetailMaterial(color));
  detailMesh=detail;detail.position.set(0,-.02,.338);detail.userData.ownedOutfitGeometry=true;detail.userData.sharedHumanoidAsset=true;b.anchor.add(detail);
 }
 // Visible seams, side pockets and handle, with front shoulder straps.
 line(b,[-.13,.145,.29],[.13,.145,.29],.005,0xc0a583);
 b.box([.06,.17,.09],[-.18,-.08,.21],color,.019);
 b.box([.06,.17,.09],[.18,-.08,.21],color,.019);
 b.add(new T.TorusGeometry(.052,.012,6,12,Math.PI),dark,[0,.17,.21]);
 for(const x of [-.14,.14]){
  line(b,[x,.20,.08],[x,.1,-.135],style.key?.startsWith('hero-')?.013:.023,style.key?.startsWith('hero-')?dark:color);
  line(b,[x,.1,-.135],[x,-.20,-.12],style.key?.startsWith('hero-')?.013:.023,style.key?.startsWith('hero-')?dark:color);
 }
 const pack=style.pack;
 if(pack==='hiking'){
  b.tube(.064,.34,[0,-.27,.21],0x727b4b,[0,0,Math.PI/2]);
  for(const x of [-.10,.10])b.box([.025,.12,.13],[x,-.265,.21],dark,.006);
  b.tube(.035,.19,[.205,-.04,.21],0x536f7b);b.tube(.024,.025,[.205,.065,.21],0xa0a7a4);
 }else if(pack==='rolltop'){
  b.tube(.06,.29,[0,.20,.20],color,[0,0,Math.PI/2]);b.box([.035,.22,.025],[0,.13,.28],dark,.006);
 }else if(pack==='leather'){
  b.box([.29,.13,.04],[0,.11,.315],color,.027);
  for(const x of [-.105,.105]){b.box([.025,.15,.025],[x,.055,.343],0x61422d,.006);b.box([.04,.035,.01],[x,.025,.36],0xbbac82,.006);}
 }else if(pack==='sport'){
  b.box([.21,.025,.018],[0,-.09,.341],0xbdc5cc,.004);
  b.box([.02,.15,.018],[.085,.04,.29],0x517b9c,.004);
 }else if(pack==='rescue'){
  for(const x of [-.09,.09])b.box([.024,.21,.025],[x,-.07,.34],0x33363a,.005);
 }
 const scale=pack==='compact'?V(.86,.87,.87):pack==='rolltop'?V(.98,1.10,1):pack==='hiking'?V(1.08,1.06,1.05):pack==='sport'?V(.91,1.02,.88):V(1,1,1);
 const matrix=new T.Matrix4().makeScale(scale.x,scale.y,scale.z);
 for(let i=0;i<2;i++)for(const g of b.batches[i].slice(start[i]))g.applyMatrix4(matrix);
 if(detailMesh){detailMesh.position.multiply(scale);detailMesh.scale.copy(scale);}
}
function paintBody(model,spec){
 model.traverse(n=>{
  if(!n.isSkinnedMesh)return;
  const original=n.material;
  if(/tools|stetoskop|flashlight|mask/.test(original.name)){n.visible=false;return;}
  if(/helmet/.test(original.name)){
   if(spec.key!=='pompier'){n.visible=false;return;}
   // The source has a wide American fire helmet; replace only this missing French silhouette.
   n.visible=false;return;
  }
  if(!/body/.test(original.name))return;
  const key=original.uuid+'-'+spec.key;let data=paintCache.get(key);
  if(!data){
   const geometry=n.geometry.clone(),pos=geometry.attributes.position;
   const weights=geometry.attributes.skinWeight,indices=geometry.attributes.skinIndex;
   const mask=new Float32Array(pos.count*3);
   model.updateMatrixWorld(true);
   for(let i=0;i<pos.count;i++){
    const p=(spec.key.startsWith('hero-')?n.getVertexPosition(i,V()):V().fromBufferAttribute(pos,i)).applyMatrix4(n.matrixWorld);
    let hand=0,arm=0,leg=0,foot=0;
    for(let j=0;j<4;j++){
     const name=n.skeleton.bones[indices.getComponent(i,j)]?.name||'',w=weights.getComponent(i,j);
     if(/Hand|Finger|Head|Neck/.test(name))hand+=w;
     if(/UpperArm|Forearm|Clavicle/.test(name))arm+=w;
     if(/Thigh|Calf|Pelvis/.test(name))leg+=w;
     if(/Foot|Toe/.test(name))foot+=w;
    }
    const skin=1-T.MathUtils.smoothstep(hand,.18,.75);
    const lower=leg>.45&&p.y<.91;
    mask[i*3]=(lower?0:skin)*(arm>.2||p.y>.87?1:0);
    mask[i*3+1]=lower?1-T.MathUtils.smoothstep(foot,.20,.75):0;
    mask[i*3+2]=p.y; // stable bind-space height for uniform seams, never camera height
   }
   geometry.setAttribute('garmentMask',new T.BufferAttribute(mask,3));
   const material=original.clone();material.color.set(0xffffff);
   const top=new T.Color(spec.top),pants=new T.Color(spec.pants);
   material.onBeforeCompile=s=>{
    s.uniforms.garmentTop={value:top};s.uniforms.garmentPants={value:pants};
    s.vertexShader='attribute vec3 garmentMask; varying vec3 vGarment;\n'+s.vertexShader;
    s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvGarment=garmentMask;');
    s.fragmentShader='varying vec3 vGarment; uniform vec3 garmentTop; uniform vec3 garmentPants;\n'+s.fragmentShader;
    s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
      float fabricLight=clamp(.52+.64*dot(diffuseColor.rgb,vec3(.299,.587,.114)),.52,1.0);
      diffuseColor.rgb=mix(diffuseColor.rgb,garmentTop*fabricLight,vGarment.x);
      diffuseColor.rgb=mix(diffuseColor.rgb,garmentPants*fabricLight,vGarment.y);`);
   };
   material.customProgramCacheKey=()=> 'reference-garment-v2';
   data={geometry,material};paintCache.set(key,data);
  }
  n.geometry=data.geometry;n.material=data.material;
 });
}
function solveArm(model,side,frame,elbow,hand){
 const upper=bone(model,side+'_UpperArm'),fore=bone(model,side+'_Forearm'),wrist=bone(model,side+'_Hand');
 const aim=(joint,child,target)=>{
  model.updateMatrixWorld(true);
  const from=wp(child).sub(wp(joint)).normalize(),to=frame.localToWorld(V(...target)).sub(wp(joint)).normalize();
  const q=new T.Quaternion().setFromUnitVectors(from,to).multiply(joint.getWorldQuaternion(new T.Quaternion()));
  joint.quaternion.copy(joint.parent.getWorldQuaternion(new T.Quaternion()).invert().multiply(q));
 };
 aim(upper,fore,elbow);aim(fore,wrist,hand);
}
function fitVest(model,chest){
 let rx=.215,zMin=-.15,zMax=.15;
 model.updateMatrixWorld(true);
 model.traverse(n=>{
  if(!n.isSkinnedMesh||!n.material.name.includes('body'))return;
  const weights=n.geometry.attributes.skinWeight,indices=n.geometry.attributes.skinIndex;
  for(let i=0;i<n.geometry.attributes.position.count;i++){
   let torso=0;
   for(let j=0;j<4;j++)if(/Spine|Pelvis/.test(n.skeleton.bones[indices.getComponent(i,j)]?.name||''))torso+=weights.getComponent(i,j);
   if(torso<.75)continue;
   const p=n.getVertexPosition(i,V()).applyMatrix4(n.matrixWorld).sub(chest);
   if(p.y<-.19||p.y>.18)continue;
   rx=Math.max(rx,Math.abs(p.x)+.014);zMin=Math.min(zMin,p.z-.018);zMax=Math.max(zMax,p.z+.018);
  }
 });
 return {rx:Math.min(rx,.29),rz:Math.min((zMax-zMin)/2,.25),z:(zMax+zMin)/2};
}
function crossed(b,pos,size){
 b.box([size*.30,size,.018],pos,red,.005);
 b.box([size,size*.30,.019],pos,red,.005);
}
export function dressReferenceWalker(model,spec){
 const heroArt=artFor(spec);
 paintBody(model,spec);
 if(heroArt)sculptHero(model,spec);
 const chest=wp(bone(model,'Spine2')).add(V(0,-.06,0));
 const body=builder(model,'Spine2',chest,spec.key);
 const headPos=wp(bone(model,'Head'));
 const head=builder(model,'Head',headPos,'head-'+spec.key);
 const controls=builder(model,'Spine2',chest,'pose-'+spec.key).anchor;
 const poses=spec.prop==='flare'?{side:'R',elbow:[.37,.19,0],hand:[.39,.52,0]}:
  spec.prop==='placard'?{side:'R',elbow:[.36,.0,-.03],hand:[.32,.28,-.12]}:
  spec.prop==='megaphone'?{side:'R',elbow:[.35,-.03,-.03],hand:[.31,.22,-.21]}:
  spec.prop==='flag'?{side:'L',elbow:[-.36,.02,0],hand:[-.36,.31,-.10]}:null;
 const applyPose=()=>{if(poses)solveArm(model,poses.side,controls,poses.elbow,poses.hand);};
 applyPose();model.updateMatrixWorld(true);
 if(spec.vest){
  const fit=fitVest(model,chest);
  const g=new T.CylinderGeometry(fit.rx*(heroArt?.90:.97),fit.rx,.43,24,4,true,heroArt?Math.PI+.20:0,heroArt?Math.PI*2-.40:Math.PI*2);g.scale(1,1,fit.rz/fit.rx);
  body.add(g,yellow,[0,-.015,fit.z]);
  for(const y of [-.14,.025]){
   const stripe=new T.CylinderGeometry(fit.rx*(heroArt?.94:1)+.003,fit.rx+.004,heroArt?.036:.047,24,1,true,heroArt?Math.PI+.20:0,heroArt?Math.PI*2-.40:Math.PI*2);stripe.scale(1,1,fit.rz/fit.rx);
   body.add(stripe,0xe1e6dd,[0,y,fit.z],[0,0,0],true);
  }
  for(const x of [-.13,.13]){
   body.box([.065,.15,.03],[x,.15,.004],yellow,.012,[0,0,x>0?.2:-.2]);
   body.box([.032,.14,.012],[x,.15,.024],white,.004);
  }
  // Front opening and two patch pockets make this a vest, not a yellow body.
  body.box([.018,.4,.015],[0,-.01,fit.z-fit.rz-.008],0x525945,.003);
  for(const x of [-.115,.115])body.box([.12,.10,.02],[x,-.14,fit.z-fit.rz-.006],yellow,.008);
 }
 if(spec.hood&&!heroArt){
  const hood=new T.TorusGeometry(.107,.040,8,20,Math.PI*1.65);
  body.add(hood,spec.top,[0,.255,.075],[.65,0,.55]);
  body.ellipsoid([.125,.085,.065],[0,.245,.12],spec.top);
 }
 if(spec.bag!==undefined)backpack(body,spec.bag,spec);
 if(spec.key==='pompier'||spec.faction==='pompiers'){
  // The detailed original fire uniform and helmet are retained and dressed in red.
  for(const y of [-.20,.08]){
   const g=new T.CylinderGeometry(.22,.235,.052,24,1,true);g.scale(1,1,.80);
   body.add(g,yellow,[0,y,0],[0,0,0],true);
  }
  body.box([.10,.11,.04],[.15,.12,-.15],dark,.01);
  if(!heroArt){
  const helmet=new T.SphereGeometry(.145,24,14,0,Math.PI*2,0,Math.PI*.62);helmet.scale(1,1.12,1.08);
  head.add(helmet,0xe2232a,[0,.13,0]);
  head.add(new T.CylinderGeometry(.148,.153,.027,24),red,[0,.09,0]);
  head.box([.06,.075,.017],[0,.23,.13],yellow,.009);
  head.box([.24,.075,.025],[0,.04,.115],red,.012);
  for(const x of [-.13,.13])head.box([.025,.10,.08],[x,.065,0],red,.013);
  head.ellipsoid([.145,.013,.065],[0,.09,-.13],0x8e2830);
  }
  for(const side of ['L','R']){
   for(const [a,c,r] of [[side+'_Forearm',side+'_Hand',.065],[side+'_Calf',side+'_Foot',.082]]){
    const pa=wp(bone(model,a)),pb=wp(bone(model,c)),mid=pa.clone().lerp(pb,.62),d=pb.clone().sub(pa).normalize();
    const b=builder(model,a,mid,'reflector-'+a);
    const g=new T.CylinderGeometry(r,r,.065,16,1,true);g.applyQuaternion(new T.Quaternion().setFromUnitVectors(V(0,1,0),d));
    b.add(g,yellow,[0,0,0],[0,0,0],true);b.finish();
   }
  }
 }
 if(spec.medical){
  // A fitted tunic with a flared hem, waist belt and a large cross readable from behind.
  const skirt=new T.CylinderGeometry(.19,.255,.30,24,3,true);skirt.scale(1,1,.75);
  body.add(skirt,white,[0,-.32,0]);
  body.box([.29,.04,.025],[0,-.17,.153],red,.006);
  crossed(body,[0,.015,.167],.23);
  // The original back-side emblem was invisible to a frontal camera.
  crossed(body,[.14,.075,-.166],.115);
  body.box([.24,.21,.105],[-.245,-.24,.10],0xb52b3d,.033);
  body.box([.20,.085,.018],[-.245,-.18,.167],0xd4444a,.013);
  crossed(body,[-.245,-.24,.175],.10);
  line(body,[.12,.22,.12],[-.245,-.16,.15],.016,red);
  const coiffe=new T.CylinderGeometry(.14,.17,.105,4,1,false,Math.PI/4);coiffe.scale(1,1,.85);
  head.add(coiffe,white,[0,.18,0]);
  crossed(head,[0,.19,.106],.075);
  crossed(head,[0,.19,-.111],.075);
 }
 if(spec.cap!==undefined&&!heroArt){
  const g=new T.SphereGeometry(.128,20,12,0,Math.PI*2,0,Math.PI/2);g.scale(1,.88,1.06);
  head.add(g,spec.cap,[0,.15,0]);
  // A forward brim meets the crown at the forehead.
  head.box([.245,.022,.142],[0,.15,-.145],spec.cap,.013);
  head.box([.09,.025,.012],[0,.16,.13],0xd2bc92,.005);
 }
 if(spec.key==='agriculteur'){
  for(const x of [-.13,.13])body.box([.105,.105,.025],[x,-.12,-.135],0x48683a,.012);
  body.box([.02,.35,.02],[0,.02,-.14],0xaba17c,.004);
 }
 if(spec.hair&&!heroArt){
  const col={blonde:0xb38a46,red:0x9d4d28,grey:0x9a9c98,beanie:0x20282e,ponytail:0x65412c,dark:0x302722}[spec.hair];
  if(spec.hair==='beanie'){
   const g=new T.SphereGeometry(.116,20,12,0,Math.PI*2,0,Math.PI*.58);g.scale(1,1.06,1.03);
   head.add(g,col,[0,.12,.015]);head.add(new T.TorusGeometry(.114,.013,6,20),col,[0,.11,.015],[Math.PI/2,0,0]);
  }else if(spec.hair!=='dark'){
   // Reuse the GLB hair cards and scalp textures: no smooth sphere replacing a hairstyle.
   model.traverse(n=>{
    if(!n.isSkinnedMesh||!(/head|opacity/.test(n.material.name)))return;
    const key=n.material.uuid+'-hair-'+spec.hair;let mat=paintCache.get(key);
    if(!mat){
     mat=n.material.clone();const tint=new T.Color(col);
     mat.onBeforeCompile=s=>{s.uniforms.hairTint={value:tint};s.fragmentShader='uniform vec3 hairTint;\n'+s.fragmentShader;
      s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>','#include <map_fragment>\nfloat hairLuma=dot(diffuseColor.rgb,vec3(.299,.587,.114));float hairMask=1.0-smoothstep(.07,.23,hairLuma);diffuseColor.rgb=mix(diffuseColor.rgb,hairTint*(.55+hairLuma*2.0),hairMask);');};
     mat.customProgramCacheKey=()=> 'reference-hair-v2';paintCache.set(key,mat);
    }n.material=mat;
   });
   if(['blonde','red','ponytail'].includes(spec.hair)){
    for(let i=0;i<7;i++){
     const x=(i-3)*.012;
     const curve=new T.CatmullRomCurve3([V(x,.10,.095),V(x+.01,.04,.14),V(x+.025,-.05,.14),V(x+.03,-.14,.12)]);
     head.add(new T.TubeGeometry(curve,8,.014,5,false),col);
    }
    head.tube(.04,.015,[.01,.055,.132],dark,[Math.PI/2,0,0]);
   }
  }
 }
 // Hero accessories are real bone-attached geometry, shared by all profiles.
 if(spec.headphones&&!heroArt){
  head.add(new T.TorusGeometry(.139,.012,6,16,Math.PI),dark,[0,.10,0]);
  for(const x of [-.137,.137])head.box([.04,.08,.065],[x,.075,0],dark,.018);
 }
 if(spec.beard&&!heroArt)head.ellipsoid([.066,.037,.038],[0,-.035,-.072],spec.grey?0x90918b:0x40332c);
 if(spec.scarf||spec.heroEquipment==='solidarity-scarf'){
  const col=spec.heroEquipment==='solidarity-scarf'?0xc44858:spec.scarf;
  body.add(new T.TorusGeometry(.09,.025,6,16),col,[0,.23,0],[Math.PI/2,0,0]);
  body.box([.075,.21,.035],[.055,.12,-.13],col,.015,[0,0,-.2]);
 }
 if(spec.medicalKit){
  for(const x of [-.06,.06])line(body,[x,.24,-.13],[x,.06,-.17],.008,0x293344);
  body.add(new T.TorusGeometry(.06,.008,6,16,Math.PI),0x293344,[0,.06,-.17],[0,0,Math.PI]);
  body.ellipsoid([.025,.025,.008],[.06,.02,-.18],0xb6c1c7);
  body.box([.055,.075,.014],[-.12,.10,-.17],0x72b5c7,.005);
  body.box([.13,.09,.015],[0,.015,.349],0xe6eaec,.005);
  // Blue care badge deliberately avoids protected humanitarian emblems.
  body.box([.08,.02,.018],[0,.015,.36],0x539db9,.004);
 }
 if(spec.airTank&&!heroArt){
  body.tube(.075,.40,[0,-.02,.36],0xc6c5a6);
  for(const y of [-.12,.10])body.box([.16,.035,.022],[0,y,.435],dark,.004);
  body.tube(.025,.055,[0,.205,.36],dark);
 }
 if(spec.heroEquipment==='reflective-pack'){
  for(const y of [-.12,.06])body.box([.27,.04,.018],[0,y,.36],0xe6eeaf,.004);
 }
 if(spec.heroEquipment==='armband'){
  const arm=builder(model,'L_UpperArm',wp(bone(model,'L_UpperArm')).lerp(wp(bone(model,'L_Forearm')),.6),'hero-armband');
  arm.add(new T.CylinderGeometry(.073,.073,.075,12,1,true),0xeead5e);arm.finish();
 }
 if(heroArt)dressHeroDetails(model,spec,{body,head,builder,bone,wp,line,fitVest});
 body.finish();head.finish();
 const dynamic=[];let smoke=null,flag=null;
 if(spec.prop){
  const side=poses.side,handBone=bone(model,side+'_Hand');
  const prop=builder(model,side+'_Hand',wp(handBone),'prop-'+spec.prop);
  dynamic.push(prop.anchor);
  if(spec.prop==='placard'){
   prop.tube(.012,.67,[0,.26,0],0x936532);
   prop.box([.47,.30,.027],[0,.70,0],0xb78a52,.008);
   prop.box([.065,.27,.008],[0,.70,.019],0xc99b61,.003);
   for(const y of [.61,.80])prop.box([.06,.035,.009],[0,y,.025],0xdbbe88,.002);
  }
  if(spec.prop==='megaphone'){
   prop.box([.045,.10,.05],[0,.025,0],dark,.01);
   prop.add(new T.CylinderGeometry(.14,.046,.26,20,1,true),white,[0,.12,-.07],[Math.PI/2,0,0]);
   prop.add(new T.TorusGeometry(.14,.017,6,20),red,[0,.12,-.20]);
   prop.add(new T.CircleGeometry(.125,20),0x4b5055,[0,.12,-.205],[0,Math.PI,0]);
   prop.add(new T.TorusGeometry(.048,.013,6,14),red,[0,.12,.06]);
  }
  if(spec.prop==='flag'){
   prop.tube(.011,1.05,[0,.40,0],0x9c743f);
   const g=new T.PlaneGeometry(.67,.43,16,6);g.translate(-.335,.74,0);
   const colors=new Float32Array(g.attributes.position.count*3);
   for(let i=0;i<g.attributes.position.count;i++){
    const x=g.attributes.position.getX(i),c=new T.Color(x<-.446?0xd82234:x<-.223?0xf5f5ef:0x153eb5);
    c.toArray(colors,i*3);
   }
   g.setAttribute('color',new T.BufferAttribute(colors,3));
   flag=new T.Mesh(g,cloth);flag.name='animated-french-flag';flag.userData.ownedOutfitGeometry=true;flag.userData.sharedHumanoidAsset=true;
   flag.userData.base=g.attributes.position.array.slice();prop.anchor.add(flag);
  }
  if(spec.prop==='flare'){
   prop.tube(.031,.17,[0,.06,0],0x15693c);
   prop.tube(.034,.026,[0,.155,0],0xa6b88c);
   prop.box([.036,.055,.006],[0,.07,.031],white,.003);
   smoke=createGreenSmoke(12);prop.anchor.add(smoke);
  }
  prop.finish();
 }
 const fingers=[];
 if(poses)model.traverse(n=>{if(n.isBone&&n.name.startsWith('Bip01_'+poses.side+'_Finger'))fingers.push({bone:n,q:n.quaternion.clone()});});
 const gripRotation=new T.Quaternion().setFromAxisAngle(V(0,0,1),.85);
 const scratch=new T.Object3D();
 let clock=0;
 function update(dt=0,absolute){
  clock=absolute===undefined?clock+dt:absolute;
  applyPose();for(const f of fingers)f.bone.quaternion.copy(f.q).multiply(gripRotation);model.updateMatrixWorld(true);
  // A hand carries each object; counter-rotation keeps poles and smoke upright.
  const orientation=controls.getWorldQuaternion(new T.Quaternion());
  for(const a of dynamic)a.quaternion.copy(a.parent.getWorldQuaternion(new T.Quaternion()).invert().multiply(orientation));
  if(flag){
   const p=flag.geometry.attributes.position,base=flag.userData.base;
   for(let i=0;i<p.count;i++){const x=base[i*3],y=base[i*3+1];p.setZ(i,Math.sin(clock*5+x*11+y*4)*.075*Math.min(1,Math.abs(x)*2.7));}
   p.needsUpdate=true;flag.geometry.computeVertexNormals();
  }
  if(smoke){
   smoke.material.uniforms.time.value=clock;
   for(let i=0;i<12;i++){
    const phase=(clock*.55+i/12)%1,s=.07+phase*.39;
    scratch.position.set(Math.sin(i*2.4+clock*.6)*phase*.13+.15*phase,.19+phase*.72,.035+phase*.06);
    scratch.scale.set(s*1.3,s,1);scratch.rotation.z=i*.73+clock*.15;scratch.updateMatrix();
    smoke.setMatrixAt(i,scratch.matrix);
   }smoke.instanceMatrix.needsUpdate=true;
  }
 }
 update(0);
 model.userData.characterStyle=spec.key;
 return {update,style:spec.key,prop:spec.prop||null};
}
export function disposeReferenceOutfit(model){
 model.traverse(n=>{if(n.userData.ownedOutfitGeometry)n.geometry?.dispose();if(n.userData.ownedOutfitMaterial)n.material?.dispose();});
}

export function createGreenSmoke(capacity){
   const geo=new T.PlaneGeometry(1,1);
   const mat=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,
    uniforms:{time:{value:0}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0);}',
    fragmentShader:'varying vec2 vUv; uniform float time; void main(){vec2 p=vUv*2.0-1.0; float r=length(p);float a=(1.0-smoothstep(.30,1.0,r))*.25;float n=.90+.10*sin(p.x*11.0+p.y*14.0+time);gl_FragColor=vec4(vec3(.13,.91,.30)*n,a);}'});
   const smoke=new T.InstancedMesh(geo,mat,capacity);smoke.name='animated-green-smoke';smoke.frustumCulled=false;
   smoke.userData.ownedOutfitGeometry=true;smoke.userData.sharedHumanoidAsset=true;smoke.userData.ownedOutfitMaterial=true;
return smoke;
}
