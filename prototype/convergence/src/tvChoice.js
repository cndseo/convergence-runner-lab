import * as THREE from 'three';
import {TV_TAP_SLOP,canTapTV,claimTV,isTVTap,applyTVImpact,TV_IMPACT_LEAD} from './tvRoadRules.mjs';

// No DOM choice surface. Project only the next physical TV's existing PNG plane,
// never raycast the crowd (up to 312 figures) or the street. CSS-pixel touch bounds.
export class TVChoice {
 constructor(game){this.game=game;this.pointer=null;this.canvas=game.renderer.domElement;this.installInput();}
 close(){this.pointer=null;this.game.isDragging=false;}
 active(){return this.game.mode==='campaign'&&['playing','fighting'].includes(this.game.state);}
 next(){
  const g=this.game,items=[...(g.levelGenerator?.gates||[])];
  if(g.levelGenerator?.marseilleBonus)items.push(g.levelGenerator.marseilleBonus);
  return items.filter(x=>!x.passed).sort((a,b)=>a.z-b.z)[0];
 }
 eligible(gate){
  const g=this.game;
  if(!this.active()||!gate||gate!==this.next()||!canTapTV(gate,g.trackZ))return false;
  // Preserve the certified event order: a future reward cannot bypass a battle.
  if(g.levelGenerator.patrols?.some(p=>!p.passed&&p.z<gate.z))return false;
  if(g.levelGenerator.enemies?.some(e=>!e.defeated&&e.z<gate.z))return false;
  return true;
 }
 targets(){
  const gate=this.next(),g=this.game;
  if(!this.eligible(gate))return [];
  const rect=this.canvas.getBoundingClientRect(),targets=[];
  g.camera.updateMatrixWorld();
  for(const side of ['left','right']){
   const pane=gate[side+'Mesh'];if(!pane)continue;
   let visible=true;for(let n=pane;n;n=n.parent)if(!n.visible)visible=false;
   if(!visible)continue;
   pane.updateWorldMatrix(true,false);pane.geometry.computeBoundingBox();
   const b=pane.geometry.boundingBox,points=[];
   for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y]){
    const p=new THREE.Vector3(x,y,0).applyMatrix4(pane.matrixWorld).project(g.camera);
    if(p.z< -1||p.z>1)continue;
    points.push({x:rect.left+(p.x+1)*rect.width/2,y:rect.top+(1-p.y)*rect.height/2});
   }
   if(points.length!==4)continue;
   const left=Math.min(...points.map(p=>p.x)),right=Math.max(...points.map(p=>p.x));
   const top=Math.min(...points.map(p=>p.y)),bottom=Math.max(...points.map(p=>p.y));
   if(right<rect.left||left>rect.right||bottom<rect.top||top>rect.bottom)continue;
   const x=(left+right)/2,y=(top+bottom)/2;
   const hw=Math.max(22,(right-left)/2+4),hh=Math.max(22,(bottom-top)/2+4);
   targets.push({gate,side,x,y,left:Math.max(rect.left,x-hw),right:Math.min(rect.right,x+hw),top:Math.max(rect.top,y-hh),bottom:Math.min(rect.bottom,y+hh)});
  }
  // Split padded hit zones at the midpoint; neither TV can steal the other tap.
  if(targets.length===2){const mid=(targets[0].x+targets[1].x)/2;targets[0].right=Math.min(targets[0].right,mid);targets[1].left=Math.max(targets[1].left,mid);}
  return targets;
 }
 hit(x,y){return this.targets().filter(t=>x>=t.left&&x<=t.right&&y>=t.top&&y<=t.bottom).sort((a,b)=>Math.hypot(x-a.x,y-a.y)-Math.hypot(x-b.x,y-b.y))[0]||null;}
 choose(gate,side){
  if(!this.eligible(gate)||!['left','right'].includes(side)||!gate[side+'Mesh'])return false;
  const g=this.game,choice=gate[side+'Gate'];
  if(!claimTV(gate,'chosen'))return false;
  gate.tvSide=side;
  g.tvBreak.trigger(gate,side);
  if(choice.kind==='marseille'){
   if(g.marseille.grantLevelOneGift()){g.audio.playGateGood();g.ui.showLbdImpact('MARSEILLAIS +1 EN RÉSERVE',true);}
  }else{
   // Keep the established bikes as a non-blocking visual response. The printed
   // -3 is applied immediately once, not again when the animation arrives.
   if(choice.kind==='bravm')g.bravmGateCharge.start(gate,choice,side,{nonBlocking:true});
   g.applyGate(choice,side);
  }
  for(const s of ['left','right'])if(gate[s+'Mesh'])gate[s+'Mesh'].userData.root.visible=false;
  g.ui.updateCount(g.crowdManager.getPlayerCount());
  return true;
 }
 miss(gate){
  const g=this.game;
  if(!claimTV(gate,'missed'))return false;
  const before={count:g.crowdManager.getPlayerCount(),shields:g.shields},after=applyTVImpact(before);
  const lost=before.count-after.count,blocked=before.shields-after.shields;
  g.shields=after.shields;
  if(lost)g.crowdManager.removeFromPlayerCrowd(lost,{knockdown:true});
  // Physical bump/topple, not the TV reward or the selected-TV shatter effect.
  for(const side of ['left','right']){
   const root=gate[side+'Mesh']?.userData.root;if(!root)continue;
   root.visible=true;root.rotation.x=-.25;
  }
  g.audio.playCombatImpact?.('body',{reaction:lost>0});g.ui.screenShake(lost?7:3);
  g.crowdManager.spawnImpactFlash(new THREE.Vector3(g.playerX,1,-g.trackZ-.6),0xffbf83);
  g.ui.showLbdImpact('CHOC TV '+(lost?'−'+lost+' manifestants':'ABSORBÉ')+(blocked?' · −'+blocked+' protections':''),!lost);
  g.ui.updateCount(after.count);
  const record={choice:{op:'impact',kind:'tv'},side:'miss',before,after};
  if(gate===g.levelGenerator.marseilleBonus){g.tvBonusImpact=record;}
  else g.gateHistory.push(record);
  g.experience?.gate(before,after);
  if(!after.count)g.loseGame('obstacle');
  return true;
 }
 collisions(){
  if(!this.active()||this.game.state!=='playing')return;
  // Swept condition: crossing the impact point during a long frame still hits.
  for(let gate=this.next();gate&&this.game.trackZ>=gate.z-TV_IMPACT_LEAD;gate=this.next()){
   if(gate===this.game.levelGenerator.marseilleBonus){claimTV(gate,'missed');gate.tvState='resolved';}
   else this.miss(gate);
   if(this.game.state==='lose')break;
  }
 }
 update(dt){
  if(this.game.state==='paused'){this.close();return;}
  const gates=[...(this.game.levelGenerator?.gates||[])];
  if(this.game.levelGenerator?.marseilleBonus)gates.push(this.game.levelGenerator.marseilleBonus);
  for(const gate of gates)if(['chosen','missed'].includes(gate.tvState)){
   gate.tvElapsed+=dt;
   if(gate.tvState==='missed')for(const side of ['left','right']){
    const root=gate[side+'Mesh']?.userData.root;if(!root)continue;
    root.rotation.x=-Math.min(1.4,.25+gate.tvElapsed*2.5);root.position.y=-Math.min(.3,gate.tvElapsed*.5);
   }
   if(gate.tvElapsed>=.65)gate.tvState='resolved';
  }
 }
 installInput(){
  const c=this.canvas,g=this.game;c.style.touchAction='none';
  c.addEventListener('pointerdown',e=>{
   if(!e.isPrimary||e.button!==0){this.close();return;}
   if(!['playing','fighting','final_chase'].includes(g.state))return;
   this.pointer={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,time:performance.now(),runId:g.runId,state:g.state,target:this.hit(e.clientX,e.clientY),dragged:false};
   c.setPointerCapture(e.pointerId);
  });
  c.addEventListener('pointermove',e=>{
   const p=this.pointer;if(!p||p.id!==e.pointerId)return;
   if(g.mode==='daily'||g.state==='final_chase'||Math.hypot(e.clientX-p.x,e.clientY-p.y)>TV_TAP_SLOP)p.dragged=true;
   if(p.dragged&&['playing','final_chase'].includes(g.state)){
    g.isDragging=true;g.playerX=Math.max(-3.5,Math.min(3.5,g.playerX+(e.clientX-p.lastX)*.02));
   }
   p.lastX=e.clientX;
  });
  c.addEventListener('pointerup',e=>{
   const p=this.pointer;this.close();
   if(c.hasPointerCapture(e.pointerId))c.releasePointerCapture(e.pointerId);
   if(!p||p.id!==e.pointerId||p.runId!==g.runId||p.state!==g.state||!isTVTap(p,{x:e.clientX,y:e.clientY},performance.now()))return;
   const target=this.hit(e.clientX,e.clientY);
   if(target&&p.target?.gate===target.gate&&p.target.side===target.side)this.choose(target.gate,target.side);
  });
  c.addEventListener('pointercancel',()=>this.close());c.addEventListener('lostpointercapture',()=>this.close());
  window.addEventListener('blur',()=>{this.close();g.keys={};if(['playing','fighting','bravm_charge'].includes(g.state))document.getElementById('pause-btn').click();});
  document.addEventListener('visibilitychange',()=>{this.close();g.keys={};});
 }
}
