import {
  utcChallengeDate, validChallengeDate, dailyChallengeSeed, computeDailyScore, formatChallengeShare
} from './dailyChallenge.mjs';

export const PREMIUM_CATALOG = Object.freeze([
  {id:'spiderman',label:'Spider-Man manifestant',description:'Personnage déguisé, avec les deux vues fournies',cents:199,art:'spiderman-front.webp'},
  {id:'dinosaur',label:'Dinosaure gonflable',description:'Personnage déguisé en dinosaure',cents:199,art:'dinosaur-front.webp'},
  {id:'marseille1',label:'Renfort marseillais · 1 intervention',description:'Une intervention spéciale en mode campagne',cents:299,art:'marseille-front.webp'},
  {id:'marseille3',label:'Renfort marseillais · 3 interventions',description:'Trois interventions spéciales en mode campagne',cents:897},
  {id:'genz3',label:'GenZ - 6 tirs pyrotechniques',description:'6 munitions virtuelles, déclenchement manuel en campagne',cents:99},
  {id:'genz12',label:'GenZ - 24 tirs pyrotechniques',description:'24 munitions virtuelles, déclenchement manuel en campagne',cents:299},
  {id:'marseille10',label:'Renfort marseillais · 10 interventions',description:'Dix interventions spéciales en mode campagne',cents:2990}
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
    this.premiumButton=make('button','btn btn-secondary','PERSONNAGES ET RENFORTS');
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
  openPremiumInGame(){
    const g=this.game;
    if(g.mode!=='campaign'||!['playing','fighting'].includes(g.state))return;
    this.resumeAfterPremium=g.state;
    g.state='paused';
    g.audio?.pauseAudio?.();
    this.open('premium');
  }
  close(){
    this.panel.classList.add('hidden');
    if(this.resumeAfterPremium){
      if(this.game.state==='paused'){
        this.game.state=this.resumeAfterPremium;
        this.game.audio?.resumeAudio?.();
      }
      this.resumeAfterPremium=null;
      this.game.genzFireworks?.showButton();
      this.game.marseille?.showButton();
    }
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
    this.heading.textContent='PERSONNAGES ET RENFORTS';
    this.note.textContent='Personnages à 1,99 € · Renfort marseillais à 2,99 € par intervention. Réservé à la campagne, sans avantage dans le défi quotidien.';
    for(const item of PREMIUM_CATALOG){
      const row=make('div','challenge-product');
      const info=make('div','');
      info.append(make('strong','',item.label),make('span','',item.description));
      if(item.art){
        const img=make('img','character-product-thumb');
        img.src=import.meta.env.BASE_URL+'assets/characters/'+item.art;
        img.alt='Vue de face du déguisement fourni par le joueur';
        info.prepend(img);
      }
      const owned=this.ownedSkus.has(item.id);
      const pay=this.action(item.comingSoon?'BIENTÔT':owned?'ACQUIS':(item.cents/100).toFixed(2).replace('.',',')+' €',
        ()=>this.checkout(item.id),item.comingSoon||owned||!this.paymentsEnabled);
      row.append(info,pay);this.body.append(row);
      if(item.id==='genz3' && (!this.paymentsEnabled || this.game.qa)){
        const preview=this.action('TESTER 3 TIRS GENZ (DÉMO)',()=>this.previewGenz());
        preview.classList.add('character-preview-action');this.body.append(preview);
      }
      if(item.id==='marseille1' && (!this.paymentsEnabled || this.game.qa)){
        const preview=this.action('TESTER UNE SUPER ATTAQUE (DÉMO)',()=>this.previewMarseille());
        preview.classList.add('character-preview-action');
        this.body.append(preview);
      }
      if((item.id==='spiderman' || item.id==='dinosaur') && (owned || !this.paymentsEnabled || this.game.qa)){
        const label=item.id==='spiderman'?'SPIDER-MAN':'DINOSAURE';
        const preview=this.action(owned?'ÉQUIPER '+label:'TESTER '+label+' (DÉMO)',()=>this.previewCharacter(item.id,owned));
        preview.classList.add('character-preview-action');
        this.body.append(preview);
      }
    }
    const charges=make('p','challenge-credit-count',
      'Interventions marseillaises disponibles : '+(this.game.marseille?.available()||0));
    this.body.append(charges);
    this.body.append(make('p','challenge-credit-count',
      'Munitions GenZ disponibles : '+(this.game.genzFireworks?.available()||0)));
    const warning=make('p','challenge-warning',this.paymentsEnabled
      ?'Paiement sur Stripe Checkout. Uniquement après confirmation serveur.'
      :'Paiements désactivés. Le bouton TESTER permet de voir les personnages dans le prototype, sans achat.');
    this.body.append(warning);
    this.foot.append(this.action('PERSONNALISER MA FOULE',()=>{
      this.panel.classList.add('hidden');
      this.game.ui.hideAllScreens();
      this.game.ui.showShop();
    }));
    this.foot.append(this.action('← RETOUR',()=>{if(this.resumeAfterPremium)this.close();else this.open('daily');}));
  }
  previewCharacter(id,owned=false){
    if(!['spiderman','dinosaur'].includes(id))return;
    if(this.paymentsEnabled && !owned && !this.game.qa)return;
    const game=this.game;
    game.activeCostume=id;
    // An explicitly selected new preview starts its own single-run allowance.
    game.demoCostumeConsumed=false;
    game.demoCostumeOnce=!owned;
    game.mode='campaign';
    game.ui.hideAllScreens();
    this.panel.classList.add('hidden');
    game.startGame();
  }
  previewGenz(){
    if(this.paymentsEnabled && !this.game.qa)return;
    const g=this.game;
    g.genzFireworks.demoCharges=3;
    g.mode='campaign';this.panel.classList.add('hidden');g.ui.hideAllScreens();
    g.startGame();
    // Preview only: spawn a recruited GenZ on the demonstration run.
    const runner=g.crowdManager.playerStickmen[1];
    if(runner){runner.userData.bonusFaction='genz';g.genzFireworks.addGenz(1);}
    g.ui.showFloatingText?.('DÉMO GENZ : 3 TIRS','#26f9f0');
  }
  async consumeGenzAmmo(){
    if(this.game.mode!=='campaign')return false;
    const ammo=this.game.genzFireworks;
    if(ammo.demoCharges>0){ammo.demoCharges--;ammo.showButton();return true;}
    if(!this.apiBase||ammo.charges<=0)return false;
    const token=await this.ensurePlayer();
    const response=await fetch(this.apiBase+'/api/v1/genz/consume',{
      method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body:JSON.stringify({requestId:crypto.randomUUID()})
    });
    if(!response.ok)return false;
    const data=await response.json();ammo.syncPurchasedCharges(data.remaining);
    return true;
  }
  previewMarseille(){
    const game=this.game;
    if(this.paymentsEnabled && !game.qa)return;
    if(game.marseille?.available()===0)game.marseille.demoCharges=1;
    game.mode='campaign';
    this.panel.classList.add('hidden');
    game.ui.hideAllScreens();
    game.startGame();
  }
  async consumeMarseilleCharge(){
    if(this.game.mode!=='campaign')return false;
    if(this.game.marseille.consumeLevelOneGift())return true;
    if(this.game.marseille.demoCharges>0){
      this.game.marseille.demoCharges--;
      return true;
    }
    if(!this.apiBase || this.game.marseille.charges<=0)return false;
    const token=await this.ensurePlayer();
    const requestId=crypto.randomUUID();
    const response=await fetch(this.apiBase+'/api/v1/support/consume',{
      method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
      body:JSON.stringify({requestId})
    });
    if(!response.ok)return false;
    const data=await response.json();
    this.game.marseille.syncPurchasedCharges(data.remaining);
    return true;
  }
  async refreshRemoteStatus(){
    if(!this.apiBase)return;
    try{
      const r=await fetch(this.apiBase+'/api/v1/health');
      if(!r.ok)throw Error('Offline');
      const data=await r.json();
      this.connected=!!data.leaderboard;
      this.paymentsEnabled=data.payments==='test'||data.payments==='live';
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
      const {owned,marseilleCharges,genzAmmo}=await response.json();
      this.ownedSkus=new Set(Array.isArray(owned)?owned:[]);
      if(this.game.marseille && Number.isSafeInteger(marseilleCharges))this.game.marseille.syncPurchasedCharges(marseilleCharges);
      this.game.genzFireworks?.syncPurchasedCharges(genzAmmo);
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
