import {districtForLevel} from './parisDistricts.mjs';
import {PlayerTelemetry} from './playerTelemetry.mjs';
import {parseDuel,createResultCard,shareResultCard,downloadBlob} from './resultSharing.mjs';

const activeStates=['playing','fighting','bravm_charge','intro','final_chase','final_capture','boss_defeated'];
const missions=[
  {id:'mobilisation',label:'Réunis 30 manifestants au même moment',goal:30},
  {id:'protection',label:'Recrute 20 protections pendant la marche',goal:20},
  {id:'arrivee',label:'Franchis le front avec au moins 15 manifestants',goal:15}
];
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
function element(tag,cls,text){const e=document.createElement(tag);e.className=cls;e.textContent=text;return e;}

export class PlayerExperience {
  constructor(game){
    this.game=game;this.telemetry=new PlayerTelemetry();this.run=null;this.tick=0;
    this.settings=read('convergence_accessibility_v1',{});
    this.reducedMotion=this.settings.reducedMotion??matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.badges=read('convergence_quartiers_v1',{});
    this.coach=element('div','player-coach','');this.coach.id='player-coach';this.coach.setAttribute('role','status');
    game.ui.container.append(this.coach);
    this.installSettings();this.installResults();this.applyQuality();
    if(import.meta.env.VITE_PLAYER_PREVIEW==='1')document.querySelector('.menu-footnote').textContent='VERSION D’ESSAI · ACHATS RÉELS DÉSACTIVÉS';
    const intro=element('button','menu-intro','VOIR L’INTRODUCTION');intro.type='button';
    intro.addEventListener('click',()=>{game.ui.hideAllScreens();game.startWithIntro({force:true});});
    document.querySelector('.menu-footnote').before(intro);
    this.duel=parseDuel(location.search);
    if(this.duel){
      game.challengeHub.date=this.duel.day;
      game.challengeHub.dailyButton.textContent='DÉFI REÇU · BATTRE '+this.duel.score+' SURVIVANTS';
      this.telemetry.track('invite_open',{target:this.duel.score});
    }
    window.addEventListener('pagehide',()=>this.abandon('pagehide'));
    window.addEventListener('error',()=>this.telemetry.track('runtime_error',{source:'window'}));
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden&&['playing','fighting','bravm_charge'].includes(game.state))document.getElementById('pause-btn').click();
    });
  }
  installSettings(){
    const panel=document.getElementById('pause-panel'),resume=document.getElementById('resume-btn');
    const add=(id,label,fn)=>{const b=element('button','btn btn-small',label);b.type='button';b.id=id;b.addEventListener('click',fn);panel.insertBefore(b,resume);return b;};
    const motion=add('motion-toggle','',()=>{this.reducedMotion=!this.reducedMotion;this.settings.reducedMotion=this.reducedMotion;this.saveSettings();refresh();});
    const quality=add('quality-toggle','',()=>{this.settings.economy=!this.settings.economy;this.saveSettings();this.applyQuality();refresh();});
    const stats=add('diagnostics-toggle','',()=>{this.telemetry.setEnabled(!this.telemetry.enabled);refresh();});
    const note=element('small','diagnostics-note','Facultatif : 200 événements maximum sur cet appareil. Aucun envoi. Désactiver efface le journal.');panel.insertBefore(note,resume);
    const exportBtn=add('diagnostics-export','EXPORTER LE JOURNAL LOCAL',()=>downloadBlob(new Blob([JSON.stringify(this.telemetry.snapshot(),null,2)],{type:'application/json'}),'convergence-diagnostic.json'));
    const refresh=()=>{motion.textContent='MOUVEMENTS : '+(this.reducedMotion?'RÉDUITS':'COMPLETS');quality.textContent='GRAPHISMES : '+(this.settings.economy?'ÉCONOMES':'STANDARD');stats.textContent='JOURNAL LOCAL : '+(this.telemetry.enabled?'ACTIVÉ':'DÉSACTIVÉ');exportBtn.disabled=!this.telemetry.enabled;document.documentElement.classList.toggle('motion-reduced',this.reducedMotion);};refresh();
  }
  saveSettings(){try{localStorage.setItem('convergence_accessibility_v1',JSON.stringify(this.settings));}catch{}}
  applyQuality(){this.game.renderer.setPixelRatio(this.settings.economy?1:Math.min(devicePixelRatio,1.5));this.game.renderer.shadowMap.enabled=!this.settings.economy;}
  installResults(){
    const screen=document.getElementById('win-screen'),next=document.getElementById('next-btn');
    this.summary=element('p','quarter-summary','');this.summary.id='quarter-summary';
    this.map=element('div','quarter-map','');this.map.setAttribute('aria-label','Progression des douze quartiers');
    this.share=element('button','btn btn-secondary','PARTAGER MA VICTOIRE');this.share.type='button';this.share.id='result-share';
    this.share.addEventListener('click',async()=>{if(this.lastResult)this.notice.textContent=await shareResultCard(this.lastResult,location.origin+location.pathname,this.cardBlob,this.telemetry);});
    this.download=element('button','result-download','ENREGISTRER LA CARTE');this.download.type='button';this.download.disabled=true;this.download.id='result-download';
    this.download.addEventListener('click',()=>{if(this.cardBlob){downloadBlob(this.cardBlob,'convergence-resultat.png');this.telemetry.track('share_download');}});
    this.daily=element('button','result-download','DÉFI DU JOUR · À ARMES ÉGALES');this.daily.type='button';this.daily.id='result-daily';
    this.daily.addEventListener('click',()=>this.game.challengeHub.open('daily'));
    this.notice=element('p','result-notice','');this.notice.setAttribute('role','status');
    screen.insertBefore(this.summary,next);screen.insertBefore(this.map,next);
    next.after(this.share,this.download,this.daily,this.notice);
  }
  start(){
    this.abandon('restart');const g=this.game;
    this.run={level:g.geographicLevel,mode:g.mode,elapsed:0,wall:performance.now(),done:false,firstGate:false,firstFront:false,frames:[],peak:g.getStartingCrowdSize(),protections:0};
    this.mission=missions[(this.run.level-1)%missions.length];
    this.lastResult=null;this.cardBlob=null;this.download.disabled=true;this.notice.textContent='';this.tick=0;
    this.telemetry.track(g.mode==='daily'?'daily_play':'tap_play',{level:this.run.level,mode:g.mode});
  }
  abandon(source){if(this.run&&!this.run.done){this.telemetry.track('quit_before_level_end',{level:this.run.level,mode:this.run.mode,elapsed:this.run.elapsed,source});this.run.done=true;}}
  gate(before,after){
    const r=this.run;if(!r||r.done)return;
    r.peak=Math.max(r.peak,after.count);r.protections+=Math.max(0,after.shields-before.shields);
    this.telemetry.track('gate_choice',{level:r.level,mode:r.mode,gate:this.game.gateHistory.length,count:after.count,shields:after.shields,elapsed:r.elapsed});
  }
  update(dt){
    const r=this.run,g=this.game;if(!r||r.done||!activeStates.includes(g.state)){this.coach.hidden=true;return;}
    if(g.state!=='intro')r.elapsed+=dt;
    this.tick+=dt;if(this.tick<.15)return;this.tick=0;
    if(g.trackZ>=4&&!r.firstGate){r.firstGate=true;this.telemetry.track('first_gate_seen',{level:r.level,mode:r.mode,elapsed:r.elapsed});}
    if(g.state==='fighting'&&!r.firstFront){r.firstFront=true;this.telemetry.track('first_front',{level:r.level,mode:r.mode,elapsed:r.elapsed,count:g.crowdManager.getPlayerCount()});}
    let text='';const gates=g.gateHistory.length;
    if(r.mode==='campaign'){
      if(r.level===1&&gates===0&&g.state==='playing')text='Touche une TV pour la casser · Glisse pour diriger';
      else if(r.level===1&&gates===1&&g.trackZ>22&&g.state==='playing')text='Les protections absorbent les pertes des barrages';
      else if(r.level===1&&gates===2&&g.trackZ>38&&g.trackZ<45)text='Vise la perte la plus faible pour garder ta foule';
      else if(g.state==='playing'&&gates===0)text='Objectif facultatif : '+this.mission.label;
    }
    this.coach.hidden=!text;this.coach.textContent=text;
  }
  sampleFrame(seconds){
    if(!this.telemetry.enabled||!this.run||this.run.done||this.game.state!=='playing'||this.game.qaManual)return;
    this.run.frames.push(Math.min(1000,seconds*1000));
    if(this.run.frames.length===120){const values=this.run.frames.sort((a,b)=>a-b),p95=values[113];this.telemetry.track('fps_bucket',{level:this.run.level,bucket:p95<=17?'under17':p95<=34?'under34':p95<=50?'under50':'over50'});this.run.frames=[];}
  }
  finish(won,source='unknown'){
    const r=this.run,g=this.game;if(!r||r.done)return;
    r.done=true;this.coach.hidden=true;
    const survivors=g.crowdManager.getPlayerCount(),mission=this.mission;
    this.telemetry.track(won?'level_complete':'level_fail',{level:r.level,mode:r.mode,count:survivors,elapsed:r.elapsed,source});
    if(r.mode!=='campaign')return;
    const value=mission.id==='mobilisation'?r.peak:mission.id==='protection'?r.protections:survivors;
    const badge=won&&value>=mission.goal;
    if(won&&!g.parisDevSelection){const old=this.badges[r.level]||{};this.badges[r.level]={won:true,badge:!!old.badge||badge,best:Math.max(old.best||0,survivors)};try{localStorage.setItem('convergence_quartiers_v1',JSON.stringify(this.badges));}catch{}}
    const district=districtForLevel(r.level);
    this.lastResult={won,mode:r.mode,level:r.level,district:district.short,survivors,badge,
      bestGain:Math.max(0,...g.gateHistory.map(h=>h.after.count-h.before.count))};
    this.summary.textContent=district.short+' · '+(badge?'Objectif réussi ✓':mission.label+' · '+Math.min(value,mission.goal)+' / '+mission.goal);
    this.map.replaceChildren();for(let i=1;i<=12;i++){const completed=this.badges[i]?.won||i<r.level||(won&&i===r.level);const chip=element('span',completed?'done':'',String(i));chip.title=districtForLevel(i).short+(this.badges[i]?.badge?' · Objectif réussi':'');chip.setAttribute('aria-label',chip.title);this.map.append(chip);}
    if(won){const result=this.lastResult;createResultCard(result,location.origin+location.pathname).then(blob=>{if(this.lastResult===result&&blob){this.cardBlob=blob;this.download.disabled=false;}}).catch(()=>{});}
  }
}
