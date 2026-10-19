import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { URBAN_DECAY_SCENES } from '../src/urbanDecayAssets.js';
const root=join(dirname(fileURLToPath(import.meta.url)),'../public/assets/urban-decay');
const expected=[
 {name:'hospital-delabre.glb',width:11,height:7},
 {name:'lycee-delabre.glb',width:12,height:7},
 {name:'campement-trottoir.glb',width:6,height:1.6},
];
for(const {name,width,height} of expected)test('3D urban asset loads: '+name,async()=>{
 const buffer=await readFile(join(root,name));
 assert.equal(buffer.toString('ascii',0,4),'glTF','binary must be GLB');
 assert.ok(buffer.length<500000,'mobile budget: each asset <500 KB');
 const data=buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength);
 const {scene}=await new Promise((resolve,reject)=>new GLTFLoader().parse(data,'',resolve,reject));
 const box=new THREE.Box3().setFromObject(scene);
 const size=box.getSize(new THREE.Vector3());
 let tris=0,meshes=0;
 scene.traverse(obj=>{if(obj.isMesh){meshes++;const geo=obj.geometry;tris+=(geo.index?geo.index.count:geo.attributes.position.count)/3;}});
 assert.ok(size.x>=width&&size.y>=height,'asset has real volume in game units');
 assert.ok(meshes>10&&meshes<24,'optimized number of merged draw calls');
 assert.ok(tris<25000,'mobile triangle budget');
 assert.ok(URBAN_DECAY_SCENES.some(e=>e.model===name),'asset actually has a level placement');
 console.log(JSON.stringify({name,bytes:buffer.length,meshCount:meshes,triangles:tris,bounds:size.toArray().map(n=>+n.toFixed(2))}));
});
test('scenery never obstructs player lane or alters tactical gates',()=>{
 assert.ok(URBAN_DECAY_SCENES.every(e=>Math.abs(e.x)>=9.5));
 assert.ok(URBAN_DECAY_SCENES.every(e=>e.z>20));
 assert.equal(URBAN_DECAY_SCENES.length,4);
});