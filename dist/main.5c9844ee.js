module.exports=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=2)}([function(e,n){e.exports=require("axios")},function(e,n,r){"use strict";r.r(n);var t=r(0);n.default=function(e){var n=e.authAPI,r=e.share,o=e.jsApiList,i=function(e){var n=e.title,r=e.desc,t=e.link,o=e.imgUrl,i=e.success,c=void 0===i?function(){}:i,u=e.cancel,a=void 0===u?function(){}:u;return function(){wx.onMenuShareTimeline({title:n,link:t,imgUrl:o,success:c,cancel:a}),wx.onMenuShareAppMessage({title:n,desc:r,link:t,imgUrl:o,type:"",dataUrl:"",success:c,cancel:a})}},c=Object(t.get)(n,{params:{fromurl:location.href}}).then(function(e){if(e.data.error_code)throw new Error(e.data.error_msg);return e.data}).then(function(e){return function(n){window.wx.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:e||["onMenuShareTimeline","onMenuShareAppMessage","startRecord","stopRecord","playVoice","uploadVoice","downloadVoice","onVoicePlayEnd"]}),window.wx.ready(i(r))}}(o));return c.registShare=i,c}},function(e,n,r){e.exports=r(1)}]);