import {fixedTVFile} from './fixedTVCatalog.mjs';

// A deliberate TV choice, independent of the size of the visual crowd.
// Campaign only. The 3D scenery and Daily challenge retain their existing rules.
export class TVChoice {
 constructor(game){
  this.game=game;
  this.gate=null;
  this.locked=false;
  this.root=document.createElement('section');
  this.root.id='tv-choice-dialog';
  this.root.className='tv-choice-dialog';
  this.root.setAttribute('role','dialog');
  this.root.setAttribute('aria-modal','true');
  this.root.setAttribute('aria-label','Choisis la télévision à casser');
  this.root.hidden=true;
  this.root.innerHTML='<div class="tv-choice-panel"><p class="tv-choice-eyebrow">CONVERGENCE · DÉCISION TACTIQUE</p><h2>Choisis la TV à casser</h2><p class="tv-choice-caption">Une seule TV par paire. Touche celle que tu veux.</p><div class="tv-choice-options"></div><p class="tv-choice-foot">Le cortège attend ta décision.</p></div>';
  this.options=this.root.querySelector('.tv-choice-options');
  game.ui.container.appendChild(this.root);
 }
 open(gate){
  if(this.gate||gate.passed||this.game.state!=='playing')return false;
  this.gate=gate;this.locked=false;
  this.options.replaceChildren();
  for(const side of ['left','right']){
   const choice=side==='left'?gate.leftGate:gate.rightGate;
   const button=document.createElement('button');
   button.type='button';
   button.className='tv-choice-option';
   button.dataset.tvSide=side;
   button.setAttribute('aria-label','Casser la télévision '+(side==='left'?'de gauche':'de droite'));
   const img=document.createElement('img');
   img.src=import.meta.env.BASE_URL+'assets/tv-final/'+fixedTVFile(choice);
   img.alt='TV '+(side==='left'?'gauche':'droite')+' — visuel original';
   img.draggable=false;
   const text=document.createElement('span');
   text.textContent=side==='left'?'TV DE GAUCHE':'TV DE DROITE';
   button.append(img,text);
   button.addEventListener('click',()=>this.choose(side),{once:true});
   this.options.appendChild(button);
  }
  this.game.state='tv_choice';
  this.root.hidden=false;
  this.options.querySelector('button')?.focus({preventScroll:true});
  return true;
 }
 choose(side){
  if(!this.gate||this.locked||!['left','right'].includes(side))return false;
  this.locked=true;
  const gate=this.gate;
  const choice=side==='left'?gate.leftGate:gate.rightGate;
  this.close();
  if(!choice||gate.passed)return false;
  gate.passed=true;
  this.game.tvBreak?.trigger(gate,side);
  this.game.highlightGate(gate,side);
  this.game.playerX=side==='left'?-2.5:2.5;
  if(choice.op==='damage'&&choice.kind==='bravm')this.game.bravmGateCharge.start(gate,choice,side);
  else this.game.applyGate(choice,side);
  return true;
 }
 close(){
  const hadGate=!!this.gate;
  this.gate=null;this.locked=false;this.root.hidden=true;this.options.replaceChildren();
  if(hadGate&&this.game.state==='tv_choice')this.game.state='playing';
 }
 dispose(){this.close();this.root.remove();}
}
