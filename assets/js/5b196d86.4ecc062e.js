"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[2444],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2385:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),o=["components"],p={slug:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},i=void 0,s={permalink:"/frontend-weekly/blog/5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-05-08/index.md",source:"@site/blog/2022-05-08/index.md",title:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 TypeScript \u5c0f\u6280\u5de7\uff1a\u5e38\u91cf\u65ad\u8a00",date:"2022-05-08T00:00:00.000Z",formattedDate:"May 8, 2022",tags:[],readingTime:8.475,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"5\u67081\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/5\u67081\u65e5\u5185\u5bb9\u6c47\u603b"}},c={authorsImageUrls:[void 0]},m=[],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83d\udcd2 TypeScript \u5c0f\u6280\u5de7\uff1a\u5e38\u91cf\u65ad\u8a00"),(0,l.kt)("p",null,"\u5728\u8bb2\u5e38\u91cf\u65ad\u8a00\u4e4b\u524d\uff0c\u5148\u63d0\u4e00\u4e0b\uff0cTS \u4f1a\u533a\u522b\u5bf9\u5f85\u53ef\u4fee\u6539\u548c\u4e0d\u53ef\u4fee\u6539\u7684\u503c\u7684\u7c7b\u578b\u63a8\u65ad\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u63a8\u65ad\u6210\u5355\u503c\u7c7b\u578b 'dbydm'\nconst immutable = 'dbydm';\n\n// \u63a8\u65ad\u6210\u901a\u7528\u7684 string \u7c7b\u578b\nlet mutable = 'dn';\n\n// \u7531\u4e8e\u5bf9\u8c61\u7684\u5c5e\u6027\u90fd\u5177\u6709\u53ef\u4fee\u6539\u6027\uff0cTS \u90fd\u4f1a\u5bf9\u5b83\u4eec\u300c\u4ece\u5bbd\u300d\u7c7b\u578b\u63a8\u65ad\n// \u4f8b\u5982\u4e0b\u9762\u7684 prop \u7684\u7c7b\u578b\u88ab\u63a8\u65ad\u4e3a string\nconst obj = { prop: 'foo' }\n")),(0,l.kt)("p",null,"\u518d\u6765\u770b\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u4f8b\u5982\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7528 ref \u7ef4\u62a4\u72b6\u6001\u7684 hook\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\n\nconst useRenderlessState = <T>(initialState: T) => {\n  const stateRef = React.useRef(initialState);\n\n  const setState = (nextState: T) => stateRef.current = nextState;\n\n  return [stateRef.current, setState];\n}\n')),(0,l.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u4f1a\u53d1\u73b0\u4e0a\u9762 hook \u7684\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u88ab\u63a8\u5bfc\u6210\u4e86\u5982\u4e0b\u7684\u6570\u7ec4\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"(T | ((nextState: T) => T))[]\n")),(0,l.kt)("p",null,"\u8fd9\u5c31\u5bfc\u81f4\u6211\u4eec\u5728\u4f7f\u7528\u7684\u65f6\u5019\u65e0\u6cd5\u5bf9\u5b83\u8fdb\u884c\u51c6\u786e\u7684\u89e3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const [value, setValue] = useRenderlessState(0);\n")),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u6211\u4eec\u53ef\u4ee5 ",(0,l.kt)("strong",{parentName:"p"},"\u663e\u793a\u58f0\u660e\u8fd4\u56de\u7c7b\u578b")," \u6216\u8005 ",(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u8fd4\u56de\u503c\u505a\u7c7b\u578b\u65ad\u8a00"),"\uff0c\u544a\u8bc9 TS \u8fd4\u56de\u503c\u7c7b\u578b\u662f\u5143\u7ec4\u800c\u4e0d\u662f\u6570\u7ec4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u663e\u793a\u58f0\u660e\u8fd4\u56de\u7c7b\u578b\nconst useRenderlessState = <T>(initialState: T): [T, (nextValue: T) => T] => {/*...*/}\n\n// \u5bf9\u8fd4\u56de\u503c\u5bf9\u7c7b\u578b\u65ad\u8a00\nconst useRenderlessState = <T>(initialState: T) => {\n  // ...\n  return [state, setState] as [typeof value, typeof setValue];\n}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4e24\u79cd\u5199\u6cd5\u90fd\u5404\u6709\u5197\u4f59\u6210\u5206\uff0c\u7b97\u4e0d\u4e0a\u4f18\u96c5\u3002"),(0,l.kt)("p",null,"\u5176\u5b9e\u4ece\u8bed\u4e49\u5c42\u9762\u6765\u5206\u6790\uff0cTS \u4e4b\u6240\u4ee5\u6ca1\u80fd\u5c06\u8fd4\u56de\u503c\u63a8\u65ad\u4e3a\u5143\u7ec4\u7c7b\u578b\u662f\u56e0\u4e3a\u5b83\u8ba4\u4e3a\u8be5\u8fd4\u56de\u503c\u4ecd\u6709\u53ef\u80fd\u88ab push \u503c\uff0c\u88ab\u4fee\u6539\u3002\u6240\u4ee5\u6211\u4eec\u771f\u6b63\u9700\u8981\u505a\u7684\u662f\u544a\u8bc9 TS\uff0c\u8fd9\u4e2a\u8fd4\u56de\u503c\u662f\u4e00\u4e2a final\uff0c\u5176\u672c\u8eab\u548c\u5c5e\u6027\u90fd\u662f\u4e0d\u53ef\u7be1\u6539\u7684\uff0c\u800c\u8fd9\u6b63\u662f\u5e38\u91cf\u65ad\u8a00\u6240\u505a\u7684\u4e8b\u3002"),(0,l.kt)("p",null,"\u5e38\u91cf\u65ad\u8a00\u53ef\u4ee5\u628a\u4e00\u4e2a\u503c\u6807\u8bb0\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u7be1\u6539\u7684\u5e38\u91cf\uff0c\u4ece\u800c\u8ba9 TS \u4ee5\u6700\u4e25\u683c\u7684\u7b56\u7565\u6765\u8fdb\u884c\u7c7b\u578b\u63a8\u65ad\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const useRenderlessState = <T>(initialState: T) => {\n  // ...\n  return [state, setState] as const\n}\n")),(0,l.kt)("p",null,"\u8fd9\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"useRenderlessState")," \u7684\u8fd4\u56de\u7c7b\u578b\u5c31\u88ab\u63a8\u65ad\u6210\u4e86\u5982\u4e0b\u7684 readonly \u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"readonly [T, (nextState: T) => T]\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"as const")," \u4e0e ES6 ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," \u5e38\u91cf\u58f0\u660e\u7684\u533a\u522b\uff1a"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"const")," \u5e38\u91cf\u58f0\u660e\u662f ES6 \u7684\u8bed\u6cd5\uff0c\u5bf9 TS \u800c\u8a00\uff0c\u5b83\u53ea\u80fd\u53cd\u6620\u8be5\u5e38\u91cf\u672c\u8eab\u662f\u4e0d\u53ef\u88ab\u91cd\u65b0\u8d4b\u503c\u7684\uff0c\u5b83\u7684\u5b50\u5c5e\u6027\u4ecd\u7136\u53ef\u4ee5\u88ab\u4fee\u6539\uff0c\u6545 TS \u53ea\u4f1a\u5bf9\u5b83\u4eec\u505a\u677e\u6563\u7684\u7c7b\u578b\u63a8\u65ad"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"as const")," \u662f TS \u7684\u8bed\u6cd5\uff0c\u5b83\u544a\u8bc9 TS \u5b83\u6240\u65ad\u8a00\u7684\u503c\u4ee5\u53ca\u8be5\u503c\u7684\u6240\u6709\u5c42\u7ea7\u7684\u5b50\u5c5e\u6027\u90fd\u662f\u4e0d\u53ef\u7be1\u6539\u7684\uff0c\u6545\u5bf9\u6bcf\u4e00\u7ea7\u5b50\u5c5e\u6027\u90fd\u4f1a\u505a\u6700\u4e25\u683c\u7684\u7c7b\u578b\u63a8\u65ad\uff08\u6240\u6709\u7684\u5b57\u9762\u91cf\u90fd\u4f1a\u88ab\u63a8\u65ad\u4e3a\u5355\u503c\u7c7b\u578b\uff09")),(0,l.kt)("p",{parentName:"div"},"\u5e38\u91cf\u65ad\u8a00\u53ef\u4ee5\u8ba9\u6211\u4eec\u4e0d\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")," \u5173\u952e\u5b57\u5c31\u80fd\u5b9a\u4e49\u679a\u4e3e\u5bf9\u8c61\uff1a"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const EnvEnum = {\n  DEV: "development",\n  PROD: "production",\n  TEST: "test",\n} as const;\n')))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/121558249"},"TypeScript \u591c\u70b9\u5fc3\uff1a\u5e38\u91cf\u65ad\u8a00")),(0,l.kt)("p",null,"\ud83d\udcd2 \u4e86\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"Symbol.toStringTag")," \u7684\u7528\u6cd5\u5417"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Symbol.toStringTag")," \u662f\u4e00\u4e2a\u5185\u7f6e symbol\uff0c\u5b83\u901a\u5e38\u4f5c\u4e3a\u5bf9\u8c61\u7684\u5c5e\u6027\u952e\u4f7f\u7528\uff0c\u5bf9\u5e94\u7684\u503c\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u7528\u6765\u8868\u793a\u8be5\u5bf9\u8c61\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\u6807\u7b7e\u3002\u901a\u5e38\u53ea\u6709\u5185\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString()")," \u65b9\u6cd5\u4f1a\u53bb\u8bfb\u53d6\u8fd9\u4e2a\u6807\u7b7e\u5e76\u628a\u5b83\u5305\u542b\u5728\u81ea\u5df1\u7684\u8fd4\u56de\u503c\u91cc\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const foo = {};\nconst bar = {\n  [Symbol.toStringTag]: \"\u6d4b\u8bd5\u5185\u5bb9\"\n}\n\nfoo.toString(); // '[object Object]'\nbar.toString(); // '[object \u6d4b\u8bd5\u5185\u5bb9]'\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag"},"Symbol.toStringTag - MDN \u6587\u6863")),(0,l.kt)("p",null,"\ud83d\udcd2 \u51fd\u6570\u7ec4\u5408\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"compose"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"flow"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pipe")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"compose")," \u5b9e\u73b0\u5982\u4e0b\uff0c\u6ce8\u610f\u8c03\u7528\u987a\u5e8f\u662f\u53cd\u8fc7\u6765\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const compose = (...fns) => x0 => fns.reduceRight(\n    (x, f) => f(x),\n    x0\n);\n\n// \u63a5\u53d7\u53c2\u6570\u540e\uff0c\u8fd4\u56de\u4e00\u4e2a\u5f85\u6267\u884c\u51fd\u6570\n// \u9700\u8981\u518d\u63a5\u53d7\u4e00\u4e2a\u521d\u59cb\u503c\u624d\u5f00\u59cb\u6267\u884c\nconst processComment = compose(\n    linkify,\n    imagify,\n    emphasize,\n    headalize\n);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"flow")," \u5b9e\u73b0\u5982\u4e0b\uff0c\u6ce8\u610f\u8fd9\u91cc\u8c03\u7528\u987a\u5e8f\u662f\u4ece\u5de6\u5230\u53f3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const flow = (...fns) => x0 => fns.reduce(\n    (x, f) => f(x),\n    x0\n);\n\n// \u6ce8\u610f\u8fd9\u91cc\u4ecd\u7136\u662f\u8fd4\u56de\u4e00\u4e2a\u5f85\u6267\u884c\u51fd\u6570\nconst processComment = flow(\n    headalize,\n    emphasize,\n    imagify,\n    linkify,\n    codify\n);\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pipe")," \u5b9e\u73b0\u5982\u4e0b\uff0c\u8c03\u7528\u987a\u5e8f\u4e5f\u662f\u4ece\u5de6\u5230\u53f3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u6ce8\u610f pipe \u76f4\u63a5\u6267\u884c\u6240\u6709\u7684\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u503c\n// \u800c flow \u8fd4\u56de\u4e00\u4e2a\u5f85\u6267\u884c\u51fd\u6570\uff0c\u9700\u8981\u518d\u63a5\u53d7\u4e00\u4e2a\u521d\u59cb\u503c\u624d\u5f00\u59cb\u6267\u884c\nconst pipe = (x0, ...fns) => fns.reduce(\n    (x, f) => f(x),\n    x0\n);\n\nconst map    = f => arr => arr.map(f);\nconst filter = p => arr => arr.filter(p);\nconst take   = n => arr => arr.slice(0, n);\nconst join   = s => arr => arr.join(s);\n\nconst comments = pipe(commentStrs,\n    filter(noNazi),\n    take(10),\n    map(emphasize),\n    map(itemize),\n    join('\\n'),\n);\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/"},"\u4ec0\u4e48\u662f JavaScript \u7684\u51fd\u6570\u7ec4\u5408")),(0,l.kt)("p",null,"\ud83d\udcd2 \u57fa\u4e8e\u4f9d\u8d56\u5012\u7f6e\u539f\u5219\u5b9e\u73b0\u63d2\u4ef6\u673a\u5236"),(0,l.kt)("p",null,"\u4f9d\u8d56\u5012\u7f6e\u539f\u5219\uff08DIP\uff09"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6838\u5fc3\u601d\u60f3\uff1a\u4f9d\u8d56\u4e00\u4e2a\u62bd\u8c61\u7684\u670d\u52a1\u63a5\u53e3\uff0c\u800c\u4e0d\u662f\u53bb\u4f9d\u8d56\u4e00\u4e2a\u5177\u4f53\u7684\u670d\u52a1\u6267\u884c\u8005\uff0c\u4ece\u4f9d\u8d56\u5177\u4f53\u5b9e\u73b0\u8f6c\u5411\u5230\u4f9d\u8d56\u62bd\u8c61\u63a5\u53e3\uff0c\u5012\u7f6e\u8fc7\u6765")),(0,l.kt)("p",null,"\u4f8b\u5982\u5728 Webpack \u4e2d\u5305\u542b\u4e00\u5957\u63d2\u4ef6\u673a\u5236\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  plugins: [\n    new WebpackBar(),\n    new webpack.HotModuleReplacementPlugin(),\n    new MiniCssExtractPlugin({\n      filename: 'css/[name].[contenthash:8].css',\n      chunkFilename: '[id].css'\n    }),\n    new HtmlWebpackPlugin({\n      template: path.join(__dirname, '../public/index.html'),\n      title: \"React App\",\n      filename: \"index.html\",\n    })\n  ]\n}\n")),(0,l.kt)("p",null,"Webpack \u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u7edf\u4e00\u7684\u63a5\u53e3\uff0c\u5373\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPlugin {\n  apply(compiler: ICompiler): void;\n}\n\nclass MyPlugin implements IPlugin {\n  constructor() {\n    // \u6784\u9020\u5668\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u63a5\u53d7\u914d\u7f6e\u53c2\u6570\n  }\n\n  @Override\n  apply(compiler) {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,"\u8fd9\u6837 Webpack \u53ea\u9700\u8981\u904d\u5386 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," \u6570\u7ec4\uff0c\u987a\u6b21\u8c03\u7528\u6bcf\u4e2a\u63d2\u4ef6\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"apply")," \u65b9\u6cd5\uff0c\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"compiler")," \u5bf9\u8c61\u5373\u53ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"plugins.forEach(plugin => plugin.apply(compiler));\n")),(0,l.kt)("p",null,"\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u6709\u540c\u5b66\u4f1a\u95ee\uff0c\u4e3a\u5565\u63d2\u4ef6\u8981\u5199\u6210 class \u7684\u5f62\u5f0f\uff0c\u76f4\u63a5\u7528\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u5417\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const MyPlugin = {\n  apply(compiler) {\n    // ...\n  }\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u76f4\u63a5\u7528\u4e00\u4e2a\u5bf9\u8c61\u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u7528 class \u663e\u7136\u66f4\u7075\u6d3b\uff0c\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u63a5\u53d7\u914d\u7f6e\u53c2\u6570")),(0,l.kt)("p",null,"\ud83d\udcd2 \u6d4f\u89c8\u5668 JavaScript \u548c Node.js \u7684\u533a\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"API \u533a\u522b\uff1a\u6d4f\u89c8\u5668 JavaScript \u662f\u9762\u5411\u6d4f\u89c8\u5668\u7f16\u7a0b\uff0c\u8c03\u7528\u6d4f\u89c8\u5668\u7684 API\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"document"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"window"),"\u3002\u800c Node.js \u662f\u9762\u5411\u64cd\u4f5c\u7cfb\u7edf\u7f16\u7a0b\uff0c\u6ca1\u6709\u6d4f\u89c8\u5668 API\uff0c\u76f8\u53cd\u53ef\u4ee5\u8c03\u7528 Node \u63d0\u4f9b\u7684\u6807\u51c6\u5e93\uff0c\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883\u533a\u522b\uff1a\u6d4f\u89c8\u5668 JavaScript \u7684\u7279\u6b8a\u6027\uff08JS \u4ee3\u7801\u9700\u8981\u7ecf\u8fc7\u7f51\u7edc\u8bf7\u6c42\uff0c\u5728\u5ba2\u6237\u7aef\u4e0b\u8f7d\u5e76\u6267\u884c\uff09\uff0c\u56e0\u6b64\u65e0\u6cd5\u9009\u62e9\u8fd0\u884c\u73af\u5883\uff0c\u9700\u8981\u8003\u8651\u8bed\u6cd5\u3001API \u517c\u5bb9\u6027\u95ee\u9898\uff0c\u9700\u8981\u4f7f\u7528 Babel \u5904\u7406\u3002\u800c Node.js \u901a\u5e38\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u3001CI \u73af\u5883\u3001\u670d\u52a1\u7aef\u8fd0\u884c\uff0c\u53ef\u4ee5\u63a7\u5236\u8fd0\u884c\u73af\u5883\uff0c\u65e0\u9700\u8003\u8651\u517c\u5bb9\u6027\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u5757\u89c4\u8303\u533a\u522b\uff1a\u6d4f\u89c8\u5668\u539f\u672c\u6ca1\u6709\u6a21\u5757\u673a\u5236\uff0c\u4f46\u53ef\u4ee5\u81ea\u884c\u5b9e\u73b0\u6a21\u5757\u547d\u540d\u7a7a\u95f4\u673a\u5236\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"browserify"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"webpack"),"\uff09\uff0c\u4ece Chrome 61 \u5f00\u59cb\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},'<script type="module">'),"\uff0c\u5373\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"import")," \u547d\u4ee4\u52a0\u8f7d\u6a21\u5757\uff08\u9700\u8981\u6ce8\u610f\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u662f\u8981\u7ecf\u8fc7\u7f51\u7edc\u8bf7\u6c42\uff09\u3002\u800c Node.js \u81ea\u5e26\u4e86\u4e00\u5957 CommonJS \u6a21\u5757\u673a\u5236\uff0c\u5728 Node 14 \u4e4b\u540e\u652f\u6301 ES Module \u89c4\u8303\uff08\u6ce8\u610f CommonJS \u4ecd\u7136\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u6a21\u5757\u89c4\u8303\uff09")))}d.isMDXComponent=!0}}]);