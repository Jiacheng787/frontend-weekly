---
slug: 10月2日内容汇总
title: 10月2日内容汇总
authors: [garfield]
tags: []
---

📒 [你写 Go 代码写注释吗？谈谈 Go 代码注释问题](https://mp.weixin.qq.com/s/5ZDzcGqenAvtOeSU-baV9A)

📒 [程序员新人频繁使用count(*)，被组长批评后怒怼：性能并不拉垮！](https://mp.weixin.qq.com/s/eh7G_J3a0JudZRR-wrElag)

📒 [【第2745期】React 可组合 API 的设计原则](https://mp.weixin.qq.com/s/hW5VcbjpFCoGOp3BPsnAZQ)

📒 [推荐12个值得学习的TypeScript宝库！](https://mp.weixin.qq.com/s/7WVlgS5dqcgwJBB6-x0lYQ)

📒 [【第2744期】更好的 React SSR](https://mp.weixin.qq.com/s/3AVzctr8LwaFK9R_-x-uaA)

📒 [Java19 正式 GA！虚拟线程性能炸裂！！](https://mp.weixin.qq.com/s/hklnsSEmJG3Sgc6RezfJHA)

📒 [\[翻译\]Go 运行时的未来 Go Runtime: 4 years later](https://mp.weixin.qq.com/s/GWHfDXbTpaXKmeZVQRtF2w)

📒 [我认为 Go 的成功归功于这 5 个方面](https://mp.weixin.qq.com/s/HJ9183I_suybZCT7Seg75A)

⭐️ [给想转Go或者Go进阶同学的一些建议](https://juejin.cn/post/7147939014870302756)

📒 [【第2742期】Remesh 介绍：用以开发大型复杂 Web App 的 DDD 框架](https://mp.weixin.qq.com/s/Q-juege6Gn_H0xY4_OtR7Q)

📒 Monorepo Handbook 新鲜出炉

TurboRepo 团队近日发布了 Monorepo 手册，包含关于 Monorepo 你需要知道的一切，并提供了详尽的配置示例，内容如下：

- 什么是 Monorepo？
- 安装包 (npm、pnpm、Yarn 1、Yarn >=2)
- Workspaces 工作区
- 迁移到 Monorepo
- 任务编排
- 构建
- Docker 部署
- 共享代码
- Lint
- 测试
- 发布 (Changesets)
- @manypkg/cli 处理包版本依赖

https://turborepo.org/docs/handbook/what-is-a-monorepo

📒 [前端食堂技术周刊第 54 期：TS 4.9 Beta、Monorepo Handbook、第 92 次 TC39 会议、将 StoryBook Stories](https://juejin.cn/post/7147660762519961631)

📒 HTTPS 就一定安全？我不信

从客户端的角度看，其实并不知道网络中存在中间人服务器这个角色。

那么中间人就可以解开浏览器发起的 HTTPS 请求里的数据，也可以解开服务端响应给浏览器的 HTTPS 响应数据。相当于，中间人能够 “偷看” 浏览器与服务端之间的 HTTPS 请求和响应的数据。

但是要发生这种场景是有前提的，**前提是用户点击接受了中间人服务器的证书**。

中间人服务器与客户端在 TLS 握手过程中，实际上发送了自己伪造的证书给浏览器，而这个伪造的证书是能被浏览器（客户端）识别出是非法的，于是就会提醒用户该证书存在问题。

抓包工具 之所以可以明文看到 HTTPS 数据，工作原理与中间人一致的。

对于 HTTPS 连接来说，中间人要满足以下两点，才能实现真正的明文代理:

- 中间人，作为客户端与真实服务端建立连接这一步不会有问题，因为服务端不会校验客户端的身份；
- 中间人，作为服务端与真实客户端建立连接，这里会有客户端信任服务端的问题，也就是服务端必须有对应域名的私钥；

中间人要拿到私钥只能通过如下方式：

- 去网站服务端拿到私钥；
- 去CA处拿域名签发私钥；
- 自己签发证书，且被浏览器信任；

不用解释，抓包工具只能使用第三种方式取得中间人的身份。

使用抓包工具进行 HTTPS 抓包的时候，需要在客户端安装根证书，这里实际上起认证中心（CA）的作用。

我们要保证自己电脑的安全，不要被病毒乘虚而入，而且也不要点击任何证书非法的网站，这样 HTTPS 数据就不会被中间人截取到了。

当然，我们还可以通过 HTTPS 双向认证来避免这种问题。

一般我们的 HTTPS 是单向认证，客户端只会验证了服务端的身份，但是服务端并不会验证客户端的身份。

如果用了双向认证方式，不仅客户端会验证服务端的身份，而且服务端也会验证客户端的身份。

[HTTPS 就一定安全？我不信](https://mp.weixin.qq.com/s/nS1bMy2TejmGwEfCHPXy5A)

📒 tauri 快速上手

快速上手 3 命令。

```bash
$ npm create tauri-app
$ npm run tauri dev
$ npm run tauri build
```

> https://blog.logrocket.com/tauri-electron-comparison-migration-guide/

📒 新一波 JavaScript 框架

作者从 Web 之初、CGI、PHP 开始讲起，讲 JavaScript 历史画卷一幅幅展开，既有 Ajax、jQuery、Backbone、YUI 等一代代的 JavaScript 库前辈，又有 Astro、Fresh、Remix 等新一波的 JavaScript 框架。推荐阅读，从中可以了解为什么会有这些库和框架，以及他们都是为了解什么而生的？

所以，既然每个框架都会被历史所代替，前端开发者应该如何保持竞争力？

> https://frontendmastery.com/posts/the-new-wave-of-javascript-web-frameworks/

📒 TypeScript 4.9 satisfies

satisfies 是 TypeScript 4.9 新引入的操作符，用于只做校验但不改变表达式的类型结果。通常用于 Object 声明，因为既需要保留每个属性的类型，又需要做 key 值校验。

比如，

```ts
type Colors = 'red' | 'green' | 'blue';
const foo = {
  red: [1],
  green: true,
  blue: 'ok',
  black: {},
//~~~~~~~~~~ 既校验了 key，要求满足 Colors，这里的 black 会抛错
} satisfies Record<Colors, unknown>;

// 又让每个属性拥有完整类型
foo.red.at(0);
foo.blue.startsWith('o');
```

> https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/#the-satisfies-operator

📒 [Go语言中常见100问题-#11 Not using the functional options pattern](https://mp.weixin.qq.com/s/E4YJiDQbTapQGEfM8V0vJQ)

📒 [Go语言爱好者周刊：第 161 期](https://mp.weixin.qq.com/s/QBNSh2yn0RA1lZBdHcgz8w)
