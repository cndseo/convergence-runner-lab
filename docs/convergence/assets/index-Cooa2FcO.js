(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="184",kh=0,lc=1,Gh=2,dr=1,Nl=2,xs=3,Xn=0,qt=1,Xt=2,Hn=0,Hi=1,hc=2,uc=3,dc=4,zh=5,mi=100,Vh=101,Hh=102,Wh=103,Xh=104,qh=200,Yh=201,Kh=202,jh=203,Ea=204,Ta=205,$h=206,Zh=207,Jh=208,Qh=209,eu=210,tu=211,nu=212,iu=213,su=214,Aa=0,wa=1,Ra=2,qi=3,Ca=4,Ia=5,Pa=6,La=7,Ul=0,ru=1,au=2,Tn=0,Fl=1,Ol=2,Bl=3,kl=4,Gl=5,zl=6,Vl=7,fc="attached",ou="detached",Hl=300,xi=301,Yi=302,Or=303,Br=304,Rr=306,Ki=1e3,bn=1001,vr=1002,wt=1003,Wl=1004,vs=1005,Rt=1006,fr=1007,Gn=1008,Zt=1009,Xl=1010,ql=1011,Ts=1012,Ao=1013,Rn=1014,an=1015,qn=1016,wo=1017,Ro=1018,As=1020,Yl=35902,Kl=35899,jl=1021,$l=1022,on=1023,Yn=1026,_i=1027,Co=1028,Io=1029,vi=1030,Po=1031,Lo=1033,pr=33776,mr=33777,gr=33778,_r=33779,Da=35840,Na=35841,Ua=35842,Fa=35843,Oa=36196,Ba=37492,ka=37496,Ga=37488,za=37489,Mr=37490,Va=37491,Ha=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Ka=37813,ja=37814,$a=37815,Za=37816,Ja=37817,Qa=37818,eo=37819,to=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,yr=36285,co=36286,cu=2200,lu=2201,hu=2202,ws=2300,Rs=2301,kr=2302,pc=2303,Gi=2400,zi=2401,Sr=2402,Do=2500,uu=2501,du=0,Zl=1,lo=2,fu=3200,ho=0,pu=1,si="",Dt="srgb",Qt="srgb-linear",br="linear",Je="srgb",Si=7680,mc=519,mu=512,gu=513,_u=514,No=515,xu=516,vu=517,Uo=518,Mu=519,uo=35044,gc="300 es",En=2e3,Cs=2001;function yu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Su(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Is(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bu(){const r=Is("canvas");return r.style.display="block",r}const _c={};function Er(...r){const e="THREE."+r.shift();console.log(e,...r)}function Jl(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Me(...r){r=Jl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function we(...r){r=Jl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function fo(...r){const e=r.join(" ");e in _c||(_c[e]=!0,Me(...r))}function Eu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Tu={[Aa]:wa,[Ra]:Pa,[Ca]:La,[qi]:Ia,[wa]:Aa,[Pa]:Ra,[La]:Ca,[Ia]:qi};class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xc=1234567;const Ss=Math.PI/180,ji=180/Math.PI;function mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function We(r,e,t){return Math.max(e,Math.min(t,r))}function Fo(r,e){return(r%e+e)%e}function Au(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function wu(r,e,t){return r!==e?(t-r)/(e-r):0}function bs(r,e,t){return(1-t)*r+t*e}function Ru(r,e,t,n){return bs(r,e,1-Math.exp(-t*n))}function Cu(r,e=1){return e-Math.abs(Fo(r,e*2)-e)}function Iu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Pu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Du(r,e){return r+Math.random()*(e-r)}function Nu(r){return r*(.5-Math.random())}function Uu(r){r!==void 0&&(xc=r);let e=xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fu(r){return r*Ss}function Ou(r){return r*ji}function Bu(r){return(r&r-1)===0&&r!==0}function ku(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zu(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vu={DEG2RAD:Ss,RAD2DEG:ji,generateUUID:mn,clamp:We,euclideanModulo:Fo,mapLinear:Au,inverseLerp:wu,lerp:bs,damp:Ru,pingpong:Cu,smoothstep:Iu,smootherstep:Pu,randInt:Lu,randFloat:Du,randFloatSpread:Nu,seededRandom:Uu,degToRad:Fu,radToDeg:Ou,isPowerOfTwo:Bu,ceilPowerOfTwo:ku,floorPowerOfTwo:Gu,setQuaternionFromProperEuler:zu,normalize:Qe,denormalize:fn},$o=class $o{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$o.prototype.isVector2=!0;let ke=$o;class cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],M=s[a+3];if(u!==M||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*M;m<0&&(d=-d,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);p=Math.sin(p*v)/b,o=Math.sin(o*v)/b,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+M*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+M*o;const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zo=class Zo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zo.prototype.isVector3=!0;let P=Zo;const Gr=new P,vc=new cn,Jo=class Jo{constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=i[0],m=i[3],p=i[6],v=i[1],b=i[4],S=i[7],w=i[2],T=i[5],C=i[8];return s[0]=a*M+o*v+c*w,s[3]=a*m+o*b+c*T,s[6]=a*p+o*S+c*C,s[1]=l*M+h*v+u*w,s[4]=l*m+h*b+u*T,s[7]=l*p+h*S+u*C,s[2]=d*M+f*v+g*w,s[5]=d*m+f*b+g*T,s[8]=d*p+f*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=u*M,e[1]=(i*l-h*n)*M,e[2]=(o*n-i*a)*M,e[3]=d*M,e[4]=(h*t-i*c)*M,e[5]=(i*s-o*t)*M,e[6]=f*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zr.makeScale(e,t)),this}rotate(e){return this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jo.prototype.isMatrix3=!0;let Le=Jo;const zr=new Le,Mc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hu(){const r={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?br:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qt]:{primaries:e,whitePoint:n,transfer:br,toXYZ:Mc,fromXYZ:yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Mc,fromXYZ:yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),r}const He=Hu();function Wn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bi;class Wu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Is("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class Oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Vr(i[a].image)):s.push(Vr(i[a]))}else s=Vr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let qu=0;const Hr=new P;class Ct extends oi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=bn,i=bn,s=Rt,a=Gn,o=on,c=Zt,l=Ct.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=mn(),this.name="",this.source=new Oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hr).x}get height(){return this.source.getSize(Hr).y}get depth(){return this.source.getSize(Hr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Hl;Ct.DEFAULT_ANISOTROPY=1;const Qo=class Qo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(f+1)/2,w=(p+1)/2,T=(h+d)/4,C=(u+M)/4,_=(g+m)/4;return b>S&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=T/n,s=C/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=_/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=_/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-M)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qo.prototype.isVector4=!0;let ct=Qo;class Yu extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Ct(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Oo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Yu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ql extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wr=class wr{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,M,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,M=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,M=l*u;t[0]=d+M*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,M=l*u;t[0]=d-M*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,M=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+M,t[1]=c*u,t[5]=M*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,M=o*l;t[0]=c*h,t[4]=M-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-M*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,M=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+M,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=M*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ju,e,$u)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Zn.crossVectors(n,jt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Zn.crossVectors(n,jt)),Zn.normalize(),Us.crossVectors(jt,Zn),i[0]=Zn.x,i[4]=Us.x,i[8]=jt.x,i[1]=Zn.y,i[5]=Us.y,i[9]=jt.y,i[2]=Zn.z,i[6]=Us.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],v=n[3],b=n[7],S=n[11],w=n[15],T=i[0],C=i[4],_=i[8],A=i[12],I=i[1],R=i[5],N=i[9],H=i[13],X=i[2],U=i[6],z=i[10],B=i[14],J=i[3],Q=i[7],le=i[11],xe=i[15];return s[0]=a*T+o*I+c*X+l*J,s[4]=a*C+o*R+c*U+l*Q,s[8]=a*_+o*N+c*z+l*le,s[12]=a*A+o*H+c*B+l*xe,s[1]=h*T+u*I+d*X+f*J,s[5]=h*C+u*R+d*U+f*Q,s[9]=h*_+u*N+d*z+f*le,s[13]=h*A+u*H+d*B+f*xe,s[2]=g*T+M*I+m*X+p*J,s[6]=g*C+M*R+m*U+p*Q,s[10]=g*_+M*N+m*z+p*le,s[14]=g*A+M*H+m*B+p*xe,s[3]=v*T+b*I+S*X+w*J,s[7]=v*C+b*R+S*U+w*Q,s[11]=v*_+b*N+S*z+w*le,s[15]=v*A+b*H+S*B+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],M=e[7],m=e[11],p=e[15],v=c*f-l*d,b=o*f-l*u,S=o*d-c*u,w=a*f-l*h,T=a*d-c*h,C=a*u-o*h;return t*(M*v-m*b+p*S)-n*(g*v-m*w+p*T)+i*(g*b-M*w+p*C)-s*(g*S-M*T+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],M=e[13],m=e[14],p=e[15],v=t*o-n*a,b=t*c-i*a,S=t*l-s*a,w=n*c-i*o,T=n*l-s*o,C=i*l-s*c,_=h*M-u*g,A=h*m-d*g,I=h*p-f*g,R=u*m-d*M,N=u*p-f*M,H=d*p-f*m,X=v*H-b*N+S*R+w*I-T*A+C*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/X;return e[0]=(o*H-c*N+l*R)*U,e[1]=(i*N-n*H-s*R)*U,e[2]=(M*C-m*T+p*w)*U,e[3]=(d*T-u*C-f*w)*U,e[4]=(c*I-a*H-l*A)*U,e[5]=(t*H-i*I+s*A)*U,e[6]=(m*S-g*C-p*b)*U,e[7]=(h*C-d*S+f*b)*U,e[8]=(a*N-o*I+l*_)*U,e[9]=(n*I-t*N-s*_)*U,e[10]=(g*T-M*S+p*v)*U,e[11]=(u*S-h*T-f*v)*U,e[12]=(o*A-a*R-c*_)*U,e[13]=(t*R-n*A+i*_)*U,e[14]=(M*b-g*w-m*v)*U,e[15]=(h*w-u*b+d*v)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,M=a*h,m=a*u,p=o*u,v=c*l,b=c*h,S=c*u,w=n.x,T=n.y,C=n.z;return i[0]=(1-(M+p))*w,i[1]=(f+S)*w,i[2]=(g-b)*w,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(d+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+b)*C,i[9]=(m-v)*C,i[10]=(1-(d+M))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(i[0],i[1],i[2]).length();const o=Ei.set(i[4],i[5],i[6]).length(),c=Ei.set(i[8],i[9],i[10]).length();s<0&&(a=-a),ln.copy(this);const l=1/a,h=1/o,u=1/c;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=En,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,M;if(c)g=s/(a-s),M=a*s/(a-s);else if(o===En)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Cs)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=En,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,M;if(c)g=1/(a-s),M=a/(a-s);else if(o===En)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===Cs)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wr.prototype.isMatrix4=!0;let Ge=wr;const Ei=new P,ln=new Ge,ju=new P(0,0,0),$u=new P(1,1,1),Zn=new P,Us=new P,jt=new P,Sc=new Ge,bc=new cn;class ai{constructor(e=0,t=0,n=0,i=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bc.setFromEuler(this),this.setFromQuaternion(bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zu=0;const Ec=new P,Ti=new cn,Nn=new Ge,Fs=new P,os=new P,Ju=new P,Qu=new cn,Tc=new P(1,0,0),Ac=new P(0,1,0),wc=new P(0,0,1),Rc={type:"added"},ed={type:"removed"},Ai={type:"childadded",child:null},Wr={type:"childremoved",child:null};class dt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new P,t=new ai,n=new cn,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Le}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Ec.copy(e).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(os,Fs,this.up):Nn.lookAt(Fs,os,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(we("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rc),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new P(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _t extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const td={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(td)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function qr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=Fo(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=qr(a,s,e+1/3),this.g=qr(a,s,e),this.b=qr(a,s,e-1/3)}return He.colorSpaceToWorking(this,i),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return He.workingToColorSpace(kt.copy(this),e),Math.round(We(kt.r*255,0,255))*65536+Math.round(We(kt.g*255,0,255))*256+Math.round(We(kt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Dt){He.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Os);const n=bs(Jn.h,Os.h,t),i=bs(Jn.s,Os.s,t),s=bs(Jn.l,Os.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ce;Ce.NAMES=th;class Bo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new Bo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class nd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new P,Un=new P,Yr=new P,Fn=new P,wi=new P,Ri=new P,Cc=new P,Kr=new P,jr=new P,$r=new P,Zr=new ct,Jr=new ct,Qr=new ct;class pn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),Un.subVectors(n,t),Yr.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Un),c=hn.dot(Yr),l=Un.dot(Un),h=Un.dot(Yr),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(a,Fn.y),c.addScaledVector(o,Fn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Zr.setScalar(0),Jr.setScalar(0),Qr.setScalar(0),Zr.fromBufferAttribute(e,t),Jr.fromBufferAttribute(e,n),Qr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Zr,s.x),a.addScaledVector(Jr,s.y),a.addScaledVector(Qr,s.z),a}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Un.subVectors(e,t),hn.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),hn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;wi.subVectors(i,n),Ri.subVectors(s,n),Kr.subVectors(e,n);const c=wi.dot(Kr),l=Ri.dot(Kr);if(c<=0&&l<=0)return t.copy(n);jr.subVectors(e,i);const h=wi.dot(jr),u=Ri.dot(jr);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(wi,a);$r.subVectors(e,s);const f=wi.dot($r),g=Ri.dot($r);if(g>=0&&f<=g)return t.copy(s);const M=f*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ri,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Cc.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Cc,o);const p=1/(m+M+d);return a=M*p,o=d*p,t.copy(n).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),ks.subVectors(this.max,cs),Ci.subVectors(e.a,cs),Ii.subVectors(e.b,cs),Pi.subVectors(e.c,cs),Qn.subVectors(Ii,Ci),ei.subVectors(Pi,Ii),li.subVectors(Ci,Pi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-li.z,li.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,li.z,0,-li.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-li.y,li.x,0];return!ea(t,Ci,Ii,Pi,ks)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,Ci,Ii,Pi,ks))?!1:(Gs.crossVectors(Qn,ei),t=[Gs.x,Gs.y,Gs.z],ea(t,Ci,Ii,Pi,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new P,new P,new P,new P,new P,new P,new P,new P],un=new P,Bs=new Gt,Ci=new P,Ii=new P,Pi=new P,Qn=new P,ei=new P,li=new P,cs=new P,ks=new P,Gs=new P,hi=new P;function ea(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hi.fromArray(r,s);const o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const bt=new P,zs=new ke;let id=0;class Wt extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uo,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nh extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ih extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const sd=new Gt,ls=new P,ta=new P;class Pn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(ta)),this.expandByPoint(ls.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rd=0;const tn=new Ge,na=new dt,Li=new P,$t=new Gt,hs=new Gt,Lt=new P;class Ut extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?ih:nh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors($t.min,hs.min),$t.expandByPoint(Lt),Lt.addVectors($t.max,hs.max),$t.expandByPoint(Lt)):($t.expandByPoint(hs.min),$t.expandByPoint(hs.max))}$t.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(Li.fromBufferAttribute(e,l),Lt.add(Li)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new P,c[_]=new P;const l=new P,h=new P,u=new P,d=new ke,f=new ke,g=new ke,M=new P,m=new P;function p(_,A,I){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,I),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[_].add(M),o[A].add(M),o[I].add(M),c[_].add(m),c[A].add(m),c[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,A=v.length;_<A;++_){const I=v[_],R=I.start,N=I.count;for(let H=R,X=R+N;H<X;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new P,S=new P,w=new P,T=new P;function C(_){w.fromBufferAttribute(i,_),T.copy(w);const A=o[_];b.copy(A),b.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(T,A);const R=S.dot(c[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,R)}for(let _=0,A=v.length;_<A;++_){const I=v[_],R=I.start,N=I.count;for(let H=R,X=R+N;H<X;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Wt(d,h,u)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ad{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uo,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new P;class ko{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ko(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let od=0;class wn extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Hi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ea&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bn=new P,ia=new P,Vs=new P,ti=new P,sa=new P,Hs=new P,ra=new P;class Cr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ia.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vs),o=ti.dot(this.direction),c=-ti.dot(Vs),l=ti.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ia).addScaledVector(Vs,d),f}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,s){sa.subVectors(t,e),Hs.subVectors(n,e),ra.crossVectors(sa,Hs);let a=this.direction.dot(ra),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const c=o*this.direction.dot(Hs.crossVectors(ti,Hs));if(c<0)return null;const l=o*this.direction.dot(sa.cross(ti));if(l<0||c+l>a)return null;const h=-o*ti.dot(ra);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ic=new Ge,ui=new Cr,Ws=new Pn,Pc=new P,Xs=new P,qs=new P,Ys=new P,aa=new P,Ks=new P,Lc=new P,js=new P;class Se extends dt{constructor(e=new Ut,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ks.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(aa.fromBufferAttribute(u,e),a?Ks.addScaledVector(aa,h):Ks.addScaledVector(aa.sub(t),h))}t.add(Ks)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(Ws.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Ws,Pc)===null||ui.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Ic.copy(s).invert(),ui.copy(e.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,w=b;S<w;S+=3){const T=o.getX(S),C=o.getX(S+1),_=o.getX(S+2);i=$s(this,p,e,n,l,h,u,T,C,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const v=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);i=$s(this,a,e,n,l,h,u,v,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,w=b;S<w;S+=3){const T=S,C=S+1,_=S+2;i=$s(this,p,e,n,l,h,u,T,C,_),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const v=m,b=m+1,S=m+2;i=$s(this,a,e,n,l,h,u,v,b,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function cd(r,e,t,n,i,s,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Xn,o),c===null)return null;js.copy(o),js.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(js);return l<t.near||l>t.far?null:{distance:l,point:js.clone(),object:r}}function $s(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Xs),r.getVertexPosition(c,qs),r.getVertexPosition(l,Ys);const h=cd(r,e,t,n,Xs,qs,Ys,Lc);if(h){const u=new P;pn.getBarycoord(Lc,Xs,qs,Ys,u),i&&(h.uv=pn.getInterpolatedAttribute(i,o,c,l,u,new ke)),s&&(h.uv1=pn.getInterpolatedAttribute(s,o,c,l,u,new ke)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};pn.getNormal(Xs,qs,Ys,d.normal),h.face=d,h.barycoord=u}return h}const us=new ct,Dc=new ct,Nc=new ct,ld=new ct,Uc=new Ge,Zs=new P,oa=new Pn,Fc=new Ge,ca=new Cr;class hd extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fc,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zs),this.boundingBox.expandByPoint(Zs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zs),this.boundingSphere.expandByPoint(Zs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1&&(Fc.copy(i).invert(),ca.copy(e.ray).applyMatrix4(Fc),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ou?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Dc.fromBufferAttribute(i.attributes.skinIndex,e),Nc.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(us.copy(t),t.set(0,0,0,0)):(us.set(...t,1),t.set(0,0,0)),us.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Nc.getComponent(s);if(a!==0){const o=Dc.getComponent(s);Uc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ld.copy(us).applyMatrix4(Uc),a)}}return t.isVector4&&(t.w=us.w),t.applyMatrix4(this.bindMatrixInverse)}}class sh extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Go extends Ct{constructor(e=null,t=1,n=1,i,s,a,o,c,l=wt,h=wt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new Ge,ud=new Ge;class zo{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:ud;Oc.multiplyMatrices(o,t[s]),Oc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Go(t,e,e,on,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Me("Skeleton: No bone found with UUID:",s),a=new sh),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class po extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new Ge,Bc=new Ge,Js=[],kc=new Gt,dd=new Ge,ds=new Se,fs=new Pn;class fd extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),kc.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(kc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),fs.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Di),Bc.multiplyMatrices(n,Di),ds.matrixWorld=Bc,ds.raycast(e,Js);for(let a=0,o=Js.length;a<o;a++){const c=Js[a];c.instanceId=s,c.object=this,t.push(c)}Js.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Go(new Float32Array(i*this.count),i,this.count,Co,an));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const la=new P,pd=new P,md=new Le;class pi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=la.subVectors(n,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(la),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||md.getNormalMatrix(e),i=this.coplanarPoint(la).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Pn,gd=new ke(.5,.5),Qs=new P;class Vo{constructor(e=new pi,t=new pi,n=new pi,i=new pi,s=new pi,a=new pi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],M=s[9],m=s[10],p=s[11],v=s[12],b=s[13],S=s[14],w=s[15];if(i[0].setComponents(l-a,f-h,p-g,w-v).normalize(),i[1].setComponents(l+a,f+h,p+g,w+v).normalize(),i[2].setComponents(l+o,f+u,p+M,w+b).normalize(),i[3].setComponents(l-o,f-u,p-M,w-b).normalize(),n)i[4].setComponents(c,d,m,S).normalize(),i[5].setComponents(l-c,f-d,p-m,w-S).normalize();else if(i[4].setComponents(l-c,f-d,p-m,w-S).normalize(),t===En)i[5].setComponents(l+c,f+d,p+m,w+S).normalize();else if(t===Cs)i[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=gd.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qs.x=i.normal.x>0?e.max.x:e.min.x,Qs.y=i.normal.y>0?e.max.y:e.min.y,Qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rh extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tr=new P,Ar=new P,Gc=new Ge,ps=new Cr,er=new Pn,ha=new P,zc=new P;class Ho extends dt{constructor(e=new Ut,t=new rh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Tr.fromBufferAttribute(t,i-1),Ar.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tr.distanceTo(Ar);e.setAttribute("lineDistance",new et(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(i),er.radius+=s,e.ray.intersectsSphere(er)===!1)return;Gc.copy(i).invert(),ps.copy(e.ray).applyMatrix4(Gc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=l){const p=h.getX(M),v=h.getX(M+1),b=tr(this,e,ps,c,p,v,M);b&&t.push(b)}if(this.isLineLoop){const M=h.getX(g-1),m=h.getX(f),p=tr(this,e,ps,c,M,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=l){const p=tr(this,e,ps,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=tr(this,e,ps,c,g-1,f,g-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tr(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Tr.fromBufferAttribute(o,i),Ar.fromBufferAttribute(o,s),t.distanceSqToSegment(Tr,Ar,ha,zc)>n)return;ha.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ha);if(!(l<e.near||l>e.far))return{distance:l,point:zc.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Vc=new P,Hc=new P;class _d extends Ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Vc.fromBufferAttribute(t,i),Hc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vc.distanceTo(Hc);e.setAttribute("lineDistance",new et(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xd extends Ho{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ah extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wc=new Ge,mo=new Cr,nr=new Pn,ir=new P;class vd extends dt{constructor(e=new Ut,t=new ah){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=s,e.ray.intersectsSphere(nr)===!1)return;Wc.copy(i).invert(),mo.copy(e.ray).applyMatrix4(Wc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,M=f;g<M;g++){const m=l.getX(g);ir.fromBufferAttribute(u,m),Xc(ir,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,M=f;g<M;g++)ir.fromBufferAttribute(u,g),Xc(ir,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xc(r,e,t,n,i,s,a){const o=mo.distanceSqToPoint(r);if(o<t){const c=new P;mo.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class oh extends Ct{constructor(e=[],t=xi,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ms extends Ct{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $i extends Ct{constructor(e,t,n=Rn,i,s,a,o=wt,c=wt,l,h=Yn,u=1){if(h!==Yn&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Md extends $i{constructor(e,t=Rn,n=xi,i,s,a=wt,o=wt,c,l=Yn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ch extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yt extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(M,m,p,v,b,S,w,T,C,_,A){const I=S/C,R=w/_,N=S/2,H=w/2,X=T/2,U=C+1,z=_+1;let B=0,J=0;const Q=new P;for(let le=0;le<z;le++){const xe=le*R-H;for(let Ee=0;Ee<U;Ee++){const Ke=Ee*I-N;Q[M]=Ke*v,Q[m]=xe*b,Q[p]=X,l.push(Q.x,Q.y,Q.z),Q[M]=0,Q[m]=0,Q[p]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ee/C),u.push(1-le/_),B+=1}}for(let le=0;le<_;le++)for(let xe=0;xe<C;xe++){const Ee=d+xe+U*le,Ke=d+xe+U*(le+1),tt=d+(xe+1)+U*(le+1),Ue=d+(xe+1)+U*le;c.push(Ee,Ke,Ue),c.push(Ke,tt,Ue),J+=6}o.addGroup(f,J,A),f+=J,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rn extends Ut{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+s,M=i+1,m=new P,p=new P;for(let v=0;v<=g;v++){let b=0,S=0,w=0,T=0;if(v<=n){const A=v/n,I=A*Math.PI/2;S=-h-e*Math.cos(I),w=e*Math.sin(I),T=-e*Math.cos(I),b=A*u}else if(v<=n+s){const A=(v-n)/s;S=-h+A*t,w=e,T=0,b=u+A*d}else{const A=(v-n-s)/n,I=A*Math.PI/2;S=h+e*Math.sin(I),w=e*Math.cos(I),T=e*Math.sin(I),b=u+d+A*u}const C=Math.max(0,Math.min(1,b/f));let _=0;v===0?_=.5/i:v===g&&(_=-.5/i);for(let A=0;A<=i;A++){const I=A/i,R=I*Math.PI*2,N=Math.sin(R),H=Math.cos(R);p.x=-w*H,p.y=S,p.z=w*N,o.push(p.x,p.y,p.z),m.set(-w*H,T,w*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(I+_,C)}if(v>0){const A=(v-1)*M;for(let I=0;I<i;I++){const R=A+I,N=A+I+1,H=v*M+I,X=v*M+I+1;a.push(R,N,H),a.push(N,X,H)}}}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class At extends Ut{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const M=[],m=n/2;let p=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function v(){const S=new P,w=new P;let T=0;const C=(t-e)/n;for(let _=0;_<=s;_++){const A=[],I=_/s,R=I*(t-e)+e;for(let N=0;N<=i;N++){const H=N/i,X=H*c+o,U=Math.sin(X),z=Math.cos(X);w.x=R*U,w.y=-I*n+m,w.z=R*z,u.push(w.x,w.y,w.z),S.set(U,C,z).normalize(),d.push(S.x,S.y,S.z),f.push(H,1-I),A.push(g++)}M.push(A)}for(let _=0;_<i;_++)for(let A=0;A<s;A++){const I=M[A][_],R=M[A+1][_],N=M[A+1][_+1],H=M[A][_+1];(e>0||A!==0)&&(h.push(I,R,H),T+=3),(t>0||A!==s-1)&&(h.push(R,N,H),T+=3)}l.addGroup(p,T,0),p+=T}function b(S){const w=g,T=new ke,C=new P;let _=0;const A=S===!0?e:t,I=S===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),g++;const R=g;for(let N=0;N<=i;N++){const X=N/i*c+o,U=Math.cos(X),z=Math.sin(X);C.x=A*z,C.y=m*I,C.z=A*U,u.push(C.x,C.y,C.z),d.push(0,I,0),T.x=U*.5+.5,T.y=z*.5*I+.5,f.push(T.x,T.y),g++}for(let N=0;N<i;N++){const H=w+N,X=R+N;S===!0?h.push(X,X+1,H):h.push(X+1,X,H),_+=3}l.addGroup(p,_,S===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi extends At{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Vi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const b=new P,S=new P,w=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],S),f(t[T+2],w),c(b,S,w,v)}function c(v,b,S,w){const T=w+1,C=[];for(let _=0;_<=T;_++){C[_]=[];const A=v.clone().lerp(S,_/T),I=b.clone().lerp(S,_/T),R=T-_;for(let N=0;N<=R;N++)N===0&&_===T?C[_][N]=A:C[_][N]=A.clone().lerp(I,N/R)}for(let _=0;_<T;_++)for(let A=0;A<2*(T-_)-1;A++){const I=Math.floor(A/2);A%2===0?(d(C[_][I+1]),d(C[_+1][I]),d(C[_][I])):(d(C[_][I+1]),d(C[_+1][I+1]),d(C[_+1][I]))}}function l(v){const b=new P;for(let S=0;S<s.length;S+=3)b.x=s[S+0],b.y=s[S+1],b.z=s[S+2],b.normalize().multiplyScalar(v),s[S+0]=b.x,s[S+1]=b.y,s[S+2]=b.z}function h(){const v=new P;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];const S=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(S,1-w)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){const b=a[v+0],S=a[v+2],w=a[v+4],T=Math.max(b,S,w),C=Math.min(b,S,w);T>.9&&C<.1&&(b<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,b){const S=v*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function g(){const v=new P,b=new P,S=new P,w=new P,T=new ke,C=new ke,_=new ke;for(let A=0,I=0;A<s.length;A+=9,I+=6){v.set(s[A+0],s[A+1],s[A+2]),b.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),T.set(a[I+0],a[I+1]),C.set(a[I+2],a[I+3]),_.set(a[I+4],a[I+5]),w.copy(v).add(b).add(S).divideScalar(3);const R=m(w);M(T,I+0,v,R),M(C,I+2,b,R),M(_,I+4,S,R)}}function M(v,b,S,w){w<0&&v.x===1&&(a[b]=v.x-1),S.x===0&&S.z===0&&(a[b]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.vertices,e.indices,e.radius,e.detail)}}class Xo extends Wo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class sn extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let b=0;b<l;b++){const S=b*u-s;g.push(S,-v,0),M.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const b=v+l*p,S=v+l*(p+1),w=v+1+l*(p+1),T=v+1+l*p;f.push(b,S,T),f.push(S,w,T)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class qo extends Ut{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new P,g=new ke;for(let M=0;M<=i;M++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let M=0;M<i;M++){const m=M*(n+1);for(let p=0;p<n;p++){const v=p+m,b=v,S=v+n+1,w=v+n+2,T=v+1;o.push(b,S,T),o.push(S,w,T)}}this.setIndex(o),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ft extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const v=[],b=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(i+T*s)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+T*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(T+S,1-b),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const b=h[p][v+1],S=h[p][v],w=h[p+1][v],T=h[p+1][v+1];(p!==0||a>0)&&f.push(b,S,T),(p!==n-1||c<Math.PI)&&f.push(S,w,T)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ir extends Ut{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],u=[],d=new P,f=new P,g=new P;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let p=0;p<=i;p++){const v=p/i*s;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/i),u.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=i;m++){const p=(i+1)*M+m-1,v=(i+1)*(M-1)+m-1,b=(i+1)*(M-1)+m,S=(i+1)*M+m;c.push(p,v,S),c.push(v,b,S)}this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Zi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(qc(i))i.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(qc(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=Zi(r[t]);for(const i in n)e[i]=n[i]}return e}function qc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function yd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Sd={clone:Zi,merge:Vt};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Td extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rt extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ad extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wd extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function sr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Rd(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function hh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ns{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cd extends ns{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gi,endingEnd:Gi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zi:s=e,o=2*t-n;break;case Sr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zi:a=e,c=2*n-t;break;case Sr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),M=g*g,m=M*g,p=-d*m+2*d*M-d*g,v=(1+d)*m+(-1.5-2*d)*M+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*M+.5*g,S=f*m-f*M;for(let w=0;w!==o;++w)s[w]=p*a[h+w]+v*a[l+w]+b*a[c+w]+S*a[u+w];return s}}class uh extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class Id extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pd extends ns{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const M=(n-t)/(i-t),m=1-M;for(let p=0;p!==o;++p)s[p]=a[l+p]*m+a[c+p]*M;return s}const f=o*2,g=e-1;for(let M=0;M!==o;++M){const m=a[l+M],p=a[c+M],v=g*f+M*2,b=d[v],S=d[v+1],w=e*f+M*2,T=u[w],C=u[w+1];let _=(n-t)/(i-t),A,I,R,N,H;for(let X=0;X<8;X++){A=_*_,I=A*_,R=1-_,N=R*R,H=N*R;const z=H*t+3*N*_*b+3*R*A*T+I*i-n;if(Math.abs(z)<1e-10)break;const B=3*N*(b-t)+6*R*_*(T-b)+3*A*(i-T);if(Math.abs(B)<1e-10)break;_=_-z/B,_=Math.max(0,Math.min(1,_))}s[M]=H*m+3*N*_*S+3*R*A*C+I*p}return s}}class gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Id(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Pd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case kr:t=this.InterpolantFactoryMethodSmooth;break;case pc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return kr;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(we("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){we("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){we("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Su(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){we("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const M=t[u+g];if(M!==t[d+g]||M!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Rs;class is extends gn{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ws;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class dh extends gn{constructor(e,t,n,i){super(e,t,n,i)}}dh.prototype.ValueTypeName="color";class Ji extends gn{constructor(e,t,n,i){super(e,t,n,i)}}Ji.prototype.ValueTypeName="number";class Ld extends ns{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)cn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Qi extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ld(this.times,this.values,this.getValueSize(),e)}}Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends gn{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ws;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends gn{constructor(e,t,n,i){super(e,t,n,i)}}es.prototype.ValueTypeName="vector";class go{constructor(e="",t=-1,n=[],i=Do){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Nd(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(gn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Rd(c);c=Yc(c,1,h),l=Yc(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ji(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return we("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,M){if(f.length!==0){const m=[],p=[];hh(f,m,p,g),m.length!==0&&M.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let M=0;M<d[g].morphTargets.length;M++)f[d[g].morphTargets[M]]=-1;for(const M in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const b=d[g];m.push(b.time),p.push(b.morphTarget===M?1:0)}i.push(new Ji(".morphTargetInfluence["+M+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(es,f+".position",d,"pos",i),n(Qi,f+".quaternion",d,"rot",i),n(es,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Dd(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return dh;case"quaternion":return Qi;case"bool":case"boolean":return is;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Nd(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dd(r.type);if(r.times===void 0){const t=[],n=[];hh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const zn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Kc(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Kc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Kc(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Ud{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fd=new Ud;class rs{constructor(e){this.manager=e!==void 0?e:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class Od extends Error{constructor(e,t){super(e),this.response=t}}class fh extends rs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:i});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=kn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let M=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:b,value:S})=>{if(b)p.close();else{M+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:f});for(let T=0,C=h.length;T<C;T++){const _=h[T];_.onProgress&&_.onProgress(w)}p.enqueue(S),v()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Od(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{zn.add(`file:${e}`,l);const h=kn[e];delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ni=new WeakMap;class Bd extends rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ni.get(a);u===void 0&&(u=[],Ni.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Is("img");function c(){h(),t&&t(this);const u=Ni.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ni.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),zn.remove(`image:${e}`);const d=Ni.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ni.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ph extends rs{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,a=new Bd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ls extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class kd extends Ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ua=new Ge,jc=new P,$c=new P;class Yo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Cs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rr=new P,ar=new cn,vn=new P;class mh extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rr,ar,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rr,ar,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(rr,ar,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rr,ar,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new P,Zc=new ke,Jc=new ke;class Ht extends mh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Jc),t.subVectors(Jc,Zc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gd extends Yo{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zd extends Ls{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Gd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Vd extends Yo{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}}class Hd extends Ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pr extends mh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wd extends Yo{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gh extends Ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Wd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Xd extends Ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Es{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const da=new WeakMap;class qd extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{da.has(a)===!0?(i&&i(da.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){zn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),da.set(c,l),zn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});zn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ui=-90,Fi=1;class Yd extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(Ui,Fi,e,t);i.layers=this.layers,this.add(i);const s=new Ht(Ui,Fi,e,t);s.layers=this.layers,this.add(s);const a=new Ht(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const c=new Ht(Ui,Fi,e,t);c.layers=this.layers,this.add(c);const l=new Ht(Ui,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kd extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jd{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){cn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;cn.multiplyQuaternionsFlat(e,a,e,t,e,n),cn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Ko="\\[\\]\\.:\\/",$d=new RegExp("["+Ko+"]","g"),jo="[^"+Ko+"]",Zd="[^"+Ko.replace("\\.","")+"]",Jd=/((?:WC+[\/:])*)/.source.replace("WC",jo),Qd=/(WCOD+)?/.source.replace("WCOD",Zd),ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jo),tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jo),nf=new RegExp("^"+Jd+Qd+ef+tf+"$"),sf=["material","materials","bones","map"];class rf{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($d,"")}static parseTrackName(e){const t=nf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);sf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;we("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=rf;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class af{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Gi,endingEnd:Gi};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings&&Object.assign(c,h.settings),h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case uu:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Do:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===hu;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===cu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=zi,i.endingEnd=zi):(e?i.endingStart=this.zeroSlopeAtStart?zi:Gi:i.endingStart=Sr,t?i.endingEnd=this.zeroSlopeAtEnd?zi:Gi:i.endingEnd=Sr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const of=new Float32Array(1);class cf extends oi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const M=t&&t._propertyBindings[u].binding.parsedPath;g=new jd(Ze.create(n,f,M),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new uh(new Float32Array(2),new Float32Array(2),1,of),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?go.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Do),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new af(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?go.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class lf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Me("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ec=class ec{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};ec.prototype.isMatrix2=!0;let Qc=ec;function el(r,e,t,n){const i=hf(n);switch(t){case jl:return r*e;case Co:return r*e/i.components*i.byteLength;case Io:return r*e/i.components*i.byteLength;case vi:return r*e*2/i.components*i.byteLength;case Po:return r*e*2/i.components*i.byteLength;case $l:return r*e*3/i.components*i.byteLength;case on:return r*e*4/i.components*i.byteLength;case Lo:return r*e*4/i.components*i.byteLength;case pr:case mr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gr:case _r:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Na:case Fa:return Math.max(r,16)*Math.max(e,8)/4;case Da:case Ua:return Math.max(r,8)*Math.max(e,8)/2;case Oa:case Ba:case Ga:case za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ka:case Mr:case Va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case no:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case io:case so:case ro:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ao:case oo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yr:case co:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hf(r){switch(r){case Zt:case Xl:return{byteLength:1,components:1};case Ts:case ql:case qn:return{byteLength:2,components:1};case wo:case Ro:return{byteLength:2,components:4};case Rn:case Ao:case an:return{byteLength:4,components:1};case Yl:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _h(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function uf(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const M=u[f];r.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,hp=`uniform sampler2D dfgLUT;
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,km=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:yf,begin_vertex:Sf,beginnormal_vertex:bf,bsdfs:Ef,iridescence_fragment:Tf,bumpmap_pars_fragment:Af,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:If,color_fragment:Pf,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Nf,common:Uf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:kf,emissivemap_fragment:Gf,emissivemap_pars_fragment:zf,colorspace_fragment:Vf,colorspace_pars_fragment:Hf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:sp,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:$f,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:ap,lights_phong_fragment:op,lights_phong_pars_fragment:cp,lights_physical_fragment:lp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,lightprobes_pars_fragment:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:xp,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:yp,map_particle_pars_fragment:Sp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:Tp,morphcolor_vertex:Ap,morphnormal_vertex:wp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Ip,normal_fragment_maps:Pp,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Np,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:kp,opaque_fragment:Gp,packing:zp,premultiplied_alpha_fragment:Vp,project_vertex:Hp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Zp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:am,transmission_pars_fragment:om,uv_pars_fragment:cm,uv_pars_vertex:lm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:_m,depth_vert:xm,depth_frag:vm,distance_vert:Mm,distance_frag:ym,equirect_vert:Sm,equirect_frag:bm,linedashed_vert:Em,linedashed_frag:Tm,meshbasic_vert:Am,meshbasic_frag:wm,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Im,meshmatcap_frag:Pm,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Nm,meshphong_frag:Um,meshphysical_vert:Fm,meshphysical_frag:Om,meshtoon_vert:Bm,meshtoon_frag:km,points_vert:Gm,points_frag:zm,shadow_vert:Vm,shadow_frag:Hm,sprite_vert:Wm,sprite_frag:Xm},ce={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Sn={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Sn.physical={uniforms:Vt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const or={r:0,b:0,g:0},qm=new Ge,xh=new Le;xh.set(-1,0,0,0,1,0,0,0,1);function Ym(r,e,t,n,i,s){const a=new Ce(0);let o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const S=v.backgroundBlurriness>0;b=e.get(b,S)}return b}function g(v){let b=!1;const S=f(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),b=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(v,b){const S=f(b);S&&(S.isCubeTexture||S.mapping===Rr)?(l===void 0&&(l=new Se(new yt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Zi(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xh),l.material.toneMapped=He.getTransfer(S.colorSpace)!==Je,(h!==S||u!==S.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Se(new sn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Zi(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=He.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,b){v.getRGB(or,lh(r)),t.buffers.color.setClear(or.r,or.g,or.b,b,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:M,dispose:p}}function Km(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(R,N,H,X,U){let z=!1;const B=u(R,X,H,N);s!==B&&(s=B,l(s.object)),z=f(R,X,H,U),z&&g(R,X,H,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,S(R,N,H,X),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return r.createVertexArray()}function l(R){return r.bindVertexArray(R)}function h(R){return r.deleteVertexArray(R)}function u(R,N,H,X){const U=X.wireframe===!0;let z=n[N.id];z===void 0&&(z={},n[N.id]=z);const B=R.isInstancedMesh===!0?R.id:0;let J=z[B];J===void 0&&(J={},z[B]=J);let Q=J[H.id];Q===void 0&&(Q={},J[H.id]=Q);let le=Q[U];return le===void 0&&(le=d(c()),Q[U]=le),le}function d(R){const N=[],H=[],X=[];for(let U=0;U<t;U++)N[U]=0,H[U]=0,X[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,N,H,X){const U=s.attributes,z=N.attributes;let B=0;const J=H.getAttributes();for(const Q in J)if(J[Q].location>=0){const xe=U[Q];let Ee=z[Q];if(Ee===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),xe===void 0||xe.attribute!==Ee||Ee&&xe.data!==Ee.data)return!0;B++}return s.attributesNum!==B||s.index!==X}function g(R,N,H,X){const U={},z=N.attributes;let B=0;const J=H.getAttributes();for(const Q in J)if(J[Q].location>=0){let xe=z[Q];xe===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(xe=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(xe=R.instanceColor));const Ee={};Ee.attribute=xe,xe&&xe.data&&(Ee.data=xe.data),U[Q]=Ee,B++}s.attributes=U,s.attributesNum=B,s.index=X}function M(){const R=s.newAttributes;for(let N=0,H=R.length;N<H;N++)R[N]=0}function m(R){p(R,0)}function p(R,N){const H=s.newAttributes,X=s.enabledAttributes,U=s.attributeDivisors;H[R]=1,X[R]===0&&(r.enableVertexAttribArray(R),X[R]=1),U[R]!==N&&(r.vertexAttribDivisor(R,N),U[R]=N)}function v(){const R=s.newAttributes,N=s.enabledAttributes;for(let H=0,X=N.length;H<X;H++)N[H]!==R[H]&&(r.disableVertexAttribArray(H),N[H]=0)}function b(R,N,H,X,U,z,B){B===!0?r.vertexAttribIPointer(R,N,H,U,z):r.vertexAttribPointer(R,N,H,X,U,z)}function S(R,N,H,X){M();const U=X.attributes,z=H.getAttributes(),B=N.defaultAttributeValues;for(const J in z){const Q=z[J];if(Q.location>=0){let le=U[J];if(le===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const xe=le.normalized,Ee=le.itemSize,Ke=e.get(le);if(Ke===void 0)continue;const tt=Ke.buffer,Ue=Ke.type,j=Ke.bytesPerElement,de=Ue===r.INT||Ue===r.UNSIGNED_INT||le.gpuType===Ao;if(le.isInterleavedBufferAttribute){const ie=le.data,Ae=ie.stride,Pe=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)p(Q.location+Re,ie.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<Q.locationSize;Re++)m(Q.location+Re);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Re=0;Re<Q.locationSize;Re++)b(Q.location+Re,Ee/Q.locationSize,Ue,xe,Ae*j,(Pe+Ee/Q.locationSize*Re)*j,de)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<Q.locationSize;ie++)p(Q.location+ie,le.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<Q.locationSize;ie++)m(Q.location+ie);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let ie=0;ie<Q.locationSize;ie++)b(Q.location+ie,Ee/Q.locationSize,Ue,xe,Ee*j,Ee/Q.locationSize*ie*j,de)}}else if(B!==void 0){const xe=B[J];if(xe!==void 0)switch(xe.length){case 2:r.vertexAttrib2fv(Q.location,xe);break;case 3:r.vertexAttrib3fv(Q.location,xe);break;case 4:r.vertexAttrib4fv(Q.location,xe);break;default:r.vertexAttrib1fv(Q.location,xe)}}}}v()}function w(){A();for(const R in n){const N=n[R];for(const H in N){const X=N[H];for(const U in X){const z=X[U];for(const B in z)h(z[B].object),delete z[B];delete X[U]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const N=n[R.id];for(const H in N){const X=N[H];for(const U in X){const z=X[U];for(const B in z)h(z[B].object),delete z[B];delete X[U]}}delete n[R.id]}function C(R){for(const N in n){const H=n[N];for(const X in H){const U=H[X];if(U[R.id]===void 0)continue;const z=U[R.id];for(const B in z)h(z[B].object),delete z[B];delete U[R.id]}}}function _(R){for(const N in n){const H=n[N],X=R.isInstancedMesh===!0?R.id:0,U=H[X];if(U!==void 0){for(const z in U){const B=U[z];for(const J in B)h(B[J].object),delete B[J];delete U[z]}delete H[X],Object.keys(H).length===0&&delete n[N]}}}function A(){I(),a=!0,s!==i&&(s=i,l(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function jm(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function $m(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==on&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zt&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==an&&!_)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Me("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:S,maxSamples:w,samples:T}}function Zm(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new pi,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,b=v*4;let S=p.clippingState||null;c.value=S,S=h(g,d,b,f);for(let w=0;w!==b;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=c.value,g!==!0||m===null){const p=f+M*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==M;++b,S+=4)a.copy(u[b]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const ri=4,tl=[.125,.215,.35,.446,.526,.582],gi=20,Jm=256,ms=new Pr,nl=new Ce;let fa=null,pa=0,ma=0,ga=!1;const Qm=new P;class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Qm}=s;fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,pa,ma),this._renderer.xr.enabled=ga,e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:qn,format:on,colorSpace:Qt,depthBuffer:!1},i=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eg(s)),this._blurMaterial=ng(s,e,t),this._ggxMaterial=tg(s,e,t)}return i}_compileMaterial(e){const t=new Se(new Ut,e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,i,s){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nl),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Se(new yt,new Nt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(nl),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const w=this._cubeSize;Oi(i,S*w,b>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(M,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Oi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-ri?n-g+ri:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Oi(s,m,p,3*M,2*M),i.setRenderTarget(s),i.render(o,ms),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Oi(e,m,p,3*M,2*M),i.setRenderTarget(e),i.render(o,ms)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gi-1),M=s/g,m=isFinite(s)?1+Math.floor(h*M):gi;m>gi&&Me(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const p=[];let v=0;for(let C=0;C<gi;++C){const _=C/M,A=Math.exp(-_*_/2);p.push(A),C===0?v+=A:C<m&&(v+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const S=this._sizeLods[i],w=3*S*(i>b-ri?i-b+ri:0),T=4*(this._cubeSize-S);Oi(t,w,T,3*S,2*S),c.setRenderTarget(t),c.render(u,ms)}}function eg(r){const e=[],t=[],n=[];let i=r;const s=r-ri+1+tl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-ri?c=tl[a-r+ri-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,M=3,m=2,p=1,v=new Float32Array(M*g*f),b=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,_=T>2?0:-1,A=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];v.set(A,M*g*T),b.set(d,m*g*T);const I=[T,T,T,T,T,T];S.set(I,p*g*T)}const w=new Ut;w.setAttribute("position",new Wt(v,M)),w.setAttribute("uv",new Wt(b,m)),w.setAttribute("faceIndex",new Wt(S,p)),n.push(new Se(w,null)),i>ri&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function sl(r,e,t){const n=new An(r,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function tg(r,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lr(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ng(r,e,t){const n=new Float32Array(gi),i=new P(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lr(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function rl(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lr(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function al(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Lr(){return`

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
	`}class vh extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new oh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yt(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Hn});s.uniforms.tEquirect.value=t;const a=new Se(i,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Rt),new Yd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function ig(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Or||f===Br)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const M=new vh(g.height);return M.fromEquirectangularTexture(r,d),e.set(d,M),d.addEventListener("dispose",l),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===Or||f===Br,M=f===xi||f===Yi;if(g||M){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new il(r)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||M&&v&&c(v)?(n===null&&(n=new il(r)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Or?d.mapping=xi:f===Br&&(d.mapping=Yi),d}function c(d){let f=0;const g=6;for(let M=0;M<g;M++)d[M]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function sg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fo("WebGLRenderer: "+n+" extension not supported."),i}}}function rg(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let M=0;if(g===void 0)return;if(f!==null){const v=f.array;M=f.version;for(let b=0,S=v.length;b<S;b+=3){const w=v[b+0],T=v[b+1],C=v[b+2];d.push(w,T,T,C,C,w)}}else{const v=g.array;M=g.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const w=b+0,T=b+1,C=b+2;d.push(w,T,T,C,C,w)}}const m=new(g.count>=65535?ih:nh)(d,1);m.version=M;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ag(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,d){r.drawElements(n,d,s,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let M=0;for(let m=0;m<f;m++)M+=d[m];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function og(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:we("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cg(r,e,t){const n=new WeakMap,i=new ct;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var f=I;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*u),_=new Ql(C,w,T,u);_.type=an,_.needsUpdate=!0;const A=S*4;for(let R=0;R<u;R++){const N=p[R],H=v[R],X=b[R],U=w*T*4*R;for(let z=0;z<N.count;z++){const B=z*A;g===!0&&(i.fromBufferAttribute(N,z),C[U+B+0]=i.x,C[U+B+1]=i.y,C[U+B+2]=i.z,C[U+B+3]=0),M===!0&&(i.fromBufferAttribute(H,z),C[U+B+4]=i.x,C[U+B+5]=i.y,C[U+B+6]=i.z,C[U+B+7]=0),m===!0&&(i.fromBufferAttribute(X,z),C[U+B+8]=i.x,C[U+B+9]=i.y,C[U+B+10]=i.z,C[U+B+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new ke(w,T)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const M=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",M),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function lg(r,e,t,n,i){let s=new WeakMap;function a(l){const h=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const hg={[Fl]:"LINEAR_TONE_MAPPING",[Ol]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[kl]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[Vl]:"NEUTRAL_TONE_MAPPING",[Gl]:"CUSTOM_TONE_MAPPING"};function ug(r,e,t,n,i){const s=new An(e,t,{type:r,depthBuffer:n,stencilBuffer:i,depthTexture:n?new $i(e,t):void 0}),a=new An(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new Ut;o.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new et([0,2,0,0,2,0],2));const c=new Td({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Se(o,c),h=new Pr(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,M=null,m=[],p=!1;this.setSize=function(v,b){s.setSize(v,b),a.setSize(v,b);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(v,b)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const b=s.width,S=s.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(b,S)}},this.begin=function(v,b){if(f||v.toneMapping===Tn&&m.length===0)return!1;if(M=b,b!==null){const S=b.width,w=b.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Tn,!0},this.hasRenderPass=function(){return p},this.end=function(v,b){v.toneMapping=g,f=!0;let S=s,w=a;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(v,w,S,b),C.needsSwap!==!1)){const _=S;S=w,w=_}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,c.defines={},He.getTransfer(u)===Je&&(c.defines.SRGB_TRANSFER="");const T=hg[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(M),v.render(l,h),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Mh=new Ct,_o=new $i(1,1),yh=new Ql,Sh=new Ku,bh=new oh,ol=[],cl=[],ll=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function as(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ol[i];if(s===void 0&&(s=new Float32Array(i),ol[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dr(r,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;ul.set(n),r.uniformMatrix2fv(this.addr,!1,ul),Pt(t,n)}}function _g(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;hl.set(n),r.uniformMatrix3fv(this.addr,!1,hl),Pt(t,n)}}function xg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;ll.set(n),r.uniformMatrix4fv(this.addr,!1,ll),Pt(t,n)}}function vg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function bg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function Tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function wg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(_o.compareFunction=t.isReversedDepthBuffer()?Uo:No,s=_o):s=Mh,t.setTexture2D(e||s,i)}function Rg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sh,i)}function Cg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bh,i)}function Ig(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yh,i)}function Pg(r){switch(r){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return yg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Lg(r,e){r.uniform1fv(this.addr,e)}function Dg(r,e){const t=as(e,this.size,2);r.uniform2fv(this.addr,t)}function Ng(r,e){const t=as(e,this.size,3);r.uniform3fv(this.addr,t)}function Ug(r,e){const t=as(e,this.size,4);r.uniform4fv(this.addr,t)}function Fg(r,e){const t=as(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Og(r,e){const t=as(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bg(r,e){const t=as(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kg(r,e){r.uniform1iv(this.addr,e)}function Gg(r,e){r.uniform2iv(this.addr,e)}function zg(r,e){r.uniform3iv(this.addr,e)}function Vg(r,e){r.uniform4iv(this.addr,e)}function Hg(r,e){r.uniform1uiv(this.addr,e)}function Wg(r,e){r.uniform2uiv(this.addr,e)}function Xg(r,e){r.uniform3uiv(this.addr,e)}function qg(r,e){r.uniform4uiv(this.addr,e)}function Yg(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=_o:a=Mh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Kg(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sh,s[a])}function jg(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bh,s[a])}function $g(r,e,t){const n=this.cache,i=e.length,s=Dr(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yh,s[a])}function Zg(r){switch(r){case 5126:return Lg;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return Gg;case 35668:case 35672:return zg;case 35669:case 35673:return Vg;case 5125:return Hg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return $g}}class Jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pg(t.type)}}class Qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zg(t.type)}}class e0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function dl(r,e){r.seq.push(e),r.map[e.id]=e}function t0(r,e,t){const n=r.name,i=n.length;for(_a.lastIndex=0;;){const s=_a.exec(n),a=_a.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){dl(t,l===void 0?new Jg(o,r,e):new Qg(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new e0(o),dl(t,u)),t=u}}}class xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);t0(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function fl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const n0=37297;let i0=0;function s0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const pl=new Le;function r0(r){He._getMatrix(pl,He.workingColorSpace,r);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(r)){case br:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ml(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+s0(r.getShaderSource(e),o)}else return s}function a0(r,e){const t=r0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const o0={[Fl]:"Linear",[Ol]:"Reinhard",[Bl]:"Cineon",[kl]:"ACESFilmic",[zl]:"AgX",[Vl]:"Neutral",[Gl]:"Custom"};function c0(r,e){const t=o0[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cr=new P;function l0(){He.getLuminanceCoefficients(cr);const r=cr.x.toFixed(4),e=cr.y.toFixed(4),t=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function u0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ys(r){return r!==""}function gl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(r){return r.replace(f0,m0)}const p0=new Map;function m0(r,e){let t=Oe[e];if(t===void 0){const n=p0.get(e);if(n!==void 0)t=Oe[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xo(t)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(r){return r.replace(g0,_0)}function _0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const x0={[dr]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function v0(r){return x0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const M0={[xi]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function y0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":M0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const S0={[Yi]:"ENVMAP_MODE_REFRACTION"};function b0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":S0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E0={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[ru]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};function T0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":E0[r.combine]||"ENVMAP_BLENDING_NONE"}function A0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=v0(t),l=y0(t),h=b0(t),u=T0(t),d=A0(t),f=h0(t),g=u0(s),M=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Tn?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),a=xo(a),a=gl(a,t),a=_l(a,t),o=xo(o),o=gl(o,t),o=_l(o,t),a=xl(a),o=xl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=v+m+a,S=v+p+o,w=fl(i,i.VERTEX_SHADER,b),T=fl(i,i.FRAGMENT_SHADER,S);i.attachShader(M,w),i.attachShader(M,T),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function C(R){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(M)||"",H=i.getShaderInfoLog(w)||"",X=i.getShaderInfoLog(T)||"",U=N.trim(),z=H.trim(),B=X.trim();let J=!0,Q=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,w,T);else{const le=ml(i,w,"vertex"),xe=ml(i,T,"fragment");we("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+le+`
`+xe)}else U!==""?Me("WebGLProgram: Program Info Log:",U):(z===""||B==="")&&(Q=!1);Q&&(R.diagnostics={runnable:J,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(w),i.deleteShader(T),_=new xr(i,M),A=d0(i,M)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(M,n0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I0(e),t.set(e,n)),n}}class I0{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}}function P0(r){return r===vi||r===Mr||r===yr}function L0(r,e,t,n,i,s){const a=new eh,o=new C0,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,A,I,R,N,H){const X=R.fog,U=N.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||z,B),Q=J&&J.mapping===Rr?J.image.height:null,le=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Me("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const xe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ee=xe!==void 0?xe.length:0;let Ke=0;U.morphAttributes.position!==void 0&&(Ke=1),U.morphAttributes.normal!==void 0&&(Ke=2),U.morphAttributes.color!==void 0&&(Ke=3);let tt,Ue,j,de;if(le){const De=Sn[le];tt=De.vertexShader,Ue=De.fragmentShader}else tt=_.vertexShader,Ue=_.fragmentShader,o.update(_),j=o.getVertexShaderID(_),de=o.getFragmentShaderID(_);const ie=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,ft=!!_.map,Xe=!!_.matcap,nt=!!J,ut=!!_.aoMap,Ve=!!_.lightMap,Et=!!_.bumpMap,pt=!!_.normalMap,Yt=!!_.displacementMap,D=!!_.emissiveMap,Tt=!!_.metalnessMap,qe=!!_.roughnessMap,lt=_.anisotropy>0,oe=_.clearcoat>0,mt=_.dispersion>0,E=_.iridescence>0,x=_.sheen>0,O=_.transmission>0,Y=lt&&!!_.anisotropyMap,Z=oe&&!!_.clearcoatMap,ee=oe&&!!_.clearcoatNormalMap,ae=oe&&!!_.clearcoatRoughnessMap,W=E&&!!_.iridescenceMap,K=E&&!!_.iridescenceThicknessMap,fe=x&&!!_.sheenColorMap,ge=x&&!!_.sheenRoughnessMap,se=!!_.specularMap,te=!!_.specularColorMap,Ie=!!_.specularIntensityMap,Fe=O&&!!_.transmissionMap,$e=O&&!!_.thicknessMap,L=!!_.gradientMap,ne=!!_.alphaMap,q=_.alphaTest>0,pe=!!_.alphaHash,re=!!_.extensions;let $=Tn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&($=r.toneMapping);const ye={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:Ue,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ft,matcap:Xe,envMap:nt,envMapMode:nt&&J.mapping,envMapCubeUVHeight:Q,aoMap:ut,lightMap:Ve,bumpMap:Et,normalMap:pt,displacementMap:Yt,emissiveMap:D,normalMapObjectSpace:pt&&_.normalMapType===pu,normalMapTangentSpace:pt&&_.normalMapType===ho,packedNormalMap:pt&&_.normalMapType===ho&&P0(_.normalMap.format),metalnessMap:Tt,roughnessMap:qe,anisotropy:lt,anisotropyMap:Y,clearcoat:oe,clearcoatMap:Z,clearcoatNormalMap:ee,clearcoatRoughnessMap:ae,dispersion:mt,iridescence:E,iridescenceMap:W,iridescenceThicknessMap:K,sheen:x,sheenColorMap:fe,sheenRoughnessMap:ge,specularMap:se,specularColorMap:te,specularIntensityMap:Ie,transmission:O,transmissionMap:Fe,thicknessMap:$e,gradientMap:L,opaque:_.transparent===!1&&_.blending===Hi&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:q,alphaHash:pe,combine:_.combine,mapUv:ft&&g(_.map.channel),aoMapUv:ut&&g(_.aoMap.channel),lightMapUv:Ve&&g(_.lightMap.channel),bumpMapUv:Et&&g(_.bumpMap.channel),normalMapUv:pt&&g(_.normalMap.channel),displacementMapUv:Yt&&g(_.displacementMap.channel),emissiveMapUv:D&&g(_.emissiveMap.channel),metalnessMapUv:Tt&&g(_.metalnessMap.channel),roughnessMapUv:qe&&g(_.roughnessMap.channel),anisotropyMapUv:Y&&g(_.anisotropyMap.channel),clearcoatMapUv:Z&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(_.sheenRoughnessMap.channel),specularMapUv:se&&g(_.specularMap.channel),specularColorMapUv:te&&g(_.specularColorMap.channel),specularIntensityMapUv:Ie&&g(_.specularIntensityMap.channel),transmissionMapUv:Fe&&g(_.transmissionMap.channel),thicknessMapUv:$e&&g(_.thicknessMap.channel),alphaMapUv:ne&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pt||lt),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(ft||ne),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ke,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:$,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&He.getTransfer(_.map.colorSpace)===Je,decodeVideoTextureEmissive:D&&_.emissiveMap.isVideoTexture===!0&&He.getTransfer(_.emissiveMap.colorSpace)===Je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xt,flipSided:_.side===qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)A.push(I),A.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(A,_),v(A,_),A.push(r.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}function b(_){const A=f[_.type];let I;if(A){const R=Sn[A];I=Sd.clone(R.uniforms)}else I=_.uniforms;return I}function S(_,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new w0(r,A,_,i),l.push(I),h.set(A,I)),I}function w(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:b,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:C}}function D0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function N0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ml(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function yl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,M,m,p){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:m,group:p},r[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=M,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function c(d,f,g,M,m,p){const v=o(d,f,g,M,m,p);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):t.push(v)}function l(d,f,g,M,m,p){const v=o(d,f,g,M,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||N0),n.length>1&&n.sort(f||Ml),i.length>1&&i.sort(f||Ml)}function u(){for(let d=e,f=r.length;d<f;d++){const g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function U0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new yl,r.set(n,[a])):i>=s.length?(a=new yl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function F0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ce};break;case"SpotLight":t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function O0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let B0=0;function k0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function G0(r){const e=new F0,t=O0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,s=new Ge,a=new Ge;function o(l){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,v=0,b=0,S=0,w=0,T=0,C=0;l.sort(k0);for(let A=0,I=l.length;A<I;A++){const R=l[A],N=R.color,H=R.intensity,X=R.distance;let U=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===vi?U=R.shadow.map.texture:U=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=N.r*H,u+=N.g*H,d+=N.b*H;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],H);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,J=t.get(R);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=z,f++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(N).multiplyScalar(H),z.distance=X,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[M]=z;const B=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,B.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[M]=B.matrix,R.castShadow){const J=t.get(R);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=U,S++}M++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(N).multiplyScalar(H),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=z,m++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const B=R.shadow,J=t.get(R);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=z,g++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(H),z.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==M||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==v||_.numPointShadows!==b||_.numSpotShadows!==S||_.numSpotMaps!==w||_.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,_.directionalLength=f,_.pointLength=g,_.spotLength=M,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=v,_.numPointShadows=b,_.numSpotShadows=S,_.numSpotMaps=w,_.numLightProbes=C,n.version=B0++)}function c(l,h){let u=0,d=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const b=l[p];if(b.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(b.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=n.hemi[M];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:c,state:n}}function Sl(r){const e=new G0(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function z0(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Sl(r),e.set(i,[o])):s>=a.length?(o=new Sl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
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
}`,W0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],X0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],bl=new Ge,gs=new P,xa=new P;function q0(r,e,t){let n=new Vo;const i=new ke,s=new ke,a=new ct,o=new Ad,c=new wd,l={},h=t.maxTextureSize,u={[Xn]:qt,[qt]:Xn,[Xt]:Xt},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:V0,fragmentShader:H0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let p=this.type;this.render=function(T,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Nl&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dr);const A=r.getRenderTarget(),I=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Hn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=p!==this.type;H&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(U=>U.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,U=T.length;X<U;X++){const z=T[X],B=z.shadow;if(B===void 0){Me("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const J=B.getFrameExtents();i.multiply(J),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,B.mapSize.y=s.y));const Q=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Q,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===xs){if(z.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new An(i.x,i.y,{format:vi,type:qn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new $i(i.x,i.y,an),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Yn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wt,B.map.depthTexture.magFilter=wt}else z.isPointLight?(B.map=new vh(i.x),B.map.depthTexture=new Md(i.x,Rn)):(B.map=new An(i.x,i.y),B.map.depthTexture=new $i(i.x,i.y,Rn)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Yn,this.type===dr?(B.map.depthTexture.compareFunction=Q?Uo:No,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wt,B.map.depthTexture.magFilter=wt);B.camera.updateProjectionMatrix()}const le=B.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<le;xe++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(B.map),r.clear());const Ee=B.getViewport(xe);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),N.viewport(a)}if(z.isPointLight){const Ee=B.camera,Ke=B.matrix,tt=z.distance||Ee.far;tt!==Ee.far&&(Ee.far=tt,Ee.updateProjectionMatrix()),gs.setFromMatrixPosition(z.matrixWorld),Ee.position.copy(gs),xa.copy(Ee.position),xa.add(W0[xe]),Ee.up.copy(X0[xe]),Ee.lookAt(xa),Ee.updateMatrixWorld(),Ke.makeTranslation(-gs.x,-gs.y,-gs.z),bl.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),B._frustum.setFromProjectionMatrix(bl,Ee.coordinateSystem,Ee.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),S(C,_,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===xs&&v(B,_),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(A,I,R)};function v(T,C){const _=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new An(i.x,i.y,{format:vi,type:qn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(C,null,_,d,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(C,null,_,f,M,null)}function b(T,C,_,A){let I=null;const R=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)I=R;else if(I=_.isPointLight===!0?c:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=I.uuid,H=C.uuid;let X=l[N];X===void 0&&(X={},l[N]=X);let U=X[H];U===void 0&&(U=I.clone(),X[H]=U,C.addEventListener("dispose",w)),I=U}if(I.visible=C.visible,I.wireframe=C.wireframe,A===xs?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:u[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=r.properties.get(I);N.light=_}return I}function S(T,C,_,A,I){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===xs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const H=e.update(T),X=T.material;if(Array.isArray(X)){const U=H.groups;for(let z=0,B=U.length;z<B;z++){const J=U[z],Q=X[J.materialIndex];if(Q&&Q.visible){const le=b(T,Q,A,I);T.onBeforeShadow(r,T,C,_,H,le,J),r.renderBufferDirect(_,null,H,le,T,J),T.onAfterShadow(r,T,C,_,H,le,J)}}}else if(X.visible){const U=b(T,X,A,I);T.onBeforeShadow(r,T,C,_,H,U,null),r.renderBufferDirect(_,null,H,U,T,null),T.onAfterShadow(r,T,C,_,H,U,null)}}const N=T.children;for(let H=0,X=N.length;H<X;H++)S(N[H],C,_,A,I)}function w(T){T.target.removeEventListener("dispose",w);for(const _ in l){const A=l[_],I=T.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Y0(r,e){function t(){let L=!1;const ne=new ct;let q=null;const pe=new ct(0,0,0,0);return{setMask:function(re){q!==re&&!L&&(r.colorMask(re,re,re,re),q=re)},setLocked:function(re){L=re},setClear:function(re,$,ye,De,xt){xt===!0&&(re*=De,$*=De,ye*=De),ne.set(re,$,ye,De),pe.equals(ne)===!1&&(r.clearColor(re,$,ye,De),pe.copy(ne))},reset:function(){L=!1,q=null,pe.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,q=null,pe=null,re=null;return{setReversed:function($){if(ne!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ne=$;const De=re;re=null,this.setClear(De)}},getReversed:function(){return ne},setTest:function($){$?ie(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function($){q!==$&&!L&&(r.depthMask($),q=$)},setFunc:function($){if(ne&&($=Tu[$]),pe!==$){switch($){case Aa:r.depthFunc(r.NEVER);break;case wa:r.depthFunc(r.ALWAYS);break;case Ra:r.depthFunc(r.LESS);break;case qi:r.depthFunc(r.LEQUAL);break;case Ca:r.depthFunc(r.EQUAL);break;case Ia:r.depthFunc(r.GEQUAL);break;case Pa:r.depthFunc(r.GREATER);break;case La:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=$}},setLocked:function($){L=$},setClear:function($){re!==$&&(re=$,ne&&($=1-$),r.clearDepth($))},reset:function(){L=!1,q=null,pe=null,re=null,ne=!1}}}function i(){let L=!1,ne=null,q=null,pe=null,re=null,$=null,ye=null,De=null,xt=null;return{setTest:function(it){L||(it?ie(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(it){ne!==it&&!L&&(r.stencilMask(it),ne=it)},setFunc:function(it,Dn,_n){(q!==it||pe!==Dn||re!==_n)&&(r.stencilFunc(it,Dn,_n),q=it,pe=Dn,re=_n)},setOp:function(it,Dn,_n){($!==it||ye!==Dn||De!==_n)&&(r.stencilOp(it,Dn,_n),$=it,ye=Dn,De=_n)},setLocked:function(it){L=it},setClear:function(it){xt!==it&&(r.clearStencil(it),xt=it)},reset:function(){L=!1,ne=null,q=null,pe=null,re=null,$=null,ye=null,De=null,xt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],M=null,m=!1,p=null,v=null,b=null,S=null,w=null,T=null,C=null,_=new Ce(0,0,0),A=0,I=!1,R=null,N=null,H=null,X=null,U=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=J>=2);let le=null,xe={};const Ee=r.getParameter(r.SCISSOR_BOX),Ke=r.getParameter(r.VIEWPORT),tt=new ct().fromArray(Ee),Ue=new ct().fromArray(Ke);function j(L,ne,q,pe){const re=new Uint8Array(4),$=r.createTexture();r.bindTexture(L,$),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<q;ye++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(ne+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return $}const de={};de[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),de[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),de[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(qi),Et(!1),pt(lc),ie(r.CULL_FACE),ut(Hn);function ie(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Pe(L,ne){return d[L]!==ne?(r.bindFramebuffer(L,ne),d[L]=ne,L===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ne),L===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function Re(L,ne){let q=g,pe=!1;if(L){q=f.get(ne),q===void 0&&(q=[],f.set(ne,q));const re=L.textures;if(q.length!==re.length||q[0]!==r.COLOR_ATTACHMENT0){for(let $=0,ye=re.length;$<ye;$++)q[$]=r.COLOR_ATTACHMENT0+$;q.length=re.length,pe=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,pe=!0);pe&&r.drawBuffers(q)}function ft(L){return M!==L?(r.useProgram(L),M=L,!0):!1}const Xe={[mi]:r.FUNC_ADD,[Vh]:r.FUNC_SUBTRACT,[Hh]:r.FUNC_REVERSE_SUBTRACT};Xe[Wh]=r.MIN,Xe[Xh]=r.MAX;const nt={[qh]:r.ZERO,[Yh]:r.ONE,[Kh]:r.SRC_COLOR,[Ea]:r.SRC_ALPHA,[eu]:r.SRC_ALPHA_SATURATE,[Jh]:r.DST_COLOR,[$h]:r.DST_ALPHA,[jh]:r.ONE_MINUS_SRC_COLOR,[Ta]:r.ONE_MINUS_SRC_ALPHA,[Qh]:r.ONE_MINUS_DST_COLOR,[Zh]:r.ONE_MINUS_DST_ALPHA,[tu]:r.CONSTANT_COLOR,[nu]:r.ONE_MINUS_CONSTANT_COLOR,[iu]:r.CONSTANT_ALPHA,[su]:r.ONE_MINUS_CONSTANT_ALPHA};function ut(L,ne,q,pe,re,$,ye,De,xt,it){if(L===Hn){m===!0&&(Ae(r.BLEND),m=!1);return}if(m===!1&&(ie(r.BLEND),m=!0),L!==zh){if(L!==p||it!==I){if((v!==mi||w!==mi)&&(r.blendEquation(r.FUNC_ADD),v=mi,w=mi),it)switch(L){case Hi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hc:r.blendFunc(r.ONE,r.ONE);break;case uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:we("WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case uc:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",L);break}b=null,S=null,T=null,C=null,_.set(0,0,0),A=0,p=L,I=it}return}re=re||ne,$=$||q,ye=ye||pe,(ne!==v||re!==w)&&(r.blendEquationSeparate(Xe[ne],Xe[re]),v=ne,w=re),(q!==b||pe!==S||$!==T||ye!==C)&&(r.blendFuncSeparate(nt[q],nt[pe],nt[$],nt[ye]),b=q,S=pe,T=$,C=ye),(De.equals(_)===!1||xt!==A)&&(r.blendColor(De.r,De.g,De.b,xt),_.copy(De),A=xt),p=L,I=!1}function Ve(L,ne){L.side===Xt?Ae(r.CULL_FACE):ie(r.CULL_FACE);let q=L.side===qt;ne&&(q=!q),Et(q),L.blending===Hi&&L.transparent===!1?ut(Hn):ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;o.setTest(pe),pe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Et(L){R!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),R=L)}function pt(L){L!==kh?(ie(r.CULL_FACE),L!==N&&(L===lc?r.cullFace(r.BACK):L===Gh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),N=L}function Yt(L){L!==H&&(B&&r.lineWidth(L),H=L)}function D(L,ne,q){L?(ie(r.POLYGON_OFFSET_FILL),(X!==ne||U!==q)&&(X=ne,U=q,a.getReversed()&&(ne=-ne),r.polygonOffset(ne,q))):Ae(r.POLYGON_OFFSET_FILL)}function Tt(L){L?ie(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function qe(L){L===void 0&&(L=r.TEXTURE0+z-1),le!==L&&(r.activeTexture(L),le=L)}function lt(L,ne,q){q===void 0&&(le===null?q=r.TEXTURE0+z-1:q=le);let pe=xe[q];pe===void 0&&(pe={type:void 0,texture:void 0},xe[q]=pe),(pe.type!==L||pe.texture!==ne)&&(le!==q&&(r.activeTexture(q),le=q),r.bindTexture(L,ne||de[L]),pe.type=L,pe.texture=ne)}function oe(){const L=xe[le];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function E(){try{r.compressedTexImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function x(){try{r.texSubImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function O(){try{r.texSubImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function ee(){try{r.texStorage2D(...arguments)}catch(L){we("WebGLState:",L)}}function ae(){try{r.texStorage3D(...arguments)}catch(L){we("WebGLState:",L)}}function W(){try{r.texImage2D(...arguments)}catch(L){we("WebGLState:",L)}}function K(){try{r.texImage3D(...arguments)}catch(L){we("WebGLState:",L)}}function fe(L){return u[L]!==void 0?u[L]:r.getParameter(L)}function ge(L,ne){u[L]!==ne&&(r.pixelStorei(L,ne),u[L]=ne)}function se(L){tt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),tt.copy(L))}function te(L){Ue.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Ue.copy(L))}function Ie(L,ne){let q=l.get(ne);q===void 0&&(q=new WeakMap,l.set(ne,q));let pe=q.get(L);pe===void 0&&(pe=r.getUniformBlockIndex(ne,L.name),q.set(L,pe))}function Fe(L,ne){const pe=l.get(ne).get(L);c.get(ne)!==pe&&(r.uniformBlockBinding(ne,pe,L.__bindingPointIndex),c.set(ne,pe))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},le=null,xe={},d={},f=new WeakMap,g=[],M=null,m=!1,p=null,v=null,b=null,S=null,w=null,T=null,C=null,_=new Ce(0,0,0),A=0,I=!1,R=null,N=null,H=null,X=null,U=null,tt.set(0,0,r.canvas.width,r.canvas.height),Ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Ae,bindFramebuffer:Pe,drawBuffers:Re,useProgram:ft,setBlending:ut,setMaterial:Ve,setFlipSided:Et,setCullFace:pt,setLineWidth:Yt,setPolygonOffset:D,setScissorTest:Tt,activeTexture:qe,bindTexture:lt,unbindTexture:oe,compressedTexImage2D:mt,compressedTexImage3D:E,texImage2D:W,texImage3D:K,pixelStorei:ge,getParameter:fe,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:ee,texStorage3D:ae,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:Y,compressedTexSubImage3D:Z,scissor:se,viewport:te,reset:$e}}function K0(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,x){return g?new OffscreenCanvas(E,x):Is("canvas")}function m(E,x,O){let Y=1;const Z=mt(E);if((Z.width>O||Z.height>O)&&(Y=O/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ee=Math.floor(Y*Z.width),ae=Math.floor(Y*Z.height);d===void 0&&(d=M(ee,ae));const W=x?M(ee,ae):d;return W.width=ee,W.height=ae,W.getContext("2d").drawImage(E,0,0,ee,ae),Me("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ee+"x"+ae+")."),W}else return"data"in E&&Me("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps}function v(E){r.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(E,x,O,Y,Z,ee=!1){if(E!==null){if(r[E]!==void 0)return r[E];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae;Y&&(ae=e.get("EXT_texture_norm16"),ae||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=x;if(x===r.RED&&(O===r.FLOAT&&(W=r.R32F),O===r.HALF_FLOAT&&(W=r.R16F),O===r.UNSIGNED_BYTE&&(W=r.R8),O===r.UNSIGNED_SHORT&&ae&&(W=ae.R16_EXT),O===r.SHORT&&ae&&(W=ae.R16_SNORM_EXT)),x===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.R8UI),O===r.UNSIGNED_SHORT&&(W=r.R16UI),O===r.UNSIGNED_INT&&(W=r.R32UI),O===r.BYTE&&(W=r.R8I),O===r.SHORT&&(W=r.R16I),O===r.INT&&(W=r.R32I)),x===r.RG&&(O===r.FLOAT&&(W=r.RG32F),O===r.HALF_FLOAT&&(W=r.RG16F),O===r.UNSIGNED_BYTE&&(W=r.RG8),O===r.UNSIGNED_SHORT&&ae&&(W=ae.RG16_EXT),O===r.SHORT&&ae&&(W=ae.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RG8UI),O===r.UNSIGNED_SHORT&&(W=r.RG16UI),O===r.UNSIGNED_INT&&(W=r.RG32UI),O===r.BYTE&&(W=r.RG8I),O===r.SHORT&&(W=r.RG16I),O===r.INT&&(W=r.RG32I)),x===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGB8UI),O===r.UNSIGNED_SHORT&&(W=r.RGB16UI),O===r.UNSIGNED_INT&&(W=r.RGB32UI),O===r.BYTE&&(W=r.RGB8I),O===r.SHORT&&(W=r.RGB16I),O===r.INT&&(W=r.RGB32I)),x===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),O===r.UNSIGNED_INT&&(W=r.RGBA32UI),O===r.BYTE&&(W=r.RGBA8I),O===r.SHORT&&(W=r.RGBA16I),O===r.INT&&(W=r.RGBA32I)),x===r.RGB&&(O===r.UNSIGNED_SHORT&&ae&&(W=ae.RGB16_EXT),O===r.SHORT&&ae&&(W=ae.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),x===r.RGBA){const K=ee?br:He.getTransfer(Z);O===r.FLOAT&&(W=r.RGBA32F),O===r.HALF_FLOAT&&(W=r.RGBA16F),O===r.UNSIGNED_BYTE&&(W=K===Je?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&ae&&(W=ae.RGBA16_EXT),O===r.SHORT&&ae&&(W=ae.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function w(E,x){let O;return E?x===null||x===Rn||x===As?O=r.DEPTH24_STENCIL8:x===an?O=r.DEPTH32F_STENCIL8:x===Ts&&(O=r.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===As?O=r.DEPTH_COMPONENT24:x===an?O=r.DEPTH_COMPONENT32F:x===Ts&&(O=r.DEPTH_COMPONENT16),O}function T(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==wt&&E.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){const x=E.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(E){const x=E.target;x.removeEventListener("dispose",_),R(x)}function A(E){const x=n.get(E);if(x.__webglInit===void 0)return;const O=E.source,Y=f.get(O);if(Y){const Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(E),Object.keys(Y).length===0&&f.delete(O)}n.remove(E)}function I(E){const x=n.get(E);r.deleteTexture(x.__webglTexture);const O=E.source,Y=f.get(O);delete Y[x.__cacheKey],a.memory.textures--}function R(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else r.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)r.deleteFramebuffer(x.__webglFramebuffer[Y]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=E.textures;for(let Y=0,Z=O.length;Y<Z;Y++){const ee=n.get(O[Y]);ee.__webglTexture&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(E)}let N=0;function H(){N=0}function X(){return N}function U(E){N=E}function z(){const E=N;return E>=i.maxTextures&&Me("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),N+=1,E}function B(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function J(E,x){const O=n.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const Y=E.image;if(Y===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,E,x);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+x)}function Q(E,x){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Ae(O,E,x);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+x)}function le(E,x){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Ae(O,E,x);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+x)}function xe(E,x){const O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Pe(O,E,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+x)}const Ee={[Ki]:r.REPEAT,[bn]:r.CLAMP_TO_EDGE,[vr]:r.MIRRORED_REPEAT},Ke={[wt]:r.NEAREST,[Wl]:r.NEAREST_MIPMAP_NEAREST,[vs]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[fr]:r.LINEAR_MIPMAP_NEAREST,[Gn]:r.LINEAR_MIPMAP_LINEAR},tt={[mu]:r.NEVER,[Mu]:r.ALWAYS,[gu]:r.LESS,[No]:r.LEQUAL,[_u]:r.EQUAL,[Uo]:r.GEQUAL,[xu]:r.GREATER,[vu]:r.NOTEQUAL};function Ue(E,x){if(x.type===an&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===fr||x.magFilter===vs||x.magFilter===Gn||x.minFilter===Rt||x.minFilter===fr||x.minFilter===vs||x.minFilter===Gn)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,Ee[x.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,Ee[x.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,Ee[x.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,Ke[x.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,Ke[x.minFilter]),x.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,tt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==vs&&x.minFilter!==Gn||x.type===an&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function j(E,x){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));const Y=x.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const ee=B(x);if(ee!==E.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[ee].usedTimes++;const ae=Z[E.__cacheKey];ae!==void 0&&(Z[E.__cacheKey].usedTimes--,ae.usedTimes===0&&I(x)),E.__cacheKey=ee,E.__webglTexture=Z[ee].texture}return O}function de(E,x,O){return Math.floor(Math.floor(E/O)/x)}function ie(E,x,O,Y){const ee=E.updateRanges;if(ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,O,Y,x.data);else{ee.sort((ge,se)=>ge.start-se.start);let ae=0;for(let ge=1;ge<ee.length;ge++){const se=ee[ae],te=ee[ge],Ie=se.start+se.count,Fe=de(te.start,x.width,4),$e=de(se.start,x.width,4);te.start<=Ie+1&&Fe===$e&&de(te.start+te.count-1,x.width,4)===Fe?se.count=Math.max(se.count,te.start+te.count-se.start):(++ae,ee[ae]=te)}ee.length=ae+1;const W=t.getParameter(r.UNPACK_ROW_LENGTH),K=t.getParameter(r.UNPACK_SKIP_PIXELS),fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let ge=0,se=ee.length;ge<se;ge++){const te=ee[ge],Ie=Math.floor(te.start/4),Fe=Math.ceil(te.count/4),$e=Ie%x.width,L=Math.floor(Ie/x.width),ne=Fe,q=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,$e,L,ne,q,O,Y,x.data)}E.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,W),t.pixelStorei(r.UNPACK_SKIP_PIXELS,K),t.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function Ae(E,x,O){let Y=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=r.TEXTURE_3D);const Z=j(E,x),ee=x.source;t.bindTexture(Y,E.__webglTexture,r.TEXTURE0+O);const ae=n.get(ee);if(ee.version!==ae.__version||Z===!0){if(t.activeTexture(r.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const q=He.getPrimaries(He.workingColorSpace),pe=x.colorSpace===si?null:He.getPrimaries(x.colorSpace),re=x.colorSpace===si||q===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let K=m(x.image,!1,i.maxTextureSize);K=oe(x,K);const fe=s.convert(x.format,x.colorSpace),ge=s.convert(x.type);let se=S(x.internalFormat,fe,ge,x.normalized,x.colorSpace,x.isVideoTexture);Ue(Y,x);let te;const Ie=x.mipmaps,Fe=x.isVideoTexture!==!0,$e=ae.__version===void 0||Z===!0,L=ee.dataReady,ne=T(x,K);if(x.isDepthTexture)se=w(x.format===_i,x.type),$e&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,se,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,se,K.width,K.height,0,fe,ge,null));else if(x.isDataTexture)if(Ie.length>0){Fe&&$e&&t.texStorage2D(r.TEXTURE_2D,ne,se,Ie[0].width,Ie[0].height);for(let q=0,pe=Ie.length;q<pe;q++)te=Ie[q],Fe?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,te.width,te.height,fe,ge,te.data):t.texImage2D(r.TEXTURE_2D,q,se,te.width,te.height,0,fe,ge,te.data);x.generateMipmaps=!1}else Fe?($e&&t.texStorage2D(r.TEXTURE_2D,ne,se,K.width,K.height),L&&ie(x,K,fe,ge)):t.texImage2D(r.TEXTURE_2D,0,se,K.width,K.height,0,fe,ge,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,se,Ie[0].width,Ie[0].height,K.depth);for(let q=0,pe=Ie.length;q<pe;q++)if(te=Ie[q],x.format!==on)if(fe!==null)if(Fe){if(L)if(x.layerUpdates.size>0){const re=el(te.width,te.height,x.format,x.type);for(const $ of x.layerUpdates){const ye=te.data.subarray($*re/te.data.BYTES_PER_ELEMENT,($+1)*re/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,$,te.width,te.height,1,fe,ye)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,te.width,te.height,K.depth,fe,te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,se,te.width,te.height,K.depth,0,te.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,te.width,te.height,K.depth,fe,ge,te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,se,te.width,te.height,K.depth,0,fe,ge,te.data)}else{Fe&&$e&&t.texStorage2D(r.TEXTURE_2D,ne,se,Ie[0].width,Ie[0].height);for(let q=0,pe=Ie.length;q<pe;q++)te=Ie[q],x.format!==on?fe!==null?Fe?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,te.width,te.height,fe,te.data):t.compressedTexImage2D(r.TEXTURE_2D,q,se,te.width,te.height,0,te.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,te.width,te.height,fe,ge,te.data):t.texImage2D(r.TEXTURE_2D,q,se,te.width,te.height,0,fe,ge,te.data)}else if(x.isDataArrayTexture)if(Fe){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,se,K.width,K.height,K.depth),L)if(x.layerUpdates.size>0){const q=el(K.width,K.height,x.format,x.type);for(const pe of x.layerUpdates){const re=K.data.subarray(pe*q/K.data.BYTES_PER_ELEMENT,(pe+1)*q/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,K.width,K.height,1,fe,ge,re)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,ge,K.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,se,K.width,K.height,K.depth,0,fe,ge,K.data);else if(x.isData3DTexture)Fe?($e&&t.texStorage3D(r.TEXTURE_3D,ne,se,K.width,K.height,K.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,ge,K.data)):t.texImage3D(r.TEXTURE_3D,0,se,K.width,K.height,K.depth,0,fe,ge,K.data);else if(x.isFramebufferTexture){if($e)if(Fe)t.texStorage2D(r.TEXTURE_2D,ne,se,K.width,K.height);else{let q=K.width,pe=K.height;for(let re=0;re<ne;re++)t.texImage2D(r.TEXTURE_2D,re,se,q,pe,0,fe,ge,null),q>>=1,pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const q=r.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),u.add(x),q.onpaint=De=>{const xt=De.changedElements;for(const it of u)xt.includes(it.image)&&(it.needsUpdate=!0)},q.requestPaint();return}const pe=0,re=r.RGBA,$=r.RGBA,ye=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,pe,re,$,ye,K),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&$e){const q=mt(Ie[0]);t.texStorage2D(r.TEXTURE_2D,ne,se,q.width,q.height)}for(let q=0,pe=Ie.length;q<pe;q++)te=Ie[q],Fe?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,fe,ge,te):t.texImage2D(r.TEXTURE_2D,q,se,fe,ge,te);x.generateMipmaps=!1}else if(Fe){if($e){const q=mt(K);t.texStorage2D(r.TEXTURE_2D,ne,se,q.width,q.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,ge,K)}else t.texImage2D(r.TEXTURE_2D,0,se,fe,ge,K);p(x)&&v(Y),ae.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Pe(E,x,O){if(x.image.length!==6)return;const Y=j(E,x),Z=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+O);const ee=n.get(Z);if(Z.version!==ee.__version||Y===!0){t.activeTexture(r.TEXTURE0+O);const ae=He.getPrimaries(He.workingColorSpace),W=x.colorSpace===si?null:He.getPrimaries(x.colorSpace),K=x.colorSpace===si||ae===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,se=[];for(let $=0;$<6;$++)!fe&&!ge?se[$]=m(x.image[$],!0,i.maxCubemapSize):se[$]=ge?x.image[$].image:x.image[$],se[$]=oe(x,se[$]);const te=se[0],Ie=s.convert(x.format,x.colorSpace),Fe=s.convert(x.type),$e=S(x.internalFormat,Ie,Fe,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,ne=ee.__version===void 0||Y===!0,q=Z.dataReady;let pe=T(x,te);Ue(r.TEXTURE_CUBE_MAP,x);let re;if(fe){L&&ne&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,$e,te.width,te.height);for(let $=0;$<6;$++){re=se[$].mipmaps;for(let ye=0;ye<re.length;ye++){const De=re[ye];x.format!==on?Ie!==null?L?q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,De.width,De.height,Ie,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,$e,De.width,De.height,0,De.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,De.width,De.height,Ie,Fe,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,$e,De.width,De.height,0,Ie,Fe,De.data)}}}else{if(re=x.mipmaps,L&&ne){re.length>0&&pe++;const $=mt(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,$e,$.width,$.height)}for(let $=0;$<6;$++)if(ge){L?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,se[$].width,se[$].height,Ie,Fe,se[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$e,se[$].width,se[$].height,0,Ie,Fe,se[$].data);for(let ye=0;ye<re.length;ye++){const xt=re[ye].image[$].image;L?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,xt.width,xt.height,Ie,Fe,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,$e,xt.width,xt.height,0,Ie,Fe,xt.data)}}else{L?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ie,Fe,se[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,$e,Ie,Fe,se[$]);for(let ye=0;ye<re.length;ye++){const De=re[ye];L?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Ie,Fe,De.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,$e,Ie,Fe,De.image[$])}}}p(x)&&v(r.TEXTURE_CUBE_MAP),ee.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Re(E,x,O,Y,Z,ee){const ae=s.convert(O.format,O.colorSpace),W=s.convert(O.type),K=S(O.internalFormat,ae,W,O.normalized,O.colorSpace),fe=n.get(x),ge=n.get(O);if(ge.__renderTarget=x,!fe.__hasExternalTextures){const se=Math.max(1,x.width>>ee),te=Math.max(1,x.height>>ee);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,K,se,te,x.depth,0,ae,W,null):t.texImage2D(Z,ee,K,se,te,0,ae,W,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),qe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Z,ge.__webglTexture,0,Tt(x)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Z,ge.__webglTexture,ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(E,x,O){if(r.bindRenderbuffer(r.RENDERBUFFER,E),x.depthBuffer){const Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,ee=w(x.stencilBuffer,Z),ae=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(x),ee,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(x),ee,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ee,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,E)}else{const Y=x.textures;for(let Z=0;Z<Y.length;Z++){const ee=Y[Z],ae=s.convert(ee.format,ee.colorSpace),W=s.convert(ee.type),K=S(ee.internalFormat,ae,W,ee.normalized,ee.colorSpace);qe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(x),K,x.width,x.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(x),K,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,K,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xe(E,x,O){const Y=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,x.depthTexture);const fe=s.convert(x.depthTexture.format),ge=s.convert(x.depthTexture.type);let se;x.depthTexture.format===Yn?se=r.DEPTH_COMPONENT24:x.depthTexture.format===_i&&(se=r.DEPTH24_STENCIL8);for(let te=0;te<6;te++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,se,x.width,x.height,0,fe,ge,null)}}else J(x.depthTexture,0);const ee=Z.__webglTexture,ae=Tt(x),W=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,K=x.depthTexture.format===_i?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Yn)qe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,W,ee,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,K,W,ee,0);else if(x.depthTexture.format===_i)qe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,W,ee,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,K,W,ee,0);else throw new Error("Unknown depthTexture format")}function nt(E){const x=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)Xe(x.__webglFramebuffer[Y],E,Y);else{const Y=E.texture.mipmaps;Y&&Y.length>0?Xe(x.__webglFramebuffer[0],E,0):Xe(x.__webglFramebuffer,E,0)}else if(O){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=r.createRenderbuffer(),ft(x.__webglDepthbuffer[Y],E,!1);else{const Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ee)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),ft(x.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(E,x,O){const Y=n.get(E);x!==void 0&&Re(Y.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&nt(E)}function Ve(E){const x=E.texture,O=n.get(E),Y=n.get(x);E.addEventListener("dispose",_);const Z=E.textures,ee=E.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=x.version,a.memory.textures++),ee){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let K=0;K<x.mipmaps.length;K++)O.__webglFramebuffer[W][K]=r.createFramebuffer()}else O.__webglFramebuffer[W]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<x.mipmaps.length;W++)O.__webglFramebuffer[W]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ae)for(let W=0,K=Z.length;W<K;W++){const fe=n.get(Z[W]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&qe(E)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<Z.length;W++){const K=Z[W];O.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[W]);const fe=s.convert(K.format,K.colorSpace),ge=s.convert(K.type),se=S(K.internalFormat,fe,ge,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),te=Tt(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,se,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,O.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,x);for(let W=0;W<6;W++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Re(O.__webglFramebuffer[W][K],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Re(O.__webglFramebuffer[W],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);p(x)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let W=0,K=Z.length;W<K;W++){const fe=Z[W],ge=n.get(fe);let se=r.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ge.__webglTexture),Ue(se,fe),Re(O.__webglFramebuffer,E,fe,r.COLOR_ATTACHMENT0+W,se,0),p(fe)&&v(se)}t.unbindTexture()}else{let W=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(W=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(W,Y.__webglTexture),Ue(W,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Re(O.__webglFramebuffer[K],E,x,r.COLOR_ATTACHMENT0,W,K);else Re(O.__webglFramebuffer,E,x,r.COLOR_ATTACHMENT0,W,0);p(x)&&v(W),t.unbindTexture()}E.depthBuffer&&nt(E)}function Et(E){const x=E.textures;for(let O=0,Y=x.length;O<Y;O++){const Z=x[O];if(p(Z)){const ee=b(E),ae=n.get(Z).__webglTexture;t.bindTexture(ee,ae),v(ee),t.unbindTexture()}}}const pt=[],Yt=[];function D(E){if(E.samples>0){if(qe(E)===!1){const x=E.textures,O=E.width,Y=E.height;let Z=r.COLOR_BUFFER_BIT;const ee=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(E),W=x.length>1;if(W)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const K=E.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),W){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const ge=n.get(x[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,O,Y,0,0,O,Y,Z,r.NEAREST),c===!0&&(pt.length=0,Yt.length=0,pt.push(r.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pt.push(ee),Yt.push(ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const ge=n.get(x[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const x=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Tt(E){return Math.min(i.maxSamples,E.samples)}function qe(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function oe(E,x){const O=E.colorSpace,Y=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Qt&&O!==si&&(He.getTransfer(O)===Je?(Y!==on||Z!==Zt)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",O)),x}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.getTextureUnits=X,this.setTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=le,this.setTextureCube=xe,this.rebindTextures=ut,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function j0(r,e){function t(n,i=si){let s;const a=He.getTransfer(i);if(n===Zt)return r.UNSIGNED_BYTE;if(n===wo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return r.BYTE;if(n===ql)return r.SHORT;if(n===Ts)return r.UNSIGNED_SHORT;if(n===Ao)return r.INT;if(n===Rn)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===qn)return r.HALF_FLOAT;if(n===jl)return r.ALPHA;if(n===$l)return r.RGB;if(n===on)return r.RGBA;if(n===Yn)return r.DEPTH_COMPONENT;if(n===_i)return r.DEPTH_STENCIL;if(n===Co)return r.RED;if(n===Io)return r.RED_INTEGER;if(n===vi)return r.RG;if(n===Po)return r.RG_INTEGER;if(n===Lo)return r.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Na||n===Ua||n===Fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===ka||n===Ga||n===za||n===Mr||n===Va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oa||n===Ba)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return s.COMPRESSED_R11_EAC;if(n===za)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return s.COMPRESSED_RG11_EAC;if(n===Va)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===ja||n===$a||n===Za||n===Ja||n===Qa||n===eo||n===to||n===no)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ha)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===so||n===ro)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===io)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===oo||n===yr||n===co)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ao)return s.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class J0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ch(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:$0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q0 extends oi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new J0,p={},v=t.getContextAttributes();let b=null,S=null;const w=[],T=[],C=new ke;let _=null;const A=new Ht;A.viewport=new ct;const I=new Ht;I.viewport=new ct;const R=[A,I],N=new Kd;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=w[j];return de===void 0&&(de=new Xr,w[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=w[j];return de===void 0&&(de=new Xr,w[j]=de),de.getGripSpace()},this.getHand=function(j){let de=w[j];return de===void 0&&(de=new Xr,w[j]=de),de.getHandSpace()};function U(j){const de=T.indexOf(j.inputSource);if(de===-1)return;const ie=w[de];ie!==void 0&&(ie.update(j.inputSource,j.frame,l||a),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let j=0;j<w.length;j++){const de=T[j];de!==null&&(T[j]=null,w[j].disconnect(de))}H=null,X=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(b),f=null,d=null,u=null,i=null,S=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ae=null,Pe=null;v.depth&&(Pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?_i:Yn,Ae=v.stencil?As:Rn);const Re={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new An(d.textureWidth,d.textureHeight,{format:on,type:Zt,depthTexture:new $i(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new An(f.framebufferWidth,f.framebufferHeight,{format:on,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(j){for(let de=0;de<j.removed.length;de++){const ie=j.removed[de],Ae=T.indexOf(ie);Ae>=0&&(T[Ae]=null,w[Ae].disconnect(ie))}for(let de=0;de<j.added.length;de++){const ie=j.added[de];let Ae=T.indexOf(ie);if(Ae===-1){for(let Re=0;Re<w.length;Re++)if(Re>=T.length){T.push(ie),Ae=Re;break}else if(T[Re]===null){T[Re]=ie,Ae=Re;break}if(Ae===-1)break}const Pe=w[Ae];Pe&&Pe.connect(ie)}}const J=new P,Q=new P;function le(j,de,ie){J.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const Ae=J.distanceTo(Q),Pe=de.projectionMatrix.elements,Re=ie.projectionMatrix.elements,ft=Pe[14]/(Pe[10]-1),Xe=Pe[14]/(Pe[10]+1),nt=(Pe[9]+1)/Pe[5],ut=(Pe[9]-1)/Pe[5],Ve=(Pe[8]-1)/Pe[0],Et=(Re[8]+1)/Re[0],pt=ft*Ve,Yt=ft*Et,D=Ae/(-Ve+Et),Tt=D*-Ve;if(de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Tt),j.translateZ(D),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const qe=ft+D,lt=Xe+D,oe=pt-Tt,mt=Yt+(Ae-Tt),E=nt*Xe/lt*qe,x=ut*Xe/lt*qe;j.projectionMatrix.makePerspective(oe,mt,E,x,qe,lt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xe(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let de=j.near,ie=j.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),N.near=I.near=A.near=de,N.far=I.far=A.far=ie,(H!==N.near||X!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,X=N.far),N.layers.mask=j.layers.mask|6,A.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const Ae=j.parent,Pe=N.cameras;xe(N,Ae);for(let Re=0;Re<Pe.length;Re++)xe(Pe[Re],Ae);Pe.length===2?le(N,A,I):N.projectionMatrix.copy(A.projectionMatrix),Ee(j,N,Ae)};function Ee(j,de,ie){ie===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ji*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return p[j]};let Ke=null;function tt(j,de){if(h=de.getViewerPose(l||a),g=de,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ae=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,Ae=!0);for(let Xe=0;Xe<ie.length;Xe++){const nt=ie[Xe];let ut=null;if(f!==null)ut=f.getViewport(nt);else{const Et=u.getViewSubImage(d,nt);ut=Et.viewport,Xe===0&&(e.setRenderTargetTextures(S,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(S))}let Ve=R[Xe];Ve===void 0&&(Ve=new Ht,Ve.layers.enable(Xe),Ve.viewport=new ct,R[Xe]=Ve),Ve.matrix.fromArray(nt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(nt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(N.matrix.copy(Ve.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ae===!0&&N.cameras.push(Ve)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const Xe=u.getDepthInformation(ie[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,i.renderState)}if(Pe&&Pe.includes("camera-access")&&M){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<ie.length;Xe++){const nt=ie[Xe].camera;if(nt){let ut=p[nt];ut||(ut=new ch,p[nt]=ut);const Ve=u.getCameraImage(nt);ut.sourceTexture=Ve}}}}for(let ie=0;ie<w.length;ie++){const Ae=T[ie],Pe=w[ie];Ae!==null&&Pe!==void 0&&Pe.update(Ae,de,l||a)}Ke&&Ke(j,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const Ue=new _h;Ue.setAnimationLoop(tt),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}}const e_=new Ge,Eh=new Le;Eh.set(-1,0,0,0,1,0,0,0,1);function t_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,b,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),b=v.envMap,S=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const S=b.program;n.uniformBlockBinding(v,S)}function l(v,b){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",m));const w=b.program;n.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function h(v){const b=u();v.__bindingPointIndex=b;const S=r.createBuffer(),w=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,w,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const b=i[v.id],S=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let T=0,C=S.length;T<C;T++){const _=Array.isArray(S[T])?S[T]:[S[T]];for(let A=0,I=_.length;A<I;A++){const R=_[A];if(f(R,T,A,w)===!0){const N=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let U=0;U<H.length;U++){const z=H[U],B=M(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,N+X,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):ArrayBuffer.isView(z)?R.__data.set(new z.constructor(z.buffer,z.byteOffset,R.__data.length)):(z.toArray(R.__data,X),X+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,b,S,w){const T=v.value,C=b+"_"+S;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:ArrayBuffer.isView(T)?w[C]=T.slice():w[C]=T.clone(),!0;{const _=w[C];if(typeof T=="number"||typeof T=="boolean"){if(_!==T)return w[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(_.equals(T)===!1)return _.copy(T),!0}}return!1}function g(v){const b=v.uniforms;let S=0;const w=16;for(let C=0,_=b.length;C<_;C++){const A=Array.isArray(b[C])?b[C]:[b[C]];for(let I=0,R=A.length;I<R;I++){const N=A[I],H=Array.isArray(N.value)?N.value:[N.value];for(let X=0,U=H.length;X<U;X++){const z=H[X],B=M(z),J=S%w,Q=J%B.boundary,le=J+Q;S+=Q,le!==0&&w-le<B.storage&&(S+=w-le),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=B.storage}}}const T=S%w;return T>0&&(S+=w-T),v.__size=S,v.__cache={},this}function M(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}const i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function s_(){return Mn===null&&(Mn=new Go(i_,16,16,vi,qn),Mn.name="DFG_LUT",Mn.minFilter=Rt,Mn.magFilter=Rt,Mn.wrapS=bn,Mn.wrapT=bn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class r_{constructor(e={}){const{canvas:t=bu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=f,m=new Set([Lo,Po,Io]),p=new Set([Zt,Rn,Ts,As,wo,Ro]),v=new Uint32Array(4),b=new Int32Array(4),S=new P;let w=null,T=null;const C=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let R=!1,N=null;this._outputColorSpace=Dt;let H=0,X=0,U=null,z=-1,B=null;const J=new ct,Q=new ct;let le=null;const xe=new Ce(0);let Ee=0,Ke=t.width,tt=t.height,Ue=1,j=null,de=null;const ie=new ct(0,0,Ke,tt),Ae=new ct(0,0,Ke,tt);let Pe=!1;const Re=new Vo;let ft=!1,Xe=!1;const nt=new Ge,ut=new P,Ve=new ct,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Yt(){return U===null?Ue:1}let D=n;function Tt(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",De,!1),D===null){const F="webgl2";if(D=Tt(F,y),D===null)throw Tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw we("WebGLRenderer: "+y.message),y}let qe,lt,oe,mt,E,x,O,Y,Z,ee,ae,W,K,fe,ge,se,te,Ie,Fe,$e,L,ne,q;function pe(){qe=new sg(D),qe.init(),L=new j0(D,qe),lt=new $m(D,qe,e,L),oe=new Y0(D,qe),lt.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),mt=new og(D),E=new D0,x=new K0(D,qe,oe,E,lt,L,mt),O=new ig(I),Y=new uf(D),ne=new Km(D,Y),Z=new rg(D,Y,mt,ne),ee=new lg(D,Z,Y,ne,mt),Ie=new cg(D,lt,x),ge=new Zm(E),ae=new L0(I,O,qe,lt,ne,ge),W=new t_(I,E),K=new U0,fe=new z0(qe),te=new Ym(I,O,oe,ee,g,c),se=new q0(I,ee,lt),q=new n_(D,mt,lt,oe),Fe=new jm(D,qe,mt),$e=new ag(D,qe,mt),mt.programs=ae.programs,I.capabilities=lt,I.extensions=qe,I.properties=E,I.renderLists=K,I.shadowMap=se,I.state=oe,I.info=mt}pe(),M!==Zt&&(A=new ug(M,t.width,t.height,i,s));const re=new Q0(I,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(y){y!==void 0&&(Ue=y,this.setSize(Ke,tt,!1))},this.getSize=function(y){return y.set(Ke,tt)},this.setSize=function(y,F,V=!0){if(re.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=y,tt=F,t.width=Math.floor(y*Ue),t.height=Math.floor(F*Ue),V===!0&&(t.style.width=y+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Ke*Ue,tt*Ue).floor()},this.setDrawingBufferSize=function(y,F,V){Ke=y,tt=F,Ue=V,t.width=Math.floor(y*V),t.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(M===Zt){we("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Me("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(J)},this.getViewport=function(y){return y.copy(ie)},this.setViewport=function(y,F,V,k){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,F,V,k),oe.viewport(J.copy(ie).multiplyScalar(Ue).round())},this.getScissor=function(y){return y.copy(Ae)},this.setScissor=function(y,F,V,k){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,F,V,k),oe.scissor(Q.copy(Ae).multiplyScalar(Ue).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(y){oe.setScissorTest(Pe=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){de=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,V=!0){let k=0;if(y){let G=!1;if(U!==null){const ue=U.texture.format;G=m.has(ue)}if(G){const ue=U.texture.type,_e=p.has(ue),he=te.getClearColor(),ve=te.getClearAlpha(),be=he.r,Ne=he.g,Be=he.b;_e?(v[0]=be,v[1]=Ne,v[2]=Be,v[3]=ve,D.clearBufferuiv(D.COLOR,0,v)):(b[0]=be,b[1]=Ne,b[2]=Be,b[3]=ve,D.clearBufferiv(D.COLOR,0,b))}else k|=D.COLOR_BUFFER_BIT}F&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",De,!1),te.dispose(),K.dispose(),fe.dispose(),E.dispose(),O.dispose(),ee.dispose(),ne.dispose(),q.dispose(),ae.dispose(),re.dispose(),re.removeEventListener("sessionstart",tc),re.removeEventListener("sessionend",nc),ci.stop()};function $(y){y.preventDefault(),Er("WebGLRenderer: Context Lost."),R=!0}function ye(){Er("WebGLRenderer: Context Restored."),R=!1;const y=mt.autoReset,F=se.enabled,V=se.autoUpdate,k=se.needsUpdate,G=se.type;pe(),mt.autoReset=y,se.enabled=F,se.autoUpdate=V,se.needsUpdate=k,se.type=G}function De(y){we("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function xt(y){const F=y.target;F.removeEventListener("dispose",xt),it(F)}function it(y){Dn(y),E.remove(y)}function Dn(y){const F=E.get(y).programs;F!==void 0&&(F.forEach(function(V){ae.releaseProgram(V)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,k,G,ue){F===null&&(F=Et);const _e=G.isMesh&&G.matrixWorld.determinant()<0,he=Dh(y,F,V,k,G);oe.setMaterial(k,_e);let ve=V.index,be=1;if(k.wireframe===!0){if(ve=Z.getWireframeAttribute(V),ve===void 0)return;be=2}const Ne=V.drawRange,Be=V.attributes.position;let Te=Ne.start*be,st=(Ne.start+Ne.count)*be;ue!==null&&(Te=Math.max(Te,ue.start*be),st=Math.min(st,(ue.start+ue.count)*be)),ve!==null?(Te=Math.max(Te,0),st=Math.min(st,ve.count)):Be!=null&&(Te=Math.max(Te,0),st=Math.min(st,Be.count));const vt=st-Te;if(vt<0||vt===1/0)return;ne.setup(G,k,he,V,ve);let gt,at=Fe;if(ve!==null&&(gt=Y.get(ve),at=$e,at.setIndex(gt)),G.isMesh)k.wireframe===!0?(oe.setLineWidth(k.wireframeLinewidth*Yt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(G.isLine){let Ot=k.linewidth;Ot===void 0&&(Ot=1),oe.setLineWidth(Ot*Yt()),G.isLineSegments?at.setMode(D.LINES):G.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else G.isPoints?at.setMode(D.POINTS):G.isSprite&&at.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ot=G._multiDrawStarts,me=G._multiDrawCounts,Kt=G._multiDrawCount,je=ve?Y.get(ve).bytesPerElement:1,en=E.get(k).currentProgram.getUniforms();for(let xn=0;xn<Kt;xn++)en.setValue(D,"_gl_DrawID",xn),at.render(Ot[xn]/je,me[xn])}else if(G.isInstancedMesh)at.renderInstances(Te,vt,G.count);else if(V.isInstancedBufferGeometry){const Ot=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,me=Math.min(V.instanceCount,Ot);at.renderInstances(Te,vt,me)}else at.render(Te,vt)};function _n(y,F,V){y.transparent===!0&&y.side===Xt&&y.forceSinglePass===!1?(y.side=qt,y.needsUpdate=!0,Ns(y,F,V),y.side=Xn,y.needsUpdate=!0,Ns(y,F,V),y.side=Xt):Ns(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),T=fe.get(V),T.init(F),_.push(T),V.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==V&&y.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const k=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const he=ue[_e];_n(he,V,G),k.add(he)}else _n(ue,V,G),k.add(ue)}),T=_.pop(),k},this.compileAsync=function(y,F,V=null){const k=this.compile(y,F,V);return new Promise(G=>{function ue(){if(k.forEach(function(_e){E.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){G(y);return}setTimeout(ue,10)}qe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ur=null;function Ph(y){Ur&&Ur(y)}function tc(){ci.stop()}function nc(){ci.start()}const ci=new _h;ci.setAnimationLoop(Ph),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(y){Ur=y,re.setAnimationLoop(y),y===null?ci.stop():ci.start()},re.addEventListener("sessionstart",tc),re.addEventListener("sessionend",nc),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N!==null&&N.renderStart(y,F);const V=re.enabled===!0&&re.isPresenting===!0,k=A!==null&&(U===null||V)&&A.begin(I,U);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,F,U),T=fe.get(y,_.length),T.init(F),T.state.textureUnits=x.getTextureUnits(),_.push(T),nt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Re.setFromProjectionMatrix(nt,En,F.reversedDepth),Xe=this.localClippingEnabled,ft=ge.init(this.clippingPlanes,Xe),w=K.get(y,C.length),w.init(),C.push(w),re.enabled===!0&&re.isPresenting===!0){const _e=I.xr.getDepthSensingMesh();_e!==null&&Fr(_e,F,-1/0,I.sortObjects)}Fr(y,F,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort(j,de),pt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,pt&&te.addToRenderList(w,y),this.info.render.frame++,ft===!0&&ge.beginShadows();const G=T.state.shadowsArray;if(se.render(G,y,F),ft===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&A.hasRenderPass())===!1){const _e=w.opaque,he=w.transmissive;if(T.setupLights(),F.isArrayCamera){const ve=F.cameras;if(he.length>0)for(let be=0,Ne=ve.length;be<Ne;be++){const Be=ve[be];sc(_e,he,y,Be)}pt&&te.render(y);for(let be=0,Ne=ve.length;be<Ne;be++){const Be=ve[be];ic(w,y,Be,Be.viewport)}}else he.length>0&&sc(_e,he,y,F),pt&&te.render(y),ic(w,y,F)}U!==null&&X===0&&(x.updateMultisampleRenderTarget(U),x.updateRenderTargetMipmap(U)),k&&A.end(I),y.isScene===!0&&y.onAfterRender(I,y,F),ne.resetDefaultState(),z=-1,B=null,_.pop(),_.length>0?(T=_[_.length-1],x.setTextureUnits(T.state.textureUnits),ft===!0&&ge.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,N!==null&&N.renderEnd()};function Fr(y,F,V,k){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Re.intersectsSprite(y)){k&&Ve.setFromMatrixPosition(y.matrixWorld).applyMatrix4(nt);const _e=ee.update(y),he=y.material;he.visible&&w.push(y,_e,he,V,Ve.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Re.intersectsObject(y))){const _e=ee.update(y),he=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ve.copy(y.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ve.copy(_e.boundingSphere.center)),Ve.applyMatrix4(y.matrixWorld).applyMatrix4(nt)),Array.isArray(he)){const ve=_e.groups;for(let be=0,Ne=ve.length;be<Ne;be++){const Be=ve[be],Te=he[Be.materialIndex];Te&&Te.visible&&w.push(y,_e,Te,V,Ve.z,Be)}}else he.visible&&w.push(y,_e,he,V,Ve.z,null)}}const ue=y.children;for(let _e=0,he=ue.length;_e<he;_e++)Fr(ue[_e],F,V,k)}function ic(y,F,V,k){const{opaque:G,transmissive:ue,transparent:_e}=y;T.setupLightsView(V),ft===!0&&ge.setGlobalState(I.clippingPlanes,V),k&&oe.viewport(J.copy(k)),G.length>0&&Ds(G,F,V),ue.length>0&&Ds(ue,F,V),_e.length>0&&Ds(_e,F,V),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function sc(y,F,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Te=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new An(1,1,{generateMipmaps:!0,type:Te?qn:Zt,minFilter:Gn,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}const ue=T.state.transmissionRenderTarget[k.id],_e=k.viewport||J;ue.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);const he=I.getRenderTarget(),ve=I.getActiveCubeFace(),be=I.getActiveMipmapLevel();I.setRenderTarget(ue),I.getClearColor(xe),Ee=I.getClearAlpha(),Ee<1&&I.setClearColor(16777215,.5),I.clear(),pt&&te.render(V);const Ne=I.toneMapping;I.toneMapping=Tn;const Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),ft===!0&&ge.setGlobalState(I.clippingPlanes,k),Ds(y,V,k),x.updateMultisampleRenderTarget(ue),x.updateRenderTargetMipmap(ue),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let st=0,vt=F.length;st<vt;st++){const gt=F[st],{object:at,geometry:Ot,material:me,group:Kt}=gt;if(me.side===Xt&&at.layers.test(k.layers)){const je=me.side;me.side=qt,me.needsUpdate=!0,rc(at,V,k,Ot,me,Kt),me.side=je,me.needsUpdate=!0,Te=!0}}Te===!0&&(x.updateMultisampleRenderTarget(ue),x.updateRenderTargetMipmap(ue))}I.setRenderTarget(he,ve,be),I.setClearColor(xe,Ee),Be!==void 0&&(k.viewport=Be),I.toneMapping=Ne}function Ds(y,F,V){const k=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ue=y.length;G<ue;G++){const _e=y[G],{object:he,geometry:ve,group:be}=_e;let Ne=_e.material;Ne.allowOverride===!0&&k!==null&&(Ne=k),he.layers.test(V.layers)&&rc(he,F,V,ve,Ne,be)}}function rc(y,F,V,k,G,ue){y.onBeforeRender(I,F,V,k,G,ue),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(I,F,V,k,y,ue),G.transparent===!0&&G.side===Xt&&G.forceSinglePass===!1?(G.side=qt,G.needsUpdate=!0,I.renderBufferDirect(V,F,k,G,y,ue),G.side=Xn,G.needsUpdate=!0,I.renderBufferDirect(V,F,k,G,y,ue),G.side=Xt):I.renderBufferDirect(V,F,k,G,y,ue),y.onAfterRender(I,F,V,k,G,ue)}function Ns(y,F,V){F.isScene!==!0&&(F=Et);const k=E.get(y),G=T.state.lights,ue=T.state.shadowsArray,_e=G.state.version,he=ae.getParameters(y,G.state,ue,F,V,T.state.lightProbeGridArray),ve=ae.getProgramCacheKey(he);let be=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;const Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=O.get(y.envMap||k.environment,Ne),k.envMapRotation=k.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",xt),be=new Map,k.programs=be);let Be=be.get(ve);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===_e)return oc(y,he),Be}else he.uniforms=ae.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,V,he),y.onBeforeCompile(he,I),Be=ae.acquireProgram(he,ve),be.set(ve,Be),k.uniforms=he.uniforms;const Te=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ge.uniform),oc(y,he),k.needsLights=Uh(y),k.lightsStateVersion=_e,k.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Be,k.uniformsList=null,Be}function ac(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=xr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function oc(y,F){const V=E.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Lh(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let V=0,k=y.length;V<k;V++){const G=y[V];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Dh(y,F,V,k,G){F.isScene!==!0&&(F=Et),x.resetTextureUnits();const ue=F.fog,_e=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,he=U===null?I.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:He.workingColorSpace,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,be=O.get(k.envMap||_e,ve),Ne=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,vt=!!V.morphAttributes.color;let gt=Tn;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(gt=I.toneMapping);const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ot=at!==void 0?at.length:0,me=E.get(k),Kt=T.state.lights;if(ft===!0&&(Xe===!0||y!==B)){const ht=y===B&&k.id===z;ge.setState(k,y,ht)}let je=!1;k.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Kt.state.version||me.outputColorSpace!==he||G.isBatchedMesh&&me.batching===!1||!G.isBatchedMesh&&me.batching===!0||G.isBatchedMesh&&me.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&me.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&me.instancing===!1||!G.isInstancedMesh&&me.instancing===!0||G.isSkinnedMesh&&me.skinning===!1||!G.isSkinnedMesh&&me.skinning===!0||G.isInstancedMesh&&me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&me.instancingMorph===!1&&G.morphTexture!==null||me.envMap!==be||k.fog===!0&&me.fog!==ue||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==ge.numPlanes||me.numIntersection!==ge.numIntersection)||me.vertexAlphas!==Ne||me.vertexTangents!==Be||me.morphTargets!==Te||me.morphNormals!==st||me.morphColors!==vt||me.toneMapping!==gt||me.morphTargetsCount!==Ot||!!me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,me.__version=k.version);let en=me.currentProgram;je===!0&&(en=Ns(k,F,G),N&&k.isNodeMaterial&&N.onUpdateProgram(k,en,me));let xn=!1,Kn=!1,Mi=!1;const ot=en.getUniforms(),Mt=me.uniforms;if(oe.useProgram(en.program)&&(xn=!0,Kn=!0,Mi=!0),k.id!==z&&(z=k.id,Kn=!0),me.needsLights){const ht=Lh(T.state.lightProbeGridArray,G);me.lightProbeGrid!==ht&&(me.lightProbeGrid=ht,Kn=!0)}if(xn||B!==y){oe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",y.projectionMatrix),ot.setValue(D,"viewMatrix",y.matrixWorldInverse);const $n=ot.map.cameraPosition;$n!==void 0&&$n.setValue(D,ut.setFromMatrixPosition(y.matrixWorld)),lt.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),B!==y&&(B=y,Kn=!0,Mi=!0)}if(me.needsLights&&(Kt.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",Kt.state.directionalShadowMap,x),Kt.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",Kt.state.spotShadowMap,x),Kt.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",Kt.state.pointShadowMap,x)),G.isSkinnedMesh){ot.setOptional(D,G,"bindMatrix"),ot.setOptional(D,G,"bindMatrixInverse");const ht=G.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ot.setValue(D,"boneTexture",ht.boneTexture,x))}G.isBatchedMesh&&(ot.setOptional(D,G,"batchingTexture"),ot.setValue(D,"batchingTexture",G._matricesTexture,x),ot.setOptional(D,G,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",G._indirectTexture,x),ot.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",G._colorsTexture,x));const jn=V.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Ie.update(G,V,en),(Kn||me.receiveShadow!==G.receiveShadow)&&(me.receiveShadow=G.receiveShadow,ot.setValue(D,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(Mt.envMapIntensity.value=F.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=s_()),Kn){if(ot.setValue(D,"toneMappingExposure",I.toneMappingExposure),me.needsLights&&Nh(Mt,Mi),ue&&k.fog===!0&&W.refreshFogUniforms(Mt,ue),W.refreshMaterialUniforms(Mt,k,Ue,tt,T.state.transmissionRenderTarget[y.id]),me.needsLights&&me.lightProbeGrid){const ht=me.lightProbeGrid;Mt.probesSH.value=ht.texture,Mt.probesMin.value.copy(ht.boundingBox.min),Mt.probesMax.value.copy(ht.boundingBox.max),Mt.probesResolution.value.copy(ht.resolution)}xr.upload(D,ac(me),Mt,x)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xr.upload(D,ac(me),Mt,x),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(D,"center",G.center),ot.setValue(D,"modelViewMatrix",G.modelViewMatrix),ot.setValue(D,"normalMatrix",G.normalMatrix),ot.setValue(D,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const ht=k.uniformsGroups;for(let $n=0,yi=ht.length;$n<yi;$n++){const cc=ht[$n];q.update(cc,en),q.bind(cc,en)}}return en}function Nh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Uh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,F,V){const k=E.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),E.get(y.texture).__webglTexture=F,E.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const V=E.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const Fh=D.createFramebuffer();this.setRenderTarget=function(y,F=0,V=0){U=y,H=F,X=V;let k=null,G=!1,ue=!1;if(y){const he=E.get(y);if(he.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),J.copy(y.viewport),Q.copy(y.scissor),le=y.scissorTest,oe.viewport(J),oe.scissor(Q),oe.setScissorTest(le),z=-1;return}else if(he.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(he.__hasExternalTextures)x.rebindTextures(y,E.get(y.texture).__webglTexture,E.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ne=y.depthTexture;if(he.__boundDepthTexture!==Ne){if(Ne!==null&&E.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ue=!0);const be=E.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[F])?k=be[F][V]:k=be[F],G=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?k=E.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[V]:k=be,J.copy(y.viewport),Q.copy(y.scissor),le=y.scissorTest}else J.copy(ie).multiplyScalar(Ue).floor(),Q.copy(Ae).multiplyScalar(Ue).floor(),le=Pe;if(V!==0&&(k=Fh),oe.bindFramebuffer(D.FRAMEBUFFER,k)&&oe.drawBuffers(y,k),oe.viewport(J),oe.scissor(Q),oe.setScissorTest(le),G){const he=E.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,V)}else if(ue){const he=F;for(let ve=0;ve<y.textures.length;ve++){const be=E.get(y.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,be.__webglTexture,V,he)}}else if(y!==null&&V!==0){const he=E.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,V)}z=-1},this.readRenderTargetPixels=function(y,F,V,k,G,ue,_e,he=0){if(!(y&&y.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=E.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){oe.bindFramebuffer(D.FRAMEBUFFER,ve);try{const be=y.textures[he],Ne=be.format,Be=be.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!lt.textureFormatReadable(Ne)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Be)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-k&&V>=0&&V<=y.height-G&&D.readPixels(F,V,k,G,L.convert(Ne),L.convert(Be),ue)}finally{const be=U!==null?E.get(U).__webglFramebuffer:null;oe.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,k,G,ue,_e,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=E.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(F>=0&&F<=y.width-k&&V>=0&&V<=y.height-G){oe.bindFramebuffer(D.FRAMEBUFFER,ve);const be=y.textures[he],Ne=be.format,Be=be.type;if(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!lt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,V,k,G,L.convert(Ne),L.convert(Be),0);const st=U!==null?E.get(U).__webglFramebuffer:null;oe.bindFramebuffer(D.FRAMEBUFFER,st);const vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Eu(D,vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(Te),D.deleteSync(vt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,V=0){const k=Math.pow(2,-V),G=Math.floor(y.image.width*k),ue=Math.floor(y.image.height*k),_e=F!==null?F.x:0,he=F!==null?F.y:0;x.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,_e,he,G,ue),oe.unbindTexture()};const Oh=D.createFramebuffer(),Bh=D.createFramebuffer();this.copyTextureToTexture=function(y,F,V=null,k=null,G=0,ue=0){let _e,he,ve,be,Ne,Be,Te,st,vt;const gt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(V!==null)_e=V.max.x-V.min.x,he=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,Ne=V.min.y,Be=V.isBox3?V.min.z:0;else{const Mt=Math.pow(2,-G);_e=Math.floor(gt.width*Mt),he=Math.floor(gt.height*Mt),y.isDataArrayTexture?ve=gt.depth:y.isData3DTexture?ve=Math.floor(gt.depth*Mt):ve=1,be=0,Ne=0,Be=0}k!==null?(Te=k.x,st=k.y,vt=k.z):(Te=0,st=0,vt=0);const at=L.convert(F.format),Ot=L.convert(F.type);let me;F.isData3DTexture?(x.setTexture3D(F,0),me=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),me=D.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),me=D.TEXTURE_2D),oe.activeTexture(D.TEXTURE0),oe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),oe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),oe.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Kt=oe.getParameter(D.UNPACK_ROW_LENGTH),je=oe.getParameter(D.UNPACK_IMAGE_HEIGHT),en=oe.getParameter(D.UNPACK_SKIP_PIXELS),xn=oe.getParameter(D.UNPACK_SKIP_ROWS),Kn=oe.getParameter(D.UNPACK_SKIP_IMAGES);oe.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),oe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),oe.pixelStorei(D.UNPACK_SKIP_PIXELS,be),oe.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),oe.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Mi=y.isDataArrayTexture||y.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Mt=E.get(y),jn=E.get(F),ht=E.get(Mt.__renderTarget),$n=E.get(jn.__renderTarget);oe.bindFramebuffer(D.READ_FRAMEBUFFER,ht.__webglFramebuffer),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let yi=0;yi<ve;yi++)Mi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(y).__webglTexture,G,Be+yi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(F).__webglTexture,ue,vt+yi)),D.blitFramebuffer(be,Ne,_e,he,Te,st,_e,he,D.DEPTH_BUFFER_BIT,D.NEAREST);oe.bindFramebuffer(D.READ_FRAMEBUFFER,null),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||E.has(y)){const Mt=E.get(y),jn=E.get(F);oe.bindFramebuffer(D.READ_FRAMEBUFFER,Oh),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Bh);for(let ht=0;ht<ve;ht++)Mi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,G,Be+ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,G),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jn.__webglTexture,ue,vt+ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jn.__webglTexture,ue),G!==0?D.blitFramebuffer(be,Ne,_e,he,Te,st,_e,he,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(me,ue,Te,st,vt+ht,be,Ne,_e,he):D.copyTexSubImage2D(me,ue,Te,st,be,Ne,_e,he);oe.bindFramebuffer(D.READ_FRAMEBUFFER,null),oe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(me,ue,Te,st,vt,_e,he,ve,at,Ot,gt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(me,ue,Te,st,vt,_e,he,ve,at,gt.data):D.texSubImage3D(me,ue,Te,st,vt,_e,he,ve,at,Ot,gt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Te,st,_e,he,at,Ot,gt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Te,st,gt.width,gt.height,at,gt.data):D.texSubImage2D(D.TEXTURE_2D,ue,Te,st,_e,he,at,Ot,gt);oe.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),oe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je),oe.pixelStorei(D.UNPACK_SKIP_PIXELS,en),oe.pixelStorei(D.UNPACK_SKIP_ROWS,xn),oe.pixelStorei(D.UNPACK_SKIP_IMAGES,Kn),ue===0&&F.generateMipmaps&&D.generateMipmap(me),oe.unbindTexture()},this.initRenderTarget=function(y){E.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),oe.unbindTexture()},this.resetState=function(){H=0,X=0,U=null,oe.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}function El(r,e){if(e===du)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===lo||e===Zl){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===lo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Th(r){const e=new Map,t=new Map,n=r.clone();return Ah(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ah(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Ah(r.children[n],e.children[n],t)}class Nr extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new h_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new Tl(t,ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tl(t,ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new b_(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Es.extractUrlBase(e);a=Es.resolveURL(l,this.path)}else a=Es.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new fh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wh){try{a[ze.KHR_BINARY_GLTF]=new E_(e)}catch(u){i&&i(u);return}s=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new O_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new c_;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new T_(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new A_;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new w_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function a_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function St(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class o_{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ce(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Qt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new gh(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Hd(h),l.distance=u;break;case"spot":l=new zd(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),yn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class c_{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){const i=[];e.color=new Ce(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(i)}}class l_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class h_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(s,s)}return Promise.all(i)}}class u_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class d_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class f_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class p_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class m_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(s[0],s[1],s[2],Qt),Promise.all(i)}}class g_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class __{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(s[0],s[1],s[2],Qt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(i)}}class x_{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class v_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return St(this.parser,e,this.name)!==null?Ln:null}extendMaterialParams(e,t){const n=St(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class M_{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class y_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class S_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Tl{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class b_{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==nn.TRIANGLES&&l.mode!==nn.TRIANGLE_STRIP&&l.mode!==nn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const M=new Ge,m=new P,p=new cn,v=new P(1,1,1),b=new fd(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&v.fromBufferAttribute(c.SCALE,S),b.setMatrixAt(S,M.compose(m,p,v));for(const S in c)if(S==="_COLOR_0"){const w=c[S];b.instanceColor=new po(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);dt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const wh="glTF",_s=12,Al={JSON:1313821514,BIN:5130562};class E_{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-_s,s=new DataView(e,_s);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Al.JSON){const l=new Uint8Array(e,_s+a,o);this.content=n.decode(l)}else if(c===Al.BIN){const l=_s+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class T_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=vo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=vo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Xi[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const M=f.attributes[g],m=c[g];m!==void 0&&(M.normalized=m)}u(f)},o,l,Qt,d)})})}}class A_{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class w_{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Rh extends ns{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,M=g-l,m=-2*f+3*d,p=f-d,v=1-m,b=p-d+u;for(let S=0;S!==o;S++){const w=a[M+S+o],T=a[M+S+c]*h,C=a[g+S+o],_=a[g+S]*h;s[S]=v*w+b*T+m*C+p*_}return s}}const R_=new cn;class C_ extends Rh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return R_.fromArray(s).normalize().toArray(s),s}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wl={9728:wt,9729:Rt,9984:Wl,9985:fr,9986:vs,9987:Gn},Rl={33071:bn,33648:vr,10497:Ki},va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},I_={CUBICSPLINE:void 0,LINEAR:Rs,STEP:ws},Ma={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function P_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),r.DefaultMaterial}function fi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function L_(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function D_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function N_(r){let e;const t=r.extensions&&r.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ya(t.attributes):e=r.indices+":"+ya(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ya(r.targets[n]);return e}function ya(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Mo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function U_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const F_=new Ge;class O_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new a_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new ph(this.options.manager):this.textureLoader=new qd(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return fi(s,o,i),yn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Es.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=va[i.type],o=Xi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Wt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=va[i.type],l=Xi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let M,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(v);b||(M=new l(o,p*f,i.count*f/h),b=new ad(M,f/h),t.cache.add(v,b)),m=new ko(b,c,d%f/h,g)}else o===null?M=new l(i.count*c):M=new l(o,d,i.count*c),m=new Wt(M,c,g);if(i.sparse!==void 0){const p=va.SCALAR,v=Xi[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,w=new v(a[1],b,i.sparse.count*p),T=new l(a[2],S,i.sparse.count*c);o!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,_=w.length;C<_;C++){const A=w[C];if(m.setX(A,T[C*c]),c>=2&&m.setY(A,T[C*c+1]),c>=3&&m.setZ(A,T[C*c+2]),c>=4&&m.setW(A,T[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=wl[d.magFilter]||Rt,h.minFilter=wl[d.minFilter]||Gn,h.wrapS=Rl[d.wrapS]||Ki,h.wrapT=Rl[d.wrapT]||Ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wt&&h.minFilter!==Rt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(M){const m=new Ct(M);m.needsUpdate=!0,d(m)}),t.load(Es.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),yn(u,a),u.userData.mimeType=a.mimeType||U_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ah,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new rh,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return rt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[ze.KHR_MATERIALS_UNLIT]){const u=i[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Xt);const h=s.alphaMode||Ma.OPAQUE;if(h===Ma.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ma.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Nt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ke(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Nt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Nt){const u=s.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],Qt)}return s.emissiveTexture!==void 0&&a!==Nt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),yn(u,s),t.associations.set(u,{materials:e}),s.extensions&&fi(i,u,s),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Cl(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=N_(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Cl(new Ut,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?P_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const M=h[f],m=a[f];let p;const v=l[f];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new hd(M,v):new Se(M,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?p.geometry=El(p.geometry,Zl):m.mode===nn.TRIANGLE_FAN&&(p.geometry=El(p.geometry,lo));else if(m.mode===nn.LINES)p=new _d(M,v);else if(m.mode===nn.LINE_STRIP)p=new Ho(M,v);else if(m.mode===nn.LINE_LOOP)p=new xd(M,v);else if(m.mode===nn.POINTS)p=new vd(M,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&D_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),yn(p,s),m.extensions&&fi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&fi(i,u[0],s),u[0];const d=new _t;s.extensions&&fi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Vu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Pr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Ge;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zo(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],M=f.target,m=M.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;M.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],M=u[3],m=u[4],p=[];for(let b=0,S=d.length;b<S;b++){const w=d[b],T=f[b],C=g[b],_=M[b],A=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const I=n._createAnimationTracks(w,T,C,_,A);if(I)for(let R=0;R<I.length;R++)p.push(I[R])}const v=new go(s,void 0,p);return yn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,F_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new sh:l.length>1?h=new _t:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),yn(h,s),s.extensions&&fi(n,h,s),s.matrix!==void 0){const u=new Ge;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new _t;n.name&&(s.name=i.createUniqueName(n.name)),yn(s,n),n.extensions&&fi(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){const d=c[h];d.parent!==null?s.add(Th(d)):s.add(d)}const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof Ct)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ii[s.path]===ii.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(ii[s.path]){case ii.weights:h=Ji;break;case ii.rotation:h=Qi;break;case ii.translation:case ii.scale:h=es;break;default:switch(n.itemSize){case 1:h=Ji;break;case 2:case 3:default:h=es;break}break}const u=i.interpolation!==void 0?I_[i.interpolation]:Rs,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const M=new h(c[f]+"."+ii[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Mo(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Qi?C_:Rh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function B_(r,e,t){const n=e.attributes,i=new Gt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const h=Mo(Xi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,c=new P;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const M=Mo(Xi[d.componentType]);c.multiplyScalar(M)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Pn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Cl(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=vo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return He.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),yn(r,e),B_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?L_(r,e.targets,t):r})}function k_(r,e,t){const n=new Nr,i="/convergence-runner-lab/convergence/assets/kenney/road-side.glb";n.load(i,s=>{const a=s.scene,c=new Gt().setFromObject(a).getSize(new P),l=Math.max(c.x,c.y,c.z);if(!Number.isFinite(l)||l===0){console.warn("Kenney road-side GLB empty");return}const h=1.4/l;for(let u=18;u<e;u+=35)for(const d of[-1,1]){const f=a.clone(!0);f.scale.setScalar(h),f.position.set(d*6.3,.3,-u),f.rotation.y=d>0?0:Math.PI,f.userData.dynamic=!0,r.add(f),t.push(f)}console.info("Kenney GLB roadside props integrated",i)},void 0,s=>console.warn("Optional Kenney GLB unavailable:",(s==null?void 0:s.message)||s))}const G_=new Nr;let lr;function z_(){return lr||(lr=new Promise((r,e)=>{G_.load("/convergence-runner-lab/convergence/assets/tge-kenney/car-kit/van.glb",t=>r(t.scene),void 0,e)}).catch(r=>{throw lr=null,r})),lr}function V_(r,e){z_().then(t=>{if(!r.parent||!e.parent)return;const n=t.clone(!0),s=new Gt().setFromObject(n).getSize(new P);if(s.y<=0||!Number.isFinite(s.y))return;n.scale.setScalar(1.65/s.y),n.updateMatrixWorld(!0);const a=new Gt().setFromObject(n),o=a.getCenter(new P);n.position.set(-o.x,-a.min.y,-o.z);const c=new _t;c.position.copy(e.position),c.rotation.copy(e.rotation),c.add(n),c.userData.dynamic=!0,r.add(c),e.visible=!1,console.info("Kenney boss van replacement active")}).catch(t=>console.warn("Kenney boss van fallback retained",t==null?void 0:t.message))}const H_=[["car-kit/police.glb",-8.5,0,38,3.4],["car-kit/van.glb",8.7,0,67,3.8],["car-kit/ambulance.glb",-8.5,0,105,3.5],["car-kit/firetruck.glb",8.7,0,145,4.2],["city-kit-roads/construction-barrier.glb",-5.95,0,24,1.7],["city-kit-roads/traffic-light.glb",6.4,0,52,4],["city-kit-roads/light-curved.glb",-6.5,0,85,4.5],["city-kit-commercial/building-a.glb",-19,0,65,13],["city-kit-commercial/building-b.glb",19,0,112,13],["blocky-characters/character-a.glb",-6.2,0,45,1.75],["blocky-characters/character-b.glb",6.2,0,95,1.75],["blocky-characters/character-c.glb",-6.2,0,132,1.75]],W_=new Nr,Sa=new Map;function X_(r){return Sa.has(r)||Sa.set(r,new Promise((e,t)=>{W_.load("/convergence-runner-lab/convergence/assets/tge-kenney/"+r,n=>e(n.scene),void 0,t)})),Sa.get(r)}function q_(r,e,t){const n={active:!0};t.push({userData:{assetBatch:n}});for(const[i,s,a,o,c]of H_)o>=e-10||X_(i).then(l=>{if(!n.active)return;const h=l.clone(!0),d=new Gt().setFromObject(h).getSize(new P);if(!Number.isFinite(d.y)||d.y<=0)return;h.scale.setScalar(c/d.y),h.updateMatrixWorld(!0);const f=new Gt().setFromObject(h);h.position.set(s-f.getCenter(new P).x,a-f.min.y,-o-f.getCenter(new P).z),h.userData.dynamic=!0,h.traverse(g=>{g.isMesh&&(g.castShadow=!1,g.receiveShadow=!0)}),r.add(h),t.push(h),console.info("Kenney asset displayed",i)}).catch(l=>console.warn("Kenney optional asset failed",i,l==null?void 0:l.message))}function Y_(r){var e;for(const t of r)(e=t.userData)!=null&&e.assetBatch&&(t.userData.assetBatch.active=!1)}const yo=["gilets","genz","lyceens","pompiers","infirmieres","agriculteurs"],K_=(r,e=0)=>new rt({color:r,roughness:e?.34:.85,metalness:e}),dn=(r,e,t,n,i)=>{const s=new Se(e,K_(t));return n&&s.position.set(...n),i&&s.rotation.set(...i),s.castShadow=!0,r.add(s),s},Ye=(r,e,t,n,i,s)=>dn(r,new yt(t,n,i),e,s),Bi=(r,e,t,n,i,s,a=8)=>dn(r,new At(t,n,i,a),e,s),ba=(r,e,t,n)=>dn(r,new Ft(t,10,8),e,n);function j_(r=0){return Ch(yo[r%yo.length],r)}function Il(r="crs",e=0){return Ch(r,e)}function Ch(r,e){const t=new _t,n=yo.includes(r),i=[5860226,8077659,3300974,6116427,5397879,7098937];let s=n?i[e%i.length]:r==="crs"?2107961:r==="bravm"?2634561:4604744,a=n?3423820:2107956;const o=[14465435,12028018,14728354,10449246][e%4];if(dn(t,new rn(.145,.47,4,6),s,[0,.72,0]),ba(t,o,.18,[0,1.25,0]),dn(t,new rn(.07,.25,4,6),a,[-.105,.25,0]),dn(t,new rn(.07,.25,4,6),a,[.105,.25,0]),dn(t,new rn(.057,.24,4,6),s,[-.25,.76,0],[0,0,.3]),dn(t,new rn(.057,.24,4,6),s,[.25,.76,0],[0,0,-.3]),r==="gilets"){Ye(t,15648046,.4,.48,.28,[0,.81,0]),Ye(t,16774572,.42,.045,.3,[0,.75,-.005]),Ye(t,16774572,.42,.045,.3,[0,.93,-.005]),Ye(t,7632764,.13,.14,.17,[0,1.46,0]),Ye(t,2634557,.31,.39,.17,[0,.81,.23]);for(const h of[-1,1])Ye(t,1712683,.065,.45,.065,[h*.155,.85,-.17]),Ye(t,15263686,.075,.39,.022,[h*.12,.82,-.159]);Ye(t,2895925,.32,.08,.2,[0,.63,.25]);const c=Bi(t,7754548,.018,.018,1.03,[.43,1.24,-.05],7);c.rotation.z=-.22;const l=new _t;l.position.set(.52,1.74,-.05);for(let h=0;h<3;h++)Ye(l,[1789882,16053750,14230327][h],.16,.35,.025,[.08+h*.16,0,0]);t.add(l)}else if(r==="genz"||r==="lyceens")Ye(t,r==="genz"?8932522:4685470,.34,.15,.32,[0,1.02,0]),Ye(t,2830655,.21,.3,.19,[.14,.61,.18]),ba(t,e%2?5254187:5127991,.19,[0,1.39,0]);else if(r==="pompiers")Ye(t,14260771,.39,.51,.29,[0,.79,0]),Ye(t,15198394,.43,.07,.32,[0,.76,.01]),Bi(t,13280830,.22,.2,.2,[0,1.48,0]),Ye(t,14540239,.39,.05,.32,[0,1.55,0]);else if(r==="infirmieres")Ye(t,15462891,.4,.49,.29,[0,.8,0]),Ye(t,6464418,.19,.07,.31,[0,.85,-.01]),Ye(t,12664137,.05,.2,.32,[0,.84,-.025]),Ye(t,15462891,.2,.08,.2,[0,1.43,0]);else if(r==="agriculteurs")Ye(t,6522444,.38,.46,.3,[0,.8,0]),Bi(t,11897932,.26,.25,.06,[0,1.48,0]),Bi(t,11040835,.16,.17,.17,[0,1.55,0]);else if(Ye(t,r==="bac"?4014921:1911613,.4,.47,.27,[0,.82,0]),Ye(t,8754342,.3,.06,.29,[0,.95,-.01]),r==="crs"){Bi(t,2437958,.21,.2,.16,[0,1.45,0]),Ye(t,7967400,.38,.11,.04,[0,1.27,-.18]);const l=dn(t,new yt(.43,.69,.055),9613763,[.36,.65,-.19],[0,0,-.12]);l.material.transparent=!0,l.material.opacity=.82,Ye(t,3359575,.21,.09,.06,[.4,.89,-.24])}else r==="bravm"?(Bi(t,1055527,.23,.22,.21,[0,1.44,0]),Ye(t,7440538,.34,.07,.07,[0,1.31,-.19])):(Ye(t,4418947,.14,.14,.15,[-.22,.89,0]),ba(t,e%2?2960696:3947064,.2,[0,1.39,0]));if(r==="bravm"){const c=new _t;t.add(c);for(const l of[-.34,.37]){const h=dn(c,new Ir(.19,.073,7,10),1448996,[l,.2,.05],[0,Math.PI/2,0]);h.castShadow=!1}Ye(c,4873588,.7,.17,.25,[0,.35,0]),Ye(c,2766408,.31,.17,.33,[-.09,.48,0]),Ye(c,10602188,.11,.15,.08,[.49,.47,-.02]),Ye(c,4546676,.1,.16,.42,[.26,.51,0])}return t.userData.faction=r,t}function $_(){const r=new _t;Ye(r,15791091,2.55,1.3,1.22,[0,.92,0]),Ye(r,12177631,.85,.48,1.24,[.82,1.26,-.01]),Ye(r,2636886,2.53,.15,1.26,[0,.79,0]),Ye(r,3232890,1.8,.3,1.27,[-.24,1.19,0]);for(const e of[-.78,.83])for(const t of[-.52,.52]){const n=dn(r,new At(.27,.27,.14,10),1515824,[e,.36,t],[Math.PI/2,0,0]);n.castShadow=!1}return Ye(r,3569372,.26,.13,.25,[.03,1.71,-.28]),Ye(r,14500955,.26,.13,.25,[.03,1.71,.28]),r.userData.faction="fourgon",r}class Z_{constructor(e,t){this.scene=e,this.game=t,this.gates=[],this.obstacles=[],this.enemies=[],this.boss=null,this.meshes=[]}clear(){Y_(this.meshes),this.gates=[],this.obstacles=[],this.enemies=[],this.boss=null,this.meshes.forEach(e=>{this.scene.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose())}),this.meshes=[]}generate(e,t){this.createTrack(t),this.createGates(e,t),this.createObstacles(e,t),this.createEnemies(e,t),this.createBoss(e,t),this.createDecorations(t),k_(this.scene,t,this.meshes),q_(this.scene,t,this.meshes)}createTrack(e){const t=(s,a,o,c,l,h=!1)=>{const u=new Se(s,new rt({color:a,roughness:.87}));return u.position.set(o,c,l),u.userData.dynamic=!0,u.receiveShadow=!0,u.castShadow=h,this.scene.add(u),this.meshes.push(u),u},n=t(new sn(11,e+24),6844795,0,.025,-e/2);n.rotation.x=-Math.PI/2;const i=t(new sn(220,e+70),4351876,0,-1.65,-e/2);i.rotation.x=-Math.PI/2;for(let s of[-1,1]){t(new yt(.7,.36,e+18),10398640,s*5.55,.18,-e/2),t(new yt(.14,.12,e+18),9849675,s*5.65,1.24,-e/2),t(new yt(.1,.1,e+18),11692886,s*5.65,.77,-e/2);for(let a=0;a<e+6;a+=5)t(new yt(.11,1.3,.1),9126473,s*5.65,.7,-a)}for(let s=0;s<e+6;s+=8){const a=t(new sn(.13,3),15198692,0,.055,-s);a.rotation.x=-Math.PI/2}for(let s=0;s<e+35;s+=17)for(const a of[-1,1]){const o=4+Math.floor(s/17)%4*1.8;t(new yt(7.5,o,9),[14731168,14201505,13153702,14141103][Math.floor(s/17)%4],a*(16+Math.abs(s%3)),o/2-1.5,-s),t(new yt(7.8,.45,9.3),10312007,a*(16+Math.abs(s%3)),o-1.5,-s);for(let c=1;c<o/2;c++)for(let l of[-2.6,1.8])t(new yt(.1,.9,.85),4544620,a*(16+Math.abs(s%3))-a*3.82,c*1.55-1.2,-s+l)}}createGates(e,t){const n=8+e*2,i=(t-30)/n;for(let s=0;s<n;s++){const a=20+s*i,o=this.generateGatePair(e),c={z:a,passed:!1,leftGate:o.left,rightGate:o.right,leftMesh:null,rightMesh:null};c.leftMesh=this.createGateMesh(o.left,-2.5,a),c.rightMesh=this.createGateMesh(o.right,2.5,a);const l=new yt(.2,4,.3),h=new rt({color:3355443}),u=new Se(l,h);u.position.set(0,2,-a),u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u),this.gates.push(c)}}generateGatePair(e){const t=["+","*","-"],n=t[Math.floor(Math.random()*2)];let i=t[Math.floor(Math.random()*3)];i===n&&(i=t[(t.indexOf(i)+1)%t.length]);const s=a=>{switch(a){case"+":return Math.floor(Math.random()*(5+e*2))+3;case"*":return Math.floor(Math.random()*2)+2;case"-":return Math.floor(Math.random()*(3+e))+2;default:return 2}};return{left:{op:n,value:s(n)},right:{op:i,value:s(i)}}}createGateMesh(e,t,n){const i=e.op==="+"||e.op==="*",s=i?3972837:14113638,a=new rt({color:s,transparent:!0,opacity:.3,depthWrite:!1,emissive:s,emissiveIntensity:.08,side:Xt}),o=new Se(new sn(4.48,3.35),a);o.position.set(t,2,-n),o.userData.dynamic=!0,this.scene.add(o),this.meshes.push(o);const c=new rt({color:i?7916287:16555675,emissive:i?2064829:9320518,emissiveIntensity:.28});for(const g of[-1,1]){const M=new Se(new yt(.15,3.8,.22),c);M.position.set(t+g*2.23,2,-n),M.userData.dynamic=!0,this.scene.add(M),this.meshes.push(M)}const l=new Se(new yt(4.55,.16,.22),c);l.position.set(t,3.93,-n),l.userData.dynamic=!0,this.scene.add(l),this.meshes.push(l);const h=document.createElement("canvas");h.width=256,h.height=128;const u=h.getContext("2d");u.font="900 76px system-ui",u.textAlign="center",u.textBaseline="middle",u.lineWidth=8,u.strokeStyle="#18283d";const d=e.op==="*"?"×"+e.value:e.op+e.value;u.strokeText(d,128,62),u.fillStyle="#ffffff",u.fillText(d,128,62);const f=new Se(new sn(3.2,1.6),new Nt({map:new Ms(h),transparent:!0,depthWrite:!1}));return f.position.set(t,2.4,-n-.04),f.userData.dynamic=!0,this.scene.add(f),this.meshes.push(f),o}createObstacles(e,t){const n=3+e,i=this.gates.map(s=>s.z);for(let s=0;s<n;s++){let a,o=0;do a=30+Math.random()*(t-60),o++;while(i.some(u=>Math.abs(u-a)<8)&&o<50);if(o>=50)continue;const c=Math.random();let l,h;c<.5?(l=(Math.random()-.5)*5,h=3,this.createSawObstacle(l,a)):(l=(Math.random()-.5)*4,h=2+Math.random()*3,this.createWallObstacle(l,a,h)),this.obstacles.push({x:l,z:a,width:h,passed:!1})}}createSawObstacle(e,t){const n=new _t,i=(s,a,o,c,l,h,u)=>{const d=new Se(new yt(s,a,o),new rt({color:c}));d.position.set(l,h,u),n.add(d)};i(1.35,1.14,1,4345431,0,.55,0),i(1.55,.14,1.2,2438209,0,1.17,0);for(let s=0;s<3;s++){const a=new Se(new Vi(.2,.58,5),new Nt({color:s%2?16761174:15557941}));a.position.set((s-1)*.36,1.47+s%2*.14,0),n.add(a)}n.position.set(e,0,-t),n.userData.dynamic=!0,this.scene.add(n),this.meshes.push(n)}createWallObstacle(e,t,n){const i=new _t,s=new Se(new yt(n,1.2,.38),new rt({color:10267575,roughness:.82}));s.position.y=.75,s.castShadow=!0,i.add(s);for(let a=0;a<Math.floor(n/.6);a++){const o=new Se(new yt(.3,.2,.42),new rt({color:a%2?15856099:13260113}));o.position.set(-n/2+a*.62+.3,1.15,0),i.add(o)}i.position.set(e,0,-t),i.userData.dynamic=!0,this.scene.add(i),this.meshes.push(i)}createEnemies(e,t){const n=3+Math.floor((e-1)*.45),i=(t-90)/Math.max(1,n-1);for(let s=0;s<n;s++){const a=48+s*i,o=Math.floor(5+e*3+Math.random()*e*5),c={kind:["crs","bravm","bac"][(s+e-1)%3],z:a,count:o,defeated:!1,meshes:[]};this.createEnemyCrowd(c,a,o),this.enemies.push(c)}}createEnemyCrowd(e,t,n){const i=Math.min(n,30),s=new _t;s.userData.dynamic=!0;for(let d=0;d<i;d++){const f=d/i*Math.PI*2+Math.random()*.5,g=Math.sqrt(d/i)*2.5,M=Il(e.kind,d);M.position.set(Math.cos(f)*g,0,Math.sin(f)*g*.5),s.add(M)}s.position.set(0,0,-t),this.scene.add(s),this.meshes.push(s),e.meshGroup=s;const a=document.createElement("canvas");a.width=128,a.height=64;const o=a.getContext("2d");o.fillStyle="#f3f6ff",o.font="bold 26px system-ui",o.textAlign="center",o.textBaseline="middle",o.fillText(e.kind==="bravm"?"BRAV-M":e.kind==="bac"?"BAC":"CRS",64,19),o.font="bold 37px system-ui",o.fillText(n.toString(),64,49);const c=new Ms(a),l=new sn(2.4,1.2),h=new Nt({map:c,transparent:!0,depthWrite:!1}),u=new Se(l,h);u.position.set(0,4,-t),u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u),e.labelMesh=u}updateEnemyLabel(e){if(!e.labelMesh)return;const t=document.createElement("canvas");t.width=128,t.height=64;const n=t.getContext("2d");if(n.fillStyle="#f3f6ff",n.font="bold 26px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(e.kind==="bravm"?"BRAV-M":e.kind==="bac"?"BAC":"CRS",64,19),n.font="bold 37px system-ui",n.fillText(Math.max(0,e.remainingCount).toString(),64,49),e.labelMesh.material.map&&e.labelMesh.material.map.dispose(),e.labelMesh.material.map=new Ms(t),e.labelMesh.material.needsUpdate=!0,e.meshGroup&&e.meshGroup.children.length>0){const i=e.meshGroup.children[e.meshGroup.children.length-1];e.meshGroup.remove(i)}}createBoss(e,t){const n=Math.floor(20+e*15);this.boss={z:t,health:n,defeated:!1};const i=new _t;i.userData.dynamic=!0;for(let l=0;l<7;l++){const h=Il(l%5===0?"bac":"crs",l);h.position.set((l-3)*.68,0,l%2*.6),i.add(h)}const s=$_();s.scale.set(.85,.85,.85),s.position.set(0,0,-4.3),i.add(s),V_(i,s),i.position.set(0,0,-t),this.scene.add(i),this.meshes.push(i),this.boss.meshGroup=i,this.boss.defeatTime=0,this.boss.isDefeating=!1;const a=document.createElement("canvas");a.width=512,a.height=128;const o=a.getContext("2d");o.fillStyle="#f3e8d8",o.font="bold 49px system-ui",o.textAlign="center",o.textBaseline="middle",o.strokeStyle="#152334",o.lineWidth=9,o.strokeText("FRONT CRS : "+n,256,64),o.fillText("FRONT CRS : "+n,256,64);const c=new Se(new sn(7,1.6),new Nt({map:new Ms(a),transparent:!0,depthWrite:!1}));c.position.set(0,3.4,-t),c.userData.dynamic=!0,this.scene.add(c),this.meshes.push(c)}shakeBoss(){if(!this.boss||!this.boss.meshGroup)return;const e=this.boss.meshGroup,t=(Math.random()-.5)*.4,n=(Math.random()-.5)*.2;e.position.x=t,e.position.z+=n,e.traverse(i=>{i.material&&i.material.emissive&&(i.material.emissive=new Ce(16711680),i.material.emissiveIntensity=.6)}),setTimeout(()=>{e&&(e.position.x=0,e.traverse(i=>{i.material&&i.material.emissiveIntensity&&(i.material.emissiveIntensity=0)}))},80)}playBossDefeatAnimation(){!this.boss||!this.boss.meshGroup||(this.boss.isDefeating=!0,this.boss.defeatTime=0)}updateBossDefeat(e){if(!this.boss||!this.boss.isDefeating||!this.boss.meshGroup)return;this.boss.defeatTime+=e;const t=this.boss.defeatTime,n=this.boss.meshGroup;if(t<.5)n.position.x=(Math.random()-.5)*t*4,n.rotation.z=(Math.random()-.5)*t*.5,n.traverse(i=>{i.material&&i.material.color&&(i.material.emissive=new Ce(16711680),i.material.emissiveIntensity=Math.sin(t*40)*.5+.5)});else if(t<1.2){const i=(t-.5)/.7;n.position.y=-i*3,n.rotation.x=i*.8,n.rotation.z=i*.5;const s=1-i*.8;n.scale.set(s,s*(1-i*.3),s),n.traverse(a=>{a.material&&(a.material.transparent=!0,a.material.opacity=1-i)}),n.children.forEach((a,o)=>{a.position.x+=(Math.random()-.5)*e*8,a.position.y+=(Math.random()-.5)*e*5,a.rotation.x+=e*(o+1)*3})}else this.scene.remove(n),this.boss.isDefeating=!1}createDecorations(e){for(let t=12;t<e;t+=26)for(const n of[-1,1]){const i=new Se(new At(.07,.09,5,7),new rt({color:6582392,metalness:.35}));i.position.set(n*6.1,2.5,-t),i.userData.dynamic=!0,this.scene.add(i),this.meshes.push(i);const s=new Se(new Ft(.23,8,6),new Nt({color:16770988}));s.position.set(n*6.1,4.9,-t),s.userData.dynamic=!0,this.scene.add(s),this.meshes.push(s)}}createTree(e,t){const n=Math.random();if(n<.4){const i=new At(.15,.25,2.5,6),s=new rt({color:6111287}),a=new Se(i,s);a.position.set(e,1.25,t),a.castShadow=!0,a.userData.dynamic=!0,this.scene.add(a),this.meshes.push(a);const o=[1793568,3046706,3706428];for(let c=0;c<3;c++){const l=new Vi(1.2-c*.25,1.8-c*.3,8),h=new rt({color:o[c]}),u=new Se(l,h);u.position.set(e,2.5+c*1,t),u.castShadow=!0,u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u)}}else if(n<.7){const i=new At(.2,.35,2.5,6),s=new rt({color:7162945}),a=new Se(i,s);a.position.set(e,1.25,t),a.castShadow=!0,a.userData.dynamic=!0,this.scene.add(a),this.meshes.push(a);const o=new Ft(1.5+Math.random()*.5,8,8),c=new rt({color:4431943}),l=new Se(o,c);l.position.set(e,3.2,t),l.castShadow=!0,l.userData.dynamic=!0,this.scene.add(l),this.meshes.push(l)}else{const i=new At(.15,.3,2,6),s=new rt({color:5125166}),a=new Se(i,s);a.position.set(e,1,t),a.castShadow=!0,a.userData.dynamic=!0,this.scene.add(a),this.meshes.push(a);const o=new Ft(1.3,8,8),c=new rt({color:16027569}),l=new Se(o,c);l.position.set(e,2.8,t),l.castShadow=!0,l.userData.dynamic=!0,this.scene.add(l),this.meshes.push(l)}}createFlower(e,t){const n=[16732754,16766784,14696699,4244735,16739904,6942894],i=n[Math.floor(Math.random()*n.length)],s=new At(.02,.02,.4,4),a=new rt({color:5025616}),o=new Se(s,a);o.position.set(e,.2,t),o.userData.dynamic=!0,this.scene.add(o),this.meshes.push(o);const c=new Ft(.12+Math.random()*.08,6,6),l=new rt({color:i,emissive:i,emissiveIntensity:.2}),h=new Se(c,l);h.position.set(e,.45,t),h.userData.dynamic=!0,this.scene.add(h),this.meshes.push(h)}createRock(e,t){const n=.5+Math.random()*1,i=new Xo(n,0),s=new rt({color:7697781,roughness:.9,flatShading:!0}),a=new Se(i,s);a.position.set(e,n*.4,t),a.rotation.set(Math.random(),Math.random(),Math.random()),a.castShadow=!0,a.userData.dynamic=!0,this.scene.add(a),this.meshes.push(a)}createBush(e,t){const n=new _t,i=new rt({color:5606191});for(let s=0;s<3;s++){const a=.4+Math.random()*.3,o=new Ft(a,6,6),c=new Se(o,i);c.position.set((Math.random()-.5)*.6,a*.7,(Math.random()-.5)*.6),n.add(c)}n.position.set(e,0,t),n.userData.dynamic=!0,this.scene.add(n),this.meshes.push(n)}createMountains(e){const t=[6056896,7964363,3754411];for(let n=0;n<12;n++){const s=(n%2===0?1:-1)*(40+Math.random()*30),a=-(Math.random()*e),o=15+Math.random()*20,c=8+Math.random()*10,l=new Vi(c,o,6),h=new rt({color:t[Math.floor(Math.random()*t.length)],flatShading:!0}),u=new Se(l,h);if(u.position.set(s,o*.3,a),u.userData.dynamic=!0,this.scene.add(u),this.meshes.push(u),o>20){const d=new Vi(c*.3,o*.2,6),f=new rt({color:16777215}),g=new Se(d,f);g.position.set(s,o*.7,a),g.userData.dynamic=!0,this.scene.add(g),this.meshes.push(g)}}}createClouds(e){for(let t=0;t<20;t++){const n=new _t,i=new rt({color:16777215,transparent:!0,opacity:.85}),s=3+Math.floor(Math.random()*4);for(let a=0;a<s;a++){const o=new Ft(1.5+Math.random()*2,8,8),c=new Se(o,i);c.position.set(a*2.2+Math.random()*.5,Math.random()*.8,Math.random()*1),c.scale.y=.6,n.add(c)}n.position.set((Math.random()-.5)*80,20+Math.random()*15,-(Math.random()*e)),n.userData.dynamic=!0,this.scene.add(n),this.meshes.push(n)}}createStickman(e){const t=new _t,n=new rn(.15,.5,4,4),i=new rt({color:e}),s=new Se(n,i);s.position.y=.7,t.add(s);const a=new Ft(.2,8,8),o=new Se(a,i);o.position.y=1.2,t.add(o);const c=new rn(.07,.3,4,4),l=new Se(c,i);l.position.set(-.1,.2,0),t.add(l);const h=new Se(c,i);return h.position.set(.1,.2,0),t.add(h),t}}const Pl=["gilets","genz","lyceens","pompiers","infirmieres","agriculteurs"],Ll=new Map,J_=new ph,In=(r,e=0)=>new rt({color:r,roughness:e?.55:.87,metalness:e,side:Xt}),Q_=In(15979826),So=In(15264988,.28),Ih=In(2569024),ki=In(14101554),bo=In(15855848),Ps=In(10384971),ex=In(7030425);function Jt(r,e,t,n=[0,0,0],i){const s=new Se(e,t);return s.position.set(...n),i&&s.rotation.set(...i),s.castShadow=!0,r.add(s),s}function Vn(r,e,t,n,i){return Jt(r,new yt(...t),e,n,i)}function Eo(r,e,t,n,i=.022){return Jt(r,new Ir(t,i,5,18),e,[0,n,0],[Math.PI/2,0,0])}function ts(r,e,t,n=0){const i=r.getObjectByName(e),s=new _t;return r.add(s),r.updateMatrixWorld(!0),s.position.copy(r.worldToLocal(new P(0,t,n))),r.updateMatrixWorld(!0),i!=null&&i.isBone&&i.attach(s),s}function tx(r,e){let t=Ll.get(e);t||(t=J_.load("/convergence-runner-lab/convergence/assets/quaternius/palette-"+e+".png"),t.colorSpace=Dt,t.flipY=!1,Ll.set(e,t)),r.traverse(n=>{n.isSkinnedMesh&&(n.material=n.material.clone(),n.material.map=t,n.material.needsUpdate=!0,n.userData.sharedHumanoidAsset=!0)})}function hr(r,e=Ih){Vn(r,e,[.31,.39,.15],[0,-.015,.2]),Vn(r,e,[.35,.1,.18],[0,-.22,.22]);for(const t of[-.16,.16])Vn(r,e,[.055,.4,.055],[t,0,-.16])}function nx(r,e,t=!1){const n=ts(r,"Head",1.57,.005),i=Jt(n,new Ft(.208,18,12,0,Math.PI*2,0,Math.PI*.6),e,[0,.045,0]);i.material.side=Xt,Jt(n,new At(.204,.213,.035,18),e,[0,-.018,0]),t&&Vn(n,So,[.34,.05,.035],[0,.08,-.186])}function ix(r){const e=ts(r,"Head",1.61,0);Jt(e,new At(.31,.31,.042,20),Ps),Jt(e,new At(.17,.19,.19,16),Ps,[0,.1,0]),Eo(e,Ih,.18,.01,.013)}function sx(r){const e=ts(r,"RightHand",1.02,-.2),t=Jt(e,new At(.014,.014,.86,8),Ps,[.06,.4,0]);t.rotation.z=-.12,Vn(e,Ps,[.42,.29,.035],[.12,.85,0])}function rx(r){const e=ts(r,"RightHand",1.07,-.17);Jt(e,new At(.012,.012,1.09,7),Ps,[0,.48,0]);const t=[In(1524910),bo,ki];for(let n=0;n<3;n++){const i=new sn(.15,.36,3,3),s=i.attributes.position;for(let a=0;a<s.count;a++)s.setZ(a,Math.sin(s.getX(a)*15+n*.85)*.022);i.computeVertexNormals(),Jt(e,i,t[n],[.08+n*.15,.88,0])}}function ax(r,e){tx(r,e);const t=ts(r,"Spine2",1.05,0);if(e==="gilets"){Jt(t,new At(.21,.245,.43,14),Q_);for(const n of[-.12,.1])Eo(t,So,.236,n,.026);hr(t),rx(r)}else if(e==="genz")Jt(t,new At(.205,.225,.41,14),ex),hr(t);else if(e==="lyceens")hr(t,In(10184511)),sx(r);else if(e==="pompiers"){Jt(t,new At(.23,.24,.45,14),ki);for(const n of[-.13,.11])Eo(t,So,.238,n,.028);nx(r,ki,!0)}else if(e==="infirmieres"){Jt(t,new At(.218,.225,.46,14),bo),Vn(t,ki,[.066,.23,.025],[0,0,-.226]),Vn(t,ki,[.22,.07,.025],[0,0,-.228]);const n=ts(r,"Head",1.64,0);Vn(n,bo,[.25,.12,.14],[0,.04,0]),Vn(n,ki,[.047,.09,.015],[0,.055,-.078])}else e==="agriculteurs"&&(ix(r),hr(t,In(6967346)))}const ox=new Nr;let ur;function cx(){return ur||(ur=new Promise((r,e)=>ox.load("/convergence-runner-lab/convergence/assets/quaternius/animated-human.glb",r,void 0,e)).catch(r=>{throw ur=null,r})),ur}function Dl(r){r._humanoidPending||(r._humanoidPending=!0,cx().then(e=>{if(r.playerGroup){for(const[t,n]of r.playerStickmen.entries()){if(!n.parent||n.userData.realHumanoid)continue;const i=Th(e.scene);i.rotation.x=-Math.PI/2,i.updateMatrixWorld(!0);const a=new Gt().setFromObject(i).getSize(new P);if(!Number.isFinite(a.y)||a.y<=0)continue;const o=1.65/a.y;i.scale.setScalar(o),i.updateMatrixWorld(!0);const c=new Gt().setFromObject(i),l=c.getCenter(new P);i.position.set(-l.x,-c.min.y,-l.z),i.traverse(d=>{d.isSkinnedMesh&&(d.userData.sharedHumanoidAsset=!0)}),ax(i,Pl[t%Pl.length]),n.add(i);for(const d of n.children)d!==i&&(d.visible=!1);const h=new cf(i),u=e.animations.find(d=>d.name.toLowerCase()==="run")||e.animations[0];if(u){const d=h.clipAction(u);d.time=t%7*.11,d.play()}n.userData.realHumanoid={mixer:h,model:i}}r._humanoidPending=!1,console.info("Quaternius animated runner enabled",r.playerStickmen.length)}}).catch(e=>{r._humanoidPending=!1,console.warn("Quaternius humanoid fallback",e==null?void 0:e.message)}))}function lx(r,e){var t;for(const n of r.playerStickmen)(t=n.userData.realHumanoid)==null||t.mixer.update(e)}class hx{constructor(e,t){this.scene=e,this.game=t,this.playerStickmen=[],this.playerGroup=null,this.playerCount=0,this.animTime=0,this.flyingBodies=[],this.impactFlashes=[],this.sparkParticles=[],this.trailParticles=[]}clear(){this.playerGroup&&(this.scene.remove(this.playerGroup),this.playerGroup.traverse(e=>{e.geometry&&!e.userData.sharedHumanoidAsset&&e.geometry.dispose(),e.material&&!e.userData.sharedHumanoidAsset&&e.material.dispose()})),this.playerStickmen=[],this.playerGroup=null,this.playerCount=0,this.flyingBodies.forEach(e=>{this.scene.remove(e.mesh)}),this.flyingBodies=[],this.impactFlashes.forEach(e=>{this.scene.remove(e.mesh)}),this.impactFlashes=[],this.sparkParticles.forEach(e=>{this.scene.remove(e.mesh)}),this.sparkParticles=[],this.trailParticles.forEach(e=>{this.scene.remove(e.mesh)}),this.trailParticles=[]}createPlayerCrowd(e){this.clear(),this.playerCount=e,this.playerGroup=new _t,this.playerGroup.userData.dynamic=!0;for(let t=0;t<e;t++)this.addStickmanToGroup(t);this.scene.add(this.playerGroup),Dl(this)}addStickmanToGroup(e){this.game&&this.game.equippedSkin==="rainbow"||this.game&&this.game.getPlayerColor();const t=j_(e),n=this.getFormationPosition(e);t.position.set(n.x,0,n.z),t.userData.index=e,t.scale.set(0,0,0),t.userData.spawnTime=this.animTime,t.userData.spawning=!0,this.playerGroup.add(t),this.playerStickmen.push(t)}getFormationPosition(e){if(e===0)return{x:0,z:0};const t=e*2.4,n=Math.sqrt(e)*.4;return{x:Math.cos(t)*n,z:Math.sin(t)*n*.6}}createStickman(e){const t=new _t,n=new rt({color:e}),i=new rn(.15,.5,4,4),s=new Se(i,n);s.position.y=.7,s.castShadow=!0,t.add(s);const a=new Ft(.2,8,8),o=new Se(a,n);o.position.y=1.2,o.castShadow=!0,t.add(o);const c=new rn(.07,.3,4,4),l=new Se(c,n);l.position.set(-.1,.2,0),t.add(l);const h=new Se(c,n);h.position.set(.1,.2,0),t.add(h);const u=new rn(.05,.25,4,4),d=new Se(u,n);d.position.set(-.25,.75,0),d.rotation.z=.3,t.add(d);const f=new Se(u,n);return f.position.set(.25,.75,0),f.rotation.z=-.3,t.add(f),t}addToPlayerCrowd(e){const t=this.playerCount;this.playerCount+=e;for(let n=0;n<e;n++)this.addStickmanToGroup(t+n)}removeFromPlayerCrowd(e){if(e=Math.min(e,this.playerCount-1),!(e<=0)){for(let t=0;t<e;t++)if(this.playerStickmen.length>1){const n=this.playerStickmen.pop();let i;if(this.game&&this.game.equippedSkin==="rainbow"){const s=[16717636,16748800,16771584,58998,2718207,13959417];i=s[Math.floor(Math.random()*s.length)]}else i=this.game?this.game.getPlayerColor():2201331;this.launchRagdoll(n,i),this.playerGroup.remove(n)}this.playerCount=Math.max(1,this.playerCount-e)}}removeEnemyCrowd(e){e.meshGroup&&([...e.meshGroup.children].forEach(n=>{this.launchRagdoll(n,16007990,e.meshGroup)}),setTimeout(()=>{e.meshGroup&&(this.scene.remove(e.meshGroup),e.meshGroup.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}))},100))}launchRagdoll(e,t,n){const i=new P;e.getWorldPosition(i);const s=this.createStickman(t);s.position.copy(i),s.userData.dynamic=!0;const a=Math.random()*Math.PI*2,o=4+Math.random()*6,c=6+Math.random()*5;s.userData.velocity=new P(Math.cos(a)*o,c,Math.sin(a)*o),s.userData.angularVel=new P((Math.random()-.5)*15,(Math.random()-.5)*10,(Math.random()-.5)*15),s.userData.life=1.5,s.userData.maxLife=1.5,s.userData.color=t,s.userData.trailTimer=0,s.traverse(l=>{l.material&&(l.material=l.material.clone(),l.material.transparent=!0)}),this.scene.add(s),this.flyingBodies.push({mesh:s}),this.spawnImpactFlash(i,t),this.spawnSparks(i,t,5)}spawnImpactFlash(e,t){const n=new qo(.1,.3,16),i=new Nt({color:t,transparent:!0,opacity:1,side:Xt}),s=new Se(n,i);s.position.copy(e),s.position.y+=.8,s.rotation.x=-Math.PI/2,s.userData.dynamic=!0,this.scene.add(s),this.impactFlashes.push({mesh:s,life:.4,maxLife:.4});const a=new Ft(.3,8,8),o=new Nt({color:16777215,transparent:!0,opacity:.9}),c=new Se(a,o);c.position.copy(e),c.position.y+=.8,c.userData.dynamic=!0,this.scene.add(c),this.impactFlashes.push({mesh:c,life:.2,maxLife:.2})}spawnSparks(e,t,n){for(let i=0;i<n;i++){const s=new Ft(.06+Math.random()*.06,4,4),a=new Nt({color:Math.random()>.5?t:16777215,transparent:!0,opacity:1}),o=new Se(s,a);o.position.copy(e),o.position.y+=.5+Math.random()*.5,o.userData.dynamic=!0;const c=Math.random()*Math.PI*2,l=3+Math.random()*5;o.userData.velocity=new P(Math.cos(c)*l,2+Math.random()*4,Math.sin(c)*l),o.userData.life=.5+Math.random()*.3,o.userData.maxLife=o.userData.life,this.scene.add(o),this.sparkParticles.push({mesh:o})}}spawnDeathEffect(e,t,n){const i=new P(e+(Math.random()-.5)*2,.5,t+(Math.random()-.5)*1);this.spawnImpactFlash(i,n),this.spawnSparks(i,n,4)}getPlayerCount(){return this.playerCount}updatePlayerPosition(e,t){this.playerGroup&&this.playerGroup.position.set(e,0,t)}update(e){lx(this,e),this.playerStickmen.some(t=>!t.userData.realHumanoid)&&Dl(this),this.animTime+=e*5,this.playerStickmen.length>0&&this.playerStickmen.forEach((t,n)=>{if(t.userData.spawning){const o=this.animTime-t.userData.spawnTime,c=Math.min(o*2,1),l=Math.min(c*1.2,1)*(1+Math.sin(c*Math.PI)*.3);t.scale.set(Math.min(l,1),Math.min(l,1),Math.min(l,1)),c>=1&&(t.userData.spawning=!1,t.scale.set(1,1,1))}const i=n*.7,s=this.animTime+i;t.userData.spawning||(t.position.y=Math.abs(Math.sin(s*2))*.25);const a=t.children;a.length>=1&&(a[0].rotation.x=.15+Math.sin(s)*.05),a.length>=2&&(a[1].rotation.x=Math.sin(s*2)*.08),a.length>=4&&(a[2].rotation.x=Math.sin(s)*.8,a[3].rotation.x=-Math.sin(s)*.8),a.length>=6&&(a[4].rotation.x=-Math.sin(s)*.7,a[4].rotation.z=.3+Math.sin(s*2)*.1,a[5].rotation.x=Math.sin(s)*.7,a[5].rotation.z=-.3-Math.sin(s*2)*.1)}),this.updateFlyingBodies(e),this.updateImpactFlashes(e),this.updateSparkParticles(e),this.updateTrailParticles(e)}updateFlyingBodies(e){for(let t=this.flyingBodies.length-1;t>=0;t--){const i=this.flyingBodies[t].mesh,s=i.userData;s.life-=e;const a=s.life/s.maxLife;if(s.velocity.y-=20*e,i.position.x+=s.velocity.x*e,i.position.y+=s.velocity.y*e,i.position.z+=s.velocity.z*e,i.rotation.x+=s.angularVel.x*e,i.rotation.y+=s.angularVel.y*e,i.rotation.z+=s.angularVel.z*e,s.angularVel.multiplyScalar(.98),a<.3){const o=a/.3;i.traverse(c=>{c.material&&(c.material.opacity=o)}),i.scale.setScalar(o)}s.trailTimer+=e,s.trailTimer>.05&&a>.3&&(s.trailTimer=0,this.spawnTrailParticle(i.position,s.color)),i.position.y<.2&&s.velocity.y<0&&(s.velocity.y*=-.4,s.velocity.x*=.7,s.velocity.z*=.7,i.position.y=.2,Math.abs(s.velocity.y)>1&&this.spawnSparks(i.position,s.color,2)),s.life<=0&&(this.scene.remove(i),i.traverse(o=>{o.geometry&&!o.userData.sharedHumanoidAsset&&o.geometry.dispose(),o.material&&!o.userData.sharedHumanoidAsset&&o.material.dispose()}),this.flyingBodies.splice(t,1))}}updateImpactFlashes(e){for(let t=this.impactFlashes.length-1;t>=0;t--){const n=this.impactFlashes[t];n.life-=e;const i=n.life/n.maxLife,s=1+(1-i)*4;n.mesh.scale.set(s,s,s),n.mesh.material.opacity=i*.8,n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.impactFlashes.splice(t,1))}}updateSparkParticles(e){for(let t=this.sparkParticles.length-1;t>=0;t--){const i=this.sparkParticles[t].mesh,s=i.userData;s.life-=e;const a=s.life/s.maxLife;s.velocity.y-=12*e,i.position.x+=s.velocity.x*e,i.position.y+=s.velocity.y*e,i.position.z+=s.velocity.z*e,i.material.opacity=a,i.scale.setScalar(a),s.velocity.multiplyScalar(.96),(s.life<=0||i.position.y<-1)&&(this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this.sparkParticles.splice(t,1))}}spawnTrailParticle(e,t){const n=new Ft(.04,4,4),i=new Nt({color:t,transparent:!0,opacity:.6}),s=new Se(n,i);s.position.copy(e),s.position.x+=(Math.random()-.5)*.2,s.position.y+=(Math.random()-.5)*.2,s.userData.dynamic=!0,s.userData.life=.4,s.userData.maxLife=.4,this.scene.add(s),this.trailParticles.push({mesh:s})}updateTrailParticles(e){for(let t=this.trailParticles.length-1;t>=0;t--){const i=this.trailParticles[t].mesh;i.userData.life-=e;const s=i.userData.life/i.userData.maxLife;i.material.opacity=s*.6,i.scale.setScalar(s),i.userData.life<=0&&(this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this.trailParticles.splice(t,1))}}updateParticles(e){}}class ux{constructor(e){this.game=e,this.startScreen=document.getElementById("start-screen"),this.upgradeScreen=document.getElementById("upgrade-screen"),this.winScreen=document.getElementById("win-screen"),this.loseScreen=document.getElementById("lose-screen"),this.hud=document.getElementById("hud"),this.container=document.getElementById("game-container"),this.levelDisplay=document.getElementById("level-display"),this.coinDisplay=document.getElementById("coin-display"),this.countDisplay=document.getElementById("count-display"),this.crowdLevel=document.getElementById("crowd-level"),this.strengthLevel=document.getElementById("strength-level"),this.upgradeCrowdBtn=document.getElementById("upgrade-crowd-btn"),this.upgradeStrengthBtn=document.getElementById("upgrade-strength-btn"),this.shakeIntensity=0,this.canvas=document.getElementById("game-canvas"),this.prevCount=0,this.bossHealthBar=null,this.setupButtons(),this.updateHUDInfo(),this.startShakeLoop()}setupButtons(){document.getElementById("play-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.game.startGame()})}),document.getElementById("upgrade-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.showUpgrades()})}),document.getElementById("shop-btn").addEventListener("click",()=>{this.game.audio.init(),this.game.audio.playClick(),this.transitionOut(this.startScreen,()=>{this.showShop()})}),document.getElementById("shop-back-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(document.getElementById("shop-screen"),()=>{this.transitionIn(this.startScreen)})}),document.getElementById("tab-skins").addEventListener("click",()=>{document.getElementById("tab-skins").classList.add("active"),document.getElementById("tab-themes").classList.remove("active"),document.getElementById("skins-panel").classList.remove("hidden"),document.getElementById("themes-panel").classList.add("hidden")}),document.getElementById("tab-themes").addEventListener("click",()=>{document.getElementById("tab-themes").classList.add("active"),document.getElementById("tab-skins").classList.remove("active"),document.getElementById("themes-panel").classList.remove("hidden"),document.getElementById("skins-panel").classList.add("hidden")}),document.getElementById("back-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.upgradeScreen,()=>{this.transitionIn(this.startScreen)})}),document.getElementById("next-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.winScreen,()=>{this.game.startGame()})}),document.getElementById("win-upgrade-crowd-btn").addEventListener("click",()=>{this.game.upgradecrowd()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateWinUpgradeInfo(),this.pulseElement(document.getElementById("win-upgrade-crowd-btn")))}),document.getElementById("win-upgrade-strength-btn").addEventListener("click",()=>{this.game.upgradeStrength()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateWinUpgradeInfo(),this.pulseElement(document.getElementById("win-upgrade-strength-btn")))}),document.getElementById("retry-btn").addEventListener("click",()=>{this.game.audio.initialized&&this.game.audio.playClick(),this.transitionOut(this.loseScreen,()=>{this.game.startGame()})}),this.upgradeCrowdBtn.addEventListener("click",()=>{this.game.upgradecrowd()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateUpgradeScreen(),this.updateHUDInfo(),this.pulseElement(this.upgradeCrowdBtn))}),this.upgradeStrengthBtn.addEventListener("click",()=>{this.game.upgradeStrength()&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.updateUpgradeScreen(),this.updateHUDInfo(),this.pulseElement(this.upgradeStrengthBtn))})}transitionOut(e,t){e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity="0",e.style.transform="scale(0.9)",setTimeout(()=>{e.classList.add("hidden"),e.style.opacity="",e.style.transform="",e.style.transition="",t&&t()},300)}transitionIn(e){e.style.opacity="0",e.style.transform="scale(1.1)",e.classList.remove("hidden"),requestAnimationFrame(()=>{e.style.transition="opacity 0.4s ease, transform 0.4s ease",e.style.opacity="1",e.style.transform="scale(1)",setTimeout(()=>{e.style.transition=""},400)})}screenShake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}startShakeLoop(){const e=()=>{if(this.shakeIntensity>.5){const t=(Math.random()-.5)*this.shakeIntensity,n=(Math.random()-.5)*this.shakeIntensity;this.canvas.style.transform=`translate(${t}px, ${n}px)`,this.shakeIntensity*=.85}else this.shakeIntensity=0,this.canvas.style.transform="";requestAnimationFrame(e)};e()}showFloatingText(e,t){const n=document.createElement("div");n.textContent=e,n.style.cssText=`
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
        `,this.container.appendChild(n),setTimeout(()=>n.remove(),800)}pulseElement(e){e.style.transform="scale(1.3)",e.style.transition="transform 0.15s ease",setTimeout(()=>{e.style.transform="scale(1)",setTimeout(()=>{e.style.transition=""},150)},150)}hideAllScreens(){this.startScreen.classList.add("hidden"),this.upgradeScreen.classList.add("hidden"),this.winScreen.classList.add("hidden"),this.loseScreen.classList.add("hidden"),document.getElementById("shop-screen").classList.add("hidden"),this.hud.style.display="none"}showHUD(){this.hud.style.display="flex",this.hud.style.opacity="0",requestAnimationFrame(()=>{this.hud.style.transition="opacity 0.5s ease",this.hud.style.opacity="1",setTimeout(()=>{this.hud.style.transition=""},500)}),this.updateHUDInfo()}updateHUDInfo(){this.levelDisplay.textContent=`Étape ${this.game.level}`,this.coinDisplay.textContent=`🪙 ${this.game.coins}`}updateCount(e){this.countDisplay.textContent=`👥 ${e}`,Math.abs(e-this.prevCount)>2&&(this.countDisplay.style.transform="scale(1.3)",this.countDisplay.style.transition="transform 0.15s ease",setTimeout(()=>{this.countDisplay.style.transform="scale(1)",setTimeout(()=>{this.countDisplay.style.transition=""},150)},150)),this.prevCount=e}showUpgrades(){this.transitionIn(this.upgradeScreen),this.updateUpgradeScreen()}updateUpgradeScreen(){this.crowdLevel.textContent=`Niv. ${this.game.crowdUpgrade}`,this.strengthLevel.textContent=`Niv. ${this.game.strengthUpgrade}`,this.upgradeCrowdBtn.textContent=`🪙 ${this.game.crowdUpgrade*50}`,this.upgradeStrengthBtn.textContent=`🪙 ${this.game.strengthUpgrade*75}`,this.coinDisplay.textContent=`🪙 ${this.game.coins}`}showShop(){const e=document.getElementById("shop-screen");this.transitionIn(e),this.renderShop()}renderShop(){document.getElementById("shop-coins").textContent=`🪙 ${this.game.coins}`,this.renderSkins(),this.renderThemes()}renderSkins(){const e=document.getElementById("skins-grid");e.innerHTML="",this.game.skins.forEach(t=>{const n=document.createElement("div");n.className="shop-item",t.owned&&n.classList.add("owned"),t.id===this.game.equippedSkin&&n.classList.add("equipped");const i=document.createElement("div");i.className="skin-preview",i.style.background="#"+t.color.toString(16).padStart(6,"0"),t.id==="rainbow"&&(i.style.background="linear-gradient(135deg, red, orange, yellow, green, blue, purple)"),n.appendChild(i);const s=document.createElement("div");s.className="item-name",s.textContent=t.name,n.appendChild(s);const a=document.createElement("div");a.className="item-price",t.id===this.game.equippedSkin?(a.textContent="✓ Equipped",a.classList.add("owned-label")):t.owned?(a.textContent="Tap to equip",a.classList.add("owned-label")):t.shareUnlock?(a.textContent="📤 Share",a.classList.add("free")):a.textContent=`🪙 ${t.price}`,n.appendChild(a),n.addEventListener("click",()=>this.onSkinClick(t)),e.appendChild(n)})}renderThemes(){const e=document.getElementById("themes-grid");e.innerHTML="",this.game.themes.forEach(t=>{const n=document.createElement("div");n.className="shop-item",t.owned&&n.classList.add("owned"),t.id===this.game.equippedTheme&&n.classList.add("equipped");const i=document.createElement("div");i.className="theme-preview",i.style.background=`linear-gradient(180deg, ${t.colors[0]}, ${t.colors[2]}, ${t.colors[4]})`,n.appendChild(i);const s=document.createElement("div");s.className="item-name",s.textContent=t.name,n.appendChild(s);const a=document.createElement("div");a.className="item-price",t.id===this.game.equippedTheme?(a.textContent="✓ Equipped",a.classList.add("owned-label")):t.owned?(a.textContent="Tap to equip",a.classList.add("owned-label")):a.textContent=`🪙 ${t.price}`,n.appendChild(a),n.addEventListener("click",()=>this.onThemeClick(t)),e.appendChild(n)})}onSkinClick(e){if(e.id!==this.game.equippedSkin){if(e.owned)this.game.equipSkin(e.id),this.game.audio.initialized&&this.game.audio.playClick();else if(e.shareUnlock){const t={title:"Count Masters: Stickman Games",text:"Check out this awesome stickman runner game!",url:window.location.href};navigator.share?navigator.share(t).then(()=>{this.game.shareForSkin(e.id),this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText("+🎨 Rainbow unlocked!","#4CAF50"),this.renderShop()}).catch(()=>{}):(navigator.clipboard.writeText(`${t.text} ${t.url}`).catch(()=>{}),this.game.shareForSkin(e.id),this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText("Link copied + 🎨 Rainbow!","#4CAF50"))}else this.game.buySkin(e.id)&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText(`-${e.price} 🪙`,"#ffd700"));this.renderShop()}}onThemeClick(e){e.id!==this.game.equippedTheme&&(e.owned?(this.game.equipTheme(e.id),this.game.audio.initialized&&this.game.audio.playClick()):this.game.buyTheme(e.id)&&(this.game.audio.initialized&&this.game.audio.playGateGood(),this.floatingText(`-${e.price} 🪙`,"#ffd700")),this.renderShop())}showWin(e){this.hideAllScreens(),setTimeout(()=>{this.transitionIn(this.winScreen),document.getElementById("win-coins").textContent=`+${e} 🪙`,this.updateWinUpgradeInfo(),this.spawnConfetti()},300)}updateWinUpgradeInfo(){document.getElementById("win-total-coins").textContent=`Total: 🪙 ${this.game.coins}`,document.getElementById("win-crowd-level").textContent=`Niv. ${this.game.crowdUpgrade}`,document.getElementById("win-strength-level").textContent=`Niv. ${this.game.strengthUpgrade}`,document.getElementById("win-upgrade-crowd-btn").textContent=`🪙 ${this.game.crowdUpgrade*50}`,document.getElementById("win-upgrade-strength-btn").textContent=`🪙 ${this.game.strengthUpgrade*75}`}showLose(){this.hideAllScreens(),setTimeout(()=>{this.transitionIn(this.loseScreen)},300)}spawnConfetti(){const e=["#FF5252","#FFD740","#69F0AE","#40C4FF","#E040FB","#FF6E40"];for(let t=0;t<40;t++){const n=document.createElement("div"),i=e[Math.floor(Math.random()*e.length)],s=Math.random()*100,a=Math.random()*.5,o=6+Math.random()*8;n.style.cssText=`
                position: absolute;
                top: -10px;
                left: ${s}%;
                width: ${o}px;
                height: ${o}px;
                background: ${i};
                border-radius: ${Math.random()>.5?"50%":"0"};
                pointer-events: none;
                z-index: 200;
                animation: confettiFall ${1.5+Math.random()}s ease-in ${a}s forwards;
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
        `,i.appendChild(s),t.appendChild(i);const a=document.createElement("div");a.id="boss-health-text",a.style.cssText=`
            color: #fff;
            font-size: 12px;
            text-align: center;
            margin-top: 3px;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        `,a.textContent=`${e} / ${e}`,t.appendChild(a),this.container.appendChild(t),this.bossHealthBar=t}updateBossHealthBar(e,t){const n=document.getElementById("boss-health-fill"),i=document.getElementById("boss-health-text");if(n){const s=Math.max(0,e/t*100);n.style.width=`${s}%`,s<25?n.style.background="linear-gradient(90deg, #f44336, #ff5722)":s<50&&(n.style.background="linear-gradient(90deg, #f44336, #E91E63)")}i&&(i.textContent=`${Math.max(0,e)} / ${t}`)}hideBossHealthBar(){if(this.bossHealthBar){this.bossHealthBar.style.transition="opacity 0.3s ease",this.bossHealthBar.style.opacity="0";const t=this.bossHealthBar;setTimeout(()=>t.remove(),300),this.bossHealthBar=null}const e=document.getElementById("boss-health-wrapper");e&&e.remove()}}class dx{constructor(){this.ctx=null,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.isMusicPlaying=!1,this.musicNodes=[],this.initialized=!1}init(){this.initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.35,this.musicGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.6,this.sfxGain.connect(this.masterGain),this.initialized=!0)}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}startMusic(){this.initialized||this.init(),!this.isMusicPlaying&&(this.isMusicPlaying=!0,this.playMusicLoop())}stopMusic(){this.isMusicPlaying=!1,this.musicNodes.forEach(e=>{try{e.stop()}catch{}}),this.musicNodes=[]}playMusicLoop(){if(!this.isMusicPlaying)return;const e=this.ctx.currentTime,n=60/128;[110,110,146.83,130.81,110,110,146.83,164.81].forEach((o,c)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sawtooth",l.frequency.value=o,h.gain.setValueAtTime(.3,e+c*n),h.gain.exponentialRampToValueAtTime(.01,e+(c+.8)*n),l.connect(h),h.connect(this.musicGain),l.start(e+c*n),l.stop(e+(c+1)*n),this.musicNodes.push(l)});for(let o=0;o<8;o++){const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(150,e+o*n),c.frequency.exponentialRampToValueAtTime(30,e+o*n+.1),l.gain.setValueAtTime(.8,e+o*n),l.gain.exponentialRampToValueAtTime(.01,e+o*n+.15),c.connect(l),l.connect(this.musicGain),c.start(e+o*n),c.stop(e+o*n+.2),this.musicNodes.push(c)}for(let o=0;o<16;o++){const c=this.ctx.createBuffer(1,this.ctx.sampleRate*.05,this.ctx.sampleRate),l=c.getChannelData(0);for(let f=0;f<l.length;f++)l[f]=(Math.random()*2-1)*Math.exp(-f/(l.length*.2));const h=this.ctx.createBufferSource();h.buffer=c;const u=this.ctx.createGain();u.gain.value=o%2===0?.1:.2;const d=this.ctx.createBiquadFilter();d.type="highpass",d.frequency.value=7e3,h.connect(d),d.connect(u),u.connect(this.musicGain),h.start(e+o*n*.5),this.musicNodes.push(h)}[329.63,392,440,523.25,440,392,349.23,329.63].forEach((o,c)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="square",l.frequency.value=o,h.gain.setValueAtTime(.08,e+c*n),h.gain.exponentialRampToValueAtTime(.01,e+(c+.6)*n),l.connect(h),h.connect(this.musicGain),l.start(e+c*n),l.stop(e+(c+.7)*n),this.musicNodes.push(l)});const a=8*n;setTimeout(()=>{this.musicNodes=[],this.playMusicLoop()},a*1e3-50)}playGateGood(){if(!this.initialized)return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,n)=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=t,s.gain.setValueAtTime(.4,e+n*.06),s.gain.exponentialRampToValueAtTime(.01,e+n*.06+.2),i.connect(s),s.connect(this.sfxGain),i.start(e+n*.06),i.stop(e+n*.06+.25)})}playGateBad(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(100,e+.3),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.01,e+.3),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.35)}playHit(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(200,e),t.frequency.exponentialRampToValueAtTime(50,e+.1),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.15),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.2);const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.1,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=(Math.random()*2-1)*Math.exp(-c/(s.length*.3));const a=this.ctx.createBufferSource();a.buffer=i;const o=this.ctx.createGain();o.gain.value=.3,a.connect(o),o.connect(this.sfxGain),a.start(e)}playFightHit(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(150+Math.random()*100,e),t.frequency.exponentialRampToValueAtTime(40,e+.08),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.01,e+.1),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.12)}playWin(){if(!this.initialized)return;const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.value=n,a.gain.setValueAtTime(.3,e+i*.15),a.gain.setValueAtTime(.3,e+i*.15+.1),a.gain.exponentialRampToValueAtTime(.01,e+i*.15+.4),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.15),s.stop(e+i*.15+.5)});for(let n=0;n<8;n++){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.value=1e3+Math.random()*2e3,s.gain.setValueAtTime(.05,e+.6+n*.05),s.gain.exponentialRampToValueAtTime(.001,e+.6+n*.05+.2),i.connect(s),s.connect(this.sfxGain),i.start(e+.6+n*.05),i.stop(e+.6+n*.05+.25)}}playLose(){if(!this.initialized)return;const e=this.ctx.currentTime;[392,349.23,293.66,261.63].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.value=n,a.gain.setValueAtTime(.3,e+i*.25),a.gain.exponentialRampToValueAtTime(.01,e+i*.25+.4),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.25),s.stop(e+i*.25+.5)})}playCountUp(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.value=800+Math.random()*400,n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.1)}playBossAppear(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(80,e),t.frequency.linearRampToValueAtTime(110,e+.5),n.gain.setValueAtTime(.4,e),n.gain.setValueAtTime(.4,e+.4),n.gain.exponentialRampToValueAtTime(.01,e+.8),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+1);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=55,s.gain.setValueAtTime(.3,e+.1),s.gain.exponentialRampToValueAtTime(.01,e+.9),i.connect(s),s.connect(this.sfxGain),i.start(e+.1),i.stop(e+1)}playClick(){if(!this.initialized)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.value=600,n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.01,e+.05),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.06)}}class fx{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.clock=new lf,this.state="menu",this.level=1,this.coins=0,this.crowdUpgrade=1,this.strengthUpgrade=1,this.skins=[{id:"blue",name:"Gilets jaunes",color:15910450,price:0,owned:!0},{id:"green",name:"Forest",color:5025616,price:10,owned:!1},{id:"orange",name:"Sunset",color:16750592,price:10,owned:!1},{id:"purple",name:"Royal",color:10233776,price:15,owned:!1},{id:"pink",name:"Bubblegum",color:15277667,price:15,owned:!1},{id:"cyan",name:"Ice",color:48340,price:20,owned:!1},{id:"yellow",name:"Gold",color:16771899,price:20,owned:!1},{id:"white",name:"Ghost",color:16777215,price:25,owned:!1},{id:"black",name:"Shadow",color:3355443,price:25,owned:!1},{id:"rainbow",name:"Rainbow",color:16717636,price:0,owned:!1,shareUnlock:!0}],this.equippedSkin="blue",this.themes=[{id:"default",name:"Ville de jour",colors:["#1b3551","#5580a1","#a4b8c6","#dde1db","#f8e6c9"],fog:12832973,ground:6715264,price:0,owned:!0},{id:"sunset",name:"Sunset",colors:["#1a0011","#ff6b35","#ff8c61","#ffc89e","#fff3e0"],fog:16763038,ground:9268835,price:15,owned:!1},{id:"night",name:"Night",colors:["#000011","#0d1b2a","#1b2838","#2d4059","#3d5a80"],fog:1779768,ground:3046706,price:15,owned:!1},{id:"candy",name:"Candy",colors:["#4a0072","#c51162","#ff6090","#ff80ab","#ffe0f0"],fog:16744619,ground:8505220,price:20,owned:!1},{id:"ocean",name:"Ocean",colors:["#001a33","#003366","#006699","#3399cc","#99ccff"],fog:3381708,ground:2533018,price:20,owned:!1},{id:"volcano",name:"Volcano",colors:["#1a0000","#4d0000","#800000","#cc3300","#ff6600"],fog:13382400,ground:6111287,price:25,owned:!1}],this.equippedTheme="default",this.fightingEnemy=null,this.fightTimer=0,this.fightInterval=.12,this.playerCrowd=null,this.playerX=0,this.speed=9,this.trackZ=0,this.levelGenerator=null,this.trackLength=200,this.inputX=0,this.isDragging=!1,this.lastInputX=0,this.loadProgress()}init(){this.setupRenderer(),this.setupScene(),this.setupCamera(),this.setupLights(),this.setupInput(),this.ui=new ux(this),this.crowdManager=new hx(this.scene,this),this.levelGenerator=new Z_(this.scene,this),this.audio=new dx,this.animate()}setupRenderer(){const e=document.getElementById("game-canvas");this.renderer=new r_({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nl,window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()})}setupScene(){this.scene=new nd,this.applyTheme()}setupCamera(){this.camera=new Ht(60,window.innerWidth/window.innerHeight,.1,300),this.camera.position.set(0,8.7,11),this.camera.lookAt(0,0,-8.5)}setupLights(){const e=new Xd(16777215,.6);this.scene.add(e);const t=new gh(16774624,1);t.position.set(10,20,10),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=100,t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=30,t.shadow.camera.bottom=-30,this.scene.add(t),this.directionalLight=t;const n=new Ft(3,16,16),i=new Nt({color:16771899}),s=new Se(n,i);s.position.set(40,45,-80),this.scene.add(s);const a=new Ft(5,16,16),o=new Nt({color:16775620,transparent:!0,opacity:.3}),c=new Se(a,o);c.position.set(40,45,-80),this.scene.add(c);const l=new kd(8900331,6732650,.3);this.scene.add(l)}setupInput(){const e=this.renderer.domElement;e.addEventListener("mousedown",t=>{this.state==="playing"&&(this.isDragging=!0,this.lastInputX=t.clientX)}),e.addEventListener("mousemove",t=>{if(!this.isDragging||this.state!=="playing")return;const n=(t.clientX-this.lastInputX)*.02;this.playerX=Math.max(-3.5,Math.min(3.5,this.playerX+n)),this.lastInputX=t.clientX}),e.addEventListener("mouseup",()=>{this.isDragging=!1}),e.addEventListener("mouseleave",()=>{this.isDragging=!1}),e.addEventListener("touchstart",t=>{this.state==="playing"&&(this.isDragging=!0,this.lastInputX=t.touches[0].clientX)},{passive:!0}),e.addEventListener("touchmove",t=>{if(!this.isDragging||this.state!=="playing")return;t.preventDefault();const n=(t.touches[0].clientX-this.lastInputX)*.02;this.playerX=Math.max(-3.5,Math.min(3.5,this.playerX+n)),this.lastInputX=t.touches[0].clientX},{passive:!1}),e.addEventListener("touchend",()=>{this.isDragging=!1}),this.keys={},window.addEventListener("keydown",t=>{this.keys[t.key]=!0}),window.addEventListener("keyup",t=>{this.keys[t.key]=!1})}startGame(){this.state="playing",this.trackZ=0,this.playerX=0,this.speed=9,this.audio.init(),this.audio.resume(),this.audio.startMusic(),this.clearLevel(),this.trackLength=150+this.level*30,this.levelGenerator.generate(this.level,this.trackLength);const e=this.getStartingCrowdSize();this.crowdManager.createPlayerCrowd(e),this.ui.showHUD(),this.ui.updateCount(e)}getStartingCrowdSize(){return 5+(this.crowdUpgrade-1)*3}clearLevel(){const e=[];this.scene.traverse(t=>{t.userData.dynamic&&e.push(t)}),e.forEach(t=>{this.scene.remove(t),t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())}),this.crowdManager.clear(),this.levelGenerator.clear()}update(e){if(this.state==="boss_defeated"){this.crowdManager.update(e),this.levelGenerator.updateBossDefeat(e);return}if(this.state==="fighting"){this.updateFight(e),this.crowdManager.update(e),this.ui.updateCount(this.crowdManager.getPlayerCount()),this.fightCameraTime=(this.fightCameraTime||0)+e;const t=Math.sin(this.fightCameraTime*25)*.15,n=Math.cos(this.fightCameraTime*30)*.08;this.camera.position.x=this.playerX*.3+t,this.camera.position.z=-this.trackZ+12,this.camera.position.y=10+n,this.camera.lookAt(this.playerX*.3,1,-this.trackZ-5);return}this.state==="playing"&&((this.keys.ArrowLeft||this.keys.a)&&(this.playerX=Math.max(-3.5,this.playerX-8*e)),(this.keys.ArrowRight||this.keys.d)&&(this.playerX=Math.min(3.5,this.playerX+8*e)),this.trackZ+=this.speed*e,this.crowdManager.updatePlayerPosition(this.playerX,-this.trackZ),this.camera.position.x=this.playerX*.3,this.camera.position.z=-this.trackZ+11,this.camera.lookAt(this.playerX*.3,0,-this.trackZ-8.5),this.directionalLight.position.set(this.playerX+10,20,-this.trackZ+10),this.directionalLight.target.position.set(this.playerX,0,-this.trackZ),this.directionalLight.target.updateMatrixWorld(),this.checkGateCollisions(),this.checkObstacleCollisions(),this.checkEnemyCollisions(),this.trackZ>=this.trackLength&&this.checkBossFight(),this.crowdManager.update(e),this.ui.updateCount(this.crowdManager.getPlayerCount()))}checkGateCollisions(){const e=this.levelGenerator.gates;for(let t=e.length-1;t>=0;t--){const n=e[t];if(n.passed)continue;const i=-n.z,s=-this.trackZ;Math.abs(s-i)<1&&(this.playerX<0&&n.leftGate?(this.applyGate(n.leftGate),n.passed=!0,this.highlightGate(n,"left")):this.playerX>=0&&n.rightGate&&(this.applyGate(n.rightGate),n.passed=!0,this.highlightGate(n,"right")))}}applyGate(e){const t=this.crowdManager.getPlayerCount();let n=t;switch(e.op){case"+":n=t+e.value;break;case"-":n=Math.max(1,t-e.value);break;case"*":n=t*e.value;break;case"/":n=Math.max(1,Math.floor(t/e.value));break}n=Math.min(n,72),n>t?(this.crowdManager.addToPlayerCrowd(n-t),this.audio.playGateGood(),this.ui.showFloatingText(`+${n-t}`,"#4CAF50"),this.ui.screenShake(3)):n<t&&(this.crowdManager.removeFromPlayerCrowd(t-n),this.audio.playGateBad(),this.ui.showFloatingText(`-${t-n}`,"#f44336"),this.ui.screenShake(5))}highlightGate(e,t){const n=t==="left"?e.leftMesh:e.rightMesh;n&&(n.material.emissive=new Ce(16777215),n.material.emissiveIntensity=.5,setTimeout(()=>{n.material&&(n.material.emissiveIntensity=0)},300))}checkObstacleCollisions(){const e=this.levelGenerator.obstacles;for(const t of e){if(t.passed)continue;const n=-t.z,i=-this.trackZ;if(Math.abs(i-n)<1.5){const s=this.playerX-1.5,a=this.playerX+1.5,o=t.x-t.width/2,c=t.x+t.width/2;if(a>o&&s<c){const l=Math.ceil(this.crowdManager.getPlayerCount()*.3);this.crowdManager.removeFromPlayerCrowd(l),t.passed=!0,this.audio.playHit(),this.ui.screenShake(8),this.ui.showFloatingText(`-${l}`,"#ff5722"),this.crowdManager.getPlayerCount()<=0&&this.loseGame()}}}}checkEnemyCollisions(){const e=this.levelGenerator.enemies;for(const t of e){if(t.defeated)continue;const n=-t.z,i=-this.trackZ;if(Math.abs(i-n)<2){this.state="fighting",this.fightingEnemy=t,this.fightingEnemy.remainingCount=t.count,this.fightTimer=0,this.fightCameraTime=0,this.speed=0,this.audio.playHit(),this.ui.screenShake(10),this.crowdManager.spawnImpactFlash(new P(this.playerX,1,-this.trackZ),16777215),this.crowdManager.spawnSparks(new P(this.playerX,1,-this.trackZ),16755200,10);return}}}updateFight(e){if(this.fightTimer+=e,this.fightTimer>=this.fightInterval){this.fightTimer-=this.fightInterval,this.crowdManager.getPlayerCount();const t=this.fightingEnemy;if(!t)return;const n=this.strengthUpgrade,i=Math.min(n,t.remainingCount);if(t.remainingCount-=i,t.remainingCount>0&&(this.crowdManager.removeFromPlayerCrowd(1),this.crowdManager.spawnDeathEffect(this.playerX,-this.trackZ,2201331)),i>0){const s=(Math.random()-.5)*3;this.crowdManager.spawnDeathEffect(s,-t.z,16007990),this.audio.playFightHit()}t.isBoss?(this.ui.updateBossHealthBar(t.remainingCount,t.count),this.levelGenerator.shakeBoss()):this.levelGenerator.updateEnemyLabel(t),t.remainingCount<=0?(t.defeated=!0,t.isBoss?(this.ui.hideBossHealthBar(),this.levelGenerator.playBossDefeatAnimation(),this.ui.screenShake(15),this.crowdManager.spawnSparks(new P(0,3,-t.z),10233776,20),setTimeout(()=>this.winGame(),1200),this.state="boss_defeated",this.fightingEnemy=null,this.fightCameraTime=0):(this.crowdManager.removeEnemyCrowd(t),this.state="playing",this.speed=9,this.fightingEnemy=null,this.fightCameraTime=0,this.camera.position.y=12)):this.crowdManager.getPlayerCount()<=0&&(this.ui.hideBossHealthBar(),this.loseGame(),this.fightingEnemy=null,this.fightCameraTime=0)}this.crowdManager.updateParticles(e)}checkBossFight(){const e=this.levelGenerator.boss;if(!e||e.defeated){this.winGame();return}this.state="fighting",this.audio.playBossAppear(),this.ui.screenShake(12),this.fightCameraTime=0,this.fightingEnemy={z:e.z,count:e.health,remainingCount:e.health,defeated:!1,isBoss:!0,meshGroup:null},this.fightTimer=0,this.speed=0,this.ui.showBossHealthBar(e.health);const t=this.fightingEnemy;Object.defineProperty(t,"defeated",{get:()=>e.defeated,set:n=>{e.defeated=n}})}winGame(){this.state="win";const e=Math.floor(this.crowdManager.getPlayerCount()*2+this.level*10);this.coins+=e,this.level++,this.saveProgress(),this.audio.stopMusic(),this.audio.playWin(),this.ui.showWin(e)}loseGame(){this.state="lose";const e=Math.floor(this.level*2);this.coins+=e,this.saveProgress(),this.audio.stopMusic(),this.audio.playLose(),this.ui.showLose()}upgradecrowd(){const e=this.crowdUpgrade*50;return this.coins>=e?(this.coins-=e,this.crowdUpgrade++,this.saveProgress(),!0):!1}upgradeStrength(){const e=this.strengthUpgrade*75;return this.coins>=e?(this.coins-=e,this.strengthUpgrade++,this.saveProgress(),!0):!1}buySkin(e){const t=this.skins.find(n=>n.id===e);return!t||t.owned||t.shareUnlock||this.coins<t.price?!1:(this.coins-=t.price,t.owned=!0,this.equippedSkin=e,this.saveProgress(),!0)}equipSkin(e){const t=this.skins.find(n=>n.id===e);return!t||!t.owned?!1:(this.equippedSkin=e,this.saveProgress(),!0)}shareForSkin(e){const t=this.skins.find(n=>n.id===e);return!t||!t.shareUnlock||t.owned?!1:(t.owned=!0,this.equippedSkin=e,this.saveProgress(),!0)}buyTheme(e){const t=this.themes.find(n=>n.id===e);return!t||t.owned||this.coins<t.price?!1:(this.coins-=t.price,t.owned=!0,this.equippedTheme=e,this.applyTheme(),this.saveProgress(),!0)}equipTheme(e){const t=this.themes.find(n=>n.id===e);return!t||!t.owned?!1:(this.equippedTheme=e,this.applyTheme(),this.saveProgress(),!0)}getPlayerColor(){const e=this.skins.find(t=>t.id===this.equippedSkin);return e?e.color:2201331}getActiveTheme(){return this.themes.find(e=>e.id===this.equippedTheme)||this.themes[0]}applyTheme(){const e=this.getActiveTheme(),t=document.createElement("canvas");t.width=1,t.height=512;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,e.colors[0]),i.addColorStop(.2,e.colors[1]),i.addColorStop(.5,e.colors[2]),i.addColorStop(.8,e.colors[3]),i.addColorStop(1,e.colors[4]),n.fillStyle=i,n.fillRect(0,0,1,512);const s=new Ms(t);this.scene.background=s,this.scene.fog=new Bo(e.fog,.006)}saveProgress(){const e={level:this.level,coins:this.coins,crowdUpgrade:this.crowdUpgrade,strengthUpgrade:this.strengthUpgrade,ownedSkins:this.skins.filter(t=>t.owned).map(t=>t.id),equippedSkin:this.equippedSkin,ownedThemes:this.themes.filter(t=>t.owned).map(t=>t.id),equippedTheme:this.equippedTheme};localStorage.setItem("convergence_vertical_v1",JSON.stringify(e))}loadProgress(){const e=localStorage.getItem("convergence_vertical_v1");if(e){const t=JSON.parse(e);this.level=t.level||1,this.coins=t.coins||0,this.crowdUpgrade=t.crowdUpgrade||1,this.strengthUpgrade=t.strengthUpgrade||1,t.ownedSkins&&this.skins.forEach(n=>{n.owned=t.ownedSkins.includes(n.id)}),t.equippedSkin&&(this.equippedSkin=t.equippedSkin),t.ownedThemes&&this.themes.forEach(n=>{n.owned=t.ownedThemes.includes(n.id)}),t.equippedTheme&&(this.equippedTheme=t.equippedTheme)}}animate(){requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.05);this.update(e),this.renderer.render(this.scene,this.camera)}}try{new fx().init()}catch(r){console.error("Game init failed:",r),document.body.innerHTML=`<div style="color:white;padding:20px;text-align:center;">
        <h2>Error loading game</h2>
        <p>${r.message}</p>
    </div>`}
