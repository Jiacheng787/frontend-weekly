"use strict";(self.webpackChunkfrontend_weekly=self.webpackChunkfrontend_weekly||[]).push([[2829],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6676:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],p={slug:"1\u67082\u65e5\u5185\u5bb9\u6c47\u603b",title:"1\u67082\u65e5\u5185\u5bb9\u6c47\u603b",authors:["garfield"],tags:["NPM","Webpack","React"]},i=void 0,c={permalink:"/frontend-weekly/blog/1\u67082\u65e5\u5185\u5bb9\u6c47\u603b",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-02/index.md",source:"@site/blog/2022-01-02/index.md",title:"1\u67082\u65e5\u5185\u5bb9\u6c47\u603b",description:"\ud83d\udcd2 useCallback \u4f7f\u7528\u573a\u666f",date:"2022-01-02T00:00:00.000Z",formattedDate:"January 2, 2022",tags:[{label:"NPM",permalink:"/frontend-weekly/blog/tags/npm"},{label:"Webpack",permalink:"/frontend-weekly/blog/tags/webpack"},{label:"React",permalink:"/frontend-weekly/blog/tags/react"}],readingTime:1.97,truncated:!1,authors:[{name:"\u52a0\u83f2\u732b",title:"\u524d\u7aef\u5f00\u53d1 @NETEASE",url:"https://github.com/Jiacheng787",imageURL:"https://avatars.githubusercontent.com/u/43509711?v=4",key:"garfield"}],prevItem:{title:"\u7f6e\u9876\u5185\u5bb9",permalink:"/frontend-weekly/blog/welcome"},nextItem:{title:"12\u670826\u65e5\u5185\u5bb9\u6c47\u603b",permalink:"/frontend-weekly/blog/12\u670826\u65e5\u5185\u5bb9\u6c47\u603b"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcd2 ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback")," \u4f7f\u7528\u573a\u666f"),(0,o.kt)("p",null,"\u5728 React \u4e2d\u7ecf\u5e38\u9700\u8981\u5c06\u7236\u7ec4\u4ef6\u5b9a\u4e49\u7684\u65b9\u6cd5\u4f20\u5165\u5b50\u7ec4\u4ef6\uff08\u5373\u4e8b\u4ef6\u94a9\u5b50\uff0c\u4e5f\u53ef\u4ee5\u770b\u4f5c\u7236\u7ec4\u4ef6\u72b6\u6001\u63d0\u5347\u5230\u5b50\u7ec4\u4ef6\uff09\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const Parent = () => {\n  const handleSearch = (val) => {\n    console.log("\u641c\u7d22\u7ed3\u679c\uff1a", val);\n  }\n  \n  return <Input onSearch={handleSearch} />\n}\n\nconst Input = React.memo(({ onSearch }) => {\n  return (\n    <div class="search-input__div">\n      <input type="text" onChange={(e) => onSearch(e.target.value)} />\n    </div>\n  )\n})\n')),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u5219\u4f1a\u5bfc\u81f4 ",(0,o.kt)("inlineCode",{parentName:"p"},"handleSearch")," \u65b9\u6cd5\u91cd\u65b0\u751f\u6210\uff0c\u8fdb\u800c\u5bfc\u81f4 ",(0,o.kt)("inlineCode",{parentName:"p"},"onSearch")," prop \u6539\u53d8\uff0c\u5373\u4f7f\u5b50\u7ec4\u4ef6\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo"),"\uff0c\u5b50\u7ec4\u4ef6\u8fd8\u662f\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback")," \u7f13\u5b58\u51fd\u6570\uff0c\u907f\u514d\u51fd\u6570\u91cd\u590d\u751f\u6210\uff0c\u8fdb\u800c\u907f\u514d\u5b50\u7ec4\u4ef6\u91cd\u590d\u6e32\u67d3\uff0c\u63d0\u9ad8\u6027\u80fd\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const Parent = () => {\n  const handleSearch = React.useCallback((val) => {\n    console.log("\u641c\u7d22\u7ed3\u679c\uff1a", val);\n  }, []);\n  \n  return <Input onSearch={handleSearch} />\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback")," \u9700\u8981\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo")," \u4e00\u8d77\u4f7f\u7528\u3002\u5982\u679c\u4e0d\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"React.memo"),"\uff0c\u53ea\u8981\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u5373\u4f7f prop \u6ca1\u6709\u6539\u53d8\uff0c\u5b50\u7ec4\u4ef6\u8fd8\u662f\u4f1a\u91cd\u65b0\u6e32\u67d3"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903985338400782"},"React Hooks \u8be6\u89e3 \u3010\u8fd1 1W \u5b57\u3011+ \u9879\u76ee\u5b9e\u6218")))),(0,o.kt)("p",null,"\ud83d\udcd2 ",(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7033210664844066853"},"\u8001\u677f\uff1a\u4f60\u6765\u5f04\u4e00\u4e2a\u56e2\u961f\u4ee3\u7801\u89c4\u8303\uff01\uff1f")),(0,o.kt)("p",null,"\ud83d\udcd2 \u524d\u7aef\u5de5\u7a0b\u5316\u7cfb\u5217\u6587\u7ae0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://shanyue.tech/frontend-engineering/npm-install.html#%E4%BD%BF%E7%94%A8-npm-ci-%E6%9B%BF%E4%BB%A3-npm-i"},"https://shanyue.tech/frontend-engineering/npm-install.html#%E4%BD%BF%E7%94%A8-npm-ci-%E6%9B%BF%E4%BB%A3-npm-i"))),(0,o.kt)("p",null,"\ud83d\udcd2 ES \u65b0\u8bed\u6cd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.groupBy")),(0,o.kt)("p",null,"\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u505a\u6570\u636e\u5206\u7ec4\u7684\u63d0\u6848 ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.prototype.groupBy")," \u5df2\u7ecf\u5230\u8fbe ",(0,o.kt)("inlineCode",{parentName:"p"},"Stage 3"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const array = [1, 2, 3, 4, 5];\n\n// groupBy groups items by arbitrary key.\n// In this case, we're grouping by even/odd keys\narray.groupBy((num, index, array) => {\n  return num % 2 === 0 ? 'even': 'odd';\n});\n\n// =>  { odd: [1, 3, 5], even: [2, 4] }\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-array-grouping"},"https://github.com/tc39/proposal-array-grouping"))),(0,o.kt)("p",null,"\ud83d\udcd2 ",(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7046204235226021901"},"\u57fa\u4e8e Next.js \u7684 SSR/SSG \u65b9\u6848\u4e86\u89e3\u4e00\u4e0b\uff1f")))}d.isMDXComponent=!0}}]);