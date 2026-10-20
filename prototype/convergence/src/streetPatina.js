import * as THREE from 'three';

// Visual-only additions to existing Paris street: pooled materials, instanced meshes,
// deterministic placement, no collisions or player-lane geometry.
const cube = new THREE.BoxGeometry(1,1,1);
const materials=Object.fromEntries(Object.entries({
  pavement:0x92949a, curb:0xb8b4aa, shutter:0x6c747b, shutterSlat:0x444b54,
  shutterRust:0x846657, boarding:0x846953, wallScab:0x9a7766,
  plaster:0xcab4a0, soot:0x564d4b, graffitiBlue:0x527896, graffitiRed:0x9a4e4b,
  bin:0x47595b, binLid:0x303738, bag:0x414246, bottle:0x6f8f82,
  paper:0xc3b7a2, poster:0xd8c8ae, orange:0xbd6e4f
}).map(([name,color])=>[name,new THREE.MeshStandardMaterial({name:'patina-'+name,color,roughness:.92,metalness:name==='shutter'?.18:0})]));

const patches=[
 [0,0,0,.4,.25,.07], [.23,-.15,.02,.18,.42,.05],[-.2,.15,.02,.2,.18,.05]
];
const detailsDefinition={
  pavement:[],curb:[],shutter:[],shutterSlat:[],shutterRust:[],boarding:[],
  wallScab:[],plaster:[],soot:[],graffitiBlue:[],graffitiRed:[],
  bin:[],binLid:[],bag:[],bottle:[],paper:[],poster:[],orange:[]
};
function instance(group, material, rects){
  if(!rects.length)return;
  const mesh=new THREE.InstancedMesh(cube,materials[material],rects.length);
  const tmp=new THREE.Object3D();
  rects.forEach(([x,y,z,w,h,d,rx=0,ry=0,rz=0],i)=>{
    tmp.position.set(x,y,z);tmp.scale.set(w,h,d);tmp.rotation.set(rx,ry,rz);
    tmp.updateMatrix();mesh.setMatrixAt(i,tmp.matrix);
  });
  mesh.instanceMatrix.needsUpdate=true;mesh.frustumCulled=false;
  mesh.receiveShadow=true;mesh.name='PATINA_'+material;group.add(mesh);
}
function skipFacade(side,z){return side===-1&&Math.abs(z-68)<10 || side===1&&Math.abs(z-112)<10;}
export function createStreetPatina(scene, trackLength, tracked){
  const group=new THREE.Group();group.name='CONVERGENCE_STREET_PATINA';group.userData.dynamic=true;
  const A=Object.fromEntries(Object.keys(detailsDefinition).map(k=>[k,[]]));
  // Pavements are placed behind the existing bridge rail and never intersect x±5.65.
  for(const side of [-1,1]){
    A.pavement.push([side*8.95,-.04,-trackLength/2,5.85,.18,trackLength+14]);
    A.curb.push([side*6.10,.09,-trackLength/2,.22,.28,trackLength+14]);
  }
  for(let z=17,seg=0;z<trackLength-9;z+=17,seg++){
    const facade=Math.floor(z/17)*17;
    for(const side of [-1,1]){
      if(skipFacade(side,facade))continue;
      const x=side*12.02, zz=-facade;
      // Closed shops at alternating blocks, roller shutters with real ribs.
      if((seg+ (side===1?1:0))%3!==2){
        A.shutter.push([x,1.06,zz, .085,1.88,2.34]);
        for(let n=0;n<11;n++)A.shutterSlat.push([x-side*.055,.22+n*.167,zz,.04,.034,2.35]);
        A.shutterRust.push([x-side*.08,.65,zz+.86,.048,.78,.12]);
        A.shutterRust.push([x-side*.08,.25,zz-.80,.05,.22,.35]);
        // sign band above shop, plain: avoids invented real-life store names
        A.poster.push([x-side*.05,2.18,zz,.08,.31,2.48]);
        A.orange.push([x-side*.10,2.18,zz-.82,.048,.05,.35]);
      }
      // Board up upper windows, preserve the existing windows behind.
      if(seg%3===0){
        const y=3.50;
        for(const dz of [-2.1,2.1]){
          for(let n=-1;n<=1;n++)
            A.boarding.push([x-side*.11,y+n*.29,zz+dz,.1,.25,1.02,0,0,(n===0?.1:-.06)]);
          A.shutterSlat.push([x-side*.17,y+.15,zz+dz+.35,.06,.055,.06]);
          A.shutterSlat.push([x-side*.17,y-.13,zz+dz-.38,.06,.055,.06]);
        }
      }
      // Broken plaster, grime and restrained geometric graffiti: different per block.
      for(let j=0;j<2;j++){
        const zp=zz + (j?3.10:-3.20);
        const cy=1.22 + ((seg+j)%3)*.54;
        patches.forEach(([dx,dy,dz,w,h,dd],i)=>{
          A[i%2?'wallScab':'plaster'].push([x-side*(.08+dd),cy+dy+dx*.15,zp+dz,w*(1+(seg%3)*.12),h,dd]);
        });
        A.soot.push([x-side*.105,.44,zp,.045,.55,.34,0,0,(j?-.12:.1)]);
        if((seg+j)%2===0){
          const ink=(seg+j)%4===0?'graffitiBlue':'graffitiRed';
          A[ink].push([x-side*.16,.73,zp-.23,.05,.055,.75,0,0,.26]);
          A[ink].push([x-side*.16,.87,zp+.07,.05,.05,.58,0,0,-.33]);
          A[ink].push([x-side*.16,.69,zp+.26,.05,.055,.46,0,0,.55]);
        }
      }
    }
  }
  // Sidewalk bins, bin bags, crumpled paper and bottles. No obstacles on the runner's lane.
  for(let z=26;z<trackLength-12;z+=23){
    const side=(Math.floor(z/23)%2===0)?-1:1;
    // Avoid hiding existing parked emergency vehicles at z38,67,105,145.
    if([38,67,105,145].some(vehicleZ=>Math.abs(z-vehicleZ)<7))continue;
    const x=side*8.75,zz=-z;
    A.bin.push([x,.51,zz,.62,1.00,.64]);
    A.binLid.push([x,.98,zz,.75,.12,.75]);
    A.bag.push([x+side*.72,.26,zz+.48,.53,.50,.52,0,.15,.18]);
    A.bag.push([x-side*.54,.20,zz-.49,.42,.37,.46]);
    A.paper.push([x+side*.20,.13,zz+1.33,.36,.016,.35,0,.3,.13]);
    A.bottle.push([x+side*.87,.16,zz-.89,.08,.10,.30,0,.3,.5]);
  }
  for(const [k,rects] of Object.entries(A))instance(group,k,rects);
  scene.add(group);tracked.push(group);
  return group;
}
export function countStreetPatinaInstances(group){
  return group.children.reduce((n,m)=>n+(m.isInstancedMesh?m.count:0),0);
}
