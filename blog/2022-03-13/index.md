---
slug: 3月13日内容汇总
title: 3月13日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 Webpack 的模块规范

Webpack 基于 CJS 和 ESM 规范实现了模块机制，但也不是完全基于，而是在这些模块规范基础上扩展了一套自己的 api，用于增强功能，例如：

- `require.context`
- 使用 `import` 加载 `.json` 模块

> 在 ESM 规范中 `import` 只能用于加载 JS 模块，只有 `require` 可以加载 json 模块

📒 如何将对象序列化为查询字符串

```js
const aaa = {a: 1, b: 2, c: "2333"}
```

第一种手动拼接，简单直接，一行代码搞定：

```js
const _stringify =
  (obj) => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join("&");
```

还可以使用 `URLSearchParams` 对象进行拼接：

```js
const _stringify = obj => Object.entries(obj).reduce((accu, [key, val]) => {
  accu.append(key, val);
  return accu;
}, new URLSearchParams)
```

📒 [「深入浅出」主流前端框架更新批处理方式](https://juejin.cn/post/7072156913789566989)
