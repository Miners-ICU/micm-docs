(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"01d3":function(t,e,n){"use strict";n.r(e);var i=n("0e12"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"0240":function(t,e,n){"use strict";uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",function(){return Vue.extend(n("b0cd").default)}),__definePage("pages/mine/mine",function(){return Vue.extend(n("99b3").default)}),__definePage("pages/mine/info/info",function(){return Vue.extend(n("ac8e").default)}),__definePage("pages/schedule/schedule",function(){return Vue.extend(n("2ba1").default)}),__definePage("components/test/test",function(){return Vue.extend(n("17bf").default)}),__definePage("pages/mine/login/login",function(){return Vue.extend(n("e2a8").default)})},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(r.length>1){var o=r.pop();s=r.join("---COMMA---"),0===o.indexOf(" at ")?s+=o:s+="---COMMA---"+o}else s=r[0];return s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"0dfb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"Hello"}},methods:{}};e.default=i},"0e12":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log(t("App Launch"," at App.vue:4"))},onShow:function(){console.log(t("App Show"," at App.vue:7"))},onHide:function(){console.log(t("App Hide"," at App.vue:10"))}};e.default=n}).call(this,n("0de9")["default"])},1427:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},"17bf":function(t,e,n){"use strict";n.r(e);var i=n("bf85"),r=n("2818");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},"21ff":function(t,e,n){"use strict";n.r(e);var i=n("c1cd"),r=n("2bc4");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"6bba68da",null,!1,i["a"],o);e["default"]=u.exports},2818:function(t,e,n){"use strict";n.r(e);var i=n("47b2"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"2ba1":function(t,e,n){"use strict";n.r(e);var i=n("6d65"),r=n("f47d");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},"2bc4":function(t,e,n){"use strict";n.r(e);var i=n("3c6a"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"2bcc":function(t,e,n){"use strict";n.r(e);var i=n("0dfb"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"3c6a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach(function(e,n){e===t&&t.grid.children.splice(n,1)})},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=i},"47b2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"test",data:function(){return{}},methods:{}};e.default=i},"485a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("867a")),r=a(n("ec5c")),s=a(n("6c88")),o=a(n("21ff"));function a(t){return t&&t.__esModule?t:{default:t}}var u={components:{uniSection:i.default,uniSwiperDot:r.default,uniGrid:s.default,uniGridItem:o.default},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],menus:[{iconPath:"/static/image/rc1.png",title:"招聘会"},{iconPath:"/static/image/rc1.png",title:"我的报名"},{iconPath:"/static/image/rc1.png",title:"我的学分"},{iconPath:"/static/image/rc1.png",title:"讲座"},{iconPath:"/static/image/rc1.png",title:"课程"},{iconPath:"/static/image/rc1.png",title:"报名"},{iconPath:"/static/image/rc1.png",title:"考试"},{iconPath:"/static/image/rc1.png",title:"pu"}],modeIndex:-1,styleIndex:-1,current:0,mode:"dot",dotsStyles:{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},onLoad:function(){},methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},selectMode:function(t,e){this.mode=t,this.modeIndex=e,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}};e.default=u},"4ca8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"59a4":function(t,e,n){"use strict";n.r(e);var i=n("1427"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"68d6":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-grid-wrap"),attrs:{_i:0}},[n("view",{ref:"uni-grid",staticClass:t._$s(1,"sc","uni-grid"),class:t._$s(1,"c",{"uni-grid--border":t.showBorder}),style:t._$s(1,"s",{"border-left-style":"solid","border-left-color":t.borderColor,"border-left-width":t.showBorder?"1px":0}),attrs:{id:t._$s(1,"a-id",t.elId),_i:1}},[t._t("default",null,{_i:2})],2)])},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"6a7e":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-swiper__warp"),attrs:{_i:0}},[t._t("default",null,{_i:1}),t._$s(2,"i","default"===t.mode)?n("view",{key:"default",staticClass:t._$s(2,"sc","uni-swiper__dots-box"),style:t._$s(2,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:2}},t._l(t._$s(3,"f",{forItems:t.info}),function(e,i,r,s){return n("view",{key:t._$s(3,"f",{forIndex:r,key:i}),staticClass:t._$s("3-"+s,"sc","uni-swiper__dots-item uni-swiper__dots-bar"),style:t._$s("3-"+s,"s",{width:(i===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"}),attrs:{_i:"3-"+s}})}),0):t._e(),t._$s(4,"i","dot"===t.mode)?n("view",{key:"dot",staticClass:t._$s(4,"sc","uni-swiper__dots-box"),style:t._$s(4,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:4}},t._l(t._$s(5,"f",{forItems:t.info}),function(e,i,r,s){return n("view",{key:t._$s(5,"f",{forIndex:r,key:i}),staticClass:t._$s("5-"+s,"sc","uni-swiper__dots-item"),style:t._$s("5-"+s,"s",{width:t.dots.width+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"5-"+s}})}),0):t._e(),t._$s(6,"i","round"===t.mode)?n("view",{key:"round",staticClass:t._$s(6,"sc","uni-swiper__dots-box"),style:t._$s(6,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:6}},t._l(t._$s(7,"f",{forItems:t.info}),function(e,i,r,s){return n("view",{key:t._$s(7,"f",{forIndex:r,key:i}),staticClass:t._$s("7-"+s,"sc","uni-swiper__dots-item "),class:t._$s("7-"+s,"c",[i===t.current&&"uni-swiper__dots-long"]),style:t._$s("7-"+s,"s",{width:(i===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"7-"+s}})}),0):t._e(),t._$s(8,"i","nav"===t.mode)?n("view",{key:"nav",staticClass:t._$s(8,"sc","uni-swiper__dots-box uni-swiper__dots-nav"),style:t._$s(8,"s",{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}),attrs:{_i:8}},[n("text",{staticClass:t._$s(9,"sc","uni-swiper__dots-nav-item"),style:t._$s(9,"s",{color:t.dotsStyles.color}),attrs:{_i:9}},[t._v(t._$s(9,"t0",t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field])))])]):t._e(),t._$s(10,"i","indexes"===t.mode)?n("view",{key:"indexes",staticClass:t._$s(10,"sc","uni-swiper__dots-box"),style:t._$s(10,"s",{bottom:t.dots.bottom+"px"}),attrs:{_i:10}},t._l(t._$s(11,"f",{forItems:t.info}),function(e,i,r,s){return n("view",{key:t._$s(11,"f",{forIndex:r,key:i}),staticClass:t._$s("11-"+s,"sc","uni-swiper__dots-item uni-swiper__dots-indexes"),style:t._$s("11-"+s,"s",{width:t.dots.width+"px",height:t.dots.height+"px",color:i===t.current?t.dots.selectedColor:t.dots.color,"background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder}),attrs:{_i:"11-"+s}},[n("text",{staticClass:t._$s("12-"+s,"sc","uni-swiper__dots-indexes-text"),attrs:{_i:"12-"+s}},[t._v(t._$s("12-"+s,"t0",t._s(i+1)))])])}),0):t._e()],2)},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"6c88":function(t,e,n){"use strict";n.r(e);var i=n("68d6"),r=n("d133");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"76f86240",null,!1,i["a"],o);e["default"]=u.exports},"6d65":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view")},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"6fa6":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view")},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"7fd1":function(t,e,n){"use strict";n.r(e);var i=n("4ca8"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},8427:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}})},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"867a":function(t,e,n){"use strict";n.r(e);var i=n("88c6"),r=n("7fd1");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"6ac7b750",null,!1,i["a"],o);e["default"]=u.exports},"88c6":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-section"),attrs:{_i:0}},[t._$s(1,"i",t.type)?n("view",{staticClass:t._$s(1,"sc","uni-section__head"),attrs:{_i:1}},[n("view",{staticClass:t._$s(2,"sc","uni-section__head-tag"),class:t._$s(2,"c",t.type),attrs:{_i:2}})]):t._e(),n("view",{staticClass:t._$s(3,"sc","uni-section__content"),attrs:{_i:3}},[n("text",{staticClass:t._$s(4,"sc","uni-section__content-title"),class:t._$s(4,"c",{distraction:!t.subTitle}),attrs:{_i:4}},[t._v(t._$s(4,"t0",t._s(t.title)))]),t._$s(5,"i",t.subTitle)?n("text",{staticClass:t._$s(5,"sc","uni-section__content-sub"),attrs:{_i:5}},[t._v(t._$s(5,"t0",t._s(t.subTitle)))]):t._e()]),t._t("default",null,{_i:6})],2)},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"8bbf":function(t,e){t.exports=Vue},"8dc7":function(t,e,n){"use strict";n.r(e);var i=n("a371"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"921b":function(t,e,n){"use strict";var i=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function d(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var f=i.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",_=1800,g=300,v=10,y="__DC_STAT_UUID",b="__DC_UUID_VALUE";function m(){var t="";if("n"===k()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(y)}catch(e){t=b}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(y,t)}catch(e){uni.setStorageSync(y,b)}}return t}var w=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var s in n)i[n[s]]=t[n[s]],r+=n[s]+"="+t[n[s]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},S=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},x=function(){var t="";return"wx"!==k()&&"qq"!==k()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},C=function(){return"n"===k()?plus.runtime.version:""},D=function(){var t=k(),e="";return"n"===t&&(e=plus.runtime.channel),e},O=function(t){var e=k(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)},j="First__Visit__Time",T="Last__Visit__Time",I=function(){var t=uni.getStorageSync(j),e=0;return t?e=t:(e=$(),uni.setStorageSync(j,e),uni.removeStorageSync(T)),e},q=function(){var t=uni.getStorageSync(T),e=0;return e=t||"",uni.setStorageSync(T,$()),e},P="__page__residence__time",R=0,N=0,E=function(){return R=$(),"n"===k()&&uni.setStorageSync(P,$()),R},B=function(){return N=$(),"n"===k()&&(R=uni.getStorageSync(P)),N-R},A="Total__Visit__Count",M=function(){var t=uni.getStorageSync(A),e=1;return t&&(e=t,e++),uni.setStorageSync(A,e),e},U=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},L=0,H=0,V=function(){var t=(new Date).getTime();return L=t,H=0,t},J=function(){var t=(new Date).getTime();return H=t,t},G=function(t){var e=0;if(0!==L&&(e=H-L),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>_;return{residenceTime:e,overtime:i}}return{residenceTime:e}},F=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===k()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},Q=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,s=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===k()?i.$mp&&i.$mp.page.is+s:i.$scope&&i.$scope.route+s||i.$mp&&i.$mp.page.route+s},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},z=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("fc16").default,Y=n("a207").default||n("a207"),X=uni.getSystemInfoSync(),Z=function(){function t(){c(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:k(),mpn:x(),ak:Y.appid,usv:f,v:C(),ch:D(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return d(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){J();var t=G("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,J();var n=G();V();var i=Q(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=Q(this),e=F();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=t);J(),this._lastPageRoute=t;var n=G("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){J();var t=G("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=$(),this.statData.sc=O(t.scene),this.statData.fvts=I(),this.statData.lvts=q(),this.statData.tvc=M(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,s=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:s,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;Y.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=$(),r=this._navigationBarTitle;t.ttn=r.page,t.ttpj=r.config,t.ttc=r.report;var s=this._reportingRequestData;if("n"===k()&&(s=uni.getStorageSync("__UNI__STAT__DATA")||{}),s[t.lt]||(s[t.lt]=[]),s[t.lt].push(t),"n"===k()&&uni.setStorageSync("__UNI__STAT__DATA",s),!(B()<v)||e){var o=this._reportingRequestData;"n"===k()&&(o=uni.getStorageSync("__UNI__STAT__DATA")),E();var a=[],u=[],c=[],l=function(t){var e=o[t];e.forEach(function(e){var n=S(e);0===t?a.push(n):3===t?c.push(n):u.push(n)})};for(var d in o)l(d);a.push.apply(a,u.concat(c));var p={usv:f,t:i,requests:JSON.stringify(a)};this._reportingRequestData={},"n"===k()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){n._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:p,method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout(function(){e._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=w(U(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){z(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),tt=function(t){function e(){var t;return c(this,e),t=r(this,o(e).call(this)),t.instance=null,"function"===typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return a(e,t),d(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),d(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,E(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),e}(Z),et=tt.getInstance(),nt=!1,it={onLaunch:function(t){et.report(t,this)},onReady:function(){et.ready(this)},onLoad:function(t){if(et.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return et.interceptShare(!1),e.call(this,t)}}},onShow:function(){nt=!1,et.show(this)},onHide:function(){nt=!0,et.hide(this)},onUnload:function(){nt?nt=!1:et.hide(this)},onError:function(t){et.error(t)}};function rt(){var t=n("8bbf");(t.default||t).mixin(it),uni.report=function(t,e){et.sendEvent(t,e)}}rt()},"99b3":function(t,e,n){"use strict";n.r(e);var i=n("a87f"),r=n("59a4");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},a07e:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("uni-swiper-dot",{attrs:{info:t.info,current:t.current,mode:t.mode,"dots-styles":t.dotsStyles,field:"content",_i:1}},[n("swiper",{staticClass:t._$s(2,"sc","swiper-box"),attrs:{_i:2},on:{change:t.change}},t._l(t._$s(3,"f",{forItems:t.info}),function(e,i,r,s){return n("swiper-item",{key:t._$s(3,"f",{forIndex:r,key:i})},[n("view",{staticClass:t._$s("4-"+s,"sc","swiper-item"),class:t._$s("4-"+s,"c",e.colorClass),attrs:{_i:"4-"+s}},[n("image",{staticClass:t._$s("5-"+s,"sc","image"),attrs:{src:t._$s("5-"+s,"a-src",e.url),_i:"5-"+s}})])])}),0)]),n("uni-grid",{attrs:{column:4,square:"false",_i:6}},t._l(t._$s(7,"f",{forItems:t.menus}),function(e,i,r,s){return n("uni-grid-item",{key:t._$s(7,"f",{forIndex:r,key:e.title}),attrs:{_i:"7-"+s}},[n("view",{staticClass:t._$s("8-"+s,"sc","menu_icons"),attrs:{_i:"8-"+s}},[n("image",{staticClass:t._$s("9-"+s,"sc","menu_icons_item"),attrs:{src:t._$s("9-"+s,"a-src",e.iconPath),_i:"9-"+s}}),n("text",{staticClass:t._$s("10-"+s,"sc","text"),attrs:{_i:"10-"+s}},[t._v(t._$s("10-"+s,"t0",t._s(e.title)))])])])}),1)],1)},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},a207:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__EFFD347"};e.default=i},a371:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=i},a63f:function(t,e,n){"use strict";n.r(e);var i=n("01d3");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s,o,a,u,c=n("f0c5"),l=Object(c["a"])(i["default"],s,o,!1,null,null,null,!1,a,u);e["default"]=l.exports},a87f:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("text"),n("navigator",{})])},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},ac8e:function(t,e,n){"use strict";n.r(e);var i=n("6fa6"),r=n("d2c5");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},ad38:function(t,e,n){"use strict";n.r(e);var i=n("485a"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},b0cd:function(t,e,n){"use strict";n.r(e);var i=n("a07e"),r=n("ad38");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},badb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},bc31:function(t,e,n){"use strict";n("0240"),n("921b");var i=s(n("8bbf")),r=s(n("a63f"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,r.default.mpType="app";var u=new i.default(o({},r.default));u.$mount()},bf85:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("text")])},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},c1cd:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._$s(0,"i",t.width)?n("view",{staticClass:t._$s(0,"sc","uni-grid-item"),style:t._$s(0,"s","width:"+t.width+";"+(t.square?"height:"+t.width:"")),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","uni-grid-item__box"),class:t._$s(1,"c",{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight}),style:t._$s(1,"s",{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor}),attrs:{_i:1},on:{click:t._onClick}},[t._t("default",null,{_i:2})],2)]):t._e()},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},d133:function(t,e,n){"use strict";n.r(e);var i=n("dacf"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},d2c5:function(t,e,n){"use strict";n.r(e);var i=n("badb"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},dacf:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout(function(){t._getSize(function(e){t.children.forEach(function(t,n){t.width=e})})},50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(n){e.width=parseInt((n[0].width-1)/e.column)+"px",t(e.width)})}}};e.default=i},e2a8:function(t,e,n){"use strict";n.r(e);var i=n("8427"),r=n("2bcc");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},ec5c:function(t,e,n){"use strict";n.r(e);var i=n("6a7e"),r=n("8dc7");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"06ff7274",null,!1,i["a"],o);e["default"]=u.exports},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a,u,c){var l,d="function"===typeof t?t.options:t;if(u&&(d.components=Object.assign(u,d.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(d.mixins||(d.mixins=[])).push(c)),e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(d.functional){d._injectStyles=l;var f=d.render;d.render=function(t,e){return l.call(e),f(t,e)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:d}}n.d(e,"a",function(){return i})},f43d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},f47d:function(t,e,n){"use strict";n.r(e);var i=n("f43d"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},fc16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{},globalStyle:{}};e.default=i}},[["bc31","app-config"]]]);