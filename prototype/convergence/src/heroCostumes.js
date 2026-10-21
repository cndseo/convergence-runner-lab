import * as T from 'three';
import {artFor} from './heroArt.mjs';
const V=(...p)=>new T.Vector3(...p);
const dark=0x242730,white=0xd4d5d2;
// Hair is built as a layered volume with swept locks, rather than a painted helmet.
function lock(b,points,r,color){b.add(new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>V(...p))),10,r,5,false),color);}
function hairstyle(b,a){
 const col=a.hair;
 const first=b.batches.map(g=>g.length);
 if(a.style==='beanie'){
  const g=new T.SphereGeometry(.105,24,14,0,Math.PI*2,0,Math.PI*.56);g.scale(1,.87,1.27);
  b.add(g,0x242629,[0,.132,-.027]);b.add(new T.TorusGeometry(.103,.011,6,24),0x323536,[0,.125,-.027],[Math.PI/2,0,0]);
  for(let i=0;i<16;i++){const t=i*Math.PI*2/16;lock(b,[[Math.cos(t)*.109,.12,Math.sin(t)*.112+.018],[Math.cos(t)*.096,.18,Math.sin(t)*.099+.018],[Math.cos(t)*.035,.235,Math.sin(t)*.047+.018]],.0016,0x424644);}
 }else{
  const curly=a.style.startsWith('coils')||a.style==='curls';
  if(curly){
   for(let i=0;i<52;i++){
    const y=i/52,theta=i*2.39996,r=Math.sqrt(1-y*y),rad=a.style==='curls'?.022:.017;
    b.ellipsoid([rad,rad*.85,rad],[.103*r*Math.cos(theta),.148+y*.112,.015+.106*r*Math.sin(theta)],i%4===0?new T.Color(col).multiplyScalar(1.22):col);
   }
  }
  if(['bun','coils-bun'].includes(a.style)){
   b.ellipsoid([.047,.038,.044],[.012,.258,.065],col);
   for(let i=0;i<36;i++){
    const t=i*2.4;
    lock(b,[[.01+Math.cos(t)*.035,.25+Math.sin(t)*.032,.052],[.012+Math.cos(t+.6)*.047,.277+Math.sin(t+.6)*.03,.077],[.01+Math.cos(t+1)*.035,.266,.113]],.0025,col);
   }
   for(const side of [-1,1])lock(b,[[side*.075,.208,-.063],[side*.09,.13,-.075],[side*.086,.057,-.078],[side*.092,.018,-.064]],.0025,col);
  }
  if(a.style==='pony'){
   for(let i=0;i<12;i++){
    const dx=(i%4-1.5)*.013;
    lock(b,[[dx,.245,.06],[dx+.015,.28,.127],[dx+.032,.19,.166],[dx+.046,.08,.158],[dx+.052,.015,.135]],.0055,i%3===0?new T.Color(col).multiplyScalar(1.3):col);
   }
   b.tube(.032,.014,[0,.246,.095],dark,[Math.PI/2,0,0]);
   for(const side of [-1,1])lock(b,[[side*.06,.225,-.056],[side*.097,.16,-.075],[side*.108,.08,-.063]],.0025,col);
  }
  if(a.style==='waves'){
   for(let i=0;i<10;i++){
    const x=(i-4.5)*.018;
    lock(b,[[x*.8,.236,-.02],[x,.222,-.073],[x+.012,.172,-.098],[x-.004,.153,-.092]],.011,col);
   }
  }
 }
 const matrix=new T.Matrix4().makeScale(a.style==='beanie'?1:.88,a.style==='beanie'?1:.86,a.style==='beanie'?1:.87);
 for(let j=0;j<2;j++)for(const g of b.batches[j].slice(first[j]))g.applyMatrix4(matrix);

 if(a.cap){
  const cap=new T.SphereGeometry(.113,24,14,0,Math.PI*2,0,Math.PI*.52);cap.scale(1,.82,1.05);
  b.add(cap,dark,[0,.174,.006]);b.box([.218,.015,.14],[0,.166,-.112],dark,.015);
  lock(b,[[-.018,.213,-.109],[.018,.187,-.116]],.004,0x70984b);lock(b,[[.018,.213,-.109],[-.018,.187,-.116]],.004,0x70984b);
 }
 if(a.earrings)for(const x of [-.10,.10])b.add(new T.TorusGeometry(.018,.0025,5,14),0xc6a66b,[x,.022,-.012],[0,Math.PI/2,0]);
}
function helmet(b,pos=[0,0,0]){
 const shell=new T.SphereGeometry(.14,24,14,0,Math.PI*2,0,Math.PI*.60);shell.scale(1,1.08,1.07);
 b.add(shell,0xbb252d,[pos[0],pos[1]+.11,pos[2]]);
 b.box([.24,.055,.04],[pos[0],pos[1]+.075,pos[2]-.13],dark,.014);
 b.box([.22,.045,.018],[pos[0],pos[1]+.082,pos[2]-.156],0x383d41,.013);
 for(const x of [-.124,.124])b.box([.025,.073,.07],[pos[0]+x,pos[1]+.067,pos[2]-.02],0x98222b,.01);
 b.box([.045,.06,.015],[pos[0],pos[1]+.205,pos[2]-.115],0xc7bd68,.007);
}
export function dressHeroDetails(model,spec,{body,head,builder,bone,wp,line,fitVest}){
 const a=artFor(spec);if(!a)return;
 hairstyle(head,a);
 const chest=wp(bone(model,'Spine2')).add(V(0,-.06,0));
 if(spec.hood){
  body.add(new T.TorusGeometry(.104,.031,8,24,Math.PI*1.7),a.hood||0xaeb0b1,[0,.249,.055],[.7,0,.48]);
  body.ellipsoid([.11,.073,.055],[0,.25,.115],a.hood||white);
  // Open bomber: pale inner hoodie, contrasting sleeves and ribbed waistband.



 }
 if(spec.faction==='genz'||spec.faction==='lyceens'){
  for(const side of ['L','R']){
   const thigh=wp(bone(model,side+'_Thigh')),calf=wp(bone(model,side+'_Calf'));
   const pocket=builder(model,side+'_Thigh',thigh.clone().lerp(calf,.65),'hero-cargo-'+side);
   const sign=side==='L'?1:-1;
   pocket.box([.10,.15,.055],[sign*.068,0,-.033],spec.pants,.014);
   pocket.box([.104,.035,.06],[sign*.068,.06,-.035],spec.pants,.007);
   pocket.box([.025,.018,.006],[sign*.068,.06,-.069],a.bagAccent,.003);pocket.finish();

  }
  if(spec.faction==='genz'||a.messenger){
   body.box([.205,.135,.07],[a.messenger?-.20:-.055,-.05,-.205],a.messenger?a.bag:dark,.025);
   body.box([.17,.014,.007],[a.messenger?-.20:-.055,-.025,-.246],a.bagAccent,.004);
   line(body,[.155,.20,-.13],[-.19,-.17,-.18],.012,dark);
  }
 }
 if(a.neckphones){
  body.add(new T.TorusGeometry(.11,.012,6,20,Math.PI*1.3),dark,[0,.20,-.027],[Math.PI/2,0,.45]);
  for(const x of [-.092,.092])body.box([.045,.06,.045],[x,.21,-.094],dark,.015);
 }
 if(a.pins){
  for(const [x,y,col]of [[-.065,.10,0xdfba57],[.055,.04,0x7dacc0],[-.045,-.10,0xc6a1b8]])body.ellipsoid([.015,.015,.005],[x,y,.348],col);
  line(body,[.13,-.12,.32],[.15,-.21,.33],.002,a.bagAccent);body.ellipsoid([.017,.023,.009],[.15,-.22,.33],a.bagAccent);
 }
 if(a.book){
  const arm=builder(model,'L_Forearm',wp(bone(model,'L_Forearm')).lerp(wp(bone(model,'L_Hand')),.45),'hero-book');
  arm.box([.035,.225,.16],[.035,.035,-.03],a.book,.006,[0,0,.12]);
  arm.box([.025,.20,.146],[.035,.035,-.031],0xd8d0b8,.003,[0,0,.12]);arm.finish();
 }
 if(spec.faction==='infirmieres'){

  body.box([.035,.055,.035],[.13,-.16,-.14],0x444e57,.005);
  if(a.stretcher){
   for(const x of [-.13,.13])line(body,[x,-.36,.24],[x,.36,.24],.014,0xd3b637);
   for(const y of [-.28,.22])line(body,[-.13,y,.24],[.13,y,.24],.012,0xe0bb2c);
   body.box([.205,.43,.055],[0,-.005,.255],dark,.012);
   for(const x of [-.14,.14])body.add(new T.TorusGeometry(.036,.012,6,12),0x252a30,[x,-.37,.245],[0,Math.PI/2,0]);
  }
  if(a.hipBag){body.box([.16,.16,.09],[-.23,-.20,.01],a.bag,.018);body.box([.12,.03,.012],[-.23,-.17,-.04],0x6ba4b8,.004);}
 }
 if(a.tank){
  body.tube(.065,.35,[0,.005,.205],0xd1b640);
  body.ellipsoid([.065,.045,.065],[0,.18,.205],0xd1b640);
  body.ellipsoid([.065,.045,.065],[0,-.17,.205],0xd1b640);
  for(const y of [-.10,.10])body.box([.14,.03,.02],[0,y,.266],dark,.004);
  for(const x of [-.11,.11])line(body,[x,.20,.13],[x,-.20,-.14],.017,dark);
  const hand=builder(model,'L_Hand',wp(bone(model,'L_Hand')),'hero-carried-helmet');helmet(hand,[.015,-.16,0]);hand.finish();
 }
 if(a.helmet)helmet(head,[0,.02,0]);
 if(a.bagAccent!==undefined&&!a.tank&&!a.stretcher&&!a.hipBag){
  for(const x of [-.12,.12])body.box([.018,.25,.012],[x,-.015,.347],a.bagAccent,.003);
  for(const y of [-.10,.08])body.box([.15,.014,.012],[0,y,.345],a.bagAccent,.003);
 }
}
