---
slug: 4月30日内容汇总
title: 4月30日内容汇总
authors: [garfield]
tags: []
---

⭐️ [快速上手 Go CGO，掌握在 Go 里写 C！](https://juejin.cn/post/7226187111330611255)

📒 [在 Git 中撤消更改的 6 种方法！](https://mp.weixin.qq.com/s/gWpNtnk6KKGrfALcxL26wQ)

⭐️ [Go 1.21新特性前瞻](https://mp.weixin.qq.com/s/PwSJQM7WmJeLnDDbCr78hg)

📒 [一个低代码拖拽的表单编辑器，开源咯！！！](https://mp.weixin.qq.com/s/pBePHA4d1nuYsiWuaTeIGg)

⭐️ [GMP 调度器（上篇）- 数据结构](https://mp.weixin.qq.com/s/8OSK8anzNPuslwt61XuNUA)

⭐️ Go pprof 相关

[Go 服务自动收集线上问题现场](https://mp.weixin.qq.com/s/vB9ElJCfgZeQHtB596XHpA)

[go pprof实战](https://mp.weixin.qq.com/s/vZUcDzBnrru4to6TVjrnBA)

[生产环境Go程序内存泄露，用pprof如何快速定位](https://mp.weixin.qq.com/s/DPQyEZzeDOoe4umbwdCwSQ)

⭐️ [为什么 recover 必须在 defer 中调用](https://mp.weixin.qq.com/s/Z2AsYEQeynlUv6-H-peHVg)

📒 React 相关汇总

Awesome React：近 500 个 React 项目和资源 — 这是一个与 React 生态系统相关，经常更新且深入的文章和资源集合。

> https://github.com/enaqx/awesome-react

Storybook v7.0 发布 — 几周前发布了 v7.0 版本，但官方博文直到上周才发布。无论如何，对于这个受欢迎的组件开发工具来说，这是一个重要的版本更新，现在包括一流的 Vite 支持、对 Next.js 和 SvelteKit 的零配置支持、焕然一新的 UI 等更多功能。

> https://storybook.js.org/blog/storybook-7-0/

必须知道的 React 可移植性模式 — 采用这些模式有助于避免“元框架锁定”，如果你选择的工具发生了你不喜欢的演变，你就不会被束缚。

> https://www.youtube.com/watch?v=yi8UCnXPu8U

使用 React Hook Form 实现高级多步表单

> https://claritydev.net/blog/advanced-multistep-forms-with-react

next-route-visualizer: 将 Next.js v13+ 应用路由结构树形可视化 — 一款用于可视化 Next.js 应用目录路由的软件包，该软件包的功能可以参考这个 演示。

> https://github.com/DiiiaZoTe/next-route-visualizer

Simple Light v2.0: 一款用 Tailwind CSS 和 React 实现的落地页模版 — 旨在为开发人员提供创建面向 SaaS 产品、在线服务等落地页所需的所有基本组件。

> https://github.com/cruip/tailwind-landing-page-template

📒 [一文教你搞定所有前端鉴权与后端鉴权方案，让你不再迷惘](https://juejin.cn/post/7129298214959710244)

📒 [protoc 插件-protoc-gen-grpc-gateway-gosdk](https://mp.weixin.qq.com/s/OzRF_l_LNJmJ95dLl3oiCw)

⭐️ [为什么 defer 的执行顺序和注册顺序不同](https://mp.weixin.qq.com/s/TnKg06dLgJuGJGD_OfuiAg)

📒 MDH 前端周刊第 97 期：Vite 4.3、Node 20、pretty-ts-errors、React Query 5

《发布 v5.80.0・webpack/webpack》。Webpack v5.80.0 的新增功能包括支持在 import.meta 中使用解构赋值、支持带有 AwaitExpression 的解构赋值的树摇、引入 errorsSpace 和 warningsSpace 以获得更可读的跟踪信息等。Bug 修复主要涉及 CSS 相关问题、语法错误、模块 ID 分配等。

> https://github.com/webpack/webpack/releases/tag/v5.80.0

《Deno vs. Node：没有人准备好迎接这个变化 | .cult by Honeypot》。本文介绍了 Node.js 和 Deno 两个 JavaScript 运行环境的比较。Node.js 是一个流行的服务器端、开源、跨平台的 JavaScript 运行环境，自 2009 年以来一直占据着 Web 开发世界的主导地位。相比之下，Deno 在设计上有所改进，提供了更安全的框架和现代特性，由 Node.js 的创始人 Ryan Dahl 推出。然而，尽管 Deno 解决了 Node.js 的一些设计缺陷，但采用 Deno 的速度非常缓慢，大多数开发人员仍然满意于 Node.js。本文将探讨这种现象背后的原因，并对 Node.js 和 Deno 进行比较，从第三方包管理、API、安全性和 TypeScript 支持等方面进行分析。

> https://cult.honeypot.io/reads/deno-vs-node-main-differences/

《发布 Vite 4.3。》。Vite 4.3 发布，主要改进了开发服务器的性能。该版本优化了解析逻辑，改进了热路径，并实现了智能缓存，以查找 package.json、TS 配置文件和已解决的 URL。此外，该团队正在开发一个官方基准测试工具，以获取每个 Pull Request 的性能指标，并通过 vite-plugin-inspect 提供更多的性能相关功能来帮助用户识别应用程序的瓶颈。明年他们将发布 Vite 5，这将是今年唯一的 Vite 主要版本，同时也会放弃对 Node.js 14 和 16 的支持。

> https://vitejs.dev/blog/announcing-vite4-3.html

《我们如何让 Vite 4.3 更快》。这篇文章介绍了 Vite 4.3 是如何通过优化解析策略、使用异步函数、并行处理和 JavaScript 优化等方式来提高性能的。

> https://sun0day.github.io/blog/vite/why-vite4_3-is-faster.html

《用 Next.js 13 和 React Server Components 建立博客》。本文介绍了如何使用 Next.js 13 和 React Server Components 构建博客，并提供了实际示例。文章包括设置项目、文件结构、动态路由、获取和呈现 Markdown、SEO、部署等内容。作者还介绍了如何使用 next-mdx-remote 和 Bright 进行语法高亮。本文旨在帮助读者快速搭建自己的博客，并鼓励读者进行自己的实验和探索。

> https://maxleiter.com/blog/build-a-blog-with-nextjs-13

《发布 TypeScript 5.1 Beta - TypeScript。》。TypeScript 5.1 测试版已经发布，其特点是未定义返回函数的隐式返回更容易，以及 getters 和 setters 的非相关类型。该版本还包括 JJSX 元素和 JJSX 标签类型之间的解耦类型检查、命名的 JJSX 属性以及同时自动编辑多个位置的能力。TypeScript 现在在 TypeScript 和 JavaScript 文件中键入 @param 标签时提供片段补全。

> https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-beta/

《GitHub - yoavbls/pretty-ts-errors：在 VSCode 中使 TypeScript 错误更漂亮和易读》。这是一个名为“Pretty TypeScript Errors”的Visual Studio Code扩展，旨在让TypeScript错误变得更加美观和易于阅读。当类型的复杂性增加时，TypeScript错误会变得越来越混乱。这个扩展能帮助您更好地理解错误信息。主要功能包括：为错误信息中的类型提供语法高亮，支持深色和浅色主题；在错误信息中的类型旁边提供一个按钮，可以跳转到相关类型声明；提供一个按钮，可以将您导航到typescript.tv，那里有详细的解释，有时还有视频；提供一个按钮，可以将您导航到ts-error-translator，那里可以用简单的英语阅读错误。

> https://github.com/yoavbls/pretty-ts-errors

《ECMAScript 2023 有什么新特性 | pawelgrzybek.com》。JavaScript 的新功能列表已经确定，最终版本的 ECMAScript 规范预计将于 6 月底发布。这些新功能包括在 Array 和 TypedArray 原型上添加 findLast() 和 findLastIndex() 方法、标准化 Hashbang 语法、允许使用符号作为 WeakMap 键以及在 Array.prototype 上添加返回新副本的方法等。这些功能都已达到第 4 阶段，并预计将包含在即将发布的 ECMAScript 版本中。

> https://pawelgrzybek.com/whats-new-in-ecmascript-2023/

[MDH 前端周刊第 97 期：Vite 4.3、Node 20、pretty-ts-errors、React Query 5](https://mdhweekly.com/weekly/issue-0097)
