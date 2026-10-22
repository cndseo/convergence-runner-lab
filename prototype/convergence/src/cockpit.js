import {configured,request,extractTicket,redeemTicket,accessToken} from './accountPortal.js';

const q=s=>document.querySelector(s);
const set=(id,v)=>{q('#'+id).textContent=String(v);};
const euros=n=>(n/100).toLocaleString('fr-FR',{style:'currency',currency:'EUR'});
const fill=(id,rows,key)=>{
  const el=q('#'+id);el.replaceChildren();
  for(const x of rows){
    const tr=document.createElement('tr');
    for(const value of [x[key],x.n]){
      const td=document.createElement('td');td.textContent=String(value);tr.append(td);
    }
    el.append(tr);
  }
};
async function load(){
  if(!accessToken()){q('#app').style.display='none';q('#auth').style.display='block';return;}
  try{
    const d=await request('/api/v1/admin/summary',{headers:{Authorization:'Bearer '+accessToken()}});
    q('#auth').style.display='none';q('#app').style.display='block';set('auth-error','');
    for(const [key,v] of [['active',d.active],['visitors',d.visitors24h],['accounts',d.registered],
      ['players',d.playerRecords],['scores',d.dailyScores],['orders',d.purchases24h],
      ['revenue',euros(d.revenueCents24h||0)]])set(key,v);
    fill('sources',d.sources||[],'source');
    fill('products',d.orders||[],'sku');
    set('timestamp','Actualisé le '+new Date(d.at).toLocaleString('fr-FR'));
  }catch(e){
    q('#app').style.display='none';q('#auth').style.display='block';
    set('auth-error',e.status===403?'Compte non autorisé pour ce cockpit.':'Cockpit indisponible : '+e.message);
  }
}
async function init(){
  if(!configured){q('#signin').disabled=true;set('auth-error','L’API CONVERGENCE doit être configurée.');return;}
  const ticket=extractTicket();
  const status=await request('/api/v1/auth/status');
  q('#signin').disabled=!status.google;
  if(!status.google)set('auth-error','Connexion Google non configurée sur ce serveur.');
  if(ticket){
    try{await redeemTicket(ticket,accessToken());}
    catch(e){set('auth-error','Lien de connexion expiré ou déjà utilisé.');}
  }
  await load();
}
q('#signin').onclick=()=>location.assign(
  String(import.meta.env.VITE_CONVERGENCE_API||'').replace(/\/$/,'')+
  '/api/v1/auth/google/start?destination=cockpit'
);
q('#logout').onclick=async()=>{
  if(accessToken())try{
    await request('/api/v1/account/logout',{method:'POST',headers:{Authorization:'Bearer '+accessToken()}});
  }catch{}
  localStorage.removeItem('convergence_challenge_token');
  q('#app').style.display='none';q('#auth').style.display='block';set('auth-error','Session fermée.');
};
q('#refresh').onclick=()=>load();
init().catch(e=>{q('#signin').disabled=true;set('auth-error','Serveur d’authentification indisponible.');});
setInterval(()=>{if(!document.hidden)load().catch(()=>{});},15000);
