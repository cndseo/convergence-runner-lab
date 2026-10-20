import {PARIS_DISTRICTS,districtForLevel} from './parisDistricts.mjs';

export class ParisJourney {
 constructor(game){
  this.game=game;this.timer=null;
  const style=document.createElement('style');
  style.textContent=`
   #paris-arrival{position:absolute;left:50%;top:20%;transform:translateX(-50%);max-width:90%;width:380px;box-sizing:border-box;text-align:center;padding:14px 18px;background:#101d2be8;border:1px solid #e9c68b77;border-radius:12px;color:#f7eddc;z-index:35;pointer-events:none;opacity:0;transition:opacity .4s}
   #paris-arrival.visible{opacity:1}#paris-arrival strong{display:block;font-size:clamp(18px,4.6vw,25px);margin:5px 0}
   #paris-arrival small{font-size:11px;letter-spacing:2px;color:#ffb75d}
   #paris-arrival span{display:block;font-size:12px;line-height:1.45}
   #paris-dev{position:fixed;right:8px;bottom:10px;z-index:100;max-width:calc(100vw - 16px);color:#fff;background:#132332ef;border:1px solid #bca374;border-radius:10px;padding:7px;font:12px system-ui}
   #paris-dev summary{cursor:pointer;text-align:right}#paris-dev select{display:block;width:100%;max-width:280px;margin-top:8px;padding:7px;background:#f6ebd8;color:#152638;border:0;border-radius:6px}
   #level-display{max-width:47vw;font-size:clamp(10px,2.8vw,14px);line-height:1.25}
  `;document.head.appendChild(style);
  this.card=document.createElement('div');this.card.id='paris-arrival';
  this.card.innerHTML='<small></small><strong></strong><span></span>';
  game.ui.container.appendChild(this.card);
  const params=new URLSearchParams(location.search);
  if(import.meta.env.DEV || (import.meta.env.VITE_PARIS_PREVIEW==='1' && params.has('decors')))this.installSelector();
 }
 announce(){
  clearTimeout(this.timer);
  const g=this.game,c=districtForLevel(g.geographicLevel),previous=PARIS_DISTRICTS[c.id-2];
  this.card.querySelector('small').textContent=g.mode==='daily'?'DÉFI DU JOUR':'PARIS • '+c.id+' / 12';
  this.card.querySelector('strong').textContent=c.name;
  this.card.querySelector('span').textContent=c.id===1?'De Nation à l’Élysée, la marche commence.':previous.transition;
  this.card.classList.add('visible');
  this.timer=setTimeout(()=>this.card.classList.remove('visible'),c.id===12?4600:3000);
  if(this.select)this.select.value=String(c.id);
 }
 installSelector(){
  const box=document.createElement('details');box.id='paris-dev';
  const summary=document.createElement('summary');summary.textContent='Décors · 12 quartiers';
  const select=document.createElement('select');select.id='paris-level-select';select.setAttribute('aria-label','Choisir un quartier de Paris');
  for(const c of PARIS_DISTRICTS){const option=document.createElement('option');option.value=c.id;option.textContent=c.id+' — '+c.name;select.appendChild(option);}
  select.value=String(this.game.geographicLevel);
  select.addEventListener('change',()=>{this.playDistrict(Number(select.value));box.open=false;});
  box.append(summary,select);document.body.appendChild(box);this.select=select;
 }
 playDistrict(level){
  const g=this.game;g.parisDevSelection=true;g.mode='campaign';g.parisLevel=districtForLevel(level).id;
  g.level=g.parisLevel;g.campaignComplete=false;g.finalCaptured=false;
  g.ui.hideAllScreens();document.getElementById('pause-panel')?.classList.add('hidden');
  g.story.introSeen=true;g.startGame({newRun:true});
 }
}
