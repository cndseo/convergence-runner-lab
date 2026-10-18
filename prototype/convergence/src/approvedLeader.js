import * as THREE from 'three';
// Exact user-approved P02 cutout. A single image cannot invent a full walk cycle:
// upper-body cutout follows a native GLB Walk lower body. No running still legs.
let texture;
export function createApprovedLeader() {
 if(!texture){
  texture=new THREE.TextureLoader().load(import.meta.env.BASE_URL+'assets/approved/P02.webp');
  texture.colorSpace=THREE.SRGBColorSpace;
 }
 const time={value:0};
 const material=new THREE.MeshBasicMaterial({map:texture,alphaTest:.15,side:THREE.DoubleSide});
 material.onBeforeCompile=shader=>{
  shader.uniforms.marchTime=time;
  shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>',
    '#include <alphatest_fragment>\nif(vMapUv.y < .30) discard;');
  shader.vertexShader='uniform float marchTime;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
    float lower = 1.0-smoothstep(0.23,0.48,uv.y);
    transformed.x += sin(marchTime*4.1+step(.53,uv.x)*3.14159)*lower*.018;
    transformed.y += sin(marchTime*4.1)*.010;
    transformed.z += sin(marchTime*2.2+uv.x*8.0)*smoothstep(.60,.92,uv.y)*.022;`);
 };
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(1.61,2.30,16,24),material);
 mesh.position.set(0,1.075,0);mesh.castShadow=false;
 return {mesh,time};
}

export function showWalkingLegs(human) {
 human.model.position.x+=.13;
 human.model.updateMatrixWorld(true);
 human.model.traverse(node=>{
  if(!node.isMesh)return;
  if(!node.isSkinnedMesh){
   node.visible=!!node.userData.walkingFootwear;
   return;
  }
  const boneIds=new Set(node.skeleton.bones.map((bone,i)=>/^(Left|Right)(UpLeg|Leg|Foot|Toe)/.test(bone.name)?i:-1));
  const geo=node.geometry.clone(),indices=geo.attributes.skinIndex,weights=geo.attributes.skinWeight;
  const mask=new Float32Array(geo.attributes.position.count);
  for(let i=0;i<mask.length;i++){
   let legWeight=0;
   for(let j=0;j<4;j++){
    if(boneIds.has(indices.array[i*4+j]))legWeight+=weights.array[i*4+j];
   }
   mask[i]=legWeight;
  }
  geo.setAttribute('leaderLegMask',new THREE.BufferAttribute(mask,1));
  node.geometry=geo;node.userData.ownedLeaderGeometry=true;
  node.material=node.material.clone();
  node.material.onBeforeCompile=shader=>{
   shader.vertexShader='attribute float leaderLegMask; varying float leaderLeg; varying float leaderHeight;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',
     '#include <project_vertex>\nleaderLeg=leaderLegMask; leaderHeight = (modelMatrix * vec4(transformed,1.0)).y;');
   shader.fragmentShader='varying float leaderLeg; varying float leaderHeight;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <alphatest_fragment>',
     '#include <alphatest_fragment>\nif(leaderHeight>.77 || leaderLeg<.5) discard;');
  };
  node.material.customProgramCacheKey=()=> 'P02-native-walking-legs-v2';
 });
}
