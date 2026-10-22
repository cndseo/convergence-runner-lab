// Inline guidance only: no modal, no pause, no input interception.
// It follows the physical TV planes already used for tap hit-testing.
export class FirstTVTutorial {
 constructor(choice){
  this.choice=choice;
  this.game=choice.game;
  this.done=false;
  this.firstGate=null;
  this.elapsed=0;
  this.root=document.createElement('div');
  this.root.id='first-tv-tutorial';
  this.root.setAttribute('aria-live','polite');
  this.root.hidden=true;
  this.root.innerHTML='<div class="first-tv-callout">🤛 CHOISIS 1 TV 🤜</div>'+
    '<div class="first-tv-marker first-tv-left" aria-hidden="true"><span>👇</span></div>'+
    '<div class="first-tv-marker first-tv-right" aria-hidden="true"><span>👇</span></div>';
  this.callout=this.root.querySelector('.first-tv-callout');
  this.markers=[this.root.querySelector('.first-tv-left'),this.root.querySelector('.first-tv-right')];
  this.game.ui.container.appendChild(this.root);
 }
 reset(){
  this.done=false;
  this.firstGate=this.game.mode==='campaign'&&this.game.geographicLevel===1
   ?this.game.levelGenerator?.gates?.[0]||null:null;
  this.elapsed=0;
  this.hide();
 }
 hide(){if(!this.root.hidden)this.root.hidden=true;}
 resolve(gate){
  if(gate===this.firstGate){this.done=true;this.hide();}
 }
 update(dt){
  const g=this.game,gate=this.firstGate;
  if(this.done||!gate||!this.choice.active()||g.state!=='playing'||
    g.geographicLevel!==1||gate.passed){
   this.hide();return;
  }
  const distance=gate.z-g.trackZ;
  // Avoid gate sorting, projections and layout reads outside the short TV approach.
  if(distance>19.5||distance<=1){this.hide();return;}
  this.elapsed+=dt;
  if(this.elapsed<0.10&&!this.root.hidden)return;
  this.elapsed=0;
  if(!this.choice.eligible(gate)){this.hide();return;}
  const targets=this.choice.targets();
  if(targets.length!==2){this.hide();return;}
  const rect=this.choice.canvas.getBoundingClientRect();
  const top=Math.min(...targets.map(t=>t.top))-rect.top;
  // Keep the callout above the pair without blocking either television.
  const bannerY=Math.max(115,Math.min(rect.height*.49,top-86));
  this.callout.style.top=bannerY+'px';
  for(let i=0;i<2;i++){
   const t=targets.find(t=>t.side===(i===0?'left':'right'));
   const m=this.markers[i];
   m.style.left=Math.round(t.x-rect.left)+'px';
   m.style.top=Math.round(t.top-rect.top-5)+'px';
   m.style.width=Math.round(Math.max(48,t.right-t.left+9))+'px';
   m.style.height=Math.round(Math.max(42,t.bottom-t.top+10))+'px';
  }
  this.root.hidden=false;
 }
}
