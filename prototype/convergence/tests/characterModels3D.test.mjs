import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {
 createCostumeModel3D,createMarseilleActor3D,updateCharacterModel3D,disposeCharacterModel3D
} from '../src/characterModels3D.js';

const geometryStats=model=>{
 let meshes=0,sprites=0;
 model.traverse(x=>{if(x.isMesh)meshes++;if(x.isSprite)sprites++;});
 const dims=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
 return {meshes,sprites,size:[dims.x,dims.y,dims.z]};
};

test('approved Spider-Man costume is articulated 3D, not a flat billboard',()=>{
 const model=createCostumeModel3D('spiderman');
 const info=geometryStats(model);
 assert.ok(info.meshes>=17);
 assert.equal(info.sprites,0);
 assert.ok(info.size[0]>.5&&info.size[1]>1.4&&info.size[2]>.35);
 assert.ok(model.getObjectByName('3D_WHITE_SPIDER'));
 assert.ok(model.getObjectByName('3D_WHITE_EYE'));
 const legs=model.userData.character3D.limbs.legs;
 updateCharacterModel3D(model,.37,true);
 assert.notEqual(legs[0].rotation.x,legs[1].rotation.x);
 assert.equal(model.userData.character3D.kind,'spiderman');
 disposeCharacterModel3D(model);
});

test('dinosaur inflatable has depth, open mouth, eyes, feet and flexible tail',()=>{
 const model=createCostumeModel3D('dinosaur');
 const info=geometryStats(model);
 assert.equal(info.sprites,0);
 assert.ok(info.meshes>45);
 assert.ok(info.size[2]>1.6,'tail must have real world depth');
 for(const name of ['3D_DINO_HEAD','3D_OPEN_MOUTH','3D_INFLATABLE_TAIL','3D_DINO_EYE','3D_BLACK_CLAW'])
  assert.ok(model.getObjectByName(name),name);
 updateCharacterModel3D(model,.8,true);
 assert.ok(Math.abs(model.userData.character3D.tail.rotation.y)>.01);
 disposeCharacterModel3D(model);
});

test('12 distinct Marseille actors contain no Sprite or image planes, all rigged for walking',()=>{
 const models=Array.from({length:12},(_,i)=>createMarseilleActor3D(i));
 try{
  let total=0;
  for(const [i,model] of models.entries()){
   const info=geometryStats(model);
   total+=info.meshes;
   assert.equal(info.sprites,0);
   assert.ok(info.meshes>=15);
   assert.ok(info.size[2]>.30);
   updateCharacterModel3D(model,i/11+.2,true);
   assert.notEqual(model.userData.character3D.limbs.legs[0].rotation.x,0);
   assert.ok(model.getObjectByName('3D_BLUE_SCARF'));
  }
  assert.ok(total>190);
 }finally{models.forEach(disposeCharacterModel3D);}
});
