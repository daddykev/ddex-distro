(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ih(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},Ws=[],Rn=()=>{},dE=()=>!1,Ml=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ah=t=>t.startsWith("onUpdate:"),lt=Object.assign,Sh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pE=Object.prototype.hasOwnProperty,Ne=(t,e)=>pE.call(t,e),le=Array.isArray,Gs=t=>Lo(t)==="[object Map]",di=t=>Lo(t)==="[object Set]",Wd=t=>Lo(t)==="[object Date]",me=t=>typeof t=="function",Qe=t=>typeof t=="string",On=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",yy=t=>(Le(t)||me(t))&&me(t.then)&&me(t.catch),_y=Object.prototype.toString,Lo=t=>_y.call(t),mE=t=>Lo(t).slice(8,-1),vy=t=>Lo(t)==="[object Object]",Rh=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wi=Ih(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ll=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gE=/-(\w)/g,nn=Ll(t=>t.replace(gE,(e,n)=>n?n.toUpperCase():"")),yE=/\B([A-Z])/g,Ts=Ll(t=>t.replace(yE,"-$1").toLowerCase()),Fl=Ll(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fc=Ll(t=>t?`on${Fl(t)}`:""),xr=(t,e)=>!Object.is(t,e),Da=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wu=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e},_E=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Gd;const Ul=()=>Gd||(Gd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ph(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?wE(r):Ph(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Le(t))return t}const vE=/;(?![^(]*\))/g,bE=/:([^]+)/,EE=/\/\*[^]*?\*\//g;function wE(t){const e={};return t.replace(EE,"").split(vE).forEach(n=>{if(n){const r=n.split(bE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fo(t){let e="";if(Qe(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Fo(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const TE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",IE=Ih(TE);function by(t){return!!t||t===""}function AE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Uo(t[r],e[r]);return n}function Uo(t,e){if(t===e)return!0;let n=Wd(t),r=Wd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=On(t),r=On(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?AE(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Uo(t[o],e[o]))return!1}}return String(t)===String(e)}function Ch(t,e){return t.findIndex(n=>Uo(n,e))}const Ey=t=>!!(t&&t.__v_isRef===!0),$e=t=>Qe(t)?t:t==null?"":le(t)||Le(t)&&(t.toString===_y||!me(t.toString))?Ey(t)?$e(t.value):JSON.stringify(t,wy,2):String(t),wy=(t,e)=>Ey(e)?wy(t,e.value):Gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Uc(r,i)+" =>"]=s,n),{})}:di(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Uc(n))}:On(e)?Uc(e):Le(e)&&!le(e)&&!vy(e)?String(e):e,Uc=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class SE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){this._on>0&&--this._on===0&&(Ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function RE(){return Ft}let Fe;const $c=new WeakSet;class Ty{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$c.has(this)&&($c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ay(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kd(this),Sy(this);const e=Fe,n=dn;Fe=this,dn=!0;try{return this.fn()}finally{Ry(this),Fe=e,dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xh(e);this.deps=this.depsTail=void 0,Kd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tu(this)&&this.run()}get dirty(){return Tu(this)}}let Iy=0,Gi,Ki;function Ay(t,e=!1){if(t.flags|=8,e){t.next=Ki,Ki=t;return}t.next=Gi,Gi=t}function kh(){Iy++}function Nh(){if(--Iy>0)return;if(Ki){let e=Ki;for(Ki=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Gi;){let e=Gi;for(Gi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Sy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ry(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xh(r),PE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Py(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Py(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===mo)||(t.globalVersion=mo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tu(t))))return;t.flags|=2;const e=t.dep,n=Fe,r=dn;Fe=t,dn=!0;try{Sy(t);const s=t.fn(t._value);(e.version===0||xr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Fe=n,dn=r,Ry(t),t.flags&=-3}}function xh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function PE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dn=!0;const Cy=[];function nr(){Cy.push(dn),dn=!1}function rr(){const t=Cy.pop();dn=t===void 0?!0:t}function Kd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let mo=0;class CE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Fe||!dn||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new CE(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,ky(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=r)}return n}trigger(e){this.version++,mo++,this.notify(e)}notify(e){kh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nh()}}}function ky(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ky(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Iu=new WeakMap,fs=Symbol(""),Au=Symbol(""),go=Symbol("");function At(t,e,n){if(dn&&Fe){let r=Iu.get(t);r||Iu.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Dh),s.map=r,s.key=n),s.track()}}function Wn(t,e,n,r,s,i){const o=Iu.get(t);if(!o){mo++;return}const l=c=>{c&&c.trigger()};if(kh(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&Rh(n);if(c&&n==="length"){const f=Number(r);o.forEach((d,m)=>{(m==="length"||m===go||!On(m)&&m>=f)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(go)),e){case"add":c?u&&l(o.get("length")):(l(o.get(fs)),Gs(t)&&l(o.get(Au)));break;case"delete":c||(l(o.get(fs)),Gs(t)&&l(o.get(Au)));break;case"set":Gs(t)&&l(o.get(fs));break}}Nh()}function Ms(t){const e=Ce(t);return e===t?e:(At(e,"iterate",go),tn(t)?e:e.map(mt))}function $l(t){return At(t=Ce(t),"iterate",go),t}const kE={__proto__:null,[Symbol.iterator](){return jc(this,Symbol.iterator,mt)},concat(...t){return Ms(this).concat(...t.map(e=>le(e)?Ms(e):e))},entries(){return jc(this,"entries",t=>(t[1]=mt(t[1]),t))},every(t,e){return Bn(this,"every",t,e,void 0,arguments)},filter(t,e){return Bn(this,"filter",t,e,n=>n.map(mt),arguments)},find(t,e){return Bn(this,"find",t,e,mt,arguments)},findIndex(t,e){return Bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bn(this,"findLast",t,e,mt,arguments)},findLastIndex(t,e){return Bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Bc(this,"includes",t)},indexOf(...t){return Bc(this,"indexOf",t)},join(t){return Ms(this).join(t)},lastIndexOf(...t){return Bc(this,"lastIndexOf",t)},map(t,e){return Bn(this,"map",t,e,void 0,arguments)},pop(){return Di(this,"pop")},push(...t){return Di(this,"push",t)},reduce(t,...e){return Yd(this,"reduce",t,e)},reduceRight(t,...e){return Yd(this,"reduceRight",t,e)},shift(){return Di(this,"shift")},some(t,e){return Bn(this,"some",t,e,void 0,arguments)},splice(...t){return Di(this,"splice",t)},toReversed(){return Ms(this).toReversed()},toSorted(t){return Ms(this).toSorted(t)},toSpliced(...t){return Ms(this).toSpliced(...t)},unshift(...t){return Di(this,"unshift",t)},values(){return jc(this,"values",mt)}};function jc(t,e,n){const r=$l(t),s=r[e]();return r!==t&&!tn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const NE=Array.prototype;function Bn(t,e,n,r,s,i){const o=$l(t),l=o!==t&&!tn(t),c=o[e];if(c!==NE[e]){const d=c.apply(t,i);return l?mt(d):d}let u=n;o!==t&&(l?u=function(d,m){return n.call(this,mt(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const f=c.call(o,u,r);return l&&s?s(f):f}function Yd(t,e,n,r){const s=$l(t);let i=n;return s!==t&&(tn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,mt(l),c,t)}),s[e](i,...r)}function Bc(t,e,n){const r=Ce(t);At(r,"iterate",go);const s=r[e](...n);return(s===-1||s===!1)&&Mh(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Di(t,e,n=[]){nr(),kh();const r=Ce(t)[e].apply(t,n);return Nh(),rr(),r}const xE=Ih("__proto__,__v_isRef,__isVue"),Ny=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On));function DE(t){On(t)||(t=String(t));const e=Ce(this);return At(e,"has",t),e.hasOwnProperty(t)}class xy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zE:My:i?Vy:Oy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=kE[n]))return c;if(n==="hasOwnProperty")return DE}const l=Reflect.get(e,n,Pt(e)?e:r);return(On(n)?Ny.has(n):xE(n))||(s||At(e,"get",n),i)?l:Pt(l)?o&&Rh(n)?l:l.value:Le(l)?s?Fy(l):jl(l):l}}class Dy extends xy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Lr(i);if(!tn(r)&&!Lr(r)&&(i=Ce(i),r=Ce(r)),!le(e)&&Pt(i)&&!Pt(r))return c?!1:(i.value=r,!0)}const o=le(e)&&Rh(n)?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,Pt(e)?e:s);return e===Ce(s)&&(o?xr(r,i)&&Wn(e,"set",n,r):Wn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!On(n)||!Ny.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",le(e)?"length":fs),Reflect.ownKeys(e)}}class OE extends xy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const VE=new Dy,ME=new OE,LE=new Dy(!0);const Su=t=>t,ba=t=>Reflect.getPrototypeOf(t);function FE(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=Gs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?Su:e?Za:mt;return!e&&At(i,"iterate",c?Au:fs),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:l?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function Ea(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function UE(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);t||(xr(s,l)&&At(o,"get",s),At(o,"get",l));const{has:c}=ba(o),u=e?Su:t?Za:mt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(Ce(s),"iterate",fs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);return t||(xr(s,l)&&At(o,"has",s),At(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ce(l),u=e?Su:t?Za:mt;return!t&&At(c,"iterate",fs),l.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return lt(n,t?{add:Ea("add"),set:Ea("set"),delete:Ea("delete"),clear:Ea("clear")}:{add(s){!e&&!tn(s)&&!Lr(s)&&(s=Ce(s));const i=Ce(this);return ba(i).has.call(i,s)||(i.add(s),Wn(i,"add",s,s)),this},set(s,i){!e&&!tn(i)&&!Lr(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=ba(o);let u=l.call(o,s);u||(s=Ce(s),u=l.call(o,s));const f=c.call(o,s);return o.set(s,i),u?xr(i,f)&&Wn(o,"set",s,i):Wn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:l}=ba(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Wn(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Wn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=FE(s,t,e)}),n}function Oh(t,e){const n=UE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const $E={get:Oh(!1,!1)},jE={get:Oh(!1,!0)},BE={get:Oh(!0,!1)};const Oy=new WeakMap,Vy=new WeakMap,My=new WeakMap,zE=new WeakMap;function qE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function HE(t){return t.__v_skip||!Object.isExtensible(t)?0:qE(mE(t))}function jl(t){return Lr(t)?t:Vh(t,!1,VE,$E,Oy)}function Ly(t){return Vh(t,!1,LE,jE,Vy)}function Fy(t){return Vh(t,!0,ME,BE,My)}function Vh(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=HE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Ks(t){return Lr(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function Lr(t){return!!(t&&t.__v_isReadonly)}function tn(t){return!!(t&&t.__v_isShallow)}function Mh(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function WE(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&wu(t,"__v_skip",!0),t}const mt=t=>Le(t)?jl(t):t,Za=t=>Le(t)?Fy(t):t;function Pt(t){return t?t.__v_isRef===!0:!1}function Ze(t){return Uy(t,!1)}function GE(t){return Uy(t,!0)}function Uy(t,e){return Pt(t)?t:new KE(t,e)}class KE{constructor(e,n){this.dep=new Dh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:mt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||tn(e)||Lr(e);e=r?e:Ce(e),xr(e,n)&&(this._rawValue=e,this._value=r?e:mt(e),this.dep.trigger())}}function Pn(t){return Pt(t)?t.value:t}const YE={get:(t,e,n)=>e==="__v_raw"?t:Pn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pt(s)&&!Pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $y(t){return Ks(t)?t:new Proxy(t,YE)}class QE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Dh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return Ay(this,!0),!0}get value(){const e=this.dep.track();return Py(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function XE(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new QE(r,s,n)}const wa={},el=new WeakMap;let is;function JE(t,e=!1,n=is){if(n){let r=el.get(n);r||el.set(n,r=[]),r.push(t)}}function ZE(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=U=>s?U:tn(U)||s===!1||s===0?Gn(U,1):Gn(U);let f,d,m,y,C=!1,k=!1;if(Pt(t)?(d=()=>t.value,C=tn(t)):Ks(t)?(d=()=>u(t),C=!0):le(t)?(k=!0,C=t.some(U=>Ks(U)||tn(U)),d=()=>t.map(U=>{if(Pt(U))return U.value;if(Ks(U))return u(U);if(me(U))return c?c(U,2):U()})):me(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){nr();try{m()}finally{rr()}}const U=is;is=f;try{return c?c(t,3,[y]):t(y)}finally{is=U}}:d=Rn,e&&s){const U=d,ee=s===!0?1/0:s;d=()=>Gn(U(),ee)}const x=RE(),R=()=>{f.stop(),x&&x.active&&Sh(x.effects,f)};if(i&&e){const U=e;e=(...ee)=>{U(...ee),R()}}let N=k?new Array(t.length).fill(wa):wa;const V=U=>{if(!(!(f.flags&1)||!f.dirty&&!U))if(e){const ee=f.run();if(s||C||(k?ee.some((ie,S)=>xr(ie,N[S])):xr(ee,N))){m&&m();const ie=is;is=f;try{const S=[ee,N===wa?void 0:k&&N[0]===wa?[]:N,y];N=ee,c?c(e,3,S):e(...S)}finally{is=ie}}}else f.run()};return l&&l(V),f=new Ty(d),f.scheduler=o?()=>o(V,!1):V,y=U=>JE(U,!1,f),m=f.onStop=()=>{const U=el.get(f);if(U){if(c)c(U,4);else for(const ee of U)ee();el.delete(f)}},e?r?V(!0):N=f.run():o?o(V.bind(null,!0),!0):f.run(),R.pause=f.pause.bind(f),R.resume=f.resume.bind(f),R.stop=R,R}function Gn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pt(t))Gn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)Gn(t[r],e,n);else if(di(t)||Gs(t))t.forEach(r=>{Gn(r,e,n)});else if(vy(t)){for(const r in t)Gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $o(t,e,n,r){try{return r?t(...r):t()}catch(s){Bl(s,e,n)}}function gn(t,e,n,r){if(me(t)){const s=$o(t,e,n,r);return s&&yy(s)&&s.catch(i=>{Bl(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function Bl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,c,u)===!1)return}l=l.parent}if(i){nr(),$o(i,null,10,[t,c,u]),rr();return}}ew(t,n,s,r,o)}function ew(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ot=[];let En=-1;const Ys=[];let Tr=null,Fs=0;const jy=Promise.resolve();let tl=null;function Lh(t){const e=tl||jy;return t?e.then(this?t.bind(this):t):e}function tw(t){let e=En+1,n=Ot.length;for(;e<n;){const r=e+n>>>1,s=Ot[r],i=yo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Fh(t){if(!(t.flags&1)){const e=yo(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=yo(n)?Ot.push(t):Ot.splice(tw(e),0,t),t.flags|=1,By()}}function By(){tl||(tl=jy.then(qy))}function nw(t){le(t)?Ys.push(...t):Tr&&t.id===-1?Tr.splice(Fs+1,0,t):t.flags&1||(Ys.push(t),t.flags|=1),By()}function Qd(t,e,n=En+1){for(;n<Ot.length;n++){const r=Ot[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ot.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zy(t){if(Ys.length){const e=[...new Set(Ys)].sort((n,r)=>yo(n)-yo(r));if(Ys.length=0,Tr){Tr.push(...e);return}for(Tr=e,Fs=0;Fs<Tr.length;Fs++){const n=Tr[Fs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tr=null,Fs=0}}const yo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qy(t){try{for(En=0;En<Ot.length;En++){const e=Ot[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<Ot.length;En++){const e=Ot[En];e&&(e.flags&=-2)}En=-1,Ot.length=0,zy(),tl=null,(Ot.length||Ys.length)&&qy()}}let qt=null,Hy=null;function nl(t){const e=qt;return qt=t,Hy=t&&t.type.__scopeId||null,e}function An(t,e=qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ap(-1);const i=nl(e);let o;try{o=t(...s)}finally{nl(i),r._d&&ap(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dt(t,e){if(qt===null)return t;const n=Kl(qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Me]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ts(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(nr(),gn(c,n,8,[t.el,l,t,e]),rr())}}const rw=Symbol("_vte"),Wy=t=>t.__isTeleport,Ir=Symbol("_leaveCb"),Ta=Symbol("_enterCb");function sw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hl(()=>{t.isMounted=!0}),e_(()=>{t.isUnmounting=!0}),t}const Jt=[Function,Array],Gy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},Ky=t=>{const e=t.subTree;return e.component?Ky(e.component):e},iw={name:"BaseTransition",props:Gy,setup(t,{slots:e}){const n=I_(),r=sw();return()=>{const s=e.default&&Xy(e.default(),!0);if(!s||!s.length)return;const i=Yy(s),o=Ce(t),{mode:l}=o;if(r.isLeaving)return zc(i);const c=Xd(i);if(!c)return zc(i);let u=Ru(c,o,r,n,d=>u=d);c.type!==Vt&&_o(c,u);let f=n.subTree&&Xd(n.subTree);if(f&&f.type!==Vt&&!as(c,f)&&Ky(n).type!==Vt){let d=Ru(f,o,r,n);if(_o(f,d),l==="out-in"&&c.type!==Vt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},zc(i);l==="in-out"&&c.type!==Vt?d.delayLeave=(m,y,C)=>{const k=Qy(r,f);k[String(f.key)]=f,m[Ir]=()=>{y(),m[Ir]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Yy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Vt){e=n;break}}return e}const ow=iw;function Qy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ru(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:y,onAfterLeave:C,onLeaveCancelled:k,onBeforeAppear:x,onAppear:R,onAfterAppear:N,onAppearCancelled:V}=e,U=String(t.key),ee=Qy(n,t),ie=(b,A)=>{b&&gn(b,r,9,A)},S=(b,A)=>{const P=A[1];ie(b,A),le(b)?b.every(I=>I.length<=1)&&P():b.length<=1&&P()},v={mode:o,persisted:l,beforeEnter(b){let A=c;if(!n.isMounted)if(i)A=x||c;else return;b[Ir]&&b[Ir](!0);const P=ee[U];P&&as(t,P)&&P.el[Ir]&&P.el[Ir](),ie(A,[b])},enter(b){let A=u,P=f,I=d;if(!n.isMounted)if(i)A=R||u,P=N||f,I=V||d;else return;let w=!1;const Oe=b[Ta]=tt=>{w||(w=!0,tt?ie(I,[b]):ie(P,[b]),v.delayedLeave&&v.delayedLeave(),b[Ta]=void 0)};A?S(A,[b,Oe]):Oe()},leave(b,A){const P=String(t.key);if(b[Ta]&&b[Ta](!0),n.isUnmounting)return A();ie(m,[b]);let I=!1;const w=b[Ir]=Oe=>{I||(I=!0,A(),Oe?ie(k,[b]):ie(C,[b]),b[Ir]=void 0,ee[P]===t&&delete ee[P])};ee[P]=t,y?S(y,[b,w]):w()},clone(b){const A=Ru(b,e,n,r,s);return s&&s(A),A}};return v}function zc(t){if(zl(t))return t=Ur(t),t.children=null,t}function Xd(t){if(!zl(t))return Wy(t.type)&&t.children?Yy(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&me(n.default))return n.default()}}function _o(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_o(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xy(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===gt?(o.patchFlag&128&&s++,r=r.concat(Xy(o.children,e,l))):(e||o.type!==Vt)&&r.push(l!=null?Ur(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Uh(t,e){return me(t)?lt({name:t.name},e,{setup:t}):t}function Jy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yi(t,e,n,r,s=!1){if(le(t)){t.forEach((C,k)=>Yi(C,e&&(le(e)?e[k]:e),n,r,s));return}if(Qi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Yi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Kl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Me?l.refs={}:l.refs,d=l.setupState,m=Ce(d),y=d===Me?()=>!1:C=>Ne(m,C);if(u!=null&&u!==c&&(Qe(u)?(f[u]=null,y(u)&&(d[u]=null)):Pt(u)&&(u.value=null)),me(c))$o(c,l,12,[o,f]);else{const C=Qe(c),k=Pt(c);if(C||k){const x=()=>{if(t.f){const R=C?y(c)?d[c]:f[c]:c.value;s?le(R)&&Sh(R,i):le(R)?R.includes(i)||R.push(i):C?(f[c]=[i],y(c)&&(d[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else C?(f[c]=o,y(c)&&(d[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,zt(x,n)):x()}}}Ul().requestIdleCallback;Ul().cancelIdleCallback;const Qi=t=>!!t.type.__asyncLoader,zl=t=>t.type.__isKeepAlive;function aw(t,e){Zy(t,"a",e)}function lw(t,e){Zy(t,"da",e)}function Zy(t,e,n=Rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ql(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zl(s.parent.vnode)&&cw(r,e,n,s),s=s.parent}}function cw(t,e,n,r){const s=ql(e,t,r,!0);t_(()=>{Sh(r[e],s)},n)}function ql(t,e,n=Rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nr();const l=jo(n),c=gn(e,n,t,o);return l(),rr(),c});return r?s.unshift(i):s.push(i),i}}const ur=t=>(e,n=Rt)=>{(!bo||t==="sp")&&ql(t,(...r)=>e(...r),n)},uw=ur("bm"),Hl=ur("m"),hw=ur("bu"),fw=ur("u"),e_=ur("bum"),t_=ur("um"),dw=ur("sp"),pw=ur("rtg"),mw=ur("rtc");function gw(t,e=Rt){ql("ec",t,e)}const n_="components";function Fr(t,e){return s_(n_,t,!0,e)||t}const r_=Symbol.for("v-ndc");function yw(t){return Qe(t)?s_(n_,t,!1)||t:t||r_}function s_(t,e,n=!0,r=!1){const s=qt||Rt;if(s){const i=s.type;{const l=rT(i,!1);if(l&&(l===e||l===nn(e)||l===Fl(nn(e))))return i}const o=Jd(s[t]||i[t],e)||Jd(s.appContext[t],e);return!o&&r?i:o}}function Jd(t,e){return t&&(t[e]||t[nn(e)]||t[Fl(nn(e))])}function rl(t,e,n,r){let s;const i=n,o=le(t);if(o||Qe(t)){const l=o&&Ks(t);let c=!1,u=!1;l&&(c=!tn(t),u=Lr(t),t=$l(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(c?u?Za(mt(t[f])):mt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Pu=t=>t?A_(t)?Kl(t):Pu(t.parent):null,Xi=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pu(t.parent),$root:t=>Pu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>o_(t),$forceUpdate:t=>t.f||(t.f=()=>{Fh(t.update)}),$nextTick:t=>t.n||(t.n=Lh.bind(t.proxy)),$watch:t=>Fw.bind(t)}),qc=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ne(t,e),_w={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(qc(r,e))return o[e]=1,r[e];if(s!==Me&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Me&&Ne(n,e))return o[e]=4,n[e];Cu&&(o[e]=0)}}const f=Xi[e];let d,m;if(f)return e==="$attrs"&&At(t.attrs,"get",""),f(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Me&&Ne(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ne(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return qc(s,e)?(s[e]=n,!0):r!==Me&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Me&&Ne(t,o)||qc(e,o)||(l=i[0])&&Ne(l,o)||Ne(r,o)||Ne(Xi,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zd(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cu=!0;function vw(t){const e=o_(t),n=t.proxy,r=t.ctx;Cu=!1,e.beforeCreate&&ep(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:y,updated:C,activated:k,deactivated:x,beforeDestroy:R,beforeUnmount:N,destroyed:V,unmounted:U,render:ee,renderTracked:ie,renderTriggered:S,errorCaptured:v,serverPrefetch:b,expose:A,inheritAttrs:P,components:I,directives:w,filters:Oe}=e;if(u&&bw(u,r,null),o)for(const Te in o){const _e=o[Te];me(_e)&&(r[Te]=_e.bind(n))}if(s){const Te=s.call(n,n);Le(Te)&&(t.data=jl(Te))}if(Cu=!0,i)for(const Te in i){const _e=i[Te],jt=me(_e)?_e.bind(n,n):me(_e.get)?_e.get.bind(n,n):Rn,an=!me(_e)&&me(_e.set)?_e.set.bind(n):Rn,Yt=je({get:jt,set:an});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:He=>Yt.value=He})}if(l)for(const Te in l)i_(l[Te],r,n,Te);if(c){const Te=me(c)?c.call(n):c;Reflect.ownKeys(Te).forEach(_e=>{Ji(_e,Te[_e])})}f&&ep(f,t,"c");function qe(Te,_e){le(_e)?_e.forEach(jt=>Te(jt.bind(n))):_e&&Te(_e.bind(n))}if(qe(uw,d),qe(Hl,m),qe(hw,y),qe(fw,C),qe(aw,k),qe(lw,x),qe(gw,v),qe(mw,ie),qe(pw,S),qe(e_,N),qe(t_,U),qe(dw,b),le(A))if(A.length){const Te=t.exposed||(t.exposed={});A.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>n[_e],set:jt=>n[_e]=jt,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===Rn&&(t.render=ee),P!=null&&(t.inheritAttrs=P),I&&(t.components=I),w&&(t.directives=w),b&&Jy(t)}function bw(t,e,n=Rn){le(t)&&(t=ku(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=pn(s.from||r,s.default,!0):i=pn(s.from||r):i=pn(s),Pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ep(t,e,n){gn(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function i_(t,e,n,r){let s=r.includes(".")?v_(n,r):()=>n[r];if(Qe(t)){const i=e[t];me(i)&&Zi(s,i)}else if(me(t))Zi(s,t.bind(n));else if(Le(t))if(le(t))t.forEach(i=>i_(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Zi(s,i,t)}}function o_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>sl(c,u,o,!0)),sl(c,e,o)),Le(e)&&i.set(e,c),c}function sl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sl(t,i,n,!0),s&&s.forEach(o=>sl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Ew[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ew={data:tp,props:np,emits:np,methods:Fi,computed:Fi,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Fi,directives:Fi,watch:Tw,provide:tp,inject:ww};function tp(t,e){return e?t?function(){return lt(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function ww(t,e){return Fi(ku(t),ku(e))}function ku(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Fi(t,e){return t?lt(Object.create(null),t,e):e}function np(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:lt(Object.create(null),Zd(t),Zd(e??{})):e}function Tw(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function a_(){return{app:null,config:{isNativeTag:dE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Iw=0;function Aw(t,e){return function(r,s=null){me(r)||(r=lt({},r)),s!=null&&!Le(s)&&(s=null);const i=a_(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Iw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iT,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&me(f.install)?(o.add(f),f.install(u,...d)):me(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,m){if(!c){const y=u._ceVNode||re(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),c=!0,u._container=f,f.__vue_app__=u,Kl(y.component)}},onUnmount(f){l.push(f)},unmount(){c&&(gn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Qs;Qs=u;try{return f()}finally{Qs=d}}};return u}}let Qs=null;function Ji(t,e){if(Rt){let n=Rt.provides;const r=Rt.parent&&Rt.parent.provides;r===n&&(n=Rt.provides=Object.create(r)),n[t]=e}}function pn(t,e,n=!1){const r=I_();if(r||Qs){let s=Qs?Qs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const l_={},c_=()=>Object.create(l_),u_=t=>Object.getPrototypeOf(t)===l_;function Sw(t,e,n,r=!1){const s={},i=c_();t.propsDefaults=Object.create(null),h_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ly(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Rw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(Wl(t.emitsOptions,m))continue;const y=e[m];if(c)if(Ne(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const C=nn(m);s[C]=Nu(c,l,C,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{h_(t,e,s,i)&&(u=!0);let f;for(const d in l)(!e||!Ne(e,d)&&((f=Ts(d))===d||!Ne(e,f)))&&(c?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Nu(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!Ne(e,d))&&(delete i[d],u=!0)}u&&Wn(t.attrs,"set","")}function h_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Wi(c))continue;const u=e[c];let f;s&&Ne(s,f=nn(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:Wl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ce(n),u=l||Me;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Nu(s,c,d,u[d],t,!Ne(u,d))}}return o}function Nu(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ne(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=jo(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Ts(n))&&(r=!0))}return r}const Pw=new WeakMap;function f_(t,e,n=!1){const r=n?Pw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const f=d=>{c=!0;const[m,y]=f_(d,e,!0);lt(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Le(t)&&r.set(t,Ws),Ws;if(le(i))for(let f=0;f<i.length;f++){const d=nn(i[f]);rp(d)&&(o[d]=Me)}else if(i)for(const f in i){const d=nn(f);if(rp(d)){const m=i[f],y=o[d]=le(m)||me(m)?{type:m}:lt({},m),C=y.type;let k=!1,x=!0;if(le(C))for(let R=0;R<C.length;++R){const N=C[R],V=me(N)&&N.name;if(V==="Boolean"){k=!0;break}else V==="String"&&(x=!1)}else k=me(C)&&C.name==="Boolean";y[0]=k,y[1]=x,(k||Ne(y,"default"))&&l.push(d)}}const u=[o,l];return Le(t)&&r.set(t,u),u}function rp(t){return t[0]!=="$"&&!Wi(t)}const $h=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",jh=t=>le(t)?t.map(Tn):[Tn(t)],Cw=(t,e,n)=>{if(e._n)return e;const r=An((...s)=>jh(e(...s)),n);return r._c=!1,r},d_=(t,e,n)=>{const r=t._ctx;for(const s in t){if($h(s))continue;const i=t[s];if(me(i))e[s]=Cw(s,i,r);else if(i!=null){const o=jh(i);e[s]=()=>o}}},p_=(t,e)=>{const n=jh(e);t.slots.default=()=>n},m_=(t,e,n)=>{for(const r in e)(n||!$h(r))&&(t[r]=e[r])},kw=(t,e,n)=>{const r=t.slots=c_();if(t.vnode.shapeFlag&32){const s=e.__;s&&wu(r,"__",s,!0);const i=e._;i?(m_(r,e,n),n&&wu(r,"_",i,!0)):d_(e,r)}else e&&p_(t,e)},Nw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:m_(s,e,n):(i=!e.$stable,d_(e,s)),o=e}else e&&(p_(t,e),o={default:1});if(i)for(const l in s)!$h(l)&&o[l]==null&&delete s[l]},zt=Hw;function xw(t){return Dw(t)}function Dw(t,e){const n=Ul();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:y=Rn,insertStaticContent:C}=t,k=(E,T,D,F=null,B=null,$=null,Q=void 0,G=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!as(E,T)&&(F=L(E),He(E,B,$,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Y}=T;switch(q){case Gl:x(E,T,D,F);break;case Vt:R(E,T,D,F);break;case Oa:E==null&&N(T,D,F,Q);break;case gt:I(E,T,D,F,B,$,Q,G,W);break;default:Y&1?ee(E,T,D,F,B,$,Q,G,W):Y&6?w(E,T,D,F,B,$,Q,G,W):(Y&64||Y&128)&&q.process(E,T,D,F,B,$,Q,G,W,te)}oe!=null&&B?Yi(oe,E&&E.ref,$,T||E,!T):oe==null&&E&&E.ref!=null&&Yi(E.ref,null,$,E,!0)},x=(E,T,D,F)=>{if(E==null)r(T.el=l(T.children),D,F);else{const B=T.el=E.el;T.children!==E.children&&u(B,T.children)}},R=(E,T,D,F)=>{E==null?r(T.el=c(T.children||""),D,F):T.el=E.el},N=(E,T,D,F)=>{[E.el,E.anchor]=C(E.children,T,D,F,E.el,E.anchor)},V=({el:E,anchor:T},D,F)=>{let B;for(;E&&E!==T;)B=m(E),r(E,D,F),E=B;r(T,D,F)},U=({el:E,anchor:T})=>{let D;for(;E&&E!==T;)D=m(E),s(E),E=D;s(T)},ee=(E,T,D,F,B,$,Q,G,W)=>{T.type==="svg"?Q="svg":T.type==="math"&&(Q="mathml"),E==null?ie(T,D,F,B,$,Q,G,W):b(E,T,B,$,Q,G,W)},ie=(E,T,D,F,B,$,Q,G)=>{let W,q;const{props:oe,shapeFlag:Y,transition:ne,dirs:de}=E;if(W=E.el=o(E.type,$,oe&&oe.is,oe),Y&8?f(W,E.children):Y&16&&v(E.children,W,null,F,B,Hc(E,$),Q,G),de&&ts(E,null,F,"created"),S(W,E,E.scopeId,Q,F),oe){for(const ye in oe)ye!=="value"&&!Wi(ye)&&i(W,ye,null,oe[ye],$,F);"value"in oe&&i(W,"value",null,oe.value,$),(q=oe.onVnodeBeforeMount)&&bn(q,F,E)}de&&ts(E,null,F,"beforeMount");const ue=Ow(B,ne);ue&&ne.beforeEnter(W),r(W,T,D),((q=oe&&oe.onVnodeMounted)||ue||de)&&zt(()=>{q&&bn(q,F,E),ue&&ne.enter(W),de&&ts(E,null,F,"mounted")},B)},S=(E,T,D,F,B)=>{if(D&&y(E,D),F)for(let $=0;$<F.length;$++)y(E,F[$]);if(B){let $=B.subTree;if(T===$||E_($.type)&&($.ssContent===T||$.ssFallback===T)){const Q=B.vnode;S(E,Q,Q.scopeId,Q.slotScopeIds,B.parent)}}},v=(E,T,D,F,B,$,Q,G,W=0)=>{for(let q=W;q<E.length;q++){const oe=E[q]=G?Ar(E[q]):Tn(E[q]);k(null,oe,T,D,F,B,$,Q,G)}},b=(E,T,D,F,B,$,Q)=>{const G=T.el=E.el;let{patchFlag:W,dynamicChildren:q,dirs:oe}=T;W|=E.patchFlag&16;const Y=E.props||Me,ne=T.props||Me;let de;if(D&&ns(D,!1),(de=ne.onVnodeBeforeUpdate)&&bn(de,D,T,E),oe&&ts(T,E,D,"beforeUpdate"),D&&ns(D,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&f(G,""),q?A(E.dynamicChildren,q,G,D,F,Hc(T,B),$):Q||_e(E,T,G,null,D,F,Hc(T,B),$,!1),W>0){if(W&16)P(G,Y,ne,D,B);else if(W&2&&Y.class!==ne.class&&i(G,"class",null,ne.class,B),W&4&&i(G,"style",Y.style,ne.style,B),W&8){const ue=T.dynamicProps;for(let ye=0;ye<ue.length;ye++){const Ie=ue[ye],ct=Y[Ie],ut=ne[Ie];(ut!==ct||Ie==="value")&&i(G,Ie,ct,ut,B,D)}}W&1&&E.children!==T.children&&f(G,T.children)}else!Q&&q==null&&P(G,Y,ne,D,B);((de=ne.onVnodeUpdated)||oe)&&zt(()=>{de&&bn(de,D,T,E),oe&&ts(T,E,D,"updated")},F)},A=(E,T,D,F,B,$,Q)=>{for(let G=0;G<T.length;G++){const W=E[G],q=T[G],oe=W.el&&(W.type===gt||!as(W,q)||W.shapeFlag&198)?d(W.el):D;k(W,q,oe,null,F,B,$,Q,!0)}},P=(E,T,D,F,B)=>{if(T!==D){if(T!==Me)for(const $ in T)!Wi($)&&!($ in D)&&i(E,$,T[$],null,B,F);for(const $ in D){if(Wi($))continue;const Q=D[$],G=T[$];Q!==G&&$!=="value"&&i(E,$,G,Q,B,F)}"value"in D&&i(E,"value",T.value,D.value,B)}},I=(E,T,D,F,B,$,Q,G,W)=>{const q=T.el=E?E.el:l(""),oe=T.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:de}=T;de&&(G=G?G.concat(de):de),E==null?(r(q,D,F),r(oe,D,F),v(T.children||[],D,oe,B,$,Q,G,W)):Y>0&&Y&64&&ne&&E.dynamicChildren?(A(E.dynamicChildren,ne,D,B,$,Q,G),(T.key!=null||B&&T===B.subTree)&&g_(E,T,!0)):_e(E,T,D,oe,B,$,Q,G,W)},w=(E,T,D,F,B,$,Q,G,W)=>{T.slotScopeIds=G,E==null?T.shapeFlag&512?B.ctx.activate(T,D,F,Q,W):Oe(T,D,F,B,$,Q,W):tt(E,T,W)},Oe=(E,T,D,F,B,$,Q)=>{const G=E.component=Jw(E,F,B);if(zl(E)&&(G.ctx.renderer=te),Zw(G,!1,Q),G.asyncDep){if(B&&B.registerDep(G,qe,Q),!E.el){const W=G.subTree=re(Vt);R(null,W,T,D),E.placeholder=W.el}}else qe(G,E,T,D,B,$,Q)},tt=(E,T,D)=>{const F=T.component=E.component;if(zw(E,T,D))if(F.asyncDep&&!F.asyncResolved){Te(F,T,D);return}else F.next=T,F.update();else T.el=E.el,F.vnode=T},qe=(E,T,D,F,B,$,Q)=>{const G=()=>{if(E.isMounted){let{next:Y,bu:ne,u:de,parent:ue,vnode:ye}=E;{const vt=y_(E);if(vt){Y&&(Y.el=ye.el,Te(E,Y,Q)),vt.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Ie=Y,ct;ns(E,!1),Y?(Y.el=ye.el,Te(E,Y,Q)):Y=ye,ne&&Da(ne),(ct=Y.props&&Y.props.onVnodeBeforeUpdate)&&bn(ct,ue,Y,ye),ns(E,!0);const ut=ip(E),Qt=E.subTree;E.subTree=ut,k(Qt,ut,d(Qt.el),L(Qt),E,B,$),Y.el=ut.el,Ie===null&&qw(E,ut.el),de&&zt(de,B),(ct=Y.props&&Y.props.onVnodeUpdated)&&zt(()=>bn(ct,ue,Y,ye),B)}else{let Y;const{el:ne,props:de}=T,{bm:ue,m:ye,parent:Ie,root:ct,type:ut}=E,Qt=Qi(T);ns(E,!1),ue&&Da(ue),!Qt&&(Y=de&&de.onVnodeBeforeMount)&&bn(Y,Ie,T),ns(E,!0);{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(ut);const vt=E.subTree=ip(E);k(null,vt,D,F,E,B,$),T.el=vt.el}if(ye&&zt(ye,B),!Qt&&(Y=de&&de.onVnodeMounted)){const vt=T;zt(()=>bn(Y,Ie,vt),B)}(T.shapeFlag&256||Ie&&Qi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&zt(E.a,B),E.isMounted=!0,T=D=F=null}};E.scope.on();const W=E.effect=new Ty(G);E.scope.off();const q=E.update=W.run.bind(W),oe=E.job=W.runIfDirty.bind(W);oe.i=E,oe.id=E.uid,W.scheduler=()=>Fh(oe),ns(E,!0),q()},Te=(E,T,D)=>{T.component=E;const F=E.vnode.props;E.vnode=T,E.next=null,Rw(E,T.props,F,D),Nw(E,T.children,D),nr(),Qd(E),rr()},_e=(E,T,D,F,B,$,Q,G,W=!1)=>{const q=E&&E.children,oe=E?E.shapeFlag:0,Y=T.children,{patchFlag:ne,shapeFlag:de}=T;if(ne>0){if(ne&128){an(q,Y,D,F,B,$,Q,G,W);return}else if(ne&256){jt(q,Y,D,F,B,$,Q,G,W);return}}de&8?(oe&16&&Lt(q,B,$),Y!==q&&f(D,Y)):oe&16?de&16?an(q,Y,D,F,B,$,Q,G,W):Lt(q,B,$,!0):(oe&8&&f(D,""),de&16&&v(Y,D,F,B,$,Q,G,W))},jt=(E,T,D,F,B,$,Q,G,W)=>{E=E||Ws,T=T||Ws;const q=E.length,oe=T.length,Y=Math.min(q,oe);let ne;for(ne=0;ne<Y;ne++){const de=T[ne]=W?Ar(T[ne]):Tn(T[ne]);k(E[ne],de,D,null,B,$,Q,G,W)}q>oe?Lt(E,B,$,!0,!1,Y):v(T,D,F,B,$,Q,G,W,Y)},an=(E,T,D,F,B,$,Q,G,W)=>{let q=0;const oe=T.length;let Y=E.length-1,ne=oe-1;for(;q<=Y&&q<=ne;){const de=E[q],ue=T[q]=W?Ar(T[q]):Tn(T[q]);if(as(de,ue))k(de,ue,D,null,B,$,Q,G,W);else break;q++}for(;q<=Y&&q<=ne;){const de=E[Y],ue=T[ne]=W?Ar(T[ne]):Tn(T[ne]);if(as(de,ue))k(de,ue,D,null,B,$,Q,G,W);else break;Y--,ne--}if(q>Y){if(q<=ne){const de=ne+1,ue=de<oe?T[de].el:F;for(;q<=ne;)k(null,T[q]=W?Ar(T[q]):Tn(T[q]),D,ue,B,$,Q,G,W),q++}}else if(q>ne)for(;q<=Y;)He(E[q],B,$,!0),q++;else{const de=q,ue=q,ye=new Map;for(q=ue;q<=ne;q++){const ht=T[q]=W?Ar(T[q]):Tn(T[q]);ht.key!=null&&ye.set(ht.key,q)}let Ie,ct=0;const ut=ne-ue+1;let Qt=!1,vt=0;const gr=new Array(ut);for(q=0;q<ut;q++)gr[q]=0;for(q=de;q<=Y;q++){const ht=E[q];if(ct>=ut){He(ht,B,$,!0);continue}let Xt;if(ht.key!=null)Xt=ye.get(ht.key);else for(Ie=ue;Ie<=ne;Ie++)if(gr[Ie-ue]===0&&as(ht,T[Ie])){Xt=Ie;break}Xt===void 0?He(ht,B,$,!0):(gr[Xt-ue]=q+1,Xt>=vt?vt=Xt:Qt=!0,k(ht,T[Xt],D,null,B,$,Q,G,W),ct++)}const bi=Qt?Vw(gr):Ws;for(Ie=bi.length-1,q=ut-1;q>=0;q--){const ht=ue+q,Xt=T[ht],sa=T[ht+1],Ns=ht+1<oe?sa.el||sa.placeholder:F;gr[q]===0?k(null,Xt,D,Ns,B,$,Q,G,W):Qt&&(Ie<0||q!==bi[Ie]?Yt(Xt,D,Ns,2):Ie--)}}},Yt=(E,T,D,F,B=null)=>{const{el:$,type:Q,transition:G,children:W,shapeFlag:q}=E;if(q&6){Yt(E.component.subTree,T,D,F);return}if(q&128){E.suspense.move(T,D,F);return}if(q&64){Q.move(E,T,D,te);return}if(Q===gt){r($,T,D);for(let Y=0;Y<W.length;Y++)Yt(W[Y],T,D,F);r(E.anchor,T,D);return}if(Q===Oa){V(E,T,D);return}if(F!==2&&q&1&&G)if(F===0)G.beforeEnter($),r($,T,D),zt(()=>G.enter($),B);else{const{leave:Y,delayLeave:ne,afterLeave:de}=G,ue=()=>{E.ctx.isUnmounted?s($):r($,T,D)},ye=()=>{Y($,()=>{ue(),de&&de()})};ne?ne($,ue,ye):ye()}else r($,T,D)},He=(E,T,D,F=!1,B=!1)=>{const{type:$,props:Q,ref:G,children:W,dynamicChildren:q,shapeFlag:oe,patchFlag:Y,dirs:ne,cacheIndex:de}=E;if(Y===-2&&(B=!1),G!=null&&(nr(),Yi(G,null,D,E,!0),rr()),de!=null&&(T.renderCache[de]=void 0),oe&256){T.ctx.deactivate(E);return}const ue=oe&1&&ne,ye=!Qi(E);let Ie;if(ye&&(Ie=Q&&Q.onVnodeBeforeUnmount)&&bn(Ie,T,E),oe&6)vn(E.component,D,F);else{if(oe&128){E.suspense.unmount(D,F);return}ue&&ts(E,null,T,"beforeUnmount"),oe&64?E.type.remove(E,T,D,te,F):q&&!q.hasOnce&&($!==gt||Y>0&&Y&64)?Lt(q,T,D,!1,!0):($===gt&&Y&384||!B&&oe&16)&&Lt(W,T,D),F&&We(E)}(ye&&(Ie=Q&&Q.onVnodeUnmounted)||ue)&&zt(()=>{Ie&&bn(Ie,T,E),ue&&ts(E,null,T,"unmounted")},D)},We=E=>{const{type:T,el:D,anchor:F,transition:B}=E;if(T===gt){mr(D,F);return}if(T===Oa){U(E);return}const $=()=>{s(D),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(E.shapeFlag&1&&B&&!B.persisted){const{leave:Q,delayLeave:G}=B,W=()=>Q(D,$);G?G(E.el,$,W):W()}else $()},mr=(E,T)=>{let D;for(;E!==T;)D=m(E),s(E),E=D;s(T)},vn=(E,T,D)=>{const{bum:F,scope:B,job:$,subTree:Q,um:G,m:W,a:q,parent:oe,slots:{__:Y}}=E;sp(W),sp(q),F&&Da(F),oe&&le(Y)&&Y.forEach(ne=>{oe.renderCache[ne]=void 0}),B.stop(),$&&($.flags|=8,He(Q,E,T,D)),G&&zt(G,T),zt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Lt=(E,T,D,F=!1,B=!1,$=0)=>{for(let Q=$;Q<E.length;Q++)He(E[Q],T,D,F,B)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),D=T&&T[rw];return D?m(D):T};let J=!1;const X=(E,T,D)=>{E==null?T._vnode&&He(T._vnode,null,null,!0):k(T._vnode||null,E,T,null,null,null,D),T._vnode=E,J||(J=!0,Qd(),zy(),J=!1)},te={p:k,um:He,m:Yt,r:We,mt:Oe,mc:v,pc:_e,pbc:A,n:L,o:t};return{render:X,hydrate:void 0,createApp:Aw(X)}}function Hc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ns({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ow(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function g_(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Ar(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&g_(o,l)),l.type===Gl&&(l.el=o.el),l.type===Vt&&!l.el&&(l.el=o.el)}}function Vw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function y_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:y_(e)}function sp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mw=Symbol.for("v-scx"),Lw=()=>pn(Mw);function Zi(t,e,n){return __(t,e,n)}function __(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,l=lt({},n),c=e&&r||!e&&i!=="post";let u;if(bo){if(i==="sync"){const y=Lw();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Rn,y.resume=Rn,y.pause=Rn,y}}const f=Rt;l.call=(y,C,k)=>gn(y,f,C,k);let d=!1;i==="post"?l.scheduler=y=>{zt(y,f&&f.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(y,C)=>{C?y():Fh(y)}),l.augmentJob=y=>{e&&(y.flags|=4),d&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=ZE(t,e,l);return bo&&(u?u.push(m):c&&m()),m}function Fw(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?v_(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=jo(this),l=__(s,i.bind(r),n);return o(),l}function v_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Uw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${Ts(e)}Modifiers`];function $w(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&Uw(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Qe(f)?f.trim():f)),o.number&&(s=n.map(Ja)));let l,c=r[l=Fc(e)]||r[l=Fc(nn(e))];!c&&i&&(c=r[l=Fc(Ts(e))]),c&&gn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,gn(u,t,6,s)}}function b_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=u=>{const f=b_(u,e,!0);f&&(l=!0,lt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):lt(o,i),Le(t)&&r.set(t,o),o)}function Wl(t,e){return!t||!Ml(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Ts(e))||Ne(t,e))}function ip(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:d,data:m,setupState:y,ctx:C,inheritAttrs:k}=t,x=nl(t);let R,N;try{if(n.shapeFlag&4){const U=s||r,ee=U;R=Tn(u.call(ee,U,f,d,y,m,C)),N=l}else{const U=e;R=Tn(U.length>1?U(d,{attrs:l,slots:o,emit:c}):U(d,null)),N=e.props?l:jw(l)}}catch(U){eo.length=0,Bl(U,t,1),R=re(Vt)}let V=R;if(N&&k!==!1){const U=Object.keys(N),{shapeFlag:ee}=V;U.length&&ee&7&&(i&&U.some(Ah)&&(N=Bw(N,i)),V=Ur(V,N,!1,!0))}return n.dirs&&(V=Ur(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&_o(V,n.transition),R=V,nl(x),R}const jw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ml(n))&&((e||(e={}))[n]=t[n]);return e},Bw=(t,e)=>{const n={};for(const r in t)(!Ah(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?op(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!Wl(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?op(r,o,u):!0:!!o;return!1}function op(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wl(n,i))return!0}return!1}function qw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const E_=t=>t.__isSuspense;function Hw(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):nw(t)}const gt=Symbol.for("v-fgt"),Gl=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),Oa=Symbol.for("v-stc"),eo=[];let Ht=null;function Se(t=!1){eo.push(Ht=t?null:[])}function Ww(){eo.pop(),Ht=eo[eo.length-1]||null}let vo=1;function ap(t,e=!1){vo+=t,t<0&&Ht&&e&&(Ht.hasOnce=!0)}function w_(t){return t.dynamicChildren=vo>0?Ht||Ws:null,Ww(),vo>0&&Ht&&Ht.push(t),t}function De(t,e,n,r,s,i){return w_(_(t,e,n,r,s,i,!0))}function il(t,e,n,r,s){return w_(re(t,e,n,r,s,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function as(t,e){return t.type===e.type&&t.key===e.key}const T_=({key:t})=>t??null,Va=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Pt(t)||me(t)?{i:qt,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,r=0,s=null,i=t===gt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&T_(e),ref:e&&Va(e),scopeId:Hy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qt};return l?(Bh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),vo>0&&!o&&Ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ht.push(c),c}const re=Gw;function Gw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===r_)&&(t=Vt),ol(t)){const l=Ur(t,e,!0);return n&&Bh(l,n),vo>0&&!i&&Ht&&(l.shapeFlag&6?Ht[Ht.indexOf(t)]=l:Ht.push(l)),l.patchFlag=-2,l}if(sT(t)&&(t=t.__vccOpts),e){e=Kw(e);let{class:l,style:c}=e;l&&!Qe(l)&&(e.class=Fo(l)),Le(c)&&(Mh(c)&&!le(c)&&(c=lt({},c)),e.style=Ph(c))}const o=Qe(t)?1:E_(t)?128:Wy(t)?64:Le(t)?4:me(t)?2:0;return _(t,e,n,r,s,o,i,!0)}function Kw(t){return t?Mh(t)||u_(t)?lt({},t):t:null}function Ur(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Yw(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&T_(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Va(e)):[i,Va(e)]:Va(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&_o(f,c.clone(f)),f}function nt(t=" ",e=0){return re(Gl,null,t,e)}function Ma(t,e){const n=re(Oa,null,t);return n.staticCount=e,n}function Kn(t="",e=!1){return e?(Se(),il(Vt,null,t)):re(Vt,null,t)}function Tn(t){return t==null||typeof t=="boolean"?re(Vt):le(t)?re(gt,null,t.slice()):ol(t)?Ar(t):re(Gl,null,String(t))}function Ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function Bh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Bh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!u_(e)?e._ctx=qt:s===3&&qt&&(qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:qt},n=32):(e=String(e),r&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fo([e.class,r.class]));else if(s==="style")e.style=Ph([e.style,r.style]);else if(Ml(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function bn(t,e,n,r=null){gn(t,e,7,[n,r])}const Qw=a_();let Xw=0;function Jw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qw,i={uid:Xw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new SE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:f_(r,s),emitsOptions:b_(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$w.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const I_=()=>Rt||qt;let al,xu;{const t=Ul(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};al=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),xu=e("__VUE_SSR_SETTERS__",n=>bo=n)}const jo=t=>{const e=Rt;return al(t),t.scope.on(),()=>{t.scope.off(),al(e)}},lp=()=>{Rt&&Rt.scope.off(),al(null)};function A_(t){return t.vnode.shapeFlag&4}let bo=!1;function Zw(t,e=!1,n=!1){e&&xu(e);const{props:r,children:s}=t.vnode,i=A_(t);Sw(t,r,i,e),kw(t,s,n||e);const o=i?eT(t,e):void 0;return e&&xu(!1),o}function eT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_w);const{setup:r}=n;if(r){nr();const s=t.setupContext=r.length>1?nT(t):null,i=jo(t),o=$o(r,t,0,[t.props,s]),l=yy(o);if(rr(),i(),(l||t.sp)&&!Qi(t)&&Jy(t),l){if(o.then(lp,lp),e)return o.then(c=>{cp(t,c)}).catch(c=>{Bl(c,t,0)});t.asyncDep=o}else cp(t,o)}else S_(t)}function cp(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=$y(e)),S_(t)}function S_(t,e,n){const r=t.type;t.render||(t.render=r.render||Rn);{const s=jo(t);nr();try{vw(t)}finally{rr(),s()}}}const tT={get(t,e){return At(t,"get",""),t[e]}};function nT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tT),slots:t.slots,emit:t.emit,expose:e}}function Kl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($y(WE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xi)return Xi[n](t)},has(e,n){return n in e||n in Xi}})):t.proxy}function rT(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function sT(t){return me(t)&&"__vccOpts"in t}const je=(t,e)=>XE(t,e,bo);function Yl(t,e,n){const r=arguments.length;return r===2?Le(e)&&!le(e)?ol(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ol(n)&&(n=[n]),re(t,e,n))}const iT="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Du;const up=typeof window<"u"&&window.trustedTypes;if(up)try{Du=up.createPolicy("vue",{createHTML:t=>t})}catch{}const R_=Du?t=>Du.createHTML(t):t=>t,oT="http://www.w3.org/2000/svg",aT="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,hp=Hn&&Hn.createElement("template"),lT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Hn.createElementNS(oT,t):e==="mathml"?Hn.createElementNS(aT,t):n?Hn.createElement(t,{is:n}):Hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hp.innerHTML=R_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=hp.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},br="transition",Oi="animation",Eo=Symbol("_vtc"),P_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cT=lt({},Gy,P_),uT=t=>(t.displayName="Transition",t.props=cT,t),zh=uT((t,{slots:e})=>Yl(ow,hT(t),e)),rs=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},fp=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function hT(t){const e={};for(const I in t)I in P_||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:f=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,C=fT(s),k=C&&C[0],x=C&&C[1],{onBeforeEnter:R,onEnter:N,onEnterCancelled:V,onLeave:U,onLeaveCancelled:ee,onBeforeAppear:ie=R,onAppear:S=N,onAppearCancelled:v=V}=e,b=(I,w,Oe,tt)=>{I._enterCancelled=tt,ss(I,w?f:l),ss(I,w?u:o),Oe&&Oe()},A=(I,w)=>{I._isLeaving=!1,ss(I,d),ss(I,y),ss(I,m),w&&w()},P=I=>(w,Oe)=>{const tt=I?S:N,qe=()=>b(w,I,Oe);rs(tt,[w,qe]),dp(()=>{ss(w,I?c:i),zn(w,I?f:l),fp(tt)||pp(w,r,k,qe)})};return lt(e,{onBeforeEnter(I){rs(R,[I]),zn(I,i),zn(I,o)},onBeforeAppear(I){rs(ie,[I]),zn(I,c),zn(I,u)},onEnter:P(!1),onAppear:P(!0),onLeave(I,w){I._isLeaving=!0;const Oe=()=>A(I,w);zn(I,d),I._enterCancelled?(zn(I,m),yp()):(yp(),zn(I,m)),dp(()=>{I._isLeaving&&(ss(I,d),zn(I,y),fp(U)||pp(I,r,x,Oe))}),rs(U,[I,Oe])},onEnterCancelled(I){b(I,!1,void 0,!0),rs(V,[I])},onAppearCancelled(I){b(I,!0,void 0,!0),rs(v,[I])},onLeaveCancelled(I){A(I),rs(ee,[I])}})}function fT(t){if(t==null)return null;if(Le(t))return[Wc(t.enter),Wc(t.leave)];{const e=Wc(t);return[e,e]}}function Wc(t){return _E(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Eo]||(t[Eo]=new Set)).add(e)}function ss(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Eo];n&&(n.delete(e),n.size||(t[Eo]=void 0))}function dp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let dT=0;function pp(t,e,n,r){const s=t._endId=++dT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=pT(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,m),i()},m=y=>{y.target===t&&++f>=c&&d()};setTimeout(()=>{f<c&&d()},l+1),t.addEventListener(u,m)}function pT(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${br}Delay`),i=r(`${br}Duration`),o=mp(s,i),l=r(`${Oi}Delay`),c=r(`${Oi}Duration`),u=mp(l,c);let f=null,d=0,m=0;e===br?o>0&&(f=br,d=o,m=i.length):e===Oi?u>0&&(f=Oi,d=u,m=c.length):(d=Math.max(o,u),f=d>0?o>u?br:Oi:null,m=f?f===br?i.length:c.length:0);const y=f===br&&/\b(transform|all)(,|$)/.test(r(`${br}Property`).toString());return{type:f,timeout:d,propCount:m,hasTransform:y}}function mp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>gp(n)+gp(t[r])))}function gp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yp(){return document.body.offsetHeight}function mT(t,e,n){const r=t[Eo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _p=Symbol("_vod"),gT=Symbol("_vsh"),yT=Symbol(""),_T=/(^|;)\s*display\s*:/;function vT(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&La(r,l,"")}else for(const o in e)n[o]==null&&La(r,o,"");for(const o in n)o==="display"&&(i=!0),La(r,o,n[o])}else if(s){if(e!==n){const o=r[yT];o&&(n+=";"+o),r.cssText=n,i=_T.test(n)}}else e&&t.removeAttribute("style");_p in t&&(t[_p]=i?r.display:"",t[gT]&&(r.display="none"))}const vp=/\s*!important$/;function La(t,e,n){if(le(n))n.forEach(r=>La(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bT(t,e);vp.test(n)?t.setProperty(Ts(r),n.replace(vp,""),"important"):t[r]=n}}const bp=["Webkit","Moz","ms"],Gc={};function bT(t,e){const n=Gc[e];if(n)return n;let r=nn(e);if(r!=="filter"&&r in t)return Gc[e]=r;r=Fl(r);for(let s=0;s<bp.length;s++){const i=bp[s]+r;if(i in t)return Gc[e]=i}return e}const Ep="http://www.w3.org/1999/xlink";function wp(t,e,n,r,s,i=IE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ep,e.slice(6,e.length)):t.setAttributeNS(Ep,e,n):n==null||i&&!by(n)?t.removeAttribute(e):t.setAttribute(e,i?"":On(n)?String(n):n)}function Tp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?R_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=by(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Rr(t,e,n,r){t.addEventListener(e,n,r)}function ET(t,e,n,r){t.removeEventListener(e,n,r)}const Ip=Symbol("_vei");function wT(t,e,n,r,s=null){const i=t[Ip]||(t[Ip]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=TT(e);if(r){const u=i[e]=ST(r,s);Rr(t,l,u,c)}else o&&(ET(t,l,o,c),i[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function TT(t){let e;if(Ap.test(t)){e={};let r;for(;r=t.match(Ap);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ts(t.slice(2)),e]}let Kc=0;const IT=Promise.resolve(),AT=()=>Kc||(IT.then(()=>Kc=0),Kc=Date.now());function ST(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(RT(r,n.value),e,5,[r])};return n.value=t,n.attached=AT(),n}function RT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,PT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?mT(t,r,o):e==="style"?vT(t,n,r):Ml(e)?Ah(e)||wT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CT(t,e,r,o))?(Tp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?Tp(t,nn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wp(t,e,r,o))};function CT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sp(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sp(e)&&Qe(n)?!1:e in t}const ni=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Da(e,n):e};function kT(t){t.target.composing=!0}function Rp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zn=Symbol("_assign"),Qn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zn]=ni(s);const i=r||s.props&&s.props.type==="number";Rr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ja(l)),t[Zn](l)}),n&&Rr(t,"change",()=>{t.value=t.value.trim()}),e||(Rr(t,"compositionstart",kT),Rr(t,"compositionend",Rp),Rr(t,"change",Rp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zn]=ni(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ja(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Us={deep:!0,created(t,e,n){t[Zn]=ni(n),Rr(t,"change",()=>{const r=t._modelValue,s=wo(t),i=t.checked,o=t[Zn];if(le(r)){const l=Ch(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(di(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(C_(t,i))})},mounted:Pp,beforeUpdate(t,e,n){t[Zn]=ni(n),Pp(t,e,n)}};function Pp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Ch(e,r.props.value)>-1;else if(di(e))s=e.has(r.props.value);else{if(e===n)return;s=Uo(e,C_(t,!0))}t.checked!==s&&(t.checked=s)}const Cp={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=di(e);Rr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ja(wo(o)):wo(o));t[Zn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Lh(()=>{t._assigning=!1})}),t[Zn]=ni(r)},mounted(t,{value:e}){kp(t,e)},beforeUpdate(t,e,n){t[Zn]=ni(n)},updated(t,{value:e}){t._assigning||kp(t,e)}};function kp(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!di(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=wo(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Ch(e,l)>-1}else o.selected=e.has(l);else if(Uo(wo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wo(t){return"_value"in t?t._value:t.value}function C_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const NT=["ctrl","shift","alt","meta"],xT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>NT.some(n=>t[`${n}Key`]&&!e.includes(n))},Fa=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=xT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},DT=lt({patchProp:PT},lT);let Np;function OT(){return Np||(Np=xw(DT))}const VT=(...t)=>{const e=OT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=LT(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,MT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function MT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function LT(t){return Qe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const $s=typeof document<"u";function k_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function FT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&k_(t.default)}const ke=Object.assign;function Yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=yn(s)?s.map(t):t(s)}return n}const to=()=>{},yn=Array.isArray,N_=/#/g,UT=/&/g,$T=/\//g,jT=/=/g,BT=/\?/g,x_=/\+/g,zT=/%5B/g,qT=/%5D/g,D_=/%5E/g,HT=/%60/g,O_=/%7B/g,WT=/%7C/g,V_=/%7D/g,GT=/%20/g;function qh(t){return encodeURI(""+t).replace(WT,"|").replace(zT,"[").replace(qT,"]")}function KT(t){return qh(t).replace(O_,"{").replace(V_,"}").replace(D_,"^")}function Ou(t){return qh(t).replace(x_,"%2B").replace(GT,"+").replace(N_,"%23").replace(UT,"%26").replace(HT,"`").replace(O_,"{").replace(V_,"}").replace(D_,"^")}function YT(t){return Ou(t).replace(jT,"%3D")}function QT(t){return qh(t).replace(N_,"%23").replace(BT,"%3F")}function XT(t){return t==null?"":QT(t).replace($T,"%2F")}function To(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const JT=/\/$/,ZT=t=>t.replace(JT,"");function Qc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=rI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:To(o)}}function eI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ri(e.matched[r],n.matched[s])&&M_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ri(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function M_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nI(t[n],e[n]))return!1;return!0}function nI(t,e){return yn(t)?Dp(t,e):yn(e)?Dp(e,t):t===e}function Dp(t,e){return yn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Io;(function(t){t.pop="pop",t.push="push"})(Io||(Io={}));var no;(function(t){t.back="back",t.forward="forward",t.unknown=""})(no||(no={}));function sI(t){if(!t)if($s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ZT(t)}const iI=/^[^#]+#/;function oI(t,e){return t.replace(iI,"#")+e}function aI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ql=()=>({left:window.scrollX,top:window.scrollY});function lI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Op(t,e){return(history.state?history.state.position-e:-1)+t}const Vu=new Map;function cI(t,e){Vu.set(t,e)}function uI(t){const e=Vu.get(t);return Vu.delete(t),e}let hI=()=>location.protocol+"//"+location.host;function L_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),xp(c,"")}return xp(n,t)+r+s}function fI(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=L_(t,location),C=n.value,k=e.value;let x=0;if(m){if(n.value=y,e.value=m,o&&o===C){o=null;return}x=k?m.position-k.position:0}else r(y);s.forEach(R=>{R(n.value,C,{delta:x,type:Io.pop,direction:x?x>0?no.forward:no.back:no.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:Ql()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Vp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ql():null}}function dI(t){const{history:e,location:n}=window,r={value:L_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:hI()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(c,u){const f=ke({},e.state,Vp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=ke({},s.value,e.state,{forward:c,scroll:Ql()});i(f.current,f,!0);const d=ke({},Vp(r.value,c,null),{position:f.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pI(t){t=sI(t);const e=dI(t),n=fI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:oI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mI(t){return typeof t=="string"||t&&typeof t=="object"}function F_(t){return typeof t=="string"||typeof t=="symbol"}const U_=Symbol("");var Mp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mp||(Mp={}));function si(t,e){return ke(new Error,{type:t,[U_]:!0},e)}function qn(t,e){return t instanceof Error&&U_ in t&&(e==null||!!(t.type&e))}const Lp="[^/]+?",gI={sensitive:!1,strict:!1,start:!0,end:!0},yI=/[.+*?^${}()[\]/\\]/g;function _I(t,e){const n=ke({},gI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let y=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(yI,"\\$&"),y+=40;else if(m.type===1){const{value:C,repeatable:k,optional:x,regexp:R}=m;i.push({name:C,repeatable:k,optional:x});const N=R||Lp;if(N!==Lp){y+=10;try{new RegExp(`(${N})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${C}" (${N}): `+U.message)}}let V=k?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(V=x&&u.length<2?`(?:/${V})`:"/"+V),x&&(V+="?"),s+=V,y+=20,x&&(y+=-8),k&&(y+=-20),N===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(o),d={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",C=i[m-1];d[C.name]=y&&C.repeatable?y.split("/"):y}return d}function c(u){let f="",d=!1;for(const m of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const y of m)if(y.type===0)f+=y.value;else if(y.type===1){const{value:C,repeatable:k,optional:x}=y,R=C in u?u[C]:"";if(yn(R)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const N=yn(R)?R.join("/"):R;if(!N)if(x)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function vI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Fp(r))return 1;if(Fp(s))return-1}return s.length-r.length}function Fp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bI={type:0,value:""},EI=/[a-zA-Z0-9_]/;function wI(t){if(!t)return[[]];if(t==="/")return[[bI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:EI.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function TI(t,e,n){const r=_I(wI(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function II(t,e){const n=[],r=new Map;e=Bp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,y){const C=!y,k=$p(d);k.aliasOf=y&&y.record;const x=Bp(e,d),R=[k];if("alias"in d){const U=typeof d.alias=="string"?[d.alias]:d.alias;for(const ee of U)R.push($p(ke({},k,{components:y?y.record.components:k.components,path:ee,aliasOf:y?y.record:k})))}let N,V;for(const U of R){const{path:ee}=U;if(m&&ee[0]!=="/"){const ie=m.record.path,S=ie[ie.length-1]==="/"?"":"/";U.path=m.record.path+(ee&&S+ee)}if(N=TI(U,m,x),y?y.alias.push(N):(V=V||N,V!==N&&V.alias.push(N),C&&d.name&&!jp(N)&&o(d.name)),j_(N)&&c(N),k.children){const ie=k.children;for(let S=0;S<ie.length;S++)i(ie[S],N,y&&y.children[S])}y=y||N}return V?()=>{o(V)}:to}function o(d){if(F_(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const m=RI(d,n);n.splice(m,0,d),d.record.name&&!jp(d)&&r.set(d.record.name,d)}function u(d,m){let y,C={},k,x;if("name"in d&&d.name){if(y=r.get(d.name),!y)throw si(1,{location:d});x=y.record.name,C=ke(Up(m.params,y.keys.filter(V=>!V.optional).concat(y.parent?y.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),d.params&&Up(d.params,y.keys.map(V=>V.name))),k=y.stringify(C)}else if(d.path!=null)k=d.path,y=n.find(V=>V.re.test(k)),y&&(C=y.parse(k),x=y.record.name);else{if(y=m.name?r.get(m.name):n.find(V=>V.re.test(m.path)),!y)throw si(1,{location:d,currentLocation:m});x=y.record.name,C=ke({},m.params,d.params),k=y.stringify(C)}const R=[];let N=y;for(;N;)R.unshift(N.record),N=N.parent;return{name:x,path:k,params:C,matched:R,meta:SI(R)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function Up(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $p(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:AI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function AI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function jp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function SI(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Bp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function RI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$_(t,e[i])<0?r=i:n=i+1}const s=PI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function PI(t){let e=t;for(;e=e.parent;)if(j_(e)&&$_(t,e)===0)return e}function j_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function CI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(x_," "),o=i.indexOf("="),l=To(o<0?i:i.slice(0,o)),c=o<0?null:To(i.slice(o+1));if(l in e){let u=e[l];yn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function zp(t){let e="";for(let n in t){const r=t[n];if(n=YT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(yn(r)?r.map(i=>i&&Ou(i)):[r&&Ou(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=yn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const NI=Symbol(""),qp=Symbol(""),Xl=Symbol(""),Hh=Symbol(""),Mu=Symbol("");function Vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(si(4,{from:n,to:e})):m instanceof Error?c(m):mI(m)?c(si(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Xc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(k_(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Sr(f,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=FT(f)?f.default:f;o.mods[l]=f,o.components[l]=d;const y=(d.__vccOpts||d)[e];return y&&Sr(y,n,r,o,l,s)()}))}}return i}function Hp(t){const e=pn(Xl),n=pn(Hh),r=je(()=>{const c=Pn(t.to);return e.resolve(c)}),s=je(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],d=n.matched;if(!f||!d.length)return-1;const m=d.findIndex(ri.bind(null,f));if(m>-1)return m;const y=Wp(c[u-2]);return u>1&&Wp(f)===y&&d[d.length-1].path!==y?d.findIndex(ri.bind(null,c[u-2])):m}),i=je(()=>s.value>-1&&MI(n.params,r.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&M_(n.params,r.value.params));function l(c={}){if(VI(c)){const u=e[Pn(t.replace)?"replace":"push"](Pn(t.to)).catch(to);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function xI(t){return t.length===1?t[0]:t}const DI=Uh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Hp,setup(t,{slots:e}){const n=jl(Hp(t)),{options:r}=pn(Xl),s=je(()=>({[Gp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&xI(e.default(n));return t.custom?i:Yl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),OI=DI;function VI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!yn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Gp=(t,e,n)=>t??e??n,LI=Uh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pn(Mu),s=je(()=>t.route||r.value),i=pn(qp,0),o=je(()=>{let u=Pn(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),l=je(()=>s.value.matched[o.value]);Ji(qp,je(()=>o.value+1)),Ji(NI,l),Ji(Mu,s);const c=Ze();return Zi(()=>[c.value,l.value,t.name],([u,f,d],[m,y,C])=>{f&&(f.instances[d]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!ri(f,y)||!m)&&(f.enterCallbacks[d]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=l.value,m=d&&d.components[f];if(!m)return Kp(n.default,{Component:m,route:u});const y=d.props[f],C=y?y===!0?u.params:typeof y=="function"?y(u):y:null,x=Yl(m,ke({},C,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[f]=null)},ref:c}));return Kp(n.default,{Component:x,route:u})||x}}});function Kp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const B_=LI;function FI(t){const e=II(t.routes,t),n=t.parseQuery||CI,r=t.stringifyQuery||zp,s=t.history,i=Vi(),o=Vi(),l=Vi(),c=GE(Er);let u=Er;$s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Yc.bind(null,L=>""+L),d=Yc.bind(null,XT),m=Yc.bind(null,To);function y(L,J){let X,te;return F_(L)?(X=e.getRecordMatcher(L),te=J):te=L,e.addRoute(te,X)}function C(L){const J=e.getRecordMatcher(L);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(L=>L.record)}function x(L){return!!e.getRecordMatcher(L)}function R(L,J){if(J=ke({},J||c.value),typeof L=="string"){const D=Qc(n,L,J.path),F=e.resolve({path:D.path},J),B=s.createHref(D.fullPath);return ke(D,F,{params:m(F.params),hash:To(D.hash),redirectedFrom:void 0,href:B})}let X;if(L.path!=null)X=ke({},L,{path:Qc(n,L.path,J.path).path});else{const D=ke({},L.params);for(const F in D)D[F]==null&&delete D[F];X=ke({},L,{params:d(D)}),J.params=d(J.params)}const te=e.resolve(X,J),Re=L.hash||"";te.params=f(m(te.params));const E=eI(r,ke({},L,{hash:KT(Re),path:te.path})),T=s.createHref(E);return ke({fullPath:E,hash:Re,query:r===zp?kI(L.query):L.query||{}},te,{redirectedFrom:void 0,href:T})}function N(L){return typeof L=="string"?Qc(n,L,c.value.path):ke({},L)}function V(L,J){if(u!==L)return si(8,{from:J,to:L})}function U(L){return S(L)}function ee(L){return U(ke(N(L),{replace:!0}))}function ie(L){const J=L.matched[L.matched.length-1];if(J&&J.redirect){const{redirect:X}=J;let te=typeof X=="function"?X(L):X;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=N(te):{path:te},te.params={}),ke({query:L.query,hash:L.hash,params:te.path!=null?{}:L.params},te)}}function S(L,J){const X=u=R(L),te=c.value,Re=L.state,E=L.force,T=L.replace===!0,D=ie(X);if(D)return S(ke(N(D),{state:typeof D=="object"?ke({},Re,D.state):Re,force:E,replace:T}),J||X);const F=X;F.redirectedFrom=J;let B;return!E&&tI(r,te,X)&&(B=si(16,{to:F,from:te}),Yt(te,te,!0,!1)),(B?Promise.resolve(B):A(F,te)).catch($=>qn($)?qn($,2)?$:an($):_e($,F,te)).then($=>{if($){if(qn($,2))return S(ke({replace:T},N($.to),{state:typeof $.to=="object"?ke({},Re,$.to.state):Re,force:E}),J||F)}else $=I(F,te,!0,T,Re);return P(F,te,$),$})}function v(L,J){const X=V(L,J);return X?Promise.reject(X):Promise.resolve()}function b(L){const J=mr.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(L):L()}function A(L,J){let X;const[te,Re,E]=UI(L,J);X=Xc(te.reverse(),"beforeRouteLeave",L,J);for(const D of te)D.leaveGuards.forEach(F=>{X.push(Sr(F,L,J))});const T=v.bind(null,L,J);return X.push(T),Lt(X).then(()=>{X=[];for(const D of i.list())X.push(Sr(D,L,J));return X.push(T),Lt(X)}).then(()=>{X=Xc(Re,"beforeRouteUpdate",L,J);for(const D of Re)D.updateGuards.forEach(F=>{X.push(Sr(F,L,J))});return X.push(T),Lt(X)}).then(()=>{X=[];for(const D of E)if(D.beforeEnter)if(yn(D.beforeEnter))for(const F of D.beforeEnter)X.push(Sr(F,L,J));else X.push(Sr(D.beforeEnter,L,J));return X.push(T),Lt(X)}).then(()=>(L.matched.forEach(D=>D.enterCallbacks={}),X=Xc(E,"beforeRouteEnter",L,J,b),X.push(T),Lt(X))).then(()=>{X=[];for(const D of o.list())X.push(Sr(D,L,J));return X.push(T),Lt(X)}).catch(D=>qn(D,8)?D:Promise.reject(D))}function P(L,J,X){l.list().forEach(te=>b(()=>te(L,J,X)))}function I(L,J,X,te,Re){const E=V(L,J);if(E)return E;const T=J===Er,D=$s?history.state:{};X&&(te||T?s.replace(L.fullPath,ke({scroll:T&&D&&D.scroll},Re)):s.push(L.fullPath,Re)),c.value=L,Yt(L,J,X,T),an()}let w;function Oe(){w||(w=s.listen((L,J,X)=>{if(!vn.listening)return;const te=R(L),Re=ie(te);if(Re){S(ke(Re,{replace:!0,force:!0}),te).catch(to);return}u=te;const E=c.value;$s&&cI(Op(E.fullPath,X.delta),Ql()),A(te,E).catch(T=>qn(T,12)?T:qn(T,2)?(S(ke(N(T.to),{force:!0}),te).then(D=>{qn(D,20)&&!X.delta&&X.type===Io.pop&&s.go(-1,!1)}).catch(to),Promise.reject()):(X.delta&&s.go(-X.delta,!1),_e(T,te,E))).then(T=>{T=T||I(te,E,!1),T&&(X.delta&&!qn(T,8)?s.go(-X.delta,!1):X.type===Io.pop&&qn(T,20)&&s.go(-1,!1)),P(te,E,T)}).catch(to)}))}let tt=Vi(),qe=Vi(),Te;function _e(L,J,X){an(L);const te=qe.list();return te.length?te.forEach(Re=>Re(L,J,X)):console.error(L),Promise.reject(L)}function jt(){return Te&&c.value!==Er?Promise.resolve():new Promise((L,J)=>{tt.add([L,J])})}function an(L){return Te||(Te=!L,Oe(),tt.list().forEach(([J,X])=>L?X(L):J()),tt.reset()),L}function Yt(L,J,X,te){const{scrollBehavior:Re}=t;if(!$s||!Re)return Promise.resolve();const E=!X&&uI(Op(L.fullPath,0))||(te||!X)&&history.state&&history.state.scroll||null;return Lh().then(()=>Re(L,J,E)).then(T=>T&&lI(T)).catch(T=>_e(T,L,J))}const He=L=>s.go(L);let We;const mr=new Set,vn={currentRoute:c,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:R,options:t,push:U,replace:ee,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:qe.add,isReady:jt,install(L){const J=this;L.component("RouterLink",OI),L.component("RouterView",B_),L.config.globalProperties.$router=J,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Pn(c)}),$s&&!We&&c.value===Er&&(We=!0,U(s.location).catch(Re=>{}));const X={};for(const Re in Er)Object.defineProperty(X,Re,{get:()=>c.value[Re],enumerable:!0});L.provide(Xl,J),L.provide(Hh,Ly(X)),L.provide(Mu,c);const te=L.unmount;mr.add(L),L.unmount=function(){mr.delete(L),mr.size<1&&(u=Er,w&&w(),w=null,c.value=Er,We=!1,Te=!1),te()}}};function Lt(L){return L.reduce((J,X)=>J.then(()=>b(X)),Promise.resolve())}return vn}function UI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ri(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ri(u,c))||s.push(c))}return[n,r,s]}function Bo(){return pn(Xl)}function $I(t){return pn(Hh)}const jI=()=>{};var Yp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[f],n[d],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new zI;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),d!==64){const C=u<<6&192|d;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qI=function(t){const e=z_(t);return q_.encodeByteArray(e,!0)},ll=function(t){return qI(t).replace(/\./g,"")},H_=function(t){try{return q_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=()=>HI().__FIREBASE_DEFAULTS__,GI=()=>{if(typeof process>"u"||typeof Yp>"u")return;const t=Yp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&H_(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return jI()||WI()||GI()||KI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},W_=t=>Jl()?.emulatorHosts?.[t],Wh=t=>{const e=W_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},G_=()=>Jl()?.config,K_=t=>Jl()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zl(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ll(JSON.stringify(n)),ll(JSON.stringify(o)),""].join(".")}const ro={};function QI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function XI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qp=!1;function ec(t,e){if(typeof window>"u"||typeof document>"u"||!Qr(window.location.host)||ro[t]===e||ro[t]||Qp)return;ro[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=QI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Qp=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function d(){const m=XI(r),y=n("text"),C=document.getElementById(y)||document.createElement("span"),k=n("learnmore"),x=document.getElementById(k)||document.createElement("a"),R=n("preprendIcon"),N=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const V=m.element;l(V),f(x,k);const U=u();c(N,R),V.append(N,C,x,U),document.body.appendChild(V)}i?(C.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function ZI(){const t=Jl()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Q_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nA(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rA(){return!ZI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function X_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function sA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iA,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?oA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new on(s,l,r)}}function oA(t,e){return t.replace(aA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const aA=/\{\$([^}]+)}/g;function lA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xp(i)&&Xp(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ui(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cA(t,e){const n=new uA(t,e);return n.subscribe.bind(n)}class uA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jc),s.error===void 0&&(s.error=Jc),s.complete===void 0&&(s.complete=Jc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=1e3,dA=2,pA=14400*1e3,mA=.5;function Jp(t,e=fA,n=dA){const r=e*Math.pow(n,t),s=Math.round(mA*r*(Math.random()-.5)*2);return Math.min(pA,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_A(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yA(t){return t===os?void 0:t}function _A(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const bA={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},EA=ve.INFO,wA={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},TA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=EA,this._logHandler=TA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const IA=(t,e)=>e.some(n=>t instanceof n);let Zp,em;function AA(){return Zp||(Zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SA(){return em||(em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Z_=new WeakMap,Lu=new WeakMap,ev=new WeakMap,Zc=new WeakMap,Gh=new WeakMap;function RA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Z_.set(n,t)}).catch(()=>{}),Gh.set(e,t),e}function PA(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let Fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ev.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CA(t){Fu=t(Fu)}function kA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eu(this),e,...n);return ev.set(r,e.sort?e.sort():[e]),Dr(r)}:SA().includes(t)?function(...e){return t.apply(eu(this),e),Dr(Z_.get(this))}:function(...e){return Dr(t.apply(eu(this),e))}}function NA(t){return typeof t=="function"?kA(t):(t instanceof IDBTransaction&&PA(t),IA(t,AA())?new Proxy(t,Fu):t)}function Dr(t){if(t instanceof IDBRequest)return RA(t);if(Zc.has(t))return Zc.get(t);const e=NA(t);return e!==t&&(Zc.set(t,e),Gh.set(e,t)),e}const eu=t=>Gh.get(t);function tv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Dr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dr(o.result),c.oldVersion,c.newVersion,Dr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const xA=["get","getKey","getAll","getAllKeys","count"],DA=["put","add","delete","clear"],tu=new Map;function tm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tu.get(e))return tu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=DA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xA.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return tu.set(e,i),i}CA(t=>({...t,get:(e,n,r)=>tm(e,n)||t.get(e,n,r),has:(e,n)=>!!tm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VA(t){return t.getComponent()?.type==="VERSION"}const Uu="@firebase/app",nm="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new tc("@firebase/app"),MA="@firebase/app-compat",LA="@firebase/analytics-compat",FA="@firebase/analytics",UA="@firebase/app-check-compat",$A="@firebase/app-check",jA="@firebase/auth",BA="@firebase/auth-compat",zA="@firebase/database",qA="@firebase/data-connect",HA="@firebase/database-compat",WA="@firebase/functions",GA="@firebase/functions-compat",KA="@firebase/installations",YA="@firebase/installations-compat",QA="@firebase/messaging",XA="@firebase/messaging-compat",JA="@firebase/performance",ZA="@firebase/performance-compat",e2="@firebase/remote-config",t2="@firebase/remote-config-compat",n2="@firebase/storage",r2="@firebase/storage-compat",s2="@firebase/firestore",i2="@firebase/ai",o2="@firebase/firestore-compat",a2="firebase",l2="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="[DEFAULT]",c2={[Uu]:"fire-core",[MA]:"fire-core-compat",[FA]:"fire-analytics",[LA]:"fire-analytics-compat",[$A]:"fire-app-check",[UA]:"fire-app-check-compat",[jA]:"fire-auth",[BA]:"fire-auth-compat",[zA]:"fire-rtdb",[qA]:"fire-data-connect",[HA]:"fire-rtdb-compat",[WA]:"fire-fn",[GA]:"fire-fn-compat",[KA]:"fire-iid",[YA]:"fire-iid-compat",[QA]:"fire-fcm",[XA]:"fire-fcm-compat",[JA]:"fire-perf",[ZA]:"fire-perf-compat",[e2]:"fire-rc",[t2]:"fire-rc-compat",[n2]:"fire-gcs",[r2]:"fire-gcs-compat",[s2]:"fire-fst",[o2]:"fire-fst-compat",[i2]:"fire-vertex","fire-js":"fire-js",[a2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Map,u2=new Map,ju=new Map;function rm(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rn(t){const e=t.name;if(ju.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;ju.set(e,t);for(const n of cl.values())rm(n,t);for(const n of u2.values())rm(n,t);return!0}function hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new Is("app","Firebase",h2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=l2;function nv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:$u,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Or.create("bad-app-name",{appName:String(s)});if(n||(n=G_()),!n)throw Or.create("no-options");const i=cl.get(s);if(i){if($r(n,i.options)&&$r(r,i.config))return i;throw Or.create("duplicate-app",{appName:s})}const o=new vA(s);for(const c of ju.values())o.addComponent(c);const l=new f2(n,r,o);return cl.set(s,l),l}function qo(t=$u){const e=cl.get(t);if(!e&&t===$u&&G_())return nv();if(!e)throw Or.create("no-app",{appName:t});return e}function Ct(t,e,n){let r=c2[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(o.join(" "));return}rn(new Gt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="firebase-heartbeat-database",p2=1,Ao="firebase-heartbeat-store";let nu=null;function rv(){return nu||(nu=tv(d2,p2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),nu}async function m2(t){try{const n=(await rv()).transaction(Ao),r=await n.objectStore(Ao).get(sv(t));return await n.done,r}catch(e){if(e instanceof on)sr.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e?.message});sr.warn(n.message)}}}async function sm(t,e){try{const r=(await rv()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,sv(t)),await r.done}catch(n){if(n instanceof on)sr.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n?.message});sr.warn(r.message)}}}function sv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=1024,y2=30;class _2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=im();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>y2){const s=E2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){sr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=im(),{heartbeatsToSend:n,unsentEntries:r}=v2(this._heartbeatsCache.heartbeats),s=ll(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return sr.warn(e),""}}}function im(){return new Date().toISOString().substring(0,10)}function v2(t,e=g2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),om(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),om(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class b2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await m2(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return sm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function om(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}function E2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t){rn(new Gt("platform-logger",e=>new OA(e),"PRIVATE")),rn(new Gt("heartbeat",e=>new _2(e),"PRIVATE")),Ct(Uu,nm,t),Ct(Uu,nm,"esm2020"),Ct("fire-js","")}w2("");var T2="firebase",I2="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(T2,I2,"app");function iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A2=iv,ov=new Is("auth","Firebase",iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new tc("@firebase/auth");function S2(t,...e){ul.logLevel<=ve.WARN&&ul.warn(`Auth (${As}): ${t}`,...e)}function Ua(t,...e){ul.logLevel<=ve.ERROR&&ul.error(`Auth (${As}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw Yh(t,...e)}function mn(t,...e){return Yh(t,...e)}function Kh(t,e,n){const r={...A2(),[e]:n};return new Is("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return Kh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function R2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),Kh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ov.create(t,...e)}function he(t,e,...n){if(!t)throw Yh(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function ir(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){return typeof self<"u"&&self.location?.href||""}function P2(){return am()==="http:"||am()==="https:"}function am(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P2()||Q_()||"connection"in navigator)?navigator.onLine:!0}function k2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=JI()||tA()}get(){return C2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],D2=new Ho(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fn(t,e,n,r,s={}){return lv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=zo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return eA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Qr(t.emulatorConfig.host)&&(u.credentials="include"),av.fetch()(await cv(t,t.config.apiHost,n,l),u)})}async function lv(t,e,n){t._canInitEmulator=!1;const r={...N2,...e};try{const s=new V2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ia(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kh(t,f,u);sn(t,f)}}catch(s){if(s instanceof on)throw s;sn(t,"network-request-failed",{message:String(s)})}}async function Wo(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function cv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Qh(t.config,s):`${t.config.apiScheme}://${s}`;return x2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function O2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),D2.get())})}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}function lm(t){return t!==void 0&&t.enterprise!==void 0}class M2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return O2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function L2(t,e){return Fn(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function hl(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U2(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Xh(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:so(ru(s.auth_time)),issuedAtTime:so(ru(s.iat)),expirationTime:so(ru(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ru(t){return Number(t)*1e3}function Xh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const s=H_(n);return s?JSON.parse(s):(Ua("Failed to decode base64 JWT payload"),null)}catch(s){return Ua("Caught error parsing JWT payload as JSON",s?.toString()),null}}function cm(t){const e=Xh(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&$2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t){const e=t.auth,n=await t.getIdToken(),r=await ii(t,hl(e,{idToken:n}));he(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?uv(s.providerUserInfo):[],o=z2(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function B2(t){const e=it(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q2(t,e){const n=await lv(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await cv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Qr(t.emulatorConfig.host)&&(c.credentials="include"),av.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function H2(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=cm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await q2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xs;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new j2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U2(this,e)}reload(){return B2(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await ii(this,F2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:y,providerData:C,stsTokenManager:k}=n;he(d&&k,e,"internal-error");const x=Xs.fromJSON(this.name,k);he(typeof d=="string",e,"internal-error"),wr(r,e.name),wr(s,e.name),he(typeof m=="boolean",e,"internal-error"),he(typeof y=="boolean",e,"internal-error"),wr(i,e.name),wr(o,e.name),wr(l,e.name),wr(c,e.name),wr(u,e.name),wr(f,e.name);const R=new cn({uid:d,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:x,createdAt:u,lastLoginAt:f});return C&&Array.isArray(C)&&(R.providerData=C.map(N=>({...N}))),c&&(R._redirectEventId=c),R}static async _fromIdTokenResponse(e,n,r=!1){const s=new Xs;s.updateFromServerResponse(n);const i=new cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?uv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new Xs;l.updateFromIdToken(r);const c=new cn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=new Map;function Jn(t){ir(t instanceof Function,"Expected a class definition");let e=um.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,um.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hv.type="NONE";const hm=hv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$a(this.userKey,s.apiKey,i),this.fullPersistenceKey=$a("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hl(this.auth,{idToken:e}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,e):null}return cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(Jn(hm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Jn(hm);const o=$a(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const m=await hl(e,{idToken:f}).catch(()=>{});if(!m)break;d=await cn._fromGetAccountInfoResponse(e,m,f)}else d=cn._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Js(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Js(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yv(e))return"Blackberry";if(_v(e))return"Webos";if(dv(e))return"Safari";if((e.includes("chrome/")||pv(e))&&!e.includes("edge/"))return"Chrome";if(gv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function fv(t=kt()){return/firefox\//i.test(t)}function dv(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pv(t=kt()){return/crios\//i.test(t)}function mv(t=kt()){return/iemobile/i.test(t)}function gv(t=kt()){return/android/i.test(t)}function yv(t=kt()){return/blackberry/i.test(t)}function _v(t=kt()){return/webos/i.test(t)}function Jh(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W2(t=kt()){return Jh(t)&&!!window.navigator?.standalone}function G2(){return nA()&&document.documentMode===10}function vv(t=kt()){return Jh(t)||gv(t)||_v(t)||yv(t)||/windows phone/i.test(t)||mv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e=[]){let n;switch(t){case"Browser":n=fm(kt());break;case"Worker":n=`${fm(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=6;class X2{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Q2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dm(this),this.idTokenSubscription=new dm(this),this.beforeStateQueue=new K2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ov,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hl(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Mt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(er(this));const n=e?it(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Y2(this),n=new X2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await H2(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&S2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function dr(t){return it(t)}class dm{constructor(e){this.auth=e,this.observer=null,this.addObserver=cA(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Z2(t){nc=t}function Ev(t){return nc.loadJS(t)}function eS(){return nc.recaptchaEnterpriseScript}function tS(){return nc.gapiScript}function nS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class rS{constructor(){this.enterprise=new sS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class sS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const iS="recaptcha-enterprise",wv="NO_RECAPTCHA";class oS{constructor(e){this.type=iS,this.auth=dr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{L2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new M2(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;lm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(wv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&lm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=eS();c.length!==0&&(c+=l),Ev(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function pm(t,e,n,r=!1,s=!1){const i=new oS(t);let o;if(s)o=wv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function dl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await pm(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e){const n=hr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;sn(s,"already-initialized")}return n.initialize({options:e})}function lS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Jn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function cS(t,e,n){const r=dr(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Tv(e),{host:o,port:l}=uS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he($r(u,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Qr(o)?(Zl(`${i}//${o}${c}`),ec("Auth",!0)):hS()}function Tv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uS(t){const e=Tv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mm(o)}}}function mm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function fS(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}async function pS(t,e){return Fn(t,"POST","/v1/accounts:sendOobCode",fr(t,e))}async function mS(t,e){return pS(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function yS(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Zh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new So(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new So(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,n,"signInWithPassword",dS);case"emailLink":return gS(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,r,"signUpPassword",fS);case"emailLink":return yS(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="http://localhost";class ms extends Zh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ms(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:_S,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bS(t){const e=Ui($i(t)).link,n=e?Ui($i(e)).deep_link_id:null,r=Ui($i(t)).deep_link_id;return(r?Ui($i(r)).link:null)||r||n||e||t}class ef{constructor(e){const n=Ui($i(e)),r=n.apiKey??null,s=n.oobCode??null,i=vS(n.mode??null);he(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=bS(e);try{return new ef(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return So._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ef.parseLink(n);return he(r,"argument-error"),So._fromEmailAndCode(e,r.code,r.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends tf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Go{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ms._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Go{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Go{constructor(){super("twitter.com")}static credential(e,n){return ms._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return Wo(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await cn._fromIdTokenResponse(e,r,s),o=gm(r);return new gs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gm(r);return new gs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends on{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pl(e,n,r,s)}}function Iv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,i,e,r):i})}async function wS(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await ii(t,Iv(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Xh(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),gs._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(t,e,n=!1){if(Mt(t.app))return Promise.reject(er(t));const r="signIn",s=await Iv(t,r,e),i=await gs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function IS(t,e){return Av(dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AS(t,e,n){const r=dr(t);await dl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",mS)}async function SS(t,e,n){if(Mt(t.app))return Promise.reject(er(t));const r=dr(t),o=await dl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ES).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Sv(t),c}),l=await gs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function RS(t,e,n){return Mt(t.app)?Promise.reject(er(t)):IS(it(t),pi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sv(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=it(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ii(r,PS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kS(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function NS(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function xS(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function DS(t){return it(t).signOut()}const ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ml,"1"),this.storage.removeItem(ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=1e3,VS=10;class Pv extends Rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);G2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pv.type="LOCAL";const MS=Pv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends Rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cv.type="SESSION";const kv=Cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await LS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=nf("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function US(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function $S(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jS(){return navigator?.serviceWorker?.controller||null}function BS(){return Nv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="firebaseLocalStorageDb",zS=1,gl="firebaseLocalStorage",Dv="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function qS(){const t=indexedDB.deleteDatabase(xv);return new Ko(t).toPromise()}function qu(){const t=indexedDB.open(xv,zS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gl,{keyPath:Dv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gl)?e(r):(r.close(),await qS(),e(await qu()))})})}async function ym(t,e,n){const r=sc(t,!0).put({[Dv]:e,value:n});return new Ko(r).toPromise()}async function HS(t,e){const n=sc(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function _m(t,e){const n=sc(t,!0).delete(e);return new Ko(n).toPromise()}const WS=800,GS=3;class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(BS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await $S(),!this.activeServiceWorker)return;this.sender=new FS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qu();return await ym(e,ml,"1"),await _m(e,ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ym(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new Ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ov.type="LOCAL";const KS=Ov;new Ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t,e){return e?Jn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends Zh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YS(t){return Av(t.auth,new rf(t),t.bypassAuthState)}function QS(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),TS(n,new rf(t),t.bypassAuthState)}async function XS(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),wS(n,new rf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YS;case"linkViaPopup":case"linkViaRedirect":return XS;case"reauthViaPopup":case"reauthViaRedirect":return QS;default:sn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Ho(2e3,1e4);async function Lv(t,e,n){if(Mt(t.app))return Promise.reject(mn(t,"operation-not-supported-in-this-environment"));const r=dr(t);R2(t,e,tf);const s=Vv(r,n);return new ls(r,"signInViaPopup",e,s).executeNotNull()}class ls extends Mv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JS.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="pendingRedirect",ja=new Map;class eR extends Mv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const r=await tR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tR(t,e){const n=sR(e),r=rR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nR(t,e){ja.set(t._key(),e)}function rR(t){return Jn(t._redirectPersistence)}function sR(t){return $a(ZS,t.config.apiKey,t.name)}async function iR(t,e,n=!1){if(Mt(t.app))return Promise.reject(er(t));const r=dr(t),s=Vv(r,e),o=await new eR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=600*1e3;class aR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Fv(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(mn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oR&&this.cachedEventUids.clear(),this.cachedEventUids.has(vm(e))}saveEventToCache(e){this.cachedEventUids.add(vm(e)),this.lastProcessedEventTime=Date.now()}}function vm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function lR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hR=/^https?/;async function fR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cR(t);for(const n of e)try{if(dR(n))return}catch{}sn(t,"unauthorized-domain")}function dR(t){const e=Bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hR.test(n))return!1;if(uR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new Ho(3e4,6e4);function bm(){const t=Cn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mR(t){return new Promise((e,n)=>{function r(){bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bm(),n(mn(t,"network-request-failed"))},timeout:pR.get()})}if(Cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Cn().gapi?.load)r();else{const s=nS("iframefcb");return Cn()[s]=()=>{gapi.load?r():n(mn(t,"network-request-failed"))},Ev(`${tS()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function gR(t){return Ba=Ba||mR(t),Ba}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=new Ho(5e3,15e3),_R="__/auth/iframe",vR="emulator/auth/iframe",bR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ER=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wR(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qh(e,vR):`https://${t.config.authDomain}/${_R}`,r={apiKey:e.apiKey,appName:t.name,v:As},s=ER.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zo(r).slice(1)}`}async function TR(t){const e=await gR(t),n=Cn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:wR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),l=Cn().setTimeout(()=>{i(o)},yR.get());function c(){Cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AR=500,SR=600,RR="_blank",PR="http://localhost";class Em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(t,e,n,r=AR,s=SR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...IR,width:r.toString(),height:s.toString(),top:i,left:o},u=kt().toLowerCase();n&&(l=pv(u)?RR:n),fv(u)&&(e=e||PR,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[y,C])=>`${m}${y}=${C},`,"");if(W2(u)&&l!=="_self")return kR(e||"",l),new Em(null);const d=window.open(e||"",l,f);he(d,t,"popup-blocked");try{d.focus()}catch{}return new Em(d)}function kR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="__/auth/handler",xR="emulator/auth/handler",DR=encodeURIComponent("fac");async function wm(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:s};if(e instanceof tf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Go){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${DR}=${encodeURIComponent(c)}`:"";return`${OR(t)}?${zo(l).slice(1)}${u}`}function OR({config:t}){return t.emulator?Qh(t,xR):`https://${t.authDomain}/${NR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="webStorageSupport";class VR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kv,this._completeRedirectFn=iR,this._overrideRedirectResult=nR}async _openPopup(e,n,r,s){ir(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await wm(e,n,r,Bu(),s);return CR(e,i,nf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await wm(e,n,r,Bu(),s);return US(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TR(e),r=new aR(e);return n.register("authEvent",s=>(he(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(su,{type:su},s=>{const i=s?.[0]?.[su];i!==void 0&&n(!!i),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vv()||dv()||Jh()}}const MR=VR;var Tm="@firebase/auth",Im="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UR(t){rn(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bv(t)},u=new J2(r,s,i,c);return lS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rn(new Gt("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(r=>new LR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Tm,Im,FR(t)),Ct(Tm,Im,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=300,jR=K_("authIdTokenMaxAge")||$R;let Am=null;const BR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jR)return;const s=n?.token;Am!==s&&(Am=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zR(t=qo()){const e=hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aS(t,{popupRedirectResolver:MR,persistence:[KS,MS,kv]}),r=K_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=BR(i.toString());NS(n,o,()=>o(n.currentUser)),kS(n,l=>o(l))}}const s=W_("auth");return s&&cS(n,`http://${s}`),n}function qR(){return document.getElementsByTagName("head")?.[0]??document}Z2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UR("Browser");var Sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,Uv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function b(){}b.prototype=v.prototype,S.D=v.prototype,S.prototype=new b,S.prototype.constructor=S,S.C=function(A,P,I){for(var w=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)w[Oe-2]=arguments[Oe];return v.prototype[P].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,v,b){b||(b=0);var A=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)A[P]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(P=0;16>P;++P)A[P]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=S.g[0],b=S.g[1],P=S.g[2];var I=S.g[3],w=v+(I^b&(P^I))+A[0]+3614090360&4294967295;v=b+(w<<7&4294967295|w>>>25),w=I+(P^v&(b^P))+A[1]+3905402710&4294967295,I=v+(w<<12&4294967295|w>>>20),w=P+(b^I&(v^b))+A[2]+606105819&4294967295,P=I+(w<<17&4294967295|w>>>15),w=b+(v^P&(I^v))+A[3]+3250441966&4294967295,b=P+(w<<22&4294967295|w>>>10),w=v+(I^b&(P^I))+A[4]+4118548399&4294967295,v=b+(w<<7&4294967295|w>>>25),w=I+(P^v&(b^P))+A[5]+1200080426&4294967295,I=v+(w<<12&4294967295|w>>>20),w=P+(b^I&(v^b))+A[6]+2821735955&4294967295,P=I+(w<<17&4294967295|w>>>15),w=b+(v^P&(I^v))+A[7]+4249261313&4294967295,b=P+(w<<22&4294967295|w>>>10),w=v+(I^b&(P^I))+A[8]+1770035416&4294967295,v=b+(w<<7&4294967295|w>>>25),w=I+(P^v&(b^P))+A[9]+2336552879&4294967295,I=v+(w<<12&4294967295|w>>>20),w=P+(b^I&(v^b))+A[10]+4294925233&4294967295,P=I+(w<<17&4294967295|w>>>15),w=b+(v^P&(I^v))+A[11]+2304563134&4294967295,b=P+(w<<22&4294967295|w>>>10),w=v+(I^b&(P^I))+A[12]+1804603682&4294967295,v=b+(w<<7&4294967295|w>>>25),w=I+(P^v&(b^P))+A[13]+4254626195&4294967295,I=v+(w<<12&4294967295|w>>>20),w=P+(b^I&(v^b))+A[14]+2792965006&4294967295,P=I+(w<<17&4294967295|w>>>15),w=b+(v^P&(I^v))+A[15]+1236535329&4294967295,b=P+(w<<22&4294967295|w>>>10),w=v+(P^I&(b^P))+A[1]+4129170786&4294967295,v=b+(w<<5&4294967295|w>>>27),w=I+(b^P&(v^b))+A[6]+3225465664&4294967295,I=v+(w<<9&4294967295|w>>>23),w=P+(v^b&(I^v))+A[11]+643717713&4294967295,P=I+(w<<14&4294967295|w>>>18),w=b+(I^v&(P^I))+A[0]+3921069994&4294967295,b=P+(w<<20&4294967295|w>>>12),w=v+(P^I&(b^P))+A[5]+3593408605&4294967295,v=b+(w<<5&4294967295|w>>>27),w=I+(b^P&(v^b))+A[10]+38016083&4294967295,I=v+(w<<9&4294967295|w>>>23),w=P+(v^b&(I^v))+A[15]+3634488961&4294967295,P=I+(w<<14&4294967295|w>>>18),w=b+(I^v&(P^I))+A[4]+3889429448&4294967295,b=P+(w<<20&4294967295|w>>>12),w=v+(P^I&(b^P))+A[9]+568446438&4294967295,v=b+(w<<5&4294967295|w>>>27),w=I+(b^P&(v^b))+A[14]+3275163606&4294967295,I=v+(w<<9&4294967295|w>>>23),w=P+(v^b&(I^v))+A[3]+4107603335&4294967295,P=I+(w<<14&4294967295|w>>>18),w=b+(I^v&(P^I))+A[8]+1163531501&4294967295,b=P+(w<<20&4294967295|w>>>12),w=v+(P^I&(b^P))+A[13]+2850285829&4294967295,v=b+(w<<5&4294967295|w>>>27),w=I+(b^P&(v^b))+A[2]+4243563512&4294967295,I=v+(w<<9&4294967295|w>>>23),w=P+(v^b&(I^v))+A[7]+1735328473&4294967295,P=I+(w<<14&4294967295|w>>>18),w=b+(I^v&(P^I))+A[12]+2368359562&4294967295,b=P+(w<<20&4294967295|w>>>12),w=v+(b^P^I)+A[5]+4294588738&4294967295,v=b+(w<<4&4294967295|w>>>28),w=I+(v^b^P)+A[8]+2272392833&4294967295,I=v+(w<<11&4294967295|w>>>21),w=P+(I^v^b)+A[11]+1839030562&4294967295,P=I+(w<<16&4294967295|w>>>16),w=b+(P^I^v)+A[14]+4259657740&4294967295,b=P+(w<<23&4294967295|w>>>9),w=v+(b^P^I)+A[1]+2763975236&4294967295,v=b+(w<<4&4294967295|w>>>28),w=I+(v^b^P)+A[4]+1272893353&4294967295,I=v+(w<<11&4294967295|w>>>21),w=P+(I^v^b)+A[7]+4139469664&4294967295,P=I+(w<<16&4294967295|w>>>16),w=b+(P^I^v)+A[10]+3200236656&4294967295,b=P+(w<<23&4294967295|w>>>9),w=v+(b^P^I)+A[13]+681279174&4294967295,v=b+(w<<4&4294967295|w>>>28),w=I+(v^b^P)+A[0]+3936430074&4294967295,I=v+(w<<11&4294967295|w>>>21),w=P+(I^v^b)+A[3]+3572445317&4294967295,P=I+(w<<16&4294967295|w>>>16),w=b+(P^I^v)+A[6]+76029189&4294967295,b=P+(w<<23&4294967295|w>>>9),w=v+(b^P^I)+A[9]+3654602809&4294967295,v=b+(w<<4&4294967295|w>>>28),w=I+(v^b^P)+A[12]+3873151461&4294967295,I=v+(w<<11&4294967295|w>>>21),w=P+(I^v^b)+A[15]+530742520&4294967295,P=I+(w<<16&4294967295|w>>>16),w=b+(P^I^v)+A[2]+3299628645&4294967295,b=P+(w<<23&4294967295|w>>>9),w=v+(P^(b|~I))+A[0]+4096336452&4294967295,v=b+(w<<6&4294967295|w>>>26),w=I+(b^(v|~P))+A[7]+1126891415&4294967295,I=v+(w<<10&4294967295|w>>>22),w=P+(v^(I|~b))+A[14]+2878612391&4294967295,P=I+(w<<15&4294967295|w>>>17),w=b+(I^(P|~v))+A[5]+4237533241&4294967295,b=P+(w<<21&4294967295|w>>>11),w=v+(P^(b|~I))+A[12]+1700485571&4294967295,v=b+(w<<6&4294967295|w>>>26),w=I+(b^(v|~P))+A[3]+2399980690&4294967295,I=v+(w<<10&4294967295|w>>>22),w=P+(v^(I|~b))+A[10]+4293915773&4294967295,P=I+(w<<15&4294967295|w>>>17),w=b+(I^(P|~v))+A[1]+2240044497&4294967295,b=P+(w<<21&4294967295|w>>>11),w=v+(P^(b|~I))+A[8]+1873313359&4294967295,v=b+(w<<6&4294967295|w>>>26),w=I+(b^(v|~P))+A[15]+4264355552&4294967295,I=v+(w<<10&4294967295|w>>>22),w=P+(v^(I|~b))+A[6]+2734768916&4294967295,P=I+(w<<15&4294967295|w>>>17),w=b+(I^(P|~v))+A[13]+1309151649&4294967295,b=P+(w<<21&4294967295|w>>>11),w=v+(P^(b|~I))+A[4]+4149444226&4294967295,v=b+(w<<6&4294967295|w>>>26),w=I+(b^(v|~P))+A[11]+3174756917&4294967295,I=v+(w<<10&4294967295|w>>>22),w=P+(v^(I|~b))+A[2]+718787259&4294967295,P=I+(w<<15&4294967295|w>>>17),w=b+(I^(P|~v))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(P+(w<<21&4294967295|w>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+I&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var b=v-this.blockSize,A=this.B,P=this.h,I=0;I<v;){if(P==0)for(;I<=b;)s(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<v;)if(A[P++]=S.charCodeAt(I++),P==this.blockSize){s(this,A),P=0;break}}else for(;I<v;)if(A[P++]=S[I++],P==this.blockSize){s(this,A),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var b=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=b&255,b/=256;for(this.u(S),S=Array(16),v=b=0;4>v;++v)for(var A=0;32>A;A+=8)S[b++]=this.g[v]>>>A&255;return S};function i(S,v){var b=l;return Object.prototype.hasOwnProperty.call(b,S)?b[S]:b[S]=v(S)}function o(S,v){this.h=v;for(var b=[],A=!0,P=S.length-1;0<=P;P--){var I=S[P]|0;A&&I==v||(b[P]=I,A=!1)}this.g=b}var l={};function c(S){return-128<=S&&128>S?i(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return x(u(-S));for(var v=[],b=1,A=0;S>=b;A++)v[A]=S/b|0,b*=4294967296;return new o(v,0)}function f(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return x(f(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(v,8)),A=d,P=0;P<S.length;P+=8){var I=Math.min(8,S.length-P),w=parseInt(S.substring(P,P+I),v);8>I?(I=u(Math.pow(v,I)),A=A.j(I).add(u(w))):(A=A.j(b),A=A.add(u(w)))}return A}var d=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var S=0,v=1,b=0;b<this.g.length;b++){var A=this.i(b);S+=(0<=A?A:4294967296+A)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C(this))return"0";if(k(this))return"-"+x(this).toString(S);for(var v=u(Math.pow(S,6)),b=this,A="";;){var P=U(b,v).g;b=R(b,P.j(v));var I=((0<b.g.length?b.g[0]:b.h)>>>0).toString(S);if(b=P,C(b))return I+A;for(;6>I.length;)I="0"+I;A=I+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function C(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function k(S){return S.h==-1}t.l=function(S){return S=R(this,S),k(S)?-1:C(S)?0:1};function x(S){for(var v=S.g.length,b=[],A=0;A<v;A++)b[A]=~S.g[A];return new o(b,~S.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),b=[],A=0,P=0;P<=v;P++){var I=A+(this.i(P)&65535)+(S.i(P)&65535),w=(I>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);A=w>>>16,I&=65535,w&=65535,b[P]=w<<16|I}return new o(b,b[b.length-1]&-2147483648?-1:0)};function R(S,v){return S.add(x(v))}t.j=function(S){if(C(this)||C(S))return d;if(k(this))return k(S)?x(this).j(x(S)):x(x(this).j(S));if(k(S))return x(this.j(x(S)));if(0>this.l(y)&&0>S.l(y))return u(this.m()*S.m());for(var v=this.g.length+S.g.length,b=[],A=0;A<2*v;A++)b[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<S.g.length;P++){var I=this.i(A)>>>16,w=this.i(A)&65535,Oe=S.i(P)>>>16,tt=S.i(P)&65535;b[2*A+2*P]+=w*tt,N(b,2*A+2*P),b[2*A+2*P+1]+=I*tt,N(b,2*A+2*P+1),b[2*A+2*P+1]+=w*Oe,N(b,2*A+2*P+1),b[2*A+2*P+2]+=I*Oe,N(b,2*A+2*P+2)}for(A=0;A<v;A++)b[A]=b[2*A+1]<<16|b[2*A];for(A=v;A<2*v;A++)b[A]=0;return new o(b,0)};function N(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function V(S,v){this.g=S,this.h=v}function U(S,v){if(C(v))throw Error("division by zero");if(C(S))return new V(d,d);if(k(S))return v=U(x(S),v),new V(x(v.g),x(v.h));if(k(v))return v=U(S,x(v)),new V(x(v.g),v.h);if(30<S.g.length){if(k(S)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var b=m,A=v;0>=A.l(S);)b=ee(b),A=ee(A);var P=ie(b,1),I=ie(A,1);for(A=ie(A,2),b=ie(b,2);!C(A);){var w=I.add(A);0>=w.l(S)&&(P=P.add(b),I=w),A=ie(A,1),b=ie(b,1)}return v=R(S,P.j(v)),new V(P,v)}for(P=d;0<=S.l(v);){for(b=Math.max(1,Math.floor(S.m()/v.m())),A=Math.ceil(Math.log(b)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),I=u(b),w=I.j(v);k(w)||0<w.l(S);)b-=A,I=u(b),w=I.j(v);C(I)&&(I=m),P=P.add(I),S=R(S,w)}return new V(P,S)}t.A=function(S){return U(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),b=[],A=0;A<v;A++)b[A]=this.i(A)&S.i(A);return new o(b,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),b=[],A=0;A<v;A++)b[A]=this.i(A)|S.i(A);return new o(b,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),b=[],A=0;A<v;A++)b[A]=this.i(A)^S.i(A);return new o(b,this.h^S.h)};function ee(S){for(var v=S.g.length+1,b=[],A=0;A<v;A++)b[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(b,S.h)}function ie(S,v){var b=v>>5;v%=32;for(var A=S.g.length-b,P=[],I=0;I<A;I++)P[I]=0<v?S.i(I+b)>>>v|S.i(I+b+1)<<32-v:S.i(I+b);return new o(P,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Uv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Vr=o}).apply(typeof Sm<"u"?Sm:typeof self<"u"?self:typeof window<"u"?window:{});var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $v,ji,jv,za,Hu,Bv,zv,qv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Aa=="object"&&Aa];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in p))break e;p=p[O]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,g=!1,O={next:function(){if(!g&&p<a.length){var M=p++;return{value:h(M,a[M]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function y(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(g,O,M){for(var K=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)K[Ve-2]=arguments[Ve];return h.prototype[O].apply(g,K)}}function k(a){const h=a.length;if(0<h){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function x(a,h){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(c(g)){const O=a.length||0,M=g.length||0;a.length=O+M;for(let K=0;K<M;K++)a[O+K]=g[K]}else a.push(g)}}class R{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var ee=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function ie(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function S(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function v(a){const h={};for(const p in a)h[p]=a[p];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let p,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(p in g)a[p]=g[p];for(let M=0;M<b.length;M++)p=b[M],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function P(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function I(a){l.setTimeout(()=>{throw a},0)}function w(){var a=jt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Oe{constructor(){this.h=this.g=null}add(h,p){const g=tt.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var tt=new R(()=>new qe,a=>a.reset());class qe{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,_e=!1,jt=new Oe,an=()=>{const a=l.Promise.resolve(void 0);Te=()=>{a.then(Yt)}};var Yt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(p){I(p)}var h=tt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_e=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var mr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function vn(a,h){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ee){e:{try{U(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&vn.aa.h.call(this)}}C(vn,We);var Lt={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),J=0;function X(a,h,p,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=O,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,p,g,O){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var K=T(a,h,g,O);return-1<K?(h=a[K],p||(h.fa=!1)):(h=new X(h,this.src,M,!!g,O),h.fa=p,a.push(h)),h};function E(a,h){var p=h.type;if(p in a.g){var g=a.g[p],O=Array.prototype.indexOf.call(g,h,void 0),M;(M=0<=O)&&Array.prototype.splice.call(g,O,1),M&&(te(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function T(a,h,p,g){for(var O=0;O<a.length;++O){var M=a[O];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==g)return O}return-1}var D="closure_lm_"+(1e6*Math.random()|0),F={};function B(a,h,p,g,O){if(Array.isArray(h)){for(var M=0;M<h.length;M++)B(a,h[M],p,g,O);return null}return p=de(p),a&&a[L]?a.K(h,p,u(g)?!!g.capture:!1,O):$(a,h,p,!1,g,O)}function $(a,h,p,g,O,M){if(!h)throw Error("Invalid event type");var K=u(O)?!!O.capture:!!O,Ve=Y(a);if(Ve||(a[D]=Ve=new Re(a)),p=Ve.add(h,p,g,K,M),p.proxy)return p;if(g=Q(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)mr||(O=K),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(q(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Q(){function a(p){return h.call(a.src,a.listener,p)}const h=oe;return a}function G(a,h,p,g,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)G(a,h[M],p,g,O);else g=u(g)?!!g.capture:!!g,p=de(p),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(M=a.g[h],p=T(M,p,g,O),-1<p&&(te(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,p,g,O)),(p=-1<a?h[a]:null)&&W(p))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])E(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(q(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Y(h))?(E(p,a),p.h==0&&(p.src=null,h[D]=null)):te(a)}}}function q(a){return a in F?F[a]:F[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new vn(h,this);var p=a.listener,g=a.ha||a.src;a.fa&&W(a),a=p.call(g,h)}return a}function Y(a){return a=a[D],a instanceof Re?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ue(){He.call(this),this.i=new Re(this),this.M=this,this.F=null}C(ue,He),ue.prototype[L]=!0,ue.prototype.removeEventListener=function(a,h,p,g){G(this,a,h,p,g)};function ye(a,h){var p,g=a.F;if(g)for(p=[];g;g=g.F)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new We(h,a);else if(h instanceof We)h.target=h.target||a;else{var O=h;h=new We(g,a),A(h,O)}if(O=!0,p)for(var M=p.length-1;0<=M;M--){var K=h.g=p[M];O=Ie(K,g,!0,h)&&O}if(K=h.g=a,O=Ie(K,g,!0,h)&&O,O=Ie(K,g,!1,h)&&O,p)for(M=0;M<p.length;M++)K=h.g=p[M],O=Ie(K,g,!1,h)&&O}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],g=0;g<p.length;g++)te(p[g]);delete a.g[h],a.h--}}this.F=null},ue.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},ue.prototype.L=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Ie(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,M=0;M<h.length;++M){var K=h[M];if(K&&!K.da&&K.capture==p){var Ve=K.listener,ft=K.ha||K.src;K.fa&&E(a.i,K),O=Ve.call(ft,g)!==!1&&O}}return O&&!g.defaultPrevented}function ct(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ut(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,ut(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Qt extends He{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ut(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(a){He.call(this),this.h=a,this.g={}}C(vt,He);var gr=[];function bi(a){ie(a.g,function(h,p){this.g.hasOwnProperty(p)&&W(h)},a),a.g={}}vt.prototype.N=function(){vt.aa.N.call(this),bi(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=l.JSON.stringify,Xt=l.JSON.parse,sa=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ns(){}Ns.prototype.h=null;function td(a){return a.h||(a.h=a.i())}function nd(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ic(){We.call(this,"d")}C(Ic,We);function Ac(){We.call(this,"c")}C(Ac,We);var Xr={},rd=null;function ia(){return rd=rd||new ue}Xr.La="serverreachability";function sd(a){We.call(this,Xr.La,a)}C(sd,We);function wi(a){const h=ia();ye(h,new sd(h))}Xr.STAT_EVENT="statevent";function id(a,h){We.call(this,Xr.STAT_EVENT,a),this.stat=h}C(id,We);function xt(a){const h=ia();ye(h,new id(h,a))}Xr.Ma="timingevent";function od(a,h){We.call(this,Xr.Ma,a),this.size=h}C(od,We);function Ti(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function qb(a,h,p,g,O,M){a.info(function(){if(a.g)if(M)for(var K="",Ve=M.split("&"),ft=0;ft<Ve.length;ft++){var Pe=Ve[ft].split("=");if(1<Pe.length){var bt=Pe[0];Pe=Pe[1];var Et=bt.split("_");K=2<=Et.length&&Et[1]=="type"?K+(bt+"="+Pe+"&"):K+(bt+"=redacted&")}}else K=null;else K=M;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+p+`
`+K})}function Hb(a,h,p,g,O,M,K){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+p+`
`+M+" "+K})}function xs(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Gb(a,p)+(g?" "+g:"")})}function Wb(a,h){a.info(function(){return"TIMEOUT: "+h})}Ii.prototype.info=function(){};function Gb(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var g=p[a];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var M=O[0];if(M!="noop"&&M!="stop"&&M!="close")for(var K=1;K<O.length;K++)O[K]=""}}}}return ht(p)}catch{return h}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ad={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sc;function aa(){}C(aa,Ns),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},Sc=new aa;function yr(a,h,p,g){this.j=a,this.i=h,this.l=p,this.R=g||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ld}function ld(){this.i=null,this.g="",this.h=!1}var cd={},Rc={};function Pc(a,h,p){a.L=1,a.v=ha($n(h)),a.m=p,a.P=!0,ud(a,null)}function ud(a,h){a.F=Date.now(),la(a),a.A=$n(a.v);var p=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Id(p.i,"t",g),a.C=0,p=a.j.J,a.h=new ld,a.g=Bd(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Qt(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,g=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(gr[0]=O.toString()),O=gr);for(var M=0;M<O.length;M++){var K=B(p,O[M],g||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),wi(),qb(a.i,a.u,a.A,a.l,a.R,a.m)}yr.prototype.ca=function(a){a=a.target;const h=this.M;h&&jn(a)==3?h.j():this.Y(a)},yr.prototype.Y=function(a){try{if(a==this.g)e:{const Et=jn(this.g);var h=this.g.Ba();const Vs=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Nd(this.g)))){this.J||Et!=4||h==7||(h==8||0>=Vs?wi(3):wi(2)),Cc(this);var p=this.g.Z();this.X=p;t:if(hd(this)){var g=Nd(this.g);a="";var O=g.length,M=jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),Ai(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(M&&h==O-1)});g.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,Hb(this.i,this.u,this.A,this.l,this.R,Et,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ft=this.g;if((Ve=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Ve)){var Pe=Ve;break t}}Pe=null}if(p=Pe)xs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kc(this,p);else{this.o=!1,this.s=3,xt(12),Jr(this),Ai(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<K.length;)if(ln=Kb(this,K),ln==Rc){Et==4&&(this.s=4,xt(14),p=!1),xs(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==cd){this.s=4,xt(15),xs(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else xs(this.i,this.l,ln,null),kc(this,ln);if(hd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||K.length!=0||this.h.h||(this.s=1,xt(16),p=!1),this.o=this.o&&p,!p)xs(this.i,this.l,K,"[Invalid Chunked Response]"),Jr(this),Ai(this);else if(0<K.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Mc(bt),bt.M=!0,xt(11))}}else xs(this.i,this.l,K,null),kc(this,K);Et==4&&Jr(this),this.o&&!this.J&&(Et==4?Fd(this.j,this):(this.o=!1,la(this)))}else hE(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Jr(this),Ai(this)}}}catch{}finally{}};function hd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Kb(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?Rc:(p=Number(h.substring(p,g)),isNaN(p)?cd:(g+=1,g+p>h.length?Rc:(h=h.slice(g,g+p),a.C=g+p,h)))}yr.prototype.cancel=function(){this.J=!0,Jr(this)};function la(a){a.S=Date.now()+a.I,fd(a,a.I)}function fd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ti(m(a.ba,a),h)}function Cc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}yr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Wb(this.i,this.A),this.L!=2&&(wi(),xt(17)),Jr(this),this.s=2,Ai(this)):fd(this,this.S-a)};function Ai(a){a.j.G==0||a.J||Fd(a.j,a)}function Jr(a){Cc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,bi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function kc(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Nc(p.h,a))){if(!a.K&&Nc(p.h,a)&&p.G==3){try{var g=p.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ya(p),ma(p);else break e;Vc(p),xt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ti(m(p.Za,p),6e3));if(1>=md(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else es(p,11)}else if((a.K||p.g==a)&&ya(p),!N(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Pe=O[h];if(p.T=Pe[0],Pe=Pe[1],p.G==2)if(Pe[0]=="c"){p.K=Pe[1],p.ia=Pe[2];const bt=Pe[3];bt!=null&&(p.la=bt,p.j.info("VER="+p.la));const Et=Pe[4];Et!=null&&(p.Aa=Et,p.j.info("SVER="+p.Aa));const Vs=Pe[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(g=1.5*Vs,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const ln=a.g;if(ln){const va=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var M=g.h;M.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(xc(M,M.h),M.h=null))}if(g.D){const Lc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Lc&&(g.ya=Lc,Ue(g.I,g.D,Lc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var K=a;if(g.qa=jd(g,g.J?g.ia:null,g.W),K.K){gd(g.h,K);var Ve=K,ft=g.L;ft&&(Ve.I=ft),Ve.B&&(Cc(Ve),la(Ve)),g.g=K}else Md(g);0<p.i.length&&ga(p)}else Pe[0]!="stop"&&Pe[0]!="close"||es(p,7);else p.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?es(p,7):Oc(p):Pe[0]!="noop"&&p.l&&p.l.ta(Pe),p.v=0)}}wi(4)}catch{}}var Yb=class{constructor(a,h){this.g=a,this.map=h}};function dd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function md(a){return a.h?1:a.g?a.g.size:0}function Nc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function xc(a,h){a.g?a.g.add(h):a.h=h}function gd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}dd.prototype.cancel=function(){if(this.i=yd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return k(a.i)}function Qb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],p=a.length,g=0;g<p;g++)h.push(a[g]);return h}h=[],p=0;for(g in a)h[p++]=a[g];return h}function Xb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const g in a)h[p++]=g;return h}}}function _d(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=Xb(a),g=Qb(a),O=g.length,M=0;M<O;M++)h.call(void 0,g[M],p&&p[M],a)}var vd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jb(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var g=a[p].indexOf("="),O=null;if(0<=g){var M=a[p].substring(0,g);O=a[p].substring(g+1)}else M=a[p];h(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,ca(this,a.j),this.o=a.o,this.g=a.g,ua(this,a.s),this.l=a.l;var h=a.i,p=new Pi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),bd(this,p),this.m=a.m}else a&&(h=String(a).match(vd))?(this.h=!1,ca(this,h[1]||"",!0),this.o=Si(h[2]||""),this.g=Si(h[3]||"",!0),ua(this,h[4]),this.l=Si(h[5]||"",!0),bd(this,h[6]||"",!0),this.m=Si(h[7]||"")):(this.h=!1,this.i=new Pi(null,this.h))}Zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ri(h,Ed,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ri(h,Ed,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ri(p,p.charAt(0)=="/"?tE:eE,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ri(p,rE)),a.join("")};function $n(a){return new Zr(a)}function ca(a,h,p){a.j=p?Si(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ua(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function bd(a,h,p){h instanceof Pi?(a.i=h,sE(a.i,a.h)):(p||(h=Ri(h,nE)),a.i=new Pi(h,a.h))}function Ue(a,h,p){a.i.set(h,p)}function ha(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Si(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ri(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Zb),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Zb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ed=/[#\/\?@]/g,eE=/[#\?:]/g,tE=/[#\?]/g,nE=/[#\?@]/g,rE=/#/g;function Pi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function _r(a){a.g||(a.g=new Map,a.h=0,a.i&&Jb(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Pi.prototype,t.add=function(a,h){_r(this),this.i=null,a=Ds(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function wd(a,h){_r(a),h=Ds(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Td(a,h){return _r(a),h=Ds(a,h),a.g.has(h)}t.forEach=function(a,h){_r(this),this.g.forEach(function(p,g){p.forEach(function(O){a.call(h,O,g,this)},this)},this)},t.na=function(){_r(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let g=0;g<h.length;g++){const O=a[g];for(let M=0;M<O.length;M++)p.push(h[g])}return p},t.V=function(a){_r(this);let h=[];if(typeof a=="string")Td(this,a)&&(h=h.concat(this.g.get(Ds(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return _r(this),this.i=null,a=Ds(this,a),Td(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Id(a,h,p){wd(a,h),0<p.length&&(a.i=null,a.g.set(Ds(a,h),k(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var g=h[p];const M=encodeURIComponent(String(g)),K=this.V(g);for(g=0;g<K.length;g++){var O=M;K[g]!==""&&(O+="="+encodeURIComponent(String(K[g]))),a.push(O)}}return this.i=a.join("&")};function Ds(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function sE(a,h){h&&!a.j&&(_r(a),a.i=null,a.g.forEach(function(p,g){var O=g.toLowerCase();g!=O&&(wd(this,g),Id(this,O,p))},a)),a.j=h}function iE(a,h){const p=new Ii;if(l.Image){const g=new Image;g.onload=y(vr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=y(vr,p,"TestLoadImage: error",!1,h,g),g.onabort=y(vr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(vr,p,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function oE(a,h){const p=new Ii,g=new AbortController,O=setTimeout(()=>{g.abort(),vr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(M=>{clearTimeout(O),M.ok?vr(p,"TestPingServer: ok",!0,h):vr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),vr(p,"TestPingServer: error",!1,h)})}function vr(a,h,p,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(p)}catch{}}function aE(){this.g=new sa}function lE(a,h,p){const g=p||"";try{_d(a,function(O,M){let K=O;u(O)&&(K=ht(O)),h.push(g+M+"="+encodeURIComponent(K))})}catch(O){throw h.push(g+"type="+encodeURIComponent("_badmap")),O}}function fa(a){this.l=a.Ub||null,this.j=a.eb||!1}C(fa,Ns),fa.prototype.g=function(){return new da(this.l,this.j)},fa.prototype.i=function(a){return function(){return a}}({});function da(a,h){ue.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(da,ue),t=da.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ki(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ad(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ad(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ci(this):ki(this),this.readyState==3&&Ad(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ci(this))},t.Qa=function(a){this.g&&(this.response=a,Ci(this))},t.ga=function(){this.g&&Ci(this)};function Ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ki(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ki(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sd(a){let h="";return ie(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Dc(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Sd(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ue(a,h,p))}function Ye(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ye,ue);var cE=/^https?$/i,uE=["POST","PUT"];t=Ye.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sc.g(),this.v=this.o?td(this.o):td(Sc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){Rd(this,M);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)p.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const M of g.keys())p.set(M,g.get(M));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uE,h,void 0))||g||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,K]of p)this.g.setRequestHeader(M,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{kd(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){Rd(this,M)}};function Rd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Pd(a),pa(a)}function Pd(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cd(this):this.bb())},t.bb=function(){Cd(this)};function Cd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||jn(a)!=4||a.Z()!=2)){if(a.u&&jn(a)==4)ct(a.Ea,0,a);else if(ye(a,"readystatechange"),jn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=K===0){var O=String(a.D).match(vd)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),g=!cE.test(O?O.toLowerCase():"")}p=g}if(p)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var M=2<jn(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",Pd(a)}}finally{pa(a)}}}}function pa(a,h){if(a.g){kd(a);const p=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{p.onreadystatechange=g}catch{}}}function kd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xt(h)}};function Nd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hE(a){const h={};a=(a.g&&2<=jn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(N(a[g]))continue;var p=P(a[g]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[O]||[];h[O]=M,M.push(p)}S(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ni(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function xd(a){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ni("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ni("baseRetryDelayMs",5e3,a),this.cb=Ni("retryDelaySeedMs",1e4,a),this.Wa=Ni("forwardChannelMaxRetries",2,a),this.wa=Ni("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new dd(a&&a.concurrentRequestLimit),this.Da=new aE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xd.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,g){xt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=jd(this,null,this.W),ga(this)};function Oc(a){if(Dd(a),a.G==3){var h=a.U++,p=$n(a.I);if(Ue(p,"SID",a.K),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),xi(a,p),h=new yr(a,a.j,h),h.L=2,h.v=ha($n(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Bd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),la(h)}$d(a)}function ma(a){a.g&&(Mc(a),a.g.cancel(),a.g=null)}function Dd(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!pd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Te||an(),_e||(Te(),_e=!0),jt.add(h,a),a.B=0}}function fE(a,h){return md(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ti(m(a.Ga,a,h),Ud(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new yr(this,this.j,a);let M=this.o;if(this.S&&(M?(M=v(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(O.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Vd(this,O,h),p=$n(this.I),Ue(p,"RID",a),Ue(p,"CVER",22),this.D&&Ue(p,"X-HTTP-Session-Id",this.D),xi(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(Sd(M)))+"&"+h:this.m&&Dc(p,this.m,M)),xc(this.h,O),this.Ua&&Ue(p,"TYPE","init"),this.P?(Ue(p,"$req",h),Ue(p,"SID","null"),O.T=!0,Pc(O,p,null)):Pc(O,p,h),this.G=2}}else this.G==3&&(a?Od(this,a):this.i.length==0||pd(this.h)||Od(this))};function Od(a,h){var p;h?p=h.l:p=a.U++;const g=$n(a.I);Ue(g,"SID",a.K),Ue(g,"RID",p),Ue(g,"AID",a.T),xi(a,g),a.m&&a.o&&Dc(g,a.m,a.o),p=new yr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Vd(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xc(a.h,p),Pc(p,g,h)}function xi(a,h){a.H&&ie(a.H,function(p,g){Ue(h,g,p)}),a.l&&_d({},function(p,g){Ue(h,g,p)})}function Vd(a,h,p){p=Math.min(a.i.length,p);var g=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let M=-1;for(;;){const K=["count="+p];M==-1?0<p?(M=O[0].g,K.push("ofs="+M)):M=0:K.push("ofs="+M);let Ve=!0;for(let ft=0;ft<p;ft++){let Pe=O[ft].g;const bt=O[ft].map;if(Pe-=M,0>Pe)M=Math.max(0,O[ft].g-100),Ve=!1;else try{lE(bt,K,"req"+Pe+"_")}catch{g&&g(bt)}}if(Ve){g=K.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,g}function Md(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Te||an(),_e||(Te(),_e=!0),jt.add(h,a),a.v=0}}function Vc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ti(m(a.Fa,a),Ud(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ld(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ti(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),ma(this),Ld(this))};function Mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ld(a){a.g=new yr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=$n(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),xi(a,h),a.m&&a.o&&Dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=ha($n(h)),p.m=null,p.P=!0,ud(p,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),Vc(this),xt(19))};function ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Fd(a,h){var p=null;if(a.g==h){ya(a),Mc(a),a.g=null;var g=2}else if(Nc(a.h,h))p=h.D,gd(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;g=ia(),ye(g,new od(g,p)),ga(a)}else Md(a);else if(O=h.s,O==3||O==0&&0<h.X||!(g==1&&fE(a,h)||g==2&&Vc(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:es(a,5);break;case 4:es(a,10);break;case 3:es(a,6);break;default:es(a,2)}}}function Ud(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function es(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),g=a.Xa;const O=!g;g=new Zr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ca(g,"https"),ha(g),O?iE(g.toString(),p):oE(g.toString(),p)}else xt(2);a.G=0,a.l&&a.l.sa(h),$d(a),Dd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function $d(a){if(a.G=0,a.ka=[],a.l){const h=yd(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function jd(a,h,p){var g=p instanceof Zr?$n(p):new Zr(p);if(g.g!="")h&&(g.g=h+"."+g.g),ua(g,g.s);else{var O=l.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var M=new Zr(null);g&&ca(M,g),h&&(M.g=h),O&&ua(M,O),p&&(M.l=p),g=M}return p=a.D,h=a.ya,p&&h&&Ue(g,p,h),Ue(g,"VER",a.la),xi(a,g),g}function Bd(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ye(new fa({eb:p})):new Ye(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zd(){}t=zd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _a(){}_a.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){ue.call(this),this.g=new xd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Os(this)}C(Bt,ue),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Oc(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ht(a),a=p);h.i.push(new Yb(h.Ya++,a)),h.G==3&&ga(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,Bt.aa.N.call(this)};function qd(a){Ic.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(qd,Ic);function Hd(){Ac.call(this),this.status=1}C(Hd,Ac);function Os(a){this.g=a}C(Os,zd),Os.prototype.ua=function(){ye(this.g,"a")},Os.prototype.ta=function(a){ye(this.g,new qd(a))},Os.prototype.sa=function(a){ye(this.g,new Hd)},Os.prototype.ra=function(){ye(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,qv=function(){return new _a},zv=function(){return ia()},Bv=Xr,Hu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,za=oa,ad.COMPLETE="complete",jv=ad,nd.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",ue.prototype.listen=ue.prototype.K,ji=nd,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,$v=Ye}).apply(typeof Aa<"u"?Aa:typeof self<"u"?self:typeof window<"u"?window:{});const Rm="@firebase/firestore",Pm="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new tc("@firebase/firestore");function js(){return ys.logLevel}function Z(t,...e){if(ys.logLevel<=ve.DEBUG){const n=e.map(sf);ys.debug(`Firestore (${mi}): ${t}`,...n)}}function or(t,...e){if(ys.logLevel<=ve.ERROR){const n=e.map(sf);ys.error(`Firestore (${mi}): ${t}`,...n)}}function oi(t,...e){if(ys.logLevel<=ve.WARN){const n=e.map(sf);ys.warn(`Firestore (${mi}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Hv(t,r,n)}function Hv(t,e,n){let r=`FIRESTORE (${mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw or(r),new Error(r)}function xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Hv(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class WR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GR{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new Wv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string",2055,{h:e}),new It(e)}}class KR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class YR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new KR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Cm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=XR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Wu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return iu(s)===iu(i)?be(s,i):iu(s)?1:-1}return be(t.length,e.length)}const JR=55296,ZR=57343;function iu(t){const e=t.charCodeAt(0);return e>=JR&&e<=ZR}function ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=wn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return be(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),s=wn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?wn.extractNumericId(e).compare(wn.extractNumericId(n)):Wu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vr.fromString(e.substring(4,e.length-2))}}class Ge extends wn{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const eP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends wn{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return eP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===km}static keyField(){return new yt([km])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new se(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ge.fromString(e))}static fromName(e){return new ce(Ge.fromString(e).popFirst(5))}static empty(){return new ce(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t,e,n){if(!n)throw new se(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nP(t,e,n,r){if(e===!0&&r===!0)throw new se(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nm(t){if(!ce.isDocumentKey(t))throw new se(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function af(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Ro(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=af(t);throw new se(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){const n={typeString:t};return e&&(n.value=e),n}function Yo(t,e){if(!Gv(t))throw new se(z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new se(z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=-62135596800,Dm=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Dm);return new Be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<xm)throw new se(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dm}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yo(e,Be._jsonSchema))return new Be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Be._jsonSchemaVersion="firestore/timestamp/1.0",Be._jsonSchema={type:et("string",Be._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Be(0,0))}static max(){return new pe(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=-1;function rP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new jr(s,ce.empty(),e)}function sP(t){return new jr(t.readTime,t.key,Po)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(pe.min(),ce.empty(),Po)}static max(){return new jr(pe.max(),ce.empty(),Po)}}function iP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==oP)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function yi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ic.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=-1;function oc(t){return t==null}function yl(t){return t===0&&1/t==-1/0}function cP(t){return typeof t=="number"&&Number.isInteger(t)&&!yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="";function uP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Om(e)),e=hP(t.get(n),e);return Om(e)}function hP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Kv:n+="";break;default:n+=i}}return n}function Om(t){return t+Kv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mm(this.data.getIterator())}getIteratorFrom(e){return new Mm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Mm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new un([])}unionWith(e){let n=new st(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qv("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const fP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(xe(!!t,39018),typeof t=="string"){let e=0;const n=fP.exec(t);if(xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="server_timestamp",Jv="__type__",Zv="__previous_value__",e1="__local_write_time__";function cf(t){return(t?.mapValue?.fields||{})[Jv]?.stringValue===Xv}function ac(t){const e=t.mapValue.fields[Zv];return cf(e)?ac(e):e}function Co(t){const e=Br(t.mapValue.fields[e1].timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,s,i,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const _l="(default)";class ko{constructor(e,n){this.projectId=e,this.database=n||_l}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database===_l}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="__type__",pP="__max__",Ra={mapValue:{}},n1="__vector__",vl="value";function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cf(t)?4:gP(t)?9007199254740991:mP(t)?10:11:fe(28295,{value:t})}function Vn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Br(s.timestampValue),l=Br(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return zr(s.bytesValue).isEqual(zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),l=Xe(i.doubleValue);return o===l?yl(o)===yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Vm(o)!==Vm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Vn(o[c],l[c])))return!1;return!0}(t,e);default:return fe(52216,{left:t})}}function No(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Lm(t.timestampValue,e.timestampValue);case 4:return Lm(Co(t),Co(e));case 5:return Wu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=zr(i),c=zr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=be(l[u],c[u]);if(f!==0)return f}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Xe(i.latitude),Xe(o.latitude));return l!==0?l:be(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fm(t.arrayValue,e.arrayValue);case 10:return function(i,o){const l=i.fields||{},c=o.fields||{},u=l[vl]?.arrayValue,f=c[vl]?.arrayValue,d=be(u?.values?.length||0,f?.values?.length||0);return d!==0?d:Fm(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ra.mapValue&&o===Ra.mapValue)return 0;if(i===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let d=0;d<c.length&&d<f.length;++d){const m=Wu(c[d],f[d]);if(m!==0)return m;const y=li(l[c[d]],u[f[d]]);if(y!==0)return y}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw fe(23264,{he:n})}}function Lm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Br(t),r=Br(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Fm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=li(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ci(t){return Gu(t)}function Gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gu(n.fields[o])}`;return s+"}"}(t.mapValue):fe(61005,{value:t})}function qa(t){switch(qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(t);return e?16+qa(e):16;case 5:return 2*t.stringValue.length;case 6:return zr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ss(r.fields,(i,o)=>{s+=i.length+qa(o)}),s}(t.mapValue);default:throw fe(13486,{value:t})}}function Ku(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function Um(t){return!!t&&"nullValue"in t}function $m(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ha(t){return!!t&&"mapValue"in t}function mP(t){return(t?.mapValue?.fields||{})[t1]?.stringValue===n1}function io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return{...t}}function gP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ha(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ha(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Zt(io(this.value))}}function r1(t){const e=[];return Ss(t.fields,(n,r)=>{const s=new yt([n]);if(Ha(r)){const i=r1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,pe.min(),pe.min(),pe.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,pe.min(),pe.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,pe.min(),pe.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.position=e,this.inclusive=n}}function jm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n="asc"){this.field=e,this.dir=n}}function yP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{}class rt extends s1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vP(e,n,r):n==="array-contains"?new wP(e,r):n==="in"?new TP(e,r):n==="not-in"?new IP(e,r):n==="array-contains-any"?new AP(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bP(e,r):new EP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(li(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends s1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Mn(e,n)}matches(e){return i1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function i1(t){return t.op==="and"}function o1(t){return _P(t)&&i1(t)}function _P(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Yu(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(o1(t))return t.filters.map(e=>Yu(e)).join(",");{const e=t.filters.map(n=>Yu(n)).join(",");return`${t.op}(${e})`}}function a1(t,e){return t instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Vn(r.value,s.value)}(t,e):t instanceof Mn?function(r,s){return s instanceof Mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&a1(o,s.filters[l]),!0):!1}(t,e):void fe(19439)}function l1(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${ci(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(l1).join(" ,")+"}"}(t):"Filter"}class vP extends rt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class bP extends rt{constructor(e,n){super(e,"in",n),this.keys=c1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EP extends rt{constructor(e,n){super(e,"not-in",n),this.keys=c1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function c1(t,e){return(e.arrayValue?.values||[]).map(n=>ce.fromName(n.referenceValue))}class wP extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&No(n.arrayValue,this.value)}}class TP extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class IP extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!No(this.value.arrayValue,n)}}class AP extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function zm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new SP(t,e,n,r,s,i,o)}function hf(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ci(r)).join(",")),e.Te=n}return e.Te}function ff(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bm(t.startAt,e.startAt)&&Bm(t.endAt,e.endAt)}function Qu(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function RP(t,e,n,r,s,i,o,l){return new lc(t,e,n,r,s,i,o,l)}function df(t){return new lc(t)}function qm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PP(t){return t.collectionGroup!==null}function oo(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new st(yt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new El(i,r))}),n.has(yt.keyField().canonicalString())||e.Ie.push(new El(yt.keyField(),r))}return e.Ie}function kn(t){const e=ge(t);return e.Ee||(e.Ee=CP(e,oo(t))),e.Ee}function CP(t,e){if(t.limitType==="F")return zm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new El(s.field,i)});const n=t.endAt?new bl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bl(t.startAt.position,t.startAt.inclusive):null;return zm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xu(t,e,n){return new lc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return ff(kn(t),kn(e))&&t.limitType===e.limitType}function u1(t){return`${hf(kn(t))}|lt:${t.limitType}`}function Bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>l1(s)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ci(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ci(s)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of oo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=jm(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,oo(r),s)||r.endAt&&!function(o,l,c){const u=jm(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,oo(r),s))}(t,e)}function kP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function h1(t){return(e,n)=>{let r=!1;for(const s of oo(t)){const i=NP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function NP(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?li(c,u):fe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=new Ke(ce.comparator);function ar(){return xP}const f1=new Ke(ce.comparator);function Bi(...t){let e=f1;for(const n of t)e=e.insert(n.key,n);return e}function d1(t){let e=f1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cs(){return ao()}function p1(){return ao()}function ao(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const DP=new Ke(ce.comparator),OP=new st(ce.comparator);function Ee(...t){let e=OP;for(const n of t)e=e.add(n);return e}const VP=new st(be);function MP(){return VP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yl(e)?"-0":e}}function m1(t){return{integerValue:""+t}}function LP(t,e){return cP(e)?m1(e):pf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this._=void 0}}function FP(t,e,n){return t instanceof xo?function(s,i){const o={fields:{[Jv]:{stringValue:Xv},[e1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cf(i)&&(i=ac(i)),i&&(o.fields[Zv]=i),{mapValue:o}}(n,e):t instanceof Do?y1(t,e):t instanceof Oo?_1(t,e):function(s,i){const o=g1(s,i),l=Hm(o)+Hm(s.Ae);return Ku(o)&&Ku(s.Ae)?m1(l):pf(s.serializer,l)}(t,e)}function UP(t,e,n){return t instanceof Do?y1(t,e):t instanceof Oo?_1(t,e):n}function g1(t,e){return t instanceof wl?function(r){return Ku(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xo extends hc{}class Do extends hc{constructor(e){super(),this.elements=e}}function y1(t,e){const n=v1(e);for(const r of t.elements)n.some(s=>Vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends hc{constructor(e){super(),this.elements=e}}function _1(t,e){let n=v1(e);for(const r of t.elements)n=n.filter(s=>!Vn(s,r));return{arrayValue:{values:n}}}class wl extends hc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Hm(t){return Xe(t.integerValue||t.doubleValue)}function v1(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.field=e,this.transform=n}}function jP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Do&&s instanceof Do||r instanceof Oo&&s instanceof Oo?ai(r.elements,s.elements,Vn):r instanceof wl&&s instanceof wl?Vn(r.Ae,s.Ae):r instanceof xo&&s instanceof xo}(t.transform,e.transform)}class BP{constructor(e,n){this.version=e,this.transformResults=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function b1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new w1(t.key,tr.none()):new Qo(t.key,t.data,tr.none());{const n=t.data,r=Zt.empty();let s=new st(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ps(t.key,r,new un(s.toArray()),tr.none())}}function zP(t,e,n){t instanceof Qo?function(s,i,o){const l=s.value.clone(),c=Gm(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,i,o){if(!Wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Gm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(E1(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof Qo?function(i,o,l,c){if(!Wa(i.precondition,o))return l;const u=i.value.clone(),f=Km(i.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ps?function(i,o,l,c){if(!Wa(i.precondition,o))return l;const u=Km(i.fieldTransforms,c,o),f=o.data;return f.setAll(E1(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return Wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function qP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=g1(r.transform,s||null);i!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,i))}return n||null}function Wm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,(i,o)=>jP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qo extends fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ps extends fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function E1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gm(t,e,n){const r=new Map;xe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,UP(o,l,n[s]))}return r}function Km(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,FP(i,o,e))}return r}class w1 extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HP extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=p1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=b1(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,(n,r)=>Wm(n,r))&&ai(this.baseMutations,e.baseMutations,(n,r)=>Wm(n,r))}}class mf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return DP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ae;function YP(t){switch(t){case z.OK:return fe(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function T1(t){if(t===void 0)return or("GRPC error has no .code"),z.UNKNOWN;switch(t){case Je.OK:return z.OK;case Je.CANCELLED:return z.CANCELLED;case Je.UNKNOWN:return z.UNKNOWN;case Je.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Je.INTERNAL:return z.INTERNAL;case Je.UNAVAILABLE:return z.UNAVAILABLE;case Je.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Je.NOT_FOUND:return z.NOT_FOUND;case Je.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Je.ABORTED:return z.ABORTED;case Je.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Je.DATA_LOSS:return z.DATA_LOSS;default:return fe(39323,{code:t})}}(Ae=Je||(Je={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=new Vr([4294967295,4294967295],0);function Ym(t){const e=QP().encode(t),n=new Uv;return n.update(e),new Uint8Array(n.digest())}function Qm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([s,i],0)]}class gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zi(`Invalid padding: ${n}`);if(r<0)throw new zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Vr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Vr.fromNumber(r)));return s.compare(XP)===1&&(s=new Vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ym(e),[r,s]=Qm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ym(e),[r,s]=Qm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(pe.min(),s,new Ke(be),ar(),Ee())}}class Xo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class I1{constructor(e,n){this.targetId=e,this.Ce=n}}class A1{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xm{constructor(){this.ve=0,this.Fe=Jm(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),r=Ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe(38017,{changeType:i})}}),new Xo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Jm()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,xe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class JP{constructor(e){this.Ge=e,this.ze=new Map,this.je=ar(),this.Je=Pa(),this.He=Pa(),this.Ye=new Ke(be)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Qu(i))if(r===0){const o=new ce(i.path);this.et(n,o,St.newNoDocument(o,pe.min()))}else xe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=zr(r).toUint8Array()}catch(c){if(c instanceof Qv)return oi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gf(o,s,i)}catch(c){return oi(c instanceof zi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Qu(l.target)){const c=new ce(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,St.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ee();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new dc(e,n,this.Ye,this.je,r);return this.je=ar(),this.Je=Pa(),this.He=Pa(),this.Ye=new Ke(be),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xm,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new st(be),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new st(be),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xm),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Pa(){return new Ke(ce.comparator)}function Jm(){return new Ke(ce.comparator)}const ZP={asc:"ASCENDING",desc:"DESCENDING"},eC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tC={and:"AND",or:"OR"};class nC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ju(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function Tl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rC(t,e){return Tl(t,e.toTimestamp())}function Nn(t){return xe(!!t,49232),pe.fromTimestamp(function(n){const r=Br(n);return new Be(r.seconds,r.nanos)}(t))}function yf(t,e){return Zu(t,e).canonicalString()}function Zu(t,e){const n=function(s){return new Ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function R1(t){const e=Ge.fromString(t);return xe(x1(e),10190,{key:e.toString()}),e}function eh(t,e){return yf(t.databaseId,e.path)}function ou(t,e){const n=R1(e);if(n.get(1)!==t.databaseId.projectId)throw new se(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(C1(n))}function P1(t,e){return yf(t.databaseId,e)}function sC(t){const e=R1(t);return e.length===4?Ge.emptyPath():C1(e)}function th(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C1(t){return xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zm(t,e,n){return{name:eh(t,e),fields:n.value.mapValue.fields}}function iC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(xe(f===void 0||typeof f=="string",58123),_t.fromBase64String(f||"")):(xe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),_t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?z.UNKNOWN:T1(u.code);return new se(f,u.message||"")}(o);n=new A1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ou(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):pe.min(),l=new Zt({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(s,i,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ga(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ou(t,r.document),i=r.readTime?Nn(r.readTime):pe.min(),o=St.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ga([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ou(t,r.document),i=r.removedTargetIds||[];n=new Ga([],i,s,null)}else{if(!("filter"in e))return fe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KP(s,i),l=r.targetId;n=new I1(l,o)}}return n}function oC(t,e){let n;if(e instanceof Qo)n={update:Zm(t,e.key,e.value)};else if(e instanceof w1)n={delete:eh(t,e.key)};else if(e instanceof Ps)n={update:Zm(t,e.key,e.data),updateMask:mC(e.fieldMask)};else{if(!(e instanceof HP))return fe(16599,{Vt:e.type});n={verify:eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof wl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw fe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe(27497)}(t,e.precondition)),n}function aC(t,e){return t&&t.length>0?(xe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(pe.min())&&(o=Nn(i)),new BP(o,s.transformResults||[])}(n,e))):[]}function lC(t,e){return{documents:[P1(t,e.path)]}}function cC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=P1(t,s);const i=function(u){if(u.length!==0)return N1(Mn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:zs(m.field),direction:fC(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ju(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function uC(t){let e=sC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(d){const m=k1(d);return m instanceof Mn&&o1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(C){return new El(qs(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(d){let m;return m=typeof d=="object"?d.value:d,oc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,y=d.values||[];return new bl(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,y=d.values||[];return new bl(y,m)}(n.endAt)),RP(e,s,o,i,l,"F",c,u)}function hC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qs(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qs(n.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=qs(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qs(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(qs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>k1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe(1026)}}(n.compositeFilter.op))}(t):fe(30097,{filter:t})}function fC(t){return ZP[t]}function dC(t){return eC[t]}function pC(t){return tC[t]}function zs(t){return{fieldPath:t.canonicalString()}}function qs(t){return yt.fromServerFormat(t.fieldPath)}function N1(t){return t instanceof rt?function(n){if(n.op==="=="){if($m(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(Um(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($m(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(Um(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:dC(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(s=>N1(s));return r.length===1?r[0]:{compositeFilter:{op:pC(n.op),filters:r}}}(t):fe(54877,{filter:t})}function mC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.yt=e}}function yC(t){const e=uC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this.Cn=new vC}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(jr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class vC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},D1=41943040;class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(D1,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ui(0)}static cr(){return new ui(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="LruGarbageCollector",bC=1048576;function ng([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class EC{constructor(e){this.Ir=e,this.buffer=new st(ng),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ng(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(tg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){yi(n)?Z(tg,"Ignoring IndexedDB error during garbage collection: ",n):await gi(n)}await this.Vr(3e5)})}}class TC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(ic.ce);const r=new EC(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(eg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),js()<=ve.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function IC(t,e){return new TC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&lo(r.mutation,s,un.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=cs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Bi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=ar();const o=ao(),l=function(){return ao()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Ps)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),lo(f.mutation,u,f.mutation.getFieldMask(),Be.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new SC(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ao();let s=new Ke((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||un.empty();f=l.applyToLocalView(u,f),r.set(c,f);const d=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,d=p1();f.forEach(m=>{if(!i.has(m)){const y=b1(n.get(m),r.get(m));y!==null&&d.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(cs());let l=Po,c=i;return o.next(u=>j.forEach(u,(f,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(f)?j.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ee())).next(f=>({batchId:l,changes:d1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=Bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(d,m){return new lc(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,St.newInvalidDocument(f)))});let l=Bi();return o.forEach((c,u)=>{const f=i.get(c);f!==void 0&&lo(f.mutation,u,un.empty(),Be.now()),uc(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:yC(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.overlays=new Ke(ce.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cs();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=cs(),i=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=cs(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=cs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return j.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GP(n,r));let i=this.qr.get(n);i===void 0&&(i=Ee(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.Qr=new st(ot.$r),this.Ur=new st(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ce(new Ge([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ce(new Ge([])),r=new ot(n,e),s=new ot(n,e+1);let i=Ee();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ce.comparator(e.key,n.key)||be(e.Yr,n.Yr)}static Kr(e,n){return be(e.Yr,n.Yr)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new st(ot.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WP(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?lf:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(be);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ce(i),0);let l=new st(be);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ot(n,0),s=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.ri=e,this.docs=function(){return new Ke(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,l=new ce(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||iP(sP(f),r)<=0||(s.has(f.key)||uc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DC(this)}getSize(e){return j.resolve(this.size)}}class DC extends AC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.persistence=e,this.si=new Rs(n=>hf(n),ff),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new _f,this.targetCount=0,this.ai=ui.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ui(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.ui={},this.overlays={},this.ci=new ic(0),this.li=!1,this.li=!0,this.hi=new kC,this.referenceDelegate=e(this),this.Pi=new OC(this),this.indexManager=new _C,this.remoteDocumentCache=function(s){return new xC(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new gC(n),this.Ii=new PC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new NC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new VC(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class VC extends aP{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.Ri=new _f,this.Vi=null}static mi(e){return new vf(e)}get fi(){if(this.Vi)return this.Vi;throw fe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const s=ce.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Il{constructor(e,n){this.persistence=e,this.pi=new Rs(r=>uP(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=IC(this,n)}static mi(e,n){return new Il(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qa(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return rA()?8:lP(kt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new MC;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(js()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(js()<=ve.DEBUG&&Z("QueryEngine","Query:",Bs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(js()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):j.resolve())}ys(e,n){if(qm(n))return j.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Xu(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Xu(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return qm(n)||s.isEqual(pe.min())?j.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(js()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bs(n)),this.vs(e,o,n,rP(s,Po)).next(l=>l))})}Ds(e,n){let r=new st(h1(e));return n.forEach((s,i)=>{uc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return js()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Bs(n)),this.ps.getDocumentsMatchingQuery(e,n,jr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="LocalStore",FC=3e8;class UC{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ke(be),this.xs=new Rs(i=>hf(i),ff),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function $C(t,e,n,r){return new UC(t,e,n,r)}async function V1(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const u of s){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function jC(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const d=u.batch,m=d.keys();let y=j.resolve();return m.forEach(C=>{y=y.next(()=>f.getEntry(c,C)).next(k=>{const x=u.docVersions.get(C);xe(x!==null,48541),k.version.compareTo(x)<0&&(d.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function M1(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function BC(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,d)=>{const m=s.get(d);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,d)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(_t.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(d,y),function(k,x,R){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=FC?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(m,y,f)&&l.push(n.Pi.updateTargetData(i,y))});let c=ar(),u=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(zC(i,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(pe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function zC(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ar();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z(Ef,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function qC(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HC(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function nh(t,e,n){const r=ge(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yi(o))throw o;Z(Ef,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function rg(t,e,n){const r=ge(t);let s=pe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const d=ge(c),m=d.xs.get(f);return m!==void 0?j.resolve(d.Ms.get(m)):d.Pi.getTargetData(u,f)}(r,o,kn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ee())).next(l=>(WC(r,kP(e),l),{documents:l,Qs:i})))}function WC(t,e,n){let r=t.Os.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class sg{constructor(){this.activeTargetIds=MP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GC{constructor(){this.Mo=new sg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new sg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="ConnectivityMonitor";class og{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(ig,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(ig,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca=null;function rh(){return Ca===null?Ca=function(){return 268435456+Math.round(2147483648*Math.random())}():Ca++,"0x"+Ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="RestConnection",YC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class QC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===_l?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=rh(),l=this.zo(e,n.toUriEncodedString());Z(au,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),f=Qr(u);return this.Jo(e,l,c,r,f).then(d=>(Z(au,`Received RPC '${e}' ${o}: `,d),d),d=>{throw oi(au,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=YC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class JC extends QC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=rh();return new Promise((l,c)=>{const u=new $v;u.setWithCredentials(!0),u.listenOnce(jv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case za.NO_ERROR:const d=u.getResponseJson();Z(wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case za.TIMEOUT:Z(wt,`RPC '${e}' ${o} timed out`),c(new se(z.DEADLINE_EXCEEDED,"Request time out"));break;case za.HTTP_ERROR:const m=u.getStatus();if(Z(wt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const C=y?.error;if(C&&C.status&&C.message){const k=function(R){const N=R.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(N)>=0?N:z.UNKNOWN}(C.status);c(new se(k,C.message))}else c(new se(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new se(z.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(wt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Z(wt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=rh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qv(),l=zv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(wt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const d=o.createWebChannel(f,c);this.I_(d);let m=!1,y=!1;const C=new XC({Yo:x=>{y?Z(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(Z(wt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),Z(wt,`RPC '${e}' stream ${s} sending:`,x),d.send(x))},Zo:()=>d.close()}),k=(x,R,N)=>{x.listen(R,V=>{try{N(V)}catch(U){setTimeout(()=>{throw U},0)}})};return k(d,ji.EventType.OPEN,()=>{y||(Z(wt,`RPC '${e}' stream ${s} transport opened.`),C.o_())}),k(d,ji.EventType.CLOSE,()=>{y||(y=!0,Z(wt,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(d))}),k(d,ji.EventType.ERROR,x=>{y||(y=!0,oi(wt,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),C.a_(new se(z.UNAVAILABLE,"The operation could not be completed")))}),k(d,ji.EventType.MESSAGE,x=>{if(!y){const R=x.data[0];xe(!!R,16349);const N=R,V=N?.error||N[0]?.error;if(V){Z(wt,`RPC '${e}' stream ${s} received error:`,V);const U=V.status;let ee=function(v){const b=Je[v];if(b!==void 0)return T1(b)}(U),ie=V.message;ee===void 0&&(ee=z.INTERNAL,ie="Unknown error status: "+U+" with message "+V.message),y=!0,C.a_(new se(ee,ie)),d.close()}else Z(wt,`RPC '${e}' stream ${s} received:`,R),C.u_(R)}}),k(l,Bv.STAT_EVENT,x=>{x.stat===Hu.PROXY?Z(wt,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Hu.NOPROXY&&Z(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function lu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return new nC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="PersistentStream";class F1{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new L1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new se(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Z(ag,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Z(ag,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZC extends F1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=iC(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Nn(o.readTime):pe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=th(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Qu(c)?{documents:lC(i,c)}:{query:cC(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=S1(i,o.resumeToken);const u=Ju(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=Tl(i,o.snapshotVersion.toTimestamp());const u=Ju(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=hC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=th(this.serializer),n.removeTarget=e,this.q_(n)}}class e4 extends F1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=aC(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=th(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{}class n4 extends t4{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new se(z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Zu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(z.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Zu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(z.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class r4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="RemoteStore";class s4{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(Z(_s,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.Ea.add(4),await Jo(u),u.Ra.set("Unknown"),u.Ea.delete(4),await mc(u)}(this))})}),this.Ra=new r4(r,s)}}async function mc(t){if(Cs(t))for(const e of t.da)await e(!0)}async function Jo(t){for(const e of t.da)await e(!1)}function U1(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Af(n)?If(n):_i(n).O_()&&Tf(n,e))}function wf(t,e){const n=ge(t),r=_i(n);n.Ia.delete(e),r.O_()&&$1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Cs(n)&&n.Ra.set("Unknown"))}function Tf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_i(t).Y_(e)}function $1(t,e){t.Va.Ue(e),_i(t).Z_(e)}function If(t){t.Va=new JP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),_i(t).start(),t.Ra.ua()}function Af(t){return Cs(t)&&!_i(t).x_()&&t.Ia.size>0}function Cs(t){return ge(t).Ea.size===0}function j1(t){t.Va=void 0}async function i4(t){t.Ra.set("Online")}async function o4(t){t.Ia.forEach((e,n)=>{Tf(t,e)})}async function a4(t,e){j1(t),Af(t)?(t.Ra.ha(e),If(t)):t.Ra.set("Unknown")}async function l4(t,e,n){if(t.Ra.set("Online"),e instanceof A1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){Z(_s,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Al(t,r)}else if(e instanceof Ga?t.Va.Ze(e):e instanceof I1?t.Va.st(e):t.Va.tt(e),!n.isEqual(pe.min()))try{const r=await M1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=i.Ia.get(c);if(!f)return;i.Ia.set(c,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),$1(i,c);const d=new Nr(f.target,c,u,f.sequenceNumber);Tf(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z(_s,"Failed to raise snapshot:",r),await Al(t,r)}}async function Al(t,e,n){if(!yi(e))throw e;t.Ea.add(1),await Jo(t),t.Ra.set("Offline"),n||(n=()=>M1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(_s,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await mc(t)})}function B1(t,e){return e().catch(n=>Al(t,n,e))}async function gc(t){const e=ge(t),n=Hr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lf;for(;c4(e);)try{const s=await qC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,u4(e,s)}catch(s){await Al(e,s)}z1(e)&&q1(e)}function c4(t){return Cs(t)&&t.Ta.length<10}function u4(t,e){t.Ta.push(e);const n=Hr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function z1(t){return Cs(t)&&!Hr(t).x_()&&t.Ta.length>0}function q1(t){Hr(t).start()}async function h4(t){Hr(t).ra()}async function f4(t){const e=Hr(t);for(const n of t.Ta)e.ea(n.mutations)}async function d4(t,e,n){const r=t.Ta.shift(),s=mf.from(r,e,n);await B1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gc(t)}async function p4(t,e){e&&Hr(t).X_&&await async function(r,s){if(function(o){return YP(o)&&o!==z.ABORTED}(s.code)){const i=r.Ta.shift();Hr(r).B_(),await B1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gc(r)}}(t,e),z1(t)&&q1(t)}async function lg(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),Z(_s,"RemoteStore received new credentials");const r=Cs(n);n.Ea.add(3),await Jo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await mc(n)}async function m4(t,e){const n=ge(t);e?(n.Ea.delete(2),await mc(n)):e||(n.Ea.add(2),await Jo(n),n.Ra.set("Unknown"))}function _i(t){return t.ma||(t.ma=function(n,r,s){const i=ge(n);return i.sa(),new ZC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:i4.bind(null,t),t_:o4.bind(null,t),r_:a4.bind(null,t),H_:l4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Af(t)?If(t):t.Ra.set("Unknown")):(await t.ma.stop(),j1(t))})),t.ma}function Hr(t){return t.fa||(t.fa=function(n,r,s){const i=ge(n);return i.sa(),new e4(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:h4.bind(null,t),r_:p4.bind(null,t),ta:f4.bind(null,t),na:d4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await gc(t)):(await t.fa.stop(),t.Ta.length>0&&(Z(_s,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Sf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rf(t,e){if(or("AsyncQueue",`${e}: ${t}`),yi(t))return new se(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static emptySet(e){return new ei(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Bi(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.ga=new Ke(ce.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):fe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class hi{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new hi(e,n,ei.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class y4{constructor(){this.queries=ug(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=ug(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new se(z.ABORTED,"Firestore shutting down"))}}function ug(){return new Rs(t=>u1(t),cc)}async function _4(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new g4,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Rf(o,`Initialization of query '${Bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Pf(n)}async function v4(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function b4(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Pf(n)}function E4(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Pf(t){t.Ca.forEach(e=>{e.next()})}var sh,hg;(hg=sh||(sh={})).Ma="default",hg.Cache="cache";class w4{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.key=e}}class W1{constructor(e){this.key=e}}class T4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ee(),this.mutatedKeys=Ee(),this.eu=h1(e),this.tu=new ei(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new cg,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,d)=>{const m=s.get(f),y=uc(this.query,d)?d:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let x=!1;m&&y?m.data.isEqual(y.data)?C!==k&&(r.track({type:3,doc:y}),x=!0):this.su(m,y)||(r.track({type:2,doc:y}),x=!0,(c&&this.eu(y,c)>0||u&&this.eu(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),x=!0):m&&!y&&(r.track({type:1,doc:m}),x=!0,(c||u)&&(l=!0)),x&&(y?(o=o.add(y),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,d)=>function(y,C){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Rt:x})}};return k(y)-k(C)}(f.type,d.type)||this.eu(f.doc,d.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new hi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new cg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ee(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new W1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new H1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ee();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return hi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Cf="SyncEngine";class I4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A4{constructor(e){this.key=e,this.hu=!1}}class S4{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Rs(l=>u1(l),cc),this.Iu=new Map,this.Eu=new Set,this.du=new Ke(ce.comparator),this.Au=new Map,this.Ru=new _f,this.Vu={},this.mu=new Map,this.fu=ui.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function R4(t,e,n=!0){const r=J1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await G1(r,e,n,!0),s}async function P4(t,e){const n=J1(t);await G1(n,e,!0,!1)}async function G1(t,e,n,r){const s=await HC(t.localStore,kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await C4(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&U1(t.remoteStore,s),l}async function C4(t,e,n,r,s){t.pu=(d,m,y)=>async function(k,x,R,N){let V=x.view.ru(R);V.Cs&&(V=await rg(k.localStore,x.query,!1).then(({documents:S})=>x.view.ru(S,V)));const U=N&&N.targetChanges.get(x.targetId),ee=N&&N.targetMismatches.get(x.targetId)!=null,ie=x.view.applyChanges(V,k.isPrimaryClient,U,ee);return dg(k,x.targetId,ie.au),ie.snapshot}(t,d,m,y);const i=await rg(t.localStore,e,!0),o=new T4(e,i.Qs),l=o.ru(i.documents),c=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);dg(t,n,u.au);const f=new I4(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function k4(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!cc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&wf(r.remoteStore,s.targetId),ih(r,s.targetId)}).catch(gi)):(ih(r,s.targetId),await nh(r.localStore,s.targetId,!0))}async function N4(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wf(n.remoteStore,r.targetId))}async function x4(t,e,n){const r=U4(t);try{const s=await function(o,l){const c=ge(o),u=Be.now(),f=l.reduce((y,C)=>y.add(C.key),Ee());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let C=ar(),k=Ee();return c.Ns.getEntries(y,f).next(x=>{C=x,C.forEach((R,N)=>{N.isValidDocument()||(k=k.add(R))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,C)).next(x=>{d=x;const R=[];for(const N of l){const V=qP(N,d.get(N.key).overlayedDocument);V!=null&&R.push(new Ps(N.key,V,r1(V.value.mapValue),tr.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,R,l)}).next(x=>{m=x;const R=x.applyToLocalDocumentSet(d,k);return c.documentOverlayCache.saveOverlays(y,x.batchId,R)})}).then(()=>({batchId:m.batchId,changes:d1(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ke(be)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await Zo(r,s.changes),await gc(r.remoteStore)}catch(s){const i=Rf(s,"Failed to persist write");n.reject(i)}}async function K1(t,e){const n=ge(t);try{const r=await BC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?xe(o.hu,14607):s.removedDocuments.size>0&&(xe(o.hu,42227),o.hu=!1))}),await Zo(n,r,e)}catch(r){await gi(r)}}function fg(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((f,d)=>{for(const m of d.Sa)m.va(l)&&(u=!0)}),u&&Pf(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D4(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ke(ce.comparator);o=o.insert(i,St.newNoDocument(i,pe.min()));const l=Ee().add(i),c=new dc(pe.min(),new Map,new Ke(be),o,l);await K1(r,c),r.du=r.du.remove(i),r.Au.delete(e),kf(r)}else await nh(r.localStore,e,!1).then(()=>ih(r,e,n)).catch(gi)}async function O4(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await jC(n.localStore,e);Q1(n,r,null),Y1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,s)}catch(s){await gi(s)}}async function V4(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(xe(d!==null,37113),f=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Q1(r,e,n),Y1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,s)}catch(s){await gi(s)}}function Y1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Q1(t,e,n){const r=ge(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||X1(t,r)})}function X1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(wf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),kf(t))}function dg(t,e,n){for(const r of n)r instanceof H1?(t.Ru.addReference(r.key,e),M4(t,r)):r instanceof W1?(Z(Cf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||X1(t,r.key)):fe(19791,{wu:r})}function M4(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(Cf,"New document in limbo: "+n),t.Eu.add(r),kf(t))}function kf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ce(Ge.fromString(e)),r=t.fu.next();t.Au.set(r,new A4(n)),t.du=t.du.insert(n,r),U1(t.remoteStore,new Nr(kn(df(n.path)),r,"TargetPurposeLimboResolution",ic.ce))}}async function Zo(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=bf.As(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const f=ge(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(u,m=>j.forEach(m.Es,y=>f.persistence.referenceDelegate.addReference(d,m.targetId,y)).next(()=>j.forEach(m.ds,y=>f.persistence.referenceDelegate.removeReference(d,m.targetId,y)))))}catch(d){if(!yi(d))throw d;Z(Ef,"Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const y=f.Ms.get(m),C=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(m,k)}}}(r.localStore,i))}async function L4(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){Z(Cf,"User change. New user:",e.toKey());const r=await V1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new se(z.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.Ls)}}function F4(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return Ee().add(r.key);{let s=Ee();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function J1(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D4.bind(null,e),e.Pu.H_=b4.bind(null,e.eventManager),e.Pu.yu=E4.bind(null,e.eventManager),e}function U4(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V4.bind(null,e),e}class Sl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return $C(this.persistence,new LC,e.initialUser,this.serializer)}Cu(e){return new O1(vf.mi,this.serializer)}Du(e){return new GC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sl.provider={build:()=>new Sl};class $4 extends Sl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){xe(this.persistence.referenceDelegate instanceof Il,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new O1(r=>Il.mi(r,n),this.serializer)}}class oh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=L4.bind(null,this.syncEngine),await m4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new y4}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=function(i){return new JC(i)}(e.databaseInfo);return function(i,o,l,c){return new n4(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new s4(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>fg(this.syncEngine,n,0),function(){return og.v()?new og:new KC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,f){const d=new S4(s,i,o,l,c,u);return f&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=ge(n);Z(_s,"RemoteStore shutting down."),r.Ea.add(5),await Jo(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}oh.provider={build:()=>new oh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="FirestoreClient";class B4{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z(Wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(Wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cu(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await V1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function pg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await z4(t);Z(Wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>lg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>lg(e.remoteStore,s)),t._onlineComponents=e}async function z4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Wr,"Using user provided OfflineComponentProvider");try{await cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;oi("Error using user provided cache. Falling back to memory cache: "+n),await cu(t,new Sl)}}else Z(Wr,"Using default OfflineComponentProvider"),await cu(t,new $4(void 0));return t._offlineComponents}async function Z1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Wr,"Using user provided OnlineComponentProvider"),await pg(t,t._uninitializedComponentsProvider._online)):(Z(Wr,"Using default OnlineComponentProvider"),await pg(t,new oh))),t._onlineComponents}function q4(t){return Z1(t).then(e=>e.syncEngine)}async function H4(t){const e=await Z1(t),n=e.eventManager;return n.onListen=R4.bind(null,e.syncEngine),n.onUnlisten=k4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=P4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=N4.bind(null,e.syncEngine),n}function W4(t,e,n={}){const r=new Mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const f=new j4({next:m=>{f.Nu(),o.enqueueAndForget(()=>v4(i,d));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new se(z.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new se(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new w4(df(l.path),f,{includeMetadataChanges:!0,qa:!0});return _4(i,d)}(await H4(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="firestore.googleapis.com",gg=!0;class yg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=t0,this.ssl=gg}else this.host=e.host,this.ssl=e.ssl??gg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=D1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bC)throw new se(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=e0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new se(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new se(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new se(z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HR;switch(r.type){case"firstParty":return new YR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mg.get(n);r&&(Z("ComponentProvider","Removing Datastore"),mg.delete(n),r.terminate())}(this),Promise.resolve()}}function G4(t,e,n,r={}){t=Ro(t,Nf);const s=Qr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Zl(`https://${l}`),ec("Firestore",!0)),i.host!==t0&&i.host!==l&&oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!$r(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=It.MOCK_USER;else{u=Y_(r.mockUserToken,t._app?.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new se(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(d)}t._authCredentials=new WR(new Wv(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xf(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Yo(n,at._jsonSchema))return new at(e,r||null,new ce(Ge.fromString(n.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:et("string",at._jsonSchemaVersion),referencePath:et("string")};class Vo extends xf{constructor(e,n,r){super(e,n,df(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new ce(e))}withConverter(e){return new Vo(this.firestore,e,this._path)}}function n0(t,e,...n){if(t=it(t),arguments.length===1&&(e=of.newId()),tP("doc","path",e),t instanceof Nf){const r=Ge.fromString(e,...n);return Nm(r),new at(t,null,new ce(r))}{if(!(t instanceof at||t instanceof Vo))throw new se(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Nm(r),new at(t.firestore,t instanceof Vo?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="AsyncQueue";class vg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new L1(this,"async_queue_retry"),this._c=()=>{const r=lu();r&&Z(_g,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=lu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=lu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Mr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!yi(e))throw e;Z(_g,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",bg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Sf.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&fe(47125,{Pc:bg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function bg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Df extends Nf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new vg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vg(e),this._firestoreClient=void 0,await e}}}function K4(t,e){const n=typeof t=="object"?t:qo(),r=typeof t=="string"?t:_l,s=hr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Wh("firestore");i&&G4(s,...i)}return s}function r0(t){if(t._terminated)throw new se(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Y4(t),t._firestoreClient}function Y4(t){const e=t._freezeSettings(),n=function(s,i,o,l){return new dP(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,e0(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new B4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(_t.fromBase64String(e))}catch(n){throw new se(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yo(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:et("string",en._jsonSchemaVersion),bytes:et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(Yo(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:et("string",xn._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yo(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Dn(e.vectorValues);throw new se(z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:et("string",Dn._jsonSchemaVersion),vectorValues:et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4=/^__.*__$/;class X4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qo(e,this.data,n,this.fieldTransforms)}}function s0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ac:t})}}class Mf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Mf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Rl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(s0(this.Ac)&&Q4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class J4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}Cc(e,n,r,s=!1){return new Mf({Ac:e,methodName:n,Dc:r,path:yt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Z4(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new J4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ek(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);l0("Data must be an object, but it was:",o,r);const l=o0(r,o);let c,u;if(i.merge)c=new un(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const m=tk(e,d,n);if(!o.contains(m))throw new se(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);rk(f,m)||f.push(m)}c=new un(f),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new X4(new Zt(l),c,u)}class Lf extends Vf{_toFieldTransform(e){return new $P(e.path,new xo)}isEqual(e){return e instanceof Lf}}function i0(t,e){if(a0(t=it(t)))return l0("Unsupported field value:",e,t),o0(t,e);if(t instanceof Vf)return function(r,s){if(!s0(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=i0(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Tl(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tl(s.serializer,i)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:S1(s.serializer,r._byteString)};if(r instanceof at){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dn)return function(o,l){return{mapValue:{fields:{[t1]:{stringValue:n1},[vl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return pf(l.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${af(r)}`)}(t,e)}function o0(t,e){const n={};return Yv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(t,(r,s)=>{const i=i0(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function a0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof xn||t instanceof en||t instanceof at||t instanceof Vf||t instanceof Dn)}function l0(t,e,n){if(!a0(n)||!Gv(n)){const r=af(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function tk(t,e,n){if((e=it(e))instanceof Of)return e._internalPath;if(typeof e=="string")return c0(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const nk=new RegExp("[~\\*/\\[\\]]");function c0(t,e,n){if(e.search(nk)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Of(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new se(z.INVALID_ARGUMENT,l+t+c)}function rk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(h0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sk extends u0{data(){return super.data()}}function h0(t,e){return typeof e=="string"?c0(t,e):e instanceof Of?e._internalPath:e._delegate._internalPath}class ik{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ss(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[vl].arrayValue?.values?.map(r=>Xe(r.doubleValue));return new Dn(n)}convertGeoPoint(e){return new xn(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);xe(x1(r),9688,{name:e});const s=new ko(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends u0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(h0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ds._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:et("string",ds._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class Ka extends ds{data(e={}){return super.data(e)}}class co{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ka(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Ka(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ka(s._firestore,s._userDataWriter,l.doc.key,l.doc,new qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ak(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=co._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ak(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){t=Ro(t,at);const e=Ro(t.firestore,Df);return W4(r0(e),t._key).then(n=>fk(e,t,n))}co._jsonSchemaVersion="firestore/querySnapshot/1.0",co._jsonSchema={type:et("string",co._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};class ck extends ik{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function uk(t,e,n){t=Ro(t,at);const r=Ro(t.firestore,Df),s=ok(t.converter,e);return hk(r,[ek(Z4(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tr.none())])}function hk(t,e){return function(r,s){const i=new Mr;return r.asyncQueue.enqueueAndForget(async()=>x4(await q4(r),s,i)),i.promise}(r0(t),e)}function fk(t,e,n){const r=n.docs.get(e._key),s=new ck(t);return new ds(t,s,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}function Eg(){return new Lf("serverTimestamp")}(function(e,n=!0){(function(s){mi=s})(As),rn(new Gt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Df(new GR(r.getProvider("auth-internal")),new QR(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new se(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ct(Rm,Pm,e),Ct(Rm,Pm,"esm2020")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s?.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="us-central1";class pk{constructor(e,n,r,s,i=ah,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new dk(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=ah}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function mk(t,e,n){const r=Qr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Zl(t.emulatorOrigin),ec("Functions",!0))}const wg="@firebase/functions",Tg="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="auth-internal",yk="app-check-internal",_k="messaging-internal";function vk(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(gk),o=n.getProvider(_k),l=n.getProvider(yk);return new pk(s,i,o,l,r)};rn(new Gt(f0,e,"PUBLIC").setMultipleInstances(!0)),Ct(wg,Tg,t),Ct(wg,Tg,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t=qo(),e=ah){const r=hr(it(t),f0).getImmediate({identifier:e}),s=Wh("functions");return s&&Ek(r,...s),r}function Ek(t,e,n){mk(it(t),e,n)}vk();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="firebasestorage.googleapis.com",wk="storageBucket",Tk=120*1e3,Ik=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends on{constructor(e,n,r=0){super(uu(e),`Firebase Storage: ${n} (${uu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Un.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ln||(Ln={}));function uu(t){return"storage/"+t}function Ak(){const t="An unknown error occurred, please check the error payload for server response.";return new Un(Ln.UNKNOWN,t)}function Sk(){return new Un(Ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Rk(){return new Un(Ln.CANCELED,"User canceled the upload/download.")}function Pk(t){return new Un(Ln.INVALID_URL,"Invalid URL '"+t+"'.")}function Ck(t){return new Un(Ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ig(t){return new Un(Ln.INVALID_ARGUMENT,t)}function p0(){return new Un(Ln.APP_DELETED,"The Firebase app was deleted.")}function kk(t){return new Un(Ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw Ck(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${d}/${f}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},k=n===d0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",R=new RegExp(`^https?://${k}/${s}/${x}`,"i"),V=[{regex:l,indices:c,postModify:i},{regex:y,indices:C,postModify:u},{regex:R,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<V.length;U++){const ee=V[U],ie=ee.regex.exec(e);if(ie){const S=ie[ee.indices.bucket];let v=ie[ee.indices.path];v||(v=""),r=new hn(S,v),ee.postModify(r);break}}if(r==null)throw Pk(e);return r}}class Nk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...x){u||(u=!0,e.apply(null,x))}function d(x){s=setTimeout(()=>{s=null,t(y,c())},x)}function m(){i&&clearTimeout(i)}function y(x,...R){if(u){m();return}if(x){m(),f.call(null,x,...R);return}if(c()||o){m(),f.call(null,x,...R);return}r<64&&(r*=2);let V;l===1?(l=2,V=0):V=(r+Math.random())*1e3,d(V)}let C=!1;function k(x){C||(C=!0,m(),!u&&(s!==null?(x||(l=2),clearTimeout(s),d(0)):x||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function Dk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){return t!==void 0}function Ag(t,e,n,r){if(r<e)throw Ig(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ig(`Invalid value for '${t}'. Expected ${n} or less.`)}function Vk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Pl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pl||(Pl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,r,s,i,o,l,c,u,f,d,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,k)=>{this.resolve_=C,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ka(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Pl.NO_ERROR,c=i.getStatus();if(!l||Mk(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Pl.ABORT;r(!1,new ka(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new ka(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Ok(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Ak();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?p0():Rk();o(c)}else{const c=Sk();o(c)}};this.canceled_?n(!1,new ka(!1,null,!0)):this.backoffId_=xk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Dk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ka{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Fk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Uk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $k(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Bk(t,e,n,r,s,i,o=!0,l=!1){const c=Vk(t.urlParams),u=t.url+c,f=Object.assign({},t.headers);return $k(f,e),Fk(f,n),Uk(f,i),jk(f,r),new Lk(u,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cl(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qk(this._location.path)}get storage(){return this._service}get parent(){const e=zk(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new Cl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kk(e)}}function Sg(t,e){const n=e?.[wk];return n==null?null:hn.makeFromBucketSpec(n,t)}function Hk(t,e,n,r={}){t.host=`${e}:${n}`;const s=Qr(e);s&&(Zl(`https://${t.host}/b`),ec("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Y_(i,t.app.options.projectId))}class Wk{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=d0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tk,this._maxUploadRetryTime=Ik,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=Sg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=Sg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ag("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ag("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cl(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Nk(p0());{const o=Bk(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Rg="@firebase/storage",Pg="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="storage";function Gk(t=qo(),e){t=it(t);const r=hr(t,m0).getImmediate({identifier:e}),s=Wh("storage");return s&&Kk(r,...s),r}function Kk(t,e,n,r={}){Hk(t,e,n,r)}function Yk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Wk(n,r,s,e,As)}function Qk(){rn(new Gt(m0,Yk,"PUBLIC").setMultipleInstances(!0)),Ct(Rg,Pg,""),Ct(Rg,Pg,"esm2020")}Qk();const g0="@firebase/installations",Ff="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=1e4,_0=`w:${Ff}`,v0="FIS_v2",Xk="https://firebaseinstallations.googleapis.com/v1",Jk=3600*1e3,Zk="installations",e3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vs=new Is(Zk,e3,t3);function b0(t){return t instanceof on&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0({projectId:t}){return`${Xk}/projects/${t}/installations`}function w0(t){return{token:t.token,requestStatus:2,expiresIn:r3(t.expiresIn),creationTime:Date.now()}}async function T0(t,e){const r=(await e.json()).error;return vs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function n3(t,{refreshToken:e}){const n=I0(t);return n.append("Authorization",s3(e)),n}async function A0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function r3(t){return Number(t.replace("s","000"))}function s3(t){return`${v0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=E0(t),s=I0(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:v0,appId:t.appId,sdkVersion:_0},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await A0(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:w0(u.authToken)}}else throw await T0("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a3=/^[cdef][\w-]{21}$/,lh="";function l3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=c3(t);return a3.test(n)?n:lh}catch{return lh}}function c3(t){return o3(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Map;function P0(t,e){const n=yc(t);C0(n,e),u3(n,e)}function C0(t,e){const n=R0.get(t);if(n)for(const r of n)r(e)}function u3(t,e){const n=h3();n&&n.postMessage({key:t,fid:e}),f3()}let us=null;function h3(){return!us&&"BroadcastChannel"in self&&(us=new BroadcastChannel("[Firebase] FID Change"),us.onmessage=t=>{C0(t.data.key,t.data.fid)}),us}function f3(){R0.size===0&&us&&(us.close(),us=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3="firebase-installations-database",p3=1,bs="firebase-installations-store";let hu=null;function Uf(){return hu||(hu=tv(d3,p3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bs)}}})),hu}async function kl(t,e){const n=yc(t),s=(await Uf()).transaction(bs,"readwrite"),i=s.objectStore(bs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&P0(t,e.fid),e}async function k0(t){const e=yc(t),r=(await Uf()).transaction(bs,"readwrite");await r.objectStore(bs).delete(e),await r.done}async function _c(t,e){const n=yc(t),s=(await Uf()).transaction(bs,"readwrite"),i=s.objectStore(bs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&P0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(t){let e;const n=await _c(t.appConfig,r=>{const s=m3(r),i=g3(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===lh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function m3(t){const e=t||{fid:l3(),registrationStatus:0};return N0(e)}function g3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(vs.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=y3(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_3(t)}:{installationEntry:e}}async function y3(t,e){try{const n=await i3(t,e);return kl(t.appConfig,n)}catch(n){throw b0(n)&&n.customData.serverCode===409?await k0(t.appConfig):await kl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _3(t){let e=await Cg(t.appConfig);for(;e.registrationStatus===1;)await S0(100),e=await Cg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $f(t);return r||n}return e}function Cg(t){return _c(t,e=>{if(!e)throw vs.create("installation-not-found");return N0(e)})}function N0(t){return v3(t)?{fid:t.fid,registrationStatus:0}:t}function v3(t){return t.registrationStatus===1&&t.registrationTime+y0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b3({appConfig:t,heartbeatServiceProvider:e},n){const r=E3(t,n),s=n3(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:_0,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await A0(()=>fetch(r,l));if(c.ok){const u=await c.json();return w0(u)}else throw await T0("Generate Auth Token",c)}function E3(t,{fid:e}){return`${E0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(t,e=!1){let n;const r=await _c(t.appConfig,i=>{if(!x0(i))throw vs.create("not-registered");const o=i.authToken;if(!e&&I3(o))return i;if(o.requestStatus===1)return n=w3(t,e),i;{if(!navigator.onLine)throw vs.create("app-offline");const l=S3(i);return n=T3(t,l),l}});return n?await n:r.authToken}async function w3(t,e){let n=await kg(t.appConfig);for(;n.authToken.requestStatus===1;)await S0(100),n=await kg(t.appConfig);const r=n.authToken;return r.requestStatus===0?jf(t,e):r}function kg(t){return _c(t,e=>{if(!x0(e))throw vs.create("not-registered");const n=e.authToken;return R3(n)?{...e,authToken:{requestStatus:0}}:e})}async function T3(t,e){try{const n=await b3(t,e),r={...e,authToken:n};return await kl(t.appConfig,r),n}catch(n){if(b0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await k0(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await kl(t.appConfig,r)}throw n}}function x0(t){return t!==void 0&&t.registrationStatus===2}function I3(t){return t.requestStatus===2&&!A3(t)}function A3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jk}function S3(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function R3(t){return t.requestStatus===1&&t.requestTime+y0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P3(t){const e=t,{installationEntry:n,registrationPromise:r}=await $f(e);return r?r.catch(console.error):jf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C3(t,e=!1){const n=t;return await k3(n),(await jf(n,e)).token}async function k3(t){const{registrationPromise:e}=await $f(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N3(t){if(!t||!t.options)throw fu("App Configuration");if(!t.name)throw fu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw fu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fu(t){return vs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="installations",x3="installations-internal",D3=t=>{const e=t.getProvider("app").getImmediate(),n=N3(e),r=hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},O3=t=>{const e=t.getProvider("app").getImmediate(),n=hr(e,D0).getImmediate();return{getId:()=>P3(n),getToken:s=>C3(n,s)}};function V3(){rn(new Gt(D0,D3,"PUBLIC")),rn(new Gt(x3,O3,"PRIVATE"))}V3();Ct(g0,Ff);Ct(g0,Ff,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="analytics",M3="firebase_id",L3="origin",F3=60*1e3,U3="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new tc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Wt=new Is("analytics","Analytics",$3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(t){if(!t.startsWith(Bf)){const e=Wt.create("invalid-gtag-resource",{gtagURL:t});return $t.warn(e.message),""}return t}function O0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function B3(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function z3(t,e){const n=B3("firebase-js-sdk-policy",{createScriptURL:j3}),r=document.createElement("script"),s=`${Bf}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function q3(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function H3(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await O0(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){$t.error(l)}t("config",s,i)}async function W3(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await O0(n);for(const c of o){const u=l.find(d=>d.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){$t.error(i)}}function G3(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await W3(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await H3(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){$t.error(l)}}return s}function K3(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=G3(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Y3(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Bf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3=30,X3=1e3;class J3{constructor(e={},n=X3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const V0=new J3;function Z3(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function eN(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:Z3(n)},s=U3.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const l=await i.json();l.error?.message&&(o=l.error.message)}catch{}throw Wt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function tN(t,e=V0,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Wt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Wt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new sN;return setTimeout(async()=>{l.abort()},F3),M0({appId:r,apiKey:s,measurementId:i},o,l,e)}async function M0(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=V0){const{appId:i,measurementId:o}=t;try{await nN(r,e)}catch(l){if(o)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw l}try{const l=await eN(t);return s.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!rN(c)){if(s.deleteThrottleMetadata(i),o)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?Jp(n,s.intervalMillis,Q3):Jp(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,f),$t.debug(`Calling attemptFetch again in ${u} millis`),M0(t,f,r,s)}}function nN(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rN(t){if(!(t instanceof on)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class sN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iN(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(){if(X_())try{await J_()}catch(t){return $t.warn(Wt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return $t.warn(Wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aN(t,e,n,r,s,i,o){const l=tN(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>$t.error(m)),e.push(l);const c=oN().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([l,c]);Y3(i)||z3(i,u.measurementId),s("js",new Date);const d=o?.config??{};return d[L3]="firebase",d.update=!0,f!=null&&(d[M3]=f),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.app=e}_delete(){return delete uo[this.app.options.appId],Promise.resolve()}}let uo={},Ng=[];const xg={};let du="dataLayer",cN="gtag",Dg,L0,Og=!1;function uN(){const t=[];if(Q_()&&t.push("This is a browser extension environment."),sA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Wt.create("invalid-analytics-context",{errorInfo:e});$t.warn(n.message)}}function hN(t,e,n){uN();const r=t.options.appId;if(!r)throw Wt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Wt.create("no-api-key");if(uo[r]!=null)throw Wt.create("already-exists",{id:r});if(!Og){q3(du);const{wrappedGtag:i,gtagCore:o}=K3(uo,Ng,xg,du,cN);L0=i,Dg=o,Og=!0}return uo[r]=aN(t,Ng,xg,e,Dg,du,n),new lN(t)}function fN(t=qo()){t=it(t);const e=hr(t,Nl);return e.isInitialized()?e.getImmediate():dN(t)}function dN(t,e={}){const n=hr(t,Nl);if(n.isInitialized()){const s=n.getImmediate();if($r(e,n.getOptions()))return s;throw Wt.create("already-initialized")}return n.initialize({options:e})}function pN(t,e,n,r){t=it(t),iN(L0,uo[t.app.options.appId],e,n,r).catch(s=>$t.error(s))}const Vg="@firebase/analytics",Mg="0.10.18";function mN(){rn(new Gt(Nl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return hN(r,s,n)},"PUBLIC")),rn(new Gt("analytics-internal",t,"PRIVATE")),Ct(Vg,Mg),Ct(Vg,Mg,"esm2020");function t(e){try{const n=e.getProvider(Nl).getImmediate();return{logEvent:(r,s,i)=>pN(n,r,s,i)}}catch(n){throw Wt.create("interop-component-reg-failed",{reason:n})}}}mN();const gN={apiKey:"AIzaSyCfS9Kt8O3hAqMPRuCN3v90TjFtQ9A5D2k",authDomain:"ddex-distro.firebaseapp.com",projectId:"ddex-distro",storageBucket:"ddex-distro.firebasestorage.app",messagingSenderId:"297752105707",appId:"1:297752105707:web:6e4a1298b3b60d56f624ae"},ea=nv(gN),ps=zR(ea),F0=K4(ea);bk(ea);Gk(ea);fN(ea);const Mi=Ze(null),Li=Ze(null),Lg=Ze(!0);let Fg=null;function ho(){Fg||(Fg=xS(ps,async n=>{if(n){Mi.value=n;try{const r=await lk(n0(F0,"users",n.uid));r.exists()?Li.value={id:r.id,...r.data()}:Li.value={id:n.uid,email:n.email,displayName:n.displayName,photoURL:n.photoURL,organizationName:n.displayName}}catch(r){console.error("Error fetching user profile:",r)}}else Mi.value=null,Li.value=null;Lg.value=!1}));const t=je(()=>!!Mi.value),e=async()=>{try{await DS(ps),Mi.value=null,Li.value=null}catch(n){throw console.error("Logout error:",n),n}};return{user:je(()=>Mi.value),userProfile:je(()=>Li.value),isAuthenticated:t,isLoading:je(()=>Lg.value),logout:e}}const ks=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yN={class:"navbar"},_N={class:"container"},vN={class:"navbar-content"},bN={class:"logo"},EN={key:0,class:"navbar-nav hidden-sm"},wN={class:"navbar-actions hidden-sm"},TN={key:1,class:"user-menu"},IN={key:0,class:"mobile-menu block-sm hidden-md"},AN={class:"container"},SN={key:0,class:"mobile-nav"},RN={class:"mobile-actions"},PN={__name:"NavBar",props:{currentTheme:{type:String,default:"light"}},emits:["toggle-theme"],setup(t,{emit:e}){const n=Bo(),r=$I(),{isAuthenticated:s,userProfile:i,logout:o}=ho(),l=Ze(!1),c=je(()=>s.value?[{name:"Dashboard",path:"/dashboard"},{name:"Settings",path:"/settings"}]:[]),u=je(()=>i.value&&(i.value.displayName||i.value.organizationName||"").split(" ").map(k=>k[0]).join("").toUpperCase().slice(0,2)||"U"),f=()=>{n.push("/login")},d=()=>{n.push("/signup")},m=async()=>{try{await o(),n.push("/"),l.value=!1}catch(C){console.error("Logout error:",C)}},y=()=>{l.value=!l.value};return(C,k)=>{const x=Fr("font-awesome-icon"),R=Fr("router-link");return Se(),De("nav",yN,[_("div",_N,[_("div",vN,[re(R,{to:"/",class:"navbar-brand"},{default:An(()=>[_("div",bN,[re(x,{icon:"truck"})]),k[3]||(k[3]=_("span",{class:"brand-text"},"DDEX Distro",-1))]),_:1,__:[3]}),c.value.length>0?(Se(),De("div",EN,[(Se(!0),De(gt,null,rl(c.value,N=>(Se(),il(R,{key:N.path,to:N.path,class:Fo(["nav-link",{active:Pn(r).path===N.path}])},{default:An(()=>[nt($e(N.name),1)]),_:2},1032,["to","class"]))),128))])):Kn("",!0),_("div",wN,[_("button",{onClick:k[0]||(k[0]=N=>C.$emit("toggle-theme")),class:"btn-icon","aria-label":"Toggle theme"},[re(x,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"])]),Pn(s)?(Se(),De("div",TN,[_("button",{class:"user-avatar",onClick:m,title:"Sign out"},[_("span",null,$e(u.value),1)])])):(Se(),De(gt,{key:0},[_("button",{onClick:f,class:"btn btn-secondary btn-sm"}," Sign In "),_("button",{onClick:d,class:"btn btn-primary btn-sm"}," Get Started ")],64))]),_("button",{onClick:y,class:"mobile-menu-btn block-sm hidden-md","aria-label":"Toggle menu"},[re(x,{icon:l.value?"times":"bars"},null,8,["icon"])])])]),re(zh,{name:"slide"},{default:An(()=>[l.value?(Se(),De("div",IN,[_("div",AN,[c.value.length>0?(Se(),De("div",SN,[(Se(!0),De(gt,null,rl(c.value,N=>(Se(),il(R,{key:N.path,to:N.path,class:"mobile-nav-link",onClick:k[1]||(k[1]=V=>l.value=!1)},{default:An(()=>[nt($e(N.name),1)]),_:2},1032,["to"]))),128))])):Kn("",!0),_("div",RN,[_("button",{onClick:k[2]||(k[2]=N=>C.$emit("toggle-theme")),class:"btn btn-secondary btn-sm"},[re(x,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"]),nt(" "+$e(t.currentTheme==="light"?"Dark Mode":"Light Mode"),1)]),Pn(s)?(Se(),De("button",{key:1,onClick:m,class:"btn btn-secondary"}," Sign Out ")):(Se(),De(gt,{key:0},[_("button",{onClick:f,class:"btn btn-secondary"}," Sign In "),_("button",{onClick:d,class:"btn btn-primary"}," Get Started ")],64))])])])):Kn("",!0)]),_:1})])}}},CN=ks(PN,[["__scopeId","data-v-a7f55c9b"]]),kN={id:"app"},NN={class:"main-content"},xN={__name:"App",setup(t){const e=Ze(localStorage.getItem("theme")||"light"),n=()=>{e.value=e.value==="light"?"dark":"light",localStorage.setItem("theme",e.value),document.documentElement.setAttribute("data-theme",e.value)};return Hl(()=>{document.documentElement.setAttribute("data-theme",e.value)}),Ji("theme",{current:e,toggle:n}),(r,s)=>(Se(),De("div",kN,[re(CN,{onToggleTheme:n,"current-theme":e.value},null,8,["current-theme"]),_("main",NN,[re(Pn(B_),null,{default:An(({Component:i})=>[re(zh,{name:"fade",mode:"out-in"},{default:An(()=>[(Se(),il(yw(i)))]),_:2},1024)]),_:1})])]))}},DN=ks(xN,[["__scopeId","data-v-43c5cdbc"]]),ON={class:"splash-page"},VN={class:"section bg-secondary"},MN={class:"container"},LN={class:"quick-start"},FN={class:"code-block"},UN={class:"section"},$N={class:"container"},jN={class:"grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3"},BN={class:"card-body"},zN={class:"feature-icon"},qN={class:"feature-title"},HN={class:"feature-description"},WN={class:"section bg-secondary"},GN={class:"container"},KN={class:"integration-section"},YN={class:"integration-content"},QN={class:"integration-features"},XN={class:"integration-item"},JN={class:"integration-item"},ZN={class:"integration-item"},e6={class:"integration-item"},t6={__name:"SplashPage",setup(t){const e=Bo(),n=[{icon:"cube",title:"DDEX Native",description:"Built from the ground up for DDEX compliance with automatic ERN generation and validation."},{icon:"rocket",title:"Instant Deployment",description:"Deploy your own distribution platform in minutes with our npm package and CLI tools."},{icon:"bullseye",title:"Multi-Target Delivery",description:"Deliver to DSPs via FTP, SFTP, S3, or API with automated queue management."},{icon:"palette",title:"White-Label Ready",description:"Fully customizable branding, domain support, and multi-tenant architecture."},{icon:"check-circle",title:"Validation Built-In",description:"Every ERN is automatically validated through DDEX Workbench integration."},{icon:"chart-line",title:"Real-Time Analytics",description:"Track deliveries, monitor success rates, and analyze catalog performance."}],r=Ze(`# Install and deploy in minutes
npx create-ddex-distro my-label-distro
cd my-label-distro
npm run deploy

# Your distribution platform is live!`),s=()=>{e.push("/signup")},i=()=>{window.open("https://demo.ddex-distro.org","_blank")},o=()=>{e.push("/docs")},l=()=>{navigator.clipboard.writeText(r.value)};return(c,u)=>{const f=Fr("font-awesome-icon");return Se(),De("div",ON,[_("section",{class:"hero-section"},[_("div",{class:"container"},[_("div",{class:"hero-content"},[u[0]||(u[0]=Ma('<div class="hero-badge" data-v-94ac01a1><span class="badge-text" data-v-94ac01a1>Open Source</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>DDEX Compliant</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>npm Installable</span></div><h1 class="hero-title" data-v-94ac01a1> DDEX Delivery Platform <span class="hero-highlight" data-v-94ac01a1>in Minutes</span></h1><p class="hero-description" data-v-94ac01a1> DDEX Distro is an open-source, npm-installable music distribution platform that enables labels and artists to manage their catalog, generate DDEX-compliant ERN messages, and deliver releases to Digital Service Providers. </p>',3)),_("div",{class:"hero-actions"},[_("button",{onClick:s,class:"btn btn-primary btn-lg"}," Get Started Free "),_("button",{onClick:i,class:"btn btn-secondary btn-lg"}," View Demo ")]),u[1]||(u[1]=Ma('<div class="hero-stats" data-v-94ac01a1><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>500+</span><span class="stat-label" data-v-94ac01a1>Active Deployments</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>10k+</span><span class="stat-label" data-v-94ac01a1>Releases/Month</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>99.5%</span><span class="stat-label" data-v-94ac01a1>Delivery Success</span></div></div>',1))])])]),_("section",VN,[_("div",MN,[_("div",LN,[u[2]||(u[2]=_("div",{class:"quick-start-content"},[_("h2",{class:"section-title"},"Deploy in 3 Commands"),_("p",{class:"section-description"}," Get your distribution platform running faster than brewing coffee ")],-1)),_("div",FN,[_("pre",null,[_("code",null,$e(r.value),1)]),_("button",{class:"copy-btn",onClick:l,title:"Copy to clipboard"},[re(f,{icon:"copy"})])])])])]),_("section",UN,[_("div",$N,[u[3]||(u[3]=_("div",{class:"text-center mb-xl"},[_("h2",{class:"section-title"},"Everything You Need to Distribute Music"),_("p",{class:"section-description"}," A complete distribution platform with enterprise features, available to everyone ")],-1)),_("div",jN,[(Se(),De(gt,null,rl(n,d=>_("div",{key:d.title,class:"feature-card card card-hover"},[_("div",BN,[_("div",zN,[re(f,{icon:d.icon},null,8,["icon"])]),_("h3",qN,$e(d.title),1),_("p",HN,$e(d.description),1)])])),64))])])]),_("section",WN,[_("div",GN,[_("div",KN,[_("div",YN,[u[8]||(u[8]=_("h2",{class:"section-title"},"Part of the DDEX Ecosystem",-1)),u[9]||(u[9]=_("p",{class:"section-description"}," Seamlessly integrates with DDEX Workbench for validation and DDEX DSP for testing your deliveries ",-1)),_("div",QN,[_("div",XN,[re(f,{icon:"check",class:"check-icon"}),u[4]||(u[4]=_("span",null,"Automatic ERN validation via Workbench API",-1))]),_("div",JN,[re(f,{icon:"check",class:"check-icon"}),u[5]||(u[5]=_("span",null,"Test deliveries with your own DDEX DSP instance",-1))]),_("div",ZN,[re(f,{icon:"check",class:"check-icon"}),u[6]||(u[6]=_("span",null,"Single sign-on across all DDEX tools",-1))]),_("div",e6,[re(f,{icon:"check",class:"check-icon"}),u[7]||(u[7]=_("span",null,"Track releases from creation to consumption",-1))])])]),u[10]||(u[10]=Ma('<div class="integration-visual" data-v-94ac01a1><div class="ecosystem-diagram" data-v-94ac01a1><div class="ecosystem-node ecosystem-workbench" data-v-94ac01a1>DDEX Workbench</div><div class="ecosystem-node ecosystem-distro" data-v-94ac01a1>DDEX Distro</div><div class="ecosystem-node ecosystem-dsp" data-v-94ac01a1>DDEX DSP</div><svg class="ecosystem-connections" viewBox="0 0 300 200" data-v-94ac01a1><path d="M50 50 L150 100 L250 50" stroke="var(--color-primary)" stroke-width="2" fill="none" stroke-dasharray="5,5" data-v-94ac01a1></path></svg></div></div>',1))])])]),_("section",{class:"section"},[_("div",{class:"container"},[_("div",{class:"cta-section"},[u[11]||(u[11]=_("h2",{class:"cta-title"},"Ready to Start Distributing?",-1)),u[12]||(u[12]=_("p",{class:"cta-description"}," Join hundreds of labels and artists using DDEX Distro to deliver their music worldwide ",-1)),_("div",{class:"cta-actions"},[_("button",{onClick:s,class:"btn btn-primary btn-lg"}," Deploy Your Platform "),_("button",{onClick:o,class:"btn btn-secondary btn-lg"}," Read Documentation ")])])])])])}}},n6=ks(t6,[["__scopeId","data-v-94ac01a1"]]),r6={class:"auth-page"},s6={class:"auth-container"},i6={class:"auth-card card"},o6={class:"card-body"},a6={class:"auth-header"},l6={class:"auth-logo"},c6={class:"form-group"},u6=["disabled"],h6={class:"form-group"},f6={class:"form-label"},d6=["disabled"],p6={key:0,class:"form-error"},m6={key:1,class:"form-success"},g6=["disabled"],y6=["disabled"],_6={class:"auth-footer"},v6={class:"modal-content card"},b6={class:"card-body"},E6={class:"form-group"},w6=["disabled"],T6={key:0,class:"form-error"},I6={key:1,class:"form-success"},A6={class:"modal-actions"},S6=["disabled"],R6=["disabled"],P6={__name:"Login",setup(t){const e=Bo(),n=Ze(""),r=Ze(""),s=Ze(""),i=Ze(""),o=Ze(!1),l=Ze(!1),c=async()=>{s.value="",i.value="",o.value=!0;try{await RS(ps,n.value,r.value),e.push("/dashboard")}catch(d){switch(d.code){case"auth/invalid-email":s.value="Please enter a valid email address";break;case"auth/user-disabled":s.value="This account has been disabled. Please contact support.";break;case"auth/user-not-found":s.value="No account found with this email. Please sign up first.";break;case"auth/wrong-password":s.value="Incorrect password. Please try again.";break;case"auth/invalid-credential":s.value="Invalid email or password. Please try again.";break;case"auth/too-many-requests":s.value="Too many failed attempts. Please try again later.";break;case"auth/network-request-failed":s.value="Network error. Please check your connection and try again.";break;default:s.value="Failed to sign in. Please try again.",console.error("Login error:",d)}}finally{o.value=!1}},u=async()=>{s.value="",i.value="",o.value=!0;try{const d=new In;d.setCustomParameters({prompt:"select_account"}),await Lv(ps,d),e.push("/dashboard")}catch(d){switch(d.code){case"auth/popup-closed-by-user":break;case"auth/popup-blocked":s.value="Popup was blocked. Please allow popups for this site.";break;case"auth/cancelled-popup-request":break;case"auth/network-request-failed":s.value="Network error. Please check your connection and try again.";break;case"auth/account-exists-with-different-credential":s.value="An account already exists with this email using a different sign-in method.";break;default:s.value="Failed to sign in with Google. Please try again.",console.error("Google login error:",d)}}finally{o.value=!1}},f=async()=>{if(s.value="",i.value="",!n.value){s.value="Please enter your email address first";return}o.value=!0;try{await AS(ps,n.value),i.value="Password reset email sent! Check your inbox.",l.value=!1}catch(d){switch(d.code){case"auth/invalid-email":s.value="Please enter a valid email address";break;case"auth/user-not-found":s.value="No account found with this email address";break;case"auth/too-many-requests":s.value="Too many requests. Please try again later.";break;default:s.value="Failed to send reset email. Please try again.",console.error("Password reset error:",d)}}finally{o.value=!1}};return(d,m)=>{const y=Fr("font-awesome-icon"),C=Fr("router-link");return Se(),De("div",r6,[_("div",s6,[_("div",i6,[_("div",o6,[_("div",a6,[_("div",l6,[re(y,{icon:"truck"})]),m[6]||(m[6]=_("h1",{class:"auth-title"},"Welcome Back",-1)),m[7]||(m[7]=_("p",{class:"auth-subtitle"},"Sign in to your DDEX Distro account",-1))]),_("form",{onSubmit:Fa(c,["prevent"]),class:"auth-form"},[_("div",c6,[m[8]||(m[8]=_("label",{class:"form-label"},"Email Address",-1)),dt(_("input",{"onUpdate:modelValue":m[0]||(m[0]=k=>n.value=k),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:o.value},null,8,u6),[[Qn,n.value]])]),_("div",h6,[_("label",f6,[m[9]||(m[9]=nt(" Password ",-1)),_("a",{href:"#",onClick:m[1]||(m[1]=Fa(k=>l.value=!0,["prevent"])),class:"form-label-link"}," Forgot password? ")]),dt(_("input",{"onUpdate:modelValue":m[2]||(m[2]=k=>r.value=k),type:"password",class:"form-input",placeholder:"Enter your password",required:"",disabled:o.value},null,8,d6),[[Qn,r.value]])]),s.value?(Se(),De("div",p6,[re(y,{icon:"times"}),nt(" "+$e(s.value),1)])):Kn("",!0),i.value?(Se(),De("div",m6,[re(y,{icon:"check"}),nt(" "+$e(i.value),1)])):Kn("",!0),_("button",{type:"submit",class:"btn btn-primary btn-block",disabled:o.value},$e(o.value?"Signing in...":"Sign In"),9,g6),m[11]||(m[11]=_("div",{class:"auth-divider"},[_("span",null,"or")],-1)),_("button",{type:"button",onClick:u,class:"btn btn-secondary btn-block",disabled:o.value},[re(y,{icon:["fab","google"]}),m[10]||(m[10]=nt(" Continue with Google ",-1))],8,y6)],32),_("div",_6,[_("p",null,[m[13]||(m[13]=nt(" Don't have an account? ",-1)),re(C,{to:"/signup",class:"auth-link"},{default:An(()=>m[12]||(m[12]=[nt(" Sign up for free ",-1)])),_:1,__:[12]})])])])]),re(zh,{name:"modal"},{default:An(()=>[l.value?(Se(),De("div",{key:0,class:"modal-overlay",onClick:m[5]||(m[5]=Fa(k=>l.value=!1,["self"]))},[_("div",v6,[_("div",b6,[m[14]||(m[14]=_("h2",{class:"modal-title"},"Reset Password",-1)),m[15]||(m[15]=_("p",{class:"modal-description"}," Enter your email address and we'll send you a link to reset your password. ",-1)),_("div",E6,[dt(_("input",{"onUpdate:modelValue":m[3]||(m[3]=k=>n.value=k),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:o.value},null,8,w6),[[Qn,n.value]])]),s.value?(Se(),De("div",T6,[re(y,{icon:"times"}),nt(" "+$e(s.value),1)])):Kn("",!0),i.value?(Se(),De("div",I6,[re(y,{icon:"check"}),nt(" "+$e(i.value),1)])):Kn("",!0),_("div",A6,[_("button",{onClick:m[4]||(m[4]=k=>l.value=!1),class:"btn btn-secondary",disabled:o.value}," Cancel ",8,S6),_("button",{onClick:f,class:"btn btn-primary",disabled:o.value},$e(o.value?"Sending...":"Send Reset Email"),9,R6)])])])])):Kn("",!0)]),_:1})])])}}},C6=ks(P6,[["__scopeId","data-v-fd5bc850"]]),k6={class:"auth-page"},N6={class:"auth-container"},x6={class:"auth-card card"},D6={class:"card-body"},O6={class:"auth-header"},V6={class:"auth-logo"},M6={class:"form-group"},L6=["disabled"],F6={class:"form-group"},U6=["disabled"],$6={class:"form-group"},j6=["disabled"],B6={class:"form-group"},z6=["disabled"],q6={class:"form-group"},H6={class:"form-checkbox"},W6=["disabled"],G6={key:0,class:"form-error"},K6=["disabled"],Y6=["disabled"],Q6={class:"auth-footer"},X6={__name:"Signup",setup(t){const e=Bo(),n=Ze({organizationName:"",email:"",password:"",confirmPassword:"",acceptTerms:!1}),r=Ze(""),s=Ze(!1),i=async(c,u={})=>{try{const f=n0(F0,"users",c.uid);await uk(f,{uid:c.uid,email:c.email,displayName:c.displayName||n.value.organizationName,organizationName:n.value.organizationName||c.displayName,photoURL:c.photoURL||null,role:"admin",plan:"free",createdAt:Eg(),updatedAt:Eg(),...u})}catch(f){throw console.error("Error creating user profile:",f),f}},o=async()=>{if(r.value="",n.value.password!==n.value.confirmPassword){r.value="Passwords do not match";return}if(n.value.password.length<8){r.value="Password must be at least 8 characters";return}if(!n.value.acceptTerms){r.value="Please accept the terms and conditions";return}s.value=!0;try{const c=await SS(ps,n.value.email,n.value.password);await CS(c.user,{displayName:n.value.organizationName}),await i(c.user),e.push("/dashboard")}catch(c){switch(c.code){case"auth/email-already-in-use":r.value="This email is already registered. Please sign in instead.";break;case"auth/invalid-email":r.value="Please enter a valid email address";break;case"auth/weak-password":r.value="Password is too weak. Please use at least 8 characters.";break;case"auth/network-request-failed":r.value="Network error. Please check your connection and try again.";break;default:r.value="Failed to create account. Please try again.",console.error("Signup error:",c)}}finally{s.value=!1}},l=async()=>{r.value="",s.value=!0;try{const c=new In;c.setCustomParameters({prompt:"select_account"});const u=await Lv(ps,c);u._tokenResponse?.isNewUser&&await i(u.user,{organizationName:u.user.displayName}),e.push("/dashboard")}catch(c){switch(c.code){case"auth/popup-closed-by-user":break;case"auth/popup-blocked":r.value="Popup was blocked. Please allow popups for this site.";break;case"auth/cancelled-popup-request":break;case"auth/network-request-failed":r.value="Network error. Please check your connection and try again.";break;default:r.value="Failed to sign up with Google. Please try again.",console.error("Google signup error:",c)}}finally{s.value=!1}};return(c,u)=>{const f=Fr("font-awesome-icon"),d=Fr("router-link");return Se(),De("div",k6,[_("div",N6,[_("div",x6,[_("div",D6,[_("div",O6,[_("div",V6,[re(f,{icon:"truck"})]),u[5]||(u[5]=_("h1",{class:"auth-title"},"Get Started",-1)),u[6]||(u[6]=_("p",{class:"auth-subtitle"},"Create your DDEX Distro account",-1))]),_("form",{onSubmit:Fa(o,["prevent"]),class:"auth-form"},[_("div",M6,[u[7]||(u[7]=_("label",{class:"form-label"},"Organization Name",-1)),dt(_("input",{"onUpdate:modelValue":u[0]||(u[0]=m=>n.value.organizationName=m),type:"text",class:"form-input",placeholder:"My Record Label",required:"",disabled:s.value},null,8,L6),[[Qn,n.value.organizationName]])]),_("div",F6,[u[8]||(u[8]=_("label",{class:"form-label"},"Email Address",-1)),dt(_("input",{"onUpdate:modelValue":u[1]||(u[1]=m=>n.value.email=m),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:s.value},null,8,U6),[[Qn,n.value.email]])]),_("div",$6,[u[9]||(u[9]=_("label",{class:"form-label"},"Password",-1)),dt(_("input",{"onUpdate:modelValue":u[2]||(u[2]=m=>n.value.password=m),type:"password",class:"form-input",placeholder:"Create a strong password",required:"",minlength:"8",disabled:s.value},null,8,j6),[[Qn,n.value.password]]),u[10]||(u[10]=_("div",{class:"form-hint"},"Minimum 8 characters",-1))]),_("div",B6,[u[11]||(u[11]=_("label",{class:"form-label"},"Confirm Password",-1)),dt(_("input",{"onUpdate:modelValue":u[3]||(u[3]=m=>n.value.confirmPassword=m),type:"password",class:"form-input",placeholder:"Confirm your password",required:"",disabled:s.value},null,8,z6),[[Qn,n.value.confirmPassword]])]),_("div",q6,[_("label",H6,[dt(_("input",{"onUpdate:modelValue":u[4]||(u[4]=m=>n.value.acceptTerms=m),type:"checkbox",disabled:s.value},null,8,W6),[[Us,n.value.acceptTerms]]),u[12]||(u[12]=_("span",null,[nt(" I agree to the "),_("a",{href:"/terms",target:"_blank",class:"auth-link"},"Terms of Service"),nt(" and "),_("a",{href:"/privacy",target:"_blank",class:"auth-link"},"Privacy Policy")],-1))])]),r.value?(Se(),De("div",G6,[re(f,{icon:"times"}),nt(" "+$e(r.value),1)])):Kn("",!0),_("button",{type:"submit",class:"btn btn-primary btn-block",disabled:s.value},$e(s.value?"Creating account...":"Create Account"),9,K6),u[14]||(u[14]=_("div",{class:"auth-divider"},[_("span",null,"or")],-1)),_("button",{type:"button",onClick:l,class:"btn btn-secondary btn-block",disabled:s.value},[re(f,{icon:["fab","google"]}),u[13]||(u[13]=nt(" Continue with Google ",-1))],8,Y6)],32),_("div",Q6,[_("p",null,[u[16]||(u[16]=nt(" Already have an account? ",-1)),re(d,{to:"/login",class:"auth-link"},{default:An(()=>u[15]||(u[15]=[nt(" Sign in ",-1)])),_:1,__:[15]})])])])])])])}}},J6=ks(X6,[["__scopeId","data-v-efb48b07"]]),Z6={class:"dashboard"},ex={class:"container"},tx={class:"dashboard-header"},nx={class:"dashboard-title"},rx={class:"header-actions"},sx={key:0,class:"loading-container"},ix={class:"stats-grid"},ox={class:"stat-card card"},ax={class:"card-body"},lx={class:"stat-icon"},cx={class:"stat-content"},ux={class:"stat-value"},hx={class:"stat-card card"},fx={class:"card-body"},dx={class:"stat-icon warning"},px={class:"stat-content"},mx={class:"stat-value"},gx={class:"stat-card card"},yx={class:"card-body"},_x={class:"stat-icon success"},vx={class:"stat-content"},bx={class:"stat-value"},Ex={class:"stat-card card"},wx={class:"card-body"},Tx={class:"stat-icon error"},Ix={class:"stat-content"},Ax={class:"stat-value"},Sx={class:"content-grid"},Rx={class:"activity-section"},Px={class:"card"},Cx={class:"card-header"},kx={class:"card-body"},Nx={key:0,class:"empty-state"},xx={key:1,class:"activity-list"},Dx={class:"activity-content"},Ox={class:"activity-title"},Vx={class:"activity-description"},Mx={class:"activity-time"},Lx={class:"quick-actions"},Fx={class:"card"},Ux={class:"card-body"},$x={class:"action-grid"},jx={class:"card"},Bx={class:"card-body"},zx={class:"checklist"},qx={class:"checklist-item completed"},Hx={class:"checklist-item"},Wx={class:"checklist-item"},Gx={class:"checklist-item"},Kx={__name:"Dashboard",setup(t){const e=Bo(),{userProfile:n}=ho(),r=Ze({totalReleases:0,pendingDeliveries:0,successfulDeliveries:0,failedDeliveries:0}),s=Ze([]),i=Ze(!0),o=je(()=>{const x=new Date().getHours();return x<12?"Good morning":x<18?"Good afternoon":"Good evening"}),l=je(()=>n.value?.organizationName||n.value?.displayName||"there"),c=async()=>{if(n.value)try{await new Promise(x=>setTimeout(x,500)),r.value={totalReleases:12,pendingDeliveries:3,successfulDeliveries:45,failedDeliveries:2},s.value=[{id:"1",type:"release_created",title:"New release created",description:"Summer Vibes EP",timestamp:new Date(Date.now()-7200*1e3),status:"success"},{id:"2",type:"delivery_completed",title:"Delivery completed",description:"Delivered to Spotify",timestamp:new Date(Date.now()-300*60*1e3),status:"success"},{id:"3",type:"delivery_failed",title:"Delivery failed",description:"Failed to deliver to Apple Music",timestamp:new Date(Date.now()-1440*60*1e3),status:"error"}]}catch(x){console.error("Error loading dashboard data:",x)}finally{i.value=!1}},u=x=>{const N=new Date-x,V=Math.floor(N/(1e3*60*60)),U=Math.floor(V/24);return V<1?"Just now":V<24?`${V} hour${V>1?"s":""} ago`:U<30?`${U} day${U>1?"s":""} ago`:x.toLocaleDateString()},f=x=>{switch(x){case"release_created":return"plus";case"delivery_completed":return"check";case"delivery_failed":return"times";default:return"music"}},d=x=>{switch(x){case"success":return"text-success";case"error":return"text-error";case"warning":return"text-warning";default:return"text-info"}},m=()=>{e.push("/releases/new")},y=()=>{e.push("/releases")},C=()=>{e.push("/deliveries")},k=()=>{e.push("/settings")};return Hl(()=>{c()}),(x,R)=>{const N=Fr("font-awesome-icon");return Se(),De("div",Z6,[_("div",ex,[_("div",tx,[_("div",null,[_("h1",nx,$e(o.value)+", "+$e(l.value)+"!",1),R[0]||(R[0]=_("p",{class:"dashboard-subtitle"},"Here's what's happening with your music distribution",-1))]),_("div",rx,[_("button",{onClick:m,class:"btn btn-primary"},[re(N,{icon:"plus"}),R[1]||(R[1]=nt(" New Release ",-1))])])]),i.value?(Se(),De("div",sx,R[2]||(R[2]=[_("div",{class:"loading-spinner"},null,-1),_("p",null,"Loading your dashboard...",-1)]))):(Se(),De(gt,{key:1},[_("div",ix,[_("div",ox,[_("div",ax,[_("div",lx,[re(N,{icon:"music"})]),_("div",cx,[_("h3",ux,$e(r.value.totalReleases),1),R[3]||(R[3]=_("p",{class:"stat-label"},"Total Releases",-1))])])]),_("div",hx,[_("div",fx,[_("div",dx,[re(N,{icon:"truck"})]),_("div",px,[_("h3",mx,$e(r.value.pendingDeliveries),1),R[4]||(R[4]=_("p",{class:"stat-label"},"Pending Deliveries",-1))])])]),_("div",gx,[_("div",yx,[_("div",_x,[re(N,{icon:"check-circle"})]),_("div",vx,[_("h3",bx,$e(r.value.successfulDeliveries),1),R[5]||(R[5]=_("p",{class:"stat-label"},"Successful Deliveries",-1))])])]),_("div",Ex,[_("div",wx,[_("div",Tx,[re(N,{icon:"times"})]),_("div",Ix,[_("h3",Ax,$e(r.value.failedDeliveries),1),R[6]||(R[6]=_("p",{class:"stat-label"},"Failed Deliveries",-1))])])])]),_("div",Sx,[_("div",Rx,[_("div",Px,[_("div",Cx,[R[7]||(R[7]=_("h2",{class:"section-title"},"Recent Activity",-1)),_("button",{onClick:c,class:"btn-icon",title:"Refresh"},[re(N,{icon:"sync"})])]),_("div",kx,[s.value.length===0?(Se(),De("div",Nx,[re(N,{icon:"music",class:"empty-icon"}),R[8]||(R[8]=_("p",null,"No recent activity",-1)),_("button",{onClick:m,class:"btn btn-primary btn-sm"}," Create Your First Release ")])):(Se(),De("div",xx,[(Se(!0),De(gt,null,rl(s.value,V=>(Se(),De("div",{key:V.id,class:"activity-item"},[_("div",{class:Fo(["activity-icon",d(V.status)])},[re(N,{icon:f(V.type)},null,8,["icon"])],2),_("div",Dx,[_("h4",Ox,$e(V.title),1),_("p",Vx,$e(V.description),1),_("span",Mx,$e(u(V.timestamp)),1)])]))),128))]))])])]),_("div",Lx,[_("div",Fx,[R[13]||(R[13]=_("div",{class:"card-header"},[_("h2",{class:"section-title"},"Quick Actions")],-1)),_("div",Ux,[_("div",$x,[_("button",{onClick:m,class:"action-button"},[re(N,{icon:"plus",class:"action-icon"}),R[9]||(R[9]=_("span",null,"New Release",-1))]),_("button",{onClick:y,class:"action-button"},[re(N,{icon:"music",class:"action-icon"}),R[10]||(R[10]=_("span",null,"View Catalog",-1))]),_("button",{onClick:C,class:"action-button"},[re(N,{icon:"truck",class:"action-icon"}),R[11]||(R[11]=_("span",null,"Deliveries",-1))]),_("button",{onClick:k,class:"action-button"},[re(N,{icon:"cog",class:"action-icon"}),R[12]||(R[12]=_("span",null,"Settings",-1))])])])]),_("div",jx,[R[18]||(R[18]=_("div",{class:"card-header"},[_("h2",{class:"section-title"},"Getting Started")],-1)),_("div",Bx,[_("div",zx,[_("div",qx,[re(N,{icon:"check-circle",class:"check-icon"}),R[14]||(R[14]=_("span",null,"Create your account",-1))]),_("div",Hx,[re(N,{icon:"circle",class:"check-icon"}),R[15]||(R[15]=_("span",null,"Configure delivery targets",-1))]),_("div",Wx,[re(N,{icon:"circle",class:"check-icon"}),R[16]||(R[16]=_("span",null,"Upload your first release",-1))]),_("div",Gx,[re(N,{icon:"circle",class:"check-icon"}),R[17]||(R[17]=_("span",null,"Send your first delivery",-1))])])])])])])],64))])])}}},Yx=ks(Kx,[["__scopeId","data-v-86d193fe"]]),Qx={class:"settings"},Xx={class:"container"},Jx={class:"settings-section"},Zx={class:"card"},eD={class:"card-body"},tD={class:"form-group"},nD={class:"form-group"},rD={class:"form-group"},sD={class:"settings-section"},iD={class:"card"},oD={class:"card-body"},aD={class:"form-group"},lD={class:"form-group"},cD={class:"form-checkbox"},uD={class:"form-group"},hD={class:"form-checkbox"},fD={class:"settings-section"},dD={class:"card"},pD={class:"card-body"},mD={class:"form-group"},gD={class:"form-checkbox"},yD={class:"form-group"},_D={class:"form-checkbox"},vD={class:"form-group"},bD={class:"form-checkbox"},ED={__name:"Settings",setup(t){const e=Ze({profile:{name:"My Label",email:"admin@mylabel.com",timezone:"America/New_York"},platform:{defaultERNVersion:"4.3",autoValidate:!0,requireApproval:!1},notifications:{emailDeliverySuccess:!0,emailDeliveryFailed:!0,emailNewRelease:!1}}),n=r=>{console.log(`Saving ${r}:`,e.value[r])};return(r,s)=>(Se(),De("div",Qx,[_("div",Xx,[s[26]||(s[26]=_("div",{class:"settings-header"},[_("h1",{class:"page-title"},"Settings"),_("p",{class:"page-subtitle"},"Manage your distribution platform configuration")],-1)),_("div",Jx,[_("div",Zx,[s[16]||(s[16]=_("div",{class:"card-header"},[_("h2",{class:"section-title"},"Profile Settings")],-1)),_("div",eD,[_("div",tD,[s[12]||(s[12]=_("label",{class:"form-label"},"Organization Name",-1)),dt(_("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.value.profile.name=i),type:"text",class:"form-input",placeholder:"Enter organization name"},null,512),[[Qn,e.value.profile.name]])]),_("div",nD,[s[13]||(s[13]=_("label",{class:"form-label"},"Email Address",-1)),dt(_("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>e.value.profile.email=i),type:"email",class:"form-input",placeholder:"admin@example.com"},null,512),[[Qn,e.value.profile.email]])]),_("div",rD,[s[15]||(s[15]=_("label",{class:"form-label"},"Timezone",-1)),dt(_("select",{"onUpdate:modelValue":s[2]||(s[2]=i=>e.value.profile.timezone=i),class:"form-select"},s[14]||(s[14]=[Ma('<option value="America/New_York" data-v-edd891c4>Eastern Time (ET)</option><option value="America/Chicago" data-v-edd891c4>Central Time (CT)</option><option value="America/Denver" data-v-edd891c4>Mountain Time (MT)</option><option value="America/Los_Angeles" data-v-edd891c4>Pacific Time (PT)</option><option value="Europe/London" data-v-edd891c4>London (GMT)</option><option value="Europe/Paris" data-v-edd891c4>Paris (CET)</option>',6)]),512),[[Cp,e.value.profile.timezone]])]),_("button",{onClick:s[3]||(s[3]=i=>n("profile")),class:"btn btn-primary"}," Save Profile ")])])]),_("div",sD,[_("div",iD,[s[21]||(s[21]=_("div",{class:"card-header"},[_("h2",{class:"section-title"},"Platform Settings")],-1)),_("div",oD,[_("div",aD,[s[18]||(s[18]=_("label",{class:"form-label"},"Default ERN Version",-1)),dt(_("select",{"onUpdate:modelValue":s[4]||(s[4]=i=>e.value.platform.defaultERNVersion=i),class:"form-select"},s[17]||(s[17]=[_("option",{value:"3.8.2"},"ERN 3.8.2",-1),_("option",{value:"4.2"},"ERN 4.2",-1),_("option",{value:"4.3"},"ERN 4.3",-1)]),512),[[Cp,e.value.platform.defaultERNVersion]])]),_("div",lD,[_("label",cD,[dt(_("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>e.value.platform.autoValidate=i),type:"checkbox"},null,512),[[Us,e.value.platform.autoValidate]]),s[19]||(s[19]=_("span",null,"Automatically validate ERN messages",-1))])]),_("div",uD,[_("label",hD,[dt(_("input",{"onUpdate:modelValue":s[6]||(s[6]=i=>e.value.platform.requireApproval=i),type:"checkbox"},null,512),[[Us,e.value.platform.requireApproval]]),s[20]||(s[20]=_("span",null,"Require approval before delivery",-1))])]),_("button",{onClick:s[7]||(s[7]=i=>n("platform")),class:"btn btn-primary"}," Save Platform Settings ")])])]),_("div",fD,[_("div",dD,[s[25]||(s[25]=_("div",{class:"card-header"},[_("h2",{class:"section-title"},"Notification Settings")],-1)),_("div",pD,[_("div",mD,[_("label",gD,[dt(_("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>e.value.notifications.emailDeliverySuccess=i),type:"checkbox"},null,512),[[Us,e.value.notifications.emailDeliverySuccess]]),s[22]||(s[22]=_("span",null,"Email on successful delivery",-1))])]),_("div",yD,[_("label",_D,[dt(_("input",{"onUpdate:modelValue":s[9]||(s[9]=i=>e.value.notifications.emailDeliveryFailed=i),type:"checkbox"},null,512),[[Us,e.value.notifications.emailDeliveryFailed]]),s[23]||(s[23]=_("span",null,"Email on failed delivery",-1))])]),_("div",vD,[_("label",bD,[dt(_("input",{"onUpdate:modelValue":s[10]||(s[10]=i=>e.value.notifications.emailNewRelease=i),type:"checkbox"},null,512),[[Us,e.value.notifications.emailNewRelease]]),s[24]||(s[24]=_("span",null,"Email on new release creation",-1))])]),_("button",{onClick:s[11]||(s[11]=i=>n("notifications")),class:"btn btn-primary"}," Save Notifications ")])])])])]))}},wD=ks(ED,[["__scopeId","data-v-edd891c4"]]),U0=FI({history:pI("/"),routes:[{path:"/",name:"home",component:n6},{path:"/login",name:"login",component:C6,meta:{requiresGuest:!0}},{path:"/signup",name:"signup",component:J6,meta:{requiresGuest:!0}},{path:"/dashboard",name:"dashboard",component:Yx,meta:{requiresAuth:!0}},{path:"/settings",name:"settings",component:wD,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}]});U0.beforeEach(async(t,e,n)=>{const{isLoading:r}=ho();r.value&&await new Promise(i=>{const o=setInterval(()=>{const{isLoading:l}=ho();l.value||(clearInterval(o),i())},50)});const{isAuthenticated:s}=ho();t.meta.requiresAuth&&!s.value?n("/login"):t.meta.requiresGuest&&s.value?n("/dashboard"):n()});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function ch(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function TD(t){if(Array.isArray(t))return t}function ID(t){if(Array.isArray(t))return ch(t)}function AD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function SD(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,$0(r.key),r)}}function RD(t,e,n){return e&&SD(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ya(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=zf(t))||e){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){l=!0,i=c},f:function(){try{o||n.return==null||n.return()}finally{if(l)throw i}}}}function we(t,e,n){return(e=$0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function CD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,o,l=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(f){u=!0,s=f}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return l}}function kD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ND(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ug(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ug(Object(n),!0).forEach(function(r){we(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ug(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function vc(t,e){return TD(t)||CD(t,e)||zf(t,e)||kD()}function _n(t){return ID(t)||PD(t)||zf(t)||ND()}function xD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $0(t){var e=xD(t,"string");return typeof e=="symbol"?e:e+""}function xl(t){"@babel/helpers - typeof";return xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xl(t)}function zf(t,e){if(t){if(typeof t=="string")return ch(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ch(t,e):void 0}}var $g=function(){},qf={},j0={},B0=null,z0={mark:$g,measure:$g};try{typeof window<"u"&&(qf=window),typeof document<"u"&&(j0=document),typeof MutationObserver<"u"&&(B0=MutationObserver),typeof performance<"u"&&(z0=performance)}catch{}var DD=qf.navigator||{},jg=DD.userAgent,Bg=jg===void 0?"":jg,Gr=qf,ze=j0,zg=B0,Na=z0;Gr.document;var pr=!!ze.documentElement&&!!ze.head&&typeof ze.addEventListener=="function"&&typeof ze.createElement=="function",q0=~Bg.indexOf("MSIE")||~Bg.indexOf("Trident/"),pu,OD=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,VD=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,H0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},MD={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},W0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Nt="classic",ta="duotone",G0="sharp",K0="sharp-duotone",Y0="chisel",Q0="etch",X0="jelly",J0="jelly-duo",Z0="jelly-fill",eb="notdog",tb="notdog-duo",nb="slab",rb="slab-press",sb="thumbprint",ib="whiteboard",LD="Classic",FD="Duotone",UD="Sharp",$D="Sharp Duotone",jD="Chisel",BD="Etch",zD="Jelly",qD="Jelly Duo",HD="Jelly Fill",WD="Notdog",GD="Notdog Duo",KD="Slab",YD="Slab Press",QD="Thumbprint",XD="Whiteboard",ob=[Nt,ta,G0,K0,Y0,Q0,X0,J0,Z0,eb,tb,nb,rb,sb,ib];pu={},we(we(we(we(we(we(we(we(we(we(pu,Nt,LD),ta,FD),G0,UD),K0,$D),Y0,jD),Q0,BD),X0,zD),J0,qD),Z0,HD),eb,WD),we(we(we(we(we(pu,tb,GD),nb,KD),rb,YD),sb,QD),ib,XD);var JD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},ZD={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},eO=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),tO={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},ab=["fak","fa-kit","fakd","fa-kit-duotone"],qg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},nO=["kit"],rO="kit",sO="kit-duotone",iO="Kit",oO="Kit Duotone";we(we({},rO,iO),sO,oO);var aO={kit:{"fa-kit":"fak"}},lO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},cO={kit:{fak:"fa-kit"}},Hg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},mu,xa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uO=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],hO="classic",fO="duotone",dO="sharp",pO="sharp-duotone",mO="chisel",gO="etch",yO="jelly",_O="jelly-duo",vO="jelly-fill",bO="notdog",EO="notdog-duo",wO="slab",TO="slab-press",IO="thumbprint",AO="whiteboard",SO="Classic",RO="Duotone",PO="Sharp",CO="Sharp Duotone",kO="Chisel",NO="Etch",xO="Jelly",DO="Jelly Duo",OO="Jelly Fill",VO="Notdog",MO="Notdog Duo",LO="Slab",FO="Slab Press",UO="Thumbprint",$O="Whiteboard";mu={},we(we(we(we(we(we(we(we(we(we(mu,hO,SO),fO,RO),dO,PO),pO,CO),mO,kO),gO,NO),yO,xO),_O,DO),vO,OO),bO,VO),we(we(we(we(we(mu,EO,MO),wO,LO),TO,FO),IO,UO),AO,$O);var jO="kit",BO="kit-duotone",zO="Kit",qO="Kit Duotone";we(we({},jO,zO),BO,qO);var HO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},WO={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},uh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},GO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],lb=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(uO,GO),KO=["solid","regular","light","thin","duotone","brands","semibold"],cb=[1,2,3,4,5,6,7,8,9,10],YO=cb.concat([11,12,13,14,15,16,17,18,19,20]),QO=["aw","fw","pull-left","pull-right"],XO=[].concat(_n(Object.keys(WO)),KO,QO,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",xa.GROUP,xa.SWAP_OPACITY,xa.PRIMARY,xa.SECONDARY]).concat(cb.map(function(t){return"".concat(t,"x")})).concat(YO.map(function(t){return"w-".concat(t)})),JO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},lr="___FONT_AWESOME___",hh=16,ub="fa",hb="svg-inline--fa",Es="data-fa-i2svg",fh="data-fa-pseudo-element",ZO="data-fa-pseudo-element-pending",Hf="data-prefix",Wf="data-icon",Wg="fontawesome-i2svg",e5="async",t5=["HTML","HEAD","STYLE","SCRIPT"],fb=["::before","::after",":before",":after"],db=function(){try{return!0}catch{return!1}}();function na(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Nt]}})}var pb=H({},H0);pb[Nt]=H(H(H(H({},{"fa-duotone":"duotone"}),H0[Nt]),qg.kit),qg["kit-duotone"]);var n5=na(pb),dh=H({},tO);dh[Nt]=H(H(H(H({},{duotone:"fad"}),dh[Nt]),Hg.kit),Hg["kit-duotone"]);var Gg=na(dh),ph=H({},uh);ph[Nt]=H(H({},ph[Nt]),cO.kit);var mb=na(ph),mh=H({},HO);mh[Nt]=H(H({},mh[Nt]),aO.kit);na(mh);var r5=OD,gb="fa-layers-text",s5=VD,i5=H({},JD);na(i5);var o5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gu=MD,a5=[].concat(_n(nO),_n(XO)),fo=Gr.FontAwesomeConfig||{};function l5(t){var e=ze.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function c5(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ze&&typeof ze.querySelector=="function"){var u5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];u5.forEach(function(t){var e=vc(t,2),n=e[0],r=e[1],s=c5(l5(n));s!=null&&(fo[r]=s)})}var yb={styleDefault:"solid",familyDefault:Nt,cssPrefix:ub,replacementClass:hb,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fo.familyPrefix&&(fo.cssPrefix=fo.familyPrefix);var fi=H(H({},yb),fo);fi.autoReplaceSvg||(fi.observeMutations=!1);var ae={};Object.keys(yb).forEach(function(t){Object.defineProperty(ae,t,{enumerable:!0,set:function(n){fi[t]=n,po.forEach(function(r){return r(ae)})},get:function(){return fi[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(e){fi.cssPrefix=e,po.forEach(function(n){return n(ae)})},get:function(){return fi.cssPrefix}});Gr.FontAwesomeConfig=ae;var po=[];function h5(t){return po.push(t),function(){po.splice(po.indexOf(t),1)}}var Ls=hh,Sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f5(t){if(!(!t||!pr)){var e=ze.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ze.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ze.head.insertBefore(e,r),t}}var d5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kg(){for(var t=12,e="";t-- >0;)e+=d5[Math.random()*62|0];return e}function vi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gf(t){return t.classList?vi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function _b(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p5(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(_b(t[n]),'" ')},"").trim()}function bc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Kf(t){return t.size!==Sn.size||t.x!==Sn.x||t.y!==Sn.y||t.rotate!==Sn.rotate||t.flipX||t.flipY}function m5(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function g5(t){var e=t.transform,n=t.width,r=n===void 0?hh:n,s=t.height,i=s===void 0?hh:s,o="";return q0?o+="translate(".concat(e.x/Ls-r/2,"em, ").concat(e.y/Ls-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/Ls,"em), calc(-50% + ").concat(e.y/Ls,"em)) "),o+="scale(".concat(e.size/Ls*(e.flipX?-1:1),", ").concat(e.size/Ls*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var y5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function vb(){var t=ub,e=hb,n=ae.cssPrefix,r=ae.replacementClass,s=y5;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}var Yg=!1;function yu(){ae.autoAddCss&&!Yg&&(f5(vb()),Yg=!0)}var _5={mixout:function(){return{dom:{css:vb,insertCss:yu}}},hooks:function(){return{beforeDOMElementCreation:function(){yu()},beforeI2svg:function(){yu()}}}},cr=Gr||{};cr[lr]||(cr[lr]={});cr[lr].styles||(cr[lr].styles={});cr[lr].hooks||(cr[lr].hooks={});cr[lr].shims||(cr[lr].shims=[]);var fn=cr[lr],bb=[],Eb=function(){ze.removeEventListener("DOMContentLoaded",Eb),Dl=1,bb.map(function(e){return e()})},Dl=!1;pr&&(Dl=(ze.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ze.readyState),Dl||ze.addEventListener("DOMContentLoaded",Eb));function v5(t){pr&&(Dl?setTimeout(t,0):bb.push(t))}function ra(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?_b(t):"<".concat(e," ").concat(p5(r),">").concat(i.map(ra).join(""),"</").concat(e,">")}function Qg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _u=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,c,u,f;for(r===void 0?(c=1,f=e[i[0]]):(c=0,f=r);c<o;c++)u=i[c],f=l(f,e[u],u,e);return f};function wb(t){return _n(t).length!==1?null:t.codePointAt(0).toString(16)}function Xg(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function Tb(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Xg(e);typeof fn.hooks.addPack=="function"&&!s?fn.hooks.addPack(t,Xg(e)):fn.styles[t]=H(H({},fn.styles[t]||{}),i),t==="fas"&&Tb("fa",e)}var Mo=fn.styles,b5=fn.shims,Ib=Object.keys(mb),E5=Ib.reduce(function(t,e){return t[e]=Object.keys(mb[e]),t},{}),Yf=null,Ab={},Sb={},Rb={},Pb={},Cb={};function w5(t){return~a5.indexOf(t)}function T5(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!w5(s)?s:null}var kb=function(){var e=function(i){return _u(Mo,function(o,l,c){return o[c]=_u(l,i,{}),o},{})};Ab=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){s[c.toString(16)]=o})}return s}),Sb=e(function(s,i,o){if(s[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){s[c]=o})}return s}),Cb=e(function(s,i,o){var l=i[2];return s[o]=o,l.forEach(function(c){s[c]=o}),s});var n="far"in Mo||ae.autoFetchSvg,r=_u(b5,function(s,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(s.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:l,iconName:c}),s},{names:{},unicodes:{}});Rb=r.names,Pb=r.unicodes,Yf=Ec(ae.styleDefault,{family:ae.familyDefault})};h5(function(t){Yf=Ec(t.styleDefault,{family:ae.familyDefault})});kb();function Qf(t,e){return(Ab[t]||{})[e]}function I5(t,e){return(Sb[t]||{})[e]}function hs(t,e){return(Cb[t]||{})[e]}function Nb(t){return Rb[t]||{prefix:null,iconName:null}}function A5(t){var e=Pb[t],n=Qf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Kr(){return Yf}var xb=function(){return{prefix:null,iconName:null,rest:[]}};function S5(t){var e=Nt,n=Ib.reduce(function(r,s){return r[s]="".concat(ae.cssPrefix,"-").concat(s),r},{});return ob.forEach(function(r){(t.includes(n[r])||t.some(function(s){return E5[r].includes(s)}))&&(e=r)}),e}function Ec(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Nt:n,s=n5[r][t];if(r===ta&&!t)return"fad";var i=Gg[r][t]||Gg[r][s],o=t in fn.styles?t:null,l=i||o||null;return l}function R5(t){var e=[],n=null;return t.forEach(function(r){var s=T5(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Jg(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var Zg=lb.concat(ab);function wc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=null,i=Jg(t.filter(function(y){return Zg.includes(y)})),o=Jg(t.filter(function(y){return!Zg.includes(y)})),l=i.filter(function(y){return s=y,!W0.includes(y)}),c=vc(l,1),u=c[0],f=u===void 0?null:u,d=S5(i),m=H(H({},R5(o)),{},{prefix:Ec(f,{family:d})});return H(H(H({},m),N5({values:t,family:d,styles:Mo,config:ae,canonical:m,givenPrefix:s})),P5(r,s,m))}function P5(t,e,n){var r=n.prefix,s=n.iconName;if(t||!r||!s)return{prefix:r,iconName:s};var i=e==="fa"?Nb(s):{},o=hs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Mo.far&&Mo.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var C5=ob.filter(function(t){return t!==Nt||t!==ta}),k5=Object.keys(uh).filter(function(t){return t!==Nt}).map(function(t){return Object.keys(uh[t])}).flat();function N5(t){var e=t.values,n=t.family,r=t.canonical,s=t.givenPrefix,i=s===void 0?"":s,o=t.styles,l=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,f=n===ta,d=e.includes("fa-duotone")||e.includes("fad"),m=u.familyDefault==="duotone",y=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(d||m||y)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&C5.includes(n)){var C=Object.keys(l).find(function(x){return k5.includes(x)});if(C||u.autoFetchSvg){var k=eO.get(n).defaultShortPrefixId;r.prefix=k,r.iconName=hs(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Kr()||"fas"),r}var x5=function(){function t(){AD(this,t),this.definitions={}}return RD(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=H(H({},n.definitions[l]||{}),o[l]),Tb(l,o[l]),kb()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],l=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][c]=u}),n}}])}(),ey=[],Hs={},ti={},D5=Object.keys(ti);function O5(t,e){var n=e.mixoutsTo;return ey=t,Hs={},Object.keys(ti).forEach(function(r){D5.indexOf(r)===-1&&delete ti[r]}),ey.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),xl(s[o])==="object"&&Object.keys(s[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=s[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Hs[o]||(Hs[o]=[]),Hs[o].push(i[o])})}r.provides&&r.provides(ti)}),n}function gh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Hs[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ws(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=Hs[t]||[];s.forEach(function(i){i.apply(null,n)})}function Yr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ti[t]?ti[t].apply(null,e):void 0}function yh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Kr();if(e)return e=hs(n,e)||e,Qg(Db.definitions,n,e)||Qg(fn.styles,n,e)}var Db=new x5,V5=function(){ae.autoReplaceSvg=!1,ae.observeMutations=!1,ws("noAuto")},M5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pr?(ws("beforeI2svg",e),Yr("pseudoElements2svg",e),Yr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,v5(function(){F5({autoReplaceSvgRoot:n}),ws("watch",e)})}},L5={icon:function(e){if(e===null)return null;if(xl(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ec(e[0]);return{prefix:r,iconName:hs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ae.cssPrefix,"-"))>-1||e.match(r5))){var s=wc(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Kr(),iconName:hs(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=Kr();return{prefix:i,iconName:hs(i,e)||e}}}},Kt={noAuto:V5,config:ae,dom:M5,parse:L5,library:Db,findIconDefinition:yh,toHtml:ra},F5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ze:n;(Object.keys(fn.styles).length>0||ae.autoFetchSvg)&&pr&&ae.autoReplaceSvg&&Kt.dom.i2svg({node:r})};function Tc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ra(r)})}}),Object.defineProperty(t,"node",{get:function(){if(pr){var r=ze.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function U5(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(Kf(o)&&n.found&&!r.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};s.style=bc(H(H({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function $5(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},s),{},{id:o}),children:r}]}]}function j5(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Xf(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,l=t.symbol,c=t.maskId,u=t.extra,f=t.watchable,d=f===void 0?!1:f,m=r.found?r:n,y=m.width,C=m.height,k=[ae.replacementClass,i?"".concat(ae.cssPrefix,"-").concat(i):""].filter(function(ee){return u.classes.indexOf(ee)===-1}).filter(function(ee){return ee!==""||!!ee}).concat(u.classes).join(" "),x={children:[],attributes:H(H({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:k,role:u.attributes.role||"img",viewBox:"0 0 ".concat(y," ").concat(C)})};!j5(u.attributes)&&!u.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),d&&(x.attributes[Es]="");var R=H(H({},x),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:l,styles:H({},u.styles)}),N=r.found&&n.found?Yr("generateAbstractMask",R)||{children:[],attributes:{}}:Yr("generateAbstractIcon",R)||{children:[],attributes:{}},V=N.children,U=N.attributes;return R.children=V,R.attributes=U,l?$5(R):U5(R)}function ty(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.extra,o=t.watchable,l=o===void 0?!1:o,c=H(H({},i.attributes),{},{class:i.classes.join(" ")});l&&(c[Es]="");var u=H({},i.styles);Kf(s)&&(u.transform=g5({transform:s,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=bc(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),d}function B5(t){var e=t.content,n=t.extra,r=H(H({},n.attributes),{},{class:n.classes.join(" ")}),s=bc(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var vu=fn.styles;function _h(t){var e=t[0],n=t[1],r=t.slice(4),s=vc(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(gu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(gu.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(gu.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var z5={found:!1,width:512,height:512};function q5(t,e){!db&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function vh(t,e){var n=e;return e==="fa"&&ae.styleDefault!==null&&(e=Kr()),new Promise(function(r,s){if(n==="fa"){var i=Nb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&vu[e]&&vu[e][t]){var o=vu[e][t];return r(_h(o))}q5(t,e),r(H(H({},z5),{},{icon:ae.showMissingIcons&&t?Yr("missingIconAbstract")||{}:{}}))})}var ny=function(){},bh=ae.measurePerformance&&Na&&Na.mark&&Na.measure?Na:{mark:ny,measure:ny},Hi='FA "7.0.0"',H5=function(e){return bh.mark("".concat(Hi," ").concat(e," begins")),function(){return Ob(e)}},Ob=function(e){bh.mark("".concat(Hi," ").concat(e," ends")),bh.measure("".concat(Hi," ").concat(e),"".concat(Hi," ").concat(e," begins"),"".concat(Hi," ").concat(e," ends"))},Jf={begin:H5,end:Ob},Qa=function(){};function ry(t){var e=t.getAttribute?t.getAttribute(Es):null;return typeof e=="string"}function W5(t){var e=t.getAttribute?t.getAttribute(Hf):null,n=t.getAttribute?t.getAttribute(Wf):null;return e&&n}function G5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function K5(){if(ae.autoReplaceSvg===!0)return Xa.replace;var t=Xa[ae.autoReplaceSvg];return t||Xa.replace}function Y5(t){return ze.createElementNS("http://www.w3.org/2000/svg",t)}function Q5(t){return ze.createElement(t)}function Vb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Y5:Q5:n;if(typeof t=="string")return ze.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(Vb(o,{ceFn:r}))}),s}function X5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Xa={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(Vb(s),n)}),n.getAttribute(Es)===null&&ae.keepOriginalSource){var r=ze.createComment(X5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Gf(n).indexOf(ae.replacementClass))return Xa.replace(e);var s=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,c){return c===ae.replacementClass||c.match(s)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ra(l)}).join(`
`);n.setAttribute(Es,""),n.innerHTML=o}};function sy(t){t()}function Mb(t,e){var n=typeof e=="function"?e:Qa;if(t.length===0)n();else{var r=sy;ae.mutateApproach===e5&&(r=Gr.requestAnimationFrame||sy),r(function(){var s=K5(),i=Jf.begin("mutate");t.map(s),i(),n()})}}var Zf=!1;function Lb(){Zf=!0}function Eh(){Zf=!1}var Ol=null;function iy(t){if(zg&&ae.observeMutations){var e=t.treeCallback,n=e===void 0?Qa:e,r=t.nodeCallback,s=r===void 0?Qa:r,i=t.pseudoElementsCallback,o=i===void 0?Qa:i,l=t.observeMutationsRoot,c=l===void 0?ze:l;Ol=new zg(function(u){if(!Zf){var f=Kr();vi(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ry(d.addedNodes[0])&&(ae.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&ae.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&ry(d.target)&&~o5.indexOf(d.attributeName))if(d.attributeName==="class"&&W5(d.target)){var m=wc(Gf(d.target)),y=m.prefix,C=m.iconName;d.target.setAttribute(Hf,y||f),C&&d.target.setAttribute(Wf,C)}else G5(d.target)&&s(d.target)})}}),pr&&Ol.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function J5(){Ol&&Ol.disconnect()}function Z5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function eV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=wc(Gf(t));return s.prefix||(s.prefix=Kr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=I5(s.prefix,t.innerText)||Qf(s.prefix,wb(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function tV(t){var e=vi(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function nV(){return{iconName:null,prefix:null,transform:Sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=eV(t),r=n.iconName,s=n.prefix,i=n.rest,o=tV(t),l=gh("parseNodeAttributes",{},t),c=e.styleParser?Z5(t):[];return H({iconName:r,prefix:s,transform:Sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var rV=fn.styles;function Fb(t){var e=ae.autoReplaceSvg==="nest"?oy(t,{styleParser:!1}):oy(t);return~e.extra.classes.indexOf(gb)?Yr("generateLayersText",t,e):Yr("generateSvgReplacementMutation",t,e)}function sV(){return[].concat(_n(ab),_n(lb))}function ay(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pr)return Promise.resolve();var n=ze.documentElement.classList,r=function(d){return n.add("".concat(Wg,"-").concat(d))},s=function(d){return n.remove("".concat(Wg,"-").concat(d))},i=ae.autoFetchSvg?sV():W0.concat(Object.keys(rV));i.includes("fa")||i.push("fa");var o=[".".concat(gb,":not([").concat(Es,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Es,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=vi(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var c=Jf.begin("onTree"),u=l.reduce(function(f,d){try{var m=Fb(d);m&&f.push(m)}catch(y){db||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(m){Mb(m,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(m){c(),d(m)})})}function iV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fb(t).then(function(n){n&&Mb([n],e)})}function oV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:yh(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:yh(s||{})),t(r,H(H({},n),{},{mask:s}))}}var aV=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Sn:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,c=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.classes,m=d===void 0?[]:d,y=n.attributes,C=y===void 0?{}:y,k=n.styles,x=k===void 0?{}:k;if(e){var R=e.prefix,N=e.iconName,V=e.icon;return Tc(H({type:"icon"},e),function(){return ws("beforeDOMElementCreation",{iconDefinition:e,params:n}),Xf({icons:{main:_h(V),mask:c?_h(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:N,transform:H(H({},Sn),s),symbol:o,maskId:f,extra:{attributes:C,styles:x,classes:m}})})}},lV={mixout:function(){return{icon:oV(aV)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ay,n.nodeCallback=iV,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?ze:r,i=n.callback,o=i===void 0?function(){}:i;return ay(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.prefix,o=r.transform,l=r.symbol,c=r.mask,u=r.maskId,f=r.extra;return new Promise(function(d,m){Promise.all([vh(s,i),c.iconName?vh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var C=vc(y,2),k=C[0],x=C[1];d([n,Xf({icons:{main:k,mask:x},prefix:i,iconName:s,transform:o,symbol:l,maskId:u,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,l=n.styles,c=bc(l);c.length>0&&(s.style=c);var u;return Kf(o)&&(u=Yr("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:s}}}},cV={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Tc({type:"layer"},function(){ws("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers")].concat(_n(i)).join(" ")},children:o}]})}}}},uV={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,i=s===void 0?[]:s,o=r.attributes,l=o===void 0?{}:o,c=r.styles,u=c===void 0?{}:c;return Tc({type:"counter",content:n},function(){return ws("beforeDOMElementCreation",{content:n,params:r}),B5({content:n.toString(),extra:{attributes:l,styles:u,classes:["".concat(ae.cssPrefix,"-layers-counter")].concat(_n(i))}})})}}}},hV={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Sn:s,o=r.classes,l=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,f=r.styles,d=f===void 0?{}:f;return Tc({type:"text",content:n},function(){return ws("beforeDOMElementCreation",{content:n,params:r}),ty({content:n,transform:H(H({},Sn),i),extra:{attributes:u,styles:d,classes:["".concat(ae.cssPrefix,"-layers-text")].concat(_n(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.transform,i=r.extra,o=null,l=null;if(q0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return Promise.resolve([n,ty({content:n.innerHTML,width:o,height:l,transform:s,extra:i,watchable:!0})])}}},Ub=new RegExp('"',"ug"),ly=[1105920,1112319],cy=H(H(H(H({},{FontAwesome:{normal:"fas",400:"fas"}}),ZD),JO),lO),wh=Object.keys(cy).reduce(function(t,e){return t[e.toLowerCase()]=cy[e],t},{}),fV=Object.keys(wh).reduce(function(t,e){var n=wh[e];return t[e]=n[900]||_n(Object.entries(n))[0][1],t},{});function dV(t){var e=t.replace(Ub,"");return wb(_n(e)[0]||"")}function pV(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(Ub,""),s=r.codePointAt(0),i=s>=ly[0]&&s<=ly[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function mV(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(wh[n]||{})[s]||fV[n]}function uy(t,e){var n="".concat(ZO).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=vi(t.children),o=i.filter(function(ie){return ie.getAttribute(fh)===e})[0],l=Gr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(s5),f=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){var m=l.getPropertyValue("content"),y=mV(c,f),C=dV(m),k=u[0].startsWith("FontAwesome"),x=pV(l),R=Qf(y,C),N=R;if(k){var V=A5(C);V.iconName&&V.prefix&&(R=V.iconName,y=V.prefix)}if(R&&!x&&(!o||o.getAttribute(Hf)!==y||o.getAttribute(Wf)!==N)){t.setAttribute(n,N),o&&t.removeChild(o);var U=nV(),ee=U.extra;ee.attributes[fh]=e,vh(R,y).then(function(ie){var S=Xf(H(H({},U),{},{icons:{main:ie,mask:xb()},prefix:y,iconName:N,extra:ee,watchable:!0})),v=ze.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(v,t.firstChild):t.appendChild(v),v.outerHTML=S.map(function(b){return ra(b)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function gV(t){return Promise.all([uy(t,"::before"),uy(t,"::after")])}function yV(t){return t.parentNode!==document.head&&!~t5.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var _V=function(e){return!!e&&fb.some(function(n){return e.includes(n)})},vV=function(e){if(!e)return[];for(var n=new Set,r=[e],s=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var y=l[o];r=r.flatMap(function(C){return C.split(y).map(function(k){return k.replace(/,\s*$/,"").trim()})})},o=0,l=s;o<l.length;o++)i();r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(y){return y.trim()})});var c=Ya(r),u;try{for(c.s();!(u=c.n()).done;){var f=u.value;if(_V(f)){var d=fb.reduce(function(m,y){return m.replace(y,"")},f);d!==""&&d!=="*"&&n.add(d)}}}catch(m){c.e(m)}finally{c.f()}return n};function hy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(pr){var n;if(e)n=t;else if(ae.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,s=Ya(document.styleSheets),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;try{var l=Ya(o.cssRules),c;try{for(l.s();!(c=l.n()).done;){var u=c.value,f=vV(u.selectorText),d=Ya(f),m;try{for(d.s();!(m=d.n()).done;){var y=m.value;r.add(y)}}catch(k){d.e(k)}finally{d.f()}}}catch(k){l.e(k)}finally{l.f()}}catch(k){ae.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(k.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(k){s.e(k)}finally{s.f()}if(!r.size)return;var C=Array.from(r).join(", ");try{n=t.querySelectorAll(C)}catch{}}return new Promise(function(k,x){var R=vi(n).filter(yV).map(gV),N=Jf.begin("searchPseudoElements");Lb(),Promise.all(R).then(function(){N(),Eh(),k()}).catch(function(){N(),Eh(),x()})})}}var bV={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?ze:r;ae.searchPseudoElements&&hy(s)}}},fy=!1,EV={mixout:function(){return{dom:{unwatch:function(){Lb(),fy=!0}}}},hooks:function(){return{bootstrap:function(){iy(gh("mutationObserverCallbacks",{}))},noAuto:function(){J5()},watch:function(n){var r=n.observeMutationsRoot;fy?Eh():iy(gh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},dy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},wV={mixout:function(){return{parse:{transform:function(n){return dy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=dy(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),f="rotate(".concat(s.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:d,path:m};return{tag:"g",attributes:H({},y.outer),children:[{tag:"g",attributes:H({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:H(H({},r.icon.attributes),y.path)}]}]}}}},bu={x:0,y:0,width:"100%",height:"100%"};function py(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function TV(t){return t.tag==="g"?t.children:[t]}var IV={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?wc(s.split(" ").map(function(o){return o.trim()})):xb();return i.prefix||(i.prefix=Kr()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,l=n.maskId,c=n.transform,u=i.width,f=i.icon,d=o.width,m=o.icon,y=m5({transform:c,containerWidth:d,iconWidth:u}),C={tag:"rect",attributes:H(H({},bu),{},{fill:"white"})},k=f.children?{children:f.children.map(py)}:{},x={tag:"g",attributes:H({},y.inner),children:[py(H({tag:f.tag,attributes:H(H({},f.attributes),y.path)},k))]},R={tag:"g",attributes:H({},y.outer),children:[x]},N="mask-".concat(l||Kg()),V="clip-".concat(l||Kg()),U={tag:"mask",attributes:H(H({},bu),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,R]},ee={tag:"defs",children:[{tag:"clipPath",attributes:{id:V},children:TV(m)},U]};return r.push(ee,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(V,")"),mask:"url(#".concat(N,")")},bu)}),{children:r,attributes:s}}}},AV={provides:function(e){var n=!1;Gr.matchMedia&&(n=Gr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:H(H({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=H(H({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:H(H({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:H(H({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:H(H({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:H(H({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:H(H({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},SV={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},RV=[_5,lV,cV,uV,hV,bV,EV,wV,IV,AV,SV];O5(RV,{mixoutsTo:Kt});Kt.noAuto;Kt.config;var $b=Kt.library;Kt.dom;var Th=Kt.parse;Kt.findIconDefinition;Kt.toHtml;var PV=Kt.icon;Kt.layer;Kt.text;Kt.counter;function Tt(t,e,n){return(e=xV(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function my(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Yn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?my(Object(n),!0).forEach(function(r){Tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):my(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function CV(t,e){if(t==null)return{};var n,r,s=kV(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function kV(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function NV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xV(t){var e=NV(t,"string");return typeof e=="symbol"?e:e+""}function Vl(t){"@babel/helpers - typeof";return Vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vl(t)}function Eu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Tt({},t,e):{}}function DV(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Tt(Tt(Tt(Tt(Tt(Tt(Tt(Tt(Tt(Tt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),Tt(Tt(Tt(Tt(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var OV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jb={exports:{}};(function(t){(function(e){var n=function(R,N,V){if(!u(N)||d(N)||m(N)||y(N)||c(N))return N;var U,ee=0,ie=0;if(f(N))for(U=[],ie=N.length;ee<ie;ee++)U.push(n(R,N[ee],V));else{U={};for(var S in N)Object.prototype.hasOwnProperty.call(N,S)&&(U[R(S,V)]=n(R,N[S],V))}return U},r=function(R,N){N=N||{};var V=N.separator||"_",U=N.split||/(?=[A-Z])/;return R.split(U).join(V)},s=function(R){return C(R)?R:(R=R.replace(/[\-_\s]+(.)?/g,function(N,V){return V?V.toUpperCase():""}),R.substr(0,1).toLowerCase()+R.substr(1))},i=function(R){var N=s(R);return N.substr(0,1).toUpperCase()+N.substr(1)},o=function(R,N){return r(R,N).toLowerCase()},l=Object.prototype.toString,c=function(R){return typeof R=="function"},u=function(R){return R===Object(R)},f=function(R){return l.call(R)=="[object Array]"},d=function(R){return l.call(R)=="[object Date]"},m=function(R){return l.call(R)=="[object RegExp]"},y=function(R){return l.call(R)=="[object Boolean]"},C=function(R){return R=R-0,R===R},k=function(R,N){var V=N&&"process"in N?N.process:N;return typeof V!="function"?R:function(U,ee){return V(U,R,ee)}},x={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(R,N){return n(k(s,N),R)},decamelizeKeys:function(R,N){return n(k(o,N),R,N)},pascalizeKeys:function(R,N){return n(k(i,N),R)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(OV)})(jb);var VV=jb.exports,MV=["class","style"];function LV(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=VV.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function FV(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Bb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Bb(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=FV(f);break;case"style":c.style=LV(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=CV(n,MV);return Yl(t.tag,Yn(Yn(Yn({},e),{},{class:s.class,style:Yn(Yn({},s.style),o)},s.attrs),l),r)}var zb=!1;try{zb=!0}catch{}function UV(){if(!zb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gy(t){if(t&&Vl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Th.icon)return Th.icon(t);if(t===null)return null;if(Vl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var $V=Uh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=je(function(){return gy(e.icon)}),i=je(function(){return Eu("classes",DV(e))}),o=je(function(){return Eu("transform",typeof e.transform=="string"?Th.transform(e.transform):e.transform)}),l=je(function(){return Eu("mask",gy(e.mask))}),c=je(function(){var f=Yn(Yn(Yn(Yn({},i.value),o.value),l.value),{},{symbol:e.symbol,maskId:e.maskId});return f.title=e.title,f.titleId=e.titleId,PV(s.value,f)});Zi(c,function(f){if(!f)return UV("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=je(function(){return c.value?Bb(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var jV={prefix:"fas",iconName:"truck",icon:[576,512,[128666,9951],"f0d1","M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},BV={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},zV={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},qV={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},HV=qV,WV={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},GV={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},KV={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},YV={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256a192 192 0 1 0 -384 0 192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},QV={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},XV=QV,JV={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},ZV={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},eM={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},tM=eM,nM={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z"]},rM={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},sM=rM,iM={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm84.4-299.3l-80 128c-4.2 6.7-11.4 10.9-19.3 11.3s-15.5-3.2-20.2-9.6l-48-64c-8-10.6-5.8-25.6 4.8-33.6s25.6-5.8 33.6 4.8l27 36 61.4-98.3c7-11.2 21.8-14.7 33.1-7.6s14.7 21.8 7.6 33.1z"]},oM=iM,aM={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},lM={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},cM={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]},uM={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},hM={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},fM={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var dM={prefix:"fab",iconName:"google",icon:[512,512,[],"f1a0","M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"]},pM={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},mM={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},gM={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},yM={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},_M={prefix:"fab",iconName:"spotify",icon:[512,512,[],"f1bc","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM356.7 372.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},vM={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};$b.add(tM,cM,lM,uM,HV,zV,JV,sM,XV,ZV,nM,WV,YV,BV,oM,KV,hM,jV,aM,GV,fM);$b.add(dM,_M,yM,mM,vM,gM,pM);const ed=VT(DN);ed.component("font-awesome-icon",$V);ed.use(U0);ed.mount("#app");
