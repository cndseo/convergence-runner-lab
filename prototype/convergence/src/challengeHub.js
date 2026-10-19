import {
  utcChallengeDate, validChallengeDate, dailyChallengeSeed, computeDailyScore, formatChallengeShare
} from './dailyChallenge.mjs';

export const PREMIUM_CATALOG = Object.freeze([
  {id:'colors',label:'Couleurs de la mobilisation',description:'Apparences et accessoires décoratifs',cents:199},
  {id:'scenes',label:'Ambiances spéciales',description:'Thèmes visuels du jeu, sans bonus de force',cents:399},
  {id:'supporter',label:'Soutien CONVERGENCE',description:'Badge et apparence de soutien, aucun avantage',cents:599}
]);

function make(tag,className,text='') {
  const el=document.createElement(tag);
  if(className)el.className=className;
  el.textContent=text;
  return el;
}

export class ChallengeHub {
  constructor(game){
    this.game=game;
    this.apiBase=String(import.meta.env.VITE_CONVERGENCE_API||'').replace(/\/$/,'');
    const sharedDay=new URLSearchParams(location.search).get('daily');
    const today=utcChallengeDate();
    const age=sharedDay&&validChallengeDate(sharedDay)
      ?(Date.parse(today+'T00:00:00Z')-Date.parse(sharedDay+'T00:00:00Z'))/86400000:null;
    this.date=age!==null&&age>=0&&age<=7?sharedDay:today;
    this.best=this.getBest(this.date);
    this.connected=false;
    this.paymentsEnabled=false;
    this.playerToken=localStorage.getItem('convergence_challenge_token')||'';
    this.ownedSkus=new Set();
    this.installButtons();
    this.installPanel();
    this.refreshRemoteStatus();
  }
  installButtons(){
    const menu=document.getElementById('start-screen');
    const play=document.getElementById('play-btn');
    this.dailyButton=make('button','btn btn-secondary','DÉFI DU JOUR · MÊME PARCOURS POUR TOUS');
    this.dailyButton.id='daily-btn';
    this.dailyButton.type='button';
    this.dailyButton.addEventListener('click',()=>this.open('daily'));
    play.insertAdjacentElement('afterend',this.dailyButton);
    this.premiumButton=make('button','btn btn-secondary','BOUTIQUE COSMÉTIQUE');
    this.premiumButton.id='premium-btn';
    this.premiumButton.type='button';
    document.getElementById('upgrade-btn').insertAdjacentElement('afterend',this.premiumButton);
    this.premiumButton.addEventListener('click',()=>this.open('premium'));
  }
  installPanel(){
    const panel=make('section','challenge-hub hidden');
    panel.id='challenge-hub';
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-modal','true');
    panel.setAttribute('aria-label','Défi du jour et boutique cosmétique');
    const card=make('div','challenge-card');
    const top=make('div','challenge-top');
    top.append(make('strong','','CONVERGENCE'),make('span','challenge-day',this.date));
    const close=make('button','challenge-close','✕');
    close.setAttribute('aria-label','Fermer');close.type='button';
    close.addEventListener('click',()=>this.close());
    top.append(close);
    card.append(top);
    const heading=make('h2','challenge-title');
    const note=make('p','challenge-note');
    const body=make('div','challenge-body');
    const foot=make('div','challenge-foot');
    card.append(heading,note,body,foot);
    panel.append(card);
    this.game.ui.container.appendChild(panel);
    this.panel=panel;this.heading=heading;this.note=note;
    this.body=body;this.foot=foot;
  }
  action(text,fn,disabled=false){
    const button=make('button','btn btn-small',text);
    button.type='button';
    button.disabled=disabled;
    button.addEventListener('click',fn);
    return button;
  }
  open(kind='daily'){
    this.panel.classList.remove('hidden');
    this.kind=kind;
    this.foot.replaceChildren();
    this.body.replaceChildren();
    if(kind==='daily')this.renderDaily();
    else if(kind==='premium')this.renderPremium();
    else if(kind==='ranking')this.renderRanking();
    else if(kind==='result')this.renderResult();
    this.game.audio?.playClick?.();
  }
  close(){
    this.panel.classList.add('hidden');
    if(['win','lose'].includes(this.game.state)&&this.game.mode==='daily')this.returnToCampaignMenu();
  }
  getBest(day){
    try{
      const value=JSON.parse(localStorage.getItem('convergence_daily_best')||'{}');
      const n=value?.[day]?.survivors;
      return Number.isSafeInteger(n)?n:null;
    }catch{return null;}
  }
  recordBest(day,score){
    try{
      const data=JSON.parse(localStorage.getItem('convergence_daily_best')||'{}');
      if(!data[day] || score>data[day].survivors){
        data[day]={survivors:score,recordedAt:new Date().toISOString()};
        localStorage.setItem('convergence_daily_best',JSON.stringify(data));
      }
    }catch{ /* Private-browsing storage is optional. */ }
    this.best=this.getBest(day);
  }
  renderDaily(){
    this.heading.textContent=this.date===utcChallengeDate()?'DÉFI DU JOUR':'DÉFI DU '+this.date;
    this.note.textContent='Les dix mêmes portiques pour tous · 5 manifestants au départ · force égale à 1. Aucun achat ne change le score.';
    const seed=make('p','challenge-seed','Date UTC : '+this.date+' · Parcours identique partout');
    const record=make('p','challenge-record',this.getBest(this.date)===null
      ?'Pas encore de record enregistré sur cet appareil'
      :'Ton record local : '+this.getBest(this.date)+' survivants');
    this.body.append(seed,record);
    this.foot.append(
      this.action('▶ RELEVER LE DÉFI',()=>{this.panel.classList.add('hidden');this.game.startDailyChallenge(this.date);}),
      this.action('CLASSEMENT',()=>this.open('ranking'))
    );
  }
  renderResult(){
    const result=this.lastResult;
    if(!result)return this.renderDaily();
    this.heading.textContent=result.won?'DÉFI RÉUSSI':'DÉFI À RELEVER';
    this.note.textContent='Défi UTC '+result.day+' · '+(result.won?'Parcours gagnant certifié':'Une autre combinaison permet de gagner');
    this.body.append(
      make('div','challenge-stat',result.won?result.survivors+' survivants':'Mobilisation arrêtée'),
      make('p','challenge-record',this.getBest(result.day)===null
        ?'Aucun record local':'Record local : '+this.getBest(result.day)+' survivants'),
      make('p','challenge-explain',this.connected?'Classement : synchronisation en cours…':'Classement mondial non connecté. Le score reste sur cet appareil.')
    );
    this.foot.append(
      this.action('PARTAGER LE RÉSULTAT',()=>this.shareResult(result)),
      this.action('REJOUER LE DÉFI',()=>{this.panel.classList.add('hidden');this.game.startDailyChallenge(result.day);}),
      this.action('RETOUR',()=>this.returnToCampaignMenu())
    );
  }
  renderRanking(){
    this.heading.textContent='CLASSEMENT QUOTIDIEN';
    this.note.textContent='Même seed, mêmes portiques. Le serveur recalcule les survivants à partir des dix décisions.';
    const content=make('div','challenge-ranking','Connexion au classement…');
    this.body.append(content);
    this.foot.append(this.action('← DÉFI DU JOUR',()=>this.open('daily')));
    if(!this.apiBase){
      content.textContent='Classement en ligne non configuré. Aucun classement fictif n’est affiché.';
      return;
    }
    fetch(this.apiBase+'/api/v1/daily/leaderboard?day='+encodeURIComponent(this.date))
      .then(async r=>{if(!r.ok)throw Error('Indisponible');return r.json();})
      .then(data=>{
        content.replaceChildren();
        if(!Array.isArray(data.leaders)||!data.leaders.length){
          content.textContent='Aucun résultat validé pour ce jour.';
          return;
        }
        for(const [i,leader] of data.leaders.entries()){
          content.append(make('p','challenge-rank',`${i+1}. ${leader.name} · ${leader.survivors} survivants`));
        }
      }).catch(()=>{content.textContent='Classement temporairement indisponible.';});
  }
  renderPremium(){
    this.body.replaceChildren();this.foot.replaceChildren();
    this.heading.textContent='BOUTIQUE COSMÉTIQUE';
    this.note.textContent='Aucun renfort payant. Les articles changent uniquement l’apparence, jamais les chances de gagner.';
    for(const item of PREMIUM_CATALOG){
      const row=make('div','challenge-product');
      const info=make('div','');
      info.append(make('strong','',item.label),make('span','',item.description));
      const owned=this.ownedSkus.has(item.id);
      const pay=this.action(owned?'ACQUIS':(item.cents/100).toFixed(2).replace('.',',')+' €',
        ()=>this.checkout(item.id),owned||!this.paymentsEnabled);
      row.append(info,pay);this.body.append(row);
    }
    const warning=make('p','challenge-warning',this.paymentsEnabled
      ?'Paiement sur Stripe Checkout. Les articles ne sont attribués qu’après confirmation du serveur.'
      :'Paiements désactivés : préparation en mode test, aucune carte ne sera débitée.');
    this.body.append(warning);
    this.foot.append(this.action('PERSONNALISER MA FOULE',()=>{
      this.panel.classList.add('hidden');
      this.game.ui.hideAllScreens();
      this.game.ui.showShop();
    }));
    this.foot.append(this.action('← RETOUR',()=>this.open('daily')));
  }
  async refreshRemoteStatus(){
    if(!this.apiBase)return;
    try{
      const r=await fetch(this.apiBase+'/api/v1/health');
      if(!r.ok)throw Error('Offline');
      const data=await r.json();
      this.connected=!!data.leaderboard;
      this.paymentsEnabled=data.payments==='test';
      if(this.playerToken)await this.syncInventory();
      if(this.kind==='premium')this.renderPremium();
    }catch{this.connected=false;this.paymentsEnabled=false;}
  }
  async syncInventory(){
    if(!this.playerToken || !this.apiBase)return;
    try{
      const response=await fetch(this.apiBase+'/api/v1/shop/inventory',{
        headers:{'Authorization':'Bearer '+this.playerToken}
      });
      if(!response.ok)return;
      const {owned}=await response.json();
      this.ownedSkus=new Set(Array.isArray(owned)?owned:[]);
      this.applyPremiumAppearance();
    }catch{/* Keep existing unlocked appearances when offline. */}
  }
  applyPremiumAppearance(){
    const unlock=(arr,ids)=>{for(const item of arr)if(ids.includes(item.id))item.owned=true;};
    if(this.ownedSkus.has('colors'))unlock(this.game.skins,['green','orange','purple','pink']);
    if(this.ownedSkus.has('scenes'))unlock(this.game.themes,['sunset','night','candy','ocean']);
    if(this.ownedSkus.has('supporter')){
      unlock(this.game.skins,['rainbow']);
      if(!document.getElementById('convergence-supporter-badge')){
        const badge=make('span','supporter-badge','SOUTIEN');
        badge.id='convergence-supporter-badge';
        document.querySelector('#brandHud')?.append(badge);
      }
    }
    if(this.ownedSkus.size&&this.game.mode==='campaign')this.game.saveProgress();
  }
  async ensurePlayer(){
    if(this.playerToken)return this.playerToken;
    if(!this.apiBase)throw Error('Serveur non configuré');
    const r=await fetch(this.apiBase+'/api/v1/players',{method:'POST'});
    if(!r.ok)throw Error('Création du profil impossible');
    const data=await r.json();
    this.playerToken=data.token;
    localStorage.setItem('convergence_challenge_token',data.token);
    await this.syncInventory();
    return data.token;
  }
  async submitResult(result){
    if(!this.connected || !result.won || !this.apiBase)return;
    try{
      const token=await this.ensurePlayer();
      const r=await fetch(this.apiBase+'/api/v1/daily/scores',{
        method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
        body:JSON.stringify({day:result.day,path:result.path})
      });
      if(!r.ok)throw Error('Classement indisponible');
      const data=await r.json();
      if(this.kind==='result'){
        const message=this.body.querySelector('.challenge-explain');
        if(message)message.textContent='Résultat certifié par le serveur : '+data.survivors+' survivants.';
      }
    }catch{
      if(this.kind==='result'){
        const message=this.body.querySelector('.challenge-explain');
        if(message)message.textContent='Score local conservé. Publication en ligne indisponible.';
      }
    }
  }
  complete(won){
    const g=this.game,day=g.dailyDate, path=g.gateHistory.map(h=>h.side);
    let result;
    try{
      result=computeDailyScore(day,path);
      if(won!==result.won)throw Error('Tactical desynchronization');
    }catch{
      result={day,won:false,survivors:0,path:[]};
    }
    this.lastResult=result;
    if(result.won)this.recordBest(day,result.survivors);
    this.open('result');
    this.submitResult(result);
  }
  async shareResult(result){
    const text=formatChallengeShare(result.day,result.survivors,location.origin+location.pathname);
    if(navigator.share){
      try{await navigator.share({title:'CONVERGENCE · Défi du jour',text,url:location.origin+location.pathname+'?daily='+result.day});return;}
      catch(e){if(e.name==='AbortError')return;}
    }
    try{await navigator.clipboard.writeText(text);this.note.textContent='Résultat copié : colle-le sur WhatsApp ou Facebook.';}
    catch{this.note.textContent=text;}
  }
  async checkout(sku){
    if(!this.paymentsEnabled || !this.apiBase)return;
    try{
      const token=await this.ensurePlayer();
      const response=await fetch(this.apiBase+'/api/v1/shop/checkout',{
        method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
        body:JSON.stringify({sku})
      });
      const json=await response.json();
      if(!response.ok || !/^https:\/\/checkout\.stripe\.com\//.test(json.url||''))throw Error('Checkout indisponible');
      location.assign(json.url);
    }catch{this.note.textContent='Paiement test indisponible actuellement.';}
  }
  returnToCampaignMenu(){
    const g=this.game;
    g.mode='campaign';g.dailyDate=null;g.levelSeed=null;
    g.clearLevel();g.state='menu';
    g.level=g.campaignLevelBackup??g.level;
    g.campaignLevelBackup=null;
    g.ui.hideAllScreens();
    g.ui.transitionIn(g.ui.startScreen);
    this.panel.classList.add('hidden');
    g.ui.updateHUDInfo();
  }
}
