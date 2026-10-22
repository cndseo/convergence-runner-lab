import {
  utcChallengeDate, validChallengeDate, dailyChallengeSeed, computeDailyScore, formatChallengeShare
} from './dailyChallenge.mjs';
import {createResultCard,shareResultCard,downloadBlob} from './resultSharing.mjs';
import { verifiedStripeCheckoutUrl } from './stripeCheckoutUrl.mjs';

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
    this.premiumButton=make('button','btn btn-secondary','BOUTIQUE · COSMÉTIQUES ET CONSOMMABLES');
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
    const awning=make('div','shop-awning');awning.setAttribute('aria-hidden','true');
    card.append(awning);
    const heading=make('h2','challenge-title');
    const shopKicker=make('p','shop-kicker','Cosmétiques · Boosters · Costumes');
    const note=make('p','challenge-note');
    const body=make('div','challenge-body');
    const foot=make('div','challenge-foot');
    card.append(heading,shopKicker,note,body,foot);
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
  open(kind='daily',section='all'){
    if(kind==='premium'){this.shopSection=section;this.game.experience?.telemetry.track('store_open',{source:section});}
    this.panel.classList.remove('hidden');
    this.kind=kind;
    this.panel.classList.toggle('shop-mode',kind==='premium');
    this.foot.replaceChildren();
    this.body.replaceChildren();
    if(kind==='daily')this.renderDaily();
    else if(kind==='premium')this.renderPremium();
    else if(kind==='ranking')this.renderRanking();
    else if(kind==='result')this.renderResult();
    this.game.audio?.playClick?.();
  }
  openPremiumInGame(section='marseille'){
    const g=this.game;
    if(g.mode!=='campaign'||!['playing','fighting'].includes(g.state))return;
    this.resumeAfterPremium=g.state;
    g.state='paused';
    g.audio?.pauseAudio?.();
    this.open('premium',section);
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
    const duel=this.game.experience?.duel;
    if(duel?.day===this.date)this.body.prepend(make('p','challenge-record','Objectif de ton ami : '+duel.score+' survivants. Score partagé, non certifié.'));
    this.foot.append(
      this.action('▶ RELEVER LE DÉFI',()=>{this.panel.classList.add('hidden');this.game.startDailyChallenge(this.date);}),
      this.action('CLASSEMENT',()=>this.open('ranking'))
    );
  }
  renderResult(){
    const result=this.lastResult;
    if(!result)return this.renderDaily();
    this.heading.textContent=result.won?'DÉFI RÉUSSI':'DÉFI À RELEVER';
    this.note.textContent='Défi UTC '+result.day+' · '+(result.won?'Parcours vérifié localement':'Une autre combinaison permet de gagner');
    const duel=this.game.experience?.duel;
    if(duel?.day===result.day)this.note.textContent+=' · '+(result.survivors>duel.score?'Objectif partagé dépassé !':result.survivors===duel.score?'Égalité avec l’objectif partagé.':'Objectif partagé : '+duel.score);
    const cardResult={...result,mode:'daily'};
    this.resultCard=null;
    if(result.won)createResultCard(cardResult,location.origin+location.pathname).then(blob=>{if(this.lastResult===result)this.resultCard=blob;}).catch(()=>{});
    this.body.append(
      make('div','challenge-stat',result.won?result.survivors+' survivants':'Mobilisation arrêtée'),
      make('p','challenge-record',this.getBest(result.day)===null
        ?'Aucun record local':'Record local : '+this.getBest(result.day)+' survivants'),
      make('p','challenge-explain',this.connected?'Classement : synchronisation en cours…':'Classement mondial non connecté. Le score reste sur cet appareil.')
    );
    this.foot.append(
      this.action('DÉFIER MES AMIS',()=>this.shareResult(result)),
      this.action('ENREGISTRER LA CARTE',()=>{if(this.resultCard)downloadBlob(this.resultCard,'convergence-defi.png');else this.note.textContent='La carte est disponible après une victoire.';}),
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
    this.heading.textContent='🛍️ BOUTIQUE';
    this.note.textContent='Cosmétiques permanents ou consommables de campagne. Tous les niveaux restent gagnables gratuitement. Aucun avantage dans le défi du jour.';
    const tabs=make('nav','shop-categories');tabs.setAttribute('aria-label','Catégories de la boutique');
    for(const [id,label] of [['all','🛒 Tout'],['genz','🚀 Tirs GenZ'],['marseille','👥 Renforts'],['costumes','👕 Costumes']]){
      const button=this.action(label,()=>{this.shopSection=id;this.renderPremium();});
      button.setAttribute('aria-pressed',String((this.shopSection||'all')===id));tabs.append(button);
    }
    this.body.append(tabs);
    const category=item=>item.id.startsWith('genz')?'genz':item.id.startsWith('marseille')?'marseille':'costumes';
    // Merchandising changes display order only, not catalog identifiers or prices.
    const featured=['genz3','genz12','marseille1','marseille3','marseille10','spiderman','dinosaur'];
    const shown=PREMIUM_CATALOG.filter(item=>!this.shopSection||this.shopSection==='all'||category(item)===this.shopSection);
    shown.sort((a,b)=>featured.indexOf(a.id)-featured.indexOf(b.id));
    for(const item of shown){
      const row=make('div','challenge-product shop-product-'+category(item));
      row.dataset.product=item.id;
      const visual=make('div','shop-product-art',({genz3:'🚀🎇',genz12:'🎆🚀',marseille1:'👥',marseille3:'👥✨',marseille10:'👥👥',spiderman:'🕷️',dinosaur:'🦖'})[item.id]||'🎁');
      visual.setAttribute('aria-hidden','true');
      row.append(visual);
      const info=make('div','shop-product-info');
      info.append(make('strong','',item.label),make('span','',item.description),make('small','product-kind',category(item)==='costumes'?'COSMÉTIQUE PERMANENT':'CONSOMMABLE · S’ÉPUISE À L’UTILISATION'));
      if(item.art){
        const img=make('img','character-product-thumb');
        img.src=import.meta.env.BASE_URL+'assets/characters/'+item.art;
        img.alt='Vue de face du déguisement fourni par le joueur';
        info.prepend(img);
      }
      const owned=this.ownedSkus.has(item.id);
      const pay=this.action(item.comingSoon?'BIENTÔT':owned?'ACQUIS':(item.cents/100).toFixed(2).replace('.',',')+' €',
        ()=>this.checkout(item.id),item.comingSoon||owned||!this.paymentsEnabled||!this.buyableSkus?.has(item.id));
      pay.dataset.sku=item.id;
      pay.classList.add('shop-price-button');
      pay.setAttribute('aria-label','Acheter '+item.label+' avec Stripe');
      row.append(info,pay);this.body.append(row);
      if(item.id==='genz3' && (!this.paymentsEnabled || this.game.qa)){
        const preview=this.action('🎮 TESTER 3 TIRS GENZ (DÉMO)',()=>this.previewGenz());
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
    charges.classList.add('shop-available','shop-available-support');
    charges.textContent='🛡️ 👥 '+charges.textContent;
    this.body.append(charges);
    const genzStock=make('p','challenge-credit-count shop-available shop-available-genz',
      '🚀 Munitions GenZ disponibles : '+(this.game.genzFireworks?.available()||0));
    this.body.append(genzStock);
    const warning=make('p','challenge-warning',this.paymentsEnabled
      ?'Paiement sur Stripe Checkout. Uniquement après confirmation serveur.'
      :'Paiements désactivés. Le bouton TESTER permet de voir les personnages dans le prototype, sans achat.');
    warning.textContent='ℹ️ '+warning.textContent;
    this.body.append(warning);
    const back=this.action('← RETOUR',()=>{if(this.resumeAfterPremium)this.close();else this.open('daily');});
    back.classList.add('shop-back-button');
    this.foot.append(back);
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
      if(this.paymentsEnabled){
        const catalog=await fetch(this.apiBase+'/api/v1/shop/catalog');
        const info=await catalog.json();
        this.buyableSkus=new Set((info.items||[]).filter(item=>item.buyable).map(item=>item.sku));
      }else this.buyableSkus=new Set();
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
        body:JSON.stringify({day:result.day,path:result.path,name:localStorage.getItem('convergence_player_name')||''})
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
    this.note.textContent=await shareResultCard({...result,mode:'daily'},location.origin+location.pathname,this.resultCard,this.game.experience?.telemetry);
  }
  async checkout(sku){
    if(this.game.accountPortal && !this.game.accountPortal.isLinked && import.meta.env.VITE_CONVERGENCE_SUPABASE_URL){
      this.game.accountPortal.open();
      this.game.accountPortal.status('Connecte ton compte pour protéger et retrouver tes achats.');
      return;
    }
    const button=[...this.body.querySelectorAll('button[data-sku]')].find(el=>el.dataset.sku===sku);
    if(!this.paymentsEnabled || !this.apiBase){
      this.note.textContent='Paiement indisponible : connexion au serveur Stripe impossible.';
      return;
    }
    if(button?.disabled)return;
    this.game.experience?.telemetry.track('checkout_start',{source:sku});
    if(button){
      button.disabled=true;
      button.textContent='OUVERTURE…';
    }
    try{
      const token=await this.ensurePlayer();
      const response=await fetch(this.apiBase+'/api/v1/shop/checkout',{
        method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},
        body:JSON.stringify({sku})
      });
      const data=await response.json();
      const stripeUrl=verifiedStripeCheckoutUrl(data.url);
      if(!response.ok || !stripeUrl)throw Error(data.error||'checkout_unavailable');

      // A real link remains clickable even when an in-app iPhone browser
      // blocks an asynchronous cross-site redirect.
      const direct=make('a','btn btn-small challenge-pay-link','OUVRIR STRIPE');
      direct.href=stripeUrl;
      direct.rel='noreferrer';
      direct.setAttribute('aria-label','Ouvrir le paiement sécurisé Stripe');
      button?.replaceWith(direct);
      this.note.textContent='Paiement sécurisé Stripe. Si la page ne s’ouvre pas, touchez OUVRIR STRIPE.';
      this.game.experience?.telemetry.track('checkout_redirect',{source:sku});
      window.location.assign(stripeUrl);
    }catch(error){
      if(button){
        button.disabled=false;
        button.textContent=(PREMIUM_CATALOG.find(item=>item.id===sku)?.cents/100||0)
          .toFixed(2).replace('.',',')+' €';
      }
      this.note.textContent='Ouverture Stripe impossible. Réessayez dans quelques instants.';
      this.game.experience?.telemetry.track('checkout_failed',{source:sku});
      console.warn('CONVERGENCE checkout:',error?.message||error);
    }
  }
  returnToCampaignMenu(){
    const g=this.game;
    g.experience?.abandon('menu');
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
