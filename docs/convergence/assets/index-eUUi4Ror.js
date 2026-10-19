(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="184",Rd=0,Al=1,Cd=2,Ya=1,hu=2,Hs=3,ti=0,en=1,xt=2,Qn=0,us=1,Rl=2,Cl=3,Pl=4,Pd=5,Ii=100,Dd=101,Id=102,Ld=103,Fd=104,Nd=200,Ud=201,kd=202,Od=203,Co=204,Po=205,Bd=206,Gd=207,zd=208,Vd=209,Hd=210,Wd=211,qd=212,Xd=213,jd=214,Do=0,Io=1,Lo=2,ps=3,Fo=4,No=5,Uo=6,ko=7,uu=0,Kd=1,Jd=2,Un=0,du=1,fu=2,pu=3,Ic=4,mu=5,gu=6,bu=7,Dl="attached",Yd="detached",xu=300,Oi=301,ms=302,Dr=303,Ir=304,yr=306,yi=1e3,Dn=1001,rr=1002,Bt=1003,_u=1004,Ws=1005,Nt=1006,Za=1007,In=1008,rn=1009,vu=1010,yu=1011,ea=1012,Lc=1013,Bn=1014,fn=1015,ni=1016,Fc=1017,Nc=1018,ta=1020,Mu=35902,Su=35899,wu=1021,Eu=1022,pn=1023,ii=1026,Ni=1027,Uc=1028,kc=1029,Bi=1030,Oc=1031,Bc=1033,$a=33776,Qa=33777,er=33778,tr=33779,Oo=35840,Bo=35841,Go=35842,zo=35843,Vo=36196,Ho=37492,Wo=37496,qo=37488,Xo=37489,or=37490,jo=37491,Ko=37808,Jo=37809,Yo=37810,Zo=37811,$o=37812,Qo=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,ac=37819,rc=37820,oc=37821,cc=36492,lc=36494,hc=36495,uc=36283,dc=36284,cr=36285,fc=36286,Zd=2200,Gc=2201,$d=2202,na=2300,ia=2301,Lr=2302,Il=2303,ls=2400,hs=2401,lr=2402,zc=2500,Qd=2501,ef=0,Tu=1,pc=2,tf=3200,mc=0,nf=1,bi="",ft="srgb",cn="srgb-linear",hr="linear",it="srgb",Hi=7680,Ll=519,sf=512,af=513,rf=514,Vc=515,of=516,cf=517,Hc=518,lf=519,gc=35044,Fl="300 es",Ln=2e3,sa=2001;function hf(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function uf(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function aa(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function df(){const a=aa("canvas");return a.style.display="block",a}const Nl={};function ur(...a){const e="THREE."+a.shift();console.log(e,...a)}function Au(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ve(...a){a=Au(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ce(...a){a=Au(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function bc(...a){const e=a.join(" ");e in Nl||(Nl[e]=!0,ve(...a))}function ff(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const pf={[Do]:Io,[Lo]:Uo,[Fo]:ko,[ps]:No,[Io]:Do,[Uo]:Lo,[ko]:Fo,[No]:ps};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const js=Math.PI/180,gs=180/Math.PI;function Mn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[a&255]+qt[a>>8&255]+qt[a>>16&255]+qt[a>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ve(a,e,t){return Math.max(e,Math.min(t,a))}function Wc(a,e){return(a%e+e)%e}function mf(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function gf(a,e,t){return a!==e?(t-a)/(e-a):0}function Ks(a,e,t){return(1-t)*a+t*e}function bf(a,e,t,n){return Ks(a,e,1-Math.exp(-t*n))}function xf(a,e=1){return e-Math.abs(Wc(a,e*2)-e)}function _f(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function vf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function yf(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Mf(a,e){return a+Math.random()*(e-a)}function Sf(a){return a*(.5-Math.random())}function wf(a){a!==void 0&&(Ul=a);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(a){return a*js}function Tf(a){return a*gs}function Af(a){return(a&a-1)===0&&a!==0}function Rf(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Cf(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Pf(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*u,c*d,o*l);break;case"YZY":a.set(c*d,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*d,o*h,o*l);break;case"XZX":a.set(o*h,c*m,c*f,o*l);break;case"YXY":a.set(c*f,o*h,c*m,o*l);break;case"ZYZ":a.set(c*m,c*f,o*h,o*l);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function st(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const xc={DEG2RAD:js,RAD2DEG:gs,generateUUID:Mn,clamp:Ve,euclideanModulo:Wc,mapLinear:mf,inverseLerp:gf,lerp:Ks,damp:bf,pingpong:xf,smoothstep:_f,smootherstep:vf,randInt:yf,randFloat:Mf,randFloatSpread:Sf,seededRandom:wf,degToRad:Ef,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Rf,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:Pf,normalize:st,denormalize:_n},pl=class pl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pl.prototype.isVector2=!0;let Se=pl;class yt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[r+0],f=s[r+1],m=s[r+2],x=s[r+3];if(u!==x||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){const b=Math.acos(g),y=Math.sin(b);p=Math.sin(p*b)/y,o=Math.sin(o*b)/y,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+x*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+x*o;const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ml=class ml{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ml.prototype.isVector3=!0;let C=ml;const Fr=new C,kl=new yt,gl=class gl{constructor(e,t,n,i,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],b=i[1],y=i[4],v=i[7],T=i[2],S=i[5],A=i[8];return s[0]=r*x+o*b+c*T,s[3]=r*g+o*y+c*S,s[6]=r*p+o*v+c*A,s[1]=l*x+h*b+u*T,s[4]=l*g+h*y+u*S,s[7]=l*p+h*v+u*A,s[2]=d*x+f*b+m*T,s[5]=d*g+f*y+m*S,s[8]=d*p+f*v+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,d=o*c-h*s,f=l*s-r*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*r)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*s-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gl.prototype.isMatrix3=!0;let Fe=gl;const Nr=new Fe,Ol=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){const a={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===it&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===it&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?hr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return bc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return bc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[cn]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),a}const qe=Df();function ei(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ds(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Wi;class If{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=aa("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ei(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lf=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ur(i[r].image)):s.push(Ur(i[r]))}else s=Ur(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ur(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?If.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}let Ff=0;const kr=new C;class Gt extends Mi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Dn,i=Dn,s=Nt,r=In,o=pn,c=rn,l=Gt.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Mn(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kr).x}get height(){return this.source.getSize(kr).y}get depth(){return this.source.getSize(kr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=xu;Gt.DEFAULT_ANISOTROPY=1;const bl=class bl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,T=(p+1)/2,S=(h+d)/4,A=(u+x)/4,_=(m+g)/4;return y>v&&y>T?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=S/n,s=A/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=_/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=_/s),this.set(n,i,s,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bl.prototype.isVector4=!0;let pt=bl;class Nf extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Gt(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new qc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Nf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ru extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uf extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vr=class vr{constructor(e,t,n,i,s,r,o,c,l,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,h,u,d,f,m,x,g)}set(e,t,n,i,s,r,o,c,l,h,u,d,f,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),r=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,m=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=r*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d-x*o,t[4]=-r*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*h,t[9]=x-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const d=r*h,f=r*u,m=o*h,x=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,f=r*l,m=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=r*c,f=r*l,m=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kf,e,Of)}lookAt(e,t,n){const i=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),li.crossVectors(n,sn),li.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),li.crossVectors(n,sn)),li.normalize(),ma.crossVectors(sn,li),i[0]=li.x,i[4]=ma.x,i[8]=sn.x,i[1]=li.y,i[5]=ma.y,i[9]=sn.y,i[2]=li.z,i[6]=ma.z,i[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],y=n[7],v=n[11],T=n[15],S=i[0],A=i[4],_=i[8],E=i[12],P=i[1],D=i[5],I=i[9],O=i[13],W=i[2],F=i[6],V=i[10],B=i[14],$=i[3],Q=i[7],he=i[11],_e=i[15];return s[0]=r*S+o*P+c*W+l*$,s[4]=r*A+o*D+c*F+l*Q,s[8]=r*_+o*I+c*V+l*he,s[12]=r*E+o*O+c*B+l*_e,s[1]=h*S+u*P+d*W+f*$,s[5]=h*A+u*D+d*F+f*Q,s[9]=h*_+u*I+d*V+f*he,s[13]=h*E+u*O+d*B+f*_e,s[2]=m*S+x*P+g*W+p*$,s[6]=m*A+x*D+g*F+p*Q,s[10]=m*_+x*I+g*V+p*he,s[14]=m*E+x*O+g*B+p*_e,s[3]=b*S+y*P+v*W+T*$,s[7]=b*A+y*D+v*F+T*Q,s[11]=b*_+y*I+v*V+T*he,s[15]=b*E+y*O+v*B+T*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],b=c*f-l*d,y=o*f-l*u,v=o*d-c*u,T=r*f-l*h,S=r*d-c*h,A=r*u-o*h;return t*(x*b-g*y+p*v)-n*(m*b-g*T+p*S)+i*(m*y-x*T+p*A)-s*(m*v-x*S+g*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=t*o-n*r,y=t*c-i*r,v=t*l-s*r,T=n*c-i*o,S=n*l-s*o,A=i*l-s*c,_=h*x-u*m,E=h*g-d*m,P=h*p-f*m,D=u*g-d*x,I=u*p-f*x,O=d*p-f*g,W=b*O-y*I+v*D+T*P-S*E+A*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/W;return e[0]=(o*O-c*I+l*D)*F,e[1]=(i*I-n*O-s*D)*F,e[2]=(x*A-g*S+p*T)*F,e[3]=(d*S-u*A-f*T)*F,e[4]=(c*P-r*O-l*E)*F,e[5]=(t*O-i*P+s*E)*F,e[6]=(g*v-m*A-p*y)*F,e[7]=(h*A-d*v+f*y)*F,e[8]=(r*I-o*P+l*_)*F,e[9]=(n*P-t*I-s*_)*F,e[10]=(m*S-x*v+p*b)*F,e[11]=(u*v-h*S-f*b)*F,e[12]=(o*E-r*D-c*_)*F,e[13]=(t*D-n*E+i*_)*F,e[14]=(x*y-m*T-g*b)*F,e[15]=(h*T-u*y+d*b)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,u=o+o,d=s*l,f=s*h,m=s*u,x=r*h,g=r*u,p=o*u,b=c*l,y=c*h,v=c*u,T=n.x,S=n.y,A=n.z;return i[0]=(1-(x+p))*T,i[1]=(f+v)*T,i[2]=(m-y)*T,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(d+p))*S,i[6]=(g+b)*S,i[7]=0,i[8]=(m+y)*A,i[9]=(g-b)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let r=qi.set(i[0],i[1],i[2]).length();const o=qi.set(i[4],i[5],i[6]).length(),c=qi.set(i[8],i[9],i[10]).length();s<0&&(r=-r),mn.copy(this);const l=1/r,h=1/o,u=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,r,o=Ln,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,x;if(c)m=s/(r-s),x=r*s/(r-s);else if(o===Ln)m=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===sa)m=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Ln,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,x;if(c)m=1/(r-s),x=r/(r-s);else if(o===Ln)m=-2/(r-s),x=-(r+s)/(r-s);else if(o===sa)m=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vr.prototype.isMatrix4=!0;let ke=vr;const qi=new C,mn=new ke,kf=new C(0,0,0),Of=new C(1,1,1),li=new C,ma=new C,sn=new C,Gl=new ke,zl=new yt;class si{constructor(e=0,t=0,n=0,i=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zl.setFromEuler(this),this.setFromQuaternion(zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bf=0;const Vl=new C,Xi=new yt,Hn=new ke,ga=new C,As=new C,Gf=new C,zf=new yt,Hl=new C(1,0,0),Wl=new C(0,1,0),ql=new C(0,0,1),Xl={type:"added"},Vf={type:"removed"},ji={type:"childadded",child:null},Or={type:"childremoved",child:null};class rt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new C,t=new si,n=new yt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Fe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(As,ga,this.up):Hn.lookAt(ga,As,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),ji.child=e,this.dispatchEvent(ji),ji.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf),Or.child=e,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DEFAULT_UP=new C(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class at extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hf={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Gr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Wc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Gr(r,s,e+1/3),this.g=Gr(r,s,e),this.b=Gr(r,s,e-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(e,t=ft){function n(s){s!==void 0&&parseFloat(s)<1&&ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return qe.workingToColorSpace(Xt.copy(this),e),Math.round(Ve(Xt.r*255,0,255))*65536+Math.round(Ve(Xt.g*255,0,255))*256+Math.round(Ve(Xt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,s=Xt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=ft){qe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(ba);const n=Ks(hi.h,ba.h,t),i=Ks(hi.s,ba.s,t),s=Ks(hi.l,ba.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ae;Ae.NAMES=Pu;class Xc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new Xc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wf extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gn=new C,Wn=new C,zr=new C,qn=new C,Ki=new C,Ji=new C,jl=new C,Vr=new C,Hr=new C,Wr=new C,qr=new pt,Xr=new pt,jr=new pt;class vn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gn.subVectors(i,t),Wn.subVectors(n,t),zr.subVectors(e,t);const r=gn.dot(gn),o=gn.dot(Wn),c=gn.dot(zr),l=Wn.dot(Wn),h=Wn.dot(zr),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(r*h-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(r,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return qr.setScalar(0),Xr.setScalar(0),jr.setScalar(0),qr.fromBufferAttribute(e,t),Xr.fromBufferAttribute(e,n),jr.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(qr,s.x),r.addScaledVector(Xr,s.y),r.addScaledVector(jr,s.z),r}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),Wn.subVectors(e,t),gn.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),gn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Ki.subVectors(i,n),Ji.subVectors(s,n),Vr.subVectors(e,n);const c=Ki.dot(Vr),l=Ji.dot(Vr);if(c<=0&&l<=0)return t.copy(n);Hr.subVectors(e,i);const h=Ki.dot(Hr),u=Ji.dot(Hr);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Ki,r);Wr.subVectors(e,s);const f=Ki.dot(Wr),m=Ji.dot(Wr);if(m>=0&&f<=m)return t.copy(s);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ji,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return jl.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(jl,o);const p=1/(g+x+d);return r=x*p,o=d*p,t.copy(n).addScaledVector(Ki,r).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class At{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,bn):bn.fromBufferAttribute(s,r),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),_a.subVectors(this.max,Rs),Yi.subVectors(e.a,Rs),Zi.subVectors(e.b,Rs),$i.subVectors(e.c,Rs),ui.subVectors(Zi,Yi),di.subVectors($i,Zi),wi.subVectors(Yi,$i);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-wi.z,wi.y,ui.z,0,-ui.x,di.z,0,-di.x,wi.z,0,-wi.x,-ui.y,ui.x,0,-di.y,di.x,0,-wi.y,wi.x,0];return!Kr(t,Yi,Zi,$i,_a)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,Yi,Zi,$i,_a))?!1:(va.crossVectors(ui,di),t=[va.x,va.y,va.z],Kr(t,Yi,Zi,$i,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new C,new C,new C,new C,new C,new C,new C,new C],bn=new C,xa=new At,Yi=new C,Zi=new C,$i=new C,ui=new C,di=new C,wi=new C,Rs=new C,_a=new C,va=new C,Ei=new C;function Kr(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Ei.fromArray(a,s);const o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ft=new C,ya=new Se;let qf=0;class Ut extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Du extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Iu extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Je extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Xf=new At,Cs=new C,Jr=new C;class Gn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Cs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Jr)),this.expandByPoint(Cs.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jf=0;const hn=new ke,Yr=new rt,Qi=new C,an=new At,Ps=new At,Ht=new C;class Lt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?Iu:Du)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Je(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(an.min,Ps.min),an.expandByPoint(Ht),Ht.addVectors(an.max,Ps.max),an.expandByPoint(Ht)):(an.expandByPoint(Ps.min),an.expandByPoint(Ps.max))}an.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),Ht.add(Qi)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new C,c[_]=new C;const l=new C,h=new C,u=new C,d=new Se,f=new Se,m=new Se,x=new C,g=new C;function p(_,E,P){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,P),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,P),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),o[_].add(x),o[E].add(x),o[P].add(x),c[_].add(g),c[E].add(g),c[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,E=b.length;_<E;++_){const P=b[_],D=P.start,I=P.count;for(let O=D,W=D+I;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new C,v=new C,T=new C,S=new C;function A(_){T.fromBufferAttribute(i,_),S.copy(T);const E=o[_];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(S,E);const D=v.dot(c[_])<0?-1:1;r.setXYZW(_,y.x,y.y,y.z,D)}for(let _=0,E=b.length;_<E;++_){const P=b[_],D=P.start,I=P.count;for(let O=D,W=D+I;O<W;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,r=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ut(d,h,u)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new C;class jc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Jf=0;class On extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=us,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ve(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const c=s[o];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jn=new C,Zr=new C,Ma=new C,fi=new C,$r=new C,Sa=new C,Qr=new C;class Mr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zr.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Zr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Ma),o=fi.dot(this.direction),c=-fi.dot(Ma),l=fi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*c-o,d=r*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Zr).addScaledVector(Ma,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,s){$r.subVectors(t,e),Sa.subVectors(n,e),Qr.crossVectors($r,Sa);let r=this.direction.dot(Qr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(Sa.crossVectors(fi,Sa));if(c<0)return null;const l=o*this.direction.dot($r.cross(fi));if(l<0||c+l>r)return null;const h=-o*fi.dot(Qr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kl=new ke,Ti=new Mr,wa=new Gn,Jl=new C,Ea=new C,Ta=new C,Aa=new C,eo=new C,Ra=new C,Yl=new C,Ca=new C;class oe extends rt{constructor(e=new Lt,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ra.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(eo.fromBufferAttribute(u,e),r?Ra.addScaledVector(eo,h):Ra.addScaledVector(eo.sub(t),h))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(wa.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(wa,Jl)===null||Ti.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Kl.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=r[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,T=y;v<T;v+=3){const S=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);i=Pa(this,p,e,n,l,h,u,S,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const b=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);i=Pa(this,r,e,n,l,h,u,b,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=r[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,T=y;v<T;v+=3){const S=v,A=v+1,_=v+2;i=Pa(this,p,e,n,l,h,u,S,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const b=g,y=g+1,v=g+2;i=Pa(this,r,e,n,l,h,u,b,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Yf(a,e,t,n,i,s,r,o){let c;if(e.side===en?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===ti,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:a}}function Pa(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,Ea),a.getVertexPosition(c,Ta),a.getVertexPosition(l,Aa);const h=Yf(a,e,t,n,Ea,Ta,Aa,Yl);if(h){const u=new C;vn.getBarycoord(Yl,Ea,Ta,Aa,u),i&&(h.uv=vn.getInterpolatedAttribute(i,o,c,l,u,new Se)),s&&(h.uv1=vn.getInterpolatedAttribute(s,o,c,l,u,new Se)),r&&(h.normal=vn.getInterpolatedAttribute(r,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};vn.getNormal(Ea,Ta,Aa,d.normal),h.face=d,h.barycoord=u}return h}const Ds=new pt,Zl=new pt,$l=new pt,Zf=new pt,Ql=new ke,Da=new C,to=new Gn,eh=new ke,no=new Mr;class $f extends oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dl,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new At),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(i),e.ray.intersectsSphere(to)!==!1&&(eh.copy(i).invert(),no.copy(e.ray).applyMatrix4(eh),!(this.boundingBox!==null&&no.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zl.fromBufferAttribute(i.attributes.skinIndex,e),$l.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ds.copy(t),t.set(0,0,0,0)):(Ds.set(...t,1),t.set(0,0,0)),Ds.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const r=$l.getComponent(s);if(r!==0){const o=Zl.getComponent(s);Ql.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Zf.copy(Ds).applyMatrix4(Ql),r)}}return t.isVector4&&(t.w=Ds.w),t.applyMatrix4(this.bindMatrixInverse)}}class Lu extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kc extends Gt{constructor(e=null,t=1,n=1,i,s,r,o,c,l=Bt,h=Bt,u,d){super(null,r,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=new ke,Qf=new ke;class Jc{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Qf;th.multiplyMatrices(o,t[s]),th.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Kc(t,e,e,pn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(ve("Skeleton: No bone found with UUID:",s),r=new Lu),this.bones.push(r),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ra extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new ke,nh=new ke,Ia=[],ih=new At,ep=new ke,Is=new oe,Ls=new Gn;class ha extends oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ep)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new At),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),ih.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(ih)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Ls.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),e.ray.intersectsSphere(Ls)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,es),nh.multiplyMatrices(n,es),Is.matrixWorld=nh,Is.raycast(e,Ia);for(let r=0,o=Ia.length;r<o;r++){const c=Ia[r];c.instanceId=s,c.object=this,t.push(c)}Ia.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kc(new Float32Array(i*this.count),i,this.count,Uc,fn));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const io=new C,tp=new C,np=new Fe;class Di{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=io.subVectors(n,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||np.getNormalMatrix(e),i=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Gn,ip=new Se(.5,.5),La=new C;class Yc{constructor(e=new Di,t=new Di,n=new Di,i=new Di,s=new Di,r=new Di){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],x=s[9],g=s[10],p=s[11],b=s[12],y=s[13],v=s[14],T=s[15];if(i[0].setComponents(l-r,f-h,p-m,T-b).normalize(),i[1].setComponents(l+r,f+h,p+m,T+b).normalize(),i[2].setComponents(l+o,f+u,p+x,T+y).normalize(),i[3].setComponents(l-o,f-u,p-x,T-y).normalize(),n)i[4].setComponents(c,d,g,v).normalize(),i[5].setComponents(l-c,f-d,p-g,T-v).normalize();else if(i[4].setComponents(l-c,f-d,p-g,T-v).normalize(),t===Ln)i[5].setComponents(l+c,f+d,p+g,T+v).normalize();else if(t===sa)i[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=ip.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(La.x=i.normal.x>0?e.max.x:e.min.x,La.y=i.normal.y>0?e.max.y:e.min.y,La.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fu extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dr=new C,fr=new C,sh=new ke,Fs=new Mr,Fa=new Gn,so=new C,ah=new C;class Zc extends rt{constructor(e=new Lt,t=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)dr.fromBufferAttribute(t,i-1),fr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dr.distanceTo(fr);e.setAttribute("lineDistance",new Je(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;sh.copy(i).invert(),Fs.copy(e.ray).applyMatrix4(sh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=f,g=m-1;x<g;x+=l){const p=h.getX(x),b=h.getX(x+1),y=Na(this,e,Fs,c,p,b,x);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=Na(this,e,Fs,c,x,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let x=f,g=m-1;x<g;x+=l){const p=Na(this,e,Fs,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Na(this,e,Fs,c,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Na(a,e,t,n,i,s,r){const o=a.geometry.attributes.position;if(dr.fromBufferAttribute(o,i),fr.fromBufferAttribute(o,s),t.distanceSqToSegment(dr,fr,so,ah)>n)return;so.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(so);if(!(l<e.near||l>e.far))return{distance:l,point:ah.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}const rh=new C,oh=new C;class sp extends Zc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)rh.fromBufferAttribute(t,i),oh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(oh);e.setAttribute("lineDistance",new Je(n,1))}else ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ap extends Zc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nu extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ch=new ke,_c=new Mr,Ua=new Gn,ka=new C;class rp extends rt{constructor(e=new Lt,t=new Nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;ch.copy(i).invert(),_c.copy(e.ray).applyMatrix4(ch);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=d,x=f;m<x;m++){const g=l.getX(m);ka.fromBufferAttribute(u,g),lh(ka,g,c,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,x=f;m<x;m++)ka.fromBufferAttribute(u,m),lh(ka,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lh(a,e,t,n,i,s,r){const o=_c.distanceSqToPoint(a);if(o<t){const c=new C;_c.closestPointToPoint(a,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Uu extends Gt{constructor(e=[],t=Oi,n,i,s,r,o,c,l,h){super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vi extends Gt{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bs extends Gt{constructor(e,t,n=Bn,i,s,r,o=Bt,c=Bt,l,h=ii,u=1){if(h!==ii&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class op extends bs{constructor(e,t=Bn,n=Oi,i,s,r=Bt,o=Bt,c,l=ii){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ku extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wt extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(x,g,p,b,y,v,T,S,A,_,E){const P=v/A,D=T/_,I=v/2,O=T/2,W=S/2,F=A+1,V=_+1;let B=0,$=0;const Q=new C;for(let he=0;he<V;he++){const _e=he*D-O;for(let Ee=0;Ee<F;Ee++){const Ye=Ee*P-I;Q[x]=Ye*b,Q[g]=_e*y,Q[p]=W,l.push(Q.x,Q.y,Q.z),Q[x]=0,Q[g]=0,Q[p]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ee/A),u.push(1-he/_),B+=1}}for(let he=0;he<_;he++)for(let _e=0;_e<A;_e++){const Ee=d+_e+F*he,Ye=d+_e+F*(he+1),ot=d+(_e+1)+F*(he+1),Oe=d+(_e+1)+F*he;c.push(Ee,Ye,Oe),c.push(Ye,ot,Oe),$+=6}o.addGroup(f,$,E),f+=$,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qt extends Lt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const r=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,x=i+1,g=new C,p=new C;for(let b=0;b<=m;b++){let y=0,v=0,T=0,S=0;if(b<=n){const E=b/n,P=E*Math.PI/2;v=-h-e*Math.cos(P),T=e*Math.sin(P),S=-e*Math.cos(P),y=E*u}else if(b<=n+s){const E=(b-n)/s;v=-h+E*t,T=e,S=0,y=u+E*d}else{const E=(b-n-s)/n,P=E*Math.PI/2;v=h+e*Math.sin(P),T=e*Math.cos(P),S=e*Math.sin(P),y=u+d+E*u}const A=Math.max(0,Math.min(1,y/f));let _=0;b===0?_=.5/i:b===m&&(_=-.5/i);for(let E=0;E<=i;E++){const P=E/i,D=P*Math.PI*2,I=Math.sin(D),O=Math.cos(D);p.x=-T*O,p.y=v,p.z=T*I,o.push(p.x,p.y,p.z),g.set(-T*O,S,T*I),g.normalize(),c.push(g.x,g.y,g.z),l.push(P+_,A)}if(b>0){const E=(b-1)*x;for(let P=0;P<i;P++){const D=E+P,I=E+P+1,O=b*x+P,W=b*x+P+1;r.push(D,I,O),r.push(I,W,O)}}}this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Sr extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],o=[],c=[],l=new C,h=new Se;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qe extends Lt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const x=[],g=n/2;let p=0;b(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function b(){const v=new C,T=new C;let S=0;const A=(t-e)/n;for(let _=0;_<=s;_++){const E=[],P=_/s,D=P*(t-e)+e;for(let I=0;I<=i;I++){const O=I/i,W=O*c+o,F=Math.sin(W),V=Math.cos(W);T.x=D*F,T.y=-P*n+g,T.z=D*V,u.push(T.x,T.y,T.z),v.set(F,A,V).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-P),E.push(m++)}x.push(E)}for(let _=0;_<i;_++)for(let E=0;E<s;E++){const P=x[E][_],D=x[E+1][_],I=x[E+1][_+1],O=x[E][_+1];(e>0||E!==0)&&(h.push(P,D,O),S+=3),(t>0||E!==s-1)&&(h.push(D,I,O),S+=3)}l.addGroup(p,S,0),p+=S}function y(v){const T=m,S=new Se,A=new C;let _=0;const E=v===!0?e:t,P=v===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),m++;const D=m;for(let I=0;I<=i;I++){const W=I/i*c+o,F=Math.cos(W),V=Math.sin(W);A.x=E*V,A.y=g*P,A.z=E*F,u.push(A.x,A.y,A.z),d.push(0,P,0),S.x=F*.5+.5,S.y=V*.5*P+.5,f.push(S.x,S.y),m++}for(let I=0;I<i;I++){const O=T+I,W=D+I;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends Qe{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends Lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new C,v=new C,T=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],y),f(t[S+1],v),f(t[S+2],T),c(y,v,T,b)}function c(b,y,v,T){const S=T+1,A=[];for(let _=0;_<=S;_++){A[_]=[];const E=b.clone().lerp(v,_/S),P=y.clone().lerp(v,_/S),D=S-_;for(let I=0;I<=D;I++)I===0&&_===S?A[_][I]=E:A[_][I]=E.clone().lerp(P,I/D)}for(let _=0;_<S;_++)for(let E=0;E<2*(S-_)-1;E++){const P=Math.floor(E/2);E%2===0?(d(A[_][P+1]),d(A[_+1][P]),d(A[_][P])):(d(A[_][P+1]),d(A[_+1][P+1]),d(A[_+1][P]))}}function l(b){const y=new C;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(b),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const b=new C;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];const v=g(b)/2/Math.PI+.5,T=p(b)/Math.PI+.5;r.push(v,1-T)}m(),u()}function u(){for(let b=0;b<r.length;b+=6){const y=r[b+0],v=r[b+2],T=r[b+4],S=Math.max(y,v,T),A=Math.min(y,v,T);S>.9&&A<.1&&(y<.2&&(r[b+0]+=1),v<.2&&(r[b+2]+=1),T<.2&&(r[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function f(b,y){const v=b*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const b=new C,y=new C,v=new C,T=new C,S=new Se,A=new Se,_=new Se;for(let E=0,P=0;E<s.length;E+=9,P+=6){b.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),S.set(r[P+0],r[P+1]),A.set(r[P+2],r[P+3]),_.set(r[P+4],r[P+5]),T.copy(b).add(y).add(v).divideScalar(3);const D=g(T);x(S,P+0,b,D),x(A,P+2,y,D),x(_,P+4,v,D)}}function x(b,y,v,T){T<0&&b.x===1&&(r[y]=b.x-1),v.x===0&&v.z===0&&(r[y]=T/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.vertices,e.indices,e.radius,e.detail)}}class $c extends wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $c(e.radius,e.detail)}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),c=t||(r.isVector2?new Se:new C);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,i=[],s=[],r=[],o=new C,c=new ke;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new C)}s[0]=new C,r[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,m))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ve(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ou extends ai{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Se){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cp extends Ou{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let a=0,e=0,t=0,n=0;function i(s,r,o,c){a=s,e=o,t=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){i(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,u){let d=(r-s)/l-(o-s)/(l+h)+(o-r)/h,f=(o-r)/h-(c-r)/(h+u)+(c-o)/u;d*=h,f*=h,i(r,o,d,f)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const hh=new C,uh=new C,ao=new Qc,ro=new Qc,oo=new Qc;class Bu extends ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(uh.subVectors(i[0],i[1]).add(i[0]),l=uh);const u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(hh.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=hh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),ao.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),ro.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),oo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ro.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),oo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ao.calc(c),ro.calc(c),oo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dh(a,e,t,n,i){const s=(n-e)*.5,r=(i-t)*.5,o=a*a,c=a*o;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*o+s*a+t}function lp(a,e){const t=1-a;return t*t*e}function hp(a,e){return 2*(1-a)*a*e}function up(a,e){return a*a*e}function Js(a,e,t,n){return lp(a,e)+hp(a,t)+up(a,n)}function dp(a,e){const t=1-a;return t*t*t*e}function fp(a,e){const t=1-a;return 3*t*t*a*e}function pp(a,e){return 3*(1-a)*a*a*e}function mp(a,e){return a*a*a*e}function Ys(a,e,t,n,i){return dp(a,e)+fp(a,t)+pp(a,n)+mp(a,i)}class gp extends ai{constructor(e=new Se,t=new Se,n=new Se,i=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Se){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ys(e,i.x,s.x,r.x,o.x),Ys(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bp extends ai{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ys(e,i.x,s.x,r.x,o.x),Ys(e,i.y,s.y,r.y,o.y),Ys(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xp extends ai{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _p extends ai{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vp extends ai{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Js(e,i.x,s.x,r.x),Js(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends ai{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Js(e,i.x,s.x,r.x),Js(e,i.y,s.y,r.y),Js(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yp extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(dh(o,c.x,l.x,h.x,u.x),dh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Se().fromArray(i))}return this}}var Mp=Object.freeze({__proto__:null,ArcCurve:cp,CatmullRomCurve3:Bu,CubicBezierCurve:gp,CubicBezierCurve3:bp,EllipseCurve:Ou,LineCurve:xp,LineCurve3:_p,QuadraticBezierCurve:vp,QuadraticBezierCurve3:Gu,SplineCurve:yp});class el extends wr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new el(e.radius,e.detail)}}class Tt extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const b=p*d-r;for(let y=0;y<l;y++){const v=y*u-s;m.push(v,-b,0),x.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const y=b+l*p,v=b+l*(p+1),T=b+1+l*(p+1),S=b+1+l*p;f.push(y,v,S),f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.widthSegments,e.heightSegments)}}class tl extends Lt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new C,m=new Se;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const p=s+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){const g=x*(n+1);for(let p=0;p<n;p++){const b=p+g,y=b,v=b+n+1,T=b+n+2,S=b+1;o.push(y,v,S),o.push(v,T,S)}}this.setIndex(o),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class et extends Lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const b=[],y=p/n;let v=0;p===0&&r===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const S=T/t;u.x=-e*Math.cos(i+S*s)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(i+S*s)*Math.sin(r+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+v,1-y),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const y=h[p][b+1],v=h[p][b],T=h[p+1][b],S=h[p+1][b+1];(p!==0||r>0)&&f.push(y,v,S),(p!==n-1||c<Math.PI)&&f.push(v,T,S)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fn extends Lt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],u=[],d=new C,f=new C,m=new C;for(let x=0;x<=n;x++){const g=r+x/n*o;for(let p=0;p<=i;p++){const b=p/i*s;f.x=(e+t*Math.cos(g))*Math.cos(b),f.y=(e+t*Math.cos(g))*Math.sin(b),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){const p=(i+1)*x+g-1,b=(i+1)*(x-1)+g-1,y=(i+1)*(x-1)+g,v=(i+1)*x+g;c.push(p,b,v),c.push(b,y,v)}this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nl extends Lt{constructor(e=new Gu(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new C,c=new C,l=new Se;let h=new C;const u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function x(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),b(),p()}function g(y){h=e.getPointAt(y/t,h);const v=r.normals[y],T=r.binormals[y];for(let S=0;S<=i;S++){const A=S/i*Math.PI*2,_=Math.sin(A),E=-Math.cos(A);c.x=E*v.x+_*T.x,c.y=E*v.y+_*T.y,c.z=E*v.z+_*T.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const T=(i+1)*(y-1)+(v-1),S=(i+1)*y+(v-1),A=(i+1)*y+v,_=(i+1)*(y-1)+v;m.push(T,S,_),m.push(S,A,_)}}function b(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)l.x=y/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new nl(new Mp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function xs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];if(fh(i))i.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(fh(i[0])){const s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Zt(a){const e={};for(let t=0;t<a.length;t++){const n=xs(a[t]);for(const i in n)e[i]=n[i]}return e}function fh(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Sp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function zu(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const wp={clone:xs,merge:Zt};var Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ap extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ie extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zn extends Ie{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rp extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cp extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Oa(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Pp(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ph(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function Vu(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class Ms{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dp extends Ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ls,endingEnd:ls}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case hs:s=e,o=2*t-n;break;case lr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hs:r=e,c=2*n-t;break;case lr:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let T=0;T!==o;++T)s[T]=p*r[h+T]+b*r[l+T]+y*r[c+T]+v*r[u+T];return s}}class Hu extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[l+d]*u+r[c+d]*h;return s}}class Ip extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Lp extends Ms{interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const x=(n-t)/(i-t),g=1-x;for(let p=0;p!==o;++p)s[p]=r[l+p]*g+r[c+p]*x;return s}const f=o*2,m=e-1;for(let x=0;x!==o;++x){const g=r[l+x],p=r[c+x],b=m*f+x*2,y=d[b],v=d[b+1],T=e*f+x*2,S=u[T],A=u[T+1];let _=(n-t)/(i-t),E,P,D,I,O;for(let W=0;W<8;W++){E=_*_,P=E*_,D=1-_,I=D*D,O=I*D;const V=O*t+3*I*_*y+3*D*E*S+P*i-n;if(Math.abs(V)<1e-10)break;const B=3*I*(y-t)+6*D*_*(S-y)+3*E*(i-S);if(Math.abs(B)<1e-10)break;_=_-V/B,_=Math.max(0,Math.min(1,_))}s[x]=O*g+3*I*_*v+3*D*E*A+P*p}return s}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Lp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Lr:t=this.InterpolantFactoryMethodSmooth;break;case Il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Lr;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ce("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Ce("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&uf(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){Ce("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ia;class Ss extends wn{constructor(e,t,n){super(e,t,n)}}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=na;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Wu extends wn{constructor(e,t,n,i){super(e,t,n,i)}}Wu.prototype.ValueTypeName="color";class _s extends wn{constructor(e,t,n,i){super(e,t,n,i)}}_s.prototype.ValueTypeName="number";class Fp extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)yt.slerpFlat(s,0,r,l-o,r,l,c);return s}}class vs extends wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Fp(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends wn{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=na;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends wn{constructor(e,t,n,i){super(e,t,n,i)}}ys.prototype.ValueTypeName="vector";class vc{constructor(e="",t=-1,n=[],i=zc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Up(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Pp(c);c=ph(c,1,h),l=ph(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new _s(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(ve("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ce("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const g=[],p=[];Vu(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const g=[],p=[];for(let b=0;b!==d[m].morphTargets.length;++b){const y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}i.push(new _s(".morphTargetInfluence["+x+"]",g,p))}c=f.length*r}else{const f=".bones["+t[u].name+"]";n(ys,f+".position",d,"pos",i),n(vs,f+".quaternion",d,"rot",i),n(ys,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Np(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return Wu;case"quaternion":return vs;case"bool":case"boolean":return Ss;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Up(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Np(a.type);if(a.times===void 0){const t=[],n=[];Vu(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const $n={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(mh(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!mh(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function mh(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class kp{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Op=new kp;class Es{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Bp extends Error{constructor(e,t){super(e),this.response=t}}class qu extends Es{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$n.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Kn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const g=new ReadableStream({start(p){b();function b(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{x+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,A=h.length;S<A;S++){const _=h[S];_.onProgress&&_.onProgress(T)}p.enqueue(v),b()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Bp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{$n.add(`file:${e}`,l);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ts=new WeakMap;class Gp extends Es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=$n.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=ts.get(r);u===void 0&&(u=[],ts.set(r,u)),u.push({onLoad:t,onError:i})}return r}const o=aa("img");function c(){h(),t&&t(this);const u=ts.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ts.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),$n.remove(`image:${e}`);const d=ts.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}ts.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$n.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ua extends Es{constructor(e){super(e)}load(e,t,n,i){const s=new Gt,r=new Gp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class da extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zp extends da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const co=new ke,gh=new C,bh=new C;class il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(gh),bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bh),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===sa||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ba=new C,Ga=new yt,An=new C;class Xu extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,Ga,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Ga,An.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ba,Ga,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Ga,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new C,xh=new Se,_h=new Se;class $t extends Xu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,_h),t.subVectors(_h,xh)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vp extends il{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hp extends da{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Vp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Wp extends il{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}}class qp extends da{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Er extends Xu{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xp extends il{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ju extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new Xp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jp extends da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const lo=new WeakMap;class Kp extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=$n.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{lo.has(r)===!0?(i&&i(lo.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){$n.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),lo.set(c,l),$n.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});$n.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ns=-90,is=1;class Jp extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(ns,is,e,t);i.layers=this.layers,this.add(i);const s=new $t(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new $t(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new $t(ns,is,e,t);o.layers=this.layers,this.add(o);const c=new $t(ns,is,e,t);c.layers=this.layers,this.add(c);const l=new $t(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(const l of t)this.remove(l);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Yp extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;yt.multiplyQuaternionsFlat(e,r,e,t,e,n),yt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const sl="\\[\\]\\.:\\/",$p=new RegExp("["+sl+"]","g"),al="[^"+sl+"]",Qp="[^"+sl.replace("\\.","")+"]",em=/((?:WC+[\/:])*)/.source.replace("WC",al),tm=/(WCOD+)?/.source.replace("WCOD",Qp),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),sm=new RegExp("^"+em+tm+nm+im+"$"),am=["material","materials","bones","map"];class rm{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($p,"")}static parseTrackName(e){const t=sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);am.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=rm;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class om{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,o=new Array(r),c={endingStart:ls,endingEnd:ls};for(let l=0;l!==r;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings&&Object.assign(c,h.settings),h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Qd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case zc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===$d;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Zd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=hs,i.endingEnd=hs):(e?i.endingStart=this.zeroSlopeAtStart?hs:ls:i.endingStart=lr,t?i.endingEnd=this.zeroSlopeAtEnd?hs:ls:i.endingEnd=lr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const cm=new Float32Array(1);class rl extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,r[u]=m;else{if(m=r[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;m=new Zp(nt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),r[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Hu(new Float32Array(2),new Float32Array(2),1,cm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?vc.findByName(i,e):e;const o=r!==null?r.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=zc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new om(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?vc.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){const l=r[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class lm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ve("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const xl=class xl{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};xl.prototype.isMatrix2=!0;let vh=xl;function yh(a,e,t,n){const i=hm(n);switch(t){case wu:return a*e;case Uc:return a*e/i.components*i.byteLength;case kc:return a*e/i.components*i.byteLength;case Bi:return a*e*2/i.components*i.byteLength;case Oc:return a*e*2/i.components*i.byteLength;case Eu:return a*e*3/i.components*i.byteLength;case pn:return a*e*4/i.components*i.byteLength;case Bc:return a*e*4/i.components*i.byteLength;case $a:case Qa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case er:case tr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bo:case zo:return Math.max(a,16)*Math.max(e,8)/4;case Oo:case Go:return Math.max(a,8)*Math.max(e,8)/2;case Vo:case Ho:case qo:case Xo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Wo:case or:case jo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case cc:case lc:case hc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case uc:case dc:return Math.ceil(a/4)*Math.ceil(e/4)*8;case cr:case fc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hm(a){switch(a){case rn:case vu:return{byteLength:1,components:1};case ea:case yu:case ni:return{byteLength:2,components:1};case Fc:case Nc:return{byteLength:2,components:4};case Bn:case Lc:case fn:return{byteLength:4,components:1};case Mu:case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ku(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function um(a){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=a.createBuffer();a.bindBuffer(c,d),a.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=a.SHORT;else if(l instanceof Uint32Array)f=a.UNSIGNED_INT;else if(l instanceof Int32Array)f=a.INT;else if(l instanceof Int8Array)f=a.BYTE;else if(l instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(a.bindBuffer(l,o),u.length===0)a.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];a.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
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
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Em=`#ifdef USE_IRIDESCENCE
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
#endif`,Tm=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,km=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qm=`#ifdef USE_GRADIENTMAP
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
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sg=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,hg=`uniform sampler2D dfgLUT;
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
}`,ug=`
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
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
#endif`,Cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,_0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,y0=`#define DISTANCE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#define LAMBERT
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,I0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,N0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,O0=`#define TOON
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
}`,B0=`#define TOON
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
}`,G0=`uniform float size;
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
}`,z0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 color;
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
}`,W0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:bm,aomap_fragment:xm,aomap_pars_fragment:_m,batching_pars_vertex:vm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:wm,iridescence_fragment:Em,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Pm,color_fragment:Dm,color_pars_fragment:Im,color_pars_vertex:Lm,color_vertex:Fm,common:Nm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:km,displacementmap_pars_vertex:Om,displacementmap_vertex:Bm,emissivemap_fragment:Gm,emissivemap_pars_fragment:zm,colorspace_fragment:Vm,colorspace_pars_fragment:Hm,envmap_fragment:Wm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Xm,envmap_pars_vertex:jm,envmap_physical_pars_fragment:sg,envmap_vertex:Km,fog_vertex:Jm,fog_pars_vertex:Ym,fog_fragment:Zm,fog_pars_fragment:$m,gradientmap_pars_fragment:Qm,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:ag,lights_toon_pars_fragment:rg,lights_phong_fragment:og,lights_phong_pars_fragment:cg,lights_physical_fragment:lg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:dg,lights_fragment_end:fg,lightprobes_pars_fragment:pg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:xg,map_fragment:_g,map_pars_fragment:vg,map_particle_fragment:yg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Eg,morphcolor_vertex:Tg,morphnormal_vertex:Ag,morphtarget_pars_vertex:Rg,morphtarget_vertex:Cg,normal_fragment_begin:Pg,normal_fragment_maps:Dg,normal_pars_fragment:Ig,normal_pars_vertex:Lg,normal_vertex:Fg,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Bg,opaque_fragment:Gg,packing:zg,premultiplied_alpha_fragment:Vg,project_vertex:Hg,dithering_fragment:Wg,dithering_pars_fragment:qg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Jg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Zg,skinbase_vertex:$g,skinning_pars_vertex:Qg,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:a0,transmission_fragment:r0,transmission_pars_fragment:o0,uv_pars_fragment:c0,uv_pars_vertex:l0,uv_vertex:h0,worldpos_vertex:u0,background_vert:d0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:b0,depth_vert:x0,depth_frag:_0,distance_vert:v0,distance_frag:y0,equirect_vert:M0,equirect_frag:S0,linedashed_vert:w0,linedashed_frag:E0,meshbasic_vert:T0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:P0,meshmatcap_frag:D0,meshnormal_vert:I0,meshnormal_frag:L0,meshphong_vert:F0,meshphong_frag:N0,meshphysical_vert:U0,meshphysical_frag:k0,meshtoon_vert:O0,meshtoon_frag:B0,points_vert:G0,points_frag:z0,shadow_vert:V0,shadow_frag:H0,sprite_vert:W0,sprite_frag:q0},le={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Pn={basic:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Zt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Zt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Zt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Zt([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Zt([le.lights,le.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Pn.physical={uniforms:Zt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const za={r:0,b:0,g:0},X0=new ke,Ju=new Fe;Ju.set(-1,0,0,0,1,0,0,0,1);function j0(a,e,t,n,i,s){const r=new Ae(0);let o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){const v=b.backgroundBlurriness>0;y=e.get(y,v)}return y}function m(b){let y=!1;const v=f(b);v===null?g(r,o):v&&v.isColor&&(g(v,1),y=!0);const T=a.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(b,y){const v=f(y);v&&(v.isCubeTexture||v.mapping===yr)?(l===void 0&&(l=new oe(new wt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:xs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ju),l.material.toneMapped=qe.getTransfer(v.colorSpace)!==it,(h!==v||u!==v.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=a.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oe(new Tt(2,2),new Sn({name:"BackgroundMaterial",uniforms:xs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=a.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,y){b.getRGB(za,zu(a)),t.buffers.color.setClear(za.r,za.g,za.b,y,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,y=1){r.set(b),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(r,o)},render:m,addToRenderList:x,dispose:p}}function K0(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function o(D,I,O,W,F){let V=!1;const B=u(D,W,O,I);s!==B&&(s=B,l(s.object)),V=f(D,W,O,F),V&&m(D,W,O,F),F!==null&&e.update(F,a.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,v(D,I,O,W),F!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return a.createVertexArray()}function l(D){return a.bindVertexArray(D)}function h(D){return a.deleteVertexArray(D)}function u(D,I,O,W){const F=W.wireframe===!0;let V=n[I.id];V===void 0&&(V={},n[I.id]=V);const B=D.isInstancedMesh===!0?D.id:0;let $=V[B];$===void 0&&($={},V[B]=$);let Q=$[O.id];Q===void 0&&(Q={},$[O.id]=Q);let he=Q[F];return he===void 0&&(he=d(c()),Q[F]=he),he}function d(D){const I=[],O=[],W=[];for(let F=0;F<t;F++)I[F]=0,O[F]=0,W[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:W,object:D,attributes:{},index:null}}function f(D,I,O,W){const F=s.attributes,V=I.attributes;let B=0;const $=O.getAttributes();for(const Q in $)if($[Q].location>=0){const _e=F[Q];let Ee=V[Q];if(Ee===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),_e===void 0||_e.attribute!==Ee||Ee&&_e.data!==Ee.data)return!0;B++}return s.attributesNum!==B||s.index!==W}function m(D,I,O,W){const F={},V=I.attributes;let B=0;const $=O.getAttributes();for(const Q in $)if($[Q].location>=0){let _e=V[Q];_e===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor));const Ee={};Ee.attribute=_e,_e&&_e.data&&(Ee.data=_e.data),F[Q]=Ee,B++}s.attributes=F,s.attributesNum=B,s.index=W}function x(){const D=s.newAttributes;for(let I=0,O=D.length;I<O;I++)D[I]=0}function g(D){p(D,0)}function p(D,I){const O=s.newAttributes,W=s.enabledAttributes,F=s.attributeDivisors;O[D]=1,W[D]===0&&(a.enableVertexAttribArray(D),W[D]=1),F[D]!==I&&(a.vertexAttribDivisor(D,I),F[D]=I)}function b(){const D=s.newAttributes,I=s.enabledAttributes;for(let O=0,W=I.length;O<W;O++)I[O]!==D[O]&&(a.disableVertexAttribArray(O),I[O]=0)}function y(D,I,O,W,F,V,B){B===!0?a.vertexAttribIPointer(D,I,O,F,V):a.vertexAttribPointer(D,I,O,W,F,V)}function v(D,I,O,W){x();const F=W.attributes,V=O.getAttributes(),B=I.defaultAttributeValues;for(const $ in V){const Q=V[$];if(Q.location>=0){let he=F[$];if(he===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),he!==void 0){const _e=he.normalized,Ee=he.itemSize,Ye=e.get(he);if(Ye===void 0)continue;const ot=Ye.buffer,Oe=Ye.type,J=Ye.bytesPerElement,fe=Oe===a.INT||Oe===a.UNSIGNED_INT||he.gpuType===Lc;if(he.isInterleavedBufferAttribute){const ie=he.data,Re=ie.stride,Le=he.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Q.locationSize;Pe++)p(Q.location+Pe,ie.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<Q.locationSize;Pe++)g(Q.location+Pe);a.bindBuffer(a.ARRAY_BUFFER,ot);for(let Pe=0;Pe<Q.locationSize;Pe++)y(Q.location+Pe,Ee/Q.locationSize,Oe,_e,Re*J,(Le+Ee/Q.locationSize*Pe)*J,fe)}else{if(he.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie,he.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ie=0;ie<Q.locationSize;ie++)g(Q.location+ie);a.bindBuffer(a.ARRAY_BUFFER,ot);for(let ie=0;ie<Q.locationSize;ie++)y(Q.location+ie,Ee/Q.locationSize,Oe,_e,Ee*J,Ee/Q.locationSize*ie*J,fe)}}else if(B!==void 0){const _e=B[$];if(_e!==void 0)switch(_e.length){case 2:a.vertexAttrib2fv(Q.location,_e);break;case 3:a.vertexAttrib3fv(Q.location,_e);break;case 4:a.vertexAttrib4fv(Q.location,_e);break;default:a.vertexAttrib1fv(Q.location,_e)}}}}b()}function T(){E();for(const D in n){const I=n[D];for(const O in I){const W=I[O];for(const F in W){const V=W[F];for(const B in V)h(V[B].object),delete V[B];delete W[F]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;const I=n[D.id];for(const O in I){const W=I[O];for(const F in W){const V=W[F];for(const B in V)h(V[B].object),delete V[B];delete W[F]}}delete n[D.id]}function A(D){for(const I in n){const O=n[I];for(const W in O){const F=O[W];if(F[D.id]===void 0)continue;const V=F[D.id];for(const B in V)h(V[B].object),delete V[B];delete F[D.id]}}}function _(D){for(const I in n){const O=n[I],W=D.isInstancedMesh===!0?D.id:0,F=O[W];if(F!==void 0){for(const V in F){const B=F[V];for(const $ in B)h(B[$].object),delete B[$];delete F[V]}delete O[W],Object.keys(O).length===0&&delete n[I]}}}function E(){P(),r=!0,s!==i&&(s=i,l(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function J0(a,e,t){let n;function i(c){n=c}function s(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(a.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Y0(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==pn&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==rn&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fn&&!_)}function c(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(ve("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),T=a.getParameter(a.MAX_SAMPLES),S=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,maxSamples:T,samples:S}}function Z0(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Di,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{const b=s?0:n,y=b*4;let v=p.clippingState||null;c.value=v,v=h(m,d,y,f);for(let T=0;T!==y;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)r.copy(u[y]).applyMatrix4(b,o),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const _i=4,Mh=[.125,.215,.35,.446,.526,.582],Li=20,$0=256,Ns=new Er,Sh=new Ae;let ho=null,uo=0,fo=0,po=!1;const Q0=new C;class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:r=256,position:o=Q0}=s;ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:ni,format:pn,colorSpace:cn,depthBuffer:!1},i=Eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eb(s)),this._blurMaterial=nb(s,e,t),this._ggxMaterial=tb(s,e,t)}return i}_compileMaterial(e){const t=new oe(new Lt,e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,i,s){const c=new $t(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Sh),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new wt,new tt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Sh),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const T=this._cubeSize;ss(i,v*T,y>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ss(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-_i?n-m+_i:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,ss(s,g,p,3*x,2*x),i.setRenderTarget(s),i.render(o,Ns),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,ss(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(o,Ns)}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Li-1),x=s/m,g=isFinite(s)?1+Math.floor(h*x):Li;g>Li&&ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);const p=[];let b=0;for(let A=0;A<Li;++A){const _=A/x,E=Math.exp(-_*_/2);p.push(E),A===0?b+=E:A<g&&(b+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const v=this._sizeLods[i],T=3*v*(i>y-_i?i-y+_i:0),S=4*(this._cubeSize-v);ss(t,T,S,3*v,2*v),c.setRenderTarget(t),c.render(u,Ns)}}function eb(a){const e=[],t=[],n=[];let i=a;const s=a-_i+1+Mh.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let c=1/o;r>a-_i?c=Mh[r-a+_i-1]:r===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let S=0;S<f;S++){const A=S%3*2/3-1,_=S>2?0:-1,E=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];b.set(E,x*m*S),y.set(d,g*m*S);const P=[S,S,S,S,S,S];v.set(P,p*m*S)}const T=new Lt;T.setAttribute("position",new Ut(b,x)),T.setAttribute("uv",new Ut(y,g)),T.setAttribute("faceIndex",new Ut(v,p)),n.push(new oe(T,null)),i>_i&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Eh(a,e,t){const n=new kn(a,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function tb(a,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function nb(a,e,t){const n=new Float32Array(Li),i=new C(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Th(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ah(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Tr(){return`

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
	`}class Yu extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wt(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Qn});s.uniforms.tEquirect.value=t;const r=new oe(i,s),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Nt),new Jp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}function ib(a){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?r(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Dr||f===Ir)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const x=new Yu(m.height);return x.fromEquirectangularTexture(a,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const f=d.mapping,m=f===Dr||f===Ir,x=f===Oi||f===ms;if(m||x){let g=t.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new wh(a)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const b=d.image;return m&&b&&b.height>0||x&&b&&c(b)?(n===null&&(n=new wh(a)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Dr?d.mapping=Oi:f===Ir&&(d.mapping=ms),d}function c(d){let f=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function sb(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&bc("WebGLRenderer: "+n+" extension not supported."),i}}}function ab(a,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],a.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(f!==null){const b=f.array;x=f.version;for(let y=0,v=b.length;y<v;y+=3){const T=b[y+0],S=b[y+1],A=b[y+2];d.push(T,S,S,A,A,T)}}else{const b=m.array;x=m.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const T=y+0,S=y+1,A=y+2;d.push(T,S,S,A,A,T)}}const g=new(m.count>=65535?Iu:Du)(d,1);g.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function rb(a,e,t){let n;function i(u){n=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function c(u,d){a.drawElements(n,d,s,u*r),t.update(d,n,1)}function l(u,d,f){f!==0&&(a.drawElementsInstanced(n,d,s,u*r,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ob(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Ce("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cb(a,e,t){const n=new WeakMap,i=new pt;function s(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var f=P;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let T=o.attributes.position.count*v,S=1;T>e.maxTextureSize&&(S=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*S*4*u),_=new Ru(A,T,S,u);_.type=fn,_.needsUpdate=!0;const E=v*4;for(let D=0;D<u;D++){const I=p[D],O=b[D],W=y[D],F=T*S*4*D;for(let V=0;V<I.count;V++){const B=V*E;m===!0&&(i.fromBufferAttribute(I,V),A[F+B+0]=i.x,A[F+B+1]=i.y,A[F+B+2]=i.z,A[F+B+3]=0),x===!0&&(i.fromBufferAttribute(O,V),A[F+B+4]=i.x,A[F+B+5]=i.y,A[F+B+6]=i.z,A[F+B+7]=0),g===!0&&(i.fromBufferAttribute(W,V),A[F+B+8]=i.x,A[F+B+9]=i.y,A[F+B+10]=i.z,A[F+B+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Se(T,S)},n.set(o,d),o.addEventListener("dispose",P)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(a,"morphTargetBaseInfluence",x),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function lb(a,e,t,n,i){let s=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const hb={[du]:"LINEAR_TONE_MAPPING",[fu]:"REINHARD_TONE_MAPPING",[pu]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[bu]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function ub(a,e,t,n,i){const s=new kn(e,t,{type:a,depthBuffer:n,stencilBuffer:i,depthTexture:n?new bs(e,t):void 0}),r=new kn(e,t,{type:ni,depthBuffer:!1,stencilBuffer:!1}),o=new Lt;o.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Je([0,2,0,0,2,0],2));const c=new Ap({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new oe(o,c),h=new Er(-1,1,1,-1,0,1);let u=null,d=null,f=!1,m,x=null,g=[],p=!1;this.setSize=function(b,y){s.setSize(b,y),r.setSize(b,y);for(let v=0;v<g.length;v++){const T=g[v];T.setSize&&T.setSize(b,y)}},this.setEffects=function(b){g=b,p=g.length>0&&g[0].isRenderPass===!0;const y=s.width,v=s.height;for(let T=0;T<g.length;T++){const S=g[T];S.setSize&&S.setSize(y,v)}},this.begin=function(b,y){if(f||b.toneMapping===Un&&g.length===0)return!1;if(x=y,y!==null){const v=y.width,T=y.height;(s.width!==v||s.height!==T)&&this.setSize(v,T)}return p===!1&&b.setRenderTarget(s),m=b.toneMapping,b.toneMapping=Un,!0},this.hasRenderPass=function(){return p},this.end=function(b,y){b.toneMapping=m,f=!0;let v=s,T=r;for(let S=0;S<g.length;S++){const A=g[S];if(A.enabled!==!1&&(A.render(b,T,v,y),A.needsSwap!==!1)){const _=v;v=T,T=_}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,c.defines={},qe.getTransfer(u)===it&&(c.defines.SRGB_TRANSFER="");const S=hb[d];S&&(c.defines[S]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(x),b.render(l,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),c.dispose()}}const Zu=new Gt,yc=new bs(1,1),$u=new Ru,Qu=new Uf,ed=new Uu,Rh=[],Ch=[],Ph=new Float32Array(16),Dh=new Float32Array(9),Ih=new Float32Array(4);function Ts(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=Rh[i];if(s===void 0&&(s=new Float32Array(i),Rh[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function zt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Vt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ar(a,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function db(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function fb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;a.uniform2fv(this.addr,e),Vt(t,e)}}function pb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;a.uniform3fv(this.addr,e),Vt(t,e)}}function mb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;a.uniform4fv(this.addr,e),Vt(t,e)}}function gb(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Ih.set(n),a.uniformMatrix2fv(this.addr,!1,Ih),Vt(t,n)}}function bb(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Dh.set(n),a.uniformMatrix3fv(this.addr,!1,Dh),Vt(t,n)}}function xb(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Ph.set(n),a.uniformMatrix4fv(this.addr,!1,Ph),Vt(t,n)}}function _b(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function vb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;a.uniform2iv(this.addr,e),Vt(t,e)}}function yb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;a.uniform3iv(this.addr,e),Vt(t,e)}}function Mb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;a.uniform4iv(this.addr,e),Vt(t,e)}}function Sb(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function wb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;a.uniform2uiv(this.addr,e),Vt(t,e)}}function Eb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;a.uniform3uiv(this.addr,e),Vt(t,e)}}function Tb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;a.uniform4uiv(this.addr,e),Vt(t,e)}}function Ab(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(yc.compareFunction=t.isReversedDepthBuffer()?Hc:Vc,s=yc):s=Zu,t.setTexture2D(e||s,i)}function Rb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qu,i)}function Cb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ed,i)}function Pb(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$u,i)}function Db(a){switch(a){case 5126:return db;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return bb;case 35676:return xb;case 5124:case 35670:return _b;case 35667:case 35671:return vb;case 35668:case 35672:return yb;case 35669:case 35673:return Mb;case 5125:return Sb;case 36294:return wb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Ib(a,e){a.uniform1fv(this.addr,e)}function Lb(a,e){const t=Ts(e,this.size,2);a.uniform2fv(this.addr,t)}function Fb(a,e){const t=Ts(e,this.size,3);a.uniform3fv(this.addr,t)}function Nb(a,e){const t=Ts(e,this.size,4);a.uniform4fv(this.addr,t)}function Ub(a,e){const t=Ts(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function kb(a,e){const t=Ts(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Ob(a,e){const t=Ts(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Bb(a,e){a.uniform1iv(this.addr,e)}function Gb(a,e){a.uniform2iv(this.addr,e)}function zb(a,e){a.uniform3iv(this.addr,e)}function Vb(a,e){a.uniform4iv(this.addr,e)}function Hb(a,e){a.uniform1uiv(this.addr,e)}function Wb(a,e){a.uniform2uiv(this.addr,e)}function qb(a,e){a.uniform3uiv(this.addr,e)}function Xb(a,e){a.uniform4uiv(this.addr,e)}function jb(a,e,t){const n=this.cache,i=e.length,s=Ar(t,i);zt(n,s)||(a.uniform1iv(this.addr,s),Vt(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=yc:r=Zu;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function Kb(a,e,t){const n=this.cache,i=e.length,s=Ar(t,i);zt(n,s)||(a.uniform1iv(this.addr,s),Vt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Qu,s[r])}function Jb(a,e,t){const n=this.cache,i=e.length,s=Ar(t,i);zt(n,s)||(a.uniform1iv(this.addr,s),Vt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||ed,s[r])}function Yb(a,e,t){const n=this.cache,i=e.length,s=Ar(t,i);zt(n,s)||(a.uniform1iv(this.addr,s),Vt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||$u,s[r])}function Zb(a){switch(a){case 5126:return Ib;case 35664:return Lb;case 35665:return Fb;case 35666:return Nb;case 35674:return Ub;case 35675:return kb;case 35676:return Ob;case 5124:case 35670:return Bb;case 35667:case 35671:return Gb;case 35668:case 35672:return zb;case 35669:case 35673:return Vb;case 5125:return Hb;case 36294:return Wb;case 36295:return qb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Yb}}class $b{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class Qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zb(t.type)}}class ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Lh(a,e){a.seq.push(e),a.map[e.id]=e}function tx(a,e,t){const n=a.name,i=n.length;for(mo.lastIndex=0;;){const s=mo.exec(n),r=mo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Lh(t,l===void 0?new $b(o,a,e):new Qb(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new ex(o),Lh(t,u)),t=u}}}class nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);tx(o,c,this)}const i=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Fh(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const nx=37297;let ix=0;function sx(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Nh=new Fe;function ax(a){qe._getMatrix(Nh,qe.workingColorSpace,a);const e=`mat3( ${Nh.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(a)){case hr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Uh(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sx(a.getShaderSource(e),o)}else return s}function rx(a,e){const t=ax(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ox={[du]:"Linear",[fu]:"Reinhard",[pu]:"Cineon",[Ic]:"ACESFilmic",[gu]:"AgX",[bu]:"Neutral",[mu]:"Custom"};function cx(a,e){const t=ox[e];return t===void 0?(ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new C;function lx(){qe.getLuminanceCoefficients(Va);const a=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function ux(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function qs(a){return a!==""}function kh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(a){return a.replace(fx,mx)}const px=new Map;function mx(a,e){let t=Ge[e];if(t===void 0){const n=px.get(e);if(n!==void 0)t=Ge[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(a){return a.replace(gx,bx)}function bx(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gh(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const xx={[Ya]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function _x(a){return xx[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vx={[Oi]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE_UV"};function yx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":vx[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mx={[ms]:"ENVMAP_MODE_REFRACTION"};function Sx(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wx={[uu]:"ENVMAP_BLENDING_MULTIPLY",[Kd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function Ex(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":wx[a.combine]||"ENVMAP_BLENDING_NONE"}function Tx(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ax(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=_x(t),l=yx(t),h=Sx(t),u=Ex(t),d=Tx(t),f=hx(t),m=ux(s),x=i.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(g=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Un?cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,rx("linearToOutputTexel",t.outputColorSpace),lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),r=Mc(r),r=kh(r,t),r=Oh(r,t),o=Mc(o),o=kh(o,t),o=Oh(o,t),r=Bh(r),o=Bh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+g+r,v=b+p+o,T=Fh(i,i.VERTEX_SHADER,y),S=Fh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(D){if(a.debug.checkShaderErrors){const I=i.getProgramInfoLog(x)||"",O=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(S)||"",F=I.trim(),V=O.trim(),B=W.trim();let $=!0,Q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if($=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,x,T,S);else{const he=Uh(i,T,"vertex"),_e=Uh(i,S,"fragment");Ce("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+he+`
`+_e)}else F!==""?ve("WebGLProgram: Program Info Log:",F):(V===""||B==="")&&(Q=!1);Q&&(D.diagnostics={runnable:$,programLog:F,vertexShader:{log:V,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(T),i.deleteShader(S),_=new nr(i,x),E=dx(i,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(x,nx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=S,this}let Rx=0;class Cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Px(e),t.set(e,n)),n}}class Px{constructor(e){this.id=Rx++,this.code=e,this.usedTimes=0}}function Dx(a){return a===Bi||a===or||a===cr}function Ix(a,e,t,n,i,s){const r=new Cu,o=new Cx,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,E,P,D,I,O){const W=D.fog,F=I.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=e.get(_.envMap||V,B),Q=$&&$.mapping===yr?$.image.height:null,he=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&ve("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const _e=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ee=_e!==void 0?_e.length:0;let Ye=0;F.morphAttributes.position!==void 0&&(Ye=1),F.morphAttributes.normal!==void 0&&(Ye=2),F.morphAttributes.color!==void 0&&(Ye=3);let ot,Oe,J,fe;if(he){const Ne=Pn[he];ot=Ne.vertexShader,Oe=Ne.fragmentShader}else ot=_.vertexShader,Oe=_.fragmentShader,o.update(_),J=o.getVertexShaderID(_),fe=o.getFragmentShaderID(_);const ie=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Pe=I.isBatchedMesh===!0,_t=!!_.map,Xe=!!_.matcap,ct=!!$,bt=!!_.aoMap,We=!!_.lightMap,kt=!!_.bumpMap,vt=!!_.normalMap,tn=!!_.displacementMap,N=!!_.emissiveMap,Ot=!!_.metalnessMap,je=!!_.roughnessMap,mt=_.anisotropy>0,ce=_.clearcoat>0,Mt=_.dispersion>0,R=_.iridescence>0,M=_.sheen>0,k=_.transmission>0,j=mt&&!!_.anisotropyMap,Z=ce&&!!_.clearcoatMap,ee=ce&&!!_.clearcoatNormalMap,re=ce&&!!_.clearcoatRoughnessMap,q=R&&!!_.iridescenceMap,K=R&&!!_.iridescenceThicknessMap,pe=M&&!!_.sheenColorMap,be=M&&!!_.sheenRoughnessMap,se=!!_.specularMap,te=!!_.specularColorMap,De=!!_.specularIntensityMap,Be=k&&!!_.transmissionMap,$e=k&&!!_.thicknessMap,L=!!_.gradientMap,ne=!!_.alphaMap,X=_.alphaTest>0,me=!!_.alphaHash,ae=!!_.extensions;let Y=Un;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Y=a.toneMapping);const Me={shaderID:he,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:Oe,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,outputColorSpace:ie===null?a.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:_t,matcap:Xe,envMap:ct,envMapMode:ct&&$.mapping,envMapCubeUVHeight:Q,aoMap:bt,lightMap:We,bumpMap:kt,normalMap:vt,displacementMap:tn,emissiveMap:N,normalMapObjectSpace:vt&&_.normalMapType===nf,normalMapTangentSpace:vt&&_.normalMapType===mc,packedNormalMap:vt&&_.normalMapType===mc&&Dx(_.normalMap.format),metalnessMap:Ot,roughnessMap:je,anisotropy:mt,anisotropyMap:j,clearcoat:ce,clearcoatMap:Z,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,dispersion:Mt,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:K,sheen:M,sheenColorMap:pe,sheenRoughnessMap:be,specularMap:se,specularColorMap:te,specularIntensityMap:De,transmission:k,transmissionMap:Be,thicknessMap:$e,gradientMap:L,opaque:_.transparent===!1&&_.blending===us&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:X,alphaHash:me,combine:_.combine,mapUv:_t&&m(_.map.channel),aoMapUv:bt&&m(_.aoMap.channel),lightMapUv:We&&m(_.lightMap.channel),bumpMapUv:kt&&m(_.bumpMap.channel),normalMapUv:vt&&m(_.normalMap.channel),displacementMapUv:tn&&m(_.displacementMap.channel),emissiveMapUv:N&&m(_.emissiveMap.channel),metalnessMapUv:Ot&&m(_.metalnessMap.channel),roughnessMapUv:je&&m(_.roughnessMap.channel),anisotropyMapUv:j&&m(_.anisotropyMap.channel),clearcoatMapUv:Z&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(_.sheenRoughnessMap.channel),specularMapUv:se&&m(_.specularMap.channel),specularColorMapUv:te&&m(_.specularColorMap.channel),specularIntensityMapUv:De&&m(_.specularIntensityMap.channel),transmissionMapUv:Be&&m(_.transmissionMap.channel),thicknessMapUv:$e&&m(_.thicknessMap.channel),alphaMapUv:ne&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(vt||mt),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(_t||ne),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:Y,decodeVideoTexture:_t&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:N&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xt,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)E.push(P),E.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(E,_),b(E,_),E.push(a.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),_.push(r.mask)}function y(_){const E=f[_.type];let P;if(E){const D=Pn[E];P=wp.clone(D.uniforms)}else P=_.uniforms;return P}function v(_,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new Ax(a,E,_,i),l.push(P),h.set(E,P)),P}function T(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:T,releaseShaderCache:S,programs:l,dispose:A}}function Lx(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Fx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function zh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Vh(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,g,p){let b=a[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:r(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},a[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=r(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=g,b.group=p),e++,b}function c(d,f,m,x,g,p){const b=o(d,f,m,x,g,p);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function l(d,f,m,x,g,p){const b=o(d,f,m,x,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?i.unshift(b):t.unshift(b)}function h(d,f){t.length>1&&t.sort(d||Fx),n.length>1&&n.sort(f||zh),i.length>1&&i.sort(f||zh)}function u(){for(let d=e,f=a.length;d<f;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function Nx(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Vh,a.set(n,[r])):i>=s.length?(r=new Vh,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function Ux(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ae};break;case"SpotLight":t={position:new C,direction:new C,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new C,halfWidth:new C,halfHeight:new C};break}return a[e.id]=t,t}}}function kx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Ox=0;function Bx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Gx(a){const e=new Ux,t=kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,s=new ke,r=new ke;function o(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,y=0,v=0,T=0,S=0,A=0;l.sort(Bx);for(let E=0,P=l.length;E<P;E++){const D=l[E],I=D.color,O=D.intensity,W=D.distance;let F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bi?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=I.r*O,u+=I.g*O,d+=I.b*O;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],O);A++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,$=t.get(D);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=V,f++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(I).multiplyScalar(O),V.distance=W,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[x]=V;const B=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,B.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[x]=B.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=F,v++}x++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(I).multiplyScalar(O),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=V,g++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const B=D.shadow,$=t.get(D);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=V,m++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(O),V.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}g>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==m||_.spotLength!==x||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==b||_.numPointShadows!==y||_.numSpotShadows!==v||_.numSpotMaps!==T||_.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,_.directionalLength=f,_.pointLength=m,_.spotLength=x,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=b,_.numPointShadows=y,_.numSpotShadows=v,_.numSpotMaps=T,_.numLightProbes=A,n.version=Ox++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),r.identity(),s.copy(y.matrixWorld),s.premultiply(g),r.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Hh(a){const e=new Gx(a),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:c}}function zx(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new Hh(a),e.set(i,[o])):s>=r.length?(o=new Hh(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`,Wx=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],qx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Wh=new ke,Us=new C,go=new C;function Xx(a,e,t){let n=new Yc;const i=new Se,s=new Se,r=new pt,o=new Rp,c=new Cp,l={},h=t.maxTextureSize,u={[ti]:en,[en]:ti,[xt]:xt},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Vx,fragmentShader:Hx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Lt;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let p=this.type;this.render=function(S,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===hu&&(ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const E=a.getRenderTarget(),P=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),I=a.state;I.setBlending(Qn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==this.type;O&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(F=>F.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,F=S.length;W<F;W++){const V=S[W],B=V.shadow;if(B===void 0){ve("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const $=B.getFrameExtents();i.multiply($),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,B.mapSize.y=s.y));const Q=a.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Hs){if(V.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(i.x,i.y,{format:Bi,type:ni,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new bs(i.x,i.y,fn),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=ii,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt}else V.isPointLight?(B.map=new Yu(i.x),B.map.depthTexture=new op(i.x,Bn)):(B.map=new kn(i.x,i.y),B.map.depthTexture=new bs(i.x,i.y,Bn)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=ii,this.type===Ya?(B.map.depthTexture.compareFunction=Q?Hc:Vc,B.map.depthTexture.minFilter=Nt,B.map.depthTexture.magFilter=Nt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt);B.camera.updateProjectionMatrix()}const he=B.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<he;_e++){if(B.map.isWebGLCubeRenderTarget)a.setRenderTarget(B.map,_e),a.clear();else{_e===0&&(a.setRenderTarget(B.map),a.clear());const Ee=B.getViewport(_e);r.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),I.viewport(r)}if(V.isPointLight){const Ee=B.camera,Ye=B.matrix,ot=V.distance||Ee.far;ot!==Ee.far&&(Ee.far=ot,Ee.updateProjectionMatrix()),Us.setFromMatrixPosition(V.matrixWorld),Ee.position.copy(Us),go.copy(Ee.position),go.add(Wx[_e]),Ee.up.copy(qx[_e]),Ee.lookAt(go),Ee.updateMatrixWorld(),Ye.makeTranslation(-Us.x,-Us.y,-Us.z),Wh.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Wh,Ee.coordinateSystem,Ee.reversedDepth)}else B.updateMatrices(V);n=B.getFrustum(),v(A,_,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Hs&&b(B,_),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(E,P,D)};function b(S,A){const _=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new kn(i.x,i.y,{format:Bi,type:ni})),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(A,null,_,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(A,null,_,f,x,null)}function y(S,A,_,E){let P=null;const D=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?c:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=P.uuid,O=A.uuid;let W=l[I];W===void 0&&(W={},l[I]=W);let F=W[O];F===void 0&&(F=P.clone(),W[O]=F,A.addEventListener("dispose",T)),P=F}if(P.visible=A.visible,P.wireframe=A.wireframe,E===Hs?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=a.properties.get(P);I.light=_}return P}function v(S,A,_,E,P){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Hs)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const O=e.update(S),W=S.material;if(Array.isArray(W)){const F=O.groups;for(let V=0,B=F.length;V<B;V++){const $=F[V],Q=W[$.materialIndex];if(Q&&Q.visible){const he=y(S,Q,E,P);S.onBeforeShadow(a,S,A,_,O,he,$),a.renderBufferDirect(_,null,O,he,S,$),S.onAfterShadow(a,S,A,_,O,he,$)}}}else if(W.visible){const F=y(S,W,E,P);S.onBeforeShadow(a,S,A,_,O,F,null),a.renderBufferDirect(_,null,O,F,S,null),S.onAfterShadow(a,S,A,_,O,F,null)}}const I=S.children;for(let O=0,W=I.length;O<W;O++)v(I[O],A,_,E,P)}function T(S){S.target.removeEventListener("dispose",T);for(const _ in l){const E=l[_],P=S.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function jx(a,e){function t(){let L=!1;const ne=new pt;let X=null;const me=new pt(0,0,0,0);return{setMask:function(ae){X!==ae&&!L&&(a.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Y,Me,Ne,Rt){Rt===!0&&(ae*=Ne,Y*=Ne,Me*=Ne),ne.set(ae,Y,Me,Ne),me.equals(ne)===!1&&(a.clearColor(ae,Y,Me,Ne),me.copy(ne))},reset:function(){L=!1,X=null,me.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,X=null,me=null,ae=null;return{setReversed:function(Y){if(ne!==Y){const Me=e.get("EXT_clip_control");Y?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ne=Y;const Ne=ae;ae=null,this.setClear(Ne)}},getReversed:function(){return ne},setTest:function(Y){Y?ie(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(Y){X!==Y&&!L&&(a.depthMask(Y),X=Y)},setFunc:function(Y){if(ne&&(Y=pf[Y]),me!==Y){switch(Y){case Do:a.depthFunc(a.NEVER);break;case Io:a.depthFunc(a.ALWAYS);break;case Lo:a.depthFunc(a.LESS);break;case ps:a.depthFunc(a.LEQUAL);break;case Fo:a.depthFunc(a.EQUAL);break;case No:a.depthFunc(a.GEQUAL);break;case Uo:a.depthFunc(a.GREATER);break;case ko:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}me=Y}},setLocked:function(Y){L=Y},setClear:function(Y){ae!==Y&&(ae=Y,ne&&(Y=1-Y),a.clearDepth(Y))},reset:function(){L=!1,X=null,me=null,ae=null,ne=!1}}}function i(){let L=!1,ne=null,X=null,me=null,ae=null,Y=null,Me=null,Ne=null,Rt=null;return{setTest:function(lt){L||(lt?ie(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(lt){ne!==lt&&!L&&(a.stencilMask(lt),ne=lt)},setFunc:function(lt,Vn,En){(X!==lt||me!==Vn||ae!==En)&&(a.stencilFunc(lt,Vn,En),X=lt,me=Vn,ae=En)},setOp:function(lt,Vn,En){(Y!==lt||Me!==Vn||Ne!==En)&&(a.stencilOp(lt,Vn,En),Y=lt,Me=Vn,Ne=En)},setLocked:function(lt){L=lt},setClear:function(lt){Rt!==lt&&(a.clearStencil(lt),Rt=lt)},reset:function(){L=!1,ne=null,X=null,me=null,ae=null,Y=null,Me=null,Ne=null,Rt=null}}}const s=new t,r=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,y=null,v=null,T=null,S=null,A=null,_=new Ae(0,0,0),E=0,P=!1,D=null,I=null,O=null,W=null,F=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const Q=a.getParameter(a.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=$>=2);let he=null,_e={};const Ee=a.getParameter(a.SCISSOR_BOX),Ye=a.getParameter(a.VIEWPORT),ot=new pt().fromArray(Ee),Oe=new pt().fromArray(Ye);function J(L,ne,X,me){const ae=new Uint8Array(4),Y=a.createTexture();a.bindTexture(L,Y),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Me=0;Me<X;Me++)L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY?a.texImage3D(ne,0,a.RGBA,1,1,me,0,a.RGBA,a.UNSIGNED_BYTE,ae):a.texImage2D(ne+Me,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ae);return Y}const fe={};fe[a.TEXTURE_2D]=J(a.TEXTURE_2D,a.TEXTURE_2D,1),fe[a.TEXTURE_CUBE_MAP]=J(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[a.TEXTURE_2D_ARRAY]=J(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),fe[a.TEXTURE_3D]=J(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(a.DEPTH_TEST),r.setFunc(ps),kt(!1),vt(Al),ie(a.CULL_FACE),bt(Qn);function ie(L){h[L]!==!0&&(a.enable(L),h[L]=!0)}function Re(L){h[L]!==!1&&(a.disable(L),h[L]=!1)}function Le(L,ne){return d[L]!==ne?(a.bindFramebuffer(L,ne),d[L]=ne,L===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=ne),L===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=ne),!0):!1}function Pe(L,ne){let X=m,me=!1;if(L){X=f.get(ne),X===void 0&&(X=[],f.set(ne,X));const ae=L.textures;if(X.length!==ae.length||X[0]!==a.COLOR_ATTACHMENT0){for(let Y=0,Me=ae.length;Y<Me;Y++)X[Y]=a.COLOR_ATTACHMENT0+Y;X.length=ae.length,me=!0}}else X[0]!==a.BACK&&(X[0]=a.BACK,me=!0);me&&a.drawBuffers(X)}function _t(L){return x!==L?(a.useProgram(L),x=L,!0):!1}const Xe={[Ii]:a.FUNC_ADD,[Dd]:a.FUNC_SUBTRACT,[Id]:a.FUNC_REVERSE_SUBTRACT};Xe[Ld]=a.MIN,Xe[Fd]=a.MAX;const ct={[Nd]:a.ZERO,[Ud]:a.ONE,[kd]:a.SRC_COLOR,[Co]:a.SRC_ALPHA,[Hd]:a.SRC_ALPHA_SATURATE,[zd]:a.DST_COLOR,[Bd]:a.DST_ALPHA,[Od]:a.ONE_MINUS_SRC_COLOR,[Po]:a.ONE_MINUS_SRC_ALPHA,[Vd]:a.ONE_MINUS_DST_COLOR,[Gd]:a.ONE_MINUS_DST_ALPHA,[Wd]:a.CONSTANT_COLOR,[qd]:a.ONE_MINUS_CONSTANT_COLOR,[Xd]:a.CONSTANT_ALPHA,[jd]:a.ONE_MINUS_CONSTANT_ALPHA};function bt(L,ne,X,me,ae,Y,Me,Ne,Rt,lt){if(L===Qn){g===!0&&(Re(a.BLEND),g=!1);return}if(g===!1&&(ie(a.BLEND),g=!0),L!==Pd){if(L!==p||lt!==P){if((b!==Ii||T!==Ii)&&(a.blendEquation(a.FUNC_ADD),b=Ii,T=Ii),lt)switch(L){case us:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Rl:a.blendFunc(a.ONE,a.ONE);break;case Cl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Pl:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ce("WebGLState: Invalid blending: ",L);break}else switch(L){case us:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Rl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Cl:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",L);break}y=null,v=null,S=null,A=null,_.set(0,0,0),E=0,p=L,P=lt}return}ae=ae||ne,Y=Y||X,Me=Me||me,(ne!==b||ae!==T)&&(a.blendEquationSeparate(Xe[ne],Xe[ae]),b=ne,T=ae),(X!==y||me!==v||Y!==S||Me!==A)&&(a.blendFuncSeparate(ct[X],ct[me],ct[Y],ct[Me]),y=X,v=me,S=Y,A=Me),(Ne.equals(_)===!1||Rt!==E)&&(a.blendColor(Ne.r,Ne.g,Ne.b,Rt),_.copy(Ne),E=Rt),p=L,P=!1}function We(L,ne){L.side===xt?Re(a.CULL_FACE):ie(a.CULL_FACE);let X=L.side===en;ne&&(X=!X),kt(X),L.blending===us&&L.transparent===!1?bt(Qn):bt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){D!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),D=L)}function vt(L){L!==Rd?(ie(a.CULL_FACE),L!==I&&(L===Al?a.cullFace(a.BACK):L===Cd?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),I=L}function tn(L){L!==O&&(B&&a.lineWidth(L),O=L)}function N(L,ne,X){L?(ie(a.POLYGON_OFFSET_FILL),(W!==ne||F!==X)&&(W=ne,F=X,r.getReversed()&&(ne=-ne),a.polygonOffset(ne,X))):Re(a.POLYGON_OFFSET_FILL)}function Ot(L){L?ie(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function je(L){L===void 0&&(L=a.TEXTURE0+V-1),he!==L&&(a.activeTexture(L),he=L)}function mt(L,ne,X){X===void 0&&(he===null?X=a.TEXTURE0+V-1:X=he);let me=_e[X];me===void 0&&(me={type:void 0,texture:void 0},_e[X]=me),(me.type!==L||me.texture!==ne)&&(he!==X&&(a.activeTexture(X),he=X),a.bindTexture(L,ne||fe[L]),me.type=L,me.texture=ne)}function ce(){const L=_e[he];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Mt(){try{a.compressedTexImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function R(){try{a.compressedTexImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function M(){try{a.texSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function k(){try{a.texSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function j(){try{a.compressedTexSubImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function Z(){try{a.compressedTexSubImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function ee(){try{a.texStorage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function re(){try{a.texStorage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function q(){try{a.texImage2D(...arguments)}catch(L){Ce("WebGLState:",L)}}function K(){try{a.texImage3D(...arguments)}catch(L){Ce("WebGLState:",L)}}function pe(L){return u[L]!==void 0?u[L]:a.getParameter(L)}function be(L,ne){u[L]!==ne&&(a.pixelStorei(L,ne),u[L]=ne)}function se(L){ot.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function te(L){Oe.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function De(L,ne){let X=l.get(ne);X===void 0&&(X=new WeakMap,l.set(ne,X));let me=X.get(L);me===void 0&&(me=a.getUniformBlockIndex(ne,L.name),X.set(L,me))}function Be(L,ne){const me=l.get(ne).get(L);c.get(ne)!==me&&(a.uniformBlockBinding(ne,me,L.__bindingPointIndex),c.set(ne,me))}function $e(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},he=null,_e={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,b=null,y=null,v=null,T=null,S=null,A=null,_=new Ae(0,0,0),E=0,P=!1,D=null,I=null,O=null,W=null,F=null,ot.set(0,0,a.canvas.width,a.canvas.height),Oe.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ie,disable:Re,bindFramebuffer:Le,drawBuffers:Pe,useProgram:_t,setBlending:bt,setMaterial:We,setFlipSided:kt,setCullFace:vt,setLineWidth:tn,setPolygonOffset:N,setScissorTest:Ot,activeTexture:je,bindTexture:mt,unbindTexture:ce,compressedTexImage2D:Mt,compressedTexImage3D:R,texImage2D:q,texImage3D:K,pixelStorei:be,getParameter:pe,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:ee,texStorage3D:re,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:j,compressedTexSubImage3D:Z,scissor:se,viewport:te,reset:$e}}function Kx(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return m?new OffscreenCanvas(R,M):aa("canvas")}function g(R,M,k){let j=1;const Z=Mt(R);if((Z.width>k||Z.height>k)&&(j=k/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(j*Z.width),re=Math.floor(j*Z.height);d===void 0&&(d=x(ee,re));const q=M?x(ee,re):d;return q.width=ee,q.height=re,q.getContext("2d").drawImage(R,0,0,ee,re),ve("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ee+"x"+re+")."),q}else return"data"in R&&ve("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){a.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function v(R,M,k,j,Z,ee=!1){if(R!==null){if(a[R]!==void 0)return a[R];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re;j&&(re=e.get("EXT_texture_norm16"),re||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===a.RED&&(k===a.FLOAT&&(q=a.R32F),k===a.HALF_FLOAT&&(q=a.R16F),k===a.UNSIGNED_BYTE&&(q=a.R8),k===a.UNSIGNED_SHORT&&re&&(q=re.R16_EXT),k===a.SHORT&&re&&(q=re.R16_SNORM_EXT)),M===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.R8UI),k===a.UNSIGNED_SHORT&&(q=a.R16UI),k===a.UNSIGNED_INT&&(q=a.R32UI),k===a.BYTE&&(q=a.R8I),k===a.SHORT&&(q=a.R16I),k===a.INT&&(q=a.R32I)),M===a.RG&&(k===a.FLOAT&&(q=a.RG32F),k===a.HALF_FLOAT&&(q=a.RG16F),k===a.UNSIGNED_BYTE&&(q=a.RG8),k===a.UNSIGNED_SHORT&&re&&(q=re.RG16_EXT),k===a.SHORT&&re&&(q=re.RG16_SNORM_EXT)),M===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RG8UI),k===a.UNSIGNED_SHORT&&(q=a.RG16UI),k===a.UNSIGNED_INT&&(q=a.RG32UI),k===a.BYTE&&(q=a.RG8I),k===a.SHORT&&(q=a.RG16I),k===a.INT&&(q=a.RG32I)),M===a.RGB_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RGB8UI),k===a.UNSIGNED_SHORT&&(q=a.RGB16UI),k===a.UNSIGNED_INT&&(q=a.RGB32UI),k===a.BYTE&&(q=a.RGB8I),k===a.SHORT&&(q=a.RGB16I),k===a.INT&&(q=a.RGB32I)),M===a.RGBA_INTEGER&&(k===a.UNSIGNED_BYTE&&(q=a.RGBA8UI),k===a.UNSIGNED_SHORT&&(q=a.RGBA16UI),k===a.UNSIGNED_INT&&(q=a.RGBA32UI),k===a.BYTE&&(q=a.RGBA8I),k===a.SHORT&&(q=a.RGBA16I),k===a.INT&&(q=a.RGBA32I)),M===a.RGB&&(k===a.UNSIGNED_SHORT&&re&&(q=re.RGB16_EXT),k===a.SHORT&&re&&(q=re.RGB16_SNORM_EXT),k===a.UNSIGNED_INT_5_9_9_9_REV&&(q=a.RGB9_E5),k===a.UNSIGNED_INT_10F_11F_11F_REV&&(q=a.R11F_G11F_B10F)),M===a.RGBA){const K=ee?hr:qe.getTransfer(Z);k===a.FLOAT&&(q=a.RGBA32F),k===a.HALF_FLOAT&&(q=a.RGBA16F),k===a.UNSIGNED_BYTE&&(q=K===it?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT&&re&&(q=re.RGBA16_EXT),k===a.SHORT&&re&&(q=re.RGBA16_SNORM_EXT),k===a.UNSIGNED_SHORT_4_4_4_4&&(q=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&(q=a.RGB5_A1)}return(q===a.R16F||q===a.R32F||q===a.RG16F||q===a.RG32F||q===a.RGBA16F||q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(R,M){let k;return R?M===null||M===Bn||M===ta?k=a.DEPTH24_STENCIL8:M===fn?k=a.DEPTH32F_STENCIL8:M===ea&&(k=a.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bn||M===ta?k=a.DEPTH_COMPONENT24:M===fn?k=a.DEPTH_COMPONENT32F:M===ea&&(k=a.DEPTH_COMPONENT16),k}function S(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==Nt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function _(R){const M=R.target;M.removeEventListener("dispose",_),D(M)}function E(R){const M=n.get(R);if(M.__webglInit===void 0)return;const k=R.source,j=f.get(k);if(j){const Z=j[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(R),Object.keys(j).length===0&&f.delete(k)}n.remove(R)}function P(R){const M=n.get(R);a.deleteTexture(M.__webglTexture);const k=R.source,j=f.get(k);delete j[M.__cacheKey],r.memory.textures--}function D(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Z=0;Z<M.__webglFramebuffer[j].length;Z++)a.deleteFramebuffer(M.__webglFramebuffer[j][Z]);else a.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)a.deleteFramebuffer(M.__webglFramebuffer[j]);else a.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&a.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&a.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&a.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let j=0,Z=k.length;j<Z;j++){const ee=n.get(k[j]);ee.__webglTexture&&(a.deleteTexture(ee.__webglTexture),r.memory.textures--),n.remove(k[j])}n.remove(R)}let I=0;function O(){I=0}function W(){return I}function F(R){I=R}function V(){const R=I;return R>=i.maxTextures&&ve("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const k=n.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const j=R.image;if(j===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+M)}function Q(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Re(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+M)}function he(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Re(k,R,M);return}t.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+M)}function _e(R,M){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Le(k,R,M);return}t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+M)}const Ee={[yi]:a.REPEAT,[Dn]:a.CLAMP_TO_EDGE,[rr]:a.MIRRORED_REPEAT},Ye={[Bt]:a.NEAREST,[_u]:a.NEAREST_MIPMAP_NEAREST,[Ws]:a.NEAREST_MIPMAP_LINEAR,[Nt]:a.LINEAR,[Za]:a.LINEAR_MIPMAP_NEAREST,[In]:a.LINEAR_MIPMAP_LINEAR},ot={[sf]:a.NEVER,[lf]:a.ALWAYS,[af]:a.LESS,[Vc]:a.LEQUAL,[rf]:a.EQUAL,[Hc]:a.GEQUAL,[of]:a.GREATER,[cf]:a.NOTEQUAL};function Oe(R,M){if(M.type===fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nt||M.magFilter===Za||M.magFilter===Ws||M.magFilter===In||M.minFilter===Nt||M.minFilter===Za||M.minFilter===Ws||M.minFilter===In)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,Ee[M.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,Ee[M.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,Ee[M.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,Ye[M.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,Ye[M.minFilter]),M.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,ot[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==Ws&&M.minFilter!==In||M.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function J(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const j=M.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const ee=B(M);if(ee!==R.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,k=!0),Z[ee].usedTimes++;const re=Z[R.__cacheKey];re!==void 0&&(Z[R.__cacheKey].usedTimes--,re.usedTimes===0&&P(M)),R.__cacheKey=ee,R.__webglTexture=Z[ee].texture}return k}function fe(R,M,k){return Math.floor(Math.floor(R/k)/M)}function ie(R,M,k,j){const ee=R.updateRanges;if(ee.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,M.width,M.height,k,j,M.data);else{ee.sort((be,se)=>be.start-se.start);let re=0;for(let be=1;be<ee.length;be++){const se=ee[re],te=ee[be],De=se.start+se.count,Be=fe(te.start,M.width,4),$e=fe(se.start,M.width,4);te.start<=De+1&&Be===$e&&fe(te.start+te.count-1,M.width,4)===Be?se.count=Math.max(se.count,te.start+te.count-se.start):(++re,ee[re]=te)}ee.length=re+1;const q=t.getParameter(a.UNPACK_ROW_LENGTH),K=t.getParameter(a.UNPACK_SKIP_PIXELS),pe=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,M.width);for(let be=0,se=ee.length;be<se;be++){const te=ee[be],De=Math.floor(te.start/4),Be=Math.ceil(te.count/4),$e=De%M.width,L=Math.floor(De/M.width),ne=Be,X=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(a.UNPACK_SKIP_ROWS,L),t.texSubImage2D(a.TEXTURE_2D,0,$e,L,ne,X,k,j,M.data)}R.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,q),t.pixelStorei(a.UNPACK_SKIP_PIXELS,K),t.pixelStorei(a.UNPACK_SKIP_ROWS,pe)}}function Re(R,M,k){let j=a.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=a.TEXTURE_3D);const Z=J(R,M),ee=M.source;t.bindTexture(j,R.__webglTexture,a.TEXTURE0+k);const re=n.get(ee);if(ee.version!==re.__version||Z===!0){if(t.activeTexture(a.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const X=qe.getPrimaries(qe.workingColorSpace),me=M.colorSpace===bi?null:qe.getPrimaries(M.colorSpace),ae=M.colorSpace===bi||X===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}t.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment);let K=g(M.image,!1,i.maxTextureSize);K=ce(M,K);const pe=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let se=v(M.internalFormat,pe,be,M.normalized,M.colorSpace,M.isVideoTexture);Oe(j,M);let te;const De=M.mipmaps,Be=M.isVideoTexture!==!0,$e=re.__version===void 0||Z===!0,L=ee.dataReady,ne=S(M,K);if(M.isDepthTexture)se=T(M.format===Ni,M.type),$e&&(Be?t.texStorage2D(a.TEXTURE_2D,1,se,K.width,K.height):t.texImage2D(a.TEXTURE_2D,0,se,K.width,K.height,0,pe,be,null));else if(M.isDataTexture)if(De.length>0){Be&&$e&&t.texStorage2D(a.TEXTURE_2D,ne,se,De[0].width,De[0].height);for(let X=0,me=De.length;X<me;X++)te=De[X],Be?L&&t.texSubImage2D(a.TEXTURE_2D,X,0,0,te.width,te.height,pe,be,te.data):t.texImage2D(a.TEXTURE_2D,X,se,te.width,te.height,0,pe,be,te.data);M.generateMipmaps=!1}else Be?($e&&t.texStorage2D(a.TEXTURE_2D,ne,se,K.width,K.height),L&&ie(M,K,pe,be)):t.texImage2D(a.TEXTURE_2D,0,se,K.width,K.height,0,pe,be,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&$e&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,se,De[0].width,De[0].height,K.depth);for(let X=0,me=De.length;X<me;X++)if(te=De[X],M.format!==pn)if(pe!==null)if(Be){if(L)if(M.layerUpdates.size>0){const ae=yh(te.width,te.height,M.format,M.type);for(const Y of M.layerUpdates){const Me=te.data.subarray(Y*ae/te.data.BYTES_PER_ELEMENT,(Y+1)*ae/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,X,0,0,Y,te.width,te.height,1,pe,Me)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,K.depth,pe,te.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,X,se,te.width,te.height,K.depth,0,te.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,X,0,0,0,te.width,te.height,K.depth,pe,be,te.data):t.texImage3D(a.TEXTURE_2D_ARRAY,X,se,te.width,te.height,K.depth,0,pe,be,te.data)}else{Be&&$e&&t.texStorage2D(a.TEXTURE_2D,ne,se,De[0].width,De[0].height);for(let X=0,me=De.length;X<me;X++)te=De[X],M.format!==pn?pe!==null?Be?L&&t.compressedTexSubImage2D(a.TEXTURE_2D,X,0,0,te.width,te.height,pe,te.data):t.compressedTexImage2D(a.TEXTURE_2D,X,se,te.width,te.height,0,te.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&t.texSubImage2D(a.TEXTURE_2D,X,0,0,te.width,te.height,pe,be,te.data):t.texImage2D(a.TEXTURE_2D,X,se,te.width,te.height,0,pe,be,te.data)}else if(M.isDataArrayTexture)if(Be){if($e&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ne,se,K.width,K.height,K.depth),L)if(M.layerUpdates.size>0){const X=yh(K.width,K.height,M.format,M.type);for(const me of M.layerUpdates){const ae=K.data.subarray(me*X/K.data.BYTES_PER_ELEMENT,(me+1)*X/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,me,K.width,K.height,1,pe,be,ae)}M.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,pe,be,K.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,se,K.width,K.height,K.depth,0,pe,be,K.data);else if(M.isData3DTexture)Be?($e&&t.texStorage3D(a.TEXTURE_3D,ne,se,K.width,K.height,K.depth),L&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,pe,be,K.data)):t.texImage3D(a.TEXTURE_3D,0,se,K.width,K.height,K.depth,0,pe,be,K.data);else if(M.isFramebufferTexture){if($e)if(Be)t.texStorage2D(a.TEXTURE_2D,ne,se,K.width,K.height);else{let X=K.width,me=K.height;for(let ae=0;ae<ne;ae++)t.texImage2D(a.TEXTURE_2D,ae,se,X,me,0,pe,be,null),X>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in a){const X=a.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),K.parentNode!==X){X.appendChild(K),u.add(M),X.onpaint=Ne=>{const Rt=Ne.changedElements;for(const lt of u)Rt.includes(lt.image)&&(lt.needsUpdate=!0)},X.requestPaint();return}const me=0,ae=a.RGBA,Y=a.RGBA,Me=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,me,ae,Y,Me,K),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(De.length>0){if(Be&&$e){const X=Mt(De[0]);t.texStorage2D(a.TEXTURE_2D,ne,se,X.width,X.height)}for(let X=0,me=De.length;X<me;X++)te=De[X],Be?L&&t.texSubImage2D(a.TEXTURE_2D,X,0,0,pe,be,te):t.texImage2D(a.TEXTURE_2D,X,se,pe,be,te);M.generateMipmaps=!1}else if(Be){if($e){const X=Mt(K);t.texStorage2D(a.TEXTURE_2D,ne,se,X.width,X.height)}L&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,pe,be,K)}else t.texImage2D(a.TEXTURE_2D,0,se,pe,be,K);p(M)&&b(j),re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Le(R,M,k){if(M.image.length!==6)return;const j=J(R,M),Z=M.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+k);const ee=n.get(Z);if(Z.version!==ee.__version||j===!0){t.activeTexture(a.TEXTURE0+k);const re=qe.getPrimaries(qe.workingColorSpace),q=M.colorSpace===bi?null:qe.getPrimaries(M.colorSpace),K=M.colorSpace===bi||re===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!pe&&!be?se[Y]=g(M.image[Y],!0,i.maxCubemapSize):se[Y]=be?M.image[Y].image:M.image[Y],se[Y]=ce(M,se[Y]);const te=se[0],De=s.convert(M.format,M.colorSpace),Be=s.convert(M.type),$e=v(M.internalFormat,De,Be,M.normalized,M.colorSpace),L=M.isVideoTexture!==!0,ne=ee.__version===void 0||j===!0,X=Z.dataReady;let me=S(M,te);Oe(a.TEXTURE_CUBE_MAP,M);let ae;if(pe){L&&ne&&t.texStorage2D(a.TEXTURE_CUBE_MAP,me,$e,te.width,te.height);for(let Y=0;Y<6;Y++){ae=se[Y].mipmaps;for(let Me=0;Me<ae.length;Me++){const Ne=ae[Me];M.format!==pn?De!==null?L?X&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,0,0,Ne.width,Ne.height,De,Ne.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,$e,Ne.width,Ne.height,0,Ne.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,0,0,Ne.width,Ne.height,De,Be,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me,$e,Ne.width,Ne.height,0,De,Be,Ne.data)}}}else{if(ae=M.mipmaps,L&&ne){ae.length>0&&me++;const Y=Mt(se[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,me,$e,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(be){L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,De,Be,se[Y].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$e,se[Y].width,se[Y].height,0,De,Be,se[Y].data);for(let Me=0;Me<ae.length;Me++){const Rt=ae[Me].image[Y].image;L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,0,0,Rt.width,Rt.height,De,Be,Rt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,$e,Rt.width,Rt.height,0,De,Be,Rt.data)}}else{L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,De,Be,se[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,$e,De,Be,se[Y]);for(let Me=0;Me<ae.length;Me++){const Ne=ae[Me];L?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,0,0,De,Be,Ne.image[Y]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me+1,$e,De,Be,Ne.image[Y])}}}p(M)&&b(a.TEXTURE_CUBE_MAP),ee.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Pe(R,M,k,j,Z,ee){const re=s.convert(k.format,k.colorSpace),q=s.convert(k.type),K=v(k.internalFormat,re,q,k.normalized,k.colorSpace),pe=n.get(M),be=n.get(k);if(be.__renderTarget=M,!pe.__hasExternalTextures){const se=Math.max(1,M.width>>ee),te=Math.max(1,M.height>>ee);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,K,se,te,M.depth,0,re,q,null):t.texImage2D(Z,ee,K,se,te,0,re,q,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),je(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,Z,be.__webglTexture,0,Ot(M)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,Z,be.__webglTexture,ee),t.bindFramebuffer(a.FRAMEBUFFER,null)}function _t(R,M,k){if(a.bindRenderbuffer(a.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,Z=j&&j.isDepthTexture?j.type:null,ee=T(M.stencilBuffer,Z),re=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;je(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(M),ee,M.width,M.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(M),ee,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,ee,M.width,M.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,re,a.RENDERBUFFER,R)}else{const j=M.textures;for(let Z=0;Z<j.length;Z++){const ee=j[Z],re=s.convert(ee.format,ee.colorSpace),q=s.convert(ee.type),K=v(ee.internalFormat,re,q,ee.normalized,ee.colorSpace);je(M)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(M),K,M.width,M.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(M),K,M.width,M.height):a.renderbufferStorage(a.RENDERBUFFER,K,M.width,M.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Xe(R,M,k){const j=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(a.TEXTURE_CUBE_MAP,M.depthTexture);const pe=s.convert(M.depthTexture.format),be=s.convert(M.depthTexture.type);let se;M.depthTexture.format===ii?se=a.DEPTH_COMPONENT24:M.depthTexture.format===Ni&&(se=a.DEPTH24_STENCIL8);for(let te=0;te<6;te++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,M.width,M.height,0,pe,be,null)}}else $(M.depthTexture,0);const ee=Z.__webglTexture,re=Ot(M),q=j?a.TEXTURE_CUBE_MAP_POSITIVE_X+k:a.TEXTURE_2D,K=M.depthTexture.format===Ni?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(M.depthTexture.format===ii)je(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,q,ee,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,K,q,ee,0);else if(M.depthTexture.format===Ni)je(M)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,q,ee,0,re):a.framebufferTexture2D(a.FRAMEBUFFER,K,q,ee,0);else throw new Error("Unknown depthTexture format")}function ct(R){const M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)Xe(M.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?Xe(M.__webglFramebuffer[0],R,0):Xe(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=a.createRenderbuffer(),_t(M.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[j];a.bindRenderbuffer(a.RENDERBUFFER,ee),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,ee)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=a.createRenderbuffer(),_t(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ee),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,ee)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function bt(R,M,k){const j=n.get(R);M!==void 0&&Pe(j.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&ct(R)}function We(R){const M=R.texture,k=n.get(R),j=n.get(M);R.addEventListener("dispose",_);const Z=R.textures,ee=R.isWebGLCubeRenderTarget===!0,re=Z.length>1;if(re||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=M.version,r.memory.textures++),ee){k.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[q]=[];for(let K=0;K<M.mipmaps.length;K++)k.__webglFramebuffer[q][K]=a.createFramebuffer()}else k.__webglFramebuffer[q]=a.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)k.__webglFramebuffer[q]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(re)for(let q=0,K=Z.length;q<K;q++){const pe=n.get(Z[q]);pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture(),r.memory.textures++)}if(R.samples>0&&je(R)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let q=0;q<Z.length;q++){const K=Z[q];k.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[q]);const pe=s.convert(K.format,K.colorSpace),be=s.convert(K.type),se=v(K.internalFormat,pe,be,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),te=Ot(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,te,se,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+q,a.RENDERBUFFER,k.__webglColorRenderbuffer[q])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),_t(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ee){t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(a.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)Pe(k.__webglFramebuffer[q][K],R,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else Pe(k.__webglFramebuffer[q],R,M,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(M)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let q=0,K=Z.length;q<K;q++){const pe=Z[q],be=n.get(pe);let se=a.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(se,be.__webglTexture),Oe(se,pe),Pe(k.__webglFramebuffer,R,pe,a.COLOR_ATTACHMENT0+q,se,0),p(pe)&&b(se)}t.unbindTexture()}else{let q=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(q,j.__webglTexture),Oe(q,M),M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)Pe(k.__webglFramebuffer[K],R,M,a.COLOR_ATTACHMENT0,q,K);else Pe(k.__webglFramebuffer,R,M,a.COLOR_ATTACHMENT0,q,0);p(M)&&b(q),t.unbindTexture()}R.depthBuffer&&ct(R)}function kt(R){const M=R.textures;for(let k=0,j=M.length;k<j;k++){const Z=M[k];if(p(Z)){const ee=y(R),re=n.get(Z).__webglTexture;t.bindTexture(ee,re),b(ee),t.unbindTexture()}}}const vt=[],tn=[];function N(R){if(R.samples>0){if(je(R)===!1){const M=R.textures,k=R.width,j=R.height;let Z=a.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,re=n.get(R),q=M.length>1;if(q)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,re.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const K=R.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),q){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const be=n.get(M[pe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,be,0)}a.blitFramebuffer(0,0,k,j,0,0,k,j,Z,a.NEAREST),c===!0&&(vt.length=0,tn.length=0,vt.push(a.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(vt.push(ee),tn.push(ee),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,tn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),q)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const be=n.get(M[pe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,re.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.TEXTURE_2D,be,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[M])}}}function Ot(R){return Math.min(i.maxSamples,R.samples)}function je(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mt(R){const M=r.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ce(R,M){const k=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==cn&&k!==bi&&(qe.getTransfer(k)===it?(j!==pn||Z!==rn)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",k)),M}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.getTextureUnits=W,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=_e,this.rebindTextures=bt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jx(a,e){function t(n,i=bi){let s;const r=qe.getTransfer(i);if(n===rn)return a.UNSIGNED_BYTE;if(n===Fc)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===vu)return a.BYTE;if(n===yu)return a.SHORT;if(n===ea)return a.UNSIGNED_SHORT;if(n===Lc)return a.INT;if(n===Bn)return a.UNSIGNED_INT;if(n===fn)return a.FLOAT;if(n===ni)return a.HALF_FLOAT;if(n===wu)return a.ALPHA;if(n===Eu)return a.RGB;if(n===pn)return a.RGBA;if(n===ii)return a.DEPTH_COMPONENT;if(n===Ni)return a.DEPTH_STENCIL;if(n===Uc)return a.RED;if(n===kc)return a.RED_INTEGER;if(n===Bi)return a.RG;if(n===Oc)return a.RG_INTEGER;if(n===Bc)return a.RGBA_INTEGER;if(n===$a||n===Qa||n===er||n===tr)if(r===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===Go||n===zo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Wo||n===qo||n===Xo||n===or||n===jo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vo||n===Ho)return r===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===qo)return s.COMPRESSED_R11_EAC;if(n===Xo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===or)return s.COMPRESSED_RG11_EAC;if(n===jo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===Jo||n===Yo||n===Zo||n===$o||n===Qo||n===ec||n===tc||n===nc||n===ic||n===sc||n===ac||n===rc||n===oc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ko)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return r===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cc||n===lc||n===hc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===cc)return r===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===dc||n===cr||n===fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===uc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ta?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const Yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:Yx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new Tt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends Mi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new $x,p={},b=t.getContextAttributes();let y=null,v=null;const T=[],S=[],A=new Se;let _=null;const E=new $t;E.viewport=new pt;const P=new $t;P.viewport=new pt;const D=[E,P],I=new Yp;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=T[J];return fe===void 0&&(fe=new Br,T[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=T[J];return fe===void 0&&(fe=new Br,T[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=T[J];return fe===void 0&&(fe=new Br,T[J]=fe),fe.getHandSpace()};function F(J){const fe=S.indexOf(J.inputSource);if(fe===-1)return;const ie=T[fe];ie!==void 0&&(ie.update(J.inputSource,J.frame,l||r),ie.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",B);for(let J=0;J<T.length;J++){const fe=S[J];fe!==null&&(S[J]=null,T[J].disconnect(fe))}O=null,W=null,g.reset();for(const J in p)delete p[J];e.setRenderTarget(y),f=null,d=null,u=null,i=null,v=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",B),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Re=null,Le=null;b.depth&&(Le=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=b.stencil?Ni:ii,Re=b.stencil?ta:Bn);const Pe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new kn(d.textureWidth,d.textureHeight,{format:pn,type:rn,depthTexture:new bs(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new kn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(J){for(let fe=0;fe<J.removed.length;fe++){const ie=J.removed[fe],Re=S.indexOf(ie);Re>=0&&(S[Re]=null,T[Re].disconnect(ie))}for(let fe=0;fe<J.added.length;fe++){const ie=J.added[fe];let Re=S.indexOf(ie);if(Re===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=S.length){S.push(ie),Re=Pe;break}else if(S[Pe]===null){S[Pe]=ie,Re=Pe;break}if(Re===-1)break}const Le=T[Re];Le&&Le.connect(ie)}}const $=new C,Q=new C;function he(J,fe,ie){$.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const Re=$.distanceTo(Q),Le=fe.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,_t=Le[14]/(Le[10]-1),Xe=Le[14]/(Le[10]+1),ct=(Le[9]+1)/Le[5],bt=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],kt=(Pe[8]+1)/Pe[0],vt=_t*We,tn=_t*kt,N=Re/(-We+kt),Ot=N*-We;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(N),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=_t+N,mt=Xe+N,ce=vt-Ot,Mt=tn+(Re-Ot),R=ct*Xe/mt*je,M=bt*Xe/mt*je;J.projectionMatrix.makePerspective(ce,Mt,R,M,je,mt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let fe=J.near,ie=J.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),I.near=P.near=E.near=fe,I.far=P.far=E.far=ie,(O!==I.near||W!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,W=I.far),I.layers.mask=J.layers.mask|6,E.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;const Re=J.parent,Le=I.cameras;_e(I,Re);for(let Pe=0;Pe<Le.length;Pe++)_e(Le[Pe],Re);Le.length===2?he(I,E,P):I.projectionMatrix.copy(E.projectionMatrix),Ee(J,I,Re)};function Ee(J,fe,ie){ie===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(ie.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=gs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(J){return p[J]};let Ye=null;function ot(J,fe){if(h=fe.getViewerPose(l||r),m=fe,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Re=!1;ie.length!==I.cameras.length&&(I.cameras.length=0,Re=!0);for(let Xe=0;Xe<ie.length;Xe++){const ct=ie[Xe];let bt=null;if(f!==null)bt=f.getViewport(ct);else{const kt=u.getViewSubImage(d,ct);bt=kt.viewport,Xe===0&&(e.setRenderTargetTextures(v,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(v))}let We=D[Xe];We===void 0&&(We=new $t,We.layers.enable(Xe),We.viewport=new pt,D[Xe]=We),We.matrix.fromArray(ct.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ct.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(bt.x,bt.y,bt.width,bt.height),Xe===0&&(I.matrix.copy(We.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Re===!0&&I.cameras.push(We)}const Le=i.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Xe=u.getDepthInformation(ie[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,i.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<ie.length;Xe++){const ct=ie[Xe].camera;if(ct){let bt=p[ct];bt||(bt=new ku,p[ct]=bt);const We=u.getCameraImage(ct);bt.sourceTexture=We}}}}for(let ie=0;ie<T.length;ie++){const Re=S[ie],Le=T[ie];Re!==null&&Le!==void 0&&Le.update(Re,fe,l||r)}Ye&&Ye(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}const Oe=new Ku;Oe.setAnimationLoop(ot),this.setAnimationLoop=function(J){Ye=J},this.dispose=function(){}}}const e_=new ke,td=new Fe;td.set(-1,0,0,0,1,0,0,0,1);function t_(a,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zu(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),x(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),y=b.envMap,v=b.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(td),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n_(a,e,t,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const v=y.program;n.uniformBlockBinding(b,v)}function l(b,y){let v=i[b.id];v===void 0&&(m(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",g));const T=y.program;n.updateUBOMapping(b,T);const S=e.render.frame;s[b.id]!==S&&(d(b),s[b.id]=S)}function h(b){const y=u();b.__bindingPointIndex=y;const v=a.createBuffer(),T=b.__size,S=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,T,S),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,v),v}function u(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=i[b.id],v=b.uniforms,T=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let S=0,A=v.length;S<A;S++){const _=Array.isArray(v[S])?v[S]:[v[S]];for(let E=0,P=_.length;E<P;E++){const D=_[E];if(f(D,S,E,T)===!0){const I=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let F=0;F<O.length;F++){const V=O[F],B=x(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,I+W,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):ArrayBuffer.isView(V)?D.__data.set(new V.constructor(V.buffer,V.byteOffset,D.__data.length)):(V.toArray(D.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,I,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(b,y,v,T){const S=b.value,A=y+"_"+v;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:ArrayBuffer.isView(S)?T[A]=S.slice():T[A]=S.clone(),!0;{const _=T[A];if(typeof S=="number"||typeof S=="boolean"){if(_!==S)return T[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(_.equals(S)===!1)return _.copy(S),!0}}return!1}function m(b){const y=b.uniforms;let v=0;const T=16;for(let A=0,_=y.length;A<_;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let P=0,D=E.length;P<D;P++){const I=E[P],O=Array.isArray(I.value)?I.value:[I.value];for(let W=0,F=O.length;W<F;W++){const V=O[W],B=x(V),$=v%T,Q=$%B.boundary,he=$+Q;v+=Q,he!==0&&T-he<B.storage&&(v+=T-he),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=B.storage}}}const S=v%T;return S>0&&(v+=T-S),b.__size=v,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){const y=b.target;y.removeEventListener("dispose",g);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const b in i)a.deleteBuffer(i[b]);r=[],i={},s={}}return{bind:c,update:l,dispose:p}}const i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function s_(){return Rn===null&&(Rn=new Kc(i_,16,16,Bi,ni),Rn.name="DFG_LUT",Rn.minFilter=Nt,Rn.magFilter=Nt,Rn.wrapS=Dn,Rn.wrapT=Dn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class a_{constructor(e={}){const{canvas:t=df(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const x=f,g=new Set([Bc,Oc,kc]),p=new Set([rn,Bn,ea,ta,Fc,Nc]),b=new Uint32Array(4),y=new Int32Array(4),v=new C;let T=null,S=null;const A=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,I=null;this._outputColorSpace=ft;let O=0,W=0,F=null,V=-1,B=null;const $=new pt,Q=new pt;let he=null;const _e=new Ae(0);let Ee=0,Ye=t.width,ot=t.height,Oe=1,J=null,fe=null;const ie=new pt(0,0,Ye,ot),Re=new pt(0,0,Ye,ot);let Le=!1;const Pe=new Yc;let _t=!1,Xe=!1;const ct=new ke,bt=new C,We=new pt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function tn(){return F===null?Oe:1}let N=n;function Ot(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),N===null){const U="webgl2";if(N=Ot(U,w),N===null)throw Ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ce("WebGLRenderer: "+w.message),w}let je,mt,ce,Mt,R,M,k,j,Z,ee,re,q,K,pe,be,se,te,De,Be,$e,L,ne,X;function me(){je=new sb(N),je.init(),L=new Jx(N,je),mt=new Y0(N,je,e,L),ce=new jx(N,je),mt.reversedDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Mt=new ob(N),R=new Lx,M=new Kx(N,je,ce,R,mt,L,Mt),k=new ib(P),j=new um(N),ne=new K0(N,j),Z=new ab(N,j,Mt,ne),ee=new lb(N,Z,j,ne,Mt),De=new cb(N,mt,M),be=new Z0(R),re=new Ix(P,k,je,mt,ne,be),q=new t_(P,R),K=new Nx,pe=new zx(je),te=new j0(P,k,ce,ee,m,c),se=new Xx(P,ee,mt),X=new n_(N,Mt,mt,ce),Be=new J0(N,je,Mt),$e=new rb(N,je,Mt),Mt.programs=re.programs,P.capabilities=mt,P.extensions=je,P.properties=R,P.renderLists=K,P.shadowMap=se,P.state=ce,P.info=Mt}me(),x!==rn&&(E=new ub(x,t.width,t.height,i,s));const ae=new Qx(P,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(w){w!==void 0&&(Oe=w,this.setSize(Ye,ot,!1))},this.getSize=function(w){return w.set(Ye,ot)},this.setSize=function(w,U,H=!0){if(ae.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=w,ot=U,t.width=Math.floor(w*Oe),t.height=Math.floor(U*Oe),H===!0&&(t.style.width=w+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Ye*Oe,ot*Oe).floor()},this.setDrawingBufferSize=function(w,U,H){Ye=w,ot=U,Oe=H,t.width=Math.floor(w*H),t.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(x===rn){Ce("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){ve("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy($)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,U,H,G){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,U,H,G),ce.viewport($.copy(ie).multiplyScalar(Oe).round())},this.getScissor=function(w){return w.copy(Re)},this.setScissor=function(w,U,H,G){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,U,H,G),ce.scissor(Q.copy(Re).multiplyScalar(Oe).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){ce.setScissorTest(Le=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,H=!0){let G=0;if(w){let z=!1;if(F!==null){const de=F.texture.format;z=g.has(de)}if(z){const de=F.texture.type,xe=p.has(de),ue=te.getClearColor(),ye=te.getClearAlpha(),we=ue.r,Ue=ue.g,ze=ue.b;xe?(b[0]=we,b[1]=Ue,b[2]=ze,b[3]=ye,N.clearBufferuiv(N.COLOR,0,b)):(y[0]=we,y[1]=Ue,y[2]=ze,y[3]=ye,N.clearBufferiv(N.COLOR,0,y))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),te.dispose(),K.dispose(),pe.dispose(),R.dispose(),k.dispose(),ee.dispose(),ne.dispose(),X.dispose(),re.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",_l),ae.removeEventListener("sessionend",vl),Si.stop()};function Y(w){w.preventDefault(),ur("WebGLRenderer: Context Lost."),D=!0}function Me(){ur("WebGLRenderer: Context Restored."),D=!1;const w=Mt.autoReset,U=se.enabled,H=se.autoUpdate,G=se.needsUpdate,z=se.type;me(),Mt.autoReset=w,se.enabled=U,se.autoUpdate=H,se.needsUpdate=G,se.type=z}function Ne(w){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rt(w){const U=w.target;U.removeEventListener("dispose",Rt),lt(U)}function lt(w){Vn(w),R.remove(w)}function Vn(w){const U=R.get(w).programs;U!==void 0&&(U.forEach(function(H){re.releaseProgram(H)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,G,z,de){U===null&&(U=kt);const xe=z.isMesh&&z.matrixWorld.determinant()<0,ue=Md(w,U,H,G,z);ce.setMaterial(G,xe);let ye=H.index,we=1;if(G.wireframe===!0){if(ye=Z.getWireframeAttribute(H),ye===void 0)return;we=2}const Ue=H.drawRange,ze=H.attributes.position;let Te=Ue.start*we,ht=(Ue.start+Ue.count)*we;de!==null&&(Te=Math.max(Te,de.start*we),ht=Math.min(ht,(de.start+de.count)*we)),ye!==null?(Te=Math.max(Te,0),ht=Math.min(ht,ye.count)):ze!=null&&(Te=Math.max(Te,0),ht=Math.min(ht,ze.count));const Ct=ht-Te;if(Ct<0||Ct===1/0)return;ne.setup(z,G,ue,H,ye);let St,ut=Be;if(ye!==null&&(St=j.get(ye),ut=$e,ut.setIndex(St)),z.isMesh)G.wireframe===!0?(ce.setLineWidth(G.wireframeLinewidth*tn()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(z.isLine){let Wt=G.linewidth;Wt===void 0&&(Wt=1),ce.setLineWidth(Wt*tn()),z.isLineSegments?ut.setMode(N.LINES):z.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else z.isPoints?ut.setMode(N.POINTS):z.isSprite&&ut.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(je.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Wt=z._multiDrawStarts,ge=z._multiDrawCounts,nn=z._multiDrawCount,Ze=ye?j.get(ye).bytesPerElement:1,ln=R.get(G).currentProgram.getUniforms();for(let Tn=0;Tn<nn;Tn++)ln.setValue(N,"_gl_DrawID",Tn),ut.render(Wt[Tn]/Ze,ge[Tn])}else if(z.isInstancedMesh)ut.renderInstances(Te,Ct,z.count);else if(H.isInstancedBufferGeometry){const Wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ge=Math.min(H.instanceCount,Wt);ut.renderInstances(Te,Ct,ge)}else ut.render(Te,Ct)};function En(w,U,H){w.transparent===!0&&w.side===xt&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,pa(w,U,H),w.side=ti,w.needsUpdate=!0,pa(w,U,H),w.side=xt):pa(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),S=pe.get(H),S.init(U),_.push(S),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),w!==H&&w.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights();const G=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let xe=0;xe<de.length;xe++){const ue=de[xe];En(ue,H,z),G.add(ue)}else En(de,H,z),G.add(de)}),S=_.pop(),G},this.compileAsync=function(w,U,H=null){const G=this.compile(w,U,H);return new Promise(z=>{function de(){if(G.forEach(function(xe){R.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){z(w);return}setTimeout(de,10)}je.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Cr=null;function vd(w){Cr&&Cr(w)}function _l(){Si.stop()}function vl(){Si.start()}const Si=new Ku;Si.setAnimationLoop(vd),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(w){Cr=w,ae.setAnimationLoop(w),w===null?Si.stop():Si.start()},ae.addEventListener("sessionstart",_l),ae.addEventListener("sessionend",vl),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(w,U);const H=ae.enabled===!0&&ae.isPresenting===!0,G=E!==null&&(F===null||H)&&E.begin(P,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,U,F),S=pe.get(w,_.length),S.init(U),S.state.textureUnits=M.getTextureUnits(),_.push(S),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(ct,Ln,U.reversedDepth),Xe=this.localClippingEnabled,_t=be.init(this.clippingPlanes,Xe),T=K.get(w,A.length),T.init(),A.push(T),ae.enabled===!0&&ae.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&Pr(xe,U,-1/0,P.sortObjects)}Pr(w,U,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(J,fe),vt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,vt&&te.addToRenderList(T,w),this.info.render.frame++,_t===!0&&be.beginShadows();const z=S.state.shadowsArray;if(se.render(z,w,U),_t===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&E.hasRenderPass())===!1){const xe=T.opaque,ue=T.transmissive;if(S.setupLights(),U.isArrayCamera){const ye=U.cameras;if(ue.length>0)for(let we=0,Ue=ye.length;we<Ue;we++){const ze=ye[we];Ml(xe,ue,w,ze)}vt&&te.render(w);for(let we=0,Ue=ye.length;we<Ue;we++){const ze=ye[we];yl(T,w,ze,ze.viewport)}}else ue.length>0&&Ml(xe,ue,w,U),vt&&te.render(w),yl(T,w,U)}F!==null&&W===0&&(M.updateMultisampleRenderTarget(F),M.updateRenderTargetMipmap(F)),G&&E.end(P),w.isScene===!0&&w.onAfterRender(P,w,U),ne.resetDefaultState(),V=-1,B=null,_.pop(),_.length>0?(S=_[_.length-1],M.setTextureUnits(S.state.textureUnits),_t===!0&&be.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,I!==null&&I.renderEnd()};function Pr(w,U,H,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Pe.intersectsSprite(w)){G&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);const xe=ee.update(w),ue=w.material;ue.visible&&T.push(w,xe,ue,H,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Pe.intersectsObject(w))){const xe=ee.update(w),ue=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),We.copy(xe.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(ue)){const ye=xe.groups;for(let we=0,Ue=ye.length;we<Ue;we++){const ze=ye[we],Te=ue[ze.materialIndex];Te&&Te.visible&&T.push(w,xe,Te,H,We.z,ze)}}else ue.visible&&T.push(w,xe,ue,H,We.z,null)}}const de=w.children;for(let xe=0,ue=de.length;xe<ue;xe++)Pr(de[xe],U,H,G)}function yl(w,U,H,G){const{opaque:z,transmissive:de,transparent:xe}=w;S.setupLightsView(H),_t===!0&&be.setGlobalState(P.clippingPlanes,H),G&&ce.viewport($.copy(G)),z.length>0&&fa(z,U,H),de.length>0&&fa(de,U,H),xe.length>0&&fa(xe,U,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ml(w,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){const Te=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new kn(1,1,{generateMipmaps:!0,type:Te?ni:rn,minFilter:In,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const de=S.state.transmissionRenderTarget[G.id],xe=G.viewport||$;de.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);const ue=P.getRenderTarget(),ye=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(de),P.getClearColor(_e),Ee=P.getClearAlpha(),Ee<1&&P.setClearColor(16777215,.5),P.clear(),vt&&te.render(H);const Ue=P.toneMapping;P.toneMapping=Un;const ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),_t===!0&&be.setGlobalState(P.clippingPlanes,G),fa(w,H,G),M.updateMultisampleRenderTarget(de),M.updateRenderTargetMipmap(de),je.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let ht=0,Ct=U.length;ht<Ct;ht++){const St=U[ht],{object:ut,geometry:Wt,material:ge,group:nn}=St;if(ge.side===xt&&ut.layers.test(G.layers)){const Ze=ge.side;ge.side=en,ge.needsUpdate=!0,Sl(ut,H,G,Wt,ge,nn),ge.side=Ze,ge.needsUpdate=!0,Te=!0}}Te===!0&&(M.updateMultisampleRenderTarget(de),M.updateRenderTargetMipmap(de))}P.setRenderTarget(ue,ye,we),P.setClearColor(_e,Ee),ze!==void 0&&(G.viewport=ze),P.toneMapping=Ue}function fa(w,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,de=w.length;z<de;z++){const xe=w[z],{object:ue,geometry:ye,group:we}=xe;let Ue=xe.material;Ue.allowOverride===!0&&G!==null&&(Ue=G),ue.layers.test(H.layers)&&Sl(ue,U,H,ye,Ue,we)}}function Sl(w,U,H,G,z,de){w.onBeforeRender(P,U,H,G,z,de),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(P,U,H,G,w,de),z.transparent===!0&&z.side===xt&&z.forceSinglePass===!1?(z.side=en,z.needsUpdate=!0,P.renderBufferDirect(H,U,G,z,w,de),z.side=ti,z.needsUpdate=!0,P.renderBufferDirect(H,U,G,z,w,de),z.side=xt):P.renderBufferDirect(H,U,G,z,w,de),w.onAfterRender(P,U,H,G,z,de)}function pa(w,U,H){U.isScene!==!0&&(U=kt);const G=R.get(w),z=S.state.lights,de=S.state.shadowsArray,xe=z.state.version,ue=re.getParameters(w,z.state,de,U,H,S.state.lightProbeGridArray),ye=re.getProgramCacheKey(ue);let we=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const Ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=k.get(w.envMap||G.environment,Ue),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,we===void 0&&(w.addEventListener("dispose",Rt),we=new Map,G.programs=we);let ze=we.get(ye);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===xe)return El(w,ue),ze}else ue.uniforms=re.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,H,ue),w.onBeforeCompile(ue,P),ze=re.acquireProgram(ue,ye),we.set(ye,ze),G.uniforms=ue.uniforms;const Te=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=be.uniform),El(w,ue),G.needsLights=wd(w),G.lightsStateVersion=xe,G.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=ze,G.uniformsList=null,ze}function wl(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=nr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function El(w,U){const H=R.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function yd(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let H=0,G=w.length;H<G;H++){const z=w[H];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function Md(w,U,H,G,z){U.isScene!==!0&&(U=kt),M.resetTextureUnits();const de=U.fog,xe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ue=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:qe.workingColorSpace,ye=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,we=k.get(G.envMap||xe,ye),Ue=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!H.morphAttributes.position,ht=!!H.morphAttributes.normal,Ct=!!H.morphAttributes.color;let St=Un;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(St=P.toneMapping);const ut=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Wt=ut!==void 0?ut.length:0,ge=R.get(G),nn=S.state.lights;if(_t===!0&&(Xe===!0||w!==B)){const gt=w===B&&G.id===V;be.setState(G,w,gt)}let Ze=!1;G.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==nn.state.version||ge.outputColorSpace!==ue||z.isBatchedMesh&&ge.batching===!1||!z.isBatchedMesh&&ge.batching===!0||z.isBatchedMesh&&ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ge.instancing===!1||!z.isInstancedMesh&&ge.instancing===!0||z.isSkinnedMesh&&ge.skinning===!1||!z.isSkinnedMesh&&ge.skinning===!0||z.isInstancedMesh&&ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ge.instancingMorph===!1&&z.morphTexture!==null||ge.envMap!==we||G.fog===!0&&ge.fog!==de||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==be.numPlanes||ge.numIntersection!==be.numIntersection)||ge.vertexAlphas!==Ue||ge.vertexTangents!==ze||ge.morphTargets!==Te||ge.morphNormals!==ht||ge.morphColors!==Ct||ge.toneMapping!==St||ge.morphTargetsCount!==Wt||!!ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,ge.__version=G.version);let ln=ge.currentProgram;Ze===!0&&(ln=pa(G,U,z),I&&G.isNodeMaterial&&I.onUpdateProgram(G,ln,ge));let Tn=!1,ri=!1,zi=!1;const dt=ln.getUniforms(),Pt=ge.uniforms;if(ce.useProgram(ln.program)&&(Tn=!0,ri=!0,zi=!0),G.id!==V&&(V=G.id,ri=!0),ge.needsLights){const gt=yd(S.state.lightProbeGridArray,z);ge.lightProbeGrid!==gt&&(ge.lightProbeGrid=gt,ri=!0)}if(Tn||B!==w){ce.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(N,"projectionMatrix",w.projectionMatrix),dt.setValue(N,"viewMatrix",w.matrixWorldInverse);const ci=dt.map.cameraPosition;ci!==void 0&&ci.setValue(N,bt.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,ri=!0,zi=!0)}if(ge.needsLights&&(nn.state.directionalShadowMap.length>0&&dt.setValue(N,"directionalShadowMap",nn.state.directionalShadowMap,M),nn.state.spotShadowMap.length>0&&dt.setValue(N,"spotShadowMap",nn.state.spotShadowMap,M),nn.state.pointShadowMap.length>0&&dt.setValue(N,"pointShadowMap",nn.state.pointShadowMap,M)),z.isSkinnedMesh){dt.setOptional(N,z,"bindMatrix"),dt.setOptional(N,z,"bindMatrixInverse");const gt=z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),dt.setValue(N,"boneTexture",gt.boneTexture,M))}z.isBatchedMesh&&(dt.setOptional(N,z,"batchingTexture"),dt.setValue(N,"batchingTexture",z._matricesTexture,M),dt.setOptional(N,z,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",z._indirectTexture,M),dt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",z._colorsTexture,M));const oi=H.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&De.update(z,H,ln),(ri||ge.receiveShadow!==z.receiveShadow)&&(ge.receiveShadow=z.receiveShadow,dt.setValue(N,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Pt.envMapIntensity.value=U.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=s_()),ri){if(dt.setValue(N,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&Sd(Pt,zi),de&&G.fog===!0&&q.refreshFogUniforms(Pt,de),q.refreshMaterialUniforms(Pt,G,Oe,ot,S.state.transmissionRenderTarget[w.id]),ge.needsLights&&ge.lightProbeGrid){const gt=ge.lightProbeGrid;Pt.probesSH.value=gt.texture,Pt.probesMin.value.copy(gt.boundingBox.min),Pt.probesMax.value.copy(gt.boundingBox.max),Pt.probesResolution.value.copy(gt.resolution)}nr.upload(N,wl(ge),Pt,M)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(nr.upload(N,wl(ge),Pt,M),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(N,"center",z.center),dt.setValue(N,"modelViewMatrix",z.modelViewMatrix),dt.setValue(N,"normalMatrix",z.normalMatrix),dt.setValue(N,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){const gt=G.uniformsGroups;for(let ci=0,Vi=gt.length;ci<Vi;ci++){const Tl=gt[ci];X.update(Tl,ln),X.bind(Tl,ln)}}return ln}function Sd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function wd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,U,H){const G=R.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),R.get(w.texture).__webglTexture=U,R.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const H=R.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Ed=N.createFramebuffer();this.setRenderTarget=function(w,U=0,H=0){F=w,O=U,W=H;let G=null,z=!1,de=!1;if(w){const ue=R.get(w);if(ue.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),$.copy(w.viewport),Q.copy(w.scissor),he=w.scissorTest,ce.viewport($),ce.scissor(Q),ce.setScissorTest(he),V=-1;return}else if(ue.__webglFramebuffer===void 0)M.setupRenderTarget(w);else if(ue.__hasExternalTextures)M.rebindTextures(w,R.get(w.texture).__webglTexture,R.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ue=w.depthTexture;if(ue.__boundDepthTexture!==Ue){if(Ue!==null&&R.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(w)}}const ye=w.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);const we=R.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(we[U])?G=we[U][H]:G=we[U],z=!0):w.samples>0&&M.useMultisampledRTT(w)===!1?G=R.get(w).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[H]:G=we,$.copy(w.viewport),Q.copy(w.scissor),he=w.scissorTest}else $.copy(ie).multiplyScalar(Oe).floor(),Q.copy(Re).multiplyScalar(Oe).floor(),he=Le;if(H!==0&&(G=Ed),ce.bindFramebuffer(N.FRAMEBUFFER,G)&&ce.drawBuffers(w,G),ce.viewport($),ce.scissor(Q),ce.setScissorTest(he),z){const ue=R.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,H)}else if(de){const ue=U;for(let ye=0;ye<w.textures.length;ye++){const we=R.get(w.textures[ye]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ye,we.__webglTexture,H,ue)}}else if(w!==null&&H!==0){const ue=R.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,H)}V=-1},this.readRenderTargetPixels=function(w,U,H,G,z,de,xe,ue=0){if(!(w&&w.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){ce.bindFramebuffer(N.FRAMEBUFFER,ye);try{const we=w.textures[ue],Ue=we.format,ze=we.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue),!mt.textureFormatReadable(Ue)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(ze)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&H>=0&&H<=w.height-z&&N.readPixels(U,H,G,z,L.convert(Ue),L.convert(ze),de)}finally{const we=F!==null?R.get(F).__webglFramebuffer:null;ce.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,G,z,de,xe,ue=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye)if(U>=0&&U<=w.width-G&&H>=0&&H<=w.height-z){ce.bindFramebuffer(N.FRAMEBUFFER,ye);const we=w.textures[ue],Ue=we.format,ze=we.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue),!mt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(U,H,G,z,L.convert(Ue),L.convert(ze),0);const ht=F!==null?R.get(F).__webglFramebuffer:null;ce.bindFramebuffer(N.FRAMEBUFFER,ht);const Ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ff(N,Ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Te),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.deleteBuffer(Te),N.deleteSync(Ct),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,H=0){const G=Math.pow(2,-H),z=Math.floor(w.image.width*G),de=Math.floor(w.image.height*G),xe=U!==null?U.x:0,ue=U!==null?U.y:0;M.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,xe,ue,z,de),ce.unbindTexture()};const Td=N.createFramebuffer(),Ad=N.createFramebuffer();this.copyTextureToTexture=function(w,U,H=null,G=null,z=0,de=0){let xe,ue,ye,we,Ue,ze,Te,ht,Ct;const St=w.isCompressedTexture?w.mipmaps[de]:w.image;if(H!==null)xe=H.max.x-H.min.x,ue=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Ue=H.min.y,ze=H.isBox3?H.min.z:0;else{const Pt=Math.pow(2,-z);xe=Math.floor(St.width*Pt),ue=Math.floor(St.height*Pt),w.isDataArrayTexture?ye=St.depth:w.isData3DTexture?ye=Math.floor(St.depth*Pt):ye=1,we=0,Ue=0,ze=0}G!==null?(Te=G.x,ht=G.y,Ct=G.z):(Te=0,ht=0,Ct=0);const ut=L.convert(U.format),Wt=L.convert(U.type);let ge;U.isData3DTexture?(M.setTexture3D(U,0),ge=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(M.setTexture2DArray(U,0),ge=N.TEXTURE_2D_ARRAY):(M.setTexture2D(U,0),ge=N.TEXTURE_2D),ce.activeTexture(N.TEXTURE0),ce.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),ce.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ce.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const nn=ce.getParameter(N.UNPACK_ROW_LENGTH),Ze=ce.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=ce.getParameter(N.UNPACK_SKIP_PIXELS),Tn=ce.getParameter(N.UNPACK_SKIP_ROWS),ri=ce.getParameter(N.UNPACK_SKIP_IMAGES);ce.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),ce.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),ce.pixelStorei(N.UNPACK_SKIP_PIXELS,we),ce.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),ce.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);const zi=w.isDataArrayTexture||w.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Pt=R.get(w),oi=R.get(U),gt=R.get(Pt.__renderTarget),ci=R.get(oi.__renderTarget);ce.bindFramebuffer(N.READ_FRAMEBUFFER,gt.__webglFramebuffer),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Vi=0;Vi<ye;Vi++)zi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,R.get(w).__webglTexture,z,ze+Vi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,R.get(U).__webglTexture,de,Ct+Vi)),N.blitFramebuffer(we,Ue,xe,ue,Te,ht,xe,ue,N.DEPTH_BUFFER_BIT,N.NEAREST);ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||R.has(w)){const Pt=R.get(w),oi=R.get(U);ce.bindFramebuffer(N.READ_FRAMEBUFFER,Td),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ad);for(let gt=0;gt<ye;gt++)zi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,z,ze+gt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,z),dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oi.__webglTexture,de,Ct+gt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oi.__webglTexture,de),z!==0?N.blitFramebuffer(we,Ue,xe,ue,Te,ht,xe,ue,N.COLOR_BUFFER_BIT,N.NEAREST):dt?N.copyTexSubImage3D(ge,de,Te,ht,Ct+gt,we,Ue,xe,ue):N.copyTexSubImage2D(ge,de,Te,ht,we,Ue,xe,ue);ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(ge,de,Te,ht,Ct,xe,ue,ye,ut,Wt,St.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(ge,de,Te,ht,Ct,xe,ue,ye,ut,St.data):N.texSubImage3D(ge,de,Te,ht,Ct,xe,ue,ye,ut,Wt,St):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,Te,ht,xe,ue,ut,Wt,St.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,Te,ht,St.width,St.height,ut,St.data):N.texSubImage2D(N.TEXTURE_2D,de,Te,ht,xe,ue,ut,Wt,St);ce.pixelStorei(N.UNPACK_ROW_LENGTH,nn),ce.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),ce.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),ce.pixelStorei(N.UNPACK_SKIP_ROWS,Tn),ce.pixelStorei(N.UNPACK_SKIP_IMAGES,ri),de===0&&U.generateMipmaps&&N.generateMipmap(ge),ce.unbindTexture()},this.initRenderTarget=function(w){R.get(w).__webglFramebuffer===void 0&&M.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){O=0,W=0,F=null,ce.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const ol=72,r_=48;function cl(a=5){return{count:Math.max(1,Math.min(ol,Math.floor(a))),shields:0}}function nd(a,e){const t={...a},n=Math.max(0,Math.ceil(e)),i=Math.min(t.shields,n);return t.shields-=i,t.count=Math.max(0,t.count-n+i),t}function pr(a,e){if(a.count<=0)return{...a};let t={...a};switch(e.op){case"+":t.count+=e.value;break;case"-":t.count-=e.value;break;case"*":t.count*=e.value;break;case"/":t.count=Math.floor(t.count/Math.max(1,e.value));break;case"%":t.count=Math.floor(t.count*(1+e.value/100));break;case"shield":t.shields+=e.value;break;case"conditional":{const n=e.condition==="atMost"?t.count<=e.threshold:e.condition==="shield"?t.shields>=e.threshold:t.count>=e.threshold;t.count+=n?e.value:e.elseValue||0;break}case"damage":return nd(t,e.percent?t.count*e.value/100:e.value);default:throw new Error("Unknown operation: "+e.op)}return t.count=Math.max(0,Math.min(ol,Math.floor(t.count))),t.shields=Math.max(0,Math.min(r_,Math.floor(t.shields))),t}function mr(a,e,t=1){return a.count<=0?{...a}:nd(a,Math.max(0,Math.ceil(e/Math.max(1,t))-1))}function o_(a){const e=t=>t>=0?"+"+t:String(t);return a.op==="shield"?{title:"+"+a.value,caption:"PROTECTIONS",tone:"gold"}:a.op==="conditional"?{title:e(a.value),caption:"SI "+(a.condition==="atMost"?"FOULE ≤ ":a.condition==="shield"?"PROT. ≥ ":"FOULE ≥ ")+a.threshold,detail:"SINON "+e(a.elseValue||0),tone:"purple"}:a.op==="damage"?{title:"−"+a.value+(a.percent?"%":""),caption:{barrier:"BARRAGE",van:"FOURGON",bravm:"BRAV-M",debris:"OBSTACLES"}[a.kind]||"PERTES",detail:"PROTECTIONS UTILISÉES",tone:"red"}:{title:a.op==="%"?e(a.value)+"%":(a.op==="*"?"×":a.op==="/"?"÷":a.op==="-"?"−":"+")+a.value,caption:a.op==="*"?"MOBILISATION":a.op==="/"?"DISPERSION":a.op==="%"?"RALLIEMENT":a.op==="+"?"RENFORTS":"DÉPARTS",tone:["-","/"].includes(a.op)||a.value<0?"red":"blue"}}function c_(a){let e=a>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function l_(a){let e=[{...cl(a.startCount),path:[]}];for(const t of a.events)t.type==="enemy"?e=e.map(n=>({...mr(n,t.count,a.strength),path:n.path})):e=e.flatMap(n=>["left","right"].map(i=>({...pr(n,t[i]),path:[...n.path,i]})));return e.map(t=>({...t,capacity:t.count>0?(t.count+t.shields)*a.strength:0,survivors:a.bossHealth?mr(t,a.bossHealth,a.strength).count:t.count}))}function h_(a){let e=cl(a.startCount),t=[];for(const n of a.events){if(n.type==="enemy"){e=mr(e,n.count,a.strength);continue}const i=pr(e,n.left),s=pr(e,n.right),r=i.count>=s.count?"left":"right";e=r==="left"?i:s,t.push(r)}return{...e,path:t,capacity:e.count>0?(e.count+e.shields)*a.strength:0}}function u_({level:a=1,seed:e=1,startCount:t=5,strength:n=1}={}){a=Math.max(1,Math.floor(a)),n=Math.max(1,Math.floor(n));const i=cl(t).count,s=c_(e+a*7919+i*31);let r;for(let o=0;o<96;o++){const c=(v,T)=>v+Math.floor(s()*(T-v+1)),l=(v,T,S=!1)=>({op:"damage",kind:v,value:T,percent:S}),h=[[{op:"+",value:10},{op:"*",value:2}],[{op:"shield",value:c(10,18)},{op:"+",value:5}],[l("barrier",c(10,17)),l("bravm",c(28,42),!0)],[{op:"/",value:2},{op:"-",value:c(3,8)}],[{op:"conditional",condition:"atMost",threshold:c(10,17),value:c(23,32),elseValue:-5},{op:"%",value:40}],[{op:"*",value:2},{op:"shield",value:c(14,23)}],[l("van",c(15,24)),l("debris",c(35,50),!0)],[{op:"%",value:50},{op:"conditional",condition:"shield",threshold:8,value:c(22,32),elseValue:-4}],[{op:"+",value:10},{op:"shield",value:c(11,19)}],[{op:"+",value:5},{op:"%",value:25}]],u=[];h.forEach((v,T)=>{s()<.5&&v.reverse(),u.push({type:"choice",z:14+T*16,left:v[0],right:v[1]}),(T===4||T===7)&&u.push({type:"enemy",z:22+T*16,kind:T===4?"crs":"bac",count:c(5,9)+Math.min(8,Math.floor(a/3))})});const d={version:2,seed:e,level:a,startCount:i,strength:n,events:u,trackLength:180,bossHealth:0},f=l_(d),m=f.filter(v=>v.count>0).sort((v,T)=>v.capacity-T.capacity);if(!m.length)continue;const x=h_(d),g=m.at(-1).capacity,p=Math.min(.93,.77+a*.012),b=m[Math.floor((m.length-1)*p)].capacity;d.bossHealth=Math.max(b,x.capacity+1),d.bossHealth>g&&(d.bossHealth=b);const y=m.filter(v=>v.capacity>=d.bossHealth);if(d.proof={winningPaths:y.length,totalPaths:f.length,winningPath:y.at(-1).path,greedyWins:x.capacity>=d.bossHealth,minSurvivors:Math.min(...y.map(v=>mr(v,d.bossHealth,n).count))},r=d,!d.proof.greedyWins&&y.length/f.length<=.3&&y.length>=2)return d}if(!r)throw new Error("Unable to certify a playable level");return r}function id(a,e=!1){const t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,c=new Lt;let l=0;for(let h=0;h<a.length;++h){const u=a[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<a.length;++d){const f=a[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=a[d].attributes.position.count}c.setIndex(u)}for(const h in s){const u=qh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<r[h].length;++x)f.push(r[h][x][d]);const m=qh(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function qh(a){let e,t,n,i=-1,s=0;for(let l=0;l<a.length;++l){const h=a[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const r=new e(s),o=new Ut(r,t,n);let c=0;for(let l=0;l<a.length;++l){const h=a[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else r.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Xh(a,e){if(e===ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===pc||e===Tu){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===pc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}function d_(a,e){const t=new Map,n=[];for(const i of e){if(!i.isMesh||i.material.map){n.push(i);continue}const s=i.material.color.getHex()+":"+i.castShadow;t.has(s)||t.set(s,[]),t.get(s).push(i)}for(const i of t.values()){if(i.length<2){n.push(...i);continue}const s=i.map(l=>(l.updateMatrix(),l.geometry.clone().applyMatrix4(l.matrix))),r=id(s);if(!r){s.forEach(l=>l.dispose()),n.push(...i);continue}const o=i[0].material,c=new oe(r,o);c.receiveShadow=!0,c.castShadow=i[0].castShadow,c.userData.dynamic=!0,c.name="Paris static batch",a.add(c),n.push(c),s.forEach(l=>l.dispose()),i.forEach(l=>{a.remove(l),l.geometry.dispose(),l.material!==o&&l.material.dispose()})}e.splice(0,e.length,...n)}const jh=["gilets","genz","pompiers","infirmieres"];function f_(a,e=0){return a.op!=="+"||a.value<=0?null:a.bonusFaction||jh[e%jh.length]}function p_(a,e){if(!e)return null;const t={gilets:"GILETS JAUNES",genz:"GEN Z",pompiers:"POMPIERS",infirmieres:"INFIRMIÈRES"},n={gilets:"vest",genz:"tiktok",pompiers:"firefighter",infirmieres:"medical"};return{number:"+"+a.value,label:t[e],icon:n[e],faction:e}}const m_={gilets:{base:"#ffe000",dark:"#392e05",glow:16770304},genz:{base:"#ff2ba9",dark:"#30092e",glow:16727226},pompiers:{base:"#ff503b",dark:"#380c0b",glow:16730426},infirmieres:{base:"#8feaff",dark:"#0b3046",glow:9564159}};function Sc(a,e,t,n,i,s,r,o,c=1){a.beginPath(),a.roundRect(e,t,n,i,s),a.fillStyle=r,a.fill(),o&&(a.strokeStyle=o,a.lineWidth=c,a.stroke())}function g_(a,e,t,n){a.save(),a.translate(e,t),a.scale(n,n),a.fillStyle="#f4e600",a.strokeStyle="#211f16",a.lineWidth=6,a.beginPath(),a.moveTo(-46,-65),a.lineTo(-22,-76),a.lineTo(-7,-44),a.lineTo(7,-44),a.lineTo(22,-76),a.lineTo(46,-65),a.lineTo(58,-40),a.lineTo(39,-29),a.lineTo(41,69),a.lineTo(-41,69),a.lineTo(-39,-29),a.lineTo(-58,-40),a.closePath(),a.fill(),a.stroke(),a.fillStyle="#dce4df",a.fillRect(-40,6,80,13),a.fillRect(-40,37,80,13),a.fillStyle="#313538",a.fillRect(-3,-43,6,49),a.restore()}function b_(a,e,t,n){a.save(),a.translate(e,t),a.scale(n,n),a.font="900 120px Arial",a.textAlign="center",a.textBaseline="middle",a.fillStyle="#00f5ed",a.fillText("♪",-7,5),a.fillStyle="#ff276c",a.fillText("♪",8,13),a.fillStyle="#ffffff",a.fillText("♪",1,8),a.restore()}function x_(a,e,t,n){a.save(),a.translate(e,t),a.scale(n,n),a.fillStyle="#e63323",a.strokeStyle="#ffe176",a.lineWidth=5,a.beginPath(),a.arc(0,-18,46,Math.PI,Math.PI*2),a.lineTo(48,1),a.lineTo(-48,1),a.closePath(),a.fill(),a.stroke(),a.fillStyle="#f7dd32",a.fillRect(-8,-67,16,49),a.fillStyle="#b9161c",a.fillRect(-53,1,106,14),a.fillStyle="#ef3828",a.fillRect(-40,16,80,58),a.fillStyle="#e5eacd",a.fillRect(-40,37,80,11),a.restore()}function __(a,e,t,n){a.save(),a.translate(e,t),a.scale(n,n),Sc(a,-56,-58,112,116,16,"#ffffff","#cbd8e0",5),a.fillStyle="#df2b3d",a.fillRect(-13,-43,26,87),a.fillRect(-42,-12,84,26),a.restore()}const v_={vest:g_,tiktok:b_,firefighter:x_,medical:__};function y_(a,e,t){const n=p_(a,e);if(!n)return;const i=m_[e],s=document.createElement("canvas");s.width=512,s.height=512;const r=s.getContext("2d"),o=r.createLinearGradient(0,0,512,512);o.addColorStop(0,i.dark),o.addColorStop(1,"#101626"),Sc(r,8,8,496,496,28,o,i.base,13),r.fillStyle=i.base,r.globalAlpha=.13;for(let u=0;u<15;u++)r.beginPath(),r.arc(u*127%512,u*89%512,24+u%5*9,0,Math.PI*2),r.fill();r.globalAlpha=1,Sc(r,36,27,440,245,26,"rgba(0,0,0,.37)",i.base,3),v_[n.icon](r,256,145,1.05),r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.font="900 136px system-ui",r.strokeStyle="#080d16",r.lineWidth=17,r.strokeText(n.number,256,322),r.fillStyle="#ffffff",r.fillText(n.number,256,322),r.font="900 47px system-ui",r.lineWidth=8,r.strokeText(n.label,256,424),r.fillStyle=i.base,r.fillText(n.label,256,424);const c=new vi(s);c.colorSpace=ft,c.anisotropy=4;const l=new oe(new Tt(4.07,4.07),new tt({map:c,transparent:!0,depthWrite:!1,side:xt}));l.position.set(0,2.35,.38),t.add(l);const h=new oe(new ki(.37,.65,3),new tt({color:i.glow,transparent:!0,opacity:.9,depthWrite:!1}));return h.rotation.z=Math.PI,h.position.set(0,.1,1.05),t.add(h),t.userData.bonusPanel=l,l}const wc=["gilets","genz","lyceens","pompiers","infirmieres","agriculteurs"],M_=(a,e=0)=>new Ie({color:a,roughness:e?.34:.85,metalness:e}),xn=(a,e,t,n,i)=>{const s=new oe(e,M_(t));return n&&s.position.set(...n),i&&s.rotation.set(...i),s.castShadow=!0,a.add(s),s},Ke=(a,e,t,n,i,s)=>xn(a,new wt(t,n,i),e,s),as=(a,e,t,n,i,s,r=8)=>xn(a,new Qe(t,n,i,r),e,s),bo=(a,e,t,n)=>xn(a,new et(t,10,8),e,n);function S_(a=0){return sd(wc[a%wc.length],a)}function ir(a="crs",e=0){return sd(a,e)}function sd(a,e){const t=new at,n=wc.includes(a),i=[5860226,8077659,3300974,6116427,5397879,7098937];let s=n?i[e%i.length]:a==="crs"?2107961:a==="bravm"?2634561:4604744,r=n?3423820:2107956;const o=[14465435,12028018,14728354,10449246][e%4];if(xn(t,new Qt(.145,.47,4,6),s,[0,.72,0]),bo(t,o,.18,[0,1.25,0]),xn(t,new Qt(.07,.25,4,6),r,[-.105,.25,0]),xn(t,new Qt(.07,.25,4,6),r,[.105,.25,0]),xn(t,new Qt(.057,.24,4,6),s,[-.25,.76,0],[0,0,.3]),xn(t,new Qt(.057,.24,4,6),s,[.25,.76,0],[0,0,-.3]),a==="gilets"){Ke(t,15648046,.4,.48,.28,[0,.81,0]),Ke(t,16774572,.42,.045,.3,[0,.75,-.005]),Ke(t,16774572,.42,.045,.3,[0,.93,-.005]),Ke(t,7632764,.13,.14,.17,[0,1.46,0]),Ke(t,2634557,.31,.39,.17,[0,.81,.23]);for(const h of[-1,1])Ke(t,1712683,.065,.45,.065,[h*.155,.85,-.17]),Ke(t,15263686,.075,.39,.022,[h*.12,.82,-.159]);Ke(t,2895925,.32,.08,.2,[0,.63,.25]);const c=as(t,7754548,.018,.018,1.03,[.43,1.24,-.05],7);c.rotation.z=-.22;const l=new at;l.position.set(.52,1.74,-.05);for(let h=0;h<3;h++)Ke(l,[1789882,16053750,14230327][h],.16,.35,.025,[.08+h*.16,0,0]);t.add(l)}else if(a==="genz"||a==="lyceens")Ke(t,a==="genz"?8932522:4685470,.34,.15,.32,[0,1.02,0]),Ke(t,2830655,.21,.3,.19,[.14,.61,.18]),bo(t,e%2?5254187:5127991,.19,[0,1.39,0]);else if(a==="pompiers")Ke(t,14260771,.39,.51,.29,[0,.79,0]),Ke(t,15198394,.43,.07,.32,[0,.76,.01]),as(t,13280830,.22,.2,.2,[0,1.48,0]),Ke(t,14540239,.39,.05,.32,[0,1.55,0]);else if(a==="infirmieres")Ke(t,15462891,.4,.49,.29,[0,.8,0]),Ke(t,6464418,.19,.07,.31,[0,.85,-.01]),Ke(t,12664137,.05,.2,.32,[0,.84,-.025]),Ke(t,15462891,.2,.08,.2,[0,1.43,0]);else if(a==="agriculteurs")Ke(t,6522444,.38,.46,.3,[0,.8,0]),as(t,11897932,.26,.25,.06,[0,1.48,0]),as(t,11040835,.16,.17,.17,[0,1.55,0]);else if(Ke(t,a==="bac"?4014921:1911613,.4,.47,.27,[0,.82,0]),Ke(t,8754342,.3,.06,.29,[0,.95,-.01]),a==="crs"){as(t,2437958,.21,.2,.16,[0,1.45,0]),Ke(t,7967400,.38,.11,.04,[0,1.27,-.18]);const l=xn(t,new wt(.43,.69,.055),9613763,[.36,.65,-.19],[0,0,-.12]);l.material.transparent=!0,l.material.opacity=.82,Ke(t,3359575,.21,.09,.06,[.4,.89,-.24])}else a==="bravm"?(as(t,1055527,.23,.22,.21,[0,1.44,0]),Ke(t,7440538,.34,.07,.07,[0,1.31,-.19])):(Ke(t,4418947,.14,.14,.15,[-.22,.89,0]),bo(t,e%2?2960696:3947064,.2,[0,1.39,0]));if(a==="bravm"){const c=new at;c.userData.legacyMotorcycle=!0,t.add(c);for(const l of[-.34,.37]){const h=xn(c,new Fn(.19,.073,7,10),1448996,[l,.2,.05],[0,Math.PI/2,0]);h.castShadow=!1}Ke(c,4873588,.7,.17,.25,[0,.35,0]),Ke(c,2766408,.31,.17,.33,[-.09,.48,0]),Ke(c,10602188,.11,.15,.08,[.49,.47,-.02]),Ke(c,4546676,.1,.16,.42,[.26,.51,0])}return t.userData.faction=a,t}function ad(){const a=new at;Ke(a,15791091,2.55,1.3,1.22,[0,.92,0]),Ke(a,12177631,.85,.48,1.24,[.82,1.26,-.01]),Ke(a,2636886,2.53,.15,1.26,[0,.79,0]),Ke(a,3232890,1.8,.3,1.27,[-.24,1.19,0]);for(const e of[-.78,.83])for(const t of[-.52,.52]){const n=xn(a,new Qe(.27,.27,.14,10),1515824,[e,.36,t],[Math.PI/2,0,0]);n.castShadow=!1}return Ke(a,3569372,.26,.13,.25,[.03,1.71,-.28]),Ke(a,14500955,.26,.13,.25,[.03,1.71,.28]),a.userData.faction="fourgon",a}function Rr(a){const e=new Map,t=new Map,n=a.clone();return rd(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function rd(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)rd(a.children[n],e.children[n],t)}class Gi extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new R_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new Kh(t,He.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kh(t,He.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new z_(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Zs.extractUrlBase(e);r=Zs.resolveURL(l,this.path)}else r=Zs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new qu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===od){try{r[He.KHR_BINARY_GLTF]=new V_(e)}catch(u){i&&i(u);return}s=JSON.parse(r[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new tv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:r[u]=new T_;break;case He.KHR_DRACO_MESH_COMPRESSION:r[u]=new H_(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:r[u]=new W_;break;case He.KHR_MESH_QUANTIZATION:r[u]=new q_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function w_(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function It(a,e,t){const n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class E_{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],cn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ju(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qp(h),l.distance=u;break;case"spot":l=new Hp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Cn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class T_{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return tt}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],cn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ft))}return Promise.all(i)}}class A_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class R_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(s,s)}return Promise.all(i)}}class C_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class P_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class D_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],cn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ft)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class I_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class L_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(s[0],s[1],s[2],cn),Promise.all(i)}}class F_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class N_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(s[0],s[1],s[2],cn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ft)),Promise.all(i)}}class U_{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class k_{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){const n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class O_{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class B_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class G_{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}}class Kh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class z_{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const x=new ke,g=new C,p=new yt,b=new C(1,1,1),y=new ha(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&b.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(g,p,b));for(const v in c)if(v==="_COLOR_0"){const T=c[v];y.instanceColor=new ra(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);rt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const od="glTF",ks=12,Jh={JSON:1313821514,BIN:5130562};class V_{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==od)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ks,s=new DataView(e,ks);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===Jh.JSON){const l=new Uint8Array(e,ks+r,o);this.content=n.decode(l)}else if(c===Jh.BIN){const l=ks+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class H_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const u=Ec[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=Ec[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=fs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}u(f)},o,l,cn,d)})})}}class W_{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class q_{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class cd extends Ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,b=1-g,y=p-d+u;for(let v=0;v!==o;v++){const T=r[x+v+o],S=r[x+v+c]*h,A=r[m+v+o],_=r[m+v]*h;s[v]=b*T+y*S+g*A+p*_}return s}}const X_=new yt;class j_ extends cd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return X_.fromArray(s).normalize().toArray(s),s}}const dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yh={9728:Bt,9729:Nt,9984:_u,9985:Za,9986:Ws,9987:In},Zh={33071:Dn,33648:rr,10497:yi},xo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ec={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},K_={CUBICSPLINE:void 0,LINEAR:ia,STEP:na},_o={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J_(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),a.DefaultMaterial}function Ri(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Y_(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function Z_(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $_(a){let e;const t=a.extensions&&a.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vo(t.attributes):e=a.indices+":"+vo(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+vo(a.targets[n]);return e}function vo(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Tc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Q_(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ev=new ke;class tv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new w_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new ua(this.options.manager):this.textureLoader=new Kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ri(s,o,i),Cn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Zs.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=xo[i.type],o=fs[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new Ut(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],c=xo[i.type],l=fs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let x,g;if(f&&f!==u){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(b);y||(x=new l(o,p*f,i.count*f/h),y=new Kf(x,f/h),t.cache.add(b,y)),g=new jc(y,c,d%f/h,m)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),g=new Ut(x,c,m);if(i.sparse!==void 0){const p=xo.SCALAR,b=fs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new b(r[1],y,i.sparse.count*p),S=new l(r[2],v,i.sparse.count*c);o!==null&&(g=new Ut(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,_=T.length;A<_;A++){const E=T[A];if(g.setX(E,S[A*c]),c>=2&&g.setY(E,S[A*c+1]),c>=3&&g.setZ(E,S[A*c+2]),c>=4&&g.setW(E,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Yh[d.magFilter]||Nt,h.minFilter=Yh[d.minFilter]||In,h.wrapS=Zh[d.wrapS]||yi,h.wrapT=Zh[d.wrapT]||yi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==Nt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){const g=new Gt(x);g.needsUpdate=!0,d(g)}),t.load(Zs.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Cn(u,r),u.userData.mimeType=r.mimeType||Q_(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(r);r=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Nu,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Fu,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ie}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},c=s.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){const u=i[He.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],cn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=xt);const h=s.alphaMode||_o.OPAQUE;if(h===_o.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===_o.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==tt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==tt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==tt){const u=s.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],cn)}return s.emissiveTexture!==void 0&&r!==tt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ft)),Promise.all(l).then(function(){const u=new r(o);return s.name&&(u.name=s.name),Cn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ri(i,u,s),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return $h(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=$_(l),u=i[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=$h(new Lt,l,t),i[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?J_(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],g=r[f];let p;const b=l[f];if(g.mode===dn.TRIANGLES||g.mode===dn.TRIANGLE_STRIP||g.mode===dn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new $f(x,b):new oe(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===dn.TRIANGLE_STRIP?p.geometry=Xh(p.geometry,Tu):g.mode===dn.TRIANGLE_FAN&&(p.geometry=Xh(p.geometry,pc));else if(g.mode===dn.LINES)p=new sp(x,b);else if(g.mode===dn.LINE_STRIP)p=new Zc(x,b);else if(g.mode===dn.LINE_LOOP)p=new ap(x,b);else if(g.mode===dn.POINTS)p=new rp(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Z_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Cn(p,s),g.extensions&&Ri(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ri(i,u[0],s),u[0];const d=new at;s.extensions&&Ri(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(xc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){o.push(u);const d=new ke;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Jc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(m),h.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let y=0,v=d.length;y<v;y++){const T=d[y],S=f[y],A=m[y],_=x[y],E=g[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const P=n._createAnimationTracks(T,S,A,_,E);if(P)for(let D=0;D<P.length;D++)p.push(P[D])}const b=new vc(s,void 0,p);return Cn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ev)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,m=u[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Lu:l.length>1?h=new at:l.length===1?h=l[0]:h=new rt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=r),Cn(h,s),s.extensions&&Ri(n,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new at;n.name&&(s.name=i.createUniqueName(n.name)),Cn(s,n),n.extensions&&Ri(t,s,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){const d=c[h];d.parent!==null?s.add(Rr(d)):s.add(d)}const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof On||d instanceof Gt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}mi[s.path]===mi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(mi[s.path]){case mi.weights:h=_s;break;case mi.rotation:h=vs;break;case mi.translation:case mi.scale:h=ys;break;default:switch(n.itemSize){case 1:h=_s;break;case 2:case 3:default:h=ys;break}break}const u=i.interpolation!==void 0?K_[i.interpolation]:ia,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){const x=new h(c[f]+"."+mi[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),r.push(x)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tc(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vs?j_:cd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nv(a,e,t){const n=e.attributes,i=new At;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const h=Tc(fs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new C,c=new C;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const x=Tc(fs[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Gn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function $h(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(const r in n){const o=Ec[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return qe.workingColorSpace!==cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Cn(a,e),nv(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Y_(a,e.targets,t):a})}const iv=new Gi;let Ha;function sv(){return Ha||(Ha=new Promise((a,e)=>{iv.load("/convergence-runner-lab/convergence/assets/tge-kenney/car-kit/van.glb",t=>a(t.scene),void 0,e)}).catch(a=>{throw Ha=null,a})),Ha}function ld(a,e){sv().then(t=>{if(!a.parent||!e.parent)return;const n=t.clone(!0),s=new At().setFromObject(n).getSize(new C);if(s.y<=0||!Number.isFinite(s.y))return;n.scale.setScalar(1.65/s.y),n.updateMatrixWorld(!0);const r=new At().setFromObject(n),o=r.getCenter(new C);n.position.set(-o.x,-r.min.y,-o.z);const c=new at;c.position.copy(e.position),c.rotation.copy(e.rotation),c.add(n),c.userData.dynamic=!0,a.add(c),e.visible=!1,console.info("Kenney boss van replacement active")}).catch(t=>console.warn("Kenney boss van fallback retained",t==null?void 0:t.message))}const av=new Gi;let Wa;const hd=new Set;function ud(){return Wa||(Wa=new Promise((a,e)=>{av.load("/convergence-runner-lab/convergence/assets/kenney-racing/vehicle-motorcycle.glb",t=>a(t.scene),void 0,e)}).catch(a=>{throw Wa=null,a})),Wa}function Ac(a){a.userData.motorcycleRequested||(a.userData.motorcycleRequested=!0,ud().then(e=>{var f;if(!a.parent)return;const t=e.clone(!0),i=new At().setFromObject(t).getSize(new C),s=Math.max(i.x,i.z);if(!Number.isFinite(s)||s<=0)return;t.scale.setScalar(1.72/s),i.x>i.z&&(t.rotation.y=-Math.PI/2),t.updateMatrixWorld(!0);const o=new At().setFromObject(t),c=o.getCenter(new C);t.position.set(-c.x,-o.min.y,-c.z),t.traverse(m=>{!m.isMesh||!m.material||(m.material=m.material.clone(),m.material.color.setHex(/wheel/i.test(m.name)?2106410:3427956),m.material.roughness=.49)});const l=new at;l.userData.motorcycleVisual=!0,l.add(t);const h=new Ie({color:2857983,emissive:1406703,emissiveIntensity:2,roughness:.23}),u=new Ie({color:5667998,transparent:!0,opacity:.69,metalness:.3,roughness:.2});for(const m of[-1,1]){const x=new oe(new wt(.13,.085,.12),h);x.position.set(m*.23,1.01,.22),l.add(x)}const d=new oe(new wt(.45,.29,.025),u);d.position.set(0,.91,.31),d.rotation.x=-.3,l.add(d),a.add(l);for(const m of a.children)(f=m.userData)!=null&&f.legacyMotorcycle&&(m.visible=!1);hd.add(l),a.userData.kenneyMotorcycle=l,console.info("Kenney BRAV-M motorcycle active")}).catch(e=>console.warn("Kenney motorcycle fallback",e==null?void 0:e.message)))}function rv(){hd.clear()}function ov(){return ud()}const cv=new Gi;let qa,Rc=0;const ll=[],lv=window.innerWidth<600?24:40,gr={crs:{coat:2306889,vest:1714234,helmet:2110026},bac:{coat:3422528,vest:1449254,helmet:2764083},bravm:{coat:2239805,vest:1252908,helmet:1317927}},Cc=(a,e=0)=>new Ie({color:a,roughness:e?.4:.77,metalness:e});function jt(a,e,t,n){const i=new oe(new wt(...t),Cc(e));return i.position.set(...n),i.castShadow=!0,a.add(i),i}const Qh=new Map;function yo(a,e,t,n=.36,i=.13){let s=Qh.get(e);if(!s){const o=document.createElement("canvas");o.width=256,o.height=96;const c=o.getContext("2d");c.fillStyle="#152236",c.fillRect(0,0,256,96),c.strokeStyle="#9cafc5",c.lineWidth=5,c.strokeRect(3,3,250,90),c.textAlign="center",c.textBaseline="middle",c.font="900 54px Arial,sans-serif",c.fillStyle="#f9fbff",c.fillText(e,128,49),s=new tt({map:new vi(o),transparent:!1,side:xt}),Qh.set(e,s)}const r=new oe(new Tt(n,i),s);r.position.set(...t),a.add(r)}function hv(a,e){const t=gr[e]||gr.crs,n=new at;jt(n,t.vest,[.42,.48,.29],[0,1.1,0]),jt(n,1186342,[.37,.055,.3],[0,1.26,0]);for(const r of[-1,1])jt(n,1055269,[.075,.37,.31],[r*.21,1.08,0]),jt(n,6714760,[.07,.055,.32],[r*.19,1.19,0]);const i=new oe(new et(.205,18,12,0,Math.PI*2,0,Math.PI*.63),Cc(t.helmet,.18));i.position.set(0,1.57,0),i.castShadow=!0,n.add(i),jt(n,1516335,[.38,.055,.23],[0,1.46,.09]);const s=jt(n,8428714,[.35,.16,.025],[0,1.44,.19]);if(s.material=s.material.clone(),s.material.transparent=!0,s.material.opacity=.63,e==="crs"){const r=jt(n,7572637,[.53,.79,.045],[.27,.8,.33]);n.userData.combatShield=r,r.material=r.material.clone(),r.material.transparent=!0,r.material.opacity=.72,r.material.metalness=.08,jt(n,1319991,[.48,.15,.052],[.27,.85,.36]),jt(n,11977929,[.49,.04,.055],[.27,1.17,.35]),jt(n,11977929,[.49,.04,.055],[.27,.45,.35]),yo(n,"CRS",[.27,.88,.392],.37,.14)}else e==="bac"?(jt(n,1383202,[.38,.12,.025],[0,1.15,.16]),jt(n,3623777,[.18,.19,.1],[-.26,.98,-.03]),yo(n,"BAC",[0,1.15,.179],.31,.13)):(jt(n,2372678,[.32,.12,.23],[0,.94,-.06]),yo(n,"BRAV-M",[0,1.16,.179],.38,.11));if(e==="crs"||e==="bac"){jt(n,2238509,[.15,.16,.55],[-.29,1.1,.49]),jt(n,3687243,[.12,.09,.18],[-.29,1.21,.45]),jt(n,1383200,[.1,.25,.11],[-.29,.95,.36]);const r=new oe(new Qe(.047,.055,.54,8),Cc(1054236,.15));r.rotation.x=Math.PI/2,r.position.set(-.29,1.1,.76),n.add(r);const o=new rt;o.position.set(-.29,1.1,1.05),n.add(o),n.userData.lbdMuzzle=o}return a.add(n),n}function dd(){return qa||(qa=new Promise((a,e)=>cv.load("/convergence-runner-lab/convergence/assets/quaternius/animated-human.glb",a,void 0,e)).catch(a=>{throw qa=null,a})),qa}function sr(a,e="crs"){Rc>=lv||(Rc++,dd().then(t=>{var f;if(!a.parent)return;const n=Rr(t.scene),i=new rl(n),s=t.animations.find(m=>m.name==="Idle");s&&(i.clipAction(s).play(),i.update(.001)),n.updateMatrixWorld(!0),n.traverse(m=>{m.isSkinnedMesh&&(m.computeBoundingBox(),m.frustumCulled=!1)});const o=new At().setFromObject(n).getSize(new C).y;if(o<=0||!Number.isFinite(o))return;n.scale.setScalar(1.64/o),n.rotation.y=Math.PI/2,n.updateMatrixWorld(!0);const c=new At().setFromObject(n),l=c.getCenter(new C);n.position.set(-l.x,-c.min.y,-l.z);const h=gr[e]||gr.crs;n.traverse(m=>{if(!m.isSkinnedMesh)return;const x=m.material.clone();x.map=null,x.color.setHex(h.coat),x.roughness=.83,x.needsUpdate=!0,m.material=x});const u=new at;u.add(n);const d=hv(u,e);u.userData.combatShield=d.userData.combatShield||null,u.userData.lbdMuzzle=d.userData.lbdMuzzle||null;for(const m of a.children)(f=m.userData)!=null&&f.motorcycleVisual||(m.visible=!1);a.add(u),ll.push({mixer:i,officer:a}),a.userData.policeModel=u}).catch(t=>console.warn("Police model fallback",t==null?void 0:t.message)))}function uv(){Rc=0,ll.length=0}function dv(){return dd()}function fv(a){for(const e of ll){let t=e.officer,n=!0;for(;t;){if(!t.visible){n=!1;break}t=t.parent}n&&e.mixer.update(a)}}const pv={blue:[1149930,6877183],red:[15151947,16750707],gold:[16755737,16773271],purple:[7947493,15706367]};function mv(a,e,t,n,i){const s=f_(a),r=o_(a),[o,c]=pv[r.tone],l=new at;l.position.set(e,0,-t),l.userData.dynamic=!0;const h=new Ie({color:o,roughness:.27,metalness:.25}),u=new Ie({color:c,emissive:c,emissiveIntensity:.7,roughness:.3}),d=new Ie({color:1319478,roughness:.4}),f=(S,A,_,E,P,D,I)=>{const O=new oe(new wt(S,A,_),I);return O.position.set(E,P,D),l.add(O),O},m=a.op==="damage";l.userData.lbdOccluder=m&&["van","barrier","debris"].includes(a.kind);const x=m?3.1:3.85;for(const S of[-1,1]){f(.42,x,.45,S*2.16,x/2,0,h),f(.64,.3,.68,S*2.16,.15,0,d),f(.65,.28,.65,S*2.16,x-.06,0,h),f(.09,x-.8,.06,S*2.16,x/2,.26,u);for(const A of[.46,x-.42])f(.53,.1,.54,S*2.16,A,0,u)}f(4.45,.3,.44,0,x,0,h),f(3.8,.06,.04,0,x-.04,.26,u);const g=new oe(new Tt(4,x-.45),new Ie({color:o,emissive:o,emissiveIntensity:.12,transparent:!0,opacity:m?.045:.12,depthWrite:!1,side:xt}));g.position.set(0,x/2,0),l.add(g);const p=document.createElement("canvas");p.width=512,p.height=256;const b=p.getContext("2d");b.fillStyle="rgba(12,24,42,.92)",b.beginPath(),b.roundRect(8,8,496,240,24),b.fill(),b.strokeStyle="#"+new Ae(c).getHexString(),b.lineWidth=7,b.stroke(),b.textAlign="center",b.textBaseline="middle",b.lineJoin="round",b.font="900 110px system-ui",b.lineWidth=9,b.strokeStyle="#08101e",b.strokeText(r.title,256,81),b.fillStyle="#ffffff",b.fillText(r.title,256,81),b.font="900 30px system-ui",b.fillStyle="#"+new Ae(c).getHexString(),b.fillText(r.caption,256,167),r.detail&&(b.font="700 22px system-ui",b.fillStyle="#f5f7ff",b.fillText(r.detail,256,211));const y=new vi(p);y.colorSpace=ft;const v=new oe(new Tt(3.95,1.97),new tt({map:y,transparent:!0,depthWrite:!1}));v.position.set(0,m?3.35:2.92,.28),l.add(v),s&&(v.visible=!1,y_(a,s,l));const T=new oe(new Tt(4.1,2),new tt({color:o,transparent:!0,opacity:.16,depthWrite:!1}));if(T.rotation.x=-Math.PI/2,T.position.set(0,.07,.15),l.add(T),m)if(a.kind==="van"){const S=ad();S.scale.setScalar(.78),S.position.y=.05,l.add(S),ld(l,S)}else if(a.kind==="bravm"){const S=ir("bravm",0);S.rotation.y=Math.PI/2,S.position.y=.04,l.add(S),sr(S,"bravm"),Ac(S)}else{f(3.45,.85,.48,0,.68,0,new Ie({color:5793141,roughness:.8}));const S=new Ie({color:16765536});for(let A=0;A<7;A++)f(.28,.2,.52,-1.4+A*.46,1.02,0,A%2?d:S);for(const A of[-1,1])f(.35,.24,1.1,A*1.2,.12,0,d);if(a.kind==="debris")for(let A=0;A<3;A++){const _=new oe(new ki(.23,.65,12),h);_.position.set((A-1)*.9,.33,.8),l.add(_)}}return n.add(l),i.push(l),g.userData.root=l,g}function gv(a,e,t){for(const n of a){const i=n.z-e;for(const s of["leftMesh","rightMesh"]){const r=n[s],o=r==null?void 0:r.userData.root;o&&(o.visible=!n.passed&&i<62&&i>-8,o.visible&&(r.material.emissiveIntensity=.14+Math.sin(t*2.5+n.z)*.05))}}}function bv(a,e,t){const n=new Gi,i="/convergence-runner-lab/convergence/assets/kenney/road-side.glb";n.load(i,s=>{const r=s.scene,c=new At().setFromObject(r).getSize(new C),l=Math.max(c.x,c.y,c.z);if(!Number.isFinite(l)||l===0){console.warn("Kenney road-side GLB empty");return}const h=1.4/l;for(let u=18;u<e;u+=35)for(const d of[-1,1]){const f=r.clone(!0);f.scale.setScalar(h),f.position.set(d*6.3,.3,-u),f.rotation.y=d>0?0:Math.PI,f.userData.dynamic=!0,a.add(f),t.push(f)}console.info("Kenney GLB roadside props integrated",i)},void 0,s=>console.warn("Optional Kenney GLB unavailable:",(s==null?void 0:s.message)||s))}const xv=[["car-kit/police.glb",-8.5,0,38,3.4],["car-kit/van.glb",8.7,0,67,3.8],["car-kit/ambulance.glb",-8.5,0,105,3.5],["car-kit/firetruck.glb",8.7,0,145,4.2],["city-kit-roads/construction-barrier.glb",-5.95,0,24,1.7],["city-kit-roads/traffic-light.glb",6.4,0,52,4],["city-kit-roads/light-curved.glb",-6.5,0,85,4.5],["city-kit-commercial/building-a.glb",-19,0,65,13],["city-kit-commercial/building-b.glb",19,0,112,13],["blocky-characters/character-a.glb",-6.2,0,45,1.75],["blocky-characters/character-b.glb",6.2,0,95,1.75],["blocky-characters/character-c.glb",-6.2,0,132,1.75]],_v=new Gi,Mo=new Map;function vv(a){return Mo.has(a)||Mo.set(a,new Promise((e,t)=>{_v.load("/convergence-runner-lab/convergence/assets/tge-kenney/"+a,n=>e(n.scene),void 0,t)})),Mo.get(a)}function yv(a,e,t){const n={active:!0};t.push({userData:{assetBatch:n}});for(const[i,s,r,o,c]of xv)o>=e-10||vv(i).then(l=>{if(!n.active)return;const h=l.clone(!0),d=new At().setFromObject(h).getSize(new C);if(!Number.isFinite(d.y)||d.y<=0)return;h.scale.setScalar(c/d.y),h.updateMatrixWorld(!0);const f=new At().setFromObject(h);h.position.set(s-f.getCenter(new C).x,r-f.min.y,-o-f.getCenter(new C).z),h.userData.dynamic=!0,h.traverse(m=>{m.isMesh&&(m.castShadow=!1,m.receiveShadow=!0)}),a.add(h),t.push(h),console.info("Kenney asset displayed",i)}).catch(l=>console.warn("Kenney optional asset failed",i,l==null?void 0:l.message))}function Mv(a){var e;for(const t of a)(e=t.userData)!=null&&e.assetBatch&&(t.userData.assetBatch.active=!1)}function Sv(a){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#747779",t.fillRect(0,0,256,256);let n=193847;const i=()=>(n=Math.imul(1664525,n)+1013904223>>>0,n/4294967296);for(let r=0;r<9800;r++){const o=35+Math.floor(i()*170);t.fillStyle="rgba("+o+","+o+","+o+","+(.025+i()*.13)+")";const c=.35+i()*1.9;t.fillRect(i()*256,i()*256,c,c)}for(let r=0;r<12;r++){const o=i()*256,c=i()*256;t.strokeStyle="rgba(35,40,43,0.11)",t.lineWidth=.35+i()*.75,t.beginPath(),t.moveTo(o,c),t.bezierCurveTo(o+i()*18,c+13,o-8,c+26,o+i()*24,c+39),t.stroke()}const s=new vi(e);return s.wrapS=yi,s.wrapT=yi,s.repeat.set(1.9,Math.max(8,a/6)),s.anisotropy=4,s.colorSpace=ft,s.needsUpdate=!0,s}const Jt={limestone:new Ie({color:14470067,roughness:.91}),trim:new Ie({color:15785923,roughness:.91}),slate:new Ie({color:4609644,roughness:.92}),glass:new Ie({color:2637400,roughness:.28,metalness:.22}),iron:new Ie({color:2108475,metalness:.64,roughness:.37}),gold:new Ie({color:16573088,emissive:16763238,emissiveIntensity:1.25,roughness:.4}),foliage:new Ie({color:5731134,roughness:.95})},wv=new wt(1,1,1);function Yt(a,e,t){if(!t.length)return;const n=new ha(wv,e,t.length),i=new rt;t.forEach(([s,r,o,c,l,h,u=0,d=0,f=0],m)=>{i.position.set(s,r,o),i.scale.set(c,l,h),i.rotation.set(u,d,f),i.updateMatrix(),n.setMatrixAt(m,i.matrix)}),n.instanceMatrix.needsUpdate=!0,n.castShadow=!1,n.receiveShadow=!0,a.add(n)}function Ev(a,e,t){const n=new at;n.name="CONVERGENCE_Paris_Streetscape",n.userData.dynamic=!0;const i=[],s=[],r=[],o=[],c=[],l=[];for(let A=0;A<e+35;A+=17){const E=4+Math.floor(A/17)%4*1.8-1.5;for(const P of[-1,1]){const D=P*(16+Math.abs(A%3)),I=D-P*3.83;s.push([I,E-.48,-A,.28,.2,9.1]),s.push([I,1.65,-A,.2,.1,9.1]);for(const O of[-1,1])c.push([D+O*2,E+.34,-A,4.28,.16,9.2,0,0,O*.32]);for(let O=0;O<4;O++){const W=.94+O*1.59;if(W>E-.96)break;for(const F of[-3.16,-1.06,1.06,3.16])i.push([I-P*.055,W,-A+F,.1,1.13,.8]),s.push([I-P*.11,W-.66,-A+F,.19,.11,.98]),(O===1||O===2)&&(r.push([I-P*.28,W-.52,-A+F,.48,.065,1]),o.push([I-P*.45,W-.31,-A+F,.04,.49,1]))}for(const O of[-2.9,0,2.9])l.push([I-P*.025,E+.55,-A+O,.16,.54,.56])}}Yt(n,Jt.glass,i),Yt(n,Jt.trim,s),Yt(n,Jt.limestone,r),Yt(n,Jt.iron,o),Yt(n,Jt.slate,c),Yt(n,Jt.glass,l);const h=[];for(let A=0;A<e;A+=2.35)for(const _ of[-1,1])h.push([_*5.65,.76,-A,.12,1.05,.12]);for(let A=0;A<e;A+=2.35)for(const _ of[-1,1])h.push([_*5.65,.78,-A-.58,.045,.045,1.3,.55,0,0]),h.push([_*5.65,.78,-A-.58,.045,.045,1.3,-.55,0,0]);Yt(n,Jt.iron,h);const u=[],d=[];for(let A=4;A<e;A+=23)for(const _ of[-1,1])u.push([_*5.9,-1.4,-A,1.15,3.6,2]),d.push([_*5.9,.2,-A,1.5,.5,2.5]);Yt(n,Jt.limestone,u),Yt(n,Jt.trim,d);const f=[],m=[],x=[],g=[],p=[];for(let A=9;A<e;A+=18)for(const _ of[-1,1]){const E=_*6.05,P=-A;f.push([E,.41,P,.38,.82,.38]),m.push([E,2.25,P,.11,3.35,.11]),x.push([E,4.16,P,.4,.075,.4]),p.push([E,4.46,P,.29,.5,.29]),g.push([E,4.77,P,.45,.16,.45]),g.push([E,4.91,P,.2,.15,.2]),m.push([E,5.06,P,.065,.18,.065]);for(const D of[-.55,.55])x.push([E+D*.5,3.88,P,.65,.065,.065]),p.push([E+D,4.1,P,.18,.32,.18]),g.push([E+D,4.31,P,.29,.1,.29]);for(const D of[-.16,.16])m.push([E+D,4.43,P,.04,.56,.04])}Yt(n,Jt.iron,f),Yt(n,Jt.iron,m),Yt(n,Jt.iron,x),Yt(n,Jt.gold,p),Yt(n,Jt.iron,g);const b=[],y=[];for(let A=10;A<e+20;A+=25)for(const _ of[-1,1]){const E=_*(25+A%3*2),P=-A;b.push([E,.5,P,.38,4,.38]),y.push([E,4.55,P,3.9,3.4,3.75])}Yt(n,new Ie({color:7889741,roughness:1}),b);const v=new el(1,1),T=new ha(v,Jt.foliage,y.length),S=new rt;y.forEach(([A,_,E,P,D,I],O)=>{S.position.set(A,_,E),S.scale.set(P/2,D/2,I/2),S.updateMatrix(),T.setMatrixAt(O,S.matrix)}),T.instanceMatrix.needsUpdate=!0,n.add(T),a.add(n),t.push(n),console.info("Paris architecture + Seine bridge lanterns ready",i.length,p.length)}class Tv{constructor(e,t){this.scene=e,this.game=t,this.gates=[],this.obstacles=[],this.enemies=[],this.boss=null,this.meshes=[]}clear(){Mv(this.meshes),this.gates=[],this.obstacles=[],this.enemies=[],this.boss=null,this.meshes.forEach(e=>{var t;e.isObject3D&&(this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{var i;(i=n.map)==null||i.dispose(),n.dispose()}):((t=e.material.map)==null||t.dispose(),e.material.dispose())))}),this.meshes=[]}generate(e,t){uv(),rv(),this.plan=u_({level:e,seed:this.game.levelSeed??e*20261019,startCount:this.game.getStartingCrowdSize(),strength:this.game.strengthUpgrade}),t=this.plan.trackLength,this.createTrack(t),d_(this.scene,this.meshes),this.createGates(e,t),this.createObstacles(e,t),this.createEnemies(e,t),this.createBoss(e,t),Ev(this.scene,t,this.meshes),bv(this.scene,t,this.meshes),yv(this.scene,t,this.meshes)}updateVisibility(e){if(gv(this.gates,e,performance.now()/1e3),this.game.state==="fighting"||this.game.state==="paused"&&this.game.pausedState==="fighting"){for(const n of this.gates)if(!(Math.abs(n.z-e)>18))for(const i of[n.leftMesh,n.rightMesh])i!=null&&i.userData.root&&(i.userData.root.visible=!1)}for(const n of this.enemies){const i=n.z-e,s=i<72&&i>-14;n.meshGroup&&(n.meshGroup.visible=s),n.labelMesh&&(n.labelMesh.visible=s)}if(this.boss){const n=this.boss.isDefeating||this.boss.z-e<75;this.boss.meshGroup&&(this.boss.meshGroup.visible=n),this.boss.labelMesh&&(this.boss.labelMesh.visible=n)}}createTrack(e){const t=(s,r,o,c,l,h=!1)=>{const u=new oe(s,new Ie({color:r,roughness:.87}));return u.position.set(o,c,l),u.userData.dynamic=!0,u.receiveShadow=!0,u.castShadow=h,this.scene.add(u),this.meshes.push(u),u},n=t(new Tt(11,e+24),6844795,0,.025,-e/2);n.rotation.x=-Math.PI/2,n.material.color.set(16777215),n.material.map=Sv(e),n.material.roughness=.96;const i=t(new Tt(220,e+70),4351876,0,-1.65,-e/2);i.rotation.x=-Math.PI/2,i.material.roughness=.3,i.material.metalness=.12;for(let s of[-1,1]){t(new wt(.7,.36,e+18),10398640,s*5.55,.18,-e/2),t(new wt(.14,.12,e+18),3623e3,s*5.65,1.24,-e/2),t(new wt(.1,.1,e+18),5333623,s*5.65,.77,-e/2);for(let r=0;r<e+6;r+=5)t(new wt(.11,1.3,.1),3689823,s*5.65,.7,-r)}for(let s=0;s<e+6;s+=8){const r=t(new Tt(.13,3),15198692,0,.055,-s);r.rotation.x=-Math.PI/2}for(let s=0;s<e+35;s+=17)for(const r of[-1,1]){const o=4+Math.floor(s/17)%4*1.8;t(new wt(7.5,o,9),[14731168,14201505,13153702,14141103][Math.floor(s/17)%4],r*(16+Math.abs(s%3)),o/2-1.5,-s),t(new wt(7.8,.45,9.3),5465205,r*(16+Math.abs(s%3)),o-1.5,-s);for(let c=1;c<o/2;c++)for(let l of[-2.6,1.8])t(new wt(.1,.9,.85),4544620,r*(16+Math.abs(s%3))-r*3.82,c*1.55-1.2,-s+l)}}createGates(e,t){let n=0;for(const i of this.plan.events.filter(s=>s.type==="choice")){for(const r of[i.left,i.right])r.op==="+"&&r.value>0&&(r.bonusFaction=["gilets","genz","pompiers","infirmieres"][n++%4]);const s={z:i.z,passed:!1,leftGate:i.left,rightGate:i.right};s.leftMesh=this.createGateMesh(i.left,-2.5,i.z),s.rightMesh=this.createGateMesh(i.right,2.5,i.z),this.gates.push(s)}}createGateMesh(e,t,n){return mv(e,t,n,this.scene,this.meshes)}createObstacles(){}createEnemies(){for(const e of this.plan.events.filter(t=>t.type==="enemy")){const t={kind:e.kind,z:e.z,count:e.count,defeated:!1,meshes:[]};this.createEnemyCrowd(t,t.z,t.count),this.enemies.push(t)}}createEnemyCrowd(e,t,n){const i=Math.min(Math.max(n,16),24),s=new at;s.userData.dynamic=!0;for(let d=0;d<i;d++){const f=ir(e.kind,d);f.position.set((d%8-3.5)*.68,0,-Math.floor(d/8)*.83),s.add(f),sr(f,e.kind),e.kind==="bravm"&&Ac(f)}s.position.set(0,0,-t),this.scene.add(s),this.meshes.push(s),e.meshGroup=s;const r=document.createElement("canvas");r.width=128,r.height=64;const o=r.getContext("2d");o.fillStyle="#f3f6ff",o.font="bold 26px system-ui",o.textAlign="center",o.textBaseline="middle",o.fillText(e.kind==="bravm"?"BRAV-M":e.kind==="bac"?"BAC":"CRS",64,19),o.font="bold 37px system-ui",o.fillText(n.toString(),64,49);const c=new vi(r),l=new Tt(2.4,1.2),h=new tt({map:c,transparent:!0,depthWrite:!1}),u=new oe(l,h);u.position.set(0,4,-t),u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u),e.labelMesh=u}updateEnemyLabel(e){if(!e.labelMesh)return;const t=document.createElement("canvas");t.width=128,t.height=64;const n=t.getContext("2d");if(n.fillStyle="#f3f6ff",n.font="bold 26px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(e.kind==="bravm"?"BRAV-M":e.kind==="bac"?"BAC":"CRS",64,19),n.font="bold 37px system-ui",n.fillText(Math.max(0,e.remainingCount).toString(),64,49),e.labelMesh.material.map&&e.labelMesh.material.map.dispose(),e.labelMesh.material.map=new vi(t),e.labelMesh.material.needsUpdate=!0,e.meshGroup&&e.meshGroup.children.length>0){const i=e.meshGroup.children[e.meshGroup.children.length-1];e.meshGroup.remove(i)}}createBoss(e,t){const n=this.plan.bossHealth;this.boss={z:t,health:n,defeated:!1};const i=new at;i.userData.dynamic=!0;for(let l=0;l<13;l++){const h=ir(l%5===0?"bac":"crs",l);h.position.set((l%7-3)*.66,0,Math.floor(l/7)*-.86),i.add(h),sr(h,l%5===0?"bac":"crs")}for(const l of[-1,1])for(let h=0;h<2;h++){const u=ir("bravm",h);u.position.set(l*(4.2+h*.85),0,-1.1-h*1.9),u.rotation.y=l*Math.PI/10,i.add(u),sr(u,"bravm"),Ac(u)}const s=ad();s.scale.set(.85,.85,.85),s.position.set(0,0,-4.3),i.add(s),ld(i,s),i.position.set(0,0,-t),this.scene.add(i),this.meshes.push(i),this.boss.meshGroup=i,this.boss.defeatTime=0,this.boss.isDefeating=!1;const r=document.createElement("canvas");r.width=512,r.height=128;const o=r.getContext("2d");o.fillStyle="#f3e8d8",o.font="bold 49px system-ui",o.textAlign="center",o.textBaseline="middle",o.strokeStyle="#152334",o.lineWidth=9,o.strokeText("FRONT CRS : "+n,256,64),o.fillText("FRONT CRS : "+n,256,64);const c=new oe(new Tt(7,1.6),new tt({map:new vi(r),transparent:!0,depthWrite:!1}));c.position.set(0,3.4,-t),c.userData.dynamic=!0,this.scene.add(c),this.meshes.push(c),this.boss.labelMesh=c}shakeBoss(){if(!this.boss||!this.boss.meshGroup)return;const e=this.boss.meshGroup,t=(Math.random()-.5)*.4,n=(Math.random()-.5)*.2;e.position.x=t,e.position.z+=n,e.traverse(i=>{i.material&&i.material.emissive&&(i.material.emissive=new Ae(16711680),i.material.emissiveIntensity=.6)}),setTimeout(()=>{e&&(e.position.x=0,e.traverse(i=>{i.material&&i.material.emissiveIntensity&&(i.material.emissiveIntensity=0)}))},80)}playBossDefeatAnimation(){!this.boss||!this.boss.meshGroup||(this.boss.isDefeating=!0,this.boss.defeatTime=0)}updateBossDefeat(e){if(!this.boss||!this.boss.isDefeating||!this.boss.meshGroup)return;this.boss.defeatTime+=e;const t=this.boss.defeatTime,n=this.boss.meshGroup;if(t<.5)n.position.x=(Math.random()-.5)*t*4,n.rotation.z=(Math.random()-.5)*t*.5,n.traverse(i=>{i.material&&i.material.color&&(i.material.emissive=new Ae(16711680),i.material.emissiveIntensity=Math.sin(t*40)*.5+.5)});else if(t<1.2){const i=(t-.5)/.7;n.position.y=-i*3,n.rotation.x=i*.8,n.rotation.z=i*.5;const s=1-i*.8;n.scale.set(s,s*(1-i*.3),s),n.traverse(r=>{r.material&&(r.material.transparent=!0,r.material.opacity=1-i)}),n.children.forEach((r,o)=>{r.position.x+=(Math.random()-.5)*e*8,r.position.y+=(Math.random()-.5)*e*5,r.rotation.x+=e*(o+1)*3})}else this.scene.remove(n),this.boss.isDefeating=!1}createDecorations(e){for(let t=12;t<e;t+=26)for(const n of[-1,1]){const i=new oe(new Qe(.07,.09,5,7),new Ie({color:6582392,metalness:.35}));i.position.set(n*6.1,2.5,-t),i.userData.dynamic=!0,this.scene.add(i),this.meshes.push(i);const s=new oe(new et(.23,8,6),new tt({color:16770988}));s.position.set(n*6.1,4.9,-t),s.userData.dynamic=!0,this.scene.add(s),this.meshes.push(s)}}createTree(e,t){const n=Math.random();if(n<.4){const i=new Qe(.15,.25,2.5,6),s=new Ie({color:6111287}),r=new oe(i,s);r.position.set(e,1.25,t),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r);const o=[1793568,3046706,3706428];for(let c=0;c<3;c++){const l=new ki(1.2-c*.25,1.8-c*.3,8),h=new Ie({color:o[c]}),u=new oe(l,h);u.position.set(e,2.5+c*1,t),u.castShadow=!0,u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u)}}else if(n<.7){const i=new Qe(.2,.35,2.5,6),s=new Ie({color:7162945}),r=new oe(i,s);r.position.set(e,1.25,t),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r);const o=new et(1.5+Math.random()*.5,8,8),c=new Ie({color:4431943}),l=new oe(o,c);l.position.set(e,3.2,t),l.castShadow=!0,l.userData.dynamic=!0,this.scene.add(l),this.meshes.push(l)}else{const i=new Qe(.15,.3,2,6),s=new Ie({color:5125166}),r=new oe(i,s);r.position.set(e,1,t),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r);const o=new et(1.3,8,8),c=new Ie({color:16027569}),l=new oe(o,c);l.position.set(e,2.8,t),l.castShadow=!0,l.userData.dynamic=!0,this.scene.add(l),this.meshes.push(l)}}createFlower(e,t){const n=[16732754,16766784,14696699,4244735,16739904,6942894],i=n[Math.floor(Math.random()*n.length)],s=new Qe(.02,.02,.4,4),r=new Ie({color:5025616}),o=new oe(s,r);o.position.set(e,.2,t),o.userData.dynamic=!0,this.scene.add(o),this.meshes.push(o);const c=new et(.12+Math.random()*.08,6,6),l=new Ie({color:i,emissive:i,emissiveIntensity:.2}),h=new oe(c,l);h.position.set(e,.45,t),h.userData.dynamic=!0,this.scene.add(h),this.meshes.push(h)}createRock(e,t){const n=.5+Math.random()*1,i=new $c(n,0),s=new Ie({color:7697781,roughness:.9,flatShading:!0}),r=new oe(i,s);r.position.set(e,n*.4,t),r.rotation.set(Math.random(),Math.random(),Math.random()),r.castShadow=!0,r.userData.dynamic=!0,this.scene.add(r),this.meshes.push(r)}createBush(e,t){const n=new at,i=new Ie({color:5606191});for(let s=0;s<3;s++){const r=.4+Math.random()*.3,o=new et(r,6,6),c=new oe(o,i);c.position.set((Math.random()-.5)*.6,r*.7,(Math.random()-.5)*.6),n.add(c)}n.position.set(e,0,t),n.userData.dynamic=!0,this.scene.add(n),this.meshes.push(n)}createMountains(e){const t=[6056896,7964363,3754411];for(let n=0;n<12;n++){const s=(n%2===0?1:-1)*(40+Math.random()*30),r=-(Math.random()*e),o=15+Math.random()*20,c=8+Math.random()*10,l=new ki(c,o,6),h=new Ie({color:t[Math.floor(Math.random()*t.length)],flatShading:!0}),u=new oe(l,h);if(u.position.set(s,o*.3,r),u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u),o>20){const d=new ki(c*.3,o*.2,6),f=new Ie({color:16777215}),m=new oe(d,f);m.position.set(s,o*.7,r),m.userData.dynamic=!0,this.scene.add(m),this.meshes.push(m)}}}createClouds(e){for(let t=0;t<20;t++){const n=new at,i=new Ie({color:16777215,transparent:!0,opacity:.85}),s=3+Math.floor(Math.random()*4);for(let r=0;r<s;r++){const o=new et(1.5+Math.random()*2,8,8),c=new oe(o,i);c.position.set(r*2.2+Math.random()*.5,Math.random()*.8,Math.random()*1),c.scale.y=.6,n.add(c)}n.position.set((Math.random()-.5)*80,20+Math.random()*15,-(Math.random()*e)),n.userData.dynamic=!0,this.scene.add(n),this.meshes.push(n)}}createStickman(e){const t=new at,n=new Qt(.15,.5,4,4),i=new Ie({color:e}),s=new oe(n,i);s.position.y=.7,t.add(s);const r=new et(.2,8,8),o=new oe(r,i);o.position.y=1.2,t.add(o);const c=new Qt(.07,.3,4,4),l=new oe(c,i);l.position.set(-.1,.2,0),t.add(l);const h=new oe(c,i);return h.position.set(.1,.2,0),t.add(h),t}}let Xa;function Av(){Xa||(Xa=new ua().load("/convergence-runner-lab/convergence/assets/approved/P02.webp"),Xa.colorSpace=ft);const a={value:0},e=new tt({map:Xa,alphaTest:.15,side:xt});e.onBeforeCompile=n=>{n.uniforms.marchTime=a,n.fragmentShader=n.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if(vMapUv.y < .30) discard;`),n.vertexShader=`uniform float marchTime;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float lower = 1.0-smoothstep(0.23,0.48,uv.y);
    transformed.x += sin(marchTime*4.1+step(.53,uv.x)*3.14159)*lower*.018;
    transformed.y += sin(marchTime*4.1)*.010;
    transformed.z += sin(marchTime*2.2+uv.x*8.0)*smoothstep(.60,.92,uv.y)*.022;`)};const t=new oe(new Tt(1.61,2.3,16,24),e);return t.position.set(0,1.075,0),t.castShadow=!1,{mesh:t,time:a}}function Rv(a){a.model.position.x+=.13,a.model.updateMatrixWorld(!0),a.model.traverse(e=>{if(!e.isMesh)return;if(!e.isSkinnedMesh){e.visible=!!e.userData.walkingFootwear;return}const t=new Set(e.skeleton.bones.map((o,c)=>/^(Left|Right)(UpLeg|Leg|Foot|Toe)/.test(o.name)?c:-1)),n=e.geometry.clone(),i=n.attributes.skinIndex,s=n.attributes.skinWeight,r=new Float32Array(n.attributes.position.count);for(let o=0;o<r.length;o++){let c=0;for(let l=0;l<4;l++)t.has(i.array[o*4+l])&&(c+=s.array[o*4+l]);r[o]=c}n.setAttribute("leaderLegMask",new Ut(r,1)),e.geometry=n,e.userData.ownedLeaderGeometry=!0,e.material=e.material.clone(),e.material.onBeforeCompile=o=>{o.vertexShader=`attribute float leaderLegMask; varying float leaderLeg; varying float leaderHeight;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
leaderLeg=leaderLegMask; leaderHeight = (modelMatrix * vec4(transformed,1.0)).y;`),o.fragmentShader=`varying float leaderLeg; varying float leaderHeight;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
if(leaderHeight>.77 || leaderLeg<.5) discard;`)},e.material.customProgramCacheKey=()=>"P02-native-walking-legs-v2"})}const hl=["gilets","genz","lyceens","pompiers","infirmieres","agriculteurs"],eu=new Map,tu=new Map,ul=new ua;let So,wo;function Cv(){if(!wo){const a=ul.load("/convergence-runner-lab/convergence/assets/crowd/p02-vest-detail.webp");a.colorSpace=ft,wo=new Ie({map:a,transparent:!0,alphaTest:.12,depthWrite:!1,roughness:.93,side:xt})}return wo}function Pv(){if(!So){const a=ul.load("/convergence-runner-lab/convergence/assets/crowd/p02-backpack-detail.webp");a.colorSpace=ft,So=new Ie({map:a,transparent:!0,alphaTest:.12,depthWrite:!1,roughness:.91,metalness:0,side:xt})}return So}const on=(a,e=0)=>new Ie({color:a,roughness:e?.55:.87,metalness:e,side:xt}),Dv=on(15073042),$s=on(15264988,.28),oa=on(2569024),Fi=on(14101554),ca=on(15855848),la=on(10384971),fd=on(7030425);function Dt(a,e,t,n=[0,0,0],i){const s=new oe(e,t);return s.position.set(...n),i&&s.rotation.set(...i),s.castShadow=!0,a.add(s),s}function yn(a,e,t,n,i){return Dt(a,new wt(...t),e,n,i)}function Pc(a,e,t,n,i=.022){return Dt(a,new Fn(t,i,5,18),e,[0,n,0],[Math.PI/2,0,0])}function Nn(a,e,t,n=0,i=0){const s=a.getObjectByName(e),r=new at;return a.add(r),a.updateMatrixWorld(!0),r.position.copy(a.worldToLocal(new C(i,t,n))),r.scale.setScalar(1/a.getWorldScale(new C).x),r.quaternion.copy(a.getWorldQuaternion(new yt).invert()),a.updateMatrixWorld(!0),s!=null&&s.isBone&&s.attach(r),r}function Iv(a,e){let t=eu.get(e);t||(t=ul.load("/convergence-runner-lab/convergence/assets/quaternius/palette-"+e+".png"),t.colorSpace=ft,t.flipY=!1,eu.set(e,t)),a.traverse(n=>{if(!n.isSkinnedMesh)return;let i=tu.get(e);i||(i=n.material.clone(),i.map=t,i.needsUpdate=!0,tu.set(e,i)),n.material=i,n.userData.sharedHumanoidAsset=!0})}function ja(a,e=oa){Dt(a,new Qt(.16,.2,6,12),e,[0,-.015,.24]).scale.set(1,1,.6),yn(a,e,[.26,.16,.05],[0,-.09,.35]);const n=Dt(a,new Tt(.29,.3),Pv(),[0,-.025,.389]);n.castShadow=!1,n.renderOrder=2;for(const i of[-.105,.105])yn(a,$s,[.024,.06,.025],[i,.08,.34]);yn(a,e,[.35,.1,.18],[0,-.22,.22]);for(const i of[-.16,.16])yn(a,e,[.055,.4,.055],[i,0,-.16])}function Lv(a,e,t=!1){const n=Nn(a,"Head",1.57,.005),i=Dt(n,new et(.208,18,12,0,Math.PI*2,0,Math.PI*.6),e,[0,.045,0]);i.material.side=xt,Dt(n,new Qe(.204,.213,.035,18),e,[0,-.018,0]),t&&yn(n,$s,[.34,.05,.035],[0,.08,-.186])}function Fv(a){const e=Nn(a,"Head",1.61,0);Dt(e,new Qe(.31,.31,.042,20),la),Dt(e,new Qe(.17,.19,.19,16),la,[0,.1,0]),Pc(e,oa,.18,.01,.013)}function Nv(a){const e=Nn(a,"RightHand",1.02,-.2),t=Dt(e,new Qe(.014,.014,.86,8),la,[.06,.4,0]);t.rotation.z=-.12,yn(e,la,[.42,.29,.035],[.12,.85,0])}function Uv(a){const e=Nn(a,"LeftHand",1.12,0,-.31);Dt(e,new Qe(.012,.012,1.09,7),la,[0,.48,0]);const t=[on(1524910),ca,Fi];for(let n=0;n<3;n++){const i=new Tt(.15,.36,3,3),s=i.attributes.position;for(let r=0;r<s.count;r++)s.setZ(r,Math.sin(s.getX(r)*15+n*.85)*.022);i.computeVertexNormals(),Dt(e,i,t[n],[-.4+n*.15,.88,0])}}function kv(a,e){var n,i,s;const t={gilets:oa,genz:fd,lyceens:on(2506332),pompiers:Fi,infirmieres:ca,agriculteurs:on(4610113)}[e];for(const r of["Left","Right"]){for(const[c,l]of[[r+"Arm",r+"ForeArm"],[r+"ForeArm",r+"Hand"]]){if(e==="infirmieres"&&c.includes("ForeArm"))continue;const h=(n=a.getObjectByName(c))==null?void 0:n.getWorldPosition(new C),u=(i=a.getObjectByName(l))==null?void 0:i.getWorldPosition(new C);if(!h||!u)continue;const d=h.clone().add(u).multiplyScalar(.5),f=u.clone().sub(h),m=Nn(a,c,d.y,d.z,d.x);Dt(m,new Qt(.074,Math.max(.02,f.length()-.11),4,10),t).quaternion.setFromUnitVectors(new C(0,1,0),f.normalize())}const o=(s=a.getObjectByName(r+"Foot"))==null?void 0:s.getWorldPosition(new C);if(o){const c=Nn(a,r+"Foot",o.y,o.z,o.x),l=Dt(c,new et(.115,10,8),oa,[0,-.018,-.065]);l.scale.set(.88,.6,1.48),l.userData.walkingFootwear=!0;const h=Dt(c,new et(.114,10,8),ca,[0,-.071,-.065]);h.scale.set(.9,.18,1.48),h.userData.walkingFootwear=!0}}}function Ov(a,e){Iv(a,e),kv(a,e);const t=Nn(a,"Head",1.62,0);e!=="pompiers"&&e!=="infirmieres"&&e!=="agriculteurs"&&Dt(t,new et(.19,14,10,0,Math.PI*2,0,Math.PI*.52),on(e==="genz"?3679532:3221540),[0,.02,0]);const n=Nn(a,"Spine2",1.05,0);if(e==="gilets"){Dt(n,new Qe(.21,.245,.43,14),Dv);for(const r of[-.12,.1])Pc(n,$s,.236,r,.026);const i=Nn(a,"Spine2",1.34,.03);Dt(i,new Fn(.17,.065,7,16),oa,[0,0,0],[Math.PI/2,0,0]),ja(n);for(const r of[-.12,.1])yn(n,$s,[.43,.055,.035],[0,r,.25]);const s=Dt(n,new Tt(.49,.45),Cv(),[0,-.045,.408]);s.castShadow=!1,s.renderOrder=3,Uv(a)}else if(e==="genz")Dt(n,new Qe(.205,.225,.41,14),fd),ja(n);else if(e==="lyceens")ja(n,on(10184511)),Nv(a);else if(e==="pompiers"){Dt(n,new Qe(.23,.24,.45,14),Fi);for(const i of[-.13,.11])Pc(n,$s,.238,i,.028);Lv(a,Fi,!0)}else if(e==="infirmieres"){Dt(n,new Qe(.218,.225,.46,14),ca),yn(n,Fi,[.066,.23,.025],[0,0,-.226]),yn(n,Fi,[.22,.07,.025],[0,0,-.228]);const i=Nn(a,"Head",1.64,0);yn(i,ca,[.25,.12,.14],[0,.04,0]),yn(i,Fi,[.047,.09,.015],[0,.055,-.078])}else e==="agriculteurs"&&(Fv(a),ja(n,on(6967346)))}var Bv=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),y=0;y<p.length;++y){var v=p.charCodeAt(y);b[y]=v>96?v-97:v>64?v-39:v+4}for(var T=0,y=0;y<p.length;++y)b[T++]=b[y]<60?n[b[y]]:(b[y]-60)*64+b[++y];return b.buffer.slice(0,T)}function c(p,b,y,v,T,S,A){var _=p.exports.sbrk,E=v+3&-4,P=_(E*T),D=_(S.length),I=new Uint8Array(p.exports.memory.buffer);I.set(S,D);var O=b(P,v,T,D,S.length);if(O==0&&A&&A(P,E,T),y.set(I.subarray(P,P+v*T)),_(P-_(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(y){var v=y.data;b.pending-=v.count,b.requests[v.id][v.action](v.value),delete b.requests[v.id]},b}function m(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),y=new Blob([b],{type:"text/javascript"}),v=URL.createObjectURL(y),T=u.length;T<p;++T)u[T]=f(v);for(var T=p;T<u.length;++T)u[T].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function x(p,b,y,v,T){for(var S=u[0],A=1;A<u.length;++A)u[A].pending<S.pending&&(S=u[A]);return new Promise(function(_,E){var P=new Uint8Array(y),D=++d;S.pending+=p,S.requests[D]={resolve:_,reject:E},S.object.postMessage({id:D,count:p,size:b,source:P,mode:v,filter:T},[P.buffer])})}function g(p){var b=p.data;self.ready.then(function(y){if(!b.id)return self.close();try{var v=new Uint8Array(b.count*b.size);c(y,y.exports[b.mode],v,b.count,b.size,b.source,y.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:v},[v.buffer])}catch(T){self.postMessage({id:b.id,count:b.count,action:"reject",value:T})}})}return{ready:r,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,b,y,v,T){c(s,s.exports.meshopt_decodeVertexBuffer,p,b,y,v,s.exports[l[T]])},decodeIndexBuffer:function(p,b,y,v){c(s,s.exports.meshopt_decodeIndexBuffer,p,b,y,v)},decodeIndexSequence:function(p,b,y,v){c(s,s.exports.meshopt_decodeIndexSequence,p,b,y,v)},decodeGltfBuffer:function(p,b,y,v,T,S){c(s,s.exports[h[T]],p,b,y,v,s.exports[l[S]])},decodeGltfBufferAsync:function(p,b,y,v,T){return u.length>0?x(p,b,y,h[v],l[T]):r.then(function(){var S=new Uint8Array(p*b);return c(s,s.exports[h[v]],S,p,b,y,s.exports[l[T]]),S})}}})();const Qs=[{key:"lyceen",pack:"school",label:"LycÃ©en",base:"male-adult-04",faction:"lyceens",height:1.62,width:.98,top:11739180,pants:2107960,hood:!0,bag:2106668,prop:"placard"},{key:"pompier",pack:"rescue",label:"Pompier",base:"fire-male-01",faction:"pompiers",height:1.76,width:1.04,top:13509161,pants:12065829,bag:2434603,prop:"megaphone"},{key:"infirmiere",label:"InfirmiÃ¨re",base:"medical-female-02",faction:"infirmieres",height:1.65,width:1,top:16777215,pants:15988210,medical:!0},{key:"manifestante",pack:"leather",label:"Manifestante",base:"female-adult-05",faction:"genz",height:1.67,width:1.04,top:7746722,pants:2706032,hood:!0,bag:10906165,hair:"ponytail"},{key:"fumigene",pack:"compact",label:"FumigÃ¨ne",base:"male-adult-07",faction:"gilets",height:1.71,width:1.04,top:2569027,pants:3165546,hood:!0,vest:!0,bag:2566960,prop:"flare"},{key:"agriculteur",pack:"hiking",label:"Agriculteur",base:"gardener-male-01",faction:"agriculteurs",height:1.72,width:1.08,top:3562548,pants:11836528,bag:9922614,cap:2706219},{key:"drapeau",pack:"classic",label:"Porteur de drapeau",base:"male-adult-10",faction:"gilets",height:1.75,width:1.02,top:2107447,pants:2504262,hood:!0,bag:2501167,prop:"flag"},{key:"gilet-rouge",pack:"school",label:"Gilet jaune â€” hoodie rouge",base:"male-adult-04",faction:"gilets",height:1.64,width:1,top:10955574,pants:2704482,vest:!0,hood:!0,bag:2107437,hair:"dark"},{key:"gilet-blonde",pack:"compact",label:"Gilet jaune â€” blonde",base:"female-adult-12",faction:"gilets",height:1.72,width:.98,top:14933966,pants:3230570,vest:!0,bag:10184762,hair:"blonde"},{key:"gilet-bonnet",pack:"rolltop",label:"Gilet jaune â€” bonnet",base:"male-adult-07",faction:"gilets",height:1.78,width:1.13,top:3488054,pants:3421752,vest:!0,bag:2369322,hair:"beanie"},{key:"gilet-rousse",pack:"leather",label:"Gilet jaune â€” rousse",base:"female-adult-05",faction:"gilets",height:1.6,width:1.08,top:9123144,pants:2571089,vest:!0,bag:7094577,hair:"red"},{key:"gilet-casquette",pack:"sport",label:"Gilet jaune â€” casquette",base:"male-adult-10",faction:"gilets",height:1.73,width:1.06,top:2908803,pants:2704481,vest:!0,bag:2308422,cap:2108729},{key:"gilet-gris",pack:"hiking",label:"Gilet jaune â€” cheveux gris",base:"male-adult-07",faction:"gilets",height:1.69,width:1.12,top:12568008,pants:3819089,vest:!0,bag:7956556,hair:"grey"}],Xs={rows:Qs.length,planeWidth:2.2,planeHeight:3.3,centerY:1.48};function pd(a){return((a-1)%Qs.length+Qs.length)%Qs.length}function Gv(a){return Qs[pd(a)]}const Os=new C;function un(a,e,t,n,i,s){const r=2*Math.PI*i/4,o=Math.max(s-2*i,0),c=Math.PI/4;Os.copy(e),Os[n]=0,Os.normalize();const l=.5*r/(r+o),h=1-Os.angleTo(a)/c;return Math.sign(Os[t])===1?h*l:o/(r+o)+l+l*(1-h)}class dl extends wt{constructor(e=1,t=1,n=1,i=2,s=.1){const r=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new C,l=new C,h=new C(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,x=new C,g=.5/r;for(let p=0,b=0;p<u.length;p+=3,b+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*s,u[p+1]=h.y*Math.sign(c.y)+l.y*s,u[p+2]=h.z*Math.sign(c.z)+l.z*s,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),f[b+0]=un(x,l,"z","y",s,n),f[b+1]=1-un(x,l,"y","z",s,t);break;case 1:x.set(-1,0,0),f[b+0]=1-un(x,l,"z","y",s,n),f[b+1]=1-un(x,l,"y","z",s,t);break;case 2:x.set(0,1,0),f[b+0]=1-un(x,l,"x","z",s,e),f[b+1]=un(x,l,"z","x",s,n);break;case 3:x.set(0,-1,0),f[b+0]=1-un(x,l,"x","z",s,e),f[b+1]=1-un(x,l,"z","x",s,n);break;case 4:x.set(0,0,1),f[b+0]=1-un(x,l,"x","y",s,e),f[b+1]=1-un(x,l,"y","x",s,t);break;case 5:x.set(0,0,-1),f[b+0]=un(x,l,"x","y",s,e),f[b+1]=1-un(x,l,"y","x",s,t);break}}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.segments,e.radius)}}const md=new Ie({vertexColors:!0,roughness:.82,side:xt}),zv=new Ie({vertexColors:!0,roughness:.42,metalness:.2,side:xt}),br=new Map,Eo=new Map;let fl,To;function Vv(){return To||(To=new ua().loadAsync("/convergence-runner-lab/convergence/assets/crowd/p02-backpack-detail.webp").then(a=>{a.colorSpace=ft,fl=a}).catch(()=>{})),To}function Hv(a){if(!Eo.has(a)){const e=new Ie({map:fl,transparent:!0,alphaTest:.12,roughness:.9,depthWrite:!1}),t=new Ae(a);e.onBeforeCompile=n=>{n.uniforms.bagTint={value:t},n.fragmentShader=`uniform vec3 bagTint;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float fabric=dot(diffuseColor.rgb,vec3(.299,.587,.114));diffuseColor.rgb=bagTint*(.60+fabric*3.0);`)},e.customProgramCacheKey=()=>"reference-bag-v2",Eo.set(a,e)}return Eo.get(a)}const Et=(a=0,e=0,t=0)=>new C(a,e,t),Bs=15592677,Jn=13312043,rs=15133974,Ui=2435120,xi=a=>a.getWorldPosition(Et()),Yn=(a,e)=>a.getObjectByName("Bip01_"+e);function Wv(a,e){const t=new Ae(e),n=new Float32Array(a.attributes.position.count*3);for(let i=0;i<n.length;i+=3)n[i]=t.r,n[i+1]=t.g,n[i+2]=t.b;return a.setAttribute("color",new Ut(n,3)),a}function Gs(a,e,t,n){const i=Yn(a,e);if(!i)throw new Error("Missing attachment bone "+e);const s=new at;s.name="outfit-"+n,a.add(s),a.updateMatrixWorld(!0),s.position.copy(a.worldToLocal(t.clone())),s.scale.setScalar(1/a.getWorldScale(Et()).x),s.quaternion.copy(a.getWorldQuaternion(new yt).invert()),a.updateMatrixWorld(!0),i.attach(s);const r=[[],[]],o=(d,f,m=[0,0,0],x=[0,0,0],g=!1)=>{const p=new ke().compose(Et(...m),new yt().setFromEuler(new si(...x)),Et(1,1,1));d.applyMatrix4(p),Wv(d,f),r[g?1:0].push(d)};return{anchor:s,b:i,batches:r,add:o,box:(d,f,m,x=.015,g)=>o(new dl(...d,2,Math.min(x,...d.map(p=>p/3))),m,f,g),ellipsoid:(d,f,m)=>{const x=new et(1,16,10);x.scale(...d),o(x,m,f)},tube:(d,f,m,x,g=[0,0,0])=>o(new Qe(d,d,f,10),x,m,g),finish:()=>{for(let d=0;d<2;d++)if(r[d].length){const f=id(r[d].map(x=>x.index?x.toNonIndexed():x)),m=new oe(f,d?zv:md);m.castShadow=!0,m.userData.ownedOutfitGeometry=!0,m.userData.sharedHumanoidAsset=!0,s.add(m),r[d].forEach(x=>x.dispose())}}}}function ar(a,e,t,n,i){const s=Et(...e),r=Et(...t),o=r.clone().sub(s),c=new Qe(n,n,o.length(),8);c.applyQuaternion(new yt().setFromUnitVectors(Et(0,1,0),o.normalize())),a.add(c,i,s.add(r).multiplyScalar(.5).toArray())}function qv(a,e,t){const n=a.batches.map(l=>l.length);let i;const s=t.medical?.9:1;a.box([.32*s,.37,.16],[0,-.025,.2],e,.055),a.box([.26,.16,.055],[0,-.1,.303],e,.023),a.box([.22,.032,.022],[0,-.012,.337],Ui,.007);for(const l of[-.115,.115])a.box([.025,.31,.018],[l,-.02,.29],5524290,.006),a.box([.04,.06,.022],[l,.095,.29],11053473,.007);if(fl){const l=new oe(new Tt(.3,.35),Hv(e));i=l,l.position.set(0,-.02,.338),l.userData.ownedOutfitGeometry=!0,l.userData.sharedHumanoidAsset=!0,a.anchor.add(l)}ar(a,[-.13,.145,.29],[.13,.145,.29],.005,12625283),a.box([.06,.17,.09],[-.18,-.08,.21],e,.019),a.box([.06,.17,.09],[.18,-.08,.21],e,.019),a.add(new Fn(.052,.012,6,12,Math.PI),Ui,[0,.17,.21]);for(const l of[-.14,.14])ar(a,[l,.2,.08],[l,.1,-.135],.023,e),ar(a,[l,.1,-.135],[l,-.2,-.12],.023,e);const r=t.pack;if(r==="hiking"){a.tube(.064,.34,[0,-.27,.21],7502667,[0,0,Math.PI/2]);for(const l of[-.1,.1])a.box([.025,.12,.13],[l,-.265,.21],Ui,.006);a.tube(.035,.19,[.205,-.04,.21],5468027),a.tube(.024,.025,[.205,.065,.21],10528676)}else if(r==="rolltop")a.tube(.06,.29,[0,.2,.2],e,[0,0,Math.PI/2]),a.box([.035,.22,.025],[0,.13,.28],Ui,.006);else if(r==="leather"){a.box([.29,.13,.04],[0,.11,.315],e,.027);for(const l of[-.105,.105])a.box([.025,.15,.025],[l,.055,.343],6373933,.006),a.box([.04,.035,.01],[l,.025,.36],12299394,.006)}else if(r==="sport")a.box([.21,.025,.018],[0,-.09,.341],12436940,.004),a.box([.02,.15,.018],[.085,.04,.29],5340060,.004);else if(r==="rescue")for(const l of[-.09,.09])a.box([.024,.21,.025],[l,-.07,.34],3356218,.005);const o=r==="compact"?Et(.86,.87,.87):r==="rolltop"?Et(.98,1.1,1):r==="hiking"?Et(1.08,1.06,1.05):r==="sport"?Et(.91,1.02,.88):Et(1,1,1),c=new ke().makeScale(o.x,o.y,o.z);for(let l=0;l<2;l++)for(const h of a.batches[l].slice(n[l]))h.applyMatrix4(c);i&&(i.position.multiply(o),i.scale.copy(o))}function Xv(a,e){a.traverse(t=>{var r;if(!t.isSkinnedMesh)return;const n=t.material;if(/tools|stetoskop|flashlight|mask/.test(n.name)){t.visible=!1;return}if(/helmet/.test(n.name)){if(e.key!=="pompier"){t.visible=!1;return}t.visible=!1;return}if(!/body/.test(n.name))return;const i=n.uuid+"-"+e.key;let s=br.get(i);if(!s){const o=t.geometry.clone(),c=o.attributes.position,l=o.attributes.skinWeight,h=o.attributes.skinIndex,u=new Float32Array(c.count*3);a.updateMatrixWorld(!0);for(let x=0;x<c.count;x++){const g=Et().fromBufferAttribute(c,x).applyMatrix4(t.matrixWorld);let p=0,b=0,y=0,v=0;for(let A=0;A<4;A++){const _=((r=t.skeleton.bones[h.getComponent(x,A)])==null?void 0:r.name)||"",E=l.getComponent(x,A);/Hand|Finger|Head|Neck/.test(_)&&(p+=E),/UpperArm|Forearm|Clavicle/.test(_)&&(b+=E),/Thigh|Calf|Pelvis/.test(_)&&(y+=E),/Foot|Toe/.test(_)&&(v+=E)}const T=1-xc.smoothstep(p,.18,.75),S=y>.45&&g.y<.91;u[x*3]=(S?0:T)*(b>.2||g.y>.87?1:0),u[x*3+1]=S?1-xc.smoothstep(v,.2,.75):0,u[x*3+2]=g.y}o.setAttribute("garmentMask",new Ut(u,3));const d=n.clone();d.color.set(16777215);const f=new Ae(e.top),m=new Ae(e.pants);d.onBeforeCompile=x=>{x.uniforms.garmentTop={value:f},x.uniforms.garmentPants={value:m},x.vertexShader=`attribute vec3 garmentMask; varying vec3 vGarment;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vGarment=garmentMask;`),x.fragmentShader=`varying vec3 vGarment; uniform vec3 garmentTop; uniform vec3 garmentPants;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float fabricLight=clamp(.52+.64*dot(diffuseColor.rgb,vec3(.299,.587,.114)),.52,1.0);
      diffuseColor.rgb=mix(diffuseColor.rgb,garmentTop*fabricLight,vGarment.x);
      diffuseColor.rgb=mix(diffuseColor.rgb,garmentPants*fabricLight,vGarment.y);`)},d.customProgramCacheKey=()=>"reference-garment-v2",s={geometry:o,material:d},br.set(i,s)}t.geometry=s.geometry,t.material=s.material})}function jv(a,e,t,n,i){const s=Yn(a,e+"_UpperArm"),r=Yn(a,e+"_Forearm"),o=Yn(a,e+"_Hand"),c=(l,h,u)=>{a.updateMatrixWorld(!0);const d=xi(h).sub(xi(l)).normalize(),f=t.localToWorld(Et(...u)).sub(xi(l)).normalize(),m=new yt().setFromUnitVectors(d,f).multiply(l.getWorldQuaternion(new yt));l.quaternion.copy(l.parent.getWorldQuaternion(new yt).invert().multiply(m))};c(s,r,n),c(r,o,i)}function Kv(a,e){let t=.215,n=-.15,i=.15;return a.updateMatrixWorld(!0),a.traverse(s=>{var c;if(!s.isSkinnedMesh||!s.material.name.includes("body"))return;const r=s.geometry.attributes.skinWeight,o=s.geometry.attributes.skinIndex;for(let l=0;l<s.geometry.attributes.position.count;l++){let h=0;for(let d=0;d<4;d++)/Spine|Pelvis/.test(((c=s.skeleton.bones[o.getComponent(l,d)])==null?void 0:c.name)||"")&&(h+=r.getComponent(l,d));if(h<.75)continue;const u=s.getVertexPosition(l,Et()).applyMatrix4(s.matrixWorld).sub(e);u.y<-.19||u.y>.18||(t=Math.max(t,Math.abs(u.x)+.014),n=Math.min(n,u.z-.018),i=Math.max(i,u.z+.018))}}),{rx:Math.min(t,.29),rz:Math.min((i-n)/2,.25),z:(i+n)/2}}function zs(a,e,t){a.box([t*.3,t,.018],e,Jn,.005),a.box([t,t*.3,.019],e,Jn,.005)}function Jv(a,e){Xv(a,e);const t=xi(Yn(a,"Spine2")).add(Et(0,-.06,0)),n=Gs(a,"Spine2",t,e.key),i=xi(Yn(a,"Head")),s=Gs(a,"Head",i,"head-"+e.key),r=Gs(a,"Spine2",t,"pose-"+e.key).anchor,o=e.prop==="flare"?{side:"R",elbow:[.37,.19,0],hand:[.39,.52,0]}:e.prop==="placard"?{side:"R",elbow:[.36,0,-.03],hand:[.32,.28,-.12]}:e.prop==="megaphone"?{side:"R",elbow:[.35,-.03,-.03],hand:[.31,.22,-.21]}:e.prop==="flag"?{side:"L",elbow:[-.36,.02,0],hand:[-.36,.31,-.1]}:null,c=()=>{o&&jv(a,o.side,r,o.elbow,o.hand)};if(c(),a.updateMatrixWorld(!0),e.vest){const p=Kv(a,t),b=new Qe(p.rx*.97,p.rx,.43,24,4,!0);b.scale(1,1,p.rz/p.rx),n.add(b,rs,[0,-.015,p.z]);for(const y of[-.14,.025]){const v=new Qe(p.rx+.003,p.rx+.004,.047,24,1,!0);v.scale(1,1,p.rz/p.rx),n.add(v,14804701,[0,y,p.z],[0,0,0],!0)}for(const y of[-.13,.13])n.box([.065,.15,.03],[y,.15,.004],rs,.012,[0,0,y>0?.2:-.2]),n.box([.032,.14,.012],[y,.15,.024],Bs,.004);n.box([.018,.4,.015],[0,-.01,p.z-p.rz-.008],5396805,.003);for(const y of[-.115,.115])n.box([.12,.1,.02],[y,-.14,p.z-p.rz-.006],rs,.008)}if(e.hood){const p=new Fn(.107,.04,8,20,Math.PI*1.65);n.add(p,e.top,[0,.255,.075],[.65,0,.55]),n.ellipsoid([.125,.085,.065],[0,.245,.12],e.top)}if(e.bag!==void 0&&qv(n,e.bag,e),e.key==="pompier"){for(const b of[-.2,.08]){const y=new Qe(.22,.235,.052,24,1,!0);y.scale(1,1,.8),n.add(y,rs,[0,b,0],[0,0,0],!0)}n.box([.1,.11,.04],[.15,.12,-.15],Ui,.01);const p=new et(.145,24,14,0,Math.PI*2,0,Math.PI*.62);p.scale(1,1.12,1.08),s.add(p,14820138,[0,.13,0]),s.add(new Qe(.148,.153,.027,24),Jn,[0,.09,0]),s.box([.06,.075,.017],[0,.23,.13],rs,.009),s.box([.24,.075,.025],[0,.04,.115],Jn,.012);for(const b of[-.13,.13])s.box([.025,.1,.08],[b,.065,0],Jn,.013);s.ellipsoid([.145,.013,.065],[0,.09,-.13],9316400);for(const b of["L","R"])for(const[y,v,T]of[[b+"_Forearm",b+"_Hand",.065],[b+"_Calf",b+"_Foot",.082]]){const S=xi(Yn(a,y)),A=xi(Yn(a,v)),_=S.clone().lerp(A,.62),E=A.clone().sub(S).normalize(),P=Gs(a,y,_,"reflector-"+y),D=new Qe(T,T,.065,16,1,!0);D.applyQuaternion(new yt().setFromUnitVectors(Et(0,1,0),E)),P.add(D,rs,[0,0,0],[0,0,0],!0),P.finish()}}if(e.medical){const p=new Qe(.19,.255,.3,24,3,!0);p.scale(1,1,.75),n.add(p,Bs,[0,-.32,0]),n.box([.29,.04,.025],[0,-.17,.153],Jn,.006),zs(n,[0,.015,.167],.23),zs(n,[.14,.075,-.166],.115),n.box([.24,.21,.105],[-.245,-.24,.1],11873085,.033),n.box([.2,.085,.018],[-.245,-.18,.167],13911114,.013),zs(n,[-.245,-.24,.175],.1),ar(n,[.12,.22,.12],[-.245,-.16,.15],.016,Jn);const b=new Qe(.14,.17,.105,4,1,!1,Math.PI/4);b.scale(1,1,.85),s.add(b,Bs,[0,.18,0]),zs(s,[0,.19,.106],.075),zs(s,[0,.19,-.111],.075)}if(e.cap!==void 0){const p=new et(.128,20,12,0,Math.PI*2,0,Math.PI/2);p.scale(1,.88,1.06),s.add(p,e.cap,[0,.15,0]),s.box([.245,.022,.142],[0,.15,-.145],e.cap,.013),s.box([.09,.025,.012],[0,.16,.13],13810834,.005)}if(e.key==="agriculteur"){for(const p of[-.13,.13])n.box([.105,.105,.025],[p,-.12,-.135],4745274,.012);n.box([.02,.35,.02],[0,.02,-.14],11247996,.004)}if(e.hair){const p={blonde:11766342,red:10308904,grey:10132632,beanie:2107438,ponytail:6635820,dark:3155746}[e.hair];if(e.hair==="beanie"){const b=new et(.116,20,12,0,Math.PI*2,0,Math.PI*.58);b.scale(1,1.06,1.03),s.add(b,p,[0,.12,.015]),s.add(new Fn(.114,.013,6,20),p,[0,.11,.015],[Math.PI/2,0,0])}else if(e.hair!=="dark"&&(a.traverse(b=>{if(!b.isSkinnedMesh||!/head|opacity/.test(b.material.name))return;const y=b.material.uuid+"-hair-"+e.hair;let v=br.get(y);if(!v){v=b.material.clone();const T=new Ae(p);v.onBeforeCompile=S=>{S.uniforms.hairTint={value:T},S.fragmentShader=`uniform vec3 hairTint;
`+S.fragmentShader,S.fragmentShader=S.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float hairLuma=dot(diffuseColor.rgb,vec3(.299,.587,.114));float hairMask=1.0-smoothstep(.07,.23,hairLuma);diffuseColor.rgb=mix(diffuseColor.rgb,hairTint*(.55+hairLuma*2.0),hairMask);`)},v.customProgramCacheKey=()=>"reference-hair-v2",br.set(y,v)}b.material=v}),["blonde","red","ponytail"].includes(e.hair))){for(let b=0;b<7;b++){const y=(b-3)*.012,v=new Bu([Et(y,.1,.095),Et(y+.01,.04,.14),Et(y+.025,-.05,.14),Et(y+.03,-.14,.12)]);s.add(new nl(v,8,.014,5,!1),p)}s.tube(.04,.015,[.01,.055,.132],Ui,[Math.PI/2,0,0])}}n.finish(),s.finish();const l=[];let h=null,u=null;if(e.prop){const p=o.side,b=Yn(a,p+"_Hand"),y=Gs(a,p+"_Hand",xi(b),"prop-"+e.prop);if(l.push(y.anchor),e.prop==="placard"){y.tube(.012,.67,[0,.26,0],9659698),y.box([.47,.3,.027],[0,.7,0],12028498,.008),y.box([.065,.27,.008],[0,.7,.019],13212513,.003);for(const v of[.61,.8])y.box([.06,.035,.009],[0,v,.025],14401160,.002)}if(e.prop==="megaphone"&&(y.box([.045,.1,.05],[0,.025,0],Ui,.01),y.add(new Qe(.14,.046,.26,20,1,!0),Bs,[0,.12,-.07],[Math.PI/2,0,0]),y.add(new Fn(.14,.017,6,20),Jn,[0,.12,-.2]),y.add(new Sr(.125,20),4935765,[0,.12,-.205],[0,Math.PI,0]),y.add(new Fn(.048,.013,6,14),Jn,[0,.12,.06])),e.prop==="flag"){y.tube(.011,1.05,[0,.4,0],10253375);const v=new Tt(.67,.43,16,6);v.translate(-.335,.74,0);const T=new Float32Array(v.attributes.position.count*3);for(let S=0;S<v.attributes.position.count;S++){const A=v.attributes.position.getX(S);new Ae(A<-.446?14164532:A<-.223?16119279:1392309).toArray(T,S*3)}v.setAttribute("color",new Ut(T,3)),u=new oe(v,md),u.name="animated-french-flag",u.userData.ownedOutfitGeometry=!0,u.userData.sharedHumanoidAsset=!0,u.userData.base=v.attributes.position.array.slice(),y.anchor.add(u)}e.prop==="flare"&&(y.tube(.031,.17,[0,.06,0],1403196),y.tube(.034,.026,[0,.155,0],10926220),y.box([.036,.055,.006],[0,.07,.031],Bs,.003),h=gd(12),y.anchor.add(h)),y.finish()}const d=[];o&&a.traverse(p=>{p.isBone&&p.name.startsWith("Bip01_"+o.side+"_Finger")&&d.push({bone:p,q:p.quaternion.clone()})});const f=new yt().setFromAxisAngle(Et(0,0,1),.85),m=new rt;let x=0;function g(p=0,b){x=b===void 0?x+p:b,c();for(const v of d)v.bone.quaternion.copy(v.q).multiply(f);a.updateMatrixWorld(!0);const y=r.getWorldQuaternion(new yt);for(const v of l)v.quaternion.copy(v.parent.getWorldQuaternion(new yt).invert().multiply(y));if(u){const v=u.geometry.attributes.position,T=u.userData.base;for(let S=0;S<v.count;S++){const A=T[S*3],_=T[S*3+1];v.setZ(S,Math.sin(x*5+A*11+_*4)*.075*Math.min(1,Math.abs(A)*2.7))}v.needsUpdate=!0,u.geometry.computeVertexNormals()}if(h){h.material.uniforms.time.value=x;for(let v=0;v<12;v++){const T=(x*.55+v/12)%1,S=.07+T*.39;m.position.set(Math.sin(v*2.4+x*.6)*T*.13+.15*T,.19+T*.72,.035+T*.06),m.scale.set(S*1.3,S,1),m.rotation.z=v*.73+x*.15,m.updateMatrix(),h.setMatrixAt(v,m.matrix)}h.instanceMatrix.needsUpdate=!0}}return g(0),a.userData.characterStyle=e.key,{update:g,style:e.key,prop:e.prop||null}}function Yv(a){a.traverse(e=>{var t,n;e.userData.ownedOutfitGeometry&&((t=e.geometry)==null||t.dispose()),e.userData.ownedOutfitMaterial&&((n=e.material)==null||n.dispose())})}function gd(a){const e=new Tt(1,1),t=new Sn({transparent:!0,depthWrite:!1,side:xt,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv; uniform float time; void main(){vec2 p=vUv*2.0-1.0; float r=length(p);float a=(1.0-smoothstep(.30,1.0,r))*.25;float n=.90+.10*sin(p.x*11.0+p.y*14.0+time);gl_FragColor=vec4(vec3(.13,.91,.30)*n,a);}"}),n=new ha(e,t,a);return n.name="animated-green-smoke",n.frustumCulled=!1,n.userData.ownedOutfitGeometry=!0,n.userData.sharedHumanoidAsset=!0,n.userData.ownedOutfitMaterial=!0,n}const Zv=new Gi().setMeshoptDecoder(Bv),Ka=new Map,$v=a=>"/convergence-runner-lab/convergence/assets/realistic/"+a+".glb";function nu(a){if(!Ka.has(a)){const e=Zv.loadAsync($v(a)).catch(t=>{throw Ka.delete(a),t});Ka.set(a,e)}return Ka.get(a)}function Qv(a){const e=Gv(a);return{...e,id:e.base,sex:e.base.includes("female")?"f":"m"}}function iu(a){return pd(a)}async function ey(a,e=null){const t=Qv(a),n=e||t.id,i=n.includes("female")?"f":"m",[s,r]=await Promise.all([nu(n),nu(i+"_walk_neutral_01")]),o=Rr(s.scene);o.rotation.y=Math.PI,o.traverse(p=>{p.isMesh&&(p.userData.sharedHumanoidAsset=!0,p.isSkinnedMesh&&(p.frustumCulled=!1))});const c=r.animations[0];if(!c)throw new Error("Walk animation missing for "+n);const l=new rl(o),h=l.clipAction(c);h.setLoop(Gc),h.setEffectiveTimeScale(.92),h.play(),h.time=0,l.update(.001),o.updateMatrixWorld(!0);let u=new At().setFromObject(o);const d=u.getSize(new C).y;if(!Number.isFinite(d)||d<=.3)throw new Error("Invalid rig bounds for "+n+": "+d);o.scale.setScalar(t.height/d),o.updateMatrixWorld(!0),u=new At().setFromObject(o);const f=u.getCenter(new C);o.position.set(-f.x,-u.min.y,-f.z),o.updateMatrixWorld(!0),await Vv();const m=Jv(o,t);o.scale.x*=t.width;const x=(p,b)=>m.update(p,b);l.setTime(a%11*.11),x(0);const g=()=>Yv(o);return{model:o,mixer:l,action:h,animation:"Walk",duration:c.duration,id:t.key,sourceId:n,sex:i,update:x,dispose:g}}const ty=new Gi,su=window.innerWidth<600?12:20,Zn=new URLSearchParams(window.location.search).get("visual")!=="legacy";let Ja,os;function bd(){return Ja||(Ja=ty.loadAsync("/convergence-runner-lab/convergence/assets/quaternius/animated-human.glb").catch(a=>{throw Ja=null,a})),Ja}function au(a,e=0,t=hl[e%6]){const n=Rr(a.scene);n.rotation.y=-Math.PI/2;const i=new rl(n),s=a.animations.find(h=>h.name.toLowerCase()==="walk")||a.animations[0],r=i.clipAction(s);r.setLoop(Gc),r.setEffectiveTimeScale(.92),r.play(),r.time=e%7*.16,i.update(.001),n.updateMatrixWorld(!0),n.traverse(h=>{h.isSkinnedMesh&&(h.computeBoundingBox(),h.frustumCulled=!1,h.userData.sharedHumanoidAsset=!0)});const o=new At().setFromObject(n).getSize(new C);n.scale.setScalar(1.68/o.y),n.updateMatrixWorld(!0);const c=new At().setFromObject(n),l=c.getCenter(new C);return n.position.set(-l.x,-c.min.y,-l.z),Ov(n,t),{model:n,mixer:i,animation:s.name,action:r,duration:s.duration}}function ny(){if(!os){const a=Zn?"assets/crowd/walk-realistic.webp":"assets/crowd/walk-atlas.webp";os=new ua().load("/convergence-runner-lab/convergence/"+a),os.colorSpace=ft,os.magFilter=Nt,os.minFilter=In}return os}function iy(a){const e=new Tt(Zn?Xs.planeWidth:1.92,Zn?Xs.planeHeight:2.64),t=new Float32Array(256),n=new Float32Array(256);e.setAttribute("factionRow",new ra(t,1)),e.setAttribute("walkPhase",new ra(n,1));const i=new tt({map:ny(),alphaTest:.18,side:xt}),s={value:0};i.onBeforeCompile=l=>{l.uniforms.walkTime=s,l.vertexShader=`attribute float factionRow; attribute float walkPhase; uniform float walkTime;
`+l.vertexShader,l.vertexShader=l.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv.x = (uv.x + mod(floor(walkTime * 9.2 + walkPhase),12.0))/12.0;
vMapUv.y = (uv.y + `+(Zn?(Xs.rows-1).toFixed(1):"5.0")+"-factionRow)/"+(Zn?Xs.rows.toFixed(1):"6.0")+";")};const r=new ha(e,i,t.length);r.frustumCulled=!1,r.count=0,r.userData.sharedHumanoidAsset=!0,a.playerGroup.add(r);const o=new rt,c=Zn?gd(256):null;c&&(c.count=0,a.playerGroup.add(c)),a.impostors={mesh:r,time:s,rows:t,phases:n,geometry:e,matrix:o,smoke:c}}async function sy(a,e,t,n){var i,s;try{const r=await ey(t);if(a.playerGroup!==n||e.parent!==n){r.mixer.stopAllAction(),r.mixer.uncacheRoot(r.model),(i=r.dispose)==null||i.call(r),r.model.traverse(c=>{var l;c.isSkinnedMesh&&((l=c.skeleton)==null||l.dispose())});return}const o=e.userData.realHumanoid;if(!o||e.userData.realisticAvatar)return;o.mixer.stopAllAction(),o.mixer.uncacheRoot(o.model),(s=o.dispose)==null||s.call(o),o.model.traverse(c=>{var l;c.isSkinnedMesh&&((l=c.skeleton)==null||l.dispose())}),e.remove(o.model),e.add(r.model),e.userData.realHumanoid=r,e.userData.realisticAvatar=r.id}catch(r){console.warn("Realistic avatar fallback",t,r.message)}}function Ao(a){if(a._humanoidPending||!a.playerGroup)return;const e=a.playerGroup;a._humanoidPending=!0,bd().then(t=>{if(a.playerGroup===e){for(const[n,i]of a.playerStickmen.entries())if(!(!i.parent||i.userData.realHumanoid||i.userData.impostor||i.userData.approvedLeader))if(n===0){i.children.forEach(o=>{o.visible=!1});const s=au(t,n,"gilets");Rv(s),i.add(s.model),i.userData.realHumanoid=s;const r=Av();i.add(r.mesh),i.userData.approvedLeader=r,i.userData.lowDetail=!0}else if(n>=su)i.userData.impostor=!0,i.userData.lowDetail=!0,i.children.forEach(s=>{s.visible=!1});else{const s=au(t,n,i.userData.bonusFaction||hl[n%6]);i.children.forEach(r=>{r.visible=!1}),i.add(s.model),i.userData.realHumanoid=s}if(a.impostors||iy(a),Zn)for(let n=1;n<Math.min(su,a.playerStickmen.length);n++){const i=a.playerStickmen[n];i.userData.realHumanoid&&!i.userData.realisticAvatar&&!i.userData.upgradingRealistic&&(i.userData.upgradingRealistic=!0,sy(a,i,n,e).finally(()=>{i.userData.upgradingRealistic=!1}))}}}).catch(t=>console.warn("Humanoid fallback",t.message)).finally(()=>{a._humanoidPending=!1})}function ay(a,e){var s,r,o;for(const c of a.playerStickmen)(s=c.userData.realHumanoid)==null||s.mixer.update(e),(o=(r=c.userData.realHumanoid)==null?void 0:r.update)==null||o.call(r,e),c.userData.approvedLeader&&(c.userData.approvedLeader.time.value+=e);const t=a.impostors;if(!t)return;t.time.value+=e;let n=0,i=0;for(const c of a.playerStickmen){if(!c.userData.impostor)continue;if(n>=t.rows.length)break;const l=c.userData.index;t.matrix.position.set(c.position.x,(Zn?Xs.centerY:1.24)+c.position.y,c.position.z),t.matrix.scale.copy(c.scale),t.matrix.updateMatrix(),t.mesh.setMatrixAt(n,t.matrix.matrix);const h=hl.indexOf(c.userData.bonusFaction);if(t.rows[n]=Zn?iu(h>=0?h:l):h>=0?h:l%6,t.phases[n]=l*3.17%12,n++,t.smoke&&iu(l)===4){for(let u=0;u<12&&i<256;u++){const d=(t.time.value*.55+u/12+l*.17)%1,f=.07+d*.39;t.matrix.position.set(c.position.x+.4+Math.sin(u*2.4+t.time.value*.6)*d*.13+.15*d,c.position.y+1.91+d*.72,c.position.z+.03+d*.06),t.matrix.scale.set(f*1.3,f,1),t.matrix.rotation.z=u*.73+t.time.value*.15,t.matrix.updateMatrix(),t.smoke.setMatrixAt(i++,t.matrix.matrix)}t.matrix.rotation.set(0,0,0)}}t.smoke&&(t.smoke.count=i,t.smoke.instanceMatrix.needsUpdate=!0,t.smoke.material.uniforms.time.value=t.time.value),t.mesh.count=n,t.mesh.instanceMatrix.needsUpdate=!0,t.geometry.attributes.factionRow.needsUpdate=!0,t.geometry.attributes.walkPhase.needsUpdate=!0}function ry(a){var e,t,n;for(const i of a.playerStickmen){const s=i.userData.realHumanoid;s&&(s.mixer.stopAllAction(),s.mixer.uncacheRoot(s.model),(e=s.dispose)==null||e.call(s),s.model.traverse(r=>{var o;r.isSkinnedMesh&&((o=r.skeleton)==null||o.dispose()),r.userData.ownedLeaderGeometry&&(r.geometry.dispose(),r.material.dispose())}))}a.impostors&&(a.impostors.geometry.dispose(),a.impostors.mesh.material.dispose(),(t=a.impostors.smoke)==null||t.geometry.dispose(),(n=a.impostors.smoke)==null||n.material.dispose(),a.impostors=null)}class oy{constructor(e,t){this.scene=e,this.game=t,this.playerStickmen=[],this.playerGroup=null,this.playerCount=0,this.animTime=0,this.flyingBodies=[],this.impactFlashes=[],this.sparkParticles=[],this.trailParticles=[]}clear(){ry(this),this.playerGroup&&(this.scene.remove(this.playerGroup),this.playerGroup.traverse(e=>{e.geometry&&!e.userData.sharedHumanoidAsset&&e.geometry.dispose(),e.material&&!e.userData.sharedHumanoidAsset&&e.material.dispose()})),this.playerStickmen=[],this.playerGroup=null,this.playerCount=0,this.flyingBodies.forEach(e=>{this.scene.remove(e.mesh)}),this.flyingBodies=[],this.impactFlashes.forEach(e=>{this.scene.remove(e.mesh)}),this.impactFlashes=[],this.sparkParticles.forEach(e=>{this.scene.remove(e.mesh)}),this.sparkParticles=[],this.trailParticles.forEach(e=>{this.scene.remove(e.mesh)}),this.trailParticles=[]}createPlayerCrowd(e){this.clear(),this.playerCount=e,this.playerGroup=new at,this.playerGroup.userData.dynamic=!0;for(let t=0;t<e;t++)this.addStickmanToGroup(t);this.scene.add(this.playerGroup),Ao(this)}addStickmanToGroup(e){this.game&&this.game.equippedSkin==="rainbow"||this.game&&this.game.getPlayerColor();const t=S_(e),n=this.getFormationPosition(e);t.position.set(n.x,0,n.z),t.userData.index=e,t.scale.set(0,0,0),t.userData.spawnTime=this.animTime,t.userData.spawning=!0,this.playerGroup.add(t),this.playerStickmen.push(t)}getFormationPosition(e){if(e===0)return{x:0,z:1.05};e--;const t=this.playerCount>8?5:3,n=Math.floor(e/t);return{x:(e%t-(t-1)/2)*.53,z:.55-n*.7}}createStickman(e){const t=new at,n=new Ie({color:e}),i=new Qt(.15,.5,4,4),s=new oe(i,n);s.position.y=.7,s.castShadow=!0,t.add(s);const r=new et(.2,8,8),o=new oe(r,n);o.position.y=1.2,o.castShadow=!0,t.add(o);const c=new Qt(.07,.3,4,4),l=new oe(c,n);l.position.set(-.1,.2,0),t.add(l);const h=new oe(c,n);h.position.set(.1,.2,0),t.add(h);const u=new Qt(.05,.25,4,4),d=new oe(u,n);d.position.set(-.25,.75,0),d.rotation.z=.3,t.add(d);const f=new oe(u,n);return f.position.set(.25,.75,0),f.rotation.z=-.3,t.add(f),t}addToPlayerCrowd(e,t=null){const n=this.playerCount;this.playerCount+=e;for(let i=0;i<e;i++)this.addStickmanToGroup(n+i),t&&(this.playerStickmen.at(-1).userData.bonusFaction=t);Ao(this)}removeFromPlayerCrowd(e){var t;if(e=Math.min(e,this.playerCount),!(e<=0)){for(let n=0;n<e;n++)if(this.playerStickmen.length>0){const i=this.playerStickmen.pop();let s;if(this.game&&this.game.equippedSkin==="rainbow"){const o=[16717636,16748800,16771584,58998,2718207,13959417];s=o[Math.floor(Math.random()*o.length)]}else s=this.game?this.game.getPlayerColor():2201331;n<5&&this.launchRagdoll(i,s);const r=i.userData.realHumanoid;r&&(r.mixer.stopAllAction(),r.mixer.uncacheRoot(r.model),(t=r.dispose)==null||t.call(r),r.model.traverse(o=>{var c;o.isSkinnedMesh&&((c=o.skeleton)==null||c.dispose())})),this.playerGroup.remove(i)}this.playerCount=Math.max(0,this.playerCount-e)}}removeEnemyCrowd(e){e.meshGroup&&([...e.meshGroup.children].forEach(n=>{this.launchRagdoll(n,16007990,e.meshGroup)}),setTimeout(()=>{e.meshGroup&&(this.scene.remove(e.meshGroup),e.meshGroup.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}))},100))}launchRagdoll(e,t,n){const i=new C;e.getWorldPosition(i);const s=this.createStickman(t);s.position.copy(i),s.userData.dynamic=!0;const r=Math.random()*Math.PI*2,o=4+Math.random()*6,c=6+Math.random()*5;s.userData.velocity=new C(Math.cos(r)*o,c,Math.sin(r)*o),s.userData.angularVel=new C((Math.random()-.5)*15,(Math.random()-.5)*10,(Math.random()-.5)*15),s.userData.life=1.5,s.userData.maxLife=1.5,s.userData.color=t,s.userData.trailTimer=0,s.traverse(l=>{l.material&&(l.material=l.material.clone(),l.material.transparent=!0)}),this.scene.add(s),this.flyingBodies.push({mesh:s}),this.spawnImpactFlash(i,t),this.spawnSparks(i,t,5)}spawnImpactFlash(e,t){const n=new tl(.1,.3,16),i=new tt({color:t,transparent:!0,opacity:1,side:xt}),s=new oe(n,i);s.position.copy(e),s.position.y+=.8,s.rotation.x=-Math.PI/2,s.userData.dynamic=!0,this.scene.add(s),this.impactFlashes.push({mesh:s,life:.4,maxLife:.4});const r=new et(.3,8,8),o=new tt({color:16777215,transparent:!0,opacity:.9}),c=new oe(r,o);c.position.copy(e),c.position.y+=.8,c.userData.dynamic=!0,this.scene.add(c),this.impactFlashes.push({mesh:c,life:.2,maxLife:.2})}spawnSparks(e,t,n){for(let i=0;i<n;i++){const s=new et(.06+Math.random()*.06,4,4),r=new tt({color:Math.random()>.5?t:16777215,transparent:!0,opacity:1}),o=new oe(s,r);o.position.copy(e),o.position.y+=.5+Math.random()*.5,o.userData.dynamic=!0;const c=Math.random()*Math.PI*2,l=3+Math.random()*5;o.userData.velocity=new C(Math.cos(c)*l,2+Math.random()*4,Math.sin(c)*l),o.userData.life=.5+Math.random()*.3,o.userData.maxLife=o.userData.life,this.scene.add(o),this.sparkParticles.push({mesh:o})}}spawnDeathEffect(e,t,n){const i=new C(e+(Math.random()-.5)*2,.5,t+(Math.random()-.5)*1);this.spawnImpactFlash(i,n),this.spawnSparks(i,n,4)}getPlayerCount(){return this.playerCount}updatePlayerPosition(e,t){this.playerGroup&&this.playerGroup.position.set(e,0,t)}update(e){ay(this,e),this.playerStickmen.some(t=>!t.userData.realHumanoid&&!t.userData.lowDetail)&&Ao(this),this.animTime+=e*2.6,this.playerStickmen.length>0&&this.playerStickmen.forEach((t,n)=>{var c;if(t.userData.spawning){const l=this.animTime-t.userData.spawnTime,h=Math.min(l*2,1),u=Math.min(h*1.2,1)*(1+Math.sin(h*Math.PI)*.3);t.scale.set(Math.min(u,1),Math.min(u,1),Math.min(u,1)),h>=1&&(t.userData.spawning=!1,t.scale.set(1,1,1))}const i=this.getFormationPosition(n);((c=this.game)==null?void 0:c.state)==="fighting"&&n>0&&(i.x*=1.55,i.z+=.18),t.position.x+=(i.x-t.position.x)*Math.min(1,e*8),t.position.z+=(i.z-t.position.z)*Math.min(1,e*8);const s=n*.7,r=this.animTime+s;t.userData.spawning||(t.position.y=Math.abs(Math.sin(r*2))*.045);const o=t.children;o.length>=1&&(o[0].rotation.x=.01+Math.sin(r)*.018),o.length>=2&&(o[1].rotation.x=Math.sin(r*2)*.018),o.length>=4&&(o[2].rotation.x=Math.sin(r)*.36,o[3].rotation.x=-Math.sin(r)*.36),o.length>=6&&(o[4].rotation.x=-Math.sin(r)*.25,o[4].rotation.z=.17+Math.sin(r*2)*.04,o[5].rotation.x=Math.sin(r)*.25,o[5].rotation.z=-.17-Math.sin(r*2)*.04)}),this.updateFlyingBodies(e),this.updateImpactFlashes(e),this.updateSparkParticles(e),this.updateTrailParticles(e)}updateFlyingBodies(e){for(let t=this.flyingBodies.length-1;t>=0;t--){const i=this.flyingBodies[t].mesh,s=i.userData;s.life-=e;const r=s.life/s.maxLife;if(s.velocity.y-=20*e,i.position.x+=s.velocity.x*e,i.position.y+=s.velocity.y*e,i.position.z+=s.velocity.z*e,i.rotation.x+=s.angularVel.x*e,i.rotation.y+=s.angularVel.y*e,i.rotation.z+=s.angularVel.z*e,s.angularVel.multiplyScalar(.98),r<.3){const o=r/.3;i.traverse(c=>{c.material&&(c.material.opacity=o)}),i.scale.setScalar(o)}s.trailTimer+=e,s.trailTimer>.05&&r>.3&&(s.trailTimer=0,this.spawnTrailParticle(i.position,s.color)),i.position.y<.2&&s.velocity.y<0&&(s.velocity.y*=-.4,s.velocity.x*=.7,s.velocity.z*=.7,i.position.y=.2,Math.abs(s.velocity.y)>1&&this.spawnSparks(i.position,s.color,2)),s.life<=0&&(this.scene.remove(i),i.traverse(o=>{o.geometry&&!o.userData.sharedHumanoidAsset&&o.geometry.dispose(),o.material&&!o.userData.sharedHumanoidAsset&&o.material.dispose()}),this.flyingBodies.splice(t,1))}}updateImpactFlashes(e){for(let t=this.impactFlashes.length-1;t>=0;t--){const n=this.impactFlashes[t];n.life-=e;const i=n.life/n.maxLife,s=1+(1-i)*4;n.mesh.scale.set(s,s,s),n.mesh.material.opacity=i*.8,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.impactFlashes.splice(t,1))}}updateSparkParticles(e){for(let t=this.sparkParticles.length-1;t>=0;t--){const i=this.sparkParticles[t].mesh,s=i.userData;s.life-=e;const r=s.life/s.maxLife;s.velocity.y-=12*e,i.position.x+=s.velocity.x*e,i.position.y+=s.velocity.y*e,i.position.z+=s.velocity.z*e,i.material.opacity=r,i.scale.setScalar(r),s.velocity.multiplyScalar(.96),(s.life<=0||i.position.y<-1)&&(this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this.sparkParticles.splice(t,1))}}spawnTrailParticle(e,t){const n=new et(.04,4,4),i=new tt({color:t,transparent:!0,opacity:.6}),s=new oe(n,i);s.position.copy(e),s.position.x+=(Math.random()-.5)*.2,s.position.y+=(Math.random()-.5)*.2,s.userData.dynamic=!0,s.userData.life=.4,s.userData.maxLife=.4,this.scene.add(s),this.trailParticles.push({mesh:s})}updateTrailParticles(e){for(let t=this.trailParticles.length-1;t>=0;t--){const i=this.trailParticles[t].mesh;i.userData.life-=e;const s=i.userData.life/i.userData.maxLife;i.material.opacity=s*.6,i.scale.setScalar(s),i.userData.life<=0&&(this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this.trailParticles.splice(t,1))}}updateParticles(e){}}class cy{constructor(e){this.game=e,this.startScreen=document.getElementById("start-screen"),this.upgradeScreen=document.getElementById("upgrade-screen"),this.winScreen=document.getElementById("win-screen"),this.loseScreen=document.getElementById("lose-screen"),this.hud=document.getElementById("hud"),this.container=document.getElementById("game-container"),this.levelDisplay=document.getElementById("level-display"),this.coinDisplay=document.getElementById("coin-display"),this.countDisplay=document.getElementById("count-display"),this.crowdLevel=document.getElementById("crowd-level"),this.strengthLevel=document.getElementById("strength-level"),this.upgradeCrowdBtn=document.getElementById("upgrade-crowd-btn"),this.upgradeStrengthBtn=document.getElementById("upgrade-strength-btn"),this.shakeIntensity=0,this.canvas=document.getElementById("game-canvas"),this.prevCount=0,this.bossHealthBar=null,this.tacticalStatus=document.getElementById("tactical-status");const t=document.getElementById("pause-btn"),n=document.getElementById("pause-panel");t.addEventListener("click",()=>{["playing","fighting"].includes(this.game.state)&&(this.game.pausedState=this.game.state,this.game.state="paused",n.classList.remove("hidden"),this.game.audio.pauseAudio())}),document.getElementById("resume-btn").addEventListener("click",()=>{this.game.state=this.game.pausedState||"playing",n.classList.add("hidden"),this.game.audio.resumeAudio()});const i=document.getElementById("ambience-toggle-btn");i==null||i.addEventListener("click",()=>{const s=this.game.audio.toggleAmbienceMute();i.textContent=s?"SON : COUPÉ":"SON : ACTIVÉ"}),this.setupButtons(),this.updateHUDInfo(),this.startShakeLoop()}setupButtons(){document.getElementById("play-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.game.startGame()})}),document.getElementById("upgrade-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.showUpgrades()})}),document.getElementById("shop-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.showShop()})}),document.getElementById("shop-back-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(document.getElementById("shop-screen"),()=>{this.transitionIn(this.startScreen)})}),document.getElementById("tab-skins").addEventListener("click",()=>{document.getElementById("tab-skins").classList.add("active"),document.getElementById("tab-themes").classList.remove("active"),document.getElementById("skins-panel").classList.remove("hidden"),document.getElementById("themes-panel").classList.add("hidden")}),document.getElementById("tab-themes").addEventListener("click",()=>{document.getElementById("tab-themes").classList.add("active"),document.getElementById("tab-skins").classList.remove("active"),document.getElementById("themes-panel").classList.remove("hidden"),document.getElementById("skins-panel").classList.add("hidden")}),document.getElementById("back-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.upgradeScreen,()=>{this.transitionIn(this.startScreen)})}),document.getElementById("next-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.winScreen,()=>{this.game.startGame()})}),document.getElementById("win-upgrade-crowd-btn").addEventListener("click",()=>{this.game.upgradecrowd()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateWinUpgradeInfo(),this.pulseElement(document.getElementById("win-upgrade-crowd-btn")))}),document.getElementById("win-upgrade-strength-btn").addEventListener("click",()=>{this.game.upgradeStrength()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateWinUpgradeInfo(),this.pulseElement(document.getElementById("win-upgrade-strength-btn")))}),document.getElementById("retry-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.loseScreen,()=>{this.game.startGame()})}),this.upgradeCrowdBtn.addEventListener("click",()=>{this.game.upgradecrowd()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateUpgradeScreen(),this.updateHUDInfo(),this.pulseElement(this.upgradeCrowdBtn))}),this.upgradeStrengthBtn.addEventListener("click",()=>{this.game.upgradeStrength()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateUpgradeScreen(),this.updateHUDInfo(),this.pulseElement(this.upgradeStrengthBtn))})}transitionOut(e,t){e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity="0",e.style.transform="scale(0.9)",setTimeout(()=>{e.classList.add("hidden"),e.style.opacity="",e.style.transform="",e.style.transition="",t&&t()},300)}transitionIn(e){e.style.opacity="0",e.style.transform="scale(1.1)",e.classList.remove("hidden"),requestAnimationFrame(()=>{e.style.transition="opacity 0.4s ease, transform 0.4s ease",e.style.opacity="1",e.style.transform="scale(1)",setTimeout(()=>{e.style.transition=""},400)})}screenShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}startShakeLoop(){const e=()=>{if(this.shakeIntensity>.5){const t=(Math.random()-.5)*this.shakeIntensity,n=(Math.random()-.5)*this.shakeIntensity;this.canvas.style.transform=`translate(${t}px, ${n}px)`,this.shakeIntensity*=.85}else this.shakeIntensity=0,this.canvas.style.transform="";requestAnimationFrame(e)};e()}showLbdImpact(e,t=!1){this.lbdNotice||(this.lbdNotice=document.createElement("div"),this.lbdNotice.setAttribute("role","status"),this.lbdNotice.style.cssText="position:absolute;top:16%;left:50%;transform:translateX(-50%);z-index:40;pointer-events:none;border-radius:8px;padding:6px 10px;max-width:86%;font:700 14px system-ui,sans-serif;text-align:center;background:rgba(27,33,46,.86);border:1px solid rgba(255,255,255,.25);text-shadow:0 1px 2px #000;white-space:nowrap;",this.container.appendChild(this.lbdNotice)),this.lbdNotice.textContent=e,this.lbdNotice.style.color=t?"#bce8ff":"#ffb1b1",this.lbdNotice.style.display="block",clearTimeout(this.lbdNoticeTimeout),this.lbdNoticeTimeout=setTimeout(()=>{this.lbdNotice&&(this.lbdNotice.style.display="none")},1050)}showFloatingText(e,t){const n=document.createElement("div");n.textContent=e,n.style.cssText=`
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
        `,r.textContent=`${e} / ${e}`,t.appendChild(r),this.container.appendChild(t),this.bossHealthBar=t}updateBossHealthBar(e,t){const n=document.getElementById("boss-health-fill"),i=document.getElementById("boss-health-text");if(n){const s=Math.max(0,e/t*100);n.style.width=`${s}%`,s<25?n.style.background="linear-gradient(90deg, #f44336, #ff5722)":s<50&&(n.style.background="linear-gradient(90deg, #f44336, #E91E63)")}i&&(i.textContent=`${Math.max(0,e)} / ${t}`)}hideBossHealthBar(){if(this.bossHealthBar){this.bossHealthBar.style.transition="opacity 0.3s ease",this.bossHealthBar.style.opacity="0";const t=this.bossHealthBar;setTimeout(()=>t.remove(),300),this.bossHealthBar=null}const e=document.getElementById("boss-health-wrapper");e&&e.remove()}}class ly{constructor(e){this.audio=e,this.paths=["crowd-paris.ogg","crowd-street.ogg"],this.buffers=[],this.current=null,this.enabled=!1,this.generation=0,this.played=0,this.loadPromise=null,this.error=null}async load(){return this.buffers.length?this.buffers:(this.loadPromise||(this.loadPromise=Promise.all(this.paths.map(async e=>{const t="/convergence-runner-lab/convergence/assets/audio/"+e,n=await fetch(t);if(!n.ok)throw new Error("Ambience "+n.status+" "+e);return this.audio.ctx.decodeAudioData(await n.arrayBuffer())})).then(e=>(this.buffers=e,e)).catch(e=>{throw this.loadPromise=null,this.error=String(e),e})),this.loadPromise)}async start(){this.stop(),this.enabled=!0;const e=this.generation;try{if(await this.load(),!this.enabled||this.generation!==e)return;this.next(e)}catch(t){if(this.generation!==e)return;this.enabled=!1,console.warn("Crowd ambience unavailable, using original music:",t==null?void 0:t.message),this.audio.startMusic()}}next(e){if(!this.enabled||e!==this.generation||!this.buffers.length)return;const t=this.audio.ctx,n=this.buffers[this.played++%this.buffers.length],i=t.createBufferSource(),s=t.createGain(),r=t.currentTime,o=Math.min(.7,n.duration/8);i.buffer=n,i.connect(s),s.connect(this.audio.musicGain),s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.5,r+o),s.gain.setValueAtTime(.5,Math.max(r+o,r+n.duration-o)),s.gain.linearRampToValueAtTime(0,r+n.duration),i.onended=()=>{var c;((c=this.current)==null?void 0:c.node)===i&&(this.current=null),i.disconnect(),s.disconnect(),this.next(e)},this.current={node:i,fade:s},i.start(r)}stop(){this.enabled=!1,this.generation++;const e=this.current;if(this.current=null,e){e.node.onended=null;try{e.node.stop()}catch{}e.node.disconnect(),e.fade.disconnect()}}}class hy{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.isMusicPlaying=!1,this.musicNodes=[],this.initialized=!1,this.ambience=new ly(this),this.ambienceMuted=!1}init(){this.initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.35,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.6,this.sfxGain.connect(this.masterGain),this.initialized=!0)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startCrowdAmbience(){return this.ambience.start()}toggleAmbienceMute(){return this.ambienceMuted=!this.ambienceMuted,this.musicGain&&(this.musicGain.gain.value=this.ambienceMuted?0:.35),this.ambienceMuted}stopCrowdAmbience(){this.ambience.stop()}pauseAudio(){var e;return(e=this.ctx)==null?void 0:e.suspend()}resumeAudio(){var e;return(e=this.ctx)==null?void 0:e.resume()}async preloadCombatVoice(){return this.combatVoiceBuffer||this.combatVoiceLoading?this.combatVoiceLoading:(this.initialized||this.init(),this.combatVoiceLoading=(async()=>{try{const t=await fetch("/convergence-runner-lab/convergence/assets/audio/pourquoi-tu-me-frappe.ogg");if(!t.ok)throw new Error("combat recording not installed");this.combatVoiceBuffer=await this.ctx.decodeAudioData(await t.arrayBuffer())}catch{this.combatVoiceBuffer=null}})(),this.combatVoiceLoading)}playCombatVoice(){if(!this.ctx||this.ctx.state!=="running")return;if(!this.combatVoiceBuffer){this.preloadCombatVoice();return}if(this.combatVoiceNode)return;const e=this.ctx.createBufferSource(),t=this.ctx.createGain();e.buffer=this.combatVoiceBuffer,t.gain.value=.46,e.connect(t),t.connect(this.sfxGain),this.combatVoiceNode=e,e.onended=()=>{this.combatVoiceNode===e&&(this.combatVoiceNode=null)},e.start()}stopCombatVoice(){var e;try{(e=this.combatVoiceNode)==null||e.stop()}catch{}this.combatVoiceNode=null}startMusic(){this.initialized||this.init(),!this.isMusicPlaying&&(this.isMusicPlaying=!0,this.playMusicLoop())}stopMusic(){this.isMusicPlaying=!1,this.musicNodes.forEach(e=>{try{e.stop()}catch{}}),this.musicNodes=[]}playMusicLoop(){if(!this.isMusicPlaying)return;const e=this.ctx.currentTime,n=60/128;[110,110,146.83,130.81,110,110,146.83,164.81].forEach((o,c)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sawtooth",l.frequency.value=o,h.gain.setValueAtTime(.3,e+c*n),h.gain.exponentialRampToValueAtTime(.01,e+(c+.8)*n),l.connect(h),h.connect(this.musicGain),l.start(e+c*n),l.stop(e+(c+1)*n),this.musicNodes.push(l)});for(let o=0;o<8;o++){const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(150,e+o*n),c.frequency.exponentialRampToValueAtTime(30,e+o*n+.1),l.gain.setValueAtTime(.8,e+o*n),l.gain.exponentialRampToValueAtTime(.01,e+o*n+.15),c.connect(l),l.connect(this.musicGain),c.start(e+o*n),c.stop(e+o*n+.2),this.musicNodes.push(c)}for(let o=0;o<16;o++){const c=this.ctx.createBuffer(1,this.ctx.sampleRate*.05,this.ctx.sampleRate),l=c.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=(Math.random()*2-1)*Math.exp(-f/(l.length*.2));const h=this.ctx.createBufferSource();h.buffer=c;const u=this.ctx.createGain();u.gain.value=o%2===0?.1:.2;const d=this.ctx.createBiquadFilter();d.type="highpass",d.frequency.value=7e3,h.connect(d),d.connect(u),u.connect(this.musicGain),h.start(e+o*n*.5),this.musicNodes.push(h)}[329.63,392,440,523.25,440,392,349.23,329.63].forEach((o,c)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="square",l.frequency.value=o,h.gain.setValueAtTime(.08,e+c*n),h.gain.exponentialRampToValueAtTime(.01,e+(c+.6)*n),l.connect(h),h.connect(this.musicGain),l.start(e+c*n),l.stop(e+(c+.7)*n),this.musicNodes.push(l)});const r=8*n;setTimeout(()=>{this.musicNodes=[],this.playMusicLoop()},r*1e3-50)}playGateGood(){if(!this.initialized)return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,n)=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=t,s.gain.setValueAtTime(.4,e+n*.06),s.gain.exponentialRampToValueAtTime(.01,e+n*.06+.2),i.connect(s),s.connect(this.sfxGain),i.start(e+n*.06),i.stop(e+n*.06+.25)})}playGateBad(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(100,e+.3),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.3),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.35)}playHit(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(200,e),t.frequency.exponentialRampToValueAtTime(50,e+.1),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.15),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.2);const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.1,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(s.length*.3));const r=this.ctx.createBufferSource();r.buffer=i;const o=this.ctx.createGain();o.gain.value=.3,r.connect(o),o.connect(this.sfxGain),r.start(e)}playLbdShot(){if(!this.initialized||this.ctx.state!=="running")return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(480,e),t.frequency.exponentialRampToValueAtTime(78,e+.13),n.gain.setValueAtTime(.11,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.16)}playFightHit(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(150+Math.random()*100,e),t.frequency.exponentialRampToValueAtTime(40,e+.08),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.01,e+.1),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.12)}playWin(){if(!this.initialized)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=n,r.gain.setValueAtTime(.3,e+i*.15),r.gain.setValueAtTime(.3,e+i*.15+.1),r.gain.exponentialRampToValueAtTime(.01,e+i*.15+.4),s.connect(r),r.connect(this.sfxGain),s.start(e+i*.15),s.stop(e+i*.15+.5)});for(let n=0;n<8;n++){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=1e3+Math.random()*2e3,s.gain.setValueAtTime(.05,e+.6+n*.05),s.gain.exponentialRampToValueAtTime(.001,e+.6+n*.05+.2),i.connect(s),s.connect(this.sfxGain),i.start(e+.6+n*.05),i.stop(e+.6+n*.05+.25)}}playLose(){if(!this.initialized)return;const e=this.ctx.currentTime;[392,349.23,293.66,261.63].forEach((n,i)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=n,r.gain.setValueAtTime(.3,e+i*.25),r.gain.exponentialRampToValueAtTime(.01,e+i*.25+.4),s.connect(r),r.connect(this.sfxGain),s.start(e+i*.25),s.stop(e+i*.25+.5)})}playCountUp(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.value=800+Math.random()*400,n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playBossAppear(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(80,e),t.frequency.linearRampToValueAtTime(110,e+.5),n.gain.setValueAtTime(.4,e),n.gain.setValueAtTime(.4,e+.4),n.gain.exponentialRampToValueAtTime(.01,e+.8),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+1);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=55,s.gain.setValueAtTime(.3,e+.1),s.gain.exponentialRampToValueAtTime(.01,e+.9),i.connect(s),s.connect(this.sfxGain),i.start(e+.1),i.stop(e+1)}playClick(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.value=600,n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.01,e+.05),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.06)}}const xr=.44,xd=1.06,_d=.55,_r=a=>Math.max(0,Math.min(1,a));function uy(a,e=!1){return e?"recover":a<xr?"approach":a<xd?"contact":"pressure"}function dy(a,e=!1,t=0){return e?1-_r(t/_d):a<xr?_r(a/xr):a<xd?1:.78}const ru=8,fy=a=>{const e=_r(a);return e*e*(3-2*e)};class ou{constructor(e,t){this.game=e,this.enemy=t,this.elapsed=0,this.recoveryTime=0,this.recovering=!1,this.exchange=0,this.phase="approach",this.poses=new Map,this.reactions=new WeakMap,this.finished=!1}get players(){return this.game.crowdManager.playerStickmen.slice(1,ru+1)}get officers(){const e=this.enemy.meshGroup;return(e==null?void 0:e.children.filter(t=>["crs","bac","bravm"].includes(t.userData.faction)).slice(0,ru))||[]}onExchange(){if(!this.recovering){this.exchange++;for(const[e,t]of[[this.players,0],[this.officers,3]]){if(!e.length)continue;const n=e[(this.exchange*3+t)%e.length];this.reactions.set(n,this.elapsed+.38)}}}finish(){this.recovering=!0,this.recoveryTime=0,this.phase="recover"}cachePose(e){let t=this.poses.get(e);if(t)return t;const n={left:null,right:null,spine:null};return e.traverse(i=>{if(!i.isBone)return;const s=i.name.toLowerCase().replace(/[^a-z0-9]/g,"");!n.left&&(s.includes("lupperarm")||s.includes("leftupperarm"))&&(n.left=i),!n.right&&(s.includes("rupperarm")||s.includes("rightupperarm"))&&(n.right=i),!n.spine&&(s.endsWith("spine2")||s.endsWith("spine1")||s.endsWith("chest"))&&(n.spine=i)}),t={baseX:e.position.x,baseY:e.position.y,baseZ:e.position.z,rx:e.rotation.x,rz:e.rotation.z,arms:n},this.poses.set(e,t),t}applyActor(e,t,n,i){var p;const s=e.userData.realHumanoid,r=t?e.userData.policeModel||e:s==null?void 0:s.model;if(!r)return;const o=this.cachePose(r),c=t?1:-1,l=this.phase,h=n*.83,u=fy((this.elapsed-xr)/.28),d=Math.sin(this.elapsed*9.5+h*1.3),f=(this.reactions.get(e)??0)>this.elapsed?Math.sin(Math.PI*_r(1-(this.reactions.get(e)-this.elapsed)/.38)):0,m=l==="approach"?.15:l==="contact"?.62+.38*u:l==="pressure"?.56+.18*d:.12,x=i*m;r.rotation.x=o.rx+c*(.12*x-.18*f*i),r.rotation.z=o.rz+(.025*Math.sin(this.elapsed*7+h)+.08*f)*i,r.position.z=o.baseZ+c*(.22*x-.17*f*i),r.position.x=o.baseX+.055*x*Math.sin(this.elapsed*5+h),r.position.y=o.baseY-.055*x+.025*f;const{arms:g}=o;if(g.left&&(g.left.rotation.x+=c*.38*x-.1*f),g.right&&(g.right.rotation.x+=c*.33*x+.13*f),g.spine&&(g.spine.rotation.x+=c*.07*x),t){const b=(p=e.userData.policeModel)==null?void 0:p.userData.combatShield;if(b){const y=b.userData.combatBaseX??b.rotation.x;b.userData.combatBaseX=y,b.rotation.x=y-.2*x+.22*f}}e.userData.combatVisualState=this.phase}step(e){if(this.finished)return;this.elapsed+=e,this.recovering&&(this.recoveryTime+=e),this.phase=uy(this.elapsed,this.recovering);const t=dy(this.elapsed,this.recovering,this.recoveryTime),n=this.players,i=this.officers;for(let s=0;s<n.length;s++)this.applyActor(n[s],!1,s,t);for(let s=0;s<i.length;s++)this.applyActor(i[s],!0,s,t);this.recovering&&this.recoveryTime>=_d&&this.dispose()}dispose(){var e;if(!this.finished){this.finished=!0;for(const[t,n]of this.poses)t.position.set(n.baseX,n.baseY,n.baseZ),t.rotation.x=n.rx,t.rotation.z=n.rz;for(const t of[...this.players,...this.officers]){t.userData.combatVisualState&&delete t.userData.combatVisualState;const n=(e=t.userData.policeModel)==null?void 0:e.userData.combatShield;n&&n.userData.combatBaseX!==void 0&&(n.rotation.x=n.userData.combatBaseX)}this.poses.clear()}}}const py=6,my=58,cu=64,gy=2.15,by=7,xy=44,_y=10;function vy(a,e,t){return Math.max(e,Math.min(t,a))}function yy(a){return a>=py&&a<=my}function lu(a,e,t,n){const i=e.x-a.x,s=e.y-a.y,r=e.z-a.z,o=i*i+s*s+r*r;if(o<1e-10)return(a.x-t.x)**2+(a.y-t.y)**2+(a.z-t.z)**2<=n*n?0:null;const c=vy(((t.x-a.x)*i+(t.y-a.y)*s+(t.z-a.z)*r)/o,0,1),l=a.x+i*c-t.x,h=a.y+s*c-t.y,u=a.z+r*c-t.z;return l*l+h*h+u*u<=n*n?c:null}function My(a){return a%11===6?"eye":a%7===4?"arm":a%5===3?"leg":"bruise"}const Ci=new C,cs=new C,Pi=new C,Vs=new C,gi=new C,Sy=new tt({color:10951730,depthWrite:!1}),wy=new tt({color:8885154,depthWrite:!1}),Ey=new tt({color:15251072,depthTest:!1,depthWrite:!1}),Ty=new tt({color:16759653,transparent:!0,opacity:.7,depthTest:!1,depthWrite:!1}),Ay=new tt({color:16768410,transparent:!0,opacity:.8,depthWrite:!1});class Ry{constructor(e){this.game=e,this.scene=e.scene,this.group=new at,this.group.name="LBD-long-range-effects",this.scene.add(this.group),this.projectileGeo=new et(.105,8,6),this.streakGeo=new Qe(.019,.019,.92,5),this.dropletGeo=new et(.05,5,4),this.flashGeo=new et(.2,6,5),this.stainGeo=new Sr(.16,9),this.stainMat=new tt({color:8659245,transparent:!0,opacity:.42,depthWrite:!1,side:xt}),this.bullets=[],this.particles=[],this.flashes=[],this.decals=[],this.injured=new Set,this.stats={fired:0,impacts:0,hits:0,serious:0,missed:0,blocked:0},this.nextFire=1.65,this.elapsed=0,this.impactSlowdown=0,this.maxActive=by,this.roundRobin=0}clear(){for(const e of[this.bullets,this.particles,this.flashes,this.decals]){for(const t of e)this.group.remove(t.mesh),t.streak&&this.group.remove(t.streak);e.length=0}for(const e of this.injured){if(e.userData.lbdMark){const t=e.userData.lbdMark;e.remove(t),t.traverse(n=>{n.isMesh&&(n.geometry.dispose(),n.material.dispose())}),delete e.userData.lbdMark}e.rotation.x=0,delete e.userData.lbdInjury,delete e.userData.lbdReaction}this.injured.clear(),this.stats={fired:0,impacts:0,hits:0,serious:0,missed:0,blocked:0},this.nextFire=1.65,this.elapsed=0,this.impactSlowdown=0}get marchFactor(){return this.impactSlowdown>0?.76:1}findShooter(){var c,l;const e=this.game;if(!(e.state==="playing"||e.state==="fighting")||!((l=(c=e.crowdManager)==null?void 0:c.playerStickmen)!=null&&l.length))return null;const s=[...e.levelGenerator.enemies,...e.levelGenerator.boss?[e.levelGenerator.boss]:[]].filter(h=>{if(h.defeated||!h.meshGroup)return!1;const u=h.z-e.trackZ;return yy(u)&&h.meshGroup.visible}).sort((h,u)=>h.z-e.trackZ-(u.z-e.trackZ))[0];if(!s)return null;const r=s.meshGroup.children.filter(h=>["crs","bac"].includes(h.userData.faction));return r.length?{officer:r[this.roundRobin++%r.length],enemy:s}:null}launch(e=!1){var u,d,f;if(this.bullets.length>=this.maxActive)return!1;const t=this.findShooter();if(!t)return!1;const n=this.game.crowdManager.playerStickmen.filter((m,x)=>x>0&&m.parent);if(!n.length)return!1;const i=n[1+this.stats.fired%Math.max(1,n.length-1)]||n[0],{officer:s,enemy:r}=t;r.meshGroup.updateWorldMatrix(!0,!0);const o=(u=s.userData.policeModel)==null?void 0:u.userData.lbdMuzzle;o?o.getWorldPosition(Pi):s.getWorldPosition(Pi).add(new C(0,1.21,.3)),i.updateWorldMatrix(!0,!1),i.getWorldPosition(cs),cs.y+=1.09;const c=Pi.distanceTo(cs)/(cu+this.game.speed);if(this.game.state==="playing"&&(cs.z-=this.game.speed*c),cs.x+=(this.stats.fired%5-2)*.045,Ci.subVectors(cs,Pi).normalize(),Ci.lengthSq()<.5)return!1;const l=new oe(this.projectileGeo,Ey);l.position.copy(Pi);const h=new oe(this.streakGeo,Ty);return h.quaternion.setFromUnitVectors(new C(0,1,0),Ci),h.position.copy(Pi).addScaledVector(Ci,-.46),this.group.add(h),l.userData.lbdProjectile=!0,this.group.add(l),this.bullets.push({mesh:l,streak:h,target:i,velocity:Ci.clone().multiplyScalar(cu),age:0,maxAge:1.5}),this.spawnFlash(Pi),this.stats.fired++,(f=(d=this.game.audio)==null?void 0:d.playLbdShot)==null||f.call(d),!0}spawnFlash(e){const t=new oe(this.flashGeo,Ay);t.position.copy(e),this.group.add(t),this.flashes.push({mesh:t,ttl:.13,maximum:.13})}addParticles(e,t=!0,n=6){for(let i=0;i<n&&this.particles.length<xy;i++){const s=new oe(this.dropletGeo,t?Sy:wy);s.position.copy(e),s.scale.setScalar(.65+Math.random()*.65),this.group.add(s);const r=new C((Math.random()-.5)*3.3,1.1+Math.random()*2.7,(Math.random()-.5)*3.3);this.particles.push({mesh:s,velocity:r,ttl:.35+Math.random()*.36,maximum:.72})}if(t&&this.decals.length<_y){const i=new oe(this.stainGeo,this.stainMat);i.rotation.x=-Math.PI/2,i.position.set(e.x,.065,e.z),i.scale.set(1+Math.random()*.45,.5+Math.random()*.6,1),this.group.add(i),this.decals.push({mesh:i,ttl:3.4,maximum:3.4})}}makeMark(e,t){if(e.userData.lbdMark)return;const n=new at;n.name="LBD-wound-marker";const i=14141871,s=2369069,r=9320004,o=(c,l,h,u,d,f,m)=>{const x=new oe(new wt(l,h,u),new tt({color:c}));x.position.set(d,f,m),n.add(x)};t==="eye"?(o(s,.37,.045,.045,0,1.35,.25),o(s,.15,.12,.04,-.075,1.35,.275),o(r,.1,.055,.045,-.075,1.26,.277)):t==="arm"?(o(i,.13,.3,.12,.29,.83,.19),o(r,.14,.035,.14,.29,.85,.205)):t==="leg"?(o(i,.15,.25,.13,-.13,.36,.18),o(r,.16,.04,.14,-.13,.39,.205)):o(r,.19,.09,.035,.19,1.05,.18),e.add(n),e.userData.lbdMark=n}hit(e,t){var s,r,o,c,l,h;if(this.stats.impacts++,!(e!=null&&e.parent)||e.userData.approvedLeader)return;if(this.game.shields>0){this.stats.blocked++,this.addParticles(t,!1,5),(s=this.game.ui)==null||s.showLbdImpact("LBD · PROTECTION",!0);return}this.stats.hits++;const n=My(this.stats.hits+this.roundRobin);if(((r=e.userData.lbdInjury)==null?void 0:r.kind)||(e.userData.lbdInjury={kind:n,at:this.elapsed},this.injured.add(e),this.makeMark(e,n),n!=="bruise"&&this.stats.serious++),e.userData.lbdReaction=.62,this.impactSlowdown=.42,this.addParticles(t,!0,6),(o=this.game.ui)==null||o.screenShake(2),this.stats.hits===1||this.stats.hits%3===0){const u={eye:"ŒIL BLESSÉ",arm:"BRAS BLESSÉ",leg:"JAMBE BLESSÉE",bruise:"MANIFESTANT BLESSÉ"};(c=this.game.ui)==null||c.showLbdImpact("LBD · "+u[n])}(h=(l=this.game.audio)==null?void 0:l.playFightHit)==null||h.call(l)}findObstacle(e,t){for(const n of this.game.levelGenerator.gates)if(!n.passed)for(const i of[n.leftMesh,n.rightMesh]){const s=i==null?void 0:i.userData.root;if(!(s!=null&&s.userData.lbdOccluder)||!s.visible)continue;Vs.set(s.position.x,.8,s.position.z);const r=lu(e,t,Vs,1.24);if(r!==null)return e.clone().lerp(t,r)}return null}advanceProjectiles(e){for(let t=this.bullets.length-1;t>=0;t--){const n=this.bullets[t],i=n.mesh.position;gi.copy(i).addScaledVector(n.velocity,e),n.age+=e;let s=!1;const r=this.findObstacle(i,gi);r&&(this.stats.blocked++,this.addParticles(r,!1,5),s=!0);const o=n.target;if(!s&&(o!=null&&o.parent)){o.updateWorldMatrix(!0,!1),o.getWorldPosition(Vs),Vs.y+=1.05;const c=lu(i,gi,Vs,.58);if(c!==null){const l=i.clone().lerp(gi,c);this.hit(o,l),s=!0}}s||n.age>=n.maxAge||gi.y<.18?(s||(this.stats.missed++,this.addParticles(gi,!1,3)),this.group.remove(n.mesh),this.group.remove(n.streak),this.bullets.splice(t,1)):(n.mesh.position.copy(gi),Ci.copy(n.velocity).normalize(),n.streak.position.copy(gi).addScaledVector(Ci,-.46))}}advanceParticles(e){for(const[t,n]of[[this.particles,"particle"],[this.flashes,"flash"],[this.decals,"decal"]])for(let i=t.length-1;i>=0;i--){const s=t[i];s.ttl-=e,n==="particle"?(s.velocity.y-=9*e,s.mesh.position.addScaledVector(s.velocity,e),s.mesh.scale.multiplyScalar(Math.max(.8,1-e))):n==="flash"?s.mesh.scale.setScalar(Math.max(.02,s.ttl/s.maximum)):s.mesh.scale.multiplyScalar(Math.max(.9,1-e*.23)),s.ttl<=0&&(this.group.remove(s.mesh),t.splice(i,1))}}update(e){if(this.game.state==="paused"||this.game.state==="menu"||this.game.state==="win"||this.game.state==="lose")return;const t=Math.min(.06,Math.max(0,e));this.elapsed+=t,this.nextFire-=t,this.impactSlowdown=Math.max(0,this.impactSlowdown-t),this.nextFire<=0&&(this.launch()?this.nextFire=gy:this.nextFire=.24),this.advanceProjectiles(t),this.advanceParticles(t);for(const n of this.injured){const i=Math.max(0,(n.userData.lbdReaction||0)-t);n.userData.lbdReaction=i,n.rotation.x=i>0?Math.sin((.62-i)*12)*i*.24:0}}}const Cy=[16728232,2554352,16769883,16777215];class Py{constructor(e){this.game=e,this.group=new at,this.group.name="GenZ-visible-arcade-fireworks",e.scene.add(this.group),this.bursts=[],this.clock=0,this.active=0,this.shooter=null,this.ball=new et(.16,8,6),this.materials=Cy.map(t=>new tt({color:t,depthTest:!1,depthWrite:!1})),this.sparkGeo=new et(.075,5,4),this.flashGeo=new et(.5,9,7)}clear(){for(const e of this.bursts)this.group.remove(e.mesh),e.trail&&this.group.remove(e.trail);this.bursts.length=0,this.clock=0,this.active=0,this.shooter&&(this.shooter.rotation.z=0),this.shooter=null}addGenz(e){this.active=Math.min(12,this.active+Math.max(0,e)),this.clock=2}pickEnemy(){const e=this.game;return[...e.levelGenerator.enemies,...e.levelGenerator.boss?[e.levelGenerator.boss]:[]].filter(t=>!t.defeated&&t.z-e.trackZ>2&&t.z-e.trackZ<70).sort((t,n)=>t.z-n.z)[0]}fire(){var l;const e=this.game;if(this.active<=0||!((l=e.crowdManager)!=null&&l.playerGroup))return!1;const t=this.pickEnemy();if(!t)return!1;const n=e.crowdManager.playerStickmen.filter(h=>h.userData.bonusFaction==="genz"&&h.parent);if(!n.length)return!1;const i=n[0]||e.crowdManager.playerStickmen[Math.min(2,e.crowdManager.playerStickmen.length-1)];if(!i)return!1;this.shooter=i,this.shooter.userData.genzFireAnimation=.9,i.rotation.z=-.2;const s=new C,r=new C;i.getWorldPosition(s),s.y+=1.4,t.meshGroup.getWorldPosition(r),r.y+=1.75;const o=new oe(this.ball,this.materials[1]);o.scale.setScalar(2.3),o.position.copy(s),this.group.add(o);const c=new oe(new Qe(.07,.14,1.9,7),this.materials[0]);return c.position.copy(s),this.group.add(c),this.bursts.push({kind:"shot",mesh:o,trail:c,start:s,end:r,progress:0,ttl:1.65}),!0}explode(e){const t=new oe(this.flashGeo,this.materials[2]);t.position.copy(e),this.group.add(t),this.bursts.push({kind:"flash",mesh:t,ttl:.32,maximum:.32});for(let n=0;n<18&&this.bursts.length<45;n++){const i=new oe(this.sparkGeo,this.materials[n%4]);i.position.copy(e),this.group.add(i);const s=n*Math.PI*2/18,r=new C(Math.cos(s)*(2.8+n%4),(n%5-2)*1.4,Math.sin(s)*(2.8+n%4));this.bursts.push({kind:"spark",mesh:i,velocity:r,ttl:.52,maximum:.52})}}update(e){const t=this.game.state;if(t==="paused"||t==="menu"||t==="win"||t==="lose")return;const n=Math.min(e,.06);this.clock+=n,this.clock>2.6&&(this.clock=0,this.fire()),this.shooter&&(this.shooter.userData.genzFireAnimation=Math.max(0,(this.shooter.userData.genzFireAnimation||0)-n),this.shooter.userData.genzFireAnimation===0&&(this.shooter.rotation.z=0,this.shooter=null));for(let i=this.bursts.length-1;i>=0;i--){const s=this.bursts[i];if(s.ttl-=n,s.kind==="shot"){s.progress=Math.min(1,s.progress+n*.88);const r=s.progress;s.mesh.position.lerpVectors(s.start,s.end,r),s.mesh.position.y+=Math.sin(r*Math.PI)*3.1;const o=s.start.clone().lerp(s.end,Math.max(0,r-.045));o.y+=Math.sin(Math.max(0,r-.045)*Math.PI)*3.1,s.trail.position.copy(s.mesh.position).add(o).multiplyScalar(.5);const c=s.mesh.position.clone().sub(o).normalize();s.trail.quaternion.setFromUnitVectors(new C(0,1,0),c),s.trail.scale.y=Math.max(.3,s.mesh.position.distanceTo(o)/1.9),r>=1&&(this.explode(s.end),s.ttl=0)}else s.kind==="spark"?(s.mesh.position.addScaledVector(s.velocity,n),s.velocity.y-=2.5*n,s.mesh.scale.setScalar(Math.max(.03,s.ttl/s.maximum))):s.kind==="flash"&&s.mesh.scale.setScalar(1.2+(1-s.ttl/s.maximum)*2.8);s.ttl<=0&&(this.group.remove(s.mesh),s.trail&&this.group.remove(s.trail),this.bursts.splice(i,1))}}}const Ro=3;class Dy{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.clock=new lm,this.qa=new URLSearchParams(location.search).has("qa"),this.state="menu",this.level=1,this.coins=0,this.crowdUpgrade=1,this.strengthUpgrade=1,this.skins=[{id:"blue",name:"Gilets jaunes",color:15910450,price:0,owned:!0},{id:"green",name:"Forest",color:5025616,price:10,owned:!1},{id:"orange",name:"Sunset",color:16750592,price:10,owned:!1},{id:"purple",name:"Royal",color:10233776,price:15,owned:!1},{id:"pink",name:"Bubblegum",color:15277667,price:15,owned:!1},{id:"cyan",name:"Ice",color:48340,price:20,owned:!1},{id:"yellow",name:"Gold",color:16771899,price:20,owned:!1},{id:"white",name:"Ghost",color:16777215,price:25,owned:!1},{id:"black",name:"Shadow",color:3355443,price:25,owned:!1},{id:"rainbow",name:"Rainbow",color:16717636,price:0,owned:!1,shareUnlock:!0}],this.equippedSkin="blue",this.themes=[{id:"default",name:"Ville de jour",colors:["#1b3551","#5580a1","#a4b8c6","#dde1db","#f8e6c9"],fog:12832973,ground:6715264,price:0,owned:!0},{id:"sunset",name:"Sunset",colors:["#1a0011","#ff6b35","#ff8c61","#ffc89e","#fff3e0"],fog:16763038,ground:9268835,price:15,owned:!1},{id:"night",name:"Night",colors:["#000011","#0d1b2a","#1b2838","#2d4059","#3d5a80"],fog:1779768,ground:3046706,price:15,owned:!1},{id:"candy",name:"Candy",colors:["#4a0072","#c51162","#ff6090","#ff80ab","#ffe0f0"],fog:16744619,ground:8505220,price:20,owned:!1},{id:"ocean",name:"Ocean",colors:["#001a33","#003366","#006699","#3399cc","#99ccff"],fog:3381708,ground:2533018,price:20,owned:!1},{id:"volcano",name:"Volcano",colors:["#1a0000","#4d0000","#800000","#cc3300","#ff6600"],fog:13382400,ground:6111287,price:25,owned:!1}],this.equippedTheme="default",this.fightingEnemy=null,this.fightTimer=0,this.fightInterval=.2,this.combatChoreo=null,this.playerCrowd=null,this.playerX=0,this.speed=Ro,this.trackZ=0,this.levelGenerator=null,this.trackLength=200,this.inputX=0,this.isDragging=!1,this.lastInputX=0,this.loadProgress()}init(){this.setupRenderer(),this.setupScene(),this.setupCamera(),this.setupLights(),this.setupInput(),this.ui=new cy(this),this.crowdManager=new oy(this.scene,this),this.levelGenerator=new Tv(this.scene,this),this.audio=new hy,this.lbdSystem=new Ry(this),this.genzFireworks=new Py(this),Promise.allSettled([bd(),dv(),ov()]),this.animate()}setupRenderer(){const e=document.getElementById("game-canvas");this.renderer=new a_({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.outputColorSpace=ft,this.renderer.toneMapping=Ic,this.renderer.toneMappingExposure=1.18,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hu,window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()})}setupScene(){this.scene=new Wf,this.applyTheme()}setupCamera(){this.camera=new $t(60,window.innerWidth/window.innerHeight,.1,300),this.camera.position.set(0,4.5,6),this.camera.lookAt(0,0,-6)}setupLights(){const e=new jp(15003135,.9);this.scene.add(e);const t=new ju(16772556,2);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=100,t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=30,t.shadow.camera.bottom=-30,this.scene.add(t),this.directionalLight=t;const n=new et(3,16,16),i=new tt({color:16771899}),s=new oe(n,i);s.position.set(40,45,-80),this.scene.add(s);const r=new et(5,16,16),o=new tt({color:16775620,transparent:!0,opacity:.3}),c=new oe(r,o);c.position.set(40,45,-80),this.scene.add(c);const l=new zp(8900331,6732650,.3);this.scene.add(l)}setupInput(){const e=this.renderer.domElement;e.addEventListener("mousedown",t=>{this.state==="playing"&&(this.isDragging=!0,this.lastInputX=t.clientX)}),e.addEventListener("mousemove",t=>{if(!this.isDragging||this.state!=="playing")return;const n=(t.clientX-this.lastInputX)*.02;this.playerX=Math.max(-3.5,Math.min(3.5,this.playerX+n)),this.lastInputX=t.clientX}),e.addEventListener("mouseup",()=>{this.isDragging=!1}),e.addEventListener("mouseleave",()=>{this.isDragging=!1}),e.addEventListener("touchstart",t=>{this.state==="playing"&&(this.isDragging=!0,this.lastInputX=t.touches[0].clientX)},{passive:!0}),e.addEventListener("touchmove",t=>{if(!this.isDragging||this.state!=="playing")return;t.preventDefault();const n=(t.touches[0].clientX-this.lastInputX)*.02;this.playerX=Math.max(-3.5,Math.min(3.5,this.playerX+n)),this.lastInputX=t.touches[0].clientX},{passive:!1}),e.addEventListener("touchend",()=>{this.isDragging=!1}),this.keys={},window.addEventListener("keydown",t=>{this.keys[t.key]=!0}),window.addEventListener("keyup",t=>{this.keys[t.key]=!1})}startGame(){var t,n;this.state="playing",this.shields=0,this.gateHistory=[],this.runId=(this.runId||0)+1,this.trackZ=0,this.playerX=0,this.speed=Ro,this.audio.init(),this.audio.resume(),this.audio.startCrowdAmbience(),(n=(t=this.audio).preloadCombatVoice)==null||n.call(t),this.clearLevel(),this.trackLength=180,this.levelGenerator.generate(this.level,this.trackLength),this.trackLength=this.levelGenerator.plan.trackLength,this.levelGenerator.updateVisibility(this.trackZ);const e=this.getStartingCrowdSize();this.crowdManager.createPlayerCrowd(e),this.ui.showHUD(),this.ui.updateCount(e)}getStartingCrowdSize(){return Math.min(ol,5+(this.crowdUpgrade-1)*3)}clearLevel(){var t,n,i;(t=this.lbdSystem)==null||t.clear(),(n=this.genzFireworks)==null||n.clear(),(i=this.combatChoreo)==null||i.dispose(),this.combatChoreo=null;const e=[];this.scene.traverse(s=>{s.userData.dynamic&&e.push(s)}),e.forEach(s=>{this.scene.remove(s),s.geometry&&s.geometry.dispose(),s.material&&(Array.isArray(s.material)?s.material.forEach(r=>r.dispose()):s.material.dispose())}),this.crowdManager.clear(),this.levelGenerator.clear()}update(e){var t,n,i,s,r,o,c,l,h;if(this.levelGenerator.updateVisibility(this.trackZ),this.state!=="paused"&&fv(e),(t=this.lbdSystem)==null||t.update(e),(n=this.genzFireworks)==null||n.update(e),this.state==="boss_defeated"){this.crowdManager.update(e),(i=this.combatChoreo)==null||i.step(e),(s=this.combatChoreo)!=null&&s.finished&&(this.combatChoreo=null),this.levelGenerator.updateBossDefeat(e);return}if(this.state==="fighting"){this.updateFight(e),this.crowdManager.update(e),(r=this.combatChoreo)==null||r.step(e),(o=this.combatChoreo)!=null&&o.finished&&(this.combatChoreo=null),this.ui.updateCount(this.crowdManager.getPlayerCount()),this.fightCameraTime=(this.fightCameraTime||0)+e;const u=Math.sin(this.fightCameraTime*25)*.075,d=Math.cos(this.fightCameraTime*30)*.035;this.camera.position.x=this.playerX*.3+u,this.camera.position.z=-this.trackZ+7.8,this.camera.position.y=5+d,this.camera.lookAt(this.playerX*.3,1.1,-this.trackZ-.85);return}this.state==="playing"&&((this.keys.ArrowLeft||this.keys.a)&&(this.playerX=Math.max(-3.5,this.playerX-8*e)),(this.keys.ArrowRight||this.keys.d)&&(this.playerX=Math.min(3.5,this.playerX+8*e)),this.trackZ+=this.speed*(((c=this.lbdSystem)==null?void 0:c.marchFactor)??1)*e,this.crowdManager.updatePlayerPosition(this.playerX,-this.trackZ),this.camera.position.x=this.playerX*.3,this.camera.position.y=6.3,this.camera.position.z=-this.trackZ+8.4,this.camera.lookAt(this.playerX*.3,.8,-this.trackZ-8),this.directionalLight.position.set(this.playerX+10,20,-this.trackZ+10),this.directionalLight.target.position.set(this.playerX,0,-this.trackZ),this.directionalLight.target.updateMatrixWorld(),this.checkGateCollisions(),this.state==="playing"&&(this.checkObstacleCollisions(),this.state==="playing"&&(this.checkEnemyCollisions(),this.state==="playing"&&(this.trackZ>=this.trackLength&&this.checkBossFight(),this.crowdManager.update(e),(l=this.combatChoreo)!=null&&l.recovering&&this.combatChoreo.step(e),(h=this.combatChoreo)!=null&&h.finished&&(this.combatChoreo=null),this.ui.updateCount(this.crowdManager.getPlayerCount())))))}checkGateCollisions(){const e=this.levelGenerator.gates;for(let t=e.length-1;t>=0;t--){const n=e[t];if(n.passed)continue;const i=-n.z,s=-this.trackZ;Math.abs(s-i)<1&&(this.playerX<0&&n.leftGate?(this.applyGate(n.leftGate),n.passed=!0,this.highlightGate(n,"left")):this.playerX>=0&&n.rightGate&&(this.applyGate(n.rightGate),n.passed=!0,this.highlightGate(n,"right")))}}applyGate(e){var r;const t={count:this.crowdManager.getPlayerCount(),shields:this.shields},n=pr(t,e);this.shields=n.shields;const i=n.count-t.count;if(i>0&&(this.crowdManager.addToPlayerCrowd(i,e.bonusFaction),e.bonusFaction)){const o=this.crowdManager.playerStickmen.slice(-i);for(const c of o)c.userData.bonusFaction=e.bonusFaction;e.bonusFaction==="genz"&&((r=this.genzFireworks)==null||r.addGenz(i))}i<0&&this.crowdManager.removeFromPlayerCrowd(-i);const s=n.shields-t.shields;if(i||s){const o=i>0||s>0;o?this.audio.playGateGood():this.audio.playGateBad(),this.ui.showFloatingText((i?(i>0?"+":"")+i:"")+(s?"  ◇ "+(s>0?"+":"")+s:""),o?"#a8f0d1":"#ff817b"),this.ui.screenShake(o?2:4)}else this.ui.showFloatingText("Condition non remplie","#ddc5ff");this.gateHistory.push({choice:e,before:t,after:n}),n.count===0&&this.loseGame()}highlightGate(e,t){const n=t==="left"?e.leftMesh:e.rightMesh;n&&(n.material.emissive=new Ae(16777215),n.material.emissiveIntensity=.5,setTimeout(()=>{n.material&&(n.material.emissiveIntensity=0)},300))}checkObstacleCollisions(){const e=this.levelGenerator.obstacles;for(const t of e){if(t.passed)continue;const n=-t.z,i=-this.trackZ;if(Math.abs(i-n)<1.5){const s=this.playerX-1.5,r=this.playerX+1.5,o=t.x-t.width/2,c=t.x+t.width/2;if(r>o&&s<c){const l=Math.ceil(this.crowdManager.getPlayerCount()*.3);this.crowdManager.removeFromPlayerCrowd(l),t.passed=!0,this.audio.playHit(),this.ui.screenShake(8),this.ui.showFloatingText(`-${l}`,"#ff5722"),this.crowdManager.getPlayerCount()<=0&&this.loseGame()}}}}checkEnemyCollisions(){var t,n,i;const e=this.levelGenerator.enemies;for(const s of e){if(s.defeated)continue;const r=-s.z,o=-this.trackZ;if(Math.abs(o-r)<2){this.state="fighting",(n=(t=this.audio).playCombatVoice)==null||n.call(t),this.fightingEnemy=s,this.fightingEnemy.remainingCount=s.count,this.fightTimer=-.44,this.fightCameraTime=0,(i=this.combatChoreo)==null||i.dispose(),this.combatChoreo=new ou(this,s),this.speed=0,this.audio.playHit(),this.ui.screenShake(10),this.crowdManager.spawnImpactFlash(new C(this.playerX,1,-this.trackZ),16777215),this.crowdManager.spawnSparks(new C(this.playerX,1,-this.trackZ),16755200,10);return}}}updateFight(e){var t,n;if(this.fightTimer+=e,this.fightTimer>=this.fightInterval){this.fightTimer-=this.fightInterval,this.crowdManager.getPlayerCount();const i=this.fightingEnemy;if(!i)return;(t=this.combatChoreo)==null||t.onExchange();const s=this.strengthUpgrade,r=Math.min(s,i.remainingCount);if(i.remainingCount-=r,i.remainingCount>0&&(this.shields>0?this.shields--:this.crowdManager.removeFromPlayerCrowd(1),this.crowdManager.spawnDeathEffect(this.playerX,-this.trackZ,2201331)),r>0){const o=(Math.random()-.5)*3;this.crowdManager.spawnDeathEffect(o,-i.z,16007990),this.audio.playFightHit()}if(i.isBoss?(this.ui.updateBossHealthBar(i.remainingCount,i.count),this.levelGenerator.shakeBoss()):this.levelGenerator.updateEnemyLabel(i),i.remainingCount<=0)if((n=this.combatChoreo)==null||n.finish(),i.defeated=!0,i.isBoss){this.ui.hideBossHealthBar(),this.levelGenerator.playBossDefeatAnimation(),this.ui.screenShake(15),this.crowdManager.spawnSparks(new C(0,3,-i.z),10233776,20);const o=this.runId;setTimeout(()=>{this.runId===o&&this.state==="boss_defeated"&&this.winGame()},1200),this.state="boss_defeated",this.fightingEnemy=null,this.fightCameraTime=0}else this.crowdManager.removeEnemyCrowd(i),this.state="playing",this.speed=Ro,this.fightingEnemy=null,this.fightCameraTime=0,this.camera.position.y=12;else this.crowdManager.getPlayerCount()<=0&&(this.ui.hideBossHealthBar(),this.loseGame(),this.fightingEnemy=null,this.fightCameraTime=0)}this.crowdManager.updateParticles(e)}checkBossFight(){var n,i,s;const e=this.levelGenerator.boss;if(!e||e.defeated){this.winGame();return}this.state="fighting",(i=(n=this.audio).playCombatVoice)==null||i.call(n),this.audio.playBossAppear(),this.ui.screenShake(12),this.fightCameraTime=0,this.fightingEnemy={z:e.z,count:e.health,remainingCount:e.health,defeated:!1,isBoss:!0,meshGroup:e.meshGroup,kind:"crs"},this.fightTimer=-.44,this.fightInterval=.2,this.speed=0,(s=this.combatChoreo)==null||s.dispose(),this.combatChoreo=new ou(this,this.fightingEnemy),this.ui.showBossHealthBar(e.health);const t=this.fightingEnemy;Object.defineProperty(t,"defeated",{get:()=>e.defeated,set:r=>{e.defeated=r}})}winGame(){var t,n;if(this.state==="win"||this.state==="lose")return;(n=(t=this.audio).stopCombatVoice)==null||n.call(t),this.state="win";const e=Math.floor(this.crowdManager.getPlayerCount()*2+this.level*10);this.coins+=e,this.level++,this.saveProgress(),this.audio.stopCrowdAmbience(),this.audio.stopMusic(),this.audio.playWin(),this.ui.showWin(e)}loseGame(){var t,n,i;if(this.state==="win"||this.state==="lose")return;(t=this.combatChoreo)==null||t.dispose(),this.combatChoreo=null,(i=(n=this.audio).stopCombatVoice)==null||i.call(n),this.state="lose";const e=Math.floor(this.level*2);this.coins+=e,this.saveProgress(),this.audio.stopCrowdAmbience(),this.audio.stopMusic(),this.audio.playLose(),this.ui.showLose()}upgradecrowd(){const e=this.crowdUpgrade*50;return this.coins>=e?(this.coins-=e,this.crowdUpgrade++,this.saveProgress(),!0):!1}upgradeStrength(){const e=this.strengthUpgrade*75;return this.coins>=e?(this.coins-=e,this.strengthUpgrade++,this.saveProgress(),!0):!1}buySkin(e){const t=this.skins.find(n=>n.id===e);return!t||t.owned||t.shareUnlock||this.coins<t.price?!1:(this.coins-=t.price,t.owned=!0,this.equippedSkin=e,this.saveProgress(),!0)}equipSkin(e){const t=this.skins.find(n=>n.id===e);return!t||!t.owned?!1:(this.equippedSkin=e,this.saveProgress(),!0)}shareForSkin(e){const t=this.skins.find(n=>n.id===e);return!t||!t.shareUnlock||t.owned?!1:(t.owned=!0,this.equippedSkin=e,this.saveProgress(),!0)}buyTheme(e){const t=this.themes.find(n=>n.id===e);return!t||t.owned||this.coins<t.price?!1:(this.coins-=t.price,t.owned=!0,this.equippedTheme=e,this.applyTheme(),this.saveProgress(),!0)}equipTheme(e){const t=this.themes.find(n=>n.id===e);return!t||!t.owned?!1:(this.equippedTheme=e,this.applyTheme(),this.saveProgress(),!0)}getPlayerColor(){const e=this.skins.find(t=>t.id===this.equippedSkin);return e?e.color:2201331}getActiveTheme(){return this.themes.find(e=>e.id===this.equippedTheme)||this.themes[0]}applyTheme(){const e=this.getActiveTheme(),t=document.createElement("canvas");t.width=1,t.height=512;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,e.colors[0]),i.addColorStop(.2,e.colors[1]),i.addColorStop(.5,e.colors[2]),i.addColorStop(.8,e.colors[3]),i.addColorStop(1,e.colors[4]),n.fillStyle=i,n.fillRect(0,0,1,512);const s=new vi(t);this.scene.background=s,this.scene.fog=new Xc(e.fog,.006)}saveProgress(){const e={level:this.level,coins:this.coins,crowdUpgrade:this.crowdUpgrade,strengthUpgrade:this.strengthUpgrade,ownedSkins:this.skins.filter(t=>t.owned).map(t=>t.id),equippedSkin:this.equippedSkin,ownedThemes:this.themes.filter(t=>t.owned).map(t=>t.id),equippedTheme:this.equippedTheme};localStorage.setItem("convergence_vertical_v1",JSON.stringify(e))}loadProgress(){const e=localStorage.getItem("convergence_vertical_v1");if(e){const t=JSON.parse(e);this.level=t.level||1,this.coins=t.coins||0,this.crowdUpgrade=t.crowdUpgrade||1,this.strengthUpgrade=t.strengthUpgrade||1,t.ownedSkins&&this.skins.forEach(n=>{n.owned=t.ownedSkins.includes(n.id)}),t.equippedSkin&&(this.equippedSkin=t.equippedSkin),t.ownedThemes&&this.themes.forEach(n=>{n.owned=t.ownedThemes.includes(n.id)}),t.equippedTheme&&(this.equippedTheme=t.equippedTheme)}}animate(){requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.05);this.qaManual||this.update(e),this.renderer.render(this.scene,this.camera)}}try{const a=new Dy;a.init(),a.qa&&(window.__convergence=a)}catch(a){console.error("Game init failed:",a),document.body.innerHTML=`<div style="color:white;padding:20px;text-align:center;">
        <h2>Error loading game</h2>
        <p>${a.message}</p>
    </div>`}
