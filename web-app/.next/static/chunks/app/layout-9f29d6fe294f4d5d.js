(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1765:function(t,e,o){"use strict";o.d(e,{A:function(){return f},X:function(){return r}});var n=o(2265);let a=(0,n.createContext)(null);function r(){let t=(0,n.useContext)(a);if(!t)throw Error("useMantineColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");return t}function f({colorScheme:t,toggleColorScheme:e,children:o}){return n.createElement(a.Provider,{value:{colorScheme:t,toggleColorScheme:e}},o)}f.displayName="@mantine/core/ColorSchemeProvider"},5434:function(t,e,o){"use strict";o.d(e,{x:function(){return f}});var n=o(2265),a=o(9538),r=o(1344);function f({styles:t}){let e=(0,r.rZ)();return n.createElement(a.xB,{styles:(0,a.iv)("function"==typeof t?t(e):t)})}},2820:function(t,e,o){"use strict";o.d(e,{s:function(){return a}});var n=o(2265);function a(t,e,o){(0,n.useEffect)(()=>(window.addEventListener(t,e,o),()=>window.removeEventListener(t,e,o)),[t,e])}},1503:function(t,e,o){Promise.resolve().then(o.bind(o,3955)),Promise.resolve().then(o.bind(o,1030))},1030:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return r}});var n=o(7437),a=o(2749);function r(t){let{children:e}=t;return(0,n.jsx)(a.SessionProvider,{children:e})}},3955:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return E}});var n=o(7437),a=o(5673),r=o(7073),f=o(1765),c=o(1344),i=o(8782),l=o(2265),s=o(2820);function u(t){try{return JSON.parse(t)}catch(e){return t}}var d=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(t,e,o)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,v=(t,e)=>{for(var o in e||(e={}))S.call(e,o)&&b(t,o,e[o]);if(w)for(var o of w(e))y.call(e,o)&&b(t,o,e[o]);return t},k=(t,e)=>h(t,m(e)),g=o(5434);function p(){return(0,n.jsx)(g.x,{styles:[{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-Black-b5013d854bb5a8e48651144002dcc6a7.woff2",'\') format("woff2")'),fontWeight:900,fontStyle:"normal"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-BlackItalic-d456cea1fae27f7d469433631ff713b2.woff2",'\') format("woff2")'),fontWeight:900,fontStyle:"italic"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-Bold-a0e6d25529eab537426cc73a2199dd85.woff2",'\') format("woff2")'),fontWeight:700,fontStyle:"normal"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-BoldItalic-99235b175b514139aed0e14900656fcc.woff2",'\') format("woff2")'),fontWeight:700,fontStyle:"italic"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-Italic-f4acf4adbba9bcd2c75cc012be3f0e0e.woff2",'\') format("woff2")'),fontWeight:400,fontStyle:"italic"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-Light-df8f06167ee6fd05a1312732d4e9ea50.woff2",'\') format("woff2")'),fontWeight:300,fontStyle:"normal"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-LightItalic-540a6dd2e29f70e154776e4d0dfbaa38.woff2",'\') format("woff2")'),fontWeight:300,fontStyle:"italic"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-Medium-1ffe968245568e8ba1e766cec2c0075d.woff2",'\') format("woff2")'),fontWeight:500,fontStyle:"normal"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-MediumItalic-6be6d51d5fc7402ee45f6c343e607baa.woff2",'\') format("woff2")'),fontWeight:500,fontStyle:"italic"}},{"@font-face":{fontFamily:"Satoshi",src:"url('".concat("/_next/static/chunks/fonts/Satoshi-Regular-9ec05085c4cd2966eba82346dcfd9bea.woff2",'\') format("woff2")'),fontWeight:400,fontStyle:"normal"}}]})}var E=function(t){let{children:e}=t,o=(0,r.S)();o.compat=!0;let[d,h]=(function(t,e){let o="localStorage"===t?"mantine-local-storage":"mantine-session-storage";return function({key:n,defaultValue:a,getInitialValueInEffect:r=!0,deserialize:f=u,serialize:c=t=>(function(t,e){try{return JSON.stringify(t)}catch(t){throw Error(`@mantine/hooks ${e}: Failed to serialize the value`)}})(t,e)}){let i=(0,l.useCallback)(e=>{if("undefined"==typeof window||!(t in window)||null===window[t]||e)return a;let o=window[t].getItem(n);return null!==o?f(o):a},[n,a]),[d,h]=(0,l.useState)(i(r)),m=(0,l.useCallback)(e=>{e instanceof Function?h(a=>{let r=e(a);return window[t].setItem(n,c(r)),window.dispatchEvent(new CustomEvent(o,{detail:{key:n,value:e(a)}})),r}):(window[t].setItem(n,c(e)),window.dispatchEvent(new CustomEvent(o,{detail:{key:n,value:e}})),h(e))},[n]),w=(0,l.useCallback)(()=>{window[t].removeItem(n),window.dispatchEvent(new CustomEvent(o,{detail:{key:n,value:a}}))},[]);return(0,s.s)("storage",e=>{var o;e.storageArea===window[t]&&e.key===n&&h(f(null!=(o=e.newValue)?o:void 0))}),(0,s.s)(o,t=>{t.detail.key===n&&h(t.detail.value)}),(0,l.useEffect)(()=>{void 0!==a&&void 0===d&&m(a)},[a,d,m]),(0,l.useEffect)(()=>{r&&h(i())},[n]),[void 0===d?a:d,m,w]}})("localStorage","use-local-storage")({key:"mantine-color-scheme",defaultValue:"light",getInitialValueInEffect:!0}),m=t=>h(t||("dark"===d?"light":"dark"));return!function(t,e=["INPUT","TEXTAREA","SELECT"],o=!1){(0,l.useEffect)(()=>{let n=n=>{t.forEach(([t,a,r={preventDefault:!0}])=>{(function(t,e){let{alt:o,ctrl:n,meta:a,mod:r,shift:f,key:c}=t,{altKey:i,ctrlKey:l,metaKey:s,shiftKey:u,key:d}=e;if(o!==i)return!1;if(r){if(!l&&!s)return!1}else if(n!==l||a!==s)return!1;return f===u&&!!c&&(d.toLowerCase()===c.toLowerCase()||e.code.replace("Key","").toLowerCase()===c.toLowerCase())})(function(t){let e=t.toLowerCase().split("+").map(t=>t.trim()),o={alt:e.includes("alt"),ctrl:e.includes("ctrl"),meta:e.includes("meta"),mod:e.includes("mod"),shift:e.includes("shift")},n=["alt","ctrl","meta","shift","mod"],a=e.find(t=>!n.includes(t));return k(v({},o),{key:a})}(t),n)&&function(t,e,o=!1){return!(t.target instanceof HTMLElement)||(o?!e.includes(t.target.tagName):!t.target.isContentEditable&&!e.includes(t.target.tagName))}(n,e,o)&&(r.preventDefault&&n.preventDefault(),a(n))})};return document.documentElement.addEventListener("keydown",n),()=>document.documentElement.removeEventListener("keydown",n)},[t])}([["mod+J",()=>m()]]),(0,n.jsx)(a.C,{value:o,children:(0,n.jsxs)(f.A,{colorScheme:d,toggleColorScheme:m,children:[(0,n.jsx)(p,{}),(0,n.jsx)(c.Me,{withGlobalStyles:!0,withNormalizeCSS:!0,theme:{fontFamily:"Satoshi, sans-serif",colorScheme:d,colors:{blue:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],white:["#ffffff"]},components:{Modal:{styles:t=>({title:{fontSize:t.fontSizes.lg,fontWeight:700,color:"dark"===t.colorScheme?t.white:t.black},header:{backgroundColor:"dark"===t.colorScheme?t.colors.dark[6]:t.white},content:{backgroundColor:"dark"===t.colorScheme?t.colors.dark[6]:t.white,fontSize:(0,i.h)(14),color:"dark"===t.colorScheme?t.white:t.black}})}}},children:e})]})})}}},function(t){t.O(0,[588,749,971,596,744],function(){return t(t.s=1503)}),_N_E=t.O()}]);