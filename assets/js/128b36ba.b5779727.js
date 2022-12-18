"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[5295],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var p=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);e&&(p=p.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,p)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,p,r=function(t,e){if(null==t)return{};var n,p,r={},a=Object.keys(t);for(p=0;p<a.length;p++)n=a[p],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(p=0;p<a.length;p++)n=a[p],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=p.createContext({}),i=function(t){var e=p.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=i(t.components);return p.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return p.createElement(p.Fragment,{},e)}},m=p.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=i(n),k=r,h=m["".concat(s,".").concat(k)]||m[k]||c[k]||a;return n?p.createElement(h,o(o({ref:e},u),{},{components:n})):p.createElement(h,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return p.createElement.apply(null,o)}return p.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62892:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var p=n(83117),r=(n(67294),n(3905));const a={slug:"12\u670818\u65e5\u5185\u5bb9\u6c47\u603b",title:"12\u670818\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,l={permalink:"/frontend-weekly/blog/12\u670818\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-12-18/index.md",source:"@site/blog/2022-12-18/index.md",title:"12\u670818\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u76f8\u5173\u6587\u7ae0\u63a8\u8350",date:"2022-12-18T00:00:00.000Z",formattedDate:"December 18, 2022",tags:[],readingTime:4.535,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"12\u670818\u65e5\u5185\u5bb9\u6c47\u603b",title:"12\u670818\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},nextItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"}},s={authorsImageUrls:[void 0]},i=[],u={toc:i};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,p.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcd2 \u76f8\u5173\u6587\u7ae0\u63a8\u8350"),(0,r.kt)("p",null,"\u4f55\u65f6\u4f7f\u7528 gRPC \u4e0e GraphQL - \u672c\u7bc7\u6587\u7ae0\u6bd4\u8f83\u4e86\u4e24\u4e2a\u6d41\u884c\u7684 API \u534f\u8bae\uff0c\u4ee5\u4e86\u89e3\u6bcf\u4e2a\u534f\u8bae\u5728\u54ea\u4e9b\u65b9\u9762\u6700\u6709\u6548"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.blog/2022/11/28/when-to-use-grpc-vs-graphql/"},"https://stackoverflow.blog/2022/11/28/when-to-use-grpc-vs-graphql/"))),(0,r.kt)("p",null,"\u5173\u4e8e\u4f7f\u7528 Rust \u4f18\u5316 JavaScript \u7684\u8ba8\u8bba \u2014 \u5728\u6700\u8fd1\u7684 Next.js \u4f1a\u8bae\u4e0a\u4e0e Vercel \u7684 Lee Robinson \u4ea4\u8c08"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.blog/2022/12/09/ready-to-optimize-your-javascript-with-rust/"},"https://stackoverflow.blog/2022/12/09/ready-to-optimize-your-javascript-with-rust/"))),(0,r.kt)("p",null,"\u7528\u4e8e\u5b89\u5168\u53d1\u5e03\u548c\u5b89\u5168\u6d88\u8d39\u7684\u65b0 npm \u529f\u80fd \u2014 GitHub \u6b63\u5728\u7ee7\u7eed\u52aa\u529b\u4f7f npm \u751f\u6001\u7cfb\u7edf\u66f4\u52a0\u5b89\u5168\u3002\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e86\u4e24\u4e2a\u65b0\u4e1c\u897f\uff1a\u7ec6\u7c92\u5ea6\u8bbf\u95ee\u4ee4\u724c \u7528\u4e8e\u5e2e\u52a9\u5305\u6240\u6709\u8005\u63a7\u5236\u5bf9\u53d1\u5e03\u5de5\u4f5c\u6d41\u7a0b\u7684\u8bbf\u95ee\uff0c\u4ee5\u53ca\u4e00\u4e2a\u65b0\u7684 \u4ee3\u7801\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u6765\u81ea\u5b98\u65b9 npm \u7ad9\u70b9\u7684\u5305\u7684\u5185\u5bb9"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.blog/2022-12-06-new-npm-features-for-secure-publishing-and-safe-consumption/"},"https://github.blog/2022-12-06-new-npm-features-for-secure-publishing-and-safe-consumption/"))),(0,r.kt)("p",null,"\u5728 2023 \u5e74\u4f7f\u7528 TypeScript \u8bbe\u7f6e Node.js \u2014 \u8fd9\u662f\u4e00\u672c\u65b9\u4fbf\u3001\u5236\u4f5c\u7cbe\u826f\u7684\u5165\u95e8\u8bfb\u7269\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728\u77ed\u77ed\u56db\u5206\u949f\u5185\u638c\u63e1\u4f7f\u7528 TypeScript \u548c Node \u7684\u57fa\u672c\u77e5\u8bc6\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=H91aqUHn8sE"},"https://www.youtube.com/watch?v=H91aqUHn8sE"))),(0,r.kt)("p",null,"40+ Node.js \u96c6\u6210\u6d4b\u8bd5\u6700\u4f73\u5b9e\u8df5 \u2014 \u7ec4\u4ef6/\u96c6\u6210\u6d4b\u8bd5\u6b63\u5728\u6210\u4e3a\u8d8a\u6765\u8d8a\u53d7\u6b22\u8fce\u7684\u540e\u7aef\u6d4b\u8bd5\u6280\u672f\u3002\u8fd9\u4e2a\u4ed3\u5e93\u6df1\u5165\u7814\u7a76\u4e86\u5404\u79cd\u5feb\u901f\u6a21\u5f0f\u548c\u5b9e\u8df5\uff0c\u4ee5\u521b\u5efa\u826f\u597d\u7684\u7ec4\u4ef6\u6d4b\u8bd5\u3002\u540c\u65f6\uff0c\u8fd8\u6709\u4e00\u4e2a\u6f14\u793a\u5e94\u7528\u7a0b\u5e8f\u548c\u4f7f\u7528 Jest\u3001Mocha\u3001Express\u3001Fastify \u548c Nest.js \u7684\u793a\u4f8b"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/testjavascript/nodejs-integration-tests-best-practices"},"https://github.com/testjavascript/nodejs-integration-tests-best-practices"))),(0,r.kt)("p",null,"\u201c\u505c\u6b62\u7f16\u5199\u865a\u5047\u7684 React \u4ee3\u7801\u201d \u2014 Jack \u4e0d\u559c\u6b22\u5728 React \u5e94\u7528\u4e2d\u4f7f\u7528\u666e\u901a\u7684 JavaScript\uff0c\u56e0\u4e3a\u60ef\u7528\u7684 React \u98ce\u683c\u7684\u65b9\u6cd5\u4f1a\u8ba9\u4eba\u611f\u89c9\u66f4\u81ea\u7136\u3002\u4ed6\u5206\u4eab\u4e86\u4e00\u4e9b\u907f\u514d\u81ea\u5df1\u9677\u5165\u540c\u6837\u95ee\u9898\u7684\u89c4\u5219"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=s-lumOeD2fk"},"https://www.youtube.com/watch?v=s-lumOeD2fk"))),(0,r.kt)("p",null,"Storybook \u56e2\u961f\u5df2\u7ecf\u5206\u4eab\u4e86\u5bf9\u5305\u62ec Next.js\u3001SvelteKit \u548c Remix \u5728\u5185\u7684\u6846\u67b6\u7684 \u672a\u6765\u652f\u6301\u7684\u66f4\u65b0\u3002\u5176\u4e2d\u5927\u90e8\u5206\u5c06\u4e8e 2023 \u5e74\u5230\u6765"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://storybook.js.org/blog/framework-api/"},"https://storybook.js.org/blog/framework-api/"))),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/2Rwy19C0eUshTWc_JfTPig"},"Redis\u5206\u5e03\u5f0f\u9501\u768410\u4e2a\u5751")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/QQjOyYkDfuxIxHl6k6qkRA"},"\u4e00\u6587\u5f7b\u5e95\u7406\u89e3Go\u8bed\u8a00\u6808\u5185\u5b58/\u5806\u5185\u5b58")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7169004126469914654"},"Rollup \u4e0e Webpack \u7684 Tree-shaking")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7021115814870810660"},"Rollup\u6e90\u7801\uff1a\u6a21\u5757\u6253\u5305\u4e0eTree-Shaking")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/19Ai1rbRoQxOBA5SXSNCAQ"},"Vite \u7279\u6027\u548c\u90e8\u5206\u6e90\u7801\u89e3\u6790")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/TvLWXX4bpVYOalywiupvFQ"},"\u3010\u7b2c2814\u671f\u3011\u5982\u4f55\u66f4\u65b0 NPM \u4f9d\u8d56")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7176963906844246074"},"Webpack\u6df1\u5ea6\u8fdb\u9636\uff1a\u4e24\u5f20\u56fe\u5f7b\u5e95\u8bb2\u660e\u767d\u70ed\u66f4\u65b0\u539f\u7406\uff01")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7170852747749621791"},"\u4e8c\u5341\u5f20\u56fe\u7247\u5f7b\u5e95\u8bb2\u660e\u767dWebpack\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4ee5\u770b\u61c2\u4e3a\u76ee\u7684")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/QUpei0fQA4CYYkhamjAdDw"},"\u8c08\u8c08\u590d\u6742\u5e94\u7528\u7684\u72b6\u6001\u7ba1\u7406\uff08\u4e0b\uff09\uff1a\u57fa\u4e8e Zustand \u7684\u6e10\u8fdb\u5f0f\u72b6\u6001\u7ba1\u7406\u5b9e\u8df5")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7177216308843380797"},"\u8c08\u8c08\u590d\u6742\u5e94\u7528\u7684\u72b6\u6001\u7ba1\u7406\uff08\u4e0a\uff09\uff1a\u4e3a\u4ec0\u4e48\u662f Zustand")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7177585131861835837"},"React Native\u5de5\u7a0bMonorepo\u6539\u9020\u5b9e\u8df5")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/JzHA3htAjHXhQ4HeshflzA"},"\u3010\u7b2c2813\u671f\u3011\u7f51\u6613\u4e25\u9009APP\u7aef\u4e0aH5\u5bb9\u5668\u5316\u5efa\u8bbe")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/setWdt_6S26_-tEX7ua07g"},"Go 1.20 \u65b0\u7279\u6027\u4e4b time.Compare")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/x_Z58gxrzhJURRhIdxfpEg"},"\u3010\u7efc\u5408\u7b14\u8bd5\u9898\u3011\u96be\u5ea6 3.5/5\uff0c\u62ec\u53f7\u76f8\u5173\u526a\u679d\u641c\u7d22\u9898")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7176943264749060155"},"Umi \u4e2d\u5982\u4f55\u6839\u636e\u670d\u52a1\u7aef\u54cd\u5e94\u6570\u636e\u52a8\u6001\u66f4\u65b0\u8def\u7531")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/svGYB3HvmLDMerlM50BhAg"},"\u6df1\u5ea6\u89e3\u6790 React \u6027\u80fd\u4f18\u5316 API")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/rtEhjJhwdkX3U01vHG6S8g"},"Go1.20 \u5c06\u4f1a\u4fee\u6539\u5168\u5c40\u53d8\u91cf\u7684\u521d\u59cb\u5316\u987a\u5e8f\u3002\u6885\u5ea6\u4e8c\u5f00\uff0c\u7ee7\u7eed\u6253\u7834 Go1 \u517c\u5bb9\u6027\u627f\u8bfa\uff01")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/LW8Woq5Rg4x31DbtD-_jeA"},"\u4e24\u79cd Option \u7f16\u7a0b\u6a21\u5f0f\u7684\u5b9e\u73b0\uff0cUber\u63a8\u8350\u8fd9\u4e00\u79cd")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/oO-WpgdszWrBxOOxSFWFRw"},"\u54d4\u54e9\u54d4\u54e9 Web \u9996\u9875\u91cd\u6784\u2014\u2014\u56de\u99962021")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7176430181765087269"},"\u524d\u7aef\u98df\u5802\u6280\u672f\u5468\u520a\u7b2c 63 \u671f\uff1aVite 4.0\u3001State of CSS 2022\u3001Rome v11\u3001Web \u6027\u80fd\u65e5\u5386\u3001VueConf 2022 PPT")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7176504540793929789"},"\u3010\u7efc\u5408\u7b14\u8bd5\u9898\u3011\u96be\u5ea6 3/5\uff0c\u591a\u89e3\u6cd5\u70ed\u95e8\u641c\u7d22\u9898")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7176275850101260325"},"ChatGPT \u4ee5\u53ca\u76f8\u5173\u5f00\u6e90\u9879\u76ee\u4f53\u9a8c")),(0,r.kt)("p",null,"\ud83d\udcd2 Webpack \u6784\u5efa\u6d41\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000012081469"},"\u73a9\u8f6cwebpack\uff08\u4e00\uff09\u4e0a\u7bc7\uff1awebpack\u7684\u57fa\u672c\u67b6\u6784\u548c\u6784\u5efa\u6d41\u7a0b")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000012099163"},"\u73a9\u8f6cwebpack\uff08\u4e00\uff09\u4e0b\u7bc7\uff1awebpack\u7684\u57fa\u672c\u67b6\u6784\u548c\u6784\u5efa\u6d41\u7a0b")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/hqTB22O0SXfMSBrEuvTvjg"},"MDH \u524d\u7aef\u5468\u520a\u7b2c 79 \u671f\uff1aChatGPT\u3001Vite 4\u3001SWR 2\u3001Intl.Segmenter")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://gocn.github.io/styleguide/docs/02-guide/"},"Google Go \u7f16\u7a0b\u89c4\u8303")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/SFbSAGwQgQBVWpySYF-rkw"},"Go\u7248\u672c\u5927\u4e8e1.13\uff0c\u7a0b\u5e8f\u91cc\u8fd9\u6837\u505a\u9519\u8bef\u5904\u7406\u624d\u5730\u9053")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/6dsPnQlq8BfHkdibfiNcUg"},"\u3010\u7b2c2809\u671f\u3011\u5927\u578b\u4f1a\u573a\u6d3b\u52a8\u7ebf\u4e0a\u4fdd\u969c\u65b9\u6848")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/5aScdlfyWM25VoekLlHhVQ"},"Go\u8bed\u8a00\u7231\u597d\u8005\u5468\u520a\uff1a\u7b2c 171 \u671f")))}c.isMDXComponent=!0}}]);