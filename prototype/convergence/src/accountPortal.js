const api=String(import.meta.env.VITE_CONVERGENCE_API||'').replace(/\/$/,'');
export const configured=Boolean(api);
export const accessToken=()=>localStorage.getItem('convergence_challenge_token')||'';
export const extractTicket=()=>{
  const ticket=new URLSearchParams(location.hash.replace(/^#/, '')).get('auth_ticket');
  if(ticket)history.replaceState(null,'',location.pathname+location.search);
  return /^[\w-]{43}$/.test(ticket||'')?ticket:null;
};
export const request=async(path,options={})=>{
  if(!api)throw Error('API non configurée');
  const response=await fetch(api+path,{cache:'no-store',...options});
  const data=await response.json();
  if(!response.ok)throw Object.assign(Error(data.error||'api_unavailable'),{status:response.status,details:data});
  return data;
};
export async function redeemTicket(ticket,guestToken=accessToken(),storageKey='convergence_challenge_token'){
  const link=await request('/api/v1/account/link',{
    method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+ticket},
    body:JSON.stringify({guestToken})
  });
  localStorage.setItem(storageKey,link.token);
  return link;
}
const readSave=()=>{try{return JSON.parse(localStorage.getItem('convergence_vertical_v1')||'null');}catch{return null;}};
const message=e=>String(e?.message||e||'Une erreur est survenue.').slice(0,160);
function applySave(game,save){
  localStorage.setItem('convergence_vertical_v1',JSON.stringify(save));
  game.loadProgress();
  if(save.heroSave&&game.heroes){
    game.heroes.save=save.heroSave;
    localStorage.setItem('convergence_hero_v1',JSON.stringify(save.heroSave));
    game.heroes.refreshMenu();
  }
  if(save.badges&&game.experience){
    game.experience.badges=save.badges;
    localStorage.setItem('convergence_quartiers_v1',JSON.stringify(save.badges));
  }
  game.ui?.updateMenu?.();
}
export class AccountPortal{
  constructor(game){
    this.game=game;this.isLinked=false;this.revision=0;this.syncing=false;this.saveTimer=null;
    this.sessionId=crypto.randomUUID();this.source=this.getSource();this.heartbeat=null;
    this.installUI();
    const save=game.saveProgress.bind(game);
    game.saveProgress=(...args)=>{const result=save(...args);this.queueSave();return result;};
    if(game.heroes?.persist){
      const persistHero=game.heroes.persist.bind(game.heroes);
      game.heroes.persist=(...args)=>{const result=persistHero(...args);this.queueSave();return result;};
    }
    this.init().catch(e=>this.status('Connexion indisponible : '+message(e)));
    this.maybeHeartbeat();
  }
  getSource(){
    const s=(new URLSearchParams(location.search).get('utm_source')||'').toLowerCase();
    if(['facebook','fb'].includes(s))return 'facebook';
    if(s==='tiktok')return 'tiktok';
    if(['x','twitter'].includes(s))return 'x';
    return s?'other':'direct';
  }
  installUI(){
    const b=document.createElement('button');b.type='button';b.id='account-btn';
    b.className='btn btn-secondary';b.textContent='MON COMPTE · SAUVEGARDER MA PARTIE';b.hidden=!configured;
    b.onclick=()=>this.open();
    document.querySelector('.menu-actions')?.append(b);
    const panel=document.createElement('section');panel.className='account-portal hidden';panel.id='account-portal';
    panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Compte CONVERGENCE');
    panel.innerHTML='<div class="account-sheet"><button type="button" class="account-close" aria-label="Fermer">✕</button><h2>MON COMPTE CONVERGENCE</h2><p>Sauvegarde tes niveaux et retrouve tes achats sur tous tes appareils.</p><label class="account-consent">Pseudonyme dans le classement <input id="player-alias" maxlength="18" placeholder="Ton pseudo"></label><div id="account-methods"></div><p id="account-status" role="status"></p></div>';
    this.game.ui.container.append(panel);this.panel=panel;
    panel.querySelector('.account-close').onclick=()=>this.close();
    const alias=panel.querySelector('#player-alias');
    alias.value=localStorage.getItem('convergence_player_name')||'';
    alias.onchange=()=>{
      const name=alias.value.trim();
      if(!/^[\p{L}\p{N} _-]{2,18}$/u.test(name))return this.status('Le pseudo doit contenir 2 à 18 caractères.');
      localStorage.setItem('convergence_player_name',name);this.status('Pseudonyme enregistré.');
    };
    const methods=panel.querySelector('#account-methods');
    if(!configured){methods.textContent='Connexion cloud non configurée. La partie reste enregistrée sur cet appareil.';return;}
    const make=(label,fn)=>{
      const button=document.createElement('button');button.type='button';button.className='btn btn-secondary';
      button.textContent=label;button.onclick=fn;methods.append(button);return button;
    };
    this.google=make('CONTINUER AVEC GOOGLE',()=>this.googleLogin());this.google.hidden=true;
    const email=document.createElement('input');email.type='email';email.id='account-email';email.placeholder='Adresse e-mail';email.autocomplete='email';email.maxLength=254;methods.append(email);
    this.emailButton=make('RECEVOIR UN LIEN DE CONNEXION',async()=>{
      if(!email.checkValidity()||!email.value.trim())return this.status('Entre une adresse e-mail valide.');
      this.emailButton.disabled=true;
      try{
        const result=await request('/api/v1/auth/email/start',{method:'POST',headers:{'Content-Type':'application/json'},
          body:JSON.stringify({email:email.value.trim(),destination:'game'})});
        this.status(result.message||'Consulte ta messagerie pour ouvrir le lien de connexion.');
      }catch(e){this.status('Envoi impossible : '+message(e));}
      finally{this.emailButton.disabled=false;}
    });this.emailButton.hidden=false;email.hidden=false;this.emailField=email;
    this.signout=make('SE DÉCONNECTER',()=>this.signOut());this.signout.hidden=true;
  }
  status(value){const el=this.panel?.querySelector('#account-status');if(el)el.textContent=value;}
  open(){this.panel.classList.remove('hidden');}
  close(){this.panel.classList.add('hidden');}
  googleLogin(){
    this.status('Ouverture de Google…');
    location.assign(api+'/api/v1/auth/google/start?destination=game');
  }
  async init(){
    if(!configured)return;
    const [providers,ticket]=await Promise.all([request('/api/v1/auth/status'),Promise.resolve(extractTicket())]);
    this.google.hidden=!providers.google;
    this.emailButton.disabled=!providers.email;
    this.emailButton.title=providers.email?'':'La connexion par e-mail doit être activée sur le serveur';
    this.emailField.hidden=false;
    if(!providers.email)this.status('Connexion par e-mail momentanément indisponible. Google est opérationnel.');
    if(ticket){
      this.syncing=true;
      try{
        const link=await redeemTicket(ticket,this.game.challengeHub.playerToken);
        this.game.challengeHub.playerToken=link.token;
        this.isLinked=true;this.syncing=false;
        await this.restore();await this.game.challengeHub.refreshRemoteStatus();
        this.status('Compte synchronisé. Partie et achats récupérables.');
      }catch(e){this.status('Lien expiré ou déjà utilisé : '+message(e));}
      finally{this.syncing=false;}
    }else if(this.game.challengeHub.playerToken){
      try{
        const me=await request('/api/v1/account/me',{headers:{Authorization:'Bearer '+this.game.challengeHub.playerToken}});
        this.isLinked=me.linked;
        if(this.isLinked)await this.restore();
      }catch(e){this.isLinked=false;}
    }
    this.signout.hidden=!this.isLinked;
    if(this.isLinked){const btn=document.getElementById('account-btn');if(btn)btn.textContent='MON COMPTE · SAUVEGARDE ACTIVE';}
  }
  async signOut(){
    if(!this.isLinked)return;
    try{
      const saved=this.snapshot();if(saved)await this.upload(saved);
      await request('/api/v1/account/logout',{method:'POST',
        headers:{Authorization:'Bearer '+this.game.challengeHub.playerToken}});
    }catch(e){this.status('Déconnexion impossible : '+message(e));return;}
    for(const k of ['convergence_challenge_token','convergence_vertical_v1','convergence_daily_best','convergence_quartiers_v1'])
      localStorage.removeItem(k);
    this.game.challengeHub.playerToken='';this.isLinked=false;location.reload();
  }
  async restore(){
    const token=this.game.challengeHub.playerToken;
    const remote=await request('/api/v1/account/progress',{headers:{Authorization:'Bearer '+token}});
    this.revision=remote.revision;
    const local=this.snapshot();
    if(remote.progress){
      if(!local||remote.progress.level>=local.level){
        if(this.game.state==='menu')applySave(this.game,remote.progress);
      }else await this.upload(local);
    }else if(local)await this.upload(local);
  }
  snapshot(){
    const local=readSave();
    if(!local)return null;
    return {...local,heroSave:this.game.heroes?.save,badges:this.game.experience?.badges};
  }
  queueSave(){
    if(!this.isLinked||this.syncing)return;
    clearTimeout(this.saveTimer);
    this.saveTimer=setTimeout(()=>{
      const local=this.snapshot();if(local)this.upload(local).catch(e=>this.status('Sauvegarde à réessayer : '+message(e)));
    },450);
  }
  async upload(progress){
    if(!this.isLinked)return;
    const token=this.game.challengeHub.playerToken;
    const write=()=>request('/api/v1/account/progress',{method:'POST',headers:{
      Authorization:'Bearer '+token,'Content-Type':'application/json'},
      body:JSON.stringify({progress,revision:this.revision})});
    try{this.revision=(await write()).revision;}
    catch(e){
      if(e.status!==409)throw e;
      const remote=e.details;
      if(remote?.progress&&remote.progress.level>=progress.level){
        this.revision=remote.revision;if(this.game.state==='menu')applySave(this.game,remote.progress);return;
      }
      this.revision=remote.revision;
      this.revision=(await write()).revision;
    }
  }
  maybeHeartbeat(){
    clearInterval(this.heartbeat);this.heartbeat=null;
    if(!api)return;
    // A fresh tab-scoped random ID, never stored in cookies or localStorage.
    // The backend keeps live IDs in RAM for 90 seconds and persists only aggregated counts.
    const beat=()=>{
      if(document.hidden)return;
      const playing=['playing','fighting','bravm_charge'].includes(this.game.state);
      fetch(api+'/api/v1/presence/live',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({sessionId:this.sessionId,source:this.source,playing})}).catch(()=>{});
    };
    beat();
    this.heartbeat=setInterval(beat,25000);
    document.addEventListener('visibilitychange',beat);
  }
}
