---
slug: 2月20日内容汇总
title: 2月20日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 一致性哈希算法解决的问题

- 大多数网站都是 **多节点部署**，需要根据不同场景使用不同的 **负载均衡策略**
- 最简单的算法就是使用 **加权轮询**，这种场景建立在每个节点存储的数据都是相同的前提下，访问任意一个节点都能得到结果
- 当我们想提高系统的容量，就会将数据水平切分到不同的节点来存储，也就是将数据分布到了不同的节点。加权轮询算法是无法应对「分布式系统」的，因为分布式系统中，每个节点存储的数据是不同的，不是说任意访问一个节点都可以得到缓存结果的
- 这种场景可以使用 **哈希算法**，对同一个关键字进行哈希计算，每次计算都是相同的值，这样就可以将某个 key 映射到一个节点了，可以满足分布式系统的负载均衡需求
- 哈希算法最简单的做法就是进行取模运算，比如分布式系统中有 3 个节点，基于 `hash(key) % 3` 公式对数据进行了映射，如果计算后得到的值是 0，就说明该 key 需要去第一个节点获取
- 但是哈希算法存在一个问题，如果 **节点数量发生了变化，也就是在对系统做扩容或者缩容时**，意味取模哈希函数中基数的变化，这样会导致 **大部分映射关系改变**，必须迁移改变了映射关系的数据，否则会出现查询不到数据的问题
- 假设总数据条数为 M，哈希算法在面对节点数量变化时，**最坏情况下所有数据都需要迁移，所以它的数据迁移规模是 O(M)**，这样数据的迁移成本太高了
- 一致性哈希算法就很好地解决了分布式系统在扩容或者缩容时，发生过多的数据迁移的问题

[微信一面：什么是一致性哈希？用在什么场景？解决了什么问题？](https://juejin.cn/post/7067012046256078885)

📒 前端项目 nginx 配置总结

有段时间没搞项目部署了，结果最近有同事在部署前端项目的时候，访问页面路由，响应都是 404，排查了半天，这里再总结一下。

前端单页应用路由分两种：哈希模式和历史模式。

哈希模式部署不会遇到啥问题，但是一般只用于本地调试，没人直接部署到生产环境。历史模式的路由跳转通过 `pushState` 和 `replaceState` 实现，不会触发浏览器刷新页面，不会给服务器发送请求，且会触发 `popState` 事件，因此可以实现纯前端路由。

需要注意，使用历史模式的时候，还是有两种情况会导致浏览器发送请求给服务器：

- 输入地址直接访问
- 刷新页面

在这两种情况下，如果当前地址不是根路径，因为都是前端路由，服务器端根本不存在对应的文件，则会直接导致服务器直接响应 404。因此需要在服务器端进行配置：

```nginx
server {
  listen 80;
  server_name www.bili98.com;
  location / {
    root /root/workspace/ruoyi-ui/dist;

    # history 模式重点就是这里
    try_files $uri $uri/ /index.html;
  }
}
```

:::tip

`try_files` 的作用就是按顺序检查文件是否存在，返回第一个找到的文件。`$uri` 是 nginx 提供的变量，指当前请求的 URI，不包括任何参数

当请求静态资源文件的时候，命中 `$uri` 规则；当请求页面路由的时候，命中 `/index.html` 规则

:::

此外，在部署的时候不使用根路径，例如希望通过这样的路径去访问 `/i/top.gif`，如果直接修改 `location` 发现还会响应 404：

```nginx
location /i/ {
  root /data/w3;
  try_files $uri $uri/ /index.html;
}
```

> 这是因为 `root` 是直接拼接 `root` + `location`，访问 `/i/top.gif`，实际会查找 `/data/w3/i/top.gif` 文件

这种情况下推荐使用 `alias`：

```nginx
location /i/ {
  alias /data/w3;
  try_files $uri $uri/ /index.html;
}
```

> `alias` 是用 `alias` 替换 `location` 中的路径，访问 `/i/top.gif`，实际会查找 `/data/w3/top.gif` 文件

现在页面部署成功了，但是接口请求会出错，这是因为还没有对接口请求进行代理，下面配置一下：

```nginx
location ^~ /prod-api/ {
	proxy_set_header Host $http_host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header REMOTE-HOST $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_pass http://192.168.31.101:8080/;
}
```

完整的 nginx 配置如下：

```nginx
server {
  listen 80;
  server_name www.bili98.com;

  location /ruoyi/ {
    # 支持 /ruoyi 子路径访问
    alias /root/workspace/ruoyi-ui/dist;

    # history 模式重点就是这里
    try_files $uri $uri/ /index.html;

    # html 文件不可设置强缓存，设置协商缓存即可
    add_header Cache-Control 'no-cache, must-revalidate, proxy-revalidate, max-age=0';
  }

  # 接口请求代理
  location ^~ /prod-api/ {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass http://192.168.31.101:8080/;
  }

  location ~* \.(?:css(\.map)?|js(\.map)?|gif|svg|jfif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
    # 静态资源设置一年强缓存
    add_header Cache-Control 'public, max-age=31536000';
  }
}
```

location 的匹配规则：

- `=` 表示精确匹配。只有请求的url路径与后面的字符串完全相等时，才会命中。
- `^~` 表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找。
- `~` 表示该规则是使用正则定义的，区分大小写。
- `~*` 表示该规则是使用正则定义的，不区分大小写。

nginx 的匹配优先顺序按照上面的顺序进行优先匹配，而且 **只要某一个匹配命中直接退出，不再进行往下的匹配**。

剩下的普通匹配会按照 **最长匹配长度优先级来匹配**，就是谁匹配的越多就用谁。

[前端到底用nginx来做啥](https://juejin.cn/post/7064378702779891749)

[一份简单够用的 Nginx Location 配置讲解](https://juejin.cn/post/7048952689601806366)

📒 [零基础理解 PostCSS 的主流程](https://mp.weixin.qq.com/s/Bkss0lzPT-TI6GyGxMyn3Q)

📒 [Jest + React Testing Library 单测总结](https://mp.weixin.qq.com/s/tQLG0HzR0bR_A8NLjTIChQ)

📒 [使用lerna管理monorepo及发npm包实战教程](https://mp.weixin.qq.com/s/UyvRTVWZDYnEBV9SL2Bbpg)

📒 [从源码中来，到业务中去，React性能优化终极指南](https://mp.weixin.qq.com/s/DswfPb6J1w2B_MWj1TjyOg)

📒 [React核心设计原理--（React Fiber）异步执行调度](https://mp.weixin.qq.com/s/AfCfqhZy70v6MrSVt5_8uw)

📒 如何在浏览器使用后端语言进行编程

你可能会认为这是关于使用 WebAssembly 在浏览器中运行 Python 之类的代码，但这并不是作者想分享的。作者提到的是通过服务端的 WebSocket 连接浏览器平台，由服务端处理 HTML 渲染更新到浏览器，这种方案日益流行，并且已经在 Elixir 和 Rails 全栈框架中支持。

> https://github.com/readme/featured/server-side-languages-for-front-end

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
