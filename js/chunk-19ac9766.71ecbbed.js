(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19ac9766"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,u,"next",t)}function u(t){n(a,i,o,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return i}))},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new I(n||[]);return o._invoke=E(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function y(){}function g(){}function m(){}var w={};u(w,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&n.call(x,o)&&(w=x);var _=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(i,o,a,c){var u=l(t[i],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=h;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return G()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=m,u(_,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new S(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),u(_,c,"Generator"),u(_,o,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"9cc4":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"sidebar-top"},[r("div",[t._v(t._s(t.company))]),r("div",{on:{click:function(e){return t.signOut()}}},[t._v("退出")])]),r("div",{staticClass:"sidebar-cont"},[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"vertical"}},[t._l(t.sidebar,(function(e,n){return r("div",{key:n},[r("router-link",{attrs:{to:{path:e.router,query:{item:e.id}}}},[0===e.Subclass.length?r("el-menu-item",{attrs:{index:e.id}},[r("i",{class:e.icon}),r("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),"dingdan"==e.tip&&t.dingdan>0?r("span",{staticClass:"span-tips",staticStyle:{"margin-left":"2.6875rem"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.dingdan))]):t._e()]):t._e()],1),e.Subclass.length>0?r("el-submenu",{attrs:{index:e.id}},[r("template",{slot:"title"},[r("i",{class:e.icon}),r("span",[t._v(t._s(e.title))])]),t._l(e.Subclass,(function(e,n){return r("div",{key:n},[r("router-link",{attrs:{to:{path:e.router,query:{item:e.id}}}},[r("el-menu-item",{attrs:{index:e.id}},[t._v(t._s(e.title))])],1)],1)}))],2):t._e()],1)})),r("div",{staticStyle:{height:"50px"}})],2)],1),r("div",[r("audio",{ref:"audio",attrs:{src:"https://diancan-1252107261.cos.accelerate.myqcloud.com/mp3/dingdantixing.mp3"}})]),r("router-view")],1)},i=[],o=(r("96cf"),r("1da1")),a={data:function(){return{company:"",activeIndex:"1",dingdan:0,sidebar:[{id:"1",icon:"el-icon-s-data",title:"数据分析",router:"index",tip:"shuju",Subclass:[]},{id:"2",icon:"el-icon-bank-card",title:"订单管理",router:"order",tip:"dingdan",Subclass:[]},{id:"3",icon:"el-icon-tableware",title:"菜品管理",router:"dishes",tip:"caiping",Subclass:[]},{id:"4",icon:"el-icon-menu",title:"菜品类目",router:"category",tip:"leimu",Subclass:[]},{id:"5",icon:"el-icon-takeaway-box",title:"桌号管理",router:"table",tip:"zhuohao",Subclass:[]},{id:"6",icon:"el-icon-setting",title:"店铺设置",router:"set-up",tip:"shezhi",Subclass:[]}]}},methods:{handleSelect:function(t,e){localStorage.setItem("nuvmenuid",JSON.stringify(t))},plays:function(){var t=this;this.$nextTick((function(){var e=t.$refs.audio;e.play()}))},signOut:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.clear(),this.$router.push({name:"login"});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=localStorage.getItem("company");this.activeIndex=JSON.parse(localStorage.getItem("nuvmenuid")),t&&(this.company=t);var e=localStorage.getItem("order_num");this.dingdan=e>99?"99+":e},watch:{"$store.state.remind":function(t,e){t.num>0&&this.plays(),this.dingdan=t.num>99?"99+":t.num}}},c=a,u=(r("ed87"),r("2877")),s=Object(u["a"])(c,n,i,!1,null,"59db72e1",null);e["default"]=s.exports},c757:function(t,e,r){},ed87:function(t,e,r){"use strict";r("c757")}}]);
//# sourceMappingURL=chunk-19ac9766.71ecbbed.js.map