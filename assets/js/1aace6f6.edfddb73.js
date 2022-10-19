"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[5048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(n),k=a,h=m["".concat(s,".").concat(k)]||m[k]||u[k]||p;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=n(83117),a=(n(67294),n(3905));const p={slug:"10\u670823\u65e5\u5185\u5bb9\u6c47\u603b",title:"10\u670823\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},l=void 0,o={permalink:"/frontend-weekly/blog/10\u670823\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-10-23/index.md",source:"@site/blog/2022-10-23/index.md",title:"10\u670823\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u5982\u4f55\u6311\u9009\u6700\u9002\u5408\u7684 Node.js Docker \u955c\u50cf",date:"2022-10-23T00:00:00.000Z",formattedDate:"October 23, 2022",tags:[],readingTime:5.755,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"10\u670823\u65e5\u5185\u5bb9\u6c47\u603b",title:"10\u670823\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"10\u670816\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/10\u670816\u65e5\u5185\u5bb9\u6c47\u603b"}},s={authorsImageUrls:[void 0]},i=[],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u6311\u9009\u6700\u9002\u5408\u7684 Node.js Docker \u955c\u50cf"),(0,a.kt)("p",null,"\u5f53\u4f60\u5728\u7f16\u5199 DockerFile \u65f6\u4f1a\u5ffd\u7565 ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM node")," \u7684\u542b\u4e49\uff0c\u4f5c\u8005\u5206\u4eab\u4e86\u4e00\u4e9b\u5bf9\u4e8e\u7248\u672c\u9009\u62e9\u4e0a\u7684\u8003\u8651\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://snyk.io/blog/choosing-the-best-node-js-docker-image/"},"https://snyk.io/blog/choosing-the-best-node-js-docker-image/")),(0,a.kt)("p",null,"\ud83d\udcd2 Lerna Reborn\uff1a\u7b2c\u516d\u4e2a\u7248\u672c\u66f4\u65b0\u4e86\u4ec0\u4e48"),(0,a.kt)("p",null,"\u4f7f\u7528 Nrwl \u7ba1\u7406\uff0c\u9762\u5411 Lerna monorepo \u7684 JavaScript \u6784\u5efa\u7cfb\u7edf\u5e76\u6ca1\u6709\u8fc7\u65f6\u6216\u5f03\u7528\uff0c\u5b83\u6b63\u5728\u5411\u524d\u8fc8\u8fdb\u4e00\u5927\u6b65\u3002v6 \u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u901a\u8fc7\u9ad8\u6548\u7684\u4efb\u52a1\u8c03\u5ea6\u548c\u7f13\u5b58\u3001VS Code \u6269\u5c55\u3001Prettier \u652f\u6301\u7b49\u83b7\u5f97\u4e86\u5f88\u5927\u7684\u901f\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.nrwl.io/lerna-reborn-whats-new-in-v6-10aec6e9091c?gi=ba929beec06d"},"https://blog.nrwl.io/lerna-reborn-whats-new-in-v6-10aec6e9091c?gi=ba929beec06d")),(0,a.kt)("p",null,"\ud83d\udcd2 Node v18.11.0 \u53d1\u5e03"),(0,a.kt)("p",null,"Node \u7684\u6700\u65b0\u7248\u672c\u867d\u7136\u5e76\u6ca1\u6709\u66f4\u65b0\u5f88\u591a\u529f\u80fd\uff0c\u4f46\u5374\u5b9e\u9a8c\u6027\u7684\u652f\u6301\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," \u529f\u80fd\u3002\u5f53\u5bfc\u5165\u7684\u6587\u4ef6\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4f1a\u81ea\u52a8\u91cd\u65b0\u542f\u52a8\u8fd0\u884c\u4e2d\u7684\u8fdb\u7a0b\uff08\u8fd9\u4e2a\u529f\u80fd\u8ba9\u4eba\u60f3\u8d77\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"nodemon"),"\uff09 \u2013 \u8fd9\u4e2a\u529f\u80fd\u6700\u8fd1\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8be6\u7ec6\u8ba8\u8bba\u8fc7"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/blog/release/v18.11.0/"},"https://nodejs.org/en/blog/release/v18.11.0/")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/KA9Zvnkye6bIgzbP_MT6Iw"},"\u3010\u7efc\u5408\u7b14\u8bd5\u9898\u3011\u96be\u5ea6 4.5/5\uff0c\u626b\u63cf\u7ebf\u7684\u7279\u6b8a\u8fd0\u7528\uff08\u8be6\u5c3d\u7b54\u7591\uff09")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/6peafvVjmcF65PFSggSLYQ"},"\u590d\u6d3b\u4e86\uff01 Lerna V6 \u5e26\u6765\u4e86\u54ea\u4e9b\u65b0\u4e1c\u897f")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7124573626161954823"},"\u524d\u7aef\u67b6\u6784\u5e26\u4f60 \u5c01\u88c5axios\uff0c\u4e00\u6b21\u5c01\u88c5\u7ec8\u8eab\u53d7\u76ca\u300c\u7f8e\u56e2\u540e\u7aef\u8fde\u8fde\u70b9\u8d5e\u300d")),(0,a.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u7f16\u5199 CommonJS \u6a21\u5757\uff0c\u4ee5\u4fbf\u5b83\u4eec\u7684\u5bfc\u51fa\u53ef\u4ee5\u4ece ES \u6a21\u5757\u5b9e\u73b0\u6309\u7167\u540d\u79f0\u5bfc\u5165"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u66fe\u7ecf\u5728\u4f7f\u7528 CommonJS \u548c ES \u6a21\u5757\u4e4b\u95f4\u7ea0\u7ed3\u8fc7\uff0c\u90a3\u4e48\u8fd9\u7bc7\u6587\u7ae0\u6216\u8bb8\u503c\u5f97\u4e00\u8bfb\u3002Axel \u535a\u58eb\u5728\u8fd9\u91cc\u89e3\u51b3\u4e86\u4e00\u4e2a\u5173\u952e\u7684\u4ea4\u53c9\u517c\u5bb9\u6027\u95ee\u9898\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://2ality.com/2022/10/commonjs-named-exports.html"},"https://2ality.com/2022/10/commonjs-named-exports.html")),(0,a.kt)("p",null,"\ud83d\udcd2 njt\uff1a\u5feb\u901f\u5bfc\u822a\u81f3 npm \u5305\u8d44\u6e90"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u5feb\u901f\u8bbf\u95ee npm \u5305\u7684\u9996\u9875\u3001\u4ed3\u5e93\u3001issues\uff0c\u751a\u81f3\u5305\u6210\u672c\u4f30\u7b97\uff0c\u90a3\u4e48 njt \u5c06\u4f1a\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002njt \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5feb\u901f\u8df3\u8f6c\u5230\u4e0e npm \u5305\u76f8\u5173\u7684\u5404\u79cd\u8d44\u6e90\u76ee\u7684\u5730\u7684\u65b9\u6cd5\u3002\u4f60\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u5b89\u88c5\u5e76\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 LaunchX \u6269\u5c55\u7a0b\u5e8f \u5c06 njt \u6dfb\u52a0\u81f3 VS Code \u7684\u547d\u4ee4\u9762\u677f\u7136\u540e\u4f7f\u7528\uff0c\u6216\u8005\u5728 Google \u4e0e Firefox \u6d4f\u89c8\u5668\u8fdb\u884c\u914d\u7f6e\u7136\u540e\u641c\u7d22\uff0c\u4ea6\u6216 \u76f4\u63a5\u5728\u7f51\u9875\u4e0a\u4f7f\u7528\u5b83\u3002\u5982\u679c\u4f60\u5bf9\u6b64\u6709\u5174\u8da3\uff0c\u53ef\u4ee5\u6765\u770b\u770b GitHub \u4ed3\u5e93\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/njt"},"https://www.npmjs.com/package/njt")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7142653628904701988"},"\u6362\u4e00\u79cd\u65b9\u5f0f\u5bf9\u5de5\u7a0b\u4e2d\u7684Api\u8fdb\u884c\u5c01\u88c5\u5427\uff08fashion-axios\uff09")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7153659360177029150"},"Element Plus \u7ec4\u4ef6\u5e93\u76f8\u5173\u6280\u672f\u63ed\u79d8\uff1a3.ESLint \u6838\u5fc3\u539f\u7406\u5256\u6790")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7146183222425518093"},"Element Plus \u7ec4\u4ef6\u5e93\u76f8\u5173\u6280\u672f\u63ed\u79d8\uff1a2. \u7ec4\u4ef6\u5e93\u5de5\u7a0b\u5316\u5b9e\u6218\u4e4b Monorepo \u67b6\u6784\u642d\u5efa")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/GaSo704nCAOba7d3XhwCzg"},"MDH \u524d\u7aef\u5468\u520a\u7b2c 73 \u671f\uff1aTypeScript 10 \u5e74\u3001\u6700\u5feb\u524d\u7aef\u6a21\u677f\u3001whyframe\u3001template \u5143\u7d20")),(0,a.kt)("p",null,"\ud83d\udcd2 \u6587\u7ae0\u63a8\u8350"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://supercodepower.com/fontend-target"},"\ud83d\uddc2 \u524d\u7aef\u7248\u672c\u517c\u5bb9\u95ee\u9898\u7684\u63a2\u7d22")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://supercodepower.com/web-dev-blog"},"\ud83d\uddc2 \u5bf9 web.dev \u6240\u6709 blog \u7684\u6574\u7406\u4e0e\u5f52\u6863")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://supercodepower.com/react-native-tweet"},"\ud83e\udd2f \u6ca1 2 \u5e74 React Native \u5f00\u53d1\u7ecf\u9a8c\uff0c\u4f60\u90fd\u9047\u4e0d\u5230\u8fd9\u4e9b\u5751"))),(0,a.kt)("p",null,"\ud83d\udcd2 Storybook 7.0 \u4e2d Vite \u6210\u4e3a\u5185\u7f6e\u9009\u9879"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/blog/first-class-vite-support-in-storybook/"},"https://storybook.js.org/blog/first-class-vite-support-in-storybook/")),(0,a.kt)("p",null,"\ud83d\udcd2 \u7528 Sandpack \u6253\u9020\u4e16\u754c\u7ea7 Playground"),(0,a.kt)("p",null,"CodeSandbox \u5f00\u6e90\u4e86 Sandpack\uff0c\u672c\u6587\u6559\u4f60\u4f7f\u7528 Sandpack \u6253\u9020\u51fa\u4e00\u4e2a\u529f\u80fd\u9f50\u5168\u7684 Playground\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.joshwcomeau.com/react/next-level-playground/"},"https://www.joshwcomeau.com/react/next-level-playground/")),(0,a.kt)("p",null,"\ud83d\udcd2 Resumable vs. Hydration"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86 Qwik \u6846\u67b6\u53ef\u6062\u590d\u6027\u7684\u5b9e\u73b0\u539f\u7406\u4ee5\u53ca\u4e0e\u5e38\u89c4\u8865\u6c34\u76f8\u6bd4\u5177\u6709\u7684\u4f18\u52bf\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://qwik.builder.io/docs/concepts/resumable/"},"https://qwik.builder.io/docs/concepts/resumable/")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/ten-years-of-typescript/"},"TypeScript \u5341\u5e74\uff0c\u4e0d\u5fd8\u521d\u5fc3")),(0,a.kt)("p",null,"\ud83d\udcd2 Rollup v3.0.0"),(0,a.kt)("p",null,"Rollup \u53d1\u5e03 v3.0.0\uff0c\u5e26\u6765\u4e86\u5927\u91cf\u66f4\u65b0\u3002\u5176\u4e2d Breaking Change \u5305\u62ec\u6700\u4f4e\u652f\u6301 Node 14.18.0\u3001\u6d4f\u89c8\u5668\u6784\u5efa\u62c6\u6210\u5355\u72ec\u7684\u5305 @rollup/browse\u3001Node \u6784\u5efa\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"node:")," \u524d\u7f00\u5bfc\u5165\u5185\u7f6e\u6a21\u5757\u3001\u79fb\u9664\u4e00\u4e9b\u4ee5\u524d\u88ab\u5e9f\u5f03\u7684\u529f\u80fd\uff0c\u4f7f\u7528\u65f6\u63d0\u793a\u8b66\u544a\u7b49\u3002\u8fd8\u6709\u5305\u62ec Options \u914d\u7f6e\u3001\u63d2\u4ef6 API\u3001\u4ee5\u53ca\u4e00\u7cfb\u5217\u7684\u65b0\u7279\u6027\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rollup 3.0 \u610f\u5473\u7740 Vite \u5373\u5c06\u53d1\u5e03\u5927\u7248\u672c")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollup/rollup/releases/tag/v3.0.0"},"https://github.com/rollup/rollup/releases/tag/v3.0.0")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7155435611619328036"},"\u524d\u7aef\u98df\u5802\u6280\u672f\u5468\u520a\u7b2c 55 \u671f\uff1aRollup v3.0.0\u3001Volar 1.0 Nika\u3001TypeScript \u5341\u5e74")),(0,a.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u4f7f\u7528 React\u3001SSR \u548c Tailwind CSS \u6784\u5efa SVG \u6298\u7ebf\u56fe"),(0,a.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u5728\u57fa\u4e8e Next.js \u6216 Gatsby \u7684\u670d\u52a1\u5668\u7aef\u6e32\u67d3 React \u5e94\u7528\u7a0b\u5e8f\u4e2d\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u57fa\u4e8e SVG \u7684\u6298\u7ebf\u56fe\u7684\u6559\u7a0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://thenewstack.io/how-to-build-svg-line-charts-with-react-ssr-and-tailwind-css/"},"https://thenewstack.io/how-to-build-svg-line-charts-with-react-ssr-and-tailwind-css/")),(0,a.kt)("p",null,"\ud83d\udcd2 React \u6e32\u67d3\u7684\u672a\u6765"),(0,a.kt)("p",null,"\u9996\u5148\u56de\u987e\u5f53\u524d\u7684\u6e32\u67d3\u6a21\u5f0f (CSR/SSR)\u7136\u540e\u8f6c\u5411\u4e00\u4e9b\u65b0\u7684\u6e32\u67d3\u6a21\u5f0f\uff0c\u4f8b\u5982\u6d41\u5f0f SSR \u548c\u670d\u52a1\u5668\u7ec4\u4ef6\u3002\u8fd9\u4e5f\u662f\u5728 React Bangalore \u7684 \u6700\u8fd1\u8bbf\u8c08 \u4e2d\u7684\u8bdd\u9898\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://prateeksurana.me/blog/future-of-rendering-in-react/"},"https://prateeksurana.me/blog/future-of-rendering-in-react/")),(0,a.kt)("p",null,"\ud83d\udcd2 React Table\uff1a\u4e00\u4e2a \u201c\u51e0\u4e4e\u65e0\u5934\u201d \u7684\u8868\u683c\u7ec4\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react-table-library.com/"},"https://react-table-library.com/")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7155300194773860382"},"Islands \u67b6\u6784\u539f\u7406\u548c\u5b9e\u8df5")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/BAOrH_-UWliOOc0pFGct-w"},"\u4f60\u4e0d\u9700\u8981Next.js\uff08\u548cSSR\uff09")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/vRiqSVSQOVsShnblV_fDfw"},"\u3010\u9762\u8bd5\u9ad8\u9891\u9898\u3011\u96be\u5ea6 1.5/5\uff0c\u5e38\u89c4\u6ed1\u52a8\u7a97\u53e3\u8fd0\u7528\u9898")),(0,a.kt)("p",null,"\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-PSUUDk0JtYRYH7g0viTZg"},"\u7cbe\u8bfb\u300aHeadless \u7ec4\u4ef6\u7528\u6cd5\u4e0e\u539f\u7406\u300b")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/TcYo3VWpM3uDpya1XXrX3w"},"\u5b66\u4e60\u4e86\uff01GoMap \u4f1a\u5185\u5b58\u6cc4\u9732")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/MSGH09uUjSquxGlxnBIUBg"},"\u5982\u4f55\u8ba9 Go \u53cd\u5c04\u53d8\u5feb")),(0,a.kt)("p",null,"\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/cAwc6ZhdUwxkI5VT8LY9Hg"},"Go Gin\u6846\u67b6\u8bf7\u6c42\u81ea\u52a8\u9a8c\u8bc1\u548c\u6570\u636e\u7ed1\u5b9a\uff0c\u770b\u5b8c\u8fd9\u7bc7\u5c31\u4f1a\u7528\u4e86")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/WfjnwzZvBsymk_DyhAV_6g"},"\u4e00\u6587\u641e\u61c2Go\u5185\u8054\u4f18\u5316")),(0,a.kt)("p",null,"\u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/nc4s289ULpQkGlQuaFbZlQ"},"Go\u5e38\u89c1\u9519\u8bef\u96c6\u9526\u4e4b\u51fd\u6570\u5f0f\u9009\u9879\u6a21\u5f0f")),(0,a.kt)("p",null,"\ud83d\udcd2 ",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/fVSi3-J7tnaP2AqunW9fWw"},"Go\u8bed\u8a00\u7231\u597d\u8005\u5468\u520a\uff1a\u7b2c 163 \u671f \u2014\u2014 \u9519\u8bef\u5904\u7406\u65b0\u63d0\u6848")))}u.isMDXComponent=!0}}]);