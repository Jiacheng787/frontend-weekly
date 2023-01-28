---
slug: 1月29日内容汇总
title: 1月29日内容汇总
authors: [garfield]
tags: []
---

![image](image.png)

题图：擅用工具的兔子工程师。

⭐️ [PHP转Go实践：xjson解析神器「开源工具集」](https://mp.weixin.qq.com/s/rnsMes-YoZhW1Qy6Dt7quw)

⭐️ [经过99次失败后， 我总结了几点 Golang 反射的经验（附源码）](https://mp.weixin.qq.com/s/_wM8jG7CZ1vdB0k2L7SGHg)

📒 前端食堂技术周刊第 68 期：Astro 2.0、Nuxt v3.1.0、Bun v0.5、TS 实现 Stage 3 Decorators 提案

**Turborepo 1.7**

Turborepo 1.7 专注于改善开发者体验，为任务带来更多清晰性，主要特性如下：

- 改进对持久化任务的支持，`"persistent": true`
- 更清晰的输出，需要明确指定 `outputs`
- 支持全局安装
- 只显示错误的输出模式，让日志更清晰，`turbo build --output-logs=errors-only`

[Turborepo 1.7](https://turbo.build/blog/turbo-1-7-0)

[Turborepo 1.7 发布视频版](https://www.youtube.com/watch?v=XNf8tq9mUl0)

**加速 JavaScript 生态系统之模块解析**

module resolution (模块解析)有着大量的性能损耗，本文对此进行探讨并给出以下建议：

- 尽可能避免调用文件系统
- 尽可能使用缓存来表面调用文件系统
- 使用 `fs.stat` 或者 `fs.statSync` 时，总是设置 `throwIfNoEntry: false`
- 尽可能限制向上遍历的行为

https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-2/

**React 新文档中的最佳实践**

https://sebastiancarlos.com/react-js-best-practices-from-the-new-docs-1c65570e785d

**React 服务器组件深度指南**

https://www.plasmic.app/blog/how-react-server-components-work

📒 [一篇文章告诉你 golang 环境变量的所有基础操作](https://mp.weixin.qq.com/s/LV-G9HPJJlZvxVjQRLFhqQ)

📒 [CSS 原生嵌套语法来了！](https://mp.weixin.qq.com/s/MMOc7BXHrxUZIPOvcXYLlw)

📒 腾讯云开发者 2022 年度热文

[手把手实践一个DAPP，通往Web3.0之路！](https://mp.weixin.qq.com/s/aHuCs_wLSDMcs-rcrb6tgQ)

[探秘微信业务优化：DDD从入门到实践](https://mp.weixin.qq.com/s/kFjfzwTOdaKA2ym63VR3DQ)

[揭秘前端眼中的Rust！](https://mp.weixin.qq.com/s/HKkt9cNZsUFdCR4nAlHeBA)

⭐️ [【好文分享】基于Jira的运维发布平台的设计与实现](https://mp.weixin.qq.com/s/Bf5JNQjki9xLVzioYPy5qg)

📒 [DevopsCamp 第一期作业: 《cobra - 02 配置文件的读取与保存（简单）》 解题答案](https://mp.weixin.qq.com/s/raiKGm4jR8xyP3mYzh425w)

📒 [《DevOpsCamp作业: cobra - 01 实现编译与参数绑定（简单）》 解题答案](https://mp.weixin.qq.com/s/Zx7ryE2I7LyM6YPkr-cSdg)

📒 [TS、Vue、React、SSR、Node、Deno、Bun：回顾2022，展望2023](https://mp.weixin.qq.com/s/wC9Wq7FJ_sKg1I-z8AozCQ)

📒 MDH 前端周刊第 84 期：tRPC、Zod、慢 Jest、React Debounce、SSSVG

《6 Common SVG Fails (and How to Fix Them)》，出自 CSS Tricks。作者梳理了 6 种常见错误（编者注：后几种感觉不常见），包括 viewbox 错误、width 和 height 缺失、无意 fill 或 stroke 的颜色、id 缺失、clipping 和 masking 冲突、命名空间缺失，并给出了针对这些问题的解法。

> https://css-tricks.com/6-common-svg-fails-and-how-to-fix-them/

《为何开发人员开始喜欢tRPC啦？》。tRPC 的优点包括：1）无需再次封装，直接使用函数调用远程服务，2）与Zod深度结合，可以直接使用Zod进行数据校验，3）使用非常简单，可以用在任何框架中，4）tRPC over HTTP协议非常简单，无论客户端还是服务端实现都非常简单。

> https://linux-china.davao.page/blog/2023-01-14-why-trpc/

《Speeding up the JavaScript ecosystem - module resolution》，出自 marvinhagemeist。构建、测试、Lint 时有个性能大户是 module resolution，即如何找到文件，虽然规范层有规范层的解法（ESM 引用文件要带后缀），但在规范没大范围落地之前，也可以有一些解法。作者总结了几点，1）尽量避免对文件系统的调用，2）尽可能多的缓存以避免调用文件系统，3）当你使用 fs.stat 或 fs.statSync 时，总是设置 throwIfNoEntry: false，找不到文件时不抛错而是给 undefined，4）尽可能地限制向上的遍历行为。看完这篇，我给 umi 提了个 pr，调整了 webpack 配置里 extensions 的顺序。

> https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-2/

> https://github.com/umijs/umi/pull/10326

《How to debounce and throttle in React without losing your mind》，作者是 NADIA MAKAREVICH，必读作者系列。关于如何在 React 中做 debounce 和 throttle 而不失去理智。作者先介绍了 debouce 和 throttle 的区别，以及各自的场景是什么，比如 throttle 的场景是拥有自动保存功能的编辑器，及时保存用户输入，以减少因意外情况可能导致的数据丢失。然后介绍了在 React 中使用 debouce 有多困难，你会面临 re-render、陈旧的 state、陈旧的闭包等问题，最终解法是 useRef + useEffect + 保存函数到 ref.current，因为 ref 是 mutable 的，不会有闭包数据陈旧问题。

> https://www.developerway.com/posts/debouncing-in-react

[MDH 前端周刊第 84 期：tRPC、Zod、慢 Jest、React Debounce、SSSVG](https://www.yuque.com/chencheng/mdh-weekly/wi2lwhp8krgp6f2i)

📒 [一期每日一GO群分享-flag、viper、协程池、异常处理](https://mp.weixin.qq.com/s/Dg7uckLz-K190Q4g9niS2g)
