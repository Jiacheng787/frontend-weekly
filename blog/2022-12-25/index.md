---
slug: 12月25日内容汇总
title: 12月25日内容汇总
authors: [garfield]
tags: []
---

📒 [Learning Go by examples: part 7 - Create a cross-platform GUI/Desktop app in Go](https://dev.to/aurelievache/learning-go-by-examples-part-7-create-a-cross-platform-gui-desktop-app-in-go-44j1)

📒 解决 Antd 样式预设影响全局样式问题

注意 Antd 打包默认会带一套 `global.less` 样式预设，在某些老工程用的时候，样式预设可能会影响全局样式。由于 Antd 的组件样式都是建立在这个格式化后的样式上的，不引入这个文件则会导致组件内部样式出问题。解决方案是 **收敛 `global.less`，并保证外部的全局样式无法轻易覆盖 antd 的样式**。

首先需要限定 `global.less`，手动套一层作用域：

```less title="node_modules/antd/lib/style/core/index.less"
*[class*='ant-'] {
  @import 'global.less';
}
```

> antd 相关的组件都至少会有一个以 `ant-` 开头的 class，我们只要利用好这个特点及 CSS 属性选择器即可达到目的

这里存在一个问题，如何将 Antd 的 `global.less` 文件替换为自己的模块，有两种解决方案：

- 用 `patch-package` 打补丁，但是如果第三方库体积过大会 OOM
- 另一种思路是用 `NormalModuleReplacementPlugin` 在构建阶段去替换模块

下一步是提升组件样式的权重，此举还能间接提升所有 antd 的样式的权重，避免外部的全局样式对 antd 造成侵入。

既然是改样式，那就用 CSS 界的 babel —— PostCSS，写个 PostCSS 插件，将所有 `.ant` 开头的类选择器都同样升高即可。利用的是 `postcss-selector-parser` 这个 PostCSS 官方提供的解析选择器的库，过滤出「第一个以 `ant-` 开头的类选择器」，在其前面添加一个属性选择器 `[class*='ant-']`，如果这个选择器排在当前 rule 的第一个或者前面是一个 combinator，则再加一个通配符 `*`。

[如何优雅地彻底解决 antd 全局样式问题](https://juejin.cn/post/6844904116288749581)

📒 [对于“前端状态”相关问题，如何思考比较全面](https://juejin.cn/post/7180242080780779580)

📒 [二十张图片彻底讲明白Webpack设计理念，以看懂为目的](https://juejin.cn/post/7170852747749621791)

📒 [【第2820期】去哪儿网用户体验之端上优化实践](https://mp.weixin.qq.com/s/be-0gUtcg9o7mAbMnCsYXA)

📒 [有趣的 Go HttpClient 超时机制](https://mp.weixin.qq.com/s/SA2Me6QGkzxLAfhmQ0eWmA)

📒 [JavaScript 中文周刊 #68 - 如何优化 INP 指标，提升用户体验](https://mp.weixin.qq.com/s/dW85gK_5YkwLcj7TxUBHzg)

📒 [原生拖拽太拉跨了，纯JS自己手写一个拖拽效果，纵享丝滑](https://juejin.cn/post/7145447742515445791)

📒 [【综合笔试题】难度 4/5，有一定代码量的图论搜索题](https://mp.weixin.qq.com/s/KLLILNZOlIrrNaKPwORPsA)

📒 [别乱用了，用新的。Go SliceHeader 和 StringHeader 将会被废弃！](https://mp.weixin.qq.com/s/al5zXILiKnqnsh-XrLMB6A)

📒 [看了这篇你会发现，你是懂Go内存分配的](https://mp.weixin.qq.com/s/T4tk-sckA1oNcWIvp27MMA)

📒 [你构建的代码为什么这么大](https://juejin.cn/post/7179049172706787387)

📒 [Go语言中常见100问题-#24 Not making slice copies correctly](https://mp.weixin.qq.com/s/vZBePdCuKe12OMQOj6Rz4A)

📒 理解 Go generate

https://go.dev/blog/generate

https://blog.carlmjohnson.net/post/2016-11-27-how-to-use-go-generate/

📒 [专注性能的多端研发框架 - ice.js 3 正式发布！](https://mp.weixin.qq.com/s/o8XL71WPDHaui81O61QSoA)

📒 [【综合笔试题】难度 1.5/5，常规二叉树爆搜题](https://mp.weixin.qq.com/s/p9kHaJQdm3_zi9XlR7VFJg)

📒 [低代码没有做到的事情，ChatGPT做到了](https://mp.weixin.qq.com/s/AMXJpRJ9MU2_jg4utn18eg)

⭐️ [Vue3生命周期Hooks的原理及其与调度器(Scheduler)的关系](https://juejin.cn/post/7093880734246502414)

📒 开始做请求方案的调研，这是 Umi/Bigfish 今年最佳实践的最后一个拼图。第一个深入看的是 React Query，翻了 Practical React Query | TkDodo's blog 系列文章后做了两篇笔记。然后对 React Query 路转粉，学习到不少关于请求的细节处理思路，推荐大家都好好读一读

https://tkdodo.eu/blog/practical-react-query

📒 DebugBear 更新了一篇《2022 In Review: What’s New In Web Performance?》 总结 2022 年 Web 性能领域的变化，包括提升资源优先级的 Priority Hints、Chrome 不做 OSCP 证书校验后的性能提升、用于衡量交互后响应速度的 INP 指标、Google 将 Core Web Vitals 纳入排名因素、Chrome 浏览器支持前进后退缓存、HTTP/3 标准化、Chrome DevTool 和 performance API 会提示哪些资源会 block、用于提前提供资源列表的 103 响应、Chrome 108 开始支持全页面预渲染、Safari 支持 AVIF、Safari 原生支持图片懒加载

https://www.debugbear.com/blog/2022-in-web-performance

📒 StackDiary 更新了《The Most Popular Node.js Frameworks in 2022》和《The Most Popular CSS-in-JS Libraries in 2022》，分别由 Next.js 和 Styled-Components 拔得头筹，Styled-Components 已连续 4 年第一

https://stackdiary.com/node-js-frameworks/

https://stackdiary.com/css-in-js-libraries/

📒 发现一本免费的算法书《Hello 算法》，没细看，感兴趣可关注

https://www.hello-algo.com/

📒 React 的 useEvent RFC 里，useEvent 更名为 useEffectEvent，Event function 更名为 Effect Event

https://github.com/reactjs/reactjs.org/pull/5373

📒 看到 Codux 发布，来自 Wix 联合创始人的作品。这是一个 React 组件可视化编辑器，类似 Storybook，特点是和代码之间双向同步

https://dev.to/codux/introducing-codux-15j5

📒 React Router 发布 6.5，支持 Optional Route Segments。在任何 path 段末尾添加一个 ? 会使整个路径段成为可选，对静态段和动态参数都有效

https://github.com/remix-run/react-router/releases/tag/react-router%406.5.0

📒 Tauri Mobile 发布 Alpha，支持 iOS 和 Andriod，需要用 2.0.0-alpha.0 版本的依赖

https://tauri.app/blog/2022/12/09/tauri-mobile-alpha/

📒 [MDH 前端周刊第 80 期：SvelteKit 1、Tauri Mobile、RR 6.5、useEffectEvent](https://www.yuque.com/chencheng/mdh-weekly/gz7aeivrvmfq4p97)

📒 [🌼 细数那些惊艳一时的 CSS 属性](https://juejin.cn/post/7155780555554947102)

📒 [关于无感刷新Token，我是这样子做的](https://juejin.cn/post/7170278285274775560)

📒 [JavaScript 中的依赖注入](https://mp.weixin.qq.com/s/bZhumjAQLBETbxrhaO5pCw)

📒 [我的Vue.js生态开源之旅](https://mp.weixin.qq.com/s/FjbqsQl7g2aSMOhq_ivOhQ)

📒 [为什么用公钥加密却不能用公钥解密](https://mp.weixin.qq.com/s/YXVURw55G2hT7BtShdGG4A)

⭐️ [「Go工具箱」一文读懂主流web框架中路由的实现原理](https://mp.weixin.qq.com/s/cZ0fvVmUIrLKwlPFtetPKA)

⭐️ [Go类型系统：有何与众不同](https://mp.weixin.qq.com/s/H3iygMqDTRWv6h2VcgVeUg)
