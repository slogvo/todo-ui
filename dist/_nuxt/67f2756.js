(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("3f3cf3eb",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n(328)},343:function(t,e,n){var o=n(48),r=n(221),c=n(222),l=n(223),d=n(224),f=n(225),v=o((function(i){return i[1]})),m=r(c),h=r(l),y=r(d),x=r(f);v.push([t.i,'@font-face{font-family:"Inter-Regular";src:url('+m+')}@font-face{font-family:"Inter-Medium";src:url('+h+')}@font-face{font-family:"Inter-SemiBold";src:url('+y+')}@font-face{font-family:"Inter-Bold";src:url('+x+')}body[data-v-435b9b70]{background-image:linear-gradient(0deg,rgba(153,0,255,.99),rgba(225,0,255,.21));color:#17181f;font-family:"Inter-Regular";font-size:16px;line-height:1.5;min-height:100vh;overflow-x:hidden}fieldset[data-v-435b9b70]{background-color:#f5f5f5!important;border:none!important;padding-bottom:4px!important;padding-top:4px!important}.v-input__slot[data-v-435b9b70]{height:60px;padding:8px 12px!important}.v-text-field__slot>input[data-v-435b9b70]{font-size:14px;padding-left:10px!important;padding-right:40px!important}button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--x-large[data-v-435b9b70]{align-items:center;background-color:#00dc82;color:#fff;display:flex;letter-spacing:none;text-transform:none;width:100%}.swiper-button-next[data-v-435b9b70],.swiper-button-prev[data-v-435b9b70],.v-text-field__details[data-v-435b9b70]{display:none!important}.v-btn__content[data-v-435b9b70]{letter-spacing:0;text-transform:capitalize}.v-btn--is-elevated[data-v-435b9b70]{box-shadow:none}@media screen and (min-width:768px){body[data-v-435b9b70]{align-items:center;display:flex;justify-content:center}}@media screen and (max-width:478.8px){body[data-v-435b9b70]{font-size:14px}}@media screen and (max-width:318.8px){body[data-v-435b9b70]{font-size:12px}}.copy-icon[data-v-435b9b70]{align-items:center;border:1px solid rgba(0,0,0,.2);border-radius:8px;color:#898989;cursor:pointer;display:inline-flex;font-size:13px;justify-content:center;opacity:1;padding:10px 15px;position:absolute;right:20px;top:50%;transform:translateY(-50%);transition:all .25s ease-in-out;visibility:visible}.copy-icon[data-v-435b9b70]:active{background-color:#ececec}.copy-icon.hide-button[data-v-435b9b70]{opacity:0;visibility:hidden}',""]),v.locals={},t.exports=v},351:function(t,e,n){"use strict";n.r(e);var o=n(409),r=n(406),c=n(408),l=(n(26),n(29),n(30),n(8),n(50),n(28),n(51),n(21));function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=n(20),m=(n(84),n(105),n(366)),h={inheritAttrs:!1,props:{label:{type:String,default:""}},data:function(){return{inputValue:"",isInputEmpty:!0,snackbar:{show:!1,message:"",timeout:2e3,color:""}}},computed:{commonAttrs:function(){return{label:"",persistentHint:!0,outlined:!0,dense:!0,hideDetails:!1,class:{"mt-1":this.$props.label},placeholder:"Enter your task"}},disableCopyButton:function(){return this.isInputEmpty||""===this.inputValue.trim()}},watch:{inputValue:function(t){this.isInputEmpty=""===t}},methods:{copyToClipboard:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return content=t.inputValue,e.prev=1,e.next=4,m.a.write({string:content});case 4:t.showNotification("Copied to clipboard!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.showNotification("Copy unsuccessful!");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},showNotification:function(t){this.snackbar.message=t,this.snackbar.show=!0,this.snackbar.color="success"}}},y=(n(342),n(68)),component=Object(y.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"relative"}},[e("label",[t._v(t._s(t.label))]),t._v(" "),e(r.a,{attrs:{timeout:t.snackbar.timeout,color:t.snackbar.color,top:""},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n    "+t._s(t.snackbar.message)+"\n  ")]),t._v(" "),e(c.a,t._g(t._b({scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}})),t._l(t.$slots,(function(e,n){return{key:n,fn:function(){return[t._t(n)]},proxy:!0}}))],null,!0),model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},"v-text-field",f(f({},t.$attrs),t.commonAttrs),!1),t.$listeners)),t._v(" "),e(o.a,{staticClass:"copy-icon",class:{"hide-button":t.disableCopyButton},on:{click:t.copyToClipboard}},[t._v("Copy")])],1)}),[],!1,null,"435b9b70",null);e.default=component.exports}}]);