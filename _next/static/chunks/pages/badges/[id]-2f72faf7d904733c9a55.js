_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7qQu":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n("nOHt"),i=n("YFqc"),c=n.n(i),u=n("8Kt/"),s=n.n(u),d=n("vOnD"),f=d.c.div.withConfig({displayName:"id__Wrapper",componentId:"sc-1hgrc1u-0"})(["display:flex;justify-content:center;align-items:center;height:85vh;"]),l=d.c.div.withConfig({displayName:"id__Card",componentId:"sc-1hgrc1u-1"})(["background:",";border:1px solid ",";border-radius:5px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;min-width:30rem;min-height:35rem;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.02);padding:2rem;"],(function(e){return e.theme.color.background}),(function(e){return e.theme.color.border})),p=d.c.img.withConfig({displayName:"id__Image",componentId:"sc-1hgrc1u-2"})(["width:24rem;height:24rem;object-fit:contain;"]),h=d.c.button.withConfig({displayName:"id__Close",componentId:"sc-1hgrc1u-3"})(["width:76px;font-size:13px;height:26px;border-radius:3px;border:none;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.2);outline:none;cursor:pointer;&:hover{background:#e0e0e0;}"]),v=d.c.div.withConfig({displayName:"id__ButtonsWrapper",componentId:"sc-1hgrc1u-4"})(["display:flex;gap:1rem;"]);t.default=function(){var e=Object(o.useState)(null),t=e[0],i=e[1],u=Object(a.useRouter)(),d=parseInt(u.query.id);return Object(o.useEffect)((function(){d&&n.e(6).then(n.t.bind(null,"OQ4D",3)).then((function(e){i(e.default.badges[d-1].badge)}))}),[d]),Object(r.jsxs)(f,{children:[Object(r.jsx)(s.a,{children:Object(r.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js"})}),Object(r.jsxs)(l,{children:[Object(r.jsx)(p,{src:t,alt:"Badge"}),Object(r.jsxs)(v,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-size":"large","data-text":"Just earned my DSC VIT Bhopal Badge!! ","data-url":"https://dscvitbhopal.github.io/badges/".concat(u.query.id),"data-via":"dscvitbhopal","data-hashtags":"#dsc","data-dnt":"true","data-show-count":"false",children:"Tweet"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("script",{src:"https://platform.linkedin.com/in.js",type:"text/javascript",children:"lang: en_US"}),Object(r.jsx)("script",{type:"IN/Share","data-url":"https://dscvitbhopal.github.io/"})]}),Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://dscvitbhopal.github.io/badges/".concat(u.query.id),children:"link"})}),Object(r.jsx)(c.a,{href:"/badges",children:Object(r.jsx)(h,{children:"Back"})})]})]})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var s=l[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=o.props[s],f=r[s]||new Set;f.has(d)?a=!1:(f.add(d),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function d(e,t,n,r){if((0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),l=f.href,p=f.as,h=e.children,v=e.replace,b=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=a.Children.only(h),w=y&&"object"===typeof y&&y.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),_=r(x,2),j=_[0],O=_[1],M=a.default.useCallback((function(e){j(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,j]);(0,a.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(l),r="undefined"!==typeof g?g:n&&n.locale,o=s[l+"%"+p+(r?"%"+r:"")];e&&!o&&d(n,l,p,{locale:r})}),[p,l,O,g,t,n]);var I={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,p,v,b,m,g)},onMouseEnter:function(e){(0,i.isLocalURL)(l)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(n,l,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(I.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(y,I)};t.default=f},iBL4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/badges/[id]",function(){return n("7qQu")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,a.useRef)(),s=(0,a.useState)(!1),d=r(s,2),f=d[0],l=d[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&l(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){c||f||(0,i.default)((function(){return l(!0)}))}),[f]),[p,f]};var a=n("q1tI"),i=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var u=new Map}},[["iBL4",0,1,2,3]]]);