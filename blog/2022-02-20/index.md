---
slug: 2月20日内容汇总
title: 2月20日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 正则表达式如何实现千分位分隔符

实现如下的需求：

- 从后往前每三个数字前加一个逗号
- 开头不能加逗号

这样看起来非常符合 `(?=p)` 的规律，`p` 可以表示每三个数字，要添加逗号所处的位置正好是 `(?=p)` 匹配出来的位置。

第一步，先尝试把最后一个逗号弄出来：

```js
"300000000".replace(/(?=\d{3}$)/, ",")
// '300000,000'
```

第二步，把所有逗号都弄出来：

```js
"300000000".replace(/(?=(\d{3})+$)/g, ",")
// ',300,000,000'
```

> 使用括号把一个 `p` 模式变成一个整体

第三步，去掉首位的逗号：

```js
"300000000".replace(/(?!^)(?=(\d{3})+$)/g, ",")
// '300,000,000'
```

⭐️ [如何使用高阶函数编程提升代码的简洁性](https://juejin.cn/post/7065197280223035422)

📒 React Router v6 和私有路由 (也称作保护路由)

> https://www.robinwieruch.de/react-router-private-routes/

📒 React Router v6 的身份验证简介

在一个简单的示例应用程序中，通过 React Router v6 实现身份验证的实用演练。

> https://www.robinwieruch.de/react-router-authentication/

📒 Etsy 从 React 15.6 迁移到了 Preact （而不是 React 16）

在这篇 关于在 Etsy 更新 React 的文章中，对这个决定有一个完整的解释。但事实证明，拥有相同 API 的小型 React 替代品 Preact 是他们的正确选择。

> https://twitter.com/sangster/status/1486382892326563845

📒 Promise 两点总结

不建议在 `Promise` 里面使用 `try...catch`，这样即使 `Promise` 内部报错，状态仍然是 `fullfilled`，会进入 `then` 方法回调，不会进入 `catch` 方法回调。

```js
function request() {
  return new Promise((resolve, reject) => {
    try {
      // ...
      resolve("ok");
    } catch(e) {
      console.log(e);
    }
  })
}

request()
  .then(res => {
    console.log("请求结果：", res);
  })
  .catch(err => {
    // 由于在 Promise 中使用了 try...catch
    // 因此即使 Promise 内部报错，也不会被 catch 捕捉到
    console.log(err);
  })
```

> `Promise` 内部的异常，老老实实往外抛就行，让 `catch` 方法来处理，符合单一职责原则

不建议在 `async` 函数中，既不使用 `await`，也不使用 `return`，这样就算内部的 `Promise` reject 也无法捕捉到：

```js
async function handleFetchUser(userList) {
  // 这里既没有使用 await，也没有使用 return
  Promise.all(userList.map(u => request(u)));
}

handleFetchUser(userList)
  .then(res => {
    // 由于没有返回值，这里拿到的是 undefined
    console.log(res);
  })
  .catch(err => {
    // 即使 handleFetchUser 内部的 Promise reject
    // async 函数返回的 Promise 仍然是 fullfilled
    // 此时仍然会进入 then 方法回调，无法被 catch 捕捉到
    console.log(err);
  })
```

> 如果确实有这种需求，建议不要使用 `async` 函数，直接改用普通函数即可

📒 Rollup 配置

[前端组件/库打包利器rollup使用与配置实战](https://juejin.cn/post/6844903970469576718)

📒 Docker 使用，Gitlab CI 实践

[GitLab CI 从入门到实践](https://juejin.cn/post/7064906701941506061)

📒 总结一下 Babel 插件开发基本操作

> https://github.com/BoBoooooo/AST-Learning

📒 [记一次 Vue2 迁移 Vue3 的实践总结](https://juejin.cn/post/7064909191210598408)
