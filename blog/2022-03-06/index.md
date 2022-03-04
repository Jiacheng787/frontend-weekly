---
slug: 3月6日内容汇总
title: 3月6日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 [在 TIME_WAIT 状态的 TCP 连接，收到 SYN 后会发生什么？](https://juejin.cn/post/7070364142015610888)

📒 [一键部署 K8S 环境，10分钟玩转，这款开源神器实在太香了！](https://juejin.cn/post/7070683049049980941)

📒 charles 如何连接手机抓包

- 确保手机和电脑连接的是同一个网络
- 首先打开 charles，会启动一个服务，查看端口：proxy -> proxy setting
- 勾选 Enable transparent HTTP proxying
- 查看本机 IP
- 在手机上设置 http 代理服务器，输入 IP 和端口
- 此时 charles 会弹出提示，有新的连接，点击 allow

📒 前端项目的 `.env` 文件是如何生效的，一句话总结

通过 `dotenv` 这个包解析 `.env` 文件，加载到 `process.ENV` 里面，这时候可以通过 `process.ENV.xxx` 访问到环境变量，适用于 Node.js 项目，但是由于浏览器环境访问不到 `process` 对象，所以对于前端项目，还需要使用 Webpack 的 DefinePlugin 在打包构建阶段将变量替换为对应的值。

📒 如何防止用户篡改 url 参数

> http://localhost:8080/codepc/live?codeTime=1646038261531&liveId=5e24dd3cf03a&sign=e8fe282676f584ceab7e35f84cbc52ff&keyFrom=youdao

前端的直播链接带有 `codeTime` 和 `liveId`，如何防止用户篡改。只需要后端在返回 `codeTime` 和 `liveId` 的时候，同时计算一个签名 `sign` 返回给前端，前端提交给后端的时候，同时传递三个参数，后端计算一个新的签名，与前端传过来的 `sign` 进行比对，如果一样就说明没有篡改。

但是计算签名用的 md5 是一个公开的算法，假如有人篡改了 `codeTime` 和 `liveId` ，只要他使用 md5 计算一个新的签名 `sign` ，这样传给后端校验必然可以通过。这就需要后端签名的时候拼接一个加密串进去，验签的时候也用这个加密串。这样由于别人不知道加密串，即便生成新的签名，后端校验也不会通过。

📒 [了解下Rust 模块使用方式](https://juejin.cn/post/7070481262749679653)

🌛 [一文秒杀排列组合问题的 9 种题型](https://mp.weixin.qq.com/s/nrTpZ9b9RvfNsaEkJoHMvg)

📒 Screenshot: 不依赖浏览器原生能力的截屏库

该库基于 MediaDevice API 来提供了易于截屏的抽象。如果你有兴趣可以来看看 GitHub 仓库

> https://github.com/xataio/screenshot

📒 enum-xyz：使用 Proxy 实现 JavaScript 中的枚举

一个 js-weekly 的读者，分享的有趣实现思路。源码很短，推荐看一下

> https://github.com/chasefleming/enum-xyz

📒 [使用 React 和 Tailwind 创建阅读进度条](https://mp.weixin.qq.com/s/E82Kz14tnG4hRSmwZQmacQ)

📒 [React内部让人迷惑的性能优化策略](https://juejin.cn/post/7070395594379886629)

📒 [Nest.js 基于 Express 但也不是完全基于](https://juejin.cn/post/7070377945553977357)

📒 [如何用 Proxy 更优雅地处理异常](https://juejin.cn/post/7070120806214271012)

📒 [VuePress 博客优化之开启 Algolia 全文搜索](https://juejin.cn/post/7070109475419455519)

📒 Git 分支操作流程

在 Git Flow 中，有两个长期存在且不会被删除的分支：`master` 和 `develop`

- `master` 主要用于对外发布稳定的新版本，该分支时常保持着软件可以正常运行的状态，不允许开发者直接对 master 分支的代码进行修改和提交。当需要发布新版本时，将会与 `master` 分支进行合并，发布时将会附加版本编号的 Git 标签
- `develop` 则用来存放我们最新开发的代码，这个分支是我们开发过程中代码中心分支，这个分支也不允许开发者直接进行修改和提交。程序员要以 `develop` 分支为起点新建 `feature` 分支，在 `feature` 分支中进行新功能的开发或者代码的修正

> 注意 `develop` 合并的时候，不要使用 `fast-farward merge`，建议加上 `--no-ff` 参数，这样在 `master` 上就会有合并记录

除了这两个永久分支，还有三个临时分支：`feature branches`、`hotfixes` 以及 `release branches`

- `feature branches` 是特性分支，也叫功能分支。当你需要开发一个新的功能的时候，可以新建一个 `feature-xxx` 的分支，在里边开发新功能，开发完成后，将之并入 `develop` 分支中
- `hotfixes` 就是用来修复 BUG 的。当我们的项目上线后，发现有 BUG 需要修复，那么就从 `master` 上拉一个名为 `fixbug-xxx` 的分支，然后进行 BUG 修复，修复完成后，再将代码合并到 `master` 和 `develop` 两个分支中，然后删除 `hotfix` 分支
- `release branches` 是发版的时候拉的分支。当我们所有的功能做完之后，准备要将代码合并到 `master` 的时候，从 `develop` 上拉一个 `release-xxx` 分支出来，这个分支一般处理发版前的一些提交以及客户体验之后小 BUG 的修复（BUG 修复后也可以将之合并进 `develop`），不要在这个里边去开发功能，在预发布结束后，将该分支合并进 `develop` 以及 `master`，然后删除 `release`

![image](./git-flow.png)

📒 [大厂动态规划面试汇总，重量级干货，彻夜整理](https://mp.weixin.qq.com/s/-u7tnhD8YoOV9bkC62S6Pg)

⭐️ [通过几行 JS 就可以读取电脑上的所有数据？](https://mp.weixin.qq.com/s/1oDNxf5xHwlUUpJSVkqazg)

📒 [百行代码带你实现通过872条Promise/A+用例的Promise](https://mp.weixin.qq.com/s/A1uuU7DdBlUF-E6ZqlpOCw)

📒 [颜值爆表！Redis 官方可视化工具来啦，功能真心强大！](https://mp.weixin.qq.com/s/KIcn2TAwY58JGoWiz82Q2g)

📒 程序员开源月刊《HelloGitHub》第 71 期

**C 项目**

chibicc：迷你 C 编译器。虽然它只是一个玩具级的编译器，但是实现了大多数 C11 特性，而且能够成功编译几十万行的 C 语言项目，其中包括 Git、SQLite 等知名项目。而且它项目结构清晰、每次提交都是精心设计、代码容易理解，对编译器感兴趣的同学可以从第一个提交开始学习

> https://github.com/rui314/chibicc

**Go 项目**

nali：离线查询 IP 地理信息和 CDN 服务提供商的命令行工具

> https://github.com/zu1k/nali

revive：快速且易扩展的 Go 代码检查工具。它比 golint 更快、更灵活，深受广大 Go 开发者的喜爱

> https://github.com/mgechev/revive

go-chart：Go 原生图表库。支持折线图、柱状图、饼图等

> https://github.com/wcharczuk/go-chart

**Java 项目**

thingsboard：完全开源的物联网 IoT 平台。它使用行业的标准物联网协议 MQTT、CoAP 和 HTTP 连接设备，支持数据收集、处理、可视化和设备管理等功能。通过该项目可快速实现物联网平台搭建，从而成为众多大型企业的首选，行业覆盖电信、智慧城市、环境监测等

> https://github.com/thingsboard/thingsboard

from-java-to-kotlin：展示 Java 和 Kotlin 语法上差别的项目。让有 Java 基础的程序员可以快速上手 Kotlin

> https://github.com/MindorksOpenSource/from-java-to-kotlin

⭐️ ⭐️ [「React进阶」react-router v6 通关指南](https://juejin.cn/post/7069555976717729805)
