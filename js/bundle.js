(()=>{var t={1530:(t,e,r)=>{"use strict";var n=r(8710).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),a=r(1400),i=function(t){return function(e,r,i){var c,s=n(e),l=o(s.length),u=a(i,l);if(t&&r!=r){for(;l>u;)if((c=s[u++])!=c)return!0}else for(;l>u;u++)if((t||u in s)&&s[u]===r)return t||u||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e){for(var r=o(e),c=i.f,s=a.f,l=0;l<r.length;l++){var u=r[l];n(t,u)||c(t,u,s(e,u))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),a=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,a=r(8880),i=r(1320),c=r(3505),s=r(9920),l=r(4705);t.exports=function(t,e){var r,u,d,f,p,h=t.target,v=t.global,g=t.stat;if(r=v?n:g?n[h]||c(h,{}):(n[h]||{}).prototype)for(u in e){if(f=e[u],d=t.noTargetGet?(p=o(r,u))&&p.value:r[u],!l(v?u:h+(g?".":"#")+u,t.forced)&&void 0!==d){if(typeof f==typeof d)continue;s(f,d)}(t.sham||d&&d.sham)&&a(f,"sham",!0),i(r,u,f,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,e,r)=>{"use strict";r(4916);var n=r(1320),o=r(7293),a=r(5112),i=r(2261),c=r(8880),s=a("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u="$0"==="a".replace(/./,"$0"),d=a("replace"),f=!!/./[d]&&""===/./[d]("a","$0"),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var h=a(t),v=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!o((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[s]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var m=/./[h],y=r(h,""[t],(function(t,e,r,n,o){return e.exec===i?v&&!o?{done:!0,value:m.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=y[0],E=y[1];n(String.prototype,t,x),n(RegExp.prototype,h,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}d&&c(RegExp.prototype[h],"sham",!0)}},5005:(t,e,r)=>{var n=r(857),o=r(7854),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t])||a(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),a=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),a="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,a,i=r(8536),c=r(7854),s=r(111),l=r(8880),u=r(6656),d=r(5465),f=r(6200),p=r(3501),h=c.WeakMap;if(i){var v=d.state||(d.state=new h),g=v.get,m=v.has,y=v.set;n=function(t,e){return e.facade=t,y.call(v,t,e),e},o=function(t){return g.call(v,t)||{}},a=function(t){return m.call(v,t)}}else{var x=f("state");p[x]=!0,n=function(t,e){return e.facade=t,l(t,x,e),e},o=function(t){return u(t,x)?t[x]:{}},a=function(t){return u(t,x)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,a=function(t,e){var r=c[i(t)];return r==l||r!=s&&("function"==typeof e?n(e):!!e)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,r)=>{var n=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),a=n.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},3070:(t,e,r)=>{var n=r(9781),o=r(4664),a=r(9670),i=r(7593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(a(t),e=i(e,!0),a(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),a=r(9114),i=r(5656),c=r(7593),s=r(6656),l=r(4664),u=Object.getOwnPropertyDescriptor;e.f=n?u:function(t,e){if(t=i(t),e=c(e,!0),l)try{return u(t,e)}catch(t){}if(s(t,e))return a(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),a=r(1318).indexOf,i=r(3501);t.exports=function(t,e){var r,c=o(t),s=0,l=[];for(r in c)!n(i,r)&&n(c,r)&&l.push(r);for(;e.length>s;)n(c,r=e[s++])&&(~a(l,r)||l.push(r));return l}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:(t,e,r)=>{var n=r(5005),o=r(8006),a=r(5181),i=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=a.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),a=r(6656),i=r(3505),c=r(2788),s=r(9909),l=s.get,u=s.enforce,d=String(String).split("String");(t.exports=function(t,e,r,c){var s,l=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||a(r,"name")||o(r,"name",e),(s=u(r)).source||(s.source=d.join("string"==typeof e?e:""))),t!==n?(l?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=r:o(t,e,r)):f?t[e]=r:i(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},7651:(t,e,r)=>{var n=r(4326),o=r(2261);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var a=r.call(t,e);if("object"!=typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},2261:(t,e,r)=>{"use strict";var n,o,a=r(7066),i=r(2999),c=RegExp.prototype.exec,s=String.prototype.replace,l=c,u=(n=/a/,o=/b*/g,c.call(n,"a"),c.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),d=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(u||f||d)&&(l=function(t){var e,r,n,o,i=this,l=d&&i.sticky,p=a.call(i),h=i.source,v=0,g=t;return l&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),g=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),r=new RegExp("^(?:"+h+")",p)),f&&(r=new RegExp("^"+h+"$(?!\\s)",p)),u&&(e=i.lastIndex),n=c.call(l?r:i,g),l?n?(n.input=n.input.slice(v),n[0]=n[0].slice(v),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:u&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),f&&n&&n.length>1&&s.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=l},7066:(t,e,r)=>{"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:(t,e,r)=>{"use strict";var n=r(7293);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},8710:(t,e,r)=>{var n=r(9958),o=r(4488),a=function(t){return function(e,r){var a,i,c=String(o(e)),s=n(r),l=c.length;return s<0||s>=l?t?"":void 0:(a=c.charCodeAt(s))<55296||a>56319||s+1===l||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):a:t?c.slice(s,s+2):i-56320+(a-55296<<10)+65536}};t.exports={codeAt:a(!1),charAt:a(!0)}},1400:(t,e,r)=>{var n=r(9958),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),a=r(6656),i=r(9711),c=r(133),s=r(3307),l=o("wks"),u=n.Symbol,d=s?u:u&&u.withoutSetter||i;t.exports=function(t){return a(l,t)||(c&&a(u,t)?l[t]=u[t]:l[t]=d("Symbol."+t)),l[t]}},4916:(t,e,r)=>{"use strict";var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},5306:(t,e,r)=>{"use strict";var n=r(7007),o=r(9670),a=r(7908),i=r(7466),c=r(9958),s=r(4488),l=r(1530),u=r(7651),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;n("replace",2,(function(t,e,r,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,y=g?"$":"$0";return[function(r,n){var o=s(this),a=null==r?void 0:r[t];return void 0!==a?a.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!g&&m||"string"==typeof n&&-1===n.indexOf(y)){var a=r(e,t,this,n);if(a.done)return a.value}var s=o(t),p=String(this),h="function"==typeof n;h||(n=String(n));var v=s.global;if(v){var E=s.unicode;s.lastIndex=0}for(var S=[];;){var _=u(s,p);if(null===_)break;if(S.push(_),!v)break;""===String(_[0])&&(s.lastIndex=l(p,i(s.lastIndex),E))}for(var b,w="",L=0,A=0;A<S.length;A++){_=S[A];for(var I=String(_[0]),T=d(f(c(_.index),p.length),0),O=[],j=1;j<_.length;j++)O.push(void 0===(b=_[j])?b:String(b));var q=_.groups;if(h){var C=[I].concat(O,T,p);void 0!==q&&C.push(q);var P=String(n.apply(void 0,C))}else P=x(I,p,T,O,q,n);T>=L&&(w+=p.slice(L,T)+P,L=T+I.length)}return w+p.slice(L)}];function x(t,r,n,o,i,c){var s=n+t.length,l=o.length,u=v;return void 0!==i&&(i=a(i),u=h),e.call(c,u,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(s);case"<":c=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===o[d-1]?a.charAt(1):o[d-1]+a.charAt(1):e}c=o[u-1]}return void 0===c?"":c}))}}))}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}function e(t,e){const r=document.querySelector(t);r.classList.add("show"),r.classList.remove("hide"),document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e)}r(5306);window.addEventListener("DOMContentLoaded",(function(){const r=setTimeout((()=>e(".modal",r)),3e5);(function(t,e,r,n){let o=document.querySelectorAll(t),a=document.querySelectorAll(e),i=document.querySelector(r);function c(){a.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),o.forEach((t=>{t.classList.remove(n)}))}function s(t=0){a[t].classList.add("show","fade"),a[t].classList.remove("hide"),o[t].classList.add(n)}c(),s(),i.addEventListener("click",(function(e){const r=e.target;r&&r.classList.contains(t.slice(1))&&o.forEach(((t,e)=>{r==t&&(c(),s(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(r,n,o){const a=document.querySelectorAll(r),i=document.querySelector(n);a.forEach((t=>{t.addEventListener("click",(()=>e(n,o)))})),i.addEventListener("click",(e=>{e.target!==i&&""!=e.target.getAttribute("data-close")||t(n)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&i.classList.contains("show")&&t(n)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(n,o),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",r),function(t,e){function r(t){return t>=0&&t<10?"0"+t:t}!function(t,e){const n=document.querySelector(t),o=n.querySelector("#days"),a=n.querySelector("#hours"),i=n.querySelector("#minutes"),c=n.querySelector("#seconds"),s=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date),r=Math.floor(e/864e5),n=Math.floor(e/1e3%60),o=Math.floor(e/1e3/60%60);return{total:e,days:r,hours:Math.floor(e/36e5%24),minutes:o,seconds:n}}(e);o.innerHTML=r(t.days),a.innerHTML=r(t.hours),i.innerHTML=r(t.minutes),c.innerHTML=r(t.seconds),t.total<=0&&clearInterval(s)}l()}(t,e)}(".timer","2021-03-03"),function(){class t{constructor(t,e,r,n,o,a,...i){this.src=t,this.alt=e,this.title=r,this.descr=n,this.price=o,this.classes=i,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(t)}}(async function(t){let e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((({img:e,altimg:r,title:n,descr:o,price:a})=>{new t(e,r,n,o,a,".menu .container").render()}))}))}(),function(){const t=document.querySelector(".calculating__result span");let e,r,n,o,a;function i(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){t.textContent=e&&r&&n&&o&&a?"female"===e?Math.round((447.6+9.2*n+3.1*r-4.3*o)*a):Math.round((88.36+13.4*n+4.8*r-5.7*o)*a):"____"}function s(t,r){const n=document.querySelectorAll(t);n.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),n.forEach((t=>{t.classList.remove(r)})),t.target.classList.add(r),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":r=+e.value;break;case"weight":n=+e.value;break;case"age":o=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),c(),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(r,n){function o(r){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),e(".modal",n);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${r}</div>\n            </div>\n        `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),o.classList.add("show"),o.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(r).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();let r=document.createElement("img");r.src="img/form/spinner.svg",r.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",r);const n=new FormData(e);(async(t,e)=>{const r=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await r.json()})(0,JSON.stringify(Object.fromEntries(n.entries()))).then((t=>{console.log(t),o("Спасибо! Скоро мы с вами свяжемся"),r.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))})),fetch("http://localhost:3000/menu").then((t=>t.json())).then((t=>console.log(t)))}("form",r),function({container:t,slide:e,nextArrow:r,prevArrow:n,totalCounter:o,currentCounter:a,wrapper:i,field:c}){const s=document.querySelectorAll(e),l=document.querySelector(n),u=document.querySelector(r),d=document.querySelector(o),f=document.querySelector(a),p=document.querySelector(i),h=window.getComputedStyle(p).width,v=document.querySelector(c),g=document.querySelector(t);let m=1,y=0;function x(){s.length<10?f.textContent=`0${m}`:f.textContent=m}function E(){b.forEach((t=>t.style.opacity=".5")),b[m-1].style.opacity=1}function S(t){return+t.replace(/\D/g,"")}s.length<10?(d.textContent=`0${s.length}`,f.textContent=`0${m}`):(d.textContent=s.length,f.textContent=m),v.style.width=100*s.length+"%",v.style.display="flex",v.style.transition="0.5s all",p.style.overflow="hidden",s.forEach((t=>{t.style.width=h})),g.style.position="relative";const _=document.createElement("ol"),b=[];_.classList.add("carousel-indicators"),g.append(_);for(let t=0;t<s.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.classList.add("dot"),0==t&&(e.style.opacity=1),_.append(e),b.push(e)}u.addEventListener("click",(()=>{y==S(h)*(s.length-1)?y=0:y+=S(h),v.style.transform=`translateX(-${y}px)`,m==s.length?m=1:m++,x(),b.forEach((t=>t.style.opacity=".5")),b[m-1].style.opacity=1})),l.addEventListener("click",(()=>{0==y?y=S(h)*(s.length-1):y-=S(h),v.style.transform=`translateX(-${y}px)`,1==m?m=s.length:m--,x(),E()})),b.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");m=e,y=S(h)*(e-1),v.style.transform=`translateX(-${y}px)`,x(),E()}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",slide:".offer__slide",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})()})();
//# sourceMappingURL=bundle.js.map