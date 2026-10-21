// The wardrobe uses approved artwork, never the gameplay GLB viewer.
const base=import.meta.env.BASE_URL+'assets/hero-portraits/';
export const portraitUrl=(id,face=false)=>base+encodeURIComponent(id)+(face?'-face':'')+'.png';

export class HeroPortrait {
 constructor(host){
  this.host=host;
  this.token=0;
  this.figure=document.createElement('img');
  this.figure.className='hero-art-figure';
  this.figure.alt='';
  this.figure.decoding='async';
  this.figure.draggable=false;
  this.face=document.createElement('img');
  this.face.className='hero-art-face';
  this.face.alt='';
  this.face.decoding='async';
  this.face.draggable=false;
  this.host.replaceChildren(this.figure,this.face);
 }
 async show(profile){
  const token=++this.token;
  const id=profile.id;
  const full=portraitUrl(id),close=portraitUrl(id,true);
  const load=(src)=>new Promise((resolve,reject)=>{
   const img=new Image();
   img.onload=()=>resolve(img);
   img.onerror=()=>reject(new Error('Illustration manquante : '+src));
   img.src=src;
  });
  const [figure,face]=await Promise.all([load(full),load(close)]);
  if(token!==this.token)return false;
  this.figure.src=figure.src;
  this.figure.alt='Illustration originale en pied de '+profile.name;
  this.face.src=face.src;
  this.face.alt='Visage original de '+profile.name;
  return true;
 }
 async portrait(){
  if(!this.figure.src) return null;
  const res=await fetch(this.figure.src,{cache:'force-cache'});
  if(!res.ok) throw new Error('Portrait non disponible');
  return res.blob();
 }
 dispose(){++this.token;this.host.replaceChildren();}
}
