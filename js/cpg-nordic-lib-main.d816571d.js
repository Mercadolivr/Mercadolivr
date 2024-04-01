/*! For license information please see cpg-nordic-lib-main.d816571d.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9499],{1690:(e,t,a)=>{(()=>{"use strict";var t={596:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(892)),r=l(a(326)),o=l(a(409)),u="ui-cpg";t.default=e=>{let{handleClick:t,color:a,isOpen:l,title:i,selectedDepartment:s,modifier:d,defaultDepartment:f}=e;return n.default.createElement("div",{onClick:t,style:{backgroundColor:a},className:(0,c.default)(u,{["".concat(u,"--focus")]:l})},n.default.createElement("div",{className:"".concat(u,"__info")},"default"!==d&&s!==f&&n.default.createElement(r.default,{className:"".concat(u,"__info-default-section"),as:"span"},i),n.default.createElement("div",{className:"".concat(u,"__info-wrapper")},i===f||s!==f?n.default.createElement("p",{className:(0,c.default)("".concat(u,"__info-selected-department"),{["".concat(u,"__info-selected-department--").concat(d)]:d})},s):n.default.createElement(r.default,{className:"".concat(u,"__info-default-department"),as:"span"},i),n.default.createElement(o.default,{className:d?"".concat(u,"__icon-chevron-").concat(d):"",isOpen:l,size:"supermarket"===d?16:20}))))}},738:function(e,t,a){a(602),a(697);var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(892)),r=l(a(107)),o=a(947);t.default=e=>{let{name:t,id:a,color:l,permalink:u,main_image:i,subdepartments:s,namespace:d,isSelected:f,subdepartments_to_display:m,ga_info:h,action:_,totalDepartments:p}=e;const[v,g]=n.default.useState(!1),M=n.default.useRef(null);d="".concat(d,"__department");const w=p>7,b=e=>{window.meli_ga&&window.meli_ga("send",e.type,e.category,e.action)};return n.default.createElement("div",{className:d,style:f||v?{backgroundColor:l}:{},ref:M,onMouseLeave:e=>{e.preventDefault(),g(!1)}},n.default.createElement("a",{id:a,className:(0,c.default)("".concat(d,"-link"),{["".concat(d,"-link--large-carousel")]:w}),href:u,onClick:()=>{b(h.event_track)},onMouseEnter:()=>{g(!0)}},n.default.createElement(o.Image,{src:i.desktop.x1,srcSet:i.desktop.x2,alt:t,className:(0,c.default)("".concat(d,"-link-image"),{["".concat(d,"-link-image--large-carousel")]:w}),lazyload:"off",preload:!0}),n.default.createElement("span",{className:(0,c.default)("".concat(d,"-link-name"),{["".concat(d,"-link-name--white")]:f||v,["".concat(d,"-link-name--large-carousel")]:w})},t)),s.length>0&&n.default.createElement("div",{className:"".concat(d,"-menu")},n.default.createElement("h4",{className:"".concat(d,"-menu-title"),style:{color:l}},t),n.default.createElement("ul",{className:"".concat(d,"-menu-list")},s.slice(0,m).map((e=>{let{id:t,name:a,permalink:l,ga_info:c}=e;return n.default.createElement("li",{key:t,className:"".concat(d,"-menu-list-item")},n.default.createElement("a",{href:l,className:"".concat(d,"-menu-list-item-link"),onClick:()=>{b(c.event_track)}},a))}))),n.default.createElement("a",{href:_.target,className:"".concat(d,"-menu-link"),onClick:()=>{b(h.show_all.event_track)}},_.label.text,n.default.createElement(r.default,{className:"".concat(d,"-menu-chevron ui-cpg-color--blue ui-cpg-icon")}))))}},814:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(326)),r=l(a(892));t.default=e=>{let{id:t,className:a,isSelected:l,name:o,main_image:u,ga_info:i,permalink:s,color:d="white"}=e;const f="string"==typeof u?u:u.mobile.x2;return n.default.createElement("div",{className:a},n.default.createElement("a",{href:s,className:(0,r.default)("".concat(a,"-link"),{["".concat(a,"-link--is-selected")]:l}),id:t,onClick:()=>{console.log("ga_info",i),window.meli_ga&&window.meli_ga("send",i.event_track.type,i.event_track.category,i.event_track.action)}},l?n.default.createElement("span",{style:{backgroundColor:d},className:"".concat(a,"-link-border")}):null,n.default.createElement("img",{className:"".concat(a,"-link-image"),src:f}),n.default.createElement(c.default,{className:"".concat(a,"-link-text"),as:"span"},o)))}},492:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15));t.default=e=>{let{text:t}=e;return n.default.createElement("div",{className:"".concat("ui-cpg__default-section","-text")},n.default.createElement("p",null,t))}},942:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(557)),r=l(a(251)),o="ui-cpg__default-section",u="-free-shipping";t.default=e=>{const t=e.text.split("{0}"),a=t.length>0?t[0]:null,l=t.length>1?t[1]:null;return n.default.createElement("div",{className:"".concat(o,"-text")},n.default.createElement("p",null,a,"supermarket"===e.iconId?n.default.createElement(r.default,{className:"".concat(o).concat(u,"-supermarket")}):n.default.createElement(c.default,{className:"".concat(o).concat(u,"-icon")}),l))}},118:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(950)),r="ui-cpg";t.default=e=>n.default.createElement("div",{className:"".concat(r,"__default-section-shipping")},n.default.createElement(c.default,{className:"".concat(r,"__default-section-shipping-icon ").concat(r,"-color--").concat(e.color)}),n.default.createElement("span",{className:"".concat(r,"__default-section-shipping-text ").concat(r,"-color--").concat(e.color.toLowerCase)},e.text))},107:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,n)}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=c(a(15)),u=r(a(892));t.default=(0,o.memo)((e=>{let{className:t=""}=e;return o.default.createElement("svg",{className:(0,u.default)("ui-cpg-icon ui-cpg-icon--chevron",t),viewBox:"0 0 9 14",xmlns:"http://www.w3.org/2000/svg"},o.default.createElement("path",{fill:"none",fillRule:"evenodd",strokeWidth:"1.5",d:"M1 1.343L6.657 7 1 12.657"}))}))},409:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,n)}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=c(a(15)),u=r(a(892)),i="ui-cpg__icon-chevron";t.default=(0,o.memo)((e=>{let{className:t="",isOpen:a,size:l}=e;return o.default.createElement("svg",{className:(0,u.default)(i,t,{["".concat(i,"--down")]:a}),width:l,height:l,viewBox:"0 2 16 16",xmlns:"http://www.w3.org/2000/svg"},o.default.createElement("path",{id:"jmad37391a",d:"M5.25 9.796L8.847 6.2 7.998 5.351 3.553 9.796 8.002 14.245 8.85 13.396z",transform:"translate(-86 -120) translate(0 88) translate(15 15) translate(1 15) translate(70 2)",fillOpacity:".8",fillRule:"evenodd"}))}))},950:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(892));t.default=n.default.memo((e=>{let{className:t=""}=e;return n.default.createElement("svg",{className:(0,c.default)("ui-cpg-icon ui-cpg-icon--fast-truck",t),xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},n.default.createElement("path",{fillRule:"nonzero",d:"M10.587 14.805H7.01a2.452 2.452 0 1 1-4.452-1.937l-1.56-.003.002-1.2 3.6.008v.025h.048c1.167 0 2.143.815 2.39 1.907h3.52a2.455 2.455 0 0 1 1.836-1.844l2.423-6.352a.6.6 0 0 0-.56-.814H4.6v-1.2h9.658a1.8 1.8 0 0 1 1.697 2.4h1.677l1.409 4.225-2.027 4.787-1.701-.007a2.452 2.452 0 0 1-4.726.005zm4.751-1.205l.883.004 1.538-3.634-.991-2.975h-1.27l-1.835 4.809c.834.253 1.48.939 1.675 1.796zM7 5.79v1.2H1v-1.2h6zM4.6 8.222v1.2H2.2v-1.2h2.4zm.049 7.178a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502zm8.3 0a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502z"}))})),(t=e.exports).ICON_ID="fast_truck"},557:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(892));t.default=n.default.memo((e=>{let{className:t=""}=e;return n.default.createElement("svg",{className:(0,c.default)("ui-cpg-icon--full",t),width:"41",height:"13",viewBox:"0 0 41 13",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{fillRule:"nonzero",d:"M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"}))}))},251:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(892));t.default=n.default.memo((e=>{let{className:t=""}=e;return n.default.createElement("svg",{className:(0,c.default)("ui-cpg-icon--supermarket",t),width:"164",height:"14",viewBox:"0 0 165 15",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{fillRule:"nonzero",d:"M6.04 57.24c3.3 0 5.26-2.14 5.26-4.58 0-3.86-6.52-3.64-6.52-5.38 0-.72.76-1.32 1.78-1.32 1.36 0 2.98.54 3.98 1.7l1.78-2.04c-1.2-1.38-3.2-2.16-5.32-2.16-3.28 0-5.22 2.14-5.22 4.34 0 3.9 6.5 3.54 6.5 5.42 0 .68-.58 1.5-2.02 1.5-1.84 0-3.58-.84-4.5-2.08L0 54.74c1.12 1.48 3.42 2.5 6.04 2.5zm13.3 0c3.94 0 5.62-2.34 6.32-5.58l1.78-8h-2.9L22.8 51.6c-.42 1.86-1.42 3.14-3.46 3.14-1.88 0-2.86-1.14-2.88-2.48 0-.28.04-.54.08-.66l1.74-7.94H15.4l-1.76 8c-.04.22-.1.66-.1.92 0 2.78 1.98 4.66 5.8 4.66zM30.18 57l1.06-4.76h3.34c4.18 0 5.52-2.9 5.52-4.88 0-2.02-1.58-3.7-3.72-3.7h-6.1L27.34 57h2.84zm4.58-7.26h-2.98l.8-3.58h2.9c.98 0 1.66.62 1.66 1.5 0 1.18-.96 2.08-2.38 2.08zM49.48 57l.54-2.5h-6.58l.66-3.04h6.46l.54-2.5h-6.44l.62-2.8h6.58l.56-2.5h-9.44L40.04 57h9.44zm5.26 0l1.04-4.74h2.2L59.56 57h3.16l-1.86-4.94c2.16-.4 3.8-2.24 3.8-4.64 0-2.32-1.96-3.76-4.12-3.76h-5.7L51.9 57h2.84zm4.58-7.24h-2.98l.8-3.6H60c.88 0 1.7.64 1.7 1.54 0 1.2-.9 2.06-2.38 2.06zM67.8 57l2.12-9.62L71.56 57h1.24l5.88-9.62L76.56 57h2.86l2.94-13.34h-4.1L73.18 52l-1.4-8.34H67.9L64.96 57h2.84zm23.9 0l.54-2.5h-6.58l.66-3.04h6.46l.54-2.5h-6.44l.62-2.8h6.58l.56-2.5H85.2L82.26 57h9.44zm5.26 0L98 52.26h2.2l1.58 4.74h3.16l-1.86-4.94c2.16-.4 3.8-2.24 3.8-4.64 0-2.32-1.96-3.76-4.12-3.76h-5.7L94.12 57h2.84zm4.58-7.24h-2.98l.8-3.6h2.86c.88 0 1.7.64 1.7 1.54 0 1.2-.9 2.06-2.38 2.06zm12.84 7.48c1.74 0 3.96-.62 5.5-2.58l-2.2-1.48c-.76.94-2 1.54-3.14 1.54-2.3 0-3.74-1.56-3.74-3.64 0-2.94 2.12-5.12 4.64-5.12 1.54 0 2.82.76 3.34 2.18l2.72-.92c-.78-2.02-2.66-3.78-5.92-3.78-4.14 0-7.76 3.1-7.76 7.82 0 3.64 2.88 5.98 6.56 5.98zm8.58-.24l1.32-2.26H130l.34 2.26h3.08l-2.2-13.34h-3.56L119.58 57h3.38zm6.82-4.76h-4.16l3.34-5.74.82 5.74zM140.1 57c6.28 0 8.64-4.1 8.64-7.62 0-3.44-2.82-5.72-5.78-5.72h-5.16L134.86 57h5.24zm.52-2.5h-2.36l1.84-8.34h2.34c1.96 0 3.36 1.48 3.36 3.42 0 2.66-1.96 4.92-5.18 4.92zm16 2.74c4.4 0 7.76-3.48 7.76-7.84 0-3.66-2.88-5.96-6.56-5.96-4.4 0-7.76 3.46-7.76 7.82 0 3.66 2.86 5.98 6.56 5.98zm.16-2.52c-2.14 0-3.74-1.4-3.74-3.64 0-2.86 2.02-5.12 4.6-5.12 2.14 0 3.76 1.4 3.76 3.64 0 2.86-2.04 5.12-4.62 5.12z",transform:"translate(-131 -144) translate(130.98 101)"}))}))},553:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(892));t.default=n.default.memo((e=>{let{className:t=""}=e;return n.default.createElement("svg",{className:(0,c.default)("ui-cpg-icon--supermarket",t),width:"100",height:"10",viewBox:"0 0 100 10",xmlns:"http://www.w3.org/2000/svg"},n.default.createElement("path",{fillRule:"nonzero",d:"M4.612 9.144c1.98 0 3.156-1.284 3.156-2.748 0-2.316-3.912-2.184-3.912-3.228 0-.432.456-.792 1.068-.792.816 0 1.788.324 2.388 1.02L8.38 2.172C7.66 1.344 6.46.876 5.188.876 3.22.876 2.056 2.16 2.056 3.48c0 2.34 3.9 2.124 3.9 3.252 0 .408-.348.9-1.212.9-1.104 0-2.148-.504-2.7-1.248L.988 7.644c.672.888 2.052 1.5 3.624 1.5zm8.06 0c2.364 0 3.372-1.404 3.792-3.348l1.068-4.8h-1.74L14.748 5.76c-.252 1.116-.852 1.884-2.076 1.884-1.128 0-1.716-.684-1.728-1.488 0-.168.024-.324.048-.396L12.036.996h-1.728l-1.056 4.8c-.024.132-.06.396-.06.552 0 1.668 1.188 2.796 3.48 2.796zM19.256 9l.636-2.856h2.004c2.508 0 3.312-1.74 3.312-2.928 0-1.212-.948-2.22-2.232-2.22h-3.66L17.552 9h1.704zm2.748-4.356h-1.788l.48-2.148h1.74c.588 0 .996.372.996.9 0 .708-.576 1.248-1.428 1.248zM30.916 9l.324-1.5h-3.948l.396-1.824h3.876l.324-1.5h-3.864l.372-1.68h3.948l.336-1.5h-5.664L25.252 9h5.664zm3.236 0l.624-2.844h1.32L37.044 9h1.896l-1.116-2.964c1.296-.24 2.28-1.344 2.28-2.784 0-1.392-1.176-2.256-2.472-2.256h-3.42L32.448 9h1.704zM36.9 4.656h-1.788l.48-2.16h1.716c.528 0 1.02.384 1.02.924 0 .72-.54 1.236-1.428 1.236zM42.068 9l1.272-5.772L44.324 9h.744l3.528-5.772L47.324 9h1.716L50.804.996h-2.46L45.296 6l-.84-5.004h-2.328L40.364 9h1.704zm14.42 0l.324-1.5h-3.948l.396-1.824h3.876l.324-1.5h-3.864l.372-1.68h3.948l.336-1.5h-5.664L50.824 9h5.664zm3.236 0l.624-2.844h1.32L62.616 9h1.896l-1.116-2.964c1.296-.24 2.28-1.344 2.28-2.784 0-1.392-1.176-2.256-2.472-2.256h-3.42L58.02 9h1.704zm2.748-4.344h-1.788l.48-2.16h1.716c.528 0 1.02.384 1.02.924 0 .72-.54 1.236-1.428 1.236zm7.784 4.488c1.044 0 2.376-.372 3.3-1.548l-1.32-.888c-.456.564-1.2.924-1.884.924-1.38 0-2.244-.936-2.244-2.184 0-1.764 1.272-3.072 2.784-3.072.924 0 1.692.456 2.004 1.308l1.632-.552C74.06 1.92 72.932.864 70.976.864c-2.484 0-4.656 1.86-4.656 4.692 0 2.184 1.728 3.588 3.936 3.588zM75.484 9l.792-1.356h3.432L79.912 9h1.848L80.44.996h-2.136L73.456 9h2.028zm4.092-2.856H77.08L79.084 2.7l.492 3.444zM85.848 9c3.768 0 5.184-2.46 5.184-4.572 0-2.064-1.692-3.432-3.468-3.432h-3.096L82.704 9h3.144zm.312-1.5h-1.416l1.104-5.004h1.404c1.176 0 2.016.888 2.016 2.052 0 1.596-1.176 2.952-3.108 2.952zm9.68 1.644c2.64 0 4.656-2.088 4.656-4.704 0-2.196-1.728-3.576-3.936-3.576-2.64 0-4.656 2.076-4.656 4.692 0 2.196 1.716 3.588 3.936 3.588zm.096-1.512c-1.284 0-2.244-.84-2.244-2.184 0-1.716 1.212-3.072 2.76-3.072 1.284 0 2.256.84 2.256 2.184 0 1.716-1.224 3.072-2.772 3.072z",transform:"translate(-16 -103) translate(0 88) translate(15 15)"}))}))},326:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=l(a(15)),c=l(a(892));t.default=e=>{let{as:t,className:a,children:l,fontSize:r,fontWeight:o,style:u}=e;const i=t;return n.default.createElement(i,{className:(0,c.default)(a,{["ui-font-weight-".concat(o)]:o,["ui-font-size-".concat(r)]:r})||void 0,style:u},l)}},946:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,n)}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=c(a(15)),u=r(a(738)),i=r(a(118)),s=r(a(942)),d=r(a(492)),f=r(a(251)),m="ui-cpg";t.default=e=>{let{default_section:t,departments:a,selected_department_id:l,subdepartments_to_display:n}=e;const{icon:c,free_shipping:r}=t,h=t.text;(0,o.useEffect)((()=>{window.melidata&&window.melidata("cleanAndSend","view",{path:"/supermarket/header",data:{departments:["MLB2407","MLB1246","MLB264051","MLB1384","MLB1071","MLB278123","MLB1423"],client_id:"search",selected_department:"search"}})}),[t]);return o.default.createElement("div",{className:m},o.default.createElement("div",{className:"".concat(m,"--reset")},o.default.createElement("div",{className:"".concat(m,"__container")},o.default.createElement("a",{href:t.permalink,className:"".concat(m,"__default-section"),style:{color:t.color}},"supermarket"===c.id?o.default.createElement(f.default,{className:"ui-cpg__default-section-supermarket-icon"}):t.name,h?o.default.createElement(d.default,{text:h}):r?o.default.createElement(s.default,{text:r.text,iconId:c.id}):o.default.createElement(i.default,{text:c.text,color:c.color})),a.map((e=>o.default.createElement(u.default,Object.assign({key:e.id},e,{subdepartments_to_display:n,namespace:m,isSelected:l===e.id,totalDepartments:a.length})))))))}},134:function(e,t,a){a(602),a(697);var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,l,n)}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return n(t,e),t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=c(a(15)),u=a(292),i=r(a(892)),s=r(a(596)),d=r(a(814)),f=r(a(553)),m=r(a(510)),h="ui-cpg";t.default=e=>{let{default_section:t,departments:a,selected_department_id:l}=e;const n=a.filter((e=>e.id===l))[0],[c,r]=o.default.useState(!1),_=(0,o.useRef)(null),p=o.default.useCallback((e=>{e&&(e.preventDefault(),e.stopPropagation(),r(!c))}),[c]);(0,m.default)(_,(function(){c&&r(!c)})),(0,o.useEffect)((()=>{window.melidata&&window.melidata("cleanAndSend","view",{path:"/supermarket/header",data:{departments:["MLB2407","MLB1246","MLB264051","MLB1384","MLB1071","MLB278123","MLB1423"],client_id:"search",selected_department:"search"}})}),[t]);const v=()=>t.icon&&"supermarket"===t.icon.id;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{ref:_,className:"".concat(h,"__focus")},o.default.createElement(u.FocusScope,{autoFocus:!0},o.default.createElement(s.default,{isOpen:c,handleClick:p,color:v()||!n?"white":n.color,selectedDepartment:n?n.name:t.name,title:v()?o.default.createElement(f.default,{className:"ui-cpg__info-default-section-supermarket-icon"}):t.name,modifier:v()?"supermarket":n?null:"default",defaultDepartment:t.name}),o.default.createElement("div",{className:(0,i.default)("".concat(h,"__focus-list"),{["".concat(h,"__focus-list--show")]:c})},a&&a.map((e=>o.default.createElement(d.default,{className:"".concat(h,"__focus-list-department"),isSelected:!!n&&e.id===n.id,key:e.id,id:e.id,name:e.name,color:e.color,main_image:e.main_image,permalink:e.permalink,ga_info:e.ga_info})))))),c?o.default.createElement("div",{className:"".concat(h,"--lock-area")}):null)}},510:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(15);t.default=(e,t)=>{const a=(0,l.useCallback)((a=>{e.current&&!e.current.contains(a.target)&&t(a)}),[e,t]);(0,l.useEffect)((()=>(document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)})),[e,t,a])}},464:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CPGMobile=t.CPGDesktop=void 0;const n=l(a(946));t.CPGDesktop=n.default;const c=l(a(134));t.CPGMobile=c.default},292:e=>{e.exports=a(33851)},892:e=>{e.exports=a(63831)},602:e=>{e.exports=a(23792)},697:e=>{e.exports=a(62953)},947:e=>{e.exports=a(50162)},15:e=>{e.exports=a(96540)}},l={};var n=function e(a){var n=l[a];if(void 0!==n)return n.exports;var c=l[a]={exports:{}};return t[a].call(c.exports,c,c.exports,e),c.exports}(464);e.exports=n})()},63831:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===c){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)l.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=cpg-nordic-lib-main.d816571d.js.map