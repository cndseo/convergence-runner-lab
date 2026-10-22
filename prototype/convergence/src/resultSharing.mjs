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
    ?`CONVERGENCE : ${result.survivors} survivants au défi du ${result.day}. Même parcours, aucun avantage payant. À toi de jouer !`
    :`J’ai franchi ${result.district} avec ${result.survivors} manifestants dans CONVERGENCE. On se retrouve au défi du jour ?`;
  return {title:'CONVERGENCE · À toi de jouer',text,url:url.toString()};
}

// A light, exact score card, generated only at the end of a run; no video capture.
export function createResultCard(result,base){
  const canvas=document.createElement('canvas');canvas.width=720;canvas.height=1280;
  const c=canvas.getContext('2d');
  const fill=(text,y,size=32,color='#f4eddd')=>{c.fillStyle=color;c.font=`800 ${size}px system-ui, sans-serif`;c.textAlign='center';c.fillText(text,360,y,640);};
  const gradient=c.createLinearGradient(0,0,720,1280);gradient.addColorStop(0,'#182737');gradient.addColorStop(1,'#080e18');
  c.fillStyle=gradient;c.fillRect(0,0,720,1280);
  c.fillStyle='#ffcc38';c.fillRect(40,52,640,8);
  fill('CONVERGENCE',136,62,'#ffcc38');fill('LA RUE EST À VOUS',184,23);
  fill(result.mode==='daily'?'DÉFI DU JOUR':'PARIS · '+result.level+' / 12',280,29,'#ffb878');
  fill(result.mode==='daily'?result.day:result.district,343,46);
  fill(String(result.survivors),565,172,'#ffcc38');fill('MANIFESTANTS À L’ARRIVÉE',628,28);
  fill(result.badge?'OBJECTIF DU QUARTIER RÉUSSI':'FRONT FRANCHI',706,26);
  if(result.bestGain>0)fill('Meilleur ralliement : +'+result.bestGain,755,26);
  c.fillStyle='#273c4e';for(let i=0;i<12;i++){const h=65+(i*47)%120;c.fillRect(i*62,992-h,48,h);}
  c.fillStyle='#ffcc38';for(let i=0;i<19;i++){const x=35+i*36,y=1015+(i%3)*15;c.beginPath();c.arc(x,y-25,9,0,Math.PI*2);c.fill();c.fillRect(x-9,y-14,18,30);}
  fill(result.mode==='daily'?'TU PEUX FAIRE MIEUX ?':'REJOINS LE DÉFI DU JOUR',1120,37,'#ffcc38');
  fill(new URL(base).host,1180,27);fill('Gratuit · Même parcours · Sans avantage payant',1220,20);
  return new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
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
