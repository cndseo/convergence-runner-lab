(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="184",wu=0,zc=1,Au=2,Aa=1,mh=2,Es=3,Jn=0,Zt=1,It=2,jn=0,Yi=1,Vc=2,Hc=3,Wc=4,Ru=5,vi=100,Cu=101,Pu=102,Du=103,Iu=104,Lu=200,Fu=201,Nu=202,Uu=203,Jr=204,Yr=205,Ou=206,Bu=207,ku=208,Gu=209,zu=210,Vu=211,Hu=212,Wu=213,qu=214,Zr=0,$r=1,Qr=2,es=3,eo=4,to=5,no=6,io=7,gh=0,Xu=1,ju=2,In=0,bh=1,_h=2,xh=3,Zo=4,vh=5,Mh=6,yh=7,qc="attached",Ku="detached",Sh=300,Ti=301,ts=302,ir=303,sr=304,Xa=306,hi=1e3,Rn=1001,Fa=1002,Ft=1003,Eh=1004,Ts=1005,Ct=1006,Ra=1007,Cn=1008,sn=1009,Th=1010,wh=1011,Ds=1012,$o=1013,Nn=1014,un=1015,Yn=1016,Qo=1017,ec=1018,Is=1020,Ah=35902,Rh=35899,Ch=1021,Ph=1022,dn=1023,Zn=1026,Si=1027,tc=1028,nc=1029,wi=1030,ic=1031,sc=1033,Ca=33776,Pa=33777,Da=33778,Ia=33779,so=35840,ao=35841,ro=35842,oo=35843,co=36196,lo=37492,ho=37496,uo=37488,fo=37489,Na=37490,po=37491,mo=37808,go=37809,bo=37810,_o=37811,xo=37812,vo=37813,Mo=37814,yo=37815,So=37816,Eo=37817,To=37818,wo=37819,Ao=37820,Ro=37821,Co=36492,Po=36494,Do=36495,Io=36283,Lo=36284,Ua=36285,Fo=36286,Ju=2200,ac=2201,Yu=2202,Ls=2300,Fs=2301,ar=2302,Xc=2303,Ki=2400,Ji=2401,Oa=2402,rc=2500,Zu=2501,$u=0,Dh=1,No=2,Qu=3200,Uo=0,ed=1,ci="",ft="srgb",on="srgb-linear",Ba="linear",Qe="srgb",Pi=7680,jc=519,td=512,nd=513,id=514,oc=515,sd=516,ad=517,cc=518,rd=519,Oo=35044,Kc="300 es",Pn=2e3,Ns=2001;function od(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function cd(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Us(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ld(){const a=Us("canvas");return a.style.display="block",a}const Jc={};function ka(...a){const e="THREE."+a.shift();console.log(e,...a)}function Ih(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Me(...a){a=Ih(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Re(...a){a=Ih(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Bo(...a){const e=a.join(" ");e in Jc||(Jc[e]=!0,Me(...a))}function hd(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ud={[Zr]:$r,[Qr]:no,[eo]:io,[es]:to,[$r]:Zr,[no]:Qr,[io]:eo,[to]:es};class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const As=Math.PI/180,ns=180/Math.PI;function vn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[a&255]+Ht[a>>8&255]+Ht[a>>16&255]+Ht[a>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function qe(a,e,t){return Math.max(e,Math.min(t,a))}function lc(a,e){return(a%e+e)%e}function dd(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function fd(a,e,t){return a!==e?(t-a)/(e-a):0}function Rs(a,e,t){return(1-t)*a+t*e}function pd(a,e,t,n){return Rs(a,e,1-Math.exp(-t*n))}function md(a,e=1){return e-Math.abs(lc(a,e*2)-e)}function gd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function bd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function _d(a,e){return a+Math.floor(Math.random()*(e-a+1))}function xd(a,e){return a+Math.random()*(e-a)}function vd(a){return a*(.5-Math.random())}function Md(a){a!==void 0&&(Yc=a);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(a){return a*As}function Sd(a){return a*ns}function Ed(a){return(a&a-1)===0&&a!==0}function Td(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function wd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Ad(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*u,c*d,o*l);break;case"YZY":a.set(c*d,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*d,o*h,o*l);break;case"XZX":a.set(o*h,c*m,c*f,o*l);break;case"YXY":a.set(c*f,o*h,c*m,o*l);break;case"ZYZ":a.set(c*m,c*f,o*h,o*l);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function et(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Rd={DEG2RAD:As,RAD2DEG:ns,generateUUID:vn,clamp:qe,euclideanModulo:lc,mapLinear:dd,inverseLerp:fd,lerp:Rs,damp:pd,pingpong:md,smoothstep:gd,smootherstep:bd,randInt:_d,randFloat:xd,randFloatSpread:vd,seededRandom:Md,degToRad:yd,radToDeg:Sd,isPowerOfTwo:Ed,ceilPowerOfTwo:Td,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Ad,normalize:et,denormalize:bn},Rc=class Rc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;let Ge=Rc;class an{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(u!==v||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const b=Math.acos(g),y=Math.sin(b);p=Math.sin(p*b)/y,o=Math.sin(o*b)/y,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o;const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cc=class Cc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cc.prototype.isVector3=!0;let D=Cc;const rr=new D,Zc=new an,Pc=class Pc{constructor(e,t,n,i,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],b=i[1],y=i[4],M=i[7],w=i[2],E=i[5],R=i[8];return s[0]=r*v+o*b+c*w,s[3]=r*g+o*y+c*E,s[6]=r*p+o*M+c*R,s[1]=l*v+h*b+u*w,s[4]=l*g+h*y+u*E,s[7]=l*p+h*M+u*R,s[2]=d*v+f*b+m*w,s[5]=d*g+f*y+m*E,s[8]=d*p+f*M+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,d=o*c-h*s,f=l*s-r*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*r)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(or.makeScale(e,t)),this}rotate(e){return this.premultiply(or.makeRotation(-e)),this}translate(e,t){return this.premultiply(or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pc.prototype.isMatrix3=!0;let Ie=Pc;const or=new Ie,$c=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cd(){const a={enabled:!0,workingColorSpace:on,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Qe&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Qe&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Ba:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[on]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:$c,fromXYZ:Qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:$c,fromXYZ:Qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),a}const We=Cd();function Kn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Zi(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Di;class Pd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=Us("canvas")),Di.width=e.width,Di.height=e.height;const i=Di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Kn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dd=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(cr(i[r].image)):s.push(cr(i[r]))}else s=cr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function cr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Pd.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let Id=0;const lr=new D;class Nt extends di{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Rn,i=Rn,s=Ct,r=Cn,o=dn,c=sn,l=Nt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=vn(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lr).x}get height(){return this.source.getSize(lr).y}get depth(){return this.source.getSize(lr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Sh;Nt.DEFAULT_ANISOTROPY=1;const Dc=class Dc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(f+1)/2,w=(p+1)/2,E=(h+d)/4,R=(u+v)/4,_=(m+g)/4;return y>M&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=R/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=_/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=R/s,i=_/s),this.set(n,i,s,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;let ct=Dc;class Ld extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Nt(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new hc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lh extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fd extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qa=class qa{constructor(e,t,n,i,s,r,o,c,l,h,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,h,u,d,f,m,v,g)}set(e,t,n,i,s,r,o,c,l,h,u,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),r=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,m=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=r*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d-v*o,t[4]=-r*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*h,t[9]=v-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const d=r*h,f=r*u,m=o*h,v=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,f=r*l,m=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=r*c,f=r*l,m=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nd,e,Ud)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ti.crossVectors(n,en),ti.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ti.crossVectors(n,en)),ti.normalize(),Xs.crossVectors(en,ti),i[0]=ti.x,i[4]=Xs.x,i[8]=en.x,i[1]=ti.y,i[5]=Xs.y,i[9]=en.y,i[2]=ti.z,i[6]=Xs.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],b=n[3],y=n[7],M=n[11],w=n[15],E=i[0],R=i[4],_=i[8],T=i[12],C=i[1],P=i[5],I=i[9],B=i[13],W=i[2],F=i[6],V=i[10],k=i[14],$=i[3],Q=i[7],le=i[11],_e=i[15];return s[0]=r*E+o*C+c*W+l*$,s[4]=r*R+o*P+c*F+l*Q,s[8]=r*_+o*I+c*V+l*le,s[12]=r*T+o*B+c*k+l*_e,s[1]=h*E+u*C+d*W+f*$,s[5]=h*R+u*P+d*F+f*Q,s[9]=h*_+u*I+d*V+f*le,s[13]=h*T+u*B+d*k+f*_e,s[2]=m*E+v*C+g*W+p*$,s[6]=m*R+v*P+g*F+p*Q,s[10]=m*_+v*I+g*V+p*le,s[14]=m*T+v*B+g*k+p*_e,s[3]=b*E+y*C+M*W+w*$,s[7]=b*R+y*P+M*F+w*Q,s[11]=b*_+y*I+M*V+w*le,s[15]=b*T+y*B+M*k+w*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15],b=c*f-l*d,y=o*f-l*u,M=o*d-c*u,w=r*f-l*h,E=r*d-c*h,R=r*u-o*h;return t*(v*b-g*y+p*M)-n*(m*b-g*w+p*E)+i*(m*y-v*w+p*R)-s*(m*M-v*E+g*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],b=t*o-n*r,y=t*c-i*r,M=t*l-s*r,w=n*c-i*o,E=n*l-s*o,R=i*l-s*c,_=h*v-u*m,T=h*g-d*m,C=h*p-f*m,P=u*g-d*v,I=u*p-f*v,B=d*p-f*g,W=b*B-y*I+M*P+w*C-E*T+R*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/W;return e[0]=(o*B-c*I+l*P)*F,e[1]=(i*I-n*B-s*P)*F,e[2]=(v*R-g*E+p*w)*F,e[3]=(d*E-u*R-f*w)*F,e[4]=(c*C-r*B-l*T)*F,e[5]=(t*B-i*C+s*T)*F,e[6]=(g*M-m*R-p*y)*F,e[7]=(h*R-d*M+f*y)*F,e[8]=(r*I-o*C+l*_)*F,e[9]=(n*C-t*I-s*_)*F,e[10]=(m*E-v*M+p*b)*F,e[11]=(u*M-h*E-f*b)*F,e[12]=(o*T-r*P-c*_)*F,e[13]=(t*P-n*T+i*_)*F,e[14]=(v*y-m*w-g*b)*F,e[15]=(h*w-u*y+d*b)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,u=o+o,d=s*l,f=s*h,m=s*u,v=r*h,g=r*u,p=o*u,b=c*l,y=c*h,M=c*u,w=n.x,E=n.y,R=n.z;return i[0]=(1-(v+p))*w,i[1]=(f+M)*w,i[2]=(m-y)*w,i[3]=0,i[4]=(f-M)*E,i[5]=(1-(d+p))*E,i[6]=(g+b)*E,i[7]=0,i[8]=(m+y)*R,i[9]=(g-b)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Ii.set(i[0],i[1],i[2]).length();const o=Ii.set(i[4],i[5],i[6]).length(),c=Ii.set(i[8],i[9],i[10]).length();s<0&&(r=-r),fn.copy(this);const l=1/r,h=1/o,u=1/c;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,r,o=Pn,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,v;if(c)m=s/(r-s),v=r*s/(r-s);else if(o===Pn)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Ns)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Pn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,v;if(c)m=1/(r-s),v=r/(r-s);else if(o===Pn)m=-2/(r-s),v=-(r+s)/(r-s);else if(o===Ns)m=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qa.prototype.isMatrix4=!0;let ze=qa;const Ii=new D,fn=new ze,Nd=new D(0,0,0),Ud=new D(1,1,1),ti=new D,Xs=new D,en=new D,el=new ze,tl=new an;class ui{constructor(e=0,t=0,n=0,i=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Od=0;const nl=new D,Li=new an,Gn=new ze,js=new D,fs=new D,Bd=new D,kd=new an,il=new D(1,0,0),sl=new D(0,1,0),al=new D(0,0,1),rl={type:"added"},Gd={type:"removed"},Fi={type:"childadded",child:null},hr={type:"childremoved",child:null};class lt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new D,t=new ui,n=new an,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ie}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(sl,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(sl,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?js.copy(e):js.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(fs,js,this.up):Gn.lookAt(js,fs,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Gn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),hr.child=e,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new D(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pt extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function dr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=lc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=dr(r,s,e+1/3),this.g=dr(r,s,e),this.b=dr(r,s,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=ft){function n(s){s!==void 0&&parseFloat(s)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return We.workingToColorSpace(Wt.copy(this),e),Math.round(qe(Wt.r*255,0,255))*65536+Math.round(qe(Wt.g*255,0,255))*256+Math.round(qe(Wt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,s=Wt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=ft){We.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Ks);const n=Rs(ni.h,Ks.h,t),i=Rs(ni.s,Ks.s,t),s=Rs(ni.l,Ks.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new we;we.NAMES=Nh;class uc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new uc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vd extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new D,zn=new D,fr=new D,Vn=new D,Ni=new D,Ui=new D,ol=new D,pr=new D,mr=new D,gr=new D,br=new ct,_r=new ct,xr=new ct;class _n{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),zn.subVectors(n,t),fr.subVectors(e,t);const r=pn.dot(pn),o=pn.dot(zn),c=pn.dot(fr),l=zn.dot(zn),h=zn.dot(fr),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(r*h-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(r,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return br.setScalar(0),_r.setScalar(0),xr.setScalar(0),br.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),xr.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(br,s.x),r.addScaledVector(_r,s.y),r.addScaledVector(xr,s.z),r}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),zn.subVectors(e,t),pn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),pn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Ni.subVectors(i,n),Ui.subVectors(s,n),pr.subVectors(e,n);const c=Ni.dot(pr),l=Ui.dot(pr);if(c<=0&&l<=0)return t.copy(n);mr.subVectors(e,i);const h=Ni.dot(mr),u=Ui.dot(mr);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Ni,r);gr.subVectors(e,s);const f=Ni.dot(gr),m=Ui.dot(gr);if(m>=0&&f<=m)return t.copy(s);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ui,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ol.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(ol,o);const p=1/(g+v+d);return r=v*p,o=d*p,t.copy(n).addScaledVector(Ni,r).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,mn):mn.fromBufferAttribute(s,r),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ys.subVectors(this.max,ps),Oi.subVectors(e.a,ps),Bi.subVectors(e.b,ps),ki.subVectors(e.c,ps),ii.subVectors(Bi,Oi),si.subVectors(ki,Bi),pi.subVectors(Oi,ki);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-pi.z,pi.y,ii.z,0,-ii.x,si.z,0,-si.x,pi.z,0,-pi.x,-ii.y,ii.x,0,-si.y,si.x,0,-pi.y,pi.x,0];return!vr(t,Oi,Bi,ki,Ys)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,Oi,Bi,ki,Ys))?!1:(Zs.crossVectors(ii,si),t=[Zs.x,Zs.y,Zs.z],vr(t,Oi,Bi,ki,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,Js=new xt,Oi=new D,Bi=new D,ki=new D,ii=new D,si=new D,pi=new D,ps=new D,Ys=new D,Zs=new D,mi=new D;function vr(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){mi.fromArray(a,s);const o=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const At=new D,$s=new Ge;let Hd=0;class zt extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Uh extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oh extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Wd=new xt,ms=new D,Mr=new D;class On{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Mr)),this.expandByPoint(ms.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qd=0;const ln=new ze,yr=new lt,Gi=new D,tn=new xt,gs=new xt,kt=new D;class Bt extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?Oh:Uh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(tn.min,gs.min),tn.expandByPoint(kt),kt.addVectors(tn.max,gs.max),tn.expandByPoint(kt)):(tn.expandByPoint(gs.min),tn.expandByPoint(gs.max))}tn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)kt.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(e,l),kt.add(Gi)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new D,c[_]=new D;const l=new D,h=new D,u=new D,d=new Ge,f=new Ge,m=new Ge,v=new D,g=new D;function p(_,T,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[_].add(v),o[T].add(v),o[C].add(v),c[_].add(g),c[T].add(g),c[C].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,T=b.length;_<T;++_){const C=b[_],P=C.start,I=C.count;for(let B=P,W=P+I;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new D,M=new D,w=new D,E=new D;function R(_){w.fromBufferAttribute(i,_),E.copy(w);const T=o[_];y.copy(T),y.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(E,T);const P=M.dot(c[_])<0?-1:1;r.setXYZW(_,y.x,y.y,y.z,P)}for(let _=0,T=b.length;_<T;++_){const C=b[_],P=C.start,I=C.count;for(let B=P,W=P+I;B<W;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,r=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new zt(d,h,u)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oo,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new D;class dc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let jd=0;class Fn extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=Yi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Yr,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wn=new D,Sr=new D,Qs=new D,ai=new D,Er=new D,ea=new D,Tr=new D;class ja{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sr.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Sr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Qs),o=ai.dot(this.direction),c=-ai.dot(Qs),l=ai.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*c-o,d=r*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sr).addScaledVector(Qs,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,s){Er.subVectors(t,e),ea.subVectors(n,e),Tr.crossVectors(Er,ea);let r=this.direction.dot(Tr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ai.subVectors(this.origin,e);const c=o*this.direction.dot(ea.crossVectors(ai,ea));if(c<0)return null;const l=o*this.direction.dot(Er.cross(ai));if(l<0||c+l>r)return null;const h=-o*ai.dot(Tr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cl=new ze,gi=new ja,ta=new On,ll=new D,na=new D,ia=new D,sa=new D,wr=new D,aa=new D,hl=new D,ra=new D;class xe extends lt{constructor(e=new Bt,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){aa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(wr.fromBufferAttribute(u,e),r?aa.addScaledVector(wr,h):aa.addScaledVector(wr.sub(t),h))}t.add(aa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),gi.copy(e.ray).recast(e.near),!(ta.containsPoint(gi.origin)===!1&&(gi.intersectSphere(ta,ll)===null||gi.origin.distanceToSquared(ll)>(e.far-e.near)**2))&&(cl.copy(s).invert(),gi.copy(e.ray).applyMatrix4(cl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,w=y;M<w;M+=3){const E=o.getX(M),R=o.getX(M+1),_=o.getX(M+2);i=oa(this,p,e,n,l,h,u,E,R,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const b=o.getX(g),y=o.getX(g+1),M=o.getX(g+2);i=oa(this,r,e,n,l,h,u,b,y,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=b,w=y;M<w;M+=3){const E=M,R=M+1,_=M+2;i=oa(this,p,e,n,l,h,u,E,R,_),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const b=g,y=g+1,M=g+2;i=oa(this,r,e,n,l,h,u,b,y,M),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Kd(a,e,t,n,i,s,r,o){let c;if(e.side===Zt?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===Jn,o),c===null)return null;ra.copy(o),ra.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(ra);return l<t.near||l>t.far?null:{distance:l,point:ra.clone(),object:a}}function oa(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,na),a.getVertexPosition(c,ia),a.getVertexPosition(l,sa);const h=Kd(a,e,t,n,na,ia,sa,hl);if(h){const u=new D;_n.getBarycoord(hl,na,ia,sa,u),i&&(h.uv=_n.getInterpolatedAttribute(i,o,c,l,u,new Ge)),s&&(h.uv1=_n.getInterpolatedAttribute(s,o,c,l,u,new Ge)),r&&(h.normal=_n.getInterpolatedAttribute(r,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};_n.getNormal(na,ia,sa,d.normal),h.face=d,h.barycoord=u}return h}const bs=new ct,ul=new ct,dl=new ct,Jd=new ct,fl=new ze,ca=new D,Ar=new On,pl=new ze,Rr=new ja;class Yd extends xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qc,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),e.ray.intersectsSphere(Ar)!==!1&&(pl.copy(i).invert(),Rr.copy(e.ray).applyMatrix4(pl),!(this.boundingBox!==null&&Rr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ul.fromBufferAttribute(i.attributes.skinIndex,e),dl.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(bs.copy(t),t.set(0,0,0,0)):(bs.set(...t,1),t.set(0,0,0)),bs.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const r=dl.getComponent(s);if(r!==0){const o=ul.getComponent(s);fl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jd.copy(bs).applyMatrix4(fl),r)}}return t.isVector4&&(t.w=bs.w),t.applyMatrix4(this.bindMatrixInverse)}}class Bh extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fc extends Nt{constructor(e=null,t=1,n=1,i,s,r,o,c,l=Ft,h=Ft,u,d){super(null,r,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ml=new ze,Zd=new ze;class pc{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Zd;ml.multiplyMatrices(o,t[s]),ml.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fc(t,e,e,dn,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(Me("Skeleton: No bone found with UUID:",s),r=new Bh),this.bones.push(r),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Os extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zi=new ze,gl=new ze,la=[],bl=new xt,$d=new ze,_s=new xe,xs=new On;class Ka extends xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$d)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),bl.copy(e.boundingBox).applyMatrix4(zi),this.boundingBox.union(bl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),xs.copy(e.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),e.ray.intersectsSphere(xs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zi),gl.multiplyMatrices(n,zi),_s.matrixWorld=gl,_s.raycast(e,la);for(let r=0,o=la.length;r<o;r++){const c=la[r];c.instanceId=s,c.object=this,t.push(c)}la.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fc(new Float32Array(i*this.count),i,this.count,tc,un));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cr=new D,Qd=new D,ef=new Ie;class xi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cr.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Cr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ef.getNormalMatrix(e),i=this.coplanarPoint(Cr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new On,tf=new Ge(.5,.5),ha=new D;class mc{constructor(e=new xi,t=new xi,n=new xi,i=new xi,s=new xi,r=new xi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],v=s[9],g=s[10],p=s[11],b=s[12],y=s[13],M=s[14],w=s[15];if(i[0].setComponents(l-r,f-h,p-m,w-b).normalize(),i[1].setComponents(l+r,f+h,p+m,w+b).normalize(),i[2].setComponents(l+o,f+u,p+v,w+y).normalize(),i[3].setComponents(l-o,f-u,p-v,w-y).normalize(),n)i[4].setComponents(c,d,g,M).normalize(),i[5].setComponents(l-c,f-d,p-g,w-M).normalize();else if(i[4].setComponents(l-c,f-d,p-g,w-M).normalize(),t===Pn)i[5].setComponents(l+c,f+d,p+g,w+M).normalize();else if(t===Ns)i[5].setComponents(c,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=tf.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ha.x=i.normal.x>0?e.max.x:e.min.x,ha.y=i.normal.y>0?e.max.y:e.min.y,ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kh extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new D,za=new D,_l=new ze,vs=new ja,ua=new On,Pr=new D,xl=new D;class gc extends lt{constructor(e=new Bt,t=new kh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ga.fromBufferAttribute(t,i-1),za.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(za);e.setAttribute("lineDistance",new tt(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;_l.copy(i).invert(),vs.copy(e.ray).applyMatrix4(_l);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=l){const p=h.getX(v),b=h.getX(v+1),y=da(this,e,vs,c,p,b,v);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=da(this,e,vs,c,v,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=l){const p=da(this,e,vs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=da(this,e,vs,c,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function da(a,e,t,n,i,s,r){const o=a.geometry.attributes.position;if(Ga.fromBufferAttribute(o,i),za.fromBufferAttribute(o,s),t.distanceSqToSegment(Ga,za,Pr,xl)>n)return;Pr.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Pr);if(!(l<e.near||l>e.far))return{distance:l,point:xl.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}const vl=new D,Ml=new D;class nf extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)vl.fromBufferAttribute(t,i),Ml.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vl.distanceTo(Ml);e.setAttribute("lineDistance",new tt(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sf extends gc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gh extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yl=new ze,ko=new ja,fa=new On,pa=new D;class af extends lt{constructor(e=new Bt,t=new Gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;yl.copy(i).invert(),ko.copy(e.ray).applyMatrix4(yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=d,v=f;m<v;m++){const g=l.getX(m);pa.fromBufferAttribute(u,g),Sl(pa,g,c,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,v=f;m<v;m++)pa.fromBufferAttribute(u,m),Sl(pa,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sl(a,e,t,n,i,s,r){const o=ko.distanceSqToPoint(a);if(o<t){const c=new D;ko.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class zh extends Nt{constructor(e=[],t=Ti,n,i,s,r,o,c,l,h){super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ei extends Nt{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class is extends Nt{constructor(e,t,n=Nn,i,s,r,o=Ft,c=Ft,l,h=Zn,u=1){if(h!==Zn&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rf extends is{constructor(e,t=Nn,n=Ti,i,s,r=Ft,o=Ft,c,l=Zn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vh extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rt extends Bt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function m(v,g,p,b,y,M,w,E,R,_,T){const C=M/R,P=w/_,I=M/2,B=w/2,W=E/2,F=R+1,V=_+1;let k=0,$=0;const Q=new D;for(let le=0;le<V;le++){const _e=le*P-B;for(let Ee=0;Ee<F;Ee++){const Je=Ee*C-I;Q[v]=Je*b,Q[g]=_e*y,Q[p]=W,l.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ee/R),u.push(1-le/_),k+=1}}for(let le=0;le<_;le++)for(let _e=0;_e<R;_e++){const Ee=d+_e+F*le,Je=d+_e+F*(le+1),nt=d+(_e+1)+F*(le+1),Ne=d+(_e+1)+F*le;c.push(Ee,Je,Ne),c.push(Je,nt,Ne),$+=6}o.addGroup(f,$,T),f+=$,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yt extends Bt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const r=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,v=i+1,g=new D,p=new D;for(let b=0;b<=m;b++){let y=0,M=0,w=0,E=0;if(b<=n){const T=b/n,C=T*Math.PI/2;M=-h-e*Math.cos(C),w=e*Math.sin(C),E=-e*Math.cos(C),y=T*u}else if(b<=n+s){const T=(b-n)/s;M=-h+T*t,w=e,E=0,y=u+T*d}else{const T=(b-n-s)/n,C=T*Math.PI/2;M=h+e*Math.sin(C),w=e*Math.cos(C),E=e*Math.sin(C),y=u+d+T*u}const R=Math.max(0,Math.min(1,y/f));let _=0;b===0?_=.5/i:b===m&&(_=-.5/i);for(let T=0;T<=i;T++){const C=T/i,P=C*Math.PI*2,I=Math.sin(P),B=Math.cos(P);p.x=-w*B,p.y=M,p.z=w*I,o.push(p.x,p.y,p.z),g.set(-w*B,E,w*I),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+_,R)}if(b>0){const T=(b-1)*v;for(let C=0;C<i;C++){const P=T+C,I=T+C+1,B=b*v+C,W=b*v+C+1;r.push(P,I,B),r.push(I,W,B)}}}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Lt extends Bt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;b(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function b(){const M=new D,w=new D;let E=0;const R=(t-e)/n;for(let _=0;_<=s;_++){const T=[],C=_/s,P=C*(t-e)+e;for(let I=0;I<=i;I++){const B=I/i,W=B*c+o,F=Math.sin(W),V=Math.cos(W);w.x=P*F,w.y=-C*n+g,w.z=P*V,u.push(w.x,w.y,w.z),M.set(F,R,V).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-C),T.push(m++)}v.push(T)}for(let _=0;_<i;_++)for(let T=0;T<s;T++){const C=v[T][_],P=v[T+1][_],I=v[T+1][_+1],B=v[T][_+1];(e>0||T!==0)&&(h.push(C,P,B),E+=3),(t>0||T!==s-1)&&(h.push(P,I,B),E+=3)}l.addGroup(p,E,0),p+=E}function y(M){const w=m,E=new Ge,R=new D;let _=0;const T=M===!0?e:t,C=M===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;const P=m;for(let I=0;I<=i;I++){const W=I/i*c+o,F=Math.cos(W),V=Math.sin(W);R.x=T*V,R.y=g*C,R.z=T*F,u.push(R.x,R.y,R.z),d.push(0,C,0),E.x=F*.5+.5,E.y=V*.5*C+.5,f.push(E.x,E.y),m++}for(let I=0;I<i;I++){const B=w+I,W=P+I;M===!0?h.push(W,W+1,B):h.push(W+1,W,B),_+=3}l.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends Lt{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ja extends Bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new D,M=new D,w=new D;for(let E=0;E<t.length;E+=3)f(t[E+0],y),f(t[E+1],M),f(t[E+2],w),c(y,M,w,b)}function c(b,y,M,w){const E=w+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const T=b.clone().lerp(M,_/E),C=y.clone().lerp(M,_/E),P=E-_;for(let I=0;I<=P;I++)I===0&&_===E?R[_][I]=T:R[_][I]=T.clone().lerp(C,I/P)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){const C=Math.floor(T/2);T%2===0?(d(R[_][C+1]),d(R[_+1][C]),d(R[_][C])):(d(R[_][C+1]),d(R[_+1][C+1]),d(R[_+1][C]))}}function l(b){const y=new D;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(b),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function h(){const b=new D;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];const M=g(b)/2/Math.PI+.5,w=p(b)/Math.PI+.5;r.push(M,1-w)}m(),u()}function u(){for(let b=0;b<r.length;b+=6){const y=r[b+0],M=r[b+2],w=r[b+4],E=Math.max(y,M,w),R=Math.min(y,M,w);E>.9&&R<.1&&(y<.2&&(r[b+0]+=1),M<.2&&(r[b+2]+=1),w<.2&&(r[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function f(b,y){const M=b*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function m(){const b=new D,y=new D,M=new D,w=new D,E=new Ge,R=new Ge,_=new Ge;for(let T=0,C=0;T<s.length;T+=9,C+=6){b.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),E.set(r[C+0],r[C+1]),R.set(r[C+2],r[C+3]),_.set(r[C+4],r[C+5]),w.copy(b).add(y).add(M).divideScalar(3);const P=g(w);v(E,C+0,b,P),v(R,C+2,y,P),v(_,C+4,M,P)}}function v(b,y,M,w){w<0&&b.x===1&&(r[y]=b.x-1),M.x===0&&M.z===0&&(r[y]=w/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.vertices,e.indices,e.radius,e.detail)}}class bc extends Ja{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bc(e.radius,e.detail)}}class _c extends Ja{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _c(e.radius,e.detail)}}class Gt extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const b=p*d-r;for(let y=0;y<l;y++){const M=y*u-s;m.push(M,-b,0),v.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const y=b+l*p,M=b+l*(p+1),w=b+1+l*(p+1),E=b+1+l*p;f.push(y,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.widthSegments,e.heightSegments)}}class xc extends Bt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new D,m=new Ge;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=s+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const b=p+g,y=b,M=b+n+1,w=b+n+2,E=b+1;o.push(y,M,E),o.push(M,w,E)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class St extends Bt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const b=[],y=p/n;let M=0;p===0&&r===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const E=w/t;u.x=-e*Math.cos(i+E*s)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(i+E*s)*Math.sin(r+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+M,1-y),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const y=h[p][b+1],M=h[p][b],w=h[p+1][b],E=h[p+1][b+1];(p!==0||r>0)&&f.push(y,M,E),(p!==n-1||c<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new tt(m,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vs extends Bt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],u=[],d=new D,f=new D,m=new D;for(let v=0;v<=n;v++){const g=r+v/n*o;for(let p=0;p<=i;p++){const b=p/i*s;f.x=(e+t*Math.cos(g))*Math.cos(b),f.y=(e+t*Math.cos(g))*Math.sin(b),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){const p=(i+1)*v+g-1,b=(i+1)*(v-1)+g-1,y=(i+1)*(v-1)+g,M=(i+1)*v+g;c.push(p,b,M),c.push(b,y,M)}this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ss(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];if(El(i))i.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(El(i[0])){const s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kt(a){const e={};for(let t=0;t<a.length;t++){const n=ss(a[t]);for(const i in n)e[i]=n[i]}return e}function El(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function of(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Hh(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const cf={clone:ss,merge:Kt};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uf extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oe extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bn extends Oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class df extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ff extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ma(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function pf(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tl(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function Wh(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class cs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mf extends cs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ji:s=e,o=2*t-n;break;case Oa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ji:r=e,c=2*n-t;break;case Oa:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,b=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*v+.5*m,M=f*g-f*v;for(let w=0;w!==o;++w)s[w]=p*r[h+w]+b*r[l+w]+y*r[c+w]+M*r[u+w];return s}}class qh extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[l+d]*u+r[c+d]*h;return s}}class gf extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bf extends cs{interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const v=(n-t)/(i-t),g=1-v;for(let p=0;p!==o;++p)s[p]=r[l+p]*g+r[c+p]*v;return s}const f=o*2,m=e-1;for(let v=0;v!==o;++v){const g=r[l+v],p=r[c+v],b=m*f+v*2,y=d[b],M=d[b+1],w=e*f+v*2,E=u[w],R=u[w+1];let _=(n-t)/(i-t),T,C,P,I,B;for(let W=0;W<8;W++){T=_*_,C=T*_,P=1-_,I=P*P,B=I*P;const V=B*t+3*I*_*y+3*P*T*E+C*i-n;if(Math.abs(V)<1e-10)break;const k=3*I*(y-t)+6*P*_*(E-y)+3*T*(i-E);if(Math.abs(k)<1e-10)break;_=_-V/k,_=Math.max(0,Math.min(1,_))}s[v]=B*g+3*I*_*M+3*P*T*R+C*p}return s}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ma(t,this.TimeBufferType),this.values=ma(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ma(e.times,Array),values:ma(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new bf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case ar:t=this.InterpolantFactoryMethodSmooth;break;case Xc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return ar;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Re("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Re("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Re("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Re("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&cd(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Re("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ar,s=e.length-1;let r=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Fs;class ls extends Mn{constructor(e,t,n){super(e,t,n)}}ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Ls;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Xh extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}Xh.prototype.ValueTypeName="color";class as extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}as.prototype.ValueTypeName="number";class _f extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)an.slerpFlat(s,0,r,l-o,r,l,c);return s}}class rs extends Mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _f(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Mn{constructor(e,t,n){super(e,t,n)}}hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ls;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}os.prototype.ValueTypeName="vector";class Go{constructor(e="",t=-1,n=[],i=rc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(vf(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=pf(c);c=Tl(c,1,h),l=Tl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new as(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Re("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const g=[],p=[];Wh(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const g=[],p=[];for(let b=0;b!==d[m].morphTargets.length;++b){const y=d[m];g.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new as(".morphTargetInfluence["+v+"]",g,p))}c=f.length*r}else{const f=".bones["+t[u].name+"]";n(os,f+".position",d,"pos",i),n(rs,f+".quaternion",d,"rot",i),n(os,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xf(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return Xh;case"quaternion":return rs;case"bool":case"boolean":return ls;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function vf(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xf(a.type);if(a.times===void 0){const t=[],n=[];Wh(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Xn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(wl(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!wl(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function wl(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Mf{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yf=new Mf;class us{constructor(e){this.manager=e!==void 0?e:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}us.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class Sf extends Error{constructor(e,t){super(e),this.response=t}}class jh extends us{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=qn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const g=new ReadableStream({start(p){b();function b(){u.read().then(({done:y,value:M})=>{if(y)p.close();else{v+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let E=0,R=h.length;E<R;E++){const _=h[E];_.onProgress&&_.onProgress(w)}p.enqueue(M),b()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Sf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Xn.add(`file:${e}`,l);const h=qn[e];delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=qn[e];if(h===void 0)throw this.manager.itemError(e),l;delete qn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vi=new WeakMap;class Ef extends us{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xn.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=Vi.get(r);u===void 0&&(u=[],Vi.set(r,u)),u.push({onLoad:t,onError:i})}return r}const o=Us("img");function c(){h(),t&&t(this);const u=Vi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Vi.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Xn.remove(`image:${e}`);const d=Vi.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}Vi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Ya extends us{constructor(e){super(e)}load(e,t,n,i){const s=new Nt,r=new Ef(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Hs extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Tf extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Dr=new ze,Al=new D,Rl=new D;class vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rl),t.updateMatrixWorld(),Dr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ns||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ga=new D,ba=new an,En=new D;class Kh extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ga,ba,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,ba,En.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ga,ba,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,ba,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new D,Cl=new Ge,Pl=new Ge;class Jt extends Kh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Pl),t.subVectors(Pl,Cl)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wf extends vc{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Af extends Hs{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Rf extends vc{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Cf extends Hs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Za extends Kh{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pf extends vc{constructor(){super(new Za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jh extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Pf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Df extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ir=new WeakMap;class If extends us{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Xn.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{Ir.has(r)===!0?(i&&i(Ir.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Xn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),Ir.set(c,l),Xn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Xn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hi=-90,Wi=1;class Lf extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jt(Hi,Wi,e,t);i.layers=this.layers,this.add(i);const s=new Jt(Hi,Wi,e,t);s.layers=this.layers,this.add(s);const r=new Jt(Hi,Wi,e,t);r.layers=this.layers,this.add(r);const o=new Jt(Hi,Wi,e,t);o.layers=this.layers,this.add(o);const c=new Jt(Hi,Wi,e,t);c.layers=this.layers,this.add(c);const l=new Jt(Hi,Wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ff extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){an.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;an.multiplyQuaternionsFlat(e,r,e,t,e,n),an.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const Mc="\\[\\]\\.:\\/",Uf=new RegExp("["+Mc+"]","g"),yc="[^"+Mc+"]",Of="[^"+Mc.replace("\\.","")+"]",Bf=/((?:WC+[\/:])*)/.source.replace("WC",yc),kf=/(WCOD+)?/.source.replace("WCOD",Of),Gf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Vf=new RegExp("^"+Bf+kf+Gf+zf+"$"),Hf=["material","materials","bones","map"];class Wf{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uf,"")}static parseTrackName(e){const t=Vf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Hf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;Re("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=Wf;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,o=new Array(r),c={endingStart:Ki,endingEnd:Ki};for(let l=0;l!==r;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings&&Object.assign(c,h.settings),h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ac,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Zu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case rc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===Yu;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Ju){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ji,i.endingEnd=Ji):(e?i.endingStart=this.zeroSlopeAtStart?Ji:Ki:i.endingStart=Oa,t?i.endingEnd=this.zeroSlopeAtEnd?Ji:Ki:i.endingEnd=Oa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const Xf=new Float32Array(1);class Sc extends di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,r[u]=m;else{if(m=r[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;m=new Nf($e.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),r[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qh(new Float32Array(2),new Float32Array(2),1,Xf),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Go.findByName(i,e):e;const o=r!==null?r.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=rc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new qf(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Go.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){const l=r[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class jf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ic=class Ic{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Ic.prototype.isMatrix2=!0;let Dl=Ic;function Il(a,e,t,n){const i=Kf(n);switch(t){case Ch:return a*e;case tc:return a*e/i.components*i.byteLength;case nc:return a*e/i.components*i.byteLength;case wi:return a*e*2/i.components*i.byteLength;case ic:return a*e*2/i.components*i.byteLength;case Ph:return a*e*3/i.components*i.byteLength;case dn:return a*e*4/i.components*i.byteLength;case sc:return a*e*4/i.components*i.byteLength;case Ca:case Pa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ia:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ao:case oo:return Math.max(a,16)*Math.max(e,8)/4;case so:case ro:return Math.max(a,8)*Math.max(e,8)/2;case co:case lo:case uo:case fo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ho:case Na:case po:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ro:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Co:case Po:case Do:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Io:case Lo:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ua:case Fo:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kf(a){switch(a){case sn:case Th:return{byteLength:1,components:1};case Ds:case wh:case Yn:return{byteLength:2,components:1};case Qo:case ec:return{byteLength:2,components:4};case Nn:case $o:case un:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yh(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Jf(a){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=a.createBuffer();a.bindBuffer(c,d),a.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=a.SHORT;else if(l instanceof Uint32Array)f=a.UNSIGNED_INT;else if(l instanceof Int32Array)f=a.INT;else if(l instanceof Int8Array)f=a.BYTE;else if(l instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(a.bindBuffer(l,o),u.length===0)a.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];a.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Yf,alphahash_pars_fragment:Zf,alphamap_fragment:$f,alphamap_pars_fragment:Qf,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:ap,begin_vertex:rp,beginnormal_vertex:op,bsdfs:cp,iridescence_fragment:lp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:bp,color_vertex:_p,common:xp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:yp,displacementmap_vertex:Sp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Tp,colorspace_fragment:wp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Vp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Fp,fog_fragment:Np,fog_pars_fragment:Up,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Bp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Gp,lights_pars_begin:zp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Wp,lights_phong_fragment:qp,lights_phong_pars_fragment:Xp,lights_physical_fragment:jp,lights_physical_pars_fragment:Kp,lights_fragment_begin:Jp,lights_fragment_maps:Yp,lights_fragment_end:Zp,lightprobes_pars_fragment:$p,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:cm,morphinstance_vertex:lm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:bm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Sm,opaque_fragment:Em,packing:Tm,premultiplied_alpha_fragment:wm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Lm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:km,specularmap_fragment:Gm,specularmap_pars_fragment:zm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Hm,transmission_fragment:Wm,transmission_pars_fragment:qm,uv_pars_fragment:Xm,uv_pars_vertex:jm,uv_vertex:Km,worldpos_vertex:Jm,background_vert:Ym,background_frag:Zm,backgroundCube_vert:$m,backgroundCube_frag:Qm,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distance_vert:sg,distance_frag:ag,equirect_vert:rg,equirect_frag:og,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:bg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:yg,meshtoon_frag:Sg,points_vert:Eg,points_frag:Tg,shadow_vert:wg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},ce={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},An={basic:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new we(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Kt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Kt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Kt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Kt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Kt([ce.lights,ce.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};An.physical={uniforms:Kt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const _a={r:0,b:0,g:0},Pg=new ze,Zh=new Ie;Zh.set(-1,0,0,0,1,0,0,0,1);function Dg(a,e,t,n,i,s){const r=new we(0);let o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){const M=b.backgroundBlurriness>0;y=e.get(y,M)}return y}function m(b){let y=!1;const M=f(b);M===null?g(r,o):M&&M.isColor&&(g(M,1),y=!0);const w=a.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(b,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===Xa)?(l===void 0&&(l=new xe(new Rt(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:ss(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zh),l.material.toneMapped=We.getTransfer(M.colorSpace)!==Qe,(h!==M||u!==M.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=a.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xe(new Gt(2,2),new Un({name:"BackgroundMaterial",uniforms:ss(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=We.getTransfer(M.colorSpace)!==Qe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=a.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,y){b.getRGB(_a,Hh(a)),t.buffers.color.setClear(_a.r,_a.g,_a.b,y,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,y=1){r.set(b),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(r,o)},render:m,addToRenderList:v,dispose:p}}function Ig(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function o(P,I,B,W,F){let V=!1;const k=u(P,W,B,I);s!==k&&(s=k,l(s.object)),V=f(P,W,B,F),V&&m(P,W,B,F),F!==null&&e.update(F,a.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,M(P,I,B,W),F!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return a.createVertexArray()}function l(P){return a.bindVertexArray(P)}function h(P){return a.deleteVertexArray(P)}function u(P,I,B,W){const F=W.wireframe===!0;let V=n[I.id];V===void 0&&(V={},n[I.id]=V);const k=P.isInstancedMesh===!0?P.id:0;let $=V[k];$===void 0&&($={},V[k]=$);let Q=$[B.id];Q===void 0&&(Q={},$[B.id]=Q);let le=Q[F];return le===void 0&&(le=d(c()),Q[F]=le),le}function d(P){const I=[],B=[],W=[];for(let F=0;F<t;F++)I[F]=0,B[F]=0,W[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:W,object:P,attributes:{},index:null}}function f(P,I,B,W){const F=s.attributes,V=I.attributes;let k=0;const $=B.getAttributes();for(const Q in $)if($[Q].location>=0){const _e=F[Q];let Ee=V[Q];if(Ee===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),_e===void 0||_e.attribute!==Ee||Ee&&_e.data!==Ee.data)return!0;k++}return s.attributesNum!==k||s.index!==W}function m(P,I,B,W){const F={},V=I.attributes;let k=0;const $=B.getAttributes();for(const Q in $)if($[Q].location>=0){let _e=V[Q];_e===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor));const Ee={};Ee.attribute=_e,_e&&_e.data&&(Ee.data=_e.data),F[Q]=Ee,k++}s.attributes=F,s.attributesNum=k,s.index=W}function v(){const P=s.newAttributes;for(let I=0,B=P.length;I<B;I++)P[I]=0}function g(P){p(P,0)}function p(P,I){const B=s.newAttributes,W=s.enabledAttributes,F=s.attributeDivisors;B[P]=1,W[P]===0&&(a.enableVertexAttribArray(P),W[P]=1),F[P]!==I&&(a.vertexAttribDivisor(P,I),F[P]=I)}function b(){const P=s.newAttributes,I=s.enabledAttributes;for(let B=0,W=I.length;B<W;B++)I[B]!==P[B]&&(a.disableVertexAttribArray(B),I[B]=0)}function y(P,I,B,W,F,V,k){k===!0?a.vertexAttribIPointer(P,I,B,F,V):a.vertexAttribPointer(P,I,B,W,F,V)}function M(P,I,B,W){v();const F=W.attributes,V=B.getAttributes(),k=I.defaultAttributeValues;for(const $ in V){const Q=V[$];if(Q.location>=0){let le=F[$];if(le===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){const _e=le.normalized,Ee=le.itemSize,Je=e.get(le);if(Je===void 0)continue;const nt=Je.buffer,Ne=Je.type,J=Je.bytesPerElement,de=Ne===a.INT||Ne===a.UNSIGNED_INT||le.gpuType===$o;if(le.isInterleavedBufferAttribute){const ie=le.data,Ae=ie.stride,De=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)p(Q.location+Ce,ie.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)g(Q.location+Ce);a.bindBuffer(a.ARRAY_BUFFER,nt);for(let Ce=0;Ce<Q.locationSize;Ce++)y(Q.location+Ce,Ee/Q.locationSize,Ne,_e,Ae*J,(De+Ee/Q.locationSize*Ce)*J,de)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie,le.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<Q.locationSize;ie++)g(Q.location+ie);a.bindBuffer(a.ARRAY_BUFFER,nt);for(let ie=0;ie<Q.locationSize;ie++)y(Q.location+ie,Ee/Q.locationSize,Ne,_e,Ee*J,Ee/Q.locationSize*ie*J,de)}}else if(k!==void 0){const _e=k[$];if(_e!==void 0)switch(_e.length){case 2:a.vertexAttrib2fv(Q.location,_e);break;case 3:a.vertexAttrib3fv(Q.location,_e);break;case 4:a.vertexAttrib4fv(Q.location,_e);break;default:a.vertexAttrib1fv(Q.location,_e)}}}}b()}function w(){T();for(const P in n){const I=n[P];for(const B in I){const W=I[B];for(const F in W){const V=W[F];for(const k in V)h(V[k].object),delete V[k];delete W[F]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const B in I){const W=I[B];for(const F in W){const V=W[F];for(const k in V)h(V[k].object),delete V[k];delete W[F]}}delete n[P.id]}function R(P){for(const I in n){const B=n[I];for(const W in B){const F=B[W];if(F[P.id]===void 0)continue;const V=F[P.id];for(const k in V)h(V[k].object),delete V[k];delete F[P.id]}}}function _(P){for(const I in n){const B=n[I],W=P.isInstancedMesh===!0?P.id:0,F=B[W];if(F!==void 0){for(const V in F){const k=F[V];for(const $ in k)h(k[$].object),delete k[$];delete F[V]}delete B[W],Object.keys(B).length===0&&delete n[I]}}}function T(){C(),r=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function Lg(a,e,t){let n;function i(c){n=c}function s(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(a.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Fg(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==dn&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==sn&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!_)}function c(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Me("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=a.getParameter(a.MAX_SAMPLES),E=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:M,maxSamples:w,samples:E}}function Ng(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new xi,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{const b=s?0:n,y=b*4;let M=p.clippingState||null;c.value=M,M=h(m,d,y,f);for(let w=0;w!==y;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,M=f;y!==v;++y,M+=4)r.copy(u[y]).applyMatrix4(b,o),r.normal.toArray(g,M),g[M+3]=r.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const li=4,Ll=[.125,.215,.35,.446,.526,.582],Mi=20,Ug=256,Ms=new Za,Fl=new we;let Lr=null,Fr=0,Nr=0,Ur=!1;const Og=new D;class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:r=256,position:o=Og}=s;Lr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lr,Fr,Nr),this._renderer.xr.enabled=Ur,e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Yn,format:dn,colorSpace:on,depthBuffer:!1},i=Ul(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ul(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bg(s)),this._blurMaterial=Gg(s,e,t),this._ggxMaterial=kg(s,e,t)}return i}_compileMaterial(e){const t=new xe(new Bt,e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,n,i,s){const c=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Fl),u.toneMapping=In,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Rt,new Tt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Fl),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):M===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const w=this._cubeSize;qi(i,M*w,y>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(v,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ti||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;qi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-li?n-m+li:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,qi(s,g,p,3*v,2*v),i.setRenderTarget(s),i.render(o,Ms),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,qi(e,g,p,3*v,2*v),i.setRenderTarget(e),i.render(o,Ms)}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),v=s/m,g=isFinite(s)?1+Math.floor(h*v):Mi;g>Mi&&Me(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);const p=[];let b=0;for(let R=0;R<Mi;++R){const _=R/v,T=Math.exp(-_*_/2);p.push(T),R===0?b+=T:R<g&&(b+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const M=this._sizeLods[i],w=3*M*(i>y-li?i-y+li:0),E=4*(this._cubeSize-M);qi(t,w,E,3*M,2*M),c.setRenderTarget(t),c.render(u,Ms)}}function Bg(a){const e=[],t=[],n=[];let i=a;const s=a-li+1+Ll.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>a-li?c=Ll[r-a+li-1]:r===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,b=new Float32Array(v*m*f),y=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,_=E>2?0:-1,T=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];b.set(T,v*m*E),y.set(d,g*m*E);const C=[E,E,E,E,E,E];M.set(C,p*m*E)}const w=new Bt;w.setAttribute("position",new zt(b,v)),w.setAttribute("uv",new zt(y,g)),w.setAttribute("faceIndex",new zt(M,p)),n.push(new xe(w,null)),i>li&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ul(a,e,t){const n=new Ln(a,e,t);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function kg(a,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ug,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Gg(a,e,t){const n=new Float32Array(Mi),i=new D(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ol(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Bl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $h extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rt(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:jn});s.uniforms.tEquirect.value=t;const r=new xe(i,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ct),new Lf(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}function zg(a){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?r(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===ir||f===sr)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new $h(m.height);return v.fromEquirectangularTexture(a,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const f=d.mapping,m=f===ir||f===sr,v=f===Ti||f===ts;if(m||v){let g=t.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Nl(a)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const b=d.image;return m&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new Nl(a)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===ir?d.mapping=Ti:f===sr&&(d.mapping=ts),d}function c(d){let f=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Vg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bo("WebGLRenderer: "+n+" extension not supported."),i}}}function Hg(a,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],a.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const b=f.array;v=f.version;for(let y=0,M=b.length;y<M;y+=3){const w=b[y+0],E=b[y+1],R=b[y+2];d.push(w,E,E,R,R,w)}}else{const b=m.array;v=m.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const w=y+0,E=y+1,R=y+2;d.push(w,E,E,R,R,w)}}const g=new(m.count>=65535?Oh:Uh)(d,1);g.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Wg(a,e,t){let n;function i(u){n=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function c(u,d){a.drawElements(n,d,s,u*r),t.update(d,n,1)}function l(u,d,f){f!==0&&(a.drawElementsInstanced(n,d,s,u*r,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function qg(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Re("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xg(a,e,t){const n=new WeakMap,i=new ct;function s(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),g===!0&&(M=3);let w=o.attributes.position.count*M,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*E*4*u),_=new Lh(R,w,E,u);_.type=un,_.needsUpdate=!0;const T=M*4;for(let P=0;P<u;P++){const I=p[P],B=b[P],W=y[P],F=w*E*4*P;for(let V=0;V<I.count;V++){const k=V*T;m===!0&&(i.fromBufferAttribute(I,V),R[F+k+0]=i.x,R[F+k+1]=i.y,R[F+k+2]=i.z,R[F+k+3]=0),v===!0&&(i.fromBufferAttribute(B,V),R[F+k+4]=i.x,R[F+k+5]=i.y,R[F+k+6]=i.z,R[F+k+7]=0),g===!0&&(i.fromBufferAttribute(W,V),R[F+k+8]=i.x,R[F+k+9]=i.y,R[F+k+10]=i.z,R[F+k+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Ge(w,E)},n.set(o,d),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(a,"morphTargetBaseInfluence",v),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function jg(a,e,t,n,i){let s=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const Kg={[bh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[Zo]:"ACES_FILMIC_TONE_MAPPING",[Mh]:"AGX_TONE_MAPPING",[yh]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function Jg(a,e,t,n,i){const s=new Ln(e,t,{type:a,depthBuffer:n,stencilBuffer:i,depthTexture:n?new is(e,t):void 0}),r=new Ln(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),o=new Bt;o.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new tt([0,2,0,0,2,0],2));const c=new uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new xe(o,c),h=new Za(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,v=null,g=[],p=!1;this.setSize=function(b,y){s.setSize(b,y),r.setSize(b,y);for(let M=0;M<g.length;M++){const w=g[M];w.setSize&&w.setSize(b,y)}},this.setEffects=function(b){g=b,p=g.length>0&&g[0].isRenderPass===!0;const y=s.width,M=s.height;for(let w=0;w<g.length;w++){const E=g[w];E.setSize&&E.setSize(y,M)}},this.begin=function(b,y){if(f||b.toneMapping===In&&g.length===0)return!1;if(v=y,y!==null){const M=y.width,w=y.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return p===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=In,!0},this.hasRenderPass=function(){return p},this.end=function(b,y){b.toneMapping=m,f=!0;let M=s,w=r;for(let E=0;E<g.length;E++){const R=g[E];if(R.enabled!==!1&&(R.render(b,w,M,y),R.needsSwap!==!1)){const _=M;M=w,w=_}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,c.defines={},We.getTransfer(u)===Qe&&(c.defines.SRGB_TRANSFER="");const E=Kg[d];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(v),b.render(l,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),c.dispose()}}const Qh=new Nt,zo=new is(1,1),eu=new Lh,tu=new Fd,nu=new zh,kl=[],Gl=[],zl=new Float32Array(16),Vl=new Float32Array(9),Hl=new Float32Array(4);function ds(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=kl[i];if(s===void 0&&(s=new Float32Array(i),kl[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Ut(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ot(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Qa(a,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Yg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Zg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;a.uniform2fv(this.addr,e),Ot(t,e)}}function $g(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;a.uniform3fv(this.addr,e),Ot(t,e)}}function Qg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;a.uniform4fv(this.addr,e),Ot(t,e)}}function e0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Hl.set(n),a.uniformMatrix2fv(this.addr,!1,Hl),Ot(t,n)}}function t0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;Vl.set(n),a.uniformMatrix3fv(this.addr,!1,Vl),Ot(t,n)}}function n0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;zl.set(n),a.uniformMatrix4fv(this.addr,!1,zl),Ot(t,n)}}function i0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function s0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;a.uniform2iv(this.addr,e),Ot(t,e)}}function a0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;a.uniform3iv(this.addr,e),Ot(t,e)}}function r0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;a.uniform4iv(this.addr,e),Ot(t,e)}}function o0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function c0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;a.uniform2uiv(this.addr,e),Ot(t,e)}}function l0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;a.uniform3uiv(this.addr,e),Ot(t,e)}}function h0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;a.uniform4uiv(this.addr,e),Ot(t,e)}}function u0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(zo.compareFunction=t.isReversedDepthBuffer()?cc:oc,s=zo):s=Qh,t.setTexture2D(e||s,i)}function d0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tu,i)}function f0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nu,i)}function p0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eu,i)}function m0(a){switch(a){case 5126:return Yg;case 35664:return Zg;case 35665:return $g;case 35666:return Qg;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return a0;case 35669:case 35673:return r0;case 5125:return o0;case 36294:return c0;case 36295:return l0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(a,e){a.uniform1fv(this.addr,e)}function b0(a,e){const t=ds(e,this.size,2);a.uniform2fv(this.addr,t)}function _0(a,e){const t=ds(e,this.size,3);a.uniform3fv(this.addr,t)}function x0(a,e){const t=ds(e,this.size,4);a.uniform4fv(this.addr,t)}function v0(a,e){const t=ds(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function M0(a,e){const t=ds(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function y0(a,e){const t=ds(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function S0(a,e){a.uniform1iv(this.addr,e)}function E0(a,e){a.uniform2iv(this.addr,e)}function T0(a,e){a.uniform3iv(this.addr,e)}function w0(a,e){a.uniform4iv(this.addr,e)}function A0(a,e){a.uniform1uiv(this.addr,e)}function R0(a,e){a.uniform2uiv(this.addr,e)}function C0(a,e){a.uniform3uiv(this.addr,e)}function P0(a,e){a.uniform4uiv(this.addr,e)}function D0(a,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Ut(n,s)||(a.uniform1iv(this.addr,s),Ot(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=zo:r=Qh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function I0(a,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Ut(n,s)||(a.uniform1iv(this.addr,s),Ot(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||tu,s[r])}function L0(a,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Ut(n,s)||(a.uniform1iv(this.addr,s),Ot(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||nu,s[r])}function F0(a,e,t){const n=this.cache,i=e.length,s=Qa(t,i);Ut(n,s)||(a.uniform1iv(this.addr,s),Ot(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||eu,s[r])}function N0(a){switch(a){case 5126:return g0;case 35664:return b0;case 35665:return _0;case 35666:return x0;case 35674:return v0;case 35675:return M0;case 35676:return y0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return T0;case 35669:case 35673:return w0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return F0}}class U0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m0(t.type)}}class O0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}}class B0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function Wl(a,e){a.seq.push(e),a.map[e.id]=e}function k0(a,e,t){const n=a.name,i=n.length;for(Or.lastIndex=0;;){const s=Or.exec(n),r=Or.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Wl(t,l===void 0?new U0(o,a,e):new O0(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new B0(o),Wl(t,u)),t=u}}}class La{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);k0(o,c,this)}const i=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function ql(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const G0=37297;let z0=0;function V0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Xl=new Ie;function H0(a){We._getMatrix(Xl,We.workingColorSpace,a);const e=`mat3( ${Xl.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(a)){case Ba:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function jl(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+V0(a.getShaderSource(e),o)}else return s}function W0(a,e){const t=H0(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const q0={[bh]:"Linear",[_h]:"Reinhard",[xh]:"Cineon",[Zo]:"ACESFilmic",[Mh]:"AgX",[yh]:"Neutral",[vh]:"Custom"};function X0(a,e){const t=q0[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xa=new D;function j0(){We.getLuminanceCoefficients(xa);const a=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function J0(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y0(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ws(a){return a!==""}function Kl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(a){return a.replace(Z0,Q0)}const $0=new Map;function Q0(a,e){let t=Be[e];if(t===void 0){const n=$0.get(e);if(n!==void 0)t=Be[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(a){return a.replace(eb,tb)}function tb(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const nb={[Aa]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function ib(a){return nb[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sb={[Ti]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function ab(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":sb[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const rb={[ts]:"ENVMAP_MODE_REFRACTION"};function ob(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":rb[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cb={[gh]:"ENVMAP_BLENDING_MULTIPLY",[Xu]:"ENVMAP_BLENDING_MIX",[ju]:"ENVMAP_BLENDING_ADD"};function lb(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":cb[a.combine]||"ENVMAP_BLENDING_NONE"}function hb(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ub(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=ib(t),l=ab(t),h=ob(t),u=lb(t),d=hb(t),f=K0(t),m=J0(s),v=i.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ws).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(g=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Be.tonemapping_pars_fragment:"",t.toneMapping!==In?X0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,W0("linearToOutputTexel",t.outputColorSpace),j0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),r=Vo(r),r=Kl(r,t),r=Jl(r,t),o=Vo(o),o=Kl(o,t),o=Jl(o,t),r=Yl(r),o=Yl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+g+r,M=b+p+o,w=ql(i,i.VERTEX_SHADER,y),E=ql(i,i.FRAGMENT_SHADER,M);i.attachShader(v,w),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(P){if(a.debug.checkShaderErrors){const I=i.getProgramInfoLog(v)||"",B=i.getShaderInfoLog(w)||"",W=i.getShaderInfoLog(E)||"",F=I.trim(),V=B.trim(),k=W.trim();let $=!0,Q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,v,w,E);else{const le=jl(i,w,"vertex"),_e=jl(i,E,"fragment");Re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+le+`
`+_e)}else F!==""?Me("WebGLProgram: Program Info Log:",F):(V===""||k==="")&&(Q=!1);Q&&(P.diagnostics={runnable:$,programLog:F,vertexShader:{log:V,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(w),i.deleteShader(E),_=new La(i,v),T=Y0(i,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,G0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let db=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new pb(e),t.set(e,n)),n}}class pb{constructor(e){this.id=db++,this.code=e,this.usedTimes=0}}function mb(a){return a===wi||a===Na||a===Ua}function gb(a,e,t,n,i,s){const r=new Fh,o=new fb,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,C,P,I,B){const W=P.fog,F=I.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=e.get(_.envMap||V,k),Q=$&&$.mapping===Xa?$.image.height:null,le=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Me("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const _e=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ee=_e!==void 0?_e.length:0;let Je=0;F.morphAttributes.position!==void 0&&(Je=1),F.morphAttributes.normal!==void 0&&(Je=2),F.morphAttributes.color!==void 0&&(Je=3);let nt,Ne,J,de;if(le){const Le=An[le];nt=Le.vertexShader,Ne=Le.fragmentShader}else nt=_.vertexShader,Ne=_.fragmentShader,o.update(_),J=o.getVertexShaderID(_),de=o.getFragmentShaderID(_);const ie=a.getRenderTarget(),Ae=a.state.buffers.depth.getReversed(),De=I.isInstancedMesh===!0,Ce=I.isBatchedMesh===!0,mt=!!_.map,Xe=!!_.matcap,it=!!$,dt=!!_.aoMap,He=!!_.lightMap,Pt=!!_.bumpMap,gt=!!_.normalMap,$t=!!_.displacementMap,N=!!_.emissiveMap,Dt=!!_.metalnessMap,je=!!_.roughnessMap,ht=_.anisotropy>0,oe=_.clearcoat>0,bt=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,j=ht&&!!_.anisotropyMap,Z=oe&&!!_.clearcoatMap,ee=oe&&!!_.clearcoatNormalMap,re=oe&&!!_.clearcoatRoughnessMap,q=A&&!!_.iridescenceMap,K=A&&!!_.iridescenceThicknessMap,fe=x&&!!_.sheenColorMap,ge=x&&!!_.sheenRoughnessMap,se=!!_.specularMap,te=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Ue=O&&!!_.transmissionMap,Ze=O&&!!_.thicknessMap,L=!!_.gradientMap,ne=!!_.alphaMap,X=_.alphaTest>0,pe=!!_.alphaHash,ae=!!_.extensions;let Y=In;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Y=a.toneMapping);const ye={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:Ne,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&I._colorsTexture!==null,instancing:De,instancingColor:De&&I.instanceColor!==null,instancingMorph:De&&I.morphTexture!==null,outputColorSpace:ie===null?a.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:mt,matcap:Xe,envMap:it,envMapMode:it&&$.mapping,envMapCubeUVHeight:Q,aoMap:dt,lightMap:He,bumpMap:Pt,normalMap:gt,displacementMap:$t,emissiveMap:N,normalMapObjectSpace:gt&&_.normalMapType===ed,normalMapTangentSpace:gt&&_.normalMapType===Uo,packedNormalMap:gt&&_.normalMapType===Uo&&mb(_.normalMap.format),metalnessMap:Dt,roughnessMap:je,anisotropy:ht,anisotropyMap:j,clearcoat:oe,clearcoatMap:Z,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,dispersion:bt,iridescence:A,iridescenceMap:q,iridescenceThicknessMap:K,sheen:x,sheenColorMap:fe,sheenRoughnessMap:ge,specularMap:se,specularColorMap:te,specularIntensityMap:Pe,transmission:O,transmissionMap:Ue,thicknessMap:Ze,gradientMap:L,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:X,alphaHash:pe,combine:_.combine,mapUv:mt&&m(_.map.channel),aoMapUv:dt&&m(_.aoMap.channel),lightMapUv:He&&m(_.lightMap.channel),bumpMapUv:Pt&&m(_.bumpMap.channel),normalMapUv:gt&&m(_.normalMap.channel),displacementMapUv:$t&&m(_.displacementMap.channel),emissiveMapUv:N&&m(_.emissiveMap.channel),metalnessMapUv:Dt&&m(_.metalnessMap.channel),roughnessMapUv:je&&m(_.roughnessMap.channel),anisotropyMapUv:j&&m(_.anisotropyMap.channel),clearcoatMapUv:Z&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(_.sheenRoughnessMap.channel),specularMapUv:se&&m(_.specularMap.channel),specularColorMapUv:te&&m(_.specularColorMap.channel),specularIntensityMapUv:Pe&&m(_.specularIntensityMap.channel),transmissionMapUv:Ue&&m(_.transmissionMap.channel),thicknessMapUv:Ze&&m(_.thicknessMap.channel),alphaMapUv:ne&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(gt||ht),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(mt||ne),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Je,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Y,decodeVideoTexture:mt&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:N&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===It,flipSided:_.side===Zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),b(T,_),T.push(a.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),_.push(r.mask)}function y(_){const T=f[_.type];let C;if(T){const P=An[T];C=cf.clone(P.uniforms)}else C=_.uniforms;return C}function M(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new ub(a,T,_,i),l.push(C),h.set(T,C)),C}function w(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:R}}function bb(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function _b(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function $l(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ql(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,g,p){let b=a[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:r(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},a[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=r(d),b.groupOrder=v,b.renderOrder=d.renderOrder,b.z=g,b.group=p),e++,b}function c(d,f,m,v,g,p){const b=o(d,f,m,v,g,p);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function l(d,f,m,v,g,p){const b=o(d,f,m,v,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):t.unshift(b)}function h(d,f){t.length>1&&t.sort(d||_b),n.length>1&&n.sort(f||$l),i.length>1&&i.sort(f||$l)}function u(){for(let d=e,f=a.length;d<f;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function xb(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Ql,a.set(n,[r])):i>=s.length?(r=new Ql,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function vb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return a[e.id]=t,t}}}function Mb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let yb=0;function Sb(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Eb(a){const e=new vb,t=Mb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,s=new ze,r=new ze;function o(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,b=0,y=0,M=0,w=0,E=0,R=0;l.sort(Sb);for(let T=0,C=l.length;T<C;T++){const P=l[T],I=P.color,B=P.intensity,W=P.distance;let F=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===wi?F=P.shadow.map.texture:F=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*B,u+=I.g*B,d+=I.b*B;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],B);R++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,$=t.get(P);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(I).multiplyScalar(B),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[v]=V;const k=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,k.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=k.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=F,M++}v++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(I).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=V,g++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const k=P.shadow,$=t.get(P);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=V,m++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(B),V.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}g>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==m||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==b||_.numPointShadows!==y||_.numSpotShadows!==M||_.numSpotMaps!==w||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,_.directionalLength=f,_.pointLength=m,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=b,_.numPointShadows=y,_.numSpotShadows=M,_.numSpotMaps=w,_.numLightProbes=R,n.version=yb++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const y=l[p];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),r.identity(),s.copy(y.matrixWorld),s.premultiply(g),r.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function eh(a){const e=new Eb(a),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function Tb(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new eh(a),e.set(i,[o])):s>=r.length?(o=new eh(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Cb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],th=new ze,ys=new D,Br=new D;function Pb(a,e,t){let n=new mc;const i=new Ge,s=new Ge,r=new ct,o=new df,c=new ff,l={},h=t.maxTextureSize,u={[Jn]:Zt,[Zt]:Jn,[It]:It},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:wb,fragmentShader:Ab}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Bt;m.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let p=this.type;this.render=function(E,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===mh&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Aa);const T=a.getRenderTarget(),C=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),I=a.state;I.setBlending(jn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(F=>F.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,F=E.length;W<F;W++){const V=E[W],k=V.shadow;if(k===void 0){Me("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const $=k.getFrameExtents();i.multiply($),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,k.mapSize.y=s.y));const Q=a.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Q,k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Es){if(V.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ln(i.x,i.y,{format:wi,type:Yn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new is(i.x,i.y,un),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=Zn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft}else V.isPointLight?(k.map=new $h(i.x),k.map.depthTexture=new rf(i.x,Nn)):(k.map=new Ln(i.x,i.y),k.map.depthTexture=new is(i.x,i.y,Nn)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=Zn,this.type===Aa?(k.map.depthTexture.compareFunction=Q?cc:oc,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft);k.camera.updateProjectionMatrix()}const le=k.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<le;_e++){if(k.map.isWebGLCubeRenderTarget)a.setRenderTarget(k.map,_e),a.clear();else{_e===0&&(a.setRenderTarget(k.map),a.clear());const Ee=k.getViewport(_e);r.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),I.viewport(r)}if(V.isPointLight){const Ee=k.camera,Je=k.matrix,nt=V.distance||Ee.far;nt!==Ee.far&&(Ee.far=nt,Ee.updateProjectionMatrix()),ys.setFromMatrixPosition(V.matrixWorld),Ee.position.copy(ys),Br.copy(Ee.position),Br.add(Rb[_e]),Ee.up.copy(Cb[_e]),Ee.lookAt(Br),Ee.updateMatrixWorld(),Je.makeTranslation(-ys.x,-ys.y,-ys.z),th.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(th,Ee.coordinateSystem,Ee.reversedDepth)}else k.updateMatrices(V);n=k.getFrustum(),M(R,_,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Es&&b(k,_),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(T,C,P)};function b(E,R){const _=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ln(i.x,i.y,{format:wi,type:Yn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(R,null,_,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(R,null,_,f,v,null)}function y(E,R,_,T){let C=null;const P=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=C.uuid,B=R.uuid;let W=l[I];W===void 0&&(W={},l[I]=W);let F=W[B];F===void 0&&(F=C.clone(),W[B]=F,R.addEventListener("dispose",w)),C=F}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Es?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=a.properties.get(C);I.light=_}return C}function M(E,R,_,T,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===Es)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const B=e.update(E),W=E.material;if(Array.isArray(W)){const F=B.groups;for(let V=0,k=F.length;V<k;V++){const $=F[V],Q=W[$.materialIndex];if(Q&&Q.visible){const le=y(E,Q,T,C);E.onBeforeShadow(a,E,R,_,B,le,$),a.renderBufferDirect(_,null,B,le,E,$),E.onAfterShadow(a,E,R,_,B,le,$)}}}else if(W.visible){const F=y(E,W,T,C);E.onBeforeShadow(a,E,R,_,B,F,null),a.renderBufferDirect(_,null,B,F,E,null),E.onAfterShadow(a,E,R,_,B,F,null)}}const I=E.children;for(let B=0,W=I.length;B<W;B++)M(I[B],R,_,T,C)}function w(E){E.target.removeEventListener("dispose",w);for(const _ in l){const T=l[_],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Db(a,e){function t(){let L=!1;const ne=new ct;let X=null;const pe=new ct(0,0,0,0);return{setMask:function(ae){X!==ae&&!L&&(a.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Y,ye,Le,vt){vt===!0&&(ae*=Le,Y*=Le,ye*=Le),ne.set(ae,Y,ye,Le),pe.equals(ne)===!1&&(a.clearColor(ae,Y,ye,Le),pe.copy(ne))},reset:function(){L=!1,X=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,X=null,pe=null,ae=null;return{setReversed:function(Y){if(ne!==Y){const ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ne=Y;const Le=ae;ae=null,this.setClear(Le)}},getReversed:function(){return ne},setTest:function(Y){Y?ie(a.DEPTH_TEST):Ae(a.DEPTH_TEST)},setMask:function(Y){X!==Y&&!L&&(a.depthMask(Y),X=Y)},setFunc:function(Y){if(ne&&(Y=ud[Y]),pe!==Y){switch(Y){case Zr:a.depthFunc(a.NEVER);break;case $r:a.depthFunc(a.ALWAYS);break;case Qr:a.depthFunc(a.LESS);break;case es:a.depthFunc(a.LEQUAL);break;case eo:a.depthFunc(a.EQUAL);break;case to:a.depthFunc(a.GEQUAL);break;case no:a.depthFunc(a.GREATER);break;case io:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=Y}},setLocked:function(Y){L=Y},setClear:function(Y){ae!==Y&&(ae=Y,ne&&(Y=1-Y),a.clearDepth(Y))},reset:function(){L=!1,X=null,pe=null,ae=null,ne=!1}}}function i(){let L=!1,ne=null,X=null,pe=null,ae=null,Y=null,ye=null,Le=null,vt=null;return{setTest:function(st){L||(st?ie(a.STENCIL_TEST):Ae(a.STENCIL_TEST))},setMask:function(st){ne!==st&&!L&&(a.stencilMask(st),ne=st)},setFunc:function(st,kn,yn){(X!==st||pe!==kn||ae!==yn)&&(a.stencilFunc(st,kn,yn),X=st,pe=kn,ae=yn)},setOp:function(st,kn,yn){(Y!==st||ye!==kn||Le!==yn)&&(a.stencilOp(st,kn,yn),Y=st,ye=kn,Le=yn)},setLocked:function(st){L=st},setClear:function(st){vt!==st&&(a.clearStencil(st),vt=st)},reset:function(){L=!1,ne=null,X=null,pe=null,ae=null,Y=null,ye=null,Le=null,vt=null}}}const s=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,b=null,y=null,M=null,w=null,E=null,R=null,_=new we(0,0,0),T=0,C=!1,P=null,I=null,B=null,W=null,F=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const Q=a.getParameter(a.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=$>=2);let le=null,_e={};const Ee=a.getParameter(a.SCISSOR_BOX),Je=a.getParameter(a.VIEWPORT),nt=new ct().fromArray(Ee),Ne=new ct().fromArray(Je);function J(L,ne,X,pe){const ae=new Uint8Array(4),Y=a.createTexture();a.bindTexture(L,Y),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ye=0;ye<X;ye++)L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY?a.texImage3D(ne,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,ae):a.texImage2D(ne+ye,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ae);return Y}const de={};de[a.TEXTURE_2D]=J(a.TEXTURE_2D,a.TEXTURE_2D,1),de[a.TEXTURE_CUBE_MAP]=J(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[a.TEXTURE_2D_ARRAY]=J(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),de[a.TEXTURE_3D]=J(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(a.DEPTH_TEST),r.setFunc(es),Pt(!1),gt(zc),ie(a.CULL_FACE),dt(jn);function ie(L){h[L]!==!0&&(a.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(a.disable(L),h[L]=!1)}function De(L,ne){return d[L]!==ne?(a.bindFramebuffer(L,ne),d[L]=ne,L===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=ne),L===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ce(L,ne){let X=m,pe=!1;if(L){X=f.get(ne),X===void 0&&(X=[],f.set(ne,X));const ae=L.textures;if(X.length!==ae.length||X[0]!==a.COLOR_ATTACHMENT0){for(let Y=0,ye=ae.length;Y<ye;Y++)X[Y]=a.COLOR_ATTACHMENT0+Y;X.length=ae.length,pe=!0}}else X[0]!==a.BACK&&(X[0]=a.BACK,pe=!0);pe&&a.drawBuffers(X)}function mt(L){return v!==L?(a.useProgram(L),v=L,!0):!1}const Xe={[vi]:a.FUNC_ADD,[Cu]:a.FUNC_SUBTRACT,[Pu]:a.FUNC_REVERSE_SUBTRACT};Xe[Du]=a.MIN,Xe[Iu]=a.MAX;const it={[Lu]:a.ZERO,[Fu]:a.ONE,[Nu]:a.SRC_COLOR,[Jr]:a.SRC_ALPHA,[zu]:a.SRC_ALPHA_SATURATE,[ku]:a.DST_COLOR,[Ou]:a.DST_ALPHA,[Uu]:a.ONE_MINUS_SRC_COLOR,[Yr]:a.ONE_MINUS_SRC_ALPHA,[Gu]:a.ONE_MINUS_DST_COLOR,[Bu]:a.ONE_MINUS_DST_ALPHA,[Vu]:a.CONSTANT_COLOR,[Hu]:a.ONE_MINUS_CONSTANT_COLOR,[Wu]:a.CONSTANT_ALPHA,[qu]:a.ONE_MINUS_CONSTANT_ALPHA};function dt(L,ne,X,pe,ae,Y,ye,Le,vt,st){if(L===jn){g===!0&&(Ae(a.BLEND),g=!1);return}if(g===!1&&(ie(a.BLEND),g=!0),L!==Ru){if(L!==p||st!==C){if((b!==vi||w!==vi)&&(a.blendEquation(a.FUNC_ADD),b=vi,w=vi),st)switch(L){case Yi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vc:a.blendFunc(a.ONE,a.ONE);break;case Hc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Wc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Re("WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vc:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Hc:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",L);break}y=null,M=null,E=null,R=null,_.set(0,0,0),T=0,p=L,C=st}return}ae=ae||ne,Y=Y||X,ye=ye||pe,(ne!==b||ae!==w)&&(a.blendEquationSeparate(Xe[ne],Xe[ae]),b=ne,w=ae),(X!==y||pe!==M||Y!==E||ye!==R)&&(a.blendFuncSeparate(it[X],it[pe],it[Y],it[ye]),y=X,M=pe,E=Y,R=ye),(Le.equals(_)===!1||vt!==T)&&(a.blendColor(Le.r,Le.g,Le.b,vt),_.copy(Le),T=vt),p=L,C=!1}function He(L,ne){L.side===It?Ae(a.CULL_FACE):ie(a.CULL_FACE);let X=L.side===Zt;ne&&(X=!X),Pt(X),L.blending===Yi&&L.transparent===!1?dt(jn):dt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(a.SAMPLE_ALPHA_TO_COVERAGE):Ae(a.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(L){P!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),P=L)}function gt(L){L!==wu?(ie(a.CULL_FACE),L!==I&&(L===zc?a.cullFace(a.BACK):L===Au?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ae(a.CULL_FACE),I=L}function $t(L){L!==B&&(k&&a.lineWidth(L),B=L)}function N(L,ne,X){L?(ie(a.POLYGON_OFFSET_FILL),(W!==ne||F!==X)&&(W=ne,F=X,r.getReversed()&&(ne=-ne),a.polygonOffset(ne,X))):Ae(a.POLYGON_OFFSET_FILL)}function Dt(L){L?ie(a.SCISSOR_TEST):Ae(a.SCISSOR_TEST)}function je(L){L===void 0&&(L=a.TEXTURE0+V-1),le!==L&&(a.activeTexture(L),le=L)}function ht(L,ne,X){X===void 0&&(le===null?X=a.TEXTURE0+V-1:X=le);let pe=_e[X];pe===void 0&&(pe={type:void 0,texture:void 0},_e[X]=pe),(pe.type!==L||pe.texture!==ne)&&(le!==X&&(a.activeTexture(X),le=X),a.bindTexture(L,ne||de[L]),pe.type=L,pe.texture=ne)}function oe(){const L=_e[le];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function bt(){try{a.compressedTexImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function A(){try{a.compressedTexImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function x(){try{a.texSubImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function O(){try{a.texSubImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function j(){try{a.compressedTexSubImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function Z(){try{a.compressedTexSubImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function ee(){try{a.texStorage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function re(){try{a.texStorage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function q(){try{a.texImage2D(...arguments)}catch(L){Re("WebGLState:",L)}}function K(){try{a.texImage3D(...arguments)}catch(L){Re("WebGLState:",L)}}function fe(L){return u[L]!==void 0?u[L]:a.getParameter(L)}function ge(L,ne){u[L]!==ne&&(a.pixelStorei(L,ne),u[L]=ne)}function se(L){nt.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function te(L){Ne.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Pe(L,ne){let X=l.get(ne);X===void 0&&(X=new WeakMap,l.set(ne,X));let pe=X.get(L);pe===void 0&&(pe=a.getUniformBlockIndex(ne,L.name),X.set(L,pe))}function Ue(L,ne){const pe=l.get(ne).get(L);c.get(ne)!==pe&&(a.uniformBlockBinding(ne,pe,L.__bindingPointIndex),c.set(ne,pe))}function Ze(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},le=null,_e={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,b=null,y=null,M=null,w=null,E=null,R=null,_=new we(0,0,0),T=0,C=!1,P=null,I=null,B=null,W=null,F=null,nt.set(0,0,a.canvas.width,a.canvas.height),Ne.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ie,disable:Ae,bindFramebuffer:De,drawBuffers:Ce,useProgram:mt,setBlending:dt,setMaterial:He,setFlipSided:Pt,setCullFace:gt,setLineWidth:$t,setPolygonOffset:N,setScissorTest:Dt,activeTexture:je,bindTexture:ht,unbindTexture:oe,compressedTexImage2D:bt,compressedTexImage3D:A,texImage2D:q,texImage3D:K,pixelStorei:ge,getParameter:fe,updateUBOMapping:Pe,uniformBlockBinding:Ue,texStorage2D:ee,texStorage3D:re,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:j,compressedTexSubImage3D:Z,scissor:se,viewport:te,reset:Ze}}function Ib(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return m?new OffscreenCanvas(A,x):Us("canvas")}function g(A,x,O){let j=1;const Z=bt(A);if((Z.width>O||Z.height>O)&&(j=O/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ee=Math.floor(j*Z.width),re=Math.floor(j*Z.height);d===void 0&&(d=v(ee,re));const q=x?v(ee,re):d;return q.width=ee,q.height=re,q.getContext("2d").drawImage(A,0,0,ee,re),Me("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ee+"x"+re+")."),q}else return"data"in A&&Me("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function b(A){a.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?a.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(A,x,O,j,Z,ee=!1){if(A!==null){if(a[A]!==void 0)return a[A];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re;j&&(re=e.get("EXT_texture_norm16"),re||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===a.RED&&(O===a.FLOAT&&(q=a.R32F),O===a.HALF_FLOAT&&(q=a.R16F),O===a.UNSIGNED_BYTE&&(q=a.R8),O===a.UNSIGNED_SHORT&&re&&(q=re.R16_EXT),O===a.SHORT&&re&&(q=re.R16_SNORM_EXT)),x===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.R8UI),O===a.UNSIGNED_SHORT&&(q=a.R16UI),O===a.UNSIGNED_INT&&(q=a.R32UI),O===a.BYTE&&(q=a.R8I),O===a.SHORT&&(q=a.R16I),O===a.INT&&(q=a.R32I)),x===a.RG&&(O===a.FLOAT&&(q=a.RG32F),O===a.HALF_FLOAT&&(q=a.RG16F),O===a.UNSIGNED_BYTE&&(q=a.RG8),O===a.UNSIGNED_SHORT&&re&&(q=re.RG16_EXT),O===a.SHORT&&re&&(q=re.RG16_SNORM_EXT)),x===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RG8UI),O===a.UNSIGNED_SHORT&&(q=a.RG16UI),O===a.UNSIGNED_INT&&(q=a.RG32UI),O===a.BYTE&&(q=a.RG8I),O===a.SHORT&&(q=a.RG16I),O===a.INT&&(q=a.RG32I)),x===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RGB8UI),O===a.UNSIGNED_SHORT&&(q=a.RGB16UI),O===a.UNSIGNED_INT&&(q=a.RGB32UI),O===a.BYTE&&(q=a.RGB8I),O===a.SHORT&&(q=a.RGB16I),O===a.INT&&(q=a.RGB32I)),x===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),O===a.UNSIGNED_INT&&(q=a.RGBA32UI),O===a.BYTE&&(q=a.RGBA8I),O===a.SHORT&&(q=a.RGBA16I),O===a.INT&&(q=a.RGBA32I)),x===a.RGB&&(O===a.UNSIGNED_SHORT&&re&&(q=re.RGB16_EXT),O===a.SHORT&&re&&(q=re.RGB16_SNORM_EXT),O===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),O===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),x===a.RGBA){const K=ee?Ba:We.getTransfer(Z);O===a.FLOAT&&(q=a.RGBA32F),O===a.HALF_FLOAT&&(q=a.RGBA16F),O===a.UNSIGNED_BYTE&&(q=K===Qe?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT&&re&&(q=re.RGBA16_EXT),O===a.SHORT&&re&&(q=re.RGBA16_SNORM_EXT),O===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function w(A,x){let O;return A?x===null||x===Nn||x===Is?O=a.DEPTH24_STENCIL8:x===un?O=a.DEPTH32F_STENCIL8:x===Ds&&(O=a.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===Is?O=a.DEPTH_COMPONENT24:x===un?O=a.DEPTH_COMPONENT32F:x===Ds&&(O=a.DEPTH_COMPONENT16),O}function E(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(A){const x=A.target;x.removeEventListener("dispose",_),P(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,j=f.get(O);if(j){const Z=j[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(A),Object.keys(j).length===0&&f.delete(O)}n.remove(A)}function C(A){const x=n.get(A);a.deleteTexture(x.__webglTexture);const O=A.source,j=f.get(O);delete j[x.__cacheKey],r.memory.textures--}function P(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Z=0;Z<x.__webglFramebuffer[j].length;Z++)a.deleteFramebuffer(x.__webglFramebuffer[j][Z]);else a.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)a.deleteFramebuffer(x.__webglFramebuffer[j]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&a.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let j=0,Z=O.length;j<Z;j++){const ee=n.get(O[j]);ee.__webglTexture&&(a.deleteTexture(ee.__webglTexture),r.memory.textures--),n.remove(O[j])}n.remove(A)}let I=0;function B(){I=0}function W(){return I}function F(A){I=A}function V(){const A=I;return A>=i.maxTextures&&Me("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function k(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const O=n.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const j=A.image;if(j===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+x)}function Q(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ae(O,A,x);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+x)}function le(A,x){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ae(O,A,x);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+x)}function _e(A,x){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){De(O,A,x);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+x)}const Ee={[hi]:a.REPEAT,[Rn]:a.CLAMP_TO_EDGE,[Fa]:a.MIRRORED_REPEAT},Je={[Ft]:a.NEAREST,[Eh]:a.NEAREST_MIPMAP_NEAREST,[Ts]:a.NEAREST_MIPMAP_LINEAR,[Ct]:a.LINEAR,[Ra]:a.LINEAR_MIPMAP_NEAREST,[Cn]:a.LINEAR_MIPMAP_LINEAR},nt={[td]:a.NEVER,[rd]:a.ALWAYS,[nd]:a.LESS,[oc]:a.LEQUAL,[id]:a.EQUAL,[cc]:a.GEQUAL,[sd]:a.GREATER,[ad]:a.NOTEQUAL};function Ne(A,x){if(x.type===un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ct||x.magFilter===Ra||x.magFilter===Ts||x.magFilter===Cn||x.minFilter===Ct||x.minFilter===Ra||x.minFilter===Ts||x.minFilter===Cn)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(A,a.TEXTURE_WRAP_S,Ee[x.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,Ee[x.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,Ee[x.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,Je[x.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,Je[x.minFilter]),x.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ft||x.minFilter!==Ts&&x.minFilter!==Cn||x.type===un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function J(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const j=x.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const ee=k(x);if(ee!==A.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Z[ee].usedTimes++;const re=Z[A.__cacheKey];re!==void 0&&(Z[A.__cacheKey].usedTimes--,re.usedTimes===0&&C(x)),A.__cacheKey=ee,A.__webglTexture=Z[ee].texture}return O}function de(A,x,O){return Math.floor(Math.floor(A/O)/x)}function ie(A,x,O,j){const ee=A.updateRanges;if(ee.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,x.width,x.height,O,j,x.data);else{ee.sort((ge,se)=>ge.start-se.start);let re=0;for(let ge=1;ge<ee.length;ge++){const se=ee[re],te=ee[ge],Pe=se.start+se.count,Ue=de(te.start,x.width,4),Ze=de(se.start,x.width,4);te.start<=Pe+1&&Ue===Ze&&de(te.start+te.count-1,x.width,4)===Ue?se.count=Math.max(se.count,te.start+te.count-se.start):(++re,ee[re]=te)}ee.length=re+1;const q=t.getParameter(a.UNPACK_ROW_LENGTH),K=t.getParameter(a.UNPACK_SKIP_PIXELS),fe=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,x.width);for(let ge=0,se=ee.length;ge<se;ge++){const te=ee[ge],Pe=Math.floor(te.start/4),Ue=Math.ceil(te.count/4),Ze=Pe%x.width,L=Math.floor(Pe/x.width),ne=Ue,X=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(a.UNPACK_SKIP_ROWS,L),t.texSubImage2D(a.TEXTURE_2D,0,Ze,L,ne,X,O,j,x.data)}A.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,q),t.pixelStorei(a.UNPACK_SKIP_PIXELS,K),t.pixelStorei(a.UNPACK_SKIP_ROWS,fe)}}function Ae(A,x,O){let j=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=a.TEXTURE_3D);const Z=J(A,x),ee=x.source;t.bindTexture(j,A.__webglTexture,a.TEXTURE0+O);const re=n.get(ee);if(ee.version!==re.__version||Z===!0){if(t.activeTexture(a.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const X=We.getPrimaries(We.workingColorSpace),pe=x.colorSpace===ci?null:We.getPrimaries(x.colorSpace),ae=x.colorSpace===ci||X===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment);let K=g(x.image,!1,i.maxTextureSize);K=oe(x,K);const fe=s.convert(x.format,x.colorSpace),ge=s.convert(x.type);let se=M(x.internalFormat,fe,ge,x.normalized,x.colorSpace,x.isVideoTexture);Ne(j,x);let te;const Pe=x.mipmaps,Ue=x.isVideoTexture!==!0,Ze=re.__version===void 0||Z===!0,L=ee.dataReady,ne=E(x,K);if(x.isDepthTexture)se=w(x.format===Si,x.type),Ze&&(Ue?t.texStorage2D(a.TEXTURE_2D,1,se,K.width,K.height):t.texImage2D(a.TEXTURE_2D,0,se,K.width,K.height,0,fe,ge,null));else if(x.isDataTexture)if(Pe.length>0){Ue&&Ze&&t.texStorage2D(a.TEXTURE_2D,ne,se,Pe[0].width,Pe[0].height);for(let X=0,pe=Pe.length;X<pe;X++)te=Pe[X],Ue?L&&t.texSubImage2D(a.TEXTURE_2D,X,0,0,te.width,te.height,fe,ge,te.data):t.texImage2D(a.TEXTURE_2D,X,se,te.width,te.height,0,fe,ge,te.data);x.generateMipmaps=!1}else Ue?(Ze&&t.texStorage2D(a.TEXTURE_2D,ne,se,K.width,K.height),L&&ie(x,K,fe,ge)):t.texImage2D(a.TEXTURE_2D,0,se,K.width,K.height,0,fe,ge,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&Ze&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,se,Pe[0].width,Pe[0].height,K.depth);for(let X=0,pe=Pe.length;X<pe;X++)if(te=Pe[X],x.format!==dn)if(fe!==null)if(Ue){if(L)if(x.layerUpdates.size>0){const ae=Il(te.width,te.height,x.format,x.type);for(const Y of x.layerUpdates){const ye=te.data.subarray(Y*ae/te.data.BYTES_PER_ELEMENT,(Y+1)*ae/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,X,0,0,Y,te.width,te.height,1,fe,ye)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,K.depth,fe,te.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,X,se,te.width,te.height,K.depth,0,te.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,K.depth,fe,ge,te.data):t.texImage3D(a.TEXTURE_2D_ARRAY,X,se,te.width,te.height,K.depth,0,fe,ge,te.data)}else{Ue&&Ze&&t.texStorage2D(a.TEXTURE_2D,ne,se,Pe[0].width,Pe[0].height);for(let X=0,pe=Pe.length;X<pe;X++)te=Pe[X],x.format!==dn?fe!==null?Ue?L&&t.compressedTexSubImage2D(a.TEXTURE_2D,X,0,0,te.width,te.height,fe,te.data):t.compressedTexImage2D(a.TEXTURE_2D,X,se,te.width,te.height,0,te.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&t.texSubImage2D(a.TEXTURE_2D,X,0,0,te.width,te.height,fe,ge,te.data):t.texImage2D(a.TEXTURE_2D,X,se,te.width,te.height,0,fe,ge,te.data)}else if(x.isDataArrayTexture)if(Ue){if(Ze&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,se,K.width,K.height,K.depth),L)if(x.layerUpdates.size>0){const X=Il(K.width,K.height,x.format,x.type);for(const pe of x.layerUpdates){const ae=K.data.subarray(pe*X/K.data.BYTES_PER_ELEMENT,(pe+1)*X/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,K.width,K.height,1,fe,ge,ae)}x.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,ge,K.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,se,K.width,K.height,K.depth,0,fe,ge,K.data);else if(x.isData3DTexture)Ue?(Ze&&t.texStorage3D(a.TEXTURE_3D,ne,se,K.width,K.height,K.depth),L&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,ge,K.data)):t.texImage3D(a.TEXTURE_3D,0,se,K.width,K.height,K.depth,0,fe,ge,K.data);else if(x.isFramebufferTexture){if(Ze)if(Ue)t.texStorage2D(a.TEXTURE_2D,ne,se,K.width,K.height);else{let X=K.width,pe=K.height;for(let ae=0;ae<ne;ae++)t.texImage2D(a.TEXTURE_2D,ae,se,X,pe,0,fe,ge,null),X>>=1,pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in a){const X=a.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),K.parentNode!==X){X.appendChild(K),u.add(x),X.onpaint=Le=>{const vt=Le.changedElements;for(const st of u)vt.includes(st.image)&&(st.needsUpdate=!0)},X.requestPaint();return}const pe=0,ae=a.RGBA,Y=a.RGBA,ye=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,pe,ae,Y,ye,K),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ue&&Ze){const X=bt(Pe[0]);t.texStorage2D(a.TEXTURE_2D,ne,se,X.width,X.height)}for(let X=0,pe=Pe.length;X<pe;X++)te=Pe[X],Ue?L&&t.texSubImage2D(a.TEXTURE_2D,X,0,0,fe,ge,te):t.texImage2D(a.TEXTURE_2D,X,se,fe,ge,te);x.generateMipmaps=!1}else if(Ue){if(Ze){const X=bt(K);t.texStorage2D(a.TEXTURE_2D,ne,se,X.width,X.height)}L&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,fe,ge,K)}else t.texImage2D(a.TEXTURE_2D,0,se,fe,ge,K);p(x)&&b(j),re.__version=ee.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function De(A,x,O){if(x.image.length!==6)return;const j=J(A,x),Z=x.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+O);const ee=n.get(Z);if(Z.version!==ee.__version||j===!0){t.activeTexture(a.TEXTURE0+O);const re=We.getPrimaries(We.workingColorSpace),q=x.colorSpace===ci?null:We.getPrimaries(x.colorSpace),K=x.colorSpace===ci||re===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!fe&&!ge?se[Y]=g(x.image[Y],!0,i.maxCubemapSize):se[Y]=ge?x.image[Y].image:x.image[Y],se[Y]=oe(x,se[Y]);const te=se[0],Pe=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type),Ze=M(x.internalFormat,Pe,Ue,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,ne=ee.__version===void 0||j===!0,X=Z.dataReady;let pe=E(x,te);Ne(a.TEXTURE_CUBE_MAP,x);let ae;if(fe){L&&ne&&t.texStorage2D(a.TEXTURE_CUBE_MAP,pe,Ze,te.width,te.height);for(let Y=0;Y<6;Y++){ae=se[Y].mipmaps;for(let ye=0;ye<ae.length;ye++){const Le=ae[ye];x.format!==dn?Pe!==null?L?X&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Le.width,Le.height,Pe,Le.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Ze,Le.width,Le.height,0,Le.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Le.width,Le.height,Pe,Ue,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Ze,Le.width,Le.height,0,Pe,Ue,Le.data)}}}else{if(ae=x.mipmaps,L&&ne){ae.length>0&&pe++;const Y=bt(se[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,pe,Ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ge){L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,Pe,Ue,se[Y].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ze,se[Y].width,se[Y].height,0,Pe,Ue,se[Y].data);for(let ye=0;ye<ae.length;ye++){const vt=ae[ye].image[Y].image;L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,vt.width,vt.height,Pe,Ue,vt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Ze,vt.width,vt.height,0,Pe,Ue,vt.data)}}else{L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,Ue,se[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ze,Pe,Ue,se[Y]);for(let ye=0;ye<ae.length;ye++){const Le=ae[ye];L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,Pe,Ue,Le.image[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Ze,Pe,Ue,Le.image[Y])}}}p(x)&&b(a.TEXTURE_CUBE_MAP),ee.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ce(A,x,O,j,Z,ee){const re=s.convert(O.format,O.colorSpace),q=s.convert(O.type),K=M(O.internalFormat,re,q,O.normalized,O.colorSpace),fe=n.get(x),ge=n.get(O);if(ge.__renderTarget=x,!fe.__hasExternalTextures){const se=Math.max(1,x.width>>ee),te=Math.max(1,x.height>>ee);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,K,se,te,x.depth,0,re,q,null):t.texImage2D(Z,ee,K,se,te,0,re,q,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),je(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,Z,ge.__webglTexture,0,Dt(x)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,Z,ge.__webglTexture,ee),t.bindFramebuffer(a.FRAMEBUFFER,null)}function mt(A,x,O){if(a.bindRenderbuffer(a.RENDERBUFFER,A),x.depthBuffer){const j=x.depthTexture,Z=j&&j.isDepthTexture?j.type:null,ee=w(x.stencilBuffer,Z),re=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;je(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt(x),ee,x.width,x.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt(x),ee,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,ee,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,re,a.RENDERBUFFER,A)}else{const j=x.textures;for(let Z=0;Z<j.length;Z++){const ee=j[Z],re=s.convert(ee.format,ee.colorSpace),q=s.convert(ee.type),K=M(ee.internalFormat,re,q,ee.normalized,ee.colorSpace);je(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt(x),K,x.width,x.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt(x),K,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,K,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Xe(A,x,O){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,x.depthTexture);const fe=s.convert(x.depthTexture.format),ge=s.convert(x.depthTexture.type);let se;x.depthTexture.format===Zn?se=a.DEPTH_COMPONENT24:x.depthTexture.format===Si&&(se=a.DEPTH24_STENCIL8);for(let te=0;te<6;te++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,x.width,x.height,0,fe,ge,null)}}else $(x.depthTexture,0);const ee=Z.__webglTexture,re=Dt(x),q=j?a.TEXTURE_CUBE_MAP_POSITIVE_X+O:a.TEXTURE_2D,K=x.depthTexture.format===Si?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)je(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,q,ee,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,K,q,ee,0);else if(x.depthTexture.format===Si)je(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,q,ee,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,K,q,ee,0);else throw new Error("Unknown depthTexture format")}function it(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=j}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let j=0;j<6;j++)Xe(x.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?Xe(x.__webglFramebuffer[0],A,0):Xe(x.__webglFramebuffer,A,0)}else if(O){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=a.createRenderbuffer(),mt(x.__webglDepthbuffer[j],A,!1);else{const Z=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[j];a.bindRenderbuffer(a.RENDERBUFFER,ee),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,ee)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=a.createRenderbuffer(),mt(x.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ee),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,ee)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function dt(A,x,O){const j=n.get(A);x!==void 0&&Ce(j.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&it(A)}function He(A){const x=A.texture,O=n.get(A),j=n.get(x);A.addEventListener("dispose",_);const Z=A.textures,ee=A.isWebGLCubeRenderTarget===!0,re=Z.length>1;if(re||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=x.version,r.memory.textures++),ee){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let K=0;K<x.mipmaps.length;K++)O.__webglFramebuffer[q][K]=a.createFramebuffer()}else O.__webglFramebuffer[q]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)O.__webglFramebuffer[q]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(re)for(let q=0,K=Z.length;q<K;q++){const fe=n.get(Z[q]);fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture(),r.memory.textures++)}if(A.samples>0&&je(A)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<Z.length;q++){const K=Z[q];O.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[q]);const fe=s.convert(K.format,K.colorSpace),ge=s.convert(K.type),se=M(K.internalFormat,fe,ge,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),te=Dt(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,te,se,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+q,a.RENDERBUFFER,O.__webglColorRenderbuffer[q])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),mt(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ee){t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(a.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Ce(O.__webglFramebuffer[q][K],A,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else Ce(O.__webglFramebuffer[q],A,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(x)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let q=0,K=Z.length;q<K;q++){const fe=Z[q],ge=n.get(fe);let se=a.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(se,ge.__webglTexture),Ne(se,fe),Ce(O.__webglFramebuffer,A,fe,a.COLOR_ATTACHMENT0+q,se,0),p(fe)&&b(se)}t.unbindTexture()}else{let q=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(q,j.__webglTexture),Ne(q,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Ce(O.__webglFramebuffer[K],A,x,a.COLOR_ATTACHMENT0,q,K);else Ce(O.__webglFramebuffer,A,x,a.COLOR_ATTACHMENT0,q,0);p(x)&&b(q),t.unbindTexture()}A.depthBuffer&&it(A)}function Pt(A){const x=A.textures;for(let O=0,j=x.length;O<j;O++){const Z=x[O];if(p(Z)){const ee=y(A),re=n.get(Z).__webglTexture;t.bindTexture(ee,re),b(ee),t.unbindTexture()}}}const gt=[],$t=[];function N(A){if(A.samples>0){if(je(A)===!1){const x=A.textures,O=A.width,j=A.height;let Z=a.COLOR_BUFFER_BIT;const ee=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=n.get(A),q=x.length>1;if(q)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,re.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const K=A.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),q){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,re.__webglColorRenderbuffer[fe]);const ge=n.get(x[fe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ge,0)}a.blitFramebuffer(0,0,O,j,0,0,O,j,Z,a.NEAREST),c===!0&&(gt.length=0,$t.length=0,gt.push(a.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(gt.push(ee),$t.push(ee),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),q)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,re.__webglColorRenderbuffer[fe]);const ge=n.get(x[fe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,re.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.TEXTURE_2D,ge,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[x])}}}function Dt(A){return Math.min(i.maxSamples,A.samples)}function je(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ht(A){const x=r.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function oe(A,x){const O=A.colorSpace,j=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==on&&O!==ci&&(We.getTransfer(O)===Qe?(j!==dn||Z!==sn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",O)),x}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=W,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=le,this.setTextureCube=_e,this.rebindTextures=dt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lb(a,e){function t(n,i=ci){let s;const r=We.getTransfer(i);if(n===sn)return a.UNSIGNED_BYTE;if(n===Qo)return a.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===Th)return a.BYTE;if(n===wh)return a.SHORT;if(n===Ds)return a.UNSIGNED_SHORT;if(n===$o)return a.INT;if(n===Nn)return a.UNSIGNED_INT;if(n===un)return a.FLOAT;if(n===Yn)return a.HALF_FLOAT;if(n===Ch)return a.ALPHA;if(n===Ph)return a.RGB;if(n===dn)return a.RGBA;if(n===Zn)return a.DEPTH_COMPONENT;if(n===Si)return a.DEPTH_STENCIL;if(n===tc)return a.RED;if(n===nc)return a.RED_INTEGER;if(n===wi)return a.RG;if(n===ic)return a.RG_INTEGER;if(n===sc)return a.RGBA_INTEGER;if(n===Ca||n===Pa||n===Da||n===Ia)if(r===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ao||n===ro||n===oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===so)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===lo||n===ho||n===uo||n===fo||n===Na||n===po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===co||n===lo)return r===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ho)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===uo)return s.COMPRESSED_R11_EAC;if(n===fo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Na)return s.COMPRESSED_RG11_EAC;if(n===po)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mo||n===go||n===bo||n===_o||n===xo||n===vo||n===Mo||n===yo||n===So||n===Eo||n===To||n===wo||n===Ao||n===Ro)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Po||n===Do)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Co)return r===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Io||n===Lo||n===Ua||n===Fo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Io)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const Fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:Fb,fragmentShader:Nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ob extends di{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Ub,p={},b=t.getContextAttributes();let y=null,M=null;const w=[],E=[],R=new Ge;let _=null;const T=new Jt;T.viewport=new ct;const C=new Jt;C.viewport=new ct;const P=[T,C],I=new Ff;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=w[J];return de===void 0&&(de=new ur,w[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=w[J];return de===void 0&&(de=new ur,w[J]=de),de.getGripSpace()},this.getHand=function(J){let de=w[J];return de===void 0&&(de=new ur,w[J]=de),de.getHandSpace()};function F(J){const de=E.indexOf(J.inputSource);if(de===-1)return;const ie=w[de];ie!==void 0&&(ie.update(J.inputSource,J.frame,l||r),ie.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",k);for(let J=0;J<w.length;J++){const de=E[J];de!==null&&(E[J]=null,w[J].disconnect(de))}B=null,W=null,g.reset();for(const J in p)delete p[J];e.setRenderTarget(y),f=null,d=null,u=null,i=null,M=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ae=null,De=null;b.depth&&(De=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=b.stencil?Si:Zn,Ae=b.stencil?Is:Nn);const Ce={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ln(d.textureWidth,d.textureHeight,{format:dn,type:sn,depthTexture:new is(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ln(f.framebufferWidth,f.framebufferHeight,{format:dn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(J){for(let de=0;de<J.removed.length;de++){const ie=J.removed[de],Ae=E.indexOf(ie);Ae>=0&&(E[Ae]=null,w[Ae].disconnect(ie))}for(let de=0;de<J.added.length;de++){const ie=J.added[de];let Ae=E.indexOf(ie);if(Ae===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=E.length){E.push(ie),Ae=Ce;break}else if(E[Ce]===null){E[Ce]=ie,Ae=Ce;break}if(Ae===-1)break}const De=w[Ae];De&&De.connect(ie)}}const $=new D,Q=new D;function le(J,de,ie){$.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const Ae=$.distanceTo(Q),De=de.projectionMatrix.elements,Ce=ie.projectionMatrix.elements,mt=De[14]/(De[10]-1),Xe=De[14]/(De[10]+1),it=(De[9]+1)/De[5],dt=(De[9]-1)/De[5],He=(De[8]-1)/De[0],Pt=(Ce[8]+1)/Ce[0],gt=mt*He,$t=mt*Pt,N=Ae/(-He+Pt),Dt=N*-He;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Dt),J.translateZ(N),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),De[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=mt+N,ht=Xe+N,oe=gt-Dt,bt=$t+(Ae-Dt),A=it*Xe/ht*je,x=dt*Xe/ht*je;J.projectionMatrix.makePerspective(oe,bt,A,x,je,ht),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let de=J.near,ie=J.far;g.texture!==null&&(g.depthNear>0&&(de=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),I.near=C.near=T.near=de,I.far=C.far=T.far=ie,(B!==I.near||W!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,W=I.far),I.layers.mask=J.layers.mask|6,T.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const Ae=J.parent,De=I.cameras;_e(I,Ae);for(let Ce=0;Ce<De.length;Ce++)_e(De[Ce],Ae);De.length===2?le(I,T,C):I.projectionMatrix.copy(T.projectionMatrix),Ee(J,I,Ae)};function Ee(J,de,ie){ie===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(ie.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ns*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(J){return p[J]};let Je=null;function nt(J,de){if(h=de.getViewerPose(l||r),m=de,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ae=!1;ie.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let Xe=0;Xe<ie.length;Xe++){const it=ie[Xe];let dt=null;if(f!==null)dt=f.getViewport(it);else{const Pt=u.getViewSubImage(d,it);dt=Pt.viewport,Xe===0&&(e.setRenderTargetTextures(M,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(M))}let He=P[Xe];He===void 0&&(He=new Jt,He.layers.enable(Xe),He.viewport=new ct,P[Xe]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(dt.x,dt.y,dt.width,dt.height),Xe===0&&(I.matrix.copy(He.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(He)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Xe=u.getDepthInformation(ie[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,i.renderState)}if(De&&De.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<ie.length;Xe++){const it=ie[Xe].camera;if(it){let dt=p[it];dt||(dt=new Vh,p[it]=dt);const He=u.getCameraImage(it);dt.sourceTexture=He}}}}for(let ie=0;ie<w.length;ie++){const Ae=E[ie],De=w[ie];Ae!==null&&De!==void 0&&De.update(Ae,de,l||r)}Je&&Je(J,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),m=null}const Ne=new Yh;Ne.setAnimationLoop(nt),this.setAnimationLoop=function(J){Je=J},this.dispose=function(){}}}const Bb=new ze,iu=new Ie;iu.set(-1,0,0,0,1,0,0,0,1);function kb(a,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hh(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,M=b.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(iu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gb(a,e,t,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const M=y.program;n.uniformBlockBinding(b,M)}function l(b,y){let M=i[b.id];M===void 0&&(m(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(b,w);const E=e.render.frame;s[b.id]!==E&&(d(b),s[b.id]=E)}function h(b){const y=u();b.__bindingPointIndex=y;const M=a.createBuffer(),w=b.__size,E=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,w,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,M),M}function u(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=i[b.id],M=b.uniforms,w=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let E=0,R=M.length;E<R;E++){const _=Array.isArray(M[E])?M[E]:[M[E]];for(let T=0,C=_.length;T<C;T++){const P=_[T];if(f(P,E,T,w)===!0){const I=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let F=0;F<B.length;F++){const V=B[F],k=v(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,I+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):ArrayBuffer.isView(V)?P.__data.set(new V.constructor(V.buffer,V.byteOffset,P.__data.length)):(V.toArray(P.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,I,P.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(b,y,M,w){const E=b.value,R=y+"_"+M;if(w[R]===void 0)return typeof E=="number"||typeof E=="boolean"?w[R]=E:ArrayBuffer.isView(E)?w[R]=E.slice():w[R]=E.clone(),!0;{const _=w[R];if(typeof E=="number"||typeof E=="boolean"){if(_!==E)return w[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(_.equals(E)===!1)return _.copy(E),!0}}return!1}function m(b){const y=b.uniforms;let M=0;const w=16;for(let R=0,_=y.length;R<_;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let C=0,P=T.length;C<P;C++){const I=T[C],B=Array.isArray(I.value)?I.value:[I.value];for(let W=0,F=B.length;W<F;W++){const V=B[W],k=v(V),$=M%w,Q=$%k.boundary,le=$+Q;M+=Q,le!==0&&w-le<k.storage&&(M+=w-le),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=k.storage}}}const E=M%w;return E>0&&(M+=w-E),b.__size=M,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const b in i)a.deleteBuffer(i[b]);r=[],i={},s={}}return{bind:c,update:l,dispose:p}}const zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function Vb(){return Tn===null&&(Tn=new fc(zb,16,16,wi,Yn),Tn.name="DFG_LUT",Tn.minFilter=Ct,Tn.magFilter=Ct,Tn.wrapS=Rn,Tn.wrapT=Rn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class Hb{constructor(e={}){const{canvas:t=ld(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const v=f,g=new Set([sc,ic,nc]),p=new Set([sn,Nn,Ds,Is,Qo,ec]),b=new Uint32Array(4),y=new Int32Array(4),M=new D;let w=null,E=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null;this._outputColorSpace=ft;let B=0,W=0,F=null,V=-1,k=null;const $=new ct,Q=new ct;let le=null;const _e=new we(0);let Ee=0,Je=t.width,nt=t.height,Ne=1,J=null,de=null;const ie=new ct(0,0,Je,nt),Ae=new ct(0,0,Je,nt);let De=!1;const Ce=new mc;let mt=!1,Xe=!1;const it=new ze,dt=new D,He=new ct,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function $t(){return F===null?Ne:1}let N=n;function Dt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Le,!1),N===null){const U="webgl2";if(N=Dt(U,S),N===null)throw Dt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw Re("WebGLRenderer: "+S.message),S}let je,ht,oe,bt,A,x,O,j,Z,ee,re,q,K,fe,ge,se,te,Pe,Ue,Ze,L,ne,X;function pe(){je=new Vg(N),je.init(),L=new Lb(N,je),ht=new Fg(N,je,e,L),oe=new Db(N,je),ht.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),bt=new qg(N),A=new bb,x=new Ib(N,je,oe,A,ht,L,bt),O=new zg(C),j=new Jf(N),ne=new Ig(N,j),Z=new Hg(N,j,bt,ne),ee=new jg(N,Z,j,ne,bt),Pe=new Xg(N,ht,x),ge=new Ng(A),re=new gb(C,O,je,ht,ne,ge),q=new kb(C,A),K=new xb,fe=new Tb(je),te=new Dg(C,O,oe,ee,m,c),se=new Pb(C,ee,ht),X=new Gb(N,bt,ht,oe),Ue=new Lg(N,je,bt),Ze=new Wg(N,je,bt),bt.programs=re.programs,C.capabilities=ht,C.extensions=je,C.properties=A,C.renderLists=K,C.shadowMap=se,C.state=oe,C.info=bt}pe(),v!==sn&&(T=new Jg(v,t.width,t.height,i,s));const ae=new Ob(C,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(S){S!==void 0&&(Ne=S,this.setSize(Je,nt,!1))},this.getSize=function(S){return S.set(Je,nt)},this.setSize=function(S,U,H=!0){if(ae.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=S,nt=U,t.width=Math.floor(S*Ne),t.height=Math.floor(U*Ne),H===!0&&(t.style.width=S+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Je*Ne,nt*Ne).floor()},this.setDrawingBufferSize=function(S,U,H){Je=S,nt=U,Ne=H,t.width=Math.floor(S*H),t.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===sn){Re("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Me("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,U,H,G){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,U,H,G),oe.viewport($.copy(ie).multiplyScalar(Ne).round())},this.getScissor=function(S){return S.copy(Ae)},this.setScissor=function(S,U,H,G){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,U,H,G),oe.scissor(Q.copy(Ae).multiplyScalar(Ne).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(S){oe.setScissorTest(De=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,H=!0){let G=0;if(S){let z=!1;if(F!==null){const ue=F.texture.format;z=g.has(ue)}if(z){const ue=F.texture.type,be=p.has(ue),he=te.getClearColor(),ve=te.getClearAlpha(),Se=he.r,Fe=he.g,ke=he.b;be?(b[0]=Se,b[1]=Fe,b[2]=ke,b[3]=ve,N.clearBufferuiv(N.COLOR,0,b)):(y[0]=Se,y[1]=Fe,y[2]=ke,y[3]=ve,N.clearBufferiv(N.COLOR,0,y))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),te.dispose(),K.dispose(),fe.dispose(),A.dispose(),O.dispose(),ee.dispose(),ne.dispose(),X.dispose(),re.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Lc),ae.removeEventListener("sessionend",Fc),fi.stop()};function Y(S){S.preventDefault(),ka("WebGLRenderer: Context Lost."),P=!0}function ye(){ka("WebGLRenderer: Context Restored."),P=!1;const S=bt.autoReset,U=se.enabled,H=se.autoUpdate,G=se.needsUpdate,z=se.type;pe(),bt.autoReset=S,se.enabled=U,se.autoUpdate=H,se.needsUpdate=G,se.type=z}function Le(S){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function vt(S){const U=S.target;U.removeEventListener("dispose",vt),st(U)}function st(S){kn(S),A.remove(S)}function kn(S){const U=A.get(S).programs;U!==void 0&&(U.forEach(function(H){re.releaseProgram(H)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,G,z,ue){U===null&&(U=Pt);const be=z.isMesh&&z.matrixWorld.determinant()<0,he=vu(S,U,H,G,z);oe.setMaterial(G,be);let ve=H.index,Se=1;if(G.wireframe===!0){if(ve=Z.getWireframeAttribute(H),ve===void 0)return;Se=2}const Fe=H.drawRange,ke=H.attributes.position;let Te=Fe.start*Se,at=(Fe.start+Fe.count)*Se;ue!==null&&(Te=Math.max(Te,ue.start*Se),at=Math.min(at,(ue.start+ue.count)*Se)),ve!==null?(Te=Math.max(Te,0),at=Math.min(at,ve.count)):ke!=null&&(Te=Math.max(Te,0),at=Math.min(at,ke.count));const Mt=at-Te;if(Mt<0||Mt===1/0)return;ne.setup(z,G,he,H,ve);let _t,rt=Ue;if(ve!==null&&(_t=j.get(ve),rt=Ze,rt.setIndex(_t)),z.isMesh)G.wireframe===!0?(oe.setLineWidth(G.wireframeLinewidth*$t()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(z.isLine){let Vt=G.linewidth;Vt===void 0&&(Vt=1),oe.setLineWidth(Vt*$t()),z.isLineSegments?rt.setMode(N.LINES):z.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else z.isPoints?rt.setMode(N.POINTS):z.isSprite&&rt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(je.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Vt=z._multiDrawStarts,me=z._multiDrawCounts,Qt=z._multiDrawCount,Ye=ve?j.get(ve).bytesPerElement:1,cn=A.get(G).currentProgram.getUniforms();for(let Sn=0;Sn<Qt;Sn++)cn.setValue(N,"_gl_DrawID",Sn),rt.render(Vt[Sn]/Ye,me[Sn])}else if(z.isInstancedMesh)rt.renderInstances(Te,Mt,z.count);else if(H.isInstancedBufferGeometry){const Vt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,me=Math.min(H.instanceCount,Vt);rt.renderInstances(Te,Mt,me)}else rt.render(Te,Mt)};function yn(S,U,H){S.transparent===!0&&S.side===It&&S.forceSinglePass===!1?(S.side=Zt,S.needsUpdate=!0,qs(S,U,H),S.side=Jn,S.needsUpdate=!0,qs(S,U,H),S.side=It):qs(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),E=fe.get(H),E.init(U),_.push(E),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),S!==H&&S.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const G=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ue=z.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const he=ue[be];yn(he,H,z),G.add(he)}else yn(ue,H,z),G.add(ue)}),E=_.pop(),G},this.compileAsync=function(S,U,H=null){const G=this.compile(S,U,H);return new Promise(z=>{function ue(){if(G.forEach(function(be){A.get(be).currentProgram.isReady()&&G.delete(be)}),G.size===0){z(S);return}setTimeout(ue,10)}je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tr=null;function _u(S){tr&&tr(S)}function Lc(){fi.stop()}function Fc(){fi.start()}const fi=new Yh;fi.setAnimationLoop(_u),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(S){tr=S,ae.setAnimationLoop(S),S===null?fi.stop():fi.start()},ae.addEventListener("sessionstart",Lc),ae.addEventListener("sessionend",Fc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(S,U);const H=ae.enabled===!0&&ae.isPresenting===!0,G=T!==null&&(F===null||H)&&T.begin(C,F);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,U,F),E=fe.get(S,_.length),E.init(U),E.state.textureUnits=x.getTextureUnits(),_.push(E),it.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ce.setFromProjectionMatrix(it,Pn,U.reversedDepth),Xe=this.localClippingEnabled,mt=ge.init(this.clippingPlanes,Xe),w=K.get(S,R.length),w.init(),R.push(w),ae.enabled===!0&&ae.isPresenting===!0){const be=C.xr.getDepthSensingMesh();be!==null&&nr(be,U,-1/0,C.sortObjects)}nr(S,U,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(J,de),gt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,gt&&te.addToRenderList(w,S),this.info.render.frame++,mt===!0&&ge.beginShadows();const z=E.state.shadowsArray;if(se.render(z,S,U),mt===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&T.hasRenderPass())===!1){const be=w.opaque,he=w.transmissive;if(E.setupLights(),U.isArrayCamera){const ve=U.cameras;if(he.length>0)for(let Se=0,Fe=ve.length;Se<Fe;Se++){const ke=ve[Se];Uc(be,he,S,ke)}gt&&te.render(S);for(let Se=0,Fe=ve.length;Se<Fe;Se++){const ke=ve[Se];Nc(w,S,ke,ke.viewport)}}else he.length>0&&Uc(be,he,S,U),gt&&te.render(S),Nc(w,S,U)}F!==null&&W===0&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),G&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,U),ne.resetDefaultState(),V=-1,k=null,_.pop(),_.length>0?(E=_[_.length-1],x.setTextureUnits(E.state.textureUnits),mt===!0&&ge.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,I!==null&&I.renderEnd()};function nr(S,U,H,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ce.intersectsSprite(S)){G&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(it);const be=ee.update(S),he=S.material;he.visible&&w.push(S,be,he,H,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ce.intersectsObject(S))){const be=ee.update(S),he=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),He.copy(be.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(it)),Array.isArray(he)){const ve=be.groups;for(let Se=0,Fe=ve.length;Se<Fe;Se++){const ke=ve[Se],Te=he[ke.materialIndex];Te&&Te.visible&&w.push(S,be,Te,H,He.z,ke)}}else he.visible&&w.push(S,be,he,H,He.z,null)}}const ue=S.children;for(let be=0,he=ue.length;be<he;be++)nr(ue[be],U,H,G)}function Nc(S,U,H,G){const{opaque:z,transmissive:ue,transparent:be}=S;E.setupLightsView(H),mt===!0&&ge.setGlobalState(C.clippingPlanes,H),G&&oe.viewport($.copy(G)),z.length>0&&Ws(z,U,H),ue.length>0&&Ws(ue,U,H),be.length>0&&Ws(be,U,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Uc(S,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Te=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Ln(1,1,{generateMipmaps:!0,type:Te?Yn:sn,minFilter:Cn,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const ue=E.state.transmissionRenderTarget[G.id],be=G.viewport||$;ue.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const he=C.getRenderTarget(),ve=C.getActiveCubeFace(),Se=C.getActiveMipmapLevel();C.setRenderTarget(ue),C.getClearColor(_e),Ee=C.getClearAlpha(),Ee<1&&C.setClearColor(16777215,.5),C.clear(),gt&&te.render(H);const Fe=C.toneMapping;C.toneMapping=In;const ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),mt===!0&&ge.setGlobalState(C.clippingPlanes,G),Ws(S,H,G),x.updateMultisampleRenderTarget(ue),x.updateRenderTargetMipmap(ue),je.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let at=0,Mt=U.length;at<Mt;at++){const _t=U[at],{object:rt,geometry:Vt,material:me,group:Qt}=_t;if(me.side===It&&rt.layers.test(G.layers)){const Ye=me.side;me.side=Zt,me.needsUpdate=!0,Oc(rt,H,G,Vt,me,Qt),me.side=Ye,me.needsUpdate=!0,Te=!0}}Te===!0&&(x.updateMultisampleRenderTarget(ue),x.updateRenderTargetMipmap(ue))}C.setRenderTarget(he,ve,Se),C.setClearColor(_e,Ee),ke!==void 0&&(G.viewport=ke),C.toneMapping=Fe}function Ws(S,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ue=S.length;z<ue;z++){const be=S[z],{object:he,geometry:ve,group:Se}=be;let Fe=be.material;Fe.allowOverride===!0&&G!==null&&(Fe=G),he.layers.test(H.layers)&&Oc(he,U,H,ve,Fe,Se)}}function Oc(S,U,H,G,z,ue){S.onBeforeRender(C,U,H,G,z,ue),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(C,U,H,G,S,ue),z.transparent===!0&&z.side===It&&z.forceSinglePass===!1?(z.side=Zt,z.needsUpdate=!0,C.renderBufferDirect(H,U,G,z,S,ue),z.side=Jn,z.needsUpdate=!0,C.renderBufferDirect(H,U,G,z,S,ue),z.side=It):C.renderBufferDirect(H,U,G,z,S,ue),S.onAfterRender(C,U,H,G,z,ue)}function qs(S,U,H){U.isScene!==!0&&(U=Pt);const G=A.get(S),z=E.state.lights,ue=E.state.shadowsArray,be=z.state.version,he=re.getParameters(S,z.state,ue,U,H,E.state.lightProbeGridArray),ve=re.getProgramCacheKey(he);let Se=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Fe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=O.get(S.envMap||G.environment,Fe),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Se===void 0&&(S.addEventListener("dispose",vt),Se=new Map,G.programs=Se);let ke=Se.get(ve);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===be)return kc(S,he),ke}else he.uniforms=re.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,H,he),S.onBeforeCompile(he,C),ke=re.acquireProgram(he,ve),Se.set(ve,ke),G.uniforms=he.uniforms;const Te=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=ge.uniform),kc(S,he),G.needsLights=yu(S),G.lightsStateVersion=be,G.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=ke,G.uniformsList=null,ke}function Bc(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=La.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function kc(S,U){const H=A.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function xu(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let H=0,G=S.length;H<G;H++){const z=S[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function vu(S,U,H,G,z){U.isScene!==!0&&(U=Pt),x.resetTextureUnits();const ue=U.fog,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,he=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:We.workingColorSpace,ve=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Se=O.get(G.envMap||be,ve),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,Mt=!!H.morphAttributes.color;let _t=In;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_t=C.toneMapping);const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Vt=rt!==void 0?rt.length:0,me=A.get(G),Qt=E.state.lights;if(mt===!0&&(Xe===!0||S!==k)){const ut=S===k&&G.id===V;ge.setState(G,S,ut)}let Ye=!1;G.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Qt.state.version||me.outputColorSpace!==he||z.isBatchedMesh&&me.batching===!1||!z.isBatchedMesh&&me.batching===!0||z.isBatchedMesh&&me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&me.instancing===!1||!z.isInstancedMesh&&me.instancing===!0||z.isSkinnedMesh&&me.skinning===!1||!z.isSkinnedMesh&&me.skinning===!0||z.isInstancedMesh&&me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&me.instancingMorph===!1&&z.morphTexture!==null||me.envMap!==Se||G.fog===!0&&me.fog!==ue||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==ge.numPlanes||me.numIntersection!==ge.numIntersection)||me.vertexAlphas!==Fe||me.vertexTangents!==ke||me.morphTargets!==Te||me.morphNormals!==at||me.morphColors!==Mt||me.toneMapping!==_t||me.morphTargetsCount!==Vt||!!me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,me.__version=G.version);let cn=me.currentProgram;Ye===!0&&(cn=qs(G,U,z),I&&G.isNodeMaterial&&I.onUpdateProgram(G,cn,me));let Sn=!1,$n=!1,Ri=!1;const ot=cn.getUniforms(),yt=me.uniforms;if(oe.useProgram(cn.program)&&(Sn=!0,$n=!0,Ri=!0),G.id!==V&&(V=G.id,$n=!0),me.needsLights){const ut=xu(E.state.lightProbeGridArray,z);me.lightProbeGrid!==ut&&(me.lightProbeGrid=ut,$n=!0)}if(Sn||k!==S){oe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(N,"projectionMatrix",S.projectionMatrix),ot.setValue(N,"viewMatrix",S.matrixWorldInverse);const ei=ot.map.cameraPosition;ei!==void 0&&ei.setValue(N,dt.setFromMatrixPosition(S.matrixWorld)),ht.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,$n=!0,Ri=!0)}if(me.needsLights&&(Qt.state.directionalShadowMap.length>0&&ot.setValue(N,"directionalShadowMap",Qt.state.directionalShadowMap,x),Qt.state.spotShadowMap.length>0&&ot.setValue(N,"spotShadowMap",Qt.state.spotShadowMap,x),Qt.state.pointShadowMap.length>0&&ot.setValue(N,"pointShadowMap",Qt.state.pointShadowMap,x)),z.isSkinnedMesh){ot.setOptional(N,z,"bindMatrix"),ot.setOptional(N,z,"bindMatrixInverse");const ut=z.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ot.setValue(N,"boneTexture",ut.boneTexture,x))}z.isBatchedMesh&&(ot.setOptional(N,z,"batchingTexture"),ot.setValue(N,"batchingTexture",z._matricesTexture,x),ot.setOptional(N,z,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",z._indirectTexture,x),ot.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",z._colorsTexture,x));const Qn=H.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&Pe.update(z,H,cn),($n||me.receiveShadow!==z.receiveShadow)&&(me.receiveShadow=z.receiveShadow,ot.setValue(N,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(yt.envMapIntensity.value=U.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=Vb()),$n){if(ot.setValue(N,"toneMappingExposure",C.toneMappingExposure),me.needsLights&&Mu(yt,Ri),ue&&G.fog===!0&&q.refreshFogUniforms(yt,ue),q.refreshMaterialUniforms(yt,G,Ne,nt,E.state.transmissionRenderTarget[S.id]),me.needsLights&&me.lightProbeGrid){const ut=me.lightProbeGrid;yt.probesSH.value=ut.texture,yt.probesMin.value.copy(ut.boundingBox.min),yt.probesMax.value.copy(ut.boundingBox.max),yt.probesResolution.value.copy(ut.resolution)}La.upload(N,Bc(me),yt,x)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(La.upload(N,Bc(me),yt,x),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(N,"center",z.center),ot.setValue(N,"modelViewMatrix",z.modelViewMatrix),ot.setValue(N,"normalMatrix",z.normalMatrix),ot.setValue(N,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){const ut=G.uniformsGroups;for(let ei=0,Ci=ut.length;ei<Ci;ei++){const Gc=ut[ei];X.update(Gc,cn),X.bind(Gc,cn)}}return cn}function Mu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function yu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,U,H){const G=A.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),A.get(S.texture).__webglTexture=U,A.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const H=A.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Su=N.createFramebuffer();this.setRenderTarget=function(S,U=0,H=0){F=S,B=U,W=H;let G=null,z=!1,ue=!1;if(S){const he=A.get(S);if(he.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),$.copy(S.viewport),Q.copy(S.scissor),le=S.scissorTest,oe.viewport($),oe.scissor(Q),oe.setScissorTest(le),V=-1;return}else if(he.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(he.__hasExternalTextures)x.rebindTextures(S,A.get(S.texture).__webglTexture,A.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Fe=S.depthTexture;if(he.__boundDepthTexture!==Fe){if(Fe!==null&&A.has(Fe)&&(S.width!==Fe.image.width||S.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const ve=S.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);const Se=A.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Se[U])?G=Se[U][H]:G=Se[U],z=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?G=A.get(S).__webglMultisampledFramebuffer:Array.isArray(Se)?G=Se[H]:G=Se,$.copy(S.viewport),Q.copy(S.scissor),le=S.scissorTest}else $.copy(ie).multiplyScalar(Ne).floor(),Q.copy(Ae).multiplyScalar(Ne).floor(),le=De;if(H!==0&&(G=Su),oe.bindFramebuffer(N.FRAMEBUFFER,G)&&oe.drawBuffers(S,G),oe.viewport($),oe.scissor(Q),oe.setScissorTest(le),z){const he=A.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,H)}else if(ue){const he=U;for(let ve=0;ve<S.textures.length;ve++){const Se=A.get(S.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,Se.__webglTexture,H,he)}}else if(S!==null&&H!==0){const he=A.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,H)}V=-1},this.readRenderTargetPixels=function(S,U,H,G,z,ue,be,he=0){if(!(S&&S.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=A.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be]),ve){oe.bindFramebuffer(N.FRAMEBUFFER,ve);try{const Se=S.textures[he],Fe=Se.format,ke=Se.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!ht.textureFormatReadable(Fe)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ke)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&H>=0&&H<=S.height-z&&N.readPixels(U,H,G,z,L.convert(Fe),L.convert(ke),ue)}finally{const Se=F!==null?A.get(F).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,G,z,ue,be,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=A.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be]),ve)if(U>=0&&U<=S.width-G&&H>=0&&H<=S.height-z){oe.bindFramebuffer(N.FRAMEBUFFER,ve);const Se=S.textures[he],Fe=Se.format,ke=Se.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!ht.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(U,H,G,z,L.convert(Fe),L.convert(ke),0);const at=F!==null?A.get(F).__webglFramebuffer:null;oe.bindFramebuffer(N.FRAMEBUFFER,at);const Mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hd(N,Mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.deleteBuffer(Te),N.deleteSync(Mt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,H=0){const G=Math.pow(2,-H),z=Math.floor(S.image.width*G),ue=Math.floor(S.image.height*G),be=U!==null?U.x:0,he=U!==null?U.y:0;x.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,be,he,z,ue),oe.unbindTexture()};const Eu=N.createFramebuffer(),Tu=N.createFramebuffer();this.copyTextureToTexture=function(S,U,H=null,G=null,z=0,ue=0){let be,he,ve,Se,Fe,ke,Te,at,Mt;const _t=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(H!==null)be=H.max.x-H.min.x,he=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Se=H.min.x,Fe=H.min.y,ke=H.isBox3?H.min.z:0;else{const yt=Math.pow(2,-z);be=Math.floor(_t.width*yt),he=Math.floor(_t.height*yt),S.isDataArrayTexture?ve=_t.depth:S.isData3DTexture?ve=Math.floor(_t.depth*yt):ve=1,Se=0,Fe=0,ke=0}G!==null?(Te=G.x,at=G.y,Mt=G.z):(Te=0,at=0,Mt=0);const rt=L.convert(U.format),Vt=L.convert(U.type);let me;U.isData3DTexture?(x.setTexture3D(U,0),me=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),me=N.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),me=N.TEXTURE_2D),oe.activeTexture(N.TEXTURE0),oe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),oe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),oe.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=oe.getParameter(N.UNPACK_ROW_LENGTH),Ye=oe.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=oe.getParameter(N.UNPACK_SKIP_PIXELS),Sn=oe.getParameter(N.UNPACK_SKIP_ROWS),$n=oe.getParameter(N.UNPACK_SKIP_IMAGES);oe.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),oe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),oe.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),oe.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),oe.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);const Ri=S.isDataArrayTexture||S.isData3DTexture,ot=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const yt=A.get(S),Qn=A.get(U),ut=A.get(yt.__renderTarget),ei=A.get(Qn.__renderTarget);oe.bindFramebuffer(N.READ_FRAMEBUFFER,ut.__webglFramebuffer),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Ci=0;Ci<ve;Ci++)Ri&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(S).__webglTexture,z,ke+Ci),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(U).__webglTexture,ue,Mt+Ci)),N.blitFramebuffer(Se,Fe,be,he,Te,at,be,he,N.DEPTH_BUFFER_BIT,N.NEAREST);oe.bindFramebuffer(N.READ_FRAMEBUFFER,null),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||A.has(S)){const yt=A.get(S),Qn=A.get(U);oe.bindFramebuffer(N.READ_FRAMEBUFFER,Eu),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Tu);for(let ut=0;ut<ve;ut++)Ri?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,z,ke+ut):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,z),ot?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qn.__webglTexture,ue,Mt+ut):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qn.__webglTexture,ue),z!==0?N.blitFramebuffer(Se,Fe,be,he,Te,at,be,he,N.COLOR_BUFFER_BIT,N.NEAREST):ot?N.copyTexSubImage3D(me,ue,Te,at,Mt+ut,Se,Fe,be,he):N.copyTexSubImage2D(me,ue,Te,at,Se,Fe,be,he);oe.bindFramebuffer(N.READ_FRAMEBUFFER,null),oe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(me,ue,Te,at,Mt,be,he,ve,rt,Vt,_t.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(me,ue,Te,at,Mt,be,he,ve,rt,_t.data):N.texSubImage3D(me,ue,Te,at,Mt,be,he,ve,rt,Vt,_t):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ue,Te,at,be,he,rt,Vt,_t.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ue,Te,at,_t.width,_t.height,rt,_t.data):N.texSubImage2D(N.TEXTURE_2D,ue,Te,at,be,he,rt,Vt,_t);oe.pixelStorei(N.UNPACK_ROW_LENGTH,Qt),oe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),oe.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),oe.pixelStorei(N.UNPACK_SKIP_ROWS,Sn),oe.pixelStorei(N.UNPACK_SKIP_IMAGES,$n),ue===0&&U.generateMipmaps&&N.generateMipmap(me),oe.unbindTexture()},this.initRenderTarget=function(S){A.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),oe.unbindTexture()},this.resetState=function(){B=0,W=0,F=null,oe.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const Ec=72,Wb=48;function Tc(a=5){return{count:Math.max(1,Math.min(Ec,Math.floor(a))),shields:0}}function su(a,e){const t={...a},n=Math.max(0,Math.ceil(e)),i=Math.min(t.shields,n);return t.shields-=i,t.count=Math.max(0,t.count-n+i),t}function Va(a,e){if(a.count<=0)return{...a};let t={...a};switch(e.op){case"+":t.count+=e.value;break;case"-":t.count-=e.value;break;case"*":t.count*=e.value;break;case"/":t.count=Math.floor(t.count/Math.max(1,e.value));break;case"%":t.count=Math.floor(t.count*(1+e.value/100));break;case"shield":t.shields+=e.value;break;case"conditional":{const n=e.condition==="atMost"?t.count<=e.threshold:e.condition==="shield"?t.shields>=e.threshold:t.count>=e.threshold;t.count+=n?e.value:e.elseValue||0;break}case"damage":return su(t,e.percent?t.count*e.value/100:e.value);default:throw new Error("Unknown operation: "+e.op)}return t.count=Math.max(0,Math.min(Ec,Math.floor(t.count))),t.shields=Math.max(0,Math.min(Wb,Math.floor(t.shields))),t}function Ha(a,e,t=1){return a.count<=0?{...a}:su(a,Math.max(0,Math.ceil(e/Math.max(1,t))-1))}function qb(a){const e=t=>t>=0?"+"+t:String(t);return a.op==="shield"?{title:"+"+a.value,caption:"PROTECTIONS",tone:"gold"}:a.op==="conditional"?{title:e(a.value),caption:"SI "+(a.condition==="atMost"?"FOULE ≤ ":a.condition==="shield"?"PROT. ≥ ":"FOULE ≥ ")+a.threshold,detail:"SINON "+e(a.elseValue||0),tone:"purple"}:a.op==="damage"?{title:"−"+a.value+(a.percent?"%":""),caption:{barrier:"BARRAGE",van:"FOURGON",bravm:"BRAV-M",debris:"OBSTACLES"}[a.kind]||"PERTES",detail:"PROTECTIONS UTILISÉES",tone:"red"}:{title:a.op==="%"?e(a.value)+"%":(a.op==="*"?"×":a.op==="/"?"÷":a.op==="-"?"−":"+")+a.value,caption:a.op==="*"?"MOBILISATION":a.op==="/"?"DISPERSION":a.op==="%"?"RALLIEMENT":a.op==="+"?"RENFORTS":"DÉPARTS",tone:["-","/"].includes(a.op)||a.value<0?"red":"blue"}}function Xb(a){let e=a>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function jb(a){let e=[{...Tc(a.startCount),path:[]}];for(const t of a.events)t.type==="enemy"?e=e.map(n=>({...Ha(n,t.count,a.strength),path:n.path})):e=e.flatMap(n=>["left","right"].map(i=>({...Va(n,t[i]),path:[...n.path,i]})));return e.map(t=>({...t,capacity:t.count>0?(t.count+t.shields)*a.strength:0,survivors:a.bossHealth?Ha(t,a.bossHealth,a.strength).count:t.count}))}function Kb(a){let e=Tc(a.startCount),t=[];for(const n of a.events){if(n.type==="enemy"){e=Ha(e,n.count,a.strength);continue}const i=Va(e,n.left),s=Va(e,n.right),r=i.count>=s.count?"left":"right";e=r==="left"?i:s,t.push(r)}return{...e,path:t,capacity:e.count>0?(e.count+e.shields)*a.strength:0}}function Jb({level:a=1,seed:e=1,startCount:t=5,strength:n=1}={}){a=Math.max(1,Math.floor(a)),n=Math.max(1,Math.floor(n));const i=Tc(t).count,s=Xb(e+a*7919+i*31);let r;for(let o=0;o<96;o++){const c=(M,w)=>M+Math.floor(s()*(w-M+1)),l=(M,w,E=!1)=>({op:"damage",kind:M,value:w,percent:E}),h=[[{op:"+",value:c(8,13)},{op:"*",value:2}],[{op:"shield",value:c(10,18)},{op:"+",value:c(7,13)}],[l("barrier",c(10,17)),l("bravm",c(28,42),!0)],[{op:"/",value:2},{op:"-",value:c(3,8)}],[{op:"conditional",condition:"atMost",threshold:c(10,17),value:c(23,32),elseValue:-5},{op:"%",value:40}],[{op:"*",value:2},{op:"shield",value:c(14,23)}],[l("van",c(15,24)),l("debris",c(35,50),!0)],[{op:"%",value:50},{op:"conditional",condition:"shield",threshold:8,value:c(22,32),elseValue:-4}],[{op:"+",value:c(9,16)},{op:"shield",value:c(11,19)}],[{op:"conditional",condition:"atLeast",threshold:c(30,44),value:c(12,20),elseValue:-8},{op:"%",value:25}]],u=[];h.forEach((M,w)=>{s()<.5&&M.reverse(),u.push({type:"choice",z:14+w*16,left:M[0],right:M[1]}),(w===4||w===7)&&u.push({type:"enemy",z:22+w*16,kind:w===4?"crs":"bac",count:c(5,9)+Math.min(8,Math.floor(a/3))})});const d={version:2,seed:e,level:a,startCount:i,strength:n,events:u,trackLength:180,bossHealth:0},f=jb(d),m=f.filter(M=>M.count>0).sort((M,w)=>M.capacity-w.capacity);if(!m.length)continue;const v=Kb(d),g=m.at(-1).capacity,p=Math.min(.93,.77+a*.012),b=m[Math.floor((m.length-1)*p)].capacity;d.bossHealth=Math.max(b,v.capacity+1),d.bossHealth>g&&(d.bossHealth=b);const y=m.filter(M=>M.capacity>=d.bossHealth);if(d.proof={winningPaths:y.length,totalPaths:f.length,winningPath:y.at(-1).path,greedyWins:v.capacity>=d.bossHealth,minSurvivors:Math.min(...y.map(M=>Ha(M,d.bossHealth,n).count))},r=d,!d.proof.greedyWins&&y.length/f.length<=.3&&y.length>=2)return d}if(!r)throw new Error("Unable to certify a playable level");return r}function Yb(a,e=!1){const t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,c=new Bt;let l=0;for(let h=0;h<a.length;++h){const u=a[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<a.length;++d){const f=a[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=a[d].attributes.position.count}c.setIndex(u)}for(const h in s){const u=nh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][d]);const m=nh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function nh(a){let e,t,n,i=-1,s=0;for(let l=0;l<a.length;++l){const h=a[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const r=new e(s),o=new zt(r,t,n);let c=0;for(let l=0;l<a.length;++l){const h=a[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const v=h.getComponent(d,m);o.setComponent(d+u,m,v)}}else r.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function ih(a,e){if(e===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===No||e===Dh){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===No)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function Zb(a,e){const t=new Map,n=[];for(const i of e){if(!i.isMesh||i.material.map){n.push(i);continue}const s=i.material.color.getHex()+":"+i.castShadow;t.has(s)||t.set(s,[]),t.get(s).push(i)}for(const i of t.values()){if(i.length<2){n.push(...i);continue}const s=i.map(l=>(l.updateMatrix(),l.geometry.clone().applyMatrix4(l.matrix))),r=Yb(s);if(!r){s.forEach(l=>l.dispose()),n.push(...i);continue}const o=i[0].material,c=new xe(r,o);c.receiveShadow=!0,c.castShadow=i[0].castShadow,c.userData.dynamic=!0,c.name="Paris static batch",a.add(c),n.push(c),s.forEach(l=>l.dispose()),i.forEach(l=>{a.remove(l),l.geometry.dispose(),l.material!==o&&l.material.dispose()})}e.splice(0,e.length,...n)}const Ho=["gilets","genz","lyceens","pompiers","infirmieres","agriculteurs"],$b=(a,e=0)=>new Oe({color:a,roughness:e?.34:.85,metalness:e}),gn=(a,e,t,n,i)=>{const s=new xe(e,$b(t));return n&&s.position.set(...n),i&&s.rotation.set(...i),s.castShadow=!0,a.add(s),s},Ke=(a,e,t,n,i,s)=>gn(a,new Rt(t,n,i),e,s),Xi=(a,e,t,n,i,s,r=8)=>gn(a,new Lt(t,n,i,r),e,s),kr=(a,e,t,n)=>gn(a,new St(t,10,8),e,n);function Qb(a=0){return au(Ho[a%Ho.length],a)}function Wo(a="crs",e=0){return au(a,e)}function au(a,e){const t=new pt,n=Ho.includes(a),i=[5860226,8077659,3300974,6116427,5397879,7098937];let s=n?i[e%i.length]:a==="crs"?2107961:a==="bravm"?2634561:4604744,r=n?3423820:2107956;const o=[14465435,12028018,14728354,10449246][e%4];if(gn(t,new Yt(.145,.47,4,6),s,[0,.72,0]),kr(t,o,.18,[0,1.25,0]),gn(t,new Yt(.07,.25,4,6),r,[-.105,.25,0]),gn(t,new Yt(.07,.25,4,6),r,[.105,.25,0]),gn(t,new Yt(.057,.24,4,6),s,[-.25,.76,0],[0,0,.3]),gn(t,new Yt(.057,.24,4,6),s,[.25,.76,0],[0,0,-.3]),a==="gilets"){Ke(t,15648046,.4,.48,.28,[0,.81,0]),Ke(t,16774572,.42,.045,.3,[0,.75,-.005]),Ke(t,16774572,.42,.045,.3,[0,.93,-.005]),Ke(t,7632764,.13,.14,.17,[0,1.46,0]),Ke(t,2634557,.31,.39,.17,[0,.81,.23]);for(const h of[-1,1])Ke(t,1712683,.065,.45,.065,[h*.155,.85,-.17]),Ke(t,15263686,.075,.39,.022,[h*.12,.82,-.159]);Ke(t,2895925,.32,.08,.2,[0,.63,.25]);const c=Xi(t,7754548,.018,.018,1.03,[.43,1.24,-.05],7);c.rotation.z=-.22;const l=new pt;l.position.set(.52,1.74,-.05);for(let h=0;h<3;h++)Ke(l,[1789882,16053750,14230327][h],.16,.35,.025,[.08+h*.16,0,0]);t.add(l)}else if(a==="genz"||a==="lyceens")Ke(t,a==="genz"?8932522:4685470,.34,.15,.32,[0,1.02,0]),Ke(t,2830655,.21,.3,.19,[.14,.61,.18]),kr(t,e%2?5254187:5127991,.19,[0,1.39,0]);else if(a==="pompiers")Ke(t,14260771,.39,.51,.29,[0,.79,0]),Ke(t,15198394,.43,.07,.32,[0,.76,.01]),Xi(t,13280830,.22,.2,.2,[0,1.48,0]),Ke(t,14540239,.39,.05,.32,[0,1.55,0]);else if(a==="infirmieres")Ke(t,15462891,.4,.49,.29,[0,.8,0]),Ke(t,6464418,.19,.07,.31,[0,.85,-.01]),Ke(t,12664137,.05,.2,.32,[0,.84,-.025]),Ke(t,15462891,.2,.08,.2,[0,1.43,0]);else if(a==="agriculteurs")Ke(t,6522444,.38,.46,.3,[0,.8,0]),Xi(t,11897932,.26,.25,.06,[0,1.48,0]),Xi(t,11040835,.16,.17,.17,[0,1.55,0]);else if(Ke(t,a==="bac"?4014921:1911613,.4,.47,.27,[0,.82,0]),Ke(t,8754342,.3,.06,.29,[0,.95,-.01]),a==="crs"){Xi(t,2437958,.21,.2,.16,[0,1.45,0]),Ke(t,7967400,.38,.11,.04,[0,1.27,-.18]);const l=gn(t,new Rt(.43,.69,.055),9613763,[.36,.65,-.19],[0,0,-.12]);l.material.transparent=!0,l.material.opacity=.82,Ke(t,3359575,.21,.09,.06,[.4,.89,-.24])}else a==="bravm"?(Xi(t,1055527,.23,.22,.21,[0,1.44,0]),Ke(t,7440538,.34,.07,.07,[0,1.31,-.19])):(Ke(t,4418947,.14,.14,.15,[-.22,.89,0]),kr(t,e%2?2960696:3947064,.2,[0,1.39,0]));if(a==="bravm"){const c=new pt;c.userData.legacyMotorcycle=!0,t.add(c);for(const l of[-.34,.37]){const h=gn(c,new Vs(.19,.073,7,10),1448996,[l,.2,.05],[0,Math.PI/2,0]);h.castShadow=!1}Ke(c,4873588,.7,.17,.25,[0,.35,0]),Ke(c,2766408,.31,.17,.33,[-.09,.48,0]),Ke(c,10602188,.11,.15,.08,[.49,.47,-.02]),Ke(c,4546676,.1,.16,.42,[.26,.51,0])}return t.userData.faction=a,t}function ru(){const a=new pt;Ke(a,15791091,2.55,1.3,1.22,[0,.92,0]),Ke(a,12177631,.85,.48,1.24,[.82,1.26,-.01]),Ke(a,2636886,2.53,.15,1.26,[0,.79,0]),Ke(a,3232890,1.8,.3,1.27,[-.24,1.19,0]);for(const e of[-.78,.83])for(const t of[-.52,.52]){const n=gn(a,new Lt(.27,.27,.14,10),1515824,[e,.36,t],[Math.PI/2,0,0]);n.castShadow=!1}return Ke(a,3569372,.26,.13,.25,[.03,1.71,-.28]),Ke(a,14500955,.26,.13,.25,[.03,1.71,.28]),a.userData.faction="fourgon",a}function er(a){const e=new Map,t=new Map,n=a.clone();return ou(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function ou(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)ou(a.children[n],e.children[n],t)}class Ai extends us{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new sh(t,Ve.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new sh(t,Ve.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new b_(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Cs.extractUrlBase(e);r=Cs.resolveURL(l,this.path)}else r=Cs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new jh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cu){try{r[Ve.KHR_BINARY_GLTF]=new __(e)}catch(u){i&&i(u);return}s=JSON.parse(r[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new D_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:r[u]=new n_;break;case Ve.KHR_DRACO_MESH_COMPRESSION:r[u]=new x_(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:r[u]=new v_;break;case Ve.KHR_MESH_QUANTIZATION:r[u]=new M_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function e_(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function wt(a,e,t){const n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t_{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],on);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jh(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Cf(h),l.distance=u;break;case"spot":l=new Af(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class n_{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],on),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ft))}return Promise.all(i)}}class i_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class s_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(s,s)}return Promise.all(i)}}class a_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class r_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class o_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class c_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class l_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(s[0],s[1],s[2],on),Promise.all(i)}}class h_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class u_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(s[0],s[1],s[2],on),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ft)),Promise.all(i)}}class d_{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class f_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,t){const n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class p_{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class m_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class g_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class sh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class b_{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==hn.TRIANGLES&&l.mode!==hn.TRIANGLE_STRIP&&l.mode!==hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const v=new ze,g=new D,p=new an,b=new D(1,1,1),y=new Ka(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&b.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,v.compose(g,p,b));for(const M in c)if(M==="_COLOR_0"){const w=c[M];y.instanceColor=new Os(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);lt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const cu="glTF",Ss=12,ah={JSON:1313821514,BIN:5130562};class __{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ss,s=new DataView(e,Ss);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===ah.JSON){const l=new Uint8Array(e,Ss+r,o);this.content=n.decode(l)}else if(c===ah.BIN){const l=Ss+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class x_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const u=qo[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=qo[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Qi[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(f)},o,l,on,d)})})}}class v_{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class M_{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class lu extends cs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,v=m-l,g=-2*f+3*d,p=f-d,b=1-g,y=p-d+u;for(let M=0;M!==o;M++){const w=r[v+M+o],E=r[v+M+c]*h,R=r[m+M+o],_=r[m+M]*h;s[M]=b*w+y*E+g*R+p*_}return s}}const y_=new an;class S_ extends lu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return y_.fromArray(s).normalize().toArray(s),s}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rh={9728:Ft,9729:Ct,9984:Eh,9985:Ra,9986:Ts,9987:Cn},oh={33071:Rn,33648:Fa,10497:hi},Gr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E_={CUBICSPLINE:void 0,LINEAR:Fs,STEP:Ls},zr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T_(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),a.DefaultMaterial}function _i(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w_(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function A_(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R_(a){let e;const t=a.extensions&&a.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vr(t.attributes):e=a.indices+":"+Vr(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+Vr(a.targets[n]);return e}function Vr(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Xo(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C_(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const P_=new ze;class D_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Ya(this.options.manager):this.textureLoader=new If(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return _i(s,o,i),wn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Cs.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Gr[i.type],o=Qi[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new zt(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],c=Gr[i.type],l=Qi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,g;if(f&&f!==u){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(b);y||(v=new l(o,p*f,i.count*f/h),y=new Xd(v,f/h),t.cache.add(b,y)),g=new dc(y,c,d%f/h,m)}else o===null?v=new l(i.count*c):v=new l(o,d,i.count*c),g=new zt(v,c,m);if(i.sparse!==void 0){const p=Gr.SCALAR,b=Qi[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new b(r[1],y,i.sparse.count*p),E=new l(r[2],M,i.sparse.count*c);o!==null&&(g=new zt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,_=w.length;R<_;R++){const T=w[R];if(g.setX(T,E[R*c]),c>=2&&g.setY(T,E[R*c+1]),c>=3&&g.setZ(T,E[R*c+2]),c>=4&&g.setW(T,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=rh[d.magFilter]||Ct,h.minFilter=rh[d.minFilter]||Cn,h.wrapS=oh[d.wrapS]||hi,h.wrapT=oh[d.wrapT]||hi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Nt(v);g.needsUpdate=!0,d(g)}),t.load(Cs.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),wn(u,r),u.userData.mimeType=r.mimeType||C_(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(r);r=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Gh,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new kh,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Oe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},c=s.extensions||{},l=[];if(c[Ve.KHR_MATERIALS_UNLIT]){const u=i[Ve.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],on),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=It);const h=s.alphaMode||zr.OPAQUE;if(h===zr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Tt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==Tt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Tt){const u=s.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],on)}return s.emissiveTexture!==void 0&&r!==Tt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ft)),Promise.all(l).then(function(){const u=new r(o);return s.name&&(u.name=s.name),wn(u,s),t.associations.set(u,{materials:e}),s.extensions&&_i(i,u,s),u})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ch(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=R_(l),u=i[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=ch(new Bt,l,t),i[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?T_(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const v=h[f],g=r[f];let p;const b=l[f];if(g.mode===hn.TRIANGLES||g.mode===hn.TRIANGLE_STRIP||g.mode===hn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Yd(v,b):new xe(v,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===hn.TRIANGLE_STRIP?p.geometry=ih(p.geometry,Dh):g.mode===hn.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,No));else if(g.mode===hn.LINES)p=new nf(v,b);else if(g.mode===hn.LINE_STRIP)p=new gc(v,b);else if(g.mode===hn.LINE_LOOP)p=new sf(v,b);else if(g.mode===hn.POINTS)p=new af(v,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&A_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),wn(p,s),g.extensions&&_i(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&_i(i,u[0],s),u[0];const d=new pt;s.extensions&&_i(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(Rd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Za(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){o.push(u);const d=new ze;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new pc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(m),h.push(v))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,M=d.length;y<M;y++){const w=d[y],E=f[y],R=m[y],_=v[y],T=g[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const C=n._createAnimationTracks(w,E,R,_,T);if(C)for(let P=0;P<C.length;P++)p.push(C[P])}const b=new Go(s,void 0,p);return wn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,P_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Bh:l.length>1?h=new pt:l.length===1?h=l[0]:h=new lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=r),wn(h,s),s.extensions&&_i(n,h,s),s.matrix!==void 0){const u=new ze;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new pt;n.name&&(s.name=i.createUniqueName(n.name)),wn(s,n),n.extensions&&_i(t,s,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){const d=c[h];d.parent!==null?s.add(er(d)):s.add(d)}const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Fn||d instanceof Nt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}oi[s.path]===oi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(oi[s.path]){case oi.weights:h=as;break;case oi.rotation:h=rs;break;case oi.translation:case oi.scale:h=os;break;default:switch(n.itemSize){case 1:h=as;break;case 2:case 3:default:h=os;break}break}const u=i.interpolation!==void 0?E_[i.interpolation]:Fs,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){const v=new h(c[f]+"."+oi[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),r.push(v)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Xo(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof rs?S_:lu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I_(a,e,t){const n=e.attributes,i=new xt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const h=Xo(Qi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new D,c=new D;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const v=Xo(Qi[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new On;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function ch(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(const r in n){const o=qo[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return We.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),wn(a,e),I_(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?w_(a,e.targets,t):a})}const L_=new Ai;let va;function F_(){return va||(va=new Promise((a,e)=>{L_.load("/convergence-runner-lab/convergence/assets/tge-kenney/car-kit/van.glb",t=>a(t.scene),void 0,e)}).catch(a=>{throw va=null,a})),va}function hu(a,e){F_().then(t=>{if(!a.parent||!e.parent)return;const n=t.clone(!0),s=new xt().setFromObject(n).getSize(new D);if(s.y<=0||!Number.isFinite(s.y))return;n.scale.setScalar(1.65/s.y),n.updateMatrixWorld(!0);const r=new xt().setFromObject(n),o=r.getCenter(new D);n.position.set(-o.x,-r.min.y,-o.z);const c=new pt;c.position.copy(e.position),c.rotation.copy(e.rotation),c.add(n),c.userData.dynamic=!0,a.add(c),e.visible=!1,console.info("Kenney boss van replacement active")}).catch(t=>console.warn("Kenney boss van fallback retained",t==null?void 0:t.message))}const N_=new Ai;let Ma;const uu=new Set;function du(){return Ma||(Ma=new Promise((a,e)=>{N_.load("/convergence-runner-lab/convergence/assets/kenney-racing/vehicle-motorcycle.glb",t=>a(t.scene),void 0,e)}).catch(a=>{throw Ma=null,a})),Ma}function fu(a){a.userData.motorcycleRequested||(a.userData.motorcycleRequested=!0,du().then(e=>{var f;if(!a.parent)return;const t=e.clone(!0),i=new xt().setFromObject(t).getSize(new D),s=Math.max(i.x,i.z);if(!Number.isFinite(s)||s<=0)return;t.scale.setScalar(1.72/s),i.x>i.z&&(t.rotation.y=-Math.PI/2),t.updateMatrixWorld(!0);const o=new xt().setFromObject(t),c=o.getCenter(new D);t.position.set(-c.x,-o.min.y,-c.z),t.traverse(m=>{!m.isMesh||!m.material||(m.material=m.material.clone(),m.material.color.setHex(/wheel/i.test(m.name)?2106410:3427956),m.material.roughness=.49)});const l=new pt;l.userData.motorcycleVisual=!0,l.add(t);const h=new Oe({color:2857983,emissive:1406703,emissiveIntensity:2,roughness:.23}),u=new Oe({color:5667998,transparent:!0,opacity:.69,metalness:.3,roughness:.2});for(const m of[-1,1]){const v=new xe(new Rt(.13,.085,.12),h);v.position.set(m*.23,1.01,.22),l.add(v)}const d=new xe(new Rt(.45,.29,.025),u);d.position.set(0,.91,.31),d.rotation.x=-.3,l.add(d),a.add(l);for(const m of a.children)(f=m.userData)!=null&&f.legacyMotorcycle&&(m.visible=!1);uu.add(l),a.userData.kenneyMotorcycle=l,console.info("Kenney BRAV-M motorcycle active")}).catch(e=>console.warn("Kenney motorcycle fallback",e==null?void 0:e.message)))}function U_(){uu.clear()}function O_(){return du()}const B_=new Ai;let ya,jo=0;const wc=[],k_=window.innerWidth<600?24:40,Wa={crs:{coat:2306889,vest:1714234,helmet:2110026},bac:{coat:3422528,vest:1449254,helmet:2764083},bravm:{coat:2239805,vest:1252908,helmet:1317927}},pu=(a,e=0)=>new Oe({color:a,roughness:e?.4:.77,metalness:e});function nn(a,e,t,n){const i=new xe(new Rt(...t),pu(e));return i.position.set(...n),i.castShadow=!0,a.add(i),i}const lh=new Map;function Hr(a,e,t,n=.36,i=.13){let s=lh.get(e);if(!s){const o=document.createElement("canvas");o.width=256,o.height=96;const c=o.getContext("2d");c.fillStyle="#152236",c.fillRect(0,0,256,96),c.strokeStyle="#9cafc5",c.lineWidth=5,c.strokeRect(3,3,250,90),c.textAlign="center",c.textBaseline="middle",c.font="900 54px Arial,sans-serif",c.fillStyle="#f9fbff",c.fillText(e,128,49),s=new Tt({map:new Ei(o),transparent:!1,side:It}),lh.set(e,s)}const r=new xe(new Gt(n,i),s);r.position.set(...t),a.add(r)}function G_(a,e){const t=Wa[e]||Wa.crs,n=new pt;nn(n,t.vest,[.42,.48,.29],[0,1.1,0]),nn(n,1186342,[.37,.055,.3],[0,1.26,0]);for(const r of[-1,1])nn(n,1055269,[.075,.37,.31],[r*.21,1.08,0]),nn(n,6714760,[.07,.055,.32],[r*.19,1.19,0]);const i=new xe(new St(.205,18,12,0,Math.PI*2,0,Math.PI*.63),pu(t.helmet,.18));i.position.set(0,1.57,0),i.castShadow=!0,n.add(i),nn(n,1516335,[.38,.055,.23],[0,1.46,.09]);const s=nn(n,8428714,[.35,.16,.025],[0,1.44,.19]);if(s.material=s.material.clone(),s.material.transparent=!0,s.material.opacity=.63,e==="crs"){const r=nn(n,7572637,[.53,.79,.045],[.27,.8,.33]);r.material=r.material.clone(),r.material.transparent=!0,r.material.opacity=.72,r.material.metalness=.08,nn(n,1319991,[.48,.15,.052],[.27,.85,.36]),nn(n,11977929,[.49,.04,.055],[.27,1.17,.35]),nn(n,11977929,[.49,.04,.055],[.27,.45,.35]),Hr(n,"CRS",[.27,.88,.392],.37,.14)}else e==="bac"?(nn(n,1383202,[.38,.12,.025],[0,1.15,.16]),nn(n,3623777,[.18,.19,.1],[-.26,.98,-.03]),Hr(n,"BAC",[0,1.15,.179],.31,.13)):(nn(n,2372678,[.32,.12,.23],[0,.94,-.06]),Hr(n,"BRAV-M",[0,1.16,.179],.38,.11));return a.add(n),n}function mu(){return ya||(ya=new Promise((a,e)=>B_.load("/convergence-runner-lab/convergence/assets/quaternius/animated-human.glb",a,void 0,e)).catch(a=>{throw ya=null,a})),ya}function Ko(a,e="crs"){jo>=k_||(jo++,mu().then(t=>{var d;if(!a.parent)return;const n=er(t.scene),i=new Sc(n),s=t.animations.find(f=>f.name==="Idle");s&&(i.clipAction(s).play(),i.update(.001)),n.updateMatrixWorld(!0),n.traverse(f=>{f.isSkinnedMesh&&(f.computeBoundingBox(),f.frustumCulled=!1)});const o=new xt().setFromObject(n).getSize(new D).y;if(o<=0||!Number.isFinite(o))return;n.scale.setScalar(1.64/o),n.rotation.y=Math.PI/2,n.updateMatrixWorld(!0);const c=new xt().setFromObject(n),l=c.getCenter(new D);n.position.set(-l.x,-c.min.y,-l.z);const h=Wa[e]||Wa.crs;n.traverse(f=>{if(!f.isSkinnedMesh)return;const m=f.material.clone();m.map=null,m.color.setHex(h.coat),m.roughness=.83,m.needsUpdate=!0,f.material=m});const u=new pt;u.add(n),G_(u,e);for(const f of a.children)(d=f.userData)!=null&&d.motorcycleVisual||(f.visible=!1);a.add(u),wc.push({mixer:i,officer:a}),a.userData.policeModel=u}).catch(t=>console.warn("Police model fallback",t==null?void 0:t.message)))}function z_(){jo=0,wc.length=0}function V_(){return mu()}function H_(a){for(const e of wc){let t=e.officer,n=!0;for(;t;){if(!t.visible){n=!1;break}t=t.parent}n&&e.mixer.update(a)}}const W_={blue:[1149930,6877183],red:[15151947,16750707],gold:[16755737,16773271],purple:[7947493,15706367]};function q_(a,e,t,n,i){const s=qb(a),[r,o]=W_[s.tone],c=new pt;c.position.set(e,0,-t),c.userData.dynamic=!0;const l=new Oe({color:r,roughness:.27,metalness:.25}),h=new Oe({color:o,emissive:o,emissiveIntensity:.7,roughness:.3}),u=new Oe({color:1319478,roughness:.4}),d=(w,E,R,_,T,C,P)=>{const I=new xe(new Rt(w,E,R),P);return I.position.set(_,T,C),c.add(I),I},f=a.op==="damage",m=f?3.1:3.85;for(const w of[-1,1]){d(.42,m,.45,w*2.16,m/2,0,l),d(.64,.3,.68,w*2.16,.15,0,u),d(.65,.28,.65,w*2.16,m-.06,0,l),d(.09,m-.8,.06,w*2.16,m/2,.26,h);for(const E of[.46,m-.42])d(.53,.1,.54,w*2.16,E,0,h)}d(4.45,.3,.44,0,m,0,l),d(3.8,.06,.04,0,m-.04,.26,h);const v=new xe(new Gt(4,m-.45),new Oe({color:r,emissive:r,emissiveIntensity:.12,transparent:!0,opacity:f?.045:.12,depthWrite:!1,side:It}));v.position.set(0,m/2,0),c.add(v);const g=document.createElement("canvas");g.width=512,g.height=256;const p=g.getContext("2d");p.fillStyle="rgba(12,24,42,.92)",p.beginPath(),p.roundRect(8,8,496,240,24),p.fill(),p.strokeStyle="#"+new we(o).getHexString(),p.lineWidth=7,p.stroke(),p.textAlign="center",p.textBaseline="middle",p.lineJoin="round",p.font="900 110px system-ui",p.lineWidth=9,p.strokeStyle="#08101e",p.strokeText(s.title,256,81),p.fillStyle="#ffffff",p.fillText(s.title,256,81),p.font="900 30px system-ui",p.fillStyle="#"+new we(o).getHexString(),p.fillText(s.caption,256,167),s.detail&&(p.font="700 22px system-ui",p.fillStyle="#f5f7ff",p.fillText(s.detail,256,211));const b=new Ei(g);b.colorSpace=ft;const y=new xe(new Gt(3.95,1.97),new Tt({map:b,transparent:!0,depthWrite:!1}));y.position.set(0,f?3.35:2.92,.28),c.add(y);const M=new xe(new Gt(4.1,2),new Tt({color:r,transparent:!0,opacity:.16,depthWrite:!1}));if(M.rotation.x=-Math.PI/2,M.position.set(0,.07,.15),c.add(M),f)if(a.kind==="van"){const w=ru();w.scale.setScalar(.78),w.position.y=.05,c.add(w),hu(c,w)}else if(a.kind==="bravm"){const w=Wo("bravm",0);w.rotation.y=Math.PI/2,w.position.y=.04,c.add(w),Ko(w,"bravm"),fu(w)}else{d(3.45,.85,.48,0,.68,0,new Oe({color:5793141,roughness:.8}));const w=new Oe({color:16765536});for(let E=0;E<7;E++)d(.28,.2,.52,-1.4+E*.46,1.02,0,E%2?u:w);for(const E of[-1,1])d(.35,.24,1.1,E*1.2,.12,0,u);if(a.kind==="debris")for(let E=0;E<3;E++){const R=new xe(new $i(.23,.65,12),l);R.position.set((E-1)*.9,.33,.8),c.add(R)}}return n.add(c),i.push(c),v.userData.root=c,v}function X_(a,e,t){for(const n of a){const i=n.z-e;for(const s of["leftMesh","rightMesh"]){const r=n[s],o=r==null?void 0:r.userData.root;o&&(o.visible=i<62&&i>-8,o.visible&&(r.material.emissiveIntensity=.14+Math.sin(t*2.5+n.z)*.05))}}}function j_(a,e,t){const n=new Ai,i="/convergence-runner-lab/convergence/assets/kenney/road-side.glb";n.load(i,s=>{const r=s.scene,c=new xt().setFromObject(r).getSize(new D),l=Math.max(c.x,c.y,c.z);if(!Number.isFinite(l)||l===0){console.warn("Kenney road-side GLB empty");return}const h=1.4/l;for(let u=18;u<e;u+=35)for(const d of[-1,1]){const f=r.clone(!0);f.scale.setScalar(h),f.position.set(d*6.3,.3,-u),f.rotation.y=d>0?0:Math.PI,f.userData.dynamic=!0,a.add(f),t.push(f)}console.info("Kenney GLB roadside props integrated",i)},void 0,s=>console.warn("Optional Kenney GLB unavailable:",(s==null?void 0:s.message)||s))}const K_=[["car-kit/police.glb",-8.5,0,38,3.4],["car-kit/van.glb",8.7,0,67,3.8],["car-kit/ambulance.glb",-8.5,0,105,3.5],["car-kit/firetruck.glb",8.7,0,145,4.2],["city-kit-roads/construction-barrier.glb",-5.95,0,24,1.7],["city-kit-roads/traffic-light.glb",6.4,0,52,4],["city-kit-roads/light-curved.glb",-6.5,0,85,4.5],["city-kit-commercial/building-a.glb",-19,0,65,13],["city-kit-commercial/building-b.glb",19,0,112,13],["blocky-characters/character-a.glb",-6.2,0,45,1.75],["blocky-characters/character-b.glb",6.2,0,95,1.75],["blocky-characters/character-c.glb",-6.2,0,132,1.75]],J_=new Ai,Wr=new Map;function Y_(a){return Wr.has(a)||Wr.set(a,new Promise((e,t)=>{J_.load("/convergence-runner-lab/convergence/assets/tge-kenney/"+a,n=>e(n.scene),void 0,t)})),Wr.get(a)}function Z_(a,e,t){const n={active:!0};t.push({userData:{assetBatch:n}});for(const[i,s,r,o,c]of K_)o>=e-10||Y_(i).then(l=>{if(!n.active)return;const h=l.clone(!0),d=new xt().setFromObject(h).getSize(new D);if(!Number.isFinite(d.y)||d.y<=0)return;h.scale.setScalar(c/d.y),h.updateMatrixWorld(!0);const f=new xt().setFromObject(h);h.position.set(s-f.getCenter(new D).x,r-f.min.y,-o-f.getCenter(new D).z),h.userData.dynamic=!0,h.traverse(m=>{m.isMesh&&(m.castShadow=!1,m.receiveShadow=!0)}),a.add(h),t.push(h),console.info("Kenney asset displayed",i)}).catch(l=>console.warn("Kenney optional asset failed",i,l==null?void 0:l.message))}function $_(a){var e;for(const t of a)(e=t.userData)!=null&&e.assetBatch&&(t.userData.assetBatch.active=!1)}function Q_(a){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#747779",t.fillRect(0,0,256,256);let n=193847;const i=()=>(n=Math.imul(1664525,n)+1013904223>>>0,n/4294967296);for(let r=0;r<9800;r++){const o=35+Math.floor(i()*170);t.fillStyle="rgba("+o+","+o+","+o+","+(.025+i()*.13)+")";const c=.35+i()*1.9;t.fillRect(i()*256,i()*256,c,c)}for(let r=0;r<12;r++){const o=i()*256,c=i()*256;t.strokeStyle="rgba(35,40,43,0.11)",t.lineWidth=.35+i()*.75,t.beginPath(),t.moveTo(o,c),t.bezierCurveTo(o+i()*18,c+13,o-8,c+26,o+i()*24,c+39),t.stroke()}const s=new Ei(e);return s.wrapS=hi,s.wrapT=hi,s.repeat.set(1.9,Math.max(8,a/6)),s.anisotropy=4,s.colorSpace=ft,s.needsUpdate=!0,s}const Xt={limestone:new Oe({color:14470067,roughness:.91}),trim:new Oe({color:15785923,roughness:.91}),slate:new Oe({color:4609644,roughness:.92}),glass:new Oe({color:2637400,roughness:.28,metalness:.22}),iron:new Oe({color:2108475,metalness:.64,roughness:.37}),gold:new Oe({color:16573088,emissive:16763238,emissiveIntensity:1.25,roughness:.4}),foliage:new Oe({color:5731134,roughness:.95})},ex=new Rt(1,1,1);function jt(a,e,t){if(!t.length)return;const n=new Ka(ex,e,t.length),i=new lt;t.forEach(([s,r,o,c,l,h,u=0,d=0,f=0],m)=>{i.position.set(s,r,o),i.scale.set(c,l,h),i.rotation.set(u,d,f),i.updateMatrix(),n.setMatrixAt(m,i.matrix)}),n.instanceMatrix.needsUpdate=!0,n.castShadow=!1,n.receiveShadow=!0,a.add(n)}function tx(a,e,t){const n=new pt;n.name="CONVERGENCE_Paris_Streetscape",n.userData.dynamic=!0;const i=[],s=[],r=[],o=[],c=[],l=[];for(let R=0;R<e+35;R+=17){const T=4+Math.floor(R/17)%4*1.8-1.5;for(const C of[-1,1]){const P=C*(16+Math.abs(R%3)),I=P-C*3.83;s.push([I,T-.48,-R,.28,.2,9.1]),s.push([I,1.65,-R,.2,.1,9.1]);for(const B of[-1,1])c.push([P+B*2,T+.34,-R,4.28,.16,9.2,0,0,B*.32]);for(let B=0;B<4;B++){const W=.94+B*1.59;if(W>T-.96)break;for(const F of[-3.16,-1.06,1.06,3.16])i.push([I-C*.055,W,-R+F,.1,1.13,.8]),s.push([I-C*.11,W-.66,-R+F,.19,.11,.98]),(B===1||B===2)&&(r.push([I-C*.28,W-.52,-R+F,.48,.065,1]),o.push([I-C*.45,W-.31,-R+F,.04,.49,1]))}for(const B of[-2.9,0,2.9])l.push([I-C*.025,T+.55,-R+B,.16,.54,.56])}}jt(n,Xt.glass,i),jt(n,Xt.trim,s),jt(n,Xt.limestone,r),jt(n,Xt.iron,o),jt(n,Xt.slate,c),jt(n,Xt.glass,l);const h=[];for(let R=0;R<e;R+=2.35)for(const _ of[-1,1])h.push([_*5.65,.76,-R,.12,1.05,.12]);for(let R=0;R<e;R+=2.35)for(const _ of[-1,1])h.push([_*5.65,.78,-R-.58,.045,.045,1.3,.55,0,0]),h.push([_*5.65,.78,-R-.58,.045,.045,1.3,-.55,0,0]);jt(n,Xt.iron,h);const u=[],d=[];for(let R=4;R<e;R+=23)for(const _ of[-1,1])u.push([_*5.9,-1.4,-R,1.15,3.6,2]),d.push([_*5.9,.2,-R,1.5,.5,2.5]);jt(n,Xt.limestone,u),jt(n,Xt.trim,d);const f=[],m=[],v=[],g=[],p=[];for(let R=9;R<e;R+=18)for(const _ of[-1,1]){const T=_*6.05,C=-R;f.push([T,.41,C,.38,.82,.38]),m.push([T,2.25,C,.11,3.35,.11]),v.push([T,4.16,C,.4,.075,.4]),p.push([T,4.46,C,.29,.5,.29]),g.push([T,4.77,C,.45,.16,.45]),g.push([T,4.91,C,.2,.15,.2]),m.push([T,5.06,C,.065,.18,.065]);for(const P of[-.55,.55])v.push([T+P*.5,3.88,C,.65,.065,.065]),p.push([T+P,4.1,C,.18,.32,.18]),g.push([T+P,4.31,C,.29,.1,.29]);for(const P of[-.16,.16])m.push([T+P,4.43,C,.04,.56,.04])}jt(n,Xt.iron,f),jt(n,Xt.iron,m),jt(n,Xt.iron,v),jt(n,Xt.gold,p),jt(n,Xt.iron,g);const b=[],y=[];for(let R=10;R<e+20;R+=25)for(const _ of[-1,1]){const T=_*(25+R%3*2),C=-R;b.push([T,.5,C,.38,4,.38]),y.push([T,4.55,C,3.9,3.4,3.75])}jt(n,new Oe({color:7889741,roughness:1}),b);const M=new _c(1,1),w=new Ka(M,Xt.foliage,y.length),E=new lt;y.forEach(([R,_,T,C,P,I],B)=>{E.position.set(R,_,T),E.scale.set(C/2,P/2,I/2),E.updateMatrix(),w.setMatrixAt(B,E.matrix)}),w.instanceMatrix.needsUpdate=!0,n.add(w),a.add(n),t.push(n),console.info("Paris architecture + Seine bridge lanterns ready",i.length,p.length)}class nx{constructor(e,t){this.scene=e,this.game=t,this.gates=[],this.obstacles=[],this.enemies=[],this.boss=null,this.meshes=[]}clear(){$_(this.meshes),this.gates=[],this.obstacles=[],this.enemies=[],this.boss=null,this.meshes.forEach(e=>{var t;e.isObject3D&&(this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{var i;(i=n.map)==null||i.dispose(),n.dispose()}):((t=e.material.map)==null||t.dispose(),e.material.dispose())))}),this.meshes=[]}generate(e,t){z_(),U_(),this.plan=Jb({level:e,seed:this.game.levelSeed??e*20261019,startCount:this.game.getStartingCrowdSize(),strength:this.game.strengthUpgrade}),t=this.plan.trackLength,this.createTrack(t),Zb(this.scene,this.meshes),this.createGates(e,t),this.createObstacles(e,t),this.createEnemies(e,t),this.createBoss(e,t),tx(this.scene,t,this.meshes),j_(this.scene,t,this.meshes),Z_(this.scene,t,this.meshes)}updateVisibility(e){X_(this.gates,e,performance.now()/1e3);for(const t of this.enemies){const n=t.z-e,i=n<72&&n>-14;t.meshGroup&&(t.meshGroup.visible=i),t.labelMesh&&(t.labelMesh.visible=i)}if(this.boss){const t=this.boss.isDefeating||this.boss.z-e<75;this.boss.meshGroup&&(this.boss.meshGroup.visible=t),this.boss.labelMesh&&(this.boss.labelMesh.visible=t)}}createTrack(e){const t=(s,r,o,c,l,h=!1)=>{const u=new xe(s,new Oe({color:r,roughness:.87}));return u.position.set(o,c,l),u.userData.dynamic=!0,u.receiveShadow=!0,u.castShadow=h,this.scene.add(u),this.meshes.push(u),u},n=t(new Gt(11,e+24),6844795,0,.025,-e/2);n.rotation.x=-Math.PI/2,n.material.color.set(16777215),n.material.map=Q_(e),n.material.roughness=.96;const i=t(new Gt(220,e+70),4351876,0,-1.65,-e/2);i.rotation.x=-Math.PI/2,i.material.roughness=.3,i.material.metalness=.12;for(let s of[-1,1]){t(new Rt(.7,.36,e+18),10398640,s*5.55,.18,-e/2),t(new Rt(.14,.12,e+18),3623e3,s*5.65,1.24,-e/2),t(new Rt(.1,.1,e+18),5333623,s*5.65,.77,-e/2);for(let r=0;r<e+6;r+=5)t(new Rt(.11,1.3,.1),3689823,s*5.65,.7,-r)}for(let s=0;s<e+6;s+=8){const r=t(new Gt(.13,3),15198692,0,.055,-s);r.rotation.x=-Math.PI/2}for(let s=0;s<e+35;s+=17)for(const r of[-1,1]){const o=4+Math.floor(s/17)%4*1.8;t(new Rt(7.5,o,9),[14731168,14201505,13153702,14141103][Math.floor(s/17)%4],r*(16+Math.abs(s%3)),o/2-1.5,-s),t(new Rt(7.8,.45,9.3),5465205,r*(16+Math.abs(s%3)),o-1.5,-s);for(let c=1;c<o/2;c++)for(let l of[-2.6,1.8])t(new Rt(.1,.9,.85),4544620,r*(16+Math.abs(s%3))-r*3.82,c*1.55-1.2,-s+l)}}createGates(e,t){for(const n of this.plan.events.filter(i=>i.type==="choice")){const i={z:n.z,passed:!1,leftGate:n.left,rightGate:n.right};i.leftMesh=this.createGateMesh(n.left,-2.5,n.z),i.rightMesh=this.createGateMesh(n.right,2.5,n.z),this.gates.push(i)}}createGateMesh(e,t,n){return q_(e,t,n,this.scene,this.meshes)}createObstacles(){}createEnemies(){for(const e of this.plan.events.filter(t=>t.type==="enemy")){const t={kind:e.kind,z:e.z,count:e.count,defeated:!1,meshes:[]};this.createEnemyCrowd(t,t.z,t.count),this.enemies.push(t)}}createEnemyCrowd(e,t,n){const i=Math.min(n,12),s=new pt;s.userData.dynamic=!0;for(let d=0;d<i;d++){const f=Wo(e.kind,d);f.position.set((d%6-2.5)*.78,0,-Math.floor(d/6)*.75),s.add(f),Ko(f,e.kind),e.kind==="bravm"&&fu(f)}s.position.set(0,0,-t),this.scene.add(s),this.meshes.push(s),e.meshGroup=s;const r=document.createElement("canvas");r.width=128,r.height=64;const o=r.getContext("2d");o.fillStyle="#f3f6ff",o.font="bold 26px system-ui",o.textAlign="center",o.textBaseline="middle",o.fillText(e.kind==="bravm"?"BRAV-M":e.kind==="bac"?"BAC":"CRS",64,19),o.font="bold 37px system-ui",o.fillText(n.toString(),64,49);const c=new Ei(r),l=new Gt(2.4,1.2),h=new Tt({map:c,transparent:!0,depthWrite:!1}),u=new xe(l,h);u.position.set(0,4,-t),u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u),e.labelMesh=u}updateEnemyLabel(e){if(!e.labelMesh)return;const t=document.createElement("canvas");t.width=128,t.height=64;const n=t.getContext("2d");if(n.fillStyle="#f3f6ff",n.font="bold 26px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(e.kind==="bravm"?"BRAV-M":e.kind==="bac"?"BAC":"CRS",64,19),n.font="bold 37px system-ui",n.fillText(Math.max(0,e.remainingCount).toString(),64,49),e.labelMesh.material.map&&e.labelMesh.material.map.dispose(),e.labelMesh.material.map=new Ei(t),e.labelMesh.material.needsUpdate=!0,e.meshGroup&&e.meshGroup.children.length>0){const i=e.meshGroup.children[e.meshGroup.children.length-1];e.meshGroup.remove(i)}}createBoss(e,t){const n=this.plan.bossHealth;this.boss={z:t,health:n,defeated:!1};const i=new pt;i.userData.dynamic=!0;for(let l=0;l<7;l++){const h=Wo(l%5===0?"bac":"crs",l);h.position.set((l-3)*.68,0,l%2*.6),i.add(h),Ko(h,l%5===0?"bac":"crs")}const s=ru();s.scale.set(.85,.85,.85),s.position.set(0,0,-4.3),i.add(s),hu(i,s),i.position.set(0,0,-t),this.scene.add(i),this.meshes.push(i),this.boss.meshGroup=i,this.boss.defeatTime=0,this.boss.isDefeating=!1;const r=document.createElement("canvas");r.width=512,r.height=128;const o=r.getContext("2d");o.fillStyle="#f3e8d8",o.font="bold 49px system-ui",o.textAlign="center",o.textBaseline="middle",o.strokeStyle="#152334",o.lineWidth=9,o.strokeText("FRONT CRS : "+n,256,64),o.fillText("FRONT CRS : "+n,256,64);const c=new xe(new Gt(7,1.6),new Tt({map:new Ei(r),transparent:!0,depthWrite:!1}));c.position.set(0,3.4,-t),c.userData.dynamic=!0,this.scene.add(c),this.meshes.push(c),this.boss.labelMesh=c}shakeBoss(){if(!this.boss||!this.boss.meshGroup)return;const e=this.boss.meshGroup,t=(Math.random()-.5)*.4,n=(Math.random()-.5)*.2;e.position.x=t,e.position.z+=n,e.traverse(i=>{i.material&&i.material.emissive&&(i.material.emissive=new we(16711680),i.material.emissiveIntensity=.6)}),setTimeout(()=>{e&&(e.position.x=0,e.traverse(i=>{i.material&&i.material.emissiveIntensity&&(i.material.emissiveIntensity=0)}))},80)}playBossDefeatAnimation(){!this.boss||!this.boss.meshGroup||(this.boss.isDefeating=!0,this.boss.defeatTime=0)}updateBossDefeat(e){if(!this.boss||!this.boss.isDefeating||!this.boss.meshGroup)return;this.boss.defeatTime+=e;const t=this.boss.defeatTime,n=this.boss.meshGroup;if(t<.5)n.position.x=(Math.random()-.5)*t*4,n.rotation.z=(Math.random()-.5)*t*.5,n.traverse(i=>{i.material&&i.material.color&&(i.material.emissive=new we(16711680),i.material.emissiveIntensity=Math.sin(t*40)*.5+.5)});else if(t<1.2){const i=(t-.5)/.7;n.position.y=-i*3,n.rotation.x=i*.8,n.rotation.z=i*.5;const s=1-i*.8;n.scale.set(s,s*(1-i*.3),s),n.traverse(r=>{r.material&&(r.material.transparent=!0,r.material.opacity=1-i)}),n.children.forEach((r,o)=>{r.position.x+=(Math.random()-.5)*e*8,r.position.y+=(Math.random()-.5)*e*5,r.rotation.x+=e*(o+1)*3})}else this.scene.remove(n),this.boss.isDefeating=!1}createDecorations(e){for(let t=12;t<e;t+=26)for(const n of[-1,1]){const i=new xe(new Lt(.07,.09,5,7),new Oe({color:6582392,metalness:.35}));i.position.set(n*6.1,2.5,-t),i.userData.dynamic=!0,this.scene.add(i),this.meshes.push(i);const s=new xe(new St(.23,8,6),new Tt({color:16770988}));s.position.set(n*6.1,4.9,-t),s.userData.dynamic=!0,this.scene.add(s),this.meshes.push(s)}}createTree(e,t){const n=Math.random();if(n<.4){const i=new Lt(.15,.25,2.5,6),s=new Oe({color:6111287}),r=new xe(i,s);r.position.set(e,1.25,t),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r);const o=[1793568,3046706,3706428];for(let c=0;c<3;c++){const l=new $i(1.2-c*.25,1.8-c*.3,8),h=new Oe({color:o[c]}),u=new xe(l,h);u.position.set(e,2.5+c*1,t),u.castShadow=!0,u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u)}}else if(n<.7){const i=new Lt(.2,.35,2.5,6),s=new Oe({color:7162945}),r=new xe(i,s);r.position.set(e,1.25,t),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r);const o=new St(1.5+Math.random()*.5,8,8),c=new Oe({color:4431943}),l=new xe(o,c);l.position.set(e,3.2,t),l.castShadow=!0,l.userData.dynamic=!0,this.scene.add(l),this.meshes.push(l)}else{const i=new Lt(.15,.3,2,6),s=new Oe({color:5125166}),r=new xe(i,s);r.position.set(e,1,t),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r);const o=new St(1.3,8,8),c=new Oe({color:16027569}),l=new xe(o,c);l.position.set(e,2.8,t),l.castShadow=!0,l.userData.dynamic=!0,this.scene.add(l),this.meshes.push(l)}}createFlower(e,t){const n=[16732754,16766784,14696699,4244735,16739904,6942894],i=n[Math.floor(Math.random()*n.length)],s=new Lt(.02,.02,.4,4),r=new Oe({color:5025616}),o=new xe(s,r);o.position.set(e,.2,t),o.userData.dynamic=!0,this.scene.add(o),this.meshes.push(o);const c=new St(.12+Math.random()*.08,6,6),l=new Oe({color:i,emissive:i,emissiveIntensity:.2}),h=new xe(c,l);h.position.set(e,.45,t),h.userData.dynamic=!0,this.scene.add(h),this.meshes.push(h)}createRock(e,t){const n=.5+Math.random()*1,i=new bc(n,0),s=new Oe({color:7697781,roughness:.9,flatShading:!0}),r=new xe(i,s);r.position.set(e,n*.4,t),r.rotation.set(Math.random(),Math.random(),Math.random()),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r)}createBush(e,t){const n=new pt,i=new Oe({color:5606191});for(let s=0;s<3;s++){const r=.4+Math.random()*.3,o=new St(r,6,6),c=new xe(o,i);c.position.set((Math.random()-.5)*.6,r*.7,(Math.random()-.5)*.6),n.add(c)}n.position.set(e,0,t),n.userData.dynamic=!0,this.scene.add(n),this.meshes.push(n)}createMountains(e){const t=[6056896,7964363,3754411];for(let n=0;n<12;n++){const s=(n%2===0?1:-1)*(40+Math.random()*30),r=-(Math.random()*e),o=15+Math.random()*20,c=8+Math.random()*10,l=new $i(c,o,6),h=new Oe({color:t[Math.floor(Math.random()*t.length)],flatShading:!0}),u=new xe(l,h);if(u.position.set(s,o*.3,r),u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u),o>20){const d=new $i(c*.3,o*.2,6),f=new Oe({color:16777215}),m=new xe(d,f);m.position.set(s,o*.7,r),m.userData.dynamic=!0,this.scene.add(m),this.meshes.push(m)}}}createClouds(e){for(let t=0;t<20;t++){const n=new pt,i=new Oe({color:16777215,transparent:!0,opacity:.85}),s=3+Math.floor(Math.random()*4);for(let r=0;r<s;r++){const o=new St(1.5+Math.random()*2,8,8),c=new xe(o,i);c.position.set(r*2.2+Math.random()*.5,Math.random()*.8,Math.random()*1),c.scale.y=.6,n.add(c)}n.position.set((Math.random()-.5)*80,20+Math.random()*15,-(Math.random()*e)),n.userData.dynamic=!0,this.scene.add(n),this.meshes.push(n)}}createStickman(e){const t=new pt,n=new Yt(.15,.5,4,4),i=new Oe({color:e}),s=new xe(n,i);s.position.y=.7,t.add(s);const r=new St(.2,8,8),o=new xe(r,i);o.position.y=1.2,t.add(o);const c=new Yt(.07,.3,4,4),l=new xe(c,i);l.position.set(-.1,.2,0),t.add(l);const h=new xe(c,i);return h.position.set(.1,.2,0),t.add(h),t}}let Sa;function ix(){Sa||(Sa=new Ya().load("/convergence-runner-lab/convergence/assets/approved/P02.webp"),Sa.colorSpace=ft);const a={value:0},e=new Tt({map:Sa,alphaTest:.15,side:It});e.onBeforeCompile=n=>{n.uniforms.marchTime=a,n.fragmentShader=n.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if(vMapUv.y < .30) discard;`),n.vertexShader=`uniform float marchTime;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float lower = 1.0-smoothstep(0.23,0.48,uv.y);
    transformed.x += sin(marchTime*4.1+step(.53,uv.x)*3.14159)*lower*.018;
    transformed.y += sin(marchTime*4.1)*.010;
    transformed.z += sin(marchTime*2.2+uv.x*8.0)*smoothstep(.60,.92,uv.y)*.022;`)};const t=new xe(new Gt(1.61,2.3,16,24),e);return t.position.set(0,1.075,0),t.castShadow=!1,{mesh:t,time:a}}function sx(a){a.model.position.x+=.13,a.model.updateMatrixWorld(!0),a.model.traverse(e=>{if(!e.isMesh)return;if(!e.isSkinnedMesh){e.visible=!!e.userData.walkingFootwear;return}const t=new Set(e.skeleton.bones.map((o,c)=>/^(Left|Right)(UpLeg|Leg|Foot|Toe)/.test(o.name)?c:-1)),n=e.geometry.clone(),i=n.attributes.skinIndex,s=n.attributes.skinWeight,r=new Float32Array(n.attributes.position.count);for(let o=0;o<r.length;o++){let c=0;for(let l=0;l<4;l++)t.has(i.array[o*4+l])&&(c+=s.array[o*4+l]);r[o]=c}n.setAttribute("leaderLegMask",new zt(r,1)),e.geometry=n,e.userData.ownedLeaderGeometry=!0,e.material=e.material.clone(),e.material.onBeforeCompile=o=>{o.vertexShader=`attribute float leaderLegMask; varying float leaderLeg; varying float leaderHeight;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
leaderLeg=leaderLegMask; leaderHeight = (modelMatrix * vec4(transformed,1.0)).y;`),o.fragmentShader=`varying float leaderLeg; varying float leaderHeight;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if(leaderHeight>.77 || leaderLeg<.5) discard;`)},e.material.customProgramCacheKey=()=>"P02-native-walking-legs-v2"})}const ax=["gilets","genz","lyceens","pompiers","infirmieres","agriculteurs"],hh=new Map,uh=new Map,Ac=new Ya;let qr,Xr;function rx(){if(!Xr){const a=Ac.load("/convergence-runner-lab/convergence/assets/crowd/p02-vest-detail.webp");a.colorSpace=ft,Xr=new Oe({map:a,transparent:!0,alphaTest:.12,depthWrite:!1,roughness:.93,side:It})}return Xr}function ox(){if(!qr){const a=Ac.load("/convergence-runner-lab/convergence/assets/crowd/p02-backpack-detail.webp");a.colorSpace=ft,qr=new Oe({map:a,transparent:!0,alphaTest:.12,depthWrite:!1,roughness:.91,metalness:0,side:It})}return qr}const rn=(a,e=0)=>new Oe({color:a,roughness:e?.55:.87,metalness:e,side:It}),cx=rn(15073042),Ps=rn(15264988,.28),Bs=rn(2569024),yi=rn(14101554),ks=rn(15855848),Gs=rn(10384971),gu=rn(7030425);function Et(a,e,t,n=[0,0,0],i){const s=new xe(e,t);return s.position.set(...n),i&&s.rotation.set(...i),s.castShadow=!0,a.add(s),s}function xn(a,e,t,n,i){return Et(a,new Rt(...t),e,n,i)}function Jo(a,e,t,n,i=.022){return Et(a,new Vs(t,i,5,18),e,[0,n,0],[Math.PI/2,0,0])}function Dn(a,e,t,n=0,i=0){const s=a.getObjectByName(e),r=new pt;return a.add(r),a.updateMatrixWorld(!0),r.position.copy(a.worldToLocal(new D(i,t,n))),r.scale.setScalar(1/a.getWorldScale(new D).x),r.quaternion.copy(a.getWorldQuaternion(new an).invert()),a.updateMatrixWorld(!0),s!=null&&s.isBone&&s.attach(r),r}function lx(a,e){let t=hh.get(e);t||(t=Ac.load("/convergence-runner-lab/convergence/assets/quaternius/palette-"+e+".png"),t.colorSpace=ft,t.flipY=!1,hh.set(e,t)),a.traverse(n=>{if(!n.isSkinnedMesh)return;let i=uh.get(e);i||(i=n.material.clone(),i.map=t,i.needsUpdate=!0,uh.set(e,i)),n.material=i,n.userData.sharedHumanoidAsset=!0})}function Ea(a,e=Bs){Et(a,new Yt(.16,.2,6,12),e,[0,-.015,.24]).scale.set(1,1,.6),xn(a,e,[.26,.16,.05],[0,-.09,.35]);const n=Et(a,new Gt(.29,.3),ox(),[0,-.025,.389]);n.castShadow=!1,n.renderOrder=2;for(const i of[-.105,.105])xn(a,Ps,[.024,.06,.025],[i,.08,.34]);xn(a,e,[.35,.1,.18],[0,-.22,.22]);for(const i of[-.16,.16])xn(a,e,[.055,.4,.055],[i,0,-.16])}function hx(a,e,t=!1){const n=Dn(a,"Head",1.57,.005),i=Et(n,new St(.208,18,12,0,Math.PI*2,0,Math.PI*.6),e,[0,.045,0]);i.material.side=It,Et(n,new Lt(.204,.213,.035,18),e,[0,-.018,0]),t&&xn(n,Ps,[.34,.05,.035],[0,.08,-.186])}function ux(a){const e=Dn(a,"Head",1.61,0);Et(e,new Lt(.31,.31,.042,20),Gs),Et(e,new Lt(.17,.19,.19,16),Gs,[0,.1,0]),Jo(e,Bs,.18,.01,.013)}function dx(a){const e=Dn(a,"RightHand",1.02,-.2),t=Et(e,new Lt(.014,.014,.86,8),Gs,[.06,.4,0]);t.rotation.z=-.12,xn(e,Gs,[.42,.29,.035],[.12,.85,0])}function fx(a){const e=Dn(a,"LeftHand",1.12,0,-.31);Et(e,new Lt(.012,.012,1.09,7),Gs,[0,.48,0]);const t=[rn(1524910),ks,yi];for(let n=0;n<3;n++){const i=new Gt(.15,.36,3,3),s=i.attributes.position;for(let r=0;r<s.count;r++)s.setZ(r,Math.sin(s.getX(r)*15+n*.85)*.022);i.computeVertexNormals(),Et(e,i,t[n],[-.4+n*.15,.88,0])}}function px(a,e){var n,i,s;const t={gilets:Bs,genz:gu,lyceens:rn(2506332),pompiers:yi,infirmieres:ks,agriculteurs:rn(4610113)}[e];for(const r of["Left","Right"]){for(const[c,l]of[[r+"Arm",r+"ForeArm"],[r+"ForeArm",r+"Hand"]]){if(e==="infirmieres"&&c.includes("ForeArm"))continue;const h=(n=a.getObjectByName(c))==null?void 0:n.getWorldPosition(new D),u=(i=a.getObjectByName(l))==null?void 0:i.getWorldPosition(new D);if(!h||!u)continue;const d=h.clone().add(u).multiplyScalar(.5),f=u.clone().sub(h),m=Dn(a,c,d.y,d.z,d.x);Et(m,new Yt(.074,Math.max(.02,f.length()-.11),4,10),t).quaternion.setFromUnitVectors(new D(0,1,0),f.normalize())}const o=(s=a.getObjectByName(r+"Foot"))==null?void 0:s.getWorldPosition(new D);if(o){const c=Dn(a,r+"Foot",o.y,o.z,o.x),l=Et(c,new St(.115,10,8),Bs,[0,-.018,-.065]);l.scale.set(.88,.6,1.48),l.userData.walkingFootwear=!0;const h=Et(c,new St(.114,10,8),ks,[0,-.071,-.065]);h.scale.set(.9,.18,1.48),h.userData.walkingFootwear=!0}}}function mx(a,e){lx(a,e),px(a,e);const t=Dn(a,"Head",1.62,0);e!=="pompiers"&&e!=="infirmieres"&&e!=="agriculteurs"&&Et(t,new St(.19,14,10,0,Math.PI*2,0,Math.PI*.52),rn(e==="genz"?3679532:3221540),[0,.02,0]);const n=Dn(a,"Spine2",1.05,0);if(e==="gilets"){Et(n,new Lt(.21,.245,.43,14),cx);for(const r of[-.12,.1])Jo(n,Ps,.236,r,.026);const i=Dn(a,"Spine2",1.34,.03);Et(i,new Vs(.17,.065,7,16),Bs,[0,0,0],[Math.PI/2,0,0]),Ea(n);for(const r of[-.12,.1])xn(n,Ps,[.43,.055,.035],[0,r,.25]);const s=Et(n,new Gt(.49,.45),rx(),[0,-.045,.408]);s.castShadow=!1,s.renderOrder=3,fx(a)}else if(e==="genz")Et(n,new Lt(.205,.225,.41,14),gu),Ea(n);else if(e==="lyceens")Ea(n,rn(10184511)),dx(a);else if(e==="pompiers"){Et(n,new Lt(.23,.24,.45,14),yi);for(const i of[-.13,.11])Jo(n,Ps,.238,i,.028);hx(a,yi,!0)}else if(e==="infirmieres"){Et(n,new Lt(.218,.225,.46,14),ks),xn(n,yi,[.066,.23,.025],[0,0,-.226]),xn(n,yi,[.22,.07,.025],[0,0,-.228]);const i=Dn(a,"Head",1.64,0);xn(i,ks,[.25,.12,.14],[0,.04,0]),xn(i,yi,[.047,.09,.015],[0,.055,-.078])}else e==="agriculteurs"&&(ux(a),Ea(n,rn(6967346)))}var gx=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),y=0;y<p.length;++y){var M=p.charCodeAt(y);b[y]=M>96?M-97:M>64?M-39:M+4}for(var w=0,y=0;y<p.length;++y)b[w++]=b[y]<60?n[b[y]]:(b[y]-60)*64+b[++y];return b.buffer.slice(0,w)}function c(p,b,y,M,w,E,R){var _=p.exports.sbrk,T=M+3&-4,C=_(T*w),P=_(E.length),I=new Uint8Array(p.exports.memory.buffer);I.set(E,P);var B=b(C,M,w,P,E.length);if(B==0&&R&&R(C,T,w),y.set(I.subarray(C,C+M*w)),_(C-_(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(y){var M=y.data;b.pending-=M.count,b.requests[M.id][M.action](M.value),delete b.requests[M.id]},b}function m(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),y=new Blob([b],{type:"text/javascript"}),M=URL.createObjectURL(y),w=u.length;w<p;++w)u[w]=f(M);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(M)}function v(p,b,y,M,w){for(var E=u[0],R=1;R<u.length;++R)u[R].pending<E.pending&&(E=u[R]);return new Promise(function(_,T){var C=new Uint8Array(y),P=++d;E.pending+=p,E.requests[P]={resolve:_,reject:T},E.object.postMessage({id:P,count:p,size:b,source:C,mode:M,filter:w},[C.buffer])})}function g(p){var b=p.data;self.ready.then(function(y){if(!b.id)return self.close();try{var M=new Uint8Array(b.count*b.size);c(y,y.exports[b.mode],M,b.count,b.size,b.source,y.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:M},[M.buffer])}catch(w){self.postMessage({id:b.id,count:b.count,action:"reject",value:w})}})}return{ready:r,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,b,y,M,w){c(s,s.exports.meshopt_decodeVertexBuffer,p,b,y,M,s.exports[l[w]])},decodeIndexBuffer:function(p,b,y,M){c(s,s.exports.meshopt_decodeIndexBuffer,p,b,y,M)},decodeIndexSequence:function(p,b,y,M){c(s,s.exports.meshopt_decodeIndexSequence,p,b,y,M)},decodeGltfBuffer:function(p,b,y,M,w,E){c(s,s.exports[h[w]],p,b,y,M,s.exports[l[E]])},decodeGltfBufferAsync:function(p,b,y,M,w){return u.length>0?v(p,b,y,h[M],l[w]):r.then(function(){var E=new Uint8Array(p*b);return c(s,s.exports[h[M]],E,p,b,y,s.exports[l[w]]),E})}}})();const bx=["gilets","genz","lyceens","pompiers","infirmieres","agriculteurs"],_x={gilets:["construction-female-01","construction-male-01"],genz:["male-adult-07","female-adult-05"],lyceens:["female-adult-12","male-adult-04"],pompiers:["fire-female-01","fire-male-01"],infirmieres:["medical-female-02","medical-male-01"],agriculteurs:["gardener-male-01","male-adult-10"]},xx=new Ai().setMeshoptDecoder(gx),Ta=new Map,vx=a=>"/convergence-runner-lab/convergence/assets/realistic/"+a+".glb";function dh(a){if(!Ta.has(a)){const e=xx.loadAsync(vx(a)).catch(t=>{throw Ta.delete(a),t});Ta.set(a,e)}return Ta.get(a)}function Mx(a){const e=bx[a%6],t=Math.floor(a/6)%2,n=_x[e][t];return{id:n,faction:e,sex:n.includes("female")?"f":"m",variation:t}}function yx(a){return a%12}async function Sx(a,e=null){const t=Mx(a),n=e||t.id,i=n.includes("female")?"f":"m",[s,r]=await Promise.all([dh(n),dh(i+"_walk_neutral_01")]),o=er(s.scene);o.rotation.y=Math.PI,o.traverse(m=>{m.isMesh&&(m.userData.sharedHumanoidAsset=!0,m.isSkinnedMesh&&(m.frustumCulled=!1))});const c=r.animations[0];if(!c)throw new Error("Walk animation missing for "+n);const l=new Sc(o),h=l.clipAction(c);h.setLoop(ac),h.setEffectiveTimeScale(.92),h.play(),h.time=a%11*.11,l.update(.001),o.updateMatrixWorld(!0);let u=new xt().setFromObject(o);const d=u.getSize(new D).y;if(!Number.isFinite(d)||d<=.3)throw new Error("Invalid rig bounds for "+n+": "+d);o.scale.setScalar(1.68/d),o.updateMatrixWorld(!0),u=new xt().setFromObject(o);const f=u.getCenter(new D);return o.position.set(-f.x,-u.min.y,-f.z),o.updateMatrixWorld(!0),{model:o,mixer:l,action:h,animation:"Walk",duration:c.duration,id:n,sex:i}}const Ex=new Ai,fh=window.innerWidth<600?12:20,zs=new URLSearchParams(window.location.search).get("visual")!=="legacy";let wa,ji;function bu(){return wa||(wa=Ex.loadAsync("/convergence-runner-lab/convergence/assets/quaternius/animated-human.glb").catch(a=>{throw wa=null,a})),wa}function ph(a,e=0,t=ax[e%6]){const n=er(a.scene);n.rotation.y=-Math.PI/2;const i=new Sc(n),s=a.animations.find(h=>h.name.toLowerCase()==="walk")||a.animations[0],r=i.clipAction(s);r.setLoop(ac),r.setEffectiveTimeScale(.92),r.play(),r.time=e%7*.16,i.update(.001),n.updateMatrixWorld(!0),n.traverse(h=>{h.isSkinnedMesh&&(h.computeBoundingBox(),h.frustumCulled=!1,h.userData.sharedHumanoidAsset=!0)});const o=new xt().setFromObject(n).getSize(new D);n.scale.setScalar(1.68/o.y),n.updateMatrixWorld(!0);const c=new xt().setFromObject(n),l=c.getCenter(new D);return n.position.set(-l.x,-c.min.y,-l.z),mx(n,t),{model:n,mixer:i,animation:s.name,action:r,duration:s.duration}}function Tx(){if(!ji){const a=zs?"assets/crowd/walk-realistic.webp":"assets/crowd/walk-atlas.webp";ji=new Ya().load("/convergence-runner-lab/convergence/"+a),ji.colorSpace=ft,ji.magFilter=Ct,ji.minFilter=Cn}return ji}function wx(a){const e=new Gt(1.92,2.64),t=new Float32Array(256),n=new Float32Array(256);e.setAttribute("factionRow",new Os(t,1)),e.setAttribute("walkPhase",new Os(n,1));const i=new Tt({map:Tx(),alphaTest:.18,side:It}),s={value:0};i.onBeforeCompile=c=>{c.uniforms.walkTime=s,c.vertexShader=`attribute float factionRow; attribute float walkPhase; uniform float walkTime;
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (uv.x + mod(floor(walkTime * 9.2 + walkPhase),12.0))/12.0;
vMapUv.y = (uv.y + `+(zs?"11.0":"5.0")+"-factionRow)/"+(zs?"12.0":"6.0")+";")};const r=new Ka(e,i,t.length);r.frustumCulled=!1,r.count=0,r.userData.sharedHumanoidAsset=!0,a.playerGroup.add(r);const o=new lt;a.impostors={mesh:r,time:s,rows:t,phases:n,geometry:e,matrix:o}}async function Ax(a,e,t,n){try{const i=await Sx(t);if(a.playerGroup!==n||e.parent!==n){i.mixer.stopAllAction(),i.mixer.uncacheRoot(i.model),i.model.traverse(r=>{var o;r.isSkinnedMesh&&((o=r.skeleton)==null||o.dispose())});return}const s=e.userData.realHumanoid;if(!s||e.userData.realisticAvatar)return;s.mixer.stopAllAction(),s.mixer.uncacheRoot(s.model),s.model.traverse(r=>{var o;r.isSkinnedMesh&&((o=r.skeleton)==null||o.dispose())}),e.remove(s.model),e.add(i.model),e.userData.realHumanoid=i,e.userData.realisticAvatar=i.id}catch(i){console.warn("Realistic avatar fallback",t,i.message)}}function jr(a){if(a._humanoidPending||!a.playerGroup)return;const e=a.playerGroup;a._humanoidPending=!0,bu().then(t=>{if(a.playerGroup===e){for(const[n,i]of a.playerStickmen.entries())if(!(!i.parent||i.userData.realHumanoid||i.userData.impostor||i.userData.approvedLeader))if(n===0){i.children.forEach(o=>{o.visible=!1});const s=ph(t,n,"gilets");sx(s),i.add(s.model),i.userData.realHumanoid=s;const r=ix();i.add(r.mesh),i.userData.approvedLeader=r,i.userData.lowDetail=!0}else if(n>=fh)i.userData.impostor=!0,i.userData.lowDetail=!0,i.children.forEach(s=>{s.visible=!1});else{const s=ph(t,n);i.children.forEach(r=>{r.visible=!1}),i.add(s.model),i.userData.realHumanoid=s}if(a.impostors||wx(a),zs)for(let n=1;n<Math.min(fh,a.playerStickmen.length);n++){const i=a.playerStickmen[n];i.userData.realHumanoid&&!i.userData.realisticAvatar&&!i.userData.upgradingRealistic&&(i.userData.upgradingRealistic=!0,Ax(a,i,n,e).finally(()=>{i.userData.upgradingRealistic=!1}))}}}).catch(t=>console.warn("Humanoid fallback",t.message)).finally(()=>{a._humanoidPending=!1})}function Rx(a,e){var i;for(const s of a.playerStickmen)(i=s.userData.realHumanoid)==null||i.mixer.update(e),s.userData.approvedLeader&&(s.userData.approvedLeader.time.value+=e);const t=a.impostors;if(!t)return;t.time.value+=e;let n=0;for(const s of a.playerStickmen){if(!s.userData.impostor)continue;if(n>=t.rows.length)break;const r=s.userData.index;t.matrix.position.set(s.position.x,1.24+s.position.y,s.position.z),t.matrix.scale.copy(s.scale),t.matrix.updateMatrix(),t.mesh.setMatrixAt(n,t.matrix.matrix),t.rows[n]=zs?yx(r):r%6,t.phases[n]=r*3.17%12,n++}t.mesh.count=n,t.mesh.instanceMatrix.needsUpdate=!0,t.geometry.attributes.factionRow.needsUpdate=!0,t.geometry.attributes.walkPhase.needsUpdate=!0}function Cx(a){for(const e of a.playerStickmen){const t=e.userData.realHumanoid;t&&(t.mixer.stopAllAction(),t.mixer.uncacheRoot(t.model),t.model.traverse(n=>{var i;n.isSkinnedMesh&&((i=n.skeleton)==null||i.dispose()),n.userData.ownedLeaderGeometry&&(n.geometry.dispose(),n.material.dispose())}))}a.impostors&&(a.impostors.geometry.dispose(),a.impostors.mesh.material.dispose(),a.impostors=null)}class Px{constructor(e,t){this.scene=e,this.game=t,this.playerStickmen=[],this.playerGroup=null,this.playerCount=0,this.animTime=0,this.flyingBodies=[],this.impactFlashes=[],this.sparkParticles=[],this.trailParticles=[]}clear(){Cx(this),this.playerGroup&&(this.scene.remove(this.playerGroup),this.playerGroup.traverse(e=>{e.geometry&&!e.userData.sharedHumanoidAsset&&e.geometry.dispose(),e.material&&!e.userData.sharedHumanoidAsset&&e.material.dispose()})),this.playerStickmen=[],this.playerGroup=null,this.playerCount=0,this.flyingBodies.forEach(e=>{this.scene.remove(e.mesh)}),this.flyingBodies=[],this.impactFlashes.forEach(e=>{this.scene.remove(e.mesh)}),this.impactFlashes=[],this.sparkParticles.forEach(e=>{this.scene.remove(e.mesh)}),this.sparkParticles=[],this.trailParticles.forEach(e=>{this.scene.remove(e.mesh)}),this.trailParticles=[]}createPlayerCrowd(e){this.clear(),this.playerCount=e,this.playerGroup=new pt,this.playerGroup.userData.dynamic=!0;for(let t=0;t<e;t++)this.addStickmanToGroup(t);this.scene.add(this.playerGroup),jr(this)}addStickmanToGroup(e){this.game&&this.game.equippedSkin==="rainbow"||this.game&&this.game.getPlayerColor();const t=Qb(e),n=this.getFormationPosition(e);t.position.set(n.x,0,n.z),t.userData.index=e,t.scale.set(0,0,0),t.userData.spawnTime=this.animTime,t.userData.spawning=!0,this.playerGroup.add(t),this.playerStickmen.push(t)}getFormationPosition(e){if(e===0)return{x:0,z:1.05};e--;const t=this.playerCount>8?5:3,n=Math.floor(e/t);return{x:(e%t-(t-1)/2)*.53,z:.55-n*.7}}createStickman(e){const t=new pt,n=new Oe({color:e}),i=new Yt(.15,.5,4,4),s=new xe(i,n);s.position.y=.7,s.castShadow=!0,t.add(s);const r=new St(.2,8,8),o=new xe(r,n);o.position.y=1.2,o.castShadow=!0,t.add(o);const c=new Yt(.07,.3,4,4),l=new xe(c,n);l.position.set(-.1,.2,0),t.add(l);const h=new xe(c,n);h.position.set(.1,.2,0),t.add(h);const u=new Yt(.05,.25,4,4),d=new xe(u,n);d.position.set(-.25,.75,0),d.rotation.z=.3,t.add(d);const f=new xe(u,n);return f.position.set(.25,.75,0),f.rotation.z=-.3,t.add(f),t}addToPlayerCrowd(e){const t=this.playerCount;this.playerCount+=e;for(let n=0;n<e;n++)this.addStickmanToGroup(t+n);jr(this)}removeFromPlayerCrowd(e){if(e=Math.min(e,this.playerCount),!(e<=0)){for(let t=0;t<e;t++)if(this.playerStickmen.length>0){const n=this.playerStickmen.pop();let i;if(this.game&&this.game.equippedSkin==="rainbow"){const r=[16717636,16748800,16771584,58998,2718207,13959417];i=r[Math.floor(Math.random()*r.length)]}else i=this.game?this.game.getPlayerColor():2201331;t<5&&this.launchRagdoll(n,i);const s=n.userData.realHumanoid;s&&(s.mixer.stopAllAction(),s.mixer.uncacheRoot(s.model)),this.playerGroup.remove(n)}this.playerCount=Math.max(0,this.playerCount-e)}}removeEnemyCrowd(e){e.meshGroup&&([...e.meshGroup.children].forEach(n=>{this.launchRagdoll(n,16007990,e.meshGroup)}),setTimeout(()=>{e.meshGroup&&(this.scene.remove(e.meshGroup),e.meshGroup.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}))},100))}launchRagdoll(e,t,n){const i=new D;e.getWorldPosition(i);const s=this.createStickman(t);s.position.copy(i),s.userData.dynamic=!0;const r=Math.random()*Math.PI*2,o=4+Math.random()*6,c=6+Math.random()*5;s.userData.velocity=new D(Math.cos(r)*o,c,Math.sin(r)*o),s.userData.angularVel=new D((Math.random()-.5)*15,(Math.random()-.5)*10,(Math.random()-.5)*15),s.userData.life=1.5,s.userData.maxLife=1.5,s.userData.color=t,s.userData.trailTimer=0,s.traverse(l=>{l.material&&(l.material=l.material.clone(),l.material.transparent=!0)}),this.scene.add(s),this.flyingBodies.push({mesh:s}),this.spawnImpactFlash(i,t),this.spawnSparks(i,t,5)}spawnImpactFlash(e,t){const n=new xc(.1,.3,16),i=new Tt({color:t,transparent:!0,opacity:1,side:It}),s=new xe(n,i);s.position.copy(e),s.position.y+=.8,s.rotation.x=-Math.PI/2,s.userData.dynamic=!0,this.scene.add(s),this.impactFlashes.push({mesh:s,life:.4,maxLife:.4});const r=new St(.3,8,8),o=new Tt({color:16777215,transparent:!0,opacity:.9}),c=new xe(r,o);c.position.copy(e),c.position.y+=.8,c.userData.dynamic=!0,this.scene.add(c),this.impactFlashes.push({mesh:c,life:.2,maxLife:.2})}spawnSparks(e,t,n){for(let i=0;i<n;i++){const s=new St(.06+Math.random()*.06,4,4),r=new Tt({color:Math.random()>.5?t:16777215,transparent:!0,opacity:1}),o=new xe(s,r);o.position.copy(e),o.position.y+=.5+Math.random()*.5,o.userData.dynamic=!0;const c=Math.random()*Math.PI*2,l=3+Math.random()*5;o.userData.velocity=new D(Math.cos(c)*l,2+Math.random()*4,Math.sin(c)*l),o.userData.life=.5+Math.random()*.3,o.userData.maxLife=o.userData.life,this.scene.add(o),this.sparkParticles.push({mesh:o})}}spawnDeathEffect(e,t,n){const i=new D(e+(Math.random()-.5)*2,.5,t+(Math.random()-.5)*1);this.spawnImpactFlash(i,n),this.spawnSparks(i,n,4)}getPlayerCount(){return this.playerCount}updatePlayerPosition(e,t){this.playerGroup&&this.playerGroup.position.set(e,0,t)}update(e){Rx(this,e),this.playerStickmen.some(t=>!t.userData.realHumanoid&&!t.userData.lowDetail)&&jr(this),this.animTime+=e*2.6,this.playerStickmen.length>0&&this.playerStickmen.forEach((t,n)=>{if(t.userData.spawning){const c=this.animTime-t.userData.spawnTime,l=Math.min(c*2,1),h=Math.min(l*1.2,1)*(1+Math.sin(l*Math.PI)*.3);t.scale.set(Math.min(h,1),Math.min(h,1),Math.min(h,1)),l>=1&&(t.userData.spawning=!1,t.scale.set(1,1,1))}const i=this.getFormationPosition(n);t.position.x+=(i.x-t.position.x)*Math.min(1,e*8),t.position.z+=(i.z-t.position.z)*Math.min(1,e*8);const s=n*.7,r=this.animTime+s;t.userData.spawning||(t.position.y=Math.abs(Math.sin(r*2))*.045);const o=t.children;o.length>=1&&(o[0].rotation.x=.01+Math.sin(r)*.018),o.length>=2&&(o[1].rotation.x=Math.sin(r*2)*.018),o.length>=4&&(o[2].rotation.x=Math.sin(r)*.36,o[3].rotation.x=-Math.sin(r)*.36),o.length>=6&&(o[4].rotation.x=-Math.sin(r)*.25,o[4].rotation.z=.17+Math.sin(r*2)*.04,o[5].rotation.x=Math.sin(r)*.25,o[5].rotation.z=-.17-Math.sin(r*2)*.04)}),this.updateFlyingBodies(e),this.updateImpactFlashes(e),this.updateSparkParticles(e),this.updateTrailParticles(e)}updateFlyingBodies(e){for(let t=this.flyingBodies.length-1;t>=0;t--){const i=this.flyingBodies[t].mesh,s=i.userData;s.life-=e;const r=s.life/s.maxLife;if(s.velocity.y-=20*e,i.position.x+=s.velocity.x*e,i.position.y+=s.velocity.y*e,i.position.z+=s.velocity.z*e,i.rotation.x+=s.angularVel.x*e,i.rotation.y+=s.angularVel.y*e,i.rotation.z+=s.angularVel.z*e,s.angularVel.multiplyScalar(.98),r<.3){const o=r/.3;i.traverse(c=>{c.material&&(c.material.opacity=o)}),i.scale.setScalar(o)}s.trailTimer+=e,s.trailTimer>.05&&r>.3&&(s.trailTimer=0,this.spawnTrailParticle(i.position,s.color)),i.position.y<.2&&s.velocity.y<0&&(s.velocity.y*=-.4,s.velocity.x*=.7,s.velocity.z*=.7,i.position.y=.2,Math.abs(s.velocity.y)>1&&this.spawnSparks(i.position,s.color,2)),s.life<=0&&(this.scene.remove(i),i.traverse(o=>{o.geometry&&!o.userData.sharedHumanoidAsset&&o.geometry.dispose(),o.material&&!o.userData.sharedHumanoidAsset&&o.material.dispose()}),this.flyingBodies.splice(t,1))}}updateImpactFlashes(e){for(let t=this.impactFlashes.length-1;t>=0;t--){const n=this.impactFlashes[t];n.life-=e;const i=n.life/n.maxLife,s=1+(1-i)*4;n.mesh.scale.set(s,s,s),n.mesh.material.opacity=i*.8,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.impactFlashes.splice(t,1))}}updateSparkParticles(e){for(let t=this.sparkParticles.length-1;t>=0;t--){const i=this.sparkParticles[t].mesh,s=i.userData;s.life-=e;const r=s.life/s.maxLife;s.velocity.y-=12*e,i.position.x+=s.velocity.x*e,i.position.y+=s.velocity.y*e,i.position.z+=s.velocity.z*e,i.material.opacity=r,i.scale.setScalar(r),s.velocity.multiplyScalar(.96),(s.life<=0||i.position.y<-1)&&(this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this.sparkParticles.splice(t,1))}}spawnTrailParticle(e,t){const n=new St(.04,4,4),i=new Tt({color:t,transparent:!0,opacity:.6}),s=new xe(n,i);s.position.copy(e),s.position.x+=(Math.random()-.5)*.2,s.position.y+=(Math.random()-.5)*.2,s.userData.dynamic=!0,s.userData.life=.4,s.userData.maxLife=.4,this.scene.add(s),this.trailParticles.push({mesh:s})}updateTrailParticles(e){for(let t=this.trailParticles.length-1;t>=0;t--){const i=this.trailParticles[t].mesh;i.userData.life-=e;const s=i.userData.life/i.userData.maxLife;i.material.opacity=s*.6,i.scale.setScalar(s),i.userData.life<=0&&(this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this.trailParticles.splice(t,1))}}updateParticles(e){}}class Dx{constructor(e){this.game=e,this.startScreen=document.getElementById("start-screen"),this.upgradeScreen=document.getElementById("upgrade-screen"),this.winScreen=document.getElementById("win-screen"),this.loseScreen=document.getElementById("lose-screen"),this.hud=document.getElementById("hud"),this.container=document.getElementById("game-container"),this.levelDisplay=document.getElementById("level-display"),this.coinDisplay=document.getElementById("coin-display"),this.countDisplay=document.getElementById("count-display"),this.crowdLevel=document.getElementById("crowd-level"),this.strengthLevel=document.getElementById("strength-level"),this.upgradeCrowdBtn=document.getElementById("upgrade-crowd-btn"),this.upgradeStrengthBtn=document.getElementById("upgrade-strength-btn"),this.shakeIntensity=0,this.canvas=document.getElementById("game-canvas"),this.prevCount=0,this.bossHealthBar=null,this.tacticalStatus=document.getElementById("tactical-status");const t=document.getElementById("pause-btn"),n=document.getElementById("pause-panel");t.addEventListener("click",()=>{["playing","fighting"].includes(this.game.state)&&(this.game.pausedState=this.game.state,this.game.state="paused",n.classList.remove("hidden"))}),document.getElementById("resume-btn").addEventListener("click",()=>{this.game.state=this.game.pausedState||"playing",n.classList.add("hidden")}),this.setupButtons(),this.updateHUDInfo(),this.startShakeLoop()}setupButtons(){document.getElementById("play-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.game.startGame()})}),document.getElementById("upgrade-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.showUpgrades()})}),document.getElementById("shop-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.showShop()})}),document.getElementById("shop-back-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(document.getElementById("shop-screen"),()=>{this.transitionIn(this.startScreen)})}),document.getElementById("tab-skins").addEventListener("click",()=>{document.getElementById("tab-skins").classList.add("active"),document.getElementById("tab-themes").classList.remove("active"),document.getElementById("skins-panel").classList.remove("hidden"),document.getElementById("themes-panel").classList.add("hidden")}),document.getElementById("tab-themes").addEventListener("click",()=>{document.getElementById("tab-themes").classList.add("active"),document.getElementById("tab-skins").classList.remove("active"),document.getElementById("themes-panel").classList.remove("hidden"),document.getElementById("skins-panel").classList.add("hidden")}),document.getElementById("back-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.upgradeScreen,()=>{this.transitionIn(this.startScreen)})}),document.getElementById("next-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.winScreen,()=>{this.game.startGame()})}),document.getElementById("win-upgrade-crowd-btn").addEventListener("click",()=>{this.game.upgradecrowd()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateWinUpgradeInfo(),this.pulseElement(document.getElementById("win-upgrade-crowd-btn")))}),document.getElementById("win-upgrade-strength-btn").addEventListener("click",()=>{this.game.upgradeStrength()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateWinUpgradeInfo(),this.pulseElement(document.getElementById("win-upgrade-strength-btn")))}),document.getElementById("retry-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.loseScreen,()=>{this.game.startGame()})}),this.upgradeCrowdBtn.addEventListener("click",()=>{this.game.upgradecrowd()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateUpgradeScreen(),this.updateHUDInfo(),this.pulseElement(this.upgradeCrowdBtn))}),this.upgradeStrengthBtn.addEventListener("click",()=>{this.game.upgradeStrength()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateUpgradeScreen(),this.updateHUDInfo(),this.pulseElement(this.upgradeStrengthBtn))})}transitionOut(e,t){e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity="0",e.style.transform="scale(0.9)",setTimeout(()=>{e.classList.add("hidden"),e.style.opacity="",e.style.transform="",e.style.transition="",t&&t()},300)}transitionIn(e){e.style.opacity="0",e.style.transform="scale(1.1)",e.classList.remove("hidden"),requestAnimationFrame(()=>{e.style.transition="opacity 0.4s ease, transform 0.4s ease",e.style.opacity="1",e.style.transform="scale(1)",setTimeout(()=>{e.style.transition=""},400)})}screenShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}startShakeLoop(){const e=()=>{if(this.shakeIntensity>.5){const t=(Math.random()-.5)*this.shakeIntensity,n=(Math.random()-.5)*this.shakeIntensity;this.canvas.style.transform=`translate(${t}px, ${n}px)`,this.shakeIntensity*=.85}else this.shakeIntensity=0,this.canvas.style.transform="";requestAnimationFrame(e)};e()}showFloatingText(e,t){const n=document.createElement("div");n.textContent=e,n.style.cssText=`
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 48px;
            font-weight: bold;
            color: ${t};
            text-shadow: 0 0 10px ${t}, 0 2px 4px rgba(0,0,0,0.5);
            pointer-events: none;
            z-index: 50;
            animation: floatUp 0.8s ease-out forwards;
        `,this.container.appendChild(n),setTimeout(()=>n.remove(),800)}pulseElement(e){e.style.transform="scale(1.3)",e.style.transition="transform 0.15s ease",setTimeout(()=>{e.style.transform="scale(1)",setTimeout(()=>{e.style.transition=""},150)},150)}hideAllScreens(){this.startScreen.classList.add("hidden"),this.upgradeScreen.classList.add("hidden"),this.winScreen.classList.add("hidden"),this.loseScreen.classList.add("hidden"),document.getElementById("shop-screen").classList.add("hidden"),this.hud.style.display="none"}showHUD(){this.hud.style.display="flex",this.hud.style.opacity="0",requestAnimationFrame(()=>{this.hud.style.transition="opacity 0.5s ease",this.hud.style.opacity="1",setTimeout(()=>{this.hud.style.transition=""},500)}),this.updateHUDInfo()}updateHUDInfo(){this.levelDisplay.textContent=`Étape ${this.game.level}`,this.coinDisplay.textContent=`🪙 ${this.game.coins}`}updateCount(e){var t;if(this.tacticalStatus&&((t=this.game.levelGenerator)!=null&&t.plan)){const n=this.game.levelGenerator.gates.filter(i=>i.passed).length;this.tacticalStatus.textContent="◇ "+(this.game.shields||0)+" protections · Front "+this.game.levelGenerator.plan.bossHealth+" · "+n+"/10"}this.countDisplay.textContent=`👥 ${e}`,Math.abs(e-this.prevCount)>2&&(this.countDisplay.style.transform="scale(1.3)",this.countDisplay.style.transition="transform 0.15s ease",setTimeout(()=>{this.countDisplay.style.transform="scale(1)",setTimeout(()=>{this.countDisplay.style.transition=""},150)},150)),this.prevCount=e}showUpgrades(){this.transitionIn(this.upgradeScreen),this.updateUpgradeScreen()}updateUpgradeScreen(){this.crowdLevel.textContent=`Niv. ${this.game.crowdUpgrade}`,this.strengthLevel.textContent=`Niv. ${this.game.strengthUpgrade}`,this.upgradeCrowdBtn.textContent=`🪙 ${this.game.crowdUpgrade*50}`,this.upgradeStrengthBtn.textContent=`🪙 ${this.game.strengthUpgrade*75}`,this.coinDisplay.textContent=`🪙 ${this.game.coins}`}showShop(){const e=document.getElementById("shop-screen");this.transitionIn(e),this.renderShop()}renderShop(){document.getElementById("shop-coins").textContent=`🪙 ${this.game.coins}`,this.renderSkins(),this.renderThemes()}renderSkins(){const e=document.getElementById("skins-grid");e.innerHTML="",this.game.skins.forEach(t=>{const n=document.createElement("div");n.className="shop-item",t.owned&&n.classList.add("owned"),t.id===this.game.equippedSkin&&n.classList.add("equipped");const i=document.createElement("div");i.className="skin-preview",i.style.background="#"+t.color.toString(16).padStart(6,"0"),t.id==="rainbow"&&(i.style.background="linear-gradient(135deg, red, orange, yellow, green, blue, purple)"),n.appendChild(i);const s=document.createElement("div");s.className="item-name",s.textContent=t.name,n.appendChild(s);const r=document.createElement("div");r.className="item-price",t.id===this.game.equippedSkin?(r.textContent="✓ Equipped",r.classList.add("owned-label")):t.owned?(r.textContent="Tap to equip",r.classList.add("owned-label")):t.shareUnlock?(r.textContent="📤 Share",r.classList.add("free")):r.textContent=`🪙 ${t.price}`,n.appendChild(r),n.addEventListener("click",()=>this.onSkinClick(t)),e.appendChild(n)})}renderThemes(){const e=document.getElementById("themes-grid");e.innerHTML="",this.game.themes.forEach(t=>{const n=document.createElement("div");n.className="shop-item",t.owned&&n.classList.add("owned"),t.id===this.game.equippedTheme&&n.classList.add("equipped");const i=document.createElement("div");i.className="theme-preview",i.style.background=`linear-gradient(180deg, ${t.colors[0]}, ${t.colors[2]}, ${t.colors[4]})`,n.appendChild(i);const s=document.createElement("div");s.className="item-name",s.textContent=t.name,n.appendChild(s);const r=document.createElement("div");r.className="item-price",t.id===this.game.equippedTheme?(r.textContent="✓ Equipped",r.classList.add("owned-label")):t.owned?(r.textContent="Tap to equip",r.classList.add("owned-label")):r.textContent=`🪙 ${t.price}`,n.appendChild(r),n.addEventListener("click",()=>this.onThemeClick(t)),e.appendChild(n)})}onSkinClick(e){if(e.id!==this.game.equippedSkin){if(e.owned)this.game.equipSkin(e.id),this.game.audio.initialized&&this.game.audio.playClick();else if(e.shareUnlock){const t={title:"Count Masters: Stickman Games",text:"Check out this awesome stickman runner game!",url:window.location.href};navigator.share?navigator.share(t).then(()=>{this.game.shareForSkin(e.id),this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText("+🎨 Rainbow unlocked!","#4CAF50"),this.renderShop()}).catch(()=>{}):(navigator.clipboard.writeText(`${t.text} ${t.url}`).catch(()=>{}),this.game.shareForSkin(e.id),this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText("Link copied + 🎨 Rainbow!","#4CAF50"))}else this.game.buySkin(e.id)&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText(`-${e.price} 🪙`,"#ffd700"));this.renderShop()}}onThemeClick(e){e.id!==this.game.equippedTheme&&(e.owned?(this.game.equipTheme(e.id),this.game.audio.initialized&&this.game.audio.playClick()):this.game.buyTheme(e.id)&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText(`-${e.price} 🪙`,"#ffd700")),this.renderShop())}showWin(e){this.hideAllScreens(),setTimeout(()=>{this.transitionIn(this.winScreen),document.getElementById("win-coins").textContent=`+${e} 🪙`,this.updateWinUpgradeInfo(),this.spawnConfetti()},300)}updateWinUpgradeInfo(){document.getElementById("win-total-coins").textContent=`Total: 🪙 ${this.game.coins}`,document.getElementById("win-crowd-level").textContent=`Niv. ${this.game.crowdUpgrade}`,document.getElementById("win-strength-level").textContent=`Niv. ${this.game.strengthUpgrade}`,document.getElementById("win-upgrade-crowd-btn").textContent=`🪙 ${this.game.crowdUpgrade*50}`,document.getElementById("win-upgrade-strength-btn").textContent=`🪙 ${this.game.strengthUpgrade*75}`}showLose(){this.hideAllScreens(),setTimeout(()=>{this.transitionIn(this.loseScreen)},300)}spawnConfetti(){const e=["#FF5252","#FFD740","#69F0AE","#40C4FF","#E040FB","#FF6E40"];for(let t=0;t<40;t++){const n=document.createElement("div"),i=e[Math.floor(Math.random()*e.length)],s=Math.random()*100,r=Math.random()*.5,o=6+Math.random()*8;n.style.cssText=`
                position: absolute;
                top: -10px;
                left: ${s}%;
                width: ${o}px;
                height: ${o}px;
                background: ${i};
                border-radius: ${Math.random()>.5?"50%":"0"};
                pointer-events: none;
                z-index: 200;
                animation: confettiFall ${1.5+Math.random()}s ease-in ${r}s forwards;
                transform: rotate(${Math.random()*360}deg);
            `,this.container.appendChild(n),setTimeout(()=>n.remove(),2500)}}showBossHealthBar(e){this.hideBossHealthBar();const t=document.createElement("div");t.id="boss-health-wrapper",t.style.cssText=`
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            width: 300px;
            max-width: 80vw;
            z-index: 50;
            pointer-events: none;
            animation: slideInUp 0.5s ease;
        `;const n=document.createElement("div");n.style.cssText=`
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 4px;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        `,n.textContent="👑 GIANT KING",t.appendChild(n);const i=document.createElement("div");i.style.cssText=`
            width: 100%;
            height: 20px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid #9C27B0;
            box-shadow: 0 0 10px rgba(156, 39, 176, 0.5);
        `;const s=document.createElement("div");s.id="boss-health-fill",s.style.cssText=`
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #f44336, #E91E63, #9C27B0);
            border-radius: 8px;
            transition: width 0.15s ease;
            box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);
        `,i.appendChild(s),t.appendChild(i);const r=document.createElement("div");r.id="boss-health-text",r.style.cssText=`
            color: #fff;
            font-size: 12px;
            text-align: center;
            margin-top: 3px;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        `,r.textContent=`${e} / ${e}`,t.appendChild(r),this.container.appendChild(t),this.bossHealthBar=t}updateBossHealthBar(e,t){const n=document.getElementById("boss-health-fill"),i=document.getElementById("boss-health-text");if(n){const s=Math.max(0,e/t*100);n.style.width=`${s}%`,s<25?n.style.background="linear-gradient(90deg, #f44336, #ff5722)":s<50&&(n.style.background="linear-gradient(90deg, #f44336, #E91E63)")}i&&(i.textContent=`${Math.max(0,e)} / ${t}`)}hideBossHealthBar(){if(this.bossHealthBar){this.bossHealthBar.style.transition="opacity 0.3s ease",this.bossHealthBar.style.opacity="0";const t=this.bossHealthBar;setTimeout(()=>t.remove(),300),this.bossHealthBar=null}const e=document.getElementById("boss-health-wrapper");e&&e.remove()}}class Ix{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.isMusicPlaying=!1,this.musicNodes=[],this.initialized=!1}init(){this.initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.35,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.6,this.sfxGain.connect(this.masterGain),this.initialized=!0)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startMusic(){this.initialized||this.init(),!this.isMusicPlaying&&(this.isMusicPlaying=!0,this.playMusicLoop())}stopMusic(){this.isMusicPlaying=!1,this.musicNodes.forEach(e=>{try{e.stop()}catch{}}),this.musicNodes=[]}playMusicLoop(){if(!this.isMusicPlaying)return;const e=this.ctx.currentTime,n=60/128;[110,110,146.83,130.81,110,110,146.83,164.81].forEach((o,c)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sawtooth",l.frequency.value=o,h.gain.setValueAtTime(.3,e+c*n),h.gain.exponentialRampToValueAtTime(.01,e+(c+.8)*n),l.connect(h),h.connect(this.musicGain),l.start(e+c*n),l.stop(e+(c+1)*n),this.musicNodes.push(l)});for(let o=0;o<8;o++){const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(150,e+o*n),c.frequency.exponentialRampToValueAtTime(30,e+o*n+.1),l.gain.setValueAtTime(.8,e+o*n),l.gain.exponentialRampToValueAtTime(.01,e+o*n+.15),c.connect(l),l.connect(this.musicGain),c.start(e+o*n),c.stop(e+o*n+.2),this.musicNodes.push(c)}for(let o=0;o<16;o++){const c=this.ctx.createBuffer(1,this.ctx.sampleRate*.05,this.ctx.sampleRate),l=c.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=(Math.random()*2-1)*Math.exp(-f/(l.length*.2));const h=this.ctx.createBufferSource();h.buffer=c;const u=this.ctx.createGain();u.gain.value=o%2===0?.1:.2;const d=this.ctx.createBiquadFilter();d.type="highpass",d.frequency.value=7e3,h.connect(d),d.connect(u),u.connect(this.musicGain),h.start(e+o*n*.5),this.musicNodes.push(h)}[329.63,392,440,523.25,440,392,349.23,329.63].forEach((o,c)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="square",l.frequency.value=o,h.gain.setValueAtTime(.08,e+c*n),h.gain.exponentialRampToValueAtTime(.01,e+(c+.6)*n),l.connect(h),h.connect(this.musicGain),l.start(e+c*n),l.stop(e+(c+.7)*n),this.musicNodes.push(l)});const r=8*n;setTimeout(()=>{this.musicNodes=[],this.playMusicLoop()},r*1e3-50)}playGateGood(){if(!this.initialized)return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,n)=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=t,s.gain.setValueAtTime(.4,e+n*.06),s.gain.exponentialRampToValueAtTime(.01,e+n*.06+.2),i.connect(s),s.connect(this.sfxGain),i.start(e+n*.06),i.stop(e+n*.06+.25)})}playGateBad(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(100,e+.3),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.3),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.35)}playHit(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(200,e),t.frequency.exponentialRampToValueAtTime(50,e+.1),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.15),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.2);const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.1,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(s.length*.3));const r=this.ctx.createBufferSource();r.buffer=i;const o=this.ctx.createGain();o.gain.value=.3,r.connect(o),o.connect(this.sfxGain),r.start(e)}playFightHit(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(150+Math.random()*100,e),t.frequency.exponentialRampToValueAtTime(40,e+.08),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.01,e+.1),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.12)}playWin(){if(!this.initialized)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=n,r.gain.setValueAtTime(.3,e+i*.15),r.gain.setValueAtTime(.3,e+i*.15+.1),r.gain.exponentialRampToValueAtTime(.01,e+i*.15+.4),s.connect(r),r.connect(this.sfxGain),s.start(e+i*.15),s.stop(e+i*.15+.5)});for(let n=0;n<8;n++){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=1e3+Math.random()*2e3,s.gain.setValueAtTime(.05,e+.6+n*.05),s.gain.exponentialRampToValueAtTime(.001,e+.6+n*.05+.2),i.connect(s),s.connect(this.sfxGain),i.start(e+.6+n*.05),i.stop(e+.6+n*.05+.25)}}playLose(){if(!this.initialized)return;const e=this.ctx.currentTime;[392,349.23,293.66,261.63].forEach((n,i)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=n,r.gain.setValueAtTime(.3,e+i*.25),r.gain.exponentialRampToValueAtTime(.01,e+i*.25+.4),s.connect(r),r.connect(this.sfxGain),s.start(e+i*.25),s.stop(e+i*.25+.5)})}playCountUp(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.value=800+Math.random()*400,n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playBossAppear(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(80,e),t.frequency.linearRampToValueAtTime(110,e+.5),n.gain.setValueAtTime(.4,e),n.gain.setValueAtTime(.4,e+.4),n.gain.exponentialRampToValueAtTime(.01,e+.8),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+1);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=55,s.gain.setValueAtTime(.3,e+.1),s.gain.exponentialRampToValueAtTime(.01,e+.9),i.connect(s),s.connect(this.sfxGain),i.start(e+.1),i.stop(e+1)}playClick(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.value=600,n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.01,e+.05),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.06)}}const Kr=3;class Lx{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.clock=new jf,this.qa=new URLSearchParams(location.search).has("qa"),this.state="menu",this.level=1,this.coins=0,this.crowdUpgrade=1,this.strengthUpgrade=1,this.skins=[{id:"blue",name:"Gilets jaunes",color:15910450,price:0,owned:!0},{id:"green",name:"Forest",color:5025616,price:10,owned:!1},{id:"orange",name:"Sunset",color:16750592,price:10,owned:!1},{id:"purple",name:"Royal",color:10233776,price:15,owned:!1},{id:"pink",name:"Bubblegum",color:15277667,price:15,owned:!1},{id:"cyan",name:"Ice",color:48340,price:20,owned:!1},{id:"yellow",name:"Gold",color:16771899,price:20,owned:!1},{id:"white",name:"Ghost",color:16777215,price:25,owned:!1},{id:"black",name:"Shadow",color:3355443,price:25,owned:!1},{id:"rainbow",name:"Rainbow",color:16717636,price:0,owned:!1,shareUnlock:!0}],this.equippedSkin="blue",this.themes=[{id:"default",name:"Ville de jour",colors:["#1b3551","#5580a1","#a4b8c6","#dde1db","#f8e6c9"],fog:12832973,ground:6715264,price:0,owned:!0},{id:"sunset",name:"Sunset",colors:["#1a0011","#ff6b35","#ff8c61","#ffc89e","#fff3e0"],fog:16763038,ground:9268835,price:15,owned:!1},{id:"night",name:"Night",colors:["#000011","#0d1b2a","#1b2838","#2d4059","#3d5a80"],fog:1779768,ground:3046706,price:15,owned:!1},{id:"candy",name:"Candy",colors:["#4a0072","#c51162","#ff6090","#ff80ab","#ffe0f0"],fog:16744619,ground:8505220,price:20,owned:!1},{id:"ocean",name:"Ocean",colors:["#001a33","#003366","#006699","#3399cc","#99ccff"],fog:3381708,ground:2533018,price:20,owned:!1},{id:"volcano",name:"Volcano",colors:["#1a0000","#4d0000","#800000","#cc3300","#ff6600"],fog:13382400,ground:6111287,price:25,owned:!1}],this.equippedTheme="default",this.fightingEnemy=null,this.fightTimer=0,this.fightInterval=.12,this.playerCrowd=null,this.playerX=0,this.speed=Kr,this.trackZ=0,this.levelGenerator=null,this.trackLength=200,this.inputX=0,this.isDragging=!1,this.lastInputX=0,this.loadProgress()}init(){this.setupRenderer(),this.setupScene(),this.setupCamera(),this.setupLights(),this.setupInput(),this.ui=new Dx(this),this.crowdManager=new Px(this.scene,this),this.levelGenerator=new nx(this.scene,this),this.audio=new Ix,Promise.allSettled([bu(),V_(),O_()]),this.animate()}setupRenderer(){const e=document.getElementById("game-canvas");this.renderer=new Hb({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=ft,this.renderer.toneMapping=Zo,this.renderer.toneMappingExposure=1.18,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mh,window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()})}setupScene(){this.scene=new Vd,this.applyTheme()}setupCamera(){this.camera=new Jt(60,window.innerWidth/window.innerHeight,.1,300),this.camera.position.set(0,4.5,6),this.camera.lookAt(0,0,-6)}setupLights(){const e=new Df(15003135,.9);this.scene.add(e);const t=new Jh(16772556,2);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=100,t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=30,t.shadow.camera.bottom=-30,this.scene.add(t),this.directionalLight=t;const n=new St(3,16,16),i=new Tt({color:16771899}),s=new xe(n,i);s.position.set(40,45,-80),this.scene.add(s);const r=new St(5,16,16),o=new Tt({color:16775620,transparent:!0,opacity:.3}),c=new xe(r,o);c.position.set(40,45,-80),this.scene.add(c);const l=new Tf(8900331,6732650,.3);this.scene.add(l)}setupInput(){const e=this.renderer.domElement;e.addEventListener("mousedown",t=>{this.state==="playing"&&(this.isDragging=!0,this.lastInputX=t.clientX)}),e.addEventListener("mousemove",t=>{if(!this.isDragging||this.state!=="playing")return;const n=(t.clientX-this.lastInputX)*.02;this.playerX=Math.max(-3.5,Math.min(3.5,this.playerX+n)),this.lastInputX=t.clientX}),e.addEventListener("mouseup",()=>{this.isDragging=!1}),e.addEventListener("mouseleave",()=>{this.isDragging=!1}),e.addEventListener("touchstart",t=>{this.state==="playing"&&(this.isDragging=!0,this.lastInputX=t.touches[0].clientX)},{passive:!0}),e.addEventListener("touchmove",t=>{if(!this.isDragging||this.state!=="playing")return;t.preventDefault();const n=(t.touches[0].clientX-this.lastInputX)*.02;this.playerX=Math.max(-3.5,Math.min(3.5,this.playerX+n)),this.lastInputX=t.touches[0].clientX},{passive:!1}),e.addEventListener("touchend",()=>{this.isDragging=!1}),this.keys={},window.addEventListener("keydown",t=>{this.keys[t.key]=!0}),window.addEventListener("keyup",t=>{this.keys[t.key]=!1})}startGame(){this.state="playing",this.shields=0,this.gateHistory=[],this.runId=(this.runId||0)+1,this.trackZ=0,this.playerX=0,this.speed=Kr,this.audio.init(),this.audio.resume(),this.audio.startMusic(),this.clearLevel(),this.trackLength=180,this.levelGenerator.generate(this.level,this.trackLength),this.trackLength=this.levelGenerator.plan.trackLength,this.levelGenerator.updateVisibility(this.trackZ);const e=this.getStartingCrowdSize();this.crowdManager.createPlayerCrowd(e),this.ui.showHUD(),this.ui.updateCount(e)}getStartingCrowdSize(){return Math.min(Ec,5+(this.crowdUpgrade-1)*3)}clearLevel(){const e=[];this.scene.traverse(t=>{t.userData.dynamic&&e.push(t)}),e.forEach(t=>{this.scene.remove(t),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())}),this.crowdManager.clear(),this.levelGenerator.clear()}update(e){if(this.levelGenerator.updateVisibility(this.trackZ),H_(e),this.state==="boss_defeated"){this.crowdManager.update(e),this.levelGenerator.updateBossDefeat(e);return}if(this.state==="fighting"){this.updateFight(e),this.crowdManager.update(e),this.ui.updateCount(this.crowdManager.getPlayerCount()),this.fightCameraTime=(this.fightCameraTime||0)+e;const t=Math.sin(this.fightCameraTime*25)*.15,n=Math.cos(this.fightCameraTime*30)*.08;this.camera.position.x=this.playerX*.3+t,this.camera.position.z=-this.trackZ+12,this.camera.position.y=10+n,this.camera.lookAt(this.playerX*.3,1,-this.trackZ-5);return}this.state==="playing"&&((this.keys.ArrowLeft||this.keys.a)&&(this.playerX=Math.max(-3.5,this.playerX-8*e)),(this.keys.ArrowRight||this.keys.d)&&(this.playerX=Math.min(3.5,this.playerX+8*e)),this.trackZ+=this.speed*e,this.crowdManager.updatePlayerPosition(this.playerX,-this.trackZ),this.camera.position.x=this.playerX*.3,this.camera.position.y=6.3,this.camera.position.z=-this.trackZ+8.4,this.camera.lookAt(this.playerX*.3,.8,-this.trackZ-8),this.directionalLight.position.set(this.playerX+10,20,-this.trackZ+10),this.directionalLight.target.position.set(this.playerX,0,-this.trackZ),this.directionalLight.target.updateMatrixWorld(),this.checkGateCollisions(),this.state==="playing"&&(this.checkObstacleCollisions(),this.state==="playing"&&(this.checkEnemyCollisions(),this.state==="playing"&&(this.trackZ>=this.trackLength&&this.checkBossFight(),this.crowdManager.update(e),this.ui.updateCount(this.crowdManager.getPlayerCount())))))}checkGateCollisions(){const e=this.levelGenerator.gates;for(let t=e.length-1;t>=0;t--){const n=e[t];if(n.passed)continue;const i=-n.z,s=-this.trackZ;Math.abs(s-i)<1&&(this.playerX<0&&n.leftGate?(this.applyGate(n.leftGate),n.passed=!0,this.highlightGate(n,"left")):this.playerX>=0&&n.rightGate&&(this.applyGate(n.rightGate),n.passed=!0,this.highlightGate(n,"right")))}}applyGate(e){const t={count:this.crowdManager.getPlayerCount(),shields:this.shields},n=Va(t,e);this.shields=n.shields;const i=n.count-t.count;i>0&&this.crowdManager.addToPlayerCrowd(i),i<0&&this.crowdManager.removeFromPlayerCrowd(-i);const s=n.shields-t.shields;if(i||s){const r=i>0||s>0;r?this.audio.playGateGood():this.audio.playGateBad(),this.ui.showFloatingText((i?(i>0?"+":"")+i:"")+(s?"  ◇ "+(s>0?"+":"")+s:""),r?"#a8f0d1":"#ff817b"),this.ui.screenShake(r?2:4)}else this.ui.showFloatingText("Condition non remplie","#ddc5ff");this.gateHistory.push({choice:e,before:t,after:n}),n.count===0&&this.loseGame()}highlightGate(e,t){const n=t==="left"?e.leftMesh:e.rightMesh;n&&(n.material.emissive=new we(16777215),n.material.emissiveIntensity=.5,setTimeout(()=>{n.material&&(n.material.emissiveIntensity=0)},300))}checkObstacleCollisions(){const e=this.levelGenerator.obstacles;for(const t of e){if(t.passed)continue;const n=-t.z,i=-this.trackZ;if(Math.abs(i-n)<1.5){const s=this.playerX-1.5,r=this.playerX+1.5,o=t.x-t.width/2,c=t.x+t.width/2;if(r>o&&s<c){const l=Math.ceil(this.crowdManager.getPlayerCount()*.3);this.crowdManager.removeFromPlayerCrowd(l),t.passed=!0,this.audio.playHit(),this.ui.screenShake(8),this.ui.showFloatingText(`-${l}`,"#ff5722"),this.crowdManager.getPlayerCount()<=0&&this.loseGame()}}}}checkEnemyCollisions(){const e=this.levelGenerator.enemies;for(const t of e){if(t.defeated)continue;const n=-t.z,i=-this.trackZ;if(Math.abs(i-n)<2){this.state="fighting",this.fightingEnemy=t,this.fightingEnemy.remainingCount=t.count,this.fightTimer=0,this.fightCameraTime=0,this.speed=0,this.audio.playHit(),this.ui.screenShake(10),this.crowdManager.spawnImpactFlash(new D(this.playerX,1,-this.trackZ),16777215),this.crowdManager.spawnSparks(new D(this.playerX,1,-this.trackZ),16755200,10);return}}}updateFight(e){if(this.fightTimer+=e,this.fightTimer>=this.fightInterval){this.fightTimer-=this.fightInterval,this.crowdManager.getPlayerCount();const t=this.fightingEnemy;if(!t)return;const n=this.strengthUpgrade,i=Math.min(n,t.remainingCount);if(t.remainingCount-=i,t.remainingCount>0&&(this.shields>0?this.shields--:this.crowdManager.removeFromPlayerCrowd(1),this.crowdManager.spawnDeathEffect(this.playerX,-this.trackZ,2201331)),i>0){const s=(Math.random()-.5)*3;this.crowdManager.spawnDeathEffect(s,-t.z,16007990),this.audio.playFightHit()}if(t.isBoss?(this.ui.updateBossHealthBar(t.remainingCount,t.count),this.levelGenerator.shakeBoss()):this.levelGenerator.updateEnemyLabel(t),t.remainingCount<=0)if(t.defeated=!0,t.isBoss){this.ui.hideBossHealthBar(),this.levelGenerator.playBossDefeatAnimation(),this.ui.screenShake(15),this.crowdManager.spawnSparks(new D(0,3,-t.z),10233776,20);const s=this.runId;setTimeout(()=>{this.runId===s&&this.state==="boss_defeated"&&this.winGame()},1200),this.state="boss_defeated",this.fightingEnemy=null,this.fightCameraTime=0}else this.crowdManager.removeEnemyCrowd(t),this.state="playing",this.speed=Kr,this.fightingEnemy=null,this.fightCameraTime=0,this.camera.position.y=12;else this.crowdManager.getPlayerCount()<=0&&(this.ui.hideBossHealthBar(),this.loseGame(),this.fightingEnemy=null,this.fightCameraTime=0)}this.crowdManager.updateParticles(e)}checkBossFight(){const e=this.levelGenerator.boss;if(!e||e.defeated){this.winGame();return}this.state="fighting",this.audio.playBossAppear(),this.ui.screenShake(12),this.fightCameraTime=0,this.fightingEnemy={z:e.z,count:e.health,remainingCount:e.health,defeated:!1,isBoss:!0,meshGroup:null},this.fightTimer=0,this.speed=0,this.ui.showBossHealthBar(e.health);const t=this.fightingEnemy;Object.defineProperty(t,"defeated",{get:()=>e.defeated,set:n=>{e.defeated=n}})}winGame(){if(this.state==="win"||this.state==="lose")return;this.state="win";const e=Math.floor(this.crowdManager.getPlayerCount()*2+this.level*10);this.coins+=e,this.level++,this.saveProgress(),this.audio.stopMusic(),this.audio.playWin(),this.ui.showWin(e)}loseGame(){if(this.state==="win"||this.state==="lose")return;this.state="lose";const e=Math.floor(this.level*2);this.coins+=e,this.saveProgress(),this.audio.stopMusic(),this.audio.playLose(),this.ui.showLose()}upgradecrowd(){const e=this.crowdUpgrade*50;return this.coins>=e?(this.coins-=e,this.crowdUpgrade++,this.saveProgress(),!0):!1}upgradeStrength(){const e=this.strengthUpgrade*75;return this.coins>=e?(this.coins-=e,this.strengthUpgrade++,this.saveProgress(),!0):!1}buySkin(e){const t=this.skins.find(n=>n.id===e);return!t||t.owned||t.shareUnlock||this.coins<t.price?!1:(this.coins-=t.price,t.owned=!0,this.equippedSkin=e,this.saveProgress(),!0)}equipSkin(e){const t=this.skins.find(n=>n.id===e);return!t||!t.owned?!1:(this.equippedSkin=e,this.saveProgress(),!0)}shareForSkin(e){const t=this.skins.find(n=>n.id===e);return!t||!t.shareUnlock||t.owned?!1:(t.owned=!0,this.equippedSkin=e,this.saveProgress(),!0)}buyTheme(e){const t=this.themes.find(n=>n.id===e);return!t||t.owned||this.coins<t.price?!1:(this.coins-=t.price,t.owned=!0,this.equippedTheme=e,this.applyTheme(),this.saveProgress(),!0)}equipTheme(e){const t=this.themes.find(n=>n.id===e);return!t||!t.owned?!1:(this.equippedTheme=e,this.applyTheme(),this.saveProgress(),!0)}getPlayerColor(){const e=this.skins.find(t=>t.id===this.equippedSkin);return e?e.color:2201331}getActiveTheme(){return this.themes.find(e=>e.id===this.equippedTheme)||this.themes[0]}applyTheme(){const e=this.getActiveTheme(),t=document.createElement("canvas");t.width=1,t.height=512;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,e.colors[0]),i.addColorStop(.2,e.colors[1]),i.addColorStop(.5,e.colors[2]),i.addColorStop(.8,e.colors[3]),i.addColorStop(1,e.colors[4]),n.fillStyle=i,n.fillRect(0,0,1,512);const s=new Ei(t);this.scene.background=s,this.scene.fog=new uc(e.fog,.006)}saveProgress(){const e={level:this.level,coins:this.coins,crowdUpgrade:this.crowdUpgrade,strengthUpgrade:this.strengthUpgrade,ownedSkins:this.skins.filter(t=>t.owned).map(t=>t.id),equippedSkin:this.equippedSkin,ownedThemes:this.themes.filter(t=>t.owned).map(t=>t.id),equippedTheme:this.equippedTheme};localStorage.setItem("convergence_vertical_v1",JSON.stringify(e))}loadProgress(){const e=localStorage.getItem("convergence_vertical_v1");if(e){const t=JSON.parse(e);this.level=t.level||1,this.coins=t.coins||0,this.crowdUpgrade=t.crowdUpgrade||1,this.strengthUpgrade=t.strengthUpgrade||1,t.ownedSkins&&this.skins.forEach(n=>{n.owned=t.ownedSkins.includes(n.id)}),t.equippedSkin&&(this.equippedSkin=t.equippedSkin),t.ownedThemes&&this.themes.forEach(n=>{n.owned=t.ownedThemes.includes(n.id)}),t.equippedTheme&&(this.equippedTheme=t.equippedTheme)}}animate(){requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.05);this.qaManual||this.update(e),this.renderer.render(this.scene,this.camera)}}try{const a=new Lx;a.init(),a.qa&&(window.__convergence=a)}catch(a){console.error("Game init failed:",a),document.body.innerHTML=`<div style="color:white;padding:20px;text-align:center;">
        <h2>Error loading game</h2>
        <p>${a.message}</p>
    </div>`}
