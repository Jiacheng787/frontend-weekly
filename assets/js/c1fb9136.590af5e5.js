"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[5216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(g,p(p({ref:t},s),{},{components:r})):n.createElement(g,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={slug:"1\u67081\u65e5\u5185\u5bb9\u6c47\u603b",title:"1\u67081\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},p=void 0,i={permalink:"/frontend-weekly/blog/1\u67081\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2023-01-01/index.md",source:"@site/blog/2023-01-01/index.md",title:"1\u67081\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u57fa\u4e8e GraphQL \u7684\u4e91\u97f3\u4e50 BFF \u5efa\u8bbe\u5b9e\u8df5",date:"2023-01-01T00:00:00.000Z",formattedDate:"January 1, 2023",tags:[],readingTime:.83,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"1\u67081\u65e5\u5185\u5bb9\u6c47\u603b",title:"1\u67081\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"12\u670825\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/12\u670825\u65e5\u5185\u5bb9\u6c47\u603b"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7182019663004434488"},"\u57fa\u4e8e GraphQL \u7684\u4e91\u97f3\u4e50 BFF \u5efa\u8bbe\u5b9e\u8df5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/m-i_Et6YqkZ0aj537vN2_A"},"\u3010\u7b2c2823\u671f\u3011\u6253\u5305JavaScript\u5e93\u7684\u73b0\u4ee3\u5316\u6307\u5357")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/2FVYnKHXFoj18W62pob_jw"},"\u901a\u8fc7\u5206\u6790gin\u3001beego\u6e90\u7801\uff0c\u8bfb\u61c2web\u6846\u67b6\u5bf9http\u8bf7\u6c42\u5904\u7406\u6d41\u7a0b\u7684\u672c\u8d28")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/x2sFAwR0MGucIHGH85gU4A"},"\u6781\u7aef\u60c5\u51b5\u4e0bGo\u7684Map\u4e5f\u4f1a\u53d1\u751f\u5185\u5b58\u6cc4\u6f0f")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/r_n7cZi2sDO0EiBF12tkYw"},"\u8fd9\u4e24\u4e2a\u7279\u6027\u5c06\u5728 Go1.20 \u4e2d\u88ab\u5f03\u7528\uff0c\u53d7\u5f71\u54cd\u6700\u5927\u7684\u5c45\u7136\u662f\u56fd\u5185\u7684\u9762\u8bd5\u5b98")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/2_xALNnPcHgZD7smWxzPcA"},"Go\uff1a\u8bb2\u4e00\u4e2a\u6545\u4e8b\u8bf4\u660e\u4f7f\u7528\u6c47\u7f16\u8bed\u8a00\u7684\u5fc5\u8981\u6027")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/FTXkgxkUzsHMIspCK60G4w"},"Go\u5b66\u8bbe\u8ba1\u6a21\u5f0f--\u6015\u628a\u6838\u5fc3\u4ee3\u7801\u6539\u4e71\uff0c\u8bb0\u5f97\u7528\u4ee3\u7406\u6a21\u5f0f")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/lAIB0l666R6Zh9NAdV809g"},"Go\u8bed\u8a00\u4e2d\u5e38\u89c1100\u95ee\u9898-#25 Unexpected side effects using slice append")))}u.isMDXComponent=!0}}]);