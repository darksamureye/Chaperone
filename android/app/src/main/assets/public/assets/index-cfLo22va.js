const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/web-DWVste5V.js","assets/vendor-DVfTWs7g.js","assets/firebase-DTM_JPLt.js","assets/web-De3niJom.js","assets/web-BluYg4wG.js"])))=>i.map(i=>d[i]);
import{r as u,a as yn,c as Fe,h as xn,f as wn}from"./vendor-DVfTWs7g.js";import{i as wt,g as bt,a as vt,b as jt,r as bn,u as vn,c as jn,d as In,e as le,f as de,_ as ue,C as me,h as we,E as It,F as Nt,o as Nn,L as Sn,j as St,k as kt,l as kn,m as Pt,n as At,p as Et,v as Tt,q as Ke,s as Pn,t as Me,w as fe,x as An,y as Le,z as En,A as Rt,B as Ue,D as Tn,G as Rn,H as Cn}from"./firebase-DTM_JPLt.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var Ct={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn=u,Ln=Symbol.for("react.element"),_n=Symbol.for("react.fragment"),Dn=Object.prototype.hasOwnProperty,On=Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$n={key:!0,ref:!0,__self:!0,__source:!0};function Mt(e,t,n){var s,a={},r=null,o=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Dn.call(t,s)&&!$n.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:Ln,type:e,key:r,ref:o,props:a,_owner:On.current}}be.Fragment=_n;be.jsx=Mt;be.jsxs=Mt;Ct.exports=be;var i=Ct.exports,Lt,Xe=yn;Lt=Xe.createRoot,Xe.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),w=(e,t)=>{const n=u.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:c="",children:l,...d},m)=>u.createElement("svg",{ref:m,...Fn,width:a,height:a,stroke:s,strokeWidth:o?Number(r)*24/Number(a):r,className:["lucide",`lucide-${Un(e)}`,c].join(" "),...d},[...t.map(([f,g])=>u.createElement(f,g)),...Array.isArray(l)?l:[l]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=w("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=w("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=w("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=w("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=w("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=w("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=w("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=w("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=w("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=w("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=w("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=w("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=w("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=w("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=w("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=w("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=w("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=w("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=w("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=w("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=w("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ar(){const[e,t]=u.useState(!1);return{isMenuOpen:e,toggleMenu:()=>{t(!e)}}}function ir(){const{toggleMenu:e}=ar();return i.jsx("header",{className:"bg-white shadow-sm",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between items-center h-16",children:[i.jsxs("div",{className:"flex items-center",children:[i.jsx("button",{onClick:e,className:"p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:i.jsx(Zn,{className:"h-6 w-6"})}),i.jsx("h1",{className:"ml-4 text-xl font-bold text-gray-900",children:"MyApp"})]}),i.jsxs("nav",{className:"flex space-x-4",children:[i.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium",children:"Home"}),i.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium",children:"About"})]})]})})})}function or(){return i.jsx("footer",{className:"bg-gray-800 text-white",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," MyApp. All rights reserved."]}),i.jsxs("div",{className:"flex space-x-6",children:[i.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Privacy"}),i.jsx("a",{href:"#",className:"text-gray-300 hover:text-white",children:"Terms"})]})]})})})}function cr({children:e}){return i.jsxs("div",{className:"min-h-screen flex flex-col",children:[i.jsx(ir,{}),i.jsx("main",{className:"flex-grow",children:e}),i.jsx(or,{})]})}const R=Fe(e=>({user:null,isAuthenticated:!1,isAnonymous:!1,setUser:t=>e({user:t,isAuthenticated:!!t,isAnonymous:!1}),setAnonymous:t=>e({isAnonymous:t,isAuthenticated:t,user:null})})),lr={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},He=wt(lr);bt(He);const dr=vt(He),ur=jt(He);async function mr(e,t){const n=Date.now(),s=`recordings/${t}/${n}.webm`,a=bn(ur,s);await vn(a,e);const r=await jn(a);return await In(le(dr,"recordings"),{childId:t,timestamp:n,url:r,duration:3e5}),r}const fr=Fe((e,t)=>({recordings:[],isUploading:!1,addRecording:async n=>{e({isUploading:!0});try{const s=R.getState().user;s!=null&&s.id&&(await mr(n,s.id),e(a=>({recordings:[...a.recordings,n],isUploading:!1})))}catch(s){console.error("Error uploading recording:",s),e({isUploading:!1})}},clearRecordings:()=>e({recordings:[]})})),hr="modulepreload",gr=function(e){return"/"+e},tt={},Be=function(t,n,s){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(n.map(l=>{if(l=gr(l),l in tt)return;tt[l]=!0;const d=l.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":hr,d||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((g,p)=>{f.addEventListener("load",g),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return a.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return t().catch(r)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const pr=e=>{const t=new Map;t.set("web",{name:"web"});const n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t},s=(r,o)=>{n.platforms.set(r,o)},a=r=>{n.platforms.has(r)&&(n.currentPlatform=n.platforms.get(r))};return n.addPlatform=s,n.setPlatform=a,n},yr=e=>e.CapacitorPlatforms=pr(e),Dt=yr(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});Dt.addPlatform;Dt.setPlatform;var J;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(J||(J={}));class Ee extends Error{constructor(t,n,s){super(t),this.message=t,this.code=n,this.data=s}}const xr=e=>{var t,n;return e!=null&&e.androidBridge?"android":!((n=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},wr=e=>{var t,n,s,a,r;const o=e.CapacitorCustomPlatform||null,c=e.Capacitor||{},l=c.Plugins=c.Plugins||{},d=e.CapacitorPlatforms,m=()=>o!==null?o.name:xr(e),f=((t=d==null?void 0:d.currentPlatform)===null||t===void 0?void 0:t.getPlatform)||m,g=()=>f()!=="web",p=((n=d==null?void 0:d.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||g,I=v=>{const j=K.get(v);return!!(j!=null&&j.platforms.has(f())||b(v))},h=((s=d==null?void 0:d.currentPlatform)===null||s===void 0?void 0:s.isPluginAvailable)||I,y=v=>{var j;return(j=c.PluginHeaders)===null||j===void 0?void 0:j.find(V=>V.name===v)},b=((a=d==null?void 0:d.currentPlatform)===null||a===void 0?void 0:a.getPluginHeader)||y,x=v=>e.console.error(v),k=(v,j,V)=>Promise.reject(`${V} does not have an implementation of "${j}".`),K=new Map,ke=(v,j={})=>{const V=K.get(v);if(V)return console.warn(`Capacitor plugin "${v}" already registered. Cannot register plugins twice.`),V.proxy;const H=f(),W=b(v);let M;const hn=async()=>(!M&&H in j?M=typeof j[H]=="function"?M=await j[H]():M=j[H]:o!==null&&!M&&"web"in j&&(M=typeof j.web=="function"?M=await j.web():M=j.web),M),gn=(S,P)=>{var C,D;if(W){const O=W==null?void 0:W.methods.find(T=>P===T.name);if(O)return O.rtype==="promise"?T=>c.nativePromise(v,P.toString(),T):(T,ne)=>c.nativeCallback(v,P.toString(),T,ne);if(S)return(C=S[P])===null||C===void 0?void 0:C.bind(S)}else{if(S)return(D=S[P])===null||D===void 0?void 0:D.bind(S);throw new Ee(`"${v}" plugin is not implemented on ${H}`,J.Unimplemented)}},Pe=S=>{let P;const C=(...D)=>{const O=hn().then(T=>{const ne=gn(T,S);if(ne){const re=ne(...D);return P=re==null?void 0:re.remove,re}else throw new Ee(`"${v}.${S}()" is not implemented on ${H}`,J.Unimplemented)});return S==="addListener"&&(O.remove=async()=>P()),O};return C.toString=()=>`${S.toString()}() { [capacitor code] }`,Object.defineProperty(C,"name",{value:S,writable:!1,configurable:!1}),C},Je=Pe("addListener"),Ye=Pe("removeListener"),pn=(S,P)=>{const C=Je({eventName:S},P),D=async()=>{const T=await C;Ye({eventName:S,callbackId:T},P)},O=new Promise(T=>C.then(()=>T({remove:D})));return O.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await D()},O},Ae=new Proxy({},{get(S,P){switch(P){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return W?pn:Je;case"removeListener":return Ye;default:return Pe(P)}}});return l[v]=Ae,K.set(v,{name:v,proxy:Ae,platforms:new Set([...Object.keys(j),...W?[H]:[]])}),Ae},fn=((r=d==null?void 0:d.currentPlatform)===null||r===void 0?void 0:r.registerPlugin)||ke;return c.convertFileSrc||(c.convertFileSrc=v=>v),c.getPlatform=f,c.handleError=x,c.isNativePlatform=p,c.isPluginAvailable=h,c.pluginMethodNoop=k,c.registerPlugin=fn,c.Exception=Ee,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},br=e=>e.Capacitor=wr(e),he=br(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ee=he.registerPlugin;he.Plugins;class Ot{constructor(t){this.listeners={},this.windowListeners={},t&&(console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=t)}addListener(t,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(n);const a=this.windowListeners[t];a&&!a.registered&&this.addWindowListener(a);const r=async()=>this.removeListener(t,n),o=Promise.resolve({remove:r});return Object.defineProperty(o,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await r()}}),o}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,n){const s=this.listeners[t];s&&s.forEach(a=>a(n))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:s=>{this.notifyListeners(n,s)}}}unimplemented(t="not implemented"){return new he.Exception(t,J.Unimplemented)}unavailable(t="not available"){return new he.Exception(t,J.Unavailable)}async removeListener(t,n){const s=this.listeners[t];if(!s)return;const a=s.indexOf(n);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}}const nt=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),rt=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class vr extends Ot{async getCookies(){const t=document.cookie,n={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,r]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=rt(a).trim(),r=rt(r).trim(),n[a]=r}),n}async setCookie(t){try{const n=nt(t.key),s=nt(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,r=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${n}=${s||""}${a}; path=${r}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const n of t)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}ee("CapacitorCookies",{web:()=>new vr});const jr=async e=>new Promise((t,n)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>n(a),s.readAsDataURL(e)}),Ir=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,r,o)=>(a[r]=e[t[o]],a),{})},Nr=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[r,o]=a;let c,l;return Array.isArray(o)?(l="",o.forEach(d=>{c=t?encodeURIComponent(d):d,l+=`${r}=${c}&`}),l.slice(0,-1)):(c=t?encodeURIComponent(o):o,l=`${r}=${c}`),`${s}&${l}`},"").substr(1):null,Sr=(e,t={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},t),a=Ir(e.headers)["content-type"]||"";if(typeof e.data=="string")n.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[o,c]of Object.entries(e.data||{}))r.set(o,c);n.body=r.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const r=new FormData;if(e.data instanceof FormData)e.data.forEach((c,l)=>{r.append(l,c)});else for(const c of Object.keys(e.data))r.append(c,e.data[c]);n.body=r;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(a.includes("application/json")||typeof e.data=="object")&&(n.body=JSON.stringify(e.data));return n};class kr extends Ot{async request(t){const n=Sr(t,t.webFetchExtra),s=Nr(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,r=await fetch(a,n),o=r.headers.get("content-type")||"";let{responseType:c="text"}=r.ok?t:{};o.includes("application/json")&&(c="json");let l,d;switch(c){case"arraybuffer":case"blob":d=await r.blob(),l=await jr(d);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const m={};return r.headers.forEach((f,g)=>{m[g]=f}),{data:l,headers:m,status:r.status,url:r.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}ee("CapacitorHttp",{web:()=>new kr});const se=ee("VoiceRecorder",{web:()=>Be(()=>import("./web-DWVste5V.js"),__vite__mapDeps([0,1,2])).then(e=>new e.VoiceRecorderWeb)}),Pr=ee("App",{web:()=>Be(()=>import("./web-De3niJom.js"),__vite__mapDeps([3,1,2])).then(e=>new e.AppWeb)});var ge;(function(e){e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT"})(ge||(ge={}));var st;(function(e){e.Success="SUCCESS",e.Warning="WARNING",e.Error="ERROR"})(st||(st={}));const at=ee("Haptics",{web:()=>Be(()=>import("./web-BluYg4wG.js"),__vite__mapDeps([4,1,2])).then(e=>new e.HapticsWeb)});function Ar(){const[e,t]=u.useState(!1);R();const{addRecording:n}=fr(),s=u.useRef(),a=u.useRef(0),r=async()=>{try{if(!(await se.requestAudioRecordingPermission()).value)throw new Error("Permission denied");return await at.impact({style:ge.Heavy}),await se.startRecording(),a.current=Date.now(),t(!0),s.current=setInterval(async()=>{await o(),await c()},5*60*1e3),Pr.addListener("appStateChange",async({isActive:m})=>{m||console.log("App went to background, recording continues")}),!0}catch(d){throw console.error("Error starting recording:",d),t(!1),d}},o=async()=>{try{const d=await se.stopRecording(),m=Date.now()-a.current;if(d.value&&d.value.recordDataBase64){const g=await(await fetch(`data:${d.value.mimeType};base64,${d.value.recordDataBase64}`)).blob();await n(g)}}catch(d){throw console.error("Error stopping segment:",d),d}},c=async()=>{try{await se.startRecording(),a.current=Date.now()}catch(d){throw console.error("Error starting new segment:",d),t(!1),d}},l=async()=>{try{return s.current&&clearInterval(s.current),await o(),await at.impact({style:ge.Medium}),t(!1),!0}catch(d){throw console.error("Error stopping recording:",d),d}};return u.useEffect(()=>()=>{s.current&&clearInterval(s.current),e&&l().catch(console.error)},[]),{isActive:e,startRecording:r,stopRecording:l}}const Er={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"",VITE_FIREBASE_APP_ID:"",VITE_FIREBASE_AUTH_DOMAIN:"",VITE_FIREBASE_MEASUREMENT_ID:"",VITE_FIREBASE_MESSAGING_SENDER_ID:"",VITE_FIREBASE_PROJECT_ID:"",VITE_FIREBASE_STORAGE_BUCKET:""};function Tr(e,t){let n;try{n=e()}catch{return}return{getItem:a=>{var r;const o=l=>l===null?null:JSON.parse(l,void 0),c=(r=n.getItem(a))!=null?r:null;return c instanceof Promise?c.then(o):o(c)},setItem:(a,r)=>n.setItem(a,JSON.stringify(r,void 0)),removeItem:a=>n.removeItem(a)}}const Q=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(s){return Q(s)(n)},catch(s){return this}}}catch(n){return{then(s){return this},catch(s){return Q(s)(n)}}}},Rr=(e,t)=>(n,s,a)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:y=>y,version:0,merge:(y,b)=>({...b,...y}),...t},o=!1;const c=new Set,l=new Set;let d;try{d=r.getStorage()}catch{}if(!d)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...y)},s,a);const m=Q(r.serialize),f=()=>{const y=r.partialize({...s()});let b;const x=m({state:y,version:r.version}).then(k=>d.setItem(r.name,k)).catch(k=>{b=k});if(b)throw b;return x},g=a.setState;a.setState=(y,b)=>{g(y,b),f()};const p=e((...y)=>{n(...y),f()},s,a);let I;const h=()=>{var y;if(!d)return;o=!1,c.forEach(x=>x(s()));const b=((y=r.onRehydrateStorage)==null?void 0:y.call(r,s()))||void 0;return Q(d.getItem.bind(d))(r.name).then(x=>{if(x)return r.deserialize(x)}).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==r.version){if(r.migrate)return r.migrate(x.state,x.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return x.state}).then(x=>{var k;return I=r.merge(x,(k=s())!=null?k:p),n(I,!0),f()}).then(()=>{b==null||b(I,void 0),o=!0,l.forEach(x=>x(I))}).catch(x=>{b==null||b(void 0,x)})};return a.persist={setOptions:y=>{r={...r,...y},y.getStorage&&(d=y.getStorage())},clearStorage:()=>{d==null||d.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>h(),hasHydrated:()=>o,onHydrate:y=>(c.add(y),()=>{c.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},h(),I||p},Cr=(e,t)=>(n,s,a)=>{let r={storage:Tr(()=>localStorage),partialize:h=>h,version:0,merge:(h,y)=>({...y,...h}),...t},o=!1;const c=new Set,l=new Set;let d=r.storage;if(!d)return e((...h)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...h)},s,a);const m=()=>{const h=r.partialize({...s()});return d.setItem(r.name,{state:h,version:r.version})},f=a.setState;a.setState=(h,y)=>{f(h,y),m()};const g=e((...h)=>{n(...h),m()},s,a);a.getInitialState=()=>g;let p;const I=()=>{var h,y;if(!d)return;o=!1,c.forEach(x=>{var k;return x((k=s())!=null?k:g)});const b=((y=r.onRehydrateStorage)==null?void 0:y.call(r,(h=s())!=null?h:g))||void 0;return Q(d.getItem.bind(d))(r.name).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==r.version){if(r.migrate)return[!0,r.migrate(x.state,x.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,x.state];return[!1,void 0]}).then(x=>{var k;const[K,ke]=x;if(p=r.merge(ke,(k=s())!=null?k:g),n(p,!0),K)return m()}).then(()=>{b==null||b(p,void 0),p=s(),o=!0,l.forEach(x=>x(p))}).catch(x=>{b==null||b(void 0,x)})};return a.persist={setOptions:h=>{r={...r,...h},h.storage&&(d=h.storage)},clearStorage:()=>{d==null||d.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>I(),hasHydrated:()=>o,onHydrate:h=>(c.add(h),()=>{c.delete(h)}),onFinishHydration:h=>(l.add(h),()=>{l.delete(h)})},r.skipHydration||I(),p||g},Mr=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?((Er?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Rr(e,t)):Cr(e,t),Lr=Mr,$t=Fe()(Lr((e,t)=>({stopPin:"1234",setStopPin:n=>n.length===4&&/^\d+$/.test(n)?(e({stopPin:n}),!0):!1,validatePin:n=>t().stopPin===n,resetPin:()=>e({stopPin:"1234"})}),{name:"settings-storage"}));function _r({isOpen:e,onClose:t,onSubmit:n,title:s}){const[a,r]=u.useState("");if(!e)return null;const o=c=>{c.preventDefault(),n(a),r("")};return i.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50",children:i.jsxs("div",{className:"bg-white rounded-2xl p-6 w-80 shadow-2xl",children:[i.jsxs("div",{className:"flex justify-between items-center mb-6",children:[i.jsx("h2",{className:"text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent",children:s}),i.jsx("button",{onClick:t,className:"p-1 hover:bg-gray-100 rounded-full transition-colors",children:i.jsx(sr,{className:"h-5 w-5"})})]}),i.jsxs("form",{onSubmit:o,children:[i.jsx("input",{type:"password",value:a,onChange:c=>r(c.target.value),placeholder:"Enter PIN",className:`w-full px-4 py-3 border-2 border-gray-200 rounded-xl mb-4
                     focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                     transition-all duration-200`,maxLength:4,pattern:"[0-9]*",inputMode:"numeric",autoFocus:!0}),i.jsx("button",{type:"submit",className:`w-full bg-gradient-to-r from-indigo-500 to-purple-500
                     text-white py-3 rounded-xl font-medium
                     hover:from-indigo-600 hover:to-purple-600
                     transform transition-all duration-200
                     hover:shadow-lg active:scale-98`,children:"Submit"})]})]})})}function Dr({isRecording:e,onClick:t}){return i.jsx("button",{onClick:t,className:`
        w-48 h-48 rounded-full shadow-xl
        flex items-center justify-center
        transform transition-all duration-300
        ${e?"bg-red-500 hover:bg-red-600 scale-110":"bg-blue-500 hover:bg-blue-600"}
        active:scale-95
      `,children:e?i.jsx(Jn,{className:"h-24 w-24 text-white"}):i.jsx(_t,{className:"h-24 w-24 text-white"})})}const Or=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n.toString().padStart(2,"0")}`};function $r({isRecording:e,duration:t}){return i.jsxs("div",{className:`
      flex items-center gap-2 px-4 py-2 rounded-full
      ${e?"bg-red-500/10 text-red-500":"bg-gray-100 text-gray-500"}
      transition-colors duration-300
    `,children:[i.jsx(Hn,{className:"h-4 w-4"}),i.jsx("span",{className:"font-medium",children:e?Or(t):"Ready to Record"})]})}function Fr({isRecording:e,duration:t,onStartRecording:n,onStopRecording:s}){return i.jsxs("div",{className:"flex flex-col items-center gap-6",children:[i.jsx($r,{isRecording:e,duration:t}),i.jsx(Dr,{isRecording:e,onClick:e?s:n}),i.jsx("p",{className:"text-lg text-white/90 max-w-xs text-center",children:e?"Your guardian is watching over you!":"Tap the magical orb to activate protection"})]})}function Ft(){return i.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.1",alt:"",className:"absolute -bottom-20 -right-20 w-96 h-96 object-contain opacity-40 animate-float-delayed"}),i.jsx("img",{src:"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.1",alt:"",className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] object-contain opacity-30 animate-pulse-slow"})]})}const it=[{text:"Safety and security don't just happen, they are the result of collective consensus and public investment.",author:"Nelson Mandela"},{text:"The safety of the people shall be the highest law.",author:"Marcus Tullius Cicero"},{text:"Better to be safe than sorry.",author:"American Proverb"},{text:"Security is not the absence of danger, but the presence of God, no matter what the danger.",author:"Anonymous"},{text:"In matters of security, trust but verify.",author:"Russian Proverb"},{text:"Prevention is better than cure.",author:"Desiderius Erasmus"},{text:"The time to repair the roof is when the sun is shining.",author:"John F. Kennedy"},{text:"Safety isn't expensive, it's priceless.",author:"Anonymous"}];function Ut(){const e=new Date,n=Math.floor((e.getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5)%it.length,s=it[n];return i.jsx("div",{className:"w-full max-w-4xl mx-auto px-4 py-6",children:i.jsx("div",{className:"bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6",children:i.jsxs("div",{className:"flex items-start gap-4",children:[i.jsx(Xn,{className:"h-6 w-6 text-indigo-600 flex-shrink-0 mt-1"}),i.jsxs("div",{children:[i.jsxs("p",{className:"text-gray-700 font-medium italic",children:['"',s.text,'"']}),i.jsxs("p",{className:"text-gray-500 text-sm mt-2",children:["— ",s.author]})]})]})})})}function Ur(){const e=u.useRef(null),t=u.useCallback((s,a={})=>{e.current&&e.current.unload();const r=new xn.Howl({src:[s],volume:a.volume??1,loop:a.loop??!1,onend:a.onEnd,html5:!0});return e.current=r,{play:()=>r.play(),stop:()=>r.stop(),pause:()=>r.pause(),volume:o=>r.volume(o)}},[]),n=u.useCallback(()=>{e.current&&(e.current.unload(),e.current=null)},[]);return{play:t,cleanup:n}}function ve({className:e="h-16 w-16"}){return i.jsxs("div",{className:`relative ${e}`,children:[i.jsx(nr,{className:"absolute inset-0 w-full h-full text-white opacity-50 animate-spin-slow"}),i.jsx(Qe,{className:"absolute inset-0 w-full h-full text-white animate-pulse-slow",strokeWidth:1.5}),i.jsx(Qe,{className:"absolute inset-0 w-full h-full text-white/80",strokeWidth:2})]})}const Hr="/sounds/guardian-connect.mp3";function Br({isConnected:e=!1,isFirstConnection:t=!1,onConnectionComplete:n}){const{play:s,cleanup:a}=Ur(),[r,o]=u.useState(!1),c=u.useCallback(()=>{if(t&&e)try{const l=s(Hr,{volume:.4,onEnd:()=>{o(!1),n==null||n()}});return o(!0),l.play(),()=>{l.stop(),o(!1)}}catch(l){console.error("Failed to play connection sound:",l)}},[e,t,n,s]);return u.useEffect(()=>{const l=c();return()=>{a(),l==null||l()}},[c,a]),i.jsx("div",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-50",children:i.jsxs("div",{className:`
        transition-all duration-300
        ${e?"opacity-100 translate-y-0":"opacity-0 -translate-y-4"}
      `,children:[i.jsxs("div",{className:`bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-4 py-2
                      flex items-center gap-2 border-2 border-indigo-100`,children:[i.jsxs("div",{className:"relative",children:[i.jsx(ve,{className:"h-6 w-6"}),i.jsx(qn,{className:"absolute inset-0 w-full h-full text-red-500 animate-pulse"})]}),i.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Guardian is watching over you"})]}),r&&i.jsx("div",{className:`absolute inset-0 bg-indigo-500/20 rounded-full
                        animate-ping pointer-events-none`})]})})}let zr={data:""},qr=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||zr,Gr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Vr=/\/\*[^]*?\*\/|  +/g,ot=/\n+/g,$=(e,t)=>{let n="",s="",a="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?n=r+" "+o+";":s+=r[1]=="f"?$(o,r):r+"{"+$(o,r[1]=="k"?"":t)+"}":typeof o=="object"?s+=$(o,t?t.replace(/([^,])+/g,c=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=$.p?$.p(r,o):r+":"+o+";")}return n+(t&&a?t+"{"+a+"}":a)+s},L={},Ht=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Ht(e[n]);return t}return e},Wr=(e,t,n,s,a)=>{let r=Ht(e),o=L[r]||(L[r]=(l=>{let d=0,m=11;for(;d<l.length;)m=101*m+l.charCodeAt(d++)>>>0;return"go"+m})(r));if(!L[o]){let l=r!==e?e:(d=>{let m,f,g=[{}];for(;m=Gr.exec(d.replace(Vr,""));)m[4]?g.shift():m[3]?(f=m[3].replace(ot," ").trim(),g.unshift(g[0][f]=g[0][f]||{})):g[0][m[1]]=m[2].replace(ot," ").trim();return g[0]})(e);L[o]=$(a?{["@keyframes "+o]:l}:l,n?"":"."+o)}let c=n&&L.g?L.g:null;return n&&(L.g=L[o]),((l,d,m,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=m?l+d.data:d.data+l)})(L[o],t,s,c),o},Zr=(e,t,n)=>e.reduce((s,a,r)=>{let o=t[r];if(o&&o.call){let c=o(n),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;o=l?"."+l:c&&typeof c=="object"?c.props?"":$(c,""):c===!1?"":c}return s+a+(o??"")},"");function je(e){let t=this||{},n=e.call?e(t.p):e;return Wr(n.unshift?n.raw?Zr(n,[].slice.call(arguments,1),t.p):n.reduce((s,a)=>Object.assign(s,a&&a.call?a(t.p):a),{}):n,qr(t.target),t.g,t.o,t.k)}let Bt,_e,De;je.bind({g:1});let _=je.bind({k:1});function Jr(e,t,n,s){$.p=t,Bt=e,_e=n,De=s}function U(e,t){let n=this||{};return function(){let s=arguments;function a(r,o){let c=Object.assign({},r),l=c.className||a.className;n.p=Object.assign({theme:_e&&_e()},c),n.o=/ *go\d+/.test(l),c.className=je.apply(n,s)+(l?" "+l:"");let d=e;return e[0]&&(d=c.as||e,delete c.as),De&&d[0]&&De(c),Bt(d,c)}return a}}var Yr=e=>typeof e=="function",pe=(e,t)=>Yr(e)?e(t):e,Kr=(()=>{let e=0;return()=>(++e).toString()})(),zt=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Xr=20,ie=new Map,Qr=1e3,ct=e=>{if(ie.has(e))return;let t=setTimeout(()=>{ie.delete(e),G({type:4,toastId:e})},Qr);ie.set(e,t)},es=e=>{let t=ie.get(e);t&&clearTimeout(t)},Oe=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Xr)};case 1:return t.toast.id&&es(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:n}=t;return e.toasts.find(r=>r.id===n.id)?Oe(e,{type:1,toast:n}):Oe(e,{type:0,toast:n});case 3:let{toastId:s}=t;return s?ct(s):e.toasts.forEach(r=>{ct(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},oe=[],ce={toasts:[],pausedAt:void 0},G=e=>{ce=Oe(ce,e),oe.forEach(t=>{t(ce)})},ts={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ns=(e={})=>{let[t,n]=u.useState(ce);u.useEffect(()=>(oe.push(n),()=>{let a=oe.indexOf(n);a>-1&&oe.splice(a,1)}),[t]);let s=t.toasts.map(a=>{var r,o;return{...e,...e[a.type],...a,duration:a.duration||((r=e[a.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||ts[a.type],style:{...e.style,...(o=e[a.type])==null?void 0:o.style,...a.style}}});return{...t,toasts:s}},rs=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Kr()}),te=e=>(t,n)=>{let s=rs(t,e,n);return G({type:2,toast:s}),s.id},N=(e,t)=>te("blank")(e,t);N.error=te("error");N.success=te("success");N.loading=te("loading");N.custom=te("custom");N.dismiss=e=>{G({type:3,toastId:e})};N.remove=e=>G({type:4,toastId:e});N.promise=(e,t,n)=>{let s=N.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(a=>(N.success(pe(t.success,a),{id:s,...n,...n==null?void 0:n.success}),a)).catch(a=>{N.error(pe(t.error,a),{id:s,...n,...n==null?void 0:n.error})}),e};var ss=(e,t)=>{G({type:1,toast:{id:e,height:t}})},as=()=>{G({type:5,time:Date.now()})},is=e=>{let{toasts:t,pausedAt:n}=ns(e);u.useEffect(()=>{if(n)return;let r=Date.now(),o=t.map(c=>{if(c.duration===1/0)return;let l=(c.duration||0)+c.pauseDuration-(r-c.createdAt);if(l<0){c.visible&&N.dismiss(c.id);return}return setTimeout(()=>N.dismiss(c.id),l)});return()=>{o.forEach(c=>c&&clearTimeout(c))}},[t,n]);let s=u.useCallback(()=>{n&&G({type:6,time:Date.now()})},[n]),a=u.useCallback((r,o)=>{let{reverseOrder:c=!1,gutter:l=8,defaultPosition:d}=o||{},m=t.filter(p=>(p.position||d)===(r.position||d)&&p.height),f=m.findIndex(p=>p.id===r.id),g=m.filter((p,I)=>I<f&&p.visible).length;return m.filter(p=>p.visible).slice(...c?[g+1]:[0,g]).reduce((p,I)=>p+(I.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:ss,startPause:as,endPause:s,calculateOffset:a}}},os=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,cs=_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ls=_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ds=U("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${os} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${cs} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ls} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,us=_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ms=U("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${us} 1s linear infinite;
`,fs=_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,hs=_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,gs=U("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fs} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${hs} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ps=U("div")`
  position: absolute;
`,ys=U("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,xs=_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ws=U("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${xs} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,bs=({toast:e})=>{let{icon:t,type:n,iconTheme:s}=e;return t!==void 0?typeof t=="string"?u.createElement(ws,null,t):t:n==="blank"?null:u.createElement(ys,null,u.createElement(ms,{...s}),n!=="loading"&&u.createElement(ps,null,n==="error"?u.createElement(ds,{...s}):u.createElement(gs,{...s})))},vs=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,js=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Is="0%{opacity:0;} 100%{opacity:1;}",Ns="0%{opacity:1;} 100%{opacity:0;}",Ss=U("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ks=U("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ps=(e,t)=>{let n=e.includes("top")?1:-1,[s,a]=zt()?[Is,Ns]:[vs(n),js(n)];return{animation:t?`${_(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},As=u.memo(({toast:e,position:t,style:n,children:s})=>{let a=e.height?Ps(e.position||t||"top-center",e.visible):{opacity:0},r=u.createElement(bs,{toast:e}),o=u.createElement(ks,{...e.ariaProps},pe(e.message,e));return u.createElement(Ss,{className:e.className,style:{...a,...n,...e.style}},typeof s=="function"?s({icon:r,message:o}):u.createElement(u.Fragment,null,r,o))});Jr(u.createElement);var Es=({id:e,className:t,style:n,onHeightUpdate:s,children:a})=>{let r=u.useCallback(o=>{if(o){let c=()=>{let l=o.getBoundingClientRect().height;s(e,l)};c(),new MutationObserver(c).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return u.createElement("div",{ref:r,className:t,style:n},a)},Ts=(e,t)=>{let n=e.includes("top"),s=n?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:zt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...s,...a}},Rs=je`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ae=16,lt=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:s,children:a,containerStyle:r,containerClassName:o})=>{let{toasts:c,handlers:l}=is(n);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:ae,left:ae,right:ae,bottom:ae,pointerEvents:"none",...r},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},c.map(d=>{let m=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:s,defaultPosition:t}),g=Ts(m,f);return u.createElement(Es,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Rs:"",style:g},d.type==="custom"?pe(d.message,d):a?a(d):u.createElement(As,{toast:d,position:m}))}))},F=N;function Cs(){const{isActive:e,startRecording:t,stopRecording:n}=Ar(),{validatePin:s}=$t(),[a,r]=u.useState(!1),[o,c]=u.useState(0),[l,d]=u.useState(!0),[m,f]=u.useState(!1);u.useEffect(()=>{const h=setTimeout(()=>{f(!0)},2e3);return()=>clearTimeout(h)},[]),u.useEffect(()=>{let h;if(e){const y=Date.now();h=setInterval(()=>{c(Date.now()-y)},1e3)}else c(0);return()=>clearInterval(h)},[e]);const g=async()=>{try{await t(),F.success("Your guardian is now protecting you!",{icon:"🌟",duration:3e3})}catch{F.error("Oops! Something went wrong",{icon:"😕",duration:3e3})}},p=()=>{r(!0)},I=h=>{s(h)?(n(),r(!1),F.success("Protection paused",{icon:"✨",duration:2e3})):F.error("That's not the right code!",{icon:"🔒",duration:2e3})};return i.jsxs("div",{className:`fixed inset-0 flex flex-col items-center justify-between 
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                    overflow-hidden`,children:[i.jsx(Ft,{}),i.jsx(Br,{isConnected:m,isFirstConnection:l}),i.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYyMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"}),i.jsxs("div",{className:"relative z-10 text-center mt-24",children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx(ve,{})}),i.jsx("h1",{className:"text-6xl font-bold text-white mb-2",children:"Chaperone"}),i.jsx("p",{className:"text-xl text-white/90",children:"Your Magical Guardian"})]}),i.jsx("div",{className:"relative z-10 flex-grow flex items-center",children:i.jsx(Fr,{isRecording:e,duration:o,onStartRecording:g,onStopRecording:p})}),e&&i.jsx("button",{onClick:p,className:`relative z-10 mb-8 px-6 py-3 bg-white/90 rounded-full shadow-lg
                   hover:bg-white transition-colors duration-200
                   text-gray-700 font-medium`,children:"Pause Protection"}),i.jsx("div",{className:"relative z-10 w-full mb-8",children:i.jsx(Ut,{})}),i.jsx(_r,{isOpen:a,onClose:()=>r(!1),onSubmit:I,title:"Enter Guardian's Secret Code"})]})}const qt="@firebase/installations",ze="0.6.9";/**
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
 */const Gt=1e4,Vt=`w:${ze}`,Wt="FIS_v2",Ms="https://firebaseinstallations.googleapis.com/v1",Ls=60*60*1e3,_s="installations",Ds="Installations";/**
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
 */const Os={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},z=new It(_s,Ds,Os);function Zt(e){return e instanceof Nt&&e.code.includes("request-failed")}/**
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
 */function Jt({projectId:e}){return`${Ms}/projects/${e}/installations`}function Yt(e){return{token:e.token,requestStatus:2,expiresIn:Fs(e.expiresIn),creationTime:Date.now()}}async function Kt(e,t){const s=(await t.json()).error;return z.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Xt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $s(e,{refreshToken:t}){const n=Xt(e);return n.append("Authorization",Us(t)),n}async function Qt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Fs(e){return Number(e.replace("s","000"))}function Us(e){return`${Wt} ${e}`}/**
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
 */async function Hs({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=Jt(e),a=Xt(e),r=t.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const o={fid:n,authVersion:Wt,appId:e.appId,sdkVersion:Vt},c={method:"POST",headers:a,body:JSON.stringify(o)},l=await Qt(()=>fetch(s,c));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Yt(d.authToken)}}else throw await Kt("Create Installation",l)}/**
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
 */function en(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Bs(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zs=/^[cdef][\w-]{21}$/,$e="";function qs(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Gs(e);return zs.test(n)?n:$e}catch{return $e}}function Gs(e){return Bs(e).substr(0,22)}/**
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
 */function Ie(e){return`${e.appName}!${e.appId}`}/**
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
 */const tn=new Map;function nn(e,t){const n=Ie(e);rn(n,t),Vs(n,t)}function rn(e,t){const n=tn.get(e);if(n)for(const s of n)s(t)}function Vs(e,t){const n=Ws();n&&n.postMessage({key:e,fid:t}),Zs()}let B=null;function Ws(){return!B&&"BroadcastChannel"in self&&(B=new BroadcastChannel("[Firebase] FID Change"),B.onmessage=e=>{rn(e.data.key,e.data.fid)}),B}function Zs(){tn.size===0&&B&&(B.close(),B=null)}/**
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
 */const Js="firebase-installations-database",Ys=1,q="firebase-installations-store";let Te=null;function qe(){return Te||(Te=Nn(Js,Ys,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(q)}}})),Te}async function ye(e,t){const n=Ie(e),a=(await qe()).transaction(q,"readwrite"),r=a.objectStore(q),o=await r.get(n);return await r.put(t,n),await a.done,(!o||o.fid!==t.fid)&&nn(e,t.fid),t}async function sn(e){const t=Ie(e),s=(await qe()).transaction(q,"readwrite");await s.objectStore(q).delete(t),await s.done}async function Ne(e,t){const n=Ie(e),a=(await qe()).transaction(q,"readwrite"),r=a.objectStore(q),o=await r.get(n),c=t(o);return c===void 0?await r.delete(n):await r.put(c,n),await a.done,c&&(!o||o.fid!==c.fid)&&nn(e,c.fid),c}/**
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
 */async function Ge(e){let t;const n=await Ne(e.appConfig,s=>{const a=Ks(s),r=Xs(e,a);return t=r.registrationPromise,r.installationEntry});return n.fid===$e?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ks(e){const t=e||{fid:qs(),registrationStatus:0};return an(t)}function Xs(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(z.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Qs(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ea(e)}:{installationEntry:t}}async function Qs(e,t){try{const n=await Hs(e,t);return ye(e.appConfig,n)}catch(n){throw Zt(n)&&n.customData.serverCode===409?await sn(e.appConfig):await ye(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ea(e){let t=await dt(e.appConfig);for(;t.registrationStatus===1;)await en(100),t=await dt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ge(e);return s||n}return t}function dt(e){return Ne(e,t=>{if(!t)throw z.create("installation-not-found");return an(t)})}function an(e){return ta(e)?{fid:e.fid,registrationStatus:0}:e}function ta(e){return e.registrationStatus===1&&e.registrationTime+Gt<Date.now()}/**
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
 */async function na({appConfig:e,heartbeatServiceProvider:t},n){const s=ra(e,n),a=$s(e,n),r=t.getImmediate({optional:!0});if(r){const d=await r.getHeartbeatsHeader();d&&a.append("x-firebase-client",d)}const o={installation:{sdkVersion:Vt,appId:e.appId}},c={method:"POST",headers:a,body:JSON.stringify(o)},l=await Qt(()=>fetch(s,c));if(l.ok){const d=await l.json();return Yt(d)}else throw await Kt("Generate Auth Token",l)}function ra(e,{fid:t}){return`${Jt(e)}/${t}/authTokens:generate`}/**
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
 */async function Ve(e,t=!1){let n;const s=await Ne(e.appConfig,r=>{if(!on(r))throw z.create("not-registered");const o=r.authToken;if(!t&&ia(o))return r;if(o.requestStatus===1)return n=sa(e,t),r;{if(!navigator.onLine)throw z.create("app-offline");const c=ca(r);return n=aa(e,c),c}});return n?await n:s.authToken}async function sa(e,t){let n=await ut(e.appConfig);for(;n.authToken.requestStatus===1;)await en(100),n=await ut(e.appConfig);const s=n.authToken;return s.requestStatus===0?Ve(e,t):s}function ut(e){return Ne(e,t=>{if(!on(t))throw z.create("not-registered");const n=t.authToken;return la(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function aa(e,t){try{const n=await na(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await ye(e.appConfig,s),n}catch(n){if(Zt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sn(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ye(e.appConfig,s)}throw n}}function on(e){return e!==void 0&&e.registrationStatus===2}function ia(e){return e.requestStatus===2&&!oa(e)}function oa(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ls}function ca(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function la(e){return e.requestStatus===1&&e.requestTime+Gt<Date.now()}/**
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
 */async function da(e){const t=e,{installationEntry:n,registrationPromise:s}=await Ge(t);return s?s.catch(console.error):Ve(t).catch(console.error),n.fid}/**
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
 */async function ua(e,t=!1){const n=e;return await ma(n),(await Ve(n,t)).token}async function ma(e){const{registrationPromise:t}=await Ge(e);t&&await t}/**
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
 */function fa(e){if(!e||!e.options)throw Re("App Configuration");if(!e.name)throw Re("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Re(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Re(e){return z.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="installations",ha="installations-internal",ga=e=>{const t=e.getProvider("app").getImmediate(),n=fa(t),s=we(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},pa=e=>{const t=e.getProvider("app").getImmediate(),n=we(t,cn).getImmediate();return{getId:()=>da(n),getToken:a=>ua(n,a)}};function ya(){ue(new me(cn,ga,"PUBLIC")),ue(new me(ha,pa,"PRIVATE"))}ya();de(qt,ze);de(qt,ze,"esm2017");/**
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
 */const xe="analytics",xa="firebase_id",wa="origin",ba=60*1e3,va="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",We="https://www.googletagmanager.com/gtag/js";/**
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
 */const A=new Sn("@firebase/analytics");/**
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
 */const ja={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},E=new It("analytics","Analytics",ja);/**
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
 */function Ia(e){if(!e.startsWith(We)){const t=E.create("invalid-gtag-resource",{gtagURL:e});return A.warn(t.message),""}return e}function ln(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Na(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Sa(e,t){const n=Na("firebase-js-sdk-policy",{createScriptURL:Ia}),s=document.createElement("script"),a=`${We}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function ka(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Pa(e,t,n,s,a,r){const o=s[a];try{if(o)await t[o];else{const l=(await ln(n)).find(d=>d.measurementId===a);l&&await t[l.appId]}}catch(c){A.error(c)}e("config",a,r)}async function Aa(e,t,n,s,a){try{let r=[];if(a&&a.send_to){let o=a.send_to;Array.isArray(o)||(o=[o]);const c=await ln(n);for(const l of o){const d=c.find(f=>f.measurementId===l),m=d&&t[d.appId];if(m)r.push(m);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",s,a||{})}catch(r){A.error(r)}}function Ea(e,t,n,s){async function a(r,...o){try{if(r==="event"){const[c,l]=o;await Aa(e,t,n,c,l)}else if(r==="config"){const[c,l]=o;await Pa(e,t,n,s,c,l)}else if(r==="consent"){const[c,l]=o;e("consent",c,l)}else if(r==="get"){const[c,l,d]=o;e("get",c,l,d)}else if(r==="set"){const[c]=o;e("set",c)}else e(r,...o)}catch(c){A.error(c)}}return a}function Ta(e,t,n,s,a){let r=function(...o){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(r=window[a]),window[a]=Ea(r,e,t,n),{gtagCore:r,wrappedGtag:window[a]}}function Ra(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(We)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=30,Ma=1e3;class La{constructor(t={},n=Ma){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const dn=new La;function _a(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Da(e){var t;const{appId:n,apiKey:s}=e,a={method:"GET",headers:_a(s)},r=va.replace("{app-id}",n),o=await fetch(r,a);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(c=l.error.message)}catch{}throw E.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function Oa(e,t=dn,n){const{appId:s,apiKey:a,measurementId:r}=e.options;if(!s)throw E.create("no-app-id");if(!a){if(r)return{measurementId:r,appId:s};throw E.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Ua;return setTimeout(async()=>{c.abort()},ba),un({appId:s,apiKey:a,measurementId:r},o,c,t)}async function un(e,{throttleEndTimeMillis:t,backoffCount:n},s,a=dn){var r;const{appId:o,measurementId:c}=e;try{await $a(s,t)}catch(l){if(c)return A.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Da(e);return a.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!Fa(d)){if(a.deleteThrottleMetadata(o),c)return A.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:c};throw l}const m=Number((r=d==null?void 0:d.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ke(n,a.intervalMillis,Ca):Ke(n,a.intervalMillis),f={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return a.setThrottleMetadata(o,f),A.debug(`Calling attemptFetch again in ${m} millis`),un(e,f,s,a)}}function $a(e,t){return new Promise((n,s)=>{const a=Math.max(t-Date.now(),0),r=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(r),s(E.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Fa(e){if(!(e instanceof Nt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ua{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ha(e,t,n,s,a){if(a&&a.global){e("event",n,s);return}else{const r=await t,o=Object.assign(Object.assign({},s),{send_to:r});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(){if(Et())try{await Tt()}catch(e){return A.warn(E.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return A.warn(E.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function za(e,t,n,s,a,r,o){var c;const l=Oa(e);l.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&A.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>A.error(p)),t.push(l);const d=Ba().then(p=>{if(p)return s.getId()}),[m,f]=await Promise.all([l,d]);Ra(r)||Sa(r,m.measurementId),a("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[wa]="firebase",g.update=!0,f!=null&&(g[xa]=f),a("config",m.measurementId,g),m.measurementId}/**
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
 */class qa{constructor(t){this.app=t}_delete(){return delete X[this.app.options.appId],Promise.resolve()}}let X={},mt=[];const ft={};let Ce="dataLayer",Ga="gtag",ht,mn,gt=!1;function Va(){const e=[];if(Pt()&&e.push("This is a browser extension environment."),At()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,a)=>`(${a+1}) ${s}`).join(" "),n=E.create("invalid-analytics-context",{errorInfo:t});A.warn(n.message)}}function Wa(e,t,n){Va();const s=e.options.appId;if(!s)throw E.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)A.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw E.create("no-api-key");if(X[s]!=null)throw E.create("already-exists",{id:s});if(!gt){ka(Ce);const{wrappedGtag:r,gtagCore:o}=Ta(X,mt,ft,Ce,Ga);mn=r,ht=o,gt=!0}return X[s]=za(e,mt,ft,t,ht,Ce,n),new qa(e)}function Za(e=kt()){e=St(e);const t=we(e,xe);return t.isInitialized()?t.getImmediate():Ja(e)}function Ja(e,t={}){const n=we(e,xe);if(n.isInitialized()){const a=n.getImmediate();if(kn(t,n.getOptions()))return a;throw E.create("already-initialized")}return n.initialize({options:t})}async function Ya(){if(Pt()||!At()||!Et())return!1;try{return await Tt()}catch{return!1}}function Ka(e,t,n,s){e=St(e),Ha(mn,X[e.app.options.appId],t,n,s).catch(a=>A.error(a))}const pt="@firebase/analytics",yt="0.10.8";function Xa(){ue(new me(xe,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return Wa(s,a,n)},"PUBLIC")),ue(new me("analytics-internal",e,"PRIVATE")),de(pt,yt),de(pt,yt,"esm2017");function e(t){try{const n=t.getProvider(xe).getImmediate();return{logEvent:(s,a,r)=>Ka(n,s,a,r)}}catch(n){throw E.create("interop-component-reg-failed",{reason:n})}}}Xa();const Qa={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},Se=Pn().length===0?wt(Qa):kt(),Ze=bt(Se),Y=vt(Se);jt(Se);const ei=async()=>{try{return await Ya()?Za(Se):null}catch(e){return console.warn("Analytics initialization failed:",e),null}},xt=async e=>{try{const t=Me(le(Y,"recordings"),fe("userId","==",e),fe("type","==","audio"),An("timestamp","desc"));return(await Le(t)).docs.map(s=>({id:s.id,...s.data(),timestamp:s.data().timestamp,duration:s.data().duration}))}catch(t){throw console.error("Error fetching recordings:",t),new Error("Failed to fetch recordings")}};function ti(){const[e,t]=u.useState([]),[n,s]=u.useState(!0),[a,r]=u.useState(null),{user:o}=R();return u.useEffect(()=>{(async()=>{if(o!=null&&o.id)try{s(!0),r(null);const d=await xt(o.id);t(d)}catch(d){const m=d instanceof Error?d.message:"Failed to load recordings";r(m),F.error(m)}finally{s(!1)}})()},[o==null?void 0:o.id]),{recordings:e,isLoading:n,error:a,refreshRecordings:async()=>{if(o!=null&&o.id)try{const l=await xt(o.id);t(l)}catch(l){const d=l instanceof Error?l.message:"Failed to refresh recordings";F.error(d)}}}}function ni({transcript:e,isLoading:t}){return t?i.jsx("div",{className:"mt-2 text-sm text-gray-500 animate-pulse",children:"Generating transcript..."}):e?i.jsxs("div",{className:"mt-2 p-3 bg-gray-50 rounded-lg",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[i.jsx(et,{className:"h-4 w-4 text-gray-600"}),i.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Transcript"})]}),i.jsx("p",{className:"text-sm text-gray-700 whitespace-pre-wrap",children:e})]}):i.jsxs("div",{className:"mt-2 text-sm text-gray-500 flex items-center gap-1",children:[i.jsx(et,{className:"h-4 w-4"}),"No transcript available"]})}function ri(){u.useState(null);const[e,t]=u.useState(!1),[n,s]=u.useState(""),[a,r]=u.useState(!1),[o,c]=u.useState(!1);R();const{stopPin:l,setStopPin:d}=$t(),{recordings:m,isLoading:f,refreshRecordings:g}=ti(),p=()=>{r(!a),F.success(a?"Live audio monitoring disabled":"Live audio monitoring enabled")},I=()=>{c(!o),F.success(o?"Location tracking disabled":"Location tracking enabled")};return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2",children:"Guardian Dashboard"}),i.jsx("p",{className:"text-gray-600",children:"Protecting what matters most"})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",children:[i.jsxs("div",{className:`bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-white/80
                        border-2 border-transparent hover:border-indigo-100 transition-colors`,children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-3 bg-indigo-50 rounded-xl",children:i.jsx(Qn,{className:"h-6 w-6 text-indigo-600"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900",children:"Live Monitoring"}),i.jsx("p",{className:"text-sm text-gray-500",children:"Real-time audio feed"})]})]}),i.jsx("button",{onClick:p,className:`p-2 rounded-xl transition-colors ${a?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:i.jsx(_t,{className:"h-5 w-5"})})]}),i.jsx("div",{className:"h-24 bg-gray-50 rounded-xl flex items-center justify-center",children:a?i.jsxs("div",{className:"flex items-center gap-2 text-indigo-600",children:[i.jsx("span",{className:"w-2 h-2 bg-indigo-600 rounded-full animate-pulse"}),"Live Monitoring Active"]}):i.jsx("span",{className:"text-gray-400",children:"Monitoring Inactive"})})]}),i.jsxs("div",{className:`bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-white/80
                        border-2 border-transparent hover:border-indigo-100 transition-colors`,children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-3 bg-green-50 rounded-xl",children:i.jsx(Wn,{className:"h-6 w-6 text-green-600"})}),i.jsxs("div",{children:[i.jsx("h3",{className:"font-semibold text-gray-900",children:"Location Tracking"}),i.jsx("p",{className:"text-sm text-gray-500",children:"Real-time location updates"})]})]}),i.jsx("button",{onClick:I,className:`p-2 rounded-xl transition-colors ${o?"bg-green-600 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:i.jsx(tr,{className:"h-5 w-5"})})]}),i.jsx("div",{className:"h-24 bg-gray-50 rounded-xl flex items-center justify-center",children:o?i.jsxs("div",{className:"flex items-center gap-2 text-green-600",children:[i.jsx("span",{className:"w-2 h-2 bg-green-600 rounded-full animate-pulse"}),"Location Tracking Active"]}):i.jsx("span",{className:"text-gray-400",children:"Tracking Inactive"})})]})]}),i.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 mb-8 backdrop-blur-sm bg-white/80",children:[i.jsxs("h2",{className:"text-xl font-bold mb-6 flex items-center gap-2 text-indigo-700",children:[i.jsx(ve,{className:"h-6 w-6"}),"Security Settings"]}),i.jsxs("form",{onSubmit:handleSetPin,className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Stop Recording PIN"}),i.jsxs("div",{className:"flex gap-4",children:[i.jsx("input",{type:"password",value:n,onChange:h=>s(h.target.value),placeholder:"Enter 4-digit PIN",className:`flex-grow px-4 py-2 border-2 border-gray-200 rounded-xl
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                           transition-all duration-200`,maxLength:4,pattern:"[0-9]*",inputMode:"numeric"}),i.jsx("button",{type:"submit",className:`px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500
                           text-white rounded-xl font-medium
                           hover:from-indigo-600 hover:to-purple-600
                           transform transition-all duration-200
                           hover:shadow-lg active:scale-95`,children:"Set PIN"})]})]}),!l&&i.jsxs("p",{className:"text-red-500 text-sm flex items-center gap-1",children:[i.jsx(Gn,{className:"h-4 w-4"}),"Please set a PIN to protect the stop recording function"]})]})]}),i.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/80",children:[i.jsxs("div",{className:"flex justify-between items-center mb-6",children:[i.jsx("h2",{className:"text-2xl font-bold text-indigo-700",children:"Recordings"}),i.jsx("button",{onClick:g,className:"p-2 rounded-full hover:bg-indigo-50 transition-colors",title:"Refresh recordings",children:i.jsx(er,{className:"h-5 w-5 text-indigo-600"})})]}),i.jsx("div",{className:"space-y-4",children:f?i.jsx("div",{className:"text-center py-12 text-gray-500",children:"Loading recordings..."}):m.length===0?i.jsx("div",{className:"text-center py-12 text-gray-500",children:"No recordings available"}):m.map(h=>i.jsxs("div",{className:`bg-white rounded-xl shadow-sm p-4 flex flex-col
                           border-2 border-gray-50 hover:border-indigo-100 transition-colors`,children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{children:[i.jsx("p",{className:"font-medium text-gray-900",children:wn(h.timestamp,"PPpp")}),i.jsxs("p",{className:"text-sm text-gray-500",children:["Duration: ",Math.round(h.duration/6e4)," minutes"]})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("button",{onClick:()=>togglePlay(h.url),className:"p-2 rounded-full hover:bg-indigo-50 transition-colors",children:e?i.jsx(Yn,{className:"h-6 w-6 text-indigo-600"}):i.jsx(Kn,{className:"h-6 w-6 text-indigo-600"})}),h.transcript&&i.jsx("button",{onClick:()=>handleDownloadTranscript(h),className:"p-2 rounded-full hover:bg-green-50 transition-colors",title:"Download transcript",children:i.jsx(Bn,{className:"h-5 w-5 text-green-600"})}),!h.transcript&&i.jsx("button",{onClick:()=>handleTranscribe(h),className:`px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full
                                   hover:bg-indigo-100 transition-colors`,children:"Transcribe"})]})]}),i.jsx(ni,{transcript:h.transcript,isLoading:!1})]},h.id))})]}),i.jsx("div",{className:"mt-8",children:i.jsx(Ut,{})})]})})}const si=async(e,t)=>{try{const n=await Tn(Ze,e,t),s=await Rt(Ue(Y,"users",n.user.uid));if(!s.exists())throw new Error("User data not found");const a=s.data();return R.getState().setUser(a),a}catch(n){const s=n;throw console.error("Sign in error:",s),new Error(s.code==="auth/invalid-credential"?"Invalid email or password":"Failed to sign in")}},ai=async(e,t,n,s)=>{try{const r={id:(await Rn(Ze,e,t)).user.uid,email:e,name:n,role:s};return await Cn(Ue(Y,"users",r.id),r),R.getState().setUser(r),r}catch(a){throw console.error("Sign up error:",a),new Error("Failed to create account")}},ii=()=>{En(Ze,async e=>{if(e)try{const t=await Rt(Ue(Y,"users",e.uid));if(t.exists()){const n=t.data();R.getState().setUser(n)}}catch(t){console.error("Error fetching user data:",t),R.getState().setUser(null)}else R.getState().setUser(null)})};function oi(){const[e,t]=u.useState(""),[n,s]=u.useState(""),[a,r]=u.useState(!1),o=async c=>{c.preventDefault(),r(!0);try{await si(e,n),N.success("Welcome back!")}catch{N.error("Invalid email or password")}finally{r(!1)}};return i.jsx("div",{className:"w-full max-w-md",children:i.jsxs("form",{onSubmit:o,className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),i.jsx("input",{id:"email",type:"email",value:e,onChange:c=>t(c.target.value),className:`mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500`,required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),i.jsx("input",{id:"password",type:"password",value:n,onChange:c=>s(c.target.value),className:`mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500`,required:!0})]}),i.jsx("button",{type:"submit",disabled:a,className:`w-full flex justify-center items-center gap-2 py-2 px-4
                   bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                   disabled:opacity-50 disabled:cursor-not-allowed`,children:a?"Signing in...":i.jsxs(i.Fragment,{children:[i.jsx(Vn,{className:"h-5 w-5"}),"Sign In"]})})]})})}function ci(){const[e,t]=u.useState(""),[n,s]=u.useState(""),[a,r]=u.useState(""),[o,c]=u.useState("parent"),[l,d]=u.useState(!1),m=async f=>{f.preventDefault(),d(!0);try{await ai(e,n,a,o),N.success("Account created successfully!")}catch{N.error("Failed to create account")}finally{d(!1)}};return i.jsx("div",{className:"w-full max-w-md",children:i.jsxs("form",{onSubmit:m,className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),i.jsx("input",{id:"name",type:"text",value:a,onChange:f=>r(f.target.value),className:`mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500`,required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),i.jsx("input",{id:"email",type:"email",value:e,onChange:f=>t(f.target.value),className:`mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500`,required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),i.jsx("input",{id:"password",type:"password",value:n,onChange:f=>s(f.target.value),className:`mt-1 block w-full rounded-lg border-gray-300 shadow-sm
                     focus:border-indigo-500 focus:ring-indigo-500`,required:!0})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Role"}),i.jsxs("div",{className:"mt-1 space-x-4",children:[i.jsxs("label",{className:"inline-flex items-center",children:[i.jsx("input",{type:"radio",value:"parent",checked:o==="parent",onChange:f=>c(f.target.value),className:"form-radio text-indigo-600"}),i.jsx("span",{className:"ml-2",children:"Parent"})]}),i.jsxs("label",{className:"inline-flex items-center",children:[i.jsx("input",{type:"radio",value:"guardian",checked:o==="guardian",onChange:f=>c(f.target.value),className:"form-radio text-indigo-600"}),i.jsx("span",{className:"ml-2",children:"Guardian"})]})]})]}),i.jsx("button",{type:"submit",disabled:l,className:`w-full flex justify-center items-center gap-2 py-2 px-4
                   bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                   disabled:opacity-50 disabled:cursor-not-allowed`,children:l?"Creating account...":i.jsxs(i.Fragment,{children:[i.jsx(rr,{className:"h-5 w-5"}),"Sign Up"]})})]})})}function li(){const{setAnonymous:e}=R(),t=()=>{e(!0),N.success("Entered anonymous mode")};return i.jsxs("div",{className:"mt-6 pt-6 border-t border-gray-200",children:[i.jsxs("button",{onClick:t,className:`w-full flex justify-center items-center gap-2 py-2 px-4
                 bg-gray-600 hover:bg-gray-700 text-white rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                 transition-colors`,children:[i.jsx(zn,{className:"h-5 w-5"}),"Continue Anonymously"]}),i.jsx("p",{className:"mt-2 text-xs text-center text-gray-500",children:"Access basic features without an account. Some features may be limited."})]})}function di(){const[e,t]=u.useState(!0);return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",children:[i.jsx(Ft,{}),i.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxwYXRoIGQ9Ik0tMTAgMTBsMjAgLTIwTTAgMGwyMCAtMjBNMTAgMTBsMjAgLTIwIiBzdHJva2U9IiNmZmZmZmYyMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-30"}),i.jsxs("div",{className:"relative min-h-screen flex flex-col items-center justify-center p-4",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx(ve,{})}),i.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Chaperone"}),i.jsx("p",{className:"text-white/90",children:"Your Digital Guardian"})]}),i.jsxs("div",{className:"bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full max-w-md",children:[i.jsx("div",{className:"flex justify-center mb-8",children:i.jsxs("div",{className:"inline-flex rounded-lg bg-gray-100 p-1",children:[i.jsx("button",{onClick:()=>t(!0),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                          ${e?"bg-white text-gray-900 shadow":"text-gray-500 hover:text-gray-900"}`,children:"Sign In"}),i.jsx("button",{onClick:()=>t(!1),className:`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                          ${e?"text-gray-500 hover:text-gray-900":"bg-white text-gray-900 shadow"}`,children:"Sign Up"})]})}),e?i.jsx(oi,{}):i.jsx(ci,{}),i.jsx(li,{})]})]})]})}function ui(){const{user:e,isAuthenticated:t,isAnonymous:n}=R();return!t&&!n?i.jsxs(i.Fragment,{children:[i.jsx(lt,{position:"top-center"}),i.jsx(di,{})]}):i.jsxs(i.Fragment,{children:[i.jsx(lt,{position:"top-center"}),i.jsx(cr,{children:n||(e==null?void 0:e.role)==="guardian"?i.jsx(Cs,{}):i.jsx(ri,{})})]})}class Z{constructor(){}static getInstance(){return Z.instance||(Z.instance=new Z),Z.instance}async initializeConnection(){try{const t=le(Y,"system"),n=Me(t,fe("status","==","active"));return!(await Le(n)).empty}catch(t){return console.error("Error initializing Data Connect:",t),!1}}async syncData(t,n){try{const s=le(Y,t),a=Object.entries(n).map(([c,l])=>fe(c,"==",l)),r=Me(s,...a);return(await Le(r)).docs.map(c=>({id:c.id,...c.data()}))}catch(s){throw console.error("Error syncing data:",s),s}}}const mi=Z.getInstance();Promise.all([ei(),ii(),mi.initializeConnection()]).catch(console.error);Lt(document.getElementById("root")).render(i.jsx(u.StrictMode,{children:i.jsx(ui,{})}));export{ge as I,st as N,Ot as W};
//# sourceMappingURL=index-cfLo22va.js.map
