import {configured,request,extractTicket,redeemTicket} from './accountPortal.js';
const api=String(import.meta.env.VITE_CONVERGENCE_API||'').replace(/\/$/,'');
const adminToken=()=>localStorage.getItem('convergence_admin_token')||'';
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
  if(!adminToken()){q('#app').style.display='none';q('#auth').style.display='block';return;}
  try{
    const d=await request('/api/v1/admin/summary',{headers:{Authorization:'Bearer '+adminToken()}});
    q('#auth').style.display='none';q('#app').style.display='block';set('auth-error','');
    for(const [key,v] of [['online',d.online],['active',d.active],['visitors',d.visitors24h],['accounts',d.registered],
      ['players',d.playerRecords],['scores',d.dailyScores],['orders',d.purchases24h],
      ['revenue',euros(d.revenueCents24h||0)]])set(key,v);
    fill('sources',d.sources||[],'source');fill('products',d.orders||[],'sku');
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
  q('#signin').hidden=!status.google;
  q('#signin-email').hidden=!status.email;
  q('#admin-email').hidden=!status.email;
  if(!status.google&&!status.email)set('auth-error','Google et la messagerie ne sont pas encore configurés.');
  if(ticket){
    try{await redeemTicket(ticket,'','convergence_admin_token');}
    catch(e){set('auth-error','Lien de connexion expiré ou déjà utilisé.');}
  }
  await load();
}
q('#signin').onclick=()=>location.assign(api+'/api/v1/auth/google/start?destination=cockpit');
q('#signin-email').onclick=async()=>{
  const input=q('#admin-email');
  if(!input.value.trim()||!input.checkValidity()){
    set('auth-error','Adresse e-mail invalide.');return;
  }
  q('#signin-email').disabled=true;
  try{
    const result=await request('/api/v1/auth/email/start',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email:input.value.trim(),destination:'cockpit'})
    });
    set('auth-error',result.message||'Consulte ta boîte e-mail.');
  }catch(e){set('auth-error','Impossible d’envoyer le lien : '+e.message);}
  finally{q('#signin-email').disabled=false;}
};
q('#logout').onclick=async()=>{
  if(adminToken())try{
    await request('/api/v1/account/logout',{method:'POST',
      headers:{Authorization:'Bearer '+adminToken()}});
  }catch{}
  localStorage.removeItem('convergence_admin_token');
  q('#app').style.display='none';q('#auth').style.display='block';set('auth-error','Session administrateur fermée.');
};
q('#refresh').onclick=()=>load();
init().catch(()=>{q('#signin').disabled=true;set('auth-error','Serveur d’authentification indisponible.');});
setInterval(()=>{if(!document.hidden)load().catch(()=>{});},15000);
