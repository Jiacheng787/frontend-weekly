"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[1036],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),k=a,f=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),p=["components"],o={slug:"5\u670815\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u670815\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},i=void 0,u={permalink:"/frontend-weekly/blog/5\u670815\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-05-15/index.md",source:"@site/blog/2022-05-15/index.md",title:"5\u670815\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 \u4f7f\u7528 DefinePlugin \u9047\u5230\u7684\u95ee\u9898",date:"2022-05-15T00:00:00.000Z",formattedDate:"May 15, 2022",tags:[],readingTime:5.975,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"5\u670815\u65e5\u5185\u5bb9\u6c47\u603b",title:"5\u670815\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"5\u67088\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/5\u67088\u65e5\u5185\u5bb9\u6c47\u603b"}},c={authorsImageUrls:[void 0]},m=[],s={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83d\udcd2 \u4f7f\u7528 DefinePlugin \u9047\u5230\u7684\u95ee\u9898"),(0,l.kt)("p",null,"\u5728\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u5e93\uff0c\u9700\u8981\u533a\u5206\u8fd0\u884c\u73af\u5883\uff0c\u6839\u636e\u73af\u5883\u6253\u5305\u76f8\u5e94\u7684\u6a21\u5757\u4ee3\u7801\u3002\u6839\u636e Webpack \u4ee3\u7801\u4f18\u5316\uff08\u751f\u4ea7\u73af\u5883\u9ed8\u8ba4\u542f\u7528\uff09\u7684\u65f6\u5019\uff0cterser \u4f1a\u505a DCE\uff08\u65e0\u7528\u4ee3\u7801\u79fb\u9664\uff09\u5904\u7406\uff0c\u8fdb\u800c\u4f18\u5316\u6253\u5305\u4f53\u79ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728 Webpack \u4ee3\u7801\u4f18\u5316\u7684\u65f6\u5019\n// terser \u4f1a\u8bc6\u522b\u51fa\u201c\u4e1a\u52a12\u201d\u7684\u4ee3\u7801\u4e3a\u65e0\u7528\u4ee3\u7801\uff0c\u8fdb\u800c\u79fb\u9664\u6389\n// \u53ea\u4fdd\u7559\u201c\u4e1a\u52a11\u201d\u7684\u4ee3\u7801\n\nif (true) {\n  // \u4e1a\u52a1 1\n}\n\nif (false) {\n  // \u4e1a\u52a1 2\n}\n")),(0,l.kt)("p",null,"\u539f\u5148\u7684\u65b9\u5f0f\u5728\u4e00\u4e2a\u6a21\u5757\u4e2d\u5b9a\u4e49\u5e38\u91cf\uff0c\u7136\u540e\u5176\u4ed6\u6a21\u5757\u5f15\u5165\u5e38\u91cf\u8fdb\u884c\u5224\u65ad\u3002\u8fd9\u91cc\u8981\u6ce8\u610f\u4e00\u4e2a\u95ee\u9898\uff0c\u5728 Webpack \u4ee3\u7801\u4f18\u5316\u7684\u65f6\u5019\uff0cterser \u5e76\u4e0d\u4f1a\u505a\u7a0b\u5e8f\u6d41\u5206\u6790\uff0c\u4e5f\u5c31\u662f\u8bf4\u8bbf\u95ee\u4e0d\u5230\u6a21\u5757\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cterser \u53ef\u80fd\u8fd8\u662f\u4f1a\u5c06\u6a21\u5757\u5bfc\u51fa\u7684\u5e38\u91cf\u5f53\u505a\u53d8\u91cf\u5904\u7406\uff0c\u4ece\u800c\u5bfc\u81f4 DCE \u5931\u6548\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u80fd\u901a\u8fc7\u6a21\u5757\u65b9\u5f0f\u5f15\u5165\u5e38\u91cf\uff0c\u800c\u662f\u8981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"DefinePlugin")," \u76f4\u63a5\u628a\u53d8\u91cf\u66ff\u6362\u4e3a\u5bf9\u5e94\u7684\u5b57\u9762\u91cf\u3002"),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/y0QGSI-VZcy9CCe_cHezlw"},"\u6cbb\u7406\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u5173\u7cfb\uff0c\u8bd5\u8bd5\u8fd9\u8258\u300c\u4f9d\u8d56\u5de1\u6d0b\u8230\u300d")),(0,l.kt)("p",null,"\ud83d\udcd2 \u3010\u524d\u7aef\u90e8\u7f72\u5341\u4e8c\u7bc7\u3011\u4f7f\u7528 CI \u4e2d\u7684\u7f13\u5b58\u8fdb\u884c Pipeline \u4f18\u5316"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528 webpack 5 \u8fdb\u884c\u6784\u5efa\u65f6\uff0c\u5982\u679c\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"filesystem cache"),"\uff0c\u56e0\u4e3a\u5728\u78c1\u76d8\u4e2d\u542b\u6709\u7f13\u5b58 (node_modules/.cache)\uff0c\u4e8c\u6b21\u6784\u5efa\u5f80\u5f80\u6bd4\u4e00\u6b21\u6784\u5efa\u5feb\u901f\u5341\u51e0\u500d\u3002"),(0,l.kt)("p",null,"\u800c\u5728 CICD \u4e2d\uff0c\u8fd9\u4e9b\u90fd\u5931\u53bb\u4e86\u610f\u4e49\uff0c\u56e0\u4e3a CICD \u6bcf\u6b21 Job \u90fd\u76f8\u5f53\u4e8e\u65b0\u5efa\u4e86\u4e00\u4e2a\u76ee\u5f55\uff0c\u300c\u6bcf\u6b21\u6784\u5efa\u90fd\u76f8\u5f53\u4e8e\u662f\u9996\u6b21\u6784\u5efa\u300d\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0cCI \u63d0\u4f9b\u4e86\u4e00\u4e9b\u7f13\u5b58\u673a\u5236\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e9b\u8d44\u6e90\u8fdb\u884c\u7f13\u5b58\u3002\u5982\u679c\u6bcf\u6b21\u53ef\u4ee5\u5c06\u7f13\u5b58\u53d6\u51fa\u6765\uff0c\u5219\u5927\u5927\u52a0\u901f\u4e86\u524d\u7aef\u90e8\u7f72\u7684\u901f\u5ea6\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/7300HTz9nOOuCq_xTwXHhg"},"\u3010\u524d\u7aef\u90e8\u7f72\u5341\u4e8c\u7bc7\u3011\u4f7f\u7528 CI \u4e2d\u7684\u7f13\u5b58\u8fdb\u884c Pipeline \u4f18\u5316")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/f8mYoozpLrnSfWcRHTMa7A"},"UMI3\u6e90\u7801\u89e3\u6790\u7cfb\u5217\u4e4b\u6838\u5fc3service\u7c7b\u521d\u59cb\u5316")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/fPcdVCqWvkPqAdVK7JHacg"},"\u3010\u7b2c2610\u671f\u3011JavaScript Containers")),(0,l.kt)("p",null,"\ud83d\udcd2 \u3010\u524d\u7aef\u90e8\u7f72\u5341\u4e00\u7bc7\u3011\u901a\u8fc7 CICD \u5b9e\u8df5 Lint\u3001Test\u3001Performance \u7b49\u524d\u7aef\u8d28\u91cf\u4fdd\u969c\u5de5\u7a0b"),(0,l.kt)("p",null,"\u5728 CI \u64cd\u4f5c\u4fdd\u969c\u4ee3\u7801\u8d28\u91cf\u7684\u73af\u8282\u4e2d\uff0c\u53ef\u786e\u5b9a\u4ee5\u4e0b\u65f6\u673a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# 1. \u5f53\u529f\u80fd\u5206\u652f\u4ee3\u7801 push \u5230\u8fdc\u7a0b\u4ed3\u5e93\u540e\uff0c\u8fdb\u884c CI\non:\n  push:\n    branches:    \n      - 'feature/**'\n\n# 2. \u5f53\u529f\u80fd\u5206\u652f\u4ee3\u7801 push \u5230\u8fdc\u7a0b\u4ed3\u5e93\u4ee5\u53ca\u662f Pull Request \u540e\uff0c\u8fdb\u884c CI\non:\n  pull_request:\n    types:\n      # \u5f53\u65b0\u5efa\u4e86\u4e00\u4e2a PR \u65f6\n      - opened\n      # \u5f53\u63d0\u4ea4 PR \u7684\u5206\u652f\uff0c\u672a\u5408\u5e76\u524d\u5e76\u62e5\u6709\u65b0\u7684 Commit \u65f6\n      - synchronize\n    branches:    \n      - 'feature/**'\n")),(0,l.kt)("p",null,"CRA \u5185\u90e8\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint Plugin")," \u8fdb\u884c\u4ee3\u7801\u68c0\u67e5\uff0c\u800c\u975e\u547d\u4ee4\u7684\u65b9\u5f0f\u3002\u5f53 ESLint \u5b58\u5728\u95ee\u9898\u65f6\uff0cCRA \u5982\u679c\u5224\u65ad\u5f53\u524d\u662f CI \u73af\u5883\uff0c\u5219\u76f4\u63a5\u62a5\u9519\u5e76\u9000\u51fa\u8fdb\u7a0b\uff0c\u5bfc\u81f4\u6253\u5305\u5931\u8d25\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new ESLintPlugin({\n  // Plugin options\n  // ...\n  failOnError: !(isEnvDevelopment && emitErrorsAsWarnings),\n})\n")),(0,l.kt)("p",null,"Lint \u548c Test \u4ec5\u662f CI \u4e2d\u6700\u5e38\u89c1\u7684\u9636\u6bb5\u3002\u4e3a\u4e86\u4fdd\u969c\u6211\u4eec\u7684\u524d\u7aef\u4ee3\u7801\u8d28\u91cf\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u4ee5\u4e0b\u9636\u6bb5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Audit: \u4f7f\u7528 npm audit \u6216\u8005 snyk \u68c0\u67e5\u4f9d\u8d56\u7684\u5b89\u5168\u98ce\u9669"),(0,l.kt)("li",{parentName:"ul"},"Quality: \u4f7f\u7528 SonarQube \u68c0\u67e5\u4ee3\u7801\u8d28\u91cf"),(0,l.kt)("li",{parentName:"ul"},"Container Image: \u4f7f\u7528 trivy \u626b\u63cf\u5bb9\u5668\u955c\u50cf\u5b89\u5168\u98ce\u9669"),(0,l.kt)("li",{parentName:"ul"},"End to End: \u4f7f\u7528 Playwright \u8fdb\u884c UI \u81ea\u52a8\u5316\u6d4b\u8bd5"),(0,l.kt)("li",{parentName:"ul"},"Bundle Chunk Size Limit: \u4f7f\u7528 size-limit \u9650\u5236\u6253\u5305\u4f53\u79ef\uff0c\u6253\u5305\u4f53\u79ef\u8fc7\u5927\u5219\u65e0\u6cd5\u901a\u8fc7\u5408\u5e76"),(0,l.kt)("li",{parentName:"ul"},"Performance (Lighthouse CI): \u4f7f\u7528 lighthouse CI \u4e3a\u6bcf\u6b21 PR \u901a\u8fc7 Lighthouse \u6253\u5206\uff0c\u5982\u6253\u5206\u8fc7\u4f4e\u5219\u65e0\u6cd5\u901a\u8fc7\u5408\u5e76")),(0,l.kt)("p",null,"\u6709\u4e9b\u7ec6\u5fc3\u5e76\u77e5\u8bc6\u9762\u5e7f\u6cdb\u7684\u540c\u5b66\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\uff0c\u67d0\u4e9b CI \u5de5\u4f5c\u4e5f\u53ef\u5728 Git Hooks \u5b8c\u6210\uff0c\u786e\u5b9e\u5982\u6b64\u3002"),(0,l.kt)("p",null,"\u5b83\u4eec\u7684\u6700\u5927\u7684\u533a\u522b\u5728\u4e8e\u4e00\u4e2a\u662f\u5ba2\u6237\u7aef\u68c0\u67e5\uff0c\u4e00\u4e2a\u662f\u670d\u52a1\u7aef\u68c0\u67e5\u3002\u800c\u5ba2\u6237\u7aef\u68c0\u67e5\u662f\u5929\u751f\u4e0d\u53ef\u4fe1\u4efb\u7684\u3002"),(0,l.kt)("p",null,"\u800c\u9488\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"git hooks")," \u800c\u8a00\uff0c\u5f88\u5bb9\u6613\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"git commit --no-verify")," \u800c\u8df3\u8fc7\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/D7nXxYUMdMuo1du6fHnT-g"},"\u3010\u524d\u7aef\u90e8\u7f72\u5341\u4e00\u7bc7\u3011\u901a\u8fc7 CICD \u5b9e\u8df5 Lint\u3001Test\u3001Performance \u7b49\u524d\u7aef\u8d28\u91cf\u4fdd\u969c\u5de5\u7a0b")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/fhSMz8BEIyjFGVnJtcVrKg"},"\u3010\u7b2c2609\u671f\u3011Javascript\u4e4b\u8fea\u7c73\u7279\u6cd5\u5219")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/01sTK6w4BFUzoRc2NKCs1w"},"React \u5e76\u53d1\u6e32\u67d3\u7684\u524d\u4e16\u4eca\u751f")),(0,l.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u4f18\u96c5\u5b9e\u73b0\u8f6e\u8be2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521d\u7ea7\uff1a\u4f7f\u7528\u5b9a\u65f6\u5668\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"setInterval"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u7ea7\uff1a\u4f7f\u7528\u57fa\u4e8e\u4e8b\u4ef6\u5faa\u73af\u7684\u9012\u5f52\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u9012\u5f52\u8c03\u7528\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u7ea7\uff1a\u4f7f\u7528\u8f6e\u8be2\u8c03\u5ea6\u5668")),(0,l.kt)("p",null,"\ud83d\udcd2 npm \u5305\u7684\u5165\u53e3\u70b9"),(0,l.kt)("p",null,"\u6ce8\u610f ",(0,l.kt)("inlineCode",{parentName:"p"},"exports")," \u5b57\u6bb5\u4f18\u5148\u7ea7\u6700\u9ad8\uff0c\u5f53\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"exports")," \u5b57\u6bb5\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"module")," \u5b57\u6bb5\u4f1a\u88ab\u8986\u76d6\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exports")," \u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u63a7\u5236\u5b50\u76ee\u5f55\u7684\u8bbf\u95ee\u8def\u5f84\uff0c\u4e0d\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"exports")," \u5b57\u6bb5\u4e2d\u7684\u6a21\u5757\uff0c\u5373\u4f7f\u76f4\u63a5\u8bbf\u95ee\u8def\u5f84\uff0c\u4e5f\u65e0\u6cd5\u5f15\u7528\uff01"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7025809061660590087"},"\u5de5\u7a0b\u5316\u77e5\u8bc6\u5361\u7247 014: \u53d1\u5305\u7bc7\u4e4b package.json \u4e2d main\u3001export\u3001module \u7684\u533a\u522b\u4f55\u5728")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://nodejs.cn/api/packages.html#main-entry-point-export"},"http://nodejs.cn/api/packages.html#main-entry-point-export")),(0,l.kt)("p",null,"\ud83d\udcd2 \u4f7f\u7528 Next.js \u548c MDX \u6784\u5efa\u4f60\u81ea\u5df1\u7684\u535a\u5ba2"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/how-to-build-your-own-blog-with-next-js-and-mdx/"},"https://www.freecodecamp.org/news/how-to-build-your-own-blog-with-next-js-and-mdx/"))),(0,l.kt)("p",null,"\ud83d\udcd2 React Concurrent \u7684\u6545\u4e8b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NZoRlVi3MjQ"},"https://www.youtube.com/watch?v=NZoRlVi3MjQ"))),(0,l.kt)("p",null,"\u2b50\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/toQUgqJHeUbFZMtxfzFCxw"},"TCP \u91cd\u4f20\u3001\u6ed1\u52a8\u7a97\u53e3\u3001\u6d41\u91cf\u63a7\u5236\u3001\u62e5\u585e\u63a7\u597d\u96be\uff1f\u770b\u5b8c\u56fe\u89e3\u5c31\u4e0d\u6101\u4e86")),(0,l.kt)("p",null,"\u2b50\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/9kHoRk6QIYOFUR_PCmHY6g"},"TCP \u5c31\u6ca1\u4ec0\u4e48\u7f3a\u9677\u5417\uff1f")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/b9Ye4iShgTSAcm0ce6m_9Q"},"React Server Components\uff1a\u6211\u4eec\u5373\u5c06\u548c API \u544a\u522b\uff1f")))}k.isMDXComponent=!0}}]);