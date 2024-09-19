var q=Object.defineProperty,B=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(s,t,r)=>t in s?q(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r,l=(s,t)=>{for(var r in t||(t={}))R.call(t,r)&&w(s,r,t[r]);if(b)for(var r of b(t))I.call(t,r)&&w(s,r,t[r]);return s},d=(s,t)=>B(s,F(t));var y=(s,t)=>{var r={};for(var o in s)R.call(s,o)&&t.indexOf(o)<0&&(r[o]=s[o]);if(s!=null&&b)for(var o of b(s))t.indexOf(o)<0&&I.call(s,o)&&(r[o]=s[o]);return r};import{r as j,a as T,R as x}from"./vendor-3371026b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();var A={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U=j,$=Symbol.for("react.element"),H=Symbol.for("react.fragment"),Y=Object.prototype.hasOwnProperty,J=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function O(s,t,r){var o,n={},c=null,i=null;r!==void 0&&(c=""+r),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Y.call(t,o)&&!K.hasOwnProperty(o)&&(n[o]=t[o]);if(s&&s.defaultProps)for(o in t=s.defaultProps,t)n[o]===void 0&&(n[o]=t[o]);return{$$typeof:$,type:s,key:c,ref:i,props:n,_owner:J.current}}N.Fragment=H;N.jsx=O;N.jsxs=O;A.exports=N;var e=A.exports,v={},C=T;v.createRoot=C.createRoot,v.hydrateRoot=C.hydrateRoot;const W="h-screen my-8 flex gap-8",z="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100",S="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600",G="flex flex-col gap-1 my-4",_="text-sm font-bold uppercase text-stone-500",Q="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md",V="mt-4 text-right",E="text-xl font-bold text-stone-700 my-4",D="text-stone-600 mb-4",X="w-[35rem] mt-16",Z="flex items-center justify-end gap-4 my-4",ee="text-stone-800 hover:text-stone-950",te="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950",se="flex items-center gap-4",oe="w-64 px-2 py-1 rounded-sm bg-stone-200",re="mt-24 text-center w-2/3",ne="w-16 h-16 object-contain mx-auto",ce="text-stone-400 mb-4",ae="mt-8",le="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl",de="mb-8 font-bold uppercase md:text-xl text-stone-200",ie="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800",ue="w-[35rem] mt-16",me="pb-4 mb-4 border-b-2 border-stone-300",xe="flex items-center justify-between",je="text-3xl font-bold text-stone-600 mb-2",L="text-stone-600 hover:text-stone-950",pe="mb-4 text-stone-400",he="text-stone-600 whitespace-pre-wrap",fe="text-2xl font-bold text-stone-700 mb-4",be="text-stone-800 my-4",Ne="p-4 mt-8 rounded-md bg-stone-100",M="flex justify-between my-4",ge="text-stone-700 hover:text-red-500",k=r=>{var o=r,{children:s}=o,t=y(o,["children"]);return e.jsx("button",d(l({className:z},t),{children:s}))},ye=({onStartAddProject:s,onSelectProject:t,projects:r,selectedProjectId:o})=>e.jsxs("aside",{className:le,children:[e.jsx("h2",{className:de,children:"Your Projects"}),e.jsx("div",{children:e.jsx(k,{onClick:s,children:"+ Add Project"})}),e.jsx("ul",{className:"mt-8",children:r.map(n=>{let c=ie;return n.id===o?c+=" bg-stone-800 text-stone-200":c+=" text-stone-400",e.jsx("li",{className:M,children:e.jsx("button",{onClick:()=>t(n.id),className:c,children:n.title})},n.id)})})]}),P=j.forwardRef((o,r)=>{var n=o,{textarea:s}=n,t=y(n,["textarea"]);return e.jsxs("p",{className:G,children:[e.jsx("label",{className:_,children:_}),s?e.jsx("textarea",d(l({required:!0,ref:r},t),{className:S})):e.jsx("input",d(l({required:!0,ref:r},t),{className:S}))]})}),Pe=j.forwardRef(function({buttonCaption:t,children:r},o){const n=x.useRef();return j.useImperativeHandle(o,()=>({open(){n.current.showModal()}})),T.createPortal(e.jsxs("dialog",{ref:n,className:Q,children:[r,e.jsx("form",{method:"dialog",className:V,children:e.jsx(k,{children:t})})]}),document.getElementById("modal-root"))}),ve=({onCancelAddProject:s,onAddProject:t})=>{const r=x.useRef(),o=x.useRef(),n=x.useRef(),c=x.useRef(),i=()=>{const p=r.current.value,h=o.current.value,f=n.current.value;if(p.trim()===""||h.trim()===""||f.trim()===""){c.current.open();return}t({title:p,description:h,dueDate:f})};return e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{ref:c,buttonCaption:"Close",children:[e.jsx("h2",{className:E,children:"Invalid input"}),e.jsx("p",{className:D,children:"Oops... looks like you forgot to enter a value."}),e.jsx("p",{className:D,children:"Please make sure you provide a valid value for every input field."})]}),e.jsxs("div",{className:X,children:[e.jsxs("menu",{className:Z,children:[e.jsx("li",{children:e.jsx("button",{onClick:s,className:ee,children:"Cancel"})}),e.jsx("li",{children:e.jsx("button",{type:"submit",onClick:i,className:te,children:"Save"})})]}),e.jsxs("div",{children:[e.jsx(P,{ref:r,label:"Title",type:"text"}),e.jsx(P,{ref:o,label:"Description",textarea:!0}),e.jsx(P,{ref:n,label:"Due Date",type:"date"})]})]})]})},ke=""+new URL("no-projects-5ae2e33e.png",import.meta.url).href,we=({onStartAddProject:s})=>e.jsxs("div",{className:re,children:[e.jsx("img",{src:ke,alt:"No Project Selected",className:ne}),e.jsx("h2",{className:E,children:"No Project Selected"}),e.jsx("p",{className:ce,children:"Select a project or get started with a new one."}),e.jsx("p",{className:ae,children:e.jsx(k,{onClick:s,children:"Create new project"})})]}),Re=({onAddTask:s})=>{const t=x.useRef(),r=()=>{const o=t.current.value;o.trim()!==""&&(s(o),t.current.value="")};return e.jsxs("div",{className:se,children:[e.jsx("input",{ref:t,type:"text",className:oe}),e.jsx("button",{className:L,onClick:r,children:"Add Task"})]})},Ie=({onAddTask:s,tasks:t,onDeleteTask:r})=>e.jsxs("section",{children:[e.jsx("h2",{className:fe,children:"Tasks"}),e.jsx(Re,{onAddTask:s}),t.length===0&&e.jsx("p",{className:be,children:"This project does not have any tasks yet."}),t.length>0&&e.jsx("ul",{className:Ne,children:t.map(o=>e.jsxs("li",{className:M,children:[e.jsx("span",{children:o.task}),e.jsx("button",{className:ge,onClick:()=>r(o.id),children:"Clear"})]},o.id))})]}),Ce=({project:s,tasks:t,onDeleteProject:r,onAddTask:o,onDeleteTask:n})=>{const c=new Date(s.dueDate).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return e.jsxs("div",{className:ue,children:[e.jsxs("header",{className:me,children:[e.jsxs("div",{className:xe,children:[e.jsx("h1",{className:je,children:s.title}),e.jsx("button",{className:L,onClick:r,children:"Delete"})]}),e.jsx("p",{className:pe,children:c}),e.jsx("p",{className:he,children:s.description})]}),e.jsx(Ie,{onAddTask:o,tasks:t,onDeleteTask:n})]})};function Se(){const[s,t]=j.useState({selectedProjectId:void 0,projects:[],tasks:[]}),r=a=>{t(u=>d(l({},u),{selectedProjectId:a}))},o=()=>{t(a=>d(l({},a),{selectedProjectId:null}))},n=()=>{t(a=>d(l({},a),{selectedProjectId:void 0}))},c=a=>{const u=d(l({},a),{id:Math.random()});t(m=>d(l({},m),{projects:[...m.projects,u],selectedProjectId:void 0}))},i=()=>{t(a=>d(l({},a),{selectedProjectId:void 0,projects:a.projects.filter(u=>u.id!==a.selectedProjectId)}))},p=a=>{const u={task:a,projectId:s.selectedProjectId,id:Math.random()};t(m=>d(l({},m),{tasks:[u,...m.tasks]}))},h=a=>{t(u=>d(l({},u),{tasks:u.tasks.filter(m=>m.id!==a)}))},f=s.projects.find(a=>a.id===s.selectedProjectId);let g=e.jsx(Ce,{project:f,tasks:s.tasks.filter(a=>a.projectId===s.selectedProjectId),onDeleteProject:i,onAddTask:p,onDeleteTask:h});return s.selectedProjectId===null?g=e.jsx(ve,{onCancelAddProject:n,onAddProject:c}):s.selectedProjectId===void 0&&(g=e.jsx(we,{onStartAddProject:o})),e.jsxs("main",{className:W,children:[e.jsx(ye,{onStartAddProject:o,onSelectProject:r,projects:s.projects,selectedProjectId:s.selectedProjectId}),g]})}v.createRoot(document.getElementById("root")).render(e.jsx(Se,{}));
//# sourceMappingURL=index-70d2b140.js.map
