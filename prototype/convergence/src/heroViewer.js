import * as T from 'three';
import {createHeroModel,disposeHero} from './heroModels.js';

// One temporary WebGL context; all rigs/textures reuse the game asset cache.
export class HeroViewer {
 constructor(host){
  this.host=host;this.closeup=false;this.token=0;this.rotation=0;this.dragging=false;
  this.scene=new T.Scene();this.scene.background=new T.Color('#15212d');
  this.camera=new T.PerspectiveCamera(32,1,.1,30);this.camera.position.set(0,1.15,3.8);this.camera.lookAt(0,.97,0);
  this.renderer=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,alpha:false});
  this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;
  this.zoom=document.createElement('button');this.zoom.type='button';this.zoom.className='hero-zoom';this.zoom.textContent='Voir le visage';this.zoom.setAttribute('aria-pressed','false');host.append(this.zoom);this.zoom.addEventListener('click',()=>{this.closeup=!this.closeup;this.frame();});
  this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));host.append(this.renderer.domElement);
  this.scene.add(new T.HemisphereLight(0xeaf4ff,0x61727d,2.5));
  const light=new T.DirectionalLight(0xffecdb,3);light.position.set(-3,4,5);this.scene.add(light);
  const rim=new T.DirectionalLight(0x86c4ff,2);rim.position.set(3,2,-2);this.scene.add(rim);
  this.clock=new T.Clock();
  this.resize=new ResizeObserver(()=>{const w=host.clientWidth,h=host.clientHeight;this.renderer.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();});this.resize.observe(host);
  const canvas=this.renderer.domElement;canvas.style.touchAction='none';
  canvas.addEventListener('pointerdown',e=>{this.dragging=true;this.x=e.clientX;canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(this.dragging){this.rotation+=(e.clientX-this.x)*.015;this.x=e.clientX;}});
  canvas.addEventListener('pointerup',()=>this.dragging=false);canvas.addEventListener('pointercancel',()=>this.dragging=false);
  this.renderer.setAnimationLoop(()=>{
   const dt=Math.min(.05,this.clock.getDelta());
   if(this.human){this.human.mixer.update(dt*.3);this.human.update?.(dt*.3);this.human.model.rotation.y=this.rotation;}
   this.renderer.render(this.scene,this.camera);
  });
 }
 async show(profile,equipment){
  const token=++this.token;
  if(this.human){this.scene.remove(this.human.model);disposeHero(this.human);this.human=null;}
  const human=await createHeroModel(profile,equipment);
  if(token!==this.token){disposeHero(human);return false;}
  this.human=human;this.rotation=0;
  this.tall=profile.model.prop==='placard';human.model.rotation.y=0;this.scene.add(human.model);this.frame();return true;
 }
 frame(){
  if(this.closeup&&this.human){
   this.human.model.updateMatrixWorld(true);const p=this.human.model.getObjectByName('Bip01_Head').getWorldPosition(new T.Vector3());
   this.camera.position.set(0,p.y+.06,1.25);this.camera.lookAt(0,p.y+.06,0);
  }else{this.camera.position.set(0,this.tall?1.4:1.15,this.tall?4.9:3.8);this.camera.lookAt(0,this.tall?1.3:.97,0);}
  this.zoom.textContent=this.closeup?'Voir la silhouette':'Voir le visage';this.zoom.setAttribute('aria-pressed',String(this.closeup));
 }
 portrait(){return new Promise(resolve=>this.renderer.domElement.toBlob(resolve,'image/png'));}
 dispose(){++this.token;this.resize.disconnect();this.renderer.setAnimationLoop(null);disposeHero(this.human);this.renderer.dispose();this.renderer.forceContextLoss();this.renderer.domElement.remove();this.zoom.remove();}
}
