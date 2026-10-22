import * as THREE from 'three';

// Front-facing transparent character cutouts approved by the user.
// The tactical model, roster, shields, charges, and collisions remain authoritative.
const MAPS={crs:'crs-reference.webp',bac:'bac-reference.webp',bravm:'bravm-reference.webp'};
const heights={crs:2.03,bac:1.91,bravm:2.04};
const widths={crs:1.55,bac:1.45,bravm:2.70};
const loader=new THREE.TextureLoader();
const textures=new Map();
const active=new Set();
export function getPoliceReferenceTexture(kind){
  if(!textures.has(kind)){
    const path=import.meta.env.BASE_URL+'assets/police-reference/'+MAPS[kind];
    textures.set(kind,new Promise((ok,fail)=>loader.load(path,texture=>{
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;
      texture.generateMipmaps=true;ok(texture);
    },undefined,fail)).catch(error=>{textures.delete(kind);throw error;}));
  }
  return textures.get(kind);
}
export const REFERENCE_MODELS=Object.freeze(Object.values(MAPS));
export function preloadReferencePolice(){return Promise.allSettled(Object.keys(MAPS).map(getPoliceReferenceTexture));}
export function attachReferenceOfficer(officer,kind,index=0){
  if(!MAPS[kind]||officer.userData.policeReferenceRequested)return;
  officer.userData.policeReferenceRequested=true;
  getPoliceReferenceTexture(kind).then(texture=>{
    if(!officer.parent)return;
    const material=new THREE.SpriteMaterial({map:texture,transparent:true,depthWrite:false,alphaTest:.10,
      color:0xffffff,sizeAttenuation:true});
    const sprite=new THREE.Sprite(material);
    sprite.name='POLICE_REFERENCE_'+kind.toUpperCase();
    sprite.userData.referenceVisual=true;
    sprite.scale.set(widths[kind],heights[kind],1);
    sprite.position.set(0,heights[kind]*.50,0);
    sprite.center.set(.5,.5);
    sprite.renderOrder=3;
    // Keep every existing combat mesh in the scene as a fallback contract;
    // only hide its visible geometry when the approved reference loaded successfully.
    for(const child of officer.children)child.visible=false;
    officer.add(sprite);
    officer.userData.referenceSprite=sprite;
    officer.userData.referenceKind=kind;
    officer.userData.referenceIndex=index;
    active.add(officer);
  }).catch(error=>console.warn('Police reference fallback: '+kind,error?.message));
}
// BRAV-M motorbikes visibly rush toward the player at first contact.
// This is a choreography layer, never an additional casualty calculation.
const charges=new WeakMap();
export function updateReferenceMotorcycleCharge(game,dt){
  if(game.state!=='fighting'||!game.fightingEnemy)return;
  const enemy=game.fightingEnemy;
  const units=(enemy.isBoss?game.levelGenerator.boss?.officers:enemy.officers)||[];
  const rides=units.filter(o=>o.userData.faction==='bravm').slice(0,enemy.isBoss?4:6);
  if(!rides.length)return;
  let state=charges.get(enemy);
  if(!state){state={t:0,units:rides.map((officer,index)=>({
    officer,index,x:officer.position.x,z:officer.position.z}))};
    charges.set(enemy,state);
  }
  state.t+=Math.min(.05,Math.max(0,dt));
  const t=state.t;
  const u=Math.max(0,Math.min(1,(t-.08)/1.45));
  const ease=u*u*(3-2*u);
  state.units.forEach(({officer,index,x,z})=>{
    if(!officer.parent||officer.userData.combatRetired)return;
    const forward=3.5+(.5*(index%3));
    officer.position.z=z + ease*forward;
    officer.position.x=x + Math.sin(t*5+index*.9)*.08*(1-u);
    const visual=officer.userData.referenceSprite;
    if(visual){
      visual.position.y=heights.bravm*.5+Math.sin(t*17+index*.7)*.035*(1-u);
      visual.rotation.set(0,0,Math.sin(t*3+index*.8)*.018*(1-u));
    }
  });
}
export function resetReferencePolice(){
  active.clear();
}
