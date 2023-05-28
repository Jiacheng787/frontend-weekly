---
slug: 5月28日内容汇总
title: 5月28日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i3/O1CN012NfNlw1dhKp20MNdF_!!6000000003767-2-tps-2284-1106.png_1200x1200.jpg)

题图：王国之泪。

📒 [支付系统就该这么设计，稳的一批！！](https://mp.weixin.qq.com/s/STk2GUJAvNhawjODLmCMpQ)

⭐️ [聊聊Go语言的控制语句](https://mp.weixin.qq.com/s/2P9_nyrdZ3JqlKRIR8--7g)

⭐️ [不背锅运维：Go语言切片内存优化技巧和实战案例](https://juejin.cn/post/7210747150828798008)

⭐️ [Go：4个场景就可以让你知道Goroutine和通道是怎么用的](https://mp.weixin.qq.com/s/bqZ6gAsOZoVEMSCeOuLbiQ)

⭐️ [「Go开源包」asynq：一个基于redis的，简单、可靠、高效的分布式任务队列包](https://mp.weixin.qq.com/s/nbouC5ynfZShaTMTYiCJFA)

⭐️ [goroutine 泄漏与检测](https://mp.weixin.qq.com/s/-hflcZfkYSIPers4PYJ7zQ)

📒 [字节都在用的代码自动生成](https://juejin.cn/post/7220054775298359351)

📒 [Hook 革命！浅谈 React 新 Hook 的未来与思想](https://mp.weixin.qq.com/s/DZVMvq_wwtjjCckci-tVaQ)

⭐️ [Go Sync 包：并发的 6 个关键概念](https://mp.weixin.qq.com/s/iPpWd8vjyaN2sJFwxzN9Bg)

📒 Bun发布全新Bundler：比Webpack快220倍

[Bun发布全新Bundler：比Webpack快220倍](https://mp.weixin.qq.com/s/q_8cdz9g3fbpvlKgZb9XVg)

https://bun.sh/blog/bun-bundler

⭐️ [大大大模型部署方案抛砖引玉](https://mp.weixin.qq.com/s/Zjta1GuO_NCgjGqRx6wxyA)

📒 [ChatGPT和Claude 对比测试（以Review MLIR Codegen代码为例）更新官方ChatGPT的结果](https://mp.weixin.qq.com/s/DY7ivzxZzBa6eOr4e5mJPQ)

⭐️ [Everything App: HuggingFace Transformers Agent](https://mp.weixin.qq.com/s/bS5frzE-QVwLMcbTHQ_rQQ)

📒 [【第2950期】vite-plugin-vue-devtools：写一个Vue DevTools，让开发体验飞一会](https://mp.weixin.qq.com/s/xqasN0BXBm6EL0TqHJR_NA)

⭐️ [Go timer Code Review](https://mp.weixin.qq.com/s/BMMZX4F2oatPyksZtbczuQ)

📒 H5加载性能优化

对于大部分用户而言，我们根本不需要把代码编译到 ES5，不仅体积大，而且运行速度慢。**我们需要做的，就是把代码编译到 ES2015+，然后为少数使用老旧浏览器的用户保留一个 ES5 标准的备胎即可。**

具体的解决方法就是 `<script type="module">` 标签。

支持 `<script type="module">` 的浏览器，必然支持下面的特性：

- async/await
- Promise
- Class
- 箭头函数、Map/Set、fetch 等等...

而不支持 `<script type="module">` 的老旧浏览器，会因为无法识别这个标签，而不去加载 ES2015+ 的代码。另外老旧的浏览器同样无法识别 `nomodule` 熟悉，会自动忽略它，从而加载 ES5 标准的代码。

![image](./Pasted%20image%2020230524120059.png)

[# React 16 加载性能优化指南](https://zhuanlan.zhihu.com/p/37148975)

[# 让老板虎躯一震的前端技术，KPI杀手](https://juejin.cn/post/6844903762704908296)

📒 tcmalloc 解内存分配问题

https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/6722

[# 深入Golang内存管理(一) TCMalloc篇](https://blog.csdn.net/qq_43188744/article/details/115355566)

[# Go内存管理之TCMalloc](https://studygolang.com/articles/26304)

[# TCMalloc : Thread-Caching Malloc](https://google.github.io/tcmalloc/design.html)

[# Go 内存管理（二）： TCMalloc分配算法](https://zhuanlan.zhihu.com/p/305275512)

⭐️ [XML 处理，Go 标准库太简单了怎么办](https://mp.weixin.qq.com/s/Neuc_hiVsVE83d47e40l6w)

📒 [我用ChatGPT，给RabbitMQ加了个连接池](https://mp.weixin.qq.com/s/w1ahH87zZDpU_c_ygeTGNg)

📒 [React组件封装实践：如何拆解复杂的页面](https://mp.weixin.qq.com/s/3KL0pOB8YOIfvzPKvOjhwg)

📒 [现代 Web 应用 Devtools 调试技巧](https://mp.weixin.qq.com/s/u_tyq-k_IBlOBecdGN1b-g)

📒 [在服务端写 React 组件是什么体验](https://mp.weixin.qq.com/s/vYVru8x3rtNFZdHkK3rCpA)

⭐️ [Go 空结构体：零内存的魔力](https://mp.weixin.qq.com/s/rD3pnjWF5_Zz-r6GB0LrrA)

📒 [这个线上BUG，让你彻底搞懂了MySQL的字符集，别问我咋知道的](https://mp.weixin.qq.com/s/yIwJq1K7YVWZ5i2TIbXZTg)

⭐️ LLaMA 模型调研

当前 HuggingFace 已经实现了 LLaMA 模型 代码，可通过以下方式直接调用：

```py
from transformers import LlamaForCausalLM
model = LlamaForCausalLM.from_pretrained(
    base_model,
    load_in_8bit=load_8bit,
    torch_dtype=torch.float16,
    device_map="auto",
)
if not load_8bit:
    model.half()  # seems to fix bugs for some users.
model.eval()
```

https://github.com/pengxiao-song/LaWGPT

https://github.com/pengxiao-song/LaWGPT/blob/f329433cad833a44c2cd14c5165a1655cf9d68ad/src/generate.py#L7

https://huggingface.co/docs/transformers/main/model_doc/llama

[NLP（九）：LLaMA, Alpaca, ColossalChat 系列模型研究](https://zhuanlan.zhihu.com/p/618695885)

[使用 Google Colab 训练 Stable Diffusion LoRA 模型教程](https://blog.esonwong.com/stable-diffusion-lora-training/)

https://colab.research.google.com/#scrollTo=-Rh3-Vt9Nev9

[单GPU实现99%ChatGPT性能，「原驼」火了：手机也能微调大模型](https://mp.weixin.qq.com/s/vqdGdcWyYmPKukW5jV6Pyw)

[调教LLaMA类模型没那么难，LoRA将模型微调缩减到几小时](https://mp.weixin.qq.com/s/5uFIGw7TBHJA_Q26REG4OA)

⭐️ [「Go 框架」深入理解 gin 框中 Context 的 Request 和 Writer 对象](https://juejin.cn/post/7224890694162841637)

⭐️ [Go1.22 可能会解决循环变量的坑，真好！！](https://mp.weixin.qq.com/s/N7_-WNBsTpTc4X8qTQw-Nw)

📒 [SpringBoot + 规则引擎 URule，太强了！](https://mp.weixin.qq.com/s/K7t4ocG9wIaF_QSk6-kCEQ)

📒 [2023 年你还在兼容旧版浏览器吗](https://mp.weixin.qq.com/s/dxE6OgNWFrvBJb_KNPl-hQ)

📒 mysql的varchar字段最大长度真的是65535吗

在 mysql 建表 sql 里，我们经常会有定义字符串类型的需求。mysql 里有两个类型比较适合这个场景：`char` 和 `varchar`。

声明它们都需要在字段边上加个数组，比如 `char(100)` 和 `varchar(100)`，这个 100 是指当前字段能放的最大字符数。

`char` 和 `varchar` 的区别在于，`varchar` 虽然声明了最大能放 100 个字符，但一开始不需要分配 100 个字符的空间，可以根据需要慢慢增加空间。而 `char` 一开始声明是多少，就固定预留多少空间。

所以，varchar比起char更省空间，一般没啥大事，大家都爱用varchar。

[mysql的varchar字段最大长度真的是65535吗](https://mp.weixin.qq.com/s/KsLYIkU8Dslu3Hw6QNaNhQ)

⭐️ [Go 细节篇-内存回收又踩坑了](https://mp.weixin.qq.com/s/KH-DJl5DhhnQ3Jwt2BPh-g)

📒 [【第2948期】得物前端巡检平台的建设和应用：建设篇](https://mp.weixin.qq.com/s/ocyqSVrTtcj0GllQOKEg0g)

⭐️ [Go设计模式--中介者，最后的模式！](https://mp.weixin.qq.com/s/91-XUm5Gn9oQLd_F4dLb3A)

⭐️ channel 的 15 条规则和底层实现

操作规则

| 操作 | nil | 已关闭的 channel | 未关闭有缓冲区的 channel	| 未关闭无缓冲区的 channel |
| --- | --- | --- | --- | --- |
| 关闭 | panic | panic | 成功关闭，然后可以读取缓冲区的值，读取完之后，继续读取到的是 channel 类型的默认值 | 成功关闭，之后读取到的是 channel 类型的默认值 |
| 接收 | 阻塞 | 不阻塞，读取到的是 channel 类型的默认值 | 不阻塞，正常读取值 | 阻塞 |
| 发送 | 阻塞 | panic | 不阻塞，正常写入值 | 阻塞 |

编译规则

| 操作 | | |
| --- | --- | --- |
| 接收 | 只写 channel | 编译错误 |
| 发送 | 只读 channel | 编译错误 |
| 关闭 | 只读 channel | 编译错误 |

[channel 的 15 条规则和底层实现](https://mp.weixin.qq.com/s/QHE6Dvf36frADRrTz18W9g)

📒 [三分钟，教你3种前端埋点方式！](https://mp.weixin.qq.com/s/Jd-DjOqyZ_j4tXK4l4a1QQ)

📒 MDH 前端周刊第 100 期：React Query、演讲、Reactivity、Bun Bundler、Rome、infer

《你可能不需要 React Query》。这篇文章讨论了 React Server Components 是否会取代 React Query。作者认为，每个工具都应该帮助我们解决我们遇到的问题。传统上，React 在数据获取方面并不强调如何处理，这就是 React Query 和 swr 等库产生的原因。随着服务端渲染的出现，React Query 也扮演了重要的角色。但是，随着 React Server Components 的出现，如果您的数据获取仅发生在服务器上，那么您可能不需要 React Query。最后，作者提醒读者，不要盲目追随新技术，一切都有权衡。

> https://tkdodo.eu/blog/you-might-not-need-react-query

《Nuxt 发布 3.5》。Nuxt 3.5.0 发布了，带来了许多令人兴奋的功能，特别是在类型支持方面。此外还有 Nitropack v2.4 和丰富的 JSON 负载等更新。Nuxt 3.5.0 还支持交互式服务器组件、环境配置、完全类型化页面和 “捆绑器” 模块解析等功能。

> https://nuxt.com/blog/v3-5

《发布 TypeScript 5.1 RC》。TypeScript 5.1 已经作为候选版本发布，除了关键的错误修复外，预计在稳定版发布前不会有进一步的变化。新版本包括更容易的未定义返回函数的隐式返回，getters 和 setters 的不相关类型， JJSX 元素和 JJSX 标签类型之间的解耦类型检查，命名的 JJSX 属性，以及其他。TypeScript 5.1 还支持 JJSX 标签的链接光标，@param JSDoc 标签的片段补全，以及优化，如避免不必要的类型实例化和联合字面的负数检查。

> https://devblogs.microsoft.com/typescript/announcing-typescript-5-1-rc/

《在科技会议上从参会者到演讲者的 9 个技巧 | GitHub博客》。GitHub Universe 是一年一度的全球开发者和客户活动，今年将于 11 月 8 日至 9 日在线上和线下举行。文章提供了一些撰写成功演讲提案的技巧，例如标题要吸引人、具体说明内容的收获、突出会议性质等。此外，还提供了演讲者个人介绍的公式和其他有用资源，如往年活动的回顾、联系前任演讲者、关注行业热点等。最后，文章呼吁有兴趣参加演讲的人提交他们的想法，并列出了被选中的好处。

> https://github.blog/2023-05-18-9-tips-to-go-from-attendee-to-speaker-at-a-tech-conference/

《GitHub - DukeLuo/eslint-plugin-check-file》。本文介绍了一个名为 eslint-plugin-check-file 的 ESLint 插件，该插件可以帮助开发者强制规范化文件和文件夹的命名方式。插件支持多种规则，例如强制指定文件夹名称、文件名命名规范等。开发者只需要在 .eslintrc 配置文件中添加相应的规则即可使用。

> https://github.com/DukeLuo/eslint-plugin-check-file

《揭开魔法的面纱：探索各种框架的反应性》。本文深入探讨了各种前端框架中的响应性（reactivity）机制，着重比较了粗粒度和细粒度响应性之间的差异。React 和 Angular 属于粗粒度系统，需要重新执行组件树来检测更改并更新 DOM；Svelte、Vue、Qwik 和 Solid 属于细粒度系统，可以更加高效地检测和更新 DOM。Qwik 是唯一一个不需要预热的框架，它通过 SSR/SSG 将状态与 DOM 相关联，并在客户端恢复这些信息，从而避免了下载大量应用代码的问题。作者认为，虽然粗粒度系统 “随便用” 会更方便，但是使用细粒度系统可能会更高效，因为后者已经进行了优化。

> https://www.builder.io/blog/reactivity-across-frameworks

《介绍一下 Legend-State 1.0：更快地构建更快的应用程序》。文章介绍了一个名为 Legend-State 的 React 状态库，它具有极快的速度、易用性、自然的细粒度反应和内置持久性等四个主要优点。该库基于可观察对象实现，使用 Proxy 跟踪对象中的路径，从而在速度和内存使用方面超越其他 React 状态库。使用该库不需要繁琐的模板代码和上下文、动作、规约、分派器等，只需调用 get() 获取原始数据并使用 set() 更改数据即可。此外，该库还支持细粒度反应，使得组件能够在特定值更改时更新，从而减少重新渲染的次数。最后，该库还内置了持久化功能，可以保存和同步应用程序状态。未来，该库将添加更多的持久化插件和辅助可观察对象和钩子函数。

> https://legendapp.com/open-source/legend-state-v1/

《管理 GitHub 通知》。这篇文章介绍了一种名为 “Notification-driven Developement” 的方法来管理 GitHub 上的项目。该作者通过使用 GitHub 的通知系统来管理他所维护的各种规模的项目，以保持项目的活跃度和稳定性。他提出了 “Inbox-Zero” 概念，即每天处理完所有收到的通知，以便快速响应社区成员并控制维护工作量。文章还分享了一些减少通知数量和组织通知的技巧，并介绍了一个用户脚本来自动化通知处理。最后，作者强调了享受工作和保持良好的工作与生活平衡的重要性。

> https://antfu.me/posts/manage-github-notifcations-2023

《Bun Bundler》。Bun bundler 是一个快速的本地打包工具，现在已经进入了 beta 测试阶段。它可以通过 bun build CLI 命令或新的 Bun.build() JavaScript API 来使用。该工具可以用于构建前端应用程序，并提供了内置的 Bun.build () 函数和 bun build CLI 命令。文章指出，JavaScript 生态系统的复杂性不断增加，如何运行 TypeScript 文件、如何为生产环境构建 / 打包代码等问题使得开发变得越来越复杂。Bun bundler 的目标是将打包引入 JavaScript 运行时，从而使前端和全栈代码的发布更简单、更快速。该工具的优点包括：插件执行快速、生成预转换文件以提高运行性能、统一的插件 API、构建输出数组、支持 ESM 模块系统、支持 tree-shaking、支持源码映射、支持 JS 压缩器等。未来，Bun bundler 还将与 Bun 的 HTTP 服务器 API（Bun.serve）集成，从而实现用简单的声明式 API 代替

> https://bun.sh/blog/bun-bundler

《将 Next.js App Router 用于生产的 5 条经验之谈》。Next.js 13 的新功能 App Router 引入了 Nested Layouts、Server Components 和 Streaming 等多项新特性，是第一个开源实现 React 18 原语的工具。从 Next.js 13.4 开始，App Router 已被认为是生产就绪状态。使用 App Router 可以更轻松地在路由之间共享 UI、更好地利用服务器组件、更快地展示页面部分内容以及准备未来。但是，在应用 App Router 时需要注意两个缓存、URL 搜索参数在布局服务器组件中的问题、文件结构的优点以及学习新技术和资源有限的挑战。建议先仔细阅读官方文档，如果遇到问题可以查看 GitHub 和 Twitter 上的讨论，并且分享经验和解决方案有助于建立更加实质性的知识库。总体而言，采用 App Router 可以提高用户和开发者的体验，但需要耐心和深入挖掘。

> https://www.inngest.com/blog/5-lessons-learned-from-taking-next-js-app-router-to-production

《理解 useRef 和 useState 用于跟踪 React 中的组件渲染次数》。本文介绍了在 React 中使用 useRef 和 useState 来追踪组件渲染次数的实际例子。通过自定义一个名为 useComponentRenderCount 的 hook，使用 useRef 来存储渲染次数，并使用 useState 来管理组件内的不同状态值。通过将状态值分开控制，可以提高代码可读性并更轻松地管理每个值的状态更新。理解何时使用 useRef 以及如何与 useState 一起使用对于管理复杂的组件行为至关重要。在开发 React 应用程序时，需要平衡性能和功能，才能创建高质量的应用程序。

> https://peterkellner.net//2023/05/05/Understanding-useRef-and-useState-for-Tracking-Component-Render-Count-in-React/

《反应全局状态为局部状态》。这篇文章介绍了一种基于 React 的全局状态管理方案，使用 useGlobalState 钩子来读取全局存储对象，并在其更新时强制所有已订阅的组件重新渲染。相比于 Redux 和 Context，这种方案更加简单且没有繁琐的代码。该方案不需要依赖库，支持测试和 TypeScript。文章详细介绍了如何实现这个钩子，包括 JavaScript 和 TypeScript 的实现以及测试用例。作者表示这种方案虽然简单，但也具有可扩展性，可以在其上构建中间件、错误处理和动作等功能。作者在几个项目中尝试了 createGlobalState，目前已成为他的默认选择。

> https://webup.org/blog/react-global-state-as-local-state/

《Rome 发布 v12.1.0》。Rome v12.1.0 发布了，支持新的 Stage 3 装饰器、VCS 集成和新的 lint 规则。现在，Rome 可以解析和格式化大多数框架中的装饰器，并且支持 git VCS 集成。此外，还添加了许多新的 lint 规则，并提供了一个新的命令来更新配置文件。还有一个新的 CLI 帮助提示库，可以从源代码生成输出。

> https://rome.tools/blog/2023/05/10/rome12_1/

《掌握 TypeScript 中的 infer - JavaScript in Plain English》。本文介绍了 TypeScript 中 infer 关键字的用法，它可以从现有的代码中提取和推断类型。使用 infer 关键字可以增加代码的类型安全性、效率和组织性。infer 关键字可以在泛型类型、函数参数和返回值、映射类型中使用，但只能在条件类型中使用。同时，文章还提供了一些实际的例子来展示 infer 关键字的使用方法。

> https://javascript.plainenglish.io/mastering-infer-in-typescript-6cf3f93cca86

[MDH 前端周刊第 100 期：React Query、演讲、Reactivity、Bun Bundler、Rome、infer](https://mdhweekly.com/weekly/issue-0100)

📒 Go语言爱好者周刊：第 187 期

gobot v2.0 发布 - 使用 Go 编程语言的 IOT 框架（机器人框架）。

> https://github.com/hybridgroup/gobot

Mage v1.15 发布 - Mage 是使用 Go 的类似 make/rake 的构建工具。您编写普通的 go 函数，Mage 会自动将它们用作类似于 Makefile 的可运行目标。

> https://github.com/magefile/mage

几种使用Go发送IP包的方法 - 本文尝试介绍几种收发IP packet的方式。

> https://colobu.com/2023/05/13/send-IP-packets-in-Go/

lingoose - 一个 Go 框架，用于使用管道开发基于 LLM 的应用程序。

> https://github.com/henomis/lingoose

[Go语言爱好者周刊：第 187 期](https://mp.weixin.qq.com/s/gwNgUZllrvb3ebGYn3v7uA)
