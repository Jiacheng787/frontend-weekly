"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[75494],{49613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,h=s["".concat(i,".").concat(k)]||s[k]||c[k]||p;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},51599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var r=n(64778),a=(n(59496),n(49613));const p={slug:"7\u67083\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u67083\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},l=void 0,o={permalink:"/frontend-weekly/2022/7\u67083\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2022/2022-07-03/index.md",source:"@site/blogs/2022/2022-07-03/index.md",title:"7\u67083\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u524d\u7aef\u56db\u79cd\u5e8f\u5217\u5316",date:"2022-07-03T00:00:00.000Z",formattedDate:"July 3, 2022",tags:[],readingTime:6.03,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/img/IMG_0687.JPG",key:"garfield"}],frontMatter:{slug:"7\u67083\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u67083\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/7\u670810\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"6\u670826\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/6\u670826\u65e5\u5185\u5bb9\u6c47\u603b"}},i={authorsImageUrls:[void 0]},u=[],m={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcd2 \u524d\u7aef\u56db\u79cd\u5e8f\u5217\u5316"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. JSON \u5e8f\u5217\u5316")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u5bf9\u5e94\u7684 Content-Type \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Query String \u5e8f\u5217\u5316")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"new URLSearchParams()")," \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u5bf9\u5e94\u7684 Content-Type \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),"\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f URL query string \u4e0e body \u53d1\u9001\u7684 query string \u7565\u6709\u4e0d\u540c\uff0c\u7279\u522b\u662f\u5bf9\u7a7a\u683c\u7684\u5904\u7406")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. FormData \u5e8f\u5217\u5316")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"new FormData()")," \u521b\u5efa\uff0c\u5bf9\u5e94\u7684 Content-Type \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. XML \u5e8f\u5217\u5316")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"new XMLSerializer()")," \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u4e00\u822c\u7528\u4e8e DOM \u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\ud83d\udcd2 React 18 \u65b0\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selective Hydration"),(0,a.kt)("li",{parentName:"ul"},"Offscreen")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7115361618774622216"},"Vue 2.7 \u6b63\u5f0f\u53d1\u5e03\uff0c\u4ee3\u53f7\u4e3a Naruto")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/AyEb4fDsTvvfOG1Lgb1bzw"},"\u7ebf\u4e0a\u670d\u52a1\u5668\u8001\u662f\u5361\uff0c\u8be5\u5982\u4f55\u4f18\u5316")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/PGghgQfJTGIyoz8Bz8MD9A"},"\u3010\u7b2c2657\u671f\u3011\u524d\u7aefJS\u653b\u9632\u5bf9\u6297")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/XCgZ5tOxyMKpOqvNvRDFQA"},"Redis \u552f\u5feb\u4e0d\u7834\u7684\u79d8\u5bc6")),(0,a.kt)("p",null,"\ud83d\udcd2 \u65b0\u4e00\u4ee3 npm \u5305\u6784\u5efa\u5de5\u5177 father 4 RC \u53d1\u5e03"),(0,a.kt)("p",null,"father 4 \u652f\u6301 Bundless \u548c Bundle \u4e24\u79cd\u6784\u5efa\u6a21\u5f0f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bundless \u6307\u628a\u6240\u6709\u6e90\u7801\u6587\u4ef6\u5355\u72ec\u7f16\u8bd1\u3001\u5e73\u884c\u8f93\u51fa\u505a\u53d1\u5e03\u3002\u5728 father 4 \u4e2d\uff0c\u8f93\u51fa ESModule \u53ca CommonJS \u4ea7\u7269\u65f6\u4f1a\u4f7f\u7528 Bundless \u6784\u5efa\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"Bundle \u6307\u628a\u6e90\u7801\u6309 entry \u6253\u5305\u6210 1 \u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u505a\u53d1\u5e03\uff0c\u4e5f\u5c31\u662f Webpack \u7684\u6253\u5305\u6a21\u5f0f\u3002\u5728 father 4 \u4e2d\uff0c\u8f93\u51fa UMD \u53ca\u4f9d\u8d56\u9884\u6253\u5305\u4ea7\u7269\u65f6\u4f1a\u4f7f\u7528 Bundle \u6784\u5efa\u6a21\u5f0f")),(0,a.kt)("p",null,"\u4f9d\u8d56\u9884\u6253\u5305"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u662f NPM \u5305\u53d1\u5e03\u540e\u5b89\u88c5\u4f53\u79ef\u66f4\u5c0f\u3001\u901f\u5ea6\u66f4\u5feb"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u662f\u4e0d\u62c5\u5fc3\u4e09\u65b9\u4f9d\u8d56\u66f4\u65b0\u5f15\u8d77 Bug"),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u662fNPM \u5305\u53d1\u5e03\u540e\u5b89\u88c5 0 warning")),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u7531\u4e8e\u4f9d\u8d56\u4e2d\u53ef\u80fd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic require/import")," \u7b49\u590d\u6742\u7684\u60c5\u51b5\uff0c\u73b0\u9636\u6bb5\u4e0d\u4e00\u5b9a\u6bcf\u4e2a\u4f9d\u8d56\u90fd\u80fd\u987a\u5229\u6253\u5305\uff0cfather 4 \u4f1a\u5728 RC \u9636\u6bb5\u6301\u7eed\u4f18\u5316\uff0c\u5c06\u8fd9\u9879\u529f\u80fd\u53d8\u5f97\u66f4\u52a0\u597d\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/zaFwGY-CztDUYTbIuaef1A"},"\u65b0\u4e00\u4ee3 npm \u5305\u6784\u5efa\u5de5\u5177 father 4 RC \u53d1\u5e03")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/gssYOb7xgSx2HsAeRGTgxA"},"\u3010\u7b2c2656\u671f\u3011\u4f7f\u7528 React Testing Library \u7684 15 \u4e2a\u5e38\u89c1\u9519\u8bef")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/q05JeUZ0mfjhhCshhhPNtw"},"\u3010\u7b2c2655\u671f\u3011\u643a\u7a0b\u57fa\u4e8e GraphQL \u7684\u524d\u7aef BFF \u670d\u52a1\u5f00\u53d1\u5b9e\u8df5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7114177684434845727"},"\u804a\u804a Vue \u7684\u53cc\u7aef diff \u7b97\u6cd5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/aPMJK-YYgsgUlm2x4uG3NQ"},"\u9762\u8bd5\u5b98\uff1aVue\u7684KeepAlive\u600e\u4e48\u5b9e\u73b0\u7684\uff1f\u6211\uff1a\u8fd9\u6709\u5565\u597d\u95ee\u7684")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Y_vtD5AlIry4anyy19Fhgw"},"\u5982\u4f55\u4f18\u96c5\u7684\u5199 Controller \u5c42\u4ee3\u7801")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/yluex5ufeJQ3eVyW9hD1-g"},"\u8fd9\u4e9b hook \u66f4\u4f18\u96c5\u7684\u7ba1\u7406\u4f60\u7684\u72b6\u6001")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-JtbeS01HEFhNCKYGExodg"},"\u5e72\u8d27 | Trip.com APP QUIC\u5e94\u7528\u548c\u4f18\u5316\u5b9e\u8df5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7113871265848360997"},"\u57fa\u4e8e qiankun \u7684\u5fae\u524d\u7aef\u5b9e\u8df5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/A1LM8bWlcI8_fgUuCISU8w"},"[","\u79d1\u666e\u6587","]"," \u6d45\u8c08 Function Programing \u7f16\u7a0b\u8303\u5f0f")),(0,a.kt)("p",null,"\ud83d\udcd2 Taze - \u4e00\u4e2a\u8ba9\u4f60\u7684\u4f9d\u8d56\u4fdd\u9c9c\u7684\u73b0\u4ee3 cli \u5de5\u5177\uff0c\u652f\u6301\u5b9a\u5236\u3001\u652f\u6301 monorepo"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/antfu/taze"},"https://github.com/antfu/taze"))),(0,a.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u5229\u7528 Why\u3001What\u3001How \u6846\u67b6\u66f4\u597d\u5730\u5199\u4f5c"),(0,a.kt)("p",null,"\u505a\u9879\u76ee\u65f6\uff0c\u8981\u5199\u4e09\u79cd\u7c7b\u578b\u7684\u6587\u6863\uff0c\u5355\u9875\u6587\u6863\u3001\u8bbe\u8ba1\u6587\u6863\u548c Review \u6587\u6863\uff0c\u89c1\u56fe1\uff0c\u5206\u522b\u662f\u5199\u4e8e\u542f\u52a8\u524d\u3001\u5b9e\u65bd\u524d\u548c\u5b8c\u6210\u540e\u3002\u5355\u9875\u6587\u6863\u5199\u7ed9\u8001\u677f\u770b\uff0c\u4ecb\u7ecd\u95ee\u9898\u3001\u9884\u671f\u7ed3\u679c\u3001\u5efa\u8bae\u7684\u89e3\u51b3\u65b9\u6848\u548c\u5176\u4ed6\u9ad8\u5c42\u6b21\u7684\u70b9\uff1b\u8bbe\u8ba1\u6587\u6863\u7a0b\u5e8f\u5458\u53ef\u4ee5\u7406\u89e3\u4e3a RFC\uff0c\u5199\u7ed9\u540c\u884c\u6216\u4e0b\u5c5e\u770b\uff0c\u5305\u542b\u65b9\u6cd5\u8bba\u3001\u7cfb\u7edf\u8bbe\u8ba1\u3001\u5b9e\u9a8c\u7ed3\u679c\u7b49\uff1bReview \u6587\u6863\u7528\u4e8e Review \u6210\u529f\u548c\u5931\u8d25\u7684\u70b9\u3002"),(0,a.kt)("p",null,"\u6587\u6863\u600e\u4e48\u5199\uff1f\u7528\u300cWhy\u3001What\u3001How\u300d\u7684\u6846\u67b6\u3002\u542c\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u5c0f\u5b66\u4e00\u5e74\u7ea7\u8001\u5e08\u4e5f\u8fd9\u4e48\u6559\uff0c\u4f46\u4f5c\u8005\u7684\u5927\u90e8\u5206\u6587\u6863\u90fd\u662f\u7528\u8fd9\u4e2a\u6846\u67b6\u3002Why \u662f\u8ba9\u542c\u4f17\u7406\u89e3\u95ee\u9898\u548c\u80cc\u666f\uff0c\u6ce8\u610f\u7ad9\u5728\u542c\u4f17\u7684\u89d2\u5ea6\uff0c\u6bd4\u5982\u4e0d\u8981\u5bf9\u7740\u8001\u677f\u804a\u6280\u672f\u7684 Why\uff0c\u4e5f\u4e0d\u8981\u5bf9\u7740\u6280\u672f\u540c\u5b66\u804a\u89c4\u5212\u7684 Why\uff1bWhat \u8bb2\u89e3\u51b3\u65b9\u6848\u662f\u4ec0\u4e48\u6837\u5b50\uff0c\u4ee5\u53ca\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1bHow \u8bb2\u5982\u4f55\u5b9e\u73b0 Why \u548c What\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\u300cWhy\u300d\u90e8\u5206\u53ef\u4ee5\u7528 5 Why\uff08",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Five_whys%EF%BC%89%E7%9A%84%E6%96%B9%E6%B3%95%EF%BC%8C%E8%BF%9E%E7%BB%AD%E9%97%AE"},"https://en.wikipedia.org/wiki/Five_whys\uff09\u7684\u65b9\u6cd5\uff0c\u8fde\u7eed\u95ee")," 5 \u4e2a Why\uff0c\u4ee5\u4fbf\u627e\u51fa\u95ee\u9898\u7684\u6839\u672c\u539f\u56e0\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\u8fd8\u8981\u6ce8\u610f\u300cWho\u300d\uff0c\u5373\u4f60\u7684\u542c\u4f17\u662f\u8c01\u3002\u4e3a\u8001\u677f\u548c\u4e3a\u5de5\u7a0b\u5e08\u5199\u7684\u6587\u6863\u5dee\u5f02\u4f1a\u5f88\u5927\uff0c\u56e0\u4e3a\u4e0d\u540c\u4eba\u5173\u6ce8\u7684\u70b9\u4e0d\u540c\uff0c\u524d\u8005\u66f4\u5173\u5fc3\u5ba2\u6237\u75db\u70b9\u3001\u5546\u4e1a\u6210\u679c\u3001\u6295\u8d44\u56de\u62a5\u7387\uff0c\u540e\u8005\u66f4\u5173\u5fc3\u6280\u672f\u8981\u6c42\u3001\u8bbe\u8ba1\u9009\u62e9\u3001API \u89c4\u8303\u3002"),(0,a.kt)("p",null,"\u4e0d\u540c\u6587\u6863\u7c7b\u578b\u5e94\u7528\u4e0a\u8ff0\u6846\u67b6\u7684\u4f8b\u5b50\u89c1\u56fe 2\u3002"),(0,a.kt)("p",null,"\u6587\u7ae0\u5185\u8fd8\u6709\u4e2a\u91d1\u53e5\uff0c\u300cWriting docs is expensive, but cheap.\u300d\u6587\u6863\u5f88\u8d35\uff0c\u9700\u8981\u82b1\u65f6\u95f4\u5199\u3001Review \u548c\u8fed\u4ee3\uff0c\u8fd9\u4e9b\u65f6\u95f4\u672c\u53ef\u4ee5\u82b1\u5728\u5199\u4ee3\u7801\u4e0a\u3002\u6587\u6863\u53c8\u5f88\u4fbf\u5b9c\uff0c\u901a\u8fc7\u6587\u6863\u53ef\u4ee5\u907f\u514d\u5efa\u7acb\u4e0d\u9760\u8c31\u7684\u5154\u5b50\u6d1e\u9879\u76ee\uff0c\u4e0d\u9760\u8c31\u7684\u9879\u76ee\u5c31\u7b97\u505a\u51fa\u6765\u4e5f\u6ca1\u4eba\u7528\uff0c\u8fd9\u4e2a\u6d6a\u8d39\u662f\u5de8\u5927\u7684\u3002\u6240\u4ee5\uff0c\u4e0d\u8981\u505a\u300c\u95ee\u9898\u6a21\u7cca\u3001\u89e3\u51b3\u65b9\u6848\u6709\u4e89\u8bae\u300d\u7684\u9879\u76ee\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://eugeneyan.com/writing/writing-docs-why-what-how/"},"https://eugeneyan.com/writing/writing-docs-why-what-how/"))),(0,a.kt)("p",null,"\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7113803250037424158"},"\u770b\u61c2 Lighthouse \u4e2d Performance \u6838\u5fc3\u6307\u6807")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7113712658850775048"},"\u524d\u7aef\u62a2\u996d\u7897\u7cfb\u5217\u4e4bDocker\u5bb9\u5668\u7f16\u6392")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/_RmAH6p2lyzkhqLWw8cIKw"},"\u4e3a\u4ec0\u4e48 2022 \u5e74 ESM \u53c8\u88ab\u53d1\u5e03\u4e86\u4e00\u6b21")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7113732818663899166"},"\u6f2b\u8c08 CSS \u65b9\u6cd5\u8bba")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7113864980344078343"},"HTTP \u65b0\u589e\u7684 103 \u72b6\u6001\u7801\uff0c\u8fd9\u6b21\u7ec8\u4e8e\u6d3e\u4e0a\u7528\u573a\u4e86\uff01")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/v3lQpHBAIxhDmJ80w4CBcA"},"\u4e70\u5565\u9ad8\u5e76\u53d1\u8bfe\u7a0b\uff0c\u767d\u5ad6\u4e0d\u9999\u4e48\uff1f\uff08\u5305\u62ec PDF\uff09")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7113711538359238692"},"\u5c0f\u7a0b\u5e8f\u957f\u5217\u8868\u4f18\u5316\u5b9e\u8df5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7113586663741194247"},"\u524d\u7aef\u98df\u5802\u6280\u672f\u5468\u520a\u7b2c 42 \u671f\uff1aVue 2.7 Beta\u3001TS 4.8 Beta\u3001React \u5f00\u6e90\u5956\u3001ECMAScript 2022")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/4r1lFV1j7I0K0l5Ww3jj0g"},"\u5c01\u88c5\u4e00\u4e2a\u7ba1\u7406 url \u72b6\u6001\u7684 hook")))}c.isMDXComponent=!0}}]);