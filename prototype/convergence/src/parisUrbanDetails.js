// Decorative layers only. Every solid detail stays outside the runner corridor.
// All repeated geometry uses the existing ParisBatch instance buffers.
import {PALETTE as P,tree,lamp,bench,car,kiosk,metro,shelter,statue,fountain} from './parisArchitecture.js';
const jackets=[P.blue,P.red,P.green,P.cream,P.slate];
const skins=[0xc39a78,0x9a7259,0xe1b99a];
export function passerby(b,x,z,seed=0,{protest=false,police=false,scale=1}={}){
 const skin=skins[Math.abs(seed)%3],coat=police?P.slate:protest?0xd9b839:jackets[Math.abs(seed)%5],s=scale;
 const yaw=(seed%5-2)*.22,step=(seed%3-1)*.12;
 for(const side of [-1,1]){
  b.part('box',P.iron,x+side*.13*s,.4*s,z+side*step,.16*s,.7*s,.20*s,0,yaw,side*.035);
  b.box(P.iron,x+side*.13*s,.08*s,z+.08+side*step,.19*s,.15*s,.33*s,yaw);
  b.part('box',coat,x+side*.32*s,1.12*s,z,.14*s,.59*s,.18*s,0,yaw,side*(protest&&seed%3===0?.9:.12));
  b.ball(skin,x+side*.35*s,.83*s,z,.09*s);
 }
 b.part('cone',coat,x,1.12*s,z,.31*s,.69*s,.21*s,0,yaw);
 b.cyl(skin,x,1.52*s,z,.08*s,.14*s);
 b.ball(skin,x,1.7*s,z,.18*s,.23*s,.18*s);
 b.part('dome',police?P.slate:P.wood,x,1.77*s,z,.19*s,.18*s,.19*s);
 if(police){
  b.box(P.iron,x+.3,1.02,z+.22,.4,.8,.07);
  b.box(0x78949c,x,1.7,z+.17,.33,.1,.05);
 }else if(protest&&seed%4===0){
  b.cyl(P.wood,x+.42,2.0,z,.022,1.7);
  b.box(seed%8===0?P.red:P.cream,x+.42,2.65,z,.93,.55,.035);
 }else if(seed%4===1)b.box(P.wood,x-.36,.67,z,.26,.36,.2);
}
export function flag(b,x,z,y=4.5,height=3.6){
 b.cyl(P.iron,x,y-height/2,z,.035,height);
 for(const [i,color] of [[0,0x294d8f],[1,P.white],[2,0xb6403d]]){
  b.part('box',color,x+.22+i*.4,y-.45,z+.035*Math.sin(i),.4,.85,.025,0,(i-1)*.07);
 }
 b.ball(P.gold,x,y+.05,z,.07);
}
export function bollards(b,x,z,length=8){
 for(let j=-length/2;j<=length/2;j+=1.65){
  b.cyl(P.iron,x,.48,z+j,.065,.88);b.ball(P.white,x,.94,z+j,.074);
 }
}
export function railing(b,x,z,length=5,y=0){
 for(let j=-length/2;j<=length/2;j+=.55)b.box(P.iron,x,y+.65,z+j,.045,1.24,.045);
 for(const h of [.17,1.22])b.box(P.iron,x,y+h,z,.07,.07,length+.2);
}
export function planter(b,x,z,length=2.2){
 b.box(P.stone,x,.35,z,1.1,.64,length);
 b.box(P.wood,x,.69,z,.91,.035,length-.2);
 for(let i=0;i<4;i++)b.ball(P.green,x+((i%2)-.5)*.45,.93,z+(i-1.5)*length/4,.4,.42,.42);
 if(Math.round(z)%3===0)for(let i=0;i<4;i++)b.ball(P.red,x+((i%2)-.5)*.35,1.26,z+(i-1.5)*length/4,.13);
}
export function trafficLight(b,x,z){
 b.cyl(P.iron,x,1.6,z,.06,3.2);b.box(P.iron,x,3.1,z,.30,.89,.27);
 for(let i=0;i<3;i++)b.part('sphere',[P.red,0xd9b839,P.green][i],x,3.36-i*.26,z+.15,.095,.095,.045,0,0,0,i===0);
 b.box(P.iron,x,1.6,z,.20,.35,.22);
 b.box(P.green,x,1.65,z+.13,.09,.12,.025);
}
export function bicycle(b,x,z,scooter=false){
 const color=scooter?P.red:P.green;
 for(const dz of [-.62,.62]){
  b.part('ring',P.iron,x,.37,z+dz,.34,.34,.34,0,Math.PI/2);
  if(scooter)b.part('cylinder',P.iron,x,.37,z+dz,.24,.16,.24,0,0,Math.PI/2);
 }
 b.part('box',color,x,.56,z,.1,.12,1.12,0,0,.05);
 b.part('cylinder',color,x,.71,z+.25,.035,.8,.035,.5);
 b.part('cylinder',color,x,.72,z-.28,.035,.7,.035,-.65);
 b.box(P.iron,x,1.0,z-.12,.26,.08,.36);
 b.cyl(P.iron,x,1.12,z+.58,.035,.65);
 b.box(P.iron,x,1.42,z+.58,.48,.055,.055);
 if(scooter)b.box(color,x,.69,z-.25,.48,.5,.68);
}
export function terrace(b,x,z,side=1,{parasol=false}={}){
 for(let i=0;i<2;i++){
  const zz=z+(i-.5)*2.6;
  b.cyl(P.iron,x,.52,zz,.05,.95);b.cyl(P.cream,x,1.0,zz,.58,.075);
  for(const dz of [-.85,.85]){
   b.box(P.wood,x,.52,zz+dz,.48,.10,.48);
   b.box(P.wood,x,.85,zz+dz+Math.sign(dz)*.19,.48,.57,.07);
   for(const ox of [-.17,.17])b.box(P.iron,x+ox,.27,zz+dz,.035,.5,.38);
  }
  b.cyl(P.white,x+.15,1.10,zz,.06,.13);
  if(i===0)passerby(b,x+side*.95,zz,Math.abs(Math.round(z)));
 }
 if(parasol){
  b.cyl(P.iron,x,1.9,z,.04,3.7);
  b.part('cone',P.red,x,3.55,z,2.0,.55,2.0);
  b.cyl(P.cream,x,3.29,z,2,.08);
 }
}
export function posterColumn(b,x,z,seed=0){
 b.cyl(P.green,x,1.4,z,.58,2.8);
 b.cyl(P.gold,x,2.78,z,.68,.14);b.part('dome',P.green,x,2.9,z,.75,.38,.75);
 for(const s of [-1,1]){
  b.box(seed%2?P.red:P.blue,x,1.55,z+s*.58,.75,1.9,.025);
  b.box(P.cream,x,1.9,z+s*.605,.6,.20,.025);
  b.box(P.gold,x,1.35,z+s*.605,.48,.48,.025);
 }
}
function mailbox(b,x,z){
 b.box(0xd4ad32,x,1.1,z,.53,.74,.36);b.cyl(P.iron,x,.45,z,.055,.9);
 b.box(P.iron,x,1.25,z+.19,.33,.055,.03);b.box(P.cream,x,.96,z+.2,.19,.14,.03);
}
function officialVan(b,x,z){
 car(b,x,z,{bus:true,color:P.slate});
 b.box(P.white,x,1.25,z+4.02,1.7,.22,.04);
 for(const dx of [-.55,.55])b.part('box',P.blue,x+dx,3,z,.32,.19,.36,0,0,0,true);
}
function pavementDetail(b,c,start,end){
 // Painted/grouted details have no collision and can safely occupy the ground plane.
 for(let p=Math.ceil(start/13)*13;p<end;p+=13){
  for(const s of [-1,1]){
   b.cyl(P.iron,s*4.65,.039,-p,.31,.018);
   for(let k=-2;k<=2;k++)b.box(0x7e827d,s*4.65+k*.085,.05,-p,.032,.015,.4);
   b.box(P.iron,s*6.32,.16,-p-4,.32,.025,.66);
   for(let j=-2;j<=2;j++)b.box(P.stone,s*6.32,.18,-p-4+j*.1,.29,.015,.025);
  }
 }
 const isSquare=[1,3,5,8,9,10].includes(c.id);
 const edge=isSquare?7.4:6.35;
 for(const s of [-1,1]){
  b.box(P.stone,s*edge,.09,-(start+end)/2,.18,.15,end-start);
  for(let p=start;p<end;p+=3)b.box(0xb5b2a7,s*edge,.18,-p,.19,.02,.035);
  if([2,3,7,11].includes(c.id)){
   for(let p=start;p<end;p+=6)b.box(P.white,s*9.7,.045,-p,.12,.015,3);
   for(let p=Math.ceil(start/13)*13;p<end;p+=13){
    b.box(P.white,s*8.1,.046,-p,2.6,.016,.11);
   }
  }
 }
 if(c.id===2)for(let p=Math.ceil(start/24)*24;p<end;p+=24){
  // BUS letters made of ground geometry, independent from gameplay PNGs.
  const x=6.4;
  b.box(P.white,x,.048,-p,.07,.015,1.6);
  b.box(P.white,x+.35,.048,-p+.7,.7,.015,.08);
  b.box(P.white,x+.35,.048,-p,.7,.015,.08);
  b.box(P.white,x+.35,.048,-p-.7,.7,.015,.08);
 }
 if([3,8,10].includes(c.id))for(let p=Math.ceil(start/48)*48+24;p<end;p+=48){
  for(const s of [-1,1])for(let j=0;j<5;j++)b.box(P.white,s*(8+j*.7),.051,-p+j*.6,.15,.02,4,-s*.5);
 }
}
export function urbanLayer(b,c,start,end,length,facadeAt){
 if(end<0||start>length+30)return;
 pavementDetail(b,c,start,end);
 const broad=[1,3,5,8,9,10,11].includes(c.id);
 const edge=broad?8.8:Math.max(7.5,c.width/2+.3);
 for(const side of [-1,1]){
  // Close foreground detail frames the march even when a large plaza recedes.
  for(let p=Math.ceil(Math.max(4,start)/12)*12;p<end&&p<length+12;p+=12){
   const k=Math.floor(p/12),x=side*(edge+.15*(k%3));
   bollards(b,side*(broad?7.5:6.35),-p,7);
   if(k%2===0)planter(b,x,-p-3,2.1);
   if(k%3===1)bench(b,x,-p+1,side*Math.PI/2);
   if(k%3===2){b.cyl(P.green,x,.52,-p,.29,1);mailbox(b,x+side*.8,-p-2);}
   const people=c.id===5||c.id===11||c.id===12?4:2;
   for(let j=0;j<people;j++)passerby(b,x+side*(1+(j%2)*.62),-p+(Math.floor(j/2)-.5)*1.1,k+j+c.id,
    {protest:[1,3,5,10,11,12].includes(c.id)&&k%2===0,police:c.id===12&&k%5===0});
   if(k%4===0)posterColumn(b,x+side*1.3,-p-4,k);
   if(k%4===1)bicycle(b,x+side*.7,-p+4,k%3===1);
   if(k%3===0)railing(b,side*6.6,-p+3,3.2);
   if([1,4,5,11].includes(c.id)&&k%2===1&&Math.abs(x)>8.3)
    tree(b,x+side*1.9,-p+4,c.leaves,.7+.12*(k%3));
  }
  for(let p=Math.ceil(Math.max(16,start)/32)*32;p<end&&p<length-8;p+=32){
   const k=Math.floor(p/32),x=side*(broad?12.8:Math.max(7.5,c.width/2+.3));
   // Keep parked cars off planted central Nation strips.
   if(c.id!==1&&c.id!==5&&c.id!==9)car(b,x,-p,{color:[P.slate,P.white,P.red,P.blue][(k+c.id)%4]});
   if(c.id===5)planter(b,x,-p,4);
   trafficLight(b,side*7.1,-p+5);
   if(c.id===11||c.id===12||c.id===8)flag(b,side*(edge+1),-p+2,c.id===11?6.1:4.7);
  }
  for(let p=Math.ceil(Math.max(10,start)/40)*40;p<end&&p<length-12;p+=40){
   const front=facadeAt(p)-3.75;
   const x=side*Math.max(edge+1.6,front-1.4);
   if([2,4,6,7,8,9].includes(c.id))terrace(b,x,-p,side,{parasol:[4,7,9].includes(c.id)});
   if([1,3,5,10,11].includes(c.id)){lamp(b,side*(edge+3),-p,c.id>=7);planter(b,side*(edge+4.3),-p+4,3.5);}
  }
 }
 // Each district gets its own repeatable second-plan ensemble.
 const zone=Math.floor(start/48),z=-(start+26);
 if(zone<0||zone>3)return;
 switch(c.id){
 case 3: // Bastille: busy road edges, crowds and a ceremonial column precinct.
  shelter(b,13,-start-11);posterColumn(b,-12,z);railing(b,-7.3,z,10);
  if(zone===1){officialVan(b,16,z-8);kiosk(b,-15,z-5);}
  break;
 case 5:
  for(const s of [-1,1]){
   b.box(P.stone,s*15,.23,z,7,.5,1.2);
   for(let j=0;j<6;j++)passerby(b,s*(10.7+(j%3)*.8),z+Math.floor(j/3)*1.1,j+zone,{protest:true});
   planter(b,s*17,z-6,6);bench(b,s*13,z+5);
  }
  if(zone===0)kiosk(b,18,z-7);break;
 case 10:
  for(const s of [-1,1]){
   railing(b,s*13,z,15);lamp(b,s*15,z+7,true);
   if(zone%2===0){b.box(P.cream,s*20,1,z,2,2,2);statue(b,s*20,2,z,1,P.cream,{raised:false});}
  }
  if(zone===1)fountain(b,20,z-7,3.4);break;
 case 11:
  for(const s of [-1,1]){
   for(let j=0;j<3;j++){tree(b,s*19,-start-10-j*13,c.leaves,1.05+j*.1);flag(b,s*11.5,-start-9-j*13,6);}
   terrace(b,s*21,z,s,{parasol:true});
  }
  if(zone===1)car(b,12.5,z,{bus:true,color:P.cream});
  break;
 case 12:
  for(const s of [-1,1]){
   railing(b,s*7.2,z,19);flag(b,s*8,z+6,5.8);
   for(let j=0;j<3;j++)passerby(b,s*8.3,z+j*1.1,j,{police:true});
  }
  if(zone===2){officialVan(b,10,z);b.box(P.stone,-10,1.35,z,1.8,2.7,1.8);b.box(P.glass,-10,1.7,z+1,1.4,.85,.05);b.part('pyramid',P.slate,-10,2.95,z,1.5,.5,1.5);}
  break;
 case 1:
  for(const s of [-1,1]){railing(b,s*12.3,z,16);planter(b,s*14,z,5);}
  if(zone===1)metro(b,-17,z,'M • NATION');
  break;
 case 2:
  if(zone%2===0)shelter(b,9.8,z);else car(b,-8.4,z,{bus:true,color:P.green});
  break;
 case 4:
  kiosk(b,9,z);terrace(b,-8.9,z,-1,{parasol:true});
  b.sign(zone%2?'ANTIQUITÉS':'ATELIER PHOTO',-9.5,3.2,z+5,3.8,.6);
  break;
 case 6:
  posterColumn(b,9,z);posterColumn(b,-9,z-8);
  b.sign(zone%2?'THÉÂTRE • CE SOIR':'MUSIC-HALL',-10,4,z,4,.8,0,'#5d3038','#f2d59c');
  break;
 case 7:
  b.sign(zone%2?'CINÉMA':'PASSAGE COUVERT',11,4.3,z,4.5,.9,0,'#283943','#f0cf96');
  posterColumn(b,-9.8,z);shelter(b,10.1,z-9);
  break;
 case 8:
  for(const s of [-1,1]){lamp(b,s*14,z,true);flag(b,s*17,z,5.5);planter(b,s*19,z-6,3);}
  if(zone===1)shelter(b,13,z+7);
  break;
 case 9:
  for(const s of [-1,1]){
   for(let j=0;j<3;j++){planter(b,s*(12+j*1.4),z+j,1.2);b.part('cone',P.cream,s*(12+j*1.4),1.8,z+j,1.0,.35,1);}
  }
  if(zone===1)b.sign('FLEURISTE • MADELEINE',12,3,z+5,5,.6);break;
 }
}
export function monumentPrecinct(b,spec,c){
 const {x,progress:p,type}=spec,z=-p;
 if(['bastille','republique','obelisk','nation'].includes(type)){
  const radius=type==='republique'?4.6:type==='nation'?5.4:3.1;
  b.cyl(P.stone,x,.12,z,radius,.18);
  for(let i=0;i<12;i++){
   const a=i*Math.PI/6,xx=x+Math.cos(a)*(radius+.7),zz=z+Math.sin(a)*(radius+.7);
   if(Math.abs(xx)<6.2)continue;
   b.cyl(P.iron,xx,.5,zz,.055,.85);b.ball(P.gold,xx,.95,zz,.075);
  }
  for(const s of [-1,1]){
   if(Math.abs(x+s*(radius+1.8))>6.5)lamp(b,x+s*(radius+1.8),z-3,c.id>=7);
   if(Math.abs(x+s*(radius+2.5))>6.5)planter(b,x+s*(radius+2.5),z+3,2.7);
  }
 }
 if(type==='bastille'){
  b.box(P.gold,x,1.7,z+2.72,2.4,.95,.05);
  for(let j=-2;j<=2;j++)b.box(P.bronze,x+j*.35,1.7,z+2.76,.13,.55,.035);
  for(let y=3.5;y<16;y+=1.4)b.cyl(P.bronze,x,y,z,1.055,.11);
 }
 if(type==='bastille-opera'){
  for(let i=-9;i<=9;i+=3){
   b.box(P.glass,x+i,2,z+10.6,1.9,3.1,.10);
   b.box(P.cream,x+i,2,z+10.7,.08,3.1,.1);
  }
  for(let i=0;i<6;i++)b.box(P.stone,x,.1+i*.08,z+13-i*.4,21-i*.3,.12,.8);
  b.sign('OPÉRA NATIONAL DE PARIS',x,6.5,z+10.8,17,1);
 }
 if(type==='republique'){
  for(let i=0;i<6;i++){
   const xx=x-4-i*.85;passerby(b,xx,z+5,i,{protest:true});
  }
  for(const s of [-1,1])b.box(P.bronze,x+s*2.12,4,z,.08,1.2,1.6);
 }
 if(type==='obelisk'){
  b.box(0xad9370,x,1.2,z+1.9,2.8,1.3,.08);
  for(let j=-2;j<=2;j++)b.box(P.gold,x+j*.44,1.2,z+1.96,.12,.65,.025);
 }
 if(type==='garnier'){
  for(let i=-5;i<=5;i++){
   statue(b,x+i*2.5,8.65,z+6.1,.42,P.gold,{raised:false});
   b.box(P.gold,x+i*2.5,4.1,z+6.2,.65,.18,.1);
  }
  for(const s of [-1,1]){lamp(b,x+s*10,z+10,true);lamp(b,x+s*13,z+10,true);}
 }
 if(type==='madeleine'){
  for(let i=-5;i<=5;i++)statue(b,x+i*.85,10.0,z+12.7,.38,P.stone,{raised:false});
  for(const s of [-1,1]){lamp(b,x+s*9,z+13,true);planter(b,x+s*8.8,z+6,3);}
 }
 if(type==='saint-martin'){
  for(let i=-9;i<=9;i+=3)b.box(P.stone,x+i,16.6,z+3.6,1.8,.65,.12);
  for(const s of [-1,1])lamp(b,s*9,z+7,true);
 }
 if(type==='throne')for(const dx of [-4,4]){
  for(let y=3;y<13;y+=1.3)b.cyl(P.cream,x+dx,y,z,.68,.075);
  for(let q=-1;q<=1;q++)b.box(P.glass,x+dx+q*.8,1.7,z-2.16,.5,1.2,.1);
 }
 if(type==='elysee'){
  for(const s of [-1,1]){
   flag(b,s*7,z+1,7);
   for(let i=0;i<10;i++)b.part('cone',P.gold,s*(8+i*.55),4.1,z,.11,.25,.11);
   for(let i=0;i<5;i++)b.part('ring',P.gold,s*10.5,.95+i*.45,z,.48,.19,.1);
   lamp(b,s*9,z+4,true);lamp(b,s*11,z-15,true);
   for(let j=0;j<4;j++)passerby(b,s*9,z+6+j,j,{police:j<2,protest:j>=2});
  }
  for(let i=-6;i<=6;i++)b.box(P.cream,i*2.15,7.85,z-19.2,1.35,.16,.35);
 }
}
