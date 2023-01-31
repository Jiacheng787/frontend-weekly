---
slug: 11月21日内容汇总
title: 11月21日内容汇总
authors: [garfield]
tags: [文档部署, Babel 插件, Vue, 语义化版本, 第三方库 lockfile, NPM 发包, git 小技巧]
---

📒 垂直居中小技巧

相对父元素绝对定位，先向下偏移父元素高度的 `50%` ，在向上移动自身高度的 `50%` ：

```css
.icon-common {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
```

📒 [Git 几点小知识技巧](https://juejin.cn/post/7030441979645263909)

📒 [工程化知识卡片 014: 发包篇之 package.json 中 main、export、module 的区别何在](https://juejin.cn/post/7025809061660590087)

📒 第三方库如何解决潜在的间接依赖不可控问题

`lockfile` 对于第三方库仍然必不可少，像 `react` 、`next.js` 、`webpack` 等均有 `yarn.lock` 。第三方库的 `devDependencies` 必须锁定，这样 Contributor 可根据 lockfile 很容易将项目跑起来。第三方库的 `dependencies` 有可能存在不可控问题，可参考 `next.js` 的解决方案：

1. 将依赖版本在 `package.json` 中锁死

	```javascript
	{
		"dependencies": {
			"@babel/runtime": "7.15.4",
			"@hapi/accept": "5.0.2",
			"@napi-rs/triples": "1.0.3"
		}
	}
	```

2. 将部分依赖直接编译后直接引入，而非通过依赖的方式；

📒 语义化版本

`semver`，`Semantic Versioning` 语义化版本的缩写，文档可见 semver.org/，它由 `[major, minor, patch]` 三部分组成，其中

- `major`: 当你发了一个含有 Breaking Change 的 API
- `minor`:  当你新增了一个向后兼容的功能时
- `patch`: 当你修复了一个向后兼容的 Bug 时

对于 `~1.2.3` 而言，它的版本号范围是 `>=1.2.3  <1.3.0`
对于 `^1.2.3` 而言，它的版本号范围是 `>=1.2.3  <2.0.0`

当我们 `npm i` 时，默认的版本号是 `^`，可最大限度地在向后兼容与新特性之间做取舍，但是有些库有可能不遵循该规则，我们在项目时应当使用 `yarn.lock/package-lock.json` 锁定版本号。

📒 Vue 3.2 响应式优化相关

`Object.defineProperty` 处理深度嵌套对象需要进行递归，而 `Proxy` 同样也只能监听当前层级的对象，如果深度嵌套也需要递归的，所以才有了 `reactive` 和 `shallowReactive` 。

之前看了黄轶老师写的 Vue3.2 响应式优化，`Proxy`  实际上比 `Object.defineProperty` 要慢，Vue 2.x 是直接在初始化阶段就进行深度递归，而 Vue3 的响应式优化就体现在只有访问对象属性的时候，再递归响应式，也就是延迟处理子对象，所以在初始化阶段性能较好。

📒 手把手实现一个 babel 插件

这篇做的 demo 是一个简单的 babel-plugin-import
[深入Babel，这一篇就够了](https://juejin.cn/post/6844903746804137991)

这篇做的 demo 类似 Java 中的 lambok
[保姆级教学！这次一定学会babel插件开发！](https://juejin.cn/post/7012424646247055390)

📒 [从 16 个方向逐步搭建基于 vue3 的前端架构](https://juejin.cn/post/7025524870842679310#heading-58)

📒 [VuePress + Travis CI + Github Pages 全自动上线文档](https://juejin.cn/post/6844903869558816781)
