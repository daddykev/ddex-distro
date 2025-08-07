(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},ti=[],Vn=()=>{},mw=()=>!1,Ul=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ch=t=>t.startsWith("onUpdate:"),ft=Object.assign,Ph=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gw=Object.prototype.hasOwnProperty,$e=(t,e)=>gw.call(t,e),he=Array.isArray,ni=t=>Go(t)==="[object Map]",Ti=t=>Go(t)==="[object Set]",Kf=t=>Go(t)==="[object Date]",_e=t=>typeof t=="function",tt=t=>typeof t=="string",jn=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",_v=t=>(ze(t)||_e(t))&&_e(t.then)&&_e(t.catch),bv=Object.prototype.toString,Go=t=>bv.call(t),vw=t=>Go(t).slice(8,-1),wv=t=>Go(t)==="[object Object]",kh=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Rh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yw=/-(\w)/g,ln=jl(t=>t.replace(yw,(e,n)=>n?n.toUpperCase():"")),_w=/\B([A-Z])/g,Nr=jl(t=>t.replace(_w,"-$1").toLowerCase()),Bl=jl(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=jl(t=>t?`on${Bl(t)}`:""),Fs=(t,e)=>!Object.is(t,e),ja=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Au=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},rl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bw=t=>{const e=tt(t)?Number(t):NaN;return isNaN(e)?t:e};let Yf;const zl=()=>Yf||(Yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ss(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=tt(s)?Iw(s):ss(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(tt(t)||ze(t))return t}const ww=/;(?![^(]*\))/g,Ew=/:([^]+)/,Tw=/\/\*[^]*?\*\//g;function Iw(t){const e={};return t.replace(Tw,"").split(ww).forEach(n=>{if(n){const s=n.split(Ew);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ut(t){let e="";if(tt(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const s=Ut(t[n]);s&&(e+=s+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Aw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sw=Rh(Aw);function Ev(t){return!!t||t===""}function Rw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Tr(t[s],e[s]);return n}function Tr(t,e){if(t===e)return!0;let n=Kf(t),s=Kf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=jn(t),s=jn(e),n||s)return t===e;if(n=he(t),s=he(e),n||s)return n&&s?Rw(t,e):!1;if(n=ze(t),s=ze(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Tr(t[o],e[o]))return!1}}return String(t)===String(e)}function Dh(t,e){return t.findIndex(n=>Tr(n,e))}const Tv=t=>!!(t&&t.__v_isRef===!0),G=t=>tt(t)?t:t==null?"":he(t)||ze(t)&&(t.toString===bv||!_e(t.toString))?Tv(t)?G(t.value):JSON.stringify(t,Iv,2):String(t),Iv=(t,e)=>Tv(e)?Iv(t,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Bc(s,i)+" =>"]=r,n),{})}:Ti(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bc(n))}:jn(e)?Bc(e):ze(e)&&!he(e)&&!wv(e)?String(e):e,Bc=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Cw{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Pw(){return Bt}let qe;const zc=new WeakSet;class Av{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zc.has(this)&&(zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qf(this),Cv(this);const e=qe,n=_n;qe=this,_n=!0;try{return this.fn()}finally{Pv(this),qe=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oh(e);this.deps=this.depsTail=void 0,Qf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Su(this)&&this.run()}get dirty(){return Su(this)}}let Sv=0,so,ro;function Rv(t,e=!1){if(t.flags|=8,e){t.next=ro,ro=t;return}t.next=so,so=t}function Nh(){Sv++}function xh(){if(--Sv>0)return;if(ro){let e=ro;for(ro=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;so;){let e=so;for(so=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Cv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pv(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Oh(s),kw(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Su(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ao)||(t.globalVersion=Ao,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Su(t))))return;t.flags|=2;const e=t.dep,n=qe,s=_n;qe=t,_n=!0;try{Cv(t);const r=t.fn(t._value);(e.version===0||Fs(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{qe=n,_n=s,Pv(t),t.flags&=-3}}function Oh(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Oh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function kw(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const Dv=[];function us(){Dv.push(_n),_n=!1}function hs(){const t=Dv.pop();_n=t===void 0?!0:t}function Qf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=qe;qe=void 0;try{e()}finally{qe=n}}}let Ao=0;class Dw{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!qe||!_n||qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==qe)n=this.activeLink=new Dw(qe,this),qe.deps?(n.prevDep=qe.depsTail,qe.depsTail.nextDep=n,qe.depsTail=n):qe.deps=qe.depsTail=n,Nv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=qe.depsTail,n.nextDep=void 0,qe.depsTail.nextDep=n,qe.depsTail=n,qe.deps===n&&(qe.deps=s)}return n}trigger(e){this.version++,Ao++,this.notify(e)}notify(e){Nh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xh()}}}function Nv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Nv(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ru=new WeakMap,br=Symbol(""),Cu=Symbol(""),So=Symbol("");function Ct(t,e,n){if(_n&&qe){let s=Ru.get(t);s||Ru.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Vh),r.map=s,r.key=n),r.track()}}function Zn(t,e,n,s,r,i){const o=Ru.get(t);if(!o){Ao++;return}const l=c=>{c&&c.trigger()};if(Nh(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&kh(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,g)=>{(g==="length"||g===So||!jn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(So)),e){case"add":c?u&&l(o.get("length")):(l(o.get(br)),ni(t)&&l(o.get(Cu)));break;case"delete":c||(l(o.get(br)),ni(t)&&l(o.get(Cu)));break;case"set":ni(t)&&l(o.get(br));break}}xh()}function Hr(t){const e=Me(t);return e===t?e:(Ct(e,"iterate",So),on(t)?e:e.map(_t))}function ql(t){return Ct(t=Me(t),"iterate",So),t}const Nw={__proto__:null,[Symbol.iterator](){return qc(this,Symbol.iterator,_t)},concat(...t){return Hr(this).concat(...t.map(e=>he(e)?Hr(e):e))},entries(){return qc(this,"entries",t=>(t[1]=_t(t[1]),t))},every(t,e){return Yn(this,"every",t,e,void 0,arguments)},filter(t,e){return Yn(this,"filter",t,e,n=>n.map(_t),arguments)},find(t,e){return Yn(this,"find",t,e,_t,arguments)},findIndex(t,e){return Yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Yn(this,"findLast",t,e,_t,arguments)},findLastIndex(t,e){return Yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return Yn(this,"map",t,e,void 0,arguments)},pop(){return zi(this,"pop")},push(...t){return zi(this,"push",t)},reduce(t,...e){return Xf(this,"reduce",t,e)},reduceRight(t,...e){return Xf(this,"reduceRight",t,e)},shift(){return zi(this,"shift")},some(t,e){return Yn(this,"some",t,e,void 0,arguments)},splice(...t){return zi(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return zi(this,"unshift",t)},values(){return qc(this,"values",_t)}};function qc(t,e,n){const s=ql(t),r=s[e]();return s!==t&&!on(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const xw=Array.prototype;function Yn(t,e,n,s,r,i){const o=ql(t),l=o!==t&&!on(t),c=o[e];if(c!==xw[e]){const p=c.apply(t,i);return l?_t(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,_t(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,s);return l&&r?r(d):d}function Xf(t,e,n,s){const r=ql(t);let i=n;return r!==t&&(on(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,_t(l),c,t)}),r[e](i,...s)}function Hc(t,e,n){const s=Me(t);Ct(s,"iterate",So);const r=s[e](...n);return(r===-1||r===!1)&&$h(n[0])?(n[0]=Me(n[0]),s[e](...n)):r}function zi(t,e,n=[]){us(),Nh();const s=Me(t)[e].apply(t,n);return xh(),hs(),s}const Ow=Rh("__proto__,__v_isRef,__isVue"),xv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn));function Vw(t){jn(t)||(t=String(t));const e=Me(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class Ov{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Hw:$v:i?Lv:Mv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=he(e);if(!r){let c;if(o&&(c=Nw[n]))return c;if(n==="hasOwnProperty")return Vw}const l=Reflect.get(e,n,Dt(e)?e:s);return(jn(n)?xv.has(n):Ow(n))||(r||Ct(e,"get",n),i)?l:Dt(l)?o&&kh(n)?l:l.value:ze(l)?r?Uv(l):Hl(l):l}}class Vv extends Ov{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=qs(i);if(!on(s)&&!qs(s)&&(i=Me(i),s=Me(s)),!he(e)&&Dt(i)&&!Dt(s))return c?!1:(i.value=s,!0)}const o=he(e)&&kh(n)?Number(n)<e.length:$e(e,n),l=Reflect.set(e,n,s,Dt(e)?e:r);return e===Me(r)&&(o?Fs(s,i)&&Zn(e,"set",n,s):Zn(e,"add",n,s)),l}deleteProperty(e,n){const s=$e(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Zn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!jn(n)||!xv.has(n))&&Ct(e,"has",n),s}ownKeys(e){return Ct(e,"iterate",he(e)?"length":br),Reflect.ownKeys(e)}}class Mw extends Ov{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lw=new Vv,$w=new Mw,Fw=new Vv(!0);const Pu=t=>t,Ra=t=>Reflect.getPrototypeOf(t);function Uw(t,e,n){return function(...s){const r=this.__v_raw,i=Me(r),o=ni(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),d=n?Pu:e?il:_t;return!e&&Ct(i,"iterate",c?Cu:br),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jw(t,e){const n={get(r){const i=this.__v_raw,o=Me(i),l=Me(r);t||(Fs(r,l)&&Ct(o,"get",r),Ct(o,"get",l));const{has:c}=Ra(o),u=e?Pu:t?il:_t;if(c.call(o,r))return u(i.get(r));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ct(Me(r),"iterate",br),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Me(i),l=Me(r);return t||(Fs(r,l)&&Ct(o,"has",r),Ct(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=Me(l),u=e?Pu:t?il:_t;return!t&&Ct(c,"iterate",br),l.forEach((d,p)=>r.call(i,u(d),u(p),o))}};return ft(n,t?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(r){!e&&!on(r)&&!qs(r)&&(r=Me(r));const i=Me(this);return Ra(i).has.call(i,r)||(i.add(r),Zn(i,"add",r,r)),this},set(r,i){!e&&!on(i)&&!qs(i)&&(i=Me(i));const o=Me(this),{has:l,get:c}=Ra(o);let u=l.call(o,r);u||(r=Me(r),u=l.call(o,r));const d=c.call(o,r);return o.set(r,i),u?Fs(i,d)&&Zn(o,"set",r,i):Zn(o,"add",r,i),this},delete(r){const i=Me(this),{has:o,get:l}=Ra(i);let c=o.call(i,r);c||(r=Me(r),c=o.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return c&&Zn(i,"delete",r,void 0),u},clear(){const r=Me(this),i=r.size!==0,o=r.clear();return i&&Zn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Uw(r,t,e)}),n}function Mh(t,e){const n=jw(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get($e(n,r)&&r in s?n:s,r,i)}const Bw={get:Mh(!1,!1)},zw={get:Mh(!1,!0)},qw={get:Mh(!0,!1)};const Mv=new WeakMap,Lv=new WeakMap,$v=new WeakMap,Hw=new WeakMap;function Ww(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gw(t){return t.__v_skip||!Object.isExtensible(t)?0:Ww(vw(t))}function Hl(t){return qs(t)?t:Lh(t,!1,Lw,Bw,Mv)}function Fv(t){return Lh(t,!1,Fw,zw,Lv)}function Uv(t){return Lh(t,!0,$w,qw,$v)}function Lh(t,e,n,s,r){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Gw(t);if(i===0)return t;const o=r.get(t);if(o)return o;const l=new Proxy(t,i===2?s:n);return r.set(t,l),l}function si(t){return qs(t)?si(t.__v_raw):!!(t&&t.__v_isReactive)}function qs(t){return!!(t&&t.__v_isReadonly)}function on(t){return!!(t&&t.__v_isShallow)}function $h(t){return t?!!t.__v_raw:!1}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function Kw(t){return!$e(t,"__v_skip")&&Object.isExtensible(t)&&Au(t,"__v_skip",!0),t}const _t=t=>ze(t)?Hl(t):t,il=t=>ze(t)?Uv(t):t;function Dt(t){return t?t.__v_isRef===!0:!1}function Te(t){return jv(t,!1)}function Yw(t){return jv(t,!0)}function jv(t,e){return Dt(t)?t:new Qw(t,e)}class Qw{constructor(e,n){this.dep=new Vh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Me(e),this._value=n?e:_t(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||on(e)||qs(e);e=s?e:Me(e),Fs(e,n)&&(this._rawValue=e,this._value=s?e:_t(e),this.dep.trigger())}}function os(t){return Dt(t)?t.value:t}const Xw={get:(t,e,n)=>e==="__v_raw"?t:os(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Dt(r)&&!Dt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Bv(t){return si(t)?t:new Proxy(t,Xw)}class Jw{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Vh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return Rv(this,!0),!0}get value(){const e=this.dep.track();return kv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zw(t,e,n=!1){let s,r;return _e(t)?s=t:(s=t.get,r=t.set),new Jw(s,r,n)}const Pa={},ol=new WeakMap;let fr;function eE(t,e=!1,n=fr){if(n){let s=ol.get(n);s||ol.set(n,s=[]),s.push(t)}}function tE(t,e,n=Be){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=x=>r?x:on(x)||r===!1||r===0?es(x,1):es(x);let d,p,g,v,D=!1,A=!1;if(Dt(t)?(p=()=>t.value,D=on(t)):si(t)?(p=()=>u(t),D=!0):he(t)?(A=!0,D=t.some(x=>si(x)||on(x)),p=()=>t.map(x=>{if(Dt(x))return x.value;if(si(x))return u(x);if(_e(x))return c?c(x,2):x()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){us();try{g()}finally{hs()}}const x=fr;fr=d;try{return c?c(t,3,[v]):t(v)}finally{fr=x}}:p=Vn,e&&r){const x=p,$=r===!0?1/0:r;p=()=>es(x(),$)}const _=Pw(),C=()=>{d.stop(),_&&_.active&&Ph(_.effects,d)};if(i&&e){const x=e;e=(...$)=>{x(...$),C()}}let R=A?new Array(t.length).fill(Pa):Pa;const O=x=>{if(!(!(d.flags&1)||!d.dirty&&!x))if(e){const $=d.run();if(r||D||(A?$.some((K,b)=>Fs(K,R[b])):Fs($,R))){g&&g();const K=fr;fr=d;try{const b=[$,R===Pa?void 0:A&&R[0]===Pa?[]:R,v];R=$,c?c(e,3,b):e(...b)}finally{fr=K}}}else d.run()};return l&&l(O),d=new Av(p),d.scheduler=o?()=>o(O,!1):O,v=x=>eE(x,!1,d),g=d.onStop=()=>{const x=ol.get(d);if(x){if(c)c(x,4);else for(const $ of x)$();ol.delete(d)}},e?s?O(!0):R=d.run():o?o(O.bind(null,!0),!0):d.run(),C.pause=d.pause.bind(d),C.resume=d.resume.bind(d),C.stop=C,C}function es(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Dt(t))es(t.value,e,n);else if(he(t))for(let s=0;s<t.length;s++)es(t[s],e,n);else if(Ti(t)||ni(t))t.forEach(s=>{es(s,e,n)});else if(wv(t)){for(const s in t)es(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&es(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ko(t,e,n,s){try{return s?t(...s):t()}catch(r){Wl(r,e,n)}}function En(t,e,n,s){if(_e(t)){const r=Ko(t,e,n,s);return r&&_v(r)&&r.catch(i=>{Wl(i,e,n)}),r}if(he(t)){const r=[];for(let i=0;i<t.length;i++)r.push(En(t[i],e,n,s));return r}}function Wl(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){us(),Ko(i,null,10,[t,c,u]),hs();return}}nE(t,n,r,s,o)}function nE(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Lt=[];let Cn=-1;const ri=[];let Ds=null,Gr=0;const zv=Promise.resolve();let al=null;function Fh(t){const e=al||zv;return t?e.then(this?t.bind(this):t):e}function sE(t){let e=Cn+1,n=Lt.length;for(;e<n;){const s=e+n>>>1,r=Lt[s],i=Ro(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Uh(t){if(!(t.flags&1)){const e=Ro(t),n=Lt[Lt.length-1];!n||!(t.flags&2)&&e>=Ro(n)?Lt.push(t):Lt.splice(sE(e),0,t),t.flags|=1,qv()}}function qv(){al||(al=zv.then(Wv))}function rE(t){he(t)?ri.push(...t):Ds&&t.id===-1?Ds.splice(Gr+1,0,t):t.flags&1||(ri.push(t),t.flags|=1),qv()}function Jf(t,e,n=Cn+1){for(;n<Lt.length;n++){const s=Lt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Lt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Hv(t){if(ri.length){const e=[...new Set(ri)].sort((n,s)=>Ro(n)-Ro(s));if(ri.length=0,Ds){Ds.push(...e);return}for(Ds=e,Gr=0;Gr<Ds.length;Gr++){const n=Ds[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ds=null,Gr=0}}const Ro=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wv(t){try{for(Cn=0;Cn<Lt.length;Cn++){const e=Lt[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ko(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<Lt.length;Cn++){const e=Lt[Cn];e&&(e.flags&=-2)}Cn=-1,Lt.length=0,Hv(),al=null,(Lt.length||ri.length)&&Wv()}}let Kt=null,Gv=null;function ll(t){const e=Kt;return Kt=t,Gv=t&&t.type.__scopeId||null,e}function xn(t,e=Kt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&cp(-1);const i=ll(e);let o;try{o=t(...r)}finally{ll(i),s._d&&cp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ee(t,e){if(Kt===null)return t;const n=Xl(Kt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Be]=e[r];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&es(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function cr(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(us(),En(c,n,8,[t.el,l,t,e]),hs())}}const iE=Symbol("_vte"),Kv=t=>t.__isTeleport,Ns=Symbol("_leaveCb"),ka=Symbol("_enterCb");function oE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xr(()=>{t.isMounted=!0}),ny(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],Yv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},Qv=t=>{const e=t.subTree;return e.component?Qv(e.component):e},aE={name:"BaseTransition",props:Yv,setup(t,{slots:e}){const n=Sy(),s=oE();return()=>{const r=e.default&&Zv(e.default(),!0);if(!r||!r.length)return;const i=Xv(r),o=Me(t),{mode:l}=o;if(s.isLeaving)return Wc(i);const c=Zf(i);if(!c)return Wc(i);let u=ku(c,o,s,n,p=>u=p);c.type!==$t&&Co(c,u);let d=n.subTree&&Zf(n.subTree);if(d&&d.type!==$t&&!mr(c,d)&&Qv(n).type!==$t){let p=ku(d,o,s,n);if(Co(d,p),l==="out-in"&&c.type!==$t)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Wc(i);l==="in-out"&&c.type!==$t?p.delayLeave=(g,v,D)=>{const A=Jv(s,d);A[String(d.key)]=d,g[Ns]=()=>{v(),g[Ns]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{D(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Xv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==$t){e=n;break}}return e}const lE=aE;function Jv(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ku(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:D,onLeaveCancelled:A,onBeforeAppear:_,onAppear:C,onAfterAppear:R,onAppearCancelled:O}=e,x=String(t.key),$=Jv(n,t),K=(E,k)=>{E&&En(E,s,9,k)},b=(E,k)=>{const N=k[1];K(E,k),he(E)?E.every(P=>P.length<=1)&&N():E.length<=1&&N()},w={mode:o,persisted:l,beforeEnter(E){let k=c;if(!n.isMounted)if(i)k=_||c;else return;E[Ns]&&E[Ns](!0);const N=$[x];N&&mr(t,N)&&N.el[Ns]&&N.el[Ns](),K(k,[E])},enter(E){let k=u,N=d,P=p;if(!n.isMounted)if(i)k=C||u,N=R||d,P=O||p;else return;let I=!1;const Ue=E[ka]=ot=>{I||(I=!0,ot?K(P,[E]):K(N,[E]),w.delayedLeave&&w.delayedLeave(),E[ka]=void 0)};k?b(k,[E,Ue]):Ue()},leave(E,k){const N=String(t.key);if(E[ka]&&E[ka](!0),n.isUnmounting)return k();K(g,[E]);let P=!1;const I=E[Ns]=Ue=>{P||(P=!0,k(),Ue?K(A,[E]):K(D,[E]),E[Ns]=void 0,$[N]===t&&delete $[N])};$[N]=t,v?b(v,[E,I]):I()},clone(E){const k=ku(E,e,n,s,r);return r&&r(k),k}};return w}function Wc(t){if(Gl(t))return t=Hs(t),t.children=null,t}function Zf(t){if(!Gl(t))return Kv(t.type)&&t.children?Xv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&_e(n.default))return n.default()}}function Co(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Co(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zv(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ve?(o.patchFlag&128&&r++,s=s.concat(Zv(o.children,e,l))):(e||o.type!==$t)&&s.push(l!=null?Hs(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function jh(t,e){return _e(t)?ft({name:t.name},e,{setup:t}):t}function ey(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function io(t,e,n,s,r=!1){if(he(t)){t.forEach((D,A)=>io(D,e&&(he(e)?e[A]:e),n,s,r));return}if(oo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&io(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Xl(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Be?l.refs={}:l.refs,p=l.setupState,g=Me(p),v=p===Be?()=>!1:D=>$e(g,D);if(u!=null&&u!==c&&(tt(u)?(d[u]=null,v(u)&&(p[u]=null)):Dt(u)&&(u.value=null)),_e(c))Ko(c,l,12,[o,d]);else{const D=tt(c),A=Dt(c);if(D||A){const _=()=>{if(t.f){const C=D?v(c)?p[c]:d[c]:c.value;r?he(C)&&Ph(C,i):he(C)?C.includes(i)||C.push(i):D?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else D?(d[c]=o,v(c)&&(p[c]=o)):A&&(c.value=o,t.k&&(d[t.k]=o))};o?(_.id=-1,Gt(_,n)):_()}}}zl().requestIdleCallback;zl().cancelIdleCallback;const oo=t=>!!t.type.__asyncLoader,Gl=t=>t.type.__isKeepAlive;function cE(t,e){ty(t,"a",e)}function uE(t,e){ty(t,"da",e)}function ty(t,e,n=kt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Kl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Gl(r.parent.vnode)&&hE(s,e,n,r),r=r.parent}}function hE(t,e,n,s){const r=Kl(e,t,s,!0);sy(()=>{Ph(s[e],r)},n)}function Kl(t,e,n=kt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{us();const l=Yo(n),c=En(e,n,t,o);return l(),hs(),c});return s?r.unshift(i):r.push(i),i}}const ys=t=>(e,n=kt)=>{(!Do||t==="sp")&&Kl(t,(...s)=>e(...s),n)},dE=ys("bm"),xr=ys("m"),fE=ys("bu"),pE=ys("u"),ny=ys("bum"),sy=ys("um"),mE=ys("sp"),gE=ys("rtg"),vE=ys("rtc");function yE(t,e=kt){Kl("ec",t,e)}const ry="components";function cn(t,e){return oy(ry,t,!0,e)||t}const iy=Symbol.for("v-ndc");function _E(t){return tt(t)?oy(ry,t,!1)||t:t||iy}function oy(t,e,n=!0,s=!1){const r=Kt||kt;if(r){const i=r.type;{const l=iT(i,!1);if(l&&(l===e||l===ln(e)||l===Bl(ln(e))))return i}const o=ep(r[t]||i[t],e)||ep(r.appContext[t],e);return!o&&s?i:o}}function ep(t,e){return t&&(t[e]||t[ln(e)]||t[Bl(ln(e))])}function ht(t,e,n,s){let r;const i=n,o=he(t);if(o||tt(t)){const l=o&&si(t);let c=!1,u=!1;l&&(c=!on(t),u=qs(t),t=ql(t)),r=new Array(t.length);for(let d=0,p=t.length;d<p;d++)r[d]=e(c?u?il(_t(t[d])):_t(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(ze(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=e(t[d],d,c,i)}}else r=[];return r}const Du=t=>t?Ry(t)?Xl(t):Du(t.parent):null,ao=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Du(t.parent),$root:t=>Du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ly(t),$forceUpdate:t=>t.f||(t.f=()=>{Uh(t.update)}),$nextTick:t=>t.n||(t.n=Fh.bind(t.proxy)),$watch:t=>UE.bind(t)}),Gc=(t,e)=>t!==Be&&!t.__isScriptSetup&&$e(t,e),bE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Gc(s,e))return o[e]=1,s[e];if(r!==Be&&$e(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&$e(u,e))return o[e]=3,i[e];if(n!==Be&&$e(n,e))return o[e]=4,n[e];Nu&&(o[e]=0)}}const d=ao[e];let p,g;if(d)return e==="$attrs"&&Ct(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Be&&$e(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,$e(g,e))return g[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Gc(r,e)?(r[e]=n,!0):s!==Be&&$e(s,e)?(s[e]=n,!0):$e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==Be&&$e(t,o)||Gc(e,o)||(l=i[0])&&$e(l,o)||$e(s,o)||$e(ao,o)||$e(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tp(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nu=!0;function wE(t){const e=ly(t),n=t.proxy,s=t.ctx;Nu=!1,e.beforeCreate&&np(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:D,activated:A,deactivated:_,beforeDestroy:C,beforeUnmount:R,destroyed:O,unmounted:x,render:$,renderTracked:K,renderTriggered:b,errorCaptured:w,serverPrefetch:E,expose:k,inheritAttrs:N,components:P,directives:I,filters:Ue}=e;if(u&&EE(u,s,null),o)for(const ke in o){const Ie=o[ke];_e(Ie)&&(s[ke]=Ie.bind(n))}if(r){const ke=r.call(n,n);ze(ke)&&(t.data=Hl(ke))}if(Nu=!0,i)for(const ke in i){const Ie=i[ke],Ht=_e(Ie)?Ie.bind(n,n):_e(Ie.get)?Ie.get.bind(n,n):Vn,fn=!_e(Ie)&&_e(Ie.set)?Ie.set.bind(n):Vn,Zt=Pe({get:Ht,set:fn});Object.defineProperty(s,ke,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Qe=>Zt.value=Qe})}if(l)for(const ke in l)ay(l[ke],s,n,ke);if(c){const ke=_e(c)?c.call(n):c;Reflect.ownKeys(ke).forEach(Ie=>{lo(Ie,ke[Ie])})}d&&np(d,t,"c");function Ye(ke,Ie){he(Ie)?Ie.forEach(Ht=>ke(Ht.bind(n))):Ie&&ke(Ie.bind(n))}if(Ye(dE,p),Ye(xr,g),Ye(fE,v),Ye(pE,D),Ye(cE,A),Ye(uE,_),Ye(yE,w),Ye(vE,K),Ye(gE,b),Ye(ny,R),Ye(sy,x),Ye(mE,E),he(k))if(k.length){const ke=t.exposed||(t.exposed={});k.forEach(Ie=>{Object.defineProperty(ke,Ie,{get:()=>n[Ie],set:Ht=>n[Ie]=Ht,enumerable:!0})})}else t.exposed||(t.exposed={});$&&t.render===Vn&&(t.render=$),N!=null&&(t.inheritAttrs=N),P&&(t.components=P),I&&(t.directives=I),E&&ey(t)}function EE(t,e,n=Vn){he(t)&&(t=xu(t));for(const s in t){const r=t[s];let i;ze(r)?"default"in r?i=bn(r.from||s,r.default,!0):i=bn(r.from||s):i=bn(r),Dt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function np(t,e,n){En(he(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ay(t,e,n,s){let r=s.includes(".")?wy(n,s):()=>n[s];if(tt(t)){const i=e[t];_e(i)&&co(r,i)}else if(_e(t))co(r,t.bind(n));else if(ze(t))if(he(t))t.forEach(i=>ay(i,e,n,s));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&co(r,i,t)}}function ly(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>cl(c,u,o,!0)),cl(c,e,o)),ze(e)&&i.set(e,c),c}function cl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&cl(t,i,n,!0),r&&r.forEach(o=>cl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=TE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const TE={data:sp,props:rp,emits:rp,methods:Ki,computed:Ki,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ki,directives:Ki,watch:AE,provide:sp,inject:IE};function sp(t,e){return e?t?function(){return ft(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function IE(t,e){return Ki(xu(t),xu(e))}function xu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ki(t,e){return t?ft(Object.create(null),t,e):e}function rp(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:ft(Object.create(null),tp(t),tp(e??{})):e}function AE(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const s in e)n[s]=Mt(t[s],e[s]);return n}function cy(){return{app:null,config:{isNativeTag:mw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SE=0;function RE(t,e){return function(s,r=null){_e(s)||(s=ft({},s)),r!=null&&!ze(r)&&(r=null);const i=cy(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:SE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:aT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(u,...p)):_e(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const v=u._ceVNode||q(s,r);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(v,d,g),c=!0,u._container=d,d.__vue_app__=u,Xl(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(En(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=ii;ii=u;try{return d()}finally{ii=p}}};return u}}let ii=null;function lo(t,e){if(kt){let n=kt.provides;const s=kt.parent&&kt.parent.provides;s===n&&(n=kt.provides=Object.create(s)),n[t]=e}}function bn(t,e,n=!1){const s=Sy();if(s||ii){let r=ii?ii._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&_e(e)?e.call(s&&s.proxy):e}}const uy={},hy=()=>Object.create(uy),dy=t=>Object.getPrototypeOf(t)===uy;function CE(t,e,n,s=!1){const r={},i=hy();t.propsDefaults=Object.create(null),fy(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Fv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function PE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Me(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Yl(t.emitsOptions,g))continue;const v=e[g];if(c)if($e(i,g))v!==i[g]&&(i[g]=v,u=!0);else{const D=ln(g);r[D]=Ou(c,l,D,v,t,!1)}else v!==i[g]&&(i[g]=v,u=!0)}}}else{fy(t,e,r,i)&&(u=!0);let d;for(const p in l)(!e||!$e(e,p)&&((d=Nr(p))===p||!$e(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=Ou(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!$e(e,p))&&(delete i[p],u=!0)}u&&Zn(t.attrs,"set","")}function fy(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(no(c))continue;const u=e[c];let d;r&&$e(r,d=ln(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Yl(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Me(n),u=l||Be;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ou(r,c,p,u[p],t,!$e(u,p))}}return o}function Ou(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=$e(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const d=Yo(r);s=u[n]=c.call(null,e),d()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Nr(n))&&(s=!0))}return s}const kE=new WeakMap;function py(t,e,n=!1){const s=n?kE:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=p=>{c=!0;const[g,v]=py(p,e,!0);ft(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ze(t)&&s.set(t,ti),ti;if(he(i))for(let d=0;d<i.length;d++){const p=ln(i[d]);ip(p)&&(o[p]=Be)}else if(i)for(const d in i){const p=ln(d);if(ip(p)){const g=i[d],v=o[p]=he(g)||_e(g)?{type:g}:ft({},g),D=v.type;let A=!1,_=!0;if(he(D))for(let C=0;C<D.length;++C){const R=D[C],O=_e(R)&&R.name;if(O==="Boolean"){A=!0;break}else O==="String"&&(_=!1)}else A=_e(D)&&D.name==="Boolean";v[0]=A,v[1]=_,(A||$e(v,"default"))&&l.push(p)}}const u=[o,l];return ze(t)&&s.set(t,u),u}function ip(t){return t[0]!=="$"&&!no(t)}const Bh=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",zh=t=>he(t)?t.map(kn):[kn(t)],DE=(t,e,n)=>{if(e._n)return e;const s=xn((...r)=>zh(e(...r)),n);return s._c=!1,s},my=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Bh(r))continue;const i=t[r];if(_e(i))e[r]=DE(r,i,s);else if(i!=null){const o=zh(i);e[r]=()=>o}}},gy=(t,e)=>{const n=zh(e);t.slots.default=()=>n},vy=(t,e,n)=>{for(const s in e)(n||!Bh(s))&&(t[s]=e[s])},NE=(t,e,n)=>{const s=t.slots=hy();if(t.vnode.shapeFlag&32){const r=e.__;r&&Au(s,"__",r,!0);const i=e._;i?(vy(s,e,n),n&&Au(s,"_",i,!0)):my(e,s)}else e&&gy(t,e)},xE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Be;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:vy(r,e,n):(i=!e.$stable,my(e,r)),o=e}else e&&(gy(t,e),o={default:1});if(i)for(const l in r)!Bh(l)&&o[l]==null&&delete r[l]},Gt=GE;function OE(t){return VE(t)}function VE(t,e){const n=zl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=Vn,insertStaticContent:D}=t,A=(T,S,V,U=null,z=null,j=null,ne=void 0,Z=null,J=!!S.dynamicChildren)=>{if(T===S)return;T&&!mr(T,S)&&(U=F(T),Qe(T,z,j,!0),T=null),S.patchFlag===-2&&(J=!1,S.dynamicChildren=null);const{type:Y,ref:ce,shapeFlag:te}=S;switch(Y){case Ql:_(T,S,V,U);break;case $t:C(T,S,V,U);break;case Ba:T==null&&R(S,V,U,ne);break;case Ve:P(T,S,V,U,z,j,ne,Z,J);break;default:te&1?$(T,S,V,U,z,j,ne,Z,J):te&6?I(T,S,V,U,z,j,ne,Z,J):(te&64||te&128)&&Y.process(T,S,V,U,z,j,ne,Z,J,oe)}ce!=null&&z?io(ce,T&&T.ref,j,S||T,!S):ce==null&&T&&T.ref!=null&&io(T.ref,null,j,T,!0)},_=(T,S,V,U)=>{if(T==null)s(S.el=l(S.children),V,U);else{const z=S.el=T.el;S.children!==T.children&&u(z,S.children)}},C=(T,S,V,U)=>{T==null?s(S.el=c(S.children||""),V,U):S.el=T.el},R=(T,S,V,U)=>{[T.el,T.anchor]=D(T.children,S,V,U,T.el,T.anchor)},O=({el:T,anchor:S},V,U)=>{let z;for(;T&&T!==S;)z=g(T),s(T,V,U),T=z;s(S,V,U)},x=({el:T,anchor:S})=>{let V;for(;T&&T!==S;)V=g(T),r(T),T=V;r(S)},$=(T,S,V,U,z,j,ne,Z,J)=>{S.type==="svg"?ne="svg":S.type==="math"&&(ne="mathml"),T==null?K(S,V,U,z,j,ne,Z,J):E(T,S,z,j,ne,Z,J)},K=(T,S,V,U,z,j,ne,Z)=>{let J,Y;const{props:ce,shapeFlag:te,transition:ae,dirs:ge}=T;if(J=T.el=o(T.type,j,ce&&ce.is,ce),te&8?d(J,T.children):te&16&&w(T.children,J,null,U,z,Kc(T,j),ne,Z),ge&&cr(T,null,U,"created"),b(J,T,T.scopeId,ne,U),ce){for(const we in ce)we!=="value"&&!no(we)&&i(J,we,null,ce[we],j,U);"value"in ce&&i(J,"value",null,ce.value,j),(Y=ce.onVnodeBeforeMount)&&Rn(Y,U,T)}ge&&cr(T,null,U,"beforeMount");const fe=ME(z,ae);fe&&ae.beforeEnter(J),s(J,S,V),((Y=ce&&ce.onVnodeMounted)||fe||ge)&&Gt(()=>{Y&&Rn(Y,U,T),fe&&ae.enter(J),ge&&cr(T,null,U,"mounted")},z)},b=(T,S,V,U,z)=>{if(V&&v(T,V),U)for(let j=0;j<U.length;j++)v(T,U[j]);if(z){let j=z.subTree;if(S===j||Ty(j.type)&&(j.ssContent===S||j.ssFallback===S)){const ne=z.vnode;b(T,ne,ne.scopeId,ne.slotScopeIds,z.parent)}}},w=(T,S,V,U,z,j,ne,Z,J=0)=>{for(let Y=J;Y<T.length;Y++){const ce=T[Y]=Z?xs(T[Y]):kn(T[Y]);A(null,ce,S,V,U,z,j,ne,Z)}},E=(T,S,V,U,z,j,ne)=>{const Z=S.el=T.el;let{patchFlag:J,dynamicChildren:Y,dirs:ce}=S;J|=T.patchFlag&16;const te=T.props||Be,ae=S.props||Be;let ge;if(V&&ur(V,!1),(ge=ae.onVnodeBeforeUpdate)&&Rn(ge,V,S,T),ce&&cr(S,T,V,"beforeUpdate"),V&&ur(V,!0),(te.innerHTML&&ae.innerHTML==null||te.textContent&&ae.textContent==null)&&d(Z,""),Y?k(T.dynamicChildren,Y,Z,V,U,Kc(S,z),j):ne||Ie(T,S,Z,null,V,U,Kc(S,z),j,!1),J>0){if(J&16)N(Z,te,ae,V,z);else if(J&2&&te.class!==ae.class&&i(Z,"class",null,ae.class,z),J&4&&i(Z,"style",te.style,ae.style,z),J&8){const fe=S.dynamicProps;for(let we=0;we<fe.length;we++){const De=fe[we],pt=te[De],mt=ae[De];(mt!==pt||De==="value")&&i(Z,De,pt,mt,z,V)}}J&1&&T.children!==S.children&&d(Z,S.children)}else!ne&&Y==null&&N(Z,te,ae,V,z);((ge=ae.onVnodeUpdated)||ce)&&Gt(()=>{ge&&Rn(ge,V,S,T),ce&&cr(S,T,V,"updated")},U)},k=(T,S,V,U,z,j,ne)=>{for(let Z=0;Z<S.length;Z++){const J=T[Z],Y=S[Z],ce=J.el&&(J.type===Ve||!mr(J,Y)||J.shapeFlag&198)?p(J.el):V;A(J,Y,ce,null,U,z,j,ne,!0)}},N=(T,S,V,U,z)=>{if(S!==V){if(S!==Be)for(const j in S)!no(j)&&!(j in V)&&i(T,j,S[j],null,z,U);for(const j in V){if(no(j))continue;const ne=V[j],Z=S[j];ne!==Z&&j!=="value"&&i(T,j,Z,ne,z,U)}"value"in V&&i(T,"value",S.value,V.value,z)}},P=(T,S,V,U,z,j,ne,Z,J)=>{const Y=S.el=T?T.el:l(""),ce=S.anchor=T?T.anchor:l("");let{patchFlag:te,dynamicChildren:ae,slotScopeIds:ge}=S;ge&&(Z=Z?Z.concat(ge):ge),T==null?(s(Y,V,U),s(ce,V,U),w(S.children||[],V,ce,z,j,ne,Z,J)):te>0&&te&64&&ae&&T.dynamicChildren?(k(T.dynamicChildren,ae,V,z,j,ne,Z),(S.key!=null||z&&S===z.subTree)&&yy(T,S,!0)):Ie(T,S,V,ce,z,j,ne,Z,J)},I=(T,S,V,U,z,j,ne,Z,J)=>{S.slotScopeIds=Z,T==null?S.shapeFlag&512?z.ctx.activate(S,V,U,ne,J):Ue(S,V,U,z,j,ne,J):ot(T,S,J)},Ue=(T,S,V,U,z,j,ne)=>{const Z=T.component=eT(T,U,z);if(Gl(T)&&(Z.ctx.renderer=oe),tT(Z,!1,ne),Z.asyncDep){if(z&&z.registerDep(Z,Ye,ne),!T.el){const J=Z.subTree=q($t);C(null,J,S,V),T.placeholder=J.el}}else Ye(Z,T,S,V,z,j,ne)},ot=(T,S,V)=>{const U=S.component=T.component;if(HE(T,S,V))if(U.asyncDep&&!U.asyncResolved){ke(U,S,V);return}else U.next=S,U.update();else S.el=T.el,U.vnode=S},Ye=(T,S,V,U,z,j,ne)=>{const Z=()=>{if(T.isMounted){let{next:te,bu:ae,u:ge,parent:fe,vnode:we}=T;{const Et=_y(T);if(Et){te&&(te.el=we.el,ke(T,te,ne)),Et.asyncDep.then(()=>{T.isUnmounted||Z()});return}}let De=te,pt;ur(T,!1),te?(te.el=we.el,ke(T,te,ne)):te=we,ae&&ja(ae),(pt=te.props&&te.props.onVnodeBeforeUpdate)&&Rn(pt,fe,te,we),ur(T,!0);const mt=ap(T),en=T.subTree;T.subTree=mt,A(en,mt,p(en.el),F(en),T,z,j),te.el=mt.el,De===null&&WE(T,mt.el),ge&&Gt(ge,z),(pt=te.props&&te.props.onVnodeUpdated)&&Gt(()=>Rn(pt,fe,te,we),z)}else{let te;const{el:ae,props:ge}=S,{bm:fe,m:we,parent:De,root:pt,type:mt}=T,en=oo(S);ur(T,!1),fe&&ja(fe),!en&&(te=ge&&ge.onVnodeBeforeMount)&&Rn(te,De,S),ur(T,!0);{pt.ce&&pt.ce._def.shadowRoot!==!1&&pt.ce._injectChildStyle(mt);const Et=T.subTree=ap(T);A(null,Et,V,U,T,z,j),S.el=Et.el}if(we&&Gt(we,z),!en&&(te=ge&&ge.onVnodeMounted)){const Et=S;Gt(()=>Rn(te,De,Et),z)}(S.shapeFlag&256||De&&oo(De.vnode)&&De.vnode.shapeFlag&256)&&T.a&&Gt(T.a,z),T.isMounted=!0,S=V=U=null}};T.scope.on();const J=T.effect=new Av(Z);T.scope.off();const Y=T.update=J.run.bind(J),ce=T.job=J.runIfDirty.bind(J);ce.i=T,ce.id=T.uid,J.scheduler=()=>Uh(ce),ur(T,!0),Y()},ke=(T,S,V)=>{S.component=T;const U=T.vnode.props;T.vnode=S,T.next=null,PE(T,S.props,U,V),xE(T,S.children,V),us(),Jf(T),hs()},Ie=(T,S,V,U,z,j,ne,Z,J=!1)=>{const Y=T&&T.children,ce=T?T.shapeFlag:0,te=S.children,{patchFlag:ae,shapeFlag:ge}=S;if(ae>0){if(ae&128){fn(Y,te,V,U,z,j,ne,Z,J);return}else if(ae&256){Ht(Y,te,V,U,z,j,ne,Z,J);return}}ge&8?(ce&16&&jt(Y,z,j),te!==Y&&d(V,te)):ce&16?ge&16?fn(Y,te,V,U,z,j,ne,Z,J):jt(Y,z,j,!0):(ce&8&&d(V,""),ge&16&&w(te,V,U,z,j,ne,Z,J))},Ht=(T,S,V,U,z,j,ne,Z,J)=>{T=T||ti,S=S||ti;const Y=T.length,ce=S.length,te=Math.min(Y,ce);let ae;for(ae=0;ae<te;ae++){const ge=S[ae]=J?xs(S[ae]):kn(S[ae]);A(T[ae],ge,V,null,z,j,ne,Z,J)}Y>ce?jt(T,z,j,!0,!1,te):w(S,V,U,z,j,ne,Z,J,te)},fn=(T,S,V,U,z,j,ne,Z,J)=>{let Y=0;const ce=S.length;let te=T.length-1,ae=ce-1;for(;Y<=te&&Y<=ae;){const ge=T[Y],fe=S[Y]=J?xs(S[Y]):kn(S[Y]);if(mr(ge,fe))A(ge,fe,V,null,z,j,ne,Z,J);else break;Y++}for(;Y<=te&&Y<=ae;){const ge=T[te],fe=S[ae]=J?xs(S[ae]):kn(S[ae]);if(mr(ge,fe))A(ge,fe,V,null,z,j,ne,Z,J);else break;te--,ae--}if(Y>te){if(Y<=ae){const ge=ae+1,fe=ge<ce?S[ge].el:U;for(;Y<=ae;)A(null,S[Y]=J?xs(S[Y]):kn(S[Y]),V,fe,z,j,ne,Z,J),Y++}}else if(Y>ae)for(;Y<=te;)Qe(T[Y],z,j,!0),Y++;else{const ge=Y,fe=Y,we=new Map;for(Y=fe;Y<=ae;Y++){const gt=S[Y]=J?xs(S[Y]):kn(S[Y]);gt.key!=null&&we.set(gt.key,Y)}let De,pt=0;const mt=ae-fe+1;let en=!1,Et=0;const Is=new Array(mt);for(Y=0;Y<mt;Y++)Is[Y]=0;for(Y=ge;Y<=te;Y++){const gt=T[Y];if(pt>=mt){Qe(gt,z,j,!0);continue}let tn;if(gt.key!=null)tn=we.get(gt.key);else for(De=fe;De<=ae;De++)if(Is[De-fe]===0&&mr(gt,S[De])){tn=De;break}tn===void 0?Qe(gt,z,j,!0):(Is[tn-fe]=Y+1,tn>=Et?Et=tn:en=!0,A(gt,S[tn],V,null,z,j,ne,Z,J),pt++)}const ki=en?LE(Is):ti;for(De=ki.length-1,Y=mt-1;Y>=0;Y--){const gt=fe+Y,tn=S[gt],ha=S[gt+1],Ur=gt+1<ce?ha.el||ha.placeholder:U;Is[Y]===0?A(null,tn,V,Ur,z,j,ne,Z,J):en&&(De<0||Y!==ki[De]?Zt(tn,V,Ur,2):De--)}}},Zt=(T,S,V,U,z=null)=>{const{el:j,type:ne,transition:Z,children:J,shapeFlag:Y}=T;if(Y&6){Zt(T.component.subTree,S,V,U);return}if(Y&128){T.suspense.move(S,V,U);return}if(Y&64){ne.move(T,S,V,oe);return}if(ne===Ve){s(j,S,V);for(let te=0;te<J.length;te++)Zt(J[te],S,V,U);s(T.anchor,S,V);return}if(ne===Ba){O(T,S,V);return}if(U!==2&&Y&1&&Z)if(U===0)Z.beforeEnter(j),s(j,S,V),Gt(()=>Z.enter(j),z);else{const{leave:te,delayLeave:ae,afterLeave:ge}=Z,fe=()=>{T.ctx.isUnmounted?r(j):s(j,S,V)},we=()=>{te(j,()=>{fe(),ge&&ge()})};ae?ae(j,fe,we):we()}else s(j,S,V)},Qe=(T,S,V,U=!1,z=!1)=>{const{type:j,props:ne,ref:Z,children:J,dynamicChildren:Y,shapeFlag:ce,patchFlag:te,dirs:ae,cacheIndex:ge}=T;if(te===-2&&(z=!1),Z!=null&&(us(),io(Z,null,V,T,!0),hs()),ge!=null&&(S.renderCache[ge]=void 0),ce&256){S.ctx.deactivate(T);return}const fe=ce&1&&ae,we=!oo(T);let De;if(we&&(De=ne&&ne.onVnodeBeforeUnmount)&&Rn(De,S,T),ce&6)Sn(T.component,V,U);else{if(ce&128){T.suspense.unmount(V,U);return}fe&&cr(T,null,S,"beforeUnmount"),ce&64?T.type.remove(T,S,V,oe,U):Y&&!Y.hasOnce&&(j!==Ve||te>0&&te&64)?jt(Y,S,V,!1,!0):(j===Ve&&te&384||!z&&ce&16)&&jt(J,S,V),U&&Xe(T)}(we&&(De=ne&&ne.onVnodeUnmounted)||fe)&&Gt(()=>{De&&Rn(De,S,T),fe&&cr(T,null,S,"unmounted")},V)},Xe=T=>{const{type:S,el:V,anchor:U,transition:z}=T;if(S===Ve){Ts(V,U);return}if(S===Ba){x(T);return}const j=()=>{r(V),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(T.shapeFlag&1&&z&&!z.persisted){const{leave:ne,delayLeave:Z}=z,J=()=>ne(V,j);Z?Z(T.el,j,J):J()}else j()},Ts=(T,S)=>{let V;for(;T!==S;)V=g(T),r(T),T=V;r(S)},Sn=(T,S,V)=>{const{bum:U,scope:z,job:j,subTree:ne,um:Z,m:J,a:Y,parent:ce,slots:{__:te}}=T;op(J),op(Y),U&&ja(U),ce&&he(te)&&te.forEach(ae=>{ce.renderCache[ae]=void 0}),z.stop(),j&&(j.flags|=8,Qe(ne,T,S,V)),Z&&Gt(Z,S),Gt(()=>{T.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},jt=(T,S,V,U=!1,z=!1,j=0)=>{for(let ne=j;ne<T.length;ne++)Qe(T[ne],S,V,U,z)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const S=g(T.anchor||T.el),V=S&&S[iE];return V?g(V):S};let re=!1;const se=(T,S,V)=>{T==null?S._vnode&&Qe(S._vnode,null,null,!0):A(S._vnode||null,T,S,null,null,null,V),S._vnode=T,re||(re=!0,Jf(),Hv(),re=!1)},oe={p:A,um:Qe,m:Zt,r:Xe,mt:Ue,mc:w,pc:Ie,pbc:k,n:F,o:t};return{render:se,hydrate:void 0,createApp:RE(se)}}function Kc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ME(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yy(t,e,n=!1){const s=t.children,r=e.children;if(he(s)&&he(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=xs(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&yy(o,l)),l.type===Ql&&(l.el=o.el),l.type===$t&&!l.el&&(l.el=o.el)}}function LE(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _y(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_y(e)}function op(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const $E=Symbol.for("v-scx"),FE=()=>bn($E);function co(t,e,n){return by(t,e,n)}function by(t,e,n=Be){const{immediate:s,deep:r,flush:i,once:o}=n,l=ft({},n),c=e&&s||!e&&i!=="post";let u;if(Do){if(i==="sync"){const v=FE();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Vn,v.resume=Vn,v.pause=Vn,v}}const d=kt;l.call=(v,D,A)=>En(v,d,D,A);let p=!1;i==="post"?l.scheduler=v=>{Gt(v,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(v,D)=>{D?v():Uh(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const g=tE(t,e,l);return Do&&(u?u.push(g):c&&g()),g}function UE(t,e,n){const s=this.proxy,r=tt(t)?t.includes(".")?wy(s,t):()=>s[t]:t.bind(s,s);let i;_e(e)?i=e:(i=e.handler,n=e);const o=Yo(this),l=by(r,i.bind(s),n);return o(),l}function wy(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const jE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ln(e)}Modifiers`]||t[`${Nr(e)}Modifiers`];function BE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let r=n;const i=e.startsWith("update:"),o=i&&jE(s,e.slice(7));o&&(o.trim&&(r=n.map(d=>tt(d)?d.trim():d)),o.number&&(r=n.map(rl)));let l,c=s[l=jc(e)]||s[l=jc(ln(e))];!c&&i&&(c=s[l=jc(Nr(e))]),c&&En(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,En(u,t,6,r)}}function Ey(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const d=Ey(u,e,!0);d&&(l=!0,ft(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ze(t)&&s.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):ft(o,i),ze(t)&&s.set(t,o),o)}function Yl(t,e){return!t||!Ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(t,e[0].toLowerCase()+e.slice(1))||$e(t,Nr(e))||$e(t,e))}function ap(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:v,ctx:D,inheritAttrs:A}=t,_=ll(t);let C,R;try{if(n.shapeFlag&4){const x=r||s,$=x;C=kn(u.call($,x,d,p,v,g,D)),R=l}else{const x=e;C=kn(x.length>1?x(p,{attrs:l,slots:o,emit:c}):x(p,null)),R=e.props?l:zE(l)}}catch(x){uo.length=0,Wl(x,t,1),C=q($t)}let O=C;if(R&&A!==!1){const x=Object.keys(R),{shapeFlag:$}=O;x.length&&$&7&&(i&&x.some(Ch)&&(R=qE(R,i)),O=Hs(O,R,!1,!0))}return n.dirs&&(O=Hs(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Co(O,n.transition),C=O,ll(_),C}const zE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ul(n))&&((e||(e={}))[n]=t[n]);return e},qE=(t,e)=>{const n={};for(const s in t)(!Ch(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function HE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?lp(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==s[g]&&!Yl(u,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?lp(s,o,u):!0:!!o;return!1}function lp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Yl(n,i))return!0}return!1}function WE({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ty=t=>t.__isSuspense;function GE(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):rE(t)}const Ve=Symbol.for("v-fgt"),Ql=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),uo=[];let Yt=null;function W(t=!1){uo.push(Yt=t?null:[])}function KE(){uo.pop(),Yt=uo[uo.length-1]||null}let Po=1;function cp(t,e=!1){Po+=t,t<0&&Yt&&e&&(Yt.hasOnce=!0)}function Iy(t){return t.dynamicChildren=Po>0?Yt||ti:null,KE(),Po>0&&Yt&&Yt.push(t),t}function Q(t,e,n,s,r,i){return Iy(h(t,e,n,s,r,i,!0))}function ko(t,e,n,s,r){return Iy(q(t,e,n,s,r,!0))}function ul(t){return t?t.__v_isVNode===!0:!1}function mr(t,e){return t.type===e.type&&t.key===e.key}const Ay=({key:t})=>t??null,za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||Dt(t)||_e(t)?{i:Kt,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,r=null,i=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ay(e),ref:e&&za(e),scopeId:Gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Kt};return l?(qh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),Po>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const q=YE;function YE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===iy)&&(t=$t),ul(t)){const l=Hs(t,e,!0);return n&&qh(l,n),Po>0&&!i&&Yt&&(l.shapeFlag&6?Yt[Yt.indexOf(t)]=l:Yt.push(l)),l.patchFlag=-2,l}if(oT(t)&&(t=t.__vccOpts),e){e=QE(e);let{class:l,style:c}=e;l&&!tt(l)&&(e.class=Ut(l)),ze(c)&&($h(c)&&!he(c)&&(c=ft({},c)),e.style=ss(c))}const o=tt(t)?1:Ty(t)?128:Kv(t)?64:ze(t)?4:_e(t)?2:0;return h(t,e,n,s,r,o,i,!0)}function QE(t){return t?$h(t)||dy(t)?ft({},t):t:null}function Hs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?XE(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ay(u),ref:e&&e.ref?n&&i?he(i)?i.concat(za(e)):[i,za(e)]:za(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hs(t.ssContent),ssFallback:t.ssFallback&&Hs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Co(d,c.clone(d)),d}function ye(t=" ",e=0){return q(Ql,null,t,e)}function as(t,e){const n=q(Ba,null,t);return n.staticCount=e,n}function Ke(t="",e=!1){return e?(W(),ko($t,null,t)):q($t,null,t)}function kn(t){return t==null||typeof t=="boolean"?q($t):he(t)?q(Ve,null,t.slice()):ul(t)?xs(t):q(Ql,null,String(t))}function xs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hs(t)}function qh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),qh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!dy(e)?e._ctx=Kt:r===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Kt},n=32):(e=String(e),s&64?(n=16,e=[ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function XE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ut([e.class,s.class]));else if(r==="style")e.style=ss([e.style,s.style]);else if(Ul(r)){const i=e[r],o=s[r];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Rn(t,e,n,s=null){En(t,e,7,[n,s])}const JE=cy();let ZE=0;function eT(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||JE,i={uid:ZE++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:py(s,r),emitsOptions:Ey(s,r),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=BE.bind(null,i),t.ce&&t.ce(i),i}let kt=null;const Sy=()=>kt||Kt;let hl,Vu;{const t=zl(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};hl=e("__VUE_INSTANCE_SETTERS__",n=>kt=n),Vu=e("__VUE_SSR_SETTERS__",n=>Do=n)}const Yo=t=>{const e=kt;return hl(t),t.scope.on(),()=>{t.scope.off(),hl(e)}},up=()=>{kt&&kt.scope.off(),hl(null)};function Ry(t){return t.vnode.shapeFlag&4}let Do=!1;function tT(t,e=!1,n=!1){e&&Vu(e);const{props:s,children:r}=t.vnode,i=Ry(t);CE(t,s,i,e),NE(t,r,n||e);const o=i?nT(t,e):void 0;return e&&Vu(!1),o}function nT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bE);const{setup:s}=n;if(s){us();const r=t.setupContext=s.length>1?rT(t):null,i=Yo(t),o=Ko(s,t,0,[t.props,r]),l=_v(o);if(hs(),i(),(l||t.sp)&&!oo(t)&&ey(t),l){if(o.then(up,up),e)return o.then(c=>{hp(t,c)}).catch(c=>{Wl(c,t,0)});t.asyncDep=o}else hp(t,o)}else Cy(t)}function hp(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=Bv(e)),Cy(t)}function Cy(t,e,n){const s=t.type;t.render||(t.render=s.render||Vn);{const r=Yo(t);us();try{wE(t)}finally{hs(),r()}}}const sT={get(t,e){return Ct(t,"get",""),t[e]}};function rT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sT),slots:t.slots,emit:t.emit,expose:e}}function Xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bv(Kw(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ao)return ao[n](t)},has(e,n){return n in e||n in ao}})):t.proxy}function iT(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function oT(t){return _e(t)&&"__vccOpts"in t}const Pe=(t,e)=>Zw(t,e,Do);function Jl(t,e,n){const s=arguments.length;return s===2?ze(e)&&!he(e)?ul(e)?q(t,null,[e]):q(t,e):q(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ul(n)&&(n=[n]),q(t,e,n))}const aT="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mu;const dp=typeof window<"u"&&window.trustedTypes;if(dp)try{Mu=dp.createPolicy("vue",{createHTML:t=>t})}catch{}const Py=Mu?t=>Mu.createHTML(t):t=>t,lT="http://www.w3.org/2000/svg",cT="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,fp=Jn&&Jn.createElement("template"),uT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Jn.createElementNS(lT,t):e==="mathml"?Jn.createElementNS(cT,t):n?Jn.createElement(t,{is:n}):Jn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{fp.innerHTML=Py(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=fp.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cs="transition",qi="animation",No=Symbol("_vtc"),ky={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hT=ft({},Yv,ky),dT=t=>(t.displayName="Transition",t.props=hT,t),Hh=dT((t,{slots:e})=>Jl(lE,fT(t),e)),hr=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},pp=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function fT(t){const e={};for(const P in t)P in ky||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,D=pT(r),A=D&&D[0],_=D&&D[1],{onBeforeEnter:C,onEnter:R,onEnterCancelled:O,onLeave:x,onLeaveCancelled:$,onBeforeAppear:K=C,onAppear:b=R,onAppearCancelled:w=O}=e,E=(P,I,Ue,ot)=>{P._enterCancelled=ot,dr(P,I?d:l),dr(P,I?u:o),Ue&&Ue()},k=(P,I)=>{P._isLeaving=!1,dr(P,p),dr(P,v),dr(P,g),I&&I()},N=P=>(I,Ue)=>{const ot=P?b:R,Ye=()=>E(I,P,Ue);hr(ot,[I,Ye]),mp(()=>{dr(I,P?c:i),Qn(I,P?d:l),pp(ot)||gp(I,s,A,Ye)})};return ft(e,{onBeforeEnter(P){hr(C,[P]),Qn(P,i),Qn(P,o)},onBeforeAppear(P){hr(K,[P]),Qn(P,c),Qn(P,u)},onEnter:N(!1),onAppear:N(!0),onLeave(P,I){P._isLeaving=!0;const Ue=()=>k(P,I);Qn(P,p),P._enterCancelled?(Qn(P,g),_p()):(_p(),Qn(P,g)),mp(()=>{P._isLeaving&&(dr(P,p),Qn(P,v),pp(x)||gp(P,s,_,Ue))}),hr(x,[P,Ue])},onEnterCancelled(P){E(P,!1,void 0,!0),hr(O,[P])},onAppearCancelled(P){E(P,!0,void 0,!0),hr(w,[P])},onLeaveCancelled(P){k(P),hr($,[P])}})}function pT(t){if(t==null)return null;if(ze(t))return[Yc(t.enter),Yc(t.leave)];{const e=Yc(t);return[e,e]}}function Yc(t){return bw(t)}function Qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[No]||(t[No]=new Set)).add(e)}function dr(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[No];n&&(n.delete(e),n.size||(t[No]=void 0))}function mp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mT=0;function gp(t,e,n,s){const r=t._endId=++mT,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=gT(t,e);if(!o)return s();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=v=>{v.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,g)}function gT(t,e){const n=window.getComputedStyle(t),s=D=>(n[D]||"").split(", "),r=s(`${Cs}Delay`),i=s(`${Cs}Duration`),o=vp(r,i),l=s(`${qi}Delay`),c=s(`${qi}Duration`),u=vp(l,c);let d=null,p=0,g=0;e===Cs?o>0&&(d=Cs,p=o,g=i.length):e===qi?u>0&&(d=qi,p=u,g=c.length):(p=Math.max(o,u),d=p>0?o>u?Cs:qi:null,g=d?d===Cs?i.length:c.length:0);const v=d===Cs&&/\b(transform|all)(,|$)/.test(s(`${Cs}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:v}}function vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>yp(n)+yp(t[s])))}function yp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _p(){return document.body.offsetHeight}function vT(t,e,n){const s=t[No];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bp=Symbol("_vod"),yT=Symbol("_vsh"),_T=Symbol(""),bT=/(^|;)\s*display\s*:/;function wT(t,e,n){const s=t.style,r=tt(n);let i=!1;if(n&&!r){if(e)if(tt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&qa(s,l,"")}else for(const o in e)n[o]==null&&qa(s,o,"");for(const o in n)o==="display"&&(i=!0),qa(s,o,n[o])}else if(r){if(e!==n){const o=s[_T];o&&(n+=";"+o),s.cssText=n,i=bT.test(n)}}else e&&t.removeAttribute("style");bp in t&&(t[bp]=i?s.display:"",t[yT]&&(s.display="none"))}const wp=/\s*!important$/;function qa(t,e,n){if(he(n))n.forEach(s=>qa(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ET(t,e);wp.test(n)?t.setProperty(Nr(s),n.replace(wp,""),"important"):t[s]=n}}const Ep=["Webkit","Moz","ms"],Qc={};function ET(t,e){const n=Qc[e];if(n)return n;let s=ln(e);if(s!=="filter"&&s in t)return Qc[e]=s;s=Bl(s);for(let r=0;r<Ep.length;r++){const i=Ep[r]+s;if(i in t)return Qc[e]=i}return e}const Tp="http://www.w3.org/1999/xlink";function Ip(t,e,n,s,r,i=Sw(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tp,e.slice(6,e.length)):t.setAttributeNS(Tp,e,n):n==null||i&&!Ev(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jn(n)?String(n):n)}function Ap(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Py(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ev(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function ts(t,e,n,s){t.addEventListener(e,n,s)}function TT(t,e,n,s){t.removeEventListener(e,n,s)}const Sp=Symbol("_vei");function IT(t,e,n,s,r=null){const i=t[Sp]||(t[Sp]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=AT(e);if(s){const u=i[e]=CT(s,r);ts(t,l,u,c)}else o&&(TT(t,l,o,c),i[e]=void 0)}}const Rp=/(?:Once|Passive|Capture)$/;function AT(t){let e;if(Rp.test(t)){e={};let s;for(;s=t.match(Rp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let Xc=0;const ST=Promise.resolve(),RT=()=>Xc||(ST.then(()=>Xc=0),Xc=Date.now());function CT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;En(PT(s,n.value),e,5,[s])};return n.value=t,n.attached=RT(),n}function PT(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Cp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kT=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?vT(t,s,o):e==="style"?wT(t,n,s):Ul(e)?Ch(e)||IT(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DT(t,e,s,o))?(Ap(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ip(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(s))?Ap(t,ln(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ip(t,e,s,o))};function DT(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cp(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Cp(e)&&tt(n)?!1:e in t}const Ws=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>ja(e,n):e};function NT(t){t.target.composing=!0}function Pp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const an=Symbol("_assign"),nt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[an]=Ws(r);const i=s||r.props&&r.props.type==="number";ts(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=rl(l)),t[an](l)}),n&&ts(t,"change",()=>{t.value=t.value.trim()}),e||(ts(t,"compositionstart",NT),ts(t,"compositionend",Pp),ts(t,"change",Pp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[an]=Ws(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?rl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},Kr={deep:!0,created(t,e,n){t[an]=Ws(n),ts(t,"change",()=>{const s=t._modelValue,r=di(t),i=t.checked,o=t[an];if(he(s)){const l=Dh(s,r),c=l!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(l,1),o(u)}}else if(Ti(s)){const l=new Set(s);i?l.add(r):l.delete(r),o(l)}else o(Dy(t,i))})},mounted:kp,beforeUpdate(t,e,n){t[an]=Ws(n),kp(t,e,n)}};function kp(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(he(e))r=Dh(e,s.props.value)>-1;else if(Ti(e))r=e.has(s.props.value);else{if(e===n)return;r=Tr(e,Dy(t,!0))}t.checked!==r&&(t.checked=r)}const Dp={created(t,{value:e},n){t.checked=Tr(e,n.props.value),t[an]=Ws(n),ts(t,"change",()=>{t[an](di(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[an]=Ws(s),e!==n&&(t.checked=Tr(e,s.props.value))}},Dn={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ti(e);ts(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?rl(di(o)):di(o));t[an](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Fh(()=>{t._assigning=!1})}),t[an]=Ws(s)},mounted(t,{value:e}){Np(t,e)},beforeUpdate(t,e,n){t[an]=Ws(n)},updated(t,{value:e}){t._assigning||Np(t,e)}};function Np(t,e){const n=t.multiple,s=he(e);if(!(n&&!s&&!Ti(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=di(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Dh(e,l)>-1}else o.selected=e.has(l);else if(Tr(di(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function di(t){return"_value"in t?t._value:t.value}function Dy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const xT=["ctrl","shift","alt","meta"],OT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xT.some(n=>t[`${n}Key`]&&!e.includes(n))},ho=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=OT[e[o]];if(l&&l(r,e))return}return t(r,...i)})},VT=ft({patchProp:kT},uT);let xp;function MT(){return xp||(xp=OE(VT))}const LT=(...t)=>{const e=MT().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=FT(s);if(!r)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,$T(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function $T(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function FT(t){return tt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Yr=typeof document<"u";function Ny(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function UT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ny(t.default)}const Le=Object.assign;function Jc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Tn(r)?r.map(t):t(r)}return n}const fo=()=>{},Tn=Array.isArray,xy=/#/g,jT=/&/g,BT=/\//g,zT=/=/g,qT=/\?/g,Oy=/\+/g,HT=/%5B/g,WT=/%5D/g,Vy=/%5E/g,GT=/%60/g,My=/%7B/g,KT=/%7C/g,Ly=/%7D/g,YT=/%20/g;function Wh(t){return encodeURI(""+t).replace(KT,"|").replace(HT,"[").replace(WT,"]")}function QT(t){return Wh(t).replace(My,"{").replace(Ly,"}").replace(Vy,"^")}function Lu(t){return Wh(t).replace(Oy,"%2B").replace(YT,"+").replace(xy,"%23").replace(jT,"%26").replace(GT,"`").replace(My,"{").replace(Ly,"}").replace(Vy,"^")}function XT(t){return Lu(t).replace(zT,"%3D")}function JT(t){return Wh(t).replace(xy,"%23").replace(qT,"%3F")}function ZT(t){return t==null?"":JT(t).replace(BT,"%2F")}function xo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eI=/\/$/,tI=t=>t.replace(eI,"");function Zc(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=iI(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:xo(o)}}function nI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Op(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&fi(e.matched[s],n.matched[r])&&$y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rI(t[n],e[n]))return!1;return!0}function rI(t,e){return Tn(t)?Vp(t,e):Tn(e)?Vp(e,t):t===e}function Vp(t,e){return Tn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function iI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oo;(function(t){t.pop="pop",t.push="push"})(Oo||(Oo={}));var po;(function(t){t.back="back",t.forward="forward",t.unknown=""})(po||(po={}));function oI(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tI(t)}const aI=/^[^#]+#/;function lI(t,e){return t.replace(aI,"#")+e}function cI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Zl=()=>({left:window.scrollX,top:window.scrollY});function uI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=cI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Mp(t,e){return(history.state?history.state.position-e:-1)+t}const $u=new Map;function hI(t,e){$u.set(t,e)}function dI(t){const e=$u.get(t);return $u.delete(t),e}let fI=()=>location.protocol+"//"+location.host;function Fy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),Op(c,"")}return Op(n,t)+s+r}function pI(t,e,n,s){let r=[],i=[],o=null;const l=({state:g})=>{const v=Fy(t,location),D=n.value,A=e.value;let _=0;if(g){if(n.value=v,e.value=g,o&&o===D){o=null;return}_=A?g.position-A.position:0}else s(v);r.forEach(C=>{C(n.value,D,{delta:_,type:Oo.pop,direction:_?_>0?po.forward:po.back:po.unknown})})};function c(){o=n.value}function u(g){r.push(g);const v=()=>{const D=r.indexOf(g);D>-1&&r.splice(D,1)};return i.push(v),v}function d(){const{history:g}=window;g.state&&g.replaceState(Le({},g.state,{scroll:Zl()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Lp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Zl():null}}function mI(t){const{history:e,location:n}=window,s={value:Fy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:fI()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),r.value=u}catch(v){console.error(v),n[d?"replace":"assign"](g)}}function o(c,u){const d=Le({},e.state,Lp(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),s.value=c}function l(c,u){const d=Le({},r.value,e.state,{forward:c,scroll:Zl()});i(d.current,d,!0);const p=Le({},Lp(s.value,c,null),{position:d.position+1},u);i(c,p,!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function gI(t){t=oI(t);const e=mI(t),n=pI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Le({location:"",base:t,go:s,createHref:lI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function vI(t){return typeof t=="string"||t&&typeof t=="object"}function Uy(t){return typeof t=="string"||typeof t=="symbol"}const jy=Symbol("");var $p;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($p||($p={}));function pi(t,e){return Le(new Error,{type:t,[jy]:!0},e)}function Xn(t,e){return t instanceof Error&&jy in t&&(e==null||!!(t.type&e))}const Fp="[^/]+?",yI={sensitive:!1,strict:!1,start:!0,end:!0},_I=/[.+*?^${}()[\]/\\]/g;function bI(t,e){const n=Le({},yI,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const g=u[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(r+="/"),r+=g.value.replace(_I,"\\$&"),v+=40;else if(g.type===1){const{value:D,repeatable:A,optional:_,regexp:C}=g;i.push({name:D,repeatable:A,optional:_});const R=C||Fp;if(R!==Fp){v+=10;try{new RegExp(`(${R})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${D}" (${R}): `+x.message)}}let O=A?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;p||(O=_&&u.length<2?`(?:/${O})`:"/"+O),_&&(O+="?"),r+=O,v+=20,_&&(v+=-8),A&&(v+=-20),R===".*"&&(v+=-50)}d.push(v)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const v=d[g]||"",D=i[g-1];p[D.name]=v&&D.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of g)if(v.type===0)d+=v.value;else if(v.type===1){const{value:D,repeatable:A,optional:_}=v,C=D in u?u[D]:"";if(Tn(C)&&!A)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const R=Tn(C)?C.join("/"):C;if(!R)if(_)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${D}"`);d+=R}}return d||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function wI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function By(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=wI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Up(s))return 1;if(Up(r))return-1}return r.length-s.length}function Up(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const EI={type:0,value:""},TI=/[a-zA-Z0-9_]/;function II(t){if(!t)return[[]];if(t==="/")return[[EI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=s;break;case 1:c==="("?n=2:TI.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function AI(t,e,n){const s=bI(II(t.path),n),r=Le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function SI(t,e){const n=[],s=new Map;e=qp({strict:!1,end:!0,sensitive:!1},e);function r(p){return s.get(p)}function i(p,g,v){const D=!v,A=Bp(p);A.aliasOf=v&&v.record;const _=qp(e,p),C=[A];if("alias"in p){const x=typeof p.alias=="string"?[p.alias]:p.alias;for(const $ of x)C.push(Bp(Le({},A,{components:v?v.record.components:A.components,path:$,aliasOf:v?v.record:A})))}let R,O;for(const x of C){const{path:$}=x;if(g&&$[0]!=="/"){const K=g.record.path,b=K[K.length-1]==="/"?"":"/";x.path=g.record.path+($&&b+$)}if(R=AI(x,g,_),v?v.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),D&&p.name&&!zp(R)&&o(p.name)),zy(R)&&c(R),A.children){const K=A.children;for(let b=0;b<K.length;b++)i(K[b],R,v&&v.children[b])}v=v||R}return O?()=>{o(O)}:fo}function o(p){if(Uy(p)){const g=s.get(p);g&&(s.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=PI(p,n);n.splice(g,0,p),p.record.name&&!zp(p)&&s.set(p.record.name,p)}function u(p,g){let v,D={},A,_;if("name"in p&&p.name){if(v=s.get(p.name),!v)throw pi(1,{location:p});_=v.record.name,D=Le(jp(g.params,v.keys.filter(O=>!O.optional).concat(v.parent?v.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),p.params&&jp(p.params,v.keys.map(O=>O.name))),A=v.stringify(D)}else if(p.path!=null)A=p.path,v=n.find(O=>O.re.test(A)),v&&(D=v.parse(A),_=v.record.name);else{if(v=g.name?s.get(g.name):n.find(O=>O.re.test(g.path)),!v)throw pi(1,{location:p,currentLocation:g});_=v.record.name,D=Le({},g.params,p.params),A=v.stringify(D)}const C=[];let R=v;for(;R;)C.unshift(R.record),R=R.parent;return{name:_,path:A,params:D,matched:C,meta:CI(C)}}t.forEach(p=>i(p));function d(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function jp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Bp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:RI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function RI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function zp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CI(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function qp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function PI(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;By(t,e[i])<0?s=i:n=i+1}const r=kI(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function kI(t){let e=t;for(;e=e.parent;)if(zy(e)&&By(t,e)===0)return e}function zy({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function DI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Oy," "),o=i.indexOf("="),l=xo(o<0?i:i.slice(0,o)),c=o<0?null:xo(i.slice(o+1));if(l in e){let u=e[l];Tn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Hp(t){let e="";for(let n in t){const s=t[n];if(n=XT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tn(s)?s.map(i=>i&&Lu(i)):[s&&Lu(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function NI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const xI=Symbol(""),Wp=Symbol(""),ec=Symbol(""),Gh=Symbol(""),Fu=Symbol("");function Hi(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Os(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(pi(4,{from:n,to:e})):g instanceof Error?c(g):vI(g)?c(pi(2,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(s&&s.instances[r],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function eu(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Ny(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Os(d,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=UT(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&Os(v,n,s,o,l,r)()}))}}return i}function Gp(t){const e=bn(ec),n=bn(Gh),s=Pe(()=>{const c=os(t.to);return e.resolve(c)}),r=Pe(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(fi.bind(null,d));if(g>-1)return g;const v=Kp(c[u-2]);return u>1&&Kp(d)===v&&p[p.length-1].path!==v?p.findIndex(fi.bind(null,c[u-2])):g}),i=Pe(()=>r.value>-1&&$I(n.params,s.value.params)),o=Pe(()=>r.value>-1&&r.value===n.matched.length-1&&$y(n.params,s.value.params));function l(c={}){if(LI(c)){const u=e[os(t.replace)?"replace":"push"](os(t.to)).catch(fo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Pe(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}function OI(t){return t.length===1?t[0]:t}const VI=jh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gp,setup(t,{slots:e}){const n=Hl(Gp(t)),{options:s}=bn(ec),r=Pe(()=>({[Yp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&OI(e.default(n));return t.custom?i:Jl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),MI=VI;function LI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $I(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Tn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Kp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yp=(t,e,n)=>t??e??n,FI=jh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=bn(Fu),r=Pe(()=>t.route||s.value),i=bn(Wp,0),o=Pe(()=>{let u=os(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Pe(()=>r.value.matched[o.value]);lo(Wp,Pe(()=>o.value+1)),lo(xI,l),lo(Fu,r);const c=Te();return co(()=>[c.value,l.value,t.name],([u,d,p],[g,v,D])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!fi(d,v)||!g)&&(d.enterCallbacks[p]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=r.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return Qp(n.default,{Component:g,route:u});const v=p.props[d],D=v?v===!0?u.params:typeof v=="function"?v(u):v:null,_=Jl(g,Le({},D,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Qp(n.default,{Component:_,route:u})||_}}});function Qp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qy=FI;function UI(t){const e=SI(t.routes,t),n=t.parseQuery||DI,s=t.stringifyQuery||Hp,r=t.history,i=Hi(),o=Hi(),l=Hi(),c=Yw(Ps);let u=Ps;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Jc.bind(null,F=>""+F),p=Jc.bind(null,ZT),g=Jc.bind(null,xo);function v(F,re){let se,oe;return Uy(F)?(se=e.getRecordMatcher(F),oe=re):oe=F,e.addRoute(oe,se)}function D(F){const re=e.getRecordMatcher(F);re&&e.removeRoute(re)}function A(){return e.getRoutes().map(F=>F.record)}function _(F){return!!e.getRecordMatcher(F)}function C(F,re){if(re=Le({},re||c.value),typeof F=="string"){const V=Zc(n,F,re.path),U=e.resolve({path:V.path},re),z=r.createHref(V.fullPath);return Le(V,U,{params:g(U.params),hash:xo(V.hash),redirectedFrom:void 0,href:z})}let se;if(F.path!=null)se=Le({},F,{path:Zc(n,F.path,re.path).path});else{const V=Le({},F.params);for(const U in V)V[U]==null&&delete V[U];se=Le({},F,{params:p(V)}),re.params=p(re.params)}const oe=e.resolve(se,re),xe=F.hash||"";oe.params=d(g(oe.params));const T=nI(s,Le({},F,{hash:QT(xe),path:oe.path})),S=r.createHref(T);return Le({fullPath:T,hash:xe,query:s===Hp?NI(F.query):F.query||{}},oe,{redirectedFrom:void 0,href:S})}function R(F){return typeof F=="string"?Zc(n,F,c.value.path):Le({},F)}function O(F,re){if(u!==F)return pi(8,{from:re,to:F})}function x(F){return b(F)}function $(F){return x(Le(R(F),{replace:!0}))}function K(F){const re=F.matched[F.matched.length-1];if(re&&re.redirect){const{redirect:se}=re;let oe=typeof se=="function"?se(F):se;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=R(oe):{path:oe},oe.params={}),Le({query:F.query,hash:F.hash,params:oe.path!=null?{}:F.params},oe)}}function b(F,re){const se=u=C(F),oe=c.value,xe=F.state,T=F.force,S=F.replace===!0,V=K(se);if(V)return b(Le(R(V),{state:typeof V=="object"?Le({},xe,V.state):xe,force:T,replace:S}),re||se);const U=se;U.redirectedFrom=re;let z;return!T&&sI(s,oe,se)&&(z=pi(16,{to:U,from:oe}),Zt(oe,oe,!0,!1)),(z?Promise.resolve(z):k(U,oe)).catch(j=>Xn(j)?Xn(j,2)?j:fn(j):Ie(j,U,oe)).then(j=>{if(j){if(Xn(j,2))return b(Le({replace:S},R(j.to),{state:typeof j.to=="object"?Le({},xe,j.to.state):xe,force:T}),re||U)}else j=P(U,oe,!0,S,xe);return N(U,oe,j),j})}function w(F,re){const se=O(F,re);return se?Promise.reject(se):Promise.resolve()}function E(F){const re=Ts.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(F):F()}function k(F,re){let se;const[oe,xe,T]=jI(F,re);se=eu(oe.reverse(),"beforeRouteLeave",F,re);for(const V of oe)V.leaveGuards.forEach(U=>{se.push(Os(U,F,re))});const S=w.bind(null,F,re);return se.push(S),jt(se).then(()=>{se=[];for(const V of i.list())se.push(Os(V,F,re));return se.push(S),jt(se)}).then(()=>{se=eu(xe,"beforeRouteUpdate",F,re);for(const V of xe)V.updateGuards.forEach(U=>{se.push(Os(U,F,re))});return se.push(S),jt(se)}).then(()=>{se=[];for(const V of T)if(V.beforeEnter)if(Tn(V.beforeEnter))for(const U of V.beforeEnter)se.push(Os(U,F,re));else se.push(Os(V.beforeEnter,F,re));return se.push(S),jt(se)}).then(()=>(F.matched.forEach(V=>V.enterCallbacks={}),se=eu(T,"beforeRouteEnter",F,re,E),se.push(S),jt(se))).then(()=>{se=[];for(const V of o.list())se.push(Os(V,F,re));return se.push(S),jt(se)}).catch(V=>Xn(V,8)?V:Promise.reject(V))}function N(F,re,se){l.list().forEach(oe=>E(()=>oe(F,re,se)))}function P(F,re,se,oe,xe){const T=O(F,re);if(T)return T;const S=re===Ps,V=Yr?history.state:{};se&&(oe||S?r.replace(F.fullPath,Le({scroll:S&&V&&V.scroll},xe)):r.push(F.fullPath,xe)),c.value=F,Zt(F,re,se,S),fn()}let I;function Ue(){I||(I=r.listen((F,re,se)=>{if(!Sn.listening)return;const oe=C(F),xe=K(oe);if(xe){b(Le(xe,{replace:!0,force:!0}),oe).catch(fo);return}u=oe;const T=c.value;Yr&&hI(Mp(T.fullPath,se.delta),Zl()),k(oe,T).catch(S=>Xn(S,12)?S:Xn(S,2)?(b(Le(R(S.to),{force:!0}),oe).then(V=>{Xn(V,20)&&!se.delta&&se.type===Oo.pop&&r.go(-1,!1)}).catch(fo),Promise.reject()):(se.delta&&r.go(-se.delta,!1),Ie(S,oe,T))).then(S=>{S=S||P(oe,T,!1),S&&(se.delta&&!Xn(S,8)?r.go(-se.delta,!1):se.type===Oo.pop&&Xn(S,20)&&r.go(-1,!1)),N(oe,T,S)}).catch(fo)}))}let ot=Hi(),Ye=Hi(),ke;function Ie(F,re,se){fn(F);const oe=Ye.list();return oe.length?oe.forEach(xe=>xe(F,re,se)):console.error(F),Promise.reject(F)}function Ht(){return ke&&c.value!==Ps?Promise.resolve():new Promise((F,re)=>{ot.add([F,re])})}function fn(F){return ke||(ke=!F,Ue(),ot.list().forEach(([re,se])=>F?se(F):re()),ot.reset()),F}function Zt(F,re,se,oe){const{scrollBehavior:xe}=t;if(!Yr||!xe)return Promise.resolve();const T=!se&&dI(Mp(F.fullPath,0))||(oe||!se)&&history.state&&history.state.scroll||null;return Fh().then(()=>xe(F,re,T)).then(S=>S&&uI(S)).catch(S=>Ie(S,F,re))}const Qe=F=>r.go(F);let Xe;const Ts=new Set,Sn={currentRoute:c,listening:!0,addRoute:v,removeRoute:D,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:A,resolve:C,options:t,push:x,replace:$,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ye.add,isReady:Ht,install(F){const re=this;F.component("RouterLink",MI),F.component("RouterView",qy),F.config.globalProperties.$router=re,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>os(c)}),Yr&&!Xe&&c.value===Ps&&(Xe=!0,x(r.location).catch(xe=>{}));const se={};for(const xe in Ps)Object.defineProperty(se,xe,{get:()=>c.value[xe],enumerable:!0});F.provide(ec,re),F.provide(Gh,Fv(se)),F.provide(Fu,c);const oe=F.unmount;Ts.add(F),F.unmount=function(){Ts.delete(F),Ts.size<1&&(u=Ps,I&&I(),I=null,c.value=Ps,Xe=!1,ke=!1),oe()}}};function jt(F){return F.reduce((re,se)=>re.then(()=>E(se)),Promise.resolve())}return Sn}function jI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>fi(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>fi(u,c))||r.push(c))}return[n,s,r]}function sr(){return bn(ec)}function BI(t){return bn(Gh)}const zI=()=>{};var Xp={};/**
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
 */const Hy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},qI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(g=64)),s.push(n[d],n[p],n[g],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new HI;const g=i<<2|l>>4;if(s.push(g),u!==64){const v=l<<4&240|u>>2;if(s.push(v),p!==64){const D=u<<6&192|p;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WI=function(t){const e=Hy(t);return Wy.encodeByteArray(e,!0)},dl=function(t){return WI(t).replace(/\./g,"")},Gy=function(t){try{return Wy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const KI=()=>GI().__FIREBASE_DEFAULTS__,YI=()=>{if(typeof process>"u"||typeof Xp>"u")return;const t=Xp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gy(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return zI()||KI()||YI()||QI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ky=t=>tc()?.emulatorHosts?.[t],Kh=t=>{const e=Ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Yy=()=>tc()?.config,Qy=t=>tc()?.[`_${t}`];/**
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
 */class XI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function rr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nc(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Xy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),""].join(".")}const mo={};function JI(){const t={prod:[],emulator:[]};for(const e of Object.keys(mo))mo[e]?t.emulator.push(e):t.prod.push(e);return t}function ZI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Jp=!1;function sc(t,e){if(typeof window>"u"||typeof document>"u"||!rr(window.location.host)||mo[t]===e||mo[t]||Jp)return;mo[t]=e;function n(g){return`__firebase__banner__${g}`}const s="__firebase__banner",i=JI().prod.length>0;function o(){const g=document.getElementById(s);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Jp=!0,o()},g}function d(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=ZI(s),v=n("text"),D=document.getElementById(v)||document.createElement("span"),A=n("learnmore"),_=document.getElementById(A)||document.createElement("a"),C=n("preprendIcon"),R=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const O=g.element;l(O),d(_,A);const x=u();c(R,C),O.append(R,D,_,x),document.body.appendChild(O)}i?(D.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function t2(){const t=tc()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r2(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function i2(){return!t2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zy(){try{return typeof indexedDB=="object"}catch{return!1}}function e_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}})}function o2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const a2="FirebaseError";class dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=a2,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?l2(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new dn(r,l,s)}}function l2(t,e){return t.replace(c2,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const c2=/\{\$([^}]+)}/g;function u2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Zp(i)&&Zp(o)){if(!Gs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
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
 */function Qo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function h2(t,e){const n=new d2(t,e);return n.subscribe.bind(n)}class d2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");f2(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=tu),r.error===void 0&&(r.error=tu),r.complete===void 0&&(r.complete=tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function f2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tu(){}/**
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
 */const p2=1e3,m2=2,g2=14400*1e3,v2=.5;function em(t,e=p2,n=m2){const s=e*Math.pow(n,t),r=Math.round(v2*s*(Math.random()-.5)*2);return Math.min(g2,s+r)}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pr="[DEFAULT]";/**
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
 */class y2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new XI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b2(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_2(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _2(t){return t===pr?void 0:t}function b2(t){return t.instantiationMode==="EAGER"}/**
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
 */class w2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new y2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const E2={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},T2=Ae.INFO,I2={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},A2=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=I2[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=T2,this._logHandler=A2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?E2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const S2=(t,e)=>e.some(n=>t instanceof n);let tm,nm;function R2(){return tm||(tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C2(){return nm||(nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,Uu=new WeakMap,n_=new WeakMap,nu=new WeakMap,Yh=new WeakMap;function P2(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Us(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t_.set(n,t)}).catch(()=>{}),Yh.set(e,t),e}function k2(t){if(Uu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Uu.set(t,e)}let ju={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function D2(t){ju=t(ju)}function N2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(su(this),e,...n);return n_.set(s,e.sort?e.sort():[e]),Us(s)}:C2().includes(t)?function(...e){return t.apply(su(this),e),Us(t_.get(this))}:function(...e){return Us(t.apply(su(this),e))}}function x2(t){return typeof t=="function"?N2(t):(t instanceof IDBTransaction&&k2(t),S2(t,R2())?new Proxy(t,ju):t)}function Us(t){if(t instanceof IDBRequest)return P2(t);if(nu.has(t))return nu.get(t);const e=x2(t);return e!==t&&(nu.set(t,e),Yh.set(e,t)),e}const su=t=>Yh.get(t);function s_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=Us(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Us(o.result),c.oldVersion,c.newVersion,Us(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const O2=["get","getKey","getAll","getAllKeys","count"],V2=["put","add","delete","clear"],ru=new Map;function sm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ru.get(e))return ru.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=V2.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||O2.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return ru.set(e,i),i}D2(t=>({...t,get:(e,n,s)=>sm(e,n)||t.get(e,n,s),has:(e,n)=>!!sm(e,n)||t.has(e,n)}));/**
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
 */class M2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L2(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function L2(t){return t.getComponent()?.type==="VERSION"}const Bu="@firebase/app",rm="0.14.0";/**
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
 */const ds=new rc("@firebase/app"),$2="@firebase/app-compat",F2="@firebase/analytics-compat",U2="@firebase/analytics",j2="@firebase/app-check-compat",B2="@firebase/app-check",z2="@firebase/auth",q2="@firebase/auth-compat",H2="@firebase/database",W2="@firebase/data-connect",G2="@firebase/database-compat",K2="@firebase/functions",Y2="@firebase/functions-compat",Q2="@firebase/installations",X2="@firebase/installations-compat",J2="@firebase/messaging",Z2="@firebase/messaging-compat",eA="@firebase/performance",tA="@firebase/performance-compat",nA="@firebase/remote-config",sA="@firebase/remote-config-compat",rA="@firebase/storage",iA="@firebase/storage-compat",oA="@firebase/firestore",aA="@firebase/ai",lA="@firebase/firestore-compat",cA="firebase",uA="12.0.0";/**
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
 */const zu="[DEFAULT]",hA={[Bu]:"fire-core",[$2]:"fire-core-compat",[U2]:"fire-analytics",[F2]:"fire-analytics-compat",[B2]:"fire-app-check",[j2]:"fire-app-check-compat",[z2]:"fire-auth",[q2]:"fire-auth-compat",[H2]:"fire-rtdb",[W2]:"fire-data-connect",[G2]:"fire-rtdb-compat",[K2]:"fire-fn",[Y2]:"fire-fn-compat",[Q2]:"fire-iid",[X2]:"fire-iid-compat",[J2]:"fire-fcm",[Z2]:"fire-fcm-compat",[eA]:"fire-perf",[tA]:"fire-perf-compat",[nA]:"fire-rc",[sA]:"fire-rc-compat",[rA]:"fire-gcs",[iA]:"fire-gcs-compat",[oA]:"fire-fst",[lA]:"fire-fst-compat",[aA]:"fire-vertex","fire-js":"fire-js",[cA]:"fire-js-all"};/**
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
 */const fl=new Map,dA=new Map,qu=new Map;function im(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(qu.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;qu.set(e,t);for(const n of fl.values())im(n,t);for(const n of dA.values())im(n,t);return!0}function _s(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const fA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},js=new Or("app","Firebase",fA);/**
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
 */class pA{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw js.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=uA;function r_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:zu,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw js.create("bad-app-name",{appName:String(r)});if(n||(n=Yy()),!n)throw js.create("no-options");const i=fl.get(r);if(i){if(Gs(n,i.options)&&Gs(s,i.config))return i;throw js.create("duplicate-app",{appName:r})}const o=new w2(r);for(const c of qu.values())o.addComponent(c);const l=new pA(n,s,o);return fl.set(r,l),l}function Xo(t=zu){const e=fl.get(t);if(!e&&t===zu&&Yy())return r_();if(!e)throw js.create("no-app",{appName:t});return e}function Nt(t,e,n){let s=hA[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(o.join(" "));return}un(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mA="firebase-heartbeat-database",gA=1,Vo="firebase-heartbeat-store";let iu=null;function i_(){return iu||(iu=s_(mA,gA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw js.create("idb-open",{originalErrorMessage:t.message})})),iu}async function vA(t){try{const n=(await i_()).transaction(Vo),s=await n.objectStore(Vo).get(o_(t));return await n.done,s}catch(e){if(e instanceof dn)ds.warn(e.message);else{const n=js.create("idb-get",{originalErrorMessage:e?.message});ds.warn(n.message)}}}async function om(t,e){try{const s=(await i_()).transaction(Vo,"readwrite");await s.objectStore(Vo).put(e,o_(t)),await s.done}catch(n){if(n instanceof dn)ds.warn(n.message);else{const s=js.create("idb-set",{originalErrorMessage:n?.message});ds.warn(s.message)}}}function o_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yA=1024,_A=30;class bA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=am();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>_A){const r=TA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ds.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=am(),{heartbeatsToSend:n,unsentEntries:s}=wA(this._heartbeatsCache.heartbeats),r=dl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return ds.warn(e),""}}}function am(){return new Date().toISOString().substring(0,10)}function wA(t,e=yA){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),lm(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),lm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class EA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zy()?e_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return om(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return om(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lm(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}function TA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function IA(t){un(new Xt("platform-logger",e=>new M2(e),"PRIVATE")),un(new Xt("heartbeat",e=>new bA(e),"PRIVATE")),Nt(Bu,rm,t),Nt(Bu,rm,"esm2020"),Nt("fire-js","")}IA("");var AA="firebase",SA="12.0.0";/**
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
 */Nt(AA,SA,"app");function a_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RA=a_,l_=new Or("auth","Firebase",a_());/**
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
 */const pl=new rc("@firebase/auth");function CA(t,...e){pl.logLevel<=Ae.WARN&&pl.warn(`Auth (${Vr}): ${t}`,...e)}function Ha(t,...e){pl.logLevel<=Ae.ERROR&&pl.error(`Auth (${Vr}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Xh(t,...e)}function wn(t,...e){return Xh(t,...e)}function Qh(t,e,n){const s={...RA(),[e]:n};return new Or("auth","Firebase",s).create(e,{appName:t.name})}function ls(t){return Qh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PA(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&hn(t,"argument-error"),Qh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return l_.create(t,...e)}function pe(t,e,...n){if(!t)throw Xh(e,...n)}function rs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ha(e),new Error(e)}function fs(t,e){t||rs(e)}/**
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
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kA()||Jy()||"connection"in navigator)?navigator.onLine:!0}function NA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,fs(n>e,"Short delay should be less than long delay!"),this.isMobile=e2()||s2()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jh(t,e){fs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class c_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VA=new Jo(3e4,6e4);function bs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Hn(t,e,n,s,r={}){return u_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Qo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return n2()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&rr(t.emulatorConfig.host)&&(u.credentials="include"),c_.fetch()(await h_(t,t.config.apiHost,n,l),u)})}async function u_(t,e,n){t._canInitEmulator=!1;const s={...xA,...e};try{const r=new LA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Da(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qh(t,d,u);hn(t,d)}}catch(r){if(r instanceof dn)throw r;hn(t,"network-request-failed",{message:String(r)})}}async function Zo(t,e,n,s,r={}){const i=await Hn(t,e,n,s,r);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function h_(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Jh(t.config,r):`${t.config.apiScheme}://${r}`;return OA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function MA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wn(this.auth,"network-request-failed")),VA.get())})}}function Da(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=wn(t,e,s);return r.customData._tokenResponse=n,r}function um(t){return t!==void 0&&t.enterprise!==void 0}class $A{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function FA(t,e){return Hn(t,"GET","/v2/recaptchaConfig",bs(t,e))}/**
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
 */async function UA(t,e){return Hn(t,"POST","/v1/accounts:delete",e)}async function ml(t,e){return Hn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function go(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jA(t,e=!1){const n=ct(t),s=await n.getIdToken(e),r=Zh(s);pe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:go(ou(r.auth_time)),issuedAtTime:go(ou(r.iat)),expirationTime:go(ou(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ou(t){return Number(t)*1e3}function Zh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ha("JWT malformed, contained fewer than 3 sections"),null;try{const r=Gy(n);return r?JSON.parse(r):(Ha("Failed to decode base64 JWT payload"),null)}catch(r){return Ha("Caught error parsing JWT payload as JSON",r?.toString()),null}}function hm(t){const e=Zh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof dn&&BA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function BA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(t){const e=t.auth,n=await t.getIdToken(),s=await mi(t,ml(e,{idToken:n}));pe(s?.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=r.providerUserInfo?.length?d_(r.providerUserInfo):[],o=HA(t.providerData,i),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!o?.length,u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Wu(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function qA(t){const e=ct(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HA(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function d_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function WA(t,e){const n=await u_(t,{},async()=>{const s=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await h_(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&rr(t.emulatorConfig.host)&&(c.credentials="include"),c_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GA(t,e){return Hn(t,"POST","/v2/accounts:revokeToken",bs(t,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=hm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await WA(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new oi;return s&&(pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(pe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return rs("not implemented")}}/**
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
 */function ks(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Wu(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jA(this,e)}reload(){return qA(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(ls(this.auth));const e=await this.getIdToken();return await mi(this,UA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:v,providerData:D,stsTokenManager:A}=n;pe(p&&A,e,"internal-error");const _=oi.fromJSON(this.name,A);pe(typeof p=="string",e,"internal-error"),ks(s,e.name),ks(r,e.name),pe(typeof g=="boolean",e,"internal-error"),pe(typeof v=="boolean",e,"internal-error"),ks(i,e.name),ks(o,e.name),ks(l,e.name),ks(c,e.name),ks(u,e.name),ks(d,e.name);const C=new mn({uid:p,auth:e,email:r,emailVerified:g,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:_,createdAt:u,lastLoginAt:d});return D&&Array.isArray(D)&&(C.providerData=D.map(R=>({...R}))),c&&(C._redirectEventId=c),C}static async _fromIdTokenResponse(e,n,s=!1){const r=new oi;r.updateFromServerResponse(n);const i=new mn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await gl(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];pe(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?d_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,l=new oi;l.updateFromIdToken(s);const c=new mn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Wu(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,u),c}}/**
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
 */const dm=new Map;function is(t){fs(t instanceof Function,"Expected a class definition");let e=dm.get(t);return e?(fs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dm.set(t,e),e)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}f_.type="NONE";const fm=f_;/**
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
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Wa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Wa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ml(this.auth,{idToken:e}).catch(()=>{});return n?mn._fromGetAccountInfoResponse(this.auth,n,e):null}return mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(is(fm),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||is(fm);const o=Wa(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await ml(e,{idToken:d}).catch(()=>{});if(!g)break;p=await mn._fromGetAccountInfoResponse(e,g,d)}else p=mn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ai(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ai(i,e,s))}}/**
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
 */function pm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(b_(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function p_(t=xt()){return/firefox\//i.test(t)}function m_(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(t=xt()){return/crios\//i.test(t)}function v_(t=xt()){return/iemobile/i.test(t)}function y_(t=xt()){return/android/i.test(t)}function __(t=xt()){return/blackberry/i.test(t)}function b_(t=xt()){return/webos/i.test(t)}function ed(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KA(t=xt()){return ed(t)&&!!window.navigator?.standalone}function YA(){return r2()&&document.documentMode===10}function w_(t=xt()){return ed(t)||y_(t)||b_(t)||__(t)||/windows phone/i.test(t)||v_(t)}/**
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
 */function E_(t,e=[]){let n;switch(t){case"Browser":n=pm(xt());break;case"Worker":n=`${pm(xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${s}`}/**
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
 */class QA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function XA(t,e={}){return Hn(t,"GET","/v2/passwordPolicy",bs(t,e))}/**
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
 */const JA=6;class ZA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??JA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class eS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mm(this),this.idTokenSubscription=new mm(this),this.beforeStateQueue=new QA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=is(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ml(this,{idToken:e}),s=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&l?.user&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(ls(this));const n=e?ct(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(is(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XA(this),n=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await GA(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&is(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[is(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=E_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&CA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ws(t){return ct(t)}class mm{constructor(e){this.auth=e,this.observer=null,this.addObserver=h2(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tS(t){ic=t}function T_(t){return ic.loadJS(t)}function nS(){return ic.recaptchaEnterpriseScript}function sS(){return ic.gapiScript}function rS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class iS{constructor(){this.enterprise=new oS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class oS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aS="recaptcha-enterprise",I_="NO_RECAPTCHA";class lS{constructor(e){this.type=aS,this.auth=ws(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{FA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new $A(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;um(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(I_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&um(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=nS();c.length!==0&&(c+=l),T_(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function gm(t,e,n,s=!1,r=!1){const i=new lS(t);let o;if(r)o=I_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function vl(t,e,n,s,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gm(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gm(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
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
 */function cS(t,e){const n=_s(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Gs(i,e??{}))return r;hn(r,"already-initialized")}return n.initialize({options:e})}function uS(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(is);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function hS(t,e,n){const s=ws(t);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=A_(e),{host:o,port:l}=dS(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(Gs(u,s.config.emulator)&&Gs(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,rr(o)?(nc(`${i}//${o}${c}`),sc("Auth",!0)):fS()}function A_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dS(t){const e=A_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:vm(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:vm(o)}}}function vm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rs("not implemented")}_getIdTokenResponse(e){return rs("not implemented")}_linkToIdToken(e,n){return rs("not implemented")}_getReauthenticationResolver(e){return rs("not implemented")}}async function pS(t,e){return Hn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mS(t,e){return Zo(t,"POST","/v1/accounts:signInWithPassword",bs(t,e))}async function gS(t,e){return Hn(t,"POST","/v1/accounts:sendOobCode",bs(t,e))}async function vS(t,e){return gS(t,e)}/**
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
 */async function yS(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}async function _S(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}/**
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
 */class Mo extends td{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Mo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Mo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,n,"signInWithPassword",mS);case"emailLink":return yS(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vl(e,s,"signUpPassword",pS);case"emailLink":return _S(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function li(t,e){return Zo(t,"POST","/v1/accounts:signInWithIdp",bs(t,e))}/**
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
 */const bS="http://localhost";class Ir extends td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Ir(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,li(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:bS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
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
 */function wS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ES(t){const e=Yi(Qi(t)).link,n=e?Yi(Qi(e)).deep_link_id:null,s=Yi(Qi(t)).deep_link_id;return(s?Yi(Qi(s)).link:null)||s||n||e||t}class nd{constructor(e){const n=Yi(Qi(e)),s=n.apiKey??null,r=n.oobCode??null,i=wS(n.mode??null);pe(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ES(e);try{return new nd(n)}catch{return null}}}/**
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
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return Mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=nd.parseLink(n);return pe(s,"argument-error"),Mo._fromEmailAndCode(e,s.code,s.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ea extends sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vs extends ea{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vs.credential(e.oauthAccessToken)}catch{return null}}}Vs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vs.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nn.credential(n,s)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Ms extends ea{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ms.credential(e.oauthAccessToken)}catch{return null}}}Ms.GITHUB_SIGN_IN_METHOD="github.com";Ms.PROVIDER_ID="github.com";/**
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
 */class Ls extends ea{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ls.credential(n,s)}catch{return null}}}Ls.TWITTER_SIGN_IN_METHOD="twitter.com";Ls.PROVIDER_ID="twitter.com";/**
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
 */async function TS(t,e){return Zo(t,"POST","/v1/accounts:signUp",bs(t,e))}/**
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
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await mn._fromIdTokenResponse(e,s,r),o=ym(s);return new Ar({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ym(s);return new Ar({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ym(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yl extends dn{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new yl(e,n,s,r)}}function S_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,i,e,s):i})}async function IS(t,e,n=!1){const s=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ar._forOperation(t,"link",s)}/**
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
 */async function AS(t,e,n=!1){const{auth:s}=t;if(Ft(s.app))return Promise.reject(ls(s));const r="reauthenticate";try{const i=await mi(t,S_(s,r,e,t),n);pe(i.idToken,s,"internal-error");const o=Zh(i.idToken);pe(o,s,"internal-error");const{sub:l}=o;return pe(t.uid===l,s,"user-mismatch"),Ar._forOperation(t,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&hn(s,"user-mismatch"),i}}/**
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
 */async function R_(t,e,n=!1){if(Ft(t.app))return Promise.reject(ls(t));const s="signIn",r=await S_(t,s,e),i=await Ar._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function SS(t,e){return R_(ws(t),e)}/**
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
 */async function C_(t){const e=ws(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RS(t,e,n){const s=ws(t);await vl(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",vS)}async function CS(t,e,n){if(Ft(t.app))return Promise.reject(ls(t));const s=ws(t),o=await vl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&C_(t),c}),l=await Ar._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function PS(t,e,n){return Ft(t.app)?Promise.reject(ls(t)):SS(ct(t),Ii.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&C_(t),s})}/**
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
 */async function kS(t,e){return Hn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function DS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=ct(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await mi(s,kS(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const l=s.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function NS(t,e,n,s){return ct(t).onIdTokenChanged(e,n,s)}function xS(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function OS(t,e,n,s){return ct(t).onAuthStateChanged(e,n,s)}function VS(t){return ct(t).signOut()}const _l="__sak";/**
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
 */const MS=1e3,LS=10;class k_ extends P_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);YA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,LS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}k_.type="LOCAL";const $S=k_;/**
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
 */class D_ extends P_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D_.type="SESSION";const N_=D_;/**
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
 */function FS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new oc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await FS(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
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
 */function rd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class US{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=rd("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mn(){return window}function jS(t){Mn().location.href=t}/**
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
 */function x_(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function BS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){return navigator?.serviceWorker?.controller||null}function qS(){return x_()?self:null}/**
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
 */const O_="firebaseLocalStorageDb",HS=1,bl="firebaseLocalStorage",V_="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function WS(){const t=indexedDB.deleteDatabase(O_);return new ta(t).toPromise()}function Gu(){const t=indexedDB.open(O_,HS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(bl,{keyPath:V_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(bl)?e(s):(s.close(),await WS(),e(await Gu()))})})}async function _m(t,e,n){const s=ac(t,!0).put({[V_]:e,value:n});return new ta(s).toPromise()}async function GS(t,e){const n=ac(t,!1).get(e),s=await new ta(n).toPromise();return s===void 0?null:s.value}function bm(t,e){const n=ac(t,!0).delete(e);return new ta(n).toPromise()}const KS=800,YS=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>YS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(qS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await BS(),!this.activeServiceWorker)return;this.sender=new US(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gu();return await _m(e,_l,"1"),await bm(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_m(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>GS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ac(r,!1).getAll();return new ta(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const QS=M_;new Jo(3e4,6e4);/**
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
 */function L_(t,e){return e?is(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class id extends td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XS(t){return R_(t.auth,new id(t),t.bypassAuthState)}function JS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),AS(n,new id(t),t.bypassAuthState)}async function ZS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),IS(n,new id(t),t.bypassAuthState)}/**
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
 */class $_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XS;case"linkViaPopup":case"linkViaRedirect":return ZS;case"reauthViaPopup":case"reauthViaRedirect":return JS;default:hn(this.auth,"internal-error")}}resolve(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eR=new Jo(2e3,1e4);async function F_(t,e,n){if(Ft(t.app))return Promise.reject(wn(t,"operation-not-supported-in-this-environment"));const s=ws(t);PA(t,e,sd);const r=L_(s,n);return new gr(s,"signInViaPopup",e,r).executeNotNull()}class gr extends $_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){fs(this.filter.length===1,"Popup operations only handle one event");const e=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eR.get())};e()}}gr.currentPopupAction=null;/**
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
 */const tR="pendingRedirect",Ga=new Map;class nR extends $_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const s=await sR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sR(t,e){const n=oR(e),s=iR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function rR(t,e){Ga.set(t._key(),e)}function iR(t){return is(t._redirectPersistence)}function oR(t){return Wa(tR,t.config.apiKey,t.name)}async function aR(t,e,n=!1){if(Ft(t.app))return Promise.reject(ls(t));const s=ws(t),r=L_(s,e),o=await new nR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const lR=600*1e3;class cR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!U_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lR&&this.cachedEventUids.clear(),this.cachedEventUids.has(wm(e))}saveEventToCache(e){this.cachedEventUids.add(wm(e)),this.lastProcessedEventTime=Date.now()}}function wm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function uR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U_(t);default:return!1}}/**
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
 */async function hR(t,e={}){return Hn(t,"GET","/v1/projects",e)}/**
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
 */const dR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fR=/^https?/;async function pR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(mR(n))return}catch{}hn(t,"unauthorized-domain")}function mR(t){const e=Hu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fR.test(n))return!1;if(dR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const gR=new Jo(3e4,6e4);function Em(){const t=Mn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vR(t){return new Promise((e,n)=>{function s(){Em(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Em(),n(wn(t,"network-request-failed"))},timeout:gR.get()})}if(Mn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Mn().gapi?.load)s();else{const r=rS("iframefcb");return Mn()[r]=()=>{gapi.load?s():n(wn(t,"network-request-failed"))},T_(`${sS()}?onload=${r}`).catch(i=>n(i))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function yR(t){return Ka=Ka||vR(t),Ka}/**
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
 */const _R=new Jo(5e3,15e3),bR="__/auth/iframe",wR="emulator/auth/iframe",ER={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IR(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jh(e,wR):`https://${t.config.authDomain}/${bR}`,s={apiKey:e.apiKey,appName:t.name,v:Vr},r=TR.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Qo(s).slice(1)}`}async function AR(t){const e=await yR(t),n=Mn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:IR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ER,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=Mn().setTimeout(()=>{i(o)},_R.get());function c(){Mn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const SR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RR=500,CR=600,PR="_blank",kR="http://localhost";class Tm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DR(t,e,n,s=RR,r=CR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...SR,width:s.toString(),height:r.toString(),top:i,left:o},u=xt().toLowerCase();n&&(l=g_(u)?PR:n),p_(u)&&(e=e||kR,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[v,D])=>`${g}${v}=${D},`,"");if(KA(u)&&l!=="_self")return NR(e||"",l),new Tm(null);const p=window.open(e||"",l,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new Tm(p)}function NR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const xR="__/auth/handler",OR="emulator/auth/handler",VR=encodeURIComponent("fac");async function Im(t,e,n,s,r,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vr,eventId:r};if(e instanceof sd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",u2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ea){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${VR}=${encodeURIComponent(c)}`:"";return`${MR(t)}?${Qo(l).slice(1)}${u}`}function MR({config:t}){return t.emulator?Jh(t,OR):`https://${t.authDomain}/${xR}`}/**
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
 */const au="webStorageSupport";class LR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=aR,this._overrideRedirectResult=rR}async _openPopup(e,n,s,r){fs(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Im(e,n,s,Hu(),r);return DR(e,i,rd())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Im(e,n,s,Hu(),r);return jS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(fs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await AR(e),s=new cR(e);return n.register("authEvent",r=>(pe(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(au,{type:au},r=>{const i=r?.[0]?.[au];i!==void 0&&n(!!i),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w_()||m_()||ed()}}const $R=LR;var Am="@firebase/auth",Sm="1.11.0";/**
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
 */class FR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jR(t){un(new Xt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:E_(t)},u=new eS(s,r,i,c);return uS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),un(new Xt("auth-internal",e=>{const n=ws(e.getProvider("auth").getImmediate());return(s=>new FR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Am,Sm,UR(t)),Nt(Am,Sm,"esm2020")}/**
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
 */const BR=300,zR=Qy("authIdTokenMaxAge")||BR;let Rm=null;const qR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zR)return;const r=n?.token;Rm!==r&&(Rm=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function HR(t=Xo()){const e=_s(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cS(t,{popupRedirectResolver:$R,persistence:[QS,$S,N_]}),s=Qy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=qR(i.toString());xS(n,o,()=>o(n.currentUser)),NS(n,l=>o(l))}}const r=Ky("auth");return r&&hS(n,`http://${r}`),n}function WR(){return document.getElementsByTagName("head")?.[0]??document}tS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=wn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",WR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jR("Browser");var Cm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bs,j_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,w){function E(){}E.prototype=w.prototype,b.D=w.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(k,N,P){for(var I=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)I[Ue-2]=arguments[Ue];return w.prototype[N].apply(k,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,w,E){E||(E=0);var k=Array(16);if(typeof w=="string")for(var N=0;16>N;++N)k[N]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(N=0;16>N;++N)k[N]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=b.g[0],E=b.g[1],N=b.g[2];var P=b.g[3],I=w+(P^E&(N^P))+k[0]+3614090360&4294967295;w=E+(I<<7&4294967295|I>>>25),I=P+(N^w&(E^N))+k[1]+3905402710&4294967295,P=w+(I<<12&4294967295|I>>>20),I=N+(E^P&(w^E))+k[2]+606105819&4294967295,N=P+(I<<17&4294967295|I>>>15),I=E+(w^N&(P^w))+k[3]+3250441966&4294967295,E=N+(I<<22&4294967295|I>>>10),I=w+(P^E&(N^P))+k[4]+4118548399&4294967295,w=E+(I<<7&4294967295|I>>>25),I=P+(N^w&(E^N))+k[5]+1200080426&4294967295,P=w+(I<<12&4294967295|I>>>20),I=N+(E^P&(w^E))+k[6]+2821735955&4294967295,N=P+(I<<17&4294967295|I>>>15),I=E+(w^N&(P^w))+k[7]+4249261313&4294967295,E=N+(I<<22&4294967295|I>>>10),I=w+(P^E&(N^P))+k[8]+1770035416&4294967295,w=E+(I<<7&4294967295|I>>>25),I=P+(N^w&(E^N))+k[9]+2336552879&4294967295,P=w+(I<<12&4294967295|I>>>20),I=N+(E^P&(w^E))+k[10]+4294925233&4294967295,N=P+(I<<17&4294967295|I>>>15),I=E+(w^N&(P^w))+k[11]+2304563134&4294967295,E=N+(I<<22&4294967295|I>>>10),I=w+(P^E&(N^P))+k[12]+1804603682&4294967295,w=E+(I<<7&4294967295|I>>>25),I=P+(N^w&(E^N))+k[13]+4254626195&4294967295,P=w+(I<<12&4294967295|I>>>20),I=N+(E^P&(w^E))+k[14]+2792965006&4294967295,N=P+(I<<17&4294967295|I>>>15),I=E+(w^N&(P^w))+k[15]+1236535329&4294967295,E=N+(I<<22&4294967295|I>>>10),I=w+(N^P&(E^N))+k[1]+4129170786&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^N&(w^E))+k[6]+3225465664&4294967295,P=w+(I<<9&4294967295|I>>>23),I=N+(w^E&(P^w))+k[11]+643717713&4294967295,N=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(N^P))+k[0]+3921069994&4294967295,E=N+(I<<20&4294967295|I>>>12),I=w+(N^P&(E^N))+k[5]+3593408605&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^N&(w^E))+k[10]+38016083&4294967295,P=w+(I<<9&4294967295|I>>>23),I=N+(w^E&(P^w))+k[15]+3634488961&4294967295,N=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(N^P))+k[4]+3889429448&4294967295,E=N+(I<<20&4294967295|I>>>12),I=w+(N^P&(E^N))+k[9]+568446438&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^N&(w^E))+k[14]+3275163606&4294967295,P=w+(I<<9&4294967295|I>>>23),I=N+(w^E&(P^w))+k[3]+4107603335&4294967295,N=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(N^P))+k[8]+1163531501&4294967295,E=N+(I<<20&4294967295|I>>>12),I=w+(N^P&(E^N))+k[13]+2850285829&4294967295,w=E+(I<<5&4294967295|I>>>27),I=P+(E^N&(w^E))+k[2]+4243563512&4294967295,P=w+(I<<9&4294967295|I>>>23),I=N+(w^E&(P^w))+k[7]+1735328473&4294967295,N=P+(I<<14&4294967295|I>>>18),I=E+(P^w&(N^P))+k[12]+2368359562&4294967295,E=N+(I<<20&4294967295|I>>>12),I=w+(E^N^P)+k[5]+4294588738&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^N)+k[8]+2272392833&4294967295,P=w+(I<<11&4294967295|I>>>21),I=N+(P^w^E)+k[11]+1839030562&4294967295,N=P+(I<<16&4294967295|I>>>16),I=E+(N^P^w)+k[14]+4259657740&4294967295,E=N+(I<<23&4294967295|I>>>9),I=w+(E^N^P)+k[1]+2763975236&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^N)+k[4]+1272893353&4294967295,P=w+(I<<11&4294967295|I>>>21),I=N+(P^w^E)+k[7]+4139469664&4294967295,N=P+(I<<16&4294967295|I>>>16),I=E+(N^P^w)+k[10]+3200236656&4294967295,E=N+(I<<23&4294967295|I>>>9),I=w+(E^N^P)+k[13]+681279174&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^N)+k[0]+3936430074&4294967295,P=w+(I<<11&4294967295|I>>>21),I=N+(P^w^E)+k[3]+3572445317&4294967295,N=P+(I<<16&4294967295|I>>>16),I=E+(N^P^w)+k[6]+76029189&4294967295,E=N+(I<<23&4294967295|I>>>9),I=w+(E^N^P)+k[9]+3654602809&4294967295,w=E+(I<<4&4294967295|I>>>28),I=P+(w^E^N)+k[12]+3873151461&4294967295,P=w+(I<<11&4294967295|I>>>21),I=N+(P^w^E)+k[15]+530742520&4294967295,N=P+(I<<16&4294967295|I>>>16),I=E+(N^P^w)+k[2]+3299628645&4294967295,E=N+(I<<23&4294967295|I>>>9),I=w+(N^(E|~P))+k[0]+4096336452&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~N))+k[7]+1126891415&4294967295,P=w+(I<<10&4294967295|I>>>22),I=N+(w^(P|~E))+k[14]+2878612391&4294967295,N=P+(I<<15&4294967295|I>>>17),I=E+(P^(N|~w))+k[5]+4237533241&4294967295,E=N+(I<<21&4294967295|I>>>11),I=w+(N^(E|~P))+k[12]+1700485571&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~N))+k[3]+2399980690&4294967295,P=w+(I<<10&4294967295|I>>>22),I=N+(w^(P|~E))+k[10]+4293915773&4294967295,N=P+(I<<15&4294967295|I>>>17),I=E+(P^(N|~w))+k[1]+2240044497&4294967295,E=N+(I<<21&4294967295|I>>>11),I=w+(N^(E|~P))+k[8]+1873313359&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~N))+k[15]+4264355552&4294967295,P=w+(I<<10&4294967295|I>>>22),I=N+(w^(P|~E))+k[6]+2734768916&4294967295,N=P+(I<<15&4294967295|I>>>17),I=E+(P^(N|~w))+k[13]+1309151649&4294967295,E=N+(I<<21&4294967295|I>>>11),I=w+(N^(E|~P))+k[4]+4149444226&4294967295,w=E+(I<<6&4294967295|I>>>26),I=P+(E^(w|~N))+k[11]+3174756917&4294967295,P=w+(I<<10&4294967295|I>>>22),I=N+(w^(P|~E))+k[2]+718787259&4294967295,N=P+(I<<15&4294967295|I>>>17),I=E+(P^(N|~w))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+w&4294967295,b.g[1]=b.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+N&4294967295,b.g[3]=b.g[3]+P&4294967295}s.prototype.u=function(b,w){w===void 0&&(w=b.length);for(var E=w-this.blockSize,k=this.B,N=this.h,P=0;P<w;){if(N==0)for(;P<=E;)r(this,b,P),P+=this.blockSize;if(typeof b=="string"){for(;P<w;)if(k[N++]=b.charCodeAt(P++),N==this.blockSize){r(this,k),N=0;break}}else for(;P<w;)if(k[N++]=b[P++],N==this.blockSize){r(this,k),N=0;break}}this.h=N,this.o+=w},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var w=1;w<b.length-8;++w)b[w]=0;var E=8*this.o;for(w=b.length-8;w<b.length;++w)b[w]=E&255,E/=256;for(this.u(b),b=Array(16),w=E=0;4>w;++w)for(var k=0;32>k;k+=8)b[E++]=this.g[w]>>>k&255;return b};function i(b,w){var E=l;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=w(b)}function o(b,w){this.h=w;for(var E=[],k=!0,N=b.length-1;0<=N;N--){var P=b[N]|0;k&&P==w||(E[N]=P,k=!1)}this.g=E}var l={};function c(b){return-128<=b&&128>b?i(b,function(w){return new o([w|0],0>w?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return _(u(-b));for(var w=[],E=1,k=0;b>=E;k++)w[k]=b/E|0,E*=4294967296;return new o(w,0)}function d(b,w){if(b.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b.charAt(0)=="-")return _(d(b.substring(1),w));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(w,8)),k=p,N=0;N<b.length;N+=8){var P=Math.min(8,b.length-N),I=parseInt(b.substring(N,N+P),w);8>P?(P=u(Math.pow(w,P)),k=k.j(P).add(u(I))):(k=k.j(E),k=k.add(u(I)))}return k}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-_(this).m();for(var b=0,w=1,E=0;E<this.g.length;E++){var k=this.i(E);b+=(0<=k?k:4294967296+k)*w,w*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(A(this))return"-"+_(this).toString(b);for(var w=u(Math.pow(b,6)),E=this,k="";;){var N=x(E,w).g;E=C(E,N.j(w));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=N,D(E))return P+k;for(;6>P.length;)P="0"+P;k=P+k}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(var w=0;w<b.g.length;w++)if(b.g[w]!=0)return!1;return!0}function A(b){return b.h==-1}t.l=function(b){return b=C(this,b),A(b)?-1:D(b)?0:1};function _(b){for(var w=b.g.length,E=[],k=0;k<w;k++)E[k]=~b.g[k];return new o(E,~b.h).add(g)}t.abs=function(){return A(this)?_(this):this},t.add=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],k=0,N=0;N<=w;N++){var P=k+(this.i(N)&65535)+(b.i(N)&65535),I=(P>>>16)+(this.i(N)>>>16)+(b.i(N)>>>16);k=I>>>16,P&=65535,I&=65535,E[N]=I<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function C(b,w){return b.add(_(w))}t.j=function(b){if(D(this)||D(b))return p;if(A(this))return A(b)?_(this).j(_(b)):_(_(this).j(b));if(A(b))return _(this.j(_(b)));if(0>this.l(v)&&0>b.l(v))return u(this.m()*b.m());for(var w=this.g.length+b.g.length,E=[],k=0;k<2*w;k++)E[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<b.g.length;N++){var P=this.i(k)>>>16,I=this.i(k)&65535,Ue=b.i(N)>>>16,ot=b.i(N)&65535;E[2*k+2*N]+=I*ot,R(E,2*k+2*N),E[2*k+2*N+1]+=P*ot,R(E,2*k+2*N+1),E[2*k+2*N+1]+=I*Ue,R(E,2*k+2*N+1),E[2*k+2*N+2]+=P*Ue,R(E,2*k+2*N+2)}for(k=0;k<w;k++)E[k]=E[2*k+1]<<16|E[2*k];for(k=w;k<2*w;k++)E[k]=0;return new o(E,0)};function R(b,w){for(;(b[w]&65535)!=b[w];)b[w+1]+=b[w]>>>16,b[w]&=65535,w++}function O(b,w){this.g=b,this.h=w}function x(b,w){if(D(w))throw Error("division by zero");if(D(b))return new O(p,p);if(A(b))return w=x(_(b),w),new O(_(w.g),_(w.h));if(A(w))return w=x(b,_(w)),new O(_(w.g),w.h);if(30<b.g.length){if(A(b)||A(w))throw Error("slowDivide_ only works with positive integers.");for(var E=g,k=w;0>=k.l(b);)E=$(E),k=$(k);var N=K(E,1),P=K(k,1);for(k=K(k,2),E=K(E,2);!D(k);){var I=P.add(k);0>=I.l(b)&&(N=N.add(E),P=I),k=K(k,1),E=K(E,1)}return w=C(b,N.j(w)),new O(N,w)}for(N=p;0<=b.l(w);){for(E=Math.max(1,Math.floor(b.m()/w.m())),k=Math.ceil(Math.log(E)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),P=u(E),I=P.j(w);A(I)||0<I.l(b);)E-=k,P=u(E),I=P.j(w);D(P)&&(P=g),N=N.add(P),b=C(b,I)}return new O(N,b)}t.A=function(b){return x(this,b).h},t.and=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],k=0;k<w;k++)E[k]=this.i(k)&b.i(k);return new o(E,this.h&b.h)},t.or=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],k=0;k<w;k++)E[k]=this.i(k)|b.i(k);return new o(E,this.h|b.h)},t.xor=function(b){for(var w=Math.max(this.g.length,b.g.length),E=[],k=0;k<w;k++)E[k]=this.i(k)^b.i(k);return new o(E,this.h^b.h)};function $(b){for(var w=b.g.length+1,E=[],k=0;k<w;k++)E[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(E,b.h)}function K(b,w){var E=w>>5;w%=32;for(var k=b.g.length-E,N=[],P=0;P<k;P++)N[P]=0<w?b.i(P+E)>>>w|b.i(P+E+1)<<32-w:b.i(P+E);return new o(N,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,j_=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Bs=o}).apply(typeof Cm<"u"?Cm:typeof self<"u"?self:typeof window<"u"?window:{});var Na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B_,Xi,z_,Ya,Ku,q_,H_,W_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,m){return a==Array.prototype||a==Object.prototype||(a[f]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Na=="object"&&Na];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function r(a,f){if(f)e:{var m=s;a=a.split(".");for(var y=0;y<a.length-1;y++){var M=a[y];if(!(M in m))break e;m=m[M]}a=a[a.length-1],y=m[a],f=f(y),f!=y&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var m=0,y=!1,M={next:function(){if(!y&&m<a.length){var L=m++;return{value:f(L,a[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}r("Array.prototype.values",function(a){return a||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function u(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function d(a,f,m){return a.call.apply(a.bind,arguments)}function p(a,f,m){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,y),a.apply(f,M)}}return function(){return a.apply(f,arguments)}}function g(a,f,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function D(a,f){function m(){}m.prototype=f.prototype,a.aa=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(y,M,L){for(var ee=Array(arguments.length-2),je=2;je<arguments.length;je++)ee[je-2]=arguments[je];return f.prototype[M].apply(y,ee)}}function A(a){const f=a.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=a[y];return m}return[]}function _(a,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(c(y)){const M=a.length||0,L=y.length||0;a.length=M+L;for(let ee=0;ee<L;ee++)a[M+ee]=y[ee]}else a.push(y)}}class C{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function R(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var $=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function K(a,f,m){for(const y in a)f.call(m,a[y],y,a)}function b(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function w(a){const f={};for(const m in a)f[m]=a[m];return f}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,f){let m,y;for(let M=1;M<arguments.length;M++){y=arguments[M];for(m in y)a[m]=y[m];for(let L=0;L<E.length;L++)m=E[L],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function N(a){var f=1;a=a.split(":");const m=[];for(;0<f&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Ht;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Ue{constructor(){this.h=this.g=null}add(f,m){const y=ot.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var ot=new C(()=>new Ye,a=>a.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,Ie=!1,Ht=new Ue,fn=()=>{const a=l.Promise.resolve(void 0);ke=()=>{a.then(Zt)}};var Zt=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(m){P(m)}var f=ot;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}Ie=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Xe(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var Ts=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,f),l.removeEventListener("test",m,f)}catch{}return a}();function Sn(a,f){if(Xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if($){e:{try{x(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:jt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Sn.aa.h.call(this)}}D(Sn,Xe);var jt={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),re=0;function se(a,f,m,y,M){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=M,this.key=++re,this.da=this.fa=!1}function oe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xe(a){this.src=a,this.g={},this.h=0}xe.prototype.add=function(a,f,m,y,M){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var ee=S(a,f,y,M);return-1<ee?(f=a[ee],m||(f.fa=!1)):(f=new se(f,this.src,L,!!y,M),f.fa=m,a.push(f)),f};function T(a,f){var m=f.type;if(m in a.g){var y=a.g[m],M=Array.prototype.indexOf.call(y,f,void 0),L;(L=0<=M)&&Array.prototype.splice.call(y,M,1),L&&(oe(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function S(a,f,m,y){for(var M=0;M<a.length;++M){var L=a[M];if(!L.da&&L.listener==f&&L.capture==!!m&&L.ha==y)return M}return-1}var V="closure_lm_"+(1e6*Math.random()|0),U={};function z(a,f,m,y,M){if(Array.isArray(f)){for(var L=0;L<f.length;L++)z(a,f[L],m,y,M);return null}return m=ge(m),a&&a[F]?a.K(f,m,u(y)?!!y.capture:!1,M):j(a,f,m,!1,y,M)}function j(a,f,m,y,M,L){if(!f)throw Error("Invalid event type");var ee=u(M)?!!M.capture:!!M,je=te(a);if(je||(a[V]=je=new xe(a)),m=je.add(f,m,y,ee,L),m.proxy)return m;if(y=ne(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)Ts||(M=ee),M===void 0&&(M=!1),a.addEventListener(f.toString(),y,M);else if(a.attachEvent)a.attachEvent(Y(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ne(){function a(m){return f.call(a.src,a.listener,m)}const f=ce;return a}function Z(a,f,m,y,M){if(Array.isArray(f))for(var L=0;L<f.length;L++)Z(a,f[L],m,y,M);else y=u(y)?!!y.capture:!!y,m=ge(m),a&&a[F]?(a=a.i,f=String(f).toString(),f in a.g&&(L=a.g[f],m=S(L,m,y,M),-1<m&&(oe(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete a.g[f],a.h--)))):a&&(a=te(a))&&(f=a.g[f.toString()],a=-1,f&&(a=S(f,m,y,M)),(m=-1<a?f[a]:null)&&J(m))}function J(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[F])T(f.i,a);else{var m=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(m,y,a.capture):f.detachEvent?f.detachEvent(Y(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=te(f))?(T(m,a),m.h==0&&(m.src=null,f[V]=null)):oe(a)}}}function Y(a){return a in U?U[a]:U[a]="on"+a}function ce(a,f){if(a.da)a=!0;else{f=new Sn(f,this);var m=a.listener,y=a.ha||a.src;a.fa&&J(a),a=m.call(y,f)}return a}function te(a){return a=a[V],a instanceof xe?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(f){return a.handleEvent(f)}),a[ae])}function fe(){Qe.call(this),this.i=new xe(this),this.M=this,this.F=null}D(fe,Qe),fe.prototype[F]=!0,fe.prototype.removeEventListener=function(a,f,m,y){Z(this,a,f,m,y)};function we(a,f){var m,y=a.F;if(y)for(m=[];y;y=y.F)m.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new Xe(f,a);else if(f instanceof Xe)f.target=f.target||a;else{var M=f;f=new Xe(y,a),k(f,M)}if(M=!0,m)for(var L=m.length-1;0<=L;L--){var ee=f.g=m[L];M=De(ee,y,!0,f)&&M}if(ee=f.g=a,M=De(ee,y,!0,f)&&M,M=De(ee,y,!1,f)&&M,m)for(L=0;L<m.length;L++)ee=f.g=m[L],M=De(ee,y,!1,f)&&M}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var m=a.g[f],y=0;y<m.length;y++)oe(m[y]);delete a.g[f],a.h--}}this.F=null},fe.prototype.K=function(a,f,m,y){return this.i.add(String(a),f,!1,m,y)},fe.prototype.L=function(a,f,m,y){return this.i.add(String(a),f,!0,m,y)};function De(a,f,m,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,L=0;L<f.length;++L){var ee=f[L];if(ee&&!ee.da&&ee.capture==m){var je=ee.listener,vt=ee.ha||ee.src;ee.fa&&T(a.i,ee),M=je.call(vt,y)!==!1&&M}}return M&&!y.defaultPrevented}function pt(a,f,m){if(typeof a=="function")m&&(a=g(a,m));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function mt(a){a.g=pt(()=>{a.g=null,a.i&&(a.i=!1,mt(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class en extends Qe{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(a){Qe.call(this),this.h=a,this.g={}}D(Et,Qe);var Is=[];function ki(a){K(a.g,function(f,m){this.g.hasOwnProperty(m)&&J(f)},a),a.g={}}Et.prototype.N=function(){Et.aa.N.call(this),ki(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gt=l.JSON.stringify,tn=l.JSON.parse,ha=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ur(){}Ur.prototype.h=null;function nf(a){return a.h||(a.h=a.i())}function sf(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rc(){Xe.call(this,"d")}D(Rc,Xe);function Cc(){Xe.call(this,"c")}D(Cc,Xe);var ir={},rf=null;function da(){return rf=rf||new fe}ir.La="serverreachability";function of(a){Xe.call(this,ir.La,a)}D(of,Xe);function Ni(a){const f=da();we(f,new of(f))}ir.STAT_EVENT="statevent";function af(a,f){Xe.call(this,ir.STAT_EVENT,a),this.stat=f}D(af,Xe);function Vt(a){const f=da();we(f,new af(f,a))}ir.Ma="timingevent";function lf(a,f){Xe.call(this,ir.Ma,a),this.size=f}D(lf,Xe);function xi(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function Oi(){this.g=!0}Oi.prototype.xa=function(){this.g=!1};function Wb(a,f,m,y,M,L){a.info(function(){if(a.g)if(L)for(var ee="",je=L.split("&"),vt=0;vt<je.length;vt++){var Oe=je[vt].split("=");if(1<Oe.length){var Tt=Oe[0];Oe=Oe[1];var It=Tt.split("_");ee=2<=It.length&&It[1]=="type"?ee+(Tt+"="+Oe+"&"):ee+(Tt+"=redacted&")}}else ee=null;else ee=L;return"XMLHTTP REQ ("+y+") [attempt "+M+"]: "+f+`
`+m+`
`+ee})}function Gb(a,f,m,y,M,L,ee){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+M+"]: "+f+`
`+m+`
`+L+" "+ee})}function jr(a,f,m,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Yb(a,m)+(y?" "+y:"")})}function Kb(a,f){a.info(function(){return"TIMEOUT: "+f})}Oi.prototype.info=function(){};function Yb(a,f){if(!a.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var y=m[a];if(!(2>y.length)){var M=y[1];if(Array.isArray(M)&&!(1>M.length)){var L=M[0];if(L!="noop"&&L!="stop"&&L!="close")for(var ee=1;ee<M.length;ee++)M[ee]=""}}}}return gt(m)}catch{return f}}var fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function pa(){}D(pa,Ur),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},Pc=new pa;function As(a,f,m,y){this.j=a,this.i=f,this.l=m,this.R=y||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uf}function uf(){this.i=null,this.g="",this.h=!1}var hf={},kc={};function Dc(a,f,m){a.L=1,a.v=ya(Gn(f)),a.m=m,a.P=!0,df(a,null)}function df(a,f){a.F=Date.now(),ma(a),a.A=Gn(a.v);var m=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Sf(m.i,"t",y),a.C=0,m=a.j.J,a.h=new uf,a.g=qf(a.j,m?f:null,!a.m),0<a.O&&(a.M=new en(g(a.Y,a,a.g),a.O)),f=a.U,m=a.g,y=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(Is[0]=M.toString()),M=Is);for(var L=0;L<M.length;L++){var ee=z(m,M[L],y||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),Ni(),Wb(a.i,a.u,a.A,a.l,a.R,a.m)}As.prototype.ca=function(a){a=a.target;const f=this.M;f&&Kn(a)==3?f.j():this.Y(a)},As.prototype.Y=function(a){try{if(a==this.g)e:{const It=Kn(this.g);var f=this.g.Ba();const qr=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||xf(this.g)))){this.J||It!=4||f==7||(f==8||0>=qr?Ni(3):Ni(2)),Nc(this);var m=this.g.Z();this.X=m;t:if(ff(this)){var y=xf(this.g);a="";var M=y.length,L=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Vi(this);var ee="";break t}this.h.i=new l.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,a+=this.h.i.decode(y[f],{stream:!(L&&f==M-1)});y.length=0,this.h.g+=a,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=m==200,Gb(this.i,this.u,this.A,this.l,this.R,It,m),this.o){if(this.T&&!this.K){t:{if(this.g){var je,vt=this.g;if((je=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(je)){var Oe=je;break t}}Oe=null}if(m=Oe)jr(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xc(this,m);else{this.o=!1,this.s=3,Vt(12),or(this),Vi(this);break e}}if(this.P){m=!0;let pn;for(;!this.J&&this.C<ee.length;)if(pn=Qb(this,ee),pn==kc){It==4&&(this.s=4,Vt(14),m=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==hf){this.s=4,Vt(15),jr(this.i,this.l,ee,"[Invalid Chunk]"),m=!1;break}else jr(this.i,this.l,pn,null),xc(this,pn);if(ff(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||ee.length!=0||this.h.h||(this.s=1,Vt(16),m=!1),this.o=this.o&&m,!m)jr(this.i,this.l,ee,"[Invalid Chunked Response]"),or(this),Vi(this);else if(0<ee.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Fc(Tt),Tt.M=!0,Vt(11))}}else jr(this.i,this.l,ee,null),xc(this,ee);It==4&&or(this),this.o&&!this.J&&(It==4?Uf(this.j,this):(this.o=!1,ma(this)))}else fw(this.g),m==400&&0<ee.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),or(this),Vi(this)}}}catch{}finally{}};function ff(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Qb(a,f){var m=a.C,y=f.indexOf(`
`,m);return y==-1?kc:(m=Number(f.substring(m,y)),isNaN(m)?hf:(y+=1,y+m>f.length?kc:(f=f.slice(y,y+m),a.C=y+m,f)))}As.prototype.cancel=function(){this.J=!0,or(this)};function ma(a){a.S=Date.now()+a.I,pf(a,a.I)}function pf(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=xi(g(a.ba,a),f)}function Nc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}As.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Kb(this.i,this.A),this.L!=2&&(Ni(),Vt(17)),or(this),this.s=2,Vi(this)):pf(this,this.S-a)};function Vi(a){a.j.G==0||a.J||Uf(a.j,a)}function or(a){Nc(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,ki(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function xc(a,f){try{var m=a.j;if(m.G!=0&&(m.g==a||Oc(m.h,a))){if(!a.K&&Oc(m.h,a)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var M=y;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Ia(m),Ea(m);else break e;$c(m),Vt(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=xi(g(m.Za,m),6e3));if(1>=vf(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else lr(m,11)}else if((a.K||m.g==a)&&Ia(m),!R(f))for(M=m.Da.g.parse(f),f=0;f<M.length;f++){let Oe=M[f];if(m.T=Oe[0],Oe=Oe[1],m.G==2)if(Oe[0]=="c"){m.K=Oe[1],m.ia=Oe[2];const Tt=Oe[3];Tt!=null&&(m.la=Tt,m.j.info("VER="+m.la));const It=Oe[4];It!=null&&(m.Aa=It,m.j.info("SVER="+m.Aa));const qr=Oe[5];qr!=null&&typeof qr=="number"&&0<qr&&(y=1.5*qr,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const pn=a.g;if(pn){const Sa=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var L=y.h;L.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Vc(L,L.h),L.h=null))}if(y.D){const Uc=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(y.ya=Uc,He(y.I,y.D,Uc))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var ee=a;if(y.qa=zf(y,y.J?y.ia:null,y.W),ee.K){yf(y.h,ee);var je=ee,vt=y.L;vt&&(je.I=vt),je.B&&(Nc(je),ma(je)),y.g=ee}else $f(y);0<m.i.length&&Ta(m)}else Oe[0]!="stop"&&Oe[0]!="close"||lr(m,7);else m.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?lr(m,7):Lc(m):Oe[0]!="noop"&&m.l&&m.l.ta(Oe),m.v=0)}}Ni(4)}catch{}}var Xb=class{constructor(a,f){this.g=a,this.map=f}};function mf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vf(a){return a.h?1:a.g?a.g.size:0}function Oc(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Vc(a,f){a.g?a.g.add(f):a.h=f}function yf(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}mf.prototype.cancel=function(){if(this.i=_f(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _f(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.D);return f}return A(a.i)}function Jb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var f=[],m=a.length,y=0;y<m;y++)f.push(a[y]);return f}f=[],m=0;for(y in a)f[m++]=a[y];return f}function Zb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var f=[];a=a.length;for(var m=0;m<a;m++)f.push(m);return f}f=[],m=0;for(const y in a)f[m++]=y;return f}}}function bf(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var m=Zb(a),y=Jb(a),M=y.length,L=0;L<M;L++)f.call(void 0,y[L],m&&m[L],a)}var wf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ew(a,f){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var y=a[m].indexOf("="),M=null;if(0<=y){var L=a[m].substring(0,y);M=a[m].substring(y+1)}else L=a[m];f(L,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ar){this.h=a.h,ga(this,a.j),this.o=a.o,this.g=a.g,va(this,a.s),this.l=a.l;var f=a.i,m=new $i;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Ef(this,m),this.m=a.m}else a&&(f=String(a).match(wf))?(this.h=!1,ga(this,f[1]||"",!0),this.o=Mi(f[2]||""),this.g=Mi(f[3]||"",!0),va(this,f[4]),this.l=Mi(f[5]||"",!0),Ef(this,f[6]||"",!0),this.m=Mi(f[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}ar.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Li(f,Tf,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Li(f,Tf,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Li(m,m.charAt(0)=="/"?sw:nw,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Li(m,iw)),a.join("")};function Gn(a){return new ar(a)}function ga(a,f,m){a.j=m?Mi(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function va(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Ef(a,f,m){f instanceof $i?(a.i=f,ow(a.i,a.h)):(m||(f=Li(f,rw)),a.i=new $i(f,a.h))}function He(a,f,m){a.i.set(f,m)}function ya(a){return He(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Mi(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Li(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,tw),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function tw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tf=/[#\/\?@]/g,nw=/[#\?:]/g,sw=/[#\?]/g,rw=/[#\?@]/g,iw=/#/g;function $i(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Ss(a){a.g||(a.g=new Map,a.h=0,a.i&&ew(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=$i.prototype,t.add=function(a,f){Ss(this),this.i=null,a=Br(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function If(a,f){Ss(a),f=Br(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Af(a,f){return Ss(a),f=Br(a,f),a.g.has(f)}t.forEach=function(a,f){Ss(this),this.g.forEach(function(m,y){m.forEach(function(M){a.call(f,M,y,this)},this)},this)},t.na=function(){Ss(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const M=a[y];for(let L=0;L<M.length;L++)m.push(f[y])}return m},t.V=function(a){Ss(this);let f=[];if(typeof a=="string")Af(this,a)&&(f=f.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)f=f.concat(a[m])}return f},t.set=function(a,f){return Ss(this),this.i=null,a=Br(this,a),Af(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Sf(a,f,m){If(a,f),0<m.length&&(a.i=null,a.g.set(Br(a,f),A(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const L=encodeURIComponent(String(y)),ee=this.V(y);for(y=0;y<ee.length;y++){var M=L;ee[y]!==""&&(M+="="+encodeURIComponent(String(ee[y]))),a.push(M)}}return this.i=a.join("&")};function Br(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function ow(a,f){f&&!a.j&&(Ss(a),a.i=null,a.g.forEach(function(m,y){var M=y.toLowerCase();y!=M&&(If(this,y),Sf(this,M,m))},a)),a.j=f}function aw(a,f){const m=new Oi;if(l.Image){const y=new Image;y.onload=v(Rs,m,"TestLoadImage: loaded",!0,f,y),y.onerror=v(Rs,m,"TestLoadImage: error",!1,f,y),y.onabort=v(Rs,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=v(Rs,m,"TestLoadImage: timeout",!1,f,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function lw(a,f){const m=new Oi,y=new AbortController,M=setTimeout(()=>{y.abort(),Rs(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(M),L.ok?Rs(m,"TestPingServer: ok",!0,f):Rs(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Rs(m,"TestPingServer: error",!1,f)})}function Rs(a,f,m,y,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),y(m)}catch{}}function cw(){this.g=new ha}function uw(a,f,m){const y=m||"";try{bf(a,function(M,L){let ee=M;u(M)&&(ee=gt(M)),f.push(y+L+"="+encodeURIComponent(ee))})}catch(M){throw f.push(y+"type="+encodeURIComponent("_badmap")),M}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}D(_a,Ur),_a.prototype.g=function(){return new ba(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function ba(a,f){fe.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ba,fe),t=ba.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Fi(this):Ui(this),this.readyState==3&&Rf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fi(this))},t.Qa=function(a){this.g&&(this.response=a,Fi(this))},t.ga=function(){this.g&&Fi(this)};function Fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ui(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function Ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cf(a){let f="";return K(a,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function Mc(a,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Cf(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):He(a,f,m))}function et(a){fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(et,fe);var hw=/^https?$/i,dw=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?nf(this.o):nf(Pc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(L){Pf(this,L);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var M in y)m.set(M,y[M]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),M=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(dw,f,void 0))||y||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,ee]of m)this.g.setRequestHeader(L,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nf(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Pf(this,L)}};function Pf(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,kf(a),wa(a)}function kf(a){a.A||(a.A=!0,we(a,"complete"),we(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,we(this,"complete"),we(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Df(this):this.bb())},t.bb=function(){Df(this)};function Df(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Kn(a)!=4||a.Z()!=2)){if(a.u&&Kn(a)==4)pt(a.Ea,0,a);else if(we(a,"readystatechange"),Kn(a)==4){a.h=!1;try{const ee=a.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=ee===0){var M=String(a.D).match(wf)[1]||null;!M&&l.self&&l.self.location&&(M=l.self.location.protocol.slice(0,-1)),y=!hw.test(M?M.toLowerCase():"")}m=y}if(m)we(a,"complete"),we(a,"success");else{a.m=6;try{var L=2<Kn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",kf(a)}}finally{wa(a)}}}}function wa(a,f){if(a.g){Nf(a);const m=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||we(a,"ready");try{m.onreadystatechange=y}catch{}}}function Nf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),tn(f)}};function xf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function fw(a){const f={};a=(a.g&&2<=Kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(R(a[y]))continue;var m=N(a[y]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=f[M]||[];f[M]=L,L.push(m)}b(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ji(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function Of(a){this.Aa=0,this.i=[],this.j=new Oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ji("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ji("baseRetryDelayMs",5e3,a),this.cb=ji("retryDelaySeedMs",1e4,a),this.Wa=ji("forwardChannelMaxRetries",2,a),this.wa=ji("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mf(a&&a.concurrentRequestLimit),this.Da=new cw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Of.prototype,t.la=8,t.G=1,t.connect=function(a,f,m,y){Vt(0),this.W=a,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=zf(this,null,this.W),Ta(this)};function Lc(a){if(Vf(a),a.G==3){var f=a.U++,m=Gn(a.I);if(He(m,"SID",a.K),He(m,"RID",f),He(m,"TYPE","terminate"),Bi(a,m),f=new As(a,a.j,f),f.L=2,f.v=ya(Gn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=f.v,m=!0),m||(f.g=qf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ma(f)}Bf(a)}function Ea(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function Vf(a){Ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ta(a){if(!gf(a.h)&&!a.s){a.s=!0;var f=a.Ga;ke||fn(),Ie||(ke(),Ie=!0),Ht.add(f,a),a.B=0}}function pw(a,f){return vf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=xi(g(a.Ga,a,f),jf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new As(this,this.j,a);let L=this.o;if(this.S&&(L?(L=w(L),k(L,this.S)):L=this.S),this.m!==null||this.O||(M.H=L,L=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Lf(this,M,f),m=Gn(this.I),He(m,"RID",a),He(m,"CVER",22),this.D&&He(m,"X-HTTP-Session-Id",this.D),Bi(this,m),L&&(this.O?f="headers="+encodeURIComponent(String(Cf(L)))+"&"+f:this.m&&Mc(m,this.m,L)),Vc(this.h,M),this.Ua&&He(m,"TYPE","init"),this.P?(He(m,"$req",f),He(m,"SID","null"),M.T=!0,Dc(M,m,null)):Dc(M,m,f),this.G=2}}else this.G==3&&(a?Mf(this,a):this.i.length==0||gf(this.h)||Mf(this))};function Mf(a,f){var m;f?m=f.l:m=a.U++;const y=Gn(a.I);He(y,"SID",a.K),He(y,"RID",m),He(y,"AID",a.T),Bi(a,y),a.m&&a.o&&Mc(y,a.m,a.o),m=new As(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Lf(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,m),Dc(m,y,f)}function Bi(a,f){a.H&&K(a.H,function(m,y){He(f,y,m)}),a.l&&bf({},function(m,y){He(f,y,m)})}function Lf(a,f,m){m=Math.min(a.i.length,m);var y=a.l?g(a.l.Na,a.l,a):null;e:{var M=a.i;let L=-1;for(;;){const ee=["count="+m];L==-1?0<m?(L=M[0].g,ee.push("ofs="+L)):L=0:ee.push("ofs="+L);let je=!0;for(let vt=0;vt<m;vt++){let Oe=M[vt].g;const Tt=M[vt].map;if(Oe-=L,0>Oe)L=Math.max(0,M[vt].g-100),je=!1;else try{uw(Tt,ee,"req"+Oe+"_")}catch{y&&y(Tt)}}if(je){y=ee.join("&");break e}}}return a=a.i.splice(0,m),f.D=a,y}function $f(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;ke||fn(),Ie||(ke(),Ie=!0),Ht.add(f,a),a.v=0}}function $c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=xi(g(a.Fa,a),jf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=xi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Ea(this),Ff(this))};function Fc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ff(a){a.g=new As(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=Gn(a.qa);He(f,"RID","rpc"),He(f,"SID",a.K),He(f,"AID",a.T),He(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&He(f,"TO",a.ja),He(f,"TYPE","xmlhttp"),Bi(a,f),a.m&&a.o&&Mc(f,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=ya(Gn(f)),m.m=null,m.P=!0,df(m,a)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),$c(this),Vt(19))};function Ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Uf(a,f){var m=null;if(a.g==f){Ia(a),Fc(a),a.g=null;var y=2}else if(Oc(a.h,f))m=f.D,yf(a.h,f),y=1;else return;if(a.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var M=a.B;y=da(),we(y,new lf(y,m)),Ta(a)}else $f(a);else if(M=f.s,M==3||M==0&&0<f.X||!(y==1&&pw(a,f)||y==2&&$c(a)))switch(m&&0<m.length&&(f=a.h,f.i=f.i.concat(m)),M){case 1:lr(a,5);break;case 4:lr(a,10);break;case 3:lr(a,6);break;default:lr(a,2)}}}function jf(a,f){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*f}function lr(a,f){if(a.j.info("Error code "+f),f==2){var m=g(a.fb,a),y=a.Xa;const M=!y;y=new ar(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ga(y,"https"),ya(y),M?aw(y.toString(),m):lw(y.toString(),m)}else Vt(2);a.G=0,a.l&&a.l.sa(f),Bf(a),Vf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Bf(a){if(a.G=0,a.ka=[],a.l){const f=_f(a.h);(f.length!=0||a.i.length!=0)&&(_(a.ka,f),_(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function zf(a,f,m){var y=m instanceof ar?Gn(m):new ar(m);if(y.g!="")f&&(y.g=f+"."+y.g),va(y,y.s);else{var M=l.location;y=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var L=new ar(null);y&&ga(L,y),f&&(L.g=f),M&&va(L,M),m&&(L.l=m),y=L}return m=a.D,f=a.ya,m&&f&&He(y,m,f),He(y,"VER",a.la),Bi(a,y),y}function qf(a,f,m){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new et(new _a({eb:m})):new et(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hf(){}t=Hf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(a,f){return new Wt(a,f)};function Wt(a,f){fe.call(this),this.g=new Of(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!R(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!R(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new zr(this)}D(Wt,fe),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Lc(this.g)},Wt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=gt(a),a=m);f.i.push(new Xb(f.Ya++,a)),f.G==3&&Ta(f)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Lc(this.g),delete this.g,Wt.aa.N.call(this)};function Wf(a){Rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}D(Wf,Rc);function Gf(){Cc.call(this),this.status=1}D(Gf,Cc);function zr(a){this.g=a}D(zr,Hf),zr.prototype.ua=function(){we(this.g,"a")},zr.prototype.ta=function(a){we(this.g,new Wf(a))},zr.prototype.sa=function(a){we(this.g,new Gf)},zr.prototype.ra=function(){we(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,W_=function(){return new Aa},H_=function(){return da()},q_=ir,Ku={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,Ya=fa,cf.COMPLETE="complete",z_=cf,sf.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Xi=sf,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,B_=et}).apply(typeof Na<"u"?Na:typeof self<"u"?self:typeof window<"u"?window:{});const Pm="@firebase/firestore",km="4.9.0";/**
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
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
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
 */let Ai="12.0.0";/**
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
 */const Sr=new rc("@firebase/firestore");function Qr(){return Sr.logLevel}function ie(t,...e){if(Sr.logLevel<=Ae.DEBUG){const n=e.map(od);Sr.debug(`Firestore (${Ai}): ${t}`,...n)}}function ps(t,...e){if(Sr.logLevel<=Ae.ERROR){const n=e.map(od);Sr.error(`Firestore (${Ai}): ${t}`,...n)}}function gi(t,...e){if(Sr.logLevel<=Ae.WARN){const n=e.map(od);Sr.warn(`Firestore (${Ai}): ${t}`,...n)}}function od(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,G_(t,s,n)}function G_(t,e,n){let s=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ps(s),new Error(s)}function Fe(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||G_(e,r,s)}function be(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class K_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class KR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YR{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new K_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Rt(e)}}class QR{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XR{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new QR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const s=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ZR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class ad{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ZR(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function Se(t,e){return t<e?-1:t>e?1:0}function Yu(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const r=t.charAt(s),i=e.charAt(s);if(r!==i)return lu(r)===lu(i)?Se(r,i):lu(r)?1:-1}return Se(t.length,e.length)}const eC=55296,tC=57343;function lu(t){const e=t.charCodeAt(0);return e>=eC&&e<=tC}function vi(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */const Nm="__name__";class Pn{constructor(e,n,s){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&me(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Pn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return Se(e.length,n.length)}static compareSegments(e,n){const s=Pn.isNumericId(e),r=Pn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):Yu(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bs.fromString(e.substring(4,e.length-2))}}class Je extends Pn{construct(e,n,s){return new Je(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const nC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends Pn{construct(e,n,s){return new bt(e,n,s)}static isValidIdentifier(e){return nC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nm}static keyField(){return new bt([Nm])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new le(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new le(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new le(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(n)}static emptyPath(){return new bt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Je.fromString(e))}static fromName(e){return new de(Je.fromString(e).popFirst(5))}static empty(){return new de(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Je(e.slice()))}}/**
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
 */function sC(t,e,n){if(!n)throw new le(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rC(t,e,n,s){if(e===!0&&s===!0)throw new le(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!de.isDocumentKey(t))throw new le(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ld(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Lo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ld(t);throw new le(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function na(t,e){if(!Y_(t))throw new le(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new le(H.INVALID_ARGUMENT,n);return!0}/**
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
 */const Om=-62135596800,Vm=1e6;class We{static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Vm);return new We(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Om)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vm}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:We._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(na(e,We._jsonSchema))return new We(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Om;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}We._jsonSchemaVersion="firestore/timestamp/1.0",We._jsonSchema={type:it("string",We._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
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
 */const $o=-1;function iC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=ve.fromTimestamp(s===1e9?new We(n+1,0):new We(n,s));return new Ks(r,de.empty(),e)}function oC(t){return new Ks(t.readTime,t.key,$o)}class Ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ks(ve.min(),de.empty(),$o)}static max(){return new Ks(ve.max(),de.empty(),$o)}}function aC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */async function Si(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==lC)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,s)=>{n(e)})}static reject(e){return new B((n,s)=>{s(e)})}static waitFor(e){return new B((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=B.resolve(!1);for(const s of e)n=n.next(r=>r?B.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new B((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&s(o)},d=>r(d))}})}static doWhile(e,n){return new B((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function uC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lc.ce=-1;/**
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
 */const cd=-1;function cc(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function hC(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Q_="";function dC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mm(e)),e=fC(t.get(n),e);return Mm(e)}function fC(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case Q_:n+="";break;default:n+=i}}return n}function Mm(t){return t+Q_+""}/**
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
 */function Lm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??yt.RED,this.left=r??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new yt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return yt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $m(this.data.getIterator())}getIteratorFrom(e){return new $m(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class $m{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new gn([])}unionWith(e){let n=new lt(bt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new J_("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const pC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ys(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=pC.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */const Z_="server_timestamp",e1="__type__",t1="__previous_value__",n1="__local_write_time__";function ud(t){return(t?.mapValue?.fields||{})[e1]?.stringValue===Z_}function uc(t){const e=t.mapValue.fields[t1];return ud(e)?uc(e):e}function Fo(t){const e=Ys(t.mapValue.fields[n1].timestampValue);return new We(e.seconds,e.nanos)}/**
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
 */class mC{constructor(e,n,s,r,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const El="(default)";class Uo{constructor(e,n){this.projectId=e,this.database=n||El}static empty(){return new Uo("","")}get isDefaultDatabase(){return this.database===El}isEqual(e){return e instanceof Uo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const s1="__type__",gC="__max__",Oa={mapValue:{}},r1="__vector__",Tl="value";function Xs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ud(t)?4:yC(t)?9007199254740991:vC(t)?10:11:me(28295,{value:t})}function Bn(t,e){if(t===e)return!0;const n=Xs(t);if(n!==Xs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ys(r.timestampValue),l=Ys(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qs(r.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return st(r.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(r.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return st(r.integerValue)===st(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=st(r.doubleValue),l=st(i.doubleValue);return o===l?wl(o)===wl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return vi(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Lm(o)!==Lm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Bn(o[c],l[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function jo(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=Xs(t),s=Xs(e);if(n!==s)return Se(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=st(i.integerValue||i.doubleValue),c=st(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Fm(t.timestampValue,e.timestampValue);case 4:return Fm(Fo(t),Fo(e));case 5:return Yu(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Qs(i),c=Qs(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Se(l[u],c[u]);if(d!==0)return d}return Se(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Se(st(i.latitude),st(o.latitude));return l!==0?l:Se(st(i.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Um(t.arrayValue,e.arrayValue);case 10:return function(i,o){const l=i.fields||{},c=o.fields||{},u=l[Tl]?.arrayValue,d=c[Tl]?.arrayValue,p=Se(u?.values?.length||0,d?.values?.length||0);return p!==0?p:Um(u,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Oa.mapValue&&o===Oa.mapValue)return 0;if(i===Oa.mapValue)return 1;if(o===Oa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Yu(c[p],d[p]);if(g!==0)return g;const v=yi(l[c[p]],u[d[p]]);if(v!==0)return v}return Se(c.length,d.length)}(t.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function Fm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Ys(t),s=Ys(e),r=Se(n.seconds,s.seconds);return r!==0?r:Se(n.nanos,s.nanos)}function Um(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=yi(n[r],s[r]);if(i)return i}return Se(n.length,s.length)}function _i(t){return Qu(t)}function Qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ys(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Qu(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Qu(n.fields[o])}`;return r+"}"}(t.mapValue):me(61005,{value:t})}function Qa(t){switch(Xs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uc(t);return e?16+Qa(e):16;case 5:return 2*t.stringValue.length;case 6:return Qs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Qa(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return Mr(s.fields,(i,o)=>{r+=i.length+Qa(o)}),r}(t.mapValue);default:throw me(13486,{value:t})}}function Xu(t){return!!t&&"integerValue"in t}function hd(t){return!!t&&"arrayValue"in t}function jm(t){return!!t&&"nullValue"in t}function Bm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xa(t){return!!t&&"mapValue"in t}function vC(t){return(t?.mapValue?.fields||{})[s1]?.stringValue===r1}function vo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=vo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vo(t.arrayValue.values[n]);return e}return{...t}}function yC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gC}/**
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
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vo(n)}setAll(e){let n=bt.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=vo(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Xa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Mr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new sn(vo(this.value))}}function i1(t){const e=[];return Mr(t.fields,(n,s)=>{const r=new bt([n]);if(Xa(s)){const i=i1(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new gn(e)}/**
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
 */class Pt{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Pt(e,0,ve.min(),ve.min(),ve.min(),sn.empty(),0)}static newFoundDocument(e,n,s,r){return new Pt(e,1,n,ve.min(),s,r,0)}static newNoDocument(e,n){return new Pt(e,2,n,ve.min(),ve.min(),sn.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,ve.min(),ve.min(),sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Il{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=de.comparator(de.fromName(o.referenceValue),n.key):s=yi(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function qm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class o1{}class at extends o1{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new wC(e,n,s):n==="array-contains"?new IC(e,s):n==="in"?new AC(e,s):n==="not-in"?new SC(e,s):n==="array-contains-any"?new RC(e,s):new at(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new EC(e,s):new TC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(yi(n,this.value)):n!==null&&Xs(this.value)===Xs(n)&&this.matchesComparison(yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends o1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zn(e,n)}matches(e){return a1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function a1(t){return t.op==="and"}function l1(t){return bC(t)&&a1(t)}function bC(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function Ju(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(l1(t))return t.filters.map(e=>Ju(e)).join(",");{const e=t.filters.map(n=>Ju(n)).join(",");return`${t.op}(${e})`}}function c1(t,e){return t instanceof at?function(s,r){return r instanceof at&&s.op===r.op&&s.field.isEqual(r.field)&&Bn(s.value,r.value)}(t,e):t instanceof zn?function(s,r){return r instanceof zn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&c1(o,r.filters[l]),!0):!1}(t,e):void me(19439)}function u1(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${_i(n.value)}`}(t):t instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(u1).join(" ,")+"}"}(t):"Filter"}class wC extends at{constructor(e,n,s){super(e,n,s),this.key=de.fromName(s.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class EC extends at{constructor(e,n){super(e,"in",n),this.keys=h1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TC extends at{constructor(e,n){super(e,"not-in",n),this.keys=h1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function h1(t,e){return(e.arrayValue?.values||[]).map(n=>de.fromName(n.referenceValue))}class IC extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hd(n)&&jo(n.arrayValue,this.value)}}class AC extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class SC extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!jo(this.value.arrayValue,n)}}class RC extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>jo(this.value.arrayValue,s))}}/**
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
 */class CC{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Hm(t,e=null,n=[],s=[],r=null,i=null,o=null){return new CC(t,e,n,s,r,i,o)}function dd(t){const e=be(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ju(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_i(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_i(s)).join(",")),e.Te=n}return e.Te}function fd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_C(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qm(t.startAt,e.startAt)&&qm(t.endAt,e.endAt)}function Zu(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class hc{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PC(t,e,n,s,r,i,o,l){return new hc(t,e,n,s,r,i,o,l)}function pd(t){return new hc(t)}function Wm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kC(t){return t.collectionGroup!==null}function yo(t){const e=be(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new lt(bt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Al(i,s))}),n.has(bt.keyField().canonicalString())||e.Ie.push(new Al(bt.keyField(),s))}return e.Ie}function Ln(t){const e=be(t);return e.Ee||(e.Ee=DC(e,yo(t))),e.Ee}function DC(t,e){if(t.limitType==="F")return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Al(r.field,i)});const n=t.endAt?new Il(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Il(t.startAt.position,t.startAt.inclusive):null;return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function eh(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dc(t,e){return fd(Ln(t),Ln(e))&&t.limitType===e.limitType}function d1(t){return`${dd(Ln(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>u1(r)).join(", ")}]`),cc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>_i(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>_i(r)).join(",")),`Target(${s})`}(Ln(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):de.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of yo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=zm(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,yo(s),r)||s.endAt&&!function(o,l,c){const u=zm(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,yo(s),r))}(t,e)}function NC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function f1(t){return(e,n)=>{let s=!1;for(const r of yo(t)){const i=xC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function xC(t,e,n){const s=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?yi(c,u):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:t.dir})}}/**
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
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return X_(this.inner)}size(){return this.innerSize}}/**
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
 */const OC=new Ze(de.comparator);function ms(){return OC}const p1=new Ze(de.comparator);function Ji(...t){let e=p1;for(const n of t)e=e.insert(n.key,n);return e}function m1(t){let e=p1;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function vr(){return _o()}function g1(){return _o()}function _o(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const VC=new Ze(de.comparator),MC=new lt(de.comparator);function Re(...t){let e=MC;for(const n of t)e=e.add(n);return e}const LC=new lt(Se);function $C(){return LC}/**
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
 */function md(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function v1(t){return{integerValue:""+t}}function FC(t,e){return hC(e)?v1(e):md(t,e)}/**
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
 */class pc{constructor(){this._=void 0}}function UC(t,e,n){return t instanceof Bo?function(r,i){const o={fields:{[e1]:{stringValue:Z_},[n1]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&ud(i)&&(i=uc(i)),i&&(o.fields[t1]=i),{mapValue:o}}(n,e):t instanceof zo?_1(t,e):t instanceof qo?b1(t,e):function(r,i){const o=y1(r,i),l=Gm(o)+Gm(r.Ae);return Xu(o)&&Xu(r.Ae)?v1(l):md(r.serializer,l)}(t,e)}function jC(t,e,n){return t instanceof zo?_1(t,e):t instanceof qo?b1(t,e):n}function y1(t,e){return t instanceof Sl?function(s){return Xu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Bo extends pc{}class zo extends pc{constructor(e){super(),this.elements=e}}function _1(t,e){const n=w1(e);for(const s of t.elements)n.some(r=>Bn(r,s))||n.push(s);return{arrayValue:{values:n}}}class qo extends pc{constructor(e){super(),this.elements=e}}function b1(t,e){let n=w1(e);for(const s of t.elements)n=n.filter(r=>!Bn(r,s));return{arrayValue:{values:n}}}class Sl extends pc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Gm(t){return st(t.integerValue||t.doubleValue)}function w1(t){return hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class BC{constructor(e,n){this.field=e,this.transform=n}}function zC(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof zo&&r instanceof zo||s instanceof qo&&r instanceof qo?vi(s.elements,r.elements,Bn):s instanceof Sl&&r instanceof Sl?Bn(s.Ae,r.Ae):s instanceof Bo&&r instanceof Bo}(t.transform,e.transform)}class qC{constructor(e,n){this.version=e,this.transformResults=n}}class cs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cs}static exists(e){return new cs(void 0,e)}static updateTime(e){return new cs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function E1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new I1(t.key,cs.none()):new sa(t.key,t.data,cs.none());{const n=t.data,s=sn.empty();let r=new lt(bt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new $r(t.key,s,new gn(r.toArray()),cs.none())}}function HC(t,e,n){t instanceof sa?function(r,i,o){const l=r.value.clone(),c=Ym(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(r,i,o){if(!Ja(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ym(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(T1(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,s){return t instanceof sa?function(i,o,l,c){if(!Ja(i.precondition,o))return l;const u=i.value.clone(),d=Qm(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof $r?function(i,o,l,c){if(!Ja(i.precondition,o))return l;const u=Qm(i.fieldTransforms,c,o),d=o.data;return d.setAll(T1(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,s):function(i,o,l){return Ja(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function WC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=y1(s.transform,r||null);i!=null&&(n===null&&(n=sn.empty()),n.set(s.field,i))}return n||null}function Km(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&vi(s,r,(i,o)=>zC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends mc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class $r extends mc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ym(t,e,n){const s=new Map;Fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,jC(o,l,n[r]))}return s}function Qm(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,UC(i,o,e))}return s}class I1 extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GC extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&HC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=bo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=bo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=g1();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=E1(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&vi(this.mutations,e.mutations,(n,s)=>Km(n,s))&&vi(this.baseMutations,e.baseMutations,(n,s)=>Km(n,s))}}class gd{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return VC}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new gd(e,n,s,r)}}/**
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
 */var rt,Ne;function XC(t){switch(t){case H.OK:return me(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function A1(t){if(t===void 0)return ps("GRPC error has no .code"),H.UNKNOWN;switch(t){case rt.OK:return H.OK;case rt.CANCELLED:return H.CANCELLED;case rt.UNKNOWN:return H.UNKNOWN;case rt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case rt.INTERNAL:return H.INTERNAL;case rt.UNAVAILABLE:return H.UNAVAILABLE;case rt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case rt.NOT_FOUND:return H.NOT_FOUND;case rt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case rt.ABORTED:return H.ABORTED;case rt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case rt.DATA_LOSS:return H.DATA_LOSS;default:return me(39323,{code:t})}}(Ne=rt||(rt={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZC=new Bs([4294967295,4294967295],0);function Xm(t){const e=JC().encode(t),n=new j_;return n.update(e),new Uint8Array(n.digest())}function Jm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Bs([n,s],0),new Bs([r,i],0)]}class vd{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Zi(`Invalid padding: ${n}`);if(s<0)throw new Zi(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Zi(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Zi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Bs.fromNumber(this.ge)}ye(e,n,s){let r=e.add(n.multiply(Bs.fromNumber(s)));return r.compare(ZC)===1&&(r=new Bs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Xm(e),[s,r]=Jm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new vd(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Xm(e),[s,r]=Jm(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new gc(ve.min(),r,new Ze(Se),ms(),Re())}}class ra{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ra(s,n,Re(),Re(),Re())}}/**
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
 */class Za{constructor(e,n,s,r){this.be=e,this.removedTargetIds=n,this.key=s,this.De=r}}class S1{constructor(e,n){this.targetId=e,this.Ce=n}}class R1{constructor(e,n,s=wt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Zm{constructor(){this.ve=0,this.Fe=eg(),this.Me=wt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Re(),n=Re(),s=Re();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:me(38017,{changeType:i})}}),new ra(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=eg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class eP{constructor(e){this.Ge=e,this.ze=new Map,this.je=ms(),this.Je=Va(),this.He=Va(),this.Ye=new Ze(Se)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,r)=>{this.rt(r)&&n(r)})}st(e){const n=e.targetId,s=e.Ce.count,r=this.ot(n);if(r){const i=r.target;if(Zu(i))if(s===0){const o=new de(i.path);this.et(n,o,Pt.newNoDocument(o,ve.min()))}else Fe(s===1,20013,{expectedCount:s});else{const o=this._t(n);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Qs(s).toUint8Array()}catch(c){if(c instanceof J_)return gi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new vd(o,r,i)}catch(c){return gi(c instanceof Zi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),r++)}),r}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Zu(l.target)){const c=new de(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Pt.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let s=Re();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const r=new gc(e,n,this.Ye,this.je,s);return this.je=ms(),this.Je=Va(),this.He=Va(),this.Ye=new Ze(Se),r}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,n)?r.Qe(n,1):r.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Zm,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new lt(Se),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new lt(Se),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zm),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Va(){return new Ze(de.comparator)}function eg(){return new Ze(de.comparator)}const tP={asc:"ASCENDING",desc:"DESCENDING"},nP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sP={and:"AND",or:"OR"};class rP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function th(t,e){return t.useProto3Json||cc(e)?e:{value:e}}function Rl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iP(t,e){return Rl(t,e.toTimestamp())}function $n(t){return Fe(!!t,49232),ve.fromTimestamp(function(n){const s=Ys(n);return new We(s.seconds,s.nanos)}(t))}function yd(t,e){return nh(t,e).canonicalString()}function nh(t,e){const n=function(r){return new Je(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function P1(t){const e=Je.fromString(t);return Fe(O1(e),10190,{key:e.toString()}),e}function sh(t,e){return yd(t.databaseId,e.path)}function cu(t,e){const n=P1(e);if(n.get(1)!==t.databaseId.projectId)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(D1(n))}function k1(t,e){return yd(t.databaseId,e)}function oP(t){const e=P1(t);return e.length===4?Je.emptyPath():D1(e)}function rh(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function D1(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tg(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function aP(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Fe(d===void 0||typeof d=="string",58123),wt.fromBase64String(d||"")):(Fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),wt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?H.UNKNOWN:A1(u.code);return new le(d,u.message||"")}(o);n=new R1(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=cu(t,s.document.name),i=$n(s.document.updateTime),o=s.document.createTime?$n(s.document.createTime):ve.min(),l=new sn({mapValue:{fields:s.document.fields}}),c=Pt.newFoundDocument(r,i,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new Za(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=cu(t,s.document),i=s.readTime?$n(s.readTime):ve.min(),o=Pt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Za([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=cu(t,s.document),i=s.removedTargetIds||[];n=new Za([],i,r,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new QC(r,i),l=s.targetId;n=new S1(l,o)}}return n}function lP(t,e){let n;if(e instanceof sa)n={update:tg(t,e.key,e.value)};else if(e instanceof I1)n={delete:sh(t,e.key)};else if(e instanceof $r)n={update:tg(t,e.key,e.data),updateMask:vP(e.fieldMask)};else{if(!(e instanceof GC))return me(16599,{Vt:e.type});n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof Bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw me(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:iP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function cP(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map(n=>function(r,i){let o=r.updateTime?$n(r.updateTime):$n(i);return o.isEqual(ve.min())&&(o=$n(i)),new qC(o,r.transformResults||[])}(n,e))):[]}function uP(t,e){return{documents:[k1(t,e.path)]}}function hP(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=k1(t,r);const i=function(u){if(u.length!==0)return x1(zn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Jr(g.field),direction:pP(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=th(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:r}}function dP(t){let e=oP(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Fe(s===1,65062);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=N1(p);return g instanceof zn&&l1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(D){return new Al(Zr(D.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,cc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new Il(v,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,v=p.values||[];return new Il(v,g)}(n.endAt)),PC(e,r,o,i,l,"F",c,u)}function fP(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function N1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Zr(n.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Zr(n.unaryFilter.field);return at.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return at.create(Zr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(s=>N1(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function pP(t){return tP[t]}function mP(t){return nP[t]}function gP(t){return sP[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return bt.fromServerFormat(t.fieldPath)}function x1(t){return t instanceof at?function(n){if(n.op==="=="){if(Bm(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(jm(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bm(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(jm(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:mP(n.op),value:n.value}}}(t):t instanceof zn?function(n){const s=n.getFilters().map(r=>x1(r));return s.length===1?s[0]:{compositeFilter:{op:gP(n.op),filters:s}}}(t):me(54877,{filter:t})}function vP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function O1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $s{constructor(e,n,s,r,i=ve.min(),o=ve.min(),l=wt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new $s(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $s(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yP{constructor(e){this.yt=e}}function _P(t){const e=dP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eh(e,e.limit,"L"):e}/**
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
 */class bP{constructor(){this.Cn=new wP}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ks.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ks.min())}updateCollectionGroup(e,n,s){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class wP{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new lt(Je.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new lt(Je.comparator)).toArray()}}/**
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
 */const ng={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},V1=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(V1,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
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
 */class bi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new bi(0)}static cr(){return new bi(-1)}}/**
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
 */const sg="LruGarbageCollector",EP=1048576;function rg([t,e],[n,s]){const r=Se(t,n);return r===0?Se(e,s):r}class TP{constructor(e){this.Ir=e,this.buffer=new lt(rg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();rg(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IP{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(sg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ri(n)?ie(sg,"Ignoring IndexedDB error during garbage collection: ",n):await Si(n)}await this.Vr(3e5)})}}class AP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return B.resolve(lc.ce);const s=new TP(n);return this.mr.forEachTarget(e,r=>s.Ar(r.sequenceNumber)).next(()=>this.mr.pr(e,r=>s.Ar(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(ng)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ng):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,r,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(s=p,l=Date.now(),this.removeTargets(e,s,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(u=Date.now(),Qr()<=Ae.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function SP(t,e){return new AP(t,e)}/**
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
 */class RP{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?B.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PP{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&bo(s.mutation,r,gn.empty(),We.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Re()){const r=vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ji();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=vr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Re()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=ms();const o=_o(),l=function(){return _o()}();return n.forEach((c,u)=>{const d=s.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof $r)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),bo(d.mutation,u,d.mutation.getFieldMask(),We.now())):o.set(u.key,gn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>l.set(u,new CP(d,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const s=_o();let r=new Ze((o,l)=>o-l),i=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||gn.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(r.get(l.batchId)||Re()).add(c);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=g1();d.forEach(g=>{if(!i.has(g)){const v=E1(n.get(g),s.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):B.resolve(vr());let l=$o,c=i;return o.next(u=>B.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Re())).next(d=>({batchId:l,changes:m1(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(s=>{let r=Ji();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Ji();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(p,g){return new hc(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Pt.newInvalidDocument(d)))});let l=Ji();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&bo(d.mutation,u,gn.empty(),We.now()),fc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class kP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:$n(r.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(r){return{name:r.name,query:_P(r.bundledQuery),readTime:$n(r.readTime)}}(n)),B.resolve()}}/**
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
 */class DP{constructor(){this.overlays=new Ze(de.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const s=vr();return B.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.St(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.qr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(s)),B.resolve()}getOverlaysForCollection(e,n,s){const r=vr(),i=n.length+1,o=new de(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return B.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=i.get(u.largestBatchId);d===null&&(d=vr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=vr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=r)););return B.resolve(l)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(s.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new YC(n,s));let i=this.qr.get(n);i===void 0&&(i=Re(),this.qr.set(n,i)),this.qr.set(n,i.add(s.key))}}/**
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
 */class NP{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class _d{constructor(){this.Qr=new lt(ut.$r),this.Ur=new lt(ut.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new ut(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new ut(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new de(new Je([])),s=new ut(n,e),r=new ut(n,e+1),i=[];return this.Ur.forEachInRange([s,r],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new de(new Je([])),s=new ut(n,e),r=new ut(n,e+1);let i=Re();return this.Ur.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return de.comparator(e.key,n.key)||Se(e.Yr,n.Yr)}static Kr(e,n){return Se(e.Yr,n.Yr)||de.comparator(e.key,n.key)}}/**
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
 */class xP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new lt(ut.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KC(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Zr=this.Zr.add(new ut(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ei(s),i=r<0?0:r;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?cd:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ut(n,0),r=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([s,r],o=>{const l=this.Xr(o.Yr);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new lt(Se);return n.forEach(r=>{const i=new ut(r,0),o=new ut(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{s=s.add(l.Yr)})}),B.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;de.isDocumentKey(i)||(i=i.child(""));const o=new ut(new de(i),0);let l=new lt(Se);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Yr)),!0)},o),B.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(s=>{const r=this.Xr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return B.forEach(n.mutations,r=>{const i=new ut(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new ut(n,0),r=this.Zr.firstAfterOrEqual(s);return B.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class OP{constructor(e){this.ri=e,this.docs=function(){return new Ze(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return B.resolve(s?s.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let s=ms();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pt.newInvalidDocument(r))}),B.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=ms();const o=n.path,l=new de(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||aC(oC(d),s)<=0||(r.has(d.key)||fc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,s,r){me(9500)}ii(e,n){return B.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new VP(this)}getSize(e){return B.resolve(this.size)}}class VP extends RP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(s)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class MP{constructor(e){this.persistence=e,this.si=new Lr(n=>dd(n),fd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.oi=0,this._i=new _d,this.targetCount=0,this.ai=bi.ur()}forEachTarget(e,n){return this.si.forEach((s,r)=>n(r)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),B.waitFor(i).next(()=>r)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return B.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),B.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return B.resolve(s)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class M1{constructor(e,n){this.ui={},this.overlays={},this.ci=new lc(0),this.li=!1,this.li=!0,this.hi=new NP,this.referenceDelegate=e(this),this.Pi=new MP(this),this.indexManager=new bP,this.remoteDocumentCache=function(r){return new OP(r)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new yP(n),this.Ii=new kP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new xP(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ie("MemoryPersistence","Starting transaction:",e);const r=new LP(this.ci.next());return this.referenceDelegate.Ei(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,n){return B.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class LP extends cC{constructor(e){super(),this.currentSequenceNumber=e}}class bd{constructor(e){this.persistence=e,this.Ri=new _d,this.Vi=null}static mi(e){return new bd(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),B.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(r=>this.fi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.fi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,s=>{const r=de.fromPath(s);return this.gi(e,r).next(i=>{i||n.removeEntry(r,ve.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Cl{constructor(e,n){this.persistence=e,this.pi=new Lr(s=>dC(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=SP(this,n)}static mi(e,n){return new Cl(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(s,r)=>this.br(e,s,r).next(i=>i?B.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,o=>this.br(e,o,n).next(l=>{l||(s++,i.removeEntry(o,ve.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qa(e.data.value)),n}br(e,n,s){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.pi.get(n);return B.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class wd{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=r}static As(e,n){let s=Re(),r=Re();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wd(e,n.fromCache,s,r)}}/**
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
 */class $P{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return i2()?8:uC(xt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $P;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,s,r){return s.documentReadCount<this.fs?(Qr()<=Ae.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(Qr()<=Ae.DEBUG&&ie("QueryEngine","Query:",Xr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.gs*r?(Qr()<=Ae.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):B.resolve())}ys(e,n){if(Wm(n))return B.resolve(null);let s=Ln(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=eh(n,null,"F"),s=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Re(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,eh(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,s,r){return Wm(n)||r.isEqual(ve.min())?B.resolve(null):this.ps.getDocuments(e,s).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,s,r)?B.resolve(null):(Qr()<=Ae.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xr(n)),this.vs(e,o,n,iC(r,$o)).next(l=>l))})}Ds(e,n){let s=new lt(f1(e));return n.forEach((r,i)=>{fc(e,i)&&(s=s.add(i))}),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return Qr()<=Ae.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.ps.getDocumentsMatchingQuery(e,n,Ks.min(),s)}vs(e,n,s,r){return this.ps.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Ed="LocalStore",UP=3e8;class jP{constructor(e,n,s,r){this.persistence=e,this.Fs=n,this.serializer=r,this.Ms=new Ze(Se),this.xs=new Lr(i=>dd(i),fd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function BP(t,e,n,s){return new jP(t,e,n,s)}async function L1(t,e){const n=be(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=Re();for(const u of r){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function zP(t,e){const n=be(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let v=B.resolve();return g.forEach(D=>{v=v.next(()=>d.getEntry(c,D)).next(A=>{const _=u.docVersions.get(D);Fe(_!==null,48541),A.version.compareTo(_)<0&&(p.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),d.addEntry(A)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=Re();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function $1(t){const e=be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function qP(t,e){const n=be(t),s=e.snapshotVersion;let r=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});r=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const g=r.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,d.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(wt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,s)),r=r.insert(p,v),function(A,_,C){return A.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=UP?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,v,d)&&l.push(n.Pi.updateTargetData(i,v))});let c=ms(),u=Re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(HP(i,o,e.documentUpdates).next(d=>{c=d.ks,u=d.qs})),!s.isEqual(ve.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(d)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ms=r,i))}function HP(t,e,n){let s=Re(),r=Re();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=ms();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ie(Ed,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:r}})}function WP(t,e){const n=be(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=cd),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function GP(t,e){const n=be(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Pi.getTargetData(s,e).next(i=>i?(r=i,B.resolve(r)):n.Pi.allocateTargetId(s).next(o=>(r=new $s(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ms.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function ih(t,e,n){const s=be(t),r=s.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ri(o))throw o;ie(Ed,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ms=s.Ms.remove(e),s.xs.delete(r.target)}function ig(t,e,n){const s=be(t);let r=ve.min(),i=Re();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=be(c),g=p.xs.get(d);return g!==void 0?B.resolve(p.Ms.get(g)):p.Pi.getTargetData(u,d)}(s,o,Ln(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s.Fs.getDocumentsMatchingQuery(o,e,n?r:ve.min(),n?i:Re())).next(l=>(KP(s,NC(e),l),{documents:l,Qs:i})))}function KP(t,e,n){let s=t.Os.get(e)||ve.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Os.set(e,s)}class og{constructor(){this.activeTargetIds=$C()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YP{constructor(){this.Mo=new og,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new og,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const ag="ConnectivityMonitor";class lg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(ag,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(ag,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const uu="RestConnection",XP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${r}`,this.Wo=this.databaseId.database===El?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Go(e,n,s,r,i){const o=oh(),l=this.zo(e,n.toUriEncodedString());ie(uu,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,r,i);const{host:u}=new URL(l),d=rr(u);return this.Jo(e,l,c,s,d).then(p=>(ie(uu,`Received RPC '${e}' ${o}: `,p),p),p=>{throw gi(uu,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p})}Ho(e,n,s,r,i,o){return this.Go(e,n,s,r,i)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}zo(e,n){const s=XP[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */const At="WebChannelConnection";class e4 extends JP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=oh();return new Promise((l,c)=>{const u=new B_;u.setWithCredentials(!0),u.listenOnce(z_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ya.NO_ERROR:const p=u.getResponseJson();ie(At,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ya.TIMEOUT:ie(At,`RPC '${e}' ${o} timed out`),c(new le(H.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const g=u.getStatus();if(ie(At,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const D=v?.error;if(D&&D.status&&D.message){const A=function(C){const R=C.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(R)>=0?R:H.UNKNOWN}(D.status);c(new le(A,D.message))}else c(new le(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new le(H.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ie(At,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(r);ie(At,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",d,s,15)})}T_(e,n,s){const r=oh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=W_(),l=H_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=i.join("");ie(At,`Creating RPC '${e}' stream ${r}: ${d}`,c);const p=o.createWebChannel(d,c);this.I_(p);let g=!1,v=!1;const D=new ZP({Yo:_=>{v?ie(At,`Not sending because RPC '${e}' stream ${r} is closed:`,_):(g||(ie(At,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),ie(At,`RPC '${e}' stream ${r} sending:`,_),p.send(_))},Zo:()=>p.close()}),A=(_,C,R)=>{_.listen(C,O=>{try{R(O)}catch(x){setTimeout(()=>{throw x},0)}})};return A(p,Xi.EventType.OPEN,()=>{v||(ie(At,`RPC '${e}' stream ${r} transport opened.`),D.o_())}),A(p,Xi.EventType.CLOSE,()=>{v||(v=!0,ie(At,`RPC '${e}' stream ${r} transport closed`),D.a_(),this.E_(p))}),A(p,Xi.EventType.ERROR,_=>{v||(v=!0,gi(At,`RPC '${e}' stream ${r} transport errored. Name:`,_.name,"Message:",_.message),D.a_(new le(H.UNAVAILABLE,"The operation could not be completed")))}),A(p,Xi.EventType.MESSAGE,_=>{if(!v){const C=_.data[0];Fe(!!C,16349);const R=C,O=R?.error||R[0]?.error;if(O){ie(At,`RPC '${e}' stream ${r} received error:`,O);const x=O.status;let $=function(w){const E=rt[w];if(E!==void 0)return A1(E)}(x),K=O.message;$===void 0&&($=H.INTERNAL,K="Unknown error status: "+x+" with message "+O.message),v=!0,D.a_(new le($,K)),p.close()}else ie(At,`RPC '${e}' stream ${r} received:`,C),D.u_(C)}}),A(l,q_.STAT_EVENT,_=>{_.stat===Ku.PROXY?ie(At,`RPC '${e}' stream ${r} detected buffering proxy`):_.stat===Ku.NOPROXY&&ie(At,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function hu(){return typeof document<"u"?document:null}/**
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
 */function vc(t){return new rP(t,!0)}/**
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
 */class F1{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-s);r>0&&ie("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const cg="PersistentStream";class U1{constructor(e,n,s,r,i,o,l,c){this.Mi=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new F1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(ps(n.toString()),ps("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===n&&this.G_(s,r)},s=>{e(()=>{const r=new le(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ie(cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ie(cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t4 extends U1{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=aP(this.serializer,e),s=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?$n(o.readTime):ve.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=rh(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Zu(c)?{documents:uP(i,c)}:{query:hP(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=C1(i,o.resumeToken);const u=th(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){l.readTime=Rl(i,o.snapshotVersion.toTimestamp());const u=th(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=fP(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=rh(this.serializer),n.removeTarget=e,this.q_(n)}}class n4 extends U1{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=cP(e.writeResults,e.commitTime),s=$n(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=rh(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>lP(this.serializer,s))};this.q_(n)}}/**
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
 */class s4{}class r4 extends s4{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,nh(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(H.UNKNOWN,i.toString())})}Ho(e,n,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,nh(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(H.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class i4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ps(n),this.aa=!1):ie("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Rr="RemoteStore";class o4{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{s.enqueueAndForget(async()=>{Fr(this)&&(ie(Rr,"Restarting streams for network reachability change."),await async function(c){const u=be(c);u.Ea.add(4),await ia(u),u.Ra.set("Unknown"),u.Ea.delete(4),await yc(u)}(this))})}),this.Ra=new i4(s,r)}}async function yc(t){if(Fr(t))for(const e of t.da)await e(!0)}async function ia(t){for(const e of t.da)await e(!1)}function j1(t,e){const n=be(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Sd(n)?Ad(n):Ci(n).O_()&&Id(n,e))}function Td(t,e){const n=be(t),s=Ci(n);n.Ia.delete(e),s.O_()&&B1(n,e),n.Ia.size===0&&(s.O_()?s.L_():Fr(n)&&n.Ra.set("Unknown"))}function Id(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).Y_(e)}function B1(t,e){t.Va.Ue(e),Ci(t).Z_(e)}function Ad(t){t.Va=new eP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.Ra.ua()}function Sd(t){return Fr(t)&&!Ci(t).x_()&&t.Ia.size>0}function Fr(t){return be(t).Ea.size===0}function z1(t){t.Va=void 0}async function a4(t){t.Ra.set("Online")}async function l4(t){t.Ia.forEach((e,n)=>{Id(t,e)})}async function c4(t,e){z1(t),Sd(t)?(t.Ra.ha(e),Ad(t)):t.Ra.set("Unknown")}async function u4(t,e,n){if(t.Ra.set("Online"),e instanceof R1&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.Va.removeTarget(l))}(t,e)}catch(s){ie(Rr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pl(t,s)}else if(e instanceof Za?t.Va.Ze(e):e instanceof S1?t.Va.st(e):t.Va.tt(e),!n.isEqual(ve.min()))try{const s=await $1(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(wt.EMPTY_BYTE_STRING,d.snapshotVersion)),B1(i,c);const p=new $s(d.target,c,u,d.sequenceNumber);Id(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){ie(Rr,"Failed to raise snapshot:",s),await Pl(t,s)}}async function Pl(t,e,n){if(!Ri(e))throw e;t.Ea.add(1),await ia(t),t.Ra.set("Offline"),n||(n=()=>$1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(Rr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await yc(t)})}function q1(t,e){return e().catch(n=>Pl(t,n,e))}async function _c(t){const e=be(t),n=Js(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:cd;for(;h4(e);)try{const r=await WP(e.localStore,s);if(r===null){e.Ta.length===0&&n.L_();break}s=r.batchId,d4(e,r)}catch(r){await Pl(e,r)}H1(e)&&W1(e)}function h4(t){return Fr(t)&&t.Ta.length<10}function d4(t,e){t.Ta.push(e);const n=Js(t);n.O_()&&n.X_&&n.ea(e.mutations)}function H1(t){return Fr(t)&&!Js(t).x_()&&t.Ta.length>0}function W1(t){Js(t).start()}async function f4(t){Js(t).ra()}async function p4(t){const e=Js(t);for(const n of t.Ta)e.ea(n.mutations)}async function m4(t,e,n){const s=t.Ta.shift(),r=gd.from(s,e,n);await q1(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await _c(t)}async function g4(t,e){e&&Js(t).X_&&await async function(s,r){if(function(o){return XC(o)&&o!==H.ABORTED}(r.code)){const i=s.Ta.shift();Js(s).B_(),await q1(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await _c(s)}}(t,e),H1(t)&&W1(t)}async function ug(t,e){const n=be(t);n.asyncQueue.verifyOperationInProgress(),ie(Rr,"RemoteStore received new credentials");const s=Fr(n);n.Ea.add(3),await ia(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await yc(n)}async function v4(t,e){const n=be(t);e?(n.Ea.delete(2),await yc(n)):e||(n.Ea.add(2),await ia(n),n.Ra.set("Unknown"))}function Ci(t){return t.ma||(t.ma=function(n,s,r){const i=be(n);return i.sa(),new t4(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Xo:a4.bind(null,t),t_:l4.bind(null,t),r_:c4.bind(null,t),H_:u4.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Sd(t)?Ad(t):t.Ra.set("Unknown")):(await t.ma.stop(),z1(t))})),t.ma}function Js(t){return t.fa||(t.fa=function(n,s,r){const i=be(n);return i.sa(),new n4(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:f4.bind(null,t),r_:g4.bind(null,t),ta:p4.bind(null,t),na:m4.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await _c(t)):(await t.fa.stop(),t.Ta.length>0&&(ie(Rr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Rd{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Rd(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cd(t,e){if(ps("AsyncQueue",`${e}: ${t}`),Ri(t))return new le(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ci{static emptySet(e){return new ci(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||de.comparator(n.key,s.key):(n,s)=>de.comparator(n.key,s.key),this.keyedMap=Ji(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ci;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class hg{constructor(){this.ga=new Ze(de.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class wi{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new wi(e,n,ci.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class y4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _4{constructor(){this.queries=dg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=be(n),i=r.queries;r.queries=dg(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(s)})})(this,new le(H.ABORTED,"Firestore shutting down"))}}function dg(){return new Lr(t=>d1(t),dc)}async function b4(t,e){const n=be(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new y4,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await n.onListen(r,!0);break;case 1:i.wa=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Cd(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Pd(n)}async function w4(t,e){const n=be(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function E4(t,e){const n=be(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(r)&&(s=!0);o.wa=r}}s&&Pd(n)}function T4(t,e,n){const s=be(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function Pd(t){t.Ca.forEach(e=>{e.next()})}var ah,fg;(fg=ah||(ah={})).Ma="default",fg.Cache="cache";class I4{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new wi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ah.Cache}}/**
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
 */class G1{constructor(e){this.key=e}}class K1{constructor(e){this.key=e}}class A4{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Re(),this.mutatedKeys=Re(),this.eu=f1(e),this.tu=new ci(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new hg,r=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,p)=>{const g=r.get(d),v=fc(this.query,p)?p:null,D=!!g&&this.mutatedKeys.has(g.key),A=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let _=!1;g&&v?g.data.isEqual(v.data)?D!==A&&(s.track({type:3,doc:v}),_=!0):this.su(g,v)||(s.track({type:2,doc:v}),_=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!g&&v?(s.track({type:0,doc:v}),_=!0):g&&!v&&(s.track({type:1,doc:g}),_=!0,(c||u)&&(l=!0)),_&&(v?(o=o.add(v),i=A?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(v,D){const A=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:_})}};return A(v)-A(D)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(s),r=r??!1;const l=n&&!r?this._u():[],c=this.Xa.size===0&&this.current&&!r?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new wi(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new hg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Re(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new K1(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new G1(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return wi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const kd="SyncEngine";class S4{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class R4{constructor(e){this.key=e,this.hu=!1}}class C4{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Lr(l=>d1(l),dc),this.Iu=new Map,this.Eu=new Set,this.du=new Ze(de.comparator),this.Au=new Map,this.Ru=new _d,this.Vu={},this.mu=new Map,this.fu=bi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function P4(t,e,n=!0){const s=e0(t);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Y1(s,e,n,!0),r}async function k4(t,e){const n=e0(t);await Y1(n,e,!0,!1)}async function Y1(t,e,n,s){const r=await GP(t.localStore,Ln(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await D4(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&j1(t.remoteStore,r),l}async function D4(t,e,n,s,r){t.pu=(p,g,v)=>async function(A,_,C,R){let O=_.view.ru(C);O.Cs&&(O=await ig(A.localStore,_.query,!1).then(({documents:b})=>_.view.ru(b,O)));const x=R&&R.targetChanges.get(_.targetId),$=R&&R.targetMismatches.get(_.targetId)!=null,K=_.view.applyChanges(O,A.isPrimaryClient,x,$);return mg(A,_.targetId,K.au),K.snapshot}(t,p,g,v);const i=await ig(t.localStore,e,!0),o=new A4(e,i.Qs),l=o.ru(i.documents),c=ra.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);mg(t,n,u.au);const d=new S4(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function N4(t,e,n){const s=be(t),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(o=>!dc(o,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ih(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Td(s.remoteStore,r.targetId),lh(s,r.targetId)}).catch(Si)):(lh(s,r.targetId),await ih(s.localStore,r.targetId,!0))}async function x4(t,e){const n=be(t),s=n.Tu.get(e),r=n.Iu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Td(n.remoteStore,s.targetId))}async function O4(t,e,n){const s=j4(t);try{const r=await function(o,l){const c=be(o),u=We.now(),d=l.reduce((v,D)=>v.add(D.key),Re());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let D=ms(),A=Re();return c.Ns.getEntries(v,d).next(_=>{D=_,D.forEach((C,R)=>{R.isValidDocument()||(A=A.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,D)).next(_=>{p=_;const C=[];for(const R of l){const O=WC(R,p.get(R.key).overlayedDocument);O!=null&&C.push(new $r(R.key,O,i1(O.value.mapValue),cs.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,C,l)}).next(_=>{g=_;const C=_.applyToLocalDocumentSet(p,A);return c.documentOverlayCache.saveOverlays(v,_.batchId,C)})}).then(()=>({batchId:g.batchId,changes:m1(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Ze(Se)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(s,r.batchId,n),await oa(s,r.changes),await _c(s.remoteStore)}catch(r){const i=Cd(r,"Failed to persist write");n.reject(i)}}async function Q1(t,e){const n=be(t);try{const s=await qP(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Au.get(i);o&&(Fe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Fe(o.hu,14607):r.removedDocuments.size>0&&(Fe(o.hu,42227),o.hu=!1))}),await oa(n,s,e)}catch(s){await Si(s)}}function pg(t,e,n){const s=be(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=be(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.Sa)g.va(l)&&(u=!0)}),u&&Pd(c)}(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function V4(t,e,n){const s=be(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new Ze(de.comparator);o=o.insert(i,Pt.newNoDocument(i,ve.min()));const l=Re().add(i),c=new gc(ve.min(),new Map,new Ze(Se),o,l);await Q1(s,c),s.du=s.du.remove(i),s.Au.delete(e),Dd(s)}else await ih(s.localStore,e,!1).then(()=>lh(s,e,n)).catch(Si)}async function M4(t,e){const n=be(t),s=e.batch.batchId;try{const r=await zP(n.localStore,e);J1(n,s,null),X1(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await oa(n,r)}catch(r){await Si(r)}}async function L4(t,e,n){const s=be(t);try{const r=await function(o,l){const c=be(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Fe(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(s.localStore,e);J1(s,e,n),X1(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await oa(s,r)}catch(r){await Si(r)}}function X1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function J1(t,e,n){const s=be(t);let r=s.Vu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Vu[s.currentUser.toKey()]=r}}function lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Iu.get(e))t.Tu.delete(s),n&&t.Pu.yu(s,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(s=>{t.Ru.containsKey(s)||Z1(t,s)})}function Z1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Td(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Dd(t))}function mg(t,e,n){for(const s of n)s instanceof G1?(t.Ru.addReference(s.key,e),$4(t,s)):s instanceof K1?(ie(kd,"Document no longer in limbo: "+s.key),t.Ru.removeReference(s.key,e),t.Ru.containsKey(s.key)||Z1(t,s.key)):me(19791,{wu:s})}function $4(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Eu.has(s)||(ie(kd,"New document in limbo: "+n),t.Eu.add(s),Dd(t))}function Dd(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new de(Je.fromString(e)),s=t.fu.next();t.Au.set(s,new R4(n)),t.du=t.du.insert(n,s),j1(t.remoteStore,new $s(Ln(pd(n.path)),s,"TargetPurposeLimboResolution",lc.ce))}}async function oa(t,e,n){const s=be(t),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((l,c)=>{o.push(s.pu(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:n?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=wd.As(c.targetId,u);i.push(d)}}))}),await Promise.all(o),s.Pu.H_(r),await async function(c,u){const d=be(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,g=>B.forEach(g.Es,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>B.forEach(g.ds,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Ri(p))throw p;ie(Ed,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const v=d.Ms.get(g),D=v.snapshotVersion,A=v.withLastLimboFreeSnapshotVersion(D);d.Ms=d.Ms.insert(g,A)}}}(s.localStore,i))}async function F4(t,e){const n=be(t);if(!n.currentUser.isEqual(e)){ie(kd,"User change. New user:",e.toKey());const s=await L1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new le(H.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oa(n,s.Ls)}}function U4(t,e){const n=be(t),s=n.Au.get(e);if(s&&s.hu)return Re().add(s.key);{let r=Re();const i=n.Iu.get(e);if(!i)return r;for(const o of i){const l=n.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function e0(t){const e=be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Q1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V4.bind(null,e),e.Pu.H_=E4.bind(null,e.eventManager),e.Pu.yu=T4.bind(null,e.eventManager),e}function j4(t){const e=be(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=M4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=L4.bind(null,e),e}class kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return BP(this.persistence,new FP,e.initialUser,this.serializer)}Cu(e){return new M1(bd.mi,this.serializer)}Du(e){return new YP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kl.provider={build:()=>new kl};class B4 extends kl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Fe(this.persistence.referenceDelegate instanceof Cl,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new IP(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new M1(s=>Cl.mi(s,n),this.serializer)}}class ch{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=F4.bind(null,this.syncEngine),await v4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _4}()}createDatastore(e){const n=vc(e.databaseInfo.databaseId),s=function(i){return new e4(i)}(e.databaseInfo);return function(i,o,l,c){return new r4(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new o4(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>pg(this.syncEngine,n,0),function(){return lg.v()?new lg:new QP}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,d){const p=new C4(r,i,o,l,c,u);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const s=be(n);ie(Rr,"RemoteStore shutting down."),s.Ea.add(5),await ia(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ch.provider={build:()=>new ch};/**
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
 */class z4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ps("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Zs="FirestoreClient";class q4{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Rt.UNAUTHENTICATED,this.clientId=ad.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ie(Zs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ie(Zs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function du(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Zs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await L1(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await H4(t);ie(Zs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>ug(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>ug(e.remoteStore,r)),t._onlineComponents=e}async function H4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Zs,"Using user provided OfflineComponentProvider");try{await du(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===H.FAILED_PRECONDITION||r.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;gi("Error using user provided cache. Falling back to memory cache: "+n),await du(t,new kl)}}else ie(Zs,"Using default OfflineComponentProvider"),await du(t,new B4(void 0));return t._offlineComponents}async function t0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Zs,"Using user provided OnlineComponentProvider"),await gg(t,t._uninitializedComponentsProvider._online)):(ie(Zs,"Using default OnlineComponentProvider"),await gg(t,new ch))),t._onlineComponents}function W4(t){return t0(t).then(e=>e.syncEngine)}async function G4(t){const e=await t0(t),n=e.eventManager;return n.onListen=P4.bind(null,e.syncEngine),n.onUnlisten=N4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=k4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=x4.bind(null,e.syncEngine),n}function K4(t,e,n={}){const s=new zs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new z4({next:g=>{d.Nu(),o.enqueueAndForget(()=>w4(i,p));const v=g.docs.has(l);!v&&g.fromCache?u.reject(new le(H.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?u.reject(new le(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new I4(pd(l.path),d,{includeMetadataChanges:!0,qa:!0});return b4(i,p)}(await G4(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */const s0="firestore.googleapis.com",yg=!0;class _g{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new le(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=s0,this.ssl=yg}else this.host=e.host,this.ssl=e.ssl??yg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=V1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EP)throw new le(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n0(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new le(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nd{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _g({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _g(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new GR;switch(s.type){case"firstParty":return new XR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=vg.get(n);s&&(ie("ComponentProvider","Removing Datastore"),vg.delete(n),s.terminate())}(this),Promise.resolve()}}function Y4(t,e,n,s={}){t=Lo(t,Nd);const r=rr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;r&&(nc(`https://${l}`),sc("Firestore",!0)),i.host!==s0&&i.host!==l&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!Gs(c,o)&&(t._setSettings(c),s.mockUserToken)){let u,d;if(typeof s.mockUserToken=="string")u=s.mockUserToken,d=Rt.MOCK_USER;else{u=Xy(s.mockUserToken,t._app?.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new le(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Rt(p)}t._authCredentials=new KR(new K_(u,d))}}/**
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
 */class xd{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xd(this.firestore,e,this._query)}}class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(na(n,dt._jsonSchema))return new dt(e,s||null,new de(Je.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:it("string",dt._jsonSchemaVersion),referencePath:it("string")};class Ho extends xd{constructor(e,n,s){super(e,n,pd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new de(e))}withConverter(e){return new Ho(this.firestore,e,this._path)}}function r0(t,e,...n){if(t=ct(t),arguments.length===1&&(e=ad.newId()),sC("doc","path",e),t instanceof Nd){const s=Je.fromString(e,...n);return xm(s),new dt(t,null,new de(s))}{if(!(t instanceof dt||t instanceof Ho))throw new le(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Je.fromString(e,...n));return xm(s),new dt(t.firestore,t instanceof Ho?t.converter:null,new de(s))}}/**
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
 */const bg="AsyncQueue";class wg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new F1(this,"async_queue_retry"),this._c=()=>{const s=hu();s&&ie(bg,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=hu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ri(e))throw e;ie(bg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,ps("INTERNAL UNHANDLED ERROR: ",Eg(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const r=Rd.createAndSchedule(this,e,n,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&me(47125,{Pc:Eg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Eg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Od extends Nd{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new wg,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wg(e),this._firestoreClient=void 0,await e}}}function Q4(t,e){const n=typeof t=="object"?t:Xo(),s=typeof t=="string"?t:El,r=_s(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Kh("firestore");i&&Y4(r,...i)}return r}function i0(t){if(t._terminated)throw new le(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||X4(t),t._firestoreClient}function X4(t){const e=t._freezeSettings(),n=function(r,i,o,l){return new mC(r,i,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,n0(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new q4(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}}(t._componentsProvider))}/**
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
 */class rn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rn(wt.fromBase64String(e))}catch(n){throw new le(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rn(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(na(e,rn._jsonSchema))return rn.fromBase64String(e.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:it("string",rn._jsonSchemaVersion),bytes:it("string")};/**
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
 */class Vd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Md{constructor(e){this._methodName=e}}/**
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
 */class Fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fn._jsonSchemaVersion}}static fromJSON(e){if(na(e,Fn._jsonSchema))return new Fn(e.latitude,e.longitude)}}Fn._jsonSchemaVersion="firestore/geoPoint/1.0",Fn._jsonSchema={type:it("string",Fn._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
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
 */class Un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(na(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Un(e.vectorValues);throw new le(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:it("string",Un._jsonSchemaVersion),vectorValues:it("object")};/**
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
 */const J4=/^__.*__$/;class Z4{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}function o0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:t})}}class Ld{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ld({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Dl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(o0(this.Ac)&&J4.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ek{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||vc(e)}Cc(e,n,s,r=!1){return new Ld({Ac:e,methodName:n,Dc:s,path:bt.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tk(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nk(t,e,n,s,r,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,r);u0("Data must be an object, but it was:",o,s);const l=l0(s,o);let c,u;if(i.merge)c=new gn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=sk(e,p,n);if(!o.contains(g))throw new le(H.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ik(d,g)||d.push(g)}c=new gn(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new Z4(new sn(l),c,u)}class $d extends Md{_toFieldTransform(e){return new BC(e.path,new Bo)}isEqual(e){return e instanceof $d}}function a0(t,e){if(c0(t=ct(t)))return u0("Unsupported field value:",e,t),l0(t,e);if(t instanceof Md)return function(s,r){if(!o0(r.Ac))throw r.Sc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=a0(l,r.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return FC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=We.fromDate(s);return{timestampValue:Rl(r.serializer,i)}}if(s instanceof We){const i=new We(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Rl(r.serializer,i)}}if(s instanceof Fn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof rn)return{bytesValue:C1(r.serializer,s._byteString)};if(s instanceof dt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Un)return function(o,l){return{mapValue:{fields:{[s1]:{stringValue:r1},[Tl]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return md(l.serializer,u)})}}}}}}(s,r);throw r.Sc(`Unsupported field value: ${ld(s)}`)}(t,e)}function l0(t,e){const n={};return X_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,(s,r)=>{const i=a0(r,e.mc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function c0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Fn||t instanceof rn||t instanceof dt||t instanceof Md||t instanceof Un)}function u0(t,e,n){if(!c0(n)||!Y_(n)){const s=ld(n);throw s==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+s)}}function sk(t,e,n){if((e=ct(e))instanceof Vd)return e._internalPath;if(typeof e=="string")return h0(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const rk=new RegExp("[~\\*/\\[\\]]");function h0(t,e,n){if(e.search(rk)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vd(...e.split("."))._internalPath}catch{throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new le(H.INVALID_ARGUMENT,l+t+c)}function ik(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class d0{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(f0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ok extends d0{data(){return super.data()}}function f0(t,e){return typeof e=="string"?h0(t,e):e instanceof Vd?e._internalPath:e._delegate._internalPath}class ak{convertValue(e,n="none"){switch(Xs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Mr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){const n=e.fields?.[Tl].arrayValue?.values?.map(s=>st(s.doubleValue));return new Un(n)}convertGeoPoint(e){return new Fn(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=uc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=Ys(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Je.fromString(e);Fe(O1(s),9688,{name:e});const r=new Uo(s.get(1),s.get(3)),i=new de(s.popFirst(5));return r.isEqual(n)||ps(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function lk(t,e,n){let s;return s=t?t.toFirestore(e):e,s}class eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wr extends d0{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new el(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(f0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wr._jsonSchemaVersion="firestore/documentSnapshot/1.0",wr._jsonSchema={type:it("string",wr._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class el extends wr{data(e={}){return super.data(e)}}class wo{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new eo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new el(this._firestore,this._userDataWriter,s.key,s,new eo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new le(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new el(r._firestore,r._userDataWriter,l.doc.key,l.doc,new eo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new el(r._firestore,r._userDataWriter,l.doc.key,l.doc,new eo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ck(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ad.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ck(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}/**
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
 */function uk(t){t=Lo(t,dt);const e=Lo(t.firestore,Od);return K4(i0(e),t._key).then(n=>pk(e,t,n))}wo._jsonSchemaVersion="firestore/querySnapshot/1.0",wo._jsonSchema={type:it("string",wo._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class hk extends ak{constructor(e){super(),this.firestore=e}convertBytes(e){return new rn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function dk(t,e,n){t=Lo(t,dt);const s=Lo(t.firestore,Od),r=lk(t.converter,e);return fk(s,[nk(tk(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,cs.none())])}function fk(t,e){return function(s,r){const i=new zs;return s.asyncQueue.enqueueAndForget(async()=>O4(await W4(s),r,i)),i.promise}(i0(t),e)}function pk(t,e,n){const s=n.docs.get(e._key),r=new hk(t);return new wr(t,r,e._key,s,new eo(n.hasPendingWrites,n.fromCache),e.converter)}function Tg(){return new $d("serverTimestamp")}(function(e,n=!0){(function(r){Ai=r})(Vr),un(new Xt("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new Od(new YR(s.getProvider("auth-internal")),new JR(o,s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(u.options.projectId,d)}(o,r),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Nt(Pm,km,e),Nt(Pm,km,"esm2020")})();/**
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
 */class mk{constructor(e,n,s,r){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ft(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||s.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r?.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),s=await this.getMessagingToken(),r=await this.getAppCheckToken(e);return{authToken:n,messagingToken:s,appCheckToken:r}}}/**
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
 */const uh="us-central1";class gk{constructor(e,n,s,r,i=uh,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new mk(e,n,s,r),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=uh}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function vk(t,e,n){const s=rr(e);t.emulatorOrigin=`http${s?"s":""}://${e}:${n}`,s&&(nc(t.emulatorOrigin),sc("Functions",!0))}const Ig="@firebase/functions",Ag="0.13.0";/**
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
 */const yk="auth-internal",_k="app-check-internal",bk="messaging-internal";function wk(t){const e=(n,{instanceIdentifier:s})=>{const r=n.getProvider("app").getImmediate(),i=n.getProvider(yk),o=n.getProvider(bk),l=n.getProvider(_k);return new gk(r,i,o,l,s)};un(new Xt(p0,e,"PUBLIC").setMultipleInstances(!0)),Nt(Ig,Ag,t),Nt(Ig,Ag,"esm2020")}/**
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
 */function Ek(t=Xo(),e=uh){const s=_s(ct(t),p0).getImmediate({identifier:e}),r=Kh("functions");return r&&Tk(s,...r),s}function Tk(t,e,n){vk(ct(t),e,n)}wk();/**
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
 */class Wn extends dn{constructor(e,n,s=0){super(fu(e),`Firebase Storage: ${n} (${fu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qn||(qn={}));function fu(t){return"storage/"+t}function Rk(){const t="An unknown error occurred, please check the error payload for server response.";return new Wn(qn.UNKNOWN,t)}function Ck(){return new Wn(qn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pk(){return new Wn(qn.CANCELED,"User canceled the upload/download.")}function kk(t){return new Wn(qn.INVALID_URL,"Invalid URL '"+t+"'.")}function Dk(t){return new Wn(qn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Sg(t){return new Wn(qn.INVALID_ARGUMENT,t)}function g0(){return new Wn(qn.APP_DELETED,"The Firebase app was deleted.")}function Nk(t){return new Wn(qn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class vn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=vn.makeFromUrl(e,n)}catch{return new vn(e,"")}if(s.path==="")return s;throw Dk(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${r}/o${g}`,"i"),D={bucket:1,path:3},A=n===m0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",C=new RegExp(`^https?://${A}/${r}/${_}`,"i"),O=[{regex:l,indices:c,postModify:i},{regex:v,indices:D,postModify:u},{regex:C,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<O.length;x++){const $=O[x],K=$.regex.exec(e);if(K){const b=K[$.indices.bucket];let w=K[$.indices.path];w||(w=""),s=new vn(b,w),$.postModify(s);break}}if(s==null)throw kk(e);return s}}class xk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ok(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(..._){u||(u=!0,e.apply(null,_))}function p(_){r=setTimeout(()=>{r=null,t(v,c())},_)}function g(){i&&clearTimeout(i)}function v(_,...C){if(u){g();return}if(_){g(),d.call(null,_,...C);return}if(c()||o){g(),d.call(null,_,...C);return}s<64&&(s*=2);let O;l===1?(l=2,O=0):O=(s+Math.random())*1e3,p(O)}let D=!1;function A(_){D||(D=!0,g(),!u&&(r!==null?(_||(l=2),clearTimeout(r),p(0)):_||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function Vk(t){t(!1)}/**
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
 */function Mk(t){return t!==void 0}function Rg(t,e,n,s){if(s<e)throw Sg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Sg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Lk(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Nl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nl||(Nl={}));/**
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
 */function $k(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class Fk{constructor(e,n,s,r,i,o,l,c,u,d,p,g=!0,v=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,A)=>{this.resolve_=D,this.reject_=A,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new La(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Nl.NO_ERROR,c=i.getStatus();if(!l||$k(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Nl.ABORT;s(!1,new La(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new La(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Mk(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Rk();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?g0():Pk();o(c)}else{const c=Ck();o(c)}};this.canceled_?n(!1,new La(!1,null,!0)):this.backoffId_=Ok(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class La{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Uk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Bk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qk(t,e,n,s,r,i,o=!0,l=!1){const c=Lk(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return Bk(d,e),Uk(d,n),jk(d,i),zk(d,s),new Fk(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,l)}/**
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
 */class xl{constructor(e,n){this._service=e,n instanceof vn?this._location=n:this._location=vn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xl(e,n)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wk(this._location.path)}get storage(){return this._service}get parent(){const e=Hk(this._location.path);if(e===null)return null;const n=new vn(this._location.bucket,e);return new xl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Nk(e)}}function Cg(t,e){const n=e?.[Ik];return n==null?null:vn.makeFromBucketSpec(n,t)}function Gk(t,e,n,s={}){t.host=`${e}:${n}`;const r=rr(e);r&&(nc(`https://${t.host}/b`),sc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Xy(i,t.app.options.projectId))}class Kk{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=m0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ak,this._maxUploadRetryTime=Sk,this._requests=new Set,r!=null?this._bucket=vn.makeFromBucketSpec(r,this._host):this._bucket=Cg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=Cg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xl(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new xk(g0());{const o=qk(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Pg="@firebase/storage",kg="0.14.0";/**
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
 */const v0="storage";function Yk(t=Xo(),e){t=ct(t);const s=_s(t,v0).getImmediate({identifier:e}),r=Kh("storage");return r&&Qk(s,...r),s}function Qk(t,e,n,s={}){Gk(t,e,n,s)}function Xk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Kk(n,s,r,e,Vr)}function Jk(){un(new Xt(v0,Xk,"PUBLIC").setMultipleInstances(!0)),Nt(Pg,kg,""),Nt(Pg,kg,"esm2020")}Jk();const y0="@firebase/installations",Fd="0.6.19";/**
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
 */const _0=1e4,b0=`w:${Fd}`,w0="FIS_v2",Zk="https://firebaseinstallations.googleapis.com/v1",e3=3600*1e3,t3="installations",n3="Installations";/**
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
 */const s3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Cr=new Or(t3,n3,s3);function E0(t){return t instanceof dn&&t.code.includes("request-failed")}/**
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
 */function T0({projectId:t}){return`${Zk}/projects/${t}/installations`}function I0(t){return{token:t.token,requestStatus:2,expiresIn:i3(t.expiresIn),creationTime:Date.now()}}async function A0(t,e){const s=(await e.json()).error;return Cr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function S0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function r3(t,{refreshToken:e}){const n=S0(t);return n.append("Authorization",o3(e)),n}async function R0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function i3(t){return Number(t.replace("s","000"))}function o3(t){return`${w0} ${t}`}/**
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
 */async function a3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=T0(t),r=S0(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:w0,appId:t.appId,sdkVersion:b0},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await R0(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:I0(u.authToken)}}else throw await A0("Create Installation",c)}/**
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
 */const P0=new Map;function k0(t,e){const n=bc(t);D0(n,e),d3(n,e)}function D0(t,e){const n=P0.get(t);if(n)for(const s of n)s(e)}function d3(t,e){const n=f3();n&&n.postMessage({key:t,fid:e}),p3()}let yr=null;function f3(){return!yr&&"BroadcastChannel"in self&&(yr=new BroadcastChannel("[Firebase] FID Change"),yr.onmessage=t=>{D0(t.data.key,t.data.fid)}),yr}function p3(){P0.size===0&&yr&&(yr.close(),yr=null)}/**
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
 */const m3="firebase-installations-database",g3=1,Pr="firebase-installations-store";let pu=null;function Ud(){return pu||(pu=s_(m3,g3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}})),pu}async function Ol(t,e){const n=bc(t),r=(await Ud()).transaction(Pr,"readwrite"),i=r.objectStore(Pr),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&k0(t,e.fid),e}async function N0(t){const e=bc(t),s=(await Ud()).transaction(Pr,"readwrite");await s.objectStore(Pr).delete(e),await s.done}async function wc(t,e){const n=bc(t),r=(await Ud()).transaction(Pr,"readwrite"),i=r.objectStore(Pr),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await r.done,l&&(!o||o.fid!==l.fid)&&k0(t,l.fid),l}/**
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
 */async function jd(t){let e;const n=await wc(t.appConfig,s=>{const r=v3(s),i=y3(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===hh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v3(t){const e=t||{fid:u3(),registrationStatus:0};return x0(e)}function y3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Cr.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=_3(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b3(t)}:{installationEntry:e}}async function _3(t,e){try{const n=await a3(t,e);return Ol(t.appConfig,n)}catch(n){throw E0(n)&&n.customData.serverCode===409?await N0(t.appConfig):await Ol(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function b3(t){let e=await Dg(t.appConfig);for(;e.registrationStatus===1;)await C0(100),e=await Dg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await jd(t);return s||n}return e}function Dg(t){return wc(t,e=>{if(!e)throw Cr.create("installation-not-found");return x0(e)})}function x0(t){return w3(t)?{fid:t.fid,registrationStatus:0}:t}function w3(t){return t.registrationStatus===1&&t.registrationTime+_0<Date.now()}/**
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
 */async function E3({appConfig:t,heartbeatServiceProvider:e},n){const s=T3(t,n),r=r3(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:b0,appId:t.appId}},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await R0(()=>fetch(s,l));if(c.ok){const u=await c.json();return I0(u)}else throw await A0("Generate Auth Token",c)}function T3(t,{fid:e}){return`${T0(t)}/${e}/authTokens:generate`}/**
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
 */async function Bd(t,e=!1){let n;const s=await wc(t.appConfig,i=>{if(!O0(i))throw Cr.create("not-registered");const o=i.authToken;if(!e&&S3(o))return i;if(o.requestStatus===1)return n=I3(t,e),i;{if(!navigator.onLine)throw Cr.create("app-offline");const l=C3(i);return n=A3(t,l),l}});return n?await n:s.authToken}async function I3(t,e){let n=await Ng(t.appConfig);for(;n.authToken.requestStatus===1;)await C0(100),n=await Ng(t.appConfig);const s=n.authToken;return s.requestStatus===0?Bd(t,e):s}function Ng(t){return wc(t,e=>{if(!O0(e))throw Cr.create("not-registered");const n=e.authToken;return P3(n)?{...e,authToken:{requestStatus:0}}:e})}async function A3(t,e){try{const n=await E3(t,e),s={...e,authToken:n};return await Ol(t.appConfig,s),n}catch(n){if(E0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await N0(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Ol(t.appConfig,s)}throw n}}function O0(t){return t!==void 0&&t.registrationStatus===2}function S3(t){return t.requestStatus===2&&!R3(t)}function R3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+e3}function C3(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function P3(t){return t.requestStatus===1&&t.requestTime+_0<Date.now()}/**
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
 */async function k3(t){const e=t,{installationEntry:n,registrationPromise:s}=await jd(e);return s?s.catch(console.error):Bd(e).catch(console.error),n.fid}/**
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
 */async function D3(t,e=!1){const n=t;return await N3(n),(await Bd(n,e)).token}async function N3(t){const{registrationPromise:e}=await jd(t);e&&await e}/**
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
 */function x3(t){if(!t||!t.options)throw mu("App Configuration");if(!t.name)throw mu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw mu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function mu(t){return Cr.create("missing-app-config-values",{valueName:t})}/**
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
 */const V0="installations",O3="installations-internal",V3=t=>{const e=t.getProvider("app").getImmediate(),n=x3(e),s=_s(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},M3=t=>{const e=t.getProvider("app").getImmediate(),n=_s(e,V0).getImmediate();return{getId:()=>k3(n),getToken:r=>D3(n,r)}};function L3(){un(new Xt(V0,V3,"PUBLIC")),un(new Xt(O3,M3,"PRIVATE"))}L3();Nt(y0,Fd);Nt(y0,Fd,"esm2020");/**
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
 */const Vl="analytics",$3="firebase_id",F3="origin",U3=60*1e3,j3="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zd="https://www.googletagmanager.com/gtag/js";/**
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
 */const qt=new rc("@firebase/analytics");/**
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
 */const B3={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new Or("analytics","Analytics",B3);/**
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
 */function z3(t){if(!t.startsWith(zd)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return qt.warn(e.message),""}return t}function M0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function q3(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function H3(t,e){const n=q3("firebase-js-sdk-policy",{createScriptURL:z3}),s=document.createElement("script"),r=`${zd}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function W3(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function G3(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await M0(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(l){qt.error(l)}t("config",r,i)}async function K3(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const l=await M0(n);for(const c of o){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){qt.error(i)}}function Y3(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[l,c]=o;await K3(t,e,n,l,c)}else if(i==="config"){const[l,c]=o;await G3(t,e,n,s,l,c)}else if(i==="consent"){const[l,c]=o;t("consent",l,c)}else if(i==="get"){const[l,c,u]=o;t("get",l,c,u)}else if(i==="set"){const[l]=o;t("set",l)}else t(i,...o)}catch(l){qt.error(l)}}return r}function Q3(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Y3(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function X3(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zd)&&n.src.includes(t))return n;return null}/**
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
 */const J3=30,Z3=1e3;class e6{constructor(e={},n=Z3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const L0=new e6;function t6(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function n6(t){const{appId:e,apiKey:n}=t,s={method:"GET",headers:t6(n)},r=j3.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let o="";try{const l=await i.json();l.error?.message&&(o=l.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function s6(t,e=L0,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Qt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new o6;return setTimeout(async()=>{l.abort()},U3),$0({appId:s,apiKey:r,measurementId:i},o,l,e)}async function $0(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=L0){const{appId:i,measurementId:o}=t;try{await r6(s,e)}catch(l){if(o)return qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:i,measurementId:o};throw l}try{const l=await n6(t);return r.deleteThrottleMetadata(i),l}catch(l){const c=l;if(!i6(c)){if(r.deleteThrottleMetadata(i),o)return qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw l}const u=Number(c?.customData?.httpStatus)===503?em(n,r.intervalMillis,J3):em(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(i,d),qt.debug(`Calling attemptFetch again in ${u} millis`),$0(t,d,s,r)}}function r6(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function i6(t){if(!(t instanceof dn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class o6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function a6(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o={...s,send_to:i};t("event",n,o)}}/**
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
 */async function l6(){if(Zy())try{await e_()}catch(t){return qt.warn(Qt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return qt.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function c6(t,e,n,s,r,i,o){const l=s6(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>qt.error(g)),e.push(l);const c=l6().then(g=>{if(g)return s.getId()}),[u,d]=await Promise.all([l,c]);X3(i)||H3(i,u.measurementId),r("js",new Date);const p=o?.config??{};return p[F3]="firebase",p.update=!0,d!=null&&(p[$3]=d),r("config",u.measurementId,p),u.measurementId}/**
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
 */class u6{constructor(e){this.app=e}_delete(){return delete Eo[this.app.options.appId],Promise.resolve()}}let Eo={},xg=[];const Og={};let gu="dataLayer",h6="gtag",Vg,F0,Mg=!1;function d6(){const t=[];if(Jy()&&t.push("This is a browser extension environment."),o2()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});qt.warn(n.message)}}function f6(t,e,n){d6();const s=t.options.appId;if(!s)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Eo[s]!=null)throw Qt.create("already-exists",{id:s});if(!Mg){W3(gu);const{wrappedGtag:i,gtagCore:o}=Q3(Eo,xg,Og,gu,h6);F0=i,Vg=o,Mg=!0}return Eo[s]=c6(t,xg,Og,e,Vg,gu,n),new u6(t)}function p6(t=Xo()){t=ct(t);const e=_s(t,Vl);return e.isInitialized()?e.getImmediate():m6(t)}function m6(t,e={}){const n=_s(t,Vl);if(n.isInitialized()){const r=n.getImmediate();if(Gs(e,n.getOptions()))return r;throw Qt.create("already-initialized")}return n.initialize({options:e})}function g6(t,e,n,s){t=ct(t),a6(F0,Eo[t.app.options.appId],e,n,s).catch(r=>qt.error(r))}const Lg="@firebase/analytics",$g="0.10.18";function v6(){un(new Xt(Vl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return f6(s,r,n)},"PUBLIC")),un(new Xt("analytics-internal",t,"PRIVATE")),Nt(Lg,$g),Nt(Lg,$g,"esm2020");function t(e){try{const n=e.getProvider(Vl).getImmediate();return{logEvent:(s,r,i)=>g6(n,s,r,i)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}v6();const y6={apiKey:"AIzaSyCfS9Kt8O3hAqMPRuCN3v90TjFtQ9A5D2k",authDomain:"ddex-distro.firebaseapp.com",projectId:"ddex-distro",storageBucket:"ddex-distro.firebasestorage.app",messagingSenderId:"297752105707",appId:"1:297752105707:web:6e4a1298b3b60d56f624ae"},aa=r_(y6),Er=HR(aa),U0=Q4(aa);Ek(aa);Yk(aa);p6(aa);const Wi=Te(null),Gi=Te(null),Fg=Te(!0);let Ug=null;function ui(){Ug||(Ug=OS(Er,async n=>{if(n){Wi.value=n;try{const s=await uk(r0(U0,"users",n.uid));s.exists()?Gi.value={id:s.id,...s.data()}:Gi.value={id:n.uid,email:n.email,displayName:n.displayName,photoURL:n.photoURL,organizationName:n.displayName}}catch(s){console.error("Error fetching user profile:",s)}}else Wi.value=null,Gi.value=null;Fg.value=!1}));const t=Pe(()=>!!Wi.value),e=async()=>{try{await VS(Er),Wi.value=null,Gi.value=null}catch(n){throw console.error("Logout error:",n),n}};return{user:Pe(()=>Wi.value),userProfile:Pe(()=>Gi.value),isAuthenticated:t,isLoading:Pe(()=>Fg.value),logout:e}}const An=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},_6={class:"navbar"},b6={class:"container"},w6={class:"navbar-content"},E6={class:"logo"},T6={key:0,class:"navbar-nav desktop-only"},I6={class:"navbar-actions desktop-only"},A6={key:1,class:"user-menu"},S6={key:0,class:"mobile-menu mobile-only"},R6={class:"container"},C6={key:0,class:"mobile-nav"},P6={class:"mobile-actions"},k6={__name:"NavBar",props:{currentTheme:{type:String,default:"light"}},emits:["toggle-theme"],setup(t,{emit:e}){const n=sr(),s=BI(),{isAuthenticated:r,userProfile:i,logout:o}=ui(),l=Te(!1),c=Pe(()=>r.value?[{name:"Dashboard",path:"/dashboard",icon:"chart-bar"},{name:"Catalog",path:"/catalog",icon:"music"},{name:"New Release",path:"/releases/new",icon:"plus"},{name:"Deliveries",path:"/deliveries",icon:"truck"},{name:"Analytics",path:"/analytics",icon:"chart-line"},{name:"Settings",path:"/settings",icon:"cog"}]:[]),u=Pe(()=>i.value&&(i.value.displayName||i.value.organizationName||"").split(" ").map(_=>_[0]).join("").toUpperCase().slice(0,2)||"U"),d=()=>{n.push("/login")},p=()=>{n.push("/signup")},g=async()=>{try{await o(),n.push("/"),l.value=!1}catch(A){console.error("Logout error:",A)}},v=()=>{l.value=!l.value},D=A=>A==="/catalog"&&s.path.startsWith("/catalog")||A==="/releases/new"&&s.path.startsWith("/releases")||A==="/deliveries"&&s.path.startsWith("/deliveries")?!0:s.path===A;return(A,_)=>{const C=cn("font-awesome-icon"),R=cn("router-link");return W(),Q("nav",_6,[h("div",b6,[h("div",w6,[q(R,{to:"/",class:"navbar-brand"},{default:xn(()=>[h("div",E6,[q(C,{icon:"truck"})]),_[3]||(_[3]=h("span",{class:"brand-text"},"DDEX Distro",-1))]),_:1,__:[3]}),c.value.length>0?(W(),Q("div",T6,[(W(!0),Q(Ve,null,ht(c.value,O=>(W(),ko(R,{key:O.path,to:O.path,class:Ut(["nav-link",{active:D(O.path)}])},{default:xn(()=>[q(C,{icon:O.icon,class:"nav-icon"},null,8,["icon"]),ye(" "+G(O.name),1)]),_:2},1032,["to","class"]))),128))])):Ke("",!0),h("div",I6,[h("button",{onClick:_[0]||(_[0]=O=>A.$emit("toggle-theme")),class:"btn-icon","aria-label":"Toggle theme"},[q(C,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"])]),os(r)?(W(),Q("div",A6,[h("button",{class:"user-avatar",onClick:g,title:"Sign out"},[h("span",null,G(u.value),1)])])):(W(),Q(Ve,{key:0},[h("button",{onClick:d,class:"btn btn-secondary btn-sm"}," Sign In "),h("button",{onClick:p,class:"btn btn-primary btn-sm"}," Get Started ")],64))]),h("button",{onClick:v,class:"mobile-menu-btn mobile-only","aria-label":"Toggle menu"},[q(C,{icon:l.value?"times":"bars"},null,8,["icon"])])])]),q(Hh,{name:"slide"},{default:xn(()=>[l.value?(W(),Q("div",S6,[h("div",R6,[c.value.length>0?(W(),Q("div",C6,[(W(!0),Q(Ve,null,ht(c.value,O=>(W(),ko(R,{key:O.path,to:O.path,class:"mobile-nav-link",onClick:_[1]||(_[1]=x=>l.value=!1)},{default:xn(()=>[q(C,{icon:O.icon,class:"nav-icon"},null,8,["icon"]),ye(" "+G(O.name),1)]),_:2},1032,["to"]))),128))])):Ke("",!0),h("div",P6,[h("button",{onClick:_[2]||(_[2]=O=>A.$emit("toggle-theme")),class:"btn btn-secondary btn-sm"},[q(C,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"]),ye(" "+G(t.currentTheme==="light"?"Dark Mode":"Light Mode"),1)]),os(r)?(W(),Q("button",{key:1,onClick:g,class:"btn btn-secondary"}," Sign Out ")):(W(),Q(Ve,{key:0},[h("button",{onClick:d,class:"btn btn-secondary"}," Sign In "),h("button",{onClick:p,class:"btn btn-primary"}," Get Started ")],64))])])])):Ke("",!0)]),_:1})])}}},D6=An(k6,[["__scopeId","data-v-c3749fd2"]]),N6={id:"app"},x6={class:"main-content"},O6={__name:"App",setup(t){const e=Te(localStorage.getItem("theme")||"light"),n=()=>{e.value=e.value==="light"?"dark":"light",localStorage.setItem("theme",e.value),document.documentElement.setAttribute("data-theme",e.value)};return xr(()=>{document.documentElement.setAttribute("data-theme",e.value)}),lo("theme",{current:e,toggle:n}),(s,r)=>(W(),Q("div",N6,[q(D6,{onToggleTheme:n,"current-theme":e.value},null,8,["current-theme"]),h("main",x6,[q(os(qy),null,{default:xn(({Component:i})=>[q(Hh,{name:"fade",mode:"out-in"},{default:xn(()=>[(W(),ko(_E(i)))]),_:2},1024)]),_:1})])]))}},V6=An(O6,[["__scopeId","data-v-43c5cdbc"]]),M6={class:"splash-page"},L6={class:"section bg-secondary"},$6={class:"container"},F6={class:"quick-start"},U6={class:"code-block"},j6={class:"section"},B6={class:"container"},z6={class:"grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3"},q6={class:"card-body"},H6={class:"feature-icon"},W6={class:"feature-title"},G6={class:"feature-description"},K6={class:"section bg-secondary"},Y6={class:"container"},Q6={class:"integration-section"},X6={class:"integration-content"},J6={class:"integration-features"},Z6={class:"integration-item"},eD={class:"integration-item"},tD={class:"integration-item"},nD={class:"integration-item"},sD={__name:"SplashPage",setup(t){const e=sr(),n=[{icon:"cube",title:"DDEX Native",description:"Built from the ground up for DDEX compliance with automatic ERN generation and validation."},{icon:"rocket",title:"Instant Deployment",description:"Deploy your own distribution platform in minutes with our npm package and CLI tools."},{icon:"bullseye",title:"Multi-Target Delivery",description:"Deliver to DSPs via FTP, SFTP, S3, or API with automated queue management."},{icon:"palette",title:"White-Label Ready",description:"Fully customizable branding, domain support, and multi-tenant architecture."},{icon:"check-circle",title:"Validation Built-In",description:"Every ERN is automatically validated through DDEX Workbench integration."},{icon:"chart-line",title:"Real-Time Analytics",description:"Track deliveries, monitor success rates, and analyze catalog performance."}],s=Te(`# Install and deploy in minutes
npx create-ddex-distro my-label-distro
cd my-label-distro
npm run deploy

# Your distribution platform is live!`),r=()=>{e.push("/signup")},i=()=>{window.open("https://demo.ddex-distro.org","_blank")},o=()=>{e.push("/docs")},l=()=>{navigator.clipboard.writeText(s.value)};return(c,u)=>{const d=cn("font-awesome-icon");return W(),Q("div",M6,[h("section",{class:"hero-section"},[h("div",{class:"container"},[h("div",{class:"hero-content"},[u[0]||(u[0]=as('<div class="hero-badge" data-v-94ac01a1><span class="badge-text" data-v-94ac01a1>Open Source</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>DDEX Compliant</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>npm Installable</span></div><h1 class="hero-title" data-v-94ac01a1> DDEX Delivery Platform <span class="hero-highlight" data-v-94ac01a1>in Minutes</span></h1><p class="hero-description" data-v-94ac01a1> DDEX Distro is an open-source, npm-installable music distribution platform that enables labels and artists to manage their catalog, generate DDEX-compliant ERN messages, and deliver releases to Digital Service Providers. </p>',3)),h("div",{class:"hero-actions"},[h("button",{onClick:r,class:"btn btn-primary btn-lg"}," Get Started Free "),h("button",{onClick:i,class:"btn btn-secondary btn-lg"}," View Demo ")]),u[1]||(u[1]=as('<div class="hero-stats" data-v-94ac01a1><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>500+</span><span class="stat-label" data-v-94ac01a1>Active Deployments</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>10k+</span><span class="stat-label" data-v-94ac01a1>Releases/Month</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>99.5%</span><span class="stat-label" data-v-94ac01a1>Delivery Success</span></div></div>',1))])])]),h("section",L6,[h("div",$6,[h("div",F6,[u[2]||(u[2]=h("div",{class:"quick-start-content"},[h("h2",{class:"section-title"},"Deploy in 3 Commands"),h("p",{class:"section-description"}," Get your distribution platform running faster than brewing coffee ")],-1)),h("div",U6,[h("pre",null,[h("code",null,G(s.value),1)]),h("button",{class:"copy-btn",onClick:l,title:"Copy to clipboard"},[q(d,{icon:"copy"})])])])])]),h("section",j6,[h("div",B6,[u[3]||(u[3]=h("div",{class:"text-center mb-xl"},[h("h2",{class:"section-title"},"Everything You Need to Distribute Music"),h("p",{class:"section-description"}," A complete distribution platform with enterprise features, available to everyone ")],-1)),h("div",z6,[(W(),Q(Ve,null,ht(n,p=>h("div",{key:p.title,class:"feature-card card card-hover"},[h("div",q6,[h("div",H6,[q(d,{icon:p.icon},null,8,["icon"])]),h("h3",W6,G(p.title),1),h("p",G6,G(p.description),1)])])),64))])])]),h("section",K6,[h("div",Y6,[h("div",Q6,[h("div",X6,[u[8]||(u[8]=h("h2",{class:"section-title"},"Part of the DDEX Ecosystem",-1)),u[9]||(u[9]=h("p",{class:"section-description"}," Seamlessly integrates with DDEX Workbench for validation and DDEX DSP for testing your deliveries ",-1)),h("div",J6,[h("div",Z6,[q(d,{icon:"check",class:"check-icon"}),u[4]||(u[4]=h("span",null,"Automatic ERN validation via Workbench API",-1))]),h("div",eD,[q(d,{icon:"check",class:"check-icon"}),u[5]||(u[5]=h("span",null,"Test deliveries with your own DDEX DSP instance",-1))]),h("div",tD,[q(d,{icon:"check",class:"check-icon"}),u[6]||(u[6]=h("span",null,"Single sign-on across all DDEX tools",-1))]),h("div",nD,[q(d,{icon:"check",class:"check-icon"}),u[7]||(u[7]=h("span",null,"Track releases from creation to consumption",-1))])])]),u[10]||(u[10]=as('<div class="integration-visual" data-v-94ac01a1><div class="ecosystem-diagram" data-v-94ac01a1><div class="ecosystem-node ecosystem-workbench" data-v-94ac01a1>DDEX Workbench</div><div class="ecosystem-node ecosystem-distro" data-v-94ac01a1>DDEX Distro</div><div class="ecosystem-node ecosystem-dsp" data-v-94ac01a1>DDEX DSP</div><svg class="ecosystem-connections" viewBox="0 0 300 200" data-v-94ac01a1><path d="M50 50 L150 100 L250 50" stroke="var(--color-primary)" stroke-width="2" fill="none" stroke-dasharray="5,5" data-v-94ac01a1></path></svg></div></div>',1))])])]),h("section",{class:"section"},[h("div",{class:"container"},[h("div",{class:"cta-section"},[u[11]||(u[11]=h("h2",{class:"cta-title"},"Ready to Start Distributing?",-1)),u[12]||(u[12]=h("p",{class:"cta-description"}," Join hundreds of labels and artists using DDEX Distro to deliver their music worldwide ",-1)),h("div",{class:"cta-actions"},[h("button",{onClick:r,class:"btn btn-primary btn-lg"}," Deploy Your Platform "),h("button",{onClick:o,class:"btn btn-secondary btn-lg"}," Read Documentation ")])])])])])}}},rD=An(sD,[["__scopeId","data-v-94ac01a1"]]),iD={class:"auth-page"},oD={class:"auth-container"},aD={class:"auth-card card"},lD={class:"card-body"},cD={class:"auth-header"},uD={class:"auth-logo"},hD={class:"form-group"},dD=["disabled"],fD={class:"form-group"},pD={class:"form-label"},mD=["disabled"],gD={key:0,class:"form-error"},vD={key:1,class:"form-success"},yD=["disabled"],_D=["disabled"],bD={class:"auth-footer"},wD={class:"modal-content card"},ED={class:"card-body"},TD={class:"form-group"},ID=["disabled"],AD={key:0,class:"form-error"},SD={key:1,class:"form-success"},RD={class:"modal-actions"},CD=["disabled"],PD=["disabled"],kD={__name:"Login",setup(t){const e=sr(),n=Te(""),s=Te(""),r=Te(""),i=Te(""),o=Te(!1),l=Te(!1),c=async()=>{r.value="",i.value="",o.value=!0;try{await PS(Er,n.value,s.value),e.push("/dashboard")}catch(p){switch(p.code){case"auth/invalid-email":r.value="Please enter a valid email address";break;case"auth/user-disabled":r.value="This account has been disabled. Please contact support.";break;case"auth/user-not-found":r.value="No account found with this email. Please sign up first.";break;case"auth/wrong-password":r.value="Incorrect password. Please try again.";break;case"auth/invalid-credential":r.value="Invalid email or password. Please try again.";break;case"auth/too-many-requests":r.value="Too many failed attempts. Please try again later.";break;case"auth/network-request-failed":r.value="Network error. Please check your connection and try again.";break;default:r.value="Failed to sign in. Please try again.",console.error("Login error:",p)}}finally{o.value=!1}},u=async()=>{r.value="",i.value="",o.value=!0;try{const p=new Nn;p.setCustomParameters({prompt:"select_account"}),await F_(Er,p),e.push("/dashboard")}catch(p){switch(p.code){case"auth/popup-closed-by-user":break;case"auth/popup-blocked":r.value="Popup was blocked. Please allow popups for this site.";break;case"auth/cancelled-popup-request":break;case"auth/network-request-failed":r.value="Network error. Please check your connection and try again.";break;case"auth/account-exists-with-different-credential":r.value="An account already exists with this email using a different sign-in method.";break;default:r.value="Failed to sign in with Google. Please try again.",console.error("Google login error:",p)}}finally{o.value=!1}},d=async()=>{if(r.value="",i.value="",!n.value){r.value="Please enter your email address first";return}o.value=!0;try{await RS(Er,n.value),i.value="Password reset email sent! Check your inbox.",l.value=!1}catch(p){switch(p.code){case"auth/invalid-email":r.value="Please enter a valid email address";break;case"auth/user-not-found":r.value="No account found with this email address";break;case"auth/too-many-requests":r.value="Too many requests. Please try again later.";break;default:r.value="Failed to send reset email. Please try again.",console.error("Password reset error:",p)}}finally{o.value=!1}};return(p,g)=>{const v=cn("font-awesome-icon"),D=cn("router-link");return W(),Q("div",iD,[h("div",oD,[h("div",aD,[h("div",lD,[h("div",cD,[h("div",uD,[q(v,{icon:"truck"})]),g[6]||(g[6]=h("h1",{class:"auth-title"},"Welcome Back",-1)),g[7]||(g[7]=h("p",{class:"auth-subtitle"},"Sign in to your DDEX Distro account",-1))]),h("form",{onSubmit:ho(c,["prevent"]),class:"auth-form"},[h("div",hD,[g[8]||(g[8]=h("label",{class:"form-label"},"Email Address",-1)),Ee(h("input",{"onUpdate:modelValue":g[0]||(g[0]=A=>n.value=A),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:o.value},null,8,dD),[[nt,n.value]])]),h("div",fD,[h("label",pD,[g[9]||(g[9]=ye(" Password ",-1)),h("a",{href:"#",onClick:g[1]||(g[1]=ho(A=>l.value=!0,["prevent"])),class:"form-label-link"}," Forgot password? ")]),Ee(h("input",{"onUpdate:modelValue":g[2]||(g[2]=A=>s.value=A),type:"password",class:"form-input",placeholder:"Enter your password",required:"",disabled:o.value},null,8,mD),[[nt,s.value]])]),r.value?(W(),Q("div",gD,[q(v,{icon:"times"}),ye(" "+G(r.value),1)])):Ke("",!0),i.value?(W(),Q("div",vD,[q(v,{icon:"check"}),ye(" "+G(i.value),1)])):Ke("",!0),h("button",{type:"submit",class:"btn btn-primary btn-block",disabled:o.value},G(o.value?"Signing in...":"Sign In"),9,yD),g[11]||(g[11]=h("div",{class:"auth-divider"},[h("span",null,"or")],-1)),h("button",{type:"button",onClick:u,class:"btn btn-secondary btn-block",disabled:o.value},[q(v,{icon:["fab","google"]}),g[10]||(g[10]=ye(" Continue with Google ",-1))],8,_D)],32),h("div",bD,[h("p",null,[g[13]||(g[13]=ye(" Don't have an account? ",-1)),q(D,{to:"/signup",class:"auth-link"},{default:xn(()=>g[12]||(g[12]=[ye(" Sign up for free ",-1)])),_:1,__:[12]})])])])]),q(Hh,{name:"modal"},{default:xn(()=>[l.value?(W(),Q("div",{key:0,class:"modal-overlay",onClick:g[5]||(g[5]=ho(A=>l.value=!1,["self"]))},[h("div",wD,[h("div",ED,[g[14]||(g[14]=h("h2",{class:"modal-title"},"Reset Password",-1)),g[15]||(g[15]=h("p",{class:"modal-description"}," Enter your email address and we'll send you a link to reset your password. ",-1)),h("div",TD,[Ee(h("input",{"onUpdate:modelValue":g[3]||(g[3]=A=>n.value=A),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:o.value},null,8,ID),[[nt,n.value]])]),r.value?(W(),Q("div",AD,[q(v,{icon:"times"}),ye(" "+G(r.value),1)])):Ke("",!0),i.value?(W(),Q("div",SD,[q(v,{icon:"check"}),ye(" "+G(i.value),1)])):Ke("",!0),h("div",RD,[h("button",{onClick:g[4]||(g[4]=A=>l.value=!1),class:"btn btn-secondary",disabled:o.value}," Cancel ",8,CD),h("button",{onClick:d,class:"btn btn-primary",disabled:o.value},G(o.value?"Sending...":"Send Reset Email"),9,PD)])])])])):Ke("",!0)]),_:1})])])}}},DD=An(kD,[["__scopeId","data-v-fd5bc850"]]),ND={class:"auth-page"},xD={class:"auth-container"},OD={class:"auth-card card"},VD={class:"card-body"},MD={class:"auth-header"},LD={class:"auth-logo"},$D={class:"form-group"},FD=["disabled"],UD={class:"form-group"},jD=["disabled"],BD={class:"form-group"},zD=["disabled"],qD={class:"form-group"},HD=["disabled"],WD={class:"form-group"},GD={class:"form-checkbox"},KD=["disabled"],YD={key:0,class:"form-error"},QD=["disabled"],XD=["disabled"],JD={class:"auth-footer"},ZD={__name:"Signup",setup(t){const e=sr(),n=Te({organizationName:"",email:"",password:"",confirmPassword:"",acceptTerms:!1}),s=Te(""),r=Te(!1),i=async(c,u={})=>{try{const d=r0(U0,"users",c.uid);await dk(d,{uid:c.uid,email:c.email,displayName:c.displayName||n.value.organizationName,organizationName:n.value.organizationName||c.displayName,photoURL:c.photoURL||null,role:"admin",plan:"free",createdAt:Tg(),updatedAt:Tg(),...u})}catch(d){throw console.error("Error creating user profile:",d),d}},o=async()=>{if(s.value="",n.value.password!==n.value.confirmPassword){s.value="Passwords do not match";return}if(n.value.password.length<8){s.value="Password must be at least 8 characters";return}if(!n.value.acceptTerms){s.value="Please accept the terms and conditions";return}r.value=!0;try{const c=await CS(Er,n.value.email,n.value.password);await DS(c.user,{displayName:n.value.organizationName}),await i(c.user),e.push("/dashboard")}catch(c){switch(c.code){case"auth/email-already-in-use":s.value="This email is already registered. Please sign in instead.";break;case"auth/invalid-email":s.value="Please enter a valid email address";break;case"auth/weak-password":s.value="Password is too weak. Please use at least 8 characters.";break;case"auth/network-request-failed":s.value="Network error. Please check your connection and try again.";break;default:s.value="Failed to create account. Please try again.",console.error("Signup error:",c)}}finally{r.value=!1}},l=async()=>{s.value="",r.value=!0;try{const c=new Nn;c.setCustomParameters({prompt:"select_account"});const u=await F_(Er,c);u._tokenResponse?.isNewUser&&await i(u.user,{organizationName:u.user.displayName}),e.push("/dashboard")}catch(c){switch(c.code){case"auth/popup-closed-by-user":break;case"auth/popup-blocked":s.value="Popup was blocked. Please allow popups for this site.";break;case"auth/cancelled-popup-request":break;case"auth/network-request-failed":s.value="Network error. Please check your connection and try again.";break;default:s.value="Failed to sign up with Google. Please try again.",console.error("Google signup error:",c)}}finally{r.value=!1}};return(c,u)=>{const d=cn("font-awesome-icon"),p=cn("router-link");return W(),Q("div",ND,[h("div",xD,[h("div",OD,[h("div",VD,[h("div",MD,[h("div",LD,[q(d,{icon:"truck"})]),u[5]||(u[5]=h("h1",{class:"auth-title"},"Get Started",-1)),u[6]||(u[6]=h("p",{class:"auth-subtitle"},"Create your DDEX Distro account",-1))]),h("form",{onSubmit:ho(o,["prevent"]),class:"auth-form"},[h("div",$D,[u[7]||(u[7]=h("label",{class:"form-label"},"Organization Name",-1)),Ee(h("input",{"onUpdate:modelValue":u[0]||(u[0]=g=>n.value.organizationName=g),type:"text",class:"form-input",placeholder:"My Record Label",required:"",disabled:r.value},null,8,FD),[[nt,n.value.organizationName]])]),h("div",UD,[u[8]||(u[8]=h("label",{class:"form-label"},"Email Address",-1)),Ee(h("input",{"onUpdate:modelValue":u[1]||(u[1]=g=>n.value.email=g),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:r.value},null,8,jD),[[nt,n.value.email]])]),h("div",BD,[u[9]||(u[9]=h("label",{class:"form-label"},"Password",-1)),Ee(h("input",{"onUpdate:modelValue":u[2]||(u[2]=g=>n.value.password=g),type:"password",class:"form-input",placeholder:"Create a strong password",required:"",minlength:"8",disabled:r.value},null,8,zD),[[nt,n.value.password]]),u[10]||(u[10]=h("div",{class:"form-hint"},"Minimum 8 characters",-1))]),h("div",qD,[u[11]||(u[11]=h("label",{class:"form-label"},"Confirm Password",-1)),Ee(h("input",{"onUpdate:modelValue":u[3]||(u[3]=g=>n.value.confirmPassword=g),type:"password",class:"form-input",placeholder:"Confirm your password",required:"",disabled:r.value},null,8,HD),[[nt,n.value.confirmPassword]])]),h("div",WD,[h("label",GD,[Ee(h("input",{"onUpdate:modelValue":u[4]||(u[4]=g=>n.value.acceptTerms=g),type:"checkbox",disabled:r.value},null,8,KD),[[Kr,n.value.acceptTerms]]),u[12]||(u[12]=h("span",null,[ye(" I agree to the "),h("a",{href:"/terms",target:"_blank",class:"auth-link"},"Terms of Service"),ye(" and "),h("a",{href:"/privacy",target:"_blank",class:"auth-link"},"Privacy Policy")],-1))])]),s.value?(W(),Q("div",YD,[q(d,{icon:"times"}),ye(" "+G(s.value),1)])):Ke("",!0),h("button",{type:"submit",class:"btn btn-primary btn-block",disabled:r.value},G(r.value?"Creating account...":"Create Account"),9,QD),u[14]||(u[14]=h("div",{class:"auth-divider"},[h("span",null,"or")],-1)),h("button",{type:"button",onClick:l,class:"btn btn-secondary btn-block",disabled:r.value},[q(d,{icon:["fab","google"]}),u[13]||(u[13]=ye(" Continue with Google ",-1))],8,XD)],32),h("div",JD,[h("p",null,[u[16]||(u[16]=ye(" Already have an account? ",-1)),q(p,{to:"/login",class:"auth-link"},{default:xn(()=>u[15]||(u[15]=[ye(" Sign in ",-1)])),_:1,__:[15]})])])])])])])}}},eN=An(ZD,[["__scopeId","data-v-efb48b07"]]),tN={class:"dashboard"},nN={class:"container"},sN={class:"dashboard-header"},rN={class:"dashboard-title"},iN={class:"header-actions"},oN={key:0,class:"loading-container"},aN={class:"stats-grid"},lN={class:"stat-card card"},cN={class:"card-body"},uN={class:"stat-icon"},hN={class:"stat-content"},dN={class:"stat-value"},fN={class:"stat-card card"},pN={class:"card-body"},mN={class:"stat-icon warning"},gN={class:"stat-content"},vN={class:"stat-value"},yN={class:"stat-card card"},_N={class:"card-body"},bN={class:"stat-icon success"},wN={class:"stat-content"},EN={class:"stat-value"},TN={class:"stat-card card"},IN={class:"card-body"},AN={class:"stat-icon error"},SN={class:"stat-content"},RN={class:"stat-value"},CN={class:"content-grid"},PN={class:"activity-section"},kN={class:"card"},DN={class:"card-header"},NN={class:"card-body"},xN={key:0,class:"empty-state"},ON={key:1,class:"activity-list"},VN={class:"activity-content"},MN={class:"activity-title"},LN={class:"activity-description"},$N={class:"activity-time"},FN={class:"quick-actions"},UN={class:"card"},jN={class:"card-body"},BN={class:"action-grid"},zN={class:"card"},qN={class:"card-body"},HN={class:"checklist"},WN={class:"checklist-item completed"},GN={class:"checklist-item"},KN={class:"checklist-item"},YN={class:"checklist-item"},QN={__name:"Dashboard",setup(t){const e=sr(),{userProfile:n}=ui(),s=Te({totalReleases:0,pendingDeliveries:0,successfulDeliveries:0,failedDeliveries:0}),r=Te([]),i=Te(!0),o=Pe(()=>{const _=new Date().getHours();return _<12?"Good morning":_<18?"Good afternoon":"Good evening"}),l=Pe(()=>n.value?.organizationName||n.value?.displayName||"there"),c=async()=>{if(n.value)try{await new Promise(_=>setTimeout(_,500)),s.value={totalReleases:12,pendingDeliveries:3,successfulDeliveries:45,failedDeliveries:2},r.value=[{id:"1",type:"release_created",title:"New release created",description:"Summer Vibes EP",timestamp:new Date(Date.now()-7200*1e3),status:"success"},{id:"2",type:"delivery_completed",title:"Delivery completed",description:"Delivered to Spotify",timestamp:new Date(Date.now()-300*60*1e3),status:"success"},{id:"3",type:"delivery_failed",title:"Delivery failed",description:"Failed to deliver to Apple Music",timestamp:new Date(Date.now()-1440*60*1e3),status:"error"}]}catch(_){console.error("Error loading dashboard data:",_)}finally{i.value=!1}},u=_=>{const R=new Date-_,O=Math.floor(R/(1e3*60*60)),x=Math.floor(O/24);return O<1?"Just now":O<24?`${O} hour${O>1?"s":""} ago`:x<30?`${x} day${x>1?"s":""} ago`:_.toLocaleDateString()},d=_=>{switch(_){case"release_created":return"plus";case"delivery_completed":return"check";case"delivery_failed":return"times";default:return"music"}},p=_=>{switch(_){case"success":return"text-success";case"error":return"text-error";case"warning":return"text-warning";default:return"text-info"}},g=()=>{e.push("/releases/new")},v=()=>{e.push("/releases")},D=()=>{e.push("/deliveries")},A=()=>{e.push("/settings")};return xr(()=>{c()}),(_,C)=>{const R=cn("font-awesome-icon");return W(),Q("div",tN,[h("div",nN,[h("div",sN,[h("div",null,[h("h1",rN,G(o.value)+", "+G(l.value)+"!",1),C[0]||(C[0]=h("p",{class:"dashboard-subtitle"},"Here's what's happening with your music distribution",-1))]),h("div",iN,[h("button",{onClick:g,class:"btn btn-primary"},[q(R,{icon:"plus"}),C[1]||(C[1]=ye(" New Release ",-1))])])]),i.value?(W(),Q("div",oN,C[2]||(C[2]=[h("div",{class:"loading-spinner"},null,-1),h("p",null,"Loading your dashboard...",-1)]))):(W(),Q(Ve,{key:1},[h("div",aN,[h("div",lN,[h("div",cN,[h("div",uN,[q(R,{icon:"music"})]),h("div",hN,[h("h3",dN,G(s.value.totalReleases),1),C[3]||(C[3]=h("p",{class:"stat-label"},"Total Releases",-1))])])]),h("div",fN,[h("div",pN,[h("div",mN,[q(R,{icon:"truck"})]),h("div",gN,[h("h3",vN,G(s.value.pendingDeliveries),1),C[4]||(C[4]=h("p",{class:"stat-label"},"Pending Deliveries",-1))])])]),h("div",yN,[h("div",_N,[h("div",bN,[q(R,{icon:"check-circle"})]),h("div",wN,[h("h3",EN,G(s.value.successfulDeliveries),1),C[5]||(C[5]=h("p",{class:"stat-label"},"Successful Deliveries",-1))])])]),h("div",TN,[h("div",IN,[h("div",AN,[q(R,{icon:"times"})]),h("div",SN,[h("h3",RN,G(s.value.failedDeliveries),1),C[6]||(C[6]=h("p",{class:"stat-label"},"Failed Deliveries",-1))])])])]),h("div",CN,[h("div",PN,[h("div",kN,[h("div",DN,[C[7]||(C[7]=h("h2",{class:"section-title"},"Recent Activity",-1)),h("button",{onClick:c,class:"btn-icon",title:"Refresh"},[q(R,{icon:"sync"})])]),h("div",NN,[r.value.length===0?(W(),Q("div",xN,[q(R,{icon:"music",class:"empty-icon"}),C[8]||(C[8]=h("p",null,"No recent activity",-1)),h("button",{onClick:g,class:"btn btn-primary btn-sm"}," Create Your First Release ")])):(W(),Q("div",ON,[(W(!0),Q(Ve,null,ht(r.value,O=>(W(),Q("div",{key:O.id,class:"activity-item"},[h("div",{class:Ut(["activity-icon",p(O.status)])},[q(R,{icon:d(O.type)},null,8,["icon"])],2),h("div",VN,[h("h4",MN,G(O.title),1),h("p",LN,G(O.description),1),h("span",$N,G(u(O.timestamp)),1)])]))),128))]))])])]),h("div",FN,[h("div",UN,[C[13]||(C[13]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Quick Actions")],-1)),h("div",jN,[h("div",BN,[h("button",{onClick:g,class:"action-button"},[q(R,{icon:"plus",class:"action-icon"}),C[9]||(C[9]=h("span",null,"New Release",-1))]),h("button",{onClick:v,class:"action-button"},[q(R,{icon:"music",class:"action-icon"}),C[10]||(C[10]=h("span",null,"View Catalog",-1))]),h("button",{onClick:D,class:"action-button"},[q(R,{icon:"truck",class:"action-icon"}),C[11]||(C[11]=h("span",null,"Deliveries",-1))]),h("button",{onClick:A,class:"action-button"},[q(R,{icon:"cog",class:"action-icon"}),C[12]||(C[12]=h("span",null,"Settings",-1))])])])]),h("div",zN,[C[18]||(C[18]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Getting Started")],-1)),h("div",qN,[h("div",HN,[h("div",WN,[q(R,{icon:"check-circle",class:"check-icon"}),C[14]||(C[14]=h("span",null,"Create your account",-1))]),h("div",GN,[q(R,{icon:"circle",class:"check-icon"}),C[15]||(C[15]=h("span",null,"Configure delivery targets",-1))]),h("div",KN,[q(R,{icon:"circle",class:"check-icon"}),C[16]||(C[16]=h("span",null,"Upload your first release",-1))]),h("div",YN,[q(R,{icon:"circle",class:"check-icon"}),C[17]||(C[17]=h("span",null,"Send your first delivery",-1))])])])])])])],64))])])}}},XN=An(QN,[["__scopeId","data-v-86d193fe"]]),JN={class:"settings"},ZN={class:"container"},e5={class:"settings-section"},t5={class:"card"},n5={class:"card-body"},s5={class:"form-group"},r5={class:"form-group"},i5={class:"form-group"},o5={class:"settings-section"},a5={class:"card"},l5={class:"card-body"},c5={class:"form-group"},u5={class:"form-group"},h5={class:"form-checkbox"},d5={class:"form-group"},f5={class:"form-checkbox"},p5={class:"settings-section"},m5={class:"card"},g5={class:"card-body"},v5={class:"form-group"},y5={class:"form-checkbox"},_5={class:"form-group"},b5={class:"form-checkbox"},w5={class:"form-group"},E5={class:"form-checkbox"},T5={__name:"Settings",setup(t){const e=Te({profile:{name:"My Label",email:"admin@mylabel.com",timezone:"America/New_York"},platform:{defaultERNVersion:"4.3",autoValidate:!0,requireApproval:!1},notifications:{emailDeliverySuccess:!0,emailDeliveryFailed:!0,emailNewRelease:!1}}),n=s=>{console.log(`Saving ${s}:`,e.value[s])};return(s,r)=>(W(),Q("div",JN,[h("div",ZN,[r[26]||(r[26]=h("div",{class:"settings-header"},[h("h1",{class:"page-title"},"Settings"),h("p",{class:"page-subtitle"},"Manage your distribution platform configuration")],-1)),h("div",e5,[h("div",t5,[r[16]||(r[16]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Profile Settings")],-1)),h("div",n5,[h("div",s5,[r[12]||(r[12]=h("label",{class:"form-label"},"Organization Name",-1)),Ee(h("input",{"onUpdate:modelValue":r[0]||(r[0]=i=>e.value.profile.name=i),type:"text",class:"form-input",placeholder:"Enter organization name"},null,512),[[nt,e.value.profile.name]])]),h("div",r5,[r[13]||(r[13]=h("label",{class:"form-label"},"Email Address",-1)),Ee(h("input",{"onUpdate:modelValue":r[1]||(r[1]=i=>e.value.profile.email=i),type:"email",class:"form-input",placeholder:"admin@example.com"},null,512),[[nt,e.value.profile.email]])]),h("div",i5,[r[15]||(r[15]=h("label",{class:"form-label"},"Timezone",-1)),Ee(h("select",{"onUpdate:modelValue":r[2]||(r[2]=i=>e.value.profile.timezone=i),class:"form-select"},r[14]||(r[14]=[as('<option value="America/New_York" data-v-edd891c4>Eastern Time (ET)</option><option value="America/Chicago" data-v-edd891c4>Central Time (CT)</option><option value="America/Denver" data-v-edd891c4>Mountain Time (MT)</option><option value="America/Los_Angeles" data-v-edd891c4>Pacific Time (PT)</option><option value="Europe/London" data-v-edd891c4>London (GMT)</option><option value="Europe/Paris" data-v-edd891c4>Paris (CET)</option>',6)]),512),[[Dn,e.value.profile.timezone]])]),h("button",{onClick:r[3]||(r[3]=i=>n("profile")),class:"btn btn-primary"}," Save Profile ")])])]),h("div",o5,[h("div",a5,[r[21]||(r[21]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Platform Settings")],-1)),h("div",l5,[h("div",c5,[r[18]||(r[18]=h("label",{class:"form-label"},"Default ERN Version",-1)),Ee(h("select",{"onUpdate:modelValue":r[4]||(r[4]=i=>e.value.platform.defaultERNVersion=i),class:"form-select"},r[17]||(r[17]=[h("option",{value:"3.8.2"},"ERN 3.8.2",-1),h("option",{value:"4.2"},"ERN 4.2",-1),h("option",{value:"4.3"},"ERN 4.3",-1)]),512),[[Dn,e.value.platform.defaultERNVersion]])]),h("div",u5,[h("label",h5,[Ee(h("input",{"onUpdate:modelValue":r[5]||(r[5]=i=>e.value.platform.autoValidate=i),type:"checkbox"},null,512),[[Kr,e.value.platform.autoValidate]]),r[19]||(r[19]=h("span",null,"Automatically validate ERN messages",-1))])]),h("div",d5,[h("label",f5,[Ee(h("input",{"onUpdate:modelValue":r[6]||(r[6]=i=>e.value.platform.requireApproval=i),type:"checkbox"},null,512),[[Kr,e.value.platform.requireApproval]]),r[20]||(r[20]=h("span",null,"Require approval before delivery",-1))])]),h("button",{onClick:r[7]||(r[7]=i=>n("platform")),class:"btn btn-primary"}," Save Platform Settings ")])])]),h("div",p5,[h("div",m5,[r[25]||(r[25]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Notification Settings")],-1)),h("div",g5,[h("div",v5,[h("label",y5,[Ee(h("input",{"onUpdate:modelValue":r[8]||(r[8]=i=>e.value.notifications.emailDeliverySuccess=i),type:"checkbox"},null,512),[[Kr,e.value.notifications.emailDeliverySuccess]]),r[22]||(r[22]=h("span",null,"Email on successful delivery",-1))])]),h("div",_5,[h("label",b5,[Ee(h("input",{"onUpdate:modelValue":r[9]||(r[9]=i=>e.value.notifications.emailDeliveryFailed=i),type:"checkbox"},null,512),[[Kr,e.value.notifications.emailDeliveryFailed]]),r[23]||(r[23]=h("span",null,"Email on failed delivery",-1))])]),h("div",w5,[h("label",E5,[Ee(h("input",{"onUpdate:modelValue":r[10]||(r[10]=i=>e.value.notifications.emailNewRelease=i),type:"checkbox"},null,512),[[Kr,e.value.notifications.emailNewRelease]]),r[24]||(r[24]=h("span",null,"Email on new release creation",-1))])]),h("button",{onClick:r[11]||(r[11]=i=>n("notifications")),class:"btn btn-primary"}," Save Notifications ")])])])])]))}},I5=An(T5,[["__scopeId","data-v-edd891c4"]]),A5={class:"catalog"},S5={class:"container"},R5={class:"page-header"},C5={class:"filters-bar card"},P5={class:"card-body"},k5={class:"filters-content"},D5={class:"search-box"},N5={class:"filter-tabs"},x5=["onClick"],O5={class:"filter-count"},V5={key:0,class:"loading-container"},M5={key:1,class:"empty-state card"},L5={class:"card-body"},$5={key:2,class:"empty-state card"},F5={class:"card-body"},U5={key:3,class:"releases-grid"},j5=["onClick"],B5={class:"release-cover"},z5={key:0,class:"cover-placeholder"},q5=["src","alt"],H5={class:"release-type"},W5={class:"release-content"},G5={class:"release-info"},K5={class:"release-title"},Y5={class:"release-artist"},Q5={class:"release-meta"},X5={class:"release-date"},J5={class:"release-tracks"},Z5={class:"release-footer"},ex=["onClick"],tx=["onClick"],nx=["onClick"],sx={__name:"Catalog",setup(t){const e=sr();ui();const n=Te([]),s=Te(""),r=Te("all"),i=Te("recent"),o=Te(!0),l=[{id:"1",title:"Summer Vibes EP",artist:"The Sunset Band",type:"EP",status:"delivered",releaseDate:new Date("2024-06-15"),trackCount:4,territories:["Worldwide"],coverUrl:null},{id:"2",title:"Midnight Dreams",artist:"Luna Nova",type:"Album",status:"ready",releaseDate:new Date("2024-07-01"),trackCount:12,territories:["US","CA","UK"],coverUrl:null},{id:"3",title:"Electric Pulse",artist:"Digital Waves",type:"Single",status:"draft",releaseDate:new Date("2024-08-01"),trackCount:1,territories:["Worldwide"],coverUrl:null}],c=Pe(()=>{let O=[...n.value];if(s.value){const x=s.value.toLowerCase();O=O.filter($=>$.title.toLowerCase().includes(x)||$.artist.toLowerCase().includes(x))}return r.value!=="all"&&(O=O.filter(x=>x.status===r.value)),O.sort((x,$)=>{switch(i.value){case"recent":return $.releaseDate-x.releaseDate;case"oldest":return x.releaseDate-$.releaseDate;case"title":return x.title.localeCompare($.title);case"artist":return x.artist.localeCompare($.artist);default:return 0}}),O}),u=Pe(()=>{const O={all:n.value.length,draft:0,ready:0,delivered:0,archived:0};return n.value.forEach(x=>{O[x.status]!==void 0&&O[x.status]++}),O}),d=async()=>{o.value=!0;try{await new Promise(O=>setTimeout(O,500)),n.value=l}catch(O){console.error("Error loading releases:",O)}finally{o.value=!1}},p=()=>{e.push("/releases/new")},g=O=>{e.push(`/releases/${O.id}`)},v=O=>{e.push(`/releases/${O.id}/edit`)},D=O=>{console.log("Duplicate release:",O.title)},A=O=>{console.log("Archive release:",O.title)},_=O=>{switch(O){case"draft":return"status-draft";case"ready":return"status-ready";case"delivered":return"status-delivered";case"archived":return"status-archived";default:return""}},C=O=>{switch(O){case"draft":return"edit";case"ready":return"check";case"delivered":return"truck";case"archived":return"archive";default:return"music"}},R=O=>O.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return xr(()=>{d()}),(O,x)=>{const $=cn("font-awesome-icon");return W(),Q("div",A5,[h("div",S5,[h("div",R5,[x[4]||(x[4]=h("div",null,[h("h1",{class:"page-title"},"Release Catalog"),h("p",{class:"page-subtitle"},"Manage your music releases and distributions")],-1)),h("button",{onClick:p,class:"btn btn-primary"},[q($,{icon:"plus"}),x[3]||(x[3]=ye(" New Release ",-1))])]),h("div",C5,[h("div",P5,[h("div",k5,[h("div",D5,[q($,{icon:"search",class:"search-icon"}),Ee(h("input",{"onUpdate:modelValue":x[0]||(x[0]=K=>s.value=K),type:"text",class:"search-input",placeholder:"Search releases..."},null,512),[[nt,s.value]])]),h("div",N5,[(W(!0),Q(Ve,null,ht(u.value,(K,b)=>(W(),Q("button",{key:b,onClick:w=>r.value=b,class:Ut(["filter-tab",{active:r.value===b}])},[ye(G(b.charAt(0).toUpperCase()+b.slice(1))+" ",1),h("span",O5,G(K),1)],10,x5))),128))]),Ee(h("select",{"onUpdate:modelValue":x[1]||(x[1]=K=>i.value=K),class:"form-select sort-select"},x[5]||(x[5]=[h("option",{value:"recent"},"Most Recent",-1),h("option",{value:"oldest"},"Oldest First",-1),h("option",{value:"title"},"Title A-Z",-1),h("option",{value:"artist"},"Artist A-Z",-1)]),512),[[Dn,i.value]])])])]),o.value?(W(),Q("div",V5,x[6]||(x[6]=[h("div",{class:"loading-spinner"},null,-1),h("p",null,"Loading your catalog...",-1)]))):n.value.length===0?(W(),Q("div",M5,[h("div",L5,[q($,{icon:"music",class:"empty-icon"}),x[8]||(x[8]=h("h2",{class:"empty-title"},"No releases yet",-1)),x[9]||(x[9]=h("p",{class:"empty-description"}," Create your first release to start distributing your music ",-1)),h("button",{onClick:p,class:"btn btn-primary"},[q($,{icon:"plus"}),x[7]||(x[7]=ye(" Create Your First Release ",-1))])])])):c.value.length===0?(W(),Q("div",$5,[h("div",F5,[q($,{icon:"search",class:"empty-icon"}),x[10]||(x[10]=h("h2",{class:"empty-title"},"No releases found",-1)),x[11]||(x[11]=h("p",{class:"empty-description"}," Try adjusting your search or filters ",-1))])])):(W(),Q("div",U5,[(W(!0),Q(Ve,null,ht(c.value,K=>(W(),Q("div",{key:K.id,class:"release-card card card-hover",onClick:b=>g(K)},[h("div",B5,[K.coverUrl?(W(),Q("img",{key:1,src:K.coverUrl,alt:K.title},null,8,q5)):(W(),Q("div",z5,[q($,{icon:"music"})])),h("div",H5,G(K.type),1)]),h("div",W5,[h("div",G5,[h("h3",K5,G(K.title),1),h("p",Y5,G(K.artist),1),h("div",Q5,[h("span",X5,[q($,{icon:"calendar"}),ye(" "+G(R(K.releaseDate)),1)]),h("span",J5,[q($,{icon:"music"}),ye(" "+G(K.trackCount)+" "+G(K.trackCount===1?"track":"tracks"),1)])])]),h("div",Z5,[h("span",{class:Ut(["release-status",_(K.status)])},[q($,{icon:C(K.status)},null,8,["icon"]),ye(" "+G(K.status),1)],2),h("div",{class:"release-actions",onClick:x[2]||(x[2]=ho(()=>{},["stop"]))},[h("button",{onClick:b=>v(K),class:"btn-icon",title:"Edit"},[q($,{icon:"edit"})],8,ex),h("button",{onClick:b=>D(K),class:"btn-icon",title:"Duplicate"},[q($,{icon:"copy"})],8,tx),h("button",{onClick:b=>A(K),class:"btn-icon",title:"Archive"},[q($,{icon:"archive"})],8,nx)])])])],8,j5))),128))]))])])}}},rx=An(sx,[["__scopeId","data-v-25a9d462"]]),ix={class:"new-release"},ox={class:"container"},ax={class:"wizard-header"},lx={class:"wizard-actions"},cx={class:"wizard-progress"},ux={class:"progress-bar"},hx={class:"progress-steps"},dx=["onClick"],fx={class:"step-number"},px={key:1},mx={class:"step-title"},gx={class:"wizard-content card"},vx={class:"card-header"},yx={class:"step-heading"},_x={class:"card-body"},bx={key:0,class:"wizard-step"},wx={class:"form-grid"},Ex={class:"form-group"},Tx={class:"form-group"},Ix={class:"form-group"},Ax={class:"form-group"},Sx={class:"form-group"},Rx={class:"form-group"},Cx={class:"form-group"},Px={class:"form-group"},kx={key:1,class:"wizard-step"},Dx={class:"tracks-header"},Nx={key:0,class:"empty-tracks"},xx={key:1,class:"tracks-list"},Ox={class:"track-number"},Vx={class:"track-info"},Mx=["onUpdate:modelValue"],Lx=["onUpdate:modelValue"],$x={class:"btn-icon"},Fx={key:2,class:"wizard-step"},Ux={class:"asset-section"},jx={class:"upload-area"},Bx={class:"asset-section"},zx={class:"upload-area"},qx={key:3,class:"wizard-step"},Hx={class:"form-grid"},Wx={class:"form-group"},Gx={class:"form-group"},Kx={class:"form-group"},Yx={class:"form-group span-2"},Qx={key:4,class:"wizard-step"},Xx={class:"territory-options"},Jx={class:"radio-option"},Zx={class:"radio-option"},eO={key:0,class:"territory-selector"},tO={key:5,class:"wizard-step"},nO={class:"review-section"},sO={class:"summary-grid"},rO={class:"summary-item"},iO={class:"summary-value"},oO={class:"summary-item"},aO={class:"summary-value"},lO={class:"summary-item"},cO={class:"summary-value"},uO={class:"summary-item"},hO={class:"summary-value"},dO={class:"ern-section"},fO={class:"form-grid"},pO={class:"form-group"},mO={class:"form-group"},gO={key:0,class:"validation-success"},vO={class:"card-footer wizard-footer"},yO=["disabled"],_O=["disabled"],bO=["disabled"],$a=6,wO={__name:"NewRelease",setup(t){const e=sr(),n=Te(1),s=Te({basic:{title:"",displayArtist:"",type:"Album",label:"",catalogNumber:"",barcode:"",releaseDate:"",originalReleaseDate:""},tracks:[],assets:{coverImage:null,additionalImages:[]},metadata:{genre:"",subgenre:"",language:"en",copyright:"",copyrightYear:new Date().getFullYear(),productionYear:new Date().getFullYear()},territories:{mode:"worldwide",included:[],excluded:[]},preview:{ernVersion:"4.3",profile:"AudioAlbum",validated:!1}}),r=["Basic Information","Track Management","Asset Upload","Metadata","Territories & Rights","Review & Generate"],i=Pe(()=>r[n.value-1]),o=Pe(()=>{switch(n.value){case 1:return s.value.basic.title&&s.value.basic.displayArtist;case 2:return s.value.tracks.length>0;case 3:return s.value.assets.coverImage!==null;case 4:return s.value.metadata.genre&&s.value.metadata.copyright;case 5:return!0;case 6:return s.value.preview.validated;default:return!1}}),l=()=>{n.value<$a&&n.value++},c=()=>{n.value>1&&n.value--},u=A=>{n.value=A},d=()=>{console.log("Saving as draft...",s.value),e.push("/catalog")},p=()=>{console.log("Generating ERN...",s.value),e.push("/catalog")},g=()=>{confirm("Are you sure you want to cancel? All unsaved changes will be lost.")&&e.push("/catalog")},v=()=>{s.value.tracks.push({id:Date.now(),title:`Track ${s.value.tracks.length+1}`,artist:s.value.basic.displayArtist,duration:180,isrc:""})},D=()=>{setTimeout(()=>{s.value.preview.validated=!0},1e3)};return(A,_)=>{const C=cn("font-awesome-icon");return W(),Q("div",ix,[h("div",ox,[h("div",ax,[_[17]||(_[17]=h("h1",{class:"page-title"},"Create New Release",-1)),h("div",lx,[h("button",{onClick:d,class:"btn btn-secondary"},[q(C,{icon:"save"}),_[16]||(_[16]=ye(" Save as Draft ",-1))]),h("button",{onClick:g,class:"btn btn-secondary"}," Cancel ")])]),h("div",cx,[h("div",ux,[h("div",{class:"progress-fill",style:ss({width:`${n.value/$a*100}%`})},null,4)]),h("div",hx,[(W(),Q(Ve,null,ht($a,R=>h("div",{key:R,class:Ut(["progress-step",{active:R===n.value,completed:R<n.value}]),onClick:O=>u(R)},[h("div",fx,[R<n.value?(W(),ko(C,{key:0,icon:"check"})):(W(),Q("span",px,G(R),1))]),h("span",mx,G(r[R-1]),1)],10,dx)),64))])]),h("div",gx,[h("div",vx,[h("h2",yx,"Step "+G(n.value)+": "+G(i.value),1)]),h("div",_x,[n.value===1?(W(),Q("div",bx,[h("div",wx,[h("div",Ex,[_[18]||(_[18]=h("label",{class:"form-label required"},"Release Title",-1)),Ee(h("input",{"onUpdate:modelValue":_[0]||(_[0]=R=>s.value.basic.title=R),type:"text",class:"form-input",placeholder:"Enter release title"},null,512),[[nt,s.value.basic.title]])]),h("div",Tx,[_[19]||(_[19]=h("label",{class:"form-label required"},"Display Artist",-1)),Ee(h("input",{"onUpdate:modelValue":_[1]||(_[1]=R=>s.value.basic.displayArtist=R),type:"text",class:"form-input",placeholder:"Enter artist name"},null,512),[[nt,s.value.basic.displayArtist]])]),h("div",Ix,[_[21]||(_[21]=h("label",{class:"form-label required"},"Release Type",-1)),Ee(h("select",{"onUpdate:modelValue":_[2]||(_[2]=R=>s.value.basic.type=R),class:"form-select"},_[20]||(_[20]=[h("option",{value:"Single"},"Single",-1),h("option",{value:"EP"},"EP",-1),h("option",{value:"Album"},"Album",-1),h("option",{value:"Compilation"},"Compilation",-1)]),512),[[Dn,s.value.basic.type]])]),h("div",Ax,[_[22]||(_[22]=h("label",{class:"form-label"},"Label",-1)),Ee(h("input",{"onUpdate:modelValue":_[3]||(_[3]=R=>s.value.basic.label=R),type:"text",class:"form-input",placeholder:"Enter label name"},null,512),[[nt,s.value.basic.label]])]),h("div",Sx,[_[23]||(_[23]=h("label",{class:"form-label"},"Catalog Number",-1)),Ee(h("input",{"onUpdate:modelValue":_[4]||(_[4]=R=>s.value.basic.catalogNumber=R),type:"text",class:"form-input",placeholder:"e.g., CAT001"},null,512),[[nt,s.value.basic.catalogNumber]])]),h("div",Rx,[_[24]||(_[24]=h("label",{class:"form-label"},"Barcode (UPC/EAN)",-1)),Ee(h("input",{"onUpdate:modelValue":_[5]||(_[5]=R=>s.value.basic.barcode=R),type:"text",class:"form-input",placeholder:"Enter barcode"},null,512),[[nt,s.value.basic.barcode]])]),h("div",Cx,[_[25]||(_[25]=h("label",{class:"form-label required"},"Release Date",-1)),Ee(h("input",{"onUpdate:modelValue":_[6]||(_[6]=R=>s.value.basic.releaseDate=R),type:"date",class:"form-input"},null,512),[[nt,s.value.basic.releaseDate]])]),h("div",Px,[_[26]||(_[26]=h("label",{class:"form-label"},"Original Release Date",-1)),Ee(h("input",{"onUpdate:modelValue":_[7]||(_[7]=R=>s.value.basic.originalReleaseDate=R),type:"date",class:"form-input"},null,512),[[nt,s.value.basic.originalReleaseDate]])])])])):Ke("",!0),n.value===2?(W(),Q("div",kx,[h("div",Dx,[_[28]||(_[28]=h("p",{class:"step-description"},"Add and organize the tracks for your release",-1)),h("button",{onClick:v,class:"btn btn-primary"},[q(C,{icon:"plus"}),_[27]||(_[27]=ye(" Add Track ",-1))])]),s.value.tracks.length===0?(W(),Q("div",Nx,[q(C,{icon:"music",class:"empty-icon"}),_[29]||(_[29]=h("p",null,"No tracks added yet",-1)),h("button",{onClick:v,class:"btn btn-primary"}," Add Your First Track ")])):(W(),Q("div",xx,[(W(!0),Q(Ve,null,ht(s.value.tracks,(R,O)=>(W(),Q("div",{key:R.id,class:"track-item"},[h("div",Ox,G(O+1),1),h("div",Vx,[Ee(h("input",{"onUpdate:modelValue":x=>R.title=x,type:"text",class:"form-input",placeholder:"Track title"},null,8,Mx),[[nt,R.title]]),Ee(h("input",{"onUpdate:modelValue":x=>R.artist=x,type:"text",class:"form-input",placeholder:"Track artist"},null,8,Lx),[[nt,R.artist]])]),h("button",$x,[q(C,{icon:"trash"})])]))),128))]))])):Ke("",!0),n.value===3?(W(),Q("div",Fx,[h("div",Ux,[_[32]||(_[32]=h("h3",null,"Cover Image",-1)),_[33]||(_[33]=h("p",{class:"step-description"},"Upload the main cover image for your release (minimum 3000x3000px)",-1)),h("div",jx,[q(C,{icon:"upload",class:"upload-icon"}),_[30]||(_[30]=h("p",null,"Drag and drop or click to upload",-1)),_[31]||(_[31]=h("button",{class:"btn btn-primary"},"Choose File",-1))])]),h("div",Bx,[_[36]||(_[36]=h("h3",null,"Audio Files",-1)),_[37]||(_[37]=h("p",{class:"step-description"},"Upload audio files for each track (WAV or FLAC recommended)",-1)),h("div",zx,[q(C,{icon:"music",class:"upload-icon"}),_[34]||(_[34]=h("p",null,"Drag and drop or click to upload",-1)),_[35]||(_[35]=h("button",{class:"btn btn-secondary"},"Choose Files",-1))])])])):Ke("",!0),n.value===4?(W(),Q("div",qx,[h("div",Hx,[h("div",Wx,[_[39]||(_[39]=h("label",{class:"form-label required"},"Primary Genre",-1)),Ee(h("select",{"onUpdate:modelValue":_[8]||(_[8]=R=>s.value.metadata.genre=R),class:"form-select"},_[38]||(_[38]=[as('<option value="" data-v-7fc6e47f>Select genre</option><option value="Rock" data-v-7fc6e47f>Rock</option><option value="Pop" data-v-7fc6e47f>Pop</option><option value="Electronic" data-v-7fc6e47f>Electronic</option><option value="Hip-Hop" data-v-7fc6e47f>Hip-Hop</option><option value="Jazz" data-v-7fc6e47f>Jazz</option><option value="Classical" data-v-7fc6e47f>Classical</option>',7)]),512),[[Dn,s.value.metadata.genre]])]),h("div",Gx,[_[40]||(_[40]=h("label",{class:"form-label"},"Sub-genre",-1)),Ee(h("input",{"onUpdate:modelValue":_[9]||(_[9]=R=>s.value.metadata.subgenre=R),type:"text",class:"form-input",placeholder:"Enter sub-genre"},null,512),[[nt,s.value.metadata.subgenre]])]),h("div",Kx,[_[42]||(_[42]=h("label",{class:"form-label required"},"Language",-1)),Ee(h("select",{"onUpdate:modelValue":_[10]||(_[10]=R=>s.value.metadata.language=R),class:"form-select"},_[41]||(_[41]=[as('<option value="en" data-v-7fc6e47f>English</option><option value="es" data-v-7fc6e47f>Spanish</option><option value="fr" data-v-7fc6e47f>French</option><option value="de" data-v-7fc6e47f>German</option><option value="ja" data-v-7fc6e47f>Japanese</option>',5)]),512),[[Dn,s.value.metadata.language]])]),h("div",Yx,[_[43]||(_[43]=h("label",{class:"form-label required"},"Copyright",-1)),Ee(h("input",{"onUpdate:modelValue":_[11]||(_[11]=R=>s.value.metadata.copyright=R),type:"text",class:"form-input",placeholder:"© 2024 Label Name"},null,512),[[nt,s.value.metadata.copyright]])])])])):Ke("",!0),n.value===5?(W(),Q("div",Qx,[h("div",Xx,[h("label",Jx,[Ee(h("input",{"onUpdate:modelValue":_[12]||(_[12]=R=>s.value.territories.mode=R),type:"radio",value:"worldwide"},null,512),[[Dp,s.value.territories.mode]]),_[44]||(_[44]=h("div",{class:"radio-content"},[h("span",{class:"radio-title"},"Worldwide"),h("span",{class:"radio-description"},"Distribute to all territories")],-1))]),h("label",Zx,[Ee(h("input",{"onUpdate:modelValue":_[13]||(_[13]=R=>s.value.territories.mode=R),type:"radio",value:"selected"},null,512),[[Dp,s.value.territories.mode]]),_[45]||(_[45]=h("div",{class:"radio-content"},[h("span",{class:"radio-title"},"Selected Territories"),h("span",{class:"radio-description"},"Choose specific territories")],-1))])]),s.value.territories.mode==="selected"?(W(),Q("div",eO,_[46]||(_[46]=[h("p",null,"Territory selection interface would go here",-1)]))):Ke("",!0)])):Ke("",!0),n.value===6?(W(),Q("div",tO,[h("div",nO,[_[51]||(_[51]=h("h3",null,"Release Summary",-1)),h("div",sO,[h("div",rO,[_[47]||(_[47]=h("span",{class:"summary-label"},"Title:",-1)),h("span",iO,G(s.value.basic.title||"Not set"),1)]),h("div",oO,[_[48]||(_[48]=h("span",{class:"summary-label"},"Artist:",-1)),h("span",aO,G(s.value.basic.displayArtist||"Not set"),1)]),h("div",lO,[_[49]||(_[49]=h("span",{class:"summary-label"},"Type:",-1)),h("span",cO,G(s.value.basic.type),1)]),h("div",uO,[_[50]||(_[50]=h("span",{class:"summary-label"},"Tracks:",-1)),h("span",hO,G(s.value.tracks.length),1)])])]),h("div",dO,[_[58]||(_[58]=h("h3",null,"ERN Configuration",-1)),h("div",fO,[h("div",pO,[_[53]||(_[53]=h("label",{class:"form-label"},"ERN Version",-1)),Ee(h("select",{"onUpdate:modelValue":_[14]||(_[14]=R=>s.value.preview.ernVersion=R),class:"form-select"},_[52]||(_[52]=[h("option",{value:"3.8.2"},"ERN 3.8.2",-1),h("option",{value:"4.2"},"ERN 4.2",-1),h("option",{value:"4.3"},"ERN 4.3",-1)]),512),[[Dn,s.value.preview.ernVersion]])]),h("div",mO,[_[55]||(_[55]=h("label",{class:"form-label"},"Profile",-1)),Ee(h("select",{"onUpdate:modelValue":_[15]||(_[15]=R=>s.value.preview.profile=R),class:"form-select"},_[54]||(_[54]=[h("option",{value:"AudioAlbum"},"Audio Album",-1),h("option",{value:"AudioSingle"},"Audio Single",-1),h("option",{value:"VideoAlbum"},"Video Album",-1)]),512),[[Dn,s.value.preview.profile]])])]),h("button",{onClick:D,class:"btn btn-secondary"},[q(C,{icon:"check"}),_[56]||(_[56]=ye(" Validate ERN ",-1))]),s.value.preview.validated?(W(),Q("div",gO,[q(C,{icon:"check-circle"}),_[57]||(_[57]=ye(" ERN validated successfully ",-1))])):Ke("",!0)])])):Ke("",!0)]),h("div",vO,[h("button",{onClick:c,class:"btn btn-secondary",disabled:n.value===1},[q(C,{icon:"chevron-left"}),_[59]||(_[59]=ye(" Previous ",-1))],8,yO),n.value<$a?(W(),Q("button",{key:0,onClick:l,class:"btn btn-primary",disabled:!o.value},[_[60]||(_[60]=ye(" Next ",-1)),q(C,{icon:"chevron-right"})],8,_O)):(W(),Q("button",{key:1,onClick:p,class:"btn btn-success",disabled:!o.value},[q(C,{icon:"check"}),_[61]||(_[61]=ye(" Generate ERN & Save ",-1))],8,bO))])])])])}}},EO=An(wO,[["__scopeId","data-v-7fc6e47f"]]),TO={class:"deliveries"},IO={class:"container"},AO={class:"page-header"},SO={class:"stats-row"},RO={class:"stat-card card"},CO={class:"card-body"},PO={class:"stat-value"},kO={class:"stat-card card"},DO={class:"card-body"},NO={class:"stat-value"},xO={class:"stat-card card"},OO={class:"card-body"},VO={class:"stat-value"},MO={class:"stat-card card"},LO={class:"card-body"},$O={class:"stat-value"},FO={class:"filters-section"},UO={class:"filter-tabs"},jO=["onClick"],BO={class:"filter-badge"},zO=["value"],qO={key:0,class:"loading-container"},HO={key:1,class:"empty-state card"},WO={class:"card-body"},GO={class:"empty-description"},KO={key:2,class:"deliveries-list"},YO={class:"card-body"},QO={class:"delivery-header"},XO={class:"delivery-info"},JO={class:"delivery-title"},ZO={class:"delivery-meta"},e9={class:"delivery-target"},t9={class:"delivery-files"},n9={key:0,class:"delivery-progress"},s9={class:"progress-bar"},r9={class:"progress-text"},i9={key:1,class:"delivery-error"},o9={class:"delivery-footer"},a9={class:"delivery-time"},l9={key:0},c9={key:1},u9={key:2},h9={class:"time-duration"},d9={key:3},f9={class:"delivery-actions"},p9=["onClick"],m9=["onClick"],g9=["onClick"],v9=["onClick"],y9={class:"targets-section"},_9={class:"targets-grid"},b9={class:"card-body"},w9={class:"target-header"},E9={class:"target-name"},T9={class:"target-info"},I9={class:"target-type"},A9={class:"target-protocol"},S9={class:"target-actions"},R9={class:"btn-icon",title:"Edit"},C9={class:"btn-icon",title:"Test Connection"},P9={class:"btn-icon",title:"Delete"},k9={__name:"Deliveries",setup(t){sr();const e=Te([]),n=Te("all"),s=Te("all"),r=Te(!0),i=Te(!1),o=[{id:"1",releaseTitle:"Summer Vibes EP",target:"Spotify",status:"completed",scheduledAt:new Date(Date.now()-2880*60*1e3),completedAt:new Date(Date.now()-2880*60*1e3+900*1e3),fileCount:5,totalSize:"125 MB"},{id:"2",releaseTitle:"Midnight Dreams",target:"Apple Music",status:"processing",scheduledAt:new Date,progress:65,fileCount:13,totalSize:"380 MB"},{id:"3",releaseTitle:"Electric Pulse",target:"YouTube Music",status:"queued",scheduledAt:new Date(Date.now()+7200*1e3),fileCount:2,totalSize:"45 MB"},{id:"4",releaseTitle:"Summer Vibes EP",target:"Deezer",status:"failed",scheduledAt:new Date(Date.now()-1440*60*1e3),failedAt:new Date(Date.now()-1440*60*1e3+300*1e3),error:"Connection timeout",fileCount:5,totalSize:"125 MB"}],l=Te([{id:"1",name:"Spotify",type:"DSP",protocol:"SFTP",active:!0},{id:"2",name:"Apple Music",type:"DSP",protocol:"API",active:!0},{id:"3",name:"YouTube Music",type:"DSP",protocol:"FTP",active:!0},{id:"4",name:"Deezer",type:"DSP",protocol:"SFTP",active:!0},{id:"5",name:"Amazon Music",type:"DSP",protocol:"S3",active:!1}]),c=Pe(()=>{let x=[...e.value];return n.value!=="all"&&(x=x.filter($=>$.status===n.value)),s.value!=="all"&&(x=x.filter($=>$.target===s.value)),x}),u=Pe(()=>{const x={all:e.value.length,queued:0,processing:0,completed:0,failed:0};return e.value.forEach($=>{x[$.status]!==void 0&&x[$.status]++}),x}),d=Pe(()=>l.value.filter(x=>x.active)),p=async()=>{r.value=!0;try{await new Promise(x=>setTimeout(x,500)),e.value=o}catch(x){console.error("Error loading deliveries:",x)}finally{r.value=!1}},g=x=>{console.log("Retrying delivery:",x.id)},v=x=>{console.log("Cancelling delivery:",x.id)},D=x=>{console.log("Viewing logs for:",x.id)},A=x=>{console.log("Downloading receipt for:",x.id)},_=x=>{switch(x){case"queued":return"status-queued";case"processing":return"status-processing";case"completed":return"status-completed";case"failed":return"status-failed";default:return""}},C=x=>{switch(x){case"queued":return"clock";case"processing":return"spinner";case"completed":return"check-circle";case"failed":return"times-circle";default:return"truck"}},R=x=>{const $=new Date,K=Math.abs($-x),b=Math.floor(K/(1e3*60*60)),w=Math.floor(b/24);return x>$?b<1?"In a few minutes":b<24?`In ${b} hour${b>1?"s":""}`:`In ${w} day${w>1?"s":""}`:b<1?"Just now":b<24?`${b} hour${b>1?"s":""} ago`:`${w} day${w>1?"s":""} ago`},O=(x,$)=>{const K=$-x;return`${Math.floor(K/(1e3*60))} min`};return xr(()=>{p()}),(x,$)=>{const K=cn("font-awesome-icon");return W(),Q("div",TO,[h("div",IO,[h("div",AO,[$[3]||($[3]=h("div",null,[h("h1",{class:"page-title"},"Deliveries"),h("p",{class:"page-subtitle"},"Monitor and manage your release deliveries")],-1)),h("button",{onClick:$[0]||($[0]=b=>i.value=!0),class:"btn btn-primary"},[q(K,{icon:"plus"}),$[2]||($[2]=ye(" Add Target ",-1))])]),h("div",SO,[h("div",RO,[h("div",CO,[h("div",PO,G(u.value.completed),1),$[4]||($[4]=h("div",{class:"stat-label"},"Completed Today",-1))])]),h("div",kO,[h("div",DO,[h("div",NO,G(u.value.processing),1),$[5]||($[5]=h("div",{class:"stat-label"},"In Progress",-1))])]),h("div",xO,[h("div",OO,[h("div",VO,G(u.value.queued),1),$[6]||($[6]=h("div",{class:"stat-label"},"Queued",-1))])]),h("div",MO,[h("div",LO,[h("div",$O,G(u.value.failed),1),$[7]||($[7]=h("div",{class:"stat-label"},"Failed",-1))])])]),h("div",FO,[h("div",UO,[(W(!0),Q(Ve,null,ht(u.value,(b,w)=>(W(),Q("button",{key:w,onClick:E=>n.value=w,class:Ut(["filter-tab",{active:n.value===w}])},[ye(G(w.charAt(0).toUpperCase()+w.slice(1))+" ",1),h("span",BO,G(b),1)],10,jO))),128))]),Ee(h("select",{"onUpdate:modelValue":$[1]||($[1]=b=>s.value=b),class:"form-select"},[$[8]||($[8]=h("option",{value:"all"},"All Targets",-1)),(W(!0),Q(Ve,null,ht(d.value,b=>(W(),Q("option",{key:b.id,value:b.name},G(b.name),9,zO))),128))],512),[[Dn,s.value]])]),r.value?(W(),Q("div",qO,$[9]||($[9]=[h("div",{class:"loading-spinner"},null,-1),h("p",null,"Loading deliveries...",-1)]))):c.value.length===0?(W(),Q("div",HO,[h("div",WO,[q(K,{icon:"truck",class:"empty-icon"}),$[10]||($[10]=h("h2",{class:"empty-title"},"No deliveries found",-1)),h("p",GO,G(n.value==="all"?"No deliveries scheduled yet":`No ${n.value} deliveries`),1)])])):(W(),Q("div",KO,[(W(!0),Q(Ve,null,ht(c.value,b=>(W(),Q("div",{key:b.id,class:"delivery-card card"},[h("div",YO,[h("div",QO,[h("div",XO,[h("h3",JO,G(b.releaseTitle),1),h("div",ZO,[h("span",e9,[q(K,{icon:["fab","spotify"]}),ye(" "+G(b.target),1)]),h("span",t9,G(b.fileCount)+" files · "+G(b.totalSize),1)])]),h("div",{class:Ut(["delivery-status",_(b.status)])},[q(K,{icon:C(b.status),spin:b.status==="processing"},null,8,["icon","spin"]),ye(" "+G(b.status),1)],2)]),b.status==="processing"?(W(),Q("div",n9,[h("div",s9,[h("div",{class:"progress-fill",style:ss({width:`${b.progress}%`})},null,4)]),h("span",r9,G(b.progress)+"% complete",1)])):Ke("",!0),b.status==="failed"?(W(),Q("div",i9,[q(K,{icon:"exclamation-triangle"}),ye(" "+G(b.error),1)])):Ke("",!0),h("div",o9,[h("div",a9,[b.status==="queued"?(W(),Q("span",l9," Scheduled "+G(R(b.scheduledAt)),1)):b.status==="processing"?(W(),Q("span",c9," Started "+G(R(b.scheduledAt)),1)):b.status==="completed"?(W(),Q("span",u9,[ye(" Completed "+G(R(b.completedAt))+" ",1),h("span",h9," ("+G(O(b.scheduledAt,b.completedAt))+") ",1)])):b.status==="failed"?(W(),Q("span",d9," Failed "+G(R(b.failedAt)),1)):Ke("",!0)]),h("div",f9,[b.status==="queued"?(W(),Q("button",{key:0,onClick:w=>v(b),class:"btn btn-secondary btn-sm"}," Cancel ",8,p9)):Ke("",!0),b.status==="failed"?(W(),Q("button",{key:1,onClick:w=>g(b),class:"btn btn-primary btn-sm"},[q(K,{icon:"redo"}),$[11]||($[11]=ye(" Retry ",-1))],8,m9)):Ke("",!0),h("button",{onClick:w=>D(b),class:"btn-icon",title:"View Logs"},[q(K,{icon:"file-alt"})],8,g9),b.status==="completed"?(W(),Q("button",{key:2,onClick:w=>A(b),class:"btn-icon",title:"Download Receipt"},[q(K,{icon:"download"})],8,v9)):Ke("",!0)])])])]))),128))])),h("div",y9,[$[12]||($[12]=h("h2",{class:"section-title"},"Delivery Targets",-1)),h("div",_9,[(W(!0),Q(Ve,null,ht(l.value,b=>(W(),Q("div",{key:b.id,class:Ut(["target-card card",{inactive:!b.active}])},[h("div",b9,[h("div",w9,[h("h3",E9,G(b.name),1),h("span",{class:Ut(["target-status",{active:b.active}])},G(b.active?"Active":"Inactive"),3)]),h("div",T9,[h("span",I9,G(b.type),1),h("span",A9,G(b.protocol),1)]),h("div",S9,[h("button",R9,[q(K,{icon:"edit"})]),h("button",C9,[q(K,{icon:"plug"})]),h("button",P9,[q(K,{icon:"trash"})])])])],2))),128))])])])])}}},D9=An(k9,[["__scopeId","data-v-84573fea"]]),N9={class:"analytics"},x9={class:"container"},O9={class:"page-header"},V9={class:"header-actions"},M9={class:"export-menu"},L9={class:"btn btn-secondary"},$9={class:"export-dropdown"},F9={key:0,class:"loading-container"},U9={class:"overview-grid"},j9={class:"overview-card card"},B9={class:"card-body"},z9={class:"overview-icon"},q9={class:"overview-content"},H9={class:"overview-value"},W9={class:"overview-change positive"},G9={class:"overview-card card"},K9={class:"card-body"},Y9={class:"overview-icon"},Q9={class:"overview-content"},X9={class:"overview-value"},J9={class:"overview-change positive"},Z9={class:"overview-card card"},eV={class:"card-body"},tV={class:"overview-icon success"},nV={class:"overview-content"},sV={class:"overview-value"},rV={class:"overview-change positive"},iV={class:"overview-card card"},oV={class:"card-body"},aV={class:"overview-icon"},lV={class:"overview-content"},cV={class:"overview-value"},uV={class:"overview-change negative"},hV={class:"charts-grid"},dV={class:"chart-card card"},fV={class:"card-header"},pV={class:"chart-period"},mV={class:"card-body"},gV={class:"bar-chart"},vV={class:"chart-bars"},yV={class:"bar-container"},_V={class:"bar-value"},bV={class:"bar-label"},wV={class:"chart-card card"},EV={class:"card-header"},TV={class:"chart-period"},IV={class:"card-body"},AV={class:"bar-chart"},SV={class:"chart-bars"},RV={class:"bar-container stacked"},CV={class:"bar-value"},PV={key:0,class:"bar-value"},kV={class:"bar-label"},DV={class:"tables-grid"},NV={class:"table-card card"},xV={class:"card-body"},OV={class:"performance-table"},VV={class:"release-info"},MV={class:"release-title"},LV={class:"release-artist"},$V={class:"table-value"},FV={class:"table-card card"},UV={class:"card-body"},jV={class:"performance-table"},BV={class:"dsp-name"},zV={class:"table-value"},qV={class:"table-value"},HV={class:"insights-grid"},WV={class:"insight-card card"},GV={class:"card-body"},KV={class:"territory-list"},YV={class:"territory-info"},QV={class:"territory-flag"},XV={class:"territory-name"},JV={class:"territory-stats"},ZV={class:"territory-count"},eM={class:"territory-bar"},tM={class:"territory-percentage"},nM={class:"insight-card card"},sM={class:"card-body"},rM={class:"type-chart"},iM={class:"donut-placeholder"},oM={class:"donut-center"},aM={class:"donut-value"},lM={class:"type-legend"},cM={class:"legend-label"},uM={class:"legend-value"},hM={class:"quick-stats card"},dM={class:"card-body"},fM={class:"stats-row"},pM={class:"stat-item"},mM={class:"stat-content"},gM={class:"stat-value"},vM={class:"stat-item"},yM={class:"stat-content"},_M={class:"stat-value"},bM={class:"stat-item"},wM={class:"stat-item"},EM={__name:"Analytics",setup(t){const e=Te("30days");Te({start:"",end:""});const n=Te(!0),s=Te({overview:{totalReleases:127,totalDeliveries:892,successRate:96.5,avgDeliveryTime:4.2,activeTargets:12,totalTracks:1453},trends:{releases:[{month:"Jan",count:8},{month:"Feb",count:12},{month:"Mar",count:15},{month:"Apr",count:11},{month:"May",count:18},{month:"Jun",count:22}],deliveries:[{month:"Jan",success:45,failed:2},{month:"Feb",success:67,failed:3},{month:"Mar",success:89,failed:1},{month:"Apr",success:72,failed:4},{month:"May",success:98,failed:2},{month:"Jun",success:112,failed:3}]},topPerformers:[{title:"Summer Vibes EP",artist:"The Sunset Band",deliveries:24,successRate:100},{title:"Midnight Dreams",artist:"Luna Nova",deliveries:18,successRate:94.4},{title:"Electric Pulse",artist:"Digital Waves",deliveries:15,successRate:93.3},{title:"Ocean Waves",artist:"Coastal Sound",deliveries:12,successRate:100},{title:"Urban Legends",artist:"City Lights",deliveries:10,successRate:90}],dspPerformance:[{name:"Spotify",deliveries:234,successRate:98.2,avgTime:3.5},{name:"Apple Music",deliveries:189,successRate:97.8,avgTime:4.1},{name:"YouTube Music",deliveries:156,successRate:95.5,avgTime:5.2},{name:"Deezer",deliveries:134,successRate:94,avgTime:4.8},{name:"Amazon Music",deliveries:98,successRate:96.9,avgTime:3.9}],territories:[{code:"US",name:"United States",releases:45,percentage:35.4},{code:"GB",name:"United Kingdom",releases:32,percentage:25.2},{code:"DE",name:"Germany",releases:18,percentage:14.2},{code:"FR",name:"France",releases:15,percentage:11.8},{code:"JP",name:"Japan",releases:10,percentage:7.9},{code:"Other",name:"Other",releases:7,percentage:5.5}],releaseTypes:[{type:"Album",count:45,percentage:35.4},{type:"Single",count:52,percentage:40.9},{type:"EP",count:28,percentage:22},{type:"Compilation",count:2,percentage:1.6}]}),r=Pe(()=>{switch(e.value){case"7days":return"Last 7 Days";case"30days":return"Last 30 Days";case"90days":return"Last 90 Days";case"12months":return"Last 12 Months";case"custom":return"Custom Range";default:return"Last 30 Days"}}),i=Pe(()=>Math.max(...s.value.trends.releases.map(g=>g.count))),o=Pe(()=>{const g=s.value.trends.deliveries;return Math.max(...g.map(v=>v.success+v.failed))}),l=async()=>{n.value=!0;try{await new Promise(g=>setTimeout(g,1e3))}catch(g){console.error("Error loading analytics:",g)}finally{n.value=!1}},c=g=>{console.log(`Exporting analytics data as ${g}`)},u=(g,v)=>`${g/v*100}%`,d=g=>g>=95?"text-success":g>=85?"text-warning":"text-error",p=g=>new Intl.NumberFormat().format(g);return xr(()=>{l()}),(g,v)=>{const D=cn("font-awesome-icon");return W(),Q("div",N9,[h("div",x9,[h("div",O9,[v[6]||(v[6]=h("div",null,[h("h1",{class:"page-title"},"Analytics"),h("p",{class:"page-subtitle"},"Track your distribution performance and insights")],-1)),h("div",V9,[Ee(h("select",{"onUpdate:modelValue":v[0]||(v[0]=A=>e.value=A),class:"form-select"},v[4]||(v[4]=[as('<option value="7days" data-v-9a6861f2>Last 7 Days</option><option value="30days" data-v-9a6861f2>Last 30 Days</option><option value="90days" data-v-9a6861f2>Last 90 Days</option><option value="12months" data-v-9a6861f2>Last 12 Months</option><option value="custom" data-v-9a6861f2>Custom Range</option>',5)]),512),[[Dn,e.value]]),h("div",M9,[h("button",L9,[q(D,{icon:"download"}),v[5]||(v[5]=ye(" Export ",-1))]),h("div",$9,[h("button",{onClick:v[1]||(v[1]=A=>c("csv"))},"Export as CSV"),h("button",{onClick:v[2]||(v[2]=A=>c("pdf"))},"Export as PDF"),h("button",{onClick:v[3]||(v[3]=A=>c("json"))},"Export as JSON")])])])]),n.value?(W(),Q("div",F9,v[7]||(v[7]=[h("div",{class:"loading-spinner"},null,-1),h("p",null,"Loading analytics data...",-1)]))):(W(),Q(Ve,{key:1},[h("div",U9,[h("div",j9,[h("div",B9,[h("div",z9,[q(D,{icon:"music"})]),h("div",q9,[h("div",H9,G(p(s.value.overview.totalReleases)),1),v[9]||(v[9]=h("div",{class:"overview-label"},"Total Releases",-1)),h("div",W9,[q(D,{icon:"arrow-up"}),v[8]||(v[8]=ye(" 12% from last period ",-1))])])])]),h("div",G9,[h("div",K9,[h("div",Y9,[q(D,{icon:"truck"})]),h("div",Q9,[h("div",X9,G(p(s.value.overview.totalDeliveries)),1),v[11]||(v[11]=h("div",{class:"overview-label"},"Total Deliveries",-1)),h("div",J9,[q(D,{icon:"arrow-up"}),v[10]||(v[10]=ye(" 8% from last period ",-1))])])])]),h("div",Z9,[h("div",eV,[h("div",tV,[q(D,{icon:"check-circle"})]),h("div",nV,[h("div",sV,G(s.value.overview.successRate)+"%",1),v[13]||(v[13]=h("div",{class:"overview-label"},"Success Rate",-1)),h("div",rV,[q(D,{icon:"arrow-up"}),v[12]||(v[12]=ye(" 2.5% improvement ",-1))])])])]),h("div",iV,[h("div",oV,[h("div",aV,[q(D,{icon:"clock"})]),h("div",lV,[h("div",cV,G(s.value.overview.avgDeliveryTime)+" min",1),v[15]||(v[15]=h("div",{class:"overview-label"},"Avg Delivery Time",-1)),h("div",uV,[q(D,{icon:"arrow-up"}),v[14]||(v[14]=ye(" 0.3 min increase ",-1))])])])])]),h("div",hV,[h("div",dV,[h("div",fV,[v[16]||(v[16]=h("h2",{class:"chart-title"},"Release Trends",-1)),h("span",pV,G(r.value),1)]),h("div",mV,[h("div",gV,[h("div",vV,[(W(!0),Q(Ve,null,ht(s.value.trends.releases,A=>(W(),Q("div",{key:A.month,class:"bar-group"},[h("div",yV,[h("div",{class:"bar bar-primary",style:ss({height:u(A.count,i.value)})},[h("span",_V,G(A.count),1)],4)]),h("span",bV,G(A.month),1)]))),128))])])])]),h("div",wV,[h("div",EV,[v[17]||(v[17]=h("h2",{class:"chart-title"},"Delivery Performance",-1)),h("span",TV,G(r.value),1)]),h("div",IV,[h("div",AV,[h("div",SV,[(W(!0),Q(Ve,null,ht(s.value.trends.deliveries,A=>(W(),Q("div",{key:A.month,class:"bar-group"},[h("div",RV,[h("div",{class:"bar bar-success",style:ss({height:u(A.success,o.value)})},[h("span",CV,G(A.success),1)],4),h("div",{class:"bar bar-error",style:ss({height:u(A.failed,o.value)})},[A.failed>0?(W(),Q("span",PV,G(A.failed),1)):Ke("",!0)],4)]),h("span",kV,G(A.month),1)]))),128))]),v[18]||(v[18]=as('<div class="chart-legend" data-v-9a6861f2><div class="legend-item" data-v-9a6861f2><span class="legend-color success" data-v-9a6861f2></span><span data-v-9a6861f2>Successful</span></div><div class="legend-item" data-v-9a6861f2><span class="legend-color error" data-v-9a6861f2></span><span data-v-9a6861f2>Failed</span></div></div>',1))])])])]),h("div",DV,[h("div",NV,[v[20]||(v[20]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Top Performing Releases")],-1)),h("div",xV,[h("div",OV,[v[19]||(v[19]=h("div",{class:"table-header"},[h("span",null,"Release"),h("span",null,"Deliveries"),h("span",null,"Success Rate")],-1)),(W(!0),Q(Ve,null,ht(s.value.topPerformers,A=>(W(),Q("div",{key:A.title,class:"table-row"},[h("div",VV,[h("div",MV,G(A.title),1),h("div",LV,G(A.artist),1)]),h("span",$V,G(A.deliveries),1),h("span",{class:Ut(["table-value",d(A.successRate)])},G(A.successRate)+"% ",3)]))),128))])])]),h("div",FV,[v[22]||(v[22]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"DSP Performance")],-1)),h("div",UV,[h("div",jV,[v[21]||(v[21]=h("div",{class:"table-header"},[h("span",null,"Platform"),h("span",null,"Deliveries"),h("span",null,"Success"),h("span",null,"Avg Time")],-1)),(W(!0),Q(Ve,null,ht(s.value.dspPerformance,A=>(W(),Q("div",{key:A.name,class:"table-row"},[h("span",BV,[q(D,{icon:["fab","spotify"]}),ye(" "+G(A.name),1)]),h("span",zV,G(A.deliveries),1),h("span",{class:Ut(["table-value",d(A.successRate)])},G(A.successRate)+"% ",3),h("span",qV,G(A.avgTime)+"m",1)]))),128))])])])]),h("div",HV,[h("div",WV,[v[23]||(v[23]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Territory Distribution")],-1)),h("div",GV,[h("div",KV,[(W(!0),Q(Ve,null,ht(s.value.territories,A=>(W(),Q("div",{key:A.code,class:"territory-item"},[h("div",YV,[h("span",QV,G(A.code),1),h("span",XV,G(A.name),1)]),h("div",JV,[h("span",ZV,G(A.releases)+" releases",1),h("div",eM,[h("div",{class:"territory-fill",style:ss({width:`${A.percentage}%`})},null,4)]),h("span",tM,G(A.percentage)+"%",1)])]))),128))])])]),h("div",nM,[v[26]||(v[26]=h("div",{class:"card-header"},[h("h2",{class:"section-title"},"Release Types")],-1)),h("div",sM,[h("div",rM,[h("div",iM,[h("div",oM,[h("div",aM,G(s.value.overview.totalReleases),1),v[24]||(v[24]=h("div",{class:"donut-label"},"Total",-1))]),v[25]||(v[25]=as('<svg class="donut-svg" viewBox="0 0 100 100" data-v-9a6861f2><circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-primary)" stroke-width="15" stroke-dasharray="141.3 251.3" transform="rotate(-90 50 50)" data-v-9a6861f2></circle><circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-secondary)" stroke-width="15" stroke-dasharray="102.8 251.3" stroke-dashoffset="-141.3" transform="rotate(-90 50 50)" data-v-9a6861f2></circle><circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-warning)" stroke-width="15" stroke-dasharray="55.3 251.3" stroke-dashoffset="-244.1" transform="rotate(-90 50 50)" data-v-9a6861f2></circle><circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-info)" stroke-width="15" stroke-dasharray="4 251.3" stroke-dashoffset="-299.4" transform="rotate(-90 50 50)" data-v-9a6861f2></circle></svg>',1))]),h("div",lM,[(W(!0),Q(Ve,null,ht(s.value.releaseTypes,A=>(W(),Q("div",{key:A.type,class:"legend-item"},[h("span",{class:Ut(["legend-dot",`type-${A.type.toLowerCase()}`])},null,2),h("span",cM,G(A.type),1),h("span",uM,G(A.count)+" ("+G(A.percentage)+"%)",1)]))),128))])])])])]),h("div",hM,[h("div",dM,[h("div",fM,[h("div",pM,[q(D,{icon:"bullseye",class:"stat-icon"}),h("div",mM,[h("div",gM,G(s.value.overview.activeTargets),1),v[27]||(v[27]=h("div",{class:"stat-label"},"Active Targets",-1))])]),h("div",vM,[q(D,{icon:"music",class:"stat-icon"}),h("div",yM,[h("div",_M,G(p(s.value.overview.totalTracks)),1),v[28]||(v[28]=h("div",{class:"stat-label"},"Total Tracks",-1))])]),h("div",bM,[q(D,{icon:"calendar",class:"stat-icon"}),v[29]||(v[29]=h("div",{class:"stat-content"},[h("div",{class:"stat-value"},"18"),h("div",{class:"stat-label"},"Releases This Week")],-1))]),h("div",wM,[q(D,{icon:"globe",class:"stat-icon"}),v[30]||(v[30]=h("div",{class:"stat-content"},[h("div",{class:"stat-value"},"45"),h("div",{class:"stat-label"},"Countries Reached")],-1))])])])])],64))])])}}},TM=An(EM,[["__scopeId","data-v-9a6861f2"]]),j0=UI({history:gI("/"),routes:[{path:"/",name:"home",component:rD},{path:"/login",name:"login",component:DD,meta:{requiresGuest:!0}},{path:"/signup",name:"signup",component:eN,meta:{requiresGuest:!0}},{path:"/dashboard",name:"dashboard",component:XN,meta:{requiresAuth:!0}},{path:"/catalog",name:"catalog",component:rx,meta:{requiresAuth:!0}},{path:"/releases/new",name:"new-release",component:EO,meta:{requiresAuth:!0}},{path:"/deliveries",name:"deliveries",component:D9,meta:{requiresAuth:!0}},{path:"/analytics",name:"analytics",component:TM,meta:{requiresAuth:!0}},{path:"/settings",name:"settings",component:I5,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}]});j0.beforeEach(async(t,e,n)=>{const{isLoading:s}=ui();s.value&&await new Promise(i=>{const o=setInterval(()=>{const{isLoading:l}=ui();l.value||(clearInterval(o),i())},50)});const{isAuthenticated:r}=ui();t.meta.requiresAuth&&!r.value?n("/login"):t.meta.requiresGuest&&r.value?n("/dashboard"):n()});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function dh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}function IM(t){if(Array.isArray(t))return t}function AM(t){if(Array.isArray(t))return dh(t)}function SM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function RM(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,B0(s.key),s)}}function CM(t,e,n){return e&&RM(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function tl(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=qd(t))||e){n&&(t=n);var s=0,r=function(){};return{s:r,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){l=!0,i=c},f:function(){try{o||n.return==null||n.return()}finally{if(l)throw i}}}}function Ce(t,e,n){return(e=B0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var s,r,i,o,l=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(s=i.call(n)).done)&&(l.push(s.value),l.length!==e);c=!0);}catch(d){u=!0,r=d}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}function DM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,s)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jg(Object(n),!0).forEach(function(s){Ce(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jg(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Ec(t,e){return IM(t)||kM(t,e)||qd(t,e)||DM()}function In(t){return AM(t)||PM(t)||qd(t)||NM()}function xM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B0(t){var e=xM(t,"string");return typeof e=="symbol"?e:e+""}function Ml(t){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ml(t)}function qd(t,e){if(t){if(typeof t=="string")return dh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dh(t,e):void 0}}var Bg=function(){},Hd={},z0={},q0=null,H0={mark:Bg,measure:Bg};try{typeof window<"u"&&(Hd=window),typeof document<"u"&&(z0=document),typeof MutationObserver<"u"&&(q0=MutationObserver),typeof performance<"u"&&(H0=performance)}catch{}var OM=Hd.navigator||{},zg=OM.userAgent,qg=zg===void 0?"":zg,er=Hd,Ge=z0,Hg=q0,Fa=H0;er.document;var Es=!!Ge.documentElement&&!!Ge.head&&typeof Ge.addEventListener=="function"&&typeof Ge.createElement=="function",W0=~qg.indexOf("MSIE")||~qg.indexOf("Trident/"),vu,VM=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,MM=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,G0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},LM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},K0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ot="classic",la="duotone",Y0="sharp",Q0="sharp-duotone",X0="chisel",J0="etch",Z0="jelly",eb="jelly-duo",tb="jelly-fill",nb="notdog",sb="notdog-duo",rb="slab",ib="slab-press",ob="thumbprint",ab="whiteboard",$M="Classic",FM="Duotone",UM="Sharp",jM="Sharp Duotone",BM="Chisel",zM="Etch",qM="Jelly",HM="Jelly Duo",WM="Jelly Fill",GM="Notdog",KM="Notdog Duo",YM="Slab",QM="Slab Press",XM="Thumbprint",JM="Whiteboard",lb=[Ot,la,Y0,Q0,X0,J0,Z0,eb,tb,nb,sb,rb,ib,ob,ab];vu={},Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(vu,Ot,$M),la,FM),Y0,UM),Q0,jM),X0,BM),J0,zM),Z0,qM),eb,HM),tb,WM),nb,GM),Ce(Ce(Ce(Ce(Ce(vu,sb,KM),rb,YM),ib,QM),ob,XM),ab,JM);var ZM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},eL={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},tL=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),nL={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},cb=["fak","fa-kit","fakd","fa-kit-duotone"],Wg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},sL=["kit"],rL="kit",iL="kit-duotone",oL="Kit",aL="Kit Duotone";Ce(Ce({},rL,oL),iL,aL);var lL={kit:{"fa-kit":"fak"}},cL={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},uL={kit:{fak:"fa-kit"}},Gg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},yu,Ua={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hL=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],dL="classic",fL="duotone",pL="sharp",mL="sharp-duotone",gL="chisel",vL="etch",yL="jelly",_L="jelly-duo",bL="jelly-fill",wL="notdog",EL="notdog-duo",TL="slab",IL="slab-press",AL="thumbprint",SL="whiteboard",RL="Classic",CL="Duotone",PL="Sharp",kL="Sharp Duotone",DL="Chisel",NL="Etch",xL="Jelly",OL="Jelly Duo",VL="Jelly Fill",ML="Notdog",LL="Notdog Duo",$L="Slab",FL="Slab Press",UL="Thumbprint",jL="Whiteboard";yu={},Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(Ce(yu,dL,RL),fL,CL),pL,PL),mL,kL),gL,DL),vL,NL),yL,xL),_L,OL),bL,VL),wL,ML),Ce(Ce(Ce(Ce(Ce(yu,EL,LL),TL,$L),IL,FL),AL,UL),SL,jL);var BL="kit",zL="kit-duotone",qL="Kit",HL="Kit Duotone";Ce(Ce({},BL,qL),zL,HL);var WL={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},GL={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},fh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},KL=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ub=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(hL,KL),YL=["solid","regular","light","thin","duotone","brands","semibold"],hb=[1,2,3,4,5,6,7,8,9,10],QL=hb.concat([11,12,13,14,15,16,17,18,19,20]),XL=["aw","fw","pull-left","pull-right"],JL=[].concat(In(Object.keys(GL)),YL,XL,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ua.GROUP,Ua.SWAP_OPACITY,Ua.PRIMARY,Ua.SECONDARY]).concat(hb.map(function(t){return"".concat(t,"x")})).concat(QL.map(function(t){return"w-".concat(t)})),ZL={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},gs="___FONT_AWESOME___",ph=16,db="fa",fb="svg-inline--fa",kr="data-fa-i2svg",mh="data-fa-pseudo-element",e8="data-fa-pseudo-element-pending",Wd="data-prefix",Gd="data-icon",Kg="fontawesome-i2svg",t8="async",n8=["HTML","HEAD","STYLE","SCRIPT"],pb=["::before","::after",":before",":after"],mb=function(){try{return!0}catch{return!1}}();function ca(t){return new Proxy(t,{get:function(n,s){return s in n?n[s]:n[Ot]}})}var gb=X({},G0);gb[Ot]=X(X(X(X({},{"fa-duotone":"duotone"}),G0[Ot]),Wg.kit),Wg["kit-duotone"]);var s8=ca(gb),gh=X({},nL);gh[Ot]=X(X(X(X({},{duotone:"fad"}),gh[Ot]),Gg.kit),Gg["kit-duotone"]);var Yg=ca(gh),vh=X({},fh);vh[Ot]=X(X({},vh[Ot]),uL.kit);var vb=ca(vh),yh=X({},WL);yh[Ot]=X(X({},yh[Ot]),lL.kit);ca(yh);var r8=VM,yb="fa-layers-text",i8=MM,o8=X({},ZM);ca(o8);var a8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_u=LM,l8=[].concat(In(sL),In(JL)),To=er.FontAwesomeConfig||{};function c8(t){var e=Ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function u8(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ge&&typeof Ge.querySelector=="function"){var h8=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];h8.forEach(function(t){var e=Ec(t,2),n=e[0],s=e[1],r=u8(c8(n));r!=null&&(To[s]=r)})}var _b={styleDefault:"solid",familyDefault:Ot,cssPrefix:db,replacementClass:fb,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};To.familyPrefix&&(To.cssPrefix=To.familyPrefix);var Ei=X(X({},_b),To);Ei.autoReplaceSvg||(Ei.observeMutations=!1);var ue={};Object.keys(_b).forEach(function(t){Object.defineProperty(ue,t,{enumerable:!0,set:function(n){Ei[t]=n,Io.forEach(function(s){return s(ue)})},get:function(){return Ei[t]}})});Object.defineProperty(ue,"familyPrefix",{enumerable:!0,set:function(e){Ei.cssPrefix=e,Io.forEach(function(n){return n(ue)})},get:function(){return Ei.cssPrefix}});er.FontAwesomeConfig=ue;var Io=[];function d8(t){return Io.push(t),function(){Io.splice(Io.indexOf(t),1)}}var Wr=ph,On={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f8(t){if(!(!t||!Es)){var e=Ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ge.head.childNodes,s=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=i)}return Ge.head.insertBefore(e,s),t}}var p8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qg(){for(var t=12,e="";t-- >0;)e+=p8[Math.random()*62|0];return e}function Pi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kd(t){return t.classList?Pi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function bb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m8(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(bb(t[n]),'" ')},"").trim()}function Tc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Yd(t){return t.size!==On.size||t.x!==On.x||t.y!==On.y||t.rotate!==On.rotate||t.flipX||t.flipY}function g8(t){var e=t.transform,n=t.containerWidth,s=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:c,path:u}}function v8(t){var e=t.transform,n=t.width,s=n===void 0?ph:n,r=t.height,i=r===void 0?ph:r,o="";return W0?o+="translate(".concat(e.x/Wr-s/2,"em, ").concat(e.y/Wr-i/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/Wr,"em), calc(-50% + ").concat(e.y/Wr,"em)) "),o+="scale(".concat(e.size/Wr*(e.flipX?-1:1),", ").concat(e.size/Wr*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var y8=`:root, :host {
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
}`;function wb(){var t=db,e=fb,n=ue.cssPrefix,s=ue.replacementClass,r=y8;if(n!==t||s!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(s))}return r}var Xg=!1;function bu(){ue.autoAddCss&&!Xg&&(f8(wb()),Xg=!0)}var _8={mixout:function(){return{dom:{css:wb,insertCss:bu}}},hooks:function(){return{beforeDOMElementCreation:function(){bu()},beforeI2svg:function(){bu()}}}},vs=er||{};vs[gs]||(vs[gs]={});vs[gs].styles||(vs[gs].styles={});vs[gs].hooks||(vs[gs].hooks={});vs[gs].shims||(vs[gs].shims=[]);var yn=vs[gs],Eb=[],Tb=function(){Ge.removeEventListener("DOMContentLoaded",Tb),Ll=1,Eb.map(function(e){return e()})},Ll=!1;Es&&(Ll=(Ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ge.readyState),Ll||Ge.addEventListener("DOMContentLoaded",Tb));function b8(t){Es&&(Ll?setTimeout(t,0):Eb.push(t))}function ua(t){var e=t.tag,n=t.attributes,s=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?bb(t):"<".concat(e," ").concat(m8(s),">").concat(i.map(ua).join(""),"</").concat(e,">")}function Jg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wu=function(e,n,s,r){var i=Object.keys(e),o=i.length,l=n,c,u,d;for(s===void 0?(c=1,d=e[i[0]]):(c=0,d=s);c<o;c++)u=i[c],d=l(d,e[u],u,e);return d};function Ib(t){return In(t).length!==1?null:t.codePointAt(0).toString(16)}function Zg(t){return Object.keys(t).reduce(function(e,n){var s=t[n],r=!!s.icon;return r?e[s.iconName]=s.icon:e[n]=s,e},{})}function Ab(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=n.skipHooks,r=s===void 0?!1:s,i=Zg(e);typeof yn.hooks.addPack=="function"&&!r?yn.hooks.addPack(t,Zg(e)):yn.styles[t]=X(X({},yn.styles[t]||{}),i),t==="fas"&&Ab("fa",e)}var Wo=yn.styles,w8=yn.shims,Sb=Object.keys(vb),E8=Sb.reduce(function(t,e){return t[e]=Object.keys(vb[e]),t},{}),Qd=null,Rb={},Cb={},Pb={},kb={},Db={};function T8(t){return~l8.indexOf(t)}function I8(t,e){var n=e.split("-"),s=n[0],r=n.slice(1).join("-");return s===t&&r!==""&&!T8(r)?r:null}var Nb=function(){var e=function(i){return wu(Wo,function(o,l,c){return o[c]=wu(l,i,{}),o},{})};Rb=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=o})}return r}),Cb=e(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=o})}return r}),Db=e(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(c){r[c]=o}),r});var n="far"in Wo||ue.autoFetchSvg,s=wu(w8,function(r,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});Pb=s.names,kb=s.unicodes,Qd=Ic(ue.styleDefault,{family:ue.familyDefault})};d8(function(t){Qd=Ic(t.styleDefault,{family:ue.familyDefault})});Nb();function Xd(t,e){return(Rb[t]||{})[e]}function A8(t,e){return(Cb[t]||{})[e]}function _r(t,e){return(Db[t]||{})[e]}function xb(t){return Pb[t]||{prefix:null,iconName:null}}function S8(t){var e=kb[t],n=Xd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tr(){return Qd}var Ob=function(){return{prefix:null,iconName:null,rest:[]}};function R8(t){var e=Ot,n=Sb.reduce(function(s,r){return s[r]="".concat(ue.cssPrefix,"-").concat(r),s},{});return lb.forEach(function(s){(t.includes(n[s])||t.some(function(r){return E8[s].includes(r)}))&&(e=s)}),e}function Ic(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,s=n===void 0?Ot:n,r=s8[s][t];if(s===la&&!t)return"fad";var i=Yg[s][t]||Yg[s][r],o=t in yn.styles?t:null,l=i||o||null;return l}function C8(t){var e=[],n=null;return t.forEach(function(s){var r=I8(ue.cssPrefix,s);r?n=r:s&&e.push(s)}),{iconName:n,rest:e}}function ev(t){return t.sort().filter(function(e,n,s){return s.indexOf(e)===n})}var tv=ub.concat(cb);function Ac(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,s=n===void 0?!1:n,r=null,i=ev(t.filter(function(v){return tv.includes(v)})),o=ev(t.filter(function(v){return!tv.includes(v)})),l=i.filter(function(v){return r=v,!K0.includes(v)}),c=Ec(l,1),u=c[0],d=u===void 0?null:u,p=R8(i),g=X(X({},C8(o)),{},{prefix:Ic(d,{family:p})});return X(X(X({},g),N8({values:t,family:p,styles:Wo,config:ue,canonical:g,givenPrefix:r})),P8(s,r,g))}function P8(t,e,n){var s=n.prefix,r=n.iconName;if(t||!s||!r)return{prefix:s,iconName:r};var i=e==="fa"?xb(r):{},o=_r(s,r);return r=i.iconName||o||r,s=i.prefix||s,s==="far"&&!Wo.far&&Wo.fas&&!ue.autoFetchSvg&&(s="fas"),{prefix:s,iconName:r}}var k8=lb.filter(function(t){return t!==Ot||t!==la}),D8=Object.keys(fh).filter(function(t){return t!==Ot}).map(function(t){return Object.keys(fh[t])}).flat();function N8(t){var e=t.values,n=t.family,s=t.canonical,r=t.givenPrefix,i=r===void 0?"":r,o=t.styles,l=o===void 0?{}:o,c=t.config,u=c===void 0?{}:c,d=n===la,p=e.includes("fa-duotone")||e.includes("fad"),g=u.familyDefault==="duotone",v=s.prefix==="fad"||s.prefix==="fa-duotone";if(!d&&(p||g||v)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&k8.includes(n)){var D=Object.keys(l).find(function(_){return D8.includes(_)});if(D||u.autoFetchSvg){var A=tL.get(n).defaultShortPrefixId;s.prefix=A,s.iconName=_r(s.prefix,s.iconName)||s.iconName}}return(s.prefix==="fa"||i==="fa")&&(s.prefix=tr()||"fas"),s}var x8=function(){function t(){SM(this,t),this.definitions={}}return CM(t,[{key:"add",value:function(){for(var n=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=X(X({},n.definitions[l]||{}),o[l]),Ab(l,o[l]),Nb()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,c=o.iconName,u=o.icon,d=u[2];n[l]||(n[l]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][c]=u}),n}}])}(),nv=[],ei={},hi={},O8=Object.keys(hi);function V8(t,e){var n=e.mixoutsTo;return nv=t,ei={},Object.keys(hi).forEach(function(s){O8.indexOf(s)===-1&&delete hi[s]}),nv.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ml(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(o){ei[o]||(ei[o]=[]),ei[o].push(i[o])})}s.provides&&s.provides(hi)}),n}function _h(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),r=2;r<n;r++)s[r-2]=arguments[r];var i=ei[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(s))}),e}function Dr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];var r=ei[t]||[];r.forEach(function(i){i.apply(null,n)})}function nr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return hi[t]?hi[t].apply(null,e):void 0}function bh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||tr();if(e)return e=_r(n,e)||e,Jg(Vb.definitions,n,e)||Jg(yn.styles,n,e)}var Vb=new x8,M8=function(){ue.autoReplaceSvg=!1,ue.observeMutations=!1,Dr("noAuto")},L8={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Es?(Dr("beforeI2svg",e),nr("pseudoElements2svg",e),nr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ue.autoReplaceSvg===!1&&(ue.autoReplaceSvg=!0),ue.observeMutations=!0,b8(function(){F8({autoReplaceSvgRoot:n}),Dr("watch",e)})}},$8={icon:function(e){if(e===null)return null;if(Ml(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_r(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=Ic(e[0]);return{prefix:s,iconName:_r(s,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ue.cssPrefix,"-"))>-1||e.match(r8))){var r=Ac(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||tr(),iconName:_r(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=tr();return{prefix:i,iconName:_r(i,e)||e}}}},Jt={noAuto:M8,config:ue,dom:L8,parse:$8,library:Vb,findIconDefinition:bh,toHtml:ua},F8=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,s=n===void 0?Ge:n;(Object.keys(yn.styles).length>0||ue.autoFetchSvg)&&Es&&ue.autoReplaceSvg&&Jt.dom.i2svg({node:s})};function Sc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(s){return ua(s)})}}),Object.defineProperty(t,"node",{get:function(){if(Es){var s=Ge.createElement("div");return s.innerHTML=t.html,s.children}}}),t}function U8(t){var e=t.children,n=t.main,s=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Yd(o)&&n.found&&!s.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};r.style=Tc(X(X({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function j8(t){var e=t.prefix,n=t.iconName,s=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(ue.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:X(X({},r),{},{id:o}),children:s}]}]}function B8(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Jd(t){var e=t.icons,n=e.main,s=e.mask,r=t.prefix,i=t.iconName,o=t.transform,l=t.symbol,c=t.maskId,u=t.extra,d=t.watchable,p=d===void 0?!1:d,g=s.found?s:n,v=g.width,D=g.height,A=[ue.replacementClass,i?"".concat(ue.cssPrefix,"-").concat(i):""].filter(function($){return u.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(u.classes).join(" "),_={children:[],attributes:X(X({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:A,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(D)})};!B8(u.attributes)&&!u.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),p&&(_.attributes[kr]="");var C=X(X({},_),{},{prefix:r,iconName:i,main:n,mask:s,maskId:c,transform:o,symbol:l,styles:X({},u.styles)}),R=s.found&&n.found?nr("generateAbstractMask",C)||{children:[],attributes:{}}:nr("generateAbstractIcon",C)||{children:[],attributes:{}},O=R.children,x=R.attributes;return C.children=O,C.attributes=x,l?j8(C):U8(C)}function sv(t){var e=t.content,n=t.width,s=t.height,r=t.transform,i=t.extra,o=t.watchable,l=o===void 0?!1:o,c=X(X({},i.attributes),{},{class:i.classes.join(" ")});l&&(c[kr]="");var u=X({},i.styles);Yd(r)&&(u.transform=v8({transform:r,width:n,height:s}),u["-webkit-transform"]=u.transform);var d=Tc(u);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),p}function z8(t){var e=t.content,n=t.extra,s=X(X({},n.attributes),{},{class:n.classes.join(" ")}),r=Tc(n.styles);r.length>0&&(s.style=r);var i=[];return i.push({tag:"span",attributes:s,children:[e]}),i}var Eu=yn.styles;function wh(t){var e=t[0],n=t[1],s=t.slice(4),r=Ec(s,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(ue.cssPrefix,"-").concat(_u.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(_u.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(_u.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var q8={found:!1,width:512,height:512};function H8(t,e){!mb&&!ue.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Eh(t,e){var n=e;return e==="fa"&&ue.styleDefault!==null&&(e=tr()),new Promise(function(s,r){if(n==="fa"){var i=xb(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Eu[e]&&Eu[e][t]){var o=Eu[e][t];return s(wh(o))}H8(t,e),s(X(X({},q8),{},{icon:ue.showMissingIcons&&t?nr("missingIconAbstract")||{}:{}}))})}var rv=function(){},Th=ue.measurePerformance&&Fa&&Fa.mark&&Fa.measure?Fa:{mark:rv,measure:rv},to='FA "7.0.0"',W8=function(e){return Th.mark("".concat(to," ").concat(e," begins")),function(){return Mb(e)}},Mb=function(e){Th.mark("".concat(to," ").concat(e," ends")),Th.measure("".concat(to," ").concat(e),"".concat(to," ").concat(e," begins"),"".concat(to," ").concat(e," ends"))},Zd={begin:W8,end:Mb},nl=function(){};function iv(t){var e=t.getAttribute?t.getAttribute(kr):null;return typeof e=="string"}function G8(t){var e=t.getAttribute?t.getAttribute(Wd):null,n=t.getAttribute?t.getAttribute(Gd):null;return e&&n}function K8(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ue.replacementClass)}function Y8(){if(ue.autoReplaceSvg===!0)return sl.replace;var t=sl[ue.autoReplaceSvg];return t||sl.replace}function Q8(t){return Ge.createElementNS("http://www.w3.org/2000/svg",t)}function X8(t){return Ge.createElement(t)}function Lb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,s=n===void 0?t.tag==="svg"?Q8:X8:n;if(typeof t=="string")return Ge.createTextNode(t);var r=s(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Lb(o,{ceFn:s}))}),r}function J8(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var sl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Lb(r),n)}),n.getAttribute(kr)===null&&ue.keepOriginalSource){var s=Ge.createComment(J8(n));n.parentNode.replaceChild(s,n)}else n.remove()},nest:function(e){var n=e[0],s=e[1];if(~Kd(n).indexOf(ue.replacementClass))return sl.replace(e);var r=new RegExp("".concat(ue.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(l,c){return c===ue.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=s.map(function(l){return ua(l)}).join(`
`);n.setAttribute(kr,""),n.innerHTML=o}};function ov(t){t()}function $b(t,e){var n=typeof e=="function"?e:nl;if(t.length===0)n();else{var s=ov;ue.mutateApproach===t8&&(s=er.requestAnimationFrame||ov),s(function(){var r=Y8(),i=Zd.begin("mutate");t.map(r),i(),n()})}}var ef=!1;function Fb(){ef=!0}function Ih(){ef=!1}var $l=null;function av(t){if(Hg&&ue.observeMutations){var e=t.treeCallback,n=e===void 0?nl:e,s=t.nodeCallback,r=s===void 0?nl:s,i=t.pseudoElementsCallback,o=i===void 0?nl:i,l=t.observeMutationsRoot,c=l===void 0?Ge:l;$l=new Hg(function(u){if(!ef){var d=tr();Pi(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!iv(p.addedNodes[0])&&(ue.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&ue.searchPseudoElements&&o([p.target],!0),p.type==="attributes"&&iv(p.target)&&~a8.indexOf(p.attributeName))if(p.attributeName==="class"&&G8(p.target)){var g=Ac(Kd(p.target)),v=g.prefix,D=g.iconName;p.target.setAttribute(Wd,v||d),D&&p.target.setAttribute(Gd,D)}else K8(p.target)&&r(p.target)})}}),Es&&$l.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Z8(){$l&&$l.disconnect()}function e7(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(s,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(s[o]=l.join(":").trim()),s},{})),n}function t7(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"",r=Ac(Kd(t));return r.prefix||(r.prefix=tr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=A8(r.prefix,t.innerText)||Xd(r.prefix,Ib(t.innerText))),!r.iconName&&ue.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function n7(t){var e=Pi(t.attributes).reduce(function(n,s){return n.name!=="class"&&n.name!=="style"&&(n[s.name]=s.value),n},{});return e}function s7(){return{iconName:null,prefix:null,transform:On,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=t7(t),s=n.iconName,r=n.prefix,i=n.rest,o=n7(t),l=_h("parseNodeAttributes",{},t),c=e.styleParser?e7(t):[];return X({iconName:s,prefix:r,transform:On,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var r7=yn.styles;function Ub(t){var e=ue.autoReplaceSvg==="nest"?lv(t,{styleParser:!1}):lv(t);return~e.extra.classes.indexOf(yb)?nr("generateLayersText",t,e):nr("generateSvgReplacementMutation",t,e)}function i7(){return[].concat(In(cb),In(ub))}function cv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Es)return Promise.resolve();var n=Ge.documentElement.classList,s=function(p){return n.add("".concat(Kg,"-").concat(p))},r=function(p){return n.remove("".concat(Kg,"-").concat(p))},i=ue.autoFetchSvg?i7():K0.concat(Object.keys(r7));i.includes("fa")||i.push("fa");var o=[".".concat(yb,":not([").concat(kr,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(kr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Pi(t.querySelectorAll(o))}catch{}if(l.length>0)s("pending"),r("complete");else return Promise.resolve();var c=Zd.begin("onTree"),u=l.reduce(function(d,p){try{var g=Ub(p);g&&d.push(g)}catch(v){mb||v.name==="MissingIcon"&&console.error(v)}return d},[]);return new Promise(function(d,p){Promise.all(u).then(function(g){$b(g,function(){s("active"),s("complete"),r("pending"),typeof e=="function"&&e(),c(),d()})}).catch(function(g){c(),p(g)})})}function o7(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ub(t).then(function(n){n&&$b([n],e)})}function a7(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:bh(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:bh(r||{})),t(s,X(X({},n),{},{mask:r}))}}var l7=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.transform,r=s===void 0?On:s,i=n.symbol,o=i===void 0?!1:i,l=n.mask,c=l===void 0?null:l,u=n.maskId,d=u===void 0?null:u,p=n.classes,g=p===void 0?[]:p,v=n.attributes,D=v===void 0?{}:v,A=n.styles,_=A===void 0?{}:A;if(e){var C=e.prefix,R=e.iconName,O=e.icon;return Sc(X({type:"icon"},e),function(){return Dr("beforeDOMElementCreation",{iconDefinition:e,params:n}),Jd({icons:{main:wh(O),mask:c?wh(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:R,transform:X(X({},On),r),symbol:o,maskId:d,extra:{attributes:D,styles:_,classes:g}})})}},c7={mixout:function(){return{icon:a7(l7)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=cv,n.nodeCallback=o7,n}}},provides:function(e){e.i2svg=function(n){var s=n.node,r=s===void 0?Ge:s,i=n.callback,o=i===void 0?function(){}:i;return cv(r,o)},e.generateSvgReplacementMutation=function(n,s){var r=s.iconName,i=s.prefix,o=s.transform,l=s.symbol,c=s.mask,u=s.maskId,d=s.extra;return new Promise(function(p,g){Promise.all([Eh(r,i),c.iconName?Eh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var D=Ec(v,2),A=D[0],_=D[1];p([n,Jd({icons:{main:A,mask:_},prefix:i,iconName:r,transform:o,symbol:l,maskId:u,extra:d,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var s=n.children,r=n.attributes,i=n.main,o=n.transform,l=n.styles,c=Tc(l);c.length>0&&(r.style=c);var u;return Yd(o)&&(u=nr("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),s.push(u||i.icon),{children:s,attributes:r}}}},u7={mixout:function(){return{layer:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return Sc({type:"layer"},function(){Dr("beforeDOMElementCreation",{assembler:n,params:s});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(ue.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},h7={mixout:function(){return{counter:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};s.title;var r=s.classes,i=r===void 0?[]:r,o=s.attributes,l=o===void 0?{}:o,c=s.styles,u=c===void 0?{}:c;return Sc({type:"counter",content:n},function(){return Dr("beforeDOMElementCreation",{content:n,params:s}),z8({content:n.toString(),extra:{attributes:l,styles:u,classes:["".concat(ue.cssPrefix,"-layers-counter")].concat(In(i))}})})}}}},d7={mixout:function(){return{text:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?On:r,o=s.classes,l=o===void 0?[]:o,c=s.attributes,u=c===void 0?{}:c,d=s.styles,p=d===void 0?{}:d;return Sc({type:"text",content:n},function(){return Dr("beforeDOMElementCreation",{content:n,params:s}),sv({content:n,transform:X(X({},On),i),extra:{attributes:u,styles:p,classes:["".concat(ue.cssPrefix,"-layers-text")].concat(In(l))}})})}}},provides:function(e){e.generateLayersText=function(n,s){var r=s.transform,i=s.extra,o=null,l=null;if(W0){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return Promise.resolve([n,sv({content:n.innerHTML,width:o,height:l,transform:r,extra:i,watchable:!0})])}}},jb=new RegExp('"',"ug"),uv=[1105920,1112319],hv=X(X(X(X({},{FontAwesome:{normal:"fas",400:"fas"}}),eL),ZL),cL),Ah=Object.keys(hv).reduce(function(t,e){return t[e.toLowerCase()]=hv[e],t},{}),f7=Object.keys(Ah).reduce(function(t,e){var n=Ah[e];return t[e]=n[900]||In(Object.entries(n))[0][1],t},{});function p7(t){var e=t.replace(jb,"");return Ib(In(e)[0]||"")}function m7(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),s=n.replace(jb,""),r=s.codePointAt(0),i=r>=uv[0]&&r<=uv[1],o=s.length===2?s[0]===s[1]:!1;return i||o||e}function g7(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),r=isNaN(s)?"normal":s;return(Ah[n]||{})[r]||f7[n]}function dv(t,e){var n="".concat(e8).concat(e.replace(":","-"));return new Promise(function(s,r){if(t.getAttribute(n)!==null)return s();var i=Pi(t.children),o=i.filter(function(K){return K.getAttribute(mh)===e})[0],l=er.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),u=c.match(i8),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),s();if(u&&p!=="none"&&p!==""){var g=l.getPropertyValue("content"),v=g7(c,d),D=p7(g),A=u[0].startsWith("FontAwesome"),_=m7(l),C=Xd(v,D),R=C;if(A){var O=S8(D);O.iconName&&O.prefix&&(C=O.iconName,v=O.prefix)}if(C&&!_&&(!o||o.getAttribute(Wd)!==v||o.getAttribute(Gd)!==R)){t.setAttribute(n,R),o&&t.removeChild(o);var x=s7(),$=x.extra;$.attributes[mh]=e,Eh(C,v).then(function(K){var b=Jd(X(X({},x),{},{icons:{main:K,mask:Ob()},prefix:v,iconName:R,extra:$,watchable:!0})),w=Ge.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=b.map(function(E){return ua(E)}).join(`
`),t.removeAttribute(n),s()}).catch(r)}else s()}else s()})}function v7(t){return Promise.all([dv(t,"::before"),dv(t,"::after")])}function y7(t){return t.parentNode!==document.head&&!~n8.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(mh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var _7=function(e){return!!e&&pb.some(function(n){return e.includes(n)})},b7=function(e){if(!e)return[];for(var n=new Set,s=[e],r=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var v=l[o];s=s.flatMap(function(D){return D.split(v).map(function(A){return A.replace(/,\s*$/,"").trim()})})},o=0,l=r;o<l.length;o++)i();s=s.flatMap(function(g){return g.includes("(")?g:g.split(",").map(function(v){return v.trim()})});var c=tl(s),u;try{for(c.s();!(u=c.n()).done;){var d=u.value;if(_7(d)){var p=pb.reduce(function(g,v){return g.replace(v,"")},d);p!==""&&p!=="*"&&n.add(p)}}}catch(g){c.e(g)}finally{c.f()}return n};function fv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Es){var n;if(e)n=t;else if(ue.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var s=new Set,r=tl(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var l=tl(o.cssRules),c;try{for(l.s();!(c=l.n()).done;){var u=c.value,d=b7(u.selectorText),p=tl(d),g;try{for(p.s();!(g=p.n()).done;){var v=g.value;s.add(v)}}catch(A){p.e(A)}finally{p.f()}}}catch(A){l.e(A)}finally{l.f()}}catch(A){ue.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(A.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(A){r.e(A)}finally{r.f()}if(!s.size)return;var D=Array.from(s).join(", ");try{n=t.querySelectorAll(D)}catch{}}return new Promise(function(A,_){var C=Pi(n).filter(y7).map(v7),R=Zd.begin("searchPseudoElements");Fb(),Promise.all(C).then(function(){R(),Ih(),A()}).catch(function(){R(),Ih(),_()})})}}var w7={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fv,n}}},provides:function(e){e.pseudoElements2svg=function(n){var s=n.node,r=s===void 0?Ge:s;ue.searchPseudoElements&&fv(r)}}},pv=!1,E7={mixout:function(){return{dom:{unwatch:function(){Fb(),pv=!0}}}},hooks:function(){return{bootstrap:function(){av(_h("mutationObserverCallbacks",{}))},noAuto:function(){Z8()},watch:function(n){var s=n.observeMutationsRoot;pv?Ih():av(_h("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},mv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return s.flipX=!0,s;if(o&&l==="v")return s.flipY=!0,s;if(l=parseFloat(l),isNaN(l))return s;switch(o){case"grow":s.size=s.size+l;break;case"shrink":s.size=s.size-l;break;case"left":s.x=s.x-l;break;case"right":s.x=s.x+l;break;case"up":s.y=s.y-l;break;case"down":s.y=s.y+l;break;case"rotate":s.rotate=s.rotate+l;break}return s},n)},T7={mixout:function(){return{parse:{transform:function(n){return mv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,s){var r=s.getAttribute("data-fa-transform");return r&&(n.transform=mv(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var s=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(c," ").concat(u," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},v={outer:l,inner:p,path:g};return{tag:"g",attributes:X({},v.outer),children:[{tag:"g",attributes:X({},v.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:X(X({},s.icon.attributes),v.path)}]}]}}}},Tu={x:0,y:0,width:"100%",height:"100%"};function gv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function I7(t){return t.tag==="g"?t.children:[t]}var A7={hooks:function(){return{parseNodeAttributes:function(n,s){var r=s.getAttribute("data-fa-mask"),i=r?Ac(r.split(" ").map(function(o){return o.trim()})):Ob();return i.prefix||(i.prefix=tr()),n.mask=i,n.maskId=s.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var s=n.children,r=n.attributes,i=n.main,o=n.mask,l=n.maskId,c=n.transform,u=i.width,d=i.icon,p=o.width,g=o.icon,v=g8({transform:c,containerWidth:p,iconWidth:u}),D={tag:"rect",attributes:X(X({},Tu),{},{fill:"white"})},A=d.children?{children:d.children.map(gv)}:{},_={tag:"g",attributes:X({},v.inner),children:[gv(X({tag:d.tag,attributes:X(X({},d.attributes),v.path)},A))]},C={tag:"g",attributes:X({},v.outer),children:[_]},R="mask-".concat(l||Qg()),O="clip-".concat(l||Qg()),x={tag:"mask",attributes:X(X({},Tu),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,C]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:I7(g)},x]};return s.push($,{tag:"rect",attributes:X({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(R,")")},Tu)}),{children:s,attributes:r}}}},S7={provides:function(e){var n=!1;er.matchMedia&&(n=er.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:X(X({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=X(X({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:X(X({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:X(X({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:X(X({},o),{},{values:"1;0;1;1;0;1;"})}),s.push(l),s.push({tag:"path",attributes:X(X({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:X(X({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||s.push({tag:"path",attributes:X(X({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:X(X({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},R7={hooks:function(){return{parseNodeAttributes:function(n,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},C7=[_8,c7,u7,h7,d7,w7,E7,T7,A7,S7,R7];V8(C7,{mixoutsTo:Jt});Jt.noAuto;Jt.config;var Bb=Jt.library;Jt.dom;var Sh=Jt.parse;Jt.findIconDefinition;Jt.toHtml;var P7=Jt.icon;Jt.layer;Jt.text;Jt.counter;function St(t,e,n){return(e=x7(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,s)}return n}function ns(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?vv(Object(n),!0).forEach(function(s){St(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vv(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function k7(t,e){if(t==null)return{};var n,s,r=D7(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)n=i[s],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function D7(t,e){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(e.indexOf(s)!==-1)continue;n[s]=t[s]}return n}function N7(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function x7(t){var e=N7(t,"string");return typeof e=="symbol"?e:e+""}function Fl(t){"@babel/helpers - typeof";return Fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fl(t)}function Iu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?St({},t,e):{}}function O7(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},St(St(St(St(St(St(St(St(St(St(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),St(St(St(St(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}var V7=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zb={exports:{}};(function(t){(function(e){var n=function(C,R,O){if(!u(R)||p(R)||g(R)||v(R)||c(R))return R;var x,$=0,K=0;if(d(R))for(x=[],K=R.length;$<K;$++)x.push(n(C,R[$],O));else{x={};for(var b in R)Object.prototype.hasOwnProperty.call(R,b)&&(x[C(b,O)]=n(C,R[b],O))}return x},s=function(C,R){R=R||{};var O=R.separator||"_",x=R.split||/(?=[A-Z])/;return C.split(x).join(O)},r=function(C){return D(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(R,O){return O?O.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},i=function(C){var R=r(C);return R.substr(0,1).toUpperCase()+R.substr(1)},o=function(C,R){return s(C,R).toLowerCase()},l=Object.prototype.toString,c=function(C){return typeof C=="function"},u=function(C){return C===Object(C)},d=function(C){return l.call(C)=="[object Array]"},p=function(C){return l.call(C)=="[object Date]"},g=function(C){return l.call(C)=="[object RegExp]"},v=function(C){return l.call(C)=="[object Boolean]"},D=function(C){return C=C-0,C===C},A=function(C,R){var O=R&&"process"in R?R.process:R;return typeof O!="function"?C:function(x,$){return O(x,C,$)}},_={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(C,R){return n(A(r,R),C)},decamelizeKeys:function(C,R){return n(A(o,R),C,R)},pascalizeKeys:function(C,R){return n(A(i,R),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(V7)})(zb);var M7=zb.exports,L7=["class","style"];function $7(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),r=M7.camelize(n.slice(0,s)),i=n.slice(s+1).trim();return e[r]=i,e},{})}function F7(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(c){return qb(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,u){var d=t.attributes[u];switch(u){case"class":c.class=F7(d);break;case"style":c.style=$7(d);break;default:c.attrs[u]=d}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=k7(n,L7);return Jl(t.tag,ns(ns(ns({},e),{},{class:r.class,style:ns(ns({},r.style),o)},r.attrs),l),s)}var Hb=!1;try{Hb=!0}catch{}function U7(){if(!Hb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function yv(t){if(t&&Fl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Sh.icon)return Sh.icon(t);if(t===null)return null;if(Fl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var j7=jh({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,r=Pe(function(){return yv(e.icon)}),i=Pe(function(){return Iu("classes",O7(e))}),o=Pe(function(){return Iu("transform",typeof e.transform=="string"?Sh.transform(e.transform):e.transform)}),l=Pe(function(){return Iu("mask",yv(e.mask))}),c=Pe(function(){var d=ns(ns(ns(ns({},i.value),o.value),l.value),{},{symbol:e.symbol,maskId:e.maskId});return d.title=e.title,d.titleId=e.titleId,P7(r.value,d)});co(c,function(d){if(!d)return U7("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var u=Pe(function(){return c.value?qb(c.value.abstract[0],{},s):null});return function(){return u.value}}});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var B7={prefix:"fas",iconName:"truck",icon:[576,512,[128666,9951],"f0d1","M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},z7={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},q7={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},H7={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},W7=H7,G7={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},K7={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},Y7={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},Q7={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256a192 192 0 1 0 -384 0 192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},X7={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},J7=X7,Z7={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},e$={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},t$={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},n$=t$,s$={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z"]},r$={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},i$=r$,o$={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm84.4-299.3l-80 128c-4.2 6.7-11.4 10.9-19.3 11.3s-15.5-3.2-20.2-9.6l-48-64c-8-10.6-5.8-25.6 4.8-33.6s25.6-5.8 33.6 4.8l27 36 61.4-98.3c7-11.2 21.8-14.7 33.1-7.6s14.7 21.8 7.6 33.1z"]},a$=o$,l$={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},c$={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},u$={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]},h$={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},d$={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},f$={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var p$={prefix:"fab",iconName:"google",icon:[512,512,[],"f1a0","M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"]},m$={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},g$={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},v$={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},y$={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},_$={prefix:"fab",iconName:"spotify",icon:[512,512,[],"f1bc","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM356.7 372.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},b$={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};Bb.add(n$,u$,c$,h$,W7,q7,Z7,i$,J7,e$,s$,G7,Q7,z7,a$,Y7,d$,B7,l$,K7,f$);Bb.add(p$,_$,y$,g$,b$,v$,m$);const tf=LT(V6);tf.component("font-awesome-icon",j7);tf.use(j0);tf.mount("#app");
