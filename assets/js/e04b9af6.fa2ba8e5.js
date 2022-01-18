"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[9153],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),s=a,g=f["".concat(p,".").concat(s)]||f[s]||m[s]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7580:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return s}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={slug:"1\u670823\u65e5\u5185\u5bb9\u6c47\u603b",title:"1\u670823\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["git","ESLint","Prettier","yaml"]},p=void 0,u={permalink:"/frontend-weekly/blog/1\u670823\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-23/index.md",source:"@site/blog/2022-01-23/index.md",title:"1\u670823\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 Golang \u521b\u5efa\u5bf9\u8c61\u6307\u9488\u7684\u4e09\u79cd\u65b9\u5f0f",date:"2022-01-23T00:00:00.000Z",formattedDate:"January 23, 2022",tags:[{label:"git",permalink:"/frontend-weekly/blog/tags/git"},{label:"ESLint",permalink:"/frontend-weekly/blog/tags/es-lint"},{label:"Prettier",permalink:"/frontend-weekly/blog/tags/prettier"},{label:"yaml",permalink:"/frontend-weekly/blog/tags/yaml"}],readingTime:1.15,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"1\u670816\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/1\u670816\u65e5\u5185\u5bb9\u6c47\u603b"}},c={authorsImageUrls:[void 0]},m=[],f={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83d\udcd2 Golang \u521b\u5efa\u5bf9\u8c61\u6307\u9488\u7684\u4e09\u79cd\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// \u7b2c\u4e00\u79cd\uff1a\u5bf9\u5df2\u6709\u7684\u503c\u7c7b\u578b\u4f7f\u7528 `&` \u64cd\u4f5c\u7b26\nms := myStruct{foo: 42}\np := &ms\n\n// \u7b2c\u4e8c\u79cd\uff1a\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u4f7f\u7528 `&` \u64cd\u4f5c\u7b26\np := &myStruct{foo: 42}\n\n// \u7b2c\u4e09\u79cd\uff1a\u4f7f\u7528 `new` \u5173\u952e\u5b57\uff0c\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u80fd\u5728\u521d\u59cb\u5316\u7684\u65f6\u5019\u8fdb\u884c\u8d4b\u503c\nvar ms *myStruct = new(myStruct)\n")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7048970987500470279"},"\u516d\u5343\u5b57\u8be6\u89e3\uff01vue3 \u54cd\u5e94\u5f0f\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f")),(0,l.kt)("p",null,"\u2b50\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ngneat/elf"},"elf: \u4f7f\u7528 RxJs \u7684\u54cd\u5e94\u5f0f\u72b6\u6001\u7ba1\u7406")),(0,l.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u9632\u6b62 CSS \u6837\u5f0f\u6c61\u67d3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u547d\u540d\u7ea6\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"CSS Modules"),(0,l.kt)("li",{parentName:"ul"},"CSS in JS")),(0,l.kt)("p",null,"\u5176\u4e2d\u547d\u540d\u7ea6\u5b9a\u6700\u6d41\u884c\u7684\u65b9\u5f0f\u662f BEM 101\u3002\u5b83\u4ee3\u8868\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Block"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Element"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Modifier")," \u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"[block]__[element]--[modifier]\n/* Example */\n.menu__link--blue {\n  ...\n}\n")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7040849488998563848"},"\u73b0\u4ee3\u914d\u7f6e\u6307\u5357\u2014\u2014YAML \u6bd4 JSON \u9ad8\u7ea7\u5728\u54ea\uff1f")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7029512357428592648"},"\u524d\u7aef\u67b6\u6784\u5e08\u795e\u6280\uff0c\u4e09\u62db\u7edf\u4e00\u56e2\u961f\u4ee3\u7801\u98ce\u683c")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7024043015794589727"},"\u524d\u7aef\u67b6\u6784\u5e08\u7684 git \u529f\u529b\uff0c\u4f60\u6709\u51e0\u6210\u706b\u5019\uff1f")))}s.isMDXComponent=!0}}]);