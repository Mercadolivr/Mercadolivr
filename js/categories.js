function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,a,s,r,o=[],l=!0,c=!1;try{if(s=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=s.call(n)).done)&&(o.push(i.value),o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{if(!l&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(c)throw a}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,_toPropertyKey(i.key),i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==_typeof(t)?t:String(t)}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var CategoriesWidget=function(){"use strict";var e=function(e){var t=e.name,n=e.permalink,i=e.children_categories,a=e.type;return i||t?'\n    <div class="nav-categs-detail__categ" data-type="'.concat(a,'">\n      ').concat(t?'<h2 class="nav-categs-detail__title">\n        <a href="'.concat(n,'">').concat(t,"</a>\n      </h2>"):"","\n      ").concat(i?'<ul class="nav-categs-detail__categ-list">\n        '.concat(i.map((function(e){var t=e.name,n=e.permalink;return t?'<li><a href="'.concat(n,'">').concat(t,"</a></li>"):""})).join(""),"\n      </ul>"):"","\n    </div>"):""},t=function(e){var t=e.sidebar;return'\n<aside class="nav-categs-detail__body-aside">\n  <h2 class="nav-categs-detail__title">'.concat(t.title,'</h2>\n  <ul class="nav-categs-detail__list">\n  ').concat(t.brands.map((function(e){var t=e.fantasy_name,n=e.permalink,i=e.pictures,a=i.length?i[0]:i;return'<li>\n        <a href="'.concat(n,'" style="background-image:url(').concat(a.secure_url,')">').concat(t,"</a>\n      </li>")})).join(""),"\n  </ul>\n</aside>")},n=function(n){var i=n.name,a=n.categories,s=n.sidebar;return'\n<header class="nav-categs-detail__header">\n  <h1>'.concat(i,'</h1>\n</header>\n<div class="nav-categs-detail__body">\n  <div class="nav-categs-detail__body-content">\n    ').concat(a.length?a.map((function(t){return e(t)})).join(""):null,"\n  </div>\n  ").concat(s?t({sidebar:s}):"","\n</div>\n")};function i(e){var t=e.querySelectorAll("a[href]");return Array.prototype.slice.call(t)}var a=function(e,t,n){9===e.keyCode&&(e.shiftKey?document.activeElement===t&&(e.preventDefault(),n.focus()):document.activeElement===n&&(e.preventDefault(),t.focus()))},s=function(e){return i(e)},r=function(e){var t=i(e);return t[t.length-1]},o=n,l=a,c=s,d=r,h=function(e){var t=e.landings,n=e.homes,i=e.more_categories,a=e.departments,s=e.high_priority;return"\n  ".concat(s?"\n    ".concat(s.map((function(e){var t=e.label,n=e.permalink;return'\n      <li class="nav-categs-departments__list nav-categs-departments__list--static">\n        <a href="'.concat(n,'">').concat(t,"</a>\n      </li>\n    ")})).join(""),"\n  "):"","\n  ").concat(a.map((function(e,t){var n=e.name;return'\n    <li class="nav-categs-departments__list nav-categs-departments__list--dynamic">\n      <a href="#" data-order="'.concat(t,'" role="button" aria-expanded="false">').concat(n,"</a>\n    </li>\n  ")})).join(""),"\n  ").concat(t.map((function(e){var t=e.label,n=e.permalink;return'\n    <li class="nav-categs-departments__list nav-categs-departments__list--static">\n      <a href="'.concat(n,'">').concat(t,"</a>\n    </li>\n  ")})).join(""),"\n  ").concat(n?"\n    ".concat(n.map((function(e){var t=e.label,n=e.permalink;return'\n      <li class="nav-categs-departments__list nav-categs-departments__list--static">\n        <a href="'.concat(n,'">').concat(t,"</a>\n      </li>\n    ")})).join(""),"\n  "):"",'\n  <li class="nav-categs-departments__list nav-categs-departments__list--static">\n    <a href="').concat(i.permalink,'">').concat(i.label,"</a>\n  </li>\n")};function u(e,t){return{x:t.x-e.x,y:t.y-e.y}}function v(e,t){return e.x*t.x+e.y*t.y}var g=function(){function e(t){_classCallCheck(this,e),this.super=t.super,this.el=document.querySelector('[data-js="nav-categs-detail"]'),this.el.parent=[],this.firstTabStop=[],this.lastTabStop=[],this.events={handleDetailKeyPress:this.handleDetailKeyPress.bind(this)},this.bindEvents(!0)}return _createClass(e,[{key:"bindEvents",value:function(e){var t="".concat(e?"add":"remove","EventListener");this.el["".concat(t)]("keydown",this.events.handleDetailKeyPress)}},{key:"findTabStops",value:function(){this.el.visibleAnchors=this.el.querySelector(".nav-categs-detail__body-content");var e=_slicedToArray(c(this.el.visibleAnchors),1);this.firstTabStop=e[0],this.lastTabStop=d(this.el.visibleAnchors)}},{key:"handleDetailKeyPress",value:function(e){l(e,this.firstTabStop,this.lastTabStop)}},{key:"hideDetailByEscaping",value:function(e){27===e.keyCode&&(this.hide(),0!==this.el.parent.length&&this.el.parent.focus())}},{key:"show",value:function(e,t){this.el.parent=t,this.el.props=e,this.el.innerHTML=o(this.el.props),this.el.ariaLabel=this.el.parent.innerText,this.el.removeAttribute("hidden"),this.super.toggleDetailsVisibility(!0),this.findTabStops(),this.el.addEventListener("keydown",this.events.handleDetailKeyPress),this.el.focus({preventScroll:!0})}},{key:"hide",value:function(){this.el.setAttribute("hidden","hidden"),this.super.toggleDetailsVisibility(!1),this.el.removeEventListener("keydown",this.events.handleDetailKeyPress)}}]),e}(),p=h,f=function(e,t,n,i){var a=u(t,i),s=u(t,n),r=u(t,e),o=v(a,a),l=v(a,s),c=v(a,r),d=v(s,s),h=v(s,r),g=1/(o*d-l*l),p=(d*c-l*h)*g,f=(o*h-l*c)*g;return p>=0&&f>=0&&p+f<1},y=a,m=s,b=r,_=function(){function e(t){_classCallCheck(this,e),this.detail=new g({super:this}),this.super=t.super,this.model=this.shapeModel(t.model),this.lastSelected=null,this.el=document.querySelector('[data-js="nav-categs-departments"]'),this.el.current={},this.mousePointsQueue=[],this.firstTabStop=[],this.lastTabStop=[],this.events={handleMove:this.handleMove.bind(this),handleLeave:this.handleLeave.bind(this),handleOver:this.handleOver.bind(this),handleClick:this.handleClick.bind(this),handleDepartmentsKeyPress:this.handleDepartmentsKeyPress.bind(this)},this.bindEvents(!0)}return _createClass(e,[{key:"bindEvents",value:function(e){var t="".concat(e?"add":"remove","EventListener");this.el["".concat(t)]("mousemove",this.events.handleMove),this.el["".concat(t)]("mouseleave",this.events.handleLeave),this.el["".concat(t)]("mouseover",this.events.handleOver),this.el["".concat(t)]("click",this.events.handleClick),this.el["".concat(t)]("keydown",this.events.handleDepartmentsKeyPress)}},{key:"render",value:function(){var e=this;this.el.innerHTML=p(this.model);var t=_slicedToArray(m(this.el),1);this.firstTabStop=t[0],this.lastTabStop=b(this.el),setTimeout((function(){e.calculateOffsetPoints(),e.el.parentElement.focus({preventScroll:!0}),e.el.addEventListener("keydown",e.events.handleDepartmentsKeyPress)}),0)}},{key:"cleanSelected",value:function(){this.lastSelected&&(this.lastSelected.classList.remove("nav-categs-departments__selected"),this.lastSelected.ariaExpanded=!1,this.lastSelected=null)}},{key:"markSelected",value:function(e){e.classList.add("nav-categs-departments__selected"),e.ariaExpanded=!0,this.lastSelected=e}},{key:"handleClick",value:function(e){"A"===e.target.tagName&&e.target.dataset&&e.target.dataset.order&&(e.preventDefault(),this.handleSelection(e.target,"click"))}},{key:"handleDepartmentsKeyPress",value:function(e){y(e,this.firstTabStop,this.lastTabStop),"A"===e.target.tagName&&e.target.dataset&&e.target.dataset.order&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.handleSelection(e.target,"keydown")))}},{key:"handleOver",value:function(e){var t=e.target;if("A"===t.tagName){if(this.mousePointsQueue.length){var n={x:e.pageX,y:e.pageY};if(f(n,this.upperRight,this.lowerRight,this.mousePointsQueue[0]))return}this.handleSelection(t,"mouseover")}}},{key:"handleSelection",value:function(e,t){this.el.current=e,this.cleanSelected();var n=e.getAttribute("data-order");if(n||"keydown"===t){var i=this.model.departments["".concat(n)];this.markSelected(this.el.current),this.detail.show(i,this.el.current),this.calculateOffsetPoints(),this.super.setOverlay()}else this.detail.hide()}},{key:"shapeModel",value:function(e){var t=JSON.parse(JSON.stringify(e));return t.departments=e.departments.map((function(e){return e.categories=e.categories.map((function(e){var t=e.children_categories;if(!t||!t.length)return e;var n=t.length;return n>=11?(e.children_categories.length=11,e.type="full",e):n<11&&n>=4?(e.children_categories.length=4===n?4:5,e.type="half",e):n<4&&n>=2?(e.children_categories.length=2,e.type="thirds",e):e})),e})),t}},{key:"toggleDetailsVisibility",value:function(e){this.super.toggleDetailsVisibility(e)}},{key:"hide",value:function(){this.cleanSelected(),this.el.removeEventListener("keydown",this.events.handleDepartmentsKeyPress),this.detail.hide()}},{key:"calculateOffsetPoints",value:function(){var e=this.el.getBoundingClientRect();this.upperRight={x:e.right+window.pageXOffset,y:e.top+window.pageYOffset},this.lowerRight={x:e.right+window.pageXOffset,y:e.bottom+window.pageYOffset}}},{key:"handleMove",value:function(e){if(this.clearStillTimeout(),"A"===e.target.tagName){this.setStillTimeout(e);var t={x:e.pageX,y:e.pageY};this.mousePointsQueue.push(t),this.mousePointsQueue.length>2&&this.mousePointsQueue.shift(),this.prevMousePoint&&this.prevMousePoint.x>t.x&&this.handleOver(e),this.prevMousePoint=t}}},{key:"handleLeave",value:function(){this.mousePointsQueue=[],this.clearStillTimeout()}},{key:"clearStillTimeout",value:function(){this.stillTimeout&&clearTimeout(this.stillTimeout)}},{key:"setStillTimeout",value:function(e){var t=this;this.stillTimeout=setTimeout((function(){t.lastSelected&&t.lastSelected===e.target||t.handleSelection(e.target,"timeout")}),100)}}]),e}(),w=function(e){return'\n<div\n  class="nav-categs"\n  data-js="nav-categs"\n  aria-label="'.concat(e,'"\n  aria-modal="true"\n  tabindex="-1"\n  role="dialog"\n  hidden\n>\n  <ul class="nav-categs-departments" data-js="nav-categs-departments"></ul>\n  <div\n    class="nav-categs-detail"\n    data-js="nav-categs-detail"\n    aria-modal="true"\n    tabindex="-1"\n    role="dialog"\n    hidden\n  ></div>\n</div>\n')},k=function(){return'\n  <div class="nav-categs-overlay" data-js="nav-categs-overlay" hidden></div>\n'},x=function(){function e(t){var n=t.model,i=t.triggerSelector,a=t.bus;if(_classCallCheck(this,e),this.trigger=document.querySelector(i),this.trigger.ariaExpanded=!1,this.trigger.setAttribute("role","button"),!this.trigger)throw new Error("CategoriesWidget: missing trigger element");return this.triggerParent=this.trigger.parentElement,this.renderStructure(),this.el=document.querySelector('[data-js="nav-categs"]'),this.el.list=this.el.querySelector('[data-js="nav-categs-departments"'),this.setOverlay(),this.shown=!1,this.timeouts={show:null,hide:null},this.departments=new _({model:n,super:this}),this.bus=a,this.events={hideByEscaping:this.hideByEscaping.bind(this),showByKeyPress:this.showByKeyPress.bind(this),stopPropagation:this.stopPropagation.bind(this),preventDefault:this.preventDefault.bind(this),triggerMouseEnter:this.triggerMouseEnter.bind(this),elemsMouseEnter:this.elemsMouseEnter.bind(this),elemsMouseLeave:this.elemsMouseLeave.bind(this)},this.bindEvents(!0),this}return _createClass(e,[{key:"bindEvents",value:function(e){var t=this,n="".concat(e?"add":"remove","EventListener");this.el["".concat(n)]("click",this.events.stopPropagation),this.trigger["".concat(n)]("click",this.events.triggerMouseEnter),this.trigger["".concat(n)]("mouseenter",this.events.triggerMouseEnter),this.trigger["".concat(n)]("keydown",this.events.showByKeyPress),[this.trigger,this.el].forEach((function(e){e["".concat(n)]("mouseenter",t.events.elemsMouseEnter)})),[this.trigger,this.el].forEach((function(e){e["".concat(n)]("mouseleave",t.events.elemsMouseLeave)}))}},{key:"handleMouseLeave",value:function(){this.showTimerCleaner(),this.hideTimer()}},{key:"hideByEscaping",value:function(e){27===e.keyCode&&this.shown&&(this.hideTimer(),this.trigger.focus())}},{key:"showByKeyPress",value:function(e){32!==e.keyCode&&13!==e.keyCode||(e.stopPropagation(),e.preventDefault(),this.shown||this.showTimer())}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"triggerMouseEnter",value:function(e){e.stopPropagation(),e.preventDefault(),this.shown||this.showTimer()}},{key:"elemsMouseEnter",value:function(e){this.hideTimerCleaner(e)}},{key:"elemsMouseLeave",value:function(e){this.handleMouseLeave(e)}},{key:"renderStructure",value:function(){this.trigger.insertAdjacentHTML("afterend",w(this.trigger.innerText)),document.body.insertAdjacentHTML("beforeend",k())}},{key:"setOverlay",value:function(){this.overlay={el:document.querySelector('[data-js="nav-categs-overlay"]'),header:document.querySelector(".nav-header"),body:document.body},this.overlay.sizes={header:this.overlay.header.offsetHeight+this.overlay.header.offsetTop,body:this.overlay.body.offsetHeight};var e=parseInt(window.getComputedStyle(this.overlay.el).getPropertyValue("padding-bottom")),t=this.el.offsetHeight+e,n=this.overlay.sizes.body-this.overlay.sizes.header;this.overlay.el.style.minHeight="".concat(n>t?n:t,"px"),this.overlay.el.style.top="".concat(this.overlay.sizes.header,"px")}},{key:"hide",value:function(){this.bus.emit("categories:hide:before"),this.trigger.ariaExpanded=!1,this.el.setAttribute("hidden","hidden"),this.shown=!1,this.overlay.el.setAttribute("hidden","hidden"),this.departments.hide(),this.triggerParent.classList.remove("nav-menu-chevron-down"),this.el.removeEventListener("keydown",this.events.hideByEscaping),this.trigger.addEventListener("keydown",this.events.showByKeyPress),this.bus.emit("categories:hide:after")}},{key:"show",value:function(){this.bus.emit("categories:show:before"),this.trigger.ariaExpanded=!0,this.departments.render(),this.el.removeAttribute("hidden"),this.shown=!0,this.setOverlay(),this.overlay.el.removeAttribute("hidden"),this.triggerParent.classList.add("nav-menu-chevron-down"),this.el.addEventListener("keydown",this.events.hideByEscaping),this.trigger.removeEventListener("keydown",this.events.showByKeyPress),this.bus.emit("categories:show:after")}},{key:"hideTimer",value:function(){var e=this;this.timeouts.hide=window.setTimeout((function(){e.hide()}),250)}},{key:"hideTimerCleaner",value:function(){window.clearTimeout(this.timeouts.hide)}},{key:"showTimer",value:function(){var e=this;this.timeouts.show=window.setTimeout((function(){e.show()}),250)}},{key:"showTimerCleaner",value:function(){window.clearTimeout(this.timeouts.show)}},{key:"toggleDetailsVisibility",value:function(e){var t=e?"add":"remove";this.el.classList["".concat(t)]("nav-categs--with-details")}}]),e}();!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('/**\n * UI Library\n */\n.u-clearfix:after, .u-clearfix:before {\n  display: table;\n  content: "";\n}\n.u-clearfix:after {\n  clear: both;\n}\n\n/**\n* Helpers\n*/\n[data-js=nav-menu-categories-trigger]:before {\n  content: "";\n  opacity: 0;\n}\n\n[data-js=nav-menu-categories-trigger]:hover:before {\n  content: "";\n  opacity: 1;\n}\n\n/**\n* Components\n*/\n.nav-categs {\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  font-family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica, "Roboto", Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  margin: 9px 0 0 -10px;\n  max-width: 1200px;\n  position: absolute;\n  z-index: 10000;\n  display: flex;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.nav-categs * {\n  box-sizing: border-box;\n}\n.nav-categs a,\n.nav-categs a:link {\n  color: inherit;\n  text-decoration: none;\n}\n.nav-categs ul {\n  margin: 0;\n  list-style: none;\n}\n.nav-categs:before {\n  content: "";\n  width: 0;\n  height: 0;\n  border: 0 solid transparent;\n  border-right-width: 14px;\n  border-left-width: 14px;\n  border-bottom: 14px solid #333;\n  top: -8px;\n  left: 76px;\n  position: absolute;\n  display: block;\n}\n.nav-categs:focus {\n  outline: none;\n}\n\n.nav-categs--with-details {\n  width: 100%;\n}\n\n.nav-categs-overlay {\n  position: absolute;\n  left: 0;\n  opacity: 0.3;\n  background-color: #333;\n  width: 100%;\n  height: 100%;\n  height: auto;\n  box-sizing: border-box;\n  padding-bottom: 32px;\n  z-index: 1001;\n}\n\n.nav-categs a:after {\n  content: none;\n}\n\n.nav-categs[hidden],\n.nav-categs-overlay[hidden] {\n  display: none;\n}\n\n.nav-bounds-with-cp .nav-categs {\n  left: 66px;\n}\n.nav-bounds-with-cp .nav-categs:before {\n  left: 202px;\n}\n.nav-bounds-with-cp .nav-categs-detail__body-aside {\n  display: none;\n}\n\n@media (max-width: 1090px) {\n  .nav-bounds-with-cp .nav-categs {\n    left: 56px;\n    margin-left: 0;\n  }\n}\n.nav-categs-departments {\n  position: relative;\n  display: inline-block;\n  float: left;\n  background-color: #333;\n  padding: 22px 0;\n  border-radius: 4px;\n}\n.nav-categs-departments a {\n  cursor: default;\n}\n.nav-categs-departments a,\n.nav-categs-departments a:link,\n.nav-categs-departments a:visited {\n  color: #fff;\n  display: block;\n  padding: 0 36px;\n  line-height: 2.59;\n  max-width: 260px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-categs-departments .nav-categs-departments__list--dynamic a {\n  position: relative;\n  padding-right: 44px;\n}\n.nav-categs-departments .nav-categs-departments__list--dynamic a:after {\n  border-style: solid;\n  border-width: 1.5px 1.5px 0 0;\n  border-color: rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  position: absolute;\n  vertical-align: middle;\n  height: 7px;\n  width: 7px;\n  transform: rotate(45deg) translateY(-50%);\n  top: 50%;\n  content: "";\n  right: 34px;\n}\n.nav-categs-departments .nav-categs-departments__list--static a {\n  cursor: pointer;\n}\n\n.nav-categs--with-details .nav-categs-departments {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-categs-departments__list--static a:hover,\n.nav-categs-departments__selected {\n  background-color: #3483fa;\n}\n\n.nav-categs-detail {\n  overflow: hidden;\n  padding: 36px;\n  width: 100%;\n  position: relative;\n  background-color: #fff;\n  border-radius: 0 4px 4px 0;\n}\n.nav-categs-detail:focus {\n  outline: none;\n}\n\n.nav-categs-detail__header {\n  border-bottom: 1px solid #ddd;\n  position: relative;\n  margin-bottom: 24px;\n}\n.nav-categs-detail__header h1 {\n  font-size: 20px;\n  color: #333;\n  margin: 0 0 12px;\n  font-weight: 400;\n  line-height: 1;\n}\n\n.nav-categs-detail__categ {\n  width: 192px;\n  display: inline-block;\n  text-overflow: ellipsis;\n  margin-bottom: 24px;\n}\n\n.nav-categs-detail__title {\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0 0 3px;\n  line-height: 1.1;\n}\n.nav-categs-detail__title a {\n  display: -webkit-box;\n  line-height: 1;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  line-height: inherit;\n}\n.nav-categs-detail__title a:hover {\n  color: #3483fa;\n}\n\n.nav-categs-detail__categ-list {\n  padding-left: 0;\n}\n\n.nav-categs-detail__list a {\n  width: 88px;\n  height: 88px;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  float: left;\n  margin: 0 8px 8px 0;\n  overflow: hidden;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  background-size: contain;\n  font-size: 0;\n}\n\n.nav-categs-detail__categ-list a,\n.nav-categs-detail__categ-list a:link {\n  line-height: 1.85;\n  color: #666;\n  font-weight: 400;\n}\n.nav-categs-detail__categ-list a:hover,\n.nav-categs-detail__categ-list a:link:hover {\n  color: #3483fa;\n}\n\n.nav-categs-detail__body {\n  max-height: 550px;\n  overflow-y: auto;\n}\n.nav-categs-detail__body:after, .nav-categs-detail__body:before {\n  display: table;\n  content: "";\n}\n.nav-categs-detail__body:after {\n  clear: both;\n}\n\n.nav-categs-detail__body-content {\n  column-count: 3;\n  column-gap: 36px;\n  column-width: 192px;\n  overflow: hidden;\n  float: left;\n}\n\n.nav-categs-detail__body-aside {\n  display: none;\n  width: 192px;\n  float: left;\n  margin-left: 36px;\n}\n.nav-categs-detail__body-aside .nav-categs-detail__title {\n  margin-bottom: 8px;\n}\n\n@media (min-width: 1200px) {\n  .nav-categs-detail__body-content {\n    max-width: 648px;\n  }\n  .nav-categs-detail__body-aside {\n    display: block;\n  }\n}');var S=x,T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(_classCallCheck(this,e),!t.endpoint)throw new Error("CategoriesWidget: missing endpoint.");if(this.bus=t.bus||window.freya,this.trigger=t.trigger||'[data-js="nav-menu-categories-trigger"]',this.endpoint=t.endpoint,!this.bus)throw new Error("CategoriesWidget: missing bus.");this.bus.on("categories:show",this.show.bind(this)),this.bus.on("categories:hide",this.hide.bind(this)),this.bus.on("header:shown",this.deactivate.bind(this)),this.bus.on("header:hidden",this.activate.bind(this)),this.fetchData()}return _createClass(e,[{key:"fetchData",value:function(){var e=this,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){var n,i=t.response||t.responseText;if(i)try{n=JSON.parse(i),e.categories=new S({triggerSelector:e.trigger,model:n,bus:e.bus});var a="none"!==window.getComputedStyle(document.querySelector(".nav-menu")).getPropertyValue("display"),s=parseInt(window.getComputedStyle(document.querySelector(e.trigger),":before").getPropertyValue("opacity"));a&&s&&e.categories.show()}catch(e){return}}},t.open("GET",this.endpoint,!0),t.send()}},{key:"show",value:function(){return!!this.categories&&(this.categories.show(),this.categories)}},{key:"hide",value:function(){return!!this.categories&&(this.categories.hide(),this.categories)}},{key:"activate",value:function(){return!!this.categories&&(this.categories.bindEvents(!0),this.categories)}},{key:"deactivate",value:function(){return!!this.categories&&(this.categories.bindEvents(!1),this.categories)}}]),e}();return T}();
