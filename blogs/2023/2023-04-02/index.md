---
slug: 4月2日内容汇总
title: 4月2日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i1/O1CN01JI9isW1Ldyow2M3FG_!!6000000001323-2-tps-1344-896.png)

题图：Landscape illustration, Hayao Miyazaki, in the sea of flowers, clouds, fantastic sky, warm colors, simple composition。

📒 地表最强动画基础库：framer-motion

framer-motion v10.6 特性：animate api 可以控制随时停止、取消、完成。

https://www.framer.com/motion/animate-function/#controls

📒 PromQL 相关内容

[Introduction to PromQL, the Prometheus query language](https://grafana.com/blog/2020/02/04/introduction-to-promql-the-prometheus-query-language/)

https://promlabs.com/promql-cheat-sheet/

[为 Apache SkyWalking 构建 Grafana Dashboard —— 原生 PromQL 支持](https://juejin.cn/post/7215454235054473277)

📒 [学会 Go select 语句，轻松实现高效并发](https://mp.weixin.qq.com/s/pTw4-p_o_RXlym7qs0KYWA)

⭐️ [使用go test框架驱动的自动化测试](https://mp.weixin.qq.com/s/RKshV1hu61wabq4am906PA)

📒 面试遇到 性能优化 必答的 9 个点，加分

几点补充：

1、SPA 项目，一个路由对应一个页面，如果不做处理，项目打包后，会把所有页面打包成一个文件

实际 Webpack 打包的时候，会综合考虑 chunk 大小、缓存复用率、减少模块冗余、并行请求数等因素，不一定把 Initial Chunk 打包为单文件，也可以是多个文件，但是这些文件一定是 **同步加载** 的。

可以参考 `optimization.splitChunks` 内置分包规则：

> https://webpack.js.org/plugins/split-chunks-plugin/#defaults

2、将路由全部改成懒加载，重新打包后，首页资源拆分为 app.js 和 home.js，以及对应的 css 文件，通过路由懒加载，该项目的首页资源压缩约 52%

Code-Splitting 不一定能明显优化首屏加载性能。例如 Initial Chunk 和 Async Chunk 都有一些体积较大的公共依赖，例如 `react`、`react-dom`、`react-router-dom` 等，这种情况下，即使针对每个页面组件做了懒加载，公共依赖仍会被视为同步 chunk（因为首屏加载需要依赖这些公共包），实际异步加载的只有体积很小的业务代码。

当然 Code-Splitting 在特定场景下还是非常有用的，例如有上百个路由的后台管理系统，虽然每个页面的业务代码体积很小，但是首屏一次性加载几百个页面，压力还是有点大（首屏时间随业务规模线性增长）。如果做了路由懒加载，则可以按需加载当前页面的业务代码，保证首屏时间都是 `O(1)` 复杂度。

3、项目打包后，发现 home.js 和 about.js 均包括了该弹框组件的代码

与第一点类似，Webpack 打包的时候，不仅考虑模块冗余问题，还会考虑减少并行请求数。例如两个以上 Async Chunk 存在公共依赖，若公共依赖体积较小，则 Webpack 可能不会单独抽提 chunk，而是给每个 Async Chunk 都打包一份公共依赖，好处是可以减少网络请求数量。

[面试遇到 性能优化 必答的 9 个点，加分！](https://mp.weixin.qq.com/s/ou1ny4T81iu2oUAk75ZuBQ)

📒 [Go Mutex：保护并发访问共享资源的利器](https://mp.weixin.qq.com/s/y6lppalSRwLhCjS9yQYuUQ)

⭐️ [【补充代码】Go BIO/NIO探讨(3): 基于系统调用实现tcp echo server](https://mp.weixin.qq.com/s/76xvAvnFAcDUAa6fgoZRfg)

📒 [「高频必考」Docker&K8S面试题和答案](https://mp.weixin.qq.com/s/9XflprrEWd_DlA3l1wAG7Q)

⭐️ [gin框架中Context的Get、Query、Param函数都是从哪里获取数据的](https://mp.weixin.qq.com/s/amfGIdxA166cqKzpGd_Dpw)

⭐️ [深入解析非阻塞Golang IO框架nbio](https://mp.weixin.qq.com/s/mAo2K8lZNeJHTtShBHlUsQ)

⭐️ [Go 调试工具 - delve 快速入门](https://mp.weixin.qq.com/s/57jcuLwsJbtxnkkM7_R2_A)

📒 [怎么使用 Go 语言设计模式提升开发效率](https://mp.weixin.qq.com/s/EDpfm74wpahI7z1x1lSClQ)

⭐️ [Golang反射学习：手写一个RPC](https://mp.weixin.qq.com/s/PzfiMXiYjfGQFHW_0hTS4A)

📒 相关链接

推荐部署平台 Railway，可以部署 Docker 容器

https://railway.app/dashboard

[谁会拒绝一个免费的部署服务呢](https://mp.weixin.qq.com/s/jjmEPFwn_G4BH7df_EW2Mw)

TiDB 是一个开源、云原生、分布式、与 MySQL 兼容的数据库，用于弹性规模和实时分析

https://github.com/pingcap/tidb

⭐️ [Go如何自动解压缩包？| 文末送书](https://mp.weixin.qq.com/s/fkRNfG6xZSkn-B-eKRBgSg)

⭐️ [高并发系统设计(1): 如何实现抖音关注/粉丝列表](https://mp.weixin.qq.com/s/cIgfuumVCL4rxtNYGcQH4A)

⭐️ [Go协程池(2): 如何实现协程池](https://mp.weixin.qq.com/s/ktMff61A9vvqeRGkGwQnwg)

⭐️ [Go协程池(1): 线程vs协程](https://mp.weixin.qq.com/s/-qms3hEl2mNMkDN1S4ZQoQ)

⭐️ [简洁而不简单的 sync.Once](https://mp.weixin.qq.com/s/S-v_A7gMoDvSDaryovb-zA)

📒 axios的替代方案的思考和实践

axios 存在哪些问题：

- 与React、Vue等框架割裂
- 在性能方面毫无作为（例如没有缓存、无法避免重复请求等等）
- 臃肿的体积
- TS 类型定义混乱（在拦截器中对响应数据进行解构，但是接口请求响应的数据还是 `AxiosResponse` 类型，需要手动用 `as` 断言）

[axios的替代方案的思考和实践](https://mp.weixin.qq.com/s/bjAxC1OL4xaWZzAO0g8udw)

📒 chatgpt逐字逐行回答的效果是如何实现的

一句话总结：通过 `Content-Type: text/event-stream` 做流式响应。

[chatgpt逐字逐行回答的效果是如何实现的](https://juejin.cn/post/7213653429415673911)

📒 [可视化搭建 - keepAlive 模式](https://mp.weixin.qq.com/s/1fYO__dfUy2MIjHi3IJrmg)

⭐️ [Go 语言实现创建型设计模式 - 工厂模式](https://mp.weixin.qq.com/s/HIHQXJSdu8d8q7fKAVlUTg)

⭐️ [为什么 Go 不支持 \[\]T 转换为 \[\]interface](https://mp.weixin.qq.com/s/lG-sswO8i6w_6sMztvyOjw)

⭐️ [Go设计模式-迭代器到底是不是一个多此一举的模式](https://mp.weixin.qq.com/s/sABibBRsC2kknbAH18oatA)

📒 MDH 前端周刊第 93 期：npm、sharp images、React Labs、fzf、手写 Signals

《从 ts-node 迁移到 Bun》。本文介绍了如何将一个使用 ts-node 编写的控制台应用程序迁移到 Bun，以及在迁移过程中遇到的一些问题和解决方案。作者发现 Bun 比 ts-node 快 50%，并且迁移过程相对容易。他认为这让他对 Bun 充满信心，并期待未来更多地使用它。

> https://johnnyreilly.com/migrating-from-ts-node-to-bun

《加速 JavaScript 生态系统 - npm 脚本》。本文介绍了如何优化 JavaScript 中常用的 “npm scripts”，以减少其约 400 毫秒的开销。作者通过分析 npm CLI 的代码结构，发现大部分时间都花费在加载组成 npm CLI 的模块上。作者通过惰性加载、减小模块图等方式，将运行 npm scripts 的时间从 400 毫秒降至 22 毫秒。作者指出，JavaScript 工具中普遍存在的问题是没有简便的方法来缩短模块图，因此可以考虑在发布时将代码打包，以减少加载时间。

个人理解再总结一下：

1）如何检测 npm scripts。`which npm` 命令可以拿到 npm 解释器路径，因此可以通过 `node --cpu-prof $(which npm) run myscript` 运行脚本、生成 profile；

2）惰性加载。通过 profile 可以发现，npm cli 运行大部分时间其实都在加载模块。我们知道，Node 具有 JIT 特性，因此 `require` 实际上是非常昂贵的（回顾一下 `require` 加载机制）。建议按需 `require`，将 `require` 推迟到要用的时候再去加载，例如放在条件判断里面，可以显著提升 cli 启动性能（例如 Babel 插件、Webpack loader 支持配置字符串而不是传递实例，实际上也是延迟加载）；

3）减小模块图。解释器在遇到 top level `import` or `require` 语句时，就会加载、解析模块（还是回顾一下 `require` 加载机制），引起大量文件 IO。与 Web 工程不同，Node 工程可以将所有代码打包到一个单文件中（`target: "node"`、禁用 Webpack 默认分包规则 `optimization.splitChunks.cacheGroups.default: false`），这样避免了模块加载开销，可以显著提升 cli 应用启动性能。需要注意的是，如果一次性投喂代码太多，还是会影响性能，解法是和上面提到的惰性加载结合用（也就是 Node 不需要 bundle-splitting 分包，但可以用 code-splitting 做异步懒加载）。

> https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-4/

《如何获得一个酷炫的 NPM 包名？》。本文介绍了如何通过 NPM 的争议政策来申请将占位包的所有权转移给自己。对于长期没有更新或仅仅是占位的包，NPM 工作人员会在 4 周后自动将包的 owner 设置为申请者的用户名。申请者需要发送邮件至包的所有者并抄送 support@npmjs.com，并说明申请转移的原因、包名以及自己的 npm username。

> https://unix.bio/posts/how-to-get-npm-package-name

《您可能不需要的 Hooks》。本文介绍了 React Hooks 中一些不太常用的 Hook。

> https://reacttraining.com/blog/hooks-you-probably-dont-need

《React Labs：我们正在进行的工作》。React Labs 发布了最新的研究进展，包括 React Server Components、Asset Loading、Document Metadata、React Optimizing Compiler、Offscreen Rendering 和 Transition Tracing 等。其中，React Server Components 是由 React 团队设计的一种新的应用架构，提供了一种新的组件类型 —— Server Components，它们可以在构建期间运行，也可以在服务器上运行，让您无需构建 API 即可访问数据层。另外，React Labs 还在开发 Suspense、Transition Tracing 等功能，以提高 React 的性能和用户体验。

> https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023

《GitHub Copilot X：AI 动力的开发者体验 | GitHub 博客》。GitHub Copilot X 是 GitHub 的新一代 AI 辅助开发工具，它将 AI 引入整个开发生命周期中。除了自动完成注释和代码外，Copilot X 还支持聊天和语音交互，并在 pull requests、命令行和文档中提供 AI 支持。Copilot X 基于 OpenAI 的 GPT-4 模型，可以为开发人员生成单元测试、修复错误等。此外，Copilot X 还支持针对文档的 ChatGPT 接口，让开发人员能够快速获取关于 React、Azure Docs 和 MDN 等文档的答案。

> https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/

《如何在 2023 年开始一个 React 项目》。本文介绍了几种新 React 项目的起始套件，包括 React with Vite、React with Next、React with Astro 等。作者对每种套件的优缺点、开发者所需技能水平以及针对 React 开发者提供的特性进行了分析，并给出了不同需求的三种解决方案。最后，文章总结了一些关于 React 起始项目的思考和建议。

> https://www.robinwieruch.de/react-starter/

《使用 useImperativeHandle 进行细调 refs》。本文介绍了在 React 中使用 refs 和 useImperativeHandle 的方法。Refs 是一种用于在组件之间传递数据的机制，可以让你访问 DOM 节点并使用原生 JavaScript DOM API 对其进行操作。useImperativeHandle 允许你自定义要公开的 ref 处理程序，以便只公开子组件的特定方法。然而，需要注意的是，在 React 中，最好不要使用 refs 来实现可以通过 props 实现的命令式行为，因为这违反了 React 的核心原则。

> https://prateeksurana.me/blog/fine-tuning-refs-with-useimperativehandle/

Umi 例行每周四发一版，我觉得有趣的功能包括，1）基于 Rust 实现类 es-module-lexer 解析器用于 prepare 阶段采集 import 数据，2）配置校验陆续从 joi 迁移到 zod，3）新增 umi? 命令，这是框架结合 openai 的第一个尝试，4）MFSU 支持 WASM。

📒 Golang 相关文章

The one-and-only, must-have, eternal Go project layout

> https://appliedgo.com/blog/go-project-layout

OpenAI 的 Golang SDK，包括 ChatGPT、GPT-3、GPT-4 等。

> https://github.com/sashabaranov/go-openai

一个检测结构体是否可以占用更少内存的工具。

> https://github.com/dkorunic/betteralign

基于 Docker 的热重载开发。

> https://github.com/dkfbasel/hot-reload

📒 [Go语言爱好者周刊：第 182 期 —— GPT Go SDK](https://mp.weixin.qq.com/s/rR3HAM_o3mXfzkGx7FkiEQ)
