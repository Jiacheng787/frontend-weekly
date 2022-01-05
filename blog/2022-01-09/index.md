---
slug: 1月9日内容汇总
title: 1月9日内容汇总
authors: [garfield]
tags: [Vue, React, 年度高赞文章, VS Code, PostCSS, NextJS, 前端技术方向]
---

📒 [webpack模块热更新原理](https://juejin.cn/post/7049608872553611301)

📒 [2021 年当我们聊前端部署时，我们在聊什么](https://juejin.cn/post/7017710911443959839)

📒 [聊一聊前端算法面试——递归](https://juejin.cn/post/6844903942074138637)

📒 [前端单元测试入门与最佳实践](https://juejin.cn/post/7049293284883038238)

📒 [淘宝店铺的 TypeScript ESLint 规则集考量](https://juejin.cn/post/7049335008917454855)

📒 自动发布脚本

https://github.com/release-it/release-it

📒 diff 算法相关

https://github.com/snabbdom/snabbdom

[DIff算法看不懂就一起来砍我(带图)](https://juejin.cn/post/7000266544181674014)

📒 [如何盘点出掘金的年度高赞文章？](https://juejin.cn/post/7048253632055083022)

📒 [盘点掘金 2021 高赞 Vue 文章](https://juejin.cn/post/7047705995534925832)

📒 [盘点掘金 2021 高赞 React 文章](https://juejin.cn/post/7047690546417565733)

📒 [盘点掘金 2021 点赞高达 6000，收藏过万的文章](https://juejin.cn/post/7047153016771706916)

📒 [如何测试驱动开发 React 组件？](https://juejin.cn/post/7036318575165964325)

📒 [一起来写 VS Code 插件:为你的团队提供常用代码片段](https://juejin.cn/post/7030250953215311908)

📒 黑暗模式常用换肤方案

**CSS Variables**

css variables 是 Web 标准实现了对深色模式的支持，以下代码通过 CSS 媒体查询：

```css
:root {
  color-scheme: light dark;
  --nav-bg-color: #F7F7F7;
  --content-bg-color: #FFFFFF;
  --font-color: rgba(0,0,0,.9);
}

@media (prefers-color-scheme: dark) {
  :root {
    --nav-bg-color: #2F2F2F;
    --content-bg-color: #2C2C2C;
    --font-color: rgba(255, 255, 255, .8);
  }
}

:root {
  color: var(--font-color);
}

.header {
  background-color: var(--nav-bg-color);
}

.content {
  background-color: var(--content-bg-color);
}
```

优点：代码量最少，实现起来方便

缺点：存在浏览器兼容性，需要 edge16+ 才支持

**打包多份 css**

当然也可以手动打包 2 份 CSS 样式，通过动态引入样式文件进行切换。这种方式存在一个问题，当点击切换的时候会引起整个页面重排，因此我们需要单独打包出只包含颜色的样式文件。从这个思路出发，我们就接触到了 PostCSS。

[使用 PostCSS 插件让你的网站支持暗黑模式](https://juejin.cn/post/7019580413110648863)

📒 [使用 NextJS 和 TailwindCSS 重构我的博客](https://juejin.cn/post/6984267680324780040)

⭐️ [2022 前端技术领域会有哪些新的变化？](https://www.zhihu.com/question/493891614/answer/2269197391)
