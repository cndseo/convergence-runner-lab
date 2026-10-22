import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createStreetPatina,countStreetPatinaInstances} from '../src/streetPatina.js';

test('street improvements stay outside player lane and use instancing',()=>{
 const scene=new THREE.Scene(),tracked=[];
 const group=createStreetPatina(scene,200,tracked);
 assert.equal(group.name,'CONVERGENCE_STREET_PATINA');
 assert.equal(scene.children.includes(group),true);
 assert.equal(tracked.includes(group),true);
 assert.ok(group.children.length<=18,'instance batches limit draw calls');
 assert.ok(countStreetPatinaInstances(group)>150,'street detail count');
 assert.ok(group.children.every(m=>m.isInstancedMesh),'only instanced detail meshes');
 const matrix=new THREE.Matrix4(),position=new THREE.Vector3(),scale=new THREE.Vector3(),quaternion=new THREE.Quaternion();
 for(const mesh of group.children)for(let i=0;i<mesh.count;i++){
   mesh.getMatrixAt(i,matrix);matrix.decompose(position,quaternion,scale);
   const min=Math.abs(position.x)-scale.x*.5;
   assert.ok(min>=5.95,mesh.name+' intrudes into playable lane: '+min);
   assert.ok(Number.isFinite(position.z));
 }
 const again=createStreetPatina(new THREE.Scene(),200,[]);
 assert.equal(countStreetPatinaInstances(again),countStreetPatinaInstances(group));
 assert.equal(group.children.length,again.children.length);
});
test('tiny levels remain valid',()=>{
 for(const len of [20,40,80]){
  const obj=createStreetPatina(new THREE.Scene(),len,[]);
  assert.ok(obj.children.length<=18);
  assert.ok(countStreetPatinaInstances(obj)>0);
 }
});
