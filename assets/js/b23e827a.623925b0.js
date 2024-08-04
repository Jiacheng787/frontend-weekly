"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[41282],{49613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,g=m["".concat(i,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(g,p(p({ref:t},s),{},{components:n})):a.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},50953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(64778),r=(n(59496),n(49613));const l={slug:"12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",title:"12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["Webpack","Golang","NPM","React"]},p=void 0,o={permalink:"/frontend-weekly/2021/12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blogs/2021/2021-12-19/index.md",source:"@site/blogs/2021/2021-12-19/index.md",title:"12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",description:"\u2b50\ufe0f Webpack \u5206\u5305\u6700\u4f73\u5b9e\u8df5",date:"2021-12-19T00:00:00.000Z",formattedDate:"December 19, 2021",tags:[{label:"Webpack",permalink:"/frontend-weekly/2021/tags/webpack"},{label:"Golang",permalink:"/frontend-weekly/2021/tags/golang"},{label:"NPM",permalink:"/frontend-weekly/2021/tags/npm"},{label:"React",permalink:"/frontend-weekly/2021/tags/react"}],readingTime:3.285,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://frontend-weekly.oss-cn-hangzhou.aliyuncs.com/img/IMG_0687.JPG",key:"garfield"}],frontMatter:{slug:"12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",title:"12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["Webpack","Golang","NPM","React"]},prevItem:{title:"12\u670826\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2021/12\u670826\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"12\u670812\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/2021/12\u670812\u65e5\u5185\u5bb9\u6c47\u603b"}},i={authorsImageUrls:[void 0]},c=[],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u2b50\ufe0f Webpack \u5206\u5305\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("p",null,"SplitChunksPlugin \u8fdb\u884c\u5206\u5305\u7684\u4e09\u8981\u7d20:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"minChunks"),": \u4e00\u4e2a\u6a21\u5757\u662f\u5426\u6700\u5c11\u88ab minChunks \u4e2a chunk \u6240\u5f15\u7528"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"maxInitialRequests/maxAsyncRequests"),": \u6700\u591a\u53ea\u80fd\u6709 maxInitialRequests/maxAsyncRequests \u4e2a chunk \u9700\u8981\u540c\u65f6\u52a0\u8f7d (\u5982\u4e00\u4e2a Chunk \u4f9d\u8d56 VendorChunk \u624d\u53ef\u6b63\u5e38\u5de5\u4f5c\uff0c\u6b64\u65f6\u540c\u65f6\u52a0\u8f7d chunk \u6570\u4e3a 2)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"minSize/maxSize"),": chunk \u7684\u4f53\u79ef\u5fc5\u987b\u4ecb\u4e8e (minSize, maxSize) \u4e4b\u95f4")),(0,r.kt)("p",null,"\u54ea\u4e9b\u5e94\u8be5\u5355\u72ec\u5206\u5305\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Webpack \u8fd0\u884c\u65f6"),(0,r.kt)("li",{parentName:"ol"},"React Framework \u8fd0\u884c\u65f6\uff0c\u5305\u62ec React/React-DOM \u53ca\u5b83\u4eec\u6240\u6709\u7684\u4f9d\u8d56"),(0,r.kt)("li",{parentName:"ol"},"\u5927\u578b\u5e93\uff0c\u4f53\u79ef\u7279\u522b\u5927\u7684\u5e93"),(0,r.kt)("li",{parentName:"ol"},"\u516c\u5171\u5e93\uff0c\u81f3\u5c11\u88ab 4 \u4e2a Chunk \u6240\u5f15\u7528\u7684\u516c\u5171\u6a21\u5757")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Webpack \u914d\u7f6e\u6700\u4f73\u5b9e\u8df5\uff0c\u9664\u4e86 Vue-cli \u548c CRA \u6e90\u7801\uff0c\u8fd8\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("inlineCode",{parentName:"p"},"next.js")," \u6e90\u7801\uff1a"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack-config.ts"},"https://github.com/vercel/next.js/blob/canary/packages/next/build/webpack-config.ts"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/LrASIdA19iwIwng29G5HpA"},"Webpack \u6027\u80fd\u7cfb\u5217\u56db\uff1a\u5206\u5305\u4f18\u5316")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/AxwT588VKRxnlkBlXICMpQ"},"\u3010\u5185\u90e8\u5206\u4eab\u3011\u770b\u5411\u672a\u6765 - \u8fd1\u671f TC39 \u63d0\u6848\u6c47\u603b")),(0,r.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u79fb\u9664\u4ee3\u7801\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"console")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"uglifyjs-webpack-plugin")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"terser-webpack-plugin")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"drop_console")," \u914d\u7f6e\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Babel \u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-remove-console"),"\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7b80\u5355\u7c97\u66b4\u5220\u9664\uff0c\u76f4\u63a5\u91cd\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," \u65b9\u6cd5\uff1b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log = function() {};\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u624b\u5199 webpack loader \u5220\u9664\uff1b"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// clearConsole.js\nconst reg = /(console.log\\()(.*)(\\))/g;\nmodule.exports = function(source) {\n    source = source.replace(reg, "")\n    return source;\n}\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u57fa\u4e8e\u6b63\u5219\u5339\u914d\u8fd8\u662f\u6709\u4e00\u4e9b\u95ee\u9898\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"const { log } = console")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"const log = console.log.bind(console)")," \u8fd9\u79cd\u5c31\u5339\u914d\u4e0d\u5230")))),(0,r.kt)("p",null,"\ud83d\udcd2 WebRTC \u5f55\u5c4f\u6280\u672f"),(0,r.kt)("p",null,"WebRTC \u662f\u4e00\u5957\u57fa\u4e8e\u97f3\u89c6\u8f68\u7684\u5b9e\u65f6\u6570\u636e\u6d41\u4f20\u64ad\u7684\u6280\u672f\u65b9\u6848\u3002\u901a\u8fc7\u6d4f\u89c8\u5668\u539f\u751f API ",(0,r.kt)("inlineCode",{parentName:"p"},"navigator.mediaDevices.getDisplayMedia")," \u65b9\u6cd5\u5b9e\u73b0\u63d0\u793a\u7528\u6237\u9009\u62e9\u548c\u6388\u6743\u6355\u83b7\u5c55\u793a\u7684\u7a97\u53e3\uff0c\u8fdb\u800c\u83b7\u53d6 stream (\u5f55\u5236\u7684\u5c4f\u5e55\u97f3\u89c6\u6d41)\u3002\u6211\u4eec\u53ef\u4ee5\u5bf9 stream \u8fdb\u884c\u8f6c\u5316\u5904\u7406\uff0c\u8f6c\u6210\u76f8\u5bf9\u5e94\u7684\u5a92\u4f53\u6570\u636e\uff0c\u5e76\u5c06\u5176\u6570\u636e\u5b58\u50a8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var promise = navigator.mediaDevices.getDisplayMedia(constraints);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"},"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7028723258019020836"},"\u6d45\u6790Web\u5f55\u5c4f\u6280\u672f\u65b9\u6848\u4e0e\u5b9e\u73b0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6896045087659130894"},"\u4ece0\u52301\u6253\u9020\u4e00\u4e2a WebRTC \u5e94\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7010954456548245541"},"\u6d45\u804aWebRTC\u89c6\u9891\u901a\u8bdd"))),(0,r.kt)("p",null,"\ud83d\udcd2 Go 1.18 Beta 1 \u5df2\u7ecf\u6b63\u652f\u6301\u6cdb\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/blog/go1.18beta1"},"Go 1.18 Beta 1 is available, with generics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/blog/why-generics"},"Why Generics?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/play/?v=gotip"},"The Go Playground"))),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7041846339189080101"},"\u4f7f\u7528Golang\u3001Gin\u548cReact\u3001esbuild\u5f00\u53d1\u7684Blog")),(0,r.kt)("p",null,"\ud83d\udcd2 \u4f7f\u7528 patch-package \u4fee\u590d npm \u5e93\u7684\u7d27\u6025\u95ee\u9898"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684 npm \u5e93\u6709 bug\uff0c\u53ef\u4ee5\u4f7f\u7528 patch-package \u521b\u5efa\u4e00\u4e2a\u8865\u4e01\u5305\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7029310620952428558"},"\u5de5\u7a0b\u5316\u77e5\u8bc6\u5361\u7247 022: \u8d28\u91cf\u4fdd\u969c\u7bc7\u4e4b\u5982\u4f55\u4f18\u96c5\u67d0\u4e2a npm \u5e93\u7684\u7d27\u6025\u95ee\u9898")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/WWQa4kJXAblBkZS5zx3HBw"},"5 \u79cd\u6709\u8da3\u7684 useEffect \u65e0\u9650\u5faa\u73af\u7c7b\u578b")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/you-dont-need/You-Dont-Need-JavaScript"},"\u7528 CSS \u6765\u4ee3\u66ff JS \u7684\u5b9e\u73b0")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7027995169211285512"},"React18 \u65b0\u7279\u6027\uff1atransition")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7038370502926139399"},"\u300c2021\u300d\u6211\u7ed9Vue.js\u751f\u6001\u8d21\u732e\u4ee3\u7801\u7684\u8fd9\u4e00\u5e74")),(0,r.kt)("p",null,"\u2b50\ufe0f \u2b50\ufe0f fiber\uff1a\u53d7\u5230 Express \u542f\u53d1\u7684 Web \u5e94\u7528\u6846\u67b6\uff0c\u4f7f\u7528 Go \u5f00\u53d1\uff0c\u4e0e Express \u7684 API \u975e\u5e38\u63a5\u8fd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "github.com/gofiber/fiber/v2"\n\nfunc main() {\n  app := fiber.New()\n\n  app.Get("/", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, World \ud83d\udc4b!")\n  })\n\n  app.Listen(":3000")\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"https://github.com/gofiber/fiber"))))}u.isMDXComponent=!0}}]);