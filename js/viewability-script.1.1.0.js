var frontend_viewability;!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.r(t);var i=r((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.version=n})),o="NONE",s="DIRECT",a="sessionStart",c="sessionFinish",u="full",l="definedByJavaScript",f="htmlDisplay",d="definedByJavaScript",h="beginToRender",p="generic";function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u;y(this,e),this.resourceUrl=t,this.vendorKey=n,this.verificationParameters=r,this.accessMode=i}var t,n,r;return t=e,(n=[{key:"serialize",value:function(){return{accessMode:this.accessMode,resourceUrl:this.resourceUrl,vendorKey:this.vendorKey,verificationParameters:this.verificationParameters}}}])&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;b(this,e),this.partner=t,this.verificationScriptResources=n,this.slotElement=null,this.contentUrl=r,this.customReferenceData=i,this.underEvaluation=!1,this.serviceWindow=null}var t,n,r;return t=e,(n=[{key:"setSlotElement",value:function(e){this.slotElement=e}},{key:"setServiceWindow",value:function(e){this.serviceWindow=e}}])&&w(t.prototype,n),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),g=_;function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O="omid_message_guid",T="omid_message_method",R="omid_message_version",k="omid_message_args",M=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.guid=t,this.method=n,this.version=r,this.args=i}var t,n,r;return t=e,r=[{key:"deserialize",value:function(t){return new e(t[O],t[T],t[R],t[k])}}],(n=[{key:"serialize",value:function(){var e,t=(E(e={},O,this.guid),E(e,T,this.method),E(e,R,this.version),e);return void 0!==this.args&&(t[k]=this.args),t}}])&&S(t.prototype,n),r&&S(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var i=N(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var D,L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(o,e);var t,n,r,i=P(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).communicationType_=s,t.handleExportedMessage=o.prototype.handleExportedMessage.bind(U(t)),t}return t=o,n=[{key:"sendMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.to;if(!t)throw new Error("Message destination must be defined at construction time or when sending the message.");t.handleExportedMessage(e.serialize(),this)}},{key:"handleExportedMessage",value:function(e,t){this.handleMessage(M.deserialize(e),t)}},{key:"isCrossOrigin",value:function(){return!1}}],n&&j(t.prototype,n),r&&j(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.to=t,this.communicationType_=o}var t,n,r;return t=e,(n=[{key:"handleMessage",value:function(e,t){this.onMessage&&this.onMessage(e,t)}},{key:"serialize",value:function(e){return JSON.stringify(e)}},{key:"deserialize",value:function(e){try{return JSON.parse(e)}catch(e){return{}}}},{key:"isDirectCommunication",value:function(){return this.communicationType_===s}}])&&I(t.prototype,n),r&&I(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()),W=L,K={omidGlobal:D=function(){if(void 0!==D&&D)return D;if(void 0!==e.g&&e.g)return e.g;if("undefined"!=typeof window&&window)return window;if("undefined"!=typeof globalThis&&globalThis)return globalThis;var t=Function("return this")();if(t)return t;throw new Error("Could not determine global object context.")}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return null!=e&&void 0!==e.top&&null!=e.top},z=K.omidGlobal,F=function(e){return V(e)?e.top:z},B=["omid","v1_SessionServiceCommunication"];function J(e,t){return t.reduce((function(e,t){return e&&e[t]}),e)}function G(e,t){if(!function(e){if(e===z)return!1;try{if(void 0===e.location.hostname)return!0}catch(e){return!0}return!1}(e))try{var n=J(e,t);if(n)return new W(n)}catch(e){}return null}function Y(e,t){for(var n=0;n<e.length;n+=1){var r=G(e[n],t);if(r)return r}return null}function $(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){return t="y"===e,n=16*Math.random()|0,t?(3&n|8).toString(16):n.toString(16);var t,n}))}var q="SessionService.",H=function(e,t){return t+e},Q=function(e){return/\d+\.\d+\.\d+(-.*)?/.test(e)},X=function(e,t){for(var n=e.split("-")[0].split("."),r=t.split("-")[0].split("."),i=0;i<3;i+=1){var o=parseInt(n[i],10),s=parseInt(r[i],10);if(o>s)return!0;if(o<s)return!1}return!0},Z="1.0.3";function ee(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie=K.omidGlobal,oe="omidSessionInterface",se="adEvents",ae={sessionError:"reportError"},ce=["impressionOccurred"],ue=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;ne(this,e),this.interfaceRoot_=t[oe]}var t,n,r;return t=e,(n=[{key:"isSupported",value:function(){return null!=this.interfaceRoot_}},{key:"sendMessage",value:function(e,t,n){var r,i=e,o=this.interfaceRoot_,s="registerSessionObserver"===i?[t]:n;if(i in ae&&(i=ae[i]),ce.indexOf(i)>=0&&(o=o[se]),!o[i])throw new Error("Unrecognized method name: ".concat(i,"."));(r=o)[i].apply(r,ee(s))}}])&&re(t.prototype,n),r&&re(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),le=ue;function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var de="1.3.37-dev",he=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.impressionOccurred_=!1,this.hasAdEvents_=!1,this.hasMediaEvents_=!1,this.isSessionRunning_=!1,this.creativeType_=null,this.callbackMap_={},this.impressionType_=null,this.creativeLoaded_=!1,this.context_=t;var i,o,s=this.context_.serviceWindow||void 0;this.communication_=n||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=[e,F(e)];return t&&n.unshift(t),Y(n,B)}((o=i,void 0===i&&"undefined"!=typeof window&&window&&(o=window),V(o)?o:z),s),this.sessionInterface_=r||new le,this.communication_&&(this.communication_.onMessage=this.handleInternalMessage_.bind(this)),this.setClientInfo_(),this.injectVerificationScripts_(t.verificationScriptResources),t.slotElement&&this.sendSlotElement_(t.slotElement),this.sendContentUrl_(t.contentUrl),this.watchSessionEvents_()}var t,n,r;return t=e,n=[{key:"setCreativeType",value:function(e){if(e===l)throw new Error("Creative type cannot be redefined with value ".concat(l));if(this.impressionOccurred_)throw new Error("Impression has already occurred");if(this.creativeLoaded_)throw new Error("Creative has already loaded");if(this.creativeType_&&this.creativeType_!==l)throw new Error("Creative type cannot be redefined");if(void 0===this.creativeType_)throw new Error("Native integration is using OMID 1.2 or earlier");this.sendOneWayMessage("setCreativeType",e),this.creativeType_=e}},{key:"setImpressionType",value:function(e){if(e===d)throw new Error("Impression type cannot be redefined with value ".concat(d));if(this.impressionOccurred_)throw new Error("Impression has already occurred");if(this.creativeLoaded_)throw new Error("Creative has already loaded");if(this.impressionType_&&this.impressionType_!==d)throw new Error("Impression type cannot be redefined");if(void 0===this.impressionType_)throw new Error("Native integration is using OMID 1.2 or earlier");this.sendOneWayMessage("setImpressionType",e),this.impressionType_=e}},{key:"isSupported",value:function(){return Boolean(this.communication_)||this.sessionInterface_.isSupported()}},{key:"isSendingElementsSupported_",value:function(){return this.communication_?this.communication_.isDirectCommunication():this.sessionInterface_.isSupported()}},{key:"registerSessionObserver",value:function(e){this.sendMessage("registerSessionObserver",e)}},{key:"start",value:function(){var e={customReferenceData:this.context_.customReferenceData,underEvaluation:this.context_.underEvaluation};this.sendOneWayMessage("startSession",e)}},{key:"finish",value:function(){this.sendOneWayMessage("finishSession")}},{key:"error",value:function(e,t){this.sendOneWayMessage("sessionError",e,t)}},{key:"registerAdEvents",value:function(){if(this.hasAdEvents_)throw new Error("AdEvents already registered.");this.hasAdEvents_=!0,this.sendOneWayMessage("registerAdEvents")}},{key:"sendOneWayMessage",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.sendMessage.apply(this,[e,null].concat(n))}},{key:"sendMessage",value:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];this.communication_?this.sendInternalMessage_(e,t,r):this.sessionInterface_.isSupported()&&this.sendInterfaceMessage_(e,t,r)}},{key:"sendInternalMessage_",value:function(e,t,n){var r=$(),i=new M(r,H(e,q),de,function(e,t){return Q(e)&&X(e,Z)?t:JSON.stringify(t)}(de,n));t&&(this.callbackMap_[r]=t),this.communication_&&this.communication_.sendMessage(i)}},{key:"handleInternalMessage_",value:function(e,t){var n=e.method,r=e.guid,i=e.args;if("response"===n&&this.callbackMap_[r]){var o=function(e,t){return Q(e)&&X(e,Z)?t||[]:t?JSON.parse(t):[]}(de,i);this.callbackMap_[r].apply(this,o)}}},{key:"sendInterfaceMessage_",value:function(e,t,n){try{this.sessionInterface_.sendMessage(e,t,n)}catch(e){console.log("Failed to communicate with SessionInterface with error:",e)}}},{key:"assertSessionRunning",value:function(){if(!this.isSessionRunning_)throw new Error("Session not started.")}},{key:"impressionOccurred",value:function(){if(this.creativeType_===l)throw new Error("Creative type has not been redefined");if(this.impressionType_===d)throw new Error("Impression type has not been redefined");this.impressionOccurred_=!0}},{key:"creativeLoaded",value:function(){if(this.creativeType_===l)throw new Error("Creative type has not been redefined");if(this.impressionType_===d)throw new Error("Impression type has not been redefined");this.creativeLoaded_=!0}},{key:"setClientInfo_",value:function(){this.sendOneWayMessage("setClientInfo",de,this.context_.partner.name,this.context_.partner.version)}},{key:"injectVerificationScripts_",value:function(e){if(e){var t=e.map((function(e){return e.serialize()}));this.sendOneWayMessage("injectVerificationScriptResources",t)}}},{key:"sendSlotElement_",value:function(e){this.sendElement_(e,"setSlotElement")}},{key:"sendElement_",value:function(e,t){this.isSendingElementsSupported_()?this.sendOneWayMessage(t,e):this.error(p,"Session Client ".concat(t," called when communication is cross-origin"))}},{key:"sendContentUrl_",value:function(e){e&&this.sendOneWayMessage("setContentUrl",e)}},{key:"setElementBounds",value:function(e){this.sendOneWayMessage("setElementBounds",e)}},{key:"watchSessionEvents_",value:function(){var e=this;this.registerSessionObserver((function(t){t.type===a&&(e.isSessionRunning_=!0,e.creativeType_=t.data.creativeType,e.impressionType_=t.data.impressionType),t.type===c&&(e.isSessionRunning_=!1)}))}}],n&&fe(t.prototype,n),r&&fe(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ye=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{t.registerAdEvents(),this.adSession=t}catch(e){throw new Error("AdSession already has an ad events instance registered")}}var t,n,r;return t=e,(n=[{key:"impressionOccurred",value:function(){this.adSession.assertSessionRunning(),this.adSession.impressionOccurred(),this.adSession.sendOneWayMessage("impressionOccurred")}},{key:"loaded",value:function(){this.adSession.sendOneWayMessage("loaded")}}])&&pe(t.prototype,n),r&&pe(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ve(e){return function(e){if(Array.isArray(e))return me(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var we=function(){function e(t,n,r,o){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.MEASUREMENT_SCRIPT_URL="",this.VENDOR_KEY="mercadolibre",this.VERIFICATIONS_PARAMETER="",this.SDK_URL="",this._session=null,this._meliVaTrackUrl="",this._adEvents=null,this.setMeliVaTrackUrl=function(e){s._meliVaTrackUrl=e},this.start=function(e){var t=s.createOmsdkIframe();t.addEventListener("load",s.omsdkIframeDidLoad(t,e)),document.body.appendChild(t)},this.impressionOccurred=function(){var e;null===(e=s._adEvents)||void 0===e||e.impressionOccurred()},this.finishSession=function(){var e;null===(e=s._session)||void 0===e||e.finish()},this.createOmsdkIframe=function(){var e=document.createElement("iframe");e.style.display="none";var t="<script nonce='".concat(window.viewability.getNonceToken(),"'>\n      window.nonce='").concat(window.viewability.getNonceToken(),"'\n    <\/script>"),n="<script\n      defer\n      nonce='".concat(window.viewability.getNonceToken(),"'\n      src='").concat(s.SDK_URL,"'>\n    <\/script>");return e.srcdoc=t+n,e},this.omsdkIframeDidLoad=function(e,t){return function(){s._session=s.createAdSession(e)(t,s._meliVaTrackUrl),s._session.setCreativeType(f),s._session.setImpressionType(h),s._session.registerSessionObserver((function(e){return s._sessionObserverCallback(e)})),s._adEvents=new ye(s._session),s._session.start()}},this.getVerificationResources=function(){var e=new m(s.MEASUREMENT_SCRIPT_URL,s.VENDOR_KEY,s.VERIFICATIONS_PARAMETER),t=s._thirdPartyResources.map((function(e){return new m(e.url,e.vendor,e.verification_parameters)}));return[e].concat(ve(t))},this.createAdSession=function(e){return function(t,n){var r=new i("Referenceapp","0.0.0"),o=new g(r,s.getVerificationResources(),n,s._customReferenceData);o.underEvaluation=!1,o.setSlotElement(t);var a=e.contentWindow;if(!a)throw new Error("OM SDK iframe content window not available.");return o.setServiceWindow(a),new he(o)}},this.SDK_URL=t,this.MEASUREMENT_SCRIPT_URL=n,this._thirdPartyResources=r,this._customReferenceData=o}var t,n,r;return t=e,(n=[{key:"_sessionObserverCallback",value:function(e){"sessionStart"===e.type&&this.impressionOccurred()}}])&&be(t.prototype,n),r&&be(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ge(e,t,n){return t&&_e(e.prototype,t),n&&_e(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Ee=ge((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.STATIC_URL="https://http2.mlstatic.com/frontend-assets/frontend-viewability",this.SDK_URL="",this.SDK_NAME="omweb-v2.js",this.MEASUREMENT_SCRIPT_URL="measurement-script.js",this.VENDOR_KEY="mercadolibre",this.VERIFICATIONS_PARAMETER="",this.nonceToken="",this.getCookie=function(e){return document.cookie.split(";").reduce((function(t,n){return 0===n.trim().indexOf(e)?t+n.replace("".concat(e,"="),"").trim():t}),"")},this.addSession=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new we(r.SDK_URL,r.MEASUREMENT_SCRIPT_URL,e,t)},this.setNonceForCSP=function(e){r.nonceToken=e;var t=new Event("viewability-enabled",{bubbles:!0,composed:!0});window.dispatchEvent(t)},this.getNonceToken=function(){return r.nonceToken},this.version="1.0.0",this.SDK_URL="".concat(this.STATIC_URL,"/").concat(this.SDK_NAME),this.MEASUREMENT_SCRIPT_URL="".concat(this.STATIC_URL,"/measurement-script.js");var i=this.getCookie("measurement-version");""!==i&&(this.MEASUREMENT_SCRIPT_URL="".concat(this.STATIC_URL,"/measurement-script.").concat(i,".js")),t&&(this.SDK_URL=t),n&&(this.MEASUREMENT_SCRIPT_URL=n)}));window.viewability=new Ee;var Se=new Event("viewability-loaded",{bubbles:!0,composed:!0});window.dispatchEvent(Se),frontend_viewability=t}();