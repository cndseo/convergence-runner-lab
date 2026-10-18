import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
// Bake immobile bridge pieces by material, preserving the existing scene design.
export function compactStaticTrack(scene, tracked) {
 const buckets=new Map(),keep=[];
 for(const mesh of tracked){
  if(!mesh.isMesh||mesh.material.map){keep.push(mesh);continue;}
  const key=mesh.material.color.getHex()+':'+mesh.castShadow;
  if(!buckets.has(key))buckets.set(key,[]);
  buckets.get(key).push(mesh);
 }
 for(const group of buckets.values()){
  if(group.length<2){keep.push(...group);continue;}
  const parts=group.map(m=>{m.updateMatrix();return m.geometry.clone().applyMatrix4(m.matrix);});
  const geometry=mergeGeometries(parts);
  if(!geometry){parts.forEach(p=>p.dispose());keep.push(...group);continue;}
  const material=group[0].material;
  const merged=new THREE.Mesh(geometry,material);merged.receiveShadow=true;
  merged.castShadow=group[0].castShadow;merged.userData.dynamic=true;merged.name='Paris static batch';
  scene.add(merged);keep.push(merged);
  parts.forEach(p=>p.dispose());
  group.forEach(m=>{scene.remove(m);m.geometry.dispose();if(m.material!==material)m.material.dispose();});
 }
 tracked.splice(0,tracked.length,...keep);
}
