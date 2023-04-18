---
slug: 4月23日内容汇总
title: 4月23日内容汇总
authors: [garfield]
tags: []
---

![image](https://img.alicdn.com/imgextra/i2/O1CN01RKI3ju1VALM0za1pD_!!6000000002612-0-tps-1456-816.jpg_1200x1200.jpg)

题图：rainy day, a water wheel in the green river, green plants and flowers in the foreground, mountains and water in the distance。

⭐️ [Go 语言中没有枚举类型，但是我们可以这样做](https://juejin.cn/post/7223035239072333861)

📒 [React Query 完全指南，时下最热辣的请求库！](https://mp.weixin.qq.com/s/E55QGLxBQhIMn6IZAE8mNQ)

📒 [React 中文周刊 #136 - “forwardRef()”： 如何将 ref 传给子组件](https://mp.weixin.qq.com/s/hHmGqeKnLOeS3FjEG5Rq_A)

📒 [gin框架中如何让日志文字带颜色输出](https://mp.weixin.qq.com/s/eHtIC5egDoqx4LdAvcE5Qw)

⭐️ [sync/atomic 设计与实现](https://mp.weixin.qq.com/s/lk8FgA7nFzkmN8F2fRQyvQ)

⭐️ [理解unsafe-assume-no-moving-gc包](https://mp.weixin.qq.com/s/EHSR-GFPJy5RzVDgcvoTog)

📒 [做量化交易发愁写代码？一招教你白嫖GPT智能编程神器(重制版)](https://mp.weixin.qq.com/s/absG4tTPutRyi8QCvtUTaw)

📒 [Uber实践：运维大型分布式系统的一些心得](https://mp.weixin.qq.com/s/RC5im7f_xNrahe1zGENjLg)

📒 [Go 语言怎么通过通信共享内存](https://mp.weixin.qq.com/s/Xn-MvVPjxZ_-nssePQozwQ)

⭐️ [Go设计模式--备忘录模式，带暂存的业务功能可以参考它来实现](https://mp.weixin.qq.com/s/RikZAeI2Pic4vYwVNh4HnA)

📒 [一文带你快速入门TLS/SSL](https://mp.weixin.qq.com/s/_MOgCeAXhO3ogm-PkRKwFw)

⭐️ [Go 汇编语言快速入门](https://mp.weixin.qq.com/s/orGo3KW0Y1784dTX-hyO4A)

📒 MDH 前端周刊第 96 期：lazyrepo、CodeWhisperer、taxonomy、WP Playground、MVP

《GitHub - ds300/lazyrepo: 用于 npm/pnpm/yarn monorepos 的缓存任务运行器。》。lazyrepo 是一个针对 npm/pnpm/yarn monorepos 的零配置缓存任务运行器。它适合于 turborepo 所开创的领域：使 package.json “scripts” 扩展，而无需采用像 nx、bazel、rush 或 buck 这样的大型工业级构建系统。lazyrepo 非常快速，尽管它是用 TypeScript 编写而不是一些年轻、英俊、聪明、有趣的系统语言，但它比 turborepo 要快得多。

> https://github.com/ds300/lazyrepo

《ChatGPT 的工作原理：深入探究 | Dan Hollick 🇿🇦》。本文介绍了大型语言模型 ChatGPT 的工作原理。这些模型通过计算输入和输出之间的概率来预测下一个单词或符号。为了实现这一点，它们使用神经网络来处理输入并生成输出的概率。在简单的情况下，神经网络由输入层、隐藏层和输出层组成，其中每个神经元都与相邻层中的神经元相连，并具有一个权重。当输入值通过神经元时，它会乘以该神经元的权重，并将结果传递给下一层中的所有神经元。然后，神经元将这些值相加，并将结果压缩到 - 1 到 1 之间，并将其传递给下一层中的每个神经元。最后一个隐藏层的神经元也是如此，但是将值压缩到 0 到 1 之间，并将其传递到输出层。

> https://typefully.com/DanHollick/yA3ppZC

《在页面退出时显示未保存的表单数据警告。》。本文介绍了如何实现一个 FormPrompt 组件，以提高 Web 应用程序的用户体验。该组件可以在用户尝试离开具有未保存更改的页面时发出警告。作者讨论了使用纯 JavaScript 的 beforeunload 事件处理此类情况，以及使用 React Router v5 中的 Prompt 组件和 React Router v6 中的 useBeforeUnload 和 unstable_useBlocker 钩子的 React 特定解决方案。

> https://claritydev.net/blog/display-warning-for-unsaved-form-data-on-page-exit

《Amazon CodeWhisperer，个人免费使用，现已普遍提供 | Amazon Web Services》。Amazon CodeWhisperer 是一款实时 AI 编码助手，现已正式推出。它可以帮助开发人员快速、安全地编写代码，而无需离开他们的 IDE 进行研究。CodeWhisperer 可以在多个 IDE 中使用，包括 Visual Studio Code、IntelliJ IDEA 等，并支持 Python、Java、JavaScript、TypeScript 和 C# 等多种语言。此外，它还具有筛选可能被认为是有偏见或不公平的代码建议的功能，以及扫描生成和开发人员编写的代码以查找难以检测的漏洞并提供修复建议的安全扫描功能。CodeWhisperer 的个人版免费使用，可通过电子邮件注册。专业版则提供了更多的管理功能和安全扫描限制。

> https://aws.amazon.com/blogs/aws/amazon-codewhisperer-free-for-individual-use-is-now-generally-available/


《用 LLM 替换我的最好的朋友，训练了 50 万个群聊消息》。作者用一个大型语言模型训练了他和他的好友们在大学时期使用的聊天记录，并通过 Modal 和 Hex 完成了这个项目。作者将原始聊天数据转换成了可供微调的格式，然后使用 LLaMa 进行微调。最终，作者将模型部署到了 Modal 上，并建立了一个类似于 iMessage 的前端界面，使得所有人都可以与 “机器人男孩” 聊天。作者强烈鼓励大家尝试这种无聊但复杂的 AI 项目，因为它是一个入门级别的 AI 项目，可以让你更深入地了解 LLMs 以及如何针对特定场景进行微调。

> https://www.izzy.co/blogs/robo-boys.html

《RFC：next/third-parties・vercel/next.js・讨论 #48256》。Next.js 计划推出 next/third-parties 包，以简化开发人员在应用程序中加载流行第三方库的体验。该包将提供预配置的包装器组件，以确保流行的第三方资源能够高效加载，并随着最佳实践的演变而持续高效。为了避免增加 Next.js 的安装 / 包大小，这个包可以单独存在于核心 next 库之外，但仍然在同一个 monorepo 中。此外，Next.js 还将考虑支持其他流行的第三方库，例如 Sentry、DataDog 和 Facebook Pixel。

> https://github.com/vercel/next.js/discussions/48256

《有两种类型的软件工程师》。这篇文章探讨了两种软件工程师的思维方式。第一种类型认为问题很容易解决，只需要要求人们做 X 即可。而第二种类型则认为问题很难解决，因为它需要人们去做 X。第一种类型认为只要不是技术问题就很容易解决，因为 “我们可以要求人们做 X”。而第二种类型则认为这很难，因为它不是技术问题。作者称第一种类型的工程师相信大写字母 E 的工程学，认为存在着冷酷、坚实的真理；有数学和物理；是应用科学。而第二种类型的工程师则更注重人，他们知道在所有的工程工作（和问题）中，人是核心所在。他们接受了事情变得混乱的事实，并迎接了一个更大的挑战，尽管这会带来混乱，但仍然要做出有价值和有影响力的工作。

> https://registerspill.thorstenball.com/p/two-types-of-software-engineers

《最有价值程序员》。本文讨论了成为最有价值的程序员（MVP）的概念。与 “最小可行产品” 类似，MVP 并不是一个具体的概念，而是一个追求的目标。这篇文章提供了一些建议，帮助程序员成为更有价值的人，包括不要过度关注代码风格、正确性、DRY 和性能，而是关注业务需求、解决问题以及与同事沟通。此外，作者还提到了保持身心健康的重要性，因为只有这样才能保持高效率和创造力。

> https://arendjr.nl/2023/04/mvp-the-most-valuable-programmer

[MDH 前端周刊第 96 期：lazyrepo、CodeWhisperer、taxonomy、WP Playground、MVP](https://mp.weixin.qq.com/s/4pH15xSg_MKfeGaqNn6LXA)
