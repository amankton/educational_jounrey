(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=o(c);fetch(c.href,h)}})();function py(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jc={exports:{}},Ta={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function Ux(){if(Bm)return Ta;Bm=1;var t=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,c,h){var p=null;if(h!==void 0&&(p=""+h),c.key!==void 0&&(p=""+c.key),"key"in c){h={};for(var f in c)f!=="key"&&(h[f]=c[f])}else h=c;return c=h.ref,{$$typeof:t,type:s,key:p,ref:c!==void 0?c:null,props:h}}return Ta.Fragment=l,Ta.jsx=o,Ta.jsxs=o,Ta}var zm;function Vx(){return zm||(zm=1,Jc.exports=Ux()),Jc.exports}var r=Vx(),eu={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function Fx(){if(Om)return pe;Om=1;var t=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function w(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,R={};function D(j,G,$){this.props=j,this.context=G,this.refs=R,this.updater=$||S}D.prototype.isReactComponent={},D.prototype.setState=function(j,G){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,G,"setState")},D.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function M(){}M.prototype=D.prototype;function V(j,G,$){this.props=j,this.context=G,this.refs=R,this.updater=$||S}var z=V.prototype=new M;z.constructor=V,C(z,D.prototype),z.isPureReactComponent=!0;var N=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},W=Object.prototype.hasOwnProperty;function K(j,G,$,Z,le,xe){return $=xe.ref,{$$typeof:t,type:j,key:G,ref:$!==void 0?$:null,props:xe}}function Q(j,G){return K(j.type,G,void 0,void 0,void 0,j.props)}function ie(j){return typeof j=="object"&&j!==null&&j.$$typeof===t}function X(j){var G={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function($){return G[$]})}var he=/\/+/g;function ne(j,G){return typeof j=="object"&&j!==null&&j.key!=null?X(""+j.key):G.toString(36)}function Ue(){}function Ce(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Ue,Ue):(j.status="pending",j.then(function(G){j.status==="pending"&&(j.status="fulfilled",j.value=G)},function(G){j.status==="pending"&&(j.status="rejected",j.reason=G)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function Ae(j,G,$,Z,le){var xe=typeof j;(xe==="undefined"||xe==="boolean")&&(j=null);var de=!1;if(j===null)de=!0;else switch(xe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(j.$$typeof){case t:case l:de=!0;break;case y:return de=j._init,Ae(de(j._payload),G,$,Z,le)}}if(de)return le=le(j),de=Z===""?"."+ne(j,0):Z,N(le)?($="",de!=null&&($=de.replace(he,"$&/")+"/"),Ae(le,G,$,"",function(Tt){return Tt})):le!=null&&(ie(le)&&(le=Q(le,$+(le.key==null||j&&j.key===le.key?"":(""+le.key).replace(he,"$&/")+"/")+de)),G.push(le)),1;de=0;var yi=Z===""?".":Z+":";if(N(j))for(var Be=0;Be<j.length;Be++)Z=j[Be],xe=yi+ne(Z,Be),de+=Ae(Z,G,$,xe,le);else if(Be=w(j),typeof Be=="function")for(j=Be.call(j),Be=0;!(Z=j.next()).done;)Z=Z.value,xe=yi+ne(Z,Be++),de+=Ae(Z,G,$,xe,le);else if(xe==="object"){if(typeof j.then=="function")return Ae(Ce(j),G,$,Z,le);throw G=String(j),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return de}function U(j,G,$){if(j==null)return j;var Z=[],le=0;return Ae(j,Z,"","",function(xe){return G.call($,xe,le++)}),Z}function I(j){if(j._status===-1){var G=j._result;G=G(),G.then(function($){(j._status===0||j._status===-1)&&(j._status=1,j._result=$)},function($){(j._status===0||j._status===-1)&&(j._status=2,j._result=$)}),j._status===-1&&(j._status=0,j._result=G)}if(j._status===1)return j._result.default;throw j._result}var J=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function ge(){}return pe.Children={map:U,forEach:function(j,G,$){U(j,function(){G.apply(this,arguments)},$)},count:function(j){var G=0;return U(j,function(){G++}),G},toArray:function(j){return U(j,function(G){return G})||[]},only:function(j){if(!ie(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},pe.Component=D,pe.Fragment=o,pe.Profiler=c,pe.PureComponent=V,pe.StrictMode=s,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,pe.__COMPILER_RUNTIME={__proto__:null,c:function(j){return L.H.useMemoCache(j)}},pe.cache=function(j){return function(){return j.apply(null,arguments)}},pe.cloneElement=function(j,G,$){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Z=C({},j.props),le=j.key,xe=void 0;if(G!=null)for(de in G.ref!==void 0&&(xe=void 0),G.key!==void 0&&(le=""+G.key),G)!W.call(G,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&G.ref===void 0||(Z[de]=G[de]);var de=arguments.length-2;if(de===1)Z.children=$;else if(1<de){for(var yi=Array(de),Be=0;Be<de;Be++)yi[Be]=arguments[Be+2];Z.children=yi}return K(j.type,le,void 0,void 0,xe,Z)},pe.createContext=function(j){return j={$$typeof:p,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:h,_context:j},j},pe.createElement=function(j,G,$){var Z,le={},xe=null;if(G!=null)for(Z in G.key!==void 0&&(xe=""+G.key),G)W.call(G,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(le[Z]=G[Z]);var de=arguments.length-2;if(de===1)le.children=$;else if(1<de){for(var yi=Array(de),Be=0;Be<de;Be++)yi[Be]=arguments[Be+2];le.children=yi}if(j&&j.defaultProps)for(Z in de=j.defaultProps,de)le[Z]===void 0&&(le[Z]=de[Z]);return K(j,xe,void 0,void 0,null,le)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(j){return{$$typeof:f,render:j}},pe.isValidElement=ie,pe.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:I}},pe.memo=function(j,G){return{$$typeof:g,type:j,compare:G===void 0?null:G}},pe.startTransition=function(j){var G=L.T,$={};L.T=$;try{var Z=j(),le=L.S;le!==null&&le($,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ge,J)}catch(xe){J(xe)}finally{L.T=G}},pe.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},pe.use=function(j){return L.H.use(j)},pe.useActionState=function(j,G,$){return L.H.useActionState(j,G,$)},pe.useCallback=function(j,G){return L.H.useCallback(j,G)},pe.useContext=function(j){return L.H.useContext(j)},pe.useDebugValue=function(){},pe.useDeferredValue=function(j,G){return L.H.useDeferredValue(j,G)},pe.useEffect=function(j,G,$){var Z=L.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(j,G)},pe.useId=function(){return L.H.useId()},pe.useImperativeHandle=function(j,G,$){return L.H.useImperativeHandle(j,G,$)},pe.useInsertionEffect=function(j,G){return L.H.useInsertionEffect(j,G)},pe.useLayoutEffect=function(j,G){return L.H.useLayoutEffect(j,G)},pe.useMemo=function(j,G){return L.H.useMemo(j,G)},pe.useOptimistic=function(j,G){return L.H.useOptimistic(j,G)},pe.useReducer=function(j,G,$){return L.H.useReducer(j,G,$)},pe.useRef=function(j){return L.H.useRef(j)},pe.useState=function(j){return L.H.useState(j)},pe.useSyncExternalStore=function(j,G,$){return L.H.useSyncExternalStore(j,G,$)},pe.useTransition=function(){return L.H.useTransition()},pe.version="19.1.0",pe}var Pm;function Xu(){return Pm||(Pm=1,eu.exports=Fx()),eu.exports}var T=Xu();const Hx=py(T);var iu={exports:{}},ja={},tu={exports:{}},nu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function Nx(){return Lm||(Lm=1,function(t){function l(U,I){var J=U.length;U.push(I);e:for(;0<J;){var ge=J-1>>>1,j=U[ge];if(0<c(j,I))U[ge]=I,U[J]=j,J=ge;else break e}}function o(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var I=U[0],J=U.pop();if(J!==I){U[0]=J;e:for(var ge=0,j=U.length,G=j>>>1;ge<G;){var $=2*(ge+1)-1,Z=U[$],le=$+1,xe=U[le];if(0>c(Z,J))le<j&&0>c(xe,Z)?(U[ge]=xe,U[le]=J,ge=le):(U[ge]=Z,U[$]=J,ge=$);else if(le<j&&0>c(xe,J))U[ge]=xe,U[le]=J,ge=le;else break e}}return I}function c(U,I){var J=U.sortIndex-I.sortIndex;return J!==0?J:U.id-I.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;t.unstable_now=function(){return h.now()}}else{var p=Date,f=p.now();t.unstable_now=function(){return p.now()-f}}var m=[],g=[],y=1,b=null,w=3,S=!1,C=!1,R=!1,D=!1,M=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var I=o(g);I!==null;){if(I.callback===null)s(g);else if(I.startTime<=U)s(g),I.sortIndex=I.expirationTime,l(m,I);else break;I=o(g)}}function L(U){if(R=!1,N(U),!C)if(o(m)!==null)C=!0,W||(W=!0,ne());else{var I=o(g);I!==null&&Ae(L,I.startTime-U)}}var W=!1,K=-1,Q=5,ie=-1;function X(){return D?!0:!(t.unstable_now()-ie<Q)}function he(){if(D=!1,W){var U=t.unstable_now();ie=U;var I=!0;try{e:{C=!1,R&&(R=!1,V(K),K=-1),S=!0;var J=w;try{i:{for(N(U),b=o(m);b!==null&&!(b.expirationTime>U&&X());){var ge=b.callback;if(typeof ge=="function"){b.callback=null,w=b.priorityLevel;var j=ge(b.expirationTime<=U);if(U=t.unstable_now(),typeof j=="function"){b.callback=j,N(U),I=!0;break i}b===o(m)&&s(m),N(U)}else s(m);b=o(m)}if(b!==null)I=!0;else{var G=o(g);G!==null&&Ae(L,G.startTime-U),I=!1}}break e}finally{b=null,w=J,S=!1}I=void 0}}finally{I?ne():W=!1}}}var ne;if(typeof z=="function")ne=function(){z(he)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Ce=Ue.port2;Ue.port1.onmessage=he,ne=function(){Ce.postMessage(null)}}else ne=function(){M(he,0)};function Ae(U,I){K=M(function(){U(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_next=function(U){switch(w){case 1:case 2:case 3:var I=3;break;default:I=w}var J=w;w=I;try{return U()}finally{w=J}},t.unstable_requestPaint=function(){D=!0},t.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=w;w=U;try{return I()}finally{w=J}},t.unstable_scheduleCallback=function(U,I,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,U){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=J+j,U={id:y++,callback:I,priorityLevel:U,startTime:J,expirationTime:j,sortIndex:-1},J>ge?(U.sortIndex=J,l(g,U),o(m)===null&&U===o(g)&&(R?(V(K),K=-1):R=!0,Ae(L,J-ge))):(U.sortIndex=j,l(m,U),C||S||(C=!0,W||(W=!0,ne()))),U},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(U){var I=w;return function(){var J=w;w=I;try{return U.apply(this,arguments)}finally{w=J}}}}(nu)),nu}var _m;function qx(){return _m||(_m=1,tu.exports=Nx()),tu.exports}var lu={exports:{}},oi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function Gx(){if(Um)return oi;Um=1;var t=Xu();function l(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(m,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:m,containerInfo:g,implementation:y}}var p=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return oi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,oi.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return h(m,g,null,y)},oi.flushSync=function(m){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,m)return m()}finally{p.T=g,s.p=y,s.d.f()}},oi.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},oi.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},oi.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,b=f(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:S}):y==="script"&&s.d.X(m,{crossOrigin:b,integrity:w,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},oi.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},oi.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=f(y,g.crossOrigin);s.d.L(m,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},oi.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=f(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},oi.requestFormReset=function(m){s.d.r(m)},oi.unstable_batchedUpdates=function(m,g){return m(g)},oi.useFormState=function(m,g,y){return p.H.useFormState(m,g,y)},oi.useFormStatus=function(){return p.H.useHostTransitionStatus()},oi.version="19.1.0",oi}var Vm;function Yx(){if(Vm)return lu.exports;Vm=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(l){console.error(l)}}return t(),lu.exports=Gx(),lu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function Ix(){if(Fm)return ja;Fm=1;var t=qx(),l=Xu(),o=Yx();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)i+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var i=e,n=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(n=i.return),e=i.return;while(e)}return i.tag===3?n:null}function p(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(h(e)!==e)throw Error(s(188))}function m(e){var i=e.alternate;if(!i){if(i=h(e),i===null)throw Error(s(188));return i!==e?null:e}for(var n=e,a=i;;){var u=n.return;if(u===null)break;var d=u.alternate;if(d===null){if(a=u.return,a!==null){n=a;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===n)return f(u),e;if(d===a)return f(u),i;d=d.sibling}throw Error(s(188))}if(n.return!==a.return)n=u,a=d;else{for(var v=!1,x=u.child;x;){if(x===n){v=!0,n=u,a=d;break}if(x===a){v=!0,a=u,n=d;break}x=x.sibling}if(!v){for(x=d.child;x;){if(x===n){v=!0,n=d,a=u;break}if(x===a){v=!0,a=d,n=u;break}x=x.sibling}if(!v)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),z=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=he&&e[he]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function Ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case D:return"Profiler";case R:return"StrictMode";case L:return"Suspense";case W:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case z:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case N:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return i=e.displayName||null,i!==null?i:Ce(e.type)||"Memo";case Q:i=e._payload,e=e._init;try{return Ce(e(i))}catch{}}return null}var Ae=Array.isArray,U=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ge=[],j=-1;function G(e){return{current:e}}function $(e){0>j||(e.current=ge[j],ge[j]=null,j--)}function Z(e,i){j++,ge[j]=e.current,e.current=i}var le=G(null),xe=G(null),de=G(null),yi=G(null);function Be(e,i){switch(Z(de,i),Z(xe,e),Z(le,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?om(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=om(i),e=sm(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(le),Z(le,e)}function Tt(){$(le),$(xe),$(de)}function Us(e){e.memoizedState!==null&&Z(yi,e);var i=le.current,n=sm(i,e.type);i!==n&&(Z(xe,e),Z(le,n))}function Qa(e){xe.current===e&&($(le),$(xe)),yi.current===e&&($(yi),xa._currentValue=J)}var Vs=Object.prototype.hasOwnProperty,Fs=t.unstable_scheduleCallback,Hs=t.unstable_cancelCallback,g0=t.unstable_shouldYield,y0=t.unstable_requestPaint,Ii=t.unstable_now,v0=t.unstable_getCurrentPriorityLevel,Vd=t.unstable_ImmediatePriority,Fd=t.unstable_UserBlockingPriority,Za=t.unstable_NormalPriority,b0=t.unstable_LowPriority,Hd=t.unstable_IdlePriority,x0=t.log,w0=t.unstable_setDisableYieldValue,Ml=null,vi=null;function jt(e){if(typeof x0=="function"&&w0(e),vi&&typeof vi.setStrictMode=="function")try{vi.setStrictMode(Ml,e)}catch{}}var bi=Math.clz32?Math.clz32:A0,S0=Math.log,C0=Math.LN2;function A0(e){return e>>>=0,e===0?32:31-(S0(e)/C0|0)|0}var $a=256,Ja=4194304;function tn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function eo(e,i,n){var a=e.pendingLanes;if(a===0)return 0;var u=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var x=a&134217727;return x!==0?(a=x&~d,a!==0?u=tn(a):(v&=x,v!==0?u=tn(v):n||(n=x&~e,n!==0&&(u=tn(n))))):(x=a&~d,x!==0?u=tn(x):v!==0?u=tn(v):n||(n=a&~e,n!==0&&(u=tn(n)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,n=i&-i,d>=n||d===32&&(n&4194048)!==0)?i:u}function kl(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function T0(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(){var e=$a;return $a<<=1,($a&4194048)===0&&($a=256),e}function qd(){var e=Ja;return Ja<<=1,(Ja&62914560)===0&&(Ja=4194304),e}function Ns(e){for(var i=[],n=0;31>n;n++)i.push(e);return i}function Rl(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function j0(e,i,n,a,u,d){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,A=e.expirationTimes,O=e.hiddenUpdates;for(n=v&~n;0<n;){var F=31-bi(n),q=1<<F;x[F]=0,A[F]=-1;var P=O[F];if(P!==null)for(O[F]=null,F=0;F<P.length;F++){var _=P[F];_!==null&&(_.lane&=-536870913)}n&=~q}a!==0&&Gd(e,a,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Gd(e,i,n){e.pendingLanes|=i,e.suspendedLanes&=~i;var a=31-bi(i);e.entangledLanes|=i,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Yd(e,i){var n=e.entangledLanes|=i;for(e=e.entanglements;n;){var a=31-bi(n),u=1<<a;u&i|e[a]&i&&(e[a]|=i),n&=~u}}function qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Id(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:jm(e.type))}function E0(e,i){var n=I.p;try{return I.p=e,i()}finally{I.p=n}}var Et=Math.random().toString(36).slice(2),li="__reactFiber$"+Et,di="__reactProps$"+Et,kn="__reactContainer$"+Et,Ys="__reactEvents$"+Et,M0="__reactListeners$"+Et,k0="__reactHandles$"+Et,Wd="__reactResources$"+Et,Dl="__reactMarker$"+Et;function Is(e){delete e[li],delete e[di],delete e[Ys],delete e[M0],delete e[k0]}function Rn(e){var i=e[li];if(i)return i;for(var n=e.parentNode;n;){if(i=n[kn]||n[li]){if(n=i.alternate,i.child!==null||n!==null&&n.child!==null)for(e=dm(e);e!==null;){if(n=e[li])return n;e=dm(e)}return i}e=n,n=e.parentNode}return null}function Dn(e){if(e=e[li]||e[kn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Bl(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Bn(e){var i=e[Wd];return i||(i=e[Wd]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Qe(e){e[Dl]=!0}var Kd=new Set,Xd={};function nn(e,i){zn(e,i),zn(e+"Capture",i)}function zn(e,i){for(Xd[e]=i,e=0;e<i.length;e++)Kd.add(i[e])}var R0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qd={},Zd={};function D0(e){return Vs.call(Zd,e)?!0:Vs.call(Qd,e)?!1:R0.test(e)?Zd[e]=!0:(Qd[e]=!0,!1)}function io(e,i,n){if(D0(i))if(n===null)e.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var a=i.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+n)}}function to(e,i,n){if(n===null)e.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+n)}}function at(e,i,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(i,n,""+a)}}var Ws,$d;function On(e){if(Ws===void 0)try{throw Error()}catch(n){var i=n.stack.trim().match(/\n( *(at )?)/);Ws=i&&i[1]||"",$d=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ws+e+$d}var Ks=!1;function Xs(e,i){if(!e||Ks)return"";Ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(i){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(_){var P=_}Reflect.construct(e,[],q)}else{try{q.call()}catch(_){P=_}e.call(q.prototype)}}else{try{throw Error()}catch(_){P=_}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(_){if(_&&P&&typeof _.stack=="string")return[_.stack,P.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=a.DetermineComponentFrameRoot(),v=d[0],x=d[1];if(v&&x){var A=v.split(`
`),O=x.split(`
`);for(u=a=0;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;for(;u<O.length&&!O[u].includes("DetermineComponentFrameRoot");)u++;if(a===A.length||u===O.length)for(a=A.length-1,u=O.length-1;1<=a&&0<=u&&A[a]!==O[u];)u--;for(;1<=a&&0<=u;a--,u--)if(A[a]!==O[u]){if(a!==1||u!==1)do if(a--,u--,0>u||A[a]!==O[u]){var F=`
`+A[a].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=a&&0<=u);break}}}finally{Ks=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?On(n):""}function B0(e){switch(e.tag){case 26:case 27:case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return Xs(e.type,!1);case 11:return Xs(e.type.render,!1);case 1:return Xs(e.type,!0);case 31:return On("Activity");default:return""}}function Jd(e){try{var i="";do i+=B0(e),e=e.return;while(e);return i}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Mi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eh(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function z0(e){var i=eh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),a=""+e[i];if(!e.hasOwnProperty(i)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,d=n.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function no(e){e._valueTracker||(e._valueTracker=z0(e))}function ih(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var n=i.getValue(),a="";return e&&(a=eh(e)?e.checked?"true":"false":e.value),e=a,e!==n?(i.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var O0=/[\n"\\]/g;function ki(e){return e.replace(O0,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Qs(e,i,n,a,u,d,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Mi(i)):e.value!==""+Mi(i)&&(e.value=""+Mi(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?Zs(e,v,Mi(i)):n!=null?Zs(e,v,Mi(n)):a!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Mi(x):e.removeAttribute("name")}function th(e,i,n,a,u,d,v,x){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;n=n!=null?""+Mi(n):"",i=i!=null?""+Mi(i):n,x||i===e.value||(e.value=i),e.defaultValue=i}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=x?e.checked:!!a,e.defaultChecked=!!a,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Zs(e,i,n){i==="number"&&lo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Pn(e,i,n,a){if(e=e.options,i){i={};for(var u=0;u<n.length;u++)i["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=i.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Mi(n),i=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,a&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function nh(e,i,n){if(i!=null&&(i=""+Mi(i),i!==e.value&&(e.value=i),n==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=n!=null?""+Mi(n):""}function lh(e,i,n,a){if(i==null){if(a!=null){if(n!=null)throw Error(s(92));if(Ae(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),i=n}n=Mi(i),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Ln(e,i){if(i){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=i;return}}e.textContent=i}var P0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ah(e,i,n){var a=i.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":a?e.setProperty(i,n):typeof n!="number"||n===0||P0.has(i)?i==="float"?e.cssFloat=n:e[i]=(""+n).trim():e[i]=n+"px"}function oh(e,i,n){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||i!=null&&i.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var u in i)a=i[u],i.hasOwnProperty(u)&&n[u]!==a&&ah(e,u,a)}else for(var d in i)i.hasOwnProperty(d)&&ah(e,d,i[d])}function $s(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var L0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ao(e){return _0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Js=null;function er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,Un=null;function sh(e){var i=Dn(e);if(i&&(e=i.stateNode)){var n=e[di]||null;e:switch(e=i.stateNode,i.type){case"input":if(Qs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),i=n.name,n.type==="radio"&&i!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ki(""+i)+'"][type="radio"]'),i=0;i<n.length;i++){var a=n[i];if(a!==e&&a.form===e.form){var u=a[di]||null;if(!u)throw Error(s(90));Qs(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<n.length;i++)a=n[i],a.form===e.form&&ih(a)}break e;case"textarea":nh(e,n.value,n.defaultValue);break e;case"select":i=n.value,i!=null&&Pn(e,!!n.multiple,i,!1)}}}var ir=!1;function rh(e,i,n){if(ir)return e(i,n);ir=!0;try{var a=e(i);return a}finally{if(ir=!1,(_n!==null||Un!==null)&&(Yo(),_n&&(i=_n,e=Un,Un=_n=null,sh(i),e)))for(i=0;i<e.length;i++)sh(e[i])}}function zl(e,i){var n=e.stateNode;if(n===null)return null;var a=n[di]||null;if(a===null)return null;n=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,i,typeof n));return n}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tr=!1;if(ot)try{var Ol={};Object.defineProperty(Ol,"passive",{get:function(){tr=!0}}),window.addEventListener("test",Ol,Ol),window.removeEventListener("test",Ol,Ol)}catch{tr=!1}var Mt=null,nr=null,oo=null;function ch(){if(oo)return oo;var e,i=nr,n=i.length,a,u="value"in Mt?Mt.value:Mt.textContent,d=u.length;for(e=0;e<n&&i[e]===u[e];e++);var v=n-e;for(a=1;a<=v&&i[n-a]===u[d-a];a++);return oo=u.slice(e,1<a?1-a:void 0)}function so(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function uh(){return!1}function hi(e){function i(n,a,u,d,v){this._reactName=n,this._targetInst=u,this.type=a,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ro:uh,this.isPropagationStopped=uh,this}return y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=hi(ln),Pl=y({},ln,{view:0,detail:0}),U0=hi(Pl),lr,ar,Ll,uo=y({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ll&&(Ll&&e.type==="mousemove"?(lr=e.screenX-Ll.screenX,ar=e.screenY-Ll.screenY):ar=lr=0,Ll=e),lr)},movementY:function(e){return"movementY"in e?e.movementY:ar}}),dh=hi(uo),V0=y({},uo,{dataTransfer:0}),F0=hi(V0),H0=y({},Pl,{relatedTarget:0}),or=hi(H0),N0=y({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=hi(N0),G0=y({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=hi(G0),I0=y({},ln,{data:0}),hh=hi(I0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=X0[e])?!!i[e]:!1}function sr(){return Q0}var Z0=y({},Pl,{key:function(e){if(e.key){var i=W0[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=hi(Z0),J0=y({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=hi(J0),eb=y({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),ib=hi(eb),tb=y({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),nb=hi(tb),lb=y({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ab=hi(lb),ob=y({},ln,{newState:0,oldState:0}),sb=hi(ob),rb=[9,13,27,32],rr=ot&&"CompositionEvent"in window,_l=null;ot&&"documentMode"in document&&(_l=document.documentMode);var cb=ot&&"TextEvent"in window&&!_l,fh=ot&&(!rr||_l&&8<_l&&11>=_l),mh=" ",gh=!1;function yh(e,i){switch(e){case"keyup":return rb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function ub(e,i){switch(e){case"compositionend":return vh(i);case"keypress":return i.which!==32?null:(gh=!0,mh);case"textInput":return e=i.data,e===mh&&gh?null:e;default:return null}}function db(e,i){if(Vn)return e==="compositionend"||!rr&&yh(e,i)?(e=ch(),oo=nr=Mt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return fh&&i.locale!=="ko"?null:i.data;default:return null}}var hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!hb[e.type]:i==="textarea"}function xh(e,i,n,a){_n?Un?Un.push(a):Un=[a]:_n=a,i=Zo(i,"onChange"),0<i.length&&(n=new co("onChange","change",null,n,a),e.push({event:n,listeners:i}))}var Ul=null,Vl=null;function pb(e){im(e,0)}function ho(e){var i=Bl(e);if(ih(i))return e}function wh(e,i){if(e==="change")return i}var Sh=!1;if(ot){var cr;if(ot){var ur="oninput"in document;if(!ur){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),ur=typeof Ch.oninput=="function"}cr=ur}else cr=!1;Sh=cr&&(!document.documentMode||9<document.documentMode)}function Ah(){Ul&&(Ul.detachEvent("onpropertychange",Th),Vl=Ul=null)}function Th(e){if(e.propertyName==="value"&&ho(Vl)){var i=[];xh(i,Vl,e,er(e)),rh(pb,i)}}function fb(e,i,n){e==="focusin"?(Ah(),Ul=i,Vl=n,Ul.attachEvent("onpropertychange",Th)):e==="focusout"&&Ah()}function mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ho(Vl)}function gb(e,i){if(e==="click")return ho(i)}function yb(e,i){if(e==="input"||e==="change")return ho(i)}function vb(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var xi=typeof Object.is=="function"?Object.is:vb;function Fl(e,i){if(xi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var n=Object.keys(e),a=Object.keys(i);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var u=n[a];if(!Vs.call(i,u)||!xi(e[u],i[u]))return!1}return!0}function jh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eh(e,i){var n=jh(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=i&&a>=i)return{node:n,offset:i-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jh(n)}}function Mh(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Mh(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function kh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=lo(e.document);i instanceof e.HTMLIFrameElement;){try{var n=typeof i.contentWindow.location.href=="string"}catch{n=!1}if(n)e=i.contentWindow;else break;i=lo(e.document)}return i}function dr(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var bb=ot&&"documentMode"in document&&11>=document.documentMode,Fn=null,hr=null,Hl=null,pr=!1;function Rh(e,i,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pr||Fn==null||Fn!==lo(a)||(a=Fn,"selectionStart"in a&&dr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hl&&Fl(Hl,a)||(Hl=a,a=Zo(hr,"onSelect"),0<a.length&&(i=new co("onSelect","select",null,i,n),e.push({event:i,listeners:a}),i.target=Fn)))}function an(e,i){var n={};return n[e.toLowerCase()]=i.toLowerCase(),n["Webkit"+e]="webkit"+i,n["Moz"+e]="moz"+i,n}var Hn={animationend:an("Animation","AnimationEnd"),animationiteration:an("Animation","AnimationIteration"),animationstart:an("Animation","AnimationStart"),transitionrun:an("Transition","TransitionRun"),transitionstart:an("Transition","TransitionStart"),transitioncancel:an("Transition","TransitionCancel"),transitionend:an("Transition","TransitionEnd")},fr={},Dh={};ot&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function on(e){if(fr[e])return fr[e];if(!Hn[e])return e;var i=Hn[e],n;for(n in i)if(i.hasOwnProperty(n)&&n in Dh)return fr[e]=i[n];return e}var Bh=on("animationend"),zh=on("animationiteration"),Oh=on("animationstart"),xb=on("transitionrun"),wb=on("transitionstart"),Sb=on("transitioncancel"),Ph=on("transitionend"),Lh=new Map,mr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mr.push("scrollEnd");function Fi(e,i){Lh.set(e,i),nn(i,[e])}var _h=new WeakMap;function Ri(e,i){if(typeof e=="object"&&e!==null){var n=_h.get(e);return n!==void 0?n:(i={value:e,source:i,stack:Jd(i)},_h.set(e,i),i)}return{value:e,source:i,stack:Jd(i)}}var Di=[],Nn=0,gr=0;function po(){for(var e=Nn,i=gr=Nn=0;i<e;){var n=Di[i];Di[i++]=null;var a=Di[i];Di[i++]=null;var u=Di[i];Di[i++]=null;var d=Di[i];if(Di[i++]=null,a!==null&&u!==null){var v=a.pending;v===null?u.next=u:(u.next=v.next,v.next=u),a.pending=u}d!==0&&Uh(n,u,d)}}function fo(e,i,n,a){Di[Nn++]=e,Di[Nn++]=i,Di[Nn++]=n,Di[Nn++]=a,gr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function yr(e,i,n,a){return fo(e,i,n,a),mo(e)}function qn(e,i){return fo(e,null,null,i),mo(e)}function Uh(e,i,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var u=!1,d=e.return;d!==null;)d.childLanes|=n,a=d.alternate,a!==null&&(a.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-bi(n),e=d.hiddenUpdates,a=e[u],a===null?e[u]=[i]:a.push(i),i.lane=n|536870912),d):null}function mo(e){if(50<ha)throw ha=0,Cc=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Gn={};function Cb(e,i,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(e,i,n,a){return new Cb(e,i,n,a)}function vr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function st(e,i){var n=e.alternate;return n===null?(n=wi(e.tag,i,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=i,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,i=e.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vh(e,i){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,i=n.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function go(e,i,n,a,u,d){var v=0;if(a=e,typeof e=="function")vr(e)&&(v=1);else if(typeof e=="string")v=Tx(e,n,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=wi(31,n,i,u),e.elementType=ie,e.lanes=d,e;case C:return sn(n.children,u,d,i);case R:v=8,u|=24;break;case D:return e=wi(12,n,i,u|2),e.elementType=D,e.lanes=d,e;case L:return e=wi(13,n,i,u),e.elementType=L,e.lanes=d,e;case W:return e=wi(19,n,i,u),e.elementType=W,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:case z:v=10;break e;case V:v=9;break e;case N:v=11;break e;case K:v=14;break e;case Q:v=16,a=null;break e}v=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return i=wi(v,n,i,u),i.elementType=e,i.type=a,i.lanes=d,i}function sn(e,i,n,a){return e=wi(7,e,a,i),e.lanes=n,e}function br(e,i,n){return e=wi(6,e,null,i),e.lanes=n,e}function xr(e,i,n){return i=wi(4,e.children!==null?e.children:[],e.key,i),i.lanes=n,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Yn=[],In=0,yo=null,vo=0,Bi=[],zi=0,rn=null,rt=1,ct="";function cn(e,i){Yn[In++]=vo,Yn[In++]=yo,yo=e,vo=i}function Fh(e,i,n){Bi[zi++]=rt,Bi[zi++]=ct,Bi[zi++]=rn,rn=e;var a=rt;e=ct;var u=32-bi(a)-1;a&=~(1<<u),n+=1;var d=32-bi(i)+u;if(30<d){var v=u-u%5;d=(a&(1<<v)-1).toString(32),a>>=v,u-=v,rt=1<<32-bi(i)+u|n<<u|a,ct=d+e}else rt=1<<d|n<<u|a,ct=e}function wr(e){e.return!==null&&(cn(e,1),Fh(e,1,0))}function Sr(e){for(;e===yo;)yo=Yn[--In],Yn[In]=null,vo=Yn[--In],Yn[In]=null;for(;e===rn;)rn=Bi[--zi],Bi[zi]=null,ct=Bi[--zi],Bi[zi]=null,rt=Bi[--zi],Bi[zi]=null}var ci=null,Ve=null,Se=!1,un=null,Wi=!1,Cr=Error(s(519));function dn(e){var i=Error(s(418,""));throw Gl(Ri(i,e)),Cr}function Hh(e){var i=e.stateNode,n=e.type,a=e.memoizedProps;switch(i[li]=e,i[di]=a,n){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(n=0;n<fa.length;n++)ve(fa[n],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),th(i,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),no(i);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),lh(i,a.value,a.defaultValue,a.children),no(i)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||i.textContent===""+n||a.suppressHydrationWarning===!0||am(i.textContent,n)?(a.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),a.onScroll!=null&&ve("scroll",i),a.onScrollEnd!=null&&ve("scrollend",i),a.onClick!=null&&(i.onclick=$o),i=!0):i=!1,i||dn(e)}function Nh(e){for(ci=e.return;ci;)switch(ci.tag){case 5:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:ci=ci.return}}function Nl(e){if(e!==ci)return!1;if(!Se)return Nh(e),Se=!0,!1;var i=e.tag,n;if((n=i!==3&&i!==27)&&((n=i===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Vc(e.type,e.memoizedProps)),n=!n),n&&Ve&&dn(e),Nh(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(i===0){Ve=Ni(e.nextSibling);break e}i--}else n!=="$"&&n!=="$!"&&n!=="$?"||i++;e=e.nextSibling}Ve=null}}else i===27?(i=Ve,Gt(e.type)?(e=qc,qc=null,Ve=e):Ve=i):Ve=ci?Ni(e.stateNode.nextSibling):null;return!0}function ql(){Ve=ci=null,Se=!1}function qh(){var e=un;return e!==null&&(mi===null?mi=e:mi.push.apply(mi,e),un=null),e}function Gl(e){un===null?un=[e]:un.push(e)}var Ar=G(null),hn=null,ut=null;function kt(e,i,n){Z(Ar,i._currentValue),i._currentValue=n}function dt(e){e._currentValue=Ar.current,$(Ar)}function Tr(e,i,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),e===n)break;e=e.return}}function jr(e,i,n,a){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;e:for(;d!==null;){var x=d;d=u;for(var A=0;A<i.length;A++)if(x.context===i[A]){d.lanes|=n,x=d.alternate,x!==null&&(x.lanes|=n),Tr(d.return,n,e),a||(v=null);break e}d=x.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=n,d=v.alternate,d!==null&&(d.lanes|=n),Tr(v,n,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Yl(e,i,n,a){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var x=u.type;xi(u.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(u===yi.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(xa):e=[xa])}u=u.return}e!==null&&jr(i,e,n,a),i.flags|=262144}function bo(e){for(e=e.firstContext;e!==null;){if(!xi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){hn=e,ut=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ai(e){return Gh(hn,e)}function xo(e,i){return hn===null&&pn(e),Gh(e,i)}function Gh(e,i){var n=i._currentValue;if(i={context:i,memoizedValue:n,next:null},ut===null){if(e===null)throw Error(s(308));ut=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ut=ut.next=i;return n}var Ab=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){i.aborted=!0,e.forEach(function(n){return n()})}},Tb=t.unstable_scheduleCallback,jb=t.unstable_NormalPriority,We={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Er(){return{controller:new Ab,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&Tb(jb,function(){e.controller.abort()})}var Wl=null,Mr=0,Wn=0,Kn=null;function Eb(e,i){if(Wl===null){var n=Wl=[];Mr=0,Wn=Rc(),Kn={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Mr++,i.then(Yh,Yh),i}function Yh(){if(--Mr===0&&Wl!==null){Kn!==null&&(Kn.status="fulfilled");var e=Wl;Wl=null,Wn=0,Kn=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Mb(e,i){var n=[],a={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){a.status="fulfilled",a.value=i;for(var u=0;u<n.length;u++)(0,n[u])(i)},function(u){for(a.status="rejected",a.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),a}var Ih=U.S;U.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Eb(e,i),Ih!==null&&Ih(e,i)};var fn=G(null);function kr(){var e=fn.current;return e!==null?e:De.pooledCache}function wo(e,i){i===null?Z(fn,fn.current):Z(fn,i.pool)}function Wh(){var e=kr();return e===null?null:{parent:We._currentValue,pool:e}}var Kl=Error(s(460)),Kh=Error(s(474)),So=Error(s(542)),Rr={then:function(){}};function Xh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Co(){}function Qh(e,i,n){switch(n=e[n],n===void 0?e.push(i):n!==i&&(i.then(Co,Co),i=n),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$h(e),e;default:if(typeof i.status=="string")i.then(Co,Co);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(a){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=a}},function(a){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=a}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$h(e),e}throw Xl=i,Kl}}var Xl=null;function Zh(){if(Xl===null)throw Error(s(459));var e=Xl;return Xl=null,e}function $h(e){if(e===Kl||e===So)throw Error(s(483))}var Rt=!1;function Dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Br(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Dt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(e,i,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var u=a.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i,i=mo(e),Uh(e,null,n),i}return fo(e,a,i,n),mo(e)}function Ql(e,i,n){if(i=i.updateQueue,i!==null&&(i=i.shared,(n&4194048)!==0)){var a=i.lanes;a&=e.pendingLanes,n|=a,i.lanes=n,Yd(e,n)}}function zr(e,i){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var u=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,n=n.next}while(n!==null);d===null?u=d=i:d=d.next=i}else u=d=i;n={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=i:e.next=i,n.lastBaseUpdate=i}var Or=!1;function Zl(){if(Or){var e=Kn;if(e!==null)throw e}}function $l(e,i,n,a){Or=!1;var u=e.updateQueue;Rt=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,x=u.shared.pending;if(x!==null){u.shared.pending=null;var A=x,O=A.next;A.next=null,v===null?d=O:v.next=O,v=A;var F=e.alternate;F!==null&&(F=F.updateQueue,x=F.lastBaseUpdate,x!==v&&(x===null?F.firstBaseUpdate=O:x.next=O,F.lastBaseUpdate=A))}if(d!==null){var q=u.baseState;v=0,F=O=A=null,x=d;do{var P=x.lane&-536870913,_=P!==x.lane;if(_?(be&P)===P:(a&P)===P){P!==0&&P===Wn&&(Or=!0),F!==null&&(F=F.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var se=e,ae=x;P=i;var ke=n;switch(ae.tag){case 1:if(se=ae.payload,typeof se=="function"){q=se.call(ke,q,P);break e}q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ae.payload,P=typeof se=="function"?se.call(ke,q,P):se,P==null)break e;q=y({},q,P);break e;case 2:Rt=!0}}P=x.callback,P!==null&&(e.flags|=64,_&&(e.flags|=8192),_=u.callbacks,_===null?u.callbacks=[P]:_.push(P))}else _={lane:P,tag:x.tag,payload:x.payload,callback:x.callback,next:null},F===null?(O=F=_,A=q):F=F.next=_,v|=P;if(x=x.next,x===null){if(x=u.shared.pending,x===null)break;_=x,x=_.next,_.next=null,u.lastBaseUpdate=_,u.shared.pending=null}}while(!0);F===null&&(A=q),u.baseState=A,u.firstBaseUpdate=O,u.lastBaseUpdate=F,d===null&&(u.shared.lanes=0),Ft|=v,e.lanes=v,e.memoizedState=q}}function Jh(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function ep(e,i){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Jh(n[e],i)}var Xn=G(null),Ao=G(0);function ip(e,i){e=vt,Z(Ao,e),Z(Xn,i),vt=e|i.baseLanes}function Pr(){Z(Ao,vt),Z(Xn,Xn.current)}function Lr(){vt=Ao.current,$(Xn),$(Ao)}var zt=0,fe=null,Ee=null,Ye=null,To=!1,Qn=!1,mn=!1,jo=0,Jl=0,Zn=null,kb=0;function Ne(){throw Error(s(321))}function _r(e,i){if(i===null)return!1;for(var n=0;n<i.length&&n<e.length;n++)if(!xi(e[n],i[n]))return!1;return!0}function Ur(e,i,n,a,u,d){return zt=d,fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,U.H=e===null||e.memoizedState===null?Up:Vp,mn=!1,d=n(a,u),mn=!1,Qn&&(d=np(i,n,a,u)),tp(e),d}function tp(e){U.H=Bo;var i=Ee!==null&&Ee.next!==null;if(zt=0,Ye=Ee=fe=null,To=!1,Jl=0,Zn=null,i)throw Error(s(300));e===null||Ze||(e=e.dependencies,e!==null&&bo(e)&&(Ze=!0))}function np(e,i,n,a){fe=e;var u=0;do{if(Qn&&(Zn=null),Jl=0,Qn=!1,25<=u)throw Error(s(301));if(u+=1,Ye=Ee=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=Lb,d=i(n,a)}while(Qn);return d}function Rb(){var e=U.H,i=e.useState()[0];return i=typeof i.then=="function"?ea(i):i,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(fe.flags|=1024),i}function Vr(){var e=jo!==0;return jo=0,e}function Fr(e,i,n){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~n}function Hr(e){if(To){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}To=!1}zt=0,Ye=Ee=fe=null,Qn=!1,Jl=jo=0,Zn=null}function pi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?fe.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ie(){if(Ee===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var i=Ye===null?fe.memoizedState:Ye.next;if(i!==null)Ye=i,Ee=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ye===null?fe.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Nr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ea(e){var i=Jl;return Jl+=1,Zn===null&&(Zn=[]),e=Qh(Zn,e,i),i=fe,(Ye===null?i.memoizedState:Ye.next)===null&&(i=i.alternate,U.H=i===null||i.memoizedState===null?Up:Vp),e}function Eo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ea(e);if(e.$$typeof===z)return ai(e)}throw Error(s(438,String(e)))}function qr(e){var i=null,n=fe.updateQueue;if(n!==null&&(i=n.memoCache),i==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(i={data:a.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),n===null&&(n=Nr(),fe.updateQueue=n),n.memoCache=i,n=i.data[i.index],n===void 0)for(n=i.data[i.index]=Array(e),a=0;a<e;a++)n[a]=X;return i.index++,n}function ht(e,i){return typeof i=="function"?i(e):i}function Mo(e){var i=Ie();return Gr(i,Ee,e)}function Gr(e,i,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var u=e.baseQueue,d=a.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}i.baseQueue=u=d,a.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var x=v=null,A=null,O=i,F=!1;do{var q=O.lane&-536870913;if(q!==O.lane?(be&q)===q:(zt&q)===q){var P=O.revertLane;if(P===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),q===Wn&&(F=!0);else if((zt&P)===P){O=O.next,P===Wn&&(F=!0);continue}else q={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},A===null?(x=A=q,v=d):A=A.next=q,fe.lanes|=P,Ft|=P;q=O.action,mn&&n(d,q),d=O.hasEagerState?O.eagerState:n(d,q)}else P={lane:q,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},A===null?(x=A=P,v=d):A=A.next=P,fe.lanes|=q,Ft|=q;O=O.next}while(O!==null&&O!==i);if(A===null?v=d:A.next=x,!xi(d,e.memoizedState)&&(Ze=!0,F&&(n=Kn,n!==null)))throw n;e.memoizedState=d,e.baseState=v,e.baseQueue=A,a.lastRenderedState=d}return u===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Yr(e){var i=Ie(),n=i.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,u=n.pending,d=i.memoizedState;if(u!==null){n.pending=null;var v=u=u.next;do d=e(d,v.action),v=v.next;while(v!==u);xi(d,i.memoizedState)||(Ze=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),n.lastRenderedState=d}return[d,a]}function lp(e,i,n){var a=fe,u=Ie(),d=Se;if(d){if(n===void 0)throw Error(s(407));n=n()}else n=i();var v=!xi((Ee||u).memoizedState,n);v&&(u.memoizedState=n,Ze=!0),u=u.queue;var x=sp.bind(null,a,u,e);if(ia(2048,8,x,[e]),u.getSnapshot!==i||v||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,$n(9,ko(),op.bind(null,a,u,n,i),null),De===null)throw Error(s(349));d||(zt&124)!==0||ap(a,i,n)}return n}function ap(e,i,n){e.flags|=16384,e={getSnapshot:i,value:n},i=fe.updateQueue,i===null?(i=Nr(),fe.updateQueue=i,i.stores=[e]):(n=i.stores,n===null?i.stores=[e]:n.push(e))}function op(e,i,n,a){i.value=n,i.getSnapshot=a,rp(i)&&cp(e)}function sp(e,i,n){return n(function(){rp(i)&&cp(e)})}function rp(e){var i=e.getSnapshot;e=e.value;try{var n=i();return!xi(e,n)}catch{return!0}}function cp(e){var i=qn(e,2);i!==null&&ji(i,e,2)}function Ir(e){var i=pi();if(typeof e=="function"){var n=e;if(e=n(),mn){jt(!0);try{n()}finally{jt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:e},i}function up(e,i,n,a){return e.baseState=n,Gr(e,Ee,typeof a=="function"?a:ht)}function Db(e,i,n,a,u){if(Do(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};U.T!==null?n(!0):d.isTransition=!1,a(d),n=i.pending,n===null?(d.next=i.pending=d,dp(i,d)):(d.next=n.next,i.pending=n.next=d)}}function dp(e,i){var n=i.action,a=i.payload,u=e.state;if(i.isTransition){var d=U.T,v={};U.T=v;try{var x=n(u,a),A=U.S;A!==null&&A(v,x),hp(e,i,x)}catch(O){Wr(e,i,O)}finally{U.T=d}}else try{d=n(u,a),hp(e,i,d)}catch(O){Wr(e,i,O)}}function hp(e,i,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){pp(e,i,a)},function(a){return Wr(e,i,a)}):pp(e,i,n)}function pp(e,i,n){i.status="fulfilled",i.value=n,fp(i),e.state=n,i=e.pending,i!==null&&(n=i.next,n===i?e.pending=null:(n=n.next,i.next=n,dp(e,n)))}function Wr(e,i,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do i.status="rejected",i.reason=n,fp(i),i=i.next;while(i!==a)}e.action=null}function fp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function mp(e,i){return i}function gp(e,i){if(Se){var n=De.formState;if(n!==null){e:{var a=fe;if(Se){if(Ve){i:{for(var u=Ve,d=Wi;u.nodeType!==8;){if(!d){u=null;break i}if(u=Ni(u.nextSibling),u===null){u=null;break i}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ve=Ni(u.nextSibling),a=u.data==="F!";break e}}dn(a)}a=!1}a&&(i=n[0])}}return n=pi(),n.memoizedState=n.baseState=i,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mp,lastRenderedState:i},n.queue=a,n=Pp.bind(null,fe,a),a.dispatch=n,a=Ir(!1),d=$r.bind(null,fe,!1,a.queue),a=pi(),u={state:i,dispatch:null,action:e,pending:null},a.queue=u,n=Db.bind(null,fe,u,d,n),u.dispatch=n,a.memoizedState=e,[i,n,!1]}function yp(e){var i=Ie();return vp(i,Ee,e)}function vp(e,i,n){if(i=Gr(e,i,mp)[0],e=Mo(ht)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var a=ea(i)}catch(v){throw v===Kl?So:v}else a=i;i=Ie();var u=i.queue,d=u.dispatch;return n!==i.memoizedState&&(fe.flags|=2048,$n(9,ko(),Bb.bind(null,u,n),null)),[a,d,e]}function Bb(e,i){e.action=i}function bp(e){var i=Ie(),n=Ee;if(n!==null)return vp(i,n,e);Ie(),i=i.memoizedState,n=Ie();var a=n.queue.dispatch;return n.memoizedState=e,[i,a,!1]}function $n(e,i,n,a){return e={tag:e,create:n,deps:a,inst:i,next:null},i=fe.updateQueue,i===null&&(i=Nr(),fe.updateQueue=i),n=i.lastEffect,n===null?i.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,i.lastEffect=e),e}function ko(){return{destroy:void 0,resource:void 0}}function xp(){return Ie().memoizedState}function Ro(e,i,n,a){var u=pi();a=a===void 0?null:a,fe.flags|=e,u.memoizedState=$n(1|i,ko(),n,a)}function ia(e,i,n,a){var u=Ie();a=a===void 0?null:a;var d=u.memoizedState.inst;Ee!==null&&a!==null&&_r(a,Ee.memoizedState.deps)?u.memoizedState=$n(i,d,n,a):(fe.flags|=e,u.memoizedState=$n(1|i,d,n,a))}function wp(e,i){Ro(8390656,8,e,i)}function Sp(e,i){ia(2048,8,e,i)}function Cp(e,i){return ia(4,2,e,i)}function Ap(e,i){return ia(4,4,e,i)}function Tp(e,i){if(typeof i=="function"){e=e();var n=i(e);return function(){typeof n=="function"?n():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function jp(e,i,n){n=n!=null?n.concat([e]):null,ia(4,4,Tp.bind(null,i,e),n)}function Kr(){}function Ep(e,i){var n=Ie();i=i===void 0?null:i;var a=n.memoizedState;return i!==null&&_r(i,a[1])?a[0]:(n.memoizedState=[e,i],e)}function Mp(e,i){var n=Ie();i=i===void 0?null:i;var a=n.memoizedState;if(i!==null&&_r(i,a[1]))return a[0];if(a=e(),mn){jt(!0);try{e()}finally{jt(!1)}}return n.memoizedState=[a,i],a}function Xr(e,i,n){return n===void 0||(zt&1073741824)!==0?e.memoizedState=i:(e.memoizedState=n,e=Bf(),fe.lanes|=e,Ft|=e,n)}function kp(e,i,n,a){return xi(n,i)?n:Xn.current!==null?(e=Xr(e,n,a),xi(e,i)||(Ze=!0),e):(zt&42)===0?(Ze=!0,e.memoizedState=n):(e=Bf(),fe.lanes|=e,Ft|=e,i)}function Rp(e,i,n,a,u){var d=I.p;I.p=d!==0&&8>d?d:8;var v=U.T,x={};U.T=x,$r(e,!1,i,n);try{var A=u(),O=U.S;if(O!==null&&O(x,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=Mb(A,a);ta(e,i,F,Ti(e))}else ta(e,i,a,Ti(e))}catch(q){ta(e,i,{then:function(){},status:"rejected",reason:q},Ti())}finally{I.p=d,U.T=v}}function zb(){}function Qr(e,i,n,a){if(e.tag!==5)throw Error(s(476));var u=Dp(e).queue;Rp(e,u,i,J,n===null?zb:function(){return Bp(e),n(a)})}function Dp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:J},next:null};var n={};return i.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ht,lastRenderedState:n},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Bp(e){var i=Dp(e).next.queue;ta(e,i,{},Ti())}function Zr(){return ai(xa)}function zp(){return Ie().memoizedState}function Op(){return Ie().memoizedState}function Ob(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var n=Ti();e=Dt(n);var a=Bt(i,e,n);a!==null&&(ji(a,i,n),Ql(a,i,n)),i={cache:Er()},e.payload=i;return}i=i.return}}function Pb(e,i,n){var a=Ti();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Do(e)?Lp(i,n):(n=yr(e,i,n,a),n!==null&&(ji(n,e,a),_p(n,i,a)))}function Pp(e,i,n){var a=Ti();ta(e,i,n,a)}function ta(e,i,n,a){var u={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Do(e))Lp(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,x=d(v,n);if(u.hasEagerState=!0,u.eagerState=x,xi(x,v))return fo(e,i,u,0),De===null&&po(),!1}catch{}finally{}if(n=yr(e,i,u,a),n!==null)return ji(n,e,a),_p(n,i,a),!0}return!1}function $r(e,i,n,a){if(a={lane:2,revertLane:Rc(),action:a,hasEagerState:!1,eagerState:null,next:null},Do(e)){if(i)throw Error(s(479))}else i=yr(e,n,a,2),i!==null&&ji(i,e,2)}function Do(e){var i=e.alternate;return e===fe||i!==null&&i===fe}function Lp(e,i){Qn=To=!0;var n=e.pending;n===null?i.next=i:(i.next=n.next,n.next=i),e.pending=i}function _p(e,i,n){if((n&4194048)!==0){var a=i.lanes;a&=e.pendingLanes,n|=a,i.lanes=n,Yd(e,n)}}var Bo={readContext:ai,use:Eo,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne},Up={readContext:ai,use:Eo,useCallback:function(e,i){return pi().memoizedState=[e,i===void 0?null:i],e},useContext:ai,useEffect:wp,useImperativeHandle:function(e,i,n){n=n!=null?n.concat([e]):null,Ro(4194308,4,Tp.bind(null,i,e),n)},useLayoutEffect:function(e,i){return Ro(4194308,4,e,i)},useInsertionEffect:function(e,i){Ro(4,2,e,i)},useMemo:function(e,i){var n=pi();i=i===void 0?null:i;var a=e();if(mn){jt(!0);try{e()}finally{jt(!1)}}return n.memoizedState=[a,i],a},useReducer:function(e,i,n){var a=pi();if(n!==void 0){var u=n(i);if(mn){jt(!0);try{n(i)}finally{jt(!1)}}}else u=i;return a.memoizedState=a.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},a.queue=e,e=e.dispatch=Pb.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var i=pi();return e={current:e},i.memoizedState=e},useState:function(e){e=Ir(e);var i=e.queue,n=Pp.bind(null,fe,i);return i.dispatch=n,[e.memoizedState,n]},useDebugValue:Kr,useDeferredValue:function(e,i){var n=pi();return Xr(n,e,i)},useTransition:function(){var e=Ir(!1);return e=Rp.bind(null,fe,e.queue,!0,!1),pi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,n){var a=fe,u=pi();if(Se){if(n===void 0)throw Error(s(407));n=n()}else{if(n=i(),De===null)throw Error(s(349));(be&124)!==0||ap(a,i,n)}u.memoizedState=n;var d={value:n,getSnapshot:i};return u.queue=d,wp(sp.bind(null,a,d,e),[e]),a.flags|=2048,$n(9,ko(),op.bind(null,a,d,n,i),null),n},useId:function(){var e=pi(),i=De.identifierPrefix;if(Se){var n=ct,a=rt;n=(a&~(1<<32-bi(a)-1)).toString(32)+n,i="«"+i+"R"+n,n=jo++,0<n&&(i+="H"+n.toString(32)),i+="»"}else n=kb++,i="«"+i+"r"+n.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Zr,useFormState:gp,useActionState:gp,useOptimistic:function(e){var i=pi();i.memoizedState=i.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=n,i=$r.bind(null,fe,!0,n),n.dispatch=i,[e,i]},useMemoCache:qr,useCacheRefresh:function(){return pi().memoizedState=Ob.bind(null,fe)}},Vp={readContext:ai,use:Eo,useCallback:Ep,useContext:ai,useEffect:Sp,useImperativeHandle:jp,useInsertionEffect:Cp,useLayoutEffect:Ap,useMemo:Mp,useReducer:Mo,useRef:xp,useState:function(){return Mo(ht)},useDebugValue:Kr,useDeferredValue:function(e,i){var n=Ie();return kp(n,Ee.memoizedState,e,i)},useTransition:function(){var e=Mo(ht)[0],i=Ie().memoizedState;return[typeof e=="boolean"?e:ea(e),i]},useSyncExternalStore:lp,useId:zp,useHostTransitionStatus:Zr,useFormState:yp,useActionState:yp,useOptimistic:function(e,i){var n=Ie();return up(n,Ee,e,i)},useMemoCache:qr,useCacheRefresh:Op},Lb={readContext:ai,use:Eo,useCallback:Ep,useContext:ai,useEffect:Sp,useImperativeHandle:jp,useInsertionEffect:Cp,useLayoutEffect:Ap,useMemo:Mp,useReducer:Yr,useRef:xp,useState:function(){return Yr(ht)},useDebugValue:Kr,useDeferredValue:function(e,i){var n=Ie();return Ee===null?Xr(n,e,i):kp(n,Ee.memoizedState,e,i)},useTransition:function(){var e=Yr(ht)[0],i=Ie().memoizedState;return[typeof e=="boolean"?e:ea(e),i]},useSyncExternalStore:lp,useId:zp,useHostTransitionStatus:Zr,useFormState:bp,useActionState:bp,useOptimistic:function(e,i){var n=Ie();return Ee!==null?up(n,Ee,e,i):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:qr,useCacheRefresh:Op},Jn=null,na=0;function zo(e){var i=na;return na+=1,Jn===null&&(Jn=[]),Qh(Jn,e,i)}function la(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Oo(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Fp(e){var i=e._init;return i(e._payload)}function Hp(e){function i(k,E){if(e){var B=k.deletions;B===null?(k.deletions=[E],k.flags|=16):B.push(E)}}function n(k,E){if(!e)return null;for(;E!==null;)i(k,E),E=E.sibling;return null}function a(k){for(var E=new Map;k!==null;)k.key!==null?E.set(k.key,k):E.set(k.index,k),k=k.sibling;return E}function u(k,E){return k=st(k,E),k.index=0,k.sibling=null,k}function d(k,E,B){return k.index=B,e?(B=k.alternate,B!==null?(B=B.index,B<E?(k.flags|=67108866,E):B):(k.flags|=67108866,E)):(k.flags|=1048576,E)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function x(k,E,B,H){return E===null||E.tag!==6?(E=br(B,k.mode,H),E.return=k,E):(E=u(E,B),E.return=k,E)}function A(k,E,B,H){var ee=B.type;return ee===C?F(k,E,B.props.children,H,B.key):E!==null&&(E.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Q&&Fp(ee)===E.type)?(E=u(E,B.props),la(E,B),E.return=k,E):(E=go(B.type,B.key,B.props,null,k.mode,H),la(E,B),E.return=k,E)}function O(k,E,B,H){return E===null||E.tag!==4||E.stateNode.containerInfo!==B.containerInfo||E.stateNode.implementation!==B.implementation?(E=xr(B,k.mode,H),E.return=k,E):(E=u(E,B.children||[]),E.return=k,E)}function F(k,E,B,H,ee){return E===null||E.tag!==7?(E=sn(B,k.mode,H,ee),E.return=k,E):(E=u(E,B),E.return=k,E)}function q(k,E,B){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=br(""+E,k.mode,B),E.return=k,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return B=go(E.type,E.key,E.props,null,k.mode,B),la(B,E),B.return=k,B;case S:return E=xr(E,k.mode,B),E.return=k,E;case Q:var H=E._init;return E=H(E._payload),q(k,E,B)}if(Ae(E)||ne(E))return E=sn(E,k.mode,B,null),E.return=k,E;if(typeof E.then=="function")return q(k,zo(E),B);if(E.$$typeof===z)return q(k,xo(k,E),B);Oo(k,E)}return null}function P(k,E,B,H){var ee=E!==null?E.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ee!==null?null:x(k,E,""+B,H);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===ee?A(k,E,B,H):null;case S:return B.key===ee?O(k,E,B,H):null;case Q:return ee=B._init,B=ee(B._payload),P(k,E,B,H)}if(Ae(B)||ne(B))return ee!==null?null:F(k,E,B,H,null);if(typeof B.then=="function")return P(k,E,zo(B),H);if(B.$$typeof===z)return P(k,E,xo(k,B),H);Oo(k,B)}return null}function _(k,E,B,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return k=k.get(B)||null,x(E,k,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case w:return k=k.get(H.key===null?B:H.key)||null,A(E,k,H,ee);case S:return k=k.get(H.key===null?B:H.key)||null,O(E,k,H,ee);case Q:var me=H._init;return H=me(H._payload),_(k,E,B,H,ee)}if(Ae(H)||ne(H))return k=k.get(B)||null,F(E,k,H,ee,null);if(typeof H.then=="function")return _(k,E,B,zo(H),ee);if(H.$$typeof===z)return _(k,E,B,xo(E,H),ee);Oo(E,H)}return null}function se(k,E,B,H){for(var ee=null,me=null,te=E,oe=E=0,Je=null;te!==null&&oe<B.length;oe++){te.index>oe?(Je=te,te=null):Je=te.sibling;var we=P(k,te,B[oe],H);if(we===null){te===null&&(te=Je);break}e&&te&&we.alternate===null&&i(k,te),E=d(we,E,oe),me===null?ee=we:me.sibling=we,me=we,te=Je}if(oe===B.length)return n(k,te),Se&&cn(k,oe),ee;if(te===null){for(;oe<B.length;oe++)te=q(k,B[oe],H),te!==null&&(E=d(te,E,oe),me===null?ee=te:me.sibling=te,me=te);return Se&&cn(k,oe),ee}for(te=a(te);oe<B.length;oe++)Je=_(te,k,oe,B[oe],H),Je!==null&&(e&&Je.alternate!==null&&te.delete(Je.key===null?oe:Je.key),E=d(Je,E,oe),me===null?ee=Je:me.sibling=Je,me=Je);return e&&te.forEach(function(Xt){return i(k,Xt)}),Se&&cn(k,oe),ee}function ae(k,E,B,H){if(B==null)throw Error(s(151));for(var ee=null,me=null,te=E,oe=E=0,Je=null,we=B.next();te!==null&&!we.done;oe++,we=B.next()){te.index>oe?(Je=te,te=null):Je=te.sibling;var Xt=P(k,te,we.value,H);if(Xt===null){te===null&&(te=Je);break}e&&te&&Xt.alternate===null&&i(k,te),E=d(Xt,E,oe),me===null?ee=Xt:me.sibling=Xt,me=Xt,te=Je}if(we.done)return n(k,te),Se&&cn(k,oe),ee;if(te===null){for(;!we.done;oe++,we=B.next())we=q(k,we.value,H),we!==null&&(E=d(we,E,oe),me===null?ee=we:me.sibling=we,me=we);return Se&&cn(k,oe),ee}for(te=a(te);!we.done;oe++,we=B.next())we=_(te,k,oe,we.value,H),we!==null&&(e&&we.alternate!==null&&te.delete(we.key===null?oe:we.key),E=d(we,E,oe),me===null?ee=we:me.sibling=we,me=we);return e&&te.forEach(function(_x){return i(k,_x)}),Se&&cn(k,oe),ee}function ke(k,E,B,H){if(typeof B=="object"&&B!==null&&B.type===C&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var ee=B.key;E!==null;){if(E.key===ee){if(ee=B.type,ee===C){if(E.tag===7){n(k,E.sibling),H=u(E,B.props.children),H.return=k,k=H;break e}}else if(E.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Q&&Fp(ee)===E.type){n(k,E.sibling),H=u(E,B.props),la(H,B),H.return=k,k=H;break e}n(k,E);break}else i(k,E);E=E.sibling}B.type===C?(H=sn(B.props.children,k.mode,H,B.key),H.return=k,k=H):(H=go(B.type,B.key,B.props,null,k.mode,H),la(H,B),H.return=k,k=H)}return v(k);case S:e:{for(ee=B.key;E!==null;){if(E.key===ee)if(E.tag===4&&E.stateNode.containerInfo===B.containerInfo&&E.stateNode.implementation===B.implementation){n(k,E.sibling),H=u(E,B.children||[]),H.return=k,k=H;break e}else{n(k,E);break}else i(k,E);E=E.sibling}H=xr(B,k.mode,H),H.return=k,k=H}return v(k);case Q:return ee=B._init,B=ee(B._payload),ke(k,E,B,H)}if(Ae(B))return se(k,E,B,H);if(ne(B)){if(ee=ne(B),typeof ee!="function")throw Error(s(150));return B=ee.call(B),ae(k,E,B,H)}if(typeof B.then=="function")return ke(k,E,zo(B),H);if(B.$$typeof===z)return ke(k,E,xo(k,B),H);Oo(k,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,E!==null&&E.tag===6?(n(k,E.sibling),H=u(E,B),H.return=k,k=H):(n(k,E),H=br(B,k.mode,H),H.return=k,k=H),v(k)):n(k,E)}return function(k,E,B,H){try{na=0;var ee=ke(k,E,B,H);return Jn=null,ee}catch(te){if(te===Kl||te===So)throw te;var me=wi(29,te,null,k.mode);return me.lanes=H,me.return=k,me}finally{}}}var el=Hp(!0),Np=Hp(!1),Oi=G(null),Ki=null;function Ot(e){var i=e.alternate;Z(Ke,Ke.current&1),Z(Oi,e),Ki===null&&(i===null||Xn.current!==null||i.memoizedState!==null)&&(Ki=e)}function qp(e){if(e.tag===22){if(Z(Ke,Ke.current),Z(Oi,e),Ki===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ki=e)}}else Pt()}function Pt(){Z(Ke,Ke.current),Z(Oi,Oi.current)}function pt(e){$(Oi),Ki===e&&(Ki=null),$(Ke)}var Ke=G(0);function Po(e){for(var i=e;i!==null;){if(i.tag===13){var n=i.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Nc(n)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Jr(e,i,n,a){i=e.memoizedState,n=n(a,i),n=n==null?i:y({},i,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ec={enqueueSetState:function(e,i,n){e=e._reactInternals;var a=Ti(),u=Dt(a);u.payload=i,n!=null&&(u.callback=n),i=Bt(e,u,a),i!==null&&(ji(i,e,a),Ql(i,e,a))},enqueueReplaceState:function(e,i,n){e=e._reactInternals;var a=Ti(),u=Dt(a);u.tag=1,u.payload=i,n!=null&&(u.callback=n),i=Bt(e,u,a),i!==null&&(ji(i,e,a),Ql(i,e,a))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var n=Ti(),a=Dt(n);a.tag=2,i!=null&&(a.callback=i),i=Bt(e,a,n),i!==null&&(ji(i,e,n),Ql(i,e,n))}};function Gp(e,i,n,a,u,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,v):i.prototype&&i.prototype.isPureReactComponent?!Fl(n,a)||!Fl(u,d):!0}function Yp(e,i,n,a){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(n,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(n,a),i.state!==e&&ec.enqueueReplaceState(i,i.state,null)}function gn(e,i){var n=i;if("ref"in i){n={};for(var a in i)a!=="ref"&&(n[a]=i[a])}if(e=e.defaultProps){n===i&&(n=y({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}var Lo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ip(e){Lo(e)}function Wp(e){console.error(e)}function Kp(e){Lo(e)}function _o(e,i){try{var n=e.onUncaughtError;n(i.value,{componentStack:i.stack})}catch(a){setTimeout(function(){throw a})}}function Xp(e,i,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ic(e,i,n){return n=Dt(n),n.tag=3,n.payload={element:null},n.callback=function(){_o(e,i)},n}function Qp(e){return e=Dt(e),e.tag=3,e}function Zp(e,i,n,a){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=a.value;e.payload=function(){return u(d)},e.callback=function(){Xp(i,n,a)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Xp(i,n,a),typeof u!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var x=a.stack;this.componentDidCatch(a.value,{componentStack:x!==null?x:""})})}function _b(e,i,n,a,u){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(i=n.alternate,i!==null&&Yl(i,n,u,!0),n=Oi.current,n!==null){switch(n.tag){case 13:return Ki===null?Tc():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=u,a===Rr?n.flags|=16384:(i=n.updateQueue,i===null?n.updateQueue=new Set([a]):i.add(a),Ec(e,a,u)),!1;case 22:return n.flags|=65536,a===Rr?n.flags|=16384:(i=n.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=i):(n=i.retryQueue,n===null?i.retryQueue=new Set([a]):n.add(a)),Ec(e,a,u)),!1}throw Error(s(435,n.tag))}return Ec(e,a,u),Tc(),!1}if(Se)return i=Oi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,a!==Cr&&(e=Error(s(422),{cause:a}),Gl(Ri(e,n)))):(a!==Cr&&(i=Error(s(423),{cause:a}),Gl(Ri(i,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,a=Ri(a,n),u=ic(e.stateNode,a,u),zr(e,u),Fe!==4&&(Fe=2)),!1;var d=Error(s(520),{cause:a});if(d=Ri(d,n),da===null?da=[d]:da.push(d),Fe!==4&&(Fe=2),i===null)return!0;a=Ri(a,n),n=i;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=ic(n.stateNode,a,e),zr(n,e),!1;case 1:if(i=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ht===null||!Ht.has(d))))return n.flags|=65536,u&=-u,n.lanes|=u,u=Qp(u),Zp(u,e,n,a),zr(n,u),!1}n=n.return}while(n!==null);return!1}var $p=Error(s(461)),Ze=!1;function ei(e,i,n,a){i.child=e===null?Np(i,null,n,a):el(i,e.child,n,a)}function Jp(e,i,n,a,u){n=n.render;var d=i.ref;if("ref"in a){var v={};for(var x in a)x!=="ref"&&(v[x]=a[x])}else v=a;return pn(i),a=Ur(e,i,n,v,d,u),x=Vr(),e!==null&&!Ze?(Fr(e,i,u),ft(e,i,u)):(Se&&x&&wr(i),i.flags|=1,ei(e,i,a,u),i.child)}function ef(e,i,n,a,u){if(e===null){var d=n.type;return typeof d=="function"&&!vr(d)&&d.defaultProps===void 0&&n.compare===null?(i.tag=15,i.type=d,tf(e,i,d,a,u)):(e=go(n.type,null,a,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!cc(e,u)){var v=d.memoizedProps;if(n=n.compare,n=n!==null?n:Fl,n(v,a)&&e.ref===i.ref)return ft(e,i,u)}return i.flags|=1,e=st(d,a),e.ref=i.ref,e.return=i,i.child=e}function tf(e,i,n,a,u){if(e!==null){var d=e.memoizedProps;if(Fl(d,a)&&e.ref===i.ref)if(Ze=!1,i.pendingProps=a=d,cc(e,u))(e.flags&131072)!==0&&(Ze=!0);else return i.lanes=e.lanes,ft(e,i,u)}return tc(e,i,n,a,u)}function nf(e,i,n){var a=i.pendingProps,u=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((i.flags&128)!==0){if(a=d!==null?d.baseLanes|n:n,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~a}else i.childLanes=0,i.child=null;return lf(e,i,a,n)}if((n&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&wo(i,d!==null?d.cachePool:null),d!==null?ip(i,d):Pr(),qp(i);else return i.lanes=i.childLanes=536870912,lf(e,i,d!==null?d.baseLanes|n:n,n)}else d!==null?(wo(i,d.cachePool),ip(i,d),Pt(),i.memoizedState=null):(e!==null&&wo(i,null),Pr(),Pt());return ei(e,i,u,n),i.child}function lf(e,i,n,a){var u=kr();return u=u===null?null:{parent:We._currentValue,pool:u},i.memoizedState={baseLanes:n,cachePool:u},e!==null&&wo(i,null),Pr(),qp(i),e!==null&&Yl(e,i,a,!0),null}function Uo(e,i){var n=i.ref;if(n===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(i.flags|=4194816)}}function tc(e,i,n,a,u){return pn(i),n=Ur(e,i,n,a,void 0,u),a=Vr(),e!==null&&!Ze?(Fr(e,i,u),ft(e,i,u)):(Se&&a&&wr(i),i.flags|=1,ei(e,i,n,u),i.child)}function af(e,i,n,a,u,d){return pn(i),i.updateQueue=null,n=np(i,a,n,u),tp(e),a=Vr(),e!==null&&!Ze?(Fr(e,i,d),ft(e,i,d)):(Se&&a&&wr(i),i.flags|=1,ei(e,i,n,d),i.child)}function of(e,i,n,a,u){if(pn(i),i.stateNode===null){var d=Gn,v=n.contextType;typeof v=="object"&&v!==null&&(d=ai(v)),d=new n(a,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ec,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=a,d.state=i.memoizedState,d.refs={},Dr(i),v=n.contextType,d.context=typeof v=="object"&&v!==null?ai(v):Gn,d.state=i.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(Jr(i,n,v,a),d.state=i.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ec.enqueueReplaceState(d,d.state,null),$l(i,a,d,u),Zl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),a=!0}else if(e===null){d=i.stateNode;var x=i.memoizedProps,A=gn(n,x);d.props=A;var O=d.context,F=n.contextType;v=Gn,typeof F=="object"&&F!==null&&(v=ai(F));var q=n.getDerivedStateFromProps;F=typeof q=="function"||typeof d.getSnapshotBeforeUpdate=="function",x=i.pendingProps!==x,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x||O!==v)&&Yp(i,d,a,v),Rt=!1;var P=i.memoizedState;d.state=P,$l(i,a,d,u),Zl(),O=i.memoizedState,x||P!==O||Rt?(typeof q=="function"&&(Jr(i,n,q,a),O=i.memoizedState),(A=Rt||Gp(i,n,A,a,P,O,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=O),d.props=a,d.state=O,d.context=v,a=A):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{d=i.stateNode,Br(e,i),v=i.memoizedProps,F=gn(n,v),d.props=F,q=i.pendingProps,P=d.context,O=n.contextType,A=Gn,typeof O=="object"&&O!==null&&(A=ai(O)),x=n.getDerivedStateFromProps,(O=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==q||P!==A)&&Yp(i,d,a,A),Rt=!1,P=i.memoizedState,d.state=P,$l(i,a,d,u),Zl();var _=i.memoizedState;v!==q||P!==_||Rt||e!==null&&e.dependencies!==null&&bo(e.dependencies)?(typeof x=="function"&&(Jr(i,n,x,a),_=i.memoizedState),(F=Rt||Gp(i,n,F,a,P,_,A)||e!==null&&e.dependencies!==null&&bo(e.dependencies))?(O||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(a,_,A),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(a,_,A)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=_),d.props=a,d.state=_,d.context=A,a=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&P===e.memoizedState||(i.flags|=1024),a=!1)}return d=a,Uo(e,i),a=(i.flags&128)!==0,d||a?(d=i.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&a?(i.child=el(i,e.child,null,u),i.child=el(i,null,n,u)):ei(e,i,n,u),i.memoizedState=d.state,e=i.child):e=ft(e,i,u),e}function sf(e,i,n,a){return ql(),i.flags|=256,ei(e,i,n,a),i.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:Wh()}}function ac(e,i,n){return e=e!==null?e.childLanes&~n:0,i&&(e|=Pi),e}function rf(e,i,n){var a=i.pendingProps,u=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),v&&(u=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(u?Ot(i):Pt(),Se){var x=Ve,A;if(A=x){e:{for(A=x,x=Wi;A.nodeType!==8;){if(!x){x=null;break e}if(A=Ni(A.nextSibling),A===null){x=null;break e}}x=A}x!==null?(i.memoizedState={dehydrated:x,treeContext:rn!==null?{id:rt,overflow:ct}:null,retryLane:536870912,hydrationErrors:null},A=wi(18,null,null,0),A.stateNode=x,A.return=i,i.child=A,ci=i,Ve=null,A=!0):A=!1}A||dn(i)}if(x=i.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return Nc(x)?i.lanes=32:i.lanes=536870912,null;pt(i)}return x=a.children,a=a.fallback,u?(Pt(),u=i.mode,x=Vo({mode:"hidden",children:x},u),a=sn(a,u,n,null),x.return=i,a.return=i,x.sibling=a,i.child=x,u=i.child,u.memoizedState=lc(n),u.childLanes=ac(e,v,n),i.memoizedState=nc,a):(Ot(i),oc(i,x))}if(A=e.memoizedState,A!==null&&(x=A.dehydrated,x!==null)){if(d)i.flags&256?(Ot(i),i.flags&=-257,i=sc(e,i,n)):i.memoizedState!==null?(Pt(),i.child=e.child,i.flags|=128,i=null):(Pt(),u=a.fallback,x=i.mode,a=Vo({mode:"visible",children:a.children},x),u=sn(u,x,n,null),u.flags|=2,a.return=i,u.return=i,a.sibling=u,i.child=a,el(i,e.child,null,n),a=i.child,a.memoizedState=lc(n),a.childLanes=ac(e,v,n),i.memoizedState=nc,i=u);else if(Ot(i),Nc(x)){if(v=x.nextSibling&&x.nextSibling.dataset,v)var O=v.dgst;v=O,a=Error(s(419)),a.stack="",a.digest=v,Gl({value:a,source:null,stack:null}),i=sc(e,i,n)}else if(Ze||Yl(e,i,n,!1),v=(n&e.childLanes)!==0,Ze||v){if(v=De,v!==null&&(a=n&-n,a=(a&42)!==0?1:qs(a),a=(a&(v.suspendedLanes|n))!==0?0:a,a!==0&&a!==A.retryLane))throw A.retryLane=a,qn(e,a),ji(v,e,a),$p;x.data==="$?"||Tc(),i=sc(e,i,n)}else x.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=A.treeContext,Ve=Ni(x.nextSibling),ci=i,Se=!0,un=null,Wi=!1,e!==null&&(Bi[zi++]=rt,Bi[zi++]=ct,Bi[zi++]=rn,rt=e.id,ct=e.overflow,rn=i),i=oc(i,a.children),i.flags|=4096);return i}return u?(Pt(),u=a.fallback,x=i.mode,A=e.child,O=A.sibling,a=st(A,{mode:"hidden",children:a.children}),a.subtreeFlags=A.subtreeFlags&65011712,O!==null?u=st(O,u):(u=sn(u,x,n,null),u.flags|=2),u.return=i,a.return=i,a.sibling=u,i.child=a,a=u,u=i.child,x=e.child.memoizedState,x===null?x=lc(n):(A=x.cachePool,A!==null?(O=We._currentValue,A=A.parent!==O?{parent:O,pool:O}:A):A=Wh(),x={baseLanes:x.baseLanes|n,cachePool:A}),u.memoizedState=x,u.childLanes=ac(e,v,n),i.memoizedState=nc,a):(Ot(i),n=e.child,e=n.sibling,n=st(n,{mode:"visible",children:a.children}),n.return=i,n.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=n,i.memoizedState=null,n)}function oc(e,i){return i=Vo({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Vo(e,i){return e=wi(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sc(e,i,n){return el(i,e.child,null,n),e=oc(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function cf(e,i,n){e.lanes|=i;var a=e.alternate;a!==null&&(a.lanes|=i),Tr(e.return,i,n)}function rc(e,i,n,a,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=u)}function uf(e,i,n){var a=i.pendingProps,u=a.revealOrder,d=a.tail;if(ei(e,i,a.children,n),a=Ke.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cf(e,n,i);else if(e.tag===19)cf(e,n,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Z(Ke,a),u){case"forwards":for(n=i.child,u=null;n!==null;)e=n.alternate,e!==null&&Po(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=i.child,i.child=null):(u=n.sibling,n.sibling=null),rc(i,!1,u,n,d);break;case"backwards":for(n=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Po(e)===null){i.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}rc(i,!0,n,null,d);break;case"together":rc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ft(e,i,n){if(e!==null&&(i.dependencies=e.dependencies),Ft|=i.lanes,(n&i.childLanes)===0)if(e!==null){if(Yl(e,i,n,!1),(n&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,n=st(e,e.pendingProps),i.child=n,n.return=i;e.sibling!==null;)e=e.sibling,n=n.sibling=st(e,e.pendingProps),n.return=i;n.sibling=null}return i.child}function cc(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&bo(e)))}function Ub(e,i,n){switch(i.tag){case 3:Be(i,i.stateNode.containerInfo),kt(i,We,e.memoizedState.cache),ql();break;case 27:case 5:Us(i);break;case 4:Be(i,i.stateNode.containerInfo);break;case 10:kt(i,i.type,i.memoizedProps.value);break;case 13:var a=i.memoizedState;if(a!==null)return a.dehydrated!==null?(Ot(i),i.flags|=128,null):(n&i.child.childLanes)!==0?rf(e,i,n):(Ot(i),e=ft(e,i,n),e!==null?e.sibling:null);Ot(i);break;case 19:var u=(e.flags&128)!==0;if(a=(n&i.childLanes)!==0,a||(Yl(e,i,n,!1),a=(n&i.childLanes)!==0),u){if(a)return uf(e,i,n);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Z(Ke,Ke.current),a)break;return null;case 22:case 23:return i.lanes=0,nf(e,i,n);case 24:kt(i,We,e.memoizedState.cache)}return ft(e,i,n)}function df(e,i,n){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ze=!0;else{if(!cc(e,n)&&(i.flags&128)===0)return Ze=!1,Ub(e,i,n);Ze=(e.flags&131072)!==0}else Ze=!1,Se&&(i.flags&1048576)!==0&&Fh(i,vo,i.index);switch(i.lanes=0,i.tag){case 16:e:{e=i.pendingProps;var a=i.elementType,u=a._init;if(a=u(a._payload),i.type=a,typeof a=="function")vr(a)?(e=gn(a,e),i.tag=1,i=of(null,i,a,e,n)):(i.tag=0,i=tc(null,i,a,e,n));else{if(a!=null){if(u=a.$$typeof,u===N){i.tag=11,i=Jp(null,i,a,e,n);break e}else if(u===K){i.tag=14,i=ef(null,i,a,e,n);break e}}throw i=Ce(a)||a,Error(s(306,i,""))}}return i;case 0:return tc(e,i,i.type,i.pendingProps,n);case 1:return a=i.type,u=gn(a,i.pendingProps),of(e,i,a,u,n);case 3:e:{if(Be(i,i.stateNode.containerInfo),e===null)throw Error(s(387));a=i.pendingProps;var d=i.memoizedState;u=d.element,Br(e,i),$l(i,a,null,n);var v=i.memoizedState;if(a=v.cache,kt(i,We,a),a!==d.cache&&jr(i,[We],n,!0),Zl(),a=v.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=sf(e,i,a,n);break e}else if(a!==u){u=Ri(Error(s(424)),i),Gl(u),i=sf(e,i,a,n);break e}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ve=Ni(e.firstChild),ci=i,Se=!0,un=null,Wi=!0,n=Np(i,null,a,n),i.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ql(),a===u){i=ft(e,i,n);break e}ei(e,i,a,n)}i=i.child}return i;case 26:return Uo(e,i),e===null?(n=mm(i.type,null,i.pendingProps,null))?i.memoizedState=n:Se||(n=i.type,e=i.pendingProps,a=Jo(de.current).createElement(n),a[li]=i,a[di]=e,ti(a,n,e),Qe(a),i.stateNode=a):i.memoizedState=mm(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Us(i),e===null&&Se&&(a=i.stateNode=hm(i.type,i.pendingProps,de.current),ci=i,Wi=!0,u=Ve,Gt(i.type)?(qc=u,Ve=Ni(a.firstChild)):Ve=u),ei(e,i,i.pendingProps.children,n),Uo(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((u=a=Ve)&&(a=hx(a,i.type,i.pendingProps,Wi),a!==null?(i.stateNode=a,ci=i,Ve=Ni(a.firstChild),Wi=!1,u=!0):u=!1),u||dn(i)),Us(i),u=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,a=d.children,Vc(u,d)?a=null:v!==null&&Vc(u,v)&&(i.flags|=32),i.memoizedState!==null&&(u=Ur(e,i,Rb,null,null,n),xa._currentValue=u),Uo(e,i),ei(e,i,a,n),i.child;case 6:return e===null&&Se&&((e=n=Ve)&&(n=px(n,i.pendingProps,Wi),n!==null?(i.stateNode=n,ci=i,Ve=null,e=!0):e=!1),e||dn(i)),null;case 13:return rf(e,i,n);case 4:return Be(i,i.stateNode.containerInfo),a=i.pendingProps,e===null?i.child=el(i,null,a,n):ei(e,i,a,n),i.child;case 11:return Jp(e,i,i.type,i.pendingProps,n);case 7:return ei(e,i,i.pendingProps,n),i.child;case 8:return ei(e,i,i.pendingProps.children,n),i.child;case 12:return ei(e,i,i.pendingProps.children,n),i.child;case 10:return a=i.pendingProps,kt(i,i.type,a.value),ei(e,i,a.children,n),i.child;case 9:return u=i.type._context,a=i.pendingProps.children,pn(i),u=ai(u),a=a(u),i.flags|=1,ei(e,i,a,n),i.child;case 14:return ef(e,i,i.type,i.pendingProps,n);case 15:return tf(e,i,i.type,i.pendingProps,n);case 19:return uf(e,i,n);case 31:return a=i.pendingProps,n=i.mode,a={mode:a.mode,children:a.children},e===null?(n=Vo(a,n),n.ref=i.ref,i.child=n,n.return=i,i=n):(n=st(e.child,a),n.ref=i.ref,i.child=n,n.return=i,i=n),i;case 22:return nf(e,i,n);case 24:return pn(i),a=ai(We),e===null?(u=kr(),u===null&&(u=De,d=Er(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=n),u=d),i.memoizedState={parent:a,cache:u},Dr(i),kt(i,We,u)):((e.lanes&n)!==0&&(Br(e,i),$l(i,null,null,n),Zl()),u=e.memoizedState,d=i.memoizedState,u.parent!==a?(u={parent:a,cache:a},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),kt(i,We,a)):(a=d.cache,kt(i,We,a),a!==u.cache&&jr(i,[We],n,!0))),ei(e,i,i.pendingProps.children,n),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function mt(e){e.flags|=4}function hf(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xm(i)){if(i=Oi.current,i!==null&&((be&4194048)===be?Ki!==null:(be&62914560)!==be&&(be&536870912)===0||i!==Ki))throw Xl=Rr,Kh;e.flags|=8192}}function Fo(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?qd():536870912,e.lanes|=i,ll|=i)}function aa(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var i=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(i)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,a|=u.subtreeFlags&65011712,a|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=a,e.childLanes=n,i}function Vb(e,i,n){var a=i.pendingProps;switch(Sr(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(i),null;case 1:return Oe(i),null;case 3:return n=i.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),dt(We),Tt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Nl(i)?mt(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,qh())),Oe(i),null;case 26:return n=i.memoizedState,e===null?(mt(i),n!==null?(Oe(i),hf(i,n)):(Oe(i),i.flags&=-16777217)):n?n!==e.memoizedState?(mt(i),Oe(i),hf(i,n)):(Oe(i),i.flags&=-16777217):(e.memoizedProps!==a&&mt(i),Oe(i),i.flags&=-16777217),null;case 27:Qa(i),n=de.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==a&&mt(i);else{if(!a){if(i.stateNode===null)throw Error(s(166));return Oe(i),null}e=le.current,Nl(i)?Hh(i):(e=hm(u,a,n),i.stateNode=e,mt(i))}return Oe(i),null;case 5:if(Qa(i),n=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==a&&mt(i);else{if(!a){if(i.stateNode===null)throw Error(s(166));return Oe(i),null}if(e=le.current,Nl(i))Hh(i);else{switch(u=Jo(de.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}e[li]=i,e[di]=a;e:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break e;for(;u.sibling===null;){if(u.return===null||u.return===i)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;e:switch(ti(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&mt(i)}}return Oe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==a&&mt(i);else{if(typeof a!="string"&&i.stateNode===null)throw Error(s(166));if(e=de.current,Nl(i)){if(e=i.stateNode,n=i.memoizedProps,a=null,u=ci,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}e[li]=i,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||am(e.nodeValue,n)),e||dn(i)}else e=Jo(e).createTextNode(a),e[li]=i,i.stateNode=e}return Oe(i),null;case 13:if(a=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Nl(i),a!==null&&a.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[li]=i}else ql(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Oe(i),u=!1}else u=qh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(pt(i),i):(pt(i),null)}if(pt(i),(i.flags&128)!==0)return i.lanes=n,i;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=i.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var d=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(d=a.memoizedState.cachePool.pool),d!==u&&(a.flags|=2048)}return n!==e&&n&&(i.child.flags|=8192),Fo(i,i.updateQueue),Oe(i),null;case 4:return Tt(),e===null&&Oc(i.stateNode.containerInfo),Oe(i),null;case 10:return dt(i.type),Oe(i),null;case 19:if($(Ke),u=i.memoizedState,u===null)return Oe(i),null;if(a=(i.flags&128)!==0,d=u.rendering,d===null)if(a)aa(u,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Po(e),d!==null){for(i.flags|=128,aa(u,!1),e=d.updateQueue,i.updateQueue=e,Fo(i,e),i.subtreeFlags=0,e=n,n=i.child;n!==null;)Vh(n,e),n=n.sibling;return Z(Ke,Ke.current&1|2),i.child}e=e.sibling}u.tail!==null&&Ii()>qo&&(i.flags|=128,a=!0,aa(u,!1),i.lanes=4194304)}else{if(!a)if(e=Po(d),e!==null){if(i.flags|=128,a=!0,e=e.updateQueue,i.updateQueue=e,Fo(i,e),aa(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Se)return Oe(i),null}else 2*Ii()-u.renderingStartTime>qo&&n!==536870912&&(i.flags|=128,a=!0,aa(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=Ii(),i.sibling=null,e=Ke.current,Z(Ke,a?e&1|2:e&1),i):(Oe(i),null);case 22:case 23:return pt(i),Lr(),a=i.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(i.flags|=8192):a&&(i.flags|=8192),a?(n&536870912)!==0&&(i.flags&128)===0&&(Oe(i),i.subtreeFlags&6&&(i.flags|=8192)):Oe(i),n=i.updateQueue,n!==null&&Fo(i,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==n&&(i.flags|=2048),e!==null&&$(fn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),i.memoizedState.cache!==n&&(i.flags|=2048),dt(We),Oe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Fb(e,i){switch(Sr(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return dt(We),Tt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Qa(i),null;case 13:if(pt(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ql()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(Ke),null;case 4:return Tt(),null;case 10:return dt(i.type),null;case 22:case 23:return pt(i),Lr(),e!==null&&$(fn),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return dt(We),null;case 25:return null;default:return null}}function pf(e,i){switch(Sr(i),i.tag){case 3:dt(We),Tt();break;case 26:case 27:case 5:Qa(i);break;case 4:Tt();break;case 13:pt(i);break;case 19:$(Ke);break;case 10:dt(i.type);break;case 22:case 23:pt(i),Lr(),e!==null&&$(fn);break;case 24:dt(We)}}function oa(e,i){try{var n=i.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var u=a.next;n=u;do{if((n.tag&e)===e){a=void 0;var d=n.create,v=n.inst;a=d(),v.destroy=a}n=n.next}while(n!==u)}}catch(x){Re(i,i.return,x)}}function Lt(e,i,n){try{var a=i.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var d=u.next;a=d;do{if((a.tag&e)===e){var v=a.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,u=i;var A=n,O=x;try{O()}catch(F){Re(u,A,F)}}}a=a.next}while(a!==d)}}catch(F){Re(i,i.return,F)}}function ff(e){var i=e.updateQueue;if(i!==null){var n=e.stateNode;try{ep(i,n)}catch(a){Re(e,e.return,a)}}}function mf(e,i,n){n.props=gn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Re(e,i,a)}}function sa(e,i){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(u){Re(e,i,u)}}function Xi(e,i){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(u){Re(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Re(e,i,u)}else n.current=null}function gf(e){var i=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(u){Re(e,e.return,u)}}function uc(e,i,n){try{var a=e.stateNode;sx(a,e.type,n,i),a[di]=i}catch(u){Re(e,e.return,u)}}function yf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gt(e.type)||e.tag===4}function dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hc(e,i,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,i?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,i):(i=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,i.appendChild(e),n=n._reactRootContainer,n!=null||i.onclick!==null||(i.onclick=$o));else if(a!==4&&(a===27&&Gt(e.type)&&(n=e.stateNode,i=null),e=e.child,e!==null))for(hc(e,i,n),e=e.sibling;e!==null;)hc(e,i,n),e=e.sibling}function Ho(e,i,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,i?n.insertBefore(e,i):n.appendChild(e);else if(a!==4&&(a===27&&Gt(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ho(e,i,n),e=e.sibling;e!==null;)Ho(e,i,n),e=e.sibling}function vf(e){var i=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);ti(i,a,n),i[li]=e,i[di]=n}catch(d){Re(e,e.return,d)}}var gt=!1,qe=!1,pc=!1,bf=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Hb(e,i){if(e=e.containerInfo,_c=as,e=kh(e),dr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var u=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var v=0,x=-1,A=-1,O=0,F=0,q=e,P=null;i:for(;;){for(var _;q!==n||u!==0&&q.nodeType!==3||(x=v+u),q!==d||a!==0&&q.nodeType!==3||(A=v+a),q.nodeType===3&&(v+=q.nodeValue.length),(_=q.firstChild)!==null;)P=q,q=_;for(;;){if(q===e)break i;if(P===n&&++O===u&&(x=v),P===d&&++F===a&&(A=v),(_=q.nextSibling)!==null)break;q=P,P=q.parentNode}q=_}n=x===-1||A===-1?null:{start:x,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:e,selectionRange:n},as=!1,$e=i;$e!==null;)if(i=$e,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,$e=e;else for(;$e!==null;){switch(i=$e,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=i,u=d.memoizedProps,d=d.memoizedState,a=n.stateNode;try{var se=gn(n.type,u,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(se,d),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Re(n,n.return,ae)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,n=e.nodeType,n===9)Hc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,$e=e;break}$e=i.return}}function xf(e,i,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:_t(e,n),a&4&&oa(5,n);break;case 1:if(_t(e,n),a&4)if(e=n.stateNode,i===null)try{e.componentDidMount()}catch(v){Re(n,n.return,v)}else{var u=gn(n.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Re(n,n.return,v)}}a&64&&ff(n),a&512&&sa(n,n.return);break;case 3:if(_t(e,n),a&64&&(e=n.updateQueue,e!==null)){if(i=null,n.child!==null)switch(n.child.tag){case 27:case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}try{ep(e,i)}catch(v){Re(n,n.return,v)}}break;case 27:i===null&&a&4&&vf(n);case 26:case 5:_t(e,n),i===null&&a&4&&gf(n),a&512&&sa(n,n.return);break;case 12:_t(e,n);break;case 13:_t(e,n),a&4&&Cf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Qb.bind(null,n),fx(e,n))));break;case 22:if(a=n.memoizedState!==null||gt,!a){i=i!==null&&i.memoizedState!==null||qe,u=gt;var d=qe;gt=a,(qe=i)&&!d?Ut(e,n,(n.subtreeFlags&8772)!==0):_t(e,n),gt=u,qe=d}break;case 30:break;default:_t(e,n)}}function wf(e){var i=e.alternate;i!==null&&(e.alternate=null,wf(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Is(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,fi=!1;function yt(e,i,n){for(n=n.child;n!==null;)Sf(e,i,n),n=n.sibling}function Sf(e,i,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 26:qe||Xi(n,i),yt(e,i,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Xi(n,i);var a=ze,u=fi;Gt(n.type)&&(ze=n.stateNode,fi=!1),yt(e,i,n),ga(n.stateNode),ze=a,fi=u;break;case 5:qe||Xi(n,i);case 6:if(a=ze,u=fi,ze=null,yt(e,i,n),ze=a,fi=u,ze!==null)if(fi)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(n.stateNode)}catch(d){Re(n,i,d)}else try{ze.removeChild(n.stateNode)}catch(d){Re(n,i,d)}break;case 18:ze!==null&&(fi?(e=ze,um(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Aa(e)):um(ze,n.stateNode));break;case 4:a=ze,u=fi,ze=n.stateNode.containerInfo,fi=!0,yt(e,i,n),ze=a,fi=u;break;case 0:case 11:case 14:case 15:qe||Lt(2,n,i),qe||Lt(4,n,i),yt(e,i,n);break;case 1:qe||(Xi(n,i),a=n.stateNode,typeof a.componentWillUnmount=="function"&&mf(n,i,a)),yt(e,i,n);break;case 21:yt(e,i,n);break;case 22:qe=(a=qe)||n.memoizedState!==null,yt(e,i,n),qe=a;break;default:yt(e,i,n)}}function Cf(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Aa(e)}catch(n){Re(i,i.return,n)}}function Nb(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new bf),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new bf),i;default:throw Error(s(435,e.tag))}}function fc(e,i){var n=Nb(e);i.forEach(function(a){var u=Zb.bind(null,e,a);n.has(a)||(n.add(a),a.then(u,u))})}function Si(e,i){var n=i.deletions;if(n!==null)for(var a=0;a<n.length;a++){var u=n[a],d=e,v=i,x=v;e:for(;x!==null;){switch(x.tag){case 27:if(Gt(x.type)){ze=x.stateNode,fi=!1;break e}break;case 5:ze=x.stateNode,fi=!1;break e;case 3:case 4:ze=x.stateNode.containerInfo,fi=!0;break e}x=x.return}if(ze===null)throw Error(s(160));Sf(d,v,u),ze=null,fi=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Af(i,e),i=i.sibling}var Hi=null;function Af(e,i){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Si(i,e),Ci(e),a&4&&(Lt(3,e,e.return),oa(3,e),Lt(5,e,e.return));break;case 1:Si(i,e),Ci(e),a&512&&(qe||n===null||Xi(n,n.return)),a&64&&gt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var u=Hi;if(Si(i,e),Ci(e),a&512&&(qe||n===null||Xi(n,n.return)),a&4){var d=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,u=u.ownerDocument||u;i:switch(a){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Dl]||d[li]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(a),u.head.insertBefore(d,u.querySelector("head > title"))),ti(d,a,n),d[li]=e,Qe(d),a=d;break e;case"link":var v=vm("link","href",u).get(a+(n.href||""));if(v){for(var x=0;x<v.length;x++)if(d=v[x],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(x,1);break i}}d=u.createElement(a),ti(d,a,n),u.head.appendChild(d);break;case"meta":if(v=vm("meta","content",u).get(a+(n.content||""))){for(x=0;x<v.length;x++)if(d=v[x],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(x,1);break i}}d=u.createElement(a),ti(d,a,n),u.head.appendChild(d);break;default:throw Error(s(468,a))}d[li]=e,Qe(d),a=d}e.stateNode=a}else bm(u,e.type,e.stateNode);else e.stateNode=ym(u,a,e.memoizedProps);else d!==a?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,a===null?bm(u,e.type,e.stateNode):ym(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:Si(i,e),Ci(e),a&512&&(qe||n===null||Xi(n,n.return)),n!==null&&a&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Si(i,e),Ci(e),a&512&&(qe||n===null||Xi(n,n.return)),e.flags&32){u=e.stateNode;try{Ln(u,"")}catch(_){Re(e,e.return,_)}}a&4&&e.stateNode!=null&&(u=e.memoizedProps,uc(e,u,n!==null?n.memoizedProps:u)),a&1024&&(pc=!0);break;case 6:if(Si(i,e),Ci(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(_){Re(e,e.return,_)}}break;case 3:if(ts=null,u=Hi,Hi=es(i.containerInfo),Si(i,e),Hi=u,Ci(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(i.containerInfo)}catch(_){Re(e,e.return,_)}pc&&(pc=!1,Tf(e));break;case 4:a=Hi,Hi=es(e.stateNode.containerInfo),Si(i,e),Ci(e),Hi=a;break;case 12:Si(i,e),Ci(e);break;case 13:Si(i,e),Ci(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(xc=Ii()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 22:u=e.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,O=gt,F=qe;if(gt=O||u,qe=F||A,Si(i,e),qe=F,gt=O,Ci(e),a&8192)e:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(n===null||A||gt||qe||yn(e)),n=null,i=e;;){if(i.tag===5||i.tag===26){if(n===null){A=n=i;try{if(d=A.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{x=A.stateNode;var q=A.memoizedProps.style,P=q!=null&&q.hasOwnProperty("display")?q.display:null;x.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(_){Re(A,A.return,_)}}}else if(i.tag===6){if(n===null){A=i;try{A.stateNode.nodeValue=u?"":A.memoizedProps}catch(_){Re(A,A.return,_)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;n===i&&(n=null),i=i.return}n===i&&(n=null),i.sibling.return=i.return,i=i.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,fc(e,n))));break;case 19:Si(i,e),Ci(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 30:break;case 21:break;default:Si(i,e),Ci(e)}}function Ci(e){var i=e.flags;if(i&2){try{for(var n,a=e.return;a!==null;){if(yf(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var u=n.stateNode,d=dc(e);Ho(e,d,u);break;case 5:var v=n.stateNode;n.flags&32&&(Ln(v,""),n.flags&=-33);var x=dc(e);Ho(e,x,v);break;case 3:case 4:var A=n.stateNode.containerInfo,O=dc(e);hc(e,O,A);break;default:throw Error(s(161))}}catch(F){Re(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Tf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Tf(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function _t(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xf(e,i.alternate,i),i=i.sibling}function yn(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Lt(4,i,i.return),yn(i);break;case 1:Xi(i,i.return);var n=i.stateNode;typeof n.componentWillUnmount=="function"&&mf(i,i.return,n),yn(i);break;case 27:ga(i.stateNode);case 26:case 5:Xi(i,i.return),yn(i);break;case 22:i.memoizedState===null&&yn(i);break;case 30:yn(i);break;default:yn(i)}e=e.sibling}}function Ut(e,i,n){for(n=n&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var a=i.alternate,u=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Ut(u,d,n),oa(4,d);break;case 1:if(Ut(u,d,n),a=d,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(O){Re(a,a.return,O)}if(a=d,u=a.updateQueue,u!==null){var x=a.stateNode;try{var A=u.shared.hiddenCallbacks;if(A!==null)for(u.shared.hiddenCallbacks=null,u=0;u<A.length;u++)Jh(A[u],x)}catch(O){Re(a,a.return,O)}}n&&v&64&&ff(d),sa(d,d.return);break;case 27:vf(d);case 26:case 5:Ut(u,d,n),n&&a===null&&v&4&&gf(d),sa(d,d.return);break;case 12:Ut(u,d,n);break;case 13:Ut(u,d,n),n&&v&4&&Cf(u,d);break;case 22:d.memoizedState===null&&Ut(u,d,n),sa(d,d.return);break;case 30:break;default:Ut(u,d,n)}i=i.sibling}}function mc(e,i){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Il(n))}function gc(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Il(e))}function Qi(e,i,n,a){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jf(e,i,n,a),i=i.sibling}function jf(e,i,n,a){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Qi(e,i,n,a),u&2048&&oa(9,i);break;case 1:Qi(e,i,n,a);break;case 3:Qi(e,i,n,a),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Il(e)));break;case 12:if(u&2048){Qi(e,i,n,a),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,x=d.onPostCommit;typeof x=="function"&&x(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Re(i,i.return,A)}}else Qi(e,i,n,a);break;case 13:Qi(e,i,n,a);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?Qi(e,i,n,a):ra(e,i):d._visibility&2?Qi(e,i,n,a):(d._visibility|=2,il(e,i,n,a,(i.subtreeFlags&10256)!==0)),u&2048&&mc(v,i);break;case 24:Qi(e,i,n,a),u&2048&&gc(i.alternate,i);break;default:Qi(e,i,n,a)}}function il(e,i,n,a,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,x=n,A=a,O=v.flags;switch(v.tag){case 0:case 11:case 15:il(d,v,x,A,u),oa(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?il(d,v,x,A,u):ra(d,v):(F._visibility|=2,il(d,v,x,A,u)),u&&O&2048&&mc(v.alternate,v);break;case 24:il(d,v,x,A,u),u&&O&2048&&gc(v.alternate,v);break;default:il(d,v,x,A,u)}i=i.sibling}}function ra(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var n=e,a=i,u=a.flags;switch(a.tag){case 22:ra(n,a),u&2048&&mc(a.alternate,a);break;case 24:ra(n,a),u&2048&&gc(a.alternate,a);break;default:ra(n,a)}i=i.sibling}}var ca=8192;function tl(e){if(e.subtreeFlags&ca)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 26:tl(e),e.flags&ca&&e.memoizedState!==null&&Ex(Hi,e.memoizedState,e.memoizedProps);break;case 5:tl(e);break;case 3:case 4:var i=Hi;Hi=es(e.stateNode.containerInfo),tl(e),Hi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ca,ca=16777216,tl(e),ca=i):tl(e));break;default:tl(e)}}function Mf(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ua(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var n=0;n<i.length;n++){var a=i[n];$e=a,Rf(a,e)}Mf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kf(e),e=e.sibling}function kf(e){switch(e.tag){case 0:case 11:case 15:ua(e),e.flags&2048&&Lt(9,e,e.return);break;case 3:ua(e);break;case 12:ua(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,No(e)):ua(e);break;default:ua(e)}}function No(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var n=0;n<i.length;n++){var a=i[n];$e=a,Rf(a,e)}Mf(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Lt(8,i,i.return),No(i);break;case 22:n=i.stateNode,n._visibility&2&&(n._visibility&=-3,No(i));break;default:No(i)}e=e.sibling}}function Rf(e,i){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:Lt(8,n,i);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Il(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,$e=a;else e:for(n=e;$e!==null;){a=$e;var u=a.sibling,d=a.return;if(wf(a),a===n){$e=null;break e}if(u!==null){u.return=d,$e=u;break e}$e=d}}}var qb={getCacheForType:function(e){var i=ai(We),n=i.data.get(e);return n===void 0&&(n=e(),i.data.set(e,n)),n}},Gb=typeof WeakMap=="function"?WeakMap:Map,Te=0,De=null,ye=null,be=0,je=0,Ai=null,Vt=!1,nl=!1,yc=!1,vt=0,Fe=0,Ft=0,vn=0,vc=0,Pi=0,ll=0,da=null,mi=null,bc=!1,xc=0,qo=1/0,Go=null,Ht=null,ii=0,Nt=null,al=null,ol=0,wc=0,Sc=null,Df=null,ha=0,Cc=null;function Ti(){if((Te&2)!==0&&be!==0)return be&-be;if(U.T!==null){var e=Wn;return e!==0?e:Rc()}return Id()}function Bf(){Pi===0&&(Pi=(be&536870912)===0||Se?Nd():536870912);var e=Oi.current;return e!==null&&(e.flags|=32),Pi}function ji(e,i,n){(e===De&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(sl(e,0),qt(e,be,Pi,!1)),Rl(e,n),((Te&2)===0||e!==De)&&(e===De&&((Te&2)===0&&(vn|=n),Fe===4&&qt(e,be,Pi,!1)),Zi(e))}function zf(e,i,n){if((Te&6)!==0)throw Error(s(327));var a=!n&&(i&124)===0&&(i&e.expiredLanes)===0||kl(e,i),u=a?Wb(e,i):jc(e,i,!0),d=a;do{if(u===0){nl&&!a&&qt(e,i,0,!1);break}else{if(n=e.current.alternate,d&&!Yb(n)){u=jc(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var x=e;u=da;var A=x.current.memoizedState.isDehydrated;if(A&&(sl(x,v).flags|=256),v=jc(x,v,!1),v!==2){if(yc&&!A){x.errorRecoveryDisabledLanes|=d,vn|=d,u=4;break e}d=mi,mi=u,d!==null&&(mi===null?mi=d:mi.push.apply(mi,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){sl(e,0),qt(e,i,0,!0);break}e:{switch(a=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:qt(a,i,Pi,!Vt);break e;case 2:mi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=xc+300-Ii(),10<u)){if(qt(a,i,Pi,!Vt),eo(a,0,!0)!==0)break e;a.timeoutHandle=rm(Of.bind(null,a,n,mi,Go,bc,i,Pi,vn,ll,Vt,d,2,-0,0),u);break e}Of(a,n,mi,Go,bc,i,Pi,vn,ll,Vt,d,0,-0,0)}}break}while(!0);Zi(e)}function Of(e,i,n,a,u,d,v,x,A,O,F,q,P,_){if(e.timeoutHandle=-1,q=i.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(ba={stylesheets:null,count:0,unsuspend:jx},Ef(i),q=Mx(),q!==null)){e.cancelPendingCommit=q(Hf.bind(null,e,i,d,n,a,u,v,x,A,F,1,P,_)),qt(e,d,v,!O);return}Hf(e,i,d,n,a,u,v,x,A)}function Yb(e){for(var i=e;;){var n=i.tag;if((n===0||n===11||n===15)&&i.flags&16384&&(n=i.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var u=n[a],d=u.getSnapshot;u=u.value;try{if(!xi(d(),u))return!1}catch{return!1}}if(n=i.child,i.subtreeFlags&16384&&n!==null)n.return=i,i=n;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function qt(e,i,n,a){i&=~vc,i&=~vn,e.suspendedLanes|=i,e.pingedLanes&=~i,a&&(e.warmLanes|=i),a=e.expirationTimes;for(var u=i;0<u;){var d=31-bi(u),v=1<<d;a[d]=-1,u&=~v}n!==0&&Gd(e,n,i)}function Yo(){return(Te&6)===0?(pa(0),!1):!0}function Ac(){if(ye!==null){if(je===0)var e=ye.return;else e=ye,ut=hn=null,Hr(e),Jn=null,na=0,e=ye;for(;e!==null;)pf(e.alternate,e),e=e.return;ye=null}}function sl(e,i){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,cx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ac(),De=e,ye=n=st(e.current,null),be=i,je=0,Ai=null,Vt=!1,nl=kl(e,i),yc=!1,ll=Pi=vc=vn=Ft=Fe=0,mi=da=null,bc=!1,(i&8)!==0&&(i|=i&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=i;0<a;){var u=31-bi(a),d=1<<u;i|=e[u],a&=~d}return vt=i,po(),n}function Pf(e,i){fe=null,U.H=Bo,i===Kl||i===So?(i=Zh(),je=3):i===Kh?(i=Zh(),je=4):je=i===$p?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ai=i,ye===null&&(Fe=1,_o(e,Ri(i,e.current)))}function Lf(){var e=U.H;return U.H=Bo,e===null?Bo:e}function _f(){var e=U.A;return U.A=qb,e}function Tc(){Fe=4,Vt||(be&4194048)!==be&&Oi.current!==null||(nl=!0),(Ft&134217727)===0&&(vn&134217727)===0||De===null||qt(De,be,Pi,!1)}function jc(e,i,n){var a=Te;Te|=2;var u=Lf(),d=_f();(De!==e||be!==i)&&(Go=null,sl(e,i)),i=!1;var v=Fe;e:do try{if(je!==0&&ye!==null){var x=ye,A=Ai;switch(je){case 8:Ac(),v=6;break e;case 3:case 2:case 9:case 6:Oi.current===null&&(i=!0);var O=je;if(je=0,Ai=null,rl(e,x,A,O),n&&nl){v=0;break e}break;default:O=je,je=0,Ai=null,rl(e,x,A,O)}}Ib(),v=Fe;break}catch(F){Pf(e,F)}while(!0);return i&&e.shellSuspendCounter++,ut=hn=null,Te=a,U.H=u,U.A=d,ye===null&&(De=null,be=0,po()),v}function Ib(){for(;ye!==null;)Uf(ye)}function Wb(e,i){var n=Te;Te|=2;var a=Lf(),u=_f();De!==e||be!==i?(Go=null,qo=Ii()+500,sl(e,i)):nl=kl(e,i);e:do try{if(je!==0&&ye!==null){i=ye;var d=Ai;i:switch(je){case 1:je=0,Ai=null,rl(e,i,d,1);break;case 2:case 9:if(Xh(d)){je=0,Ai=null,Vf(i);break}i=function(){je!==2&&je!==9||De!==e||(je=7),Zi(e)},d.then(i,i);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:Xh(d)?(je=0,Ai=null,Vf(i)):(je=0,Ai=null,rl(e,i,d,7));break;case 5:var v=null;switch(ye.tag){case 26:v=ye.memoizedState;case 5:case 27:var x=ye;if(!v||xm(v)){je=0,Ai=null;var A=x.sibling;if(A!==null)ye=A;else{var O=x.return;O!==null?(ye=O,Io(O)):ye=null}break i}}je=0,Ai=null,rl(e,i,d,5);break;case 6:je=0,Ai=null,rl(e,i,d,6);break;case 8:Ac(),Fe=6;break e;default:throw Error(s(462))}}Kb();break}catch(F){Pf(e,F)}while(!0);return ut=hn=null,U.H=a,U.A=u,Te=n,ye!==null?0:(De=null,be=0,po(),Fe)}function Kb(){for(;ye!==null&&!g0();)Uf(ye)}function Uf(e){var i=df(e.alternate,e,vt);e.memoizedProps=e.pendingProps,i===null?Io(e):ye=i}function Vf(e){var i=e,n=i.alternate;switch(i.tag){case 15:case 0:i=af(n,i,i.pendingProps,i.type,void 0,be);break;case 11:i=af(n,i,i.pendingProps,i.type.render,i.ref,be);break;case 5:Hr(i);default:pf(n,i),i=ye=Vh(i,vt),i=df(n,i,vt)}e.memoizedProps=e.pendingProps,i===null?Io(e):ye=i}function rl(e,i,n,a){ut=hn=null,Hr(i),Jn=null,na=0;var u=i.return;try{if(_b(e,u,i,n,be)){Fe=1,_o(e,Ri(n,e.current)),ye=null;return}}catch(d){if(u!==null)throw ye=u,d;Fe=1,_o(e,Ri(n,e.current)),ye=null;return}i.flags&32768?(Se||a===1?e=!0:nl||(be&536870912)!==0?e=!1:(Vt=e=!0,(a===2||a===9||a===3||a===6)&&(a=Oi.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ff(i,e)):Io(i)}function Io(e){var i=e;do{if((i.flags&32768)!==0){Ff(i,Vt);return}e=i.return;var n=Vb(i.alternate,i,vt);if(n!==null){ye=n;return}if(i=i.sibling,i!==null){ye=i;return}ye=i=e}while(i!==null);Fe===0&&(Fe=5)}function Ff(e,i){do{var n=Fb(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!i&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);Fe=6,ye=null}function Hf(e,i,n,a,u,d,v,x,A){e.cancelPendingCommit=null;do Wo();while(ii!==0);if((Te&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=gr,j0(e,n,d,v,x,A),e===De&&(ye=De=null,be=0),al=i,Nt=e,ol=n,wc=d,Sc=u,Df=a,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$b(Za,function(){return If(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||a){a=U.T,U.T=null,u=I.p,I.p=2,v=Te,Te|=4;try{Hb(e,i,n)}finally{Te=v,I.p=u,U.T=a}}ii=1,Nf(),qf(),Gf()}}function Nf(){if(ii===1){ii=0;var e=Nt,i=al,n=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var a=I.p;I.p=2;var u=Te;Te|=4;try{Af(i,e);var d=Uc,v=kh(e.containerInfo),x=d.focusedElem,A=d.selectionRange;if(v!==x&&x&&x.ownerDocument&&Mh(x.ownerDocument.documentElement,x)){if(A!==null&&dr(x)){var O=A.start,F=A.end;if(F===void 0&&(F=O),"selectionStart"in x)x.selectionStart=O,x.selectionEnd=Math.min(F,x.value.length);else{var q=x.ownerDocument||document,P=q&&q.defaultView||window;if(P.getSelection){var _=P.getSelection(),se=x.textContent.length,ae=Math.min(A.start,se),ke=A.end===void 0?ae:Math.min(A.end,se);!_.extend&&ae>ke&&(v=ke,ke=ae,ae=v);var k=Eh(x,ae),E=Eh(x,ke);if(k&&E&&(_.rangeCount!==1||_.anchorNode!==k.node||_.anchorOffset!==k.offset||_.focusNode!==E.node||_.focusOffset!==E.offset)){var B=q.createRange();B.setStart(k.node,k.offset),_.removeAllRanges(),ae>ke?(_.addRange(B),_.extend(E.node,E.offset)):(B.setEnd(E.node,E.offset),_.addRange(B))}}}}for(q=[],_=x;_=_.parentNode;)_.nodeType===1&&q.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<q.length;x++){var H=q[x];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}as=!!_c,Uc=_c=null}finally{Te=u,I.p=a,U.T=n}}e.current=i,ii=2}}function qf(){if(ii===2){ii=0;var e=Nt,i=al,n=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var a=I.p;I.p=2;var u=Te;Te|=4;try{xf(e,i.alternate,i)}finally{Te=u,I.p=a,U.T=n}}ii=3}}function Gf(){if(ii===4||ii===3){ii=0,y0();var e=Nt,i=al,n=ol,a=Df;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ii=5:(ii=0,al=Nt=null,Yf(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ht=null),Gs(n),i=i.stateNode,vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Ml,i,void 0,(i.current.flags&128)===128)}catch{}if(a!==null){i=U.T,u=I.p,I.p=2,U.T=null;try{for(var d=e.onRecoverableError,v=0;v<a.length;v++){var x=a[v];d(x.value,{componentStack:x.stack})}}finally{U.T=i,I.p=u}}(ol&3)!==0&&Wo(),Zi(e),u=e.pendingLanes,(n&4194090)!==0&&(u&42)!==0?e===Cc?ha++:(ha=0,Cc=e):ha=0,pa(0)}}function Yf(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Il(i)))}function Wo(e){return Nf(),qf(),Gf(),If()}function If(){if(ii!==5)return!1;var e=Nt,i=wc;wc=0;var n=Gs(ol),a=U.T,u=I.p;try{I.p=32>n?32:n,U.T=null,n=Sc,Sc=null;var d=Nt,v=ol;if(ii=0,al=Nt=null,ol=0,(Te&6)!==0)throw Error(s(331));var x=Te;if(Te|=4,kf(d.current),jf(d,d.current,v,n),Te=x,pa(0,!1),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Ml,d)}catch{}return!0}finally{I.p=u,U.T=a,Yf(e,i)}}function Wf(e,i,n){i=Ri(n,i),i=ic(e.stateNode,i,2),e=Bt(e,i,2),e!==null&&(Rl(e,2),Zi(e))}function Re(e,i,n){if(e.tag===3)Wf(e,e,n);else for(;i!==null;){if(i.tag===3){Wf(i,e,n);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ht===null||!Ht.has(a))){e=Ri(n,e),n=Qp(2),a=Bt(i,n,2),a!==null&&(Zp(n,a,i,e),Rl(a,2),Zi(a));break}}i=i.return}}function Ec(e,i,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Gb;var u=new Set;a.set(i,u)}else u=a.get(i),u===void 0&&(u=new Set,a.set(i,u));u.has(n)||(yc=!0,u.add(n),e=Xb.bind(null,e,i,n),i.then(e,e))}function Xb(e,i,n){var a=e.pingCache;a!==null&&a.delete(i),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(be&n)===n&&(Fe===4||Fe===3&&(be&62914560)===be&&300>Ii()-xc?(Te&2)===0&&sl(e,0):vc|=n,ll===be&&(ll=0)),Zi(e)}function Kf(e,i){i===0&&(i=qd()),e=qn(e,i),e!==null&&(Rl(e,i),Zi(e))}function Qb(e){var i=e.memoizedState,n=0;i!==null&&(n=i.retryLane),Kf(e,n)}function Zb(e,i){var n=0;switch(e.tag){case 13:var a=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(i),Kf(e,n)}function $b(e,i){return Fs(e,i)}var Ko=null,cl=null,Mc=!1,Xo=!1,kc=!1,bn=0;function Zi(e){e!==cl&&e.next===null&&(cl===null?Ko=cl=e:cl=cl.next=e),Xo=!0,Mc||(Mc=!0,ex())}function pa(e,i){if(!kc&&Xo){kc=!0;do for(var n=!1,a=Ko;a!==null;){if(e!==0){var u=a.pendingLanes;if(u===0)var d=0;else{var v=a.suspendedLanes,x=a.pingedLanes;d=(1<<31-bi(42|e)+1)-1,d&=u&~(v&~x),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,$f(a,d))}else d=be,d=eo(a,a===De?d:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(d&3)===0||kl(a,d)||(n=!0,$f(a,d));a=a.next}while(n);kc=!1}}function Jb(){Xf()}function Xf(){Xo=Mc=!1;var e=0;bn!==0&&(rx()&&(e=bn),bn=0);for(var i=Ii(),n=null,a=Ko;a!==null;){var u=a.next,d=Qf(a,i);d===0?(a.next=null,n===null?Ko=u:n.next=u,u===null&&(cl=n)):(n=a,(e!==0||(d&3)!==0)&&(Xo=!0)),a=u}pa(e)}function Qf(e,i){for(var n=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-bi(d),x=1<<v,A=u[v];A===-1?((x&n)===0||(x&a)!==0)&&(u[v]=T0(x,i)):A<=i&&(e.expiredLanes|=x),d&=~x}if(i=De,n=be,n=eo(e,e===i?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===i&&(je===2||je===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Hs(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||kl(e,n)){if(i=n&-n,i===e.callbackPriority)return i;switch(a!==null&&Hs(a),Gs(n)){case 2:case 8:n=Fd;break;case 32:n=Za;break;case 268435456:n=Hd;break;default:n=Za}return a=Zf.bind(null,e),n=Fs(n,a),e.callbackPriority=i,e.callbackNode=n,i}return a!==null&&a!==null&&Hs(a),e.callbackPriority=2,e.callbackNode=null,2}function Zf(e,i){if(ii!==0&&ii!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wo()&&e.callbackNode!==n)return null;var a=be;return a=eo(e,e===De?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(zf(e,a,i),Qf(e,Ii()),e.callbackNode!=null&&e.callbackNode===n?Zf.bind(null,e):null)}function $f(e,i){if(Wo())return null;zf(e,i,!0)}function ex(){ux(function(){(Te&6)!==0?Fs(Vd,Jb):Xf()})}function Rc(){return bn===0&&(bn=Nd()),bn}function Jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ao(""+e)}function em(e,i){var n=i.ownerDocument.createElement("input");return n.name=i.name,n.value=i.value,e.id&&n.setAttribute("form",e.id),i.parentNode.insertBefore(n,i),e=new FormData(e),n.parentNode.removeChild(n),e}function ix(e,i,n,a,u){if(i==="submit"&&n&&n.stateNode===u){var d=Jf((u[di]||null).action),v=a.submitter;v&&(i=(i=v[di]||null)?Jf(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var x=new co("action","action",null,a,u);e.push({event:x,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(bn!==0){var A=v?em(u,v):new FormData(u);Qr(n,{pending:!0,data:A,method:u.method,action:d},null,A)}}else typeof d=="function"&&(x.preventDefault(),A=v?em(u,v):new FormData(u),Qr(n,{pending:!0,data:A,method:u.method,action:d},d,A))},currentTarget:u}]})}}for(var Dc=0;Dc<mr.length;Dc++){var Bc=mr[Dc],tx=Bc.toLowerCase(),nx=Bc[0].toUpperCase()+Bc.slice(1);Fi(tx,"on"+nx)}Fi(Bh,"onAnimationEnd"),Fi(zh,"onAnimationIteration"),Fi(Oh,"onAnimationStart"),Fi("dblclick","onDoubleClick"),Fi("focusin","onFocus"),Fi("focusout","onBlur"),Fi(xb,"onTransitionRun"),Fi(wb,"onTransitionStart"),Fi(Sb,"onTransitionCancel"),Fi(Ph,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fa));function im(e,i){i=(i&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],u=a.event;a=a.listeners;e:{var d=void 0;if(i)for(var v=a.length-1;0<=v;v--){var x=a[v],A=x.instance,O=x.currentTarget;if(x=x.listener,A!==d&&u.isPropagationStopped())break e;d=x,u.currentTarget=O;try{d(u)}catch(F){Lo(F)}u.currentTarget=null,d=A}else for(v=0;v<a.length;v++){if(x=a[v],A=x.instance,O=x.currentTarget,x=x.listener,A!==d&&u.isPropagationStopped())break e;d=x,u.currentTarget=O;try{d(u)}catch(F){Lo(F)}u.currentTarget=null,d=A}}}}function ve(e,i){var n=i[Ys];n===void 0&&(n=i[Ys]=new Set);var a=e+"__bubble";n.has(a)||(tm(i,e,2,!1),n.add(a))}function zc(e,i,n){var a=0;i&&(a|=4),tm(n,e,a,i)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[Qo]){e[Qo]=!0,Kd.forEach(function(n){n!=="selectionchange"&&(lx.has(n)||zc(n,!1,e),zc(n,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Qo]||(i[Qo]=!0,zc("selectionchange",!1,i))}}function tm(e,i,n,a){switch(jm(i)){case 2:var u=Dx;break;case 8:u=Bx;break;default:u=Kc}n=u.bind(null,i,n,e),u=void 0,!tr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),a?u!==void 0?e.addEventListener(i,n,{capture:!0,passive:u}):e.addEventListener(i,n,!0):u!==void 0?e.addEventListener(i,n,{passive:u}):e.addEventListener(i,n,!1)}function Pc(e,i,n,a,u){var d=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var v=a.tag;if(v===3||v===4){var x=a.stateNode.containerInfo;if(x===u)break;if(v===4)for(v=a.return;v!==null;){var A=v.tag;if((A===3||A===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;x!==null;){if(v=Rn(x),v===null)return;if(A=v.tag,A===5||A===6||A===26||A===27){a=d=v;continue e}x=x.parentNode}}a=a.return}rh(function(){var O=d,F=er(n),q=[];e:{var P=Lh.get(e);if(P!==void 0){var _=co,se=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":_=$0;break;case"focusin":se="focus",_=or;break;case"focusout":se="blur",_=or;break;case"beforeblur":case"afterblur":_=or;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=ib;break;case Bh:case zh:case Oh:_=q0;break;case Ph:_=nb;break;case"scroll":case"scrollend":_=U0;break;case"wheel":_=ab;break;case"copy":case"cut":case"paste":_=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ph;break;case"toggle":case"beforetoggle":_=sb}var ae=(i&4)!==0,ke=!ae&&(e==="scroll"||e==="scrollend"),k=ae?P!==null?P+"Capture":null:P;ae=[];for(var E=O,B;E!==null;){var H=E;if(B=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||B===null||k===null||(H=zl(E,k),H!=null&&ae.push(ma(E,H,B))),ke)break;E=E.return}0<ae.length&&(P=new _(P,se,null,n,F),q.push({event:P,listeners:ae}))}}if((i&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",P&&n!==Js&&(se=n.relatedTarget||n.fromElement)&&(Rn(se)||se[kn]))break e;if((_||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,_?(se=n.relatedTarget||n.toElement,_=O,se=se?Rn(se):null,se!==null&&(ke=h(se),ae=se.tag,se!==ke||ae!==5&&ae!==27&&ae!==6)&&(se=null)):(_=null,se=O),_!==se)){if(ae=dh,H="onMouseLeave",k="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ae=ph,H="onPointerLeave",k="onPointerEnter",E="pointer"),ke=_==null?P:Bl(_),B=se==null?P:Bl(se),P=new ae(H,E+"leave",_,n,F),P.target=ke,P.relatedTarget=B,H=null,Rn(F)===O&&(ae=new ae(k,E+"enter",se,n,F),ae.target=B,ae.relatedTarget=ke,H=ae),ke=H,_&&se)i:{for(ae=_,k=se,E=0,B=ae;B;B=ul(B))E++;for(B=0,H=k;H;H=ul(H))B++;for(;0<E-B;)ae=ul(ae),E--;for(;0<B-E;)k=ul(k),B--;for(;E--;){if(ae===k||k!==null&&ae===k.alternate)break i;ae=ul(ae),k=ul(k)}ae=null}else ae=null;_!==null&&nm(q,P,_,ae,!1),se!==null&&ke!==null&&nm(q,ke,se,ae,!0)}}e:{if(P=O?Bl(O):window,_=P.nodeName&&P.nodeName.toLowerCase(),_==="select"||_==="input"&&P.type==="file")var ee=wh;else if(bh(P))if(Sh)ee=yb;else{ee=mb;var me=fb}else _=P.nodeName,!_||_.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?O&&$s(O.elementType)&&(ee=wh):ee=gb;if(ee&&(ee=ee(e,O))){xh(q,ee,n,F);break e}me&&me(e,P,O),e==="focusout"&&O&&P.type==="number"&&O.memoizedProps.value!=null&&Zs(P,"number",P.value)}switch(me=O?Bl(O):window,e){case"focusin":(bh(me)||me.contentEditable==="true")&&(Fn=me,hr=O,Hl=null);break;case"focusout":Hl=hr=Fn=null;break;case"mousedown":pr=!0;break;case"contextmenu":case"mouseup":case"dragend":pr=!1,Rh(q,n,F);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":Rh(q,n,F)}var te;if(rr)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Vn?yh(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(fh&&n.locale!=="ko"&&(Vn||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Vn&&(te=ch()):(Mt=F,nr="value"in Mt?Mt.value:Mt.textContent,Vn=!0)),me=Zo(O,oe),0<me.length&&(oe=new hh(oe,e,null,n,F),q.push({event:oe,listeners:me}),te?oe.data=te:(te=vh(n),te!==null&&(oe.data=te)))),(te=cb?ub(e,n):db(e,n))&&(oe=Zo(O,"onBeforeInput"),0<oe.length&&(me=new hh("onBeforeInput","beforeinput",null,n,F),q.push({event:me,listeners:oe}),me.data=te)),ix(q,e,O,n,F)}im(q,i)})}function ma(e,i,n){return{instance:e,listener:i,currentTarget:n}}function Zo(e,i){for(var n=i+"Capture",a=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=zl(e,n),u!=null&&a.unshift(ma(e,u,d)),u=zl(e,i),u!=null&&a.push(ma(e,u,d))),e.tag===3)return a;e=e.return}return[]}function ul(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nm(e,i,n,a,u){for(var d=i._reactName,v=[];n!==null&&n!==a;){var x=n,A=x.alternate,O=x.stateNode;if(x=x.tag,A!==null&&A===a)break;x!==5&&x!==26&&x!==27||O===null||(A=O,u?(O=zl(n,d),O!=null&&v.unshift(ma(n,O,A))):u||(O=zl(n,d),O!=null&&v.push(ma(n,O,A)))),n=n.return}v.length!==0&&e.push({event:i,listeners:v})}var ax=/\r\n?/g,ox=/\u0000|\uFFFD/g;function lm(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(ox,"")}function am(e,i){return i=lm(i),lm(e)===i}function $o(){}function Me(e,i,n,a,u,d){switch(n){case"children":typeof a=="string"?i==="body"||i==="textarea"&&a===""||Ln(e,a):(typeof a=="number"||typeof a=="bigint")&&i!=="body"&&Ln(e,""+a);break;case"className":to(e,"class",a);break;case"tabIndex":to(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":to(e,n,a);break;case"style":oh(e,a,d);break;case"data":if(i!=="object"){to(e,"data",a);break}case"src":case"href":if(a===""&&(i!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ao(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(i!=="input"&&Me(e,i,"name",u.name,u,null),Me(e,i,"formEncType",u.formEncType,u,null),Me(e,i,"formMethod",u.formMethod,u,null),Me(e,i,"formTarget",u.formTarget,u,null)):(Me(e,i,"encType",u.encType,u,null),Me(e,i,"method",u.method,u,null),Me(e,i,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ao(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=$o);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ao(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ve("beforetoggle",e),ve("toggle",e),io(e,"popover",a);break;case"xlinkActuate":at(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":at(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":at(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":at(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":at(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":at(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":at(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":at(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":at(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":io(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=L0.get(n)||n,io(e,n,a))}}function Lc(e,i,n,a,u,d){switch(n){case"style":oh(e,a,d);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ln(e,a):(typeof a=="number"||typeof a=="bigint")&&Ln(e,""+a);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"onClick":a!=null&&(e.onclick=$o);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),i=n.slice(2,u?n.length-7:void 0),d=e[di]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof a=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,a,u);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):io(e,n,a)}}}function ti(e,i,n){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var a=!1,u=!1,d;for(d in n)if(n.hasOwnProperty(d)){var v=n[d];if(v!=null)switch(d){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Me(e,i,d,v,n,null)}}u&&Me(e,i,"srcSet",n.srcSet,n,null),a&&Me(e,i,"src",n.src,n,null);return;case"input":ve("invalid",e);var x=d=v=u=null,A=null,O=null;for(a in n)if(n.hasOwnProperty(a)){var F=n[a];if(F!=null)switch(a){case"name":u=F;break;case"type":v=F;break;case"checked":A=F;break;case"defaultChecked":O=F;break;case"value":d=F;break;case"defaultValue":x=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Me(e,i,a,F,n,null)}}th(e,d,x,A,O,v,u,!1),no(e);return;case"select":ve("invalid",e),a=v=d=null;for(u in n)if(n.hasOwnProperty(u)&&(x=n[u],x!=null))switch(u){case"value":d=x;break;case"defaultValue":v=x;break;case"multiple":a=x;default:Me(e,i,u,x,n,null)}i=d,n=v,e.multiple=!!a,i!=null?Pn(e,!!a,i,!1):n!=null&&Pn(e,!!a,n,!0);return;case"textarea":ve("invalid",e),d=u=a=null;for(v in n)if(n.hasOwnProperty(v)&&(x=n[v],x!=null))switch(v){case"value":a=x;break;case"defaultValue":u=x;break;case"children":d=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(91));break;default:Me(e,i,v,x,n,null)}lh(e,a,u,d),no(e);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Me(e,i,A,a,n,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(a=0;a<fa.length;a++)ve(fa[a],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(a=n[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Me(e,i,O,a,n,null)}return;default:if($s(i)){for(F in n)n.hasOwnProperty(F)&&(a=n[F],a!==void 0&&Lc(e,i,F,a,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(a=n[x],a!=null&&Me(e,i,x,a,n,null))}function sx(e,i,n,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,x=null,A=null,O=null,F=null;for(_ in n){var q=n[_];if(n.hasOwnProperty(_)&&q!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":A=q;default:a.hasOwnProperty(_)||Me(e,i,_,null,a,q)}}for(var P in a){var _=a[P];if(q=n[P],a.hasOwnProperty(P)&&(_!=null||q!=null))switch(P){case"type":d=_;break;case"name":u=_;break;case"checked":O=_;break;case"defaultChecked":F=_;break;case"value":v=_;break;case"defaultValue":x=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,i));break;default:_!==q&&Me(e,i,P,_,a,q)}}Qs(e,v,x,A,O,F,d,u);return;case"select":_=v=x=P=null;for(d in n)if(A=n[d],n.hasOwnProperty(d)&&A!=null)switch(d){case"value":break;case"multiple":_=A;default:a.hasOwnProperty(d)||Me(e,i,d,null,a,A)}for(u in a)if(d=a[u],A=n[u],a.hasOwnProperty(u)&&(d!=null||A!=null))switch(u){case"value":P=d;break;case"defaultValue":x=d;break;case"multiple":v=d;default:d!==A&&Me(e,i,u,d,a,A)}i=x,n=v,a=_,P!=null?Pn(e,!!n,P,!1):!!a!=!!n&&(i!=null?Pn(e,!!n,i,!0):Pn(e,!!n,n?[]:"",!1));return;case"textarea":_=P=null;for(x in n)if(u=n[x],n.hasOwnProperty(x)&&u!=null&&!a.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Me(e,i,x,null,a,u)}for(v in a)if(u=a[v],d=n[v],a.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":P=u;break;case"defaultValue":_=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Me(e,i,v,u,a,d)}nh(e,P,_);return;case"option":for(var se in n)if(P=n[se],n.hasOwnProperty(se)&&P!=null&&!a.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Me(e,i,se,null,a,P)}for(A in a)if(P=a[A],_=n[A],a.hasOwnProperty(A)&&P!==_&&(P!=null||_!=null))switch(A){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Me(e,i,A,P,a,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in n)P=n[ae],n.hasOwnProperty(ae)&&P!=null&&!a.hasOwnProperty(ae)&&Me(e,i,ae,null,a,P);for(O in a)if(P=a[O],_=n[O],a.hasOwnProperty(O)&&P!==_&&(P!=null||_!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,i));break;default:Me(e,i,O,P,a,_)}return;default:if($s(i)){for(var ke in n)P=n[ke],n.hasOwnProperty(ke)&&P!==void 0&&!a.hasOwnProperty(ke)&&Lc(e,i,ke,void 0,a,P);for(F in a)P=a[F],_=n[F],!a.hasOwnProperty(F)||P===_||P===void 0&&_===void 0||Lc(e,i,F,P,a,_);return}}for(var k in n)P=n[k],n.hasOwnProperty(k)&&P!=null&&!a.hasOwnProperty(k)&&Me(e,i,k,null,a,P);for(q in a)P=a[q],_=n[q],!a.hasOwnProperty(q)||P===_||P==null&&_==null||Me(e,i,q,P,a,_)}var _c=null,Uc=null;function Jo(e){return e.nodeType===9?e:e.ownerDocument}function om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sm(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Vc(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fc=null;function rx(){var e=window.event;return e&&e.type==="popstate"?e===Fc?!1:(Fc=e,!0):(Fc=null,!1)}var rm=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(e){return cm.resolve(null).then(e).catch(dx)}:rm;function dx(e){setTimeout(function(){throw e})}function Gt(e){return e==="head"}function um(e,i){var n=i,a=0,u=0;do{var d=n.nextSibling;if(e.removeChild(n),d&&d.nodeType===8)if(n=d.data,n==="/$"){if(0<a&&8>a){n=a;var v=e.ownerDocument;if(n&1&&ga(v.documentElement),n&2&&ga(v.body),n&4)for(n=v.head,ga(n),v=n.firstChild;v;){var x=v.nextSibling,A=v.nodeName;v[Dl]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&v.rel.toLowerCase()==="stylesheet"||n.removeChild(v),v=x}}if(u===0){e.removeChild(d),Aa(i);return}u--}else n==="$"||n==="$?"||n==="$!"?u++:a=n.charCodeAt(0)-48;else a=0;n=d}while(n);Aa(i)}function Hc(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var n=i;switch(i=i.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hc(n),Is(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function hx(e,i,n,a){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Dl])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function px(e,i,n){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ni(e.nextSibling),e===null))return null;return e}function Nc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function fx(e,i){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")i();else{var a=function(){i(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ni(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var qc=null;function dm(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(i===0)return e;i--}else n==="/$"&&i++}e=e.previousSibling}return null}function hm(e,i,n){switch(i=Jo(n),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ga(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Is(e)}var Li=new Map,pm=new Set;function es(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var bt=I.d;I.d={f:mx,r:gx,D:yx,C:vx,L:bx,m:xx,X:Sx,S:wx,M:Cx};function mx(){var e=bt.f(),i=Yo();return e||i}function gx(e){var i=Dn(e);i!==null&&i.tag===5&&i.type==="form"?Bp(i):bt.r(e)}var dl=typeof document>"u"?null:document;function fm(e,i,n){var a=dl;if(a&&typeof i=="string"&&i){var u=ki(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),pm.has(u)||(pm.add(u),e={rel:e,crossOrigin:n,href:i},a.querySelector(u)===null&&(i=a.createElement("link"),ti(i,"link",e),Qe(i),a.head.appendChild(i)))}}function yx(e){bt.D(e),fm("dns-prefetch",e,null)}function vx(e,i){bt.C(e,i),fm("preconnect",e,i)}function bx(e,i,n){bt.L(e,i,n);var a=dl;if(a&&e&&i){var u='link[rel="preload"][as="'+ki(i)+'"]';i==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+ki(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+ki(n.imageSizes)+'"]')):u+='[href="'+ki(e)+'"]';var d=u;switch(i){case"style":d=hl(e);break;case"script":d=pl(e)}Li.has(d)||(e=y({rel:"preload",href:i==="image"&&n&&n.imageSrcSet?void 0:e,as:i},n),Li.set(d,e),a.querySelector(u)!==null||i==="style"&&a.querySelector(ya(d))||i==="script"&&a.querySelector(va(d))||(i=a.createElement("link"),ti(i,"link",e),Qe(i),a.head.appendChild(i)))}}function xx(e,i){bt.m(e,i);var n=dl;if(n&&e){var a=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+ki(a)+'"][href="'+ki(e)+'"]',d=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=pl(e)}if(!Li.has(d)&&(e=y({rel:"modulepreload",href:e},i),Li.set(d,e),n.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(va(d)))return}a=n.createElement("link"),ti(a,"link",e),Qe(a),n.head.appendChild(a)}}}function wx(e,i,n){bt.S(e,i,n);var a=dl;if(a&&e){var u=Bn(a).hoistableStyles,d=hl(e);i=i||"default";var v=u.get(d);if(!v){var x={loading:0,preload:null};if(v=a.querySelector(ya(d)))x.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":i},n),(n=Li.get(d))&&Gc(e,n);var A=v=a.createElement("link");Qe(A),ti(A,"link",e),A._p=new Promise(function(O,F){A.onload=O,A.onerror=F}),A.addEventListener("load",function(){x.loading|=1}),A.addEventListener("error",function(){x.loading|=2}),x.loading|=4,is(v,i,a)}v={type:"stylesheet",instance:v,count:1,state:x},u.set(d,v)}}}function Sx(e,i){bt.X(e,i);var n=dl;if(n&&e){var a=Bn(n).hoistableScripts,u=pl(e),d=a.get(u);d||(d=n.querySelector(va(u)),d||(e=y({src:e,async:!0},i),(i=Li.get(u))&&Yc(e,i),d=n.createElement("script"),Qe(d),ti(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(u,d))}}function Cx(e,i){bt.M(e,i);var n=dl;if(n&&e){var a=Bn(n).hoistableScripts,u=pl(e),d=a.get(u);d||(d=n.querySelector(va(u)),d||(e=y({src:e,async:!0,type:"module"},i),(i=Li.get(u))&&Yc(e,i),d=n.createElement("script"),Qe(d),ti(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},a.set(u,d))}}function mm(e,i,n,a){var u=(u=de.current)?es(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(i=hl(n.href),n=Bn(u).hoistableStyles,a=n.get(i),a||(a={type:"style",instance:null,count:0,state:null},n.set(i,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=hl(n.href);var d=Bn(u).hoistableStyles,v=d.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=u.querySelector(ya(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Li.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Li.set(e,n),d||Ax(u,e,n,v.state))),i&&a===null)throw Error(s(528,""));return v}if(i&&a!==null)throw Error(s(529,""));return null;case"script":return i=n.async,n=n.src,typeof n=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=pl(n),n=Bn(u).hoistableScripts,a=n.get(i),a||(a={type:"script",instance:null,count:0,state:null},n.set(i,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hl(e){return'href="'+ki(e)+'"'}function ya(e){return'link[rel="stylesheet"]['+e+"]"}function gm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Ax(e,i,n,a){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?a.loading=1:(i=e.createElement("link"),a.preload=i,i.addEventListener("load",function(){return a.loading|=1}),i.addEventListener("error",function(){return a.loading|=2}),ti(i,"link",n),Qe(i),e.head.appendChild(i))}function pl(e){return'[src="'+ki(e)+'"]'}function va(e){return"script[async]"+e}function ym(e,i,n){if(i.count++,i.instance===null)switch(i.type){case"style":var a=e.querySelector('style[data-href~="'+ki(n.href)+'"]');if(a)return i.instance=a,Qe(a),a;var u=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Qe(a),ti(a,"style",u),is(a,n.precedence,e),i.instance=a;case"stylesheet":u=hl(n.href);var d=e.querySelector(ya(u));if(d)return i.state.loading|=4,i.instance=d,Qe(d),d;a=gm(n),(u=Li.get(u))&&Gc(a,u),d=(e.ownerDocument||e).createElement("link"),Qe(d);var v=d;return v._p=new Promise(function(x,A){v.onload=x,v.onerror=A}),ti(d,"link",a),i.state.loading|=4,is(d,n.precedence,e),i.instance=d;case"script":return d=pl(n.src),(u=e.querySelector(va(d)))?(i.instance=u,Qe(u),u):(a=n,(u=Li.get(d))&&(a=y({},n),Yc(a,u)),e=e.ownerDocument||e,u=e.createElement("script"),Qe(u),ti(u,"link",a),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(a=i.instance,i.state.loading|=4,is(a,n.precedence,e));return i.instance}function is(e,i,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,d=u,v=0;v<a.length;v++){var x=a[v];if(x.dataset.precedence===i)d=x;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=n.nodeType===9?n.head:n,i.insertBefore(e,i.firstChild))}function Gc(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Yc(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ts=null;function vm(e,i,n){if(ts===null){var a=new Map,u=ts=new Map;u.set(n,a)}else u=ts,a=u.get(n),a||(a=new Map,u.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var d=n[u];if(!(d[Dl]||d[li]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var x=a.get(v);x?x.push(d):a.set(v,[d])}}return a}function bm(e,i,n){e=e.ownerDocument||e,e.head.insertBefore(n,i==="title"?e.querySelector("head > title"):null)}function Tx(e,i,n){if(n===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function xm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ba=null;function jx(){}function Ex(e,i,n){if(ba===null)throw Error(s(475));var a=ba;if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=hl(n.href),d=e.querySelector(ya(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=ns.bind(a),e.then(a,a)),i.state.loading|=4,i.instance=d,Qe(d);return}d=e.ownerDocument||e,n=gm(n),(u=Li.get(u))&&Gc(n,u),d=d.createElement("link"),Qe(d);var v=d;v._p=new Promise(function(x,A){v.onload=x,v.onerror=A}),ti(d,"link",n),i.instance=d}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(a.count++,i=ns.bind(a),e.addEventListener("load",i),e.addEventListener("error",i))}}function Mx(){if(ba===null)throw Error(s(475));var e=ba;return e.stylesheets&&e.count===0&&Ic(e,e.stylesheets),0<e.count?function(i){var n=setTimeout(function(){if(e.stylesheets&&Ic(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ns(){if(this.count--,this.count===0){if(this.stylesheets)Ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ls=null;function Ic(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ls=new Map,i.forEach(kx,e),ls=null,ns.call(e))}function kx(e,i){if(!(i.state.loading&4)){var n=ls.get(e);if(n)var a=n.get(null);else{n=new Map,ls.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),a=v)}a&&n.set(null,a)}u=i.instance,v=u.getAttribute("data-precedence"),d=n.get(v)||a,d===a&&n.set(null,u),n.set(v,u),this.count++,a=ns.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var xa={$$typeof:z,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Rx(e,i,n,a,u,d,v,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.hiddenUpdates=Ns(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function wm(e,i,n,a,u,d,v,x,A,O,F,q){return e=new Rx(e,i,n,v,x,A,O,q),i=1,d===!0&&(i|=24),d=wi(3,null,null,i),e.current=d,d.stateNode=e,i=Er(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:a,isDehydrated:n,cache:i},Dr(d),e}function Sm(e){return e?(e=Gn,e):Gn}function Cm(e,i,n,a,u,d){u=Sm(u),a.context===null?a.context=u:a.pendingContext=u,a=Dt(i),a.payload={element:n},d=d===void 0?null:d,d!==null&&(a.callback=d),n=Bt(e,a,i),n!==null&&(ji(n,e,i),Ql(n,e,i))}function Am(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<i?n:i}}function Wc(e,i){Am(e,i),(e=e.alternate)&&Am(e,i)}function Tm(e){if(e.tag===13){var i=qn(e,67108864);i!==null&&ji(i,e,67108864),Wc(e,67108864)}}var as=!0;function Dx(e,i,n,a){var u=U.T;U.T=null;var d=I.p;try{I.p=2,Kc(e,i,n,a)}finally{I.p=d,U.T=u}}function Bx(e,i,n,a){var u=U.T;U.T=null;var d=I.p;try{I.p=8,Kc(e,i,n,a)}finally{I.p=d,U.T=u}}function Kc(e,i,n,a){if(as){var u=Xc(a);if(u===null)Pc(e,i,a,os,n),Em(e,a);else if(Ox(u,e,i,n,a))a.stopPropagation();else if(Em(e,a),i&4&&-1<zx.indexOf(e)){for(;u!==null;){var d=Dn(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=tn(d.pendingLanes);if(v!==0){var x=d;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var A=1<<31-bi(v);x.entanglements[1]|=A,v&=~A}Zi(d),(Te&6)===0&&(qo=Ii()+500,pa(0))}}break;case 13:x=qn(d,2),x!==null&&ji(x,d,2),Yo(),Wc(d,2)}if(d=Xc(a),d===null&&Pc(e,i,a,os,n),d===u)break;u=d}u!==null&&a.stopPropagation()}else Pc(e,i,a,null,n)}}function Xc(e){return e=er(e),Qc(e)}var os=null;function Qc(e){if(os=null,e=Rn(e),e!==null){var i=h(e);if(i===null)e=null;else{var n=i.tag;if(n===13){if(e=p(i),e!==null)return e;e=null}else if(n===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return os=e,null}function jm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v0()){case Vd:return 2;case Fd:return 8;case Za:case b0:return 32;case Hd:return 268435456;default:return 32}default:return 32}}var Zc=!1,Yt=null,It=null,Wt=null,wa=new Map,Sa=new Map,Kt=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Em(e,i){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":wa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(i.pointerId)}}function Ca(e,i,n,a,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:n,eventSystemFlags:a,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Dn(i),i!==null&&Tm(i)),e):(e.eventSystemFlags|=a,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function Ox(e,i,n,a,u){switch(i){case"focusin":return Yt=Ca(Yt,e,i,n,a,u),!0;case"dragenter":return It=Ca(It,e,i,n,a,u),!0;case"mouseover":return Wt=Ca(Wt,e,i,n,a,u),!0;case"pointerover":var d=u.pointerId;return wa.set(d,Ca(wa.get(d)||null,e,i,n,a,u)),!0;case"gotpointercapture":return d=u.pointerId,Sa.set(d,Ca(Sa.get(d)||null,e,i,n,a,u)),!0}return!1}function Mm(e){var i=Rn(e.target);if(i!==null){var n=h(i);if(n!==null){if(i=n.tag,i===13){if(i=p(n),i!==null){e.blockedOn=i,E0(e.priority,function(){if(n.tag===13){var a=Ti();a=qs(a);var u=qn(n,a);u!==null&&ji(u,n,a),Wc(n,a)}});return}}else if(i===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ss(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var n=Xc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Js=a,n.target.dispatchEvent(a),Js=null}else return i=Dn(n),i!==null&&Tm(i),e.blockedOn=n,!1;i.shift()}return!0}function km(e,i,n){ss(e)&&n.delete(i)}function Px(){Zc=!1,Yt!==null&&ss(Yt)&&(Yt=null),It!==null&&ss(It)&&(It=null),Wt!==null&&ss(Wt)&&(Wt=null),wa.forEach(km),Sa.forEach(km)}function rs(e,i){e.blockedOn===i&&(e.blockedOn=null,Zc||(Zc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Px)))}var cs=null;function Rm(e){cs!==e&&(cs=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){cs===e&&(cs=null);for(var i=0;i<e.length;i+=3){var n=e[i],a=e[i+1],u=e[i+2];if(typeof a!="function"){if(Qc(a||n)===null)continue;break}var d=Dn(n);d!==null&&(e.splice(i,3),i-=3,Qr(d,{pending:!0,data:u,method:n.method,action:a},a,u))}}))}function Aa(e){function i(A){return rs(A,e)}Yt!==null&&rs(Yt,e),It!==null&&rs(It,e),Wt!==null&&rs(Wt,e),wa.forEach(i),Sa.forEach(i);for(var n=0;n<Kt.length;n++){var a=Kt[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&Kt.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var u=n[a],d=n[a+1],v=u[di]||null;if(typeof d=="function")v||Rm(n);else if(v){var x=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[di]||null)x=v.formAction;else if(Qc(u)!==null)continue}else x=v.action;typeof x=="function"?n[a+1]=x:(n.splice(a,3),a-=3),Rm(n)}}}function $c(e){this._internalRoot=e}us.prototype.render=$c.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var n=i.current,a=Ti();Cm(n,a,e,i,null,null)},us.prototype.unmount=$c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Cm(e.current,2,null,e,null,null),Yo(),i[kn]=null}};function us(e){this._internalRoot=e}us.prototype.unstable_scheduleHydration=function(e){if(e){var i=Id();e={blockedOn:null,target:e,priority:i};for(var n=0;n<Kt.length&&i!==0&&i<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Mm(e)}};var Dm=l.version;if(Dm!=="19.1.0")throw Error(s(527,Dm,"19.1.0"));I.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Lx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Ml=ds.inject(Lx),vi=ds}catch{}}return ja.createRoot=function(e,i){if(!c(e))throw Error(s(299));var n=!1,a="",u=Ip,d=Wp,v=Kp,x=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(x=i.unstable_transitionCallbacks)),i=wm(e,1,!1,null,null,n,a,u,d,v,x,null),e[kn]=i.current,Oc(e),new $c(i)},ja.hydrateRoot=function(e,i,n){if(!c(e))throw Error(s(299));var a=!1,u="",d=Ip,v=Wp,x=Kp,A=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),i=wm(e,1,!0,i,n??null,a,u,d,v,x,A,O),i.context=Sm(null),n=i.current,a=Ti(),a=qs(a),u=Dt(a),u.callback=null,Bt(n,u,a),n=a,i.current.lanes=n,Rl(i,n),Zi(i),e[kn]=i.current,Oc(e),new us(i)},ja.version="19.1.0",ja}var Hm;function Wx(){if(Hm)return iu.exports;Hm=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(l){console.error(l)}}return t(),iu.exports=Ix(),iu.exports}var Kx=Wx();const Xx=py(Kx);var Ea={},Nm;function Qx(){if(Nm)return Ea;Nm=1,Object.defineProperty(Ea,"__esModule",{value:!0}),Ea.parse=p,Ea.serialize=g;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,l=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,h=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function p(w,S){const C=new h,R=w.length;if(R<2)return C;const D=(S==null?void 0:S.decode)||y;let M=0;do{const V=w.indexOf("=",M);if(V===-1)break;const z=w.indexOf(";",M),N=z===-1?R:z;if(V>N){M=w.lastIndexOf(";",V-1)+1;continue}const L=f(w,M,V),W=m(w,V,L),K=w.slice(L,W);if(C[K]===void 0){let Q=f(w,V+1,N),ie=m(w,N,Q);const X=D(w.slice(Q,ie));C[K]=X}M=N+1}while(M<R);return C}function f(w,S,C){do{const R=w.charCodeAt(S);if(R!==32&&R!==9)return S}while(++S<C);return C}function m(w,S,C){for(;S>C;){const R=w.charCodeAt(--S);if(R!==32&&R!==9)return S+1}return C}function g(w,S,C){const R=(C==null?void 0:C.encode)||encodeURIComponent;if(!t.test(w))throw new TypeError(`argument name is invalid: ${w}`);const D=R(S);if(!l.test(D))throw new TypeError(`argument val is invalid: ${S}`);let M=w+"="+D;if(!C)return M;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);M+="; Max-Age="+C.maxAge}if(C.domain){if(!o.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);M+="; Domain="+C.domain}if(C.path){if(!s.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);M+="; Path="+C.path}if(C.expires){if(!b(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);M+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(M+="; HttpOnly"),C.secure&&(M+="; Secure"),C.partitioned&&(M+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return M}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function b(w){return c.call(w)==="[object Date]"}return Ea}Qx();var qm="popstate";function Zx(t={}){function l(c,h){let{pathname:p="/",search:f="",hash:m=""}=Mn(c.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),wu("",{pathname:p,search:f,hash:m},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function o(c,h){let p=c.document.querySelector("base"),f="";if(p&&p.getAttribute("href")){let m=c.location.href,g=m.indexOf("#");f=g===-1?m:m.slice(0,g)}return f+"#"+(typeof h=="string"?h:La(h))}function s(c,h){Gi(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`)}return Jx(l,o,s,t)}function Le(t,l){if(t===!1||t===null||typeof t>"u")throw new Error(l)}function Gi(t,l){if(!t){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function $x(){return Math.random().toString(36).substring(2,10)}function Gm(t,l){return{usr:t.state,key:t.key,idx:l}}function wu(t,l,o=null,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof l=="string"?Mn(l):l,state:o,key:l&&l.key||s||$x()}}function La({pathname:t="/",search:l="",hash:o=""}){return l&&l!=="?"&&(t+=l.charAt(0)==="?"?l:"?"+l),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Mn(t){let l={};if(t){let o=t.indexOf("#");o>=0&&(l.hash=t.substring(o),t=t.substring(0,o));let s=t.indexOf("?");s>=0&&(l.search=t.substring(s),t=t.substring(0,s)),t&&(l.pathname=t)}return l}function Jx(t,l,o,s={}){let{window:c=document.defaultView,v5Compat:h=!1}=s,p=c.history,f="POP",m=null,g=y();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function y(){return(p.state||{idx:null}).idx}function b(){f="POP";let D=y(),M=D==null?null:D-g;g=D,m&&m({action:f,location:R.location,delta:M})}function w(D,M){f="PUSH";let V=wu(R.location,D,M);o&&o(V,D),g=y()+1;let z=Gm(V,g),N=R.createHref(V);try{p.pushState(z,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;c.location.assign(N)}h&&m&&m({action:f,location:R.location,delta:1})}function S(D,M){f="REPLACE";let V=wu(R.location,D,M);o&&o(V,D),g=y();let z=Gm(V,g),N=R.createHref(V);p.replaceState(z,"",N),h&&m&&m({action:f,location:R.location,delta:0})}function C(D){return ew(D)}let R={get action(){return f},get location(){return t(c,p)},listen(D){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(qm,b),m=D,()=>{c.removeEventListener(qm,b),m=null}},createHref(D){return l(c,D)},createURL:C,encodeLocation(D){let M=C(D);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:S,go(D){return p.go(D)}};return R}function ew(t,l=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Le(o,"No window.location.(origin|href) available to create URL");let s=typeof t=="string"?t:La(t);return s=s.replace(/ $/,"%20"),!l&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function fy(t,l,o="/"){return iw(t,l,o,!1)}function iw(t,l,o,s){let c=typeof l=="string"?Mn(l):l,h=wt(c.pathname||"/",o);if(h==null)return null;let p=my(t);tw(p);let f=null;for(let m=0;f==null&&m<p.length;++m){let g=pw(h);f=dw(p[m],g,s)}return f}function my(t,l=[],o=[],s=""){let c=(h,p,f)=>{let m={relativePath:f===void 0?h.path||"":f,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};m.relativePath.startsWith("/")&&(Le(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=xt([s,m.relativePath]),y=o.concat(m);h.children&&h.children.length>0&&(Le(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),my(h.children,l,y,g)),!(h.path==null&&!h.index)&&l.push({path:g,score:cw(g,h.index),routesMeta:y})};return t.forEach((h,p)=>{var f;if(h.path===""||!((f=h.path)!=null&&f.includes("?")))c(h,p);else for(let m of gy(h.path))c(h,p,m)}),l}function gy(t){let l=t.split("/");if(l.length===0)return[];let[o,...s]=l,c=o.endsWith("?"),h=o.replace(/\?$/,"");if(s.length===0)return c?[h,""]:[h];let p=gy(s.join("/")),f=[];return f.push(...p.map(m=>m===""?h:[h,m].join("/"))),c&&f.push(...p),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function tw(t){t.sort((l,o)=>l.score!==o.score?o.score-l.score:uw(l.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var nw=/^:[\w-]+$/,lw=3,aw=2,ow=1,sw=10,rw=-2,Ym=t=>t==="*";function cw(t,l){let o=t.split("/"),s=o.length;return o.some(Ym)&&(s+=rw),l&&(s+=aw),o.filter(c=>!Ym(c)).reduce((c,h)=>c+(nw.test(h)?lw:h===""?ow:sw),s)}function uw(t,l){return t.length===l.length&&t.slice(0,-1).every((s,c)=>s===l[c])?t[t.length-1]-l[l.length-1]:0}function dw(t,l,o=!1){let{routesMeta:s}=t,c={},h="/",p=[];for(let f=0;f<s.length;++f){let m=s[f],g=f===s.length-1,y=h==="/"?l:l.slice(h.length)||"/",b=As({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),w=m.route;if(!b&&g&&o&&!s[s.length-1].route.index&&(b=As({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!b)return null;Object.assign(c,b.params),p.push({params:c,pathname:xt([h,b.pathname]),pathnameBase:yw(xt([h,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(h=xt([h,b.pathnameBase]))}return p}function As(t,l){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,s]=hw(t.path,t.caseSensitive,t.end),c=l.match(o);if(!c)return null;let h=c[0],p=h.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:b},w)=>{if(y==="*"){let C=f[w]||"";p=h.slice(0,h.length-C.length).replace(/(.)\/+$/,"$1")}const S=f[w];return b&&!S?g[y]=void 0:g[y]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:p,pattern:t}}function hw(t,l=!1,o=!0){Gi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,f,m)=>(s.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),s]}function pw(t){try{return t.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Gi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),t}}function wt(t,l){if(l==="/")return t;if(!t.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,s=t.charAt(o);return s&&s!=="/"?null:t.slice(o)||"/"}function fw(t,l="/"){let{pathname:o,search:s="",hash:c=""}=typeof t=="string"?Mn(t):t;return{pathname:o?o.startsWith("/")?o:mw(o,l):l,search:vw(s),hash:bw(c)}}function mw(t,l){let o=l.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function au(t,l,o,s){return`Cannot include a '${t}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gw(t){return t.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function yy(t){let l=gw(t);return l.map((o,s)=>s===l.length-1?o.pathname:o.pathnameBase)}function vy(t,l,o,s=!1){let c;typeof t=="string"?c=Mn(t):(c={...t},Le(!c.pathname||!c.pathname.includes("?"),au("?","pathname","search",c)),Le(!c.pathname||!c.pathname.includes("#"),au("#","pathname","hash",c)),Le(!c.search||!c.search.includes("#"),au("#","search","hash",c)));let h=t===""||c.pathname==="",p=h?"/":c.pathname,f;if(p==null)f=o;else{let b=l.length-1;if(!s&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),b-=1;c.pathname=w.join("/")}f=b>=0?l[b]:"/"}let m=fw(c,f),g=p&&p!=="/"&&p.endsWith("/"),y=(h||p===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var xt=t=>t.join("/").replace(/\/\/+/g,"/"),yw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var by=["POST","PUT","PATCH","DELETE"];new Set(by);var ww=["GET",...by];new Set(ww);var Sl=T.createContext(null);Sl.displayName="DataRouter";var Bs=T.createContext(null);Bs.displayName="DataRouterState";var xy=T.createContext({isTransitioning:!1});xy.displayName="ViewTransition";var Sw=T.createContext(new Map);Sw.displayName="Fetchers";var Cw=T.createContext(null);Cw.displayName="Await";var nt=T.createContext(null);nt.displayName="Navigation";var Cl=T.createContext(null);Cl.displayName="Location";var Yi=T.createContext({outlet:null,matches:[],isDataRoute:!1});Yi.displayName="Route";var Qu=T.createContext(null);Qu.displayName="RouteError";function Aw(t,{relative:l}={}){Le(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=T.useContext(nt),{hash:c,pathname:h,search:p}=Ya(t,{relative:l}),f=h;return o!=="/"&&(f=h==="/"?o:xt([o,h])),s.createHref({pathname:f,search:p,hash:c})}function Ga(){return T.useContext(Cl)!=null}function lt(){return Le(Ga(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Cl).location}function Tw(){return T.useContext(Cl).navigationType}var wy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sy(t){T.useContext(nt).static||T.useLayoutEffect(t)}function Zu(){let{isDataRoute:t}=T.useContext(Yi);return t?Hw():jw()}function jw(){Le(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let t=T.useContext(Sl),{basename:l,navigator:o}=T.useContext(nt),{matches:s}=T.useContext(Yi),{pathname:c}=lt(),h=JSON.stringify(yy(s)),p=T.useRef(!1);return Sy(()=>{p.current=!0}),T.useCallback((m,g={})=>{if(Gi(p.current,wy),!p.current)return;if(typeof m=="number"){o.go(m);return}let y=vy(m,JSON.parse(h),c,g.relative==="path");t==null&&l!=="/"&&(y.pathname=y.pathname==="/"?l:xt([l,y.pathname])),(g.replace?o.replace:o.push)(y,g.state,g)},[l,o,h,c,t])}var Ew=T.createContext(null);function Mw(t){let l=T.useContext(Yi).outlet;return l&&T.createElement(Ew.Provider,{value:t},l)}function kw(){let{matches:t}=T.useContext(Yi),l=t[t.length-1];return l?l.params:{}}function Ya(t,{relative:l}={}){let{matches:o}=T.useContext(Yi),{pathname:s}=lt(),c=JSON.stringify(yy(o));return T.useMemo(()=>vy(t,JSON.parse(c),s,l==="path"),[t,c,s,l])}function Rw(t,l){return Cy(t,l)}function Cy(t,l,o,s){var V;Le(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c,static:h}=T.useContext(nt),{matches:p}=T.useContext(Yi),f=p[p.length-1],m=f?f.params:{},g=f?f.pathname:"/",y=f?f.pathnameBase:"/",b=f&&f.route;{let z=b&&b.path||"";Ay(g,!b||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let w=lt(),S;if(l){let z=typeof l=="string"?Mn(l):l;Le(y==="/"||((V=z.pathname)==null?void 0:V.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${z.pathname}" was given in the \`location\` prop.`),S=z}else S=w;let C=S.pathname||"/",R=C;if(y!=="/"){let z=y.replace(/^\//,"").split("/");R="/"+C.replace(/^\//,"").split("/").slice(z.length).join("/")}let D=!h&&o&&o.matches&&o.matches.length>0?o.matches:fy(t,{pathname:R});Gi(b||D!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Gi(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Pw(D&&D.map(z=>Object.assign({},z,{params:Object.assign({},m,z.params),pathname:xt([y,c.encodeLocation?c.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?y:xt([y,c.encodeLocation?c.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),p,o,s);return l&&M?T.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},M):M}function Dw(){let t=Fw(),l=xw(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},h={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",t),p=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:h},"ErrorBoundary")," or"," ",T.createElement("code",{style:h},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},l),o?T.createElement("pre",{style:c},o):null,p)}var Bw=T.createElement(Dw,null),zw=class extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,l){return l.location!==t.location||l.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:l.error,location:l.location,revalidation:t.revalidation||l.revalidation}}componentDidCatch(t,l){console.error("React Router caught the following error during render",t,l)}render(){return this.state.error!==void 0?T.createElement(Yi.Provider,{value:this.props.routeContext},T.createElement(Qu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ow({routeContext:t,match:l,children:o}){let s=T.useContext(Sl);return s&&s.static&&s.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=l.route.id),T.createElement(Yi.Provider,{value:t},o)}function Pw(t,l=[],o=null,s=null){if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let c=t,h=o==null?void 0:o.errors;if(h!=null){let m=c.findIndex(g=>g.route.id&&(h==null?void 0:h[g.route.id])!==void 0);Le(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let p=!1,f=-1;if(o)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(f=m),g.route.id){let{loaderData:y,errors:b}=o,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||w){p=!0,f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}return c.reduceRight((m,g,y)=>{let b,w=!1,S=null,C=null;o&&(b=h&&g.route.id?h[g.route.id]:void 0,S=g.route.errorElement||Bw,p&&(f<0&&y===0?(Ay("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,C=null):f===y&&(w=!0,C=g.route.hydrateFallbackElement||null)));let R=l.concat(c.slice(0,y+1)),D=()=>{let M;return b?M=S:w?M=C:g.route.Component?M=T.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=m,T.createElement(Ow,{match:g,routeContext:{outlet:m,matches:R,isDataRoute:o!=null},children:M})};return o&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?T.createElement(zw,{location:o.location,revalidation:o.revalidation,component:S,error:b,children:D(),routeContext:{outlet:null,matches:R,isDataRoute:!0}}):D()},null)}function $u(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lw(t){let l=T.useContext(Sl);return Le(l,$u(t)),l}function _w(t){let l=T.useContext(Bs);return Le(l,$u(t)),l}function Uw(t){let l=T.useContext(Yi);return Le(l,$u(t)),l}function Ju(t){let l=Uw(t),o=l.matches[l.matches.length-1];return Le(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function Vw(){return Ju("useRouteId")}function Fw(){var s;let t=T.useContext(Qu),l=_w("useRouteError"),o=Ju("useRouteError");return t!==void 0?t:(s=l.errors)==null?void 0:s[o]}function Hw(){let{router:t}=Lw("useNavigate"),l=Ju("useNavigate"),o=T.useRef(!1);return Sy(()=>{o.current=!0}),T.useCallback(async(c,h={})=>{Gi(o.current,wy),o.current&&(typeof c=="number"?t.navigate(c):await t.navigate(c,{fromRouteId:l,...h}))},[t,l])}var Im={};function Ay(t,l,o){!l&&!Im[t]&&(Im[t]=!0,Gi(!1,o))}T.memo(Nw);function Nw({routes:t,future:l,state:o}){return Cy(t,void 0,o,l)}function qw(t){return Mw(t.context)}function $i(t){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gw({basename:t="/",children:l=null,location:o,navigationType:s="POP",navigator:c,static:h=!1}){Le(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=t.replace(/^\/*/,"/"),f=T.useMemo(()=>({basename:p,navigator:c,static:h,future:{}}),[p,c,h]);typeof o=="string"&&(o=Mn(o));let{pathname:m="/",search:g="",hash:y="",state:b=null,key:w="default"}=o,S=T.useMemo(()=>{let C=wt(m,p);return C==null?null:{location:{pathname:C,search:g,hash:y,state:b,key:w},navigationType:s}},[p,m,g,y,b,w,s]);return Gi(S!=null,`<Router basename="${p}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:T.createElement(nt.Provider,{value:f},T.createElement(Cl.Provider,{children:l,value:S}))}function Yw({children:t,location:l}){return Rw(Su(t),l)}function Su(t,l=[]){let o=[];return T.Children.forEach(t,(s,c)=>{if(!T.isValidElement(s))return;let h=[...l,c];if(s.type===T.Fragment){o.push.apply(o,Su(s.props.children,h));return}Le(s.type===$i,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||h.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=Su(s.props.children,h)),o.push(p)}),o}var vs="get",bs="application/x-www-form-urlencoded";function zs(t){return t!=null&&typeof t.tagName=="string"}function Iw(t){return zs(t)&&t.tagName.toLowerCase()==="button"}function Ww(t){return zs(t)&&t.tagName.toLowerCase()==="form"}function Kw(t){return zs(t)&&t.tagName.toLowerCase()==="input"}function Xw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Qw(t,l){return t.button===0&&(!l||l==="_self")&&!Xw(t)}var hs=null;function Zw(){if(hs===null)try{new FormData(document.createElement("form"),0),hs=!1}catch{hs=!0}return hs}var $w=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ou(t){return t!=null&&!$w.has(t)?(Gi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):t}function Jw(t,l){let o,s,c,h,p;if(Ww(t)){let f=t.getAttribute("action");s=f?wt(f,l):null,o=t.getAttribute("method")||vs,c=ou(t.getAttribute("enctype"))||bs,h=new FormData(t)}else if(Iw(t)||Kw(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(s=m?wt(m,l):null,o=t.getAttribute("formmethod")||f.getAttribute("method")||vs,c=ou(t.getAttribute("formenctype"))||ou(f.getAttribute("enctype"))||bs,h=new FormData(f,t),!Zw()){let{name:g,type:y,value:b}=t;if(y==="image"){let w=g?`${g}.`:"";h.append(`${w}x`,"0"),h.append(`${w}y`,"0")}else g&&h.append(g,b)}}else{if(zs(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=vs,s=null,c=bs,p=t}return h&&c==="text/plain"&&(p=h,h=void 0),{action:s,method:o.toLowerCase(),encType:c,formData:h,body:p}}function ed(t,l){if(t===!1||t===null||typeof t>"u")throw new Error(l)}async function e1(t,l){if(t.id in l)return l[t.id];try{let o=await import(t.module);return l[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function i1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function t1(t,l,o){let s=await Promise.all(t.map(async c=>{let h=l.routes[c.route.id];if(h){let p=await e1(h,o);return p.links?p.links():[]}return[]}));return o1(s.flat(1).filter(i1).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Wm(t,l,o,s,c,h){let p=(m,g)=>o[g]?m.route.id!==o[g].route.id:!0,f=(m,g)=>{var y;return o[g].pathname!==m.pathname||((y=o[g].route.path)==null?void 0:y.endsWith("*"))&&o[g].params["*"]!==m.params["*"]};return h==="assets"?l.filter((m,g)=>p(m,g)||f(m,g)):h==="data"?l.filter((m,g)=>{var b;let y=s.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(p(m,g)||f(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=o[0])==null?void 0:b.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function n1(t,l,{includeHydrateFallback:o}={}){return l1(t.map(s=>{let c=l.routes[s.route.id];if(!c)return[];let h=[c.module];return c.clientActionModule&&(h=h.concat(c.clientActionModule)),c.clientLoaderModule&&(h=h.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(h=h.concat(c.hydrateFallbackModule)),c.imports&&(h=h.concat(c.imports)),h}).flat(1))}function l1(t){return[...new Set(t)]}function a1(t){let l={},o=Object.keys(t).sort();for(let s of o)l[s]=t[s];return l}function o1(t,l){let o=new Set;return new Set(l),t.reduce((s,c)=>{let h=JSON.stringify(a1(c));return o.has(h)||(o.add(h),s.push({key:h,link:c})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var s1=new Set([100,101,204,205]);function r1(t,l){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o.pathname==="/"?o.pathname="_root.data":l&&wt(o.pathname,l)==="/"?o.pathname=`${l.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Ty(){let t=T.useContext(Sl);return ed(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function c1(){let t=T.useContext(Bs);return ed(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var id=T.createContext(void 0);id.displayName="FrameworkContext";function jy(){let t=T.useContext(id);return ed(t,"You must render this element inside a <HydratedRouter> element"),t}function u1(t,l){let o=T.useContext(id),[s,c]=T.useState(!1),[h,p]=T.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:b}=l,w=T.useRef(null);T.useEffect(()=>{if(t==="render"&&p(!0),t==="viewport"){let R=M=>{M.forEach(V=>{p(V.isIntersecting)})},D=new IntersectionObserver(R,{threshold:.5});return w.current&&D.observe(w.current),()=>{D.disconnect()}}},[t]),T.useEffect(()=>{if(s){let R=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(R)}}},[s]);let S=()=>{c(!0)},C=()=>{c(!1),p(!1)};return o?t!=="intent"?[h,w,{}]:[h,w,{onFocus:Ma(f,S),onBlur:Ma(m,C),onMouseEnter:Ma(g,S),onMouseLeave:Ma(y,C),onTouchStart:Ma(b,S)}]:[!1,w,{}]}function Ma(t,l){return o=>{t&&t(o),o.defaultPrevented||l(o)}}function d1({page:t,...l}){let{router:o}=Ty(),s=T.useMemo(()=>fy(o.routes,t,o.basename),[o.routes,t,o.basename]);return s?T.createElement(p1,{page:t,matches:s,...l}):null}function h1(t){let{manifest:l,routeModules:o}=jy(),[s,c]=T.useState([]);return T.useEffect(()=>{let h=!1;return t1(t,l,o).then(p=>{h||c(p)}),()=>{h=!0}},[t,l,o]),s}function p1({page:t,matches:l,...o}){let s=lt(),{manifest:c,routeModules:h}=jy(),{basename:p}=Ty(),{loaderData:f,matches:m}=c1(),g=T.useMemo(()=>Wm(t,l,m,c,s,"data"),[t,l,m,c,s]),y=T.useMemo(()=>Wm(t,l,m,c,s,"assets"),[t,l,m,c,s]),b=T.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let C=new Set,R=!1;if(l.forEach(M=>{var z;let V=c.routes[M.route.id];!V||!V.hasLoader||(!g.some(N=>N.route.id===M.route.id)&&M.route.id in f&&((z=h[M.route.id])!=null&&z.shouldRevalidate)||V.hasClientLoader?R=!0:C.add(M.route.id))}),C.size===0)return[];let D=r1(t,p);return R&&C.size>0&&D.searchParams.set("_routes",l.filter(M=>C.has(M.route.id)).map(M=>M.route.id).join(",")),[D.pathname+D.search]},[p,f,s,c,g,l,t,h]),w=T.useMemo(()=>n1(y,c),[y,c]),S=h1(y);return T.createElement(T.Fragment,null,b.map(C=>T.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...o})),w.map(C=>T.createElement("link",{key:C,rel:"modulepreload",href:C,...o})),S.map(({key:C,link:R})=>T.createElement("link",{key:C,...R})))}function f1(...t){return l=>{t.forEach(o=>{typeof o=="function"?o(l):o!=null&&(o.current=l)})}}var Ey=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ey&&(window.__reactRouterVersion="7.6.0")}catch{}function m1({basename:t,children:l,window:o}){let s=T.useRef();s.current==null&&(s.current=Zx({window:o,v5Compat:!0}));let c=s.current,[h,p]=T.useState({action:c.action,location:c.location}),f=T.useCallback(m=>{T.startTransition(()=>p(m))},[p]);return T.useLayoutEffect(()=>c.listen(f),[c,f]),T.createElement(Gw,{basename:t,children:l,location:h.location,navigationType:h.action,navigator:c})}var My=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=T.forwardRef(function({onClick:l,discover:o="render",prefetch:s="none",relative:c,reloadDocument:h,replace:p,state:f,target:m,to:g,preventScrollReset:y,viewTransition:b,...w},S){let{basename:C}=T.useContext(nt),R=typeof g=="string"&&My.test(g),D,M=!1;if(typeof g=="string"&&R&&(D=g,Ey))try{let ie=new URL(window.location.href),X=g.startsWith("//")?new URL(ie.protocol+g):new URL(g),he=wt(X.pathname,C);X.origin===ie.origin&&he!=null?g=he+X.search+X.hash:M=!0}catch{Gi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Aw(g,{relative:c}),[z,N,L]=u1(s,w),W=b1(g,{replace:p,state:f,target:m,preventScrollReset:y,relative:c,viewTransition:b});function K(ie){l&&l(ie),ie.defaultPrevented||W(ie)}let Q=T.createElement("a",{...w,...L,href:D||V,onClick:M||h?l:K,ref:f1(S,N),target:m,"data-discover":!R&&o==="render"?"true":void 0});return z&&!R?T.createElement(T.Fragment,null,Q,T.createElement(d1,{page:V})):Q});Y.displayName="Link";var g1=T.forwardRef(function({"aria-current":l="page",caseSensitive:o=!1,className:s="",end:c=!1,style:h,to:p,viewTransition:f,children:m,...g},y){let b=Ya(p,{relative:g.relative}),w=lt(),S=T.useContext(Bs),{navigator:C,basename:R}=T.useContext(nt),D=S!=null&&A1(b)&&f===!0,M=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,V=w.pathname,z=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(V=V.toLowerCase(),z=z?z.toLowerCase():null,M=M.toLowerCase()),z&&R&&(z=wt(z,R)||z);const N=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let L=V===M||!c&&V.startsWith(M)&&V.charAt(N)==="/",W=z!=null&&(z===M||!c&&z.startsWith(M)&&z.charAt(M.length)==="/"),K={isActive:L,isPending:W,isTransitioning:D},Q=L?l:void 0,ie;typeof s=="function"?ie=s(K):ie=[s,L?"active":null,W?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let X=typeof h=="function"?h(K):h;return T.createElement(Y,{...g,"aria-current":Q,className:ie,ref:y,style:X,to:p,viewTransition:f},typeof m=="function"?m(K):m)});g1.displayName="NavLink";var y1=T.forwardRef(({discover:t="render",fetcherKey:l,navigate:o,reloadDocument:s,replace:c,state:h,method:p=vs,action:f,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:b,...w},S)=>{let C=S1(),R=C1(f,{relative:g}),D=p.toLowerCase()==="get"?"get":"post",M=typeof f=="string"&&My.test(f),V=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let N=z.nativeEvent.submitter,L=(N==null?void 0:N.getAttribute("formmethod"))||p;C(N||z.currentTarget,{fetcherKey:l,method:L,navigate:o,replace:c,state:h,relative:g,preventScrollReset:y,viewTransition:b})};return T.createElement("form",{ref:S,method:D,action:R,onSubmit:s?m:V,...w,"data-discover":!M&&t==="render"?"true":void 0})});y1.displayName="Form";function v1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ky(t){let l=T.useContext(Sl);return Le(l,v1(t)),l}function b1(t,{target:l,replace:o,state:s,preventScrollReset:c,relative:h,viewTransition:p}={}){let f=Zu(),m=lt(),g=Ya(t,{relative:h});return T.useCallback(y=>{if(Qw(y,l)){y.preventDefault();let b=o!==void 0?o:La(m)===La(g);f(t,{replace:b,state:s,preventScrollReset:c,relative:h,viewTransition:p})}},[m,f,g,o,s,l,t,c,h,p])}var x1=0,w1=()=>`__${String(++x1)}__`;function S1(){let{router:t}=ky("useSubmit"),{basename:l}=T.useContext(nt),o=Vw();return T.useCallback(async(s,c={})=>{let{action:h,method:p,encType:f,formData:m,body:g}=Jw(s,l);if(c.navigate===!1){let y=c.fetcherKey||w1();await t.fetch(y,o,c.action||h,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||p,formEncType:c.encType||f,flushSync:c.flushSync})}else await t.navigate(c.action||h,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||p,formEncType:c.encType||f,replace:c.replace,state:c.state,fromRouteId:o,flushSync:c.flushSync,viewTransition:c.viewTransition})},[t,l,o])}function C1(t,{relative:l}={}){let{basename:o}=T.useContext(nt),s=T.useContext(Yi);Le(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),h={...Ya(t||".",{relative:l})},p=lt();if(t==null){h.search=p.search;let f=new URLSearchParams(h.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(b=>b).forEach(b=>f.append("index",b));let y=f.toString();h.search=y?`?${y}`:""}}return(!t||t===".")&&c.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(h.pathname=h.pathname==="/"?o:xt([o,h.pathname])),La(h)}function A1(t,l={}){let o=T.useContext(xy);Le(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ky("useViewTransitionState"),c=Ya(t,{relative:l.relative});if(!o.isTransitioning)return!1;let h=wt(o.currentLocation.pathname,s)||o.currentLocation.pathname,p=wt(o.nextLocation.pathname,s)||o.nextLocation.pathname;return As(c.pathname,p)!=null||As(c.pathname,h)!=null}[...s1];function St(t){return Array.isArray?Array.isArray(t):By(t)==="[object Array]"}function T1(t){if(typeof t=="string")return t;let l=t+"";return l=="0"&&1/t==-1/0?"-0":l}function j1(t){return t==null?"":T1(t)}function Ji(t){return typeof t=="string"}function Ry(t){return typeof t=="number"}function E1(t){return t===!0||t===!1||M1(t)&&By(t)=="[object Boolean]"}function Dy(t){return typeof t=="object"}function M1(t){return Dy(t)&&t!==null}function Ei(t){return t!=null}function su(t){return!t.trim().length}function By(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const k1="Incorrect 'index' type",R1=t=>`Invalid value for key ${t}`,D1=t=>`Pattern length exceeds max of ${t}.`,B1=t=>`Missing ${t} property in key`,z1=t=>`Property 'weight' in key '${t}' must be a positive integer`,Km=Object.prototype.hasOwnProperty;class O1{constructor(l){this._keys=[],this._keyMap={};let o=0;l.forEach(s=>{let c=zy(s);this._keys.push(c),this._keyMap[c.id]=c,o+=c.weight}),this._keys.forEach(s=>{s.weight/=o})}get(l){return this._keyMap[l]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function zy(t){let l=null,o=null,s=null,c=1,h=null;if(Ji(t)||St(t))s=t,l=Xm(t),o=Cu(t);else{if(!Km.call(t,"name"))throw new Error(B1("name"));const p=t.name;if(s=p,Km.call(t,"weight")&&(c=t.weight,c<=0))throw new Error(z1(p));l=Xm(p),o=Cu(p),h=t.getFn}return{path:l,id:o,weight:c,src:s,getFn:h}}function Xm(t){return St(t)?t:t.split(".")}function Cu(t){return St(t)?t.join("."):t}function P1(t,l){let o=[],s=!1;const c=(h,p,f)=>{if(Ei(h))if(!p[f])o.push(h);else{let m=p[f];const g=h[m];if(!Ei(g))return;if(f===p.length-1&&(Ji(g)||Ry(g)||E1(g)))o.push(j1(g));else if(St(g)){s=!0;for(let y=0,b=g.length;y<b;y+=1)c(g[y],p,f+1)}else p.length&&c(g,p,f+1)}};return c(t,Ji(l)?l.split("."):l,0),s?o:o[0]}const L1={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},_1={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,l)=>t.score===l.score?t.idx<l.idx?-1:1:t.score<l.score?-1:1},U1={location:0,threshold:.6,distance:100},V1={useExtendedSearch:!1,getFn:P1,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ce={..._1,...L1,...U1,...V1};const F1=/[^ ]+/g;function H1(t=1,l=3){const o=new Map,s=Math.pow(10,l);return{get(c){const h=c.match(F1).length;if(o.has(h))return o.get(h);const p=1/Math.pow(h,.5*t),f=parseFloat(Math.round(p*s)/s);return o.set(h,f),f},clear(){o.clear()}}}class td{constructor({getFn:l=ce.getFn,fieldNormWeight:o=ce.fieldNormWeight}={}){this.norm=H1(o,3),this.getFn=l,this.isCreated=!1,this.setIndexRecords()}setSources(l=[]){this.docs=l}setIndexRecords(l=[]){this.records=l}setKeys(l=[]){this.keys=l,this._keysMap={},l.forEach((o,s)=>{this._keysMap[o.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Ji(this.docs[0])?this.docs.forEach((l,o)=>{this._addString(l,o)}):this.docs.forEach((l,o)=>{this._addObject(l,o)}),this.norm.clear())}add(l){const o=this.size();Ji(l)?this._addString(l,o):this._addObject(l,o)}removeAt(l){this.records.splice(l,1);for(let o=l,s=this.size();o<s;o+=1)this.records[o].i-=1}getValueForItemAtKeyId(l,o){return l[this._keysMap[o]]}size(){return this.records.length}_addString(l,o){if(!Ei(l)||su(l))return;let s={v:l,i:o,n:this.norm.get(l)};this.records.push(s)}_addObject(l,o){let s={i:o,$:{}};this.keys.forEach((c,h)=>{let p=c.getFn?c.getFn(l):this.getFn(l,c.path);if(Ei(p)){if(St(p)){let f=[];const m=[{nestedArrIndex:-1,value:p}];for(;m.length;){const{nestedArrIndex:g,value:y}=m.pop();if(Ei(y))if(Ji(y)&&!su(y)){let b={v:y,i:g,n:this.norm.get(y)};f.push(b)}else St(y)&&y.forEach((b,w)=>{m.push({nestedArrIndex:w,value:b})})}s.$[h]=f}else if(Ji(p)&&!su(p)){let f={v:p,n:this.norm.get(p)};s.$[h]=f}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function Oy(t,l,{getFn:o=ce.getFn,fieldNormWeight:s=ce.fieldNormWeight}={}){const c=new td({getFn:o,fieldNormWeight:s});return c.setKeys(t.map(zy)),c.setSources(l),c.create(),c}function N1(t,{getFn:l=ce.getFn,fieldNormWeight:o=ce.fieldNormWeight}={}){const{keys:s,records:c}=t,h=new td({getFn:l,fieldNormWeight:o});return h.setKeys(s),h.setIndexRecords(c),h}function ps(t,{errors:l=0,currentLocation:o=0,expectedLocation:s=0,distance:c=ce.distance,ignoreLocation:h=ce.ignoreLocation}={}){const p=l/t.length;if(h)return p;const f=Math.abs(s-o);return c?p+f/c:f?1:p}function q1(t=[],l=ce.minMatchCharLength){let o=[],s=-1,c=-1,h=0;for(let p=t.length;h<p;h+=1){let f=t[h];f&&s===-1?s=h:!f&&s!==-1&&(c=h-1,c-s+1>=l&&o.push([s,c]),s=-1)}return t[h-1]&&h-s>=l&&o.push([s,h-1]),o}const Sn=32;function G1(t,l,o,{location:s=ce.location,distance:c=ce.distance,threshold:h=ce.threshold,findAllMatches:p=ce.findAllMatches,minMatchCharLength:f=ce.minMatchCharLength,includeMatches:m=ce.includeMatches,ignoreLocation:g=ce.ignoreLocation}={}){if(l.length>Sn)throw new Error(D1(Sn));const y=l.length,b=t.length,w=Math.max(0,Math.min(s,b));let S=h,C=w;const R=f>1||m,D=R?Array(b):[];let M;for(;(M=t.indexOf(l,C))>-1;){let K=ps(l,{currentLocation:M,expectedLocation:w,distance:c,ignoreLocation:g});if(S=Math.min(K,S),C=M+y,R){let Q=0;for(;Q<y;)D[M+Q]=1,Q+=1}}C=-1;let V=[],z=1,N=y+b;const L=1<<y-1;for(let K=0;K<y;K+=1){let Q=0,ie=N;for(;Q<ie;)ps(l,{errors:K,currentLocation:w+ie,expectedLocation:w,distance:c,ignoreLocation:g})<=S?Q=ie:N=ie,ie=Math.floor((N-Q)/2+Q);N=ie;let X=Math.max(1,w-ie+1),he=p?b:Math.min(w+ie,b)+y,ne=Array(he+2);ne[he+1]=(1<<K)-1;for(let Ce=he;Ce>=X;Ce-=1){let Ae=Ce-1,U=o[t.charAt(Ae)];if(R&&(D[Ae]=+!!U),ne[Ce]=(ne[Ce+1]<<1|1)&U,K&&(ne[Ce]|=(V[Ce+1]|V[Ce])<<1|1|V[Ce+1]),ne[Ce]&L&&(z=ps(l,{errors:K,currentLocation:Ae,expectedLocation:w,distance:c,ignoreLocation:g}),z<=S)){if(S=z,C=Ae,C<=w)break;X=Math.max(1,2*w-C)}}if(ps(l,{errors:K+1,currentLocation:w,expectedLocation:w,distance:c,ignoreLocation:g})>S)break;V=ne}const W={isMatch:C>=0,score:Math.max(.001,z)};if(R){const K=q1(D,f);K.length?m&&(W.indices=K):W.isMatch=!1}return W}function Y1(t){let l={};for(let o=0,s=t.length;o<s;o+=1){const c=t.charAt(o);l[c]=(l[c]||0)|1<<s-o-1}return l}const Ts=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class Py{constructor(l,{location:o=ce.location,threshold:s=ce.threshold,distance:c=ce.distance,includeMatches:h=ce.includeMatches,findAllMatches:p=ce.findAllMatches,minMatchCharLength:f=ce.minMatchCharLength,isCaseSensitive:m=ce.isCaseSensitive,ignoreDiacritics:g=ce.ignoreDiacritics,ignoreLocation:y=ce.ignoreLocation}={}){if(this.options={location:o,threshold:s,distance:c,includeMatches:h,findAllMatches:p,minMatchCharLength:f,isCaseSensitive:m,ignoreDiacritics:g,ignoreLocation:y},l=m?l:l.toLowerCase(),l=g?Ts(l):l,this.pattern=l,this.chunks=[],!this.pattern.length)return;const b=(S,C)=>{this.chunks.push({pattern:S,alphabet:Y1(S),startIndex:C})},w=this.pattern.length;if(w>Sn){let S=0;const C=w%Sn,R=w-C;for(;S<R;)b(this.pattern.substr(S,Sn),S),S+=Sn;if(C){const D=w-Sn;b(this.pattern.substr(D),D)}}else b(this.pattern,0)}searchIn(l){const{isCaseSensitive:o,ignoreDiacritics:s,includeMatches:c}=this.options;if(l=o?l:l.toLowerCase(),l=s?Ts(l):l,this.pattern===l){let R={isMatch:!0,score:0};return c&&(R.indices=[[0,l.length-1]]),R}const{location:h,distance:p,threshold:f,findAllMatches:m,minMatchCharLength:g,ignoreLocation:y}=this.options;let b=[],w=0,S=!1;this.chunks.forEach(({pattern:R,alphabet:D,startIndex:M})=>{const{isMatch:V,score:z,indices:N}=G1(l,R,D,{location:h+M,distance:p,threshold:f,findAllMatches:m,minMatchCharLength:g,includeMatches:c,ignoreLocation:y});V&&(S=!0),w+=z,V&&N&&(b=[...b,...N])});let C={isMatch:S,score:S?w/this.chunks.length:1};return S&&c&&(C.indices=b),C}}class Jt{constructor(l){this.pattern=l}static isMultiMatch(l){return Qm(l,this.multiRegex)}static isSingleMatch(l){return Qm(l,this.singleRegex)}search(){}}function Qm(t,l){const o=t.match(l);return o?o[1]:null}class I1 extends Jt{constructor(l){super(l)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(l){const o=l===this.pattern;return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class W1 extends Jt{constructor(l){super(l)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(l){const s=l.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,l.length-1]}}}class K1 extends Jt{constructor(l){super(l)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(l){const o=l.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,this.pattern.length-1]}}}class X1 extends Jt{constructor(l){super(l)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(l){const o=!l.startsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,l.length-1]}}}class Q1 extends Jt{constructor(l){super(l)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(l){const o=l.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[l.length-this.pattern.length,l.length-1]}}}class Z1 extends Jt{constructor(l){super(l)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(l){const o=!l.endsWith(this.pattern);return{isMatch:o,score:o?0:1,indices:[0,l.length-1]}}}class Ly extends Jt{constructor(l,{location:o=ce.location,threshold:s=ce.threshold,distance:c=ce.distance,includeMatches:h=ce.includeMatches,findAllMatches:p=ce.findAllMatches,minMatchCharLength:f=ce.minMatchCharLength,isCaseSensitive:m=ce.isCaseSensitive,ignoreDiacritics:g=ce.ignoreDiacritics,ignoreLocation:y=ce.ignoreLocation}={}){super(l),this._bitapSearch=new Py(l,{location:o,threshold:s,distance:c,includeMatches:h,findAllMatches:p,minMatchCharLength:f,isCaseSensitive:m,ignoreDiacritics:g,ignoreLocation:y})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(l){return this._bitapSearch.searchIn(l)}}class _y extends Jt{constructor(l){super(l)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(l){let o=0,s;const c=[],h=this.pattern.length;for(;(s=l.indexOf(this.pattern,o))>-1;)o=s+h,c.push([s,o-1]);const p=!!c.length;return{isMatch:p,score:p?0:1,indices:c}}}const Au=[I1,_y,K1,X1,Z1,Q1,W1,Ly],Zm=Au.length,$1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,J1="|";function eS(t,l={}){return t.split(J1).map(o=>{let s=o.trim().split($1).filter(h=>h&&!!h.trim()),c=[];for(let h=0,p=s.length;h<p;h+=1){const f=s[h];let m=!1,g=-1;for(;!m&&++g<Zm;){const y=Au[g];let b=y.isMultiMatch(f);b&&(c.push(new y(b,l)),m=!0)}if(!m)for(g=-1;++g<Zm;){const y=Au[g];let b=y.isSingleMatch(f);if(b){c.push(new y(b,l));break}}}return c})}const iS=new Set([Ly.type,_y.type]);class tS{constructor(l,{isCaseSensitive:o=ce.isCaseSensitive,ignoreDiacritics:s=ce.ignoreDiacritics,includeMatches:c=ce.includeMatches,minMatchCharLength:h=ce.minMatchCharLength,ignoreLocation:p=ce.ignoreLocation,findAllMatches:f=ce.findAllMatches,location:m=ce.location,threshold:g=ce.threshold,distance:y=ce.distance}={}){this.query=null,this.options={isCaseSensitive:o,ignoreDiacritics:s,includeMatches:c,minMatchCharLength:h,findAllMatches:f,ignoreLocation:p,location:m,threshold:g,distance:y},l=o?l:l.toLowerCase(),l=s?Ts(l):l,this.pattern=l,this.query=eS(this.pattern,this.options)}static condition(l,o){return o.useExtendedSearch}searchIn(l){const o=this.query;if(!o)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:c,ignoreDiacritics:h}=this.options;l=c?l:l.toLowerCase(),l=h?Ts(l):l;let p=0,f=[],m=0;for(let g=0,y=o.length;g<y;g+=1){const b=o[g];f.length=0,p=0;for(let w=0,S=b.length;w<S;w+=1){const C=b[w],{isMatch:R,indices:D,score:M}=C.search(l);if(R){if(p+=1,m+=M,s){const V=C.constructor.type;iS.has(V)?f=[...f,...D]:f.push(D)}}else{m=0,p=0,f.length=0;break}}if(p){let w={isMatch:!0,score:m/p};return s&&(w.indices=f),w}}return{isMatch:!1,score:1}}}const Tu=[];function nS(...t){Tu.push(...t)}function ju(t,l){for(let o=0,s=Tu.length;o<s;o+=1){let c=Tu[o];if(c.condition(t,l))return new c(t,l)}return new Py(t,l)}const js={AND:"$and",OR:"$or"},Eu={PATH:"$path",PATTERN:"$val"},Mu=t=>!!(t[js.AND]||t[js.OR]),lS=t=>!!t[Eu.PATH],aS=t=>!St(t)&&Dy(t)&&!Mu(t),$m=t=>({[js.AND]:Object.keys(t).map(l=>({[l]:t[l]}))});function Uy(t,l,{auto:o=!0}={}){const s=c=>{let h=Object.keys(c);const p=lS(c);if(!p&&h.length>1&&!Mu(c))return s($m(c));if(aS(c)){const m=p?c[Eu.PATH]:h[0],g=p?c[Eu.PATTERN]:c[m];if(!Ji(g))throw new Error(R1(m));const y={keyId:Cu(m),pattern:g};return o&&(y.searcher=ju(g,l)),y}let f={children:[],operator:h[0]};return h.forEach(m=>{const g=c[m];St(g)&&g.forEach(y=>{f.children.push(s(y))})}),f};return Mu(t)||(t=$m(t)),s(t)}function oS(t,{ignoreFieldNorm:l=ce.ignoreFieldNorm}){t.forEach(o=>{let s=1;o.matches.forEach(({key:c,norm:h,score:p})=>{const f=c?c.weight:null;s*=Math.pow(p===0&&f?Number.EPSILON:p,(f||1)*(l?1:h))}),o.score=s})}function sS(t,l){const o=t.matches;l.matches=[],Ei(o)&&o.forEach(s=>{if(!Ei(s.indices)||!s.indices.length)return;const{indices:c,value:h}=s;let p={indices:c,value:h};s.key&&(p.key=s.key.src),s.idx>-1&&(p.refIndex=s.idx),l.matches.push(p)})}function rS(t,l){l.score=t.score}function cS(t,l,{includeMatches:o=ce.includeMatches,includeScore:s=ce.includeScore}={}){const c=[];return o&&c.push(sS),s&&c.push(rS),t.map(h=>{const{idx:p}=h,f={item:l[p],refIndex:p};return c.length&&c.forEach(m=>{m(h,f)}),f})}class En{constructor(l,o={},s){this.options={...ce,...o},this.options.useExtendedSearch,this._keyStore=new O1(this.options.keys),this.setCollection(l,s)}setCollection(l,o){if(this._docs=l,o&&!(o instanceof td))throw new Error(k1);this._myIndex=o||Oy(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(l){Ei(l)&&(this._docs.push(l),this._myIndex.add(l))}remove(l=()=>!1){const o=[];for(let s=0,c=this._docs.length;s<c;s+=1){const h=this._docs[s];l(h,s)&&(this.removeAt(s),s-=1,c-=1,o.push(h))}return o}removeAt(l){this._docs.splice(l,1),this._myIndex.removeAt(l)}getIndex(){return this._myIndex}search(l,{limit:o=-1}={}){const{includeMatches:s,includeScore:c,shouldSort:h,sortFn:p,ignoreFieldNorm:f}=this.options;let m=Ji(l)?Ji(this._docs[0])?this._searchStringList(l):this._searchObjectList(l):this._searchLogical(l);return oS(m,{ignoreFieldNorm:f}),h&&m.sort(p),Ry(o)&&o>-1&&(m=m.slice(0,o)),cS(m,this._docs,{includeMatches:s,includeScore:c})}_searchStringList(l){const o=ju(l,this.options),{records:s}=this._myIndex,c=[];return s.forEach(({v:h,i:p,n:f})=>{if(!Ei(h))return;const{isMatch:m,score:g,indices:y}=o.searchIn(h);m&&c.push({item:h,idx:p,matches:[{score:g,value:h,norm:f,indices:y}]})}),c}_searchLogical(l){const o=Uy(l,this.options),s=(f,m,g)=>{if(!f.children){const{keyId:b,searcher:w}=f,S=this._findMatches({key:this._keyStore.get(b),value:this._myIndex.getValueForItemAtKeyId(m,b),searcher:w});return S&&S.length?[{idx:g,item:m,matches:S}]:[]}const y=[];for(let b=0,w=f.children.length;b<w;b+=1){const S=f.children[b],C=s(S,m,g);if(C.length)y.push(...C);else if(f.operator===js.AND)return[]}return y},c=this._myIndex.records,h={},p=[];return c.forEach(({$:f,i:m})=>{if(Ei(f)){let g=s(o,f,m);g.length&&(h[m]||(h[m]={idx:m,item:f,matches:[]},p.push(h[m])),g.forEach(({matches:y})=>{h[m].matches.push(...y)}))}}),p}_searchObjectList(l){const o=ju(l,this.options),{keys:s,records:c}=this._myIndex,h=[];return c.forEach(({$:p,i:f})=>{if(!Ei(p))return;let m=[];s.forEach((g,y)=>{m.push(...this._findMatches({key:g,value:p[y],searcher:o}))}),m.length&&h.push({idx:f,item:p,matches:m})}),h}_findMatches({key:l,value:o,searcher:s}){if(!Ei(o))return[];let c=[];if(St(o))o.forEach(({v:h,i:p,n:f})=>{if(!Ei(h))return;const{isMatch:m,score:g,indices:y}=s.searchIn(h);m&&c.push({score:g,key:l,value:h,idx:p,norm:f,indices:y})});else{const{v:h,n:p}=o,{isMatch:f,score:m,indices:g}=s.searchIn(h);f&&c.push({score:m,key:l,value:h,norm:p,indices:g})}return c}}En.version="7.1.0";En.createIndex=Oy;En.parseIndex=N1;En.config=ce;En.parseQuery=Uy;nS(tS);const uS=[{id:"introduction",title:"Introduction: Navigating the Educational Journey",shortTitle:"Introduction",description:"An overview of the guide and how to use it effectively to support your military child's education.",image:"https://iili.io/JXvVMhg.jpg",sections:[{id:"about-guide",title:"About This Guide",content:`
          <p>Welcome to "Navigating Educational Journeys: A Military Family's Guide." This comprehensive resource is designed specifically for military families navigating the complex landscape of education for their children.</p>
          <p>Military life brings unique challenges to education—frequent moves, deployments, and transitions can disrupt learning and create stress. But military life also offers unique opportunities: exposure to diverse cultures, development of adaptability, and access to specialized resources.</p>
          <p>This guide brings together expert advice, practical tools, and curated resources to help you support your child's education through every stage and transition of military life.</p>
        `},{id:"how-to-use",title:"How to Use This Guide",content:`
          <p>This guide is organized to help you find information quickly based on your specific needs:</p>
          <ul>
            <li><strong>By Age/Stage:</strong> Navigate to the chapter that corresponds to your child's current educational stage.</li>
            <li><strong>By Situation:</strong> If you're facing a specific situation (like a PCS move or deployment), look for the relevant sections highlighted throughout.</li>
            <li><strong>By Topic:</strong> Use the table of contents or search function to find specific educational topics.</li>
          </ul>
          <p>Each chapter contains practical advice, checklists, and resources to help you take action.</p>
        `}]},{id:"chapter-1",title:"Chapter 1: Foundations for Educational Success",shortTitle:"Foundations",description:"Building strong educational foundations through family involvement, time management, and developing resilience.",image:"https://iili.io/JXvVVWJ.jpg",sections:[{id:"school-readiness",title:"School Readiness and Early Education",content:`
          <p>Preparing your child for school begins long before the first day of kindergarten. Early childhood education sets the foundation for future academic success.</p>
          <h4>Key Developmental Areas</h4>
          <ul>
            <li><strong>Social-Emotional Skills:</strong> Ability to express feelings appropriately, take turns, and follow directions</li>
            <li><strong>Language and Literacy:</strong> Speaking clearly, understanding stories, recognizing letters</li>
            <li><strong>Cognitive Skills:</strong> Problem-solving, counting, sorting, and pattern recognition</li>
            <li><strong>Physical Development:</strong> Fine motor skills (holding pencils, cutting) and gross motor skills (running, jumping)</li>
          </ul>
        `},{id:"family-involvement",title:"Family Involvement in Education",content:`
          <p>Research consistently shows that family involvement is one of the strongest predictors of academic success. For military families, staying involved despite deployments and moves is both challenging and essential.</p>
          <h4>Ways to Stay Involved</h4>
          <ul>
            <li>Establish consistent communication with teachers, even during deployments</li>
            <li>Create a dedicated homework space and routine at home</li>
            <li>Participate in school events when possible, virtually if necessary</li>
            <li>Read with your child daily, regardless of their age</li>
            <li>Use technology to maintain connection during separations</li>
          </ul>
        `}]},{id:"chapter-2",title:"Chapter 2: Navigating the K-12 System",shortTitle:"K-12 System",description:"Understanding different school options, managing transitions, and advocating for your child in the K-12 education system.",image:"https://iili.io/JXvVXkF.jpg",sections:[{id:"school-options",title:"Understanding School Options",content:`
          <p>Military families have several education options to consider, each with unique advantages:</p>
          <h4>Public Schools</h4>
          <p>Most military children attend public schools in the local community. These schools are free and must accept all students who live in their district.</p>
          <h4>Department of Defense Education Activity (DoDEA) Schools</h4>
          <p>Located on military installations worldwide, these schools follow a consistent curriculum designed for military-connected students.</p>
          <h4>Private Schools</h4>
          <p>Tuition-based schools that may offer specialized programs, smaller class sizes, or religious education.</p>
          <h4>Charter Schools</h4>
          <p>Publicly funded but independently operated schools that often have specialized educational approaches.</p>
          <h4>Homeschooling</h4>
          <p>Parent-directed education that can provide consistency during moves and flexibility for military lifestyles.</p>
        `}]},{id:"chapter-3",title:"Chapter 3: Pathways After High School",shortTitle:"After High School",description:"Exploring college, career, and military service options for military-connected students after high school.",image:"https://iili.io/JXvVjYu.jpg",sections:[{id:"college-planning",title:"College Planning for Military Families",content:`
          <p>Planning for college requires additional considerations for military families, particularly regarding financial aid, residency status, and potential moves during the application process.</p>
          
          <h4>Timeline for College Preparation</h4>
          <ul>
            <li><strong>9th Grade:</strong> Focus on academic foundation, explore interests, understand high school graduation requirements</li>
            <li><strong>10th Grade:</strong> Take PSAT, research colleges, understand how military benefits apply to higher education</li>
            <li><strong>11th Grade:</strong> Take SAT/ACT, visit colleges when possible, research scholarships for military dependents</li>
            <li><strong>12th Grade:</strong> Complete applications, apply for financial aid, make final decisions</li>
          </ul>
        `},{id:"military-service",title:"Military Service Options",content:`
          <p>Many military children consider following in their parents' footsteps by joining the military themselves. Understanding the various pathways can help them make informed decisions.</p>
          
          <h4>Service Academy Preparation</h4>
          <p>The U.S. Military, Naval, Air Force, Coast Guard, and Merchant Marine Academies offer prestigious education with specific application requirements:</p>
          <ul>
            <li>Congressional nomination process (except Coast Guard Academy)</li>
            <li>Physical fitness standards</li>
            <li>Academic excellence requirements</li>
            <li>Leadership experience expectations</li>
          </ul>
        `}]},{id:"chapter-4",title:"Chapter 4: Special Considerations for Military Families",shortTitle:"Military Families",description:"Addressing unique challenges like deployments, special education needs, and overseas transitions.",image:"https://iili.io/JXvVwVs.jpg",sections:[{id:"deployment-support",title:"Educational Support During Deployments",content:`
          <p>Deployments create significant challenges for maintaining educational stability. Proactive planning can help minimize disruption.</p>
          <h4>Before Deployment</h4>
          <ul>
            <li>Inform school staff about the upcoming deployment</li>
            <li>Establish communication plans with teachers</li>
            <li>Create a deployment calendar for children to track time</li>
            <li>Prepare academic support resources</li>
          </ul>
        `}]},{id:"chapter-5",title:"Chapter 5: Alternative and Supplemental Education",shortTitle:"Alternative Education",description:"Exploring homeschooling, online learning, and enrichment opportunities for military children.",image:"https://iili.io/JXvVNkN.jpg",sections:[{id:"homeschooling",title:"Homeschooling in Military Families",content:`
          <p>Homeschooling has become increasingly popular among military families seeking educational continuity during frequent moves.</p>
          <h4>Benefits for Military Families</h4>
          <ul>
            <li>Consistent education despite relocations</li>
            <li>Flexible scheduling around military obligations</li>
            <li>Ability to address individual learning needs</li>
            <li>Opportunity to incorporate cultural experiences during overseas assignments</li>
          </ul>
        `}]},{id:"chapter-6",title:"Chapter 6: Social-Emotional Wellbeing",shortTitle:"Wellbeing",description:"Supporting the social-emotional health of military children throughout their educational journey.",image:"https://iili.io/JXvVOYx.jpg",sections:[{id:"transitions-impact",title:"Understanding the Impact of Transitions",content:`
          <p>Military children experience significant transitions that can affect their social-emotional development and academic performance.</p>
          <h4>Common Reactions to Transitions</h4>
          <ul>
            <li>Temporary regression in academic performance</li>
            <li>Changes in behavior or mood</li>
            <li>Difficulty forming new friendships</li>
            <li>Anxiety about fitting in at new schools</li>
          </ul>
        `}]},{id:"appendices",title:"Appendices and Resources",shortTitle:"Resources",description:"Comprehensive resources, checklists, and contact information to support military families.",image:"https://iili.io/JXvVZAB.jpg",sections:[{id:"checklists",title:"Checklists and Timelines",content:`
          <h4>PCS Move: School Transition Checklist</h4>
          <ul>
            <li>Request official school records</li>
            <li>Collect samples of schoolwork</li>
            <li>Obtain teacher recommendations</li>
            <li>Research schools at new location</li>
            <li>Contact School Liaison Officer</li>
            <li>Gather medical and immunization records</li>
            <li>Identify special programs needed</li>
            <li>Schedule school tours</li>
          </ul>
        `},{id:"glossary",title:"Glossary of Educational Terms",content:`
          <ul>
            <li><strong>504 Plan:</strong> A plan that provides accommodations for students with disabilities who don't require special education services</li>
            <li><strong>Advanced Placement (AP):</strong> College-level courses offered in high school</li>
            <li><strong>DoDEA:</strong> Department of Defense Education Activity, operates schools for military children</li>
            <li><strong>EFMP:</strong> Exceptional Family Member Program, supports military families with special needs</li>
            <li><strong>IEP:</strong> Individualized Education Program, a legal document outlining special education services</li>
            <li><strong>Interstate Compact:</strong> Agreement between states to address transition issues for military children</li>
            <li><strong>PCS:</strong> Permanent Change of Station, military term for relocation</li>
            <li><strong>School Liaison Officer (SLO):</strong> Military staff who help families navigate educational systems</li>
            <li><strong>STEM:</strong> Science, Technology, Engineering, and Mathematics</li>
          </ul>
        `}]}],dS=t=>t?t.replace(/<[^>]*>/g," ").replace(/&[^;]+;/g," ").replace(/\s+/g," ").trim():"",hS=()=>{const t=[];return uS.forEach(l=>{t.push({id:`chapter-${l.id}`,type:"chapter",title:l.title,shortTitle:l.shortTitle||"",description:l.description||"",content:"",url:`/guide/${l.id}`,image:l.image||"",tags:["chapter",l.shortTitle.toLowerCase()],weight:1}),l.sections&&l.sections.length>0&&l.sections.forEach(o=>{const s=dS(o.content);t.push({id:`section-${l.id}-${o.id}`,type:"section",title:o.title,parentTitle:l.title,parentId:l.id,content:s,url:`/guide/${l.id}/${o.id}`,tags:["section",l.shortTitle.toLowerCase(),o.title.toLowerCase()],weight:.8})})}),t},pS=()=>[{id:"dodea",term:"DoDEA",definition:"Department of Defense Education Activity. The civilian agency within the Department of Defense that operates schools for military children worldwide."},{id:"efmp",term:"EFMP",definition:"Exceptional Family Member Program. A mandatory enrollment program for military family members with special medical or educational needs."},{id:"iep",term:"IEP",definition:"Individualized Education Program. A legal document that outlines special education services, supports, and accommodations a child will receive."},{id:"504-plan",term:"504 Plan",definition:"A plan that provides accommodations for students with disabilities who don't require special education services under IDEA. Named after Section 504 of the Rehabilitation Act of 1973."},{id:"slo",term:"School Liaison Officer (SLO)",definition:"Military staff who help families navigate educational systems and serve as a link between military families and schools."}].map(l=>({id:`glossary-${l.id}`,type:"glossary",title:l.term,content:l.definition,url:`/glossary#${l.id}`,tags:["glossary","term",l.term.toLowerCase()],weight:.9})),fS=()=>{const t=[{id:"pcs-move",title:"PCS Move: School Transition Checklist",description:"A comprehensive checklist to help your child transition smoothly between schools during a Permanent Change of Station.",items:[{id:"records",text:"Request official school records",category:"Before Moving"},{id:"samples",text:"Collect samples of schoolwork",category:"Before Moving"},{id:"recommendations",text:"Obtain teacher recommendations",category:"Before Moving"}]},{id:"deployment",title:"Deployment: Education Support Timeline",description:"A timeline to help maintain educational stability during a parent's deployment.",items:[{id:"inform",text:"Inform school about upcoming deployment",category:"Pre-Deployment"},{id:"communication",text:"Establish communication plan with teachers",category:"Pre-Deployment"},{id:"calendar",text:"Create a deployment calendar for children",category:"Pre-Deployment"}]}],l=[];return t.forEach(o=>{l.push({id:`checklist-${o.id}`,type:"checklist",title:o.title,content:o.description,url:`/checklists/${o.id}`,tags:["checklist",o.title.toLowerCase()],weight:.85}),o.items&&o.items.length>0&&o.items.forEach(s=>{l.push({id:`checklist-item-${o.id}-${s.id}`,type:"checklist-item",title:s.text,parentTitle:o.title,parentId:o.id,content:`${s.category}: ${s.text}`,url:`/checklists/${o.id}#${s.id}`,tags:["checklist-item",o.title.toLowerCase(),s.category.toLowerCase()],weight:.7})})}),l},mS=()=>[{id:"school-liaison",name:"School Liaison Officers",description:"Primary point of contact for school-related matters at military installations.",website:"https://www.dodea.edu/Partnership/schoolLiaisonOfficers.cfm",category:"Installation-Based Resources"},{id:"military-onesource",name:"Military OneSource",description:"Comprehensive resource for military families offering counseling, education support, and more.",website:"https://www.militaryonesource.mil",category:"Support Services"}].map(l=>({id:`resource-${l.id}`,type:"resource",title:l.name,content:l.description,url:`/resources#${l.id}`,tags:["resource",l.category.toLowerCase(),l.name.toLowerCase()],weight:.75})),gS=()=>[...hS(),...pS(),...fS(),...mS()],ru=gS(),Jm={includeScore:!0,threshold:.3,keys:[{name:"title",weight:.4},{name:"content",weight:.3},{name:"description",weight:.2},{name:"tags",weight:.1}]},Vy=T.createContext(),nd=()=>{const t=T.useContext(Vy);if(!t)throw new Error("useSearch must be used within a SearchProvider");return t},yS=({children:t})=>{const[l,o]=T.useState(""),[s,c]=T.useState([]),[h,p]=T.useState({chapter:!0,section:!0,glossary:!0,checklist:!0,"checklist-item":!0,resource:!0}),[f,m]=T.useState([]),[g,y]=T.useState(!1),b=T.useMemo(()=>!ru||ru.length===0?(console.warn("Search index is empty or not available"),new En([],Jm)):new En(ru,Jm),[]),w=[{id:"chapter",label:"Chapters"},{id:"section",label:"Chapter Sections"},{id:"glossary",label:"Glossary Terms"},{id:"checklist",label:"Checklists"},{id:"checklist-item",label:"Checklist Items"},{id:"resource",label:"Resources"}],S=N=>{if(!N.trim()){c([]),m([]);return}y(!0);const K=[...b.search(N).filter(X=>h[X.item.type])].sort((X,he)=>{const ne=X.score-he.score;return ne!==0?ne:he.item.weight-X.item.weight});c(K),y(!1);const ie=K.slice(0,7).map(X=>{var he;return{id:X.item.id,title:X.item.title,type:X.item.type,typeLabel:((he=w.find(ne=>ne.id===X.item.type))==null?void 0:he.label)||X.item.type,content:X.item.content||X.item.description||"",url:X.item.url,score:X.score}});m(ie)};T.useEffect(()=>{const N=setTimeout(()=>{S(l)},300);return()=>clearTimeout(N)},[l,h]);const C=N=>{p(L=>({...L,[N]:!L[N]}))},R=()=>{p({chapter:!0,section:!0,glossary:!0,checklist:!0,"checklist-item":!0,resource:!0})},D=()=>{o(""),c([]),m([]),R()},M=(N,L)=>{if(!L.trim()||!N)return N;const W=L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),K=new RegExp(`(${W})`,"gi");return N.replace(K,"<mark>$1</mark>")},V=(N,L,W=150)=>{if(!L.trim()||!N)return N;const K=L.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),ie=new RegExp(`(${K})`,"gi").exec(N);if(!ie)return N.substring(0,W)+"...";const X=ie.index,he=Math.floor(W/2);let ne=Math.max(0,X-he),Ue=Math.min(N.length,X+ie[0].length+he);Ue-ne<W&&(ne===0?Ue=Math.min(N.length,W):Ue===N.length&&(ne=Math.max(0,N.length-W)));let Ce=N.substring(ne,Ue);return ne>0&&(Ce="..."+Ce),Ue<N.length&&(Ce=Ce+"..."),Ce},z=T.useMemo(()=>({query:l,setQuery:o,results:s,isLoading:g,activeFilters:h,toggleFilter:C,resetFilters:R,filterOptions:w,clearSearch:D,suggestions:f,highlightMatches:M,getContextSnippet:V}),[l,s,g,h,f]);return r.jsx(Vy.Provider,{value:z,children:t})},vS=({isCompact:t=!1})=>{const{query:l,setQuery:o,suggestions:s,clearSearch:c}=nd(),[h,p]=T.useState(!1),[f,m]=T.useState(!1),g=T.useRef(null),y=T.useRef(null),b=Zu();T.useEffect(()=>{const X=he=>{g.current&&!g.current.contains(he.target)&&y.current&&!y.current.contains(he.target)&&m(!1)};return document.addEventListener("mousedown",X),()=>{document.removeEventListener("mousedown",X)}},[]);const w=X=>{X.preventDefault(),l.trim()&&(b(`/search?q=${encodeURIComponent(l)}`),m(!1))},S=X=>{o(X.title),X.url?b(X.url):b(`/search?q=${encodeURIComponent(X.title)}`),m(!1)},C=(X,he)=>{if(!he.trim()||!X)return X;try{const ne=he.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Ue=new RegExp(`(${ne})`,"gi");return X.split(Ue).map((Ae,U)=>Ue.test(Ae)?r.jsx("mark",{style:{backgroundColor:"#F6C100",padding:0},children:Ae},U):Ae)}catch{return X}},R=(X,he,ne=60)=>{if(!he.trim()||!X)return"";try{const Ue=he.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Ae=new RegExp(`(${Ue})`,"gi").exec(X);if(!Ae)return X.substring(0,ne)+"...";const U=Ae.index,I=Math.floor(ne/2);let J=Math.max(0,U-I),ge=Math.min(X.length,U+Ae[0].length+I);ge-J<ne&&(J===0?ge=Math.min(X.length,ne):ge===X.length&&(J=Math.max(0,X.length-ne)));let j=X.substring(J,ge);return J>0&&(j="..."+j),ge<X.length&&(j=j+"..."),j}catch{return X.substring(0,ne)+"..."}},D={position:"relative",width:t?"200px":"100%",maxWidth:t?"200px":"500px"},M={display:"flex",alignItems:"center",width:"100%"},V={width:"100%",padding:t?"0.5rem 2.5rem 0.5rem 0.75rem":"0.75rem 3rem 0.75rem 1rem",borderRadius:"0.375rem",border:"1px solid #d1d5db",fontSize:t?"0.875rem":"1rem",outline:"none",backgroundColor:"white",transition:"border-color 0.2s, box-shadow 0.2s",boxShadow:h?"0 0 0 3px rgba(0, 95, 129, 0.2)":"none",borderColor:h?"#005F81":"#d1d5db"},z={position:"absolute",right:"0.5rem",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#4b5563",padding:"0.25rem"},N={position:"absolute",right:t?"1.75rem":"2.25rem",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",display:l?"flex":"none",alignItems:"center",justifyContent:"center",color:"#9ca3af",padding:"0.25rem"},L={position:"absolute",top:"100%",left:0,width:t?"300px":"100%",backgroundColor:"white",borderRadius:"0.375rem",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",marginTop:"0.25rem",zIndex:50,maxHeight:"400px",overflowY:"auto",display:f&&s.length>0?"block":"none"},W={padding:"0.75rem 1rem",cursor:"pointer",borderBottom:"1px solid #f3f4f6",transition:"background-color 0.2s"},K={fontWeight:"600",color:"#003260",marginBottom:"0.25rem",fontSize:"0.9rem"},Q={display:"inline-block",fontSize:"0.7rem",fontWeight:"500",padding:"0.1rem 0.4rem",borderRadius:"0.25rem",backgroundColor:"#f3f4f6",color:"#4b5563",marginBottom:"0.25rem"},ie={fontSize:"0.8rem",color:"#6b7280",marginTop:"0.25rem",lineHeight:"1.3"};return r.jsxs("div",{style:D,children:[r.jsxs("form",{onSubmit:w,style:M,children:[r.jsx("input",{ref:g,type:"text",placeholder:t?"Search...":"Search chapters, glossary, resources...",value:l,onChange:X=>o(X.target.value),onFocus:()=>{p(!0),m(!0)},onBlur:()=>p(!1),style:V,"aria-label":"Search"}),l&&r.jsx("button",{type:"button",onClick:()=>{c(),g.current.focus()},style:N,"aria-label":"Clear search",children:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.jsx("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})}),r.jsx("button",{type:"submit",style:z,"aria-label":"Submit search",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t?"16":"20",height:t?"16":"20",fill:"currentColor",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})]}),r.jsx("div",{ref:y,style:L,children:s.map((X,he)=>r.jsxs("div",{style:W,onMouseDown:()=>S(X),onMouseEnter:ne=>{ne.currentTarget.style.backgroundColor="#f9fafb"},onMouseLeave:ne=>{ne.currentTarget.style.backgroundColor="white"},children:[r.jsx("div",{style:Q,children:X.typeLabel}),r.jsx("div",{style:K,children:C(X.title,l)}),X.content&&r.jsx("div",{style:ie,children:C(R(X.content,l),l)})]},he))})]})},bS=()=>{const[t,l]=T.useState(!1),[o,s]=T.useState(!1),[c,h]=T.useState(0),[p,f]=T.useState(!0);T.useRef(null);const m=()=>{l(!t)};T.useEffect(()=>{const W=()=>{const K=window.scrollY;s(K>10),K>c&&K>100?f(!1):f(!0),h(K)};return window.addEventListener("scroll",W,{passive:!0}),W(),()=>{window.removeEventListener("scroll",W)}},[c]);const g={position:"fixed",top:0,left:0,right:0,backgroundColor:"white",boxShadow:o?"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)":"none",borderBottom:o?"none":"1px solid #e5e7eb",zIndex:1e3,transition:"transform 0.3s ease, box-shadow 0.3s ease, border-bottom 0.3s ease",transform:p?"translateY(0)":"translateY(-100%)"},y={backgroundColor:"#003260",color:"white",padding:"0.5rem 0",position:"relative",zIndex:1001},b={maxWidth:"1280px",margin:"0 auto",padding:"0 1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},w={fontFamily:'"Bebas Neue", sans-serif',fontSize:"1.25rem",letterSpacing:"0.05em"},S={display:"none",gap:"1rem",fontSize:"0.875rem"};window.innerWidth>=768&&(S.display="flex");const C={color:"white",textDecoration:"none"},R={maxWidth:"1280px",margin:"0 auto",padding:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},D={display:"flex",alignItems:"center",textDecoration:"none"},M={fontFamily:'"Bebas Neue", sans-serif',fontSize:"1.5rem",color:"#003260"},V={display:"none",gap:"1.5rem"};window.innerWidth>=768&&(V.display="flex");const z={fontFamily:"Montserrat, sans-serif",fontWeight:"500",color:"#343a40",textDecoration:"none"},N={display:window.innerWidth>=768?"none":"block",color:"#343a40",background:"none",border:"none",cursor:"pointer"},L={marginTop:"1rem",paddingBottom:"1rem",display:t?"block":"none"};return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"utility-bar",style:{...y,position:"fixed",top:0,left:0,right:0,transform:"none"},children:r.jsxs("div",{style:b,children:[r.jsx("div",{style:w,children:"MILITARY FAMILY EDUCATION GUIDE"}),r.jsxs("div",{style:S,children:[r.jsx(Y,{to:"/contact",style:C,state:{scrollToTop:!0},children:"Contact Us"}),r.jsx(Y,{to:"/about",style:C,state:{scrollToTop:!0},children:"About Us"})]}),r.jsx("div",{children:r.jsx(vS,{isCompact:!0})})]})}),r.jsx("header",{style:{...g,top:"40px"},children:r.jsxs("div",{style:R,children:[r.jsx(Y,{to:"/",style:D,state:{scrollToTop:!0},children:r.jsx("span",{style:M,children:"NAVIGATING EDUCATIONAL JOURNEYS"})}),r.jsxs("nav",{style:V,children:[r.jsx(Y,{to:"/",style:z,state:{scrollToTop:!0},children:"Home"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{style:{...z,display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer"},children:["Resource Guide",r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem",marginLeft:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r.jsxs("div",{style:{position:"absolute",left:0,top:"100%",width:"240px",backgroundColor:"white",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",borderRadius:"0.25rem",padding:"0.5rem 0",zIndex:10,display:"none"},className:"dropdown-menu",children:[r.jsx(Y,{to:"/guide/introduction",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Introduction"}),r.jsx(Y,{to:"/guide/chapter-1",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 1: Foundations"}),r.jsx(Y,{to:"/guide/chapter-2",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 2: K-12 System"}),r.jsx(Y,{to:"/guide/chapter-3",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 3: After High School"}),r.jsx(Y,{to:"/guide/chapter-4",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 4: Military Families"}),r.jsx(Y,{to:"/guide/chapter-5",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 5: Alternative Education"}),r.jsx(Y,{to:"/guide/chapter-6",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 6: Wellbeing"}),r.jsx(Y,{to:"/guide/appendices",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Appendices & Resources"}),r.jsx(Y,{to:"/guide/conclusion",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Conclusion"})]})]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{style:{...z,display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer"},children:["Checklists",r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem",marginLeft:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r.jsxs("div",{style:{position:"absolute",left:0,top:"100%",width:"280px",backgroundColor:"white",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",borderRadius:"0.25rem",padding:"0.5rem 0",zIndex:10,display:"none"},className:"dropdown-menu",children:[r.jsx(Y,{to:"/checklists#school-transition",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"School Transition Checklist"}),r.jsx(Y,{to:"/checklists#deployment-support",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Deployment Education Support"}),r.jsx(Y,{to:"/checklists#college-application",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"College Application Timeline"}),r.jsx(Y,{to:"/checklists#elementary-school",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Elementary School Checklist"}),r.jsx(Y,{to:"/checklists#middle-school",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Middle School Planning"}),r.jsx(Y,{to:"/checklists#high-school",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"High School Year-by-Year"})]})]}),r.jsxs("div",{style:{position:"relative"},children:[r.jsxs("button",{style:{...z,display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer"},children:["References",r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem",marginLeft:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r.jsxs("div",{style:{position:"absolute",left:0,top:"100%",width:"280px",backgroundColor:"white",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",borderRadius:"0.25rem",padding:"0.5rem 0",zIndex:10,display:"none"},className:"dropdown-menu",children:[r.jsx(Y,{to:"/references#military-family-education",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Military Family Education"}),r.jsx(Y,{to:"/references#school-readiness",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"School Readiness & Early Education"}),r.jsx(Y,{to:"/references#college-preparation",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"College Preparation & Applications"}),r.jsx(Y,{to:"/references#special-education",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Special Education & Learning Support"}),r.jsx(Y,{to:"/references#homeschooling",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Homeschooling Resources"}),r.jsx(Y,{to:"/references#mental-health",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Mental Health & Resilience"}),r.jsx(Y,{to:"/references#career-exploration",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Career Exploration & Planning"}),r.jsx(Y,{to:"/references#virginia-resources",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Virginia-Specific Resources"}),r.jsx(Y,{to:"/references#summer-learning",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Summer Learning & Enrichment"}),r.jsx(Y,{to:"/references#academic-support",style:{display:"block",padding:"0.5rem 1rem",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Academic Support & Planning"})]})]}),r.jsx(Y,{to:"/glossary",style:z,state:{scrollToTop:!0},children:"Glossary"}),r.jsx(Y,{to:"/search",style:z,state:{scrollToTop:!0},children:r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem",marginRight:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),"Search"]})})]}),r.jsx("button",{style:N,onClick:m,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1.5rem",width:"1.5rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t?r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),r.jsxs("div",{style:L,children:[r.jsx(Y,{to:"/",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none"},state:{scrollToTop:!0},children:"Home"}),r.jsxs("div",{style:{padding:"0.5rem 0"},children:[r.jsxs("button",{onClick:()=>document.getElementById("mobileSubmenu").style.display=document.getElementById("mobileSubmenu").style.display==="block"?"none":"block",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",color:"#343a40",background:"none",border:"none",cursor:"pointer"},children:["Resource Guide",r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r.jsxs("div",{id:"mobileSubmenu",style:{display:"none",paddingLeft:"1rem",marginTop:"0.5rem"},children:[r.jsx(Y,{to:"/guide/introduction",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Introduction"}),r.jsx(Y,{to:"/guide/chapter-1",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 1: Foundations"}),r.jsx(Y,{to:"/guide/chapter-2",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 2: K-12 System"}),r.jsx(Y,{to:"/guide/chapter-3",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 3: After High School"}),r.jsx(Y,{to:"/guide/chapter-4",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 4: Military Families"}),r.jsx(Y,{to:"/guide/chapter-5",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 5: Alternative Education"}),r.jsx(Y,{to:"/guide/chapter-6",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Chapter 6: Wellbeing"}),r.jsx(Y,{to:"/guide/appendices",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Appendices & Resources"}),r.jsx(Y,{to:"/guide/conclusion",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Conclusion"})]})]}),r.jsxs("div",{style:{padding:"0.5rem 0"},children:[r.jsxs("button",{onClick:()=>document.getElementById("mobileChecklistsSubmenu").style.display=document.getElementById("mobileChecklistsSubmenu").style.display==="block"?"none":"block",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",color:"#343a40",background:"none",border:"none",cursor:"pointer"},children:["Checklists",r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r.jsxs("div",{id:"mobileChecklistsSubmenu",style:{display:"none",paddingLeft:"1rem",marginTop:"0.5rem"},children:[r.jsx(Y,{to:"/checklists#school-transition",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"School Transition Checklist"}),r.jsx(Y,{to:"/checklists#deployment-support",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Deployment Education Support"}),r.jsx(Y,{to:"/checklists#college-application",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"College Application Timeline"}),r.jsx(Y,{to:"/checklists#elementary-school",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Elementary School Checklist"}),r.jsx(Y,{to:"/checklists#middle-school",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Middle School Planning"}),r.jsx(Y,{to:"/checklists#high-school",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"High School Year-by-Year"})]})]}),r.jsxs("div",{style:{padding:"0.5rem 0"},children:[r.jsxs("button",{onClick:()=>document.getElementById("mobileReferencesSubmenu").style.display=document.getElementById("mobileReferencesSubmenu").style.display==="block"?"none":"block",style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",color:"#343a40",background:"none",border:"none",cursor:"pointer"},children:["References",r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r.jsxs("div",{id:"mobileReferencesSubmenu",style:{display:"none",paddingLeft:"1rem",marginTop:"0.5rem"},children:[r.jsx(Y,{to:"/references#military-family-education",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Military Family Education"}),r.jsx(Y,{to:"/references#school-readiness",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"School Readiness & Early Education"}),r.jsx(Y,{to:"/references#college-preparation",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"College Preparation & Applications"}),r.jsx(Y,{to:"/references#special-education",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Special Education & Learning Support"}),r.jsx(Y,{to:"/references#homeschooling",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Homeschooling Resources"}),r.jsx(Y,{to:"/references#mental-health",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Mental Health & Resilience"}),r.jsx(Y,{to:"/references#career-exploration",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Career Exploration & Planning"}),r.jsx(Y,{to:"/references#virginia-resources",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Virginia-Specific Resources"}),r.jsx(Y,{to:"/references#summer-learning",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Summer Learning & Enrichment"}),r.jsx(Y,{to:"/references#academic-support",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none",fontSize:"0.875rem"},state:{scrollToTop:!0},children:"Academic Support & Planning"})]})]}),r.jsx(Y,{to:"/glossary",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none"},state:{scrollToTop:!0},children:"Glossary"}),r.jsx(Y,{to:"/contact",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none"},state:{scrollToTop:!0},children:"Contact Us"}),r.jsx(Y,{to:"/about",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none"},state:{scrollToTop:!0},children:"About Us"}),r.jsx(Y,{to:"/search",style:{display:"block",padding:"0.5rem 0",color:"#343a40",textDecoration:"none"},state:{scrollToTop:!0},children:r.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"1rem",width:"1rem",marginRight:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),"Search"]})})]})]})})]})},xS=()=>{const t={backgroundColor:"#003260",color:"white"},l={maxWidth:"1280px",margin:"0 auto",padding:"3rem 1rem"},o={display:"grid",gridTemplateColumns:"1fr",gap:"2rem"};window.innerWidth>=768&&(o.gridTemplateColumns="repeat(4, 1fr)");const s={fontFamily:'"Bebas Neue", sans-serif',fontSize:"1.5rem",marginBottom:"1rem"},c={fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.125rem",marginBottom:"1rem"},h={fontSize:"0.875rem",marginBottom:"1rem"},p={display:"flex",gap:"1rem"},f={color:"white",textDecoration:"none"},m={height:"1.5rem",width:"1.5rem"},g={display:"flex",flexDirection:"column",gap:"0.5rem"},y={color:"white",textDecoration:"none"},b={marginTop:"3rem",paddingTop:"2rem",borderTop:"1px solid #4a5568",fontSize:"0.875rem",textAlign:"center"};return r.jsx("footer",{style:t,children:r.jsxs("div",{style:l,children:[r.jsxs("div",{style:o,children:[r.jsxs("div",{children:[r.jsx("h3",{style:s,children:"MILITARY FAMILY EDUCATION GUIDE"}),r.jsx("p",{style:h,children:"Your trusted companion for navigating your military child's educational journey."}),r.jsxs("div",{style:p,children:[r.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",style:f,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:m,fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"})})}),r.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",style:f,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:m,fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})}),r.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",style:f,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:m,fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})})}),r.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",style:f,children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:m,fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:c,children:"Quick Links"}),r.jsxs("ul",{style:g,children:[r.jsx("li",{children:r.jsx(Y,{to:"/",style:y,state:{scrollToTop:!0},children:"Home"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/introduction",style:y,state:{scrollToTop:!0},children:"Resource Guide"})}),r.jsx("li",{children:r.jsx(Y,{to:"/glossary",style:y,state:{scrollToTop:!0},children:"Glossary"})}),r.jsx("li",{children:r.jsx(Y,{to:"/references",style:y,state:{scrollToTop:!0},children:"References"})}),r.jsx("li",{children:r.jsx(Y,{to:"/checklists",style:y,state:{scrollToTop:!0},children:"Checklists"})}),r.jsx("li",{children:r.jsx(Y,{to:"/contact",style:y,state:{scrollToTop:!0},children:"Contact Us"})}),r.jsx("li",{children:r.jsx(Y,{to:"/about",style:y,state:{scrollToTop:!0},children:"About Us"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:c,children:"Chapters"}),r.jsxs("ul",{style:g,children:[r.jsx("li",{children:r.jsx(Y,{to:"/guide/introduction",style:y,state:{scrollToTop:!0},children:"Introduction"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/chapter-1",style:y,state:{scrollToTop:!0},children:"Foundations for Success"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/chapter-2",style:y,state:{scrollToTop:!0},children:"K-12 System"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/chapter-3",style:y,state:{scrollToTop:!0},children:"After High School"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/chapter-4",style:y,state:{scrollToTop:!0},children:"Military Families"})})]})]}),r.jsxs("div",{children:[r.jsx("h4",{style:c,children:"More Chapters"}),r.jsxs("ul",{style:g,children:[r.jsx("li",{children:r.jsx(Y,{to:"/guide/chapter-5",style:y,state:{scrollToTop:!0},children:"Alternative Education"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/chapter-6",style:y,state:{scrollToTop:!0},children:"Social-Emotional Wellbeing"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/appendices",style:y,state:{scrollToTop:!0},children:"Appendices & Resources"})}),r.jsx("li",{children:r.jsx(Y,{to:"/guide/conclusion",style:y,state:{scrollToTop:!0},children:"Conclusion"})})]})]})]}),r.jsxs("div",{style:b,children:[r.jsxs("p",{children:["© ",new Date().getFullYear()," Military Family Education Guide. All rights reserved."]}),r.jsxs("p",{style:{marginTop:"0.5rem"},children:[r.jsx(Y,{to:"/about",style:y,state:{scrollToTop:!0},children:"About Us"})," |",r.jsx(Y,{to:"/contact",style:{...y,marginLeft:"0.5rem"},state:{scrollToTop:!0},children:"Contact Us"})]})]})]})})},Al=()=>{const[t,l]=T.useState(!1);return T.useEffect(()=>{const o=window.matchMedia("(prefers-reduced-motion: reduce)");l(o.matches);const s=()=>{l(o.matches)};if(o.addEventListener)return o.addEventListener("change",s),()=>{o.removeEventListener("change",s)};if(o.addListener)return o.addListener(s),()=>{o.removeListener(s)}},[]),t},wS=t=>({fadeIn:t?{opacity:1}:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.4}}},slideUp:t?{opacity:1}:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut"}}},staggerChildren:t?{delayChildren:0}:{delayChildren:.1,staggerChildren:.05},scale:t?{}:{hover:{scale:1.03,transition:{duration:.2}},tap:{scale:.98}},highlight:t?{}:{initial:{backgroundColor:"rgba(122, 0, 60, 0)"},highlight:{backgroundColor:"rgba(122, 0, 60, 0.1)",transition:{duration:.3}},exit:{backgroundColor:"rgba(122, 0, 60, 0)",transition:{duration:.5}}}}),SS=()=>{const{pathname:t,hash:l}=lt(),o=Tw(),s=T.useRef(!1),c=Al(),[h,p]=T.useState(!1),[f,m]=T.useState(0);T.useEffect(()=>{const S=()=>{var V,z;const R=((V=document.querySelector(".utility-bar"))==null?void 0:V.offsetHeight)||0,D=((z=document.querySelector("header"))==null?void 0:z.offsetHeight)||0,M=R+D;m(M)};S(),window.addEventListener("resize",S);const C=setTimeout(S,100);return()=>{window.removeEventListener("resize",S),clearTimeout(C)}},[]);const g=S=>{if(!S)return;const C=window.scrollY;sessionStorage.setItem(`scrollPosition-${S}`,C.toString())},y=S=>{if(!S)return 0;const C=sessionStorage.getItem(`scrollPosition-${S}`);return C?parseInt(C,10):0},b=(S,C=!0)=>{if(s.current)return;s.current=!0,C&&!c?(window.scrollTo({top:S,behavior:"smooth"}),setTimeout(()=>{s.current=!1,p(!0)},500)):(window.scrollTo(0,S),s.current=!1,p(!0))};return T.useEffect(()=>()=>{g(t)},[t]),T.useEffect(()=>{p(!1);const S=setTimeout(()=>{if(l){const C=document.getElementById(l.substring(1));if(C){setTimeout(()=>{const R=C.getBoundingClientRect().top+window.scrollY;b(R-f-20)},100);return}}if(o==="POP"){const C=y(t);b(C,!1)}else b(0,!1)},50);return()=>clearTimeout(S)},[t,l,o,f]),{scrollToTop:()=>{b(0)},isScrollRestored:h}},ld=T.createContext({});function ad(t){const l=T.useRef(null);return l.current===null&&(l.current=t()),l.current}const od=typeof window<"u",Fy=od?T.useLayoutEffect:T.useEffect,Os=T.createContext(null);function sd(t,l){t.indexOf(l)===-1&&t.push(l)}function rd(t,l){const o=t.indexOf(l);o>-1&&t.splice(o,1)}const Ct=(t,l,o)=>o>l?l:o<t?t:o;let cd=()=>{};const At={},Hy=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Ny(t){return typeof t=="object"&&t!==null}const qy=t=>/^0[^.\s]+$/u.test(t);function ud(t){let l;return()=>(l===void 0&&(l=t()),l)}const Vi=t=>t,CS=(t,l)=>o=>l(t(o)),Ia=(...t)=>t.reduce(CS),_a=(t,l,o)=>{const s=l-t;return s===0?1:(o-t)/s};class dd{constructor(){this.subscriptions=[]}add(l){return sd(this.subscriptions,l),()=>rd(this.subscriptions,l)}notify(l,o,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](l,o,s);else for(let h=0;h<c;h++){const p=this.subscriptions[h];p&&p(l,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const et=t=>t*1e3,it=t=>t/1e3;function Gy(t,l){return l?t*(1e3/l):0}const Yy=(t,l,o)=>(((1-3*o+3*l)*t+(3*o-6*l))*t+3*l)*t,AS=1e-7,TS=12;function jS(t,l,o,s,c){let h,p,f=0;do p=l+(o-l)/2,h=Yy(p,s,c)-t,h>0?o=p:l=p;while(Math.abs(h)>AS&&++f<TS);return p}function Wa(t,l,o,s){if(t===l&&o===s)return Vi;const c=h=>jS(h,0,1,t,o);return h=>h===0||h===1?h:Yy(c(h),l,s)}const Iy=t=>l=>l<=.5?t(2*l)/2:(2-t(2*(1-l)))/2,Wy=t=>l=>1-t(1-l),Ky=Wa(.33,1.53,.69,.99),hd=Wy(Ky),Xy=Iy(hd),Qy=t=>(t*=2)<1?.5*hd(t):.5*(2-Math.pow(2,-10*(t-1))),pd=t=>1-Math.sin(Math.acos(t)),Zy=Wy(pd),$y=Iy(pd),ES=Wa(.42,0,1,1),MS=Wa(0,0,.58,1),Jy=Wa(.42,0,.58,1),kS=t=>Array.isArray(t)&&typeof t[0]!="number",ev=t=>Array.isArray(t)&&typeof t[0]=="number",RS={linear:Vi,easeIn:ES,easeInOut:Jy,easeOut:MS,circIn:pd,circInOut:$y,circOut:Zy,backIn:hd,backInOut:Xy,backOut:Ky,anticipate:Qy},DS=t=>typeof t=="string",eg=t=>{if(ev(t)){cd(t.length===4);const[l,o,s,c]=t;return Wa(l,o,s,c)}else if(DS(t))return RS[t];return t},fs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],ig={value:null};function BS(t,l){let o=new Set,s=new Set,c=!1,h=!1;const p=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1},m=0;function g(b){p.has(b)&&(y.schedule(b),t()),m++,b(f)}const y={schedule:(b,w=!1,S=!1)=>{const R=S&&c?o:s;return w&&p.add(b),R.has(b)||R.add(b),b},cancel:b=>{s.delete(b),p.delete(b)},process:b=>{if(f=b,c){h=!0;return}c=!0,[o,s]=[s,o],o.forEach(g),l&&ig.value&&ig.value.frameloop[l].push(m),m=0,o.clear(),c=!1,h&&(h=!1,y.process(b))}};return y}const zS=40;function iv(t,l){let o=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>o=!0,p=fs.reduce((z,N)=>(z[N]=BS(h,l?N:void 0),z),{}),{setup:f,read:m,resolveKeyframes:g,preUpdate:y,update:b,preRender:w,render:S,postRender:C}=p,R=()=>{const z=At.useManualTiming?c.timestamp:performance.now();o=!1,At.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(z-c.timestamp,zS),1)),c.timestamp=z,c.isProcessing=!0,f.process(c),m.process(c),g.process(c),y.process(c),b.process(c),w.process(c),S.process(c),C.process(c),c.isProcessing=!1,o&&l&&(s=!1,t(R))},D=()=>{o=!0,s=!0,c.isProcessing||t(R)};return{schedule:fs.reduce((z,N)=>{const L=p[N];return z[N]=(W,K=!1,Q=!1)=>(o||D(),L.schedule(W,K,Q)),z},{}),cancel:z=>{for(let N=0;N<fs.length;N++)p[fs[N]].cancel(z)},state:c,steps:p}}const{schedule:_e,cancel:Zt,state:ni,steps:cu}=iv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Vi,!0);let xs;function OS(){xs=void 0}const gi={now:()=>(xs===void 0&&gi.set(ni.isProcessing||At.useManualTiming?ni.timestamp:performance.now()),xs),set:t=>{xs=t,queueMicrotask(OS)}},tv=t=>l=>typeof l=="string"&&l.startsWith(t),fd=tv("--"),PS=tv("var(--"),md=t=>PS(t)?LS.test(t.split("/*")[0].trim()):!1,LS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Tl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ua={...Tl,transform:t=>Ct(0,1,t)},ms={...Tl,default:1},Da=t=>Math.round(t*1e5)/1e5,gd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function _S(t){return t==null}const US=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yd=(t,l)=>o=>!!(typeof o=="string"&&US.test(o)&&o.startsWith(t)||l&&!_S(o)&&Object.prototype.hasOwnProperty.call(o,l)),nv=(t,l,o)=>s=>{if(typeof s!="string")return s;const[c,h,p,f]=s.match(gd);return{[t]:parseFloat(c),[l]:parseFloat(h),[o]:parseFloat(p),alpha:f!==void 0?parseFloat(f):1}},VS=t=>Ct(0,255,t),uu={...Tl,transform:t=>Math.round(VS(t))},Cn={test:yd("rgb","red"),parse:nv("red","green","blue"),transform:({red:t,green:l,blue:o,alpha:s=1})=>"rgba("+uu.transform(t)+", "+uu.transform(l)+", "+uu.transform(o)+", "+Da(Ua.transform(s))+")"};function FS(t){let l="",o="",s="",c="";return t.length>5?(l=t.substring(1,3),o=t.substring(3,5),s=t.substring(5,7),c=t.substring(7,9)):(l=t.substring(1,2),o=t.substring(2,3),s=t.substring(3,4),c=t.substring(4,5),l+=l,o+=o,s+=s,c+=c),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const ku={test:yd("#"),parse:FS,transform:Cn.transform},Ka=t=>({test:l=>typeof l=="string"&&l.endsWith(t)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${t}`}),Qt=Ka("deg"),tt=Ka("%"),re=Ka("px"),HS=Ka("vh"),NS=Ka("vw"),tg={...tt,parse:t=>tt.parse(t)/100,transform:t=>tt.transform(t*100)},ml={test:yd("hsl","hue"),parse:nv("hue","saturation","lightness"),transform:({hue:t,saturation:l,lightness:o,alpha:s=1})=>"hsla("+Math.round(t)+", "+tt.transform(Da(l))+", "+tt.transform(Da(o))+", "+Da(Ua.transform(s))+")"},si={test:t=>Cn.test(t)||ku.test(t)||ml.test(t),parse:t=>Cn.test(t)?Cn.parse(t):ml.test(t)?ml.parse(t):ku.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Cn.transform(t):ml.transform(t)},qS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function GS(t){var l,o;return isNaN(t)&&typeof t=="string"&&(((l=t.match(gd))==null?void 0:l.length)||0)+(((o=t.match(qS))==null?void 0:o.length)||0)>0}const lv="number",av="color",YS="var",IS="var(",ng="${}",WS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Va(t){const l=t.toString(),o=[],s={color:[],number:[],var:[]},c=[];let h=0;const f=l.replace(WS,m=>(si.test(m)?(s.color.push(h),c.push(av),o.push(si.parse(m))):m.startsWith(IS)?(s.var.push(h),c.push(YS),o.push(m)):(s.number.push(h),c.push(lv),o.push(parseFloat(m))),++h,ng)).split(ng);return{values:o,split:f,indexes:s,types:c}}function ov(t){return Va(t).values}function sv(t){const{split:l,types:o}=Va(t),s=l.length;return c=>{let h="";for(let p=0;p<s;p++)if(h+=l[p],c[p]!==void 0){const f=o[p];f===lv?h+=Da(c[p]):f===av?h+=si.transform(c[p]):h+=c[p]}return h}}const KS=t=>typeof t=="number"?0:t;function XS(t){const l=ov(t);return sv(t)(l.map(KS))}const $t={test:GS,parse:ov,createTransformer:sv,getAnimatableNone:XS};function du(t,l,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(l-t)*6*o:o<1/2?l:o<2/3?t+(l-t)*(2/3-o)*6:t}function QS({hue:t,saturation:l,lightness:o,alpha:s}){t/=360,l/=100,o/=100;let c=0,h=0,p=0;if(!l)c=h=p=o;else{const f=o<.5?o*(1+l):o+l-o*l,m=2*o-f;c=du(m,f,t+1/3),h=du(m,f,t),p=du(m,f,t-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(p*255),alpha:s}}function Es(t,l){return o=>o>0?l:t}const Pe=(t,l,o)=>t+(l-t)*o,hu=(t,l,o)=>{const s=t*t,c=o*(l*l-s)+s;return c<0?0:Math.sqrt(c)},ZS=[ku,Cn,ml],$S=t=>ZS.find(l=>l.test(t));function lg(t){const l=$S(t);if(!l)return!1;let o=l.parse(t);return l===ml&&(o=QS(o)),o}const ag=(t,l)=>{const o=lg(t),s=lg(l);if(!o||!s)return Es(t,l);const c={...o};return h=>(c.red=hu(o.red,s.red,h),c.green=hu(o.green,s.green,h),c.blue=hu(o.blue,s.blue,h),c.alpha=Pe(o.alpha,s.alpha,h),Cn.transform(c))},Ru=new Set(["none","hidden"]);function JS(t,l){return Ru.has(t)?o=>o<=0?t:l:o=>o>=1?l:t}function eC(t,l){return o=>Pe(t,l,o)}function vd(t){return typeof t=="number"?eC:typeof t=="string"?md(t)?Es:si.test(t)?ag:nC:Array.isArray(t)?rv:typeof t=="object"?si.test(t)?ag:iC:Es}function rv(t,l){const o=[...t],s=o.length,c=t.map((h,p)=>vd(h)(h,l[p]));return h=>{for(let p=0;p<s;p++)o[p]=c[p](h);return o}}function iC(t,l){const o={...t,...l},s={};for(const c in o)t[c]!==void 0&&l[c]!==void 0&&(s[c]=vd(t[c])(t[c],l[c]));return c=>{for(const h in s)o[h]=s[h](c);return o}}function tC(t,l){const o=[],s={color:0,var:0,number:0};for(let c=0;c<l.values.length;c++){const h=l.types[c],p=t.indexes[h][s[h]],f=t.values[p]??0;o[c]=f,s[h]++}return o}const nC=(t,l)=>{const o=$t.createTransformer(l),s=Va(t),c=Va(l);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?Ru.has(t)&&!c.values.length||Ru.has(l)&&!s.values.length?JS(t,l):Ia(rv(tC(s,c),c.values),o):Es(t,l)};function cv(t,l,o){return typeof t=="number"&&typeof l=="number"&&typeof o=="number"?Pe(t,l,o):vd(t)(t,l)}const lC=t=>{const l=({timestamp:o})=>t(o);return{start:(o=!0)=>_e.update(l,o),stop:()=>Zt(l),now:()=>ni.isProcessing?ni.timestamp:gi.now()}},uv=(t,l,o=10)=>{let s="";const c=Math.max(Math.round(l/o),2);for(let h=0;h<c;h++)s+=t(h/(c-1))+", ";return`linear(${s.substring(0,s.length-2)})`},Ms=2e4;function bd(t){let l=0;const o=50;let s=t.next(l);for(;!s.done&&l<Ms;)l+=o,s=t.next(l);return l>=Ms?1/0:l}function aC(t,l=100,o){const s=o({...t,keyframes:[0,l]}),c=Math.min(bd(s),Ms);return{type:"keyframes",ease:h=>s.next(c*h).value/l,duration:it(c)}}const oC=5;function dv(t,l,o){const s=Math.max(l-oC,0);return Gy(o-t(s),l-s)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},og=.001;function sC({duration:t=He.duration,bounce:l=He.bounce,velocity:o=He.velocity,mass:s=He.mass}){let c,h,p=1-l;p=Ct(He.minDamping,He.maxDamping,p),t=Ct(He.minDuration,He.maxDuration,it(t)),p<1?(c=g=>{const y=g*p,b=y*t,w=y-o,S=Du(g,p),C=Math.exp(-b);return og-w/S*C},h=g=>{const b=g*p*t,w=b*o+o,S=Math.pow(p,2)*Math.pow(g,2)*t,C=Math.exp(-b),R=Du(Math.pow(g,2),p);return(-c(g)+og>0?-1:1)*((w-S)*C)/R}):(c=g=>{const y=Math.exp(-g*t),b=(g-o)*t+1;return-.001+y*b},h=g=>{const y=Math.exp(-g*t),b=(o-g)*(t*t);return y*b});const f=5/t,m=cC(c,h,f);if(t=et(t),isNaN(m))return{stiffness:He.stiffness,damping:He.damping,duration:t};{const g=Math.pow(m,2)*s;return{stiffness:g,damping:p*2*Math.sqrt(s*g),duration:t}}}const rC=12;function cC(t,l,o){let s=o;for(let c=1;c<rC;c++)s=s-t(s)/l(s);return s}function Du(t,l){return t*Math.sqrt(1-l*l)}const uC=["duration","bounce"],dC=["stiffness","damping","mass"];function sg(t,l){return l.some(o=>t[o]!==void 0)}function hC(t){let l={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...t};if(!sg(t,dC)&&sg(t,uC))if(t.visualDuration){const o=t.visualDuration,s=2*Math.PI/(o*1.2),c=s*s,h=2*Ct(.05,1,1-(t.bounce||0))*Math.sqrt(c);l={...l,mass:He.mass,stiffness:c,damping:h}}else{const o=sC(t);l={...l,...o,mass:He.mass},l.isResolvedFromDuration=!0}return l}function ks(t=He.visualDuration,l=He.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:l}:t;let{restSpeed:s,restDelta:c}=o;const h=o.keyframes[0],p=o.keyframes[o.keyframes.length-1],f={done:!1,value:h},{stiffness:m,damping:g,mass:y,duration:b,velocity:w,isResolvedFromDuration:S}=hC({...o,velocity:-it(o.velocity||0)}),C=w||0,R=g/(2*Math.sqrt(m*y)),D=p-h,M=it(Math.sqrt(m/y)),V=Math.abs(D)<5;s||(s=V?He.restSpeed.granular:He.restSpeed.default),c||(c=V?He.restDelta.granular:He.restDelta.default);let z;if(R<1){const L=Du(M,R);z=W=>{const K=Math.exp(-R*M*W);return p-K*((C+R*M*D)/L*Math.sin(L*W)+D*Math.cos(L*W))}}else if(R===1)z=L=>p-Math.exp(-M*L)*(D+(C+M*D)*L);else{const L=M*Math.sqrt(R*R-1);z=W=>{const K=Math.exp(-R*M*W),Q=Math.min(L*W,300);return p-K*((C+R*M*D)*Math.sinh(Q)+L*D*Math.cosh(Q))/L}}const N={calculatedDuration:S&&b||null,next:L=>{const W=z(L);if(S)f.done=L>=b;else{let K=L===0?C:0;R<1&&(K=L===0?et(C):dv(z,L,W));const Q=Math.abs(K)<=s,ie=Math.abs(p-W)<=c;f.done=Q&&ie}return f.value=f.done?p:W,f},toString:()=>{const L=Math.min(bd(N),Ms),W=uv(K=>N.next(L*K).value,L,30);return L+"ms "+W},toTransition:()=>{}};return N}ks.applyToOptions=t=>{const l=aC(t,100,ks);return t.ease=l.ease,t.duration=et(l.duration),t.type="keyframes",t};function Bu({keyframes:t,velocity:l=0,power:o=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:p,min:f,max:m,restDelta:g=.5,restSpeed:y}){const b=t[0],w={done:!1,value:b},S=Q=>f!==void 0&&Q<f||m!==void 0&&Q>m,C=Q=>f===void 0?m:m===void 0||Math.abs(f-Q)<Math.abs(m-Q)?f:m;let R=o*l;const D=b+R,M=p===void 0?D:p(D);M!==D&&(R=M-b);const V=Q=>-R*Math.exp(-Q/s),z=Q=>M+V(Q),N=Q=>{const ie=V(Q),X=z(Q);w.done=Math.abs(ie)<=g,w.value=w.done?M:X};let L,W;const K=Q=>{S(w.value)&&(L=Q,W=ks({keyframes:[w.value,C(w.value)],velocity:dv(z,Q,w.value),damping:c,stiffness:h,restDelta:g,restSpeed:y}))};return K(0),{calculatedDuration:null,next:Q=>{let ie=!1;return!W&&L===void 0&&(ie=!0,N(Q),K(Q)),L!==void 0&&Q>=L?W.next(Q-L):(!ie&&N(Q),w)}}}function pC(t,l,o){const s=[],c=o||At.mix||cv,h=t.length-1;for(let p=0;p<h;p++){let f=c(t[p],t[p+1]);if(l){const m=Array.isArray(l)?l[p]||Vi:l;f=Ia(m,f)}s.push(f)}return s}function fC(t,l,{clamp:o=!0,ease:s,mixer:c}={}){const h=t.length;if(cd(h===l.length),h===1)return()=>l[0];if(h===2&&l[0]===l[1])return()=>l[1];const p=t[0]===t[1];t[0]>t[h-1]&&(t=[...t].reverse(),l=[...l].reverse());const f=pC(l,s,c),m=f.length,g=y=>{if(p&&y<t[0])return l[0];let b=0;if(m>1)for(;b<t.length-2&&!(y<t[b+1]);b++);const w=_a(t[b],t[b+1],y);return f[b](w)};return o?y=>g(Ct(t[0],t[h-1],y)):g}function mC(t,l){const o=t[t.length-1];for(let s=1;s<=l;s++){const c=_a(0,l,s);t.push(Pe(o,1,c))}}function gC(t){const l=[0];return mC(l,t.length-1),l}function yC(t,l){return t.map(o=>o*l)}function vC(t,l){return t.map(()=>l||Jy).splice(0,t.length-1)}function Ba({duration:t=300,keyframes:l,times:o,ease:s="easeInOut"}){const c=kS(s)?s.map(eg):eg(s),h={done:!1,value:l[0]},p=yC(o&&o.length===l.length?o:gC(l),t),f=fC(p,l,{ease:Array.isArray(c)?c:vC(l,c)});return{calculatedDuration:t,next:m=>(h.value=f(m),h.done=m>=t,h)}}const bC=t=>t!==null;function xd(t,{repeat:l,repeatType:o="loop"},s,c=1){const h=t.filter(bC),f=c<0||l&&o!=="loop"&&l%2===1?0:h.length-1;return!f||s===void 0?h[f]:s}const xC={decay:Bu,inertia:Bu,tween:Ba,keyframes:Ba,spring:ks};function hv(t){typeof t.type=="string"&&(t.type=xC[t.type])}class wd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,o){return this.finished.then(l,o)}}const wC=t=>t/100;class Sd extends wd{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(o=!0)=>{var s,c;if(o){const{motionValue:h}=this.options;h&&h.updatedAt!==gi.now()&&this.tick(gi.now())}this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(s=this.options).onStop)==null||c.call(s))},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;hv(l);const{type:o=Ba,repeat:s=0,repeatDelay:c=0,repeatType:h,velocity:p=0}=l;let{keyframes:f}=l;const m=o||Ba;m!==Ba&&typeof f[0]!="number"&&(this.mixKeyframes=Ia(wC,cv(f[0],f[1])),f=[0,100]);const g=m({...l,keyframes:f});h==="mirror"&&(this.mirroredGenerator=m({...l,keyframes:[...f].reverse(),velocity:-p})),g.calculatedDuration===null&&(g.calculatedDuration=bd(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=g}updateTime(l){const o=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(l,o=!1){const{generator:s,totalDuration:c,mixKeyframes:h,mirroredGenerator:p,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:g=0,keyframes:y,repeat:b,repeatType:w,repeatDelay:S,type:C,onUpdate:R,finalKeyframe:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-c/this.speed,this.startTime)),o?this.currentTime=l:this.updateTime(l);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),V=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let z=this.currentTime,N=s;if(b){const Q=Math.min(this.currentTime,c)/f;let ie=Math.floor(Q),X=Q%1;!X&&Q>=1&&(X=1),X===1&&ie--,ie=Math.min(ie,b+1),!!(ie%2)&&(w==="reverse"?(X=1-X,S&&(X-=S/f)):w==="mirror"&&(N=p)),z=Ct(0,1,X)*f}const L=V?{done:!1,value:y[0]}:N.next(z);h&&(L.value=h(L.value));let{done:W}=L;!V&&m!==null&&(W=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return K&&C!==Bu&&(L.value=xd(y,this.options,D,this.speed)),R&&R(L.value),K&&this.finish(),L}then(l,o){return this.finished.then(l,o)}get duration(){return it(this.calculatedDuration)}get time(){return it(this.currentTime)}set time(l){var o;l=et(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),(o=this.driver)==null||o.start(!1)}get speed(){return this.playbackSpeed}set speed(l){this.updateTime(gi.now());const o=this.playbackSpeed!==l;this.playbackSpeed=l,o&&(this.time=it(this.currentTime))}play(){var c,h;if(this.isStopped)return;const{driver:l=lC,startTime:o}=this.options;this.driver||(this.driver=l(p=>this.tick(p))),(h=(c=this.options).onPlay)==null||h.call(c);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=o??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(gi.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var l,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(l=this.options).onComplete)==null||o.call(l)}cancel(){var l,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(l=this.options).onCancel)==null||o.call(l)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),l.observe(this)}}function SC(t){for(let l=1;l<t.length;l++)t[l]??(t[l]=t[l-1])}const An=t=>t*180/Math.PI,zu=t=>{const l=An(Math.atan2(t[1],t[0]));return Ou(l)},CC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:zu,rotateZ:zu,skewX:t=>An(Math.atan(t[1])),skewY:t=>An(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Ou=t=>(t=t%360,t<0&&(t+=360),t),rg=zu,cg=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),ug=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),AC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:cg,scaleY:ug,scale:t=>(cg(t)+ug(t))/2,rotateX:t=>Ou(An(Math.atan2(t[6],t[5]))),rotateY:t=>Ou(An(Math.atan2(-t[2],t[0]))),rotateZ:rg,rotate:rg,skewX:t=>An(Math.atan(t[4])),skewY:t=>An(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Pu(t){return t.includes("scale")?1:0}function Lu(t,l){if(!t||t==="none")return Pu(l);const o=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(o)s=AC,c=o;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=CC,c=f}if(!c)return Pu(l);const h=s[l],p=c[1].split(",").map(jC);return typeof h=="function"?h(p):p[h]}const TC=(t,l)=>{const{transform:o="none"}=getComputedStyle(t);return Lu(o,l)};function jC(t){return parseFloat(t.trim())}const jl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],El=new Set(jl),dg=t=>t===Tl||t===re,EC=new Set(["x","y","z"]),MC=jl.filter(t=>!EC.has(t));function kC(t){const l=[];return MC.forEach(o=>{const s=t.getValue(o);s!==void 0&&(l.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),l}const Tn={width:({x:t},{paddingLeft:l="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(l)-parseFloat(o),height:({y:t},{paddingTop:l="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(l)-parseFloat(o),top:(t,{top:l})=>parseFloat(l),left:(t,{left:l})=>parseFloat(l),bottom:({y:t},{top:l})=>parseFloat(l)+(t.max-t.min),right:({x:t},{left:l})=>parseFloat(l)+(t.max-t.min),x:(t,{transform:l})=>Lu(l,"x"),y:(t,{transform:l})=>Lu(l,"y")};Tn.translateX=Tn.x;Tn.translateY=Tn.y;const jn=new Set;let _u=!1,Uu=!1,Vu=!1;function pv(){if(Uu){const t=Array.from(jn).filter(s=>s.needsMeasurement),l=new Set(t.map(s=>s.element)),o=new Map;l.forEach(s=>{const c=kC(s);c.length&&(o.set(s,c),s.render())}),t.forEach(s=>s.measureInitialState()),l.forEach(s=>{s.render();const c=o.get(s);c&&c.forEach(([h,p])=>{var f;(f=s.getValue(h))==null||f.set(p)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Uu=!1,_u=!1,jn.forEach(t=>t.complete(Vu)),jn.clear()}function fv(){jn.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Uu=!0)})}function RC(){Vu=!0,fv(),pv(),Vu=!1}class Cd{constructor(l,o,s,c,h,p=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=o,this.name=s,this.motionValue=c,this.element=h,this.isAsync=p}scheduleResolve(){this.state="scheduled",this.isAsync?(jn.add(this),_u||(_u=!0,_e.read(fv),_e.resolveKeyframes(pv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:o,element:s,motionValue:c}=this;if(l[0]===null){const h=c==null?void 0:c.get(),p=l[l.length-1];if(h!==void 0)l[0]=h;else if(s&&o){const f=s.readValue(o,p);f!=null&&(l[0]=f)}l[0]===void 0&&(l[0]=p),c&&h===void 0&&c.set(l[0])}SC(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),jn.delete(this)}cancel(){this.state==="scheduled"&&(jn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const DC=t=>t.startsWith("--");function BC(t,l,o){DC(l)?t.style.setProperty(l,o):t.style[l]=o}const zC=ud(()=>window.ScrollTimeline!==void 0),OC={};function PC(t,l){const o=ud(t);return()=>OC[l]??o()}const mv=PC(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ra=([t,l,o,s])=>`cubic-bezier(${t}, ${l}, ${o}, ${s})`,hg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ra([0,.65,.55,1]),circOut:Ra([.55,0,1,.45]),backIn:Ra([.31,.01,.66,-.59]),backOut:Ra([.33,1.53,.69,.99])};function gv(t,l){if(t)return typeof t=="function"?mv()?uv(t,l):"ease-out":ev(t)?Ra(t):Array.isArray(t)?t.map(o=>gv(o,l)||hg.easeOut):hg[t]}function LC(t,l,o,{delay:s=0,duration:c=300,repeat:h=0,repeatType:p="loop",ease:f="easeOut",times:m}={},g=void 0){const y={[l]:o};m&&(y.offset=m);const b=gv(f,c);Array.isArray(b)&&(y.easing=b);const w={delay:s,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:h+1,direction:p==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),t.animate(y,w)}function yv(t){return typeof t=="function"&&"applyToOptions"in t}function _C({type:t,...l}){return yv(t)&&mv()?t.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class UC extends wd{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,!l)return;const{element:o,name:s,keyframes:c,pseudoElement:h,allowFlatten:p=!1,finalKeyframe:f,onComplete:m}=l;this.isPseudoElement=!!h,this.allowFlatten=p,this.options=l,cd(typeof l.type!="string");const g=_C(l);this.animation=LC(o,s,c,g,h),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const y=xd(c,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(y):BC(o,s,y),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var l,o;(o=(l=this.animation).finish)==null||o.call(l)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var l,o;this.isPseudoElement||(o=(l=this.animation).commitStyles)==null||o.call(l)}get duration(){var o,s;const l=((s=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:s.call(o).duration)||0;return it(Number(l))}get time(){return it(Number(this.animation.currentTime)||0)}set time(l){this.finishedTime=null,this.animation.currentTime=et(l)}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(l){this.animation.startTime=l}attachTimeline({timeline:l,observe:o}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,l&&zC()?(this.animation.timeline=l,Vi):o(this)}}const vv={anticipate:Qy,backInOut:Xy,circInOut:$y};function VC(t){return t in vv}function FC(t){typeof t.ease=="string"&&VC(t.ease)&&(t.ease=vv[t.ease])}const pg=10;class HC extends UC{constructor(l){FC(l),hv(l),super(l),l.startTime&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:o,onUpdate:s,onComplete:c,element:h,...p}=this.options;if(!o)return;if(l!==void 0){o.set(l);return}const f=new Sd({...p,autoplay:!1}),m=et(this.finishedTime??this.time);o.setWithVelocity(f.sample(m-pg).value,f.sample(m).value,pg),f.stop()}}const fg=(t,l)=>l==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&($t.test(t)||t==="0")&&!t.startsWith("url("));function NC(t){const l=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==l)return!0}function qC(t,l,o,s){const c=t[0];if(c===null)return!1;if(l==="display"||l==="visibility")return!0;const h=t[t.length-1],p=fg(c,l),f=fg(h,l);return!p||!f?!1:NC(t)||(o==="spring"||yv(o))&&s}function Ad(t){return Ny(t)&&"offsetHeight"in t}const GC=new Set(["opacity","clipPath","filter","transform"]),YC=ud(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function IC(t){var g;const{motionValue:l,name:o,repeatDelay:s,repeatType:c,damping:h,type:p}=t;if(!Ad((g=l==null?void 0:l.owner)==null?void 0:g.current))return!1;const{onUpdate:f,transformTemplate:m}=l.owner.getProps();return YC()&&o&&GC.has(o)&&(o!=="transform"||!m)&&!f&&!s&&c!=="mirror"&&h!==0&&p!=="inertia"}const WC=40;class KC extends wd{constructor({autoplay:l=!0,delay:o=0,type:s="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:p="loop",keyframes:f,name:m,motionValue:g,element:y,...b}){var C;super(),this.stop=()=>{var R,D;this._animation&&(this._animation.stop(),(R=this.stopTimeline)==null||R.call(this)),(D=this.keyframeResolver)==null||D.cancel()},this.createdAt=gi.now();const w={autoplay:l,delay:o,type:s,repeat:c,repeatDelay:h,repeatType:p,name:m,motionValue:g,element:y,...b},S=(y==null?void 0:y.KeyframeResolver)||Cd;this.keyframeResolver=new S(f,(R,D,M)=>this.onKeyframesResolved(R,D,w,!M),m,g,y),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(l,o,s,c){this.keyframeResolver=void 0;const{name:h,type:p,velocity:f,delay:m,isHandoff:g,onUpdate:y}=s;this.resolvedAt=gi.now(),qC(l,h,p,f)||((At.instantAnimations||!m)&&(y==null||y(xd(l,s,o))),l[0]=l[l.length-1],s.duration=0,s.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>WC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...s,keyframes:l},S=!g&&IC(w)?new HC({...w,element:w.motionValue.owner.current}):new Sd(w);S.finished.then(()=>this.notifyFinished()).catch(Vi),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(l,o){return this.finished.finally(l).then(()=>{})}get animation(){var l;return this._animation||((l=this.keyframeResolver)==null||l.resume(),RC()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var l;this._animation&&this.animation.cancel(),(l=this.keyframeResolver)==null||l.cancel()}}const XC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function QC(t){const l=XC.exec(t);if(!l)return[,];const[,o,s,c]=l;return[`--${o??s}`,c]}function bv(t,l,o=1){const[s,c]=QC(t);if(!s)return;const h=window.getComputedStyle(l).getPropertyValue(s);if(h){const p=h.trim();return Hy(p)?parseFloat(p):p}return md(c)?bv(c,l,o+1):c}function Td(t,l){return(t==null?void 0:t[l])??(t==null?void 0:t.default)??t}const xv=new Set(["width","height","top","left","right","bottom",...jl]),ZC={test:t=>t==="auto",parse:t=>t},wv=t=>l=>l.test(t),Sv=[Tl,re,tt,Qt,NS,HS,ZC],mg=t=>Sv.find(wv(t));function $C(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||qy(t):!0}const JC=new Set(["brightness","contrast","saturate","opacity"]);function e2(t){const[l,o]=t.slice(0,-1).split("(");if(l==="drop-shadow")return t;const[s]=o.match(gd)||[];if(!s)return t;const c=o.replace(s,"");let h=JC.has(l)?1:0;return s!==o&&(h*=100),l+"("+h+c+")"}const i2=/\b([a-z-]*)\(.*?\)/gu,Fu={...$t,getAnimatableNone:t=>{const l=t.match(i2);return l?l.map(e2).join(" "):t}},gg={...Tl,transform:Math.round},t2={rotate:Qt,rotateX:Qt,rotateY:Qt,rotateZ:Qt,scale:ms,scaleX:ms,scaleY:ms,scaleZ:ms,skew:Qt,skewX:Qt,skewY:Qt,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:Ua,originX:tg,originY:tg,originZ:re},jd={borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,backgroundPositionX:re,backgroundPositionY:re,...t2,zIndex:gg,fillOpacity:Ua,strokeOpacity:Ua,numOctaves:gg},n2={...jd,color:si,backgroundColor:si,outlineColor:si,fill:si,stroke:si,borderColor:si,borderTopColor:si,borderRightColor:si,borderBottomColor:si,borderLeftColor:si,filter:Fu,WebkitFilter:Fu},Cv=t=>n2[t];function Av(t,l){let o=Cv(t);return o!==Fu&&(o=$t),o.getAnimatableNone?o.getAnimatableNone(l):void 0}const l2=new Set(["auto","none","0"]);function a2(t,l,o){let s=0,c;for(;s<t.length&&!c;){const h=t[s];typeof h=="string"&&!l2.has(h)&&Va(h).values.length&&(c=t[s]),s++}if(c&&o)for(const h of l)t[h]=Av(o,c)}class o2 extends Cd{constructor(l,o,s,c,h){super(l,o,s,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let m=0;m<l.length;m++){let g=l[m];if(typeof g=="string"&&(g=g.trim(),md(g))){const y=bv(g,o.current);y!==void 0&&(l[m]=y),m===l.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!xv.has(s)||l.length!==2)return;const[c,h]=l,p=mg(c),f=mg(h);if(p!==f)if(dg(p)&&dg(f))for(let m=0;m<l.length;m++){const g=l[m];typeof g=="string"&&(l[m]=parseFloat(g))}else Tn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:o}=this,s=[];for(let c=0;c<l.length;c++)(l[c]===null||$C(l[c]))&&s.push(c);s.length&&a2(l,s,o)}measureInitialState(){const{element:l,unresolvedKeyframes:o,name:s}=this;if(!l||!l.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Tn[s](l.measureViewportBox(),window.getComputedStyle(l.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&l.getValue(s,c).jump(c,!1)}measureEndState(){var f;const{element:l,name:o,unresolvedKeyframes:s}=this;if(!l||!l.current)return;const c=l.getValue(o);c&&c.jump(this.measuredOrigin,!1);const h=s.length-1,p=s[h];s[h]=Tn[o](l.measureViewportBox(),window.getComputedStyle(l.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([m,g])=>{l.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function s2(t,l,o){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let s=document;const c=(o==null?void 0:o[t])??s.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t)}const yg=30,r2=t=>!isNaN(parseFloat(t));class c2{constructor(l,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,c=!0)=>{var p,f;const h=gi.now();if(this.updatedAt!==h&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((p=this.events.change)==null||p.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty();c&&((f=this.events.renderRequest)==null||f.notify(this.current))},this.hasAnimated=!1,this.setCurrent(l),this.owner=o.owner}setCurrent(l){this.current=l,this.updatedAt=gi.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=r2(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,o){this.events[l]||(this.events[l]=new dd);const s=this.events[l].add(o);return l==="change"?()=>{s(),_e.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,o){this.passiveEffect=l,this.stopPassiveEffect=o}set(l,o=!0){!o||!this.passiveEffect?this.updateAndNotify(l,o):this.passiveEffect(l,this.updateAndNotify)}setWithVelocity(l,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-s}jump(l,o=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var l;(l=this.events.change)==null||l.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=gi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>yg)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,yg);return Gy(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(l){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=l(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var l,o;(l=this.dependents)==null||l.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xl(t,l){return new c2(t,l)}const Tv=(t,l)=>l&&typeof t=="number"?l.transform(t):t,{schedule:Ed}=iv(queueMicrotask,!1),qi={x:!1,y:!1};function jv(){return qi.x||qi.y}function u2(t){return t==="x"||t==="y"?qi[t]?null:(qi[t]=!0,()=>{qi[t]=!1}):qi.x||qi.y?null:(qi.x=qi.y=!0,()=>{qi.x=qi.y=!1})}function Ev(t,l){const o=s2(t),s=new AbortController,c={passive:!0,...l,signal:s.signal};return[o,c,()=>s.abort()]}function vg(t){return!(t.pointerType==="touch"||jv())}function d2(t,l,o={}){const[s,c,h]=Ev(t,o),p=f=>{if(!vg(f))return;const{target:m}=f,g=l(m,f);if(typeof g!="function"||!m)return;const y=b=>{vg(b)&&(g(b),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,c)};return s.forEach(f=>{f.addEventListener("pointerenter",p,c)}),h}const Mv=(t,l)=>l?t===l?!0:Mv(t,l.parentElement):!1,Md=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,h2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function p2(t){return h2.has(t.tagName)||t.tabIndex!==-1}const ws=new WeakSet;function bg(t){return l=>{l.key==="Enter"&&t(l)}}function pu(t,l){t.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const f2=(t,l)=>{const o=t.currentTarget;if(!o)return;const s=bg(()=>{if(ws.has(o))return;pu(o,"down");const c=bg(()=>{pu(o,"up")}),h=()=>pu(o,"cancel");o.addEventListener("keyup",c,l),o.addEventListener("blur",h,l)});o.addEventListener("keydown",s,l),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),l)};function xg(t){return Md(t)&&!jv()}function m2(t,l,o={}){const[s,c,h]=Ev(t,o),p=f=>{const m=f.currentTarget;if(!xg(f))return;ws.add(m);const g=l(m,f),y=(S,C)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",w),ws.has(m)&&ws.delete(m),xg(S)&&typeof g=="function"&&g(S,{success:C})},b=S=>{y(S,m===window||m===document||o.useGlobalTarget||Mv(m,S.target))},w=S=>{y(S,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",w,c)};return s.forEach(f=>{(o.useGlobalTarget?window:f).addEventListener("pointerdown",p,c),Ad(f)&&(f.addEventListener("focus",g=>f2(g,c)),!p2(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),h}function kv(t){return Ny(t)&&"ownerSVGElement"in t}function g2(t){return kv(t)&&t.tagName==="svg"}const ri=t=>!!(t&&t.getVelocity),y2=[...Sv,si,$t],v2=t=>y2.find(wv(t)),kd=T.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class b2 extends T.Component{getSnapshotBeforeUpdate(l){const o=this.props.childRef.current;if(o&&l.isPresent&&!this.props.isPresent){const s=o.offsetParent,c=Ad(s)&&s.offsetWidth||0,h=this.props.sizeRef.current;h.height=o.offsetHeight||0,h.width=o.offsetWidth||0,h.top=o.offsetTop,h.left=o.offsetLeft,h.right=c-h.width-h.left}return null}componentDidUpdate(){}render(){return this.props.children}}function x2({children:t,isPresent:l,anchorX:o}){const s=T.useId(),c=T.useRef(null),h=T.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=T.useContext(kd);return T.useInsertionEffect(()=>{const{width:f,height:m,top:g,left:y,right:b}=h.current;if(l||!c.current||!f||!m)return;const w=o==="left"?`left: ${y}`:`right: ${b}`;c.current.dataset.motionPopId=s;const S=document.createElement("style");return p&&(S.nonce=p),document.head.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            ${w}px !important;
            top: ${g}px !important;
          }
        `),()=>{document.head.contains(S)&&document.head.removeChild(S)}},[l]),r.jsx(b2,{isPresent:l,childRef:c,sizeRef:h,children:T.cloneElement(t,{ref:c})})}const w2=({children:t,initial:l,isPresent:o,onExitComplete:s,custom:c,presenceAffectsLayout:h,mode:p,anchorX:f})=>{const m=ad(S2),g=T.useId();let y=!0,b=T.useMemo(()=>(y=!1,{id:g,initial:l,isPresent:o,custom:c,onExitComplete:w=>{m.set(w,!0);for(const S of m.values())if(!S)return;s&&s()},register:w=>(m.set(w,!1),()=>m.delete(w))}),[o,m,s]);return h&&y&&(b={...b}),T.useMemo(()=>{m.forEach((w,S)=>m.set(S,!1))},[o]),T.useEffect(()=>{!o&&!m.size&&s&&s()},[o]),p==="popLayout"&&(t=r.jsx(x2,{isPresent:o,anchorX:f,children:t})),r.jsx(Os.Provider,{value:b,children:t})};function S2(){return new Map}function Rv(t=!0){const l=T.useContext(Os);if(l===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:c}=l,h=T.useId();T.useEffect(()=>{if(t)return c(h)},[t]);const p=T.useCallback(()=>t&&s&&s(h),[h,s,t]);return!o&&s?[!1,p]:[!0]}const gs=t=>t.key||"";function wg(t){const l=[];return T.Children.forEach(t,o=>{T.isValidElement(o)&&l.push(o)}),l}const C2=({children:t,custom:l,initial:o=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:h="sync",propagate:p=!1,anchorX:f="left"})=>{const[m,g]=Rv(p),y=T.useMemo(()=>wg(t),[t]),b=p&&!m?[]:y.map(gs),w=T.useRef(!0),S=T.useRef(y),C=ad(()=>new Map),[R,D]=T.useState(y),[M,V]=T.useState(y);Fy(()=>{w.current=!1,S.current=y;for(let L=0;L<M.length;L++){const W=gs(M[L]);b.includes(W)?C.delete(W):C.get(W)!==!0&&C.set(W,!1)}},[M,b.length,b.join("-")]);const z=[];if(y!==R){let L=[...y];for(let W=0;W<M.length;W++){const K=M[W],Q=gs(K);b.includes(Q)||(L.splice(W,0,K),z.push(K))}return h==="wait"&&z.length&&(L=z),V(wg(L)),D(y),null}const{forceRender:N}=T.useContext(ld);return r.jsx(r.Fragment,{children:M.map(L=>{const W=gs(L),K=p&&!m?!1:y===M||b.includes(W),Q=()=>{if(C.has(W))C.set(W,!0);else return;let ie=!0;C.forEach(X=>{X||(ie=!1)}),ie&&(N==null||N(),V(S.current),p&&(g==null||g()),s&&s())};return r.jsx(w2,{isPresent:K,initial:!w.current||o?void 0:!1,custom:l,presenceAffectsLayout:c,mode:h,onExitComplete:K?void 0:Q,anchorX:f,children:L},W)})})},Dv=T.createContext({strict:!1}),Sg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},wl={};for(const t in Sg)wl[t]={isEnabled:l=>Sg[t].some(o=>!!l[o])};function A2(t){for(const l in t)wl[l]={...wl[l],...t[l]}}const T2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rs(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||T2.has(t)}let Bv=t=>!Rs(t);function j2(t){t&&(Bv=l=>l.startsWith("on")?!Rs(l):t(l))}try{j2(require("@emotion/is-prop-valid").default)}catch{}function E2(t,l,o){const s={};for(const c in t)c==="values"&&typeof t.values=="object"||(Bv(c)||o===!0&&Rs(c)||!l&&!Rs(c)||t.draggable&&c.startsWith("onDrag"))&&(s[c]=t[c]);return s}function M2(t){if(typeof Proxy>"u")return t;const l=new Map,o=(...s)=>t(...s);return new Proxy(o,{get:(s,c)=>c==="create"?t:(l.has(c)||l.set(c,t(c)),l.get(c))})}const Ps=T.createContext({});function Ls(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Fa(t){return typeof t=="string"||Array.isArray(t)}const Rd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dd=["initial",...Rd];function _s(t){return Ls(t.animate)||Dd.some(l=>Fa(t[l]))}function zv(t){return!!(_s(t)||t.variants)}function k2(t,l){if(_s(t)){const{initial:o,animate:s}=t;return{initial:o===!1||Fa(o)?o:void 0,animate:Fa(s)?s:void 0}}return t.inherit!==!1?l:{}}function R2(t){const{initial:l,animate:o}=k2(t,T.useContext(Ps));return T.useMemo(()=>({initial:l,animate:o}),[Cg(l),Cg(o)])}function Cg(t){return Array.isArray(t)?t.join(" "):t}const D2=Symbol.for("motionComponentSymbol");function gl(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function B2(t,l,o){return T.useCallback(s=>{s&&t.onMount&&t.onMount(s),l&&(s?l.mount(s):l.unmount()),o&&(typeof o=="function"?o(s):gl(o)&&(o.current=s))},[l])}const Bd=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),z2="framerAppearId",Ov="data-"+Bd(z2),Pv=T.createContext({});function O2(t,l,o,s,c){var R,D;const{visualElement:h}=T.useContext(Ps),p=T.useContext(Dv),f=T.useContext(Os),m=T.useContext(kd).reducedMotion,g=T.useRef(null);s=s||p.renderer,!g.current&&s&&(g.current=s(t,{visualState:l,parent:h,props:o,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:m}));const y=g.current,b=T.useContext(Pv);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&P2(g.current,o,c,b);const w=T.useRef(!1);T.useInsertionEffect(()=>{y&&w.current&&y.update(o,f)});const S=o[Ov],C=T.useRef(!!S&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,S))&&((D=window.MotionHasOptimisedAnimation)==null?void 0:D.call(window,S)));return Fy(()=>{y&&(w.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),Ed.render(y.render),C.current&&y.animationState&&y.animationState.animateChanges())}),T.useEffect(()=>{y&&(!C.current&&y.animationState&&y.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,S)}),C.current=!1))}),y}function P2(t,l,o,s){const{layoutId:c,layout:h,drag:p,dragConstraints:f,layoutScroll:m,layoutRoot:g,layoutCrossfade:y}=l;t.projection=new o(t.latestValues,l["data-framer-portal-id"]?void 0:Lv(t.parent)),t.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!p||f&&gl(f),visualElement:t,animationType:typeof h=="string"?h:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:m,layoutRoot:g})}function Lv(t){if(t)return t.options.allowProjection!==!1?t.projection:Lv(t.parent)}function L2({preloadedFeatures:t,createVisualElement:l,useRender:o,useVisualState:s,Component:c}){t&&A2(t);function h(f,m){let g;const y={...T.useContext(kd),...f,layoutId:_2(f)},{isStatic:b}=y,w=R2(f),S=s(f,b);if(!b&&od){U2();const C=V2(y);g=C.MeasureLayout,w.visualElement=O2(c,S,y,l,C.ProjectionNode)}return r.jsxs(Ps.Provider,{value:w,children:[g&&w.visualElement?r.jsx(g,{visualElement:w.visualElement,...y}):null,o(c,f,B2(S,w.visualElement,m),S,b,w.visualElement)]})}h.displayName=`motion.${typeof c=="string"?c:`create(${c.displayName??c.name??""})`}`;const p=T.forwardRef(h);return p[D2]=c,p}function _2({layoutId:t}){const l=T.useContext(ld).id;return l&&t!==void 0?l+"-"+t:t}function U2(t,l){T.useContext(Dv).strict}function V2(t){const{drag:l,layout:o}=wl;if(!l&&!o)return{};const s={...l,...o};return{MeasureLayout:l!=null&&l.isEnabled(t)||o!=null&&o.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Ha={};function F2(t){for(const l in t)Ha[l]=t[l],fd(l)&&(Ha[l].isCSSVariable=!0)}function _v(t,{layout:l,layoutId:o}){return El.has(t)||t.startsWith("origin")||(l||o!==void 0)&&(!!Ha[t]||t==="opacity")}const H2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},N2=jl.length;function q2(t,l,o){let s="",c=!0;for(let h=0;h<N2;h++){const p=jl[h],f=t[p];if(f===void 0)continue;let m=!0;if(typeof f=="number"?m=f===(p.startsWith("scale")?1:0):m=parseFloat(f)===0,!m||o){const g=Tv(f,jd[p]);if(!m){c=!1;const y=H2[p]||p;s+=`${y}(${g}) `}o&&(l[p]=g)}}return s=s.trim(),o?s=o(l,c?"":s):c&&(s="none"),s}function zd(t,l,o){const{style:s,vars:c,transformOrigin:h}=t;let p=!1,f=!1;for(const m in l){const g=l[m];if(El.has(m)){p=!0;continue}else if(fd(m)){c[m]=g;continue}else{const y=Tv(g,jd[m]);m.startsWith("origin")?(f=!0,h[m]=y):s[m]=y}}if(l.transform||(p||o?s.transform=q2(l,t.transform,o):s.transform&&(s.transform="none")),f){const{originX:m="50%",originY:g="50%",originZ:y=0}=h;s.transformOrigin=`${m} ${g} ${y}`}}const Od=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Uv(t,l,o){for(const s in l)!ri(l[s])&&!_v(s,o)&&(t[s]=l[s])}function G2({transformTemplate:t},l){return T.useMemo(()=>{const o=Od();return zd(o,l,t),Object.assign({},o.vars,o.style)},[l])}function Y2(t,l){const o=t.style||{},s={};return Uv(s,o,t),Object.assign(s,G2(t,l)),s}function I2(t,l){const o={},s=Y2(t,l);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=s,o}const W2={offset:"stroke-dashoffset",array:"stroke-dasharray"},K2={offset:"strokeDashoffset",array:"strokeDasharray"};function X2(t,l,o=1,s=0,c=!0){t.pathLength=1;const h=c?W2:K2;t[h.offset]=re.transform(-s);const p=re.transform(l),f=re.transform(o);t[h.array]=`${p} ${f}`}function Vv(t,{attrX:l,attrY:o,attrScale:s,pathLength:c,pathSpacing:h=1,pathOffset:p=0,...f},m,g,y){if(zd(t,f,g),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:b,style:w}=t;b.transform&&(w.transform=b.transform,delete b.transform),(w.transform||b.transformOrigin)&&(w.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),w.transform&&(w.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete b.transformBox),l!==void 0&&(b.x=l),o!==void 0&&(b.y=o),s!==void 0&&(b.scale=s),c!==void 0&&X2(b,c,h,p,!1)}const Fv=()=>({...Od(),attrs:{}}),Hv=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Q2(t,l,o,s){const c=T.useMemo(()=>{const h=Fv();return Vv(h,l,Hv(s),t.transformTemplate,t.style),{...h.attrs,style:{...h.style}}},[l]);if(t.style){const h={};Uv(h,t.style,t),c.style={...h,...c.style}}return c}const Z2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pd(t){return typeof t!="string"||t.includes("-")?!1:!!(Z2.indexOf(t)>-1||/[A-Z]/u.test(t))}function $2(t=!1){return(o,s,c,{latestValues:h},p)=>{const m=(Pd(o)?Q2:I2)(s,h,p,o),g=E2(s,typeof o=="string",t),y=o!==T.Fragment?{...g,...m,ref:c}:{},{children:b}=s,w=T.useMemo(()=>ri(b)?b.get():b,[b]);return T.createElement(o,{...y,children:w})}}function Ag(t){const l=[{},{}];return t==null||t.values.forEach((o,s)=>{l[0][s]=o.get(),l[1][s]=o.getVelocity()}),l}function Ld(t,l,o,s){if(typeof l=="function"){const[c,h]=Ag(s);l=l(o!==void 0?o:t.custom,c,h)}if(typeof l=="string"&&(l=t.variants&&t.variants[l]),typeof l=="function"){const[c,h]=Ag(s);l=l(o!==void 0?o:t.custom,c,h)}return l}function Ss(t){return ri(t)?t.get():t}function J2({scrapeMotionValuesFromProps:t,createRenderState:l},o,s,c){return{latestValues:eA(o,s,c,t),renderState:l()}}const Nv=t=>(l,o)=>{const s=T.useContext(Ps),c=T.useContext(Os),h=()=>J2(t,l,s,c);return o?h():ad(h)};function eA(t,l,o,s){const c={},h=s(t,{});for(const w in h)c[w]=Ss(h[w]);let{initial:p,animate:f}=t;const m=_s(t),g=zv(t);l&&g&&!m&&t.inherit!==!1&&(p===void 0&&(p=l.initial),f===void 0&&(f=l.animate));let y=o?o.initial===!1:!1;y=y||p===!1;const b=y?f:p;if(b&&typeof b!="boolean"&&!Ls(b)){const w=Array.isArray(b)?b:[b];for(let S=0;S<w.length;S++){const C=Ld(t,w[S]);if(C){const{transitionEnd:R,transition:D,...M}=C;for(const V in M){let z=M[V];if(Array.isArray(z)){const N=y?z.length-1:0;z=z[N]}z!==null&&(c[V]=z)}for(const V in R)c[V]=R[V]}}}return c}function _d(t,l,o){var h;const{style:s}=t,c={};for(const p in s)(ri(s[p])||l.style&&ri(l.style[p])||_v(p,t)||((h=o==null?void 0:o.getValue(p))==null?void 0:h.liveStyle)!==void 0)&&(c[p]=s[p]);return c}const iA={useVisualState:Nv({scrapeMotionValuesFromProps:_d,createRenderState:Od})};function qv(t,l,o){const s=_d(t,l,o);for(const c in t)if(ri(t[c])||ri(l[c])){const h=jl.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[h]=t[c]}return s}const tA={useVisualState:Nv({scrapeMotionValuesFromProps:qv,createRenderState:Fv})};function nA(t,l){return function(s,{forwardMotionProps:c}={forwardMotionProps:!1}){const p={...Pd(s)?tA:iA,preloadedFeatures:t,useRender:$2(c),createVisualElement:l,Component:s};return L2(p)}}function Na(t,l,o){const s=t.getProps();return Ld(s,l,o!==void 0?o:s.custom,t)}const Hu=t=>Array.isArray(t);function lA(t,l,o){t.hasValue(l)?t.getValue(l).set(o):t.addValue(l,xl(o))}function aA(t){return Hu(t)?t[t.length-1]||0:t}function oA(t,l){const o=Na(t,l);let{transitionEnd:s={},transition:c={},...h}=o||{};h={...h,...s};for(const p in h){const f=aA(h[p]);lA(t,p,f)}}function sA(t){return!!(ri(t)&&t.add)}function Nu(t,l){const o=t.getValue("willChange");if(sA(o))return o.add(l);if(!o&&At.WillChange){const s=new At.WillChange("auto");t.addValue("willChange",s),s.add(l)}}function Gv(t){return t.props[Ov]}const rA=t=>t!==null;function cA(t,{repeat:l,repeatType:o="loop"},s){const c=t.filter(rA),h=l&&o!=="loop"&&l%2===1?0:c.length-1;return c[h]}const uA={type:"spring",stiffness:500,damping:25,restSpeed:10},dA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),hA={type:"keyframes",duration:.8},pA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fA=(t,{keyframes:l})=>l.length>2?hA:El.has(t)?t.startsWith("scale")?dA(l[1]):uA:pA;function mA({when:t,delay:l,delayChildren:o,staggerChildren:s,staggerDirection:c,repeat:h,repeatType:p,repeatDelay:f,from:m,elapsed:g,...y}){return!!Object.keys(y).length}const Ud=(t,l,o,s={},c,h)=>p=>{const f=Td(s,t)||{},m=f.delay||s.delay||0;let{elapsed:g=0}=s;g=g-et(m);const y={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:l.getVelocity(),...f,delay:-g,onUpdate:w=>{l.set(w),f.onUpdate&&f.onUpdate(w)},onComplete:()=>{p(),f.onComplete&&f.onComplete()},name:t,motionValue:l,element:h?void 0:c};mA(f)||Object.assign(y,fA(t,y)),y.duration&&(y.duration=et(y.duration)),y.repeatDelay&&(y.repeatDelay=et(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),(At.instantAnimations||At.skipAnimations)&&(b=!0,y.duration=0,y.delay=0),y.allowFlatten=!f.type&&!f.ease,b&&!h&&l.get()!==void 0){const w=cA(y.keyframes,f);if(w!==void 0){_e.update(()=>{y.onUpdate(w),y.onComplete()});return}}return f.isSync?new Sd(y):new KC(y)};function gA({protectedKeys:t,needsAnimating:l},o){const s=t.hasOwnProperty(o)&&l[o]!==!0;return l[o]=!1,s}function Yv(t,l,{delay:o=0,transitionOverride:s,type:c}={}){let{transition:h=t.getDefaultTransition(),transitionEnd:p,...f}=l;s&&(h=s);const m=[],g=c&&t.animationState&&t.animationState.getState()[c];for(const y in f){const b=t.getValue(y,t.latestValues[y]??null),w=f[y];if(w===void 0||g&&gA(g,y))continue;const S={delay:o,...Td(h||{},y)},C=b.get();if(C!==void 0&&!b.isAnimating&&!Array.isArray(w)&&w===C&&!S.velocity)continue;let R=!1;if(window.MotionHandoffAnimation){const M=Gv(t);if(M){const V=window.MotionHandoffAnimation(M,y,_e);V!==null&&(S.startTime=V,R=!0)}}Nu(t,y),b.start(Ud(y,b,w,t.shouldReduceMotion&&xv.has(y)?{type:!1}:S,t,R));const D=b.animation;D&&m.push(D)}return p&&Promise.all(m).then(()=>{_e.update(()=>{p&&oA(t,p)})}),m}function qu(t,l,o={}){var m;const s=Na(t,l,o.type==="exit"?(m=t.presenceContext)==null?void 0:m.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=s||{};o.transitionOverride&&(c=o.transitionOverride);const h=s?()=>Promise.all(Yv(t,s,o)):()=>Promise.resolve(),p=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:b,staggerDirection:w}=c;return yA(t,l,y+g,b,w,o)}:()=>Promise.resolve(),{when:f}=c;if(f){const[g,y]=f==="beforeChildren"?[h,p]:[p,h];return g().then(()=>y())}else return Promise.all([h(),p(o.delay)])}function yA(t,l,o=0,s=0,c=1,h){const p=[],f=(t.variantChildren.size-1)*s,m=c===1?(g=0)=>g*s:(g=0)=>f-g*s;return Array.from(t.variantChildren).sort(vA).forEach((g,y)=>{g.notify("AnimationStart",l),p.push(qu(g,l,{...h,delay:o+m(y)}).then(()=>g.notify("AnimationComplete",l)))}),Promise.all(p)}function vA(t,l){return t.sortNodePosition(l)}function bA(t,l,o={}){t.notify("AnimationStart",l);let s;if(Array.isArray(l)){const c=l.map(h=>qu(t,h,o));s=Promise.all(c)}else if(typeof l=="string")s=qu(t,l,o);else{const c=typeof l=="function"?Na(t,l,o.custom):l;s=Promise.all(Yv(t,c,o))}return s.then(()=>{t.notify("AnimationComplete",l)})}function Iv(t,l){if(!Array.isArray(l))return!1;const o=l.length;if(o!==t.length)return!1;for(let s=0;s<o;s++)if(l[s]!==t[s])return!1;return!0}const xA=Dd.length;function Wv(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?Wv(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const l={};for(let o=0;o<xA;o++){const s=Dd[o],c=t.props[s];(Fa(c)||c===!1)&&(l[s]=c)}return l}const wA=[...Rd].reverse(),SA=Rd.length;function CA(t){return l=>Promise.all(l.map(({animation:o,options:s})=>bA(t,o,s)))}function AA(t){let l=CA(t),o=Tg(),s=!0;const c=m=>(g,y)=>{var w;const b=Na(t,y,m==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(b){const{transition:S,transitionEnd:C,...R}=b;g={...g,...R,...C}}return g};function h(m){l=m(t)}function p(m){const{props:g}=t,y=Wv(t.parent)||{},b=[],w=new Set;let S={},C=1/0;for(let D=0;D<SA;D++){const M=wA[D],V=o[M],z=g[M]!==void 0?g[M]:y[M],N=Fa(z),L=M===m?V.isActive:null;L===!1&&(C=D);let W=z===y[M]&&z!==g[M]&&N;if(W&&s&&t.manuallyAnimateOnMount&&(W=!1),V.protectedKeys={...S},!V.isActive&&L===null||!z&&!V.prevProp||Ls(z)||typeof z=="boolean")continue;const K=TA(V.prevProp,z);let Q=K||M===m&&V.isActive&&!W&&N||D>C&&N,ie=!1;const X=Array.isArray(z)?z:[z];let he=X.reduce(c(M),{});L===!1&&(he={});const{prevResolvedValues:ne={}}=V,Ue={...ne,...he},Ce=I=>{Q=!0,w.has(I)&&(ie=!0,w.delete(I)),V.needsAnimating[I]=!0;const J=t.getValue(I);J&&(J.liveStyle=!1)};for(const I in Ue){const J=he[I],ge=ne[I];if(S.hasOwnProperty(I))continue;let j=!1;Hu(J)&&Hu(ge)?j=!Iv(J,ge):j=J!==ge,j?J!=null?Ce(I):w.add(I):J!==void 0&&w.has(I)?Ce(I):V.protectedKeys[I]=!0}V.prevProp=z,V.prevResolvedValues=he,V.isActive&&(S={...S,...he}),s&&t.blockInitialAnimation&&(Q=!1),Q&&(!(W&&K)||ie)&&b.push(...X.map(I=>({animation:I,options:{type:M}})))}if(w.size){const D={};if(typeof g.initial!="boolean"){const M=Na(t,Array.isArray(g.initial)?g.initial[0]:g.initial);M&&M.transition&&(D.transition=M.transition)}w.forEach(M=>{const V=t.getBaseTarget(M),z=t.getValue(M);z&&(z.liveStyle=!0),D[M]=V??null}),b.push({animation:D})}let R=!!b.length;return s&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(R=!1),s=!1,R?l(b):Promise.resolve()}function f(m,g){var b;if(o[m].isActive===g)return Promise.resolve();(b=t.variantChildren)==null||b.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(m,g)}),o[m].isActive=g;const y=p(m);for(const w in o)o[w].protectedKeys={};return y}return{animateChanges:p,setActive:f,setAnimateFunction:h,getState:()=>o,reset:()=>{o=Tg(),s=!0}}}function TA(t,l){return typeof l=="string"?l!==t:Array.isArray(l)?!Iv(l,t):!1}function xn(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Tg(){return{animate:xn(!0),whileInView:xn(),whileHover:xn(),whileTap:xn(),whileDrag:xn(),whileFocus:xn(),exit:xn()}}class en{constructor(l){this.isMounted=!1,this.node=l}update(){}}class jA extends en{constructor(l){super(l),l.animationState||(l.animationState=AA(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();Ls(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:o}=this.node.prevProps||{};l!==o&&this.updateAnimationControlsSubscription()}unmount(){var l;this.node.animationState.reset(),(l=this.unmountControls)==null||l.call(this)}}let EA=0;class MA extends en{constructor(){super(...arguments),this.id=EA++}update(){if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===s)return;const c=this.node.animationState.setActive("exit",!l);o&&!l&&c.then(()=>{o(this.id)})}mount(){const{register:l,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const kA={animation:{Feature:jA},exit:{Feature:MA}};function qa(t,l,o,s={passive:!0}){return t.addEventListener(l,o,s),()=>t.removeEventListener(l,o)}function Xa(t){return{point:{x:t.pageX,y:t.pageY}}}const RA=t=>l=>Md(l)&&t(l,Xa(l));function za(t,l,o,s){return qa(t,l,RA(o),s)}function Kv({top:t,left:l,right:o,bottom:s}){return{x:{min:l,max:o},y:{min:t,max:s}}}function DA({x:t,y:l}){return{top:l.min,right:t.max,bottom:l.max,left:t.min}}function BA(t,l){if(!l)return t;const o=l({x:t.left,y:t.top}),s=l({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}const Xv=1e-4,zA=1-Xv,OA=1+Xv,Qv=.01,PA=0-Qv,LA=0+Qv;function ui(t){return t.max-t.min}function _A(t,l,o){return Math.abs(t-l)<=o}function jg(t,l,o,s=.5){t.origin=s,t.originPoint=Pe(l.min,l.max,t.origin),t.scale=ui(o)/ui(l),t.translate=Pe(o.min,o.max,t.origin)-t.originPoint,(t.scale>=zA&&t.scale<=OA||isNaN(t.scale))&&(t.scale=1),(t.translate>=PA&&t.translate<=LA||isNaN(t.translate))&&(t.translate=0)}function Oa(t,l,o,s){jg(t.x,l.x,o.x,s?s.originX:void 0),jg(t.y,l.y,o.y,s?s.originY:void 0)}function Eg(t,l,o){t.min=o.min+l.min,t.max=t.min+ui(l)}function UA(t,l,o){Eg(t.x,l.x,o.x),Eg(t.y,l.y,o.y)}function Mg(t,l,o){t.min=l.min-o.min,t.max=t.min+ui(l)}function Pa(t,l,o){Mg(t.x,l.x,o.x),Mg(t.y,l.y,o.y)}const kg=()=>({translate:0,scale:1,origin:0,originPoint:0}),yl=()=>({x:kg(),y:kg()}),Rg=()=>({min:0,max:0}),Ge=()=>({x:Rg(),y:Rg()});function Ui(t){return[t("x"),t("y")]}function fu(t){return t===void 0||t===1}function Gu({scale:t,scaleX:l,scaleY:o}){return!fu(t)||!fu(l)||!fu(o)}function wn(t){return Gu(t)||Zv(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Zv(t){return Dg(t.x)||Dg(t.y)}function Dg(t){return t&&t!=="0%"}function Ds(t,l,o){const s=t-o,c=l*s;return o+c}function Bg(t,l,o,s,c){return c!==void 0&&(t=Ds(t,c,s)),Ds(t,o,s)+l}function Yu(t,l=0,o=1,s,c){t.min=Bg(t.min,l,o,s,c),t.max=Bg(t.max,l,o,s,c)}function $v(t,{x:l,y:o}){Yu(t.x,l.translate,l.scale,l.originPoint),Yu(t.y,o.translate,o.scale,o.originPoint)}const zg=.999999999999,Og=1.0000000000001;function VA(t,l,o,s=!1){const c=o.length;if(!c)return;l.x=l.y=1;let h,p;for(let f=0;f<c;f++){h=o[f],p=h.projectionDelta;const{visualElement:m}=h.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&h.options.layoutScroll&&h.scroll&&h!==h.root&&bl(t,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),p&&(l.x*=p.x.scale,l.y*=p.y.scale,$v(t,p)),s&&wn(h.latestValues)&&bl(t,h.latestValues))}l.x<Og&&l.x>zg&&(l.x=1),l.y<Og&&l.y>zg&&(l.y=1)}function vl(t,l){t.min=t.min+l,t.max=t.max+l}function Pg(t,l,o,s,c=.5){const h=Pe(t.min,t.max,c);Yu(t,l,o,h,s)}function bl(t,l){Pg(t.x,l.x,l.scaleX,l.scale,l.originX),Pg(t.y,l.y,l.scaleY,l.scale,l.originY)}function Jv(t,l){return Kv(BA(t.getBoundingClientRect(),l))}function FA(t,l,o){const s=Jv(t,o),{scroll:c}=l;return c&&(vl(s.x,c.offset.x),vl(s.y,c.offset.y)),s}const e0=({current:t})=>t?t.ownerDocument.defaultView:null,Lg=(t,l)=>Math.abs(t-l);function HA(t,l){const o=Lg(t.x,l.x),s=Lg(t.y,l.y);return Math.sqrt(o**2+s**2)}class i0{constructor(l,o,{transformPagePoint:s,contextWindow:c,dragSnapToOrigin:h=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=gu(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,S=HA(b.offset,{x:0,y:0})>=3;if(!w&&!S)return;const{point:C}=b,{timestamp:R}=ni;this.history.push({...C,timestamp:R});const{onStart:D,onMove:M}=this.handlers;w||(D&&D(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),M&&M(this.lastMoveEvent,b)},this.handlePointerMove=(b,w)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=mu(w,this.transformPagePoint),_e.update(this.updatePoint,!0)},this.handlePointerUp=(b,w)=>{this.end();const{onEnd:S,onSessionEnd:C,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=gu(b.type==="pointercancel"?this.lastMoveEventInfo:mu(w,this.transformPagePoint),this.history);this.startEvent&&S&&S(b,D),C&&C(b,D)},!Md(l))return;this.dragSnapToOrigin=h,this.handlers=o,this.transformPagePoint=s,this.contextWindow=c||window;const p=Xa(l),f=mu(p,this.transformPagePoint),{point:m}=f,{timestamp:g}=ni;this.history=[{...m,timestamp:g}];const{onSessionStart:y}=o;y&&y(l,gu(f,this.history)),this.removeListeners=Ia(za(this.contextWindow,"pointermove",this.handlePointerMove),za(this.contextWindow,"pointerup",this.handlePointerUp),za(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),Zt(this.updatePoint)}}function mu(t,l){return l?{point:l(t.point)}:t}function _g(t,l){return{x:t.x-l.x,y:t.y-l.y}}function gu({point:t},l){return{point:t,delta:_g(t,t0(l)),offset:_g(t,NA(l)),velocity:qA(l,.1)}}function NA(t){return t[0]}function t0(t){return t[t.length-1]}function qA(t,l){if(t.length<2)return{x:0,y:0};let o=t.length-1,s=null;const c=t0(t);for(;o>=0&&(s=t[o],!(c.timestamp-s.timestamp>et(l)));)o--;if(!s)return{x:0,y:0};const h=it(c.timestamp-s.timestamp);if(h===0)return{x:0,y:0};const p={x:(c.x-s.x)/h,y:(c.y-s.y)/h};return p.x===1/0&&(p.x=0),p.y===1/0&&(p.y=0),p}function GA(t,{min:l,max:o},s){return l!==void 0&&t<l?t=s?Pe(l,t,s.min):Math.max(t,l):o!==void 0&&t>o&&(t=s?Pe(o,t,s.max):Math.min(t,o)),t}function Ug(t,l,o){return{min:l!==void 0?t.min+l:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function YA(t,{top:l,left:o,bottom:s,right:c}){return{x:Ug(t.x,o,c),y:Ug(t.y,l,s)}}function Vg(t,l){let o=l.min-t.min,s=l.max-t.max;return l.max-l.min<t.max-t.min&&([o,s]=[s,o]),{min:o,max:s}}function IA(t,l){return{x:Vg(t.x,l.x),y:Vg(t.y,l.y)}}function WA(t,l){let o=.5;const s=ui(t),c=ui(l);return c>s?o=_a(l.min,l.max-s,t.min):s>c&&(o=_a(t.min,t.max-c,l.min)),Ct(0,1,o)}function KA(t,l){const o={};return l.min!==void 0&&(o.min=l.min-t.min),l.max!==void 0&&(o.max=l.max-t.min),o}const Iu=.35;function XA(t=Iu){return t===!1?t=0:t===!0&&(t=Iu),{x:Fg(t,"left","right"),y:Fg(t,"top","bottom")}}function Fg(t,l,o){return{min:Hg(t,l),max:Hg(t,o)}}function Hg(t,l){return typeof t=="number"?t:t[l]||0}const QA=new WeakMap;class ZA{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ge(),this.visualElement=l}start(l,{snapToCursor:o=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const c=y=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Xa(y).point)},h=(y,b)=>{const{drag:w,dragPropagation:S,onDragStart:C}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=u2(w),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ui(D=>{let M=this.getAxisMotionValue(D).get()||0;if(tt.test(M)){const{projection:V}=this.visualElement;if(V&&V.layout){const z=V.layout.layoutBox[D];z&&(M=ui(z)*(parseFloat(M)/100))}}this.originPoint[D]=M}),C&&_e.postRender(()=>C(y,b)),Nu(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},p=(y,b)=>{const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:C,onDrag:R}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:D}=b;if(S&&this.currentDirection===null){this.currentDirection=$A(D),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",b.point,D),this.updateAxis("y",b.point,D),this.visualElement.render(),R&&R(y,b)},f=(y,b)=>this.stop(y,b),m=()=>Ui(y=>{var b;return this.getAnimationState(y)==="paused"&&((b=this.getAxisMotionValue(y).animation)==null?void 0:b.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new i0(l,{onSessionStart:c,onStart:h,onMove:p,onSessionEnd:f,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:e0(this.visualElement)})}stop(l,o){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:h}=this.getProps();h&&_e.postRender(()=>h(l,o))}cancel(){this.isDragging=!1;const{projection:l,animationState:o}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(l,o,s){const{drag:c}=this.getProps();if(!s||!ys(l,c,this.currentDirection))return;const h=this.getAxisMotionValue(l);let p=this.originPoint[l]+s[l];this.constraints&&this.constraints[l]&&(p=GA(p,this.constraints[l],this.elastic[l])),h.set(p)}resolveConstraints(){var h;const{dragConstraints:l,dragElastic:o}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(h=this.visualElement.projection)==null?void 0:h.layout,c=this.constraints;l&&gl(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&s?this.constraints=YA(s.layoutBox,l):this.constraints=!1,this.elastic=XA(o),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Ui(p=>{this.constraints!==!1&&this.getAxisMotionValue(p)&&(this.constraints[p]=KA(s.layoutBox[p],this.constraints[p]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:o}=this.getProps();if(!l||!gl(l))return!1;const s=l.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const h=FA(s,c.root,this.visualElement.getTransformPagePoint());let p=IA(c.layout.layoutBox,h);if(o){const f=o(DA(p));this.hasMutatedConstraints=!!f,f&&(p=Kv(f))}return p}startAnimation(l){const{drag:o,dragMomentum:s,dragElastic:c,dragTransition:h,dragSnapToOrigin:p,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},g=Ui(y=>{if(!ys(y,o,this.currentDirection))return;let b=m&&m[y]||{};p&&(b={min:0,max:0});const w=c?200:1e6,S=c?40:1e7,C={type:"inertia",velocity:s?l[y]:0,bounceStiffness:w,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...h,...b};return this.startAxisValueAnimation(y,C)});return Promise.all(g).then(f)}startAxisValueAnimation(l,o){const s=this.getAxisMotionValue(l);return Nu(this.visualElement,l),s.start(Ud(l,s,0,o,this.visualElement,!1))}stopAnimation(){Ui(l=>this.getAxisMotionValue(l).stop())}pauseAnimation(){Ui(l=>{var o;return(o=this.getAxisMotionValue(l).animation)==null?void 0:o.pause()})}getAnimationState(l){var o;return(o=this.getAxisMotionValue(l).animation)==null?void 0:o.state}getAxisMotionValue(l){const o=`_drag${l.toUpperCase()}`,s=this.visualElement.getProps(),c=s[o];return c||this.visualElement.getValue(l,(s.initial?s.initial[l]:void 0)||0)}snapToCursor(l){Ui(o=>{const{drag:s}=this.getProps();if(!ys(o,s,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(o);if(c&&c.layout){const{min:p,max:f}=c.layout.layoutBox[o];h.set(l[o]-Pe(p,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!gl(o)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ui(p=>{const f=this.getAxisMotionValue(p);if(f&&this.constraints!==!1){const m=f.get();c[p]=WA({min:m,max:m},this.constraints[p])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Ui(p=>{if(!ys(p,l,null))return;const f=this.getAxisMotionValue(p),{min:m,max:g}=this.constraints[p];f.set(Pe(m,g,c[p]))})}addListeners(){if(!this.visualElement.current)return;QA.set(this.visualElement,this);const l=this.visualElement.current,o=za(l,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();gl(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,h=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),_e.read(s);const p=qa(window,"resize",()=>this.scalePositionWithinConstraints()),f=c.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(Ui(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=m[y].translate,b.set(b.get()+m[y].translate))}),this.visualElement.render())});return()=>{p(),o(),h(),f&&f()}}getProps(){const l=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:p=Iu,dragMomentum:f=!0}=l;return{...l,drag:o,dragDirectionLock:s,dragPropagation:c,dragConstraints:h,dragElastic:p,dragMomentum:f}}}function ys(t,l,o){return(l===!0||l===t)&&(o===null||o===t)}function $A(t,l=10){let o=null;return Math.abs(t.y)>l?o="y":Math.abs(t.x)>l&&(o="x"),o}class JA extends en{constructor(l){super(l),this.removeGroupControls=Vi,this.removeListeners=Vi,this.controls=new ZA(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Vi}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ng=t=>(l,o)=>{t&&_e.postRender(()=>t(l,o))};class eT extends en{constructor(){super(...arguments),this.removePointerDownListener=Vi}onPointerDown(l){this.session=new i0(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:e0(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:o,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Ng(l),onStart:Ng(o),onMove:s,onEnd:(h,p)=>{delete this.session,c&&_e.postRender(()=>c(h,p))}}}mount(){this.removePointerDownListener=za(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Cs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function qg(t,l){return l.max===l.min?0:t/(l.max-l.min)*100}const ka={correct:(t,l)=>{if(!l.target)return t;if(typeof t=="string")if(re.test(t))t=parseFloat(t);else return t;const o=qg(t,l.target.x),s=qg(t,l.target.y);return`${o}% ${s}%`}},iT={correct:(t,{treeScale:l,projectionDelta:o})=>{const s=t,c=$t.parse(t);if(c.length>5)return s;const h=$t.createTransformer(t),p=typeof c[0]!="number"?1:0,f=o.x.scale*l.x,m=o.y.scale*l.y;c[0+p]/=f,c[1+p]/=m;const g=Pe(f,m,.5);return typeof c[2+p]=="number"&&(c[2+p]/=g),typeof c[3+p]=="number"&&(c[3+p]/=g),h(c)}};class tT extends T.Component{componentDidMount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:s,layoutId:c}=this.props,{projection:h}=l;F2(nT),h&&(o.group&&o.group.add(h),s&&s.register&&c&&s.register(h),h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),Cs.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:o,visualElement:s,drag:c,isPresent:h}=this.props,{projection:p}=s;return p&&(p.isPresent=h,c||l.layoutDependency!==o||o===void 0||l.isPresent!==h?p.willUpdate():this.safeToRemove(),l.isPresent!==h&&(h?p.promote():p.relegate()||_e.postRender(()=>{const f=p.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:l}=this.props.visualElement;l&&(l.root.didUpdate(),Ed.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:c}=l;c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function n0(t){const[l,o]=Rv(),s=T.useContext(ld);return r.jsx(tT,{...t,layoutGroup:s,switchLayoutGroup:T.useContext(Pv),isPresent:l,safeToRemove:o})}const nT={borderRadius:{...ka,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ka,borderTopRightRadius:ka,borderBottomLeftRadius:ka,borderBottomRightRadius:ka,boxShadow:iT};function lT(t,l,o){const s=ri(t)?t:xl(t);return s.start(Ud("",s,l,o)),s.animation}const aT=(t,l)=>t.depth-l.depth;class oT{constructor(){this.children=[],this.isDirty=!1}add(l){sd(this.children,l),this.isDirty=!0}remove(l){rd(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(aT),this.isDirty=!1,this.children.forEach(l)}}function sT(t,l){const o=gi.now(),s=({timestamp:c})=>{const h=c-o;h>=l&&(Zt(s),t(h-l))};return _e.setup(s,!0),()=>Zt(s)}const l0=["TopLeft","TopRight","BottomLeft","BottomRight"],rT=l0.length,Gg=t=>typeof t=="string"?parseFloat(t):t,Yg=t=>typeof t=="number"||re.test(t);function cT(t,l,o,s,c,h){c?(t.opacity=Pe(0,o.opacity??1,uT(s)),t.opacityExit=Pe(l.opacity??1,0,dT(s))):h&&(t.opacity=Pe(l.opacity??1,o.opacity??1,s));for(let p=0;p<rT;p++){const f=`border${l0[p]}Radius`;let m=Ig(l,f),g=Ig(o,f);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||Yg(m)===Yg(g)?(t[f]=Math.max(Pe(Gg(m),Gg(g),s),0),(tt.test(g)||tt.test(m))&&(t[f]+="%")):t[f]=g}(l.rotate||o.rotate)&&(t.rotate=Pe(l.rotate||0,o.rotate||0,s))}function Ig(t,l){return t[l]!==void 0?t[l]:t.borderRadius}const uT=a0(0,.5,Zy),dT=a0(.5,.95,Vi);function a0(t,l,o){return s=>s<t?0:s>l?1:o(_a(t,l,s))}function Wg(t,l){t.min=l.min,t.max=l.max}function _i(t,l){Wg(t.x,l.x),Wg(t.y,l.y)}function Kg(t,l){t.translate=l.translate,t.scale=l.scale,t.originPoint=l.originPoint,t.origin=l.origin}function Xg(t,l,o,s,c){return t-=l,t=Ds(t,1/o,s),c!==void 0&&(t=Ds(t,1/c,s)),t}function hT(t,l=0,o=1,s=.5,c,h=t,p=t){if(tt.test(l)&&(l=parseFloat(l),l=Pe(p.min,p.max,l/100)-p.min),typeof l!="number")return;let f=Pe(h.min,h.max,s);t===h&&(f-=l),t.min=Xg(t.min,l,o,f,c),t.max=Xg(t.max,l,o,f,c)}function Qg(t,l,[o,s,c],h,p){hT(t,l[o],l[s],l[c],l.scale,h,p)}const pT=["x","scaleX","originX"],fT=["y","scaleY","originY"];function Zg(t,l,o,s){Qg(t.x,l,pT,o?o.x:void 0,s?s.x:void 0),Qg(t.y,l,fT,o?o.y:void 0,s?s.y:void 0)}function $g(t){return t.translate===0&&t.scale===1}function o0(t){return $g(t.x)&&$g(t.y)}function Jg(t,l){return t.min===l.min&&t.max===l.max}function mT(t,l){return Jg(t.x,l.x)&&Jg(t.y,l.y)}function ey(t,l){return Math.round(t.min)===Math.round(l.min)&&Math.round(t.max)===Math.round(l.max)}function s0(t,l){return ey(t.x,l.x)&&ey(t.y,l.y)}function iy(t){return ui(t.x)/ui(t.y)}function ty(t,l){return t.translate===l.translate&&t.scale===l.scale&&t.originPoint===l.originPoint}class gT{constructor(){this.members=[]}add(l){sd(this.members,l),l.scheduleRender()}remove(l){if(rd(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(l){const o=this.members.findIndex(c=>l===c);if(o===0)return!1;let s;for(let c=o;c>=0;c--){const h=this.members[c];if(h.isPresent!==!1){s=h;break}}return s?(this.promote(s),!0):!1}promote(l,o){const s=this.lead;if(l!==s&&(this.prevLead=s,this.lead=l,l.show(),s)){s.instance&&s.scheduleRender(),l.scheduleRender(),l.resumeFrom=s,o&&(l.resumeFrom.preserveOpacity=!0),s.snapshot&&(l.snapshot=s.snapshot,l.snapshot.latestValues=s.animationValues||s.latestValues),l.root&&l.root.isUpdating&&(l.isLayoutDirty=!0);const{crossfade:c}=l.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(l=>{const{options:o,resumingFrom:s}=l;o.onExitComplete&&o.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(l=>{l.instance&&l.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yT(t,l,o){let s="";const c=t.x.translate/l.x,h=t.y.translate/l.y,p=(o==null?void 0:o.z)||0;if((c||h||p)&&(s=`translate3d(${c}px, ${h}px, ${p}px) `),(l.x!==1||l.y!==1)&&(s+=`scale(${1/l.x}, ${1/l.y}) `),o){const{transformPerspective:g,rotate:y,rotateX:b,rotateY:w,skewX:S,skewY:C}=o;g&&(s=`perspective(${g}px) ${s}`),y&&(s+=`rotate(${y}deg) `),b&&(s+=`rotateX(${b}deg) `),w&&(s+=`rotateY(${w}deg) `),S&&(s+=`skewX(${S}deg) `),C&&(s+=`skewY(${C}deg) `)}const f=t.x.scale*l.x,m=t.y.scale*l.y;return(f!==1||m!==1)&&(s+=`scale(${f}, ${m})`),s||"none"}const yu=["","X","Y","Z"],vT={visibility:"hidden"},bT=1e3;let xT=0;function vu(t,l,o,s){const{latestValues:c}=l;c[t]&&(o[t]=c[t],l.setStaticValue(t,0),s&&(s[t]=0))}function r0(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:l}=t.options;if(!l)return;const o=Gv(l);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:h}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",_e,!(c||h))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&r0(s)}function c0({attachResizeListener:t,defaultParent:l,measureScroll:o,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(p={},f=l==null?void 0:l()){this.id=xT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(CT),this.nodes.forEach(MT),this.nodes.forEach(kT),this.nodes.forEach(AT)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=p,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new oT)}addEventListener(p,f){return this.eventHandlers.has(p)||this.eventHandlers.set(p,new dd),this.eventHandlers.get(p).add(f)}notifyListeners(p,...f){const m=this.eventHandlers.get(p);m&&m.notify(...f)}hasListeners(p){return this.eventHandlers.has(p)}mount(p){if(this.instance)return;this.isSVG=kv(p)&&!g2(p),this.instance=p;const{layoutId:f,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(p),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),t){let y;const b=()=>this.root.updateBlockedByResize=!1;t(p,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=sT(b,250),Cs.hasAnimatedSinceResize&&(Cs.hasAnimatedSinceResize=!1,this.nodes.forEach(ly))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:w,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||g.getDefaultTransition()||OT,{onLayoutAnimationStart:R,onLayoutAnimationComplete:D}=g.getProps(),M=!this.targetLayout||!s0(this.targetLayout,S),V=!b&&w;if(this.options.layoutRoot||this.resumeFrom||V||b&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,V);const z={...Td(C,"layout"),onPlay:R,onComplete:D};(g.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z)}else b||ly(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const p=this.getStack();p&&p.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RT),this.animationId++)}getTransformTemplate(){const{visualElement:p}=this.options;return p&&p.getProps().transformTemplate}willUpdate(p=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&r0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),p&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ny);return}this.isUpdating||this.nodes.forEach(jT),this.isUpdating=!1,this.nodes.forEach(ET),this.nodes.forEach(wT),this.nodes.forEach(ST),this.clearAllSnapshots();const f=gi.now();ni.delta=Ct(0,1e3/60,f-ni.timestamp),ni.timestamp=f,ni.isProcessing=!0,cu.update.process(ni),cu.preRender.process(ni),cu.render.process(ni),ni.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ed.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(TT),this.sharedNodes.forEach(DT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ui(this.snapshot.measuredBox.x)&&!ui(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const p=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ge(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,p?p.layoutBox:void 0)}updateScroll(p="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===p&&(f=!1),f&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:p,isRoot:m,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const p=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!o0(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;p&&this.instance&&(f||wn(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(p=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return p&&(m=this.removeTransform(m)),PT(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:p}=this.options;if(!p)return Ge();const f=p.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(LT))){const{scroll:y}=this.root;y&&(vl(f.x,y.offset.x),vl(f.y,y.offset.y))}return f}removeElementScroll(p){var m;const f=Ge();if(_i(f,p),(m=this.scroll)!=null&&m.wasRoot)return f;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:b,options:w}=y;y!==this.root&&b&&w.layoutScroll&&(b.wasRoot&&_i(f,p),vl(f.x,b.offset.x),vl(f.y,b.offset.y))}return f}applyTransform(p,f=!1){const m=Ge();_i(m,p);for(let g=0;g<this.path.length;g++){const y=this.path[g];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&bl(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),wn(y.latestValues)&&bl(m,y.latestValues)}return wn(this.latestValues)&&bl(m,this.latestValues),m}removeTransform(p){const f=Ge();_i(f,p);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!wn(g.latestValues))continue;Gu(g.latestValues)&&g.updateSnapshot();const y=Ge(),b=g.measurePageBox();_i(y,b),Zg(f,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return wn(this.latestValues)&&Zg(f,this.latestValues),f}setTargetDelta(p){this.targetDelta=p,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(p){this.options={...this.options,...p,crossfade:p.crossfade!==void 0?p.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ni.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(p=!1){var w;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(p||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=ni.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ge(),this.relativeTargetOrigin=Ge(),Pa(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),_i(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ge(),this.targetWithTransforms=Ge()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),UA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_i(this.target,this.layout.layoutBox),$v(this.target,this.targetDelta)):_i(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ge(),this.relativeTargetOrigin=Ge(),Pa(this.relativeTargetOrigin,this.target,S.target),_i(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Gu(this.parent.latestValues)||Zv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var C;const p=this.getLead(),f=!!this.resumingFrom||this!==p;let m=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ni.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;_i(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,w=this.treeScale.y;VA(this.layoutCorrected,this.treeScale,this.path,f),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=Ge());const{target:S}=p;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Kg(this.prevProjectionDelta.x,this.projectionDelta.x),Kg(this.prevProjectionDelta.y,this.projectionDelta.y)),Oa(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==w||!ty(this.projectionDelta.x,this.prevProjectionDelta.x)||!ty(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(p=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),p){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yl(),this.projectionDelta=yl(),this.projectionDeltaWithTransform=yl()}setAnimationOrigin(p,f=!1){const m=this.snapshot,g=m?m.latestValues:{},y={...this.latestValues},b=yl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const w=Ge(),S=m?m.source:void 0,C=this.layout?this.layout.source:void 0,R=S!==C,D=this.getStack(),M=!D||D.members.length<=1,V=!!(R&&!M&&this.options.crossfade===!0&&!this.path.some(zT));this.animationProgress=0;let z;this.mixTargetDelta=N=>{const L=N/1e3;ay(b.x,p.x,L),ay(b.y,p.y,L),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pa(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),BT(this.relativeTarget,this.relativeTargetOrigin,w,L),z&&mT(this.relativeTarget,z)&&(this.isProjectionDirty=!1),z||(z=Ge()),_i(z,this.relativeTarget)),R&&(this.animationValues=y,cT(y,g,this.latestValues,L,V,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(p){var f,m,g;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(!1),(g=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||g.stop(!1),this.pendingAnimation&&(Zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_e.update(()=>{Cs.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=xl(0)),this.currentAnimation=lT(this.motionValue,[0,1e3],{...p,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),p.onUpdate&&p.onUpdate(y)},onStop:()=>{},onComplete:()=>{p.onComplete&&p.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const p=this.getStack();p&&p.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(bT),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const p=this.getLead();let{targetWithTransforms:f,target:m,layout:g,latestValues:y}=p;if(!(!f||!m||!g)){if(this!==p&&this.layout&&g&&u0(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||Ge();const b=ui(this.layout.layoutBox.x);m.x.min=p.target.x.min,m.x.max=m.x.min+b;const w=ui(this.layout.layoutBox.y);m.y.min=p.target.y.min,m.y.max=m.y.min+w}_i(f,m),bl(f,y),Oa(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(p,f){this.sharedNodes.has(p)||this.sharedNodes.set(p,new gT),this.sharedNodes.get(p).add(f);const g=f.options.initialPromotionConfig;f.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(f):void 0})}isLead(){const p=this.getStack();return p?p.lead===this:!0}getLead(){var f;const{layoutId:p}=this.options;return p?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:p}=this.options;return p?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:p}=this.options;if(p)return this.root.sharedNodes.get(p)}promote({needsReset:p,transition:f,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),p&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const p=this.getStack();return p?p.relegate(this):!1}resetSkewAndRotation(){const{visualElement:p}=this.options;if(!p)return;let f=!1;const{latestValues:m}=p;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const g={};m.z&&vu("z",p,g,this.animationValues);for(let y=0;y<yu.length;y++)vu(`rotate${yu[y]}`,p,g,this.animationValues),vu(`skew${yu[y]}`,p,g,this.animationValues);p.render();for(const y in g)p.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);p.scheduleRender()}getProjectionStyles(p){if(!this.instance||this.isSVG)return;if(!this.isVisible)return vT;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=Ss(p==null?void 0:p.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=Ss(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!wn(this.latestValues)&&(S.transform=m?m({},""):"none",this.hasProjected=!1),S}const y=g.animationValues||g.latestValues;this.applyTransformsToTarget(),f.transform=yT(this.projectionDeltaWithTransform,this.treeScale,y),m&&(f.transform=m(y,f.transform));const{x:b,y:w}=this.projectionDelta;f.transformOrigin=`${b.origin*100}% ${w.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const S in Ha){if(y[S]===void 0)continue;const{correct:C,applyTo:R,isCSSVariable:D}=Ha[S],M=f.transform==="none"?y[S]:C(y[S],g);if(R){const V=R.length;for(let z=0;z<V;z++)f[R[z]]=M}else D?this.options.visualElement.renderState.vars[S]=M:f[S]=M}return this.options.layoutId&&(f.pointerEvents=g===this?Ss(p==null?void 0:p.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(p=>{var f;return(f=p.currentAnimation)==null?void 0:f.stop(!1)}),this.root.nodes.forEach(ny),this.root.sharedNodes.clear()}}}function wT(t){t.updateLayout()}function ST(t){var o;const l=((o=t.resumeFrom)==null?void 0:o.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&l&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=t.layout,{animationType:h}=t.options,p=l.source!==t.layout.source;h==="size"?Ui(b=>{const w=p?l.measuredBox[b]:l.layoutBox[b],S=ui(w);w.min=s[b].min,w.max=w.min+S}):u0(h,l.layoutBox,s)&&Ui(b=>{const w=p?l.measuredBox[b]:l.layoutBox[b],S=ui(s[b]);w.max=w.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+S)});const f=yl();Oa(f,s,l.layoutBox);const m=yl();p?Oa(m,t.applyTransform(c,!0),l.measuredBox):Oa(m,s,l.layoutBox);const g=!o0(f);let y=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:w,layout:S}=b;if(w&&S){const C=Ge();Pa(C,l.layoutBox,w.layoutBox);const R=Ge();Pa(R,s,S.layoutBox),s0(C,R)||(y=!0),b.options.layoutRoot&&(t.relativeTarget=R,t.relativeTargetOrigin=C,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:l,delta:m,layoutDelta:f,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function CT(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function AT(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function TT(t){t.clearSnapshot()}function ny(t){t.clearMeasurements()}function jT(t){t.isLayoutDirty=!1}function ET(t){const{visualElement:l}=t.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),t.resetTransform()}function ly(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function MT(t){t.resolveTargetDelta()}function kT(t){t.calcProjection()}function RT(t){t.resetSkewAndRotation()}function DT(t){t.removeLeadSnapshot()}function ay(t,l,o){t.translate=Pe(l.translate,0,o),t.scale=Pe(l.scale,1,o),t.origin=l.origin,t.originPoint=l.originPoint}function oy(t,l,o,s){t.min=Pe(l.min,o.min,s),t.max=Pe(l.max,o.max,s)}function BT(t,l,o,s){oy(t.x,l.x,o.x,s),oy(t.y,l.y,o.y,s)}function zT(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const OT={duration:.45,ease:[.4,0,.1,1]},sy=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ry=sy("applewebkit/")&&!sy("chrome/")?Math.round:Vi;function cy(t){t.min=ry(t.min),t.max=ry(t.max)}function PT(t){cy(t.x),cy(t.y)}function u0(t,l,o){return t==="position"||t==="preserve-aspect"&&!_A(iy(l),iy(o),.2)}function LT(t){var l;return t!==t.root&&((l=t.scroll)==null?void 0:l.wasRoot)}const _T=c0({attachResizeListener:(t,l)=>qa(t,"resize",l),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),bu={current:void 0},d0=c0({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bu.current){const t=new _T({});t.mount(window),t.setOptions({layoutScroll:!0}),bu.current=t}return bu.current},resetTransform:(t,l)=>{t.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),UT={pan:{Feature:eT},drag:{Feature:JA,ProjectionNode:d0,MeasureLayout:n0}};function uy(t,l,o){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,h=s[c];h&&_e.postRender(()=>h(l,Xa(l)))}class VT extends en{mount(){const{current:l}=this.node;l&&(this.unmount=d2(l,(o,s)=>(uy(this.node,s,"Start"),c=>uy(this.node,c,"End"))))}unmount(){}}class FT extends en{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ia(qa(this.node.current,"focus",()=>this.onFocus()),qa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function dy(t,l,o){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),h=s[c];h&&_e.postRender(()=>h(l,Xa(l)))}class HT extends en{mount(){const{current:l}=this.node;l&&(this.unmount=m2(l,(o,s)=>(dy(this.node,s,"Start"),(c,{success:h})=>dy(this.node,c,h?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Wu=new WeakMap,xu=new WeakMap,NT=t=>{const l=Wu.get(t.target);l&&l(t)},qT=t=>{t.forEach(NT)};function GT({root:t,...l}){const o=t||document;xu.has(o)||xu.set(o,{});const s=xu.get(o),c=JSON.stringify(l);return s[c]||(s[c]=new IntersectionObserver(qT,{root:t,...l})),s[c]}function YT(t,l,o){const s=GT(l);return Wu.set(t,o),s.observe(t),()=>{Wu.delete(t),s.unobserve(t)}}const IT={some:0,all:1};class WT extends en{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:l={}}=this.node.getProps(),{root:o,margin:s,amount:c="some",once:h}=l,p={root:o?o.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:IT[c]},f=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,h&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),w=g?y:b;w&&w(m)};return YT(this.node.current,p,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:o}=this.node;["amount","margin","root"].some(KT(l,o))&&this.startObserver()}unmount(){}}function KT({viewport:t={}},{viewport:l={}}={}){return o=>t[o]!==l[o]}const XT={inView:{Feature:WT},tap:{Feature:HT},focus:{Feature:FT},hover:{Feature:VT}},QT={layout:{ProjectionNode:d0,MeasureLayout:n0}},Ku={current:null},h0={current:!1};function ZT(){if(h0.current=!0,!!od)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),l=()=>Ku.current=t.matches;t.addListener(l),l()}else Ku.current=!1}const $T=new WeakMap;function JT(t,l,o){for(const s in l){const c=l[s],h=o[s];if(ri(c))t.addValue(s,c);else if(ri(h))t.addValue(s,xl(c,{owner:t}));else if(h!==c)if(t.hasValue(s)){const p=t.getValue(s);p.liveStyle===!0?p.jump(c):p.hasAnimated||p.set(c)}else{const p=t.getStaticValue(s);t.addValue(s,xl(p!==void 0?p:c,{owner:t}))}}for(const s in o)l[s]===void 0&&t.removeValue(s);return l}const hy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class ej{scrapeMotionValuesFromProps(l,o,s){return{}}constructor({parent:l,props:o,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:h,visualState:p},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Cd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=gi.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,_e.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=p;this.latestValues=m,this.baseTarget={...m},this.initialValues=o.initial?{...m}:{},this.renderState=g,this.parent=l,this.props=o,this.presenceContext=s,this.depth=l?l.depth+1:0,this.reducedMotionConfig=c,this.options=f,this.blockInitialAnimation=!!h,this.isControllingVariants=_s(o),this.isVariantNode=zv(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(o,{},this);for(const w in b){const S=b[w];m[w]!==void 0&&ri(S)&&S.set(m[w],!1)}}mount(l){this.current=l,$T.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,s)=>this.bindToMotionValue(s,o)),h0.current||ZT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ku.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Zt(this.notifyUpdate),Zt(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const o=this.features[l];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(l,o){this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)();const s=El.has(l);s&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",f=>{this.latestValues[l]=f,this.props.onUpdate&&_e.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),h=o.on("renderRequest",this.scheduleRender);let p;window.MotionCheckAppearSync&&(p=window.MotionCheckAppearSync(this,l,o)),this.valueSubscriptions.set(l,()=>{c(),h(),p&&p(),o.owner&&o.stop()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in wl){const o=wl[l];if(!o)continue;const{isEnabled:s,Feature:c}=o;if(!this.features[l]&&c&&s(this.props)&&(this.features[l]=new c(this)),this.features[l]){const h=this.features[l];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ge()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,o){this.latestValues[l]=o}update(l,o){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<hy.length;s++){const c=hy[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,p=l[h];p&&(this.propEventSubscriptions[c]=this.on(c,p))}this.prevMotionValues=JT(this,this.scrapeMotionValuesFromProps(l,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(l),()=>o.variantChildren.delete(l)}addValue(l,o){const s=this.values.get(l);o!==s&&(s&&this.removeValue(l),this.bindToMotionValue(l,o),this.values.set(l,o),this.latestValues[l]=o.get())}removeValue(l){this.values.delete(l);const o=this.valueSubscriptions.get(l);o&&(o(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,o){if(this.props.values&&this.props.values[l])return this.props.values[l];let s=this.values.get(l);return s===void 0&&o!==void 0&&(s=xl(o===null?void 0:o,{owner:this}),this.addValue(l,s)),s}readValue(l,o){let s=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return s!=null&&(typeof s=="string"&&(Hy(s)||qy(s))?s=parseFloat(s):!v2(s)&&$t.test(o)&&(s=Av(l,o)),this.setBaseTarget(l,ri(s)?s.get():s)),ri(s)?s.get():s}setBaseTarget(l,o){this.baseTarget[l]=o}getBaseTarget(l){var h;const{initial:o}=this.props;let s;if(typeof o=="string"||typeof o=="object"){const p=Ld(this.props,o,(h=this.presenceContext)==null?void 0:h.custom);p&&(s=p[l])}if(o&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,l);return c!==void 0&&!ri(c)?c:this.initialValues[l]!==void 0&&s===void 0?void 0:this.baseTarget[l]}on(l,o){return this.events[l]||(this.events[l]=new dd),this.events[l].add(o)}notify(l,...o){this.events[l]&&this.events[l].notify(...o)}}class p0 extends ej{constructor(){super(...arguments),this.KeyframeResolver=o2}sortInstanceNodePosition(l,o){return l.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(l,o){return l.style?l.style[o]:void 0}removeValueFromRenderState(l,{vars:o,style:s}){delete o[l],delete s[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;ri(l)&&(this.childSubscription=l.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function f0(t,{style:l,vars:o},s,c){Object.assign(t.style,l,c&&c.getProjectionStyles(s));for(const h in o)t.style.setProperty(h,o[h])}function ij(t){return window.getComputedStyle(t)}class tj extends p0{constructor(){super(...arguments),this.type="html",this.renderInstance=f0}readValueFromInstance(l,o){var s;if(El.has(o))return(s=this.projection)!=null&&s.isProjecting?Pu(o):TC(l,o);{const c=ij(l),h=(fd(o)?c.getPropertyValue(o):c[o])||0;return typeof h=="string"?h.trim():h}}measureInstanceViewportBox(l,{transformPagePoint:o}){return Jv(l,o)}build(l,o,s){zd(l,o,s.transformTemplate)}scrapeMotionValuesFromProps(l,o,s){return _d(l,o,s)}}const m0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function nj(t,l,o,s){f0(t,l,void 0,s);for(const c in l.attrs)t.setAttribute(m0.has(c)?c:Bd(c),l.attrs[c])}class lj extends p0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ge}getBaseTargetFromProps(l,o){return l[o]}readValueFromInstance(l,o){if(El.has(o)){const s=Cv(o);return s&&s.default||0}return o=m0.has(o)?o:Bd(o),l.getAttribute(o)}scrapeMotionValuesFromProps(l,o,s){return qv(l,o,s)}build(l,o,s){Vv(l,o,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(l,o,s,c){nj(l,o,s,c)}mount(l){this.isSVGTag=Hv(l.tagName),super.mount(l)}}const aj=(t,l)=>Pd(t)?new lj(l):new tj(l,{allowProjection:t!==T.Fragment}),oj=nA({...kA,...XT,...UT,...QT},aj),ue=M2(oj),sj=()=>{const{scrollToTop:t,isScrollRestored:l}=SS(),[o,s]=T.useState(!1),c=lt(),h=Al(),p=T.useRef(c.pathname),[f,m]=T.useState(0);T.useEffect(()=>{const S=()=>{const R=document.querySelector(".utility-bar"),D=document.querySelector("header");let M=0;R&&(M+=R.offsetHeight),D&&(M+=D.offsetHeight),m(M)};S(),window.addEventListener("resize",S);const C=setTimeout(S,100);return()=>{window.removeEventListener("resize",S),clearTimeout(C)}},[]),T.useEffect(()=>{const S=()=>{s(window.scrollY>300)};return window.addEventListener("scroll",S,{passive:!0}),S(),()=>{window.removeEventListener("scroll",S)}},[]),T.useEffect(()=>{p.current=c.pathname},[c.pathname]);const g={display:"flex",flexDirection:"column",minHeight:"100vh",overflow:"hidden"},y={flexGrow:1,paddingTop:`${f}px`,position:"relative"},b={position:"fixed",bottom:"2rem",right:"2rem",backgroundColor:"#7A003C",color:"white",width:"3rem",height:"3rem",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.2)",border:"none",opacity:o?1:0,visibility:o?"visible":"hidden",transition:"opacity 0.3s, visibility 0.3s",zIndex:999},w={initial:{opacity:0,y:h?0:10},animate:{opacity:1,y:0,transition:{duration:h?0:.3,ease:"easeOut",when:"beforeChildren"}},exit:{opacity:0,y:h?0:-10,transition:{duration:h?0:.2,ease:"easeIn"}}};return r.jsxs("div",{style:g,children:[r.jsx(bS,{}),r.jsx("main",{style:y,children:r.jsx(C2,{mode:"wait",initial:!1,children:r.jsx(ue.div,{initial:"initial",animate:"animate",exit:"exit",variants:w,style:{width:"100%",height:"100%",position:"relative"},onAnimationComplete:()=>{l||window.scrollTo(window.scrollX,window.scrollY)},children:r.jsx(qw,{})},c.pathname)})}),r.jsx(xS,{}),r.jsx(ue.button,{style:b,onClick:t,"aria-label":"Scroll to top",whileHover:{scale:1.1},whileTap:{scale:.95},transition:{duration:h?0:.2},children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M12 19V5M5 12l7-7 7 7"})})})]})},Xe=({type:t="text",lines:l=1,width:o="100%",height:s,animate:c=!0})=>{const h=Al(),p={backgroundColor:"#e9ecef",borderRadius:"4px",display:"block",width:o,height:s},f=h||!c?{}:{animate:{opacity:[.7,.9,.7],transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}}},m=()=>{switch(t){case"title":return r.jsx(ue.div,{style:{...p,height:s||"40px",marginBottom:"1.5rem"},initial:{opacity:.7},...f});case"text":return Array(l).fill().map((g,y)=>r.jsx(ue.div,{style:{...p,height:s||"16px",marginBottom:y===l-1?"1.5rem":"0.75rem",width:y===l-1&&l>1?"80%":o},initial:{opacity:.7},...f},y));case"image":return r.jsx(ue.div,{style:{...p,height:s||"200px",marginBottom:"1rem"},initial:{opacity:.7},...f});case"card":return r.jsxs("div",{style:{padding:"1.5rem",borderRadius:"8px",backgroundColor:"#f8f9fa",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"},children:[r.jsx(ue.div,{style:{...p,height:"24px",width:"60%",marginBottom:"1rem"},initial:{opacity:.7},...f}),r.jsx(ue.div,{style:{...p,height:"100px",marginBottom:"1rem"},initial:{opacity:.7},...f}),r.jsx(ue.div,{style:{...p,height:"16px",marginBottom:"0.5rem"},initial:{opacity:.7},...f}),r.jsx(ue.div,{style:{...p,height:"16px",width:"90%"},initial:{opacity:.7},...f})]});case"sidebar":return r.jsxs("div",{style:{padding:"1.5rem",borderRadius:"8px",backgroundColor:"#f8f9fa",height:s||"300px"},children:[r.jsx(ue.div,{style:{...p,height:"24px",width:"80%",marginBottom:"1.5rem"},initial:{opacity:.7},...f}),Array(5).fill().map((g,y)=>r.jsx(ue.div,{style:{...p,height:"16px",marginBottom:"1rem",width:`${Math.floor(Math.random()*30)+60}%`},initial:{opacity:.7},...f},y))]});case"chapter":return r.jsxs("div",{children:[r.jsx(ue.div,{style:{...p,height:"60px",marginBottom:"2rem"},initial:{opacity:.7},...f}),r.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[r.jsxs("div",{style:{flex:"3"},children:[r.jsx(ue.div,{style:{...p,height:"32px",marginBottom:"1.5rem",width:"70%"},initial:{opacity:.7},...f}),Array(8).fill().map((g,y)=>r.jsx(ue.div,{style:{...p,height:"16px",marginBottom:"0.75rem",width:`${Math.floor(Math.random()*20)+80}%`},initial:{opacity:.7},...f},y)),r.jsx(ue.div,{style:{...p,height:"28px",marginTop:"2rem",marginBottom:"1.5rem",width:"50%"},initial:{opacity:.7},...f}),Array(6).fill().map((g,y)=>r.jsx(ue.div,{style:{...p,height:"16px",marginBottom:"0.75rem",width:`${Math.floor(Math.random()*20)+80}%`},initial:{opacity:.7},...f},y))]}),r.jsxs("div",{style:{flex:"1"},children:[r.jsx(ue.div,{style:{...p,height:"300px",borderRadius:"8px",marginBottom:"1.5rem"},initial:{opacity:.7},...f}),r.jsx(ue.div,{style:{...p,height:"200px",borderRadius:"8px"},initial:{opacity:.7},...f})]})]})]});default:return r.jsx(ue.div,{style:{...p,height:s||"16px"},initial:{opacity:.7},...f})}};return r.jsx("div",{className:"skeleton-loader",children:m()})},rj=()=>{const[t,l]=T.useState(window.innerWidth),[o,s]=T.useState(!0),c=Al();T.useEffect(()=>{const C=()=>{l(window.innerWidth)};return window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}},[]),T.useEffect(()=>{const C=setTimeout(()=>{s(!1)},800);return()=>clearTimeout(C)},[]);const h={backgroundImage:"url(https://iili.io/3LAyR0N.png)",minHeight:"600px",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",color:"white",textAlign:"center",marginBottom:"2rem",WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover"},p={position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 50, 96, 0.7)",zIndex:1},f={maxWidth:"800px",padding:"0 1rem",position:"relative",zIndex:2},m={fontFamily:'"Bebas Neue", sans-serif',fontSize:"4rem",marginBottom:"1rem",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},g={fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",color:"#F6C100",marginBottom:"2rem",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},y={fontSize:"1.25rem",maxWidth:"48rem",margin:"0 auto 2rem auto",lineHeight:"1.6"},b={padding:"0.75rem 1.5rem",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"600",backgroundColor:"#F6C100",color:"#003260",cursor:"pointer",border:"none",fontSize:"1.125rem",transition:"all 0.3s ease"},w={maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem 4rem"},S={fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",color:"#003260",marginBottom:"2rem",textAlign:"center"};return r.jsxs("div",{children:[r.jsxs("section",{style:h,children:[r.jsx("div",{style:p}),r.jsxs(ue.div,{style:f,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:c?0:.5,ease:"easeOut",delay:.2},children:[r.jsx(ue.h1,{style:m,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:c?0:.4,delay:.3},children:"NAVIGATING EDUCATIONAL JOURNEYS"}),r.jsx(ue.h2,{style:g,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:c?0:.4,delay:.4},children:"A MILITARY FAMILY'S GUIDE"}),r.jsx(ue.p,{style:y,initial:{opacity:0},animate:{opacity:1},transition:{duration:c?0:.4,delay:.5},children:"Your trusted companion for navigating your military child's educational journey through transitions, deployments, and new beginnings."}),r.jsx(ue.a,{href:"/guide/introduction",style:b,whileHover:{backgroundColor:"#e0af00",scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:c?0:.3,delay:.6},children:"Start Exploring"})]})]}),r.jsx("div",{style:{height:"40px",background:"linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,1) 100%)",marginTop:"-40px",position:"relative",zIndex:3}}),r.jsxs("section",{style:{...w,position:"relative",zIndex:4,backgroundColor:"white",boxShadow:"0 -5px 15px rgba(0,0,0,0.03)",paddingTop:"1.5rem"},children:[o?r.jsxs(r.Fragment,{children:[r.jsx(Xe,{type:"title",width:"60%",height:"40px"}),r.jsx(Xe,{type:"text",lines:2})]}):r.jsxs(r.Fragment,{children:[r.jsx(ue.h2,{style:S,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:c?0:.4,delay:.1},children:"SUPPORTING MILITARY FAMILIES"}),r.jsx(ue.p,{style:{...y,textAlign:"center",color:"#343a40"},initial:{opacity:0},animate:{opacity:1},transition:{duration:c?0:.4,delay:.2},children:"This comprehensive guide provides resources, tools, and insights to help military families navigate the unique educational challenges that come with military life."})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:t>=768?"repeat(3, 1fr)":"1fr",gap:"2rem",marginTop:"3rem"},children:o?r.jsxs(r.Fragment,{children:[r.jsx(Xe,{type:"card",height:"300px"}),r.jsx(Xe,{type:"card",height:"300px"}),r.jsx(Xe,{type:"card",height:"300px"})]}):r.jsxs(r.Fragment,{children:[r.jsxs(ue.a,{href:"/guide/introduction",style:{backgroundColor:"#f8f9fa",borderRadius:"0.5rem",padding:"2rem",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",cursor:"pointer",display:"block",textDecoration:"none",color:"inherit"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:c?0:.4,delay:.3},whileHover:{y:-10},whileTap:{y:-5},children:[r.jsx("div",{style:{backgroundColor:"#003260",color:"white",width:"60px",height:"60px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.5rem",fontSize:"1.5rem",fontWeight:"bold"},children:"1"}),r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"1rem",color:"#003260"},children:"Educational Resources"}),r.jsx("p",{style:{color:"#343a40",lineHeight:"1.6"},children:"Access comprehensive resources for every stage of your child's education, from early childhood through post-secondary options."})]}),r.jsxs(ue.a,{href:"/guide/chapter-4",style:{backgroundColor:"#f8f9fa",borderRadius:"0.5rem",padding:"2rem",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",cursor:"pointer",display:"block",textDecoration:"none",color:"inherit"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:c?0:.4,delay:.4},whileHover:{y:-10},whileTap:{y:-5},children:[r.jsx("div",{style:{backgroundColor:"#7A003C",color:"white",width:"60px",height:"60px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.5rem",fontSize:"1.5rem",fontWeight:"bold"},children:"2"}),r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"1rem",color:"#7A003C"},children:"Transition Support"}),r.jsx("p",{style:{color:"#343a40",lineHeight:"1.6"},children:"Find practical tools and guidance for managing school transitions during PCS moves, deployments, and other military life events."})]}),r.jsxs(ue.a,{href:"/guide/chapter-5",style:{backgroundColor:"#f8f9fa",borderRadius:"0.5rem",padding:"2rem",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",cursor:"pointer",display:"block",textDecoration:"none",color:"inherit"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:c?0:.4,delay:.5},whileHover:{y:-10},whileTap:{y:-5},children:[r.jsx("div",{style:{backgroundColor:"#005F81",color:"white",width:"60px",height:"60px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.5rem",fontSize:"1.5rem",fontWeight:"bold"},children:"3"}),r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"1rem",color:"#005F81"},children:"Special Education Guidance"}),r.jsx("p",{style:{color:"#343a40",lineHeight:"1.6"},children:"Navigate special education services across different school systems with expert advice and advocacy strategies."})]})]})})]}),r.jsx(ue.section,{style:{backgroundColor:"#003260",color:"white",padding:"4rem 1rem",textAlign:"center",marginTop:"3rem"},initial:{opacity:0},animate:{opacity:1},transition:{duration:c?0:.5,delay:.2},children:o?r.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[r.jsx(Xe,{type:"title",width:"70%",height:"40px"}),r.jsx(Xe,{type:"text",lines:2}),r.jsx("div",{style:{width:"150px",height:"50px",backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"4px",margin:"2rem auto 0"}})]}):r.jsxs(ue.div,{style:{maxWidth:"800px",margin:"0 auto"},initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:c?0:.15}}},children:[r.jsx(ue.h2,{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",marginBottom:"1.5rem"},variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}},children:"START YOUR EDUCATIONAL JOURNEY TODAY"}),r.jsx(ue.p,{style:{fontSize:"1.125rem",marginBottom:"2rem",lineHeight:"1.6"},variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}},children:"Access our complete guide and take the first step toward educational success for your military child."}),r.jsx(ue.a,{href:"/guide/introduction",style:{padding:"0.75rem 2rem",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"600",backgroundColor:"#F6C100",color:"#003260",cursor:"pointer",border:"none",fontSize:"1.125rem",display:"inline-block",textDecoration:"none"},variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4}}},whileHover:{backgroundColor:"#e0af00",scale:1.05},whileTap:{scale:.95},children:"Get Started"})]})})]})},cj=({sections:t,chapterId:l,activeSection:o,onSectionClick:s})=>{const c=Al(),{staggerChildren:h,slideUp:p,highlight:f}=wS(c),[m,g]=T.useState(null),y=(b,w)=>{b.preventDefault(),s(w),c||(g(w),setTimeout(()=>g(null),1500))};return r.jsxs(ue.div,{className:"bg-gray-light p-6 rounded-lg sticky top-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:c?0:.4,ease:"easeOut"},children:[r.jsx("h3",{className:"font-montserrat font-semibold text-lg mb-4 text-navy",children:"In This Chapter"}),r.jsx(ue.ul,{className:"space-y-2",variants:h,initial:"hidden",animate:"visible",children:t.map(b=>r.jsx(ue.li,{variants:p,children:r.jsx(ue.a,{href:`#${b.id}`,onClick:w=>y(w,b.id),style:{cursor:"pointer"},className:`block py-1 transition-colors duration-200 ${o===b.id?"text-maroon font-semibold":"text-gray-dark hover:text-petrol"}`,whileHover:{x:4},whileTap:{scale:.98},animate:m===b.id?"highlight":"initial",variants:f,children:b.title})},b.id))})]})},uj=()=>{const[t,l]=T.useState(0),o=Al();return T.useEffect(()=>{const s=()=>{const p=window.scrollY,f=document.documentElement.scrollHeight-document.documentElement.clientHeight;l(p/f*100)};let c=!1;const h=()=>{c||(window.requestAnimationFrame(()=>{s(),c=!1}),c=!0)};return window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[]),r.jsx("div",{className:"fixed top-0 left-0 w-full h-1 z-[1002]",children:r.jsx(ue.div,{className:"h-full bg-maroon",style:{width:`${t}%`},transition:{duration:o?0:.2,ease:"easeOut"},animate:{width:`${t}%`,boxShadow:t>0?"0 0 8px rgba(122, 0, 60, 0.5)":"none"}})})},fl=[{id:"introduction",title:"Introduction: Navigating the Educational Journey as a Military Family",content:`
      <h2>Opening Message</h2>
      <p>Military families face a unique set of challenges and opportunities when it comes to their children's education. The frequent relocations, deployments, and transitions that characterize military life create a distinctive educational landscape that requires special navigation skills and resources. This reference book is designed to be your comprehensive guide—a trusted companion as you support your children through their educational journey from early childhood through high school and beyond.</p>
      <p>As a military parent, you are already your child's first and most influential teacher. The decisions you make, the support you provide, and the example you set form the foundation of your child's educational experience. This book aims to enhance your ability to guide, advocate for, and nurture your child's academic development despite the complexities of military life.</p>

      <h2>The Military Family Context</h2>
      <p>Military-connected children represent a significant population in the American educational system. Approximately 1.2 million children have parents serving in active duty or reserve components of the U.S. military. These children face educational circumstances that differ considerably from their civilian peers:</p>

      <ul>
        <li><strong>Frequent Transitions</strong>: Military children move and change schools far more often than civilian children, attending an average of six to nine different schools between kindergarten and high school graduation. Each move brings the challenge of adapting to new educational standards, curriculum sequences, social environments, and school cultures.</li>
        <li><strong>Deployment Impacts</strong>: When a parent deploys, children often experience emotional stress that can affect academic performance and focus. The deployment cycle—including pre-deployment preparation, deployment itself, and reintegration—creates additional transitions within the home environment that can influence a child's educational experience.</li>
        <li><strong>Geographic Diversity</strong>: Military assignments can take families across the country and around the world, exposing children to diverse educational systems, standards, and approaches. While this brings enriching cultural experiences, it also requires adaptability and creates potential gaps or overlaps in curriculum.</li>
      </ul>

      <p>Yet alongside these challenges, military children develop remarkable strengths:</p>

      <ul>
        <li><strong>Resilience</strong>: Military children often develop exceptional adaptability and resilience, learning to adjust to new environments and overcome obstacles.</li>
        <li><strong>Global Perspective</strong>: Exposure to different regions, cultures, and educational approaches gives military children a broader worldview and enhanced cross-cultural skills.</li>
        <li><strong>Strong Community Connections</strong>: The shared experience of military life creates a unique community connection that can provide valuable support during educational transitions.</li>
        <li><strong>Independence and Responsibility</strong>: The circumstances of military life frequently foster independence, maturity, and responsibility in children at earlier ages than their civilian counterparts.</li>
      </ul>

      <h2>How to Use This Resource</h2>
      <p>This reference book is designed to be flexible and accessible based on your family's current needs:</p>

      <ul>
        <li><strong>By Age/Stage</strong>: If you're focused on a specific educational stage, you can turn directly to the chapter addressing elementary, middle, or high school considerations.</li>
        <li><strong>By Situation</strong>: Facing a PCS move? Preparing for deployment? Look for the sections specifically addressing these military-life situations.</li>
        <li><strong>By Challenge</strong>: If your child is struggling in a particular area or excelling and needs additional challenge, find guidance in the sections on supporting different learning needs.</li>
        <li><strong>Sequential Reading</strong>: For a comprehensive understanding of the educational journey, reading the book from beginning to end provides a roadmap from early childhood through post-secondary planning.</li>
      </ul>

      <p>Throughout the book, you'll find:</p>
      <ul>
        <li>Practical checklists and timelines</li>
        <li>Research-backed strategies</li>
        <li>Real-life examples from military families</li>
        <li>Resource links for additional support</li>
        <li>Quick-reference guides for time-sensitive situations</li>
      </ul>

      <h2>A Personal Note</h2>
      <p>As both an education professional and a military spouse with four sons, I understand firsthand the complex intersection of military life and educational goals. My family has navigated the challenges of maintaining educational continuity through moves, deployments, and transitions. We've experienced the pride that comes with watching our children develop the unique strengths that military life fosters, while also facing the frustrations of interrupted learning, curriculum misalignments, and the emotional impacts of military separations.</p>

      <p>The strategies, resources, and insights in this book draw not only from professional expertise but also from lived experience. They represent the wisdom gathered from countless military families who have successfully navigated these waters before you.</p>

      <p>Remember that in military life, flexibility and adaptability aren't just helpful traits—they're essential skills. The same applies to your approach to your child's education. There will be unexpected challenges, but there will also be unexpected opportunities. Your willingness to advocate, adapt, and create stability amid change will provide your child with the foundation they need to thrive academically despite—and sometimes because of—the unique circumstances of military life.</p>

      <p>As we begin this journey together, hold fast to this truth: the very challenges that military life presents to your child's education also help develop the character, resilience, and adaptability that will serve them throughout their lives. With the right tools, resources, and approach, you can help transform potential educational obstacles into stepping stones for growth and achievement.</p>
    `},{id:"chapter-1",title:"Chapter 1: Foundations for Educational Success",content:`
      <h2>School Readiness and Early Education</h2>
      <p>The foundation of your child's educational journey begins long before their first day of kindergarten. As a military parent, understanding what constitutes "school readiness" can help you prepare your child for success, regardless of where your service takes your family.</p>

      <h3>Understanding School Readiness</h3>
      <p>The Virginia Department of Education (VDOE) defines school readiness as: "the capabilities of children, their families, schools, and communities that best promote student success in kindergarten and beyond. Each component—children, families, schools, and communities—plays an essential role in developing school readiness. No one component can stand on its own."</p>

      <p>This holistic definition reminds us that readiness isn't just about academic skills like knowing letters or numbers. It encompasses physical, social, emotional, and cognitive development, as well as the readiness of schools to meet children where they are developmentally.</p>

      <p>For military families who may move frequently, this comprehensive view of readiness is particularly important. Your child may transition between different state systems with varying kindergarten age cutoffs, curriculum expectations, and assessment approaches. Building a strong foundation in all developmental areas creates adaptability that serves children well during transitions.</p>

      <h3>Key Developmental Areas for School Readiness</h3>

      <p><strong>Physical Development and Health:</strong></p>
      <ul>
        <li>Fine motor skills (holding pencils, cutting with scissors)</li>
        <li>Gross motor skills (running, jumping, balancing)</li>
        <li>Self-care abilities (managing bathroom needs, washing hands)</li>
        <li>Health and wellness routines</li>
      </ul>

      <p><strong>Social and Emotional Development:</strong></p>
      <ul>
        <li>Separating from parents without extreme distress</li>
        <li>Taking turns and sharing</li>
        <li>Following multi-step directions</li>
        <li>Expressing needs and emotions appropriately</li>
        <li>Developing self-regulation skills</li>
      </ul>

      <p><strong>Language and Communication:</strong></p>
      <ul>
        <li>Speaking in complete sentences</li>
        <li>Following conversations</li>
        <li>Expressing thoughts and needs verbally</li>
        <li>Building vocabulary</li>
        <li>Early literacy interests (enjoying books, telling stories)</li>
      </ul>

      <p><strong>Cognitive Development:</strong></p>
      <ul>
        <li>Curiosity and problem-solving</li>
        <li>Basic counting and number concepts</li>
        <li>Letter recognition and phonological awareness</li>
        <li>Shape and color recognition</li>
        <li>Classification and sorting skills</li>
      </ul>

      <h3>Military-Specific Considerations for Early Education</h3>

      <p>Military families face unique considerations when preparing children for school:</p>

      <ul>
        <li><strong>Consistency Amid Change:</strong> Establish consistent routines and expectations that can travel with your family regardless of location.</li>
        <li><strong>Documentation:</strong> Maintain a portfolio of your child's developmental progress, immunization records, and any evaluations or screenings to ensure continuity during transitions.</li>
        <li><strong>Building Resilience:</strong> Help your young child develop adaptive skills and emotional vocabulary to navigate changes.</li>
        <li><strong>Community Connections:</strong> Utilize military-specific early childhood programs like those offered through Child Development Centers (CDCs) on installations, which understand the unique needs of military children.</li>
      </ul>

      <h3>Practical Steps for Building School Readiness</h3>

      <p><strong>Create a learning-rich home environment:</strong></p>
      <ul>
        <li>Read together daily</li>
        <li>Engage in conversations about everyday experiences</li>
        <li>Provide materials for creative expression</li>
        <li>Incorporate counting and sorting into daily activities</li>
      </ul>

      <p><strong>Develop independence skills:</strong></p>
      <ul>
        <li>Practice self-help skills like dressing, managing backpacks, and opening lunch containers</li>
        <li>Encourage completion of age-appropriate responsibilities</li>
        <li>Allow time for problem-solving without immediate intervention</li>
      </ul>

      <p><strong>Build social experiences:</strong></p>
      <ul>
        <li>Arrange playdates with peers</li>
        <li>Participate in group activities like library story times</li>
        <li>Practice taking turns and sharing</li>
        <li>Expose children to group settings similar to classrooms</li>
      </ul>

      <p><strong>Establish school-like routines:</strong></p>
      <ul>
        <li>Create consistent sleep schedules</li>
        <li>Practice separation in safe environments</li>
        <li>Develop morning routines that mirror school-day preparations</li>
        <li>Introduce the concept of focused activity times</li>
      </ul>

      <p><strong>Connect with early intervention if needed:</strong></p>
      <ul>
        <li>Be aware of developmental milestones</li>
        <li>Don't hesitate to seek evaluation if you have concerns</li>
        <li>Utilize military healthcare benefits for developmental screenings</li>
      </ul>

      <h3>Choosing Early Education Programs</h3>

      <p>When selecting preschools or early education programs, military families should consider:</p>

      <ul>
        <li><strong>Availability and Waitlists:</strong> Many local preschools have long waiting lists. Research options early, especially when you know a PCS is coming.</li>
        <li><strong>Quality Indicators:</strong> Look for programs with appropriate accreditation, qualified staff, developmentally appropriate practices, and safe, engaging environments.</li>
        <li><strong>Military-Friendly Policies:</strong> Some programs better understand military life and offer flexibility for deployment, TDY, or PCS situations.</li>
        <li><strong>Curriculum Approaches:</strong> Familiarize yourself with different early childhood education philosophies (Montessori, Reggio Emilia, play-based, academic) to find what best suits your child.</li>
        <li><strong>Transition Support:</strong> Evaluate how programs help children adjust when entering or leaving mid-year.</li>
      </ul>

      <p>Remember that high-quality early childhood experiences set the stage for future learning, but parents remain the most influential teachers in a child's life. The consistent support, engagement, and encouragement you provide create a foundation that travels with your child regardless of how often you move.</p>

      <p>"As parents, we are our children's first teachers—whether we recognize it or not." This statement reminds us of the powerful role we play in preparing our children for educational success.</p>

      <p>The journey to kindergarten should be both exciting and fun. Take time to enjoy these precious moments—they pass quickly, but the foundation you're building will support your child throughout their educational journey.</p>

      <h2>Family Involvement in Education</h2>

      <p>As a military parent, your involvement in your child's education takes on heightened importance. Research consistently shows that parent engagement is one of the strongest predictors of academic success, regardless of socioeconomic status or background. For military families navigating frequent transitions, your active involvement provides critical continuity in your child's educational experience.</p>

      <h3>The Impact of Parent Involvement</h3>

      <p>Studies by the Harvard Family Research Project and other institutions consistently demonstrate that children with involved parents:</p>
      <ul>
        <li>Earn higher grades and test scores</li>
        <li>Develop better social skills and classroom behavior</li>
        <li>Are more likely to graduate and pursue higher education</li>
        <li>Show greater resilience during transitions and challenges</li>
      </ul>

      <p>For military children specifically, parent involvement serves as an educational anchor through moves, deployments, and other transitions. When curriculum, teachers, classmates, and school cultures change, your consistent involvement provides stability that helps maintain academic progress.</p>

      <h3>Building Effective School Partnerships</h3>

      <p>As highlighted in Dr. Thomas W. Taylor's tip, "Make sure you have a relationship with your kids' teacher." This foundational relationship creates a team approach to supporting your child. Here's how to build effective partnerships:</p>

      <p><strong>Establish Early Communication:</strong></p>
      <ul>
        <li>Introduce yourself at the beginning of the school year</li>
        <li>Share your military status and any anticipated changes (deployments, possible moves)</li>
        <li>Provide preferred contact information and communication methods</li>
        <li>Ask about the teacher's preferred communication channels</li>
      </ul>

      <p><strong>Maintain Regular Connection:</strong></p>
      <ul>
        <li>Attend parent-teacher conferences and school events</li>
        <li>Respond promptly to teacher communications</li>
        <li>Schedule check-ins at natural intervals (grading periods, semester changes)</li>
        <li>Share significant family changes that might affect learning or behavior</li>
      </ul>

      <p><strong>Approach as a Team:</strong></p>
      <ul>
        <li>Emphasize your shared goal of supporting your child's success</li>
        <li>Listen actively to teacher insights and observations</li>
        <li>Share your observations of your child's learning at home</li>
        <li>Collaborate on addressing challenges rather than assigning blame</li>
      </ul>

      <p><strong>Navigate Challenges Professionally:</strong></p>
      <ul>
        <li>Address concerns directly with the teacher first</li>
        <li>Maintain respectful communication even during disagreements</li>
        <li>Document important conversations and agreements</li>
        <li>Follow appropriate channels if escalation becomes necessary</li>
      </ul>

      <h3>Military-Specific Communication Strategies</h3>

      <p>Military families may need additional communication approaches:</p>

      <p><strong>Deployment Preparation:</strong></p>
      <ul>
        <li>Meet with teachers before deployment to establish communication plans</li>
        <li>Set up systems for the deployed parent to remain involved (video messages for projects, email updates)</li>
        <li>Share age-appropriate information about how deployment might affect your child</li>
      </ul>

      <p><strong>PCS Transitions:</strong></p>
      <ul>
        <li>Request meetings with both sending and receiving schools</li>
        <li>Facilitate information transfer beyond official records</li>
        <li>Advocate for appropriate placement and needed support</li>
      </ul>

      <p><strong>Remote Involvement:</strong></p>
      <ul>
        <li>Utilize technology for virtual participation in conferences and events</li>
        <li>Establish regular email check-ins with teachers during separations</li>
        <li>Create systems for reviewing schoolwork from a distance</li>
      </ul>

      <h3>Creating a Learning-Rich Home Environment</h3>

      <p>Your home environment significantly impacts educational success, regardless of where military service takes your family:</p>

      <p><strong>Physical Space:</strong></p>
      <ul>
        <li>Designate a consistent study area with necessary supplies</li>
        <li>Minimize distractions during homework and study time</li>
        <li>Display educational materials and children's work</li>
        <li>Create organization systems that travel easily during moves</li>
      </ul>

      <p><strong>Routines and Expectations:</strong></p>
      <ul>
        <li>Establish consistent homework and reading times</li>
        <li>Create morning and evening routines that support school success</li>
        <li>Communicate clear expectations about effort and academic integrity</li>
        <li>Maintain educational consistency during school breaks</li>
      </ul>

      <p><strong>Enrichment and Extension:</strong></p>
      <ul>
        <li>Connect school learning to real-world experiences</li>
        <li>Visit local museums, parks, and cultural sites in each new location</li>
        <li>Utilize installation and community resources for educational enrichment</li>
        <li>Incorporate educational activities into family traditions that travel with you</li>
      </ul>

      <h3>Balancing Involvement with Independence</h3>

      <p>Effective parental involvement evolves as children mature:</p>

      <p><strong>Elementary Years:</strong></p>
      <ul>
        <li>Provide more direct supervision and assistance</li>
        <li>Teach organizational and study skills</li>
        <li>Communicate frequently with teachers</li>
        <li>Help establish homework routines</li>
      </ul>

      <p><strong>Middle School Years:</strong></p>
      <ul>
        <li>Shift toward monitoring rather than direct management</li>
        <li>Support development of independent problem-solving</li>
        <li>Maintain awareness of assignments and progress</li>
        <li>Focus on building executive function skills</li>
      </ul>

      <p><strong>High School Years:</strong></p>
      <ul>
        <li>Serve more as consultant than manager</li>
        <li>Support student-initiated communication with teachers</li>
        <li>Help with long-term planning and goal setting</li>
        <li>Prepare for post-secondary transitions</li>
      </ul>

      <p>For military families, this evolution may need adjustment based on transitions, deployments, and individual needs. Some children may need more support during periods of change, while others might benefit from additional independence to develop resilience.</p>

      <h2>Time Management for Families</h2>

      <p>In military life, time management takes on heightened importance as families navigate deployments, training schedules, moves, and the constant juggling of military and family responsibilities. "Time is one of the few resources you can never get back. Once it's gone, it's gone."</p>

      <h3>Family Calendar Systems</h3>

      <p>The importance of maintaining both paper and digital calendar systems:</p>

      <p><strong>Paper Calendars:</strong></p>
      <ul>
        <li>Provide visual accessibility for all family members</li>
        <li>Create a central information hub in a prominent location (kitchen, family command center)</li>
        <li>Allow for recording not just appointments but milestone moments ("made the team," "accepted to college")</li>
        <li>Serve as both functional tool and memory keeper</li>
      </ul>

      <p><strong>Digital Calendars:</strong></p>
      <ul>
        <li>Enable sharing and synchronization among family members</li>
        <li>Send automatic reminders and notifications</li>
        <li>Allow access from multiple locations and devices</li>
        <li>Facilitate coordination during separations or deployments</li>
      </ul>

      <p><strong>Creating Effective Calendar Systems:</strong></p>
      <ul>
        <li>Place in a central location accessible to all family members</li>
        <li>Color-code for different family members or types of activities</li>
        <li>Include school events, appointments, activities, and military obligations</li>
        <li>Mark deployment dates, training periods, and block leave opportunities</li>
        <li>Note school calendar variations (early dismissals, holidays, teacher workdays)</li>
      </ul>

      <p><strong>Teaching Children to Use Family Calendars:</strong></p>
      <ul>
        <li>Encourage older children to add their own events</li>
        <li>Establish family habits of checking the calendar daily</li>
        <li>Hold weekly family meetings to review upcoming events</li>
        <li>Assign age-appropriate calendar-checking responsibilities</li>
      </ul>

      <h3>Balancing Military and Educational Demands</h3>

      <p>Military families face unique time management challenges:</p>
      <ul>
        <li>Unpredictable training schedules and deployment timelines</li>
        <li>Conflicting obligations between military duties and school events</li>
        <li>Limited leave availability that may not align with school calendars</li>
        <li>Single-parent functioning during deployments or training</li>
      </ul>

      <p><strong>Strategies for Balance:</strong></p>
      <ul>
        <li>Prioritize events that are most significant for your child's development</li>
        <li>Communicate proactively with commands about important educational events</li>
        <li>Utilize technology for virtual participation when physical presence isn't possible</li>
        <li>Develop backup systems with trusted friends or family members</li>
        <li>Create special traditions to compensate for missed events</li>
      </ul>

      <h3>Teaching Time Management to Children</h3>

      <p>Children of different ages need different approaches to time management:</p>

      <p><strong>Elementary Age:</strong></p>
      <ul>
        <li>Use visual timers and schedules</li>
        <li>Break tasks into manageable chunks</li>
        <li>Create simple checklists for morning and evening routines</li>
        <li>Begin teaching clock skills and duration concepts</li>
      </ul>

      <p><strong>Middle School:</strong></p>
      <ul>
        <li>Introduce planning tools like student planners</li>
        <li>Teach backwards planning for projects</li>
        <li>Establish weekly schedule reviews</li>
        <li>Develop systems for tracking assignments across subjects</li>
      </ul>

      <p><strong>High School:</strong></p>
      <ul>
        <li>Support use of digital calendar and task management tools</li>
        <li>Focus on long-term planning and goal setting</li>
        <li>Teach prioritization and decision-making about time use</li>
        <li>Prepare for independent management of college or work schedules</li>
      </ul>

      <p>The skills children develop through these progressive time management practices prepare them not just for academic success but for the responsibilities of adult life, military service, or career demands.</p>

      <h2>Building Educational Resilience in Military Children</h2>

      <p>Resilience—the ability to adapt to change and bounce back from challenges—is particularly crucial for military children navigating frequent transitions and family separations. Educational resilience specifically refers to the ability to maintain academic progress and engagement despite disruptions.</p>

      <h3>Understanding Military Child Resilience</h3>

      <p>"The impact of military life on children varies for each family member, whether immediate or distant, but it is always present." While military life presents challenges, it also develops remarkable strengths in children:</p>

      <ul>
        <li><strong>Adaptability:</strong> Military children learn to adjust to new environments, making them better prepared for future life transitions.</li>
        <li><strong>Cultural Competence:</strong> Exposure to different regions and sometimes international settings develops appreciation for diversity and cross-cultural skills.</li>
        <li><strong>Independence:</strong> Taking on responsibilities during a parent's absence builds self-reliance and problem-solving abilities.</li>
        <li><strong>Perspective:</strong> Experiencing the challenges of military life often leads to maturity and appreciation for what truly matters.</li>
      </ul>

      <h3>Strategies for Building Educational Resilience</h3>

      <p><strong>Maintain Educational Continuity:</strong></p>
      <ul>
        <li>Keep comprehensive records of academic history, including unofficial transcripts, work samples, and assessment results</li>
        <li>Understand the Interstate Compact on Educational Opportunity for Military Children and its protections</li>
        <li>Research school options early when PCS orders arrive</li>
        <li>Advocate for appropriate placement and needed services at new schools</li>
      </ul>

      <p><strong>Develop Strong Learning Foundations:</strong></p>
      <ul>
        <li>Focus on mastery of fundamental skills that transfer across curriculum differences</li>
        <li>Identify and address learning gaps promptly after moves</li>
        <li>Maintain consistent expectations regardless of school placement</li>
        <li>Consider supplemental resources to bridge curriculum differences</li>
      </ul>

      <p><strong>Cultivate a Growth Mindset:</strong></p>
      <ul>
        <li>Frame challenges as opportunities for growth</li>
        <li>Emphasize effort over innate ability</li>
        <li>Celebrate improvement and persistence</li>
        <li>Model positive responses to setbacks</li>
      </ul>

      <p><strong>Build Support Networks:</strong></p>
      <ul>
        <li>Connect with school liaison officers at installations</li>
        <li>Join parent organizations at schools</li>
        <li>Establish relationships with teachers and counselors</li>
        <li>Create peer connections through activities and sports</li>
      </ul>

      <p><strong>Teach Self-Advocacy Skills:</strong></p>
      <ul>
        <li>Help children articulate their needs appropriately</li>
        <li>Role-play difficult conversations about needed support</li>
        <li>Encourage direct communication with teachers when appropriate</li>
        <li>Gradually increase responsibility for managing academic needs</li>
      </ul>

      <p>The resilience military children develop through educational challenges becomes a lifetime asset, preparing them for future transitions in higher education, careers, and relationships. By intentionally fostering these skills, you help transform the potential disruptions of military life into opportunities for growth.</p>

      <p>As we conclude this foundational chapter, remember that the early educational choices and patterns you establish create the framework for your child's entire academic journey. By understanding school readiness, committing to appropriate involvement, managing time effectively, and building resilience, you provide your military child with the essential tools for educational success regardless of how often you move or what challenges military life presents.</p>
    `},{id:"chapter-2",title:"Chapter 2: Navigating the K-12 System",content:`
      <h2>Elementary School Success Strategies</h2>

      <p>Elementary years establish the academic, social, and organizational foundations that influence a child's entire educational career. For military families, these years may span multiple schools across different states or countries, making parental guidance particularly crucial.</p>

      <h3>Building Strong School Relationships</h3>

      <p>As emphasized in multiple articles, including the May 2024 interview with Dr. Thomas Taylor, strong relationships with your child's teachers and school staff provide essential continuity:</p>

      <p><strong>Parent-Teacher Partnerships:</strong></p>
      <ul>
        <li>Attend open houses and introductory events</li>
        <li>Schedule early conferences, especially after mid-year moves</li>
        <li>Volunteer when possible to observe classroom dynamics</li>
        <li>Communicate military status and potential deployments/moves</li>
        <li>Express appreciation for teachers' efforts through notes or participation in Teacher Appreciation Week (May 6-10)</li>
      </ul>

      <p><strong>Engaging with School Communities:</strong></p>
      <ul>
        <li>Join the PTA/PTO/PTSO as suggested in the August 2024 article</li>
        <li>Participate in school events and volunteer opportunities</li>
        <li>Connect with other military families at the school</li>
        <li>Attend school board meetings to understand district priorities</li>
      </ul>

      <p><strong>Building Administrator Relationships:</strong></p>
      <ul>
        <li>Introduce yourself to principals and counselors</li>
        <li>Understand the chain of communication for concerns</li>
        <li>Learn about available support services and how to access them</li>
      </ul>

      <h3>Academic Foundations</h3>

      <p>Elementary years focus on building critical skills that impact all future learning:</p>

      <p><strong>Literacy Development:</strong></p>
      <ul>
        <li>Maintain consistent reading routines regardless of moves</li>
        <li>Understand grade-level reading benchmarks and track progress</li>
        <li>Request reading assessments after transitions to identify potential gaps</li>
        <li>Utilize school and installation libraries for continuous access to books</li>
      </ul>

      <p><strong>Mathematical Foundations:</strong></p>
      <ul>
        <li>Monitor mastery of grade-level concepts, especially after moves</li>
        <li>Understand how math curriculum approaches differ between states/countries</li>
        <li>Use resources like Khan Academy to bridge curriculum differences</li>
        <li>Make math relevant through real-life applications (cooking, shopping, budgeting)</li>
      </ul>

      <p><strong>Supporting the Whole Child:</strong></p>
      <ul>
        <li>Encourage curiosity and exploration across subjects</li>
        <li>Balance academic focus with physical activity and creative expression</li>
        <li>Monitor social development and friendship formation</li>
        <li>Provide emotional support during transitions and separations</li>
      </ul>

      <h3>Monitoring Progress and Addressing Concerns</h3>

      <p>The August 2024 article emphasizes the importance of tracking your child's progress:</p>

      <p><strong>Understanding Assessments:</strong></p>
      <ul>
        <li>Request copies of all assessment results</li>
        <li>Maintain a file of benchmark tests and evaluation results</li>
        <li>Compare assessments across schools after moves</li>
        <li>Understand how different states measure achievement</li>
      </ul>

      <p><strong>Early Intervention:</strong></p>
      <ul>
        <li>Address academic concerns promptly</li>
        <li>Learn about available intervention services at each school</li>
        <li>Consider how to maintain support services during transitions</li>
        <li>Understand your rights under educational laws like IDEA and Section 504</li>
      </ul>

      <p>As the August 2024 article notes, "The goal is to make sure your student is on grade level in reading and math by the end of third grade." This milestone is critical, as instruction shifts from "learning to read" to "reading to learn" after third grade.</p>

      <h3>Navigating Transitions During Elementary Years</h3>

      <p>Elementary-aged children have specific needs during school transitions:</p>

      <p><strong>Before Moving:</strong></p>
      <ul>
        <li>Notify the school as soon as PCS orders are received</li>
        <li>Request complete records, including samples of work</li>
        <li>Ask teachers for narratives about your child's learning style and needs</li>
        <li>Create a memory book or project about the current school</li>
      </ul>

      <p><strong>During Transition:</strong></p>
      <ul>
        <li>Maintain learning routines during moves</li>
        <li>Visit the new school website with your child</li>
        <li>Read books about the new location</li>
        <li>Practice key academic skills to prevent regression</li>
      </ul>

      <p><strong>After Arrival:</strong></p>
      <ul>
        <li>Tour the school before the first day if possible</li>
        <li>Meet with the teacher to share information about your child</li>
        <li>Establish new routines quickly</li>
        <li>Monitor adjustment and provide additional support as needed</li>
      </ul>

      <h3>Deployment Support in Elementary Years</h3>

      <p>Young children process deployment in concrete ways and may express concerns through behavior changes:</p>

      <p><strong>Before Deployment:</strong></p>
      <ul>
        <li>Inform teachers about upcoming separations</li>
        <li>Create communication plans between the deployed parent and school</li>
        <li>Prepare comfort items or routines for difficult days</li>
        <li>Establish consistent caregiving arrangements</li>
      </ul>

      <p><strong>During Deployment:</strong></p>
      <ul>
        <li>Maintain school routines rigorously</li>
        <li>Check in regularly with teachers about emotional or behavioral changes</li>
        <li>Create opportunities for the deployed parent to connect with academic life</li>
        <li>Consider school counseling resources for additional support</li>
      </ul>

      <p><strong>After Reunion:</strong></p>
      <ul>
        <li>Prepare for potential adjustment challenges</li>
        <li>Communicate changes in family dynamics to teachers</li>
        <li>Reintegrate the returning parent gradually into school involvement</li>
        <li>Monitor for delayed reactions to the separation</li>
      </ul>

      <p>Elementary years provide the foundation upon which all future learning builds. By actively engaging with schools, monitoring progress, supporting transitions, and addressing deployment impacts, military parents can help ensure their children develop the academic skills, learning attitudes, and emotional resilience needed for continued success.</p>

      <h2>Middle School Transitions and Planning</h2>

      <p>The middle school years represent a pivotal transition period—academically, socially, and developmentally. For military families, these years often coincide with significant moves, increasing the importance of careful planning and support.</p>

      <h3>Understanding the Middle School Environment</h3>

      <p>Middle schools typically differ significantly from elementary schools:</p>

      <p><strong>Structural Changes:</strong></p>
      <ul>
        <li>Multiple teachers and classrooms</li>
        <li>Departmentalized instruction</li>
        <li>Increased independence and responsibility</li>
        <li>More complex scheduling and assignments</li>
        <li>Introduction of elective courses</li>
      </ul>

      <p><strong>Developmental Context:</strong></p>
      <ul>
        <li>Rapidly changing physical, emotional, and cognitive development</li>
        <li>Increased focus on peer relationships and social dynamics</li>
        <li>Growing independence from parents</li>
        <li>Developing identity and interests</li>
        <li>Heightened self-consciousness</li>
      </ul>

      <p>For military adolescents, these universal middle school challenges combine with the potential stress of moves, deployments, and adapting to new communities—making parental guidance particularly important.</p>

      <h3>Academic Planning and Preparation</h3>

      <p>The August 2024 article emphasizes that middle school is "the time to shore up the gaps students may still have in preparation for high school." This critical period requires intentional planning:</p>

      <p><strong>Five-Year Planning:</strong></p>
      <ul>
        <li>Develop a five-year plan with counselors as suggested for 7th graders</li>
        <li>Understand how current courses affect high school options</li>
        <li>Learn graduation requirements for potential future locations</li>
        <li>Identify your child's strengths, interests, and potential career paths</li>
      </ul>

      <p><strong>Mathematics Pathway:</strong></p>
      <ul>
        <li>Pay special attention to the math sequence, which becomes increasingly sequential</li>
        <li>Understand how math placement affects high school STEM opportunities</li>
        <li>Consider how curriculum differences between schools might create gaps</li>
        <li>Provide support during transitions to maintain continuous progress</li>
      </ul>

      <p><strong>Course Selection Strategies:</strong></p>
      <ul>
        <li>Choose courses that develop well-rounded skills</li>
        <li>Balance core academics with exploratory electives</li>
        <li>Consider world language options and when to begin</li>
        <li>Understand prerequisite requirements for advanced high school courses</li>
      </ul>

      <p><strong>Assessment and Progress Monitoring:</strong></p>
      <ul>
        <li>Continue taking the PSAT in October as recommended</li>
        <li>Track benchmark assessments across moves</li>
        <li>Maintain records of strengths and areas needing support</li>
        <li>Address academic gaps promptly through tutoring or additional support</li>
      </ul>

      <h3>Social-Emotional Support During Middle School</h3>

      <p>Middle school brings significant social and emotional changes that may be complicated by military life:</p>

      <p><strong>Building Peer Connections:</strong></p>
      <ul>
        <li>Encourage participation in activities and clubs to form friendships</li>
        <li>Understand that social adjustment may take time after moves</li>
        <li>Help your child maintain connections with friends from previous locations</li>
        <li>Teach strategies for navigating new social environments</li>
      </ul>

      <p><strong>Developing Independence:</strong></p>
      <ul>
        <li>Gradually increase responsibility for managing assignments and communications</li>
        <li>Teach self-advocacy with teachers and staff</li>
        <li>Guide rather than direct problem-solving</li>
        <li>Maintain appropriate supervision while encouraging growth</li>
      </ul>

      <p><strong>Supporting Identity Development:</strong></p>
      <ul>
        <li>Recognize your child's developing interests and strengths</li>
        <li>Expose them to various career possibilities</li>
        <li>Encourage exploration through extracurricular activities</li>
        <li>Help them understand how their military experience shapes their perspective</li>
      </ul>

      <h3>Career Exploration and Future Planning</h3>

      <p>Middle school provides an ideal opportunity to begin exploring future paths:</p>

      <p><strong>Career Awareness:</strong></p>
      <ul>
        <li>Have your student take Career Cluster Surveys as recommended in the August 2024 article</li>
        <li>Discuss various career fields and educational pathways</li>
        <li>Arrange informational interviews or job shadowing when possible</li>
        <li>Connect school subjects to real-world applications and careers</li>
      </ul>

      <p><strong>College Awareness:</strong></p>
      <ul>
        <li>Begin visiting college campuses casually during family trips</li>
        <li>Attend the College Fair for 8th graders at Spotsylvania Mall</li>
        <li>Discuss different types of post-secondary education</li>
        <li>Help your child understand the connection between current effort and future opportunities</li>
      </ul>

      <h3>Navigating Transitions During Middle School Years</h3>

      <p>The social importance of middle school makes transitions particularly challenging:</p>

      <p><strong>Academic Transitions:</strong></p>
      <ul>
        <li>Request detailed course descriptions and textbook information when moving</li>
        <li>Identify potential curriculum gaps and develop plans to address them</li>
        <li>Advocate for appropriate placement at the new school</li>
        <li>Understand how elective sequences may be affected by moves</li>
      </ul>

      <p><strong>Social Transitions:</strong></p>
      <ul>
        <li>Recognize the heightened importance of peer acceptance at this age</li>
        <li>Help your child maintain previous friendships while developing new ones</li>
        <li>Identify activities and interests that can facilitate new connections</li>
        <li>Be patient with adjustment challenges and emotional responses</li>
      </ul>

      <p><strong>Deployment Impacts:</strong></p>
      <ul>
        <li>Understand that middle schoolers may show less obvious signs of deployment stress</li>
        <li>Establish clear expectations for academic performance during separations</li>
        <li>Create appropriate independence while maintaining supervision</li>
        <li>Facilitate continued connection between the deployed parent and school activities</li>
      </ul>

      <p>The middle school years establish critical academic foundations while supporting significant developmental transitions. By focusing on long-term planning, addressing gaps promptly, supporting social-emotional development, and facilitating successful transitions, military parents can help their adolescents navigate these pivotal years successfully.</p>

      <h2>Supporting Children at Different Academic Levels</h2>

      <p>Military children may experience varying academic trajectories due to frequent moves, curriculum differences between schools, and the emotional impacts of military life. Understanding how to support children at different academic levels is essential for ensuring continuous progress.</p>

      <h3>Identifying Academic Readiness and Needs</h3>

      <p>Accurate assessment of your child's academic standing provides the foundation for appropriate support:</p>

      <p><strong>Assessment Strategies:</strong></p>
      <ul>
        <li>Request and review standardized test results across multiple years</li>
        <li>Compare performance across different subject areas to identify patterns</li>
        <li>Consider both academic skills and learning behaviors (organization, attention, persistence)</li>
        <li>Seek teacher observations about classroom performance versus test results</li>
        <li>Consider how transitions or deployments may have affected recent performance</li>
      </ul>

      <p><strong>Recognizing Potential Issues:</strong></p>
      <ul>
        <li>Watch for sudden changes in grades or interest in school</li>
        <li>Note discrepancies between effort and results</li>
        <li>Be alert to signs of frustration, avoidance, or anxiety about schoolwork</li>
        <li>Consider whether behavioral issues might mask academic struggles</li>
        <li>Track performance after moves to identify potential curriculum gaps</li>
      </ul>

      <p><strong>Communication with Schools:</strong></p>
      <ul>
        <li>Schedule conferences specifically to discuss academic progress</li>
        <li>Ask for specific examples of strengths and challenges</li>
        <li>Request information about grade-level expectations and benchmarks</li>
        <li>Inquire about available assessment tools if concerns exist</li>
        <li>Discuss how military transitions may have affected learning</li>
      </ul>

      <h3>Supporting Advanced Learners</h3>

      <p>The October 2024 article highlights the importance of "challenging high-achieving students to prevent boredom and disengagement." Military children with advanced academic abilities require specific support to maintain engagement through transitions:</p>

      <p><strong>Identification and Advocacy:</strong></p>
      <ul>
        <li>Understand gifted identification procedures in each new school district</li>
        <li>Maintain records of previous gifted program participation and assessments</li>
        <li>Advocate for appropriate placement based on demonstrated abilities</li>
        <li>Request above-grade-level work when appropriate</li>
        <li>Understand that gifted identification may look different across states</li>
      </ul>

      <p><strong>Academic Enrichment:</strong></p>
      <ul>
        <li>Explore advanced academic programs available at each new school</li>
        <li>Consider supplemental learning opportunities (competitions, summer programs)</li>
        <li>Provide challenging materials at home to extend learning</li>
        <li>Connect with mentors in areas of special interest</li>
        <li>Utilize online resources for advanced content when local options are limited</li>
      </ul>

      <p><strong>Social-Emotional Support:</strong></p>
      <ul>
        <li>Recognize that advanced learners may experience asynchronous development</li>
        <li>Help your child connect with intellectual peers</li>
        <li>Address perfectionism and unrealistic expectations</li>
        <li>Validate the challenge of being "new" and academically advanced</li>
        <li>Support healthy identity development beyond academic achievement</li>
      </ul>

      <h3>Supporting Students Needing Additional Help</h3>

      <p>When children struggle academically, consistent support through transitions becomes particularly important:</p>

      <p><strong>Intervention and Support:</strong></p>
      <ul>
        <li>Learn about available intervention programs at each school</li>
        <li>Request specific information about your child's response to interventions</li>
        <li>Consider supplemental support through tutoring or educational therapy</li>
        <li>Maintain consistent support during moves and deployments</li>
        <li>Address foundational skill gaps before moving to more advanced content</li>
      </ul>

      <p><strong>Special Education Services:</strong></p>
      <ul>
        <li>Understand your rights under the Individuals with Disabilities Education Act (IDEA)</li>
        <li>Maintain comprehensive records of evaluations, IEPs, and 504 plans</li>
        <li>Learn about the Interstate Compact provisions for special education</li>
        <li>Request comparable services at new schools during transitions</li>
        <li>Consider how services might need adjustment during deployment periods</li>
      </ul>

      <p><strong>Building Academic Confidence:</strong></p>
      <ul>
        <li>Celebrate effort and progress rather than focusing solely on grades</li>
        <li>Provide opportunities for success in areas of strength</li>
        <li>Teach and reinforce effective study strategies</li>
        <li>Help your child understand their learning profile</li>
        <li>Foster a growth mindset about academic challenges</li>
      </ul>

      <h3>Educational Decision-Making During Transitions</h3>

      <p>The March 2024 article emphasizes that "educational decisions during PCS moves should prioritize individual student needs rather than convenience." Consider these factors when making educational choices during transitions:</p>

      <p><strong>Timing Considerations:</strong></p>
      <ul>
        <li>Evaluate the benefits of completing a school year versus early transition</li>
        <li>Consider critical academic milestones when timing moves</li>
        <li>Plan transitions around natural breaks when possible</li>
        <li>Understand how timing affects course placement and credit transfer</li>
        <li>Consider the impact of moves on testing schedules and graduation requirements</li>
      </ul>

      <p><strong>School Selection Factors:</strong></p>
      <ul>
        <li>Research academic programs that match your child's needs and interests</li>
        <li>Consider schools' experience with military students</li>
        <li>Evaluate available support services for specific learning needs</li>
        <li>Assess extracurricular opportunities that support your child's development</li>
        <li>Consider transportation and logistics within your family's schedule</li>
      </ul>

      <p><strong>Continuity Strategies:</strong></p>
      <ul>
        <li>Consider online or correspondence options during transitions</li>
        <li>Explore year-round schooling options to minimize summer regression</li>
        <li>Investigate credit recovery options if moves create academic gaps</li>
        <li>Maintain consistent expectations across different school environments</li>
        <li>Create transition plans with both sending and receiving schools</li>
      </ul>

      <h3>Partnering with Schools for Individualized Support</h3>

      <p>Effective partnerships with schools ensure appropriate support at every academic level:</p>

      <p><strong>Collaborative Approach:</strong></p>
      <ul>
        <li>Approach teachers and administrators as partners in your child's education</li>
        <li>Share relevant information about your child's learning history</li>
        <li>Provide context about military experiences that may affect learning</li>
        <li>Express appreciation for efforts to accommodate your child's needs</li>
        <li>Maintain regular communication about progress and challenges</li>
      </ul>

      <p><strong>Formal Support Plans:</strong></p>
      <ul>
        <li>Understand the different types of support plans (IEP, 504, intervention plans)</li>
        <li>Request evaluation if you suspect learning difficulties</li>
        <li>Participate actively in meetings about your child's educational plan</li>
        <li>Ensure plans include specific, measurable goals</li>
        <li>Review and update plans regularly, especially after transitions</li>
      </ul>

      <p><strong>Utilizing School Resources:</strong></p>
      <ul>
        <li>Learn about available support services at each school</li>
        <li>Connect with school counselors about academic and social-emotional needs</li>
        <li>Explore before/after school programs for additional support</li>
        <li>Utilize school liaison officers to navigate educational systems</li>
        <li>Access technology resources available through the school</li>
      </ul>

      <h2>Calendars, Planning, and Organization</h2>

      <p>Effective planning and organization are essential skills for military families navigating educational systems. As noted in the March 2024 article, "Military families must become masters of planning and organization to maintain educational continuity through frequent transitions."</p>

      <h3>Family Calendar Management</h3>

      <p>A comprehensive family calendar system helps coordinate educational commitments with military obligations:</p>

      <p><strong>Creating Effective Calendar Systems:</strong></p>
      <ul>
        <li>Maintain both digital and physical calendar systems</li>
        <li>Color-code for different family members and types of activities</li>
        <li>Include school events, military commitments, and extracurricular activities</li>
        <li>Mark deployment dates, training periods, and block leave opportunities</li>
        <li>Note school calendar variations (early dismissals, holidays, teacher workdays)</li>
      </ul>

      <p><strong>Coordinating Multiple Schedules:</strong></p>
      <ul>
        <li>Hold weekly family meetings to review upcoming events</li>
        <li>Identify potential conflicts between school and military commitments</li>
        <li>Develop contingency plans for unexpected schedule changes</li>
        <li>Establish clear communication protocols for schedule updates</li>
        <li>Create backup plans for childcare and transportation</li>
      </ul>

      <p><strong>Long-Term Planning:</strong></p>
      <ul>
        <li>Map out key academic dates for the entire school year</li>
        <li>Anticipate potential PCS moves and their timing</li>
        <li>Plan for known deployment cycles and their educational impact</li>
        <li>Schedule regular check-ins on academic progress</li>
        <li>Anticipate transition points between schools or grade levels</li>
      </ul>

      <h3>Educational Planning Through the Year</h3>

      <p>Different times of year require specific educational planning approaches:</p>

      <p><strong>Beginning of School Year:</strong></p>
      <ul>
        <li>Establish communication with new teachers</li>
        <li>Review curriculum expectations and major projects</li>
        <li>Set up organizational systems for each child</li>
        <li>Schedule initial parent-teacher conferences</li>
        <li>Identify volunteer opportunities and school events</li>
      </ul>

      <p><strong>Mid-Year Planning:</strong></p>
      <ul>
        <li>Review first semester progress and adjust support as needed</li>
        <li>Address any emerging academic concerns</li>
        <li>Prepare for standardized testing periods</li>
        <li>Begin planning for summer learning opportunities</li>
        <li>Update records if mid-year moves are anticipated</li>
      </ul>

      <p><strong>End of Year and Summer:</strong></p>
      <ul>
        <li>Collect end-of-year assessments and work samples</li>
        <li>Request teacher recommendations if moving</li>
        <li>Plan summer learning activities to prevent regression</li>
        <li>Prepare for transitions to new schools or grade levels</li>
        <li>Schedule educational activities during summer PCS moves</li>
      </ul>

      <h3>Record-Keeping for Educational Continuity</h3>

      <p>Comprehensive educational records are essential for military families who may change schools frequently:</p>

      <p><strong>Academic Records Management:</strong></p>
      <ul>
        <li>Maintain a portable file of official school records</li>
        <li>Keep copies of report cards, standardized test results, and evaluations</li>
        <li>Document extracurricular activities, awards, and accomplishments</li>
        <li>Preserve samples of significant work from each grade level</li>
        <li>Create a summary of curriculum covered at each school</li>
      </ul>

      <p><strong>Special Education Documentation:</strong></p>
      <ul>
        <li>Maintain complete copies of all IEPs or 504 plans</li>
        <li>Keep records of all evaluations and assessment results</li>
        <li>Document successful accommodations and interventions</li>
        <li>Track service minutes and delivery methods</li>
        <li>Preserve communication with special education teams</li>
      </ul>

      <p><strong>Digital Organization:</strong></p>
      <ul>
        <li>Create cloud-based storage for educational documents</li>
        <li>Scan paper records for electronic backup</li>
        <li>Organize digital files by child, school year, and category</li>
        <li>Maintain contact information for key educational personnel</li>
        <li>Consider password-protected options for confidential information</li>
      </ul>

      <h3>Teaching Organizational Skills to Children</h3>

      <p>Helping children develop their own organizational systems prepares them for educational transitions:</p>

      <p><strong>Age-Appropriate Organization:</strong></p>
      <ul>
        <li>Elementary: Simple folder systems, visual schedules, and checklists</li>
        <li>Middle School: Planners, subject-specific organization, and time management</li>
        <li>High School: Digital/paper hybrid systems, long-term planning, and independent management</li>
      </ul>

      <p><strong>Study Space Organization:</strong></p>
      <ul>
        <li>Create dedicated study areas with necessary supplies</li>
        <li>Establish systems that can be replicated after moves</li>
        <li>Teach maintenance of organized spaces</li>
        <li>Develop portable organization solutions for transitions</li>
        <li>Minimize distractions in study environments</li>
      </ul>

      <p><strong>Time Management Skills:</strong></p>
      <ul>
        <li>Teach backward planning for projects and assignments</li>
        <li>Help children break large tasks into manageable steps</li>
        <li>Establish routines for daily and weekly planning</li>
        <li>Introduce digital tools for time management as appropriate</li>
        <li>Model effective time management in family activities</li>
      </ul>

      <h3>Planning for Educational Transitions</h3>

      <p>Proactive planning for school transitions helps maintain educational continuity:</p>

      <p><strong>Pre-Move Planning:</strong></p>
      <ul>
        <li>Research school options at the new location</li>
        <li>Contact the School Liaison Officer for guidance</li>
        <li>Request complete records from the current school</li>
        <li>Identify potential curriculum differences or gaps</li>
        <li>Prepare your child emotionally and academically for the change</li>
      </ul>

      <p><strong>During-Move Learning:</strong></p>
      <ul>
        <li>Maintain educational routines during transition periods</li>
        <li>Utilize travel time for educational activities</li>
        <li>Document learning experiences related to the move itself</li>
        <li>Prepare questions for the new school</li>
        <li>Review key academic concepts to maintain skills</li>
      </ul>

      <p><strong>Post-Move Integration:</strong></p>
      <ul>
        <li>Schedule meetings with new teachers and counselors</li>
        <li>Monitor adjustment to new curriculum and expectations</li>
        <li>Identify and address any learning gaps promptly</li>
        <li>Connect with school and community resources</li>
        <li>Establish new routines that support educational success</li>
      </ul>

      <p>By developing effective planning and organizational systems, military families create the structure needed to support educational success through transitions. These skills not only benefit children's current academic progress but also establish lifelong habits that will serve them in future educational and career endeavors.</p>
    `},{id:"chapter-3",title:"Chapter 3: Pathways After High School",content:`
      <h2>College Planning Timeline</h2>

      <p>Planning for college requires a strategic approach that begins early in high school. For military families, this timeline may need adjustment based on PCS moves, deployments, and other military-specific considerations.</p>

      <h3>Early High School Planning (9th-10th Grade)</h3>

      <p>The foundation for college preparation begins in the early high school years:</p>

      <p><strong>Academic Foundation:</strong></p>
      <ul>
        <li>Establish strong study habits and organizational systems</li>
        <li>Take challenging courses appropriate to your student's abilities</li>
        <li>Understand graduation requirements at current school and potential future schools</li>
        <li>Consider the impact of moves on course sequencing, especially for math and languages</li>
        <li>Begin tracking activities, honors, and achievements for future applications</li>
      </ul>

      <p><strong>College Awareness:</strong></p>
      <ul>
        <li>Discuss family expectations and financial parameters for college</li>
        <li>Explore different types of institutions (public, private, community college, technical)</li>
        <li>Understand how military benefits might apply to higher education</li>
        <li>Begin casual college visits when traveling to new areas</li>
        <li>Attend college fairs at school or on military installations</li>
      </ul>

      <p><strong>Testing Preparation:</strong></p>
      <ul>
        <li>Take the PSAT in 10th grade for practice</li>
        <li>Identify areas needing improvement for future standardized tests</li>
        <li>Consider how moves might affect test preparation and scheduling</li>
        <li>Explore free test prep resources available through schools and online platforms</li>
      </ul>

      <p>As noted in the April 2024 article, "Early planning is particularly important for military families who may face multiple high school transitions. Building a strong foundation in 9th and 10th grades provides flexibility when moves occur later in high school."</p>

      <h3>Junior Year Focus (11th Grade)</h3>

      <p>The junior year represents a critical period in the college planning process:</p>

      <p><strong>Academic Priorities:</strong></p>
      <ul>
        <li>Continue with challenging coursework appropriate to abilities and interests</li>
        <li>Maintain strong grades, as junior year performance is heavily weighted by admissions</li>
        <li>Address any academic gaps resulting from school transitions</li>
        <li>Consider dual enrollment or AP courses where available</li>
        <li>Research how different schools handle transfer credits if a move is anticipated</li>
      </ul>

      <p><strong>Standardized Testing:</strong></p>
      <ul>
        <li>Take the PSAT/NMSQT in October for scholarship consideration</li>
        <li>Schedule SAT and/or ACT tests, ideally in spring semester</li>
        <li>Consider taking SAT Subject Tests if applying to selective institutions</li>
        <li>Research test-optional policies at schools of interest</li>
        <li>Plan testing dates around potential moves or deployments</li>
      </ul>

      <p><strong>College Research:</strong></p>
      <ul>
        <li>Develop a preliminary college list with safety, target, and reach schools</li>
        <li>Research military-friendly institutions with strong support services</li>
        <li>Consider geographic factors related to potential family moves</li>
        <li>Explore scholarship opportunities, especially those for military dependents</li>
        <li>Begin virtual or in-person campus visits when possible</li>
      </ul>

      <p>The August 2024 article emphasizes that "Junior year is the ideal time for military families to begin serious college exploration, even if another move is on the horizon. Creating a flexible college list that includes options in multiple geographic areas provides security amid uncertainty."</p>

      <h3>Summer Before Senior Year</h3>

      <p>The summer between junior and senior year offers valuable time for focused college preparation:</p>

      <p><strong>College List Refinement:</strong></p>
      <ul>
        <li>Finalize a balanced list of colleges (typically 6-10 schools)</li>
        <li>Research application requirements and deadlines for each institution</li>
        <li>Create a calendar of application deadlines and requirements</li>
        <li>Consider how potential senior year moves might affect application timing</li>
        <li>Research residency requirements if considering in-state tuition options</li>
      </ul>

      <p><strong>Campus Visits:</strong></p>
      <ul>
        <li>Visit campuses when possible, especially top-choice schools</li>
        <li>Prepare specific questions about military student support</li>
        <li>Meet with financial aid officers to discuss military benefits</li>
        <li>Connect with ROTC programs if interested in that pathway</li>
        <li>Explore virtual tour options for schools that cannot be visited in person</li>
      </ul>

      <p><strong>Application Preparation:</strong></p>
      <ul>
        <li>Begin drafting college essays and personal statements</li>
        <li>Identify and approach potential recommendation writers</li>
        <li>Organize application materials, including transcripts from all high schools attended</li>
        <li>Create or update resume highlighting activities, leadership, and achievements</li>
        <li>Research and begin applications for scholarships, particularly those with early deadlines</li>
      </ul>

      <p>The April 2024 article notes that "The summer before senior year is particularly crucial for military students who may face a PCS move during the application season. Completing as much preparation as possible during the summer creates a buffer against disruption."</p>

      <h3>Senior Year Application Process (12th Grade)</h3>

      <p>Senior year requires careful management of multiple application components and deadlines:</p>

      <p><strong>Fall Semester Focus:</strong></p>
      <ul>
        <li>Complete and submit applications, prioritizing early deadlines</li>
        <li>Retake standardized tests if needed for score improvement</li>
        <li>Request official transcripts from all high schools attended</li>
        <li>Follow up with recommendation writers to ensure timely submission</li>
        <li>Complete the FAFSA as soon as possible after October 1st</li>
        <li>Research and apply for scholarships, particularly those for military dependents</li>
      </ul>

      <p><strong>Winter/Spring Semester:</strong></p>
      <ul>
        <li>Track application statuses and respond to any requests for additional information</li>
        <li>Compare financial aid offers when they arrive</li>
        <li>Visit or revisit top choice schools if possible before making final decisions</li>
        <li>Submit enrollment deposit by May 1st (National College Decision Day)</li>
        <li>Notify other schools of your decision</li>
        <li>Request final transcripts be sent to your chosen institution</li>
      </ul>

      <p><strong>Managing Senior Year Moves:</strong></p>
      <ul>
        <li>Communicate with colleges about any change in schools or address</li>
        <li>Ensure continuity in recommendation letters if changing schools</li>
        <li>Consider applying to schools in both current and future locations if a move is anticipated</li>
        <li>Maintain copies of all application materials in case of transition</li>
        <li>Connect with school counselors at both sending and receiving schools</li>
      </ul>

      <p>As highlighted in the August 2024 article, "Senior year moves present unique challenges for college applicants. Maintaining digital copies of all application materials, establishing early relationships with college admissions offices, and being transparent about military moves can help navigate this complex situation."</p>

      <h3>Post-Acceptance Planning</h3>

      <p>After college acceptance, several important steps remain:</p>

      <p><strong>Financial Planning:</strong></p>
      <ul>
        <li>Review and compare financial aid packages carefully</li>
        <li>Understand how military benefits will be applied</li>
        <li>Research additional scholarship opportunities</li>
        <li>Develop a realistic budget for college expenses</li>
        <li>Consider implications of potential family moves on college financing</li>
      </ul>

      <p><strong>Transition Preparation:</strong></p>
      <ul>
        <li>Register for orientation programs</li>
        <li>Complete housing applications and deposits</li>
        <li>Address any health requirements or immunization records</li>
        <li>Connect with military student services at your chosen institution</li>
        <li>Research student support resources available on campus</li>
      </ul>

      <p><strong>Summer Planning:</strong></p>
      <ul>
        <li>Maintain academic engagement through reading or summer courses</li>
        <li>Develop college-level study and organizational skills</li>
        <li>Prepare for independent living responsibilities</li>
        <li>Discuss communication plans with family, especially if deployments are anticipated</li>
        <li>Connect with future roommates and classmates through social media or orientation events</li>
      </ul>

      <h2>Military-Specific College Planning Considerations</h2>

      <p>Military families face unique factors that influence the college planning process:</p>

      <h3>Geographic Planning</h3>

      <p>Location considerations take on added complexity for military families:</p>

      <p><strong>Strategic College List Development:</strong></p>
      <ul>
        <li>Consider schools near current duty station, potential future stations, and extended family</li>
        <li>Research institutions with strong distance learning options</li>
        <li>Evaluate schools' flexibility with deferrals or leaves of absence for military-related moves</li>
        <li>Consider the implications of establishing residency in different states</li>
        <li>Explore schools with multiple campus locations or transfer agreements</li>
      </ul>

      <p><strong>Stability Considerations:</strong></p>
      <ul>
        <li>Evaluate the timing of potential PCS moves relative to college transitions</li>
        <li>Consider whether a student should remain in one location while parents move</li>
        <li>Research guardian options if parents are deployed or stationed overseas</li>
        <li>Understand implications for financial aid if family location changes</li>
        <li>Plan for school breaks and housing if family is stationed far from the college</li>
      </ul>

      <p>The April 2024 article notes that "Geographic flexibility in college planning provides military families with options regardless of where service takes them. Creating clusters of potential schools in different regions allows for adaptation to changing orders."</p>

      <h3>Military Education Benefits</h3>

      <p>Understanding and maximizing military education benefits requires careful planning:</p>

      <p><strong>Post-9/11 GI Bill and Transferability:</strong></p>
      <ul>
        <li>Understand eligibility requirements and transfer procedures</li>
        <li>Plan for the required additional service commitment when transferring benefits</li>
        <li>Consider strategic allocation of benefits among multiple children</li>
        <li>Research Yellow Ribbon Program participation at potential schools</li>
        <li>Understand housing allowance implications for different locations</li>
      </ul>

      <p><strong>Military Scholarships and Aid:</strong></p>
      <ul>
        <li>Research branch-specific education support programs</li>
        <li>Apply for scholarships specifically designated for military dependents</li>
        <li>Explore installation education centers for additional resources</li>
        <li>Consider ROTC scholarships as a potential pathway</li>
        <li>Understand how military benefits coordinate with other financial aid</li>
      </ul>

      <p><strong>Benefit Optimization Strategies:</strong></p>
      <ul>
        <li>Compare benefit value at different types of institutions</li>
        <li>Consider using benefits for graduate rather than undergraduate education in some cases</li>
        <li>Understand implications of benefit changes due to service member separation or retirement</li>
        <li>Research state-specific military education benefits</li>
        <li>Consider the timing of benefit use relative to service member's career plans</li>
      </ul>

      <p>As highlighted in the August 2024 article, "Strategic planning for military education benefits should begin years before college. Understanding the complex rules governing these benefits and how they interact with other forms of financial aid can significantly reduce college costs."</p>

      <h3>Deployment Timing</h3>

      <p>Deployment schedules can significantly impact college planning and transitions:</p>

      <p><strong>Application Season Considerations:</strong></p>
      <ul>
        <li>Prepare for potential parent deployment during application season</li>
        <li>Establish communication plans for application decisions and financial aid questions</li>
        <li>Consider granting power of attorney for education-related decisions if necessary</li>
        <li>Complete as much collaborative planning as possible before deployment</li>
        <li>Identify support resources for the student during the college application process</li>
      </ul>

      <p><strong>College Transition Planning:</strong></p>
      <ul>
        <li>Consider how deployment timing might affect college move-in and orientation</li>
        <li>Develop contingency plans for parent participation in college transitions</li>
        <li>Establish communication expectations during deployment</li>
        <li>Connect with military student services for additional support</li>
        <li>Plan meaningful pre-deployment celebrations of college milestones</li>
      </ul>

      <p>The April 2024 article emphasizes that "Deployment timing relative to college transitions requires thoughtful planning. Creating detailed timelines and backup plans ensures that important college milestones can be navigated successfully even during separations."</p>

      <h2>Application Process and Requirements</h2>

      <p>Understanding the college application process helps military students navigate it successfully despite potential disruptions:</p>

      <h3>Understanding Application Components</h3>

      <p>College applications consist of several key elements:</p>

      <p><strong>Core Application Elements:</strong></p>
      <ul>
        <li>Application form (Common Application, Coalition Application, or institution-specific)</li>
        <li>High school transcripts from all schools attended</li>
        <li>Standardized test scores (SAT, ACT, or test-optional documentation)</li>
        <li>Essays and personal statements</li>
        <li>Letters of recommendation</li>
        <li>Activity list or resume</li>
        <li>Application fees or fee waiver requests</li>
      </ul>

      <p><strong>Supplemental Requirements:</strong></p>
      <ul>
        <li>Institution-specific essays or short answer questions</li>
        <li>Arts portfolios or auditions for specific programs</li>
        <li>Interview requirements or opportunities</li>
        <li>Demonstrated interest documentation</li>
        <li>Additional testing for specific programs (e.g., language proficiency)</li>
      </ul>

      <p><strong>Financial Aid Components:</strong></p>
      <ul>
        <li>Free Application for Federal Student Aid (FAFSA)</li>
        <li>CSS Profile for some private institutions</li>
        <li>Institution-specific financial aid forms</li>
        <li>Scholarship applications</li>
        <li>Documentation of military benefits</li>
      </ul>

      <h3>Types of Application Plans</h3>

      <p>Different application timelines offer various advantages and considerations:</p>

      <p><strong>Early Decision (ED):</strong></p>
      <ul>
        <li>Binding commitment to attend if accepted</li>
        <li>Typically November deadline with December notification</li>
        <li>Higher acceptance rates at many institutions</li>
        <li>Requires careful consideration of financial aid needs</li>
        <li>May be complicated by military moves or deployments</li>
      </ul>

      <p><strong>Early Action (EA):</strong></p>
      <ul>
        <li>Non-binding early application option</li>
        <li>Similar timeline to Early Decision</li>
        <li>Allows comparison of financial aid packages</li>
        <li>Provides earlier decisions while maintaining flexibility</li>
        <li>Often ideal for military families facing potential moves</li>
      </ul>

      <p><strong>Regular Decision:</strong></p>
      <ul>
        <li>Standard application timeline with January/February deadlines</li>
        <li>Decisions typically released in March/April</li>
        <li>Allows more time for test retakes or grade improvements</li>
        <li>Enables comparison of all financial aid offers</li>
        <li>May better accommodate mid-year school changes</li>
      </ul>

      <p><strong>Rolling Admission:</strong></p>
      <ul>
        <li>Applications reviewed as received until spaces are filled</li>
        <li>Earlier applications generally receive priority consideration</li>
        <li>Provides flexibility for military families facing uncertain timelines</li>
        <li>Allows strategic timing based on academic record and readiness</li>
        <li>Often used by state universities and less selective institutions</li>
      </ul>

      <p>The August 2024 article advises that "Early Action often provides the best balance for military families—offering the advantages of early application without the binding commitment that could become problematic if family circumstances change."</p>

      <h3>Strategic Application Planning</h3>

      <p>Developing a strategic approach to applications helps military students maximize opportunities:</p>

      <p><strong>Balanced College List Development:</strong></p>
      <ul>
        <li>Include safety, target, and reach schools based on academic profile</li>
        <li>Consider geographic distribution related to potential military moves</li>
        <li>Research military-friendly institutions with strong support services</li>
        <li>Evaluate financial feasibility including military benefits</li>
        <li>Consider institutional flexibility with deferrals or leaves for military reasons</li>
      </ul>

      <p><strong>Timeline Management:</strong></p>
      <ul>
        <li>Create a master calendar of all application deadlines</li>
        <li>Build in buffer time for potential military disruptions</li>
        <li>Prioritize applications based on deadlines and preference</li>
        <li>Plan standardized testing dates around potential moves or deployments</li>
        <li>Schedule college visits to coincide with military travel when possible</li>
      </ul>

      <p><strong>Contingency Planning:</strong></p>
      <ul>
        <li>Prepare for potential mid-application moves or deployments</li>
        <li>Establish communication plans with counselors at both sending and receiving schools</li>
        <li>Maintain digital copies of all application materials</li>
        <li>Identify backup recommendation writers if necessary</li>
        <li>Research application deadline extension policies for military circumstances</li>
      </ul>

      <h3>Essay and Personal Statement Development</h3>

      <p>Essays provide an opportunity to highlight the unique perspectives gained through military life:</p>

      <p><strong>Effective Topic Selection:</strong></p>
      <ul>
        <li>Consider how military experiences have shaped personal growth</li>
        <li>Identify unique perspectives gained through relocations and cultural exposure</li>
        <li>Reflect on challenges overcome through military life transitions</li>
        <li>Avoid clichés about military life while honoring authentic experiences</li>
        <li>Consider how military values have influenced educational goals</li>
      </ul>

      <p><strong>Writing Approach:</strong></p>
      <ul>
        <li>Focus on personal growth and reflection rather than just describing experiences</li>
        <li>Demonstrate maturity gained through military lifestyle challenges</li>
        <li>Highlight adaptability and resilience developed through transitions</li>
        <li>Connect military experiences to academic interests and future goals</li>
        <li>Ensure essays reveal personal qualities beyond what appears elsewhere in the application</li>
      </ul>

      <p><strong>Practical Considerations:</strong></p>
      <ul>
        <li>Begin essays early to allow for multiple revisions</li>
        <li>Seek feedback from counselors, teachers, and family members</li>
        <li>Tailor essays for specific institutional prompts and values</li>
        <li>Maintain authentic voice while addressing grammar and structure</li>
        <li>Save essays securely with backup copies in case of moves</li>
      </ul>

      <p>The April 2024 article notes that "College essays provide an excellent opportunity for military-connected students to demonstrate the unique perspectives and maturity they've gained. Authentic reflection on these experiences can significantly strengthen applications."</p>

      <h3>Letters of Recommendation</h3>

      <p>Securing strong recommendations requires special planning for students who change schools:</p>

      <p><strong>Selecting Recommenders:</strong></p>
      <ul>
        <li>Identify teachers who know you well academically, preferably from junior or senior year</li>
        <li>Consider counselors who understand your transition history</li>
        <li>Maintain relationships with potential recommenders even after changing schools</li>
        <li>Select recommenders who can speak to different aspects of your abilities</li>
        <li>Consider whether a recommendation from a military community member adds valuable perspective</li>
      </ul>

      <p><strong>Supporting Recommenders:</strong></p>
      <ul>
        <li>Provide a resume or activity list highlighting accomplishments</li>
        <li>Share your college list and application timeline</li>
        <li>Discuss specific projects or contributions you'd like mentioned</li>
        <li>Express appreciation for their support</li>
        <li>Follow up with gentle reminders as deadlines approach</li>
      </ul>

      <p><strong>Managing School Changes:</strong></p>
      <ul>
        <li>Request recommendations before leaving a school if a move is anticipated</li>
        <li>Ask teachers to save recommendations for future submission if needed</li>
        <li>Provide new counselors with context about your academic history</li>
        <li>Consider supplemental recommendations from long-term mentors who know you across transitions</li>
        <li>Communicate with colleges about recommendation challenges due to moves</li>
      </ul>

      <h3>Financial Aid and Scholarship Applications</h3>

      <p>Navigating financial aid requires understanding both standard and military-specific options:</p>

      <p><strong>FAFSA Considerations:</strong></p>
      <ul>
        <li>Complete the FAFSA as soon as possible after October 1st</li>
        <li>Understand how military compensation affects financial aid calculations</li>
        <li>Update FAFSA information if family financial situation changes due to deployment or relocation</li>
        <li>Maintain records of all submissions and communications</li>
        <li>Research state-specific financial aid deadlines, which may differ from federal timelines</li>
      </ul>

      <p><strong>Military-Specific Aid:</strong></p>
      <ul>
        <li>Research scholarships specifically for military dependents</li>
        <li>Understand how Post-9/11 GI Bill benefits coordinate with other aid</li>
        <li>Explore branch-specific education support programs</li>
        <li>Consider ROTC scholarships and service academy options</li>
        <li>Investigate Yellow Ribbon Program participation at private institutions</li>
      </ul>

      <p><strong>Scholarship Search Strategy:</strong></p>
      <ul>
        <li>Begin scholarship research early, ideally in junior year</li>
        <li>Focus on scholarships specifically for military dependents</li>
        <li>Consider how relocations might affect eligibility for location-based scholarships</li>
        <li>Create a scholarship application calendar organized by deadline</li>
        <li>Prepare a core set of materials that can be adapted for multiple applications</li>
      </ul>

      <p>The August 2024 article emphasizes that "Military families should approach financial aid as a multi-faceted process, combining federal aid, military benefits, institutional scholarships, and private awards. Understanding how these different funding sources interact is essential for maximizing support."</p>

      <h3>Military-Connected Status Considerations</h3>

      <p>Effectively communicating military-connected status can provide context for applications:</p>

      <p><strong>Application Disclosure:</strong></p>
      <ul>
        <li>Indicate military-connected status on applications when prompted</li>
        <li>Consider addressing military lifestyle impacts in additional information sections</li>
        <li>Explain unusual transcript patterns resulting from school changes</li>
        <li>Provide context for extracurricular involvement affected by relocations</li>
        <li>Communicate special circumstances like deployment impacts when relevant</li>
      </ul>

      <p><strong>Institutional Research:</strong></p>
      <ul>
        <li>Identify colleges with strong military student support services</li>
        <li>Research institutions that participate in military education benefit programs</li>
        <li>Consider schools with established military student communities</li>
        <li>Evaluate flexibility policies for military-related circumstances</li>
        <li>Connect with military student services offices during the application process</li>
      </ul>

      <p><strong>Highlighting Military-Developed Strengths:</strong></p>
      <ul>
        <li>Demonstrate adaptability and resilience developed through transitions</li>
        <li>Showcase cross-cultural competencies gained through diverse experiences</li>
        <li>Emphasize maturity and independence fostered by military family life</li>
        <li>Illustrate problem-solving skills developed through frequent adjustments</li>
        <li>Highlight community service and leadership within military communities</li>
      </ul>

      <p>The April 2024 article notes that "Colleges increasingly recognize the unique strengths that military-connected students bring to campus. Thoughtfully communicating these experiences provides important context for admissions officers evaluating applications."</p>

      <h2>Career Exploration and Internships</h2>

      <p>Career exploration should begin early and progress alongside college planning, helping students make informed decisions about their educational pathways.</p>

      <h3>Beginning Career Awareness</h3>

      <p>Early career exploration helps students identify interests and potential pathways:</p>

      <p><strong>Interest Assessment:</strong></p>
      <ul>
        <li>Complete career interest inventories through school guidance offices</li>
        <li>Explore the O*NET Interest Profiler and other online assessment tools</li>
        <li>Reflect on subjects and activities that generate natural enthusiasm</li>
        <li>Consider how military lifestyle experiences might influence career interests</li>
        <li>Discuss results with counselors, parents, and mentors</li>
      </ul>

      <p><strong>Career Research:</strong></p>
      <ul>
        <li>Investigate career fields aligned with identified interests</li>
        <li>Research educational requirements for various career paths</li>
        <li>Explore salary ranges, job outlook, and geographic considerations</li>
        <li>Consider which careers offer flexibility for military lifestyle demands</li>
        <li>Identify careers with transferable skills across different industries</li>
      </ul>

      <p><strong>Personal Skills Inventory:</strong></p>
      <ul>
        <li>Identify current strengths and abilities</li>
        <li>Recognize skills developed through military lifestyle (adaptability, cross-cultural communication)</li>
        <li>Assess areas for growth and development</li>
        <li>Match personal attributes to potential career fields</li>
        <li>Consider how different careers align with personal values and priorities</li>
      </ul>

      <p>The September 2024 article emphasizes that "Early career exploration helps students make more informed decisions about college majors and educational pathways, potentially saving time and money by reducing major changes and extended time to degree completion."</p>

      <h3>Internship and Work Experience Opportunities</h3>

      <p>Practical experience provides valuable insights and skills development:</p>

      <p><strong>Types of Opportunities:</strong></p>
      <ul>
        <li>Paid internships in corporate, government, or nonprofit settings</li>
        <li>Volunteer positions related to career interests</li>
        <li>Job shadowing experiences with professionals</li>
        <li>Part-time employment in fields of interest</li>
        <li>Virtual internships that can continue despite relocations</li>
        <li>Military installation employment opportunities</li>
      </ul>

      <p><strong>Finding Opportunities:</strong></p>
      <ul>
        <li>Connect with School Liaison Officers about local opportunities</li>
        <li>Research military spouse employment programs that may include student internships</li>
        <li>Explore installation employment offices and youth programs</li>
        <li>Investigate corporate internship programs with military-friendly policies</li>
        <li>Network with military community members in fields of interest</li>
        <li>Research virtual opportunities that can be maintained during moves</li>
      </ul>

      <p><strong>Value of Early Experiences:</strong></p>
      <ul>
        <li>Test career interests before committing to educational pathways</li>
        <li>Develop industry-specific skills and knowledge</li>
        <li>Build professional references and connections</li>
        <li>Strengthen college applications and scholarship essays</li>
        <li>Gain confidence in professional settings</li>
        <li>Develop transferable skills valuable across different careers</li>
      </ul>

      <h3>Internship Application Timeline</h3>

      <p>Planning for internships requires attention to specific timelines:</p>

      <p><strong>High School Internships:</strong></p>
      <ul>
        <li>Research opportunities beginning in fall of sophomore or junior year</li>
        <li>Apply for summer programs between December and March</li>
        <li>Consider school-year internships that might offer more flexible scheduling</li>
        <li>Research programs specifically designed for military-connected students</li>
        <li>Prepare application materials well in advance of deadlines</li>
      </ul>

      <p><strong>College Internships:</strong></p>
      <ul>
        <li>Research summer opportunities beginning in fall semester</li>
        <li>Note that competitive programs may have application deadlines 6-9 months in advance</li>
        <li>As noted in the September 2024 article, "Summer 2025 applications are open for many large corporations"</li>
        <li>Consider how PCS moves or deployments might affect internship timing</li>
        <li>Research virtual internships that can continue despite relocations</li>
      </ul>

      <p><strong>Application Materials:</strong></p>
      <ul>
        <li>Develop a resume highlighting relevant coursework and experiences</li>
        <li>Prepare a basic cover letter that can be customized for different opportunities</li>
        <li>Request letters of recommendation from teachers or previous supervisors</li>
        <li>Compile work samples if applicable to the field</li>
        <li>Practice interview skills with school counselors or family members</li>
      </ul>

      <h3>Building Professional Identity</h3>

      <p>Developing a professional presence begins in high school:</p>

      <p><strong>Digital Presence:</strong></p>
      <ul>
        <li>Create a professional email address for applications and communications</li>
        <li>Establish a LinkedIn profile highlighting academic and extracurricular achievements</li>
        <li>Review and manage social media accounts with future employers in mind</li>
        <li>Consider developing a simple portfolio website for relevant fields</li>
        <li>Join online professional groups related to career interests</li>
      </ul>

      <p><strong>Networking Skills:</strong></p>
      <ul>
        <li>Practice introducing yourself and discussing your interests</li>
        <li>Attend career fairs and professional events when possible</li>
        <li>Connect with military community members in fields of interest</li>
        <li>Develop relationships with teachers and mentors who can provide guidance</li>
        <li>Learn to write professional emails and thank-you notes</li>
      </ul>

      <p><strong>Communication Skills:</strong></p>
      <ul>
        <li>Practice articulating goals and interests clearly</li>
        <li>Develop the ability to discuss strengths and areas for growth</li>
        <li>Learn appropriate workplace communication norms</li>
        <li>Practice active listening and thoughtful questioning</li>
        <li>Develop confidence in professional settings</li>
      </ul>

      <h3>Military-Specific Career Considerations</h3>

      <p>Military lifestyle creates unique career planning factors:</p>

      <p><strong>Portable Careers:</strong></p>
      <ul>
        <li>Research careers with geographic flexibility</li>
        <li>Consider fields with strong remote work opportunities</li>
        <li>Explore careers with nationwide demand and licensing reciprocity</li>
        <li>Investigate careers within the federal government system</li>
        <li>Consider entrepreneurial and freelance opportunities</li>
      </ul>

      <p><strong>Military-Connected Opportunities:</strong></p>
      <ul>
        <li>Explore Department of Defense civilian career paths</li>
        <li>Research military contractor positions and requirements</li>
        <li>Consider careers supporting military families and communities</li>
        <li>Investigate installation employment opportunities</li>
        <li>Research military spouse employment preference programs</li>
      </ul>

      <p>The September 2024 article notes that "Military-connected students should consider how their unique experiences and understanding of military life might create career advantages in certain fields, from government service to healthcare to education."</p>

      <h3>College and Career Connection</h3>

      <p>Career exploration directly informs educational planning:</p>

      <p><strong>Major Selection:</strong></p>
      <ul>
        <li>Research which majors align with career interests</li>
        <li>Consider multiple pathways to career goals</li>
        <li>Explore interdisciplinary programs that develop versatile skill sets</li>
        <li>Understand prerequisite courses for competitive majors</li>
        <li>Research which institutions have strong programs in fields of interest</li>
      </ul>

      <p><strong>Educational Planning:</strong></p>
      <ul>
        <li>Consider geographic locations with strong industry connections</li>
        <li>Research institutions with robust internship programs</li>
        <li>Explore colleges with co-op programs that integrate work experience</li>
        <li>Consider certificate programs that complement degree pathways</li>
        <li>Investigate institutions with strong career services and alumni networks</li>
      </ul>

      <p><strong>Skill Development Focus:</strong></p>
      <ul>
        <li>Identify key skills needed for career fields of interest</li>
        <li>Seek coursework and extracurricular activities that develop these skills</li>
        <li>Consider how to document and demonstrate skill development</li>
        <li>Research which technical certifications might complement academic degrees</li>
        <li>Develop transferable skills valuable across different career paths</li>
      </ul>

      <h2>Alternative Pathways</h2>

      <p>While traditional four-year college is right for many students, military families should explore all available post-secondary options:</p>

      <h3>Military Service Options</h3>

      <p>Military service offers educational benefits and career training:</p>

      <p><strong>Service Branches and Options:</strong></p>
      <ul>
        <li>Active Duty service in Army, Navy, Air Force, Marines, Coast Guard, or Space Force</li>
        <li>Reserve components offering part-time service while pursuing education</li>
        <li>National Guard with both federal and state missions</li>
        <li>Officer pathways through service academies, ROTC, or Officer Candidate School</li>
        <li>Enlisted pathways with specialized training and advancement opportunities</li>
      </ul>

      <p><strong>Preparation Steps:</strong></p>
      <ul>
        <li>Research different branches and career fields</li>
        <li>Connect with recruiters to understand options and requirements</li>
        <li>Prepare for the ASVAB (Armed Services Vocational Aptitude Battery)</li>
        <li>Maintain physical fitness and health</li>
        <li>Understand security clearance requirements for different positions</li>
        <li>For service academies, begin preparation in sophomore year of high school</li>
      </ul>

      <p><strong>Educational Benefits:</strong></p>
      <ul>
        <li>Tuition Assistance for active duty service members</li>
        <li>Post-9/11 GI Bill for education after service</li>
        <li>Yellow Ribbon Program for additional tuition support</li>
        <li>College credit for military training and experience</li>
        <li>Credentialing programs for civilian certifications</li>
        <li>Free education at service academies with service commitment</li>
      </ul>

      <p>The August 2024 article notes that "Military service can provide valuable training, leadership experience, and educational benefits while offering a meaningful career path. For many military-connected students, following in family footsteps provides both purpose and practical advantages."</p>

      <h3>Vocational and Technical Education</h3>

      <p>Career and technical education offers direct pathways to skilled careers:</p>

      <p><strong>Program Types:</strong></p>
      <ul>
        <li>Technical certificate programs (typically 6-18 months)</li>
        <li>Associate of Applied Science degrees (typically 2 years)</li>
        <li>Apprenticeship programs combining education and paid work experience</li>
        <li>Industry certification programs</li>
        <li>Military-specific technical training that transfers to civilian careers</li>
      </ul>

      <p><strong>High-Demand Fields:</strong></p>
      <ul>
        <li>Healthcare (nursing, medical technology, dental hygiene)</li>
        <li>Information technology (cybersecurity, network administration)</li>
        <li>Skilled trades (electrical, plumbing, HVAC, welding)</li>
        <li>Advanced manufacturing and industrial technology</li>
        <li>Automotive and aviation technology</li>
        <li>Culinary arts and hospitality management</li>
      </ul>

      <p><strong>Advantages for Military Families:</strong></p>
      <ul>
        <li>Shorter completion timeframes that work well with military moves</li>
        <li>Lower costs compared to four-year degrees</li>
        <li>Skills that transfer across geographic locations</li>
        <li>High demand in locations near military installations</li>
        <li>Eligibility for military education benefits</li>
        <li>Potential for remote work in some technical fields</li>
      </ul>

      <p>The September 2024 article emphasizes that "Vocational and technical education pathways often lead to well-paying careers with strong job security and geographic flexibility—important considerations for military-connected students who may need portable career options."</p>

      <h3>Community College Pathways</h3>

      <p>Community colleges offer flexible, affordable educational options:</p>

      <p><strong>Program Options:</strong></p>
      <ul>
        <li>Transfer pathways leading to four-year degrees</li>
        <li>Terminal associate degrees for direct career entry</li>
        <li>Certificate programs in specialized fields</li>
        <li>Non-credit workforce development courses</li>
        <li>Dual enrollment options for high school students</li>
      </ul>

      <p><strong>Advantages:</strong></p>
      <ul>
        <li>Lower tuition costs compared to four-year institutions</li>
        <li>Open admission policies with accessible entry points</li>
        <li>Flexible scheduling with evening, weekend, and online options</li>
        <li>Smaller class sizes and more individualized attention</li>
        <li>Ability to explore academic interests before committing to a major</li>
        <li>Strong connections to local workforce needs</li>
      </ul>

      <p><strong>Military-Friendly Features:</strong></p>
      <ul>
        <li>Veterans services offices on many campuses</li>
        <li>Credit for military training and experience</li>
        <li>Online course options that can continue during moves</li>
        <li>Participation in Military Friendly Schools program</li>
        <li>Articulation agreements with four-year institutions nationwide</li>
        <li>Experience serving military-connected students</li>
      </ul>

      <h3>Gap Year Experiences</h3>

      <p>A structured gap year can provide valuable growth and clarity:</p>

      <p><strong>Gap Year Options:</strong></p>
      <ul>
        <li>Structured gap year programs with educational components</li>
        <li>Service opportunities through AmeriCorps, City Year, or conservation corps</li>
        <li>International experiences through programs like Global Citizen Year</li>
        <li>Work experience in fields of interest</li>
        <li>Skill development through technical training or certifications</li>
        <li>Independent projects with clear goals and outcomes</li>
      </ul>

      <p><strong>Benefits:</strong></p>
      <ul>
        <li>Time for personal growth and maturity development</li>
        <li>Opportunity to clarify educational and career goals</li>
        <li>Development of independence and self-reliance</li>
        <li>Acquisition of practical skills and real-world experience</li>
        <li>Potential for significant community contribution</li>
        <li>Enhanced college applications with unique experiences</li>
      </ul>

      <p><strong>Planning Considerations:</strong></p>
      <ul>
        <li>Research deferral policies at colleges of interest</li>
        <li>Develop clear goals and structure for the year</li>
        <li>Consider how the experience aligns with future plans</li>
        <li>Create a budget and financial plan for the year</li>
        <li>Research how military benefits might apply to certain gap year options</li>
        <li>Consider how military moves might affect gap year plans</li>
      </ul>

      <p>The April 2024 article notes that "A well-planned gap year can provide valuable perspective and maturity, potentially leading to more focused and successful college experiences when students do enroll."</p>

      <h3>Entrepreneurship and Small Business</h3>

      <p>Entrepreneurship offers flexible career options well-suited to military life:</p>

      <p><strong>Entrepreneurial Options:</strong></p>
      <ul>
        <li>Small business ownership in portable fields</li>
        <li>Online business development</li>
        <li>Freelance work in writing, design, programming, or consulting</li>
        <li>Product development and sales</li>
        <li>Service-based businesses that can relocate</li>
      </ul>

      <p><strong>Preparation Steps:</strong></p>
      <ul>
        <li>Develop foundational business knowledge through courses or programs</li>
        <li>Build relevant skills through education and practical experience</li>
        <li>Research successful business models in fields of interest</li>
        <li>Connect with mentors and advisors in entrepreneurial communities</li>
        <li>Explore small business development resources and support programs</li>
      </ul>

      <p><strong>Military-Connected Advantages:</strong></p>
      <ul>
        <li>Special loan programs for veteran entrepreneurs</li>
        <li>Set-aside contracts for veteran-owned businesses</li>
        <li>Entrepreneurship training programs for veterans and military spouses</li>
        <li>Portable business models that can move with military assignments</li>
        <li>Global perspective and cross-cultural skills valuable in business</li>
      </ul>

      <h3>Decision-Making Framework</h3>

      <p>Choosing among pathways requires thoughtful consideration:</p>

      <p><strong>Self-Assessment Factors:</strong></p>
      <ul>
        <li>Personal interests, values, and goals</li>
        <li>Learning style preferences and academic strengths</li>
        <li>Financial considerations and resources</li>
        <li>Timeline for career entry and advancement</li>
        <li>Geographic flexibility needs related to military lifestyle</li>
        <li>Desired work-life balance and lifestyle factors</li>
      </ul>

      <p><strong>Research Components:</strong></p>
      <ul>
        <li>Educational requirements for career fields of interest</li>
        <li>Cost and return on investment for different pathways</li>
        <li>Job outlook and growth projections</li>
        <li>Geographic availability of opportunities</li>
        <li>Flexibility for military lifestyle demands</li>
        <li>Potential for advancement and long-term career development</li>
      </ul>

      <p><strong>Decision Timeline:</strong></p>
      <ul>
        <li>Begin exploration in early high school years</li>
        <li>Narrow options during junior year</li>
        <li>Make preliminary decisions by fall of senior year</li>
        <li>Finalize plans by spring of senior year</li>
        <li>Build in flexibility for changing circumstances</li>
        <li>Remember that initial decisions can be adjusted as needed</li>
      </ul>

      <p>The September 2024 article emphasizes that "There is no single 'right' pathway after high school. The best choice depends on individual goals, circumstances, and preferences. Military-connected students should explore all options with an open mind, considering how each might align with both personal aspirations and the realities of military family life."</p>

      <p>Alternative pathways provide valuable options that may better suit some students' needs, interests, and circumstances than traditional four-year college attendance. By exploring these alternatives thoroughly, evaluating alignment with personal goals, considering military lifestyle factors, and making informed decisions, students can identify the path that best supports their unique journey to adult success.</p>
    `},{id:"chapter-4",title:"Chapter 4: Special Considerations for Military Families",content:`
      <h2>Handling School Transitions During PCS Moves</h2>

      <p>Permanent Change of Station (PCS) moves present significant educational challenges for military families. With strategic planning and advocacy, these transitions can be navigated successfully while maintaining educational continuity.</p>

      <h3>Before the Move: Preparation</h3>

      <p>Thorough preparation before a move creates the foundation for successful educational transitions:</p>

      <p><strong>Timeline Development:</strong></p>
      <ul>
        <li>Create a detailed timeline working backward from your move date</li>
        <li>Schedule meetings with current school administrators and teachers</li>
        <li>Identify key academic milestones that might be affected by the move</li>
        <li>Plan for records transfer and enrollment requirements</li>
        <li>Consider optimal timing for the actual school transition</li>
      </ul>

      <p><strong>Records Compilation:</strong></p>
      <ul>
        <li>Request complete official records from the current school</li>
        <li>Collect samples of student work that demonstrate abilities</li>
        <li>Gather documentation of participation in special programs</li>
        <li>Obtain copies of IEPs, 504 plans, or gifted education plans</li>
        <li>Request letters from teachers describing learning styles and strengths</li>
        <li>Ensure all standardized test results are included</li>
      </ul>

      <p><strong>Course Completion Planning:</strong></p>
      <ul>
        <li>Meet with teachers to discuss options for completing coursework</li>
        <li>Identify potential credit or curriculum gaps between schools</li>
        <li>Develop plans for completing essential assignments before moving</li>
        <li>Consider options for alternative assessments if moving before testing periods</li>
        <li>Research credit transfer policies at the receiving school</li>
      </ul>

      <p><strong>Receiving School Research:</strong></p>
      <ul>
        <li>Connect with the School Liaison Officer at your new installation</li>
        <li>Research school options in the new location</li>
        <li>Compare curriculum and graduation requirements</li>
        <li>Identify available programs that match your child's needs and interests</li>
        <li>Establish contact with the receiving school's registrar and counseling office</li>
        <li>Research state-specific educational requirements and assessments</li>
      </ul>

      <h3>The Interstate Compact</h3>

      <p>The Interstate Compact on Educational Opportunity for Military Children provides important protections during school transitions:</p>

      <p><strong>Key Protections:</strong></p>
      <ul>
        <li>Enrollment flexibility regarding residency requirements</li>
        <li>Immediate enrollment with pending documentation</li>
        <li>Maintaining grade placement from sending school</li>
        <li>Course placement based on previous enrollment</li>
        <li>Flexibility in graduation requirements for transferring seniors</li>
        <li>Extracurricular participation opportunities</li>
        <li>Special education services continuity</li>
      </ul>

      <p><strong>Understanding Implementation:</strong></p>
      <ul>
        <li>Research how the Compact is implemented in your new state</li>
        <li>Understand that interpretation may vary between districts</li>
        <li>Recognize that Department of Defense and overseas schools are included</li>
        <li>Be aware that the Compact does not address quality of education or school choice</li>
        <li>Know that the Compact applies to active duty, recently retired, and some National Guard/Reserve families</li>
      </ul>

      <p><strong>Using the Compact Effectively:</strong></p>
      <ul>
        <li>Reference specific Compact provisions when discussing enrollment issues</li>
        <li>Contact your School Liaison Officer for assistance with Compact implementation</li>
        <li>Follow proper channels for addressing concerns (teacher, principal, district, state commissioner)</li>
        <li>Document all communications regarding Compact-related issues</li>
        <li>Approach discussions as collaborative problem-solving rather than confrontational</li>
      </ul>

      <h3>During Transition: Maintaining Continuity</h3>

      <p>The period between schools requires intentional efforts to maintain educational momentum:</p>

      <p><strong>Academic Maintenance:</strong></p>
      <ul>
        <li>Establish consistent study routines during the move</li>
        <li>Utilize online learning resources to bridge gaps</li>
        <li>Maintain reading habits and discuss content</li>
        <li>Practice math skills to prevent regression</li>
        <li>Consider temporary homeschooling during extended transition periods</li>
        <li>Document educational activities during the transition</li>
      </ul>

      <p><strong>Social-Emotional Support:</strong></p>
      <ul>
        <li>Acknowledge feelings about leaving friends and familiar environments</li>
        <li>Maintain connections with previous school friends through technology</li>
        <li>Research extracurricular and social opportunities at the new location</li>
        <li>Prepare children for cultural or regional differences</li>
        <li>Emphasize the positive aspects of the new school and community</li>
        <li>Maintain family routines and traditions during the transition</li>
      </ul>

      <p><strong>Records Management:</strong></p>
      <ul>
        <li>Hand-carry essential educational records</li>
        <li>Organize records in a portable filing system</li>
        <li>Create digital backups of all important documents</li>
        <li>Maintain a contact list from the previous school</li>
        <li>Prepare a summary sheet of your child's educational history</li>
        <li>Include medical records relevant to educational needs</li>
      </ul>

      <h3>Arrival at New School: Successful Integration</h3>

      <p>Thoughtful integration into the new school environment supports academic and social success:</p>

      <p><strong>Initial Meetings:</strong></p>
      <ul>
        <li>Schedule meetings with school counselors before enrollment if possible</li>
        <li>Tour the school with your child before the first day</li>
        <li>Meet with teachers to discuss learning styles and previous experiences</li>
        <li>Connect with special program coordinators if applicable</li>
        <li>Establish communication preferences with new teachers</li>
        <li>Introduce yourself to parent organization representatives</li>
      </ul>

      <p><strong>Appropriate Placement:</strong></p>
      <ul>
        <li>Advocate for proper course placement based on previous enrollment</li>
        <li>Request assessments if needed to determine appropriate levels</li>
        <li>Discuss any curriculum gaps and develop plans to address them</li>
        <li>Ensure continuity of special education or gifted services</li>
        <li>Monitor initial assignments to confirm appropriate challenge level</li>
        <li>Be prepared to request adjustments if initial placement isn't appropriate</li>
      </ul>

      <p><strong>Connection Building:</strong></p>
      <ul>
        <li>Identify peer mentors or student ambassadors</li>
        <li>Connect with other military families at the school</li>
        <li>Encourage participation in extracurricular activities</li>
        <li>Attend school events as a family</li>
        <li>Volunteer in the classroom or school when possible</li>
        <li>Arrange social opportunities outside of school</li>
      </ul>

      <p><strong>Transition Monitoring:</strong></p>
      <ul>
        <li>Schedule follow-up meetings with teachers after the first few weeks</li>
        <li>Monitor homework completion and understanding</li>
        <li>Watch for signs of academic struggle or social isolation</li>
        <li>Check in regularly about school experiences</li>
        <li>Address concerns promptly before they escalate</li>
        <li>Celebrate successes and progress during the transition</li>
      </ul>

      <h3>Special Scenario Planning</h3>

      <p>Certain PCS scenarios require additional planning and consideration:</p>

      <p><strong>Mid-Year Moves:</strong></p>
      <ul>
        <li>Discuss options for completing the grading period before moving</li>
        <li>Research semester break timing at both schools</li>
        <li>Prepare for potential curriculum misalignment</li>
        <li>Consider credit recovery options if courses don't transfer directly</li>
        <li>Develop strategies for social integration mid-year</li>
        <li>Create a more intensive transition support plan</li>
      </ul>

      <p><strong>Overseas Transitions:</strong></p>
      <ul>
        <li>Research international or Department of Defense Education Activity (DoDEA) schools</li>
        <li>Understand different educational systems and approaches</li>
        <li>Consider language learning needs and supports</li>
        <li>Plan for potential technology and communication differences</li>
        <li>Research cultural adjustment resources</li>
        <li>Prepare for different academic calendars and milestone timing</li>
      </ul>

      <p><strong>Senior Year Transitions:</strong></p>
      <ul>
        <li>Research graduation requirements at potential new schools</li>
        <li>Consider the option of remaining with a guardian to complete senior year</li>
        <li>Understand how the Interstate Compact protects graduating seniors</li>
        <li>Develop a plan for college applications during transition</li>
        <li>Ensure continuity in extracurricular leadership positions if possible</li>
        <li>Create strategies for building meaningful connections in a shortened timeframe</li>
      </ul>

      <h3>Building Long-Term Transition Skills</h3>

      <p>Beyond managing individual moves, military families can develop skills that support educational success through multiple transitions:</p>

      <p><strong>Student Self-Advocacy Development:</strong></p>
      <ul>
        <li>Teach children to articulate their educational needs and experiences</li>
        <li>Practice explaining previous learning and accomplishments</li>
        <li>Develop skills for introducing themselves to new teachers and peers</li>
        <li>Encourage appropriate communication about academic challenges</li>
        <li>Gradually increase student ownership of the transition process with age</li>
        <li>Model effective advocacy and communication</li>
      </ul>

      <p><strong>Educational Continuity Tools:</strong></p>
      <ul>
        <li>Maintain comprehensive educational portfolios</li>
        <li>Develop consistent organizational systems that transfer between schools</li>
        <li>Identify core academic priorities that remain constant despite moves</li>
        <li>Create family learning traditions that continue regardless of location</li>
        <li>Establish relationships with national organizations that provide consistent programming</li>
        <li>Consider supplemental learning options that provide continuity</li>
      </ul>

      <p><strong>Resilience Building:</strong></p>
      <ul>
        <li>Frame transitions as opportunities for growth and new experiences</li>
        <li>Acknowledge challenges while emphasizing capabilities</li>
        <li>Celebrate successful adaptations to new environments</li>
        <li>Develop family narratives that highlight strength through transitions</li>
        <li>Connect with other military families to share strategies and support</li>
        <li>Recognize and build on skills developed through previous moves</li>
      </ul>

      <h2>Support During Deployments</h2>

      <p>Deployments create unique educational challenges that require specific strategies to maintain academic progress and emotional wellbeing.</p>

      <h3>Understanding Deployment Impact on Education</h3>

      <p>Recognizing how deployment affects learning helps parents and educators provide appropriate support:</p>

      <p><strong>Academic Impacts:</strong></p>
      <ul>
        <li>Difficulty concentrating and completing assignments</li>
        <li>Decreased academic performance during key deployment phases</li>
        <li>Increased absenteeism or tardiness</li>
        <li>Reduced participation in class discussions and activities</li>
        <li>Changes in motivation and academic interests</li>
        <li>Potential regression in previously mastered skills</li>
      </ul>

      <p><strong>Behavioral Manifestations:</strong></p>
      <ul>
        <li>Increased anxiety about school performance</li>
        <li>Reluctance to participate in school events</li>
        <li>Changes in peer relationships and social patterns</li>
        <li>Difficulty separating from the at-home parent</li>
        <li>Acting out or withdrawal in the classroom</li>
        <li>Changes in extracurricular participation</li>
      </ul>

      <p><strong>Developmental Considerations:</strong></p>
      <ul>
        <li>Elementary students may regress in independence skills</li>
        <li>Middle school students may experience heightened social concerns</li>
        <li>High school students may take on additional family responsibilities</li>
        <li>Different reactions during pre-deployment, deployment, and reintegration phases</li>
        <li>Cumulative effects of multiple deployments</li>
        <li>Individual differences based on temperament and previous experiences</li>
      </ul>

      <p>As noted in the April 2025 article by Penny Rowley, "The educational impact of deployment varies significantly based on the child's age, temperament, and previous experiences with separation. Understanding these individual differences helps parents and educators provide targeted support."</p>

      <h3>Pre-Deployment Educational Planning</h3>

      <p>Preparation before deployment creates a foundation for educational stability:</p>

      <p><strong>School Communication:</strong></p>
      <ul>
        <li>Inform teachers, counselors, and administrators about the upcoming deployment</li>
        <li>Provide basic information about deployment length and communication limitations</li>
        <li>Discuss potential behavioral or academic changes to monitor</li>
        <li>Establish preferred communication methods and frequency</li>
        <li>Create a contact list of support people beyond the at-home parent</li>
        <li>Request resources available for military children during deployment</li>
      </ul>

      <p><strong>Family Organization:</strong></p>
      <ul>
        <li>Create a deployment binder with school information and contacts</li>
        <li>Establish homework and study routines that can be maintained</li>
        <li>Develop a family calendar system for tracking school events</li>
        <li>Prepare for single-parent management of educational responsibilities</li>
        <li>Arrange carpools and activity transportation backup plans</li>
        <li>Consider adjustments to extracurricular commitments if needed</li>
      </ul>

      <p><strong>Student Preparation:</strong></p>
      <ul>
        <li>Discuss potential feelings and changes in age-appropriate ways</li>
        <li>Create strategies for managing difficult moments at school</li>
        <li>Identify trusted adults at school for emotional support</li>
        <li>Establish expectations for academic performance during deployment</li>
        <li>Prepare for the deployed parent's continued involvement in education</li>
        <li>Create meaningful school-related mementos to maintain connection</li>
      </ul>

      <p><strong>Support Network Development:</strong></p>
      <ul>
        <li>Connect with other military families at the school</li>
        <li>Identify school-based support groups or counseling services</li>
        <li>Research deployment support programs in the community</li>
        <li>Establish relationships with teachers and staff before deployment</li>
        <li>Connect with installation resources for deployment support</li>
        <li>Create a network of friends and family for backup assistance</li>
      </ul>

      <h3>During Deployment: Maintaining Stability and Connection</h3>

      <p>Consistent routines and ongoing communication support educational success during deployment:</p>

      <p><strong>Home Structure:</strong></p>
      <ul>
        <li>Maintain consistent homework and study times</li>
        <li>Create a dedicated study space with necessary supplies</li>
        <li>Establish regular check-ins about school progress</li>
        <li>Develop systems for tracking assignments and due dates</li>
        <li>Balance academic expectations with emotional needs</li>
        <li>Maintain family traditions that support educational values</li>
      </ul>

      <p><strong>School Coordination:</strong></p>
      <ul>
        <li>Schedule regular check-ins with teachers about academic progress</li>
        <li>Monitor for changes in behavior or performance</li>
        <li>Communicate significant deployment events that might affect learning</li>
        <li>Attend school events and conferences consistently</li>
        <li>Request additional support or accommodations if needed</li>
        <li>Share effective strategies between home and school</li>
      </ul>

      <p><strong>Deployed Parent Educational Involvement:</strong></p>
      <ul>
        <li>Share school news and accomplishments during communications</li>
        <li>Create video recordings of the deployed parent reading books or explaining homework</li>
        <li>Arrange video calls during special school events when possible</li>
        <li>Send school projects, reports, and artwork to the deployed parent</li>
        <li>Have the deployed parent record encouraging messages before tests or presentations</li>
        <li>Maintain the deployed parent's presence in educational decisions</li>
      </ul>

      <p><strong>Academic Support:</strong></p>
      <ul>
        <li>Monitor for signs of academic difficulty and address promptly</li>
        <li>Consider tutoring or homework help programs if needed</li>
        <li>Provide additional structure and supervision as necessary</li>
        <li>Recognize when to adjust expectations temporarily</li>
        <li>Celebrate academic successes and efforts</li>
        <li>Connect academic content to the deployed parent's experiences when relevant</li>
      </ul>

      <p>Sandra Osborn, in the April 2025 article, emphasizes that "Maintaining educational routines during deployment provides children with a sense of normalcy and control when other aspects of life feel unpredictable. These routines become anchors that support both academic progress and emotional wellbeing."</p>

      <h3>Leveraging School and Community Resources</h3>

      <p>Various support programs can provide additional assistance during deployment:</p>

      <p><strong>School-Based Programs:</strong></p>
      <ul>
        <li>Counseling services for individual or group support</li>
        <li>Deployment clubs or lunch bunches for military children</li>
        <li>Homework help programs and academic intervention services</li>
        <li>Mentoring programs pairing students with staff members</li>
        <li>After-school activities providing additional structure</li>
        <li>Military cultural awareness initiatives for staff and students</li>
      </ul>

      <p><strong>Military-Specific Resources:</strong></p>
      <ul>
        <li>Military Family Life Counselors available in many schools</li>
        <li>Tutor.com for military families offering free academic support</li>
        <li>Military OneSource educational consultation services</li>
        <li>Military Child Education Coalition resources and programs</li>
        <li>Installation youth centers and educational support services</li>
        <li>Military Kids Connect online resources and community</li>
      </ul>

      <p><strong>Community Support:</strong></p>
      <ul>
        <li>Public library programs for military children</li>
        <li>Community organization scholarships for activities during deployment</li>
        <li>Faith-based youth programs and support groups</li>
        <li>University extension programs for military families</li>
        <li>Local businesses offering support for military students</li>
        <li>Volunteer organizations providing mentoring and enrichment</li>
      </ul>

      <h3>Reintegration and Educational Transitions</h3>

      <p>The return of the deployed parent requires thoughtful educational adjustment:</p>

      <p><strong>School Communication:</strong></p>
      <ul>
        <li>Inform teachers and staff about the returning parent</li>
        <li>Discuss potential behavioral or academic changes during reintegration</li>
        <li>Arrange for the returning parent to meet teachers and staff</li>
        <li>Update school records with the returned parent's information</li>
        <li>Share effective strategies developed during deployment</li>
        <li>Establish new communication patterns including both parents</li>
      </ul>

      <p><strong>Academic Reintegration:</strong></p>
      <ul>
        <li>Gradually involve the returning parent in homework routines</li>
        <li>Share information about curriculum, assignments, and expectations</li>
        <li>Maintain successful academic systems established during deployment</li>
        <li>Prepare the returning parent for changes in educational approaches</li>
        <li>Discuss and align parental expectations for academic performance</li>
        <li>Plan for both parents to attend upcoming school events</li>
      </ul>

      <p><strong>Emotional Processing:</strong></p>
      <ul>
        <li>Recognize that reintegration may temporarily affect concentration</li>
        <li>Allow time for adjustment in academic performance</li>
        <li>Provide opportunities to share school experiences from during deployment</li>
        <li>Acknowledge feelings about changing family dynamics and routines</li>
        <li>Maintain communication with school counselors during transition</li>
        <li>Celebrate the family's successful navigation of the deployment</li>
      </ul>

      <p><strong>Academic Review:</strong></p>
      <ul>
        <li>Assess academic progress made during the deployment</li>
        <li>Identify any areas needing additional support</li>
        <li>Review educational decisions made during the separation</li>
        <li>Update educational goals and plans as a family</li>
        <li>Consider whether adjustments to activities or commitments are needed</li>
        <li>Plan for upcoming educational milestones together</li>
      </ul>

      <h3>Special Scenario Planning</h3>

      <p>Certain deployment situations require additional educational considerations:</p>

      <p><strong>Extended or Unexpected Extensions:</strong></p>
      <ul>
        <li>Communicate timeline changes to school personnel</li>
        <li>Reassess academic support needs for the longer duration</li>
        <li>Maintain motivation and routine despite disappointment</li>
        <li>Consider additional support services for extended separations</li>
        <li>Refresh connection strategies between student and deployed parent</li>
        <li>Acknowledge the emotional impact while reinforcing coping skills</li>
      </ul>

      <p><strong>Combat Deployments:</strong></p>
      <ul>
        <li>Provide age-appropriate information about deployment location</li>
        <li>Establish media consumption guidelines at home</li>
        <li>Prepare for potential classroom discussions about conflict</li>
        <li>Develop strategies for managing anxiety at school</li>
        <li>Create communication plans for limited contact periods</li>
        <li>Connect with counseling resources for additional support</li>
      </ul>

      <p><strong>Multiple or Frequent Deployments:</strong></p>
      <ul>
        <li>Monitor for cumulative academic effects across deployments</li>
        <li>Maintain consistent educational documentation for continuity</li>
        <li>Develop increasingly sophisticated coping strategies</li>
        <li>Build on successful approaches from previous deployments</li>
        <li>Consider the timing of deployments relative to key academic transitions</li>
        <li>Strengthen ongoing relationships with school support personnel</li>
      </ul>

      <p>Daniel Dunham reflects in the April 2025 article: "After multiple deployments, we've learned that each child responds differently, and their needs change as they grow. What worked during an elementary school deployment may not be effective during middle or high school. The key is remaining flexible while maintaining core routines and open communication with both the school and our children."</p>

      <h2>Military-Specific Resources and Programs</h2>

      <p>Military families have access to specialized resources designed to support educational success through the unique challenges of military life.</p>

      <h3>School Liaison Program</h3>

      <p>School Liaison Officers (SLOs) serve as the primary connection between military families, commands, and school systems:</p>

      <p><strong>Program Overview:</strong></p>
      <ul>
        <li>Available at all major military installations across service branches</li>
        <li>Serve as subject matter experts on educational issues affecting military children</li>
        <li>Advocate for the educational needs of military-connected students</li>
        <li>Facilitate communication between families, schools, and military commands</li>
        <li>Help navigate both public and Department of Defense Education Activity (DoDEA) school systems</li>
        <li>Provide continuity of service through transitions and deployments</li>
      </ul>

      <p><strong>Key Services:</strong></p>
      <ul>
        <li>School transition support before, during, and after PCS moves</li>
        <li>Information about local school options and enrollment procedures</li>
        <li>Guidance on navigating the Interstate Compact provisions</li>
        <li>Assistance with special education continuity and advocacy</li>
        <li>Connection to installation and community resources</li>
        <li>Support during deployment and other military-specific challenges</li>
        <li>Educational workshops and programming for families</li>
      </ul>

      <p><strong>Accessing Support:</strong></p>
      <ul>
        <li>Contact information available through installation directories</li>
        <li>Services available to active duty, reserve, and guard families</li>
        <li>No appointment necessary for initial consultation</li>
        <li>Virtual support available for geographically separated families</li>
        <li>Services remain available during PCS transitions</li>
        <li>Support extends to college and career planning for high school students</li>
      </ul>

      <h3>Department of Defense Education Activity (DoDEA)</h3>

      <p>DoDEA operates schools on military installations worldwide, providing consistent educational experiences for military children:</p>

      <p><strong>System Overview:</strong></p>
      <ul>
        <li>Operates approximately 160 schools across 11 countries, 7 states, and 2 territories</li>
        <li>Serves over 67,000 children of active duty military and DoD civilian families</li>
        <li>Provides education from pre-kindergarten through grade 12</li>
        <li>Follows a consistent curriculum across all locations</li>
        <li>Maintains uniform standards and expectations worldwide</li>
        <li>Designed specifically to support the unique needs of military students</li>
      </ul>

      <p><strong>Educational Approach:</strong></p>
      <ul>
        <li>College and career-ready standards across all subject areas</li>
        <li>Consistent assessment system throughout all schools</li>
        <li>Digital learning initiatives supporting 21st-century skills</li>
        <li>Strong emphasis on social-emotional learning and support</li>
        <li>Specialized programming for transitions and deployment support</li>
        <li>High academic performance compared to national averages</li>
        <li>Seamless transfers between DoDEA schools worldwide</li>
      </ul>

      <p><strong>Accessing DoDEA Schools:</strong></p>
      <ul>
        <li>Eligibility based on sponsor's status and housing location</li>
        <li>Priority given to active duty military families living on installation</li>
        <li>Registration procedures standardized across all locations</li>
        <li>Space-available enrollment for other categories when possible</li>
        <li>Virtual options available in some circumstances</li>
        <li>Information available through School Liaison Officers</li>
      </ul>

      <h3>Military Interstate Children's Compact Commission (MIC3)</h3>

      <p>The Interstate Compact provides important educational protections for military children during school transitions:</p>

      <p><strong>Purpose and Scope:</strong></p>
      <ul>
        <li>Addresses key educational transition issues faced by military families</li>
        <li>Implemented in all 50 states and the District of Columbia</li>
        <li>Applies to children of active duty members and certain activated guard/reserve</li>
        <li>Covers transitions between public schools in different states</li>
        <li>Addresses enrollment, placement, attendance, eligibility, and graduation</li>
        <li>Provides consistent policies across participating states</li>
      </ul>

      <p><strong>Key Protections:</strong></p>
      <ul>
        <li>Educational Records: Unofficial hand-carried records enable immediate enrollment</li>
        <li>Enrollment Age: Allows continuation at same grade level despite different cutoff dates</li>
        <li>Course Placement: Honors placement in equivalent courses at new schools</li>
        <li>Special Education: Provides for comparable services during transitions</li>
        <li>Graduation Requirements: Offers flexibility for seniors transferring in final year</li>
        <li>Extracurricular Participation: Facilitates inclusion in activities despite tryout deadlines</li>
        <li>Absence Considerations: Provides excused absences for deployment-related activities</li>
      </ul>

      <p><strong>Accessing Compact Support:</strong></p>
      <ul>
        <li>Each state has a commissioner overseeing implementation</li>
        <li>School Liaison Officers can assist with Compact application</li>
        <li>State education websites provide Compact information</li>
        <li>MIC3 website offers resources and contact information</li>
        <li>Specific dispute resolution process available if needed</li>
        <li>Parent resources available to explain rights and protections</li>
      </ul>

      <h3>Military OneSource</h3>

      <p>Military OneSource provides comprehensive support services, including educational resources:</p>

      <p><strong>Program Overview:</strong></p>
      <ul>
        <li>Department of Defense-funded program available to all military families</li>
        <li>Provides 24/7 support through website, phone, and chat services</li>
        <li>Offers resources for all aspects of military life, including education</li>
        <li>Available to active duty, National Guard, and Reserve regardless of location</li>
        <li>Services remain accessible for transitioning service members</li>
        <li>Provides confidential support at no cost to families</li>
      </ul>

      <p><strong>Educational Services:</strong></p>
      <ul>
        <li>Education consultations with specialized consultants</li>
        <li>Scholarship and financial aid information</li>
        <li>Academic tutoring resources and referrals</li>
        <li>Special education navigation assistance</li>
        <li>College and career planning resources</li>
        <li>Deployment support specific to educational needs</li>
        <li>Access to Tutor.com for military families</li>
      </ul>

      <p><strong>Accessing Support:</strong></p>
      <ul>
        <li>Website accessible 24/7 with comprehensive resources</li>
        <li>Call center available at 800-342-9647</li>
        <li>OCONUS access through international calling options</li>
        <li>Mobile app provides on-the-go resource access</li>
        <li>No registration required for general information</li>
        <li>Personalized support available through secure login</li>
      </ul>

      <h3>Military Child Education Coalition (MCEC)</h3>

      <p>MCEC is a non-profit organization focused specifically on the educational needs of military children:</p>

      <p><strong>Organization Overview:</strong></p>
      <ul>
        <li>Non-profit dedicated to ensuring quality educational opportunities for military children</li>
        <li>Founded in 1998 by military parents, educators, and community leaders</li>
        <li>Focuses on addressing the challenges of mobility, transition, and deployment</li>
        <li>Provides professional development, research, and direct support</li>
        <li>Works with schools, military installations, and communities</li>
        <li>Advocates for policies supporting military-connected students</li>
      </ul>

      <p><strong>Key Programs:</strong></p>
      <ul>
        <li>Student 2 Student: Peer support program for transitioning students</li>
        <li>Parent to Parent: Educational workshops for military parents</li>
        <li>Professional development for educators serving military children</li>
        <li>SchoolQuest: Online tool for school transitions</li>
        <li>Tell Me A Story: Literacy program supporting social-emotional needs</li>
        <li>Frances Hesselbein Student Leadership Program: Development for military teens</li>
        <li>Special education resources and support</li>
      </ul>

      <p><strong>Accessing Resources:</strong></p>
      <ul>
        <li>Website provides free resources and program information</li>
        <li>Annual National Training Seminar open to families and professionals</li>
        <li>Publications available for parents and educators</li>
        <li>Webinars and online training accessible remotely</li>
        <li>Local installation programs in many locations</li>
        <li>School-based programs available in many military-connected districts</li>
      </ul>

      <h3>Installation Family Support Centers</h3>

      <p>Each service branch operates family support centers that include educational resources:</p>

      <p><strong>Center Types:</strong></p>
      <ul>
        <li>Army: Army Community Service (ACS)</li>
        <li>Navy and Marine Corps: Fleet and Family Support Center (FFSC)</li>
        <li>Air Force: Airman and Family Readiness Center (AFRC)</li>
        <li>Coast Guard: Work-Life Staff Offices</li>
        <li>National Guard: Family Assistance Centers (FAC)</li>
        <li>Reserve: Family Readiness Programs</li>
      </ul>

      <p>These centers provide various educational support services, including information about local schools, youth programs, tutoring resources, and deployment support. They often work in coordination with School Liaison Officers to provide comprehensive educational assistance to military families.</p>

      <p>By leveraging these military-specific resources and programs, families can access specialized support designed to address the unique educational challenges of military life. These resources complement school and community programs, creating a network of support that helps military children thrive academically despite frequent transitions and separations.</p>

      <h2>Virtual and Online Resources</h2>

      <p>Digital resources provide consistent support regardless of geographic location, making them particularly valuable for mobile military families.</p>

      <h3>Educational Platforms</h3>

      <p>Online educational resources specifically available to military families include:</p>

      <p><strong>Tutor.com for Military Families:</strong></p>
      <ul>
        <li>Free online tutoring and homework help for eligible military families</li>
        <li>Available 24/7 for K-12 and adult learners</li>
        <li>Live, one-to-one academic support in more than 100 subjects</li>
        <li>Accessible from any internet-connected device</li>
        <li>Includes test preparation and college application assistance</li>
        <li>Provides continuity during PCS moves and deployments</li>
      </ul>

      <p><strong>MWR Digital Library:</strong></p>
      <ul>
        <li>Comprehensive digital library available to military ID cardholders</li>
        <li>Access to e-books, audiobooks, and academic databases</li>
        <li>Educational resources for all age groups</li>
        <li>Test preparation materials and study guides</li>
        <li>Language learning programs and resources</li>
        <li>Academic journals and research materials</li>
      </ul>

      <p><strong>Military Kids Connect:</strong></p>
      <ul>
        <li>Online community specifically for military children</li>
        <li>Age-appropriate resources for elementary through high school</li>
        <li>Educational content about military life and transitions</li>
        <li>Interactive activities supporting social-emotional learning</li>
        <li>Resources for understanding deployment and military culture</li>
        <li>Moderated forums for connecting with other military children</li>
      </ul>

      <h3>Scholarship and Financial Support</h3>

      <p>Online resources for educational funding include:</p>

      <p><strong>MyCAA (Military Spouse Career Advancement Accounts):</strong></p>
      <ul>
        <li>Online portal for spouse education and career opportunities</li>
        <li>Information about financial assistance for education and training</li>
        <li>Resources for portable career development</li>
        <li>Career counseling and support services</li>
        <li>Documentation and application systems</li>
        <li>Connection to approved educational programs</li>
      </ul>

      <p><strong>GI Bill Transferability Resources:</strong></p>
      <ul>
        <li>Online information about transferring benefits to dependents</li>
        <li>Eligibility requirements and application procedures</li>
        <li>Benefit calculators and comparison tools</li>
        <li>Documentation and verification systems</li>
        <li>Status tracking and management tools</li>
        <li>Resources for maximizing benefit usage</li>
      </ul>

      <p><strong>Military Scholarship Databases:</strong></p>
      <ul>
        <li>Specialized search tools for military-connected scholarships</li>
        <li>Branch-specific scholarship information</li>
        <li>Resources for military children, spouses, and veterans</li>
        <li>Application tracking and management systems</li>
        <li>Deadline reminders and notification services</li>
        <li>Guidance for effective scholarship applications</li>
      </ul>

      <h3>Specialized Support Information</h3>

      <p>Online resources for specific educational needs include:</p>

      <p><strong>STOMP (Specialized Training of Military Parents):</strong></p>
      <ul>
        <li>Online resources for military families with children who have disabilities</li>
        <li>Information about special education rights and advocacy</li>
        <li>Guidance for navigating special education transitions</li>
        <li>Virtual training opportunities and webinars</li>
        <li>Connection to parent mentors and support networks</li>
        <li>Resources specific to military special education challenges</li>
      </ul>

      <p><strong>EFMP Resources:</strong></p>
      <ul>
        <li>Online information about the Exceptional Family Member Program</li>
        <li>Resources for educational advocacy and support</li>
        <li>Guidance for PCS moves with special needs considerations</li>
        <li>Virtual support groups and networking opportunities</li>
        <li>Documentation systems and record management tools</li>
        <li>Connection to installation and community resources</li>
      </ul>

      <p><strong>Special Education Networks:</strong></p>
      <ul>
        <li>Online communities for military families navigating special education</li>
        <li>Resources for understanding rights across different states</li>
        <li>Information about maintaining service continuity during moves</li>
        <li>Virtual advocacy training and support</li>
        <li>Document sharing and management systems</li>
        <li>Connection to legal resources and support services</li>
      </ul>

      <h2>Building Community Support Networks</h2>

      <p>Strong support networks are essential for educational success through military transitions and challenges.</p>

      <h3>Types of Support Networks</h3>

      <p>Different types of networks provide complementary support:</p>

      <p><strong>Military Community:</strong></p>
      <ul>
        <li>Unit-based family readiness groups and support systems</li>
        <li>Installation youth programs and activities</li>
        <li>Military spouse clubs and organizations</li>
        <li>Branch-specific support programs and resources</li>
        <li>Military child and youth services programs</li>
        <li>Installation religious communities and programs</li>
      </ul>

      <p><strong>School-Based:</strong></p>
      <ul>
        <li>Parent-teacher organizations and associations</li>
        <li>Military family advisory committees</li>
        <li>School clubs specifically for military children</li>
        <li>Volunteer opportunities within schools</li>
        <li>Extracurricular activities and sports teams</li>
        <li>School counseling and support services</li>
      </ul>

      <p><strong>Neighborhood:</strong></p>
      <ul>
        <li>Community organizations and activities</li>
        <li>Local libraries and educational programs</li>
        <li>Youth sports and recreational opportunities</li>
        <li>Community service and volunteer groups</li>
        <li>Local businesses supporting military families</li>
        <li>Faith-based organizations and programs</li>
      </ul>

      <p><strong>Virtual:</strong></p>
      <ul>
        <li>Online military family support groups</li>
        <li>Social media communities for military families</li>
        <li>Virtual mentoring and tutoring programs</li>
        <li>Digital communication with extended family</li>
        <li>Online educational communities and resources</li>
        <li>Virtual support groups for specific needs or circumstances</li>
      </ul>

      <h3>Developing School Connections</h3>

      <p>Building relationships within school communities supports educational success:</p>

      <p><strong>Engagement Strategies:</strong></p>
      <ul>
        <li>Volunteer in classrooms or for school events</li>
        <li>Attend school functions and activities consistently</li>
        <li>Participate in parent-teacher organizations</li>
        <li>Serve on school committees or advisory boards</li>
        <li>Offer military cultural awareness resources to schools</li>
        <li>Connect with teachers and staff beyond formal conferences</li>
      </ul>

      <p><strong>Military Parent Networking:</strong></p>
      <ul>
        <li>Identify other military families at the school</li>
        <li>Create informal support groups or communication channels</li>
        <li>Share information about school procedures and expectations</li>
        <li>Coordinate transportation and childcare support</li>
        <li>Mentor newly arrived military families</li>
        <li>Advocate collectively for military student needs</li>
      </ul>

      <p>As noted in the May 2024 article, "Building connections with other military families at your child's school creates an invaluable support network. These families understand the unique challenges you face and can provide both practical assistance and emotional support during transitions and deployments."</p>

      <h3>Installation and Military Community Connections</h3>

      <p>Military-specific networks provide specialized understanding and support:</p>

      <p><strong>Unit Support Groups:</strong></p>
      <ul>
        <li>Connect with family readiness groups or equivalent organizations</li>
        <li>Participate in unit family events and activities</li>
        <li>Build relationships with families facing similar deployment schedules</li>
        <li>Share educational resources and information</li>
        <li>Develop mutual support systems for school events and activities</li>
        <li>Create communication channels for sharing educational information</li>
      </ul>

      <p><strong>Youth Programs:</strong></p>
      <ul>
        <li>Enroll children in installation youth centers and activities</li>
        <li>Participate in military youth sports programs</li>
        <li>Connect with military teen centers and programs</li>
        <li>Explore Scout troops and other youth organizations on installation</li>
        <li>Utilize before and after-school programs on installation</li>
        <li>Participate in installation summer camps and activities</li>
      </ul>

      <h3>Maintaining Connection During Transitions</h3>

      <p>Preserving relationships through moves supports social-emotional wellbeing:</p>

      <p><strong>Departure Planning:</strong></p>
      <ul>
        <li>Create memory books or projects with classmates</li>
        <li>Organize appropriate farewell activities</li>
        <li>Collect contact information for important connections</li>
        <li>Take photos of significant people and places</li>
        <li>Acknowledge the importance of relationships being left</li>
        <li>Create closure through meaningful goodbye rituals</li>
      </ul>

      <p><strong>Digital Connections:</strong></p>
      <ul>
        <li>Establish age-appropriate methods for maintaining contact</li>
        <li>Schedule regular video calls with close friends</li>
        <li>Create shared digital spaces for updates and connection</li>
        <li>Use collaborative online platforms for continued interaction</li>
        <li>Maintain connection with previous teachers and mentors</li>
        <li>Balance digital connection with engagement in new community</li>
      </ul>

      <h3>Special Circumstances Support</h3>

      <p>Certain situations require specialized support networks:</p>

      <p><strong>Deployment:</strong></p>
      <ul>
        <li>Connect with other families experiencing deployment</li>
        <li>Participate in deployment support programs and activities</li>
        <li>Build relationships with families who have similar deployment schedules</li>
        <li>Develop support systems for school events and activities</li>
        <li>Create communication channels for sharing educational information</li>
        <li>Establish backup support for educational emergencies</li>
      </ul>

      <p><strong>Special Needs:</strong></p>
      <ul>
        <li>Connect with installation EFMP coordinators and families</li>
        <li>Join special needs parent support groups on and off installation</li>
        <li>Build relationships with special education staff at schools</li>
        <li>Develop networks with medical providers and specialists</li>
        <li>Connect with national organizations specific to your child's needs</li>
        <li>Create emergency support plans with trusted network members</li>
      </ul>

      <p><strong>Remote Assignments:</strong></p>
      <ul>
        <li>Identify other military families in the area</li>
        <li>Connect with virtual military support communities</li>
        <li>Build relationships within the local community</li>
        <li>Maintain connection with previous installation resources</li>
        <li>Develop relationships with school staff who understand military life</li>
        <li>Create support systems with non-military families in the community</li>
      </ul>

      <p>The August 2024 article emphasizes that "The military community and our village are truly amazing. When we work together to support our children's education, we create a foundation that helps them thrive despite the challenges of military life."</p>

      <h2>Community Education and Advocacy</h2>

      <p>Educating schools and communities about military life improves support for military-connected students.</p>

      <h3>Military Lifestyle Education</h3>

      <p>Sharing information about military life helps create understanding and support:</p>

      <p><strong>Sharing Information with Schools:</strong></p>
      <ul>
        <li>Provide resources about military culture and terminology</li>
        <li>Educate staff about the impact of deployment and transitions</li>
        <li>Share information about military children's unique strengths</li>
        <li>Offer classroom presentations about military life when appropriate</li>
        <li>Provide books and resources about military families for classrooms</li>
        <li>Connect schools with military cultural training opportunities</li>
      </ul>

      <p><strong>Community Awareness:</strong></p>
      <ul>
        <li>Participate in community events as a military family</li>
        <li>Share military experiences in appropriate community forums</li>
        <li>Connect with local media about military family stories</li>
        <li>Volunteer with community organizations to increase visibility</li>
        <li>Support businesses and organizations that recognize military families</li>
        <li>Participate in Veterans Day and Memorial Day community events</li>
      </ul>

      <h3>Policy Advocacy</h3>

      <p>Advocating for supportive policies improves educational experiences for all military children:</p>

      <p><strong>Participating in Advisory Committees:</strong></p>
      <ul>
        <li>Join school advisory councils or committees</li>
        <li>Participate in district-level military family advisory groups</li>
        <li>Serve on installation school advisory committees</li>
        <li>Engage with parent-teacher organizations on policy issues</li>
        <li>Attend school board meetings when military issues are discussed</li>
        <li>Volunteer for state-level military education committees when available</li>
      </ul>

      <p><strong>Interstate Compact Awareness:</strong></p>
      <ul>
        <li>Educate school personnel about Compact provisions</li>
        <li>Share Compact information with other military families</li>
        <li>Report implementation challenges to appropriate authorities</li>
        <li>Recognize schools that effectively implement Compact provisions</li>
        <li>Participate in Compact-related training opportunities</li>
        <li>Connect with state Compact commissioners when needed</li>
      </ul>

      <h3>Cultural Celebration</h3>

      <p>Recognizing and celebrating military children creates visibility and support:</p>

      <p><strong>Month of the Military Child:</strong></p>
      <ul>
        <li>Participate in April events recognizing military children</li>
        <li>Suggest school activities honoring military-connected students</li>
        <li>Share information about the significance of the dandelion symbol</li>
        <li>Support installation events celebrating military children</li>
        <li>Encourage community recognition of military children's contributions</li>
        <li>Connect with national organizations promoting Month of the Military Child</li>
      </ul>

      <p><strong>Purple Up! Day:</strong></p>
      <ul>
        <li>Promote participation in Purple Up! Day on April 17</li>
        <li>Educate schools about the significance of wearing purple</li>
        <li>Organize school or community Purple Up! events</li>
        <li>Share information about the meaning behind the purple color</li>
        <li>Recognize schools and communities that participate enthusiastically</li>
        <li>Connect Purple Up! activities to educational goals</li>
      </ul>

      <p>As highlighted in the April 2025 article, "Virginia's Purple Up! Day celebrations have grown each year, with schools across the commonwealth showing their support for military children. These visible demonstrations of support help military children feel recognized and valued for their unique contributions and sacrifices."</p>

      <p>Through intentional community building, resource utilization, and advocacy, military families can create supportive educational environments that recognize the challenges of military life while celebrating the strengths and resilience of military children. These efforts not only benefit your own children but create lasting improvements in how schools and communities support all military-connected students.</p>
    `},{id:"chapter-5",title:"Chapter 5: Alternative and Supplemental Education",content:`
      <h2>Homeschooling Options and Considerations</h2>

      <p>As noted in the January 2025 article, "Homeschooling represents another option for military families seeking educational continuity amid frequent relocations." This educational approach offers flexibility and consistency that can be particularly valuable during military transitions.</p>

      <h3>Understanding Homeschooling</h3>

      <p>Homeschooling encompasses various approaches to education outside traditional school settings:</p>

      <p><strong>Definition and Scope:</strong></p>
      <ul>
        <li>Parent-directed education conducted primarily in the home environment</li>
        <li>Legal educational option in all 50 states, though with varying requirements</li>
        <li>Flexible approach that can be customized to individual student needs</li>
        <li>Can be implemented full-time or as a supplement to other educational options</li>
        <li>May include participation in co-ops, online classes, and community resources</li>
        <li>Adaptable to different learning styles, paces, and interests</li>
      </ul>

      <p><strong>Military-Specific Considerations:</strong></p>
      <ul>
        <li>Provides educational continuity during PCS moves and deployments</li>
        <li>Eliminates curriculum gaps caused by different state standards</li>
        <li>Allows flexible scheduling around military obligations and events</li>
        <li>Facilitates family bonding during limited time together</li>
        <li>Provides consistent educational approach regardless of location</li>
        <li>Accommodates unique deployment and training schedules</li>
      </ul>

      <p><strong>Common Approaches:</strong></p>
      <ul>
        <li>Traditional/School-at-Home: Structured approach similar to conventional schooling</li>
        <li>Classical Education: Focus on grammar, logic, and rhetoric stages</li>
        <li>Charlotte Mason: Emphasis on living books and nature study</li>
        <li>Montessori: Child-led learning with specialized materials</li>
        <li>Unschooling: Interest-driven, natural learning approach</li>
        <li>Eclectic: Combination of multiple approaches based on family needs</li>
        <li>Unit Studies: Integrated learning around central themes</li>
        <li>Online/Virtual School: Structured curriculum delivered digitally</li>
      </ul>

      <h3>Decision Framework for Homeschooling</h3>

      <p>Determining whether homeschooling is appropriate for your family requires careful consideration:</p>

      <p><strong>Curriculum Considerations:</strong></p>
      <ul>
        <li>Complete packaged curricula vs. individual subject resources</li>
        <li>Secular vs. faith-based educational materials</li>
        <li>Traditional textbook vs. literature-based approaches</li>
        <li>Digital vs. physical learning resources</li>
        <li>Grade-level vs. mastery-based progression</li>
        <li>Structured vs. flexible scheduling approaches</li>
        <li>Alignment with potential future educational environments</li>
      </ul>

      <p><strong>Implementation Questions:</strong></p>
      <ul>
        <li>Which parent will serve as primary educator?</li>
        <li>How will homeschooling fit with military career demands?</li>
        <li>What resources are available at current and future duty stations?</li>
        <li>How will socialization needs be addressed?</li>
        <li>What is the financial impact of curriculum and resource choices?</li>
        <li>How will homeschooling adapt during deployments or training?</li>
        <li>What support systems are available locally and virtually?</li>
      </ul>

      <p><strong>Evaluation Framework:</strong></p>
      <ul>
        <li>How will academic progress be measured and documented?</li>
        <li>What assessment methods align with your educational approach?</li>
        <li>How will you determine if homeschooling remains the best option?</li>
        <li>What benchmarks will you use to evaluate success?</li>
        <li>How will you address areas of struggle or special needs?</li>
        <li>What external validation might be needed for future transitions?</li>
      </ul>

      <p><strong>Future Planning:</strong></p>
      <ul>
        <li>Consideration of potential returns to traditional schooling</li>
        <li>College preparation and application planning</li>
        <li>Transcript development and documentation</li>
        <li>Extracurricular and social opportunity planning</li>
        <li>Adaptation strategies for different duty stations</li>
        <li>Long-term educational goals and milestones</li>
      </ul>

      <h3>Legal and Regulatory Requirements</h3>

      <p>Homeschooling regulations vary significantly by location:</p>

      <p><strong>Understanding State Laws:</strong></p>
      <ul>
        <li>Notification requirements to local school districts or state departments</li>
        <li>Required qualifications for parent-teachers</li>
        <li>Mandatory subjects or instructional hours</li>
        <li>Assessment and testing requirements</li>
        <li>Record-keeping and portfolio expectations</li>
        <li>Participation eligibility in public school activities</li>
        <li>Graduation and diploma considerations</li>
      </ul>

      <p><strong>Compliance Documentation:</strong></p>
      <ul>
        <li>Notice of intent to homeschool forms</li>
        <li>Attendance records and instructional logs</li>
        <li>Curriculum plans and course descriptions</li>
        <li>Portfolio of student work and achievements</li>
        <li>Standardized test results or evaluations</li>
        <li>Immunization records or exemption documentation</li>
        <li>Transcripts and grade reports</li>
      </ul>

      <p><strong>Military-Specific Policies:</strong></p>
      <ul>
        <li>Installation policies regarding homeschooling</li>
        <li>Access to base facilities for educational purposes</li>
        <li>Regulations for homeschooling in military housing</li>
        <li>International homeschooling considerations for OCONUS assignments</li>
        <li>Status of Forces Agreement (SOFA) implications for overseas homeschooling</li>
        <li>Transition support between duty stations</li>
      </ul>

      <h3>Resources for Military Homeschoolers</h3>

      <p>Numerous resources exist to support military homeschooling families:</p>

      <p><strong>Location-Specific Resources:</strong></p>
      <ul>
        <li>Central Rappahannock Regional Library offers specialized homeschool programs and materials</li>
        <li>Installation School Liaison Officers provide local homeschool information</li>
        <li>Base libraries often maintain homeschool resource sections</li>
        <li>Military Child Education Coalition resources for homeschooling families</li>
        <li>Installation MWR programs with homeschool participation options</li>
        <li>Local community colleges with dual enrollment opportunities</li>
      </ul>

      <p><strong>Homeschool Organizations:</strong></p>
      <ul>
        <li>Organization of Virginia Homeschoolers (https://vahomeschoolers.org) provides state-specific guidance</li>
        <li>Home Educators Association of Virginia (https://heav.org) offers resources and events</li>
        <li>Military Homeschoolers Association connects families across installations</li>
        <li>Home School Legal Defense Association provides legal support and resources</li>
        <li>National and state homeschool conventions offer curriculum and community</li>
        <li>Installation-specific homeschool support groups</li>
      </ul>

      <p><strong>Curriculum and Materials:</strong></p>
      <ul>
        <li>Complete curriculum packages designed for military mobility</li>
        <li>Online learning platforms with continuous access regardless of location</li>
        <li>Digital textbooks and resources that eliminate shipping concerns</li>
        <li>Subscription-based educational services with global accessibility</li>
        <li>Military discount programs for homeschool materials</li>
        <li>Lending libraries and curriculum exchanges on installations</li>
      </ul>

      <p><strong>Support Networks:</strong></p>
      <ul>
        <li>Virtual co-ops connecting military homeschoolers across locations</li>
        <li>Social media groups specific to military homeschooling families</li>
        <li>Mentoring connections with experienced military homeschoolers</li>
        <li>Online forums for sharing resources and solving challenges</li>
        <li>Virtual classes designed for military children</li>
        <li>Deployment support networks for homeschooling families</li>
      </ul>

      <h3>Implementation Strategies</h3>

      <p>Practical approaches to homeschooling in a military context:</p>

      <p><strong>Physical Setup:</strong></p>
      <ul>
        <li>Creating adaptable learning spaces that work in various housing situations</li>
        <li>Developing portable organization systems for educational materials</li>
        <li>Utilizing digital resources to minimize physical storage needs</li>
        <li>Establishing learning areas that can be quickly set up after moves</li>
        <li>Creating mobile learning kits for education during transitions</li>
        <li>Designing flexible spaces that accommodate multiple children</li>
      </ul>

      <p><strong>Scheduling Approaches:</strong></p>
      <ul>
        <li>Year-round schooling with breaks aligned to military events</li>
        <li>Block scheduling to accommodate deployment cycles</li>
        <li>Flexible daily routines adaptable to military obligations</li>
        <li>Intensive learning periods alternated with lighter schedules</li>
        <li>Independent study components for times of parental absence</li>
        <li>Sabbatical periods during PCS moves and major transitions</li>
      </ul>

      <p><strong>Teaching Strategies:</strong></p>
      <ul>
        <li>Developing independent learning skills for times of parental absence</li>
        <li>Incorporating military experiences into educational content</li>
        <li>Utilizing technology for connection with deployed parent-teachers</li>
        <li>Creating consistent routines that transfer between locations</li>
        <li>Developing modular learning units that work in various settings</li>
        <li>Building in flexibility while maintaining educational progress</li>
      </ul>

      <p><strong>Record-Keeping Systems:</strong></p>
      <ul>
        <li>Digital portfolio systems accessible from any location</li>
        <li>Cloud-based record storage for continuity during moves</li>
        <li>Standardized documentation formats recognized across states</li>
        <li>Comprehensive transcript development for future transitions</li>
        <li>Photography and video documentation of hands-on learning</li>
        <li>Organized physical systems for required paper documentation</li>
      </ul>

      <h3>Special Scenarios in Military Homeschooling</h3>

      <p>Adapting homeschooling to unique military situations:</p>

      <p><strong>Deployment Adaptations:</strong></p>
      <ul>
        <li>Pre-recorded lessons from the deploying parent</li>
        <li>Adjusted schedules and expectations during solo parenting</li>
        <li>Increased use of co-ops and outside classes for support</li>
        <li>Virtual participation of deployed parent in educational activities</li>
        <li>Deployment-related learning projects to maintain connection</li>
        <li>Simplified curriculum approaches during challenging periods</li>
      </ul>

      <p><strong>International Assignment Considerations:</strong></p>
      <ul>
        <li>Understanding host country regulations regarding homeschooling</li>
        <li>Incorporating local cultural experiences into curriculum</li>
        <li>Addressing language learning opportunities and challenges</li>
        <li>Navigating material shipping limitations and resource access</li>
        <li>Connecting with other military homeschoolers in the location</li>
        <li>Utilizing DoDEA resources when available overseas</li>
      </ul>

      <p><strong>Transitions Between Homeschool and Traditional School:</strong></p>
      <ul>
        <li>Maintaining records that facilitate school enrollment if needed</li>
        <li>Aligning curriculum with potential future school requirements</li>
        <li>Preparing students for different educational environments</li>
        <li>Creating transition plans for entering or exiting homeschooling</li>
        <li>Developing portfolios that demonstrate academic achievement</li>
        <li>Understanding grade placement and credit transfer processes</li>
      </ul>

      <h2>Summer Learning Opportunities</h2>

      <p>Summer provides unique opportunities for educational growth while allowing necessary relaxation and family time.</p>

      <h3>Understanding Summer Learning Loss</h3>

      <p>Research provides important context for summer educational planning:</p>

      <p><strong>Research Findings:</strong></p>
      <ul>
        <li>Students typically lose 2-3 months of reading and math skills during summer break</li>
        <li>Learning loss is cumulative over multiple summers</li>
        <li>Achievement gaps often widen during summer months</li>
        <li>Reading skills typically decline more for lower-income students</li>
        <li>Math skills show consistent decline across demographic groups</li>
        <li>Effects are most pronounced in upper elementary and middle school years</li>
      </ul>

      <p><strong>Mitigating Factors:</strong></p>
      <ul>
        <li>Regular reading (at least 4-5 books over summer)</li>
        <li>Access to books and reading materials</li>
        <li>Structured educational activities for part of summer</li>
        <li>Opportunities to practice math skills</li>
        <li>Enrichment experiences that build background knowledge</li>
        <li>Consistent routines that include learning activities</li>
      </ul>

      <p><strong>Benefits of Balance:</strong></p>
      <ul>
        <li>Unstructured time promotes creativity and self-direction</li>
        <li>Relaxation prevents burnout and supports mental health</li>
        <li>Family experiences build important social-emotional skills</li>
        <li>Interest-driven learning increases motivation and engagement</li>
        <li>Varied activities develop different types of intelligence</li>
        <li>Balance prepares students for return to structured learning</li>
      </ul>

      <h3>Structured Summer Programs</h3>

      <p>Formal programs provide organized learning opportunities:</p>

      <p><strong>Academic Programs:</strong></p>
      <ul>
        <li>School district summer school options</li>
        <li>Credit recovery or advancement courses</li>
        <li>Academic camps at colleges and universities</li>
        <li>Library summer reading programs</li>
        <li>Online courses and learning platforms</li>
        <li>Tutoring services with summer packages</li>
      </ul>

      <p><strong>Enrichment Camps:</strong></p>
      <ul>
        <li>STEM-focused camps and workshops</li>
        <li>Arts, music, and theater programs</li>
        <li>Sports camps that include educational components</li>
        <li>Nature and outdoor education experiences</li>
        <li>Language immersion programs</li>
        <li>Leadership and character development camps</li>
      </ul>

      <p><strong>Military-Specific Programs:</strong></p>
      <ul>
        <li>Installation Youth Centers summer activities</li>
        <li>DoDEA summer school options</li>
        <li>Military Kids Connect online summer programs</li>
        <li>Operation Purple Camps for military children</li>
        <li>Military association scholarship camps</li>
        <li>Installation MWR summer events and classes</li>
      </ul>

      <h3>Reading and Literacy Initiatives</h3>

      <p>As noted in the June 2024 article: "'Not all readers are leaders, but all leaders are readers.' ― Harry S. Truman." Reading forms the foundation of summer learning:</p>

      <p><strong>Library Programs:</strong></p>
      <ul>
        <li>Central Rappahannock Regional Library summer reading challenges</li>
        <li>Story times and book clubs for various ages</li>
        <li>Author visits and special literacy events</li>
        <li>Reading incentive programs with prizes</li>
        <li>Access to e-books and audiobooks</li>
        <li>Literacy-based activities and workshops</li>
      </ul>

      <p><strong>Home Reading Practices:</strong></p>
      <ul>
        <li>Family read-aloud time with quality literature</li>
        <li>Independent reading with appropriate level books</li>
        <li>Book discussions that develop comprehension</li>
        <li>Reading response activities (journals, art, drama)</li>
        <li>Genre exploration to broaden reading interests</li>
        <li>Reading routines that fit family schedules</li>
      </ul>

      <p><strong>Reading Enhancement:</strong></p>
      <ul>
        <li>Book-based field trips to related locations</li>
        <li>Author studies exploring multiple works</li>
        <li>Reading across content areas to build knowledge</li>
        <li>Digital literacy tools and interactive e-books</li>
        <li>Reading incentive charts and goal-setting</li>
        <li>Book clubs with peers or family members</li>
      </ul>

      <h3>Family Learning Activities</h3>

      <p>Everyday experiences can become powerful learning opportunities:</p>

      <p><strong>Mathematical Applications:</strong></p>
      <ul>
        <li>Cooking and baking with measurement practice</li>
        <li>Shopping with budgeting and percentage calculations</li>
        <li>Games that develop strategic thinking and probability</li>
        <li>Building projects using measurement and geometry</li>
        <li>Planning trips with distance, time, and cost calculations</li>
        <li>Gardening with area, spacing, and growth tracking</li>
      </ul>

      <p><strong>Scientific Exploration:</strong></p>
      <ul>
        <li>Nature observation and identification</li>
        <li>Simple home experiments and demonstrations</li>
        <li>Citizen science projects and data collection</li>
        <li>Weather tracking and prediction</li>
        <li>Technology exploration and simple programming</li>
        <li>Visits to science centers and natural areas</li>
      </ul>

      <p><strong>Social Studies Connection:</strong></p>
      <ul>
        <li>Visits to historical sites and museums</li>
        <li>Cultural events and festivals</li>
        <li>Map reading and navigation practice</li>
        <li>Current events discussions at appropriate levels</li>
        <li>Local government and community service learning</li>
        <li>Family history and genealogy exploration</li>
      </ul>

      <p><strong>Arts and Creativity:</strong></p>
      <ul>
        <li>Visual arts projects with various media</li>
        <li>Music appreciation and instrument exploration</li>
        <li>Drama and storytelling activities</li>
        <li>Dance and movement expression</li>
        <li>Creative writing and poetry composition</li>
        <li>Digital media creation and editing</li>
      </ul>

      <h3>Travel and Military Moves as Learning</h3>

      <p>Military lifestyle provides unique educational opportunities:</p>

      <p><strong>Educational Travel:</strong></p>
      <ul>
        <li>Pre-trip research about destinations</li>
        <li>Travel journals and documentation</li>
        <li>Historical and cultural site visits</li>
        <li>Geographic comparisons between locations</li>
        <li>Language exposure and practice</li>
        <li>Post-trip projects to solidify learning</li>
      </ul>

      <p><strong>Learning During Moves:</strong></p>
      <ul>
        <li>Research about new duty station location</li>
        <li>Mapping and route planning</li>
        <li>Comparison of regional differences</li>
        <li>Documentation of the moving process</li>
        <li>Cultural and historical exploration of new area</li>
        <li>Scientific observation of different environments</li>
      </ul>

      <p><strong>Virtual Exploration:</strong></p>
      <ul>
        <li>Virtual museum tours and exhibits</li>
        <li>Digital field trips to inaccessible locations</li>
        <li>Interactive mapping and geography tools</li>
        <li>Cultural exchange through appropriate online platforms</li>
        <li>Video documentaries about places and concepts</li>
        <li>Virtual reality educational experiences</li>
      </ul>

      <h3>Balancing Structure and Relaxation</h3>

      <p>Effective summer learning requires thoughtful balance:</p>

      <p><strong>Purposeful Downtime:</strong></p>
      <ul>
        <li>Unscheduled time for creative play and exploration</li>
        <li>Adequate rest and relaxation periods</li>
        <li>Time for processing and reflecting on experiences</li>
        <li>Opportunity to develop self-directed interests</li>
        <li>Balance between structured and unstructured activities</li>
        <li>Recognition of the learning value in play</li>
      </ul>

      <p><strong>Balanced Scheduling:</strong></p>
      <ul>
        <li>Consistent routines with flexibility for special activities</li>
        <li>Morning learning time when minds are fresh</li>
        <li>Alternating high-energy and quieter activities</li>
        <li>Weekly rhythm with predictable patterns</li>
        <li>Family input in planning and scheduling</li>
        <li>Adjustment for weather, energy levels, and opportunities</li>
      </ul>

      <p><strong>Recognition of Various Learning Activities:</strong></p>
      <ul>
        <li>Valuing informal learning experiences</li>
        <li>Acknowledging social-emotional development</li>
        <li>Appreciating physical activity as essential for brain development</li>
        <li>Understanding the educational value of chores and responsibilities</li>
        <li>Recognizing learning in seemingly recreational activities</li>
        <li>Balancing academic, physical, creative, and social activities</li>
      </ul>

      <h3>Planning for Summer Success</h3>

      <p>Intentional planning maximizes summer learning benefits:</p>

      <p><strong>Assessment and Goal Setting:</strong></p>
      <ul>
        <li>Review end-of-year assessments and teacher feedback</li>
        <li>Identify specific skills needing reinforcement</li>
        <li>Set realistic learning goals for the summer</li>
        <li>Consider each child's interests and learning style</li>
        <li>Balance academic needs with enrichment opportunities</li>
        <li>Include children in the goal-setting process</li>
      </ul>

      <p><strong>Resource Identification:</strong></p>
      <ul>
        <li>Research available programs and activities</li>
        <li>Gather appropriate books and learning materials</li>
        <li>Identify free and low-cost community resources</li>
        <li>Explore online learning platforms and tools</li>
        <li>Connect with other families for shared activities</li>
        <li>Investigate military-specific summer opportunities</li>
      </ul>

      <p><strong>Schedule Development:</strong></p>
      <ul>
        <li>Create a visual summer calendar</li>
        <li>Block out family trips and special events</li>
        <li>Establish consistent daily and weekly routines</li>
        <li>Plan for transitions between activities</li>
        <li>Include regular library visits and reading time</li>
        <li>Balance structured learning with free exploration</li>
      </ul>

      <p><strong>Progress Monitoring:</strong></p>
      <ul>
        <li>Track reading through logs or journals</li>
        <li>Document learning experiences with photos or portfolios</li>
        <li>Celebrate progress toward summer goals</li>
        <li>Adjust plans based on interests and needs</li>
        <li>Maintain communication with summer program instructors</li>
        <li>Prepare to share summer learning with next year's teachers</li>
      </ul>

      <h2>Extracurricular and Enrichment Activities</h2>

      <p>Beyond the academic curriculum, extracurricular activities provide essential development opportunities and support during military transitions.</p>

      <h3>Value of Extracurricular Involvement</h3>

      <p>Research demonstrates multiple benefits from participation in structured activities:</p>

      <p><strong>Academic Connection:</strong></p>
      <ul>
        <li>Higher grades and test scores among involved students</li>
        <li>Improved school attendance and engagement</li>
        <li>Development of time management and organizational skills</li>
        <li>Application of classroom learning in real-world contexts</li>
        <li>Exposure to potential career interests and pathways</li>
        <li>Enhanced college and scholarship applications</li>
      </ul>

      <p><strong>Social Development:</strong></p>
      <ul>
        <li>Formation of friendships based on shared interests</li>
        <li>Development of teamwork and collaboration skills</li>
        <li>Exposure to diverse perspectives and backgrounds</li>
        <li>Creation of peer support networks</li>
        <li>Relationships with adult mentors and role models</li>
        <li>Sense of belonging and community connection</li>
      </ul>

      <p><strong>Personal Growth:</strong></p>
      <ul>
        <li>Development of specific talents and abilities</li>
        <li>Increased self-confidence and self-efficacy</li>
        <li>Opportunity to explore and develop interests</li>
        <li>Experience with setting and achieving goals</li>
        <li>Healthy risk-taking in supportive environments</li>
        <li>Development of leadership skills and opportunities</li>
      </ul>

      <p><strong>Military Transition Support:</strong></p>
      <ul>
        <li>Immediate social connections at new schools</li>
        <li>Consistent activity across different locations</li>
        <li>Familiar routines during periods of change</li>
        <li>Supportive community during parental deployment</li>
        <li>Development of resilience through challenges</li>
        <li>Transferable skills and experiences across moves</li>
      </ul>

      <p>As noted in the July 2024 article, "Extracurricular activities provide military children with a sense of continuity and belonging that is particularly valuable during transitions. These structured opportunities help children maintain a sense of identity and purpose despite changing schools and communities."</p>

      <h3>Selecting Appropriate Activities</h3>

      <p>Thoughtful selection of activities increases benefits and sustainability:</p>

      <p><strong>Interest and Aptitude Alignment:</strong></p>
      <ul>
        <li>Consider child's demonstrated interests and natural abilities</li>
        <li>Explore activities that build on existing strengths</li>
        <li>Allow for trial periods before long-term commitments</li>
        <li>Balance parent guidance with child choice</li>
        <li>Consider personality fit with activity structure</li>
        <li>Recognize that interests evolve and change</li>
      </ul>

      <p><strong>Practical Considerations:</strong></p>
      <ul>
        <li>Realistic assessment of family schedule and commitments</li>
        <li>Transportation logistics and requirements</li>
        <li>Financial costs including equipment, fees, and travel</li>
        <li>Time commitment for both child and parents</li>
        <li>Impact on academic responsibilities and family time</li>
        <li>Sustainability through military lifestyle changes</li>
      </ul>

      <p><strong>Quality Assessment:</strong></p>
      <ul>
        <li>Program philosophy and alignment with family values</li>
        <li>Qualifications and approach of adult leaders</li>
        <li>Safety protocols and supervision standards</li>
        <li>Balance of skill development and enjoyment</li>
        <li>Appropriate level of structure and expectations</li>
        <li>Inclusivity and supportive social environment</li>
      </ul>

      <p><strong>Military-Specific Factors:</strong></p>
      <ul>
        <li>Availability of similar programs at potential future locations</li>
        <li>Flexibility regarding deployment and training schedules</li>
        <li>Understanding of military lifestyle challenges</li>
        <li>Transferability of skills and experiences</li>
        <li>Support during transitions and parent absences</li>
        <li>Connection to military community when appropriate</li>
      </ul>

      <h3>Types of Enrichment Activities</h3>

      <p>Various activities offer different benefits and opportunities for development:</p>

      <p><strong>Athletic Participation:</strong></p>
      <ul>
        <li>Team sports (soccer, basketball, baseball, volleyball, etc.)</li>
        <li>Individual sports (swimming, tennis, golf, martial arts, etc.)</li>
        <li>Recreational leagues with varying commitment levels</li>
        <li>Installation youth sports programs</li>
        <li>School-based athletic teams and intramurals</li>
        <li>Community-based sports organizations</li>
      </ul>

      <p><strong>Arts Engagement:</strong></p>
      <ul>
        <li>Visual arts (drawing, painting, sculpture, photography)</li>
        <li>Music (instrumental, vocal, composition, production)</li>
        <li>Theater (acting, technical production, playwriting)</li>
        <li>Dance (ballet, modern, jazz, cultural forms)</li>
        <li>Creative writing and literary arts</li>
        <li>Digital and multimedia arts</li>
      </ul>

      <p><strong>Academic Enrichment:</strong></p>
      <ul>
        <li>Debate and forensics teams</li>
        <li>Academic competitions (spelling bees, geography bees, math olympiads)</li>
        <li>Subject-specific clubs (science, history, language, etc.)</li>
        <li>Advanced coursework and academic programs</li>
        <li>Academic tutoring and mentoring roles</li>
        <li>Research and independent study projects</li>
      </ul>

      <p><strong>Leadership Development:</strong></p>
      <ul>
        <li>Student government and school leadership</li>
        <li>Scouting organizations (Boy Scouts, Girl Scouts)</li>
        <li>Junior ROTC programs</li>
        <li>Community service and volunteer organizations</li>
        <li>Youth advisory councils and boards</li>
        <li>Peer mentoring and tutoring programs</li>
      </ul>

      <p><strong>Special Interest Groups:</strong></p>
      <ul>
        <li>Technology clubs (robotics, coding, gaming)</li>
        <li>Environmental programs and outdoor education</li>
        <li>Cultural groups and language clubs</li>
        <li>Hobby organizations (chess, model building, etc.)</li>
        <li>Entrepreneurship and business programs</li>
        <li>Faith-based youth groups and activities</li>
      </ul>

      <h3>Maintaining Continuity During Transitions</h3>

      <p>Strategic approaches help preserve extracurricular involvement through military moves:</p>

      <p><strong>Documentation and Portfolio Development:</strong></p>
      <ul>
        <li>Detailed records of participation and achievements</li>
        <li>Video documentation of performances or competitions</li>
        <li>Skill level certifications and assessments</li>
        <li>Letters of recommendation from coaches and instructors</li>
        <li>Portfolios of work or performances</li>
        <li>Transcripts of training and educational components</li>
      </ul>

      <p><strong>Transition Planning:</strong></p>
      <ul>
        <li>Research of similar programs at new location</li>
        <li>Understanding of tryout schedules and requirements</li>
        <li>Communication with program leaders before arrival</li>
        <li>Identification of alternative programs if exact match unavailable</li>
        <li>Timing considerations for moves relative to seasons or performances</li>
        <li>Preparation for different approaches or terminology</li>
      </ul>

      <p><strong>Skill Maintenance During Moves:</strong></p>
      <ul>
        <li>Portable practice equipment and materials</li>
        <li>Online lessons or coaching during transition periods</li>
        <li>Temporary or drop-in programs during PCS</li>
        <li>Self-directed practice routines</li>
        <li>Digital resources for continued learning</li>
        <li>Connection with mentors who can provide remote guidance</li>
      </ul>

      <p><strong>Program Education:</strong></p>
      <ul>
        <li>Helping new programs understand previous experience</li>
        <li>Translating between different systems or approaches</li>
        <li>Providing context for military-related gaps in participation</li>
        <li>Educating about equivalent achievements or certifications</li>
        <li>Advocating for appropriate placement or opportunities</li>
        <li>Building relationships with new instructors and leaders</li>
      </ul>

      <h3>Balancing Commitments and Military-Specific Opportunities</h3>

      <p>Thoughtful management of activities supports sustainable involvement:</p>

      <p><strong>Realistic Assessment:</strong></p>
      <ul>
        <li>Honest evaluation of time requirements for each activity</li>
        <li>Consideration of academic workload and priorities</li>
        <li>Assessment of family schedule and parent availability</li>
        <li>Recognition of military-specific time constraints</li>
        <li>Evaluation of transportation and logistical feasibility</li>
        <li>Consideration of financial commitments required</li>
      </ul>

      <p><strong>Prioritization Strategies:</strong></p>
      <ul>
        <li>Distinguishing between core and supplementary activities</li>
        <li>Balancing depth of involvement versus breadth of experiences</li>
        <li>Seasonal rotation of different types of activities</li>
        <li>Focus on activities with greatest benefit or enjoyment</li>
        <li>Consideration of long-term goals and development</li>
        <li>Planned breaks between intensive commitment periods</li>
      </ul>

      <p><strong>Stress and Wellbeing Monitoring:</strong></p>
      <ul>
        <li>Recognition of signs of overcommitment or burnout</li>
        <li>Regular check-ins about enjoyment and stress levels</li>
        <li>Ensuring adequate downtime and family connection</li>
        <li>Monitoring sleep, nutrition, and physical health</li>
        <li>Adjusting commitments during high-stress military periods</li>
        <li>Permission to modify or reduce activities when needed</li>
      </ul>

      <p><strong>Communication and Negotiation:</strong></p>
      <ul>
        <li>Clear expectations with coaches and activity leaders</li>
        <li>Transparent discussion of military-related constraints</li>
        <li>Ongoing dialogue about commitment levels and challenges</li>
        <li>Negotiation of alternative arrangements when needed</li>
        <li>Advance notice of military-related absences when possible</li>
        <li>Development of contingency plans for deployment periods</li>
      </ul>

      <p><strong>Installation Programs:</strong></p>
      <ul>
        <li>Youth Sports programs on military installations</li>
        <li>School Age Care activities and enrichment</li>
        <li>Teen centers and youth development programs</li>
        <li>Installation recreation programs and classes</li>
        <li>MWR-sponsored competitions and events</li>
        <li>Installation arts and cultural programs</li>
      </ul>

      <p><strong>Military Organization Initiatives:</strong></p>
      <ul>
        <li>Military association youth programs and scholarships</li>
        <li>Operation Military Kids activities and resources</li>
        <li>Military service branch-specific youth initiatives</li>
        <li>Military child and youth symposiums and events</li>
        <li>Military family readiness group activities</li>
        <li>Military community service opportunities</li>
      </ul>

      <p><strong>Military-Affiliated Programs:</strong></p>
      <ul>
        <li>Junior ROTC programs in high schools</li>
        <li>Military youth sports championships and tournaments</li>
        <li>Military child arts and writing contests</li>
        <li>Military-connected scouting units and activities</li>
        <li>Military installation access to specialized facilities</li>
        <li>Military child leadership development programs</li>
      </ul>

      <p><strong>Virtual Engagement Options:</strong></p>
      <ul>
        <li>Online clubs and interest groups</li>
        <li>Virtual competitions and performances</li>
        <li>Digital portfolio development and sharing</li>
        <li>Remote coaching and instruction</li>
        <li>Online collaborative projects and teams</li>
        <li>Digital badges and achievement recognition</li>
      </ul>

      <h3>Recognition and Achievement</h3>

      <p>Understanding the role of recognition in educational and extracurricular contexts:</p>

      <p><strong>Understanding the Role of Recognition:</strong></p>
      <ul>
        <li>Motivational function of acknowledgment and rewards</li>
        <li>Validation of effort and achievement</li>
        <li>Marker of progress and skill development</li>
        <li>Community celebration of accomplishment</li>
        <li>Documentation of experience and achievement</li>
        <li>Building of confidence and self-efficacy</li>
      </ul>

      <p>As Dale Carnegie noted, "People work for money, but go the extra mile for recognition, praise, and rewards." Recognition serves as a powerful motivator for continued effort and engagement.</p>

      <p><strong>Types of Recognition in Education:</strong></p>
      <ul>
        <li>School-based awards and honor rolls</li>
        <li>Competition placements and rankings</li>
        <li>Skill level certifications and advancements</li>
        <li>Performance opportunities and showcases</li>
        <li>Leadership positions and responsibilities</li>
        <li>Scholarships and educational opportunities</li>
      </ul>

      <p><strong>Balanced Perspectives on Recognition:</strong></p>
      <ul>
        <li>Universal recognition for participation and effort</li>
        <li>Selective recognition for exceptional achievement</li>
        <li>Process-oriented versus outcome-oriented acknowledgment</li>
        <li>Intrinsic versus extrinsic motivation development</li>
        <li>Age-appropriate recognition approaches</li>
        <li>Recognition of improvement and personal growth</li>
      </ul>

      <p>The February 2025 article emphasizes that "If effort is invested and goals are achieved, then everyone who reaches that goal should be acknowledged with an award, reward, or recognition." This perspective values both the process and achievement of predetermined standards.</p>

      <p><strong>Life Lessons from Recognition Systems:</strong></p>
      <ul>
        <li>Understanding that different skills are valued in different contexts</li>
        <li>Learning to celebrate others' achievements</li>
        <li>Developing resilience when recognition isn't received</li>
        <li>Recognizing the role of community support in achievement</li>
        <li>Understanding subjective versus objective evaluation</li>
        <li>Balancing competition and collaboration</li>
      </ul>

      <p><strong>Military-Connected Achievement Considerations:</strong></p>
      <ul>
        <li>Maintaining recognition continuity across transitions</li>
        <li>Translating achievements between different systems</li>
        <li>Awareness of military-specific recognition opportunities</li>
        <li>Documentation of achievements for future opportunities</li>
        <li>Understanding how military lifestyle impacts achievement paths</li>
        <li>Leveraging military-connected status for relevant opportunities</li>
      </ul>

      <p><strong>Healthy Achievement Motivation:</strong></p>
      <ul>
        <li>Developing intrinsic motivation beyond external rewards</li>
        <li>Setting personal goals independent of recognition systems</li>
        <li>Building resilience in the face of disappointment</li>
        <li>Maintaining perspective on the role of achievements</li>
        <li>Balancing achievement orientation with wellbeing</li>
        <li>Recognizing effort and process alongside outcomes</li>
      </ul>

      <p>Through thoughtful participation in alternative and supplemental educational opportunities, military families can enrich their children's learning experiences, develop important skills and interests, and create continuity despite the challenges of military life. These experiences complement traditional education and often provide the most memorable and formative aspects of children's educational journeys.</p>
    `},{id:"chapter-6",title:"Chapter 6: Social-Emotional Wellbeing",content:`
      <h2>Supporting Mental Health</h2>

      <p>The social-emotional wellbeing of military children forms the foundation for academic success and healthy development.</p>

      <h3>Understanding Military Child Mental Health</h3>

      <p>Military children face unique challenges that can impact their mental health and emotional wellbeing:</p>

      <p><strong>Common Challenges:</strong></p>
      <ul>
        <li>Frequent transitions and school changes</li>
        <li>Parental separation during deployments and training</li>
        <li>Worry about deployed parent's safety</li>
        <li>Disruption of peer relationships and support systems</li>
        <li>Adjustment to new communities and cultural environments</li>
        <li>Assumption of additional responsibilities during deployments</li>
        <li>Navigating reintegration after parental absence</li>
        <li>Managing uncertainty about future moves and changes</li>
      </ul>

      <p><strong>Protective Factors:</strong></p>
      <ul>
        <li>Strong family bonds and communication</li>
        <li>Consistent routines and expectations</li>
        <li>Supportive school environments</li>
        <li>Connection to military community</li>
        <li>Developed coping skills and emotional regulation</li>
        <li>Sense of pride in military service</li>
        <li>Opportunities to contribute meaningfully to family</li>
        <li>Access to appropriate support services</li>
      </ul>

      <p><strong>Warning Signs:</strong></p>
      <ul>
        <li>Significant changes in behavior or personality</li>
        <li>Persistent sadness or withdrawal</li>
        <li>Declining academic performance</li>
        <li>Sleep disturbances or changes in eating patterns</li>
        <li>Increased irritability or aggression</li>
        <li>Physical complaints without medical cause</li>
        <li>Loss of interest in previously enjoyed activities</li>
        <li>Expressions of hopelessness or worthlessness</li>
        <li>Risk-taking behaviors or substance use</li>
      </ul>

      <h3>The Importance of Balance and Breaks</h3>

      <p>As noted in the November 2024 article: "Sometimes, we all need a break—and that includes our students, no matter their age." Creating space for mental health is essential for long-term wellbeing:</p>

      <p><strong>Academic Balance:</strong></p>
      <ul>
        <li>Realistic expectations based on current circumstances</li>
        <li>Scheduled breaks during intensive study periods</li>
        <li>Recognition of effort alongside achievement</li>
        <li>Flexibility during high-stress military periods</li>
        <li>Prioritization of essential learning during transitions</li>
        <li>Balance between structured learning and creative exploration</li>
      </ul>

      <p><strong>Emotional Processing Time:</strong></p>
      <ul>
        <li>Dedicated time to process feelings about changes</li>
        <li>Permission to experience and express difficult emotions</li>
        <li>Opportunities for reflection and meaning-making</li>
        <li>Validation of emotional responses to military lifestyle</li>
        <li>Space to adjust to new environments and situations</li>
        <li>Recognition of grief associated with losses and transitions</li>
      </ul>

      <p><strong>Recreational Opportunities:</strong></p>
      <ul>
        <li>Regular physical activity and outdoor time</li>
        <li>Creative expression through arts and music</li>
        <li>Unstructured play and exploration</li>
        <li>Social connection with peers and family</li>
        <li>Pursuit of personal interests and hobbies</li>
        <li>Celebration and enjoyment of special occasions</li>
      </ul>

      <h3>Communication Strategies for Emotional Support</h3>

      <p>Effective communication creates a foundation for emotional wellbeing:</p>

      <p><strong>Active Listening Practices:</strong></p>
      <ul>
        <li>Giving full attention without distractions</li>
        <li>Reflecting feelings and content to show understanding</li>
        <li>Asking open-ended questions that invite sharing</li>
        <li>Avoiding immediate problem-solving or dismissal</li>
        <li>Validating emotions without judgment</li>
        <li>Creating regular opportunities for conversation</li>
      </ul>

      <p><strong>Age-Appropriate Discussions:</strong></p>
      <ul>
        <li>Using concrete language with younger children</li>
        <li>Adjusting detail level based on developmental stage</li>
        <li>Employing books and stories to facilitate understanding</li>
        <li>Respecting adolescents' need for increased autonomy</li>
        <li>Balancing honesty with appropriate reassurance</li>
        <li>Using analogies and examples relevant to child's experience</li>
      </ul>

      <p><strong>Military-Specific Communication:</strong></p>
      <ul>
        <li>Providing appropriate information about deployments</li>
        <li>Discussing upcoming moves with adequate preparation time</li>
        <li>Creating space for questions about military lifestyle</li>
        <li>Acknowledging both challenges and benefits of military life</li>
        <li>Developing family narratives that incorporate military experiences</li>
        <li>Sharing age-appropriate information about military events</li>
      </ul>

      <p><strong>Non-Verbal Connection:</strong></p>
      <ul>
        <li>Regular physical affection appropriate to child's preferences</li>
        <li>Quality time without agenda or distraction</li>
        <li>Shared activities that build connection</li>
        <li>Creating rituals that maintain connection during separation</li>
        <li>Noticing and responding to non-verbal cues</li>
        <li>Modeling healthy emotional expression</li>
      </ul>

      <h3>Building Healthy Routines and Structure</h3>

      <p>Consistent routines provide security and support emotional regulation:</p>

      <p><strong>Daily Routines:</strong></p>
      <ul>
        <li>Consistent wake and sleep schedules</li>
        <li>Regular mealtimes with family connection</li>
        <li>Predictable homework and study periods</li>
        <li>Balanced screen time with clear boundaries</li>
        <li>Regular family check-ins and communication</li>
        <li>Transition routines between activities</li>
      </ul>

      <p><strong>Physical Wellbeing Foundations:</strong></p>
      <ul>
        <li>Adequate sleep appropriate to age</li>
        <li>Nutritious meals and snacks</li>
        <li>Regular physical activity and movement</li>
        <li>Access to appropriate healthcare</li>
        <li>Outdoor time and nature connection</li>
        <li>Limited exposure to excessive stress</li>
      </ul>

      <p><strong>Stress Management Practices:</strong></p>
      <ul>
        <li>Age-appropriate relaxation techniques</li>
        <li>Mindfulness and present-moment awareness</li>
        <li>Deep breathing and physical regulation</li>
        <li>Creative expression of emotions</li>
        <li>Time in nature and outdoor activities</li>
        <li>Regular physical exercise and movement</li>
      </ul>

      <p><strong>Balance and Boundaries:</strong></p>
      <ul>
        <li>Clear expectations and consistent limits</li>
        <li>Balance between structure and flexibility</li>
        <li>Appropriate responsibilities based on age and ability</li>
        <li>Protection from excessive adult concerns</li>
        <li>Healthy digital boundaries and media consumption</li>
        <li>Space for both productivity and relaxation</li>
      </ul>

      <h3>Accessing Professional Support</h3>

      <p>Knowing when and how to access additional support is essential:</p>

      <p><strong>When to Seek Help:</strong></p>
      <ul>
        <li>Persistent emotional or behavioral changes</li>
        <li>Significant impact on daily functioning</li>
        <li>Expressions of hopelessness or self-harm</li>
        <li>Withdrawal from previously enjoyed activities</li>
        <li>Ongoing academic struggles despite support</li>
        <li>Family concern about child's wellbeing</li>
        <li>Child's request for additional help</li>
        <li>Difficulty adjusting to significant transitions</li>
      </ul>

      <p><strong>Military-Specific Resources:</strong></p>
      <ul>
        <li>Military Family Life Counselors (MFLCs)</li>
        <li>Military OneSource non-medical counseling</li>
        <li>TRICARE mental health services</li>
        <li>Military treatment facility behavioral health</li>
        <li>Installation family support centers</li>
        <li>Military crisis line and support services</li>
      </ul>

      <p><strong>School-Based Support:</strong></p>
      <ul>
        <li>School counselors and psychologists</li>
        <li>Military school liaison officers</li>
        <li>Student support teams and services</li>
        <li>Military-connected student groups</li>
        <li>School-based mental health programs</li>
        <li>Special education services when appropriate</li>
      </ul>

      <p><strong>Community Resources:</strong></p>
      <ul>
        <li>Community mental health centers</li>
        <li>Private therapists with military experience</li>
        <li>Support groups for military children</li>
        <li>Military-connected non-profit organizations</li>
        <li>Faith-based counseling and support</li>
        <li>Telehealth and online support options</li>
      </ul>

      <h3>Special Circumstances Support</h3>

      <p>Certain military situations require additional emotional support:</p>

      <p><strong>Deployment-Specific Support:</strong></p>
      <ul>
        <li>Pre-deployment preparation and discussion</li>
        <li>Communication plans during separation</li>
        <li>Deployment countdown and tracking tools</li>
        <li>Deployment support groups and activities</li>
        <li>Maintaining connection with deployed parent</li>
        <li>Reintegration adjustment support</li>
      </ul>

      <p><strong>Coping with Frequent Moves:</strong></p>
      <ul>
        <li>Emotional preparation for transitions</li>
        <li>Meaningful goodbye rituals and closure</li>
        <li>Documentation of memories and experiences</li>
        <li>Maintenance of important relationships</li>
        <li>Strategies for building new connections</li>
        <li>Honoring grief while embracing new opportunities</li>
      </ul>

      <p><strong>Parental Injury or Loss:</strong></p>
      <ul>
        <li>Age-appropriate information and communication</li>
        <li>Access to specialized grief support services</li>
        <li>Connection with others in similar situations</li>
        <li>Maintenance of routines and stability</li>
        <li>Preservation of memories and legacy</li>
        <li>Long-term support through grief process</li>
      </ul>

      <p>As the November 2024 article concludes: "Wishing you all a joyful holiday season filled with family and friends!" This reminder of the importance of connection and celebration highlights the need for balance between addressing challenges and embracing joy in military family life.</p>

      <h2>Building Resilience</h2>

      <p>Resilience—the ability to adapt and thrive despite challenges—is particularly important for military children.</p>

      <h3>Understanding Resilience in Military Children</h3>

      <p>Resilience develops through a combination of innate qualities and environmental supports:</p>

      <p><strong>Resilience Definition:</strong></p>
      <ul>
        <li>Ability to adapt positively to adversity</li>
        <li>Process of bouncing back from difficult experiences</li>
        <li>Capacity to maintain wellbeing despite challenges</li>
        <li>Development of strength through overcoming obstacles</li>
        <li>Balance between vulnerability and growth</li>
        <li>Dynamic quality that can be developed and strengthened</li>
      </ul>

      <p><strong>Unique Military Child Strengths:</strong></p>
      <ul>
        <li>Adaptability to new situations and environments</li>
        <li>Experience with navigating transitions</li>
        <li>Cross-cultural knowledge and exposure</li>
        <li>Independence and self-reliance skills</li>
        <li>Appreciation for diversity and different perspectives</li>
        <li>Sense of belonging to something larger than self</li>
        <li>Pride in family service and contribution</li>
      </ul>

      <p><strong>Resilience Building Blocks:</strong></p>
      <ul>
        <li>Secure attachment relationships</li>
        <li>Sense of personal competence and efficacy</li>
        <li>Emotional awareness and regulation skills</li>
        <li>Problem-solving abilities and resourcefulness</li>
        <li>Meaning-making and purpose development</li>
        <li>Connection to supportive communities</li>
        <li>Access to appropriate resources when needed</li>
      </ul>

      <h3>Developing Coping Skills and Strategies</h3>

      <p>Specific skills help children navigate challenges effectively:</p>

      <p><strong>Emotional Regulation Techniques:</strong></p>
      <ul>
        <li>Identifying and naming emotions</li>
        <li>Understanding body signals of different feelings</li>
        <li>Deep breathing and relaxation practices</li>
        <li>Appropriate expression of difficult emotions</li>
        <li>Self-calming strategies for intense feelings</li>
        <li>Recognition of emotional triggers and patterns</li>
      </ul>

      <p><strong>Problem-Solving Approaches:</strong></p>
      <ul>
        <li>Breaking challenges into manageable steps</li>
        <li>Generating multiple possible solutions</li>
        <li>Evaluating options and potential outcomes</li>
        <li>Implementing plans and adjusting as needed</li>
        <li>Learning from both successes and setbacks</li>
        <li>Knowing when and how to seek help</li>
      </ul>

      <p><strong>Perspective-Building Skills:</strong></p>
      <ul>
        <li>Reframing challenges as opportunities</li>
        <li>Finding positive aspects in difficult situations</li>
        <li>Maintaining hope and optimism</li>
        <li>Developing gratitude practices</li>
        <li>Understanding temporary nature of difficulties</li>
        <li>Seeing challenges within broader context</li>
      </ul>

      <p><strong>Self-Care Practices:</strong></p>
      <ul>
        <li>Recognizing personal needs and boundaries</li>
        <li>Engaging in enjoyable and restorative activities</li>
        <li>Maintaining physical health through exercise and nutrition</li>
        <li>Balancing responsibilities with relaxation</li>
        <li>Connecting with supportive people</li>
        <li>Practicing mindfulness and present-moment awareness</li>
      </ul>

      <h3>Fostering Connection and Belonging</h3>

      <p>Strong relationships provide essential support for resilience:</p>

      <p><strong>Family Connection:</strong></p>
      <ul>
        <li>Regular family time and shared activities</li>
        <li>Family traditions and rituals that persist through moves</li>
        <li>Open communication about feelings and experiences</li>
        <li>Collaborative problem-solving as a family</li>
        <li>Celebration of individual and family accomplishments</li>
        <li>Maintenance of extended family relationships</li>
      </ul>

      <p><strong>Peer Relationships:</strong></p>
      <ul>
        <li>Opportunities to develop friendships</li>
        <li>Support for maintaining long-distance connections</li>
        <li>Development of friendship-making skills</li>
        <li>Connection with other military children</li>
        <li>Guidance for navigating peer conflicts</li>
        <li>Balance between military and civilian friendships</li>
      </ul>

      <p><strong>Community Integration:</strong></p>
      <ul>
        <li>Involvement in community activities and events</li>
        <li>Connection to military community resources</li>
        <li>Participation in local organizations and groups</li>
        <li>Volunteer opportunities and service projects</li>
        <li>Exploration of new community environments</li>
        <li>Development of "home" feeling in each location</li>
      </ul>

      <p><strong>School Connection:</strong></p>
      <ul>
        <li>Relationships with teachers and school staff</li>
        <li>Participation in school activities and traditions</li>
        <li>Connection with school liaison officers</li>
        <li>Engagement in extracurricular opportunities</li>
        <li>Identification as both military child and school community member</li>
        <li>Academic engagement and investment</li>
      </ul>

      <h3>Strengthening Identity Development</h3>

      <p>A strong sense of self provides stability through transitions:</p>

      <p><strong>Military Child Identity:</strong></p>
      <ul>
        <li>Understanding unique aspects of military lifestyle</li>
        <li>Pride in family service and contribution</li>
        <li>Connection with military child community</li>
        <li>Recognition of special strengths developed through military life</li>
        <li>Balanced perspective on challenges and benefits</li>
        <li>Integration of military experiences into self-concept</li>
      </ul>

      <p><strong>Cultural and Family Identity:</strong></p>
      <ul>
        <li>Maintenance of family traditions and practices</li>
        <li>Connection to cultural and ethnic heritage</li>
        <li>Understanding of family values and beliefs</li>
        <li>Appreciation for diverse cultural experiences</li>
        <li>Development of multicultural perspective</li>
        <li>Creation of family narratives and stories</li>
      </ul>

      <p><strong>Personal Strength Awareness:</strong></p>
      <ul>
        <li>Identification of individual talents and abilities</li>
        <li>Recognition of character strengths and values</li>
        <li>Acknowledgment of personal accomplishments</li>
        <li>Understanding of unique coping strategies</li>
        <li>Awareness of personal growth through challenges</li>
        <li>Development of authentic self-expression</li>
      </ul>

      <p><strong>Future Self Development:</strong></p>
      <ul>
        <li>Exploration of interests and passions</li>
        <li>Setting of meaningful personal goals</li>
        <li>Envisioning future possibilities and paths</li>
        <li>Building skills for desired future directions</li>
        <li>Connection between current actions and future aspirations</li>
        <li>Flexibility in adapting goals to changing circumstances</li>
      </ul>

      <h3>Learning Through Challenge</h3>

      <p>Challenges can become opportunities for growth and development:</p>

      <p><strong>Growth Mindset Development:</strong></p>
      <ul>
        <li>Belief that abilities can be developed through effort</li>
        <li>Viewing challenges as opportunities to learn</li>
        <li>Understanding that struggle is part of learning</li>
        <li>Persistence through difficulties</li>
        <li>Willingness to try new approaches</li>
        <li>Learning from feedback and setbacks</li>
      </ul>

      <p><strong>Meaning-Making Processes:</strong></p>
      <ul>
        <li>Reflection on experiences and their significance</li>
        <li>Finding purpose in difficult circumstances</li>
        <li>Creating narratives that incorporate challenges</li>
        <li>Identifying lessons learned through adversity</li>
        <li>Connecting personal experiences to broader values</li>
        <li>Using challenges to develop empathy for others</li>
      </ul>

      <p><strong>Challenge Calibration:</strong></p>
      <ul>
        <li>Balancing challenge with appropriate support</li>
        <li>Gradually increasing difficulty as skills develop</li>
        <li>Providing scaffolding for new challenges</li>
        <li>Recognizing when challenges become overwhelming</li>
        <li>Adjusting expectations during particularly difficult periods</li>
        <li>Celebrating effort and progress, not just outcomes</li>
      </ul>

      <p><strong>Achievement Through Adversity:</strong></p>
      <ul>
        <li>Setting and working toward meaningful goals</li>
        <li>Developing perseverance and determination</li>
        <li>Building confidence through overcoming obstacles</li>
        <li>Recognizing personal agency and capability</li>
        <li>Acknowledging both effort and accomplishment</li>
        <li>Using past successes to approach new challenges</li>
      </ul>

      <h3>Military-Specific Resilience Building</h3>

      <p>Certain military situations provide unique opportunities for resilience development:</p>

      <p><strong>Deployment Resilience:</strong></p>
      <ul>
        <li>Preparation through open communication</li>
        <li>Development of coping strategies for separation</li>
        <li>Creation of meaningful connection rituals</li>
        <li>Opportunities for growth in responsibility</li>
        <li>Building support networks during absence</li>
        <li>Celebration of family strength through challenge</li>
      </ul>

      <p><strong>PCS Move Resilience:</strong></p>
      <ul>
        <li>Involvement in planning and preparation</li>
        <li>Research about new location and opportunities</li>
        <li>Development of transition coping strategies</li>
        <li>Maintenance of important relationships</li>
        <li>Creation of arrival routines and exploration</li>
        <li>Recognition of adaptability skills developed</li>
      </ul>

      <p><strong>School Transition Resilience:</strong></p>
      <ul>
        <li>Preparation for academic differences</li>
        <li>Development of self-advocacy skills</li>
        <li>Creation of friendship-building strategies</li>
        <li>Maintenance of learning continuity</li>
        <li>Connection with supportive school personnel</li>
        <li>Recognition of transition management strengths</li>
      </ul>

      <p>By intentionally supporting social-emotional wellbeing and building resilience, military families can help children not only survive but thrive through the unique challenges and opportunities of military life. These skills and strengths will serve them well throughout their educational journeys and into adulthood.</p>

      <h2>Family Communication Strategies</h2>

      <p>Effective family communication forms the foundation for emotional wellbeing and educational success.</p>

      <h3>Creating Communication-Friendly Environments</h3>

      <p>The context for communication significantly impacts its effectiveness:</p>

      <p><strong>Physical Settings:</strong></p>
      <ul>
        <li>Distraction-free spaces for important conversations</li>
        <li>Comfortable and neutral locations for difficult discussions</li>
        <li>Family gathering areas that encourage interaction</li>
        <li>Appropriate privacy for sensitive conversations</li>
        <li>Technology-free zones and times for direct connection</li>
        <li>Accessible communication tools for deployed family members</li>
      </ul>

      <p><strong>Emotional Atmosphere:</strong></p>
      <ul>
        <li>Psychological safety for sharing thoughts and feelings</li>
        <li>Nonjudgmental responses to different perspectives</li>
        <li>Validation of all family members' experiences</li>
        <li>Appropriate emotional regulation by parents</li>
        <li>Acceptance of the full range of emotions</li>
        <li>Calm approach to challenging topics</li>
      </ul>

      <p><strong>Timing Considerations:</strong></p>
      <ul>
        <li>Awareness of energy levels and emotional states</li>
        <li>Appropriate timing for different types of conversations</li>
        <li>Scheduled time for important discussions</li>
        <li>Flexibility for spontaneous communication needs</li>
        <li>Consideration of developmental attention spans</li>
        <li>Balance between immediate needs and appropriate timing</li>
      </ul>

      <p><strong>Cultural Foundations:</strong></p>
      <ul>
        <li>Family values around communication openness</li>
        <li>Respect for cultural communication patterns</li>
        <li>Established norms for disagreement and conflict</li>
        <li>Balance between military culture and family culture</li>
        <li>Appreciation for different communication styles</li>
        <li>Intentional development of family communication culture</li>
      </ul>

      <h3>Regular Communication Structures</h3>

      <p>Consistent communication practices build connection and understanding:</p>

      <p><strong>Family Meetings:</strong></p>
      <ul>
        <li>Regular scheduled family discussion time</li>
        <li>Structured format with all members participating</li>
        <li>Combination of practical planning and emotional check-ins</li>
        <li>Age-appropriate roles and responsibilities</li>
        <li>Celebration of successes and problem-solving for challenges</li>
        <li>Adaptation for deployed family members when possible</li>
      </ul>

      <p><strong>Check-In Rituals:</strong></p>
      <ul>
        <li>Daily connection points (meals, bedtime, after school)</li>
        <li>Brief but meaningful acknowledgment of each person</li>
        <li>Simple questions that invite genuine sharing</li>
        <li>Consistent implementation despite busy schedules</li>
        <li>Adaptation during separations and transitions</li>
        <li>Balance between structure and authentic interaction</li>
      </ul>

      <p><strong>Special Communication Times:</strong></p>
      <ul>
        <li>One-on-one time with each child regularly</li>
        <li>Couple communication time for parents</li>
        <li>Pre-planned discussions before significant transitions</li>
        <li>Reflection and processing after important events</li>
        <li>Milestone conversations (birthdays, achievements, changes)</li>
        <li>Scheduled connection during deployments and separations</li>
      </ul>

      <p><strong>Visual Communication Tools:</strong></p>
      <ul>
        <li>Family calendars and schedule systems</li>
        <li>Visual countdown tools for deployments and returns</li>
        <li>Emotion charts for younger children</li>
        <li>Family mission statements and value displays</li>
        <li>Photo sharing systems for separated family members</li>
        <li>Visual planning tools for transitions and moves</li>
      </ul>

      <h3>Developmental Communication Approaches</h3>

      <p>Communication strategies should adapt to children's developmental stages:</p>

      <p><strong>Early Childhood:</strong></p>
      <ul>
        <li>Simple, concrete language and explanations</li>
        <li>Visual supports and demonstrations</li>
        <li>Play-based communication approaches</li>
        <li>Physical connection alongside verbal communication</li>
        <li>Consistent, brief check-ins throughout the day</li>
        <li>Predictable routines that include communication</li>
      </ul>

      <p><strong>School-Age Children:</strong></p>
      <ul>
        <li>Increased detail in explanations and discussions</li>
        <li>Use of stories and examples to illustrate concepts</li>
        <li>Beginning problem-solving conversations</li>
        <li>Activity-based communication (while doing things together)</li>
        <li>Introduction to family meeting participation</li>
        <li>Balance between direct questions and open sharing</li>
      </ul>

      <p><strong>Adolescents:</strong></p>
      <ul>
        <li>Respect for increasing independence and privacy</li>
        <li>Less direct questioning, more invitation to share</li>
        <li>Validation of opinions and perspectives</li>
        <li>Authentic sharing of appropriate parental experiences</li>
        <li>Negotiation and collaborative problem-solving</li>
        <li>Flexibility in communication timing and approach</li>
      </ul>

      <p><strong>Young Adults:</strong></p>
      <ul>
        <li>Transition to adult-to-adult communication style</li>
        <li>Respect for independent decision-making</li>
        <li>Maintenance of connection during increasing separation</li>
        <li>Balance between guidance and autonomy</li>
        <li>Adaptation to changing family roles and dynamics</li>
        <li>Integration of partners and expanding family connections</li>
      </ul>

      <p>As noted in the July 2024 article: "I enjoy the sounds of my young adults being home from college. I chuckle at the fact that at dinner time, they are wondering what's for dinner, like they can't fix something themselves. Their memories of home are the day to day joys they reflect on and appreciate a little more by going away from home." This reflection highlights how communication patterns evolve while maintaining essential family connections.</p>

      <h3>Communication During Separation</h3>

      <p>Military separations require intentional communication planning:</p>

      <p><strong>Pre-Separation Planning:</strong></p>
      <ul>
        <li>Discussion of communication expectations and realities</li>
        <li>Establishment of communication schedules when possible</li>
        <li>Preparation of communication tools and technology</li>
        <li>Creation of backup communication plans</li>
        <li>Age-appropriate explanation of potential limitations</li>
        <li>Recording of messages for times when live communication isn't possible</li>
      </ul>

      <p><strong>Deployment Communication Methods:</strong></p>
      <ul>
        <li>Video calls when available and appropriate</li>
        <li>Email and messaging systems</li>
        <li>Traditional mail and care packages</li>
        <li>Recorded stories and messages</li>
        <li>Shared online spaces and photo sharing</li>
        <li>Communication through trusted third parties when needed</li>
      </ul>

      <p><strong>Supporting Children's Communication:</strong></p>
      <ul>
        <li>Preparation of conversation topics and updates</li>
        <li>Assistance with expressing feelings appropriately</li>
        <li>Balance between honesty and age-appropriate filtering</li>
        <li>Encouragement of regular communication without pressure</li>
        <li>Processing of emotions after difficult or limited communications</li>
        <li>Maintenance of deployed parent's presence in daily conversations</li>
      </ul>

      <p><strong>Reintegration Communication:</strong></p>
      <ul>
        <li>Gradual reintroduction to family communication patterns</li>
        <li>Explicit discussion of changes and developments</li>
        <li>Patience with readjustment to in-person communication</li>
        <li>Balancing individual reconnection with family dynamics</li>
        <li>Addressing communication challenges directly</li>
        <li>Creating space for processing the separation experience</li>
      </ul>

      <h3>Difficult Conversations</h3>

      <p>Certain topics require special communication approaches:</p>

      <p><strong>Deployment Reality Discussions:</strong></p>
      <ul>
        <li>Age-appropriate honesty about deployment dangers</li>
        <li>Balancing truth with reassurance and security</li>
        <li>Addressing fears and worries directly</li>
        <li>Preparing for potential communication gaps</li>
        <li>Discussing media coverage and outside information</li>
        <li>Creating space for ongoing questions and concerns</li>
      </ul>

      <p><strong>PCS Move Conversations:</strong></p>
      <ul>
        <li>Timely and honest communication about upcoming moves</li>
        <li>Acknowledgment of feelings about leaving friends and schools</li>
        <li>Balance between empathy and positive framing</li>
        <li>Involvement in appropriate aspects of decision-making</li>
        <li>Regular updates and information sharing</li>
        <li>Processing of grief alongside excitement for new opportunities</li>
      </ul>

      <p><strong>School and Social Challenges:</strong></p>
      <ul>
        <li>Creating safe space for sharing difficulties</li>
        <li>Collaborative problem-solving approaches</li>
        <li>Appropriate parental involvement versus child autonomy</li>
        <li>Distinguishing between venting and problem-solving needs</li>
        <li>Connecting challenges to broader military life context</li>
        <li>Building advocacy and self-advocacy skills</li>
      </ul>

      <p><strong>Family Stress and Change:</strong></p>
      <ul>
        <li>Appropriate transparency about family challenges</li>
        <li>Distinction between adult issues and child concerns</li>
        <li>Unified parental communication on important topics</li>
        <li>Acknowledgment of stress without creating anxiety</li>
        <li>Focus on aspects within family control</li>
        <li>Reinforcement of family strength and resilience</li>
      </ul>

      <h3>Digital and Distance Communication</h3>

      <p>Technology offers both opportunities and challenges for family connection:</p>

      <p><strong>Technology Selection:</strong></p>
      <ul>
        <li>Evaluation of available communication platforms</li>
        <li>Consideration of security and privacy needs</li>
        <li>Accessibility across different locations and situations</li>
        <li>Age-appropriate digital tools and interfaces</li>
        <li>Backup options for primary communication methods</li>
        <li>Balance between synchronous and asynchronous communication</li>
      </ul>

      <p><strong>Effective Virtual Connection:</strong></p>
      <ul>
        <li>Preparation for meaningful video calls</li>
        <li>Activities that can be shared virtually</li>
        <li>Strategies for engaging younger children remotely</li>
        <li>Management of technical difficulties and limitations</li>
        <li>Realistic expectations for different communication methods</li>
        <li>Quality over quantity in digital interactions</li>
      </ul>

      <p><strong>Social Media Considerations:</strong></p>
      <ul>
        <li>Family agreements about sharing military information</li>
        <li>Privacy and security awareness for military families</li>
        <li>Age-appropriate social media participation</li>
        <li>Digital citizenship education and modeling</li>
        <li>Boundaries around deployment details and locations</li>
        <li>Positive use of social platforms for family connection</li>
      </ul>

      <p><strong>Supplementing Digital Connection:</strong></p>
      <ul>
        <li>Traditional mail and physical mementos</li>
        <li>Recorded messages and videos for asynchronous sharing</li>
        <li>Shared activities despite physical separation</li>
        <li>Creative connection ideas beyond standard calls</li>
        <li>Tangible reminders of distant family members</li>
        <li>Integration of digital and physical connection methods</li>
      </ul>

      <h2>Work-Life Balance for Military Parents</h2>

      <p>The unique demands of military service require intentional approaches to family balance.</p>

      <h3>Understanding the Military Work-Life Challenge</h3>

      <p>Military families face distinct work-life integration challenges:</p>

      <p><strong>Military Service Realities:</strong></p>
      <ul>
        <li>Unpredictable schedules and last-minute changes</li>
        <li>Extended separations for deployments and training</li>
        <li>24/7 commitment and on-call responsibilities</li>
        <li>Geographic relocations and housing transitions</li>
        <li>High-stress operational environments</li>
        <li>Mission-critical responsibilities and priorities</li>
      </ul>

      <p><strong>Family Impact Factors:</strong></p>
      <ul>
        <li>Single parenting during deployments and training</li>
        <li>Disruption of family routines and traditions</li>
        <li>Adaptation to new communities and support systems</li>
        <li>Management of household responsibilities by one parent</li>
        <li>Emotional needs during separation and reintegration</li>
        <li>Balancing service commitment with family needs</li>
      </ul>

      <p><strong>Education Connection:</strong></p>
      <ul>
        <li>Parental involvement in educational activities</li>
        <li>Supporting academic success during transitions</li>
        <li>Maintaining educational continuity despite moves</li>
        <li>Participation in school events and conferences</li>
        <li>Homework support and academic monitoring</li>
        <li>Educational decision-making during separations</li>
      </ul>

      <p><strong>Work-Life Integration Approach:</strong></p>
      <ul>
        <li>Shift from "balance" to "integration" mindset</li>
        <li>Recognition of seasons of greater work or family focus</li>
        <li>Strategic prioritization rather than equal time distribution</li>
        <li>Intentional presence during family time</li>
        <li>Clear boundaries when possible</li>
        <li>Realistic expectations based on military realities</li>
      </ul>

      <h3>Strategic Time Management</h3>

      <p>Effective time management strategies support family wellbeing:</p>

      <p><strong>Priority Identification:</strong></p>
      <ul>
        <li>Regular assessment of current family priorities</li>
        <li>Distinction between urgent and important activities</li>
        <li>Alignment of time allocation with family values</li>
        <li>Identification of non-negotiable family commitments</li>
        <li>Regular reevaluation based on changing circumstances</li>
        <li>Communication about priorities between parents</li>
      </ul>

      <p><strong>Time Blocking Techniques:</strong></p>
      <ul>
        <li>Dedicated family time protected from interruptions</li>
        <li>Scheduled one-on-one time with each child</li>
        <li>Couple time for parental relationship maintenance</li>
        <li>Efficient grouping of similar tasks and activities</li>
        <li>Buffer time between commitments for transitions</li>
        <li>Realistic scheduling that acknowledges military unpredictability</li>
      </ul>

      <p><strong>Delegation and Distribution:</strong></p>
      <ul>
        <li>Age-appropriate family responsibilities</li>
        <li>Sharing of household management tasks</li>
        <li>Utilization of available support services</li>
        <li>Community and extended family assistance</li>
        <li>Paid services when feasible and necessary</li>
        <li>Letting go of non-essential tasks during high-stress periods</li>
      </ul>

      <p><strong>Efficiency Strategies:</strong></p>
      <ul>
        <li>Streamlined routines for regular activities</li>
        <li>Preparation and planning to reduce daily decisions</li>
        <li>Technology tools for family organization</li>
        <li>Batch processing of similar tasks</li>
        <li>Reduction of time-consuming but low-value activities</li>
        <li>Energy management alongside time management</li>
      </ul>

      <h3>Family Systems and Routines</h3>

      <p>Structured yet flexible family systems support work-life integration:</p>

      <p><strong>Adaptable Routines:</strong></p>
      <ul>
        <li>Core daily routines that provide stability</li>
        <li>Flexible frameworks rather than rigid schedules</li>
        <li>Multiple routine options for different scenarios</li>
        <li>Visual schedules and reminders for all family members</li>
        <li>Regular review and adjustment of routines</li>
        <li>Balance between structure and spontaneity</li>
      </ul>

      <p><strong>Role Clarity and Flexibility:</strong></p>
      <ul>
        <li>Clear understanding of family member responsibilities</li>
        <li>Flexible role adjustment during deployments and training</li>
        <li>Cross-training for essential household functions</li>
        <li>Age-appropriate responsibility progression</li>
        <li>Recognition and appreciation of each person's contributions</li>
        <li>Regular reassessment of role distribution</li>
      </ul>

      <p><strong>Decision-Making Frameworks:</strong></p>
      <ul>
        <li>Established processes for different types of decisions</li>
        <li>Clarity about which decisions require both parents</li>
        <li>Systems for decision-making during separation</li>
        <li>Age-appropriate inclusion of children in relevant decisions</li>
        <li>Documentation of important decisions and rationales</li>
        <li>Regular communication about upcoming decision points</li>
      </ul>

      <p><strong>Connection Maintenance:</strong></p>
      <ul>
        <li>Non-negotiable family connection rituals</li>
        <li>Regular check-ins on emotional wellbeing</li>
        <li>Celebration of milestones and achievements</li>
        <li>Intentional memory-making activities</li>
        <li>Maintenance of extended family relationships</li>
        <li>Adaptation of connection practices during separation</li>
      </ul>

      <h3>Deployment and Training Period Management</h3>

      <p>Military separations require specific work-life strategies:</p>

      <p><strong>Pre-Departure Preparation:</strong></p>
      <ul>
        <li>Documentation of household information and procedures</li>
        <li>Completion of essential maintenance and preparations</li>
        <li>Establishment of communication plans and expectations</li>
        <li>Creation of support networks and assistance plans</li>
        <li>Emotional preparation and meaningful pre-departure activities</li>
        <li>Legal and financial readiness</li>
      </ul>

      <p><strong>During-Absence Strategies:</strong></p>
      <ul>
        <li>Simplified routines and expectations</li>
        <li>Utilization of available support services</li>
        <li>Selective commitment to activities and obligations</li>
        <li>Regular self-care and stress management</li>
        <li>Maintenance of connection with deployed parent</li>
        <li>Documentation of important moments and developments</li>
      </ul>

      <p><strong>Reintegration Approaches:</strong></p>
      <ul>
        <li>Gradual resumption of responsibilities</li>
        <li>Patience with role renegotiation and adjustment</li>
        <li>Intentional reconnection activities</li>
        <li>Open communication about changes and developments</li>
        <li>Balance between family time and personal space</li>
        <li>Celebration of reunion while acknowledging challenges</li>
      </ul>

      <h3>Self-Care and Sustainability</h3>

      <p>Parental wellbeing forms the foundation for family functioning:</p>

      <p><strong>Essential Self-Care:</strong></p>
      <ul>
        <li>Basic physical needs (sleep, nutrition, exercise)</li>
        <li>Mental health maintenance and stress management</li>
        <li>Regular breaks and restorative activities</li>
        <li>Personal interests and identity beyond parenting</li>
        <li>Spiritual practices and meaning-making</li>
        <li>Permission to prioritize wellbeing without guilt</li>
      </ul>

      <p><strong>Support Network Development:</strong></p>
      <ul>
        <li>Intentional building of local support systems</li>
        <li>Maintenance of long-distance supportive relationships</li>
        <li>Utilization of military family programs and resources</li>
        <li>Connection with other military families</li>
        <li>Professional support when needed</li>
        <li>Reciprocal support relationships in the community</li>
      </ul>

      <p><strong>Boundary Establishment:</strong></p>
      <ul>
        <li>Clear work-home boundaries when possible</li>
        <li>Limits on additional commitments and obligations</li>
        <li>Technology boundaries for work intrusion</li>
        <li>Appropriate delegation and asking for help</li>
        <li>Permission to say no to non-essential activities</li>
        <li>Protection of family time and personal restoration</li>
      </ul>

      <p><strong>Sustainability Focus:</strong></p>
      <ul>
        <li>Long-term perspective on family and career</li>
        <li>Recognition of different seasons and demands</li>
        <li>Regular assessment of stress levels and adjustment</li>
        <li>Preventive approaches rather than crisis management</li>
        <li>Realistic expectations and perfectionism management</li>
        <li>Celebration of successes and progress</li>
      </ul>

      <h3>Military Spouse Career and Education</h3>

      <p>Supporting spouse career development benefits the entire family:</p>

      <p><strong>Career Adaptation Strategies:</strong></p>
      <ul>
        <li>Exploration of portable career options</li>
        <li>Development of remote work possibilities</li>
        <li>Utilization of military spouse preference programs</li>
        <li>Creative approaches to resume gaps and transitions</li>
        <li>Professional network maintenance across moves</li>
        <li>Licensing and certification transfer planning</li>
      </ul>

      <p><strong>Educational Pursuit Balance:</strong></p>
      <ul>
        <li>Utilization of military spouse education benefits</li>
        <li>Selection of transferable degree programs</li>
        <li>Online and flexible learning options</li>
        <li>Family support systems during educational pursuits</li>
        <li>Integration of study time into family schedules</li>
        <li>Long-term educational planning across military career</li>
      </ul>

      <p><strong>Identity Development Beyond Family:</strong></p>
      <ul>
        <li>Maintenance of personal goals and aspirations</li>
        <li>Volunteer and community involvement opportunities</li>
        <li>Creative outlets and personal interests</li>
        <li>Professional identity alongside military spouse role</li>
        <li>Peer connections with shared interests</li>
        <li>Personal growth planning and development</li>
      </ul>

      <p><strong>Financial Contribution Approaches:</strong></p>
      <ul>
        <li>Broad definition of family contribution beyond income</li>
        <li>Creative income generation during transitions</li>
        <li>Financial planning that accommodates career interruptions</li>
        <li>Investment in long-term career development</li>
        <li>Entrepreneurial and self-employment options</li>
        <li>Balanced perspective on financial and family priorities</li>
      </ul>

      <h3>Family Thriving Beyond Balance</h3>

      <p>Military families can move beyond survival to genuine thriving:</p>

      <p><strong>Strength Identification:</strong></p>
      <ul>
        <li>Recognition of unique military family strengths</li>
        <li>Celebration of adaptability and resilience</li>
        <li>Appreciation for diverse experiences and perspectives</li>
        <li>Acknowledgment of each family member's contributions</li>
        <li>Focus on capabilities rather than limitations</li>
        <li>Development of family identity and narrative</li>
      </ul>

      <p><strong>Intentional Memory Creation:</strong></p>
      <ul>
        <li>Prioritization of meaningful family experiences</li>
        <li>Documentation of special moments and everyday life</li>
        <li>Creation of traditions that can travel with the family</li>
        <li>Celebration of military lifestyle opportunities</li>
        <li>Incorporation of service locations into family story</li>
        <li>Balance between planned events and spontaneous moments</li>
      </ul>

      <p><strong>Growth Through Challenge:</strong></p>
      <ul>
        <li>Framing of difficulties as opportunities for development</li>
        <li>Reflection on lessons learned through military life</li>
        <li>Identification of skills developed through challenges</li>
        <li>Sharing of growth stories and experiences</li>
        <li>Cultivation of gratitude alongside acknowledgment of difficulties</li>
        <li>Development of family problem-solving capabilities</li>
      </ul>

      <p><strong>Legacy Development:</strong></p>
      <ul>
        <li>Consideration of long-term family impact and values</li>
        <li>Service to military and civilian communities</li>
        <li>Mentorship of newer military families</li>
        <li>Sharing of wisdom and experience</li>
        <li>Creation of meaningful family narrative</li>
        <li>Focus on the broader purpose of military service and sacrifice</li>
      </ul>

      <p>Through intentional communication, thoughtful work-life integration, and focus on family wellbeing, military families can create educational environments that support not only academic success but holistic development and flourishing for all family members.</p>
    `},{id:"appendices",title:"Appendices and Resources",content:`
      <h2>Checklists and Timelines</h2>

      <p>The following checklists and timelines provide practical tools to help military families navigate key educational transitions and milestones. These resources can be adapted to your family's specific circumstances and used as frameworks for planning and preparation.</p>

      <h3>School Transition Checklist</h3>

      <p><strong>3-6 Months Before Move:</strong></p>
      <ul>
        <li>Contact the School Liaison Officer (SLO) at your current and gaining installations</li>
        <li>Research schools in the new location (public, private, DoDEA, charter, homeschool options)</li>
        <li>Review school websites, performance data, and special programs</li>
        <li>Identify specific programs your child needs (special education, gifted, ELL, etc.)</li>
        <li>Request current school records and review for completeness</li>
        <li>Check Interstate Compact provisions that may apply to your situation</li>
        <li>Research graduation requirements if moving during high school</li>
        <li>Identify extracurricular activities and tryout schedules at new location</li>
        <li>Begin discussions with children about the upcoming school change</li>
      </ul>

      <p><strong>1-3 Months Before Move:</strong></p>
      <ul>
        <li>Schedule exit interviews with current teachers and counselors</li>
        <li>Request letters of recommendation for special programs</li>
        <li>Obtain copies of IEP/504 plans and most recent evaluations</li>
        <li>Collect samples of student work that demonstrate abilities</li>
        <li>Organize a portfolio of academic achievements and extracurricular activities</li>
        <li>Contact the new school to understand registration requirements</li>
        <li>Schedule placement tests if required by the new school</li>
        <li>Research summer programs in the new location to ease transition</li>
        <li>Develop a plan for completing current school year/semester</li>
      </ul>

      <p><strong>2-4 Weeks Before Move:</strong></p>
      <ul>
        <li>Organize hand-carry educational documents (don't pack in household goods)</li>
        <li>Include immunization records, birth certificate, and proof of residency</li>
        <li>Confirm withdrawal process and timeline with current school</li>
        <li>Return all school materials (textbooks, library books, equipment)</li>
        <li>Back up digital school projects and assignments</li>
        <li>Create contact information list for current teachers and friends</li>
        <li>Plan appropriate goodbyes and closure activities</li>
        <li>Prepare questions for new school orientation</li>
        <li>Discuss expectations and concerns about the new school with your child</li>
      </ul>

      <p><strong>Arrival at New Location:</strong></p>
      <ul>
        <li>Connect with the School Liaison Officer at the new installation</li>
        <li>Complete school registration process</li>
        <li>Request a school tour before the first day if possible</li>
        <li>Meet with school counselor to discuss course placement</li>
        <li>Provide copies of all educational records</li>
        <li>Discuss special needs and accommodations with appropriate staff</li>
        <li>Review transportation arrangements and schedules</li>
        <li>Purchase required school supplies and appropriate clothing</li>
        <li>Locate key places in the school (classrooms, cafeteria, gym, etc.)</li>
      </ul>

      <p><strong>First Month at New School:</strong></p>
      <ul>
        <li>Schedule meetings with new teachers within first two weeks</li>
        <li>Establish communication channels with teachers and staff</li>
        <li>Monitor homework completion and understanding</li>
        <li>Check in daily with your child about school experiences</li>
        <li>Watch for signs of transition stress or academic struggles</li>
        <li>Help your child connect with peers and activities</li>
        <li>Attend school events and volunteer if possible</li>
        <li>Verify records have been received and properly interpreted</li>
        <li>Confirm appropriate placement in classes and programs</li>
      </ul>

      <p><strong>Ongoing Monitoring:</strong></p>
      <ul>
        <li>Schedule follow-up meeting with teachers after 4-6 weeks</li>
        <li>Review first progress report or report card carefully</li>
        <li>Address any academic or social concerns promptly</li>
        <li>Adjust support strategies based on transition progress</li>
        <li>Connect with other military families at the school</li>
        <li>Continue to monitor emotional adjustment to the new environment</li>
        <li>Maintain communication with school staff throughout the year</li>
        <li>Document successful transition strategies for future moves</li>
        <li>Celebrate successful adaptation and achievements</li>
      </ul>

      <h3>Deployment Education Support Timeline</h3>

      <p><strong>Pre-Deployment:</strong></p>
      <ul>
        <li>Inform school staff about upcoming deployment</li>
        <li>Meet with teachers to discuss potential impacts on the student</li>
        <li>Establish communication plan between deployed parent and school</li>
        <li>Update emergency contact information and authorization forms</li>
        <li>Discuss homework and academic expectations during deployment</li>
        <li>Create a family calendar marking important school events</li>
        <li>Record the deploying parent reading books or helping with homework</li>
        <li>Prepare comfort items for school (photos, special notes)</li>
        <li>Discuss how to handle deployment questions from peers</li>
        <li>Connect with school counselor for available support resources</li>
      </ul>

      <p><strong>Initial Deployment Period (First Month):</strong></p>
      <ul>
        <li>Monitor changes in behavior, academic performance, or attendance</li>
        <li>Maintain consistent school routines and homework schedules</li>
        <li>Check in with teachers about any concerning changes</li>
        <li>Provide age-appropriate updates about the deployed parent</li>
        <li>Establish new after-school routines if needed</li>
        <li>Connect with Military Family Life Counselor if available</li>
        <li>Consider joining deployment support groups at school or installation</li>
        <li>Create a system for sharing school news with deployed parent</li>
        <li>Maintain regular sleep schedules to support school performance</li>
        <li>Allow for adjustment time and extra emotional support</li>
      </ul>

      <p><strong>During Deployment:</strong></p>
      <ul>
        <li>Schedule regular check-ins with teachers (every 4-6 weeks)</li>
        <li>Send updates and school work to deployed parent regularly</li>
        <li>Arrange video calls with deployed parent during special school events when possible</li>
        <li>Monitor academic progress and address any issues promptly</li>
        <li>Maintain connection with school support personnel</li>
        <li>Consider tutoring or homework help if needed</li>
        <li>Encourage participation in deployment support programs at school</li>
        <li>Document school achievements to share with deployed parent</li>
        <li>Be aware of emotional triggers around special school events</li>
        <li>Maintain communication with teachers about any concerning changes</li>
      </ul>

      <p><strong>Pre-Reunion (1 Month Before Return):</strong></p>
      <ul>
        <li>Inform teachers about upcoming reunion</li>
        <li>Discuss potential adjustment behaviors with school counselor</li>
        <li>Prepare for possible academic and routine changes</li>
        <li>Help child create school-related welcome home items</li>
        <li>Discuss realistic expectations for parent's attendance at school events</li>
        <li>Prepare for potential school absences during reunion period</li>
        <li>Create a plan for reintegrating parent into school routines</li>
        <li>Organize school work and achievements to share with returning parent</li>
        <li>Discuss with child how to handle excitement at school</li>
        <li>Prepare teachers for potential behavioral changes during reunion</li>
      </ul>

      <p><strong>Post-Deployment:</strong></p>
      <ul>
        <li>Gradually reintegrate returning parent into school communication</li>
        <li>Schedule time for returning parent to meet teachers</li>
        <li>Update school records and emergency contacts</li>
        <li>Monitor child's school behavior and performance during readjustment</li>
        <li>Maintain consistent routines while incorporating returning parent</li>
        <li>Be patient with academic performance during reintegration</li>
        <li>Discuss any school concerns that arose during deployment</li>
        <li>Celebrate educational achievements accomplished during deployment</li>
        <li>Consider counseling if school difficulties persist</li>
        <li>Document successful strategies for future deployments</li>
      </ul>

      <h3>College Application Timeline</h3>

      <p>As noted in the April 2024 article, "Early planning is essential for military families navigating the college application process, especially with the possibility of PCS moves during high school."</p>

      <p><strong>9th Grade:</strong></p>
      <ul>
        <li>Meet with high school counselor to plan four-year course schedule</li>
        <li>Understand graduation requirements and college preparatory courses</li>
        <li>Begin exploring potential career interests</li>
        <li>Participate in extracurricular activities and community service</li>
        <li>Develop good study habits and organizational skills</li>
        <li>Create a system for tracking achievements and activities</li>
        <li>Explore summer enrichment opportunities</li>
        <li>Begin researching military-connected college benefits</li>
        <li>Take challenging courses appropriate to ability level</li>
        <li>Establish relationships with teachers and mentors</li>
      </ul>

      <p><strong>10th Grade:</strong></p>
      <ul>
        <li>Take the PSAT for practice</li>
        <li>Continue involvement in extracurricular activities with increasing responsibility</li>
        <li>Research college options and admission requirements</li>
        <li>Attend college fairs and information sessions</li>
        <li>Consider taking SAT Subject Tests in completed courses</li>
        <li>Explore dual enrollment or advanced placement options</li>
        <li>Begin investigating scholarship opportunities</li>
        <li>Consider military academy or ROTC interest and requirements</li>
        <li>Maintain strong academic performance</li>
        <li>Update achievement and activity records</li>
      </ul>

      <p><strong>11th Grade:</strong></p>
      <ul>
        <li>Take the PSAT/NMSQT in October (National Merit Scholarship qualifying)</li>
        <li>Prepare for and take the SAT and/or ACT (spring semester)</li>
        <li>Research colleges more intensively (size, location, programs, cost)</li>
        <li>Visit college campuses when possible</li>
        <li>Meet with college representatives at school events</li>
        <li>Begin gathering information for applications</li>
        <li>Identify teachers for recommendation letters</li>
        <li>Take leadership roles in activities when possible</li>
        <li>Attend financial aid and college planning workshops</li>
        <li>Create a master calendar of application deadlines</li>
        <li>Consider how potential PCS moves might affect application process</li>
        <li>Research in-state tuition options for military dependents</li>
      </ul>

      <p><strong>12th Grade:</strong></p>
      <ul>
        <li>Retake SAT/ACT if needed (early fall)</li>
        <li>Finalize college list with safety, match, and reach schools</li>
        <li>Request letters of recommendation (early fall)</li>
        <li>Complete and submit applications before deadlines</li>
        <li>Complete FAFSA as soon as possible after October 1</li>
        <li>Apply for scholarships (ongoing throughout year)</li>
        <li>Send mid-year reports as required</li>
        <li>Compare financial aid offers</li>
        <li>Make final college decision by May 1</li>
        <li>Request final transcript be sent to selected college</li>
        <li>Complete housing applications and orientation registration</li>
        <li>Apply for military-connected benefits if applicable</li>
      </ul>

      <p>The April 2024 article emphasizes that "Military families should pay particular attention to state residency requirements for tuition purposes and explore the many scholarships specifically available to military dependents."</p>

      <h3>Elementary School Year-by-Year Checklist</h3>

      <p><strong>Kindergarten:</strong></p>
      <ul>
        <li>Establish consistent school routines and homework habits</li>
        <li>Create a dedicated homework space</li>
        <li>Develop regular communication with teacher</li>
        <li>Read with your child daily</li>
        <li>Practice basic math concepts through everyday activities</li>
        <li>Monitor development of fine motor skills</li>
        <li>Support social skills development and friendship building</li>
        <li>Attend parent-teacher conferences and school events</li>
        <li>Begin record-keeping system for educational documents</li>
        <li>Explore extracurricular activities based on interests</li>
      </ul>

      <p><strong>1st-2nd Grade:</strong></p>
      <ul>
        <li>Monitor reading progress and provide appropriate materials</li>
        <li>Support math fact fluency development</li>
        <li>Establish regular reading time beyond school assignments</li>
        <li>Encourage writing through journals, letters, and stories</li>
        <li>Develop independence in homework completion</li>
        <li>Watch for signs of learning difficulties</li>
        <li>Explore interests through appropriate activities</li>
        <li>Limit screen time and encourage active play</li>
        <li>Discuss school experiences daily</li>
        <li>Maintain communication with teachers</li>
      </ul>

      <p><strong>3rd-4th Grade:</strong></p>
      <ul>
        <li>Support transition to more complex academic content</li>
        <li>Monitor homework completion and understanding</li>
        <li>Encourage development of study skills and test preparation</li>
        <li>Support increasing reading comprehension demands</li>
        <li>Provide opportunities for writing in various formats</li>
        <li>Develop organizational and time management skills</li>
        <li>Encourage critical thinking and problem-solving</li>
        <li>Support healthy peer relationships</li>
        <li>Begin discussions about long-term interests and strengths</li>
        <li>Continue participation in extracurricular activities</li>
      </ul>

      <p><strong>5th Grade:</strong></p>
      <ul>
        <li>Prepare for transition to middle school</li>
        <li>Visit middle school and attend orientation events</li>
        <li>Discuss increased responsibility and independence</li>
        <li>Develop stronger organizational systems</li>
        <li>Support completion of culminating elementary projects</li>
        <li>Encourage self-advocacy skills development</li>
        <li>Discuss course selection for middle school</li>
        <li>Address any academic gaps before middle school</li>
        <li>Support healthy technology habits</li>
        <li>Celebrate elementary school completion</li>
      </ul>

      <h3>Middle School Planning Checklist</h3>

      <p><strong>6th Grade:</strong></p>
      <ul>
        <li>Establish new organizational systems for multiple classes</li>
        <li>Create homework and study schedules</li>
        <li>Develop relationship with school counselor</li>
        <li>Support adaptation to multiple teachers and classrooms</li>
        <li>Monitor use of planner or digital organization tools</li>
        <li>Encourage participation in school activities and clubs</li>
        <li>Discuss appropriate social media and technology use</li>
        <li>Support development of self-advocacy skills</li>
        <li>Maintain regular communication with teachers</li>
        <li>Begin exploring career interests informally</li>
      </ul>

      <p><strong>7th Grade:</strong></p>
      <ul>
        <li>Review academic progress and address any concerns</li>
        <li>Encourage increasing independence in schoolwork</li>
        <li>Support development of study skills for more complex content</li>
        <li>Discuss course selection and its impact on future options</li>
        <li>Explore extracurricular activities aligned with interests</li>
        <li>Consider leadership opportunities in school and community</li>
        <li>Continue career exploration through research and discussions</li>
        <li>Support healthy peer relationships and social development</li>
        <li>Monitor online activities and digital citizenship</li>
        <li>Encourage summer enrichment opportunities</li>
      </ul>

      <p><strong>8th Grade:</strong></p>
      <ul>
        <li>Meet with counselor to plan freshman year courses</li>
        <li>Understand high school graduation requirements</li>
        <li>Consider advanced courses if appropriate</li>
        <li>Attend high school orientation events</li>
        <li>Discuss four-year high school plan</li>
        <li>Research extracurricular opportunities in high school</li>
        <li>Develop stronger time management and study skills</li>
        <li>Take leadership roles in middle school activities</li>
        <li>Begin thinking about college and career goals</li>
        <li>Address any academic weaknesses before high school</li>
      </ul>

      <p>As noted in the August 2024 article, "Middle school is a critical time for developing the organizational and study skills that will be essential for high school success. Military families should pay particular attention to course selection and academic planning during 8th grade, especially if a PCS move might occur during the high school years."</p>

      <h3>High School Year-by-Year Checklist</h3>

      <p><strong>9th Grade:</strong></p>
      <ul>
        <li>Meet with counselor to confirm four-year academic plan</li>
        <li>Understand credit requirements for graduation</li>
        <li>Establish strong study habits and time management</li>
        <li>Get involved in meaningful extracurricular activities</li>
        <li>Begin tracking activities, awards, and community service</li>
        <li>Explore summer opportunities (jobs, volunteering, enrichment)</li>
        <li>Develop relationships with teachers and mentors</li>
        <li>Take challenging courses appropriate to ability level</li>
        <li>Begin exploring career interests</li>
        <li>Create a system for organizing school materials</li>
      </ul>

      <p><strong>10th Grade:</strong></p>
      <ul>
        <li>Review and adjust four-year academic plan</li>
        <li>Take PSAT for practice</li>
        <li>Begin researching college options and requirements</li>
        <li>Consider taking SAT Subject Tests in completed courses</li>
        <li>Continue involvement in extracurricular activities</li>
        <li>Update activity and achievement records</li>
        <li>Explore leadership opportunities</li>
        <li>Attend college fairs and information sessions</li>
        <li>Consider job shadowing or career exploration activities</li>
        <li>Research summer programs related to interests</li>
      </ul>

      <p><strong>11th Grade:</strong></p>
      <ul>
        <li>Take challenging courses in areas of strength and interest</li>
        <li>Take PSAT/NMSQT in October</li>
        <li>Prepare for and take SAT and/or ACT (spring)</li>
        <li>Research colleges more intensively</li>
        <li>Visit college campuses when possible</li>
        <li>Meet with college representatives at school</li>
        <li>Take leadership roles in activities</li>
        <li>Update resume and activity records</li>
        <li>Identify potential recommendation writers</li>
        <li>Research scholarship opportunities</li>
        <li>Consider military academy or ROTC options if interested</li>
        <li>Attend college planning and financial aid workshops</li>
      </ul>

      <p><strong>12th Grade:</strong></p>
      <ul>
        <li>Finalize college list with safety, match, and reach schools</li>
        <li>Retake SAT/ACT if needed (early fall)</li>
        <li>Request letters of recommendation</li>
        <li>Complete applications before deadlines</li>
        <li>Submit FAFSA as soon as possible after October 1</li>
        <li>Apply for scholarships throughout the year</li>
        <li>Maintain strong academic performance</li>
        <li>Compare financial aid offers</li>
        <li>Make final college decision by May 1</li>
        <li>Request final transcript be sent to selected college</li>
        <li>Complete housing and orientation registration</li>
        <li>Apply for military-connected benefits if applicable</li>
      </ul>

      <p>The April 2024 article emphasizes that "High school students in military families should be particularly proactive about maintaining detailed records of coursework, activities, and achievements to facilitate transitions between schools." The August 2024 article adds, "Military families should research the specific graduation requirements in potential future locations to ensure students remain on track despite moves."</p>

      <p>These checklists and timelines provide frameworks that can be customized to your family's specific circumstances. They are designed to help you anticipate key milestones and tasks, reducing stress during transitions and ensuring important educational needs are addressed at the appropriate times. Consider creating your own personalized versions based on your children's ages, educational needs, and your family's military situation.</p>

      <h2>Additional Resources by Topic</h2>

      <p>The following resources provide valuable support and information for military families navigating educational challenges. These are organized by topic to help you quickly find the specific assistance you need.</p>

      <h3>Military-Specific Educational Resources</h3>

      <p><strong>Organizations and Programs:</strong></p>
      <ul>
        <li>Military Child Education Coalition (MCEC): <a href="https://www.militarychild.org" target="_blank">www.militarychild.org</a></li>
        <li>Military OneSource Education Resources: <a href="https://www.militaryonesource.mil/education-employment/for-children-and-youth" target="_blank">www.militaryonesource.mil/education-employment/for-children-and-youth</a></li>
        <li>Military Interstate Children's Compact Commission: <a href="https://mic3.net" target="_blank">mic3.net</a></li>
        <li>Tutor.com for Military Families: <a href="https://military.tutor.com" target="_blank">military.tutor.com</a></li>
        <li>DoDEA Educational Partnership: <a href="https://www.dodea.edu/partnership" target="_blank">www.dodea.edu/partnership</a></li>
      </ul>

      <p><strong>School Liaison Program:</strong></p>
      <ul>
        <li>Army School Liaison Officers: <a href="https://www.armymwr.com/programs-and-services/family-assistance/school-liaison-officer" target="_blank">www.armymwr.com/programs-and-services/family-assistance/school-liaison-officer</a></li>
        <li>Navy School Liaison Officers: <a href="https://www.cnic.navy.mil/ffr/family_readiness/fleet_and_family_support_program/work-and-family-life/school_liaison.html" target="_blank">www.cnic.navy.mil/ffr/family_readiness/fleet_and_family_support_program/work-and-family-life/school_liaison.html</a></li>
        <li>Air Force School Liaison Officers: <a href="https://www.afpc.af.mil/Airman-and-Family/School-Liaison-Program" target="_blank">www.afpc.af.mil/Airman-and-Family/School-Liaison-Program</a></li>
        <li>Marine Corps School Liaison Program: <a href="https://usmc-mccs.org/services/family/school-liaison-program" target="_blank">usmc-mccs.org/services/family/school-liaison-program</a></li>
        <li>Coast Guard School Liaison Officers: <a href="https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Education/School-Liaison" target="_blank">www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Education/School-Liaison</a></li>
      </ul>

      <p><strong>Installation School Support:</strong></p>
      <ul>
        <li>DoDEA Schools: <a href="https://www.dodea.edu" target="_blank">www.dodea.edu</a></li>
        <li>Installation Youth Programs: <a href="https://www.militaryonesource.mil/family-relationships/parenting-and-children/youth-programs" target="_blank">www.militaryonesource.mil/family-relationships/parenting-and-children/youth-programs</a></li>
        <li>Military Child and Youth Programs: <a href="https://www.militaryonesource.mil/family-relationships/parenting-and-children/youth-programs/military-youth-programs-and-initiatives-that-create-opportunities-for-children" target="_blank">www.militaryonesource.mil/family-relationships/parenting-and-children/youth-programs/military-youth-programs-and-initiatives-that-create-opportunities-for-children</a></li>
      </ul>

      <p><strong>Online Support:</strong></p>
      <ul>
        <li>Military Kids Connect: <a href="https://militarykidsconnect.health.mil" target="_blank">militarykidsconnect.health.mil</a></li>
        <li>Military Families Learning Network: <a href="https://militaryfamilieslearningnetwork.org" target="_blank">militaryfamilieslearningnetwork.org</a></li>
        <li>Military Child Education Coalition Online Resources: <a href="https://www.militarychild.org/audience/parents" target="_blank">www.militarychild.org/audience/parents</a></li>
      </ul>

      <h3>Educational Planning Resources</h3>

      <p><strong>Academic Support:</strong></p>
      <ul>
        <li>Khan Academy: <a href="https://www.khanacademy.org" target="_blank">www.khanacademy.org</a></li>
        <li>PBS Learning Media: <a href="https://www.pbslearningmedia.org" target="_blank">www.pbslearningmedia.org</a></li>
        <li>Tutor.com for Military Families: <a href="https://military.tutor.com" target="_blank">military.tutor.com</a></li>
        <li>National PTA Parent Guides: <a href="https://www.pta.org/home/family-resources/Parents-Guides-to-Student-Success" target="_blank">www.pta.org/home/family-resources/Parents-Guides-to-Student-Success</a></li>
      </ul>

      <p><strong>College Planning:</strong></p>
      <ul>
        <li>Federal Student Aid: <a href="https://studentaid.gov" target="_blank">studentaid.gov</a></li>
        <li>College Board: <a href="https://www.collegeboard.org" target="_blank">www.collegeboard.org</a></li>
        <li>ACT: <a href="https://www.act.org" target="_blank">www.act.org</a></li>
        <li>Military OneSource College Planning: <a href="https://www.militaryonesource.mil/education-employment/for-children-and-youth/preparing-for-college" target="_blank">www.militaryonesource.mil/education-employment/for-children-and-youth/preparing-for-college</a></li>
        <li>Scholarships for Military Families: <a href="https://www.militaryonesource.mil/education-employment/for-children-and-youth/preparing-for-college/scholarships-for-military-families" target="_blank">www.militaryonesource.mil/education-employment/for-children-and-youth/preparing-for-college/scholarships-for-military-families</a></li>
      </ul>

      <p><strong>Career Exploration:</strong></p>
      <ul>
        <li>O*NET Interest Profiler: <a href="https://www.mynextmove.org/explore/ip" target="_blank">www.mynextmove.org/explore/ip</a></li>
        <li>Career One Stop: <a href="https://www.careeronestop.org" target="_blank">www.careeronestop.org</a></li>
        <li>Bureau of Labor Statistics Career Information: <a href="https://www.bls.gov/k12" target="_blank">www.bls.gov/k12</a></li>
      </ul>

      <h3>Special Education and Learning Support</h3>

      <p><strong>Military-Specific Resources:</strong></p>
      <ul>
        <li>Exceptional Family Member Program (EFMP): <a href="https://www.militaryonesource.mil/family-relationships/special-needs" target="_blank">www.militaryonesource.mil/family-relationships/special-needs</a></li>
        <li>STOMP (Specialized Training of Military Parents): <a href="https://wapave.org/specialized-training-of-military-parents-stomp" target="_blank">wapave.org/specialized-training-of-military-parents-stomp</a></li>
        <li>Military OneSource Special Education Resources: <a href="https://www.militaryonesource.mil/family-relationships/special-needs/special-education-and-childcare" target="_blank">www.militaryonesource.mil/family-relationships/special-needs/special-education-and-childcare</a></li>
      </ul>

      <p><strong>Special Education Information:</strong></p>
      <ul>
        <li>Center for Parent Information and Resources: <a href="https://www.parentcenterhub.org" target="_blank">www.parentcenterhub.org</a></li>
        <li>Understood.org: <a href="https://www.understood.org" target="_blank">www.understood.org</a></li>
        <li>Learning Disabilities Association of America: <a href="https://ldaamerica.org" target="_blank">ldaamerica.org</a></li>
        <li>Council for Exceptional Children: <a href="https://www.cec.sped.org" target="_blank">www.cec.sped.org</a></li>
      </ul>

      <h3>Homeschooling Resources</h3>

      <p><strong>State-Specific Resources:</strong></p>
      <ul>
        <li>Home School Legal Defense Association State Laws: <a href="https://hslda.org/legal" target="_blank">hslda.org/legal</a></li>
        <li>Organization of Virginia Homeschoolers: <a href="https://vahomeschoolers.org" target="_blank">vahomeschoolers.org</a></li>
        <li>Home Educators Association of Virginia: <a href="https://heav.org" target="_blank">heav.org</a></li>
        <li>National Home School Association: <a href="https://www.nationalhomeschoolassociation.com" target="_blank">www.nationalhomeschoolassociation.com</a></li>
      </ul>

      <p><strong>Military Homeschool Support:</strong></p>
      <ul>
        <li>Military Homeschoolers: <a href="https://www.militaryhomeschoolers.com" target="_blank">www.militaryhomeschoolers.com</a></li>
        <li>Military OneSource Homeschooling Resources: <a href="https://www.militaryonesource.mil/education-employment/for-children-and-youth/home-schooling-and-your-military-child" target="_blank">www.militaryonesource.mil/education-employment/for-children-and-youth/home-schooling-and-your-military-child</a></li>
        <li>DoDEA Homeschool Support: <a href="https://www.dodea.edu/parents/homeschooling.cfm" target="_blank">www.dodea.edu/parents/homeschooling.cfm</a></li>
      </ul>

      <h3>Mental Health and Social-Emotional Support</h3>

      <p><strong>Military-Specific Resources:</strong></p>
      <ul>
        <li>Military OneSource Counseling: <a href="https://www.militaryonesource.mil/confidential-help/non-medical-counseling" target="_blank">www.militaryonesource.mil/confidential-help/non-medical-counseling</a></li>
        <li>Military Kids Connect: <a href="https://militarykidsconnect.health.mil" target="_blank">militarykidsconnect.health.mil</a></li>
        <li>FOCUS (Families OverComing Under Stress): <a href="https://focusproject.org" target="_blank">focusproject.org</a></li>
        <li>Military Child Education Coalition Student Support: <a href="https://www.militarychild.org/programs" target="_blank">www.militarychild.org/programs</a></li>
      </ul>

      <p><strong>General Support Resources:</strong></p>
      <ul>
        <li>National Alliance on Mental Illness: <a href="https://www.nami.org" target="_blank">www.nami.org</a></li>
        <li>Child Mind Institute: <a href="https://childmind.org" target="_blank">childmind.org</a></li>
        <li>American Academy of Child & Adolescent Psychiatry Resource Centers: <a href="https://www.aacap.org/AACAP/Families_and_Youth/Resource_Centers" target="_blank">www.aacap.org/AACAP/Families_and_Youth/Resource_Centers</a></li>
      </ul>

      <h3>Summer and Enrichment Programs</h3>

      <p><strong>Reading and Library Programs:</strong></p>
      <ul>
        <li>Central Rappahannock Regional Library: <a href="https://www.librarypoint.org" target="_blank">www.librarypoint.org</a></li>
        <li>Collaborative Summer Library Program: <a href="https://www.cslpreads.org" target="_blank">www.cslpreads.org</a></li>
        <li>Reading Is Fundamental: <a href="https://www.rif.org" target="_blank">www.rif.org</a></li>
        <li>DoD MWR Libraries: <a href="https://www.militaryonesource.mil/recreation-travel-shopping/recreation/libraries/morale-welfare-and-recreation-digital-library" target="_blank">www.militaryonesource.mil/recreation-travel-shopping/recreation/libraries/morale-welfare-and-recreation-digital-library</a></li>
      </ul>

      <p><strong>Military Youth Programs:</strong></p>
      <ul>
        <li>Operation Purple Camp: <a href="https://www.militaryfamily.org/programs/operation-purple/operation-purple-camp" target="_blank">www.militaryfamily.org/programs/operation-purple/operation-purple-camp</a></li>
        <li>Military Teen Adventure Camps: <a href="https://www.aces.edu/blog/topics/military-programs/military-teen-adventure-camps" target="_blank">www.aces.edu/blog/topics/military-programs/military-teen-adventure-camps</a></li>
        <li>Youth Sponsorship Programs: <a href="https://www.militaryonesource.mil/family-relationships/parenting-and-children/youth-programs/ease-the-transition-with-military-youth-sponsorship-programs" target="_blank">www.militaryonesource.mil/family-relationships/parenting-and-children/youth-programs/ease-the-transition-with-military-youth-sponsorship-programs</a></li>
      </ul>

      <p><strong>STEM and Academic Enrichment:</strong></p>
      <ul>
        <li>STARBASE: <a href="https://dodstarbase.org" target="_blank">dodstarbase.org</a></li>
        <li>National STEM Consortium: <a href="https://www.nationalstem.org" target="_blank">www.nationalstem.org</a></li>
        <li>NASA STEM Engagement: <a href="https://www.nasa.gov/stem" target="_blank">www.nasa.gov/stem</a></li>
        <li>Code.org: <a href="https://code.org" target="_blank">code.org</a></li>
      </ul>

      <p>These resources represent just a starting point for the wealth of support available to military families. As you navigate your educational journey, continue to explore new resources and connect with other military families who can share their experiences and recommendations. Remember that your installation School Liaison Officer can help you identify additional local resources specific to your current location and needs.</p>

      <h2>Glossary of Educational Terms</h2>

      <p>This glossary provides definitions for common educational terms and acronyms that military families may encounter during their educational journey. Understanding this terminology can help you navigate school systems, communicate effectively with educators, and advocate for your child's educational needs.</p>

      <h3>Academic Terms</h3>

      <dl>
        <dt>Advanced Placement (AP)</dt>
        <dd>College-level courses offered in high school that allow students to earn college credit through examination.</dd>

        <dt>Benchmark Assessment</dt>
        <dd>Periodic standardized assessments used to measure student progress toward academic goals throughout the school year.</dd>

        <dt>Common Application</dt>
        <dd>A standardized college application form accepted by over 900 colleges and universities, allowing students to apply to multiple institutions using a single application.</dd>

        <dt>Credit Recovery</dt>
        <dd>Programs that allow students to retake failed courses or make up credits needed for graduation.</dd>

        <dt>Dual Enrollment</dt>
        <dd>Programs that allow high school students to take college courses and earn both high school and college credit simultaneously.</dd>

        <dt>Elective Courses</dt>
        <dd>Optional courses that students can choose based on their interests, as opposed to required core academic courses.</dd>

        <dt>Formative Assessment</dt>
        <dd>Ongoing evaluations of student learning used to provide feedback and inform instruction.</dd>

        <dt>GPA (Grade Point Average)</dt>
        <dd>A numerical representation of a student's academic achievement, typically on a scale of 0.0 to 4.0.</dd>

        <dt>Honors Courses</dt>
        <dd>Advanced classes that cover material in greater depth and may carry additional weight in GPA calculations.</dd>

        <dt>International Baccalaureate (IB)</dt>
        <dd>A rigorous international educational program that offers a globally recognized diploma.</dd>
      </dl>

      <h3>Military Education Terms</h3>

      <dl>
        <dt>DoDEA (Department of Defense Education Activity)</dt>
        <dd>The civilian agency that operates schools for military children on installations worldwide.</dd>

        <dt>EFMP (Exceptional Family Member Program)</dt>
        <dd>A mandatory enrollment program for military families with special medical or educational needs.</dd>

        <dt>Interstate Compact</dt>
        <dd>The Interstate Compact on Educational Opportunity for Military Children, an agreement among states to address key educational transition issues for military children.</dd>

        <dt>MFLC (Military Family Life Counselor)</dt>
        <dd>Professionals who provide non-medical counseling services to military families, including school-based support.</dd>

        <dt>PCS (Permanent Change of Station)</dt>
        <dd>The official relocation of an active duty military service member to a different duty location.</dd>

        <dt>School Liaison Officer (SLO)</dt>
        <dd>Military installation staff who serve as the primary point of contact for school-related matters between military families, commands, and schools.</dd>

        <dt>SOFA (Status of Forces Agreement)</dt>
        <dd>Agreements between the U.S. and host nations that may affect educational options for military children stationed overseas.</dd>

        <dt>STOMP (Specialized Training of Military Parents)</dt>
        <dd>A federally funded parent training and information center for military families who have children with special needs.</dd>
      </dl>

      <h3>Educational Systems and Structures</h3>

      <dl>
        <dt>CTE (Career and Technical Education)</dt>
        <dd>Educational programs that specialize in skilled trades, applied sciences, modern technologies, and career preparation.</dd>

        <dt>Common Core State Standards</dt>
        <dd>Educational standards that outline what students should know in English language arts and mathematics at the end of each grade.</dd>

        <dt>ESSA (Every Student Succeeds Act)</dt>
        <dd>Federal legislation that governs U.S. K-12 public education policy, replacing No Child Left Behind.</dd>

        <dt>FERPA (Family Educational Rights and Privacy Act)</dt>
        <dd>Federal law that protects the privacy of student education records and gives parents certain rights regarding their children's educational records.</dd>

        <dt>LEA (Local Education Agency)</dt>
        <dd>A public board of education or other public authority that maintains administrative control of public schools in a city, county, township, or school district.</dd>

        <dt>SEA (State Education Agency)</dt>
        <dd>The state-level government organization responsible for education policy, funding, and oversight within a state.</dd>

        <dt>Title I</dt>
        <dd>Federal program that provides financial assistance to schools with high percentages of children from low-income families.</dd>
      </dl>

      <h3>Assessment and Evaluation Terms</h3>

      <dl>
        <dt>ACT (American College Testing)</dt>
        <dd>A standardized college entrance exam that measures achievement in English, mathematics, reading, and science reasoning.</dd>

        <dt>Criterion-Referenced Test</dt>
        <dd>An assessment that measures student performance against a fixed set of predetermined criteria or learning standards.</dd>

        <dt>EOC (End-of-Course) Exam</dt>
        <dd>Assessments given to students upon completion of a specific course to measure achievement of course standards.</dd>

        <dt>Norm-Referenced Test</dt>
        <dd>An assessment that compares a student's performance to that of other students in a reference group.</dd>

        <dt>PSAT/NMSQT (Preliminary SAT/National Merit Scholarship Qualifying Test)</dt>
        <dd>A practice version of the SAT that also serves as the qualifying test for National Merit Scholarships.</dd>

        <dt>SAT (Scholastic Aptitude Test)</dt>
        <dd>A standardized college entrance exam that measures literacy, numeracy, and writing skills.</dd>

        <dt>Standardized Test</dt>
        <dd>An assessment administered and scored in a consistent manner for all students.</dd>
      </dl>

      <h3>Higher Education Terms</h3>

      <dl>
        <dt>FAFSA (Free Application for Federal Student Aid)</dt>
        <dd>The form used to apply for federal financial aid for college, including grants, work-study, and loans.</dd>

        <dt>MHA (Military Housing Allowance)</dt>
        <dd>A Post-9/11 GI Bill benefit that provides a housing stipend to eligible students.</dd>

        <dt>MyCAA (Military Spouse Career Advancement Accounts)</dt>
        <dd>A workforce development program that provides up to $4,000 of financial assistance to eligible military spouses pursuing licenses, certifications, or associate degrees.</dd>

        <dt>Post-9/11 GI Bill</dt>
        <dd>Education benefits program for service members and veterans who served on active duty after September 10, 2001, which can be transferred to dependents under certain conditions.</dd>

        <dt>ROTC (Reserve Officers' Training Corps)</dt>
        <dd>College-based officer commissioning program that provides scholarships in exchange for military service after graduation.</dd>

        <dt>Yellow Ribbon Program</dt>
        <dd>A provision of the Post-9/11 GI Bill that helps students attend private schools and out-of-state institutions by covering tuition and fees that exceed the highest public in-state undergraduate rate.</dd>
      </dl>

      <h3>Special Education Terminology</h3>

      <dl>
        <dt>504 Plan</dt>
        <dd>A plan developed to ensure that a child with a disability identified under Section 504 of the Rehabilitation Act receives accommodations that ensure their academic success and access to the learning environment.</dd>

        <dt>ADA (Americans with Disabilities Act)</dt>
        <dd>Federal civil rights law that prohibits discrimination against individuals with disabilities in all areas of public life.</dd>

        <dt>FAPE (Free Appropriate Public Education)</dt>
        <dd>Educational right of children with disabilities guaranteed by the IDEA.</dd>

        <dt>IDEA (Individuals with Disabilities Education Act)</dt>
        <dd>Federal law that ensures students with disabilities receive appropriate educational services.</dd>

        <dt>IEP (Individualized Education Program)</dt>
        <dd>A legally binding document that outlines the special education services and accommodations a student with disabilities will receive.</dd>

        <dt>LRE (Least Restrictive Environment)</dt>
        <dd>The requirement that students with disabilities be educated with non-disabled peers to the greatest extent appropriate.</dd>

        <dt>RTI (Response to Intervention)</dt>
        <dd>A multi-tier approach to the early identification and support of students with learning and behavior needs.</dd>
      </dl>

      <h3>General Educational Terminology</h3>

      <dl>
        <dt>Blended Learning</dt>
        <dd>An educational approach that combines online digital media with traditional classroom methods.</dd>

        <dt>Differentiated Instruction</dt>
        <dd>Teaching approach that tailors instruction to meet individual student needs.</dd>

        <dt>ESL/ELL (English as a Second Language/English Language Learner)</dt>
        <dd>Programs and services for students whose primary language is not English.</dd>

        <dt>PBIS (Positive Behavioral Interventions and Supports)</dt>
        <dd>A proactive approach to establishing behavioral supports and social culture needed for all students to achieve social, emotional, and academic success.</dd>

        <dt>PLC (Professional Learning Community)</dt>
        <dd>A group of educators who meet regularly to share expertise and work collaboratively to improve teaching skills and the academic performance of students.</dd>

        <dt>SEL (Social-Emotional Learning)</dt>
        <dd>The process through which children and adults acquire and effectively apply the knowledge, attitudes, and skills necessary to understand and manage emotions, set and achieve positive goals, feel and show empathy for others, establish and maintain positive relationships, and make responsible decisions.</dd>

        <dt>STEM/STEAM (Science, Technology, Engineering, and Mathematics/Science, Technology, Engineering, Arts, and Mathematics)</dt>
        <dd>Interdisciplinary educational approaches that integrate these subject areas.</dd>
      </dl>

      <p>As noted in the April 2024 article, "Understanding educational terminology is essential for military families navigating different school systems. This knowledge empowers parents to effectively advocate for their children during transitions and ensures they can make informed educational decisions."</p>

      <p>The February 2025 article adds, "Military families who master educational terminology are better equipped to navigate the complexities of school transitions, special education services, and college planning. This knowledge serves as a valuable tool in ensuring educational continuity despite the challenges of military life."</p>

      <p>Familiarity with these terms will help you communicate effectively with educators, understand school policies and procedures, and advocate for your child's educational needs throughout your military journey. Keep this glossary as a reference when reviewing school documents, attending meetings, or researching educational options for your family.</p>

      <h2>Military and Educational Support Contacts</h2>

      <p>The following directory provides contact information for key organizations and individuals who can assist military families with educational needs. These contacts offer specialized support for various aspects of education, from school transitions to special education services to college planning.</p>

      <h3>National Military Education Resources</h3>

      <ul>
        <li><strong>Military OneSource Education Consultants</strong><br>
        Phone: 800-342-9647<br>
        Website: <a href="https://www.militaryonesource.mil/education-employment" target="_blank">www.militaryonesource.mil/education-employment</a><br>
        Available 24/7 for personalized education consultation and referrals</li>

        <li><strong>Military Child Education Coalition</strong><br>
        Phone: 254-953-1923<br>
        Email: info@militarychild.org<br>
        Website: <a href="https://www.militarychild.org" target="_blank">www.militarychild.org</a><br>
        Advocacy, resources, and programs for military-connected students</li>

        <li><strong>Military Interstate Children's Compact Commission</strong><br>
        Phone: 859-244-8133<br>
        Email: mic3info@csg.org<br>
        Website: <a href="https://mic3.net" target="_blank">mic3.net</a><br>
        Information and support regarding Interstate Compact implementation</li>

        <li><strong>Tutor.com for Military Families</strong><br>
        Website: <a href="https://military.tutor.com" target="_blank">military.tutor.com</a><br>
        Free online tutoring and homework help for eligible military families</li>
      </ul>

      <h3>Military Branch-Specific School Liaison Programs</h3>

      <ul>
        <li><strong>Army School Liaison Program</strong><br>
        Website: <a href="https://www.armymwr.com/programs-and-services/family-assistance/school-liaison-officer" target="_blank">www.armymwr.com/programs-and-services/family-assistance/school-liaison-officer</a><br>
        Contact your installation's School Liaison Officer through your local Army Community Service</li>

        <li><strong>Navy School Liaison Program</strong><br>
        Website: <a href="https://www.cnic.navy.mil/ffr/family_readiness/fleet_and_family_support_program/work-and-family-life/school_liaison.html" target="_blank">www.cnic.navy.mil/ffr/family_readiness/fleet_and_family_support_program/work-and-family-life/school_liaison.html</a><br>
        Contact your installation's School Liaison Officer through your local Fleet and Family Support Center</li>

        <li><strong>Air Force School Liaison Program</strong><br>
        Website: <a href="https://www.afpc.af.mil/Airman-and-Family/School-Liaison-Program" target="_blank">www.afpc.af.mil/Airman-and-Family/School-Liaison-Program</a><br>
        Contact your installation's School Liaison Officer through your local Airman and Family Readiness Center</li>

        <li><strong>Marine Corps School Liaison Program</strong><br>
        Website: <a href="https://usmc-mccs.org/services/family/school-liaison-program" target="_blank">usmc-mccs.org/services/family/school-liaison-program</a><br>
        Contact your installation's School Liaison Officer through your local Marine Corps Community Services</li>

        <li><strong>Coast Guard School Liaison Program</strong><br>
        Website: <a href="https://www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Education/School-Liaison" target="_blank">www.dcms.uscg.mil/Our-Organization/Assistant-Commandant-for-Human-Resources-CG-1/Health-Safety-and-Work-Life-CG-11/Office-of-Work-Life-CG-111/Education/School-Liaison</a><br>
        Contact your regional School Liaison Officer through your local Work-Life Office</li>
      </ul>

      <h3>Virginia-Specific Resources</h3>

      <ul>
        <li><strong>Daniel Dunham, Military Family Education Specialist</strong><br>
        Virginia Department of Education<br>
        Phone: 804-555-0178<br>
        Email: daniel.dunham@doe.virginia.gov<br>
        Specializes in supporting military families transitioning to Virginia schools</li>

        <li><strong>Sandra Osborn, Deployment Education Coordinator</strong><br>
        Virginia Military Family Support Network<br>
        Phone: 703-555-0291<br>
        Email: s.osborn@vmfsn.org<br>
        Provides resources and support for families during deployment</li>

        <li><strong>Penny Rowley, Military Child Education Advocate</strong><br>
        Virginia Military Family Coalition<br>
        Phone: 757-555-0345<br>
        Email: prowley@vamilitaryfamilies.org<br>
        Advocates for military children's educational needs in Virginia schools</li>

        <li><strong>Virginia Department of Education Military Family Resources</strong><br>
        Website: <a href="https://www.doe.virginia.gov/families/student-and-family-support/military-families" target="_blank">www.doe.virginia.gov/families/student-and-family-support/military-families</a><br>
        State-level resources and information for military families in Virginia</li>
      </ul>

      <h3>Special Education Support Contacts</h3>

      <ul>
        <li><strong>STOMP (Specialized Training of Military Parents)</strong><br>
        Phone: 253-565-2266<br>
        Email: stomp@wapave.org<br>
        Website: <a href="https://wapave.org/specialized-training-of-military-parents-stomp" target="_blank">wapave.org/specialized-training-of-military-parents-stomp</a><br>
        Training and information for military families with children who have special needs</li>

        <li><strong>Exceptional Family Member Program (EFMP)</strong><br>
        Website: <a href="https://www.militaryonesource.mil/family-relationships/special-needs" target="_blank">www.militaryonesource.mil/family-relationships/special-needs</a><br>
        Contact your branch-specific EFMP office through your local installation</li>

        <li><strong>Parent Training and Information Centers</strong><br>
        Website: <a href="https://www.parentcenterhub.org/find-your-center" target="_blank">www.parentcenterhub.org/find-your-center</a><br>
        Locate your state's federally funded center for special education support</li>

        <li><strong>Office of Special Education Programs (OSEP)</strong><br>
        U.S. Department of Education<br>
        Phone: 202-245-7459<br>
        Website: <a href="https://www2.ed.gov/about/offices/list/osers/osep" target="_blank">www2.ed.gov/about/offices/list/osers/osep</a><br>
        Federal oversight of special education programs and resources</li>
      </ul>

      <h3>Higher Education and Financial Aid Contacts</h3>

      <ul>
        <li><strong>Federal Student Aid Information Center</strong><br>
        Phone: 800-433-3243<br>
        Website: <a href="https://studentaid.gov" target="_blank">studentaid.gov</a><br>
        Information about federal financial aid programs and FAFSA assistance</li>

        <li><strong>VA Education Benefits</strong><br>
        GI Bill Hotline: 888-442-4551<br>
        Website: <a href="https://www.va.gov/education" target="_blank">www.va.gov/education</a><br>
        Information about GI Bill benefits and transferability to dependents</li>

        <li><strong>Troops to Teachers</strong><br>
        Website: <a href="https://www.dantes.doded.mil/EducationPrograms/become-a-teacher/troopstoteachers.html" target="_blank">www.dantes.doded.mil/EducationPrograms/become-a-teacher/troopstoteachers.html</a><br>
        Program helping service members and veterans transition to careers in education</li>

        <li><strong>Military Scholars</strong><br>
        Website: <a href="https://www.militaryscholar.org" target="_blank">www.militaryscholar.org</a><br>
        Scholarship information for military children and spouses</li>
      </ul>

      <h3>Crisis and Mental Health Support</h3>

      <ul>
        <li><strong>Military Crisis Line</strong><br>
        Phone: 988, then press 1<br>
        Text: 838255<br>
        Website: <a href="https://www.veteranscrisisline.net/get-help-now/military-crisis-line" target="_blank">www.veteranscrisisline.net/get-help-now/military-crisis-line</a><br>
        24/7 crisis support for service members, veterans, and their families</li>

        <li><strong>Military OneSource Non-medical Counseling</strong><br>
        Phone: 800-342-9647<br>
        Website: <a href="https://www.militaryonesource.mil/confidential-help/non-medical-counseling" target="_blank">www.militaryonesource.mil/confidential-help/non-medical-counseling</a><br>
        Free, confidential counseling services for military families</li>

        <li><strong>FOCUS (Families OverComing Under Stress)</strong><br>
        Website: <a href="https://focusproject.org" target="_blank">focusproject.org</a><br>
        Resilience training for military families facing challenges</li>

        <li><strong>Military Family Life Counselors (MFLCs)</strong><br>
        Contact through your installation's family support center<br>
        Non-medical counseling services, including school-based support</li>
      </ul>

      <h3>Homeschool Support Contacts</h3>

      <ul>
        <li><strong>Organization of Virginia Homeschoolers</strong><br>
        Phone: 866-513-6173<br>
        Email: office@vahomeschoolers.org<br>
        Website: <a href="https://vahomeschoolers.org" target="_blank">vahomeschoolers.org</a><br>
        Support and information for homeschooling families in Virginia</li>

        <li><strong>Home Educators Association of Virginia</strong><br>
        Phone: 804-278-9200<br>
        Email: office@heav.org<br>
        Website: <a href="https://heav.org" target="_blank">heav.org</a><br>
        Resources, events, and support for Virginia homeschoolers</li>

        <li><strong>Home School Legal Defense Association</strong><br>
        Phone: 540-338-5600<br>
        Website: <a href="https://hslda.org" target="_blank">hslda.org</a><br>
        Legal information and support for homeschooling families</li>

        <li><strong>Military Homeschoolers</strong><br>
        Website: <a href="https://www.militaryhomeschoolers.com" target="_blank">www.militaryhomeschoolers.com</a><br>
        Resources specifically for military families who homeschool</li>
      </ul>

      <h3>Youth Programs and Enrichment</h3>

      <ul>
        <li><strong>Military Kids Connect</strong><br>
        Website: <a href="https://militarykidsconnect.health.mil" target="_blank">militarykidsconnect.health.mil</a><br>
        Online community and resources for military children</li>

        <li><strong>Operation Purple Camp</strong><br>
        National Military Family Association<br>
        Phone: 703-931-6632<br>
        Website: <a href="https://www.militaryfamily.org/programs/operation-purple/operation-purple-camp" target="_blank">www.militaryfamily.org/programs/operation-purple/operation-purple-camp</a><br>
        Free summer camps for military children</li>

        <li><strong>4-H Military Partnerships</strong><br>
        Website: <a href="https://4-h.org/parents/military-youth" target="_blank">4-h.org/parents/military-youth</a><br>
        4-H programs specifically for military youth</li>

        <li><strong>Boys & Girls Clubs of America Military Partnership</strong><br>
        Website: <a href="https://www.bgca.org/about-us/military-partnership" target="_blank">www.bgca.org/about-us/military-partnership</a><br>
        Programs and support for military youth</li>
      </ul>

      <h3>Employment and Career Resources for Military Teens and Spouses</h3>

      <ul>
        <li><strong>Military Spouse Employment Partnership</strong><br>
        Website: <a href="https://msepjobs.militaryonesource.mil" target="_blank">msepjobs.militaryonesource.mil</a><br>
        Career opportunities for military spouses</li>

        <li><strong>MyCAA (Military Spouse Career Advancement Accounts)</strong><br>
        Phone: 800-342-9647<br>
        Website: <a href="https://mycaa.militaryonesource.mil" target="_blank">mycaa.militaryonesource.mil</a><br>
        Financial assistance for military spouse education and career training</li>

        <li><strong>DoD SkillBridge</strong><br>
        Website: <a href="https://skillbridge.osd.mil" target="_blank">skillbridge.osd.mil</a><br>
        Career skills program for transitioning service members</li>

        <li><strong>Military Teen Career Connect</strong><br>
        Website: <a href="https://www.militaryteencareerconnect.org" target="_blank">www.militaryteencareerconnect.org</a><br>
        Career exploration and preparation resources for military teens</li>
      </ul>

      <p>These contacts represent key resources available to support military families throughout their educational journey. As noted in the January 2025 article, "Building a network of educational support contacts is essential for military families navigating frequent transitions. These connections provide continuity and expertise that can make a significant difference in educational outcomes."</p>

      <p>The August 2024 article emphasizes that "Military families should not hesitate to reach out to these resources early and often. These professionals understand the unique challenges of military life and can provide targeted assistance that addresses your specific situation."</p>

      <p>Keep this directory accessible and don't hesitate to reach out when you need assistance. These organizations and individuals are dedicated to supporting military families and can provide valuable guidance, resources, and advocacy throughout your educational journey.</p>
    `},{id:"conclusion",title:"Conclusion: Navigating the Journey Together",content:`
      <p>As we conclude this guide, it's important to remember that throughout your child's educational journey, you remain their most important advocate and support. Military life brings unique challenges to education, but it also offers extraordinary opportunities for growth, resilience, and global perspective that few other children experience.</p>

      <h2>The Military Parent Advantage</h2>

      <p>Military children develop unique strengths that often set them apart from their civilian peers. These advantages become assets not just in their educational journey but throughout their lives:</p>

      <p><strong>Global Perspective:</strong></p>
      <ul>
        <li>Exposure to diverse cultures, languages, and educational systems</li>
        <li>Firsthand understanding of global geography and international relations</li>
        <li>Appreciation for different perspectives and approaches to learning</li>
        <li>Comfort with diversity and cross-cultural communication</li>
      </ul>

      <p><strong>Adaptability:</strong></p>
      <ul>
        <li>Ability to adjust quickly to new environments and expectations</li>
        <li>Flexibility in learning styles and approaches</li>
        <li>Comfort with change and transition</li>
        <li>Resilience in the face of challenges</li>
      </ul>

      <p><strong>Independence:</strong></p>
      <ul>
        <li>Self-reliance and problem-solving skills</li>
        <li>Confidence in new situations</li>
        <li>Ability to advocate for their own needs</li>
        <li>Maturity beyond their years in handling responsibilities</li>
      </ul>

      <p><strong>Community Connection:</strong></p>
      <ul>
        <li>Understanding the value of building relationships quickly</li>
        <li>Experience in finding community resources and support</li>
        <li>Appreciation for the strength found in diverse communities</li>
        <li>Skills in establishing connections in new environments</li>
      </ul>

      <p><strong>Purpose and Service:</strong></p>
      <ul>
        <li>Understanding of sacrifice for a greater good</li>
        <li>Appreciation for civic responsibility and service</li>
        <li>Recognition of how individual roles contribute to larger missions</li>
        <li>Pride in being part of the military community</li>
      </ul>

      <h2>Putting It All Together: An Integrated Approach</h2>

      <p>Throughout this guide, we've explored various aspects of supporting your military child's education. As you move forward, consider these integrated approaches that bring together the key principles we've discussed:</p>

      <p><strong>Informed Advocacy:</strong></p>
      <ul>
        <li>Maintain comprehensive educational records</li>
        <li>Understand your rights under the Interstate Compact</li>
        <li>Build relationships with key school personnel at each new location</li>
        <li>Connect with School Liaison Officers and other military support resources</li>
        <li>Stay informed about educational options and opportunities</li>
      </ul>

      <p><strong>Proactive Planning:</strong></p>
      <ul>
        <li>Anticipate transitions and prepare for them educationally</li>
        <li>Research school options before PCS moves</li>
        <li>Develop contingency plans for deployments and training periods</li>
        <li>Create systems for maintaining educational continuity</li>
        <li>Establish consistent routines that can travel with your family</li>
      </ul>

      <p><strong>Community Building:</strong></p>
      <ul>
        <li>Connect with other military families for support and information</li>
        <li>Engage with school communities at each location</li>
        <li>Utilize installation and community resources</li>
        <li>Help your child build social connections in each new environment</li>
        <li>Maintain relationships across moves through technology</li>
      </ul>

      <p><strong>Resilience Development:</strong></p>
      <ul>
        <li>Frame challenges as opportunities for growth</li>
        <li>Celebrate adaptability and flexibility</li>
        <li>Acknowledge difficulties while focusing on solutions</li>
        <li>Model positive responses to change and transition</li>
        <li>Build confidence through progressive independence</li>
      </ul>

      <p><strong>Balance Maintenance:</strong></p>
      <ul>
        <li>Prioritize family time amid busy schedules</li>
        <li>Create space for both academic and social-emotional needs</li>
        <li>Recognize when to push and when to provide extra support</li>
        <li>Balance military obligations with educational priorities</li>
        <li>Take care of your own well-being to better support your child</li>
      </ul>

      <h2>Evolving Support Through Developmental Stages</h2>

      <p>Your role as a military parent evolves as your child grows. Understanding these changing needs helps you provide appropriate support at each stage:</p>

      <p><strong>Early Childhood:</strong></p>
      <ul>
        <li>Focus on creating security and stability amid change</li>
        <li>Establish consistent routines that travel with your family</li>
        <li>Use simple, concrete explanations for military-related changes</li>
        <li>Build strong foundations in early literacy and numeracy</li>
        <li>Emphasize play-based learning and social development</li>
      </ul>

      <p><strong>Elementary Years:</strong></p>
      <ul>
        <li>Maintain close communication with teachers</li>
        <li>Monitor academic progress across transitions</li>
        <li>Address learning gaps promptly when they appear</li>
        <li>Support development of organizational skills</li>
        <li>Help build positive peer relationships in each new location</li>
      </ul>

      <p><strong>Middle School:</strong></p>
      <ul>
        <li>Balance monitoring with increasing independence</li>
        <li>Support development of self-advocacy skills</li>
        <li>Help navigate more complex social dynamics</li>
        <li>Begin conversations about long-term educational goals</li>
        <li>Address identity development amid frequent changes</li>
      </ul>

      <p><strong>High School:</strong></p>
      <ul>
        <li>Focus on educational continuity for graduation requirements</li>
        <li>Support college and career exploration</li>
        <li>Help manage complex planning for post-secondary transitions</li>
        <li>Encourage leadership and extracurricular involvement</li>
        <li>Prepare for potential independent living skills</li>
      </ul>

      <p><strong>Beyond High School:</strong></p>
      <ul>
        <li>Transition to consultant rather than manager role</li>
        <li>Support navigation of military-connected benefits for education</li>
        <li>Help maintain connections during college or early career transitions</li>
        <li>Celebrate the independence and resilience developed through military life</li>
        <li>Continue providing the stable base from which they can launch</li>
      </ul>

      <h2>Final Thoughts</h2>

      <p>The educational journey of a military child is unique—filled with both extraordinary challenges and remarkable opportunities. Through your consistent support, advocacy, and guidance, you help transform the potential disruptions of military life into stepping stones for growth and achievement.</p>

      <p>As noted in the April 2025 article: "The military community and our village are truly amazing. Even more incredible is the resiliency of military children."</p>

      <p>This resilience doesn't develop by accident—it grows through the intentional support you provide, the systems you establish, and the example you set. By applying the strategies and resources in this guide, you help your child not just survive but thrive educationally throughout your military journey.</p>

      <p>Remember that you're not alone in this mission. The military community, school personnel, and the resources identified throughout this guide stand ready to support you and your child. Together, we can ensure that the children of those who serve our nation receive the educational opportunities they deserve.</p>

      <p>Thank you for your family's service and sacrifice. The educational foundation you help build for your child today will serve them throughout their lifetime, wherever their journey takes them.</p>
    `}],dj=()=>{const{chapterId:t}=kw(),l=Zu(),[o,s]=T.useState(null),[c,h]=T.useState(null),p=T.useRef(null),f=S=>{const D=new DOMParser().parseFromString(S,"text/html").querySelectorAll("h2, h3"),M=[];return D.forEach((V,z)=>{const N=V.id||`section-${z}`;V.id=N,M.push({id:N,title:V.textContent,level:V.tagName==="H2"?2:3})}),M},m=S=>{setTimeout(()=>{var R,D;const C=document.getElementById(S);if(C){console.log(`Scrolling to section: ${S}`,C);const M=((R=document.querySelector(".utility-bar"))==null?void 0:R.offsetHeight)||0,V=((D=document.querySelector("header"))==null?void 0:D.offsetHeight)||0,z=M+V+20,N=C.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:N-z,behavior:"smooth"}),window.history.pushState(null,"",`#${S}`),h(S)}else console.warn(`Element with ID ${S} not found`)},50)};T.useEffect(()=>{const S=fl.find(C=>C.id===t);S?(s(S),S.content&&!S.sections&&(S.extractedSections=f(S.content))):l("/not-found")},[t,l]),T.useEffect(()=>{if(!o||!p.current)return;p.current.querySelectorAll("h2, h3").forEach((R,D)=>{R.id||(R.id=`section-${D}`)});const C=window.location.hash;if(C){const R=C.substring(1);setTimeout(()=>{m(R)},300)}},[o]),T.useEffect(()=>{if(!o||!p.current)return;const S=()=>{var L,W;const D=o.sections||o.extractedSections||[];if(D.length===0)return;const M=((L=document.querySelector(".utility-bar"))==null?void 0:L.offsetHeight)||0,V=((W=document.querySelector("header"))==null?void 0:W.offsetHeight)||0,z=M+V+20;let N=null;for(let K=D.length-1;K>=0;K--){const Q=D[K],ie=document.getElementById(Q.id);if(ie&&ie.getBoundingClientRect().top<=z+50){N=Q.id;break}}N&&N!==c&&(h(N),window.location.hash!==`#${N}`&&window.history.replaceState(null,"",`#${N}`))};let C=!1;const R=()=>{C||(window.requestAnimationFrame(()=>{S(),C=!1}),C=!0)};return window.addEventListener("scroll",R,{passive:!0}),S(),()=>{window.removeEventListener("scroll",R)}},[o,c]);const g=()=>{const S=document.getElementById("chapter-content");if(S){const C=window.open("","_blank");C.document.write(`
        <html>
          <head>
            <title>${o.title} - Military Family Education Guide</title>
            <style>
              body {
                font-family: 'Open Sans', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                padding: 40px;
                max-width: 800px;
                margin: 0 auto;
              }
              h1, h2, h3 {
                font-family: 'Bebas Neue', Arial, sans-serif;
                color: #003260;
              }
              h1 {
                font-size: 28px;
                margin-bottom: 20px;
                color: #7A003C;
              }
              h2 {
                font-size: 24px;
                margin-top: 30px;
                border-bottom: 1px solid #ddd;
                padding-bottom: 10px;
              }
              h3 {
                font-size: 20px;
                margin-top: 25px;
              }
              p {
                margin-bottom: 16px;
              }
              ul, ol {
                margin-bottom: 20px;
                padding-left: 20px;
              }
              li {
                margin-bottom: 8px;
              }
              .footer {
                margin-top: 50px;
                text-align: center;
                font-size: 12px;
                color: #666;
                border-top: 1px solid #ddd;
                padding-top: 20px;
              }
            </style>
          </head>
          <body>
            <h1>${o.title}</h1>
            ${S.innerHTML}
            <div class="footer">
              <p>Military Family Education Guide © ${new Date().getFullYear()}</p>
            </div>
          </body>
        </html>
      `),C.document.close(),C.focus(),setTimeout(()=>{C.print()},500)}};if(!o)return r.jsxs("div",{children:[r.jsx("div",{style:{backgroundColor:"#003260",color:"white",padding:"3rem 1rem"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[r.jsx(Xe,{type:"title",width:"60%",height:"40px"}),r.jsx("div",{style:{width:"150px",height:"40px",backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"4px"}})]})}),r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem"},children:[r.jsxs("div",{style:{marginBottom:"2rem",display:"flex",alignItems:"center"},children:[r.jsx(Xe,{width:"50px",height:"16px"}),r.jsx("span",{style:{margin:"0 0.5rem"},children:"/"}),r.jsx(Xe,{width:"150px",height:"16px"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"2rem"},children:window.innerWidth>=768?r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"3fr 1fr",gap:"2rem"},children:[r.jsxs("div",{children:[r.jsx(Xe,{type:"title",width:"80%"}),r.jsx(Xe,{type:"text",lines:6}),r.jsx(Xe,{type:"title",width:"60%"}),r.jsx(Xe,{type:"text",lines:4})]}),r.jsx("div",{children:r.jsx(Xe,{type:"sidebar",height:"300px"})})]}):r.jsxs("div",{children:[r.jsx(Xe,{type:"title",width:"80%"}),r.jsx(Xe,{type:"text",lines:6}),r.jsx(Xe,{type:"title",width:"60%"}),r.jsx(Xe,{type:"text",lines:4})]})}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"3rem",borderTop:"1px solid #e0e0e0",paddingTop:"1.5rem"},children:[r.jsx("div",{style:{width:"120px",height:"40px",backgroundColor:"#f0f0f0",borderRadius:"4px"}}),r.jsx("div",{style:{width:"120px",height:"40px",backgroundColor:"#f0f0f0",borderRadius:"4px"}})]})]})]});const y=fl.findIndex(S=>S.id===o.id),b=y>0?fl[y-1]:null,w=y<fl.length-1?fl[y+1]:null;return r.jsxs("div",{children:[r.jsx(uj,{}),r.jsx("div",{style:{backgroundColor:"#003260",color:"white",padding:"3rem 1rem"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[r.jsx("h1",{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",marginBottom:"1rem"},children:o.title}),r.jsxs(ue.button,{onClick:g,style:{display:"inline-flex",alignItems:"center",padding:"0.75rem 1.25rem",backgroundColor:"#F6C100",color:"#003260",border:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"600",cursor:"pointer"},whileHover:{backgroundColor:"#e5b100",scale:1.05},whileTap:{scale:.95},transition:{duration:.2},children:[r.jsxs(ue.svg,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},initial:{y:0},animate:{y:[0,-2,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop",ease:"easeInOut",repeatDelay:1},children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"7 10 12 15 17 10"}),r.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),"Export PDF"]})]})}),r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem"},children:[r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx(Y,{to:"/",style:{color:"#005F81",textDecoration:"none"},children:"Home"}),r.jsx("span",{style:{margin:"0 0.5rem"},children:"/"}),r.jsx("span",{children:o.title})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"2rem"},children:[window.innerWidth>=768&&r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"3fr 1fr",gap:"2rem"},children:[r.jsx(ue.div,{ref:p,id:"chapter-content",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeOut",staggerChildren:.1},dangerouslySetInnerHTML:{__html:o.content}}),r.jsxs("div",{children:[o.extractedSections&&o.extractedSections.length>0&&r.jsx(cj,{sections:o.extractedSections,chapterId:o.id,activeSection:c,onSectionClick:m}),r.jsxs("div",{style:{backgroundColor:"#f0f0f0",padding:"1.5rem",borderRadius:"0.5rem",marginTop:o.extractedSections&&o.extractedSections.length>0?"2rem":"0"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",marginBottom:"1rem"},children:"Chapters"}),r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:fl.map(S=>r.jsx("li",{style:{marginBottom:"0.5rem"},children:r.jsx(Y,{to:`/guide/${S.id}`,style:{color:S.id===o.id?"#7A003C":"#005F81",fontWeight:S.id===o.id?"600":"400",textDecoration:"none"},children:S.title.split(":")[0]})},S.id))})]})]})]}),window.innerWidth<768&&r.jsx(ue.div,{ref:p,id:"chapter-content",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeOut",staggerChildren:.1},dangerouslySetInnerHTML:{__html:o.content}})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"3rem",borderTop:"1px solid #e0e0e0",paddingTop:"1.5rem"},children:[b?r.jsx(ue.div,{whileHover:{scale:1.03},whileTap:{scale:.97},children:r.jsxs(Y,{to:`/guide/${b.id}`,className:"btn btn-outline",style:{display:"inline-flex",alignItems:"center",padding:"0.75rem 1.25rem",backgroundColor:"white",color:"#005F81",textDecoration:"none",borderRadius:"0.25rem",border:"1px solid #005F81",fontFamily:"Montserrat, sans-serif",fontWeight:"500",transition:"all 0.3s ease"},onMouseOver:S=>{S.currentTarget.style.backgroundColor="#005F81",S.currentTarget.style.color="white"},onMouseOut:S=>{S.currentTarget.style.backgroundColor="white",S.currentTarget.style.color="#005F81"},children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"0.5rem"},children:r.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),b.title.split(":")[0]]})}):r.jsx("div",{}),w&&r.jsx(ue.div,{whileHover:{scale:1.03},whileTap:{scale:.97},children:r.jsxs(Y,{to:`/guide/${w.id}`,className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",padding:"0.75rem 1.25rem",backgroundColor:"#7A003C",color:"white",textDecoration:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",transition:"all 0.3s ease"},onMouseOver:S=>{S.currentTarget.style.backgroundColor="#5a002c"},onMouseOut:S=>{S.currentTarget.style.backgroundColor="#7A003C"},children:[w.title.split(":")[0],r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"0.5rem"},children:r.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})]})},hj=[{id:"dodea",term:"DoDEA",definition:"Department of Defense Education Activity. The civilian agency within the Department of Defense that operates schools for military children worldwide."},{id:"efmp",term:"EFMP",definition:"Exceptional Family Member Program. A mandatory enrollment program for military family members with special medical or educational needs."},{id:"iep",term:"IEP",definition:"Individualized Education Program. A legal document that outlines special education services, supports, and accommodations a child will receive."},{id:"mcec",term:"MCEC",definition:"Military Child Education Coalition. A non-profit organization focused on ensuring quality educational opportunities for military children."},{id:"pcs",term:"PCS",definition:"Permanent Change of Station. The official relocation of an active duty military service member to a different duty location."},{id:"slo",term:"SLO",definition:"School Liaison Officer. Military personnel who serve as the primary point of contact for school-related matters between military families, schools, and the military installation."},{id:"504-plan",term:"504 Plan",definition:"A plan developed to ensure that a child with a disability identified under Section 504 of the Rehabilitation Act receives accommodations to access the learning environment."},{id:"impact-aid",term:"Impact Aid",definition:"Federal funds provided to school districts that serve children residing on military installations or other federal property."},{id:"mic3",term:"MIC3",definition:"Military Interstate Children's Compact Commission. An agreement among states to address key educational transition issues for military children."},{id:"mflc",term:"MFLC",definition:"Military Family Life Counselor. Provides non-medical counseling services to military service members and their families."},{id:"cyp",term:"CYP",definition:"Child and Youth Programs. Military-operated programs that provide child care and youth activities on installations."},{id:"tricare",term:"TRICARE",definition:"The health care program for uniformed service members, retirees, and their families."}],pj=t=>{const l={};return t.forEach(o=>{const s=o.term.charAt(0).toUpperCase();l[s]||(l[s]=[]),l[s].push(o)}),l},fj=()=>{const[t,l]=T.useState(""),o=hj.filter(p=>p.term.toLowerCase().includes(t.toLowerCase())||p.definition.toLowerCase().includes(t.toLowerCase())),s=pj(o),c=Object.keys(s).sort(),h=Array.from({length:26},(p,f)=>String.fromCharCode(65+f));return r.jsxs("div",{children:[r.jsx("div",{style:{backgroundColor:"#003260",color:"white",padding:"3rem 1rem"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[r.jsx("h1",{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",marginBottom:"1rem"},children:"Glossary of Military Education Terms"}),r.jsx("p",{style:{maxWidth:"800px",marginBottom:"2rem"},children:"This glossary provides definitions for common terms, acronyms, and programs related to military education."})]})}),r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem"},children:[r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx(Y,{to:"/",style:{color:"#0071bc",textDecoration:"none"},children:"Home"}),r.jsx("span",{style:{margin:"0 0.5rem"},children:"/"}),r.jsx("span",{children:"Glossary"})]}),r.jsx("div",{style:{marginBottom:"2rem"},children:r.jsx("input",{type:"text",placeholder:"Search glossary terms...",value:t,onChange:p=>l(p.target.value),style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem",fontSize:"1rem"}})}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"2rem"},children:h.map(p=>r.jsx("a",{href:`#${p}`,style:{display:"inline-block",width:"2rem",height:"2rem",lineHeight:"2rem",textAlign:"center",backgroundColor:c.includes(p)?"#003260":"#e0e0e0",color:c.includes(p)?"white":"#666",borderRadius:"50%",textDecoration:"none",fontWeight:"500"},children:p},p))}),c.length>0?c.map(p=>r.jsxs("div",{id:p,style:{marginBottom:"2rem"},children:[r.jsx("h2",{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2rem",borderBottom:"2px solid #003260",paddingBottom:"0.5rem",marginBottom:"1rem"},children:p}),r.jsx("dl",{children:s[p].map(f=>r.jsxs("div",{style:{marginBottom:"1.5rem"},children:[r.jsx("dt",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"0.5rem"},children:f.term}),r.jsx("dd",{style:{marginLeft:"0",lineHeight:"1.5"},children:f.definition})]},f.id))})]},p)):r.jsx("div",{style:{textAlign:"center",padding:"3rem 0"},children:r.jsx("p",{children:"No glossary terms found matching your search."})})]})]})},mj=()=>{const[t,l]=T.useState({name:"",email:"",subject:"",message:""}),[o,s]=T.useState(!1),c=p=>{const{name:f,value:m}=p.target;l(g=>({...g,[f]:m}))},h=p=>{p.preventDefault(),console.log("Form submitted:",t),s(!0),l({name:"",email:"",subject:"",message:""})};return r.jsxs("div",{children:[r.jsx("div",{style:{backgroundColor:"#003260",color:"white",padding:"3rem 1rem"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[r.jsx("h1",{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",marginBottom:"1rem"},children:"Contact Us"}),r.jsx("p",{style:{maxWidth:"800px",marginBottom:"2rem"},children:"Have questions about military education resources? We're here to help."})]})}),r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem"},children:[r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx(Y,{to:"/",style:{color:"#0071bc",textDecoration:"none"},children:"Home"}),r.jsx("span",{style:{margin:"0 0.5rem"},children:"/"}),r.jsx("span",{children:"Contact Us"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"2rem"},children:[window.innerWidth>=768&&r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[r.jsxs("div",{children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",marginBottom:"1.5rem"},children:"Send Us a Message"}),o?r.jsx("div",{style:{backgroundColor:"#e6f7e6",border:"1px solid #c3e6cb",color:"#155724",padding:"1rem",borderRadius:"0.25rem",marginBottom:"1rem"},children:r.jsx("p",{children:"Thank you for your message! We'll get back to you as soon as possible."})}):null,r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Your Name *"}),r.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:c,required:!0,style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem"}})]}),r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Email Address *"}),r.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:c,required:!0,style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem"}})]}),r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{htmlFor:"subject",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Subject *"}),r.jsx("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:c,required:!0,style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem"}})]}),r.jsxs("div",{style:{marginBottom:"1.5rem"},children:[r.jsx("label",{htmlFor:"message",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Message *"}),r.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:c,required:!0,rows:"6",style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem",resize:"vertical"}})]}),r.jsx("button",{type:"submit",style:{backgroundColor:"#003260",color:"white",padding:"0.75rem 1.5rem",border:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",cursor:"pointer"},children:"Send Message"})]})]}),r.jsxs("div",{children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",marginBottom:"1.5rem"},children:"Contact Information"}),r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"0.75rem"},children:"Military Family Education Guide"}),r.jsx("p",{style:{marginBottom:"0.5rem"},children:"123 Military Support Lane"}),r.jsx("p",{style:{marginBottom:"0.5rem"},children:"Arlington, VA 22201"}),r.jsx("p",{style:{marginBottom:"0.5rem"},children:"United States"})]}),r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"0.75rem"},children:"Contact Details"}),r.jsxs("p",{style:{marginBottom:"0.5rem"},children:[r.jsx("strong",{children:"Email:"})," info@militaryfamilyeducation.org"]}),r.jsxs("p",{style:{marginBottom:"0.5rem"},children:[r.jsx("strong",{children:"Phone:"})," (555) 123-4567"]}),r.jsxs("p",{style:{marginBottom:"0.5rem"},children:[r.jsx("strong",{children:"Hours:"})," Monday-Friday, 9:00 AM - 5:00 PM EST"]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"0.75rem"},children:"Follow Us"}),r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"Facebook"}),r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"Twitter"}),r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"Instagram"}),r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"LinkedIn"})]})]})]})]}),window.innerWidth<768&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",marginBottom:"1.5rem"},children:"Send Us a Message"}),o?r.jsx("div",{style:{backgroundColor:"#e6f7e6",border:"1px solid #c3e6cb",color:"#155724",padding:"1rem",borderRadius:"0.25rem",marginBottom:"1rem"},children:r.jsx("p",{children:"Thank you for your message! We'll get back to you as soon as possible."})}):null,r.jsxs("form",{onSubmit:h,children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Your Name *"}),r.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:c,required:!0,style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem"}})]}),r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Email Address *"}),r.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:c,required:!0,style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem"}})]}),r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx("label",{htmlFor:"subject",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Subject *"}),r.jsx("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:c,required:!0,style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem"}})]}),r.jsxs("div",{style:{marginBottom:"1.5rem"},children:[r.jsx("label",{htmlFor:"message",style:{display:"block",marginBottom:"0.5rem",fontWeight:"500"},children:"Message *"}),r.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:c,required:!0,rows:"6",style:{width:"100%",padding:"0.75rem",border:"1px solid #ccc",borderRadius:"0.25rem",resize:"vertical"}})]}),r.jsx("button",{type:"submit",style:{backgroundColor:"#003260",color:"white",padding:"0.75rem 1.5rem",border:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",cursor:"pointer"},children:"Send Message"})]})]}),r.jsxs("div",{children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",marginBottom:"1.5rem"},children:"Contact Information"}),r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"0.75rem"},children:"Military Family Education Guide"}),r.jsx("p",{style:{marginBottom:"0.5rem"},children:"123 Military Support Lane"}),r.jsx("p",{style:{marginBottom:"0.5rem"},children:"Arlington, VA 22201"}),r.jsx("p",{style:{marginBottom:"0.5rem"},children:"United States"})]}),r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"0.75rem"},children:"Contact Details"}),r.jsxs("p",{style:{marginBottom:"0.5rem"},children:[r.jsx("strong",{children:"Email:"})," info@militaryfamilyeducation.org"]}),r.jsxs("p",{style:{marginBottom:"0.5rem"},children:[r.jsx("strong",{children:"Phone:"})," (555) 123-4567"]}),r.jsxs("p",{style:{marginBottom:"0.5rem"},children:[r.jsx("strong",{children:"Hours:"})," Monday-Friday, 9:00 AM - 5:00 PM EST"]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"0.75rem"},children:"Follow Us"}),r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"Facebook"}),r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"Twitter"}),r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"Instagram"}),r.jsx("a",{href:"#",style:{color:"#003260",textDecoration:"none"},children:"LinkedIn"})]})]})]})]})]})]})]})},gj=()=>r.jsxs("div",{children:[r.jsx("div",{style:{backgroundColor:"#003260",color:"white",padding:"3rem 1rem"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[r.jsx("h1",{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",marginBottom:"1rem"},children:"About the Military Family Education Guide"}),r.jsx("p",{style:{maxWidth:"800px",marginBottom:"2rem"},children:"Supporting military families through educational transitions and challenges."})]})}),r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem"},children:[r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx(Y,{to:"/",style:{color:"#0071bc",textDecoration:"none"},children:"Home"}),r.jsx("span",{style:{margin:"0 0.5rem"},children:"/"}),r.jsx("span",{children:"About Us"})]}),r.jsxs("section",{style:{marginBottom:"3rem"},children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.75rem",marginBottom:"1.5rem",color:"#003260"},children:"Our Mission"}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"1.5rem"},children:"The Military Family Education Guide is dedicated to supporting military families as they navigate the unique educational challenges that come with military life. Our mission is to provide comprehensive, accessible resources that empower military families to make informed decisions about their children's education despite frequent relocations, deployments, and other military-specific challenges."}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.6"},children:"We believe that every military child deserves educational continuity and excellence, regardless of how often they move or where they are stationed. Through our guide, we aim to bridge the information gap and connect military families with the resources they need to advocate effectively for their children's education."})]}),r.jsxs("section",{style:{marginBottom:"3rem"},children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.75rem",marginBottom:"1.5rem",color:"#003260"},children:"Who We Are"}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"1.5rem"},children:"The Military Family Education Guide was created by a team of educators, military family advocates, and military-connected individuals who understand firsthand the challenges of maintaining educational continuity in military life. Our team includes:"}),r.jsxs("ul",{style:{fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"1.5rem",paddingLeft:"1.5rem"},children:[r.jsx("li",{style:{marginBottom:"0.75rem"},children:"Former military children who experienced multiple school transitions"}),r.jsx("li",{style:{marginBottom:"0.75rem"},children:"Military spouses with backgrounds in education and child development"}),r.jsx("li",{style:{marginBottom:"0.75rem"},children:"Educators with experience in schools serving military-connected students"}),r.jsx("li",{style:{marginBottom:"0.75rem"},children:"Education policy experts focused on military family issues"}),r.jsx("li",{children:"Military family support professionals"})]}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.6"},children:"Together, we bring a wealth of personal and professional experience to create resources that are practical, relevant, and responsive to the real needs of military families."})]}),r.jsxs("section",{style:{marginBottom:"3rem"},children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.75rem",marginBottom:"1.5rem",color:"#003260"},children:"What We Offer"}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"1.5rem"},children:"The Military Family Education Guide provides:"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:window.innerWidth>=768?"repeat(2, 1fr)":"1fr",gap:"2rem"},children:[r.jsxs("div",{style:{backgroundColor:"#f0f0f0",padding:"1.5rem",borderRadius:"0.5rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"1rem",color:"#003260"},children:"Comprehensive Information"}),r.jsx("p",{style:{lineHeight:"1.6"},children:"Detailed chapters covering all stages of education from early childhood through post-secondary options, with special attention to military-specific challenges and opportunities."})]}),r.jsxs("div",{style:{backgroundColor:"#f0f0f0",padding:"1.5rem",borderRadius:"0.5rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"1rem",color:"#003260"},children:"Practical Tools"}),r.jsx("p",{style:{lineHeight:"1.6"},children:"Downloadable checklists, timelines, and templates to help families prepare for and manage educational transitions, deployments, and other military life events."})]}),r.jsxs("div",{style:{backgroundColor:"#f0f0f0",padding:"1.5rem",borderRadius:"0.5rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"1rem",color:"#003260"},children:"Resource Directory"}),r.jsx("p",{style:{lineHeight:"1.6"},children:"Curated lists of military and civilian resources, programs, and organizations that support military children's education and well-being."})]}),r.jsxs("div",{style:{backgroundColor:"#f0f0f0",padding:"1.5rem",borderRadius:"0.5rem"},children:[r.jsx("h3",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.25rem",marginBottom:"1rem",color:"#003260"},children:"Expert Guidance"}),r.jsx("p",{style:{lineHeight:"1.6"},children:"Insights and advice from education professionals, military family support specialists, and experienced military parents on navigating common challenges."})]})]})]}),r.jsxs("section",{children:[r.jsx("h2",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",fontSize:"1.75rem",marginBottom:"1.5rem",color:"#003260"},children:"Our Partners"}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"1.5rem"},children:"The Military Family Education Guide is made possible through collaboration with various organizations dedicated to supporting military families, including:"}),r.jsxs("ul",{style:{fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"1.5rem",paddingLeft:"1.5rem"},children:[r.jsx("li",{style:{marginBottom:"0.75rem"},children:"Military Child Education Coalition (MCEC)"}),r.jsx("li",{style:{marginBottom:"0.75rem"},children:"National Military Family Association (NMFA)"}),r.jsx("li",{style:{marginBottom:"0.75rem"},children:"Military Families Learning Network (MFLN)"}),r.jsx("li",{style:{marginBottom:"0.75rem"},children:"Department of Defense Education Activity (DoDEA)"}),r.jsx("li",{children:"Military OneSource"})]}),r.jsx("p",{style:{fontSize:"1.125rem",lineHeight:"1.6",marginBottom:"2rem"},children:"We are grateful for their support and shared commitment to military children's educational success."}),r.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:r.jsx(Y,{to:"/contact",style:{display:"inline-block",backgroundColor:"#003260",color:"white",padding:"0.75rem 1.5rem",borderRadius:"0.25rem",textDecoration:"none",fontFamily:"Montserrat, sans-serif",fontWeight:"500"},children:"Contact Us"})})]})]})]}),yj=()=>{const t={maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem"},l={fontFamily:'"Bebas Neue", sans-serif',color:"#003260",marginBottom:"1.5rem"},o={fontFamily:"Open Sans, sans-serif",lineHeight:"1.6",marginBottom:"1.5rem"},s={color:"#005F81",textDecoration:"none",fontWeight:"500"},c={marginBottom:"2rem"},h={marginBottom:"1rem",lineHeight:"1.5"},p={backgroundColor:"#f8f9fa",padding:"2rem",borderRadius:"0.5rem",marginBottom:"2rem",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"};return r.jsxs("div",{children:[r.jsx("div",{style:{backgroundColor:"#003260",color:"white",padding:"3rem 1rem"},children:r.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:r.jsx("h1",{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",marginBottom:"1rem"},children:"References and Additional Resources"})})}),r.jsxs("div",{style:t,children:[r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx(Y,{to:"/",style:{color:"#0071bc",textDecoration:"none"},children:"Home"}),r.jsx("span",{style:{margin:"0 0.5rem"},children:"/"}),r.jsx("span",{children:"References"})]}),r.jsxs("div",{style:p,children:[r.jsx("h2",{style:l,children:"About This References Section"}),r.jsx("p",{style:o,children:"This comprehensive collection of references and resources has been carefully curated to support military families throughout their educational journey. Each section contains relevant publications, websites, tools, and organizations that provide specialized information and assistance for different aspects of education."}),r.jsx("p",{style:o,children:"All resources have been verified for accuracy and relevance to military families. External links will open in a new tab for your convenience, allowing you to explore resources while maintaining your place in this guide. We recommend bookmarking this page for future reference as you navigate different stages of your child's education."}),r.jsx("p",{style:o,children:"Use the category headings below to quickly navigate to resources that address your current needs. Each section includes a brief introduction explaining how these resources can support specific aspects of military family education."})]}),r.jsxs("div",{id:"military-family-education",style:p,children:[r.jsx("h2",{style:l,children:"Military Family Education"}),r.jsx("p",{style:o,children:"These resources focus on the unique educational needs and challenges of military-connected students. They provide guidance on navigating school transitions, understanding military-specific educational benefits, and accessing support services designed for military families."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Child Education Coalition. (2023)."})," Education of the Military Child in the 21st Century: A Report on the Changing Face of Education for Military-Connected Children. ",r.jsx("a",{href:"https://www.militarychild.org/reports",target:"_blank",style:s,children:"www.militarychild.org/reports"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Department of Defense Education Activity. (2024)."})," Educational Partnership Program: Supporting Military-Connected Students. ",r.jsx("a",{href:"https://www.dodea.edu/partnership",target:"_blank",style:s,children:"www.dodea.edu/partnership"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Interstate Children's Compact Commission. (2023)."})," Interstate Compact on Educational Opportunity for Military Children: Implementation Guide. ",r.jsx("a",{href:"https://mic3.net/resources",target:"_blank",style:s,children:"mic3.net/resources"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military OneSource. (2024)."})," Education Resources for Military Families. ",r.jsx("a",{href:"https://www.militaryonesource.mil/education-employment",target:"_blank",style:s,children:"www.militaryonesource.mil/education-employment"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"National Military Family Association. (2023)."})," Education Revolution: Supporting Military Kids in Today's Educational Environment. ",r.jsx("a",{href:"https://www.militaryfamily.org/education-revolution",target:"_blank",style:s,children:"www.militaryfamily.org/education-revolution"})]})]})]}),r.jsxs("div",{id:"school-readiness",style:p,children:[r.jsx("h2",{style:l,children:"School Readiness and Early Education"}),r.jsx("p",{style:o,children:"These resources provide guidance on preparing young children for school success, understanding developmental milestones, and supporting early learning. They are particularly valuable for military families with children in the preschool and early elementary years."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"National Association for the Education of Young Children. (2024)."})," School Readiness: A Position Statement. ",r.jsx("a",{href:"https://www.naeyc.org/resources/position-statements",target:"_blank",style:s,children:"www.naeyc.org/resources/position-statements"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Zero to Three. (2023)."})," Military and Veteran Families Support: Early Childhood Resources. ",r.jsx("a",{href:"https://www.zerotothree.org/military-family-support",target:"_blank",style:s,children:"www.zerotothree.org/military-family-support"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Virginia Department of Education. (2023)."})," Virginia's Foundation Blocks for Early Learning: Comprehensive Standards for Four-Year-Olds. ",r.jsx("a",{href:"https://www.doe.virginia.gov/early-childhood",target:"_blank",style:s,children:"www.doe.virginia.gov/early-childhood"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Centers for Disease Control and Prevention. (2024)."})," Learn the Signs. Act Early: Developmental Milestones. ",r.jsx("a",{href:"https://www.cdc.gov/ncbddd/actearly",target:"_blank",style:s,children:"www.cdc.gov/ncbddd/actearly"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Head Start Early Childhood Learning & Knowledge Center. (2023)."})," Military Families Resources. ",r.jsx("a",{href:"https://eclkc.ohs.acf.hhs.gov/family-support-well-being/article/military-families",target:"_blank",style:s,children:"eclkc.ohs.acf.hhs.gov/family-support-well-being/article/military-families"})]})]})]}),r.jsxs("div",{id:"college-preparation",style:p,children:[r.jsx("h2",{style:l,children:"College Preparation and Applications"}),r.jsx("p",{style:o,children:"These resources help military families navigate the college application process, understand financial aid options, and prepare for the transition to higher education. They include information on military-specific scholarships and benefits for college-bound students."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"College Board. (2024)."})," Applying to College: Guide for Military Families. ",r.jsx("a",{href:"https://www.collegeboard.org/military-families",target:"_blank",style:s,children:"www.collegeboard.org/military-families"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Federal Student Aid. (2024)."})," Financial Aid for Military Families. ",r.jsx("a",{href:"https://studentaid.gov/understand-aid/types/military",target:"_blank",style:s,children:"studentaid.gov/understand-aid/types/military"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Department of Veterans Affairs. (2023)."})," GI Bill Comparison Tool and Transfer of Benefits Guide. ",r.jsx("a",{href:"https://www.va.gov/education/gi-bill-comparison-tool",target:"_blank",style:s,children:"www.va.gov/education/gi-bill-comparison-tool"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Officers Association of America. (2024)."})," Educational Assistance Programs and Scholarships. ",r.jsx("a",{href:"https://www.moaa.org/content/benefits-and-discounts/education-assistance",target:"_blank",style:s,children:"www.moaa.org/content/benefits-and-discounts/education-assistance"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"ACT. (2023)."})," College Readiness for Military-Connected Students. ",r.jsx("a",{href:"https://www.act.org/content/act/en/students-and-parents/military-families.html",target:"_blank",style:s,children:"www.act.org/content/act/en/students-and-parents/military-families.html"})]})]})]}),r.jsxs("div",{id:"special-education",style:p,children:[r.jsx("h2",{style:l,children:"Special Education and Learning Support"}),r.jsx("p",{style:o,children:"These resources provide information on supporting children with special educational needs, navigating the IEP process across different school systems, and accessing appropriate services during military transitions. They are essential for military families with children who require additional learning support."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Exceptional Family Member Program. (2024)."})," Educational Support for Military Children with Special Needs. ",r.jsx("a",{href:"https://www.militaryonesource.mil/family-relationships/special-needs",target:"_blank",style:s,children:"www.militaryonesource.mil/family-relationships/special-needs"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Wrightslaw. (2023)."})," Special Education Law and Advocacy for Military Families. ",r.jsx("a",{href:"https://www.wrightslaw.com/info/mil.index.htm",target:"_blank",style:s,children:"www.wrightslaw.com/info/mil.index.htm"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"STOMP Project. (2024)."})," Specialized Training of Military Parents: Navigating Special Education During PCS Moves. ",r.jsx("a",{href:"https://wapave.org/specialized-training-of-military-parents-stomp",target:"_blank",style:s,children:"wapave.org/specialized-training-of-military-parents-stomp"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Understood.org. (2023)."})," Military Families: Managing Learning and Attention Issues During Transitions. ",r.jsx("a",{href:"https://www.understood.org/en/articles/military-families",target:"_blank",style:s,children:"www.understood.org/en/articles/military-families"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Center for Parent Information and Resources. (2024)."})," Resources for Military Families with Children with Disabilities. ",r.jsx("a",{href:"https://www.parentcenterhub.org/military-families",target:"_blank",style:s,children:"www.parentcenterhub.org/military-families"})]})]})]}),r.jsxs("div",{id:"homeschooling",style:p,children:[r.jsx("h2",{style:l,children:"Homeschooling Resources"}),r.jsx("p",{style:o,children:"These resources provide guidance on homeschooling options, curriculum selection, legal requirements across different states, and connecting with homeschool communities. They are particularly valuable for military families considering or currently engaged in homeschooling."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Home School Legal Defense Association. (2024)."})," Homeschooling for Military Families. ",r.jsx("a",{href:"https://hslda.org/legal/military-families",target:"_blank",style:s,children:"hslda.org/legal/military-families"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Homeschoolers. (2023)."})," Homeschooling Through Deployments and PCS Moves. ",r.jsx("a",{href:"https://www.militaryhomeschoolers.com",target:"_blank",style:s,children:"www.militaryhomeschoolers.com"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Organization of Virginia Homeschoolers. (2024)."})," Homeschooling in Virginia: A Guide for Military Families. ",r.jsx("a",{href:"https://vahomeschoolers.org/military",target:"_blank",style:s,children:"vahomeschoolers.org/military"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Home Educators Association of Virginia. (2023)."})," Military Family Resources. ",r.jsx("a",{href:"https://heav.org/military-families",target:"_blank",style:s,children:"heav.org/military-families"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Department of Defense Education Activity. (2024)."})," Homeschooling Policy and Resources for Military Families. ",r.jsx("a",{href:"https://www.dodea.edu/parents/homeschooling.cfm",target:"_blank",style:s,children:"www.dodea.edu/parents/homeschooling.cfm"})]})]})]}),r.jsxs("div",{id:"mental-health",style:p,children:[r.jsx("h2",{style:l,children:"Mental Health and Resilience"}),r.jsx("p",{style:o,children:"These resources focus on supporting the social-emotional wellbeing of military children, building resilience during transitions and deployments, and addressing mental health needs. They provide strategies for families and educators to help military children thrive despite the challenges of military life."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Kids Connect. (2024)."})," Building Resilience in Military Children. ",r.jsx("a",{href:"https://militarykidsconnect.health.mil",target:"_blank",style:s,children:"militarykidsconnect.health.mil"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"FOCUS Program. (2023)."})," Families OverComing Under Stress: Resilience Training for Military Families. ",r.jsx("a",{href:"https://focusproject.org",target:"_blank",style:s,children:"focusproject.org"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Child Education Coalition. (2024)."})," Student 2 Student Program: Helping Military Children Transition and Build Connections. ",r.jsx("a",{href:"https://www.militarychild.org/programs/student-2-student",target:"_blank",style:s,children:"www.militarychild.org/programs/student-2-student"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Sesame Street for Military Families. (2023)."})," Resources for Military Children's Emotional Health. ",r.jsx("a",{href:"https://sesamestreetformilitaryfamilies.org",target:"_blank",style:s,children:"sesamestreetformilitaryfamilies.org"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Child Mind Institute. (2024)."})," Supporting Military Children Through Deployment and Beyond. ",r.jsx("a",{href:"https://childmind.org/article/supporting-military-children",target:"_blank",style:s,children:"childmind.org/article/supporting-military-children"})]})]})]}),r.jsxs("div",{id:"career-exploration",style:p,children:[r.jsx("h2",{style:l,children:"Career Exploration and Planning"}),r.jsx("p",{style:o,children:"These resources help military-connected students explore career options, develop career readiness skills, and plan for their future. They include information on military career paths, civilian career opportunities, and resources specifically designed for military teens and young adults."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Department of Labor. (2024)."})," Career One Stop: Resources for Military Families and Veterans. ",r.jsx("a",{href:"https://www.careeronestop.org/Veterans",target:"_blank",style:s,children:"www.careeronestop.org/Veterans"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military OneSource. (2023)."})," MilSpouse Career Center: Resources for Military Teens and Spouses. ",r.jsx("a",{href:"https://www.militaryonesource.mil/education-employment/for-spouses",target:"_blank",style:s,children:"www.militaryonesource.mil/education-employment/for-spouses"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"My Next Move for Veterans. (2024)."})," Career Exploration Tools for Military-Connected Youth. ",r.jsx("a",{href:"https://www.mynextmove.org/vets",target:"_blank",style:s,children:"www.mynextmove.org/vets"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"ASVAB Career Exploration Program. (2023)."})," Career Planning for Military-Connected Students. ",r.jsx("a",{href:"https://www.asvabprogram.com",target:"_blank",style:s,children:"www.asvabprogram.com"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"DoD SkillBridge. (2024)."})," Career Skills Program for Transitioning Service Members. ",r.jsx("a",{href:"https://skillbridge.osd.mil",target:"_blank",style:s,children:"skillbridge.osd.mil"})]})]})]}),r.jsxs("div",{id:"virginia-resources",style:p,children:[r.jsx("h2",{style:l,children:"Virginia-Specific Resources"}),r.jsx("p",{style:o,children:"These resources provide information specific to military families stationed in Virginia, including state educational policies, local support services, and Virginia-specific programs. They are particularly valuable for families who are new to Virginia or planning to PCS to a Virginia installation."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Virginia Department of Education. (2024)."})," Military Family Resources. ",r.jsx("a",{href:"https://www.doe.virginia.gov/families/student-and-family-support/military-families",target:"_blank",style:s,children:"www.doe.virginia.gov/families/student-and-family-support/military-families"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Virginia Council on the Interstate Compact on Educational Opportunity for Military Children. (2023)."})," Virginia Implementation Guide. ",r.jsx("a",{href:"https://www.doe.virginia.gov/programs-services/student-services/military-families",target:"_blank",style:s,children:"www.doe.virginia.gov/programs-services/student-services/military-families"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Virginia Military Family Support Network. (2024)."})," Educational Resources for Military Families in Virginia. ",r.jsx("a",{href:"https://www.vmfsn.org/education",target:"_blank",style:s,children:"www.vmfsn.org/education"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Virginia Military Advisory Council. (2023)."})," Education Committee Resources. ",r.jsx("a",{href:"https://www.dvs.virginia.gov/virginia-military-advisory-council",target:"_blank",style:s,children:"www.dvs.virginia.gov/virginia-military-advisory-council"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Virginia PTA Military Families Committee. (2024)."})," Support Resources for Military Families in Virginia Schools. ",r.jsx("a",{href:"https://www.vapta.org/programs/military-families",target:"_blank",style:s,children:"www.vapta.org/programs/military-families"})]})]})]}),r.jsxs("div",{id:"summer-learning",style:p,children:[r.jsx("h2",{style:l,children:"Summer Learning and Enrichment"}),r.jsx("p",{style:o,children:"These resources provide information on summer learning opportunities, camps, and enrichment programs for military children. They help families find meaningful educational experiences during school breaks and prevent summer learning loss during transitions."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"National Military Family Association. (2024)."})," Operation Purple Camp: Free Summer Camps for Military Kids. ",r.jsx("a",{href:"https://www.militaryfamily.org/programs/operation-purple/operation-purple-camp",target:"_blank",style:s,children:"www.militaryfamily.org/programs/operation-purple/operation-purple-camp"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Child Education Coalition. (2023)."})," Student Leadership Programs and Summer Institutes. ",r.jsx("a",{href:"https://www.militarychild.org/programs/student-programs",target:"_blank",style:s,children:"www.militarychild.org/programs/student-programs"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"DoD STEM Education Consortium. (2024)."})," STEM Opportunities for Military-Connected Students. ",r.jsx("a",{href:"https://dodstem.us",target:"_blank",style:s,children:"dodstem.us"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"National Park Service. (2023)."})," Every Kid Outdoors Program: Free Access for Military Families. ",r.jsx("a",{href:"https://www.nps.gov/kids/everykid.htm",target:"_blank",style:s,children:"www.nps.gov/kids/everykid.htm"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Armed Services YMCA. (2024)."})," Operation Summer Camp: Programs for Military Children. ",r.jsx("a",{href:"https://www.asymca.org/summer-camp",target:"_blank",style:s,children:"www.asymca.org/summer-camp"})]})]})]}),r.jsxs("div",{id:"academic-support",style:p,children:[r.jsx("h2",{style:l,children:"Academic Support and Educational Planning"}),r.jsx("p",{style:o,children:"These resources provide tools for academic planning, tutoring services, and educational support for military children. They help families address learning gaps, provide additional academic assistance, and plan for educational success across transitions."}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Tutor.com for U.S. Military Families. (2024)."})," Free Online Tutoring and Homework Help. ",r.jsx("a",{href:"https://military.tutor.com",target:"_blank",style:s,children:"military.tutor.com"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Khan Academy. (2023)."})," Free Online Courses, Lessons & Practice. ",r.jsx("a",{href:"https://www.khanacademy.org",target:"_blank",style:s,children:"www.khanacademy.org"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"School Liaison Program. (2024)."})," Educational Planning Resources for Military Families. ",r.jsx("a",{href:"https://www.dodea.edu/partnership/schoolliaisonofficers.cfm",target:"_blank",style:s,children:"www.dodea.edu/partnership/schoolliaisonofficers.cfm"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"National Center for Education Statistics. (2023)."})," School Search Tool for Military Families. ",r.jsx("a",{href:"https://nces.ed.gov/globallocator",target:"_blank",style:s,children:"nces.ed.gov/globallocator"})]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Military Impacted Schools Association. (2024)."})," Resources for Schools Serving Military-Connected Students. ",r.jsx("a",{href:"https://www.militaryimpactedschoolsassociation.org/resources",target:"_blank",style:s,children:"www.militaryimpactedschoolsassociation.org/resources"})]})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h2",{style:l,children:"Using These Resources Effectively"}),r.jsx("p",{style:o,children:"The resources listed in this section represent a starting point for military families navigating educational challenges and opportunities. As you use these resources, consider the following strategies for maximizing their effectiveness:"}),r.jsxs("ul",{style:c,children:[r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Bookmark this page"})," for easy reference throughout your military education journey."]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Connect with your installation's School Liaison Officer"})," for guidance on which resources are most relevant to your current situation."]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Join online and in-person communities"})," of military families to share additional resources and experiences."]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Check for updated information"})," regularly, as educational policies and programs may change."]}),r.jsxs("li",{style:h,children:[r.jsx("strong",{children:"Share valuable resources"})," with other military families who might benefit from them."]})]}),r.jsx("p",{style:o,children:"Remember that you are not alone in navigating your child's educational journey. The military community offers a wealth of support, expertise, and shared experience that can help your family thrive educationally despite the challenges of military life."})]})]})]})},vj=()=>{const t={maxWidth:"1280px",margin:"0 auto",padding:"2rem 1rem"},l={fontFamily:'"Bebas Neue", sans-serif',color:"#003260",marginBottom:"1.5rem"},o={fontFamily:"Open Sans, sans-serif",lineHeight:"1.6",marginBottom:"1.5rem"},s={marginBottom:"2rem"},c={marginBottom:"0.75rem",lineHeight:"1.5"},h={backgroundColor:"#f8f9fa",padding:"2rem",borderRadius:"0.5rem",marginBottom:"2rem",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"},p={backgroundColor:"white",borderRadius:"0.5rem",padding:"1.5rem",marginBottom:"1.5rem",boxShadow:"0 2px 4px rgba(0,0,0,0.05)",borderLeft:"4px solid #005F81"},f={fontFamily:"Montserrat, sans-serif",color:"#003260",marginBottom:"1rem",fontWeight:"600"},m={fontStyle:"italic",borderLeft:"4px solid #F6C100",paddingLeft:"1rem",margin:"1.5rem 0",color:"#555"};return r.jsxs("div",{children:[r.jsx("div",{style:{backgroundColor:"#003260",color:"white",padding:"3rem 1rem"},children:r.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[r.jsx("h1",{style:{fontFamily:'"Bebas Neue", sans-serif',fontSize:"2.5rem",marginBottom:"1rem"},children:"Checklists and Timelines"}),r.jsx("p",{style:{fontFamily:"Open Sans, sans-serif",fontSize:"1.1rem",maxWidth:"800px"},children:"Practical tools to help military families navigate key educational transitions and milestones"})]})}),r.jsxs("div",{style:t,children:[r.jsxs("div",{style:{marginBottom:"2rem"},children:[r.jsx(Y,{to:"/",style:{color:"#0071bc",textDecoration:"none"},children:"Home"}),r.jsx("span",{style:{margin:"0 0.5rem"},children:"/"}),r.jsx("span",{children:"Checklists"})]}),r.jsxs("div",{style:h,children:[r.jsx("h2",{style:l,children:"About These Checklists"}),r.jsx("p",{style:o,children:"The following checklists and timelines provide practical tools to help military families navigate key educational transitions and milestones. These resources can be adapted to your family's specific circumstances and used as frameworks for planning and preparation."}),r.jsx("p",{style:o,children:"Each checklist is organized chronologically to help you anticipate and prepare for important steps in your child's educational journey. Whether you're facing a PCS move, deployment, or planning for college, these tools will help you stay organized and ensure you don't miss critical tasks."}),r.jsx("p",{style:o,children:"Consider printing these checklists or saving them to your device for easy reference during transitions. You can customize them to fit your family's unique needs and military situation."})]}),r.jsxs("div",{style:h,children:[r.jsx("h2",{style:l,children:"Quick Navigation"}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:[r.jsx("a",{href:"#school-transition",style:{padding:"0.75rem 1rem",backgroundColor:"#005F81",color:"white",textDecoration:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",fontSize:"0.9rem",display:"inline-block"},children:"School Transition Checklist"}),r.jsx("a",{href:"#deployment-support",style:{padding:"0.75rem 1rem",backgroundColor:"#005F81",color:"white",textDecoration:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",fontSize:"0.9rem",display:"inline-block"},children:"Deployment Education Support"}),r.jsx("a",{href:"#college-application",style:{padding:"0.75rem 1rem",backgroundColor:"#005F81",color:"white",textDecoration:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",fontSize:"0.9rem",display:"inline-block"},children:"College Application Timeline"}),r.jsx("a",{href:"#elementary-school",style:{padding:"0.75rem 1rem",backgroundColor:"#005F81",color:"white",textDecoration:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",fontSize:"0.9rem",display:"inline-block"},children:"Elementary School Checklist"}),r.jsx("a",{href:"#middle-school",style:{padding:"0.75rem 1rem",backgroundColor:"#005F81",color:"white",textDecoration:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",fontSize:"0.9rem",display:"inline-block"},children:"Middle School Planning"}),r.jsx("a",{href:"#high-school",style:{padding:"0.75rem 1rem",backgroundColor:"#005F81",color:"white",textDecoration:"none",borderRadius:"0.25rem",fontFamily:"Montserrat, sans-serif",fontWeight:"500",fontSize:"0.9rem",display:"inline-block"},children:"High School Year-by-Year"})]})]}),r.jsxs("div",{id:"school-transition",style:h,children:[r.jsx("h2",{style:l,children:"School Transition Checklist"}),r.jsx("p",{style:o,children:"PCS moves can be challenging for military families, especially when they involve school transitions. This checklist will help you prepare for a smooth educational transition before, during, and after your move."}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"3-6 Months Before Move"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Contact the School Liaison Officer (SLO) at your current and gaining installations"}),r.jsx("li",{style:c,children:"Research schools in the new location (public, private, DoDEA, charter, homeschool options)"}),r.jsx("li",{style:c,children:"Review school websites, performance data, and special programs"}),r.jsx("li",{style:c,children:"Identify specific programs your child needs (special education, gifted, ELL, etc.)"}),r.jsx("li",{style:c,children:"Request current school records and review for completeness"}),r.jsx("li",{style:c,children:"Check Interstate Compact provisions that may apply to your situation"}),r.jsx("li",{style:c,children:"Research graduation requirements if moving during high school"}),r.jsx("li",{style:c,children:"Identify extracurricular activities and tryout schedules at new location"}),r.jsx("li",{style:c,children:"Begin discussions with children about the upcoming school change"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"1-3 Months Before Move"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Schedule exit interviews with current teachers and counselors"}),r.jsx("li",{style:c,children:"Request letters of recommendation for special programs"}),r.jsx("li",{style:c,children:"Obtain copies of IEP/504 plans and most recent evaluations"}),r.jsx("li",{style:c,children:"Collect samples of student work that demonstrate abilities"}),r.jsx("li",{style:c,children:"Organize a portfolio of academic achievements and extracurricular activities"}),r.jsx("li",{style:c,children:"Contact the new school to understand registration requirements"}),r.jsx("li",{style:c,children:"Schedule placement tests if required by the new school"}),r.jsx("li",{style:c,children:"Research summer programs in the new location to ease transition"}),r.jsx("li",{style:c,children:"Develop a plan for completing current school year/semester"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"2-4 Weeks Before Move"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Organize hand-carry educational documents (don't pack in household goods)"}),r.jsx("li",{style:c,children:"Include immunization records, birth certificate, and proof of residency"}),r.jsx("li",{style:c,children:"Confirm withdrawal process and timeline with current school"}),r.jsx("li",{style:c,children:"Return all school materials (textbooks, library books, equipment)"}),r.jsx("li",{style:c,children:"Back up digital school projects and assignments"}),r.jsx("li",{style:c,children:"Create contact information list for current teachers and friends"}),r.jsx("li",{style:c,children:"Plan appropriate goodbyes and closure activities"}),r.jsx("li",{style:c,children:"Prepare questions for new school orientation"}),r.jsx("li",{style:c,children:"Discuss expectations and concerns about the new school with your child"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"Arrival at New Location"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Connect with the School Liaison Officer at the new installation"}),r.jsx("li",{style:c,children:"Complete school registration process"}),r.jsx("li",{style:c,children:"Request a school tour before the first day if possible"}),r.jsx("li",{style:c,children:"Meet with school counselor to discuss course placement"}),r.jsx("li",{style:c,children:"Provide copies of all educational records"}),r.jsx("li",{style:c,children:"Discuss special needs and accommodations with appropriate staff"}),r.jsx("li",{style:c,children:"Review transportation arrangements and schedules"}),r.jsx("li",{style:c,children:"Purchase required school supplies and appropriate clothing"}),r.jsx("li",{style:c,children:"Locate key places in the school (classrooms, cafeteria, gym, etc.)"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"First Month at New School"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Schedule meetings with new teachers within first two weeks"}),r.jsx("li",{style:c,children:"Establish communication channels with teachers and staff"}),r.jsx("li",{style:c,children:"Monitor homework completion and understanding"}),r.jsx("li",{style:c,children:"Check in daily with your child about school experiences"}),r.jsx("li",{style:c,children:"Watch for signs of transition stress or academic struggles"}),r.jsx("li",{style:c,children:"Help your child connect with peers and activities"}),r.jsx("li",{style:c,children:"Attend school events and volunteer if possible"}),r.jsx("li",{style:c,children:"Verify records have been received and properly interpreted"}),r.jsx("li",{style:c,children:"Confirm appropriate placement in classes and programs"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"Ongoing Monitoring"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Schedule follow-up meeting with teachers after 4-6 weeks"}),r.jsx("li",{style:c,children:"Review first progress report or report card carefully"}),r.jsx("li",{style:c,children:"Address any academic or social concerns promptly"}),r.jsx("li",{style:c,children:"Adjust support strategies based on transition progress"}),r.jsx("li",{style:c,children:"Connect with other military families at the school"}),r.jsx("li",{style:c,children:"Continue to monitor emotional adjustment to the new environment"}),r.jsx("li",{style:c,children:"Maintain communication with school staff throughout the year"}),r.jsx("li",{style:c,children:"Document successful transition strategies for future moves"}),r.jsx("li",{style:c,children:"Celebrate successful adaptation and achievements"})]})]})]}),r.jsxs("div",{id:"deployment-support",style:h,children:[r.jsx("h2",{style:l,children:"Deployment Education Support Timeline"}),r.jsx("p",{style:o,children:"Deployments can significantly impact a child's educational experience. This timeline provides guidance for supporting your child's education before, during, and after a parent's deployment."}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"Pre-Deployment"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Inform school staff about upcoming deployment"}),r.jsx("li",{style:c,children:"Meet with teachers to discuss potential impacts on the student"}),r.jsx("li",{style:c,children:"Establish communication plan between deployed parent and school"}),r.jsx("li",{style:c,children:"Update emergency contact information and authorization forms"}),r.jsx("li",{style:c,children:"Discuss homework and academic expectations during deployment"}),r.jsx("li",{style:c,children:"Create a family calendar marking important school events"}),r.jsx("li",{style:c,children:"Record the deploying parent reading books or helping with homework"}),r.jsx("li",{style:c,children:"Prepare comfort items for school (photos, special notes)"}),r.jsx("li",{style:c,children:"Discuss how to handle deployment questions from peers"}),r.jsx("li",{style:c,children:"Connect with school counselor for available support resources"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"Initial Deployment Period (First Month)"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Monitor changes in behavior, academic performance, or attendance"}),r.jsx("li",{style:c,children:"Maintain consistent school routines and homework schedules"}),r.jsx("li",{style:c,children:"Check in with teachers about any concerning changes"}),r.jsx("li",{style:c,children:"Provide age-appropriate updates about the deployed parent"}),r.jsx("li",{style:c,children:"Establish new after-school routines if needed"}),r.jsx("li",{style:c,children:"Connect with Military Family Life Counselor if available"}),r.jsx("li",{style:c,children:"Consider joining deployment support groups at school or installation"}),r.jsx("li",{style:c,children:"Create a system for sharing school news with deployed parent"}),r.jsx("li",{style:c,children:"Maintain regular sleep schedules to support school performance"}),r.jsx("li",{style:c,children:"Allow for adjustment time and extra emotional support"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"During Deployment"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Schedule regular check-ins with teachers (every 4-6 weeks)"}),r.jsx("li",{style:c,children:"Send updates and school work to deployed parent regularly"}),r.jsx("li",{style:c,children:"Arrange video calls with deployed parent during special school events when possible"}),r.jsx("li",{style:c,children:"Monitor academic progress and address any issues promptly"}),r.jsx("li",{style:c,children:"Maintain connection with school support personnel"}),r.jsx("li",{style:c,children:"Consider tutoring or homework help if needed"}),r.jsx("li",{style:c,children:"Encourage participation in deployment support programs at school"}),r.jsx("li",{style:c,children:"Document school achievements to share with deployed parent"}),r.jsx("li",{style:c,children:"Be aware of emotional triggers around special school events"}),r.jsx("li",{style:c,children:"Maintain communication with teachers about any concerning changes"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"Pre-Reunion (1 Month Before Return)"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Inform teachers about upcoming reunion"}),r.jsx("li",{style:c,children:"Discuss potential adjustment behaviors with school counselor"}),r.jsx("li",{style:c,children:"Prepare for possible academic and routine changes"}),r.jsx("li",{style:c,children:"Help child create school-related welcome home items"}),r.jsx("li",{style:c,children:"Discuss realistic expectations for parent's attendance at school events"}),r.jsx("li",{style:c,children:"Prepare for potential school absences during reunion period"}),r.jsx("li",{style:c,children:"Create a plan for reintegrating parent into school routines"}),r.jsx("li",{style:c,children:"Organize school work and achievements to share with returning parent"}),r.jsx("li",{style:c,children:"Discuss with child how to handle excitement at school"}),r.jsx("li",{style:c,children:"Prepare teachers for potential behavioral changes during reunion"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"Post-Deployment"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Gradually reintegrate returning parent into school communication"}),r.jsx("li",{style:c,children:"Schedule time for returning parent to meet teachers"}),r.jsx("li",{style:c,children:"Update school records and emergency contacts"}),r.jsx("li",{style:c,children:"Monitor child's school behavior and performance during readjustment"}),r.jsx("li",{style:c,children:"Maintain consistent routines while incorporating returning parent"}),r.jsx("li",{style:c,children:"Be patient with academic performance during reintegration"}),r.jsx("li",{style:c,children:"Discuss any school concerns that arose during deployment"}),r.jsx("li",{style:c,children:"Celebrate educational achievements accomplished during deployment"}),r.jsx("li",{style:c,children:"Consider counseling if school difficulties persist"}),r.jsx("li",{style:c,children:"Document successful strategies for future deployments"})]})]})]}),r.jsxs("div",{id:"college-application",style:h,children:[r.jsx("h2",{style:l,children:"College Application Timeline"}),r.jsx("p",{style:o,children:"Planning for college requires careful preparation, especially for military families who may face PCS moves during high school. This timeline will help you stay on track throughout the college application process."}),r.jsx("div",{style:m,children:r.jsx("p",{children:'"Early planning is essential for military families navigating the college application process, especially with the possibility of PCS moves during high school." - April 2024 article'})}),r.jsxs("div",{style:{backgroundColor:"#7A003C",color:"white",padding:"1rem",borderRadius:"0.25rem",marginBottom:"1.5rem"},children:[r.jsx("p",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",marginBottom:"0.5rem"},children:"Military Family Tip:"}),r.jsx("p",{style:{fontFamily:"Open Sans, sans-serif",margin:0},children:"Create a portable digital portfolio with all your student's records, achievements, and recommendation letters. This will be invaluable if you PCS during the college application process."})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"9th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Meet with high school counselor to plan four-year course schedule"}),r.jsx("li",{style:c,children:"Understand graduation requirements and college preparatory courses"}),r.jsx("li",{style:c,children:"Begin exploring potential career interests"}),r.jsx("li",{style:c,children:"Participate in extracurricular activities and community service"}),r.jsx("li",{style:c,children:"Develop good study habits and organizational skills"}),r.jsx("li",{style:c,children:"Create a system for tracking achievements and activities"}),r.jsx("li",{style:c,children:"Explore summer enrichment opportunities"}),r.jsx("li",{style:c,children:"Begin researching military-connected college benefits"}),r.jsx("li",{style:c,children:"Take challenging courses appropriate to ability level"}),r.jsx("li",{style:c,children:"Establish relationships with teachers and mentors"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"10th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Take the PSAT for practice"}),r.jsx("li",{style:c,children:"Continue involvement in extracurricular activities with increasing responsibility"}),r.jsx("li",{style:c,children:"Research college options and admission requirements"}),r.jsx("li",{style:c,children:"Attend college fairs and information sessions"}),r.jsx("li",{style:c,children:"Consider taking SAT Subject Tests in completed courses"}),r.jsx("li",{style:c,children:"Explore dual enrollment or advanced placement options"}),r.jsx("li",{style:c,children:"Begin investigating scholarship opportunities"}),r.jsx("li",{style:c,children:"Consider military academy or ROTC interest and requirements"}),r.jsx("li",{style:c,children:"Maintain strong academic performance"}),r.jsx("li",{style:c,children:"Update achievement and activity records"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"11th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Take the PSAT/NMSQT in October (National Merit Scholarship qualifying)"}),r.jsx("li",{style:c,children:"Prepare for and take the SAT and/or ACT (spring semester)"}),r.jsx("li",{style:c,children:"Research colleges more intensively (size, location, programs, cost)"}),r.jsx("li",{style:c,children:"Visit college campuses when possible"}),r.jsx("li",{style:c,children:"Meet with college representatives at school events"}),r.jsx("li",{style:c,children:"Begin gathering information for applications"}),r.jsx("li",{style:c,children:"Identify teachers for recommendation letters"}),r.jsx("li",{style:c,children:"Take leadership roles in activities when possible"}),r.jsx("li",{style:c,children:"Attend financial aid and college planning workshops"}),r.jsx("li",{style:c,children:"Create a master calendar of application deadlines"}),r.jsx("li",{style:c,children:"Consider how potential PCS moves might affect application process"}),r.jsx("li",{style:c,children:"Research in-state tuition options for military dependents"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"12th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Retake SAT/ACT if needed (early fall)"}),r.jsx("li",{style:c,children:"Finalize college list with safety, match, and reach schools"}),r.jsx("li",{style:c,children:"Request letters of recommendation (early fall)"}),r.jsx("li",{style:c,children:"Complete and submit applications before deadlines"}),r.jsx("li",{style:c,children:"Complete FAFSA as soon as possible after October 1"}),r.jsx("li",{style:c,children:"Apply for scholarships (ongoing throughout year)"}),r.jsx("li",{style:c,children:"Send mid-year reports as required"}),r.jsx("li",{style:c,children:"Compare financial aid offers"}),r.jsx("li",{style:c,children:"Make final college decision by May 1"}),r.jsx("li",{style:c,children:"Request final transcript be sent to selected college"}),r.jsx("li",{style:c,children:"Complete housing applications and orientation registration"}),r.jsx("li",{style:c,children:"Apply for military-connected benefits if applicable"})]})]}),r.jsx("div",{style:m,children:r.jsx("p",{children:'"Military families should pay particular attention to state residency requirements for tuition purposes and explore the many scholarships specifically available to military dependents." - April 2024 article'})})]}),r.jsxs("div",{id:"elementary-school",style:h,children:[r.jsx("h2",{style:l,children:"Elementary School Year-by-Year Checklist"}),r.jsx("p",{style:o,children:"The elementary years provide the foundation for your child's educational journey. This checklist outlines key focus areas for each stage of elementary school to help military families support their children's academic and social development."}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"Kindergarten"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Establish consistent school routines and homework habits"}),r.jsx("li",{style:c,children:"Create a dedicated homework space"}),r.jsx("li",{style:c,children:"Develop regular communication with teacher"}),r.jsx("li",{style:c,children:"Read with your child daily"}),r.jsx("li",{style:c,children:"Practice basic math concepts through everyday activities"}),r.jsx("li",{style:c,children:"Monitor development of fine motor skills"}),r.jsx("li",{style:c,children:"Support social skills development and friendship building"}),r.jsx("li",{style:c,children:"Attend parent-teacher conferences and school events"}),r.jsx("li",{style:c,children:"Begin record-keeping system for educational documents"}),r.jsx("li",{style:c,children:"Explore extracurricular activities based on interests"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"1st-2nd Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Monitor reading progress and provide appropriate materials"}),r.jsx("li",{style:c,children:"Support math fact fluency development"}),r.jsx("li",{style:c,children:"Establish regular reading time beyond school assignments"}),r.jsx("li",{style:c,children:"Encourage writing through journals, letters, and stories"}),r.jsx("li",{style:c,children:"Develop independence in homework completion"}),r.jsx("li",{style:c,children:"Watch for signs of learning difficulties"}),r.jsx("li",{style:c,children:"Explore interests through appropriate activities"}),r.jsx("li",{style:c,children:"Limit screen time and encourage active play"}),r.jsx("li",{style:c,children:"Discuss school experiences daily"}),r.jsx("li",{style:c,children:"Maintain communication with teachers"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"3rd-4th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Support transition to more complex academic content"}),r.jsx("li",{style:c,children:"Monitor homework completion and understanding"}),r.jsx("li",{style:c,children:"Encourage development of study skills and test preparation"}),r.jsx("li",{style:c,children:"Support increasing reading comprehension demands"}),r.jsx("li",{style:c,children:"Provide opportunities for writing in various formats"}),r.jsx("li",{style:c,children:"Develop organizational and time management skills"}),r.jsx("li",{style:c,children:"Encourage critical thinking and problem-solving"}),r.jsx("li",{style:c,children:"Support healthy peer relationships"}),r.jsx("li",{style:c,children:"Begin discussions about long-term interests and strengths"}),r.jsx("li",{style:c,children:"Continue participation in extracurricular activities"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"5th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Prepare for transition to middle school"}),r.jsx("li",{style:c,children:"Visit middle school and attend orientation events"}),r.jsx("li",{style:c,children:"Discuss increased responsibility and independence"}),r.jsx("li",{style:c,children:"Develop stronger organizational systems"}),r.jsx("li",{style:c,children:"Support completion of culminating elementary projects"}),r.jsx("li",{style:c,children:"Encourage self-advocacy skills development"}),r.jsx("li",{style:c,children:"Discuss course selection for middle school"}),r.jsx("li",{style:c,children:"Address any academic gaps before middle school"}),r.jsx("li",{style:c,children:"Support healthy technology habits"}),r.jsx("li",{style:c,children:"Celebrate elementary school completion"})]})]})]}),r.jsxs("div",{id:"middle-school",style:h,children:[r.jsx("h2",{style:l,children:"Middle School Planning Checklist"}),r.jsx("p",{style:o,children:"Middle school represents a critical transition period when students develop greater independence and begin preparing for high school. This checklist will help military families support their children through these important years."}),r.jsx("div",{style:m,children:r.jsx("p",{children:'"Middle school is a critical time for developing the organizational and study skills that will be essential for high school success. Military families should pay particular attention to course selection and academic planning during 8th grade, especially if a PCS move might occur during the high school years." - August 2024 article'})}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"6th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Establish new organizational systems for multiple classes"}),r.jsx("li",{style:c,children:"Create homework and study schedules"}),r.jsx("li",{style:c,children:"Develop relationship with school counselor"}),r.jsx("li",{style:c,children:"Support adaptation to multiple teachers and classrooms"}),r.jsx("li",{style:c,children:"Monitor use of planner or digital organization tools"}),r.jsx("li",{style:c,children:"Encourage participation in school activities and clubs"}),r.jsx("li",{style:c,children:"Discuss appropriate social media and technology use"}),r.jsx("li",{style:c,children:"Support development of self-advocacy skills"}),r.jsx("li",{style:c,children:"Maintain regular communication with teachers"}),r.jsx("li",{style:c,children:"Begin exploring career interests informally"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"7th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Review academic progress and address any concerns"}),r.jsx("li",{style:c,children:"Encourage increasing independence in schoolwork"}),r.jsx("li",{style:c,children:"Support development of study skills for more complex content"}),r.jsx("li",{style:c,children:"Discuss course selection and its impact on future options"}),r.jsx("li",{style:c,children:"Explore extracurricular activities aligned with interests"}),r.jsx("li",{style:c,children:"Consider leadership opportunities in school and community"}),r.jsx("li",{style:c,children:"Continue career exploration through research and discussions"}),r.jsx("li",{style:c,children:"Support healthy peer relationships and social development"}),r.jsx("li",{style:c,children:"Monitor online activities and digital citizenship"}),r.jsx("li",{style:c,children:"Encourage summer enrichment opportunities"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"8th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Meet with counselor to plan freshman year courses"}),r.jsx("li",{style:c,children:"Understand high school graduation requirements"}),r.jsx("li",{style:c,children:"Consider advanced courses if appropriate"}),r.jsx("li",{style:c,children:"Attend high school orientation events"}),r.jsx("li",{style:c,children:"Discuss four-year high school plan"}),r.jsx("li",{style:c,children:"Research extracurricular opportunities in high school"}),r.jsx("li",{style:c,children:"Develop stronger time management and study skills"}),r.jsx("li",{style:c,children:"Take leadership roles in middle school activities"}),r.jsx("li",{style:c,children:"Begin thinking about college and career goals"}),r.jsx("li",{style:c,children:"Address any academic weaknesses before high school"})]})]}),r.jsxs("div",{style:{backgroundColor:"#005F81",color:"white",padding:"1rem",borderRadius:"0.25rem",marginTop:"1.5rem"},children:[r.jsx("p",{style:{fontFamily:"Montserrat, sans-serif",fontWeight:"600",marginBottom:"0.5rem"},children:"Military Family Tip:"}),r.jsx("p",{style:{fontFamily:"Open Sans, sans-serif",margin:0},children:"If a PCS move is anticipated during middle school, research graduation requirements in potential future locations. This will help ensure your student takes courses that will transfer appropriately and keep them on track."})]})]}),r.jsxs("div",{id:"high-school",style:h,children:[r.jsx("h2",{style:l,children:"High School Year-by-Year Checklist"}),r.jsx("p",{style:o,children:"High school is a time of increasing academic rigor and important decisions about the future. This checklist provides military families with a roadmap for supporting their students through each year of high school."}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"9th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Meet with counselor to confirm four-year academic plan"}),r.jsx("li",{style:c,children:"Understand credit requirements for graduation"}),r.jsx("li",{style:c,children:"Establish strong study habits and time management"}),r.jsx("li",{style:c,children:"Get involved in meaningful extracurricular activities"}),r.jsx("li",{style:c,children:"Begin tracking activities, awards, and community service"}),r.jsx("li",{style:c,children:"Explore summer opportunities (jobs, volunteering, enrichment)"}),r.jsx("li",{style:c,children:"Develop relationships with teachers and mentors"}),r.jsx("li",{style:c,children:"Take challenging courses appropriate to ability level"}),r.jsx("li",{style:c,children:"Begin exploring career interests"}),r.jsx("li",{style:c,children:"Create a system for organizing school materials"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"10th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Review and adjust four-year academic plan"}),r.jsx("li",{style:c,children:"Take PSAT for practice"}),r.jsx("li",{style:c,children:"Begin researching college options and requirements"}),r.jsx("li",{style:c,children:"Consider taking SAT Subject Tests in completed courses"}),r.jsx("li",{style:c,children:"Continue involvement in extracurricular activities"}),r.jsx("li",{style:c,children:"Update activity and achievement records"}),r.jsx("li",{style:c,children:"Explore leadership opportunities"}),r.jsx("li",{style:c,children:"Attend college fairs and information sessions"}),r.jsx("li",{style:c,children:"Consider job shadowing or career exploration activities"}),r.jsx("li",{style:c,children:"Research summer programs related to interests"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"11th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Take challenging courses in areas of strength and interest"}),r.jsx("li",{style:c,children:"Take PSAT/NMSQT in October"}),r.jsx("li",{style:c,children:"Prepare for and take SAT and/or ACT (spring)"}),r.jsx("li",{style:c,children:"Research colleges more intensively"}),r.jsx("li",{style:c,children:"Visit college campuses when possible"}),r.jsx("li",{style:c,children:"Meet with college representatives at school"}),r.jsx("li",{style:c,children:"Take leadership roles in activities"}),r.jsx("li",{style:c,children:"Update resume and activity records"}),r.jsx("li",{style:c,children:"Identify potential recommendation writers"}),r.jsx("li",{style:c,children:"Research scholarship opportunities"}),r.jsx("li",{style:c,children:"Consider military academy or ROTC options if interested"}),r.jsx("li",{style:c,children:"Attend college planning and financial aid workshops"})]})]}),r.jsxs("div",{style:p,children:[r.jsx("h3",{style:f,children:"12th Grade"}),r.jsxs("ul",{style:s,children:[r.jsx("li",{style:c,children:"Finalize college list with safety, match, and reach schools"}),r.jsx("li",{style:c,children:"Retake SAT/ACT if needed (early fall)"}),r.jsx("li",{style:c,children:"Request letters of recommendation"}),r.jsx("li",{style:c,children:"Complete applications before deadlines"}),r.jsx("li",{style:c,children:"Submit FAFSA as soon as possible after October 1"}),r.jsx("li",{style:c,children:"Apply for scholarships throughout the year"}),r.jsx("li",{style:c,children:"Maintain strong academic performance"}),r.jsx("li",{style:c,children:"Compare financial aid offers"}),r.jsx("li",{style:c,children:"Make final college decision by May 1"}),r.jsx("li",{style:c,children:"Request final transcript be sent to selected college"}),r.jsx("li",{style:c,children:"Complete housing and orientation registration"}),r.jsx("li",{style:c,children:"Apply for military-connected benefits if applicable"})]})]}),r.jsx("div",{style:m,children:r.jsx("p",{children:'"High school students in military families should be particularly proactive about maintaining detailed records of coursework, activities, and achievements to facilitate transitions between schools." - April 2024 article'})}),r.jsx("div",{style:m,children:r.jsx("p",{children:'"Military families should research the specific graduation requirements in potential future locations to ensure students remain on track despite moves." - August 2024 article'})}),r.jsx("p",{style:o,children:"These checklists and timelines provide frameworks that can be customized to your family's specific circumstances. They are designed to help you anticipate key milestones and tasks, reducing stress during transitions and ensuring important educational needs are addressed at the appropriate times. Consider creating your own personalized versions based on your children's ages, educational needs, and your family's military situation."})]})]})]})},bj=()=>{const{results:t,query:l,isLoading:o,activeFilters:s,toggleFilter:c,filterOptions:h,highlightMatches:p,getContextSnippet:f}=nd(),m=L=>({__html:p(L,l)}),g=L=>{const W=h.find(K=>K.id===L);return W?W.label:L},y=L=>{switch(L){case"chapter":return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#005F81",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"})});case"section":return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#005F81",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"}),r.jsx("path",{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"})]});case"glossary":return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#005F81",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"}),r.jsx("path",{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"})]});case"checklist":case"checklist-item":return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#005F81",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}),r.jsx("path",{d:"M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"})]});case"resource":return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#005F81",viewBox:"0 0 16 16",children:r.jsx("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"})});default:return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#005F81",viewBox:"0 0 16 16",children:[r.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.jsx("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})}},b={width:"100%"},w={display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1.5rem"},S=L=>({display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.75rem",borderRadius:"0.375rem",border:"1px solid #d1d5db",backgroundColor:L?"#005F81":"white",color:L?"white":"#4b5563",fontSize:"0.875rem",cursor:"pointer",transition:"all 0.2s"}),C={padding:"1.25rem",borderRadius:"0.5rem",border:"1px solid #e5e7eb",marginBottom:"1rem",backgroundColor:"white",transition:"transform 0.2s, box-shadow 0.2s"},R={fontSize:"1.25rem",fontWeight:"600",color:"#005F81",marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"0.5rem"},D={fontSize:"0.875rem",color:"#6b7280",marginBottom:"0.5rem"},M={fontSize:"1rem",color:"#4b5563",marginBottom:"1rem",lineHeight:"1.5"},V={display:"inline-flex",alignItems:"center",gap:"0.25rem",padding:"0.25rem 0.5rem",borderRadius:"0.25rem",backgroundColor:"#f3f4f6",color:"#4b5563",fontSize:"0.75rem",fontWeight:"500"},z={display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem",color:"#6b7280"},N={textAlign:"center",padding:"2rem",color:"#6b7280"};return r.jsxs("div",{style:b,children:[r.jsxs("div",{style:w,children:[r.jsx("div",{style:{marginRight:"0.5rem",color:"#4b5563",fontSize:"0.875rem",display:"flex",alignItems:"center"},children:"Filter by:"}),h.map(L=>r.jsxs("button",{style:S(s[L.id]),onClick:()=>c(L.id),"aria-pressed":s[L.id],children:[y(L.id),L.label]},L.id))]}),o&&r.jsxs("div",{style:z,children:[r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"animate-spin mr-2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"#d1d5db",strokeWidth:"4",fill:"none"}),r.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12",stroke:"#005F81",strokeWidth:"4"})]}),r.jsx("span",{children:"Searching..."})]}),!o&&t.length===0&&l&&r.jsxs("div",{style:N,children:[r.jsxs("p",{children:['No results found for "',l,'"']}),r.jsx("p",{style:{fontSize:"0.875rem",marginTop:"0.5rem"},children:"Try adjusting your search terms or filters"})]}),!o&&t.length>0&&r.jsxs("div",{children:[r.jsxs("p",{style:{marginBottom:"1rem",color:"#6b7280"},children:["Found ",t.length,' results for "',l,'"']}),t.map((L,W)=>r.jsx("div",{style:C,onMouseEnter:K=>{K.currentTarget.style.transform="translateY(-2px)",K.currentTarget.style.boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"},onMouseLeave:K=>{K.currentTarget.style.transform="none",K.currentTarget.style.boxShadow="none"},children:r.jsxs(Y,{to:L.item.url,style:{textDecoration:"none"},children:[r.jsxs("h3",{style:R,children:[y(L.item.type),r.jsx("span",{dangerouslySetInnerHTML:m(L.item.title)})]}),L.item.parentTitle&&r.jsxs("div",{style:D,children:["In: ",L.item.parentTitle]}),r.jsx("div",{style:M,children:r.jsx("div",{dangerouslySetInnerHTML:m(f(L.item.content||L.item.description||"",l))})}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsx("div",{style:V,children:g(L.item.type)}),r.jsxs("div",{style:{fontSize:"0.875rem",color:"#6b7280"},children:["Score: ",Math.round((1-L.score)*100),"%"]})]})]})},W))]})]})},xj=()=>{const t=lt(),{query:l,setQuery:o}=nd();T.useEffect(()=>{const w=new URLSearchParams(t.search).get("q");w&&o(w)},[t.search,o]);const s={maxWidth:"1200px",margin:"0 auto",padding:"2rem 1rem"},c={marginBottom:"2rem"},h={fontSize:"2rem",fontWeight:"700",color:"#003260",marginBottom:"1rem"},p={display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.875rem",color:"#6b7280",marginBottom:"1.5rem"},f={marginBottom:"2rem"},m={width:"100%",padding:"0.75rem 1rem",borderRadius:"0.375rem",border:"1px solid #d1d5db",fontSize:"1rem",outline:"none",backgroundColor:"white",marginBottom:"1rem"},g={padding:"0.75rem 1.5rem",backgroundColor:"#005F81",color:"white",borderRadius:"0.375rem",border:"none",fontSize:"1rem",fontWeight:"500",cursor:"pointer",transition:"background-color 0.2s"},y={backgroundColor:"#f9fafb",borderRadius:"0.5rem",padding:"2rem"};return r.jsxs("div",{style:s,children:[r.jsxs("header",{style:c,children:[r.jsxs("div",{style:p,children:[r.jsx(Y,{to:"/",style:{color:"#005F81",textDecoration:"none"},children:"Home"}),r.jsx("span",{children:"/"}),r.jsx("span",{children:"Search Results"})]}),r.jsx("h1",{style:h,children:"Search Results"}),r.jsxs("form",{style:f,onSubmit:b=>{b.preventDefault()},children:[r.jsx("input",{type:"text",placeholder:"Refine your search...",value:l,onChange:b=>o(b.target.value),style:m,"aria-label":"Refine search"}),r.jsx("button",{type:"submit",style:g,onMouseOver:b=>b.target.style.backgroundColor="#004c68",onMouseOut:b=>b.target.style.backgroundColor="#005F81",children:"Search"})]})]}),r.jsx("div",{style:y,children:r.jsx(bj,{})}),r.jsxs("div",{style:{marginTop:"2rem",padding:"1.5rem",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #e5e7eb"},children:[r.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600",color:"#003260",marginBottom:"1rem"},children:"Search Tips"}),r.jsxs("ul",{style:{listStyleType:"disc",paddingLeft:"1.5rem",color:"#4b5563"},children:[r.jsx("li",{style:{marginBottom:"0.5rem"},children:'Use specific terms to narrow your results (e.g., "deployment checklist" instead of just "checklist")'}),r.jsx("li",{style:{marginBottom:"0.5rem"},children:'Try different variations of terms (e.g., "PCS", "permanent change of station")'}),r.jsx("li",{style:{marginBottom:"0.5rem"},children:"Use the filters to focus on specific types of content"}),r.jsx("li",{style:{marginBottom:"0.5rem"},children:"Check spelling if you're not getting expected results"}),r.jsxs("li",{children:["Browse the ",r.jsx(Y,{to:"/glossary",style:{color:"#005F81",textDecoration:"none"},children:"Glossary"})," for military education terms"]})]})]})]})};function wj(){return r.jsx(yS,{children:r.jsx(Yw,{children:r.jsxs($i,{path:"/",element:r.jsx(sj,{}),children:[r.jsx($i,{index:!0,element:r.jsx(rj,{})}),r.jsx($i,{path:"guide/:chapterId",element:r.jsx(dj,{})}),r.jsx($i,{path:"glossary",element:r.jsx(fj,{})}),r.jsx($i,{path:"references",element:r.jsx(yj,{})}),r.jsx($i,{path:"checklists",element:r.jsx(vj,{})}),r.jsx($i,{path:"search",element:r.jsx(xj,{})}),r.jsx($i,{path:"contact",element:r.jsx(mj,{})}),r.jsx($i,{path:"about",element:r.jsx(gj,{})})]})})})}Xx.createRoot(document.getElementById("root")).render(r.jsx(Hx.StrictMode,{children:r.jsx(m1,{children:r.jsx(wj,{})})}));
