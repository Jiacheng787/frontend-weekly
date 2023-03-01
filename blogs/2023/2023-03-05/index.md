---
slug: 3月5日内容汇总
title: 3月5日内容汇总
authors: [garfield]
tags: []
---

📒 [全网最详细 去中心化 Module Federation的实现原理](https://mp.weixin.qq.com/s/wX_eQwF3Ex_fsgRUhcB-yw)

📒 [最全的React拖拽排序组件库对比研究](https://mp.weixin.qq.com/s/hwTyw4jULfUnJMXsO6mOKA)

📒 [掌握 JavaScript 中的迭代器和生成器](https://mp.weixin.qq.com/s/FTj5e6gRVn7RxCxwlaWwQg)

📒 [CSS容器查询获得主流浏览器支持，是什么？怎么用](https://mp.weixin.qq.com/s/z8juba1I7UCi6L2zJ3ZA1g)

⭐️ [一文吃透 Go 内置 RPC 原理](https://mp.weixin.qq.com/s/ExfVdEM7_YWlQF6GhFn74A)

⭐️ [用Go语言0代码10分钟完成一个学生管理系统带页面，私活必备](https://mp.weixin.qq.com/s/3v-rV2ev9vg89PEhT6gFgg)

⭐️ [Go 陷阱 - goroutine 竞态](https://mp.weixin.qq.com/s/TGXDI-1BoXihElvmnkyHpA)

⭐️ [Go 陷阱 - interface{} 和 *interface{} 相等吗](https://mp.weixin.qq.com/s/UYWF2eHMLaHDu2Jtf-086Q)

⭐️ Redis 官方 Go 客户端来了！！！

Gopher 们应该都有使用过 Redis 吧，那 Go 的 Redis 客户端你用的哪一个呢？

不少人可能用是 github.com/go-redis/redis，毕竟这个 Star 数最多：

最近这个库被 Redis 官方”收“了，成为了 Redis 官方支持的客户端。最新版本 v9 导入地址变为：

```go
import "github.com/redis/go-redis/v9"
```

[Redis 官方 Go 客户端来了！！！](https://mp.weixin.qq.com/s/HoyK9I1gbCM_umzSczZj-w)

📒 [从微信 JS-SDK 出发，一起了解 JSBridge 的神奇功能](https://mp.weixin.qq.com/s/o5xvsI2dN9iMsVT7tWWy0A)

📒 [人物志｜缨缨：一个有故事的女同学](https://mp.weixin.qq.com/s/yfr1TDRGOWYmk_WmMKG_uw)

⭐️ [不会「函数选项模式」的Gopher看过来~](https://mp.weixin.qq.com/s/gCM-LQob-Qj_nXGnefkrJQ)

📒 [前端食堂技术周刊第 72 期：Signals 是前端框架的未来、Chrome Headless、ts-reset、magic-regexp、Bun 新文档](https://juejin.cn/post/7204670801243750458)

⭐️ [通过 React Router V6 源码，掌握前端路由](https://mp.weixin.qq.com/s/3DxZ0UdH9CKOMzfAo_x0XQ)

📒 MDH 前端周刊第 89 期：HTML-first、Node 调试、Dead 组件探测、框架鹰鸽博弈、沙箱

《Debugging Node.js, The Right Way》。作者介绍了如何使用 Node.js 进行调试，而不是依赖于 `console.log()`。首先需要使用 `--inspect-brk` Flag 启动Node.js进程，然后打开浏览器的开发工具，连接到 Node 进程。通过使用调试器语句和添加断点，可以方便地调试代码，并且可以通过添加条件断点来跳过不感兴趣的迭代。文章还介绍了如何在 VS Code 中直接调试，以及如何调试通过 NODE_OPTIONS 启动的 Node 脚本。

> https://www.builder.io/blog/debug-nodejs

《Self hosting in 2023》。作者介绍了如何将静态页面托管在树莓派上，以及如何设置自己的 DDNS，从而将域名连接到本地服务器。作者通过购买一个二手的树莓派、安装 Coolify 和 DDClient 等简单的步骤，仅花费了大约一个小时的时间便将博客部署在了自己的本地服务器上。这样做不仅节约了成本，而且提供了更好的开发体验。文章还提到了一些可能的运营成本，如一次性成本、电费、域名费用等。

> https://grifel.dev/decentralization/

《React Hooks: Compound Components》。一篇老文，作者介绍了复合组件的概念，以及如何使用 React Context 来创建具有良好表达性和实用性的组件 API 。它使用一个例子来展示复合组件 API 的好处，以及如何使用 React.cloneElement 和 React Context 来实现它。

> https://kentcdodds.com/blog/compound-components-with-react-hooks

《Maximising performance with React code splitting techniques》。React 是一个流行的 JavaScript 库，用于构建用户界面，但随着应用程序规模的增长，JavaScript 包的大小会变得很大，导致加载时间慢和性能差。为了解决这个问题，React 提供了多种代码分割技术，允许你将代码分割成更小的块，减少初始 JavaScript 捆绑的大小，提高应用程序的性能。这篇文章介绍了 React 的代码分割技术，包括动态导入、带 Suspense 的 React Lazy、可加载组件、基于路由的代码拆分、预加载、嵌入关键的 CSS 和动态块。

> https://edvins.io/react-code-splitting-techniques

《Improved type safety in Storybook 7》。本文介绍了 Storybook 7 中的类型安全改进。Storybook 7为组件 Story 格式（CSF）3和新的TypeScript（4.9+）满足操作者的组合实现了增强的类型安全。新的 Meta 和 StoryObj 类型可以自动推断出组件道具的类型。通过使用 satisfies 操作符，TypeScript现在能够更好地显示这些警告。Storybook 7 测试版中已经可以使用新的 Meta 和 StoryObj 类型。

> https://storybook.js.org/blog/improved-type-safety-in-storybook-7/

《The case for frameworks》。本文探讨了 JavaScript 框架的使用和开发者的自我利益，其中涉及了进化博弈论中的鹰鸽博弈概念。文章指出，即使 JavaScript 框架的性能不佳，但由于其在经济层面的优势，它们仍然非常受欢迎。「当71%的开发者已经在使用React时，招聘React开发者就变得容易了，从经济角度来看，这是一个巨大的优势。」React 作为一个具体的JS框架被讨论，并且指出单页应用程序的开发对于某些网站是很有用的，而 React 可以帮助开发者省去时间和成本。「开发人员是昂贵的。他们的工资最终是由客户支付的。但并不是所有的客户都同样有价值。」

> https://seldo.com/posts/the_case_for_frameworks

《useSyncExternalStore First Look》。关于 useSyncExternalStore 的介绍。1）useSyncExternalStore 主要是用于库，但不只是用于库。 它是用来订阅外部状态的，但意义比我想象的要广，浏览器是一个外部存储，你可能想在你的 React 应用中与之同步 它是并发安全的，所以可以避免 UI 中的视觉不一致，2）如果订阅函数参数不稳定，React 会在每次渲染时重新订阅到 Store，3）getSnapshot 函数参数必须返回不可变的值，4）其可选的第三个函数参数 getServerSnapshot 是为了支持 SSR 它必须在初始客户端渲染时返回与服务器上完全相同的数据，这意味着你不能在服务器上读取浏览器的API。 如果你不能在服务器上提供一个初始值，通过在服务器上抛出一个错误并将其包裹在边界中来显示一个回退，使该组件只在客户端使用。

> https://julesblom.com/writing/usesyncexternalstore

[MDH 前端周刊第 89 期：HTML-first、Node 调试、Dead 组件探测、框架鹰鸽博弈、沙箱](https://mdhweekly.com/weekly/issue-0089)

📒 [Vue3中watch与watchEffect有什么区别](https://mp.weixin.qq.com/s/Xyqm1GRBJJW3cIe17-pIuw)

📒 [「每周译Go」如何构建和安装 Go 程序](https://mp.weixin.qq.com/s/gQ21kekCvk_DwfUoaTwcKQ)

📒 [Go语言爱好者周刊：第 178 期 — Go 实现的纸牌游戏](https://mp.weixin.qq.com/s/G2humIe1eOTdgOcJ59qwrw)
