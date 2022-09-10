"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[5855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,d=u["".concat(i,".").concat(k)]||u[k]||m[k]||o;return n?a.createElement(d,p(p({ref:t},c),{},{components:n})):a.createElement(d,p({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const o={slug:"12\u670812\u65e5\u5185\u5bb9\u6c47\u603b",title:"12\u670812\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["TypeScript","React","Node.js","CSS in JS"]},p=void 0,l={permalink:"/frontend-weekly/blog/12\u670812\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-12-12/index.md",source:"@site/blog/2021-12-12/index.md",title:"12\u670812\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u4f18\u96c5\u83b7\u53d6 package.json \u6587\u4ef6",date:"2021-12-12T00:00:00.000Z",formattedDate:"December 12, 2021",tags:[{label:"TypeScript",permalink:"/frontend-weekly/blog/tags/type-script"},{label:"React",permalink:"/frontend-weekly/blog/tags/react"},{label:"Node.js",permalink:"/frontend-weekly/blog/tags/node-js"},{label:"CSS in JS",permalink:"/frontend-weekly/blog/tags/css-in-js"}],readingTime:5.715,hasTruncateMarker:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"12\u670812\u65e5\u5185\u5bb9\u6c47\u603b",title:"12\u670812\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["TypeScript","React","Node.js","CSS in JS"]},prevItem:{title:"12\u670819\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/12\u670819\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"12\u67085\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/12\u67085\u65e5\u5185\u5bb9\u6c47\u603b"}},i={authorsImageUrls:[void 0]},s=[],c={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcd2 \u4f18\u96c5\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6"),(0,r.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u4e00\u4e2a\u95ee\u9898\uff0c\u5728 ES module \u89c4\u8303\u4e0b\u65e0\u6cd5\u76f4\u63a5\u5f15\u5165 JSON \u6587\u4ef6\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," \u83b7\u53d6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// ES module \u6a21\u5757\nimport React from "react";\nimport { debounce } from "lodash-es";\n// JSON \u6a21\u5757\u53ea\u80fd\u901a\u8fc7 CJS \u65b9\u5f0f\u52a0\u8f7d\nconst package = require("package.json");\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u547d\u4ee4\u76ee\u524d\u53ea\u80fd\u7528\u4e8e\u52a0\u8f7d ES \u6a21\u5757\uff0c\u73b0\u5728\u6709\u4e00\u4e2a\u63d0\u6848\uff0c\u5141\u8bb8\u52a0\u8f7d JSON \u6a21\u5757\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u547d\u4ee4\u80fd\u591f\u76f4\u63a5\u52a0\u8f7d JSON \u6a21\u5757\u4ee5\u540e\uff0c\u5c31\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u5199:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import configData from './config.json' assert { type: \"json\" };\nconsole.log(configData.appName);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u547d\u4ee4\u5bfc\u5165 JSON \u6a21\u5757\u65f6\uff0c\u547d\u4ee4\u7ed3\u5c3e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},'assert {type: "json"}')," \u4e0d\u53ef\u7f3a\u5c11\u3002\u8fd9\u53eb\u505a\u5bfc\u5165\u65ad\u8a00\uff0c\u7528\u6765\u544a\u8bc9 JavaScript \u5f15\u64ce\uff0c\u73b0\u5728\u52a0\u8f7d\u7684\u662f JSON \u6a21\u5757")),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93 ",(0,r.kt)("inlineCode",{parentName:"p"},"read-pkg")," \u83b7\u53d6\uff0c\u539f\u7406\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"fs")," \u6a21\u5757\u8bfb\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\uff0c\u7136\u540e\u53cd\u5e8f\u5217\u5316\u4e3a JS \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import process from 'node:process';\nimport fs, {promises as fsPromises} from 'node:fs';\nimport path from 'node:path';\nimport parseJson from 'parse-json';\nimport normalizePackageData from 'normalize-package-data';\n\nexport async function readPackage({cwd = process.cwd(), normalize = true} = {}) {\n    const filePath = path.resolve(cwd, 'package.json');\n    const json = parseJson(await fsPromises.readFile(filePath, 'utf8'));\n\n    if (normalize) {\n        normalizePackageData(json);\n    }\n\n    return json;\n}\n")),(0,r.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u8986\u76d6\u67d0\u4e9b\u5143\u7d20\u7684\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f"),(0,r.kt)("p",null,"\u5f88\u591a\u5143\u7d20\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="text" />'),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="checkbox" />')," \u5177\u6709\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f\uff0c\u6709\u65f6\u5019\u9700\u8981\u81ea\u5df1\u6307\u5b9a\u6837\u5f0f\uff0c\u5982\u4f55\u8986\u76d6\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f\uff0c\u53ea\u9700\u8981\u4e0b\u9762\u4e00\u884c\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"input {\n    -webkit-appearance: none;\n}\n")),(0,r.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u8ba9 div \u6309\u6bd4\u4f8b\u7f29\u653e"),(0,r.kt)("p",null,"\u6709\u65f6\u5e0c\u671b div \u81ea\u9002\u5e94\u9875\u9762\u5bbd\u5ea6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6309\u6bd4\u4f8b\u7f29\u653e\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"aspect-ratio")," \u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"div {\n    aspect-ratio: auto 1 / 1;\n}\n")),(0,r.kt)("p",null,"\u63a8\u8350\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ratio")," \u524d\u9762\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"auto")," \uff0c\u5bf9\u4e8e input \u7b49\u5177\u6709\u56fa\u6709\u5bbd\u9ad8\u6bd4\u7684\u66ff\u6362\u5143\u7d20\u5c06\u4f7f\u7528\u9ed8\u8ba4\u5bbd\u9ad8\u6bd4\uff0c\u5426\u5219\u5c31\u4f7f\u7528\u6307\u5b9a\u7684\u5bbd\u9ad8\u6bd4\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"aspect-ratio")," \u517c\u5bb9 Chrome > 87 \uff0c\u6240\u6709\u7684 IE \u6d4f\u89c8\u5668\u90fd\u4e0d\u517c\u5bb9")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/aspect-ratio"},"aspect-ratio - MDN")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/2021/11/maintain-large-nextjs-application/"},"\u5982\u4f55\u7ef4\u62a4\u4e00\u4e2a\u5927\u578b\u7684 Next.js \u5e94\u7528")),(0,r.kt)("p",null,"\ud83d\udcd2 Goober\uff1aCSS-in-JS \u65b9\u6848"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a 1 KB \u5927\u5c0f\u7684 CSS-in-JS \u65b9\u6848\uff0c\u53ef\u4ee5\u66ff\u4ee3 23 KB \u7684 styled-components \u548c emotion \u7ec4\u5408\u3002\u800c\u4e14\u5982\u679c\u4f60\u53ef\u4ee5\u51cf\u5c11 goober \u5e93 gzip \u540e\u7684\u4f53\u79ef\uff0c\u4ed6\u4eec\u8fd8\u4f1a\u5956\u52b1\u4f60\u7f8e\u5143\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/cristianbote/goober"},"https://github.com/cristianbote/goober"))),(0,r.kt)("p",null,"\ud83d\udcd2 \u4f7f\u7528\u652f\u6301 Tree Shaking \u7684\u5305"),(0,r.kt)("p",null,"\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u5e94\u5c3d\u91cf\u4f7f\u7528\u652f\u6301 Tree Shaking \u7684 npm \u5305\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"lodash-es")," \u66ff\u4ee3 ",(0,r.kt)("inlineCode",{parentName:"li"},"lodash")," \uff0c\u6216\u8005\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"babel-plugin-lodash")," \u5b9e\u73b0\u7c7b\u4f3c\u6548\u679c")),(0,r.kt)("p",null,"\ud83d\udcd2 win10 \u5b89\u88c5 nvm-windows"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows/releases"},"https://github.com/coreybutler/nvm-windows/releases"))),(0,r.kt)("p",null,"\u7528\u6cd5\u8ddf mac \u4e0a\u7684 nvm \u7c7b\u4f3c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5 nodejs v16.13.1\n$ nvm install 16.13.1\n\n# \u67e5\u770b\u5df2\u5b89\u88c5\u7684 nodejs \u7248\u672c\n$ nvm list\n\n# \u4f7f\u7528\u6307\u5b9a\u7248\u672c\u7684 nodejs\n$ nvm use 16.13.1\n\n# \u5378\u8f7d\u67d0\u4e2a\u7248\u672c\u7684 nodejs\n$ nvm uninstall 16.13.1\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e2a\u4eba\u731c\u6d4b\u662f\u901a\u8fc7\u4fee\u6539\u73af\u5883\u53d8\u91cf\u5b9e\u73b0 node \u7248\u672c\u5207\u6362")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u7684\u65f6\u5019\u9047\u5230\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u8001\u7248\u672c nodejs  \u7684\u65f6\u5019\uff0cnode \u5b89\u88c5\u6210\u529f\uff0c\u4f46\u662f npm \u5b89\u88c5\u5931\u8d25\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"nvm use")," \u5207\u6362 node \u7248\u672c\u7684\u65f6\u5019\u62a5\u9519\uff1b")),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u95ee\u9898\uff0c\u7ed9 nvm \u914d\u7f6e\u6dd8\u5b9d\u955c\u50cf\u5373\u53ef\u89e3\u51b3\u3002\u627e\u5230 nvm \u5b89\u88c5\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.txt")," \u6587\u4ef6\uff0c\u6dfb\u52a0\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node_mirror: https://npm.taobao.org/mirrors/node/\nnpm_mirror: https://npm.taobao.org/mirrors/npm/\n")),(0,r.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u95ee\u9898\uff0c\u9996\u5148\u68c0\u67e5 nvm \u5b89\u88c5\u8def\u5f84\u6ca1\u6709\u4e2d\u6587\u3001\u6ca1\u6709\u7a7a\u683c\uff0c\u7136\u540e\u5982\u679c\u95ee\u9898\u8fd8\u5728\uff0c\u90a3\u5c31\u662f\u6743\u9650\u95ee\u9898\uff0c\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u6253\u5f00 cmd \u5373\u53ef\u6b63\u5e38\u5207\u6362\u3002"),(0,r.kt)("p",null,"\ud83d\udcd2 \u83b7\u53d6 worker \u7ebf\u7a0b\u6700\u5927\u5e76\u53d1\u6570"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0b\u9762\u7684\u53ea\u8bfb\u5c5e\u6027\u83b7\u53d6\u7528\u6237\u8ba1\u7b97\u673a\u7684\u903b\u8f91\u5185\u6838\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"logicalProcessors = window.navigator.hardwareConcurrency\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u903b\u8f91\u5185\u6838\u521b\u5efa\u4e00\u4e2a worker \u7ebf\u7a0b\uff0c\u5145\u5206\u5229\u7528 CPU \u8d44\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let workerList = [];\n\nfor (let i = 0; i < window.navigator.hardwareConcurrency; i++) {\n  let newWorker = {\n    worker: new Worker('cpuworker.js'),\n    inUse: false\n  };\n  workerList.push(newWorker);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/hardwareConcurrency"},"Navigator.hardwareConcurrency - MDN")),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7039315081150087181"},"TypeScript\u7c7b\u578b\u4e2d\u7684\u9006\u53d8\u534f\u53d8")),(0,r.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u4f18\u96c5\u5f15\u5165 node \u5185\u7f6e\u6a21\u5757"),(0,r.kt)("p",null,"\u5728\u5f15\u7528 node \u5185\u7f6e\u6a21\u5757\u7684\u65f6\u5019\u53ef\u4ee5\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"node:")," \u524d\u7f00\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import util from 'node:util';\nimport { promisify } from 'node:util';\nimport { spawn, exec } from 'node:child_process';\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u589e\u52a0\u524d\u7f00\uff0c\u53ef\u4ee5\u5c06 node \u5185\u7f6e\u6a21\u5757\u4e0e\u5176\u4ed6\u7b2c\u4e09\u65b9\u6a21\u5757\u533a\u5206\u5f00\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import process from 'node:process';\nimport fs, {promises as fsPromises} from 'node:fs';\nimport path from 'node:path';\nimport parseJson from 'parse-json';\nimport normalizePackageData from 'normalize-package-data';\n")),(0,r.kt)("p",null,"\u770b\u5230\u8fd9\u8fb9\u6709\u540c\u5b66\u4f1a\u95ee\uff0c\u4e3a\u5565 node \u4e2d\u53ef\u4ee5\u4f7f\u7528 ES module\uff0c\u5b9e\u9645\u4e0a\u73b0\u5728 node \u5df2\u7ecf\u652f\u6301\u4e86 ES module \uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u8bbe\u7f6e\u5982\u4e0b\u5b57\u6bb5\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    name: "xxx",\n    version: "1.0.0"\n    type: "module", // \u9ed8\u8ba4 commonjs\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7037270522236764167"},"\u4ece vue-cli \u6e90\u7801\u4e2d\uff0c\u6211\u53d1\u73b027\u884c\u8bfb\u53d6 json \u6587\u4ef6\u6709\u8da3\u7684 npm \u5305")),(0,r.kt)("p",null,"\ud83d\udcd2 gradient-string: \u5728\u7ec8\u7aef\u4e2d\u8f93\u51fa\u6f02\u4eae\u7684\u6e10\u53d8\u8272"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(11343).Z,width:"1658",height:"504"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/bokub/gradient-string"},"https://github.com/bokub/gradient-string"))),(0,r.kt)("p",null,"\ud83d\udcd2 ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6978654109893132318"},"\u624b\u5199\u7cfb\u5217-\u5b9e\u73b0\u4e00\u4e2a\u94c2\u91d1\u6bb5\u4f4d\u7684 React")))}m.isMDXComponent=!0},11343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gradient-string-6a95d701732c9caa07d650ac9cc6c73b.png"}}]);