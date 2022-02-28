"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[7881],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=i,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1973:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return u},toc:function(){return s},default:function(){return k}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),r=["components"],o={slug:"2\u670827\u65e5\u5185\u5bb9\u6c47\u603b",title:"2\u670827\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["git","ESLint","Prettier","yaml","CSS","Vue3","JSON \u5e8f\u5217\u5316","Golang"]},p=void 0,m={permalink:"/frontend-weekly/blog/2\u670827\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-02-27/index.md",source:"@site/blog/2022-02-27/index.md",title:"2\u670827\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 Vue diff \u7b97\u6cd5",date:"2022-02-27T00:00:00.000Z",formattedDate:"February 27, 2022",tags:[{label:"git",permalink:"/frontend-weekly/blog/tags/git"},{label:"ESLint",permalink:"/frontend-weekly/blog/tags/es-lint"},{label:"Prettier",permalink:"/frontend-weekly/blog/tags/prettier"},{label:"yaml",permalink:"/frontend-weekly/blog/tags/yaml"},{label:"CSS",permalink:"/frontend-weekly/blog/tags/css"},{label:"Vue3",permalink:"/frontend-weekly/blog/tags/vue-3"},{label:"JSON \u5e8f\u5217\u5316",permalink:"/frontend-weekly/blog/tags/json-\u5e8f\u5217\u5316"},{label:"Golang",permalink:"/frontend-weekly/blog/tags/golang"}],readingTime:15.155,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],prevItem:{title:"3\u67086\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/3\u67086\u65e5\u5185\u5bb9\u6c47\u603b"},nextItem:{title:"2\u670820\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/2\u670820\u65e5\u5185\u5bb9\u6c47\u603b"}},u={authorsImageUrls:[void 0]},s=[],d={toc:s};function k(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ud83d\udcd2 Vue diff \u7b97\u6cd5"),(0,l.kt)("p",null,"Vue2 diff \u7b97\u6cd5\u6838\u5fc3\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"diff \u7684\u5165\u53e3\u51fd\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"patch"),"\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"sameVnode")," \u6bd4\u8f83\u8282\u70b9\u662f\u5426\u76f8\u540c\uff0c\u5982\u76f8\u540c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"patchVnode")," \u7ee7\u7eed\u8fdb\u884c\u6df1\u5c42\u6bd4\u8f83\uff0c\u5426\u5219\u5c31\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"createEle")," \u65b9\u6cd5\u6e32\u67d3\u51fa\u771f\u5b9e DOM \u8282\u70b9\uff0c\u7136\u540e\u66ff\u6362\u65e7\u5143\u7d20\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sameVnode")," \u901a\u8fc7\u6bd4\u8f83 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u503c\u662f\u5426\u4e00\u6837\u3001\u6807\u7b7e\u540d\u662f\u5426\u4e00\u6837\u3001\u662f\u5426\u90fd\u4e3a\u6ce8\u91ca\u8282\u70b9\u3001\u662f\u5426\u90fd\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\u3001\u5f53\u6807\u7b7e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"input")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"type")," \u662f\u5426\u76f8\u540c\u6765\u5224\u65ad\u4e24\u4e2a\u8282\u70b9\u662f\u5426\u76f8\u540c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"patchVnode")," \u65b9\u6cd5\u5982\u4f55\u5bf9\u8282\u70b9\u6df1\u5c42\u6bd4\u8f83",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u62ff\u5230\u771f\u5b9e DOM \u7684\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"el"),"\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"oldVnode.el"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5224\u65ad\u5f53\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"newVnode")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"oldVnode")," \u662f\u5426\u6307\u5411\u540c\u4e00\u5bf9\u8c61\uff0c\u5982\u679c\u662f\u76f4\u63a5 ",(0,l.kt)("inlineCode",{parentName:"li"},"return")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u65b0\u65e7\u865a\u62df\u8282\u70b9\u662f\u6587\u672c\u8282\u70b9\uff0c\u4e14\u6587\u672c\u4e0d\u4e00\u6837\uff0c\u5219\u76f4\u63a5\u5c06\u771f\u5b9e DOM \u4e2d\u6587\u672c\u66f4\u65b0\u4e3a\u65b0\u865a\u62df\u8282\u70b9\u7684\u6587\u672c\uff1b\u82e5\u6587\u672c\u6ca1\u6709\u53d8\u5316\uff0c\u5219\u7ee7\u7eed\u5bf9\u6bd4\u65b0\u65e7\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"children")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"oldVnode")," \u6709\u5b50\u8282\u70b9\u800c ",(0,l.kt)("inlineCode",{parentName:"li"},"newVnode")," \u6ca1\u6709\uff0c\u5219\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"el")," \u7684\u5b50\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"oldVnode")," \u6ca1\u6709\u5b50\u8282\u70b9\u800c ",(0,l.kt)("inlineCode",{parentName:"li"},"newVnode")," \u6709\uff0c\u5219\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"newVnode")," \u7684\u5b50\u8282\u70b9\u6e32\u67d3\u51fa\u771f\u5b9e DOM \u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"el"),"\uff08Vue \u6e90\u7801\u4e2d\u4f1a\u5224\u65ad\u662f\u5426\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u91cd\u590d\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u8005\u90fd\u6709\u5b50\u8282\u70b9\uff0c\u5219\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"updateChildren")," \u51fd\u6570\u6bd4\u8f83\u5b50\u8282\u70b9"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"updateChildren")," \u662f diff \u7b97\u6cd5\u6838\u5fc3\u90e8\u5206\uff0c\u5f53\u53d1\u73b0\u65b0\u65e7\u865a\u62df\u8282\u70b9\u7684\u5b50\u8282\u70b9\u90fd\u5b58\u5728\u65f6\uff0c\u9700\u8981\u5224\u65ad\u54ea\u4e9b\u8282\u70b9\u662f\u9700\u8981\u79fb\u52a8\u7684\uff0c\u54ea\u4e9b\u8282\u70b9\u662f\u53ef\u4ee5\u76f4\u63a5\u590d\u7528\u7684\uff0c\u8fdb\u800c\u63d0\u9ad8 diff \u7684\u6548\u7387",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("strong",{parentName:"li"},"\u9996\u5c3e\u6307\u9488\u6cd5"),"\uff0c\u5728\u65b0\u65e7\u5b50\u8282\u70b9\u7684\u9996\u4f4d\u5b9a\u4e49\u56db\u4e2a\u6307\u9488\uff0c\u7136\u540e\u4e0d\u65ad\u5bf9\u6bd4\u627e\u5230\u53ef\u590d\u7528\u7684\u8282\u70b9\uff0c\u540c\u65f6\u5224\u65ad\u9700\u8981\u79fb\u52a8\u7684\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u7406\u60f3\u72b6\u6001\u4e0b\u53ea\u80fd\u901a\u8fc7\u8282\u70b9\u6620\u5c04\u7684\u65b9\u5f0f\u53bb\u627e\u53ef\u590d\u7528\u8282\u70b9\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"O(n^2)")),(0,l.kt)("li",{parentName:"ul"},"Vue3 \u7684 diff \u7b97\u6cd5\u5728\u975e\u7406\u60f3\u72b6\u6001\u4e0b\u7684\u8282\u70b9\u5bf9\u6bd4\u4f7f\u7528\u4e86\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u6765\u5904\u7406\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"O(nlgn)\uff5eO(n^2)"))))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(7292).Z})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/8M-pJdKjF6bx5ijtSFKIcw"},"\u56fe\u89e3Diff\u7b97\u6cd5\u2014\u2014Vue\u7bc7")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7067693810918096903"},"\u6d45\u6790 Snabbdom \u4e2d vnode \u548c diff \u7b97\u6cd5")),(0,l.kt)("p",null,"\ud83d\udcd2 Leetcode 300 \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"),(0,l.kt)("p",null,"\u5e38\u89c4\u65b9\u5f0f\u662f\u4f7f\u7528\u52a8\u6001\u89c4\u5212\uff0c\u65f6\u95f4\u590d\u6742\u5ea6 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n^2)"),"\u3002\u8fd9\u91cc\u6ce8\u610f ",(0,l.kt)("inlineCode",{parentName:"p"},"dp[i]")," \u7684\u5b9a\u4e49\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"strong"},"nums[i]")," \u8fd9\u4e2a\u6570\u7ed3\u5c3e\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u957f\u5ea6"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n  public int lengthOfLIS(int[] nums) {\n    // \u5b9a\u4e49 dp \u6570\u7ec4\n    // dp[i] \u8868\u793a\u4ee5 nums[i] \u8fd9\u4e2a\u6570\u7ed3\u5c3e\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u957f\u5ea6\n    int[] dp = new int[nums.length];\n    // \u521d\u59cb\u503c\u586b\u5145 1\uff08\u5b50\u5e8f\u5217\u81f3\u5c11\u5305\u542b\u5f53\u524d\u5143\u7d20\u81ea\u5df1\uff09\n    Arrays.fill(dp, 1);\n    for (int i = 0; i < nums.length; i++) {\n      for (int j = 0; j < i; j++) {\n        // \u5047\u8bbe dp[0...i-1] \u90fd\u5df2\u77e5\uff0c\u9700\u8981\u6c42\u51fa dp[i]\n        // \u53ea\u9700\u8981\u904d\u5386 nums[0...i-1]\uff0c\u627e\u5230\u7ed3\u5c3e\u6bd4 nums[i] \u5c0f\u7684\u5b50\u5e8f\u5217\u957f\u5ea6 dp[j]\n        // \u7136\u540e\u628a nums[i] \u63a5\u5230\u6700\u540e\uff0c\u5c31\u53ef\u4ee5\u5f62\u6210\u4e00\u4e2a\u65b0\u7684\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u957f\u5ea6\u4e3a dp[j] + 1\n        // \u663e\u7136\uff0c\u53ef\u80fd\u5f62\u6210\u5f88\u591a\u79cd\u65b0\u7684\u5b50\u5e8f\u5217\uff0c\u53ea\u9700\u8981\u9009\u62e9\u6700\u957f\u7684\uff0c\u4f5c\u4e3a dp[i] \u7684\u503c\u5373\u53ef\n        if (nums[i] > nums[j]) {\n          dp[i] = Math.max(dp[i], dp[j] + 1);\n        }\n      }\n    }\n    // \u904d\u5386 dp \u6570\u7ec4\uff0c\u627e\u51fa\u6700\u5927\u503c\n    int res = 0;\n    for (int i = 0; i < dp.length; i++) {\n      res = Math.max(res, dp[i]);\n    }\n    return res;\n  }\n}\n")),(0,l.kt)("p",null,"\ud83d\udcd2 CSS \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"object-fit")," \u5c5e\u6027\u7528\u6cd5"),(0,l.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u6709\u4e00\u4e2a\u9700\u6c42\uff0c\u56fe\u7247\u5c3a\u5bf8\u8f83\u5c0f\u65f6\uff0c\u9700\u8981\u4fdd\u5b58\u56fe\u7247\u539f\u6709\u5927\u5c0f\uff0c\u56fe\u7247\u5c3a\u5bf8\u5927\u4e8e\u5bb9\u5668\u5927\u5c0f\u65f6\uff0c\u9700\u8981\u7f29\u653e\u4ee5\u9002\u5408\u5bb9\u5668\u5927\u5c0f\uff0c\u540c\u65f6\u4fdd\u6301\u539f\u6709\u6bd4\u4f8b\u3002"),(0,l.kt)("p",null,"\u67e5\u9605 MDN \u6587\u6863\u53ef\u77e5\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"<img>")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"<video>")," \u7b49\u66ff\u6362\u5143\u7d20\u4e0a\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"object-fit")," \u5c5e\u6027\uff0c\u7528\u4e8e\u8bbe\u7f6e\u66ff\u6362\u5143\u7d20\u8be5\u5982\u4f55\u9002\u914d\u5bb9\u5668\uff0c\u53ef\u4ee5\u53d6\u4ee5\u4e0b\u51e0\u4e2a\u503c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"object-fit: fill"),"\uff1a\u56fe\u7247\u88ab\u62c9\u4f38\u4ee5\u9002\u5e94\u5bb9\u5668\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u4f1a\u4fdd\u6301\u957f\u5bbd\u6bd4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"object-fit: contain"),"\uff1a\u56fe\u7247\u88ab\u7f29\u653e\u4ee5\u9002\u5e94\u5bb9\u5668\uff0c\u540c\u65f6\u4fdd\u6301\u957f\u5bbd\u6bd4\uff0c\u5982\u679c\u56fe\u7247\u4e0e\u5bb9\u5668\u957f\u5bbd\u6bd4\u4e0d\u5339\u914d\uff0c\u8f83\u77ed\u8fb9\u4f1a\u7559\u51fa\u7a7a\u767d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"object-fit: cover"),"\uff1a\u56fe\u7247\u88ab\u7f29\u653e\u4ee5\u9002\u5e94\u5bb9\u5668\uff0c\u540c\u65f6\u4fdd\u6301\u957f\u5bbd\u6bd4\uff0c\u5982\u679c\u56fe\u7247\u4e0e\u5bb9\u5668\u957f\u5bbd\u6bd4\u4e0d\u5339\u914d\uff0c\u8f83\u957f\u8fb9\u4f1a\u88ab\u526a\u88c1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"object-fit: none"),"\uff1a\u56fe\u7247\u4e0d\u4f1a\u8c03\u6574\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"object-fit: scale-down"),"\uff1a\u56fe\u7247\u8f83\u5c0f\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"\uff0c\u56fe\u7247\u8f83\u5927\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"contain"))),(0,l.kt)("p",null,"\u7efc\u4e0a\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"object-fit: scale-down")," \u5c31\u53ef\u4ee5\u5b9e\u73b0\u9879\u76ee\u9700\u6c42\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f IE 11 \u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"object-fit"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},"object-fit - MDN")),(0,l.kt)("p",null,"\ud83d\udcd2 \u7406\u89e3\u5f52\u5e76\u6392\u5e8f"),(0,l.kt)("p",null,"\u5f52\u5e76\u6392\u5e8f\u5c31\u662f\u5bf9\u6570\u7ec4\u7684\u5de6\u534a\u8fb9\u548c\u53f3\u534a\u8fb9\u5206\u522b\u6392\u5e8f\uff0c\u7136\u540e\u518d\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f52\u5e76\u6392\u5e8f\u7684\u8fc7\u7a0b\u53ef\u4ee5\u5728\u903b\u8f91\u4e0a\u62bd\u8c61\u6210\u4e00\u68f5\u4e8c\u53c9\u6811\uff0c\u6811\u4e0a\u7684\u6bcf\u4e2a\u8282\u70b9\u7684\u503c\u53ef\u4ee5\u8ba4\u4e3a\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"nums[lo..hi]"),"\uff0c\u53f6\u5b50\u8282\u70b9\u7684\u503c\u5c31\u662f\u6570\u7ec4\u4e2d\u7684\u5355\u4e2a\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"\u7136\u540e\uff0c\u5728\u6bcf\u4e2a\u8282\u70b9\u7684\u540e\u5e8f\u4f4d\u7f6e\uff08\u5de6\u53f3\u5b50\u8282\u70b9\u5df2\u7ecf\u88ab\u6392\u597d\u5e8f\uff09\u7684\u65f6\u5019\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"merge")," \u51fd\u6570\uff0c\u5408\u5e76\u4e24\u4e2a\u5b50\u8282\u70b9\u4e0a\u7684\u5b50\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"merge")," \u64cd\u4f5c\u4f1a\u5728\u4e8c\u53c9\u6811\u7684\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90fd\u6267\u884c\u4e00\u904d\uff0c\u6267\u884c\u987a\u5e8f\u662f\u4e8c\u53c9\u6811\u540e\u5e8f\u904d\u5386\u7684\u987a\u5e8f")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e00\u53e5\u8bdd\u603b\u7ed3\uff0c\u5f52\u5e76\u6392\u5e8f\u5b9e\u9645\u4e0a\u5c31\u662f\u5148\u5bf9\u6570\u7ec4\u4e0d\u65ad\u8fdb\u884c\u4e8c\u5206\uff0c\u5206\u5230\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u4e3a\u6b62\uff0c\u6b64\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"merge")," \u65b9\u6cd5\u5f00\u59cb\u53d1\u6325\u4f5c\u7528\uff0c\u5c06\u4e24\u4e2a\u5143\u7d20\u4e3a\u4e00\u7ec4\uff0c\u5408\u5e76\u4e3a\u957f\u5ea6\u4e3a 2 \u7684\u6709\u5e8f\u6570\u7ec4\uff0c\u518d\u5c06\u4e24\u4e2a\u957f\u5ea6\u4e3a 2 \u7684\u6709\u5e8f\u6570\u7ec4\u4e3a\u4e00\u7ec4\uff0c\u5408\u5e76\u4e3a\u957f\u5ea6\u4e3a 4 \u7684\u6709\u5e8f\u6570\u7ec4\uff0c\u4ee5\u6b64\u7c7b\u63a8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Merge {\n\n  // \u7528\u4e8e\u8f85\u52a9\u5408\u5e76\u6709\u5e8f\u6570\u7ec4\uff08\u4e0d\u80fd\u539f\u5730\u5408\u5e76\uff0c\u9700\u8981\u501f\u52a9\u989d\u5916\u7a7a\u95f4\uff09\n  private static int[] temp;\n\n  public static void sort(int[] nums) {\n    // \u907f\u514d\u9012\u5f52\u4e2d\u9891\u7e41\u5206\u914d\u548c\u91ca\u653e\u5185\u5b58\u53ef\u80fd\u4ea7\u751f\u7684\u6027\u80fd\u95ee\u9898\n    // \u63d0\u524d\u7ed9\u8f85\u52a9\u6570\u7ec4\u5f00\u8f9f\u5185\u5b58\u7a7a\u95f4\n    temp = new int[nums.length];\n    // \u539f\u5730\u4fee\u6539\u7684\u65b9\u5f0f\u5bf9\u6574\u4e2a\u6570\u7ec4\u8fdb\u884c\u6392\u5e8f\n    sort(nums, 0, nums.length - 1);\n  }\n\n  // \u5b9a\u4e49\uff1a\u5c06\u5b50\u6570\u7ec4 nums[lo..hi] \u8fdb\u884c\u6392\u5e8f\n  private static void sort(int[] nums, int lo, int hi) {\n    if (lo == hi) {\n      // \u5355\u4e2a\u5143\u7d20\u4e0d\u7528\u6392\u5e8f\n      return;\n    }\n    // \u8fd9\u6837\u5199\u662f\u4e3a\u4e86\u9632\u6b62\u6ea2\u51fa\uff0c\u6548\u679c\u7b49\u540c\u4e8e (hi + lo) / 2\n    // \u6ce8\u610f\uff1a\u5bf9\u4e8e\u65e0\u6cd5\u6574\u9664\u7684\u60c5\u51b5\uff0cJava \u4e2d int \u7c7b\u578b\u4f1a\u81ea\u52a8\u5411\u4e0b\u53d6\u6574\n    int mid = lo + (hi - lo) / 2;\n    // \u5148\u5bf9\u5de6\u534a\u90e8\u5206\u6570\u7ec4 nums[lo..mid] \u6392\u5e8f\n    sort(nums, lo, mid);\n    // \u518d\u5bf9\u53f3\u534a\u90e8\u5206\u6570\u7ec4 nums[mid+1..hi] \u6392\u5e8f\n    sort(nums, mid + 1, hi);\n    // \u5c06\u4e24\u90e8\u5206\u6709\u5e8f\u6570\u7ec4\u5408\u5e76\u6210\u4e00\u4e2a\u6709\u5e8f\u6570\u7ec4\n    merge(nums, lo, mid, hi);\n  }\n\n  // \u5c06 nums[lo..mid] \u548c nums[mid+1..hi] \u8fd9\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\u5408\u5e76\u6210\u4e00\u4e2a\u6709\u5e8f\u6570\u7ec4\n  private static void merge(int[] nums, int lo, int mid, int hi) {\n    // \u5148\u628a nums[lo..hi] \u590d\u5236\u5230\u8f85\u52a9\u6570\u7ec4\u4e2d\n    // \u4ee5\u4fbf\u5408\u5e76\u540e\u7684\u7ed3\u679c\u80fd\u591f\u76f4\u63a5\u5b58\u5165 nums\n    for (int i = lo; i <= hi; i++) {\n      temp[i] = nums[i];\n    }\n\n    // \u6570\u7ec4\u53cc\u6307\u9488\u6280\u5de7\uff0c\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\n    // i => \u5de6\u534a\u8fb9\u6570\u7ec4\u8d77\u59cb\u4e0b\u6807\n    // j => \u53f3\u534a\u8fb9\u6570\u7ec4\u8d77\u59cb\u4e0b\u6807\n    int i = lo, j = mid + 1;\n    for (int p = lo; p <= hi; p++) {\n      if (i == mid + 1) {\n        // \u5de6\u534a\u8fb9\u6570\u7ec4\u5df2\u5168\u90e8\u88ab\u5408\u5e76\uff0c\u53ea\u9700\u628a\u53f3\u534a\u8fb9\u6570\u7ec4\u5408\u5e76\u8fc7\u6765\u5373\u53ef\n        nums[p] = temp[j++];\n      } else if (j == hi + 1) {\n        // \u53f3\u534a\u8fb9\u6570\u7ec4\u5df2\u5168\u90e8\u88ab\u5408\u5e76\uff0c\u53ea\u9700\u628a\u5de6\u534a\u8fb9\u6570\u7ec4\u5408\u5e76\u8fc7\u6765\u5373\u53ef\n        nums[p] = temp[i++];\n      } else if (temp[i] > temp[j]) {\n        // \u5c06\u8f83\u5c0f\u7684\u5143\u7d20\u5408\u5165\uff0c\u540c\u65f6\u4e0b\u6807\u524d\u8fdb\u4e00\u4f4d\uff0c\u6b64\u65f6\u662f\u5347\u5e8f\n        // \u53ea\u8981\u5c06 > \u6539\u4e3a < \u5c31\u53ef\u4ee5\u628a\u7ed3\u679c\u6539\u4e3a\u964d\u5e8f\n        nums[p] = temp[j++];\n      } else {\n        nums[p] = temp[i++];\n      }\n    }\n  }\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f52\u5e76\u6392\u5e8f\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"O(nlogn)"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/7_jsikVCARPFrJ6Hj1EYsg"},"\u5f52\u5e76\u6392\u5e8f\u7684\u6b63\u786e\u7406\u89e3\u65b9\u5f0f\u53ca\u8fd0\u7528")),(0,l.kt)("p",null,"\ud83c\udf1b Leetcode 112 \u8def\u5f84\u603b\u548c"),(0,l.kt)("p",null,"\u5224\u65ad\u662f\u5426\u5b58\u5728 ",(0,l.kt)("strong",{parentName:"p"},"\u6839\u8282\u70b9\u5230\u53f6\u5b50\u8282\u70b9")," \u7684\u8def\u5f84\uff0c\u8fd9\u6761\u8def\u5f84\u4e0a\u6240\u6709\u8282\u70b9\u503c\u76f8\u52a0\u7b49\u4e8e\u76ee\u6807\u548c\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"targetSum")," \u3002\u5982\u679c\u5b58\u5728\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n  public boolean hasPathSum(TreeNode root, int targetSum) {\n    if (root == null) return false;\n    if (root.left == null && root.right == null) {\n      return (targetSum - root.val) == 0;\n    }\n    boolean leftResult = hasPathSum(root.left, targetSum - root.val);\n    boolean rightResult = hasPathSum(root.right, targetSum - root.val);\n    return leftResult || rightResult;\n  }\n}\n")),(0,l.kt)("p",null,"\ud83d\udcd2 ",(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/Pq6eFNxjWpFIGdSL3ya7Vg"},"Podman \u5df2\u6210 Linux \u5b98\u65b9\u6807\u914d\uff01Docker \u6ca1\u620f\u4e86\uff1f")),(0,l.kt)("p",null,"\u2b50\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7000909761336049671"},"\u4e0d\u61c2\u52a8\u6001\u89c4\u5212\uff1f21\u9053 LeetCode\u9898\u76ee\u5e26\u4f60\u5b66\u4f1a\u52a8\u6001\u89c4\u5212\uff01")),(0,l.kt)("p",null,"\u2b50\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7067693810918096903"},"\u6d45\u6790 Snabbdom \u4e2d vnode \u548c diff \u7b97\u6cd5")),(0,l.kt)("p",null,"\ud83d\udcd2 HTTP \u7f13\u5b58\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("p",null,"\u5728\u914d\u7f6e nginx \u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u914d\u7f6e\u5408\u7406\u7684\u7f13\u5b58\u7b56\u7565\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"html \u6587\u4ef6\u914d\u7f6e\u534f\u5546\u7f13\u5b58"),(0,l.kt)("li",{parentName:"ul"},"js\u3001css\u3001\u56fe\u7247\u3001\u5b57\u4f53\u7b49\u6587\u4ef6\u7531\u4e8e\u5e26\u6709\u54c8\u5e0c\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e00\u5e74\u5f3a\u7f13\u5b58")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u7684\u7f13\u5b58\u66f4\u65b0\u903b\u8f91\uff1a"),(0,l.kt)("p",{parentName:"div"},"\u5f53 js\u3001css \u7b49\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u4fee\u6539\u540e\uff0c\u6587\u4ef6\u54c8\u5e0c\u53d1\u751f\u53d8\u5316\uff0c\u5bf9\u5e94\u5f15\u5165 html \u7684\u6587\u4ef6\u5730\u5740\u4e5f\u53d1\u751f\u53d8\u5316\uff0c\u7b49\u4e8e html \u6587\u4ef6\u4e5f\u88ab\u4fee\u6539\u3002\u56e0\u6b64\u6d4f\u89c8\u5668\u7aef\u4f1a\u83b7\u53d6\u5230\u6700\u65b0\u7684 html \u6587\u4ef6\uff0c\u7136\u540e\u6839\u636e\u5e26\u6709\u54c8\u5e0c\u7684\u8def\u5f84\u52a0\u8f7d\u6700\u65b0\u7684\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u3002"))),(0,l.kt)("p",null,"\u8fd9\u6837\u914d\u7f6e\u7f13\u5b58\u4e4b\u540e\uff0c\u53ef\u4ee5\u6781\u5927\u63d0\u5347\u8d44\u6e90\u4e8c\u6b21\u52a0\u8f7d\u901f\u5ea6\uff0c\u8fdb\u800c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002\u4ee5\u4e0a\u8fd9\u4e9b\u662f\u4ece\u6027\u80fd\u89d2\u5ea6\u8003\u8651\u7684\uff0c\u4ece\u5b89\u5168\u89d2\u5ea6\u8003\u8651\uff0c\u63a8\u8350\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u9632\u6b62\u4e2d\u4ecb\u7f13\u5b58\uff0c\u5efa\u8bae\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"Cache-Control: private"),"\uff0c\u8fd9\u53ef\u4ee5\u7981\u7528\u6389\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"Public Cache"),"\uff08\u6bd4\u5982\u4ee3\u7406\uff09\uff0c\u8fd9\u5c31\u51cf\u5c11\u4e86\u653b\u51fb\u8005\u8de8\u754c\u8bbf\u95ee\u5230\u516c\u5171\u5185\u5b58\u7684\u53ef\u80fd\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d4f\u89c8\u5668\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"li"},"URL")," \u548c ",(0,l.kt)("strong",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5")," \u4f5c\u4e3a\u7f13\u5b58 key\uff0c\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u4e00\u4e2a\u7f51\u7ad9\u9700\u8981\u767b\u5f55\uff0c\u4e0d\u540c\u7528\u6237\u7684\u8bf7\u6c42\u7531\u4e8e\u5b83\u4eec\u7684\u8bf7\u6c42URL\u548c\u65b9\u6cd5\u76f8\u540c\uff0c\u6570\u636e\u4f1a\u88ab\u7f13\u5b58\u5230\u4e00\u5757\u5185\u5b58\u91cc\u3002\u5982\u679c\u6211\u4eec\u8bf7\u6c42\u7684\u54cd\u5e94\u662f\u8ddf\u8bf7\u6c42\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Cookie")," \u76f8\u5173\u7684\uff0c\u5efa\u8bae\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"Vary: Cookie")," \u4f5c\u4e3a\u4e8c\u7ea7\u7f13\u5b58 key")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/43pa04szJ2zU_IyVP4LraQ"},"HTTP \u7f13\u5b58\u522b\u518d\u4e71\u7528\u4e86\uff01\u63a8\u8350\u4e00\u4e2a\u7f13\u5b58\u8bbe\u7f6e\u7684\u6700\u4f73\u59ff\u52bf\uff01")),(0,l.kt)("p",null,"\ud83d\udcd2 \u5982\u4f55\u76d1\u542c\u7cfb\u7edf\u9ed1\u6697\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5728 CSS \u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"prefers-color-scheme")," \u5a92\u4f53\u67e5\u8be2\u5b9e\u73b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  color: black;\n  background: white;\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    color: white;\n    background: black;\n  }\n}\n")),(0,l.kt)("p",null,"\u5728 JS \u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"window.matchMedia")," \u5a92\u4f53\u67e5\u8be2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\n\nexport type ThemeName = "light" | "dark";\n\nfunction useTheme() {\n  const [themeName, setThemeName] = React.useState<ThemeName>("light");\n\n  React.useEffect(() => {\n    // \u8bbe\u7f6e\u521d\u59cb\u76ae\u80a4\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      setThemeName("dark");\n    } else {\n      setThemeName("light");\n    }\n    \n    // \u76d1\u542c\u7cfb\u7edf\u989c\u8272\u5207\u6362\n    window\n      .matchMedia("(prefers-color-scheme: dark)")\n      .addEventListener("change", (event) => {\n        if (event.matches) {\n          setThemeName("dark");\n        } else {\n          setThemeName("light");\n        }\n      });\n  }, []);\n\n  return {\n    themeName,\n    isDarkMode: themeName === "dark",\n    isLightMode: themeName === "light",\n  }\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia"},"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u81ea\u5b9a\u4e49 hook \u5b9e\u9645\u4e0a\u5c31\u662f mixin\uff0c\u628a\u4e00\u6bb5\u53ef\u590d\u7528\u7684\u903b\u8f91\u62bd\u79bb\u51fa\u6765")),(0,l.kt)("p",null,"\ud83d\udcd2 \u641c\u7d22 JS\u3001Go\u3001Java\u3001Python \u7684\u7b2c\u4e09\u65b9\u5e93"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://openbase.com/"},"https://openbase.com/")),(0,l.kt)("p",null,"\u4f8b\u5982\u641c\u7d22 Redux \u7684\u66ff\u4ee3\u65b9\u6848\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://openbase.com/js/redux/alternatives"},"https://openbase.com/js/redux/alternatives")),(0,l.kt)("p",null,"\u2b50\ufe0f ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7065875157268561957"},"React hooks \u72b6\u6001\u7ba1\u7406\u65b9\u6848\u89e3\u6790")),(0,l.kt)("p",null,"\ud83d\udcd2 \u6df1\u5165\u7406\u89e3 React Native \u7684\u65b0\u67b6\u6784"),(0,l.kt)("p",null,"\u7167 React Native \u56e2\u961f\u53bb\u5e74\u53d1\u8868\u7684\u4e00\u7bc7 \u535a\u5ba2 \u7684\u8bf4\u6cd5\uff0c\u4ed6\u4eec\u4f1a\u5728\u4eca\u5e74\u53d1\u5e03\u65b0\u7684\u67b6\u6784\u3002\u672c\u6587\u5c06\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u65b0\u67b6\u6784\u7684\u76f8\u5173\u5185\u5bb9\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://medium.com/coox-tech/deep-dive-into-react-natives-new-architecture-fb67ae615ccd"},"https://medium.com/coox-tech/deep-dive-into-react-natives-new-architecture-fb67ae615ccd"))),(0,l.kt)("p",null,"\ud83d\udcd2 QUIC\u2014\u2014\u5feb\u901fUDP\u7f51\u7edc\u8fde\u63a5\u534f\u8bae"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"QUIC \u7684Stream\u6d41\u57fa\u4e8eStream ID+Offset\u8fdb\u884c\u5305\u786e\u8ba4\uff0c\u6d41\u91cf\u63a7\u5236\u9700\u8981\u4fdd\u8bc1\u6240\u53d1\u9001\u7684\u6240\u6709\u5305offset\u5c0f\u4e8e ",(0,l.kt)("strong",{parentName:"li"},"\u6700\u5927\u7edd\u5bf9\u5b57\u8282\u504f\u79fb\u91cf \uff08 maximum absolute byte offset \uff09"),"\uff0c \u8be5\u503c\u662f\u57fa\u4e8e\u5f53\u524d ",(0,l.kt)("strong",{parentName:"li"},"\u5df2\u7ecf\u63d0\u4ea4\u7684\u5b57\u8282\u504f\u79fb\u91cf\uff08offset of data consumed\uff09")," \u800c\u8fdb\u884c\u786e\u5b9a\u7684\uff0cQUIC\u4f1a\u628a\u8fde\u7eed\u7684\u5df2\u786e\u8ba4\u7684offset\u6570\u636e\u5411\u4e0a\u5c42\u5e94\u7528\u63d0\u4ea4\u3002QUIC\u652f\u6301\u4e71\u5e8f\u786e\u8ba4\uff0c\u4f46\u672c\u8eab\u4e5f\u662f\u6309\u5e8f\uff08offset\u987a\u5e8f\uff09\u53d1\u9001\u6570\u636e\u5305"),(0,l.kt)("li",{parentName:"ul"},"QUIC\u5229\u7528ack frame\u6765\u8fdb\u884c\u6570\u636e\u5305\u7684\u786e\u8ba4\uff0c\u6765\u4fdd\u8bc1\u53ef\u9760\u4f20\u8f93\u3002\u4e00\u4e2aack frame\u53ea\u5305\u542b\u591a\u4e2a\u786e\u8ba4\u4fe1\u606f\uff0c\u6ca1\u6709\u6b63\u6587"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u636e\u5305N\u8d85\u65f6\uff0c\u53d1\u9001\u7aef\u5c06\u8d85\u65f6\u6570\u636e\u5305N\u91cd\u65b0\u8bbe\u7f6e\u7f16\u53f7M\uff08\u5373\u4e0b\u4e00\u4e2a\u987a\u5e8f\u7684\u6570\u636e\u5305\u7f16\u53f7\uff09 \u540e\u53d1\u9001\u7ed9\u63a5\u6536\u7aef"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4e00\u4e2a\u6570\u636e\u5305\u53d1\u751f\u8d85\u65f6\u540e\uff0c\u5176\u4f59\u7684\u5df2\u7ecf\u53d1\u9001\u7684\u6570\u636e\u5305\u4f9d\u65e7\u53ef\u4ee5\u57fa\u4e8eOffset\u5f97\u5230\u786e\u8ba4\uff0c\u907f\u514d\u4e86TCP\u5229\u7528SACK\u624d\u80fd\u89e3\u51b3\u7684\u91cd\u4f20\u95ee\u9898")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5176\u5b9eQUIC\u7684\u4e71\u5e8f\u786e\u8ba4\u8bbe\u8ba1\u601d\u60f3\u5e76\u4e0d\u65b0\u9c9c\uff0c\u5927\u91cf\u7f51\u7edc\u89c6\u9891\u6d41\u5c31\u662f\u901a\u8fc7\u7c7b\u4f3c\u7684\u57fa\u4e8eUDP\u7684RUDP\u3001RTP\u3001UDT\u7b49\u534f\u8bae\u6765\u5b9e\u73b0\u5feb\u901f\u53ef\u9760\u4f20\u8f93\u7684\u3002\u4ed6\u4eec\u540c\u6837\u652f\u6301\u4e71\u5e8f\u786e\u8ba4\uff0c\u6240\u4ee5\u5c31\u4f1a\u5bfc\u81f4\u8fd9\u6837\u7684\u89c2\u770b\u4f53\u9a8c\uff1a\u660e\u660e\u8fdb\u5ea6\u6761\u663e\u793a\u8fd8\u6709\u4e00\u6bb5\u7f13\u5b58\uff0c\u4f46\u662f\u753b\u9762\u5c31\u662f\u5361\u7740\u4e0d\u52a8\u4e86\uff0c\u5982\u679c\u8df3\u8fc7\u7684\u8bdd\u89c6\u9891\u53c8\u80fd\u591f\u64ad\u653e\u4e86"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7066993430102016037"},"QUIC\u2014\u2014\u5feb\u901fUDP\u7f51\u7edc\u8fde\u63a5\u534f\u8bae")))}k.isMDXComponent=!0},7292:function(e,t,n){t.Z=n.p+"assets/images/patch-66a2ec2facba5395d7a9632528117c29.png"}}]);