(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ee={},Ht=[],je=()=>{},cl=()=>!1,ul=/^on[^a-z]/,hr=e=>ul.test(e),ka=e=>e.startsWith("onUpdate:"),ue=Object.assign,Ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},dl=Object.prototype.hasOwnProperty,Y=(e,t)=>dl.call(e,t),z=Array.isArray,Ut=e=>pr(e)==="[object Map]",Ao=e=>pr(e)==="[object Set]",H=e=>typeof e=="function",se=e=>typeof e=="string",Aa=e=>typeof e=="symbol",re=e=>e!==null&&typeof e=="object",Po=e=>re(e)&&H(e.then)&&H(e.catch),Oo=Object.prototype.toString,pr=e=>Oo.call(e),ml=e=>pr(e).slice(8,-1),So=e=>pr(e)==="[object Object]",Pa=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qn=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},hl=/-(\w)/g,qe=gr(e=>e.replace(hl,(t,n)=>n?n.toUpperCase():"")),pl=/\B([A-Z])/g,Zt=gr(e=>e.replace(pl,"-$1").toLowerCase()),vr=gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ir=gr(e=>e?`on${vr(e)}`:""),yn=(e,t)=>!Object.is(e,t),Mr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ar=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ii;const qr=()=>ii||(ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wn(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=se(r)?wl(r):wn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(se(e))return e;if(re(e))return e}}const vl=/;(?![^(]*\))/g,bl=/:([^]+)/,yl=/\/\*[^]*?\*\//g;function wl(e){const t={};return e.replace(yl,"").split(vl).forEach(n=>{if(n){const r=n.split(bl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ct(e){let t="";if(se(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Ct(e[n]);r&&(t+=r+" ")}else if(re(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_l=_a(xl);function Co(e){return!!e||e===""}const kl=e=>se(e)?e:e==null?"":z(e)||re(e)&&(e.toString===Oo||!H(e.toString))?JSON.stringify(e,To,2):String(e),To=(e,t)=>t&&t.__v_isRef?To(e,t.value):Ut(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ao(t)?{[`Set(${t.size})`]:[...t.values()]}:re(t)&&!z(t)&&!So(t)?String(t):t;let Me;class El{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Al(e,t=Me){t&&t.active&&t.effects.push(e)}function Pl(){return Me}const Oa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ro=e=>(e.w&ht)>0,Io=e=>(e.n&ht)>0,Ol=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},Sl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ro(a)&&!Io(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},Vr=new WeakMap;let fn=0,ht=1;const Xr=30;let Ne;const Pt=Symbol(""),Gr=Symbol("");class Sa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Al(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,dt=!0,ht=1<<++fn,fn<=Xr?Ol(this):oi(this),this.fn()}finally{fn<=Xr&&Sl(this),ht=1<<--fn,Ne=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(oi(this),this.onStop&&this.onStop(),this.active=!1)}}function oi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const Mo=[];function en(){Mo.push(dt),dt=!1}function tn(){const e=Mo.pop();dt=e===void 0?!0:e}function _e(e,t,n){if(dt&&Ne){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Oa()),No(a)}}function No(e,t){let n=!1;fn<=Xr?Io(e)||(e.n|=ht,n=!Ro(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Ze(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&z(e)){const l=Number(r);o.forEach((c,f)=>{(f==="length"||f>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":z(e)?Pa(n)&&s.push(o.get("length")):(s.push(o.get(Pt)),Ut(e)&&s.push(o.get(Gr)));break;case"delete":z(e)||(s.push(o.get(Pt)),Ut(e)&&s.push(o.get(Gr)));break;case"set":Ut(e)&&s.push(o.get(Pt));break}if(s.length===1)s[0]&&Qr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Qr(Oa(l))}}function Qr(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&si(r);for(const r of n)r.computed||si(r)}function si(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cl=_a("__proto__,__v_isRef,__isVue"),Fo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Aa)),Tl=Ca(),Rl=Ca(!1,!0),Il=Ca(!0),li=Ml();function Ml(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){en();const r=K(this)[t].apply(this,n);return tn(),r}}),e}function Nl(e){const t=K(this);return _e(t,"has",e),t.hasOwnProperty(e)}function Ca(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Gl:zo:t?Do:$o).get(r))return r;const o=z(r);if(!e){if(o&&Y(li,a))return Reflect.get(li,a,i);if(a==="hasOwnProperty")return Nl}const s=Reflect.get(r,a,i);return(Aa(a)?Fo.has(a):Cl(a))||(e||_e(r,"get",a),t)?s:ge(s)?o&&Pa(a)?s:s.value:re(s)?e?Ho(s):yr(s):s}}const Fl=Lo(),Ll=Lo(!0);function Lo(e=!1){return function(n,r,a,i){let o=n[r];if(qt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!ir(a)&&!qt(a)&&(o=K(o),a=K(a)),!z(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=z(n)&&Pa(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,a,i);return n===K(i)&&(s?yn(a,o)&&Ze(n,"set",r,a):Ze(n,"add",r,a)),l}}function jl(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ze(e,"delete",t,void 0),r}function $l(e,t){const n=Reflect.has(e,t);return(!Aa(t)||!Fo.has(t))&&_e(e,"has",t),n}function Dl(e){return _e(e,"iterate",z(e)?"length":Pt),Reflect.ownKeys(e)}const jo={get:Tl,set:Fl,deleteProperty:jl,has:$l,ownKeys:Dl},zl={get:Il,set(e,t){return!0},deleteProperty(e,t){return!0}},Bl=ue({},jo,{get:Rl,set:Ll}),Ta=e=>e,br=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=K(e),i=K(t);n||(t!==i&&_e(a,"get",t),_e(a,"get",i));const{has:o}=br(a),s=r?Ta:n?Ma:xn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=K(n),a=K(e);return t||(e!==a&&_e(r,"has",e),_e(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function $n(e,t=!1){return e=e.__v_raw,!t&&_e(K(e),"iterate",Pt),Reflect.get(e,"size",e)}function fi(e){e=K(e);const t=K(this);return br(t).has.call(t,e)||(t.add(e),Ze(t,"add",e,e)),this}function ci(e,t){t=K(t);const n=K(this),{has:r,get:a}=br(n);let i=r.call(n,e);i||(e=K(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yn(t,o)&&Ze(n,"set",e,t):Ze(n,"add",e,t),this}function ui(e){const t=K(this),{has:n,get:r}=br(t);let a=n.call(t,e);a||(e=K(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ze(t,"delete",e,void 0),i}function di(){const e=K(this),t=e.size!==0,n=e.clear();return t&&Ze(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=K(o),l=t?Ta:e?Ma:xn;return!e&&_e(s,"iterate",Pt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=K(a),o=Ut(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ta:t?Ma:xn;return!t&&_e(i,"iterate",l?Gr:Pt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[f(m[0]),f(m[1])]:f(m),done:h}},[Symbol.iterator](){return this}}}}function st(e){return function(...t){return e==="delete"?!1:this}}function Hl(){const e={get(i){return Ln(this,i)},get size(){return $n(this)},has:jn,add:fi,set:ci,delete:ui,clear:di,forEach:Dn(!1,!1)},t={get(i){return Ln(this,i,!1,!0)},get size(){return $n(this)},has:jn,add:fi,set:ci,delete:ui,clear:di,forEach:Dn(!1,!0)},n={get(i){return Ln(this,i,!0)},get size(){return $n(this,!0)},has(i){return jn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Dn(!0,!1)},r={get(i){return Ln(this,i,!0,!0)},get size(){return $n(this,!0)},has(i){return jn.call(this,i,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[Ul,Wl,Yl,Kl]=Hl();function Ra(e,t){const n=t?e?Kl:Yl:e?Wl:Ul;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const ql={get:Ra(!1,!1)},Vl={get:Ra(!1,!0)},Xl={get:Ra(!0,!1)},$o=new WeakMap,Do=new WeakMap,zo=new WeakMap,Gl=new WeakMap;function Ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ql(ml(e))}function yr(e){return qt(e)?e:Ia(e,!1,jo,ql,$o)}function Bo(e){return Ia(e,!1,Bl,Vl,Do)}function Ho(e){return Ia(e,!0,zl,Xl,zo)}function Ia(e,t,n,r,a){if(!re(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Jl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Wt(e){return qt(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function Uo(e){return Wt(e)||qt(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Wo(e){return ar(e,"__v_skip",!0),e}const xn=e=>re(e)?yr(e):e,Ma=e=>re(e)?Ho(e):e;function Yo(e){dt&&Ne&&(e=K(e),No(e.dep||(e.dep=Oa())))}function Ko(e,t){e=K(e);const n=e.dep;n&&Qr(n)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Zl(e){return qo(e,!1)}function ef(e){return qo(e,!0)}function qo(e,t){return ge(e)?e:new tf(e,t)}class tf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:xn(t)}get value(){return Yo(this),this._value}set value(t){const n=this.__v_isShallow||ir(t)||qt(t);t=n?t:K(t),yn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),Ko(this))}}function Ot(e){return ge(e)?e.value:e}const nf={get:(e,t,n)=>Ot(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return Wt(e)?e:new Proxy(e,nf)}class rf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sa(t,()=>{this._dirty||(this._dirty=!0,Ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=K(this);return Yo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function af(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=je):(r=e.get,a=e.set),new rf(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){wr(i,t,n)}return a}function $e(e,t,n,r){if(H(e)){const i=mt(e,t,n,r);return i&&Po(i)&&i.catch(o=>{wr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push($e(e[i],t,n,r));return a}function wr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}of(e,n,a,r)}function of(e,t,n,r=!0){console.error(e)}let _n=!1,Jr=!1;const pe=[];let Ye=0;const Yt=[];let Ge=null,xt=0;const Xo=Promise.resolve();let Na=null;function Go(e){const t=Na||Xo;return e?t.then(this?e.bind(this):e):t}function sf(e){let t=Ye+1,n=pe.length;for(;t<n;){const r=t+n>>>1;kn(pe[r])<e?t=r+1:n=r}return t}function Fa(e){(!pe.length||!pe.includes(e,_n&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?pe.push(e):pe.splice(sf(e.id),0,e),Qo())}function Qo(){!_n&&!Jr&&(Jr=!0,Na=Xo.then(Zo))}function lf(e){const t=pe.indexOf(e);t>Ye&&pe.splice(t,1)}function ff(e){z(e)?Yt.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?xt+1:xt))&&Yt.push(e),Qo()}function mi(e,t=_n?Ye+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function Jo(e){if(Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Ge){Ge.push(...t);return}for(Ge=t,Ge.sort((n,r)=>kn(n)-kn(r)),xt=0;xt<Ge.length;xt++)Ge[xt]();Ge=null,xt=0}}const kn=e=>e.id==null?1/0:e.id,cf=(e,t)=>{const n=kn(e)-kn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Zo(e){Jr=!1,_n=!0,pe.sort(cf);const t=je;try{for(Ye=0;Ye<pe.length;Ye++){const n=pe[Ye];n&&n.active!==!1&&mt(n,null,14)}}finally{Ye=0,pe.length=0,Jo(),_n=!1,Na=null,(pe.length||Yt.length)&&Zo()}}function uf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[f]||ee;h&&(a=n.map(g=>se(g)?g.trim():g)),m&&(a=n.map(gl))}let s,l=r[s=Ir(t)]||r[s=Ir(qe(t))];!l&&i&&(l=r[s=Ir(Zt(t))]),l&&$e(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,$e(c,e,6,a)}}function es(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=c=>{const f=es(c,t,!0);f&&(s=!0,ue(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(re(e)&&r.set(e,null),null):(z(i)?i.forEach(l=>o[l]=null):ue(o,i),re(e)&&r.set(e,o),o)}function xr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Zt(t))||Y(e,t))}let Re=null,_r=null;function or(e){const t=Re;return Re=e,_r=e&&e.type.__scopeId||null,t}function df(e){_r=e}function mf(){_r=null}function hf(e,t=Re,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ei(-1);const i=or(t);let o;try{o=e(...a)}finally{or(i),r._d&&Ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:m,data:h,setupState:g,ctx:O,inheritAttrs:S}=e;let L,w;const x=or(e);try{if(n.shapeFlag&4){const C=a||r;L=We(f.call(C,C,m,i,g,h,O)),w=l}else{const C=t;L=We(C.length>1?C(i,{attrs:l,slots:s,emit:c}):C(i,null)),w=t.props?l:pf(l)}}catch(C){hn.length=0,wr(C,e,1),L=ce(Tt)}let F=L;if(w&&S!==!1){const C=Object.keys(w),{shapeFlag:U}=F;C.length&&U&7&&(o&&C.some(ka)&&(w=gf(w,o)),F=Vt(F,w))}return n.dirs&&(F=Vt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),L=F,or(x),L}const pf=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},gf=(e,t)=>{const n={};for(const r in e)(!ka(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function vf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?hi(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let m=0;m<f.length;m++){const h=f[m];if(o[h]!==r[h]&&!xr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?hi(r,o,c):!0:!!o;return!1}function hi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function bf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const yf=e=>e.__isSuspense;function wf(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):ff(e)}const Bn={};function dn(e,t,n){return ts(e,t,n)}function ts(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ee){var s;const l=Pl()===((s=me)==null?void 0:s.scope)?me:null;let c,f=!1,m=!1;if(ge(e)?(c=()=>e.value,f=ir(e)):Wt(e)?(c=()=>e,r=!0):z(e)?(m=!0,f=e.some(C=>Wt(C)||ir(C)),c=()=>e.map(C=>{if(ge(C))return C.value;if(Wt(C))return kt(C);if(H(C))return mt(C,l,2)})):H(e)?t?c=()=>mt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),$e(e,l,3,[g])}:c=je,t&&r){const C=c;c=()=>kt(C())}let h,g=C=>{h=x.onStop=()=>{mt(C,l,4)}},O;if(An)if(g=je,t?n&&$e(t,l,3,[c(),m?[]:void 0,g]):c(),a==="sync"){const C=gc();O=C.__watcherHandles||(C.__watcherHandles=[])}else return je;let S=m?new Array(e.length).fill(Bn):Bn;const L=()=>{if(x.active)if(t){const C=x.run();(r||f||(m?C.some((U,J)=>yn(U,S[J])):yn(C,S)))&&(h&&h(),$e(t,l,3,[C,S===Bn?void 0:m&&S[0]===Bn?[]:S,g]),S=C)}else x.run()};L.allowRecurse=!!t;let w;a==="sync"?w=L:a==="post"?w=()=>xe(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),w=()=>Fa(L));const x=new Sa(c,w);t?n?L():S=x.run():a==="post"?xe(x.run.bind(x),l&&l.suspense):x.run();const F=()=>{x.stop(),l&&l.scope&&Ea(l.scope.effects,x)};return O&&O.push(F),F}function xf(e,t,n){const r=this.proxy,a=se(e)?e.includes(".")?ns(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=me;Xt(this);const s=ts(a,i.bind(r),n);return o?Xt(o):St(),s}function ns(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function kt(e,t){if(!re(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))kt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)kt(e[n],t);else if(Ao(e)||Ut(e))e.forEach(n=>{kt(n,t)});else if(So(e))for(const n in e)kt(e[n],t);return e}function _f(e,t){const n=Re;if(n===null)return e;const r=Pr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=ee]=t[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&kt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function yt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(en(),$e(l,n,8,[e.el,s,e,t]),tn())}}function Mt(e,t){return H(e)?(()=>ue({name:e.name},t,{setup:e}))():e}const Jn=e=>!!e.type.__asyncLoader,rs=e=>e.type.__isKeepAlive;function kf(e,t){as(e,"a",t)}function Ef(e,t){as(e,"da",t)}function as(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(kr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)rs(a.parent.vnode)&&Af(r,t,n,a),a=a.parent}}function Af(e,t,n,r){const a=kr(t,e,r,!0);is(()=>{Ea(r[t],a)},n)}function kr(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;en(),Xt(n);const s=$e(t,n,e,o);return St(),tn(),s});return r?a.unshift(i):a.push(i),i}}const rt=e=>(t,n=me)=>(!An||e==="sp")&&kr(e,(...r)=>t(...r),n),Pf=rt("bm"),Of=rt("m"),Sf=rt("bu"),Cf=rt("u"),Tf=rt("bum"),is=rt("um"),Rf=rt("sp"),If=rt("rtg"),Mf=rt("rtc");function Nf(e,t=me){kr("ec",e,t)}const os="components";function ss(e,t){return Lf(os,e,!0,t)||e}const Ff=Symbol.for("v-ndc");function Lf(e,t,n=!0,r=!1){const a=Re||me;if(a){const i=a.type;if(e===os){const s=mc(i,!1);if(s&&(s===t||s===qe(t)||s===vr(qe(t))))return i}const o=pi(a[e]||i[e],t)||pi(a.appContext[e],t);return!o&&r?i:o}}function pi(e,t){return e&&(e[t]||e[qe(t)]||e[vr(qe(t))])}function Zr(e,t,n,r){let a;const i=n&&n[r];if(z(e)||se(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(re(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ea=e=>e?bs(e)?Pr(e)||e.proxy:ea(e.parent):null,mn=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>La(e),$forceUpdate:e=>e.f||(e.f=()=>Fa(e.update)),$nextTick:e=>e.n||(e.n=Go.bind(e.proxy)),$watch:e=>xf.bind(e)}),Fr=(e,t)=>e!==ee&&!e.__isScriptSetup&&Y(e,t),jf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Fr(r,t))return o[t]=1,r[t];if(a!==ee&&Y(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&Y(c,t))return o[t]=3,i[t];if(n!==ee&&Y(n,t))return o[t]=4,n[t];ta&&(o[t]=0)}}const f=mn[t];let m,h;if(f)return t==="$attrs"&&_e(e,"get",t),f(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==ee&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Fr(a,t)?(a[t]=n,!0):r!==ee&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ee&&Y(e,o)||Fr(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(mn,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function gi(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ta=!0;function $f(e){const t=La(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&vi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:m,mounted:h,beforeUpdate:g,updated:O,activated:S,deactivated:L,beforeDestroy:w,beforeUnmount:x,destroyed:F,unmounted:C,render:U,renderTracked:J,renderTriggered:ae,errorCaptured:ke,serverPrefetch:ve,expose:Se,inheritAttrs:it,components:bt,directives:ze,filters:rn}=t;if(c&&Df(c,r,null),o)for(const Q in o){const q=o[Q];H(q)&&(r[Q]=q.bind(n))}if(a){const Q=a.call(n,n);re(Q)&&(e.data=yr(Q))}if(ta=!0,i)for(const Q in i){const q=i[Q],Ve=H(q)?q.bind(n,n):H(q.get)?q.get.bind(n,n):je,ot=!H(q)&&H(q.set)?q.set.bind(n):je,Be=de({get:Ve,set:ot});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Be.value,set:ye=>Be.value=ye})}if(s)for(const Q in s)ls(s[Q],r,n,Q);if(l){const Q=H(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(q=>{Zn(q,Q[q])})}f&&vi(f,e,"c");function fe(Q,q){z(q)?q.forEach(Ve=>Q(Ve.bind(n))):q&&Q(q.bind(n))}if(fe(Pf,m),fe(Of,h),fe(Sf,g),fe(Cf,O),fe(kf,S),fe(Ef,L),fe(Nf,ke),fe(Mf,J),fe(If,ae),fe(Tf,x),fe(is,C),fe(Rf,ve),z(Se))if(Se.length){const Q=e.exposed||(e.exposed={});Se.forEach(q=>{Object.defineProperty(Q,q,{get:()=>n[q],set:Ve=>n[q]=Ve})})}else e.exposed||(e.exposed={});U&&e.render===je&&(e.render=U),it!=null&&(e.inheritAttrs=it),bt&&(e.components=bt),ze&&(e.directives=ze)}function Df(e,t,n=je){z(e)&&(e=na(e));for(const r in e){const a=e[r];let i;re(a)?"default"in a?i=Je(a.from||r,a.default,!0):i=Je(a.from||r):i=Je(a),ge(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function vi(e,t,n){$e(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ls(e,t,n,r){const a=r.includes(".")?ns(n,r):()=>n[r];if(se(e)){const i=t[e];H(i)&&dn(a,i)}else if(H(e))dn(a,e.bind(n));else if(re(e))if(z(e))e.forEach(i=>ls(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&dn(a,i,e)}}function La(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>sr(l,c,o,!0)),sr(l,t,o)),re(t)&&i.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&sr(e,i,n,!0),a&&a.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=zf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const zf={data:bi,props:yi,emits:yi,methods:cn,computed:cn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:cn,directives:cn,watch:Hf,provide:bi,inject:Bf};function bi(e,t){return t?e?function(){return ue(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Bf(e,t){return cn(na(e),na(t))}function na(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?ue(Object.create(null),e,t):t}function yi(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ue(Object.create(null),gi(e),gi(t??{})):t}function Hf(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function fs(){return{app:null,config:{isNativeTag:cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Wf(e,t){return function(r,a=null){H(r)||(r=ue({},r)),a!=null&&!re(a)&&(a=null);const i=fs(),o=new Set;let s=!1;const l=i.app={_uid:Uf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:vc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...f)):H(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,m){if(!s){const h=ce(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,Pr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l},runWithContext(c){lr=l;try{return c()}finally{lr=null}}};return l}}let lr=null;function Zn(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Je(e,t,n=!1){const r=me||Re;if(r||lr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:lr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r&&r.proxy):t}}function Yf(e,t,n,r=!1){const a={},i={};ar(i,Ar,1),e.propsDefaults=Object.create(null),cs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Bo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Kf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=K(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let m=0;m<f.length;m++){let h=f[m];if(xr(e.emitsOptions,h))continue;const g=t[h];if(l)if(Y(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const O=qe(h);a[O]=ra(l,s,O,g,e,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{cs(e,t,a,i)&&(c=!0);let f;for(const m in s)(!t||!Y(t,m)&&((f=Zt(m))===m||!Y(t,f)))&&(l?n&&(n[m]!==void 0||n[f]!==void 0)&&(a[m]=ra(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m))&&(delete i[m],c=!0)}c&&Ze(e,"set","$attrs")}function cs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Qn(l))continue;const c=t[l];let f;a&&Y(a,f=qe(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:xr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=K(n),c=s||ee;for(let f=0;f<i.length;f++){const m=i[f];n[m]=ra(a,l,m,c[m],e,!Y(c,m))}}return o}function ra(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&H(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Xt(a),r=c[n]=l.call(null,t),St())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function us(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const f=m=>{l=!0;const[h,g]=us(m,t,!0);ue(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return re(e)&&r.set(e,Ht),Ht;if(z(i))for(let f=0;f<i.length;f++){const m=qe(i[f]);wi(m)&&(o[m]=ee)}else if(i)for(const f in i){const m=qe(f);if(wi(m)){const h=i[f],g=o[m]=z(h)||H(h)?{type:h}:ue({},h);if(g){const O=ki(Boolean,g.type),S=ki(String,g.type);g[0]=O>-1,g[1]=S<0||O<S,(O>-1||Y(g,"default"))&&s.push(m)}}}const c=[o,s];return re(e)&&r.set(e,c),c}function wi(e){return e[0]!=="$"}function xi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function _i(e,t){return xi(e)===xi(t)}function ki(e,t){return z(t)?t.findIndex(n=>_i(n,e)):H(t)&&_i(t,e)?0:-1}const ds=e=>e[0]==="_"||e==="$stable",ja=e=>z(e)?e.map(We):[We(e)],qf=(e,t,n)=>{if(t._n)return t;const r=hf((...a)=>ja(t(...a)),n);return r._c=!1,r},ms=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ds(a))continue;const i=e[a];if(H(i))t[a]=qf(a,i,r);else if(i!=null){const o=ja(i);t[a]=()=>o}}},hs=(e,t)=>{const n=ja(t);e.slots.default=()=>n},Vf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),ar(t,"_",n)):ms(t,e.slots={})}else e.slots={},t&&hs(e,t);ar(e.slots,Ar,1)},Xf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ue(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ms(t,a)),o=t}else t&&(hs(e,t),o={default:1});if(i)for(const s in a)!ds(s)&&!(s in o)&&delete a[s]};function aa(e,t,n,r,a=!1){if(z(e)){e.forEach((h,g)=>aa(h,t&&(z(t)?t[g]:t),n,r,a));return}if(Jn(r)&&!a)return;const i=r.shapeFlag&4?Pr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ee?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(se(c)?(f[c]=null,Y(m,c)&&(m[c]=null)):ge(c)&&(c.value=null)),H(l))mt(l,s,12,[o,f]);else{const h=se(l),g=ge(l);if(h||g){const O=()=>{if(e.f){const S=h?Y(m,l)?m[l]:f[l]:l.value;a?z(S)&&Ea(S,i):z(S)?S.includes(i)||S.push(i):h?(f[l]=[i],Y(m,l)&&(m[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,Y(m,l)&&(m[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(O.id=-1,xe(O,n)):O()}}}const xe=wf;function Gf(e){return Qf(e)}function Qf(e,t){const n=qr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:m,nextSibling:h,setScopeId:g=je,insertStaticContent:O}=e,S=(u,d,p,v=null,y=null,_=null,T=!1,E=null,A=!!d.dynamicChildren)=>{if(u===d)return;u&&!on(u,d)&&(v=b(u),ye(u,y,_,!0),u=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:k,ref:$,shapeFlag:M}=d;switch(k){case Er:L(u,d,p,v);break;case Tt:w(u,d,p,v);break;case Lr:u==null&&x(d,p,v,T);break;case Ae:bt(u,d,p,v,y,_,T,E,A);break;default:M&1?U(u,d,p,v,y,_,T,E,A):M&6?ze(u,d,p,v,y,_,T,E,A):(M&64||M&128)&&k.process(u,d,p,v,y,_,T,E,A,P)}$!=null&&y&&aa($,u&&u.ref,_,d||u,!d)},L=(u,d,p,v)=>{if(u==null)r(d.el=s(d.children),p,v);else{const y=d.el=u.el;d.children!==u.children&&c(y,d.children)}},w=(u,d,p,v)=>{u==null?r(d.el=l(d.children||""),p,v):d.el=u.el},x=(u,d,p,v)=>{[u.el,u.anchor]=O(u.children,d,p,v,u.el,u.anchor)},F=({el:u,anchor:d},p,v)=>{let y;for(;u&&u!==d;)y=h(u),r(u,p,v),u=y;r(d,p,v)},C=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=h(u),a(u),u=p;a(d)},U=(u,d,p,v,y,_,T,E,A)=>{T=T||d.type==="svg",u==null?J(d,p,v,y,_,T,E,A):ve(u,d,y,_,T,E,A)},J=(u,d,p,v,y,_,T,E)=>{let A,k;const{type:$,props:M,shapeFlag:D,transition:B,dirs:W}=u;if(A=u.el=o(u.type,_,M&&M.is,M),D&8?f(A,u.children):D&16&&ke(u.children,A,null,v,y,_&&$!=="foreignObject",T,E),W&&yt(u,null,v,"created"),ae(A,u,u.scopeId,T,v),M){for(const G in M)G!=="value"&&!Qn(G)&&i(A,G,null,M[G],_,u.children,v,y,he);"value"in M&&i(A,"value",null,M.value),(k=M.onVnodeBeforeMount)&&Ue(k,v,u)}W&&yt(u,null,v,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;Z&&B.beforeEnter(A),r(A,d,p),((k=M&&M.onVnodeMounted)||Z||W)&&xe(()=>{k&&Ue(k,v,u),Z&&B.enter(A),W&&yt(u,null,v,"mounted")},y)},ae=(u,d,p,v,y)=>{if(p&&g(u,p),v)for(let _=0;_<v.length;_++)g(u,v[_]);if(y){let _=y.subTree;if(d===_){const T=y.vnode;ae(u,T,T.scopeId,T.slotScopeIds,y.parent)}}},ke=(u,d,p,v,y,_,T,E,A=0)=>{for(let k=A;k<u.length;k++){const $=u[k]=E?ct(u[k]):We(u[k]);S(null,$,d,p,v,y,_,T,E)}},ve=(u,d,p,v,y,_,T)=>{const E=d.el=u.el;let{patchFlag:A,dynamicChildren:k,dirs:$}=d;A|=u.patchFlag&16;const M=u.props||ee,D=d.props||ee;let B;p&&wt(p,!1),(B=D.onVnodeBeforeUpdate)&&Ue(B,p,d,u),$&&yt(d,u,p,"beforeUpdate"),p&&wt(p,!0);const W=y&&d.type!=="foreignObject";if(k?Se(u.dynamicChildren,k,E,p,v,W,_):T||q(u,d,E,null,p,v,W,_,!1),A>0){if(A&16)it(E,d,M,D,p,v,y);else if(A&2&&M.class!==D.class&&i(E,"class",null,D.class,y),A&4&&i(E,"style",M.style,D.style,y),A&8){const Z=d.dynamicProps;for(let G=0;G<Z.length;G++){const oe=Z[G],Ie=M[oe],jt=D[oe];(jt!==Ie||oe==="value")&&i(E,oe,Ie,jt,y,u.children,p,v,he)}}A&1&&u.children!==d.children&&f(E,d.children)}else!T&&k==null&&it(E,d,M,D,p,v,y);((B=D.onVnodeUpdated)||$)&&xe(()=>{B&&Ue(B,p,d,u),$&&yt(d,u,p,"updated")},v)},Se=(u,d,p,v,y,_,T)=>{for(let E=0;E<d.length;E++){const A=u[E],k=d[E],$=A.el&&(A.type===Ae||!on(A,k)||A.shapeFlag&70)?m(A.el):p;S(A,k,$,null,v,y,_,T,!0)}},it=(u,d,p,v,y,_,T)=>{if(p!==v){if(p!==ee)for(const E in p)!Qn(E)&&!(E in v)&&i(u,E,p[E],null,T,d.children,y,_,he);for(const E in v){if(Qn(E))continue;const A=v[E],k=p[E];A!==k&&E!=="value"&&i(u,E,k,A,T,d.children,y,_,he)}"value"in v&&i(u,"value",p.value,v.value)}},bt=(u,d,p,v,y,_,T,E,A)=>{const k=d.el=u?u.el:s(""),$=d.anchor=u?u.anchor:s("");let{patchFlag:M,dynamicChildren:D,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),u==null?(r(k,p,v),r($,p,v),ke(d.children,p,$,y,_,T,E,A)):M>0&&M&64&&D&&u.dynamicChildren?(Se(u.dynamicChildren,D,p,y,_,T,E),(d.key!=null||y&&d===y.subTree)&&ps(u,d,!0)):q(u,d,p,$,y,_,T,E,A)},ze=(u,d,p,v,y,_,T,E,A)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?y.ctx.activate(d,p,v,T,A):rn(d,p,v,y,_,T,A):Nt(u,d,A)},rn=(u,d,p,v,y,_,T)=>{const E=u.component=lc(u,v,y);if(rs(u)&&(E.ctx.renderer=P),fc(E),E.asyncDep){if(y&&y.registerDep(E,fe),!u.el){const A=E.subTree=ce(Tt);w(null,A,d,p)}return}fe(E,u,d,p,y,_,T)},Nt=(u,d,p)=>{const v=d.component=u.component;if(vf(u,d,p))if(v.asyncDep&&!v.asyncResolved){Q(v,d,p);return}else v.next=d,lf(v.update),v.update();else d.el=u.el,v.vnode=d},fe=(u,d,p,v,y,_,T)=>{const E=()=>{if(u.isMounted){let{next:$,bu:M,u:D,parent:B,vnode:W}=u,Z=$,G;wt(u,!1),$?($.el=W.el,Q(u,$,T)):$=W,M&&Mr(M),(G=$.props&&$.props.onVnodeBeforeUpdate)&&Ue(G,B,$,W),wt(u,!0);const oe=Nr(u),Ie=u.subTree;u.subTree=oe,S(Ie,oe,m(Ie.el),b(Ie),u,y,_),$.el=oe.el,Z===null&&bf(u,oe.el),D&&xe(D,y),(G=$.props&&$.props.onVnodeUpdated)&&xe(()=>Ue(G,B,$,W),y)}else{let $;const{el:M,props:D}=d,{bm:B,m:W,parent:Z}=u,G=Jn(d);if(wt(u,!1),B&&Mr(B),!G&&($=D&&D.onVnodeBeforeMount)&&Ue($,Z,d),wt(u,!0),M&&V){const oe=()=>{u.subTree=Nr(u),V(M,u.subTree,u,y,null)};G?d.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=Nr(u);S(null,oe,p,v,u,y,_),d.el=oe.el}if(W&&xe(W,y),!G&&($=D&&D.onVnodeMounted)){const oe=d;xe(()=>Ue($,Z,oe),y)}(d.shapeFlag&256||Z&&Jn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&xe(u.a,y),u.isMounted=!0,d=p=v=null}},A=u.effect=new Sa(E,()=>Fa(k),u.scope),k=u.update=()=>A.run();k.id=u.uid,wt(u,!0),k()},Q=(u,d,p)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,Kf(u,d.props,v,p),Xf(u,d.children,p),en(),mi(),tn()},q=(u,d,p,v,y,_,T,E,A=!1)=>{const k=u&&u.children,$=u?u.shapeFlag:0,M=d.children,{patchFlag:D,shapeFlag:B}=d;if(D>0){if(D&128){ot(k,M,p,v,y,_,T,E,A);return}else if(D&256){Ve(k,M,p,v,y,_,T,E,A);return}}B&8?($&16&&he(k,y,_),M!==k&&f(p,M)):$&16?B&16?ot(k,M,p,v,y,_,T,E,A):he(k,y,_,!0):($&8&&f(p,""),B&16&&ke(M,p,v,y,_,T,E,A))},Ve=(u,d,p,v,y,_,T,E,A)=>{u=u||Ht,d=d||Ht;const k=u.length,$=d.length,M=Math.min(k,$);let D;for(D=0;D<M;D++){const B=d[D]=A?ct(d[D]):We(d[D]);S(u[D],B,p,null,y,_,T,E,A)}k>$?he(u,y,_,!0,!1,M):ke(d,p,v,y,_,T,E,A,M)},ot=(u,d,p,v,y,_,T,E,A)=>{let k=0;const $=d.length;let M=u.length-1,D=$-1;for(;k<=M&&k<=D;){const B=u[k],W=d[k]=A?ct(d[k]):We(d[k]);if(on(B,W))S(B,W,p,null,y,_,T,E,A);else break;k++}for(;k<=M&&k<=D;){const B=u[M],W=d[D]=A?ct(d[D]):We(d[D]);if(on(B,W))S(B,W,p,null,y,_,T,E,A);else break;M--,D--}if(k>M){if(k<=D){const B=D+1,W=B<$?d[B].el:v;for(;k<=D;)S(null,d[k]=A?ct(d[k]):We(d[k]),p,W,y,_,T,E,A),k++}}else if(k>D)for(;k<=M;)ye(u[k],y,_,!0),k++;else{const B=k,W=k,Z=new Map;for(k=W;k<=D;k++){const Ee=d[k]=A?ct(d[k]):We(d[k]);Ee.key!=null&&Z.set(Ee.key,k)}let G,oe=0;const Ie=D-W+1;let jt=!1,ni=0;const an=new Array(Ie);for(k=0;k<Ie;k++)an[k]=0;for(k=B;k<=M;k++){const Ee=u[k];if(oe>=Ie){ye(Ee,y,_,!0);continue}let He;if(Ee.key!=null)He=Z.get(Ee.key);else for(G=W;G<=D;G++)if(an[G-W]===0&&on(Ee,d[G])){He=G;break}He===void 0?ye(Ee,y,_,!0):(an[He-W]=k+1,He>=ni?ni=He:jt=!0,S(Ee,d[He],p,null,y,_,T,E,A),oe++)}const ri=jt?Jf(an):Ht;for(G=ri.length-1,k=Ie-1;k>=0;k--){const Ee=W+k,He=d[Ee],ai=Ee+1<$?d[Ee+1].el:v;an[k]===0?S(null,He,p,ai,y,_,T,E,A):jt&&(G<0||k!==ri[G]?Be(He,p,ai,2):G--)}}},Be=(u,d,p,v,y=null)=>{const{el:_,type:T,transition:E,children:A,shapeFlag:k}=u;if(k&6){Be(u.component.subTree,d,p,v);return}if(k&128){u.suspense.move(d,p,v);return}if(k&64){T.move(u,d,p,P);return}if(T===Ae){r(_,d,p);for(let M=0;M<A.length;M++)Be(A[M],d,p,v);r(u.anchor,d,p);return}if(T===Lr){F(u,d,p);return}if(v!==2&&k&1&&E)if(v===0)E.beforeEnter(_),r(_,d,p),xe(()=>E.enter(_),y);else{const{leave:M,delayLeave:D,afterLeave:B}=E,W=()=>r(_,d,p),Z=()=>{M(_,()=>{W(),B&&B()})};D?D(_,W,Z):Z()}else r(_,d,p)},ye=(u,d,p,v=!1,y=!1)=>{const{type:_,props:T,ref:E,children:A,dynamicChildren:k,shapeFlag:$,patchFlag:M,dirs:D}=u;if(E!=null&&aa(E,null,p,u,!0),$&256){d.ctx.deactivate(u);return}const B=$&1&&D,W=!Jn(u);let Z;if(W&&(Z=T&&T.onVnodeBeforeUnmount)&&Ue(Z,d,u),$&6)Fn(u.component,p,v);else{if($&128){u.suspense.unmount(p,v);return}B&&yt(u,null,d,"beforeUnmount"),$&64?u.type.remove(u,d,p,y,P,v):k&&(_!==Ae||M>0&&M&64)?he(k,d,p,!1,!0):(_===Ae&&M&384||!y&&$&16)&&he(A,d,p),v&&Ft(u)}(W&&(Z=T&&T.onVnodeUnmounted)||B)&&xe(()=>{Z&&Ue(Z,d,u),B&&yt(u,null,d,"unmounted")},p)},Ft=u=>{const{type:d,el:p,anchor:v,transition:y}=u;if(d===Ae){Lt(p,v);return}if(d===Lr){C(u);return}const _=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:E}=y,A=()=>T(p,_);E?E(u.el,_,A):A()}else _()},Lt=(u,d)=>{let p;for(;u!==d;)p=h(u),a(u),u=p;a(d)},Fn=(u,d,p)=>{const{bum:v,scope:y,update:_,subTree:T,um:E}=u;v&&Mr(v),y.stop(),_&&(_.active=!1,ye(T,u,d,p)),E&&xe(E,d),xe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},he=(u,d,p,v=!1,y=!1,_=0)=>{for(let T=_;T<u.length;T++)ye(u[T],d,p,v,y)},b=u=>u.shapeFlag&6?b(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),I=(u,d,p)=>{u==null?d._vnode&&ye(d._vnode,null,null,!0):S(d._vnode||null,u,d,null,null,null,p),mi(),Jo(),d._vnode=u},P={p:S,um:ye,m:Be,r:Ft,mt:rn,mc:ke,pc:q,pbc:Se,n:b,o:e};let j,V;return t&&([j,V]=t(P)),{render:I,hydrate:j,createApp:Wf(I,j)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ps(e,t,n=!1){const r=e.children,a=t.children;if(z(r)&&z(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||ps(o,s)),s.type===Er&&(s.el=o.el)}}function Jf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Zf=e=>e.__isTeleport,Ae=Symbol.for("v-fgt"),Er=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),Lr=Symbol.for("v-stc"),hn=[];let Fe=null;function Pe(e=!1){hn.push(Fe=e?null:[])}function ec(){hn.pop(),Fe=hn[hn.length-1]||null}let En=1;function Ei(e){En+=e}function gs(e){return e.dynamicChildren=En>0?Fe||Ht:null,ec(),En>0&&Fe&&Fe.push(e),e}function Ce(e,t,n,r,a,i){return gs(Te(e,t,n,r,a,i,!0))}function tc(e,t,n,r,a){return gs(ce(e,t,n,r,a,!0))}function ia(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const Ar="__vInternal",vs=({key:e})=>e??null,er=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||ge(e)||H(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function Te(e,t=null,n=null,r=0,a=null,i=e===Ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vs(t),ref:t&&er(t),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Re};return s?($a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),En>0&&!o&&Fe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Fe.push(l),l}const ce=nc;function nc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ff)&&(e=Tt),ia(e)){const s=Vt(e,t,!0);return n&&$a(s,n),En>0&&!i&&Fe&&(s.shapeFlag&6?Fe[Fe.indexOf(e)]=s:Fe.push(s)),s.patchFlag|=-2,s}if(hc(e)&&(e=e.__vccOpts),t){t=rc(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Ct(s)),re(l)&&(Uo(l)&&!z(l)&&(l=ue({},l)),t.style=wn(l))}const o=se(e)?1:yf(e)?128:Zf(e)?64:re(e)?4:H(e)?2:0;return Te(e,t,n,r,a,o,i,!0)}function rc(e){return e?Uo(e)||Ar in e?ue({},e):e:null}function Vt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ic(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&vs(s),ref:t&&t.ref?n&&a?z(a)?a.concat(er(t)):[a,er(t)]:er(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ac(e=" ",t=0){return ce(Er,null,e,t)}function tr(e="",t=!1){return t?(Pe(),tc(Tt,null,e)):ce(Tt,null,e)}function We(e){return e==null||typeof e=="boolean"?ce(Tt):z(e)?ce(Ae,null,e.slice()):typeof e=="object"?ct(e):ce(Er,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),$a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ar in t)?t._ctx=Re:a===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),r&64?(n=16,t=[ac(t)]):n=8);e.children=t,e.shapeFlag|=n}function ic(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ct([t.class,r.class]));else if(a==="style")t.style=wn([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ue(e,t,n,r=null){$e(e,t,7,[n,r])}const oc=fs();let sc=0;function lc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||oc,i={uid:sc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new El(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:us(r,a),emitsOptions:es(r,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=uf.bind(null,i),e.ce&&e.ce(i),i}let me=null,Da,$t,Ai="__VUE_INSTANCE_SETTERS__";($t=qr()[Ai])||($t=qr()[Ai]=[]),$t.push(e=>me=e),Da=e=>{$t.length>1?$t.forEach(t=>t(e)):$t[0](e)};const Xt=e=>{Da(e),e.scope.on()},St=()=>{me&&me.scope.off(),Da(null)};function bs(e){return e.vnode.shapeFlag&4}let An=!1;function fc(e,t=!1){An=t;const{props:n,children:r}=e.vnode,a=bs(e);Yf(e,n,a,t),Vf(e,r);const i=a?cc(e,t):void 0;return An=!1,i}function cc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wo(new Proxy(e.ctx,jf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?dc(e):null;Xt(e),en();const i=mt(r,e,0,[e.props,a]);if(tn(),St(),Po(i)){if(i.then(St,St),t)return i.then(o=>{Pi(e,o,t)}).catch(o=>{wr(o,e,0)});e.asyncDep=i}else Pi(e,i,t)}else ys(e,t)}function Pi(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:re(t)&&(e.setupState=Vo(t)),ys(e,n)}let Oi;function ys(e,t,n){const r=e.type;if(!e.render){if(!t&&Oi&&!r.render){const a=r.template||La(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ue(ue({isCustomElement:i,delimiters:s},o),l);r.render=Oi(a,c)}}e.render=r.render||je}Xt(e),en(),$f(e),tn(),St()}function uc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function dc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return uc(e)},slots:e.slots,emit:e.emit,expose:t}}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vo(Wo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}}))}function mc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function hc(e){return H(e)&&"__vccOpts"in e}const de=(e,t)=>af(e,t,An);function za(e,t,n){const r=arguments.length;return r===2?re(t)&&!z(t)?ia(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),ce(e,t,n))}const pc=Symbol.for("v-scx"),gc=()=>Je(pc),vc="3.3.4",bc="http://www.w3.org/2000/svg",_t=typeof document<"u"?document:null,Si=_t&&_t.createElement("template"),yc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?_t.createElementNS(bc,e):_t.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Si.innerHTML=r?`<svg>${e}</svg>`:e;const s=Si.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function xc(e,t,n){const r=e.style,a=se(n);if(n&&!a){if(t&&!se(t))for(const i in t)n[i]==null&&oa(r,i,"");for(const i in n)oa(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ci=/\s*!important$/;function oa(e,t,n){if(z(n))n.forEach(r=>oa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=_c(e,t);Ci.test(n)?e.setProperty(Zt(r),n.replace(Ci,""),"important"):e[r]=n}}const Ti=["Webkit","Moz","ms"],jr={};function _c(e,t){const n=jr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return jr[t]=r;r=vr(r);for(let a=0;a<Ti.length;a++){const i=Ti[a]+r;if(i in e)return jr[t]=i}return t}const Ri="http://www.w3.org/1999/xlink";function kc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ri,t.slice(6,t.length)):e.setAttributeNS(Ri,t,n);else{const i=_l(t);n==null||i&&!Co(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ec(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,f=n??"";c!==f&&(e.value=f),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Co(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ac(e,t,n,r){e.addEventListener(t,n,r)}function Pc(e,t,n,r){e.removeEventListener(t,n,r)}function Oc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Sc(t);if(r){const c=i[t]=Rc(r,a);Ac(e,s,c,l)}else o&&(Pc(e,s,o,l),i[t]=void 0)}}const Ii=/(?:Once|Passive|Capture)$/;function Sc(e){let t;if(Ii.test(e)){t={};let r;for(;r=e.match(Ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let $r=0;const Cc=Promise.resolve(),Tc=()=>$r||(Cc.then(()=>$r=0),$r=Date.now());function Rc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(Ic(r,n.value),t,5,[r])};return n.value=e,n.attached=Tc(),n}function Ic(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Mi=/^on[a-z]/,Mc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?wc(e,r,a):t==="style"?xc(e,n,r):hr(t)?ka(t)||Oc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nc(e,t,r,a))?Ec(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),kc(e,t,r,a))};function Nc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Mi.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mi.test(t)&&se(n)?!1:t in e}const Fc={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):sn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),sn(e,!0),r.enter(e)):r.leave(e,()=>{sn(e,!1)}):sn(e,t))},beforeUnmount(e,{value:t}){sn(e,t)}};function sn(e,t){e.style.display=t?e._vod:"none"}const Lc=ue({patchProp:Mc},yc);let Ni;function jc(){return Ni||(Ni=Gf(Lc))}const $c=(...e)=>{const t=jc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Dc(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Dc(e){return se(e)?document.querySelector(e):e}const zc="/assets/logo-7a8bf239.svg";/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Dt=typeof window<"u";function Bc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function Dr(e,t){const n={};for(const r in t){const a=t[r];n[r]=De(a)?a.map(e):e(a)}return n}const pn=()=>{},De=Array.isArray,Hc=/\/$/,Uc=e=>e.replace(Hc,"");function zr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=qc(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Wc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Yc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Gt(t.matched[r],n.matched[a])&&ws(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Gt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ws(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kc(e[n],t[n]))return!1;return!0}function Kc(e,t){return De(e)?Li(e,t):De(t)?Li(t,e):e===t}function Li(e,t){return De(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function qc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Pn;(function(e){e.pop="pop",e.push="push"})(Pn||(Pn={}));var gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gn||(gn={}));function Vc(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Uc(e)}const Xc=/^[^#]+#/;function Gc(e,t){return e.replace(Xc,"#")+t}function Qc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Or=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Qc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function Zc(e,t){sa.set(e,t)}function eu(e){const t=sa.get(e);return sa.delete(e),t}let tu=()=>location.protocol+"//"+location.host;function xs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Fi(l,"")}return Fi(n,e)+r+a}function nu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=xs(e,location),O=n.value,S=t.value;let L=0;if(h){if(n.value=g,t.value=h,o&&o===O){o=null;return}L=S?h.position-S.position:0}else r(g);a.forEach(w=>{w(n.value,O,{delta:L,type:Pn.pop,direction:L?L>0?gn.forward:gn.back:gn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const g=()=>{const O=a.indexOf(h);O>-1&&a.splice(O,1)};return i.push(g),g}function f(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:Or()}),"")}function m(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:c,destroy:m}}function $i(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Or():null}}function ru(e){const{history:t,location:n}=window,r={value:xs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const m=e.indexOf("#"),h=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:tu()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(l,c){const f=X({},t.state,$i(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=X({},a.value,t.state,{forward:l,scroll:Or()});i(f.current,f,!0);const m=X({},$i(r.value,l,null),{position:f.position+1},c);i(l,m,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function au(e){e=Vc(e);const t=ru(e),n=nu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Gc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function iu(e){return typeof e=="string"||e&&typeof e=="object"}function _s(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ks=Symbol("");var Di;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Di||(Di={}));function Qt(e,t){return X(new Error,{type:e,[ks]:!0},t)}function Xe(e,t){return e instanceof Error&&ks in e&&(t==null||!!(e.type&t))}const zi="[^/]+?",ou={sensitive:!1,strict:!1,start:!0,end:!0},su=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=X({},ou,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let m=0;m<c.length;m++){const h=c[m];let g=40+(n.sensitive?.25:0);if(h.type===0)m||(a+="/"),a+=h.value.replace(su,"\\$&"),g+=40;else if(h.type===1){const{value:O,repeatable:S,optional:L,regexp:w}=h;i.push({name:O,repeatable:S,optional:L});const x=w||zi;if(x!==zi){g+=10;try{new RegExp(`(${x})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${O}" (${x}): `+C.message)}}let F=S?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;m||(F=L&&c.length<2?`(?:/${F})`:"/"+F),L&&(F+="?"),a+=F,g+=20,L&&(g+=-8),S&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),m={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",O=i[h-1];m[O.name]=g&&O.repeatable?g.split("/"):g}return m}function l(c){let f="",m=!1;for(const h of e){(!m||!f.endsWith("/"))&&(f+="/"),m=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:O,repeatable:S,optional:L}=g,w=O in c?c[O]:"";if(De(w)&&!S)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const x=De(w)?w.join("/"):w;if(!x)if(L)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):m=!0);else throw new Error(`Missing required param "${O}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function fu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function cu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=fu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Bi(r))return 1;if(Bi(a))return-1}return a.length-r.length}function Bi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uu={type:0,value:""},du=/[a-zA-Z0-9_]/;function mu(e){if(!e)return[[]];if(e==="/")return[[uu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function m(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&m(),o()):l===":"?(m(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:du.test(l)?h():(m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:m(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),m(),o(),a}function hu(e,t,n){const r=lu(mu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function pu(e,t){const n=[],r=new Map;t=Wi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,m,h){const g=!h,O=gu(f);O.aliasOf=h&&h.record;const S=Wi(t,f),L=[O];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of F)L.push(X({},O,{components:h?h.record.components:O.components,path:C,aliasOf:h?h.record:O}))}let w,x;for(const F of L){const{path:C}=F;if(m&&C[0]!=="/"){const U=m.record.path,J=U[U.length-1]==="/"?"":"/";F.path=m.record.path+(C&&J+C)}if(w=hu(F,m,S),h?h.alias.push(w):(x=x||w,x!==w&&x.alias.push(w),g&&f.name&&!Ui(w)&&o(f.name)),O.children){const U=O.children;for(let J=0;J<U.length;J++)i(U[J],w,h&&h.children[J])}h=h||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return x?()=>{o(x)}:pn}function o(f){if(_s(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let m=0;for(;m<n.length&&cu(f,n[m])>=0&&(f.record.path!==n[m].record.path||!Es(f,n[m]));)m++;n.splice(m,0,f),f.record.name&&!Ui(f)&&r.set(f.record.name,f)}function c(f,m){let h,g={},O,S;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw Qt(1,{location:f});S=h.record.name,g=X(Hi(m.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Hi(f.params,h.keys.map(x=>x.name))),O=h.stringify(g)}else if("path"in f)O=f.path,h=n.find(x=>x.re.test(O)),h&&(g=h.parse(O),S=h.record.name);else{if(h=m.name?r.get(m.name):n.find(x=>x.re.test(m.path)),!h)throw Qt(1,{location:f,currentLocation:m});S=h.record.name,g=X({},m.params,f.params),O=h.stringify(g)}const L=[];let w=h;for(;w;)L.unshift(w.record),w=w.parent;return{name:S,path:O,params:g,matched:L,meta:bu(L)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Hi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function gu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:vu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function vu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ui(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Wi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Es(e,t){return t.children.some(n=>n===e||Es(e,n))}const As=/#/g,yu=/&/g,wu=/\//g,xu=/=/g,_u=/\?/g,Ps=/\+/g,ku=/%5B/g,Eu=/%5D/g,Os=/%5E/g,Au=/%60/g,Ss=/%7B/g,Pu=/%7C/g,Cs=/%7D/g,Ou=/%20/g;function Ba(e){return encodeURI(""+e).replace(Pu,"|").replace(ku,"[").replace(Eu,"]")}function Su(e){return Ba(e).replace(Ss,"{").replace(Cs,"}").replace(Os,"^")}function la(e){return Ba(e).replace(Ps,"%2B").replace(Ou,"+").replace(As,"%23").replace(yu,"%26").replace(Au,"`").replace(Ss,"{").replace(Cs,"}").replace(Os,"^")}function Cu(e){return la(e).replace(xu,"%3D")}function Tu(e){return Ba(e).replace(As,"%23").replace(_u,"%3F")}function Ru(e){return e==null?"":Tu(e).replace(wu,"%2F")}function fr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Iu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ps," "),o=i.indexOf("="),s=fr(o<0?i:i.slice(0,o)),l=o<0?null:fr(i.slice(o+1));if(s in t){let c=t[s];De(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function Yi(e){let t="";for(let n in e){const r=e[n];if(n=Cu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&la(i)):[r&&la(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Mu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=De(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Nu=Symbol(""),Ki=Symbol(""),Ha=Symbol(""),Ts=Symbol(""),fa=Symbol("");function ln(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=m=>{m===!1?s(Qt(4,{from:n,to:t})):m instanceof Error?s(m):iu(m)?s(Qt(2,{from:t,to:m})):(i&&r.enterCallbacks[a]===i&&typeof m=="function"&&i.push(m),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(m=>s(m))})}function Br(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Fu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ut(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Bc(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&ut(h,n,r,i,o)()}))}}return a}function Fu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qi(e){const t=Je(Ha),n=Je(Ts),r=de(()=>t.resolve(Ot(e.to))),a=de(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],m=n.matched;if(!f||!m.length)return-1;const h=m.findIndex(Gt.bind(null,f));if(h>-1)return h;const g=Vi(l[c-2]);return c>1&&Vi(f)===g&&m[m.length-1].path!==g?m.findIndex(Gt.bind(null,l[c-2])):h}),i=de(()=>a.value>-1&&Du(n.params,r.value.params)),o=de(()=>a.value>-1&&a.value===n.matched.length-1&&ws(n.params,r.value.params));function s(l={}){return $u(l)?t[Ot(e.replace)?"replace":"push"](Ot(e.to)).catch(pn):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Lu=Mt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qi,setup(e,{slots:t}){const n=yr(qi(e)),{options:r}=Je(Ha),a=de(()=>({[Xi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:za("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ju=Lu;function $u(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Du(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!De(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Vi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,n)=>e??t??n,zu=Mt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Je(fa),a=de(()=>e.route||r.value),i=Je(Ki,0),o=de(()=>{let c=Ot(i);const{matched:f}=a.value;let m;for(;(m=f[c])&&!m.components;)c++;return c}),s=de(()=>a.value.matched[o.value]);Zn(Ki,de(()=>o.value+1)),Zn(Nu,s),Zn(fa,a);const l=Zl();return dn(()=>[l.value,s.value,e.name],([c,f,m],[h,g,O])=>{f&&(f.instances[m]=c,g&&g!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Gt(f,g)||!h)&&(f.enterCallbacks[m]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=a.value,f=e.name,m=s.value,h=m&&m.components[f];if(!h)return Gi(n.default,{Component:h,route:c});const g=m.props[f],O=g?g===!0?c.params:typeof g=="function"?g(c):g:null,L=za(h,X({},O,t,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(m.instances[f]=null)},ref:l}));return Gi(n.default,{Component:L,route:c})||L}}});function Gi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Rs=zu;function Bu(e){const t=pu(e.routes,e),n=e.parseQuery||Iu,r=e.stringifyQuery||Yi,a=e.history,i=ln(),o=ln(),s=ln(),l=ef(lt);let c=lt;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Dr.bind(null,b=>""+b),m=Dr.bind(null,Ru),h=Dr.bind(null,fr);function g(b,I){let P,j;return _s(b)?(P=t.getRecordMatcher(b),j=I):j=b,t.addRoute(j,P)}function O(b){const I=t.getRecordMatcher(b);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(b=>b.record)}function L(b){return!!t.getRecordMatcher(b)}function w(b,I){if(I=X({},I||l.value),typeof b=="string"){const p=zr(n,b,I.path),v=t.resolve({path:p.path},I),y=a.createHref(p.fullPath);return X(p,v,{params:h(v.params),hash:fr(p.hash),redirectedFrom:void 0,href:y})}let P;if("path"in b)P=X({},b,{path:zr(n,b.path,I.path).path});else{const p=X({},b.params);for(const v in p)p[v]==null&&delete p[v];P=X({},b,{params:m(p)}),I.params=m(I.params)}const j=t.resolve(P,I),V=b.hash||"";j.params=f(h(j.params));const u=Wc(r,X({},b,{hash:Su(V),path:j.path})),d=a.createHref(u);return X({fullPath:u,hash:V,query:r===Yi?Mu(b.query):b.query||{}},j,{redirectedFrom:void 0,href:d})}function x(b){return typeof b=="string"?zr(n,b,l.value.path):X({},b)}function F(b,I){if(c!==b)return Qt(8,{from:I,to:b})}function C(b){return ae(b)}function U(b){return C(X(x(b),{replace:!0}))}function J(b){const I=b.matched[b.matched.length-1];if(I&&I.redirect){const{redirect:P}=I;let j=typeof P=="function"?P(b):P;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=x(j):{path:j},j.params={}),X({query:b.query,hash:b.hash,params:"path"in j?{}:b.params},j)}}function ae(b,I){const P=c=w(b),j=l.value,V=b.state,u=b.force,d=b.replace===!0,p=J(P);if(p)return ae(X(x(p),{state:typeof p=="object"?X({},V,p.state):V,force:u,replace:d}),I||P);const v=P;v.redirectedFrom=I;let y;return!u&&Yc(r,j,P)&&(y=Qt(16,{to:v,from:j}),Be(j,j,!0,!1)),(y?Promise.resolve(y):Se(v,j)).catch(_=>Xe(_)?Xe(_,2)?_:ot(_):q(_,v,j)).then(_=>{if(_){if(Xe(_,2))return ae(X({replace:d},x(_.to),{state:typeof _.to=="object"?X({},V,_.to.state):V,force:u}),I||v)}else _=bt(v,j,!0,d,V);return it(v,j,_),_})}function ke(b,I){const P=F(b,I);return P?Promise.reject(P):Promise.resolve()}function ve(b){const I=Lt.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(b):b()}function Se(b,I){let P;const[j,V,u]=Hu(b,I);P=Br(j.reverse(),"beforeRouteLeave",b,I);for(const p of j)p.leaveGuards.forEach(v=>{P.push(ut(v,b,I))});const d=ke.bind(null,b,I);return P.push(d),he(P).then(()=>{P=[];for(const p of i.list())P.push(ut(p,b,I));return P.push(d),he(P)}).then(()=>{P=Br(V,"beforeRouteUpdate",b,I);for(const p of V)p.updateGuards.forEach(v=>{P.push(ut(v,b,I))});return P.push(d),he(P)}).then(()=>{P=[];for(const p of u)if(p.beforeEnter)if(De(p.beforeEnter))for(const v of p.beforeEnter)P.push(ut(v,b,I));else P.push(ut(p.beforeEnter,b,I));return P.push(d),he(P)}).then(()=>(b.matched.forEach(p=>p.enterCallbacks={}),P=Br(u,"beforeRouteEnter",b,I),P.push(d),he(P))).then(()=>{P=[];for(const p of o.list())P.push(ut(p,b,I));return P.push(d),he(P)}).catch(p=>Xe(p,8)?p:Promise.reject(p))}function it(b,I,P){s.list().forEach(j=>ve(()=>j(b,I,P)))}function bt(b,I,P,j,V){const u=F(b,I);if(u)return u;const d=I===lt,p=Dt?history.state:{};P&&(j||d?a.replace(b.fullPath,X({scroll:d&&p&&p.scroll},V)):a.push(b.fullPath,V)),l.value=b,Be(b,I,P,d),ot()}let ze;function rn(){ze||(ze=a.listen((b,I,P)=>{if(!Fn.listening)return;const j=w(b),V=J(j);if(V){ae(X(V,{replace:!0}),j).catch(pn);return}c=j;const u=l.value;Dt&&Zc(ji(u.fullPath,P.delta),Or()),Se(j,u).catch(d=>Xe(d,12)?d:Xe(d,2)?(ae(d.to,j).then(p=>{Xe(p,20)&&!P.delta&&P.type===Pn.pop&&a.go(-1,!1)}).catch(pn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),q(d,j,u))).then(d=>{d=d||bt(j,u,!1),d&&(P.delta&&!Xe(d,8)?a.go(-P.delta,!1):P.type===Pn.pop&&Xe(d,20)&&a.go(-1,!1)),it(j,u,d)}).catch(pn)}))}let Nt=ln(),fe=ln(),Q;function q(b,I,P){ot(b);const j=fe.list();return j.length?j.forEach(V=>V(b,I,P)):console.error(b),Promise.reject(b)}function Ve(){return Q&&l.value!==lt?Promise.resolve():new Promise((b,I)=>{Nt.add([b,I])})}function ot(b){return Q||(Q=!b,rn(),Nt.list().forEach(([I,P])=>b?P(b):I()),Nt.reset()),b}function Be(b,I,P,j){const{scrollBehavior:V}=e;if(!Dt||!V)return Promise.resolve();const u=!P&&eu(ji(b.fullPath,0))||(j||!P)&&history.state&&history.state.scroll||null;return Go().then(()=>V(b,I,u)).then(d=>d&&Jc(d)).catch(d=>q(d,b,I))}const ye=b=>a.go(b);let Ft;const Lt=new Set,Fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:O,hasRoute:L,getRoutes:S,resolve:w,options:e,push:C,replace:U,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:fe.add,isReady:Ve,install(b){const I=this;b.component("RouterLink",ju),b.component("RouterView",Rs),b.config.globalProperties.$router=I,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(l)}),Dt&&!Ft&&l.value===lt&&(Ft=!0,C(a.location).catch(V=>{}));const P={};for(const V in lt)Object.defineProperty(P,V,{get:()=>l.value[V],enumerable:!0});b.provide(Ha,I),b.provide(Ts,Bo(P)),b.provide(fa,l);const j=b.unmount;Lt.add(b),b.unmount=function(){Lt.delete(b),Lt.size<1&&(c=lt,ze&&ze(),ze=null,l.value=lt,Ft=!1,Q=!1),j()}}};function he(b){return b.reduce((I,P)=>I.then(()=>ve(P)),Promise.resolve())}return Fn}function Hu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Gt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Gt(c,l))||a.push(l))}return[n,r,a]}const Uu=Mt({components:{},props:{height:null,bgMode:"cover",frames:[]},data(){return{wh:0,theaterDivIndex:0,loaded:!1,theaterDivHeight:100,framesWithBackground:[],scroll:{direction:1,lastPos:0,newPos:0,timer:50,delta:0,delay:50}}},methods:{clearScrollSpeed(){this.scroll.lastPos=null,this.scroll.delta=0},getScrollSpeed(){var e;if(!this.scroll.lastPos){this.clearScrollSpeed();let t=(e=this.$refs.theaterDiv)==null?void 0:e.getBoundingClientRect().top;if(t<0)return this.scroll.newPos=Math.abs(t),this.scroll.delta=this.scroll.newPos-this.scroll.lastPos,this.scroll.lastPos=this.scroll.newPos,this.scroll.timer=setTimeout(this.clearScrollSpeed,this.scroll.delay),this.scroll.delta}return this.scroll.lastPos},handleScroll(e){var o;let t=this.$props.frames.length,r=((o=this.$refs.framesBar)==null?void 0:o.clientHeight)/t,a=Math.floor(this.scroll.newPos/r),i=this.getScrollSpeed();i>0&&(this.scroll.direction=1),i<0&&(this.scroll.direction=-1),this.$props.frames[a]&&this.framesWithBackground.includes(a)&&(this.theaterDivIndex=a);for(let s=a-2;s<a+2;s++)s>=0&&s<this.$props.frames.length&&!this.framesWithBackground.includes(s)&&this.framesWithBackground.push(s)},loadedEvent(){this.loaded=!0},autoUploadFrames(){if(this.framesWithBackground.length!==this.$props.frames.length){let e=5;this.$props.frames.forEach((t,n)=>{!this.framesWithBackground.includes(n)&&e-- >0&&this.framesWithBackground.push(n)}),setTimeout(this.autoUploadFrames,150)}}},unmounted(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("load",this.loadedEvent)},mounted(){this.theaterDivHeight=this.$props.frames.length,window.addEventListener("scroll",this.handleScroll),window.addEventListener("load",this.loadedEvent),this.handleScroll(null),setTimeout(this.autoUploadFrames,150)}});const Is=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Wu={key:0,class:"theaterDiv",ref:"theaterDiv"},Yu={class:"projector",ref:"projector"},Ku={class:"framesBar",ref:"framesBar"};function qu(e,t,n,r,a,i){return e.loaded?(Pe(),Ce("div",Wu,[Te("div",Yu,[(Pe(!0),Ce(Ae,null,Zr(e.$props.frames,(o,s)=>_f((Pe(),Ce("div",{key:s,class:Ct({bgModeCover:e.$props.bgMode==="cover",bgModeContain:e.$props.bgMode==="contain"}),style:wn({"background-image":"url("+o+")"})},null,6)),[[Fc,s===e.theaterDivIndex]])),128))],512),Te("div",Ku,[(Pe(!0),Ce(Ae,null,Zr(e.$props.frames,(o,s)=>(Pe(),Ce("div",{key:s,class:Ct({bgDisabled:!e.framesWithBackground.includes(s)}),style:wn({height:e.$props.height/e.$props.frames.length+"px","background-image":"url("+o+")"})},null,6))),128))],512)],512)):tr("",!0)}const Ms=Is(Uu,[["render",qu],["__scopeId","data-v-f6fc325e"]]),Vu=Te("div",{class:"logo"},[Te("img",{src:zc})],-1),Xu=["href"],Gu=Mt({components:{Theater:Ms},data(){return{showMobileMenu:!1,menu:[{title:"Shop",active:!1,link:"/",mobileButton:!1},{title:"Offers",active:!0,link:"/",mobileButton:!1},{title:"Manual",active:!1,link:"/",mobileButton:!1},{title:"Support",active:!1,link:"/",mobileButton:!1},{title:"Free trial",active:!1,link:"/",mobileButton:!0},{title:"Build package",active:!1,link:"/",mobileButton:!0}],loaded:!1}},methods:{loadedEvent(){this.loaded=!0,console.log("loaded")}},unmounted(){window.removeEventListener("load",this.loadedEvent)},mounted(){window.addEventListener("load",this.loadedEvent)}}),Qu=Mt({...Gu,__name:"App",setup(e){return(t,n)=>{const r=ss("font-awesome-icon");return Pe(),Ce(Ae,null,[Te("header",null,[Te("div",{class:"menu-toggle",onClick:n[0]||(n[0]=a=>t.showMobileMenu=!t.showMobileMenu)},[ce(r,{icon:"fa-solid fa-bars"})]),Vu,Te("nav",{class:Ct({active:t.showMobileMenu})},[Te("ul",null,[(Pe(!0),Ce(Ae,null,Zr(t.menu,a=>(Pe(),Ce("li",{class:Ct({active:a.active,mobileButtons:a.mobileButton})},[Te("a",{href:a.link},kl(a.title),9,Xu)],2))),256))])],2)]),ce(Ot(Rs))],64)}}});const Ju=Mt({components:{Theater:Ms},data(){return{productTheater:{frames:[]},video1Theater:{frames:[]},video2Theater:{frames:[]}}},methods:{fillProductTheaterFrames(){this.productTheater.frames=[];let e=279;for(;e-- >0;){let t="/images/min/device_image/bilumix-sequence"+e+"-min.png";e>=10&&e<100?t="/images/min/device_image/bilumix-sequence0"+e+"-min.png":e<10&&(t="/images/min/device_image/bilumix-sequence00"+e+"-min.png"),this.productTheater.frames.unshift(new URL(t,import.meta.url))}},fillVideo1TheaterFrames(){this.video1Theater.frames=[];let e=224;for(;e-- >0;){let t="/images/min/video1/video1-sq-"+e+"-min.jpg";e>=10&&e<100?t="/images/min/video1/video1-sq-0"+e+"-min.jpg":e<10&&(t="/images/min/video1/video1-sq-00"+e+"-min.jpg"),this.video1Theater.frames.unshift(t)}},fillVideo2TheaterFrames(){this.video2Theater.frames=[];let e=235;for(;e-- >0;){let t="/images/min/video2/video2-sq-"+e+"-min.jpg";e>=10&&e<100?t="/images/min/video2/video2-sq-0"+e+"-min.jpg":e<10&&(t="/images/min/video2/video2-sq-00"+e+"-min.jpg"),this.video2Theater.frames.unshift(t)}}},unmounted(){},mounted(){this.fillProductTheaterFrames(),this.fillVideo1TheaterFrames(),this.fillVideo2TheaterFrames()}});const Zu=e=>(df("data-v-2d274c99"),e=e(),mf(),e),ed={key:0,class:"contentBlock",style:{position:"relative"}},td={key:1,class:"contentBlock",style:{position:"relative",background:"black"}},nd={key:2,class:"contentBlock",style:{position:"relative",background:"black"}},rd=Zu(()=>Te("div",{class:"loaderBase"},null,-1));function ad(e,t,n,r,a,i){const o=ss("Theater");return Pe(),Ce("div",null,[this.productTheater.frames.length>0?(Pe(),Ce("div",ed,[ce(o,{"bg-mode":"contain",frames:this.productTheater.frames,height:2e3},null,8,["frames"])])):tr("",!0),this.video1Theater.frames.length>0?(Pe(),Ce("div",td,[ce(o,{"bg-mode":"cover",frames:this.video1Theater.frames,height:2e3},null,8,["frames"])])):tr("",!0),this.video2Theater.frames.length>0?(Pe(),Ce("div",nd,[ce(o,{"bg-mode":"cover",frames:this.video2Theater.frames,height:2e3},null,8,["frames"])])):tr("",!0),rd])}const id=Is(Ju,[["render",ad],["__scopeId","data-v-2d274c99"]]),od=Bu({history:au("/"),routes:[{path:"/",name:"home",component:id}]});function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cr(e){"@babel/helpers - typeof";return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cr(e)}function sd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ji(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ld(e,t,n){return t&&Ji(e.prototype,t),n&&Ji(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ua(e,t){return cd(e)||dd(e,t)||Ns(e,t)||hd()}function In(e){return fd(e)||ud(e)||Ns(e)||md()}function fd(e){if(Array.isArray(e))return ca(e)}function cd(e){if(Array.isArray(e))return e}function ud(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ns(e,t){if(e){if(typeof e=="string")return ca(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ca(e,t)}}function ca(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function md(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zi=function(){},Wa={},Fs={},Ls=null,js={mark:Zi,measure:Zi};try{typeof window<"u"&&(Wa=window),typeof document<"u"&&(Fs=document),typeof MutationObserver<"u"&&(Ls=MutationObserver),typeof performance<"u"&&(js=performance)}catch{}var pd=Wa.navigator||{},eo=pd.userAgent,to=eo===void 0?"":eo,pt=Wa,ne=Fs,no=Ls,Hn=js;pt.document;var at=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",$s=~to.indexOf("MSIE")||~to.indexOf("Trident/"),Un,Wn,Yn,Kn,qn,et="___FONT_AWESOME___",ua=16,Ds="fa",zs="svg-inline--fa",Rt="data-fa-i2svg",da="data-fa-pseudo-element",gd="data-fa-pseudo-element-pending",Ya="data-prefix",Ka="data-icon",ro="fontawesome-i2svg",vd="async",bd=["HTML","HEAD","STYLE","SCRIPT"],Bs=function(){try{return!0}catch{return!1}}(),te="classic",ie="sharp",qa=[te,ie];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var On=Mn((Un={},le(Un,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(Un,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Un)),Sn=Mn((Wn={},le(Wn,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(Wn,ie,{solid:"fass",regular:"fasr",light:"fasl"}),Wn)),Cn=Mn((Yn={},le(Yn,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(Yn,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Yn)),yd=Mn((Kn={},le(Kn,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(Kn,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Kn)),wd=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Hs="fa-layers-text",xd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_d=Mn((qn={},le(qn,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(qn,ie,{900:"fass",400:"fasr",300:"fasl"}),qn)),Us=[1,2,3,4,5,6,7,8,9,10],kd=Us.concat([11,12,13,14,15,16,17,18,19,20]),Ed=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tn=new Set;Object.keys(Sn[te]).map(Tn.add.bind(Tn));Object.keys(Sn[ie]).map(Tn.add.bind(Tn));var Ad=[].concat(qa,In(Tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY]).concat(Us.map(function(e){return"".concat(e,"x")})).concat(kd.map(function(e){return"w-".concat(e)})),vn=pt.FontAwesomeConfig||{};function Pd(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Od(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Sd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sd.forEach(function(e){var t=Ua(e,2),n=t[0],r=t[1],a=Od(Pd(n));a!=null&&(vn[r]=a)})}var Ws={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ds,replacementClass:zs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vn.familyPrefix&&(vn.cssPrefix=vn.familyPrefix);var Jt=R(R({},Ws),vn);Jt.autoReplaceSvg||(Jt.observeMutations=!1);var N={};Object.keys(Ws).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Jt[e]=n,bn.forEach(function(r){return r(N)})},get:function(){return Jt[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Jt.cssPrefix=t,bn.forEach(function(n){return n(N)})},get:function(){return Jt.cssPrefix}});pt.FontAwesomeConfig=N;var bn=[];function Cd(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var ft=ua,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Td(e){if(!(!e||!at)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ne.head.insertBefore(t,r),e}}var Rd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rn(){for(var e=12,t="";e-- >0;)t+=Rd[Math.random()*62|0];return t}function nn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Va(e){return e.classList?nn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ys(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Id(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ys(e[n]),'" ')},"").trim()}function Sr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Xa(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function Md(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Nd(e){var t=e.transform,n=e.width,r=n===void 0?ua:n,a=e.height,i=a===void 0?ua:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$s?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
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
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ks(){var e=Ds,t=zs,n=N.cssPrefix,r=N.replacementClass,a=Fd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ao=!1;function Hr(){N.autoAddCss&&!ao&&(Td(Ks()),ao=!0)}var Ld={mixout:function(){return{dom:{css:Ks,insertCss:Hr}}},hooks:function(){return{beforeDOMElementCreation:function(){Hr()},beforeI2svg:function(){Hr()}}}},tt=pt||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var Le=tt[et],qs=[],jd=function e(){ne.removeEventListener("DOMContentLoaded",e),ur=1,qs.map(function(t){return t()})},ur=!1;at&&(ur=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),ur||ne.addEventListener("DOMContentLoaded",jd));function $d(e){at&&(ur?setTimeout(e,0):qs.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ys(e):"<".concat(t," ").concat(Id(r),">").concat(i.map(Nn).join(""),"</").concat(t,">")}function io(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Dd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Dd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function zd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ma(e){var t=zd(e);return t.length===1?t[0].toString(16):null}function Bd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function oo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ha(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=oo(t);typeof Le.hooks.addPack=="function"&&!a?Le.hooks.addPack(e,oo(t)):Le.styles[e]=R(R({},Le.styles[e]||{}),i),e==="fas"&&ha("fa",t)}var Vn,Xn,Gn,zt=Le.styles,Hd=Le.shims,Ud=(Vn={},le(Vn,te,Object.values(Cn[te])),le(Vn,ie,Object.values(Cn[ie])),Vn),Ga=null,Vs={},Xs={},Gs={},Qs={},Js={},Wd=(Xn={},le(Xn,te,Object.keys(On[te])),le(Xn,ie,Object.keys(On[ie])),Xn);function Yd(e){return~Ad.indexOf(e)}function Kd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Yd(a)?a:null}var Zs=function(){var t=function(i){return Ur(zt,function(o,s,l){return o[l]=Ur(s,i,{}),o},{})};Vs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Xs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Js=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||N.autoFetchSvg,r=Ur(Hd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Gs=r.names,Qs=r.unicodes,Ga=Cr(N.styleDefault,{family:N.familyDefault})};Cd(function(e){Ga=Cr(e.styleDefault,{family:N.familyDefault})});Zs();function Qa(e,t){return(Vs[e]||{})[t]}function qd(e,t){return(Xs[e]||{})[t]}function At(e,t){return(Js[e]||{})[t]}function el(e){return Gs[e]||{prefix:null,iconName:null}}function Vd(e){var t=Qs[e],n=Qa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Ga}var Ja=function(){return{prefix:null,iconName:null,rest:[]}};function Cr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,a=On[r][e],i=Sn[r][e]||Sn[r][a],o=e in Le.styles?e:null;return i||o||null}var so=(Gn={},le(Gn,te,Object.keys(Cn[te])),le(Gn,ie,Object.keys(Cn[ie])),Gn);function Tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},le(t,te,"".concat(N.cssPrefix,"-").concat(te)),le(t,ie,"".concat(N.cssPrefix,"-").concat(ie)),t),o=null,s=te;(e.includes(i[te])||e.some(function(c){return so[te].includes(c)}))&&(s=te),(e.includes(i[ie])||e.some(function(c){return so[ie].includes(c)}))&&(s=ie);var l=e.reduce(function(c,f){var m=Kd(N.cssPrefix,f);if(zt[f]?(f=Ud[s].includes(f)?yd[s][f]:f,o=f,c.prefix=f):Wd[s].indexOf(f)>-1?(o=f,c.prefix=Cr(f,{family:s})):m?c.iconName=m:f!==N.replacementClass&&f!==i[te]&&f!==i[ie]&&c.rest.push(f),!a&&c.prefix&&c.iconName){var h=o==="fa"?el(c.iconName):{},g=At(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!zt.far&&zt.fas&&!N.autoFetchSvg&&(c.prefix="fas")}return c},Ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(zt.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=At(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var Xd=function(){function e(){sd(this,e),this.definitions={}}return ld(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ha(s,o[s]);var l=Cn[te][s];l&&ha(l,o[s]),Zs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),lo=[],Bt={},Kt={},Gd=Object.keys(Kt);function Qd(e,t){var n=t.mixoutsTo;return lo=e,Bt={},Object.keys(Kt).forEach(function(r){Gd.indexOf(r)===-1&&delete Kt[r]}),lo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),cr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Bt[o]||(Bt[o]=[]),Bt[o].push(i[o])})}r.provides&&r.provides(Kt)}),n}function pa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kt[e]?Kt[e].apply(null,t):void 0}function ga(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=At(n,t)||t,io(tl.definitions,n,t)||io(Le.styles,n,t)}var tl=new Xd,Jd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,It("noAuto")},Zd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(It("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,$d(function(){tm({autoReplaceSvgRoot:n}),It("watch",t)})}},em={icon:function(t){if(t===null)return null;if(cr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:At(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Cr(t[0]);return{prefix:r,iconName:At(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(wd))){var a=Tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:At(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:At(i,t)||t}}}},Oe={noAuto:Jd,config:N,dom:Zd,parse:em,library:tl,findIconDefinition:ga,toHtml:Nn},tm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(Le.styles).length>0||N.autoFetchSvg)&&at&&N.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Rr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Sr(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function rm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Za(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,m=e.extra,h=e.watchable,g=h===void 0?!1:h,O=r.found?r:n,S=O.width,L=O.height,w=a==="fak",x=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),F={children:[],attributes:R(R({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(L)})},C=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/L*16*.0625,"em")}:{};g&&(F.attributes[Rt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(f||Rn())},children:[l]}),delete F.attributes.title);var U=R(R({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},C),m.styles)}),J=r.found&&n.found?nt("generateAbstractMask",U)||{children:[],attributes:{}}:nt("generateAbstractIcon",U)||{children:[],attributes:{}},ae=J.children,ke=J.attributes;return U.children=ae,U.attributes=ke,s?rm(U):nm(U)}function fo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Rt]="");var f=R({},o.styles);Xa(a)&&(f.transform=Nd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=Sr(f);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function am(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Sr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wr=Le.styles;function va(e){var t=e[0],n=e[1],r=e.slice(4),a=Ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var im={found:!1,width:512,height:512};function om(e,t){!Bs&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ba(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(nt("missingIconAbstract"),n==="fa"){var i=el(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wr[t]&&Wr[t][e]){var o=Wr[t][e];return r(va(o))}om(e,t),r(R(R({},im),{},{icon:N.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var co=function(){},ya=N.measurePerformance&&Hn&&Hn.mark&&Hn.measure?Hn:{mark:co,measure:co},un='FA "6.4.0"',sm=function(t){return ya.mark("".concat(un," ").concat(t," begins")),function(){return nl(t)}},nl=function(t){ya.mark("".concat(un," ").concat(t," ends")),ya.measure("".concat(un," ").concat(t),"".concat(un," ").concat(t," begins"),"".concat(un," ").concat(t," ends"))},ei={begin:sm,end:nl},nr=function(){};function uo(e){var t=e.getAttribute?e.getAttribute(Rt):null;return typeof t=="string"}function lm(e){var t=e.getAttribute?e.getAttribute(Ya):null,n=e.getAttribute?e.getAttribute(Ka):null;return t&&n}function fm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function cm(){if(N.autoReplaceSvg===!0)return rr.replace;var e=rr[N.autoReplaceSvg];return e||rr.replace}function um(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function dm(e){return ne.createElement(e)}function rl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?um:dm:n;if(typeof e=="string")return ne.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(rl(o,{ceFn:r}))}),a}function mm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(rl(a),n)}),n.getAttribute(Rt)===null&&N.keepOriginalSource){var r=ne.createComment(mm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Va(n).indexOf(N.replacementClass))return rr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(Rt,""),n.innerHTML=o}};function mo(e){e()}function al(e,t){var n=typeof t=="function"?t:nr;if(e.length===0)n();else{var r=mo;N.mutateApproach===vd&&(r=pt.requestAnimationFrame||mo),r(function(){var a=cm(),i=ei.begin("mutate");e.map(a),i(),n()})}}var ti=!1;function il(){ti=!0}function wa(){ti=!1}var dr=null;function ho(e){if(no&&N.observeMutations){var t=e.treeCallback,n=t===void 0?nr:t,r=e.nodeCallback,a=r===void 0?nr:r,i=e.pseudoElementsCallback,o=i===void 0?nr:i,s=e.observeMutationsRoot,l=s===void 0?ne:s;dr=new no(function(c){if(!ti){var f=gt();nn(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!uo(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&uo(m.target)&&~Ed.indexOf(m.attributeName))if(m.attributeName==="class"&&lm(m.target)){var h=Tr(Va(m.target)),g=h.prefix,O=h.iconName;m.target.setAttribute(Ya,g||f),O&&m.target.setAttribute(Ka,O)}else fm(m.target)&&a(m.target)})}}),at&&dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hm(){dr&&dr.disconnect()}function pm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function gm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Tr(Va(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=qd(a.prefix,e.innerText)||Qa(a.prefix,ma(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function vm(e){var t=nn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function bm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=gm(e),r=n.iconName,a=n.prefix,i=n.rest,o=vm(e),s=pa("parseNodeAttributes",{},e),l=t.styleParser?pm(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ym=Le.styles;function ol(e){var t=N.autoReplaceSvg==="nest"?po(e,{styleParser:!1}):po(e);return~t.extra.classes.indexOf(Hs)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}var vt=new Set;qa.map(function(e){vt.add("fa-".concat(e))});Object.keys(On[te]).map(vt.add.bind(vt));Object.keys(On[ie]).map(vt.add.bind(vt));vt=In(vt);function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=ne.documentElement.classList,r=function(m){return n.add("".concat(ro,"-").concat(m))},a=function(m){return n.remove("".concat(ro,"-").concat(m))},i=N.autoFetchSvg?vt:qa.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ym));i.includes("fa")||i.push("fa");var o=[".".concat(Hs,":not([").concat(Rt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ei.begin("onTree"),c=s.reduce(function(f,m){try{var h=ol(m);h&&f.push(h)}catch(g){Bs||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,m){Promise.all(c).then(function(h){al(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),m(h)})})}function wm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ol(e).then(function(n){n&&al([n],t)})}function xm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ga(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ga(a||{})),e(r,R(R({},n),{},{mask:a}))}}var _m=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,m=n.title,h=m===void 0?null:m,g=n.titleId,O=g===void 0?null:g,S=n.classes,L=S===void 0?[]:S,w=n.attributes,x=w===void 0?{}:w,F=n.styles,C=F===void 0?{}:F;if(t){var U=t.prefix,J=t.iconName,ae=t.icon;return Rr(R({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?x["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(O||Rn()):(x["aria-hidden"]="true",x.focusable="false")),Za({icons:{main:va(ae),mask:l?va(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:J,transform:R(R({},Ke),a),symbol:o,title:h,maskId:f,titleId:O,extra:{attributes:x,styles:C,classes:L}})})}},km={mixout:function(){return{icon:xm(_m)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=go,n.nodeCallback=wm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ne:r,i=n.callback,o=i===void 0?function(){}:i;return go(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,m=r.maskId,h=r.extra;return new Promise(function(g,O){Promise.all([ba(a,s),f.iconName?ba(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var L=Ua(S,2),w=L[0],x=L[1];g([n,Za({icons:{main:w,mask:x},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Sr(s);l.length>0&&(a.style=l);var c;return Xa(o)&&(c=nt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Em={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Rr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},Am={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,m=f===void 0?{}:f;return Rr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),am({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(In(s))}})})}}}},Pm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,m=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return Rr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),fo({content:n,transform:R(R({},Ke),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(In(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($s){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Om=new RegExp('"',"ug"),vo=[1105920,1112319];function Sm(e){var t=e.replace(Om,""),n=Bd(t,0),r=n>=vo[0]&&n<=vo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ma(a?t[0]:t),isSecondary:r||a}}function bo(e,t){var n="".concat(gd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=nn(e.children),o=i.filter(function(ae){return ae.getAttribute(da)===t})[0],s=pt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(xd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ie:te,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[h][l[2].toLowerCase()]:_d[h][c],O=Sm(m),S=O.value,L=O.isSecondary,w=l[0].startsWith("FontAwesome"),x=Qa(g,S),F=x;if(w){var C=Vd(S);C.iconName&&C.prefix&&(x=C.iconName,g=C.prefix)}if(x&&!L&&(!o||o.getAttribute(Ya)!==g||o.getAttribute(Ka)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var U=bm(),J=U.extra;J.attributes[da]=t,ba(x,g).then(function(ae){var ke=Za(R(R({},U),{},{icons:{main:ae,mask:Ja()},prefix:g,iconName:F,extra:J,watchable:!0})),ve=ne.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ke.map(function(Se){return Nn(Se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cm(e){return Promise.all([bo(e,"::before"),bo(e,"::after")])}function Tm(e){return e.parentNode!==document.head&&!~bd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(da)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yo(e){if(at)return new Promise(function(t,n){var r=nn(e.querySelectorAll("*")).filter(Tm).map(Cm),a=ei.begin("searchPseudoElements");il(),Promise.all(r).then(function(){a(),wa(),t()}).catch(function(){a(),wa(),n()})})}var Rm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ne:r;N.searchPseudoElements&&yo(a)}}},wo=!1,Im={mixout:function(){return{dom:{unwatch:function(){il(),wo=!0}}}},hooks:function(){return{bootstrap:function(){ho(pa("mutationObserverCallbacks",{}))},noAuto:function(){hm()},watch:function(n){var r=n.observeMutationsRoot;wo?wa():ho(pa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Mm={mixout:function(){return{parse:{transform:function(n){return xo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=xo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function _o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Nm(e){return e.tag==="g"?e.children:[e]}var Fm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Tr(a.split(" ").map(function(o){return o.trim()})):Ja();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,m=o.width,h=o.icon,g=Md({transform:l,containerWidth:m,iconWidth:c}),O={tag:"rect",attributes:R(R({},Yr),{},{fill:"white"})},S=f.children?{children:f.children.map(_o)}:{},L={tag:"g",attributes:R({},g.inner),children:[_o(R({tag:f.tag,attributes:R(R({},f.attributes),g.path)},S))]},w={tag:"g",attributes:R({},g.outer),children:[L]},x="mask-".concat(s||Rn()),F="clip-".concat(s||Rn()),C={tag:"mask",attributes:R(R({},Yr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Nm(h)},C]};return r.push(U,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(x,")")},Yr)}),{children:r,attributes:a}}}},Lm={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},$m=[Ld,km,Em,Am,Pm,Rm,Im,Mm,Fm,Lm,jm];Qd($m,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var Dm=Oe.library;Oe.dom;var xa=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var zm=Oe.icon;Oe.layer;Oe.text;Oe.counter;function ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ko(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ko(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Hm(e,t){if(e==null)return{};var n=Bm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Um=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sl={exports:{}};(function(e){(function(t){var n=function(w,x,F){if(!c(x)||m(x)||h(x)||g(x)||l(x))return x;var C,U=0,J=0;if(f(x))for(C=[],J=x.length;U<J;U++)C.push(n(w,x[U],F));else{C={};for(var ae in x)Object.prototype.hasOwnProperty.call(x,ae)&&(C[w(ae,F)]=n(w,x[ae],F))}return C},r=function(w,x){x=x||{};var F=x.separator||"_",C=x.split||/(?=[A-Z])/;return w.split(C).join(F)},a=function(w){return O(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(x,F){return F?F.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var x=a(w);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(w,x){return r(w,x).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},f=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},h=function(w){return s.call(w)=="[object RegExp]"},g=function(w){return s.call(w)=="[object Boolean]"},O=function(w){return w=w-0,w===w},S=function(w,x){var F=x&&"process"in x?x.process:x;return typeof F!="function"?w:function(C,U){return F(C,w,U)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,x){return n(S(a,x),w)},decamelizeKeys:function(w,x){return n(S(o,x),w,x)},pascalizeKeys:function(w,x){return n(S(i,x),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Um)})(sl);var Wm=sl.exports,Ym=["class","style"];function Km(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function qm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ll(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=qm(f);break;case"style":l.style=Km(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Hm(n,Ym);return za(e.tag,Qe(Qe(Qe({},t),{},{class:a.class,style:Qe(Qe({},a.style),o)},a.attrs),s),r)}var fl=!1;try{fl=!0}catch{}function Vm(){if(!fl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Xm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Eo(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(xa.icon)return xa.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Gm=Mt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=de(function(){return Eo(t.icon)}),i=de(function(){return Kr("classes",Xm(t))}),o=de(function(){return Kr("transform",typeof t.transform=="string"?xa.transform(t.transform):t.transform)}),s=de(function(){return Kr("mask",Eo(t.mask))}),l=de(function(){return zm(a.value,Qe(Qe(Qe(Qe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});dn(l,function(f){if(!f)return Vm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=de(function(){return l.value?ll(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Qm={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};const Jm=$c(Qu);Dm.add(Qm);Jm.use(od).component("font-awesome-icon",Gm).mount("#app");
