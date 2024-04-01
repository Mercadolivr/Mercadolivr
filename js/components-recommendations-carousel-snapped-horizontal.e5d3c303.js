(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5596],{33225:(e,t,o)=>{"use strict";var a=o(85735),r=o(43693),n=o(16270),s=o(91847);o(23792),o(44114),o(62953);var c=o(96540);o(5556);var i=o(46942),l=o(30334),d=o(72831),m=o(74848);const p=["className","classnameFromResponse","classNamesMap","classNamesIndexMap","slidesPerView","Card","cardProps","IconFactory","buttonSize","hideRebates","onItemClick","onBookmarkClick","onTitleTagClick","bookmarkedItems","bookmarkText","disableHover","fixedHeight","arrowsSize","isPolycard","measuringFlag","measuringHeight","cardType","paginationConfig","carouselSpacing","onResize"];function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}const b="".concat(d.namespaceRecommendations,"-carousel-snapped"),y=e=>{let{className:t,classnameFromResponse:o,classNamesMap:r,classNamesIndexMap:d,slidesPerView:u,Card:y,cardProps:f,IconFactory:O,buttonSize:h,hideRebates:S,onItemClick:C,onBookmarkClick:P,onTitleTagClick:I,bookmarkedItems:j,bookmarkText:v,disableHover:R,fixedHeight:w,arrowsSize:k,isPolycard:x,measuringFlag:F,measuringHeight:T,cardType:_,paginationConfig:D,carouselSpacing:N,onResize:H}=e,z=s(e,p);const E=c.useRef(),[L,M]=c.useState(!1);c.useEffect((()=>{if(F(E.current,_)){const e=T(E.current,_);E.current.style.setProperty("--max-card-height","".concat(e,"px")),H&&H(e)}M(!0)}),[E]);const{items:B,title:A,titleWithIcons:V,titleTag:q,subtitle:W,viewMoreAction:K,footer:U,href:G}=z;return B&&B.length>=u&&m.jsxs("div",{className:i(b,t,o,{["".concat(b,"--fixed-height")]:w}),ref:E,children:[A&&n("div",{className:"".concat(b,"__header")},void 0,n("div",{className:"".concat(b,"__header-titles")},void 0,n(a.RecommendationsTitle,{title:A,titleWithIcons:V,href:G,IconFactory:O}),W&&n(a.RecommendationsSubtitle,{text:W.text,url:W.url,IconFactory:O,advertisingLabel:W.advertising_label}),q&&n(a.RecommendationsTitleTag,{text:q.text,values:q.values,styles:q.styles,IconFactory:O,onTitleTagClick:I})),K&&n("div",{},void 0,n(a.RecommendationsSideButton,{id:K.id,target:K.target,label:K.label,buttonSize:h,IconFactory:O}))),n(l,{strictBoundaries:!1,srLabel:A,arrows:L&&{size:k,visibility:"always"},spacing:N,slidesPerView:u,pagination:D},void 0,B.map(((e,t)=>{const o=x?e.metadata.id:e.id,a=e.CustomCard||y,s=r[o],c=d[t];return n(l.CarouselSnappedSlide,{},"recommendations-".concat(o),m.jsx(a,g(g(g({},f),e),{},{classNameFromMap:s,classNameFromIndex:c,IconFactory:O,onItemClick:C,onBookmarkClick:P,bookmarkedItems:j,bookmarkText:v,hideRebates:S,disableHover:R||!L})))}))),U&&n(a.RecommendationsFooter,{footerText:U.text,href:U.link,IconFactory:O})]})};y.defaultProps={className:"",classnameFromResponse:"",title:null,titleTag:null,slidesPerView:5,csrfToken:null,animation:null,lazyLoad:!0,itemId:null,productId:null,variationId:null,limit:20,client:null,buttonSize:"medium",hideRebates:!1,items:[],classNamesMap:{},classNamesIndexMap:{},arrowsSize:"large",isPolycard:!1,paginationConfig:null,carouselSpacing:12,measuringFlag:e=>e&&e.querySelector(".andes-carousel-snapped"),measuringHeight:e=>{const t=e.querySelector(".andes-carousel-snapped"),o=e.querySelector(".andes-carousel-snapped__slide");return t.getBoundingClientRect().height-(parseFloat(window.getComputedStyle(t).paddingTop)||0)-(parseFloat(window.getComputedStyle(t).paddingBottom)||0)-(parseFloat(window.getComputedStyle(o).marginBottom)||0)},onResize:null};const f=a.withCarouselContainer(y);t.RecommendationsCarouselSnapped=f,t.RecommendationsCarouselSnappedWithoutContainer=y},78983:(e,t,o)=>{e.exports=o(33225)},72831:(e,t)=>{"use strict";const o="ui-recommendations",a="".concat(o,"-comparator"),r="".concat(o,"-combos");t.namespaceCombos=r,t.namespaceComparator=a,t.namespaceRecommendations=o},74892:(e,t,o)=>{o(44114);var a=o(74848),r=o(16270),n=o(43693),s=o(91847);const c=["isPolycard","thousandSeparator","decimalSeparator"];function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}o(96540);const{bool:d,shape:m,string:p}=o(5556),{RecommendationsCarouselSnapped:u}=o(78983),{RecommendationsCardHorizontalTitleFirst:g}=o(53759),{Card:b}=o(82345),y=o(3071),f=o(39139);e.exports=e=>{let{isPolycard:t,thousandSeparator:o,decimalSeparator:n}=e,i=s(e,c);return a.jsx(u,l({Card:e=>t?r(b,{polycard:l({},e),className:"recos-polycard poly-card--mobile"}):a.jsx(g,l({},e)),Context:f,contextProps:{type:"list-card",thousandSeparator:o,decimalSeparator:n},isPolycard:t,IconFactory:y},i))}},3071:(e,t,o)=>{const a=o(38123),{IconRecommendationsFull:r,IconRecommendationsCpg:n,IconRecommendationsMeliLogo:s,IconRecommendationsMeliCoins:c,IconRecommendationsStarEmpty:i,IconRecommendationsStarHalf:l,IconRecommendationsStarFull:d,IconRecommendationsHeartEmpty:m,IconRecommendationsHeartFull:p,IconRecommendationsChevron:u,IconRecommendationsCbt:g,IconRecommendationsMelichoiceLogo:b,IconRecommendationsBufloInfo:y,IconRecommendationsMShopsLogo:f}=o(281),O=a([r,n,s,c,i,l,d,m,p,u,g,b,y,f]);e.exports=O},39139:(e,t,o)=>{o(44114);var a=o(16270),r=o(43693);function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}o(96540);const{node:c,shape:i,string:l}=o(5556),{PolycardContext:d}=o(82345);e.exports=e=>{let{contextValue:t,type:o,thousandSeparator:r,decimalSeparator:n,children:c}=e;return a(d,{contextValue:s(s({},t),{},{type:o}),thousandSeparator:r,decimalSeparator:n},void 0,c)}}}]);
//# sourceMappingURL=components-recommendations-carousel-snapped-horizontal.e5d3c303.js.map