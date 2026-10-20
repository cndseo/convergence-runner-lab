import * as THREE from 'three';
import {FINAL_CAMPAIGN_LEVEL,INTRO_AUDIO_SECONDS,INTRO_SPEECH_DELAY,INTRO_ESCAPE_SECONDS,introPhase,easeOut,canCatchTarget} from './storyRules.mjs';

const base = import.meta.env.BASE_URL + 'assets/story/';
const UI_TEMPLATE = `
  <div class="story-vignette"></div>
  <div class="story-top"><span>CONVERGENCE</span><span class="story-stage"></span></div>
  <div class="story-bottom">
    <strong class="story-heading"></strong>
    <span class="story-subtitle"></span>
  </div>
  <button class="story-skip" type="button">PASSER L’INTRO <span aria-hidden="true">›</span></button>
`;

export class StoryDirector {
  constructor(game){
    this.game=game;
    this.sprite=null;
    this.finalTarget=null;
    this.elapsed=0;
    this.ready=false;
    this.voiceStarted=false;
    this.introSeen=false;
    this.phase='idle';
    this.audioSeconds=INTRO_AUDIO_SECONDS;
    this.introEnd=0;
    this.textures={};
    this.overlay=null;
    this.assetsPromise=null;
  }
  loadAssets(){
    if(this.assetsPromise)return this.assetsPromise;
    const loader=new THREE.TextureLoader();
    this.assetsPromise=Promise.all(['front','back'].map(async name=>{
      const texture=await loader.loadAsync(base+'target-'+name+'.webp');
      texture.colorSpace=THREE.SRGBColorSpace;
      this.textures[name]=texture;
    })).catch(err=>{console.warn('Story asset failed:',err.message);});
    return this.assetsPromise;
  }
  showOverlay({stage,heading,subtitle,skip=false}){
    this.hideOverlay();
    const layer=document.createElement('div');
    layer.id='story-overlay';
    layer.innerHTML=UI_TEMPLATE;
    layer.querySelector('.story-stage').textContent=stage;
    layer.querySelector('.story-heading').textContent=heading;
    layer.querySelector('.story-subtitle').textContent=subtitle;
    const btn=layer.querySelector('.story-skip');
    btn.hidden=!skip;
    btn.addEventListener('click',()=>this.skipIntro());
    this.game.ui.container.appendChild(layer);
    this.overlay=layer;
  }
  setSubtitle(heading,subtitle){
    if(!this.overlay)return;
    if(heading)this.overlay.querySelector('.story-heading').textContent=heading;
    if(subtitle)this.overlay.querySelector('.story-subtitle').textContent=subtitle;
  }
  hideOverlay(){
    this.overlay?.remove();
    this.overlay=null;
  }
  makeSprite(face='front'){
    const texture=this.textures[face];
    if(!texture)return null;
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({
      map:texture,transparent:true,alphaTest:.02,depthWrite:false,depthTest:face==='back'
    }));
    const ratio=texture.image?.width/texture.image?.height||.70;
    sprite.scale.set(2.7*ratio,2.7,1);
    sprite.center.set(.5,.5);
    sprite.renderOrder=face==='front'?20:0;
    sprite.userData.storyFigure=true;
    this.game.scene.add(sprite);
    return sprite;
  }
  changeFace(sprite,face){
    if(!sprite || !this.textures[face] || sprite.material.map===this.textures[face])return;
    sprite.material.map=this.textures[face];
    // The speaking face must remain in front of the CRS line: its previous
    // depth buffer test made skin and hair look transparent through officers.
    sprite.material.depthTest=face==='back';
    sprite.renderOrder=face==='front'?20:0;
    sprite.material.needsUpdate=true;
  }
  destroySprite(sprite){
    if(!sprite)return;
    this.game.scene.remove(sprite);
    sprite.material?.dispose();
  }
  clear(){
    this.game.audio.stopIntroVoice?.();
    this.destroySprite(this.sprite);
    this.destroySprite(this.finalTarget);
    this.sprite=null;this.finalTarget=null;
    this.hideOverlay();
    this.phase='idle';
    this.ready=false;
    this.voiceStarted=false;
  }
  async beginIntro(){
    const game=this.game;
    this.clear();
    this.introSeen=true;
    this.phase='loading';
    this.showOverlay({
      stage:'PROLOGUE · NIVEAU 1',
      heading:'LA FUITE',
      subtitle:'Il cherche refuge derrière les forces de l’ordre…',
      skip:true
    });
    game.ui.hud.style.display='none';
    game.state='intro';
    this.elapsed=0;
    // Move only the camera; the actual level, crowd and solver are untouched.
    this.line=game.levelGenerator.enemies[0]?.z||86;
    game.levelGenerator.updateVisibility(this.line);
    this.startZ=-this.line+4.6;
    this.endZ=-this.line-7.5;
    game.camera.position.set(0,3.5,this.startZ+8.0);
    game.camera.lookAt(0,1.6,this.startZ-2.8);
    const runId=game.runId;
    const [assets]=await Promise.all([this.loadAssets(),game.audio.preloadIntroVoice?.()]);
    if(game.runId!==runId||game.state!=='intro')return;
    this.sprite=this.makeSprite('front');
    if(this.sprite)this.sprite.position.set(0,1.3,this.startZ);
    this.audioSeconds=game.audio.introVoiceBuffer?.duration||INTRO_AUDIO_SECONDS;
    this.introEnd=INTRO_SPEECH_DELAY+this.audioSeconds+.28+INTRO_ESCAPE_SECONDS+.65;
    this.phase='speaking';
    this.elapsed=0;
    this.ready=true;
  }
  skipIntro(){
    if(this.game.state!=='intro')return;
    this.finishIntro();
  }
  finishIntro(){
    if(this.game.state!=='intro')return;
    this.game.audio.stopIntroVoice?.();
    this.destroySprite(this.sprite);this.sprite=null;
    this.hideOverlay();
    this.phase='idle';
    this.ready=false;
    const game=this.game;
    game.state='playing';
    game.levelGenerator.updateVisibility(0);
    game.camera.position.set(0,6.3,8.4);
    game.camera.lookAt(0,.8,-8);
    game.ui.showHUD();
  }
  updateIntro(dt){
    if(!this.ready)return;
    this.elapsed+=dt;
    const g=this.game, t=this.elapsed;
    if(t>=INTRO_SPEECH_DELAY && !this.voiceStarted){
      this.voiceStarted=true;
      g.audio.playIntroVoice?.();
    }
    const phase=introPhase(t,this.audioSeconds);
    if(phase.phase==='speaking'){
      if(this.sprite){
        this.changeFace(this.sprite,'front');
        this.sprite.position.y=1.33+Math.sin(t*6)*.027;
      }
      return;
    }
    if(this.sprite){
      if(this.sprite.userData.face!=='back'){
        this.changeFace(this.sprite,'back');
        this.sprite.userData.face='back';
        this.setSubtitle('IL S’ENFUIT','Il court se mettre à l’abri derrière les CRS.');
      }
      const k=easeOut(phase.progress);
      this.sprite.position.set(-2.2*Math.sin(k*Math.PI*.5),1.34+Math.abs(Math.sin(t*13))*.17,
        this.startZ+(this.endZ-this.startZ)*k);
      // Follow the fleeing figure until it slips behind the last CRS rank.
      g.camera.position.lerp(new THREE.Vector3(-.7,3.4,this.startZ+8.0-k*3.0),Math.min(1,dt*1.6));
      g.camera.lookAt(this.sprite.position.x*.35,1.25,this.sprite.position.z-1.9);
    }
    if(t>=this.introEnd)this.finishIntro();
  }
  prepareFinalTarget(){
    this.destroySprite(this.finalTarget);this.finalTarget=null;
    if(this.game.level!==FINAL_CAMPAIGN_LEVEL)return;
    const create=()=>{
      if(this.game.level!==FINAL_CAMPAIGN_LEVEL || this.game.state==='menu')return;
      this.finalTarget=this.makeSprite('back');
      if(this.finalTarget){
        this.finalTarget.position.set(0,1.3,-this.game.trackLength-8.0);
        this.finalTarget.scale.multiplyScalar(.82);
      }
    };
    if(this.textures.back)create();
    else this.loadAssets().then(create);
  }
  beginFinalChase(){
    const game=this.game;
    if(game.level!==FINAL_CAMPAIGN_LEVEL || !game.levelGenerator.boss?.defeated)return false;
    this.hideOverlay();
    this.phase='final-chase';
    this.elapsed=0;
    this.ready=true;
    game.state='final_chase';
    this.targetProgress=game.trackLength+8;
    // The target moves into the opposite lane; the final catch demands
    // at least one deliberate steering gesture instead of an automatic win.
    this.targetX=game.playerX>=0?-1.8:1.8;
    if(!this.finalTarget)this.finalTarget=this.makeSprite('back');
    this.showOverlay({
      stage:'NIVEAU 10 · RÉCOMPENSE FINALE',
      heading:'IL EST À PORTÉE !',
      subtitle:'Glisse pour rejoindre le personnage et le rattraper.',
      skip:false
    });
    const overlay=this.overlay;
    if(overlay)overlay.classList.add('story-chase');
    return true;
  }
  updateChase(dt){
    const game=this.game;
    this.elapsed+=dt;
    if(game.keys?.ArrowLeft || game.keys?.a)game.playerX=Math.max(-3.5,game.playerX-8*dt);
    if(game.keys?.ArrowRight || game.keys?.d)game.playerX=Math.min(3.5,game.playerX+8*dt);
    // No extra enemies, damage or gates: the boss is already defeated.
    this.targetProgress+=this.elapsed>7?.35*dt:1.1*dt;
    // Hold the player near the fleeing target rather than allowing them to
    // overshoot the street and miss forever while steering sideways.
    game.trackZ=Math.min(game.trackZ+4.5*dt,this.targetProgress+1.15);
    this.targetX+=Math.sin(this.elapsed*3)*.06*dt;
    if(this.finalTarget){
      this.changeFace(this.finalTarget,'back');
      this.finalTarget.position.set(this.targetX,1.3+Math.abs(Math.sin(this.elapsed*12))*.13,-this.targetProgress);
    }
    game.crowdManager.updatePlayerPosition(game.playerX,-game.trackZ);
    game.crowdManager.update(dt);
    game.camera.position.lerp(new THREE.Vector3(game.playerX*.3,5.3,-game.trackZ+8),Math.min(1,dt*7));
    game.camera.lookAt(game.playerX*.2,1.2,-game.trackZ-5);
    if(canCatchTarget({
      level:game.level,finalLineDefeated:!!game.levelGenerator.boss?.defeated,
      playerProgress:game.trackZ,targetProgress:this.targetProgress,
      playerX:game.playerX,targetX:this.targetX
    })) {
      this.beginCapture();
    }
  }
  beginCapture(){
    if(this.phase!=='final-chase')return;
    this.phase='capture';
    this.elapsed=0;
    this.game.state='final_capture';
    this.setSubtitle('OBJECTIF FINAL ATTEINT','Le personnage est rattrapé. La campagne est terminée.');
    if(this.finalTarget)this.changeFace(this.finalTarget,'front');
    this.game.audio.playWin?.();
  }
  updateCapture(dt){
    this.elapsed+=dt;
    if(this.finalTarget)this.finalTarget.position.y=1.3+Math.sin(this.elapsed*4)*.02;
    if(this.elapsed<1.7)return;
    this.game.finalCaptured=true;
    this.hideOverlay();
    this.phase='idle';
    this.destroySprite(this.finalTarget);this.finalTarget=null;
    this.game.winGame();
  }
  update(dt){
    switch(this.game.state){
      case 'intro': this.updateIntro(dt);break;
      case 'final_chase': this.updateChase(dt);break;
      case 'final_capture': this.updateCapture(dt);break;
    }
  }
}
