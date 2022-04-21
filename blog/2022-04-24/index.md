---
slug: 4月24日内容汇总
title: 4月24日内容汇总
authors: [garfield]
tags: []
---

📒 [2万字系统总结，带你实现 Linux 命令自由](https://juejin.cn/post/6938385978004340744)

📒 [还在手撸 Nginx 配置？试试这款可视化配置工具吧，真心强大](https://mp.weixin.qq.com/s/ebCRE9RXB66X0pe4lsX0tg)

📒 [esno，基于 Esbuild 的神器](https://mp.weixin.qq.com/s/3aVYGfahv5rZJbWBhaI3BA)

📒 [「React进阶」换个姿势看 hooks ！ 灵感来源组合和HOC 模式下逻辑视图分离新创意](https://juejin.cn/post/7088829366490120205)

📒 使用 CRA 5.0.1 搭建 React 项目

使用 CRA 搭建的项目，根组件使用了 `React.StrictMode` 包裹，在严格模式下会检测意外的副作用。严格模式不能自动检测到你的副作用，但它可以帮助你发现它们，使它们更具确定性。通过故意重复调用以下函数来实现的该操作：

- class 组件的 `constructor`，`render` 以及 `shouldComponentUpdate` 方法
- class 组件的生命周期方法 `getDerivedStateFromProps`
- 函数组件体
- 状态更新函数 (即 `setState` 的第一个参数）
- 函数组件通过使用 `useState`，`useMemo` 或者 `useReducer`

这会导致根组件及下面所有子组件都挂载两次（即使用了 `React.memo`），如果使用函数组件，且在组件内涉及接口请求，会导致接口调用两次。

📒 为什么需要 peerDependencies

例如开发一个 React 组件库的时候，有三个诉求：

- 该组件库开发的时候需要安装 React；
- 用户引入该组件库的时候不能重复安装 React；
- 组件库的 React 版本与目标环境不一致的时候需要被包管理器发现并打印警告；

如果安装到 dependencies 下，显然会导致重复安装；如果安装到 devDependencies 下虽然不会导致重复安装，但包管理器不会检查版本，当版本不一致的时候不会打印警告。所以 peerDependencies 是最优选择。

> 我们在老版本的 React 项目中引入一个高版本组件库的时候，也要留意 peerDependencies 的警告

⭐️ 什么是 JavaScript 的函数组合

本篇文章以一个简略的 Markdown 的例子为主线，讲述了什么是函数组合，以及如何使用函数组合的思想编写代码，是一篇非常不错的编程思想类文章。

> https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/

📒 [一些关于react的keep-alive功能相关知识在这里(下)](https://segmentfault.com/a/1190000041683421)

📒 [一些关于react的keep-alive功能相关知识在这里(上)](https://segmentfault.com/a/1190000041683300)

📒 [理清 HTTP 下的 TCP 流程，让你的 HTTP 水平更上一层](https://juejin.cn/post/7088417070009810981)

📒 React 18 系列

[React 18 全览](https://mp.weixin.qq.com/s/t3dYc3Md1dpiv1vaFa5plA)

[React 18 对 Hooks 的影响](https://mp.weixin.qq.com/s/fgT7Kxs_0feRx4TkBe6G5Q)

[React 的心智模型](https://mp.weixin.qq.com/s/GatHpP3BRLV_I48MfpzR4A)

[你不知道的 React v18 的任务调度机制](https://mp.weixin.qq.com/s/qyr6MnPtvnELDSbPJ2VtIw)

📒 [我帮一朋友重构了点代码，他直呼牛批，但基操勿六](https://juejin.cn/post/7085674288933502984)

📒 [React + TypeScript：如何处理常见事件](https://mp.weixin.qq.com/s/imxPGpN_EXq4St_EpcA2eg)

📒 [单例模式 4 种经典实现方法](https://mp.weixin.qq.com/s/Ua03qsLcrVURtxhSnuU_6w)

📒 如何实现 `useClickAway`

如何监听元素外的点击，类似 Vue 的 ClickOutSide 指令

> 官方文档：https://ahooks.js.org/hooks/use-click-away

> 源码：https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useClickAway/index.ts

📒 [快速理解 TypeScript 的逆变、协变](https://juejin.cn/post/7087906504308850701)

📒 [都 2022 年了，手动搭建 React 开发环境很难吗](https://juejin.cn/post/7087811040591675428)

📒 [这篇手写 Promise 你一定要康康](https://juejin.cn/post/7085298532365631501)

📒 [超全面的前端新一代构建工具对比: esbuild、Snowpack、Vite、wmr](https://mp.weixin.qq.com/s/JZbsIqsqNeJmc__QFKpo1Q)
