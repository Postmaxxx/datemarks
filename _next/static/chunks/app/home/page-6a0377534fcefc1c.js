(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{2156:function(e,r,t){Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.t.bind(t,1603,23)),Promise.resolve().then(t.bind(t,9705)),Promise.resolve().then(t.bind(t,9460)),Promise.resolve().then(t.bind(t,271)),Promise.resolve().then(t.bind(t,9907)),Promise.resolve().then(t.bind(t,7936)),Promise.resolve().then(t.bind(t,9265)),Promise.resolve().then(t.bind(t,2804)),Promise.resolve().then(t.bind(t,4768)),Promise.resolve().then(t.t.bind(t,1309,23)),Promise.resolve().then(t.t.bind(t,9432,23)),Promise.resolve().then(t.t.bind(t,3991,23)),Promise.resolve().then(t.t.bind(t,2425,23)),Promise.resolve().then(t.t.bind(t,4749,23)),Promise.resolve().then(t.t.bind(t,7357,23)),Promise.resolve().then(t.t.bind(t,7913,23)),Promise.resolve().then(t.t.bind(t,6157,23))},4768:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(7437),s=t(1396),l=t.n(s);t(7323);var i=t(1536),o=t(2265);t(2887);var a=t(4940),u=t(7880);let c=(0,o.forwardRef)((e,r)=>{let{labelText:t,datalist:s,name:l,id:i,inputType:c="text",required:d,valueType:h="skip",placeholder:v,description:m,describedBy:b}=e;(0,o.useImperativeHandle)(r,()=>({getValue(){var e;return null===(e=p.current)||void 0===e?void 0:e.value},setValue(e){p.current&&(p.current.value=e)},getError(){var e;if(!p.current)return{name:"System Error",errorText:"Error while checking errors. Please, contact us"};let r=A(null==p?void 0:null===(e=p.current)||void 0===e?void 0:e.value);return null===r?null:{errorText:r,name:l}}}));let[f,g]=(0,o.useState)(null),p=(0,o.useRef)(null),A=e=>{let r=(0,u.Ts)({value:e,valueType:h});return g(r),r};return(0,n.jsxs)("div",{className:"block_input ".concat(f?"incorrect-value":""),"data-selector":"input-block",children:[t&&(0,n.jsxs)("label",{htmlFor:i,children:[t,d&&(0,n.jsx)("span",{"aria-label":"This is required field",children:" *"})]}),(0,n.jsxs)("div",{className:"input-wrapper",children:[(0,n.jsx)("input",{ref:p,"data-selector":"input",...m?{"aria-label":m}:{},...b?{"aria-describedby":b}:{},...f?{"aria-describedby":"".concat(i,"_error")}:{},className:"input-element",id:i,type:c,onChange:()=>{g(null)},onBlur:e=>{A(e.target.value)},list:"".concat(i,"-datalist"),onKeyPress:e=>{"Enter"===e.code&&e.preventDefault()},...v?{placeholder:v}:{}}),(0,a.k)(f?"show":"").iconExclamation]}),f&&(0,n.jsx)("span",{id:"".concat(i,"_error"),"aria-description":"Error in this input","data-content":"errorText",children:"".concat(f)})]})});c.displayName="Input";var d=t(7020);t(2670);var h=e=>{let{header:r,texts:t,button:s,status:l,onClick:i}=e;return(0,n.jsxs)("div",{className:"modal-message modal-message_".concat(l),children:[(0,n.jsx)("h2",{children:r}),t.map((e,r)=>(0,n.jsx)("p",{children:e},r)),(0,n.jsx)("button",{className:"button_square",onClick:i,children:s})]})};t(2720);var v=()=>(0,n.jsxs)("div",{className:"preloader",title:"Please wait","aria-label":"Please wait",children:[(0,n.jsx)("div",{className:"dash dash_1"}),(0,n.jsx)("div",{className:"dash dash_2"}),(0,n.jsx)("div",{className:"dash dash_3"}),(0,n.jsx)("div",{className:"dash dash_4"})]}),m=()=>{let{modal:e}=(0,d.b)(),r=(0,o.useRef)(null),[t,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{var r,s;t?null==e||null===(r=e.current)||void 0===r||r.openModal({name:"sendingPreloader",onClose:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()},closable:!1,children:(0,n.jsx)(v,{})}):null==e||null===(s=e.current)||void 0===s||s.closeName("sendingPreloader")},[t]);let a=async t=>{var l,o,a,u,c;t.preventDefault();let d=[r].map(e=>{var r,t;return null===(t=e.current)||void 0===t?void 0:null===(r=t.getError())||void 0===r?void 0:r.errorText}).filter(e=>e);if(d.length>0){null==e||null===(o=e.current)||void 0===o||o.openModal({name:"error",onClose:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()},children:(0,n.jsx)(h,{texts:d,button:"OK",header:"Errors found:",status:"error",onClick:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()}})});return}let v=null===(l=r.current)||void 0===l?void 0:l.getValue();s(!0);try{let e=await fetch("https://api.telegram.org/bot".concat("6373603798:AAHnYBfoQOm5usYSQpBz-vpDldVUL9St-Ao","/sendMessage"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"-1002044689076",text:"New email: ".concat(v)})});if(!e.ok){console.log("Error while sending message using TG.",e);return}console.log("Sent!")}catch(e){console.log("Something wrong while sending message to TG, try again later. Error: ".concat(e))}try{let t=await fetch(i.E7.sendEmail.url,{method:i.E7.sendEmail.method,headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v})});if(!t.ok){let r=await t.json();null==e||null===(u=e.current)||void 0===u||u.openModal({name:"error",onClose:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()},children:(0,n.jsx)(h,{texts:[r.message],button:"OK",header:"Errors occured:",status:"error",onClick:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()}})}),s(!1);return}null==e||null===(a=e.current)||void 0===a||a.openModal({name:"success",onClose:()=>{var t,n;null===(t=e.current)||void 0===t||t.closeCurrent(),null===(n=r.current)||void 0===n||n.setValue("")},children:(0,n.jsx)(h,{texts:["Your email has been sent"],button:"Close",header:"Success",status:"success",onClick:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()}})})}catch(t){let r=t instanceof Error?t.message:String(t);null==e||null===(c=e.current)||void 0===c||c.openModal({name:"error",onClose:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()},children:(0,n.jsx)(h,{texts:[r],button:"OK",header:"Errors occured:",status:"error",onClick:()=>{var r;return null===(r=e.current)||void 0===r?void 0:r.closeCurrent()}})})}s(!1)};return(0,n.jsxs)("div",{className:"block_info-create-events",children:[(0,n.jsx)("h2",{children:"Create events in minutes"}),(0,n.jsxs)("form",{onSubmit:a,children:[(0,n.jsx)(c,{ref:r,name:"email",valueType:"email",id:"email",placeholder:"Your email",description:"Enter your email to subscribe"}),(0,n.jsx)("button",{className:"button_square",type:"submit",disabled:t,children:"Start"})]}),(0,n.jsxs)("p",{children:["By signing up, you agree to the ",(0,n.jsx)(l(),{href:i.Lf,children:"Terms"})," and ",(0,n.jsx)(l(),{href:i.Kh,children:"Privacy Policy"}),"."]})]})}},1603:function(){},9432:function(){},7323:function(){},6157:function(){},3991:function(){},2670:function(){},2887:function(){},2720:function(){},4749:function(){},7357:function(){},1309:function(){},2425:function(){},7913:function(){},9460:function(e,r,t){"use strict";t.r(r),r.default={src:"/Datemarks//_next/static/media/connected_1.55046d78.svg",height:299,width:515,blurWidth:0,blurHeight:0}},271:function(e,r,t){"use strict";t.r(r),r.default={src:"/Datemarks//_next/static/media/discover_1.09af8847.svg",height:299,width:515,blurWidth:0,blurHeight:0}},9907:function(e,r,t){"use strict";t.r(r),r.default={src:"/Datemarks//_next/static/media/events_1.566461a3.svg",height:299,width:515,blurWidth:0,blurHeight:0}},7936:function(e,r,t){"use strict";t.r(r),r.default={src:"/Datemarks//_next/static/media/logo_1.c7fa83aa.svg",height:298,width:516,blurWidth:0,blurHeight:0}},9265:function(e,r,t){"use strict";t.r(r),r.default={src:"/Datemarks//_next/static/media/mobiles_1.3e69b187.webp",height:595,width:625,blurDataURL:"data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAABDBrIwAgAABl/v94UP+pLlv//7O4//9tJvP/8vX/6RwH1P/9/P+rAACu///9/1gAAG3zzv/vEgAABhQDRU4AAQBWUDggUgAAALABAJ0BKggACAACQDglpAACncZM5gAA/uKasw+wZU//S4jzcwTGSs6QcxFZrKpHU9edFB++8xOQGEUVv9jLOrWX/mkAAehuT6vzSNYaaz2hAAA=",blurWidth:8,blurHeight:8}},1396:function(e,r,t){e.exports=t(5250)}},function(e){e.O(0,[672,749,909,971,938,744],function(){return e(e.s=2156)}),_N_E=e.O()}]);