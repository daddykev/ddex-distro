(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const je={},Js=[],xn=()=>{},mE=()=>!1,Ul=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ch=t=>t.startsWith("onUpdate:"),ft=Object.assign,Ph=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gE=Object.prototype.hasOwnProperty,Le=(t,e)=>gE.call(t,e),he=Array.isArray,Zs=t=>Wo(t)==="[object Map]",Ei=t=>Wo(t)==="[object Set]",Kd=t=>Wo(t)==="[object Date]",ye=t=>typeof t=="function",tt=t=>typeof t=="string",$n=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",_v=t=>(Be(t)||ye(t))&&ye(t.then)&&ye(t.catch),bv=Object.prototype.toString,Wo=t=>bv.call(t),vE=t=>Wo(t).slice(8,-1),Ev=t=>Wo(t)==="[object Object]",kh=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,to=Rh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yE=/-(\w)/g,ln=jl(t=>t.replace(yE,(e,n)=>n?n.toUpperCase():"")),_E=/\B([A-Z])/g,ks=jl(t=>t.replace(_E,"-$1").toLowerCase()),Bl=jl(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=jl(t=>t?`on${Bl(t)}`:""),Lr=(t,e)=>!Object.is(t,e),ja=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Au=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},sl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bE=t=>{const e=tt(t)?Number(t):NaN;return isNaN(e)?t:e};let Yd;const zl=()=>Yd||(Yd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Go(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?IE(r):Go(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(tt(t)||Be(t))return t}const EE=/;(?![^(]*\))/g,wE=/:([^]+)/,TE=/\/\*[^]*?\*\//g;function IE(t){const e={};return t.replace(TE,"").split(EE).forEach(n=>{if(n){const r=n.split(wE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function rn(t){let e="";if(tt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=rn(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const AE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",SE=Rh(AE);function wv(t){return!!t||t===""}function RE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Es(t[r],e[r]);return n}function Es(t,e){if(t===e)return!0;let n=Kd(t),r=Kd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=$n(t),r=$n(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?RE(t,e):!1;if(n=Be(t),r=Be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Es(t[o],e[o]))return!1}}return String(t)===String(e)}function Nh(t,e){return t.findIndex(n=>Es(n,e))}const Tv=t=>!!(t&&t.__v_isRef===!0),ie=t=>tt(t)?t:t==null?"":he(t)||Be(t)&&(t.toString===bv||!ye(t.toString))?Tv(t)?ie(t.value):JSON.stringify(t,Iv,2):String(t),Iv=(t,e)=>Tv(e)?Iv(t,e.value):Zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bc(r,i)+" =>"]=s,n),{})}:Ei(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bc(n))}:$n(e)?Bc(e):Be(e)&&!he(e)&&!Ev(e)?String(e):e,Bc=(t,e="")=>{var n;return $n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class CE{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){++this._on===1&&(this.prevScope=Ut,Ut=this)}off(){this._on>0&&--this._on===0&&(Ut=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function PE(){return Ut}let ze;const zc=new WeakSet;class Av{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&Ut.active&&Ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zc.has(this)&&(zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qd(this),Cv(this);const e=ze,n=yn;ze=this,yn=!0;try{return this.fn()}finally{Pv(this),ze=e,yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oh(e);this.deps=this.depsTail=void 0,Qd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Su(this)&&this.run()}get dirty(){return Su(this)}}let Sv=0,no,ro;function Rv(t,e=!1){if(t.flags|=8,e){t.next=ro,ro=t;return}t.next=no,no=t}function Dh(){Sv++}function xh(){if(--Sv>0)return;if(ro){let e=ro;for(ro=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;no;){let e=no;for(no=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Cv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pv(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Oh(r),kE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Su(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Io)||(t.globalVersion=Io,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Su(t))))return;t.flags|=2;const e=t.dep,n=ze,r=yn;ze=t,yn=!0;try{Cv(t);const s=t.fn(t._value);(e.version===0||Lr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ze=n,yn=r,Pv(t),t.flags&=-3}}function Oh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Oh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function kE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yn=!0;const Nv=[];function lr(){Nv.push(yn),yn=!1}function cr(){const t=Nv.pop();yn=t===void 0?!0:t}function Qd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ze;ze=void 0;try{e()}finally{ze=n}}}let Io=0;class NE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ze||!yn||ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ze)n=this.activeLink=new NE(ze,this),ze.deps?(n.prevDep=ze.depsTail,ze.depsTail.nextDep=n,ze.depsTail=n):ze.deps=ze.depsTail=n,Dv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ze.depsTail,n.nextDep=void 0,ze.depsTail.nextDep=n,ze.depsTail=n,ze.deps===n&&(ze.deps=r)}return n}trigger(e){this.version++,Io++,this.notify(e)}notify(e){Dh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xh()}}}function Dv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dv(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ru=new WeakMap,ys=Symbol(""),Cu=Symbol(""),Ao=Symbol("");function Rt(t,e,n){if(yn&&ze){let r=Ru.get(t);r||Ru.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Vh),s.map=r,s.key=n),s.track()}}function Jn(t,e,n,r,s,i){const o=Ru.get(t);if(!o){Io++;return}const l=c=>{c&&c.trigger()};if(Dh(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&kh(n);if(c&&n==="length"){const h=Number(r);o.forEach((d,g)=>{(g==="length"||g===Ao||!$n(g)&&g>=h)&&l(d)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ao)),e){case"add":c?u&&l(o.get("length")):(l(o.get(ys)),Zs(t)&&l(o.get(Cu)));break;case"delete":c||(l(o.get(ys)),Zs(t)&&l(o.get(Cu)));break;case"set":Zs(t)&&l(o.get(ys));break}}xh()}function Bs(t){const e=Ve(t);return e===t?e:(Rt(e,"iterate",Ao),on(t)?e:e.map(yt))}function ql(t){return Rt(t=Ve(t),"iterate",Ao),t}const DE={__proto__:null,[Symbol.iterator](){return qc(this,Symbol.iterator,yt)},concat(...t){return Bs(this).concat(...t.map(e=>he(e)?Bs(e):e))},entries(){return qc(this,"entries",t=>(t[1]=yt(t[1]),t))},every(t,e){return Kn(this,"every",t,e,void 0,arguments)},filter(t,e){return Kn(this,"filter",t,e,n=>n.map(yt),arguments)},find(t,e){return Kn(this,"find",t,e,yt,arguments)},findIndex(t,e){return Kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Kn(this,"findLast",t,e,yt,arguments)},findLastIndex(t,e){return Kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return Bs(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return Kn(this,"map",t,e,void 0,arguments)},pop(){return Bi(this,"pop")},push(...t){return Bi(this,"push",t)},reduce(t,...e){return Xd(this,"reduce",t,e)},reduceRight(t,...e){return Xd(this,"reduceRight",t,e)},shift(){return Bi(this,"shift")},some(t,e){return Kn(this,"some",t,e,void 0,arguments)},splice(...t){return Bi(this,"splice",t)},toReversed(){return Bs(this).toReversed()},toSorted(t){return Bs(this).toSorted(t)},toSpliced(...t){return Bs(this).toSpliced(...t)},unshift(...t){return Bi(this,"unshift",t)},values(){return qc(this,"values",yt)}};function qc(t,e,n){const r=ql(t),s=r[e]();return r!==t&&!on(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xE=Array.prototype;function Kn(t,e,n,r,s,i){const o=ql(t),l=o!==t&&!on(t),c=o[e];if(c!==xE[e]){const d=c.apply(t,i);return l?yt(d):d}let u=n;o!==t&&(l?u=function(d,g){return n.call(this,yt(d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const h=c.call(o,u,r);return l&&s?s(h):h}function Xd(t,e,n,r){const s=ql(t);let i=n;return s!==t&&(on(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,yt(l),c,t)}),s[e](i,...r)}function Hc(t,e,n){const r=Ve(t);Rt(r,"iterate",Ao);const s=r[e](...n);return(s===-1||s===!1)&&Fh(n[0])?(n[0]=Ve(n[0]),r[e](...n)):s}function Bi(t,e,n=[]){lr(),Dh();const r=Ve(t)[e].apply(t,n);return xh(),cr(),r}const OE=Rh("__proto__,__v_isRef,__isVue"),xv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n));function VE(t){$n(t)||(t=String(t));const e=Ve(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class Ov{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?HE:Fv:i?Lv:Mv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=DE[n]))return c;if(n==="hasOwnProperty")return VE}const l=Reflect.get(e,n,kt(e)?e:r);return($n(n)?xv.has(n):OE(n))||(s||Rt(e,"get",n),i)?l:kt(l)?o&&kh(n)?l:l.value:Be(l)?s?Uv(l):Hl(l):l}}class Vv extends Ov{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Br(i);if(!on(r)&&!Br(r)&&(i=Ve(i),r=Ve(r)),!he(e)&&kt(i)&&!kt(r))return c?!1:(i.value=r,!0)}const o=he(e)&&kh(n)?Number(n)<e.length:Le(e,n),l=Reflect.set(e,n,r,kt(e)?e:s);return e===Ve(s)&&(o?Lr(r,i)&&Jn(e,"set",n,r):Jn(e,"add",n,r)),l}deleteProperty(e,n){const r=Le(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Jn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!$n(n)||!xv.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",he(e)?"length":ys),Reflect.ownKeys(e)}}class ME extends Ov{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const LE=new Vv,FE=new ME,$E=new Vv(!0);const Pu=t=>t,Ra=t=>Reflect.getPrototypeOf(t);function UE(t,e,n){return function(...r){const s=this.__v_raw,i=Ve(s),o=Zs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?Pu:e?il:yt;return!e&&Rt(i,"iterate",c?Cu:ys),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:l?[h(d[0]),h(d[1])]:h(d),done:g}},[Symbol.iterator](){return this}}}}function Ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jE(t,e){const n={get(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);t||(Lr(s,l)&&Rt(o,"get",s),Rt(o,"get",l));const{has:c}=Ra(o),u=e?Pu:t?il:yt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Rt(Ve(s),"iterate",ys),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ve(i),l=Ve(s);return t||(Lr(s,l)&&Rt(o,"has",s),Rt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ve(l),u=e?Pu:t?il:yt;return!t&&Rt(c,"iterate",ys),l.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return ft(n,t?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(s){!e&&!on(s)&&!Br(s)&&(s=Ve(s));const i=Ve(this);return Ra(i).has.call(i,s)||(i.add(s),Jn(i,"add",s,s)),this},set(s,i){!e&&!on(i)&&!Br(i)&&(i=Ve(i));const o=Ve(this),{has:l,get:c}=Ra(o);let u=l.call(o,s);u||(s=Ve(s),u=l.call(o,s));const h=c.call(o,s);return o.set(s,i),u?Lr(i,h)&&Jn(o,"set",s,i):Jn(o,"add",s,i),this},delete(s){const i=Ve(this),{has:o,get:l}=Ra(i);let c=o.call(i,s);c||(s=Ve(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Jn(i,"delete",s,void 0),u},clear(){const s=Ve(this),i=s.size!==0,o=s.clear();return i&&Jn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=UE(s,t,e)}),n}function Mh(t,e){const n=jE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Le(n,s)&&s in r?n:r,s,i)}const BE={get:Mh(!1,!1)},zE={get:Mh(!1,!0)},qE={get:Mh(!0,!1)};const Mv=new WeakMap,Lv=new WeakMap,Fv=new WeakMap,HE=new WeakMap;function WE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GE(t){return t.__v_skip||!Object.isExtensible(t)?0:WE(vE(t))}function Hl(t){return Br(t)?t:Lh(t,!1,LE,BE,Mv)}function $v(t){return Lh(t,!1,$E,zE,Lv)}function Uv(t){return Lh(t,!0,FE,qE,Fv)}function Lh(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=GE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ei(t){return Br(t)?ei(t.__v_raw):!!(t&&t.__v_isReactive)}function Br(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function Fh(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function KE(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&Au(t,"__v_skip",!0),t}const yt=t=>Be(t)?Hl(t):t,il=t=>Be(t)?Uv(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function Ne(t){return jv(t,!1)}function YE(t){return jv(t,!0)}function jv(t,e){return kt(t)?t:new QE(t,e)}class QE{constructor(e,n){this.dep=new Vh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||on(e)||Br(e);e=r?e:Ve(e),Lr(e,n)&&(this._rawValue=e,this._value=r?e:yt(e),this.dep.trigger())}}function ir(t){return kt(t)?t.value:t}const XE={get:(t,e,n)=>e==="__v_raw"?t:ir(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return kt(s)&&!kt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bv(t){return ei(t)?t:new Proxy(t,XE)}class JE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return Rv(this,!0),!0}get value(){const e=this.dep.track();return kv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ZE(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new JE(r,s,n)}const Pa={},ol=new WeakMap;let hs;function ew(t,e=!1,n=hs){if(n){let r=ol.get(n);r||ol.set(n,r=[]),r.push(t)}}function tw(t,e,n=je){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=x=>s?x:on(x)||s===!1||s===0?Zn(x,1):Zn(x);let h,d,g,v,D=!1,N=!1;if(kt(t)?(d=()=>t.value,D=on(t)):ei(t)?(d=()=>u(t),D=!0):he(t)?(N=!0,D=t.some(x=>ei(x)||on(x)),d=()=>t.map(x=>{if(kt(x))return x.value;if(ei(x))return u(x);if(ye(x))return c?c(x,2):x()})):ye(t)?e?d=c?()=>c(t,2):t:d=()=>{if(g){lr();try{g()}finally{cr()}}const x=hs;hs=h;try{return c?c(t,3,[v]):t(v)}finally{hs=x}}:d=xn,e&&s){const x=d,F=s===!0?1/0:s;d=()=>Zn(x(),F)}const _=PE(),R=()=>{h.stop(),_&&_.active&&Ph(_.effects,h)};if(i&&e){const x=e;e=(...F)=>{x(...F),R()}}let S=N?new Array(t.length).fill(Pa):Pa;const O=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(e){const F=h.run();if(s||D||(N?F.some((H,b)=>Lr(H,S[b])):Lr(F,S))){g&&g();const H=hs;hs=h;try{const b=[F,S===Pa?void 0:N&&S[0]===Pa?[]:S,v];S=F,c?c(e,3,b):e(...b)}finally{hs=H}}}else h.run()};return l&&l(O),h=new Av(d),h.scheduler=o?()=>o(O,!1):O,v=x=>ew(x,!1,h),g=h.onStop=()=>{const x=ol.get(h);if(x){if(c)c(x,4);else for(const F of x)F();ol.delete(h)}},e?r?O(!0):S=h.run():o?o(O.bind(null,!0),!0):h.run(),R.pause=h.pause.bind(h),R.resume=h.resume.bind(h),R.stop=R,R}function Zn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))Zn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)Zn(t[r],e,n);else if(Ei(t)||Zs(t))t.forEach(r=>{Zn(r,e,n)});else if(Ev(t)){for(const r in t)Zn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Zn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ko(t,e,n,r){try{return r?t(...r):t()}catch(s){Wl(s,e,n)}}function En(t,e,n,r){if(ye(t)){const s=Ko(t,e,n,r);return s&&_v(s)&&s.catch(i=>{Wl(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function Wl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||je;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const h=l.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}l=l.parent}if(i){lr(),Ko(i,null,10,[t,c,u]),cr();return}}nw(t,n,s,r,o)}function nw(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Mt=[];let Rn=-1;const ti=[];let Pr=null,qs=0;const zv=Promise.resolve();let al=null;function $h(t){const e=al||zv;return t?e.then(this?t.bind(this):t):e}function rw(t){let e=Rn+1,n=Mt.length;for(;e<n;){const r=e+n>>>1,s=Mt[r],i=So(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Uh(t){if(!(t.flags&1)){const e=So(t),n=Mt[Mt.length-1];!n||!(t.flags&2)&&e>=So(n)?Mt.push(t):Mt.splice(rw(e),0,t),t.flags|=1,qv()}}function qv(){al||(al=zv.then(Wv))}function sw(t){he(t)?ti.push(...t):Pr&&t.id===-1?Pr.splice(qs+1,0,t):t.flags&1||(ti.push(t),t.flags|=1),qv()}function Jd(t,e,n=Rn+1){for(;n<Mt.length;n++){const r=Mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Hv(t){if(ti.length){const e=[...new Set(ti)].sort((n,r)=>So(n)-So(r));if(ti.length=0,Pr){Pr.push(...e);return}for(Pr=e,qs=0;qs<Pr.length;qs++){const n=Pr[qs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pr=null,qs=0}}const So=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wv(t){try{for(Rn=0;Rn<Mt.length;Rn++){const e=Mt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ko(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Mt.length;Rn++){const e=Mt[Rn];e&&(e.flags&=-2)}Rn=-1,Mt.length=0,Hv(),al=null,(Mt.length||ti.length)&&Wv()}}let Wt=null,Gv=null;function ll(t){const e=Wt;return Wt=t,Gv=t&&t.type.__scopeId||null,e}function Nn(t,e=Wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&cp(-1);const i=ll(e);let o;try{o=t(...s)}finally{ll(i),r._d&&cp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function we(t,e){if(Wt===null)return t;const n=Xl(Wt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=je]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&Zn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function as(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(lr(),En(c,n,8,[t.el,l,t,e]),cr())}}const iw=Symbol("_vte"),Kv=t=>t.__isTeleport,kr=Symbol("_leaveCb"),ka=Symbol("_enterCb");function ow(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wi(()=>{t.isMounted=!0}),ny(()=>{t.isUnmounting=!0}),t}const en=[Function,Array],Yv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},Qv=t=>{const e=t.subTree;return e.component?Qv(e.component):e},aw={name:"BaseTransition",props:Yv,setup(t,{slots:e}){const n=Sy(),r=ow();return()=>{const s=e.default&&Zv(e.default(),!0);if(!s||!s.length)return;const i=Xv(s),o=Ve(t),{mode:l}=o;if(r.isLeaving)return Wc(i);const c=Zd(i);if(!c)return Wc(i);let u=ku(c,o,r,n,d=>u=d);c.type!==Lt&&Ro(c,u);let h=n.subTree&&Zd(n.subTree);if(h&&h.type!==Lt&&!ds(c,h)&&Qv(n).type!==Lt){let d=ku(h,o,r,n);if(Ro(h,d),l==="out-in"&&c.type!==Lt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Wc(i);l==="in-out"&&c.type!==Lt?d.delayLeave=(g,v,D)=>{const N=Jv(r,h);N[String(h.key)]=h,g[kr]=()=>{v(),g[kr]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{D(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function Xv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Lt){e=n;break}}return e}const lw=aw;function Jv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ku(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:g,onLeave:v,onAfterLeave:D,onLeaveCancelled:N,onBeforeAppear:_,onAppear:R,onAfterAppear:S,onAppearCancelled:O}=e,x=String(t.key),F=Jv(n,t),H=(w,P)=>{w&&En(w,r,9,P)},b=(w,P)=>{const k=P[1];H(w,P),he(w)?w.every(C=>C.length<=1)&&k():w.length<=1&&k()},E={mode:o,persisted:l,beforeEnter(w){let P=c;if(!n.isMounted)if(i)P=_||c;else return;w[kr]&&w[kr](!0);const k=F[x];k&&ds(t,k)&&k.el[kr]&&k.el[kr](),H(P,[w])},enter(w){let P=u,k=h,C=d;if(!n.isMounted)if(i)P=R||u,k=S||h,C=O||d;else return;let I=!1;const $e=w[ka]=ot=>{I||(I=!0,ot?H(C,[w]):H(k,[w]),E.delayedLeave&&E.delayedLeave(),w[ka]=void 0)};P?b(P,[w,$e]):$e()},leave(w,P){const k=String(t.key);if(w[ka]&&w[ka](!0),n.isUnmounting)return P();H(g,[w]);let C=!1;const I=w[kr]=$e=>{C||(C=!0,P(),$e?H(N,[w]):H(D,[w]),w[kr]=void 0,F[k]===t&&delete F[k])};F[k]=t,v?b(v,[w,I]):I()},clone(w){const P=ku(w,e,n,r,s);return s&&s(P),P}};return E}function Wc(t){if(Gl(t))return t=zr(t),t.children=null,t}function Zd(t){if(!Gl(t))return Kv(t.type)&&t.children?Xv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ye(n.default))return n.default()}}function Ro(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ro(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zv(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(Zv(o.children,e,l))):(e||o.type!==Lt)&&r.push(l!=null?zr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function jh(t,e){return ye(t)?ft({name:t.name},e,{setup:t}):t}function ey(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function so(t,e,n,r,s=!1){if(he(t)){t.forEach((D,N)=>so(D,e&&(he(e)?e[N]:e),n,r,s));return}if(io(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&so(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Xl(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,h=l.refs===je?l.refs={}:l.refs,d=l.setupState,g=Ve(d),v=d===je?()=>!1:D=>Le(g,D);if(u!=null&&u!==c&&(tt(u)?(h[u]=null,v(u)&&(d[u]=null)):kt(u)&&(u.value=null)),ye(c))Ko(c,l,12,[o,h]);else{const D=tt(c),N=kt(c);if(D||N){const _=()=>{if(t.f){const R=D?v(c)?d[c]:h[c]:c.value;s?he(R)&&Ph(R,i):he(R)?R.includes(i)||R.push(i):D?(h[c]=[i],v(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else D?(h[c]=o,v(c)&&(d[c]=o)):N&&(c.value=o,t.k&&(h[t.k]=o))};o?(_.id=-1,Ht(_,n)):_()}}}zl().requestIdleCallback;zl().cancelIdleCallback;const io=t=>!!t.type.__asyncLoader,Gl=t=>t.type.__isKeepAlive;function cw(t,e){ty(t,"a",e)}function uw(t,e){ty(t,"da",e)}function ty(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Kl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Gl(s.parent.vnode)&&hw(r,e,n,s),s=s.parent}}function hw(t,e,n,r){const s=Kl(e,t,r,!0);ry(()=>{Ph(r[e],s)},n)}function Kl(t,e,n=Pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{lr();const l=Yo(n),c=En(e,n,t,o);return l(),cr(),c});return r?s.unshift(i):s.push(i),i}}const gr=t=>(e,n=Pt)=>{(!ko||t==="sp")&&Kl(t,(...r)=>e(...r),n)},fw=gr("bm"),wi=gr("m"),dw=gr("bu"),pw=gr("u"),ny=gr("bum"),ry=gr("um"),mw=gr("sp"),gw=gr("rtg"),vw=gr("rtc");function yw(t,e=Pt){Kl("ec",t,e)}const sy="components";function wn(t,e){return oy(sy,t,!0,e)||t}const iy=Symbol.for("v-ndc");function _w(t){return tt(t)?oy(sy,t,!1)||t:t||iy}function oy(t,e,n=!0,r=!1){const s=Wt||Pt;if(s){const i=s.type;{const l=iT(i,!1);if(l&&(l===e||l===ln(e)||l===Bl(ln(e))))return i}const o=ep(s[t]||i[t],e)||ep(s.appContext[t],e);return!o&&r?i:o}}function ep(t,e){return t&&(t[e]||t[ln(e)]||t[Bl(ln(e))])}function sn(t,e,n,r){let s;const i=n,o=he(t);if(o||tt(t)){const l=o&&ei(t);let c=!1,u=!1;l&&(c=!on(t),u=Br(t),t=ql(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?u?il(yt(t[h])):yt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const h=l[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const Nu=t=>t?Ry(t)?Xl(t):Nu(t.parent):null,oo=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nu(t.parent),$root:t=>Nu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ly(t),$forceUpdate:t=>t.f||(t.f=()=>{Uh(t.update)}),$nextTick:t=>t.n||(t.n=$h.bind(t.proxy)),$watch:t=>Uw.bind(t)}),Gc=(t,e)=>t!==je&&!t.__isScriptSetup&&Le(t,e),bw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Gc(r,e))return o[e]=1,r[e];if(s!==je&&Le(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,i[e];if(n!==je&&Le(n,e))return o[e]=4,n[e];Du&&(o[e]=0)}}const h=oo[e];let d,g;if(h)return e==="$attrs"&&Rt(t.attrs,"get",""),h(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==je&&Le(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Le(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Gc(s,e)?(s[e]=n,!0):r!==je&&Le(r,e)?(r[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==je&&Le(t,o)||Gc(e,o)||(l=i[0])&&Le(l,o)||Le(r,o)||Le(oo,o)||Le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tp(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Du=!0;function Ew(t){const e=ly(t),n=t.proxy,r=t.ctx;Du=!1,e.beforeCreate&&np(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:v,updated:D,activated:N,deactivated:_,beforeDestroy:R,beforeUnmount:S,destroyed:O,unmounted:x,render:F,renderTracked:H,renderTriggered:b,errorCaptured:E,serverPrefetch:w,expose:P,inheritAttrs:k,components:C,directives:I,filters:$e}=e;if(u&&ww(u,r,null),o)for(const Ce in o){const Te=o[Ce];ye(Te)&&(r[Ce]=Te.bind(n))}if(s){const Ce=s.call(n,n);Be(Ce)&&(t.data=Hl(Ce))}if(Du=!0,i)for(const Ce in i){const Te=i[Ce],zt=ye(Te)?Te.bind(n,n):ye(Te.get)?Te.get.bind(n,n):xn,fn=!ye(Te)&&ye(Te.set)?Te.set.bind(n):xn,Xt=Oe({get:zt,set:fn});Object.defineProperty(r,Ce,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Ye=>Xt.value=Ye})}if(l)for(const Ce in l)ay(l[Ce],r,n,Ce);if(c){const Ce=ye(c)?c.call(n):c;Reflect.ownKeys(Ce).forEach(Te=>{ao(Te,Ce[Te])})}h&&np(h,t,"c");function Ke(Ce,Te){he(Te)?Te.forEach(zt=>Ce(zt.bind(n))):Te&&Ce(Te.bind(n))}if(Ke(fw,d),Ke(wi,g),Ke(dw,v),Ke(pw,D),Ke(cw,N),Ke(uw,_),Ke(yw,E),Ke(vw,H),Ke(gw,b),Ke(ny,S),Ke(ry,x),Ke(mw,w),he(P))if(P.length){const Ce=t.exposed||(t.exposed={});P.forEach(Te=>{Object.defineProperty(Ce,Te,{get:()=>n[Te],set:zt=>n[Te]=zt,enumerable:!0})})}else t.exposed||(t.exposed={});F&&t.render===xn&&(t.render=F),k!=null&&(t.inheritAttrs=k),C&&(t.components=C),I&&(t.directives=I),w&&ey(t)}function ww(t,e,n=xn){he(t)&&(t=xu(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=_n(s.from||r,s.default,!0):i=_n(s.from||r):i=_n(s),kt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function np(t,e,n){En(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ay(t,e,n,r){let s=r.includes(".")?Ey(n,r):()=>n[r];if(tt(t)){const i=e[t];ye(i)&&lo(s,i)}else if(ye(t))lo(s,t.bind(n));else if(Be(t))if(he(t))t.forEach(i=>ay(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&lo(s,i,t)}}function ly(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>cl(c,u,o,!0)),cl(c,e,o)),Be(e)&&i.set(e,c),c}function cl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cl(t,i,n,!0),s&&s.forEach(o=>cl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Tw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Tw={data:rp,props:sp,emits:sp,methods:Gi,computed:Gi,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:Gi,directives:Gi,watch:Aw,provide:rp,inject:Iw};function rp(t,e){return e?t?function(){return ft(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function Iw(t,e){return Gi(xu(t),xu(e))}function xu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function Gi(t,e){return t?ft(Object.create(null),t,e):e}function sp(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:ft(Object.create(null),tp(t),tp(e??{})):e}function Aw(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function cy(){return{app:null,config:{isNativeTag:mE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sw=0;function Rw(t,e){return function(r,s=null){ye(r)||(r=ft({},r)),s!=null&&!Be(s)&&(s=null);const i=cy(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:Sw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aT,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&ye(h.install)?(o.add(h),h.install(u,...d)):ye(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,g){if(!c){const v=u._ceVNode||G(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,h,g),c=!0,u._container=h,h.__vue_app__=u,Xl(v.component)}},onUnmount(h){l.push(h)},unmount(){c&&(En(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=ni;ni=u;try{return h()}finally{ni=d}}};return u}}let ni=null;function ao(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function _n(t,e,n=!1){const r=Sy();if(r||ni){let s=ni?ni._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}const uy={},hy=()=>Object.create(uy),fy=t=>Object.getPrototypeOf(t)===uy;function Cw(t,e,n,r=!1){const s={},i=hy();t.propsDefaults=Object.create(null),dy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$v(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Pw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ve(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(Yl(t.emitsOptions,g))continue;const v=e[g];if(c)if(Le(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const D=ln(g);s[D]=Ou(c,l,D,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{dy(t,e,s,i)&&(u=!0);let h;for(const d in l)(!e||!Le(e,d)&&((h=ks(d))===d||!Le(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Ou(c,l,d,void 0,t,!0)):delete s[d]);if(i!==l)for(const d in i)(!e||!Le(e,d))&&(delete i[d],u=!0)}u&&Jn(t.attrs,"set","")}function dy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(to(c))continue;const u=e[c];let h;s&&Le(s,h=ln(c))?!i||!i.includes(h)?n[h]=u:(l||(l={}))[h]=u:Yl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ve(n),u=l||je;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Ou(s,c,d,u[d],t,!Le(u,d))}}return o}function Ou(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Le(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Yo(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ks(n))&&(r=!0))}return r}const kw=new WeakMap;function py(t,e,n=!1){const r=n?kw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ye(t)){const h=d=>{c=!0;const[g,v]=py(d,e,!0);ft(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Be(t)&&r.set(t,Js),Js;if(he(i))for(let h=0;h<i.length;h++){const d=ln(i[h]);ip(d)&&(o[d]=je)}else if(i)for(const h in i){const d=ln(h);if(ip(d)){const g=i[h],v=o[d]=he(g)||ye(g)?{type:g}:ft({},g),D=v.type;let N=!1,_=!0;if(he(D))for(let R=0;R<D.length;++R){const S=D[R],O=ye(S)&&S.name;if(O==="Boolean"){N=!0;break}else O==="String"&&(_=!1)}else N=ye(D)&&D.name==="Boolean";v[0]=N,v[1]=_,(N||Le(v,"default"))&&l.push(d)}}const u=[o,l];return Be(t)&&r.set(t,u),u}function ip(t){return t[0]!=="$"&&!to(t)}const Bh=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",zh=t=>he(t)?t.map(Pn):[Pn(t)],Nw=(t,e,n)=>{if(e._n)return e;const r=Nn((...s)=>zh(e(...s)),n);return r._c=!1,r},my=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Bh(s))continue;const i=t[s];if(ye(i))e[s]=Nw(s,i,r);else if(i!=null){const o=zh(i);e[s]=()=>o}}},gy=(t,e)=>{const n=zh(e);t.slots.default=()=>n},vy=(t,e,n)=>{for(const r in e)(n||!Bh(r))&&(t[r]=e[r])},Dw=(t,e,n)=>{const r=t.slots=hy();if(t.vnode.shapeFlag&32){const s=e.__;s&&Au(r,"__",s,!0);const i=e._;i?(vy(r,e,n),n&&Au(r,"_",i,!0)):my(e,r)}else e&&gy(t,e)},xw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=je;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:vy(s,e,n):(i=!e.$stable,my(e,s)),o=e}else e&&(gy(t,e),o={default:1});if(i)for(const l in s)!Bh(l)&&o[l]==null&&delete s[l]},Ht=Gw;function Ow(t){return Vw(t)}function Vw(t,e){const n=zl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:v=xn,insertStaticContent:D}=t,N=(T,A,V,U=null,z=null,j=null,te=void 0,X=null,Y=!!A.dynamicChildren)=>{if(T===A)return;T&&!ds(T,A)&&(U=$(T),Ye(T,z,j,!0),T=null),A.patchFlag===-2&&(Y=!1,A.dynamicChildren=null);const{type:W,ref:ce,shapeFlag:ee}=A;switch(W){case Ql:_(T,A,V,U);break;case Lt:R(T,A,V,U);break;case Ba:T==null&&S(A,V,U,te);break;case He:C(T,A,V,U,z,j,te,X,Y);break;default:ee&1?F(T,A,V,U,z,j,te,X,Y):ee&6?I(T,A,V,U,z,j,te,X,Y):(ee&64||ee&128)&&W.process(T,A,V,U,z,j,te,X,Y,oe)}ce!=null&&z?so(ce,T&&T.ref,j,A||T,!A):ce==null&&T&&T.ref!=null&&so(T.ref,null,j,T,!0)},_=(T,A,V,U)=>{if(T==null)r(A.el=l(A.children),V,U);else{const z=A.el=T.el;A.children!==T.children&&u(z,A.children)}},R=(T,A,V,U)=>{T==null?r(A.el=c(A.children||""),V,U):A.el=T.el},S=(T,A,V,U)=>{[T.el,T.anchor]=D(T.children,A,V,U,T.el,T.anchor)},O=({el:T,anchor:A},V,U)=>{let z;for(;T&&T!==A;)z=g(T),r(T,V,U),T=z;r(A,V,U)},x=({el:T,anchor:A})=>{let V;for(;T&&T!==A;)V=g(T),s(T),T=V;s(A)},F=(T,A,V,U,z,j,te,X,Y)=>{A.type==="svg"?te="svg":A.type==="math"&&(te="mathml"),T==null?H(A,V,U,z,j,te,X,Y):w(T,A,z,j,te,X,Y)},H=(T,A,V,U,z,j,te,X)=>{let Y,W;const{props:ce,shapeFlag:ee,transition:ae,dirs:ge}=T;if(Y=T.el=o(T.type,j,ce&&ce.is,ce),ee&8?h(Y,T.children):ee&16&&E(T.children,Y,null,U,z,Kc(T,j),te,X),ge&&as(T,null,U,"created"),b(Y,T,T.scopeId,te,U),ce){for(const be in ce)be!=="value"&&!to(be)&&i(Y,be,null,ce[be],j,U);"value"in ce&&i(Y,"value",null,ce.value,j),(W=ce.onVnodeBeforeMount)&&Sn(W,U,T)}ge&&as(T,null,U,"beforeMount");const de=Mw(z,ae);de&&ae.beforeEnter(Y),r(Y,A,V),((W=ce&&ce.onVnodeMounted)||de||ge)&&Ht(()=>{W&&Sn(W,U,T),de&&ae.enter(Y),ge&&as(T,null,U,"mounted")},z)},b=(T,A,V,U,z)=>{if(V&&v(T,V),U)for(let j=0;j<U.length;j++)v(T,U[j]);if(z){let j=z.subTree;if(A===j||Ty(j.type)&&(j.ssContent===A||j.ssFallback===A)){const te=z.vnode;b(T,te,te.scopeId,te.slotScopeIds,z.parent)}}},E=(T,A,V,U,z,j,te,X,Y=0)=>{for(let W=Y;W<T.length;W++){const ce=T[W]=X?Nr(T[W]):Pn(T[W]);N(null,ce,A,V,U,z,j,te,X)}},w=(T,A,V,U,z,j,te)=>{const X=A.el=T.el;let{patchFlag:Y,dynamicChildren:W,dirs:ce}=A;Y|=T.patchFlag&16;const ee=T.props||je,ae=A.props||je;let ge;if(V&&ls(V,!1),(ge=ae.onVnodeBeforeUpdate)&&Sn(ge,V,A,T),ce&&as(A,T,V,"beforeUpdate"),V&&ls(V,!0),(ee.innerHTML&&ae.innerHTML==null||ee.textContent&&ae.textContent==null)&&h(X,""),W?P(T.dynamicChildren,W,X,V,U,Kc(A,z),j):te||Te(T,A,X,null,V,U,Kc(A,z),j,!1),Y>0){if(Y&16)k(X,ee,ae,V,z);else if(Y&2&&ee.class!==ae.class&&i(X,"class",null,ae.class,z),Y&4&&i(X,"style",ee.style,ae.style,z),Y&8){const de=A.dynamicProps;for(let be=0;be<de.length;be++){const Pe=de[be],dt=ee[Pe],pt=ae[Pe];(pt!==dt||Pe==="value")&&i(X,Pe,dt,pt,z,V)}}Y&1&&T.children!==A.children&&h(X,A.children)}else!te&&W==null&&k(X,ee,ae,V,z);((ge=ae.onVnodeUpdated)||ce)&&Ht(()=>{ge&&Sn(ge,V,A,T),ce&&as(A,T,V,"updated")},U)},P=(T,A,V,U,z,j,te)=>{for(let X=0;X<A.length;X++){const Y=T[X],W=A[X],ce=Y.el&&(Y.type===He||!ds(Y,W)||Y.shapeFlag&198)?d(Y.el):V;N(Y,W,ce,null,U,z,j,te,!0)}},k=(T,A,V,U,z)=>{if(A!==V){if(A!==je)for(const j in A)!to(j)&&!(j in V)&&i(T,j,A[j],null,z,U);for(const j in V){if(to(j))continue;const te=V[j],X=A[j];te!==X&&j!=="value"&&i(T,j,X,te,z,U)}"value"in V&&i(T,"value",A.value,V.value,z)}},C=(T,A,V,U,z,j,te,X,Y)=>{const W=A.el=T?T.el:l(""),ce=A.anchor=T?T.anchor:l("");let{patchFlag:ee,dynamicChildren:ae,slotScopeIds:ge}=A;ge&&(X=X?X.concat(ge):ge),T==null?(r(W,V,U),r(ce,V,U),E(A.children||[],V,ce,z,j,te,X,Y)):ee>0&&ee&64&&ae&&T.dynamicChildren?(P(T.dynamicChildren,ae,V,z,j,te,X),(A.key!=null||z&&A===z.subTree)&&yy(T,A,!0)):Te(T,A,V,ce,z,j,te,X,Y)},I=(T,A,V,U,z,j,te,X,Y)=>{A.slotScopeIds=X,T==null?A.shapeFlag&512?z.ctx.activate(A,V,U,te,Y):$e(A,V,U,z,j,te,Y):ot(T,A,Y)},$e=(T,A,V,U,z,j,te)=>{const X=T.component=eT(T,U,z);if(Gl(T)&&(X.ctx.renderer=oe),tT(X,!1,te),X.asyncDep){if(z&&z.registerDep(X,Ke,te),!T.el){const Y=X.subTree=G(Lt);R(null,Y,A,V),T.placeholder=Y.el}}else Ke(X,T,A,V,z,j,te)},ot=(T,A,V)=>{const U=A.component=T.component;if(Hw(T,A,V))if(U.asyncDep&&!U.asyncResolved){Ce(U,A,V);return}else U.next=A,U.update();else A.el=T.el,U.vnode=A},Ke=(T,A,V,U,z,j,te)=>{const X=()=>{if(T.isMounted){let{next:ee,bu:ae,u:ge,parent:de,vnode:be}=T;{const Et=_y(T);if(Et){ee&&(ee.el=be.el,Ce(T,ee,te)),Et.asyncDep.then(()=>{T.isUnmounted||X()});return}}let Pe=ee,dt;ls(T,!1),ee?(ee.el=be.el,Ce(T,ee,te)):ee=be,ae&&ja(ae),(dt=ee.props&&ee.props.onVnodeBeforeUpdate)&&Sn(dt,de,ee,be),ls(T,!0);const pt=ap(T),Jt=T.subTree;T.subTree=pt,N(Jt,pt,d(Jt.el),$(Jt),T,z,j),ee.el=pt.el,Pe===null&&Ww(T,pt.el),ge&&Ht(ge,z),(dt=ee.props&&ee.props.onVnodeUpdated)&&Ht(()=>Sn(dt,de,ee,be),z)}else{let ee;const{el:ae,props:ge}=A,{bm:de,m:be,parent:Pe,root:dt,type:pt}=T,Jt=io(A);ls(T,!1),de&&ja(de),!Jt&&(ee=ge&&ge.onVnodeBeforeMount)&&Sn(ee,Pe,A),ls(T,!0);{dt.ce&&dt.ce._def.shadowRoot!==!1&&dt.ce._injectChildStyle(pt);const Et=T.subTree=ap(T);N(null,Et,V,U,T,z,j),A.el=Et.el}if(be&&Ht(be,z),!Jt&&(ee=ge&&ge.onVnodeMounted)){const Et=A;Ht(()=>Sn(ee,Pe,Et),z)}(A.shapeFlag&256||Pe&&io(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&T.a&&Ht(T.a,z),T.isMounted=!0,A=V=U=null}};T.scope.on();const Y=T.effect=new Av(X);T.scope.off();const W=T.update=Y.run.bind(Y),ce=T.job=Y.runIfDirty.bind(Y);ce.i=T,ce.id=T.uid,Y.scheduler=()=>Uh(ce),ls(T,!0),W()},Ce=(T,A,V)=>{A.component=T;const U=T.vnode.props;T.vnode=A,T.next=null,Pw(T,A.props,U,V),xw(T,A.children,V),lr(),Jd(T),cr()},Te=(T,A,V,U,z,j,te,X,Y=!1)=>{const W=T&&T.children,ce=T?T.shapeFlag:0,ee=A.children,{patchFlag:ae,shapeFlag:ge}=A;if(ae>0){if(ae&128){fn(W,ee,V,U,z,j,te,X,Y);return}else if(ae&256){zt(W,ee,V,U,z,j,te,X,Y);return}}ge&8?(ce&16&&$t(W,z,j),ee!==W&&h(V,ee)):ce&16?ge&16?fn(W,ee,V,U,z,j,te,X,Y):$t(W,z,j,!0):(ce&8&&h(V,""),ge&16&&E(ee,V,U,z,j,te,X,Y))},zt=(T,A,V,U,z,j,te,X,Y)=>{T=T||Js,A=A||Js;const W=T.length,ce=A.length,ee=Math.min(W,ce);let ae;for(ae=0;ae<ee;ae++){const ge=A[ae]=Y?Nr(A[ae]):Pn(A[ae]);N(T[ae],ge,V,null,z,j,te,X,Y)}W>ce?$t(T,z,j,!0,!1,ee):E(A,V,U,z,j,te,X,Y,ee)},fn=(T,A,V,U,z,j,te,X,Y)=>{let W=0;const ce=A.length;let ee=T.length-1,ae=ce-1;for(;W<=ee&&W<=ae;){const ge=T[W],de=A[W]=Y?Nr(A[W]):Pn(A[W]);if(ds(ge,de))N(ge,de,V,null,z,j,te,X,Y);else break;W++}for(;W<=ee&&W<=ae;){const ge=T[ee],de=A[ae]=Y?Nr(A[ae]):Pn(A[ae]);if(ds(ge,de))N(ge,de,V,null,z,j,te,X,Y);else break;ee--,ae--}if(W>ee){if(W<=ae){const ge=ae+1,de=ge<ce?A[ge].el:U;for(;W<=ae;)N(null,A[W]=Y?Nr(A[W]):Pn(A[W]),V,de,z,j,te,X,Y),W++}}else if(W>ae)for(;W<=ee;)Ye(T[W],z,j,!0),W++;else{const ge=W,de=W,be=new Map;for(W=de;W<=ae;W++){const mt=A[W]=Y?Nr(A[W]):Pn(A[W]);mt.key!=null&&be.set(mt.key,W)}let Pe,dt=0;const pt=ae-de+1;let Jt=!1,Et=0;const wr=new Array(pt);for(W=0;W<pt;W++)wr[W]=0;for(W=ge;W<=ee;W++){const mt=T[W];if(dt>=pt){Ye(mt,z,j,!0);continue}let Zt;if(mt.key!=null)Zt=be.get(mt.key);else for(Pe=de;Pe<=ae;Pe++)if(wr[Pe-de]===0&&ds(mt,A[Pe])){Zt=Pe;break}Zt===void 0?Ye(mt,z,j,!0):(wr[Zt-de]=W+1,Zt>=Et?Et=Zt:Jt=!0,N(mt,A[Zt],V,null,z,j,te,X,Y),dt++)}const Pi=Jt?Lw(wr):Js;for(Pe=Pi.length-1,W=pt-1;W>=0;W--){const mt=de+W,Zt=A[mt],ha=A[mt+1],Ls=mt+1<ce?ha.el||ha.placeholder:U;wr[W]===0?N(null,Zt,V,Ls,z,j,te,X,Y):Jt&&(Pe<0||W!==Pi[Pe]?Xt(Zt,V,Ls,2):Pe--)}}},Xt=(T,A,V,U,z=null)=>{const{el:j,type:te,transition:X,children:Y,shapeFlag:W}=T;if(W&6){Xt(T.component.subTree,A,V,U);return}if(W&128){T.suspense.move(A,V,U);return}if(W&64){te.move(T,A,V,oe);return}if(te===He){r(j,A,V);for(let ee=0;ee<Y.length;ee++)Xt(Y[ee],A,V,U);r(T.anchor,A,V);return}if(te===Ba){O(T,A,V);return}if(U!==2&&W&1&&X)if(U===0)X.beforeEnter(j),r(j,A,V),Ht(()=>X.enter(j),z);else{const{leave:ee,delayLeave:ae,afterLeave:ge}=X,de=()=>{T.ctx.isUnmounted?s(j):r(j,A,V)},be=()=>{ee(j,()=>{de(),ge&&ge()})};ae?ae(j,de,be):be()}else r(j,A,V)},Ye=(T,A,V,U=!1,z=!1)=>{const{type:j,props:te,ref:X,children:Y,dynamicChildren:W,shapeFlag:ce,patchFlag:ee,dirs:ae,cacheIndex:ge}=T;if(ee===-2&&(z=!1),X!=null&&(lr(),so(X,null,V,T,!0),cr()),ge!=null&&(A.renderCache[ge]=void 0),ce&256){A.ctx.deactivate(T);return}const de=ce&1&&ae,be=!io(T);let Pe;if(be&&(Pe=te&&te.onVnodeBeforeUnmount)&&Sn(Pe,A,T),ce&6)An(T.component,V,U);else{if(ce&128){T.suspense.unmount(V,U);return}de&&as(T,null,A,"beforeUnmount"),ce&64?T.type.remove(T,A,V,oe,U):W&&!W.hasOnce&&(j!==He||ee>0&&ee&64)?$t(W,A,V,!1,!0):(j===He&&ee&384||!z&&ce&16)&&$t(Y,A,V),U&&Qe(T)}(be&&(Pe=te&&te.onVnodeUnmounted)||de)&&Ht(()=>{Pe&&Sn(Pe,A,T),de&&as(T,null,A,"unmounted")},V)},Qe=T=>{const{type:A,el:V,anchor:U,transition:z}=T;if(A===He){Er(V,U);return}if(A===Ba){x(T);return}const j=()=>{s(V),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(T.shapeFlag&1&&z&&!z.persisted){const{leave:te,delayLeave:X}=z,Y=()=>te(V,j);X?X(T.el,j,Y):Y()}else j()},Er=(T,A)=>{let V;for(;T!==A;)V=g(T),s(T),T=V;s(A)},An=(T,A,V)=>{const{bum:U,scope:z,job:j,subTree:te,um:X,m:Y,a:W,parent:ce,slots:{__:ee}}=T;op(Y),op(W),U&&ja(U),ce&&he(ee)&&ee.forEach(ae=>{ce.renderCache[ae]=void 0}),z.stop(),j&&(j.flags|=8,Ye(te,T,A,V)),X&&Ht(X,A),Ht(()=>{T.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},$t=(T,A,V,U=!1,z=!1,j=0)=>{for(let te=j;te<T.length;te++)Ye(T[te],A,V,U,z)},$=T=>{if(T.shapeFlag&6)return $(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const A=g(T.anchor||T.el),V=A&&A[iw];return V?g(V):A};let re=!1;const ne=(T,A,V)=>{T==null?A._vnode&&Ye(A._vnode,null,null,!0):N(A._vnode||null,T,A,null,null,null,V),A._vnode=T,re||(re=!0,Jd(),Hv(),re=!1)},oe={p:N,um:Ye,m:Xt,r:Qe,mt:$e,mc:E,pc:Te,pbc:P,n:$,o:t};return{render:ne,hydrate:void 0,createApp:Rw(ne)}}function Kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ls({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yy(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Nr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&yy(o,l)),l.type===Ql&&(l.el=o.el),l.type===Lt&&!l.el&&(l.el=o.el)}}function Lw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _y(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_y(e)}function op(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Fw=Symbol.for("v-scx"),$w=()=>_n(Fw);function lo(t,e,n){return by(t,e,n)}function by(t,e,n=je){const{immediate:r,deep:s,flush:i,once:o}=n,l=ft({},n),c=e&&r||!e&&i!=="post";let u;if(ko){if(i==="sync"){const v=$w();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=xn,v.resume=xn,v.pause=xn,v}}const h=Pt;l.call=(v,D,N)=>En(v,h,D,N);let d=!1;i==="post"?l.scheduler=v=>{Ht(v,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(v,D)=>{D?v():Uh(v)}),l.augmentJob=v=>{e&&(v.flags|=4),d&&(v.flags|=2,h&&(v.id=h.uid,v.i=h))};const g=tw(t,e,l);return ko&&(u?u.push(g):c&&g()),g}function Uw(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?Ey(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const o=Yo(this),l=by(s,i.bind(r),n);return o(),l}function Ey(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const jw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${ks(e)}Modifiers`];function Bw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||je;let s=n;const i=e.startsWith("update:"),o=i&&jw(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>tt(h)?h.trim():h)),o.number&&(s=n.map(sl)));let l,c=r[l=jc(e)]||r[l=jc(ln(e))];!c&&i&&(c=r[l=jc(ks(e))]),c&&En(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,En(u,t,6,s)}}function wy(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ye(t)){const c=u=>{const h=wy(u,e,!0);h&&(l=!0,ft(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):ft(o,i),Be(t)&&r.set(t,o),o)}function Yl(t,e){return!t||!Ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,ks(e))||Le(t,e))}function ap(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:h,props:d,data:g,setupState:v,ctx:D,inheritAttrs:N}=t,_=ll(t);let R,S;try{if(n.shapeFlag&4){const x=s||r,F=x;R=Pn(u.call(F,x,h,d,v,g,D)),S=l}else{const x=e;R=Pn(x.length>1?x(d,{attrs:l,slots:o,emit:c}):x(d,null)),S=e.props?l:zw(l)}}catch(x){co.length=0,Wl(x,t,1),R=G(Lt)}let O=R;if(S&&N!==!1){const x=Object.keys(S),{shapeFlag:F}=O;x.length&&F&7&&(i&&x.some(Ch)&&(S=qw(S,i)),O=zr(O,S,!1,!0))}return n.dirs&&(O=zr(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Ro(O,n.transition),R=O,ll(_),R}const zw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ul(n))&&((e||(e={}))[n]=t[n]);return e},qw=(t,e)=>{const n={};for(const r in t)(!Ch(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lp(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(o[g]!==r[g]&&!Yl(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?lp(r,o,u):!0:!!o;return!1}function lp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yl(n,i))return!0}return!1}function Ww({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ty=t=>t.__isSuspense;function Gw(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):sw(t)}const He=Symbol.for("v-fgt"),Ql=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),co=[];let Gt=null;function Q(t=!1){co.push(Gt=t?null:[])}function Kw(){co.pop(),Gt=co[co.length-1]||null}let Co=1;function cp(t,e=!1){Co+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function Iy(t){return t.dynamicChildren=Co>0?Gt||Js:null,Kw(),Co>0&&Gt&&Gt.push(t),t}function Z(t,e,n,r,s,i){return Iy(p(t,e,n,r,s,i,!0))}function Po(t,e,n,r,s){return Iy(G(t,e,n,r,s,!0))}function ul(t){return t?t.__v_isVNode===!0:!1}function ds(t,e){return t.type===e.type&&t.key===e.key}const Ay=({key:t})=>t??null,za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||kt(t)||ye(t)?{i:Wt,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ay(e),ref:e&&za(e),scopeId:Gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wt};return l?(qh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),Co>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const G=Yw;function Yw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iy)&&(t=Lt),ul(t)){const l=zr(t,e,!0);return n&&qh(l,n),Co>0&&!i&&Gt&&(l.shapeFlag&6?Gt[Gt.indexOf(t)]=l:Gt.push(l)),l.patchFlag=-2,l}if(oT(t)&&(t=t.__vccOpts),e){e=Qw(e);let{class:l,style:c}=e;l&&!tt(l)&&(e.class=rn(l)),Be(c)&&(Fh(c)&&!he(c)&&(c=ft({},c)),e.style=Go(c))}const o=tt(t)?1:Ty(t)?128:Kv(t)?64:Be(t)?4:ye(t)?2:0;return p(t,e,n,r,s,o,i,!0)}function Qw(t){return t?Fh(t)||fy(t)?ft({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Xw(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ay(u),ref:e&&e.ref?n&&i?he(i)?i.concat(za(e)):[i,za(e)]:za(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ro(h,c.clone(h)),h}function Ee(t=" ",e=0){return G(Ql,null,t,e)}function ri(t,e){const n=G(Ba,null,t);return n.staticCount=e,n}function Xe(t="",e=!1){return e?(Q(),Po(Lt,null,t)):G(Lt,null,t)}function Pn(t){return t==null||typeof t=="boolean"?G(Lt):he(t)?G(He,null,t.slice()):ul(t)?Nr(t):G(Ql,null,String(t))}function Nr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function qh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!fy(e)?e._ctx=Wt:s===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),r&64?(n=16,e=[Ee(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=rn([e.class,r.class]));else if(s==="style")e.style=Go([e.style,r.style]);else if(Ul(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Sn(t,e,n,r=null){En(t,e,7,[n,r])}const Jw=cy();let Zw=0;function eT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Jw,i={uid:Zw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new CE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:py(r,s),emitsOptions:wy(r,s),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Bw.bind(null,i),t.ce&&t.ce(i),i}let Pt=null;const Sy=()=>Pt||Wt;let hl,Vu;{const t=zl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};hl=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),Vu=e("__VUE_SSR_SETTERS__",n=>ko=n)}const Yo=t=>{const e=Pt;return hl(t),t.scope.on(),()=>{t.scope.off(),hl(e)}},up=()=>{Pt&&Pt.scope.off(),hl(null)};function Ry(t){return t.vnode.shapeFlag&4}let ko=!1;function tT(t,e=!1,n=!1){e&&Vu(e);const{props:r,children:s}=t.vnode,i=Ry(t);Cw(t,r,i,e),Dw(t,s,n||e);const o=i?nT(t,e):void 0;return e&&Vu(!1),o}function nT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bw);const{setup:r}=n;if(r){lr();const s=t.setupContext=r.length>1?sT(t):null,i=Yo(t),o=Ko(r,t,0,[t.props,s]),l=_v(o);if(cr(),i(),(l||t.sp)&&!io(t)&&ey(t),l){if(o.then(up,up),e)return o.then(c=>{hp(t,c)}).catch(c=>{Wl(c,t,0)});t.asyncDep=o}else hp(t,o)}else Cy(t)}function hp(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=Bv(e)),Cy(t)}function Cy(t,e,n){const r=t.type;t.render||(t.render=r.render||xn);{const s=Yo(t);lr();try{Ew(t)}finally{cr(),s()}}}const rT={get(t,e){return Rt(t,"get",""),t[e]}};function sT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rT),slots:t.slots,emit:t.emit,expose:e}}function Xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bv(KE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)},has(e,n){return n in e||n in oo}})):t.proxy}function iT(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function oT(t){return ye(t)&&"__vccOpts"in t}const Oe=(t,e)=>ZE(t,e,ko);function Jl(t,e,n){const r=arguments.length;return r===2?Be(e)&&!he(e)?ul(e)?G(t,null,[e]):G(t,e):G(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ul(n)&&(n=[n]),G(t,e,n))}const aT="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mu;const fp=typeof window<"u"&&window.trustedTypes;if(fp)try{Mu=fp.createPolicy("vue",{createHTML:t=>t})}catch{}const Py=Mu?t=>Mu.createHTML(t):t=>t,lT="http://www.w3.org/2000/svg",cT="http://www.w3.org/1998/Math/MathML",Xn=typeof document<"u"?document:null,dp=Xn&&Xn.createElement("template"),uT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xn.createElementNS(lT,t):e==="mathml"?Xn.createElementNS(cT,t):n?Xn.createElement(t,{is:n}):Xn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dp.innerHTML=Py(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=dp.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Sr="transition",zi="animation",No=Symbol("_vtc"),ky={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hT=ft({},Yv,ky),fT=t=>(t.displayName="Transition",t.props=hT,t),Hh=fT((t,{slots:e})=>Jl(lw,dT(t),e)),cs=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},pp=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function dT(t){const e={};for(const C in t)C in ky||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,D=pT(s),N=D&&D[0],_=D&&D[1],{onBeforeEnter:R,onEnter:S,onEnterCancelled:O,onLeave:x,onLeaveCancelled:F,onBeforeAppear:H=R,onAppear:b=S,onAppearCancelled:E=O}=e,w=(C,I,$e,ot)=>{C._enterCancelled=ot,us(C,I?h:l),us(C,I?u:o),$e&&$e()},P=(C,I)=>{C._isLeaving=!1,us(C,d),us(C,v),us(C,g),I&&I()},k=C=>(I,$e)=>{const ot=C?b:S,Ke=()=>w(I,C,$e);cs(ot,[I,Ke]),mp(()=>{us(I,C?c:i),Yn(I,C?h:l),pp(ot)||gp(I,r,N,Ke)})};return ft(e,{onBeforeEnter(C){cs(R,[C]),Yn(C,i),Yn(C,o)},onBeforeAppear(C){cs(H,[C]),Yn(C,c),Yn(C,u)},onEnter:k(!1),onAppear:k(!0),onLeave(C,I){C._isLeaving=!0;const $e=()=>P(C,I);Yn(C,d),C._enterCancelled?(Yn(C,g),_p()):(_p(),Yn(C,g)),mp(()=>{C._isLeaving&&(us(C,d),Yn(C,v),pp(x)||gp(C,r,_,$e))}),cs(x,[C,$e])},onEnterCancelled(C){w(C,!1,void 0,!0),cs(O,[C])},onAppearCancelled(C){w(C,!0,void 0,!0),cs(E,[C])},onLeaveCancelled(C){P(C),cs(F,[C])}})}function pT(t){if(t==null)return null;if(Be(t))return[Yc(t.enter),Yc(t.leave)];{const e=Yc(t);return[e,e]}}function Yc(t){return bE(t)}function Yn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[No]||(t[No]=new Set)).add(e)}function us(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[No];n&&(n.delete(e),n.size||(t[No]=void 0))}function mp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mT=0;function gp(t,e,n,r){const s=t._endId=++mT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=gT(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,g),i()},g=v=>{v.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},l+1),t.addEventListener(u,g)}function gT(t,e){const n=window.getComputedStyle(t),r=D=>(n[D]||"").split(", "),s=r(`${Sr}Delay`),i=r(`${Sr}Duration`),o=vp(s,i),l=r(`${zi}Delay`),c=r(`${zi}Duration`),u=vp(l,c);let h=null,d=0,g=0;e===Sr?o>0&&(h=Sr,d=o,g=i.length):e===zi?u>0&&(h=zi,d=u,g=c.length):(d=Math.max(o,u),h=d>0?o>u?Sr:zi:null,g=h?h===Sr?i.length:c.length:0);const v=h===Sr&&/\b(transform|all)(,|$)/.test(r(`${Sr}Property`).toString());return{type:h,timeout:d,propCount:g,hasTransform:v}}function vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yp(n)+yp(t[r])))}function yp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _p(){return document.body.offsetHeight}function vT(t,e,n){const r=t[No];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bp=Symbol("_vod"),yT=Symbol("_vsh"),_T=Symbol(""),bT=/(^|;)\s*display\s*:/;function ET(t,e,n){const r=t.style,s=tt(n);let i=!1;if(n&&!s){if(e)if(tt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&qa(r,l,"")}else for(const o in e)n[o]==null&&qa(r,o,"");for(const o in n)o==="display"&&(i=!0),qa(r,o,n[o])}else if(s){if(e!==n){const o=r[_T];o&&(n+=";"+o),r.cssText=n,i=bT.test(n)}}else e&&t.removeAttribute("style");bp in t&&(t[bp]=i?r.display:"",t[yT]&&(r.display="none"))}const Ep=/\s*!important$/;function qa(t,e,n){if(he(n))n.forEach(r=>qa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wT(t,e);Ep.test(n)?t.setProperty(ks(r),n.replace(Ep,""),"important"):t[r]=n}}const wp=["Webkit","Moz","ms"],Qc={};function wT(t,e){const n=Qc[e];if(n)return n;let r=ln(e);if(r!=="filter"&&r in t)return Qc[e]=r;r=Bl(r);for(let s=0;s<wp.length;s++){const i=wp[s]+r;if(i in t)return Qc[e]=i}return e}const Tp="http://www.w3.org/1999/xlink";function Ip(t,e,n,r,s,i=SE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tp,e.slice(6,e.length)):t.setAttributeNS(Tp,e,n):n==null||i&&!wv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":$n(n)?String(n):n)}function Ap(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Py(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wv(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function er(t,e,n,r){t.addEventListener(e,n,r)}function TT(t,e,n,r){t.removeEventListener(e,n,r)}const Sp=Symbol("_vei");function IT(t,e,n,r,s=null){const i=t[Sp]||(t[Sp]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=AT(e);if(r){const u=i[e]=CT(r,s);er(t,l,u,c)}else o&&(TT(t,l,o,c),i[e]=void 0)}}const Rp=/(?:Once|Passive|Capture)$/;function AT(t){let e;if(Rp.test(t)){e={};let r;for(;r=t.match(Rp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ks(t.slice(2)),e]}let Xc=0;const ST=Promise.resolve(),RT=()=>Xc||(ST.then(()=>Xc=0),Xc=Date.now());function CT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(PT(r,n.value),e,5,[r])};return n.value=t,n.attached=RT(),n}function PT(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Cp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?vT(t,r,o):e==="style"?ET(t,n,r):Ul(e)?Ch(e)||IT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NT(t,e,r,o))?(Ap(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ip(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(r))?Ap(t,ln(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ip(t,e,r,o))};function NT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cp(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cp(e)&&tt(n)?!1:e in t}const qr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>ja(e,n):e};function DT(t){t.target.composing=!0}function Pp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const an=Symbol("_assign"),nt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[an]=qr(s);const i=r||s.props&&s.props.type==="number";er(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=sl(l)),t[an](l)}),n&&er(t,"change",()=>{t.value=t.value.trim()}),e||(er(t,"compositionstart",DT),er(t,"compositionend",Pp),er(t,"change",Pp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[an]=qr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?sl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Hs={deep:!0,created(t,e,n){t[an]=qr(n),er(t,"change",()=>{const r=t._modelValue,s=ui(t),i=t.checked,o=t[an];if(he(r)){const l=Nh(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ei(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Ny(t,i))})},mounted:kp,beforeUpdate(t,e,n){t[an]=qr(n),kp(t,e,n)}};function kp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(he(e))s=Nh(e,r.props.value)>-1;else if(Ei(e))s=e.has(r.props.value);else{if(e===n)return;s=Es(e,Ny(t,!0))}t.checked!==s&&(t.checked=s)}const Np={created(t,{value:e},n){t.checked=Es(e,n.props.value),t[an]=qr(n),er(t,"change",()=>{t[an](ui(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[an]=qr(r),e!==n&&(t.checked=Es(e,r.props.value))}},tr={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ei(e);er(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sl(ui(o)):ui(o));t[an](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,$h(()=>{t._assigning=!1})}),t[an]=qr(r)},mounted(t,{value:e}){Dp(t,e)},beforeUpdate(t,e,n){t[an]=qr(n)},updated(t,{value:e}){t._assigning||Dp(t,e)}};function Dp(t,e){const n=t.multiple,r=he(e);if(!(n&&!r&&!Ei(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ui(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Nh(e,l)>-1}else o.selected=e.has(l);else if(Es(ui(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ui(t){return"_value"in t?t._value:t.value}function Ny(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const xT=["ctrl","shift","alt","meta"],OT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xT.some(n=>t[`${n}Key`]&&!e.includes(n))},uo=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=OT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},VT=ft({patchProp:kT},uT);let xp;function MT(){return xp||(xp=Ow(VT))}const LT=(...t)=>{const e=MT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$T(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,FT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function FT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $T(t){return tt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Ws=typeof document<"u";function Dy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function UT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Dy(t.default)}const Me=Object.assign;function Jc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Tn(s)?s.map(t):t(s)}return n}const ho=()=>{},Tn=Array.isArray,xy=/#/g,jT=/&/g,BT=/\//g,zT=/=/g,qT=/\?/g,Oy=/\+/g,HT=/%5B/g,WT=/%5D/g,Vy=/%5E/g,GT=/%60/g,My=/%7B/g,KT=/%7C/g,Ly=/%7D/g,YT=/%20/g;function Wh(t){return encodeURI(""+t).replace(KT,"|").replace(HT,"[").replace(WT,"]")}function QT(t){return Wh(t).replace(My,"{").replace(Ly,"}").replace(Vy,"^")}function Lu(t){return Wh(t).replace(Oy,"%2B").replace(YT,"+").replace(xy,"%23").replace(jT,"%26").replace(GT,"`").replace(My,"{").replace(Ly,"}").replace(Vy,"^")}function XT(t){return Lu(t).replace(zT,"%3D")}function JT(t){return Wh(t).replace(xy,"%23").replace(qT,"%3F")}function ZT(t){return t==null?"":JT(t).replace(BT,"%2F")}function Do(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eI=/\/$/,tI=t=>t.replace(eI,"");function Zc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=iI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Do(o)}}function nI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hi(e.matched[r],n.matched[s])&&Fy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sI(t[n],e[n]))return!1;return!0}function sI(t,e){return Tn(t)?Vp(t,e):Tn(e)?Vp(e,t):t===e}function Vp(t,e){return Tn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function iI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var xo;(function(t){t.pop="pop",t.push="push"})(xo||(xo={}));var fo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fo||(fo={}));function oI(t){if(!t)if(Ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tI(t)}const aI=/^[^#]+#/;function lI(t,e){return t.replace(aI,"#")+e}function cI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zl=()=>({left:window.scrollX,top:window.scrollY});function uI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Mp(t,e){return(history.state?history.state.position-e:-1)+t}const Fu=new Map;function hI(t,e){Fu.set(t,e)}function fI(t){const e=Fu.get(t);return Fu.delete(t),e}let dI=()=>location.protocol+"//"+location.host;function $y(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Op(c,"")}return Op(n,t)+r+s}function pI(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const v=$y(t,location),D=n.value,N=e.value;let _=0;if(g){if(n.value=v,e.value=g,o&&o===D){o=null;return}_=N?g.position-N.position:0}else r(v);s.forEach(R=>{R(n.value,D,{delta:_,type:xo.pop,direction:_?_>0?fo.forward:fo.back:fo.unknown})})};function c(){o=n.value}function u(g){s.push(g);const v=()=>{const D=s.indexOf(g);D>-1&&s.splice(D,1)};return i.push(v),v}function h(){const{history:g}=window;g.state&&g.replaceState(Me({},g.state,{scroll:Zl()}),"")}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Lp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zl():null}}function mI(t){const{history:e,location:n}=window,r={value:$y(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:dI()+t+c;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(v){console.error(v),n[h?"replace":"assign"](g)}}function o(c,u){const h=Me({},e.state,Lp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function l(c,u){const h=Me({},s.value,e.state,{forward:c,scroll:Zl()});i(h.current,h,!0);const d=Me({},Lp(r.value,c,null),{position:h.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function gI(t){t=oI(t);const e=mI(t),n=pI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Me({location:"",base:t,go:r,createHref:lI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function vI(t){return typeof t=="string"||t&&typeof t=="object"}function Uy(t){return typeof t=="string"||typeof t=="symbol"}const jy=Symbol("");var Fp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fp||(Fp={}));function fi(t,e){return Me(new Error,{type:t,[jy]:!0},e)}function Qn(t,e){return t instanceof Error&&jy in t&&(e==null||!!(t.type&e))}const $p="[^/]+?",yI={sensitive:!1,strict:!1,start:!0,end:!0},_I=/[.+*?^${}()[\]/\\]/g;function bI(t,e){const n=Me({},yI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let v=40+(n.sensitive?.25:0);if(g.type===0)d||(s+="/"),s+=g.value.replace(_I,"\\$&"),v+=40;else if(g.type===1){const{value:D,repeatable:N,optional:_,regexp:R}=g;i.push({name:D,repeatable:N,optional:_});const S=R||$p;if(S!==$p){v+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${D}" (${S}): `+x.message)}}let O=N?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;d||(O=_&&u.length<2?`(?:/${O})`:"/"+O),_&&(O+="?"),s+=O,v+=20,_&&(v+=-8),N&&(v+=-20),S===".*"&&(v+=-50)}h.push(v)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const v=h[g]||"",D=i[g-1];d[D.name]=v&&D.repeatable?v.split("/"):v}return d}function c(u){let h="",d=!1;for(const g of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const v of g)if(v.type===0)h+=v.value;else if(v.type===1){const{value:D,repeatable:N,optional:_}=v,R=D in u?u[D]:"";if(Tn(R)&&!N)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const S=Tn(R)?R.join("/"):R;if(!S)if(_)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${D}"`);h+=S}}return h||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function EI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function By(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=EI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Up(r))return 1;if(Up(s))return-1}return s.length-r.length}function Up(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wI={type:0,value:""},TI=/[a-zA-Z0-9_]/;function II(t){if(!t)return[[]];if(t==="/")return[[wI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:TI.test(c)?g():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function AI(t,e,n){const r=bI(II(t.path),n),s=Me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function SI(t,e){const n=[],r=new Map;e=qp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,g,v){const D=!v,N=Bp(d);N.aliasOf=v&&v.record;const _=qp(e,d),R=[N];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of x)R.push(Bp(Me({},N,{components:v?v.record.components:N.components,path:F,aliasOf:v?v.record:N})))}let S,O;for(const x of R){const{path:F}=x;if(g&&F[0]!=="/"){const H=g.record.path,b=H[H.length-1]==="/"?"":"/";x.path=g.record.path+(F&&b+F)}if(S=AI(x,g,_),v?v.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),D&&d.name&&!zp(S)&&o(d.name)),zy(S)&&c(S),N.children){const H=N.children;for(let b=0;b<H.length;b++)i(H[b],S,v&&v.children[b])}v=v||S}return O?()=>{o(O)}:ho}function o(d){if(Uy(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function c(d){const g=PI(d,n);n.splice(g,0,d),d.record.name&&!zp(d)&&r.set(d.record.name,d)}function u(d,g){let v,D={},N,_;if("name"in d&&d.name){if(v=r.get(d.name),!v)throw fi(1,{location:d});_=v.record.name,D=Me(jp(g.params,v.keys.filter(O=>!O.optional).concat(v.parent?v.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&jp(d.params,v.keys.map(O=>O.name))),N=v.stringify(D)}else if(d.path!=null)N=d.path,v=n.find(O=>O.re.test(N)),v&&(D=v.parse(N),_=v.record.name);else{if(v=g.name?r.get(g.name):n.find(O=>O.re.test(g.path)),!v)throw fi(1,{location:d,currentLocation:g});_=v.record.name,D=Me({},g.params,d.params),N=v.stringify(D)}const R=[];let S=v;for(;S;)R.unshift(S.record),S=S.parent;return{name:_,path:N,params:D,matched:R,meta:CI(R)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:l,getRecordMatcher:s}}function jp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:RI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function RI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function zp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CI(t){return t.reduce((e,n)=>Me(e,n.meta),{})}function qp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function PI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;By(t,e[i])<0?r=i:n=i+1}const s=kI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function kI(t){let e=t;for(;e=e.parent;)if(zy(e)&&By(t,e)===0)return e}function zy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function NI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Oy," "),o=i.indexOf("="),l=Do(o<0?i:i.slice(0,o)),c=o<0?null:Do(i.slice(o+1));if(l in e){let u=e[l];Tn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Hp(t){let e="";for(let n in t){const r=t[n];if(n=XT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tn(r)?r.map(i=>i&&Lu(i)):[r&&Lu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function DI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const xI=Symbol(""),Wp=Symbol(""),ec=Symbol(""),Gh=Symbol(""),$u=Symbol("");function qi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(fi(4,{from:n,to:e})):g instanceof Error?c(g):vI(g)?c(fi(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(g=>c(g))})}function eu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Dy(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Dr(h,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=UT(h)?h.default:h;o.mods[l]=h,o.components[l]=d;const v=(d.__vccOpts||d)[e];return v&&Dr(v,n,r,o,l,s)()}))}}return i}function Gp(t){const e=_n(ec),n=_n(Gh),r=Oe(()=>{const c=ir(t.to);return e.resolve(c)}),s=Oe(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const g=d.findIndex(hi.bind(null,h));if(g>-1)return g;const v=Kp(c[u-2]);return u>1&&Kp(h)===v&&d[d.length-1].path!==v?d.findIndex(hi.bind(null,c[u-2])):g}),i=Oe(()=>s.value>-1&&FI(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&Fy(n.params,r.value.params));function l(c={}){if(LI(c)){const u=e[ir(t.replace)?"replace":"push"](ir(t.to)).catch(ho);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function OI(t){return t.length===1?t[0]:t}const VI=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gp,setup(t,{slots:e}){const n=Hl(Gp(t)),{options:r}=_n(ec),s=Oe(()=>({[Yp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&OI(e.default(n));return t.custom?i:Jl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),MI=VI;function LI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Tn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Kp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yp=(t,e,n)=>t??e??n,$I=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_n($u),s=Oe(()=>t.route||r.value),i=_n(Wp,0),o=Oe(()=>{let u=ir(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),l=Oe(()=>s.value.matched[o.value]);ao(Wp,Oe(()=>o.value+1)),ao(xI,l),ao($u,s);const c=Ne();return lo(()=>[c.value,l.value,t.name],([u,h,d],[g,v,D])=>{h&&(h.instances[d]=u,v&&v!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=v.leaveGuards),h.updateGuards.size||(h.updateGuards=v.updateGuards))),u&&h&&(!v||!hi(h,v)||!g)&&(h.enterCallbacks[d]||[]).forEach(N=>N(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=l.value,g=d&&d.components[h];if(!g)return Qp(n.default,{Component:g,route:u});const v=d.props[h],D=v?v===!0?u.params:typeof v=="function"?v(u):v:null,_=Jl(g,Me({},D,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return Qp(n.default,{Component:_,route:u})||_}}});function Qp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qy=$I;function UI(t){const e=SI(t.routes,t),n=t.parseQuery||NI,r=t.stringifyQuery||Hp,s=t.history,i=qi(),o=qi(),l=qi(),c=YE(Rr);let u=Rr;Ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Jc.bind(null,$=>""+$),d=Jc.bind(null,ZT),g=Jc.bind(null,Do);function v($,re){let ne,oe;return Uy($)?(ne=e.getRecordMatcher($),oe=re):oe=$,e.addRoute(oe,ne)}function D($){const re=e.getRecordMatcher($);re&&e.removeRoute(re)}function N(){return e.getRoutes().map($=>$.record)}function _($){return!!e.getRecordMatcher($)}function R($,re){if(re=Me({},re||c.value),typeof $=="string"){const V=Zc(n,$,re.path),U=e.resolve({path:V.path},re),z=s.createHref(V.fullPath);return Me(V,U,{params:g(U.params),hash:Do(V.hash),redirectedFrom:void 0,href:z})}let ne;if($.path!=null)ne=Me({},$,{path:Zc(n,$.path,re.path).path});else{const V=Me({},$.params);for(const U in V)V[U]==null&&delete V[U];ne=Me({},$,{params:d(V)}),re.params=d(re.params)}const oe=e.resolve(ne,re),De=$.hash||"";oe.params=h(g(oe.params));const T=nI(r,Me({},$,{hash:QT(De),path:oe.path})),A=s.createHref(T);return Me({fullPath:T,hash:De,query:r===Hp?DI($.query):$.query||{}},oe,{redirectedFrom:void 0,href:A})}function S($){return typeof $=="string"?Zc(n,$,c.value.path):Me({},$)}function O($,re){if(u!==$)return fi(8,{from:re,to:$})}function x($){return b($)}function F($){return x(Me(S($),{replace:!0}))}function H($){const re=$.matched[$.matched.length-1];if(re&&re.redirect){const{redirect:ne}=re;let oe=typeof ne=="function"?ne($):ne;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=S(oe):{path:oe},oe.params={}),Me({query:$.query,hash:$.hash,params:oe.path!=null?{}:$.params},oe)}}function b($,re){const ne=u=R($),oe=c.value,De=$.state,T=$.force,A=$.replace===!0,V=H(ne);if(V)return b(Me(S(V),{state:typeof V=="object"?Me({},De,V.state):De,force:T,replace:A}),re||ne);const U=ne;U.redirectedFrom=re;let z;return!T&&rI(r,oe,ne)&&(z=fi(16,{to:U,from:oe}),Xt(oe,oe,!0,!1)),(z?Promise.resolve(z):P(U,oe)).catch(j=>Qn(j)?Qn(j,2)?j:fn(j):Te(j,U,oe)).then(j=>{if(j){if(Qn(j,2))return b(Me({replace:A},S(j.to),{state:typeof j.to=="object"?Me({},De,j.to.state):De,force:T}),re||U)}else j=C(U,oe,!0,A,De);return k(U,oe,j),j})}function E($,re){const ne=O($,re);return ne?Promise.reject(ne):Promise.resolve()}function w($){const re=Er.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext($):$()}function P($,re){let ne;const[oe,De,T]=jI($,re);ne=eu(oe.reverse(),"beforeRouteLeave",$,re);for(const V of oe)V.leaveGuards.forEach(U=>{ne.push(Dr(U,$,re))});const A=E.bind(null,$,re);return ne.push(A),$t(ne).then(()=>{ne=[];for(const V of i.list())ne.push(Dr(V,$,re));return ne.push(A),$t(ne)}).then(()=>{ne=eu(De,"beforeRouteUpdate",$,re);for(const V of De)V.updateGuards.forEach(U=>{ne.push(Dr(U,$,re))});return ne.push(A),$t(ne)}).then(()=>{ne=[];for(const V of T)if(V.beforeEnter)if(Tn(V.beforeEnter))for(const U of V.beforeEnter)ne.push(Dr(U,$,re));else ne.push(Dr(V.beforeEnter,$,re));return ne.push(A),$t(ne)}).then(()=>($.matched.forEach(V=>V.enterCallbacks={}),ne=eu(T,"beforeRouteEnter",$,re,w),ne.push(A),$t(ne))).then(()=>{ne=[];for(const V of o.list())ne.push(Dr(V,$,re));return ne.push(A),$t(ne)}).catch(V=>Qn(V,8)?V:Promise.reject(V))}function k($,re,ne){l.list().forEach(oe=>w(()=>oe($,re,ne)))}function C($,re,ne,oe,De){const T=O($,re);if(T)return T;const A=re===Rr,V=Ws?history.state:{};ne&&(oe||A?s.replace($.fullPath,Me({scroll:A&&V&&V.scroll},De)):s.push($.fullPath,De)),c.value=$,Xt($,re,ne,A),fn()}let I;function $e(){I||(I=s.listen(($,re,ne)=>{if(!An.listening)return;const oe=R($),De=H(oe);if(De){b(Me(De,{replace:!0,force:!0}),oe).catch(ho);return}u=oe;const T=c.value;Ws&&hI(Mp(T.fullPath,ne.delta),Zl()),P(oe,T).catch(A=>Qn(A,12)?A:Qn(A,2)?(b(Me(S(A.to),{force:!0}),oe).then(V=>{Qn(V,20)&&!ne.delta&&ne.type===xo.pop&&s.go(-1,!1)}).catch(ho),Promise.reject()):(ne.delta&&s.go(-ne.delta,!1),Te(A,oe,T))).then(A=>{A=A||C(oe,T,!1),A&&(ne.delta&&!Qn(A,8)?s.go(-ne.delta,!1):ne.type===xo.pop&&Qn(A,20)&&s.go(-1,!1)),k(oe,T,A)}).catch(ho)}))}let ot=qi(),Ke=qi(),Ce;function Te($,re,ne){fn($);const oe=Ke.list();return oe.length?oe.forEach(De=>De($,re,ne)):console.error($),Promise.reject($)}function zt(){return Ce&&c.value!==Rr?Promise.resolve():new Promise(($,re)=>{ot.add([$,re])})}function fn($){return Ce||(Ce=!$,$e(),ot.list().forEach(([re,ne])=>$?ne($):re()),ot.reset()),$}function Xt($,re,ne,oe){const{scrollBehavior:De}=t;if(!Ws||!De)return Promise.resolve();const T=!ne&&fI(Mp($.fullPath,0))||(oe||!ne)&&history.state&&history.state.scroll||null;return $h().then(()=>De($,re,T)).then(A=>A&&uI(A)).catch(A=>Te(A,$,re))}const Ye=$=>s.go($);let Qe;const Er=new Set,An={currentRoute:c,listening:!0,addRoute:v,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:N,resolve:R,options:t,push:x,replace:F,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ke.add,isReady:zt,install($){const re=this;$.component("RouterLink",MI),$.component("RouterView",qy),$.config.globalProperties.$router=re,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>ir(c)}),Ws&&!Qe&&c.value===Rr&&(Qe=!0,x(s.location).catch(De=>{}));const ne={};for(const De in Rr)Object.defineProperty(ne,De,{get:()=>c.value[De],enumerable:!0});$.provide(ec,re),$.provide(Gh,$v(ne)),$.provide($u,c);const oe=$.unmount;Er.add($),$.unmount=function(){Er.delete($),Er.size<1&&(u=Rr,I&&I(),I=null,c.value=Rr,Qe=!1,Ce=!1),oe()}}};function $t($){return $.reduce((re,ne)=>re.then(()=>w(ne)),Promise.resolve())}return An}function jI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>hi(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>hi(u,c))||s.push(c))}return[n,r,s]}function ts(){return _n(ec)}function BI(t){return _n(Gh)}const zI=()=>{};var Xp={};/**
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
 */const Hy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),r.push(n[h],n[d],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new HI;const g=i<<2|l>>4;if(r.push(g),u!==64){const v=l<<4&240|u>>2;if(r.push(v),d!==64){const D=u<<6&192|d;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WI=function(t){const e=Hy(t);return Wy.encodeByteArray(e,!0)},fl=function(t){return WI(t).replace(/\./g,"")},Gy=function(t){try{return Wy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KI=()=>GI().__FIREBASE_DEFAULTS__,YI=()=>{if(typeof process>"u"||typeof Xp>"u")return;const t=Xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gy(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return zI()||KI()||YI()||QI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ky=t=>tc()?.emulatorHosts?.[t],Kh=t=>{const e=Ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yy=()=>tc()?.config,Qy=t=>tc()?.[`_${t}`];/**
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
 */class XI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ns(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nc(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Xy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}const po={};function JI(){const t={prod:[],emulator:[]};for(const e of Object.keys(po))po[e]?t.emulator.push(e):t.prod.push(e);return t}function ZI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jp=!1;function rc(t,e){if(typeof window>"u"||typeof document>"u"||!ns(window.location.host)||po[t]===e||po[t]||Jp)return;po[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=JI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Jp=!0,o()},g}function h(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=ZI(r),v=n("text"),D=document.getElementById(v)||document.createElement("span"),N=n("learnmore"),_=document.getElementById(N)||document.createElement("a"),R=n("preprendIcon"),S=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const O=g.element;l(O),h(_,N);const x=u();c(S,R),O.append(S,D,_,x),document.body.appendChild(O)}i?(D.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function t2(){const t=tc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function r2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s2(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i2(){return!t2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zy(){try{return typeof indexedDB=="object"}catch{return!1}}function e_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function o2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const a2="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=a2,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?l2(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hn(s,l,r)}}function l2(t,e){return t.replace(c2,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const c2=/\{\$([^}]+)}/g;function u2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zp(i)&&Zp(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
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
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function h2(t,e){const n=new f2(t,e);return n.subscribe.bind(n)}class f2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");d2(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tu),s.error===void 0&&(s.error=tu),s.complete===void 0&&(s.complete=tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tu(){}/**
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
 */const p2=1e3,m2=2,g2=14400*1e3,v2=.5;function em(t,e=p2,n=m2){const r=e*Math.pow(n,t),s=Math.round(v2*r*(Math.random()-.5)*2);return Math.min(g2,r+s)}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fs="[DEFAULT]";/**
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
 */class y2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b2(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _2(t){return t===fs?void 0:t}function b2(t){return t.instantiationMode==="EAGER"}/**
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
 */class E2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new y2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const w2={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},T2=Ie.INFO,I2={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},A2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=I2[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sc{constructor(e){this.name=e,this._logLevel=T2,this._logHandler=A2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const S2=(t,e)=>e.some(n=>t instanceof n);let tm,nm;function R2(){return tm||(tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C2(){return nm||(nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,Uu=new WeakMap,n_=new WeakMap,nu=new WeakMap,Yh=new WeakMap;function P2(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t_.set(n,t)}).catch(()=>{}),Yh.set(e,t),e}function k2(t){if(Uu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uu.set(t,e)}let ju={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N2(t){ju=t(ju)}function D2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ru(this),e,...n);return n_.set(r,e.sort?e.sort():[e]),Fr(r)}:C2().includes(t)?function(...e){return t.apply(ru(this),e),Fr(t_.get(this))}:function(...e){return Fr(t.apply(ru(this),e))}}function x2(t){return typeof t=="function"?D2(t):(t instanceof IDBTransaction&&k2(t),S2(t,R2())?new Proxy(t,ju):t)}function Fr(t){if(t instanceof IDBRequest)return P2(t);if(nu.has(t))return nu.get(t);const e=x2(t);return e!==t&&(nu.set(t,e),Yh.set(e,t)),e}const ru=t=>Yh.get(t);function r_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Fr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Fr(o.result),c.oldVersion,c.newVersion,Fr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const O2=["get","getKey","getAll","getAllKeys","count"],V2=["put","add","delete","clear"],su=new Map;function rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(su.get(e))return su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=V2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||O2.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return su.set(e,i),i}N2(t=>({...t,get:(e,n,r)=>rm(e,n)||t.get(e,n,r),has:(e,n)=>!!rm(e,n)||t.has(e,n)}));/**
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
 */class M2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function L2(t){return t.getComponent()?.type==="VERSION"}const Bu="@firebase/app",sm="0.14.0";/**
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
 */const ur=new sc("@firebase/app"),F2="@firebase/app-compat",$2="@firebase/analytics-compat",U2="@firebase/analytics",j2="@firebase/app-check-compat",B2="@firebase/app-check",z2="@firebase/auth",q2="@firebase/auth-compat",H2="@firebase/database",W2="@firebase/data-connect",G2="@firebase/database-compat",K2="@firebase/functions",Y2="@firebase/functions-compat",Q2="@firebase/installations",X2="@firebase/installations-compat",J2="@firebase/messaging",Z2="@firebase/messaging-compat",eA="@firebase/performance",tA="@firebase/performance-compat",nA="@firebase/remote-config",rA="@firebase/remote-config-compat",sA="@firebase/storage",iA="@firebase/storage-compat",oA="@firebase/firestore",aA="@firebase/ai",lA="@firebase/firestore-compat",cA="firebase",uA="12.0.0";/**
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
 */const zu="[DEFAULT]",hA={[Bu]:"fire-core",[F2]:"fire-core-compat",[U2]:"fire-analytics",[$2]:"fire-analytics-compat",[B2]:"fire-app-check",[j2]:"fire-app-check-compat",[z2]:"fire-auth",[q2]:"fire-auth-compat",[H2]:"fire-rtdb",[W2]:"fire-data-connect",[G2]:"fire-rtdb-compat",[K2]:"fire-fn",[Y2]:"fire-fn-compat",[Q2]:"fire-iid",[X2]:"fire-iid-compat",[J2]:"fire-fcm",[Z2]:"fire-fcm-compat",[eA]:"fire-perf",[tA]:"fire-perf-compat",[nA]:"fire-rc",[rA]:"fire-rc-compat",[sA]:"fire-gcs",[iA]:"fire-gcs-compat",[oA]:"fire-fst",[lA]:"fire-fst-compat",[aA]:"fire-vertex","fire-js":"fire-js",[cA]:"fire-js-all"};/**
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
 */const dl=new Map,fA=new Map,qu=new Map;function im(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(qu.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;qu.set(e,t);for(const n of dl.values())im(n,t);for(const n of fA.values())im(n,t);return!0}function vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const dA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new Ns("app","Firebase",dA);/**
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
 */class pA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=uA;function s_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:zu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw $r.create("bad-app-name",{appName:String(s)});if(n||(n=Yy()),!n)throw $r.create("no-options");const i=dl.get(s);if(i){if(Hr(n,i.options)&&Hr(r,i.config))return i;throw $r.create("duplicate-app",{appName:s})}const o=new E2(s);for(const c of qu.values())o.addComponent(c);const l=new pA(n,r,o);return dl.set(s,l),l}function Xo(t=zu){const e=dl.get(t);if(!e&&t===zu&&Yy())return s_();if(!e)throw $r.create("no-app",{appName:t});return e}function Nt(t,e,n){let r=hA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(o.join(" "));return}cn(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const mA="firebase-heartbeat-database",gA=1,Oo="firebase-heartbeat-store";let iu=null;function i_(){return iu||(iu=r_(mA,gA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oo)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),iu}async function vA(t){try{const n=(await i_()).transaction(Oo),r=await n.objectStore(Oo).get(o_(t));return await n.done,r}catch(e){if(e instanceof hn)ur.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e?.message});ur.warn(n.message)}}}async function om(t,e){try{const r=(await i_()).transaction(Oo,"readwrite");await r.objectStore(Oo).put(e,o_(t)),await r.done}catch(n){if(n instanceof hn)ur.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n?.message});ur.warn(r.message)}}}function o_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yA=1024,_A=30;class bA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=am();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>_A){const s=TA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ur.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=am(),{heartbeatsToSend:n,unsentEntries:r}=EA(this._heartbeatsCache.heartbeats),s=fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ur.warn(e),""}}}function am(){return new Date().toISOString().substring(0,10)}function EA(t,e=yA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zy()?e_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return om(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return om(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lm(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}function TA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function IA(t){cn(new Yt("platform-logger",e=>new M2(e),"PRIVATE")),cn(new Yt("heartbeat",e=>new bA(e),"PRIVATE")),Nt(Bu,sm,t),Nt(Bu,sm,"esm2020"),Nt("fire-js","")}IA("");var AA="firebase",SA="12.0.0";/**
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
 */Nt(AA,SA,"app");function a_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RA=a_,l_=new Ns("auth","Firebase",a_());/**
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
 */const pl=new sc("@firebase/auth");function CA(t,...e){pl.logLevel<=Ie.WARN&&pl.warn(`Auth (${Ds}): ${t}`,...e)}function Ha(t,...e){pl.logLevel<=Ie.ERROR&&pl.error(`Auth (${Ds}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Xh(t,...e)}function bn(t,...e){return Xh(t,...e)}function Qh(t,e,n){const r={...RA(),[e]:n};return new Ns("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return Qh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&un(t,"argument-error"),Qh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l_.create(t,...e)}function pe(t,e,...n){if(!t)throw Xh(e,...n)}function rr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ha(e),new Error(e)}function hr(t,e){t||rr(e)}/**
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
 */function Hu(){return typeof self<"u"&&self.location?.href||""}function kA(){return cm()==="http:"||cm()==="https:"}function cm(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function NA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kA()||Jy()||"connection"in navigator)?navigator.onLine:!0}function DA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=e2()||r2()}get(){return NA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jh(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class c_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VA=new Jo(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function zn(t,e,n,r,s={}){return u_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Qo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return n2()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ns(t.emulatorConfig.host)&&(u.credentials="include"),c_.fetch()(await h_(t,t.config.apiHost,n,l),u)})}async function u_(t,e,n){t._canInitEmulator=!1;const r={...xA,...e};try{const s=new LA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Na(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qh(t,h,u);un(t,h)}}catch(s){if(s instanceof hn)throw s;un(t,"network-request-failed",{message:String(s)})}}async function Zo(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function h_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Jh(t.config,s):`${t.config.apiScheme}://${s}`;return OA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function MA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),VA.get())})}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function um(t){return t!==void 0&&t.enterprise!==void 0}class FA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $A(t,e){return zn(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
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
 */async function UA(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function ml(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jA(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=Zh(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:mo(ou(s.auth_time)),issuedAtTime:mo(ou(s.iat)),expirationTime:mo(ou(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ou(t){return Number(t)*1e3}function Zh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gy(n);return s?JSON.parse(s):(Ha("Failed to decode base64 JWT payload"),null)}catch(s){return Ha("Caught error parsing JWT payload as JSON",s?.toString()),null}}function hm(t){const e=Zh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&BA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(t){const e=t.auth,n=await t.getIdToken(),r=await di(t,ml(e,{idToken:n}));pe(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?f_(s.providerUserInfo):[],o=HA(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Wu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qA(t){const e=ct(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function f_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function WA(t,e){const n=await u_(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await h_(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ns(t.emulatorConfig.host)&&(c.credentials="include"),c_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GA(t,e){return zn(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
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
 */class si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=hm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new si;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new si,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
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
 */function Cr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jA(this,e)}reload(){return qA(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await di(this,UA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:g,isAnonymous:v,providerData:D,stsTokenManager:N}=n;pe(d&&N,e,"internal-error");const _=si.fromJSON(this.name,N);pe(typeof d=="string",e,"internal-error"),Cr(r,e.name),Cr(s,e.name),pe(typeof g=="boolean",e,"internal-error"),pe(typeof v=="boolean",e,"internal-error"),Cr(i,e.name),Cr(o,e.name),Cr(l,e.name),Cr(c,e.name),Cr(u,e.name),Cr(h,e.name);const R=new pn({uid:d,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:_,createdAt:u,lastLoginAt:h});return D&&Array.isArray(D)&&(R.providerData=D.map(S=>({...S}))),c&&(R._redirectEventId=c),R}static async _fromIdTokenResponse(e,n,r=!1){const s=new si;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?f_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,l=new si;l.updateFromIdToken(r);const c=new pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const fm=new Map;function sr(t){hr(t instanceof Function,"Expected a class definition");let e=fm.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fm.set(t,e),e)}/**
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
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const dm=d_;/**
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
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ml(this.auth,{idToken:e}).catch(()=>{});return n?pn._fromGetAccountInfoResponse(this.auth,n,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(sr(dm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||sr(dm);const o=Wa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const g=await ml(e,{idToken:h}).catch(()=>{});if(!g)break;d=await pn._fromGetAccountInfoResponse(e,g,h)}else d=pn._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ii(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ii(i,e,r))}}/**
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
 */function pm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(b_(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function p_(t=Dt()){return/firefox\//i.test(t)}function m_(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(t=Dt()){return/crios\//i.test(t)}function v_(t=Dt()){return/iemobile/i.test(t)}function y_(t=Dt()){return/android/i.test(t)}function __(t=Dt()){return/blackberry/i.test(t)}function b_(t=Dt()){return/webos/i.test(t)}function ef(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KA(t=Dt()){return ef(t)&&!!window.navigator?.standalone}function YA(){return s2()&&document.documentMode===10}function E_(t=Dt()){return ef(t)||y_(t)||b_(t)||__(t)||/windows phone/i.test(t)||v_(t)}/**
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
 */function w_(t,e=[]){let n;switch(t){case"Browser":n=pm(Dt());break;case"Worker":n=`${pm(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
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
 */class QA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function XA(t,e={}){return zn(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
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
 */const JA=6;class ZA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??JA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class eS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mm(this),this.idTokenSubscription=new mm(this),this.beforeStateQueue=new QA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ml(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(or(this));const n=e?ct(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XA(this),n=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GA(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&CA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function _r(t){return ct(t)}class mm{constructor(e){this.auth=e,this.observer=null,this.addObserver=h2(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tS(t){ic=t}function T_(t){return ic.loadJS(t)}function nS(){return ic.recaptchaEnterpriseScript}function rS(){return ic.gapiScript}function sS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class iS{constructor(){this.enterprise=new oS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class oS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aS="recaptcha-enterprise",I_="NO_RECAPTCHA";class lS{constructor(e){this.type=aS,this.auth=_r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{$A(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new FA(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;um(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(I_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&um(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=nS();c.length!==0&&(c+=l),T_(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function gm(t,e,n,r=!1,s=!1){const i=new lS(t);let o;if(s)o=I_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function vl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gm(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function cS(t,e){const n=vr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return s;un(s,"already-initialized")}return n.initialize({options:e})}function uS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(sr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function hS(t,e,n){const r=_r(t);pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=A_(e),{host:o,port:l}=fS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){pe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),pe(Hr(u,r.config.emulator)&&Hr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ns(o)?(nc(`${i}//${o}${c}`),rc("Auth",!0)):dS()}function A_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fS(t){const e=A_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vm(o)}}}function vm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class tf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(e){return rr("not implemented")}_linkToIdToken(e,n){return rr("not implemented")}_getReauthenticationResolver(e){return rr("not implemented")}}async function pS(t,e){return zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mS(t,e){return Zo(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}async function gS(t,e){return zn(t,"POST","/v1/accounts:sendOobCode",yr(t,e))}async function vS(t,e){return gS(t,e)}/**
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
 */async function yS(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function _S(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
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
 */class Vo extends tf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,n,"signInWithPassword",mS);case"emailLink":return yS(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,r,"signUpPassword",pS);case"emailLink":return _S(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function oi(t,e){return Zo(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
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
 */const bS="http://localhost";class ws extends tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ws(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:bS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
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
 */function ES(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wS(t){const e=Ki(Yi(t)).link,n=e?Ki(Yi(e)).deep_link_id:null,r=Ki(Yi(t)).deep_link_id;return(r?Ki(Yi(r)).link:null)||r||n||e||t}class nf{constructor(e){const n=Ki(Yi(e)),r=n.apiKey??null,s=n.oobCode??null,i=ES(n.mode??null);pe(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=wS(e);try{return new nf(n)}catch{return null}}}/**
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
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return Vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nf.parseLink(n);return pe(r,"argument-error"),Vo._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ea extends rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends ea{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class kn extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ws._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class Or extends ea{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
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
 */class Vr extends ea{constructor(){super("twitter.com")}static credential(e,n){return ws._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
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
 */async function TS(t,e){return Zo(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
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
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=ym(r);return new Ts({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ym(r);return new Ts({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yl extends hn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yl(e,n,r,s)}}function S_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,i,e,r):i})}async function IS(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",r)}/**
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
 */async function AS(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await di(t,S_(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=Zh(i.idToken);pe(o,r,"internal-error");const{sub:l}=o;return pe(t.uid===l,r,"user-mismatch"),Ts._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&un(r,"user-mismatch"),i}}/**
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
 */async function R_(t,e,n=!1){if(Ft(t.app))return Promise.reject(or(t));const r="signIn",s=await S_(t,r,e),i=await Ts._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function SS(t,e){return R_(_r(t),e)}/**
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
 */async function C_(t){const e=_r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RS(t,e,n){const r=_r(t);await vl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",vS)}async function CS(t,e,n){if(Ft(t.app))return Promise.reject(or(t));const r=_r(t),o=await vl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&C_(t),c}),l=await Ts._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function PS(t,e,n){return Ft(t.app)?Promise.reject(or(t)):SS(ct(t),Ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&C_(t),r})}/**
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
 */async function kS(t,e){return zn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function NS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ct(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await di(r,kS(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function DS(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function xS(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function OS(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function VS(t){return ct(t).signOut()}const _l="__sak";/**
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
 */class P_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const MS=1e3,LS=10;class k_ extends P_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=E_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}k_.type="LOCAL";const FS=k_;/**
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
 */class N_ extends P_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N_.type="SESSION";const D_=N_;/**
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
 */function $S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await $S(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
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
 */function sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class US{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=sf("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function On(){return window}function jS(t){On().location.href=t}/**
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
 */function x_(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function BS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){return navigator?.serviceWorker?.controller||null}function qS(){return x_()?self:null}/**
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
 */const O_="firebaseLocalStorageDb",HS=1,bl="firebaseLocalStorage",V_="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function WS(){const t=indexedDB.deleteDatabase(O_);return new ta(t).toPromise()}function Gu(){const t=indexedDB.open(O_,HS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bl,{keyPath:V_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bl)?e(r):(r.close(),await WS(),e(await Gu()))})})}async function _m(t,e,n){const r=ac(t,!0).put({[V_]:e,value:n});return new ta(r).toPromise()}async function GS(t,e){const n=ac(t,!1).get(e),r=await new ta(n).toPromise();return r===void 0?null:r.value}function bm(t,e){const n=ac(t,!0).delete(e);return new ta(n).toPromise()}const KS=800,YS=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(qS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await BS(),!this.activeServiceWorker)return;this.sender=new US(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gu();return await _m(e,_l,"1"),await bm(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_m(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ac(s,!1).getAll();return new ta(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const QS=M_;new Jo(3e4,6e4);/**
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
 */function L_(t,e){return e?sr(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class of extends tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XS(t){return R_(t.auth,new of(t),t.bypassAuthState)}function JS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),AS(n,new of(t),t.bypassAuthState)}async function ZS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),IS(n,new of(t),t.bypassAuthState)}/**
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
 */class F_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XS;case"linkViaPopup":case"linkViaRedirect":return ZS;case"reauthViaPopup":case"reauthViaRedirect":return JS;default:un(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eR=new Jo(2e3,1e4);async function $_(t,e,n){if(Ft(t.app))return Promise.reject(bn(t,"operation-not-supported-in-this-environment"));const r=_r(t);PA(t,e,rf);const s=L_(r,n);return new ps(r,"signInViaPopup",e,s).executeNotNull()}class ps extends F_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eR.get())};e()}}ps.currentPopupAction=null;/**
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
 */const tR="pendingRedirect",Ga=new Map;class nR extends F_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const r=await rR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rR(t,e){const n=oR(e),r=iR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sR(t,e){Ga.set(t._key(),e)}function iR(t){return sr(t._redirectPersistence)}function oR(t){return Wa(tR,t.config.apiKey,t.name)}async function aR(t,e,n=!1){if(Ft(t.app))return Promise.reject(or(t));const r=_r(t),s=L_(r,e),o=await new nR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lR=600*1e3;class cR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!U_(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(bn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Em(e))}saveEventToCache(e){this.cachedEventUids.add(Em(e)),this.lastProcessedEventTime=Date.now()}}function Em(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function uR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U_(t);default:return!1}}/**
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
 */async function hR(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
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
 */const fR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dR=/^https?/;async function pR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(mR(n))return}catch{}un(t,"unauthorized-domain")}function mR(t){const e=Hu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dR.test(n))return!1;if(fR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gR=new Jo(3e4,6e4);function wm(){const t=On().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vR(t){return new Promise((e,n)=>{function r(){wm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wm(),n(bn(t,"network-request-failed"))},timeout:gR.get()})}if(On().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(On().gapi?.load)r();else{const s=sS("iframefcb");return On()[s]=()=>{gapi.load?r():n(bn(t,"network-request-failed"))},T_(`${rS()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function yR(t){return Ka=Ka||vR(t),Ka}/**
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
 */const _R=new Jo(5e3,15e3),bR="__/auth/iframe",ER="emulator/auth/iframe",wR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IR(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jh(e,ER):`https://${t.config.authDomain}/${bR}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=TR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qo(r).slice(1)}`}async function AR(t){const e=await yR(t),n=On().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:IR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=On().setTimeout(()=>{i(o)},_R.get());function c(){On().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const SR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RR=500,CR=600,PR="_blank",kR="http://localhost";class Tm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NR(t,e,n,r=RR,s=CR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...SR,width:r.toString(),height:s.toString(),top:i,left:o},u=Dt().toLowerCase();n&&(l=g_(u)?PR:n),p_(u)&&(e=e||kR,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[v,D])=>`${g}${v}=${D},`,"");if(KA(u)&&l!=="_self")return DR(e||"",l),new Tm(null);const d=window.open(e||"",l,h);pe(d,t,"popup-blocked");try{d.focus()}catch{}return new Tm(d)}function DR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xR="__/auth/handler",OR="emulator/auth/handler",VR=encodeURIComponent("fac");async function Im(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof rf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",u2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ea){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${VR}=${encodeURIComponent(c)}`:"";return`${MR(t)}?${Qo(l).slice(1)}${u}`}function MR({config:t}){return t.emulator?Jh(t,OR):`https://${t.authDomain}/${xR}`}/**
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
 */const au="webStorageSupport";class LR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D_,this._completeRedirectFn=aR,this._overrideRedirectResult=sR}async _openPopup(e,n,r,s){hr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Im(e,n,r,Hu(),s);return NR(e,i,sf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Im(e,n,r,Hu(),s);return jS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(hr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AR(e),r=new cR(e);return n.register("authEvent",s=>(pe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(au,{type:au},s=>{const i=s?.[0]?.[au];i!==void 0&&n(!!i),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E_()||m_()||ef()}}const FR=LR;var Am="@firebase/auth",Sm="1.11.0";/**
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
 */class $R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jR(t){cn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(t)},u=new eS(r,s,i,c);return uS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Yt("auth-internal",e=>{const n=_r(e.getProvider("auth").getImmediate());return(r=>new $R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Am,Sm,UR(t)),Nt(Am,Sm,"esm2020")}/**
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
 */const BR=300,zR=Qy("authIdTokenMaxAge")||BR;let Rm=null;const qR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zR)return;const s=n?.token;Rm!==s&&(Rm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HR(t=Xo()){const e=vr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cS(t,{popupRedirectResolver:FR,persistence:[QS,FS,D_]}),r=Qy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qR(i.toString());xS(n,o,()=>o(n.currentUser)),DS(n,l=>o(l))}}const s=Ky("auth");return s&&hS(n,`http://${s}`),n}function WR(){return document.getElementsByTagName("head")?.[0]??document}tS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jR("Browser");var Cm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,j_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function w(){}w.prototype=E.prototype,b.D=E.prototype,b.prototype=new w,b.prototype.constructor=b,b.C=function(P,k,C){for(var I=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)I[$e-2]=arguments[$e];return E.prototype[k].apply(P,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,w){w||(w=0);var P=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)P[k]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(k=0;16>k;++k)P[k]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=b.g[0],w=b.g[1],k=b.g[2];var C=b.g[3],I=E+(C^w&(k^C))+P[0]+3614090360&4294967295;E=w+(I<<7&4294967295|I>>>25),I=C+(k^E&(w^k))+P[1]+3905402710&4294967295,C=E+(I<<12&4294967295|I>>>20),I=k+(w^C&(E^w))+P[2]+606105819&4294967295,k=C+(I<<17&4294967295|I>>>15),I=w+(E^k&(C^E))+P[3]+3250441966&4294967295,w=k+(I<<22&4294967295|I>>>10),I=E+(C^w&(k^C))+P[4]+4118548399&4294967295,E=w+(I<<7&4294967295|I>>>25),I=C+(k^E&(w^k))+P[5]+1200080426&4294967295,C=E+(I<<12&4294967295|I>>>20),I=k+(w^C&(E^w))+P[6]+2821735955&4294967295,k=C+(I<<17&4294967295|I>>>15),I=w+(E^k&(C^E))+P[7]+4249261313&4294967295,w=k+(I<<22&4294967295|I>>>10),I=E+(C^w&(k^C))+P[8]+1770035416&4294967295,E=w+(I<<7&4294967295|I>>>25),I=C+(k^E&(w^k))+P[9]+2336552879&4294967295,C=E+(I<<12&4294967295|I>>>20),I=k+(w^C&(E^w))+P[10]+4294925233&4294967295,k=C+(I<<17&4294967295|I>>>15),I=w+(E^k&(C^E))+P[11]+2304563134&4294967295,w=k+(I<<22&4294967295|I>>>10),I=E+(C^w&(k^C))+P[12]+1804603682&4294967295,E=w+(I<<7&4294967295|I>>>25),I=C+(k^E&(w^k))+P[13]+4254626195&4294967295,C=E+(I<<12&4294967295|I>>>20),I=k+(w^C&(E^w))+P[14]+2792965006&4294967295,k=C+(I<<17&4294967295|I>>>15),I=w+(E^k&(C^E))+P[15]+1236535329&4294967295,w=k+(I<<22&4294967295|I>>>10),I=E+(k^C&(w^k))+P[1]+4129170786&4294967295,E=w+(I<<5&4294967295|I>>>27),I=C+(w^k&(E^w))+P[6]+3225465664&4294967295,C=E+(I<<9&4294967295|I>>>23),I=k+(E^w&(C^E))+P[11]+643717713&4294967295,k=C+(I<<14&4294967295|I>>>18),I=w+(C^E&(k^C))+P[0]+3921069994&4294967295,w=k+(I<<20&4294967295|I>>>12),I=E+(k^C&(w^k))+P[5]+3593408605&4294967295,E=w+(I<<5&4294967295|I>>>27),I=C+(w^k&(E^w))+P[10]+38016083&4294967295,C=E+(I<<9&4294967295|I>>>23),I=k+(E^w&(C^E))+P[15]+3634488961&4294967295,k=C+(I<<14&4294967295|I>>>18),I=w+(C^E&(k^C))+P[4]+3889429448&4294967295,w=k+(I<<20&4294967295|I>>>12),I=E+(k^C&(w^k))+P[9]+568446438&4294967295,E=w+(I<<5&4294967295|I>>>27),I=C+(w^k&(E^w))+P[14]+3275163606&4294967295,C=E+(I<<9&4294967295|I>>>23),I=k+(E^w&(C^E))+P[3]+4107603335&4294967295,k=C+(I<<14&4294967295|I>>>18),I=w+(C^E&(k^C))+P[8]+1163531501&4294967295,w=k+(I<<20&4294967295|I>>>12),I=E+(k^C&(w^k))+P[13]+2850285829&4294967295,E=w+(I<<5&4294967295|I>>>27),I=C+(w^k&(E^w))+P[2]+4243563512&4294967295,C=E+(I<<9&4294967295|I>>>23),I=k+(E^w&(C^E))+P[7]+1735328473&4294967295,k=C+(I<<14&4294967295|I>>>18),I=w+(C^E&(k^C))+P[12]+2368359562&4294967295,w=k+(I<<20&4294967295|I>>>12),I=E+(w^k^C)+P[5]+4294588738&4294967295,E=w+(I<<4&4294967295|I>>>28),I=C+(E^w^k)+P[8]+2272392833&4294967295,C=E+(I<<11&4294967295|I>>>21),I=k+(C^E^w)+P[11]+1839030562&4294967295,k=C+(I<<16&4294967295|I>>>16),I=w+(k^C^E)+P[14]+4259657740&4294967295,w=k+(I<<23&4294967295|I>>>9),I=E+(w^k^C)+P[1]+2763975236&4294967295,E=w+(I<<4&4294967295|I>>>28),I=C+(E^w^k)+P[4]+1272893353&4294967295,C=E+(I<<11&4294967295|I>>>21),I=k+(C^E^w)+P[7]+4139469664&4294967295,k=C+(I<<16&4294967295|I>>>16),I=w+(k^C^E)+P[10]+3200236656&4294967295,w=k+(I<<23&4294967295|I>>>9),I=E+(w^k^C)+P[13]+681279174&4294967295,E=w+(I<<4&4294967295|I>>>28),I=C+(E^w^k)+P[0]+3936430074&4294967295,C=E+(I<<11&4294967295|I>>>21),I=k+(C^E^w)+P[3]+3572445317&4294967295,k=C+(I<<16&4294967295|I>>>16),I=w+(k^C^E)+P[6]+76029189&4294967295,w=k+(I<<23&4294967295|I>>>9),I=E+(w^k^C)+P[9]+3654602809&4294967295,E=w+(I<<4&4294967295|I>>>28),I=C+(E^w^k)+P[12]+3873151461&4294967295,C=E+(I<<11&4294967295|I>>>21),I=k+(C^E^w)+P[15]+530742520&4294967295,k=C+(I<<16&4294967295|I>>>16),I=w+(k^C^E)+P[2]+3299628645&4294967295,w=k+(I<<23&4294967295|I>>>9),I=E+(k^(w|~C))+P[0]+4096336452&4294967295,E=w+(I<<6&4294967295|I>>>26),I=C+(w^(E|~k))+P[7]+1126891415&4294967295,C=E+(I<<10&4294967295|I>>>22),I=k+(E^(C|~w))+P[14]+2878612391&4294967295,k=C+(I<<15&4294967295|I>>>17),I=w+(C^(k|~E))+P[5]+4237533241&4294967295,w=k+(I<<21&4294967295|I>>>11),I=E+(k^(w|~C))+P[12]+1700485571&4294967295,E=w+(I<<6&4294967295|I>>>26),I=C+(w^(E|~k))+P[3]+2399980690&4294967295,C=E+(I<<10&4294967295|I>>>22),I=k+(E^(C|~w))+P[10]+4293915773&4294967295,k=C+(I<<15&4294967295|I>>>17),I=w+(C^(k|~E))+P[1]+2240044497&4294967295,w=k+(I<<21&4294967295|I>>>11),I=E+(k^(w|~C))+P[8]+1873313359&4294967295,E=w+(I<<6&4294967295|I>>>26),I=C+(w^(E|~k))+P[15]+4264355552&4294967295,C=E+(I<<10&4294967295|I>>>22),I=k+(E^(C|~w))+P[6]+2734768916&4294967295,k=C+(I<<15&4294967295|I>>>17),I=w+(C^(k|~E))+P[13]+1309151649&4294967295,w=k+(I<<21&4294967295|I>>>11),I=E+(k^(w|~C))+P[4]+4149444226&4294967295,E=w+(I<<6&4294967295|I>>>26),I=C+(w^(E|~k))+P[11]+3174756917&4294967295,C=E+(I<<10&4294967295|I>>>22),I=k+(E^(C|~w))+P[2]+718787259&4294967295,k=C+(I<<15&4294967295|I>>>17),I=w+(C^(k|~E))+P[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+k&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var w=E-this.blockSize,P=this.B,k=this.h,C=0;C<E;){if(k==0)for(;C<=w;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<E;)if(P[k++]=b.charCodeAt(C++),k==this.blockSize){s(this,P),k=0;break}}else for(;C<E;)if(P[k++]=b[C++],k==this.blockSize){s(this,P),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var w=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=w&255,w/=256;for(this.u(b),b=Array(16),E=w=0;4>E;++E)for(var P=0;32>P;P+=8)b[w++]=this.g[E]>>>P&255;return b};function i(b,E){var w=l;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=E(b)}function o(b,E){this.h=E;for(var w=[],P=!0,k=b.length-1;0<=k;k--){var C=b[k]|0;P&&C==E||(w[k]=C,P=!1)}this.g=w}var l={};function c(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return _(u(-b));for(var E=[],w=1,P=0;b>=w;P++)E[P]=b/w|0,w*=4294967296;return new o(E,0)}function h(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return _(h(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(E,8)),P=d,k=0;k<b.length;k+=8){var C=Math.min(8,b.length-k),I=parseInt(b.substring(k,k+C),E);8>C?(C=u(Math.pow(E,C)),P=P.j(C).add(u(I))):(P=P.j(w),P=P.add(u(I)))}return P}var d=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-_(this).m();for(var b=0,E=1,w=0;w<this.g.length;w++){var P=this.i(w);b+=(0<=P?P:4294967296+P)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(N(this))return"-"+_(this).toString(b);for(var E=u(Math.pow(b,6)),w=this,P="";;){var k=x(w,E).g;w=R(w,k.j(E));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(b);if(w=k,D(w))return C+P;for(;6>C.length;)C="0"+C;P=C+P}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=R(this,b),N(b)?-1:D(b)?0:1};function _(b){for(var E=b.g.length,w=[],P=0;P<E;P++)w[P]=~b.g[P];return new o(w,~b.h).add(g)}t.abs=function(){return N(this)?_(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],P=0,k=0;k<=E;k++){var C=P+(this.i(k)&65535)+(b.i(k)&65535),I=(C>>>16)+(this.i(k)>>>16)+(b.i(k)>>>16);P=I>>>16,C&=65535,I&=65535,w[k]=I<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function R(b,E){return b.add(_(E))}t.j=function(b){if(D(this)||D(b))return d;if(N(this))return N(b)?_(this).j(_(b)):_(_(this).j(b));if(N(b))return _(this.j(_(b)));if(0>this.l(v)&&0>b.l(v))return u(this.m()*b.m());for(var E=this.g.length+b.g.length,w=[],P=0;P<2*E;P++)w[P]=0;for(P=0;P<this.g.length;P++)for(var k=0;k<b.g.length;k++){var C=this.i(P)>>>16,I=this.i(P)&65535,$e=b.i(k)>>>16,ot=b.i(k)&65535;w[2*P+2*k]+=I*ot,S(w,2*P+2*k),w[2*P+2*k+1]+=C*ot,S(w,2*P+2*k+1),w[2*P+2*k+1]+=I*$e,S(w,2*P+2*k+1),w[2*P+2*k+2]+=C*$e,S(w,2*P+2*k+2)}for(P=0;P<E;P++)w[P]=w[2*P+1]<<16|w[2*P];for(P=E;P<2*E;P++)w[P]=0;return new o(w,0)};function S(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function O(b,E){this.g=b,this.h=E}function x(b,E){if(D(E))throw Error("division by zero");if(D(b))return new O(d,d);if(N(b))return E=x(_(b),E),new O(_(E.g),_(E.h));if(N(E))return E=x(b,_(E)),new O(_(E.g),E.h);if(30<b.g.length){if(N(b)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var w=g,P=E;0>=P.l(b);)w=F(w),P=F(P);var k=H(w,1),C=H(P,1);for(P=H(P,2),w=H(w,2);!D(P);){var I=C.add(P);0>=I.l(b)&&(k=k.add(w),C=I),P=H(P,1),w=H(w,1)}return E=R(b,k.j(E)),new O(k,E)}for(k=d;0<=b.l(E);){for(w=Math.max(1,Math.floor(b.m()/E.m())),P=Math.ceil(Math.log(w)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),C=u(w),I=C.j(E);N(I)||0<I.l(b);)w-=P,C=u(w),I=C.j(E);D(C)&&(C=g),k=k.add(C),b=R(b,I)}return new O(k,b)}t.A=function(b){return x(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],P=0;P<E;P++)w[P]=this.i(P)&b.i(P);return new o(w,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],P=0;P<E;P++)w[P]=this.i(P)|b.i(P);return new o(w,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),w=[],P=0;P<E;P++)w[P]=this.i(P)^b.i(P);return new o(w,this.h^b.h)};function F(b){for(var E=b.g.length+1,w=[],P=0;P<E;P++)w[P]=b.i(P)<<1|b.i(P-1)>>>31;return new o(w,b.h)}function H(b,E){var w=E>>5;E%=32;for(var P=b.g.length-w,k=[],C=0;C<P;C++)k[C]=0<E?b.i(C+w)>>>E|b.i(C+w+1)<<32-E:b.i(C+w);return new o(k,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,j_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ur=o}).apply(typeof Cm<"u"?Cm:typeof self<"u"?self:typeof window<"u"?window:{});var Da=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B_,Qi,z_,Ya,Ku,q_,H_,W_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,m){return a==Array.prototype||a==Object.prototype||(a[f]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Da=="object"&&Da];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var m=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var M=a[y];if(!(M in m))break e;m=m[M]}a=a[a.length-1],y=m[a],f=f(y),f!=y&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var m=0,y=!1,M={next:function(){if(!y&&m<a.length){var L=m++;return{value:f(L,a[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,m){return a.call.apply(a.bind,arguments)}function d(a,f,m){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,y),a.apply(f,M)}}return function(){return a.apply(f,arguments)}}function g(a,f,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,g.apply(null,arguments)}function v(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function D(a,f){function m(){}m.prototype=f.prototype,a.aa=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(y,M,L){for(var J=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)J[Ue-2]=arguments[Ue];return f.prototype[M].apply(y,J)}}function N(a){const f=a.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=a[y];return m}return[]}function _(a,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(c(y)){const M=a.length||0,L=y.length||0;a.length=M+L;for(let J=0;J<L;J++)a[M+J]=y[J]}else a.push(y)}}class R{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function S(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var F=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function H(a,f,m){for(const y in a)f.call(m,a[y],y,a)}function b(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function E(a){const f={};for(const m in a)f[m]=a[m];return f}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,f){let m,y;for(let M=1;M<arguments.length;M++){y=arguments[M];for(m in y)a[m]=y[m];for(let L=0;L<w.length;L++)m=w[L],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function k(a){var f=1;a=a.split(":");const m=[];for(;0<f&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=zt;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class $e{constructor(){this.h=this.g=null}add(f,m){const y=ot.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var ot=new R(()=>new Ke,a=>a.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Te=!1,zt=new $e,fn=()=>{const a=l.Promise.resolve(void 0);Ce=()=>{a.then(Xt)}};var Xt=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(m){C(m)}var f=ot;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}Te=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Er=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,f),l.removeEventListener("test",m,f)}catch{}return a}();function An(a,f){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(F){e:{try{x(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&An.aa.h.call(this)}}D(An,Qe);var $t={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),re=0;function ne(a,f,m,y,M){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=M,this.key=++re,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function De(a){this.src=a,this.g={},this.h=0}De.prototype.add=function(a,f,m,y,M){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var J=A(a,f,y,M);return-1<J?(f=a[J],m||(f.fa=!1)):(f=new ne(f,this.src,L,!!y,M),f.fa=m,a.push(f)),f};function T(a,f){var m=f.type;if(m in a.g){var y=a.g[m],M=Array.prototype.indexOf.call(y,f,void 0),L;(L=0<=M)&&Array.prototype.splice.call(y,M,1),L&&(oe(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function A(a,f,m,y){for(var M=0;M<a.length;++M){var L=a[M];if(!L.da&&L.listener==f&&L.capture==!!m&&L.ha==y)return M}return-1}var V="closure_lm_"+(1e6*Math.random()|0),U={};function z(a,f,m,y,M){if(Array.isArray(f)){for(var L=0;L<f.length;L++)z(a,f[L],m,y,M);return null}return m=ge(m),a&&a[$]?a.K(f,m,u(y)?!!y.capture:!1,M):j(a,f,m,!1,y,M)}function j(a,f,m,y,M,L){if(!f)throw Error("Invalid event type");var J=u(M)?!!M.capture:!!M,Ue=ee(a);if(Ue||(a[V]=Ue=new De(a)),m=Ue.add(f,m,y,J,L),m.proxy)return m;if(y=te(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)Er||(M=J),M===void 0&&(M=!1),a.addEventListener(f.toString(),y,M);else if(a.attachEvent)a.attachEvent(W(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function te(){function a(m){return f.call(a.src,a.listener,m)}const f=ce;return a}function X(a,f,m,y,M){if(Array.isArray(f))for(var L=0;L<f.length;L++)X(a,f[L],m,y,M);else y=u(y)?!!y.capture:!!y,m=ge(m),a&&a[$]?(a=a.i,f=String(f).toString(),f in a.g&&(L=a.g[f],m=A(L,m,y,M),-1<m&&(oe(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete a.g[f],a.h--)))):a&&(a=ee(a))&&(f=a.g[f.toString()],a=-1,f&&(a=A(f,m,y,M)),(m=-1<a?f[a]:null)&&Y(m))}function Y(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[$])T(f.i,a);else{var m=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(m,y,a.capture):f.detachEvent?f.detachEvent(W(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=ee(f))?(T(m,a),m.h==0&&(m.src=null,f[V]=null)):oe(a)}}}function W(a){return a in U?U[a]:U[a]="on"+a}function ce(a,f){if(a.da)a=!0;else{f=new An(f,this);var m=a.listener,y=a.ha||a.src;a.fa&&Y(a),a=m.call(y,f)}return a}function ee(a){return a=a[V],a instanceof De?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(f){return a.handleEvent(f)}),a[ae])}function de(){Ye.call(this),this.i=new De(this),this.M=this,this.F=null}D(de,Ye),de.prototype[$]=!0,de.prototype.removeEventListener=function(a,f,m,y){X(this,a,f,m,y)};function be(a,f){var m,y=a.F;if(y)for(m=[];y;y=y.F)m.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new Qe(f,a);else if(f instanceof Qe)f.target=f.target||a;else{var M=f;f=new Qe(y,a),P(f,M)}if(M=!0,m)for(var L=m.length-1;0<=L;L--){var J=f.g=m[L];M=Pe(J,y,!0,f)&&M}if(J=f.g=a,M=Pe(J,y,!0,f)&&M,M=Pe(J,y,!1,f)&&M,m)for(L=0;L<m.length;L++)J=f.g=m[L],M=Pe(J,y,!1,f)&&M}de.prototype.N=function(){if(de.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var m=a.g[f],y=0;y<m.length;y++)oe(m[y]);delete a.g[f],a.h--}}this.F=null},de.prototype.K=function(a,f,m,y){return this.i.add(String(a),f,!1,m,y)},de.prototype.L=function(a,f,m,y){return this.i.add(String(a),f,!0,m,y)};function Pe(a,f,m,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,L=0;L<f.length;++L){var J=f[L];if(J&&!J.da&&J.capture==m){var Ue=J.listener,gt=J.ha||J.src;J.fa&&T(a.i,J),M=Ue.call(gt,y)!==!1&&M}}return M&&!y.defaultPrevented}function dt(a,f,m){if(typeof a=="function")m&&(a=g(a,m));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function pt(a){a.g=dt(()=>{a.g=null,a.i&&(a.i=!1,pt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Jt extends Ye{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:pt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(a){Ye.call(this),this.h=a,this.g={}}D(Et,Ye);var wr=[];function Pi(a){H(a.g,function(f,m){this.g.hasOwnProperty(m)&&Y(f)},a),a.g={}}Et.prototype.N=function(){Et.aa.N.call(this),Pi(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mt=l.JSON.stringify,Zt=l.JSON.parse,ha=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ls(){}Ls.prototype.h=null;function rd(a){return a.h||(a.h=a.i())}function sd(){}var ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rc(){Qe.call(this,"d")}D(Rc,Qe);function Cc(){Qe.call(this,"c")}D(Cc,Qe);var rs={},id=null;function fa(){return id=id||new de}rs.La="serverreachability";function od(a){Qe.call(this,rs.La,a)}D(od,Qe);function Ni(a){const f=fa();be(f,new od(f))}rs.STAT_EVENT="statevent";function ad(a,f){Qe.call(this,rs.STAT_EVENT,a),this.stat=f}D(ad,Qe);function Ot(a){const f=fa();be(f,new ad(f,a))}rs.Ma="timingevent";function ld(a,f){Qe.call(this,rs.Ma,a),this.size=f}D(ld,Qe);function Di(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function Wb(a,f,m,y,M,L){a.info(function(){if(a.g)if(L)for(var J="",Ue=L.split("&"),gt=0;gt<Ue.length;gt++){var xe=Ue[gt].split("=");if(1<xe.length){var wt=xe[0];xe=xe[1];var Tt=wt.split("_");J=2<=Tt.length&&Tt[1]=="type"?J+(wt+"="+xe+"&"):J+(wt+"=redacted&")}}else J=null;else J=L;return"XMLHTTP REQ ("+y+") [attempt "+M+"]: "+f+`
`+m+`
`+J})}function Gb(a,f,m,y,M,L,J){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+M+"]: "+f+`
`+m+`
`+L+" "+J})}function Fs(a,f,m,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Yb(a,m)+(y?" "+y:"")})}function Kb(a,f){a.info(function(){return"TIMEOUT: "+f})}xi.prototype.info=function(){};function Yb(a,f){if(!a.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var y=m[a];if(!(2>y.length)){var M=y[1];if(Array.isArray(M)&&!(1>M.length)){var L=M[0];if(L!="noop"&&L!="stop"&&L!="close")for(var J=1;J<M.length;J++)M[J]=""}}}}return mt(m)}catch{return f}}var da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function pa(){}D(pa,Ls),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},Pc=new pa;function Tr(a,f,m,y){this.j=a,this.i=f,this.l=m,this.R=y||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ud}function ud(){this.i=null,this.g="",this.h=!1}var hd={},kc={};function Nc(a,f,m){a.L=1,a.v=ya(Wn(f)),a.m=m,a.P=!0,fd(a,null)}function fd(a,f){a.F=Date.now(),ma(a),a.A=Wn(a.v);var m=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Sd(m.i,"t",y),a.C=0,m=a.j.J,a.h=new ud,a.g=qd(a.j,m?f:null,!a.m),0<a.O&&(a.M=new Jt(g(a.Y,a,a.g),a.O)),f=a.U,m=a.g,y=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(wr[0]=M.toString()),M=wr);for(var L=0;L<M.length;L++){var J=z(m,M[L],y||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Ni(),Wb(a.i,a.u,a.A,a.l,a.R,a.m)}Tr.prototype.ca=function(a){a=a.target;const f=this.M;f&&Gn(a)==3?f.j():this.Y(a)},Tr.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Gn(this.g);var f=this.g.Ba();const js=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||xd(this.g)))){this.J||Tt!=4||f==7||(f==8||0>=js?Ni(3):Ni(2)),Dc(this);var m=this.g.Z();this.X=m;t:if(dd(this)){var y=xd(this.g);a="";var M=y.length,L=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ss(this),Oi(this);var J="";break t}this.h.i=new l.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,a+=this.h.i.decode(y[f],{stream:!(L&&f==M-1)});y.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=m==200,Gb(this.i,this.u,this.A,this.l,this.R,Tt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,gt=this.g;if((Ue=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(Ue)){var xe=Ue;break t}}xe=null}if(m=xe)Fs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xc(this,m);else{this.o=!1,this.s=3,Ot(12),ss(this),Oi(this);break e}}if(this.P){m=!0;let dn;for(;!this.J&&this.C<J.length;)if(dn=Qb(this,J),dn==kc){Tt==4&&(this.s=4,Ot(14),m=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==hd){this.s=4,Ot(15),Fs(this.i,this.l,J,"[Invalid Chunk]"),m=!1;break}else Fs(this.i,this.l,dn,null),xc(this,dn);if(dd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||J.length!=0||this.h.h||(this.s=1,Ot(16),m=!1),this.o=this.o&&m,!m)Fs(this.i,this.l,J,"[Invalid Chunked Response]"),ss(this),Oi(this);else if(0<J.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),$c(wt),wt.M=!0,Ot(11))}}else Fs(this.i,this.l,J,null),xc(this,J);Tt==4&&ss(this),this.o&&!this.J&&(Tt==4?Ud(this.j,this):(this.o=!1,ma(this)))}else dE(this.g),m==400&&0<J.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),ss(this),Oi(this)}}}catch{}finally{}};function dd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Qb(a,f){var m=a.C,y=f.indexOf(`
`,m);return y==-1?kc:(m=Number(f.substring(m,y)),isNaN(m)?hd:(y+=1,y+m>f.length?kc:(f=f.slice(y,y+m),a.C=y+m,f)))}Tr.prototype.cancel=function(){this.J=!0,ss(this)};function ma(a){a.S=Date.now()+a.I,pd(a,a.I)}function pd(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Di(g(a.ba,a),f)}function Dc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Kb(this.i,this.A),this.L!=2&&(Ni(),Ot(17)),ss(this),this.s=2,Oi(this)):pd(this,this.S-a)};function Oi(a){a.j.G==0||a.J||Ud(a.j,a)}function ss(a){Dc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Pi(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function xc(a,f){try{var m=a.j;if(m.G!=0&&(m.g==a||Oc(m.h,a))){if(!a.K&&Oc(m.h,a)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var M=y;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Ia(m),wa(m);else break e;Fc(m),Ot(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=Di(g(m.Za,m),6e3));if(1>=vd(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else os(m,11)}else if((a.K||m.g==a)&&Ia(m),!S(f))for(M=m.Da.g.parse(f),f=0;f<M.length;f++){let xe=M[f];if(m.T=xe[0],xe=xe[1],m.G==2)if(xe[0]=="c"){m.K=xe[1],m.ia=xe[2];const wt=xe[3];wt!=null&&(m.la=wt,m.j.info("VER="+m.la));const Tt=xe[4];Tt!=null&&(m.Aa=Tt,m.j.info("SVER="+m.Aa));const js=xe[5];js!=null&&typeof js=="number"&&0<js&&(y=1.5*js,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const dn=a.g;if(dn){const Sa=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var L=y.h;L.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Vc(L,L.h),L.h=null))}if(y.D){const Uc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(y.ya=Uc,qe(y.I,y.D,Uc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var J=a;if(y.qa=zd(y,y.J?y.ia:null,y.W),J.K){yd(y.h,J);var Ue=J,gt=y.L;gt&&(Ue.I=gt),Ue.B&&(Dc(Ue),ma(Ue)),y.g=J}else Fd(y);0<m.i.length&&Ta(m)}else xe[0]!="stop"&&xe[0]!="close"||os(m,7);else m.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?os(m,7):Lc(m):xe[0]!="noop"&&m.l&&m.l.ta(xe),m.v=0)}}Ni(4)}catch{}}var Xb=class{constructor(a,f){this.g=a,this.map=f}};function md(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vd(a){return a.h?1:a.g?a.g.size:0}function Oc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Vc(a,f){a.g?a.g.add(f):a.h=f}function yd(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}md.prototype.cancel=function(){if(this.i=_d(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _d(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.D);return f}return N(a.i)}function Jb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],m=a.length,y=0;y<m;y++)f.push(a[y]);return f}f=[],m=0;for(y in a)f[m++]=a[y];return f}function Zb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var m=0;m<a;m++)f.push(m);return f}f=[],m=0;for(const y in a)f[m++]=y;return f}}}function bd(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var m=Zb(a),y=Jb(a),M=y.length,L=0;L<M;L++)f.call(void 0,y[L],m&&m[L],a)}var Ed=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eE(a,f){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var y=a[m].indexOf("="),M=null;if(0<=y){var L=a[m].substring(0,y);M=a[m].substring(y+1)}else L=a[m];f(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function is(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof is){this.h=a.h,ga(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var f=a.i,m=new Li;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),wd(this,m),this.m=a.m}else a&&(f=String(a).match(Ed))?(this.h=!1,ga(this,f[1]||"",!0),this.o=Vi(f[2]||""),this.g=Vi(f[3]||"",!0),va(this,f[4]),this.l=Vi(f[5]||"",!0),wd(this,f[6]||"",!0),this.m=Vi(f[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}is.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Mi(f,Td,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Mi(f,Td,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Mi(m,m.charAt(0)=="/"?rE:nE,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Mi(m,iE)),a.join("")};function Wn(a){return new is(a)}function ga(a,f,m){a.j=m?Vi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function wd(a,f,m){f instanceof Li?(a.i=f,oE(a.i,a.h)):(m||(f=Mi(f,sE)),a.i=new Li(f,a.h))}function qe(a,f,m){a.i.set(f,m)}function ya(a){return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Vi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Mi(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,tE),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function tE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Td=/[#\/\?@]/g,nE=/[#\?:]/g,rE=/[#\?]/g,sE=/[#\?@]/g,iE=/#/g;function Li(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Ir(a){a.g||(a.g=new Map,a.h=0,a.i&&eE(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Li.prototype,t.add=function(a,f){Ir(this),this.i=null,a=$s(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function Id(a,f){Ir(a),f=$s(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Ad(a,f){return Ir(a),f=$s(a,f),a.g.has(f)}t.forEach=function(a,f){Ir(this),this.g.forEach(function(m,y){m.forEach(function(M){a.call(f,M,y,this)},this)},this)},t.na=function(){Ir(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const M=a[y];for(let L=0;L<M.length;L++)m.push(f[y])}return m},t.V=function(a){Ir(this);let f=[];if(typeof a=="string")Ad(this,a)&&(f=f.concat(this.g.get($s(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)f=f.concat(a[m])}return f},t.set=function(a,f){return Ir(this),this.i=null,a=$s(this,a),Ad(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Sd(a,f,m){Id(a,f),0<m.length&&(a.i=null,a.g.set($s(a,f),N(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const L=encodeURIComponent(String(y)),J=this.V(y);for(y=0;y<J.length;y++){var M=L;J[y]!==""&&(M+="="+encodeURIComponent(String(J[y]))),a.push(M)}}return this.i=a.join("&")};function $s(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function oE(a,f){f&&!a.j&&(Ir(a),a.i=null,a.g.forEach(function(m,y){var M=y.toLowerCase();y!=M&&(Id(this,y),Sd(this,M,m))},a)),a.j=f}function aE(a,f){const m=new xi;if(l.Image){const y=new Image;y.onload=v(Ar,m,"TestLoadImage: loaded",!0,f,y),y.onerror=v(Ar,m,"TestLoadImage: error",!1,f,y),y.onabort=v(Ar,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=v(Ar,m,"TestLoadImage: timeout",!1,f,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function lE(a,f){const m=new xi,y=new AbortController,M=setTimeout(()=>{y.abort(),Ar(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(M),L.ok?Ar(m,"TestPingServer: ok",!0,f):Ar(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Ar(m,"TestPingServer: error",!1,f)})}function Ar(a,f,m,y,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),y(m)}catch{}}function cE(){this.g=new ha}function uE(a,f,m){const y=m||"";try{bd(a,function(M,L){let J=M;u(M)&&(J=mt(M)),f.push(y+L+"="+encodeURIComponent(J))})}catch(M){throw f.push(y+"type="+encodeURIComponent("_badmap")),M}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}D(_a,Ls),_a.prototype.g=function(){return new ba(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function ba(a,f){de.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ba,de),t=ba.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,$i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Fi(this):$i(this),this.readyState==3&&Rd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fi(this))},t.Qa=function(a){this.g&&(this.response=a,Fi(this))},t.ga=function(){this.g&&Fi(this)};function Fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$i(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function $i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cd(a){let f="";return H(a,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function Mc(a,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Cd(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):qe(a,f,m))}function et(a){de.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(et,de);var hE=/^https?$/i,fE=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?rd(this.o):rd(Pc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){Pd(this,L);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var M in y)m.set(M,y[M]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),M=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fE,f,void 0))||y||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,J]of m)this.g.setRequestHeader(L,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dd(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Pd(this,L)}};function Pd(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,kd(a),Ea(a)}function kd(a){a.A||(a.A=!0,be(a,"complete"),be(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,be(this,"complete"),be(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Nd(this):this.bb())},t.bb=function(){Nd(this)};function Nd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Gn(a)!=4||a.Z()!=2)){if(a.u&&Gn(a)==4)dt(a.Ea,0,a);else if(be(a,"readystatechange"),Gn(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=J===0){var M=String(a.D).match(Ed)[1]||null;!M&&l.self&&l.self.location&&(M=l.self.location.protocol.slice(0,-1)),y=!hE.test(M?M.toLowerCase():"")}m=y}if(m)be(a,"complete"),be(a,"success");else{a.m=6;try{var L=2<Gn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",kd(a)}}finally{Ea(a)}}}}function Ea(a,f){if(a.g){Dd(a);const m=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||be(a,"ready");try{m.onreadystatechange=y}catch{}}}function Dd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Zt(f)}};function xd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dE(a){const f={};a=(a.g&&2<=Gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(S(a[y]))continue;var m=k(a[y]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=f[M]||[];f[M]=L,L.push(m)}b(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function Od(a){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,a),this.cb=Ui("retryDelaySeedMs",1e4,a),this.Wa=Ui("forwardChannelMaxRetries",2,a),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new md(a&&a.concurrentRequestLimit),this.Da=new cE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Od.prototype,t.la=8,t.G=1,t.connect=function(a,f,m,y){Ot(0),this.W=a,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=zd(this,null,this.W),Ta(this)};function Lc(a){if(Vd(a),a.G==3){var f=a.U++,m=Wn(a.I);if(qe(m,"SID",a.K),qe(m,"RID",f),qe(m,"TYPE","terminate"),ji(a,m),f=new Tr(a,a.j,f),f.L=2,f.v=ya(Wn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=f.v,m=!0),m||(f.g=qd(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ma(f)}Bd(a)}function wa(a){a.g&&($c(a),a.g.cancel(),a.g=null)}function Vd(a){wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ta(a){if(!gd(a.h)&&!a.s){a.s=!0;var f=a.Ga;Ce||fn(),Te||(Ce(),Te=!0),zt.add(f,a),a.B=0}}function pE(a,f){return vd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Di(g(a.Ga,a,f),jd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new Tr(this,this.j,a);let L=this.o;if(this.S&&(L?(L=E(L),P(L,this.S)):L=this.S),this.m!==null||this.O||(M.H=L,L=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Ld(this,M,f),m=Wn(this.I),qe(m,"RID",a),qe(m,"CVER",22),this.D&&qe(m,"X-HTTP-Session-Id",this.D),ji(this,m),L&&(this.O?f="headers="+encodeURIComponent(String(Cd(L)))+"&"+f:this.m&&Mc(m,this.m,L)),Vc(this.h,M),this.Ua&&qe(m,"TYPE","init"),this.P?(qe(m,"$req",f),qe(m,"SID","null"),M.T=!0,Nc(M,m,null)):Nc(M,m,f),this.G=2}}else this.G==3&&(a?Md(this,a):this.i.length==0||gd(this.h)||Md(this))};function Md(a,f){var m;f?m=f.l:m=a.U++;const y=Wn(a.I);qe(y,"SID",a.K),qe(y,"RID",m),qe(y,"AID",a.T),ji(a,y),a.m&&a.o&&Mc(y,a.m,a.o),m=new Tr(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Ld(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,m),Nc(m,y,f)}function ji(a,f){a.H&&H(a.H,function(m,y){qe(f,y,m)}),a.l&&bd({},function(m,y){qe(f,y,m)})}function Ld(a,f,m){m=Math.min(a.i.length,m);var y=a.l?g(a.l.Na,a.l,a):null;e:{var M=a.i;let L=-1;for(;;){const J=["count="+m];L==-1?0<m?(L=M[0].g,J.push("ofs="+L)):L=0:J.push("ofs="+L);let Ue=!0;for(let gt=0;gt<m;gt++){let xe=M[gt].g;const wt=M[gt].map;if(xe-=L,0>xe)L=Math.max(0,M[gt].g-100),Ue=!1;else try{uE(wt,J,"req"+xe+"_")}catch{y&&y(wt)}}if(Ue){y=J.join("&");break e}}}return a=a.i.splice(0,m),f.D=a,y}function Fd(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Ce||fn(),Te||(Ce(),Te=!0),zt.add(f,a),a.v=0}}function Fc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Di(g(a.Fa,a),jd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,$d(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Di(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),wa(this),$d(this))};function $c(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function $d(a){a.g=new Tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Wn(a.qa);qe(f,"RID","rpc"),qe(f,"SID",a.K),qe(f,"AID",a.T),qe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(f,"TO",a.ja),qe(f,"TYPE","xmlhttp"),ji(a,f),a.m&&a.o&&Mc(f,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=ya(Wn(f)),m.m=null,m.P=!0,fd(m,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),Fc(this),Ot(19))};function Ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ud(a,f){var m=null;if(a.g==f){Ia(a),$c(a),a.g=null;var y=2}else if(Oc(a.h,f))m=f.D,yd(a.h,f),y=1;else return;if(a.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var M=a.B;y=fa(),be(y,new ld(y,m)),Ta(a)}else Fd(a);else if(M=f.s,M==3||M==0&&0<f.X||!(y==1&&pE(a,f)||y==2&&Fc(a)))switch(m&&0<m.length&&(f=a.h,f.i=f.i.concat(m)),M){case 1:os(a,5);break;case 4:os(a,10);break;case 3:os(a,6);break;default:os(a,2)}}}function jd(a,f){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*f}function os(a,f){if(a.j.info("Error code "+f),f==2){var m=g(a.fb,a),y=a.Xa;const M=!y;y=new is(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ga(y,"https"),ya(y),M?aE(y.toString(),m):lE(y.toString(),m)}else Ot(2);a.G=0,a.l&&a.l.sa(f),Bd(a),Vd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Bd(a){if(a.G=0,a.ka=[],a.l){const f=_d(a.h);(f.length!=0||a.i.length!=0)&&(_(a.ka,f),_(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function zd(a,f,m){var y=m instanceof is?Wn(m):new is(m);if(y.g!="")f&&(y.g=f+"."+y.g),va(y,y.s);else{var M=l.location;y=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var L=new is(null);y&&ga(L,y),f&&(L.g=f),M&&va(L,M),m&&(L.l=m),y=L}return m=a.D,f=a.ya,m&&f&&qe(y,m,f),qe(y,"VER",a.la),ji(a,y),y}function qd(a,f,m){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new et(new _a({eb:m})):new et(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hd(){}t=Hd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,f){return new qt(a,f)};function qt(a,f){de.call(this),this.g=new Od(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!S(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!S(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Us(this)}D(qt,de),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Lc(this.g)},qt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=mt(a),a=m);f.i.push(new Xb(f.Ya++,a)),f.G==3&&Ta(f)},qt.prototype.N=function(){this.g.l=null,delete this.j,Lc(this.g),delete this.g,qt.aa.N.call(this)};function Wd(a){Rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}D(Wd,Rc);function Gd(){Cc.call(this),this.status=1}D(Gd,Cc);function Us(a){this.g=a}D(Us,Hd),Us.prototype.ua=function(){be(this.g,"a")},Us.prototype.ta=function(a){be(this.g,new Wd(a))},Us.prototype.sa=function(a){be(this.g,new Gd)},Us.prototype.ra=function(){be(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,W_=function(){return new Aa},H_=function(){return fa()},q_=rs,Ku={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},da.NO_ERROR=0,da.TIMEOUT=8,da.HTTP_ERROR=6,Ya=da,cd.COMPLETE="complete",z_=cd,sd.EventType=ki,ki.OPEN="a",ki.CLOSE="b",ki.ERROR="c",ki.MESSAGE="d",de.prototype.listen=de.prototype.K,Qi=sd,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,B_=et}).apply(typeof Da<"u"?Da:typeof self<"u"?self:typeof window<"u"?window:{});const Pm="@firebase/firestore",km="4.9.0";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let Ii="12.0.0";/**
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
 */const Is=new sc("@firebase/firestore");function Gs(){return Is.logLevel}function se(t,...e){if(Is.logLevel<=Ie.DEBUG){const n=e.map(af);Is.debug(`Firestore (${Ii}): ${t}`,...n)}}function fr(t,...e){if(Is.logLevel<=Ie.ERROR){const n=e.map(af);Is.error(`Firestore (${Ii}): ${t}`,...n)}}function pi(t,...e){if(Is.logLevel<=Ie.WARN){const n=e.map(af);Is.warn(`Firestore (${Ii}): ${t}`,...n)}}function af(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,G_(t,r,n)}function G_(t,e,n){let r=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw fr(r),new Error(r)}function Fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||G_(e,s,r)}function _e(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class K_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class KR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YR{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new K_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class QR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new QR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Nm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Nm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ZR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ZR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Yu(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return lu(s)===lu(i)?Ae(s,i):lu(s)?1:-1}return Ae(t.length,e.length)}const eC=55296,tC=57343;function lu(t){const e=t.charCodeAt(0);return e>=eC&&e<=tC}function mi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Dm="__name__";class Cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=Cn.isNumericId(e),s=Cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Cn.extractNumericId(e).compare(Cn.extractNumericId(n)):Yu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ur.fromString(e.substring(4,e.length-2))}}class Je extends Cn{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const nC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Cn{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return nC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dm}static keyField(){return new _t([Dm])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new le(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new le(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Je.fromString(e))}static fromName(e){return new fe(Je.fromString(e).popFirst(5))}static empty(){return new fe(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Je(e.slice()))}}/**
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
 */function rC(t,e,n){if(!n)throw new le(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,r){if(e===!0&&r===!0)throw new le(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!fe.isDocumentKey(t))throw new le(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function cf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Mo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cf(t);throw new le(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function na(t,e){if(!Y_(t))throw new le(q.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new le(q.INVALID_ARGUMENT,n);return!0}/**
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
 */const Om=-62135596800,Vm=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Vm);return new We(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Om)throw new le(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vm}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(na(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Om;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:it("string",We._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new We(0,0))}static max(){return new ve(new We(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Lo=-1;function iC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new Wr(s,fe.empty(),e)}function oC(t){return new Wr(t.readTime,t.key,Lo)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(ve.min(),fe.empty(),Lo)}static max(){return new Wr(ve.max(),fe.empty(),Lo)}}function aC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const lC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ai(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==lC)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function uC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Si(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lc.ce=-1;/**
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
 */const uf=-1;function cc(t){return t==null}function El(t){return t===0&&1/t==-1/0}function hC(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Q_="";function fC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mm(e)),e=dC(t.get(n),e);return Mm(e)}function dC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Q_:n+="";break;default:n+=i}}return n}function Mm(t){return t+Q_+""}/**
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
 */function Lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fm(this.data.getIterator())}getIteratorFrom(e){return new Fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class Fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new mn([])}unionWith(e){let n=new lt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class J_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new J_("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const pC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=pC.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
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
 */const Z_="server_timestamp",e1="__type__",t1="__previous_value__",n1="__local_write_time__";function hf(t){return(t?.mapValue?.fields||{})[e1]?.stringValue===Z_}function uc(t){const e=t.mapValue.fields[t1];return hf(e)?uc(e):e}function Fo(t){const e=Gr(t.mapValue.fields[n1].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class mC{constructor(e,n,r,s,i,o,l,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const wl="(default)";class $o{constructor(e,n){this.projectId=e,this.database=n||wl}static empty(){return new $o("","")}get isDefaultDatabase(){return this.database===wl}isEqual(e){return e instanceof $o&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const r1="__type__",gC="__max__",Oa={mapValue:{}},s1="__vector__",Tl="value";function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:yC(t)?9007199254740991:vC(t)?10:11:me(28295,{value:t})}function Un(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gr(s.timestampValue),l=Gr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Kr(s.bytesValue).isEqual(Kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),l=rt(i.doubleValue);return o===l?El(o)===El(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Lm(o)!==Lm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Un(o[c],l[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function Uo(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=rt(i.integerValue||i.doubleValue),c=rt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return $m(t.timestampValue,e.timestampValue);case 4:return $m(Fo(t),Fo(e));case 5:return Yu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Kr(i),c=Kr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=Ae(l[u],c[u]);if(h!==0)return h}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(rt(i.latitude),rt(o.latitude));return l!==0?l:Ae(rt(i.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Um(t.arrayValue,e.arrayValue);case 10:return function(i,o){const l=i.fields||{},c=o.fields||{},u=l[Tl]?.arrayValue,h=c[Tl]?.arrayValue,d=Ae(u?.values?.length||0,h?.values?.length||0);return d!==0?d:Um(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Oa.mapValue&&o===Oa.mapValue)return 0;if(i===Oa.mapValue)return 1;if(o===Oa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const g=Yu(c[d],h[d]);if(g!==0)return g;const v=gi(l[c[d]],u[h[d]]);if(v!==0)return v}return Ae(c.length,h.length)}(t.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function $m(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Gr(t),r=Gr(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function Um(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gi(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function vi(t){return Qu(t)}function Qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qu(n.fields[o])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function Qa(t){switch(Yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uc(t);return e?16+Qa(e):16;case 5:return 2*t.stringValue.length;case 6:return Kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return xs(r.fields,(i,o)=>{s+=i.length+Qa(o)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function Xu(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function jm(t){return!!t&&"nullValue"in t}function Bm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xa(t){return!!t&&"mapValue"in t}function vC(t){return(t?.mapValue?.fields||{})[r1]?.stringValue===s1}function go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return{...t}}function yC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gC}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new tn(go(this.value))}}function i1(t){const e=[];return xs(t.fields,(n,r)=>{const s=new _t([n]);if(Xa(r)){const i=i1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mn(e)}/**
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
 */class Ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,ve.min(),ve.min(),ve.min(),tn.empty(),0)}static newFoundDocument(e,n,r,s){return new Ct(e,1,n,ve.min(),r,s,0)}static newNoDocument(e,n){return new Ct(e,2,n,ve.min(),ve.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,ve.min(),ve.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Il{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Al{constructor(e,n="asc"){this.field=e,this.dir=n}}function _C(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class o1{}class at extends o1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new EC(e,n,r):n==="array-contains"?new IC(e,r):n==="in"?new AC(e,r):n==="not-in"?new SC(e,r):n==="array-contains-any"?new RC(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wC(e,r):new TC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gi(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends o1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new jn(e,n)}matches(e){return a1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function a1(t){return t.op==="and"}function l1(t){return bC(t)&&a1(t)}function bC(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Ju(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(l1(t))return t.filters.map(e=>Ju(e)).join(",");{const e=t.filters.map(n=>Ju(n)).join(",");return`${t.op}(${e})`}}function c1(t,e){return t instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&Un(r.value,s.value)}(t,e):t instanceof jn?function(r,s){return s instanceof jn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&c1(o,s.filters[l]),!0):!1}(t,e):void me(19439)}function u1(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${vi(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(u1).join(" ,")+"}"}(t):"Filter"}class EC extends at{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class wC extends at{constructor(e,n){super(e,"in",n),this.keys=h1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TC extends at{constructor(e,n){super(e,"not-in",n),this.keys=h1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function h1(t,e){return(e.arrayValue?.values||[]).map(n=>fe.fromName(n.referenceValue))}class IC extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&Uo(n.arrayValue,this.value)}}class AC extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Uo(this.value.arrayValue,n)}}class SC extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Uo(this.value.arrayValue,n)}}class RC extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Uo(this.value.arrayValue,r))}}/**
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
 */class CC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Hm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new CC(t,e,n,r,s,i,o)}function df(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ju(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),e.Te=n}return e.Te}function pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_C(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qm(t.startAt,e.startAt)&&qm(t.endAt,e.endAt)}function Zu(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class hc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PC(t,e,n,r,s,i,o,l){return new hc(t,e,n,r,s,i,o,l)}function mf(t){return new hc(t)}function Wm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kC(t){return t.collectionGroup!==null}function vo(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Al(i,r))}),n.has(_t.keyField().canonicalString())||e.Ie.push(new Al(_t.keyField(),r))}return e.Ie}function Vn(t){const e=_e(t);return e.Ee||(e.Ee=NC(e,vo(t))),e.Ee}function NC(t,e){if(t.limitType==="F")return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Al(s.field,i)});const n=t.endAt?new Il(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Il(t.startAt.position,t.startAt.inclusive):null;return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function eh(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fc(t,e){return pf(Vn(t),Vn(e))&&t.limitType===e.limitType}function f1(t){return`${df(Vn(t))}|lt:${t.limitType}`}function Ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>u1(s)).join(", ")}]`),cc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>vi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>vi(s)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of vo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=zm(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,vo(r),s)||r.endAt&&!function(o,l,c){const u=zm(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,vo(r),s))}(t,e)}function DC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function d1(t){return(e,n)=>{let r=!1;for(const s of vo(t)){const i=xC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xC(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?gi(c,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return X_(this.inner)}size(){return this.innerSize}}/**
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
 */const OC=new Ze(fe.comparator);function dr(){return OC}const p1=new Ze(fe.comparator);function Xi(...t){let e=p1;for(const n of t)e=e.insert(n.key,n);return e}function m1(t){let e=p1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ms(){return yo()}function g1(){return yo()}function yo(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const VC=new Ze(fe.comparator),MC=new lt(fe.comparator);function Se(...t){let e=MC;for(const n of t)e=e.add(n);return e}const LC=new lt(Ae);function FC(){return LC}/**
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
 */function gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function v1(t){return{integerValue:""+t}}function $C(t,e){return hC(e)?v1(e):gf(t,e)}/**
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
 */class pc{constructor(){this._=void 0}}function UC(t,e,n){return t instanceof jo?function(s,i){const o={fields:{[e1]:{stringValue:Z_},[n1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hf(i)&&(i=uc(i)),i&&(o.fields[t1]=i),{mapValue:o}}(n,e):t instanceof Bo?_1(t,e):t instanceof zo?b1(t,e):function(s,i){const o=y1(s,i),l=Gm(o)+Gm(s.Ae);return Xu(o)&&Xu(s.Ae)?v1(l):gf(s.serializer,l)}(t,e)}function jC(t,e,n){return t instanceof Bo?_1(t,e):t instanceof zo?b1(t,e):n}function y1(t,e){return t instanceof Sl?function(r){return Xu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class jo extends pc{}class Bo extends pc{constructor(e){super(),this.elements=e}}function _1(t,e){const n=E1(e);for(const r of t.elements)n.some(s=>Un(s,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends pc{constructor(e){super(),this.elements=e}}function b1(t,e){let n=E1(e);for(const r of t.elements)n=n.filter(s=>!Un(s,r));return{arrayValue:{values:n}}}class Sl extends pc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Gm(t){return rt(t.integerValue||t.doubleValue)}function E1(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class BC{constructor(e,n){this.field=e,this.transform=n}}function zC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Bo&&s instanceof Bo||r instanceof zo&&s instanceof zo?mi(r.elements,s.elements,Un):r instanceof Sl&&s instanceof Sl?Un(r.Ae,s.Ae):r instanceof jo&&s instanceof jo}(t.transform,e.transform)}class qC{constructor(e,n){this.version=e,this.transformResults=n}}class ar{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ar}static exists(e){return new ar(void 0,e)}static updateTime(e){return new ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function w1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new I1(t.key,ar.none()):new ra(t.key,t.data,ar.none());{const n=t.data,r=tn.empty();let s=new lt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vs(t.key,r,new mn(s.toArray()),ar.none())}}function HC(t,e,n){t instanceof ra?function(s,i,o){const l=s.value.clone(),c=Ym(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Vs?function(s,i,o){if(!Ja(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ym(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(T1(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof ra?function(i,o,l,c){if(!Ja(i.precondition,o))return l;const u=i.value.clone(),h=Qm(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vs?function(i,o,l,c){if(!Ja(i.precondition,o))return l;const u=Qm(i.fieldTransforms,c,o),h=o.data;return h.setAll(T1(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,l){return Ja(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function WC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=y1(r.transform,s||null);i!=null&&(n===null&&(n=tn.empty()),n.set(r.field,i))}return n||null}function Km(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mi(r,s,(i,o)=>zC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vs extends mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ym(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,jC(o,l,n[s]))}return r}function Qm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,UC(i,o,e))}return r}class I1 extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GC extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=g1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=w1(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>Km(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>Km(n,r))}}class vf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return VC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vf(e,n,r,s)}}/**
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
 */class YC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,ke;function XC(t){switch(t){case q.OK:return me(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function A1(t){if(t===void 0)return fr("GRPC error has no .code"),q.UNKNOWN;switch(t){case st.OK:return q.OK;case st.CANCELLED:return q.CANCELLED;case st.UNKNOWN:return q.UNKNOWN;case st.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case st.INTERNAL:return q.INTERNAL;case st.UNAVAILABLE:return q.UNAVAILABLE;case st.UNAUTHENTICATED:return q.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case st.NOT_FOUND:return q.NOT_FOUND;case st.ALREADY_EXISTS:return q.ALREADY_EXISTS;case st.PERMISSION_DENIED:return q.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case st.ABORTED:return q.ABORTED;case st.OUT_OF_RANGE:return q.OUT_OF_RANGE;case st.UNIMPLEMENTED:return q.UNIMPLEMENTED;case st.DATA_LOSS:return q.DATA_LOSS;default:return me(39323,{code:t})}}(ke=st||(st={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JC(){return new TextEncoder}/**
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
 */const ZC=new Ur([4294967295,4294967295],0);function Xm(t){const e=JC().encode(t),n=new j_;return n.update(e),new Uint8Array(n.digest())}function Jm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class yf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ji(`Invalid padding: ${n}`);if(r<0)throw new Ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ur.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(ZC)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Xm(e),[r,s]=Jm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Xm(e),[r,s]=Jm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(ve.min(),s,new Ze(Ae),dr(),Se())}}class sa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sa(r,n,Se(),Se(),Se())}}/**
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
 */class Za{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class S1{constructor(e,n){this.targetId=e,this.Ce=n}}class R1{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zm{constructor(){this.ve=0,this.Fe=eg(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),n=Se(),r=Se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me(38017,{changeType:i})}}),new sa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=eg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eP{constructor(e){this.Ge=e,this.ze=new Map,this.je=dr(),this.Je=Va(),this.He=Va(),this.Ye=new Ze(Ae)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Zu(i))if(r===0){const o=new fe(i.path);this.et(n,o,Ct.newNoDocument(o,ve.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Kr(r).toUint8Array()}catch(c){if(c instanceof J_)return pi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new yf(o,s,i)}catch(c){return pi(c instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Zu(l.target)){const c=new fe(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Ct.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Se();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new gc(e,n,this.Ye,this.je,r);return this.je=dr(),this.Je=Va(),this.He=Va(),this.Ye=new Ze(Ae),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Zm,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new lt(Ae),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new lt(Ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zm),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Va(){return new Ze(fe.comparator)}function eg(){return new Ze(fe.comparator)}const tP={asc:"ASCENDING",desc:"DESCENDING"},nP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rP={and:"AND",or:"OR"};class sP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function th(t,e){return t.useProto3Json||cc(e)?e:{value:e}}function Rl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iP(t,e){return Rl(t,e.toTimestamp())}function Mn(t){return Fe(!!t,49232),ve.fromTimestamp(function(n){const r=Gr(n);return new We(r.seconds,r.nanos)}(t))}function _f(t,e){return nh(t,e).canonicalString()}function nh(t,e){const n=function(s){return new Je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P1(t){const e=Je.fromString(t);return Fe(O1(e),10190,{key:e.toString()}),e}function rh(t,e){return _f(t.databaseId,e.path)}function cu(t,e){const n=P1(e);if(n.get(1)!==t.databaseId.projectId)throw new le(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(N1(n))}function k1(t,e){return _f(t.databaseId,e)}function oP(t){const e=P1(t);return e.length===4?Je.emptyPath():N1(e)}function sh(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function N1(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tg(t,e,n){return{name:rh(t,e),fields:n.value.mapValue.fields}}function aP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Fe(h===void 0||typeof h=="string",58123),bt.fromBase64String(h||"")):(Fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const h=u.code===void 0?q.UNKNOWN:A1(u.code);return new le(h,u.message||"")}(o);n=new R1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cu(t,r.document.name),i=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):ve.min(),l=new tn({mapValue:{fields:r.document.fields}}),c=Ct.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Za(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cu(t,r.document),i=r.readTime?Mn(r.readTime):ve.min(),o=Ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Za([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cu(t,r.document),i=r.removedTargetIds||[];n=new Za([],i,s,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new QC(s,i),l=r.targetId;n=new S1(l,o)}}return n}function lP(t,e){let n;if(e instanceof ra)n={update:tg(t,e.key,e.value)};else if(e instanceof I1)n={delete:rh(t,e.key)};else if(e instanceof Vs)n={update:tg(t,e.key,e.data),updateMask:vP(e.fieldMask)};else{if(!(e instanceof GC))return me(16599,{Vt:e.type});n={verify:rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function cP(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Mn(s.updateTime):Mn(i);return o.isEqual(ve.min())&&(o=Mn(i)),new qC(o,s.transformResults||[])}(n,e))):[]}function uP(t,e){return{documents:[k1(t,e.path)]}}function hP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k1(t,s);const i=function(u){if(u.length!==0)return x1(jn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Ys(g.field),direction:pP(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=th(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function fP(t){let e=oP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const g=D1(d);return g instanceof jn&&l1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(D){return new Al(Qs(D.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(d){let g;return g=typeof d=="object"?d.value:d,cc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(d){const g=!!d.before,v=d.values||[];return new Il(v,g)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const g=!d.before,v=d.values||[];return new Il(v,g)}(n.endAt)),PC(e,s,o,i,l,"F",c,u)}function dP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function D1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qs(n.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qs(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return at.create(Qs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>D1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function pP(t){return tP[t]}function mP(t){return nP[t]}function gP(t){return rP[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Qs(t){return _t.fromServerFormat(t.fieldPath)}function x1(t){return t instanceof at?function(n){if(n.op==="=="){if(Bm(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(jm(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bm(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(jm(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:mP(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(s=>x1(s));return r.length===1?r[0]:{compositeFilter:{op:gP(n.op),filters:r}}}(t):me(54877,{filter:t})}function vP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function O1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mr{constructor(e,n,r,s,i=ve.min(),o=ve.min(),l=bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yP{constructor(e){this.yt=e}}function _P(t){const e=fP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eh(e,e.limit,"L"):e}/**
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
 */class bP{constructor(){this.Cn=new EP}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Wr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class EP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(Je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(Je.comparator)).toArray()}}/**
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
 */const ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},V1=41943040;class jt{static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(V1,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);/**
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
 */class yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yi(0)}static cr(){return new yi(-1)}}/**
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
 */const rg="LruGarbageCollector",wP=1048576;function sg([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class TP{constructor(e){this.Ir=e,this.buffer=new lt(sg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){se(rg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Si(n)?se(rg,"Ignoring IndexedDB error during garbage collection: ",n):await Ai(n)}await this.Vr(3e5)})}}class AP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(lc.ce);const r=new TP(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(ng)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ng):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,l=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Gs()<=Ie.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function SP(t,e){return new AP(t,e)}/**
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
 */class RP{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,mn.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=ms();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Xi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=dr();const o=yo(),l=function(){return yo()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Vs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),_o(h.mutation,u,h.mutation.getFieldMask(),We.now())):o.set(u.key,mn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>l.set(u,new CP(h,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new Ze((o,l)=>o-l),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||mn.empty();h=l.applyToLocalView(u,h),r.set(c,h);const d=(s.get(l.batchId)||Se()).add(c);s=s.insert(l.batchId,d)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,d=g1();h.forEach(g=>{if(!i.has(g)){const v=w1(n.get(g),r.get(g));v!==null&&d.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(ms());let l=Lo,c=i;return o.next(u=>B.forEach(u,(h,d)=>(l<d.largestBatchId&&(l=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Se())).next(h=>({batchId:l,changes:m1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=Xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Xi();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(d,g){return new hc(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ct.newInvalidDocument(h)))});let l=Xi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&_o(h.mutation,u,mn.empty(),We.now()),dc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class kP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Mn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:_P(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),B.resolve()}}/**
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
 */class NP{constructor(){this.overlays=new Ze(fe.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ms();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=ms(),i=n.length+1,o=new fe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ze((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ms(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=ms(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>l.set(u,h)),!(l.size()>=s)););return B.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YC(n,r));let i=this.qr.get(n);i===void 0&&(i=Se(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class DP{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class bf{constructor(){this.Qr=new lt(ut.$r),this.Ur=new lt(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ut(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new fe(new Je([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new fe(new Je([])),r=new ut(n,e),s=new ut(n,e+1);let i=Se();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return fe.comparator(e.key,n.key)||Ae(e.Yr,n.Yr)}static Kr(e,n){return Ae(e.Yr,n.Yr)||fe.comparator(e.key,n.key)}}/**
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
 */class xP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new lt(ut.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?uf:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(Ae);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const o=new ut(new fe(i),0);let l=new lt(Ae);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Yr)),!0)},o),B.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ut(n,0),s=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class OP{constructor(e){this.ri=e,this.docs=function(){return new Ze(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=dr();const o=n.path,l=new fe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||aC(oC(h),r)<=0||(s.has(h.key)||dc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VP(this)}getSize(e){return B.resolve(this.size)}}class VP extends RP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class MP{constructor(e){this.persistence=e,this.si=new Os(n=>df(n),pf),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new bf,this.targetCount=0,this.ai=yi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class M1{constructor(e,n){this.ui={},this.overlays={},this.ci=new lc(0),this.li=!1,this.li=!0,this.hi=new DP,this.referenceDelegate=e(this),this.Pi=new MP(this),this.indexManager=new bP,this.remoteDocumentCache=function(s){return new OP(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new yP(n),this.Ii=new kP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new xP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new LP(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class LP extends cC{constructor(e){super(),this.currentSequenceNumber=e}}class Ef{constructor(e){this.persistence=e,this.Ri=new bf,this.Vi=null}static mi(e){return new Ef(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const s=fe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Cl{constructor(e,n){this.persistence=e,this.pi=new Os(r=>fC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=SP(this,n)}static mi(e,n){return new Cl(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ve.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qa(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wf(e,n.fromCache,r,s)}}/**
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
 */class FP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $P{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return i2()?8:uC(Dt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new FP;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Gs()<=Ie.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",Ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(Gs()<=Ie.DEBUG&&se("QueryEngine","Query:",Ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Gs()<=Ie.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",Ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):B.resolve())}ys(e,n){if(Wm(n))return B.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=eh(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,eh(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,s){return Wm(n)||s.isEqual(ve.min())?B.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?B.resolve(null):(Gs()<=Ie.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ks(n)),this.vs(e,o,n,iC(s,Lo)).next(l=>l))})}Ds(e,n){let r=new lt(d1(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Gs()<=Ie.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",Ks(n)),this.ps.getDocumentsMatchingQuery(e,n,Wr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Tf="LocalStore",UP=3e8;class jP{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ze(Ae),this.xs=new Os(i=>df(i),pf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function BP(t,e,n,r){return new jP(t,e,n,r)}async function L1(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Se();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function zP(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,h){const d=u.batch,g=d.keys();let v=B.resolve();return g.forEach(D=>{v=v.next(()=>h.getEntry(c,D)).next(N=>{const _=u.docVersions.get(D);Fe(_!==null,48541),N.version.compareTo(_)<0&&(d.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Se();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function F1(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function qP(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((h,d)=>{const g=s.get(d);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,d)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?v=v.withResumeToken(bt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),s=s.insert(d,v),function(N,_,R){return N.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=UP?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(g,v,h)&&l.push(n.Pi.updateTargetData(i,v))});let c=dr(),u=Se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(HP(i,o,e.documentUpdates).next(h=>{c=h.ks,u=h.qs})),!r.isEqual(ve.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(d=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=s,i))}function HP(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=dr();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se(Tf,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:s}})}function WP(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=uf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GP(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ih(t,e,n){const r=_e(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Si(o))throw o;se(Tf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ig(t,e,n){const r=_e(t);let s=ve.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=_e(c),g=d.xs.get(h);return g!==void 0?B.resolve(d.Ms.get(g)):d.Pi.getTargetData(u,h)}(r,o,Vn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?i:Se())).next(l=>(KP(r,DC(e),l),{documents:l,Qs:i})))}function KP(t,e,n){let r=t.Os.get(e)||ve.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class og{constructor(){this.activeTargetIds=FC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YP{constructor(){this.Mo=new og,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new og,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QP{Oo(e){}shutdown(){}}/**
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
 */const ag="ConnectivityMonitor";class lg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){se(ag,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){se(ag,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ma=null;function oh(){return Ma===null?Ma=function(){return 268435456+Math.round(2147483648*Math.random())}():Ma++,"0x"+Ma.toString(16)}/**
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
 */const uu="RestConnection",XP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===wl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=oh(),l=this.zo(e,n.toUriEncodedString());se(uu,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,s,i);const{host:u}=new URL(l),h=ns(u);return this.Jo(e,l,c,r,h).then(d=>(se(uu,`Received RPC '${e}' ${o}: `,d),d),d=>{throw pi(uu,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=XP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class ZP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const It="WebChannelConnection";class e4 extends JP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=oh();return new Promise((l,c)=>{const u=new B_;u.setWithCredentials(!0),u.listenOnce(z_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ya.NO_ERROR:const d=u.getResponseJson();se(It,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),l(d);break;case Ya.TIMEOUT:se(It,`RPC '${e}' ${o} timed out`),c(new le(q.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const g=u.getStatus();if(se(It,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const D=v?.error;if(D&&D.status&&D.message){const N=function(R){const S=R.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(S)>=0?S:q.UNKNOWN}(D.status);c(new le(N,D.message))}else c(new le(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new le(q.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{se(It,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);se(It,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=oh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=W_(),l=H_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");se(It,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=o.createWebChannel(h,c);this.I_(d);let g=!1,v=!1;const D=new ZP({Yo:_=>{v?se(It,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(g||(se(It,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),se(It,`RPC '${e}' stream ${s} sending:`,_),d.send(_))},Zo:()=>d.close()}),N=(_,R,S)=>{_.listen(R,O=>{try{S(O)}catch(x){setTimeout(()=>{throw x},0)}})};return N(d,Qi.EventType.OPEN,()=>{v||(se(It,`RPC '${e}' stream ${s} transport opened.`),D.o_())}),N(d,Qi.EventType.CLOSE,()=>{v||(v=!0,se(It,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(d))}),N(d,Qi.EventType.ERROR,_=>{v||(v=!0,pi(It,`RPC '${e}' stream ${s} transport errored. Name:`,_.name,"Message:",_.message),D.a_(new le(q.UNAVAILABLE,"The operation could not be completed")))}),N(d,Qi.EventType.MESSAGE,_=>{if(!v){const R=_.data[0];Fe(!!R,16349);const S=R,O=S?.error||S[0]?.error;if(O){se(It,`RPC '${e}' stream ${s} received error:`,O);const x=O.status;let F=function(E){const w=st[E];if(w!==void 0)return A1(w)}(x),H=O.message;F===void 0&&(F=q.INTERNAL,H="Unknown error status: "+x+" with message "+O.message),v=!0,D.a_(new le(F,H)),d.close()}else se(It,`RPC '${e}' stream ${s} received:`,R),D.u_(R)}}),N(l,q_.STAT_EVENT,_=>{_.stat===Ku.PROXY?se(It,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===Ku.NOPROXY&&se(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function hu(){return typeof document<"u"?document:null}/**
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
 */function vc(t){return new sP(t,!0)}/**
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
 */class $1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const cg="PersistentStream";class U1{constructor(e,n,r,s,i,o,l,c){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new le(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return se(cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(se(cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t4 extends U1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=aP(this.serializer,e),r=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Mn(o.readTime):ve.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=sh(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Zu(c)?{documents:uP(i,c)}:{query:hP(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=C1(i,o.resumeToken);const u=th(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=Rl(i,o.snapshotVersion.toTimestamp());const u=th(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=dP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=sh(this.serializer),n.removeTarget=e,this.q_(n)}}class n4 extends U1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=cP(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=sh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lP(this.serializer,r))};this.q_(n)}}/**
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
 */class r4{}class s4 extends r4{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new le(q.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,nh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(q.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,nh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(q.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class i4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fr(n),this.aa=!1):se("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const As="RemoteStore";class o4{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ms(this)&&(se(As,"Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.Ea.add(4),await ia(u),u.Ra.set("Unknown"),u.Ea.delete(4),await yc(u)}(this))})}),this.Ra=new i4(r,s)}}async function yc(t){if(Ms(t))for(const e of t.da)await e(!0)}async function ia(t){for(const e of t.da)await e(!1)}function j1(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Rf(n)?Sf(n):Ri(n).O_()&&Af(n,e))}function If(t,e){const n=_e(t),r=Ri(n);n.Ia.delete(e),r.O_()&&B1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ms(n)&&n.Ra.set("Unknown"))}function Af(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).Y_(e)}function B1(t,e){t.Va.Ue(e),Ri(t).Z_(e)}function Sf(t){t.Va=new eP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.Ra.ua()}function Rf(t){return Ms(t)&&!Ri(t).x_()&&t.Ia.size>0}function Ms(t){return _e(t).Ea.size===0}function z1(t){t.Va=void 0}async function a4(t){t.Ra.set("Online")}async function l4(t){t.Ia.forEach((e,n)=>{Af(t,e)})}async function c4(t,e){z1(t),Rf(t)?(t.Ra.ha(e),Sf(t)):t.Ra.set("Unknown")}async function u4(t,e,n){if(t.Ra.set("Online"),e instanceof R1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){se(As,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pl(t,r)}else if(e instanceof Za?t.Va.Ze(e):e instanceof S1?t.Va.st(e):t.Va.tt(e),!n.isEqual(ve.min()))try{const r=await F1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),B1(i,c);const d=new Mr(h.target,c,u,h.sequenceNumber);Af(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){se(As,"Failed to raise snapshot:",r),await Pl(t,r)}}async function Pl(t,e,n){if(!Si(e))throw e;t.Ea.add(1),await ia(t),t.Ra.set("Offline"),n||(n=()=>F1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se(As,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await yc(t)})}function q1(t,e){return e().catch(n=>Pl(t,n,e))}async function _c(t){const e=_e(t),n=Qr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:uf;for(;h4(e);)try{const s=await WP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,f4(e,s)}catch(s){await Pl(e,s)}H1(e)&&W1(e)}function h4(t){return Ms(t)&&t.Ta.length<10}function f4(t,e){t.Ta.push(e);const n=Qr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function H1(t){return Ms(t)&&!Qr(t).x_()&&t.Ta.length>0}function W1(t){Qr(t).start()}async function d4(t){Qr(t).ra()}async function p4(t){const e=Qr(t);for(const n of t.Ta)e.ea(n.mutations)}async function m4(t,e,n){const r=t.Ta.shift(),s=vf.from(r,e,n);await q1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _c(t)}async function g4(t,e){e&&Qr(t).X_&&await async function(r,s){if(function(o){return XC(o)&&o!==q.ABORTED}(s.code)){const i=r.Ta.shift();Qr(r).B_(),await q1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _c(r)}}(t,e),H1(t)&&W1(t)}async function ug(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),se(As,"RemoteStore received new credentials");const r=Ms(n);n.Ea.add(3),await ia(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await yc(n)}async function v4(t,e){const n=_e(t);e?(n.Ea.delete(2),await yc(n)):e||(n.Ea.add(2),await ia(n),n.Ra.set("Unknown"))}function Ri(t){return t.ma||(t.ma=function(n,r,s){const i=_e(n);return i.sa(),new t4(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:a4.bind(null,t),t_:l4.bind(null,t),r_:c4.bind(null,t),H_:u4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Rf(t)?Sf(t):t.Ra.set("Unknown")):(await t.ma.stop(),z1(t))})),t.ma}function Qr(t){return t.fa||(t.fa=function(n,r,s){const i=_e(n);return i.sa(),new n4(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:d4.bind(null,t),r_:g4.bind(null,t),ta:p4.bind(null,t),na:m4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await _c(t)):(await t.fa.stop(),t.Ta.length>0&&(se(As,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Cf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Cf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(t,e){if(fr("AsyncQueue",`${e}: ${t}`),Si(t))return new le(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ai{static emptySet(e){return new ai(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hg{constructor(){this.ga=new Ze(fe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _i(e,n,ai.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class y4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _4{constructor(){this.queries=fg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=fg(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new le(q.ABORTED,"Firestore shutting down"))}}function fg(){return new Os(t=>f1(t),fc)}async function b4(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new y4,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Pf(o,`Initialization of query '${Ks(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&kf(n)}async function E4(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w4(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&kf(n)}function T4(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function kf(t){t.Ca.forEach(e=>{e.next()})}var ah,dg;(dg=ah||(ah={})).Ma="default",dg.Cache="cache";class I4{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ah.Cache}}/**
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
 */class G1{constructor(e){this.key=e}}class K1{constructor(e){this.key=e}}class A4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Se(),this.mutatedKeys=Se(),this.eu=d1(e),this.tu=new ai(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new hg,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const g=s.get(h),v=dc(this.query,d)?d:null,D=!!g&&this.mutatedKeys.has(g.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let _=!1;g&&v?g.data.isEqual(v.data)?D!==N&&(r.track({type:3,doc:v}),_=!0):this.su(g,v)||(r.track({type:2,doc:v}),_=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),_=!0):g&&!v&&(r.track({type:1,doc:g}),_=!0,(c||u)&&(l=!0)),_&&(v?(o=o.add(v),i=N?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,d)=>function(v,D){const N=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:_})}};return N(v)-N(D)}(h.type,d.type)||this.eu(h.doc,d.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Xa.size===0&&this.current&&!s?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new _i(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new K1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new G1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return _i.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Nf="SyncEngine";class S4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class R4{constructor(e){this.key=e,this.hu=!1}}class C4{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Os(l=>f1(l),fc),this.Iu=new Map,this.Eu=new Set,this.du=new Ze(fe.comparator),this.Au=new Map,this.Ru=new bf,this.Vu={},this.mu=new Map,this.fu=yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function P4(t,e,n=!0){const r=e0(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Y1(r,e,n,!0),s}async function k4(t,e){const n=e0(t);await Y1(n,e,!0,!1)}async function Y1(t,e,n,r){const s=await GP(t.localStore,Vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await N4(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&j1(t.remoteStore,s),l}async function N4(t,e,n,r,s){t.pu=(d,g,v)=>async function(N,_,R,S){let O=_.view.ru(R);O.Cs&&(O=await ig(N.localStore,_.query,!1).then(({documents:b})=>_.view.ru(b,O)));const x=S&&S.targetChanges.get(_.targetId),F=S&&S.targetMismatches.get(_.targetId)!=null,H=_.view.applyChanges(O,N.isPrimaryClient,x,F);return mg(N,_.targetId,H.au),H.snapshot}(t,d,g,v);const i=await ig(t.localStore,e,!0),o=new A4(e,i.Qs),l=o.ru(i.documents),c=sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);mg(t,n,u.au);const h=new S4(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function D4(t,e,n){const r=_e(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!fc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ih(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&If(r.remoteStore,s.targetId),lh(r,s.targetId)}).catch(Ai)):(lh(r,s.targetId),await ih(r.localStore,s.targetId,!0))}async function x4(t,e){const n=_e(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),If(n.remoteStore,r.targetId))}async function O4(t,e,n){const r=j4(t);try{const s=await function(o,l){const c=_e(o),u=We.now(),h=l.reduce((v,D)=>v.add(D.key),Se());let d,g;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let D=dr(),N=Se();return c.Ns.getEntries(v,h).next(_=>{D=_,D.forEach((R,S)=>{S.isValidDocument()||(N=N.add(R))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,D)).next(_=>{d=_;const R=[];for(const S of l){const O=WC(S,d.get(S.key).overlayedDocument);O!=null&&R.push(new Vs(S.key,O,i1(O.value.mapValue),ar.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,R,l)}).next(_=>{g=_;const R=_.applyToLocalDocumentSet(d,N);return c.documentOverlayCache.saveOverlays(v,_.batchId,R)})}).then(()=>({batchId:g.batchId,changes:m1(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ze(Ae)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,s.batchId,n),await oa(r,s.changes),await _c(r.remoteStore)}catch(s){const i=Pf(s,"Failed to persist write");n.reject(i)}}async function Q1(t,e){const n=_e(t);try{const r=await qP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Fe(o.hu,14607):s.removedDocuments.size>0&&(Fe(o.hu,42227),o.hu=!1))}),await oa(n,r,e)}catch(r){await Ai(r)}}function pg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=_e(o);c.onlineState=l;let u=!1;c.queries.forEach((h,d)=>{for(const g of d.Sa)g.va(l)&&(u=!0)}),u&&kf(c)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function V4(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ze(fe.comparator);o=o.insert(i,Ct.newNoDocument(i,ve.min()));const l=Se().add(i),c=new gc(ve.min(),new Map,new Ze(Ae),o,l);await Q1(r,c),r.du=r.du.remove(i),r.Au.delete(e),Df(r)}else await ih(r.localStore,e,!1).then(()=>lh(r,e,n)).catch(Ai)}async function M4(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await zP(n.localStore,e);J1(n,r,null),X1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,s)}catch(s){await Ai(s)}}async function L4(t,e,n){const r=_e(t);try{const s=await function(o,l){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next(d=>(Fe(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);J1(r,e,n),X1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,s)}catch(s){await Ai(s)}}function X1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function J1(t,e,n){const r=_e(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Z1(t,r)})}function Z1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(If(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Df(t))}function mg(t,e,n){for(const r of n)r instanceof G1?(t.Ru.addReference(r.key,e),F4(t,r)):r instanceof K1?(se(Nf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Z1(t,r.key)):me(19791,{wu:r})}function F4(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(se(Nf,"New document in limbo: "+n),t.Eu.add(r),Df(t))}function Df(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new fe(Je.fromString(e)),r=t.fu.next();t.Au.set(r,new R4(n)),t.du=t.du.insert(n,r),j1(t.remoteStore,new Mr(Vn(mf(n.path)),r,"TargetPurposeLimboResolution",lc.ce))}}async function oa(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const h=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){s.push(u);const h=wf.As(c.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(c,u){const h=_e(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,g=>B.forEach(g.Es,v=>h.persistence.referenceDelegate.addReference(d,g.targetId,v)).next(()=>B.forEach(g.ds,v=>h.persistence.referenceDelegate.removeReference(d,g.targetId,v)))))}catch(d){if(!Si(d))throw d;se(Tf,"Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const v=h.Ms.get(g),D=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(D);h.Ms=h.Ms.insert(g,N)}}}(r.localStore,i))}async function $4(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){se(Nf,"User change. New user:",e.toKey());const r=await L1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new le(q.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.Ls)}}function U4(t,e){const n=_e(t),r=n.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let s=Se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function e0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Q1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V4.bind(null,e),e.Pu.H_=w4.bind(null,e.eventManager),e.Pu.yu=T4.bind(null,e.eventManager),e}function j4(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=M4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=L4.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return BP(this.persistence,new $P,e.initialUser,this.serializer)}Cu(e){return new M1(Ef.mi,this.serializer)}Du(e){return new YP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class B4 extends kl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Fe(this.persistence.referenceDelegate instanceof Cl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new IP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new M1(r=>Cl.mi(r,n),this.serializer)}}class ch{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$4.bind(null,this.syncEngine),await v4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _4}()}createDatastore(e){const n=vc(e.databaseInfo.databaseId),r=function(i){return new e4(i)}(e.databaseInfo);return function(i,o,l,c){return new s4(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new o4(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>pg(this.syncEngine,n,0),function(){return lg.v()?new lg:new QP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,h){const d=new C4(s,i,o,l,c,u);return h&&(d.gu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=_e(n);se(As,"RemoteStore shutting down."),r.Ea.add(5),await ia(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ch.provider={build:()=>new ch};/**
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
 */class z4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Xr="FirestoreClient";class q4{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{se(Xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(se(Xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),se(Xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await L1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await H4(t);se(Xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ug(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ug(e.remoteStore,s)),t._onlineComponents=e}async function H4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se(Xr,"Using user provided OfflineComponentProvider");try{await fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;pi("Error using user provided cache. Falling back to memory cache: "+n),await fu(t,new kl)}}else se(Xr,"Using default OfflineComponentProvider"),await fu(t,new B4(void 0));return t._offlineComponents}async function t0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se(Xr,"Using user provided OnlineComponentProvider"),await gg(t,t._uninitializedComponentsProvider._online)):(se(Xr,"Using default OnlineComponentProvider"),await gg(t,new ch))),t._onlineComponents}function W4(t){return t0(t).then(e=>e.syncEngine)}async function G4(t){const e=await t0(t),n=e.eventManager;return n.onListen=P4.bind(null,e.syncEngine),n.onUnlisten=D4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=k4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=x4.bind(null,e.syncEngine),n}function K4(t,e,n={}){const r=new jr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const h=new z4({next:g=>{h.Nu(),o.enqueueAndForget(()=>E4(i,d));const v=g.docs.has(l);!v&&g.fromCache?u.reject(new le(q.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?u.reject(new le(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new I4(mf(l.path),h,{includeMetadataChanges:!0,qa:!0});return b4(i,d)}(await G4(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function n0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vg=new Map;/**
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
 */const r0="firestore.googleapis.com",yg=!0;class _g{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=r0,this.ssl=yg}else this.host=e.host,this.ssl=e.ssl??yg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=V1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wP)throw new le(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new le(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new le(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new le(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _g({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _g(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new GR;switch(r.type){case"firstParty":return new XR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vg.get(n);r&&(se("ComponentProvider","Removing Datastore"),vg.delete(n),r.terminate())}(this),Promise.resolve()}}function Y4(t,e,n,r={}){t=Mo(t,xf);const s=ns(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(nc(`https://${l}`),rc("Firestore",!0)),i.host!==r0&&i.host!==l&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Hr(c,o)&&(t._setSettings(c),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=St.MOCK_USER;else{u=Xy(r.mockUserToken,t._app?.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new le(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new St(d)}t._authCredentials=new KR(new K_(u,h))}}/**
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
 */class Of{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Of(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(na(n,ht._jsonSchema))return new ht(e,r||null,new fe(Je.fromString(n.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:it("string",ht._jsonSchemaVersion),referencePath:it("string")};class qo extends Of{constructor(e,n,r){super(e,n,mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new fe(e))}withConverter(e){return new qo(this.firestore,e,this._path)}}function s0(t,e,...n){if(t=ct(t),arguments.length===1&&(e=lf.newId()),rC("doc","path",e),t instanceof xf){const r=Je.fromString(e,...n);return xm(r),new ht(t,null,new fe(r))}{if(!(t instanceof ht||t instanceof qo))throw new le(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return xm(r),new ht(t.firestore,t instanceof qo?t.converter:null,new fe(r))}}/**
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
 */const bg="AsyncQueue";class Eg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $1(this,"async_queue_retry"),this._c=()=>{const r=hu();r&&se(bg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=hu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new jr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Si(e))throw e;se(bg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,fr("INTERNAL UNHANDLED ERROR: ",wg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Cf.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&me(47125,{Pc:wg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function wg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Vf extends xf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Eg,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eg(e),this._firestoreClient=void 0,await e}}}function Q4(t,e){const n=typeof t=="object"?t:Xo(),r=typeof t=="string"?t:wl,s=vr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kh("firestore");i&&Y4(s,...i)}return s}function i0(t){if(t._terminated)throw new le(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||X4(t),t._firestoreClient}function X4(t){const e=t._freezeSettings(),n=function(s,i,o,l){return new mC(s,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,n0(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new q4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
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
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(bt.fromBase64String(e))}catch(n){throw new le(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(na(e,nn._jsonSchema))return nn.fromBase64String(e.bytes)}}nn._jsonSchemaVersion="firestore/bytes/1.0",nn._jsonSchema={type:it("string",nn._jsonSchemaVersion),bytes:it("string")};/**
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
 */class Mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lf{constructor(e){this._methodName=e}}/**
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
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(na(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:it("string",Ln._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
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
 */class Fn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(na(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Fn(e.vectorValues);throw new le(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:it("string",Fn._jsonSchemaVersion),vectorValues:it("object")};/**
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
 */const J4=/^__.*__$/;class Z4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}function o0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:t})}}class Ff{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Nl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(o0(this.Ac)&&J4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ek{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vc(e)}Cc(e,n,r,s=!1){return new Ff({Ac:e,methodName:n,Dc:r,path:_t.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tk(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nk(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);u0("Data must be an object, but it was:",o,r);const l=l0(r,o);let c,u;if(i.merge)c=new mn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const g=rk(e,d,n);if(!o.contains(g))throw new le(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ik(h,g)||h.push(g)}c=new mn(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new Z4(new tn(l),c,u)}class $f extends Lf{_toFieldTransform(e){return new BC(e.path,new jo)}isEqual(e){return e instanceof $f}}function a0(t,e){if(c0(t=ct(t)))return u0("Unsupported field value:",e,t),l0(t,e);if(t instanceof Lf)return function(r,s){if(!o0(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=a0(l,s.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $C(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Rl(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rl(s.serializer,i)}}if(r instanceof Ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:C1(s.serializer,r._byteString)};if(r instanceof ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_f(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fn)return function(o,l){return{mapValue:{fields:{[r1]:{stringValue:s1},[Tl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return gf(l.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${cf(r)}`)}(t,e)}function l0(t,e){const n={};return X_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,s)=>{const i=a0(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function c0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Ln||t instanceof nn||t instanceof ht||t instanceof Lf||t instanceof Fn)}function u0(t,e,n){if(!c0(n)||!Y_(n)){const r=cf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function rk(t,e,n){if((e=ct(e))instanceof Mf)return e._internalPath;if(typeof e=="string")return h0(t,e);throw Nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const sk=new RegExp("[~\\*/\\[\\]]");function h0(t,e,n){if(e.search(sk)>=0)throw Nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mf(...e.split("."))._internalPath}catch{throw Nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new le(q.INVALID_ARGUMENT,l+t+c)}function ik(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class f0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(d0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ok extends f0{data(){return super.data()}}function d0(t,e){return typeof e=="string"?h0(t,e):e instanceof Mf?e._internalPath:e._delegate._internalPath}class ak{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[Tl].arrayValue?.values?.map(r=>rt(r.doubleValue));return new Fn(n)}convertGeoPoint(e){return new Ln(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=uc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);Fe(O1(r),9688,{name:e});const s=new $o(r.get(1),r.get(3)),i=new fe(r.popFirst(5));return s.isEqual(n)||fr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function lk(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends f0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(d0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=_s._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:it("string",_s._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class el extends _s{data(e={}){return super.data(e)}}class bo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new el(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new el(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new el(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:ck(l.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=bo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ck(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}/**
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
 */function uk(t){t=Mo(t,ht);const e=Mo(t.firestore,Vf);return K4(i0(e),t._key).then(n=>pk(e,t,n))}bo._jsonSchemaVersion="firestore/querySnapshot/1.0",bo._jsonSchema={type:it("string",bo._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class hk extends ak{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function fk(t,e,n){t=Mo(t,ht);const r=Mo(t.firestore,Vf),s=lk(t.converter,e);return dk(r,[nk(tk(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ar.none())])}function dk(t,e){return function(r,s){const i=new jr;return r.asyncQueue.enqueueAndForget(async()=>O4(await W4(r),s,i)),i.promise}(i0(t),e)}function pk(t,e,n){const r=n.docs.get(e._key),s=new hk(t);return new _s(t,s,e._key,r,new Zi(n.hasPendingWrites,n.fromCache),e.converter)}function Tg(){return new $f("serverTimestamp")}(function(e,n=!0){(function(s){Ii=s})(Ds),cn(new Yt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Vf(new YR(r.getProvider("auth-internal")),new JR(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(u.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Nt(Pm,km,e),Nt(Pm,km,"esm2020")})();/**
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
 */const p0="functions";/**
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
 */class mk{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ft(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s?.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const uh="us-central1";class gk{constructor(e,n,r,s,i=uh,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new mk(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=uh}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function vk(t,e,n){const r=ns(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(nc(t.emulatorOrigin),rc("Functions",!0))}const Ig="@firebase/functions",Ag="0.13.0";/**
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
 */const yk="auth-internal",_k="app-check-internal",bk="messaging-internal";function Ek(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(yk),o=n.getProvider(bk),l=n.getProvider(_k);return new gk(s,i,o,l,r)};cn(new Yt(p0,e,"PUBLIC").setMultipleInstances(!0)),Nt(Ig,Ag,t),Nt(Ig,Ag,"esm2020")}/**
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
 */function wk(t=Xo(),e=uh){const r=vr(ct(t),p0).getImmediate({identifier:e}),s=Kh("functions");return s&&Tk(r,...s),r}function Tk(t,e,n){vk(ct(t),e,n)}Ek();/**
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
 */const m0="firebasestorage.googleapis.com",Ik="storageBucket",Ak=120*1e3,Sk=600*1e3;/**
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
 */class qn extends hn{constructor(e,n,r=0){super(du(e),`Firebase Storage: ${n} (${du(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Bn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Bn||(Bn={}));function du(t){return"storage/"+t}function Rk(){const t="An unknown error occurred, please check the error payload for server response.";return new qn(Bn.UNKNOWN,t)}function Ck(){return new qn(Bn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pk(){return new qn(Bn.CANCELED,"User canceled the upload/download.")}function kk(t){return new qn(Bn.INVALID_URL,"Invalid URL '"+t+"'.")}function Nk(t){return new qn(Bn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Sg(t){return new qn(Bn.INVALID_ARGUMENT,t)}function g0(){return new qn(Bn.APP_DELETED,"The Firebase app was deleted.")}function Dk(t){return new qn(Bn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw Nk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${d}/${h}/b/${s}/o${g}`,"i"),D={bucket:1,path:3},N=n===m0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",R=new RegExp(`^https?://${N}/${s}/${_}`,"i"),O=[{regex:l,indices:c,postModify:i},{regex:v,indices:D,postModify:u},{regex:R,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<O.length;x++){const F=O[x],H=F.regex.exec(e);if(H){const b=H[F.indices.bucket];let E=H[F.indices.path];E||(E=""),r=new gn(b,E),F.postModify(r);break}}if(r==null)throw kk(e);return r}}class xk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ok(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(..._){u||(u=!0,e.apply(null,_))}function d(_){s=setTimeout(()=>{s=null,t(v,c())},_)}function g(){i&&clearTimeout(i)}function v(_,...R){if(u){g();return}if(_){g(),h.call(null,_,...R);return}if(c()||o){g(),h.call(null,_,...R);return}r<64&&(r*=2);let O;l===1?(l=2,O=0):O=(r+Math.random())*1e3,d(O)}let D=!1;function N(_){D||(D=!0,g(),!u&&(s!==null?(_||(l=2),clearTimeout(s),d(0)):_||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function Vk(t){t(!1)}/**
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
 */function Mk(t){return t!==void 0}function Rg(t,e,n,r){if(r<e)throw Sg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Sg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Lk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Dl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dl||(Dl={}));/**
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
 */function Fk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class $k{constructor(e,n,r,s,i,o,l,c,u,h,d,g=!0,v=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=g,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,N)=>{this.resolve_=D,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new La(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Dl.NO_ERROR,c=i.getStatus();if(!l||Fk(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Dl.ABORT;r(!1,new La(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new La(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Mk(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Rk();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?g0():Pk();o(c)}else{const c=Ck();o(c)}};this.canceled_?n(!1,new La(!1,null,!0)):this.backoffId_=Ok(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class La{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Uk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Bk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qk(t,e,n,r,s,i,o=!0,l=!1){const c=Lk(t.urlParams),u=t.url+c,h=Object.assign({},t.headers);return Bk(h,e),Uk(h,n),jk(h,i),zk(h,r),new $k(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function Hk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Wk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class xl{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xl(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wk(this._location.path)}get storage(){return this._service}get parent(){const e=Hk(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new xl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Dk(e)}}function Cg(t,e){const n=e?.[Ik];return n==null?null:gn.makeFromBucketSpec(n,t)}function Gk(t,e,n,r={}){t.host=`${e}:${n}`;const s=ns(e);s&&(nc(`https://${t.host}/b`),rc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Xy(i,t.app.options.projectId))}class Kk{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=m0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ak,this._maxUploadRetryTime=Sk,this._requests=new Set,s!=null?this._bucket=gn.makeFromBucketSpec(s,this._host):this._bucket=Cg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=Cg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xl(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new xk(g0());{const o=qk(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Pg="@firebase/storage",kg="0.14.0";/**
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
 */const v0="storage";function Yk(t=Xo(),e){t=ct(t);const r=vr(t,v0).getImmediate({identifier:e}),s=Kh("storage");return s&&Qk(r,...s),r}function Qk(t,e,n,r={}){Gk(t,e,n,r)}function Xk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Kk(n,r,s,e,Ds)}function Jk(){cn(new Yt(v0,Xk,"PUBLIC").setMultipleInstances(!0)),Nt(Pg,kg,""),Nt(Pg,kg,"esm2020")}Jk();const y0="@firebase/installations",Uf="0.6.19";/**
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
 */const _0=1e4,b0=`w:${Uf}`,E0="FIS_v2",Zk="https://firebaseinstallations.googleapis.com/v1",e3=3600*1e3,t3="installations",n3="Installations";/**
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
 */const r3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ss=new Ns(t3,n3,r3);function w0(t){return t instanceof hn&&t.code.includes("request-failed")}/**
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
 */function T0({projectId:t}){return`${Zk}/projects/${t}/installations`}function I0(t){return{token:t.token,requestStatus:2,expiresIn:i3(t.expiresIn),creationTime:Date.now()}}async function A0(t,e){const r=(await e.json()).error;return Ss.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function S0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function s3(t,{refreshToken:e}){const n=S0(t);return n.append("Authorization",o3(e)),n}async function R0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function i3(t){return Number(t.replace("s","000"))}function o3(t){return`${E0} ${t}`}/**
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
 */async function a3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=T0(t),s=S0(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:E0,appId:t.appId,sdkVersion:b0},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await R0(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:I0(u.authToken)}}else throw await A0("Create Installation",c)}/**
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
 */function C0(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function l3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const c3=/^[cdef][\w-]{21}$/,hh="";function u3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=h3(t);return c3.test(n)?n:hh}catch{return hh}}function h3(t){return l3(t).substr(0,22)}/**
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
 */function bc(t){return`${t.appName}!${t.appId}`}/**
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
 */const P0=new Map;function k0(t,e){const n=bc(t);N0(n,e),f3(n,e)}function N0(t,e){const n=P0.get(t);if(n)for(const r of n)r(e)}function f3(t,e){const n=d3();n&&n.postMessage({key:t,fid:e}),p3()}let gs=null;function d3(){return!gs&&"BroadcastChannel"in self&&(gs=new BroadcastChannel("[Firebase] FID Change"),gs.onmessage=t=>{N0(t.data.key,t.data.fid)}),gs}function p3(){P0.size===0&&gs&&(gs.close(),gs=null)}/**
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
 */const m3="firebase-installations-database",g3=1,Rs="firebase-installations-store";let pu=null;function jf(){return pu||(pu=r_(m3,g3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rs)}}})),pu}async function Ol(t,e){const n=bc(t),s=(await jf()).transaction(Rs,"readwrite"),i=s.objectStore(Rs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&k0(t,e.fid),e}async function D0(t){const e=bc(t),r=(await jf()).transaction(Rs,"readwrite");await r.objectStore(Rs).delete(e),await r.done}async function Ec(t,e){const n=bc(t),s=(await jf()).transaction(Rs,"readwrite"),i=s.objectStore(Rs),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&k0(t,l.fid),l}/**
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
 */async function Bf(t){let e;const n=await Ec(t.appConfig,r=>{const s=v3(r),i=y3(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===hh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v3(t){const e=t||{fid:u3(),registrationStatus:0};return x0(e)}function y3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ss.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_3(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b3(t)}:{installationEntry:e}}async function _3(t,e){try{const n=await a3(t,e);return Ol(t.appConfig,n)}catch(n){throw w0(n)&&n.customData.serverCode===409?await D0(t.appConfig):await Ol(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function b3(t){let e=await Ng(t.appConfig);for(;e.registrationStatus===1;)await C0(100),e=await Ng(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Bf(t);return r||n}return e}function Ng(t){return Ec(t,e=>{if(!e)throw Ss.create("installation-not-found");return x0(e)})}function x0(t){return E3(t)?{fid:t.fid,registrationStatus:0}:t}function E3(t){return t.registrationStatus===1&&t.registrationTime+_0<Date.now()}/**
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
 */async function w3({appConfig:t,heartbeatServiceProvider:e},n){const r=T3(t,n),s=s3(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:b0,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},c=await R0(()=>fetch(r,l));if(c.ok){const u=await c.json();return I0(u)}else throw await A0("Generate Auth Token",c)}function T3(t,{fid:e}){return`${T0(t)}/${e}/authTokens:generate`}/**
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
 */async function zf(t,e=!1){let n;const r=await Ec(t.appConfig,i=>{if(!O0(i))throw Ss.create("not-registered");const o=i.authToken;if(!e&&S3(o))return i;if(o.requestStatus===1)return n=I3(t,e),i;{if(!navigator.onLine)throw Ss.create("app-offline");const l=C3(i);return n=A3(t,l),l}});return n?await n:r.authToken}async function I3(t,e){let n=await Dg(t.appConfig);for(;n.authToken.requestStatus===1;)await C0(100),n=await Dg(t.appConfig);const r=n.authToken;return r.requestStatus===0?zf(t,e):r}function Dg(t){return Ec(t,e=>{if(!O0(e))throw Ss.create("not-registered");const n=e.authToken;return P3(n)?{...e,authToken:{requestStatus:0}}:e})}async function A3(t,e){try{const n=await w3(t,e),r={...e,authToken:n};return await Ol(t.appConfig,r),n}catch(n){if(w0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await D0(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ol(t.appConfig,r)}throw n}}function O0(t){return t!==void 0&&t.registrationStatus===2}function S3(t){return t.requestStatus===2&&!R3(t)}function R3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+e3}function C3(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function P3(t){return t.requestStatus===1&&t.requestTime+_0<Date.now()}/**
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
 */async function k3(t){const e=t,{installationEntry:n,registrationPromise:r}=await Bf(e);return r?r.catch(console.error):zf(e).catch(console.error),n.fid}/**
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
 */async function N3(t,e=!1){const n=t;return await D3(n),(await zf(n,e)).token}async function D3(t){const{registrationPromise:e}=await Bf(t);e&&await e}/**
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
 */function x3(t){if(!t||!t.options)throw mu("App Configuration");if(!t.name)throw mu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mu(t){return Ss.create("missing-app-config-values",{valueName:t})}/**
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
 */const V0="installations",O3="installations-internal",V3=t=>{const e=t.getProvider("app").getImmediate(),n=x3(e),r=vr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},M3=t=>{const e=t.getProvider("app").getImmediate(),n=vr(e,V0).getImmediate();return{getId:()=>k3(n),getToken:s=>N3(n,s)}};function L3(){cn(new Yt(V0,V3,"PUBLIC")),cn(new Yt(O3,M3,"PRIVATE"))}L3();Nt(y0,Uf);Nt(y0,Uf,"esm2020");/**
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
 */const Vl="analytics",F3="firebase_id",$3="origin",U3=60*1e3,j3="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Bt=new sc("@firebase/analytics");/**
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
 */const B3={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Kt=new Ns("analytics","Analytics",B3);/**
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
 */function z3(t){if(!t.startsWith(qf)){const e=Kt.create("invalid-gtag-resource",{gtagURL:t});return Bt.warn(e.message),""}return t}function M0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function q3(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function H3(t,e){const n=q3("firebase-js-sdk-policy",{createScriptURL:z3}),r=document.createElement("script"),s=`${qf}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function W3(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function G3(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await M0(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(l){Bt.error(l)}t("config",s,i)}async function K3(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const l=await M0(n);for(const c of o){const u=l.find(d=>d.measurementId===c),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Bt.error(i)}}function Y3(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[l,c]=o;await K3(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await G3(t,e,n,r,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){Bt.error(l)}}return s}function Q3(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Y3(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function X3(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(qf)&&n.src.includes(t))return n;return null}/**
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
 */const J3=30,Z3=1e3;class e6{constructor(e={},n=Z3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const L0=new e6;function t6(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function n6(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:t6(n)},s=j3.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const l=await i.json();l.error?.message&&(o=l.error.message)}catch{}throw Kt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function r6(t,e=L0,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Kt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new o6;return setTimeout(async()=>{l.abort()},U3),F0({appId:r,apiKey:s,measurementId:i},o,l,e)}async function F0(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=L0){const{appId:i,measurementId:o}=t;try{await s6(r,e)}catch(l){if(o)return Bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw l}try{const l=await n6(t);return s.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!i6(c)){if(s.deleteThrottleMetadata(i),o)return Bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?em(n,s.intervalMillis,J3):em(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(i,h),Bt.debug(`Calling attemptFetch again in ${u} millis`),F0(t,h,r,s)}}function s6(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function i6(t){if(!(t instanceof hn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class o6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function a6(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o={...r,send_to:i};t("event",n,o)}}/**
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
 */async function l6(){if(Zy())try{await e_()}catch(t){return Bt.warn(Kt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Bt.warn(Kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function c6(t,e,n,r,s,i,o){const l=r6(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Bt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Bt.error(g)),e.push(l);const c=l6().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([l,c]);X3(i)||H3(i,u.measurementId),s("js",new Date);const d=o?.config??{};return d[$3]="firebase",d.update=!0,h!=null&&(d[F3]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class u6{constructor(e){this.app=e}_delete(){return delete Eo[this.app.options.appId],Promise.resolve()}}let Eo={},xg=[];const Og={};let gu="dataLayer",h6="gtag",Vg,$0,Mg=!1;function f6(){const t=[];if(Jy()&&t.push("This is a browser extension environment."),o2()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Kt.create("invalid-analytics-context",{errorInfo:e});Bt.warn(n.message)}}function d6(t,e,n){f6();const r=t.options.appId;if(!r)throw Kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Kt.create("no-api-key");if(Eo[r]!=null)throw Kt.create("already-exists",{id:r});if(!Mg){W3(gu);const{wrappedGtag:i,gtagCore:o}=Q3(Eo,xg,Og,gu,h6);$0=i,Vg=o,Mg=!0}return Eo[r]=c6(t,xg,Og,e,Vg,gu,n),new u6(t)}function p6(t=Xo()){t=ct(t);const e=vr(t,Vl);return e.isInitialized()?e.getImmediate():m6(t)}function m6(t,e={}){const n=vr(t,Vl);if(n.isInitialized()){const s=n.getImmediate();if(Hr(e,n.getOptions()))return s;throw Kt.create("already-initialized")}return n.initialize({options:e})}function g6(t,e,n,r){t=ct(t),a6($0,Eo[t.app.options.appId],e,n,r).catch(s=>Bt.error(s))}const Lg="@firebase/analytics",Fg="0.10.18";function v6(){cn(new Yt(Vl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return d6(r,s,n)},"PUBLIC")),cn(new Yt("analytics-internal",t,"PRIVATE")),Nt(Lg,Fg),Nt(Lg,Fg,"esm2020");function t(e){try{const n=e.getProvider(Vl).getImmediate();return{logEvent:(r,s,i)=>g6(n,r,s,i)}}catch(n){throw Kt.create("interop-component-reg-failed",{reason:n})}}}v6();const y6={apiKey:"AIzaSyCfS9Kt8O3hAqMPRuCN3v90TjFtQ9A5D2k",authDomain:"ddex-distro.firebaseapp.com",projectId:"ddex-distro",storageBucket:"ddex-distro.firebasestorage.app",messagingSenderId:"297752105707",appId:"1:297752105707:web:6e4a1298b3b60d56f624ae"},aa=s_(y6),bs=HR(aa),U0=Q4(aa);wk(aa);Yk(aa);p6(aa);const Hi=Ne(null),Wi=Ne(null),$g=Ne(!0);let Ug=null;function li(){Ug||(Ug=OS(bs,async n=>{if(n){Hi.value=n;try{const r=await uk(s0(U0,"users",n.uid));r.exists()?Wi.value={id:r.id,...r.data()}:Wi.value={id:n.uid,email:n.email,displayName:n.displayName,photoURL:n.photoURL,organizationName:n.displayName}}catch(r){console.error("Error fetching user profile:",r)}}else Hi.value=null,Wi.value=null;$g.value=!1}));const t=Oe(()=>!!Hi.value),e=async()=>{try{await VS(bs),Hi.value=null,Wi.value=null}catch(n){throw console.error("Logout error:",n),n}};return{user:Oe(()=>Hi.value),userProfile:Oe(()=>Wi.value),isAuthenticated:t,isLoading:Oe(()=>$g.value),logout:e}}const Hn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},_6={class:"navbar"},b6={class:"container"},E6={class:"navbar-content"},w6={class:"logo"},T6={key:0,class:"navbar-nav desktop-only"},I6={class:"navbar-actions desktop-only"},A6={key:1,class:"user-menu"},S6={key:0,class:"mobile-menu mobile-only"},R6={class:"container"},C6={key:0,class:"mobile-nav"},P6={class:"mobile-actions"},k6={__name:"NavBar",props:{currentTheme:{type:String,default:"light"}},emits:["toggle-theme"],setup(t,{emit:e}){const n=ts(),r=BI(),{isAuthenticated:s,userProfile:i,logout:o}=li(),l=Ne(!1),c=Oe(()=>s.value?[{name:"Dashboard",path:"/dashboard",icon:"chart-bar"},{name:"Catalog",path:"/catalog",icon:"music"},{name:"New Release",path:"/releases/new",icon:"plus"},{name:"Deliveries",path:"/deliveries",icon:"truck"},{name:"Settings",path:"/settings",icon:"cog"}]:[]),u=Oe(()=>i.value&&(i.value.displayName||i.value.organizationName||"").split(" ").map(_=>_[0]).join("").toUpperCase().slice(0,2)||"U"),h=()=>{n.push("/login")},d=()=>{n.push("/signup")},g=async()=>{try{await o(),n.push("/"),l.value=!1}catch(N){console.error("Logout error:",N)}},v=()=>{l.value=!l.value},D=N=>N==="/catalog"&&r.path.startsWith("/catalog")||N==="/releases/new"&&r.path.startsWith("/releases")||N==="/deliveries"&&r.path.startsWith("/deliveries")?!0:r.path===N;return(N,_)=>{const R=wn("font-awesome-icon"),S=wn("router-link");return Q(),Z("nav",_6,[p("div",b6,[p("div",E6,[G(S,{to:"/",class:"navbar-brand"},{default:Nn(()=>[p("div",w6,[G(R,{icon:"truck"})]),_[3]||(_[3]=p("span",{class:"brand-text"},"DDEX Distro",-1))]),_:1,__:[3]}),c.value.length>0?(Q(),Z("div",T6,[(Q(!0),Z(He,null,sn(c.value,O=>(Q(),Po(S,{key:O.path,to:O.path,class:rn(["nav-link",{active:D(O.path)}])},{default:Nn(()=>[G(R,{icon:O.icon,class:"nav-icon"},null,8,["icon"]),Ee(" "+ie(O.name),1)]),_:2},1032,["to","class"]))),128))])):Xe("",!0),p("div",I6,[p("button",{onClick:_[0]||(_[0]=O=>N.$emit("toggle-theme")),class:"btn-icon","aria-label":"Toggle theme"},[G(R,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"])]),ir(s)?(Q(),Z("div",A6,[p("button",{class:"user-avatar",onClick:g,title:"Sign out"},[p("span",null,ie(u.value),1)])])):(Q(),Z(He,{key:0},[p("button",{onClick:h,class:"btn btn-secondary btn-sm"}," Sign In "),p("button",{onClick:d,class:"btn btn-primary btn-sm"}," Get Started ")],64))]),p("button",{onClick:v,class:"mobile-menu-btn mobile-only","aria-label":"Toggle menu"},[G(R,{icon:l.value?"times":"bars"},null,8,["icon"])])])]),G(Hh,{name:"slide"},{default:Nn(()=>[l.value?(Q(),Z("div",S6,[p("div",R6,[c.value.length>0?(Q(),Z("div",C6,[(Q(!0),Z(He,null,sn(c.value,O=>(Q(),Po(S,{key:O.path,to:O.path,class:"mobile-nav-link",onClick:_[1]||(_[1]=x=>l.value=!1)},{default:Nn(()=>[G(R,{icon:O.icon,class:"nav-icon"},null,8,["icon"]),Ee(" "+ie(O.name),1)]),_:2},1032,["to"]))),128))])):Xe("",!0),p("div",P6,[p("button",{onClick:_[2]||(_[2]=O=>N.$emit("toggle-theme")),class:"btn btn-secondary btn-sm"},[G(R,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"]),Ee(" "+ie(t.currentTheme==="light"?"Dark Mode":"Light Mode"),1)]),ir(s)?(Q(),Z("button",{key:1,onClick:g,class:"btn btn-secondary"}," Sign Out ")):(Q(),Z(He,{key:0},[p("button",{onClick:h,class:"btn btn-secondary"}," Sign In "),p("button",{onClick:d,class:"btn btn-primary"}," Get Started ")],64))])])])):Xe("",!0)]),_:1})])}}},N6=Hn(k6,[["__scopeId","data-v-de587ba9"]]),D6={id:"app"},x6={class:"main-content"},O6={__name:"App",setup(t){const e=Ne(localStorage.getItem("theme")||"light"),n=()=>{e.value=e.value==="light"?"dark":"light",localStorage.setItem("theme",e.value),document.documentElement.setAttribute("data-theme",e.value)};return wi(()=>{document.documentElement.setAttribute("data-theme",e.value)}),ao("theme",{current:e,toggle:n}),(r,s)=>(Q(),Z("div",D6,[G(N6,{onToggleTheme:n,"current-theme":e.value},null,8,["current-theme"]),p("main",x6,[G(ir(qy),null,{default:Nn(({Component:i})=>[G(Hh,{name:"fade",mode:"out-in"},{default:Nn(()=>[(Q(),Po(_w(i)))]),_:2},1024)]),_:1})])]))}},V6=Hn(O6,[["__scopeId","data-v-43c5cdbc"]]),M6={class:"splash-page"},L6={class:"section bg-secondary"},F6={class:"container"},$6={class:"quick-start"},U6={class:"code-block"},j6={class:"section"},B6={class:"container"},z6={class:"grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3"},q6={class:"card-body"},H6={class:"feature-icon"},W6={class:"feature-title"},G6={class:"feature-description"},K6={class:"section bg-secondary"},Y6={class:"container"},Q6={class:"integration-section"},X6={class:"integration-content"},J6={class:"integration-features"},Z6={class:"integration-item"},eN={class:"integration-item"},tN={class:"integration-item"},nN={class:"integration-item"},rN={__name:"SplashPage",setup(t){const e=ts(),n=[{icon:"cube",title:"DDEX Native",description:"Built from the ground up for DDEX compliance with automatic ERN generation and validation."},{icon:"rocket",title:"Instant Deployment",description:"Deploy your own distribution platform in minutes with our npm package and CLI tools."},{icon:"bullseye",title:"Multi-Target Delivery",description:"Deliver to DSPs via FTP, SFTP, S3, or API with automated queue management."},{icon:"palette",title:"White-Label Ready",description:"Fully customizable branding, domain support, and multi-tenant architecture."},{icon:"check-circle",title:"Validation Built-In",description:"Every ERN is automatically validated through DDEX Workbench integration."},{icon:"chart-line",title:"Real-Time Analytics",description:"Track deliveries, monitor success rates, and analyze catalog performance."}],r=Ne(`# Install and deploy in minutes
npx create-ddex-distro my-label-distro
cd my-label-distro
npm run deploy

# Your distribution platform is live!`),s=()=>{e.push("/signup")},i=()=>{window.open("https://demo.ddex-distro.org","_blank")},o=()=>{e.push("/docs")},l=()=>{navigator.clipboard.writeText(r.value)};return(c,u)=>{const h=wn("font-awesome-icon");return Q(),Z("div",M6,[p("section",{class:"hero-section"},[p("div",{class:"container"},[p("div",{class:"hero-content"},[u[0]||(u[0]=ri('<div class="hero-badge" data-v-94ac01a1><span class="badge-text" data-v-94ac01a1>Open Source</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>DDEX Compliant</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>npm Installable</span></div><h1 class="hero-title" data-v-94ac01a1> DDEX Delivery Platform <span class="hero-highlight" data-v-94ac01a1>in Minutes</span></h1><p class="hero-description" data-v-94ac01a1> DDEX Distro is an open-source, npm-installable music distribution platform that enables labels and artists to manage their catalog, generate DDEX-compliant ERN messages, and deliver releases to Digital Service Providers. </p>',3)),p("div",{class:"hero-actions"},[p("button",{onClick:s,class:"btn btn-primary btn-lg"}," Get Started Free "),p("button",{onClick:i,class:"btn btn-secondary btn-lg"}," View Demo ")]),u[1]||(u[1]=ri('<div class="hero-stats" data-v-94ac01a1><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>500+</span><span class="stat-label" data-v-94ac01a1>Active Deployments</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>10k+</span><span class="stat-label" data-v-94ac01a1>Releases/Month</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>99.5%</span><span class="stat-label" data-v-94ac01a1>Delivery Success</span></div></div>',1))])])]),p("section",L6,[p("div",F6,[p("div",$6,[u[2]||(u[2]=p("div",{class:"quick-start-content"},[p("h2",{class:"section-title"},"Deploy in 3 Commands"),p("p",{class:"section-description"}," Get your distribution platform running faster than brewing coffee ")],-1)),p("div",U6,[p("pre",null,[p("code",null,ie(r.value),1)]),p("button",{class:"copy-btn",onClick:l,title:"Copy to clipboard"},[G(h,{icon:"copy"})])])])])]),p("section",j6,[p("div",B6,[u[3]||(u[3]=p("div",{class:"text-center mb-xl"},[p("h2",{class:"section-title"},"Everything You Need to Distribute Music"),p("p",{class:"section-description"}," A complete distribution platform with enterprise features, available to everyone ")],-1)),p("div",z6,[(Q(),Z(He,null,sn(n,d=>p("div",{key:d.title,class:"feature-card card card-hover"},[p("div",q6,[p("div",H6,[G(h,{icon:d.icon},null,8,["icon"])]),p("h3",W6,ie(d.title),1),p("p",G6,ie(d.description),1)])])),64))])])]),p("section",K6,[p("div",Y6,[p("div",Q6,[p("div",X6,[u[8]||(u[8]=p("h2",{class:"section-title"},"Part of the DDEX Ecosystem",-1)),u[9]||(u[9]=p("p",{class:"section-description"}," Seamlessly integrates with DDEX Workbench for validation and DDEX DSP for testing your deliveries ",-1)),p("div",J6,[p("div",Z6,[G(h,{icon:"check",class:"check-icon"}),u[4]||(u[4]=p("span",null,"Automatic ERN validation via Workbench API",-1))]),p("div",eN,[G(h,{icon:"check",class:"check-icon"}),u[5]||(u[5]=p("span",null,"Test deliveries with your own DDEX DSP instance",-1))]),p("div",tN,[G(h,{icon:"check",class:"check-icon"}),u[6]||(u[6]=p("span",null,"Single sign-on across all DDEX tools",-1))]),p("div",nN,[G(h,{icon:"check",class:"check-icon"}),u[7]||(u[7]=p("span",null,"Track releases from creation to consumption",-1))])])]),u[10]||(u[10]=ri('<div class="integration-visual" data-v-94ac01a1><div class="ecosystem-diagram" data-v-94ac01a1><div class="ecosystem-node ecosystem-workbench" data-v-94ac01a1>DDEX Workbench</div><div class="ecosystem-node ecosystem-distro" data-v-94ac01a1>DDEX Distro</div><div class="ecosystem-node ecosystem-dsp" data-v-94ac01a1>DDEX DSP</div><svg class="ecosystem-connections" viewBox="0 0 300 200" data-v-94ac01a1><path d="M50 50 L150 100 L250 50" stroke="var(--color-primary)" stroke-width="2" fill="none" stroke-dasharray="5,5" data-v-94ac01a1></path></svg></div></div>',1))])])]),p("section",{class:"section"},[p("div",{class:"container"},[p("div",{class:"cta-section"},[u[11]||(u[11]=p("h2",{class:"cta-title"},"Ready to Start Distributing?",-1)),u[12]||(u[12]=p("p",{class:"cta-description"}," Join hundreds of labels and artists using DDEX Distro to deliver their music worldwide ",-1)),p("div",{class:"cta-actions"},[p("button",{onClick:s,class:"btn btn-primary btn-lg"}," Deploy Your Platform "),p("button",{onClick:o,class:"btn btn-secondary btn-lg"}," Read Documentation ")])])])])])}}},sN=Hn(rN,[["__scopeId","data-v-94ac01a1"]]),iN={class:"auth-page"},oN={class:"auth-container"},aN={class:"auth-card card"},lN={class:"card-body"},cN={class:"auth-header"},uN={class:"auth-logo"},hN={class:"form-group"},fN=["disabled"],dN={class:"form-group"},pN={class:"form-label"},mN=["disabled"],gN={key:0,class:"form-error"},vN={key:1,class:"form-success"},yN=["disabled"],_N=["disabled"],bN={class:"auth-footer"},EN={class:"modal-content card"},wN={class:"card-body"},TN={class:"form-group"},IN=["disabled"],AN={key:0,class:"form-error"},SN={key:1,class:"form-success"},RN={class:"modal-actions"},CN=["disabled"],PN=["disabled"],kN={__name:"Login",setup(t){const e=ts(),n=Ne(""),r=Ne(""),s=Ne(""),i=Ne(""),o=Ne(!1),l=Ne(!1),c=async()=>{s.value="",i.value="",o.value=!0;try{await PS(bs,n.value,r.value),e.push("/dashboard")}catch(d){switch(d.code){case"auth/invalid-email":s.value="Please enter a valid email address";break;case"auth/user-disabled":s.value="This account has been disabled. Please contact support.";break;case"auth/user-not-found":s.value="No account found with this email. Please sign up first.";break;case"auth/wrong-password":s.value="Incorrect password. Please try again.";break;case"auth/invalid-credential":s.value="Invalid email or password. Please try again.";break;case"auth/too-many-requests":s.value="Too many failed attempts. Please try again later.";break;case"auth/network-request-failed":s.value="Network error. Please check your connection and try again.";break;default:s.value="Failed to sign in. Please try again.",console.error("Login error:",d)}}finally{o.value=!1}},u=async()=>{s.value="",i.value="",o.value=!0;try{const d=new kn;d.setCustomParameters({prompt:"select_account"}),await $_(bs,d),e.push("/dashboard")}catch(d){switch(d.code){case"auth/popup-closed-by-user":break;case"auth/popup-blocked":s.value="Popup was blocked. Please allow popups for this site.";break;case"auth/cancelled-popup-request":break;case"auth/network-request-failed":s.value="Network error. Please check your connection and try again.";break;case"auth/account-exists-with-different-credential":s.value="An account already exists with this email using a different sign-in method.";break;default:s.value="Failed to sign in with Google. Please try again.",console.error("Google login error:",d)}}finally{o.value=!1}},h=async()=>{if(s.value="",i.value="",!n.value){s.value="Please enter your email address first";return}o.value=!0;try{await RS(bs,n.value),i.value="Password reset email sent! Check your inbox.",l.value=!1}catch(d){switch(d.code){case"auth/invalid-email":s.value="Please enter a valid email address";break;case"auth/user-not-found":s.value="No account found with this email address";break;case"auth/too-many-requests":s.value="Too many requests. Please try again later.";break;default:s.value="Failed to send reset email. Please try again.",console.error("Password reset error:",d)}}finally{o.value=!1}};return(d,g)=>{const v=wn("font-awesome-icon"),D=wn("router-link");return Q(),Z("div",iN,[p("div",oN,[p("div",aN,[p("div",lN,[p("div",cN,[p("div",uN,[G(v,{icon:"truck"})]),g[6]||(g[6]=p("h1",{class:"auth-title"},"Welcome Back",-1)),g[7]||(g[7]=p("p",{class:"auth-subtitle"},"Sign in to your DDEX Distro account",-1))]),p("form",{onSubmit:uo(c,["prevent"]),class:"auth-form"},[p("div",hN,[g[8]||(g[8]=p("label",{class:"form-label"},"Email Address",-1)),we(p("input",{"onUpdate:modelValue":g[0]||(g[0]=N=>n.value=N),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:o.value},null,8,fN),[[nt,n.value]])]),p("div",dN,[p("label",pN,[g[9]||(g[9]=Ee(" Password ",-1)),p("a",{href:"#",onClick:g[1]||(g[1]=uo(N=>l.value=!0,["prevent"])),class:"form-label-link"}," Forgot password? ")]),we(p("input",{"onUpdate:modelValue":g[2]||(g[2]=N=>r.value=N),type:"password",class:"form-input",placeholder:"Enter your password",required:"",disabled:o.value},null,8,mN),[[nt,r.value]])]),s.value?(Q(),Z("div",gN,[G(v,{icon:"times"}),Ee(" "+ie(s.value),1)])):Xe("",!0),i.value?(Q(),Z("div",vN,[G(v,{icon:"check"}),Ee(" "+ie(i.value),1)])):Xe("",!0),p("button",{type:"submit",class:"btn btn-primary btn-block",disabled:o.value},ie(o.value?"Signing in...":"Sign In"),9,yN),g[11]||(g[11]=p("div",{class:"auth-divider"},[p("span",null,"or")],-1)),p("button",{type:"button",onClick:u,class:"btn btn-secondary btn-block",disabled:o.value},[G(v,{icon:["fab","google"]}),g[10]||(g[10]=Ee(" Continue with Google ",-1))],8,_N)],32),p("div",bN,[p("p",null,[g[13]||(g[13]=Ee(" Don't have an account? ",-1)),G(D,{to:"/signup",class:"auth-link"},{default:Nn(()=>g[12]||(g[12]=[Ee(" Sign up for free ",-1)])),_:1,__:[12]})])])])]),G(Hh,{name:"modal"},{default:Nn(()=>[l.value?(Q(),Z("div",{key:0,class:"modal-overlay",onClick:g[5]||(g[5]=uo(N=>l.value=!1,["self"]))},[p("div",EN,[p("div",wN,[g[14]||(g[14]=p("h2",{class:"modal-title"},"Reset Password",-1)),g[15]||(g[15]=p("p",{class:"modal-description"}," Enter your email address and we'll send you a link to reset your password. ",-1)),p("div",TN,[we(p("input",{"onUpdate:modelValue":g[3]||(g[3]=N=>n.value=N),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:o.value},null,8,IN),[[nt,n.value]])]),s.value?(Q(),Z("div",AN,[G(v,{icon:"times"}),Ee(" "+ie(s.value),1)])):Xe("",!0),i.value?(Q(),Z("div",SN,[G(v,{icon:"check"}),Ee(" "+ie(i.value),1)])):Xe("",!0),p("div",RN,[p("button",{onClick:g[4]||(g[4]=N=>l.value=!1),class:"btn btn-secondary",disabled:o.value}," Cancel ",8,CN),p("button",{onClick:h,class:"btn btn-primary",disabled:o.value},ie(o.value?"Sending...":"Send Reset Email"),9,PN)])])])])):Xe("",!0)]),_:1})])])}}},NN=Hn(kN,[["__scopeId","data-v-fd5bc850"]]),DN={class:"auth-page"},xN={class:"auth-container"},ON={class:"auth-card card"},VN={class:"card-body"},MN={class:"auth-header"},LN={class:"auth-logo"},FN={class:"form-group"},$N=["disabled"],UN={class:"form-group"},jN=["disabled"],BN={class:"form-group"},zN=["disabled"],qN={class:"form-group"},HN=["disabled"],WN={class:"form-group"},GN={class:"form-checkbox"},KN=["disabled"],YN={key:0,class:"form-error"},QN=["disabled"],XN=["disabled"],JN={class:"auth-footer"},ZN={__name:"Signup",setup(t){const e=ts(),n=Ne({organizationName:"",email:"",password:"",confirmPassword:"",acceptTerms:!1}),r=Ne(""),s=Ne(!1),i=async(c,u={})=>{try{const h=s0(U0,"users",c.uid);await fk(h,{uid:c.uid,email:c.email,displayName:c.displayName||n.value.organizationName,organizationName:n.value.organizationName||c.displayName,photoURL:c.photoURL||null,role:"admin",plan:"free",createdAt:Tg(),updatedAt:Tg(),...u})}catch(h){throw console.error("Error creating user profile:",h),h}},o=async()=>{if(r.value="",n.value.password!==n.value.confirmPassword){r.value="Passwords do not match";return}if(n.value.password.length<8){r.value="Password must be at least 8 characters";return}if(!n.value.acceptTerms){r.value="Please accept the terms and conditions";return}s.value=!0;try{const c=await CS(bs,n.value.email,n.value.password);await NS(c.user,{displayName:n.value.organizationName}),await i(c.user),e.push("/dashboard")}catch(c){switch(c.code){case"auth/email-already-in-use":r.value="This email is already registered. Please sign in instead.";break;case"auth/invalid-email":r.value="Please enter a valid email address";break;case"auth/weak-password":r.value="Password is too weak. Please use at least 8 characters.";break;case"auth/network-request-failed":r.value="Network error. Please check your connection and try again.";break;default:r.value="Failed to create account. Please try again.",console.error("Signup error:",c)}}finally{s.value=!1}},l=async()=>{r.value="",s.value=!0;try{const c=new kn;c.setCustomParameters({prompt:"select_account"});const u=await $_(bs,c);u._tokenResponse?.isNewUser&&await i(u.user,{organizationName:u.user.displayName}),e.push("/dashboard")}catch(c){switch(c.code){case"auth/popup-closed-by-user":break;case"auth/popup-blocked":r.value="Popup was blocked. Please allow popups for this site.";break;case"auth/cancelled-popup-request":break;case"auth/network-request-failed":r.value="Network error. Please check your connection and try again.";break;default:r.value="Failed to sign up with Google. Please try again.",console.error("Google signup error:",c)}}finally{s.value=!1}};return(c,u)=>{const h=wn("font-awesome-icon"),d=wn("router-link");return Q(),Z("div",DN,[p("div",xN,[p("div",ON,[p("div",VN,[p("div",MN,[p("div",LN,[G(h,{icon:"truck"})]),u[5]||(u[5]=p("h1",{class:"auth-title"},"Get Started",-1)),u[6]||(u[6]=p("p",{class:"auth-subtitle"},"Create your DDEX Distro account",-1))]),p("form",{onSubmit:uo(o,["prevent"]),class:"auth-form"},[p("div",FN,[u[7]||(u[7]=p("label",{class:"form-label"},"Organization Name",-1)),we(p("input",{"onUpdate:modelValue":u[0]||(u[0]=g=>n.value.organizationName=g),type:"text",class:"form-input",placeholder:"My Record Label",required:"",disabled:s.value},null,8,$N),[[nt,n.value.organizationName]])]),p("div",UN,[u[8]||(u[8]=p("label",{class:"form-label"},"Email Address",-1)),we(p("input",{"onUpdate:modelValue":u[1]||(u[1]=g=>n.value.email=g),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:s.value},null,8,jN),[[nt,n.value.email]])]),p("div",BN,[u[9]||(u[9]=p("label",{class:"form-label"},"Password",-1)),we(p("input",{"onUpdate:modelValue":u[2]||(u[2]=g=>n.value.password=g),type:"password",class:"form-input",placeholder:"Create a strong password",required:"",minlength:"8",disabled:s.value},null,8,zN),[[nt,n.value.password]]),u[10]||(u[10]=p("div",{class:"form-hint"},"Minimum 8 characters",-1))]),p("div",qN,[u[11]||(u[11]=p("label",{class:"form-label"},"Confirm Password",-1)),we(p("input",{"onUpdate:modelValue":u[3]||(u[3]=g=>n.value.confirmPassword=g),type:"password",class:"form-input",placeholder:"Confirm your password",required:"",disabled:s.value},null,8,HN),[[nt,n.value.confirmPassword]])]),p("div",WN,[p("label",GN,[we(p("input",{"onUpdate:modelValue":u[4]||(u[4]=g=>n.value.acceptTerms=g),type:"checkbox",disabled:s.value},null,8,KN),[[Hs,n.value.acceptTerms]]),u[12]||(u[12]=p("span",null,[Ee(" I agree to the "),p("a",{href:"/terms",target:"_blank",class:"auth-link"},"Terms of Service"),Ee(" and "),p("a",{href:"/privacy",target:"_blank",class:"auth-link"},"Privacy Policy")],-1))])]),r.value?(Q(),Z("div",YN,[G(h,{icon:"times"}),Ee(" "+ie(r.value),1)])):Xe("",!0),p("button",{type:"submit",class:"btn btn-primary btn-block",disabled:s.value},ie(s.value?"Creating account...":"Create Account"),9,QN),u[14]||(u[14]=p("div",{class:"auth-divider"},[p("span",null,"or")],-1)),p("button",{type:"button",onClick:l,class:"btn btn-secondary btn-block",disabled:s.value},[G(h,{icon:["fab","google"]}),u[13]||(u[13]=Ee(" Continue with Google ",-1))],8,XN)],32),p("div",JN,[p("p",null,[u[16]||(u[16]=Ee(" Already have an account? ",-1)),G(d,{to:"/login",class:"auth-link"},{default:Nn(()=>u[15]||(u[15]=[Ee(" Sign in ",-1)])),_:1,__:[15]})])])])])])])}}},eD=Hn(ZN,[["__scopeId","data-v-efb48b07"]]),tD={class:"dashboard"},nD={class:"container"},rD={class:"dashboard-header"},sD={class:"dashboard-title"},iD={class:"header-actions"},oD={key:0,class:"loading-container"},aD={class:"stats-grid"},lD={class:"stat-card card"},cD={class:"card-body"},uD={class:"stat-icon"},hD={class:"stat-content"},fD={class:"stat-value"},dD={class:"stat-card card"},pD={class:"card-body"},mD={class:"stat-icon warning"},gD={class:"stat-content"},vD={class:"stat-value"},yD={class:"stat-card card"},_D={class:"card-body"},bD={class:"stat-icon success"},ED={class:"stat-content"},wD={class:"stat-value"},TD={class:"stat-card card"},ID={class:"card-body"},AD={class:"stat-icon error"},SD={class:"stat-content"},RD={class:"stat-value"},CD={class:"content-grid"},PD={class:"activity-section"},kD={class:"card"},ND={class:"card-header"},DD={class:"card-body"},xD={key:0,class:"empty-state"},OD={key:1,class:"activity-list"},VD={class:"activity-content"},MD={class:"activity-title"},LD={class:"activity-description"},FD={class:"activity-time"},$D={class:"quick-actions"},UD={class:"card"},jD={class:"card-body"},BD={class:"action-grid"},zD={class:"card"},qD={class:"card-body"},HD={class:"checklist"},WD={class:"checklist-item completed"},GD={class:"checklist-item"},KD={class:"checklist-item"},YD={class:"checklist-item"},QD={__name:"Dashboard",setup(t){const e=ts(),{userProfile:n}=li(),r=Ne({totalReleases:0,pendingDeliveries:0,successfulDeliveries:0,failedDeliveries:0}),s=Ne([]),i=Ne(!0),o=Oe(()=>{const _=new Date().getHours();return _<12?"Good morning":_<18?"Good afternoon":"Good evening"}),l=Oe(()=>n.value?.organizationName||n.value?.displayName||"there"),c=async()=>{if(n.value)try{await new Promise(_=>setTimeout(_,500)),r.value={totalReleases:12,pendingDeliveries:3,successfulDeliveries:45,failedDeliveries:2},s.value=[{id:"1",type:"release_created",title:"New release created",description:"Summer Vibes EP",timestamp:new Date(Date.now()-7200*1e3),status:"success"},{id:"2",type:"delivery_completed",title:"Delivery completed",description:"Delivered to Spotify",timestamp:new Date(Date.now()-300*60*1e3),status:"success"},{id:"3",type:"delivery_failed",title:"Delivery failed",description:"Failed to deliver to Apple Music",timestamp:new Date(Date.now()-1440*60*1e3),status:"error"}]}catch(_){console.error("Error loading dashboard data:",_)}finally{i.value=!1}},u=_=>{const S=new Date-_,O=Math.floor(S/(1e3*60*60)),x=Math.floor(O/24);return O<1?"Just now":O<24?`${O} hour${O>1?"s":""} ago`:x<30?`${x} day${x>1?"s":""} ago`:_.toLocaleDateString()},h=_=>{switch(_){case"release_created":return"plus";case"delivery_completed":return"check";case"delivery_failed":return"times";default:return"music"}},d=_=>{switch(_){case"success":return"text-success";case"error":return"text-error";case"warning":return"text-warning";default:return"text-info"}},g=()=>{e.push("/releases/new")},v=()=>{e.push("/releases")},D=()=>{e.push("/deliveries")},N=()=>{e.push("/settings")};return wi(()=>{c()}),(_,R)=>{const S=wn("font-awesome-icon");return Q(),Z("div",tD,[p("div",nD,[p("div",rD,[p("div",null,[p("h1",sD,ie(o.value)+", "+ie(l.value)+"!",1),R[0]||(R[0]=p("p",{class:"dashboard-subtitle"},"Here's what's happening with your music distribution",-1))]),p("div",iD,[p("button",{onClick:g,class:"btn btn-primary"},[G(S,{icon:"plus"}),R[1]||(R[1]=Ee(" New Release ",-1))])])]),i.value?(Q(),Z("div",oD,R[2]||(R[2]=[p("div",{class:"loading-spinner"},null,-1),p("p",null,"Loading your dashboard...",-1)]))):(Q(),Z(He,{key:1},[p("div",aD,[p("div",lD,[p("div",cD,[p("div",uD,[G(S,{icon:"music"})]),p("div",hD,[p("h3",fD,ie(r.value.totalReleases),1),R[3]||(R[3]=p("p",{class:"stat-label"},"Total Releases",-1))])])]),p("div",dD,[p("div",pD,[p("div",mD,[G(S,{icon:"truck"})]),p("div",gD,[p("h3",vD,ie(r.value.pendingDeliveries),1),R[4]||(R[4]=p("p",{class:"stat-label"},"Pending Deliveries",-1))])])]),p("div",yD,[p("div",_D,[p("div",bD,[G(S,{icon:"check-circle"})]),p("div",ED,[p("h3",wD,ie(r.value.successfulDeliveries),1),R[5]||(R[5]=p("p",{class:"stat-label"},"Successful Deliveries",-1))])])]),p("div",TD,[p("div",ID,[p("div",AD,[G(S,{icon:"times"})]),p("div",SD,[p("h3",RD,ie(r.value.failedDeliveries),1),R[6]||(R[6]=p("p",{class:"stat-label"},"Failed Deliveries",-1))])])])]),p("div",CD,[p("div",PD,[p("div",kD,[p("div",ND,[R[7]||(R[7]=p("h2",{class:"section-title"},"Recent Activity",-1)),p("button",{onClick:c,class:"btn-icon",title:"Refresh"},[G(S,{icon:"sync"})])]),p("div",DD,[s.value.length===0?(Q(),Z("div",xD,[G(S,{icon:"music",class:"empty-icon"}),R[8]||(R[8]=p("p",null,"No recent activity",-1)),p("button",{onClick:g,class:"btn btn-primary btn-sm"}," Create Your First Release ")])):(Q(),Z("div",OD,[(Q(!0),Z(He,null,sn(s.value,O=>(Q(),Z("div",{key:O.id,class:"activity-item"},[p("div",{class:rn(["activity-icon",d(O.status)])},[G(S,{icon:h(O.type)},null,8,["icon"])],2),p("div",VD,[p("h4",MD,ie(O.title),1),p("p",LD,ie(O.description),1),p("span",FD,ie(u(O.timestamp)),1)])]))),128))]))])])]),p("div",$D,[p("div",UD,[R[13]||(R[13]=p("div",{class:"card-header"},[p("h2",{class:"section-title"},"Quick Actions")],-1)),p("div",jD,[p("div",BD,[p("button",{onClick:g,class:"action-button"},[G(S,{icon:"plus",class:"action-icon"}),R[9]||(R[9]=p("span",null,"New Release",-1))]),p("button",{onClick:v,class:"action-button"},[G(S,{icon:"music",class:"action-icon"}),R[10]||(R[10]=p("span",null,"View Catalog",-1))]),p("button",{onClick:D,class:"action-button"},[G(S,{icon:"truck",class:"action-icon"}),R[11]||(R[11]=p("span",null,"Deliveries",-1))]),p("button",{onClick:N,class:"action-button"},[G(S,{icon:"cog",class:"action-icon"}),R[12]||(R[12]=p("span",null,"Settings",-1))])])])]),p("div",zD,[R[18]||(R[18]=p("div",{class:"card-header"},[p("h2",{class:"section-title"},"Getting Started")],-1)),p("div",qD,[p("div",HD,[p("div",WD,[G(S,{icon:"check-circle",class:"check-icon"}),R[14]||(R[14]=p("span",null,"Create your account",-1))]),p("div",GD,[G(S,{icon:"circle",class:"check-icon"}),R[15]||(R[15]=p("span",null,"Configure delivery targets",-1))]),p("div",KD,[G(S,{icon:"circle",class:"check-icon"}),R[16]||(R[16]=p("span",null,"Upload your first release",-1))]),p("div",YD,[G(S,{icon:"circle",class:"check-icon"}),R[17]||(R[17]=p("span",null,"Send your first delivery",-1))])])])])])])],64))])])}}},XD=Hn(QD,[["__scopeId","data-v-86d193fe"]]),JD={class:"settings"},ZD={class:"container"},ex={class:"settings-section"},tx={class:"card"},nx={class:"card-body"},rx={class:"form-group"},sx={class:"form-group"},ix={class:"form-group"},ox={class:"settings-section"},ax={class:"card"},lx={class:"card-body"},cx={class:"form-group"},ux={class:"form-group"},hx={class:"form-checkbox"},fx={class:"form-group"},dx={class:"form-checkbox"},px={class:"settings-section"},mx={class:"card"},gx={class:"card-body"},vx={class:"form-group"},yx={class:"form-checkbox"},_x={class:"form-group"},bx={class:"form-checkbox"},Ex={class:"form-group"},wx={class:"form-checkbox"},Tx={__name:"Settings",setup(t){const e=Ne({profile:{name:"My Label",email:"admin@mylabel.com",timezone:"America/New_York"},platform:{defaultERNVersion:"4.3",autoValidate:!0,requireApproval:!1},notifications:{emailDeliverySuccess:!0,emailDeliveryFailed:!0,emailNewRelease:!1}}),n=r=>{console.log(`Saving ${r}:`,e.value[r])};return(r,s)=>(Q(),Z("div",JD,[p("div",ZD,[s[26]||(s[26]=p("div",{class:"settings-header"},[p("h1",{class:"page-title"},"Settings"),p("p",{class:"page-subtitle"},"Manage your distribution platform configuration")],-1)),p("div",ex,[p("div",tx,[s[16]||(s[16]=p("div",{class:"card-header"},[p("h2",{class:"section-title"},"Profile Settings")],-1)),p("div",nx,[p("div",rx,[s[12]||(s[12]=p("label",{class:"form-label"},"Organization Name",-1)),we(p("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.value.profile.name=i),type:"text",class:"form-input",placeholder:"Enter organization name"},null,512),[[nt,e.value.profile.name]])]),p("div",sx,[s[13]||(s[13]=p("label",{class:"form-label"},"Email Address",-1)),we(p("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>e.value.profile.email=i),type:"email",class:"form-input",placeholder:"admin@example.com"},null,512),[[nt,e.value.profile.email]])]),p("div",ix,[s[15]||(s[15]=p("label",{class:"form-label"},"Timezone",-1)),we(p("select",{"onUpdate:modelValue":s[2]||(s[2]=i=>e.value.profile.timezone=i),class:"form-select"},s[14]||(s[14]=[ri('<option value="America/New_York" data-v-edd891c4>Eastern Time (ET)</option><option value="America/Chicago" data-v-edd891c4>Central Time (CT)</option><option value="America/Denver" data-v-edd891c4>Mountain Time (MT)</option><option value="America/Los_Angeles" data-v-edd891c4>Pacific Time (PT)</option><option value="Europe/London" data-v-edd891c4>London (GMT)</option><option value="Europe/Paris" data-v-edd891c4>Paris (CET)</option>',6)]),512),[[tr,e.value.profile.timezone]])]),p("button",{onClick:s[3]||(s[3]=i=>n("profile")),class:"btn btn-primary"}," Save Profile ")])])]),p("div",ox,[p("div",ax,[s[21]||(s[21]=p("div",{class:"card-header"},[p("h2",{class:"section-title"},"Platform Settings")],-1)),p("div",lx,[p("div",cx,[s[18]||(s[18]=p("label",{class:"form-label"},"Default ERN Version",-1)),we(p("select",{"onUpdate:modelValue":s[4]||(s[4]=i=>e.value.platform.defaultERNVersion=i),class:"form-select"},s[17]||(s[17]=[p("option",{value:"3.8.2"},"ERN 3.8.2",-1),p("option",{value:"4.2"},"ERN 4.2",-1),p("option",{value:"4.3"},"ERN 4.3",-1)]),512),[[tr,e.value.platform.defaultERNVersion]])]),p("div",ux,[p("label",hx,[we(p("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>e.value.platform.autoValidate=i),type:"checkbox"},null,512),[[Hs,e.value.platform.autoValidate]]),s[19]||(s[19]=p("span",null,"Automatically validate ERN messages",-1))])]),p("div",fx,[p("label",dx,[we(p("input",{"onUpdate:modelValue":s[6]||(s[6]=i=>e.value.platform.requireApproval=i),type:"checkbox"},null,512),[[Hs,e.value.platform.requireApproval]]),s[20]||(s[20]=p("span",null,"Require approval before delivery",-1))])]),p("button",{onClick:s[7]||(s[7]=i=>n("platform")),class:"btn btn-primary"}," Save Platform Settings ")])])]),p("div",px,[p("div",mx,[s[25]||(s[25]=p("div",{class:"card-header"},[p("h2",{class:"section-title"},"Notification Settings")],-1)),p("div",gx,[p("div",vx,[p("label",yx,[we(p("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>e.value.notifications.emailDeliverySuccess=i),type:"checkbox"},null,512),[[Hs,e.value.notifications.emailDeliverySuccess]]),s[22]||(s[22]=p("span",null,"Email on successful delivery",-1))])]),p("div",_x,[p("label",bx,[we(p("input",{"onUpdate:modelValue":s[9]||(s[9]=i=>e.value.notifications.emailDeliveryFailed=i),type:"checkbox"},null,512),[[Hs,e.value.notifications.emailDeliveryFailed]]),s[23]||(s[23]=p("span",null,"Email on failed delivery",-1))])]),p("div",Ex,[p("label",wx,[we(p("input",{"onUpdate:modelValue":s[10]||(s[10]=i=>e.value.notifications.emailNewRelease=i),type:"checkbox"},null,512),[[Hs,e.value.notifications.emailNewRelease]]),s[24]||(s[24]=p("span",null,"Email on new release creation",-1))])]),p("button",{onClick:s[11]||(s[11]=i=>n("notifications")),class:"btn btn-primary"}," Save Notifications ")])])])])]))}},Ix=Hn(Tx,[["__scopeId","data-v-edd891c4"]]),Ax={class:"catalog"},Sx={class:"container"},Rx={class:"page-header"},Cx={class:"filters-bar card"},Px={class:"card-body"},kx={class:"filters-content"},Nx={class:"search-box"},Dx={class:"filter-tabs"},xx=["onClick"],Ox={class:"filter-count"},Vx={key:0,class:"loading-container"},Mx={key:1,class:"empty-state card"},Lx={class:"card-body"},Fx={key:2,class:"empty-state card"},$x={class:"card-body"},Ux={key:3,class:"releases-grid"},jx=["onClick"],Bx={class:"release-cover"},zx={key:0,class:"cover-placeholder"},qx=["src","alt"],Hx={class:"release-type"},Wx={class:"release-content"},Gx={class:"release-info"},Kx={class:"release-title"},Yx={class:"release-artist"},Qx={class:"release-meta"},Xx={class:"release-date"},Jx={class:"release-tracks"},Zx={class:"release-footer"},e5=["onClick"],t5=["onClick"],n5=["onClick"],r5={__name:"Catalog",setup(t){const e=ts();li();const n=Ne([]),r=Ne(""),s=Ne("all"),i=Ne("recent"),o=Ne(!0),l=[{id:"1",title:"Summer Vibes EP",artist:"The Sunset Band",type:"EP",status:"delivered",releaseDate:new Date("2024-06-15"),trackCount:4,territories:["Worldwide"],coverUrl:null},{id:"2",title:"Midnight Dreams",artist:"Luna Nova",type:"Album",status:"ready",releaseDate:new Date("2024-07-01"),trackCount:12,territories:["US","CA","UK"],coverUrl:null},{id:"3",title:"Electric Pulse",artist:"Digital Waves",type:"Single",status:"draft",releaseDate:new Date("2024-08-01"),trackCount:1,territories:["Worldwide"],coverUrl:null}],c=Oe(()=>{let O=[...n.value];if(r.value){const x=r.value.toLowerCase();O=O.filter(F=>F.title.toLowerCase().includes(x)||F.artist.toLowerCase().includes(x))}return s.value!=="all"&&(O=O.filter(x=>x.status===s.value)),O.sort((x,F)=>{switch(i.value){case"recent":return F.releaseDate-x.releaseDate;case"oldest":return x.releaseDate-F.releaseDate;case"title":return x.title.localeCompare(F.title);case"artist":return x.artist.localeCompare(F.artist);default:return 0}}),O}),u=Oe(()=>{const O={all:n.value.length,draft:0,ready:0,delivered:0,archived:0};return n.value.forEach(x=>{O[x.status]!==void 0&&O[x.status]++}),O}),h=async()=>{o.value=!0;try{await new Promise(O=>setTimeout(O,500)),n.value=l}catch(O){console.error("Error loading releases:",O)}finally{o.value=!1}},d=()=>{e.push("/releases/new")},g=O=>{e.push(`/releases/${O.id}`)},v=O=>{e.push(`/releases/${O.id}/edit`)},D=O=>{console.log("Duplicate release:",O.title)},N=O=>{console.log("Archive release:",O.title)},_=O=>{switch(O){case"draft":return"status-draft";case"ready":return"status-ready";case"delivered":return"status-delivered";case"archived":return"status-archived";default:return""}},R=O=>{switch(O){case"draft":return"edit";case"ready":return"check";case"delivered":return"truck";case"archived":return"archive";default:return"music"}},S=O=>O.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return wi(()=>{h()}),(O,x)=>{const F=wn("font-awesome-icon");return Q(),Z("div",Ax,[p("div",Sx,[p("div",Rx,[x[4]||(x[4]=p("div",null,[p("h1",{class:"page-title"},"Release Catalog"),p("p",{class:"page-subtitle"},"Manage your music releases and distributions")],-1)),p("button",{onClick:d,class:"btn btn-primary"},[G(F,{icon:"plus"}),x[3]||(x[3]=Ee(" New Release ",-1))])]),p("div",Cx,[p("div",Px,[p("div",kx,[p("div",Nx,[G(F,{icon:"search",class:"search-icon"}),we(p("input",{"onUpdate:modelValue":x[0]||(x[0]=H=>r.value=H),type:"text",class:"search-input",placeholder:"Search releases..."},null,512),[[nt,r.value]])]),p("div",Dx,[(Q(!0),Z(He,null,sn(u.value,(H,b)=>(Q(),Z("button",{key:b,onClick:E=>s.value=b,class:rn(["filter-tab",{active:s.value===b}])},[Ee(ie(b.charAt(0).toUpperCase()+b.slice(1))+" ",1),p("span",Ox,ie(H),1)],10,xx))),128))]),we(p("select",{"onUpdate:modelValue":x[1]||(x[1]=H=>i.value=H),class:"form-select sort-select"},x[5]||(x[5]=[p("option",{value:"recent"},"Most Recent",-1),p("option",{value:"oldest"},"Oldest First",-1),p("option",{value:"title"},"Title A-Z",-1),p("option",{value:"artist"},"Artist A-Z",-1)]),512),[[tr,i.value]])])])]),o.value?(Q(),Z("div",Vx,x[6]||(x[6]=[p("div",{class:"loading-spinner"},null,-1),p("p",null,"Loading your catalog...",-1)]))):n.value.length===0?(Q(),Z("div",Mx,[p("div",Lx,[G(F,{icon:"music",class:"empty-icon"}),x[8]||(x[8]=p("h2",{class:"empty-title"},"No releases yet",-1)),x[9]||(x[9]=p("p",{class:"empty-description"}," Create your first release to start distributing your music ",-1)),p("button",{onClick:d,class:"btn btn-primary"},[G(F,{icon:"plus"}),x[7]||(x[7]=Ee(" Create Your First Release ",-1))])])])):c.value.length===0?(Q(),Z("div",Fx,[p("div",$x,[G(F,{icon:"search",class:"empty-icon"}),x[10]||(x[10]=p("h2",{class:"empty-title"},"No releases found",-1)),x[11]||(x[11]=p("p",{class:"empty-description"}," Try adjusting your search or filters ",-1))])])):(Q(),Z("div",Ux,[(Q(!0),Z(He,null,sn(c.value,H=>(Q(),Z("div",{key:H.id,class:"release-card card card-hover",onClick:b=>g(H)},[p("div",Bx,[H.coverUrl?(Q(),Z("img",{key:1,src:H.coverUrl,alt:H.title},null,8,qx)):(Q(),Z("div",zx,[G(F,{icon:"music"})])),p("div",Hx,ie(H.type),1)]),p("div",Wx,[p("div",Gx,[p("h3",Kx,ie(H.title),1),p("p",Yx,ie(H.artist),1),p("div",Qx,[p("span",Xx,[G(F,{icon:"calendar"}),Ee(" "+ie(S(H.releaseDate)),1)]),p("span",Jx,[G(F,{icon:"music"}),Ee(" "+ie(H.trackCount)+" "+ie(H.trackCount===1?"track":"tracks"),1)])])]),p("div",Zx,[p("span",{class:rn(["release-status",_(H.status)])},[G(F,{icon:R(H.status)},null,8,["icon"]),Ee(" "+ie(H.status),1)],2),p("div",{class:"release-actions",onClick:x[2]||(x[2]=uo(()=>{},["stop"]))},[p("button",{onClick:b=>v(H),class:"btn-icon",title:"Edit"},[G(F,{icon:"edit"})],8,e5),p("button",{onClick:b=>D(H),class:"btn-icon",title:"Duplicate"},[G(F,{icon:"copy"})],8,t5),p("button",{onClick:b=>N(H),class:"btn-icon",title:"Archive"},[G(F,{icon:"archive"})],8,n5)])])])],8,jx))),128))]))])])}}},s5=Hn(r5,[["__scopeId","data-v-25a9d462"]]),i5={class:"new-release"},o5={class:"container"},a5={class:"wizard-header"},l5={class:"wizard-actions"},c5={class:"wizard-progress"},u5={class:"progress-bar"},h5={class:"progress-steps"},f5=["onClick"],d5={class:"step-number"},p5={key:1},m5={class:"step-title"},g5={class:"wizard-content card"},v5={class:"card-header"},y5={class:"step-heading"},_5={class:"card-body"},b5={key:0,class:"wizard-step"},E5={class:"form-grid"},w5={class:"form-group"},T5={class:"form-group"},I5={class:"form-group"},A5={class:"form-group"},S5={class:"form-group"},R5={class:"form-group"},C5={class:"form-group"},P5={class:"form-group"},k5={key:1,class:"wizard-step"},N5={class:"tracks-header"},D5={key:0,class:"empty-tracks"},x5={key:1,class:"tracks-list"},O5={class:"track-number"},V5={class:"track-info"},M5=["onUpdate:modelValue"],L5=["onUpdate:modelValue"],F5={class:"btn-icon"},$5={key:2,class:"wizard-step"},U5={class:"asset-section"},j5={class:"upload-area"},B5={class:"asset-section"},z5={class:"upload-area"},q5={key:3,class:"wizard-step"},H5={class:"form-grid"},W5={class:"form-group"},G5={class:"form-group"},K5={class:"form-group"},Y5={class:"form-group span-2"},Q5={key:4,class:"wizard-step"},X5={class:"territory-options"},J5={class:"radio-option"},Z5={class:"radio-option"},eO={key:0,class:"territory-selector"},tO={key:5,class:"wizard-step"},nO={class:"review-section"},rO={class:"summary-grid"},sO={class:"summary-item"},iO={class:"summary-value"},oO={class:"summary-item"},aO={class:"summary-value"},lO={class:"summary-item"},cO={class:"summary-value"},uO={class:"summary-item"},hO={class:"summary-value"},fO={class:"ern-section"},dO={class:"form-grid"},pO={class:"form-group"},mO={class:"form-group"},gO={key:0,class:"validation-success"},vO={class:"card-footer wizard-footer"},yO=["disabled"],_O=["disabled"],bO=["disabled"],Fa=6,EO={__name:"NewRelease",setup(t){const e=ts(),n=Ne(1),r=Ne({basic:{title:"",displayArtist:"",type:"Album",label:"",catalogNumber:"",barcode:"",releaseDate:"",originalReleaseDate:""},tracks:[],assets:{coverImage:null,additionalImages:[]},metadata:{genre:"",subgenre:"",language:"en",copyright:"",copyrightYear:new Date().getFullYear(),productionYear:new Date().getFullYear()},territories:{mode:"worldwide",included:[],excluded:[]},preview:{ernVersion:"4.3",profile:"AudioAlbum",validated:!1}}),s=["Basic Information","Track Management","Asset Upload","Metadata","Territories & Rights","Review & Generate"],i=Oe(()=>s[n.value-1]),o=Oe(()=>{switch(n.value){case 1:return r.value.basic.title&&r.value.basic.displayArtist;case 2:return r.value.tracks.length>0;case 3:return r.value.assets.coverImage!==null;case 4:return r.value.metadata.genre&&r.value.metadata.copyright;case 5:return!0;case 6:return r.value.preview.validated;default:return!1}}),l=()=>{n.value<Fa&&n.value++},c=()=>{n.value>1&&n.value--},u=N=>{n.value=N},h=()=>{console.log("Saving as draft...",r.value),e.push("/catalog")},d=()=>{console.log("Generating ERN...",r.value),e.push("/catalog")},g=()=>{confirm("Are you sure you want to cancel? All unsaved changes will be lost.")&&e.push("/catalog")},v=()=>{r.value.tracks.push({id:Date.now(),title:`Track ${r.value.tracks.length+1}`,artist:r.value.basic.displayArtist,duration:180,isrc:""})},D=()=>{setTimeout(()=>{r.value.preview.validated=!0},1e3)};return(N,_)=>{const R=wn("font-awesome-icon");return Q(),Z("div",i5,[p("div",o5,[p("div",a5,[_[17]||(_[17]=p("h1",{class:"page-title"},"Create New Release",-1)),p("div",l5,[p("button",{onClick:h,class:"btn btn-secondary"},[G(R,{icon:"save"}),_[16]||(_[16]=Ee(" Save as Draft ",-1))]),p("button",{onClick:g,class:"btn btn-secondary"}," Cancel ")])]),p("div",c5,[p("div",u5,[p("div",{class:"progress-fill",style:Go({width:`${n.value/Fa*100}%`})},null,4)]),p("div",h5,[(Q(),Z(He,null,sn(Fa,S=>p("div",{key:S,class:rn(["progress-step",{active:S===n.value,completed:S<n.value}]),onClick:O=>u(S)},[p("div",d5,[S<n.value?(Q(),Po(R,{key:0,icon:"check"})):(Q(),Z("span",p5,ie(S),1))]),p("span",m5,ie(s[S-1]),1)],10,f5)),64))])]),p("div",g5,[p("div",v5,[p("h2",y5,"Step "+ie(n.value)+": "+ie(i.value),1)]),p("div",_5,[n.value===1?(Q(),Z("div",b5,[p("div",E5,[p("div",w5,[_[18]||(_[18]=p("label",{class:"form-label required"},"Release Title",-1)),we(p("input",{"onUpdate:modelValue":_[0]||(_[0]=S=>r.value.basic.title=S),type:"text",class:"form-input",placeholder:"Enter release title"},null,512),[[nt,r.value.basic.title]])]),p("div",T5,[_[19]||(_[19]=p("label",{class:"form-label required"},"Display Artist",-1)),we(p("input",{"onUpdate:modelValue":_[1]||(_[1]=S=>r.value.basic.displayArtist=S),type:"text",class:"form-input",placeholder:"Enter artist name"},null,512),[[nt,r.value.basic.displayArtist]])]),p("div",I5,[_[21]||(_[21]=p("label",{class:"form-label required"},"Release Type",-1)),we(p("select",{"onUpdate:modelValue":_[2]||(_[2]=S=>r.value.basic.type=S),class:"form-select"},_[20]||(_[20]=[p("option",{value:"Single"},"Single",-1),p("option",{value:"EP"},"EP",-1),p("option",{value:"Album"},"Album",-1),p("option",{value:"Compilation"},"Compilation",-1)]),512),[[tr,r.value.basic.type]])]),p("div",A5,[_[22]||(_[22]=p("label",{class:"form-label"},"Label",-1)),we(p("input",{"onUpdate:modelValue":_[3]||(_[3]=S=>r.value.basic.label=S),type:"text",class:"form-input",placeholder:"Enter label name"},null,512),[[nt,r.value.basic.label]])]),p("div",S5,[_[23]||(_[23]=p("label",{class:"form-label"},"Catalog Number",-1)),we(p("input",{"onUpdate:modelValue":_[4]||(_[4]=S=>r.value.basic.catalogNumber=S),type:"text",class:"form-input",placeholder:"e.g., CAT001"},null,512),[[nt,r.value.basic.catalogNumber]])]),p("div",R5,[_[24]||(_[24]=p("label",{class:"form-label"},"Barcode (UPC/EAN)",-1)),we(p("input",{"onUpdate:modelValue":_[5]||(_[5]=S=>r.value.basic.barcode=S),type:"text",class:"form-input",placeholder:"Enter barcode"},null,512),[[nt,r.value.basic.barcode]])]),p("div",C5,[_[25]||(_[25]=p("label",{class:"form-label required"},"Release Date",-1)),we(p("input",{"onUpdate:modelValue":_[6]||(_[6]=S=>r.value.basic.releaseDate=S),type:"date",class:"form-input"},null,512),[[nt,r.value.basic.releaseDate]])]),p("div",P5,[_[26]||(_[26]=p("label",{class:"form-label"},"Original Release Date",-1)),we(p("input",{"onUpdate:modelValue":_[7]||(_[7]=S=>r.value.basic.originalReleaseDate=S),type:"date",class:"form-input"},null,512),[[nt,r.value.basic.originalReleaseDate]])])])])):Xe("",!0),n.value===2?(Q(),Z("div",k5,[p("div",N5,[_[28]||(_[28]=p("p",{class:"step-description"},"Add and organize the tracks for your release",-1)),p("button",{onClick:v,class:"btn btn-primary"},[G(R,{icon:"plus"}),_[27]||(_[27]=Ee(" Add Track ",-1))])]),r.value.tracks.length===0?(Q(),Z("div",D5,[G(R,{icon:"music",class:"empty-icon"}),_[29]||(_[29]=p("p",null,"No tracks added yet",-1)),p("button",{onClick:v,class:"btn btn-primary"}," Add Your First Track ")])):(Q(),Z("div",x5,[(Q(!0),Z(He,null,sn(r.value.tracks,(S,O)=>(Q(),Z("div",{key:S.id,class:"track-item"},[p("div",O5,ie(O+1),1),p("div",V5,[we(p("input",{"onUpdate:modelValue":x=>S.title=x,type:"text",class:"form-input",placeholder:"Track title"},null,8,M5),[[nt,S.title]]),we(p("input",{"onUpdate:modelValue":x=>S.artist=x,type:"text",class:"form-input",placeholder:"Track artist"},null,8,L5),[[nt,S.artist]])]),p("button",F5,[G(R,{icon:"trash"})])]))),128))]))])):Xe("",!0),n.value===3?(Q(),Z("div",$5,[p("div",U5,[_[32]||(_[32]=p("h3",null,"Cover Image",-1)),_[33]||(_[33]=p("p",{class:"step-description"},"Upload the main cover image for your release (minimum 3000x3000px)",-1)),p("div",j5,[G(R,{icon:"upload",class:"upload-icon"}),_[30]||(_[30]=p("p",null,"Drag and drop or click to upload",-1)),_[31]||(_[31]=p("button",{class:"btn btn-primary"},"Choose File",-1))])]),p("div",B5,[_[36]||(_[36]=p("h3",null,"Audio Files",-1)),_[37]||(_[37]=p("p",{class:"step-description"},"Upload audio files for each track (WAV or FLAC recommended)",-1)),p("div",z5,[G(R,{icon:"music",class:"upload-icon"}),_[34]||(_[34]=p("p",null,"Drag and drop or click to upload",-1)),_[35]||(_[35]=p("button",{class:"btn btn-secondary"},"Choose Files",-1))])])])):Xe("",!0),n.value===4?(Q(),Z("div",q5,[p("div",H5,[p("div",W5,[_[39]||(_[39]=p("label",{class:"form-label required"},"Primary Genre",-1)),we(p("select",{"onUpdate:modelValue":_[8]||(_[8]=S=>r.value.metadata.genre=S),class:"form-select"},_[38]||(_[38]=[ri('<option value="" data-v-7fc6e47f>Select genre</option><option value="Rock" data-v-7fc6e47f>Rock</option><option value="Pop" data-v-7fc6e47f>Pop</option><option value="Electronic" data-v-7fc6e47f>Electronic</option><option value="Hip-Hop" data-v-7fc6e47f>Hip-Hop</option><option value="Jazz" data-v-7fc6e47f>Jazz</option><option value="Classical" data-v-7fc6e47f>Classical</option>',7)]),512),[[tr,r.value.metadata.genre]])]),p("div",G5,[_[40]||(_[40]=p("label",{class:"form-label"},"Sub-genre",-1)),we(p("input",{"onUpdate:modelValue":_[9]||(_[9]=S=>r.value.metadata.subgenre=S),type:"text",class:"form-input",placeholder:"Enter sub-genre"},null,512),[[nt,r.value.metadata.subgenre]])]),p("div",K5,[_[42]||(_[42]=p("label",{class:"form-label required"},"Language",-1)),we(p("select",{"onUpdate:modelValue":_[10]||(_[10]=S=>r.value.metadata.language=S),class:"form-select"},_[41]||(_[41]=[ri('<option value="en" data-v-7fc6e47f>English</option><option value="es" data-v-7fc6e47f>Spanish</option><option value="fr" data-v-7fc6e47f>French</option><option value="de" data-v-7fc6e47f>German</option><option value="ja" data-v-7fc6e47f>Japanese</option>',5)]),512),[[tr,r.value.metadata.language]])]),p("div",Y5,[_[43]||(_[43]=p("label",{class:"form-label required"},"Copyright",-1)),we(p("input",{"onUpdate:modelValue":_[11]||(_[11]=S=>r.value.metadata.copyright=S),type:"text",class:"form-input",placeholder:"© 2024 Label Name"},null,512),[[nt,r.value.metadata.copyright]])])])])):Xe("",!0),n.value===5?(Q(),Z("div",Q5,[p("div",X5,[p("label",J5,[we(p("input",{"onUpdate:modelValue":_[12]||(_[12]=S=>r.value.territories.mode=S),type:"radio",value:"worldwide"},null,512),[[Np,r.value.territories.mode]]),_[44]||(_[44]=p("div",{class:"radio-content"},[p("span",{class:"radio-title"},"Worldwide"),p("span",{class:"radio-description"},"Distribute to all territories")],-1))]),p("label",Z5,[we(p("input",{"onUpdate:modelValue":_[13]||(_[13]=S=>r.value.territories.mode=S),type:"radio",value:"selected"},null,512),[[Np,r.value.territories.mode]]),_[45]||(_[45]=p("div",{class:"radio-content"},[p("span",{class:"radio-title"},"Selected Territories"),p("span",{class:"radio-description"},"Choose specific territories")],-1))])]),r.value.territories.mode==="selected"?(Q(),Z("div",eO,_[46]||(_[46]=[p("p",null,"Territory selection interface would go here",-1)]))):Xe("",!0)])):Xe("",!0),n.value===6?(Q(),Z("div",tO,[p("div",nO,[_[51]||(_[51]=p("h3",null,"Release Summary",-1)),p("div",rO,[p("div",sO,[_[47]||(_[47]=p("span",{class:"summary-label"},"Title:",-1)),p("span",iO,ie(r.value.basic.title||"Not set"),1)]),p("div",oO,[_[48]||(_[48]=p("span",{class:"summary-label"},"Artist:",-1)),p("span",aO,ie(r.value.basic.displayArtist||"Not set"),1)]),p("div",lO,[_[49]||(_[49]=p("span",{class:"summary-label"},"Type:",-1)),p("span",cO,ie(r.value.basic.type),1)]),p("div",uO,[_[50]||(_[50]=p("span",{class:"summary-label"},"Tracks:",-1)),p("span",hO,ie(r.value.tracks.length),1)])])]),p("div",fO,[_[58]||(_[58]=p("h3",null,"ERN Configuration",-1)),p("div",dO,[p("div",pO,[_[53]||(_[53]=p("label",{class:"form-label"},"ERN Version",-1)),we(p("select",{"onUpdate:modelValue":_[14]||(_[14]=S=>r.value.preview.ernVersion=S),class:"form-select"},_[52]||(_[52]=[p("option",{value:"3.8.2"},"ERN 3.8.2",-1),p("option",{value:"4.2"},"ERN 4.2",-1),p("option",{value:"4.3"},"ERN 4.3",-1)]),512),[[tr,r.value.preview.ernVersion]])]),p("div",mO,[_[55]||(_[55]=p("label",{class:"form-label"},"Profile",-1)),we(p("select",{"onUpdate:modelValue":_[15]||(_[15]=S=>r.value.preview.profile=S),class:"form-select"},_[54]||(_[54]=[p("option",{value:"AudioAlbum"},"Audio Album",-1),p("option",{value:"AudioSingle"},"Audio Single",-1),p("option",{value:"VideoAlbum"},"Video Album",-1)]),512),[[tr,r.value.preview.profile]])])]),p("button",{onClick:D,class:"btn btn-secondary"},[G(R,{icon:"check"}),_[56]||(_[56]=Ee(" Validate ERN ",-1))]),r.value.preview.validated?(Q(),Z("div",gO,[G(R,{icon:"check-circle"}),_[57]||(_[57]=Ee(" ERN validated successfully ",-1))])):Xe("",!0)])])):Xe("",!0)]),p("div",vO,[p("button",{onClick:c,class:"btn btn-secondary",disabled:n.value===1},[G(R,{icon:"chevron-left"}),_[59]||(_[59]=Ee(" Previous ",-1))],8,yO),n.value<Fa?(Q(),Z("button",{key:0,onClick:l,class:"btn btn-primary",disabled:!o.value},[_[60]||(_[60]=Ee(" Next ",-1)),G(R,{icon:"chevron-right"})],8,_O)):(Q(),Z("button",{key:1,onClick:d,class:"btn btn-success",disabled:!o.value},[G(R,{icon:"check"}),_[61]||(_[61]=Ee(" Generate ERN & Save ",-1))],8,bO))])])])])}}},wO=Hn(EO,[["__scopeId","data-v-7fc6e47f"]]),TO={class:"deliveries"},IO={class:"container"},AO={class:"page-header"},SO={class:"stats-row"},RO={class:"stat-card card"},CO={class:"card-body"},PO={class:"stat-value"},kO={class:"stat-card card"},NO={class:"card-body"},DO={class:"stat-value"},xO={class:"stat-card card"},OO={class:"card-body"},VO={class:"stat-value"},MO={class:"stat-card card"},LO={class:"card-body"},FO={class:"stat-value"},$O={class:"filters-section"},UO={class:"filter-tabs"},jO=["onClick"],BO={class:"filter-badge"},zO=["value"],qO={key:0,class:"loading-container"},HO={key:1,class:"empty-state card"},WO={class:"card-body"},GO={class:"empty-description"},KO={key:2,class:"deliveries-list"},YO={class:"card-body"},QO={class:"delivery-header"},XO={class:"delivery-info"},JO={class:"delivery-title"},ZO={class:"delivery-meta"},eV={class:"delivery-target"},tV={class:"delivery-files"},nV={key:0,class:"delivery-progress"},rV={class:"progress-bar"},sV={class:"progress-text"},iV={key:1,class:"delivery-error"},oV={class:"delivery-footer"},aV={class:"delivery-time"},lV={key:0},cV={key:1},uV={key:2},hV={class:"time-duration"},fV={key:3},dV={class:"delivery-actions"},pV=["onClick"],mV=["onClick"],gV=["onClick"],vV=["onClick"],yV={class:"targets-section"},_V={class:"targets-grid"},bV={class:"card-body"},EV={class:"target-header"},wV={class:"target-name"},TV={class:"target-info"},IV={class:"target-type"},AV={class:"target-protocol"},SV={class:"target-actions"},RV={class:"btn-icon",title:"Edit"},CV={class:"btn-icon",title:"Test Connection"},PV={class:"btn-icon",title:"Delete"},kV={__name:"Deliveries",setup(t){ts();const e=Ne([]),n=Ne("all"),r=Ne("all"),s=Ne(!0),i=Ne(!1),o=[{id:"1",releaseTitle:"Summer Vibes EP",target:"Spotify",status:"completed",scheduledAt:new Date(Date.now()-2880*60*1e3),completedAt:new Date(Date.now()-2880*60*1e3+900*1e3),fileCount:5,totalSize:"125 MB"},{id:"2",releaseTitle:"Midnight Dreams",target:"Apple Music",status:"processing",scheduledAt:new Date,progress:65,fileCount:13,totalSize:"380 MB"},{id:"3",releaseTitle:"Electric Pulse",target:"YouTube Music",status:"queued",scheduledAt:new Date(Date.now()+7200*1e3),fileCount:2,totalSize:"45 MB"},{id:"4",releaseTitle:"Summer Vibes EP",target:"Deezer",status:"failed",scheduledAt:new Date(Date.now()-1440*60*1e3),failedAt:new Date(Date.now()-1440*60*1e3+300*1e3),error:"Connection timeout",fileCount:5,totalSize:"125 MB"}],l=Ne([{id:"1",name:"Spotify",type:"DSP",protocol:"SFTP",active:!0},{id:"2",name:"Apple Music",type:"DSP",protocol:"API",active:!0},{id:"3",name:"YouTube Music",type:"DSP",protocol:"FTP",active:!0},{id:"4",name:"Deezer",type:"DSP",protocol:"SFTP",active:!0},{id:"5",name:"Amazon Music",type:"DSP",protocol:"S3",active:!1}]),c=Oe(()=>{let x=[...e.value];return n.value!=="all"&&(x=x.filter(F=>F.status===n.value)),r.value!=="all"&&(x=x.filter(F=>F.target===r.value)),x}),u=Oe(()=>{const x={all:e.value.length,queued:0,processing:0,completed:0,failed:0};return e.value.forEach(F=>{x[F.status]!==void 0&&x[F.status]++}),x}),h=Oe(()=>l.value.filter(x=>x.active)),d=async()=>{s.value=!0;try{await new Promise(x=>setTimeout(x,500)),e.value=o}catch(x){console.error("Error loading deliveries:",x)}finally{s.value=!1}},g=x=>{console.log("Retrying delivery:",x.id)},v=x=>{console.log("Cancelling delivery:",x.id)},D=x=>{console.log("Viewing logs for:",x.id)},N=x=>{console.log("Downloading receipt for:",x.id)},_=x=>{switch(x){case"queued":return"status-queued";case"processing":return"status-processing";case"completed":return"status-completed";case"failed":return"status-failed";default:return""}},R=x=>{switch(x){case"queued":return"clock";case"processing":return"spinner";case"completed":return"check-circle";case"failed":return"times-circle";default:return"truck"}},S=x=>{const F=new Date,H=Math.abs(F-x),b=Math.floor(H/(1e3*60*60)),E=Math.floor(b/24);return x>F?b<1?"In a few minutes":b<24?`In ${b} hour${b>1?"s":""}`:`In ${E} day${E>1?"s":""}`:b<1?"Just now":b<24?`${b} hour${b>1?"s":""} ago`:`${E} day${E>1?"s":""} ago`},O=(x,F)=>{const H=F-x;return`${Math.floor(H/(1e3*60))} min`};return wi(()=>{d()}),(x,F)=>{const H=wn("font-awesome-icon");return Q(),Z("div",TO,[p("div",IO,[p("div",AO,[F[3]||(F[3]=p("div",null,[p("h1",{class:"page-title"},"Deliveries"),p("p",{class:"page-subtitle"},"Monitor and manage your release deliveries")],-1)),p("button",{onClick:F[0]||(F[0]=b=>i.value=!0),class:"btn btn-primary"},[G(H,{icon:"plus"}),F[2]||(F[2]=Ee(" Add Target ",-1))])]),p("div",SO,[p("div",RO,[p("div",CO,[p("div",PO,ie(u.value.completed),1),F[4]||(F[4]=p("div",{class:"stat-label"},"Completed Today",-1))])]),p("div",kO,[p("div",NO,[p("div",DO,ie(u.value.processing),1),F[5]||(F[5]=p("div",{class:"stat-label"},"In Progress",-1))])]),p("div",xO,[p("div",OO,[p("div",VO,ie(u.value.queued),1),F[6]||(F[6]=p("div",{class:"stat-label"},"Queued",-1))])]),p("div",MO,[p("div",LO,[p("div",FO,ie(u.value.failed),1),F[7]||(F[7]=p("div",{class:"stat-label"},"Failed",-1))])])]),p("div",$O,[p("div",UO,[(Q(!0),Z(He,null,sn(u.value,(b,E)=>(Q(),Z("button",{key:E,onClick:w=>n.value=E,class:rn(["filter-tab",{active:n.value===E}])},[Ee(ie(E.charAt(0).toUpperCase()+E.slice(1))+" ",1),p("span",BO,ie(b),1)],10,jO))),128))]),we(p("select",{"onUpdate:modelValue":F[1]||(F[1]=b=>r.value=b),class:"form-select"},[F[8]||(F[8]=p("option",{value:"all"},"All Targets",-1)),(Q(!0),Z(He,null,sn(h.value,b=>(Q(),Z("option",{key:b.id,value:b.name},ie(b.name),9,zO))),128))],512),[[tr,r.value]])]),s.value?(Q(),Z("div",qO,F[9]||(F[9]=[p("div",{class:"loading-spinner"},null,-1),p("p",null,"Loading deliveries...",-1)]))):c.value.length===0?(Q(),Z("div",HO,[p("div",WO,[G(H,{icon:"truck",class:"empty-icon"}),F[10]||(F[10]=p("h2",{class:"empty-title"},"No deliveries found",-1)),p("p",GO,ie(n.value==="all"?"No deliveries scheduled yet":`No ${n.value} deliveries`),1)])])):(Q(),Z("div",KO,[(Q(!0),Z(He,null,sn(c.value,b=>(Q(),Z("div",{key:b.id,class:"delivery-card card"},[p("div",YO,[p("div",QO,[p("div",XO,[p("h3",JO,ie(b.releaseTitle),1),p("div",ZO,[p("span",eV,[G(H,{icon:["fab","spotify"]}),Ee(" "+ie(b.target),1)]),p("span",tV,ie(b.fileCount)+" files · "+ie(b.totalSize),1)])]),p("div",{class:rn(["delivery-status",_(b.status)])},[G(H,{icon:R(b.status),spin:b.status==="processing"},null,8,["icon","spin"]),Ee(" "+ie(b.status),1)],2)]),b.status==="processing"?(Q(),Z("div",nV,[p("div",rV,[p("div",{class:"progress-fill",style:Go({width:`${b.progress}%`})},null,4)]),p("span",sV,ie(b.progress)+"% complete",1)])):Xe("",!0),b.status==="failed"?(Q(),Z("div",iV,[G(H,{icon:"exclamation-triangle"}),Ee(" "+ie(b.error),1)])):Xe("",!0),p("div",oV,[p("div",aV,[b.status==="queued"?(Q(),Z("span",lV," Scheduled "+ie(S(b.scheduledAt)),1)):b.status==="processing"?(Q(),Z("span",cV," Started "+ie(S(b.scheduledAt)),1)):b.status==="completed"?(Q(),Z("span",uV,[Ee(" Completed "+ie(S(b.completedAt))+" ",1),p("span",hV," ("+ie(O(b.scheduledAt,b.completedAt))+") ",1)])):b.status==="failed"?(Q(),Z("span",fV," Failed "+ie(S(b.failedAt)),1)):Xe("",!0)]),p("div",dV,[b.status==="queued"?(Q(),Z("button",{key:0,onClick:E=>v(b),class:"btn btn-secondary btn-sm"}," Cancel ",8,pV)):Xe("",!0),b.status==="failed"?(Q(),Z("button",{key:1,onClick:E=>g(b),class:"btn btn-primary btn-sm"},[G(H,{icon:"redo"}),F[11]||(F[11]=Ee(" Retry ",-1))],8,mV)):Xe("",!0),p("button",{onClick:E=>D(b),class:"btn-icon",title:"View Logs"},[G(H,{icon:"file-alt"})],8,gV),b.status==="completed"?(Q(),Z("button",{key:2,onClick:E=>N(b),class:"btn-icon",title:"Download Receipt"},[G(H,{icon:"download"})],8,vV)):Xe("",!0)])])])]))),128))])),p("div",yV,[F[12]||(F[12]=p("h2",{class:"section-title"},"Delivery Targets",-1)),p("div",_V,[(Q(!0),Z(He,null,sn(l.value,b=>(Q(),Z("div",{key:b.id,class:rn(["target-card card",{inactive:!b.active}])},[p("div",bV,[p("div",EV,[p("h3",wV,ie(b.name),1),p("span",{class:rn(["target-status",{active:b.active}])},ie(b.active?"Active":"Inactive"),3)]),p("div",TV,[p("span",IV,ie(b.type),1),p("span",AV,ie(b.protocol),1)]),p("div",SV,[p("button",RV,[G(H,{icon:"edit"})]),p("button",CV,[G(H,{icon:"plug"})]),p("button",PV,[G(H,{icon:"trash"})])])])],2))),128))])])])])}}},NV=Hn(kV,[["__scopeId","data-v-84573fea"]]),j0=UI({history:gI("/"),routes:[{path:"/",name:"home",component:sN},{path:"/login",name:"login",component:NN,meta:{requiresGuest:!0}},{path:"/signup",name:"signup",component:eD,meta:{requiresGuest:!0}},{path:"/dashboard",name:"dashboard",component:XD,meta:{requiresAuth:!0}},{path:"/catalog",name:"catalog",component:s5,meta:{requiresAuth:!0}},{path:"/releases/new",name:"new-release",component:wO,meta:{requiresAuth:!0}},{path:"/deliveries",name:"deliveries",component:NV,meta:{requiresAuth:!0}},{path:"/settings",name:"settings",component:Ix,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}]});j0.beforeEach(async(t,e,n)=>{const{isLoading:r}=li();r.value&&await new Promise(i=>{const o=setInterval(()=>{const{isLoading:l}=li();l.value||(clearInterval(o),i())},50)});const{isAuthenticated:s}=li();t.meta.requiresAuth&&!s.value?n("/login"):t.meta.requiresGuest&&s.value?n("/dashboard"):n()});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function fh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function DV(t){if(Array.isArray(t))return t}function xV(t){if(Array.isArray(t))return fh(t)}function OV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function VV(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,B0(r.key),r)}}function MV(t,e,n){return e&&VV(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function tl(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Hf(t))||e){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){l=!0,i=c},f:function(){try{o||n.return==null||n.return()}finally{if(l)throw i}}}}function Re(t,e,n){return(e=B0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function FV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,i,o,l=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(h){u=!0,s=h}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw s}}return l}}function $V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jg(Object(n),!0).forEach(function(r){Re(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wc(t,e){return DV(t)||FV(t,e)||Hf(t,e)||$V()}function In(t){return xV(t)||LV(t)||Hf(t)||UV()}function jV(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B0(t){var e=jV(t,"string");return typeof e=="symbol"?e:e+""}function Ml(t){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ml(t)}function Hf(t,e){if(t){if(typeof t=="string")return fh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fh(t,e):void 0}}var Bg=function(){},Wf={},z0={},q0=null,H0={mark:Bg,measure:Bg};try{typeof window<"u"&&(Wf=window),typeof document<"u"&&(z0=document),typeof MutationObserver<"u"&&(q0=MutationObserver),typeof performance<"u"&&(H0=performance)}catch{}var BV=Wf.navigator||{},zg=BV.userAgent,qg=zg===void 0?"":zg,Jr=Wf,Ge=z0,Hg=q0,$a=H0;Jr.document;var br=!!Ge.documentElement&&!!Ge.head&&typeof Ge.addEventListener=="function"&&typeof Ge.createElement=="function",W0=~qg.indexOf("MSIE")||~qg.indexOf("Trident/"),vu,zV=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,qV=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,G0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},HV={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},K0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],xt="classic",la="duotone",Y0="sharp",Q0="sharp-duotone",X0="chisel",J0="etch",Z0="jelly",eb="jelly-duo",tb="jelly-fill",nb="notdog",rb="notdog-duo",sb="slab",ib="slab-press",ob="thumbprint",ab="whiteboard",WV="Classic",GV="Duotone",KV="Sharp",YV="Sharp Duotone",QV="Chisel",XV="Etch",JV="Jelly",ZV="Jelly Duo",eM="Jelly Fill",tM="Notdog",nM="Notdog Duo",rM="Slab",sM="Slab Press",iM="Thumbprint",oM="Whiteboard",lb=[xt,la,Y0,Q0,X0,J0,Z0,eb,tb,nb,rb,sb,ib,ob,ab];vu={},Re(Re(Re(Re(Re(Re(Re(Re(Re(Re(vu,xt,WV),la,GV),Y0,KV),Q0,YV),X0,QV),J0,XV),Z0,JV),eb,ZV),tb,eM),nb,tM),Re(Re(Re(Re(Re(vu,rb,nM),sb,rM),ib,sM),ob,iM),ab,oM);var aM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},lM={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},cM=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),uM={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},cb=["fak","fa-kit","fakd","fa-kit-duotone"],Wg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},hM=["kit"],fM="kit",dM="kit-duotone",pM="Kit",mM="Kit Duotone";Re(Re({},fM,pM),dM,mM);var gM={kit:{"fa-kit":"fak"}},vM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},yM={kit:{fak:"fa-kit"}},Gg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},yu,Ua={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_M=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],bM="classic",EM="duotone",wM="sharp",TM="sharp-duotone",IM="chisel",AM="etch",SM="jelly",RM="jelly-duo",CM="jelly-fill",PM="notdog",kM="notdog-duo",NM="slab",DM="slab-press",xM="thumbprint",OM="whiteboard",VM="Classic",MM="Duotone",LM="Sharp",FM="Sharp Duotone",$M="Chisel",UM="Etch",jM="Jelly",BM="Jelly Duo",zM="Jelly Fill",qM="Notdog",HM="Notdog Duo",WM="Slab",GM="Slab Press",KM="Thumbprint",YM="Whiteboard";yu={},Re(Re(Re(Re(Re(Re(Re(Re(Re(Re(yu,bM,VM),EM,MM),wM,LM),TM,FM),IM,$M),AM,UM),SM,jM),RM,BM),CM,zM),PM,qM),Re(Re(Re(Re(Re(yu,kM,HM),NM,WM),DM,GM),xM,KM),OM,YM);var QM="kit",XM="kit-duotone",JM="Kit",ZM="Kit Duotone";Re(Re({},QM,JM),XM,ZM);var e9={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},t9={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},dh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},n9=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ub=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(_M,n9),r9=["solid","regular","light","thin","duotone","brands","semibold"],hb=[1,2,3,4,5,6,7,8,9,10],s9=hb.concat([11,12,13,14,15,16,17,18,19,20]),i9=["aw","fw","pull-left","pull-right"],o9=[].concat(In(Object.keys(t9)),r9,i9,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ua.GROUP,Ua.SWAP_OPACITY,Ua.PRIMARY,Ua.SECONDARY]).concat(hb.map(function(t){return"".concat(t,"x")})).concat(s9.map(function(t){return"w-".concat(t)})),a9={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},pr="___FONT_AWESOME___",ph=16,fb="fa",db="svg-inline--fa",Cs="data-fa-i2svg",mh="data-fa-pseudo-element",l9="data-fa-pseudo-element-pending",Gf="data-prefix",Kf="data-icon",Kg="fontawesome-i2svg",c9="async",u9=["HTML","HEAD","STYLE","SCRIPT"],pb=["::before","::after",":before",":after"],mb=function(){try{return!0}catch{return!1}}();function ca(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[xt]}})}var gb=K({},G0);gb[xt]=K(K(K(K({},{"fa-duotone":"duotone"}),G0[xt]),Wg.kit),Wg["kit-duotone"]);var h9=ca(gb),gh=K({},uM);gh[xt]=K(K(K(K({},{duotone:"fad"}),gh[xt]),Gg.kit),Gg["kit-duotone"]);var Yg=ca(gh),vh=K({},dh);vh[xt]=K(K({},vh[xt]),yM.kit);var vb=ca(vh),yh=K({},e9);yh[xt]=K(K({},yh[xt]),gM.kit);ca(yh);var f9=zV,yb="fa-layers-text",d9=qV,p9=K({},aM);ca(p9);var m9=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_u=HV,g9=[].concat(In(hM),In(o9)),wo=Jr.FontAwesomeConfig||{};function v9(t){var e=Ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function y9(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ge&&typeof Ge.querySelector=="function"){var _9=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_9.forEach(function(t){var e=wc(t,2),n=e[0],r=e[1],s=y9(v9(n));s!=null&&(wo[r]=s)})}var _b={styleDefault:"solid",familyDefault:xt,cssPrefix:fb,replacementClass:db,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wo.familyPrefix&&(wo.cssPrefix=wo.familyPrefix);var bi=K(K({},_b),wo);bi.autoReplaceSvg||(bi.observeMutations=!1);var ue={};Object.keys(_b).forEach(function(t){Object.defineProperty(ue,t,{enumerable:!0,set:function(n){bi[t]=n,To.forEach(function(r){return r(ue)})},get:function(){return bi[t]}})});Object.defineProperty(ue,"familyPrefix",{enumerable:!0,set:function(e){bi.cssPrefix=e,To.forEach(function(n){return n(ue)})},get:function(){return bi.cssPrefix}});Jr.FontAwesomeConfig=ue;var To=[];function b9(t){return To.push(t),function(){To.splice(To.indexOf(t),1)}}var zs=ph,Dn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E9(t){if(!(!t||!br)){var e=Ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ge.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ge.head.insertBefore(e,r),t}}var w9="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qg(){for(var t=12,e="";t-- >0;)e+=w9[Math.random()*62|0];return e}function Ci(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yf(t){return t.classList?Ci(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function T9(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(bb(t[n]),'" ')},"").trim()}function Tc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Qf(t){return t.size!==Dn.size||t.x!==Dn.x||t.y!==Dn.y||t.rotate!==Dn.rotate||t.flipX||t.flipY}function I9(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function A9(t){var e=t.transform,n=t.width,r=n===void 0?ph:n,s=t.height,i=s===void 0?ph:s,o="";return W0?o+="translate(".concat(e.x/zs-r/2,"em, ").concat(e.y/zs-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/zs,"em), calc(-50% + ").concat(e.y/zs,"em)) "),o+="scale(".concat(e.size/zs*(e.flipX?-1:1),", ").concat(e.size/zs*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var S9=`:root, :host {
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
}`;function Eb(){var t=fb,e=db,n=ue.cssPrefix,r=ue.replacementClass,s=S9;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return s}var Xg=!1;function bu(){ue.autoAddCss&&!Xg&&(E9(Eb()),Xg=!0)}var R9={mixout:function(){return{dom:{css:Eb,insertCss:bu}}},hooks:function(){return{beforeDOMElementCreation:function(){bu()},beforeI2svg:function(){bu()}}}},mr=Jr||{};mr[pr]||(mr[pr]={});mr[pr].styles||(mr[pr].styles={});mr[pr].hooks||(mr[pr].hooks={});mr[pr].shims||(mr[pr].shims=[]);var vn=mr[pr],wb=[],Tb=function(){Ge.removeEventListener("DOMContentLoaded",Tb),Ll=1,wb.map(function(e){return e()})},Ll=!1;br&&(Ll=(Ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ge.readyState),Ll||Ge.addEventListener("DOMContentLoaded",Tb));function C9(t){br&&(Ll?setTimeout(t,0):wb.push(t))}function ua(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?bb(t):"<".concat(e," ").concat(T9(r),">").concat(i.map(ua).join(""),"</").concat(e,">")}function Jg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Eu=function(e,n,r,s){var i=Object.keys(e),o=i.length,l=n,c,u,h;for(r===void 0?(c=1,h=e[i[0]]):(c=0,h=r);c<o;c++)u=i[c],h=l(h,e[u],u,e);return h};function Ib(t){return In(t).length!==1?null:t.codePointAt(0).toString(16)}function Zg(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ab(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Zg(e);typeof vn.hooks.addPack=="function"&&!s?vn.hooks.addPack(t,Zg(e)):vn.styles[t]=K(K({},vn.styles[t]||{}),i),t==="fas"&&Ab("fa",e)}var Ho=vn.styles,P9=vn.shims,Sb=Object.keys(vb),k9=Sb.reduce(function(t,e){return t[e]=Object.keys(vb[e]),t},{}),Xf=null,Rb={},Cb={},Pb={},kb={},Nb={};function N9(t){return~g9.indexOf(t)}function D9(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!N9(s)?s:null}var Db=function(){var e=function(i){return Eu(Ho,function(o,l,c){return o[c]=Eu(l,i,{}),o},{})};Rb=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){s[c.toString(16)]=o})}return s}),Cb=e(function(s,i,o){if(s[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){s[c]=o})}return s}),Nb=e(function(s,i,o){var l=i[2];return s[o]=o,l.forEach(function(c){s[c]=o}),s});var n="far"in Ho||ue.autoFetchSvg,r=Eu(P9,function(s,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(s.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:l,iconName:c}),s},{names:{},unicodes:{}});Pb=r.names,kb=r.unicodes,Xf=Ic(ue.styleDefault,{family:ue.familyDefault})};b9(function(t){Xf=Ic(t.styleDefault,{family:ue.familyDefault})});Db();function Jf(t,e){return(Rb[t]||{})[e]}function x9(t,e){return(Cb[t]||{})[e]}function vs(t,e){return(Nb[t]||{})[e]}function xb(t){return Pb[t]||{prefix:null,iconName:null}}function O9(t){var e=kb[t],n=Jf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Zr(){return Xf}var Ob=function(){return{prefix:null,iconName:null,rest:[]}};function V9(t){var e=xt,n=Sb.reduce(function(r,s){return r[s]="".concat(ue.cssPrefix,"-").concat(s),r},{});return lb.forEach(function(r){(t.includes(n[r])||t.some(function(s){return k9[r].includes(s)}))&&(e=r)}),e}function Ic(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?xt:n,s=h9[r][t];if(r===la&&!t)return"fad";var i=Yg[r][t]||Yg[r][s],o=t in vn.styles?t:null,l=i||o||null;return l}function M9(t){var e=[],n=null;return t.forEach(function(r){var s=D9(ue.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function ev(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var tv=ub.concat(cb);function Ac(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=null,i=ev(t.filter(function(v){return tv.includes(v)})),o=ev(t.filter(function(v){return!tv.includes(v)})),l=i.filter(function(v){return s=v,!K0.includes(v)}),c=wc(l,1),u=c[0],h=u===void 0?null:u,d=V9(i),g=K(K({},M9(o)),{},{prefix:Ic(h,{family:d})});return K(K(K({},g),U9({values:t,family:d,styles:Ho,config:ue,canonical:g,givenPrefix:s})),L9(r,s,g))}function L9(t,e,n){var r=n.prefix,s=n.iconName;if(t||!r||!s)return{prefix:r,iconName:s};var i=e==="fa"?xb(s):{},o=vs(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Ho.far&&Ho.fas&&!ue.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var F9=lb.filter(function(t){return t!==xt||t!==la}),$9=Object.keys(dh).filter(function(t){return t!==xt}).map(function(t){return Object.keys(dh[t])}).flat();function U9(t){var e=t.values,n=t.family,r=t.canonical,s=t.givenPrefix,i=s===void 0?"":s,o=t.styles,l=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,h=n===la,d=e.includes("fa-duotone")||e.includes("fad"),g=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!h&&(d||g||v)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&F9.includes(n)){var D=Object.keys(l).find(function(_){return $9.includes(_)});if(D||u.autoFetchSvg){var N=cM.get(n).defaultShortPrefixId;r.prefix=N,r.iconName=vs(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Zr()||"fas"),r}var j9=function(){function t(){OV(this,t),this.definitions={}}return MV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=K(K({},n.definitions[l]||{}),o[l]),Ab(l,o[l]),Db()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],l=o.prefix,c=o.iconName,u=o.icon,h=u[2];n[l]||(n[l]={}),h.length>0&&h.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][c]=u}),n}}])}(),nv=[],Xs={},ci={},B9=Object.keys(ci);function z9(t,e){var n=e.mixoutsTo;return nv=t,Xs={},Object.keys(ci).forEach(function(r){B9.indexOf(r)===-1&&delete ci[r]}),nv.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Ml(s[o])==="object"&&Object.keys(s[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=s[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Xs[o]||(Xs[o]=[]),Xs[o].push(i[o])})}r.provides&&r.provides(ci)}),n}function _h(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Xs[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ps(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=Xs[t]||[];s.forEach(function(i){i.apply(null,n)})}function es(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ci[t]?ci[t].apply(null,e):void 0}function bh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Zr();if(e)return e=vs(n,e)||e,Jg(Vb.definitions,n,e)||Jg(vn.styles,n,e)}var Vb=new j9,q9=function(){ue.autoReplaceSvg=!1,ue.observeMutations=!1,Ps("noAuto")},H9={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return br?(Ps("beforeI2svg",e),es("pseudoElements2svg",e),es("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ue.autoReplaceSvg===!1&&(ue.autoReplaceSvg=!0),ue.observeMutations=!0,C9(function(){G9({autoReplaceSvgRoot:n}),Ps("watch",e)})}},W9={icon:function(e){if(e===null)return null;if(Ml(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:vs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ic(e[0]);return{prefix:r,iconName:vs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ue.cssPrefix,"-"))>-1||e.match(f9))){var s=Ac(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||Zr(),iconName:vs(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=Zr();return{prefix:i,iconName:vs(i,e)||e}}}},Qt={noAuto:q9,config:ue,dom:H9,parse:W9,library:Vb,findIconDefinition:bh,toHtml:ua},G9=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ge:n;(Object.keys(vn.styles).length>0||ue.autoFetchSvg)&&br&&ue.autoReplaceSvg&&Qt.dom.i2svg({node:r})};function Sc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ua(r)})}}),Object.defineProperty(t,"node",{get:function(){if(br){var r=Ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function K9(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(Qf(o)&&n.found&&!r.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};s.style=Tc(K(K({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Y9(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(ue.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},s),{},{id:o}),children:r}]}]}function Q9(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Zf(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,l=t.symbol,c=t.maskId,u=t.extra,h=t.watchable,d=h===void 0?!1:h,g=r.found?r:n,v=g.width,D=g.height,N=[ue.replacementClass,i?"".concat(ue.cssPrefix,"-").concat(i):""].filter(function(F){return u.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(u.classes).join(" "),_={children:[],attributes:K(K({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:N,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(D)})};!Q9(u.attributes)&&!u.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),d&&(_.attributes[Cs]="");var R=K(K({},_),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:l,styles:K({},u.styles)}),S=r.found&&n.found?es("generateAbstractMask",R)||{children:[],attributes:{}}:es("generateAbstractIcon",R)||{children:[],attributes:{}},O=S.children,x=S.attributes;return R.children=O,R.attributes=x,l?Y9(R):K9(R)}function rv(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.extra,o=t.watchable,l=o===void 0?!1:o,c=K(K({},i.attributes),{},{class:i.classes.join(" ")});l&&(c[Cs]="");var u=K({},i.styles);Qf(s)&&(u.transform=A9({transform:s,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=Tc(u);h.length>0&&(c.style=h);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),d}function X9(t){var e=t.content,n=t.extra,r=K(K({},n.attributes),{},{class:n.classes.join(" ")}),s=Tc(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),i}var wu=vn.styles;function Eh(t){var e=t[0],n=t[1],r=t.slice(4),s=wc(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(ue.cssPrefix,"-").concat(_u.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(_u.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(_u.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var J9={found:!1,width:512,height:512};function Z9(t,e){!mb&&!ue.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function wh(t,e){var n=e;return e==="fa"&&ue.styleDefault!==null&&(e=Zr()),new Promise(function(r,s){if(n==="fa"){var i=xb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&wu[e]&&wu[e][t]){var o=wu[e][t];return r(Eh(o))}Z9(t,e),r(K(K({},J9),{},{icon:ue.showMissingIcons&&t?es("missingIconAbstract")||{}:{}}))})}var sv=function(){},Th=ue.measurePerformance&&$a&&$a.mark&&$a.measure?$a:{mark:sv,measure:sv},eo='FA "7.0.0"',eL=function(e){return Th.mark("".concat(eo," ").concat(e," begins")),function(){return Mb(e)}},Mb=function(e){Th.mark("".concat(eo," ").concat(e," ends")),Th.measure("".concat(eo," ").concat(e),"".concat(eo," ").concat(e," begins"),"".concat(eo," ").concat(e," ends"))},ed={begin:eL,end:Mb},nl=function(){};function iv(t){var e=t.getAttribute?t.getAttribute(Cs):null;return typeof e=="string"}function tL(t){var e=t.getAttribute?t.getAttribute(Gf):null,n=t.getAttribute?t.getAttribute(Kf):null;return e&&n}function nL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ue.replacementClass)}function rL(){if(ue.autoReplaceSvg===!0)return rl.replace;var t=rl[ue.autoReplaceSvg];return t||rl.replace}function sL(t){return Ge.createElementNS("http://www.w3.org/2000/svg",t)}function iL(t){return Ge.createElement(t)}function Lb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?sL:iL:n;if(typeof t=="string")return Ge.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(Lb(o,{ceFn:r}))}),s}function oL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var rl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(Lb(s),n)}),n.getAttribute(Cs)===null&&ue.keepOriginalSource){var r=Ge.createComment(oL(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Yf(n).indexOf(ue.replacementClass))return rl.replace(e);var s=new RegExp("".concat(ue.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,c){return c===ue.replacementClass||c.match(s)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ua(l)}).join(`
`);n.setAttribute(Cs,""),n.innerHTML=o}};function ov(t){t()}function Fb(t,e){var n=typeof e=="function"?e:nl;if(t.length===0)n();else{var r=ov;ue.mutateApproach===c9&&(r=Jr.requestAnimationFrame||ov),r(function(){var s=rL(),i=ed.begin("mutate");t.map(s),i(),n()})}}var td=!1;function $b(){td=!0}function Ih(){td=!1}var Fl=null;function av(t){if(Hg&&ue.observeMutations){var e=t.treeCallback,n=e===void 0?nl:e,r=t.nodeCallback,s=r===void 0?nl:r,i=t.pseudoElementsCallback,o=i===void 0?nl:i,l=t.observeMutationsRoot,c=l===void 0?Ge:l;Fl=new Hg(function(u){if(!td){var h=Zr();Ci(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!iv(d.addedNodes[0])&&(ue.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&ue.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&iv(d.target)&&~m9.indexOf(d.attributeName))if(d.attributeName==="class"&&tL(d.target)){var g=Ac(Yf(d.target)),v=g.prefix,D=g.iconName;d.target.setAttribute(Gf,v||h),D&&d.target.setAttribute(Kf,D)}else nL(d.target)&&s(d.target)})}}),br&&Fl.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function aL(){Fl&&Fl.disconnect()}function lL(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function cL(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=Ac(Yf(t));return s.prefix||(s.prefix=Zr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=x9(s.prefix,t.innerText)||Jf(s.prefix,Ib(t.innerText))),!s.iconName&&ue.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function uL(t){var e=Ci(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function hL(){return{iconName:null,prefix:null,transform:Dn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=cL(t),r=n.iconName,s=n.prefix,i=n.rest,o=uL(t),l=_h("parseNodeAttributes",{},t),c=e.styleParser?lL(t):[];return K({iconName:r,prefix:s,transform:Dn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var fL=vn.styles;function Ub(t){var e=ue.autoReplaceSvg==="nest"?lv(t,{styleParser:!1}):lv(t);return~e.extra.classes.indexOf(yb)?es("generateLayersText",t,e):es("generateSvgReplacementMutation",t,e)}function dL(){return[].concat(In(cb),In(ub))}function cv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!br)return Promise.resolve();var n=Ge.documentElement.classList,r=function(d){return n.add("".concat(Kg,"-").concat(d))},s=function(d){return n.remove("".concat(Kg,"-").concat(d))},i=ue.autoFetchSvg?dL():K0.concat(Object.keys(fL));i.includes("fa")||i.push("fa");var o=[".".concat(yb,":not([").concat(Cs,"])")].concat(i.map(function(h){return".".concat(h,":not([").concat(Cs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Ci(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var c=ed.begin("onTree"),u=l.reduce(function(h,d){try{var g=Ub(d);g&&h.push(g)}catch(v){mb||v.name==="MissingIcon"&&console.error(v)}return h},[]);return new Promise(function(h,d){Promise.all(u).then(function(g){Fb(g,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),h()})}).catch(function(g){c(),d(g)})})}function pL(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ub(t).then(function(n){n&&Fb([n],e)})}function mL(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:bh(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:bh(s||{})),t(r,K(K({},n),{},{mask:s}))}}var gL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Dn:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,c=l===void 0?null:l,u=n.maskId,h=u===void 0?null:u,d=n.classes,g=d===void 0?[]:d,v=n.attributes,D=v===void 0?{}:v,N=n.styles,_=N===void 0?{}:N;if(e){var R=e.prefix,S=e.iconName,O=e.icon;return Sc(K({type:"icon"},e),function(){return Ps("beforeDOMElementCreation",{iconDefinition:e,params:n}),Zf({icons:{main:Eh(O),mask:c?Eh(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:S,transform:K(K({},Dn),s),symbol:o,maskId:h,extra:{attributes:D,styles:_,classes:g}})})}},vL={mixout:function(){return{icon:mL(gL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=cv,n.nodeCallback=pL,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?Ge:r,i=n.callback,o=i===void 0?function(){}:i;return cv(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.prefix,o=r.transform,l=r.symbol,c=r.mask,u=r.maskId,h=r.extra;return new Promise(function(d,g){Promise.all([wh(s,i),c.iconName?wh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var D=wc(v,2),N=D[0],_=D[1];d([n,Zf({icons:{main:N,mask:_},prefix:i,iconName:s,transform:o,symbol:l,maskId:u,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,l=n.styles,c=Tc(l);c.length>0&&(s.style=c);var u;return Qf(o)&&(u=es("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:s}}}},yL={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return Sc({type:"layer"},function(){Ps("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(ue.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},_L={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,i=s===void 0?[]:s,o=r.attributes,l=o===void 0?{}:o,c=r.styles,u=c===void 0?{}:c;return Sc({type:"counter",content:n},function(){return Ps("beforeDOMElementCreation",{content:n,params:r}),X9({content:n.toString(),extra:{attributes:l,styles:u,classes:["".concat(ue.cssPrefix,"-layers-counter")].concat(In(i))}})})}}}},bL={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Dn:s,o=r.classes,l=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,h=r.styles,d=h===void 0?{}:h;return Sc({type:"text",content:n},function(){return Ps("beforeDOMElementCreation",{content:n,params:r}),rv({content:n,transform:K(K({},Dn),i),extra:{attributes:u,styles:d,classes:["".concat(ue.cssPrefix,"-layers-text")].concat(In(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.transform,i=r.extra,o=null,l=null;if(W0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return Promise.resolve([n,rv({content:n.innerHTML,width:o,height:l,transform:s,extra:i,watchable:!0})])}}},jb=new RegExp('"',"ug"),uv=[1105920,1112319],hv=K(K(K(K({},{FontAwesome:{normal:"fas",400:"fas"}}),lM),a9),vM),Ah=Object.keys(hv).reduce(function(t,e){return t[e.toLowerCase()]=hv[e],t},{}),EL=Object.keys(Ah).reduce(function(t,e){var n=Ah[e];return t[e]=n[900]||In(Object.entries(n))[0][1],t},{});function wL(t){var e=t.replace(jb,"");return Ib(In(e)[0]||"")}function TL(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(jb,""),s=r.codePointAt(0),i=s>=uv[0]&&s<=uv[1],o=r.length===2?r[0]===r[1]:!1;return i||o||e}function IL(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Ah[n]||{})[s]||EL[n]}function fv(t,e){var n="".concat(l9).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=Ci(t.children),o=i.filter(function(H){return H.getAttribute(mh)===e})[0],l=Jr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(d9),h=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){var g=l.getPropertyValue("content"),v=IL(c,h),D=wL(g),N=u[0].startsWith("FontAwesome"),_=TL(l),R=Jf(v,D),S=R;if(N){var O=O9(D);O.iconName&&O.prefix&&(R=O.iconName,v=O.prefix)}if(R&&!_&&(!o||o.getAttribute(Gf)!==v||o.getAttribute(Kf)!==S)){t.setAttribute(n,S),o&&t.removeChild(o);var x=hL(),F=x.extra;F.attributes[mh]=e,wh(R,v).then(function(H){var b=Zf(K(K({},x),{},{icons:{main:H,mask:Ob()},prefix:v,iconName:S,extra:F,watchable:!0})),E=Ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=b.map(function(w){return ua(w)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function AL(t){return Promise.all([fv(t,"::before"),fv(t,"::after")])}function SL(t){return t.parentNode!==document.head&&!~u9.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(mh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var RL=function(e){return!!e&&pb.some(function(n){return e.includes(n)})},CL=function(e){if(!e)return[];for(var n=new Set,r=[e],s=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var v=l[o];r=r.flatMap(function(D){return D.split(v).map(function(N){return N.replace(/,\s*$/,"").trim()})})},o=0,l=s;o<l.length;o++)i();r=r.flatMap(function(g){return g.includes("(")?g:g.split(",").map(function(v){return v.trim()})});var c=tl(r),u;try{for(c.s();!(u=c.n()).done;){var h=u.value;if(RL(h)){var d=pb.reduce(function(g,v){return g.replace(v,"")},h);d!==""&&d!=="*"&&n.add(d)}}}catch(g){c.e(g)}finally{c.f()}return n};function dv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(br){var n;if(e)n=t;else if(ue.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,s=tl(document.styleSheets),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;try{var l=tl(o.cssRules),c;try{for(l.s();!(c=l.n()).done;){var u=c.value,h=CL(u.selectorText),d=tl(h),g;try{for(d.s();!(g=d.n()).done;){var v=g.value;r.add(v)}}catch(N){d.e(N)}finally{d.f()}}}catch(N){l.e(N)}finally{l.f()}}catch(N){ue.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(N.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(N){s.e(N)}finally{s.f()}if(!r.size)return;var D=Array.from(r).join(", ");try{n=t.querySelectorAll(D)}catch{}}return new Promise(function(N,_){var R=Ci(n).filter(SL).map(AL),S=ed.begin("searchPseudoElements");$b(),Promise.all(R).then(function(){S(),Ih(),N()}).catch(function(){S(),Ih(),_()})})}}var PL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=dv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?Ge:r;ue.searchPseudoElements&&dv(s)}}},pv=!1,kL={mixout:function(){return{dom:{unwatch:function(){$b(),pv=!0}}}},hooks:function(){return{bootstrap:function(){av(_h("mutationObserverCallbacks",{}))},noAuto:function(){aL()},watch:function(n){var r=n.observeMutationsRoot;pv?Ih():av(_h("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},NL={mixout:function(){return{parse:{transform:function(n){return mv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=mv(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),h="rotate(".concat(s.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(h)},g={transform:"translate(".concat(o/2*-1," -256)")},v={outer:l,inner:d,path:g};return{tag:"g",attributes:K({},v.outer),children:[{tag:"g",attributes:K({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:K(K({},r.icon.attributes),v.path)}]}]}}}},Tu={x:0,y:0,width:"100%",height:"100%"};function gv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function DL(t){return t.tag==="g"?t.children:[t]}var xL={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?Ac(s.split(" ").map(function(o){return o.trim()})):Ob();return i.prefix||(i.prefix=Zr()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,l=n.maskId,c=n.transform,u=i.width,h=i.icon,d=o.width,g=o.icon,v=I9({transform:c,containerWidth:d,iconWidth:u}),D={tag:"rect",attributes:K(K({},Tu),{},{fill:"white"})},N=h.children?{children:h.children.map(gv)}:{},_={tag:"g",attributes:K({},v.inner),children:[gv(K({tag:h.tag,attributes:K(K({},h.attributes),v.path)},N))]},R={tag:"g",attributes:K({},v.outer),children:[_]},S="mask-".concat(l||Qg()),O="clip-".concat(l||Qg()),x={tag:"mask",attributes:K(K({},Tu),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,R]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:DL(g)},x]};return r.push(F,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(S,")")},Tu)}),{children:r,attributes:s}}}},OL={provides:function(e){var n=!1;Jr.matchMedia&&(n=Jr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:K(K({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=K(K({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:K(K({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:K(K({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(K({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:K(K({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:K(K({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:K(K({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(K({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},VL={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},ML=[R9,vL,yL,_L,bL,PL,kL,NL,xL,OL,VL];z9(ML,{mixoutsTo:Qt});Qt.noAuto;Qt.config;var Bb=Qt.library;Qt.dom;var Sh=Qt.parse;Qt.findIconDefinition;Qt.toHtml;var LL=Qt.icon;Qt.layer;Qt.text;Qt.counter;function At(t,e,n){return(e=jL(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function nr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vv(Object(n),!0).forEach(function(r){At(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function FL(t,e){if(t==null)return{};var n,r,s=$L(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function $L(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function UL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jL(t){var e=UL(t,"string");return typeof e=="symbol"?e:e+""}function $l(t){"@babel/helpers - typeof";return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$l(t)}function Iu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?At({},t,e):{}}function BL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},At(At(At(At(At(At(At(At(At(At(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),At(At(At(At(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var zL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zb={exports:{}};(function(t){(function(e){var n=function(R,S,O){if(!u(S)||d(S)||g(S)||v(S)||c(S))return S;var x,F=0,H=0;if(h(S))for(x=[],H=S.length;F<H;F++)x.push(n(R,S[F],O));else{x={};for(var b in S)Object.prototype.hasOwnProperty.call(S,b)&&(x[R(b,O)]=n(R,S[b],O))}return x},r=function(R,S){S=S||{};var O=S.separator||"_",x=S.split||/(?=[A-Z])/;return R.split(x).join(O)},s=function(R){return D(R)?R:(R=R.replace(/[\-_\s]+(.)?/g,function(S,O){return O?O.toUpperCase():""}),R.substr(0,1).toLowerCase()+R.substr(1))},i=function(R){var S=s(R);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(R,S){return r(R,S).toLowerCase()},l=Object.prototype.toString,c=function(R){return typeof R=="function"},u=function(R){return R===Object(R)},h=function(R){return l.call(R)=="[object Array]"},d=function(R){return l.call(R)=="[object Date]"},g=function(R){return l.call(R)=="[object RegExp]"},v=function(R){return l.call(R)=="[object Boolean]"},D=function(R){return R=R-0,R===R},N=function(R,S){var O=S&&"process"in S?S.process:S;return typeof O!="function"?R:function(x,F){return O(x,R,F)}},_={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(R,S){return n(N(s,S),R)},decamelizeKeys:function(R,S){return n(N(o,S),R,S)},pascalizeKeys:function(R,S){return n(N(i,S),R)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(zL)})(zb);var qL=zb.exports,HL=["class","style"];function WL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=qL.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function GL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return qb(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var h=t.attributes[u];switch(u){case"class":c.class=GL(h);break;case"style":c.style=WL(h);break;default:c.attrs[u]=h}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=FL(n,HL);return Jl(t.tag,nr(nr(nr({},e),{},{class:s.class,style:nr(nr({},s.style),o)},s.attrs),l),r)}var Hb=!1;try{Hb=!0}catch{}function KL(){if(!Hb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function yv(t){if(t&&$l(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sh.icon)return Sh.icon(t);if(t===null)return null;if($l(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var YL=jh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Oe(function(){return yv(e.icon)}),i=Oe(function(){return Iu("classes",BL(e))}),o=Oe(function(){return Iu("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),l=Oe(function(){return Iu("mask",yv(e.mask))}),c=Oe(function(){var h=nr(nr(nr(nr({},i.value),o.value),l.value),{},{symbol:e.symbol,maskId:e.maskId});return h.title=e.title,h.titleId=e.titleId,LL(s.value,h)});lo(c,function(h){if(!h)return KL("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var u=Oe(function(){return c.value?qb(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var QL={prefix:"fas",iconName:"truck",icon:[576,512,[128666,9951],"f0d1","M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},XL={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},JL={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},ZL={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},e7=ZL,t7={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},n7={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},r7={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},s7={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256a192 192 0 1 0 -384 0 192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},i7={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},o7=i7,a7={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},l7={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},c7={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},u7=c7,h7={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z"]},f7={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},d7=f7,p7={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm84.4-299.3l-80 128c-4.2 6.7-11.4 10.9-19.3 11.3s-15.5-3.2-20.2-9.6l-48-64c-8-10.6-5.8-25.6 4.8-33.6s25.6-5.8 33.6 4.8l27 36 61.4-98.3c7-11.2 21.8-14.7 33.1-7.6s14.7 21.8 7.6 33.1z"]},m7=p7,g7={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},v7={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},y7={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]},_7={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},b7={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},E7={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var w7={prefix:"fab",iconName:"google",icon:[512,512,[],"f1a0","M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"]},T7={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},I7={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},A7={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},S7={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},R7={prefix:"fab",iconName:"spotify",icon:[512,512,[],"f1bc","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM356.7 372.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},C7={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};Bb.add(u7,y7,v7,_7,e7,JL,a7,d7,o7,l7,h7,t7,s7,XL,m7,r7,b7,QL,g7,n7,E7);Bb.add(w7,R7,S7,I7,C7,A7,T7);const nd=LT(V6);nd.component("font-awesome-icon",YL);nd.use(j0);nd.mount("#app");
