(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},Kr=[],en=()=>{},ov=()=>!1,Lo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jl=t=>t.startsWith("onUpdate:"),je=Object.assign,Ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},av=Object.prototype.hasOwnProperty,we=(t,e)=>av.call(t,e),ne=Array.isArray,Xr=t=>fi(t)==="[object Map]",us=t=>fi(t)==="[object Set]",ju=t=>fi(t)==="[object Date]",le=t=>typeof t=="function",Me=t=>typeof t=="string",rn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Pd=t=>(Ce(t)||le(t))&&le(t.then)&&le(t.catch),Rd=Object.prototype.toString,fi=t=>Rd.call(t),lv=t=>fi(t).slice(8,-1),Od=t=>fi(t)==="[object Object]",Zl=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cv=/-(\w)/g,Pt=Fo(t=>t.replace(cv,(e,n)=>n?n.toUpperCase():"")),uv=/\B([A-Z])/g,Rr=Fo(t=>t.replace(uv,"-$1").toLowerCase()),$o=Fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ka=Fo(t=>t?`on${$o(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Xi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},lo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fv=t=>{const e=Me(t)?Number(t):NaN;return isNaN(e)?t:e};let Vu;const Uo=()=>Vu||(Vu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ec(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Me(r)?gv(r):ec(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(Me(t)||Ce(t))return t}const hv=/;(?![^(]*\))/g,dv=/:([^]+)/,pv=/\/\*[^]*?\*\//g;function gv(t){const e={};return t.replace(pv,"").split(hv).forEach(n=>{if(n){const r=n.split(dv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jo(t){let e="";if(Me(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=jo(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const mv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vv=Yl(mv);function xd(t){return!!t||t===""}function yv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=hi(t[r],e[r]);return n}function hi(t,e){if(t===e)return!0;let n=ju(t),r=ju(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?yv(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,o=Object.keys(e).length;if(s!==o)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!hi(t[a],e[a]))return!1}}return String(t)===String(e)}function tc(t,e){return t.findIndex(n=>hi(n,e))}const Nd=t=>!!(t&&t.__v_isRef===!0),Ge=t=>Me(t)?t:t==null?"":ne(t)||Ce(t)&&(t.toString===Rd||!le(t.toString))?Nd(t)?Ge(t.value):JSON.stringify(t,Dd,2):String(t),Dd=(t,e)=>Nd(e)?Dd(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],o)=>(n[Pa(r,o)+" =>"]=s,n),{})}:us(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pa(n))}:rn(e)?Pa(e):Ce(e)&&!ne(e)&&!Od(e)?String(e):e,Pa=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class _v{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){++this._on===1&&(this.prevScope=ht,ht=this)}off(){this._on>0&&--this._on===0&&(ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bv(){return ht}let ke;const Ra=new WeakSet;class Md{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ht&&ht.active&&ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),$d(this);const e=ke,n=Ut;ke=this,Ut=!0;try{return this.fn()}finally{Ud(this),ke=e,Ut=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ul(this)&&this.run()}get dirty(){return ul(this)}}let Ld=0,xs,Ns;function Fd(t,e=!1){if(t.flags|=8,e){t.next=Ns,Ns=t;return}t.next=xs,xs=t}function nc(){Ld++}function rc(){if(--Ld>0)return;if(Ns){let e=Ns;for(Ns=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;xs;){let e=xs;for(xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function $d(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ud(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),sc(r),wv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ul(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Js)||(t.globalVersion=Js,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ul(t))))return;t.flags|=2;const e=t.dep,n=ke,r=Ut;ke=t,Ut=!0;try{$d(t);const s=t.fn(t._value);(e.version===0||Kn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Ut=r,Ud(t),t.flags&=-3}}function sc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)sc(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ut=!0;const Vd=[];function bn(){Vd.push(Ut),Ut=!1}function wn(){const t=Vd.pop();Ut=t===void 0?!0:t}function Bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Js=0;class Iv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ic{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Ut||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Iv(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Bd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Js++,this.notify(e)}notify(e){nc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rc()}}}function Bd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Bd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const fl=new WeakMap,br=Symbol(""),hl=Symbol(""),Qs=Symbol("");function Qe(t,e,n){if(Ut&&ke){let r=fl.get(t);r||fl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ic),s.map=r,s.key=n),s.track()}}function dn(t,e,n,r,s,o){const a=fl.get(t);if(!a){Js++;return}const l=c=>{c&&c.trigger()};if(nc(),e==="clear")a.forEach(l);else{const c=ne(t),f=c&&Zl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Qs||!rn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(Qs)),e){case"add":c?f&&l(a.get("length")):(l(a.get(br)),Xr(t)&&l(a.get(hl)));break;case"delete":c||(l(a.get(br)),Xr(t)&&l(a.get(hl)));break;case"set":Xr(t)&&l(a.get(br));break}}rc()}function Vr(t){const e=_e(t);return e===t?e:(Qe(e,"iterate",Qs),kt(t)?e:e.map(We))}function Vo(t){return Qe(t=_e(t),"iterate",Qs),t}const Ev={__proto__:null,[Symbol.iterator](){return Oa(this,Symbol.iterator,We)},concat(...t){return Vr(this).concat(...t.map(e=>ne(e)?Vr(e):e))},entries(){return Oa(this,"entries",t=>(t[1]=We(t[1]),t))},every(t,e){return cn(this,"every",t,e,void 0,arguments)},filter(t,e){return cn(this,"filter",t,e,n=>n.map(We),arguments)},find(t,e){return cn(this,"find",t,e,We,arguments)},findIndex(t,e){return cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return cn(this,"findLast",t,e,We,arguments)},findLastIndex(t,e){return cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return xa(this,"includes",t)},indexOf(...t){return xa(this,"indexOf",t)},join(t){return Vr(this).join(t)},lastIndexOf(...t){return xa(this,"lastIndexOf",t)},map(t,e){return cn(this,"map",t,e,void 0,arguments)},pop(){return As(this,"pop")},push(...t){return As(this,"push",t)},reduce(t,...e){return zu(this,"reduce",t,e)},reduceRight(t,...e){return zu(this,"reduceRight",t,e)},shift(){return As(this,"shift")},some(t,e){return cn(this,"some",t,e,void 0,arguments)},splice(...t){return As(this,"splice",t)},toReversed(){return Vr(this).toReversed()},toSorted(t){return Vr(this).toSorted(t)},toSpliced(...t){return Vr(this).toSpliced(...t)},unshift(...t){return As(this,"unshift",t)},values(){return Oa(this,"values",We)}};function Oa(t,e,n){const r=Vo(t),s=r[e]();return r!==t&&!kt(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Sv=Array.prototype;function cn(t,e,n,r,s,o){const a=Vo(t),l=a!==t&&!kt(t),c=a[e];if(c!==Sv[e]){const p=c.apply(t,o);return l?We(p):p}let f=n;a!==t&&(l?f=function(p,m){return n.call(this,We(p),m,t)}:n.length>2&&(f=function(p,m){return n.call(this,p,m,t)}));const d=c.call(a,f,r);return l&&s?s(d):d}function zu(t,e,n,r){const s=Vo(t);let o=n;return s!==t&&(kt(t)?n.length>3&&(o=function(a,l,c){return n.call(this,a,l,c,t)}):o=function(a,l,c){return n.call(this,a,We(l),c,t)}),s[e](o,...r)}function xa(t,e,n){const r=_e(t);Qe(r,"iterate",Qs);const s=r[e](...n);return(s===-1||s===!1)&&lc(n[0])?(n[0]=_e(n[0]),r[e](...n)):s}function As(t,e,n=[]){bn(),nc();const r=_e(t)[e].apply(t,n);return rc(),wn(),r}const Tv=Yl("__proto__,__v_isRef,__isVue"),zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn));function Av(t){rn(t)||(t=String(t));const e=_e(this);return Qe(e,"has",t),e.hasOwnProperty(t)}class Hd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Lv:Kd:o?qd:Gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ne(e);if(!s){let c;if(a&&(c=Ev[n]))return c;if(n==="hasOwnProperty")return Av}const l=Reflect.get(e,n,tt(e)?e:r);return(rn(n)?zd.has(n):Tv(n))||(s||Qe(e,"get",n),o)?l:tt(l)?a&&Zl(n)?l:l.value:Ce(l)?s?Yd(l):Bo(l):l}}class Wd extends Hd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let o=e[n];if(!this._isShallow){const c=Qn(o);if(!kt(r)&&!Qn(r)&&(o=_e(o),r=_e(r)),!ne(e)&&tt(o)&&!tt(r))return c?!1:(o.value=r,!0)}const a=ne(e)&&Zl(n)?Number(n)<e.length:we(e,n),l=Reflect.set(e,n,r,tt(e)?e:s);return e===_e(s)&&(a?Kn(r,o)&&dn(e,"set",n,r):dn(e,"add",n,r)),l}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!zd.has(n))&&Qe(e,"has",n),r}ownKeys(e){return Qe(e,"iterate",ne(e)?"length":br),Reflect.ownKeys(e)}}class Cv extends Hd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kv=new Wd,Pv=new Cv,Rv=new Wd(!0);const dl=t=>t,Ui=t=>Reflect.getPrototypeOf(t);function Ov(t,e,n){return function(...r){const s=this.__v_raw,o=_e(s),a=Xr(o),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,f=s[t](...r),d=n?dl:e?co:We;return!e&&Qe(o,"iterate",c?hl:br),{next(){const{value:p,done:m}=f.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function ji(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xv(t,e){const n={get(s){const o=this.__v_raw,a=_e(o),l=_e(s);t||(Kn(s,l)&&Qe(a,"get",s),Qe(a,"get",l));const{has:c}=Ui(a),f=e?dl:t?co:We;if(c.call(a,s))return f(o.get(s));if(c.call(a,l))return f(o.get(l));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&Qe(_e(s),"iterate",br),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=_e(o),l=_e(s);return t||(Kn(s,l)&&Qe(a,"has",s),Qe(a,"has",l)),s===l?o.has(s):o.has(s)||o.has(l)},forEach(s,o){const a=this,l=a.__v_raw,c=_e(l),f=e?dl:t?co:We;return!t&&Qe(c,"iterate",br),l.forEach((d,p)=>s.call(o,f(d),f(p),a))}};return je(n,t?{add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear")}:{add(s){!e&&!kt(s)&&!Qn(s)&&(s=_e(s));const o=_e(this);return Ui(o).has.call(o,s)||(o.add(s),dn(o,"add",s,s)),this},set(s,o){!e&&!kt(o)&&!Qn(o)&&(o=_e(o));const a=_e(this),{has:l,get:c}=Ui(a);let f=l.call(a,s);f||(s=_e(s),f=l.call(a,s));const d=c.call(a,s);return a.set(s,o),f?Kn(o,d)&&dn(a,"set",s,o):dn(a,"add",s,o),this},delete(s){const o=_e(this),{has:a,get:l}=Ui(o);let c=a.call(o,s);c||(s=_e(s),c=a.call(o,s)),l&&l.call(o,s);const f=o.delete(s);return c&&dn(o,"delete",s,void 0),f},clear(){const s=_e(this),o=s.size!==0,a=s.clear();return o&&dn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ov(s,t,e)}),n}function oc(t,e){const n=xv(t,e);return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,o)}const Nv={get:oc(!1,!1)},Dv={get:oc(!1,!0)},Mv={get:oc(!0,!1)};const Gd=new WeakMap,qd=new WeakMap,Kd=new WeakMap,Lv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $v(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(lv(t))}function Bo(t){return Qn(t)?t:ac(t,!1,kv,Nv,Gd)}function Xd(t){return ac(t,!1,Rv,Dv,qd)}function Yd(t){return ac(t,!0,Pv,Mv,Kd)}function ac(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=$v(t);if(o===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Yr(t){return Qn(t)?Yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Qn(t){return!!(t&&t.__v_isReadonly)}function kt(t){return!!(t&&t.__v_isShallow)}function lc(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function Uv(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&cl(t,"__v_skip",!0),t}const We=t=>Ce(t)?Bo(t):t,co=t=>Ce(t)?Yd(t):t;function tt(t){return t?t.__v_isRef===!0:!1}function ct(t){return Jd(t,!1)}function jv(t){return Jd(t,!0)}function Jd(t,e){return tt(t)?t:new Vv(t,e)}class Vv{constructor(e,n){this.dep=new ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:We(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||kt(e)||Qn(e);e=r?e:_e(e),Kn(e,n)&&(this._rawValue=e,this._value=r?e:We(e),this.dep.trigger())}}function Xn(t){return tt(t)?t.value:t}const Bv={get:(t,e,n)=>e==="__v_raw"?t:Xn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qd(t){return Yr(t)?t:new Proxy(t,Bv)}class zv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hv(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new zv(r,s,n)}const Vi={},uo=new WeakMap;let dr;function Wv(t,e=!1,n=dr){if(n){let r=uo.get(n);r||uo.set(n,r=[]),r.push(t)}}function Gv(t,e,n=Ae){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:l,call:c}=n,f=V=>s?V:kt(V)||s===!1||s===0?pn(V,1):pn(V);let d,p,m,w,R=!1,N=!1;if(tt(t)?(p=()=>t.value,R=kt(t)):Yr(t)?(p=()=>f(t),R=!0):ne(t)?(N=!0,R=t.some(V=>Yr(V)||kt(V)),p=()=>t.map(V=>{if(tt(V))return V.value;if(Yr(V))return f(V);if(le(V))return c?c(V,2):V()})):le(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){bn();try{m()}finally{wn()}}const V=dr;dr=d;try{return c?c(t,3,[w]):t(w)}finally{dr=V}}:p=en,e&&s){const V=p,Q=s===!0?1/0:s;p=()=>pn(V(),Q)}const F=bv(),O=()=>{d.stop(),F&&F.active&&Ql(F.effects,d)};if(o&&e){const V=e;e=(...Q)=>{V(...Q),O()}}let D=N?new Array(t.length).fill(Vi):Vi;const j=V=>{if(!(!(d.flags&1)||!d.dirty&&!V))if(e){const Q=d.run();if(s||R||(N?Q.some((se,A)=>Kn(se,D[A])):Kn(Q,D))){m&&m();const se=dr;dr=d;try{const A=[Q,D===Vi?void 0:N&&D[0]===Vi?[]:D,w];D=Q,c?c(e,3,A):e(...A)}finally{dr=se}}}else d.run()};return l&&l(j),d=new Md(p),d.scheduler=a?()=>a(j,!1):j,w=V=>Wv(V,!1,d),m=d.onStop=()=>{const V=uo.get(d);if(V){if(c)c(V,4);else for(const Q of V)Q();uo.delete(d)}},e?r?j(!0):D=d.run():a?a(j.bind(null,!0),!0):d.run(),O.pause=d.pause.bind(d),O.resume=d.resume.bind(d),O.stop=O,O}function pn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,tt(t))pn(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)pn(t[r],e,n);else if(us(t)||Xr(t))t.forEach(r=>{pn(r,e,n)});else if(Od(t)){for(const r in t)pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(t,e,n,r){try{return r?t(...r):t()}catch(s){zo(s,e,n)}}function Vt(t,e,n,r){if(le(t)){const s=di(t,e,n,r);return s&&Pd(s)&&s.catch(o=>{zo(o,e,n)}),s}if(ne(t)){const s=[];for(let o=0;o<t.length;o++)s.push(Vt(t[o],e,n,r));return s}}function zo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let l=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,f)===!1)return}l=l.parent}if(o){bn(),di(o,null,10,[t,c,f]),wn();return}}qv(t,n,s,r,a)}function qv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const at=[];let qt=-1;const Jr=[];let $n=null,zr=0;const Zd=Promise.resolve();let fo=null;function cc(t){const e=fo||Zd;return t?e.then(this?t.bind(this):t):e}function Kv(t){let e=qt+1,n=at.length;for(;e<n;){const r=e+n>>>1,s=at[r],o=Zs(s);o<t||o===t&&s.flags&2?e=r+1:n=r}return e}function uc(t){if(!(t.flags&1)){const e=Zs(t),n=at[at.length-1];!n||!(t.flags&2)&&e>=Zs(n)?at.push(t):at.splice(Kv(e),0,t),t.flags|=1,ep()}}function ep(){fo||(fo=Zd.then(np))}function Xv(t){ne(t)?Jr.push(...t):$n&&t.id===-1?$n.splice(zr+1,0,t):t.flags&1||(Jr.push(t),t.flags|=1),ep()}function Hu(t,e,n=qt+1){for(;n<at.length;n++){const r=at[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;at.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function tp(t){if(Jr.length){const e=[...new Set(Jr)].sort((n,r)=>Zs(n)-Zs(r));if(Jr.length=0,$n){$n.push(...e);return}for($n=e,zr=0;zr<$n.length;zr++){const n=$n[zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$n=null,zr=0}}const Zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function np(t){try{for(qt=0;qt<at.length;qt++){const e=at[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),di(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<at.length;qt++){const e=at[qt];e&&(e.flags&=-2)}qt=-1,at.length=0,tp(),fo=null,(at.length||Jr.length)&&np()}}let vt=null,rp=null;function ho(t){const e=vt;return vt=t,rp=t&&t.type.__scopeId||null,e}function Jt(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&tf(-1);const o=ho(e);let a;try{a=t(...s)}finally{ho(o),r._d&&tf(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Je(t,e){if(vt===null)return t;const n=Xo(vt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ae]=e[s];o&&(le(o)&&(o={mounted:o,updated:o}),o.deep&&pn(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function cr(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];o&&(l.oldValue=o[a].value);let c=l.dir[r];c&&(bn(),Vt(c,n,8,[t.el,l,t,e]),wn())}}const Yv=Symbol("_vte"),sp=t=>t.__isTeleport,Un=Symbol("_leaveCb"),Bi=Symbol("_enterCb");function Jv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Go(()=>{t.isMounted=!0}),hp(()=>{t.isUnmounting=!0}),t}const At=[Function,Array],ip={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At},op=t=>{const e=t.subTree;return e.component?op(e.component):e},Qv={name:"BaseTransition",props:ip,setup(t,{slots:e}){const n=Lp(),r=Jv();return()=>{const s=e.default&&cp(e.default(),!0);if(!s||!s.length)return;const o=ap(s),a=_e(t),{mode:l}=a;if(r.isLeaving)return Na(o);const c=Wu(o);if(!c)return Na(o);let f=pl(c,a,r,n,p=>f=p);c.type!==lt&&ei(c,f);let d=n.subTree&&Wu(n.subTree);if(d&&d.type!==lt&&!gr(c,d)&&op(n).type!==lt){let p=pl(d,a,r,n);if(ei(d,p),l==="out-in"&&c.type!==lt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Na(o);l==="in-out"&&c.type!==lt?p.delayLeave=(m,w,R)=>{const N=lp(r,d);N[String(d.key)]=d,m[Un]=()=>{w(),m[Un]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{R(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function ap(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==lt){e=n;break}}return e}const Zv=Qv;function lp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function pl(t,e,n,r,s){const{appear:o,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:f,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:w,onAfterLeave:R,onLeaveCancelled:N,onBeforeAppear:F,onAppear:O,onAfterAppear:D,onAppearCancelled:j}=e,V=String(t.key),Q=lp(n,t),se=(y,T)=>{y&&Vt(y,r,9,T)},A=(y,T)=>{const C=T[1];se(y,T),ne(y)?y.every(S=>S.length<=1)&&C():y.length<=1&&C()},v={mode:a,persisted:l,beforeEnter(y){let T=c;if(!n.isMounted)if(o)T=F||c;else return;y[Un]&&y[Un](!0);const C=Q[V];C&&gr(t,C)&&C.el[Un]&&C.el[Un](),se(T,[y])},enter(y){let T=f,C=d,S=p;if(!n.isMounted)if(o)T=O||f,C=D||d,S=j||p;else return;let b=!1;const Ee=y[Bi]=$e=>{b||(b=!0,$e?se(S,[y]):se(C,[y]),v.delayedLeave&&v.delayedLeave(),y[Bi]=void 0)};T?A(T,[y,Ee]):Ee()},leave(y,T){const C=String(t.key);if(y[Bi]&&y[Bi](!0),n.isUnmounting)return T();se(m,[y]);let S=!1;const b=y[Un]=Ee=>{S||(S=!0,T(),Ee?se(N,[y]):se(R,[y]),y[Un]=void 0,Q[C]===t&&delete Q[C])};Q[C]=t,w?A(w,[y,b]):b()},clone(y){const T=pl(y,e,n,r,s);return s&&s(T),T}};return v}function Na(t){if(Ho(t))return t=er(t),t.children=null,t}function Wu(t){if(!Ho(t))return sp(t.type)&&t.children?ap(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&le(n.default))return n.default()}}function ei(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ei(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cp(t,e=!1,n){let r=[],s=0;for(let o=0;o<t.length;o++){let a=t[o];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===Ze?(a.patchFlag&128&&s++,r=r.concat(cp(a.children,e,l))):(e||a.type!==lt)&&r.push(l!=null?er(a,{key:l}):a)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function fc(t,e){return le(t)?je({name:t.name},e,{setup:t}):t}function up(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ds(t,e,n,r,s=!1){if(ne(t)){t.forEach((R,N)=>Ds(R,e&&(ne(e)?e[N]:e),n,r,s));return}if(Ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ds(t,e,n,r.component.subTree);return}const o=r.shapeFlag&4?Xo(r.component):r.el,a=s?null:o,{i:l,r:c}=t,f=e&&e.r,d=l.refs===Ae?l.refs={}:l.refs,p=l.setupState,m=_e(p),w=p===Ae?()=>!1:R=>we(m,R);if(f!=null&&f!==c&&(Me(f)?(d[f]=null,w(f)&&(p[f]=null)):tt(f)&&(f.value=null)),le(c))di(c,l,12,[a,d]);else{const R=Me(c),N=tt(c);if(R||N){const F=()=>{if(t.f){const O=R?w(c)?p[c]:d[c]:c.value;s?ne(O)&&Ql(O,o):ne(O)?O.includes(o)||O.push(o):R?(d[c]=[o],w(c)&&(p[c]=d[c])):(c.value=[o],t.k&&(d[t.k]=c.value))}else R?(d[c]=a,w(c)&&(p[c]=a)):N&&(c.value=a,t.k&&(d[t.k]=a))};a?(F.id=-1,mt(F,n)):F()}}}Uo().requestIdleCallback;Uo().cancelIdleCallback;const Ms=t=>!!t.type.__asyncLoader,Ho=t=>t.type.__isKeepAlive;function ey(t,e){fp(t,"a",e)}function ty(t,e){fp(t,"da",e)}function fp(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ho(s.parent.vnode)&&ny(r,e,n,s),s=s.parent}}function ny(t,e,n,r){const s=Wo(e,t,r,!0);dp(()=>{Ql(r[e],s)},n)}function Wo(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{bn();const l=pi(n),c=Vt(e,n,t,a);return l(),wn(),c});return r?s.unshift(o):s.push(o),o}}const Cn=t=>(e,n=et)=>{(!ni||t==="sp")&&Wo(t,(...r)=>e(...r),n)},ry=Cn("bm"),Go=Cn("m"),sy=Cn("bu"),iy=Cn("u"),hp=Cn("bum"),dp=Cn("um"),oy=Cn("sp"),ay=Cn("rtg"),ly=Cn("rtc");function cy(t,e=et){Wo("ec",t,e)}const pp="components";function Zn(t,e){return mp(pp,t,!0,e)||t}const gp=Symbol.for("v-ndc");function uy(t){return Me(t)?mp(pp,t,!1)||t:t||gp}function mp(t,e,n=!0,r=!1){const s=vt||et;if(s){const o=s.type;{const l=Yy(o,!1);if(l&&(l===e||l===Pt(e)||l===$o(Pt(e))))return o}const a=Gu(s[t]||o[t],e)||Gu(s.appContext[t],e);return!a&&r?o:a}}function Gu(t,e){return t&&(t[e]||t[Pt(e)]||t[$o(Pt(e))])}function po(t,e,n,r){let s;const o=n,a=ne(t);if(a||Me(t)){const l=a&&Yr(t);let c=!1,f=!1;l&&(c=!kt(t),f=Qn(t),t=Vo(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?f?co(We(t[d])):We(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,o)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,o));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const d=l[c];s[c]=e(t[d],d,c,o)}}else s=[];return s}const gl=t=>t?Fp(t)?Xo(t):gl(t.parent):null,Ls=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gl(t.parent),$root:t=>gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yp(t),$forceUpdate:t=>t.f||(t.f=()=>{uc(t.update)}),$nextTick:t=>t.n||(t.n=cc.bind(t.proxy)),$watch:t=>Oy.bind(t)}),Da=(t,e)=>t!==Ae&&!t.__isScriptSetup&&we(t,e),fy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:l,appContext:c}=t;let f;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(Da(r,e))return a[e]=1,r[e];if(s!==Ae&&we(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&we(f,e))return a[e]=3,o[e];if(n!==Ae&&we(n,e))return a[e]=4,n[e];ml&&(a[e]=0)}}const d=Ls[e];let p,m;if(d)return e==="$attrs"&&Qe(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ae&&we(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,we(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Da(s,e)?(s[e]=n,!0):r!==Ae&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||t!==Ae&&we(t,a)||Da(e,a)||(l=o[0])&&we(l,a)||we(r,a)||we(Ls,a)||we(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qu(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ml=!0;function hy(t){const e=yp(t),n=t.proxy,r=t.ctx;ml=!1,e.beforeCreate&&Ku(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:p,mounted:m,beforeUpdate:w,updated:R,activated:N,deactivated:F,beforeDestroy:O,beforeUnmount:D,destroyed:j,unmounted:V,render:Q,renderTracked:se,renderTriggered:A,errorCaptured:v,serverPrefetch:y,expose:T,inheritAttrs:C,components:S,directives:b,filters:Ee}=e;if(f&&dy(f,r,null),a)for(const he in a){const ue=a[he];le(ue)&&(r[he]=ue.bind(n))}if(s){const he=s.call(n,n);Ce(he)&&(t.data=Bo(he))}if(ml=!0,o)for(const he in o){const ue=o[he],gt=le(ue)?ue.bind(n,n):le(ue.get)?ue.get.bind(n,n):en,xt=!le(ue)&&le(ue.set)?ue.set.bind(n):en,It=Ue({get:gt,set:xt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>It.value,set:xe=>It.value=xe})}if(l)for(const he in l)vp(l[he],r,n,he);if(c){const he=le(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ue=>{Fs(ue,he[ue])})}d&&Ku(d,t,"c");function Oe(he,ue){ne(ue)?ue.forEach(gt=>he(gt.bind(n))):ue&&he(ue.bind(n))}if(Oe(ry,p),Oe(Go,m),Oe(sy,w),Oe(iy,R),Oe(ey,N),Oe(ty,F),Oe(cy,v),Oe(ly,se),Oe(ay,A),Oe(hp,D),Oe(dp,V),Oe(oy,y),ne(T))if(T.length){const he=t.exposed||(t.exposed={});T.forEach(ue=>{Object.defineProperty(he,ue,{get:()=>n[ue],set:gt=>n[ue]=gt,enumerable:!0})})}else t.exposed||(t.exposed={});Q&&t.render===en&&(t.render=Q),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),b&&(t.directives=b),y&&up(t)}function dy(t,e,n=en){ne(t)&&(t=vl(t));for(const r in t){const s=t[r];let o;Ce(s)?"default"in s?o=jt(s.from||r,s.default,!0):o=jt(s.from||r):o=jt(s),tt(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ku(t,e,n){Vt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function vp(t,e,n,r){let s=r.includes(".")?Op(n,r):()=>n[r];if(Me(t)){const o=e[t];le(o)&&$s(s,o)}else if(le(t))$s(s,t.bind(n));else if(Ce(t))if(ne(t))t.forEach(o=>vp(o,e,n,r));else{const o=le(t.handler)?t.handler.bind(n):e[t.handler];le(o)&&$s(s,o,t)}}function yp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>go(c,f,a,!0)),go(c,e,a)),Ce(e)&&o.set(e,c),c}function go(t,e,n,r=!1){const{mixins:s,extends:o}=e;o&&go(t,o,n,!0),s&&s.forEach(a=>go(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=py[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const py={data:Xu,props:Yu,emits:Yu,methods:Ps,computed:Ps,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Ps,directives:Ps,watch:my,provide:Xu,inject:gy};function Xu(t,e){return e?t?function(){return je(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function gy(t,e){return Ps(vl(t),vl(e))}function vl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?je(Object.create(null),t,e):e}function Yu(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:je(Object.create(null),qu(t),qu(e??{})):e}function my(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function _p(){return{app:null,config:{isNativeTag:ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vy=0;function yy(t,e){return function(r,s=null){le(r)||(r=je({},r)),s!=null&&!Ce(s)&&(s=null);const o=_p(),a=new WeakSet,l=[];let c=!1;const f=o.app={_uid:vy++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Qy,get config(){return o.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(f,...p)):le(d)&&(a.add(d),d(f,...p))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,p){return p?(o.components[d]=p,f):o.components[d]},directive(d,p){return p?(o.directives[d]=p,f):o.directives[d]},mount(d,p,m){if(!c){const w=f._ceVNode||ae(r,s);return w.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),t(w,d,m),c=!0,f._container=d,d.__vue_app__=f,Xo(w.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Vt(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,p){return o.provides[d]=p,f},runWithContext(d){const p=Qr;Qr=f;try{return d()}finally{Qr=p}}};return f}}let Qr=null;function Fs(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=Lp();if(r||Qr){let s=Qr?Qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}const bp={},wp=()=>Object.create(bp),Ip=t=>Object.getPrototypeOf(t)===bp;function _y(t,e,n,r=!1){const s={},o=wp();t.propsDefaults=Object.create(null),Ep(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Xd(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function by(t,e,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,l=_e(s),[c]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(qo(t.emitsOptions,m))continue;const w=e[m];if(c)if(we(o,m))w!==o[m]&&(o[m]=w,f=!0);else{const R=Pt(m);s[R]=yl(c,l,R,w,t,!1)}else w!==o[m]&&(o[m]=w,f=!0)}}}else{Ep(t,e,s,o)&&(f=!0);let d;for(const p in l)(!e||!we(e,p)&&((d=Rr(p))===p||!we(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=yl(c,l,p,void 0,t,!0)):delete s[p]);if(o!==l)for(const p in o)(!e||!we(e,p))&&(delete o[p],f=!0)}f&&dn(t.attrs,"set","")}function Ep(t,e,n,r){const[s,o]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Os(c))continue;const f=e[c];let d;s&&we(s,d=Pt(c))?!o||!o.includes(d)?n[d]=f:(l||(l={}))[d]=f:qo(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(o){const c=_e(n),f=l||Ae;for(let d=0;d<o.length;d++){const p=o[d];n[p]=yl(s,c,p,f[p],t,!we(f,p))}}return a}function yl(t,e,n,r,s,o){const a=t[n];if(a!=null){const l=we(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&le(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=pi(s);r=f[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!l?r=!1:a[1]&&(r===""||r===Rr(n))&&(r=!0))}return r}const wy=new WeakMap;function Sp(t,e,n=!1){const r=n?wy:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},l=[];let c=!1;if(!le(t)){const d=p=>{c=!0;const[m,w]=Sp(p,e,!0);je(a,m),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!c)return Ce(t)&&r.set(t,Kr),Kr;if(ne(o))for(let d=0;d<o.length;d++){const p=Pt(o[d]);Ju(p)&&(a[p]=Ae)}else if(o)for(const d in o){const p=Pt(d);if(Ju(p)){const m=o[d],w=a[p]=ne(m)||le(m)?{type:m}:je({},m),R=w.type;let N=!1,F=!0;if(ne(R))for(let O=0;O<R.length;++O){const D=R[O],j=le(D)&&D.name;if(j==="Boolean"){N=!0;break}else j==="String"&&(F=!1)}else N=le(R)&&R.name==="Boolean";w[0]=N,w[1]=F,(N||we(w,"default"))&&l.push(p)}}const f=[a,l];return Ce(t)&&r.set(t,f),f}function Ju(t){return t[0]!=="$"&&!Os(t)}const hc=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",dc=t=>ne(t)?t.map(Xt):[Xt(t)],Iy=(t,e,n)=>{if(e._n)return e;const r=Jt((...s)=>dc(e(...s)),n);return r._c=!1,r},Tp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hc(s))continue;const o=t[s];if(le(o))e[s]=Iy(s,o,r);else if(o!=null){const a=dc(o);e[s]=()=>a}}},Ap=(t,e)=>{const n=dc(e);t.slots.default=()=>n},Cp=(t,e,n)=>{for(const r in e)(n||!hc(r))&&(t[r]=e[r])},Ey=(t,e,n)=>{const r=t.slots=wp();if(t.vnode.shapeFlag&32){const s=e.__;s&&cl(r,"__",s,!0);const o=e._;o?(Cp(r,e,n),n&&cl(r,"_",o,!0)):Tp(e,r)}else e&&Ap(t,e)},Sy=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=Ae;if(r.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:Cp(s,e,n):(o=!e.$stable,Tp(e,s)),a=e}else e&&(Ap(t,e),a={default:1});if(o)for(const l in s)!hc(l)&&a[l]==null&&delete s[l]},mt=$y;function Ty(t){return Ay(t)}function Ay(t,e){const n=Uo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:p,nextSibling:m,setScopeId:w=en,insertStaticContent:R}=t,N=(_,I,k,L=null,U=null,$=null,K=void 0,W=null,H=!!I.dynamicChildren)=>{if(_===I)return;_&&!gr(_,I)&&(L=M(_),xe(_,U,$,!0),_=null),I.patchFlag===-2&&(H=!1,I.dynamicChildren=null);const{type:B,ref:ee,shapeFlag:q}=I;switch(B){case Ko:F(_,I,k,L);break;case lt:O(_,I,k,L);break;case Yi:_==null&&D(I,k,L,K);break;case Ze:S(_,I,k,L,U,$,K,W,H);break;default:q&1?Q(_,I,k,L,U,$,K,W,H):q&6?b(_,I,k,L,U,$,K,W,H):(q&64||q&128)&&B.process(_,I,k,L,U,$,K,W,H,J)}ee!=null&&U?Ds(ee,_&&_.ref,$,I||_,!I):ee==null&&_&&_.ref!=null&&Ds(_.ref,null,$,_,!0)},F=(_,I,k,L)=>{if(_==null)r(I.el=l(I.children),k,L);else{const U=I.el=_.el;I.children!==_.children&&f(U,I.children)}},O=(_,I,k,L)=>{_==null?r(I.el=c(I.children||""),k,L):I.el=_.el},D=(_,I,k,L)=>{[_.el,_.anchor]=R(_.children,I,k,L,_.el,_.anchor)},j=({el:_,anchor:I},k,L)=>{let U;for(;_&&_!==I;)U=m(_),r(_,k,L),_=U;r(I,k,L)},V=({el:_,anchor:I})=>{let k;for(;_&&_!==I;)k=m(_),s(_),_=k;s(I)},Q=(_,I,k,L,U,$,K,W,H)=>{I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),_==null?se(I,k,L,U,$,K,W,H):y(_,I,U,$,K,W,H)},se=(_,I,k,L,U,$,K,W)=>{let H,B;const{props:ee,shapeFlag:q,transition:Z,dirs:ie}=_;if(H=_.el=a(_.type,$,ee&&ee.is,ee),q&8?d(H,_.children):q&16&&v(_.children,H,null,L,U,Ma(_,$),K,W),ie&&cr(_,null,L,"created"),A(H,_,_.scopeId,K,L),ee){for(const ce in ee)ce!=="value"&&!Os(ce)&&o(H,ce,null,ee[ce],$,L);"value"in ee&&o(H,"value",null,ee.value,$),(B=ee.onVnodeBeforeMount)&&Gt(B,L,_)}ie&&cr(_,null,L,"beforeMount");const re=Cy(U,Z);re&&Z.beforeEnter(H),r(H,I,k),((B=ee&&ee.onVnodeMounted)||re||ie)&&mt(()=>{B&&Gt(B,L,_),re&&Z.enter(H),ie&&cr(_,null,L,"mounted")},U)},A=(_,I,k,L,U)=>{if(k&&w(_,k),L)for(let $=0;$<L.length;$++)w(_,L[$]);if(U){let $=U.subTree;if(I===$||Np($.type)&&($.ssContent===I||$.ssFallback===I)){const K=U.vnode;A(_,K,K.scopeId,K.slotScopeIds,U.parent)}}},v=(_,I,k,L,U,$,K,W,H=0)=>{for(let B=H;B<_.length;B++){const ee=_[B]=W?jn(_[B]):Xt(_[B]);N(null,ee,I,k,L,U,$,K,W)}},y=(_,I,k,L,U,$,K)=>{const W=I.el=_.el;let{patchFlag:H,dynamicChildren:B,dirs:ee}=I;H|=_.patchFlag&16;const q=_.props||Ae,Z=I.props||Ae;let ie;if(k&&ur(k,!1),(ie=Z.onVnodeBeforeUpdate)&&Gt(ie,k,I,_),ee&&cr(I,_,k,"beforeUpdate"),k&&ur(k,!0),(q.innerHTML&&Z.innerHTML==null||q.textContent&&Z.textContent==null)&&d(W,""),B?T(_.dynamicChildren,B,W,k,L,Ma(I,U),$):K||ue(_,I,W,null,k,L,Ma(I,U),$,!1),H>0){if(H&16)C(W,q,Z,k,U);else if(H&2&&q.class!==Z.class&&o(W,"class",null,Z.class,U),H&4&&o(W,"style",q.style,Z.style,U),H&8){const re=I.dynamicProps;for(let ce=0;ce<re.length;ce++){const de=re[ce],Ve=q[de],Be=Z[de];(Be!==Ve||de==="value")&&o(W,de,Ve,Be,U,k)}}H&1&&_.children!==I.children&&d(W,I.children)}else!K&&B==null&&C(W,q,Z,k,U);((ie=Z.onVnodeUpdated)||ee)&&mt(()=>{ie&&Gt(ie,k,I,_),ee&&cr(I,_,k,"updated")},L)},T=(_,I,k,L,U,$,K)=>{for(let W=0;W<I.length;W++){const H=_[W],B=I[W],ee=H.el&&(H.type===Ze||!gr(H,B)||H.shapeFlag&198)?p(H.el):k;N(H,B,ee,null,L,U,$,K,!0)}},C=(_,I,k,L,U)=>{if(I!==k){if(I!==Ae)for(const $ in I)!Os($)&&!($ in k)&&o(_,$,I[$],null,U,L);for(const $ in k){if(Os($))continue;const K=k[$],W=I[$];K!==W&&$!=="value"&&o(_,$,W,K,U,L)}"value"in k&&o(_,"value",I.value,k.value,U)}},S=(_,I,k,L,U,$,K,W,H)=>{const B=I.el=_?_.el:l(""),ee=I.anchor=_?_.anchor:l("");let{patchFlag:q,dynamicChildren:Z,slotScopeIds:ie}=I;ie&&(W=W?W.concat(ie):ie),_==null?(r(B,k,L),r(ee,k,L),v(I.children||[],k,ee,U,$,K,W,H)):q>0&&q&64&&Z&&_.dynamicChildren?(T(_.dynamicChildren,Z,k,U,$,K,W),(I.key!=null||U&&I===U.subTree)&&kp(_,I,!0)):ue(_,I,k,ee,U,$,K,W,H)},b=(_,I,k,L,U,$,K,W,H)=>{I.slotScopeIds=W,_==null?I.shapeFlag&512?U.ctx.activate(I,k,L,K,H):Ee(I,k,L,U,$,K,H):$e(_,I,H)},Ee=(_,I,k,L,U,$,K)=>{const W=_.component=Wy(_,L,U);if(Ho(_)&&(W.ctx.renderer=J),Gy(W,!1,K),W.asyncDep){if(U&&U.registerDep(W,Oe,K),!_.el){const H=W.subTree=ae(lt);O(null,H,I,k),_.placeholder=H.el}}else Oe(W,_,I,k,U,$,K)},$e=(_,I,k)=>{const L=I.component=_.component;if(Ly(_,I,k))if(L.asyncDep&&!L.asyncResolved){he(L,I,k);return}else L.next=I,L.update();else I.el=_.el,L.vnode=I},Oe=(_,I,k,L,U,$,K)=>{const W=()=>{if(_.isMounted){let{next:q,bu:Z,u:ie,parent:re,vnode:ce}=_;{const qe=Pp(_);if(qe){q&&(q.el=ce.el,he(_,q,K)),qe.asyncDep.then(()=>{_.isUnmounted||W()});return}}let de=q,Ve;ur(_,!1),q?(q.el=ce.el,he(_,q,K)):q=ce,Z&&Xi(Z),(Ve=q.props&&q.props.onVnodeBeforeUpdate)&&Gt(Ve,re,q,ce),ur(_,!0);const Be=Zu(_),Et=_.subTree;_.subTree=Be,N(Et,Be,p(Et.el),M(Et),_,U,$),q.el=Be.el,de===null&&Fy(_,Be.el),ie&&mt(ie,U),(Ve=q.props&&q.props.onVnodeUpdated)&&mt(()=>Gt(Ve,re,q,ce),U)}else{let q;const{el:Z,props:ie}=I,{bm:re,m:ce,parent:de,root:Ve,type:Be}=_,Et=Ms(I);ur(_,!1),re&&Xi(re),!Et&&(q=ie&&ie.onVnodeBeforeMount)&&Gt(q,de,I),ur(_,!0);{Ve.ce&&Ve.ce._def.shadowRoot!==!1&&Ve.ce._injectChildStyle(Be);const qe=_.subTree=Zu(_);N(null,qe,k,L,_,U,$),I.el=qe.el}if(ce&&mt(ce,U),!Et&&(q=ie&&ie.onVnodeMounted)){const qe=I;mt(()=>Gt(q,de,qe),U)}(I.shapeFlag&256||de&&Ms(de.vnode)&&de.vnode.shapeFlag&256)&&_.a&&mt(_.a,U),_.isMounted=!0,I=k=L=null}};_.scope.on();const H=_.effect=new Md(W);_.scope.off();const B=_.update=H.run.bind(H),ee=_.job=H.runIfDirty.bind(H);ee.i=_,ee.id=_.uid,H.scheduler=()=>uc(ee),ur(_,!0),B()},he=(_,I,k)=>{I.component=_;const L=_.vnode.props;_.vnode=I,_.next=null,by(_,I.props,L,k),Sy(_,I.children,k),bn(),Hu(_),wn()},ue=(_,I,k,L,U,$,K,W,H=!1)=>{const B=_&&_.children,ee=_?_.shapeFlag:0,q=I.children,{patchFlag:Z,shapeFlag:ie}=I;if(Z>0){if(Z&128){xt(B,q,k,L,U,$,K,W,H);return}else if(Z&256){gt(B,q,k,L,U,$,K,W,H);return}}ie&8?(ee&16&&ft(B,U,$),q!==B&&d(k,q)):ee&16?ie&16?xt(B,q,k,L,U,$,K,W,H):ft(B,U,$,!0):(ee&8&&d(k,""),ie&16&&v(q,k,L,U,$,K,W,H))},gt=(_,I,k,L,U,$,K,W,H)=>{_=_||Kr,I=I||Kr;const B=_.length,ee=I.length,q=Math.min(B,ee);let Z;for(Z=0;Z<q;Z++){const ie=I[Z]=H?jn(I[Z]):Xt(I[Z]);N(_[Z],ie,k,null,U,$,K,W,H)}B>ee?ft(_,U,$,!0,!1,q):v(I,k,L,U,$,K,W,H,q)},xt=(_,I,k,L,U,$,K,W,H)=>{let B=0;const ee=I.length;let q=_.length-1,Z=ee-1;for(;B<=q&&B<=Z;){const ie=_[B],re=I[B]=H?jn(I[B]):Xt(I[B]);if(gr(ie,re))N(ie,re,k,null,U,$,K,W,H);else break;B++}for(;B<=q&&B<=Z;){const ie=_[q],re=I[Z]=H?jn(I[Z]):Xt(I[Z]);if(gr(ie,re))N(ie,re,k,null,U,$,K,W,H);else break;q--,Z--}if(B>q){if(B<=Z){const ie=Z+1,re=ie<ee?I[ie].el:L;for(;B<=Z;)N(null,I[B]=H?jn(I[B]):Xt(I[B]),k,re,U,$,K,W,H),B++}}else if(B>Z)for(;B<=q;)xe(_[B],U,$,!0),B++;else{const ie=B,re=B,ce=new Map;for(B=re;B<=Z;B++){const ze=I[B]=H?jn(I[B]):Xt(I[B]);ze.key!=null&&ce.set(ze.key,B)}let de,Ve=0;const Be=Z-re+1;let Et=!1,qe=0;const On=new Array(Be);for(B=0;B<Be;B++)On[B]=0;for(B=ie;B<=q;B++){const ze=_[B];if(Ve>=Be){xe(ze,U,$,!0);continue}let St;if(ze.key!=null)St=ce.get(ze.key);else for(de=re;de<=Z;de++)if(On[de-re]===0&&gr(ze,I[de])){St=de;break}St===void 0?xe(ze,U,$,!0):(On[St-re]=B+1,St>=qe?qe=St:Et=!0,N(ze,I[St],k,null,U,$,K,W,H),Ve++)}const ds=Et?ky(On):Kr;for(de=ds.length-1,B=Be-1;B>=0;B--){const ze=re+B,St=I[ze],Ai=I[ze+1],Mr=ze+1<ee?Ai.el||Ai.placeholder:L;On[B]===0?N(null,St,k,Mr,U,$,K,W,H):Et&&(de<0||B!==ds[de]?It(St,k,Mr,2):de--)}}},It=(_,I,k,L,U=null)=>{const{el:$,type:K,transition:W,children:H,shapeFlag:B}=_;if(B&6){It(_.component.subTree,I,k,L);return}if(B&128){_.suspense.move(I,k,L);return}if(B&64){K.move(_,I,k,J);return}if(K===Ze){r($,I,k);for(let q=0;q<H.length;q++)It(H[q],I,k,L);r(_.anchor,I,k);return}if(K===Yi){j(_,I,k);return}if(L!==2&&B&1&&W)if(L===0)W.beforeEnter($),r($,I,k),mt(()=>W.enter($),U);else{const{leave:q,delayLeave:Z,afterLeave:ie}=W,re=()=>{_.ctx.isUnmounted?s($):r($,I,k)},ce=()=>{q($,()=>{re(),ie&&ie()})};Z?Z($,re,ce):ce()}else r($,I,k)},xe=(_,I,k,L=!1,U=!1)=>{const{type:$,props:K,ref:W,children:H,dynamicChildren:B,shapeFlag:ee,patchFlag:q,dirs:Z,cacheIndex:ie}=_;if(q===-2&&(U=!1),W!=null&&(bn(),Ds(W,null,k,_,!0),wn()),ie!=null&&(I.renderCache[ie]=void 0),ee&256){I.ctx.deactivate(_);return}const re=ee&1&&Z,ce=!Ms(_);let de;if(ce&&(de=K&&K.onVnodeBeforeUnmount)&&Gt(de,I,_),ee&6)Wt(_.component,k,L);else{if(ee&128){_.suspense.unmount(k,L);return}re&&cr(_,null,I,"beforeUnmount"),ee&64?_.type.remove(_,I,k,J,L):B&&!B.hasOnce&&($!==Ze||q>0&&q&64)?ft(B,I,k,!1,!0):($===Ze&&q&384||!U&&ee&16)&&ft(H,I,k),L&&Ne(_)}(ce&&(de=K&&K.onVnodeUnmounted)||re)&&mt(()=>{de&&Gt(de,I,_),re&&cr(_,null,I,"unmounted")},k)},Ne=_=>{const{type:I,el:k,anchor:L,transition:U}=_;if(I===Ze){Rn(k,L);return}if(I===Yi){V(_);return}const $=()=>{s(k),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(_.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:W}=U,H=()=>K(k,$);W?W(_.el,$,H):H()}else $()},Rn=(_,I)=>{let k;for(;_!==I;)k=m(_),s(_),_=k;s(I)},Wt=(_,I,k)=>{const{bum:L,scope:U,job:$,subTree:K,um:W,m:H,a:B,parent:ee,slots:{__:q}}=_;Qu(H),Qu(B),L&&Xi(L),ee&&ne(q)&&q.forEach(Z=>{ee.renderCache[Z]=void 0}),U.stop(),$&&($.flags|=8,xe(K,_,I,k)),W&&mt(W,I),mt(()=>{_.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},ft=(_,I,k,L=!1,U=!1,$=0)=>{for(let K=$;K<_.length;K++)xe(_[K],I,k,L,U)},M=_=>{if(_.shapeFlag&6)return M(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const I=m(_.anchor||_.el),k=I&&I[Yv];return k?m(k):I};let Y=!1;const X=(_,I,k)=>{_==null?I._vnode&&xe(I._vnode,null,null,!0):N(I._vnode||null,_,I,null,null,null,k),I._vnode=_,Y||(Y=!0,Hu(),tp(),Y=!1)},J={p:N,um:xe,m:It,r:Ne,mt:Ee,mc:v,pc:ue,pbc:T,n:M,o:t};return{render:X,hydrate:void 0,createApp:yy(X)}}function Ma({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Cy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kp(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let o=0;o<r.length;o++){const a=r[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=jn(s[o]),l.el=a.el),!n&&l.patchFlag!==-2&&kp(a,l)),l.type===Ko&&(l.el=a.el),l.type===lt&&!l.el&&(l.el=a.el)}}function ky(t){const e=t.slice(),n=[0];let r,s,o,a,l;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<f?o=l+1:a=l;f<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pp(e)}function Qu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Py=Symbol.for("v-scx"),Ry=()=>jt(Py);function $s(t,e,n){return Rp(t,e,n)}function Rp(t,e,n=Ae){const{immediate:r,deep:s,flush:o,once:a}=n,l=je({},n),c=e&&r||!e&&o!=="post";let f;if(ni){if(o==="sync"){const w=Ry();f=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=en,w.resume=en,w.pause=en,w}}const d=et;l.call=(w,R,N)=>Vt(w,d,R,N);let p=!1;o==="post"?l.scheduler=w=>{mt(w,d&&d.suspense)}:o!=="sync"&&(p=!0,l.scheduler=(w,R)=>{R?w():uc(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const m=Gv(t,e,l);return ni&&(f?f.push(m):c&&m()),m}function Oy(t,e,n){const r=this.proxy,s=Me(t)?t.includes(".")?Op(r,t):()=>r[t]:t.bind(r,r);let o;le(e)?o=e:(o=e.handler,n=e);const a=pi(this),l=Rp(s,o.bind(r),n);return a(),l}function Op(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const xy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pt(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function Ny(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const o=e.startsWith("update:"),a=o&&xy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Me(d)?d.trim():d)),a.number&&(s=n.map(lo)));let l,c=r[l=ka(e)]||r[l=ka(Pt(e))];!c&&o&&(c=r[l=ka(Rr(e))]),c&&Vt(c,t,6,s);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Vt(f,t,6,s)}}function xp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const o=t.emits;let a={},l=!1;if(!le(t)){const c=f=>{const d=xp(f,e,!0);d&&(l=!0,je(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!o&&!l?(Ce(t)&&r.set(t,null),null):(ne(o)?o.forEach(c=>a[c]=null):je(a,o),Ce(t)&&r.set(t,a),a)}function qo(t,e){return!t||!Lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Rr(e))||we(t,e))}function Zu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:p,data:m,setupState:w,ctx:R,inheritAttrs:N}=t,F=ho(t);let O,D;try{if(n.shapeFlag&4){const V=s||r,Q=V;O=Xt(f.call(Q,V,d,p,w,m,R)),D=l}else{const V=e;O=Xt(V.length>1?V(p,{attrs:l,slots:a,emit:c}):V(p,null)),D=e.props?l:Dy(l)}}catch(V){Us.length=0,zo(V,t,1),O=ae(lt)}let j=O;if(D&&N!==!1){const V=Object.keys(D),{shapeFlag:Q}=j;V.length&&Q&7&&(o&&V.some(Jl)&&(D=My(D,o)),j=er(j,D,!1,!0))}return n.dirs&&(j=er(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&ei(j,n.transition),O=j,ho(F),O}const Dy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lo(n))&&((e||(e={}))[n]=t[n]);return e},My=(t,e)=>{const n={};for(const r in t)(!Jl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ly(t,e,n){const{props:r,children:s,component:o}=t,{props:a,children:l,patchFlag:c}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ef(r,a,f):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!qo(f,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ef(r,a,f):!0:!!a;return!1}function ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(e[o]!==t[o]&&!qo(n,o))return!0}return!1}function Fy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Np=t=>t.__isSuspense;function $y(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Xv(t)}const Ze=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),Yi=Symbol.for("v-stc"),Us=[];let yt=null;function Te(t=!1){Us.push(yt=t?null:[])}function Uy(){Us.pop(),yt=Us[Us.length-1]||null}let ti=1;function tf(t,e=!1){ti+=t,t<0&&yt&&e&&(yt.hasOnce=!0)}function Dp(t){return t.dynamicChildren=ti>0?yt||Kr:null,Uy(),ti>0&&yt&&yt.push(t),t}function De(t,e,n,r,s,o){return Dp(E(t,e,n,r,s,o,!0))}function mo(t,e,n,r,s){return Dp(ae(t,e,n,r,s,!0))}function vo(t){return t?t.__v_isVNode===!0:!1}function gr(t,e){return t.type===e.type&&t.key===e.key}const Mp=({key:t})=>t??null,Ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||tt(t)||le(t)?{i:vt,r:t,k:e,f:!!n}:t:null);function E(t,e=null,n=null,r=0,s=null,o=t===Ze?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mp(e),ref:e&&Ji(e),scopeId:rp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vt};return l?(pc(c,n),o&128&&t.normalize(c)):n&&(c.shapeFlag|=Me(n)?8:16),ti>0&&!a&&yt&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&yt.push(c),c}const ae=jy;function jy(t,e=null,n=null,r=0,s=null,o=!1){if((!t||t===gp)&&(t=lt),vo(t)){const l=er(t,e,!0);return n&&pc(l,n),ti>0&&!o&&yt&&(l.shapeFlag&6?yt[yt.indexOf(t)]=l:yt.push(l)),l.patchFlag=-2,l}if(Jy(t)&&(t=t.__vccOpts),e){e=Vy(e);let{class:l,style:c}=e;l&&!Me(l)&&(e.class=jo(l)),Ce(c)&&(lc(c)&&!ne(c)&&(c=je({},c)),e.style=ec(c))}const a=Me(t)?1:Np(t)?128:sp(t)?64:Ce(t)?4:le(t)?2:0;return E(t,e,n,r,s,a,o,!0)}function Vy(t){return t?lc(t)||Ip(t)?je({},t):t:null}function er(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:l,transition:c}=t,f=e?By(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Mp(f),ref:e&&e.ref?n&&o?ne(o)?o.concat(Ji(e)):[o,Ji(e)]:Ji(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&er(t.ssContent),ssFallback:t.ssFallback&&er(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ei(d,c.clone(d)),d}function dt(t=" ",e=0){return ae(Ko,null,t,e)}function Qi(t,e){const n=ae(Yi,null,t);return n.staticCount=e,n}function js(t="",e=!1){return e?(Te(),mo(lt,null,t)):ae(lt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?ae(lt):ne(t)?ae(Ze,null,t.slice()):vo(t)?jn(t):ae(Ko,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:er(t)}function pc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ip(e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function By(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=jo([e.class,r.class]));else if(s==="style")e.style=ec([e.style,r.style]);else if(Lo(s)){const o=e[s],a=r[s];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){Vt(t,e,7,[n,r])}const zy=_p();let Hy=0;function Wy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zy,o={uid:Hy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _v(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sp(r,s),emitsOptions:xp(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ny.bind(null,o),t.ce&&t.ce(o),o}let et=null;const Lp=()=>et||vt;let yo,_l;{const t=Uo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};yo=e("__VUE_INSTANCE_SETTERS__",n=>et=n),_l=e("__VUE_SSR_SETTERS__",n=>ni=n)}const pi=t=>{const e=et;return yo(t),t.scope.on(),()=>{t.scope.off(),yo(e)}},nf=()=>{et&&et.scope.off(),yo(null)};function Fp(t){return t.vnode.shapeFlag&4}let ni=!1;function Gy(t,e=!1,n=!1){e&&_l(e);const{props:r,children:s}=t.vnode,o=Fp(t);_y(t,r,o,e),Ey(t,s,n||e);const a=o?qy(t,e):void 0;return e&&_l(!1),a}function qy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fy);const{setup:r}=n;if(r){bn();const s=t.setupContext=r.length>1?Xy(t):null,o=pi(t),a=di(r,t,0,[t.props,s]),l=Pd(a);if(wn(),o(),(l||t.sp)&&!Ms(t)&&up(t),l){if(a.then(nf,nf),e)return a.then(c=>{rf(t,c)}).catch(c=>{zo(c,t,0)});t.asyncDep=a}else rf(t,a)}else $p(t)}function rf(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Qd(e)),$p(t)}function $p(t,e,n){const r=t.type;t.render||(t.render=r.render||en);{const s=pi(t);bn();try{hy(t)}finally{wn(),s()}}}const Ky={get(t,e){return Qe(t,"get",""),t[e]}};function Xy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ky),slots:t.slots,emit:t.emit,expose:e}}function Xo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qd(Uv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function Yy(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function Jy(t){return le(t)&&"__vccOpts"in t}const Ue=(t,e)=>Hv(t,e,ni);function Yo(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!ne(e)?vo(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vo(n)&&(n=[n]),ae(t,e,n))}const Qy="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bl;const sf=typeof window<"u"&&window.trustedTypes;if(sf)try{bl=sf.createPolicy("vue",{createHTML:t=>t})}catch{}const Up=bl?t=>bl.createHTML(t):t=>t,Zy="http://www.w3.org/2000/svg",e0="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,of=hn&&hn.createElement("template"),t0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?hn.createElementNS(Zy,t):e==="mathml"?hn.createElementNS(e0,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{of.innerHTML=Up(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=of.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mn="transition",Cs="animation",ri=Symbol("_vtc"),jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},n0=je({},ip,jp),r0=t=>(t.displayName="Transition",t.props=n0,t),Vp=r0((t,{slots:e})=>Yo(Zv,s0(t),e)),fr=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},af=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function s0(t){const e={};for(const S in t)S in jp||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:f=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=t,R=i0(s),N=R&&R[0],F=R&&R[1],{onBeforeEnter:O,onEnter:D,onEnterCancelled:j,onLeave:V,onLeaveCancelled:Q,onBeforeAppear:se=O,onAppear:A=D,onAppearCancelled:v=j}=e,y=(S,b,Ee,$e)=>{S._enterCancelled=$e,hr(S,b?d:l),hr(S,b?f:a),Ee&&Ee()},T=(S,b)=>{S._isLeaving=!1,hr(S,p),hr(S,w),hr(S,m),b&&b()},C=S=>(b,Ee)=>{const $e=S?A:D,Oe=()=>y(b,S,Ee);fr($e,[b,Oe]),lf(()=>{hr(b,S?c:o),un(b,S?d:l),af($e)||cf(b,r,N,Oe)})};return je(e,{onBeforeEnter(S){fr(O,[S]),un(S,o),un(S,a)},onBeforeAppear(S){fr(se,[S]),un(S,c),un(S,f)},onEnter:C(!1),onAppear:C(!0),onLeave(S,b){S._isLeaving=!0;const Ee=()=>T(S,b);un(S,p),S._enterCancelled?(un(S,m),hf()):(hf(),un(S,m)),lf(()=>{S._isLeaving&&(hr(S,p),un(S,w),af(V)||cf(S,r,F,Ee))}),fr(V,[S,Ee])},onEnterCancelled(S){y(S,!1,void 0,!0),fr(j,[S])},onAppearCancelled(S){y(S,!0,void 0,!0),fr(v,[S])},onLeaveCancelled(S){T(S),fr(Q,[S])}})}function i0(t){if(t==null)return null;if(Ce(t))return[La(t.enter),La(t.leave)];{const e=La(t);return[e,e]}}function La(t){return fv(t)}function un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ri]||(t[ri]=new Set)).add(e)}function hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ri];n&&(n.delete(e),n.size||(t[ri]=void 0))}function lf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let o0=0;function cf(t,e,n,r){const s=t._endId=++o0,o=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:l,propCount:c}=a0(t,e);if(!a)return r();const f=a+"end";let d=0;const p=()=>{t.removeEventListener(f,m),o()},m=w=>{w.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(f,m)}function a0(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${Mn}Delay`),o=r(`${Mn}Duration`),a=uf(s,o),l=r(`${Cs}Delay`),c=r(`${Cs}Duration`),f=uf(l,c);let d=null,p=0,m=0;e===Mn?a>0&&(d=Mn,p=a,m=o.length):e===Cs?f>0&&(d=Cs,p=f,m=c.length):(p=Math.max(a,f),d=p>0?a>f?Mn:Cs:null,m=d?d===Mn?o.length:c.length:0);const w=d===Mn&&/\b(transform|all)(,|$)/.test(r(`${Mn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:w}}function uf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ff(n)+ff(t[r])))}function ff(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function hf(){return document.body.offsetHeight}function l0(t,e,n){const r=t[ri];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const df=Symbol("_vod"),c0=Symbol("_vsh"),u0=Symbol(""),f0=/(^|;)\s*display\s*:/;function h0(t,e,n){const r=t.style,s=Me(n);let o=!1;if(n&&!s){if(e)if(Me(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Zi(r,l,"")}else for(const a in e)n[a]==null&&Zi(r,a,"");for(const a in n)a==="display"&&(o=!0),Zi(r,a,n[a])}else if(s){if(e!==n){const a=r[u0];a&&(n+=";"+a),r.cssText=n,o=f0.test(n)}}else e&&t.removeAttribute("style");df in t&&(t[df]=o?r.display:"",t[c0]&&(r.display="none"))}const pf=/\s*!important$/;function Zi(t,e,n){if(ne(n))n.forEach(r=>Zi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=d0(t,e);pf.test(n)?t.setProperty(Rr(r),n.replace(pf,""),"important"):t[r]=n}}const gf=["Webkit","Moz","ms"],Fa={};function d0(t,e){const n=Fa[e];if(n)return n;let r=Pt(e);if(r!=="filter"&&r in t)return Fa[e]=r;r=$o(r);for(let s=0;s<gf.length;s++){const o=gf[s]+r;if(o in t)return Fa[e]=o}return e}const mf="http://www.w3.org/1999/xlink";function vf(t,e,n,r,s,o=vv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(mf,e.slice(6,e.length)):t.setAttributeNS(mf,e,n):n==null||o&&!xd(n)?t.removeAttribute(e):t.setAttribute(e,o?"":rn(n)?String(n):n)}function yf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Up(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=xd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Bn(t,e,n,r){t.addEventListener(e,n,r)}function p0(t,e,n,r){t.removeEventListener(e,n,r)}const _f=Symbol("_vei");function g0(t,e,n,r,s=null){const o=t[_f]||(t[_f]={}),a=o[e];if(r&&a)a.value=r;else{const[l,c]=m0(e);if(r){const f=o[e]=_0(r,s);Bn(t,l,f,c)}else a&&(p0(t,l,a,c),o[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function m0(t){let e;if(bf.test(t)){e={};let r;for(;r=t.match(bf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let $a=0;const v0=Promise.resolve(),y0=()=>$a||(v0.then(()=>$a=0),$a=Date.now());function _0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Vt(b0(r,n.value),e,5,[r])};return n.value=t,n.attached=y0(),n}function b0(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,w0=(t,e,n,r,s,o)=>{const a=s==="svg";e==="class"?l0(t,r,a):e==="style"?h0(t,n,r):Lo(e)?Jl(e)||g0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):I0(t,e,r,a))?(yf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vf(t,e,r,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Me(r))?yf(t,Pt(e),r,o,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vf(t,e,r,a))};function I0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&wf(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wf(e)&&Me(n)?!1:e in t}const ss=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Xi(e,n):e};function E0(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _n=Symbol("_assign"),qn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_n]=ss(s);const o=r||s.props&&s.props.type==="number";Bn(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),o&&(l=lo(l)),t[_n](l)}),n&&Bn(t,"change",()=>{t.value=t.value.trim()}),e||(Bn(t,"compositionstart",E0),Bn(t,"compositionend",If),Bn(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[_n]=ss(a),t.composing)return;const l=(o||t.type==="number")&&!/^0\d/.test(t.value)?lo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Hr={deep:!0,created(t,e,n){t[_n]=ss(n),Bn(t,"change",()=>{const r=t._modelValue,s=si(t),o=t.checked,a=t[_n];if(ne(r)){const l=tc(r,s),c=l!==-1;if(o&&!c)a(r.concat(s));else if(!o&&c){const f=[...r];f.splice(l,1),a(f)}}else if(us(r)){const l=new Set(r);o?l.add(s):l.delete(s),a(l)}else a(Bp(t,o))})},mounted:Ef,beforeUpdate(t,e,n){t[_n]=ss(n),Ef(t,e,n)}};function Ef(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ne(e))s=tc(e,r.props.value)>-1;else if(us(e))s=e.has(r.props.value);else{if(e===n)return;s=hi(e,Bp(t,!0))}t.checked!==s&&(t.checked=s)}const Sf={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=us(e);Bn(t,"change",()=>{const o=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?lo(si(a)):si(a));t[_n](t.multiple?s?new Set(o):o:o[0]),t._assigning=!0,cc(()=>{t._assigning=!1})}),t[_n]=ss(r)},mounted(t,{value:e}){Tf(t,e)},beforeUpdate(t,e,n){t[_n]=ss(n)},updated(t,{value:e}){t._assigning||Tf(t,e)}};function Tf(t,e){const n=t.multiple,r=ne(e);if(!(n&&!r&&!us(e))){for(let s=0,o=t.options.length;s<o;s++){const a=t.options[s],l=si(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(f=>String(f)===String(l)):a.selected=tc(e,l)>-1}else a.selected=e.has(l);else if(hi(si(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function si(t){return"_value"in t?t._value:t.value}function Bp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const S0=["ctrl","shift","alt","meta"],T0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>S0.some(n=>t[`${n}Key`]&&!e.includes(n))},zp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...o)=>{for(let a=0;a<e.length;a++){const l=T0[e[a]];if(l&&l(s,e))return}return t(s,...o)})},A0=je({patchProp:w0},t0);let Af;function C0(){return Af||(Af=Ty(A0))}const k0=(...t)=>{const e=C0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=R0(r);if(!s)return;const o=e._component;!le(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,P0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function P0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function R0(t){return Me(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function Hp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function O0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Hp(t.default)}const be=Object.assign;function Ua(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const Vs=()=>{},Bt=Array.isArray,Wp=/#/g,x0=/&/g,N0=/\//g,D0=/=/g,M0=/\?/g,Gp=/\+/g,L0=/%5B/g,F0=/%5D/g,qp=/%5E/g,$0=/%60/g,Kp=/%7B/g,U0=/%7C/g,Xp=/%7D/g,j0=/%20/g;function gc(t){return encodeURI(""+t).replace(U0,"|").replace(L0,"[").replace(F0,"]")}function V0(t){return gc(t).replace(Kp,"{").replace(Xp,"}").replace(qp,"^")}function wl(t){return gc(t).replace(Gp,"%2B").replace(j0,"+").replace(Wp,"%23").replace(x0,"%26").replace($0,"`").replace(Kp,"{").replace(Xp,"}").replace(qp,"^")}function B0(t){return wl(t).replace(D0,"%3D")}function z0(t){return gc(t).replace(Wp,"%23").replace(M0,"%3F")}function H0(t){return t==null?"":z0(t).replace(N0,"%2F")}function ii(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const W0=/\/$/,G0=t=>t.replace(W0,"");function ja(t,e,n="/"){let r,s={},o="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),o=e.slice(c+1,l>-1?l:e.length),s=t(o)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Y0(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:ii(a)}}function q0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function K0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&is(e.matched[r],n.matched[s])&&Yp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!X0(t[n],e[n]))return!1;return!0}function X0(t,e){return Bt(t)?kf(t,e):Bt(e)?kf(e,t):t===e}function kf(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Y0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const Ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var oi;(function(t){t.pop="pop",t.push="push"})(oi||(oi={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function J0(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),G0(t)}const Q0=/^[^#]+#/;function Z0(t,e){return t.replace(Q0,"#")+e}function e_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Jo=()=>({left:window.scrollX,top:window.scrollY});function t_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=e_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pf(t,e){return(history.state?history.state.position-e:-1)+t}const Il=new Map;function n_(t,e){Il.set(t,e)}function r_(t){const e=Il.get(t);return Il.delete(t),e}let s_=()=>location.protocol+"//"+location.host;function Jp(t,e){const{pathname:n,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){let l=s.includes(t.slice(o))?t.slice(o).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Cf(c,"")}return Cf(n,t)+r+s}function i_(t,e,n,r){let s=[],o=[],a=null;const l=({state:m})=>{const w=Jp(t,location),R=n.value,N=e.value;let F=0;if(m){if(n.value=w,e.value=m,a&&a===R){a=null;return}F=N?m.position-N.position:0}else r(w);s.forEach(O=>{O(n.value,R,{delta:F,type:oi.pop,direction:F?F>0?Bs.forward:Bs.back:Bs.unknown})})};function c(){a=n.value}function f(m){s.push(m);const w=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return o.push(w),w}function d(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:Jo()}),"")}function p(){for(const m of o)m();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:f,destroy:p}}function Rf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Jo():null}}function o_(t){const{history:e,location:n}=window,r={value:Jp(t,n)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,f,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:s_()+t+c;try{e[d?"replaceState":"pushState"](f,"",m),s.value=f}catch(w){console.error(w),n[d?"replace":"assign"](m)}}function a(c,f){const d=be({},e.state,Rf(s.value.back,c,s.value.forward,!0),f,{position:s.value.position});o(c,d,!0),r.value=c}function l(c,f){const d=be({},s.value,e.state,{forward:c,scroll:Jo()});o(d.current,d,!0);const p=be({},Rf(r.value,c,null),{position:d.position+1},f);o(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function a_(t){t=J0(t);const e=o_(t),n=i_(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=be({location:"",base:t,go:r,createHref:Z0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function l_(t){return typeof t=="string"||t&&typeof t=="object"}function Qp(t){return typeof t=="string"||typeof t=="symbol"}const Zp=Symbol("");var Of;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Of||(Of={}));function os(t,e){return be(new Error,{type:t,[Zp]:!0},e)}function fn(t,e){return t instanceof Error&&Zp in t&&(e==null||!!(t.type&e))}const xf="[^/]+?",c_={sensitive:!1,strict:!1,start:!0,end:!0},u_=/[.+*?^${}()[\]/\\]/g;function f_(t,e){const n=be({},c_,e),r=[];let s=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const m=f[p];let w=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(u_,"\\$&"),w+=40;else if(m.type===1){const{value:R,repeatable:N,optional:F,regexp:O}=m;o.push({name:R,repeatable:N,optional:F});const D=O||xf;if(D!==xf){w+=10;try{new RegExp(`(${D})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${R}" (${D}): `+V.message)}}let j=N?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(j=F&&f.length<2?`(?:/${j})`:"/"+j),F&&(j+="?"),s+=j,w+=20,F&&(w+=-8),N&&(w+=-20),D===".*"&&(w+=-50)}d.push(w)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(f){const d=f.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const w=d[m]||"",R=o[m-1];p[R.name]=w&&R.repeatable?w.split("/"):w}return p}function c(f){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const w of m)if(w.type===0)d+=w.value;else if(w.type===1){const{value:R,repeatable:N,optional:F}=w,O=R in f?f[R]:"";if(Bt(O)&&!N)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const D=Bt(O)?O.join("/"):O;if(!D)if(F)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=D}}return d||"/"}return{re:a,score:r,keys:o,parse:l,stringify:c}}function h_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function eg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const o=h_(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Nf(r))return 1;if(Nf(s))return-1}return s.length-r.length}function Nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const d_={type:0,value:""},p_=/[a-zA-Z0-9_]/;function g_(t){if(!t)return[[]];if(t==="/")return[[d_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${f}": ${w}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let l=0,c,f="",d="";function p(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),f="")}function m(){f+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:p_.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),p(),a(),s}function m_(t,e,n){const r=f_(g_(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function v_(t,e){const n=[],r=new Map;e=Ff({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function o(p,m,w){const R=!w,N=Mf(p);N.aliasOf=w&&w.record;const F=Ff(e,p),O=[N];if("alias"in p){const V=typeof p.alias=="string"?[p.alias]:p.alias;for(const Q of V)O.push(Mf(be({},N,{components:w?w.record.components:N.components,path:Q,aliasOf:w?w.record:N})))}let D,j;for(const V of O){const{path:Q}=V;if(m&&Q[0]!=="/"){const se=m.record.path,A=se[se.length-1]==="/"?"":"/";V.path=m.record.path+(Q&&A+Q)}if(D=m_(V,m,F),w?w.alias.push(D):(j=j||D,j!==D&&j.alias.push(D),R&&p.name&&!Lf(D)&&a(p.name)),tg(D)&&c(D),N.children){const se=N.children;for(let A=0;A<se.length;A++)o(se[A],D,w&&w.children[A])}w=w||D}return j?()=>{a(j)}:Vs}function a(p){if(Qp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=b_(p,n);n.splice(m,0,p),p.record.name&&!Lf(p)&&r.set(p.record.name,p)}function f(p,m){let w,R={},N,F;if("name"in p&&p.name){if(w=r.get(p.name),!w)throw os(1,{location:p});F=w.record.name,R=be(Df(m.params,w.keys.filter(j=>!j.optional).concat(w.parent?w.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Df(p.params,w.keys.map(j=>j.name))),N=w.stringify(R)}else if(p.path!=null)N=p.path,w=n.find(j=>j.re.test(N)),w&&(R=w.parse(N),F=w.record.name);else{if(w=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!w)throw os(1,{location:p,currentLocation:m});F=w.record.name,R=be({},m.params,p.params),N=w.stringify(R)}const O=[];let D=w;for(;D;)O.unshift(D.record),D=D.parent;return{name:F,path:N,params:R,matched:O,meta:__(O)}}t.forEach(p=>o(p));function d(){n.length=0,r.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Mf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:y_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function y_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function __(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Ff(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function b_(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;eg(t,e[o])<0?r=o:n=o+1}const s=w_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function w_(t){let e=t;for(;e=e.parent;)if(tg(e)&&eg(t,e)===0)return e}function tg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function I_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(Gp," "),a=o.indexOf("="),l=ii(a<0?o:o.slice(0,a)),c=a<0?null:ii(o.slice(a+1));if(l in e){let f=e[l];Bt(f)||(f=e[l]=[f]),f.push(c)}else e[l]=c}return e}function $f(t){let e="";for(let n in t){const r=t[n];if(n=B0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(o=>o&&wl(o)):[r&&wl(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function E_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const S_=Symbol(""),Uf=Symbol(""),Qo=Symbol(""),mc=Symbol(""),El=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vn(t,e,n,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const f=m=>{m===!1?c(os(4,{from:n,to:e})):m instanceof Error?c(m):l_(m)?c(os(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=o(()=>t.call(r&&r.instances[s],e,n,f));let p=Promise.resolve(d);t.length<3&&(p=p.then(f)),p.catch(m=>c(m))})}function Va(t,e,n,r,s=o=>o()){const o=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Hp(c)){const d=(c.__vccOpts||c)[e];d&&o.push(Vn(d,n,r,a,l,s))}else{let f=c();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=O0(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const w=(p.__vccOpts||p)[e];return w&&Vn(w,n,r,a,l,s)()}))}}return o}function jf(t){const e=jt(Qo),n=jt(mc),r=Ue(()=>{const c=Xn(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:f}=c,d=c[f-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(is.bind(null,d));if(m>-1)return m;const w=Vf(c[f-2]);return f>1&&Vf(d)===w&&p[p.length-1].path!==w?p.findIndex(is.bind(null,c[f-2])):m}),o=Ue(()=>s.value>-1&&P_(n.params,r.value.params)),a=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Yp(n.params,r.value.params));function l(c={}){if(k_(c)){const f=e[Xn(t.replace)?"replace":"push"](Xn(t.to)).catch(Vs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:o,isExactActive:a,navigate:l}}function T_(t){return t.length===1?t[0]:t}const A_=fc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:jf,setup(t,{slots:e}){const n=Bo(jf(t)),{options:r}=jt(Qo),s=Ue(()=>({[Bf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&T_(e.default(n));return t.custom?o:Yo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),C_=A_;function k_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function P_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function Vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bf=(t,e,n)=>t??e??n,R_=fc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(El),s=Ue(()=>t.route||r.value),o=jt(Uf,0),a=Ue(()=>{let f=Xn(o);const{matched:d}=s.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),l=Ue(()=>s.value.matched[a.value]);Fs(Uf,Ue(()=>a.value+1)),Fs(S_,l),Fs(El,s);const c=ct();return $s(()=>[c.value,l.value,t.name],([f,d,p],[m,w,R])=>{d&&(d.instances[p]=f,w&&w!==d&&f&&f===m&&(d.leaveGuards.size||(d.leaveGuards=w.leaveGuards),d.updateGuards.size||(d.updateGuards=w.updateGuards))),f&&d&&(!w||!is(d,w)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(f))},{flush:"post"}),()=>{const f=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return zf(n.default,{Component:m,route:f});const w=p.props[d],R=w?w===!0?f.params:typeof w=="function"?w(f):w:null,F=Yo(m,be({},R,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return zf(n.default,{Component:F,route:f})||F}}});function zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ng=R_;function O_(t){const e=v_(t.routes,t),n=t.parseQuery||I_,r=t.stringifyQuery||$f,s=t.history,o=ks(),a=ks(),l=ks(),c=jv(Ln);let f=Ln;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ua.bind(null,M=>""+M),p=Ua.bind(null,H0),m=Ua.bind(null,ii);function w(M,Y){let X,J;return Qp(M)?(X=e.getRecordMatcher(M),J=Y):J=M,e.addRoute(J,X)}function R(M){const Y=e.getRecordMatcher(M);Y&&e.removeRoute(Y)}function N(){return e.getRoutes().map(M=>M.record)}function F(M){return!!e.getRecordMatcher(M)}function O(M,Y){if(Y=be({},Y||c.value),typeof M=="string"){const k=ja(n,M,Y.path),L=e.resolve({path:k.path},Y),U=s.createHref(k.fullPath);return be(k,L,{params:m(L.params),hash:ii(k.hash),redirectedFrom:void 0,href:U})}let X;if(M.path!=null)X=be({},M,{path:ja(n,M.path,Y.path).path});else{const k=be({},M.params);for(const L in k)k[L]==null&&delete k[L];X=be({},M,{params:p(k)}),Y.params=p(Y.params)}const J=e.resolve(X,Y),ve=M.hash||"";J.params=d(m(J.params));const _=q0(r,be({},M,{hash:V0(ve),path:J.path})),I=s.createHref(_);return be({fullPath:_,hash:ve,query:r===$f?E_(M.query):M.query||{}},J,{redirectedFrom:void 0,href:I})}function D(M){return typeof M=="string"?ja(n,M,c.value.path):be({},M)}function j(M,Y){if(f!==M)return os(8,{from:Y,to:M})}function V(M){return A(M)}function Q(M){return V(be(D(M),{replace:!0}))}function se(M){const Y=M.matched[M.matched.length-1];if(Y&&Y.redirect){const{redirect:X}=Y;let J=typeof X=="function"?X(M):X;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=D(J):{path:J},J.params={}),be({query:M.query,hash:M.hash,params:J.path!=null?{}:M.params},J)}}function A(M,Y){const X=f=O(M),J=c.value,ve=M.state,_=M.force,I=M.replace===!0,k=se(X);if(k)return A(be(D(k),{state:typeof k=="object"?be({},ve,k.state):ve,force:_,replace:I}),Y||X);const L=X;L.redirectedFrom=Y;let U;return!_&&K0(r,J,X)&&(U=os(16,{to:L,from:J}),It(J,J,!0,!1)),(U?Promise.resolve(U):T(L,J)).catch($=>fn($)?fn($,2)?$:xt($):ue($,L,J)).then($=>{if($){if(fn($,2))return A(be({replace:I},D($.to),{state:typeof $.to=="object"?be({},ve,$.to.state):ve,force:_}),Y||L)}else $=S(L,J,!0,I,ve);return C(L,J,$),$})}function v(M,Y){const X=j(M,Y);return X?Promise.reject(X):Promise.resolve()}function y(M){const Y=Rn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(M):M()}function T(M,Y){let X;const[J,ve,_]=x_(M,Y);X=Va(J.reverse(),"beforeRouteLeave",M,Y);for(const k of J)k.leaveGuards.forEach(L=>{X.push(Vn(L,M,Y))});const I=v.bind(null,M,Y);return X.push(I),ft(X).then(()=>{X=[];for(const k of o.list())X.push(Vn(k,M,Y));return X.push(I),ft(X)}).then(()=>{X=Va(ve,"beforeRouteUpdate",M,Y);for(const k of ve)k.updateGuards.forEach(L=>{X.push(Vn(L,M,Y))});return X.push(I),ft(X)}).then(()=>{X=[];for(const k of _)if(k.beforeEnter)if(Bt(k.beforeEnter))for(const L of k.beforeEnter)X.push(Vn(L,M,Y));else X.push(Vn(k.beforeEnter,M,Y));return X.push(I),ft(X)}).then(()=>(M.matched.forEach(k=>k.enterCallbacks={}),X=Va(_,"beforeRouteEnter",M,Y,y),X.push(I),ft(X))).then(()=>{X=[];for(const k of a.list())X.push(Vn(k,M,Y));return X.push(I),ft(X)}).catch(k=>fn(k,8)?k:Promise.reject(k))}function C(M,Y,X){l.list().forEach(J=>y(()=>J(M,Y,X)))}function S(M,Y,X,J,ve){const _=j(M,Y);if(_)return _;const I=Y===Ln,k=Wr?history.state:{};X&&(J||I?s.replace(M.fullPath,be({scroll:I&&k&&k.scroll},ve)):s.push(M.fullPath,ve)),c.value=M,It(M,Y,X,I),xt()}let b;function Ee(){b||(b=s.listen((M,Y,X)=>{if(!Wt.listening)return;const J=O(M),ve=se(J);if(ve){A(be(ve,{replace:!0,force:!0}),J).catch(Vs);return}f=J;const _=c.value;Wr&&n_(Pf(_.fullPath,X.delta),Jo()),T(J,_).catch(I=>fn(I,12)?I:fn(I,2)?(A(be(D(I.to),{force:!0}),J).then(k=>{fn(k,20)&&!X.delta&&X.type===oi.pop&&s.go(-1,!1)}).catch(Vs),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ue(I,J,_))).then(I=>{I=I||S(J,_,!1),I&&(X.delta&&!fn(I,8)?s.go(-X.delta,!1):X.type===oi.pop&&fn(I,20)&&s.go(-1,!1)),C(J,_,I)}).catch(Vs)}))}let $e=ks(),Oe=ks(),he;function ue(M,Y,X){xt(M);const J=Oe.list();return J.length?J.forEach(ve=>ve(M,Y,X)):console.error(M),Promise.reject(M)}function gt(){return he&&c.value!==Ln?Promise.resolve():new Promise((M,Y)=>{$e.add([M,Y])})}function xt(M){return he||(he=!M,Ee(),$e.list().forEach(([Y,X])=>M?X(M):Y()),$e.reset()),M}function It(M,Y,X,J){const{scrollBehavior:ve}=t;if(!Wr||!ve)return Promise.resolve();const _=!X&&r_(Pf(M.fullPath,0))||(J||!X)&&history.state&&history.state.scroll||null;return cc().then(()=>ve(M,Y,_)).then(I=>I&&t_(I)).catch(I=>ue(I,M,Y))}const xe=M=>s.go(M);let Ne;const Rn=new Set,Wt={currentRoute:c,listening:!0,addRoute:w,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:N,resolve:O,options:t,push:V,replace:Q,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:Oe.add,isReady:gt,install(M){const Y=this;M.component("RouterLink",C_),M.component("RouterView",ng),M.config.globalProperties.$router=Y,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>Xn(c)}),Wr&&!Ne&&c.value===Ln&&(Ne=!0,V(s.location).catch(ve=>{}));const X={};for(const ve in Ln)Object.defineProperty(X,ve,{get:()=>c.value[ve],enumerable:!0});M.provide(Qo,Y),M.provide(mc,Xd(X)),M.provide(El,c);const J=M.unmount;Rn.add(M),M.unmount=function(){Rn.delete(M),Rn.size<1&&(f=Ln,b&&b(),b=null,c.value=Ln,Ne=!1,he=!1),J()}}};function ft(M){return M.reduce((Y,X)=>Y.then(()=>y(X)),Promise.resolve())}return Wt}function x_(t,e){const n=[],r=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(f=>is(f,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(f=>is(f,c))||s.push(c))}return[n,r,s]}function Zo(){return jt(Qo)}function N_(t){return jt(mc)}const Or=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},D_={class:"navbar"},M_={class:"container"},L_={class:"navbar-content"},F_={class:"logo"},$_={key:0,class:"navbar-nav hidden-sm"},U_={class:"navbar-actions hidden-sm"},j_={key:1,class:"user-menu"},V_={key:0,class:"mobile-menu block-sm hidden-md"},B_={class:"container"},z_={key:0,class:"mobile-nav"},H_={class:"mobile-actions"},W_={__name:"NavBar",props:{currentTheme:{type:String,default:"light"}},emits:["toggle-theme"],setup(t,{emit:e}){const n=Zo(),r=N_(),s=ct(!1),o=ct(!1),a=ct(null),l=Ue(()=>o.value?[{name:"Dashboard",path:"/dashboard"},{name:"Settings",path:"/settings"}]:[]),c=()=>{n.push("/login")},f=()=>{n.push("/signup")},d=()=>{o.value=!1,a.value=null,n.push("/")},p=()=>{s.value=!s.value};return(m,w)=>{const R=Zn("font-awesome-icon"),N=Zn("router-link");return Te(),De("nav",D_,[E("div",M_,[E("div",L_,[ae(N,{to:"/",class:"navbar-brand"},{default:Jt(()=>[E("div",F_,[ae(R,{icon:"truck"})]),w[3]||(w[3]=E("span",{class:"brand-text"},"DDEX Distro",-1))]),_:1,__:[3]}),l.value.length>0?(Te(),De("div",$_,[(Te(!0),De(Ze,null,po(l.value,F=>(Te(),mo(N,{key:F.path,to:F.path,class:jo(["nav-link",{active:Xn(r).path===F.path}])},{default:Jt(()=>[dt(Ge(F.name),1)]),_:2},1032,["to","class"]))),128))])):js("",!0),E("div",U_,[E("button",{onClick:w[0]||(w[0]=F=>m.$emit("toggle-theme")),class:"btn-icon","aria-label":"Toggle theme"},[ae(R,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"])]),o.value?(Te(),De("div",j_,[E("button",{class:"user-avatar",onClick:d},[E("span",null,Ge(a.value?.initials||"U"),1)])])):(Te(),De(Ze,{key:0},[E("button",{onClick:c,class:"btn btn-secondary btn-sm"}," Sign In "),E("button",{onClick:f,class:"btn btn-primary btn-sm"}," Get Started ")],64))]),E("button",{onClick:p,class:"mobile-menu-btn block-sm hidden-md","aria-label":"Toggle menu"},[ae(R,{icon:s.value?"times":"bars"},null,8,["icon"])])])]),ae(Vp,{name:"slide"},{default:Jt(()=>[s.value?(Te(),De("div",V_,[E("div",B_,[l.value.length>0?(Te(),De("div",z_,[(Te(!0),De(Ze,null,po(l.value,F=>(Te(),mo(N,{key:F.path,to:F.path,class:"mobile-nav-link",onClick:w[1]||(w[1]=O=>s.value=!1)},{default:Jt(()=>[dt(Ge(F.name),1)]),_:2},1032,["to"]))),128))])):js("",!0),E("div",H_,[E("button",{onClick:w[2]||(w[2]=F=>m.$emit("toggle-theme")),class:"btn btn-secondary btn-sm"},[ae(R,{icon:t.currentTheme==="light"?"moon":"sun"},null,8,["icon"]),dt(" "+Ge(t.currentTheme==="light"?"Dark Mode":"Light Mode"),1)]),o.value?(Te(),De("button",{key:1,onClick:d,class:"btn btn-secondary"}," Sign Out ")):(Te(),De(Ze,{key:0},[E("button",{onClick:c,class:"btn btn-secondary"}," Sign In "),E("button",{onClick:f,class:"btn btn-primary"}," Get Started ")],64))])])])):js("",!0)]),_:1})])}}},G_=Or(W_,[["__scopeId","data-v-21f3ac1c"]]),q_={id:"app"},K_={class:"main-content"},X_={__name:"App",setup(t){const e=ct(localStorage.getItem("theme")||"light"),n=()=>{e.value=e.value==="light"?"dark":"light",localStorage.setItem("theme",e.value),document.documentElement.setAttribute("data-theme",e.value)};return Go(()=>{document.documentElement.setAttribute("data-theme",e.value)}),Fs("theme",{current:e,toggle:n}),(r,s)=>(Te(),De("div",q_,[ae(G_,{onToggleTheme:n,"current-theme":e.value},null,8,["current-theme"]),E("main",K_,[ae(Xn(ng),null,{default:Jt(({Component:o})=>[ae(Vp,{name:"fade",mode:"out-in"},{default:Jt(()=>[(Te(),mo(uy(o)))]),_:2},1024)]),_:1})])]))}},Y_=Or(X_,[["__scopeId","data-v-43c5cdbc"]]),J_={class:"splash-page"},Q_={class:"section bg-secondary"},Z_={class:"container"},eb={class:"quick-start"},tb={class:"code-block"},nb={class:"section"},rb={class:"container"},sb={class:"grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3"},ib={class:"card-body"},ob={class:"feature-icon"},ab={class:"feature-title"},lb={class:"feature-description"},cb={class:"section bg-secondary"},ub={class:"container"},fb={class:"integration-section"},hb={class:"integration-content"},db={class:"integration-features"},pb={class:"integration-item"},gb={class:"integration-item"},mb={class:"integration-item"},vb={class:"integration-item"},yb={__name:"SplashPage",setup(t){const e=Zo(),n=[{icon:"cube",title:"DDEX Native",description:"Built from the ground up for DDEX compliance with automatic ERN generation and validation."},{icon:"rocket",title:"Instant Deployment",description:"Deploy your own distribution platform in minutes with our npm package and CLI tools."},{icon:"bullseye",title:"Multi-Target Delivery",description:"Deliver to DSPs via FTP, SFTP, S3, or API with automated queue management."},{icon:"palette",title:"White-Label Ready",description:"Fully customizable branding, domain support, and multi-tenant architecture."},{icon:"check-circle",title:"Validation Built-In",description:"Every ERN is automatically validated through DDEX Workbench integration."},{icon:"chart-line",title:"Real-Time Analytics",description:"Track deliveries, monitor success rates, and analyze catalog performance."}],r=ct(`# Install and deploy in minutes
npx create-ddex-distro my-label-distro
cd my-label-distro
npm run deploy

# Your distribution platform is live!`),s=()=>{e.push("/signup")},o=()=>{window.open("https://demo.ddex-distro.org","_blank")},a=()=>{e.push("/docs")},l=()=>{navigator.clipboard.writeText(r.value)};return(c,f)=>{const d=Zn("font-awesome-icon");return Te(),De("div",J_,[E("section",{class:"hero-section"},[E("div",{class:"container"},[E("div",{class:"hero-content"},[f[0]||(f[0]=Qi('<div class="hero-badge" data-v-94ac01a1><span class="badge-text" data-v-94ac01a1>Open Source</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>DDEX Compliant</span><span class="badge-separator" data-v-94ac01a1>•</span><span class="badge-text" data-v-94ac01a1>npm Installable</span></div><h1 class="hero-title" data-v-94ac01a1> DDEX Delivery Platform <span class="hero-highlight" data-v-94ac01a1>in Minutes</span></h1><p class="hero-description" data-v-94ac01a1> DDEX Distro is an open-source, npm-installable music distribution platform that enables labels and artists to manage their catalog, generate DDEX-compliant ERN messages, and deliver releases to Digital Service Providers. </p>',3)),E("div",{class:"hero-actions"},[E("button",{onClick:s,class:"btn btn-primary btn-lg"}," Get Started Free "),E("button",{onClick:o,class:"btn btn-secondary btn-lg"}," View Demo ")]),f[1]||(f[1]=Qi('<div class="hero-stats" data-v-94ac01a1><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>500+</span><span class="stat-label" data-v-94ac01a1>Active Deployments</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>10k+</span><span class="stat-label" data-v-94ac01a1>Releases/Month</span></div><div class="stat" data-v-94ac01a1><span class="stat-value" data-v-94ac01a1>99.5%</span><span class="stat-label" data-v-94ac01a1>Delivery Success</span></div></div>',1))])])]),E("section",Q_,[E("div",Z_,[E("div",eb,[f[2]||(f[2]=E("div",{class:"quick-start-content"},[E("h2",{class:"section-title"},"Deploy in 3 Commands"),E("p",{class:"section-description"}," Get your distribution platform running faster than brewing coffee ")],-1)),E("div",tb,[E("pre",null,[E("code",null,Ge(r.value),1)]),E("button",{class:"copy-btn",onClick:l,title:"Copy to clipboard"},[ae(d,{icon:"copy"})])])])])]),E("section",nb,[E("div",rb,[f[3]||(f[3]=E("div",{class:"text-center mb-xl"},[E("h2",{class:"section-title"},"Everything You Need to Distribute Music"),E("p",{class:"section-description"}," A complete distribution platform with enterprise features, available to everyone ")],-1)),E("div",sb,[(Te(),De(Ze,null,po(n,p=>E("div",{key:p.title,class:"feature-card card card-hover"},[E("div",ib,[E("div",ob,[ae(d,{icon:p.icon},null,8,["icon"])]),E("h3",ab,Ge(p.title),1),E("p",lb,Ge(p.description),1)])])),64))])])]),E("section",cb,[E("div",ub,[E("div",fb,[E("div",hb,[f[8]||(f[8]=E("h2",{class:"section-title"},"Part of the DDEX Ecosystem",-1)),f[9]||(f[9]=E("p",{class:"section-description"}," Seamlessly integrates with DDEX Workbench for validation and DDEX DSP for testing your deliveries ",-1)),E("div",db,[E("div",pb,[ae(d,{icon:"check",class:"check-icon"}),f[4]||(f[4]=E("span",null,"Automatic ERN validation via Workbench API",-1))]),E("div",gb,[ae(d,{icon:"check",class:"check-icon"}),f[5]||(f[5]=E("span",null,"Test deliveries with your own DDEX DSP instance",-1))]),E("div",mb,[ae(d,{icon:"check",class:"check-icon"}),f[6]||(f[6]=E("span",null,"Single sign-on across all DDEX tools",-1))]),E("div",vb,[ae(d,{icon:"check",class:"check-icon"}),f[7]||(f[7]=E("span",null,"Track releases from creation to consumption",-1))])])]),f[10]||(f[10]=Qi('<div class="integration-visual" data-v-94ac01a1><div class="ecosystem-diagram" data-v-94ac01a1><div class="ecosystem-node ecosystem-workbench" data-v-94ac01a1>DDEX Workbench</div><div class="ecosystem-node ecosystem-distro" data-v-94ac01a1>DDEX Distro</div><div class="ecosystem-node ecosystem-dsp" data-v-94ac01a1>DDEX DSP</div><svg class="ecosystem-connections" viewBox="0 0 300 200" data-v-94ac01a1><path d="M50 50 L150 100 L250 50" stroke="var(--color-primary)" stroke-width="2" fill="none" stroke-dasharray="5,5" data-v-94ac01a1></path></svg></div></div>',1))])])]),E("section",{class:"section"},[E("div",{class:"container"},[E("div",{class:"cta-section"},[f[11]||(f[11]=E("h2",{class:"cta-title"},"Ready to Start Distributing?",-1)),f[12]||(f[12]=E("p",{class:"cta-description"}," Join hundreds of labels and artists using DDEX Distro to deliver their music worldwide ",-1)),E("div",{class:"cta-actions"},[E("button",{onClick:s,class:"btn btn-primary btn-lg"}," Deploy Your Platform "),E("button",{onClick:a,class:"btn btn-secondary btn-lg"}," Read Documentation ")])])])])])}}},_b=Or(yb,[["__scopeId","data-v-94ac01a1"]]),bb={class:"auth-page"},wb={class:"auth-container"},Ib={class:"auth-card card"},Eb={class:"card-body"},Sb={class:"auth-header"},Tb={class:"auth-logo"},Ab={class:"form-group"},Cb=["disabled"],kb={class:"form-group"},Pb={class:"form-label"},Rb=["disabled"],Ob={key:0,class:"form-error"},xb=["disabled"],Nb=["disabled"],Db={class:"auth-footer"},Mb={__name:"Login",setup(t){const e=Zo(),n=ct(""),r=ct(""),s=ct(""),o=ct(!1),a=async()=>{s.value="",o.value=!0;try{console.log("Login attempt:",{email:n.value,password:r.value}),setTimeout(()=>{e.push("/dashboard")},1e3)}catch{s.value="Invalid email or password"}finally{o.value=!1}},l=async()=>{console.log("Google login")};return(c,f)=>{const d=Zn("font-awesome-icon"),p=Zn("router-link");return Te(),De("div",bb,[E("div",wb,[E("div",Ib,[E("div",Eb,[E("div",Sb,[E("div",Tb,[ae(d,{icon:"truck"})]),f[2]||(f[2]=E("h1",{class:"auth-title"},"Welcome Back",-1)),f[3]||(f[3]=E("p",{class:"auth-subtitle"},"Sign in to your DDEX Distro account",-1))]),E("form",{onSubmit:zp(a,["prevent"]),class:"auth-form"},[E("div",Ab,[f[4]||(f[4]=E("label",{class:"form-label"},"Email Address",-1)),Je(E("input",{"onUpdate:modelValue":f[0]||(f[0]=m=>n.value=m),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:o.value},null,8,Cb),[[qn,n.value]])]),E("div",kb,[E("label",Pb,[f[6]||(f[6]=dt(" Password ",-1)),ae(p,{to:"/forgot-password",class:"form-label-link"},{default:Jt(()=>f[5]||(f[5]=[dt(" Forgot password? ",-1)])),_:1,__:[5]})]),Je(E("input",{"onUpdate:modelValue":f[1]||(f[1]=m=>r.value=m),type:"password",class:"form-input",placeholder:"Enter your password",required:"",disabled:o.value},null,8,Rb),[[qn,r.value]])]),s.value?(Te(),De("div",Ob,Ge(s.value),1)):js("",!0),E("button",{type:"submit",class:"btn btn-primary btn-block",disabled:o.value},Ge(o.value?"Signing in...":"Sign In"),9,xb),f[8]||(f[8]=E("div",{class:"auth-divider"},[E("span",null,"or")],-1)),E("button",{type:"button",onClick:l,class:"btn btn-secondary btn-block",disabled:o.value},[ae(d,{icon:["fab","google"]}),f[7]||(f[7]=dt(" Continue with Google ",-1))],8,Nb)],32),E("div",Db,[E("p",null,[f[10]||(f[10]=dt(" Don't have an account? ",-1)),ae(p,{to:"/signup",class:"auth-link"},{default:Jt(()=>f[9]||(f[9]=[dt(" Sign up for free ",-1)])),_:1,__:[9]})])])])])])])}}},Lb=Or(Mb,[["__scopeId","data-v-6ea86dd2"]]),Fb={class:"auth-page"},$b={class:"auth-container"},Ub={class:"auth-card card"},jb={class:"card-body"},Vb={class:"auth-header"},Bb={class:"auth-logo"},zb={class:"form-group"},Hb=["disabled"],Wb={class:"form-group"},Gb=["disabled"],qb={class:"form-group"},Kb=["disabled"],Xb={class:"form-group"},Yb=["disabled"],Jb={class:"form-group"},Qb={class:"form-checkbox"},Zb=["disabled"],e2={key:0,class:"form-error"},t2=["disabled"],n2=["disabled"],r2={class:"auth-footer"},s2={__name:"Signup",setup(t){const e=Zo(),n=ct({organizationName:"",email:"",password:"",confirmPassword:"",acceptTerms:!1}),r=ct(""),s=ct(!1),o=async()=>{if(r.value="",n.value.password!==n.value.confirmPassword){r.value="Passwords do not match";return}if(!n.value.acceptTerms){r.value="Please accept the terms and conditions";return}s.value=!0;try{console.log("Signup attempt:",n.value),setTimeout(()=>{e.push("/dashboard")},1e3)}catch{r.value="Failed to create account. Please try again."}finally{s.value=!1}},a=async()=>{console.log("Google signup")};return(l,c)=>{const f=Zn("font-awesome-icon"),d=Zn("router-link");return Te(),De("div",Fb,[E("div",$b,[E("div",Ub,[E("div",jb,[E("div",Vb,[E("div",Bb,[ae(f,{icon:"truck"})]),c[5]||(c[5]=E("h1",{class:"auth-title"},"Get Started",-1)),c[6]||(c[6]=E("p",{class:"auth-subtitle"},"Create your DDEX Distro account",-1))]),E("form",{onSubmit:zp(o,["prevent"]),class:"auth-form"},[E("div",zb,[c[7]||(c[7]=E("label",{class:"form-label"},"Organization Name",-1)),Je(E("input",{"onUpdate:modelValue":c[0]||(c[0]=p=>n.value.organizationName=p),type:"text",class:"form-input",placeholder:"My Record Label",required:"",disabled:s.value},null,8,Hb),[[qn,n.value.organizationName]])]),E("div",Wb,[c[8]||(c[8]=E("label",{class:"form-label"},"Email Address",-1)),Je(E("input",{"onUpdate:modelValue":c[1]||(c[1]=p=>n.value.email=p),type:"email",class:"form-input",placeholder:"you@example.com",required:"",disabled:s.value},null,8,Gb),[[qn,n.value.email]])]),E("div",qb,[c[9]||(c[9]=E("label",{class:"form-label"},"Password",-1)),Je(E("input",{"onUpdate:modelValue":c[2]||(c[2]=p=>n.value.password=p),type:"password",class:"form-input",placeholder:"Create a strong password",required:"",minlength:"8",disabled:s.value},null,8,Kb),[[qn,n.value.password]]),c[10]||(c[10]=E("div",{class:"form-hint"},"Minimum 8 characters",-1))]),E("div",Xb,[c[11]||(c[11]=E("label",{class:"form-label"},"Confirm Password",-1)),Je(E("input",{"onUpdate:modelValue":c[3]||(c[3]=p=>n.value.confirmPassword=p),type:"password",class:"form-input",placeholder:"Confirm your password",required:"",disabled:s.value},null,8,Yb),[[qn,n.value.confirmPassword]])]),E("div",Jb,[E("label",Qb,[Je(E("input",{"onUpdate:modelValue":c[4]||(c[4]=p=>n.value.acceptTerms=p),type:"checkbox",disabled:s.value},null,8,Zb),[[Hr,n.value.acceptTerms]]),c[12]||(c[12]=E("span",null,[dt(" I agree to the "),E("a",{href:"/terms",target:"_blank",class:"auth-link"},"Terms of Service"),dt(" and "),E("a",{href:"/privacy",target:"_blank",class:"auth-link"},"Privacy Policy")],-1))])]),r.value?(Te(),De("div",e2,Ge(r.value),1)):js("",!0),E("button",{type:"submit",class:"btn btn-primary btn-block",disabled:s.value},Ge(s.value?"Creating account...":"Create Account"),9,t2),c[14]||(c[14]=E("div",{class:"auth-divider"},[E("span",null,"or")],-1)),E("button",{type:"button",onClick:a,class:"btn btn-secondary btn-block",disabled:s.value},[ae(f,{icon:["fab","google"]}),c[13]||(c[13]=dt(" Continue with Google ",-1))],8,n2)],32),E("div",r2,[E("p",null,[c[16]||(c[16]=dt(" Already have an account? ",-1)),ae(d,{to:"/login",class:"auth-link"},{default:Jt(()=>c[15]||(c[15]=[dt(" Sign in ",-1)])),_:1,__:[15]})])])])])])])}}},i2=Or(s2,[["__scopeId","data-v-927256d8"]]),o2={class:"dashboard"},a2={class:"container"},l2={class:"stats-grid"},c2={class:"stat-card card"},u2={class:"card-body"},f2={class:"stat-icon"},h2={class:"stat-content"},d2={class:"stat-value"},p2={class:"stat-card card"},g2={class:"card-body"},m2={class:"stat-icon pending"},v2={class:"stat-content"},y2={class:"stat-value"},_2={class:"stat-card card"},b2={class:"card-body"},w2={class:"stat-icon success"},I2={class:"stat-content"},E2={class:"stat-value"},S2={class:"activity-section"},T2={class:"card"},A2={class:"card-body"},C2={key:0,class:"empty-state"},k2={key:1,class:"activity-list"},P2={class:"activity-icon"},R2={class:"activity-content"},O2={class:"activity-title"},x2={class:"activity-time"},N2={class:"quick-actions"},D2={class:"action-grid"},M2={class:"action-card card card-hover"},L2={class:"card-body"},F2={class:"action-card card card-hover"},$2={class:"card-body"},U2={class:"action-card card card-hover"},j2={class:"card-body"},V2={__name:"Dashboard",setup(t){const e=ct({totalReleases:0,pendingDeliveries:0,successRate:0,recentActivity:[]});return Go(()=>{e.value={totalReleases:12,pendingDeliveries:3,successRate:98.5,recentActivity:[{id:1,type:"release",title:"New Album Released",time:"2 hours ago"},{id:2,type:"delivery",title:"Delivery to Spotify completed",time:"5 hours ago"},{id:3,type:"validation",title:"ERN validation passed",time:"1 day ago"}]}}),(n,r)=>{const s=Zn("font-awesome-icon");return Te(),De("div",o2,[E("div",a2,[r[9]||(r[9]=E("div",{class:"dashboard-header"},[E("h1",{class:"page-title"},"Dashboard"),E("p",{class:"page-subtitle"},"Welcome back! Here's an overview of your distribution platform.")],-1)),E("div",l2,[E("div",c2,[E("div",u2,[E("div",f2,[ae(s,{icon:"music"})]),E("div",h2,[E("div",d2,Ge(e.value.totalReleases),1),r[0]||(r[0]=E("div",{class:"stat-label"},"Total Releases",-1))])])]),E("div",p2,[E("div",g2,[E("div",m2,[ae(s,{icon:"truck"})]),E("div",v2,[E("div",y2,Ge(e.value.pendingDeliveries),1),r[1]||(r[1]=E("div",{class:"stat-label"},"Pending Deliveries",-1))])])]),E("div",_2,[E("div",b2,[E("div",w2,[ae(s,{icon:"check-circle"})]),E("div",I2,[E("div",E2,Ge(e.value.successRate)+"%",1),r[2]||(r[2]=E("div",{class:"stat-label"},"Success Rate",-1))])])])]),E("div",S2,[r[4]||(r[4]=E("h2",{class:"section-title"},"Recent Activity",-1)),E("div",T2,[E("div",A2,[e.value.recentActivity.length===0?(Te(),De("div",C2,[ae(s,{icon:"chart-bar",class:"empty-icon"}),r[3]||(r[3]=E("p",null,"No recent activity to display",-1))])):(Te(),De("div",k2,[(Te(!0),De(Ze,null,po(e.value.recentActivity,o=>(Te(),De("div",{key:o.id,class:"activity-item"},[E("div",P2,[ae(s,{icon:o.type==="release"?"music":o.type==="delivery"?"truck":"check"},null,8,["icon"])]),E("div",R2,[E("div",O2,Ge(o.title),1),E("div",x2,Ge(o.time),1)])]))),128))]))])])]),E("div",N2,[r[8]||(r[8]=E("h2",{class:"section-title"},"Quick Actions",-1)),E("div",D2,[E("button",M2,[E("div",L2,[ae(s,{icon:"plus",class:"action-icon"}),r[5]||(r[5]=E("span",{class:"action-label"},"New Release",-1))])]),E("button",F2,[E("div",$2,[ae(s,{icon:"upload",class:"action-icon"}),r[6]||(r[6]=E("span",{class:"action-label"},"Upload Assets",-1))])]),E("button",U2,[E("div",j2,[ae(s,{icon:"cog",class:"action-icon"}),r[7]||(r[7]=E("span",{class:"action-label"},"Configure Targets",-1))])])])])])])}}},B2=Or(V2,[["__scopeId","data-v-cde861f3"]]),z2={class:"settings"},H2={class:"container"},W2={class:"settings-section"},G2={class:"card"},q2={class:"card-body"},K2={class:"form-group"},X2={class:"form-group"},Y2={class:"form-group"},J2={class:"settings-section"},Q2={class:"card"},Z2={class:"card-body"},ew={class:"form-group"},tw={class:"form-group"},nw={class:"form-checkbox"},rw={class:"form-group"},sw={class:"form-checkbox"},iw={class:"settings-section"},ow={class:"card"},aw={class:"card-body"},lw={class:"form-group"},cw={class:"form-checkbox"},uw={class:"form-group"},fw={class:"form-checkbox"},hw={class:"form-group"},dw={class:"form-checkbox"},pw={__name:"Settings",setup(t){const e=ct({profile:{name:"My Label",email:"admin@mylabel.com",timezone:"America/New_York"},platform:{defaultERNVersion:"4.3",autoValidate:!0,requireApproval:!1},notifications:{emailDeliverySuccess:!0,emailDeliveryFailed:!0,emailNewRelease:!1}}),n=r=>{console.log(`Saving ${r}:`,e.value[r])};return(r,s)=>(Te(),De("div",z2,[E("div",H2,[s[26]||(s[26]=E("div",{class:"settings-header"},[E("h1",{class:"page-title"},"Settings"),E("p",{class:"page-subtitle"},"Manage your distribution platform configuration")],-1)),E("div",W2,[E("div",G2,[s[16]||(s[16]=E("div",{class:"card-header"},[E("h2",{class:"section-title"},"Profile Settings")],-1)),E("div",q2,[E("div",K2,[s[12]||(s[12]=E("label",{class:"form-label"},"Organization Name",-1)),Je(E("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.value.profile.name=o),type:"text",class:"form-input",placeholder:"Enter organization name"},null,512),[[qn,e.value.profile.name]])]),E("div",X2,[s[13]||(s[13]=E("label",{class:"form-label"},"Email Address",-1)),Je(E("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.profile.email=o),type:"email",class:"form-input",placeholder:"admin@example.com"},null,512),[[qn,e.value.profile.email]])]),E("div",Y2,[s[15]||(s[15]=E("label",{class:"form-label"},"Timezone",-1)),Je(E("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.value.profile.timezone=o),class:"form-select"},s[14]||(s[14]=[Qi('<option value="America/New_York" data-v-edd891c4>Eastern Time (ET)</option><option value="America/Chicago" data-v-edd891c4>Central Time (CT)</option><option value="America/Denver" data-v-edd891c4>Mountain Time (MT)</option><option value="America/Los_Angeles" data-v-edd891c4>Pacific Time (PT)</option><option value="Europe/London" data-v-edd891c4>London (GMT)</option><option value="Europe/Paris" data-v-edd891c4>Paris (CET)</option>',6)]),512),[[Sf,e.value.profile.timezone]])]),E("button",{onClick:s[3]||(s[3]=o=>n("profile")),class:"btn btn-primary"}," Save Profile ")])])]),E("div",J2,[E("div",Q2,[s[21]||(s[21]=E("div",{class:"card-header"},[E("h2",{class:"section-title"},"Platform Settings")],-1)),E("div",Z2,[E("div",ew,[s[18]||(s[18]=E("label",{class:"form-label"},"Default ERN Version",-1)),Je(E("select",{"onUpdate:modelValue":s[4]||(s[4]=o=>e.value.platform.defaultERNVersion=o),class:"form-select"},s[17]||(s[17]=[E("option",{value:"3.8.2"},"ERN 3.8.2",-1),E("option",{value:"4.2"},"ERN 4.2",-1),E("option",{value:"4.3"},"ERN 4.3",-1)]),512),[[Sf,e.value.platform.defaultERNVersion]])]),E("div",tw,[E("label",nw,[Je(E("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>e.value.platform.autoValidate=o),type:"checkbox"},null,512),[[Hr,e.value.platform.autoValidate]]),s[19]||(s[19]=E("span",null,"Automatically validate ERN messages",-1))])]),E("div",rw,[E("label",sw,[Je(E("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>e.value.platform.requireApproval=o),type:"checkbox"},null,512),[[Hr,e.value.platform.requireApproval]]),s[20]||(s[20]=E("span",null,"Require approval before delivery",-1))])]),E("button",{onClick:s[7]||(s[7]=o=>n("platform")),class:"btn btn-primary"}," Save Platform Settings ")])])]),E("div",iw,[E("div",ow,[s[25]||(s[25]=E("div",{class:"card-header"},[E("h2",{class:"section-title"},"Notification Settings")],-1)),E("div",aw,[E("div",lw,[E("label",cw,[Je(E("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>e.value.notifications.emailDeliverySuccess=o),type:"checkbox"},null,512),[[Hr,e.value.notifications.emailDeliverySuccess]]),s[22]||(s[22]=E("span",null,"Email on successful delivery",-1))])]),E("div",uw,[E("label",fw,[Je(E("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>e.value.notifications.emailDeliveryFailed=o),type:"checkbox"},null,512),[[Hr,e.value.notifications.emailDeliveryFailed]]),s[23]||(s[23]=E("span",null,"Email on failed delivery",-1))])]),E("div",hw,[E("label",dw,[Je(E("input",{"onUpdate:modelValue":s[10]||(s[10]=o=>e.value.notifications.emailNewRelease=o),type:"checkbox"},null,512),[[Hr,e.value.notifications.emailNewRelease]]),s[24]||(s[24]=E("span",null,"Email on new release creation",-1))])]),E("button",{onClick:s[11]||(s[11]=o=>n("notifications")),class:"btn btn-primary"}," Save Notifications ")])])])])]))}},gw=Or(pw,[["__scopeId","data-v-edd891c4"]]),rg=O_({history:a_("/"),routes:[{path:"/",name:"home",component:_b},{path:"/login",name:"login",component:Lb},{path:"/signup",name:"signup",component:i2},{path:"/dashboard",name:"dashboard",component:B2,meta:{requiresAuth:!0}},{path:"/settings",name:"settings",component:gw,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",redirect:"/"}]});rg.beforeEach((t,e,n)=>{t.meta.requiresAuth?n("/login"):n()});const mw=()=>{};var Hf={};/**
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
 */const sg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,d=o>>2,p=(o&3)<<4|l>>4;let m=(l&15)<<2|f>>6,w=f&63;c||(w=64,a||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||f==null||p==null)throw new yw;const m=o<<2|l>>4;if(r.push(m),f!==64){const w=l<<4&240|f>>2;if(r.push(w),p!==64){const R=f<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(t){const e=sg(t);return ig.encodeByteArray(e,!0)},_o=function(t){return _w(t).replace(/\./g,"")},og=function(t){try{return ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ww=()=>bw().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof Hf>"u")return;const t=Hf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ew=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&og(t[1]);return e&&JSON.parse(e)},vc=()=>{try{return mw()||ww()||Iw()||Ew()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ag=t=>vc()?.emulatorHosts?.[t],yc=t=>{const e=ag(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lg=()=>vc()?.config,cg=t=>vc()?.[`_${t}`];/**
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
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ea(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function ug(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[_o(JSON.stringify(n)),_o(JSON.stringify(a)),""].join(".")}const zs={};function Tw(){const t={prod:[],emulator:[]};for(const e of Object.keys(zs))zs[e]?t.emulator.push(e):t.prod.push(e);return t}function Aw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wf=!1;function ta(t,e){if(typeof window>"u"||typeof document>"u"||!xr(window.location.host)||zs[t]===e||zs[t]||Wf)return;zs[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",o=Tw().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function f(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Wf=!0,a()},m}function d(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Aw(r),w=n("text"),R=document.getElementById(w)||document.createElement("span"),N=n("learnmore"),F=document.getElementById(N)||document.createElement("a"),O=n("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;l(j),d(F,N);const V=f();c(D,O),j.append(D,R,F,V),document.body.appendChild(j)}o?(R.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function kw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rw(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hg(){try{return typeof indexedDB=="object"}catch{return!1}}function dg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Ow(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const xw="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xw,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Nw(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ot(s,l,r)}}function Nw(t,e){return t.replace(Dw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Dw=/\{\$([^}]+)}/g;function Mw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(Gf(o)&&Gf(a)){if(!tr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gf(t){return t!==null&&typeof t=="object"}/**
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
 */function gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Lw(t,e){const n=new Fw(t,e);return n.subscribe.bind(n)}class Fw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$w(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ba),s.error===void 0&&(s.error=Ba),s.complete===void 0&&(s.complete=Ba);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $w(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}/**
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
 */const Uw=1e3,jw=2,Vw=14400*1e3,Bw=.5;function qf(t,e=Uw,n=jw){const r=e*Math.pow(n,t),s=Math.round(Bw*r*(Math.random()-.5)*2);return Math.min(Vw,r+s)}/**
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
 */function Ht(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class zw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ww(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hw(t){return t===pr?void 0:t}function Ww(t){return t.instantiationMode==="EAGER"}/**
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
 */class Gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const qw={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Kw=Ie.INFO,Xw={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Yw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class na{constructor(e){this.name=e,this._logLevel=Kw,this._logHandler=Yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const Jw=(t,e)=>e.some(n=>t instanceof n);let Kf,Xf;function Qw(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zw(){return Xf||(Xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pg=new WeakMap,Sl=new WeakMap,gg=new WeakMap,za=new WeakMap,_c=new WeakMap;function e4(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Yn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&pg.set(n,t)}).catch(()=>{}),_c.set(e,t),e}function t4(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Sl.set(t,e)}let Tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n4(t){Tl=t(Tl)}function r4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ha(this),e,...n);return gg.set(r,e.sort?e.sort():[e]),Yn(r)}:Zw().includes(t)?function(...e){return t.apply(Ha(this),e),Yn(pg.get(this))}:function(...e){return Yn(t.apply(Ha(this),e))}}function s4(t){return typeof t=="function"?r4(t):(t instanceof IDBTransaction&&t4(t),Jw(t,Qw())?new Proxy(t,Tl):t)}function Yn(t){if(t instanceof IDBRequest)return e4(t);if(za.has(t))return za.get(t);const e=s4(t);return e!==t&&(za.set(t,e),_c.set(e,t)),e}const Ha=t=>_c.get(t);function mg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=Yn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Yn(a.result),c.oldVersion,c.newVersion,Yn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const i4=["get","getKey","getAll","getAllKeys","count"],o4=["put","add","delete","clear"],Wa=new Map;function Yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wa.get(e))return Wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=o4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||i4.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return Wa.set(e,o),o}n4(t=>({...t,get:(e,n,r)=>Yf(e,n)||t.get(e,n,r),has:(e,n)=>!!Yf(e,n)||t.has(e,n)}));/**
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
 */class a4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function l4(t){return t.getComponent()?.type==="VERSION"}const Al="@firebase/app",Jf="0.14.0";/**
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
 */const In=new na("@firebase/app"),c4="@firebase/app-compat",u4="@firebase/analytics-compat",f4="@firebase/analytics",h4="@firebase/app-check-compat",d4="@firebase/app-check",p4="@firebase/auth",g4="@firebase/auth-compat",m4="@firebase/database",v4="@firebase/data-connect",y4="@firebase/database-compat",_4="@firebase/functions",b4="@firebase/functions-compat",w4="@firebase/installations",I4="@firebase/installations-compat",E4="@firebase/messaging",S4="@firebase/messaging-compat",T4="@firebase/performance",A4="@firebase/performance-compat",C4="@firebase/remote-config",k4="@firebase/remote-config-compat",P4="@firebase/storage",R4="@firebase/storage-compat",O4="@firebase/firestore",x4="@firebase/ai",N4="@firebase/firestore-compat",D4="firebase",M4="12.0.0";/**
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
 */const Cl="[DEFAULT]",L4={[Al]:"fire-core",[c4]:"fire-core-compat",[f4]:"fire-analytics",[u4]:"fire-analytics-compat",[d4]:"fire-app-check",[h4]:"fire-app-check-compat",[p4]:"fire-auth",[g4]:"fire-auth-compat",[m4]:"fire-rtdb",[v4]:"fire-data-connect",[y4]:"fire-rtdb-compat",[_4]:"fire-fn",[b4]:"fire-fn-compat",[w4]:"fire-iid",[I4]:"fire-iid-compat",[E4]:"fire-fcm",[S4]:"fire-fcm-compat",[T4]:"fire-perf",[A4]:"fire-perf-compat",[C4]:"fire-rc",[k4]:"fire-rc-compat",[P4]:"fire-gcs",[R4]:"fire-gcs-compat",[O4]:"fire-fst",[N4]:"fire-fst-compat",[x4]:"fire-vertex","fire-js":"fire-js",[D4]:"fire-js-all"};/**
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
 */const bo=new Map,F4=new Map,kl=new Map;function Qf(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(kl.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;kl.set(e,t);for(const n of bo.values())Qf(n,t);for(const n of F4.values())Qf(n,t);return!0}function kn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Nr("app","Firebase",$4);/**
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
 */class U4{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=M4;function vg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Cl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=lg()),!n)throw Jn.create("no-options");const o=bo.get(s);if(o){if(tr(n,o.options)&&tr(r,o.config))return o;throw Jn.create("duplicate-app",{appName:s})}const a=new Gw(s);for(const c of kl.values())a.addComponent(c);const l=new U4(n,r,a);return bo.set(s,l),l}function mi(t=Cl){const e=bo.get(t);if(!e&&t===Cl&&lg())return vg();if(!e)throw Jn.create("no-app",{appName:t});return e}function nt(t,e,n){let r=L4[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}Rt(new bt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const j4="firebase-heartbeat-database",V4=1,ai="firebase-heartbeat-store";let Ga=null;function yg(){return Ga||(Ga=mg(j4,V4,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),Ga}async function B4(t){try{const n=(await yg()).transaction(ai),r=await n.objectStore(ai).get(_g(t));return await n.done,r}catch(e){if(e instanceof Ot)In.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e?.message});In.warn(n.message)}}}async function Zf(t,e){try{const r=(await yg()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,_g(t)),await r.done}catch(n){if(n instanceof Ot)In.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n?.message});In.warn(r.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
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
 */const z4=1024,H4=30;class W4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>H4){const s=K4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){In.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=eh(),{heartbeatsToSend:n,unsentEntries:r}=G4(this._heartbeatsCache.heartbeats),s=_o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return In.warn(e),""}}}function eh(){return new Date().toISOString().substring(0,10)}function G4(t,e=z4){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),th(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),th(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class q4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hg()?dg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await B4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function th(t){return _o(JSON.stringify({version:2,heartbeats:t})).length}function K4(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function X4(t){Rt(new bt("platform-logger",e=>new a4(e),"PRIVATE")),Rt(new bt("heartbeat",e=>new W4(e),"PRIVATE")),nt(Al,Jf,t),nt(Al,Jf,"esm2020"),nt("fire-js","")}X4("");var Y4="firebase",J4="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(Y4,J4,"app");function bg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Q4=bg,wg=new Nr("auth","Firebase",bg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new na("@firebase/auth");function Z4(t,...e){wo.logLevel<=Ie.WARN&&wo.warn(`Auth (${Dr}): ${t}`,...e)}function eo(t,...e){wo.logLevel<=Ie.ERROR&&wo.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw bc(t,...e)}function tn(t,...e){return bc(t,...e)}function Ig(t,e,n){const r={...Q4(),[e]:n};return new Nr("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return Ig(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wg.create(t,...e)}function oe(t,e,...n){if(!t)throw bc(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eo(e),new Error(e)}function Sn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){return typeof self<"u"&&self.location?.href||""}function eI(){return nh()==="http:"||nh()==="https:"}function nh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eI()||fg()||"connection"in navigator)?navigator.onLine:!0}function nI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Cw()||Pw()}get(){return tI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iI=new vi(3e4,6e4);function Ic(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fs(t,e,n,r,s={}){return Sg(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=gi({key:t.config.apiKey,...a}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f={method:e,headers:c,...o};return kw()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&xr(t.emulatorConfig.host)&&(f.credentials="include"),Eg.fetch()(await Tg(t,t.config.apiHost,n,l),f)})}async function Sg(t,e,n){t._canInitEmulator=!1;const r={...rI,...e};try{const s=new aI(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw zi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[c,f]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw zi(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ig(t,d,f);En(t,d)}}catch(s){if(s instanceof Ot)throw s;En(t,"network-request-failed",{message:String(s)})}}async function oI(t,e,n,r,s={}){const o=await fs(t,e,n,r,s);return"mfaPendingCredential"in o&&En(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Tg(t,e,n,r){const s=`${e}${n}?${r}`,o=t,a=o.config.emulator?wc(t.config,s):`${t.config.apiScheme}://${s}`;return sI.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class aI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),iI.get())})}}function zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function Io(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cI(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),s=Ec(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:Hs(qa(s.auth_time)),issuedAtTime:Hs(qa(s.iat)),expirationTime:Hs(qa(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function qa(t){return Number(t)*1e3}function Ec(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=og(n);return s?JSON.parse(s):(eo("Failed to decode base64 JWT payload"),null)}catch(s){return eo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function rh(t){const e=Ec(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&uI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eo(t){const e=t.auth,n=await t.getIdToken(),r=await li(t,Io(e,{idToken:n}));oe(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=s.providerUserInfo?.length?Ag(s.providerUserInfo):[],a=dI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!a?.length,f=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function hI(t){const e=Ht(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ag(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){const n=await Sg(t,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=await Tg(t,s,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&xr(t.emulatorConfig.host)&&(c.credentials="include"),Eg.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gI(t,e){return fs(t,"POST","/v2/accounts:revokeToken",Ic(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=rh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await pI(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new Zr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(oe(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new fI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cI(this,e)}reload(){return hI(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await li(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,f=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:w,providerData:R,stsTokenManager:N}=n;oe(p&&N,e,"internal-error");const F=Zr.fromJSON(this.name,N);oe(typeof p=="string",e,"internal-error"),Fn(r,e.name),Fn(s,e.name),oe(typeof m=="boolean",e,"internal-error"),oe(typeof w=="boolean",e,"internal-error"),Fn(o,e.name),Fn(a,e.name),Fn(l,e.name),Fn(c,e.name),Fn(f,e.name),Fn(d,e.name);const O=new Mt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:w,photoURL:a,phoneNumber:o,tenantId:l,stsTokenManager:F,createdAt:f,lastLoginAt:d});return R&&Array.isArray(R)&&(O.providerData=R.map(D=>({...D}))),c&&(O._redirectEventId=c),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zr;s.updateFromServerResponse(n);const o=new Mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Eo(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Ag(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,l=new Zr;l.updateFromIdToken(r);const c=new Mt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(c,f),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map;function yn(t){Sn(t instanceof Function,"Expected a class definition");let e=sh.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sh.set(t,e),e)}/**
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
 */class Cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cg.type="NONE";const ih=Cg;/**
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
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=to(this.userKey,s.apiKey,o),this.fullPersistenceKey=to("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Io(this.auth,{idToken:e}).catch(()=>{});return n?Mt._fromGetAccountInfoResponse(this.auth,n,e):null}return Mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(yn(ih),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||yn(ih);const a=to(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){let p;if(typeof d=="string"){const m=await Io(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Mt._fromGetAccountInfoResponse(e,m,d)}else p=Mt._fromJSON(e,d);f!==o&&(l=p),o=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new es(o,e,r):(o=c[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new es(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Og(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Dg(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||Rg(e))&&!e.includes("edge/"))return"Chrome";if(xg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function kg(t=ut()){return/firefox\//i.test(t)}function Pg(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rg(t=ut()){return/crios\//i.test(t)}function Og(t=ut()){return/iemobile/i.test(t)}function xg(t=ut()){return/android/i.test(t)}function Ng(t=ut()){return/blackberry/i.test(t)}function Dg(t=ut()){return/webos/i.test(t)}function Sc(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mI(t=ut()){return Sc(t)&&!!window.navigator?.standalone}function vI(){return Rw()&&document.documentMode===10}function Mg(t=ut()){return Sc(t)||xg(t)||Dg(t)||Ng(t)||/windows phone/i.test(t)||Og(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e=[]){let n;switch(t){case"Browser":n=oh(ut());break;case"Worker":n=`${oh(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class yI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,l)=>{try{const c=e(o);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function _I(t,e={}){return fs(t,"GET","/v2/passwordPolicy",Ic(t,e))}/**
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
 */const bI=6;class wI{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new yI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await es.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Io(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(wr(this));const n=e?Ht(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _I(this),n=new wI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gI(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Z4(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Tc(t){return Ht(t)}class ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lw(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EI(t){Ac=t}function SI(t){return Ac.loadJS(t)}function TI(){return Ac.gapiScript}function AI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e){const n=kn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(tr(o,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function kI(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(yn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function PI(t,e,n){const r=Tc(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=Fg(e),{host:a,port:l}=RI(e),c=l===null?"":`:${l}`,f={url:`${o}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(tr(f,r.config.emulator)&&tr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,xr(a)?(ea(`${o}//${a}${c}`),ta("Auth",!0)):OI()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RI(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:lh(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:lh(a)}}}function lh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return oI(t,"POST","/v1/accounts:signInWithIdp",Ic(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="http://localhost";class Sr extends $g{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=n;if(!r||!s)return null;const a=new Sr(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends yi{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends yi{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends yi{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await Mt._fromIdTokenResponse(e,r,s),a=ch(r);return new as({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ch(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ch(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Ot{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,So.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new So(e,n,r,s)}}function jg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(t,o,e,r):o})}async function NI(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
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
 */async function DI(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const o=await li(t,jg(r,s,e,t),n);oe(o.idToken,r,"internal-error");const a=Ec(o.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(t.uid===l,r,"user-mismatch"),as._forOperation(t,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&En(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e,n=!1){if(Ct(t.app))return Promise.reject(wr(t));const r="signIn",s=await jg(t,r,e),o=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}function LI(t,e,n,r){return Ht(t).onIdTokenChanged(e,n,r)}function FI(t,e,n){return Ht(t).beforeAuthStateChanged(e,n)}const To="__sak";/**
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
 */class Vg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(To,"1"),this.storage.removeItem(To),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=1e3,UI=10;class Bg extends Vg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);vI()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bg.type="LOCAL";const jI=Bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Vg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zg.type="SESSION";const Hg=zg;/**
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
 */function VI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(n.origin,o)),c=await VI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,c)=>{const f=Cc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===f)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(m.data.response);break;default:clearTimeout(d),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function zI(t){nn().location.href=t}/**
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
 */function Wg(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function HI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WI(){return navigator?.serviceWorker?.controller||null}function GI(){return Wg()?self:null}/**
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
 */const Gg="firebaseLocalStorageDb",qI=1,Ao="firebaseLocalStorage",qg="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(t,e){return t.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function KI(){const t=indexedDB.deleteDatabase(Gg);return new _i(t).toPromise()}function Ol(){const t=indexedDB.open(Gg,qI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ao,{keyPath:qg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ao)?e(r):(r.close(),await KI(),e(await Ol()))})})}async function uh(t,e,n){const r=sa(t,!0).put({[qg]:e,value:n});return new _i(r).toPromise()}async function XI(t,e){const n=sa(t,!1).get(e),r=await new _i(n).toPromise();return r===void 0?null:r.value}function fh(t,e){const n=sa(t,!0).delete(e);return new _i(n).toPromise()}const YI=800,JI=3;class Kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ra._getInstance(GI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new BI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ol();return await uh(e,To,"1"),await fh(e,To),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=sa(s,!1).getAll();return new _i(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kg.type="LOCAL";const QI=Kg;new vi(3e4,6e4);/**
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
 */function ZI(t,e){return e?yn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kc extends $g{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eE(t){return MI(t.auth,new kc(t),t.bypassAuthState)}function tE(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),DI(n,new kc(t),t.bypassAuthState)}async function nE(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),NI(n,new kc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eE;case"linkViaPopup":case"linkViaRedirect":return nE;case"reauthViaPopup":case"reauthViaRedirect":return tE;default:En(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=new vi(2e3,1e4);class Gr extends Xg{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=Cc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rE.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="pendingRedirect",no=new Map;class iE extends Xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await oE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oE(t,e){const n=cE(e),r=lE(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aE(t,e){no.set(t._key(),e)}function lE(t){return yn(t._redirectPersistence)}function cE(t){return to(sE,t.config.apiKey,t.name)}async function uE(t,e,n=!1){if(Ct(t.app))return Promise.reject(wr(t));const r=Tc(t),s=ZI(r,e),a=await new iE(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=600*1e3;class hE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Yg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(tn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fE&&this.cachedEventUids.clear(),this.cachedEventUids.has(hh(e))}saveEventToCache(e){this.cachedEventUids.add(hh(e)),this.lastProcessedEventTime=Date.now()}}function hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function dE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mE=/^https?/;async function vE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pE(t);for(const n of e)try{if(yE(n))return}catch{}En(t,"unauthorized-domain")}function yE(t){const e=Pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!mE.test(n))return!1;if(gE.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _E=new vi(3e4,6e4);function dh(){const t=nn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bE(t){return new Promise((e,n)=>{function r(){dh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dh(),n(tn(t,"network-request-failed"))},timeout:_E.get()})}if(nn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(nn().gapi?.load)r();else{const s=AI("iframefcb");return nn()[s]=()=>{gapi.load?r():n(tn(t,"network-request-failed"))},SI(`${TI()}?onload=${s}`).catch(o=>n(o))}}).catch(e=>{throw ro=null,e})}let ro=null;function wE(t){return ro=ro||bE(t),ro}/**
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
 */const IE=new vi(5e3,15e3),EE="__/auth/iframe",SE="emulator/auth/iframe",TE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CE(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wc(e,SE):`https://${t.config.authDomain}/${EE}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=AE.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${gi(r).slice(1)}`}async function kE(t){const e=await wE(t),n=nn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:CE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TE,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{o(a)},IE.get());function c(){nn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{o(a)})}))}/**
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
 */const PE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RE=500,OE=600,xE="_blank",NE="http://localhost";class ph{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DE(t,e,n,r=RE,s=OE){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...PE,width:r.toString(),height:s.toString(),top:o,left:a},f=ut().toLowerCase();n&&(l=Rg(f)?xE:n),kg(f)&&(e=e||NE,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[w,R])=>`${m}${w}=${R},`,"");if(mI(f)&&l!=="_self")return ME(e||"",l),new ph(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new ph(p)}function ME(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const LE="__/auth/handler",FE="emulator/auth/handler",$E=encodeURIComponent("fac");async function gh(t,e,n,r,s,o){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof Ug){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Mw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof yi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),f=c?`#${$E}=${encodeURIComponent(c)}`:"";return`${UE(t)}?${gi(l).slice(1)}${f}`}function UE({config:t}){return t.emulator?wc(t,FE):`https://${t.authDomain}/${LE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class jE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hg,this._completeRedirectFn=uE,this._overrideRedirectResult=aE}async _openPopup(e,n,r,s){Sn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await gh(e,n,r,Pl(),s);return DE(e,o,Cc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await gh(e,n,r,Pl(),s);return zI(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Sn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kE(e),r=new hE(e);return n.register("authEvent",s=>(oe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},s=>{const o=s?.[0]?.[Ka];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mg()||Pg()||Sc()}}const VE=jE;var mh="@firebase/auth",vh="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HE(t){Rt(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lg(t)},f=new II(r,s,o,c);return kI(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rt(new bt("auth-internal",e=>{const n=Tc(e.getProvider("auth").getImmediate());return(r=>new BE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(mh,vh,zE(t)),nt(mh,vh,"esm2020")}/**
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
 */const WE=300,GE=cg("authIdTokenMaxAge")||WE;let yh=null;const qE=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GE)return;const s=n?.token;yh!==s&&(yh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KE(t=mi()){const e=kn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CI(t,{popupRedirectResolver:VE,persistence:[QI,jI,Hg]}),r=cg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=qE(o.toString());FI(n,a,()=>a(n.currentUser)),LI(n,l=>a(l))}}const s=ag("auth");return s&&PI(n,`http://${s}`),n}function XE(){return document.getElementsByTagName("head")?.[0]??document}EI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=tn("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",XE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HE("Browser");var _h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function y(){}y.prototype=v.prototype,A.D=v.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(T,C,S){for(var b=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)b[Ee-2]=arguments[Ee];return v.prototype[C].apply(T,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,y){y||(y=0);var T=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)T[C]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(C=0;16>C;++C)T[C]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=A.g[0],y=A.g[1],C=A.g[2];var S=A.g[3],b=v+(S^y&(C^S))+T[0]+3614090360&4294967295;v=y+(b<<7&4294967295|b>>>25),b=S+(C^v&(y^C))+T[1]+3905402710&4294967295,S=v+(b<<12&4294967295|b>>>20),b=C+(y^S&(v^y))+T[2]+606105819&4294967295,C=S+(b<<17&4294967295|b>>>15),b=y+(v^C&(S^v))+T[3]+3250441966&4294967295,y=C+(b<<22&4294967295|b>>>10),b=v+(S^y&(C^S))+T[4]+4118548399&4294967295,v=y+(b<<7&4294967295|b>>>25),b=S+(C^v&(y^C))+T[5]+1200080426&4294967295,S=v+(b<<12&4294967295|b>>>20),b=C+(y^S&(v^y))+T[6]+2821735955&4294967295,C=S+(b<<17&4294967295|b>>>15),b=y+(v^C&(S^v))+T[7]+4249261313&4294967295,y=C+(b<<22&4294967295|b>>>10),b=v+(S^y&(C^S))+T[8]+1770035416&4294967295,v=y+(b<<7&4294967295|b>>>25),b=S+(C^v&(y^C))+T[9]+2336552879&4294967295,S=v+(b<<12&4294967295|b>>>20),b=C+(y^S&(v^y))+T[10]+4294925233&4294967295,C=S+(b<<17&4294967295|b>>>15),b=y+(v^C&(S^v))+T[11]+2304563134&4294967295,y=C+(b<<22&4294967295|b>>>10),b=v+(S^y&(C^S))+T[12]+1804603682&4294967295,v=y+(b<<7&4294967295|b>>>25),b=S+(C^v&(y^C))+T[13]+4254626195&4294967295,S=v+(b<<12&4294967295|b>>>20),b=C+(y^S&(v^y))+T[14]+2792965006&4294967295,C=S+(b<<17&4294967295|b>>>15),b=y+(v^C&(S^v))+T[15]+1236535329&4294967295,y=C+(b<<22&4294967295|b>>>10),b=v+(C^S&(y^C))+T[1]+4129170786&4294967295,v=y+(b<<5&4294967295|b>>>27),b=S+(y^C&(v^y))+T[6]+3225465664&4294967295,S=v+(b<<9&4294967295|b>>>23),b=C+(v^y&(S^v))+T[11]+643717713&4294967295,C=S+(b<<14&4294967295|b>>>18),b=y+(S^v&(C^S))+T[0]+3921069994&4294967295,y=C+(b<<20&4294967295|b>>>12),b=v+(C^S&(y^C))+T[5]+3593408605&4294967295,v=y+(b<<5&4294967295|b>>>27),b=S+(y^C&(v^y))+T[10]+38016083&4294967295,S=v+(b<<9&4294967295|b>>>23),b=C+(v^y&(S^v))+T[15]+3634488961&4294967295,C=S+(b<<14&4294967295|b>>>18),b=y+(S^v&(C^S))+T[4]+3889429448&4294967295,y=C+(b<<20&4294967295|b>>>12),b=v+(C^S&(y^C))+T[9]+568446438&4294967295,v=y+(b<<5&4294967295|b>>>27),b=S+(y^C&(v^y))+T[14]+3275163606&4294967295,S=v+(b<<9&4294967295|b>>>23),b=C+(v^y&(S^v))+T[3]+4107603335&4294967295,C=S+(b<<14&4294967295|b>>>18),b=y+(S^v&(C^S))+T[8]+1163531501&4294967295,y=C+(b<<20&4294967295|b>>>12),b=v+(C^S&(y^C))+T[13]+2850285829&4294967295,v=y+(b<<5&4294967295|b>>>27),b=S+(y^C&(v^y))+T[2]+4243563512&4294967295,S=v+(b<<9&4294967295|b>>>23),b=C+(v^y&(S^v))+T[7]+1735328473&4294967295,C=S+(b<<14&4294967295|b>>>18),b=y+(S^v&(C^S))+T[12]+2368359562&4294967295,y=C+(b<<20&4294967295|b>>>12),b=v+(y^C^S)+T[5]+4294588738&4294967295,v=y+(b<<4&4294967295|b>>>28),b=S+(v^y^C)+T[8]+2272392833&4294967295,S=v+(b<<11&4294967295|b>>>21),b=C+(S^v^y)+T[11]+1839030562&4294967295,C=S+(b<<16&4294967295|b>>>16),b=y+(C^S^v)+T[14]+4259657740&4294967295,y=C+(b<<23&4294967295|b>>>9),b=v+(y^C^S)+T[1]+2763975236&4294967295,v=y+(b<<4&4294967295|b>>>28),b=S+(v^y^C)+T[4]+1272893353&4294967295,S=v+(b<<11&4294967295|b>>>21),b=C+(S^v^y)+T[7]+4139469664&4294967295,C=S+(b<<16&4294967295|b>>>16),b=y+(C^S^v)+T[10]+3200236656&4294967295,y=C+(b<<23&4294967295|b>>>9),b=v+(y^C^S)+T[13]+681279174&4294967295,v=y+(b<<4&4294967295|b>>>28),b=S+(v^y^C)+T[0]+3936430074&4294967295,S=v+(b<<11&4294967295|b>>>21),b=C+(S^v^y)+T[3]+3572445317&4294967295,C=S+(b<<16&4294967295|b>>>16),b=y+(C^S^v)+T[6]+76029189&4294967295,y=C+(b<<23&4294967295|b>>>9),b=v+(y^C^S)+T[9]+3654602809&4294967295,v=y+(b<<4&4294967295|b>>>28),b=S+(v^y^C)+T[12]+3873151461&4294967295,S=v+(b<<11&4294967295|b>>>21),b=C+(S^v^y)+T[15]+530742520&4294967295,C=S+(b<<16&4294967295|b>>>16),b=y+(C^S^v)+T[2]+3299628645&4294967295,y=C+(b<<23&4294967295|b>>>9),b=v+(C^(y|~S))+T[0]+4096336452&4294967295,v=y+(b<<6&4294967295|b>>>26),b=S+(y^(v|~C))+T[7]+1126891415&4294967295,S=v+(b<<10&4294967295|b>>>22),b=C+(v^(S|~y))+T[14]+2878612391&4294967295,C=S+(b<<15&4294967295|b>>>17),b=y+(S^(C|~v))+T[5]+4237533241&4294967295,y=C+(b<<21&4294967295|b>>>11),b=v+(C^(y|~S))+T[12]+1700485571&4294967295,v=y+(b<<6&4294967295|b>>>26),b=S+(y^(v|~C))+T[3]+2399980690&4294967295,S=v+(b<<10&4294967295|b>>>22),b=C+(v^(S|~y))+T[10]+4293915773&4294967295,C=S+(b<<15&4294967295|b>>>17),b=y+(S^(C|~v))+T[1]+2240044497&4294967295,y=C+(b<<21&4294967295|b>>>11),b=v+(C^(y|~S))+T[8]+1873313359&4294967295,v=y+(b<<6&4294967295|b>>>26),b=S+(y^(v|~C))+T[15]+4264355552&4294967295,S=v+(b<<10&4294967295|b>>>22),b=C+(v^(S|~y))+T[6]+2734768916&4294967295,C=S+(b<<15&4294967295|b>>>17),b=y+(S^(C|~v))+T[13]+1309151649&4294967295,y=C+(b<<21&4294967295|b>>>11),b=v+(C^(y|~S))+T[4]+4149444226&4294967295,v=y+(b<<6&4294967295|b>>>26),b=S+(y^(v|~C))+T[11]+3174756917&4294967295,S=v+(b<<10&4294967295|b>>>22),b=C+(v^(S|~y))+T[2]+718787259&4294967295,C=S+(b<<15&4294967295|b>>>17),b=y+(S^(C|~v))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var y=v-this.blockSize,T=this.B,C=this.h,S=0;S<v;){if(C==0)for(;S<=y;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<v;)if(T[C++]=A.charCodeAt(S++),C==this.blockSize){s(this,T),C=0;break}}else for(;S<v;)if(T[C++]=A[S++],C==this.blockSize){s(this,T),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var y=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=y&255,y/=256;for(this.u(A),A=Array(16),v=y=0;4>v;++v)for(var T=0;32>T;T+=8)A[y++]=this.g[v]>>>T&255;return A};function o(A,v){var y=l;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=v(A)}function a(A,v){this.h=v;for(var y=[],T=!0,C=A.length-1;0<=C;C--){var S=A[C]|0;T&&S==v||(y[C]=S,T=!1)}this.g=y}var l={};function c(A){return-128<=A&&128>A?o(A,function(v){return new a([v|0],0>v?-1:0)}):new a([A|0],0>A?-1:0)}function f(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return F(f(-A));for(var v=[],y=1,T=0;A>=y;T++)v[T]=A/y|0,y*=4294967296;return new a(v,0)}function d(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return F(d(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(v,8)),T=p,C=0;C<A.length;C+=8){var S=Math.min(8,A.length-C),b=parseInt(A.substring(C,C+S),v);8>S?(S=f(Math.pow(v,S)),T=T.j(S).add(f(b))):(T=T.j(y),T=T.add(f(b)))}return T}var p=c(0),m=c(1),w=c(16777216);t=a.prototype,t.m=function(){if(N(this))return-F(this).m();for(var A=0,v=1,y=0;y<this.g.length;y++){var T=this.i(y);A+=(0<=T?T:4294967296+T)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(N(this))return"-"+F(this).toString(A);for(var v=f(Math.pow(A,6)),y=this,T="";;){var C=V(y,v).g;y=O(y,C.j(v));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=C,R(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=O(this,A),N(A)?-1:R(A)?0:1};function F(A){for(var v=A.g.length,y=[],T=0;T<v;T++)y[T]=~A.g[T];return new a(y,~A.h).add(m)}t.abs=function(){return N(this)?F(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],T=0,C=0;C<=v;C++){var S=T+(this.i(C)&65535)+(A.i(C)&65535),b=(S>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);T=b>>>16,S&=65535,b&=65535,y[C]=b<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function O(A,v){return A.add(F(v))}t.j=function(A){if(R(this)||R(A))return p;if(N(this))return N(A)?F(this).j(F(A)):F(F(this).j(A));if(N(A))return F(this.j(F(A)));if(0>this.l(w)&&0>A.l(w))return f(this.m()*A.m());for(var v=this.g.length+A.g.length,y=[],T=0;T<2*v;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var C=0;C<A.g.length;C++){var S=this.i(T)>>>16,b=this.i(T)&65535,Ee=A.i(C)>>>16,$e=A.i(C)&65535;y[2*T+2*C]+=b*$e,D(y,2*T+2*C),y[2*T+2*C+1]+=S*$e,D(y,2*T+2*C+1),y[2*T+2*C+1]+=b*Ee,D(y,2*T+2*C+1),y[2*T+2*C+2]+=S*Ee,D(y,2*T+2*C+2)}for(T=0;T<v;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=v;T<2*v;T++)y[T]=0;return new a(y,0)};function D(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function j(A,v){this.g=A,this.h=v}function V(A,v){if(R(v))throw Error("division by zero");if(R(A))return new j(p,p);if(N(A))return v=V(F(A),v),new j(F(v.g),F(v.h));if(N(v))return v=V(A,F(v)),new j(F(v.g),v.h);if(30<A.g.length){if(N(A)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,T=v;0>=T.l(A);)y=Q(y),T=Q(T);var C=se(y,1),S=se(T,1);for(T=se(T,2),y=se(y,2);!R(T);){var b=S.add(T);0>=b.l(A)&&(C=C.add(y),S=b),T=se(T,1),y=se(y,1)}return v=O(A,C.j(v)),new j(C,v)}for(C=p;0<=A.l(v);){for(y=Math.max(1,Math.floor(A.m()/v.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=f(y),b=S.j(v);N(b)||0<b.l(A);)y-=T,S=f(y),b=S.j(v);R(S)&&(S=m),C=C.add(S),A=O(A,b)}return new j(C,A)}t.A=function(A){return V(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)&A.i(T);return new a(y,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)|A.i(T);return new a(y,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)^A.i(T);return new a(y,this.h^A.h)};function Q(A){for(var v=A.g.length+1,y=[],T=0;T<v;T++)y[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(y,A.h)}function se(A,v){var y=v>>5;v%=32;for(var T=A.g.length-y,C=[],S=0;S<T;S++)C[S]=0<v?A.i(S+y)>>>v|A.i(S+y+1)<<32-v:A.i(S+y);return new a(C,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Pc=a}).apply(typeof _h<"u"?_h:typeof self<"u"?self:typeof window<"u"?window:{});var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,h){return i==Array.prototype||i==Object.prototype||(i[u]=h.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hi=="object"&&Hi];for(var u=0;u<i.length;++u){var h=i[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(i,u){if(u)e:{var h=r;i=i.split(".");for(var g=0;g<i.length-1;g++){var P=i[g];if(!(P in h))break e;h=h[P]}i=i[i.length-1],g=h[i],u=u(g),u!=g&&u!=null&&e(h,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var h=0,g=!1,P={next:function(){if(!g&&h<i.length){var x=h++;return{value:u(x,i[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function d(i,u,h){return i.call.apply(i.bind,arguments)}function p(i,u,h){if(!i)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),i.apply(u,P)}}return function(){return i.apply(u,arguments)}}function m(i,u,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(i,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),i.apply(this,g)}}function R(i,u){function h(){}h.prototype=u.prototype,i.aa=u.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(g,P,x){for(var G=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)G[Se-2]=arguments[Se];return u.prototype[P].apply(g,G)}}function N(i){const u=i.length;if(0<u){const h=Array(u);for(let g=0;g<u;g++)h[g]=i[g];return h}return[]}function F(i,u){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(c(g)){const P=i.length||0,x=g.length||0;i.length=P+x;for(let G=0;G<x;G++)i[P+G]=g[G]}else i.push(g)}}class O{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(i){return/^[\s\xa0]*$/.test(i)}function j(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function V(i){return V[" "](i),i}V[" "]=function(){};var Q=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function se(i,u,h){for(const g in i)u.call(h,i[g],g,i)}function A(i,u){for(const h in i)u.call(void 0,i[h],h,i)}function v(i){const u={};for(const h in i)u[h]=i[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,u){let h,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(h in g)i[h]=g[h];for(let x=0;x<y.length;x++)h=y[x],Object.prototype.hasOwnProperty.call(g,h)&&(i[h]=g[h])}}function C(i){var u=1;i=i.split(":");const h=[];for(;0<u&&i.length;)h.push(i.shift()),u--;return i.length&&h.push(i.join(":")),h}function S(i){l.setTimeout(()=>{throw i},0)}function b(){var i=gt;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Ee{constructor(){this.h=this.g=null}add(u,h){const g=$e.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var $e=new O(()=>new Oe,i=>i.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ue=!1,gt=new Ee,xt=()=>{const i=l.Promise.resolve(void 0);he=()=>{i.then(It)}};var It=()=>{for(var i;i=b();){try{i.h.call(i.g)}catch(h){S(h)}var u=$e;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}ue=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return i}();function Wt(i,u){if(Ne.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,g=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Q){e:{try{V(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else h=="mouseover"?u=i.fromElement:h=="mouseout"&&(u=i.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ft[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Wt.aa.h.call(this)}}R(Wt,Ne);var ft={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(i,u,h,g,P){this.listener=i,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=P,this.key=++Y,this.da=this.fa=!1}function J(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ve(i){this.src=i,this.g={},this.h=0}ve.prototype.add=function(i,u,h,g,P){var x=i.toString();i=this.g[x],i||(i=this.g[x]=[],this.h++);var G=I(i,u,g,P);return-1<G?(u=i[G],h||(u.fa=!1)):(u=new X(u,this.src,x,!!g,P),u.fa=h,i.push(u)),u};function _(i,u){var h=u.type;if(h in i.g){var g=i.g[h],P=Array.prototype.indexOf.call(g,u,void 0),x;(x=0<=P)&&Array.prototype.splice.call(g,P,1),x&&(J(u),i.g[h].length==0&&(delete i.g[h],i.h--))}}function I(i,u,h,g){for(var P=0;P<i.length;++P){var x=i[P];if(!x.da&&x.listener==u&&x.capture==!!h&&x.ha==g)return P}return-1}var k="closure_lm_"+(1e6*Math.random()|0),L={};function U(i,u,h,g,P){if(Array.isArray(u)){for(var x=0;x<u.length;x++)U(i,u[x],h,g,P);return null}return h=ie(h),i&&i[M]?i.K(u,h,f(g)?!!g.capture:!1,P):$(i,u,h,!1,g,P)}function $(i,u,h,g,P,x){if(!u)throw Error("Invalid event type");var G=f(P)?!!P.capture:!!P,Se=q(i);if(Se||(i[k]=Se=new ve(i)),h=Se.add(u,h,g,G,x),h.proxy)return h;if(g=K(),h.proxy=g,g.src=i,g.listener=h,i.addEventListener)Rn||(P=G),P===void 0&&(P=!1),i.addEventListener(u.toString(),g,P);else if(i.attachEvent)i.attachEvent(B(u.toString()),g);else if(i.addListener&&i.removeListener)i.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function K(){function i(h){return u.call(i.src,i.listener,h)}const u=ee;return i}function W(i,u,h,g,P){if(Array.isArray(u))for(var x=0;x<u.length;x++)W(i,u[x],h,g,P);else g=f(g)?!!g.capture:!!g,h=ie(h),i&&i[M]?(i=i.i,u=String(u).toString(),u in i.g&&(x=i.g[u],h=I(x,h,g,P),-1<h&&(J(x[h]),Array.prototype.splice.call(x,h,1),x.length==0&&(delete i.g[u],i.h--)))):i&&(i=q(i))&&(u=i.g[u.toString()],i=-1,u&&(i=I(u,h,g,P)),(h=-1<i?u[i]:null)&&H(h))}function H(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[M])_(u.i,i);else{var h=i.type,g=i.proxy;u.removeEventListener?u.removeEventListener(h,g,i.capture):u.detachEvent?u.detachEvent(B(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=q(u))?(_(h,i),h.h==0&&(h.src=null,u[k]=null)):J(i)}}}function B(i){return i in L?L[i]:L[i]="on"+i}function ee(i,u){if(i.da)i=!0;else{u=new Wt(u,this);var h=i.listener,g=i.ha||i.src;i.fa&&H(i),i=h.call(g,u)}return i}function q(i){return i=i[k],i instanceof ve?i:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(i){return typeof i=="function"?i:(i[Z]||(i[Z]=function(u){return i.handleEvent(u)}),i[Z])}function re(){xe.call(this),this.i=new ve(this),this.M=this,this.F=null}R(re,xe),re.prototype[M]=!0,re.prototype.removeEventListener=function(i,u,h,g){W(this,i,u,h,g)};function ce(i,u){var h,g=i.F;if(g)for(h=[];g;g=g.F)h.push(g);if(i=i.M,g=u.type||u,typeof u=="string")u=new Ne(u,i);else if(u instanceof Ne)u.target=u.target||i;else{var P=u;u=new Ne(g,i),T(u,P)}if(P=!0,h)for(var x=h.length-1;0<=x;x--){var G=u.g=h[x];P=de(G,g,!0,u)&&P}if(G=u.g=i,P=de(G,g,!0,u)&&P,P=de(G,g,!1,u)&&P,h)for(x=0;x<h.length;x++)G=u.g=h[x],P=de(G,g,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var h=i.g[u],g=0;g<h.length;g++)J(h[g]);delete i.g[u],i.h--}}this.F=null},re.prototype.K=function(i,u,h,g){return this.i.add(String(i),u,!1,h,g)},re.prototype.L=function(i,u,h,g){return this.i.add(String(i),u,!0,h,g)};function de(i,u,h,g){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,x=0;x<u.length;++x){var G=u[x];if(G&&!G.da&&G.capture==h){var Se=G.listener,He=G.ha||G.src;G.fa&&_(i.i,G),P=Se.call(He,g)!==!1&&P}}return P&&!g.defaultPrevented}function Ve(i,u,h){if(typeof i=="function")h&&(i=m(i,h));else if(i&&typeof i.handleEvent=="function")i=m(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Be(i){i.g=Ve(()=>{i.g=null,i.i&&(i.i=!1,Be(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Et extends xe{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(i){xe.call(this),this.h=i,this.g={}}R(qe,xe);var On=[];function ds(i){se(i.g,function(u,h){this.g.hasOwnProperty(h)&&H(u)},i),i.g={}}qe.prototype.N=function(){qe.aa.N.call(this),ds(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ze=l.JSON.stringify,St=l.JSON.parse,Ai=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Mr(){}Mr.prototype.h=null;function Jc(i){return i.h||(i.h=i.i())}function M1(){}var ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ha(){Ne.call(this,"d")}R(ha,Ne);function da(){Ne.call(this,"c")}R(da,Ne);var Lr={},Qc=null;function pa(){return Qc=Qc||new re}Lr.La="serverreachability";function Zc(i){Ne.call(this,Lr.La,i)}R(Zc,Ne);function gs(i){const u=pa();ce(u,new Zc(u))}Lr.STAT_EVENT="statevent";function eu(i,u){Ne.call(this,Lr.STAT_EVENT,i),this.stat=u}R(eu,Ne);function st(i){const u=pa();ce(u,new eu(u,i))}Lr.Ma="timingevent";function tu(i,u){Ne.call(this,Lr.Ma,i),this.size=u}R(tu,Ne);function ms(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function vs(){this.g=!0}vs.prototype.xa=function(){this.g=!1};function L1(i,u,h,g,P,x){i.info(function(){if(i.g)if(x)for(var G="",Se=x.split("&"),He=0;He<Se.length;He++){var ye=Se[He].split("=");if(1<ye.length){var Ke=ye[0];ye=ye[1];var Xe=Ke.split("_");G=2<=Xe.length&&Xe[1]=="type"?G+(Ke+"="+ye+"&"):G+(Ke+"=redacted&")}}else G=null;else G=x;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+h+`
`+G})}function F1(i,u,h,g,P,x,G){i.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+h+`
`+x+" "+G})}function Fr(i,u,h,g){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+U1(i,h)+(g?" "+g:"")})}function $1(i,u){i.info(function(){return"TIMEOUT: "+u})}vs.prototype.info=function(){};function U1(i,u){if(!i.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var g=h[i];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return ze(h)}catch{return u}}var ga={NO_ERROR:0,TIMEOUT:8},j1={},ma;function Ci(){}R(Ci,Mr),Ci.prototype.g=function(){return new XMLHttpRequest},Ci.prototype.i=function(){return{}},ma=new Ci;function xn(i,u,h,g){this.j=i,this.i=u,this.l=h,this.R=g||1,this.U=new qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},va={};function ya(i,u,h){i.L=1,i.v=Oi(an(u)),i.m=h,i.P=!0,su(i,null)}function su(i,u){i.F=Date.now(),ki(i),i.A=an(i.v);var h=i.A,g=i.R;Array.isArray(g)||(g=[String(g)]),yu(h.i,"t",g),i.C=0,h=i.j.J,i.h=new nu,i.g=Lu(i.j,h?u:null,!i.m),0<i.O&&(i.M=new Et(m(i.Y,i,i.g),i.O)),u=i.U,h=i.g,g=i.ca;var P="readystatechange";Array.isArray(P)||(P&&(On[0]=P.toString()),P=On);for(var x=0;x<P.length;x++){var G=U(h,P[x],g||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=i.H?v(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),gs(),L1(i.i,i.u,i.A,i.l,i.R,i.m)}xn.prototype.ca=function(i){i=i.target;const u=this.M;u&&ln(i)==3?u.j():this.Y(i)},xn.prototype.Y=function(i){try{if(i==this.g)e:{const Xe=ln(this.g);var u=this.g.Ba();const jr=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Tu(this.g)))){this.J||Xe!=4||u==7||(u==8||0>=jr?gs(3):gs(2)),_a(this);var h=this.g.Z();this.X=h;t:if(iu(this)){var g=Tu(this.g);i="";var P=g.length,x=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),ys(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,i+=this.h.i.decode(g[u],{stream:!(x&&u==P-1)});g.length=0,this.h.g+=i,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=h==200,F1(this.i,this.u,this.A,this.l,this.R,Xe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,He=this.g;if((Se=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Se)){var ye=Se;break t}}ye=null}if(h=ye)Fr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,h);else{this.o=!1,this.s=3,st(12),or(this),ys(this);break e}}if(this.P){h=!0;let Nt;for(;!this.J&&this.C<G.length;)if(Nt=V1(this,G),Nt==va){Xe==4&&(this.s=4,st(14),h=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==ru){this.s=4,st(15),Fr(this.i,this.l,G,"[Invalid Chunk]"),h=!1;break}else Fr(this.i,this.l,Nt,null),ba(this,Nt);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||G.length!=0||this.h.h||(this.s=1,st(16),h=!1),this.o=this.o&&h,!h)Fr(this.i,this.l,G,"[Invalid Chunked Response]"),or(this),ys(this);else if(0<G.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Aa(Ke),Ke.M=!0,st(11))}}else Fr(this.i,this.l,G,null),ba(this,G);Xe==4&&or(this),this.o&&!this.J&&(Xe==4?xu(this.j,this):(this.o=!1,ki(this)))}else sv(this.g),h==400&&0<G.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),or(this),ys(this)}}}catch{}finally{}};function iu(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function V1(i,u){var h=i.C,g=u.indexOf(`
`,h);return g==-1?va:(h=Number(u.substring(h,g)),isNaN(h)?ru:(g+=1,g+h>u.length?va:(u=u.slice(g,g+h),i.C=g+h,u)))}xn.prototype.cancel=function(){this.J=!0,or(this)};function ki(i){i.S=Date.now()+i.I,ou(i,i.I)}function ou(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ms(m(i.ba,i),u)}function _a(i){i.B&&(l.clearTimeout(i.B),i.B=null)}xn.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?($1(this.i,this.A),this.L!=2&&(gs(),st(17)),or(this),this.s=2,ys(this)):ou(this,this.S-i)};function ys(i){i.j.G==0||i.J||xu(i.j,i)}function or(i){_a(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,ds(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ba(i,u){try{var h=i.j;if(h.G!=0&&(h.g==i||wa(h.h,i))){if(!i.K&&wa(h.h,i)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Fi(h),Mi(h);else break e;Ta(h),st(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=ms(m(h.Za,h),6e3));if(1>=cu(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else lr(h,11)}else if((i.K||h.g==i)&&Fi(h),!D(u))for(P=h.Da.g.parse(u),u=0;u<P.length;u++){let ye=P[u];if(h.T=ye[0],ye=ye[1],h.G==2)if(ye[0]=="c"){h.K=ye[1],h.ia=ye[2];const Ke=ye[3];Ke!=null&&(h.la=Ke,h.j.info("VER="+h.la));const Xe=ye[4];Xe!=null&&(h.Aa=Xe,h.j.info("SVER="+h.Aa));const jr=ye[5];jr!=null&&typeof jr=="number"&&0<jr&&(g=1.5*jr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Nt=i.g;if(Nt){const $i=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var x=g.h;x.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ia(x,x.h),x.h=null))}if(g.D){const Ca=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ca&&(g.ya=Ca,Pe(g.I,g.D,Ca))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var G=i;if(g.qa=Mu(g,g.J?g.ia:null,g.W),G.K){uu(g.h,G);var Se=G,He=g.L;He&&(Se.I=He),Se.B&&(_a(Se),ki(Se)),g.g=G}else Ru(g);0<h.i.length&&Li(h)}else ye[0]!="stop"&&ye[0]!="close"||lr(h,7);else h.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?lr(h,7):Sa(h):ye[0]!="noop"&&h.l&&h.l.ta(ye),h.v=0)}}gs(4)}catch{}}var B1=class{constructor(i,u){this.g=i,this.map=u}};function au(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lu(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function cu(i){return i.h?1:i.g?i.g.size:0}function wa(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Ia(i,u){i.g?i.g.add(u):i.h=u}function uu(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}au.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function fu(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const h of i.g.values())u=u.concat(h.D);return u}return N(i.i)}function z1(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(c(i)){for(var u=[],h=i.length,g=0;g<h;g++)u.push(i[g]);return u}u=[],h=0;for(g in i)u[h++]=i[g];return u}function H1(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(c(i)||typeof i=="string"){var u=[];i=i.length;for(var h=0;h<i;h++)u.push(h);return u}u=[],h=0;for(const g in i)u[h++]=g;return u}}}function hu(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(c(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var h=H1(i),g=z1(i),P=g.length,x=0;x<P;x++)u.call(void 0,g[x],h&&h[x],i)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function W1(i,u){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var g=i[h].indexOf("="),P=null;if(0<=g){var x=i[h].substring(0,g);P=i[h].substring(g+1)}else x=i[h];u(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ar(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ar){this.h=i.h,Pi(this,i.j),this.o=i.o,this.g=i.g,Ri(this,i.s),this.l=i.l;var u=i.i,h=new ws;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),pu(this,h),this.m=i.m}else i&&(u=String(i).match(du))?(this.h=!1,Pi(this,u[1]||"",!0),this.o=_s(u[2]||""),this.g=_s(u[3]||"",!0),Ri(this,u[4]),this.l=_s(u[5]||"",!0),pu(this,u[6]||"",!0),this.m=_s(u[7]||"")):(this.h=!1,this.i=new ws(null,this.h))}ar.prototype.toString=function(){var i=[],u=this.j;u&&i.push(bs(u,gu,!0),":");var h=this.g;return(h||u=="file")&&(i.push("//"),(u=this.o)&&i.push(bs(u,gu,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(bs(h,h.charAt(0)=="/"?K1:q1,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",bs(h,Y1)),i.join("")};function an(i){return new ar(i)}function Pi(i,u,h){i.j=h?_s(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Ri(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function pu(i,u,h){u instanceof ws?(i.i=u,J1(i.i,i.h)):(h||(u=bs(u,X1)),i.i=new ws(u,i.h))}function Pe(i,u,h){i.i.set(u,h)}function Oi(i){return Pe(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function _s(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function bs(i,u,h){return typeof i=="string"?(i=encodeURI(i).replace(u,G1),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function G1(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var gu=/[#\/\?@]/g,q1=/[#\?:]/g,K1=/[#\?]/g,X1=/[#\?@]/g,Y1=/#/g;function ws(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Nn(i){i.g||(i.g=new Map,i.h=0,i.i&&W1(i.i,function(u,h){i.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=ws.prototype,t.add=function(i,u){Nn(this),this.i=null,i=$r(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(u),this.h+=1,this};function mu(i,u){Nn(i),u=$r(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function vu(i,u){return Nn(i),u=$r(i,u),i.g.has(u)}t.forEach=function(i,u){Nn(this),this.g.forEach(function(h,g){h.forEach(function(P){i.call(u,P,g,this)},this)},this)},t.na=function(){Nn(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){const P=i[g];for(let x=0;x<P.length;x++)h.push(u[g])}return h},t.V=function(i){Nn(this);let u=[];if(typeof i=="string")vu(this,i)&&(u=u.concat(this.g.get($r(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)u=u.concat(i[h])}return u},t.set=function(i,u){return Nn(this),this.i=null,i=$r(this,i),vu(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},t.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function yu(i,u,h){mu(i,u),0<h.length&&(i.i=null,i.g.set($r(i,u),N(h)),i.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];const x=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var P=x;G[g]!==""&&(P+="="+encodeURIComponent(String(G[g]))),i.push(P)}}return this.i=i.join("&")};function $r(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function J1(i,u){u&&!i.j&&(Nn(i),i.i=null,i.g.forEach(function(h,g){var P=g.toLowerCase();g!=P&&(mu(this,g),yu(this,P,h))},i)),i.j=u}function Q1(i,u){const h=new vs;if(l.Image){const g=new Image;g.onload=w(Dn,h,"TestLoadImage: loaded",!0,u,g),g.onerror=w(Dn,h,"TestLoadImage: error",!1,u,g),g.onabort=w(Dn,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(Dn,h,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=i}else u(!1)}function Z1(i,u){const h=new vs,g=new AbortController,P=setTimeout(()=>{g.abort(),Dn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:g.signal}).then(x=>{clearTimeout(P),x.ok?Dn(h,"TestPingServer: ok",!0,u):Dn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Dn(h,"TestPingServer: error",!1,u)})}function Dn(i,u,h,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(h)}catch{}}function ev(){this.g=new Ai}function tv(i,u,h){const g=h||"";try{hu(i,function(P,x){let G=P;f(P)&&(G=ze(P)),u.push(g+x+"="+encodeURIComponent(G))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function xi(i){this.l=i.Ub||null,this.j=i.eb||!1}R(xi,Mr),xi.prototype.g=function(){return new Ni(this.l,this.j)},xi.prototype.i=function(i){return function(){return i}}({});function Ni(i,u){re.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ni,re),t=Ni.prototype,t.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Es(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_u(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function _u(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Is(this):Es(this),this.readyState==3&&_u(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,Is(this))},t.Qa=function(i){this.g&&(this.response=i,Is(this))},t.ga=function(){this.g&&Is(this)};function Is(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Es(i)}t.setRequestHeader=function(i,u){this.u.append(i,u)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=u.next();return i.join(`\r
`)};function Es(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function bu(i){let u="";return se(i,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function Ea(i,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=bu(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):Pe(i,u,h))}function Le(i){re.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Le,re);var nv=/^https?$/i,rv=["POST","PUT"];t=Le.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ma.g(),this.v=this.o?Jc(this.o):Jc(ma),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(x){wu(this,x);return}if(i=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)h.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())h.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(rv,u,void 0))||g||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,G]of h)this.g.setRequestHeader(x,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Su(this),this.u=!0,this.g.send(i),this.u=!1}catch(x){wu(this,x)}};function wu(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Iu(i),Di(i)}function Iu(i){i.A||(i.A=!0,ce(i,"complete"),ce(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,ce(this,"complete"),ce(this,"abort"),Di(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Di(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Eu(this):this.bb())},t.bb=function(){Eu(this)};function Eu(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ln(i)!=4||i.Z()!=2)){if(i.u&&ln(i)==4)Ve(i.Ea,0,i);else if(ce(i,"readystatechange"),ln(i)==4){i.h=!1;try{const G=i.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=G===0){var P=String(i.D).match(du)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!nv.test(P?P.toLowerCase():"")}h=g}if(h)ce(i,"complete"),ce(i,"success");else{i.m=6;try{var x=2<ln(i)?i.g.statusText:""}catch{x=""}i.l=x+" ["+i.Z()+"]",Iu(i)}}finally{Di(i)}}}}function Di(i,u){if(i.g){Su(i);const h=i.g,g=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||ce(i,"ready");try{h.onreadystatechange=g}catch{}}}function Su(i){i.I&&(l.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function ln(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),St(u)}};function Tu(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function sv(i){const u={};i=(i.g&&2<=ln(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<i.length;g++){if(D(i[g]))continue;var h=C(i[g]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const x=u[P]||[];u[P]=x,x.push(h)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(i,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||u}function Au(i){this.Aa=0,this.i=[],this.j=new vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,i),this.cb=Ss("retryDelaySeedMs",1e4,i),this.Wa=Ss("forwardChannelMaxRetries",2,i),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new au(i&&i.concurrentRequestLimit),this.Da=new ev,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Au.prototype,t.la=8,t.G=1,t.connect=function(i,u,h,g){st(0),this.W=i,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=Mu(this,null,this.W),Li(this)};function Sa(i){if(Cu(i),i.G==3){var u=i.U++,h=an(i.I);if(Pe(h,"SID",i.K),Pe(h,"RID",u),Pe(h,"TYPE","terminate"),Ts(i,h),u=new xn(i,i.j,u),u.L=2,u.v=Oi(an(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Lu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ki(u)}Du(i)}function Mi(i){i.g&&(Aa(i),i.g.cancel(),i.g=null)}function Cu(i){Mi(i),i.u&&(l.clearTimeout(i.u),i.u=null),Fi(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Li(i){if(!lu(i.h)&&!i.s){i.s=!0;var u=i.Ga;he||xt(),ue||(he(),ue=!0),gt.add(u,i),i.B=0}}function iv(i,u){return cu(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ms(m(i.Ga,i,u),Nu(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const P=new xn(this,this.j,i);let x=this.o;if(this.S&&(x?(x=v(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Pu(this,P,u),h=an(this.I),Pe(h,"RID",i),Pe(h,"CVER",22),this.D&&Pe(h,"X-HTTP-Session-Id",this.D),Ts(this,h),x&&(this.O?u="headers="+encodeURIComponent(String(bu(x)))+"&"+u:this.m&&Ea(h,this.m,x)),Ia(this.h,P),this.Ua&&Pe(h,"TYPE","init"),this.P?(Pe(h,"$req",u),Pe(h,"SID","null"),P.T=!0,ya(P,h,null)):ya(P,h,u),this.G=2}}else this.G==3&&(i?ku(this,i):this.i.length==0||lu(this.h)||ku(this))};function ku(i,u){var h;u?h=u.l:h=i.U++;const g=an(i.I);Pe(g,"SID",i.K),Pe(g,"RID",h),Pe(g,"AID",i.T),Ts(i,g),i.m&&i.o&&Ea(g,i.m,i.o),h=new xn(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Pu(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ia(i.h,h),ya(h,g,u)}function Ts(i,u){i.H&&se(i.H,function(h,g){Pe(u,g,h)}),i.l&&hu({},function(h,g){Pe(u,g,h)})}function Pu(i,u,h){h=Math.min(i.i.length,h);var g=i.l?m(i.l.Na,i.l,i):null;e:{var P=i.i;let x=-1;for(;;){const G=["count="+h];x==-1?0<h?(x=P[0].g,G.push("ofs="+x)):x=0:G.push("ofs="+x);let Se=!0;for(let He=0;He<h;He++){let ye=P[He].g;const Ke=P[He].map;if(ye-=x,0>ye)x=Math.max(0,P[He].g-100),Se=!1;else try{tv(Ke,G,"req"+ye+"_")}catch{g&&g(Ke)}}if(Se){g=G.join("&");break e}}}return i=i.i.splice(0,h),u.D=i,g}function Ru(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;he||xt(),ue||(he(),ue=!0),gt.add(u,i),i.v=0}}function Ta(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ms(m(i.Fa,i),Nu(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Ou(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ms(m(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Mi(this),Ou(this))};function Aa(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Ou(i){i.g=new xn(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=an(i.qa);Pe(u,"RID","rpc"),Pe(u,"SID",i.K),Pe(u,"AID",i.T),Pe(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Pe(u,"TO",i.ja),Pe(u,"TYPE","xmlhttp"),Ts(i,u),i.m&&i.o&&Ea(u,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Oi(an(u)),h.m=null,h.P=!0,su(h,i)}t.Za=function(){this.C!=null&&(this.C=null,Mi(this),Ta(this),st(19))};function Fi(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function xu(i,u){var h=null;if(i.g==u){Fi(i),Aa(i),i.g=null;var g=2}else if(wa(i.h,u))h=u.D,uu(i.h,u),g=1;else return;if(i.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var P=i.B;g=pa(),ce(g,new tu(g,h)),Li(i)}else Ru(i);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&iv(i,u)||g==2&&Ta(i)))switch(h&&0<h.length&&(u=i.h,u.i=u.i.concat(h)),P){case 1:lr(i,5);break;case 4:lr(i,10);break;case 3:lr(i,6);break;default:lr(i,2)}}}function Nu(i,u){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*u}function lr(i,u){if(i.j.info("Error code "+u),u==2){var h=m(i.fb,i),g=i.Xa;const P=!g;g=new ar(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pi(g,"https"),Oi(g),P?Q1(g.toString(),h):Z1(g.toString(),h)}else st(2);i.G=0,i.l&&i.l.sa(u),Du(i),Cu(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Du(i){if(i.G=0,i.ka=[],i.l){const u=fu(i.h);(u.length!=0||i.i.length!=0)&&(F(i.ka,u),F(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function Mu(i,u,h){var g=h instanceof ar?an(h):new ar(h);if(g.g!="")u&&(g.g=u+"."+g.g),Ri(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var x=new ar(null);g&&Pi(x,g),u&&(x.g=u),P&&Ri(x,P),h&&(x.l=h),g=x}return h=i.D,u=i.ya,h&&u&&Pe(g,h,u),Pe(g,"VER",i.la),Ts(i,g),g}function Lu(i,u,h){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Le(new xi({eb:h})):new Le(i.pa),u.Ha(i.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fu(){}t=Fu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Tt(i,u){re.call(this),this.g=new Au(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!D(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ur(this)}R(Tt,re),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Sa(this.g)},Tt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=ze(i),i=h);u.i.push(new B1(u.Ya++,i)),u.G==3&&Li(u)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,Tt.aa.N.call(this)};function $u(i){ha.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){e:{for(const h in u){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}R($u,ha);function Uu(){da.call(this),this.status=1}R(Uu,da);function Ur(i){this.g=i}R(Ur,Fu),Ur.prototype.ua=function(){ce(this.g,"a")},Ur.prototype.ta=function(i){ce(this.g,new $u(i))},Ur.prototype.sa=function(i){ce(this.g,new Uu)},Ur.prototype.ra=function(){ce(this.g,"b")},Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,ga.NO_ERROR=0,ga.TIMEOUT=8,ga.HTTP_ERROR=6,j1.COMPLETE="complete",M1.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",re.prototype.listen=re.prototype.K,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});const bh="@firebase/firestore",wh="4.9.0";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let bi="12.0.0";/**
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
 */const ls=new na("@firebase/firestore");function Lt(t,...e){if(ls.logLevel<=Ie.DEBUG){const n=e.map(Rc);ls.debug(`Firestore (${bi}): ${t}`,...n)}}function Jg(t,...e){if(ls.logLevel<=Ie.ERROR){const n=e.map(Rc);ls.error(`Firestore (${bi}): ${t}`,...n)}}function YE(t,...e){if(ls.logLevel<=Ie.WARN){const n=e.map(Rc);ls.warn(`Firestore (${bi}): ${t}`,...n)}}function Rc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ci(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Qg(t,r,n)}function Qg(t,e,n){let r=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Jg(r),new Error(r)}function Ws(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Qg(e,s,r)}/**
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
 */const ge={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class me extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Zg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class QE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZE{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ws(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let o=new Gs;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gs,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=o;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gs)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ws(typeof r.accessToken=="string",31837,{l:r}),new Zg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ws(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class eS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new eS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ih{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ws(this.o===void 0,3512);const r=o=>{o.error!=null&&Lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Lt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{Lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):Lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ih(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ws(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ih(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class sS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=rS(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%62))}return r}}function nr(t,e){return t<e?-1:t>e?1:0}function iS(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),o=e.charAt(r);if(s!==o)return Xa(s)===Xa(o)?nr(s,o):Xa(s)?1:-1}return nr(t.length,e.length)}const oS=55296,aS=57343;function Xa(t){const e=t.charCodeAt(0);return e>=oS&&e<=aS}/**
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
 */const Eh="__name__";class Kt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ci(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ci(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const o=Kt.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return nr(e.length,n.length)}static compareSegments(e,n){const r=Kt.isNumericId(e),s=Kt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Kt.extractNumericId(e).compare(Kt.extractNumericId(n)):iS(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pc.fromString(e.substring(4,e.length-2))}}class Dt extends Kt{construct(e,n,r){return new Dt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new me(ge.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Dt(n)}static emptyPath(){return new Dt([])}}const lS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mr extends Kt{construct(e,n,r){return new mr(e,n,r)}static isValidIdentifier(e){return lS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eh}static keyField(){return new mr([Eh])}static fromServerFormat(e){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new me(ge.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new me(ge.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new me(ge.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new me(ge.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mr(n)}static emptyPath(){return new mr([])}}/**
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
 */class vr{constructor(e){this.path=e}static fromPath(e){return new vr(Dt.fromString(e))}static fromName(e){return new vr(Dt.fromString(e).popFirst(5))}static empty(){return new vr(Dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Dt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vr(new Dt(e.slice()))}}function cS(t,e,n,r){if(e===!0&&r===!0)throw new me(ge.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function fS(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ci(12329,{type:typeof t})}function hS(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new me(ge.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fS(t);throw new me(ge.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Fe(t,e){const n={typeString:t};return e&&(n.value=e),n}function wi(t,e){if(!uS(t))throw new me(ge.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new me(ge.INVALID_ARGUMENT,n);return!0}/**
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
 */const Sh=-62135596800,Th=1e6;class Yt{static now(){return Yt.fromMillis(Date.now())}static fromDate(e){return Yt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Th);return new Yt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(ge.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(ge.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sh)throw new me(ge.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ge.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Th}_compareTo(e){return this.seconds===e.seconds?nr(this.nanoseconds,e.nanoseconds):nr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Yt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wi(e,Yt._jsonSchema))return new Yt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Yt._jsonSchemaVersion="firestore/timestamp/1.0",Yt._jsonSchema={type:Fe("string",Yt._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};function dS(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pS("Invalid base64 string: "+o):o}}(e);return new Tr(n)}static fromUint8Array(e){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new Tr(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return nr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tr.EMPTY_BYTE_STRING=new Tr("");const xl="(default)";class Co{constructor(e,n){this.projectId=e,this.database=n||xl}static empty(){return new Co("","")}get isDefaultDatabase(){return this.database===xl}isEqual(e){return e instanceof Co&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class gS{constructor(e,n=null,r=[],s=[],o=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mS(t){return new gS(t)}/**
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
 */var Ah,pe;(pe=Ah||(Ah={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Pc([4294967295,4294967295],0);/**
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
 */const vS=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=1048576;function Ya(){return typeof document<"u"?document:null}/**
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
 */class _S{constructor(e,n,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Lt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Oc{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Gs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,l=new Oc(e,n,a,s,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ge.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ch,kh;(kh=Ch||(Ch={})).Ma="default",kh.Cache="cache";/**
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
 */function bS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="firestore.googleapis.com",Rh=!0;class Oh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new me(ge.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=em,this.ssl=Rh}else this.host=e.host,this.ssl=e.ssl??Rh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yS)throw new me(ge.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new me(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new me(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new me(ge.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tm{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ge.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ge.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JE;switch(r.type){case"firstParty":return new tS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new me(ge.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ph.get(n);r&&(Lt("ComponentProvider","Removing Datastore"),Ph.delete(n),r.terminate())}(this),Promise.resolve()}}function wS(t,e,n,r={}){t=hS(t,tm);const s=xr(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(ea(`https://${l}`),ta("Firestore",!0)),o.host!==em&&o.host!==l&&YE("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...o,host:l,ssl:s,emulatorOptions:r};if(!tr(c,a)&&(t._setSettings(c),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=ot.MOCK_USER;else{f=ug(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new me(ge.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ot(p)}t._authCredentials=new QE(new Zg(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xc(this.firestore,e,this._query)}}class Qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}toJSON(){return{type:Qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wi(n,Qt._jsonSchema))return new Qt(e,r||null,new vr(Dt.fromString(n.referencePath)))}}Qt._jsonSchemaVersion="firestore/documentReference/1.0",Qt._jsonSchema={type:Fe("string",Qt._jsonSchemaVersion),referencePath:Fe("string")};class Nc extends xc{constructor(e,n,r){super(e,n,mS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new vr(e))}withConverter(e){return new Nc(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="AsyncQueue";class Nh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _S(this,"async_queue_retry"),this._c=()=>{const r=Ya();r&&Lt(xh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ya();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ya();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!dS(e))throw e;Lt(xh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Jg("INTERNAL UNHANDLED ERROR: ",Dh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Oc.createAndSchedule(this,e,n,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&ci(47125,{Pc:Dh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Dh(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class IS extends tm{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Nh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nh(e),this._firestoreClient=void 0,await e}}}function ES(t,e){const n=typeof t=="object"?t:mi(),r=typeof t=="string"?t:xl,s=kn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=yc("firestore");o&&wS(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(Tr.fromBase64String(e))}catch(n){throw new me(ge.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gn(Tr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wi(e,gn._jsonSchema))return gn.fromBase64String(e.bytes)}}gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:Fe("string",gn._jsonSchemaVersion),bytes:Fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(ge.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ir{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(ge.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(ge.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return nr(this._lat,e._lat)||nr(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ir._jsonSchemaVersion}}static fromJSON(e){if(wi(e,Ir._jsonSchema))return new Ir(e.latitude,e.longitude)}}Ir._jsonSchemaVersion="firestore/geoPoint/1.0",Ir._jsonSchema={type:Fe("string",Ir._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
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
 */class Er{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wi(e,Er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Er(e.vectorValues);throw new me(ge.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Er._jsonSchemaVersion="firestore/vectorValue/1.0",Er._jsonSchema={type:Fe("string",Er._jsonSchemaVersion),vectorValues:Fe("object")};const SS=new RegExp("[~\\*/\\[\\]]");function TS(t,e,n){if(e.search(SS)>=0)throw Mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new nm(...e.split("."))._internalPath}catch{throw Mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Mh(t,e,n,r,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new me(ge.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,r,s,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AS extends rm{data(){return super.data()}}function sm(t,e){return typeof e=="string"?TS(t,e):e instanceof nm?e._internalPath:e._delegate._internalPath}class Wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ns extends rm{constructor(e,n,r,s,o,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new so(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ge.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ns._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ns._jsonSchemaVersion="firestore/documentSnapshot/1.0",ns._jsonSchema={type:Fe("string",ns._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class so extends ns{data(e={}){return super.data(e)}}class qs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new so(this._firestore,this._userDataWriter,r.key,r,new Wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(ge.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new so(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const c=new so(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:CS(l.type),doc:c,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ge.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=sS.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ci(61501,{type:t})}}qs._jsonSchemaVersion="firestore/querySnapshot/1.0",qs._jsonSchema={type:Fe("string",qs._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};(function(e,n=!0){(function(s){bi=s})(Dr),Rt(new bt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new IS(new ZE(r.getProvider("auth-internal")),new nS(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new me(ge.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(f.options.projectId,d)}(a,s),a);return o={useFetchStreams:n,...o},l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),nt(bh,wh,e),nt(bh,wh,"esm2020")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="functions";/**
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
 */class kS{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ct(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(o=>this.auth=o,()=>{}),this.messaging||r.get().then(o=>this.messaging=o,()=>{}),this.appCheck||s?.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const Nl="us-central1";class PS{constructor(e,n,r,s,o=Nl,a=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new kS(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(o);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Nl}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function RS(t,e,n){const r=xr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(ea(t.emulatorOrigin),ta("Functions",!0))}const Lh="@firebase/functions",Fh="0.13.0";/**
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
 */const OS="auth-internal",xS="app-check-internal",NS="messaging-internal";function DS(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),o=n.getProvider(OS),a=n.getProvider(NS),l=n.getProvider(xS);return new PS(s,o,a,l,r)};Rt(new bt(im,e,"PUBLIC").setMultipleInstances(!0)),nt(Lh,Fh,t),nt(Lh,Fh,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t=mi(),e=Nl){const r=kn(Ht(t),im).getImmediate({identifier:e}),s=yc("functions");return s&&LS(r,...s),r}function LS(t,e,n){RS(Ht(t),e,n)}DS();/**
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
 */const om="firebasestorage.googleapis.com",FS="storageBucket",$S=120*1e3,US=600*1e3;/**
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
 */class on extends Ot{constructor(e,n,r=0){super(Ja(e),`Firebase Storage: ${n} (${Ja(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,on.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ja(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sn||(sn={}));function Ja(t){return"storage/"+t}function jS(){const t="An unknown error occurred, please check the error payload for server response.";return new on(sn.UNKNOWN,t)}function VS(){return new on(sn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BS(){return new on(sn.CANCELED,"User canceled the upload/download.")}function zS(t){return new on(sn.INVALID_URL,"Invalid URL '"+t+"'.")}function HS(t){return new on(sn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $h(t){return new on(sn.INVALID_ARGUMENT,t)}function am(){return new on(sn.APP_DELETED,"The Firebase app was deleted.")}function WS(t){return new on(sn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw HS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function f(V){V.path_=decodeURIComponent(V.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},N=n===om?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",O=new RegExp(`^https?://${N}/${s}/${F}`,"i"),j=[{regex:l,indices:c,postModify:o},{regex:w,indices:R,postModify:f},{regex:O,indices:{bucket:1,path:2},postModify:f}];for(let V=0;V<j.length;V++){const Q=j[V],se=Q.regex.exec(e);if(se){const A=se[Q.indices.bucket];let v=se[Q.indices.path];v||(v=""),r=new Ft(A,v),Q.postModify(r);break}}if(r==null)throw zS(e);return r}}class GS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qS(t,e,n){let r=1,s=null,o=null,a=!1,l=0;function c(){return l===2}let f=!1;function d(...F){f||(f=!0,e.apply(null,F))}function p(F){s=setTimeout(()=>{s=null,t(w,c())},F)}function m(){o&&clearTimeout(o)}function w(F,...O){if(f){m();return}if(F){m(),d.call(null,F,...O);return}if(c()||a){m(),d.call(null,F,...O);return}r<64&&(r*=2);let j;l===1?(l=2,j=0):j=(r+Math.random())*1e3,p(j)}let R=!1;function N(F){R||(R=!0,m(),!f&&(s!==null?(F||(l=2),clearTimeout(s),p(0)):F||(l=1)))}return p(0),o=setTimeout(()=>{a=!0,N(!0)},n),N}function KS(t){t(!1)}/**
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
 */function XS(t){return t!==void 0}function Uh(t,e,n,r){if(r<e)throw $h(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $h(`Invalid value for '${t}'. Expected ${n} or less.`)}function YS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ko;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ko||(ko={}));/**
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
 */function JS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
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
 */class QS{constructor(e,n,r,s,o,a,l,c,f,d,p,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=f,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Gi(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const c=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===ko.NO_ERROR,c=o.getStatus();if(!l||JS(c,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===ko.ABORT;r(!1,new Gi(!1,null,d));return}const f=this.successCodes_.indexOf(c)!==-1;r(!0,new Gi(f,o))})},n=(r,s)=>{const o=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());XS(c)?o(c):o()}catch(c){a(c)}else if(l!==null){const c=jS();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(s.canceled){const c=this.appDelete_?am():BS();a(c)}else{const c=VS();a(c)}};this.canceled_?n(!1,new Gi(!1,null,!0)):this.backoffId_=qS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Gi{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eT(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tT(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nT(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rT(t,e,n,r,s,o,a=!0,l=!1){const c=YS(t.urlParams),f=t.url+c,d=Object.assign({},t.headers);return tT(d,e),ZS(d,n),eT(d,o),nT(d,r),new QS(f,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,a,l)}/**
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
 */function sT(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Po{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Po(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iT(this._location.path)}get storage(){return this._service}get parent(){const e=sT(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Po(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw WS(e)}}function jh(t,e){const n=e?.[FS];return n==null?null:Ft.makeFromBucketSpec(n,t)}function oT(t,e,n,r={}){t.host=`${e}:${n}`;const s=xr(e);s&&(ea(`https://${t.host}/b`),ta("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken=typeof o=="string"?o:ug(o,t.app.options.projectId))}class aT{constructor(e,n,r,s,o,a=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=om,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$S,this._maxUploadRetryTime=US,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=jh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=jh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Po(this,e)}_makeRequest(e,n,r,s,o=!0){if(this._deleted)return new GS(am());{const a=rT(e,this._appId,r,s,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Vh="@firebase/storage",Bh="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="storage";function lT(t=mi(),e){t=Ht(t);const r=kn(t,lm).getImmediate({identifier:e}),s=yc("storage");return s&&cT(r,...s),r}function cT(t,e,n,r={}){oT(t,e,n,r)}function uT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new aT(n,r,s,e,Dr)}function fT(){Rt(new bt(lm,uT,"PUBLIC").setMultipleInstances(!0)),nt(Vh,Bh,""),nt(Vh,Bh,"esm2020")}fT();const cm="@firebase/installations",Dc="0.6.19";/**
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
 */const um=1e4,fm=`w:${Dc}`,hm="FIS_v2",hT="https://firebaseinstallations.googleapis.com/v1",dT=3600*1e3,pT="installations",gT="Installations";/**
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
 */const mT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ar=new Nr(pT,gT,mT);function dm(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
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
 */function pm({projectId:t}){return`${hT}/projects/${t}/installations`}function gm(t){return{token:t.token,requestStatus:2,expiresIn:yT(t.expiresIn),creationTime:Date.now()}}async function mm(t,e){const r=(await e.json()).error;return Ar.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vm({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vT(t,{refreshToken:e}){const n=vm(t);return n.append("Authorization",_T(e)),n}async function ym(t){const e=await t();return e.status>=500&&e.status<600?t():e}function yT(t){return Number(t.replace("s","000"))}function _T(t){return`${hm} ${t}`}/**
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
 */async function bT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=pm(t),s=vm(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:hm,appId:t.appId,sdkVersion:fm},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await ym(()=>fetch(r,l));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:gm(f.authToken)}}else throw await mm("Create Installation",c)}/**
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
 */function _m(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function wT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const IT=/^[cdef][\w-]{21}$/,Dl="";function ET(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ST(t);return IT.test(n)?n:Dl}catch{return Dl}}function ST(t){return wT(t).substr(0,22)}/**
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
 */function ia(t){return`${t.appName}!${t.appId}`}/**
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
 */const bm=new Map;function wm(t,e){const n=ia(t);Im(n,e),TT(n,e)}function Im(t,e){const n=bm.get(t);if(n)for(const r of n)r(e)}function TT(t,e){const n=AT();n&&n.postMessage({key:t,fid:e}),CT()}let yr=null;function AT(){return!yr&&"BroadcastChannel"in self&&(yr=new BroadcastChannel("[Firebase] FID Change"),yr.onmessage=t=>{Im(t.data.key,t.data.fid)}),yr}function CT(){bm.size===0&&yr&&(yr.close(),yr=null)}/**
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
 */const kT="firebase-installations-database",PT=1,Cr="firebase-installations-store";let Qa=null;function Mc(){return Qa||(Qa=mg(kT,PT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cr)}}})),Qa}async function Ro(t,e){const n=ia(t),s=(await Mc()).transaction(Cr,"readwrite"),o=s.objectStore(Cr),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&wm(t,e.fid),e}async function Em(t){const e=ia(t),r=(await Mc()).transaction(Cr,"readwrite");await r.objectStore(Cr).delete(e),await r.done}async function oa(t,e){const n=ia(t),s=(await Mc()).transaction(Cr,"readwrite"),o=s.objectStore(Cr),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&wm(t,l.fid),l}/**
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
 */async function Lc(t){let e;const n=await oa(t.appConfig,r=>{const s=RT(r),o=OT(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===Dl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function RT(t){const e=t||{fid:ET(),registrationStatus:0};return Sm(e)}function OT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ar.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=xT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:NT(t)}:{installationEntry:e}}async function xT(t,e){try{const n=await bT(t,e);return Ro(t.appConfig,n)}catch(n){throw dm(n)&&n.customData.serverCode===409?await Em(t.appConfig):await Ro(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function NT(t){let e=await zh(t.appConfig);for(;e.registrationStatus===1;)await _m(100),e=await zh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lc(t);return r||n}return e}function zh(t){return oa(t,e=>{if(!e)throw Ar.create("installation-not-found");return Sm(e)})}function Sm(t){return DT(t)?{fid:t.fid,registrationStatus:0}:t}function DT(t){return t.registrationStatus===1&&t.registrationTime+um<Date.now()}/**
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
 */async function MT({appConfig:t,heartbeatServiceProvider:e},n){const r=LT(t,n),s=vT(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:fm,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await ym(()=>fetch(r,l));if(c.ok){const f=await c.json();return gm(f)}else throw await mm("Generate Auth Token",c)}function LT(t,{fid:e}){return`${pm(t)}/${e}/authTokens:generate`}/**
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
 */async function Fc(t,e=!1){let n;const r=await oa(t.appConfig,o=>{if(!Tm(o))throw Ar.create("not-registered");const a=o.authToken;if(!e&&UT(a))return o;if(a.requestStatus===1)return n=FT(t,e),o;{if(!navigator.onLine)throw Ar.create("app-offline");const l=VT(o);return n=$T(t,l),l}});return n?await n:r.authToken}async function FT(t,e){let n=await Hh(t.appConfig);for(;n.authToken.requestStatus===1;)await _m(100),n=await Hh(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fc(t,e):r}function Hh(t){return oa(t,e=>{if(!Tm(e))throw Ar.create("not-registered");const n=e.authToken;return BT(n)?{...e,authToken:{requestStatus:0}}:e})}async function $T(t,e){try{const n=await MT(t,e),r={...e,authToken:n};return await Ro(t.appConfig,r),n}catch(n){if(dm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Em(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ro(t.appConfig,r)}throw n}}function Tm(t){return t!==void 0&&t.registrationStatus===2}function UT(t){return t.requestStatus===2&&!jT(t)}function jT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dT}function VT(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function BT(t){return t.requestStatus===1&&t.requestTime+um<Date.now()}/**
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
 */async function zT(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lc(e);return r?r.catch(console.error):Fc(e).catch(console.error),n.fid}/**
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
 */async function HT(t,e=!1){const n=t;return await WT(n),(await Fc(n,e)).token}async function WT(t){const{registrationPromise:e}=await Lc(t);e&&await e}/**
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
 */function GT(t){if(!t||!t.options)throw Za("App Configuration");if(!t.name)throw Za("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Za(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Za(t){return Ar.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="installations",qT="installations-internal",KT=t=>{const e=t.getProvider("app").getImmediate(),n=GT(e),r=kn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},XT=t=>{const e=t.getProvider("app").getImmediate(),n=kn(e,Am).getImmediate();return{getId:()=>zT(n),getToken:s=>HT(n,s)}};function YT(){Rt(new bt(Am,KT,"PUBLIC")),Rt(new bt(qT,XT,"PRIVATE"))}YT();nt(cm,Dc);nt(cm,Dc,"esm2020");/**
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
 */const Oo="analytics",JT="firebase_id",QT="origin",ZT=60*1e3,eA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$c="https://www.googletagmanager.com/gtag/js";/**
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
 */const pt=new na("@firebase/analytics");/**
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
 */const tA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_t=new Nr("analytics","Analytics",tA);/**
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
 */function nA(t){if(!t.startsWith($c)){const e=_t.create("invalid-gtag-resource",{gtagURL:t});return pt.warn(e.message),""}return t}function Cm(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function rA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sA(t,e){const n=rA("firebase-js-sdk-policy",{createScriptURL:nA}),r=document.createElement("script"),s=`${$c}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function iA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function oA(t,e,n,r,s,o){const a=r[s];try{if(a)await e[a];else{const c=(await Cm(n)).find(f=>f.measurementId===s);c&&await e[c.appId]}}catch(l){pt.error(l)}t("config",s,o)}async function aA(t,e,n,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Cm(n);for(const c of a){const f=l.find(p=>p.measurementId===c),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,s||{})}catch(o){pt.error(o)}}function lA(t,e,n,r){async function s(o,...a){try{if(o==="event"){const[l,c]=a;await aA(t,e,n,l,c)}else if(o==="config"){const[l,c]=a;await oA(t,e,n,r,l,c)}else if(o==="consent"){const[l,c]=a;t("consent",l,c)}else if(o==="get"){const[l,c,f]=a;t("get",l,c,f)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){pt.error(l)}}return s}function cA(t,e,n,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=lA(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function uA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($c)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=30,hA=1e3;class dA{constructor(e={},n=hA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const km=new dA;function pA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gA(t){const{appId:e,apiKey:n}=t,r={method:"GET",headers:pA(n)},s=eA.replace("{app-id}",e),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();l.error?.message&&(a=l.error.message)}catch{}throw _t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function mA(t,e=km,n){const{appId:r,apiKey:s,measurementId:o}=t.options;if(!r)throw _t.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw _t.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new _A;return setTimeout(async()=>{l.abort()},ZT),Pm({appId:r,apiKey:s,measurementId:o},a,l,e)}async function Pm(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=km){const{appId:o,measurementId:a}=t;try{await vA(r,e)}catch(l){if(a)return pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw l}try{const l=await gA(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!yA(c)){if(s.deleteThrottleMetadata(o),a)return pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw l}const f=Number(c?.customData?.httpStatus)===503?qf(n,s.intervalMillis,fA):qf(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,d),pt.debug(`Calling attemptFetch again in ${f} millis`),Pm(t,d,r,s)}}function vA(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),r(_t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yA(t){if(!(t instanceof Ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _A{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bA(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const o=await e,a={...r,send_to:o};t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(){if(hg())try{await dg()}catch(t){return pt.warn(_t.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return pt.warn(_t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IA(t,e,n,r,s,o,a){const l=mA(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>pt.error(m)),e.push(l);const c=wA().then(m=>{if(m)return r.getId()}),[f,d]=await Promise.all([l,c]);uA(o)||sA(o,f.measurementId),s("js",new Date);const p=a?.config??{};return p[QT]="firebase",p.update=!0,d!=null&&(p[JT]=d),s("config",f.measurementId,p),f.measurementId}/**
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
 */class EA{constructor(e){this.app=e}_delete(){return delete Ks[this.app.options.appId],Promise.resolve()}}let Ks={},Wh=[];const Gh={};let el="dataLayer",SA="gtag",qh,Rm,Kh=!1;function TA(){const t=[];if(fg()&&t.push("This is a browser extension environment."),Ow()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=_t.create("invalid-analytics-context",{errorInfo:e});pt.warn(n.message)}}function AA(t,e,n){TA();const r=t.options.appId;if(!r)throw _t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _t.create("no-api-key");if(Ks[r]!=null)throw _t.create("already-exists",{id:r});if(!Kh){iA(el);const{wrappedGtag:o,gtagCore:a}=cA(Ks,Wh,Gh,el,SA);Rm=o,qh=a,Kh=!0}return Ks[r]=IA(t,Wh,Gh,e,qh,el,n),new EA(t)}function CA(t=mi()){t=Ht(t);const e=kn(t,Oo);return e.isInitialized()?e.getImmediate():kA(t)}function kA(t,e={}){const n=kn(t,Oo);if(n.isInitialized()){const s=n.getImmediate();if(tr(e,n.getOptions()))return s;throw _t.create("already-initialized")}return n.initialize({options:e})}function PA(t,e,n,r){t=Ht(t),bA(Rm,Ks[t.app.options.appId],e,n,r).catch(s=>pt.error(s))}const Xh="@firebase/analytics",Yh="0.10.18";function RA(){Rt(new bt(Oo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return AA(r,s,n)},"PUBLIC")),Rt(new bt("analytics-internal",t,"PRIVATE")),nt(Xh,Yh),nt(Xh,Yh,"esm2020");function t(e){try{const n=e.getProvider(Oo).getImmediate();return{logEvent:(r,s,o)=>PA(n,r,s,o)}}catch(n){throw _t.create("interop-component-reg-failed",{reason:n})}}}RA();const OA={apiKey:"AIzaSyCfS9Kt8O3hAqMPRuCN3v90TjFtQ9A5D2k",authDomain:"ddex-distro.firebaseapp.com",projectId:"ddex-distro",storageBucket:"ddex-distro.firebasestorage.app",messagingSenderId:"297752105707",appId:"1:297752105707:web:6e4a1298b3b60d56f624ae"},Ii=vg(OA);KE(Ii);ES(Ii);MS(Ii);lT(Ii);CA(Ii);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ml(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function xA(t){if(Array.isArray(t))return t}function NA(t){if(Array.isArray(t))return Ml(t)}function DA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function MA(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Om(r.key),r)}}function LA(t,e,n){return e&&MA(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function io(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Uc(t))||e){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return a=c.done,c},e:function(c){l=!0,o=c},f:function(){try{a||n.return==null||n.return()}finally{if(l)throw o}}}}function fe(t,e,n){return(e=Om(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function FA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $A(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,s,o,a,l=[],c=!0,f=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(d){f=!0,s=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(f)throw s}}return l}}function UA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jh(Object(n),!0).forEach(function(r){fe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function aa(t,e){return xA(t)||$A(t,e)||Uc(t,e)||UA()}function zt(t){return NA(t)||FA(t)||Uc(t)||jA()}function VA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Om(t){var e=VA(t,"string");return typeof e=="symbol"?e:e+""}function xo(t){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xo(t)}function Uc(t,e){if(t){if(typeof t=="string")return Ml(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ml(t,e):void 0}}var Qh=function(){},jc={},xm={},Nm=null,Dm={mark:Qh,measure:Qh};try{typeof window<"u"&&(jc=window),typeof document<"u"&&(xm=document),typeof MutationObserver<"u"&&(Nm=MutationObserver),typeof performance<"u"&&(Dm=performance)}catch{}var BA=jc.navigator||{},Zh=BA.userAgent,ed=Zh===void 0?"":Zh,rr=jc,Re=xm,td=Nm,qi=Dm;rr.document;var Pn=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",Mm=~ed.indexOf("MSIE")||~ed.indexOf("Trident/"),tl,zA=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,HA=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Lm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},WA={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Fm=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],rt="classic",Ei="duotone",$m="sharp",Um="sharp-duotone",jm="chisel",Vm="etch",Bm="jelly",zm="jelly-duo",Hm="jelly-fill",Wm="notdog",Gm="notdog-duo",qm="slab",Km="slab-press",Xm="thumbprint",Ym="whiteboard",GA="Classic",qA="Duotone",KA="Sharp",XA="Sharp Duotone",YA="Chisel",JA="Etch",QA="Jelly",ZA="Jelly Duo",e3="Jelly Fill",t3="Notdog",n3="Notdog Duo",r3="Slab",s3="Slab Press",i3="Thumbprint",o3="Whiteboard",Jm=[rt,Ei,$m,Um,jm,Vm,Bm,zm,Hm,Wm,Gm,qm,Km,Xm,Ym];tl={},fe(fe(fe(fe(fe(fe(fe(fe(fe(fe(tl,rt,GA),Ei,qA),$m,KA),Um,XA),jm,YA),Vm,JA),Bm,QA),zm,ZA),Hm,e3),Wm,t3),fe(fe(fe(fe(fe(tl,Gm,n3),qm,r3),Km,s3),Xm,i3),Ym,o3);var a3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},l3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},c3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),u3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Qm=["fak","fa-kit","fakd","fa-kit-duotone"],nd={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},f3=["kit"],h3="kit",d3="kit-duotone",p3="Kit",g3="Kit Duotone";fe(fe({},h3,p3),d3,g3);var m3={kit:{"fa-kit":"fak"}},v3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},y3={kit:{fak:"fa-kit"}},rd={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},nl,Ki={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],b3="classic",w3="duotone",I3="sharp",E3="sharp-duotone",S3="chisel",T3="etch",A3="jelly",C3="jelly-duo",k3="jelly-fill",P3="notdog",R3="notdog-duo",O3="slab",x3="slab-press",N3="thumbprint",D3="whiteboard",M3="Classic",L3="Duotone",F3="Sharp",$3="Sharp Duotone",U3="Chisel",j3="Etch",V3="Jelly",B3="Jelly Duo",z3="Jelly Fill",H3="Notdog",W3="Notdog Duo",G3="Slab",q3="Slab Press",K3="Thumbprint",X3="Whiteboard";nl={},fe(fe(fe(fe(fe(fe(fe(fe(fe(fe(nl,b3,M3),w3,L3),I3,F3),E3,$3),S3,U3),T3,j3),A3,V3),C3,B3),k3,z3),P3,H3),fe(fe(fe(fe(fe(nl,R3,W3),O3,G3),x3,q3),N3,K3),D3,X3);var Y3="kit",J3="kit-duotone",Q3="Kit",Z3="Kit Duotone";fe(fe({},Y3,Q3),J3,Z3);var e6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},t6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Ll={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},n6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Zm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(_3,n6),r6=["solid","regular","light","thin","duotone","brands","semibold"],e1=[1,2,3,4,5,6,7,8,9,10],s6=e1.concat([11,12,13,14,15,16,17,18,19,20]),i6=["aw","fw","pull-left","pull-right"],o6=[].concat(zt(Object.keys(t6)),r6,i6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ki.GROUP,Ki.SWAP_OPACITY,Ki.PRIMARY,Ki.SECONDARY]).concat(e1.map(function(t){return"".concat(t,"x")})).concat(s6.map(function(t){return"w-".concat(t)})),a6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Tn="___FONT_AWESOME___",Fl=16,t1="fa",n1="svg-inline--fa",kr="data-fa-i2svg",$l="data-fa-pseudo-element",l6="data-fa-pseudo-element-pending",Vc="data-prefix",Bc="data-icon",sd="fontawesome-i2svg",c6="async",u6=["HTML","HEAD","STYLE","SCRIPT"],r1=["::before","::after",":before",":after"],s1=function(){try{return!0}catch{return!1}}();function Si(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[rt]}})}var i1=z({},Lm);i1[rt]=z(z(z(z({},{"fa-duotone":"duotone"}),Lm[rt]),nd.kit),nd["kit-duotone"]);var f6=Si(i1),Ul=z({},u3);Ul[rt]=z(z(z(z({},{duotone:"fad"}),Ul[rt]),rd.kit),rd["kit-duotone"]);var id=Si(Ul),jl=z({},Ll);jl[rt]=z(z({},jl[rt]),y3.kit);var o1=Si(jl),Vl=z({},e6);Vl[rt]=z(z({},Vl[rt]),m3.kit);Si(Vl);var h6=zA,a1="fa-layers-text",d6=HA,p6=z({},a3);Si(p6);var g6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rl=WA,m6=[].concat(zt(f3),zt(o6)),Xs=rr.FontAwesomeConfig||{};function v6(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function y6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Re&&typeof Re.querySelector=="function"){var _6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_6.forEach(function(t){var e=aa(t,2),n=e[0],r=e[1],s=y6(v6(n));s!=null&&(Xs[r]=s)})}var l1={styleDefault:"solid",familyDefault:rt,cssPrefix:t1,replacementClass:n1,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xs.familyPrefix&&(Xs.cssPrefix=Xs.familyPrefix);var cs=z(z({},l1),Xs);cs.autoReplaceSvg||(cs.observeMutations=!1);var te={};Object.keys(l1).forEach(function(t){Object.defineProperty(te,t,{enumerable:!0,set:function(n){cs[t]=n,Ys.forEach(function(r){return r(te)})},get:function(){return cs[t]}})});Object.defineProperty(te,"familyPrefix",{enumerable:!0,set:function(e){cs.cssPrefix=e,Ys.forEach(function(n){return n(te)})},get:function(){return cs.cssPrefix}});rr.FontAwesomeConfig=te;var Ys=[];function b6(t){return Ys.push(t),function(){Ys.splice(Ys.indexOf(t),1)}}var Br=Fl,Zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function w6(t){if(!(!t||!Pn)){var e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Re.head.childNodes,r=null,s=n.length-1;s>-1;s--){var o=n[s],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Re.head.insertBefore(e,r),t}}var I6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function od(){for(var t=12,e="";t-- >0;)e+=I6[Math.random()*62|0];return e}function hs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zc(t){return t.classList?hs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function c1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E6(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(c1(t[n]),'" ')},"").trim()}function la(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Hc(t){return t.size!==Zt.size||t.x!==Zt.x||t.y!==Zt.y||t.rotate!==Zt.rotate||t.flipX||t.flipY}function S6(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(a," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:f}}function T6(t){var e=t.transform,n=t.width,r=n===void 0?Fl:n,s=t.height,o=s===void 0?Fl:s,a="";return Mm?a+="translate(".concat(e.x/Br-r/2,"em, ").concat(e.y/Br-o/2,"em) "):a+="translate(calc(-50% + ".concat(e.x/Br,"em), calc(-50% + ").concat(e.y/Br,"em)) "),a+="scale(".concat(e.size/Br*(e.flipX?-1:1),", ").concat(e.size/Br*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var A6=`:root, :host {
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
}`;function u1(){var t=t1,e=n1,n=te.cssPrefix,r=te.replacementClass,s=A6;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return s}var ad=!1;function sl(){te.autoAddCss&&!ad&&(w6(u1()),ad=!0)}var C6={mixout:function(){return{dom:{css:u1,insertCss:sl}}},hooks:function(){return{beforeDOMElementCreation:function(){sl()},beforeI2svg:function(){sl()}}}},An=rr||{};An[Tn]||(An[Tn]={});An[Tn].styles||(An[Tn].styles={});An[Tn].hooks||(An[Tn].hooks={});An[Tn].shims||(An[Tn].shims=[]);var $t=An[Tn],f1=[],h1=function(){Re.removeEventListener("DOMContentLoaded",h1),No=1,f1.map(function(e){return e()})},No=!1;Pn&&(No=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),No||Re.addEventListener("DOMContentLoaded",h1));function k6(t){Pn&&(No?setTimeout(t,0):f1.push(t))}function Ti(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,o=s===void 0?[]:s;return typeof t=="string"?c1(t):"<".concat(e," ").concat(E6(r),">").concat(o.map(Ti).join(""),"</").concat(e,">")}function ld(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var il=function(e,n,r,s){var o=Object.keys(e),a=o.length,l=n,c,f,d;for(r===void 0?(c=1,d=e[o[0]]):(c=0,d=r);c<a;c++)f=o[c],d=l(d,e[f],f,e);return d};function d1(t){return zt(t).length!==1?null:t.codePointAt(0).toString(16)}function cd(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function p1(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,o=cd(e);typeof $t.hooks.addPack=="function"&&!s?$t.hooks.addPack(t,cd(e)):$t.styles[t]=z(z({},$t.styles[t]||{}),o),t==="fas"&&p1("fa",e)}var ui=$t.styles,P6=$t.shims,g1=Object.keys(o1),R6=g1.reduce(function(t,e){return t[e]=Object.keys(o1[e]),t},{}),Wc=null,m1={},v1={},y1={},_1={},b1={};function O6(t){return~m6.indexOf(t)}function x6(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!O6(s)?s:null}var w1=function(){var e=function(o){return il(ui,function(a,l,c){return a[c]=il(l,o,{}),a},{})};m1=e(function(s,o,a){if(o[3]&&(s[o[3]]=a),o[2]){var l=o[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){s[c.toString(16)]=a})}return s}),v1=e(function(s,o,a){if(s[a]=a,o[2]){var l=o[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){s[c]=a})}return s}),b1=e(function(s,o,a){var l=o[2];return s[a]=a,l.forEach(function(c){s[c]=a}),s});var n="far"in ui||te.autoFetchSvg,r=il(P6,function(s,o){var a=o[0],l=o[1],c=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(s.names[a]={prefix:l,iconName:c}),typeof a=="number"&&(s.unicodes[a.toString(16)]={prefix:l,iconName:c}),s},{names:{},unicodes:{}});y1=r.names,_1=r.unicodes,Wc=ca(te.styleDefault,{family:te.familyDefault})};b6(function(t){Wc=ca(t.styleDefault,{family:te.familyDefault})});w1();function Gc(t,e){return(m1[t]||{})[e]}function N6(t,e){return(v1[t]||{})[e]}function _r(t,e){return(b1[t]||{})[e]}function I1(t){return y1[t]||{prefix:null,iconName:null}}function D6(t){var e=_1[t],n=Gc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function sr(){return Wc}var E1=function(){return{prefix:null,iconName:null,rest:[]}};function M6(t){var e=rt,n=g1.reduce(function(r,s){return r[s]="".concat(te.cssPrefix,"-").concat(s),r},{});return Jm.forEach(function(r){(t.includes(n[r])||t.some(function(s){return R6[r].includes(s)}))&&(e=r)}),e}function ca(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?rt:n,s=f6[r][t];if(r===Ei&&!t)return"fad";var o=id[r][t]||id[r][s],a=t in $t.styles?t:null,l=o||a||null;return l}function L6(t){var e=[],n=null;return t.forEach(function(r){var s=x6(te.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function ud(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var fd=Zm.concat(Qm);function ua(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,s=null,o=ud(t.filter(function(w){return fd.includes(w)})),a=ud(t.filter(function(w){return!fd.includes(w)})),l=o.filter(function(w){return s=w,!Fm.includes(w)}),c=aa(l,1),f=c[0],d=f===void 0?null:f,p=M6(o),m=z(z({},L6(a)),{},{prefix:ca(d,{family:p})});return z(z(z({},m),j6({values:t,family:p,styles:ui,config:te,canonical:m,givenPrefix:s})),F6(r,s,m))}function F6(t,e,n){var r=n.prefix,s=n.iconName;if(t||!r||!s)return{prefix:r,iconName:s};var o=e==="fa"?I1(s):{},a=_r(r,s);return s=o.iconName||a||s,r=o.prefix||r,r==="far"&&!ui.far&&ui.fas&&!te.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var $6=Jm.filter(function(t){return t!==rt||t!==Ei}),U6=Object.keys(Ll).filter(function(t){return t!==rt}).map(function(t){return Object.keys(Ll[t])}).flat();function j6(t){var e=t.values,n=t.family,r=t.canonical,s=t.givenPrefix,o=s===void 0?"":s,a=t.styles,l=a===void 0?{}:a,c=t.config,f=c===void 0?{}:c,d=n===Ei,p=e.includes("fa-duotone")||e.includes("fad"),m=f.familyDefault==="duotone",w=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(p||m||w)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&$6.includes(n)){var R=Object.keys(l).find(function(F){return U6.includes(F)});if(R||f.autoFetchSvg){var N=c3.get(n).defaultShortPrefixId;r.prefix=N,r.iconName=_r(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=sr()||"fas"),r}var V6=function(){function t(){DA(this,t),this.definitions={}}return LA(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=z(z({},n.definitions[l]||{}),a[l]),p1(l,a[l]),w1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(o){var a=s[o],l=a.prefix,c=a.iconName,f=a.icon,d=f[2];n[l]||(n[l]={}),d.length>0&&d.forEach(function(p){typeof p=="string"&&(n[l][p]=f)}),n[l][c]=f}),n}}])}(),hd=[],qr={},rs={},B6=Object.keys(rs);function z6(t,e){var n=e.mixoutsTo;return hd=t,qr={},Object.keys(rs).forEach(function(r){B6.indexOf(r)===-1&&delete rs[r]}),hd.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(a){typeof s[a]=="function"&&(n[a]=s[a]),xo(s[a])==="object"&&Object.keys(s[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=s[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){qr[a]||(qr[a]=[]),qr[a].push(o[a])})}r.provides&&r.provides(rs)}),n}function Bl(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var o=qr[t]||[];return o.forEach(function(a){e=a.apply(null,[e].concat(r))}),e}function Pr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=qr[t]||[];s.forEach(function(o){o.apply(null,n)})}function ir(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rs[t]?rs[t].apply(null,e):void 0}function zl(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||sr();if(e)return e=_r(n,e)||e,ld(S1.definitions,n,e)||ld($t.styles,n,e)}var S1=new V6,H6=function(){te.autoReplaceSvg=!1,te.observeMutations=!1,Pr("noAuto")},W6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pn?(Pr("beforeI2svg",e),ir("pseudoElements2svg",e),ir("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;te.autoReplaceSvg===!1&&(te.autoReplaceSvg=!0),te.observeMutations=!0,k6(function(){q6({autoReplaceSvgRoot:n}),Pr("watch",e)})}},G6={icon:function(e){if(e===null)return null;if(xo(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_r(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ca(e[0]);return{prefix:r,iconName:_r(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(te.cssPrefix,"-"))>-1||e.match(h6))){var s=ua(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||sr(),iconName:_r(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var o=sr();return{prefix:o,iconName:_r(o,e)||e}}}},wt={noAuto:H6,config:te,dom:W6,parse:G6,library:S1,findIconDefinition:zl,toHtml:Ti},q6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Re:n;(Object.keys($t.styles).length>0||te.autoFetchSvg)&&Pn&&te.autoReplaceSvg&&wt.dom.i2svg({node:r})};function fa(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ti(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Pn){var r=Re.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function K6(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,o=t.styles,a=t.transform;if(Hc(a)&&n.found&&!r.found){var l=n.width,c=n.height,f={x:l/c/2,y:.5};s.style=la(z(z({},o),{},{"transform-origin":"".concat(f.x+a.x/16,"em ").concat(f.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function X6(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,o=t.symbol,a=o===!0?"".concat(e,"-").concat(te.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},s),{},{id:a}),children:r}]}]}function Y6(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function qc(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,o=t.iconName,a=t.transform,l=t.symbol,c=t.maskId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,m=r.found?r:n,w=m.width,R=m.height,N=[te.replacementClass,o?"".concat(te.cssPrefix,"-").concat(o):""].filter(function(Q){return f.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(f.classes).join(" "),F={children:[],attributes:z(z({},f.attributes),{},{"data-prefix":s,"data-icon":o,class:N,role:f.attributes.role||"img",viewBox:"0 0 ".concat(w," ").concat(R)})};!Y6(f.attributes)&&!f.attributes["aria-hidden"]&&(F.attributes["aria-hidden"]="true"),p&&(F.attributes[kr]="");var O=z(z({},F),{},{prefix:s,iconName:o,main:n,mask:r,maskId:c,transform:a,symbol:l,styles:z({},f.styles)}),D=r.found&&n.found?ir("generateAbstractMask",O)||{children:[],attributes:{}}:ir("generateAbstractIcon",O)||{children:[],attributes:{}},j=D.children,V=D.attributes;return O.children=j,O.attributes=V,l?X6(O):K6(O)}function dd(t){var e=t.content,n=t.width,r=t.height,s=t.transform,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=z(z({},o.attributes),{},{class:o.classes.join(" ")});l&&(c[kr]="");var f=z({},o.styles);Hc(s)&&(f.transform=T6({transform:s,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=la(f);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),p}function J6(t){var e=t.content,n=t.extra,r=z(z({},n.attributes),{},{class:n.classes.join(" ")}),s=la(n.styles);s.length>0&&(r.style=s);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),o}var ol=$t.styles;function Hl(t){var e=t[0],n=t[1],r=t.slice(4),s=aa(r,1),o=s[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(te.cssPrefix,"-").concat(rl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(rl.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(rl.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:a}}var Q6={found:!1,width:512,height:512};function Z6(t,e){!s1&&!te.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wl(t,e){var n=e;return e==="fa"&&te.styleDefault!==null&&(e=sr()),new Promise(function(r,s){if(n==="fa"){var o=I1(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&ol[e]&&ol[e][t]){var a=ol[e][t];return r(Hl(a))}Z6(t,e),r(z(z({},Q6),{},{icon:te.showMissingIcons&&t?ir("missingIconAbstract")||{}:{}}))})}var pd=function(){},Gl=te.measurePerformance&&qi&&qi.mark&&qi.measure?qi:{mark:pd,measure:pd},Rs='FA "7.0.0"',eC=function(e){return Gl.mark("".concat(Rs," ").concat(e," begins")),function(){return T1(e)}},T1=function(e){Gl.mark("".concat(Rs," ").concat(e," ends")),Gl.measure("".concat(Rs," ").concat(e),"".concat(Rs," ").concat(e," begins"),"".concat(Rs," ").concat(e," ends"))},Kc={begin:eC,end:T1},oo=function(){};function gd(t){var e=t.getAttribute?t.getAttribute(kr):null;return typeof e=="string"}function tC(t){var e=t.getAttribute?t.getAttribute(Vc):null,n=t.getAttribute?t.getAttribute(Bc):null;return e&&n}function nC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(te.replacementClass)}function rC(){if(te.autoReplaceSvg===!0)return ao.replace;var t=ao[te.autoReplaceSvg];return t||ao.replace}function sC(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function iC(t){return Re.createElement(t)}function A1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?sC:iC:n;if(typeof t=="string")return Re.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(a){s.setAttribute(a,t.attributes[a])});var o=t.children||[];return o.forEach(function(a){s.appendChild(A1(a,{ceFn:r}))}),s}function oC(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ao={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(A1(s),n)}),n.getAttribute(kr)===null&&te.keepOriginalSource){var r=Re.createComment(oC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~zc(n).indexOf(te.replacementClass))return ao.replace(e);var s=new RegExp("".concat(te.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,c){return c===te.replacementClass||c.match(s)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return Ti(l)}).join(`
`);n.setAttribute(kr,""),n.innerHTML=a}};function md(t){t()}function C1(t,e){var n=typeof e=="function"?e:oo;if(t.length===0)n();else{var r=md;te.mutateApproach===c6&&(r=rr.requestAnimationFrame||md),r(function(){var s=rC(),o=Kc.begin("mutate");t.map(s),o(),n()})}}var Xc=!1;function k1(){Xc=!0}function ql(){Xc=!1}var Do=null;function vd(t){if(td&&te.observeMutations){var e=t.treeCallback,n=e===void 0?oo:e,r=t.nodeCallback,s=r===void 0?oo:r,o=t.pseudoElementsCallback,a=o===void 0?oo:o,l=t.observeMutationsRoot,c=l===void 0?Re:l;Do=new td(function(f){if(!Xc){var d=sr();hs(f).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!gd(p.addedNodes[0])&&(te.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&te.searchPseudoElements&&a([p.target],!0),p.type==="attributes"&&gd(p.target)&&~g6.indexOf(p.attributeName))if(p.attributeName==="class"&&tC(p.target)){var m=ua(zc(p.target)),w=m.prefix,R=m.iconName;p.target.setAttribute(Vc,w||d),R&&p.target.setAttribute(Bc,R)}else nC(p.target)&&s(p.target)})}}),Pn&&Do.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function aC(){Do&&Do.disconnect()}function lC(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var o=s.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function cC(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=ua(zc(t));return s.prefix||(s.prefix=sr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=N6(s.prefix,t.innerText)||Gc(s.prefix,d1(t.innerText))),!s.iconName&&te.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function uC(t){var e=hs(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function fC(){return{iconName:null,prefix:null,transform:Zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=cC(t),r=n.iconName,s=n.prefix,o=n.rest,a=uC(t),l=Bl("parseNodeAttributes",{},t),c=e.styleParser?lC(t):[];return z({iconName:r,prefix:s,transform:Zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:c,attributes:a}},l)}var hC=$t.styles;function P1(t){var e=te.autoReplaceSvg==="nest"?yd(t,{styleParser:!1}):yd(t);return~e.extra.classes.indexOf(a1)?ir("generateLayersText",t,e):ir("generateSvgReplacementMutation",t,e)}function dC(){return[].concat(zt(Qm),zt(Zm))}function _d(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pn)return Promise.resolve();var n=Re.documentElement.classList,r=function(p){return n.add("".concat(sd,"-").concat(p))},s=function(p){return n.remove("".concat(sd,"-").concat(p))},o=te.autoFetchSvg?dC():Fm.concat(Object.keys(hC));o.includes("fa")||o.push("fa");var a=[".".concat(a1,":not([").concat(kr,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(kr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=hs(t.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var c=Kc.begin("onTree"),f=l.reduce(function(d,p){try{var m=P1(p);m&&d.push(m)}catch(w){s1||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,p){Promise.all(f).then(function(m){C1(m,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),d()})}).catch(function(m){c(),p(m)})})}function pC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P1(t).then(function(n){n&&C1([n],e)})}function gC(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:zl(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:zl(s||{})),t(r,z(z({},n),{},{mask:s}))}}var mC=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Zt:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,c=l===void 0?null:l,f=n.maskId,d=f===void 0?null:f,p=n.classes,m=p===void 0?[]:p,w=n.attributes,R=w===void 0?{}:w,N=n.styles,F=N===void 0?{}:N;if(e){var O=e.prefix,D=e.iconName,j=e.icon;return fa(z({type:"icon"},e),function(){return Pr("beforeDOMElementCreation",{iconDefinition:e,params:n}),qc({icons:{main:Hl(j),mask:c?Hl(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:D,transform:z(z({},Zt),s),symbol:a,maskId:d,extra:{attributes:R,styles:F,classes:m}})})}},vC={mixout:function(){return{icon:gC(mC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_d,n.nodeCallback=pC,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?Re:r,o=n.callback,a=o===void 0?function(){}:o;return _d(s,a)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,o=r.prefix,a=r.transform,l=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,m){Promise.all([Wl(s,o),c.iconName?Wl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var R=aa(w,2),N=R[0],F=R[1];p([n,qc({icons:{main:N,mask:F},prefix:o,iconName:s,transform:a,symbol:l,maskId:f,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,o=n.main,a=n.transform,l=n.styles,c=la(l);c.length>0&&(s.style=c);var f;return Hc(a)&&(f=ir("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(f||o.icon),{children:r,attributes:s}}}},yC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,o=s===void 0?[]:s;return fa({type:"layer"},function(){Pr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(c){a=a.concat(c.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(te.cssPrefix,"-layers")].concat(zt(o)).join(" ")},children:a}]})}}}},_C={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,o=s===void 0?[]:s,a=r.attributes,l=a===void 0?{}:a,c=r.styles,f=c===void 0?{}:c;return fa({type:"counter",content:n},function(){return Pr("beforeDOMElementCreation",{content:n,params:r}),J6({content:n.toString(),extra:{attributes:l,styles:f,classes:["".concat(te.cssPrefix,"-layers-counter")].concat(zt(o))}})})}}}},bC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,o=s===void 0?Zt:s,a=r.classes,l=a===void 0?[]:a,c=r.attributes,f=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return fa({type:"text",content:n},function(){return Pr("beforeDOMElementCreation",{content:n,params:r}),dd({content:n,transform:z(z({},Zt),o),extra:{attributes:f,styles:p,classes:["".concat(te.cssPrefix,"-layers-text")].concat(zt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.transform,o=r.extra,a=null,l=null;if(Mm){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/c,l=f.height/c}return Promise.resolve([n,dd({content:n.innerHTML,width:a,height:l,transform:s,extra:o,watchable:!0})])}}},R1=new RegExp('"',"ug"),bd=[1105920,1112319],wd=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),l3),a6),v3),Kl=Object.keys(wd).reduce(function(t,e){return t[e.toLowerCase()]=wd[e],t},{}),wC=Object.keys(Kl).reduce(function(t,e){var n=Kl[e];return t[e]=n[900]||zt(Object.entries(n))[0][1],t},{});function IC(t){var e=t.replace(R1,"");return d1(zt(e)[0]||"")}function EC(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(R1,""),s=r.codePointAt(0),o=s>=bd[0]&&s<=bd[1],a=r.length===2?r[0]===r[1]:!1;return o||a||e}function SC(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Kl[n]||{})[s]||wC[n]}function Id(t,e){var n="".concat(l6).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var o=hs(t.children),a=o.filter(function(se){return se.getAttribute($l)===e})[0],l=rr.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),f=c.match(d6),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(a&&!f)return t.removeChild(a),r();if(f&&p!=="none"&&p!==""){var m=l.getPropertyValue("content"),w=SC(c,d),R=IC(m),N=f[0].startsWith("FontAwesome"),F=EC(l),O=Gc(w,R),D=O;if(N){var j=D6(R);j.iconName&&j.prefix&&(O=j.iconName,w=j.prefix)}if(O&&!F&&(!a||a.getAttribute(Vc)!==w||a.getAttribute(Bc)!==D)){t.setAttribute(n,D),a&&t.removeChild(a);var V=fC(),Q=V.extra;Q.attributes[$l]=e,Wl(O,w).then(function(se){var A=qc(z(z({},V),{},{icons:{main:se,mask:E1()},prefix:w,iconName:D,extra:Q,watchable:!0})),v=Re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(v,t.firstChild):t.appendChild(v),v.outerHTML=A.map(function(y){return Ti(y)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function TC(t){return Promise.all([Id(t,"::before"),Id(t,"::after")])}function AC(t){return t.parentNode!==document.head&&!~u6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($l)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var CC=function(e){return!!e&&r1.some(function(n){return e.includes(n)})},kC=function(e){if(!e)return[];for(var n=new Set,r=[e],s=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],o=function(){var w=l[a];r=r.flatMap(function(R){return R.split(w).map(function(N){return N.replace(/,\s*$/,"").trim()})})},a=0,l=s;a<l.length;a++)o();r=r.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(w){return w.trim()})});var c=io(r),f;try{for(c.s();!(f=c.n()).done;){var d=f.value;if(CC(d)){var p=r1.reduce(function(m,w){return m.replace(w,"")},d);p!==""&&p!=="*"&&n.add(p)}}}catch(m){c.e(m)}finally{c.f()}return n};function Ed(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Pn){var n;if(e)n=t;else if(te.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,s=io(document.styleSheets),o;try{for(s.s();!(o=s.n()).done;){var a=o.value;try{var l=io(a.cssRules),c;try{for(l.s();!(c=l.n()).done;){var f=c.value,d=kC(f.selectorText),p=io(d),m;try{for(p.s();!(m=p.n()).done;){var w=m.value;r.add(w)}}catch(N){p.e(N)}finally{p.f()}}}catch(N){l.e(N)}finally{l.f()}}catch(N){te.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(a.href," (").concat(N.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(N){s.e(N)}finally{s.f()}if(!r.size)return;var R=Array.from(r).join(", ");try{n=t.querySelectorAll(R)}catch{}}return new Promise(function(N,F){var O=hs(n).filter(AC).map(TC),D=Kc.begin("searchPseudoElements");k1(),Promise.all(O).then(function(){D(),ql(),N()}).catch(function(){D(),ql(),F()})})}}var PC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ed,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?Re:r;te.searchPseudoElements&&Ed(s)}}},Sd=!1,RC={mixout:function(){return{dom:{unwatch:function(){k1(),Sd=!0}}}},hooks:function(){return{bootstrap:function(){vd(Bl("mutationObserverCallbacks",{}))},noAuto:function(){aC()},watch:function(n){var r=n.observeMutationsRoot;Sd?ql():vd(Bl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Td=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var o=s.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},OC={mixout:function(){return{parse:{transform:function(n){return Td(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=Td(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),f="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),d="rotate(".concat(s.rotate," 0 0)"),p={transform:"".concat(c," ").concat(f," ").concat(d)},m={transform:"translate(".concat(a/2*-1," -256)")},w={outer:l,inner:p,path:m};return{tag:"g",attributes:z({},w.outer),children:[{tag:"g",attributes:z({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:z(z({},r.icon.attributes),w.path)}]}]}}}},al={x:0,y:0,width:"100%",height:"100%"};function Ad(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xC(t){return t.tag==="g"?t.children:[t]}var NC={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),o=s?ua(s.split(" ").map(function(a){return a.trim()})):E1();return o.prefix||(o.prefix=sr()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,o=n.main,a=n.mask,l=n.maskId,c=n.transform,f=o.width,d=o.icon,p=a.width,m=a.icon,w=S6({transform:c,containerWidth:p,iconWidth:f}),R={tag:"rect",attributes:z(z({},al),{},{fill:"white"})},N=d.children?{children:d.children.map(Ad)}:{},F={tag:"g",attributes:z({},w.inner),children:[Ad(z({tag:d.tag,attributes:z(z({},d.attributes),w.path)},N))]},O={tag:"g",attributes:z({},w.outer),children:[F]},D="mask-".concat(l||od()),j="clip-".concat(l||od()),V={tag:"mask",attributes:z(z({},al),{},{id:D,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,O]},Q={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:xC(m)},V]};return r.push(Q,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(D,")")},al)}),{children:r,attributes:s}}}},DC={provides:function(e){var n=!1;rr.matchMedia&&(n=rr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:z(z({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=z(z({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:z(z({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:z(z({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:z(z({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:z(z({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:z(z({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},MC={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),o=s===null?!1:s===""?!0:s;return n.symbol=o,n}}}},LC=[C6,vC,yC,_C,bC,PC,RC,OC,NC,DC,MC];z6(LC,{mixoutsTo:wt});wt.noAuto;wt.config;var O1=wt.library;wt.dom;var Xl=wt.parse;wt.findIconDefinition;wt.toHtml;var FC=wt.icon;wt.layer;wt.text;wt.counter;function Ye(t,e,n){return(e=VC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cd(Object(n),!0).forEach(function(r){Ye(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cd(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $C(t,e){if(t==null)return{};var n,r,s=UC(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function UC(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function jC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function VC(t){var e=jC(t,"string");return typeof e=="symbol"?e:e+""}function Mo(t){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mo(t)}function ll(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ye({},t,e):{}}function BC(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-rotate-by",t.rotateBy),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),Ye(Ye(Ye(Ye(e,"fa-flash",t.flash),"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse),"fa-width-auto",t.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var zC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x1={exports:{}};(function(t){(function(e){var n=function(O,D,j){if(!f(D)||p(D)||m(D)||w(D)||c(D))return D;var V,Q=0,se=0;if(d(D))for(V=[],se=D.length;Q<se;Q++)V.push(n(O,D[Q],j));else{V={};for(var A in D)Object.prototype.hasOwnProperty.call(D,A)&&(V[O(A,j)]=n(O,D[A],j))}return V},r=function(O,D){D=D||{};var j=D.separator||"_",V=D.split||/(?=[A-Z])/;return O.split(V).join(j)},s=function(O){return R(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(D,j){return j?j.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},o=function(O){var D=s(O);return D.substr(0,1).toUpperCase()+D.substr(1)},a=function(O,D){return r(O,D).toLowerCase()},l=Object.prototype.toString,c=function(O){return typeof O=="function"},f=function(O){return O===Object(O)},d=function(O){return l.call(O)=="[object Array]"},p=function(O){return l.call(O)=="[object Date]"},m=function(O){return l.call(O)=="[object RegExp]"},w=function(O){return l.call(O)=="[object Boolean]"},R=function(O){return O=O-0,O===O},N=function(O,D){var j=D&&"process"in D?D.process:D;return typeof j!="function"?O:function(V,Q){return j(V,O,Q)}},F={camelize:s,decamelize:a,pascalize:o,depascalize:a,camelizeKeys:function(O,D){return n(N(s,D),O)},decamelizeKeys:function(O,D){return n(N(a,D),O,D)},pascalizeKeys:function(O,D){return n(N(o,D),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=F:e.humps=F})(zC)})(x1);var HC=x1.exports,WC=["class","style"];function GC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=HC.camelize(n.slice(0,r)),o=n.slice(r+1).trim();return e[s]=o,e},{})}function qC(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function N1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return N1(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,f){var d=t.attributes[f];switch(f){case"class":c.class=qC(d);break;case"style":c.style=GC(d);break;default:c.attrs[f]=d}return c},{attrs:{},class:{},style:{}});n.class;var o=n.style,a=o===void 0?{}:o,l=$C(n,WC);return Yo(t.tag,mn(mn(mn({},e),{},{class:s.class,style:mn(mn({},s.style),a)},s.attrs),l),r)}var D1=!1;try{D1=!0}catch{}function KC(){if(!D1&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function kd(t){if(t&&Mo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xl.icon)return Xl.icon(t);if(t===null)return null;if(Mo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var XC=fc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return kd(e.icon)}),o=Ue(function(){return ll("classes",BC(e))}),a=Ue(function(){return ll("transform",typeof e.transform=="string"?Xl.transform(e.transform):e.transform)}),l=Ue(function(){return ll("mask",kd(e.mask))}),c=Ue(function(){var d=mn(mn(mn(mn({},o.value),a.value),l.value),{},{symbol:e.symbol,maskId:e.maskId});return d.title=e.title,d.titleId=e.titleId,FC(s.value,d)});$s(c,function(d){if(!d)return KC("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var f=Ue(function(){return c.value?N1(c.value.abstract[0],{},r):null});return function(){return f.value}}});/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var YC={prefix:"fas",iconName:"truck",icon:[576,512,[128666,9951],"f0d1","M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},JC={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},QC={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},ZC={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},e5=ZC,t5={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},n5={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M178.2-10.1c7.4-3.1 15.8-2.2 22.5 2.2l87.8 58.2 87.8-58.2c6.7-4.4 15.1-5.2 22.5-2.2S411.4-.5 413 7.3l20.9 103.2 103.2 20.9c7.8 1.6 14.4 7 17.4 14.3s2.2 15.8-2.2 22.5l-58.2 87.8 58.2 87.8c4.4 6.7 5.2 15.1 2.2 22.5s-9.6 12.8-17.4 14.3L433.8 401.4 413 504.7c-1.6 7.8-7 14.4-14.3 17.4s-15.8 2.2-22.5-2.2l-87.8-58.2-87.8 58.2c-6.7 4.4-15.1 5.2-22.5 2.2s-12.8-9.6-14.3-17.4L143 401.4 39.7 380.5c-7.8-1.6-14.4-7-17.4-14.3s-2.2-15.8 2.2-22.5L82.7 256 24.5 168.2c-4.4-6.7-5.2-15.1-2.2-22.5s9.6-12.8 17.4-14.3L143 110.6 163.9 7.3c1.6-7.8 7-14.4 14.3-17.4zM207.6 256a80.4 80.4 0 1 1 160.8 0 80.4 80.4 0 1 1 -160.8 0zm208.8 0a128.4 128.4 0 1 0 -256.8 0 128.4 128.4 0 1 0 256.8 0z"]},r5={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},s5={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256a192 192 0 1 0 -384 0 192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},i5={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},o5=i5,a5={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},l5={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},c5={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},u5=c5,f5={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z"]},h5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},d5=h5,p5={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm84.4-299.3l-80 128c-4.2 6.7-11.4 10.9-19.3 11.3s-15.5-3.2-20.2-9.6l-48-64c-8-10.6-5.8-25.6 4.8-33.6s25.6-5.8 33.6 4.8l27 36 61.4-98.3c7-11.2 21.8-14.7 33.1-7.6s14.7 21.8 7.6 33.1z"]},g5=p5,m5={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},v5={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},y5={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]},_5={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},b5={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},w5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var I5={prefix:"fab",iconName:"google",icon:[512,512,[],"f1a0","M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"]},E5={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},S5={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},T5={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},A5={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},C5={prefix:"fab",iconName:"spotify",icon:[512,512,[],"f1bc","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM356.7 372.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},k5={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};O1.add(u5,y5,v5,_5,e5,QC,a5,d5,o5,l5,f5,t5,s5,JC,g5,r5,b5,YC,m5,n5,w5);O1.add(I5,C5,A5,S5,k5,T5,E5);const Yc=k0(Y_);Yc.component("font-awesome-icon",XC);Yc.use(rg);Yc.mount("#app");
