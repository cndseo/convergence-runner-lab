import {supabase,configured} from './accountPortal.js';
const api=String(import.meta.env.VITE_CONVERGENCE_API||'').replace(/\/$/,'');
const q=s=>document.querySelector(s);
const set=(id,value)=>{q('#'+id).textContent=String(value);};
const euros=n=>(n/100).toLocaleString('fr-FR',{style:'currency',currency:'EUR'});
const fill=(id,rows,field)=>{
  const el=q('#'+id);el.replaceChildren();
  for(const x of rows){
    const tr=document.createElement('tr');
    for(const value of [x[field],x.n]){
      const td=document.createElement('td');td.textContent=String(value);tr.append(td);
    }
    el.append(tr);
  }
};
async function load(){
  const {data:{session}}=await supabase.auth.getSession();
  if(!session){q('#app').style.display='none';q('#auth').style.display='block';return;}
  const r=await fetch(api+'/api/v1/admin/summary',{headers:{Authorization:'Bearer '+session.access_token},cache:'no-store'});
  if(!r.ok){q('#auth-error').textContent=r.status===403?'Compte non autorisé pour ce cockpit.':'API indisponible ('+r.status+').';return;}
  const d=await r.json();
  q('#auth').style.display='none';q('#app').style.display='block';q('#auth-error').textContent='';
  for(const [key,v] of [['active',d.active],['visitors',d.visitors24h],['accounts',d.registered],
    ['players',d.playerRecords],['scores',d.dailyScores],['orders',d.purchases24h],['revenue',euros(d.revenueCents24h||0)]])
    set(key,v);
  fill('sources',d.sources||[],'source');
  fill('products',d.orders||[],'sku');
  set('timestamp','Actualisé le '+new Date(d.at).toLocaleString('fr-FR'));
}
if(!configured){q('#signin').disabled=true;q('#auth-error').textContent='Liaison du projet CONVERGENCE à Supabase et au serveur requise.';}
else{
  q('#signin').onclick=async()=>{
    const {error}=await supabase.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}});
    if(error)q('#auth-error').textContent=error.message;
  };
  q('#logout').onclick=async()=>{await supabase.auth.signOut();q('#app').style.display='none';q('#auth').style.display='block';};
  q('#refresh').onclick=()=>load().catch(e=>q('#error').textContent=e.message);
  supabase.auth.onAuthStateChange(()=>queueMicrotask(()=>load().catch(e=>q('#error').textContent=e.message)));
  load().catch(e=>q('#error').textContent=e.message);
  setInterval(()=>{if(!document.hidden)load().catch(()=>{});},15000);
}