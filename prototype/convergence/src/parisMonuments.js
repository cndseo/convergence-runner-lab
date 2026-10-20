import * as THREE from 'three';
import {monumentPrecinct} from './parisUrbanDetails.js';
import {ParisBatch,PALETTE as P,statue,fountain,archGeometry,car,kiosk,tree,bench} from './parisArchitecture.js';

// Monuments are decorative: every playable lane is kept open at ground level.
function plinth(b,x,z,w,h=2,d=w){b.box(P.stone,x,h/2,z,w,h,d);b.box(P.cream,x,h+.15,z,w+.5,.3,d+.5);}
function pediment(b,x,y,z,w,h,depth,color=P.cream){
 const shape=new THREE.Shape();shape.moveTo(-w/2,0);shape.lineTo(w/2,0);shape.lineTo(0,h);shape.closePath();
 b.custom(new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:false}),color,x,y,z-depth/2);
}
function columns(b,x,z,span,y,height,n=8,depth=0){
 for(let i=0;i<n;i++){
  const xx=n===1?x:x-span/2+i*span/(n-1);
  b.cyl(P.cream,xx,y+height/2,z,.28,height);
  b.cyl(P.stone,xx,y+.16,z,.42,.32);b.cyl(P.stone,xx,y+height-.13,z,.45,.26);
  if(depth)columns(b,xx,z-depth,0,y,height,1);
 }
}
function temple(b,x,z){
 plinth(b,x,z,15,.7,25);
 for(let i=0;i<5;i++)b.box(P.cream,x,.1+i*.13,z+14-i*.38,16-i*.45,.2,1.1);
 b.box(0x9d998c,x,4.5,z,10,7.5,19);
 for(const zz of [z+10.5,z-10.5])columns(b,x,zz,12.8,.7,8.5,8);
 for(const side of [-1,1])for(let dz=-7.8;dz<=8;dz+=2.6)columns(b,x+side*6.4,z+dz,0,.7,8.5,1);
 b.box(P.cream,x,9.4,z,15,.8,25);
 pediment(b,x,9.8,z+11.9,15,3,1.3);
 for(const s of [-1,1])b.part('box',P.slate,x+s*3.5,11.3,z,8,.25,25,0,0,-s*.34);
 b.box(P.iron,x,3.6,z+9.6,2.2,4.7,.1);
 b.sign('LA MADELEINE',x,9.35,z+12.55,8,.55);
}
function triumph(b,x,z,small=false){
 const w=small?23:28,h=small?18:27,depth=small?3.4:7;
 const openings=small?[{x:0,w:12,h:10},{x:-9,w:3.3,h:6.6},{x:9,w:3.3,h:6.6}]:[{x:0,w:12,h:18}];
 b.custom(archGeometry(w,h,depth,openings),P.stone,x,0,z);
 b.box(P.cream,x,h-3.7,z+depth/2,w+.4,.45,depth+.7);
 b.box(P.cream,x,h+.15,z+depth/2,w+1,.45,depth+1);
 for(const s of [-1,1]){
  b.box(0xb4a78f,x+s*(small?8.4:10),small?12.5:8,z+depth+.07,small?4:4.5,small?2.6:7,.24);
  for(let j=0;j<3;j++)statue(b,x+s*(small?8.4:10)+(j-1)*.8,small?11.3:5,z+depth+.3,small?.55:1,0xc4b79e,{raised:j===1});
 }
 b.sign(small?'PORTE SAINT-MARTIN':'ARC DE TRIOMPHE',x,h-1.6,z+depth+.1,small?11:14,.7,0,'#bcb099','#49443b');
}
function garnier(b,x,z){
 // Broad loggia, paired columns, central copper dome, stage-house and gilded groups.
 plinth(b,x,z,30,.8,13);
 for(let i=0;i<6;i++)b.box(P.cream,x,.12+i*.13,z+8-i*.4,29-i*.5,.2,1);
 b.box(0xd3b88c,x,5.5,z,29,10,11);
 for(let i=-6;i<=6;i++){
  b.box(P.glass,x+i*2,2.1,z+5.58,1.15,2.5,.08);
  b.cyl(P.cream,x+i*2,5.5,z+6,.27,4.8);
 }
 for(let i=-5;i<=5;i++)b.box(0x4b493e,x+i*2.4,6,z+5.62,1.4,3.4,.07);
 for(const y of [3.45,8.4,10])b.box(P.cream,x,y,z+5.9,30,.38,.65);
 b.box(0xd9c19a,x,10.6,z+1,18,2,10);
 b.part('dome',0x568a7d,x,11.6,z-1,8,4.1,5.7);
 b.box(P.slate,x,12,z-6,11,4.5,6);
 b.part('pyramid',P.slate,x,15.3,z-6,8,3,4,0,Math.PI/4);
 statue(b,x,16.5,z-6,1,P.gold,{raised:true});
 for(const s of [-1,1]){
  b.box(P.cream,x+s*12,10.8,z,4.4,2,9);
  statue(b,x+s*12,12,z+2,1.35,P.gold,{wings:true});
  for(let i=0;i<3;i++)b.ball(P.gold,x+s*12+(i-1)*.9,12.1,z+2,.4,.55,.3);
 }
 for(let i=-4;i<=4;i++)b.cyl(P.gold,x+i*2.8,9.3,z+6.15,.36,.12);
 b.sign('ACADÉMIE NATIONALE DE MUSIQUE',x,10.1,z+6.6,20,.65,0,'#c4ac80','#493e2d');
}
function elysee(b,z){
 // The last stretch opens into a compressed U-shaped honour courtyard.
 b.box(P.stone,0,.02,z-9,34,.12,32);
 b.box(0xd9c9ad,0,5,z-24,30,10,9);
 b.box(P.cream,0,10.1,z-24,31,.4,10);
 for(const side of [-1,1]){
  b.box(0xd4c2a7,side*16,3.8,z-10,7.5,7.6,24);
  b.part('box',P.slate,side*16,8.4,z-10,8.2,.3,25,0,0,side*.14);
  for(let zz=-20;zz<2;zz+=3.5){
   b.box(P.glass,side*12.16,4.3,z+zz,.08,1.9,1.15);
   b.box(P.cream,side*12.1,3.2,z+zz,.15,.12,1.45);
  }
 }
 for(let i=-6;i<=6;i++)for(const y of [2.4,6.4]){
  b.box(P.cream,i*2.15,y,z-19.4,1.25,2.6,.2);
  b.box(P.glass,i*2.15,y,z-19.25,.93,2.2,.08);
 }
 b.box(P.cream,0,6,z-18.9,5,8,1.1);
 columns(b,0,z-17.9,3.3,1,7,4);
 pediment(b,0,10.2,z-18.7,8,2,2.4);
 b.box(P.iron,0,2.5,z-18.3,1.7,4,.1);
 b.part('box',P.slate,0,11.5,z-24,30,.28,10,0,0,.06);
 b.cyl(P.iron,0,13.5,z-21,.045,4.4);
 for(const [i,c] of [[0,0x284b90],[1,0xf5eee6],[2,0xbf4242]])b.box(c,.5+i*.55,14.7,z-21,.55,1.1,.04);
 b.sign('PALAIS DE L’ÉLYSÉE',0,7.8,z-18,8,.55,0,'#cab798','#493f32');
 // Open gates: no wall or invisible collision blocks the final symbolic chase.
 for(const s of [-1,1]){
  b.box(P.cream,s*7,2.5,z,1.6,5,1.6);
  b.part('pyramid',P.cream,s*7,5.4,z,1.3,.75,1.3,0,Math.PI/4);
  for(let i=0;i<10;i++)b.box(P.iron,s*(8+i*.55),2,z,.055,3.9,.06);
  for(const y of [.5,3.4])b.box(P.iron,s*10.5,y,z,5.5,.08,.09);
  // Open leaf extends along the courtyard wall.
  for(let i=0;i<7;i++)b.box(P.iron,s*6.1,2,z-i*.65,.06,3.9,.055);
  b.box(P.gold,s*6.1,3.65,z-2,.08,.08,4.5);
 }
}
export function landmarkSpecs(c,length){
 const map={
  1:[['nation',-10,100],['throne',13,145]],
  2:[['diderot',11,42],['junction',-14,128]],
  3:[['bastille',-9,103],['bastille-opera',27,132]],
  4:[['beaumarchais',-9,52],['beaumarchais-square',17,126]],
  5:[['republique',-10.5,110],['republique-water',16,146]],
  6:[['saint-martin',0,110],['theatre',17,152]],
  7:[['rex',-17,99],['passage',17,126]],
  8:[['garnier',-22,136],['opera-avenues',18,64]],
  9:[['madeleine',-17,125],['flowers',14,129]],
  10:[['obelisk',-9,110],['concorde-fountains',18,148],['concorde-statues',-20,138]],
  11:[['arc',0,length+95],['champs-gardens',-17,68]],
  12:[['marigny',-11,25],['elysee',0,length+8]]
 };
 return map[c.id].map(([type,x,progress])=>({type,x,progress}));
}
export function makeLandmark(spec,c){
 const {type,x,progress}=spec,z=-progress,b=new ParisBatch('PARIS_LANDMARK_'+type);
 switch(type){
 case 'nation':
  b.cyl(0x68784c,x,.05,z,5.2,.12);
  b.part('ring',0xc9c4b3,x,.035,z,22,22,.10,Math.PI/2);plinth(b,x,z,5,1.6);
  b.cyl(P.bronze,x,2.6,z,1.8,1.6);b.ball(P.bronze,x,4.5,z,1.35);
  statue(b,x,5.6,z,1.65,P.bronze,{raised:true});
  for(const s of [-1,1]){
   // Lions, chariot wheels and allegorical attendants around the globe.
   b.ball(P.bronze,x+s*1.3,1.8,z+2.25,.65,.6,1.1);
   b.ball(P.bronze,x+s*1.3,2.1,z+3.1,.5);
   b.part('ring',P.bronze,x+s*1.9,2.35,z,.7,.7,.7,0,Math.PI/2);
   statue(b,x+s*2.3,1.7,z-1,1,P.bronze,{raised:false});
  }
  b.sign('TRIOMPHE DE LA RÉPUBLIQUE',x,1.2,z+2.55,4.8,.4,0,'#b7aa91','#443f35');
  break;
 case 'throne':
  for(const dx of [-4,4]){
   plinth(b,x+dx,z,2.8,2);b.cyl(P.stone,x+dx,8,z,.65,11);
   b.cyl(P.cream,x+dx,13.8,z,1,.5);statue(b,x+dx,14.1,z,1,P.bronze);
   b.box(P.cream,x+dx,1.5,z-4,3.8,3,3.6);
  }break;
 case 'diderot':
  car(b,x,z,{bus:true,color:0x548b80});b.sign('BOULEVARD DIDEROT',x,4,z,6,.7);break;
 case 'junction':
  b.box(P.stone,x,.12,z,8,.2,18);
  for(let i=0;i<3;i++)car(b,x+i*2.5,z+i*5,{color:[0x567988,0xa69c88,0x71474b][i]});
  b.sign('GARE DE LYON →',x,3.5,z+5,5,.7);break;
 case 'bastille':
  plinth(b,x,z,5.3,2.6);b.cyl(P.bronze,x,10.1,z,1,13);
  for(const y of [3.2,16.5,17.1])b.cyl(P.bronze,x,y,z,1.5,.45);
  for(let i=0;i<10;i++)b.box(P.gold,x,4.5+i*.9,z+1.01,.6,.05,.035);
  b.cyl(P.bronze,x,17.9,z,.85,1.1);statue(b,x,18.5,z,1.1,P.gold,{wings:true});
  b.sign('JUILLET 1830',x,1.7,z+2.69,3.9,.45,0,'#a4947b');break;
 case 'bastille-opera':
  b.box(0x879caa,x,7,z,23,14,18);
  b.part('cylinder',0x658796,x-7,6,z+5,8,12,8);
  b.box(P.glass,x-2,6,z+10.2,21,11,.16);
  for(let i=-10;i<=10;i+=2)b.box(0xbcc7c7,x+i,6,z+10.4,.1,11,.12);
  for(let y=1;y<12;y+=2)b.box(0xaab8bd,x, y,z+10.5,23,.08,.14);
  b.box(0xb8bfbc,x+10,7,z+7,6,14,11);
  b.sign('OPÉRA BASTILLE',x,12,z+10.7,16,1.1);break;
 case 'beaumarchais':
  kiosk(b,x,z);bench(b,x+1,z+5);
  b.sign('BOULEVARD BEAUMARCHAIS',x,3.2,z+4,5,.6);break;
 case 'beaumarchais-square':
  for(let i=-1;i<=1;i++){tree(b,x+i*3,z-3,c.leaves);bench(b,x+i*3,z+2);}
  kiosk(b,x+5,z+3);break;
 case 'republique':
  plinth(b,x,z,7,1.1);b.cyl(P.stone,x,4,z,2.1,5.5);b.cyl(P.cream,x,6.9,z,2.55,.55);
  statue(b,x,7.2,z,2.4,P.bronze,{raised:true});
  for(let i=0;i<3;i++){const a=i*Math.PI*2/3;statue(b,x+Math.sin(a)*2.45,1.2,z+Math.cos(a)*2.45,1,P.bronze,{raised:false});}
  b.ball(P.bronze,x,.9,z+4,1.1,.65,.5);
  b.sign('LIBERTÉ • ÉGALITÉ • FRATERNITÉ',x,3.4,z+2.15,4.1,.4,0,'#bfb39d','#514e44');break;
 case 'republique-water':
  b.box(P.cream,x,.12,z,13,.2,21);b.box(0x95b3b5,x,.24,z,12,.035,20);
  for(let i=0;i<4;i++)bench(b,x-4+i*2.6,z+12);break;
 case 'saint-martin':triumph(b,x,z,true);break;
 case 'theatre':
  b.box(P.stone,x,7,z,13,14,8);
  for(const dx of [-4,0,4]){
   b.box(P.red,x+dx,3,z+4.1,2.5,4,.08);
   b.cyl(P.cream,x+dx-1.4,6,z+4.3,.25,10);
   statue(b,x+dx,12,z+4.2,.7,P.cream);
  }
  b.box(P.red,x,4.3,z+5.3,12,.24,3);
  b.sign('THÉÂTRE DE LA RENAISSANCE',x,9,z+4.4,12,.8,0,'#71322e');break;
 case 'rex':
  b.box(0xd8cbb6,x,9,z,13,18,12);b.box(P.cream,x+4,14,z,4,28,9);
  b.box(0xad7560,x+4,27.5,z,3.6,.5,8.5);
  for(const y of [9,12,15,18,21])b.box(P.cream,x,y,z+6.2,14,.2,.3);
  b.box(P.red,x,4.2,z+7,13,.65,3);
  b.sign('LE GRAND REX',x,5.2,z+8.6,12,1,0,'#5c2639','#ffe9ab');
  b.sign('REX',x+4,24,z+4.6,3.5,2,0,'#f4ddaf','#a03131');
  for(let i=-4;i<=4;i+=2)b.box(0xd1a45e,x+i,2,z+6.1,1.1,2.8,.08);
  break;
 case 'passage':
  b.custom(archGeometry(10,9,5,[{w:5,h:7}]),P.stone,x,0,z);
  b.box(0x668580,x,7,z-4,5,.2,13);
  b.sign('PASSAGE DES PANORAMAS',x,8.1,z+5.1,9,.65);break;
 case 'garnier':garnier(b,x,z);break;
 case 'opera-avenues':
  for(let i=0;i<3;i++)car(b,x+i*2.2,z-4*i,{color:0x5a6674});
  b.sign('AVENUE DE L’OPÉRA',x,4,z,7,.65);break;
 case 'madeleine':temple(b,x,z);break;
 case 'flowers':
  for(let i=0;i<4;i++){
   b.box(P.green,x+(i%2)*2,.65,z+Math.floor(i/2)*3,1.6,1.2,2.3);
   for(let j=0;j<6;j++)b.ball([0xb5586a,0xe1c771,0xc6abb6][j%3],x+(i%2)*2+(j%3-.8)*.4,1.45,z+Math.floor(i/2)*3+Math.floor(j/3)*.6,.22);
  }
  b.sign('MARCHÉ AUX FLEURS',x+1,2.5,z+3.5,5,.6);break;
 case 'obelisk':
  plinth(b,x,z,3.7,2.6);
  b.part('obelisk',0xcbb18b,x,11.5,z,.92,17,.92,0,Math.PI/4);
  b.part('pyramid',P.gold,x,20.5,z,.59,1.5,.59,0,Math.PI/4);
  for(let i=0;i<14;i++){
   b.box(0x92795e,x,3.7+i*1.05,z+.65,.23,.09,.04);
   b.box(0x92795e,x+.18,3.85+i*1.05,z+.65,.07,.23,.04);
  }break;
 case 'concorde-fountains':fountain(b,x,z,5.5);fountain(b,-x-2,z-24,4.6);break;
 case 'concorde-statues':
  for(const dx of [-5,5]){plinth(b,x+dx,z,3,2.7);statue(b,x+dx,2.9,z,1.25,P.cream,{raised:false});}break;
 case 'arc':triumph(b,x,z,false);break;
 case 'champs-gardens':
  for(let i=0;i<3;i++){tree(b,x-3*i,z-6*i,c.leaves,1.3);bench(b,x+2,z-6*i);}
  fountain(b,x-5,z-17,3.5);break;
 case 'marigny':
  b.box(0x435d43,x,.11,z,8,.2,16);
  for(let i=0;i<4;i++)tree(b,x-1,z-i*4,c.leaves);
  b.sign('AVENUE DE MARIGNY',x,3.7,z+4,5,.65);
  b.sign('FAUBOURG SAINT-HONORÉ →',-x,3.7,z+8,6,.65);break;
 case 'elysee':elysee(b,z);break;
 default:throw new Error('Unknown Paris landmark '+type);
 }
 monumentPrecinct(b,spec,c);
 const group=b.finish();group.userData.landmark=type;group.userData.progress=progress;
 return group;
}
