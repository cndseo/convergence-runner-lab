import * as T from 'three';
import {artFor} from './heroArt.mjs';
const cache=new Map();
const v=()=>new T.Vector3();
const smooth=T.MathUtils.smoothstep;

// Modify cloned vertex buffers in the walking bind pose, then invert skinning.
// Source GLBs and other costumes keep their original geometry and materials.
export function sculptHero(model,spec){
 const art=artFor(spec);if(!art)return;
 const head=model.getObjectByName('Bip01_Head').getWorldPosition(v());
 const hip=model.getObjectByName('Bip01_Pelvis').getWorldPosition(v());
 const neck=model.getObjectByName('Bip01_Neck').getWorldPosition(v());
 const round=art.shape==='round',young=art.shape==='young',square=art.shape==='square',aged=art.shape==='aged';
 model.traverse(n=>{
  if(!n.isSkinnedMesh||!n.visible)return;
  const isHead=/head/.test(n.material.name),isHair=/opacity/.test(n.material.name),isBody=/body/.test(n.material.name);
  if(!isHead&&!isHair&&!isBody)return;
  // The original loose hairstyles contradict the reference buns and fades.

  const key=n.geometry.uuid+'|'+spec.key;
  if(cache.has(key)){const c=cache.get(key);n.geometry=c.geometry;n.material=c.material;return;}
  const geometry=n.geometry.clone(),position=geometry.attributes.position;
  const weights=geometry.attributes.skinWeight,indices=geometry.attributes.skinIndex;
  const appearance=new Float32Array(position.count*4),surface=new Float32Array(position.count*4);
  const source=n.geometry.attributes.position;
  const boneTransforms=n.skeleton.bones.map((b,i)=>new T.Matrix4().multiplyMatrices(b.matrixWorld,n.skeleton.boneInverses[i]));
  const blend=new T.Matrix4(),skinTransform=new T.Matrix4(),inv=new T.Matrix4();
  const p=v(),q=v(),original=v(),delta=v();
  for(let i=0;i<position.count;i++){
   n.getVertexPosition(i,p).applyMatrix4(n.matrixWorld);q.copy(p);
   let hand=0,arm=0,upper=0,foot=0,headWeight=0,dominant=0,best=-1;let legCentre=v(),legWeight=0;
   blend.elements.fill(0);
   for(let j=0;j<4;j++){
    const idx=indices.getComponent(i,j),w=weights.getComponent(i,j),bn=n.skeleton.bones[idx],name=bn?.name||'';
    if(w>best){best=w;dominant=idx;}
    for(let k=0;k<16;k++)blend.elements[k]+=boneTransforms[idx].elements[k]*w;
    if(/Hand|Finger/.test(name))hand+=w;
    if(/Forearm/.test(name))arm+=w;
    if(/UpperArm/.test(name))upper+=w;
    if(/Foot|Toe/.test(name))foot+=w;
    if(/Head|Neck/.test(name))headWeight+=w;
    if(/Thigh|Calf/.test(name)){legCentre.addScaledVector(bn.getWorldPosition(v()),w);legWeight+=w;}
   }
   const x=p.x-head.x,y=p.y-head.y,z=p.z-head.z;
   if(isHead||isHair){
    // Local facial landmarks: jaw below Head, eyes above, front toward -Z.
    const face=1-smooth(z,-.015,.065),jaw=1-smooth(y,-.005,.07),cheek=Math.exp(-(((y-.025)/.048)**2));
    q.x+=x*((round?.14:young?-.065:square?.055:aged?-.035:-.045)*jaw*face+(round?.075:young?.035:0)*cheek);
    q.y+=y*(young?-.018:aged?.012:0);
    // Individual face proportions applied to the actual skinned head mesh.
    const jawZone=1-smooth(y,-.043,.014);
    const cheekZone=Math.exp(-(((y-.028)/.041)**2));
    const chinZone=1-smooth(y,-.094,-.036);
    q.x+=x*((art.jaw||0)*jawZone+(art.cheek||0)*cheekZone);
    q.y+=chinZone*(art.chin||0)*.075;
    const nose=Math.exp(-((x/.026)**2)-((y-.035)/.032)**2)*face;
    q.x+=x*nose*((art.nose||1)-1);
    q.z-=nose*(square?.003:young?-.003:0);
    // Slightly broader cheeks and lips for Amina; avoid scaling eyes/hair globally.
    q.z-=cheek*face*(round?.005:0);
    const lips=Math.exp(-((x/.032)**2)-(((y-.029)/.012)**2))*face;
    q.z-=lips*((art.lips||1)-1)*.012;
    if(young||art.shape==='oval')q.z-=lips*.0015;
   }

   skinTransform.copy(n.matrixWorld).multiply(n.bindMatrixInverse).multiply(boneTransforms[dominant]).multiply(n.bindMatrix);
   inv.copy(skinTransform).invert();delta.copy(q).sub(p);
   // Transform only the sculpt delta, preserving untouched source positions exactly.
   const e=inv.elements,dx=delta.x,dy=delta.y,dz=delta.z;
   original.fromBufferAttribute(source,i);
   delta.set(e[0]*dx+e[4]*dy+e[8]*dz,e[1]*dx+e[5]*dy+e[9]*dz,e[2]*dx+e[6]*dy+e[10]*dz);
   const maxDelta=.04/n.getWorldScale(v()).x;
   if(!isBody&&delta.length()<maxDelta)position.setXYZ(i,original.x+delta.x,original.y+delta.y,original.z+delta.z);
   if(isBody){
    // Widen the bind-space cross-section around its bone axis. This avoids
    // inverting blended skin matrices at bent knees/elbows (which is unstable).
    const bn=n.skeleton.bones[dominant],name=bn.name;
    const lower=/Thigh|Calf/.test(name),torso=/Spine|Pelvis/.test(name);
    const amount=lower?((spec.faction==='genz'||spec.faction==='lyceens')?.20:art.body==='full'?.14:0):torso?(art.body==='full'?.16:art.body==='athletic'?.045:0):0;
    if(amount){
     const boneInv=n.skeleton.boneInverses[dominant],boneBind=boneInv.clone().invert();
     const local=original.clone().applyMatrix4(n.bindMatrix).applyMatrix4(boneInv);
     const child=bn.children.find(c=>c.isBone),ci=child?n.skeleton.bones.indexOf(child):-1;
     const axis=ci>=0?v().setFromMatrixPosition(n.skeleton.boneInverses[ci].clone().invert()).applyMatrix4(boneInv).normalize():v().set(1,0,0);
     const radial=local.clone().addScaledVector(axis,-local.dot(axis));
     local.addScaledVector(radial,amount*best).applyMatrix4(boneBind).applyMatrix4(n.bindMatrix.clone().invert());
     position.setXYZ(i,local.x,local.y,local.z);
    }
   }
   // Shader coordinates remain stable throughout the animation.
   surface.set([p.x,p.z-hip.z,p.y/spec.height,arm+upper],i*4);
   appearance[i*4]=isHead||isHair?1:Math.max(hand,art.tattoo?arm:0)*.95;
   appearance[i*4+1]=isHead||isHair?y:arm;
   appearance[i*4+2]=isHead||isHair?x:hand;
   appearance[i*4+3]=isHead||isHair?z:p.y;
  }
  position.needsUpdate=true;geometry.computeBoundingSphere();
  geometry.setAttribute('heroSurface',new T.BufferAttribute(surface,4));
  geometry.setAttribute('heroAppearance',new T.BufferAttribute(appearance,4));
  const material=n.material.clone(),baseHook=n.material.onBeforeCompile.bind(n.material);
  const tone=new T.Color(art.skin),hair=new T.Color(art.hair);
  material.onBeforeCompile=s=>{
   baseHook(s);
   s.uniforms.heroSkin={value:tone};s.uniforms.heroHair={value:hair};s.uniforms.heroAccent={value:new T.Color(art.accent||0x273849)};s.uniforms.heroHood={value:new T.Color(art.hood||0xbcc0c5)};
   s.vertexShader='attribute vec4 heroAppearance;attribute vec4 heroSurface; varying vec4 vHeroArt;varying vec4 vHeroSurface;\n'+s.vertexShader;
   s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvHeroArt=heroAppearance;vHeroSurface=heroSurface;');
   s.fragmentShader='varying vec4 vHeroArt;varying vec4 vHeroSurface;uniform vec3 heroAccent;uniform vec3 heroHood;uniform vec3 heroSkin;uniform vec3 heroHair;\n'+s.fragmentShader;
   s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    vec3 tex=diffuseColor.rgb;
    ${isBody&&(spec.faction==='genz'||spec.faction==='lyceens')?`float front=(1.0-smoothstep(-.08,-.035,vHeroSurface.y));
    float inner=(1.0-smoothstep(.055,.080,abs(vHeroSurface.x)))*front*smoothstep(.56,.59,vHeroSurface.z)*(1.0-smoothstep(.80,.85,vHeroSurface.z));
    float detailFold=.66+dot(tex,vec3(.299,.587,.114))*1.2;
    diffuseColor.rgb=mix(diffuseColor.rgb,heroHood*detailFold,inner);
    float panel=smoothstep(.45,.75,vHeroSurface.w)*smoothstep(.67,.71,vHeroSurface.z)*(1.0-smoothstep(.81,.85,vHeroSurface.z));
    diffuseColor.rgb=mix(diffuseColor.rgb,heroAccent*detailFold,panel);`:''}
    ${isBody&&spec.faction==='infirmieres'?`float under=smoothstep(.35,.80,vHeroArt.y);
    ${!art.tattoo?'diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.018,.038,.065),under*.96);':''}
    float bands=(1.0-smoothstep(.010,.016,abs(vHeroSurface.z-.155)))*smoothstep(.045,.075,abs(vHeroSurface.x));
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.32,.36,.38),bands);`:''}
    float lum=dot(tex,vec3(.299,.587,.114));
    // Exclude sclera, teeth, pupils and dark hair from skin coloration.
    float warm=smoothstep(.008,.045,tex.r-tex.b)*smoothstep(.05,.16,lum);
    float skinMask=warm*vHeroArt.x;
    ${isHead||isHair?`skinMask=max(skinMask,.66*smoothstep(.14,.25,lum));
      float eyeWhite=(1.0-smoothstep(.035,.075,abs(tex.r-tex.b)))*smoothstep(.72,.90,lum);
      skinMask*=1.0-eyeWhite*.90;
      skinMask*=1.0-smoothstep(.145,.19,vHeroArt.y);
      float scalp=max(max(smoothstep(.106,.12,vHeroArt.y),smoothstep(.065,.082,abs(vHeroArt.z))*smoothstep(.03,.07,vHeroArt.y)),smoothstep(.015,.04,vHeroArt.w)*smoothstep(-.06,-.03,vHeroArt.y));
      float hairMask=scalp*(1.0-smoothstep(.14,.35,lum));
      skinMask*=1.0-hairMask;
      diffuseColor.rgb=mix(tex,heroHair*(.60+lum*2.0),hairMask);`:''}
    float detail=clamp(lum/${spec.base==='male-adult-04'?'.075':'.35'},${young||art.shape==='oval'?'.72,1.24':'.55,1.40'});
    diffuseColor.rgb=mix(diffuseColor.rgb,heroSkin*detail,skinMask);
    ${art.age>=65&&(isHead||isHair)?`float forehead=smoothstep(.11,.13,vHeroArt.y)*(1.0-smoothstep(.15,.17,vHeroArt.y))*(1.0-smoothstep(-.065,-.03,vHeroArt.w));
    float creases=pow(max(0.0,sin(vHeroArt.y*135.0+cos(vHeroArt.z*39.0))),12.0);
    diffuseColor.rgb*=1.0-forehead*creases*.12;`:''}
    ${art.beard&&(isHead||isHair)?`float jawHair=(1.0-smoothstep(-.024,.012,vHeroArt.y))*smoothstep(-.121,-.092,vHeroArt.y);
    float sideHair=smoothstep(.058,.083,abs(vHeroArt.z))*(1.0-smoothstep(-.022,.034,vHeroArt.y));
    float moustache=(1.0-smoothstep(.008,.022,abs(vHeroArt.y+.030)))*(1.0-smoothstep(.046,.075,abs(vHeroArt.z)));
    float beardMask=clamp(max(max(jawHair,sideHair),moustache*.65),0.0,1.0);
    float whisker=.72+.07*sin(vHeroArt.z*117.0+vHeroArt.y*84.0);
    diffuseColor.rgb=mix(diffuseColor.rgb,heroHair*(.42+lum*.31),beardMask*whisker);`:''}
    ${art.gloves&&isBody?`diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.04,.22,.42)*(.8+lum),smoothstep(.3,.8,vHeroArt.z));`:''}
   `);
  };
  material.customProgramCacheKey=()=>`hero-sculpt-v2-${spec.key}-${isHead?'head':isHair?'opacity':'body'}`;
  cache.set(key,{geometry,material});n.geometry=geometry;n.material=material;
 });
 model.updateMatrixWorld(true);
}
