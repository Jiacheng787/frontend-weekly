"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[1045],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),p=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},s=function(n){var e=p(n.components);return r.createElement(o.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,o=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),c=p(t),f=a,h=c["".concat(o,".").concat(f)]||c[f]||m[f]||i;return t?r.createElement(h,u(u({ref:e},s),{},{components:t})):r.createElement(h,u({ref:e},s))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,u=new Array(i);u[0]=c;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l.mdxType="string"==typeof n?n:a,u[1]=l;for(var p=2;p<i;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4084:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),u=["components"],l={slug:"4\u670817\u65e5\u5185\u5bb9\u6c47\u603b",title:"4\u670817\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},o=void 0,p={permalink:"/frontend-weekly/blog/4\u670817\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-04-17/index.md",source:"@site/blog/2022-04-17/index.md",title:"4\u670817\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 JS \u76f8\u5173\u6280\u5de7",date:"2022-04-17T00:00:00.000Z",formattedDate:"April 17, 2022",tags:[],readingTime:4.615,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],frontMatter:{slug:"4\u670817\u65e5\u5185\u5bb9\u6c47\u603b",title:"4\u670817\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:[]},prevItem:{title:"4\u670824\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/4\u670824\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"4\u670810\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/4\u670810\u65e5\u5185\u5bb9\u6c47\u603b"}},s={authorsImageUrls:[void 0]},m=[],c={toc:m};function f(n){var e=n.components,t=(0,a.Z)(n,u);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud83d\udcd2 JS \u76f8\u5173\u6280\u5de7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// 1. \u6570\u7ec4\u8f6c\u5bf9\u8c61\nconst dict: Record<number, boolean> = Object.fromEntries(\n    array.map(i => [i, true])\n)\n\n// 2. \u4f7f\u7528 Array.from \u521d\u59cb\u5316\u6570\u7ec4\nconst digits = Array.from({ length: 10 }, (_, i) => i);\n\n// 3. \u5b57\u7b26\u4e32\u8f6c\u6570\u7ec4\uff0c\u7136\u540e\u7528\u6570\u7ec4\u65b9\u6cd5\u904d\u5386\n// \u5e38\u89c4\u65b9\u6cd5\u662f\u7528 split()\nString(num).split("").reduce(...)\n// \u7531\u4e8e\u5b57\u7b26\u4e32\u5b9e\u73b0\u4e86 iterator \u63a5\u53e3\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u6269\u5c55\u8fd0\u7b97\u7b26\u5c55\u5f00\u5230\u6570\u7ec4\u4e2d\n[...String(num)].reduce(...)\n')),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/417534662"},"\u7528Rust\u9508\u5316Vue Compiler")),(0,i.kt)("p",null,"\ud83d\udcd2 TS \u7c7b\u578b\u4f53\u64cd\u6027\u80fd\u5206\u6790"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ tsc index.ts \u2013-diagnostics\n")),(0,i.kt)("p",null,"\ud83d\udcd2 \u524d\u7aef\u52a8\u753b\u5b9e\u73b0\u65b9\u6848"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CSS \u65b9\u6848\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"transition"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"animation")),(0,i.kt)("li",{parentName:"ul"},"JS \u65b9\u6848\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame"))),(0,i.kt)("p",null,"\u4e00\u4e2a\u5b9e\u9a8c\u6027 API ",(0,i.kt)("inlineCode",{parentName:"p"},"Element.animate()"),"\uff0c\u53ef\u4ee5\u5728\u6e32\u67d3\u8fdb\u7a0b\u7684\u65f6\u5019\u5c31\u6267\u884c\uff0c\u6027\u80fd\u66f4\u597d\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate"},"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate"))),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7085257325165936648"},"\u6211\u662f\u5982\u4f55\u5e26\u9886\u56e2\u961f\u4ece\u96f6\u5230\u4e00\u5efa\u7acb\u524d\u7aef\u89c4\u8303\u7684")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/250493093"},"\u8840\u6cea\u6559\u8bad\u4e4b\u8bf7\u4e0d\u8981\u518d\u8f7b\u89c6Git \u2014\u2014 \u6211\u5728\u5de5\u4f5c\u4e2d\u662f\u5982\u4f55\u4f7f\u7528 Git \u7684")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/learn/basics/create-nextjs-app"},"https://nextjs.org/learn/basics/create-nextjs-app")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs"},"https://nextjs.org/docs")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903944343273485"},"\u624b\u628a\u624b\u6559\u4f60\u7528\u795e\u5668nextjs\u4e00\u952e\u5bfc\u51fa\u4f60\u7684github\u535a\u5ba2\u6587\u7ae0\u751f\u6210\u9759\u6001html")),(0,i.kt)("p",null,"\ud83d\udcd2 Golang \u4e09\u6570\u4e4b\u548c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package algorithm\n\nimport (\n    "sort"\n)\n\nfunc ThreeSum(nums []int) [][]int {\n    ans := make([][]int, 0)\n    // \u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u5c0f\u4e8e 3\uff0c\u76f4\u63a5\u8fd4\u56de\n    if len(nums) < 3 {\n        return ans\n    }\n    // \u6392\u5e8f\n    sort.Ints(nums)\n    // \u904d\u5386\u5230\u5012\u6570\u7b2c\u4e8c\u4e2a\uff0c\u56e0\u4e3a\u662f\u4e09\u4e2a\u6570\u603b\u548c\n    for i := 0; i < len(nums) - 2; i++ {\n        // \u89c4\u5b9a nums[i] < nums[left] < nums[right]\n        // \u5982\u679c nums[i] > 0 \u5219\u4e0d\u5b58\u5728\u53e6\u5916\u4e24\u4e2a\u503c\u4f7f\u5f97\u76f8\u52a0\u7b49\u4e8e 0\n        // \u5927\u4e8e 0 \u53ef\u4ee5\u76f4\u63a5\u8df3\u51fa\u5faa\u73af\u4e86\n        if nums[i] > 0 {\n            break\n        }\n        // \u8fc7\u6ee4 nums[i] \u91cd\u590d\n        if i > 0 && nums[i] == nums[i-1] {\n            continue\n        }\n        // \u5148\u786e\u5b9a\u4e00\u4e2a\u503c nums[i]\n        // \u518d\u53bb\u627e\u53e6\u5916\u4e24\u4e2a\u503c nums[left] \u548c nums[right]\n        // \u9700\u8981\u6ee1\u8db3 nums[i] < nums[left] < nums[right]\n        target := -nums[i]\n        left, right := i + 1, len(nums) - 1\n\n        // \u4f7f\u7528\u53cc\u6307\u9488\u6cd5\u786e\u5b9a\u5269\u4e0b\u4e24\u4e2a\u503c\n        for left < right {\n            sum := nums[left] + nums[right]\n            if sum < target {\n                left++\n            } else if sum > target {\n                right--\n            } else if sum == target {\n                ans = append(ans, []int{nums[i], nums[left], nums[right]})\n                // \u627e\u5230\u76ee\u6807\u503c\uff0c\u5de6\u53f3\u6307\u9488\u5206\u522b\u79fb\u52a8\u4e00\u4f4d\n                left++\n                right--\n                // \u8fc7\u6ee4 nums[left] \u91cd\u590d\n                for left < right && nums[left] == nums[left-1] {\n                    left++\n                }\n                // \u8fc7\u6ee4 nums[right] \u91cd\u590d\n                for left < right && nums[right] == nums[right+1] {\n                    right--\n                }\n            }\n        }\n    }\n    return ans\n}\n')),(0,i.kt)("p",null,"\ud83d\udcd2 Golang \u624b\u5199\u6570\u7ec4\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc ForEach(nums []int, fn func(int, int)) {\n    for index, item := range nums {\n        fn(item, index)\n    }\n}\n\nfunc Map(nums []int, fn func(int, int) int) []int {\n    res := make([]int, 0)\n    for index, item := range nums {\n        res = append(res, fn(item, index))\n    }\n    return res;\n}\n\nfunc Filter(nums []int, fn func(int, int) bool) []int {\n    res := make([]int, 0)\n    for index, item := range nums {\n        if fn(item, index) {\n            res = append(res, item)\n        }\n    }\n    return res\n}\n\nfunc Reduce(nums []int, fn func(int, int, int) int, initValue int) int {\n    res := initValue\n    for index, item := range nums {\n        res = fn(res, item, index)\n    }\n    return res\n}\n\nfunc main() {\n    s := []int{1, 2, 3, 4}\n    ForEach(s, func(item, index int) {\n        fmt.Println("===forEach", item, index)\n    })\n    mapped := Map(s, func(item, index int) int {\n        return item * 2\n    })\n    fmt.Println(mapped)\n    filtered := Filter(s, func(item, index int) bool {\n        return item % 2 == 0\n    })\n    fmt.Println(filtered)\n    reduced := Reduce(s, func(accu, cur, index int) int {\n        return accu + cur\n    }, 0)\n    fmt.Println(reduced)\n}\n')),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/kGMsNmIXlT25NfRrifjnTQ"},"\u9009\u62e9\u7b2c\u4e09\u65b9 NPM \u5305\u65f6\u7684 5 \u6761\u6700\u4f73\u5b9e\u8df5")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7072321805792313357"},"Vue3.2 vDOM diff\u6d41\u7a0b\u5206\u6790\u4e4b\u4e00\uff1adiff\u7b97\u6cd5")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/pNossFUtJrDHshXbWLb4vA"},"\u4ece\u96f6\u5230\u4e00\uff0c\u6211\u4eec\u6765\u4e00\u8d77\u9020\u4e2a JS \u7684\u7f16\u8bd1\u5668")),(0,i.kt)("p",null,"\u2b50\ufe0f ",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7085542534943883301"},"2022 \u5e74\u7684 React \u751f\u6001")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/163481957"},"linux\u540e\u53f0\u5f00\u53d1\u5177\u5907\u80fd\u529b\u96c6\u9526")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/439279854"},"Linux\u4e0bC++\u540e\u53f0\u670d\u52a1\u5668\u5f00\u53d1")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/471317280"},"Go \u8bed\u8a00\u4e0e\u5e76\u53d1\u7f16\u7a0b")),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7085224136980561927"},"\u6253\u9020\u8f7b\u91cf\u7ea7 WebIDE\uff0c\u770b\u8fd9\u4e00\u7bc7\u6587\u7ae0\u5c31\u591f\u5566")),(0,i.kt)("p",null,"\ud83d\udcd2 developer-roadmap"),(0,i.kt)("p",null,"developer-roadmap \u662f\u4e00\u4e2a\u5f00\u53d1\u4eba\u5458\u8def\u7ebf\u56fe\uff0c\u5305\u542b\u4e86\u524d\u7aef\u8def\u7ebf\u56fe\u3001\u540e\u7aef\u8def\u7ebf\u56fe\u3001DevOps \u8def\u7ebf\u56fe\u3001React \u8def\u7ebf\u56fe\u3001Angular \u8def\u7ebf\u56fe\u3001Android \u8def\u7ebf\u56fe\u3001Python \u8def\u7ebf\u56fe\u3001Go \u8def\u7ebf\u56fe\u3001Java \u8def\u7ebf\u56fe\u3001DBA \u8def\u7ebf\u56fe\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/kamranahmedse/developer-roadmap"},"https://github.com/kamranahmedse/developer-roadmap"))),(0,i.kt)("p",null,"\ud83d\udcd2 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vercel/pkg"},"pkg: \u628a Node.js \u9879\u76ee\u6253\u5305\u4e3a\u53ef\u6267\u884c\u6587\u4ef6")))}f.isMDXComponent=!0}}]);