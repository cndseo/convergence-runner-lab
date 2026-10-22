import { createClient } from '@supabase/supabase-js';

const api=String(import.meta.env.VITE_CONVERGENCE_API||'').replace(/\/$/,'');
const url=String(import.meta.env.VITE_CONVERGENCE_SUPABASE_URL||'');
const key=String(import.meta.env.VITE_CONVERGENCE_SUPABASE_PUBLISHABLE_KEY||'');
export const configured=!!(api&&/^https:\/\/[a-z0-9]{20}\.supabase\.co\/?$/.test(url)&&key);
export const supabase=configured?createClient(url,key,{
  auth:{flowType:'pkce',autoRefreshToken:true,persistSession:true,detectSessionInUrl:true}
}):null;
const getLocal=()=>{try{return JSON.parse(localStorage.getItem('convergence_vertical_v1')||'null');}catch{return null;}};
const showError=e=>String(e?.message||e||'Une erreur est survenue.').slice(0,160);
const send=async(path,options={})=>{
  const r=await fetch(api+path,options);
  const j=await r.json();
  if(!r.ok)throw Object.assign(Error(j.error||'api_error'),{status:r.status,details:j});
  return j;
};
function applyProgress(game,s){
  localStorage.setItem('convergence_vertical_v1',JSON.stringify(s));
  game.loadProgress();
  game.ui?.updateMenu?.();
}
export class AccountPortal {
  constructor(game){
    this.game=game;this.isLinked=false;this.revision=0;this.syncing=false;this.saveTimer=null;
    this.sessionId=crypto.randomUUID();this.source=this.getSource();this.heartbeat=null;
    this.installUI();
    const original=game.saveProgress.bind(game);
    game.saveProgress=(...a)=>{const result=original(...a);this.queueSave();return result;};
    if(supabase){
      supabase.auth.onAuthStateChange((event,session)=>{
        if(event==='SIGNED_IN'||event==='INITIAL_SESSION'||(event==='TOKEN_REFRESHED'&&!this.isLinked)){
          if(session)queueMicrotask(()=>this.connect(session));
        }
        if(event==='SIGNED_OUT'){this.isLinked=false;this.status('Déconnecté. La sauvegarde locale reste disponible.');}
      });
    }
    this.maybeHeartbeat();
    this.askAudienceConsent();
  }
  getSource(){
    const q=new URLSearchParams(location.search);
    const s=(q.get('utm_source')||'').toLowerCase();
    if(s==='facebook'||s==='fb')return 'facebook';
    if(s==='tiktok')return 'tiktok';
    if(s==='x'||s==='twitter')return 'x';
    return s?'other':'direct';
  }
  installUI(){
    const b=document.createElement('button');b.type='button';b.id='account-btn';
    b.className='btn btn-secondary';b.textContent='MON COMPTE · SAUVEGARDER MA PARTIE';
    b.hidden=!configured;
    b.onclick=()=>this.open();
    document.querySelector('.menu-actions')?.append(b);
    const panel=document.createElement('section');panel.className='account-portal hidden';panel.id='account-portal';
    panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Compte CONVERGENCE');
    panel.innerHTML='<div class="account-sheet"><button type="button" class="account-close" aria-label="Fermer">✕</button><h2>MON COMPTE CONVERGENCE</h2><p>Sauvegarde tes niveaux et retrouve tes achats sur tous tes appareils.</p><label class="account-consent">Pseudonyme dans le classement <input id="player-alias" maxlength="18" placeholder="Ton pseudo"></label><div id="account-methods"></div><p id="account-status" role="status"></p><label class="account-consent"><input type="checkbox" id="audience-opt"> Participer aux statistiques de fréquentation anonymisées (facultatif)</label></div>';
    this.game.ui.container.append(panel);this.panel=panel;
    panel.querySelector('.account-close').onclick=()=>this.close();
    panel.querySelector('#audience-opt').checked=localStorage.getItem('convergence_audience_consent')==='yes';
    panel.querySelector('#audience-opt').onchange=e=>{localStorage.setItem('convergence_audience_consent',e.target.checked?'yes':'no');this.maybeHeartbeat();};
    const alias=panel.querySelector('#player-alias');
    alias.value=localStorage.getItem('convergence_player_name')||'';
    alias.onchange=()=>{
      const name=alias.value.trim();
      if(!/^[\p{L}\p{N} _-]{2,18}$/u.test(name))return this.status('Le pseudo doit contenir 2 à 18 caractères, lettres ou chiffres.');
      localStorage.setItem('convergence_player_name',name);this.status('Pseudonyme enregistré.');
    };
    const methods=panel.querySelector('#account-methods');
    if(!configured){methods.textContent='Connexion cloud non configurée. La partie reste enregistrée sur cet appareil.';return;}
    const make=(label,fn)=>{const b=document.createElement('button');b.type='button';b.className='btn btn-secondary';b.textContent=label;b.onclick=fn;methods.append(b);return b;};
    make('CONTINUER AVEC GOOGLE',()=>this.oauth('google'));
    make('CONTINUER AVEC APPLE',()=>this.oauth('apple'));
    const input=document.createElement('input');input.type='email';input.id='account-email';input.placeholder='Adresse e-mail';input.autocomplete='email';input.maxLength=254;
    methods.append(input);
    make('RECEVOIR UN LIEN DE CONNEXION',async()=>{
      if(!input.checkValidity()||!input.value.trim()){this.status('Entre une adresse e-mail valide.');return;}
      const {error}=await supabase.auth.signInWithOtp({email:input.value.trim(),options:{emailRedirectTo:location.origin+location.pathname}});
      this.status(error?showError(error):'Consulte tes e-mails pour ouvrir le lien de connexion.');
    });
    make('SE DÉCONNECTER',()=>this.signOut());
  }
  status(s){const x=this.panel?.querySelector('#account-status');if(x)x.textContent=s;}
  open(){this.panel.classList.remove('hidden');}
  close(){this.panel.classList.add('hidden');}
  async signOut(){
    this.wasLinked=this.isLinked;
    if(this.isLinked){
      try{
        const local=getLocal();if(local)await this.upload(local);
        await send('/api/v1/account/logout',{method:'POST',headers:{Authorization:'Bearer '+this.game.challengeHub.playerToken}});
      }catch(e){this.status('Déconnexion interrompue : '+showError(e));return;}
    }
    await supabase.auth.signOut();
    if(!this.wasLinked) return;
    for(const k of ['convergence_challenge_token','convergence_vertical_v1','convergence_daily_best','convergence_quartiers_v1'])localStorage.removeItem(k);
    this.game.challengeHub.playerToken='';this.isLinked=false;location.reload();
  }
  async oauth(provider){
    if(!configured)return this.status('Compte non configuré.');
    this.status('Redirection sécurisée…');
    const {error}=await supabase.auth.signInWithOAuth({provider,options:{redirectTo:location.origin+location.pathname}});
    if(error)this.status(showError(error));
  }
  async connect(session){
    if(!session?.access_token||this.syncing)return;
    this.syncing=true;
    try{
      const guestToken=this.game.challengeHub.playerToken;
      const link=await send('/api/v1/account/link',{
        method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+session.access_token},
        body:JSON.stringify({guestToken})
      });
      this.game.challengeHub.playerToken=link.token;
      localStorage.setItem('convergence_challenge_token',link.token);
      this.isLinked=true;
      await this.restore();
      await this.game.challengeHub.refreshRemoteStatus();
      this.status('Compte synchronisé : niveaux, records et achats récupérables sur tes appareils.');
      const button=document.getElementById('account-btn');if(button)button.textContent='MON COMPTE · SAUVEGARDE ACTIVE';
    }catch(e){this.isLinked=false;this.status('Sauvegarde cloud indisponible : '+showError(e));}
    finally{this.syncing=false;}
  }
  async restore(){
    const hub=this.game.challengeHub;
    const remote=await send('/api/v1/account/progress',{headers:{Authorization:'Bearer '+hub.playerToken}});
    this.revision=remote.revision;
    const local=getLocal();
    if(remote.progress){
      if(!local||remote.progress.level>=local.level){
        if(this.game.state==='menu')applyProgress(this.game,remote.progress);
      }else await this.upload(local);
    }else if(local)await this.upload(local);
  }
  queueSave(){
    if(!this.isLinked||this.syncing)return;
    clearTimeout(this.saveTimer);
    this.saveTimer=setTimeout(()=>{const local=getLocal();if(local)this.upload(local).catch(e=>this.status('Sauvegarde cloud à réessayer : '+showError(e)));},400);
  }
  async upload(progress){
    if(!this.isLinked)return;
    const hub=this.game.challengeHub;
    try{
      const data=await send('/api/v1/account/progress',{
        method:'POST',headers:{Authorization:'Bearer '+hub.playerToken,'Content-Type':'application/json'},
        body:JSON.stringify({progress,revision:this.revision})
      });
      this.revision=data.revision;
    }catch(e){
      if(e.status===409){
        const fresh=e.details;if(!fresh.progress||progress.level>fresh.progress.level){
          this.revision=fresh.revision;return this.upload(progress);
        }
        this.revision=fresh.revision;
        if(this.game.state==='menu')applyProgress(this.game,fresh.progress);
        return;
      }
      throw e;
    }
  }
  askAudienceConsent(){
    if(!api||localStorage.getItem('convergence_audience_consent')!==null)return;
    const box=document.createElement('div');box.className='audience-banner';
    box.innerHTML='<p>Autorises-tu la mesure de fréquentation du jeu ? Sessions actives et origine du trafic, avec identifiant temporaire, conservés 14 jours. Facultatif.</p>';
    for(const [text,choice] of [['ACCEPTER','yes'],['REFUSER','no']]){
      const b=document.createElement('button');b.type='button';b.textContent=text;
      b.onclick=()=>{localStorage.setItem('convergence_audience_consent',choice);this.panel.querySelector('#audience-opt').checked=choice==='yes';box.remove();this.maybeHeartbeat();};box.append(b);
    }
    document.body.append(box);
  }
  maybeHeartbeat(){
    clearInterval(this.heartbeat);this.heartbeat=null;
    if(!api||localStorage.getItem('convergence_audience_consent')!=='yes')return;
    const beat=()=>{if(!document.hidden && ['playing','fighting','bravm_charge'].includes(this.game.state))fetch(api+'/api/v1/presence',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:this.sessionId,source:this.source})}).catch(()=>{});};
    beat();this.heartbeat=setInterval(beat,30000);
  }
}
