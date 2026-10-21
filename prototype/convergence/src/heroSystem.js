import {HERO_COMMUNITIES,HERO_EQUIPMENT,profilesFor,heroById,communityById} from './heroCatalog.mjs';
import {HERO_RULES,HERO_SAVE_KEY,normalizeHeroSave,selectHero,equipHero,awardHeroRun,heroLevel,rosterSummary} from './heroRules.mjs';
import {HeroPortrait,portraitUrl} from './heroPortrait.js';
import {downloadBlob} from './resultSharing.mjs';
import {applyChoice} from './tactics.mjs';
import './heroes.css';

const powerNames={genz:'ÉLAN COLLECTIF',gilets:'TENIR ENSEMBLE',infirmieres:'AIR LIBRE',pompiers:'SOUFFLE PROTÉGÉ',lyceens:'REPÉRAGE'};
const powerNotes={genz:'Marche accélérée pendant 6 s.',gilets:'Ignore le ralentissement LBD pendant 6 s.',infirmieres:'Dissipe les nuages de gaz présents.',pompiers:'Ignore le ralentissement du gaz pendant 6 s.',lyceens:'Annonce la prochaine paire de TV.'};
const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;n.textContent=text;return n;};
export class HeroSystem {
 constructor(game){
  this.game=game;this.lab=import.meta.env.VITE_HERO_LAB==='1';this.save=normalizeHeroSave(null);this.storageOK=true;
  try{const raw=localStorage.getItem(HERO_SAVE_KEY);this.save=normalizeHeroSave(JSON.parse(raw||'null'));}
  catch{try{this.save=normalizeHeroSave(JSON.parse(localStorage.getItem(HERO_SAVE_KEY+'_backup')||'null'));}catch{} }
  this.button=el('button','menu-intro','MON HÉROS · VESTIAIRE');this.button.id='hero-wardrobe';this.button.type='button';
  this.refreshMenu();this.button.addEventListener('click',()=>this.open(false));document.querySelector('.menu-footnote').before(this.button);
  this.rewards=[];
  for(const screen of ['win-screen','lose-screen']){
   const reward=el('p','hero-reward','');reward.hidden=true;document.getElementById(screen).append(reward);this.rewards.push(reward);
   const b=el('button','result-download','MON HÉROS · VESTIAIRE');b.type='button';b.addEventListener('click',()=>this.open(false));document.getElementById(screen).append(b);
  }
  this.hud=el('div','hero-roster','');this.hud.id='hero-roster';this.hud.hidden=true;game.ui.container.append(this.hud);
  this.power=el('button','hero-power','');this.power.id='hero-power';this.power.hidden=true;this.power.type='button';
  this.power.addEventListener('pointerdown',e=>e.stopPropagation());this.power.addEventListener('click',()=>this.activate());game.ui.container.append(this.power);
 }
 get profile(){return heroById(this.save.heroId);}
 get active(){return !!this.profile&&this.game.mode==='campaign'&&this.game.geographicLevel>=2;}
 needsChoice(){return this.game.mode==='campaign'&&this.game.geographicLevel>=2&&!this.profile&&!this.game.parisDevSelection;}
 persist(next){
  try{localStorage.setItem(HERO_SAVE_KEY+'_backup',JSON.stringify(this.save));localStorage.setItem(HERO_SAVE_KEY,JSON.stringify(next));this.storageOK=true;}
  catch{this.storageOK=false;}
  this.save=next;this.refreshMenu();
 }
 refreshMenu(){if(this.button)this.button.textContent=this.profile?this.profile.name+' · NIVEAU '+heroLevel(this.save.xp)+' · VESTIAIRE':'MON HÉROS · VESTIAIRE';}
 start(){this.rewards.forEach(n=>{n.hidden=true;});this.run={id:crypto.randomUUID(),eligible:this.active,done:false};this.charges=HERO_RULES.chargesPerRun;this.remaining=0;this.effect=null;this.tick=1;}
 finish(won){
  if(!this.run||this.run.done)return;this.run.done=true;
  if(this.run.eligible){
   const oldLevel=heroLevel(this.save.xp),oldXP=this.save.xp;
   this.persist(awardHeroRun(this.save,{id:this.run.id,mode:this.game.mode,won,gates:this.game.gateHistory.length,practice:!!this.game.parisDevSelection}));
   const level=heroLevel(this.save.xp),gained=this.save.xp-oldXP;
   if(gained){const unlocked=HERO_EQUIPMENT.filter(item=>item.level>oldLevel&&item.level<=level).map(item=>item.name);
    this.rewards.forEach(n=>{n.hidden=false;n.textContent=this.profile.name+' · +'+gained+' XP · Niveau '+level+(unlocked.length?' · '+unlocked.join(', ')+' débloqué !':'');});
   }
  }
 }
 result(){if(this.needsChoice())document.getElementById('next-btn').textContent='CHOISIR MON HÉROS →';}
 update(dt){
  const playing=this.active&&['playing','fighting','bravm_charge'].includes(this.game.state);
  this.hud.hidden=!playing;this.power.hidden=!playing||!this.lab;
  if(!playing)return;
  this.remaining=Math.max(0,this.remaining-dt);if(!this.remaining)this.effect=null;
  this.tick+=dt;if(this.tick<.2)return;this.tick=0;
  const counts=rosterSummary(this.game.crowdManager.roster||[]);
  const text=this.profile.name+' · Niv. '+heroLevel(this.save.xp)+'  |  '+HERO_COMMUNITIES.filter(f=>counts[f.id]).map(f=>f.name+' '+counts[f.id]).join(' · ');
  if(this.hud.textContent!==text)this.hud.textContent=text;
  this.power.disabled=this.charges===0||this.game.state!=='playing';
  this.power.textContent=this.remaining?powerNames[this.profile.family]+' · '+Math.ceil(this.remaining)+' s':this.charges?powerNames[this.profile.family]+' · 1':powerNames[this.profile.family]+' · UTILISÉ';
 }
 get speedFactor(){return this.effect==='sprint'?1.2:1;}
 activate(){
  if(!this.lab||!this.active||this.game.state!=='playing'||!this.charges)return false;
  --this.charges;this.effect=HERO_RULES.powers[this.profile.family];this.remaining=HERO_RULES.duration;
  if(this.effect==='clear-gas')this.game.tearGasSystem.clear();
  if(this.effect==='scout'){
   const gate=this.game.levelGenerator.gates?.find(g=>!g.passed);
   const before={count:this.game.crowdManager.getPlayerCount(),shields:this.game.shields};
   const describe=choice=>{const r=applyChoice(before,choice);return r.count+' personnes, '+r.shields+' protections';};
   this.game.ui.showTacticalHint({title:'REPÉRAGE',detail:gate?'Gauche : '+describe(gate.leftGate)+' · Droite : '+describe(gate.rightGate):'Le front est proche : conserve tes protections.',tone:'positive'});
  }
  this.game.ui.showFloatingText(powerNames[this.profile.family],'#e8c789');return true;
 }
 async open(continueRun=false){
  if(this.dialog)return;
  if(!this.profile&&this.game.geographicLevel<2){this.game.ui.showFloatingText('Ton héros t’attend après la première victoire.','#e8c789');return;}
  this.previousFocus=document.activeElement;this.continueRun=continueRun;
  const dialog=el('section','hero-dialog','');dialog.id='hero-dialog';dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');dialog.setAttribute('aria-labelledby','hero-title');
  this.dialog=dialog;const inner=el('div','hero-panel','');dialog.append(inner);
  const header=el('div','hero-header',''),eyebrow=el('span','hero-eyebrow',this.profile?'TON PARCOURS, TON STYLE':'LE COLLECTIF COMMENCE AVEC TOI');
  const title=el('h2','','');title.id='hero-title';title.textContent=this.profile?'Mon héros':'Choisis ton héros';
  const close=el('button','hero-close','×');close.type='button';close.setAttribute('aria-label','Fermer');close.addEventListener('click',()=>this.close());header.append(eyebrow,close,title);inner.append(header);
  const families=el('div','hero-families','');families.setAttribute('aria-label','Communautés');inner.append(families);
  const stage=el('div','hero-stage','');inner.append(stage);
  this.status=el('p','hero-status','Chargement de l’illustration…');this.status.setAttribute('role','status');stage.append(this.status);
  const viewport=el('div','hero-viewport','');stage.append(viewport);
  const drag=el('span','hero-drag','ILLUSTRATION ORIGINALE');stage.append(drag);
  this.description=el('div','hero-description','');stage.append(this.description);
  this.cards=el('div','hero-profiles','');inner.append(this.cards);
  this.gear=el('div','hero-equipment','');inner.append(this.gear);
  this.note=el('p','hero-note','');inner.append(this.note);
  this.confirm=el('button','btn hero-confirm','');this.confirm.id='hero-confirm';this.confirm.type='button';inner.append(this.confirm);
  this.confirm.addEventListener('click',()=>{
   if(this.confirm.disabled)return;
   if(!this.profile)this.persist(selectHero(this.save,this.selected.id));
   else this.persist(equipHero(this.save,this.equipment));
   if(!this.storageOK){this.note.textContent='Stockage indisponible : ce choix restera uniquement dans cette session. Tu peux exporter une sauvegarde ci-dessous.';this.confirm.textContent='CONTINUER POUR CETTE SESSION';if(!this.sessionConfirmed){this.sessionConfirmed=true;return;}}
   const start=this.continueRun;this.continueRun=false;this.close();if(start){this.game.ui.hideAllScreens();this.game.startGame();}
  });
  const exportBtn=el('button','result-download','EXPORTER MA SAUVEGARDE');exportBtn.type='button';exportBtn.addEventListener('click',()=>downloadBlob(new Blob([JSON.stringify(this.save,null,2)],{type:'application/json'}),'convergence-heros.json'));inner.append(exportBtn);
  const restore=el('button','result-download','RESTAURER UNE SAUVEGARDE');restore.type='button';
  const input=document.createElement('input');input.type='file';input.accept='application/json,.json';input.hidden=true;inner.append(input,restore);
  restore.addEventListener('click',()=>input.click());input.addEventListener('change',async()=>{
   try{const f=input.files[0];if(!f||f.size>20000)throw Error('Fichier trop volumineux.');const raw=JSON.parse(await f.text());
    if(raw.version!==1||!heroById(raw.heroId))throw Error('Sauvegarde de héros non reconnue.');
    if(this.profile&&raw.heroId!==this.profile.id)throw Error('Cette sauvegarde appartient à un autre héros.');
    this.persist(normalizeHeroSave(raw));this.equipment=this.save.equipment;this.chooseFamily(this.profile.family);
   }catch(e){this.note.textContent=e.message;}finally{input.value='';}
  });
  const portrait=el('button','result-download','TÉLÉCHARGER LE PERSONNAGE PNG');portrait.type='button';portrait.addEventListener('click',async()=>{const blob=await this.viewer?.portrait();if(blob)downloadBlob(blob,'convergence-'+this.selected.id+'.png');});inner.append(portrait);
  this.game.ui.container.append(dialog);this.viewer=new HeroPortrait(viewport);
  this.equipment=this.save.equipment;
  for(const family of HERO_COMMUNITIES){
   const b=el('button','hero-family',family.name);b.type='button';b.dataset.family=family.id;b.style.setProperty('--family',family.color);
   b.disabled=!!this.profile&&this.profile.family!==family.id;b.addEventListener('click',()=>this.chooseFamily(family.id));families.append(b);
  }
  this.keyHandler=e=>{if(e.key==='Escape'){this.close();return;}if(e.key==='Tab'){
   const items=[...dialog.querySelectorAll('button:not([disabled])')],first=items[0],last=items.at(-1);
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }};dialog.addEventListener('keydown',this.keyHandler);
  this.chooseFamily(this.profile?.family||'genz');close.focus();
 }
 chooseFamily(family){
  this.dialog.querySelectorAll('.hero-family').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.family===family)));
  this.cards.replaceChildren();for(const p of profilesFor(family)){
   const b=el('button','hero-profile','');b.type='button';b.dataset.hero=p.id;b.disabled=!!this.profile&&this.profile.id!==p.id;const image=document.createElement('img');image.src=portraitUrl(p.id,true);image.alt='';image.loading='lazy';b.append(image,el('strong','',p.name),el('small','',p.role));b.addEventListener('click',()=>this.select(p));this.cards.append(b);
  }
  this.select(this.profile||profilesFor(family)[0]);
 }
 async select(p){
  this.selected=p;const family=communityById(p.family),level=heroLevel(this.save.xp);this.confirm.disabled=true;
  this.cards.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hero===p.id)));
  this.description.replaceChildren(el('strong','',p.name),el('span','',family.name+' · '+p.role));
  this.status.textContent='Chargement de la planche originale…';this.status.hidden=false;
  this.confirm.textContent=this.profile?'ENREGISTRER MON ÉQUIPEMENT':'CHOISIR '+p.name.toLocaleUpperCase('fr')+' ET CONTINUER';
  this.note.textContent=this.profile?'Niveau '+level+' · '+this.save.xp+' XP · '+(HERO_RULES.xpPerLevel-(this.save.xp%HERO_RULES.xpPerLevel))+' XP avant le prochain niveau.':'Niveau 2 : ton héros et 10 membres de sa communauté. Ce choix sera conservé.';
  this.note.textContent+=' Portrait original de la planche. Le héros reste en 3D pendant la partie. Barème XP provisoire. '+(this.lab?'Pouvoir d’essai : '+powerNotes[p.family]+' Une utilisation par parcours.':'Les capacités spéciales sont encore en préparation.');
  this.gear.replaceChildren();if(this.profile)for(const item of HERO_EQUIPMENT){
   const b=el('button','hero-item',item.name+(level<item.level?' · niv. '+item.level:''));b.type='button';b.disabled=level<item.level;b.setAttribute('aria-pressed',String(item.id===this.equipment));b.addEventListener('click',()=>{this.equipment=item.id;this.select(p);});this.gear.append(b);
  }
  try{if(await this.viewer.show(p,this.equipment)){this.status.hidden=true;this.confirm.disabled=false;}}
  catch(e){if(this.dialog&&this.selected===p){this.status.textContent='Le portrait n’a pas pu charger. Réessaie en touchant ce profil.';}console.warn('Hero model',p.id,e.message);}
 }
 close(){
  if(!this.dialog)return;this.viewer.dispose();this.viewer=null;this.dialog.remove();this.dialog=null;
  this.previousFocus?.focus();
  if(this.continueRun&&this.game.state!=='playing'){this.game.ui.hideAllScreens();this.game.ui.startScreen.classList.remove('hidden');}
 }
}
