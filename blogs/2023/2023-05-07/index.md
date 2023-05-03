---
slug: 5月7日内容汇总
title: 5月7日内容汇总
authors: [garfield]
tags: []
---

📒 [TypeScript 前端工程最佳实践](https://juejin.cn/post/7179791189812445244)

📒 2023年谈谈前端代码加密与混淆

为啥最近突然需要关注这个：

- Chrome 110 开始默认对源文件 pretty prints，降低用户调试难度（可以直接打断点）；
- 混淆压缩后的代码，即使 pretty prints 也需要对 Webpack 代码打包、Babel 转译、Terser 压缩非常熟悉，才能转换出源代码，对于普通开发者来说破解难度仍然很大。但是现在可以借助 AI 手段，AI 介入解释代码，加速代码反编译进程，源文件放入 chatgpt 进行释义，降低了破解难度。

[前端代码安全与混淆](https://juejin.cn/post/7220958805763522620)

https://developer.chrome.com/blog/new-in-devtools-110/

📒 相关文章汇总

强大的基于 Web 的 3D 框架 v6.0 版本发布 — Babylon.js 仍然是世界领先的基于 WebGL 的图形引擎之一，具有可视化场景构建器和最佳的基于物理的渲染。v6.0 版本包括具有大量文档和 演示 的 新物理插件、流体渲染、对 反射 处理的重大改进、屏幕阅读器支持 等等。这是 JavaScript 生态系统中一个重大发布，我们无法详细描述，但是在 官网 上有更多内容。

> https://doc.babylonjs.com/features/featuresDeepDive/physics/rigidBodies

事实证明，连任天堂也在使用 JavaScript。一位开发者发现，2015 年的 Wii U 和 3DS 上的 Mario vs. Donkey Kong: Tipping Stars 是用 HTML 和 JavaScript 作为底层编写的，他还设法构建了一个 shim，让它可以在正常的浏览器中运行。

> https://twitter.com/JasperRLZ/status/1648046875675856897

Chrome 113 的 DevTools 将允许你覆盖网络响应头，包括 CORS 头。它还提供 Nuxt、Vite 和 Rollup 调试改进。

> https://developer.chrome.com/blog/new-in-devtools-113/

从 webpack + babel 切换到 rspack，我们的构建时间减少了 85%。

> https://twitter.com/shawnrmcknight/status/1651275500118065175

探索 Web Workers 在网页多线程中的潜力 — 这篇文章探讨了 Web Workers 在浏览器中多线程的重要性，包括使用它们的局限性和考虑因素，以及缓解与它们相关的潜在问题的策略。

> https://www.smashingmagazine.com/2023/04/potential-web-workers-multithreading-web/

使用 Fuse.js 进行快速便捷的模糊搜索 — Fuse.js 是一个零依赖的模糊搜索库，您可以使用它在浏览器中提供搜索功能，而无需专门的面向搜索的后端。

> https://spin.atomicobject.com/2023/04/27/fuse-js-fuzzy-search/

在 React 中如何编写注释：好的、坏的和丑陋的风格 — `{/* 像这样编写注释 */}` 是在 JSX 中编写注释的常见方法，但还有另外两种方法你也应该知道。

> https://dmitripavlutin.com/react-comments/

React Router 6 的九小时探究 — 来自 Scrimba 的 Bob Ziroll 为我们呈现了一个基于 React Router 的应用程序的开发全过程，完整观看需要较长时间，但它是免费的。

> https://www.youtube.com/watch?v=nDGA3km5He4

Create React App 的现代替代方案 — create-react-app 曾经是构建单页 React 应用程序的首选工具，但是这篇文章介绍了现在常用的各种替代方案。（我们支持 Vite！）

> https://codingpastor.dev/goodbye-create-react-app-a-new-approach

使用 React Server Components 在博客上显示访问计数器 — 使用 React Server Components 在博客上显示访问计数器 — 听说过 React Server Components，但还没有机会尝试？这篇简明教程使用一个常见且易于理解的用例来试用 RSC。此外，它还让我们想起了 90 年代，这永远是一个好的氛围。

> https://scastiel.dev/view-counter-react-server-components

使用 Zustand 简化 React 状态管理 — Zustand 是一个简单且不冗长的 Redux 替代品，Niklas Ziermann 在 YouTube 上进行了全面介绍（75 分钟）。

> https://www.youtube.com/watch?v=fZPgBnL2x-Q

使用 Tauri 和 React 构建笔记应用程序 — Tauri 是一个基于 Rust 的框架，用于构建桌面应用程序。

> https://betterprogramming.pub/building-cross-platform-desktop-applications-with-tauri-part-ii-8d6ad1927093?gi=2e3c50c25e6c

使用 Rust 和 NAPI-RS 在 Node 中快速处理 CSV 文件 — NAPI-RS 是一个用于在 Rust 中构建预编译的 Node.js 插件的框架。本文探讨了如何将其用于实际用途，即能够以高性能处理 CSV 数据。

> https://www.alxolr.com/articles/how-to-process-a-csv-file-five-times-faster-in-node-js-with-rust-and-napi-rs

使用 Node 和 Connect 构建现代 gRPC 微服务 — 这篇有趣的教程深入探讨了 Dopt 工程师如何使用 Node 和 Connect 构建 gRPC 驱动的内部微服务。这是一篇基于真实的、生产级别的经验的教程。

> https://blog.dopt.com/building-a-modern-grpc-powered-microservice

剖析 npm 恶意软件：五个软件包及其邪恶的安装脚本 — npm 相关的安全问题仍然是一个大话题，而一个常见的安全漏洞是在安装包时运行的安装脚本。

> https://blog.sandworm.dev/dissecting-npm-malware-five-packages-and-their-evil-install-scripts
