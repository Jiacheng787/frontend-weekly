---
slug: 5月21日内容汇总
title: 5月21日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i2/O1CN01jO672q21ohyPcdBIi_!!6000000007032-2-tps-2346-1212.png_1200x1200.jpg)

题图：王国之泪。

⭐️ [一文掌握 Go 并发模式 Context 上下文](https://juejin.cn/post/7233981178101186619)

⭐️ [React 性能优化 | 包括原理、技巧、Demo、工具使用](https://juejin.cn/post/6935584878071119885)

📒 [关于组件化链路设计的分享](https://mp.weixin.qq.com/s/LHt0hH3RAFzCjH0M-oOitg)

📒 [硬核，图解bufio包系列之读取原理](https://mp.weixin.qq.com/s/FWL59nuWq3UrItEIYopAdA)

📒 [6 个 TypeScript 的高级技巧，帮你写出更清晰的代码](https://mp.weixin.qq.com/s/-waUajyPk0K8KDzvzHzjgA)

📒 [日常开发中，提升技术的13个建议](https://mp.weixin.qq.com/s/tJ6QMjCcQmHww98qqLXfrg)

⭐️ [开发工具 All In One](https://mp.weixin.qq.com/s/3SoyyTucxII71fjh0smE3A)

⭐️ [从一次 PR 经历谈谈 Go 和 MySQL 的时区问题](https://mp.weixin.qq.com/s/ohpshzrYkERbpioPfb-CvA)

⭐️ [玩转Netty，从“Hello World”开始！](https://mp.weixin.qq.com/s/C348kLhjNwCKN_HEgIvfrA)

📒 [面试官：一千万的数据，你是怎么查询的](https://mp.weixin.qq.com/s/bSu83tgecIyvdJyQIwER1g)

⭐️ [context.Context Code Review](https://mp.weixin.qq.com/s/C2L-reec4DejgzgUoZzP0A)

⭐️ [提升 Web 核心性能指标的 9 个建议](https://mp.weixin.qq.com/s/RVswilfm0MMOBGaMs_3b4g)

📒 [Vue 转 React的开发者，常犯的10个错误](https://mp.weixin.qq.com/s/Md7JIqQ5ziQZCY5IGm56Uw)

📒 [你们喜欢用forEach吗？说说我为啥不喜欢用forEach](https://mp.weixin.qq.com/s/fjXOlWRDvy6F_dyg-L-zlA)

⭐️ [Go语言中常见100问题-#35 Using defer inside a loop](https://mp.weixin.qq.com/s/Ls1_qaEnuc8MSZoDyTwa1Q)

⭐️ [Go设计模式--解释器模式](https://mp.weixin.qq.com/s/8v0UZWygCvkbye4Y0P-3sQ)

📒 [分布式唯一 ID 通用选型](https://mp.weixin.qq.com/s/hlx93p1fGxh7f3SjShJP4w)

📒 MDH 前端周刊第 99 期：jQuery 3.7、Vue 3.3、Deopt Explorer、粘性菜单、Remix、SSC

- Vue [v3.3](https://xlog.sxzz.moe/vue-3-3) 新特性详解
- Github 启用新[代码搜索](https://github.blog/changelog/2023-05-08-the-new-code-search-and-code-view-is-now-generally-available/)

《使用 Deno 在 Rust 中运行 JavaScript》。本文介绍了作者创建的一个名为 “js-in-rs” 的基于 Rust 的 CLI 工具，用于使用 JavaScript 表达式过滤文件。与 grep 工具使用正则表达式不同，js-in-rs 使用 JavaScript 表达式进行过滤。文章详细介绍了 js-in-rs 的工作原理和代码实现，并探讨了在 Rust 应用程序中运行 JavaScript 代码的潜在应用，例如 Web 服务器、数据管道和数据库用户定义函数等。

> https://austinpoor.com/blog/js-in-rs

《发布 Vue 3.3》。Vue 3.3 "Rurouni Kenshin" 已经发布，重点是改善开发者在使用 Vue 与 TypeScript 时的体验。该更新包括改进 SFC `<script setup>` 与 TypeScript 的使用，宏中的导入和复杂类型支持，通用组件，更符合人体工程学的 defineEmits ，带有 defineSlots 的类型槽，以及反应式道具 destructure 和 defineModel 等实验性功能。

> https://blog.vuejs.org/posts/vue-3-3

《React 协调：它是如何工作的，为什么我们应该关心》。本文详细介绍了 React 的协调算法，以及它如何影响我们的日常代码。文章探讨了条件渲染、"key" 属性和为什么不应该在其他组件内声明组件等问题，并提供了解决方法。作者通过分析 React 的虚拟 DOM 和状态更新过程，解释了为什么在条件渲染中声明组件会重新挂载，以及为什么需要使用 "key" 属性来避免组件重复挂载或保证元素的唯一性。最后，作者提供了多个示例来说明这些概念。

> https://www.developerway.com/posts/reconciliation-in-react

《介绍 Deopt Explorer - TypeScript》。本文介绍了如何使用内联缓存（inline caching）优化 JavaScript 代码的性能，并讲解了在 TypeScript 编译器中如何使用 Deopt Explorer 工具来分析性能问题和减少多态现象。文章详细介绍了内联缓存的概念、不同类型的缓存以及多态现象的产生原因。通过实例分析，作者展示了如何使用 Deopt Explorer 工具来分析 V8 引擎生成的 ICs 和对象类型，并通过优化 Symbol 类型的属性访问，将编译时间平均缩短了 8-10%。

> https://devblogs.microsoft.com/typescript/introducing-deopt-explorer/

《我的 Remix 之路》。这篇文章讨论了作者使用 Remix 框架的经验和遇到的问题。作者认为 Remix 是一个很好的框架，但是也存在一些缺点。作者提出了四个主要问题：开发体验、路由过于神秘、仍然不够成熟以及控制不是默认的。作者指出，Remix 在某些方面缺乏对开发者的控制权，例如构建过程和静态资源处理。此外，Remix 的路由语法可能会使人感到困惑，并且更新时可能会出现问题。

> https://redd.one/blog/my-struggle-with-remix

《不阻塞事件循环的实用指南》。本文介绍了 JavaScript 在单线程环境下的事件循环机制，以及如何避免同步任务阻塞事件循环。作者提出了三种解决方案：增加节点数量、将同步任务改为异步任务、将同步任务转移到另一个线程。其中，将同步任务转移到另一个线程需要使用 Worker，并且有数据传输限制。作者还介绍了将同步任务改为异步任务的具体实现方法，即通过将代码块分散到事件循环中来添加同步执行之间的间隙，从而让事件循环得以运行。

> https://www.bbss.dev/posts/eventloop/

《React 服务器组件是什么？》。React Server Components 是在服务器上渲染的 React 组件，旨在减少网络瀑布效应。与传统的服务器端渲染 (SSR)、并行获取和架构更改相比，Server Components 具有更好的用户体验、更快的构建速度和更易于维护的特点。Server Components 可以通过在 JS 和 HTML 中填充一些初始数据来减少客户端请求次数，而且这种方式可以嵌套使用，只需要向顶层组件和其子组件发出一次请求即可。Server Components 还可以减小 JS 包的大小，只发送必要的数据给客户端，从而提高性能。

> https://www.viget.com/articles/what-even-are-react-server-components/

[MDH 前端周刊第 99 期：jQuery 3.7、Vue 3.3、Deopt Explorer、粘性菜单、Remix、SSC](https://mdhweekly.com/weekly/issue-0099)

📒 [Go语言爱好者周刊：第 186 期 — 可视化 Go 程序调用](https://mp.weixin.qq.com/s/mVpUKl4IyuHa3nL9pyWMGg)
