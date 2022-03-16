---
slug: 3月20日内容汇总
title: 3月20日内容汇总
authors: [garfield]
tags: [git, ESLint, Prettier, yaml, CSS, Vue3, JSON 序列化, Golang]
---

📒 [React内部的性能优化没有达到极致？](https://juejin.cn/post/7073692220313829407)

📒 reduce 方法注意事项

|          | 初始值非空                                    | 初始值为空                                        |
| -------- | --------------------------------------------- | ------------------------------------------------- |
| 数组非空 | 首次执行回调，accu 为初始值，cur 为数组第一项 | 首次执行回调，accu 为数组第一项，cur 为数组第二项 |
| 数组为空 | 不执行回调，直接返回初始值                    | 报错（建议任何情况下都传递初始值）                |

📒 npm 安装依赖默认添加 `^` 前缀，当再次执行 npm install 命令时，会自动安装这个包在此大版本下的最新版本。如果想要修改这个功能，可以执行以下命令：

```bash
$ npm config set save-prefix='~'
```

> 执行完该命令之后，就会把 `^` 符号改为 `~` 符号。当再次安装新模块时，就从只允许小版本的升级变成了只允许补丁包的升级

如果想要锁定当前的版本，可以执行以下命令：

```bash
$ npm config set save-exact true
```

> 这样每次 `npm install xxx --save` 时就会锁定依赖的版本号，相当于加了 `--save-exact` 参数。建议线上的应用都采用这种锁定版本号的方式

既然可以锁定依赖版本，为什么还需要 lcok-file 呢，个人理解锁定依赖只能锁定当前项目中的依赖版本，但是还存在间接依赖，即依赖还有依赖，直接锁定依赖版本无法解决间接依赖的问题，间接依赖版本还是不受控制，需要借助 lock-file 锁定间接依赖的版本。

📒 函数式编程三种形式：

- 函数赋值给变量
  - 可作为数组的元素，进而实现 compose 函数组合，或者管道操作
- 函数作为参数
  - 常见的有 `forEach` 、`Promise` 、`setTimeout` 等，React 技术栈也有很多 API
- 函数作为返回值

📒 [GitLab CI 打造一条自己的流水线](https://juejin.cn/post/7074780794459258917)

📒 type-challenges

type-challenges 是一个 TypeScript 类型体操姿势合集。本项目意在于让你更好的了解 TS 的类型系统，编写你自己的类型工具，或者只是单纯的享受挑战的乐趣！

> https://github.com/type-challenges/type-challenges
