"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[828],{49613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(59496);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,p=function(t,e){if(null==t)return{};var n,a,p={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(p[n]=t[n]);return p}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(p[n]=t[n])}return p}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,p=t.mdxType,r=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),k=p,h=m["".concat(i,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(h,o(o({ref:e},c),{},{components:n})):a.createElement(h,o({ref:e},c))}));function h(t,e){var n=arguments,p=e&&e.mdxType;if("string"==typeof t||p){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[m]="string"==typeof t?t:p,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81969:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(64778),p=(n(59496),n(49613));const r={slug:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",title:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,l={permalink:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2022/2022-06-12/index.md",source:"@site/blogs/2022/2022-06-12/index.md",title:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u3010\u7b2c2638\u671f\u3011\u524d\u7aef\u5b89\u5168\u4e4b CSRF \u653b\u51fb\u539f\u7406\u548c\u9632\u62a4\u65b9\u6cd5",date:"2022-06-12T00:00:00.000Z",formattedDate:"June 12, 2022",tags:[],readingTime:5.465,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",title:"6\u670812\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"6\u670819\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/6\u670819\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"6\u67085\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/2022/6\u67085\u65e5\u5185\u5bb9\u6c47\u603b"}},i={authorsImageUrls:[void 0]},s=[],c={toc:s},m="wrapper";function u(t){let{components:e,...n}=t;return(0,p.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/MSK1f6qEAB75iiYzHWhlgA"},"\u3010\u7b2c2638\u671f\u3011\u524d\u7aef\u5b89\u5168\u4e4b CSRF \u653b\u51fb\u539f\u7406\u548c\u9632\u62a4\u65b9\u6cd5")),(0,p.kt)("p",null,"\ud83d\udcd2 \u4f55\u65f6\u53d1\u8d77 fetch \u8bf7\u6c42\uff1f\u8bd5\u8bd5\u5728 React Router \u4e2d\u5427"),(0,p.kt)("p",null,"\u8fd9\u662f\u4e00\u5219\u8fd1\u671f\u5728 Reactathon \u4e2d\u7684\u6f14\u8bb2\u3002Remix \u521b\u59cb\u4eba\u4e4b\u4e00\u7684 Ryan Florence \u6781\u529b\u63a8\u8350\u4e86\u5728 React Router \u4e2d\u53bb\u505a fetch \u8bf7\u6c42\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=95B8mnhzoCM"},"https://www.youtube.com/watch?v=95B8mnhzoCM"))),(0,p.kt)("p",null,"\ud83d\udcd2 React Route v6.4 \u7248\u672c\u5df2\u8fdb\u5165\u9884\u53d1\u5e03\u9636\u6bb5"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/remix-run/react-router/releases/tag/v6.4.0-pre.2"},"https://github.com/remix-run/react-router/releases/tag/v6.4.0-pre.2"))),(0,p.kt)("p",null,"\ud83d\udcd2 \u6700\u65b0\u4e00\u671f\u7684 20minJS \u8bf7\u6765\u4e86 Mark Erikson\uff0c\u4e3b\u8981\u8ba8\u8bba\u4e86 \u72b6\u6001\u7ba1\u7406\u4ee5\u53ca Redux Toolkit"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://podcast.20minjs.com/1952066/10665172-episode-12-redux-toolkit-and-state-management-in-react-with-mark-erikson"},"https://podcast.20minjs.com/1952066/10665172-episode-12-redux-toolkit-and-state-management-in-react-with-mark-erikson"))),(0,p.kt)("p",null,"\ud83d\udcd2 Storybook v6.5 \u7248\u53d1\u5e03\uff1a\u65e8\u5728\u63d0\u5347\u751f\u4ea7\u529b\u7684\u65b0\u5de5\u4f5c\u6d41"),(0,p.kt)("p",null,"\u8fd9\u6b3e\u6d41\u884c\u7684\u7ec4\u4ef6\u5f00\u53d1\u5de5\u5177\u5e93\u672c\u6b21\u53d1\u5e03\u4e86\u8bb8\u591a\u65b0\u529f\u80fd\uff0c\u5305\u62ec\u5728\u6d4f\u89c8\u5668\u4e2d\u9a8c\u8bc1\u7528\u6237\u884c\u4e3a\u7684\u4ea4\u4e92\u6d4b\u8bd5\uff0c\u4e00\u4e2a\u5c06 story \u548c variant \u8fde\u7ed3\u8d77\u6765\u7684 Figma \u63d2\u4ef6\u4ee5\u53ca\u5f15\u5165\u4e86 Webpack 5 \u7684\u60f0\u6027\u7f16\u8bd1\u7528\u6765\u63d0\u9ad8\u542f\u52a8\u901f\u5ea6\u7b49\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://storybook.js.org/blog/storybook-6-5/"},"https://storybook.js.org/blog/storybook-6-5/"))),(0,p.kt)("p",null,"\ud83d\udcd2 Glide Data Grid v4.0 \u7248\u53d1\u5e03\uff1a\u4e00\u6b3e\u9ad8\u6548\u7684 React \u6570\u636e\u7f51\u683c\u5e93 "),(0,p.kt)("p",null,"\u5b83\u81ea\u79f0\u662f\u4e00\u6b3e\u201c\u6beb\u4e0d\u59a5\u534f\uff0c\u901f\u5ea6\u98de\u5feb\u7684\u6570\u636e\u7f51\u683c\u201d\u3002\u5b83\u652f\u6301\u9ad8\u8fbe\u767e\u4e07\u6761\u6570\u636e\u7684\u591a\u6837\u5316\u6e32\u67d3\uff0c\u4e14\u652f\u6301 TypeScript\u3002\u4e3b\u9875\u4e0a\u8fd8\u6709\u4e00\u4e2a\u7b80\u6d01\u7684 Demo\uff0c\u5b83\u652f\u6301 MIT \u8bb8\u53ef\u8bc1\u3002\u8be6\u60c5\u8bf7\u770b GitHub \u4ed3\u5e93\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://grid.glideapps.com/"},"https://grid.glideapps.com/"))),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Q2Dx45dOnqrwthllOEahDg"},"\u5f00\u53d1\u4e00\u4e2a\u6d4f\u89c8\u5668\u63d2\u4ef6\u4ece\u672a\u5982\u6b64\u7b80\u5355")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/dVD22v_phrk4Xl2GQH_-yw"},"\u6df1\u5165\u6d45\u51fa npm & yarn & pnpm \u5305\u7ba1\u7406\u673a\u5236")),(0,p.kt)("p",null,"\ud83d\udcd2 pkg.land\uff1a\u53d1\u73b0 npm \u5305\u7684\u66ff\u4ee3\u54c1\u7684\u65b9\u5f0f"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://pkg.land/"},"https://pkg.land/"))),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7073001183123603470"},"\u5e73\u65f6\u7684\u5de5\u4f5c\u5982\u4f55\u4f53\u73b0\u4e00\u4e2a\u4eba\u7684\u6280\u672f\u6df1\u5ea6\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/fxX4oPHURDpvFvCIZUd7VA"},"\u5173\u4e8e\u524d\u7aef\u5927\u7ba1\u5bb6 package.json\uff0c\u4f60\u77e5\u9053\u591a\u5c11\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/bR7vDw_ii4VPL4f8YVIWEg"},'\u3010\u7b2c2636\u671f\u3011\u4ece"\u5fae\u524d\u7aef"\u5230\u201c\u5fae\u6a21\u5757\u201d')),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7104301566857445412"},"\u4f60\u8fd8\u5728\u76f4\u63a5\u7528 localStorage \u4e48\uff1f\u8be5\u63d0\u5347\u4e0b\u903c\u683c\u4e86")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Roca8dPlP5H8z1JIaCGuHA"},"ahooks \u4e2d\u90a3\u4e9b\u63a7\u5236\u201c\u65f6\u673a\u201d\u7684hook\u90fd\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/pS-pLnG4RLMtodvvqmzEUw"},"\u5b9e\u73b0\u4e00\u4e2a\u5b9e\u65f6\u9884\u89c8\u7684 json \u7f16\u8f91\u5668\u7ec4\u4ef6\uff08react \u7248\uff09")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/524973511"},"\u5fae\u4fe1\u56e2\u961f\u5206\u4eab\uff1a\u5fae\u4fe1\u540e\u53f0\u5728\u6d77\u91cf\u5e76\u53d1\u8bf7\u6c42\u4e0b\u662f\u5982\u4f55\u505a\u5230\u4e0d\u5d29\u6e83\u7684")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903489970126856"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"a"},"-force")," \u88ab\u8ba4\u4e3a\u662f\u6709\u5bb3\u7684\uff1b\u4e86\u89e3 Git \u7684 ",(0,p.kt)("inlineCode",{parentName:"a"},"-force-with-lease")," \u547d\u4ee4")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7105993870185332766"},'\u4f7f\u7528 Three.js \u5b9e\u73b0"\u96ea\u7cd5"\u5730\u7403\uff0c\u8ba9\u5730\u7403\u4e5f\u51c9\u723d\u4e00\u590f')),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/cOTxpimRvv18HIiLaneuEQ"},"\u4ece0\u52301\u5e26\u4f60\u7528webpack 5\u6784\u5efamonorepo\u9879\u76ee\u2014\u2014\u4e0a\u7bc7")),(0,p.kt)("p",null,"\ud83d\udcd2 content-visibility \u518d\u63a2\u7a76\uff0c\u5b8c\u7f8e\u66ff\u4ee3 Lazyload\uff1f"),(0,p.kt)("p",null,"\u76f4\u63a5\u770b\u7ed3\u8bba\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5728\u4e00\u4e9b\u9700\u8981\u88ab\u9891\u7e41\u5207\u6362\u663e\u793a\u3001\u9690\u85cf\u72b6\u6001\u7684\u5143\u7d20\u4e0a\uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"content-visibility: hidden"),"\uff0c\u7528\u6237\u4ee3\u7406\u65e0\u9700\u91cd\u5934\u5f00\u59cb\u6e32\u67d3\u5b83\u548c\u5b83\u7684\u5b50\u5143\u7d20\uff0c\u80fd\u6709\u6548\u5730\u63d0\u5347\u5207\u6362\u65f6\u7684\u6e32\u67d3\u6027\u80fd\uff1b"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"content-visibility: auto")," \u7684\u4f5c\u7528\u66f4\u52a0\u7c7b\u4f3c\u4e8e\u865a\u62df\u5217\u8868\uff0c\u4f7f\u7528\u5b83\u80fd\u6781\u5927\u5730\u63d0\u5347\u957f\u5217\u8868\u3001\u957f\u6587\u672c\u9875\u9762\u7684\u6e32\u67d3\u6027\u80fd\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u5408\u7406\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"contain-intrinsic-size")," \u9884\u4f30\u8bbe\u7f6e\u4e86 ",(0,p.kt)("inlineCode",{parentName:"li"},"content-visibility: auto")," \u5143\u7d20\u7684\u9ad8\u5bbd\uff0c\u53ef\u4ee5\u6709\u6548\u907f\u514d\u6eda\u52a8\u6761\u5728\u6eda\u52a8\u8fc7\u7a0b\u4e2d\u7684\u6296\u52a8\uff1b"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"content-visibility: auto")," \u65e0\u6cd5\u76f4\u63a5\u66ff\u4ee3 LazyLoad\uff0c\u8bbe\u7f6e\u4e86 ",(0,p.kt)("inlineCode",{parentName:"li"},"content-visibility: auto")," \u7684\u5143\u7d20\u5728\u53ef\u89c6\u533a\u5916\u53ea\u662f\u672a\u88ab\u6e32\u67d3\uff0c\u4f46\u662f\u5176\u4e2d\u7684\u9759\u6001\u8d44\u6e90\u4ecd\u65e7\u4f1a\u5728\u9875\u9762\u521d\u59cb\u5316\u7684\u65f6\u5019\u88ab\u5168\u90e8\u52a0\u8f7d\uff1b"),(0,p.kt)("li",{parentName:"ul"},"\u5373\u4fbf\u5b58\u5728\u8bbe\u7f6e\u4e86 ",(0,p.kt)("inlineCode",{parentName:"li"},"content-visibility: auto")," \u7684\u672a\u88ab\u6e32\u67d3\u7684\u5143\u7d20\uff0c\u4e5f\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5168\u5c40\u7684\u641c\u7d22\u529f\u80fd\u3002")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/bZ6edmEoVXLWloQssiQxRg"},"content-visibility \u518d\u63a2\u7a76\uff0c\u5b8c\u7f8e\u66ff\u4ee3 Lazyload\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/DhkQNO8Hv1zZP9Fu7uSw-g"},"\u51b7\u77e5\u8bc6\uff01\u4f7f\u7528 display: contents \u5b9e\u73b0\u5e7d\u7075\u8282\u70b9\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/JxrCUN8PQ_xG_AkfV-G5FQ"},"\u57fa\u4e8e Vue3 \u548c TypeScript \u9879\u76ee\u5927\u91cf\u5b9e\u8df5\u540e\u7684\u601d\u8003")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/t3nBYybInY_AXVpbeKi6Jw"},"ahooks \u662f\u600e\u4e48\u89e3\u51b3\u7528\u6237\u591a\u6b21\u63d0\u4ea4\u95ee\u9898\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6953867408096362503"},"\u8fd9\u8fd8\u662f\u6211\u6700\u719f\u6089\u7684package.json\u5417\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6950817077670182943"},"npm init @vitejs/app\u7684\u80cc\u540e\uff0c\u4ec5\u662fnpm CLI\u7684\u51b0\u5c71\u4e00\u89d2")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/QZ49KF-k14NamqlF_hBT9A"},"\u4e0d\u5230 100 \u884c\u4ee3\u7801\uff0c\u5b9e\u73b0 React Router \u6838\u5fc3\u903b\u8f91")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/z6rWffzjeww5GRZVh6hK8Q"},"ahooks \u662f\u600e\u4e48\u89e3\u51b3 React \u7684\u95ed\u5305\u95ee\u9898\u7684\uff1f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/k2LYtZ6lU5CH1_grlKQT0Q"},"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6\u5316\u673a\u5236\u4f18\u96c5\u7684\u5c01\u88c5\u4f60\u7684\u8bf7\u6c42hook")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/_lKKAvzVQPTQ5FeKBF6hRA"},"\u3010\u7b2c2633\u671f\u3011JavaScript\u8fd0\u884c\u65f6\u73af\u5883\u548c\u6807\u51c6")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/9TnD_oXnjiU8aoQJBzLbsA"},"TS \u7684 esModuleInterop \u4e0e allowSyntheticDefaultImports \u914d\u7f6e")),(0,p.kt)("p",null,"\ud83d\udcd2 NPM \u53d1\u5305\u811a\u672c\u52a0\u4e0a\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'const npmPublish = async () => {\n  const scripts = [\n    "npm set-script postinstall \\"\\"",\n    "npm publish",\n    "npm set-script postinstall \\"patch-package\\"",\n  ];\n  await scripts.reduce(\n    (prev, script) => prev.then(() => runScript(script)),\n    Promise.resolve()\n  );\n}\n')),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"reduce()")," \u786e\u4fdd\u4e86 Promise \u6309\u987a\u5e8f\u8c03\u7528\uff0c\u800c ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise.all()")," \u5e76\u53d1\u6267\u884c\u4e0d\u4fdd\u8bc1\u987a\u5e8f")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/LMSveysC0re7A0sbvvImuw"},"\u3010\u7b2c2632\u671f\u3011\u5fae\u524d\u7aef\u6846\u67b6 Satum \u7684\u6027\u80fd\u4f18\u5316\u7b56\u7565")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/lApEUTzOsdbvMeRUXcTneg"},"\u5927\u5bb6\u90fd\u80fd\u770b\u5f97\u61c2\u7684\u6e90\u7801\uff08\u4e00\uff09ahooks \u6574\u4f53\u67b6\u6784\u7bc7")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/h7GiH_s8e8wM0CDS_tF_3w"},"React\u65b0\u6587\u6863\uff1a\u4e0d\u8981\u6ee5\u7528effect\u54e6")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7103165205483356168"},"\u4f60\u8fd8\u4e0d\u4f1a\u5199 vite \u63d2\u4ef6\u5417\uff1f\u6ca1\u5173\u7cfb\uff0c\u6211\u6559\u4f60\u554a")),(0,p.kt)("p",null,"\ud83d\udcd2 ",(0,p.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Gl94ISY5N4BYyYmVT9-QFQ"},"\u7528 Node.js \u624b\u5199\u4e00\u4e2a DNS \u670d\u52a1\u5668")))}u.isMDXComponent=!0}}]);