import * as THREE from 'three';
import {bonusCopy} from './bonusGates.mjs';
const palette={
 gilets:{base:'#ffe000',dark:'#392e05',glow:0xffe500},
 genz:{base:'#ff2ba9',dark:'#30092e',glow:0xff3cba},
 pompiers:{base:'#ff503b',dark:'#380c0b',glow:0xff493a},
 infirmieres:{base:'#8feaff',dark:'#0b3046',glow:0x91efff}
};
function round(ctx,x,y,w,h,r,fill,stroke,line=1){
 ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();
 if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=line;ctx.stroke();}
}
function vest(ctx,x,y,s){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.fillStyle='#f4e600';ctx.strokeStyle='#211f16';ctx.lineWidth=6;
 ctx.beginPath();ctx.moveTo(-46,-65);ctx.lineTo(-22,-76);ctx.lineTo(-7,-44);ctx.lineTo(7,-44);ctx.lineTo(22,-76);ctx.lineTo(46,-65);ctx.lineTo(58,-40);ctx.lineTo(39,-29);ctx.lineTo(41,69);ctx.lineTo(-41,69);ctx.lineTo(-39,-29);ctx.lineTo(-58,-40);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.fillStyle='#dce4df';ctx.fillRect(-40,6,80,13);ctx.fillRect(-40,37,80,13);
 ctx.fillStyle='#313538';ctx.fillRect(-3,-43,6,49);ctx.restore();
}
function tiktok(ctx,x,y,s){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.font='900 120px Arial';ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillStyle='#00f5ed';ctx.fillText('♪',-7,5);ctx.fillStyle='#ff276c';ctx.fillText('♪',8,13);
 ctx.fillStyle='#ffffff';ctx.fillText('♪',1,8);ctx.restore();
}
function firefighter(ctx,x,y,s){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.fillStyle='#e63323';ctx.strokeStyle='#ffe176';ctx.lineWidth=5;
 ctx.beginPath();ctx.arc(0,-18,46,Math.PI,Math.PI*2);ctx.lineTo(48,1);ctx.lineTo(-48,1);ctx.closePath();ctx.fill();ctx.stroke();
 ctx.fillStyle='#f7dd32';ctx.fillRect(-8,-67,16,49);
 ctx.fillStyle='#b9161c';ctx.fillRect(-53,1,106,14);
 ctx.fillStyle='#ef3828';ctx.fillRect(-40,16,80,58);
 ctx.fillStyle='#e5eacd';ctx.fillRect(-40,37,80,11);
 ctx.restore();
}
function medical(ctx,x,y,s){
 ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 round(ctx,-56,-58,112,116,16,'#ffffff','#cbd8e0',5);
 ctx.fillStyle='#df2b3d';ctx.fillRect(-13,-43,26,87);ctx.fillRect(-42,-12,84,26);
 ctx.restore();
}
const icons={vest,tiktok,firefighter,medical};
export function makeBonusArtwork(choice,faction,root){
 const info=bonusCopy(choice,faction);
 if(!info)return;
 const style=palette[faction],c=document.createElement('canvas');c.width=512;c.height=512;
 const ctx=c.getContext('2d');
 const gradient=ctx.createLinearGradient(0,0,512,512);
 gradient.addColorStop(0,style.dark);gradient.addColorStop(1,'#101626');
 round(ctx,8,8,496,496,28,gradient,style.base,13);
 ctx.fillStyle=style.base;ctx.globalAlpha=.13;
 for(let i=0;i<15;i++){ctx.beginPath();ctx.arc((i*127)%512,(i*89)%512,24+(i%5)*9,0,Math.PI*2);ctx.fill();}
 ctx.globalAlpha=1;
 round(ctx,36,27,440,245,26,'rgba(0,0,0,.37)',style.base,3);
 icons[info.icon](ctx,256,145,1.05);
 ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';
 ctx.font='900 136px system-ui';ctx.strokeStyle='#080d16';ctx.lineWidth=17;ctx.strokeText(info.number,256,322);
 ctx.fillStyle='#ffffff';ctx.fillText(info.number,256,322);
 ctx.font='900 47px system-ui';ctx.lineWidth=8;ctx.strokeText(info.label,256,424);
 ctx.fillStyle=style.base;ctx.fillText(info.label,256,424);
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;
 const panel=new THREE.Mesh(new THREE.PlaneGeometry(4.07,4.07),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,side:THREE.DoubleSide}));
 panel.position.set(0,2.35,.38);root.add(panel);
 const arrow=new THREE.Mesh(new THREE.ConeGeometry(.37,.65,3),new THREE.MeshBasicMaterial({color:style.glow,transparent:true,opacity:.9,depthWrite:false}));
 arrow.rotation.z=Math.PI;arrow.position.set(0,.10,1.05);root.add(arrow);
 root.userData.bonusPanel=panel;
 return panel;
}
