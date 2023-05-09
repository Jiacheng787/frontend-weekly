---
slug: 5月14日内容汇总
title: 5月14日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i1/O1CN01Lvp0Uj1RKBPE51v4j_!!6000000002092-2-tps-1456-816.png_1200x1200.jpg)

题图：rainy day, a water wheel in the green river, green plants and flowers in the foreground, mountains and water in the distance。

📒 [Go1.20.4 新版本发布，修复了一个神奇的内联 BUG！](https://mp.weixin.qq.com/s/4SxJW4feEOmDVhPCOnn9fg)

⭐️ [sync.Cond 设计与实现](https://mp.weixin.qq.com/s/VAx257qmOWDovmx-eTlyww)

📒 [React 正式推出 Canary 版本！](https://mp.weixin.qq.com/s/m9nDlS-2j6ByVyJVZsiGaA)

⭐️ 解读 pkg.go.dev 的设计和实现

[解读 pkg.go.dev 的设计和实现：设计篇](https://mp.weixin.qq.com/s/LA3KB9Rd7kRLyc3lgSGOGQ)

[本地搭建一个 pkg.go.dev：遇到的问题和解决](https://mp.weixin.qq.com/s/3eB-RkVHh7b19l3es5IVGw)

[Go 开源的 pkgsite，据说是应届生代码水平](https://mp.weixin.qq.com/s/gfAlkVW-vhdVJVkdWaX9hg)

⭐️ [Go语言中常见100问题-#34 Ignoring how the break statement works](https://mp.weixin.qq.com/s/XRQq1O9VROBxItSP4kC8zA)

⭐️ [「Go框架」bind函数：gin框架中是如何将请求数据映射到结构体的](https://mp.weixin.qq.com/s/-zBah_ZSDdri0dqDF5Nd9g)

⭐️ [「Go框架」深入解析gin中使用validator包对请求体进行验证](https://mp.weixin.qq.com/s/2YJsrK5Ifyy7x7CDbGXTtw)

📒 [Go 语言内置 I/O 多路复用机制](https://mp.weixin.qq.com/s/80V-IApqbAfOBvS3QoLb3A)

📒 [图解TCP 三次握手和四次挥手的高频面试题（2023最新版）](https://mp.weixin.qq.com/s/dWPEuXuMtYNLS6sdm8juwg)

⭐️ [pkgsite 新增本地模式下的跳转与搜索功能](https://mp.weixin.qq.com/s/pTX9uQ0YJEKNPFX6rHnUug)

⭐️ [Go 高性能 - 无锁编程](https://mp.weixin.qq.com/s/W3aofshF2qydm759-dvZsA)

📒 MDH 前端周刊第 98 期：Angular 16、Vercel Storage、类型测试、React Canaries

- React Native macOS [v0.71](https://devblogs.microsoft.com/react-native/2023-04-27-announcing-macos-71/) 发布
- Pnpm [v8.4.0](https://github.com/pnpm/pnpm/releases/tag/v8.4.0) 发布，支持包校验等
- React 发布 [canary](https://react.dev/blog/2023/05/03/react-canaries) 版本
- VSCode [v1.78](https://code.visualstudio.com/updates/v1_78) 发布，体验改善等
- Nextjs [v13.4](https://nextjs.org/blog/next-13-4) 发布，App Router 稳定等

《Next.js 发布 13.4》。Next.js 13.4 是一个重要的版本，标志着 App Router 的稳定性。这个版本增加了许多新特性，包括 React Server Components、嵌套路由和布局、简化数据获取、流式渲染和 Suspense、内置 SEO 支持等。其中最重要的是 App Router，它是 Next.js 的核心组件，可以让开发者更方便地定义页面布局和数据获取方式。此外，Turbopack 也是一个值得关注的新功能，它可以加速本地开发和生产构建过程。最后，Server Actions 是一个实验性的功能，可以在服务器端直接修改数据，不需要客户端 JavaScript。

> https://nextjs.org/blog/next-13-4

《使用 Vercel Spaces 实现规模化的高质量软件 - Vercel》。Vercel 推出了 Vercel Spaces，它提供了强大的工具和惯例，可以与 monorepo 集成，使开发人员能够在保持质量的同时有效地扩展。Spaces 仪表板提供了对开发工作流程、代码健康状况和构建日志的洞察力，并包括通过 Conformance、Code Owners 和 Vercel Runs 提升效率和消除障碍的新功能。

> https://vercel.com/blog/vercel-spaces

《Tauri 发布 1.3.0》。Tauri 团队发布了 1.3 版本，包括安全改进、新功能和重要的错误修复。该版本新增了 NSIS，可以使用 NSIS 创建 Windows 应用程序安装程序，还有其他一些改进和修复。

> https://tauri.app/blog/2023/05/03/tauri-1-3/

《TailwindCSS vs. UnoCSS》。本文对比了 TailwindCSS 和 UnoCSS 两个工具，总结了它们的特点、语言、文档、自定义样式和编辑器支持等方面。TailwindCSS 拥有完整的 CSS 特性类名，可以通过任意值、变体和属性来进行全面的样式设计，而 UnoCSS 则支持所有 TailwindCSS 的功能，并提供了一些额外的功能，如变体组、CSS 网格流体列和更多动画效果。在语言方面，TailwindCSS 有一个相对规范的类名命名方式，UnoCSS 则更加灵活。在文档和自定义样式方面，两者都有不错的表现，但 UnoCSS 的交互式文档和颜色提示更加出色。在编辑器支持方面，TailwindCSS 支持较好，但存在一些缺陷，而 UnoCSS 的高亮显示和颜色提示则更为出色。作者认为，如果你看重灵活性和额外的功能，你可能会喜欢 UnoCSS，但如果你看重约束和更清晰的编写语言，则应该选择 TailwindCSS。

> https://dev.to/mapleleaf/tailwindcss-vs-unocss-2a53

《10 种使用 ChatGPT 学习更好的方法 - 斯科特・H・扬》。这篇文章总结了读者们如何使用大型语言模型（LLMs）来学习和研究的建议，并探讨了使用这些工具的优缺点。作者提醒读者要注意，虽然 ChatGPT 可以进行人类般的对话，但它并不是真正的人类，有时会提供错误的答案。然而，ChatGPT 在许多任务上都很有用，例如作为个人导师、语言教练、生成摘要、与长文本对话、简化专业术语等。作者还提到了一些不应该使用 AI 工具的情况，例如期望它们正确地获取事实、引用和数学等方面。

> https://www.scotthyoung.com/blog/2023/05/02/chatgpt-learning-tips/

《React Canaries：在 Meta 之外启用增量功能发布》。React 团队推出了一个新的官方支持的 Canary 版本，让开发者可以在稳定版本发布之前就采用新功能。这个 Canary 版本只包含 React 团队相信已经准备好被采用的特性，而不像实验性版本那样可能会有重大变化。React 将按照 semver 规范每个稳定版本进行更新，同时也会在博客上发布 Canary 版本中的重大变更和新特性。Canary 版本需要被固定版本号，以避免包含重大变更。除此之外，React 的稳定版本不会有任何改变。

> https://react.dev/blog/2023/05/03/react-canaries

《为什么我喜欢使用 Map（和 WeakMaps）来处理 DOM 节点》。本文介绍了在处理大量 DOM 节点时，Maps（和 WeakMaps）是特别有用的工具的原因。与使用对象作为键 / 值存储相比，使用 Map 可以更简单、更强大、更高效地管理状态，并且不需要设置或读取唯一属性。此外，Map 还具有自动垃圾回收的功能，可以更有效地管理内存。总之，Map 对于处理大量 DOM 节点非常有用。

> https://www.macarthur.me/posts/maps-for-dom-nodes

《React Native macOS 发布 0.71》。React Native macOS 发布了 0.71 版本，这是该平台首次与 iOS、Android 和 Windows 保持同步。为了实现这个目标，开发团队不得不跳过了一些中间版本，并开始着手 0.72 版本。此外，该版本还加入了对 Fabric 的实验性支持，但需要注意的是这只是一个概念验证，存在不稳定性。

> https://devblogs.microsoft.com/react-native/2023-04-27-announcing-macos-71/

《如何在 React 中编写注释：好的、坏的和丑陋的》。这篇文章介绍了在 React 中添加注释的三种方法。第一种是使用 JSX 注释语法，但这种方式有些冗长；第二种是在 JSX 标签外使用 JavaScript 注释，可以更简洁地添加注释；第三种是在 JSX 标签内部使用 JavaScript 注释，可以针对特定元素添加注释。作者认为第三种方法最好，因为它简洁明了且针对性强。

> https://dmitripavlutin.com/react-comments/

《React Router 发布 v6.11.0》。这篇文章介绍了 React Router 版本 6.11.0 的更新内容。其中，一些小的改动包括在 useFetcher 中启用 basename 支持，更新 @remix-run/router 依赖等。此外，fetchers 不再在搜索参数更改或路由到相同 URL 时重新验证，并且只会在操作提交或 router.revalidate 调用时重新验证。

> https://github.com/remix-run/react-router/releases/tag/react-router%406.11.0

《Prompt 工程 vs 盲目 Prompting》。本文介绍了 Prompt Engineering，即利用提示来有效地从语言模型中提取信息的过程，通常用于实际应用。文章指出，许多人声称正在进行 Prompt Engineering，但实际上只是盲目 Prompting。因此，本文提供了一种基于实验方法的 Prompt Engineering 示例，以展示如何为应用程序构建可靠的功能。作者强调了选择问题、演示集、提示候选项和测试提示等步骤的重要性，并解释了如何选择最终的提示方案。

> https://mitchellh.com/writing/prompt-engineering-vs-blind-prompting

《使用 Rust 在 10 分钟或更短的时间内构建和部署 URL 缩短器》。这篇文章讲述了一个软件开发人员在凌晨时分突然想到的一个想法：能否在不需要担心基础架构的情况下快速构建一个有用的应用程序。他使用了 Rust 编程语言，结合 serverless 平台 Shuttle 和 Postgres 数据库，最终成功地构建了一个简单的 URL 缩短服务。作者认为，虽然现实中的软件工程很复杂，涉及到不同团队和技能集的协作，但这种新型的无需关注基础架构的开发模式是可行的，并且可以带来更好的体验。

> https://www.shuttle.rs/blog/2022/03/13/url-shortener

《Vercel 发布 Vercel Storage》。Vercel 宣布了一套无服务器存储解决方案，包括 Vercel KV，一个无服务器的 Redis 解决方案；Vercel Postgres，一个为前端建立的无服务器SQL数据库；以及 Vercel Blob，一个在边缘上传和服务文件的解决方案。这些解决方案旨在使数据库成为 Vercel 前端云的一流部分，并使开发人员能够管理他们的前端存储需求，而不必担心基础设施。

> https://vercel.com/blog/vercel-storage

《Deno 发布 KV》。Deno KV 是一款全球复制、强一致性的键值数据库，可在 35 个地区实现低延迟读取。它可以无缝集成到开源 Deno 运行时中，无需任何配置即可在本地或作为托管服务运行。Deno KV 是一个简单但功能强大的一流原语，只暴露了少量方法来存储、检索、删除和枚举数据。

> https://deno.com/blog/kv

《React 渲染的交互式指南》。本文主要介绍了 React 的渲染机制，即 React 只有在状态改变时才会重新渲染组件。当事件处理程序被调用时，如果其中包含 useState 的更新函数，并且新状态与快照中的状态不同，React 将触发重新渲染。此外，本文还介绍了 React 的批处理算法和 StrictMode 组件。

> https://ui.dev/why-react-renders

《如何使用 Rust 和 Napi RS 在 NodeJs 中将 CSV 文件处理速度提高五倍》。本文介绍了如何使用 Rust 和 Napi RS 在 NodeJs 中处理 CSV 文件。作者使用了 readline 模块来处理 CSV 文件，并记录了处理时间和吞吐量。然后作者使用了 Rust 编写了相同的代码，并通过 pv 命令进行了基准测试，发现 Rust 版本比 Nodejs 版本快五倍。最后，作者介绍了如何使用 Napi rs 将 Rust 代码编译成动态库，并在 Nodejs 中调用。总之，结合 Rust 和 Nodejs 可以实现更好的性能和效率。

> https://www.alxolr.com/articles/how-to-process-a-csv-file-five-times-faster-in-node-js-with-rust-and-napi-rs

《实现 experimental_useFormStatus by acdlite・Pull Request #26722・facebook/react》。这篇文章介绍了一个新的 React Hook，可以读取其祖先表单组件的状态，用于实现加载指示器等功能。目前该 Hook 只在实验版本中可用，随着其稳定性的提高，将会发布更多 API 和文档。该 Hook 内部使用 startTransition 和上下文对象实现，但实际实现细节可能会发生变化。由于表单元素不能嵌套，因此实现者不需要跟踪多个嵌套的 “转换提供者”。虽然它使用通用的 Fiber 配置方法进行实现，但它目前仍基于 React DOM 的要求进行一些假设。

> https://github.com/facebook/react/pull/26722

《我作为新经理所犯的一些错误》。这篇文章讲述了作者成为管理者的经历，以及他在这个过程中犯下的错误和解决策略。作者指出，作为一名管理者，最初的困难之一是难以确定自己的工作是否有用。他提供了三种应对策略：与上级领导沟通，寻求反馈，多元化生活体验。此外，作者还分享了其他的经验教训，如管理的重要性、任务相关成熟度、拖延维护、直接询问等。最后，作者总结了成为新管理者的困难所在，并鼓励读者不要害怕犯错，因为这是成长的必经之路。

> https://www.benkuhn.net/newmgr/

《TypeScript 装饰器：完整指南》。本文介绍了 TypeScript 的装饰器，装饰器本质上是函数，可以用于给类、方法、属性等应用可重用的行为。不同类型的装饰器包括类装饰器、方法装饰器、属性装饰器、访问器装饰器和参数装饰器。装饰器可以用于实现各种功能，如前 / 后钩子、监视属性更改和方法调用、转换参数、自动序列化和反序列化、依赖注入等。使用装饰器的优点包括跨越关注点、依赖注入、验证和代码组织。

> https://deadsimplechat.com/blog/typescript-decorators-a-complete-guide/

《批判性思维是软件工程师最重要的技能吗？》。这篇文章谈到了两个现象：技术术语的使用和 “思想领袖” 在社交媒体上的崛起，以及这些现象对批判性思维的影响。作者认为，过度使用技术术语可能掩盖了人们对某一概念的真正理解，而 “思想领袖” 的观点也不应该被轻易地接受，需要进行深入的研究和验证。作者建议人们提高批判性思维能力，包括理解技术术语、验证信息、问 “为什么” 和 “如何”，并避免跟风。最后，作者强调批判性思维将在未来变得越来越重要，因为随着人工智能工具的普及，我们需要更多的人来质疑和思考。

> https://blog.pragmaticengineer.com/critical-thinking/

《不要 "闪烁" 的 UI：使用 useLayoutEffect，绘画和浏览器故事》。本文介绍了在 React 中如何根据 DOM 测量更改元素的基础知识。文章首先通过一个响应式导航组件的例子，讲解了如何使用 useEffect 来计算容器大小和每个元素的尺寸，并且根据这些信息来调整元素的数量。然而，这种方法会导致初始渲染时出现闪烁问题。为了解决这个问题，文章介绍了 useLayoutEffect 的用法，并解释了浏览器渲染、绘制和事件循环等相关概念。最后，文章还讨论了在 Next.js 等服务器端渲染框架中使用 useLayoutEffect 的问题。

> https://www.developerway.com/posts/no-more-flickering-ui

《关于 LLM 的八件事 | Swizec Teller》。这篇文章总结了最近人工智能（AI）的进展和引起人们兴奋的原因。其中提到了以下几点：1. 大型语言模型（LLMs）随着规模的增大而变得更好；2.LLMs 具有出人意料的新颖能力，包括 few-shot 和上下文学习；3.LLMs 表现出 “心理模型”；4. 无法可靠地控制 LLMs；5. 目前还没有人知道 LLMs 是如何工作的；6.LLMs 可以胜过人类；7.LLMs 存在偏见问题；8.LLMs 表现很好。作者还提供了一些资源来帮助读者更深入地了解这些问题。

> https://swizec.com/blog/eight-things-to-know-about-llms/

《Mojo 可能是数十年来最大的编程语言进步。》。文章介绍了一种名为 Mojo 的新编程语言，它是 Python 的超集，并且可以通过使用 “fn” 和 “struct” 等新语法来实现高性能代码。该语言建立在强大的基础上，包括 LLVM 和 MLIR 等核心技术，使其快速发展和易于开发。作者认为 Mojo 将成为 AI 模型开发的替代 Python 的重要工具，并且预计它将比预期更快地发展和扩展。

> https://www.fast.ai/posts/2023-05-03-mojo-launch.html

[MDH 前端周刊第 98 期：Angular 16、Vercel Storage、类型测试、React Canaries](https://mdhweekly.com/weekly/issue-0098)

📒 Go语言爱好者周刊：第 185 期 —— 归来了

Grafana Pyroscope 解决 Go 内存泄露。

> https://grafana.com/blog/2023/04/19/how-to-troubleshoot-memory-leaks-in-go-with-grafana-pyroscope/

go-openai 1.9.1 发布 - OpenAI 的 Golang SDK，包括 ChatGPT、GPT-3、GPT-4 等。

> https://github.com/sashabaranov/go-openai

queue - 线程安全、泛型的多队列实现（堵塞队列、优先队列、环形队列）。

> https://github.com/adrianbrad/queue

Go Time 第 273 期 - Go 中使用领域驱动设计。

> https://changelog.com/gotime/273

强大的装饰器模式。

> https://www.youtube.com/watch?v=GipAZwKFgoA

[Go语言爱好者周刊：第 185 期 —— 归来了](https://mp.weixin.qq.com/s/fUpG3NxMJ_x9R2_fommtRg)
