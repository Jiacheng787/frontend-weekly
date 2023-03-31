"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[442],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,h=c["".concat(l,".").concat(k)]||c[k]||m[k]||p;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<p;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var a=n(64778),r=(n(59496),n(49613));const p={slug:"7\u670817\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u670817\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,i={permalink:"/frontend-weekly/2022/7\u670817\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2022/2022-07-17/index.md",source:"@site/blogs/2022/2022-07-17/index.md",title:"7\u670817\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 Vite 3.0 \u6b63\u5f0f\u7248\u53d1\u5e03",date:"2022-07-17T00:00:00.000Z",formattedDate:"July 17, 2022",tags:[],readingTime:3.645,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/img/IMG_0687.JPG",key:"garfield"}],frontMatter:{slug:"7\u670817\u65e5\u5185\u5bb9\u6c47\u603b",title:"7\u670817\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"7\u670824\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/7\u670824\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"7\u670810\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2022/7\u670810\u65e5\u5185\u5bb9\u6c47\u603b"}},l={authorsImageUrls:[void 0]},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcd2 Vite 3.0 \u6b63\u5f0f\u7248\u53d1\u5e03"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/_GuGJaf8Sew5D8JaLQ3qOA"},"Vite 3.0 \u53d1\u5e03: \u6838\u5fc3\u66f4\u65b0\u76d8\u70b9\u4e0e\u5206\u6790")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7120820138907009060"},"Vite 3.0 \u6b63\u5f0f\u53d1\u5e03\uff0c\u4e0b\u4e00\u4ee3\u524d\u7aef\u6784\u5efa\u5de5\u5177\uff01")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/blog/announcing-vite3.html#dev-improvements"},"https://vitejs.dev/blog/announcing-vite3.html#dev-improvements"))),(0,r.kt)("p",null,"\ud83d\udcd2 nestjs + prisma \u5f00\u53d1\u5168\u6808\u9879\u76ee"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/getting-started"},"https://www.prisma.io/docs/getting-started")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.prisma.io/nestjs"},"https://www.prisma.io/nestjs")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7115789691810480135"},"\u6210\u4e3a\u4f18\u79c0\u7684TS\u4f53\u64cd\u9ad8\u624b \u4e4b TS \u7c7b\u578b\u4f53\u64cd\u524d\u7f6e\u77e5\u8bc6\u50a8\u5907")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/8LxNZ0Hrne_EMZ352jmIXQ"},"\u5982\u4f55\u5728React\u4e2d\u5e94\u7528SOLID\u539f\u5219")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/b-qUPAXa31RqO7oFj3dReg"},"2022 \u5e74 CSS-in-JS \u6280\u672f\u7684\u53c8\u4e00\u5339\u9ed1\u9a6c\uff01")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7119669717882634271"},"\u8fd8\u5728\u7528\u547d\u4ee4\u884c\u770b\u65e5\u5fd7\uff1f\u5feb\u7528Kibana\u5427\uff0c\u53ef\u89c6\u5316\u65e5\u5fd7\u5206\u6790YYDS\uff01")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7119360791966384142"},"\u3010\u9762\u8bd5\u9020\u706b\u7bad\uff0c\u5165\u804c\u62e7\u87ba\u4e1d\u3011\u4e07\u5b57\u8be6\u89e3\u5982\u4f55\u4ece0\u5f00\u59cb\u624b\u5199\u4e00\u4e2aPromise")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/book/7115598540721618944"},"Webpack5 \u6838\u5fc3\u539f\u7406\u4e0e\u5e94\u7528\u5b9e\u8df5")),(0,r.kt)("p",null,"\ud83d\udcd2 Webpack \u7279\u6709\u7684\u4f18\u5316\u7b56\u7565"),(0,r.kt)("p",null,"\u7531\u4e8e Webpack \u51fa\u73b0\u7684\u65f6\u5019\uff0c\u8fd8\u6ca1\u6709 ESM \u89c4\u8303\uff0c\u6240\u4ee5 Webpack \u5e95\u5c42\u6839\u636e CJS \u89c4\u8303\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"__webpack_require__")," \u52a0\u8f7d\u6a21\u5757\uff0c\u8fd9\u5c31\u5bfc\u81f4 Webpack \u6253\u5305\u4f1a\u51fa\u73b0\u5927\u91cf\u6a21\u677f\u4ee3\u7801\uff0c\u589e\u52a0\u6253\u5305\u540e\u4f53\u79ef\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0cRollup \u57fa\u4e8e ESM \u89c4\u8303\u6253\u5305\uff0c\u4ea7\u7269\u4ee3\u7801\u5c31\u5f88\u5e72\u51c0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Scope Hoisting")),(0,r.kt)("p",null,"\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4f5c\u7528\u57df\u63d0\u5347"),"\uff0c\u4e2a\u4eba\u89c9\u5f97\u8fd9\u4e2a\u5e94\u8be5\u662f\u53c2\u8003\u4e86 Rollup\uff0c\u4f46\u662f Webpack \u7684\u6a21\u5757\u5408\u5e76\u8fd8\u662f\u975e\u5e38\u6709\u9650\uff0c\u5fc5\u987b\u662f\u53ea\u5f15\u7528\u4e86\u4e00\u6b21\u7684\u6a21\u5757\u624d\u80fd\u5408\u5e76\uff0c\u5426\u5219\u4f1a\u9020\u6210\u6a21\u5757\u5197\u4f59\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"p"},"optimization.concatenateModules")," \u5728\u751f\u4ea7\u73af\u5883\u4e0b\u4f1a\u542f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  optimization: {\n    concatenateModules: true,\n  },\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/plugins/module-concatenation-plugin/"},"https://webpack.docschina.org/plugins/module-concatenation-plugin/"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u786e\u5b9a\u6027\u6a21\u5757 ID")),(0,r.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u4e0b\uff0cWebpack \u7684\u6a21\u5757 ID \u9ed8\u8ba4\u6309\u6a21\u5757\u89e3\u6790\u987a\u5e8f\u81ea\u589e\uff0c\u5373\u4f7f\u6e90\u7801\u6ca1\u6709\u4fee\u6539\uff0c\u4f46\u662f\u6709\u65f6\u6a21\u5757 ID \u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u5bfc\u81f4\u54c8\u5e0c\u6539\u53d8\uff0c\u6587\u4ef6\u7f13\u5b58\u5931\u6548\u3002\u901a\u8fc7\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"moduleIds: 'deterministic'")," \u6709\u5229\u4e8e\u6301\u4e45\u5316\u7f13\u5b58\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  optimization: {\n    moduleIds: 'deterministic',\n  },\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/optimization/#optimizationmoduleids"},"https://webpack.docschina.org/configuration/optimization/#optimizationmoduleids"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Runtime Chunk")),(0,r.kt)("p",null,"\u8fd0\u884c\u65f6\u4ee3\u7801\u5355\u72ec\u5206\u5305\uff0c\u4e00\u822c SPA \u5e94\u7528\u95ee\u9898\u4e0d\u5927\uff0c\u591a\u9875\u5e94\u7528\u6253\u5305\uff0c\u8fd0\u884c\u65f6\u4ee3\u7801\u5355\u72ec\u5206\u5305\u53ef\u4ee5\u914d\u7f6e\u6301\u4e45\u5316\u7f13\u5b58\u3002\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeChunk: 'multiple'")," \u4f1a\u4e3a\u6bcf\u4e00\u4e2a Initial Chunk \u6dfb\u52a0\u4e00\u4e2a Runtime Chunk\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"runtimeChunk: 'single'")," \u5219\u4f1a\u521b\u5efa\u4e00\u4e2a\u6240\u6709 Initial Chunk \u5171\u4eab\u7684 Runtime Chunk\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  optimization: {\n    runtimeChunk: {\n      name: 'runtime',\n    },\n  },\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk"},"https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk"))),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/X1aL0qC3cslkwhThS6XidA"},"MySQL Redo Log \u6df1\u5165\u63a2\u7d22")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/UD0-7rWtOAxMuDpOR77gug"},"\u8be6\u89e3 Vite \u4f9d\u8d56\u9884\u6784\u5efa\u6d41\u7a0b")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/5dXLp7NjlpVsexOGTjbJ8A"},"VueUse scripts\uff0c\u4ed6\u4eec\u90fd\u6a21\u4eff\u8fc7\u7684\u811a\u672c")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/bRlG5tc244ZVmPdb4mjbGQ"},"\u3010\u7b2c2669\u671f\u3011\u524d\u7aef\u5f00\u53d1\u4e2d\u7684\u6d41\u7a0b\u81ea\u52a8\u5316\u4e0e\u63d0\u6548\u5b9e\u8df5")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://www.useanvil.com/blog/engineering/isolating-memory-leak-in-node/"},"\u9694\u79bb\u5e76\u4fee\u590d Node \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5185\u5b58\u6cc4\u6f0f")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7119136400465330184"},"\u786c\u4ef6\u52a0\u901f\u4e2d\u7684\u201c\u5c42\u201d\u548c\u5c42\u53e0\u4e0a\u4e0b\u6587\u4e2d\u7684\u201c\u5c42\u201d\uff0c\u662f\u4e00\u4e2a\u4e1c\u897f\u5417")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7119123646471208968"},"\u300aGo\u5b66\u4e60\u8def\u7ebf\u56fe\u300b\u5e26\u4f60\u5c11\u8d70\u5f2f\u8def\uff0cLet's Go \uff01")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/zVSDbYFrRASnJCr2dJycDQ"},"\u524d\u7aef\u539f\u578b\u94fe\u6c61\u67d3\u6f0f\u6d1e\u7adf\u53ef\u4ee5\u62ff\u4e0b\u670d\u52a1\u5668shell")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7116448560568074270"},"\u6211\u5728 Shopee \u5de5\u4f5c\u8fd9\u4e24\u5e74")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=JaM2rExmmqs"},"\u4e94\u4e2a React-Query \u548c SWR \u7684\u5c0f\u6280\u5de7")),(0,r.kt)("p",null,"\u2b50\ufe0f \u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7118937685653192735"},"\u300cReact \u8fdb\u9636\u300d React \u5168\u90e8 Hooks \u4f7f\u7528\u5927\u5168 \uff08\u5305\u542b React v18 \u7248\u672c \uff09")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://frontendmastery.com/posts/the-new-wave-of-react-state-management/"},"React \u72b6\u6001\u7ba1\u7406\u7684\u65b0\u6d6a\u6f6e")),(0,r.kt)("p",null,"\u2b50\ufe0f \u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shfshanyue/fp-jargon-zh"},"\u51fd\u6570\u5f0f\u7f16\u7a0b\u672f\u8bed")))}m.isMDXComponent=!0}}]);