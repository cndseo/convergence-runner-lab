import {validChallengeDate,utcChallengeDate} from './dailyChallenge.mjs';

export function parseDuel(search,today=utcChallengeDate()){
  const p=new URLSearchParams(search),day=p.get('daily'),raw=p.get('beat');
  if(!validChallengeDate(day)||!raw||!/^\d{1,2}$/.test(raw))return null;
  const age=(Date.parse(today)-Date.parse(day))/86400000,score=Number(raw);
  return age>=0&&age<=7&&score>=0&&score<=72?{day,score}:null;
}
export function resultShareData(result,base){
  const url=new URL(base);url.search='';url.hash='';url.searchParams.set('daily',result.day||utcChallengeDate());
  if(result.mode==='daily'&&result.won)url.searchParams.set('beat',String(result.survivors));
  url.searchParams.set('from','result');
  const text=result.mode==='daily'
    ?'CONVERGENCE : '+result.survivors+' survivants au défi du '+result.day+'. Même parcours, aucun avantage payant. À toi de jouer !'
    :'J’ai franchi '+result.district+' avec '+result.survivors+' manifestants dans CONVERGENCE. On se retrouve au défi du jour ?';
  return {title:'CONVERGENCE — À toi de jouer',text,url:url.toString()};
}

const W=720,H=1280;
export const SHARE_BACKGROUND='assets/brand/convergence-share-background.webp';
let cachedBackground=null;
function loadBackground(){
 if(cachedBackground)return cachedBackground;
 const base=import.meta.env?.BASE_URL||'/';
 cachedBackground=new Promise((resolve,reject)=>{
  const img=new Image();
  img.onload=()=>resolve(img);
  img.onerror=()=>reject(new Error('Fond de carte introuvable : '+SHARE_BACKGROUND));
  img.src=base+SHARE_BACKGROUND;
 }).catch(e=>{cachedBackground=null;throw e;});
 return cachedBackground;
}
export function shareResultLayout(result){
 const survivors=Math.max(0,Math.floor(Number(result.survivors)||0));
 const level=Math.max(1,Math.min(12,Math.floor(Number(result.level)||1)));
 const district=String(result.district||'Paris').slice(0,50);
 const day=String(result.day||utcChallengeDate()).slice(0,10);
 const isDaily=result.mode==='daily';
 const gain=Math.max(0,Math.floor(Number(result.bestGain)||0));
 return {
  category:isDaily?'DÉFI DU JOUR':'PARIS · '+level+'/12',
  district:isDaily?day:district,
  survivors:String(survivors),
  verdict:result.won===false?'PARTIE TERMINÉE':result.badge?'OBJECTIF ATTEINT':'FRONT FRANCHI',
  detail:gain>0&&!isDaily?'Meilleur ralliement : +'+gain:isDaily?'À TON TOUR DE FAIRE MIEUX !':'',
  footer:'jeu.laconvergence.fr'
 };
}
function roundedPill(ctx,x,y,w,h,fill,border='#ffd566',radius=18){
 ctx.beginPath();ctx.roundRect(x,y,w,h,radius);ctx.fillStyle=fill;ctx.fill();
 if(border){ctx.strokeStyle=border;ctx.lineWidth=2;ctx.stroke();}
}
function fitText(ctx,text,y,fontSize,color,maxWidth=660){
 ctx.font='950 '+fontSize+'px Impact, "Arial Black", system-ui, sans-serif';
 ctx.textAlign='center';ctx.textBaseline='alphabetic';ctx.fillStyle=color;
 ctx.fillText(text,360,y,maxWidth);
}
function paintShareCanvas(canvas,image,result){
 const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Canvas indisponible');
 const d=shareResultLayout(result);
 // Fixed 9:16 aspect ratio exactly matches the artwork. No cropping.
 if(image)ctx.drawImage(image,0,0,W,H);
 else {
  const gradient=ctx.createLinearGradient(0,0,W,H);
  gradient.addColorStop(0,'#1b3455');gradient.addColorStop(1,'#080f20');
  ctx.fillStyle=gradient;ctx.fillRect(0,0,W,H);
  fitText(ctx,'CONVERGENCE',165,72,'#fff8e7',660);
  fitText(ctx,'LA RUE EST À VOUS',207,29,'#fff8e7',580);
  fitText(ctx,'REJOINS LE DÉFI DU JOUR',1137,38,'#ffdf55',650);
 }
 // Keep the printed logo above 230, characters and CTA below 750.
 roundedPill(ctx,208,254,304,48,'rgba(8,20,42,.88)','#ffca44',23);
 fitText(ctx,d.category,290,27,'#ffd454',290);
 roundedPill(ctx,84,320,552,92,'rgba(4,15,35,.86)','rgba(255,215,93,.75)',22);
 fitText(ctx,d.district,379,46,'#ffffff',510);
 ctx.shadowColor='#030718';ctx.shadowBlur=26;ctx.shadowOffsetY=8;
 fitText(ctx,d.survivors,569,174,'#ffd337',580);
 ctx.shadowBlur=0;ctx.shadowOffsetY=0;
 roundedPill(ctx,74,590,572,59,'rgba(5,14,33,.9)','#ffcd48',16);
 fitText(ctx,'MANIFESTANTS À L’ARRIVÉE',630,28,'#fff9e7',550);
 roundedPill(ctx,150,665,420,d.detail?77:49,'rgba(4,15,34,.9)','rgba(255,225,115,.70)',16);
 fitText(ctx,d.verdict,698,29,'#ffda58',404);
 if(d.detail)fitText(ctx,d.detail,727,22,'#fff6dd',406);
 // Bottom CTA is already printed in the supplied image.
 roundedPill(ctx,222,1220,276,39,'rgba(3,12,26,.88)',null,12);
 fitText(ctx,d.footer,1246,22,'#fff6de',255);
}
export async function createResultCard(result,base){
 const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
 let image=null;
 try{image=await loadBackground();}catch(e){console.warn('[ShareCard] Image absente, fallback graphique',e);}
 paintShareCanvas(canvas,image,result);
 return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('Impossible de générer la carte')),'image/png'));
}
export async function shareResultCard(result,base,blob,telemetry){
 const data=resultShareData(result,base);telemetry?.track('share_open',{mode:result.mode});
 try{
  const file=blob&&typeof File!=='undefined'?new File([blob],'convergence-resultat.png',{type:'image/png'}):null;
  if(navigator.share){
   const payload=file&&navigator.canShare?.({files:[file]})?{...data,files:[file]}:data;
   await navigator.share(payload);telemetry?.track('share_success',{method:payload.files?'image':'text'});
   return 'Partage transmis à l’application choisie.';
  }
  await navigator.clipboard.writeText(data.text+'\n'+data.url);
  telemetry?.track('share_copy');return 'Invitation copiée. Colle-la dans ton application.';
 }catch(e){
  telemetry?.track(e.name==='AbortError'?'share_cancel':'share_failed');
  return e.name==='AbortError'?'Partage annulé.':data.text+'\n'+data.url;
 }
}
export function downloadBlob(blob,filename){
 const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;
 document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
