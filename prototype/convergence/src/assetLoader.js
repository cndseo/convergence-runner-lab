import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Real third-party GLB from the CC0 Kenney City Kit Roads library.
// Decorative only: no collider, no gameplay changes, failure is nonfatal.
export function placeKenneyRoadFurniture(scene, trackLength, tracked) {
  const loader = new GLTFLoader();
  const url = import.meta.env.BASE_URL + 'assets/kenney/road-side.glb';
  loader.load(url, gltf => {
    const base=gltf.scene;
    const box=new THREE.Box3().setFromObject(base);
    const size=box.getSize(new THREE.Vector3());
    const max=Math.max(size.x,size.y,size.z);
    if(!Number.isFinite(max)||max===0){console.warn('Kenney road-side GLB empty');return;}
    const scale=1.4/max;
    // Road-side model as a distant detail, never in the playable road.
    for(let z=18;z<trackLength;z+=35){
      for(const side of [-1,1]){
        const item=base.clone(true);
        item.scale.setScalar(scale);
        item.position.set(side*6.3,.3,-z);
        item.rotation.y=side>0?0:Math.PI;
        item.userData.dynamic=true;
        scene.add(item);
        tracked.push(item);
      }
    }
    console.info('Kenney GLB roadside props integrated',url);
  },undefined,e=>console.warn('Optional Kenney GLB unavailable:',e?.message||e));
}
