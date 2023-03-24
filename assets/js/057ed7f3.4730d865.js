"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[1318],{49613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,h=u["".concat(i,".").concat(k)]||u[k]||m[k]||p;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<p;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},17369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=a(64778),r=(a(59496),a(49613));const p={slug:"3\u670826\u65e5\u5185\u5bb9\u6c47\u603b",title:"3\u670826\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,l={permalink:"/frontend-weekly/2023/3\u670826\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2023/2023-03-26/index.md",source:"@site/blogs/2023/2023-03-26/index.md",title:"3\u670826\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u57fa\u4e8e openai \u5f00\u53d1 CLI \u5de5\u5177",date:"2023-03-26T00:00:00.000Z",formattedDate:"March 26, 2023",tags:[],readingTime:10.23,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/img/IMG_0687.JPG",key:"garfield"}],frontMatter:{slug:"3\u670826\u65e5\u5185\u5bb9\u6c47\u603b",title:"3\u670826\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/2023/welcome"},nextItem:{title:"3\u670819\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2023/3\u670819\u65e5\u5185\u5bb9\u6c47\u603b"}},i={authorsImageUrls:[void 0]},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcd2 \u57fa\u4e8e openai \u5f00\u53d1 CLI \u5de5\u5177"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/completion/introduction"},"https://platform.openai.com/docs/guides/completion/introduction")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/authentication"},"https://platform.openai.com/docs/api-reference/authentication")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sashabaranov/go-openai"},"https://github.com/sashabaranov/go-openai")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/k0zwlJNFssMRh1NHA6rGcA"},"\u6e90\u7801\u9605\u8bfb - \u5207\u7247\u6269\u5bb9\u8fc7\u7a0b")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/MI9x4YOAhbtS-xQtOS-K_A"},"\u804a\u804aGo\u8bed\u8a00\u7684\u5168\u5c40\u53d8\u91cf")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/soaxFUjo6hEe2KSnle_LkQ"},"\u300c\u9ad8\u9891\u5fc5\u8003\u300dGo\u5e76\u53d1\u7f16\u7a0b\u9762\u8bd5\u9898\u548c\u7b54\u6848")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/SFMSlRafJZPljJ6cNnKVFg"},"ECMAScript 2023 \u6709\u54ea\u4e9b\u66f4\u65b0")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7213362704781852730"},"\u300c\u4ece0\u5b9e\u73b0React18\u7cfb\u5217\u300dReconciler\u67b6\u6784\u7684\u53cc\u7f13\u5b58\u6811\u5b9e\u73b0\u539f\u7406")),(0,r.kt)("p",null,"\ud83d\udcd2 monorepo \u76f8\u5173\u6587\u7ae0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_21567385/article/details/122361591"},"monorepo\u5de5\u4f5c\u6d41\u57fa\u7840\u4e4bchangesets\u6253\u5f00\u4e0e\u8fdb\u9636")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://sakina.blog.csdn.net/?type=blog"},"https://sakina.blog.csdn.net/?type=blog")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/guides/topic-detail/changesets/release-pre.html"},"https://modernjs.dev/guides/topic-detail/changesets/release-pre.html")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://remix.run/blog/lazy-loading-routes"},"Lazy Loading Routes in React Router 6.4+")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Vy2pEKrG-N27TYVRlTvwaw"},"\u5982\u4f55\u89c4\u8303\u5730\u53d1\u5e03\u4e00\u4e2a\u73b0\u4ee3\u5316\u7684 NPM \u5305")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ldqBkRYaaXqthoC9sbOVaw"},"\u300cGo\u6846\u67b6\u300dbind\u51fd\u6570\uff1agin\u6846\u67b6\u4e2d\u662f\u5982\u4f55\u5c06\u8bf7\u6c42\u6570\u636e\u6620\u5c04\u5230\u7ed3\u6784\u4f53\u7684")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/elsHIqDQ0yABUZXNVpjwMg"},"\u57fa\u4e8e\u6027\u80fd\u5206\u6790\u7684\u4f18\u5316\u9884\u89c8")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/e2MnalUKgve6BRxBP2IOrA"},"\u505a\u91cf\u5316\u4ea4\u6613\u53d1\u6101\u5199\u4ee3\u7801\uff1f\u4e00\u62db\u6559\u4f60\u767d\u5ad6GPT-4\u667a\u80fd\u7f16\u7a0b\u795e\u5668")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/431YMKwRjaStanqA6juePA"},"Go \u8bed\u8a00\u5e76\u53d1\u6a21\u5f0f\u4ee3\u7801\u6a21\u677f")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7212603037667786813"},"\u300c\u4ece0\u5b9e\u73b0React18\u7cfb\u5217\u300dFiber\u67b6\u6784\u7684\u5b9e\u73b0\u539f\u7406")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7212235580104917053"},"\u300c\u4ece0\u5b9e\u73b0React18\u7cfb\u5217\u300d\u81ea\u5df1\u52a8\u624b\u5b9e\u73b0\u4e00\u4e2aJSX\u8f6c\u6362")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/xiUPLOTkDCX2i2jTOSNgCQ"},"Go \u9519\u8bef\u5904\u7406\uff1a100+ \u63d0\u6848\u5168\u90e8\u88ab\u62d2\u7edd\uff0c\u4e3a\u4f55\u73b0\u9636\u6bb5\u4ecd\u7528 if err != nil")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/SYQTlvbLvbsSwFi2Q_kI1Q"},"\u5982\u4f55\u505a\u597d\u8868\u7ed3\u6784\u8bbe\u8ba1")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/mktyKyzV1wsyBrX-HW6Ggw"},"React \u4e2d\u6587\u5468\u520a #132 - Vite \u7b80\u4ecb\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u4f7f\u7528\u5b83\u6765\u66ff\u4ee3 Create React App")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7212529038875426875"},"TypeScript 5.0 \u5df2\u53d1\u5e03\uff01\u770b\u770b\u589e\u52a0\u4e86\u4ec0\u4e48\u65b0\u529f\u80fd")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7212500870763053114"},"Chrome 101\uff1afetchpriority")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7212466685451042874"},"Go Slice \u6269\u5bb9\u7684\u8fd9\u4e9b\u5751\u4f60\u8e29\u8fc7\u5417")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7200039970575941693"},"Three.js \u8fdb\u9636\u4e4b\u65c5\uff1a\u7269\u7406\u6548\u679c-\u78b0\u649e\u548c\u58f0\u97f3 \ud83d\udca5")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7191415427350659129"},"Three.js \u8fdb\u9636\u4e4b\u65c5\uff1a\u65b0\u6625\u7279\u5178-Rabbit craft go \ud83d\udc07")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/qTYlHqozkWHkhF9OKfaAMQ"},"Go \u8bed\u8a00\u81ea\u5e26\u8bbe\u8ba1\u6a21\u5f0f")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-xfpP08BQDbJc6ukhGRtnA"},"\u300c\u6bcf\u5468\u8bd1Go\u300d\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u7f16\u8bd1 Go \u5e94\u7528")),(0,r.kt)("p",null,"\ud83d\udcd2 \u4f60\u53ef\u80fd\u4e0d\u77e5\u9053\u7684 async\u3001await \u7ec6\u8282"),(0,r.kt)("p",null,"async\u51fd\u6570\u5728\u629b\u51fa\u8fd4\u56de\u503c\u65f6\uff0c\u4f1a\u6839\u636e\u8fd4\u56de\u503c\u7c7b\u578b\u5f00\u542f\u4e0d\u540c\u6570\u76ee\u7684\u5fae\u4efb\u52a1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"return \u7ed3\u679c\u503c\uff1a\u975e ",(0,r.kt)("inlineCode",{parentName:"li"},"thenable"),"\u3001\u975e ",(0,r.kt)("inlineCode",{parentName:"li"},"promise"),"\uff08\u4e0d\u7b49\u5f85\uff09"),(0,r.kt)("li",{parentName:"ul"},"return \u7ed3\u679c\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"thenable"),"\uff08\u7b49\u5f85 1\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"then")," \u7684\u65f6\u95f4\uff09"),(0,r.kt)("li",{parentName:"ul"},"return \u7ed3\u679c\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"promise"),"\uff08\u7b49\u5f85 2\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"then")," \u7684\u65f6\u95f4\uff09")),(0,r.kt)("p",null,"await\u53f3\u503c\u7c7b\u578b\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63a5\u975e ",(0,r.kt)("inlineCode",{parentName:"li"},"thenable")," \u7c7b\u578b\uff0c\u4f1a\u7acb\u5373\u5411\u5fae\u4efb\u52a1\u961f\u5217\u6dfb\u52a0\u4e00\u4e2a\u5fae\u4efb\u52a1 ",(0,r.kt)("inlineCode",{parentName:"li"},"then"),"\uff0c\u4f46\u4e0d\u9700\u7b49\u5f85"),(0,r.kt)("li",{parentName:"ul"},"\u63a5 ",(0,r.kt)("inlineCode",{parentName:"li"},"thenable")," \u7c7b\u578b\uff0c\u9700\u8981\u7b49\u5f85\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"then")," \u7684\u65f6\u95f4\u4e4b\u540e\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u63a5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u7c7b\u578b(\u6709\u786e\u5b9a\u7684\u8fd4\u56de\u503c)\uff0c\u4f1a\u7acb\u5373\u5411\u5fae\u4efb\u52a1\u961f\u5217\u6dfb\u52a0\u4e00\u4e2a\u5fae\u4efb\u52a1 ",(0,r.kt)("inlineCode",{parentName:"li"},"then"),"\uff0c\u4f46\u4e0d\u9700\u7b49\u5f85")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/aLQVpglTRA0bJGyCpXOD8Q"},"\u4f60\u53ef\u80fd\u4e0d\u77e5\u9053\u7684 async\u3001await \u7ec6\u8282")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/71wpR1kz5PgzVNBgpN855g"},"Go\u8bed\u8a00\u4e2d\u5e38\u89c1100\u95ee\u9898-#30 Ignoring the fact that elements are copied")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ixTP1qythuJyhf3b9kIRaA"},"Go \u8bed\u8a00\u5b9e\u73b0\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f - \u5355\u4f8b\u6a21\u5f0f")),(0,r.kt)("p",null,"\u2b50\ufe0f ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ypK-2wGHGj9_n4o8y-clXg"},"\u804a\u804agodoc\u3001go doc\u4e0epkgsite")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/F7Z-JQimZ3p6BfLLCE0pHw"},"\u628aReact\u65b0\u6587\u6863\u6295\u5582\u7ed9 GPT-4 \u540e")),(0,r.kt)("p",null,"\ud83d\udcd2 MDH \u524d\u7aef\u5468\u520a\u7b2c 92 \u671f\uff1areact.dev\u3001npm \u5b89\u5168\u3001Execa 7\u3001Reactivity\u3001React Query"),(0,r.kt)("p",null,"\u300a\u4ecb\u7ecd react.dev\u300b\u3002React \u5b98\u65b9\u6587\u6863\u7f51\u7ad9\u5df2\u7ecf\u66f4\u65b0\uff0c\u73b0\u5728\u7684\u7f51\u5740\u662f react.dev\u3002\u65b0\u7f51\u7ad9\u6559\u6388\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6\u548c Hooks \u7684\u73b0\u4ee3 React\uff0c\u5e76\u5305\u62ec\u4e86\u56fe\u8868\u3001\u63d2\u56fe\u3001\u6311\u6218\u548c 600 \u591a\u4e2a\u4ea4\u4e92\u5f0f\u793a\u4f8b\u3002\u65e7\u7248 React \u6587\u6863\u7f51\u7ad9\u5df2\u79fb\u81f3 legacy.reactjs.org\u3002\u65b0\u7f51\u7ad9\u5206\u4e3a \u201c\u5b66\u4e60 React\u201d \u548c \u201cAPI \u53c2\u8003\u201d \u4e24\u4e2a\u4e3b\u8981\u90e8\u5206\uff0c\u524d\u8005\u662f\u4e00\u4e2a\u81ea\u5b9a\u8fdb\u5ea6\u7684\u8bfe\u7a0b\uff0c\u540e\u8005\u63d0\u4f9b\u6bcf\u4e2a React API \u7684\u8be6\u7ec6\u4fe1\u606f\u548c\u7528\u6cd5\u793a\u4f8b\u3002\u65b0\u7f51\u7ad9\u8fd8\u6dfb\u52a0\u4e86\u5f88\u591a\u6c99\u76d2\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u73a9\u8f6c React API\u3001\u63a2\u7d22\u60f3\u6cd5\u5e76\u68c0\u67e5\u7406\u89e3\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://react.dev/blog/2023/03/16/introducing-react-dev"},"https://react.dev/blog/2023/03/16/introducing-react-dev"))),(0,r.kt)("p",null,"\u300a\u4ecb\u7ecd \u201c\u5b89\u5168 npm\u201d\uff0c\u4e00\u4e2a Socket npm \u5305\u88c5\u5668 - Socket\u300b\u3002Socket \u63a8\u51fa\u4e86\u4e00\u6b3e\u540d\u4e3a \u201csafe npm\u201d \u7684 CLI \u5de5\u5177\uff0c\u7528\u4e8e\u4fdd\u62a4\u5f00\u53d1\u4eba\u5458\u5728\u4f7f\u7528 npm install \u65f6\u514d\u53d7\u6076\u610f\u8f6f\u4ef6\u3001\u62fc\u5199\u9519\u8bef\u3001\u5b89\u88c5\u811a\u672c\u3001\u6297\u8bae\u8f6f\u4ef6\u548c\u9065\u6d4b\u7b49\u65b9\u9762\u7684\u5f71\u54cd\u3002\u8be5\u5de5\u5177\u900f\u660e\u5730\u5305\u88c5\u4e86 npm \u547d\u4ee4\uff0c\u5e76\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4fdd\u62a4\u5f00\u53d1\u4eba\u5458\u514d\u53d7\u6076\u610f\u8f6f\u4ef6\u3001\u62fc\u5199\u9519\u8bef\u3001\u5b89\u88c5\u811a\u672c\u3001\u6297\u8bae\u8f6f\u4ef6\u3001\u9065\u6d4b\u7b49 11 \u79cd\u95ee\u9898\u7684\u5f71\u54cd\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://socket.dev/blog/introducing-safe-npm"},"https://socket.dev/blog/introducing-safe-npm"))),(0,r.kt)("p",null,"\u300aGitHub - gajus/turbowatch\uff1aNode.js \u7684\u6781\u901f\u6587\u4ef6\u53d8\u66f4\u68c0\u6d4b\u5668\u548c\u4efb\u52a1\u7f16\u6392\u5de5\u5177\u3002\u300b\u3002Turbowatch \u662f\u4e00\u4e2a\u7528\u4e8e Node.js \u7684\u6781\u5feb\u6587\u4ef6\u66f4\u6539\u68c0\u6d4b\u5668\u548c\u4efb\u52a1\u7f16\u6392\u5668\u3002\u5b83\u53ef\u7528\u4e8e\u81ea\u52a8\u5316\u54cd\u5e94\u6587\u4ef6\u66f4\u6539\u7684\u4efb\u4f55\u64cd\u4f5c\uff0c\u4f8b\u5982\u8fd0\u884c\uff08\u5e76\u81ea\u52a8\u91cd\u65b0\u542f\u52a8\uff09\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fdb\u7a0b\uff08\u5982\u60a8\u7684 Node.js \u5e94\u7528\u7a0b\u5e8f\uff09\u6216\u6784\u5efa\u8d44\u4ea7\uff08\u5982 Docker \u955c\u50cf\uff09\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/gajus/turbowatch/"},"https://github.com/gajus/turbowatch/"))),(0,r.kt)("p",null,"\u300aJulesBlom.com - React API \u5730\u56fe\u300b\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u4e00\u79cd\u5b66\u4e60 React API \u7684\u65b9\u6cd5\uff0c\u5373\u901a\u8fc7\u5c06\u5176\u7ec4\u7ec7\u6210\u4e00\u4e2a\u7a7a\u95f4\u5730\u56fe\u6765\u5e2e\u52a9\u7406\u89e3\u3002\u4f5c\u8005\u5c06 React \u7684\u4e0d\u540c\u90e8\u5206\u8054\u7cfb\u5728\u4e00\u8d77\uff0c\u5f62\u6210\u4e86\u4e00\u4e2a\u53ef\u4f9b\u63a2\u7d22\u7684\u7ed3\u6784\uff0c\u5e76\u5728 \u201c\u63a8\u8350\u9605\u8bfb\u201d \u90e8\u5206\u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e9b\u7ecf\u8fc7\u7b5b\u9009\u7684\u4f18\u8d28\u535a\u5ba2\u6587\u7ae0\u94fe\u63a5\uff0c\u4ee5\u4fbf\u66f4\u597d\u5730\u7406\u89e3 React API\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://julesblom.com/writing/map-of-react-api"},"https://julesblom.com/writing/map-of-react-api"))),(0,r.kt)("p",null,"\u300a\u53d1\u5e03 v6.9.0\u30fbremix-run/react-router\u300b\u3002React Router \u53d1\u5e03\u4e86 6.9.0 \u7248\u672c\uff0c\u652f\u6301\u4f7f\u7528 React \u7ec4\u4ef6\u5b9a\u4e49\u8def\u7531\u5143\u7d20\u548c\u9519\u8bef\u5143\u7d20\u5b57\u6bb5\u3002\u6b64\u5916\uff0c\u8fd8\u5f15\u5165\u4e86 Lazy Route Modules\uff0c\u4ee5\u4fdd\u6301\u5e94\u7528\u7a0b\u5e8f\u5305\u7684\u5c0f\u5de7\u548c\u652f\u6301\u4ee3\u7801\u5206\u5272\u8def\u7531\u3002\u6b64\u529f\u80fd\u901a\u8fc7 lazy () \u8def\u7531\u5c5e\u6027\u5b9e\u73b0\uff0c\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u89e3\u6790\u8def\u7531\u5b9a\u4e49\u7684\u975e\u5339\u914d\u90e8\u5206\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/remix-run/react-router/releases/tag/react-router%406.9.0"},"https://github.com/remix-run/react-router/releases/tag/react-router%406.9.0"))),(0,r.kt)("p",null,"\u300aExeca 7 \u7684\u65e0 Shell \u811a\u672c | ITNEXT\u300b\u3002Execa 7 \u63d0\u4f9b\u4e86\u7c7b\u4f3c\u4e8e zx \u7684\u6a21\u5f0f\uff0c\u4f46\u91c7\u7528\u66f4\u7b80\u5355\u7684\u7eaf JavaScript \u65b9\u6cd5\u3002\u4f7f\u7528 Execa\uff0c\u4e0d\u9700\u8981\u8bb0\u5fc6\u4efb\u4f55 shell \u8bed\u6cd5\uff0c\u51e0\u4e4e\u6240\u6709\u7279\u5b9a\u4e8e shell \u7684\u529f\u80fd\u90fd\u53ef\u4ee5\u5728 JavaScript \u4e2d\u8868\u8fbe\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://itnext.io/shell-free-scripts-with-execa-7-885fb3b42f83"},"https://itnext.io/shell-free-scripts-with-execa-7-885fb3b42f83"))),(0,r.kt)("p",null,"\u300a2023 \u5e74\u6bcf\u4e2a\u524d\u7aef\u5f00\u53d1\u4eba\u5458\u90fd\u5e94\u8be5\u77e5\u9053\u7684 6 \u4e2a CSS \u7247\u6bb5\u300b\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u516d\u4e2a\u6709\u7528\u7684 CSS \u6280\u5de7\uff0c\u5305\u62ec\u4f7f\u7528\u5bb9\u5668\u67e5\u8be2\u3001\u521b\u5efa\u6eda\u52a8\u5438\u9644\u6548\u679c\u3001\u907f\u514d\u4f7f\u7528 grid \u7684 position: absolute\u3001\u5feb\u901f\u5236\u4f5c\u5706\u5f62\u3001\u4f7f\u7528\u5c42\u53e0\u6837\u5f0f\u8868\uff08cascade layers\uff09\u63a7\u5236\u53d8\u4f53\u548c\u4f7f\u7528\u903b\u8f91\u5c5e\u6027\uff08logical properties\uff09\u6765\u51cf\u5c11\u4ee3\u7801\u91cf\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://web.dev/6-css-snippets-every-front-end-developer-should-know-in-2023/"},"https://web.dev/6-css-snippets-every-front-end-developer-should-know-in-2023/"))),(0,r.kt)("p",null,"\u300aNuxt 3.3\u300b\u3002Nuxt.js \u53d1\u5e03\u4e86\u65b0\u7248\u672c\uff0c\u589e\u52a0\u4e86\u672c\u5730\u6a21\u5757\u5f00\u53d1\u3001\u81ea\u52a8\u91cd\u542f\u670d\u52a1\u5668\u548c\u6027\u80fd\u4f18\u5316\u7b49\u529f\u80fd\u3002\u8be5\u7248\u672c\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u65b0\u7684\u7ec4\u4ef6\u548c\u53ef\u7ec4\u5408\u51fd\u6570\uff0c\u5305\u62ec\u9519\u8bef\u5904\u7406\u7ec4\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"<NuxtClientFallback>")," \u548c\u5904\u7406\u4e0d\u53d7\u4fe1\u4efb\u7528\u6237\u8f93\u5165\u7684 useHeadSafe \u53ef\u7ec4\u5408\u51fd\u6570\u3002\u6b64\u5916\uff0c\u8be5\u7248\u672c\u8fd8\u6539\u8fdb\u4e86\u7c7b\u578b\u5b9a\u4e49\u548c Nitro \u5f15\u64ce\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u914d\u7f6e\u6a21\u5f0f\uff0c\u5e76\u4e14\u6709\u66f4\u597d\u7684 Chrome DevTools \u652f\u6301\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://nuxt.com/blog/v3-3"},"https://nuxt.com/blog/v3-3"))),(0,r.kt)("p",null,"\u300a\u6df1\u5165\u63a2\u7a76 TanStack \u67e5\u8be2\u4e2d\u7684\u7a81\u53d8\u300b\u3002TanStack Query \u6709\u4e09\u4e2a\u4e3b\u8981\u6982\u5ff5\uff1a\u67e5\u8be2\u3001\u53d8\u5f02\u548c\u67e5\u8be2\u5931\u6548\u3002\u672c\u6587\u5c06\u91cd\u70b9\u4ecb\u7ecd\u53d8\u5f02\uff0c\u5305\u62ec\u53d8\u5f02\u7684\u526f\u4f5c\u7528\u3001\u5931\u6548\u548c\u5e76\u884c\u5b9e\u73b0\u3002\u901a\u8fc7\u4f7f\u7528 useMutation Hook\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u5904\u7406\u6240\u6709\u66f4\u65b0\u3001\u521b\u5efa\u548c\u5220\u9664\u8bf7\u6c42\u3002\u540c\u65f6\uff0c\u4e50\u89c2\u66f4\u65b0\u662f\u4f7f\u7528 TanStack Query \u53d8\u5f02\u7684\u5173\u952e\u4f18\u52bf\u4e4b\u4e00\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/deep-dive-mutations-tanstack-query/"},"https://blog.logrocket.com/deep-dive-mutations-tanstack-query/"))),(0,r.kt)("p",null,"\u300aReact Hooks \u662f\u4e00\u4e2a\u9519\u8bef\u5417\uff1f| jakelazaroff.com\u300b\u3002\u672c\u6587\u63a2\u8ba8\u4e86 React \u7f16\u7a0b\u6a21\u578b\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u6709\u4e9b\u4eba\u66f4\u559c\u6b22\u4f7f\u7528 signal-based components\u3002\u4f5c\u8005\u8ba4\u4e3a\uff0c\u4eba\u4eec\u5bf9\u7ec4\u4ef6\u7684\u5fc3\u7406\u6a21\u578b\u4e0e React \u4e2d\u7684\u51fd\u6570\u7ec4\u4ef6\u548c hooks \u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0d\u5339\u914d\u3002\u4e0e\u7c7b\u7ec4\u4ef6\u76f8\u6bd4\uff0csignal-based components \u66f4\u52a0\u76f8\u4f3c\u3002\u6587\u7ae0\u8fd8\u4ecb\u7ecd\u4e86 Solid \u7b49\u4fe1\u53f7\u9a71\u52a8\u6846\u67b6\uff0c\u5e76\u8ba8\u8bba\u4e86\u5b83\u4eec\u4e0e React hooks \u4e4b\u95f4\u7684\u533a\u522b\u548c\u6743\u8861\u3002\u6700\u540e\uff0c\u4f5c\u8005\u603b\u7ed3\u8bf4\uff0c\u73b0\u5728\u7684\u6846\u67b6\u4f3c\u4e4e\u6b63\u5728\u5c1d\u8bd5\u5728 hooks \u7684\u53ef\u7ec4\u5408\u6027\u548c\u7c7b\u7684\u7a33\u5b9a\u6027\u4e4b\u95f4\u53d6\u5f97\u5e73\u8861\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://jakelazaroff.com/words/were-react-hooks-a-mistake/"},"https://jakelazaroff.com/words/were-react-hooks-a-mistake/"))),(0,r.kt)("p",null,"\u300a\u57fa\u4e8e React Query \u7684\u8bf7\u6c42\u9632\u6296\u300b\u3002React Query \u4e0d\u652f\u6301 deboucing\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u5176\u5305\u88c5\u5728\u4e00\u4e2a\u7b80\u5355\u7684\u62bd\u8c61\u4e2d\u3002\u4f5c\u8005\u63d0\u51fa\u4e86\u4e00\u79cd\u65b9\u6cd5\u6765\u6269\u5c55 React Query \u4ee5\u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u4ee3\u7801\u884c\u6570\u5c11\u4e8e 40 \u884c\u3002\u901a\u8fc7\u52a8\u753b\u6f14\u793a\uff0c\u5c55\u793a\u4e86\u9632\u6296\u7684\u5b9e\u9645\u6548\u679c\uff0c\u4f7f\u7528\u9632\u6296\u540e\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ea\u89e6\u53d1\u4e86 1 \u4e2a\u8bf7\u6c42\u5e76\u4ea4\u6362\u4e86 294 B \u7684\u6570\u636e\uff0c\u8bf7\u6c42\u51cf\u5c11\u4e86 91\uff05\uff0c\u4f20\u8f93\u7684\u6570\u636e\u51cf\u5c11\u4e86 99\uff05\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://rafaelcamargo.com/blog/deboucing-requests-with-react-query/"},"https://rafaelcamargo.com/blog/deboucing-requests-with-react-query/"))),(0,r.kt)("p",null,"\u300a\u96f6\u914d\u7f6e\u7c7b\u578b\u5b89\u5168\u300b\u3002SvelteKit \u73b0\u5728\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u7c7b\u578b\u6ce8\u91ca\uff0c\u65e0\u9700\u624b\u52a8\u6dfb\u52a0\u3002\u901a\u8fc7\u5728 SvelteKit \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6dfb\u52a0\u7c7b\u578b\u6ce8\u91ca\uff0c\u53ef\u4ee5\u5b9e\u73b0\u7f51\u7edc\u5168\u9762\u7684\u7c7b\u578b\u5b89\u5168\u6027\u3002\u73b0\u5728\uff0cSvelteKit \u6846\u67b6\u53ef\u4ee5\u4e3a\u6211\u4eec\u7c7b\u578b\u5316 load \u548c data\uff0c\u8fd9\u662f\u8ba1\u7b97\u673a\u6240\u64c5\u957f\u7684 \u2014\u2014 \u8ba9\u6211\u4eec\u4e13\u6ce8\u4e8e\u521b\u9020\u6027\u7684\u5de5\u4f5c\u3002\u4f7f\u7528 VSCode \u7684\u7528\u6237\u53ea\u9700\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684 Svelte \u6269\u5c55\u5373\u53ef\uff0c\u5176\u4ed6\u7f16\u8f91\u5668\u7684\u6269\u5c55\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u53ea\u8981\u5b83\u4eec\u652f\u6301 Language Server Protocol \u548c TypeScript \u63d2\u4ef6\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev/blog/zero-config-type-safety"},"https://svelte.dev/blog/zero-config-type-safety"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mdhweekly.com/weekly/issue-0092"},"MDH \u524d\u7aef\u5468\u520a\u7b2c 92 \u671f\uff1areact.dev\u3001npm \u5b89\u5168\u3001Execa 7\u3001Reactivity\u3001React Query")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/6pXEtzFRPg1XsnbNxIBuxA"},"Go\u8bed\u8a00\u7231\u597d\u8005\u5468\u520a\uff1a\u7b2c 181 \u671f \u2014\u2014 ChatGPT + Golang")))}m.isMDXComponent=!0}}]);